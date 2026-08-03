---
slug: charting-method-note-taking
target_keyword: charting method note taking
created: 2026-08-03 18:14
last_updated: 2026-08-03 22:43
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: charting-method-note-taking

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/charting-method-note-taking/brief.md)
- [x] Slug approved by human — autopilot: slug taken verbatim from `content-plan.md` row #11 (no human in the loop; assumptions logged in brief.md §Autopilot assumptions)
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
- [x] research/_raw/reddit-NN-*.json written (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined X during intake, or if `modules.x_research` is false.

- [x] research/_raw/_x_search.json written (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json written (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check (owner: blog-post-workflow skill, MANDATORY when `modules.competitors` is enabled AND brief.md "Competitors to mention" is non-empty)

For each competitor named in `brief.md`, the editor re-validates that `{competitors_dir}/<slug>.md` exists on disk and its `**Last verified:**` is ≤14 days from today. No Chrome, no fetching. Defense-in-depth gate that catches workflows paused for >14 days between intake and Stage 1b. Hard-halts on first failure; the human refreshes the offending profile per `{competitors_dir}/methodology.md` before resuming. Skipped only if the brief lists zero competitors (or the competitors module is off).

- [ ] every profile path in brief.md "Competitors to mention" exists at `{competitors_dir}/<slug>.md`
- [ ] every profile's `**Last verified:**` is ≤14 days from today
- [ ] no `_raw/` artifacts written for competitors (the profiles are the source of truth)

**Artifacts:** none (the brief.md "Competitors to mention" table + the source-of-truth profiles in `{competitors_dir}/` are the artifacts)

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + optionally Reddit + optionally X + optionally competitors) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (only if Stage 1.5b ran)
- [ ] research/competitors.md complete (only if Stage 1.5c ran; sourced from `{competitors_dir}/<slug>.md` profiles; "Ready for facts.md" rows inherit each profile's `**Last verified:**` date verbatim)
- [x] product reference loaded (editor reads `{profile_dir}/product.md` directly, no per-post product researcher; only if `modules.product` is enabled)

**Artifacts:** `research/serp.md`, optionally `research/reddit.md`, optionally `research/x.md`, optionally `research/competitors.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause)

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
- [x] draft word count within ±10% of outline roll-up target
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [ ] Verdict = `approve` (if not on first try, iterations ≤ 2)
- [ ] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [ ] blog-humanizer subagent spawned
- [ ] Preservation check: PASSED
- [ ] Forbidden-phrase count: 0 (or surviving hits flagged to human with line numbers)
- [ ] Word count delta within -20% to 0%

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [ ] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]`
- [ ] each non-competitor marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted; competitor-claim markers routed to human
- [ ] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [ ] facts.md updated to mirror resolutions
- [ ] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` except competitor-routed)
- [ ] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [ ] images.md written, one entry per [IMAGE:] placeholder + 1 featured
- [ ] Each entry has production spec populated matching its type

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [ ] action-items.md written with every section filled
- [ ] Marker checkbox counts match grep output
- [ ] Authors-map status confirmed per the publish adapter (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

<append one line per gate decision>

- Plan review opened: 2026-08-03 18:44
- Plan review verdict: approve (iteration 1), 2 non-blocking notes applied to plan.md (product mention pinned to §9; york.ac.uk allowlist reasoning clarified), 2026-08-03 18:48

## Stage transition log

- intake completed: 2026-08-03 18:14 (owner: blog-post-workflow, autopilot file-intake from content-plan.md row #11)
- Stage 1a SERP fetch completed: 2026-08-03 18:20, 7 selected, 0 failed (namespace: open-claude-in-chrome; download preflight OK)
- Stage 1.5a Reddit fetch completed: 2026-08-03 18:28, 5 threads, 0 failed (chrome transport PRIMARY; global search off-topic, re-run as 5 subreddit-restricted queries merged into one native-shape Listing — see _reddit_selection.md)
- Stage 1.5b X fetch completed: 2026-08-03 18:33, 4 posts, 0 failed (f=top off-topic, re-pulled f=live per Step 4.8.1)
- Stage 1.5c competitor freshness re-check: SKIPPED (modules.competitors false)
- Stage 1b started: 2026-08-03 18:34, sources=serp,reddit,x
- Stage 1b completed: 2026-08-03 18:42, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-08-03 18:44, plan_review opened: 2026-08-03 18:44
- Stage 1c.5 plan review completed: 2026-08-03 18:48, verdict=approve
- outline started: 2026-08-03 18:48
- outline completed: 2026-08-03 18:53, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-08-03 18:53
- Stage 3a completed: 2026-08-03 19:01, body prose 2,017 words (roll-up target 2,060), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-08-03 19:01
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 2 major, 6 minor); review archived as review-v1.md
- Stage 3b revise iteration 2 started: 2026-08-03 19:10
- Stage 3a revise completed: 2026-08-03 19:17, draft-v2.md written (2,245 body words, +9.0% vs roll-up)
- Stage 3b review iteration 2 started: 2026-08-03 19:17
- **Session died mid-review (usage limit); console re-spawned. Resumed at Step 11.1, re-dispatched review iteration 2 on draft-v2: 2026-08-03 19:12**
- Stage 3b review iteration 2 verdict: request_revisions (0 critical, 1 major, 5 minor); both draft-v1 majors confirmed FIXED; review archived as review-v2.md, 2026-08-03 19:23
- Stage 3b revise iteration 3 started: 2026-08-03 19:24
- Stage 3a revise completed: 2026-08-03 19:25, draft-v3.md written (2,252 body words, +9.3% vs roll-up); exactly 5 lines changed (127/133/145/153/160), verified by diff
- Stage 3b review iteration 3 started: 2026-08-03 19:26
- Stage 3b review iteration 3 verdict: **approve** (0 critical, 0 major, 2 accepted do-not-fix minors); required major fix at line 153 verified, 2026-08-03 19:35
- Stage 3c started: 2026-08-03 19:36
- Stage 3c completed: 2026-08-03 19:38, preservation check PASSED (0 edits needed; draft already clean on every floor after 3 review rounds, both accepted minors deliberately preserved)
- Stage 3d completed: 2026-08-03 19:52, resolved 2, kept-general 1, deleted 0, competitor-routed 0
- Stage 4a completed: 2026-08-03 20:00, 5 images (1 featured ai-prompt + 4 in-post: 2 remotion, 2 ai-prompt); in-post entries 4 == draft [IMAGE:] 4, no delta
- Stage 4a.5 started: 2026-08-03 20:00
- Stage 4a.5 completed: 2026-08-03 20:10, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b completed: 2026-08-03 20:15, action-items.md written (0 VERIFY / 0 EXTERNAL / 0 INTERNAL / 4 IMAGE markers; all 4 IMAGE resolved at 4b.5)
- Stage 4b.5 staging FILE LAYOUT completed: 2026-08-03 20:22. Post staged to content/blog/charting-method-note-taking.md, all 4 [IMAGE:] placeholders resolved to real embeds (every target file verified on disk first, so no build-safe pending note was needed), 3 inbound links applied and link-only-diff verified, committed as d27beab and pushed to origin/blog/charting-method-note-taking.
  **Side effects deliberately NOT performed** (CONSOLE_VERIFICATION=on handshake): no WordPress draft created, no media uploaded, no auth probe run, no pr-monitor.json written. Those are `autopilot-cont`'s job after the console verifies. Emitted `ready_for_verification` as the terminal event; deliberately did NOT emit `done` (a trailing `done` would make the console skip verification and never open the WP draft).
  `current_stage` left at `preview` so a resume re-enters Step 14.5 idempotently.
- Console verification PASSED: 2026-08-03 20:14 (build check PASS; vision skipped — no `pr-monitor.json` yet, expected under the handshake). Console spawned `autopilot-cont`.
- **Stage 4b.5 side effects PARKED (`wp_auth_failed`): 2026-08-03 20:16.** The adapter's §Staging step 2 auth probe failed — `curl` exit **56** (transport recv failure / connection reset) on `GET https://olgapak.com/wp-json/wp/v2/users/me` as `wpx_admin101`. This is NOT an HTTP 401/403 (`curl -f` would have exited 22). Unauthenticated diagnostics in the same second all succeeded — homepage 200, `/wp-json/` 200, public `/wp/v2/posts` 200 — so the site and its REST API are up and the failure is specific to the authenticated request (most likely a WAF / security-plugin reset, or a login limiter already tripped).
  Probe **NOT retried** (probe-once lockout rule: a retry can extend a limiter keyed to IP + username). Nothing WordPress-side happened: **no auth retry, no media uploaded, no draft created, no `pr-monitor.json` written.** Staging FILE LAYOUT from the prior run is untouched and still pushed (commit `d27beab`).
  `current_stage` stays `preview` with no `pr-monitor.json`, which is exactly the Step 2 resume route back into Step 14.5 — every WP-facing step there is idempotent (lookup-before-create, per-file media skip), so re-running `autopilot-cont <slug>` once the credential/limiter is cleared picks up cleanly with no duplicate draft or orphaned media.
- **Re-spawned `autopilot` run after the `wp_auth_failed` park: 2026-08-03 22:43.** Console spawned a fresh `autopilot` (not `autopilot-cont`) under `CONSOLE_VERIFICATION=on`. Resumed per Step 2's `preview` + no-`pr-monitor.json` route into Step 14.5, which is idempotent. Re-verified the staging FILE LAYOUT rather than redoing it — all of it was already complete and pushed:
  - `content/blog/charting-method-note-taking.md` present, 0 raw `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`/`[INTERNAL_LINK_NEEDED:]`/`[IMAGE:]` markers, 0 em-dashes, all 4 image embeds resolve to files that exist on disk, `featured.png` present (no featured-missing halt).
  - All 3 planned inbound links present in their target posts (`note-taking-methods`, `cornell-note-taking-method`, `mind-mapping-note-taking-method`), matching the write-ahead ownership record below.
  - Branch `blog/charting-method-note-taking` at `081ab92`, identical to `origin/blog/charting-method-note-taking` — nothing to re-commit or re-push beyond this checklist entry.
  **No auth probe run in this run** — the probe belongs to the adapter's §Staging step 2, which is `autopilot-cont`'s deferred side-effect half under the verification handshake; this shell never probes the WordPress credential itself, so the probe-once lockout is not touched here. Still no `pr-monitor.json`, no WordPress draft, no media uploaded.
  Emitted `ready_for_verification` as the terminal event (again deliberately NOT `done`). The console re-verifies and re-spawns `autopilot-cont`, whose single fresh probe is the documented "re-run once, by hand, when ready" recovery for the earlier curl-56 reset.

## Notes

- **Stage 4b.5 inbound links, write-ahead ownership record (written BEFORE the edits, per adapter §Staging step 6c):**
  - inbound link applied by workflow: `content/blog/note-taking-methods.md`
  - inbound link applied by workflow: `content/blog/cornell-note-taking-method.md`
  - inbound link applied by workflow: `content/blog/mind-mapping-note-taking-method.md`
  All three passed the step-6a ownership grep (link not yet present) and the step-6b dirty-file guard (`git status --porcelain` clean) before this record was written.
- **Stage 3d marker resolution log (per marker, 2026-08-03):**
  - line 115 `[EXTERNAL_LINK_NEEDED: testing yourself beats re-reading]` → **resolved** (cite: https://pmc.ncbi.nlm.nih.gov/articles/PMC11078833/). Prose scoped to "health-professions courses" because the systematic review covers tertiary health-professions education only. Anchor is the literal claim: "retrieval practice outperformed restudying across the comparisons it covered".
  - line 145 `[EXTERNAL_LINK_NEEDED: paper vs digital note-taking effectiveness]` → **resolved** (cite: https://pmc.ncbi.nlm.nih.gov/articles/PMC9247713/). Confirmed quote: "No significant difference was found in the factual or conceptual recall scores for tablet, laptop, and handwritten note-taking (P=0.61)." Prose names the limit ("a small study of 68 medical students") and reframes the sentence so the post no longer implies handwriting wins; this strengthens the writer's existing skeptical pivot.
  - line 127 `[VERIFY: research-methods table + two details]` → **kept general (marker dropped)**, no claim deleted. The table is an illustrative student worked example, not an assertion the post makes, so it ships without inline academic citations. Substance corroborated anyway against PMC4083571 (random assignment; no causal conclusions from observational designs), PMC9649615 (self-report bias) and PMC3141799 (case-study depth vs. generalizability); full audit trail in facts.md §"Stage 3d resolved sources".
  - Notes: `.edu` learning-centre pages (UNC, Oregon State, NYIT, Arizona) were all unreachable this run (403 / DNS / connection refused) via both WebFetch and the Chrome fallback, so both citations landed on NLM/PMC instead of the suggested `.edu` source type. External link count went 2 → 4, inside blog-craft's 3–5 band. All 4 URLs verified HTTP 200; neither new URL is a top-10 SERP competitor.
- **Stage 3a writer handoff:** 2,017 words body prose (+~356 FAQ). Markers: 4 `[IMAGE:]` (after H2 1/4/6/7, none in H2 5), 1 `[VERIFY:]` (worked-example table's sample-size + limitation columns, written from general knowledge not a source), 2 `[EXTERNAL_LINK_NEEDED:]` (paper-vs-digital study, retrieval practice), 0 `[INTERNAL_LINK_NEEDED:]`. Editor's own post-spawn checks: 0 forbidden phrases, 0 em-dashes, 0 forbidden-competitor URLs, exactly the 2 planned allowlist external URLs (utc.edu, york.ac.uk), 5 internal blog links + the `/ai-tools` CTA. Writer notes H2 2 and H2 3 ran ~20% long, offset by leaner H2 6 and H2 8, and that H2/H3 wording was title-cased to match published posts (words unchanged).
- **Research signal (carry into plan/outline):** neither Reddit nor X has a real conversation about the charting method specifically — five subreddit searches and the X capture surface Cornell, outlining and app-hunting instead. Charting's low social footprint is a legitimate angle ("the forgotten one of the four methods"), but the writer must NOT imply community endorsement of charting; there is none to cite.
- **Run mode:** autopilot (headless, operator console). `CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on` → verification handshake applies: staging performs file layout + commit/push only, then emits `ready_for_verification`. No PR / WP draft in this run.
- **Gate 2 mode: console** (derived at Step 0 per config-schema §Gate 2 mode derivation — `CONSOLE_RUN_STATE` is set, so the gate is console-gated: no CronCreate monitor, approval is `approval.json` written by the operator's browser Approve action).
- `modules.competitors` is off → Stage 1.5c skipped, "Competitors by post" table not read.
- Publishing stays manual: the WP post stays `draft`; the operator sets the Rank Math focus keyword (`charting method note taking`) in wp-admin before clicking Publish.
