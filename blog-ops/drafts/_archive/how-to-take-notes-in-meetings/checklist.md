---
slug: how-to-take-notes-in-meetings
target_keyword: how to take notes in meetings
created: 2026-09-08 15:21
last_updated: 2026-09-08 15:24
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: how-to-take-notes-in-meetings

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/how-to-take-notes-in-meetings/brief.md)
- [x] Slug approved by human (AUTOPILOT: slug taken verbatim from `blog-ops/content-plan.md` row 25; no human present)
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
- [x] Verdict = `approve` (iteration 1, no revise pass needed) (if not on first try, iterations ≤ 2)
- [ ] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran)

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
- [x] Authors-map status confirmed (N/A for the wordpress-rest adapter) per the publish adapter (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-09-08T15:40:37
- Plan review verdict: approve (iteration 1), all 7 rubric criteria pass; one non-blocking note: recommended title is 49 chars, one short of the 50-60 rule, 2026-09-08T15:45:39
- Gate 2 opened: ...

## Stage transition log

<append one line per stage transition>

- Stage 4b.5 staging started: 2026-09-08T16:42:11
- Stage 4b completed: 2026-09-08T16:42:11, 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 4 IMAGE markers
- Stage 4b started: 2026-09-08T16:40:49
- Stage 4a.5 completed: 2026-09-08T16:40:49, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed; featured slot is file-producing (ai-prompt) and featured.png is on disk
- Stage 4a.5 started: 2026-09-08T16:17:55
- Stage 4a completed: 2026-09-08T16:17:55, 5 images (1 featured ai-prompt + 4 in-post: 2 ai-prompt, 2 remotion); slot count matches draft placeholders exactly
- Stage 4a started: 2026-09-08T16:10:00
- Stage 3d completed: 2026-09-08T16:10:00, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (no markers present); 4 pre-existing external URLs verified, 1 anchor reworded, 4 reviewer minors fixed in place
- Stage 3d started: 2026-09-08T16:07:41
- Stage 3c completed: 2026-09-08T16:07:41, preservation PASSED, 0 forbidden phrases, 0 em-dashes, net -1 word
- Stage 3c started: 2026-09-08T16:01:25
- Stage 3b completed: 2026-09-08T16:01:25, verdict=approve on iteration 1, 0 critical / 0 major / 7 minor
- Stage 3b review iteration 1 started: 2026-09-08T15:54:07
- Stage 3a completed: 2026-09-08T15:54:07, body prose ~2274 words, draft-v1.md written
- outline completed: 2026-09-08T15:47:53, auto-progressing to Stage 3a (no human gate)
- synthesize_plan completed: 2026-09-08T15:40:37, plan_review opened: 2026-09-08T15:40:37
- Stage 1b completed: 2026-09-08T15:38:13, serp.md + reddit.md + x.md written
- Stage 1b started: 2026-09-08T15:29:20, sources=serp,reddit,x
- X fetch completed: 2026-09-08T15:29:20, 3 selected (of 8 captured), 0 failed; f=live re-pull rejected as worse
- Reddit fetch completed: 2026-09-08T15:26:26, 5 selected, 0 failed (query re-pull documented in _reddit_selection.md)
- SERP fetch completed: 2026-09-08T15:24:19, 6 selected, 0 failed
- intake completed: 2026-09-08T15:21:02 (owner: blog-post-workflow, AUTOPILOT file-intake)

- <stage> started: <timestamp> (owner: <agent>)
- <stage> completed: <timestamp>

## Notes

### Inbound-link ownership records (write-ahead, Stage 4b.5 step 5c)

Written BEFORE the edit, per the adapter's write-ahead rule. These are the durable authority
for "did the workflow insert this link", not link-presence alone.

- inbound link applied by workflow: content/blog/note-taking-methods.md
- inbound link applied by workflow: content/blog/cornell-note-taking-method.md
- inbound link applied by workflow: content/blog/digital-vs-paper-notes.md

### Remotion Root.tsx fix (editor, Stage 4a)

The image-planner surfaced a real blocker and I confirmed it directly: `tools/remotion/src/Root.tsx`
line 81 had an unterminated `<Still id="FourCorePagesMap" ...>` element, missing its
`width={CANVAS.width} height={CANVAS.height} />` line. That is a syntax error, so NOTHING in
the Remotion project could render, not just this post's two diagrams. It arrived on `main`
with the bullet-journal merge (commit 0939813) and is the same defect class fixed during
`screen-free-hobbies`.

Fixed in this worktree, so the repair ships to `main` with this post's PR and unblocks every
future post's remotion slots, not only this one.

### Stage 3d outcome log (2026-09-08)

**Markers:** the humanized draft contained ZERO `[VERIFY:]` and ZERO `[EXTERNAL_LINK_NEEDED:]`
markers, so there was nothing to auto-resolve, keep-general, or delete. Stage 3d instead did
the verification work the outline deferred to it: confirming the four external URLs the writer
had already placed, which all still carried `needs_verification` in facts.md.

Per-URL outcome:
- `alumni.cornell.edu/cornellians/cornell-notes/` , **resolved (verified)**. HTTP 200; page
  describes the cue column / notes column / summary layout the post claims it does.
- `scientificamerican.com/.../why-writing-by-hand-is-better-for-memory-and-learning/` ,
  **resolved (verified)**. HTTP 200; concludes pen and paper is "still the best way to learn",
  and every study it cites is students/lectures/preschool, no meeting evidence. This is what
  the post's scoping clause is built on.
- `journals.sagepub.com/doi/abs/10.1177/0956797614524581` , **resolved (verified)**. Returns
  403 to `curl` behind Cloudflare but loads normally in the browser; abstract supports the
  anchor exactly ("students who took notes on laptops performed worse on conceptual
  questions") and independently supports the post's thesis about verbatim transcription.
  Do not re-flag this as a dead link on a curl status alone.
- `bbc.com/worklife/...note-taking-by-hand` , **resolved (verified), anchor reworded**. The
  page says handwriting "involves cognitive engagement in summarising, paraphrasing,
  organising", but does NOT say "prioritising". The draft anchor was changed from "forces you
  to prioritize and summarize as you go" to "pulls you into summarizing and paraphrasing as
  you go" so the anchor is a literal claim the source makes.

No claim was deleted and no citation was invented. facts.md's four `needs_verification` rows
are now `verified 2026-09-08` with the evidence recorded inline.

**Reviewer minors fixed in the same pass (4 of 7, the substantive ones):**
1. `:29` "Every new note-taker describes the same failure" , rewritten to describe the pattern
   in online discussion rather than assert a universal.
2. `:63` "where experienced note-takers end up on their own" , rewritten to "people who do this
   all day tend to land", and the speaker is now identified as a project manager in that thread.
3. `:99` handwriting benefit applied to meetings before H2 6 scopes it , now carries its own
   scoping clause ("that research comes out of studying rather than meetings, more on which
   below") and the reworded anchor above. British spelling was already fixed at Stage 3c.
4. `:178` FAQ 3 stated the memory claim bare , now carries the same research-scope clause the
   body has. This one mattered most, since FAQ answers get lifted standalone into search
   results.

Remaining 3 minors are copy-level only (see `review.md` §Specific issues) and were left as-is;
none affects accuracy. H2 7 still has no standalone-question paragraph, also left as-is.

Re-lint after edits: 0 em-dashes, 0 en-dashes, 0 residual markers, no forbidden phrases
introduced, no new link to any `research/serp.md` top-10 URL.

### Stage 3b reviewer minors carried into Stage 3d (editor to fix in place)

The verdict was `approve`, so no revise pass ran. These 7 minors were logged rather than
sent back to the writer; the editor fixes the substantive ones during Stage 3d marker
resolution, when the draft is already being edited:

1. `draft-v1.md:29` and `:63` generalize a single Reddit comment into a universal ("Every new
   note-taker describes the same failure"). Fix: scope to what the source supports.
2. `draft-v1.md:99` applies the handwriting benefit to meetings 34 lines BEFORE H2 6 does the
   honest lecture-research scoping; also mixes British "prioritise/summarise" into an
   otherwise US-spelling corpus. Fix: scope it there too, and use US spelling.
3. `draft-v1.md:178` FAQ 3 states the memory claim without the research-scope clause the body
   carries at L133. FAQ answers get lifted standalone into search results, so this one
   matters most.
4-7. Remaining copy-level minors per `review.md` §Specific issues.

Also noted: H2 7 is the only section with no standalone-question paragraph. All four external
URLs still carry `needs_verification` in facts.md; per the outline's standing instruction, a
URL that fails Stage 3d gets its claim CUT, not softened.

### Stage 3a writer handoff (draft-v1)

- Body prose 2,274 words vs outline roll-up ~2,260. FAQ ~380 on top.
- Markers: 4 `[IMAGE:]` (after H2 1, 2, 4, 5); 0 `[VERIFY:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- 5 internal links (root-relative, no trailing slash) + the `/ai-tools` CTA; 4 external links exactly per the outline plan; zero links to any SERP top-10 URL; first link in the post is internal.
- 0 em-dashes, 0 en-dashes, no forbidden phrases; target keyword 4x.
- Writer deliberately DROPPED the outline's "5 of 8 X posts were product promotion" figure: it lives in research/x.md but not facts.md, so the point is made without the count rather than attaching a `[VERIFY:]` to our own research.
- The four handwriting/memory external links still carry `needs_verification` in facts.md; H2 6 scopes them honestly, so Stage 3d cutting one costs ~25 words and no argument.
- CTA heading "Hand off the part you keep skipping" is the writer's own; the outline specified the angle but no heading text.

<anything the editor wants to flag for future stages or the human, e.g., "competitor X changed pricing on <date>, verify before publish">
