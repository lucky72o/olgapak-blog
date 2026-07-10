---
slug: best-notebooks-for-note-taking
target_keyword: best notebooks for note taking
created: 2026-07-08 10:20
last_updated: 2026-07-08 10:20
current_stage: finalize
current_owner: blog-post-workflow
status: active
gate_pending: gate_2_final
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: best-notebooks-for-note-taking

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/best-notebooks-for-note-taking/brief.md)
- [x] Slug approved (from content calendar #5; autonomous run per user instruction)
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch

- [x] research/_raw/_serp.json written (8 results; commercial/transactional intent)
- [x] research/_raw/_serp_selection.md written (5 selected; SERP shop/category-heavy)
- [x] research/_raw/NN-*.json written (5: gentlemanstationer x2, wirecutter, jetpens, wired — wired needed the user to grant its download permission)

### Stage 1.5a: Reddit research (enabled)

- [x] research/_raw/_reddit_search.json written (+ supplementary r/notebooks search)
- [x] research/_raw/_reddit_selection.md written (5 selected)
- [x] research/_raw/reddit-NN-*.json written (5 threads: moleskine-shite, phd-b6, all-notebooks-used, fp-paper, work-notebook)

### Stage 1.5b: X research (enabled)

- [x] research/_raw/_x_search.json written (Latest tab; X thin for stationery)
- [x] research/_raw/_x_selection.md written (2 selected)
- [x] research/_raw/x-NN-*.json written (2: Swany101, PumpHustler)

### Stage 1.5c: Competitor profile freshness re-check (SKIPPED — modules.competitors off)

### Stage 1b: Research analysis

- [ ] research/serp.md complete
- [ ] research/reddit.md complete
- [ ] research/x.md complete
- [x] research/serp.md complete
- [x] research/reddit.md complete
- [x] research/x.md complete
- [x] product reference loaded (editor reads product.md directly)

### Stage 1c: Plan synthesis

- [x] facts.md compiled
- [x] plan.md drafted
- [x] Stage 1c.5: plan-reviewer approves plan (verdict approve; 2 advisory notes → applied at outline)

---

## Stage 2: Outline

- [x] outline.md drafted (15 picks in 6 use-case groups; keyword-question lead H2; ~2,700-word roll-up)
- [x] outline.md status set to `approved`; current_stage=draft

---

## Stage 3: Writing

### Stage 3a: Draft
- [x] draft-v1.md generated (2,525 words body prose; frontmatter draft:true; olga voice)
- [x] draft word count within target (2,525 vs 2,400–2,900)
- [x] writer's handoff summary recorded in Notes

### Stage 3b: Editor review + revise loop
- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 1; 0 critical/major, 3 minor — 2 cosmetic fixes applied by editor: reMarkable table cells, Life Noble paraphrase)
- [x] Prior-iteration reviews archived (n/a — approved first pass)

## Stage 3c: Humanize
- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED (byte-exact: all markers, links, table, frontmatter, headings, FAQ)
- [x] Forbidden-phrase count: 0
- [x] Word count delta within -20% to 0% (0%)

## Stage 3d: Marker auto-resolution
- [x] draft grepped for [VERIFY:] + [EXTERNAL_LINK_NEEDED:] → ZERO of each (writer produced none; nothing to resolve)
- [x] each marker resolved / kept-general / deleted (n/a — none present)
- [x] every external URL allowlist-class + HTTP 200 (fountainpenlove, PBS/NOVA, penaddict, + own-site /ai-tools all 200; no top-10 SERP links)
- [x] facts.md updated (n/a — no resolutions)
- [x] re-lint passed (0 em-dashes, 15 affiliate + 5 image markers intact)
- [x] per-marker outcome log appended to Notes (n/a — no markers)

---

## Stage 4a: Image plan
- [x] images.md written (6: 1 featured ai-prompt + 5 in-post [1 remotion diagram + 4 ai-prompt]); in_post_entries=5 == draft [IMAGE:]=5
- [x] Each entry has production spec

## Stage 4a.5: Generate images (COMPLETE)
- [x] remotion slot rendered: `paper-problems-diagram.png` (348K) + PaperProblemsDiagram.tsx authored + registered in Root.tsx + `.staged-by-blog-workflow` sentinel present
- [x] 5 `ai-prompt` slots created by user (ChatGPT image, 1536×1024) + moved from drafts/ into assets/: featured.png, everyday-notebooks-desk.png, student-desk-spiral.png, rocketbook-workflow.png, finished-notebooks-shelf.png — all 6 assets present, featured + rocketbook-workflow eyeballed OK (clean text, brand palette, watermark)
- [x] featured-slot completion gate PASSED (featured.png exists) — RESUMED 2026-07-09
- Note: ai-prompt PNGs are 1.2–1.8 MB each (heavy for web); optional optimization pass recommended (action item), not blocking.

## Stage 4b: Action items compile
- [x] action-items.md written
- [x] Marker checkbox counts match grep (IMAGE 5, VERIFY 0, EXT 0, INT 0, AFFILIATE-PENDING 15)
- [x] Authors-map status confirmed (wordpress-rest: N/A)

## Stage 4b.5: Staging (git PR done; WP draft BLOCKED on auth)
- [x] markdown finalized → content/blog/best-notebooks-for-note-taking.md (5 images embedded, draft:true stripped)
- [x] featured cover verified present (featured.png)
- [x] inbound link applied to local cornell-note-taking-method.md (link-only diff); 3 live-only targets → action items
- [x] git PR path: nested worktree `.worktrees/blog-best-notebooks-for-note-taking` off origin/main; committed post+assets+remotion sources+archive snapshot; pushed `blog/best-notebooks-for-note-taking`; **PR #4 opened** → https://github.com/lucky72o/olgapak-blog/pull/4
- [x] pr-monitor.json written (mode: pr, status: open)
- [x] **WP draft: CREATED** (2026-07-09, after user fixed the credential). Auth probe re-run → 200 (Olga Pak, id 1). Gutenberg-converted (Kadence TOC injected, 31 headings, 5 in-post images, comparison table), 6 media uploaded (ids 2086–2091; featured=2086 as featured-1.png), image paths rewritten to WP URLs (0 local refs), **draft post id 2092** created, status `draft`, categories [12 Productivity, 9 EdTech], tags [14 note-taking, 15 productivity, 30 students], featured_media 2086. `wp_upload: ok`. Preview: https://olgapak.com/wp-admin/post.php?post=2092&action=edit
  - Tag note: frontmatter tags (Productivity/Planning/Focus) didn't match the site's tag taxonomy; mapped to existing tags note-taking/productivity/students (mirroring cornell's use of existing terms) rather than creating vague new ones.
- Note: main-tree cleanup (astro step 7h) intentionally SKIPPED — user wants everything committed in the session worktree, so the post + assets remain committed on `worktree-best-notebooks-for-note-taking` too.

## Stage 4c: Gate 2 + Finalize
- [ ] Gate 2 presented
- [ ] Human approved
- [ ] draft published to content/blog/<slug>.md
- [ ] asset folder created
- [ ] draft dir archived

---

## Gate log

- (none yet)

## Stage transition log

- intake completed: 2026-07-08 10:20 (owner: blog-post-workflow)
- research (SERP 5 + Reddit 5 + X 2) completed: 2026-07-08 10:36
- Stage 1b analysis completed: 2026-07-08 ~10:47
- Stage 1c plan + 1c.5 review (approve) completed: 2026-07-08 ~10:55
- Stage 2 outline completed: 2026-07-08 ~11:00
- Stage 3a draft-v1 (2,525w) completed: 2026-07-08 ~11:08
- Stage 3b review (approve, 0 crit/major) completed: 2026-07-08 ~11:14
- Stage 3c humanize (PASSED) completed: 2026-07-08 ~11:17
- Stage 3d markers (0 to resolve) completed: 2026-07-08 ~11:19
- Stage 4a image plan completed: 2026-07-08 ~11:25
- Stage 4a.5 PARTIAL (remotion diagram rendered; 5 ai-prompt pending) — PAUSED: 2026-07-08 ~11:30

## Post-review revisions (2026-07-10, user feedback)

**1. Real product links (replaced affiliate placeholders).** Per user + [[blogsmith-feedback]]: all 15 `[AFFILIATE-LINK-PENDING:]` placeholders replaced with real NON-affiliate product links (14 clean Amazon `/dp/<ASIN>` + 1 Levenger brand page for Circa), found via the logged-in Chrome (Amazon blocks curl). CTA form: "Check the price on Amazon →" / "See it at Levenger →". No affiliate tags, no disclosure (program not live). Applied to content/blog/<slug>.md + draft-v1.md. WP draft 2092 re-synced. custom-instructions.md §Content policy updated.

**2. Inbound links applied automatically via REST (all 4 live posts).** Per user + [[blogsmith-feedback]] (apply inbound links myself, never ask):
- cornell-note-taking-method → live post **2075** (+ repo copy in PR)
- focused-note-taking-how-to-guide → live post **639**
- outlining-note-taking-method → live post **416**
- how-to-make-aesthetic-notes-complete-step-by-step-guide → live post **606**
All point at https://olgapak.com/best-notebooks-for-note-taking (resolves once 2092 is published).

## Inbound-link application log (repo copy, Stage 4b.5)

- inbound link applied by workflow: content/blog/cornell-note-taking-method.md (write-ahead 2026-07-09; anchor "the best notebooks for note-taking" → /best-notebooks-for-note-taking, line 123 supplies context). Ships in PR #4.

## ▶ HOW TO RESUME

The workflow is paused at the Stage 4a.5 featured-slot completion gate by user choice (create images first).

1. Create the 5 `ai-prompt` images using the ready prompt blocks in `images.md` (paste each into ChatGPT image / Ideogram / Midjourney; site style = playful flat-vector, brand blue #2B6CB0). Save with the EXACT filenames into
   `blog-ops/assets/best-notebooks-for-note-taking/`:
   - `featured.png` (REQUIRED to unblock WP staging — fanned notebook stack + hand-lettered title)
   - `everyday-notebooks-desk.png`
   - `student-desk-spiral.png`
   - `rocketbook-workflow.png`
   - `finished-notebooks-shelf.png`
2. Tell me "resume best-notebooks-for-note-taking" (at minimum `featured.png` must exist; any of the 4 in-post files still missing become build-safe 'Image pending' notes + action items).
3. I then run Stage 4b (action items) → 4b.5 (WP Gutenberg staging + create WP draft + apply inbound links + open PR on `blog/best-notebooks-for-note-taking`) → Gate 2.

## Notes

**Run mode:** autonomous run inside session worktree `.claude/worktrees/best-notebooks-for-note-taking` (branch `worktree-best-notebooks-for-note-taking`), per user instruction "create new worktree and commit all the changes there. Also update the status of the post when you done."

**Gate 2 mode:** PR path (remote `lucky72o/olgapak-blog` resolves + gh works). Recorded at Step 0. Stage 4b.5 opens a PR on `blog/best-notebooks-for-note-taking`.

**Chrome MCP namespace:** `open-claude-in-chrome` (resolved at preflight; X logged in).

**Amazon links HELD** (custom-instructions.md): use `[AFFILIATE-LINK-PENDING: <product>]` placeholders, no live URLs. Hold the affiliate disclosure too until the program is live (leave as action item).

**Gutenberg converter:** `md-to-gutenberg.py` + `wordpress-publishing.md` are NOT on main — they live on the unmerged `docs/wordpress-publishing` branch (cornell worktree). Retrieve at WP staging (Stage 4b.5).

**Stage 3a writer handoff:** draft-v1.md, 2,525 words body prose. Markers: 15 `[AFFILIATE-LINK-PENDING:]` (Amazon HELD), 5 `[IMAGE:]` (after H2 2/3/4/7/8), 0 `[VERIFY:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`, 0 em-dashes. 5 internal links (root-relative, no trailing slash), 3 planned external links (fountainpenlove, PBS/NOVA, penaddict) + CTA to /ai-tools. Keyword ×5. No JSON-LD FAQ in frontmatter (wordpress-rest template defines none; FAQ schema is a WP-plugin concern). reMarkable/Kindle kept fully general to avoid volatile-spec markers.
