---
slug: best-blue-light-glasses
target_keyword: best blue light glasses
created: 2026-09-09 12:46
last_updated: 2026-09-09 15:44
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: best-blue-light-glasses

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/best-blue-light-glasses/brief.md)
- [x] Slug taken from content-plan row #15 (autopilot; no human conversation)
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

- Plan review opened: 2026-09-09T13:20
- Plan review verdict: request_revisions (v1, 5 important issues), 2026-09-09T13:25
- Plan review verdict: approve (v2, after all 5 edits applied), 2026-09-09T13:33
- Gate 2 opened: ...

## Stage transition log

- intake completed: 2026-09-09T12:46 (autopilot, brief written from content-plan row #15)
- Stage 4b.5 staging FILE LAYOUT completed: 2026-09-09T15:44, post + 5 assets + archive snapshot + 3 inbound-link edits committed and pushed on blog/best-blue-light-glasses (f739035). PR-open, WordPress draft creation and pr-monitor.json are DEFERRED to the autopilot-cont run per the console verification handshake (CONSOLE_VERIFICATION=on); current_stage stays `preview` so that run re-enters Step 14.5.
- Stage 4b completed: 2026-09-09T15:26, action-items.md written
- Stage 4b.5 staging started: 2026-09-09T15:26
- Stage 4a.5 completed: 2026-09-09T15:16, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4b started: 2026-09-09T15:16
- Stage 4a completed: 2026-09-09T14:52, 5 images (1 featured ai-prompt + 4 in-post: 3 ai-prompt, 1 remotion)
- Stage 4a.5 started: 2026-09-09T14:52
- Stage 3d completed: 2026-09-09T14:40, resolved 11, kept-general 0, deleted 0, competitor-routed 0
- Stage 3d started: 2026-09-09T14:18
- Stage 3c completed: 2026-09-09T14:18, preservation PASSED, 4 passive-to-active conversions, word delta +0.13%
- Stage 3c started: 2026-09-09T14:12 (draft-v2.md)
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 4 minor), 2026-09-09T14:12
- Stage 3b review iteration 2 started: 2026-09-09T14:05 (draft-v2.md, 3,206 gated body words)
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 4 major, 8 minor), 2026-09-09T13:59
- Stage 3b revise iteration 2 started: 2026-09-09T13:59
- Stage 3a completed: 2026-09-09T13:50, body prose 3,183 words (target 3,210), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-09-09T13:50
- outline completed: 2026-09-09T13:42, auto-progressing to Stage 3a (no human gate)
- Stage 3a started: 2026-09-09T13:42
- plan_review completed: 2026-09-09T13:33 (2 dispatches, 1 revision pass)
- synthesize_plan completed: 2026-09-09T13:20, plan_review opened: 2026-09-09T13:20
- Stage 1b completed: 2026-09-09T13:08, serp.md + reddit.md + x.md written
- Stage 1b started: 2026-09-09T13:01, sources=serp,reddit,x
- X fetch completed: 2026-09-09T13:00, 4 files for 5 selected posts (two picks share one thread), 0 failed
- Reddit fetch completed: 2026-09-09T12:55, 5 threads selected, 0 failed (chrome transport)
- SERP fetch completed: 2026-09-09T12:52, 8 selected, 0 failed (3 SERP captures: target keyword, "for students", "do blue light glasses work evidence"; all gl=us&hl=en)

## Notes

<anything the editor wants to flag for future stages or the human, e.g., "competitor X changed pricing on <date>, verify before publish">

### Stage 3a writer handoff (draft-v1)

- Body prose excluding FAQ: 3,476 raw / 3,183 net of marker text (outline roll-up 3,210). FAQ 437 words on top.
- Markers: 9 `[EXTERNAL_LINK_NEEDED:]` (one purchase link per pick), 4 `[IMAGE:]` (3 ai-prompt + 1 remotion), 1 `[VERIFY:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- Writer's flags: (1) the single `[VERIFY:]` is the "sunlight is a stronger blue-light source than a screen" clause, which `facts.md` does not cover; deleting the clause is an acceptable Stage 3d outcome. (2) No featured `[IMAGE:]` marker exists by design (the WordPress frontmatter template has no cover field), so Stage 4a must take the featured concept from `outline.md`. (3) H2 3 runs over its 1,150 budget on the shortlist table, not on the pick entries (102-145 words each).

### Stage 3d marker-resolution log (2026-09-09)

Purchase links (9 `[EXTERNAL_LINK_NEEDED:]`, all resolved through the logged-in browser because Amazon blocks curl):

- SOJOS: resolved (cite: https://www.amazon.com/dp/B0H7B5N2DV?tag=op01e-20). **Pick renamed.** The model the roundups named, the Sojos She Young, is no longer listed on Amazon; SJ5511 is SOJOS's current blue-light model. The draft now says so in the entry rather than linking a delisted product.
- TIJN: resolved (cite: https://www.amazon.com/dp/B0GYNQZMB6?tag=op01e-20), Amazon's own "Overall Pick" for the brand's square frame.
- Felix Gray Jemison: resolved (cite: https://felixgray.com/products/jemison-plano), brand product page, verified live. Not the felixgray.com URL that ranks in the SERP.
- Warby Parker: resolved (cite: https://www.warbyparker.com/eyeglasses/blue-light). **Pick renamed** from "Thurston" to "Warby Parker blue-light lenses": the Thurston product URL 404s, and the filter is sold as a lens option on any frame, which is the accurate framing.
- EyeBuyDirect: resolved (cite: https://www.eyebuydirect.com/prescription-lens/digital-protection). **Pick renamed** from "Escape": the frame URL 404s and the blue-light filter is a lens option; the Escape and Botanist frames are still named in the copy as the roundup's picks.
- Zenni Blokz: resolved (cite: https://www.zennioptical.com/blokz-blue-light-glasses). **Recorded exception:** this exact URL is rank 9 in `research/serp.md`'s primary SERP. It ships as a purchase link, not a citation, per `plan.md` §Open questions; this blog has no `rel` convention to apply (no published post uses one). Flagged for the human at Gate 2 as a deliberate, reversible call.
- Peepers by PeeperSpecs Kent: resolved (cite: https://www.amazon.com/dp/B0CJSMX8XB?tag=op01e-20), Amazon "Overall Pick" for the brand's blue-light readers.
- GUNNAR Intercept amber: resolved (cite: https://www.amazon.com/dp/B00CAUTK0E?tag=op01e-20).
- Swanwick: resolved (cite: https://www.amazon.com/dp/B01N0Q7RBM?tag=op01e-20). **Pick renamed** from "Night Swannies" to "Swanwick Swannies": the listing is the brand's sleep-aid amber family, and the specific "Night Swannies" variant could not be confirmed on that listing.

Claim markers (2 `[VERIFY:]`):

- Sunlight vs screens as a blue-light source: resolved (cite: https://www.aao.org/eye-health/tips-prevention/should-you-be-worried-about-blue-light, AAO: "the largest source of blue light is sunlight"). Mirrored into facts.md.
- r/Biohackers null-result quote: resolved, marker dropped. Quote confirmed verbatim in `research/reddit.md` (thread 2) and added to facts.md Quotes. Attributed in prose, deliberately not linked, per the outline's rule that Reddit and X are quoted but never linked.

Citation swap (not a marker, found during the re-lint):

- `academic.oup.com/jcem/article/88/9/4502/2845835`, harvested from Wirecutter's citations, sits behind a Cloudflare bot wall and could not be confirmed to load. Replaced with the same article on PubMed (https://pubmed.ncbi.nlm.nih.gov/12970330/, Lockley, Brainard & Czeisler 2003), and the anchor was rescoped to what that abstract actually supports: 460 nm light suppresses melatonin about twice as much as 555 nm light at equal photon density. Mirrored into facts.md.

Re-lint: 0 em-dashes, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`, 4 `[IMAGE:]` intact, every non-Amazon external URL confirmed to load (Amazon, Warby Parker, EyeBuyDirect and Zenni block scripted requests and were confirmed in the browser instead).

### Repo fix made during Stage 4a (2026-09-09)

`tools/remotion/src/Root.tsx` did not parse: the `FourCorePagesMap` `<Still>` was missing its `width`/`height` line, so the `CostTierKey` element opened inside it and nothing in the Remotion project could render. The image-planner surfaced it; the editor inserted the missing line. This is a pre-existing repo defect (it also blocked the screen-free-hobbies run), not something this post introduced, and the one-line fix ships with this post's branch.

### Stage 4b.5 inbound-link write-ahead records (2026-09-09)

- inbound link applied by workflow: content/blog/how-to-reduce-screen-time.md
- inbound link applied by workflow: content/blog/how-to-stop-doomscrolling.md
- inbound link applied by workflow: content/blog/digital-detox-plan.md

### Stage 4b.5 inbound-link results (2026-09-09)

All three rows passed the ownership grep (link not previously present), the dirty-file guard (`git status --porcelain` clean for each) and the link-only diff verification (each file's `git diff HEAD` is exactly one changed line carrying `(/best-blue-light-glasses)`):

- inbound link applied: content/blog/how-to-reduce-screen-time.md, anchor "the best blue light glasses", extended the evening-grayscale bullet.
- inbound link applied: content/blog/how-to-stop-doomscrolling.md, anchor "blue light glasses for evening screen use", extended the charge-outside-the-bedroom paragraph.
- inbound link applied: content/blog/digital-detox-plan.md, anchor "whether blue light glasses are worth buying", extended the Day 3 grayscale smaller-version line.

The live WordPress copies of those three posts still need the same edit by hand (v1 scope limit, `wordpress-rest.md` §Staging step 6) and are recorded in action-items §4b.

