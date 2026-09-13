# Plan Review: dopamine detox

Written by: plan-reviewer agent (Stage 1c.5), iteration 2 (final pass; plan revision is capped at one round). Read by: blog-editor (advances to outline).
Independent review of `blog-ops/drafts/dopamine-detox/plan.md`. The reviewer did NOT write the plan. Prior review archived at `plan-review-v1.md`.

## Verdict

approve

One-line rationale: all five iteration-1 fixes landed correctly and verified against source, and a fresh full pass over all seven rubric criteria finds no new problems worth blocking on; only minor notes below.

## Verification of the five required iteration-1 fixes

1. **Founder anecdote placement.** Landed. `plan.md` §Angle now reads: "Founder anecdote: weave the timeboxing and Parkinson's Law beat into section 4 or 5, tied to the time-blocking internal link, per brief.md §Founder anecdote / story. Do not invent a detox-specific story that did not happen." This matches brief.md §Founder anecdote / story and voice.md §Personal-anecdote bank's "adopting timeboxing to finally organize her time and beat Parkinson's Law" entry, and the section 4/5 placement lines up with where the internal-links table already puts `time-blocking` ("section 5 or closing").

2. **Section 6 guardrail.** Landed, and strengthened. `plan.md` §Key sections now carries: "Guardrail on section 6. Section 6 must not cite facts.md's named-example fact linking low dopamine to Parkinson's disease, depression, restless leg syndrome, and ADHD... Section 6 stays limited to the one-paragraph 'this is not one-size-fits-all... that is a conversation for a professional, not a protocol' framing... with no mechanism or diagnostic claims." It also names where the barred fact belongs instead (section 1, as general context for why "detoxing" dopamine is the wrong goal, not addressed at the reader's own condition), which closes the loop the iteration-1 review left open. §Open questions bullet 2 mirrors this and is marked `[x]` resolved.

3. **Title length.** Landed and verified by direct character count: "Dopamine Detox: What It Is and How to Actually Do It Right" = 58 characters, inside blog-craft.md's strict 50-60 range. Target keyword leads the title, title case is correct (small words "and"/"to" lowercase), no semicolon or em-dash.

4. **Open questions 1 and 3 resolved; question 2 reflects the guardrail.** All three bullets are now `[x]` and each carries the resolving reasoning: bullet 1 (length) reproduces the arithmetic and the blog-craft.md §Body rules precedent; bullet 3 (Sepah LinkedIn link) correctly re-grounds the decision in the `primary_source` classification rather than the LinkedIn-allowlist test; bullet 2 (ADHD) states the guardrail and its rationale. None of the three still reads as open.

5. **7-day structure framed as this post's own on-ramp.** Landed in two places: §Angle now states in bold, "The 7-day structure is this post's own on-ramp, inspired by Sepah's moderate cadence and by the gradual-tapering shape of the r/productivity account (facts.md §Rejected, r/productivity entry); frame it as such, never as Sepah's own protocol," and §Key sections adds a matching "Guardrail on section 4" repeating the traceability requirement. This closes the serp.md §Avoid pitfalls risk the iteration-1 review flagged.

All five confirmed. No fix was applied partially or drifted from what was requested.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from iteration 1 and still correct: sections 1-3 cover the dominant informational/verification intent serp.md describes (5 of 7 results lead with a correction before a method), sections 4-5 cover the secondary how-to pivot the same sources make in their second half, and section 6 fills the boundary-setting gap serp.md's own §Angle opportunities flags as unaddressed anywhere in the top 7. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes, with the same caveat as iteration 1 | Sections 1, 2, 3, and 6 trace directly to named facts.md entries. Sections 4 and 5 remain synthesis/advice sections rather than single-claim sections; that was already ruled acceptable at iteration 1 and the new guardrails on section 4 (every number traces to facts.md or is cut) tighten this rather than loosen it. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a | `modules.competitors` is false for this blog (confirmed again in brief.md §Autopilot assumptions item 8 and by the dispatch note). facts.md has no "Competitor facts" rows and the plan cites none. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | The external-link table is unchanged from iteration 1 and was already verified against all 7 analyzed serp.md results: Harvard Health (`.edu`-class allowlist despite rank 7), both PMC URLs (NIH/NLM allowlist despite PMC11223451 sitting at rank 3), NYT (major publication, not a top-10 URL), and Sepah's LinkedIn article (`primary_source` under blog-craft.md's forbidden-links step 3, not a top-10 URL either). The four deliberately excluded domains (Cleveland Clinic, MedicalNewsToday, Crisis Text Line, Biogena) are the actual direct competitors and correctly stay out. |
| Length target appropriate for the intent and H2 set | yes | Recomputed independently: (1456+1509+1544+1548+2235)/5 = 1658.4 words, matching the plan's "roughly 1,660." blog-craft.md §Body rules' own worked example endorses targeting somewhat above the SERP average over the post-type matrix's 3,000-5,000 ceiling, and facts.md's own "Deliberately thin" note (no percentages, no timelines anywhere in this SERP) argues against padding. 2,200 words across 6 substantive H2s plus FAQ is workable. |
| Open questions genuinely resolved or explicitly flagged | yes | All three bullets are now marked `[x]` with the resolving reasoning inline, and the two important omissions from iteration 1 (founder anecdote, section 6 guardrail) are now addressed in the body of the plan rather than left as open questions. Nothing is silently dropped. |
| Keyword's dominant intent is actually covered | yes | Unchanged and correct: informational verification intent (sections 1-3), secondary how-to intent (sections 4-5), and the boundary-setting gap no SERP result fills (section 6). |

## Fresh issues found on this pass

None that rise to `important` or above. Two `minor` observations, noted for the outline stage rather than requiring another plan revision (plan revision is capped at this iteration):

- **Contingent link, contingent anecdote.** §Internal links planned says the outline "may drop `time-blocking` if section 5 gets crowded," but §Angle ties the founder anecdote specifically to "the time-blocking internal link." If the outline stage drops that link, the anecdote's placement rationale (tied to that link) goes with it. Deciding this now rather than parking it: the anecdote should stay in section 4 or 5 regardless of whether the `time-blocking` link survives, since the anecdote's value (a first-person timeboxing/Parkinson's Law beat that models "how to sit with a hard task") does not depend on the link being present. The outline-stage agent should keep the anecdote and treat the link as the more droppable of the two if section 5 is crowded, not the reverse.
- **Section 1 now carries the redirected fact.** The section 6 guardrail correctly redirects the Parkinson's/depression/restless-leg/ADHD association fact to section 1. Worth a one-line reminder for the outline/draft stage: in section 1 this fact is safe because it is general context for "why detoxing dopamine is the wrong goal," not addressed at the reader's own condition; the same fact would not be safe if the drafting stage later moves it next to any reader-directed "if you have ADHD" framing anywhere else in the post. This is a drafting-discipline note, not a plan defect, so it does not change the verdict.

## Revision instruction (verbatim, for the editor)

None. Verdict is `approve`; advance to the outline stage with the two minor notes above carried forward as guidance for that stage, not as required plan edits.
