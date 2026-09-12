# Plan Review: ai note taking

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/ai-note-taking/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: the angle correctly synthesizes the mixed SERP intent without becoming the scored roundup the brief reserves for `ai-study-tools`, every H2 traces to at least one sourced fact, the external-link plan is clean, and the two open questions genuinely at risk (tool-naming depth, the accuracy citation) are already flagged rather than silently dropped; the remaining problems are thin enough to fix at outline stage rather than reasons to send the plan back.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | `serp.md` §"Search intent" records commercial investigation with a strong informational sub-intent and explicitly recommends this exact structure in its own "Implication for our post structure" line (short explainer, then workflow, then an honest use-case-tagged tool section, no scored roundup). The plan's angle and 8-section outline follow that recommendation directly. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Sections 1, 2, 3, 5, 6 each trace cleanly (five-step model + extractive/abstractive, Mueller & Oppenheimer + 2019 replication + r/askanything quotes, record-then-structure habit, Medium hit-or-miss quote + x.md tool-fatigue quote, multi-vendor pipeline + marketing-vs-policy gap). Section 4 ("Which AI note-taking tool fits which job") only has one sourced entry in `facts.md` (NotebookLM) to cover five planned job categories — technically satisfies "at least one," but see issue #1. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a | `modules.competitors` is `false` in `blog-ops/config.yaml`, so there is no `facts.md` "Competitor facts" table and this check does not apply. Tool mentions in §4 are ordinary editorial mentions per `brief.md` §Other notes, not profile-backed competitor claims. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | All 4 confirmed rows (Mueller & Oppenheimer, the 2019 replication, Cornell's Learning Strategies Center, Google NotebookLM help docs) are academic-publisher/.edu/official-platform-docs, none appear in `serp.md`'s top-10 (zoom.com, metaview.ai, pcmag.com, medium.com, microsoft.com, plaud.ai, notta.ai, notegpt.io, otter.ai), and `support.google.com` is explicitly on `blog-craft.md`'s allowlist. The one open `[EXTERNAL_LINK_NEEDED:]` row is correctly flagged rather than filled with a placeholder link. |
| Length target appropriate for the intent and H2 set | yes | 2,300–2,700 words (roll-up 2,550) is defensible given the SERP's own mean (2,691) and the post's 8-section/4-topic load, but the plan's own justification overstates itself: it calls this "inside the how-to band," when `blog-craft.md`'s post-type matrix caps `how_to` at 2,500 and the target's upper bound (2,700) sits ~200 words past that cap. See issue #2. |
| Open questions genuinely resolved or explicitly flagged | yes | All three open questions (tool-naming depth, the unresolved transcription-accuracy citation, autopilot/no-human-intake) are explicitly flagged with a stated fallback, not silently dropped. |
| Keyword's dominant intent is actually covered | yes | The commercial/shopping sub-intent is served by §4 (categorized, unranked, "what each kind is bad at") rather than ignored; the trade-off against a full scored comparison is a deliberate, brief-sanctioned choice (cannibalization avoidance for `ai-study-tools`) and the plan itself already flags the thinness risk in Open Questions #1. |

## Specific issues (only if not `approve`)

| # | Severity | Location in plan | Issue | Required fix |
|---|---|---|---|---|
| 1 | minor | §"Key sections" item 4 / §"Facts / data to feature prominently" | Section 4 plans five job categories (live meetings, lectures/long recordings, source-grounded Q&A, an app you already use, a hardware recorder) but `facts.md` only supports one of them with a named, sourced tool (NotebookLM for source-grounded Q&A). The other four will need `[VERIFY:]` tags or attributed-opinion framing at draft time, since `modules.competitors` is off and there is no competitor-facts table to fall back on. Not a blocker — `brief.md` §Other notes already anticipates ordinary editorial mentions needing a source or `[VERIFY:]` marker — but worth a heads-up for outline stage so the section doesn't end up over-promising specificity it can't back. |
| 2 | minor | §"Length target" | The justification says the 2,300–2,700 target "sits at the top of the how-to band and inside the SERP's own range," but `blog-craft.md`'s post-type matrix caps `how_to` at 2,500 words, so 2,700 is ~200 words past the band, not inside it. The actual target is reasonable given the SERP's mean (2,691) and the post's section count; only the wording overstates conformance. |

## Revision instruction (verbatim, for the editor)

None required for approval. Optional cleanup at outline stage: in `plan.md` §"Length target," reword "sits at the top of the how-to band and inside the SERP's own range" to acknowledge the target's upper bound (2,700) exceeds `blog-craft.md`'s 2,500-word `how_to` cap by design, per the SERP's higher mean/median and the post's four extra sections. In §"Key sections" item 4, note that only NotebookLM has facts.md backing among the five job categories and that the other four will carry `[VERIFY:]` or attributed-opinion framing rather than firm capability claims.
