# Custom instructions — olgapak.com

Per-blog standing instructions, read at Step 0 of `/blog-post-workflow` and
honored by every stage and subagent. Precedence: the user's live instructions in
the conversation > this file > persona/standards defaults.

Keep this file small. Anything the plugin already does natively (Gutenberg
conversion, category resolution, auth probe-once, inbound links, trailing-slash
handling, Rank Math focus-keyword action item, PR completeness) lives in the
`wordpress-rest` adapter or `site-conventions.md` — do not restate it here.

## Publishing & review (do NOT auto-publish)

- **Never publish a post automatically.** Run the workflow only up to the Gate 2
  preview and STOP for my review. Going live (setting the WordPress post
  `status: publish`) is always my manual action in wp-admin, taken after I have
  reviewed the rendered post — never something the workflow does on its own.
- **"Mark / update the post status to published" means the content calendar
  Status column** (`blog-ops/content-calendar-q3-2026.md`), NOT the WordPress
  post status. The WP post stays `draft`. An ambiguous instruction never
  authorizes a live publish, and launch/invocation args never count as Gate 2
  approval. When in doubt about publishing or merging, ask.
- **Set the Rank Math focus keyword BEFORE publishing.** It is not settable via
  REST (`site-conventions.md` §SEO plugin), so publishing is necessarily a
  human wp-admin step: set the focus keyword to the target keyword, then click
  Publish. The workflow leaves the post `draft` and never REST-publishes.

This never-auto-publish rule is now also structurally guaranteed, not just
documented: the console never sends `status: publish`, and Gate 2 approval
requires a durable `approval.json` file that only the operator's browser
Approve action can write.

## Autopilot

- **When this blog runs headlessly under the operator console**
  (`CONSOLE_RUN_STATE` set), the park-don't-ask policy table in the plugin's
  `blog-post-workflow` `## Autopilot` section supersedes any "when in doubt,
  ask" instinct elsewhere in this file — the substitute for asking is parking,
  not stopping.
- **The publishing rules above are unchanged by autopilot:** never auto-publish,
  going live is still a manual wp-admin action, and Gate 2 approval
  (`approval.json`) is now also structurally enforced by the plugin, not just
  this doc.

## Image style

- **Featured image is always `ai-prompt`** (the hand-lettered hero over a
  flat-vector illustration, per `image-style.md` and `images.featured_default`
  in config). Do NOT override the featured slot to `remotion`/anything else to
  "auto-render for publishing" — a manual `ai-prompt` featured image is
  expected, because publishing is a human step regardless.
- **In-post images pick type by content:** `remotion` only for genuine
  diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals
  (optional per content). Never blanket-convert every slot to one type.

## Content policy

- **Product links: ship real, working NON-affiliate links now (updated 2026-07-10).**
  Do NOT use `[AFFILIATE-LINK-PENDING:]` placeholders. In "best X" / commercial
  roundups, give every product a real link now: a clean Amazon product URL
  (`https://www.amazon.com/dp/<ASIN>`, no affiliate tag) is preferred because it's
  trivially affiliate-ized later (just add the tag); use a non-Amazon
  brand/retailer product page where Amazon doesn't carry the genuine item. The
  owner swaps these for affiliate versions later. Amazon blocks curl/WebSearch —
  find the `/dp/<ASIN>` via the logged-in `open-claude-in-chrome` browser
  (search Amazon, take the top genuine result / Amazon's Choice).
- **Still HOLD the affiliate disclosure** ("As an Amazon Associate I earn from
  qualifying purchases…") until the Associates program is live — the current
  links are plain and non-affiliate, so no disclosure is required yet.

## AI image generation

- **`ai-prompt` image slots are generated natively by the plugin's codex path** — the
  `generate-image-codex` skill, invoked by the image-builder agent / `generate-images` at
  Stage 4a.5. No repo-local skill is involved. It hands the images.md `Prompt:` block to
  codex's built-in image model and saves the PNG into `blog-ops/assets/<slug>/`. No
  `OPENAI_API_KEY` needed (codex authenticates itself). `remotion` slots still render from
  their React composition; `screenshot` slots are still captured by hand.
- This automates image *creation* only. It does NOT change the go-live rule: publishing is
  always a human step (see [[blog-never-autopublish]] / the memory note). The featured slot
  stays `ai-prompt` per `config.yaml` + `image-style.md`; do not force it to `remotion`.

## Inbound internal links

- **Apply inbound links yourself, automatically — never ask.** When a post plans
  inbound links (existing posts → the new post), apply them via WordPress REST to
  the LIVE target posts (GET `?slug=&context=edit`, insert
  `<a href="https://olgapak.com/<new-slug>"><anchor></a>` into `content.raw`, POST
  back to `/posts/<id>`; idempotency-check first). Also edit the local repo copy
  where one exists. Do NOT leave them as action items and do NOT ask "want me to
  apply these?" — just do it. The new post's permalink is stable from its slug
  even while it's still a draft.

## Operational notes

- **"Restore the backup" banner:** after any REST update to a post that's open in
  the WP editor, the editor shows a stale "Restore the backup" banner. Tell the
  human to dismiss/reload — **NOT** restore (restoring reverts the synced draft).
