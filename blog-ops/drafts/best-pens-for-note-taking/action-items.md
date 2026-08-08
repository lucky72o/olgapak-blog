# Action items: best-pens-for-note-taking

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md` markers + `blog-ops/drafts/best-pens-for-note-taking/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/best-pens-for-note-taking/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/best-pens-for-note-taking.md` (and the WordPress draft it was synced to), marker fixes and `[IMAGE:]` replacements all land here.
> - **Asset folder:** `blog-ops/assets/best-pens-for-note-taking/`, contains `README.md` (copy of images.md) plus the 5 rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **~20 minutes** (nearly everything was automated; what's left is a read-through, the Rank Math focus keyword, and clicking Publish).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/best-pens-for-note-taking.md`.
- Approved outline: `blog-ops/drafts/best-pens-for-note-taking/outline.md` → archived to `blog-ops/drafts/_archive/best-pens-for-note-taking/outline.md`
- Image plan: `blog-ops/drafts/best-pens-for-note-taking/images.md` → archived + copied to `blog-ops/assets/best-pens-for-note-taking/README.md`
- Review history: `review.md` + `review-v1.md`, plus `plan-review.md` + `plan-review-v1.md` → archived
- Total word count: **2,955** body prose (excluding FAQ); FAQ ~349
- Author: `olga` (byline: Olga Pak)
- Date: 2026-08-08

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/best-pens-for-note-taking/images.md` (also copied to `blog-ops/assets/best-pens-for-note-taking/README.md`). Estimated time: **0 minutes — all 5 rendered automatically at Stage 4a.5, 0 failed.** These are verify-the-render records, not build TODOs.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — rendered ✅ (archetype `pattern-break`: a grid of identical dark pens with one pale teal-marked pen lifted out)
- [ ] Image 1: `ink-families-tradeoff.png`, see images.md §Image 1, type: `remotion` — rendered ✅
- [ ] Image 2: `ink-types-writing-sample.png`, see images.md §Image 2, type: `ai-prompt` — rendered ✅
- [ ] Image 3: `paper-feathering-bleeding-ghosting.png`, see images.md §Image 3, type: `ai-prompt` — rendered ✅
- [ ] Image 4: `dead-pens-study-desk.png`, see images.md §Image 4, type: `ai-prompt` — rendered ✅

**Remotion slots** (1 total): built and exported at Stage 4a.5. Composition source is `tools/remotion/src/InkFamiliesTradeoff.tsx` with the `<Still>` registered in `tools/remotion/src/Root.tsx`; both ship in this post's commit.

- [ ] Remotion: `InkFamiliesTradeoff` → `ink-families-tradeoff.png` (composition built, registered, exported at `--scale=2`)

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path — verify each render. None are `failed`, so there is no pasteable-prompt fallback to run.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `ink-types-writing-sample.png` (generated, reviewed, saved)
- [ ] AI: `paper-feathering-bleeding-ghosting.png` (generated, reviewed, saved)
- [ ] AI: `dead-pens-study-desk.png` (generated, reviewed, saved)

Save all to: `blog-ops/assets/best-pens-for-note-taking/` (already there)

**Screenshot slots:** none.

## 2. `[VERIFY:]` markers, auto-resolved at Stage 3d

Resolved automatically at Stage 3d. **Nothing to do.** Audit log below. Current draft has **0** residual `[VERIFY:]` markers.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:185` | the Muji Gel Ink Ballpoint uses gel ink rather than oil-based ballpoint or hybrid ink | `resolved` | Confirmed on Muji's own site (the product line is literally "Gel Ink Ballpoint"): https://www.muji.us/products/gel-ink-cap-type-ballpoint-pen-set-10-pieces-set-9a63 |
| 2 | `draft-v2.md:185` | the tip sizes Muji offers in this line | `resolved` | Confirmed down to 0.3 mm (Muji lists 0.3 mm knock pens plus 0.5 / 0.7 mm refills) — same Muji source |
| 3 | `draft-v2.md:185` | whether Muji sells refills for this pen separately | `resolved` | Confirmed, dedicated refill product pages exist: https://www.muji.us/products/gel-ink-ballpoint-pen-0-5mm-refill-8a63 |

**Consequence worth knowing:** these three markers were the gate on the conditional Muji pick. All three confirmed, so **the Muji entry stays and the post remains an 11-pick roundup** — no title/heading/table renumbering was needed.

Outcome key: `resolved` = marker replaced with the confirmed claim + citation, nothing to do. `deleted` = claim couldn't be confirmed and the minimal span was removed (removed text logged).

## 3. `[EXTERNAL_LINK_NEEDED:]` markers, auto-resolved at Stage 3d

Resolved automatically at Stage 3d. **Nothing to do.** Current draft has **0** residual markers. All 12 added URLs were verified HTTP 200.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:71` | product link, Uni-ball Jetstream RT | `resolved` | https://www.amazon.com/dp/B001HA59VC (untagged) |
| 2 | `draft-v2.md:83` | product link, Pentel EnerGel RTX | `resolved` | https://www.amazon.com/dp/B001S2RDRM (untagged) |
| 3 | `draft-v2.md:95` | product link, Pilot G2 | `resolved` | https://www.amazon.com/dp/B00OCPFPK4 (untagged) |
| 4 | `draft-v2.md:107` | product link, Uni-ball Signo DX 0.38 | `resolved` | https://www.amazon.com/dp/B005HNZ5SW (untagged) — the US-market equivalent, uniball 207 0.38 mm Ultra Micro Point. No dependable genuine US listing exists for the UM-151 "Signo DX"; the draft now says so in prose and tells readers to buy on tip size, not name. |
| 5 | `draft-v2.md:119` | product link, Zebra Sarasa Dry | `resolved` | https://www.amazon.com/dp/B001BZ4ROI (untagged) |
| 6 | `draft-v2.md:131` | product link, Pilot Acroball | `resolved` | https://www.amazon.com/dp/B00FACLOCQ (untagged) |
| 7 | `draft-v2.md:143` | product link, Sharpie S-Gel | `resolved` | https://www.amazon.com/dp/B082PN4X5J (untagged) |
| 8 | `draft-v2.md:155` | product link, Pilot Precise V5 | `resolved` | https://www.amazon.com/dp/B001E6A9M8 (untagged) |
| 9 | `draft-v2.md:167` | product link, Sakura Pigma Micron | `resolved` | https://www.amazon.com/dp/B07J356J4Y (untagged) |
| 10 | `draft-v2.md:181` | product link, Muji Gel Ink Ballpoint | `resolved` | https://www.muji.us/products/gel-ink-cap-type-ballpoint-pen-set-10-pieces-set-9a63 — brand page, since Amazon doesn't carry the genuine item reliably |
| 11 | `draft-v2.md:193` | product link, Pilot FriXion | `resolved` | https://www.amazon.com/dp/B07D9Z7GYL (untagged) |
| 12 | `draft-v2.md:171` | "archival pigment ink made for drawing and craft work" (Sakura source) | `resolved, with a scope correction` | https://www.sakuraofamerica.com/product/pigma-micron/ — Sakura's own page lists **archival journals and record keeping alongside illustration**, so the planned "made for drawing and craft work" anchor was an overclaim inherited from a competitor's summary. The prose now cites what the page actually says, and the tip-wear caveat rests solely on the Reddit photo evidence, which is where it always belonged. |

**One claim was DELETED (not resolved)** — logged here because nothing should disappear without a trail:

| Line | Deleted text | Why |
|---|---|---|
| `draft-v2.md:75` (Jetstream section) | "Uni-ball says the ink is formulated to resist fading and forgery, which is a nice side effect for anything you sign." | The planned source `http://uniball.com.au/uni-super-ink/` 301s to a bare video-post page whose text does not contain the claim, and no page on uniball.com carries it either. Per the Stage 3d fallback the sentence was cut rather than cited to a page that doesn't support it. Replaced with a defensible general clause about the hybrid ink. |

**Affiliate status:** every product link is a clean, **untagged** URL (0 occurrences of `tag=` in the draft), per `custom-instructions.md` §Content policy. **No affiliate disclosure is present, and none should be added** until the Associates program is live. When it is, these become affiliate links by appending the tag.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer left zero `[INTERNAL_LINK_NEEDED:]` markers; all 4 planned internal links were placed directly.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. **These are APPLIED automatically at Stage 4b.5 to the repo markdown**, so they are a record plus a publish reminder, not a build TODO.

Per the `wordpress-rest` adapter §Action-items sections §4b: because this post ships as a WordPress **draft** (never auto-published), each row below is applied to the repo file but **must be hand-applied to the live WP post in wp-admin**, or left until this post is published and then applied live.

- [ ] `content/blog/best-notebooks-for-note-taking.md`, add anchor "`the best pens for note taking`" → `/best-pens-for-note-taking` (no trailing slash) where the post discusses bleed-through, paper weight, or what to write with
- [ ] `content/blog/cornell-note-taking-method.md`, add anchor "`the right pen for note taking`" → `/best-pens-for-note-taking` (no trailing slash) in the setup/supplies context around the cue column and colour-coding
- [ ] `content/blog/note-taking-methods.md`, add anchor "`which pens work best for note taking`" → `/best-pens-for-note-taking` (no trailing slash) in the pillar's practical/getting-started framing

Hand-apply to the live WP posts with the prefilled commands (auto-sync of prior posts is out of v1 scope):

```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section noted above:
#    <a href="https://olgapak.com/best-pens-for-note-taking">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

> After any REST update to a post that's open in the WP editor, the editor shows a stale "Restore the backup" banner. **Dismiss or reload, do NOT restore** — restoring reverts the synced draft (`custom-instructions.md` §Operational notes).

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md`. This post mentions the free AI tools **only in the closing CTA** (Text Summarizer), by design — there should be no product claims in the body at all
- [ ] `modules.competitors` is disabled: no competitor pricing/feature verification applies
- [ ] Spot-check that no price appears anywhere (the post uses budget / mid-range / premium bands deliberately; stationery pricing moves constantly)

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled at Stage 4b.5 staging).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. So this is a manual step: in the WP editor's Rank Math panel, set the focus keyword to exactly:

  ```
  best pens for note taking
  ```

  Verbatim — not a paraphrase, not the title. The workflow never attempts this write via REST.
- [ ] Click **Publish** in WP admin. **This workflow never does that step for you** (`custom-instructions.md` §Publishing: going live is always a manual wp-admin action).
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/best-pens-for-note-taking` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fbest-pens-for-note-taking`
- [ ] Check mobile rendering at a narrow viewport (the §H2 1 shortlist table and the §H2 4 job table are the two things most likely to squeeze)
- [ ] Validate the JSON-LD FAQ schema: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fbest-pens-for-note-taking`
- [ ] Apply the three §4b inbound links to the live posts if you deferred them
- [ ] Update `blog-ops/content-plan.md` row #9 Status: `planned` → `published`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step. Skip.

## 10. Archive cleanup (automatic at Gate-2 finalize)

The finalize step already moved the draft directory. Verify:

```bash
ls blog-ops/drafts/best-pens-for-note-taking/          # should NOT exist
ls blog-ops/drafts/_archive/best-pens-for-note-taking/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

Counts against the current `draft-v2.md`, **after** Stage 3d resolution:

```
[VERIFY:]              , 0 hits  (3 resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits  (12 resolved at Stage 3d, 1 separate claim deleted)
[INTERNAL_LINK_NEEDED:], 0 hits  (writer left none)
[IMAGE:]               , 4 hits  (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/best-pens-for-note-taking/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/best-pens-for-note-taking.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The 4 `[IMAGE:]` placeholders are replaced with real Markdown embeds by the Stage 4b.5 staging step, since all 5 image files exist on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in `blog-ops/assets/best-pens-for-note-taking/`
