# Plan Review: aesthetic stationery

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/aesthetic-stationery/plan.md`. The reviewer did NOT write the plan.

## Verdict

request_revisions

One-line rationale: the angle, structure, and the three flagged editorial deviations are all sound and well-evidenced, but the plan leaves an unflagged contradiction between three of the 17 picks and the post's own "would this survive a downsizing" filter, and the one H2 built to resolve exactly that kind of tension ("What I would skip") has no specified content or sourcing.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Head-term SERP is 100% retailer pages (transactional/navigational-to-retailer); `serp.md`'s own Implication note says the long-tail "must haves" framing is the real ranking bet and the supplementary SERP's `best-of-listicle` shape is the one to match. Plan's SERP shape match and categorized-roundup structure follow this correctly. |
| Every planned H2 traces to a sourced fact in `facts.md` | no | H2 8 "What I would skip (and what to buy instead)" has zero grounding specified anywhere in the plan, in `facts.md`, or in the research files. Every other H2 traces cleanly (framing H2s to the Reddit/X quotes, category H2s to `facts.md` §Product picks). |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | yes (N/A) | `modules.competitors` is disabled for this blog (`brief.md` autopilot assumption 5; no "Competitor facts" table in `facts.md`), and the plan makes no named-software-competitor pricing/feature claim. This criterion doesn't apply to a physical-product Amazon roundup. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | All three external links are `[EXTERNAL_LINK_NEEDED:]` placeholders, and the plan explicitly lists all six deep-fetched competitor domains plus both top-10 tables as forbidden. Correct, well-evidenced application of `blog-craft.md` §External linking / §Forbidden external links. |
| Length target appropriate for the intent and H2 set | yes, with a calibration note | 2,400-2,900 words is inside the transactional 2,000-3,000 band. But `facts.md`'s own trade-off column already runs ~35-45 words per item before the writer adds a lead sentence and transition; 17 items at that density plus 5 non-item H2s, a CTA, and a 3-5 Q&A FAQ is closer to 3,000-3,200 words than 2,400-2,900 if the trade-offs are used near-verbatim. Not a blocker, but the editor should re-run the math at outline stage before locking section-level word budgets. |
| Open questions genuinely resolved or explicitly flagged | partial | The four logged open questions (item count, title formula, external links, no-testing-claims) are each either well-reasoned or explicitly flagged for the reviewer, and I agree with all three deliberate deviations on their merits (see below). But the plan does not surface the downsizing-filter contradiction I found (see Specific issues #1) anywhere as an open question, which is the kind of tension this section exists to catch. |
| Keyword's dominant intent is actually covered | yes | Categorized best-of structure with a real reason and a real downside per item, 17 verified affiliate links, directly answers the transactional/comparison-shopping intent recorded in `research/serp.md`. |

## Judgment on the three flagged deviations

1. **Item count 25 → 17.** Agree. The brief itself (`brief.md` Autopilot assumption 6) pre-authorized this contingency ("if 25 items cannot each carry a real, verified affiliate link and an honest trade-off, the plan may reduce the count and say so"). The evidence cited (`research/serp.md` result 5, Swift Wellness's 82-item list "reads padded, with essentially zero individual commentary"; result 2, The Quality Edit's 11-item list has "genuine editorial voice") is real and points the right way. 17 items each carrying a verified link and a specific, non-generic trade-off (e.g. "the rings sit under your hand on the left-hand page") beats a thinner 25.

2. **Title drops "Tested and Ranked."** Agree. `facts.md` Hard rule 4 and the "Rejected / not verifiable" section are unambiguous: no first-hand testing of these 17 items is documented anywhere in the profile docs or research. Shipping the standard transactional title formula verbatim would be a false claim on this specific post. The chosen title still satisfies every checkable title rule (57 chars, keyword first, "Best" present, odd number, no semicolon/em-dash).

3. **All three external links are `[EXTERNAL_LINK_NEEDED:]`, accepting a possible shortfall below the 3-5 target.** Agree. `research/serp.md` §"Citations harvested from competitors" is explicit that the six deep-fetched competitors yielded zero `primary_source`/`authoritative_allowlist` links (144 links checked, all social/affiliate/retailer). `blog-craft.md` §External linking's own workflow for this exact situation is to mark `[EXTERNAL_LINK_NEEDED:]` and let the human resolve at Stage 3d rather than link to a ranking competitor. Shipping below-target external links is the correct trade-off against linking equity to a direct SERP competitor.

## Angle differentiation and the downsizing-filter tension

The angle is a genuine counterpoint, not a generic roundup wearing one. None of the six competitors in `research/serp.md` pair every pick with a specific, textured downside (savespendsplurge.com comes closest but isn't systematic); the "would this survive a downsizing" filter, borrowed directly from the r/stationery "start over" thread, is real differentiated territory.

But the filter is not consistently applied by the 17 chosen items, and the plan doesn't own this honestly:

- Item 2, Zebra Sarasa Clip gel pens 10-pack: `facts.md` trade-off literally states "a 10-colour set is exactly the 'buy the whole rainbow' purchase the downsizing thread warns about."
- Item 14, Mr. Pen pastel index tabs: trade-off states "a 480-piece pack is far more than one notebook will ever need."
- Item 13, Bande washi roll stickers: trade-off states this is "the item on the list most likely to sit unused in a drawer, which is exactly the downsizing thread's warning."

All three are recommended buys inside the "17 picks that earn their space," while their own stated trade-off describes them failing the exact filter that supposedly earned them a place. That isn't the same class of downside as "B5 won't fit an A5 sleeve." A reader who takes the filter premise seriously will notice the contradiction. This needs authorial handling (buy fewer colors/a smaller pack than pictured, or an explicit "even I bent my own rule here" acknowledgment), not silence, and right now the plan gives the outline/draft no instruction to do either. H2 8, "What I would skip (and what to buy instead)," is the natural place to resolve this, but the plan doesn't say what populates that section at all, which is also the fact-backing gap flagged above.

## Specific issues (only if not `approve`)

| # | Severity | Location in plan | Issue | Required fix |
|---|---|---|---|---|
| 1 | important | §Angle, §Key sections item 2, §Key sections item 8 | Three of the 17 picks (Zebra Sarasa Clip 10-pack, Mr. Pen 480-tab pack, Bande washi roll stickers) have `facts.md` trade-offs that explicitly describe them as failing the post's own "would this survive a downsizing" selection filter, and the plan gives no instruction for how the draft handles that contradiction. | Add a sentence to §Angle or §Key sections item 2 instructing that these three items be framed as "the category earns a slot; buy less than the linked pack" (name the three items) rather than left as a silent contradiction, OR add an explicit acknowledgment that these are the deliberate exceptions to the filter and say why they still make the list. |
| 2 | important | §Key sections item 8 ("What I would skip (and what to buy instead)") | This H2 has no specified content or source anywhere in the plan; it's the one H2 that doesn't trace to a sourced fact. | Add 1-2 sentences under §Key sections item 8 naming what it draws on: e.g. the three tension items from issue #1 re-examined with "buy less than pictured" guidance, and/or the generic decorative categories documented in `research/serp.md` result 4 (Goodgudi: themed erasers, themed pencils, mini pastel staplers) as the kind of item that made competitor lists but not this one. |
| 3 | minor | §Key sections / §Intro (not present anywhere in plan.md) | The mandatory affiliate disclosure (exact italic paragraph, last paragraph of the intro, required per `facts.md` §Product facts, `custom-instructions.md` §Content policy, and `site-conventions.md` §Post furniture) is never restated in plan.md itself; it's only reachable by the outline writer cross-referencing `facts.md`. | Add one line under §Product references planned or §Key sections noting the mandatory disclosure paragraph and its placement, so it can't be dropped at outline stage. |
| 4 | minor | §Length target | `facts.md`'s trade-off column already runs ~35-45 words per item; 17 items at that density plus the 5 non-item H2s, CTA, and 3-5 FAQ pairs is closer to 3,000-3,200 words than the planned 2,400-2,900 if trade-offs are used near-verbatim. | At outline stage, re-run the section-level word budget explicitly, and either nudge the target toward 2,700-3,000 or note where prose will need to compress the `facts.md` trade-off language. |
| 5 | minor | §External links planned, row 2 ("handwriting notes by hand aids retention/encoding compared with typing") | Unlike the "fresh start effect" and "sunk-cost fallacy" claims, this claim has no traceable origin in `facts.md`, `research/serp.md`, `research/reddit.md`, or `research/x.md`. | Note the claim's origin (editor's general domain knowledge) explicitly, or confirm it was added deliberately without research backing, so Stage 3d treats it with the right level of scrutiny. |

## Revision instruction (verbatim, for the editor)

In `plan.md`, make these changes:

1. Under "## Key sections (preview, becomes the outline in Stage 2)", after item 2 ("How I picked these 17..."), add: "Three items on this list, the Zebra Sarasa Clip 10-pack, the Mr. Pen 480-tab pack, and the Bande washi roll stickers, have honest trade-offs that describe them as failing this exact filter. The category earns its slot; the pack size does not. Section 8 must say so plainly and tell the reader to buy fewer colors / a smaller pack than the linked product where that option exists, rather than let the contradiction stand unaddressed."
2. Under item 8 ("What I would skip (and what to buy instead)"), add: "Draws on: (a) the three tension items named above, reframed as 'buy less than pictured'; (b) the generic decorative categories documented in `research/serp.md` result 4 (Goodgudi: themed erasers, themed pencils, mini pastel staplers) as the kind of item that fills competitor lists but doesn't make this one."
3. Under "## Product references planned", add a line: "Affiliate disclosure: mandatory italic paragraph, exact wording and placement per `facts.md` §Product facts (last paragraph of the intro, immediately before the first `##`)."
4. Under "## Length target", add a note: "Outline stage must re-check this against `facts.md`'s per-item trade-off length (already ~35-45 words each); if the total runs past 2,900, compress trade-off prose rather than cut items or framing sections."
5. Under "## External links planned", row 2, add a clause after the claim: "(claim not traced to any research file; editor's general domain knowledge, to be sourced or dropped at Stage 3d)."
