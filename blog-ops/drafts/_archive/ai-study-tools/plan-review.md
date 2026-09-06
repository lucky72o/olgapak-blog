# Plan Review: ai study tools

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/ai-study-tools/plan.md`. The reviewer did NOT write the plan.
This is the iteration 2 (re-review) pass. Prior verdict at `plan-review-v1.md` was `request_revisions` with a 7-point instruction; this pass verifies each fix landed and checks for regressions only, per the dispatch's scope discipline.

## Verdict

approve

One-line rationale: all 7 required fixes from `plan-review-v1.md` landed correctly and verbatim in `plan.md`, the em-dash sweep of `plan.md`, `brief.md`, and `facts.md` is clean with no mangled sentences, and the firmer product-link commitment does not blow the citation-link budget since it is a distinct, brief-sanctioned link category.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from iteration 1 plus fix 4: §1's heading is now "So What Are the Best AI Study Tools, Really?", a question containing the target keyword, closing the one heading-structure gap iteration 1 flagged. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Unchanged from iteration 1 (already passing); fix 6's explicit tool-to-H2 mapping (§2 NotebookLM/Claude, §3 Otter.ai/Gemini, §4 ChatGPT/Khanmigo, §5 Perplexity/Wolfram Alpha, §6 the grouped all-in-ones) makes the existing sourcing traceable per-section rather than just per-post, which is what was asked. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | yes (module off) | Unaffected by this revision pass. `modules.competitors` is still off per `brief.md`'s autopilot assumption #7; no `facts.md` "Competitor facts" table exists to check. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Fix 3 landed in full: the citation table (5 rows, all `primary_source`/`authoritative_allowlist`) is unchanged and clean; the new firm paragraph commits Perplexity, Claude, Gemini and Otter.ai to real official-page links (confirmed against `research/serp.md`'s actual top-9 URL list, none of these four domains rank), states the trim order (cut Wolfram Alpha or OpenAI first, never these four), and spells out why the five/six top-10 vendor pages stay name-only. No forbidden URL entered the plan. |
| Length target appropriate for the intent and H2 set | yes | Unaffected by the 7 fixes beyond becoming checkable: fix 6's mapping confirms 8 individually described tools at ~130 words plus the grouped 9th pick fit inside the existing ~2,400-word target without contradicting the 2,000-3,000 word range for transactional intent. |
| Open questions genuinely resolved or explicitly flagged | yes | Fix 2 landed: the "personally tested" bullet now names the concrete spot-test picks (NotebookLM, ChatGPT Study Mode, Studley), states the explicit "no sentence anywhere in the draft may imply firsthand use" rule until that happens, and commits the action item to `action-items.md` at Stage 4b so it reaches Gate 2 as a checkbox. |
| Keyword's dominant intent is actually covered | yes | Unaffected by this pass; 9 named picks with "best for" framing plus the two page-1 gaps (free-tier limits, when-not-to-use) still directly serve the transactional intent. |

## Fix-by-fix verification (iteration 1 to iteration 2)

| # | Fix required | Landed? | Evidence |
|---|---|---|---|
| 1 | Remove every em-dash from `plan.md`; sweep `brief.md`/`facts.md` too, without mangling sentences | yes | `grep -n '—'` returns nothing in `plan.md`, `brief.md`, or `facts.md`. Remaining `–` (en-dash) hits in all three files are exclusively numeric ranges (`3–5`, `1–2`, `2,000–3,000`, `_raw/01`–`04`, `168–211 likes`), which `writing-standards.md` §Forbidden characters explicitly allows. Read both swept files in full: no comma-splice nonsense, no dropped words, no orphaned punctuation. |
| 2 | Add concrete spot-test action (NotebookLM, ChatGPT Study Mode, Studley) plus explicit no-implied-firsthand-use rule to §Open questions | yes | Plan lines under "Can this post claim the tools were 'personally tested'?": "no sentence anywhere in the draft may imply firsthand use" stated explicitly, followed by "the recommendation to Olga is to spot-test three picks before approving, NotebookLM, ChatGPT Study Mode, and Studley," with the reasoning for picking Studley preserved from the instruction. |
| 3 | Firm real-link commitment for Perplexity/Claude/Gemini/Otter.ai, stated trim order, name-only rationale for top-10 vendor pages | yes | §External links planned: "Separately and non-negotiably, the four reviewed tools that are NOT top-10 SERP URLs each get a real link... This is not conditional on the external-link budget," trim order given ("the Wolfram Alpha and OpenAI citation rows above are cut first, never these four product links"), and a full paragraph on why the top-10 vendor pages stay name-only (link-equity harm, not a monetization question). |
| 4 | §1 heading becomes a question containing the target keyword | yes | "So What Are the Best AI Study Tools, Really?" |
| 5 | Meta description ≤160 characters | yes | Independently counted: 159 characters, matches the plan's own claim. |
| 6 | Explicit tool-to-H2 mapping under §Key sections | yes | New "Tool-to-section mapping" block lists all five section assignments plus the word-budget arithmetic that depends on it. |
| 7 | §Key sections item 9 commits FAQ to the 4 verified PAA questions | yes | New "§9 FAQ commitment" line: 4 Q/A pairs, the exact 4 questions from `facts.md` §"People Also Ask" quoted verbatim, explicit no-invented-fifth-question rule. |

## Regression check

Looked specifically for anything the 7 fixes could have newly broken, since that is this pass's job:

- **External link budget.** Fix 3's firm commitment adds 4 links on top of the existing 5-row citation table, for 9 total external destinations. This does not violate `blog-craft.md` §External linking's "3-5 external links per post" cap: that rule's own anchor-text guidance ("literal claim being cited") scopes it to citation-style evidence links, which is exactly the 5-row table the plan says "matches blog-craft.md's 3 to 5 range." The 4 product links are a distinct, brief-sanctioned category: `brief.md` §Other notes/Affiliate policy already establishes, independent of this revision, that `custom-instructions.md` §Content policy requires linking each reviewed software tool to its own official page in a "best X" roundup. Two different rules governing two different link types, not one rule violated twice.
- **Sentence integrity after the dash sweep.** Read `plan.md`, `brief.md`, and `facts.md` in full. No comma splices read as nonsense, no orphaned clauses, no doubled punctuation.
- **Nothing else in the plan changed** that touches the two precedence questions already resolved in iteration 1 (testing-claim promise, forbidden-link vs. affiliate-link collision); both remain resolved as before and are not re-litigated here.

## Specific issues (only if not `approve`)

None.

## Revision instruction (verbatim, for the editor)

(empty, verdict is approve)
