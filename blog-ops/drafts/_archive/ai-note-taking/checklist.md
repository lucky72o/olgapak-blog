---
slug: ai-note-taking
target_keyword: ai note taking
created: 2026-09-09 07:38
last_updated: 2026-09-12 21:55
current_stage: complete
current_owner: blog-post-workflow
status: complete
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: ai-note-taking

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/ai-note-taking/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from `blog-ops/content-plan.md` row 10; no human confirmation)
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

Editor presents Gate 2 banner (the only human gate; plan approval is an automated Stage 1c.5 review). On approve, runs the finalize sequence (adapter-specific, per `adapters/publish/<adapter>.md`): moves/publishes the draft to `{content_dir}/<slug>.md` (or the WordPress equivalent); creates the asset folder; archives `blog-ops/drafts/ai-note-taking/` → `{drafts_dir}/_archive/<slug>/`.

- [ ] Gate 2 presented (banner format)
- [ ] Human approved
- [ ] draft moved/published to `{content_dir}/<slug>.md` (or the WordPress equivalent)
- [ ] asset folder created at `{assets_dir}/<slug>/` (with images.md as README.md)
- [ ] `blog-ops/drafts/ai-note-taking/` archived to `{drafts_dir}/_archive/<slug>/`

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

- Plan review opened: 2026-09-09 08:05
- Plan review verdict: approve, iteration 1, two non-blocking notes logged to Notes below, 2026-09-09 08:09
- Plan review verdict: <approve | request_revisions | reject>, <brief note>, <timestamp>
- Gate 2 opened: ...

## Stage transition log

<append one line per stage transition>

- intake completed: 2026-09-09 07:38 (owner: blog-post-workflow, AUTOPILOT file-intake from content-plan.md row 10)
- Stage 1a SERP fetch completed: 2026-09-09 07:45, 5 selected, 0 failed (4 vendor homepages skipped; observed intent = commercial investigation + informational sub-intent)
- Stage 1.5a Reddit fetch completed: 2026-09-09 07:50, 5 threads selected, 0 failed (chrome transport, PRIMARY; search HTTP 200, combined thread fetch, no curl fallback needed)
- Stage 1.5b X fetch completed: 2026-09-09 07:54, 44 posts captured on the Top tab, 5 selected, 0 failed (X login confirmed)
- Stage 1.5c competitor check: SKIPPED (`modules.competitors: false`)
- Stage 1b started: 2026-09-09 07:55 (owner: blog-researcher, sources=serp,reddit,x)
- Stage 1b completed: 2026-09-09 08:00, serp.md + reddit.md + x.md written (competitors.md N/A, module off)
- Stage 1c completed: 2026-09-09 08:05, facts.md + plan.md written; plan status awaiting_plan_review
- Plan review opened: 2026-09-09 08:05 (owner: plan-reviewer, iteration 1)
- Stage 1c.5 completed: 2026-09-09 08:09, verdict approve; plan.md status set to approved
- outline started: 2026-09-09 08:10 (owner: blog-post-workflow)
- outline completed: 2026-09-09 08:15, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-09-09 08:15 (owner: blog-writer)
- Stage 3a completed: 2026-09-09 08:21, body prose 2,555 words (roll-up target 2,530, +1.0%), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-09 08:22 (pre-review length check passed, +1.0% vs roll-up)
- Stage 3b review iteration 1 verdict: request_revisions, 0 critical / 1 major / 6 minor; review.md archived as review-v1.md, 2026-09-09 08:30
- Stage 3b revise iteration 2 started: 2026-09-09 08:31 (owner: blog-writer)
- Stage 3a revise completed: 2026-09-09 08:35, draft-v2.md written, body prose 2,732 words (+8.0% vs roll-up 2,530, inside the +-10% gate; 32 words over the plan's 2,300-2,700 band, accepted per review-v1 §10 which told the writer not to trim unflagged sections to compensate)
- Stage 3b review iteration 2 started: 2026-09-09 08:36 (pre-review length check passed, +8.0% vs roll-up, well under the +15% shortcut threshold)
- Stage 3b review iteration 2 verdict: approve, 0 critical / 0 major / 2 minor, 2026-09-09 08:47
- Editor applied both minor copyedits to draft-v2.md directly (approve skips the writer loop): the sentence-initial lowercase anchor at the 2019-replication line was fixed by rewording the lead-in to "re-ran it in 2019 and found that ...", which keeps the anchor text literal; and the near-duplicate "which is what the last section is for" in H2 4's criteria list was reworded to "and see the permission-and-privacy section below". 2026-09-09 08:48
- Stage 3c started: 2026-09-09 08:48 (owner: blog-humanizer, draft-v2.md)
- Stage 3c completed: 2026-09-09 08:52, preservation check PASSED, 0 forbidden phrases before and after, 0 em-dashes, 3 rhythm sentence-splits, word delta -0.09%
- Stage 3d completed: 2026-09-09 09:04, resolved 2, kept-general 0, deleted 0, competitor-routed 0 (competitors module off)
- Stage 4a started: 2026-09-09 09:05 (owner: image-planner)
- Stage 4a completed: 2026-09-09 09:10, 5 images (1 featured ai-prompt + 4 in-post: 2 remotion, 2 ai-prompt); in-post entries 4 == draft placeholders 4, no delta; rotation entry written to blog-ops/featured-log/2026-09-09-ai-note-taking.md
- Stage 4a.5 started: 2026-09-09 09:11 (owner: image-builder)
- Stage 4a.5 completed: 2026-09-09 09:55, 5 rendered / 0 prompt-pending / 0 screenshot-pending / 0 failed; all 5 expected file-producing filenames present in blog-ops/assets/ai-note-taking/ with the .staged-by-blog-workflow sentinel. Featured slot is ai-prompt and file-producing, and featured.png exists, so the featured-slot completion gate passes. Two new Remotion sources (AiHandlesYouHandle.tsx, FiveStepWorkflow.tsx) plus the Root.tsx registration must ship on the PR branch.
- Stage 4b started: 2026-09-09 09:56 (owner: blog-post-workflow)
- Stage 4b completed: 2026-09-09 10:02, action-items.md written; markers 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 4 IMAGE. Authors-map check N/A (wordpress-rest has no author map).
- Stage 4b.5 staging (FILE LAYOUT ONLY) completed: 2026-09-09 10:12. CONSOLE_VERIFICATION=on, so the staging SIDE EFFECTS are deliberately deferred to `autopilot-cont`: no PR opened, no WordPress draft created, no pr-monitor.json written, and the WordPress auth probe was NOT run (it belongs with the draft creation, and probing early risks a pointless lockout).
- Stage 4b.5 staging SIDE EFFECTS completed (autopilot-cont): 2026-09-09 10:05. WordPress auth probe ran once and passed. Markdown converted to native Gutenberg blocks via md-to-gutenberg.py (no classic-block fallback), with the Kadence dynamic TOC injected after the intro per site-conventions.md. 5 media uploaded (featured.png landed as featured-8.png on the server, so its id/source_url were taken from the upload response, never a slug lookup); all 4 in-post embeds repointed at their uploaded source_url. WordPress draft created: post 2271 (status draft, categories [12 Productivity, 9 EdTech], tags [17, 20, 14, 30], featured_media 2269). PR #28 opened: https://github.com/lucky72o/olgapak-blog/pull/28. pr-monitor.json written with mode=pr, status=open, wp_upload=ok.
- Gate 2 opened (console-gated): 2026-09-09 10:05. No CronCreate monitor started and no typed input awaited: CONSOLE_RUN_STATE is set, so approval is the console's browser Approve action writing approval.json. The workflow does NOT merge the PR and does NOT send WordPress status=publish.
- Gate 2 approved (console, approval.json): 2026-09-12 21:46 UTC. PR #28 merged by console 21:47 UTC. Finalize completed: 2026-09-12 (console-merge route, live inbound links applied to 4 posts, archive landed on main).

- <stage> started: <timestamp> (owner: <agent>)
- <stage> completed: <timestamp>

## Notes

Non-blocking notes carried forward from the Stage 1c.5 plan review (verdict: approve):

1. **Length.** The plan's roll-up target of 2,550 words (band 2,300-2,700) sits above `blog-craft.md`
   §Post type matrix's 1,500-2,500 for `how_to`. It is inside the observed SERP range (median 2,112,
   mean 2,691 across the five deep-fetched results), which is the tiebreaker `blog-craft.md`
   §Body rules gives ("match top-5 SERP competitor length"), but the outline roll-up should not drift
   further up. Stage 3b's pre-review length check uses the outline roll-up, so keep it honest.
2. **Tool-fit section (§4) is thin on sourced facts.** `facts.md` carries exactly one sourced entry
   for a named tool (NotebookLM, and even that is `needs_verification` until Stage 3d confirms the
   wording on Google's own docs). `modules.competitors` is OFF, so there is no profile-backed
   competitor table to draw on. Every other capability claim in §4 must therefore be either
   attributed opinion ("one commenter who has used it for four months says...") or carry
   `[VERIFY: <claim> | source: <where>]`. Do NOT state flat capability or pricing claims about any
   named third-party tool.

## Stage 3a writer handoff (draft-v1)

- Body prose 2,521 words by the writer's own count, 2,555 by the editor's re-count excluding the FAQ
  and the `[IMAGE:]` markers. Target 2,530, band 2,300-2,700. FAQ a further 242 words.
- Markers: 4 `[IMAGE:]`, 2 `[EXTERNAL_LINK_NEEDED:]` (both verbatim from the outline), 0 `[VERIFY:]`,
  0 `[INTERNAL_LINK_NEEDED:]`. Zero em-dashes. Four external links, all from the outline's plan; none
  of the nine banned SERP domains appears. Five internal links, root-relative, no trailing slash.
- **Writer flag 1:** H2 4 avoids `[VERIFY:]` entirely by writing the table rows as tool CATEGORIES
  rather than named products, so NotebookLM is the only named third-party tool in the post. Clean,
  but lean - the exact risk the outline's open questions predicted. If Stage 3b flags it, the fix is
  more per-category depth, NOT a ranked list of tool names.
- **Writer flag 2:** dropped two numbers that appear in `research/serp.md` but not in `facts.md`
  (the "75-minute" stats lecture, "three example problems") rather than carrying a `[VERIFY:]` for
  them. Step 2's illustration now reads "a statistics lecture" and "the worked examples".

## Stage 3d marker-resolution log (flows to action-items §2 / §3)

Both markers were `[EXTERNAL_LINK_NEEDED:]`. Zero `[VERIFY:]` were ever emitted, so §2 has nothing to
report beyond "none emitted". No competitor-claim guard applied (`modules.competitors` is off).

1. **`[EXTERNAL_LINK_NEEDED:]` speech-recognition accuracy (H2 5)** - **resolved (cite:
   https://www.pnas.org/doi/10.1073/pnas.1915768117)**. Koenecke et al., "Racial disparities in
   automated speech recognition", PNAS 2020. Confirmed by loading the paper's own abstract in the
   browser (WebFetch got a 403; Chrome did not) and reading the figure verbatim: five commercial ASR
   systems from Amazon, Apple, Google, IBM and Microsoft, average word error rate 0.35 for black
   speakers versus 0.19 for white speakers, over 19.8 hours of matched audio. **Scoped deliberately:**
   the draft names the limit in the prose ("That study looked at one specific gap rather than at
   accents generally"), because the paper does NOT measure accents, crosstalk or jargon in general and
   citing it for those would be the classic overclaim.
2. **`[EXTERNAL_LINK_NEEDED:]` recording-consent jurisdiction (H2 6)** - **resolved (cite:
   https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule)**. The FTC's
   exact sentence, confirmed on the live page: "State laws vary on permitting the recording of
   telephone conversations and the requirements to obtain consent of the recorded party." Scoped to
   US state variation only; the post still gives no legal advice and names no states.

**Third change made at Stage 3d, not driven by a marker but by a link check.** Verifying the
`support.google.com/notebooklm` URL revealed that it now REDIRECTS to `support.google.com/gemininotebook`:
Google has renamed the product to **Gemini Notebook**. Two corrections followed, both mirrored into
`facts.md`:
  - the draft now calls it "Gemini Notebook, which Google used to call NotebookLM" in H2 4 and
    "Gemini Notebook, formerly NotebookLM" in the FAQ, and links the canonical help page
    (`/gemininotebook/answer/16164461`, HTTP 200) rather than the redirecting one;
  - the flat "Google offers it free" claim was replaced with "a free tier with usage limits and a
    paid upgrade above it". The "100% free" framing came from a tweet in `research/x.md`, not from
    Google, and Google's own help centre carries both "Manage your Gemini Notebook usage limits" and
    "Learn about Upgrading Gemini Notebook" topics. No price is printed.
  Had this not been caught, the post would have shipped a wrong product name and an unsupported
  pricing claim on the only third-party tool it names.

### Two deliberate editor decisions at Stage 3d, flagged for the human

- **External links are now 6, one over `blog-craft.md` §External linking's 3-5 band.** `review-v1.md`
  §10 predicted this exactly and named the options: resolve only the more valuable marker, or accept
  6 deliberately. Accepting 6. Both new links are allowlist-class (PNAS primary source; ftc.gov,
  explicitly allowlisted) and both back the two most contestable claims in the post, which is where a
  sceptical reader will look first. Dropping either would leave a bare assertion in the post's
  honesty section. Nothing else was removed to compensate.
- **Body prose is now 2,830 words**, up from 2,732 at Stage 3b approval, because resolving the two
  markers added ~100 words of sourced content. That is +11.9% against the outline roll-up of 2,530
  and 130 words above the plan's 2,700 ceiling. Not trimmed: the only way back inside the band is to
  cut reviewer-approved prose or one of the two new citations, and neither trade is worth 130 words.

## Stage 4b.5 inbound-link write-ahead record

Written BEFORE the edits, per `adapters/publish/astro-git-pr.md` §Staging step 5c. All four target
files were verified clean (`git status --porcelain` empty) and did not already contain a link
matching `\(/ai-note-taking/?\)`, so none was user-authored.

- inbound link applied by workflow: content/blog/note-taking-methods.md
- inbound link applied by workflow: content/blog/digital-vs-paper-notes.md
- inbound link applied by workflow: content/blog/how-to-take-notes-on-ipad.md
- inbound link applied by workflow: content/blog/cornell-note-taking-method.md

## Stage 4b.5 staging record (file layout)

Run cwd IS the post's worktree (`.worktrees/blog-ai-note-taking`, branch `blog/ai-note-taking`), so
the adapter's main-tree-to-worktree copy dance collapses: the artifacts were staged directly on the
branch. `git log origin/main..HEAD` was empty before this run's commit, so the branch came off
`origin/main` cleanly and needed no rebase. Slug-collision guard passed
(`git cat-file -e origin/main:content/blog/ai-note-taking.md` found nothing).

What shipped in commit `d3db106`, pushed to `origin/blog/ai-note-taking`:
- `content/blog/ai-note-taking.md` (draft-v2 copied over; all 4 `[IMAGE:]` placeholders replaced with
  real embeds pointing at files that exist; alt text taken verbatim from `images.md`). `draft: true`
  is KEPT in frontmatter: for `wordpress-rest` that line is documentation-only, and every published
  post in `content/blog/` carries it.
- `blog-ops/assets/ai-note-taking/` (5 PNGs). The `.staged-by-blog-workflow` sentinel was
  deliberately NOT committed (unstaged after `git add`) and NOT deleted from disk, so the asset-dir
  ownership guard still holds for any resume.
- `blog-ops/drafts/_archive/ai-note-taking/` (early NON-TERMINAL completeness snapshot for reviewers;
  finalize re-syncs it to terminal state).
- `blog-ops/featured-log/2026-09-09-ai-note-taking.md` (this post's rotation entry only).
- `tools/remotion/src/AiHandlesYouHandle.tsx`, `FiveStepWorkflow.tsx`, and the `Root.tsx`
  registration diff.
- The four inbound-link edits (see below).

### Visual backstop caught a real defect (adapter §Staging step 3b)

All five renders were read. Four were clean. **`ai-handles-you-handle.png` contradicted
`five-step-workflow.png`**: its left column read `Capture / Transcribe / Tidy up / Find it again`
under the heading "AI HANDLES", while the workflow diagram in the very next section labels step 1
`Capture` and step 4 `Organize` as `YOU`. Two diagrams in one post cannot put the same word on
opposite sides of the same argument. Fixed at source, not papered over: the left column now reads
`Turn speech into text / Draft a first summary / Make it searchable` (3 vs 3, symmetrical, no
collision with any step name), `AiHandlesYouHandle.tsx` was edited and the slot re-rendered at
`--scale=2`, and the draft's `[IMAGE:]` text, the staged embed's alt text, and `images.md`'s concept,
copy-strings and alt text were all updated to match.

Render note for future runs: `tools/remotion/` has no `node_modules` inside a worktree (they live in
the main checkout), so `npx remotion` fails there with "could not determine executable to run". The
re-render worked by symlinking the main checkout's `node_modules` into the worktree's
`tools/remotion/`, running `./node_modules/.bin/remotion still ...`, then removing the symlink.

### Inbound links applied (all four, link-only diffs verified)

Each target was verified clean (`git status --porcelain` empty) and free of any pre-existing
`\(/ai-note-taking/?\)` link before editing; the write-ahead record above was written first. Each
edit EXTENDS an existing sentence rather than bolting on a "see also" line, and each file's
`git diff HEAD` is exactly one hunk, one line removed and the same line re-added with the link, which
is the Link-only diff verification passing. All four are therefore admitted and shipped in the commit.

- `content/blog/note-taking-methods.md` , §"The Step Most People Skip", extends the Text Summarizer
  paragraph: "here is my workflow for [using AI to take notes](/ai-note-taking)."
- `content/blog/digital-vs-paper-notes.md` , §"Where digital notes genuinely win", extends the
  speed-of-capture paragraph: "which is what [AI note-taking](/ai-note-taking) is actually good for."
- `content/blog/how-to-take-notes-on-ipad.md` , §"Step 4: Take the Notes, Then Actually Review Them",
  extends the condensing paragraph: "[an AI note-taking workflow](/ai-note-taking)."
- `content/blog/cornell-note-taking-method.md` , §"How to take Cornell notes: the 5 R's", extends the
  after-the-room-empties paragraph: "[AI note-taking](/ai-note-taking) helps more than it threatens."

Because `publish.wordpress.apply_inbound_links_live: true`, these become live REST edits once this
post is published; until then they are repo-only. `action-items.md` §4b carries the fallback
hand-apply commands.

### Deliberately NOT done in this run (deferred to `autopilot-cont`)

Per `references/console-contract.md` §Verification handshake, the commit and push ARE part of staging
file layout and were performed; the PR-open, the WordPress draft creation, and the `pr-monitor.json`
write are the deferred SIDE EFFECTS. The WordPress auth probe is deferred with them, since the
adapter runs it at most once per run immediately before the upload/create sequence and a needless
early probe risks tripping the host's login-attempt limiter for no benefit.


## Console-merge finalize (resume ai-note-taking, 2026-09-12)

Routed via Step 2: `finalize` + `gate_2_final`, `pr-monitor.json` mode `pr` status `open`, PR #28 already MERGED (2026-09-12T21:47:08Z), `approval.json` present (operator, 2026-09-12T21:46:58Z). No monitor cron existed (console-gated), so CronDelete is a no-op.

wordpress-rest §On Gate 2 approval step 1: `GET posts/2271` returned `status: publish` (published 2026-09-12T19:47:25, https://olgapak.com/ai-note-taking). Live post is authoritative, final draft re-sync SKIPPED.

### Live inbound-link write-ahead record

Written BEFORE the REST edits. Idempotency grep `href="(https://olgapak\.com)?/ai-note-taking/?"` found 0 matches in each target's `content.raw`. Each insertion mirrors the sentence Stage 4b.5 wrote into the repo markdown, appended to the same paragraph, absolute URL, no trailing slash.

- live inbound link applied: note-taking-methods (wp id 2102) -> this post, anchor "using AI to take notes" in The Step Most People Skip, Text Summarizer paragraph; before: "...the same way you match the method.</p>"; after: "...the same way you match the method. If you want to go further and let software handle the transcribing and first-pass summarizing...". POST 200, re-read shows exactly 1 match.
- live inbound link applied: digital-vs-paper-notes (wp id 2187) -> this post, anchor "AI note-taking" in Where digital notes genuinely win, speed-of-capture paragraph; before: "...a keyboard is simply better at that job than your wrist is.</p>"; after: "...than your wrist is. And if speed is the whole point, there is a third option now: hand the capture to software...". POST 200, re-read shows exactly 1 match.
- live inbound link applied: how-to-take-notes-on-ipad (wp id 2193) -> this post, anchor "an AI note-taking workflow" in Step 4, condensing paragraph; before: "...then paste it into another note as typed text.</p>"; after: "...as typed text. If you want software doing more of that condensing for you, that is the whole point of...". POST 200, re-read shows exactly 1 match.
- live inbound link applied: cornell-note-taking-method (wp id 2075) -> this post, anchor "AI note-taking" in the 5 R's, after-the-room-empties paragraph; before: "...and they take minutes, not hours.</p>"; after: "...not hours. That split is also why <a href=\"https://olgapak.com/ai-note-taking\">AI note-taking</a> helps more...". POST 200, re-read shows exactly 1 match.
