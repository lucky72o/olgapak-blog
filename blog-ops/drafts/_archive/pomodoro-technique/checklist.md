---
slug: pomodoro-technique
target_keyword: pomodoro technique
created: 2026-09-08 19:40
last_updated: 2026-09-08 23:30
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: pomodoro-technique

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/pomodoro-technique/brief.md), autopilot file-intake from content-plan row 26
- [x] Slug approved by human: N/A in autopilot; slug taken verbatim from the content-plan row
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

Two-phase: cheap search-results capture → editor selects 5–8 (cap 8, no minimum) → deep-fetch only those.

- [x] research/_raw/_serp.json written (Google SERP metadata: top 10 URLs + titles only, no body content)
- [x] research/_raw/_serp_selection.md written (editor's rationale for the 5–8 picks + observed search intent)
- [x] research/_raw/NN-*.json written (per-URL deep-fetched data for the selected results, NN matches the original SERP rank)

**Artifacts:** `research/_raw/_serp.json`, `research/_raw/_serp_selection.md`, `research/_raw/NN-*.json` (up to 8 files, no minimum)

MCP note: this stage runs in the parent skill context because Chrome MCP tools do not propagate to subagents. The skill uses a JS blob-download pattern to save page data to disk without pulling content through its own context.

### Stage 1.5a: Reddit research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined Reddit during intake, or if `modules.reddit_research` is false.

- [x] research/_raw/_reddit_search.json written (Reddit search results metadata: ~20 threads, no thread bodies)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (5 threads, 0 failed) (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined X during intake, or if `modules.x_research` is false.

- [x] research/_raw/_x_search.json written (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json written (5 posts, 0 failed) (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check (owner: blog-post-workflow skill, MANDATORY when `modules.competitors` is enabled AND brief.md "Competitors to mention" is non-empty)

For each competitor named in `brief.md`, the editor re-validates that `{competitors_dir}/<slug>.md` exists on disk and its `**Last verified:**` is ≤14 days from today. No Chrome, no fetching. Defense-in-depth gate that catches workflows paused for >14 days between intake and Stage 1b. Hard-halts on first failure; the human refreshes the offending profile per `{competitors_dir}/methodology.md` before resuming. Skipped only if the brief lists zero competitors (or the competitors module is off).

- [x] N/A, `modules.competitors: false`, stage never entered
- [x] N/A, `modules.competitors: false`
- [x] N/A, `modules.competitors: false`

**Artifacts:** none (the brief.md "Competitors to mention" table + the source-of-truth profiles in `{competitors_dir}/` are the artifacts)

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + optionally Reddit + optionally X + optionally competitors) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (only if Stage 1.5b ran)
- [x] N/A, `modules.competitors: false`
- [x] product reference loaded (editor reads `{profile_dir}/product.md` directly, no per-post product researcher; only if `modules.product` is enabled)

**Artifacts:** `research/serp.md`, optionally `research/reddit.md`, optionally `research/x.md`, optionally `research/competitors.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause), approved on iteration 2

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
- [x] draft word count within ±10% of outline roll-up target (2,227 body-prose words vs 2,150, +3.6%)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (if not on first try, iterations ≤ 2)
- [x] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (or surviving hits flagged to human with line numbers)
- [x] Word count delta within -20% to 0% (2748 -> 2745, -0.1%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` (0 of each)
- [x] each non-competitor marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted; competitor-claim markers routed to human
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` except competitor-routed)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured (4 in-post + 1 featured; 4 draft placeholders, no delta)
- [x] Each entry has production spec populated matching its type

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0/0/0 VERIFY/EXTERNAL/INTERNAL, 4 IMAGE = 4 images.md in-post entries)
- [x] Authors-map status confirmed per the publish adapter (N/A: wordpress-rest has no author map) (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

**Artifacts:** `action-items.md`

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Editor presents Gate 2 banner (the only human gate; plan approval is an automated Stage 1c.5 review). On approve, runs the finalize sequence (adapter-specific, per `adapters/publish/<adapter>.md`): moves/publishes the draft to `{content_dir}/<slug>.md` (or the WordPress equivalent); creates the asset folder; archives `{drafts_dir}/<slug>/` → `{drafts_dir}/_archive/<slug>/`.

- [ ] Gate 2 presented (banner format)
- [ ] Human approved
- [ ] draft moved/published to `{content_dir}/<slug>.md` (or the WordPress equivalent)
- [ ] asset folder created at `{assets_dir}/<slug>/` (with images.md as README.md)
- [ ] `{drafts_dir}/<slug>/` archived to `{drafts_dir}/_archive/<slug>/`

**End state:** `status=complete`, `current_stage=complete`. Post lives in `{content_dir}` (or the configured WordPress site); the human works through archived `action-items.md` before publishing per the configured adapter.

---

## Stage 5: Repurpose (owner: repurpose-blog-post skill)

Triggered separately from the main workflow via `/repurpose-blog-post <slug>`. Post-terminal, runs after Gate 2 ships the post. Uses the archived draft + published post file as source. Produces four platform-native outputs with pre-planned distinct hook types (cross-platform litmus enforced).

- [ ] repurpose/x-thread.md (6–12 tweets, hook ≠ other outputs, link in reply #1)
- [ ] repurpose/x-short.md (single tweet, different angle from thread)
- [ ] repurpose/linkedin.md (1,300–2,000 chars body, hook ≤210 chars, link in first comment)
- [ ] repurpose/newsletter.md (subject ≤70 + preview ≤120 + body per format class)
- [ ] Litmus test passed (all 4 hook types distinct)

**Artifacts:** `repurpose/*.md` (inside `{drafts_dir}/_archive/<slug>/repurpose/`)

---

## Gate log

Gate decisions, one line each.

- Plan review opened: 2026-09-08 20:03
- Plan review verdict (iteration 1): request_revisions, length reasoning counted a page-2 result as page-1, and a viable 4th external source (PMC6406620) was never assessed, 2026-09-08 20:09
- Plan review verdict (iteration 2): approve, 2026-09-08 20:16

## Stage transition log

- intake completed: 2026-09-08 19:40 (owner: blog-post-workflow, autopilot file-intake)
- Stage 1a SERP fetch completed: 2026-09-08 19:45, 8 selected, 0 failed (page 1 carried only 6 organic results, so page 2 was captured for ranks 7-15)
- Stage 1.5a Reddit fetch completed: 2026-09-08 19:51, chrome transport (primary), 5 threads selected, 0 failed
- Stage 1.5b X fetch completed: 2026-09-08 19:51, Top tab with a refined query, 5 posts selected, 0 failed
- Stage 1.5c competitor freshness re-check: SKIPPED (`modules.competitors: false`)
- Stage 1b started: 2026-09-08 19:51, sources=serp,reddit,x
- Stage 1b completed: 2026-09-08 20:03, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-09-08 20:03, plan_review opened: 2026-09-08 20:03
- plan_review completed: 2026-09-08 20:16, verdict approve after 1 revision pass, advancing to Stage 2 (outline)
- outline completed: 2026-09-08 22:43, auto-progressing to Stage 3a (no human gate). 7 H2s + CTA + 5-question FAQ, roll-up 2,150 body words vs plan target 1,800-2,200, 4 internal links, 3 inbound links, 4 citation sources + 5 tagged Amazon links, 1 featured + 4 in-post image slots
- Stage 3a started: 2026-09-08 22:43

## Notes

- Autopilot run under the operator console (`CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`). Gate 2 is console-gated: no CronCreate monitor, no typed input, staging side effects (PR open / WP draft) deferred to `autopilot-cont`.
- Affiliate policy applies (timer roundup section): real tagged Amazon links `?tag=op01e-20`, plus the standing disclosure as the last intro paragraph.

### Stage 3a writer handoff (draft-v1)

- 2,227 body-prose words (intro + body + CTA, FAQ excluded) vs outline roll-up 2,150, +3.6%. FAQ adds 281.
- Markers: `[IMAGE:]` 4 (1 remotion cycle diagram after H2 1; ai-prompt scenes after H2 3, H2 5, H2 7). `[VERIFY:]` 0, `[EXTERNAL_LINK_NEEDED:]` 0, `[INTERNAL_LINK_NEEDED:]` 0.
- Links: the 4 planned citations exactly (PMC12532815 linked once on the 32-studies claim, certainty-of-evidence claim left unlinked per the outline; Illinois; UNC; PMC6406620), 5 tagged Amazon links, 4 root-relative internal links + 2 CTA links. Zero links to SERP competitors.
- Zero em-dashes / en-dashes; zero forbidden phrases; target keyword 5x in body; title 53 chars; excerpt 151 chars; affiliate disclosure is the last intro paragraph.
- Writer flagged for the editor: (a) two would-be invented numbers were reworded to generic phrasing rather than marked `[VERIFY:]`; (b) H2 7 calls the Time Timer "the best-reviewed of the bunch" per the outline, though the rotating timer has a higher average rating on far fewer ratings; (c) no effect-size or percentage claim anywhere, per the facts.md prohibition.

### Stage 3d marker log (per-marker outcomes)

No markers to resolve. `draft-v2.md` shipped from Stage 3a/3b with zero `[VERIFY:]` and zero `[EXTERNAL_LINK_NEEDED:]`; the writer sourced every claim from `facts.md` and used the outline's four pre-planned citations verbatim. Nothing resolved, nothing kept-general, nothing deleted, nothing competitor-routed.

Re-lint on the humanized draft: 0 em-dashes, 0 en-dashes, 0 forbidden phrases, 0 residual markers, 0 links to any `research/serp.md` top-10 URL, and all four external citations return HTTP 200 (news.illinois.edu, writingcenter.unc.edu, PMC12532815, PMC6406620).

### Inbound-link ownership records (write-ahead, Stage 4b.5 step 5c)

Written BEFORE each edit, per `adapters/publish/astro-git-pr.md` §Staging step 5c. Each names a file the workflow itself inserted the `/pomodoro-technique` link into; presence of the link alone is never proof of ownership.

- inbound link applied by workflow: content/blog/time-blocking.md (2026-09-08 23:32)
- inbound link applied by workflow: content/blog/how-to-stop-doomscrolling.md (2026-09-08 23:32)
- inbound link applied by workflow: content/blog/how-to-plan-your-week.md (2026-09-08 23:32)
