# Plan Review: charting method note taking

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/charting-method-note-taking/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: the plan's angle, structure, fact backing, and honest handling of the null Reddit/X results all match the observed SERP evidence, the external-link plan respects the forbidden/allowlist rules, and the product mention correctly avoids price/usage claims — only minor refinements are worth flagging, none of them blocking.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | serp.md: dominant intent informational with a "show me how to actually do this today" sub-intent, SERP shape `definitional`→how-to, explicitly "do not build a comparison table/listicle." Plan's §Intent, §SERP shape match, and 10-section skeleton (definition → when it wins/flops → 5-step how-to → worked example → paper/digital → mistakes → sibling positioning → CTA → FAQ) mirror this exactly and explicitly forbid the pillar's 4-method comparison shape (plan.md §SERP shape match, §Key sections). |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | §1 (definition/aliases) ← facts.md Named examples ("grid notes", "matrix method"); §2/§3 (when it wins/flops) ← facts.md §Quotes (Sheridan, York, UTC, Plaud, e-student); §3's negative-retention note ← facts.md §Rejected; §4 (prep-before, short phrases) ← facts.md §Quotes. §5 (worked example) is an invented illustrative example by design (the angle explicitly needs a domain distinct from the SERP's), not a factual claim requiring a citation — that's the correct call, not a gap. §6 (paper vs. digital) stays high-level and routes its only two unverified claims through proper `[EXTERNAL_LINK_NEEDED:]` candidates rather than asserting them. |
| Every competitor claim is fresh (`Last verified` <=14 days) | n/a | `modules.competitors` is off for this blog per the dispatch brief — the plan correctly records this (brief.md §Autopilot assumptions #6: "Stage 1.5c is correctly skipped") and contains no "Competitor facts" table. Nothing to check. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Confirmed link targets are utc.edu (rank 8) and subjectguides.york.ac.uk — both reasoned as allowlist-class per blog-craft.md's "Government/academic: any `.gov` or `.edu` domain" carve-out, which explicitly overrides the top-10-forbidden rule; the plan states this reasoning inline for both. utc.edu is a literal `.edu` match. york.ac.uk is not literally enumerated (the list names `.gov`/`.edu` plus named UK/EU/CA/AU *regulators*, not university subdomains generally) but clears the heuristic clause cleanly: a non-commercial UK university library research-skills guide isn't a realistic monetizable ranking competitor. Worth one explicit sentence in the plan owning this as a heuristic extension rather than literal enumeration (see note below), but the conclusion is sound and I'd reach the same call. The other two rows (PMC, retrieval-practice source) are correctly unresolved `[EXTERNAL_LINK_NEEDED:]` candidates, not live links, and the hard-constraint list (evernote.com, plaud.ai, meetjamie.ai, e-student.org, sheridancollege.libguides.com) is complete and matches serp.md's top-10 set. |
| Length target appropriate for the intent and H2 set | yes | how_to matrix range is 1,500–2,500 (blog-craft.md §Post type matrix). Plan's own competitor-average arithmetic checks out (544+667+1242+2777+1367+1406+1898 = 9,901 / 7 ≈ 1,414, matching the plan's "~1,400"). The 1,800–2,100 target is justified by two sections the SERP doesn't do well (a genuinely filled-in worked example, a dedicated mistakes section) rather than by padding — consistent with blog-craft.md's "match top-5 competitor length... longer is not better." |
| Open questions genuinely resolved or explicitly flagged | yes | Three of four are marked `[x]` with real evidence cited (the "forgotten method" framing, the no-retention-citation finding, the worked-example domain constraint). The fourth is correctly left `[ ]` and explicitly flagged as intentional (two of four external links are `[EXTERNAL_LINK_NEEDED:]` pending Stage 3d verification), not silently dropped. |
| Keyword's dominant intent is actually covered | yes | All of brief.md's required content (definition, when-it-wins/flops, same-day 5-step workflow, one full worked example, paper-vs-digital at high level, common mistakes, honest sibling positioning, one soft product mention, FAQ) has a corresponding planned section. Nothing from the brief is dropped. |

## Reddit/X handling (explicit check per dispatch instructions)

Both research/reddit.md and research/x.md report essentially zero charting-specific discussion (75 merged Reddit threads, zero charting mentions; X's on-topic set tops out at 33 likes). The plan handles this honestly rather than overclaiming or ignoring it:
- §Angle states plainly "across 75 threads... nobody mentions it once" and frames charting as "under-used / rarely discussed," never "nobody should use it" (matches facts.md's own instruction not to claim popularity either way).
- §Tone hooks explicitly instructs: "Do not pretend there is a community of charting enthusiasts; there isn't, and the research says so."
- §Open questions item 1 resolves the "forgotten method" framing by citing the two independent null-result captures rather than asserting it as received wisdom.
This is the correct use of a negative research result — it becomes the angle's spine rather than being papered over.

## Product positioning check (per dispatch instructions)

Matches product.md: one soft mention only, Text Summarizer (the tool that best fits "condense a source before charting it"), placed after educational content, no price/tier/usage-number language anywhere in the plan. One real ambiguity: §Product references planned says the mention lands "in §6 or §9 only" — §6 (Paper vs. digital) sits in the middle of the ten-section skeleton, not "near the END of the post, after the educational content" as product.md §Positioning recommendations requires; only §9 (Conclusion + CTA) clearly satisfies that rule. This is a minor fix, not a blocking one (see revision note below, offered as an optional tightening rather than a required change since the plan still passes every rubric item as written).

## Specific issues

None rise to `important`/`critical`. Two minor, non-blocking notes for the editor to consider before or during outlining (optional, not required for approval):

| # | Severity | Location in plan | Issue | Suggested fix |
|---|---|---|---|---|
| 1 | minor | §Product references planned | "one soft mention in §6 or §9 only" leaves open the possibility of placing the mention in §6 (Paper vs. digital), which is mid-post, not "near the end" per `product.md` §Positioning recommendations | Pin the mention to §9 (Conclusion, immediately before the CTA) only, and drop the "or §6" option, at outline stage |
| 2 | minor | §External links planned, York row | `subjectguides.york.ac.uk` is reasoned as allowlist-class by analogy to `.edu`, but blog-craft.md's allowlist literally enumerates `.gov`/`.edu` plus named regulators, not `.ac.uk` generally | Add one clause at outline stage owning this explicitly as a heuristic-clause application ("non-commercial UK academic library guide, not a realistic ranking competitor") rather than a literal allowlist match, so a later reviewer doesn't mistake it for an enumerated exception |

## Revision instruction (verbatim, for the editor)

(none — verdict is approve; the two notes above are optional tightening for the outline stage, not required changes to plan.md)
