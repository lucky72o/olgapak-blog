# Action items: dopamine-detox

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/dopamine-detox/draft-v1.md` markers + `blog-ops/drafts/dopamine-detox/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/dopamine-detox/`, the archived working files (outline, facts, images.md, draft-v1.md, review history).
> - **Live post (where you edit):** `content/blog/dopamine-detox.md`, plus the WordPress draft itself.
> - **Asset folder:** `blog-ops/assets/dopamine-detox/`, contains `README.md` (copy of images.md) plus the five rendered images.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/dopamine-detox/draft-v1.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **15 minutes** (unusually short: there are no unresolved markers and every image is already rendered, so this is a read-and-publish list, not a build list).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/dopamine-detox/draft-v1.md` (humanized at Stage 3c). Post-finalize: `content/blog/dopamine-detox.md`.
- Approved outline: `blog-ops/drafts/dopamine-detox/outline.md` → archived to `blog-ops/drafts/_archive/dopamine-detox/outline.md`
- Image plan: `blog-ops/drafts/dopamine-detox/images.md` → archived to `blog-ops/drafts/_archive/dopamine-detox/images.md` + copied to `blog-ops/assets/dopamine-detox/README.md`
- Review history: `blog-ops/drafts/dopamine-detox/review.md` + `plan-review.md` + `plan-review-v1.md` → archived to `blog-ops/drafts/_archive/dopamine-detox/`
- Total word count: **2,256** body prose (2,607 including FAQ). Target was 2,000 to 2,400.
- Author: `olga` (byline: Olga Pak)
- Title: `Dopamine Detox: What It Is and How to Actually Do It Right`
- Category: `Productivity`. Tags: `productivity`, `time management`, `students`.
- Date: 2026-09-07 (placeholder; the console restamps it to the real publish day on the branch just before merge)

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/dopamine-detox/images.md` (also copied to `blog-ops/assets/dopamine-detox/README.md` by the finalize step). Estimated time: **2 minutes** (verification only, nothing to build).

**All five slots rendered successfully at Stage 4a.5.** Nothing here is a build TODO; these are verify-the-render records.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` (rendered, 1.8 MB)
- [ ] Image 1: `idle-attention-walk.png`, see images.md §Image 1, type: `ai-prompt` (rendered, 2.3 MB)
- [ ] Image 2: `viral-versus-original.png`, see images.md §Image 2, type: `ai-prompt` (rendered, 2.4 MB)
- [ ] Image 3: `graduated-cadence-steps.png`, see images.md §Image 3, type: `remotion` (rendered, 309 KB)
- [ ] Image 4: `reclaimed-evening.png`, see images.md §Image 4, type: `ai-prompt` (rendered, 2.8 MB)

**Remotion slots** (1 total): built per `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`.

- [ ] Remotion: `GraduatedCadenceSteps` → `graduated-cadence-steps.png` (composition built at `tools/remotion/src/GraduatedCadenceSteps.tsx`, registered in `Root.tsx`, exported at `--scale=2`)

> **Note, and it ships with this PR:** `tools/remotion/src/Root.tsx` was unparseable before this post. The `FourCorePagesMap` `<Still>` was missing its `width={CANVAS.width} height={CANVAS.height} />` closing line, so no composition in the project could render at all. Introduced by PR #19 (bullet-journal-for-beginners), not by this post. The one-line fix is in this PR because it is what unblocked this post's diagram.

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path. Verify each render.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `idle-attention-walk.png` (generated, reviewed, saved)
- [ ] AI: `viral-versus-original.png` (generated, reviewed, saved)
- [ ] AI: `reclaimed-evening.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/dopamine-detox/`

**Planner warning worth one glance:** Image 3 (the cadence diagram) sits about 10 lines below H2 3's comparison table, whose last row also mentions the cadence. The planner kept it and justified it (different section, different starting point, the diagram shows the ramp rather than the contrast). Judge it in the preview.

## 2. `[VERIFY:]` markers, auto-resolved at Stage 3d

**None.** The grep found zero `[VERIFY:]` markers in the draft.

This is not the usual "Stage 3d resolved them all" outcome, it is better: the writer never emitted one. This post's fact pool (`facts.md`) is deliberately tiny and its §Rejected section is a kill list, so the instruction to the writer was to cut an unsupportable sentence rather than defer it to a marker. That is what happened.

For the record, the four claims that were kept OUT of the post because no primary or allowlist source supports them (all logged in `facts.md` §Rejected):

| # | Claim that circulates widely | Why it is not in the post |
|---|---|---|
| 1 | "A detox resets dopamine levels" | Unhedged mechanism claim from an X post with no citation, and directly contradicted by Harvard Health |
| 2 | "It takes 12 to 15 weeks for an average brain to heal" | Unsourced recovery timeline; no source anywhere in the SERP set states any timeline |
| 3 | "Avoiding phasic dopamine spikes raises your tonic level" | Single Reddit comment, score 1, no citation, uncorroborated |
| 4 | "Boredom has been scientifically demonstrated to be nefarious for your health" | Stated confidently in a Reddit comment with no citation |

## 3. `[EXTERNAL_LINK_NEEDED:]` markers, auto-resolved at Stage 3d

**None.** The grep found zero. All five external links were planned in the outline and written directly by the writer, so no slot was ever left open.

Stage 3d still ran a link-verification pass on all five. Result:

| # | URL | Status | Note |
|---|---|---|---|
| 1 | health.harvard.edu (Sepah's schedule, and the dopamine correction) | HTTP 200 | `authoritative_allowlist` (`.edu`) |
| 2 | nytimes.com (Sepah's "not to be taken literally" quote) | **403 to curl, 200 in browser** | Bot-blocking, not a dead link. It is the real Nov 7 2019 Nellie Bowles article. **Paywalled**, so a reader without a subscription sees only the lede. Kept because blog-craft.md requires routing to the primary source a competitor cites, and our own raw fetch confirms Harvard Health quotes Sepah verbatim and links this exact URL. |
| 3 | linkedin.com (Sepah's original 2019 article) | HTTP 200 | `primary_source` |
| 4 | pmc.ncbi.nlm.nih.gov/PMC11223451 (the literature review) | HTTP 200 | `authoritative_allowlist` (NIH/NLM) |
| 5 | pmc.ncbi.nlm.nih.gov/PMC6127769 (default mode network) | HTTP 200 | `authoritative_allowlist` (NIH/NLM) |

**One accuracy fix came out of that pass.** The sources disagree on Cameron Sepah's credential: Harvard Health says "California psychiatrist", Cleveland Clinic and MedicalNewsToday say psychologist. draft-v1 had asserted "a psychologist" in five places including the excerpt and an H2 heading. All five now say "clinician" or describe what he did rather than what he is. Logged in `facts.md` §Contested. Do not restore either specific credential.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers. All five internal links were planned in the outline and are present in the draft:

`/how-to-stop-doomscrolling` (intro), `/how-to-reduce-screen-time` (H2 4), `/digital-detox-plan` (H2 4), `/screen-free-hobbies` (H2 5), `/time-blocking` (H2 5). All root-relative with no trailing slash, per `blog.trailing_slash: false`. Plus the CTA link `/ai-tools`, matching the convention in ten published posts.

## 4b. Add inbound links from existing posts to this one

Three inbound links, from the outline's "Inbound internal links" section. These are APPLIED AUTOMATICALLY at Stage 4b.5 to the repo copies, so they are a record plus a publish reminder, not a build TODO.

`publish.wordpress.apply_inbound_links_live` is `true` for this blog, so once this post's WordPress status is `publish`, the same anchors are applied live to the target posts via REST per the adapter's `## On Gate 2 approval`. Until then they exist only in the repo copies.

- [ ] `content/blog/digital-detox-plan.md`, anchor "`dopamine detox`" → `/dopamine-detox`, in §"What a digital detox plan actually is (and why cold turkey backfires)"
- [ ] `content/blog/how-to-stop-doomscrolling.md`, anchor "`dopamine detox`" → `/dopamine-detox`, in §"Layer 2: Catch the trigger (work with your brain, not against it)"
- [ ] `content/blog/how-to-reduce-screen-time.md`, anchor "`dopamine detox`" → `/dopamine-detox`, in §"Not all screen time is the problem"
- [ ] Confirm all three rendered correctly in the Gate 2 preview and are included in the publish diff.

If a live REST application falls back (target not found, not live, or the REST call fails), hand-apply in wp-admin using the adapter's prefilled commands:
```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:${WP_APP_PASSWORD}" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/dopamine-detox">dopamine detox</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:${WP_APP_PASSWORD}" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80 to 85 (not 99; perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md`. This post mentions exactly one tool, the Text Summarizer, once, in the CTA. Confirm the claim matches product.md §Features and that no price is stated (the tools are free and there is no pricing page)
- [ ] `modules.competitors` is DISABLED for this blog, so there are no competitor pricing or feature claims to verify
- [ ] **Topic-specific check, worth the minute:** this post is health-adjacent and anti-hype. Re-read H2 6 ("When a dopamine detox is not the right tool") and confirm it still makes no diagnostic or mechanism claim, and that the Parkinson's / depression / restless-leg / ADHD association appears ONLY in H2 1. Both plan reviews and the draft review flagged this as the post's one real risk area.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (written into `pr-monitor.json` at staging; the Gate 2 banner carries it)
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter)
- [ ] **Focus keyword.** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. So this is a manual step: in the WP editor's Rank Math panel, set the focus keyword to exactly `dopamine detox` (verbatim, not the title, not a paraphrase). The workflow never attempts this write.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you, by design and by standing instruction.
- [ ] After publishing, verify the live post per §8 below.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/dopamine-detox` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fdopamine-detox`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Confirm the three inbound links from §4b are live on their target posts
- [ ] FAQ schema: the wordpress-rest frontmatter template does NOT emit JSON-LD (FAQPage schema is a WP-plugin concern). If Rank Math is configured to emit FAQ schema, validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fdopamine-detox`; otherwise skip.

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **false** for this blog, so there is no repurpose step for this post. Skip.

## 10. Archive cleanup (automatic at Gate 2 finalize)

The finalize step already moved `blog-ops/drafts/dopamine-detox/` → `blog-ops/drafts/_archive/dopamine-detox/`. Verify:

```bash
ls blog-ops/drafts/dopamine-detox/          # should NOT exist
ls blog-ops/drafts/_archive/dopamine-detox/ # should exist, contains all the working files
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
  blog-ops/drafts/dopamine-detox/draft-v1.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/dopamine-detox.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real Markdown embeds at Stage 4b.5 staging, since every rendered file exists on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in `blog-ops/assets/dopamine-detox/`
