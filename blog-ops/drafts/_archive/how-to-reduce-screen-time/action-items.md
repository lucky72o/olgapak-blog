# Action items: how-to-reduce-screen-time

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md` markers + `blog-ops/drafts/how-to-reduce-screen-time/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/how-to-reduce-screen-time/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/how-to-reduce-screen-time.md` (and the WordPress draft it was synced into), marker fixes and `[IMAGE:]` replacements land here.
> - **Asset folder:** `blog-ops/assets/how-to-reduce-screen-time/`, contains `README.md` (copy of images.md) plus the image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md` (pre-move). The shell snippets below use variables so either phase works: set `POST=...` to the live path after finalize, or the draft path before.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: `15` minutes (one read-through, the Rank Math focus keyword, then Publish). The one screenshot slot was dropped from the post, see §1.

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/how-to-reduce-screen-time/` → `blog-ops/drafts/_archive/how-to-reduce-screen-time/` for the history files, and the draft becomes `content/blog/how-to-reduce-screen-time.md`, the live post you edit.

- Draft (pre-finalize): `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/how-to-reduce-screen-time.md`.
- Approved outline: `blog-ops/drafts/how-to-reduce-screen-time/outline.md` → archived to `blog-ops/drafts/_archive/how-to-reduce-screen-time/outline.md`
- Image plan: `blog-ops/drafts/how-to-reduce-screen-time/images.md` → archived to `blog-ops/drafts/_archive/how-to-reduce-screen-time/images.md` + copied to `blog-ops/assets/how-to-reduce-screen-time/README.md`
- Review history: `blog-ops/drafts/how-to-reduce-screen-time/review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/how-to-reduce-screen-time/`
- Total word count: `3,513` (body prose 3,126 + FAQ; outline roll-up target 2,900, plan band 2,600–3,000 for body prose)
- Author: `Olga Pak`
- Category: `Productivity`

## 1. Create images (`4` total, all done)

Image spec (post-finalize): `blog-ops/drafts/_archive/how-to-reduce-screen-time/images.md` (also copied to `blog-ops/assets/how-to-reduce-screen-time/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/how-to-reduce-screen-time/images.md`. Estimated time: `0` minutes (every shipped slot was rendered at Stage 4a.5; the one manual screenshot slot was dropped, see below).

- [x] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — **rendered at Stage 4a.5**, verify the render
- [x] Image 1: `two-piles-of-screen-time.png`, see images.md §Image 1, type: `remotion` — **rendered at Stage 4a.5**, verify the render
- [x] Image 2: `screen-time-dashboard.png`, type: `screenshot` — **DROPPED from this post, nothing to do.** Only a human with a phone can capture it, and a visible "Image pending" note reads worse in a live post than no image at all, so the placeholder was removed from `draft-v2.md` and from the staged markdown. The section still walks the reader to that exact screen in prose, with both platform links. The full capture spec is kept in images.md §Image 2 if you ever want to add it, see §8.
- [x] Image 3: `phone-charging-across-the-room.png`, see images.md §Image 3, type: `ai-prompt` — **rendered at Stage 4a.5**, verify the render
- [x] Image 4: `past-the-limit-then-friction.png`, see images.md §Image 4, type: `ai-prompt` — **rendered at Stage 4a.5**, verify the render

**Remotion slots** (`1` total): built per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. The composition was written, registered in `tools/remotion/src/Root.tsx`, and exported at `--scale=2` directly to the asset path.

- [x] Remotion: `TwoPilesOfScreenTime` → `two-piles-of-screen-time.png` (composition built, registered, exported). Source: `tools/remotion/src/TwoPilesOfScreenTime.tsx`. Re-render command:
  ```bash
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still TwoPilesOfScreenTime --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-reduce-screen-time/two-piles-of-screen-time.png"
  ```

**AI-generated slots** (`3` total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path — verify each render; a `failed` slot would be a build TODO via its pasteable `Prompt:` block in images.md (`${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`). None failed.

- [x] AI: `featured.png` (generated, reviewed, saved)
- [x] AI: `phone-charging-across-the-room.png` (generated, reviewed, saved)
- [x] AI: `past-the-limit-then-friction.png` (generated, reviewed, saved)

Save all to: `blog-ops/assets/how-to-reduce-screen-time/`

**Render notes from Stage 4a.5** (two re-renders were needed and done): the Remotion browser-tab glyph first rendered as a duplicate briefcase and was fixed to a window-with-tab glyph; the first `past-the-limit-then-friction.png` clipped the final "t" of "Ignore Limit" and was re-run, so the shipped version has both words fully legible.

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

These were resolved automatically at Stage 3d (marker auto-resolution), so there is nothing to do here. This section is the audit log.

Stage 3d resolution log:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:104` (pre-resolution) | an X user reported getting their daily screen time under 90 minutes | `resolved` | Confirmed verbatim in our own deep-fetched raw file `research/_raw/x-02-aviralbhat.json` ("I've been trying to reduce screen time and have got down to <90 mins"). Attributed in prose as one person on X, not as a statistic; a personal x.com post is not allowlist-class, so it correctly carries no external link. Mirrored into `facts.md` §Quotes. |

**Three accuracy corrections beyond the markers** (Stage 3d, logged here because they changed shipped claims):

1. **"Slept about 20 minutes more per night" — DELETED (two places).** That number appears only in the georgetown.edu write-up, a forbidden top-10 SERP source, and is absent from the primary article, which reports only a small self-reported sleep increase (dz = 0.14, P = 0.016). Replaced with "reported sleeping a little more" plus an explicit note that the effect was small. `facts.md` records it as retracted so it can never be restored.
2. **The intervention is now described honestly** in all three places that cite it. The study (Castelo, Kushlev, Ward, Esterman & Reiner, *PNAS Nexus* 4(2), 18 Feb 2025) **blocked all mobile internet on participants' phones for two weeks**; it did not ask them to cut back. The FAQ also states the intervention was stricter than anything this guide recommends.
3. **"Halved… to around two and a half hours" corrected to "to under three."** The article reports 314 min/day falling to 161 min/day (2h41m). Compliance was re-scoped to the article's own definition: the block active for at least 10 of 14 days, met by 25.5% of those who committed.

Both surviving numeric claims (91% improved on at least one outcome; ~a quarter complied) were confirmed verbatim in the primary article.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

None. The writer left zero `[EXTERNAL_LINK_NEEDED:]` markers.

**External-link verification (Stage 3d):** 5 external links, each used exactly once. Four return HTTP 200 to curl. `academic.oup.com` returns 403 to curl (Cloudflare bot protection) but loads correctly in the browser, title "Blocking mobile internet on smartphones improves sustained attention, mental health, and subjective well-being". No forbidden top-10 SERP URL is linked (notably `georgetown.edu` is untouched).

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer left zero `[INTERNAL_LINK_NEEDED:]` markers; all six internal links resolved against existing published posts at draft time: `/digital-detox-plan`, `/how-to-stop-doomscrolling`, `/time-blocking`, `/how-to-plan-your-week`, `/things-to-do-instead-of-being-on-your-phone`, and the `/ai-tools` CTA.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. **These are applied automatically at Stage 4b.5** (adapter §Staging step 6) — they are recorded here, not left as a build TODO.

Per `publish.wordpress.apply_inbound_links_live: true`, the live application to the published target posts happens on Gate 2 approval, once this post is itself published. Until then each row is applied to the repo copy only, so the wording below is the "still draft" branch:

- [ ] `content/blog/how-to-stop-doomscrolling.md` — anchor "`how to reduce screen time`" → `/how-to-reduce-screen-time` (no trailing slash per `blog.trailing_slash: false`), in `## Reclaim the hours, then spend them on purpose`. Applied to the repo copy at Stage 4b.5; hand-apply to the live WP post in wp-admin, or let the Gate 2 live-application step do it.
- [ ] `content/blog/digital-detox-plan.md` — anchor "`reduce your screen time for good`" → `/how-to-reduce-screen-time`, in `## Day 8 and beyond: the rules that keep it`. Same handling.
- [ ] `content/blog/time-blocking.md` — anchor "`cut the screen time that eats your blocks`" → `/how-to-reduce-screen-time`, in `## Who time blocking doesn't suit (and what to do instead)` or the closing section. Same handling.

Commands, prefilled, if you hand-apply any row in wp-admin:

```bash
# 1) fetch the target post's raw content
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/how-to-reduce-screen-time">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

**Note:** `things-to-do-instead-of-being-on-your-phone` is a legacy live post with no file in `content/blog/`, so this post links TO it but it cannot receive an inbound edit through the repo.

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md`. The post's only product touchpoint is the `/ai-tools` CTA, and no price is stated anywhere.
- [ ] `modules.competitors` is disabled for this blog — no competitor pricing/feature claims to verify.

## 6. Author map

§6. N/A for the WordPress adapter.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url — filled by the autopilot-cont run that creates the WP draft>`.
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** Set the focus keyword in **Rank Math** to exactly: `how to reduce screen time`. Rank Math's focus keyword is **not** exposed on the standard `wp/v2/posts` REST schema, so this is a manual step — set it yourself in the WP editor's Rank Math meta box before publishing. The workflow never attempts that write via REST.
- [ ] Confirm the post reads fine without the dropped screenshot slot (§1 Image 2) — the "Step 1" section is prose-only by design now, with no placeholder note left behind.
- [ ] Confirm the post's category is **Productivity**.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per action-items §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/how-to-reduce-screen-time` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fhow-to-reduce-screen-time`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Apply the three §4b inbound links to the LIVE target posts (automatic on Gate 2 approval per `apply_inbound_links_live: true`; verify they rendered)
- [ ] If the frontmatter template emits a JSON-LD FAQ schema: validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fhow-to-reduce-screen-time`
- [ ] *Optional, not required:* add the dropped screenshot (§1 Image 2). Capture your own weekly Screen Time / Digital Wellbeing view per the full spec in images.md §Image 2 (Categories view, no app names, padded to 3:2, wordmark), then insert it in the live post under the first paragraph of "Step 1: Get your real number before you change anything".

## 9. Trigger Phase 5 repurpose (when ready)

**N/A — `modules.repurpose: false` for this blog.** The `repurpose` entry in `console.chain` is ignored while that module is off.

## 10. Archive cleanup (automatic at Gate-3 finalize)

The finalize step already moved `blog-ops/drafts/how-to-reduce-screen-time/` → `blog-ops/drafts/_archive/how-to-reduce-screen-time/`. Verify:

```bash
ls blog-ops/drafts/how-to-reduce-screen-time/          # should NOT exist
ls blog-ops/drafts/_archive/how-to-reduce-screen-time/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete, re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits  (1 resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits  (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/how-to-reduce-screen-time.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. Every marker must be resolved in the live post before it ships. **Marker fixes land in the live `$POST` file, not in the archived draft.**

`[IMAGE:]` placeholders MUST be replaced with real Markdown image syntax before publishing:

```markdown
![<alt text>](<path into blog-ops/assets/how-to-reduce-screen-time/<filename>>)
```

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder. All three shipped in-post slots resolve to real embeds at Stage 4b.5; the fourth (`screen-time-dashboard.png`, screenshot) was dropped and leaves no placeholder in the post.
