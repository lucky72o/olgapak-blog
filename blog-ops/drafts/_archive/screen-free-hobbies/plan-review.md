# Plan Review: screen-free hobbies

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/screen-free-hobbies/plan.md`. The reviewer did NOT write the plan.
This is the second and final review pass (iteration 2). Prior verdict (`plan-review-v1.md`, iteration 1) was `request_revisions` with four required changes; all four are verified applied below.

## Verdict

approve

One-line rationale: all four iteration-1 fixes are correctly applied and actually resolve the issues they were raised for, the title switch has no negative knock-on effects on the meta description, angle, or count discipline, and a fresh full-rubric read finds nothing that blocks the plan. One cosmetic residual (a stale Open Questions bullet still framed around the withdrawn candidate-2 title) is noted but does not need another revision pass.

## Fix verification (iteration 1 to iteration 2)

1. **Title switch.** Confirmed: `§Recommended title` now reads `51 Screen-Free Hobbies to Try When Scrolling Gets Old` (53 chars, verified by direct count, within `blog-craft.md`'s 50-60 char band). The rationale states the per-entry cost-tier tally (roughly 20/51, about 39%, genuinely free, concentrated in Section 2) and explains why "(Most Are Free)" would have repeated the post's own target blur. The two candidate-2 "conditions attach to this recommendation" paragraphs are gone, replaced by a one-line note that candidate 1 makes no checkable cost claim. Effective: the honesty problem iteration 1 flagged is gone because the shipped title no longer makes any cost assertion to fail.
2. **Length target reasoning.** Confirmed: the paragraph now leads with the size-matched Guardian (55 items, 3,628 words) / Game Quitters (50 items, 3,292 words) comparison (~3,460 word average, verified by recomputation), keeps the bottom-up per-item math as secondary support, and demotes the blended six-competitor average (~2,674 words, verified by recomputation) to "Reference point only, not the justification." Effective: the target itself was already sound, and the reasoning now matches `blog-craft.md`'s "match top-5 SERP competitor length" instruction on a like-for-like basis.
3. **Section 9 space fencing.** Confirmed: the Section 9 description in `§Key sections` now reads "The space sub-topic stays concrete and actionable (compact or foldable hobbies already on this list, library or community-space alternatives) and makes no statistic or prevalence claim about how common the space constraint is, since nothing in `facts.md` or `research/*.md` supports one." This matches the gap `research/serp.md` §"Angle opportunities" and `research/reddit.md` §"Open questions" both confirm (no result or thread treats space as a selection filter). Effective.
4. **External links table.** Confirmed: a "Where in the post" column now exists on all four rows (three resolved to expected sections, one still `Phase 2 to fill` for the unresolved marker, which is correct since Phase 2 owns final placement). The floor-rule sentence ("the writer finds a substitute external link rather than shipping with fewer than 3") is present immediately after the table. A placement-rule note was also added tying the first-internal-before-first-external ordering requirement to the Section 1 carve-out link as the natural first internal link. Effective: the plan can now be checked against `blog-craft.md` §External linking's 3-5 minimum and ordering rule once Phase 2 fills the column.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged by the title switch. `serp.md` confirms dominant intent is browse-and-choose informational (5 of 6 deep-fetched competitors are numbered lists); plan's `informational_pillar` + `best-of-listicle` shape with a categorised menu still matches. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Unaffected by the title/length/space/link fixes. Sections 2, 3, 6, 7 trace directly to `facts.md` named examples and quotes; Section 5 traces via the piano/instrument entry in `facts.md` §Named examples ("Piano, ceramics, quilting and journaling"); Sections 1, 8, 9, 10 are structural/guidance sections, not factual-claim sections, so `blog-craft.md`'s sourcing rule (targets numeric/factual claims) doesn't require a trace for them. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a (pass) | Re-confirmed directly in `config.yaml`: `modules.competitors: false`. No "Competitor facts" claims are planned anywhere in `plan.md`. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Re-checked all 3 resolved URLs (mind.org.uk, corp.oup.com, health.harvard.edu) plus the open `[EXTERNAL_LINK_NEEDED:]` marker against `serp.md`'s top-10 domains (vogue.co.uk, theguardian.com, theworks.co.uk, theeverygirl.com, mudita.com, gamequitters.com). No overlap. All three carry `primary_source`/allowlist classification per `facts.md` §Available for external linking. |
| Length target appropriate for the intent and H2 set | yes | Now supported by the size-matched Guardian/Game Quitters comparison (fix #2, verified above) rather than the size-mismatched blended average. 3,000-3,600 words sits inside `blog-craft.md`'s 3,000-5,000 `informational_pillar` band and is independently supported by the bottom-up 51-item math. |
| Open questions genuinely resolved or explicitly flagged | yes, with one cosmetic residual | The space objection and the Fortune lead remain correctly flagged as non-sourced/unresolved rather than silently dropped. The first Open Questions bullet ("Title number and the '(Most Are Free)' promise") was NOT updated when the recommended title changed: it still asks the reviewer to "confirm the plan's item list can actually deliver 51 non-padded entries with a free-or-near-free majority," a condition that only applied to the withdrawn candidate 2. I independently recounted the item list in `§Key sections` (12+10+9+8+6+6 = 51, matches the stated per-section counts, no duplicates), so the count half of the bullet is already satisfied; the "free-or-near-free majority" half is simply moot now that the shipped title makes no cost claim. This is stale bookkeeping, not a live risk: `§Recommended title`'s own text is unambiguous and correct, so a downstream reader (blog-editor at outline, blog-writer at Phase 3) won't be misled into re-litigating a dead condition, just possibly puzzled by it. Worth a cleanup pass whenever the plan is next touched, not worth another revision cycle on its own. |
| Keyword's dominant intent is actually covered | yes | Unaffected by the fixes. The 11-section structure (framing, 6 categorised buckets, pick-and-stick, money/space/time, CTA, FAQ) covers the browse-and-choose intent and still carries the two real differentiators (per-entry cost tiers, durable-vs-filler carve-out) no SERP competitor offers. |

## Additional checks from the fresh full-rubric read

- **Meta description still aligns with the new title.** `51 screen-free hobbies sorted by category, with an honest cost tier for each one and a plan for actually sticking with the one you pick.` (134 chars) makes no "most free" claim either, so it required no change and makes none of the promises that would have failed under candidate 2.
- **§Angle still matches the shipped title.** The angle's two differentiators (per-entry cost tiers, durable-vs-filler carve-out) are things the post *does*, not things the title promises; candidate 1 makes no claim the angle then has to hedge or contradict.
- **Odd-51 justification is unaffected by the title swap** and remains internally consistent: `blog-craft.md` §Title rules requires an odd-number listicle prefix, 50 was the content-plan's round number, 51 is what the (unpadded, independently recounted) item list actually delivers.
- **Forbidden characters check** (`writing-standards.md` §Forbidden characters, applies to plans too): no em-dashes in `plan.md`; the two en-dashes present are both in numeric ranges (`3,000–3,600`, `3,000–5,000`), correctly used.
- **Internal/external link counts remain within `blog-craft.md` bounds:** 5 internal links (band is 3-5) and a 3-link floor plus one resolvable marker for external (band is 3-5), both unaffected by the four fixes.

## Specific issues (only if not `approve`)

None. (The one residual noted above, the stale Open Questions bullet #1, is cosmetic and does not meet the bar for a required fix at this final iteration; it's logged here for Stage 3b's awareness rather than as a blocking issue.)

## Revision instruction (verbatim, for the editor)

