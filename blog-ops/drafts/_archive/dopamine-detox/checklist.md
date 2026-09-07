---
slug: dopamine-detox
target_keyword: dopamine detox
created: 2026-09-07 03:41
last_updated: 2026-09-07 06:40
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: dopamine-detox

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/dopamine-detox/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from content-plan.md row #28)
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
- [x] Prior-iteration reviews archived as review-v<N>.md (n/a, approved on iteration 1, no revise loop)

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

- Plan review opened: 2026-09-07T05:12Z (iteration 1)
- Plan review verdict: request_revisions, 5 issues (2 important, 3 minor), all applied; prior review archived as plan-review-v1.md, 2026-09-07T05:20Z
- Plan review verdict: approve (iteration 2 of 2 max), all 5 fixes verified, 2 notes carried to the outline stage, 2026-09-07T05:26Z
- Gate 2 opened: ...

## Stage transition log

<append one line per stage transition>

- intake completed: 2026-09-07T03:41Z (autopilot file-intake from content-plan.md row #28)
- Stage 1a SERP fetch completed: 2026-09-07T04:44Z, 7 selected of 8 captured, 0 failed
- Stage 1.5a Reddit completed: 2026-09-07T04:50Z, chrome transport (primary), 25 search results, 5 threads fetched, 0 failed
- Stage 1.5b X completed: 2026-09-07T04:55Z, logged in, Top tab, 30 posts captured, 5 fetched, 0 failed
- Stage 1.5c competitor check: SKIPPED (modules.competitors is false)
- Stage 1b started: 2026-09-07T04:55Z (owner: blog-researcher), sources=serp,reddit,x
- Stage 1b completed: 2026-09-07T05:05Z, serp.md + reddit.md + x.md written
- Stage 1c completed: 2026-09-07T05:12Z, facts.md + plan.md written; plan status awaiting_plan_review
- Stage 1c.5 plan review opened: 2026-09-07T05:12Z (iteration 1)
- Stage 1c.5 iteration 1 verdict request_revisions: 2026-09-07T05:20Z, 5 fixes applied to plan.md
- Stage 1c.5 iteration 2 verdict approve: 2026-09-07T05:26Z, plan.md status approved
- Stage 2 outline started: 2026-09-07T05:26Z (owner: blog-post-workflow)
- outline completed: 2026-09-07T05:34Z, auto-progressing to Stage 3a (no human gate); roll-up 2,260 words vs plan target 2,000-2,400
- Stage 3a started: 2026-09-07T05:34Z (owner: blog-writer)
- Stage 3a completed: 2026-09-07T05:42Z, 2,255 body words (target 2,000-2,400), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-07T05:42Z (owner: blog-reviewer)
- Stage 3b completed: 2026-09-07T05:55Z, verdict approve on iteration 1, 0 critical / 0 major / 6 minor
- Stage 3b editor pass: all 6 minor issues applied directly to draft-v1.md (no writer revise pass needed on an approve verdict), 2026-09-07T05:56Z
- Stage 3c started: 2026-09-07T05:56Z (owner: blog-humanizer)
- Stage 3c completed: 2026-09-07T06:04Z, preservation check PASSED, 2,264 -> 2,259 words (-0.22%)
- Stage 3d completed: 2026-09-07T06:10Z, 0 markers to resolve; link verification found and fixed one contested credential
- Stage 4a started: 2026-09-07T06:10Z (owner: image-planner)
- Stage 4a completed: 2026-09-07T06:22Z, 5 images (1 featured ai-prompt + 4 in-post: 3 ai-prompt, 1 remotion); slot count matches the 4 draft placeholders exactly
- Stage 4a.5 started: 2026-09-07T06:22Z (owner: image-builder)
- Stage 4a.5 completed: 2026-09-07T06:35Z, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b completed: 2026-09-07T06:40Z, action-items.md written; 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 4 IMAGE markers
- Stage 4b.5 staging started: 2026-09-07T06:40Z

- <stage> started: <timestamp> (owner: <agent>)
- <stage> completed: <timestamp>

## Notes

**Stage 2 structural decision (flag for Gate 2).** The approved plan's section 4 was a "7-day reset". The editor restructured it at outline time because that shape collided heading-for-heading with the already-published `digital-detox-plan` post (which ships "Before day 1: get your baseline number" and "The 7-day digital detox plan"), and two posts with the same shape would compete for the same intent. Section 4 now follows the graduated cadence from the source material and links out to `digital-detox-plan` for readers who want the screen-time schedule. Angle, guardrails, facts spine and word count are unchanged. Full reasoning in `outline.md` §Open questions item 1.

**Headless-run assumptions to confirm at Gate 2:** category (Productivity), author (olga), and enabling both Reddit and X research were editor judgments made from files, not human answers. All logged in `brief.md` §Autopilot assumptions.

**Fact-handling constraints carried into drafting.** `facts.md` §Rejected kills four widely-circulated claims (a detox "resets dopamine levels", a 12 to 15 week recovery timeline, the phasic/tonic mechanism, and "boredom is scientifically nefarious"). The Parkinson's/depression/restless-leg/ADHD association is confined to H2 1 and must not appear in H2 6 next to a reader's own ADHD. This SERP reports no percentages and no timelines; any number not in `facts.md` gets cut rather than marked.

**Stage 3a writer handoff (draft-v1).** 2,255 body words excluding FAQ (roll-up target 2,260); FAQ 350. Markers: 4 `[IMAGE:]`, 0 `[VERIFY:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`. Editor's own post-spawn checks: 0 em-dashes, 0 en-dashes, 0 forbidden phrases from either list, exactly the 5 planned external URLs and no others, internal links root-relative with no trailing slash, `dopamine detox` 6 times in body prose (blog-craft range 2 to 8), frontmatter conforms to the wordpress template with tags drawn from the live taxonomy. CTA links `/ai-tools`, matching the convention in 10 published posts.

Writer's own flagged calls: the Parkinson's/ADHD association appears once, in H2 1, unlinked, and H2 6 carries no diagnostic language; the caffeine analogy is framed strictly as how the experience feels, with an explicit line saying it is not a sourceable mechanism; an "most upvoted reply" phrasing was dropped because the vote rank was not in facts.md; H2 6 runs four short paragraphs rather than two because of the 1 to 3 sentence paragraph cap. The writer self-flagged one item for the reviewer: H2 1 and H2 6 carry no bullet list, which the outline specified deliberately for those sections but which sits against the "one bullet list per 300 words" humanization floor.

**Stage 3b outcome (draft-v1).** Verdict `approve` on iteration 1: 0 critical, 0 major, 6 minor. Fact-discipline axis clean (all four facts.md kill-list claims absent, including in softened form; caffeine analogy framed as reported experience and disclaimed in-voice; PMC review cited with no number attached). The section 6 guardrail held: the Parkinson's/depression/restless-leg/ADHD association appears once, in H2 1 only, and H2 6 carries no mechanism or diagnostic language.

The editor applied all 6 minor issues directly rather than spending a writer revise pass on an approved draft:
1. Intro rhythm, split a long sentence to add a short beat on the first screen (authors.md voice note for olga).
2. **Accuracy fix, the one that mattered:** "a clinical psychologist" was a credential upgrade the sources do not state. Changed to "a psychologist who used the idea with tech workers and investors in Silicon Valley", which is what facts.md §Named examples supports.
3. H2 3, "That reply is doing more useful thinking than the post" punched at a person rather than the trend; redirected to the idea.
4. H3 4.4, split a five-sentence paragraph in two (writing-standards.md caps at 1 to 3).
5. H2 6, glossed "neurotypicals" in the lead-in rather than editing the verbatim reader quote.
6. CTA, rewrote the clause after the anchor; it was near-verbatim with the live CTA in the sibling post `how-to-reduce-screen-time`, which this post links to. The anchor itself is the house hook from blog.md and was left identical.

Body prose after the fixes: 2,264 words, still inside the 2,000 to 2,400 target.

**Reviewer's explicit rulings to preserve downstream:** H2 1 and H2 6 should NOT gain bullet lists on any later pass (qualified pass on the humanization-floor question, ruled deliberately). Three passages flagged as must-survive: the caffeine-analogy disclaimer, H2 6's small shape and its two deliberate omissions, and the "that is what withdrawal from a very well-designed product feels like" beat that keeps a reader who already tried and quit from feeling stupid.

**Stage 3c humanize.** Preservation check PASSED (URL set, numeric literals, all marker types, headings, frontmatter byte-identical). 0 forbidden phrases, 0 em-dashes, 0 en-dashes before and after. Two rhythm edits only (an intro run-on split; one filler phrase tightened in H2 1). Body 2,264 -> 2,259 words. All three review §8 preservation rulings honored; no bullet lists added to H2 1 or H2 6.

**Stage 3d marker auto-resolution: nothing to resolve.** The draft carries 0 `[VERIFY:]` and 0 `[EXTERNAL_LINK_NEEDED:]` markers (and 0 `[INTERNAL_LINK_NEEDED:]`), because the writer cut unsupported claims instead of deferring them, which is what this post's fact constraints demanded. Per-marker log: none.

The editor still ran the stage's re-lint on the five external URLs. Four return HTTP 200 to curl. The NYT URL returns 403 to curl but loads correctly in the logged-in browser (the real Nov 7 2019 Nellie Bowles article, paywalled), so the 403 is bot-blocking, not a dead link. **Flag for Gate 2: the NYT link is paywalled**, so a reader without a subscription sees only the lede. It is kept because blog-craft.md §Forbidden external links step 3 requires routing to the primary source a competitor cites, and our own `_raw/07-harvard-health.json` confirms Harvard Health quotes Sepah verbatim and links that exact URL.

**One accuracy fix caught during that verification.** Reading the Harvard raw fetch closely showed the sources disagree on Sepah's credential: Harvard Health says "California psychiatrist", Cleveland Clinic and MedicalNewsToday say psychologist. draft-v1 had asserted "a psychologist" in five places, including the excerpt and the H2 3 heading. All five now say "clinician" or describe what he did rather than what he is, which every source agrees on. Logged in a new `facts.md` §Contested section. Note this changes the H2 3 heading wording from `outline.md` ("...what the psychologist who coined it suggested" -> "...what the clinician who coined it suggested"); wording only, structure unchanged.

**Stage 4a image plan.** 5 slots, 1 featured (`ai-prompt`, per `images.featured_default` and the standing rule in custom-instructions.md) + 4 in-post (3 `ai-prompt`, 1 `remotion`). In-post entry count matches the draft's 4 `[IMAGE:]` placeholders exactly, same sections and order, placeholder text verbatim-identical. Rotation entry written to `blog-ops/featured-log/2026-09-07-dopamine-detox.md`; the planner blocked `negative-space` and `big-number` as recently used and chose `scene-vignette`.

**Repo fix made during this stage.** The planner found `tools/remotion/src/Root.tsx` unparseable: the `FourCorePagesMap` `<Still>` at line 81 was missing its `width={CANVAS.width} height={CANVAS.height} />` closing line, so the next tag opened before it closed and NO composition in the project could render. Pre-existing on `main`, introduced by the bullet-journal-for-beginners PR (#19), not by this run. The editor inserted the missing line. The fix ships with this post's PR because it is what unblocks this post's remotion slot.

**Planner warning carried forward:** in-post image 3 (the remotion cadence diagram) sits about 10 lines below H2 3's comparison table, whose last row also mentions the cadence. The planner kept the slot and justified it (different section, different start point, the diagram shows the ramp rather than the contrast). Worth a glance at Gate 2.

**Stage 4a.5 image build: all 5 slots rendered, 0 failed.** `featured.png`, `idle-attention-walk.png`, `viral-versus-original.png`, `reclaimed-evening.png` via the codex ai-prompt path; `graduated-cadence-steps.png` via the new remotion composition `GraduatedCadenceSteps` (source at `tools/remotion/src/GraduatedCadenceSteps.tsx`, registered in `Root.tsx`). Asset dir carries the `.staged-by-blog-workflow` sentinel. The featured slot is file-producing and `featured.png` exists, so the Stage 13.5 step-6 completion gate passes.

Editor reviewed all five renders visually: on-brand warm palette, exact title on the featured cover with the `olgapak.com` wordmark, consistent character across the walk and contrast scenes, and every constraint honored (no brain or neuron imagery, nothing implying a chemical mechanism, no shaming imagery of a person with a phone). Every number in the remotion diagram traces to facts.md: 1 to 4 hours at the end of a workday, 1 day a week, 1 weekend a quarter, 1 week a year.

**Stage 4b action items.** Unusually short list because nothing was deferred: 0 `[VERIFY:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`, 4 `[IMAGE:]` (matching the 4 in-post entries in images.md). The zero `[VERIFY:]` count is the writer cutting unsupportable sentences rather than deferring them, which is what this post's fact constraints demanded. §6 is N/A for the WordPress adapter; §7 carries the mandatory manual Rank Math focus-keyword step (`dopamine detox`, not settable via REST) before the human clicks Publish. §9 repurpose is skipped (`modules.repurpose: false`).

**Stage 4b.5 inbound-link write-ahead ownership record (written BEFORE the edits).** The workflow is about to insert one anchor into each of these three files. Presence of a `/dopamine-detox` link in any of them is the workflow's own edit, recorded here so a resume can tell it apart from a hand-authored one:

- `content/blog/digital-detox-plan.md`, anchor `dopamine detox` -> `/dopamine-detox`, in the section "What a digital detox plan actually is (and why cold turkey backfires)". Dirty-file guard: clean at 2026-09-07T06:45Z, 0 pre-existing `/dopamine-detox` links.
- `content/blog/how-to-stop-doomscrolling.md`, anchor `dopamine detox` -> `/dopamine-detox`, in the section "Layer 2: Catch the trigger (work with your brain, not against it)". Dirty-file guard: clean at 2026-09-07T06:45Z, 0 pre-existing `/dopamine-detox` links.
- `content/blog/how-to-reduce-screen-time.md`, anchor `dopamine detox` -> `/dopamine-detox`, in the section "Not all screen time is the problem". Dirty-file guard: clean at 2026-09-07T06:45Z, 0 pre-existing `/dopamine-detox` links.

