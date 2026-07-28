---
slug: how-to-plan-your-week
target_keyword: how to plan your week
created: 2026-07-22 18:19
last_updated: 2026-07-23 11:05
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: how-to-plan-your-week

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/how-to-plan-your-week/brief.md)
- [x] Slug approved by human (autopilot: slug comes verbatim from `blog-ops/content-plan.md` row 3, which the operator authored — no separate approval step exists headlessly)
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

Two-phase: cheap search-results capture → editor selects 5–8 (cap 8, no minimum) → deep-fetch only those.

- [x] research/_raw/_serp.json written (Google SERP metadata: 8 URLs + titles, no body content; SERP feature: `people_also_ask`)
- [x] research/_raw/_serp_selection.md written (7 of 8 selected; observed intent = informational/how-to, numbered-steps SERP shape)
- [x] research/_raw/NN-*.json written (6 successful deep fetches: 02, 03, 04, 05, 06, 07; **08-wikihow-com.json is a failure JSON** — ERR_TIMED_OUT after 2 attempts, 14% failure rate, under the 50% abort threshold)

**Artifacts:** `research/_raw/_serp.json`, `research/_raw/_serp_selection.md`, `research/_raw/NN-*.json` (up to 8 files, no minimum)

MCP note: this stage runs in the parent skill context because Chrome MCP tools do not propagate to subagents. The skill uses a JS blob-download pattern to save page data to disk without pulling content through its own context.

### Stage 1.5a: Reddit research (OPTIONAL, owner: blog-post-workflow skill)

Enabled: brief.md "Research sources enabled, reddit: yes" + `modules.reddit_research: true`. Transport: `chrome` (primary).

- [x] research/_raw/_reddit_search.json written (87 unique threads, deduped across 4 query variants — the literal target keyword returned 0 on-topic results and was replaced; see `_reddit_selection.md` §Search note)
- [x] research/_raw/_reddit_selection.md written (5 of 87 selected, with the skip rationale)
- [x] research/_raw/reddit-NN-*.json written (5 of 5 fetched, 0 failed: 10–14 top-level comments each)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Enabled: brief.md "Research sources enabled, x: yes" + `modules.x_research: true`.

- [x] research/_raw/_x_search.json written (24 posts, merged + deduped from 2 usable tabs; a 3rd capture was discarded as all-promo — see `_x_selection.md` §Search note)
- [x] research/_raw/_x_selection.md written (4 selected of 24; a 5th pick was dropped mid-fetch on discovering it was a product ad)
- [x] research/_raw/x-NN-*.json written (4 files; 3 carry 8–11 replies, `x-03-CryptoMaliel.json` carries the body with an empty reply list, documented in-file)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check (owner: blog-post-workflow skill, MANDATORY when `modules.competitors` is enabled AND brief.md "Competitors to mention" is non-empty)

**SKIPPED** — `modules.competitors: false` in `blog-ops/config.yaml`. The stage is never entered; `brief.md` has no "Competitors to mention" table.

- [x] n/a — competitors module off

**Artifacts:** none

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + optionally Reddit + optionally X + optionally competitors) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (only if Stage 1.5b ran)
- [x] research/competitors.md — n/a (Stage 1.5c skipped, competitors module off)
- [x] product reference loaded (editor reads `blog-ops/profile/product.md` directly; `modules.product: true`)

**Artifacts:** `research/serp.md`, `research/reddit.md`, `research/x.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause) — verdict approve, 2026-07-23

**Artifacts:** `facts.md`, `plan.md`

---

## Stage 2: Outline (owner: blog-post-workflow skill / blog-editor role)

Triggered after Stage 1c.5 plan review approves. Editor reads approved `plan.md` + `facts.md` + brand files and drafts `outline.md` per the resolved `outline.md` template. **No human gate**, the editor's editorial judgment closes Stage 2 and the workflow auto-progresses to Stage 3a (drafting). Any structural problem with the outline gets caught later as a Stage 3b reviewer issue, which forces a writer revise pass.

- [x] outline.md drafted (every H2 cites ≥1 fact from facts.md; word count roll-up ~2,320, within plan target)
- [x] outline.md status set to `approved`; checklist `current_stage=draft` (auto-progresses, no human gate)

**Artifacts:** `outline.md`

---

## Stage 3: Writing (owner: blog-writer subagent)

### Stage 3a: Draft (owner: blog-writer subagent)

Editor delegates full-post drafting to the blog-writer subagent. Writer reads outline + facts + brief + research + brand/*, produces one draft-vN.md per run. No MCP, on-disk work only.

- [x] draft-v1.md generated by blog-writer (frontmatter per the publish adapter's frontmatter template + 4-paragraph intro + body H2s per outline + FAQ + outro)
- [x] draft word count within ±10% of outline roll-up target (2,438 body words vs ~2,320 target, +5%)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 1; 0 critical, 0 major, 3 minor nits)
- [x] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran) — n/a, approved on iteration 1

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED (0 deltas on facts/quotes/links/markers/headings/frontmatter)
- [x] Forbidden-phrase count: 0
- [x] Word count delta within -20% to 0% (2495 → 2495, 0%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` (0 VERIFY, 1 EXTERNAL_LINK_NEEDED)
- [x] each marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted — 1 resolved (Parkinson's Law → Britannica)
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200 (HBR + Britannica both browser/WebFetch-verified live)
- [x] facts.md updated to mirror resolutions (HBR → verified; Parkinson's Law added, verified)
- [x] re-lint passed (0 em-dashes, 0 en-dashes, no forbidden phrases, 0 residual markers)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured (2 in-post = 2 placeholders)
- [x] Each entry has production spec populated matching its type (no unfilled placeholders)
- [x] Featured slot `Type: ai-prompt` (per `images.featured_default` + `custom-instructions.md` §Image style)

**Artifacts:** `images.md`

## Stage 4a.5: Generate images (owner: image-builder subagent)

- [x] file-producing slots (`remotion`, `ai-prompt`) rendered into `blog-ops/assets/how-to-plan-your-week/` (featured.png, week-grid-timeboxing.png, midweek-reset-scene.png — 0 failed; editor visually spot-checked featured hero + remotion diagram, both clean)
- [x] `.staged-by-blog-workflow` sentinel present in the asset dir
- [x] featured file present on disk before advancing (featured.png, ai-prompt — completion gate passed)

**Artifacts:** `blog-ops/assets/how-to-plan-your-week/*`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0 VERIFY, 0 EXTERNAL_LINK_NEEDED, 0 INTERNAL_LINK_NEEDED, 2 IMAGE)
- [x] Authors-map status: n/a (`publish.adapter: wordpress-rest`; `authors_map_check` is astro-only) — §6 written as N/A

**Artifacts:** `action-items.md`

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Editor presents Gate 2 banner (the only human gate; plan approval is an automated Stage 1c.5 review). **Console-gated this run** (`CONSOLE_RUN_STATE` set): no CronCreate monitor, no blocking on typed input; approval is the operator's browser Approve action writing `approval.json`.

- [ ] Gate 2 presented (console)
- [ ] Human approved (`approval.json` present)
- [ ] post staged to `content/blog/how-to-plan-your-week.md` + WordPress draft created
- [ ] asset folder created at `blog-ops/assets/how-to-plan-your-week/` (with images.md as README.md)
- [ ] `blog-ops/drafts/how-to-plan-your-week/` archived to `blog-ops/drafts/_archive/how-to-plan-your-week/`

**End state:** `status=complete`, `current_stage=complete`. Post lives in `content/blog/` + as a WordPress **draft**; the human works through archived `action-items.md`, sets the Rank Math focus keyword, and clicks Publish in wp-admin.

---

## Stage 5: Repurpose (owner: repurpose-blog-post skill)

**SKIPPED** — `modules.repurpose: false` in `blog-ops/config.yaml`.

---

## Gate log

<append one line per gate decision>

## Stage transition log

- intake started: 2026-07-22T18:19:50Z (owner: blog-post-workflow, autopilot file-intake from content-plan.md row 3)
- intake completed: 2026-07-22T18:19:50Z
- Stage 1a (SERP fetch) started: 2026-07-22T18:22:00Z
- Stage 1a completed: 2026-07-22T18:28:00Z, 7 selected, 1 failed (wikihow ERR_TIMED_OUT)
- Stage 1.5a (Reddit) started: 2026-07-22T18:29:00Z
- Stage 1.5a completed: 2026-07-22T18:35:00Z, 5 threads selected, 5 fetched, 0 failed (chrome transport, primary)
- Stage 1.5b (X) started: 2026-07-22T18:36:00Z
- Stage 1.5b completed: 2026-07-22T18:45:00Z, 4 posts fetched (1 selection dropped as advertising)
- Stage 1.5c: SKIPPED (competitors module off)
- Stage 1b (research analysis) started: 2026-07-22T18:45:00Z (owner: blog-researcher)
- Run resumed (new autopilot session): 2026-07-23T10:10:11Z, re-dispatching blog-researcher (sources=serp,reddit,x)
- Stage 1b (research analysis) completed: 2026-07-23T10:17:37Z, serp.md + reddit.md + x.md written (researcher cut off by API error mid-run, resumed via SendMessage to finish reddit/x)
- Stage 1c (plan synthesis) completed: 2026-07-23T10:20:00Z, facts.md + plan.md written; plan_review opened
- Stage 1c.5 (plan review) completed: 2026-07-23T10:22:00Z, verdict=approve (4 minor non-blocking notes logged); plan approved, advancing to outline
- Stage 2 (outline) completed: 2026-07-23T10:28:00Z, outline.md approved (no human gate); auto-progressing to Stage 3a draft
- Stage 3a (draft) started: 2026-07-23T10:28:00Z (owner: blog-writer)
- Stage 3a (draft) completed: 2026-07-23T10:33:00Z, draft-v1.md written, 2,438 body words. Markers: 0 VERIFY, 1 EXTERNAL_LINK_NEEDED (Parkinson's Law origin), 0 INTERNAL_LINK_NEEDED, 2 IMAGE (remotion week-grid §3, ai-prompt midweek-reset §4). 5 internal links (first body link internal), 1 external (HBR). Floor checks clean (0 em-dashes, no forbidden phrases, first person). Product: single soft Email Generator mention (§7) + CTA, both link /ai-tools. Keyword 4x. FAQ JSON-LD intentionally not in frontmatter (WP-plugin concern per adapter template).
- Stage 3b (review iteration 1) started: 2026-07-23T10:33:00Z (owner: blog-reviewer)
- Stage 3b (review iteration 1) completed: 2026-07-23T10:40:00Z, verdict=APPROVE (0 critical, 0 major, 3 minor). Minor nit 1 (Tara quote span) fixed pre-humanize via ellipsis. Nit 2 (only 1 external link) → Stage 3d resolves the Parkinson's Law [EXTERNAL_LINK_NEEDED:] into a 2nd allowlist link. Nit 3 (word count within target) no action.
- Stage 3c (humanize) started: 2026-07-23T10:40:00Z (owner: blog-humanizer)
- Stage 3c (humanize) completed: 2026-07-23T10:44:00Z, preservation PASSED, 0 deltas; light polish only (varied 3x repeated "r/productivity commenter" lead-in, trimmed 2 "genuinely"). Word count 2495→2495.
- Stage 3d (marker auto-resolution) started: 2026-07-23T10:44:00Z (owner: blog-post-workflow, main session)
- Stage 3d completed: 2026-07-23T10:50:00Z, resolved 1, kept-general 0, deleted 0, competitor-routed 0. Re-lint clean.

### Stage 3d per-marker outcome log (→ action-items §2/§3)
- [EXTERNAL_LINK_NEEDED: Parkinson's Law] → RESOLVED (cite: https://www.britannica.com/topic/Parkinsons-Law-or-The-Pursuit-of-Progress, authoritative_allowlist; browser-verified the page renders the dictum + attribution). Anchor "Parkinson's Law" in §3 Step 3.
- (already-placed external) HBR "Manage Your Energy, Not Your Time" → VERIFIED live (WebFetch), https://hbr.org/2007/10/manage-your-energy-not-your-time, §1.
- VoucherCloud "2h53m" optional stat: NOT USED (writer omitted; old/UK/coupon-site — dropped as planned). No marker in draft.
- Stage 4a (image plan) started: 2026-07-23T10:50:00Z (owner: image-planner)
- Stage 4a (image plan) completed: 2026-07-23T10:52:00Z, images.md written — 3 images (featured ai-prompt=featured.png; in-post remotion WeekGridTimeboxing=week-grid-timeboxing.png §3; in-post ai-prompt=midweek-reset-scene.png §4). featured-log.md rotation ledger created (first row). in_post=2 matches [IMAGE:] count.
- Stage 4a.5 (generate images) started: 2026-07-23T10:52:00Z (owner: image-builder). Expected file-producing: featured.png, week-grid-timeboxing.png, midweek-reset-scene.png.
- Stage 4a.5 completed: 2026-07-23T11:00:00Z, 3 rendered / 0 prompt-pending / 0 screenshot-pending / 0 failed. New Remotion source tools/remotion/src/WeekGridTimeboxing.tsx + Root.tsx registration (travel with the PR at staging). featured completion gate passed.
- Stage 4b (action items compile) started: 2026-07-23T11:00:00Z (owner: blog-post-workflow)
- Stage 4b completed: 2026-07-23T11:05:00Z, action-items.md written (10 sections). Markers: 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 2 IMAGE. §4b: 3 inbound targets, all WP-only (no repo copies) → hand-apply-to-live-WP (post is draft, apply_inbound_links_live only fires when published). §7 Rank Math focus keyword = "how to plan your week" (manual, not REST-settable).
- Stage 4b.5 (staging) started: 2026-07-23T11:05:00Z (owner: blog-post-workflow). Gate 2 mode = PR (recorded Step 0), but CONSOLE_VERIFICATION=on → FILE LAYOUT only (commit+push), NO side effects (no WP draft, no PR, no pr-monitor.json); emit ready_for_verification and exit.
- Stage 4b.5 FILE LAYOUT completed: 2026-07-23T11:12:00Z. content/blog/how-to-plan-your-week.md staged (draft: stripped, no cover field per WP frontmatter contract, 2 [IMAGE:] → embeds pointing to existing asset files, 0 residual markers). Inbound links: none applied (all 3 targets WP-only, no repo copies). Committed on branch blog/how-to-plan-your-week + pushed: canonical post + 3 asset PNGs (sentinel excluded) + _archive snapshot + featured-log.md + Remotion sources (WeekGridTimeboxing.tsx, Root.tsx). SIDE EFFECTS DEFERRED to autopilot-cont: WP-draft-create, PR-open, pr-monitor.json. current_stage stays `preview` for autopilot-cont resume at Step 14.5. Emitting ready_for_verification.

## Notes

**Run mode:** autopilot (headless, operator console). `CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on` — this run performs staging FILE LAYOUT (including the worktree commit + push) but NOT the staging side effects (no PR open, no WordPress draft create, no `pr-monitor.json`); it emits `ready_for_verification` and exits. The console verifies, then spawns `autopilot-cont` for the side effects.

**Gate 2 mode:** the Step 0 derivation resolves to the **PR path** (`git remote get-url origin` → `https://github.com/lucky72o/olgapak-blog.git`, and `gh repo view` succeeds). Under the console, Gate 2 itself is **console-gated**: no CronCreate PR monitor is started by this run, and approval is the durable `approval.json` the operator's browser Approve action writes.

**Worktree:** this run already executes inside `.worktrees/blog-how-to-plan-your-week` on branch `blog/how-to-plan-your-week` (the console set the cwd). All repo-relative paths resolve here.

**Config-derived paths:** `{ops_dir}`=`blog-ops`, `{profile_dir}`=`blog-ops/profile`, `{drafts_dir}`=`blog-ops/drafts`, `{content_dir}`=`content/blog`, `{assets_dir}`=`blog-ops/assets`, `{remotion_dir}`=`tools/remotion`, `{route_prefix}`=`/`, `{templates}`→ plugin defaults (no `blog-ops/templates/` override dir exists).

**Modules:** reddit_research on, x_research on, product on, competitors OFF, repurpose OFF.
