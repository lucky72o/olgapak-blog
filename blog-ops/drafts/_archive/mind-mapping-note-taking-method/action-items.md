# Action items: mind-mapping-note-taking-method

Compiled by: blog-post-workflow skill (editor role) at Stage 4b.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/mind-mapping-note-taking-method/`
> - **Live post (canonical markdown):** `content/blog/mind-mapping-note-taking-method.md`
> - **WordPress post:** created at Stage 4b.5 (draft), set to `publish` at Gate 2 finalize per operator instruction.
> - **Asset folder:** `blog-ops/assets/mind-mapping-note-taking-method/` (README.md = images.md copy + the 4 rendered PNGs).

Read by: the human operator (most items are already executed by this autonomous run; a few WordPress-side items remain manual).

**Purpose:** the single page to verify after publish. Estimated remaining time: ~5 minutes (Rank Math focus keyword + post-publish checks).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/mind-mapping-note-taking-method/draft-v1.md` → post-finalize `content/blog/mind-mapping-note-taking-method.md`
- Approved outline: `outline.md` → archived
- Image plan: `images.md` → archived + copied to `blog-ops/assets/mind-mapping-note-taking-method/README.md`
- Review history: `review.md`, `plan-review.md` (+ `plan-review-v1.md`) → archived
- Total word count: ~1,999 body words
- Author: olga (Olga Pak)
- Title: Mind Mapping Note-Taking: How to Use It (With Steps)
- Target keyword: mind mapping note taking
- Category: Productivity, EdTech

## 1. Create images (4 total) — DONE (all rendered at Stage 4a.5)

Image spec: `blog-ops/drafts/mind-mapping-note-taking-method/images.md` (archived + copied to `blog-ops/assets/mind-mapping-note-taking-method/README.md`). All 4 are Remotion, rendered at `--scale=2`, visually verified.

- [x] Featured image: `featured.png`, images.md §Featured, type: `remotion` (composition `MindMapFeatured`)
- [x] Image 1: `mindmap-vs-web-contrast.png`, images.md §Image 1, type: `remotion` (`MindMapVsWebContrast`)
- [x] Image 2: `heart-mindmap-worked-example.png`, images.md §Image 2, type: `remotion` (`HeartMindMap`)
- [x] Image 3: `mindmap-node-good-vs-bad.png`, images.md §Image 3, type: `remotion` (`MindMapNodeGoodVsBad`)

**Remotion slots (4 total):** built + registered in `tools/remotion/src/Root.tsx`, exported to the asset dir.
- [x] Remotion: `MindMapFeatured` → `featured.png`
- [x] Remotion: `MindMapVsWebContrast` → `mindmap-vs-web-contrast.png`
- [x] Remotion: `HeartMindMap` → `heart-mindmap-worked-example.png`
- [x] Remotion: `MindMapNodeGoodVsBad` → `mindmap-node-good-vs-bad.png`

**AI-generated slots (0):** none.

Saved to: `blog-ops/assets/mind-mapping-note-taking-method/`

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

None. (Writer left 0 `[VERIFY:]` markers; all numeric claims traced to facts.md or were reframed craft rules.)

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

Audit log (both resolved to independent allowlist/primary sources; NOT the SERP competitors):

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | draft §2 | images/idea encoded more than once are remembered better (scoped to picture superiority effect) | resolved | https://pmc.ncbi.nlm.nih.gov/articles/PMC3483366/ (NIH/PMC review; anchor scoped to "pictures are remembered better than words") |
| 2 | draft §4 | Tony Buzan popularized the modern mind map | resolved | https://www.boisestate.edu/online/2021/12/16/what-is-mind-mapping/ (.edu allowlist, not a SERP competitor) |

## 4. `[INTERNAL_LINK_NEEDED:]` markers

Resolved at Stage 4b (target confirmed live):

- [x] draft §5 (paper vs digital), topic: "a roomy unlined notebook for big mind maps" → resolved to `/best-notebooks-for-note-taking` (confirmed live on olgapak.com; anchor "roomy unlined notebook"). This is a spoke→money-post up-link per the cluster strategy.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. `publish.wordpress.apply_inbound_links_live: true`, so once THIS post is published, the inbound link is applied LIVE via REST at Gate 2 finalize (per wordpress-rest adapter §Live inbound-link application). Also applied to the repo copy.

- [ ] `content/blog/note-taking-methods.md` + LIVE `/note-taking-methods` WP post — add anchor "the mind mapping note-taking method" → `/mind-mapping-note-taking-method`, in the pillar's mind-mapping/comparison section. (Applied automatically at finalize since this post publishes; verify it rendered.)

## 5. Final manual read

- [x] Read-through for AI tells — reviewer + humanizer passes clean (0 forbidden phrases, 0 em-dashes).
- [ ] Optional: spot-check Grammarly (target 80–85, not 99).
- [x] Product-feature hallucination scan — only Text Summarizer mentioned (soft), which exists in product.md. No invented features.
- [ ] competitors — N/A (module off).

## 6. Author-map — N/A for the WordPress adapter.

## 7. Publish (wordpress-rest)

Most of this is executed by the autonomous run (WP draft created at Stage 4b.5, set to `publish` at Gate 2 finalize per operator instruction). Remaining MANUAL item:

- [x] WordPress draft created (Stage 4b.5): title, excerpt, Gutenberg body, featured image, category, tags synced by the adapter.
- [x] Post set to `publish` (Gate 2 finalize, operator instruction).
- [ ] **Rank Math focus keyword (MANUAL — not settable via REST).** In WP admin, open the post → Rank Math panel → set Focus Keyword to exactly: `mind mapping note taking`. (`site-conventions.md` §SEO plugin: Rank Math, not exposed on the standard `wp/v2/posts` schema.)
- [ ] If the WP editor shows a stale "Restore the backup" banner after the REST sync, **dismiss/reload — do NOT restore** (restoring reverts the synced content; see custom-instructions.md).

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/mind-mapping-note-taking-method` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check the featured-image Open Graph preview
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema (if emitted by the frontmatter template) via Google Rich Results test

## 9. Trigger Phase 5 repurpose

`modules.repurpose` is OFF for this blog, so skip. (If enabled later: `/repurpose-blog-post mind-mapping-note-taking-method`.)

## 10. Archive cleanup (automatic at Gate-2 finalize)

```bash
ls blog-ops/drafts/mind-mapping-note-taking-method/           # should NOT exist after finalize
ls blog-ops/drafts/_archive/mind-mapping-note-taking-method/  # should exist
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (2 resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits (1 resolved at Stage 4b)
[IMAGE:]               , 3 hits (match the 3 in-post images.md entries; total 4 images = 3 + 1 featured)
```

Grep command run at Stage 4b (pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/mind-mapping-note-taking-method/draft-v1.md
```

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax at staging (Stage 4b.5), paths point to files in `blog-ops/assets/mind-mapping-note-taking-method/`.
