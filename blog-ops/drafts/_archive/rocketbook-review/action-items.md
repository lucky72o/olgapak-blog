# Action items: rocketbook-review

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/rocketbook-review/draft-v2.md` markers + `blog-ops/drafts/rocketbook-review/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/rocketbook-review/`
> - **Live post (where you edit):** the WordPress draft (repo copy at `content/blog/rocketbook-review.md`)
> - **Asset folder:** `blog-ops/assets/rocketbook-review/`

Read by: the human operator before publishing.

**Purpose:** the single page the human works through before publishing. Estimated total time: 20 minutes.

Post date (drafted): 2026-10-14 (the console restamps it at Gate 2).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/rocketbook-review/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/rocketbook-review.md` + the WordPress draft.
- Approved outline: `blog-ops/drafts/rocketbook-review/outline.md`
- Image plan: `blog-ops/drafts/rocketbook-review/images.md`
- Review history: `review.md` (v2, approve) + `review-v1.md`; plan reviews `plan-review.md` (v2, approve) + `plan-review-v1.md`
- Total word count: ~2,175 body prose + ~233 FAQ (2,751 raw `wc -w` including frontmatter and link URLs)
- Author: olga

**Please read before publishing (no hands-on test on record):** this review is research-led (Rocketbook's own store and help pages, October 2026, plus dated owner reports from Reddit, 2021 to 2025). It invents no personal test results. If you own a Rocketbook, adding one or two lines of your own experience (or a real photo) would strengthen it.

## 1. Create images (4 total), all rendered at Stage 4a.5

All four files are in `blog-ops/assets/rocketbook-review/` and passed the editor's look check.

- [ ] Featured image: `featured.png`, type: `ai-prompt` (hand-lettered title over Olga-style illustration wiping a page). Verify you like it.
- [ ] Image 1: `rocketbook-write-scan-wipe.png`, type: `ai-prompt`. Note: overlaps `best-notebooks-for-note-taking/rocketbook-workflow.png` in concept; drop it if you prefer.
- [ ] Image 2: `rocketbook-care-dos-donts.png`, type: `ai-prompt` (cloth + water pen = do; soap, wet wipes, pen eraser = don't)
- [ ] Image 3: `rocketbook-pens-per-semester.png`, type: `remotion`

**Remotion slots** (1 total):

- [x] Remotion: `rocketbook-review--rocketbook-pens-per-semester` → `rocketbook-pens-per-semester.png` (composition built, registered, exported)

**AI-generated slots** (3 total, `ai-prompt`):

- [x] AI: `featured.png` (generated, reviewed, saved)
- [x] AI: `rocketbook-write-scan-wipe.png` (generated, reviewed, saved)
- [x] AI: `rocketbook-care-dos-donts.png` (generated, reviewed, saved)

**Separate repo fix needed (not this post):** `tools/remotion/src/Root.tsx` on `main` does not compile: three `<Still>` entries (FiveMinutePostMeetingPass, DownsizingFilterDiagram, HighlighterTipShapes) lost their `width={CANVAS.width} height={CANVAS.height} />` line in an earlier union merge. Repaired in this post's worktree only so the chart could render.

Save all to: `blog-ops/assets/rocketbook-review/`

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

None. The writer emitted zero `[VERIFY:]` markers; every claim traces to `facts.md`.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

None.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None.

## 4b. Add inbound links from existing posts to this one

Applied at Stage 4b.5 to the repo copies; going live follows the adapter rule (applied live via REST once this post is published, `apply_inbound_links_live: true`; until then, hand-apply only if needed):

- [ ] `content/blog/best-notebooks-for-note-taking.md`, anchor "my full Rocketbook review" → `/rocketbook-review`, in the "### Rocketbook (Core / Fusion)" paragraph
- [ ] `content/blog/gifts-for-students.md`, anchor "read my Rocketbook review" → `/rocketbook-review`, in the "### Rocketbook Core Reusable Notebook" section
- [ ] `content/blog/best-pens-for-note-taking.md`, anchor "Rocketbook review" → `/rocketbook-review`, in the "### Pilot FriXion, best erasable pen for planners" section

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] Grammarly score target: 80–85 (not 99)
- [ ] Product module: the post deliberately names none of Olga's AI tools (standing rule); confirm nothing slipped in
- [ ] Prices: the post uses price tiers plus one dated "from about $35" for the Core (Rocketbook US store, October 2026) and a labelled pen estimate ($12 to $15 a semester, at $3 a pen from the $9 3-pack). Re-check if publishing much later.
- [ ] Kindle Scribe link goes to the Essentials Bundle listing (B0DB2RG2C5), not the bare device; reMarkable link (B0DG9ZXWMK) differs from the one in the notebooks roundup (B0DGBDR2PM). Swap if you prefer consistency.

## 6-7. Publish-adapter-specific steps

§6. N/A for the WordPress adapter.

§7. Publish

- [ ] Open the WordPress draft preview (the URL is recorded as `wp_preview_url` in `pr-monitor.json` once staging opens the draft and pull request).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by this adapter).
- [ ] **Focus keyword:** set the focus keyword in Rank Math to exactly: `rocketbook review`. Rank Math's field is not settable via REST, so set it yourself in the WP editor's Rank Math panel before publishing.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/rocketbook-review`
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Frocketbook-review`
- [ ] Check mobile rendering at a narrow viewport (the 7-row lineup table especially)
- [ ] Validate the FAQ schema: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Frocketbook-review`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is off for this blog; skip.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/rocketbook-review/          # should NOT exist after finalize
ls blog-ops/drafts/_archive/rocketbook-review/ # should exist
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]             , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]              , 3 hits (matches 3 in-post entries in images.md; total images = 3 + 1 featured)
```

Grep command the editor ran at Stage 4b:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/rocketbook-review/draft-v2.md
```

`[IMAGE:]` placeholders are replaced with real embeds at Stage 4b.5 staging (all four files exist).

- [ ] All `[IMAGE:]` placeholders replaced in the staged post and each path points to a file that exists in the asset folder
