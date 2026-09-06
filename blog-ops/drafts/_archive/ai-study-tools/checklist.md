---
slug: ai-study-tools
target_keyword: ai study tools
created: 2026-09-06 13:30
last_updated: 2026-09-06 16:35
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: ai-study-tools

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/ai-study-tools/brief.md) — autopilot file intake from content-plan row #18
- [x] Slug approved by human — N/A in autopilot; slug `ai-study-tools` taken verbatim from the content-plan row
- [x] checklist.md created

**Artifacts:** `brief.md`, `checklist.md`

---

## Stage 1: Research

### Stage 1a: Chrome SERP, search + select + deep fetch (owner: blog-post-workflow skill, parent context)

Two-phase: cheap search-results capture → editor selects 5–8 (cap 8, no minimum) → deep-fetch only those.

- [x] research/_raw/_serp.json written (Google SERP metadata: top 10 URLs + titles only, no body content)
- [x] research/_raw/_serp_selection.md written (editor's rationale for the 5–8 picks + observed search intent)
- [x] research/_raw/NN-*.json written (7 files: 01,02,03,04,05,07,09) (per-URL deep-fetched data for the selected results, NN matches the original SERP rank)

**Artifacts:** `research/_raw/_serp.json`, `research/_raw/_serp_selection.md`, `research/_raw/NN-*.json` (up to 8 files, no minimum)

MCP note: this stage runs in the parent skill context because Chrome MCP tools do not propagate to subagents. The skill uses a JS blob-download pattern to save page data to disk without pulling content through its own context.

### Stage 1.5a: Reddit research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined Reddit during intake, or if `modules.reddit_research` is false.

- [x] research/_raw/_reddit_search.json written (Reddit search results metadata: ~20 threads, no thread bodies)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (5 files, 0 failed) (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Skip if the human declined X during intake, or if `modules.x_research` is false.

- [x] research/_raw/_x_search.json written (merged 3-query capture; see _x_selection.md for why) (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json written (5 files: 06,08,09,11,12) (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check (owner: blog-post-workflow skill, MANDATORY when `modules.competitors` is enabled AND brief.md "Competitors to mention" is non-empty)

For each competitor named in `brief.md`, the editor re-validates that `{competitors_dir}/<slug>.md` exists on disk and its `**Last verified:**` is ≤14 days from today. No Chrome, no fetching. Defense-in-depth gate that catches workflows paused for >14 days between intake and Stage 1b. Hard-halts on first failure; the human refreshes the offending profile per `{competitors_dir}/methodology.md` before resuming. Skipped only if the brief lists zero competitors (or the competitors module is off).

- [x] N/A — `modules.competitors` is false for this blog; Stage 1.5c is skipped entirely
- [x] N/A — see above
- [x] N/A — see above

**Artifacts:** none (the brief.md "Competitors to mention" table + the source-of-truth profiles in `{competitors_dir}/` are the artifacts)

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts (SERP + optionally Reddit + optionally X + optionally competitors) and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (only if Stage 1.5b ran)
- [x] N/A — competitors module off. (only if Stage 1.5c ran; sourced from `{competitors_dir}/<slug>.md` profiles; "Ready for facts.md" rows inherit each profile's `**Last verified:**` date verbatim)
- [x] product reference loaded (editor reads `{profile_dir}/product.md` directly, no per-post product researcher; only if `modules.product` is enabled)

**Artifacts:** `research/serp.md`, optionally `research/reddit.md`, optionally `research/x.md`, optionally `research/competitors.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause) — approve on iteration 2, after one revision pass

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
- [x] draft word count within tolerance: 2,995 body prose vs 2,800 roll-up target (+7%), under the +15% pre-review gate
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` on iteration 2 (1 revise pass, draft-v2)
- [x] Prior-iteration reviews archived as review-v<N>.md: review-v1.md

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (0 before, 0 after) (or surviving hits flagged to human with line numbers)
- [x] Word count delta within -20% to 0%: 3,624 -> 3,610 (-0.4%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` (3 markers found: 2 VERIFY, 1 EXTERNAL_LINK_NEEDED)
- [x] each non-competitor marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted; competitor-claim markers routed to human
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` except competitor-routed)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written: 4 in-post entries == 4 draft [IMAGE:] placeholders, + 1 featured (separate block)
- [x] Each entry has production spec populated matching its type (3 remotion, 2 ai-prompt, 0 screenshot)

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0 VERIFY, 0 EXTERNAL_LINK_NEEDED, 0 INTERNAL_LINK_NEEDED, 4 IMAGE)
- [x] Authors-map status: N/A for the WordPress adapter (no author-map file to reconcile) (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-09-06T13:55
- Plan review verdict iteration 1: request_revisions, 7 fixes (em-dashes in plan.md, tested-claim action, firm product links, H2 as question, meta trim, tool-to-H2 mapping, FAQ commitment), 2026-09-06T14:02
- Plan review verdict iteration 2: approve, all 7 fixes verified landed, no regressions, 2026-09-06T14:09





## Stage transition log

- intake completed: 2026-09-06T13:30 (owner: blog-post-workflow, autopilot file intake)
- Stage 1b completed: 2026-09-06T13:52, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-09-06T13:55, plan_review opened: 2026-09-06T13:55
- Stage 1c.5 plan review completed: 2026-09-06T14:09, verdict approve (iteration 2)
- outline started: 2026-09-06T14:10 (owner: blog-post-workflow)
- outline completed: 2026-09-06T14:20, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-09-06T14:20 (owner: blog-writer)
- Stage 3a completed: 2026-09-06T14:35, 2,995 words body prose, draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-06T14:35
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 3 major, 6 minor; all 6 hard constraints PASSED), 2026-09-06T14:50
- Stage 3b revise iteration 2 started: 2026-09-06T14:50
- Stage 3a revise completed: 2026-09-06T15:00, draft-v2.md written, 3,036 words body prose, all 9 review issues applied
- Stage 3b review iteration 2 started: 2026-09-06T15:00
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 1 minor), 2026-09-06T15:10
- Stage 3c started: 2026-09-06T15:10 (owner: blog-humanizer)
- Stage 3c completed: 2026-09-06T15:20, preservation PASSED, em-dashes 0->0, forbidden phrases 0->0, 1 passive->active, 1 burstiness beat, -0.4% words
- Stage 3d started: 2026-09-06T15:20 (owner: blog-post-workflow, editor role)
- Stage 3d completed: 2026-09-06T15:35, resolved 3, kept-general 0, deleted 1 sub-claim, competitor-routed 0
- Stage 4a started: 2026-09-06T15:35 (owner: image-planner)
- Stage 4a completed: 2026-09-06T15:45, 5 images (1 featured ai-prompt + 4 in-post: 3 remotion, 1 ai-prompt)
- Stage 4a.5 started: 2026-09-06T15:45 (owner: image-builder)
- Stage 4a.5 completed: 2026-09-06T16:15, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b started: 2026-09-06T16:15 (owner: blog-post-workflow)
- Stage 4b completed: 2026-09-06T16:30, action-items.md written
- Stage 4b.5 staging started: 2026-09-06T16:30
- Stage 1.5b X completed: 2026-09-06T13:45, Top tab off-topic -> re-pulled Latest + 2 adjacent queries; 5 posts fetched. One selected post (@aresotik) was dropped mid-fetch as a disclosed Paid partnership and its reserve promoted.
- Stage 1.5c competitor freshness re-check: SKIPPED (modules.competitors false)
- Stage 1b started: 2026-09-06T13:45, sources=serp,reddit,x
- Stage 1.5a Reddit completed: 2026-09-06T13:37, chrome transport (primary), 5/5 threads fetched, 0 failed
- SERP fetch completed: 2026-09-06T13:36, 8 selected, 7 deep-fetched here (0 failed), 1 (the r/studytips thread) routed to Stage 1.5a for native Reddit .json

## Notes

- Autopilot run under the operator console (`CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`). Gate 2 is console-gated: no CronCreate monitor, no typed-input block.
- `modules.competitors` is false — Stage 1.5c and `research/competitors.md` are not part of this run.
- Affiliate policy branch for this post: SOFTWARE roundup, so tools link to their own official pages, untagged. No Amazon tag, therefore NO affiliate-disclosure paragraph (see brief.md §Other notes).

### Stage 3a writer handoff (recorded for Stage 3b context)

- `draft-v1.md`, 2,995 words of body prose excluding the FAQ (FAQ adds ~329). Target was 2,800, ceiling 3,220.
- Markers: `[VERIFY:]` 2 (the Gallup 57% statistic, NotebookLM free-tier quotas), `[IMAGE:]` 4 (after H2 1, 4, 6, 7), `[EXTERNAL_LINK_NEEDED:]` 0, `[INTERNAL_LINK_NEEDED:]` 0.
- Zero em-dashes. Five internal links exactly where the outline's P3 table places them, plus the CTA link. Studley, StudyFetch, Turbo AI, Mindgrasp and Evernote named but never linked (verified by grep).
- **Writer flagged two things for review:**
  1. The ChatGPT study-mode URL (`https://openai.com/index/chatgpt-study-mode/`) was written from memory because the writer cannot fetch. Stage 3d must verify or replace it.
  2. External link count is 9 (8 tool links + the Gallup row) against `blog-craft.md`'s 3 to 5 guidance. The writer followed the outline's link plan because the outline is the contract. The outline's own trim order (cut Wolfram Alpha and the OpenAI row first) brings it to 7 if the reviewer wants it trimmed.
- The writer also caught and removed two numbers it had drifted into inventing mid-draft (a date on the Cornell method, a transcript word count).

### Stage 3b outcome (recorded for later stages)

Approved on iteration 2 after one revise pass. Two items deliberately carried FORWARD rather than fixed in the draft:

1. **Residual risk for Gate 2, must reach `action-items.md` as a checkbox at Stage 4b.** `blog.md` §Point of view promises every recommended tool was personally tested by Olga. This post cannot make that promise and correctly does not try. The reviewer's recommendation, endorsed here: Olga spot-tests NotebookLM, ChatGPT study mode and Studley before approving, all free or near-free and checkable in minutes. If she does, the method statement can gain a clause at Gate 2 and the post gets materially stronger. The writer was explicitly forbidden from adding that clause speculatively.
2. **One minor left for Gate 2 copy polish, not a writer round-trip:** the phrase "vendor homepages" appears at both L15 and L29, a side effect of the mandated hook rewrite.

Two outline-authorized claims the reviewer flagged for a Stage 3d glance (neither logged as an issue, the writer followed the contract exactly): Khanmigo's "coverage is strongest in school-level subjects", and "recording a lecture may need your lecturer's permission" (correctly hedged, safe as written).

### Stage 3d per-marker outcome log (flows to action-items.md §2 and §3)

All three markers RESOLVED with a primary-source citation. Zero deleted claims, zero competitor-routed, zero residual markers in the shipped draft.

1. **`[VERIFY:]` Gallup 57% statistic** → **resolved (cite: https://news.gallup.com/poll/704090/routine-college-students-despite-campus-limits.aspx).** Confirmed verbatim at the primary source: "more than half (57%) of U.S. college students are using artificial intelligence in their coursework at least weekly", Gallup / Lumina Foundation, surveyed 2 to 31 October 2025, n=3,801, published 1 April 2026. **The competitor's cited URL was wrong**: the `gallup.com/analytics/644939/...` hub page the roundup pointed at does not carry the figure, so the post links the news release that does. The prose gained the survey size and date, which the secondhand version lacked.
2. **`[EXTERNAL_LINK_NEEDED:]` ChatGPT study mode** → **resolved (cite: https://openai.com/index/chatgpt-study-mode/).** The writer's from-memory URL turned out to be correct. `WebFetch` returned HTTP 403 (openai.com blocks it), so this was verified through the Chrome fallback: page title "Introducing study mode | OpenAI", published 29 July 2025, described as "A new way to learn in ChatGPT that offers step by step guidance instead of quick answers", which matches the draft's claim exactly.
3. **`[VERIFY:]` NotebookLM free-tier quotas** → **resolved (cite: https://support.google.com/notebooklm/answer/16213268), with one Reddit error corrected and one sub-claim deleted.** Google's own plan comparison confirms 100 notebooks per user and 50 sources per notebook on the free plan, plus 500,000 words per source. **Reddit had it wrong**: u/AdCold1610 said 500,000 words *per notebook*; the docs say per *source*. The corrected figure shipped. **Deleted sub-claim:** the same Reddit comment's ".edu students get the $19.99/month premium free" was not confirmed on any Google-owned page checked, so it was dropped rather than softened, per the Stage 3d fallback rule.

**Bonus verified fact added while resolving marker 3:** Google now calls the product **Gemini Notebook** in its own help pages, and `notebooklm.google.com` redirects to `notebook.google.com`. Confirmed by direct browser navigation. The post keeps the NotebookLM name (what readers actually search) and adds one clause so a reader is not confused by the name on screen. This was outline-sanctioned: outline H3 2.1 directed "treat the naming as in flux and describe rather than assert."

**Re-lint after edits: PASSED.** 0 em-dashes, 0 residual markers, 0 links to any top-10 SERP URL, 0 forbidden phrases introduced. All 10 external URLs HTTP-checked: 8 returned 200 directly; perplexity.ai and openai.com returned 403 to curl (bot-blocking) and were both confirmed live in a real browser instead.

### Stage 4a.5 notes (carry into the PR)

- All 5 file-producing slots rendered on the first builder pass, 0 failed. Featured-slot completion gate PASSED (`ai-prompt`, `featured.png` present on disk).
- **A pre-existing bug in `tools/remotion/src/Root.tsx` was fixed as a side effect and ships in this PR.** The `FourCorePagesMap` `<Still>` was unclosed, which made the whole file invalid JSX, so NO composition in that project could render, not just this post's. Worth flagging in the PR body since it is unrelated to this post and affects every future Remotion image.
- Three new compositions ship with the post: `SerpComposition.tsx`, `RecallLoop.tsx`, `FreeTierTransparency.tsx`, plus the `Root.tsx` registration diff.
- `tools/remotion/node_modules` does not exist in this worktree (only in the main checkout). The builder symlinked it to render and removed the symlink afterwards, so nothing stray is staged. **Any future re-render from this worktree needs the symlink recreated or a real `npm install` first.**
- The featured image took two codex runs: the first placed the title too high and a centered 1.91:1 OG crop sliced it. The shipped version was verified against a generated 1536x804 center crop.
- Editor spot-check of the two data diagrams against `facts.md`: `serp-composition.png` (6 vendor / 2 roundup / 1 forum, ranks 1,2,3,4,8,9 / 5,7 / 6) and `free-tier-transparency.png` (Studley + Evernote stated, StudyFetch + Turbo AI + Mindgrasp not stated) both match the verified rows exactly. Watermark present on both.

### Stage 4b.5 inbound-link write-ahead record (durable ownership authority)

Written BEFORE the edits, per the adapter's step 5c write-ahead rule. Presence of the link on disk is NOT proof the workflow inserted it; this record is. All four targets were verified clean (`git status --porcelain` empty) and link-free before editing.

- inbound link applied by workflow: content/blog/note-taking-methods.md
- inbound link applied by workflow: content/blog/cornell-note-taking-method.md
- inbound link applied by workflow: content/blog/how-to-take-notes-on-ipad.md
- inbound link applied by workflow: content/blog/digital-vs-paper-notes.md

### Stage 4b.5 staging, FILE LAYOUT ONLY (console verification handshake)

This run is autopilot under the operator console with `CONSOLE_VERIFICATION=on`, so per `console-contract.md` §Verification handshake it performs the staging FILE LAYOUT and stops. The deferred SIDE EFFECTS, which `autopilot-cont` performs after a verification PASS, are: the WordPress draft create + media upload + auth probe (`wordpress-rest.md` §Staging steps 2 to 5), `gh pr create`, and the `pr-monitor.json` write. The commit and push are part of the file layout and DID happen, so the console has a branch to check out and verify.

Done in this pass:

- Collision guard PASSED: `content/blog/ai-study-tools.md` does not exist on `origin/main` after `git fetch`.
- Branch base verified: `git log origin/main..HEAD` was empty, so `blog/ai-study-tools` carried no stray local commits and needed no rebase.
- Post copied to `content/blog/ai-study-tools.md`. All 4 `[IMAGE:]` placeholders resolved to real embeds (every render exists on disk, so no build-safe "Image pending" note was needed). Residual marker grep on the staged post: ZERO of all four marker types.
- `draft: true` retained in the repo frontmatter. This is correct for `wordpress-rest`: config defines no `draft_mechanism` for it, the frontmatter template calls the line a documentation-only guard, WordPress's own `status` field does the real gating, and every prior published post in `content/blog/` keeps the line.
- No cover/hero frontmatter field was injected. `wordpress-rest.md` §"No cover/heroImage field" is explicit that the featured image is attached as `featured_media` from an uploaded media ID, never a frontmatter path. `featured.png` was verified present on disk before proceeding.
- All 4 inbound links applied. Every target passed the ownership check (link absent) and the dirty-file guard (`git status --porcelain` empty) before editing, and every one passes the Link-only diff verification afterwards: the two extended-sentence edits show +1/-1 on the same line (attributable per the adapter) and the two new-line edits show +1/-0, with every added line containing `(/ai-study-tools)`.
- The asset ownership sentinel `.staged-by-blog-workflow` was deliberately NOT staged (the commit adds `blog-ops/assets/ai-study-tools/*.png` explicitly rather than the directory), so it never ships but stays on disk. That preserves the Stage 4a.5 ownership guard for any re-render, which a plain `rm` would have destroyed.
- Non-terminal archive snapshot copied to `blog-ops/drafts/_archive/ai-study-tools/` for PR completeness. Its `checklist.md` still carries live, non-terminal values by design; finalize re-syncs it. The LOCAL `mv` that actually retires the source directory has NOT happened and must not until Gate 2.

