---
slug: mind-mapping-note-taking-method
target_keyword: mind mapping note taking
created: 2026-07-18 12:38
last_updated: 2026-07-18 14:50
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: mind-mapping-note-taking-method

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/mind-mapping-note-taking-method/brief.md)
- [x] Slug approved by human (auto-approved from content calendar #7; sibling-consistent with cornell-/outlining-note-taking-method)
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch

- [x] research/_raw/_serp.json written (9 results, PAA feature)
- [x] research/_raw/_serp_selection.md written (5 selected, 0 failed)
- [x] research/_raw/NN-*.json written (01 york, 02 open, 05 evernote, 06 goodnotes, 08 hull)

### Stage 1.5a: Reddit research (enabled)

- [x] research/_raw/_reddit_search.json written (+ _reddit_search2.json refined query)
- [x] research/_raw/_reddit_selection.md written (5 selected)
- [x] research/_raw/reddit-NN-*.json written (00-notetaking, 01-ibo, 02/03-pkms, 04-study; 0 failed)

### Stage 1.5b: X research (SKIPPED — declined at intake)

### Stage 1.5c: Competitor freshness (N/A — modules.competitors off)

### Stage 1b: Research analysis (blog-researcher)

- [x] research/serp.md complete
- [x] research/reddit.md complete
- [x] product reference loaded (editor read product.md directly)

### Stage 1c: Plan synthesis

- [x] facts.md compiled
- [x] plan.md drafted
- [x] Stage 1c.5: plan-reviewer approves plan (approved iteration 2; v1 requested 3 minor fixes, all applied)

---

## Stage 2: Outline

- [x] outline.md drafted (every H2 cites facts; ~2,100 word roll-up in target)
- [x] outline.md status set to `approved`; current_stage=draft (no human gate)

---

## Stage 3: Writing

### Stage 3a: Draft
- [x] draft-v1.md generated
- [x] word count within target (~1,999 body words; target 1,800–2,200)
- [x] writer handoff recorded in Notes

### Stage 3b: Review + revise
- [x] review.md written with Verdict
- [x] Verdict = approve (iteration 1, 0 critical/0 major/2 minor)
- [x] prior reviews archived if loop ran (N/A — approved first pass)

## Stage 3c: Humanize
- [x] humanizer spawned
- [x] Preservation check: PASSED (backup deleted)
- [x] Forbidden-phrase count: 0 → 0
- [x] Word count delta +0.2% (light-touch pass; draft arrived clean)

## Stage 3d: Marker auto-resolution
- [x] draft grepped for [VERIFY:] + [EXTERNAL_LINK_NEEDED:]
- [x] each marker resolved (2 EXTERNAL resolved with cites; 0 VERIFY)
- [x] added external URLs allowlist-class (NIH/PMC + boisestate.edu), HTTP 200, not SERP top-10
- [x] facts.md updated
- [x] re-lint passed (0 em-dashes, 0 residual VERIFY/EXTERNAL)
- [x] per-marker log appended to Notes

**Stage 3d per-marker outcome log:**
- §2 dual-coding "[EXTERNAL_LINK_NEEDED: images and words remembered better than words alone]" → RESOLVED (cite: https://pmc.ncbi.nlm.nih.gov/articles/PMC3483366/ ; scoped to "picture superiority effect: pictures remembered better than words" to avoid overclaiming).
- §4 Buzan "[EXTERNAL_LINK_NEEDED: Tony Buzan popularised the modern mind map]" → RESOLVED (cite: https://www.boisestate.edu/online/2021/12/16/what-is-mind-mapping/ , .edu allowlist, not a SERP competitor).
- §5 "[INTERNAL_LINK_NEEDED: a notebook/large pad for big mind maps]" → OUT OF SCOPE for 3d; carried to action-items §4 (resolve to best-notebooks-for-note-taking if confirmed live, else delete/keep generic).

---

## Stage 4a: Image plan
- [x] images.md written (4 slots, all remotion)
- [x] each entry has production spec (composition IDs: MindMapFeatured, MindMapVsWebContrast, HeartMindMap, MindMapNodeGoodVsBad)

Note: featured type OVERRIDDEN ai-prompt→remotion for this run (autonomous publish needs a rendered featured file; ai-api off, so remotion is the only file-producing type). node_modules reused from main; test render of MethodMindMap succeeded.

## Stage 4b: Action items compile
- [x] action-items.md written (0 residual placeholders)
- [x] marker counts match grep (0 VERIFY, 0 EXTERNAL, 0 INTERNAL, 3 IMAGE)
- [x] authors-map status (N/A for wordpress-rest)

Note: [INTERNAL_LINK_NEEDED:] resolved at Stage 4b → /best-notebooks-for-note-taking (verified live). Draft now has ONLY 3 [IMAGE:] markers left (replaced at staging).

## Stage 4b.5: Stage + open PR + WP draft
- [ ] post staged to content/blog/mind-mapping-note-taking-method.md
- [ ] images resolved, cover set
- [ ] WP draft created (auth probe once)
- [ ] committed + pushed on blog/mind-mapping-note-taking-method, PR opened
- [ ] pr-monitor.json written

## Stage 4c: Gate 2 + Finalize + PUBLISH
- [ ] Gate 2 presented
- [ ] approved (operator pre-authorized)
- [ ] finalize/archive
- [ ] WP status set to `publish` (operator instruction — overrides draft-only default)
- [ ] content calendar #7 status updated

---

## Gate log

- Plan review opened: 2026-07-18 13:10
- Plan review verdict: request_revisions (v1), 3 minor fixes (open-questions carry-forward, external-link note, paper-vs-digital facts anchor), 2026-07-18 13:15
- Plan review verdict: approve (v2), 2026-07-18 13:20

## Stage transition log

- intake completed: 2026-07-18 12:38 (owner: blog-post-workflow)
- chrome_fetch started: 2026-07-18 12:38 (owner: blog-post-workflow)
- SERP fetch completed: 2026-07-18 12:48, 5 selected, 0 failed
- Reddit fetch completed: 2026-07-18 12:55, 5 selected, 0 failed
- Stage 1b started: 2026-07-18 12:55, sources=serp,reddit (owner: blog-researcher)
- Stage 1b completed: 2026-07-18 13:05, serp.md + reddit.md written
- synthesize_plan completed: 2026-07-18 13:10, facts.md + plan.md written
- plan_review opened: 2026-07-18 13:10 (owner: plan-reviewer)
- plan_review approved (v2): 2026-07-18 13:20
- outline completed: 2026-07-18 13:30, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-07-18 13:30 (owner: blog-writer)

## Notes

**Run config:** worktree `.claude/worktrees/mind-mapping-note-taking-method` (branch `worktree-mind-mapping-note-taking-method`), fresh from origin/main @ 5f2fad2. Gate 2 mode = **PR** (git remote + gh both resolve). Publish adapter = wordpress-rest. Operator standing instructions this run: (1) work in a worktree [done], (2) after finalize set WP post status=publish.

**Research sources:** serp + reddit (x skipped, competitors module off).

**WP auth caveat:** calendar note (2026-07-08) reports post #5's WP draft was blocked on a 401/IP-lockout. Auth probe runs ONCE at Stage 4b.5 — if it 401s, stop WP-side per lockout guidance, still open the PR with canonical markdown, and report that publish can't complete until the credential/limiter clears.

**Inbound link (write-ahead, Stage 4b.5):** inbound link applied by workflow: content/blog/note-taking-methods.md → /mind-mapping-note-taking-method (anchor "mind mapping note-taking method", end of "## The Mapping (Mind Mapping) Method" section). Repo copy edited + shipped in PR; LIVE WP application deferred to Gate 2 finalize (apply_inbound_links_live: true, post will be published).

**Writer handoff (Stage 3a):** draft-v1.md, ~1,999 body words (target 1,800–2,200). Markers: 3 [IMAGE:] (§1 map-vs-web, §4 worked-example, §7 good-vs-bad node), 2 [EXTERNAL_LINK_NEEDED:] (Buzan origin §4, dual-coding §2), 1 [INTERNAL_LINK_NEEDED:] (paper gear §5), 0 [VERIFY:]. Internal links: note-taking-methods (intro+§3), outlining-note-taking-method (§1), focused-note-taking-how-to-guide (§3), how-to-make-aesthetic-notes... (§6), root-relative no trailing slash. No SERP competitors linked. Featured image is frontmatter-only (WP adapter, no inline marker) = correct. Writer rendered H3 "Step N:" instead of outline's "Step N —" to keep 0 em-dashes. 0 forbidden-phrase spot-check hits.
- Stage 3a completed: 2026-07-18 13:45, word count ~1,999, draft-v1.md written
- Stage 3b review iteration 1 started: 2026-07-18 13:45 (owner: blog-reviewer)
- Stage 3b review iteration 1: approve (0 critical/0 major/2 minor), 2026-07-18 13:55
- Stage 3c started: 2026-07-18 13:55 (owner: blog-humanizer)
- Stage 3c completed: 2026-07-18 14:00, preservation PASSED, +0.2% words
- Stage 3d completed: 2026-07-18 14:10, resolved 2, kept-general 0, deleted 0, competitor-routed 0
- Stage 4a started: 2026-07-18 14:10 (owner: image-planner)
- Stage 4a completed: 2026-07-18 14:25, 4 images (1 featured + 3 in-post), all remotion
- Stage 4a.5 started: 2026-07-18 14:25 (owner: image-builder)
- Stage 4a.5 completed: 2026-07-18 14:40, 4 rendered, 0 pending, 0 failed. All 4 PNGs visually verified (legible, on-brand). Featured-slot gate passed (featured.png present). New Remotion compositions authored: MindMapFeatured, MindMapVsWebContrast, HeartMindMap, MindMapNodeGoodVsBad (tools/remotion/src/ + Root.tsx).
- Stage 4b started: 2026-07-18 14:40 (owner: blog-post-workflow)
- Stage 4b completed: 2026-07-18 14:50, action-items.md written
- Stage 4b.5 staging started: 2026-07-18 14:50 (owner: blog-post-workflow)
