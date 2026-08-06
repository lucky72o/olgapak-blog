# Action items: charting-method-note-taking

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/charting-method-note-taking/draft-v3.md` markers + `blog-ops/drafts/charting-method-note-taking/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/charting-method-note-taking/`, the archived working files (outline, facts, images.md, draft-v3.md, review history).
> - **Live post (where you edit):** `content/blog/charting-method-note-taking.md` (and the WordPress draft it mirrors), marker fixes and `[IMAGE:]` replacements all land here.
> - **Asset folder:** `blog-ops/assets/charting-method-note-taking/`, contains `README.md` (copy of images.md) plus the 5 rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/charting-method-note-taking/draft-v3.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page to work through after Gate 2. Every item here is required before publish. Estimated total time: `15` minutes (all 5 images already rendered; no markers left to resolve).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/charting-method-note-taking/` → `blog-ops/drafts/_archive/charting-method-note-taking/` for the history files; the live post is `content/blog/charting-method-note-taking.md`.

- Draft (pre-finalize): `blog-ops/drafts/charting-method-note-taking/draft-v3.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/charting-method-note-taking.md`.
- Approved outline: `blog-ops/drafts/charting-method-note-taking/outline.md` → archived to `blog-ops/drafts/_archive/charting-method-note-taking/outline.md`
- Image plan: `blog-ops/drafts/charting-method-note-taking/images.md` → archived + copied to `blog-ops/assets/charting-method-note-taking/README.md`
- Review history: `review.md` + `review-v1.md` + `review-v2.md` → archived to `blog-ops/drafts/_archive/charting-method-note-taking/`
- Total word count: `2,836` (2,252 body prose vs 2,060 outline roll-up target, +9.3%)
- Author: `olga` (frontmatter `authors: [Olga Pak]`)
- Title: `Charting Method Note-Taking: How to Do It in 5 Steps`
- Target keyword: `charting method note taking`
- Category: Productivity, EdTech (note-taking sub-cluster → WP terms [12, 9] per `site-conventions.md` §Categories)
- Review verdict: `approve` at iteration 3 of 3 (0 critical, 0 major, 2 accepted do-not-fix minors)

## 1. Create images (`5` total)

Image spec (post-finalize): `blog-ops/drafts/_archive/charting-method-note-taking/images.md` (also copied to `blog-ops/assets/charting-method-note-taking/README.md` by the finalize step). Estimated time: `3` minutes — **all 5 slots were rendered automatically at Stage 4a.5, so these are verify-the-render checks, not build TODOs.**

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — rendered, spot-checked by the editor (hand-lettered title matches the post title, olgapak.com watermark present)
- [ ] Image 1: `charting-anatomy.png`, see images.md §Image 1, type: `remotion` — rendered, spot-checked (labeled grid, revolutions example, does not duplicate any table in the post)
- [ ] Image 2: `charting-five-steps.png`, see images.md §Image 2, type: `remotion` — rendered
- [ ] Image 3: `paper-vs-digital-chart.png`, see images.md §Image 3, type: `ai-prompt` — rendered
- [ ] Image 4: `overstuffed-chart.png`, see images.md §Image 4, type: `ai-prompt` — rendered

**Remotion slots** (`2` total): both built, registered and exported at Stage 4a.5. Sources live at `tools/remotion/src/`; the pre-existing `ChartingExample.tsx` was deliberately NOT reused or overwritten.

- [ ] Remotion: `ChartingAnatomy` → `charting-anatomy.png` (composition built at `tools/remotion/src/ChartingAnatomy.tsx`, registered as a `<Still>` in `src/Root.tsx`, exported at `--scale=2`)
- [ ] Remotion: `ChartingFiveSteps` → `charting-five-steps.png` (composition built at `tools/remotion/src/ChartingFiveSteps.tsx`, registered, exported at `--scale=2`)

**AI-generated slots** (`3` total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path. Zero failed slots, so there is no manual `Prompt:` fallback to run.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `paper-vs-digital-chart.png` (generated, reviewed, saved)
- [ ] AI: `overstuffed-chart.png` (generated, reviewed, saved)

Save all to: `blog-ops/assets/charting-method-note-taking/` — already in place, with the `.staged-by-blog-workflow` ownership sentinel.

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

These were resolved automatically at Stage 3d, so there is nothing to do here. This section is the audit log.

Stage 3d resolution log:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v3.md:127` | the sample-size and main-limitation characterizations in the research-methods table, and the two research-methods details in the paragraph below it | `kept-general` | No claim deleted. The table is an illustrative student worked example, not an assertion the post makes, so it ships without inline academic citations. Substance corroborated anyway: random assignment + "causal conclusions cannot be proven from an observational study" (https://pmc.ncbi.nlm.nih.gov/articles/PMC4083571/), self-report bias (https://pmc.ncbi.nlm.nih.gov/articles/PMC9649615/), case-study depth vs. generalizability (https://pmc.ncbi.nlm.nih.gov/articles/PMC3141799/). Full audit trail in `facts.md` §"Stage 3d resolved sources". |

Residual `[VERIFY:]` markers in the draft: **0**. Nothing to resolve before publish.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

Audit log. Both markers were resolved with confirmed, HTTP-200-verified allowlist citations.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v3.md:115` | testing yourself beats re-reading (backs the Step 5 "cover a column and recall" review step) | `resolved` | https://pmc.ncbi.nlm.nih.gov/articles/PMC11078833/ — NLM/PMC systematic review; states retrieval practice "generally demonstrat[es] superior outcomes in all comparisons" including "restudying (rereading or rewatching content)". Prose scopes the claim to "health-professions courses" because that is all the review covers. |
| 2 | `draft-v3.md:145` | paper vs. digital note-taking effectiveness | `resolved` | https://pmc.ncbi.nlm.nih.gov/articles/PMC9247713/ — NLM/PMC study; "No significant difference was found in the factual or conceptual recall scores for tablet, laptop, and handwritten note-taking (P=0.61)." Prose names the limit ("a small study of 68 medical students") and reframes the sentence so the post no longer implies handwriting wins. |

Residual `[EXTERNAL_LINK_NEEDED:]` markers: **0**.

**Note on source type:** both citations landed on NLM/PMC rather than the `.edu` learning-centre pages the writer suggested. Every `.edu` candidate (UNC, Oregon State, NYIT, Arizona) was unreachable this run — 403 / DNS failure / connection refused — via both WebFetch and the Chrome fallback. External link count went 2 → 4, inside blog-craft's 3–5 band. All 4 external URLs verified HTTP 200; neither new URL is a top-10 SERP competitor.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

`0` markers: **None.** The writer placed all internal links directly from the outline's existing-posts table; nothing was left unresolved.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. These are **applied automatically at Stage 4b.5** to the repo markdown — they are a record + publish reminder here, not a build TODO.

Per the `wordpress-rest` adapter §Action-items sections §4b: because this post is still a WordPress **draft** at staging time, each row is applied to the repo copy now, and the live WP post needs the same edit. `publish.wordpress.apply_inbound_links_live: true` is set, so once this post is published the adapter's "Live inbound-link application" step applies these to the live target posts via REST automatically (matching `custom-instructions.md` §Inbound internal links: apply them yourself, never ask).

- [ ] `content/blog/note-taking-methods.md` — applied at Stage 4b.5; anchor "`the charting method of note-taking`" → `/charting-method-note-taking` (no trailing slash, per `blog.trailing_slash: false`) in the pillar's charting-method section. Confirm it rendered in the Gate 2 preview.
- [ ] `content/blog/cornell-note-taking-method.md` — applied at Stage 4b.5; anchor "`charting method note-taking`" → `/charting-method-note-taking` where that post contrasts Cornell against other methods. Confirm in preview.
- [ ] `content/blog/mind-mapping-note-taking-method.md` — applied at Stage 4b.5; anchor "`the charting method`" → `/charting-method-note-taking` where that post distinguishes visual/radial notes from linear ones. Confirm in preview.

Hand-apply fallback (only needed for a row that Stage 4b.5 reported as skipped/failed, or if you publish before the live-application step runs):

```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=note-taking-methods&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section noted above:
#    <a href="https://olgapak.com/charting-method-note-taking">the charting method of note-taking</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md` — this post's only product touchpoint is the `/ai-tools` CTA, so this should be a fast check
- [ ] `modules.competitors` is **off** for this blog — no competitor pricing/feature claims to verify
- [ ] Two review minors were accepted as do-not-fix and are deliberately still present: bullet-list density below the 1-per-300-words floor (review-v1 explicitly forbade adding lists to this post), and four of ten sections without a standalone question (the one candidate addition would have echoed an existing line). Do not "fix" these unless you disagree with that call.

## 6. N/A for the WordPress adapter.

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url — filled at Stage 4b.5 staging>`.
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Set the focus keyword.** `site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST** (not exposed on the `wp/v2/posts` schema). So this is a manual step: in the WP editor's Rank Math panel, set the focus keyword to exactly `charting method note taking` (verbatim — not a paraphrase, not the title). The workflow never attempts this write.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you — going live is always your manual action (`custom-instructions.md` §Publishing & review).
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/charting-method-note-taking` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fcharting-method-note-taking`
- [ ] Check mobile rendering at a narrow viewport
- [ ] If the frontmatter template emits a JSON-LD FAQ schema: validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fcharting-method-note-taking`
- [ ] Confirm the 3 inbound links from §4b are live on their target posts (the adapter applies them via REST once this post is published)

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step for this post. (The console's chain config lists `repurpose`, but `buildChainLinks` drops it while the module is off.)

## 10. Archive cleanup (automatic at Gate 2 finalize)

The finalize step already moved the draft directory. Verify:

```bash
ls blog-ops/drafts/charting-method-note-taking/          # should NOT exist
ls blog-ops/drafts/_archive/charting-method-note-taking/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/charting-method-note-taking/draft-v3.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/charting-method-note-taking.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. All four `[IMAGE:]` placeholders are replaced with real embeds by the Stage 4b.5 staging step (every one of the 5 slots rendered, so no slot falls back to an "Image pending" note).

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and each path points to a file that exists in `blog-ops/assets/charting-method-note-taking/`
