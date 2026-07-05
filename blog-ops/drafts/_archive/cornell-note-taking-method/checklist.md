---
slug: cornell-note-taking-method
target_keyword: cornell note-taking method
created: 2026-07-04 17:48
last_updated: 2026-07-04 19:42
current_stage: complete
current_owner: blog-post-workflow
gate_pending: none
status: complete
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: cornell-note-taking-method

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/cornell-note-taking-method/brief.md)
- [x] Slug approved by human
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

- [x] research/_raw/_serp.json written
- [x] research/_raw/_serp_selection.md written
- [x] research/_raw/NN-*.json written (5 ok: 01,05,06,07,08; 02-york failed — origin blocked blob download)

### Stage 1.5a: Reddit research (ENABLED)

- [x] research/_raw/_reddit_search.json written (Chrome fallback — curl 403'd)
- [x] research/_raw/_reddit_selection.md written (4 selected)
- [x] research/_raw/reddit-NN-*.json written (00-notetaking, 01-studytips, 02-essaypro, 03-learnzone)

### Stage 1.5b: X research (SKIPPED — human declined X at intake)

- [x] skipped

### Stage 1.5c: Competitor freshness (SKIPPED — competitors module off)

- [x] skipped

### Stage 1b: Research analysis (owner: blog-researcher subagent)

- [x] research/serp.md complete
- [x] research/reddit.md complete
- [x] product reference loaded (editor reads product.md; product module on)

### Stage 1c: Plan synthesis

- [x] facts.md compiled
- [x] plan.md drafted
- [x] Stage 1c.5: plan-reviewer approves plan (verdict: approve, 3 minor notes folded in)

---

## Stage 2: Outline

- [x] outline.md drafted (every H2 cites ≥1 fact; roll-up ~2,520 within target)
- [x] outline.md status set to `approved`; current_stage=draft

---

## Stage 3: Writing

### Stage 3a: Draft

- [x] draft-v1.md generated (frontmatter + intro + 7 H2s + FAQ + CTA)
- [x] draft word count within ±10% of outline roll-up target (2,320 body vs 2,520 est)
- [x] writer's handoff summary recorded in Notes

### Stage 3b: Review + revise loop

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 1, 0 critical/0 major/2 minor)
- [x] Prior-iteration reviews archived (n/a — approved first pass; editor applied the minor CTA tightening directly)

## Stage 3c: Humanize

- [x] blog-humanizer spawned
- [x] Preservation check: PASSED (backup deleted)
- [x] Forbidden-phrase count: 0
- [x] Word count delta within -20% to 0% (2690 → 2688, -0.07%)

## Stage 3d: Marker auto-resolution

- [x] draft grepped for `[VERIFY:]` (0) + `[EXTERNAL_LINK_NEEDED:]` (5)
- [x] each marker resolved / kept-general / deleted (4 resolved-with-cite, 1 kept-general)
- [x] every added external URL allowlist-class + returns 200 (4/4: Cornell .edu PDF, tpls journal, pubmed, pmc)
- [x] facts.md updated (resolution note added)
- [x] re-lint passed (0 residual markers; 1 em-dash = affiliate marker only)
- [x] per-marker outcome log appended to Notes

**Stage 3d per-marker outcome log:**
- M1 layout (line 42): resolved — cite https://lsc.cornell.edu/wp-content/uploads/2015/10/Cornell-Note_Taking-System.pdf (official Cornell layout, .edu allowlist, 200; anchored on "the official Cornell layout"). NOT the rank-1 SERP page.
- M2 Abualzain 2024 positive (§6): resolved — cite https://tpls.academypublication.com/index.php/tpls/article/view/8509 (WebFetch-confirmed: "clear progress in the experimental group").
- M3 Broe 2013 null (§6): kept-general (marker dropped) — citeseerx URL SSL-dead; no loadable primary null-result URL found (ERIC EJ1230649 turned out POSITIVE, not usable). Null side stated generally & honestly ("other studies… better notes without a matching jump in test scores… evidence mixed"); no fabricated/broken link. True-in-spirit per Wikipedia's balanced summary.
- M4 Saran 2022 (§6): resolved — cite https://pubmed.ncbi.nlm.nih.gov/36548929/ (WebFetch-confirmed title "An introduction to the Cornell Note system," Ear Nose Throat J).
- M5 paper-vs-digital PMC (§7): resolved — cite https://pmc.ncbi.nlm.nih.gov/articles/PMC9247713/ (WebFetch-confirmed "no significant difference… P=0.61," small laptop group).

**Stage 4a.5 (generate images) status — PARTIAL / paused at featured-slot gate:**
- Rendered (remotion, on disk in blog-ops/assets/cornell-note-taking-method/ with .staged-by-blog-workflow sentinel): cornell-layout-diagram.png, cornell-5rs-process.png, cornell-worked-example-biology.png — all 3 verified on disk + eyeballed (on-brand, worked-example text verbatim).
- Prompt-pending (ai-prompt, MANUAL — human generates in an AI image tool, saves to the asset dir): featured.png (REQUIRED before Stage 4b.5 staging — hard blocker), right-method-for-the-job.png (Image 4; non-blocking — can ship as an 'Image pending' note if not made).
- Resume: once blog-ops/assets/cornell-note-taking-method/featured.png exists, re-enter Stage 4a.5 → Stage 4b.

**Stage 4a.5 COMPLETE** (2026-07-04): all 5 images created (3 remotion rendered + 2 ai-prompt by human). 

**Stage 4b.5 (staging) COMPLETE** (2026-07-04):
- Git PR path: finalized content/blog/cornell-note-taking-method.md (4 images embedded, draft:true stripped), committed + pushed on branch blog/cornell-note-taking-method inside worktree .worktrees/blog-cornell-note-taking-method, opened **PR #1** (https://github.com/lucky72o/olgapak-blog/pull/1). Main-tree staged copies cleaned (step 7h). No local inbound-link edits (existing posts not in repo — wp-admin hand-apply action items).
- WordPress: **draft post 2075** created (status: draft), 5 media uploaded (ids 2070-2074, featured 2070), tags Productivity/Focus/Planning resolved. wp_preview_url = https://olgapak.com/wp-admin/post.php?post=2075&action=edit. wp_upload: ok.
- WP AUTH INCIDENT: my repeated auth probes tripped a WPX/security-plugin IP+username login lockout (401 rest_not_logged_in) that also blocked the user's own terminal; cleared after the user unblocked/waited, then a single clean pass succeeded. See memory blogsmith-setup. Never retry-hammer WP auth.
- current_stage=finalize, gate_pending=gate_2_final. Gate 2 = async PR path (PR + WP draft are the review artifacts).

## Stage 4a: Image plan

- [x] images.md written (1 featured ai-prompt + 4 in-post: 3 remotion + 1 ai-prompt; in-post count 4 == 4 [IMAGE:] placeholders)
- [x] Each entry has production spec matching its type

## Stage 4b: Action items compile

- [x] action-items.md written (every section filled; only <wp_preview_url> pending until staging)
- [x] Marker checkbox counts match grep output (VERIFY 0, EXTERNAL 0, INTERNAL 0, IMAGE 4, AFFILIATE 1)
- [x] Authors-map status confirmed per adapter (wordpress-rest: N/A)

## Stage 4c: Gate 2 + Finalize

- [ ] Gate 2 presented
- [ ] Human approved
- [ ] draft published to WordPress draft + content/blog/cornell-note-taking-method.md
- [ ] asset folder created at blog-ops/assets/cornell-note-taking-method/
- [ ] archived to blog-ops/drafts/_archive/cornell-note-taking-method/

---

## Gate log

- Intake completed: 2026-07-04 17:48

## Stage transition log

- intake completed: 2026-07-04 17:48 (owner: blog-post-workflow)

## Notes

- Config: adapter=wordpress-rest, Gate 2 mode=**pr** (remote live), route_prefix=/, modules on: reddit, x(declined for this post), product.
- Running inside git worktree `worktree-cornell-note-taking-method` at `.claude/worktrees/cornell-note-taking-method` (user requested worktree isolation). Staging branch at 4b.5 will be `blog/cornell-note-taking-method` (distinct from the worktree branch — no collision).
- Amazon affiliate links HELD (Associates not live); generic notebook mentions + marked placeholder only.
- Text Summarizer = soft product mention near the end.
- Stage 3a writer handoff (draft-v1): 2,320 body words. Markers: 5 [EXTERNAL_LINK_NEEDED:] (Cornell PDF layout, Abualzain 2024 +, Broe 2013 null, Saran 2022, paper-vs-digital PMC), 4 [IMAGE:] (after H2 2/3/4/5), 1 [AFFILIATE_PLACEHOLDER:], 0 [VERIFY:], 0 [INTERNAL_LINK_NEEDED:] (4 internal links placed directly root-relative). Worked example = cellular-respiration biology page. Effectiveness framed mixed, handwriting-vs-typing hedged. One soft Text Summarizer mention (§7) + CTA. Only em-dash is inside the AFFILIATE marker (stripped Phase 4). CTA links to https://olgapak.com/ai-tools — confirm exact free-tools path at publish.
