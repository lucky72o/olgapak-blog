# Action items: cornell-note-taking-method

Compiled by: blog-post-workflow (editor role) at Stage 4b, from a grep of draft-v1.md markers + images.md.

> **Paths:** history/spec (read-only) → `blog-ops/drafts/_archive/cornell-note-taking-method/`; live markdown → `content/blog/cornell-note-taking-method.md`; assets → `blog-ops/assets/cornell-note-taking-method/` (with `README.md` = copy of images.md). This whole workflow ran inside the git worktree `.claude/worktrees/cornell-note-taking-method`.

Read by: the human operator before publishing. Estimated remaining time: ~15 minutes (images + markers already done; mostly a final read + hand-applying inbound links + clicking Publish).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/cornell-note-taking-method/draft-v1.md` (humanized). Post-finalize: `content/blog/cornell-note-taking-method.md`.
- Approved outline: `blog-ops/drafts/cornell-note-taking-method/outline.md`
- Image plan: `blog-ops/drafts/cornell-note-taking-method/images.md` (→ also `blog-ops/assets/cornell-note-taking-method/README.md`)
- Total word count: ~2,688 (2,320 body prose)
- Author: olga (Olga Pak)

## 1. Create images (5 total) — ALL DONE ✅

All five assets are already on disk in `blog-ops/assets/cornell-note-taking-method/` (verified + eyeballed). Nothing to build; just confirm at publish they rendered in the WordPress preview.

- [x] Featured image: `featured.png` (ai-prompt) — created, on-brand hero ✅
- [x] Image 1: `cornell-layout-diagram.png` (remotion) — rendered ✅
- [x] Image 2: `cornell-5rs-process.png` (remotion) — rendered ✅
- [x] Image 3: `cornell-worked-example-biology.png` (remotion) — rendered, worked-example text verbatim ✅
- [x] Image 4: `right-method-for-the-job.png` (ai-prompt) — created ✅

**Remotion slots (3):** cornell-layout-diagram, cornell-5rs-process, cornell-worked-example-biology — all built, registered in `tools/remotion/src/Root.tsx`, and exported. Done.

**AI-generated slots (2, ai-prompt):** featured.png, right-method-for-the-job.png — generated and saved. Done.

Saved to: `blog-ops/assets/cornell-note-taking-method/`

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

None. The writer left 0 `[VERIFY:]` markers.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

All 5 resolved at Stage 3d (audit log; nothing to do):

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | ~42 | official Cornell three-zone layout (notes col ~2× cue col; ~2-inch summary) | resolved | https://lsc.cornell.edu/wp-content/uploads/2015/10/Cornell-Note_Taking-System.pdf (official Cornell PDF, .edu allowlist, 200) |
| 2 | ~112 | a 2024 study found Cornell training improved comprehension | resolved | https://tpls.academypublication.com/index.php/tpls/article/view/8509 (Abualzain 2024, confirmed) |
| 3 | ~112 | earlier study: better notes but no significant achievement difference (Broe 2013) | kept-general (marker dropped) | citeseerx URL SSL-dead; no loadable alternative; null side stated generally & honestly with NO link. Do not re-add a Broe citation without a live URL. |
| 4 | ~112 | Cornell advocated in the education/clinical literature | resolved | https://pubmed.ncbi.nlm.nih.gov/36548929/ (Saran 2022, confirmed) |
| 5 | ~122 | no clear paper-vs-digital difference (small sample) | resolved | https://pmc.ncbi.nlm.nih.gov/articles/PMC9247713/ (confirmed "no significant difference, P=0.61") |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer placed all 4 internal links directly as root-relative anchors: `/focused-note-taking-how-to-guide/`, `/outlining-note-taking-method/`, `/how-to-make-aesthetic-notes-complete-step-by-step-guide/`, `/how-to-write-a-meeting-summary/`.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links." **WordPress-adapter branch:** these existing posts live on the WordPress site and are NOT present as local markdown in this repo (`content/blog/` is empty — the back-catalog was published directly in WP). So there is nothing to auto-apply to a local file; each is a **hand-apply in wp-admin** task on the live post:

- [x] **outlining-note-taking-method** (id 416) — DONE via REST 2026-07-05: linked "Cornell note-taking method" where it discusses when another approach fits. Live (status: publish).
- [x] **focused-note-taking-how-to-guide** (id 639) — DONE via REST: turned its plain-text "Cornell Notes" mention into a link to `/cornell-note-taking-method/`. Live.
- [x] **how-to-write-a-meeting-summary** (id 458) — DONE via REST: linked the "Cornell note-taking method" (summary-row angle) in the note-taking-methods paragraph. Live.

## 4c. Amazon affiliate placeholder (HELD)

- [ ] The draft contains one literal marker in §7: `[AFFILIATE_PLACEHOLDER: Cornell-ruled notebooks — add Amazon Associates links + disclosure once approved]`. Amazon Associates is not live yet (per product.md). When approved: replace this marker with real affiliate links to Cornell-ruled notebooks (Mead, Oxford) + legal pads, AND add the required Amazon Associates affiliate disclosure. Until then, leave the generic notebook mention as-is and **remove the bare marker before publishing** (it must not appear in the live post).

## 5. Final manual read

- [ ] Read the whole post once (catch any awkward rhythm the humanizer missed).
- [ ] Grammarly target 80–85 (not 99 — perfection reads as AI).
- [ ] Product sanity: the only product mention is the free Text Summarizer (§7 + CTA) — confirm it matches `blog-ops/profile/product.md` (it does). CTA links `https://olgapak.com/ai-tools` — **confirm that's your correct free-tools URL** (no exact path was in the profile).
- [ ] Confirm the `[AFFILIATE_PLACEHOLDER:]` marker (§4c) is removed from the live post.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile. §6. N/A.

## 7. Publish (WordPress)

- [ ] Open the WordPress draft (post 2075) in wp-admin: `https://olgapak.com/wp-admin/post.php?post=2075&action=edit` (status: draft, 5 images + tags already synced).
- [ ] Read it once more in WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] Confirm the 4 in-post images and featured render, and the 4 internal links resolve.
- [ ] Click **Publish** in WP admin. This workflow never publishes for you.
- [ ] After publishing, verify per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/cornell-note-taking-method/`
- [ ] Google Search Console → URL Inspection → Request Indexing
- [ ] Bing IndexNow (Bing Webmaster Tools)
- [ ] Check the featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fcornell-note-taking-method%2F`
- [ ] Check mobile rendering at a narrow viewport
- [ ] If the WordPress frontmatter template emits a JSON-LD FAQ schema, validate: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fcornell-note-taking-method%2F`

## 9. Repurpose

`modules.repurpose` is **off** for this blog — no X/LinkedIn/newsletter repurpose outputs are produced. (Enable it in `blog-ops/config.yaml` and run `/repurpose-blog-post cornell-note-taking-method` if you want them later.)

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/cornell-note-taking-method/          # should NOT exist after finalize
ls blog-ops/drafts/_archive/cornell-note-taking-method/ # should exist, contains working files
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (5 resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits (4 internal links placed directly)
[IMAGE:]               , 4 hits (== 4 in-post images.md entries; total 5 with featured)
[AFFILIATE_PLACEHOLDER:], 1 hit (line 126 — remove before publish unless Associates is live)
```

Grep command:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE|AFFILIATE_PLACEHOLDER):' \
  content/blog/cornell-note-taking-method.md
```

`[IMAGE:]` placeholders are replaced with real Markdown embeds at Stage 4b.5 staging (file-existence-aware); the affiliate marker must be removed manually before publish.
