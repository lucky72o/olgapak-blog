---
slug: how-to-reduce-screen-time
target_keyword: how to reduce screen time
created: 2026-08-08 22:19
last_updated: 2026-08-11 18:31
current_stage: preview
current_owner: blog-post-workflow
status: active
gate_pending: none
# status values: active | paused | complete | abandoned
# current_stage values: intake | chrome_fetch | serp_select | serp_deep_fetch | reddit_fetch | reddit_select | reddit_deep_fetch | x_fetch | x_select | x_deep_fetch | competitor_check | analyze_research | synthesize_plan | plan_review | outline | draft | review | humanize | resolve_markers | images | generate_images | action_items | preview | finalize | repurpose | complete
# current_owner values: human | blog-post-workflow | blog-researcher | blog-writer | blog-reviewer | blog-humanizer | image-planner | image-builder | plan-reviewer
# gate_pending values: none | gate_2_final
---

# Checklist: how-to-reduce-screen-time

Machine-readable state in the frontmatter above. Human-readable progress below. Editor updates both on every stage transition.

## Stage 0: Intake

- [x] brief.md filled in (blog-ops/drafts/how-to-reduce-screen-time/brief.md)
- [x] Slug approved by human (autopilot: slug taken verbatim from `blog-ops/content-plan.md` row 12; no human asked)
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

Enabled (brief.md "Research sources enabled, reddit: yes"; `modules.reddit_research: true`). Transport: `chrome` (primary) per `research.reddit_transport`.

- [x] research/_raw/_reddit_search.json written (Reddit search results metadata: ~20 threads, no thread bodies)
- [x] research/_raw/_reddit_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/reddit-NN-*.json written (per-thread deep-fetched data: post body + top comments)

**Artifacts:** `research/_raw/_reddit_search.json`, `research/_raw/_reddit_selection.md`, `research/_raw/reddit-NN-*.json` (≤5 files)

### Stage 1.5b: X research (OPTIONAL, owner: blog-post-workflow skill)

Enabled (brief.md "Research sources enabled, x: yes"; `modules.x_research: true`).

- [x] research/_raw/_x_search.json written (X search results metadata: ~20 posts, truncated text only)
- [x] research/_raw/_x_selection.md written (editor's rationale for the up-to-5 picks)
- [x] research/_raw/x-NN-*.json written (per-post deep-fetched data: full text + top replies)

**Artifacts:** `research/_raw/_x_search.json`, `research/_raw/_x_selection.md`, `research/_raw/x-NN-*.json` (≤5 files)

### Stage 1.5c: Competitor profile freshness re-check

**N/A — `modules.competitors: false` in `blog-ops/config.yaml`.** Stage never entered; brief.md carries no "Competitors to mention" table.

### Stage 1b: Research analysis (owner: blog-researcher subagent, no MCP)

The researcher reads ALL completed `_raw/` artifacts and produces one analysis file per source.

- [x] research/serp.md complete (always; includes "Citations harvested from competitors" section so editor can route around forbidden SERP-competitor URLs)
- [x] research/reddit.md complete (only if Stage 1.5a ran)
- [x] research/x.md complete (only if Stage 1.5b ran)
- [x] research/competitors.md — N/A (competitors module off)
- [x] product reference loaded (editor reads `blog-ops/profile/product.md` directly; `modules.product: true`)

**Artifacts:** `research/serp.md`, optionally `research/reddit.md`, optionally `research/x.md`

### Stage 1c: Plan synthesis (owner: blog-post-workflow skill / editor role)

- [x] facts.md compiled (editor synthesizes from research/serp.md + product reference)
- [x] plan.md drafted (editor)
- [x] **Stage 1c.5: plan-reviewer approves plan** (automated, no pause)

**Artifacts:** `facts.md`, `plan.md`

---

## Stage 2: Outline (owner: blog-post-workflow skill / blog-editor role)

Triggered after Stage 1c.5 plan review approves. **No human gate**, the editor's editorial judgment closes Stage 2 and the workflow auto-progresses to Stage 3a (drafting).

- [x] outline.md drafted (every H2 cites ≥1 fact from facts.md; word count roll-up within plan target)
- [x] outline.md status set to `approved`; checklist `current_stage=draft` (auto-progresses, no human gate)

**Artifacts:** `outline.md`

---

## Stage 3: Writing (owner: blog-writer subagent)

### Stage 3a: Draft (owner: blog-writer subagent)

- [x] draft-v1.md generated by blog-writer (frontmatter per the publish adapter's frontmatter template + 4-paragraph intro + body H2s per outline + FAQ + outro)
- [x] draft word count within ±10% of outline roll-up target
- [x] writer's handoff summary recorded in Notes below (word count, `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` / `[INTERNAL_LINK_NEEDED:]` / `[IMAGE:]` marker counts)

**Artifacts:** `draft-v1.md`

### Stage 3b: Editor review + revise loop (owner: blog-reviewer + blog-writer subagents)

Max 2 revise iterations, draft-v3 is the ceiling.

- [x] review.md written with a Verdict
- [x] Verdict = `approve` (if not on first try, iterations ≤ 2)
- [x] Prior-iteration reviews archived as review-v<N>.md (if revise loop ran)

**Artifacts:** `review.md` (current iteration), optionally `review-v<N>.md` + `draft-v2.md` / `draft-v3.md`

---

## Stage 3c: Humanize (owner: blog-humanizer subagent)

- [x] blog-humanizer subagent spawned
- [x] Preservation check: PASSED
- [x] Forbidden-phrase count: 0 (or surviving hits flagged with line numbers)
- [x] Word count delta within -20% to 0%

**Artifacts:** final `draft-v<N>.md` (humanized in place)

---

## Stage 3d: Marker auto-resolution (owner: blog-post-workflow skill / editor role, main session, web tools)

- [x] draft grepped for `[VERIFY:]` + `[EXTERNAL_LINK_NEEDED:]`
- [x] each marker resolved (cited from primary/allowlist), kept-general (marker dropped), or claim deleted
- [x] every added external URL is allowlist-class, not a `research/serp.md` top-10 URL, and returns HTTP 200
- [x] facts.md updated to mirror resolutions
- [x] re-lint passed (0 em-dashes, no forbidden phrases, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`)
- [x] per-marker outcome log appended to Notes (flows to action-items §2/§3)

**Artifacts:** `draft-v<N>.md` (markers resolved in place), `facts.md` (updated)

---

## Stage 4a: Image plan (owner: image-planner subagent)

- [x] images.md written, one entry per [IMAGE:] placeholder + 1 featured
- [x] Each entry has production spec populated matching its type

**Artifacts:** `images.md`

## Stage 4a.5: Generate images (owner: image-builder subagent)

- [x] file-producing slots (`remotion`, `ai-prompt`) rendered into `blog-ops/assets/how-to-reduce-screen-time/` — 4 of 4 (`featured.png`, `two-piles-of-screen-time.png`, `phone-charging-across-the-room.png`, `past-the-limit-then-friction.png`); `screen-time-dashboard.png` is `screenshot` and stays manual
- [x] `.staged-by-blog-workflow` sentinel present
- [x] featured-slot completion gate passed (featured file on disk; slot is `ai-prompt`, file-producing)

**Artifacts:** `blog-ops/assets/how-to-reduce-screen-time/*`

## Stage 4b: Action items compile (owner: blog-post-workflow skill)

- [x] action-items.md written with every section filled
- [x] Marker checkbox counts match grep output (0 VERIFY / 0 EXTERNAL / 0 INTERNAL / 4 IMAGE)
- [x] Authors-map status confirmed per the publish adapter (N/A for `wordpress-rest`)

**Artifacts:** `action-items.md`

## Stage 4b.5: Stage the post (owner: blog-post-workflow skill, wordpress-rest adapter)

- [x] post staged to `content/blog/how-to-reduce-screen-time.md` (`draft: true` stripped, 3 of 4 `[IMAGE:]` resolved to embeds, 1 left as a build-safe "Image pending" note for the `screenshot` slot; no cover frontmatter field — the WP adapter attaches the featured image as `featured_media` at draft-create, and `featured.png` is on disk)
- [x] inbound internal links applied to all 3 planned targets (write-ahead ownership records in Notes, all 3 passed Link-only diff verification: single hunk, extended-sentence edit)
- [x] worktree branch committed + pushed (`blog/how-to-reduce-screen-time` @ 510eb7a, based on `origin/main` 6b2d666, 0 divergent commits so no rebase was needed)
- [ ] staging side effects (WP draft / PR) — deferred to `autopilot-cont` under `CONSOLE_VERIFICATION=on`

## Stage 4c: Gate 2 + Finalize (owner: blog-post-workflow skill)

Console-gated. Approval is `approval.json`, written only by the operator's browser Approve action. No cron monitor, no typed input, no auto-publish.

- [ ] Gate 2 opened (console)
- [ ] `approval.json` present
- [ ] draft published/staged to `content/blog/how-to-reduce-screen-time.md`
- [ ] asset folder created at `blog-ops/assets/how-to-reduce-screen-time/` (with images.md as README.md)
- [ ] `blog-ops/drafts/how-to-reduce-screen-time/` archived to `blog-ops/drafts/_archive/how-to-reduce-screen-time/`

**End state:** `status=complete`, `current_stage=complete`.

---

## Stage 5: Repurpose

**N/A — `modules.repurpose: false`.**

---

## Gate log

- Plan review opened: 2026-08-08T21:48Z
- Plan review verdict (iteration 1): request_revisions, sections 3-4 risked cannibalizing how-to-stop-doomscrolling + digital-detox-plan, 2026-08-08T21:52Z
- Plan review verdict (iteration 2): approve, all fixes landed; one residual link-placement note closed by the editor immediately, 2026-08-08T21:56Z

## Stage transition log

- intake completed: 2026-08-08T21:19Z (owner: blog-post-workflow, AUTOPILOT file-intake from content-plan.md row 12)
- Stage 1a started: 2026-08-08T21:19Z (owner: blog-post-workflow)
- SERP fetch completed: 2026-08-08T21:26Z, 7 selected, 0 failed
- Stage 1.5a Reddit completed: 2026-08-08T21:27Z, 5 threads selected, 0 failed (chrome transport, primary)
- Stage 1.5b X completed: 2026-08-08T21:33Z, 5 posts selected, 0 failed
- Stage 1b started: 2026-08-08T21:34Z (owner: blog-researcher), sources=serp,reddit,x
- Stage 1b completed: 2026-08-08T21:42Z, serp.md + reddit.md + x.md written
- Stage 1c completed: 2026-08-08T21:48Z, facts.md + plan.md written, plan status awaiting_plan_review
- Stage 1c.5 plan review opened: 2026-08-08T21:48Z (owner: plan-reviewer)
- Stage 1c.5 completed: 2026-08-08T21:56Z, verdict approve after 1 revision pass, plan status approved
- Stage 2 outline started: 2026-08-08T21:56Z (owner: blog-post-workflow)
- outline completed: 2026-08-08T22:02Z, auto-progressing to Stage 3a (no human gate); roll-up 2,900 words vs plan target 2,600-3,000
- Stage 3a started: 2026-08-08T22:02Z (owner: blog-writer)
- Stage 3a completed: 2026-08-08T22:04Z, 2,983 body-prose words (writer count; editor naive count 3,150 incl. markdown/marker text), draft-v1.md written
- Stage 3b review iteration 1 started: 2026-08-08T22:05Z (owner: blog-reviewer)
- Stage 3b review iteration 1 verdict: request_revisions (0 critical, 1 major, 6 minor; 4 unsourced generalizations), 2026-08-08T22:14Z; archived as review-v1.md
- Stage 3b revise iteration 2 started: 2026-08-08T22:15Z (owner: blog-writer)
- Stage 3a revise completed: 2026-08-08T22:18Z, draft-v2.md written, 3,030 body-prose words, diff is 8 lines (7 verbatim §9 edits + 1 pronoun-consistency follow-through in the same sentence pair)
- Stage 3b review iteration 2 started: 2026-08-08T22:19Z (owner: blog-reviewer)
- Stage 3b review iteration 2 verdict: approve (0 critical, 0 major, 1 minor; unsourced numeric claims 4 -> 0), 2026-08-08T22:24Z
- Stage 3c started: 2026-08-08T22:25Z (owner: blog-humanizer), target draft-v2.md
- Stage 3c completed: 2026-08-08T22:31Z, preservation check PASSED, word delta 3588 -> 3564 total (-0.7%)
- Stage 3c editor follow-up: 2026-08-08T22:32Z, three inline corrections (see Notes)
- Stage 3d started: 2026-08-08T22:32Z (owner: blog-post-workflow)
- Stage 3d completed: 2026-08-08T22:44Z, resolved 1, kept-general 0, deleted 1 (a retracted figure), competitor-routed 0; plus 3 unrequested accuracy corrections to how the cited study is described
- Stage 4a started: 2026-08-08T22:44Z (owner: image-planner)
- Stage 4a completed: 2026-08-08T22:52Z, 5 images (1 featured ai-prompt + 4 in-post: 1 remotion, 1 screenshot, 2 ai-prompt); in-post entries 4 == draft placeholders 4
- Stage 4a.5 started: 2026-08-08T22:53Z (owner: image-builder)
- Stage 4a.5 re-entered after prior run died mid-render: 2026-08-11T18:10Z (owner: image-builder); assets dir was empty, no expected file-producing filenames present, so the builder runs all slots
- Stage 4a.5 completed: 2026-08-11T18:20Z, 4 rendered, 0 prompt-pending, 1 screenshot-pending (`screen-time-dashboard.png`), 0 failed; featured gate passed; two re-renders done inside the builder (Remotion tab glyph, "Ignore Limit" text clipping); new Remotion source `tools/remotion/src/TwoPilesOfScreenTime.tsx` + `Root.tsx` registration
- Stage 4b started: 2026-08-11T18:21Z (owner: blog-post-workflow)
- Stage 4b completed: 2026-08-11T18:24Z, action-items.md written; markers 0 VERIFY / 0 EXTERNAL / 0 INTERNAL / 4 IMAGE; 1 outstanding human build TODO (the screenshot slot)
- Stage 4b.5 staging started: 2026-08-11T18:24Z (owner: blog-post-workflow, wordpress-rest adapter)
- Stage 4b.5 FILE LAYOUT completed: 2026-08-11T18:33Z, branch `blog/how-to-reduce-screen-time` committed (510eb7a) + pushed. Commit carries: the staged post, 4 asset files + README.md (images.md copy), the archive snapshot (non-terminal, incl. research/_raw in full), this post's featured-log rotation entry + the legacy table, the 3 inbound-link edits, and the Remotion sources (`TwoPilesOfScreenTime.tsx` + `Root.tsx` registration). The `.staged-by-blog-workflow` sentinel was deliberately kept on disk but excluded from the commit, so it never ships while the ownership guard survives.
- Stage 4b.5 SIDE EFFECTS deferred: 2026-08-11T18:33Z. Under `CONSOLE_VERIFICATION=on` the WP-draft create, media upload, and `pr-monitor.json` write belong to the later `autopilot-cont` run (console-contract.md §Verification handshake). The WP auth probe was therefore NOT run this session — it fires exactly once, inside that run's adapter §Staging step 2.
- autopilot-fix round 1: 2026-08-11T18:29Z. Verification build check FAILED with `image referenced in images.md not found: screen-time-dashboard.png` — the console's wordpress-rest build check requires EVERY `**Suggested filename:**` in images.md to exist non-empty on disk, which a `screenshot` slot never does (the workflow's own design ships those as a build-safe "Image pending" note instead; the two rules contradict each other, see retro). No automated path can capture a real phone dashboard in a headless run, so the slot was DROPPED rather than faked: removed the `[IMAGE:]` placeholder from `draft-v2.md` and the "Image pending" blockquote from the staged post, marked images.md §Image 2 dropped (its `Suggested filename` field retired so the build check no longer demands the file; the full capture spec kept for a later post-publish add), updated the images.md summary/tree/tools counts (5 → 4, screenshots 1 → 0), re-synced `blog-ops/assets/how-to-reduce-screen-time/README.md` and the `_archive` PR snapshot, and rewrote action-items §1/§7/§8 + the final image checkbox. Post now ships 4 images (featured + 3 in-post) and carries no placeholder text.
- Terminal event emitted: `ready_for_verification` (no `done` — the two are mutually exclusive)

## Notes

### Stage 4b.5 inbound-link ownership records (write-ahead)

Written BEFORE the edit, per `adapters/publish/astro-git-pr.md` §Staging step 6c. These are the durable authority for "the workflow inserted this link" — link presence alone never is.

- inbound link applied by workflow: `content/blog/how-to-stop-doomscrolling.md`
- inbound link applied by workflow: `content/blog/digital-detox-plan.md`
- inbound link applied by workflow: `content/blog/time-blocking.md`

All three were verified clean at admission time: link absent, `git status --porcelain` empty, no prior record.

### Stage 3d marker auto-resolution log

Per-marker outcomes (flows to action-items.md §2/§3):

- `[VERIFY: an X user reported getting their daily screen time under 90 minutes ...]` (draft L104) — **resolved, marker dropped, no citation added.** The figure was confirmed verbatim in our own deep-fetched raw file `research/_raw/x-02-aviralbhat.json` ("I've been trying to reduce screen time and have got down to <90 mins"). It is one person's self-report, attributed in prose as "one person on X", not presented as a statistic; a personal x.com post is not allowlist-class so it correctly carries no external link. Mirrored into `facts.md` §Quotes.
- `[EXTERNAL_LINK_NEEDED:]` — none present.

**Three accuracy corrections beyond the markers.** Verifying the post's most important citation (`academic.oup.com` 403s to curl, so it was opened in the logged-in browser) showed the paper is stricter and more specific than the SERP write-up implied. It is Castelo, Kushlev, Ward, Esterman & Reiner, PNAS Nexus 4(2), 18 Feb 2025, and the intervention **blocked all mobile internet on participants' phones for two weeks** rather than asking them to cut back:

1. **"Slept about 20 minutes more per night" — DELETED from the post (two places).** That number appears only in the georgetown.edu write-up, a forbidden SERP source, and is absent from the primary article, which reports only a small self-reported sleep increase (dz = 0.14, P = 0.016). Replaced with "reported sleeping a little more" plus an explicit note that the effect was small. `facts.md` records it as retracted so it can never be restored.
2. **The intervention is now described honestly** in all three places that cite it, instead of as "the reduction they'd signed up for" — otherwise the post cites a real source for more than it says. The FAQ also now states the intervention was stricter than anything the guide recommends.
3. **"Halved... to around two and a half hours" corrected to "to under three"** — the article reports 314 min/day falling to 161 min/day (2h41m). Compliance re-scoped to the article's own definition: the block active for at least 10 of 14 days, met by 25.5% of those who committed.

Both surviving numeric claims (91% improved on at least one outcome; ~a quarter complied) were confirmed verbatim in the primary article.

Every external URL verified: 4 return HTTP 200 to curl; `academic.oup.com` returns 403 to curl (Cloudflare bot protection) but loads correctly in the browser, title "Blocking mobile internet on smartphones improves sustained attention, mental health, and subjective well-being".

Final re-lint on draft-v2: 0 em-dashes, 0 en-dashes, 0 residual `[VERIFY:]`/`[EXTERNAL_LINK_NEEDED:]`, 4 `[IMAGE:]` intact, 0 forbidden SERP URLs, 5 external links, 6 internal links, target keyword 4x, body prose 3,126 words.

### Stage 3c humanize handoff + editor corrections

- Humanizer: preservation check PASSED (all 5 external URLs, 6 internal links, 4 `[IMAGE:]`, 1 `[VERIFY:]`, 13 headings, frontmatter, quotes and numeric literals byte-identical). Forbidden phrases 0 -> 0. Em-dashes 0 -> 0. 1 passive -> active conversion. Burstiness already strong, no injections. Word delta -0.7%. Target keyword held at 4.
- **Editor caught a regression the preservation check cannot see.** Rewording the FAQ grayscale answer, the humanizer reintroduced an unsourced population + timeframe claim ("most people switch it back within a day") — the exact defect class the Stage 3b reviewer removed at iteration 1. Preservation only guards existing facts, links and markers; it does not detect a NEW unsourced claim. Fixed inline to "undoing it takes one tap, usually the first time a photo needs real color" (claim-free, and it still breaks the L117 echo the humanizer was asked to fix).
- Two further editor corrections in the same pass: softened "most people have never found the screen" -> "plenty of people..." (population claim without evidence), and changed the @aviralbhat reference from "his" to "their" in both the prose and the `[VERIFY:]` marker, since that account's pronouns are not stated anywhere in the research.

### Stage 3b residual note for the humanizer

- Review iteration 2 logged one non-blocking minor: draft-v2 L192 (FAQ, grayscale answer) shares a nine-word clause with L117, "the morning you need to see a photo properly". The reviewer attributed it to its own iteration-1 §9 wording, not to the writer. The humanize pass is the right place to break the echo.

### Stage 3a writer handoff (draft-v1)

- Word count 2,983 body prose (intro + body + CTA) vs outline roll-up 2,900; FAQ 354 separately. Inside the 2,600-3,000 band.
- Markers: 1 `[VERIFY:]`, 4 `[IMAGE:]`, 0 `[EXTERNAL_LINK_NEEDED:]`, 0 `[INTERNAL_LINK_NEEDED:]`.
- Floor checks at write time: 0 em/en-dashes, 0 forbidden phrases, 5 internal links + CTA, 5 external links each used exactly once, no forbidden SERP URL (PNAS Nexus linked, georgetown.edu untouched), no price stated anywhere, 4 tags verbatim from the live WP tag list.
- Writer's flagged items for Stage 3b:
  1. The single `[VERIFY:]` is the X user's "under 90 minutes" figure — the quote is in facts.md but the number lives only in `research/x.md`, so it was marked rather than asserted.
  2. The "15-17 hours a day" context around the r/digitalminimalism specificity quote was dropped for the same reason and paraphrased.
  3. H2 5 uses three bolded lead-in phrases for the escalation ladder (no H3s permitted by the outline) — flagged in case it reads as scatter-bolding.
  4. CTA links `/ai-tools` root-relative, matching seven existing published posts; this resolves the outline's open question about that path.
  5. Apple and Google links both sit in H2 2 so each URL appears exactly once, leaving the H2 3 app-limit walkthrough unlinked.

- **Run mode:** AUTOPILOT (`CONSOLE_RUN_STATE` set), `CONSOLE_VERIFICATION=on`.
  Terminal event for this run is `ready_for_verification` — the PR-open /
  WP-draft-create side effect is deferred to a later `autopilot-cont` run.
- **Gate 2 mode (resolved at Step 0, do not re-derive): `console`.**
  `git remote get-url origin` resolves to `https://github.com/lucky72o/olgapak-blog.git`
  and `gh repo view` succeeds, so the git-side staging follows the PR path
  (worktree branch `blog/how-to-reduce-screen-time`, commit + push); but because
  `CONSOLE_RUN_STATE` is set, Gate 2 itself is **console-gated** per
  `references/console-contract.md` §"Gate 2 under the console": no `CronCreate`
  monitor, no blocking on typed input, approval only via `approval.json`.
- **Adapter:** `wordpress-rest`. WP auth probe runs exactly once at Stage 4b.5
  staging step 2 — never here, never retried.
- **Never auto-publish** (`blog-ops/profile/custom-instructions.md`): the WP post
  stays `draft`; going live is a manual wp-admin action after the Rank Math focus
  keyword is set.
