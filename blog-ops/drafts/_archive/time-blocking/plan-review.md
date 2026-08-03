# Plan Review: time blocking

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/time-blocking/plan.md`. The reviewer did NOT write the plan.
This is iteration 2 (the iteration ceiling per Stage 1c.5's contract — no third reviewer dispatch). Prior review archived at `plan-review-v1.md`.

## Verdict

approve

One-line rationale: all four iteration-1 issues are genuinely fixed, not just promised in prose — the title carries the literal keyword, the skeleton is coherently merged to 5 content H2s with a word budget that now fits the target length, the §4/Angle wording no longer re-derives the timeboxing boundary and carries the required back-reference instruction forward, and the tools beat is now backed by a real, properly-scoped `facts.md` entry; two small residual issues remain but are below the bar for blocking and are recorded below for Stage 3b (outline) to absorb.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from iteration 1's pass. `serp.md` §Search intent confirms hybrid explainer + step-by-step with definitional, comparative, procedural, and evaluative sub-intents all present in the live SERP; the 5-section skeleton (what/why → vs. → how-to → why-it-breaks → who-it-doesn't-suit) still maps cleanly onto that shape. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | §1 (Parkinson's Law), §3 (Stanford 15hrs, 60/20/20 split, doubling rule, u/SalkMe tools quote — now explicitly scoped), §4 (Reddit breakage quotes — theodetteapp, AiotexOfficial, mattragland), §5 (Newport reactive-work quote, reactive-role pattern, energy-slice quotes, Bunnyeatsdesign ordered-queue quote) are all backed. §2 remains definitional synthesis, which doesn't require a citation. Fix #4 (tools attribution) verified: `facts.md` lines 37–38 now carry u/SalkMe's fuller "app matters less than keeping the system simple" quote with an explicit scoping note barring a "reader consensus" upgrade, and `plan.md`'s §Section-specific constraints correctly restates that limit for the writer. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | yes | Not triggered — as in iteration 1, the plan cites zero competitor pricing/feature claims; forbidden competitors appear only as link targets to avoid. `serp.md`'s own capture date (2026-07-29) is a day old regardless. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Unchanged and still correct: Stanford CTL, two Wikipedia entries, the Supertaskers DOI, and calnewport.com — all `primary_source`/`auth_allowlist` class per `serp.md` §"Citations harvested from competitors". None of todoist.com/asana.com/meistertask.com/habitstrong.com appear as link targets. |
| Length target appropriate for the intent and H2 set | yes | Fixed. 5 content H2s + CTA + FAQ against 1,800–2,500 words nets roughly 1,150–2,100 words of content (after ~150–200w intro, ~100–150w CTA, ~150–300w FAQ) across 5 sections, i.e. ~230–420 words/section — in the same range as Asana (~465w/section) and MeisterTask (~550w/section), the two denser competitors iteration 1 benchmarked against. This is a real fix, not a relabeling: the prior skeleton's ~145–260w/section is gone. |
| Open questions genuinely resolved or explicitly flagged | yes | All three items in `## Open questions` remain marked `[x]` with real mitigations, and the cannibalization item is now materially stronger than at iteration 1: §4's constraint block requires time-blocking-native failure language plus one explicit back-reference sentence to §2, closing the exact overlap risk `brief.md` §Other notes flagged as a hard constraint. |
| Keyword's dominant intent is actually covered | yes | Unchanged pass — definitional, comparative, procedural, and evaluative intent are all present in the 5-section list, matching `serp.md`'s mixed-hybrid SERP shape. |

## Verification of the four iteration-1 fixes

1. **Title (issue #1) — fixed.** `## Recommended title` is now `Time Blocking: How to Do It (Without It Falling Apart)`, 54 characters (within `blog-craft.md` §Title rules' 50–60 range), literal keyword first, title case correct, no semicolon/em-dash. Confirmed by direct character count, not just asserted in the plan's prose.
2. **Section merge (issue #2) — fixed, and it reads coherently.** The skeleton is genuinely 5 content H2s (not 8 relabeled as 5): §1 merges old §1+§3, §2 is unchanged, §3 absorbs old §5 and old §8, §4 and §5 are unchanged 1:1. I checked whether §3 absorbing both "how much to plan" and "tools" makes it an incoherent grab-bag: it doesn't — the plan explicitly scopes the absorbed material as "a step of its own" (one bullet inside a numbered walkthrough) and "a short closing beat" (a few closing sentences), which is a normal shape for a how-to section ("do the steps → decide how much to plan → what to run it on") rather than three disconnected topics bolted together. The `## Internal links planned` table was correctly renumbered to match (verified: §2 disambiguation link, §3 step-1 weekly-planning link, §4 doomscrolling link — all consistent with the new 5-section list).
3. **§4 reframing (issue #3) — fixed, in both places it needed to change.** §4's failure language is now "an over-packed calendar with zero buffer between blocks," not the timeboxing-definitional "clock-precision, per-task scheduling." The `## Angle` paragraph — which I checked specifically because it carried the identical flagged phrase in the original plan — now uses the same corrected wording. The new `### Section-specific constraints` block carries the required one-sentence back-reference to §2 forward as an explicit instruction for the outline stage, which is the right place to pin it since the plan itself doesn't write final prose.
4. **Tools sourcing (issue #4) — fixed.** Cross-checked against `research/reddit.md` §Selected threads item 2: the fuller SalkMe quote and the ihateredditmor dissent are both real and accurately reflected in `facts.md`'s new entry and scoping note. The plan's §Section-specific constraints correctly bars the "probably just your calendar" overclaim.

## Residual concerns (non-blocking — for Stage 3b to catch, not a reason to send this back)

| # | Severity | Location | Note |
|---|---|---|---|
| 1 | minor | `## Facts / data to feature prominently` | The four bullets still cite the *pre-merge* section numbers ("the spine of §5," "the why behind §3," "the single most actionable fix for §6") left over from the 8-section skeleton. Under the new 5-section numbering these should read §3, §1, and §4 respectively, and "§6" now collides with the CTA slot. This doesn't create real ambiguity — `## Key sections` item 3 already spells out in prose that Stanford's number, the 60/20/20 split, and the doubling rule all belong in §3 — but it's a stray inconsistency the outline stage (or a quick editor pass) should clean up before it propagates further. |
| 2 | minor | `## Key sections` §3 | §3 now carries proportionally more subject matter (the numbered walkthrough + the how-much-to-plan step + the tools beat) than §1, §4, or §5, which each absorbed at most one prior section. The plan's own per-section word estimate (300–450w) is presented as uniform across all 5 sections; in practice §3 will likely need to run toward the top of that range (or slightly past it) while §2 can run shorter, since disambiguation is inherently more compact than a three-part walkthrough. Worth the outline stage allocating word budget unevenly rather than treating 300–450 as a fixed per-section quota. |

## Revision instruction (verbatim, for the editor)

None. Verdict is approve. The two residual concerns above are non-blocking notes for Stage 3b (outline) and do not require a return trip to plan review.
