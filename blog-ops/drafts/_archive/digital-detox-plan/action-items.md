# Action items: digital-detox-plan

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/digital-detox-plan/draft-v2.md` markers + `blog-ops/drafts/digital-detox-plan/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/digital-detox-plan/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/digital-detox-plan.md` — this is the canonical markdown; the WordPress draft is synced from it.
> - **Asset folder:** `blog-ops/assets/digital-detox-plan/`, contains `README.md` (copy of images.md) plus the five image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/digital-detox-plan/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **15 minutes** (all five images are already rendered and all markers are already resolved; what's left is a read-through, the Rank Math focus keyword, two hand-applied inbound links on WordPress-only posts, and clicking Publish).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/digital-detox-plan/` → `blog-ops/drafts/_archive/digital-detox-plan/` for the history files; the live post you edit is `content/blog/digital-detox-plan.md`.

- Draft (pre-finalize): `blog-ops/drafts/digital-detox-plan/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/digital-detox-plan.md`.
- Approved outline: `blog-ops/drafts/digital-detox-plan/outline.md` → archived to `blog-ops/drafts/_archive/digital-detox-plan/outline.md`
- Image plan: `blog-ops/drafts/digital-detox-plan/images.md` → archived + copied to `blog-ops/assets/digital-detox-plan/README.md`
- Review history: `review.md` (iteration 2, verdict `approve`) + `review-v1.md` (iteration 1, `request_revisions`) → archived
- Total word count: **2,216** body prose + 300 FAQ
- Author: `olga` (byline: Olga Pak)
- Title: `Digital Detox Plan: 7 Days to Reset Your Screen Time`
- Category: `Productivity`
- Tags: `productivity`, `time management`, `digital tools for productivity`
- Post date: 2026-08-03

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/digital-detox-plan/images.md` (also copied to `blog-ops/assets/digital-detox-plan/README.md` by the finalize step). Estimated time: **0 minutes to create, ~2 minutes to eyeball** — every slot rendered successfully at Stage 4a.5, and the editor already reviewed all five.

- [x] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — rendered, verified (hand-lettered title over a seven-notch dial eased down, `object-metaphor` archetype, ledger row appended to `blog-ops/featured-log.md`)
- [x] Image 1: `seven-day-ramp-diagram.png`, see images.md §Image 1, type: `remotion` — rendered, then re-rendered once at the editor's request because the first pass left the top half of the canvas empty
- [x] Image 2: `phone-free-block-scene.png`, see images.md §Image 2, type: `ai-prompt` — rendered, verified
- [x] Image 3: `slip-recovery-moment.png`, see images.md §Image 3, type: `ai-prompt` — rendered, verified
- [x] Image 4: `no-phone-day-maintenance.png`, see images.md §Image 4, type: `ai-prompt` — rendered, verified

**Remotion slots** (1 total): built per `adapters/images/remotion.md`.

- [x] Remotion: `SevenDayRampDiagram` → `seven-day-ramp-diagram.png` (composition written at `tools/remotion/src/SevenDayRampDiagram.tsx`, registered in `Root.tsx`, exported at `--scale=2` to the asset path). **Both files are new and ship in this post's commit.**

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path.

- [x] AI: `featured.png` (generated, reviewed, saved)
- [x] AI: `phone-free-block-scene.png` (generated, reviewed, saved)
- [x] AI: `slip-recovery-moment.png` (generated, reviewed, saved)
- [x] AI: `no-phone-day-maintenance.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/digital-detox-plan/` (with the `.staged-by-blog-workflow` ownership sentinel, removed at finalize).

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

**None.** The writer left zero `[VERIFY:]` markers, so Stage 3d had nothing to resolve, keep general, delete, or route.

Stage 3d did discharge the one verification dependency the plan recorded against a claim that reached the draft through a competitor's citation chain. It is logged here because it changed shipped text:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:174` | a small study of 68 students found a social media detox improved mood, sleep, and anxiety | `resolved` (corrected) | Confirmed at https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/. **Two corrections:** the year is **2020**, not the 2021 the competitor's citation chain reported, and it is an **observational survey of students recalling their own voluntary breaks**, not an intervention study. The sentence now reads as self-report. Mirrored into `facts.md`. |

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

**None.** The writer left zero `[EXTERNAL_LINK_NEEDED:]` markers; every external claim was sourced from `facts.md` at draft time.

All five external URLs were re-checked live at Stage 3d and return HTTP 200:

| URL | Note |
|---|---|
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ | 200 |
| https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox | 200 |
| https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios | 200 |
| https://support.google.com/android/answer/9346420 | 200 on GET (Google answers 404 to a HEAD request — a quirk, not a dead link) |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/ | 200 (301s to the `pmc.ncbi.nlm.nih.gov` host) |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers; all six internal links were placed at draft time, root-relative with no trailing slash (`/how-to-stop-doomscrolling`, `/things-to-do-instead-of-being-on-your-phone`, `/what-is-timeboxing`, `/productive-things-to-do-on-your-phone-instead-of-scrolling`, `/how-to-plan-your-week`, `/ai-tools`).

## 4b. Add inbound links from existing posts to this one

The outline planned three. **One was applied automatically at Stage 4b.5; two cannot be, because those posts exist only on WordPress and have no markdown file in this repo.**

**UPDATE (Gate 2 finalize, 2026-08-03):** all three are now DONE on the live site. `publish.wordpress.apply_inbound_links_live: true` and this post reached `status: publish`, so the adapter's live inbound-link pass ran at finalize and applied all three via REST (HTTP 200 each; before/after spans recorded in `checklist.md` §Gate 2 finalize). Nothing is left to hand-apply in wp-admin.

- [x] `content/blog/how-to-stop-doomscrolling.md` — anchor "digital detox plan" → `/digital-detox-plan`, added to the closing sentence of "### 12. Be kind when you slip (relapse is designed in)". Applied by the workflow (recorded in checklist Notes, link-only diff verified). **Ships in this post's commit — confirm it rendered in the Gate 2 preview.** The matching live-WP edit was applied automatically at finalize (wp id 2122, HTTP 200), so the manual curl recipe below is kept only as a record of what was done:

```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=how-to-stop-doomscrolling&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw, at the end of the "Be kind when you slip" paragraph:
#    <a href="https://olgapak.com/digital-detox-plan">digital detox plan</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

- [x] `things-to-do-instead-of-being-on-your-phone` — APPLIED LIVE at finalize (wp id 968). **WordPress-only post, no repo file.** Hand-apply in wp-admin: add anchor "7-day digital detox plan" → `https://olgapak.com/digital-detox-plan` near the framing paragraph about why having alternatives matters. Same three curl steps as above with `slug=things-to-do-instead-of-being-on-your-phone`.
- [x] `productive-things-to-do-on-your-phone-instead-of-scrolling` — APPLIED LIVE at finalize (wp id 1321). **WordPress-only post, no repo file.** Hand-apply in wp-admin: add anchor "digital detox plan" → `https://olgapak.com/digital-detox-plan` where the post acknowledges the phone has to stay in hand for some readers. Same three curl steps with that slug.

## 5. Final manual read

- [ ] Read the whole draft aloud — catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80–85 (not 99; perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] Scan for hallucinated product claims against `blog-ops/profile/product.md` — the post names only the free AI tools page and the Text Summarizer, in the CTA, with no prices (there are none) and no first-party data (the only entry is `hypothetical`)
- [ ] Competitor claims: N/A — `modules.competitors: false` for this blog
- [ ] Spot-check the post's honesty beats survived editing: the evidence-is-mixed section, the "a detox doesn't manufacture ambition" answer, and the "buying a boring phone is not a plan" warning are the three things that differentiate this post from every result in the SERP

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` — **written by `autopilot-cont`**, which creates the WP draft after console verification passes. It is not available in this run's `pr-monitor.json` yet.
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image are all synced by the adapter).
- [ ] **Focus keyword.** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. Set it by hand in the WP editor's Rank Math panel to exactly: `digital detox plan` (verbatim — not the title, not a paraphrase) before publishing.
- [ ] **Category check.** The post ships as **Productivity**. `site-conventions.md` still marks the "Digital wellbeing / beating phone distraction" pillar row "human to confirm" — if you'd rather this cluster had its own category, change it here before publishing.
- [x] Click **Publish** in WP admin. This workflow never does that step for you. (Done by the author 2026-08-03 16:56; WP 2152 is `publish`.)
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [x] Verify the live URL: `https://olgapak.com/digital-detox-plan` (HTTP 200 at finalize) (no trailing slash — `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check the featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fdigital-detox-plan`
- [ ] Check mobile rendering at a narrow viewport (the seven-day ramp diagram is the slot most likely to suffer — it is a wide 3:2 diagram with seven labelled steps)
- [ ] FAQ schema: N/A — the WordPress frontmatter template emits no JSON-LD; FAQPage markup is a WP-plugin concern on this blog
- [x] Once live, hand-apply the two WordPress-only inbound links from §4b — done automatically by the finalize live inbound-link pass (both HTTP 200)

## 9. Trigger Phase 5 repurpose (when ready)

**N/A — `modules.repurpose: false` for this blog.** No X/LinkedIn/newsletter outputs are produced for this post.

## 10. Archive cleanup (automatic at Gate 2 finalize)

The finalize step moves `blog-ops/drafts/digital-detox-plan/` → `blog-ops/drafts/_archive/digital-detox-plan/`. Verify:

```bash
ls blog-ops/drafts/digital-detox-plan/          # should NOT exist
ls blog-ops/drafts/_archive/digital-detox-plan/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete — re-run the finalize sequence from the main skill's Gate 2 step.

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
  blog-ops/drafts/digital-detox-plan/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/digital-detox-plan.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. All four `[IMAGE:]` placeholders are replaced with real Markdown embeds at Stage 4b.5 staging, pointing at files that exist in `blog-ops/assets/digital-detox-plan/`.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in the asset folder (verify in the Gate 2 preview)
