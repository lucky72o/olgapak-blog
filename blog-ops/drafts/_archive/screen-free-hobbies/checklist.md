---
slug: screen-free-hobbies
target_keyword: screen-free hobbies
created: 2026-09-02 00:07
last_updated: 2026-09-02 03:05
current_stage: complete
current_owner: blog-post-workflow
status: complete
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: screen-free-hobbies

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/screen-free-hobbies/brief.md)
- [x] Slug taken from `blog-ops/content-plan.md` row #20 (autopilot file-intake, no human conversation)
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
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause), approved on iteration 2

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
- [x] draft word count within ±10% of outline roll-up target (3,188 body prose vs 3,260 roll-up, -2.2%)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` on iteration 2 (1 revise pass used of 2 allowed)
- [x] Prior-iteration review archived as review-v1.md

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (or surviving hits flagged to human with line numbers)
- [x] Word count delta 0% (humanizer was a legitimate no-op)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]`, zero of each
- [x] no markers existed to resolve; editor instead verified all 3 shipped citations (cited from primary/allowlist), kept-general (marker dropped), or claim deleted; competitor-claim markers routed to human
- [x] every external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` except competitor-routed)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, 4 in-post entries matching 4 draft placeholders + 1 featured
- [x] Each entry has production spec populated matching its type

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0 VERIFY / 0 EXTERNAL / 0 INTERNAL / 4 IMAGE)
- [x] Authors-map status: N/A for the WordPress adapter (no author-map file to reconcile) (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

**Artifacts:** `action-items.md`

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Editor presents Gate 2 banner (the only human gate; plan approval is an automated Stage 1c.5 review). On approve, runs the finalize sequence (adapter-specific, per `adapters/publish/<adapter>.md`): moves/publishes the draft to `{content_dir}/<slug>.md` (or the WordPress equivalent); creates the asset folder; archives `{drafts_dir}/<slug>/` → `{drafts_dir}/_archive/<slug>/`.

- [x] Gate 2 presented (console-gated: PR #20 + WP draft 2215 are the review surfaces; the console's Approve button is the gate)
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

- Plan review opened: 2026-09-02 00:35
- Plan review verdict (iteration 1): request_revisions, 1 critical (title's "(Most Are Free)" promise unmet at ~20/51 genuinely free) + 3 minor; all four fixes applied, prior review archived as plan-review-v1.md, 2026-09-02 00:42
- Plan review verdict (iteration 2): approve, all four fixes verified effective, no new blockers, 2026-09-02 00:46

## Stage transition log

<append one line per stage transition>

- intake started: 2026-09-02 00:06 (owner: blog-post-workflow, autopilot/headless)
- intake completed: 2026-09-02 00:07
- Stage 1a SERP fetch started: 2026-09-02 00:09 (owner: blog-post-workflow, open-claude-in-chrome)
- Stage 1a SERP fetch completed: 2026-09-02 00:14, 8 organic results captured, 6 selected, 6 fetched, 0 failed
- Stage 1.5a Reddit fetch completed: 2026-09-02 00:16, 25 results captured, 5 selected, 5 fetched, 0 failed (chrome transport, primary path)
- Stage 1.5b X fetch completed: 2026-09-02 00:22, f=top returned 4 mostly-off-topic posts so re-pulled f=live with a broadened phrase query (37 results), 5 selected, 5 fetched, 0 failed
- Stage 1.5c competitor check: SKIPPED (modules.competitors is false for this blog)
- Stage 1b started: 2026-09-02 00:22 (owner: blog-researcher, sources=serp,reddit,x)
- Stage 1b completed: 2026-09-02 00:27, serp.md + reddit.md + x.md written
- synthesize_plan completed: 2026-09-02 00:35, plan_review opened: 2026-09-02 00:35
- Stage 1c.5 plan review completed: 2026-09-02 00:46, verdict approve (iteration 2 of 2)
- outline started: 2026-09-02 00:46 (owner: blog-post-workflow)
- outline completed: 2026-09-02 00:52, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-09-02 00:52 (owner: blog-writer)
- Stage 3a completed: 2026-09-02 01:03, body prose 3,188 words, draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-02 01:03
- Stage 3b review iteration 1 verdict: request_revisions, 0 critical / 0 major / 7 minor, review archived as review-v1.md, 2026-09-02 01:15
- Stage 3b revise iteration 2 started: 2026-09-02 01:18 (owner: blog-writer)
- Stage 3b revise iteration 2 completed: 2026-09-02 01:23, draft-v2.md written, body prose 3,274 words (+0.4% vs 3,260 target), all 7 issues applied as 12 targeted replacements
- Stage 3b review iteration 2 started: 2026-09-02 01:23
- Stage 3b review iteration 2 verdict: approve, 0 critical / 0 major / 0 minor, all 7 fixes verified landed via diff (9 hunks, 12 passages, nothing else changed), 2026-09-02 01:33
- Stage 3c started: 2026-09-02 01:33 (owner: blog-humanizer, on draft-v2.md)
- Stage 3c completed: 2026-09-02 01:38, preservation check PASSED, zero edits made (legitimate no-op: draft was already clean on all 7 passes after two review iterations)
- Stage 3d completed: 2026-09-02 01:45, resolved 0, kept-general 0, deleted 0, competitor-routed 0 (no markers existed); 3 shipped citations verified live and 1 factual error corrected
- Stage 4a started: 2026-09-02 01:45 (owner: image-planner)
- Stage 4a completed: 2026-09-02 01:55, 5 images (1 featured ai-prompt + 4 in-post: 1 remotion, 3 ai-prompt), 0 screenshot slots
- Stage 4a.5 started: 2026-09-02 01:55 (owner: image-builder)
- Stage 4a.5 completed: 2026-09-02 02:00, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b started: 2026-09-02 02:00 (owner: blog-post-workflow)
- Stage 4b completed: 2026-09-02 02:05, action-items.md written, 0 residual markers
- Stage 4b.5 staging started: 2026-09-02 02:05
- Stage 4b.5 FILE LAYOUT completed: 2026-09-02 02:20, committed 7909668 and pushed to origin/blog/screen-free-hobbies. Side effects (PR open / WP draft create / pr-monitor.json) DEFERRED to autopilot-cont per the CONSOLE_VERIFICATION=on handshake.
- Stage 4b.5 SIDE EFFECTS completed (autopilot-cont): 2026-09-02 03:05. WP auth probe OK (once, not retried); Gutenberg conversion via the primary `md-to-gutenberg.py` path with the Kadence TOC block; 5 media uploaded (ids 2210-2214); WP draft created (post 2215, `status: draft`, category [12], tags [15,34,30], featured_media 2210); `pr-monitor.json` written; PR #20 opened (https://github.com/lucky72o/olgapak-blog/pull/20).
- Gate 2 opened: 2026-09-02 03:05 (console-gated: no CronCreate monitor, no in-session block; approval requires the console's approval.json).

## Notes

- **Autopilot run.** `CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`. Gate 2 is console-gated; this run stages file layout and stops at `ready_for_verification`.
- **Cannibalisation carve-out is the load-bearing editorial decision.** Two live posts cover adjacent ground: `/things-to-do-instead-of-being-on-your-phone` (75 low-commitment filler items) and `/productive-things-to-do-on-your-phone-instead-of-scrolling` (on-screen alternatives). This post is durable *hobbies*, not filler activities. See brief.md §What the human wants to convey + §Autopilot assumptions #5. Re-validate against the observed SERP intent at Stage 1a.
- **Count discipline:** the planned title promises 50 hobbies. The list must actually contain 50 non-padded entries or the title changes to the honest number before staging.
- **No affiliate links / no disclosure** in this post (no Amazon roundup content planned). If that changes, the disclosure paragraph becomes mandatory per `site-conventions.md` §Post furniture.
- **Research weighting for Stage 1c.** Reddit is by far the strongest source in this run (five threads, 300-640 comments each, directly on-question). SERP is a format guide more than a content source: five substantive articles, one thin hub page, none stating an organising principle. X is the WEAKEST source and should be weighted lowest: the posts are short, most carry single-digit engagement, and their value is framing/vernacular ("analog hobby", the Gen Z trend narrative) rather than substance. Do not let a thin X post become a load-bearing claim.
- **Stage 3a writer handoff (2026-09-02).** Body prose 3,188 words (target 3,260, -2.2%). Entries 12+10+9+8+6+6 = 51, matching the title. Markers: 4 `[IMAGE:]`, zero `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]`. Editor's post-spawn checks: 0 em-dashes, 0 forbidden phrases from either list, target keyword 7x in body prose (blog-craft range 2-8), 5 planned internal links + `/ai-tools` CTA all root-relative with no trailing slash, exactly the 3 planned external links and no top-10 SERP link. Frontmatter valid for the wordpress-rest template.
- **Writer judgment calls worth a reviewer look:** (a) the conditional Harvard link survived, anchored on the literal source claim "Mindfulness practice supports focus" with the crochet comparison made separately in the author's own voice, so the source is not stretched onto hobbies; (b) the OUP "brain rot" sentence deliberately states NO year, since `facts.md` flags the year as unconfirmed and the writer could not fetch; (c) both dollar figures appear only inside quotation marks with named attribution; (d) Reddit and X are attributed in plain text rather than hyperlinked, because the r/simpleliving thread is itself a top-10 SERP result.
- **Known deviation:** the FAQ is 502 words against the outline's ~200 estimate. The FAQ sits OUTSIDE the gated body-prose total by design, so this does not breach the length gate, but it is 2.5x the plan and the reviewer should judge whether it is over-long.
- **Cannibalisation caveat RESOLVED by the editor (2026-09-02 01:16).** The Stage 3b reviewer could not diff our 51 entries against `/things-to-do-instead-of-being-on-your-phone` (no repo copy, no fetch capability). The editor fetched the live post via Chrome; raw capture saved at `research/_raw/_cannibal_check.json` + `_cannibal_items.json`. Findings: the existing post is 3,072 words organised by SITUATION and MOOD (at home / outdoor / morning / before bed / chores / play / relaxing / social), where ours is organised by pursuit type with cost tiers. Its entries are one-line prompts with no depth, no cost and no learning curve, and it explicitly includes chores ("Write a to-do list", "Organize your workspace", "Take a long relaxing bath"), which makes it definitionally the filler post. Noun-level overlap is roughly 22% (12 of 55 probes: hiking, stargazing, gardening, swimming, roller skating, climbing, languages, dance, baking, houseplants, board games, volunteering). **Verdict: the carve-out is genuine and no action is needed.** The two posts share some nouns but nothing else, and the new post links to the old one by name in H2 1.
- **Stage 3b reviewer's optional Stage 4a notes (NOT defects, no writer pass warranted).** (a) Lines 56-57 are consecutive bullets both ending on a "notebook you already own / already have" clause, a side effect of the issue-4 fix; the reviewer judged the repetition reads as consistent tier application and said ship as-is. (b) "actually" appears in the H2 8 heading and again in the question two lines below; density is about 1 per 417 words, so not a tic; optional alternative is "So which one do you pick?". (c) The remotion cost-tier diagram sits just before the tier bullets it illustrates; the writer followed the outline placement rule and either position is defensible. (d) The H2 3 image marker now follows heading + question + paragraph; the reviewer ruled this ACCEPTABLE and said explicitly not to nudge it at Stage 4a, since the question sets up the quote and an image between them would break the pair.
- **Operator preference question, not a defect:** the prose is consistently British (fortnight, towpath, allotment, watercolour, labelled) with no US spellings mixed in. Correct for a UK-based author and the UK-localised SERP capture, but part of the audience is American and the blog's Amazon associate tag is US. No profile doc governs this. Surface at Gate 2 if the operator wants US spelling.
- **Stage 3d per-marker log (2026-09-02 01:45).** The draft contained ZERO `[VERIFY:]` and ZERO `[EXTERNAL_LINK_NEEDED:]` markers, so there was nothing to resolve, keep-general, delete, or competitor-route. Instead the editor verified the three citations the post actually ships, which is where this post's real risk lived:
  1. `https://corp.oup.com/word-of-the-year/` (HTTP 200) , **FACTUAL ERROR FOUND AND FIXED.** The draft said Oxford "has named 'brain rot' its word of the year" with no year, which reads as current. The live page is headed "Oxford Word of the Year 2025", announces **"rage bait"** as the 2025 winner, and calls "brain rot" *"last year's choice"*, fixing it at 2024. Line 42 rewritten to `made "brain rot" its word of the year in 2024 ... and the year after that it picked "rage bait"`. Mirrored into facts.md (now ✅, was ⚠️).
  2. `https://www.mind.org.uk/...nature-and-mental-health/` , verified live in-browser. Page states "Spending time in green space or bringing nature into your everyday life can benefit your mental health" and names growing food or flowers among the ways, so the anchor is correctly scoped to nature. **Returns HTTP 403 to curl (bot protection), which is NOT a dead link**; do not let a later automated link-check flag it.
  3. `https://www.health.harvard.edu/healthbeat/mindfulness-practice-for-focus` (HTTP 200) , page H1 is literally "Mindfulness practice for focus". The shipped anchor is mindfulness-scoped and the hobby comparison sits in a separate sentence in the author's own voice, so the flagged overclaim risk did not materialise.
  Re-lint after the edit: 0 em-dashes, 0 residual markers, 4 `[IMAGE:]` intact, 51 entries intact, body prose 3,284 words (+0.7% vs the 3,260 target).
- **REPO BUG FOUND AND FIXED AT STAGE 4a (2026-09-02).** `tools/remotion/src/Root.tsx` did not parse on `main`: three `<Still>` tags (`HandwriteOrTypeDecision`, `NotesDecisionRule`, `TwoPilesOfScreenTime`) were missing their `width={CANVAS.width} height={CANVAS.height} />` self-close, so NO composition in the Remotion project could render. Introduced by commit `722e07e` (the how-to-take-notes-on-ipad PR) and present on `origin/main`, not caused by this post. Surfaced by the image-planner, verified by the editor against `origin/main`, and fixed here (3 lines added; `<Still>` tags and self-closes now balance at 24/24). This fix is unrelated to the post's content but is REQUIRED for this post's `remotion` cost-tier diagram to render, so it ships in this PR. Flag it in the Gate 2 review as an intentional out-of-scope repo fix.
- **Inbound-link write-ahead ownership record (Stage 4b.5, 2026-09-02).** Written BEFORE editing, per the adapter's step 5c. These three files were each verified clean (`git status --porcelain` empty) and free of any pre-existing `/screen-free-hobbies` link before the edit:
  - inbound link applied by workflow: content/blog/how-to-reduce-screen-time.md
  - inbound link applied by workflow: content/blog/digital-detox-plan.md
  - inbound link applied by workflow: content/blog/how-to-stop-doomscrolling.md
- **Stage 4b.5 state (2026-09-02 02:20).** `CONSOLE_VERIFICATION=on`, so this run performed the staging FILE LAYOUT only and stopped at `ready_for_verification`. Done: `content/blog/screen-free-hobbies.md` staged, 4 `[IMAGE:]` placeholders resolved to real embeds (all 5 asset files confirmed on disk first), 3 inbound links applied and each verified as a link-only diff, archive snapshot copied to `blog-ops/drafts/_archive/screen-free-hobbies/` in NON-terminal state, commit `7909668` pushed to `origin/blog/screen-free-hobbies`. NOT done, deferred to `autopilot-cont`: `gh pr create`, the WordPress auth probe, the Gutenberg conversion, the media uploads, the WP draft create, and the `pr-monitor.json` write. Resume signal is therefore `current_stage=preview` + staged post present + no `pr-monitor.json`, which routes correctly back into Step 14.5.
- **`draft: true` is deliberately KEPT in the repo frontmatter.** The `wordpress-rest` adapter defines no `draft_mechanism` frontmatter key (its draft gate is the WordPress post status), and every prior published post in `content/blog/` retains `draft: true`. Do not strip it.
- **The asset ownership sentinel `.staged-by-blog-workflow` was deliberately NOT deleted, only excluded from `git add`.** The adapter's `rm -f` assumes a separate worktree; here the run executes inside the worktree itself, so deleting it would break the image-builder's ownership guard on any resume. Excluding it achieves the same "never ships" result. (Note: `blog-ops/assets/best-pens-for-note-taking/.staged-by-blog-workflow` DID leak onto main in an earlier post; worth cleaning up separately.)
- **Trend claims need primary sources.** Fortune's "Gen Z analog hobby boom" line reached us as a tweet, not an article. Any use of it must resolve to the underlying article at Stage 3d and be confirmed to say what is claimed, or be cut.
- **Stage 4b.5 side effects (autopilot-cont, 2026-09-02 03:05).** Completed everything the file-layout run deferred: WP auth probe (once), Gutenberg conversion (primary `md-to-gutenberg.py` path + Kadence TOC after intro, NOT the classic-block fallback), 5 media uploads with the local `../../blog-ops/assets/...` srcs rewritten to their returned `source_url`s, WP draft post `2215` created `status: draft`, `pr-monitor.json` written, PR #20 opened. Step 6h main-tree cleanup is a deliberate no-op here: the console runs this post inside `.worktrees/blog-screen-free-hobbies`, so the "main tree" and the branch worktree are the same tree, and `rm`ing the staged post would delete it from the branch. The `.staged-by-blog-workflow` sentinel was never committed, so step 6d's intent holds.
