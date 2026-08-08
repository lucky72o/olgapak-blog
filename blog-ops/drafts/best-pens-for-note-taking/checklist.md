---
slug: best-pens-for-note-taking
target_keyword: best pens for note taking
created: 2026-08-08 13:41
last_updated: 2026-08-08 15:40
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: best-pens-for-note-taking

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/best-pens-for-note-taking/brief.md)
- [x] Slug approved by human (autopilot: slug comes verbatim from `blog-ops/content-plan.md` row #9, which the operator queued)
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

Two-phase: cheap search-results capture → editor selects 5–8 (cap 8, no minimum) → deep-fetch only those.

- [x] research/_raw/_serp.json written (Google SERP metadata: top 10 URLs + titles only, no body content)
- [x] research/_raw/_serp_selection.md written (editor's rationale for the 5–8 picks + observed search intent)
- [x] research/_raw/NN-*.json written (7 files: 01 penaddict, 04 wirecutter, 05 jetpens, 06 pilotpen, 07 bastion, 09 gentlemanstationer, 10 smallstuffcounts — all `fetchStatus: ok`, 0 failures)

**Artifacts:** `research/_raw/_serp.json`, `research/_raw/_serp_selection.md`, `research/_raw/NN-*.json` (up to 8 files, no minimum)

MCP note: this stage runs in the parent skill context because Chrome MCP tools do not propagate to subagents. The skill uses a JS blob-download pattern to save page data to disk without pulling content through its own context.

### Stage 1.5a: Reddit research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined Reddit during intake, or if `modules.reddit_research` is false.

- [x] research/_raw/_reddit_search.json written (74 threads — 25 from the contract query + 49 unique from 3 supplementary queries; see `_reddit_selection.md` §Search note and the file's `_merged_note`)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (5 files, chrome transport, combined fetch + split; 0 threads missed)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined X during intake, or if `modules.x_research` is false.

- [x] research/_raw/_x_search.json written (12 posts, `f=live` kept — `f=top` was entirely off-topic)
- [x] research/_raw/_x_selection.md written (2 picks only; X is a weak source for physical stationery — engagement bar deliberately relaxed, rationale in the file)
- [x] research/_raw/x-NN-*.json written (2 files: x-07-beethestalli0n, x-06-JoseMatzkin; both `fetchStatus: ok`, 0 replies captured on either)

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
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause) — 2 dispatches: v1 `request_revisions`, v2 `approve`

**Artifacts:** `facts.md`, `plan.md`

---

## Stage 2: Outline (owner: blog-post-workflow skill / blog-editor role)

Triggered after Stage 1c.5 plan review approves. Editor reads approved `plan.md` + `facts.md` + brand files and drafts `outline.md` per the resolved `outline.md` template. **No human gate**, the editor's editorial judgment closes Stage 2 and the workflow auto-progresses to Stage 3a (drafting). Any structural problem with the outline gets caught later as a Stage 3b reviewer issue, which forces a writer revise pass.

- [x] outline.md drafted (every H2 cites ≥1 fact from facts.md; roll-up 2,980 vs plan target 2,600–3,200)
- [x] outline.md status set to `approved`; checklist `current_stage=draft` (auto-progresses, no human gate)

**Artifacts:** `outline.md`

---

## Stage 3: Writing (owner: blog-writer subagent)

### Stage 3a: Draft (owner: blog-writer subagent)

Editor delegates full-post drafting to the blog-writer subagent. Writer reads outline + facts + brief + research + brand/*, produces one draft-vN.md per run. No MCP, on-disk work only.

- [x] draft-v1.md generated by blog-writer (frontmatter per the publish adapter's frontmatter template + 4-paragraph intro + body H2s per outline + FAQ + outro)
- [x] draft word count within ±10% of outline roll-up target (2,778 body prose vs 2,980 roll-up, 7% under; inside the 2,600–3,200 plan target)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` on iteration 2 (0 critical, 0 major, 6 minor)
- [x] Prior-iteration reviews archived as review-v1.md

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED (19 markers byte-identical, 20 URLs identical, 20 headings in order, frontmatter untouched)
- [x] Forbidden-phrase count: 0 (0 before, 0 after)
- [x] Word count delta within -20% to 0% (3822 to 3818, -0.1%)

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

- [x] images.md written, 4 in-post entries = 4 draft placeholders, + 1 featured
- [x] Each entry has production spec populated matching its type (featured ai-prompt per config + custom-instructions; 1 remotion diagram with composition ID InkFamiliesTradeoff; 3 ai-prompt scenes)

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0/0/0/4)
- [x] Authors-map status: N/A for the wordpress-rest adapter (no author map to reconcile) (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-08-08 14:12
- Plan review verdict (iteration 1): request_revisions, length target too tight for 11 picks + 3 char-count corrections, 2026-08-08 14:16
- Plan review verdict (iteration 2): approve, all 3 revisions verified applied, 2026-08-08 14:20

## Stage transition log

<append one line per stage transition>

- intake completed: 2026-08-08 13:41 (autopilot, no human Q&A — brief written from content-plan row #9)
- SERP fetch completed: 2026-08-08 13:47, 7 selected, 0 failed (intent observed: commercial/transactional)
- Stage 1.5a Reddit completed: 2026-08-08 13:50, 5 threads selected, 0 failed (chrome transport)
- Stage 1.5b X completed: 2026-08-08 13:56, 2 posts selected, 0 failed (low-yield source — see `_x_selection.md`)
- Stage 1.5c competitor freshness re-check: SKIPPED (`modules.competitors: false`)
- Stage 1b started: 2026-08-08 13:57, sources=serp,reddit,x
- Stage 1b completed: 2026-08-08 14:04, serp.md + reddit.md + x.md written (researcher flagged: Muji anchor brand has weak support across all sources)
- synthesize_plan completed: 2026-08-08 14:12, plan_review opened: 2026-08-08 14:12
- Stage 1c.5 completed: 2026-08-08 14:20, plan approved, proceeding to Stage 2 (outline)
- outline completed: 2026-08-08 14:26, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-08-08 14:26
- Stage 3a completed: 2026-08-08 14:33, word count 2,778 body prose, draft-v1.md written
- Stage 3b review iteration 1 started: 2026-08-08 14:33 (pre-review length check PASSED: 2,778 vs 3,426 ceiling, reviewer dispatched normally)
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 2 major, 10 minor), 2026-08-08 14:45; review archived as review-v1.md
- Stage 3b revise iteration 2 started: 2026-08-08 14:45
- draft-v2.md written: 2026-08-08 14:48, 2,838 body-prose words (-4.8% vs roll-up), all 8 §9 fixes applied, marker counts unchanged (3/12/0/4), 0 em-dashes
- Stage 3b review iteration 2 started: 2026-08-08 14:48
- Stage 3b review iteration 2 verdict: approve, 2026-08-08 14:55 (all 8 fixes verified landed, diff shows exactly 8 hunks, 0 collateral edits)
- Stage 3c started: 2026-08-08 14:55
- Stage 3c completed: 2026-08-08 15:00, preservation PASSED, 1 passive-to-active conversion, 4 paragraph-initial "So" varied, 0 burstiness injections needed
- Stage 3d started: 2026-08-08 15:00, 15 markers to resolve (11 product links + Sakura source + 3 Muji VERIFY)
- Stage 4a completed: 2026-08-08 15:30, 5 images (1 featured + 4 in-post), types: 1 remotion + 4 ai-prompt, 0 screenshot
- Stage 4a.5 started: 2026-08-08 15:30
- Stage 4a.5 completed: 2026-08-08 15:35, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed. Featured slot is file-producing (ai-prompt) and featured.png exists, so the featured-slot completion gate passes.
- Stage 4b started: 2026-08-08 15:35
- Stage 4b completed: 2026-08-08 15:40, action-items.md written, 0 residual VERIFY/EXTERNAL/INTERNAL markers, 4 IMAGE placeholders to resolve at staging
- Stage 4b.5 staging started: 2026-08-08 15:40
- Stage 3d completed: 2026-08-08 15:20, resolved 14, kept-general 0, deleted 1, competitor-routed 0 (module off). Residual [VERIFY:]/[EXTERNAL_LINK_NEEDED:] = 0; 4 [IMAGE:] remain by design.

## Notes

- **Gate 2 mode: console-gated** (resolved at Step 0). `git remote`/`gh repo view` both succeed, but `CONSOLE_RUN_STATE` is set, so per `references/console-contract.md` §Gate 2 under the console the run never starts a CronCreate PR monitor and never blocks on typed input; approval is the console-written `approval.json`.
- `CONSOLE_VERIFICATION=on` — the fresh run stages FILE LAYOUT only (commit + push the branch) and emits `ready_for_verification`; the PR-open / WP-draft-create side effect is deferred to `autopilot-cont`.
- **Stage 3a writer handoff:** 2,778 body-prose words (FAQ 349, ungated). Markers: 12 `[EXTERNAL_LINK_NEEDED:]` (11 product links + the load-bearing Sakura archival source), 3 `[VERIFY:]` (all inside the conditional Muji H3), 4 `[IMAGE:]`, 0 `[INTERNAL_LINK_NEEDED:]`. Zero em-dashes, zero forbidden phrases, zero prices, zero links to the 7 forbidden SERP URLs. Writer's flagged decisions: (a) the 11 product-link markers sit in the H3s, NOT also in the §H2 1 table (22 markers would have made the table unreadable) — apply each resolved URL to the table row at Stage 3d if the shortlist should be clickable; (b) the marker text uses commas where the spawn prompt used em-dashes, to keep the zero-em-dash rule; (c) the writer DROPPED the `.gov` check-washing link (the post never makes a permanent-ink point) and the Mueller & Oppenheimer link (it would have required the forbidden handwriting-beats-typing framing) — 5 unique external URLs remain, 4 Reddit threads + `http://uniball.com.au/uni-super-ink/`, which is HTTP and needs confirming at Stage 3d; (d) §H3 3.9 Sakura runs ~155 words (carries both the archival case and the tip-wear rebuttal), §H3 3.10 Muji runs ~70 deliberately unpadded; (e) Pen Addict and Wirecutter are named in prose without links in §3.2/§3.3/§3.4/§3.8, which `facts.md` permits.
- **Stage 3b carry-forwards for Stage 3d (from review.md §10, "what Stage 3d must not break"):** keep em-dashes at 0; every `[VERIFY:]` must resolve to prose or a clean cut (never stay as a marker); product links ship UNTAGGED (`/dp/<ASIN>` with no affiliate tag); the Sakura archival/craft-work link is load-bearing for the post's sharpest claim; no prices; no links to the 7 forbidden SERP domains; internal links stay root-relative with no trailing slash; marker counts must end at 0 `[VERIFY:]` / 0 `[EXTERNAL_LINK_NEEDED:]` / 0 `[INTERNAL_LINK_NEEDED:]` / 4 `[IMAGE:]`.
- **Three open Stage 3d judgement calls flagged by the reviewer:** (a) the Muji sentence asserts "nothing printed down the barrel" / no frequent restyling, checkable design claims to confirm on the same Muji product-page visit; (b) `http://uniball.com.au/uni-super-ink/` is HTTP, confirm it resolves and prefer HTTPS; (c) 6 unique non-product external URLs against a 3-5 budget, decide which to drop (candidate: a duplicate Reddit link).
- **Muji cut path is 5 places after fix I-1** (was 6): title, excerpt, intro preview, §H2 3 heading, §H2 1 table row. Cutting the H3 also removes all 3 `[VERIFY:]` and 1 product `[EXTERNAL_LINK_NEEDED:]`, which legitimately changes the Phase 4 action-item counts.
- **Stage 3d per-marker outcome log (flows to action-items §2/§3):**
  - `[VERIFY:]` Muji uses gel ink -> **resolved** (cite: https://www.muji.us/products/gel-ink-cap-type-ballpoint-pen-set-10-pieces-set-9a63)
  - `[VERIFY:]` Muji tip sizes -> **resolved**, confirmed down to 0.3 mm (cite: same Muji product line, 0.3 mm knock pens listed)
  - `[VERIFY:]` Muji sells refills separately -> **resolved** (cite: https://www.muji.us/products/gel-ink-ballpoint-pen-0-5mm-refill-8a63)
  - `[EXTERNAL_LINK_NEEDED:]` Sakura archival/craft-work source -> **resolved with a scope correction** (cite: https://www.sakuraofamerica.com/product/pigma-micron/). Sakura's own page lists archival journals and record keeping ALONGSIDE illustration, so the planned "made for drawing and craft work" anchor was an overclaim; the prose now cites what the page actually says and the tip-wear caveat rests solely on the Reddit evidence.
  - `[EXTERNAL_LINK_NEEDED:]` x11 product links -> **resolved**: 10 clean untagged `https://www.amazon.com/dp/<ASIN>` URLs + Muji's own product page. All 12 added URLs verified HTTP 200 (two Amazon ASINs return 405 to HEAD, 200 to GET — anti-bot behaviour, not dead links). Zero `tag=` parameters anywhere in the draft.
  - Uni-ball "Super Ink resists fading and forgery" -> **deleted claim**: "Uni-ball says the ink is formulated to resist fading and forgery, which is a nice side effect for anything you sign." The planned `uniball.com.au` URL 301s to a bare video-post page that does not contain the claim, and no uniball.com page carries it. Replaced with a defensible general clause about the hybrid ink.
- **CONDITIONAL PICK RESOLVED: Muji survives, the post stays at 11.** The 5-place 11-to-10 sweep was NOT needed; title, excerpt, intro preview, §H2 3 heading and the §H2 1 table all still correctly say 11 and there are 11 H3s.
- **Signo DX naming handled in prose:** no dependable genuine US Amazon listing exists for the UM-151 Signo DX; the draft links the US-market equivalent (uniball 207 0.38 mm Ultra Micro Point) and tells readers plainly to buy on tip size rather than the DX name.
- **External-link count: 6 unique non-product URLs** (5 Reddit threads + Sakura) against `blog-craft.md`'s 3-5 guidance. Kept deliberately: each Reddit URL is the attribution for a distinct verbatim quote, and cutting one would strip an attribution rather than a decorative link. The reviewer had already flagged this as a Stage 3d judgement call.
- **INBOUND-LINK WRITE-AHEAD RECORD (Stage 4b.5, workflow-applied — consult this on any resume before re-inserting):** the workflow is applying its own inbound-link edit to these three files. Present-and-recorded here = the workflow's prior edit, skip re-inserting. Present-and-NOT-recorded = operator-authored, exclude from the commit and flag as an action item.
  - `content/blog/best-notebooks-for-note-taking.md` -> anchor "the best pens for note taking" -> `/best-pens-for-note-taking`
  - `content/blog/cornell-note-taking-method.md` -> anchor "the right pen for note taking" -> `/best-pens-for-note-taking`
  - `content/blog/note-taking-methods.md` -> anchor "which pens work best for note taking" -> `/best-pens-for-note-taking`
  Pre-edit state verified 2026-08-08 15:45: all three files clean in git and containing zero occurrences of `best-pens-for-note-taking`.
- Competitors module is OFF in config, so Stage 1.5c is skipped by its own guard and brief.md carries no competitor table.
