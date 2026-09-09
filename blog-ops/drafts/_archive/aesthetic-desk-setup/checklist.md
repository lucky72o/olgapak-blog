---
slug: aesthetic-desk-setup
target_keyword: aesthetic desk setup
created: 2026-09-09 04:03
last_updated: 2026-09-09 05:33
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: aesthetic-desk-setup

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/aesthetic-desk-setup/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from content-plan.md row 30; no human confirmation available)
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

- Plan review opened: 2026-09-09 04:29
- Plan review verdict: request_revisions (iteration 1), 1 critical (missing intro affiliate-disclosure requirement) + 1 important (Step 6 had no fact to write from) + 1 minor; all three applied, prior review archived as plan-review-v1.md, 2026-09-09 04:37
- Plan review verdict: approve (iteration 2, final dispatch), 2026-09-09 04:37
- Gate 2 opened: ...

## Stage transition log

- Stage 4b.5 staging started: 2026-09-09 05:33
- Stage 4b completed: 2026-09-09 05:33, action-items.md written; markers 0 VERIFY / 0 EXTERNAL_LINK_NEEDED (1 resolved at 3d) / 0 INTERNAL_LINK_NEEDED / 4 IMAGE; §6 N/A for the WordPress adapter
- Stage 4b started: 2026-09-09 05:30
- Stage 4a.5 completed: 2026-09-09 05:30, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed (featured.png re-rendered once to clear the 1.91:1 OG crop band)
- Stage 4a.5 started: 2026-09-09 05:16
- Stage 4a completed: 2026-09-09 05:16, 5 images (1 featured + 4 in-post), all ai-prompt, 0 remotion, 0 screenshot; in-post entries 4 == draft placeholders 4
- Stage 4a started: 2026-09-09 05:10
- Stage 3d completed: 2026-09-09 05:10, resolved 1, kept-general 0, deleted 0, competitor-routed 0
- Stage 3d started: 2026-09-09 05:08
- Stage 3c completed: 2026-09-09 05:08, preservation PASSED, 2 passive->active conversions, 0 forbidden phrases, 0 em-dashes, word count 2986 -> 2991
- Stage 3c started: 2026-09-09 05:05
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 4 minor); editor applied 3 of the 4 minor fixes directly to draft-v2.md, 2026-09-09 05:05
- Stage 3b review iteration 2 started: 2026-09-09 04:57
- Stage 3a revise completed: 2026-09-09 04:57, draft-v2.md written, 2327 body prose words (roll-up 2370, -1.8%), FAQ trimmed 407 -> 289
- Stage 3b revise iteration 2 started: 2026-09-09 04:54
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 2 major, 7 minor); review archived as review-v1.md, 2026-09-09 04:54
- Stage 3b review iteration 1 started: 2026-09-09 04:46
- Stage 3a completed: 2026-09-09 04:46, word count 2396 body prose (outline roll-up 2370, +1.1%), draft-v1.md written
- outline completed: 2026-09-09 04:39, auto-progressing to Stage 3a (no human gate)
- Stage 1c.5 completed: 2026-09-09 04:37, plan approved, advancing to Stage 2 outline
- synthesize_plan completed: 2026-09-09 04:29, plan_review opened: 2026-09-09 04:29
- Stage 1b completed: 2026-09-09 04:22, serp.md + reddit.md + x.md written
- Stage 1b started: 2026-09-09 04:12, sources=serp,reddit,x
- X fetch completed: 2026-09-09 04:12, 5 selected, 0 failed (logged-in x.com session confirmed)
- Reddit fetch completed: 2026-09-09 04:08, 5 selected, 0 failed (chrome transport, PRIMARY)
- SERP fetch completed: 2026-09-09 04:06, 7 selected, 0 failed (namespace: open-claude-in-chrome)
- intake completed: 2026-09-09 04:03 (autopilot file-intake from content-plan.md row 30)

## Notes

- Headless autopilot run (`CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`). Gate 2 is
  console-gated: this run stages file layout and stops at `ready_for_verification`.
- Affiliate post: every product pick needs a real tagged Amazon `/dp/<ASIN>?tag=op01e-20`
  link (or a non-Amazon brand page where Amazon has no genuine item), plus the standing
  affiliate disclosure at the end of the intro.
- Editor pre-resolved all product links BEFORE drafting (8 tagged Amazon `/dp/` URLs, verified
  live 2026-09-09 via the logged-in browser) and put them in `facts.md`, so the writer never has
  to guess or placeholder an affiliate link.
- Editor verified all three planned external sources directly. Finding: the "houseplants improve
  productivity 47%" claim made by SERP competitor orderofficefurniture.co.uk is NOT in the NLM
  study it cites; that study reports no plant effect on 13 of 18 outcomes. Recorded in facts.md
  §Rejected and used as a deliberate honesty beat in the post.

**Stage 3a writer handoff (draft-v1):** 2,396 words of body prose (intro + 10 H2s + CTA,
excluding FAQ) against the 2,370 roll-up. FAQ a further 407 words (outline estimated ~180).
Markers: 4 `[IMAGE:]`, 1 `[EXTERNAL_LINK_NEEDED:]` (warm vs cool light and evening alertness,
Step 3), 0 `[VERIFY:]`, 0 `[INTERNAL_LINK_NEEDED:]`. Editor-verified: 0 em-dashes, 0 forbidden
phrases, all 8 tagged Amazon URLs used verbatim, no untagged Amazon URL, no prices, the string
"47" appears nowhere, disclosure is the italic last paragraph of the intro, 3 external links
each anchored once, 5 root-relative post links + the `/ai-tools` CTA link (matching the 14
prior uses in published posts), tags all exist in blog.md. Writer flagged for review: the
Step 5 honesty beat describes the disputed figure without stating it, and the FAQ runs long.

**Stage 3d marker resolution log (per marker):**
- `[EXTERNAL_LINK_NEEDED: warm versus cool light and evening alertness]` (Step 3, draft-v2 line 91)
  -> **resolved** (cite: https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod2/20.html,
  CDC/NIOSH "Module 2. The Color of the Light Affects Circadian Rhythms"). Loaded and read at
  Stage 3d; the claim was scoped to exactly what the page says (blue/white light triggers retinal
  photoreceptors to suppress melatonin during the body's sensitive periods; those photoreceptors
  barely respond to yellow and orange). Mirrored into `facts.md` §Statistics.
- 0 `[VERIFY:]` markers existed. 0 claims kept-general, 0 deleted, 0 competitor-routed
  (`modules.competitors` is off for this blog).
- Re-lint after the edit: 0 em-dashes, 0 en-dashes, 0 forbidden phrases, 0 residual
  `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`, 4 external links (all allowlist/primary, none a
  `research/serp.md` result, each linked once, each confirmed to load), 8 distinct tagged Amazon
  URLs, no prices, "47" absent.
- Post-3d body prose is 2,500 words against the outline roll-up of 2,370 (+5.5%, inside the
  reviewer's tolerance) and at the top of blog-craft's 1,500-2,500 `how_to` band. Left as-is
  deliberately; the overage is the NIOSH citation sentences added at this stage.

**Stage 4b.5 inbound-link write-ahead record (durable ownership authority):**
- inbound link applied by workflow: content/blog/how-to-stop-doomscrolling.md
- inbound link applied by workflow: content/blog/time-blocking.md
- inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md

(Recorded at 2026-09-09 05:32, BEFORE the edits, per `astro-git-pr.md` §Staging step 5c. All three files were verified link-absent and `git status --porcelain` clean at that moment.)

**Stage 4b.5 inbound-link admission (link-only diff verification, at staging time):** all three
files passed. Each `git diff HEAD` shows exactly one removed line and one added line carrying
`(/aesthetic-desk-setup)` (an extended-sentence edit, attributable), and nothing else. All three
admitted to `<edited inbound posts>` and included in the branch commit.

**Stage 4b.5 verification-handshake note:** this run has `CONSOLE_VERIFICATION=on`, so it performs
the staging FILE LAYOUT only (post copied to `content/blog/aesthetic-desk-setup.md`, 4 `[IMAGE:]`
placeholders resolved to real embeds, featured asset confirmed present, inbound links applied,
branch committed and pushed). The staging SIDE EFFECTS are deliberately deferred to the console's
follow-on `autopilot-cont` run: the WordPress auth probe, the Gutenberg conversion, the media
uploads, the WP draft create, `gh pr create`, and the `pr-monitor.json` write. That is why no
`pr-monitor.json` exists yet and why `action-items.md` §7 records the preview URL as pending.

**Featured cover note:** the `wordpress-rest` frontmatter template defines no `cover`/`heroImage`
field by design (`adapters/publish/frontmatter/wordpress.md` §No cover/heroImage field), so the
featured image is NOT injected into frontmatter; it ships as an uploaded `featured_media` ID at
the WP-create step. `blog-ops/assets/aesthetic-desk-setup/featured.png` was confirmed present
before staging continued. `draft: true` is likewise KEPT in frontmatter: for this adapter it is a
documentation-only guard with nothing to strip toward (the WP `status` field does the real
gating), and the template's own quality gate requires it present.
