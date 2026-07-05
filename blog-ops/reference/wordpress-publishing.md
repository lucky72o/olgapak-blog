# WordPress publishing recipe (olgapak.com)

**When to use:** every time a blog post is staged/created on WordPress for this
blog — the blogsmith `wordpress-rest` adapter's Stage 4b.5, or any manual WP
post. Follow this exactly; do NOT just POST raw HTML (see the WHY below).

## Why this doc exists (two lessons learned 2026-07-04)

1. **Raw HTML → one broken "Classic" block.** The default blogsmith adapter
   posts the body as raw HTML into the WP REST `content` field. WordPress wraps
   that as a single legacy "Classic" block, so the post loses all native block
   styling (paragraph spacing, heading typography, image framing, TOC-plugin
   heading detection) and looks broken next to real posts. **Always convert to
   Gutenberg block markup first** (see step 4).
2. **Auth-lockout hazard.** Claude Code's Bash runs on the user's Mac, so WP
   auth attempts come from the USER'S IP. Repeated failed `wp-json` auth calls
   trip a WPX/security-plugin login lockout (HTTP 401 `rest_not_logged_in`) that
   then blocks even the CORRECT credential — for the user's own terminal too —
   and **retrying EXTENDS the lockout** (sliding window). RULE: probe auth at
   most ONCE; on failure STOP and wait (or have the user clear the lockout in
   their security dashboard). Never retry-hammer or background-poll WP auth.

## Credentials & endpoint

- Base: `https://olgapak.com/wp-json/wp/v2`
- User: `wpx_admin101`; password in env `WP_APP_PASSWORD` (lives in `~/.zshrc`,
  so `source ~/.zshrc` in a fresh non-interactive shell). HTTP Basic auth.
  **Never inline or print the secret** — use `-u "wpx_admin101:$WP_APP_PASSWORD"`.
- Posts are always created/left as `status: draft`. The workflow NEVER publishes;
  the human clicks Publish in WP admin.

## Steps (idempotent; safe to re-run)

Let `SLUG`, `A=blog-ops/assets/$SLUG`, `D=blog-ops/drafts/$SLUG`, `AUTH="-u wpx_admin101:$WP_APP_PASSWORD"`, `WP=https://olgapak.com/wp-json/wp/v2`.

1. **Finalize markdown** at `content/blog/$SLUG.md`: embed `[IMAGE:]` as
   `![alt](../../blog-ops/assets/$SLUG/<file>)`, strip `draft: true`.
   (blogsmith Stage 4b.5 does this.)
2. **Single auth probe** (STOP hard on non-200 — do not retry):
   `curl -sf $AUTH "$WP/users/me" >/dev/null`
3. **Upload media.** For each file in `$A/` (featured + in-post):
   `curl -sf $AUTH -F "file=@$A/<file>" "$WP/media"` → capture `.id` + `.source_url`
   into `$D/_media_map.tsv` (rows: `<file>\t<id>\t<source_url>`).
   `featured.png`'s id becomes `featured_media`.
4. **Convert markdown → Gutenberg blocks (REQUIRED):**
   `python3 blog-ops/reference/md-to-gutenberg.py content/blog/$SLUG.md $D/_media_map.tsv > $D/$SLUG.blocks.html`
   This emits `wp:paragraph` / `wp:heading` / `wp:list` / `wp:image` blocks
   (images point at the uploaded `source_url`s) AND inserts a **Kadence Table of
   Contents block** (`wp:kadence/tableofcontents`, dynamic — auto-builds from
   H2/H3) before the first heading, matching this blog's style. It also strips
   any `[AFFILIATE_PLACEHOLDER:]` token.
5. **Resolve tags AND category → term IDs.**
   - Tags: `GET $WP/tags?search=<name>` → `.id`; if empty, `POST $WP/tags {"name":"<name>"}`. Author defaults to the authenticated user.
   - **Category (REQUIRED — never leave a post on `Uncategorized`, id 1).** Resolve
     by name: `GET $WP/categories?search=<name>` → `.id`. Current category IDs
     (verify with `GET $WP/categories?per_page=100&_fields=id,name`): Productivity=12,
     EdTech=9, Artificial Intelligence=10, AI Assistants=11, Marketing=4, Humor=21.
     **Pick to match sibling posts in the same cluster** (check a sibling's
     `categories` via `GET $WP/posts?slug=<sibling>&_fields=categories`). Convention
     observed: note-taking / study-method how-to guides → `[12, 9]` (Productivity +
     EdTech); general productivity posts → `[12]`; AI posts → `[10]`/`[11]`.
6. **Create the draft (lookup-before-create).** First `GET $WP/posts?slug=$SLUG&status=draft`;
   if a draft exists, UPDATE it (step 7) instead of creating a duplicate. Else:
   build the body safely with jq (title/HTML contain quotes/newlines) — include `categories`:
   `jq -n --arg slug "$SLUG" --arg t "<title>" --arg e "<excerpt>" --rawfile c "$D/$SLUG.blocks.html" --argjson id <featured_id> --argjson tags <tagids> --argjson cats <catids> '{slug:$slug,title:$t,status:"draft",excerpt:$e,content:$c,featured_media:$id,tags:$tags,categories:$cats}'`
   → `POST $WP/posts -d @-`. Capture `wp_post_id`, and set `wp_preview_url` =
   `https://olgapak.com/wp-admin/post.php?post=<id>&action=edit`.
7. **Update / re-sync** (review-loop edits, or re-running the converter):
   `POST $WP/posts/<wp_post_id> -d @-` with `{content:<blocks>,status:"draft"}` —
   SAME post, never a second create.
8. Record `wp_post_id`, `wp_media_ids[]`, `wp_preview_url`, `wp_upload: ok` in
   `$D/pr-monitor.json`.

## After any API update

The user's already-open WP editor will show a yellow **"The backup of this post
in your browser is different… Restore the backup"** banner. That backup is a
stale autosave of the PRE-update version. Tell the user to **dismiss it (✕) or
reload — do NOT click "Restore the backup"** (that reverts the API update).

## Inbound internal links — ALWAYS add for a new post

Every new post should be pointed to by 2–4 existing related posts (the outline's
"Inbound internal links" plan). Because this blog's back-catalogue lives only on
WordPress (not as local markdown in the repo), apply these to the LIVE posts via
REST — do NOT skip them:

1. Identify each target existing post's id: `GET $WP/posts?slug=<existing-slug>&_fields=id`.
2. Fetch its raw content: `GET $WP/posts/<id>?context=edit&_fields=content` → `.content.raw`.
3. Insert a **root-relative** anchor `<a href="/<new-slug>/">…</a>` into a
   contextually relevant existing paragraph (extend a sentence about the topic;
   don't bolt on a "see also"). Keep every other block byte-identical.
4. Update: `POST $WP/posts/<id>` with `{content:<edited raw>}` (status unchanged —
   these are already published; you're only adding a link).
5. Verify the anchor is present and the rest of the content is unchanged.

Idempotency: before inserting, grep the raw content for `/<new-slug>/`; if already
present, skip (don't double-link).

## Rank Math focus keyword (MANUAL — editor UI, not REST)

Rank Math's focus keyword is NOT settable via REST (the `rankmath/v1` namespace has
no post-meta route, and the `/posts` `meta` field rejects `rank_math_focus_keyword`).
Set it in the editor: open the post → click the Rank Math SEO-score badge in the
top toolbar → type the post's **target keyword** into the **Focus Keyword** field →
press Esc to dismiss the suggestions dropdown → **Save draft**. The SEO score should
jump to green (~80+). (Optionally tick "This post is Pillar Content" for pillar
posts.) The blog owner may do this step by hand; if so, just tell them the exact
focus keyword to enter (= the post's target keyword).

**After the editor save, re-verify content integrity via REST** (the Gutenberg save
re-serializes the post): confirm the `wp:kadence/tableofcontents`, heading, image,
and paragraph block counts are unchanged and there's no `wp:freeform`/`wp:html`
leakage; re-POST the blocks if anything regressed.

## References

- Converter: `blog-ops/reference/md-to-gutenberg.py`
- Well-structured example post (Kadence TOC + native blocks): WP post id **1321**.
- Blogsmith adapter this augments: `adapters/publish/wordpress-rest.md`
  (its v1 "raw HTML Classic block" default is what this recipe replaces).
