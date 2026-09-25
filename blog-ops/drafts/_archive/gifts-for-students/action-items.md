# Action items: gifts-for-students

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/gifts-for-students/draft-v2.md` markers + `blog-ops/drafts/gifts-for-students/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/gifts-for-students/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/gifts-for-students.md` (and the WordPress draft created by `autopilot-cont`), marker fixes, `[IMAGE:]` replacements, `[VERIFY:]` resolutions all land here.
> - **Asset folder:** `blog-ops/assets/gifts-for-students/`, contains `README.md` (copy of images.md) plus the image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/gifts-for-students/draft-v2.md` (pre-move). The shell snippets below use variables so either phase works: set `POST=...` to the live path after finalize, or the draft path before.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: `35` minutes (most of it is the US Amazon availability check in §5).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/gifts-for-students/` → `blog-ops/drafts/_archive/gifts-for-students/` for the history files, and the draft becomes `content/blog/gifts-for-students.md` (plus the WordPress draft), the live post you edit.

- Draft (pre-finalize): `blog-ops/drafts/gifts-for-students/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/gifts-for-students.md`.
- Approved outline: `blog-ops/drafts/gifts-for-students/outline.md` → archived to `blog-ops/drafts/_archive/gifts-for-students/outline.md`
- Image plan: `blog-ops/drafts/gifts-for-students/images.md` → archived to `blog-ops/drafts/_archive/gifts-for-students/images.md` + copied to `blog-ops/assets/gifts-for-students/README.md`
- Review history: `blog-ops/drafts/gifts-for-students/review.md` (iteration 2, approve) + `review-v1.md` (iteration 1, request_revisions) → archived to `blog-ops/drafts/_archive/gifts-for-students/`
- Total word count: `2,620` body prose (intro through CTA, reviewer basis), FAQ `385`, `3,388` whole file
- Author: `olga`

## 1. Create images (`5` total)

Image spec (post-finalize): `blog-ops/drafts/_archive/gifts-for-students/images.md` (also copied to `blog-ops/assets/gifts-for-students/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/gifts-for-students/images.md`. Estimated time: `10` minutes (review the renders; all 5 slots are file-producing).

All 5 slots were rendered automatically at Stage 4a.5 (manifest: rendered 5, failed 0, screenshot_pending 0, prompt_pending 0, halt false). The editor opened every file on 2026-09-13 and found no visual defects (no overlap, clipping, stray glyphs, or unreadable labels; exact title text on the featured image; warm palettes with brand blue as an accent only; olgapak.com watermark present). Your job is a quick look, not a build.

- [ ] Featured image: `featured.png` (1536x1024), see images.md §Featured, type: `ai-prompt` (split-contrast: forgotten gift in a drawer vs the same gift in use; pistachio background; title "Best Gifts for Students: 15 Picks They'll Actually Use" with "Actually" in red)
- [ ] Image 1: `paper-or-screen-gift-decision.png` (3600x2400), see images.md §Image 1, type: `remotion`
- [ ] Image 2: `handwriting-study-gifts-flat-lay.png` (1536x1024), see images.md §Image 2, type: `ai-prompt`
- [ ] Image 3: `ipad-stylus-note-taking-desk.png` (1536x1024), see images.md §Image 3, type: `ai-prompt`
- [ ] Image 4: `calm-focus-study-corner.png` (1536x1024), see images.md §Image 4, type: `ai-prompt`

**Remotion slots** (`1` total): built per `adapters/images/remotion.md` and already exported.

- [ ] Remotion: `PaperOrScreenGiftDecision` → `paper-or-screen-gift-decision.png` (source `tools/remotion/src/PaperOrScreenGiftDecision.tsx`, registered in `tools/remotion/src/Root.tsx`, rendered at `--scale=2`; re-render with `cd tools/remotion && npx remotion still PaperOrScreenGiftDecision --scale=2 --output=../../blog-ops/assets/gifts-for-students/paper-or-screen-gift-decision.png`)

**AI-generated slots** (`4` total, `ai-prompt`): rendered automatically at Stage 4a.5 via codex. Verify each render; if you want a different take, the pasteable `Prompt:` block for each slot is in images.md.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `handwriting-study-gifts-flat-lay.png` (generated, reviewed, saved)
- [ ] AI: `ipad-stylus-note-taking-desk.png` (generated, reviewed, saved)
- [ ] AI: `calm-focus-study-corner.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/gifts-for-students/`

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

These were resolved automatically at Stage 3d (marker auto-resolution), so there is normally nothing to do here. This section is the audit log of what the editor did, plus any residual that was deliberately left for you.

Stage 3d resolution log (one row per marker the writer left):

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:102` | Rocketbook pages wipe clean with a bit of water and a towel, only erase with a Pilot FriXion or BIC Illusion erasable gel pen, and the app sends scans to a cloud destination such as Google Drive, OneNote, or Dropbox | `resolved` | https://getrocketbook.com/pages/how-rocketbook-works (manufacturer page, read 2026-09-13; facts.md §Named examples). Marker removed, prose unchanged: it already stated the verified scope, and the pick's "Skip it if" bullet carries the erasable-pen limit. No new link. |
| 2 | `draft-v2.md:223` | BenQ ScreenBar mounts on monitors, not laptop screens | `resolved` | https://www.benq.com/en-us/lighting/monitor-light/screenbar.html (manufacturer page: clamp fits monitors 0.4" to 1.2" thick; read 2026-09-13). Marker replaced with "(it clamps onto the top of a monitor)". No new link. |

Outcome key:
- `resolved`, marker replaced with the confirmed claim + an allowlist/primary citation. Nothing to do.
- `kept-general`, claim was true-in-spirit but not citable as stated; rewritten to a defensible general version, marker dropped. Nothing to do.
- `deleted`, claim could not be confirmed from any allowlist/primary source; the minimal span was removed (the removed text is logged). Skim the surrounding paragraph if you want to confirm it still reads well.

Residual `[VERIFY:]` markers in the draft: none.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

Same as §2: Stage 3d either linked the claim to an allowlist/primary source or (if no source existed) deleted the claim. This is the audit log.

None. The writer left no `[EXTERNAL_LINK_NEEDED:]` markers.

Related link-health fix (not a marker): the Castelo et al. (PNAS Nexus, 2025) citation in the kSafe pick points to the open-access NIH PubMed Central copy, https://pmc.ncbi.nlm.nih.gov/articles/PMC11834938/ (HTTP 200), because the publisher URL on academic.oup.com returns 403 to automated link checks. Same article; every quoted figure was confirmed on the PMC page. All 5 external citations and all internal links returned HTTP 200 on 2026-09-13.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

Internal links where the outline's existing-posts table didn't offer a fit. Insert as a root-relative link such as `[anchor](/best-pens-for-note-taking)` (no trailing slash on this blog), never `https://olgapak.com/...`.

`0` markers:

None.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. Applied at Stage 4b.5 to the repo markdown of each existing post (and shipped in this post's commit). `publish.wordpress.apply_inbound_links_live: true` is set for this blog, so once this post is live the finalize step applies the same links to the LIVE WordPress posts via REST (idempotent, before/after recorded in the checklist Notes). If that live pass is skipped or a row fails, hand-apply it with the commands below.

- [ ] `content/blog/best-notebooks-for-note-taking.md`, anchor "`gifts for students`" → `/gifts-for-students`, in §"How to pick the right notebook for you": appended to the paragraph ending "the best notebook is the one you'll actually open every day." as the sentence "Buying one as a present? My list of [gifts for students](/gifts-for-students) pairs a notebook with the pens, highlighters, and focus gear that make it get used." Applied in the repo at Stage 4b.5; hand-apply to the live WP post in wp-admin only if the finalize live pass did not.
- [ ] `content/blog/best-pens-for-note-taking.md`, anchor "`gift ideas for students`" → `/gifts-for-students`, in §"Which pen for which kind of note-taking": appended to "The picks above, sorted by what you're actually doing with them." as the sentence "If you're buying pens as a present, the Jetstream multipack also made my list of [gift ideas for students](/gifts-for-students)." Applied in the repo at Stage 4b.5; hand-apply live only if the finalize live pass did not.
- [ ] `content/blog/how-to-take-notes-on-ipad.md`, anchor "`gifts for students`" → `/gifts-for-students`, in §"The Gear That Earns Its Place (and the Gear That Doesn't)": appended to the Apple Pencil bullet as the sentence "If it's a present, my guide to [gifts for students](/gifts-for-students) covers the stylus picks and the compatibility check to do first." Applied in the repo at Stage 4b.5; hand-apply live only if the finalize live pass did not.

Hand-apply commands (per row, only if needed):
```bash
WP_USER="wpx_admin101"; WP_BASE="https://olgapak.com"
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section above:
#    <a href="https://olgapak.com/gifts-for-students">gifts for students</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] Scan for hallucinated product features against `blog-ops/profile/product.md`: the post only mentions Olga's free AI tools in the closing CTA (Text Summarizer, Text Simplifier), and both descriptions match product.md
- [ ] **US Amazon availability (required, not verified by the workflow).** The workflow's logged-in Amazon session delivers to a UK address, so every listing showed "This item cannot be shipped to your selected delivery location" and no US buy box. All 15 ASINs were verified to resolve to the right product (title match), but US stock and the US seller were NOT checked. With a US delivery address, open each of the 30 tagged links (15 products, each linked twice: table + pick) and confirm each is in stock from Amazon or the brand. Swap any ASIN that isn't, in both places. Start with:
  - [ ] **BenQ ScreenBar (B0785D93KD):** BenQ's own US store lists it at $109 but says "This item is temporarily out of stock", and the UK session showed only a third-party "HOKKAIDO STYLE (US Duty Free)" seller at $242.34. If no Amazon or BenQ offer appears for US delivery, replace this pick with another no-desk-footprint monitor light before publishing.
  - [ ] Apple Pencil (USB-C) B0CL7J12YK, Soundcore Q20i B0C3HCD34R, Time Timer Home MOD B08K9GFDMP, Zebra Mildliner 25-pack B08666FKRV (these showed no US buy box from the UK session).
- [ ] **Budget bands (no prices are printed; bands only).** Editor rule: under ~$25 small budget, ~$25–$100 mid-range, over ~$100 splurge. Two picks sit on the small/mid edge at $24.95 (Loop Quiet 2, Time Timer Home MOD) and the ScreenBar sits just over the splurge line at $109. If US prices have moved, move the band in the quick-pick table, the pick's Budget bullet, and the "cheap gifts" FAQ together.
- [ ] **Remotion registry repair ships with this post.** `tools/remotion/src/Root.tsx` on origin/main was missing one closing line (the `GraduatedCadenceSteps` entry from the dopamine-detox PR), which broke every Remotion render. This post's commit restores that line (verified with `tsc --noEmit` and `remotion compositions`). Glance at that one-line hunk in the diff.

## 6-7. Publish-adapter-specific steps

§6. N/A for the WordPress adapter.

§7, Publish (WordPress):

- [ ] Open the WordPress draft preview: created by `autopilot-cont` after console verification passes; read `wp_preview_url` from `blog-ops/drafts/gifts-for-students/pr-monitor.json` once that run completes (this autopilot run stops before any WordPress or PR side effect, per `CONSOLE_VERIFICATION=on`).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** Set the focus keyword in Rank Math to exactly: `gifts for students`. Rank Math's focus keyword is not settable via the standard REST API (`blog-ops/profile/site-conventions.md` §SEO plugin), so set it yourself in the WP editor's Rank Math panel before publishing.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per action-items §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/gifts-for-students`
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fgifts-for-students`
- [ ] Check mobile rendering at a narrow viewport (the 15-row quick-pick table is the widest element)
- [ ] If a WP plugin emits FAQ schema for the `## FAQ` block: validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fgifts-for-students`
- [ ] Confirm the 3 inbound links (§4b) are live on the published notebooks, pens, and iPad posts

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is off for this blog, so there is no repurpose step. If it is turned on later, run:

```
/repurpose-blog-post gifts-for-students
```

## 10. Archive cleanup (automatic at Gate-3 finalize)

The finalize step already moved `blog-ops/drafts/gifts-for-students/` → `blog-ops/drafts/_archive/gifts-for-students/`. Verify:

```bash
ls blog-ops/drafts/gifts-for-students/          # should NOT exist
ls blog-ops/drafts/_archive/gifts-for-students/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete, re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]             , 0 hits (2 resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]              , 4 hits (matches the 4 in-post `### Image ` entries in images.md; total images = 4 + 1 featured)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/gifts-for-students/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/gifts-for-students.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. Staging replaces every `[IMAGE:]` placeholder with a real embed of the form `![alt text](../../blog-ops/assets/gifts-for-students/file-name.png)` where the rendered file exists, or a build-safe `> **Image pending:**` note where it does not.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder
