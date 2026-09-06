---
slug: best-highlighters-for-studying
target_keyword: best highlighters for studying
created: 2026-09-05 13:14
last_updated: 2026-09-06T22:29Z
current_stage: action_items
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: best-highlighters-for-studying

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/best-highlighters-for-studying/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from content-plan row 13, no human present)
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
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause; approved on iteration 2)

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
- [x] draft word count within ±10% of outline roll-up target (FAILED on v1: 3,070 body words vs ~2,600 target, +18%; routed to the Stage 3b length gate, see log)
- [x] writer's handoff summary recorded in Notes below (reconstructed by the editor; the writer's own handoff was lost when the prior session died) (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

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
- [x] Word count delta within -20% to 0%

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]`
- [x] each non-competitor marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted; competitor-claim markers routed to human
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` except competitor-routed)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured
- [x] Each entry has production spec populated matching its type

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


- Plan review opened: 2026-09-05T14:05Z
- Plan review verdict: request_revisions (iteration 1), fallback hook + fallback title added to plan.md, archived as plan-review-v1.md, 2026-09-05T14:15Z
- Plan review verdict: approve (iteration 2), minor notes applied, 2026-09-05T14:22Z
- Plan review verdict: <approve | request_revisions | reject>, <brief note>, <timestamp>
- Gate 2 opened: ...

## Stage transition log

- intake started: 2026-09-05T13:13Z (owner: blog-post-workflow, autopilot file-intake)
- intake completed: 2026-09-05T13:14Z
- chrome_fetch started: 2026-09-05T13:16Z (owner: blog-post-workflow, namespace open-claude-in-chrome)
- SERP fetch completed: 2026-09-05T13:22Z, 5 selected (ranks 1,2,3,4,9), 0 failed
- Reddit fetch completed: 2026-09-05T13:30Z (chrome transport, primary), 5 selected, 0 failed; search re-captured as a merged 6-query listing because the literal query returned only off-topic threads
- X fetch completed: 2026-09-05T13:40Z, Latest tab primary (Top was off-topic) merged with a product-name Top query; 4 selected, 0 failed; signal weak
- Stage 1.5c skipped: modules.competitors is false
- Stage 1b started: 2026-09-05T13:40Z, sources=serp,reddit,x (owner: blog-researcher)
- Stage 1b completed: 2026-09-05T13:47Z, serp.md + reddit.md + x.md written
- synthesize_plan started: 2026-09-05T13:47Z (owner: blog-post-workflow)
- synthesize_plan completed: 2026-09-05T14:05Z, plan_review opened: 2026-09-05T14:05Z (owner: plan-reviewer)
- plan_review completed: 2026-09-05T14:22Z (approve, iteration 2)
- outline started: 2026-09-05T14:22Z (owner: blog-post-workflow)
- outline resumed: 2026-09-05T13:20Z (owner: blog-post-workflow; prior run died on a usage limit with the §Product buy links table unfilled)
- outline completed: 2026-09-05T13:20Z, auto-progressing to Stage 3a (no human gate). Buy links: 9 Amazon ASINs verified by product page + Staedtler and Pilot brand pages (not on Amazon US). Kire-Na award verified from Pilot Japan primary source (Stationery Shop Award 2025); 11-pick title retained
- Stage 3a started: 2026-09-05T13:20Z (owner: blog-writer)

- Stage 3a completed: 2026-09-05T13:47Z, draft-v1.md written (3,739 words total by wc; 3,070 body prose excluding frontmatter, FAQ and marker text; outline target ~2,600). Markers: 4 [VERIFY:] (all with source clauses), 0 [EXTERNAL_LINK_NEEDED:], 0 [INTERNAL_LINK_NEEDED:], 4 [IMAGE:]. 0 em-dashes, 0 forbidden phrases. H2 order, CTA H2 and 4 FAQ items match outline. Prior session died between the writer's return and Step 10.6; close-out done on resume.

- Stage 3b review iteration 1 started: 2026-09-05T13:47Z (synthetic length gate, Step 11.1 item 2: body prose 3,070 vs ~2,600 target, +18%; reviewer NOT dispatched; review.md written by editor, archived as review-v1.md)
- Stage 3b revise iteration 2 started: 2026-09-05T13:47Z (owner: blog-writer, mode=revise, trim-only to 2,500–2,700 body words)
- Stage 3a revise completed: 2026-09-06T21:35Z (draft-v2.md written, 2,685 gated body words, was 3,070; markers + links + headings preserved)
- Stage 3b review iteration 2 started: 2026-09-06T21:35Z (owner: blog-reviewer, full sweep on draft-v2)
- Stage 3b review iteration 2 completed: 2026-09-06T21:44Z (verdict request_revisions: 0 critical, 1 major, 9 minor; length resolved 3,070 -> 2,685 = +3.3%; archived review-v2.md)
- Stage 3b revise iteration 3 started: 2026-09-06T21:44Z (owner: blog-writer, mode=revise -> draft-v3)
- Stage 3a revise completed: 2026-09-06T21:49Z (draft-v3.md written, 2,736 gated body words = +5.2%; Sharpie Pocket Smear Guard claim + its [VERIFY:] deleted per review-v2 major; 33 links preserved)
- Stage 3b review iteration 3 started: 2026-09-06T21:49Z (owner: blog-reviewer, full sweep on draft-v3)
- Stage 3b review iteration 3 completed: 2026-09-06T21:59Z (verdict APPROVE on draft-v3: 0 critical, 0 major, 7 minor; archived review-v3.md)
- Stage 3c started: 2026-09-06T21:59Z (owner: blog-humanizer, draft-v3)
- Stage 3c completed: 2026-09-06T22:02Z (preservation PASSED; 3 passive->active conversions, 0 forbidden phrases, 0 em-dashes, word count 3389 unchanged)
- Stage 3d started: 2026-09-06T22:02Z (owner: blog-post-workflow / editor, 3 [VERIFY:] markers)
- Stage 3d completed: 2026-09-06T22:06Z, resolved 3, kept-general 0, deleted 0, competitor-routed 0
- Stage 4a completed: 2026-09-06T22:14Z, 5 images (1 featured ai-prompt + 4 in-post: 2 remotion, 2 ai-prompt); in-post entries 4 == draft [IMAGE:] placeholders 4
- Stage 4a.5 started: 2026-09-06T22:14Z (owner: image-builder, 5 file-producing slots)
- Stage 4a.5 completed: 2026-09-06T22:24Z, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed. Builder also fixed a pre-existing JSX syntax error in tools/remotion/src/Root.tsx (the FourCorePagesMap Still from the bullet-journal post was never closed, which would have broken EVERY remotion render); that fix + the 2 new composition sources ship with this post's PR. The builder's symlinked tools/remotion/node_modules was REMOVED by the editor after rendering: .gitignore's `node_modules/` pattern does not match a symlink, so it showed as untracked and could have been committed as an absolute-path symlink into the main checkout.
- Stage 4b started: 2026-09-06T22:24Z (owner: blog-post-workflow)

- <stage> started: <timestamp> (owner: <agent>)
- <stage> completed: <timestamp>

## Notes

- Autopilot run (CONSOLE_RUN_STATE set, CONSOLE_VERIFICATION=on). No human at intake; see brief.md §Autopilot assumptions.
- Stage 2 (resumed 2026-09-05): Amazon buy links resolved in the logged-in browser via same-origin search + `/dp/` fetches; Stabilo Boss Original Pastel is a marketplace listing (B01MR2AC1N, low stock on 2026-09-05), the only clean pastel-set listing found. Kire-Na: the "2 seconds" dry time stays unverified (JetPens in-house test), replaced by "quick-drying" per Pilot; award name corrected to Japan's Stationery Shop Award 2025 (文房具屋さん大賞), sourced from Pilot Japan.
- Stage 3a handoff (editor-reconstructed on resume, 2026-09-05): draft-v1 covers all 11 picks with tagged Amazon or brand buy links, the affiliate disclosure sits as the last intro paragraph, the Dunlosky sentence carries its [VERIFY:] marker as the outline instructed, and Sharpie Smear Guard claims carry [VERIFY:] on both the Clear View and Pocket lines (see research/_raw/_stage3d_prep.md: the Pocket page does NOT mention Smear Guard). Only defect found: +18% over the body-prose target.

- Stage 3d marker resolution (2026-09-06T22:06Z), 3 [VERIFY:] markers, all resolved from primary/allowlist sources, nothing deleted:
  - line 63, highlighting rated low-utility (Dunlosky et al. 2013): **resolved (cite: https://journals.sagepub.com/doi/10.1177/1529100612453266)**. Wording confirmed on APS, the journal's own publisher ("highlighting and underlining, and rereading" got "a low utility rating"; practice testing + distributed practice "receiving the highest overall utility rating"), https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html (HTTP 200). The DOI page itself 403s to curl/WebFetch but renders normally in the logged-in browser (title, authors, "Volume 14, Issue 1" all confirmed by screenshot), so the canonical DOI anchor already in the draft was KEPT rather than swapped. Marker dropped, no prose change.
  - line 159, FriXion Light chisel tip + heat-clearing ink: **resolved (cite: https://www.pilotpen.eu/faq/)**. Chisel tip confirmed on Pilot's own product page ("3mm Chisel tip"), https://pilotpen.com.au/markers/frixion-light, read in the browser; "3mm chisel tip" added to the prose. The heat half is confirmed by Pilot's own FAQ (ink "heats up to over 60°C and becomes invisible"; warns about "heaters, in a car on a hot day") and is now cited INLINE on the "Watch out" line (line 163), which the reviewer flagged as asserting the claim as fact while line 159 still carried the marker, so both lines were resolved in the one edit as review-v3 minor #2 asked.
  - line 167, Sharpie Clear View Smear Guard ink: **resolved (source: Sharpie's own Clear View Stick page, https://www.sharpie.com/highlighters/sharpie-clear-view-stick-highlighters-see-through-chisel-tip/SAP_1966798.html, read in the browser; it 403s to curl/WebFetch)**. Verbatim: "Sharpie highlighters also feature Smear Guard® ink (let ink dry before highlighting)." Marker dropped with NO new external link: the post already scopes this as what Sharpie "markets" on the line, and the post is at 6 non-buy external links against the standard's 3-5 band, so no further link was spent on a claim that is already correctly attributed. Source recorded in facts.md instead.
  - Link budget deviation for the record: non-buy external links went 5 -> 6 (the Pilot FAQ). Over the standard's 3-5 band by one, spent deliberately on the heat warning, the one claim in the post that can cost a reader their notes.
  - Stage 3d re-lint PASSED: 0 em-dashes, 0 en-dashes, 0 residual [VERIFY:]/[EXTERNAL_LINK_NEEDED:], 4 [IMAGE:] markers untouched, every non-buy external URL HTTP 200 except the SagePub DOI (403 to bots, verified in-browser), no new link to any research/serp.md top-10 URL (the NYT/Wirecutter link at rank 9 is explicitly allowlisted by blog-craft.md §Authoritative-site allowlist, so it stays).

- Stage 4b.5 inbound-link write-ahead record (2026-09-06T22:27Z), per astro-git-pr.md §Staging step 5c (recorded BEFORE the edit):
  - inbound link applied by workflow: content/blog/best-pens-for-note-taking.md
  - inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md
  - inbound link applied by workflow: content/blog/cornell-note-taking-method.md
