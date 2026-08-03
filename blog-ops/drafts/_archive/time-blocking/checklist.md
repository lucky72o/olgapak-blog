---
slug: time-blocking
target_keyword: time blocking
created: 2026-07-29 23:35
last_updated: 2026-08-03 18:05
current_stage: complete
current_owner: blog-post-workflow
status: complete
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: time-blocking

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/time-blocking/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from `blog-ops/content-plan.md` row 6; no human conversation)
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
- [n/a] research/competitors.md complete (modules.competitors is false) (only if Stage 1.5c ran; sourced from `{competitors_dir}/<slug>.md` profiles; "Ready for facts.md" rows inherit each profile's `**Last verified:**` date verbatim)
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
- [x] draft word count within ±10% of outline roll-up target (2,204 body prose vs 2,350 roll-up)
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Editor spawns the `blog-reviewer` subagent on the latest draft. Agent produces `review.md` with verdict: approve / request_revisions / reject. On `request_revisions`, editor spawns blog-writer in `mode=revise` and loops (max 2 revise iterations, draft-v3 is the ceiling).

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (iteration 2 of max 3; 1 revise pass)
- [x] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

Mandatory final pass. Agent edits the approved draft-v<N>.md in place (with pre-humanize backup + post-flight preservation check for facts, citations, links, markers, headings, frontmatter).

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (0 before, 0 after; draft arrived clean)
- [x] Word count delta within -20% to 0% (2,749 -> 2,748, -0.04%)

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

The editor resolves every `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker automatically (WebSearch/WebFetch against primary/allowlist sources, Chrome fallback) so the human never hand-resolves them. Scope is those two markers only; `[INTERNAL_LINK_NEEDED:]` and `[IMAGE:]` are untouched. Competitor pricing/feature `[VERIFY:]` markers are NOT web-resolved, they route to a Stage 1.5c profile refresh. Fallback when a claim can't be confirmed from an allowlist/primary source: delete the claim (logged). Edits land on the already-humanized draft, so re-lint after.

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]` (0 hits of each)
- [n/a] each non-competitor marker resolved / kept-general / deleted (no markers to resolve; the sole `[VERIFY:]` was already resolved during the Stage 3b revise pass)
- [n/a] every added external URL is allowlist-class (no URLs added at this stage)
- [n/a] facts.md updated to mirror resolutions (nothing to mirror)
- [x] re-lint passed (0 em-dashes, 0 forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`)
- [x] per-marker outcome log appended to Notes

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

Editor spawns the `image-planner` subagent. Agent reads outline + draft `[IMAGE:]` placeholders + facts.md and writes a per-slot plan (type, concept, filename, AI prompt / screenshot instructions / chart spec, alt text).

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured (4 in-post = 4 draft placeholders; featured separate)
- [x] Each entry has production spec populated matching its type (featured `ai-prompt` per config + custom-instructions; in-post 3 `ai-prompt` + 1 `remotion`, 0 screenshot)

**Artifacts:** `images.md`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

Mechanical grep of draft markers + fill action-items template. One checkbox per [VERIFY:], [EXTERNAL_LINK_NEEDED:], [INTERNAL_LINK_NEEDED:], [IMAGE:] marker, plus pre-filled publish steps.

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0 VERIFY / 0 EXTERNAL / 0 INTERNAL / 4 IMAGE)
- [n/a] Authors-map status confirmed per the publish adapter (wordpress-rest has no author map; adapter §6 writes N/A) (`adapters/publish/<adapter>.md` §Action-items sections; e.g. the astro adapter's `authors_map_check` file, if configured)

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

- Plan review opened: 2026-07-29 23:58
- Plan review verdict (iteration 1): request_revisions, 4 issues (title keyword, over-sectioned, timeboxing overlap in the collapse section, unsourced tools claim), 2026-07-30 00:09
- Plan review verdict (iteration 2): approve, all 4 fixes verified; 2 non-blocking residuals logged, 2026-07-30 00:09
- Gate 2 opened: 2026-07-30 14:33 (console-gated; the console owns the approval banner and writes approval.json. No CronCreate monitor started, per the console contract.)
- Gate 2 approved: 2026-07-30 09:51 (console operator, approval.json; PR #13 merged on origin at 09:51:16Z)

## Stage transition log

<append one line per stage transition>

- Finalize completed: 2026-08-03 18:05 (console-merge path: WP 2144 already `publish` so the content sync was skipped; 2 live inbound links applied + 1 already present; archive committed to `main`; worktree removed)
- intake completed: 2026-07-29 23:35 (owner: blog-post-workflow, autopilot file-intake from content-plan.md row 6)
- Stage 3c completed: 2026-07-30 10:15 (preservation PASSED, 1 polish edit)
- Stage 3d completed: 2026-07-30 10:15 (no-op, 0 markers to resolve)
- Stage 4a completed: 2026-07-30 10:21 (5 slots: 1 featured ai-prompt + 4 in-post; archetype negative-space, ledger row appended)
- Stage 4a.5 completed: 2026-07-30 10:34 (5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed)
- Stage 4b completed: 2026-07-30 10:36 (0 human marker TODOs; 5 image verifications + 3 hand-apply inbound links + Rank Math focus keyword)
- Stage 4b.5 completed: 2026-07-30 14:33 (autopilot-cont side effects: auth probe OK, Gutenberg convert w/ Kadence TOC, 5 media uploaded, WP draft 2144 created, PR #13 opened, pr-monitor.json written)
- Stage 4b.5 side effects started: 2026-07-30 14:27 (autopilot-cont, after verification PASS)
- Stage 4b.5 file layout completed: 2026-07-30 10:40 (post staged, 4 embeds resolved, 1 of 3 inbound links applied in repo, branch committed + pushed); side effects DEFERRED to autopilot-cont per CONSOLE_VERIFICATION=on
- Stage 4b.5 staging started: 2026-07-30 10:36
- Stage 4b started: 2026-07-30 10:34
- Stage 4a.5 started: 2026-07-30 10:21
- Stage 4a started: 2026-07-30 10:15
- Stage 3c retry started: 2026-07-30 10:12 (autopilot resume after the 529-Overloaded park; state verified clean, no stale backup)

## Notes

### Stage 4b.5 side effects (autopilot-cont) - 2026-07-30 14:33

Verification PASSED (`verification-result.json` = `{"ok":true}`; build check PASS, vision skipped because no WP draft
existed yet at verify time). This run performed ONLY the deferred side effects; it added no commits, so the PR points at
the exact commit `0aead13` the console verified.

- **Auth probe:** ran ONCE (`GET /wp-json/wp/v2/users/me` -> `{"id":1,"slug":"wpx_admin101"}`). `WP_APP_PASSWORD` is
  defined in `~/.zshrc`, which a non-interactive shell does not source; resolved via a login shell so the secret never
  touched disk, a command line, or any log. No retry was needed, so the lockout rule was never in play.
- **Gutenberg convert:** `md-to-gutenberg.py` with `--extra-blocks` carrying this blog's Kadence TOC (recorded in
  `site-conventions.md` §Table of contents, position `after-intro`). Native blocks only - 52 paragraph, 17 heading,
  4 image, 4 list + 10 list-item, 1 table, 1 kadence/tableofcontents. The classic-block fallback was NOT used. The
  script's defensive frontmatter-strip warning fired as expected (the adapter documents this as normal).
- **Media:** all 5 uploaded, each recorded to `pr-monitor.json` immediately after its own upload (never batched), with
  `sha256` for the skip-before-upload check. IDs captured from each upload RESPONSE, never re-derived by slug lookup -
  which mattered here: WordPress uniquified `featured.png` to `featured-6.png` on disk, so a `slug=featured` lookup
  would have returned a DIFFERENT post's image (the 2026-07-18 cross-post collision). `featured_media` is 2141, verified
  on the stored post.
- **Draft:** lookup-before-create returned empty AND no stored `wp_post_id`, so exactly one draft was created: post
  **2144**, `status: draft`. Category resolved to **Productivity** (term 12, not "Uncategorized"); tags resolved to
  existing terms 15/34/36/33 - none created. Verified via `context=edit`: all blocks intact, TOC present, 0 local-path
  leaks, all 4 in-post `<img src>` pointing at uploaded `source_url`s.
- **PR #13** opened against `main` (https://github.com/lucky72o/olgapak-blog/pull/13). No commits added by this run.
- **`status` stays `draft`.** Nothing in this invocation authorizes a publish or a merge; Gate 2 is the console's.

### Stage 4b.5 staging decisions - 2026-07-30 10:40

**`current_stage` stays `preview`, deliberately.** Under `CONSOLE_VERIFICATION=on` this run performs staging FILE
LAYOUT only (post copied to `content/blog/time-blocking.md`, `[IMAGE:]` embeds resolved, inbound link applied, branch
committed and pushed). The deferred SIDE EFFECTS are the WordPress draft create (adapter §Staging steps 2-5: auth
probe, Gutenberg convert, media upload, draft create) and the `pr-monitor.json` write. Leaving `current_stage=preview`
with no `pr-monitor.json` on disk is exactly the resume signal that routes `autopilot-cont` (or an interactive
`resume`) back into Step 14.5 to perform them. Advancing to `finalize` here would SKIP them.

**`draft: true` is kept in the staged post's frontmatter.** Gate 2 mode is console-gated, so the adapter's
strip-the-draft-mechanism step (which applies only on the async PR path) does not fire. For `wordpress-rest` this line
is documentation-only anyway - the real gate is the WP post's `status: draft`.

**No `_archive/time-blocking/` snapshot was created on disk; the working files are committed at their live path
`blog-ops/drafts/time-blocking/` instead.** The adapter's PR-completeness step writes an early snapshot to
`$WT/blog-ops/drafts/_archive/<slug>/` because in the normal flow the worktree is a SEPARATE tree from the main one.
This run has only ONE tree (the console spawned it directly inside the post's worktree on `blog/time-blocking`), so
materializing `_archive/time-blocking/` here would collide with finalize's `mv blog-ops/drafts/time-blocking ->
blog-ops/drafts/_archive/time-blocking`, nesting it as `_archive/time-blocking/time-blocking`. Committing the files at
their live path gives reviewers the same completeness, and the finalize `mv` + its commit then produce the identical
end state on `main` that every prior post has (`_archive/<slug>/` present, `drafts/<slug>/` gone).

**The asset ownership sentinel is excluded from the commit but kept on disk.** `git reset` unstaged
`blog-ops/assets/time-blocking/.staged-by-blog-workflow` after the scoped `git add`, so it never ships - but it stays
on disk, because finalize's asset ownership check requires it. (The adapter deletes it from the worktree copy; with a
single tree, unstaging is the equivalent that does not break that later check.)

### Stage 4b.5 inbound-link records - 2026-07-30 10:38

Write-ahead ownership records (written BEFORE the edit, per the adapter's step 6c discipline):

- `inbound link applied by workflow: content/blog/how-to-plan-your-week.md`

**Two of the three planned rows have NO markdown in this repo**, so there is nothing local to edit for them. Both
posts ARE live on WordPress (verified HTTP 200 at `olgapak.com/what-is-timeboxing` and
`olgapak.com/planning-tips-to-maximize-productivity`); their markdown simply predates this repo being the source of
truth, so `content/blog/` has no copy. Recorded as action items, which is the same disposition the `wordpress-rest`
adapter's section 4b gives EVERY inbound row anyway (v1 cannot auto-sync a prior post to the live site, since only
THIS post's `wp_post_id` is tracked) - so nothing is lost by the missing local file:

- `content/blog/what-is-timeboxing.md`: not in repo; hand-apply anchor "time blocking" in wp-admin
- `content/blog/planning-tips-to-maximize-productivity.md`: not in repo; hand-apply anchor "how to time block your day" in wp-admin

### Stage 4b.5 image visual backstop - 2026-07-30 10:38

All 5 rendered images inspected (adapter staging step 4b). No defects: nothing overlaps or touches, borders contrast
against their backgrounds, no clipped or wrapped labels, no stray glyphs, watermark legible in each. Notes:

- `featured.png`: title renders verbatim, `olgapak.com` wordmark legible bottom-left, negative-space composition intact.
- `packed-vs-buffered-day.png`: `60% / 20% / 20%` render as real text, watermark intact, hour ticks legible. The
  inner-side tick placement (deviating from the spec's outer side) is correct as built - the outer side carries the
  percentage figures and outer ticks would have collided with them.
- `energy-tagged-tasks.png`: conveys High/Medium/Low as battery CHARGE LEVELS (2 full, 2 half, 1 low) rather than
  rendered words. The planner flagged this as an optional override (convert the slot to `remotion` if a reviewer wants
  the three labels legible as text). It reads clearly as-is, so no re-render was triggered; noted for Gate 2.
- `eleven-am-derail.png`: the bottom block is clipped by the frame deliberately - that IS the concept ("the following
  blocks pushed off the visible grid"), not a rendering defect.

### Stage 3c humanize handoff (retry after the 529 park) - 2026-07-30 10:14

Preservation check **PASSED**. The draft arrived already clean on every mandatory sweep: 0 forbidden phrases (base +
voice.md lists), 0 em-dashes, 0 en-dashes outside numeric ranges, 0 genuine passive-voice or third-person drift. All
four editor-flagged protected passages verified byte-identical against the backup (2.5% supertaskers line, Stanford CTL
attribution, H2 4 recovery mechanic lines 118-125, H2 5 neurodivergent passage lines 146-152), plus 12/12 URLs
hash-matched, 16/16 headings in order, frontmatter byte-identical, and all 4 `[IMAGE:]` placeholders byte-identical.

**One edit only:** line 29 `So why does swapping a list for a calendar change anything?` -> `Why does swapping a list for
a calendar change anything?`, the reviewer's optional polish to vary the duplicated `So <question>?` construction. The
second instance (line 150) sits inside a protected passage and was correctly left alone. Word count 2,749 -> 2,748
(-0.04%). Exact "time blocking" count untouched at 6 body prose / 9 rendered, so the keyword ceiling holds.

### Stage 3d marker auto-resolution: NO-OP - 2026-07-30 10:14

Per-marker outcome log (flows to action-items sections 2 and 3):

- `[VERIFY:]`: **0 markers.** The single v1 marker (the "60 to 90 minutes for a focused block" figure) was already
  resolved inside the Stage 3b revise pass by rewriting both sites as first-person practice rather than a sourced
  claim, so nothing reached this stage. No web research was needed, nothing was deleted here, nothing kept-general.
- `[EXTERNAL_LINK_NEEDED:]`: **0 markers.** All 5 planned external links were placed by the writer at Stage 3a.
- `[INTERNAL_LINK_NEEDED:]`: 0 (out of scope for this stage anyway).
- `[IMAGE:]`: 4, untouched by design, carried into Stage 4a.
- Competitor-routed: 0 (`modules.competitors` is false for this blog).

No edits were made to the draft at this stage, so the humanized state is unchanged and no re-lint regression is
possible; the floor checks were re-run anyway and pass (0 em-dashes, 0 forbidden phrases, 0 residual markers).

**Gate 2 mode: console-gated** (`CONSOLE_RUN_STATE` is set; autopilot run under the operator console). `CONSOLE_VERIFICATION=on`, so staging performs file layout + commit/push only — no PR open, no WP draft create, no `pr-monitor.json` — then emits `ready_for_verification` and exits. No CronCreate monitor is ever started.

**Editorial risk to watch:** cannibalization against the already-published `/what-is-timeboxing`. See brief.md §Other notes.


### Stage 1b incident (recorded for the retro)

Three editor-written files (`brief.md`, `_raw/_serp_selection.md`, `_raw/_reddit_selection.md`) and part of
`_raw/_x_selection.md` were initially written to the **main checkout** (`/Users/slav/work/olgapak-blog/...`)
instead of this worktree, because absolute paths were used instead of cwd-relative ones — the exact failure the
skill's §Path convention warns about. The `blog-researcher` therefore ran with two selection files missing and
recorded that as an open question in `serp.md` / `reddit.md`.

Corrected before Stage 1c: all four files were moved into the worktree (`_x_selection.md` was concatenated so
neither the original body nor the later-appended X reply-capture note was lost), the stray directory was removed
from the main checkout, and the now-stale "no selection file on disk" notes in `serp.md` and `reddit.md` were
patched to RESOLVED. Nothing in the main checkout was overwritten — no `time-blocking` directory existed there
before. No research data was lost.

### Stage 3a writer handoff (for Stage 3b context)

- `draft-v1.md`, 2,204 words body prose excluding FAQ (roll-up target 2,350, range 2,115–2,585); FAQ ~323.
- Markers: 4 `[IMAGE:]` (after H2 1, 3, 4, 5 — H2 2 correctly has none, featured is frontmatter-only), 1 `[VERIFY:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- Editor's independent post-spawn checks all pass: 0 em-dashes, 0 forbidden phrases from `writing-standards.md`, 0 links to any of the 4 forbidden SERP competitors, 5 external links exactly per the outline plan, 5 internal links + the `/ai-tools` CTA all root-relative without trailing slashes, and all 7 H2s matching the outline in order.
- Exact target keyword "time blocking" appears **6 times in post content** (3 in H2 headings, 3 in body prose), within `blog-craft.md`'s 2–8. The writer flagged this as "at ceiling" using a broader variant count; on the exact-phrase measure there is more headroom than that note implies, though not much.

**Writer's two flagged items:**

1. The single `[VERIFY:]` covers "60 to 90 minutes for a focused block" — a number that came from the outline (H3 3.4 + the FAQ direction) but has **no `facts.md` entry**, so the writer correctly refused to state it bare. This is the editor's own sourcing gap, not a writer error, and it is Stage 3d's to resolve or cut.
2. Keyword-density headroom is thin if any rewording pushes usage up.

### Stage 3b iteration 1 note: one issue was an EDITOR error, not a writer error

Review issue #2 (major) flagged the H3 heading "The tools: your calendar is probably enough" as asserting, in a
heading, the exact single-commenter-to-consensus claim `facts.md` forbids. That heading came from **`outline.md`
H3 3.5**, which the editor wrote — the writer followed the structural contract correctly. `outline.md` has been
corrected to "The tools: does the app actually matter?" so the outline and the revised draft do not diverge, and
the correction is annotated in place. The reviewer's minor image-placement row (also sanctioned by the outline's
own wording) was resolved the same way: the outline now specifies placing the H2 3 diagram after the first H3's
body paragraph rather than before that heading.

### Stage 3b iteration 2: residual minors carried into humanize / Gate 2

Reviewer approved with 4 minor issues, none blocking. Three matter downstream:

1. **H2 4's decision trigger has a one-word tension** — it asks whether the day can "absorb the overrun", but branch 1
   still drops the tail item, so "absorb" slightly overpromises. Polish, not a defect.
2. **Two `So <question>?` constructions remain** (lines 29 and 150) after the writer varied the other two.
3. **KEYWORD HEADROOM IS EXHAUSTED.** The exact phrase "time blocking" sits at 6 body / 9 in-post occurrences,
   at the top of `blog-craft.md`'s 2-8 band. **The humanizer and every downstream stage must not add another exact
   instance** — a rewrite that introduces one pushes the post out of band. Flagged explicitly in the humanize spawn.

### PARKED at Stage 3c (humanize) — 2026-07-30

**Reason:** `subagent_failed`. The `blog-humanizer` subagent was dispatched three times (once, then the
policy-permitted re-spawn, then one further attempt after a 90-second wait) and every attempt terminated with
`API Error: 529 Overloaded` — a server-side infrastructure condition, **not** a content or quality failure. The
agent never reached the point of editing prose on any attempt.

**State is clean and fully resumable.** Verified after each termination:
- `draft-v2.md` is byte-for-byte the reviewer-approved draft: 2,749 total words, 0 em-dashes, 4 `[IMAGE:]`
  markers, 0 `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`/`[INTERNAL_LINK_NEEDED:]` markers, all 7 H2s present.
- Attempt 1 wrote `.draft-v2.pre-humanize.md` then died; the backup was confirmed identical to the draft and
  removed. Attempts 2 and 3 died before writing a backup. **No partial humanization was applied and no stale
  backup remains**, so the next humanizer run starts from the same clean state attempt 1 saw.
- `current_stage` is left at `humanize`, which routes a resume straight back to Step 12 (Stage 3c) per the
  workflow's resume table.

**To resume:** `/blogsmith:blog-post-workflow resume time-blocking`. Because the failure was transient
infrastructure, a resume is likely to succeed immediately with no intervention. Everything upstream is done:
research (SERP + Reddit + X), facts, plan (approved at plan-review iteration 2), outline, and the draft
(approved at review iteration 2 with 0 critical / 0 major issues).

**Carry these constraints into the resumed humanize spawn** — they are the reason this stage is delicate:
1. **Keyword ceiling is exhausted:** exact phrase "time blocking" at 6 body / 9 in-post occurrences, the top of
   the 2-8 band. The humanizer must not add another exact instance.
2. **Three protected passages must stay byte-identical:** the 2.5% supertaskers paragraph, the Stanford CTL
   attribution sentence, and the whole H2 5 neurodivergent-reader passage including "Categories, yes.
   Clock-precision per task, no."
3. **All quotations are verbatim from real sources** (8 Reddit users, @mattragland, Parkinson's Law) and are
   off-limits inside the quote marks.
4. **Zero em-dashes** must be preserved.

Remaining after humanize: Stage 3d (marker auto-resolution, expected to be a no-op since the draft carries 0
`[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]` markers), Stage 4a image plan, 4a.5 image generation, 4b action items, and
4b.5 staging (which under `CONSOLE_VERIFICATION=on` stops at file layout + commit/push and emits
`ready_for_verification`).
### Stage 4c live inbound-link records (finalize, `apply_inbound_links_live: true`) - 2026-08-03

WordPress post 2144 is `status: publish` (live at https://olgapak.com/time-blocking), so the adapter's opt-in live
inbound-link pass ran against the three planned rows.

Write-ahead (recorded BEFORE the REST edit, per `wordpress-rest.md` §Live inbound-link application step 3):

- live inbound link planned: `what-is-timeboxing` (wp id 938) -> this post
- live inbound link planned: `how-to-plan-your-week` (wp id 2132) -> this post
- `planning-tips-to-maximize-productivity` (wp id 1258): ALREADY PRESENT, skipped (idempotent no-op) -
  `<a href="https://olgapak.com/time-blocking">Time Blocking</a>` already in its tools/methods list.

Applied (after-state, per step 5 of that section):

- live inbound link applied: `what-is-timeboxing` (wp id 938) -> this post, anchor "time blocking" in the
  "Timeboxing vs time blocking" H2's closing paragraph. HTTP 200, modified 2026-08-03T18:03:41.
  before: `...allocating your day into zones for deep work, meetings, email checks, and other projects.</p>`
  after:  `...email checks, and other projects. If that's closer to how you want to run your day, I've written a
  full walkthrough of <a href="https://olgapak.com/time-blocking">time blocking</a>.</p>`
- live inbound link applied: `how-to-plan-your-week` (wp id 2132) -> this post, anchor "time blocking your days"
  in Step 3 (timeboxing), Parkinson's Law paragraph. HTTP 200, modified 2026-08-03T18:03:42. This brings the LIVE
  post in line with the repo markdown, which already carried the same clause from Stage 4b.5.
  before: `...I've written a full breakdown of <a href="/what-is-timeboxing">how timeboxing works</a>.</p>`
  after:  `...how timeboxing works</a>, and if the weekly plan is where you stall on the daily detail, here's how I
  go about <a href="https://olgapak.com/time-blocking">time blocking your days</a>.</p>`
- `planning-tips-to-maximize-productivity` (wp id 1258): already present, skipped (no write issued).

Verified after the pass: all three live pages render exactly one `/time-blocking` link
(`what-is-timeboxing`, `how-to-plan-your-week`, `planning-tips-to-maximize-productivity`). Action-items §4b's
hand-apply fallback is therefore moot for all three rows.

### Gate 2 finalize (console-merge path) - 2026-08-03

PR #13 was merged on origin at 2026-07-30T09:51:16Z by the console, with `approval.json` on disk as the durable
proof-of-approval. WordPress post 2144 was already `status: publish` when this finalize ran, so the adapter's
step 1 final content sync was SKIPPED (the live post is authoritative; re-pushing the staged markdown snapshot
would have discarded any in-admin edits). No monitor cron existed to delete (console-gated mode never creates one).
The branch archive push is moot because the PR is already merged and `main` has advanced past it, so the terminal
archive was committed directly to `main` instead.
