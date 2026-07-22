# Action items: how-to-stop-doomscrolling

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `draft-v1.md` markers + `images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/how-to-stop-doomscrolling/`
> - **Live post source:** `content/blog/how-to-stop-doomscrolling.md`
> - **Asset folder:** `blog-ops/assets/how-to-stop-doomscrolling/` (README.md = images.md copy + the 4 image files)

Read by: the human operator before publishing. **Note:** this run was executed autonomously through publish per the operator directive, so most items below were completed by the workflow (marked ✅ done); the residual manual item is the Rank Math focus keyword (not settable via REST).

Estimated remaining human time: ~2 minutes (Rank Math focus keyword only).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/how-to-stop-doomscrolling/draft-v1.md` (humanized at Stage 3c; markers resolved at Stage 3d). Post-finalize: `content/blog/how-to-stop-doomscrolling.md`.
- Approved outline: `blog-ops/drafts/how-to-stop-doomscrolling/outline.md`
- Image plan: `blog-ops/drafts/how-to-stop-doomscrolling/images.md` (→ `blog-ops/assets/how-to-stop-doomscrolling/README.md`)
- Review: `review.md` (verdict approve, iteration 1)
- Total word count: 2510 (~2019 body prose excl. FAQ)
- Author: olga (Olga Pak)

## 1. Create images (4 total) — ✅ DONE (all rendered to the asset folder)

Image spec: `images.md` (also copied to `blog-ops/assets/how-to-stop-doomscrolling/README.md`).

- [x] Featured image: `featured.png`, type: `ai-prompt` — generated (couch-at-night hero, baked-in title, olgapak.com wordmark), 1536×1024
- [x] Image 1: `doomscroll-loop-diagram.png`, type: `remotion` — rendered, 3600×2400
- [x] Image 2: `boring-grayscale-phone.png`, type: `ai-prompt` — generated, 1536×1024
- [x] Image 3: `phone-free-morning.png`, type: `ai-prompt` — generated, 1536×1024

**Remotion slots** (1 total): `DoomscrollLoopDiagram` → `doomscroll-loop-diagram.png` (authored `tools/remotion/src/DoomscrollLoopDiagram.tsx`, registered in `Root.tsx`, exported at `--scale=2`). ✅

**AI-generated slots** (3 total, `ai-prompt`): `featured.png`, `boring-grayscale-phone.png`, `phone-free-morning.png` — generated via codex imagegen (gpt-image, 3:2). ✅

Saved to: `blog-ops/assets/how-to-stop-doomscrolling/`

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

None. The writer left zero `[VERIFY:]` markers (all body claims traced to `facts.md`).

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v1.md:29` | variable-reward loops + negativity bias keep you scrolling | resolved (split into two scope-accurate primaries) | variable-reward → https://pmc.ncbi.nlm.nih.gov/articles/PMC12322333/ ; negativity bias → https://pmc.ncbi.nlm.nih.gov/articles/PMC9580444/ |

Also tightened at Stage 3d: dropped the pre-inserted melatonin PubMed link (blue-light-glasses RCT; melatonin suppression only its proposed mechanism) to avoid overclaiming — sleep claim now carried by the on-point Bhat 2018 citation. Net shipped external links: 5, all primary/allowlist.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None.

## 4b. Inbound links from existing posts to this one — applied live via REST at finalize

`publish.wordpress.apply_inbound_links_live: true` + custom-instructions.md → these are applied to the LIVE back-catalogue WP posts via REST once this post is published (they are not local markdown, so §Staging step 6 skips them; the live pass runs at On-Gate-2-approval).

- [ ] `things-to-do-instead-of-being-on-your-phone` (live WP post) → add anchor "how to stop doomscrolling" → `/how-to-stop-doomscrolling`, in a related-tactics sentence
- [ ] `productive-things-to-do-on-your-phone-instead-of-scrolling` (live WP post) → add anchor "stop doomscrolling" → `/how-to-stop-doomscrolling`, in a contextual sentence

## 5. Final manual read

- [x] Non-shaming tone held; reviewer + humanizer passed; 0 forbidden phrases, 0 em-dashes
- [ ] Optional: skim the published post once live (below)
- Product check (modules.product on): the only product mention is the soft free-AI-tools CTA (`/ai-tools`, verified HTTP 200) — no hallucinated features, no prices. ✅

## 6. Author map — N/A for the WordPress adapter.

## 7. Publish (WordPress)

- [x] WordPress draft created/updated via REST at Stage 4b.5 (Gutenberg blocks, featured cover set, category Productivity, tags resolved)
- [x] Read once in the WP preview (rendered by the workflow at staging)
- [ ] **Rank Math focus keyword** — set it in the WP editor's Rank Math panel to exactly: `how to stop doomscrolling`. Per site-conventions.md §SEO plugin, this is NOT settable via standard REST, so it is the one manual step. (The blog owner sets this.)
- [x] **Publish** — set to `publish` via REST per the operator directive (this run publishes rather than leaving a draft).
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/how-to-stop-doomscrolling` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fhow-to-stop-doomscrolling`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate JSON-LD FAQ rich result: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fhow-to-stop-doomscrolling`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is OFF for this blog — no repurpose step.

## 10. Archive cleanup (automatic at finalize)

```bash
ls blog-ops/drafts/how-to-stop-doomscrolling/           # should NOT exist after finalize
ls blog-ops/drafts/_archive/how-to-stop-doomscrolling/  # should exist
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (1 resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 3 hits (matches 3 in-post entries in images.md; total images = 3 + 1 featured = 4)
```

Grep command:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/how-to-stop-doomscrolling/draft-v1.md
```

`[IMAGE:]` placeholders are replaced with real Markdown embeds at Stage 4b.5 staging (all 4 asset files exist, so all 3 in-post slots embed real images; none becomes an "Image pending" note).
