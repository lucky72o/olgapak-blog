---
slug: rocketbook-review
target_keyword: rocketbook review
created: 2026-10-14 13:10
last_updated: 2026-10-14 14:05
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: rocketbook-review

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/rocketbook-review/brief.md)
- [x] Slug approved by human (autopilot: slug from console post record)
- [x] checklist.md created

## Stage 1: Research

### Stage 1a: SERP
- [x] research/_raw/_serp.json written
- [x] research/_raw/_serp_selection.md written
- [x] research/_raw/NN-*.json written

### Stage 1.5a: Reddit
- [x] research/_raw/_reddit_search.json written
- [x] research/_raw/_reddit_selection.md written
- [x] research/_raw/reddit-NN-*.json written

### Stage 1.5b: X
- [x] research/_raw/_x_search.json written
- [x] research/_raw/_x_selection.md written
- [x] research/_raw/x-NN-*.json written

### Stage 1.5c: Competitor check
- skipped (modules.competitors off)

### Stage 1b: Research analysis
- [x] research/serp.md complete
- [x] research/reddit.md complete
- [x] research/x.md complete

### Stage 1c: Plan synthesis
- [x] facts.md compiled
- [x] plan.md drafted

### Stage 1c.5: Plan review
- [x] plan-review.md verdict approve (or ceiling reached)

## Stage 2: Outline
- [x] outline.md drafted and approved by editor

## Stage 3a: Draft
- [x] draft-v1.md written

## Stage 3b: Review
- [x] review verdict approve

## Stage 3c: Humanize
- [x] preservation check PASSED

## Stage 3d: Marker auto-resolution
- [x] markers resolved / deleted, outcomes logged

## Stage 4a: Image plan
- [x] images.md written

## Stage 4a.5: Generate images
- [x] file-producing slots rendered

## Stage 4b: Action items
- [x] action-items.md written

## Stage 4b.5: Staging
- [ ] post staged on branch (PR deferred to autopilot-cont under verification)

## Stage 4c: Gate 2 + Finalize
- [ ] Gate 2 (console-gated)

## Gate log

## Stage transition log

- intake completed: 2026-10-14T13:10 (autopilot, brief from $CONSOLE_POST)
- chrome_fetch parked: 2026-10-14T13:12, Google served its unusual-traffic check (HTTP 429); parked serp_blocked
- SERP fetch completed: 2026-10-14 13:15, 6 selected, 0 failed (retry after serp_blocked park succeeded)
- Reddit fetch completed: 2026-10-14 13:16, 5 selected, 0 failed (t=all re-pull; t=year was thin)
- X fetch completed: 2026-10-14 13:17, 3 selected, 0 failed (thin source: no replies loaded)
- Stage 1b started: 2026-10-14 13:17, sources=serp,reddit,x
- Stage 1b completed: 2026-10-14 13:24, serp/reddit/x analyses written
- synthesize_plan completed: 2026-10-14 13:30, plan_review opened: 2026-10-14 13:30
- plan_review v1 request_revisions (lineup captures, page counts, cost framing): 2026-10-14 13:34
- plan_review v2 approve; plan approved (autopilot, no owner wait): 2026-10-14 13:34
- outline completed: 2026-10-14 13:35, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-10-14 13:35
- Stage 3a completed: 2026-10-14 13:38, body ~2,155 words (+233 FAQ), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-10-14 13:38
- Stage 3b review v1: request_revisions (2 major pen-sourcing issues, 5 minor): 2026-10-14 13:43
- Stage 3b revise iteration 2 started: 2026-10-14 13:43 (editor added hedged 0.5 mm pen row + attribution note to facts.md)
- draft-v2.md written: 2026-10-14 13:43
- Stage 3b review iteration 2 started: 2026-10-14 13:43
- Stage 3b review v2: approve (0 critical, 0 major, 1 minor; editor softened "plenty/many owners" to "some" and attributed the cannot-amend point to one owner): 2026-10-14 13:46
- Stage 3c started: 2026-10-14 13:46
- Stage 3c completed: 2026-10-14 13:47 (PASSED; 3 phrasing edits, 0 forbidden, 0 em-dashes)
- Stage 3d completed: 2026-10-14 13:47, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (draft had no VERIFY/EXTERNAL markers)
- Stage 4a started: 2026-10-14 13:47
- Stage 4a completed: 2026-10-14 13:53, 4 images (1 featured + 3 in-post)
- Stage 4a.5 started: 2026-10-14 13:53
- Stage 4a.5 completed: 2026-10-14 14:05, 4 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed (all four passed the look check)
- Stage 4b started: 2026-10-14 14:05
- Stage 4b completed: 2026-10-14 14:05, 30 action items
- Stage 4b.5 staging started: 2026-10-14 14:05

## Notes

- Autopilot run, CONSOLE_VERIFICATION=on.
- Standing rules: affiliate links where possible; no AI-tools promotion.
- Writer handoff (v1): body ~2,155 words + 233 FAQ; 0 VERIFY / EXTERNAL / INTERNAL markers; 3 IMAGE slots (2 ai-prompt, 1 remotion chart, numbers also in prose); 5 citations, 5 internal links, tagged Amazon links. Long-term FAQ scoped to "7 to 8 months of heavy use (2021)" (no multi-year report in facts). reMarkable ASIN B0DG9ZXWMK differs from the live roundup's B0DGBDR2PM (both reMarkable Paper Pro listings). Intro is 3 paragraphs + disclosure. Closing H2 "So, Should You Get One?". No Olga hands-on results: flag at Gate 2.
- Gate 2 notes from review v2: care image shows a spray bottle as a "do" (Core does not include one; Rocketbook suggests a water pen for small fixes); $12-15 pen estimate assumes $3/pen (3-pack $9); Kindle Scribe link is the bundle listing.
- Stage 3d marker log: none (writer emitted zero [VERIFY:] / [EXTERNAL_LINK_NEEDED:] markers).
- Humanizer notes: Key takeaways bullets uniform length; some sections lack a standalone-question paragraph (not required, rhythm markers present).
- Remotion Root.tsx on main was uncompilable (three <Still> elements missing their width/height line: FiveMinutePostMeetingPass, DownsizingFilterDiagram, HighlighterTipShapes; union-merge drop). Repaired in this worktree only so the chart can render; main still needs the same fix (flag at Gate 2). npm ci run in tools/remotion.
- Image 1 (write/scan/wipe) overlaps best-notebooks-for-note-taking/rocketbook-workflow.png; planner made it warm and wordless; dropping it is an option at Gate 2.
- remotion Root.tsx lines:
  import { C_rocketbook_review__rocketbook_pens_per_semester } from "./rocketbook-review--rocketbook-pens-per-semester";
      <Still id="rocketbook-review--rocketbook-pens-per-semester" component={C_rocketbook_review__rocketbook_pens_per_semester}
        width={CANVAS.width} height={CANVAS.height} />
  (The three other added "width/height" lines in this worktree's Root.tsx are the repair of main's broken FiveMinutePostMeetingPass / DownsizingFilterDiagram / HighlighterTipShapes entries, not this post's registrations.)

- post staged by workflow: content/blog/rocketbook-review.md
- inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md
- inbound link applied by workflow: content/blog/gifts-for-students.md
- inbound link applied by workflow: content/blog/best-pens-for-note-taking.md
