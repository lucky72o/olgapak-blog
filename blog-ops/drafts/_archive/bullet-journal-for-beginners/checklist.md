---
slug: bullet-journal-for-beginners
target_keyword: bullet journal for beginners
created: 2026-08-26 12:30
last_updated: 2026-08-26 14:35
current_stage: finalize
current_owner: blog-post-workflow
status: active
gate_pending: gate_2_final
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: bullet-journal-for-beginners

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/bullet-journal-for-beginners/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from `blog-ops/content-plan.md` row 17; no human present)
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

- Plan review opened: 2026-08-26 12:55
- Plan review verdict: request_revisions (iteration 1), 6 concrete items, chiefly that the 15.9M-views stat DID have a citable URL in the raw SERP capture; all 6 applied, prior review archived as plan-review-v1.md, 2026-08-26 12:58
- Plan review verdict: approve (iteration 2, the cap), all six revisions verified against the raw data, 2026-08-26 13:03
- Gate 2 opened: ...

## Stage transition log

- intake completed: 2026-08-26 12:30 (autopilot file-intake from content-plan.md row 17)
- Stage 1b research analysis completed: 2026-08-26 12:48 (serp + reddit + x)
- Stage 4b.5 SIDE EFFECTS completed: 2026-08-26 14:35 (autopilot-cont, after verification PASS). PR #19 opened (https://github.com/lucky72o/olgapak-blog/pull/19); WordPress draft 2208 created with 5 media uploaded, featured_media 2204, category Productivity (12), tags 15/36/33/30; pr-monitor.json written. Gate 2 is console-gated: no CronCreate monitor started.
- Stage 4b.5 staging FILE LAYOUT completed: 2026-08-26 14:26, branch blog/bullet-journal-for-beginners pushed (commit 6054124). Side effects (PR open, WP draft create, pr-monitor.json) DEFERRED to autopilot-cont per the console verification handshake (CONSOLE_VERIFICATION=on)
- Stage 4b.5 staging started: 2026-08-26 14:20 (owner: blog-post-workflow)
- Stage 4b completed: 2026-08-26 14:20, 0 VERIFY / 0 EXTERNAL_LINK_NEEDED / 0 INTERNAL_LINK_NEEDED / 4 IMAGE markers; almost every action item is a record rather than a TODO
- Stage 4b started: 2026-08-26 14:18 (owner: blog-post-workflow)
- Stage 4a.5 completed: 2026-08-26 14:16, 5 rendered, 0 prompt-pending, 0 screenshot-pending, 0 failed
- Stage 4a.5 started: 2026-08-26 14:05 (owner: image-builder)
- Stage 4a completed: 2026-08-26 14:04, 5 images (1 featured + 4 in-post); 4 ai-prompt, 1 remotion, 0 screenshot; placeholder count 4 matches in-post entry count 4
- Stage 4a started: 2026-08-26 13:56 (owner: image-planner)
- Stage 3d completed: 2026-08-26 13:56, resolved 1, kept-general 1 (marker dropped), deleted 0, competitor-routed 0; re-lint passed
- Stage 3d started: 2026-08-26 13:49 (owner: blog-post-workflow, editor role)
- Stage 3c completed: 2026-08-26 13:48, preservation check PASSED; 3 burstiness injections in the setup/rapid-logging sections, 0 forbidden phrases before and after, 0 em-dashes before and after, word count 3,501 to 3,495 (-0.17%)
- Stage 3c started: 2026-08-26 13:46 (owner: blog-humanizer)
- Stage 3b review iteration 2 completed: 2026-08-26 13:44, verdict APPROVE (0 critical, 0 major, 3 minor); 2 of the 3 minors hand-applied by the editor, the third is a Gate 2 confirmation item
- Stage 3b review iteration 2 started: 2026-08-26 13:36 (owner: blog-reviewer)
- Stage 3b revise iteration 2 completed: 2026-08-26 13:35, draft-v2.md written; body prose 2,874 (+4.5% vs 2,750), FAQ trimmed 339 to 282; VERIFY marker count 1 to 0
- Stage 3b revise iteration 2 started: 2026-08-26 13:32 (owner: blog-writer)
- Stage 3b review iteration 1 completed: 2026-08-26 13:29, verdict request_revisions (0 critical, 2 major, 7 minor); review archived as review-v1.md
- Stage 3b review iteration 1 started: 2026-08-26 13:17 (owner: blog-reviewer)
- Stage 3a completed: 2026-08-26 13:16, body prose 2,793 words (roll-up target 2,750, +1.6%), draft-v1.md written
- Stage 3a started: 2026-08-26 13:10 (owner: blog-writer)
- Stage 2 outline completed: 2026-08-26 13:08, auto-progressing to Stage 3a (no human gate); roll-up 2,750 body-prose words vs plan target 2,600-3,000
- Stage 1c.5 plan review completed: 2026-08-26 13:03, verdict approve after 1 revision pass; plan.md status=approved; Stage 2 outline started (no human gate)
- Stage 1c plan synthesis completed: 2026-08-26 12:55; plan_review opened: 2026-08-26 12:55
- Stage 1.5b X fetch completed: 2026-08-26 12:42, Top tab kept (on-topic after scroll), 4 posts selected, 4 fetched, 0 failed
- Stage 1.5a Reddit fetch completed: 2026-08-26 12:37, 5 threads selected, 5 fetched, 0 failed (chrome transport, primary)
- Stage 1a SERP fetch completed: 2026-08-26 12:35, 6 selected, 0 failed (page 1 held only 7 organic results; 1 Reddit result deferred to Stage 1.5a, 1 YouTube result skipped)

## Notes

### Stage 4b.5 side effects (autopilot-cont, 2026-08-26 14:35)

The deferred half of Stage 4b.5, run after the console's verification PASS. File layout was already
done by the fresh run; this pass did only the side effects.

- **PR #19 opened**: https://github.com/lucky72o/olgapak-blog/pull/19 (`blog/bullet-journal-for-beginners` -> `main`, 2 commits). No PR existed for the branch beforehand and the branch was already in sync with origin, so nothing had to be re-pushed.
- **Auth probe run exactly once** and passed (user id 1, Olga Pak). Not retried, not polled, per the lockout rule.
- **Gutenberg conversion, native path** (not the classic-block fallback): 64 paragraph, 25 list, 18 heading, 4 image, 1 table blocks, plus the Kadence dynamic TOC block injected `after-intro` from `site-conventions.md` §Table of contents. The converter's "stripping frontmatter defensively" warning is the expected one for this adapter, not a problem.
- **5 media uploaded**, ids captured from each upload RESPONSE and written to `pr-monitor.json` after every single upload rather than batched. Worth noting: WordPress uniquified `featured.png` to `featured-6.png` (attachment 2204) because earlier posts already hold the `featured` slug. That is exactly the case the adapter warns about, and the id came from the upload response, so no cross-post collision is possible here.
- **All 4 in-post image refs rewritten** from local relative paths to their uploaded `source_url`. Verified against the live post's `content.raw`: zero local path leaks remain.
- **Draft 2208 created** after the double check (no stored `wp_post_id` AND an empty slug lookup on both `status=draft` and `status=any`). `featured_media` 2204, category Productivity (12) so it never ships Uncategorized, all 4 frontmatter tags resolved to existing terms (15, 36, 33, 30, none needed creating), author 1 per the v1 authenticated-user rule.
- **Status is `draft`.** Publishing stays a human action in WP admin; nothing here publishes.
- **Rank Math focus keyword is still unset** and cannot be set over standard REST (`site-conventions.md` §SEO plugin). It remains action-items §7, mandatory before publish.
- Gate 2 is console-gated, so no CronCreate PR monitor was started and this run does not block on input.

### Stage 4b.5 staging result (2026-08-26 14:26)

**File layout done; side effects deliberately NOT done.** `CONSOLE_VERIFICATION=on`, so per
`references/console-contract.md` §Verification handshake this run performs the staging file layout
(copy to `content_dir`, resolve `[IMAGE:]`, inbound links, worktree commit + push) and stops. The
PR-open, the WordPress draft create and the `pr-monitor.json` write are `autopilot-cont`'s job
after verification passes. Terminal event emitted: `ready_for_verification`, and NOT `done`.

- Collision guard: `content/blog/bullet-journal-for-beginners.md` does not exist on `origin/main`. Clear.
- Branch rebase (MANDATORY per adapter step 6b2): the console-created branch had zero commits of
  its own but trailed `origin/main` by 3 commits, which is exactly the defect that step exists to
  catch. Fast-forwarded onto `origin/main` before staging anything. Checked first that none of the
  3 incoming commits touched a dirty file in this tree; they did not.
- 4 `[IMAGE:]` placeholders resolved to real embeds, every path confirmed to point at a file that
  exists. Zero build-safe "Image pending" notes were needed.
- `draft: true` KEPT in frontmatter. For `wordpress-rest` it is documentation-only, not a build
  exclusion: the WP `status` field does the real gating, and the frontmatter template's own quality
  gate requires the line to be present.
- No cover/hero frontmatter field, correct for this adapter. The featured image attaches as
  `featured_media` at the WP-draft-create step, which is deferred.
- Visual backstop (adapter step 3b): all 5 rendered images inspected directly. Featured lettering
  correct character for character including the `4`; the Remotion diagram's labels match the post's
  own terminology and both migration arrows are right; the daily-log image gets all five pen marks
  right; nothing overlaps, clips, or garbles. The featured/Image-1 collision the reviewer caught at
  Stage 3b is genuinely resolved: a typographic "4 pages" hero versus a phone-scrolling scene.
- Commit 6054124 also carries the `tools/remotion/src/Root.tsx` repair. Flagged in the commit body
  and in action-items §1, because it is a fix to shared infrastructure, not to this post.

### Stage 4b.5 inbound-link write-ahead record (2026-08-26 14:22)

Written BEFORE the edits, per the adapter's write-ahead rule. These three paths are the durable
authority for "the workflow inserted this link", not link-presence on disk.

- inbound link applied by workflow: content/blog/how-to-plan-your-week.md
- inbound link applied by workflow: content/blog/best-notebooks-for-note-taking.md
- inbound link applied by workflow: content/blog/digital-vs-paper-notes.md

All three passed the ownership grep (link not yet present) and the dirty-file guard
(`git status --porcelain` empty) before any edit was made, and all three then passed the
Link-only diff verification at admission: exactly one hunk each, one removed line plus the same
line with the link added (the extended-sentence pattern the adapter recognises as attributable),
the link present in the added line, and no em-dashes introduced. All three admitted to
`<edited inbound posts>` and committed.

### Stage 3d per-marker outcome log (2026-08-26 13:56)

Two `[EXTERNAL_LINK_NEEDED:]` markers, zero `[VERIFY:]` (that one was already closed at Stage 3b).

1. **H2 6, the task-offloading claim: RESOLVED, and the claim was corrected in the process.**
   Cited https://users.wfu.edu/masicaej/MasicampoBaumeister2011JPSP.pdf (Masicampo and Baumeister
   2011, JPSP 101(4) 667-683), served from the first author's own Wake Forest faculty page, a
   `.edu` allowlist domain. The PDF was fetched and its abstract read directly rather than trusted
   from a search snippet, and that is what caught the problem: the draft's sentence credited
   *writing the task down*, but the paper credits *making a specific plan* ("Allowing participants
   to formulate specific plans for their unfulfilled goals eliminated the various activation and
   interference effects"). Bare capture is not a plan. The sentence was rewritten to credit the
   decision instead, which is both what the source supports and a stronger argument for migration,
   the one part of the method that forces a decision. Mirrored to `facts.md` §Statistics with an
   explicit scope warning.
2. **FAQ ADHD answer: KEPT GENERAL, marker DROPPED.** Searched for a primary or allowlist source
   on bullet journalling and ADHD and found only blogs and commercial planner sites; nothing
   peer-reviewed, no `.edu`, no recognised ADHD organisation. Per the Stage 3d fallback the choice
   was delete-the-claim or keep a defensible general version, and inspection showed there was no
   claim to delete: the answer describes the migration mechanic (sourced elsewhere) and then
   explicitly declines to predict who it suits. The marker was dropped and the answer left intact.
   A citation there would have been decoration. Logged in `facts.md` §Rejected.

Also discharged at this stage, since both were flagged `needs verification` in `facts.md`:

- **Scientific American** returns 200 and does contain the quoted line verbatim, in "The Reading
  Brain in the Digital Age: The Science of Paper versus Screens" by Ferris Jabr.
- **The YouTube figure** was checked live in the browser: "15m views", runtime 4:11,
  `uploadDate` 2015-05-21. The draft says "more than 15 million times", "four minutes" and
  "eleven years old"; all three are accurate and all three round down from what YouTube reports.

Re-lint after the edits: 0 em-dashes, 0 en-dashes, 0 residual markers, 0 forbidden phrases,
0 links to a top-10 SERP URL, and all 8 external URLs return HTTP 200.

### Stage 3b iteration-2 approve, and the three minors (2026-08-26 13:46)

Verdict `approve` on `draft-v2.md`, 0 critical / 0 major / 3 minor. The reviewer noted two of the
three traced to imprecision in its own iteration-1 instructions and that none justified a third
writer pass. Editor applied two by hand:

- **Applied.** Deleted the duplicated "in r/BasicBulletJournals" from line 170; the subreddit is
  already named in the preceding sentence and carried by the link.
- **Applied.** Restored a bridge to the ADHD FAQ answer, which the FAQ trim had left opening
  mid-thought: it now begins "The part people usually mean is migration." No clinical claim added,
  the `[EXTERNAL_LINK_NEEDED:]` marker is untouched.
- **CARRIED TO GATE 2, not applied.** Line 56's personal beat contains two biographical
  specifics that appear in no profile doc: that Olga put off building her blog for "months", and
  that "The first page took one evening." `voice.md` §Personal-anecdote bank records the anecdote
  itself but attaches no duration to it, so the writer supplied those details. Only Olga can
  confirm them. If either is wrong, the reviewer's minimal edit preserves the beat:
  "I put off building my own blog for far longer than it deserved because HTML and CSS sounded
  like something you needed a qualification for. The first page took an evening. Face-palm city."
  This is the single item on this post that genuinely needs the author's eye.

### Stage 3b editor actions taken outside the writer's revise block (2026-08-26 13:32)

- **The `[VERIFY:]` claim is now resolved and promoted to `facts.md`.** The reviewer's §10 note
  said it could be closed without a fetch; the editor went further and counted the raw capture
  `research/_raw/reddit-10-basicbujo.json` directly (all 20 comments, nested included). Seven
  commenters explicitly describe keeping appointments in a digital calendar while the notebook
  keeps everything else, so "at least five" is comfortably true and the stronger number is
  available. Worth recording that `research/reddit.md`'s own list was partly wrong: it named
  u/pet_a_ghost and u/RhiaMaykes, both of whom split appointments into PAPER planners, not
  digital ones. The raw file is the authority. Consequence: the writer is told to DROP the marker
  in draft-v2 (superseding review §9 item 5's "leave the marker" clause, per the reviewer's own
  §10 recommendation) while keeping the reviewer's rewritten sentence.
- **`outline.md` §Image placement plan corrected** so Stage 4a cannot reintroduce the featured
  versus H2-2 image collision the reviewer found. The collision originated in the outline, not the
  draft, so fixing only the `[IMAGE:]` description would have left the planner free to repeat it.

### Stage 3a writer handoff (2026-08-26 13:16)

- `draft-v1.md`, body prose 2,793 words (roll-up target 2,750, +1.6%); FAQ 339 (target ~250, ran
  long to keep answers standalone-quotable); grand total 3,132 against a plan range of 2,600-3,000.
- Markers: 4 `[IMAGE:]` (after H2 2, 4, 5, 7), 2 `[EXTERNAL_LINK_NEEDED:]` (H2 6 task-offloading,
  FAQ ADHD), 1 `[VERIFY:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- Editor's post-spawn checks all passed: 0 em-dashes / en-dashes / `&mdash;` / `&#8212;`;
  0 forbidden phrases from writing-standards.md or voice.md; 0 of the 7 forbidden top-10 SERP
  URLs; 0 Amazon or affiliate links and no disclosure paragraph (as designed); frontmatter valid
  with 4 tags all drawn from the live taxonomy; 5 blog internal links plus the `/ai-tools` CTA,
  all root-relative with no trailing slash; headings match the outline exactly.
- Writer's three flags for the editor: (1) the single `[VERIFY:]` is on "at least five people in
  the same thread", which IS traceable to `research/reddit.md` (five named commenters) but was not
  in facts.md, so it was marked rather than asserted; (2) H2 4 ran 555 vs its 500 budget, offset by
  a 166-word intro against ~200; (3) the optional @kellyangyang X quote was dropped from H2 8 on
  budget, and no sixth "completion" symbol was invented for the rapid-logging table since facts.md
  lists only five.
- Editor note for Stage 3d: that `[VERIFY:]` is resolvable from our own raw research
  (`research/_raw/reddit-10-basicbujo.json`) rather than the open web, and it is not a competitor
  claim, so it does not route to a profile refresh.

- Autopilot run under the operator console (`CONSOLE_RUN_STATE` set, `CONSOLE_VERIFICATION=on`).
  Gate 2 is console-gated: no CronCreate monitor, no typed-input block, terminal event is
  `ready_for_verification`.
- Intent recorded as `how_to`; the Stage 2 outline intent-match self-check should confirm this
  against the observed SERP shape in `research/serp.md` §Search intent and rebalance toward
  `informational_pillar` if the live results are broad beginner pillars rather than step guides.
- Affiliate policy: any tagged Amazon link in the supplies section makes the standing
  disclosure paragraph mandatory at the end of the intro.
