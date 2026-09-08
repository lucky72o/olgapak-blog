---
slug: aesthetic-stationery
target_keyword: aesthetic stationery
created: 2026-09-08 11:00
last_updated: 2026-09-08 11:04
current_stage: action_items
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: aesthetic-stationery

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/aesthetic-stationery/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from content-plan.md row 23)
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

- [ ] action-items.md written with every section filled
- [ ] Marker checkbox counts match grep output
- [ ] Authors-map status confirmed per the publish adapter (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-09-08T10:35Z
- Plan review verdict (iter 1): request_revisions, 5 issues (downsizing-filter contradiction on 3 picks; H2 8 unsourced; + 3 minor), 2026-09-08T10:42Z
- Plan review verdict (iter 2): approve, all 5 applied; one minor non-blocking note carried to Stage 3b, 2026-09-08T10:50Z
- Gate 2 opened: ...

## Stage transition log

<append one line per stage transition>

- intake started: 2026-09-08T10:00:22Z (owner: blog-post-workflow, autopilot file-intake)
- intake completed: 2026-09-08T10:00:22Z

## Notes

INBOUND LINK OWNERSHIP RECORDS (write-ahead, Stage 4b.5, 2026-09-08):
- inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md
- inbound link applied by workflow: content/blog/best-pens-for-note-taking.md
- inbound link applied by workflow: content/blog/bullet-journal-for-beginners.md

STAGE 3d MARKER LOG (flows to action-items §2/§3):
- [EXTERNAL_LINK_NEEDED: fresh start effect] -> RESOLVED (cite: https://hbr.org/2014/08/youre-more-likely-to-pursue-your-goals-after-a-birthday-or-the-first-of-the-month, HBR, authoritative_allowlist, HTTP 200, confirmed to contain the claim). Percentages on that page deliberately NOT quoted; the draft cites the qualitative claim only.
- [EXTERNAL_LINK_NEEDED: sunk-cost fallacy] -> RESOLVED (cite: https://pmc.ncbi.nlm.nih.gov/articles/PMC6324799/, NLM/PMC, primary_source, HTTP 200, Arkes & Blumer definition confirmed by direct browser read after WebFetch was captcha-blocked).
- [EXTERNAL_LINK_NEEDED: writing by hand aids retention] -> CLAIM DELETED. Removed text: "and there is a wider case that [writing notes by hand aids retention compared with typing]". Reason: the evidence is contested, Mueller & Oppenheimer (2014) carries a 2018 corrigendum and a large direct replication (Urry et al.) reports its results do not support better encoding from longhand. This was the one external-link claim plan-review flagged as untraceable to any research file (editor's general domain knowledge), and it did not survive verification. The surrounding sentence still stands on its own.
Net: the post ships with 2 editorial external links, below blog-craft.md's 3-5 target. Accepted at plan review as better than inventing a citation or linking a ranking competitor.

GATE 2 OPEN ITEM (carried from Stage 3b review-v1 and re-affirmed at iteration 2, for the human): the intro's P2 expertise sentence says "I take a lot of notes, by hand, and I have bought my share of pretty things that never earned their place." The outline claimed this is documented in voice.md §Personal-anecdote bank. It is NOT. The hand-notes half is loosely supported by brief.md §Founder anecdote; the "bought my share of pretty things" half is supported by nothing on file. It is category-level, so it does not breach facts.md Hard rule 4, but it is a first-person claim about Olga in the post's authority paragraph. Confirm it is true before publishing. If it is, add the line to voice.md §Personal-anecdote bank so future posts can use it legitimately.

WRITER HANDOFF (Stage 3a): 2899 body words excl FAQ (target 2400-2900). 4 [IMAGE:], 3 [EXTERNAL_LINK_NEEDED:], 0 [VERIFY:], 0 [INTERNAL_LINK_NEEDED:]. Writer flagged three things for review: (1) paraphrased half the u/dogfault_ quote to avoid "game changer" forbidden-phrase adjacency; (2) H2 2 calls the Bande item "the Bande sticker rolls" because "washi tape" is first glossed in H2 6; (3) only one true bullet list in the body plus the H2 8 skip-list, so a literal one-list-per-300-words rule will flag. H2 3 and H2 4 ran to ~560 vs a 490 target because the mandatory jargon glosses live in those intros; H2 1 came in at 249 vs 300 and was not padded.

STAGE 3b MUST CHECK (carried from plan-review iter 2, minor non-blocking): the plan resolves the downsizing-filter tension as "the category earns its slot; the pack size does not". That maps cleanly to the Zebra Sarasa Clip 10-pack and the Mr. Pen 480-tab pack, but LESS precisely to the Bande washi roll stickers, whose facts.md trade-off is "likely to sit unused in a drawer", not a pack-size problem. Verify the draft handles the Bande item with a reason that actually fits it rather than reusing the pack-size framing.

Autopilot run under the operator console (CONSOLE_RUN_STATE set, CONSOLE_VERIFICATION=on). Gate 2 is console-gated: this run never opens its own PR-monitor cron and never publishes. Intake was file-based; every assumption is recorded in brief.md "Autopilot assumptions".
- SERP fetch completed: 2026-09-08T10:04Z, 6 selected, 0 failed (head-term SERP had 0 genuine articles; supplementary content-shaped SERP used, see _serp_selection.md)
- Reddit fetch completed: 2026-09-08T10:08Z, 5 selected, 0 failed (chrome transport, primary)
- X fetch completed: 2026-09-08T10:14Z, 3 fetched (2 usable; see _x_selection.md post-fetch correction)
- Stage 1b started: 2026-09-08T10:15Z, sources=serp,reddit,x
- Stage 1b completed: 2026-09-08T10:20Z
- synthesize_plan completed: 2026-09-08T10:35Z, plan_review opened: 2026-09-08T10:35Z
- plan_review completed: 2026-09-08T10:50Z (approve, iteration 2)
- outline started: 2026-09-08T10:51Z
- outline completed: 2026-09-08T11:00Z, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-09-08T11:00Z
- Stage 3a completed: 2026-09-08T11:10Z, 2899 body words (excl FAQ), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-08T11:11Z
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 1 major, 6 minor), 2026-09-08T11:20Z
- Stage 3b revise iteration 2 started: 2026-09-08T11:21Z
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 1 minor), 2026-09-08T11:30Z
- Stage 3c started: 2026-09-08T11:31Z
- Stage 3c completed: 2026-09-08T11:36Z (preservation PASSED, 3 passive->active, 0 forbidden, wc 3499->3496)
- Stage 3d started: 2026-09-08T11:37Z, 3 [EXTERNAL_LINK_NEEDED:] to resolve, 0 [VERIFY:]
- Stage 3d completed: 2026-09-08T11:50Z, resolved 2, kept-general 0, deleted 1, competitor-routed 0
- Stage 4a started: 2026-09-08T11:51Z
- Stage 4a completed: 2026-09-08T11:56Z, 5 images (1 featured ai-prompt + 4 in-post: 3 ai-prompt, 1 remotion)
- Stage 4a.5 started: 2026-09-08T11:57Z
- Stage 4a.5 completed: 2026-09-08T13:47Z, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b started: 2026-09-08T13:48Z
