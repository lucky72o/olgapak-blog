# Action items: productive-morning-routine

Compiled by: blog-post-workflow skill (editor role) at Stage 4b (2026-10-13), from a grep of `blog-ops/drafts/productive-morning-routine/draft-v2.md` markers + `blog-ops/drafts/productive-morning-routine/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/productive-morning-routine/`
> - **Repo copy of the post:** `content/blog/productive-morning-routine.md`; the live version is the WordPress draft (wp-admin).
> - **Asset folder:** `blog-ops/assets/productive-morning-routine/`

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Estimated total time: 15 minutes.

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/productive-morning-routine/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/productive-morning-routine.md` + the WordPress draft.
- Approved outline: `blog-ops/drafts/productive-morning-routine/outline.md`
- Image plan: `blog-ops/drafts/productive-morning-routine/images.md`
- Review history: `review.md` (v2, approve) + `review-v1.md`
- Total word count: about 2,060 body words + FAQ
- Author: olga (Olga Pak)

## 1. Create images (4 total)

All four were rendered automatically at Stage 4a.5 and checked by the editor. Nothing to build; glance at each in the preview.

- [x] Featured image: `featured.png`, see images.md §Featured, type: `ai-prompt`
- [x] Image 1: `evening-prep-night-before.png`, see images.md §Image 1, type: `ai-prompt`
- [x] Image 2: `morning-routine-7-steps-flow.png`, see images.md §Image 2, type: `remotion`
- [x] Image 3: `sample-morning-routines-timeline.png`, see images.md §Image 3, type: `remotion`

**Remotion slots** (2 total):

- [x] Remotion: `productive-morning-routine--morning-routine-7-steps-flow` → `morning-routine-7-steps-flow.png`
- [x] Remotion: `productive-morning-routine--sample-morning-routines-timeline` → `sample-morning-routines-timeline.png`

**AI-generated slots** (2 total, `ai-prompt`):

- [x] AI: `featured.png`
- [x] AI: `evening-prep-night-before.png`

Saved to: `blog-ops/assets/productive-morning-routine/`

Note: `tools/remotion/src/Root.tsx` on main does not compile (an earlier union-merge dropped the width/height line of three older Stills: FiveMinutePostMeetingPass, DownsizingFilterDiagram, HighlighterTipShapes). Repaired in this post's worktree to render. Main needs the same three-line fix.

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

None. The writer cited only facts.md rows; Stage 3d found zero markers.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

None.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None.

## 4b. Add inbound links from existing posts to this one

Applied at Stage 4b.5 to the repo copies of these posts. This post is still a WordPress draft, so the live posts need the link too (custom-instructions.md asks the workflow to apply them via REST; if staging did not, hand-apply with the adapter's commands):

- [ ] `content/blog/how-to-stop-doomscrolling.md`: anchor "productive morning routine" → `/productive-morning-routine`, in the paragraph starting "How you start the day sets its tone, so keep the first hour screen-free"
- [ ] `content/blog/how-to-reduce-screen-time.md`: anchor "morning routine" → `/productive-morning-routine`, in the bullet "Charge it outside the bedroom overnight..."
- [ ] `content/blog/how-to-plan-your-week.md`: anchor "a short morning routine" → `/productive-morning-routine`, in the FAQ answer about "light daily check-ins rather than rebuilding everything each morning"

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] Grammarly score target: 80–85
- [ ] Product check: the post must not mention Olga's AI tools (standing rule). The closing CTA links the time-blocking guide instead of the AI tools page; switch it if you prefer.
- [ ] The intro credibility line says "a decade in aviation PR" (verbatim from voice.md); authors.md says 8+ years. Adjust if you want them to match.

## 6-7. Publish-adapter-specific steps

§6. N/A for the WordPress adapter.

### §7, Publish

- [ ] Open the WordPress draft preview (URL in `pr-monitor.json` `wp_preview_url`, written when the draft is created at staging).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by this adapter).
- [ ] **Focus keyword.** Set the focus keyword in Rank Math to exactly: `productive morning routine`. Rank Math's focus keyword is not settable via REST, so set it yourself in the WP editor's Rank Math panel before publishing.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/productive-morning-routine`
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fproductive-morning-routine`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate FAQ schema: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fproductive-morning-routine`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is off for this blog; skip.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/productive-morning-routine/          # should NOT exist
ls blog-ops/drafts/_archive/productive-morning-routine/ # should exist
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]             , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]              , 3 hits (matches 3 in-post entries in images.md; total images = 3 + 1 featured)
```

Grep command run at Stage 4b:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/productive-morning-routine/draft-v2.md
```

Expected in the staged post: zero hits (the `[IMAGE:]` placeholders become embeds at staging).
