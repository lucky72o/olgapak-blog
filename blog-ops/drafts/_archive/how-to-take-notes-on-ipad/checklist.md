---
slug: how-to-take-notes-on-ipad
target_keyword: how to take notes on ipad
created: 2026-08-19 03:03
last_updated: 2026-08-19 04:32
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: how-to-take-notes-on-ipad

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/how-to-take-notes-on-ipad/brief.md)
- [x] Slug approved by human — autopilot: slug taken verbatim from `blog-ops/content-plan.md` row #16 (no human conversation)
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

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output
- [x] Authors-map status confirmed per the publish adapter (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-08-19 03:24
- Plan review verdict: request_revisions (iteration 1), external-link count 7->5 + body H2s 8->7, 2026-08-19 03:29
- Plan review verdict: approve (iteration 2, ceiling), all fixes confirmed landed, 2026-08-19 03:31
- Gate 2 opened: ...

## Stage transition log

- intake completed: 2026-08-19 03:03 (owner: blog-post-workflow, autopilot file-intake)
- Stage 1a SERP fetch completed: 2026-08-19 03:07, 7 organic results captured, 5 selected, 0 failed (Chrome namespace: open-claude-in-chrome)
- Stage 1.5a Reddit fetch completed: 2026-08-19 03:11, chrome transport (primary), 5 threads selected, 0 failed; supplemental search capture recorded in _reddit_selection.md
- Stage 1.5b X fetch completed: 2026-08-19 03:14, 9 posts captured (f=top, on-topic), 5 selected, 0 failed
- Stage 1.5c competitor freshness re-check: SKIPPED (modules.competitors false)
- Stage 1b started: 2026-08-19 03:15, sources=serp,reddit,x
- Stage 1b completed: 2026-08-19 03:19, serp.md + reddit.md + x.md written (research/competitors.md N/A, module off)
- synthesize_plan completed: 2026-08-19 03:24, plan_review opened: 2026-08-19 03:24
- Stage 1c.5 plan review completed: 2026-08-19 03:31, verdict approve after 1 revision pass; plan-review-v1.md archived
- outline started: 2026-08-19 03:31
- outline completed: 2026-08-19 03:36, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-08-19 03:36
- Stage 3a completed: 2026-08-19 03:42, draft-v1.md written, 2,473 words of body prose excluding FAQ (roll-up 2,420, +2.2%, well inside the +15% ceiling)
- Stage 3b review iteration 1 started: 2026-08-19 03:42
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 1 major, 6 minor), review archived as review-v1.md, 2026-08-19 03:53
- Stage 3b revise iteration 2 started: 2026-08-19 03:53
- Stage 3b revise iteration 2 completed: 2026-08-19 03:56, draft-v2.md written, exactly 7 diff hunks matching review.md section 9, body prose 2,499
- Stage 3b review iteration 2 started: 2026-08-19 03:56
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 2 minor), 2026-08-19 04:04
- Editor applied the 2 minor string swaps from review.md section 7 to draft-v2.md directly (reviewer specified them as final-polish swaps, explicitly not a draft-v3): line 21 list parallelism, and line 144 'he was told' -> 'the professor said' (verified against research/_raw/x-07-antlerposter.json)
- Stage 3c started: 2026-08-19 04:04
- Stage 3c completed: 2026-08-19 04:12, preservation check PASSED, 2 burstiness injections, body prose 2,499 -> 2,465
- Stage 3d completed: 2026-08-19 04:13, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (NO-OP: the draft shipped with zero [VERIFY:] and zero [EXTERNAL_LINK_NEEDED:] markers)
- Stage 4a started: 2026-08-19 04:13
- Stage 4a completed: 2026-08-19 04:18, 5 images (1 featured ai-prompt + 4 in-post: 3 ai-prompt + 1 remotion), in-post entry count 4 == draft [IMAGE:] count 4
- Stage 4a.5 started: 2026-08-19 04:18
- Stage 4a.5 completed: 2026-08-19 04:26, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed; featured.png present so the featured-slot completion gate passes
- Stage 4b started: 2026-08-19 04:26
- Stage 4b completed: 2026-08-19 04:32, 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 4 IMAGE; the only genuine human TODOs are the final read, the Rank Math focus keyword, Publish, and hand-applying the 3 inbound links to the live WP posts
- Stage 4b.5 staging started: 2026-08-19 04:32

## Notes

- Autopilot run (console-gated). `CONSOLE_VERIFICATION=on`: staging file layout only, no PR/WP-draft side effects in this run.
- Stage 1c.5 carry-forward for Stage 3b (from plan-review.md, non-blocking): confirm the Scribble fact (handwriting converts to typed text on-device, facts.md §Apple feature facts) lands somewhere sensible in the draft, H2 4 being the natural home, or is dropped deliberately.
- Editor pre-verified every external source by loading the page during Stage 1a; see research/_raw/_editor_source_checks.md. Stage 3d should have little or nothing left to resolve.

### Stage 4b.5 inbound-link write-ahead record

Written BEFORE the edits, per `astro-git-pr.md` §Staging step 5c. These three files are the workflow's own inbound-link edits; presence of the link on disk alone is never proof of that, this record is.

- inbound link applied by workflow: content/blog/note-taking-methods.md
- inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md
- inbound link applied by workflow: content/blog/cornell-note-taking-method.md

All three passed the ownership check (no pre-existing `(/how-to-take-notes-on-ipad)` link) and the dirty-file guard (`git status --porcelain` clean) before being edited.

### Stage 3d marker log (no-op)

Zero `[VERIFY:]` and zero `[EXTERNAL_LINK_NEEDED:]` markers existed in the humanized draft, so there was nothing to resolve, keep-general, delete, or route. This is by design rather than luck: the editor loaded and read every external source during Stage 1a (`research/_raw/_editor_source_checks.md`) and facts.md carried explicit scope guards, so the writer never needed a marker. facts.md needed no update because no resolution occurred.

Re-lint on the humanized `draft-v2.md`: 0 em-dashes, 0 forbidden phrases, 0 residual markers, 4 `[IMAGE:]` intact, exactly the 5 planned external URLs, no link to any top-10 SERP URL. All five external URLs re-checked live and reachable (PubMed 203, Springer 200, Paperlike 200, Apple 200, Amazon 200); Apple and Amazon were additionally loaded in the browser at Stage 1a with their page titles confirmed.

### Stage 3a writer handoff (draft-v1.md)

- 2,473 words of body prose excluding the FAQ (editor's own count) against a 2,420 roll-up: +2.2%, inside the +15% ceiling. FAQ adds 366.
- Markers: 4 `[IMAGE:]` (one per in-post slot), and ZERO `[VERIFY:]`, `[EXTERNAL_LINK_NEEDED:]` or `[INTERNAL_LINK_NEEDED:]` — every claim traced to facts.md, which is why Stage 3d should be a no-op.
- Editor's post-spawn checks all pass: 0 em-dashes, 0 prices, 0 forbidden phrases, 0 links to any of the four top-10 SERP competitor domains, exactly the 5 planned external URLs byte-identical, no outbound link on any app name, tags all drawn from the live taxonomy in blog.md.
- Writer flagged two things: (a) headings are Title Case, matching every published post and writing-standards.md, where outline.md recorded them in sentence case — wording unchanged, capitalization only; (b) the WordPress frontmatter template defines no cover field, so the featured image lives only in outline.md until Stage 4a picks it up. Both look correct to me.
- **Editor observation passed to Stage 3b rather than hand-fixed:** the CTA links `/ai-tools` root-relative. `blog-craft.md` §Internal linking says root-relative is for blog posts and absolute for the marketing site, and the published `best-notebooks-for-note-taking` post uses `https://olgapak.com/ai-tools`. Reviewer to rule on it.
