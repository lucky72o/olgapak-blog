---
slug: digital-vs-paper-notes
target_keyword: digital vs paper notes
created: 2026-08-05 13:37
last_updated: 2026-08-18 22:53
current_stage: finalize
current_owner: blog-post-workflow
status: active
gate_pending: gate_2_final
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: digital-vs-paper-notes

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/digital-vs-paper-notes/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from `blog-ops/content-plan.md` row 14; no human confirmation available)
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

Two-phase: cheap search-results capture → editor selects 5–8 (cap 8, no minimum) → deep-fetch only those.

- [x] research/_raw/_serp.json written (Google SERP metadata: top 10 URLs + titles only, no body content)
- [x] research/_raw/_serp_selection.md written (editor's rationale for the 5–8 picks + observed search intent)
- [x] research/_raw/NN-*.json written (7 files, ranks 2/4/5/6/7/8/9, 0 failures) (per-URL deep-fetched data for the selected results, NN matches the original SERP rank)

**Artifacts:** `research/_raw/_serp.json`, `research/_raw/_serp_selection.md`, `research/_raw/NN-*.json` (up to 8 files, no minimum)

MCP note: this stage runs in the parent skill context because Chrome MCP tools do not propagate to subagents. The skill uses a JS blob-download pattern to save page data to disk without pulling content through its own context.

### Stage 1.5a: Reddit research (OPTIONAL, owner: blog-post-workflow skill)

Enabled — `modules.reddit_research: true` and brief.md "Research sources enabled" says reddit: yes. Transport: `chrome` (primary), per `research.reddit_transport`.

- [x] research/_raw/_reddit_search.json written (Reddit search results metadata: ~20 threads, no thread bodies)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (5 files, 66 top-level comments, 0 failures) (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Enabled — `modules.x_research: true` and brief.md "Research sources enabled" says x: yes.

- [x] research/_raw/_x_search.json written (3 queries attempted; all returned off-topic noise) (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (0 posts selected — see file for rationale) (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json — N/A, 0 selected (empty source, not a fetch failure) (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check

**SKIPPED — `modules.competitors: false` for this blog.** No competitor profiles exist, brief.md carries no "Competitors to mention" table, and the stage's own guard (module off OR table empty → skip) applies. No `[VERIFY:]` competitor-claim routing is possible downstream.

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + optionally Reddit + optionally X) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (recorded EMPTY — 0 posts met bar) (only if Stage 1.5b ran)
- [x] research/competitors.md — N/A (competitors module off)
- [x] product reference loaded (editor reads `blog-ops/profile/product.md` directly; `modules.product: true`)

**Artifacts:** `research/serp.md`, `research/reddit.md`, `research/x.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (verdict: approve, iteration 1, no revisions)

**Artifacts:** `facts.md`, `plan.md`

---

## Stage 2: Outline (owner: blog-post-workflow skill / blog-editor role)

Triggered after Stage 1c.5 plan review approves. Editor reads approved `plan.md` + `facts.md` + brand files and drafts `outline.md` per the resolved `outline.md` template. **No human gate**, the editor's editorial judgment closes Stage 2 and the workflow auto-progresses to Stage 3a (drafting). Any structural problem with the outline gets caught later as a Stage 3b reviewer issue, which forces a writer revise pass.

- [x] outline.md drafted (every H2 cites ≥1 fact from facts.md; word count roll-up within plan target)
- [x] outline.md status set to `approved`; checklist `current_stage=draft` (auto-progresses, no human gate)

**Artifacts:** `outline.md`

---

## Stage 3: Writing (owner: blog-writer subagent)

### Stage 3a: Draft (owner: blog-writer subagent)

Editor delegates full-post drafting to the blog-writer subagent. Writer reads outline + facts + brief + research + brand/*, produces one draft-vN.md per run. No MCP, on-disk work only.

- [x] draft-v1.md generated by blog-writer (frontmatter per the publish adapter's frontmatter template + 4-paragraph intro + body H2s per outline + FAQ + outro)
- [x] draft word count within ±10% of outline roll-up target (2,642 body prose vs 2,610 target, +1.3%)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 2 of max 3; 0 critical, 0 major, 3 minor)
- [x] Prior-iteration reviews archived as review-v<N>.md (`review-v1.md`)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED (4/4 URLs, 4/4 `[IMAGE:]` markers, headings + frontmatter byte-identical)
- [x] Forbidden-phrase count: 0
- [x] Word count delta within -20% to 0% (3,173 → 3,169, -0.1%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` — **ZERO of each** (the writer avoided every unverified figure, so no marker was ever emitted)
- [x] each marker resolved — N/A, no markers existed. Stage 3d instead spent its research budget on the reviewer's carry-forward (the replication check), which is now in the post.
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200 (all 5 verified; SAGE 403s curl as bot protection and was re-verified live in Chrome)
- [x] facts.md updated to mirror resolutions (Morehead/Dunlosky/Rawson promoted out of §Rejected into §Named examples)
- [x] re-lint passed (0 em-dashes, 0 en-dashes, 0 forbidden phrases, 0 British spellings, 0 residual markers)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured (4 in-post + 1 featured; counts match exactly)
- [x] Each entry has production spec populated matching its type (remotion ×3, ai-prompt ×2, screenshot ×0)
- [x] Featured slot `Type: ai-prompt` (per `images.featured_default` + `custom-instructions.md` §Image style — never overridden to remotion)

**Artifacts:** `images.md`

## Stage 4a.5: Generate images (owner: image-builder subagent)

- [x] file-producing slots (`ai-prompt` via codex, `remotion`) rendered into `blog-ops/assets/digital-vs-paper-notes/` (5/5, 0 failed, 0 pending)
- [x] `.staged-by-blog-workflow` sentinel present
- [x] featured image file exists on disk (`featured.png`, 1.9 MB; editor eyeballed it plus one remotion diagram, both on-brand and legible)

**Artifacts:** `blog-ops/assets/digital-vs-paper-notes/*`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (VERIFY 0, EXTERNAL 0, INTERNAL 0, IMAGE 4)
- [ ] Authors-map status — N/A (`authors_map_check` is an astro-git-pr option; adapter here is wordpress-rest)

**Artifacts:** `action-items.md`

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Console-gated (autopilot). Approval is data: the console writes `approval.json`; no launch arg or standing instruction substitutes for it. The workflow never sends WordPress `status=publish`.

- [ ] Gate 2 presented (console approval surface)
- [ ] Human approved (`approval.json` present)
- [ ] draft staged to WordPress as a **draft** post
- [ ] asset folder created at `blog-ops/assets/digital-vs-paper-notes/` (with images.md as README.md)
- [ ] `blog-ops/drafts/digital-vs-paper-notes/` archived to `blog-ops/drafts/_archive/digital-vs-paper-notes/`

**End state:** `status=complete`, `current_stage=complete`. Post lives in `content/blog/` + as a WordPress draft; the human works through archived `action-items.md`, sets the Rank Math focus keyword, then publishes in wp-admin.

---

## Stage 5: Repurpose

**SKIPPED — `modules.repurpose: false` for this blog.**

---

## Gate log

- Plan review opened: 2026-08-05 14:05
- Plan review verdict: approve, iteration 1, all 7 rubric criteria pass; both flagged open questions ruled in the editor's favour (do not name research.com; omit exact wpm figures pending Stage 3d), 2026-08-05 14:10

## Stage transition log

- intake completed: 2026-08-05 13:37 (autopilot file-intake from content-plan row 14; no human conversation)
- Stage 1a SERP fetch completed: 2026-08-05 13:43, 7 selected, 0 failed
- Stage 1.5a Reddit completed: 2026-08-05 13:47, 5 threads fetched via chrome transport, 0 failed
- Stage 1.5b X completed (EMPTY): 2026-08-05 13:50, 3 queries, 0 posts met selection bar, 0 deep fetches
- Stage 1b started: 2026-08-05 13:52 (owner: blog-researcher, sources=serp,reddit,x)
- Stage 1b completed: 2026-08-05 14:02, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-08-05 14:05, plan_review opened: 2026-08-05 14:05
- plan_review completed: 2026-08-05 14:10, verdict approve
- outline completed: 2026-08-05 14:14, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-08-05 14:14 (owner: blog-writer)
- Stage 3a re-dispatched after a session crash: 2026-08-05 14:22 (no `draft-v*.md` existed; resume route `current_stage=draft` + no draft → Step 10)
- Stage 3a completed: 2026-08-05 14:29, word count 2,642 body prose (3,158 total incl. frontmatter + FAQ), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-08-05 14:29 (pre-review length check passed: +1.3% vs target, well under +15%)
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 1 major, 8 minor), 2026-08-05 14:38; review archived as review-v1.md
- Stage 3b revise iteration 2 started: 2026-08-05 14:39 (owner: blog-writer, mode=revise)
- draft-v2.md written: 2026-08-05 14:45, 2,664 body-prose words (+2.1%), 0 British spellings, markers unchanged
- Stage 3b review iteration 2 started: 2026-08-05 14:45
- Stage 3b review iteration 2 verdict: approve, 2026-08-05 14:56 (0 critical, 0 major, 3 minor)
- Editor applied the 2 trivial minor prose fixes to draft-v2.md directly (echo-word in the digital-wins question; removed the redundant list stem in the paper-wins section), 2026-08-05 14:57
- Stage 3c humanize started: 2026-08-05 14:57 (owner: blog-humanizer)
- Stage 3c completed: 2026-08-05 15:02, preservation PASSED, 1 burstiness injection, 0 forbidden phrases, 0 em-dashes, word count 3,173 → 3,169
- Stage 3d marker auto-resolution started: 2026-08-05 15:02
- Stage 3d completed: 2026-08-05 15:18, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (zero markers existed); 1 verified claim ADDED (replication study)
- Stage 4a image plan started: 2026-08-05 15:18 (owner: image-planner)
- Stage 4a completed: 2026-08-05 15:27, 5 images (1 featured ai-prompt + 4 in-post: 3 remotion, 1 ai-prompt), featured archetype `split-contrast` logged to blog-ops/featured-log.md
- Stage 4a.5 started: 2026-08-05 15:27 (owner: image-builder)
- Stage 4a.5 completed: 2026-08-05 15:40, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b action items started: 2026-08-05 15:40
- Stage 4b completed: 2026-08-05 15:52, action-items.md written (0 marker to-dos; the only human work left is the Rank Math focus keyword + Publish)
- Stage 4b.5 staging started: 2026-08-05 15:52 (console-gated, CONSOLE_VERIFICATION=on: file layout + commit/push only, WP-draft create deferred to autopilot-cont)
- Stage 4b.5 re-entered: 2026-08-18 22:49 (autopilot resume; prior run died after file layout, before commit/push — nothing was committed and only 2 of 4 recorded inbound links had landed)
- Branch re-based onto origin/main: 2026-08-18 22:49. charting-method-note-taking published in the interim and its commits touched the same files this staging edits, so instead of a conflict-prone rebase: `git reset --hard origin/main` (branch had 0 commits; untracked staging artifacts unaffected), then deterministic re-apply of all 4 inbound links (per the write-ahead ownership records + outline rows), the featured-log row, and the 3 Root.tsx Still registrations. All 4 inbound-link diffs re-verified link-only (+1/-1 each) before admission.
- Staging visual backstop (astro-git-pr §Staging step 3b): 2026-08-18 22:49, 5/5 rendered images inspected, no overlaps/clipping/contrast defects
- Stage 4b.5 file layout committed (e979c96, 48 files) + pushed to origin/blog/digital-vs-paper-notes: 2026-08-18 22:50. `ready_for_verification` emitted; WP-facing side effects (auth probe, Gutenberg convert, media upload, draft create, pr-monitor.json) deferred to autopilot-cont per the verification handshake.

## Notes

- **Inbound links, write-ahead ownership record (Stage 4b.5 step 6c).** All four
  targets were verified link-absent and git-clean before any edit:
  - inbound link applied by workflow: `content/blog/cornell-note-taking-method.md`
  - inbound link applied by workflow: `content/blog/mind-mapping-note-taking-method.md`
  - inbound link applied by workflow: `content/blog/note-taking-methods.md`
  - inbound link applied by workflow: `content/blog/best-notebooks-for-note-taking.md`

- **Autopilot run.** `CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`. Gate 2 is
  console-gated: no CronCreate PR monitor, no blocking on typed input. Under the
  verification handshake this run performs staging FILE LAYOUT only and emits
  `ready_for_verification`; the WP-draft side effect is deferred to `autopilot-cont`.
- **Gate 2 mode: console.** Recorded here per Step 0.3 so Steps 14–15 consume it
  rather than re-deriving. (A git remote and `gh` do resolve for this repo, but
  `CONSOLE_RUN_STATE` being set makes the gate console-gated per
  `references/console-contract.md` §Gate 2 under the console.)
- **Six autopilot intake assumptions** are recorded in `brief.md` §Autopilot
  assumptions — surface them at the Gate 2 review.
- **Stage 3a writer handoff (draft-v1):** 2,642 body-prose words (outline target
  2,610, +1.3%); FAQ adds ~350. Markers: `[IMAGE:]` 4 (H2 2/3/6/7), `[VERIFY:]` 0,
  `[EXTERNAL_LINK_NEEDED:]` 0, `[INTERNAL_LINK_NEEDED:]` 0. 5 internal + exactly the
  4 planned external links, no forbidden competitor domains. Floor checks: 0 em-dashes,
  0 en-dashes, 0 forbidden phrases, keyword ×5, 8 lists. Writer's flags:
  (a) zero `[VERIFY:]` because every facts.md-unverified number was avoided (no wpm
  figures, no 14.6%/8.8%); speed gap stated qualitatively per the plan-reviewer ruling;
  (b) the u/Liotac skepticism quote was added to H2 2 though the outline didn't assign
  it a section; (c) **H2 3 is the biggest over-claim risk** — it rests on an inference
  the study didn't test, stated as a limit twice.
- **Stage 3d per-marker outcome log:** `[VERIFY:]` 0 and `[EXTERNAL_LINK_NEEDED:]` 0 in the
  humanized draft, so there was nothing to resolve, keep-general, or delete. Nothing routed
  to a human. Action-items §2/§3 record exactly this.
- **Stage 3d addition (beyond markers, on the reviewer's explicit carry-forward):** the
  Mueller & Oppenheimer replication picture is now IN the post, one paragraph after the
  "three things the study does not show" list. Confirmed by WebFetch against the publisher's
  canonical article page (Morehead, Dunlosky & Rawson 2019, *Educational Psychology Review*
  31, 753-780, https://link.springer.com/article/10.1007/s10648-019-09468-2), which is a
  primary source and is NOT in this post's SERP top-10. Scoped deliberately: the post says the
  effect is smaller and shakier than commonly implied, and explicitly says this neither
  overturns the original nor is a verdict for typing. `facts.md` mirrors it. This is the
  post's strongest differentiator against every competitor on the SERP, and it was flagged at
  BOTH review iterations as the one thing missing.
- **Stage 3b carry-forwards for the editor (NOT writer work):**
  1. `utsc.utoronto.ca` is linked in the post under a per-post ruling in `facts.md`
     §Linking rules, while `blog-ops/profile/voice.md` §Additional allowlist domains
     still reads "None". The link stays; the human should promote the domain to
     `voice.md` so future reviews stop relitigating it. (Editor does not edit profile
     docs in place.) Raised at both review iterations.
  2. **Spelling locale is undeclared in the profile.** That is what let 13 British
     spellings through v1 as a blocking `major`. Worth adding an explicit
     "American English" line to `voice.md`.
  3. Stage 3d owes a Mueller & Oppenheimer replication check (the post's strongest
     potential differentiator; slots in after the study paragraph).
- **Main quality risk for this topic:** over-claiming the handwriting-vs-typing
  memory research. Stage 3d must scope every study claim to exactly what the
  source supports and prefer primary sources (journal/university/.gov) over the
  pop-science secondary coverage that dominates this SERP.
- Stage 4b.5 WordPress side effects completed: 2026-08-18 22:53 — 5 media uploaded (2182-2186), WP draft 2187 created (status draft), pr-monitor.json written
