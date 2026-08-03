---
slug: digital-detox-plan
target_keyword: digital detox plan
created: 2026-08-03 09:54
last_updated: 2026-08-03 13:30
current_stage: finalize
current_owner: human
status: active
gate_pending: gate_2_final
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: digital-detox-plan

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/digital-detox-plan/brief.md)
- [x] Slug approved by human — N/A, autopilot run: slug taken verbatim from `blog-ops/content-plan.md` row 8
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

Enabled — `modules.reddit_research: true` and brief.md "Research sources enabled" says reddit: yes.

- [x] research/_raw/_reddit_search.json written (Reddit search results metadata: ~20 threads, no thread bodies)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Enabled — `modules.x_research: true` and brief.md "Research sources enabled" says x: yes.

- [x] research/_raw/_x_search.json written (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json written (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check

**SKIPPED — `modules.competitors: false` for this blog.** No competitor profiles exist, brief.md has no
"Competitors to mention" table, and the stage's own guard (module off OR empty table → skip) applies.

**Artifacts:** none

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + Reddit + X) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (Stage 1.5a ran)
- [x] research/x.md complete (Stage 1.5b ran)
- [x] research/competitors.md — N/A (competitors module off)
- [x] product reference loaded (editor reads `blog-ops/profile/product.md` directly; `modules.product: true`)

**Artifacts:** `research/serp.md`, `research/reddit.md`, `research/x.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause) — verdict `approve`, iteration 1

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
- [x] draft word count within ±10% of outline roll-up target (2,179 body prose vs 2,150 target, +1.4%)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 2 of max 3)
- [x] Prior-iteration reviews archived as review-v<N>.md (review-v1.md)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (or surviving hits flagged to human with line numbers)
- [x] Word count delta within -20% to 0% (2,731 -> 2,729 total, -0.07%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` — zero of each present
- [x] each marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, 4 in-post entries matching 4 draft placeholders + 1 featured
- [x] Each entry has production spec populated matching its type

**Artifacts:** `images.md`

## Stage 4a.5: Generate images (owner: image-builder subagent)

File-producing slots only (`remotion`, `ai-prompt` via codex). `screenshot` slots stay manual.

- [x] image-builder spawned; asset dir `blog-ops/assets/digital-detox-plan/` owned via `.staged-by-blog-workflow` sentinel
- [x] every expected file-producing filename present on disk (5/5)
- [x] featured-slot completion gate passed (featured.png exists; slot is ai-prompt, file-producing)

**Artifacts:** `blog-ops/assets/digital-detox-plan/*`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0/0/0 markers, 4 [IMAGE:])
- [x] Authors-map status confirmed per the publish adapter (N/A for `wordpress-rest`)

**Artifacts:** `action-items.md`

## Stage 4b.5: Stage the post (owner: blog-post-workflow skill, adapter-dispatched)

- [x] post staged to `content/blog/digital-detox-plan.md` with `[IMAGE:]` placeholders resolved + cover set
- [x] inbound internal links applied to existing posts (1 of 3 in-repo; 2 are WordPress-only posts, hand-apply items)
- [x] staging file layout committed + pushed on `blog/digital-detox-plan` (212ab69)
- [x] WordPress auth probe passed (once, no retries) — `GET /users/me` → id 1, `wpx_admin101`
- [x] markdown converted to native Gutenberg blocks with the Kadence TOC block (`digital-detox-plan.html`)
- [x] 5 media uploaded to WordPress (ids 2147–2151), in-post embeds repointed to their `source_url`s
- [x] WordPress draft created — post **2152**, `status: draft`, category Productivity (12), tags 15/34/32, `featured_media` 2147
- [x] review PR opened — [#14](https://github.com/lucky72o/olgapak-blog/pull/14)
- [x] `pr-monitor.json` written (`mode: pr`, `status: open`, `wp_upload: ok`)

**Artifacts:** `content/blog/digital-detox-plan.md`, `digital-detox-plan.html`, `pr-monitor.json`, worktree branch commit, PR #14, WP draft 2152

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Console-gated (autopilot): approval is the console operator's browser Approve action, which writes `approval.json`. The run never blocks on typed input and never publishes.

- [ ] Gate 2 presented (console dashboard)
- [ ] Operator approved (`approval.json` present)
- [ ] post published per the adapter (human wp-admin action; never the workflow)
- [ ] asset folder created at `blog-ops/assets/digital-detox-plan/` (with images.md as README.md)
- [ ] `blog-ops/drafts/digital-detox-plan/` archived to `blog-ops/drafts/_archive/digital-detox-plan/`

**End state:** `status=complete`, `current_stage=complete`.

---

## Stage 5: Repurpose

**SKIPPED — `modules.repurpose: false` for this blog.**

---

## Gate log

- Plan review opened: 2026-08-03 10:30
- Plan review verdict: approve, iteration 1, 3 non-blocking notes (slip-section grounding, keep Day 1-7 actions our own, category mapping still "human to confirm"), 2026-08-03 10:35

## Stage transition log

- intake completed: 2026-08-03 09:54 (owner: blog-post-workflow, autopilot file-intake from content-plan.md row 8)
- SERP fetch completed: 2026-08-03 10:00, 7 selected, 0 failed (Chrome MCP: open-claude-in-chrome)
- Reddit fetch completed: 2026-08-03 10:05, 5 selected, 0 failed (chrome transport, combined fetch + split)
- X fetch completed: 2026-08-03 10:15, 4 selected, 0 failed; reply threads did NOT render (see _x_selection.md) so all four files are post-text only
- Stage 1b started: 2026-08-03 10:15, sources=serp,reddit,x (owner: blog-researcher)
- Stage 1b completed: 2026-08-03 10:25, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-08-03 10:30, plan_review opened: 2026-08-03 10:30
- plan_review completed: 2026-08-03 10:35, verdict approve
- outline completed: 2026-08-03 10:40, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-08-03 10:40 (owner: blog-writer)
- Stage 3a completed: 2026-08-03 10:50, word count 2,179 body prose (+FAQ 309), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-08-03 10:50
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 2 major, 9 minor), 2026-08-03 11:00
- Stage 3b revise iteration 2 started: 2026-08-03 11:00 (owner: blog-writer)
- draft-v2.md written: 2026-08-03 11:10, 2,204 body prose (+2.5% vs target), required fixes 1-6 + optional 7-10 applied
- Stage 3b review iteration 2 started: 2026-08-03 11:10
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 3 minor), 2026-08-03 11:20
- Editor applied reviewer minor #1 inline to draft-v2 (68-student study scope wording), 2026-08-03 11:20
- Stage 3c started: 2026-08-03 11:20 (owner: blog-humanizer)
- Stage 3c completed: 2026-08-03 11:30, preservation PASSED, 3 passive-to-active conversions, word delta -0.07%
- Stage 3d completed: 2026-08-03 11:35, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (zero markers in draft); 1 sourced claim corrected on verification
- Stage 4a started: 2026-08-03 11:35 (owner: image-planner)
- Stage 4a completed: 2026-08-03 11:45, 5 images (1 featured ai-prompt + 1 remotion diagram + 3 ai-prompt scenes)
- Stage 4a.5 started: 2026-08-03 11:45 (owner: image-builder)
- Stage 4a.5 completed: 2026-08-03 12:05, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed; editor sent one composition fix back (ramp diagram filled only the lower half of the canvas) and the re-render was verified
- Stage 4b started: 2026-08-03 12:05
- Stage 4b completed: 2026-08-03 12:15, 0 marker TODOs; the only human to-dos are the Rank Math focus keyword and 2 wp-admin inbound links
- Stage 4b.5 staging started: 2026-08-03 12:15
- Stage 4b.5 file layout completed: 2026-08-03 12:25, commit 212ab69 pushed to origin/blog/digital-detox-plan; 4 [IMAGE:] placeholders resolved to embeds (all 4 files exist on disk), slug collision check against origin/main clear
- Stage 4b.5 SIDE EFFECTS DEFERRED (CONSOLE_VERIFICATION=on): no PR opened, no WordPress draft created, no pr-monitor.json written. autopilot-cont performs these after the console verifies this branch.
- ready_for_verification emitted: 2026-08-03 12:25 (terminal event for this run)
- Console verification PASSED (`verification-result.json`: `{"ok":true}`); console spawned `autopilot-cont`.
- Stage 4b.5 SIDE EFFECTS completed (autopilot-cont): 2026-08-03 13:30 — auth probe OK, Gutenberg conversion (60 paragraph / 20 heading / 26 list / 4 image blocks + Kadence TOC), 5 media uploaded (2147–2151), WP draft **2152** created as `draft`, PR **#14** opened, `pr-monitor.json` written.
- pr_opened emitted: 2026-08-03 13:30 (PR #14). Gate 2 now open, awaiting the console operator's Approve.

## Notes

- Autopilot run under the operator console (`CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`).
  Gate 2 mode: **console-gated** (per `references/console-contract.md` §Gate 2 under the console).
  Staging side effects (WP draft create, `pr-monitor.json`) are deferred to `autopilot-cont`.
- Every intake judgment call is recorded in `brief.md` §Autopilot assumptions.
- **Live inbound-link pass is pending, not skipped.** `publish.wordpress.apply_inbound_links_live: true`,
  but the adapter's §On Gate 2 approval step 2 runs it only once THIS post's WP status is `publish` —
  correctly so: pointing live posts at `/digital-detox-plan` while it is still a draft would send
  readers to a 404. All 3 planned rows (the 1 in-repo + the 2 WP-only legacy posts) get applied
  automatically at finalize, after the human clicks Publish. Nothing here is a hand-apply item.
- The stale `wp-auth-failed.json` marker in the console state dir (2026-07-30, HTTP 401) is NOT current:
  this run's probe succeeded. `WP_APP_PASSWORD` is absent from the console-spawned run environment
  (it is exported in `~/.zshrc`, which a non-login shell does not read) and had to be sourced from a
  login shell. Worth fixing in the console spawn env so the probe doesn't depend on that.
- Cluster note: `how-to-reduce-screen-time` is the planned pillar for this cluster and is not
  written yet; this post stays plan-shaped so the two don't cannibalize each other.

### Stage 3a writer handoff (draft-v1)

- 2,179 body-prose words (excl. frontmatter, `[IMAGE:]` text, FAQ) vs 2,150 target, +1.4%. FAQ 309 words.
- Markers: 4 `[IMAGE:]` (1 remotion ramp diagram + 3 ai-prompt, exactly per outline); 0 `[VERIFY:]`,
  0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- Floor checks at write time: 0 em-dashes, 0 forbidden phrases, 0 links to the banned competitor
  domains, no prices. 5 internal links (root-relative, no trailing slash), first body link internal.
  5 distinct external URLs, all allowlist-class. Keyword 4x in body plus title.
- **Writer's judgment call:** the outline put the 37.1% stat and its PMC link in intro P1, which
  collided with the "first body link must be internal" rule. The writer moved the stat and link into
  H2 1 and left the intro hook number-free; intro P3 carries the first link
  (`/how-to-stop-doomscrolling`). Editor accepts this: `blog-craft.md` allows a hook that is a
  question or anecdote rather than a stat, and the ordering rule is the harder constraint.
- Writer skipped the optional screen-time-limit-features association in Day 2, so the only
  `needs_verification` claim in the draft is the 68-student 2021 study in H2 6, described as small.
- Writer flagged bullet-list density (~1 list per 430 words) as lower than usual because H2 3's seven
  H3 days carry the list structure. Left for the reviewer to judge.

### Stage 3b review iteration 1 (draft-v1) — root cause recorded

Both `major` issues traced to ONE defect in `facts.md`: the u/Sindweller VOC row compressed the
quote with an ellipsis that removed the time-bearing clause ("That was during the first week while
I was just getting used to the size"), so the writer reconstructed an inverted timeline and repeated
it in the FAQ. **Fixed at source before the revise pass** — that facts.md row now carries the full
quote plus an explicit note that the detox effect held during week one and the relapse came after.
Lesson for future synthesis: VOC rows must preserve time-bearing clauses rather than elide them.

### Stage 3d marker auto-resolution log

The draft shipped with **zero** `[VERIFY:]` and **zero** `[EXTERNAL_LINK_NEEDED:]` markers, so there
was nothing to resolve, keep general, delete, or route. Stage 3d instead discharged the verification
dependency `plan.md` / `outline.md` recorded against the one ⚠️ `needs_verification` claim that
reached the draft through a competitor's citation chain, and re-checked every external URL:

- **68-student study (H2 6)** — confirmed at https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/
  and **corrected twice**: the year is **2020**, not the 2021 the competitor's citation chain
  reported, and it is an **observational survey of students recalling their own voluntary breaks**,
  not an intervention study. The sentence now reads as self-report ("68 university students who had
  taken social media breaks... reported better mood, better sleep, and less anxiety... still 68
  students describing their own experience afterwards"). Mirrored into `facts.md`, which now also
  records that all participants in that paper returned to social media afterwards.
- **URL liveness:** all five external URLs return HTTP 200. `support.google.com/android/answer/9346420`
  answers 404 to a HEAD request but 200 to a GET (title: "Manage how you spend time on your Android
  phone with Digital Wellbeing"); that is a Google quirk, not a dead link.
- **Re-lint after edits:** 0 em-dashes, 0 residual markers, 0 links to any forbidden competitor
  domain, body prose 2,216 words.

### Inbound internal links, workflow ownership record (write-ahead)

The outline planned 3 inbound links. Only ONE target exists as markdown in this repo; the other two
are legacy posts that live only on WordPress (no file under `content/blog/`), so per the
`wordpress-rest` adapter's §Action-items §4b they become hand-apply action items instead.

- `inbound link applied by workflow: content/blog/how-to-stop-doomscrolling.md` (anchor
  "digital detox plan" -> /digital-detox-plan, in "### 12. Be kind when you slip")
- NOT applicable, no repo file: `things-to-do-instead-of-being-on-your-phone` (WP-only legacy post)
- NOT applicable, no repo file: `productive-things-to-do-on-your-phone-instead-of-scrolling` (WP-only legacy post)

### Handoff to `autopilot-cont`

This run stopped at the verification handshake. What is on disk and pushed:

- `content/blog/digital-detox-plan.md` — the canonical post, `[IMAGE:]` embeds resolved, frontmatter
  complete (title / excerpt / 3 tags / author / `draft: true`).
- `blog-ops/assets/digital-detox-plan/` — 5 rendered PNGs + the `.staged-by-blog-workflow` sentinel.
- `content/blog/how-to-stop-doomscrolling.md` — one inbound link added.
- `tools/remotion/src/SevenDayRampDiagram.tsx` + its `Root.tsx` registration.

What `autopilot-cont` still has to do (adapter §Staging steps 2-5 and 7):

1. **Auth probe** — `WP_APP_PASSWORD` was NOT set in this run's environment. It was never needed
   here (no WordPress call was made), but the WP draft create cannot run without it. If the probe
   fails, park `wp_auth_failed` immediately: zero retries, per the lockout rule.
2. Convert the markdown to Gutenberg blocks (`site-conventions.md` §Table of contents has a real
   Kadence TOC block, so the `--extra-blocks` path applies).
3. Upload the 5 media files, create the draft (`status: draft`), resolve the **Productivity**
   category and the 3 tags by name, set `featured_media` from `featured.png`.
4. Write `pr-monitor.json` with `wp_post_id` / `wp_media_ids[]` / `wp_preview_url`, and open the PR.

The post stays `draft` in WordPress. Publishing is a human wp-admin action, after setting the Rank
Math focus keyword to `digital detox plan` by hand.
