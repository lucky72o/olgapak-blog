# Plan Review: best pens for note taking

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/best-pens-for-note-taking/plan.md`. The reviewer did NOT write the plan.

## Verdict

request_revisions

One-line rationale: the angle, fact-backing, and forbidden-link discipline are sound, but the length target is too tight for the planned section depth and two arithmetic self-checks (title/meta char counts) are wrong — both fixable without touching the angle.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Dominant intent is commercial/best-of-listicle (7/10 SERP results); plan's scannable-shortlist-with-primer structure and first H2 phrased as a question containing the keyword match this and the required convention in `blog-craft.md` §Heading structure. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | H2 2 (primer) → §Mechanics facts; H2 3 (picks) → §Named examples (10 of 11 solidly, Muji weakly and explicitly flagged conditional); H2 4 (job mapping) → Parker Jotter disagreement + lefty/ballpoint mechanics facts; H2 5 (paper) → feathering/bleeding/ghosting quote + gsm-is-a-bad-proxy fact; H2 6 (honest limits) → felipetwo/asdqqq33/BIGAL0720 quotes + Jotter disagreement. H2 1 is a synthesis of H2 3's facts, which is the standard transactional "quick answer" convention, not a separate fact claim. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a | `modules.competitors` is off for this blog — no competitor profile table, no freshness gate in scope for this post, per the dispatch context. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | The 5-row external-link table (Mueller & Oppenheimer via SAGE/.edu, Uni-ball manufacturer, USPIS .gov, Sakura manufacturer, Muji manufacturer) contains none of the 7 top-10 SERP domains; the plan's own "Forbidden-link discipline" note correctly lists all 7 studied competitor domains from `research/serp.md`. The 11 product links are a separately-governed class per `custom-instructions.md` §Content policy (real non-affiliate `amazon.com/dp/<ASIN>` links, no disclosure) and are correctly excluded from the 3–5 external-link budget. |
| Length target appropriate for the intent and H2 set | no | See issue #1 below — 2,400–2,800 words is tight for 7 H2s including 11 full H3 picks (each needing 4 elements) plus a job-mapping H2 that substantially overlaps the picks' "who should skip it" content. |
| Open questions genuinely resolved or explicitly flagged | yes | All 3 open questions carry a specific, self-executing fallback usable without a human in the loop: Muji → cut to 10 picks + retitle if Stage 3d can't verify specs; handwriting-vs-typing → at most one scoped sentence or cut, never a lifted number; product links → brand page fallback, never a placeholder. This correctly overrides the brief's "these must appear" instruction for Muji on evidentiary grounds (Muji is absent from all 7 studied SERP results and appears only as a *paper* brand once on Reddit — `facts.md` §Rejected/not verifiable), which is the right call rather than writing a pick from guesswork. |
| Keyword's dominant intent is actually covered | yes | Commercial/transactional intent is covered by an 11-pick shortlist with per-pick reasoning, plus the honest-limitations layer that differentiates from every studied competitor (none of the 7 admits a top pick's downside as bluntly as the Sakura Micron contradiction). |

## Deviations assessed (per dispatch instructions)

- **Dropping "Tested and Ranked" from the title formula:** justified. No hands-on test of the 11 pens occurred (research is SERP + Reddit synthesis), and `blog.md` §Point of view states every tool/tactic on this blog "is something Olga has personally tested." Claiming "Tested and Ranked" in the title would make exactly the false claim that policy forbids. Dropping the bare `[Year]` token isn't a separate deviation needing justification — `blog-craft.md` §Title rules doesn't require a year, only the matrix's example formula includes one, and `blog-craft.md` §URL slug rules explicitly forbids the year in the slug.
- **Shipping 11 picks instead of the content-plan's 12:** justified, and more strongly than the plan's own rationale claims — `brief.md` §Other notes already authorizes this explicitly ("Treat 12 as the target, but do not pad — if the honest list is 10 strong picks, the outline may trim and say so"). The plan's own rationale only cites the odd-number title rule and the no-padding instruction; it could also have cited this direct brief sanction, but the conclusion is correct either way.

## Specific issues (only if not `approve`)

| # | Severity | Location in plan | Issue | Required fix |
|---|---|---|---|---|
| 1 | important | §Length target | 2,400–2,800 words is tight against the planned depth: a quick-answer H2, a mechanics primer H2, 11 H3 picks each needing 4 elements (what it's best at / why it earns the spot / honest catch / who should skip it), a separate job→pick mapping H2 that substantially re-covers the same "who should skip it" ground, a paper H2, an honest-limits H2, a conclusion, and a 3–5 Q FAQ. This risks either thin, formulaic picks or overshooting 2,800. | Either widen the length target to 2,600–3,200 words, or add an explicit instruction that §4 "Which pen for which kind of note-taking" ships as a compact job→pick reference table (one line per job) rather than full prose paragraphs, so it doesn't duplicate §3's per-pick catches within the existing budget. |
| 2 | minor | §Title candidates, §Recommended title, §Meta description (draft) | Self-reported character counts are wrong: the recommended title is 54 chars (plan says 53), title option 3 is 55 chars (plan says 54), and the meta description is 151 chars (plan says 149). All three still pass their limits (title 50–60, meta ≤160) so this isn't a compliance failure, but the wrong numbers will propagate to the outline/draft stage's self-checks if not corrected. | Recompute and correct the three character counts in place. |
| 3 | minor | §Length target (rationale) | The rationale claims competitor article bodies "cluster between roughly 1,400 and 3,600 words once navigation chrome is excluded," but `research/serp.md` only records raw approximate word counts (1,442–8,452) for the 7 studied pages with no chrome-excluded breakdown — this specific refined range isn't traceable to any file. | Either cite where the chrome-excluded estimate came from, or rephrase the rationale to reference the actual recorded raw word-count range from `research/serp.md`. |

## Revision instruction (verbatim, for the editor)

In `plan.md` §Length target: change "2,400–2,800 words" to "2,600–3,200 words" and add a sentence: "§4 'Which pen for which kind of note-taking' ships as a compact job → pick reference table (one line per job), not full prose paragraphs, to avoid re-covering §3's per-pick catches within budget." Also replace the sentence citing "roughly 1,400 and 3,600 words once navigation chrome is excluded" with a sentence that either cites its actual source or references the raw approximate word counts recorded in `research/serp.md` (1,442–8,452 words across the 7 studied pages).

In `plan.md` §Title candidates and §Recommended title: change the recommended title's char count from "53 chars" to "54 chars", and title option 3's char count from "54 chars" to "55 chars".

In `plan.md` §Meta description (draft): change "(149 chars, ...)" to "(151 chars, ...)".
