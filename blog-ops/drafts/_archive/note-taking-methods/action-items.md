# Action items: note-taking-methods

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `draft-v1.md` markers + `images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/note-taking-methods/`
> - **Live post (canonical markdown):** `content/blog/note-taking-methods.md`; the live WordPress draft is at `wp_preview_url` (see `pr-monitor.json`).
> - **Asset folder:** `blog-ops/assets/note-taking-methods/` (contains `README.md` = copy of images.md + the image files).

Read by: the human operator before publishing.

**Purpose:** the single page to work through after Gate 2. Estimated total time: ~25 minutes (mostly the 2 pending in-post images + Rank Math keyword + WP Publish).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/note-taking-methods/draft-v1.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/note-taking-methods.md`.
- Approved outline: `blog-ops/drafts/note-taking-methods/outline.md`
- Image plan: `blog-ops/drafts/note-taking-methods/images.md` → copied to `blog-ops/assets/note-taking-methods/README.md`
- Review history: `review.md`
- Total word count: 2727 (body prose ~2330, excl. FAQ)
- Author: olga (Olga Pak)

## 1. Create images (5 total)

Image spec: `blog-ops/assets/note-taking-methods/README.md` (= images.md). Estimated time: ~15 minutes (2 pending in-post images).

- [x] Featured image: `featured.png`, type: `ai-prompt` — DONE (human-created: teal bg, title baked in with "One" red accent, olgapak.com wordmark; verified on disk).
- [x] Image 1: `cornell-layout-diagram.png`, type: `remotion` — DONE (rendered; verified).
- [x] Image 2: `mind-map-example.png`, type: `remotion` — DONE (switched from ai-prompt per request; MethodMindMap composition; rendered + verified; embedded + synced to WP).
- [x] Image 3: `charting-example.png`, type: `remotion` — DONE (switched from ai-prompt; ChartingExample composition, crisp legible cells; rendered + verified; embedded + synced to WP).
- [x] Image 4: `method-decision-flow.png`, type: `remotion` — DONE (rendered; verified).

**Remotion slots** (4 total): all built, registered, and exported.
- [x] Remotion: `CornellLayoutDiagram` → `cornell-layout-diagram.png` (reused from the Cornell post)
- [x] Remotion: `MethodDecisionFlow` → `method-decision-flow.png` (net-new this run)
- [x] Remotion: `MethodMindMap` → `mind-map-example.png` (net-new; switched from ai-prompt)
- [x] Remotion: `ChartingExample` → `charting-example.png` (net-new; switched from ai-prompt)

**AI-generated slots** (1 total, `ai-prompt`):
- [x] AI: `featured.png` (human-created this run)

All images DONE — nothing left to create. (All 5 embedded in the post + uploaded to WP draft 2102 + committed to PR #6.)

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

None. The writer left zero `[VERIFY:]` markers.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v1.md:96` | students who wrote notes by hand understood concepts better than those who typed them (Mueller & Oppenheimer 2014) | resolved | Linked to https://pubmed.ncbi.nlm.nih.gov/24760141/ (NIH/PubMed; abstract confirms the finding). SAGE publisher page 403s automated checkers, so PubMed used. Verified HTTP 200. Mirrored into facts.md. |

Also confirmed (not a marker): the Frontiers/NTNU handwriting link already in the draft was verified accurate at Stage 3d (no overclaim; HTTP 200).

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

3 markers — all point at cluster posts that are **planned but not yet published**, so they go to the backlog (wire them once each post is live):

- [ ] `draft-v1.md:67`, topic: "mind-mapping note-taking deep-dive", candidate slug: `mind-mapping-note-taking-method` (calendar #7 — NOT yet published). Insert as `/mind-mapping-note-taking-method` (no trailing slash) once live.
- [ ] `draft-v1.md:77`, topic: "charting method deep-dive", candidate slug: `charting-method-note-taking` (calendar #11 — NOT yet published). Insert as `/charting-method-note-taking` once live.
- [ ] `draft-v1.md:108`, topic: "best notebooks round-up", candidate slug: `best-notebooks-for-note-taking` (calendar #5 — NOT yet published). Insert as `/best-notebooks-for-note-taking` once live.

Until published, these render as bare bracketed markers — either leave the sentence link-free (recommended: the staging step drops the marker text to plain prose) or wire when the target ships.

### Extra: `[AFFILIATE-LINK-PENDING:]` (custom-instructions.md — Amazon program not live)

- [ ] `draft-v1.md:108`, `[AFFILIATE-LINK-PENDING: note-taking notebooks]`. Leave as-is (no live affiliate link) until the Amazon Associates program is approved, then swap in the affiliate link + required disclosure. The staging step renders this as plain prose (no broken link).

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. **WordPress v1 scope:** editing an existing post's repo markdown does NOT sync to the live WP site, so each is a hand-apply item in wp-admin (or auto-applied via REST at publish if `apply_inbound_links_live` fires — it only runs when this post's status is `publish`).

- [ ] `content/blog/cornell-note-taking-method.md` (in repo + live) — applied to the repo file at Stage 4b.5 (ships in the PR). ALSO hand-apply to the live WP `cornell-note-taking-method` post: anchor "compare Cornell with the other note-taking methods" → `/note-taking-methods`, in the section where it names other methods.
- [ ] `outlining-note-taking-method` (live only — not in repo): hand-apply in wp-admin: anchor "see how outlining compares to other note-taking methods" → `/note-taking-methods`.
- [ ] `focused-note-taking-how-to-guide` (live only — not in repo): hand-apply in wp-admin: anchor "the main note-taking methods compared" → `/note-taking-methods`.

Prefilled REST commands (paste-and-run) for the two live-only posts:
```bash
WP_USER="wpx_admin101"; WP_BASE="https://olgapak.com"
# 1) fetch target raw content (repeat per slug)
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" "$WP_BASE/wp-json/wp/v2/posts?slug=outlining-note-taking-method&context=edit&_fields=id,content"
# 2) insert <a href="https://olgapak.com/note-taking-methods">anchor</a> into content.raw at the related spot
# 3) POST back: curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST -H 'Content-Type: application/json' "$WP_BASE/wp-json/wp/v2/posts/<id>" -d @<(jq -n --arg c "<edited>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole post aloud once (catch any rhythm/AI tells the pipeline missed).
- [ ] Grammarly target 80–85 (not 99 — perfection reads as AI).
- [ ] Product scan: the only product claim is the soft Text Summarizer mention (H2-7) — confirm it matches `blog-ops/profile/product.md` (it does: "condenses long text into a scannable summary"). No first-party usage stats used.
- [ ] Verify the CTA/summarizer URLs (`/ai-tools`, `/ai-tools/ai-text-summarizer`) resolve on the live site — the writer inferred these from the calendar path convention; fix if the real landing URLs differ.

## 6. Author map

§6. N/A for the WordPress adapter.

## 7. Publish (WordPress)

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (see `pr-monitor.json` after staging).
- [ ] Read it once more in WP admin (title, excerpt, featured image, category all synced by the adapter).
- [ ] **Focus keyword (Rank Math — manual, not settable via standard REST):** set the Rank Math focus keyword to exactly: `note-taking methods` (verbatim target keyword, not the title). Do this in the WP editor's Rank Math panel before publishing.
- [ ] Confirm category is **Productivity + EdTech** (term ids 12, 9) — not "Uncategorized".
- [ ] Click **Publish** in WP admin. (This workflow never publishes for you — the WP post stays `draft`.)
- [ ] After the REST sync, dismiss the "Restore the backup" banner if it appears — do NOT click Restore (it reverts the synced draft; per custom-instructions.md).
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/note-taking-methods` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check featured-image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fnote-taking-methods`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the FAQ JSON-LD (if emitted): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fnote-taking-methods`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is OFF for this blog — skip. (If enabled later: `/repurpose-blog-post note-taking-methods`.)

## 10. Archive cleanup (automatic at Gate-2 finalize)

```bash
ls blog-ops/drafts/note-taking-methods/          # should NOT exist after finalize
ls blog-ops/drafts/_archive/note-taking-methods/ # should exist
```

---

## Marker grep summary (raw)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (1 resolved at Stage 3d → PubMed)
[INTERNAL_LINK_NEEDED:], 3 hits (all planned-not-published cluster posts → backlog)
[IMAGE:]               , 4 hits (matches 4 in-post images.md entries; total images = 4 + 1 featured = 5)
[AFFILIATE-LINK-PENDING:], 1 hit (Amazon program not live — held)
```

Grep command (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE|AFFILIATE-LINK-PENDING):' \
  blog-ops/drafts/note-taking-methods/draft-v1.md
```

`[IMAGE:]` placeholders are replaced at Stage 4b.5 staging: rendered images (featured, cornell-layout-diagram, method-decision-flow) become real embeds; the 2 pending ai-prompt images (mind-map, charting) render as build-safe "Image pending" notes until created.
