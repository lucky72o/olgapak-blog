# Plan Review: bullet journal for beginners

Written by: plan-reviewer agent (Stage 1c.5, iteration 2 — final pass). Read by: blog-editor (applies fixes or advances).
Independent review of `{drafts_dir}/bullet-journal-for-beginners/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: all six items from the iteration-1 revision instruction landed verbatim and check out against the raw research files with no residual stale text, the section budget now sums to exactly 3,000, `facts.md` no longer contradicts `plan.md` on the 15.9M-views figure, and nothing else in the plan drifted.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from iteration 1, and iteration 2 made no structural edits. `serp.md` §Search intent's recommended shape (open with what the method is, walk a minimal setup, close with FAQ mapped to the four PAA questions) is still exactly what plan.md §"Key sections" delivers; the only edit to that section (item 5's rewording) is a title/framing change, not a structural one. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | The one soft spot from iteration 1 — H2 5's "the step everyone skips" asserting an unsourced skip-rate — is fixed. It now reads "Migration: the step it's tempting to skip, and the one that makes the system work" with an explicit framing note: *"'tempting to skip' is authorial observation, not a sourced claim. No research source in this set measures how often beginners skip migration, so the writer must not assert a frequency."* That is a correctly scoped authorial claim, not a dangling statistic. All other H2s remain backed as verified in iteration 1 (official-site quotes, Reddit intimidation/consistency/hybrid-calendar quotes, the symbol set in `facts.md` §Named examples). |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | yes (N/A) | Unchanged. `brief.md` §Autopilot assumptions and §Competitors to mention record `modules.competitors: false`; `facts.md` has no "Competitor facts" table and the plan makes no competitor pricing/feature claims, so the freshness module doesn't apply. All research files (`serp.md`, `facts.md`, `reddit.md`, `x.md`) are dated 2026-08-26, today's date. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Verified directly against `research/_raw/_serp.json`: `topResults` (the 7 organic page-1 URLs, i.e. the forbidden set) contains no `youtube.com` entry; the YouTube URL lives only in the separate `videoCarousel[0]` field. The new row's justification — "NOT one of the 7 forbidden top-10 organic results — the SERP capture filtered `youtube.com/watch` URLs out of `topResults`" — is factually accurate, confirmed by inspecting the raw JSON directly rather than taking the plan's word for it. `blog-craft.md` §"Authoritative-site allowlist" independently lists `youtube.com` as allowlist-class regardless, so the link is doubly legitimate. `rydercarroll.com` and Scientific American remain the other two confirmed links, both `primary_source`, and the "Forbidden, explicitly" list still enumerates all 7 organic-result domains correctly. Total external links (3 confirmed + up to 2 pending `[EXTERNAL_LINK_NEEDED:]` markers) stays within `blog-craft.md`'s 3–5 range. |
| Length target appropriate for the intent and H2 set | yes | The section budget now reads `intro 200 + §1 280 + §2 300 + §3 240 + §4 740 + §5 280 + §6 300 + §7 300 + CTA 110 + FAQ 250`, which sums to exactly 3,000 (verified by direct arithmetic), matching the plan's own stated 2,600–3,000 ceiling with no overshoot. The deviation from `blog-craft.md`'s 3,000–5,000 `informational_pillar` band remains justified by that same standard's own "match top-5 SERP competitor length" escape hatch plus verified competitor-length and house-length math (unchanged from iteration 1, re-checked here: no other numbers in this section moved). |
| Open questions genuinely resolved or explicitly flagged | yes | The 15.9M-views item is now correctly marked `[x]` resolved, with accurate reasoning that matches both the new External-links row and the corrected `facts.md` row (checked below). The ADHD FAQ item remains `[ ]`, genuinely flagged with a concrete fallback (mechanical answer + `[EXTERNAL_LINK_NEEDED:]`, or drop), unchanged and still sound. The affiliate-links judgement call remains resolved with the same holding reasoning from iteration 1. |
| Keyword's dominant intent is actually covered | yes | Unchanged; no section was added, removed, or reordered between iterations, only reworded/reclassified. |

## Verification of the six iteration-1 fixes

1. **New YouTube row in §"External links planned."** Present, correctly classified `primary_source`. Cross-checked against `research/_raw/_serp.json` directly: `topResults` (7 organic URLs, ranks 1–7) contains no YouTube entry; `videoCarousel[0].url` = `https://www.youtube.com/watch?v=fm15cmYU0IM`, matching the plan's claim exactly. Not-forbidden justification is accurate, not just asserted.
2. **Section budget in §"Length target" sums to ≤3,000.** Confirmed by direct arithmetic: 200+280+300+240+740+280+300+300+110+250 = 3,000 exactly (the top of the stated range, not over it).
3. **Reworded Migration H2 in §"Key sections" carries the authorial-observation note.** Confirmed present and correctly scoped (see rubric row above) — it explicitly instructs the writer not to assert a frequency claim.
4. **Scientific American row reclassified `primary_source`.** Confirmed: the row now reads `primary_source (harvested from a competitor's citation per serp.md §"Citations harvested from competitors"; Stage 3d must confirm it loads and contains the line)`, matching the revision instruction verbatim.
5. **`facts.md` §Statistics no longer contradicts `plan.md` on the 15.9M figure.** Confirmed: the row is now marked **LINKABLE**, carries the source URL, notes the Stage 3d verification flag (view count must still read 15.9M+ before shipping), and explicitly states the URL "is not one of the seven forbidden top-10 organic results" with the same `topResults`-filtering explanation as `plan.md`. The two files agree.
6. **Nothing else drifted.** Grepped `plan.md` for the old wording ("everyone skips," a bare `750` word-budget figure, "no citable"/"unlinked prose"/"not attributable") — the only remaining "unlinked prose framing" hits are the two places that correctly describe what the *old, now-superseded* framing was, both explicitly marked as corrected. `status:`, the SERP-shape/intent/title/angle/internal-link/image-plan/tone-hooks sections are byte-identical in substance to what iteration 1 reviewed and approved implicitly (only §External links, §Facts to feature, §Length target, §Key sections item 5, and §Open questions were touched, exactly the five sections named in the six-item instruction, plus the new §"Changes requested by human" log entry, which accurately summarizes all six changes).

## Specific issues (only if not `approve`)

None. All prior findings are resolved.

## Revision instruction (verbatim, for the editor)

(none — verdict is approve)
