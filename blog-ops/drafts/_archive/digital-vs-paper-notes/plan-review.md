# Plan Review: digital vs paper notes

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/digital-vs-paper-notes/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: every rubric criterion passes — the plan correctly overrides the pillar-row defaults with SERP-calibrated evidence, contains zero forbidden links, and its central "honest page" angle is deliverable precisely because it is built around *scoping and citing*, not around having a pile of pre-verified statistics.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | `serp.md` records dominant intent as "comparison (informational)" with the explicit implication "lead with a direct comparison... structure around the decision the reader is trying to make." The plan's §Intent honestly names the taxonomy mismatch (no `comparison` value exists) and compensates by keeping `informational_pillar` as the recorded value while overriding structure to a comparison shape (four-option table → per-side wins → hybrid → decision rule). This is a documented, reasoned override, not a silent mismatch. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | §1 → `guts.wisc.edu` three-way split (facts.md §Named examples). §2 → Mueller & Oppenheimer (facts.md §Named examples). §3 → same + the fluffyofblobs reddit quote ("Writing down notes with an iPad would be comparable," facts.md §Voice-of-customer quotes). §4 → `utsc.utoronto.ca` accessibility point + grabthespeed's ctrl+F quote (both in facts.md). §5 → DueJudge944's "easier to review" quote + the verbatim-transcription mechanism as the *why* behind the friction/summarizing point. §6 → ImaginaryEnds hybrid quote + AgentIndependent306 "screw aesthetic" quote (both in facts.md). §7 → CheerlessBrad / Icy_Two_1711 stakes-not-personality quotes. Minor, non-blocking note: a few sub-bullets under §4/§5 (legibility, diagram freedom, "no notifications") are reasonable but have no individual facts.md row — instruct the outline/writer stage to keep these as general framing, not specific claims, or mark `[VERIFY:]` if stated as fact. |
| Every competitor claim referenced by the plan is fresh (`Last verified` <=14 days) | n/a (treated as pass) | `modules.competitors: false` for this blog (per dispatch context) — no `research/competitors.md` and no "Competitor facts" rows exist, correctly. Nothing in the plan makes a competitor pricing/feature claim; the SERP articles are cited only as *examples of framing to beat*, never as sourced facts. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | External-links table: SAGE journal (`primary_source`), NLM/PMC (`authoritative_allowlist`), ERIC `.gov` (`authoritative_allowlist`), `guts.wisc.edu` and `utsc.utoronto.ca` (`.edu`, `authoritative_allowlist` per `blog-craft.md` §Authoritative-site allowlist, which explicitly permits `.edu` "even when in top SERP"). `research.com`, `utwente.nl`, `universalcpareview.com`, `wondertools.substack.com`, `rkursem.medium.com` are all correctly excluded and enumerated as forbidden in `facts.md` §Linking rules. Zero violations. |
| Length target appropriate for the intent and the H2 set | yes | 2,400–2,700 undercuts the `informational_pillar` row's 3,000–5,000 band, but `blog-craft.md` §Body rules itself instructs "match top-5 SERP competitor length," which takes precedence over the matrix's blanket band for a topic like this. The plan shows its math (excludes `universalcpareview.com`'s off-topic CPA/proxy filler and `research.com`'s device-ownership stat block as non-substantive padding) rather than just asserting a number. For 7 substantive H2s + a comparison table + a decision-rule framework + conclusion + FAQ, 2,400–2,700 is enough room to avoid feeling thin, and short enough to avoid the two-option-topic padding the brief explicitly warns against. |
| Open questions genuinely resolved or explicitly flagged | yes | Both remaining `[ ]` items are explicitly flagged with the editor's own recommendation attached, not silently dropped. See rulings below — the editor should treat both as resolved per this review. |
| Keyword's dominant intent is actually covered | yes | The four-option table gives the reader the whole landscape immediately; per-side "where X wins" sections cover the comparison; the hybrid section covers the middle ground `serp.md` §Avoid pitfalls explicitly flags three competitors for missing; the decision-rule close directly beats `utwente.nl`'s "it depends on you," which is the SERP's dominant (and brief-forbidden) ending pattern. |

## Rulings on the two flagged open questions (for the editor to apply verbatim)

**(a) Should the post name `research.com`'s "Quick Answer" framing, or just state its own scoped version?**

Ruling: confirm the editor's recommendation — **do not name `research.com` or any competitor.** Reasons: (1) `research.com` is a forbidden top-10 competitor per `facts.md` §Linking rules — naming it by name without linking it reads as pettiness and still sends curious readers searching for a direct ranking competitor, which is the opposite of what the forbidden-link rule is protecting against in spirit. (2) The `guts.wisc.edu` self-disclaimer quote already delivers the sharper version of the same point ("even the academic-looking, `.edu`-authoritative pages concede their own retention claims aren't established fact") using a source this post is explicitly allowed to cite and link. (3) `voice.md` §Tone is warm and practical, not combative — correcting-by-name reads as scoring a point off a competitor rather than serving the reader, which is off-brand. Keep this ruling as written in plan.md; no change needed there, it already states this recommendation correctly.

**(b) Should the post use exact "~13 wpm handwriting vs ~40 wpm typing" figures, or omit them?**

Ruling: confirm the editor's recommendation — **omit the exact figures**, describe the speed gap qualitatively, unless Stage 3d traces them to a verified primary source (the harvested `advanceweb.com` / `typing.com` candidates in `facts.md` §Statistics). This is not a close call: the same number pattern has two independent low-credibility appearances (an unattributed sentence on a top-10 competitor page, and a separate zero-engagement, rejected X post) with zero primary-source confirmation in this research pass. Shipping it un-verified would directly contradict this post's entire differentiator — being the one page that doesn't repeat pop-science as fact. Keep this ruling as written in plan.md; no change needed there.

## Central-angle stress test (the most important question in this review)

The plan's differentiator is being the honest, scoped page on a SERP where four of seven competitors assert "handwriting improves memory" with zero citation. `facts.md` currently shows **0 verified / 4 needs-verification / 6 rejected** — on its face this looks like a shortage of ammunition. It is not, and the plan does not need a fallback beyond the one it already has, for one structural reason: **the angle is built on a methodology (scope precisely, cite the actual source, admit what isn't known), not on a stock of pre-verified statistics.** A zero-verified-stats tally is not a weakness for this angle — it is close to the point being made about the rest of the SERP.

Walking through what the post's core claim actually depends on:
- The existence and general finding of Mueller & Oppenheimer (laptop note-takers transcribe more verbatim and perform worse on conceptual questions) is recorded in `facts.md` §Named examples as "well established" independent of the specific percentages — this is the load-bearing claim for §2 and §3, and it does not require the 14.6%/8.8% figures to stand. The post can state the qualitative finding and cite the DOI directly (a `primary_source`), which is exactly what the plan's §External links planned table already does.
- The two items genuinely gated on Stage 3d — the exact verbatim percentages and the replication question — are each already handled with an explicit, correctly-ordered fallback in `facts.md` §Rejected and in the plan's own "Stage 3d instruction" line: if confirmed, promote and use; if not, "the post omits it silently and simply keeps the original claim tightly scoped." That is the right fallback design, and it is already written down where the writer will see it.
- One gap worth naming for completeness, not for revision: neither `facts.md` nor the plan states an explicit fallback for the low-probability case that Stage 3d *cannot even confirm the base qualitative finding* against the DOI (e.g., paywall access, or wording that doesn't match the accepted paraphrase). Given the study's real-world prominence, this is a low-risk gap, and the general instruction to "mark `[VERIFY:]` for anything not traceable to facts.md" already covers it procedurally. This does not block approval; flagging it here so the writer/outline stage carries the same discipline into that unlikely scenario.

Verdict on the stress test: the angle stands up. If Stage 3d cannot verify the Mueller & Oppenheimer specifics, the post still has a full, honest post to write — it simply states the well-established qualitative finding, cites the primary journal directly, quotes the `guts.wisc.edu` self-disclaimer and the r/notebooks skepticism as evidence the audience already distrusts vague "research confirms" framing, and closes on the stakes-based decision rule from Reddit. None of those depend on the gated numbers.

## Specific issues (only if not `approve`)

None — verdict is `approve`. The facts.md sub-claim sourcing note and the Stage-3d total-non-confirmation gap above are non-blocking observations for the writer/outline stage to carry forward, not required plan edits.

## Revision instruction (verbatim, for the editor)

(empty — verdict is approve, no revision required.)
