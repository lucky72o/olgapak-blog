# Action items: best-blue-light-glasses

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/best-blue-light-glasses/draft-v2.md` markers + `blog-ops/drafts/best-blue-light-glasses/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/best-blue-light-glasses/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/best-blue-light-glasses.md`.
> - **Asset folder:** `blog-ops/assets/best-blue-light-glasses/`, contains `README.md` (copy of images.md) plus the five rendered images.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/best-blue-light-glasses/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: 25 minutes.

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/best-blue-light-glasses/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/best-blue-light-glasses.md`.
- Approved outline: `blog-ops/drafts/best-blue-light-glasses/outline.md` → archived to `blog-ops/drafts/_archive/best-blue-light-glasses/outline.md`
- Image plan: `blog-ops/drafts/best-blue-light-glasses/images.md` → archived + copied to `blog-ops/assets/best-blue-light-glasses/README.md`
- Review history: `review.md` + `review-v1.md`, plus `plan-review.md` + `plan-review-v1.md` → archived
- Total word count: 3,850 (body prose excluding FAQ: 3,206)
- Author: `olga`
- Date written into frontmatter: 2026-09-09 (the console rewrites this to the real publication day at Gate 2)

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/best-blue-light-glasses/images.md` (also at `blog-ops/assets/best-blue-light-glasses/README.md`). All five were rendered automatically at Stage 4a.5, so these are verify-the-render checks, not build TODOs. Estimated time: 5 minutes.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` , rendered
- [ ] Image 1: `honest-verdict-tired-eyes.png`, see images.md §Image 1, type: `ai-prompt` , rendered
- [ ] Image 2: `frame-styles-flatlay.png`, see images.md §Image 2, type: `ai-prompt` , rendered
- [ ] Image 3: `clear-vs-amber-lenses.png`, see images.md §Image 3, type: `remotion` , rendered
- [ ] Image 4: `twenty-twenty-twenty-habit.png`, see images.md §Image 4, type: `ai-prompt` , rendered

**Remotion slots** (1 total): built per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- [ ] Remotion: `ClearVsAmberLenses` → `clear-vs-amber-lenses.png` (composition built, registered in `tools/remotion/src/Root.tsx`, exported at `--scale=2`)

> Note: `tools/remotion/src/Root.tsx` had a pre-existing syntax error (the `FourCorePagesMap` `<Still>` was missing its `width`/`height` line, which made the whole project fail to parse). The editor fixed that one line during this run; the fix ships on this post's branch.

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via codex.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `honest-verdict-tired-eyes.png` (generated, reviewed, saved)
- [ ] AI: `frame-styles-flatlay.png` (generated, reviewed, saved)
- [ ] AI: `twenty-twenty-twenty-habit.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/best-blue-light-glasses/`

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

Both markers the writer left were resolved at Stage 3d. Nothing to do; this is the audit log.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:40` | sunlight is a far stronger source of blue light than a computer screen | `resolved` | https://www.aao.org/eye-health/tips-prevention/should-you-be-worried-about-blue-light , AAO: "the largest source of blue light is sunlight". Mirrored into `facts.md`. |
| 2 | `draft-v2.md:215` | the r/Biohackers null-result quote ("Absolutely nothing. Total scam.") and its cortisol logging | `resolved` | Confirmed verbatim in `research/reddit.md` (thread 2) and added to `facts.md` Quotes. Attributed in prose to r/Biohackers, deliberately NOT linked, per the outline's rule that Reddit and X are quoted but never linked. |

Additional, not a marker: the melatonin citation harvested from a competitor (`academic.oup.com/jcem/article/88/9/4502/2845835`) sits behind a Cloudflare bot wall and could not be confirmed to load, so it was replaced with the same paper on PubMed (https://pubmed.ncbi.nlm.nih.gov/12970330/) and the anchor rescoped to what that abstract actually says.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

All 9 were purchase links for the 9 picks, resolved through the logged-in browser (Amazon blocks curl and WebSearch). Nothing to do; this is the audit log. Four picks were RENAMED because the model an independent roundup named is no longer buyable, and the copy now says so where it matters.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:101` | purchase link for the SOJOS pick | `resolved` | https://www.amazon.com/dp/B0H7B5N2DV?tag=op01e-20 , **renamed** from "Sojos She Young" (delisted) to "SOJOS SJ5511"; the entry now explains the swap. |
| 2 | `draft-v2.md:113` | purchase link for TIJN | `resolved` | https://www.amazon.com/dp/B0GYNQZMB6?tag=op01e-20 |
| 3 | `draft-v2.md:125` | purchase link for Felix Gray Jemison | `resolved` | https://felixgray.com/products/jemison-plano , brand product page, verified live; not the felixgray.com URL that ranks in this SERP. |
| 4 | `draft-v2.md:137` | purchase link for the Warby Parker pick | `resolved` | https://www.warbyparker.com/eyeglasses/blue-light , **renamed** from "Thurston" (product URL 404s); the filter is a lens option on any frame. |
| 5 | `draft-v2.md:149` | purchase link for the EyeBuyDirect pick | `resolved` | https://www.eyebuydirect.com/prescription-lens/digital-protection , **renamed** from "Escape" (frame URL 404s); Escape and Botanist are still named in the copy as the roundup's frames. |
| 6 | `draft-v2.md:161` | purchase link for Zenni Blokz | `resolved` | https://www.zennioptical.com/blokz-blue-light-glasses , **see §5 below**: this exact URL is rank 9 in this post's SERP. Shipped as a purchase link, not a citation. |
| 7 | `draft-v2.md:173` | purchase link for Peepers | `resolved` | https://www.amazon.com/dp/B0CJSMX8XB?tag=op01e-20 , Peepers Kent, Amazon's "Overall Pick" for the brand's blue-light readers. |
| 8 | `draft-v2.md:185` | purchase link for GUNNAR | `resolved` | https://www.amazon.com/dp/B00CAUTK0E?tag=op01e-20 , Intercept Onyx with the amber lens. |
| 9 | `draft-v2.md:197` | purchase link for the Swanwick pick | `resolved` | https://www.amazon.com/dp/B01N0Q7RBM?tag=op01e-20 , **renamed** from "Night Swannies" to "Swanwick Swannies"; the listing is the brand's amber sleep family and the specific variant could not be confirmed. |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer placed all five planned internal links directly.

## 4b. Add inbound links from existing posts to this one

Applied at Stage 4b.5 to the repo copies, per `adapters/publish/wordpress-rest.md` §Action-items sections §4b. **The live WordPress posts still need the same edit by hand** (auto-sync of prior posts is out of v1 scope, and `apply_inbound_links_live` only fires once this post is itself `publish`).

- [ ] `content/blog/how-to-reduce-screen-time.md`, applied in the repo; hand-apply to the live WP post in wp-admin. Anchor "the best blue light glasses" → `https://olgapak.com/best-blue-light-glasses`, in the section on screen habits and eye comfort.
- [ ] `content/blog/how-to-stop-doomscrolling.md`, applied in the repo; hand-apply to the live WP post in wp-admin. Anchor "blue light glasses for evening screen use" → `https://olgapak.com/best-blue-light-glasses`, in the evening / before-bed section.
- [ ] `content/blog/digital-detox-plan.md`, applied in the repo; hand-apply to the live WP post in wp-admin. Anchor "whether blue light glasses are worth buying" → `https://olgapak.com/best-blue-light-glasses`, where evening screens come up in the plan.

Prefilled commands for each row (from the adapter):

```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/best-blue-light-glasses">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] Grammarly score target: 80 to 85 (not 99; perfection is an AI signal)
- [ ] Scan for hallucinated product claims: no pick may imply the lenses reduce eye strain or protect the eyes. The GUNNAR and Swanwick entries are the two most at risk; both were written to state preference, not efficacy.
- [ ] **Decision to confirm (editor's call, reversible):** the Zenni purchase link points at `zennioptical.com/blokz-blue-light-glasses`, which is rank 9 in this post's own SERP. It ships as a purchase link rather than a citation, and this blog has no `rel="nofollow"` convention in any published post. If you would rather not link a ranking competitor's page at all, cut the Zenni pick (the roundup then has 8 picks and the title needs changing) or point it at a different Zenni page.
- [ ] **Decision to confirm:** four picks were renamed at Stage 3d because the exact model an independent roundup named is no longer buyable (see §3). The copy is honest about the SOJOS swap specifically. Confirm you are happy naming brands-plus-current-model rather than the reviewed model.
- [ ] The nine picks are grounded in independent reviews, not first-hand testing, and the post says so. Confirm that is the claim you want to make.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (written into `pr-monitor.json` when the WP draft is created; under console verification that happens in the `autopilot-cont` run, not this one).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. Set it by hand in the WP editor's Rank Math panel to exactly: `best blue light glasses`
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/best-blue-light-glasses`
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check the featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fbest-blue-light-glasses`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the FAQ rich result: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fbest-blue-light-glasses`
- [ ] Once live, run the §4b hand-applied inbound links so the three existing posts point here

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is OFF for this blog, so there is no repurpose step for this post.

## 10. Archive cleanup (automatic at Gate-3 finalize)

```bash
ls blog-ops/drafts/best-blue-light-glasses/          # should NOT exist
ls blog-ops/drafts/_archive/best-blue-light-glasses/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits (2 resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits (9 resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/best-blue-light-glasses/draft-v2.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/best-blue-light-glasses.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points at a file that exists in `blog-ops/assets/best-blue-light-glasses/`
