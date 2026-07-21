# Plan Review: mind mapping note taking

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/mind-mapping-note-taking-method/plan.md`. The reviewer did NOT write the plan.

## Verdict

request_revisions

One-line rationale: The angle, structure, intent match, title, and linking discipline are all strong, but the plan declares "None" under Open questions while `research/serp.md` and `research/reddit.md` both surfaced live open questions (notably the un-captured People Also Ask list that the FAQ must be built from) — a named-criterion miss that should be carried forward, not silently dropped.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | SERP shape is "mixed" (informational-dominant, thin commercial slice). The 8-section spine — definition → why → when-to-use/skip → numbered step-by-step → high-level paper-vs-digital → tips → mistakes → soft CTA → FAQ — mirrors `serp.md` §"Search intent" implication almost line for line, and keeps tools deliberately high-level to serve the dominant informational intent. |
| Every planned H2 traces to a sourced fact in `facts.md` | partial | 7 of 8 content H2s trace cleanly (§1 map-vs-web + OU definition; §2 VOC connections quotes; §3 Evernote decision framing + r/study + r/IBO skeptic; §4 Buzan rules + OU "central topic, work outwards" + 1–5 words; §6 node text + colour/images; §7 paragraphs-in-nodes). §5 "Paper vs Digital" has no dedicated `facts.md` row — it is supported only in `serp.md` (York "easier with paper and pen"; Hull A4/flip-chart/software; OU hand-drawn vs computer-generated), and `facts.md` is the writer's only citable pool. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a | `modules.competitors` is OFF; `facts.md` has no "Competitor facts" rows with `Last verified` dates. The SERP-ranking competitors (.ac.uk guides, Evernote, Goodnotes) are handled under the forbidden-links criterion, not this one. Criterion does not apply. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | The two external slots are `[EXTERNAL_LINK_NEEDED:]` placeholders explicitly routed to primary/authoritative sources (Buzan org/academic; academic/primary for dual-coding) and the plan states "never the .ac.uk / product competitors." Internal links are all own-site olgapak.com slugs. No Evernote/Goodnotes/York/OU/Hull URL appears anywhere in the link plan. |
| Length target appropriate for the intent and H2 set | yes | 1,800–2,200 sits inside the how_to matrix (1,500–2,500) and is justified by 8 content H2s plus four genuine whitespace angles (when-NOT-to-use, beginner mistakes, a narrated worked example, honest paper-vs-digital). Minor watch: competitors average only ~910 words, so the target is ~2x competitor length — the writer must earn the depth and not pad toward the top of the range. |
| Open questions genuinely resolved or explicitly flagged | no | Plan §"Open questions" says "None," but `serp.md` §"Open questions for editor" and `reddit.md` §"Open questions" raised several. Three are resolved implicitly elsewhere in the plan (worked-example image → Image plan; no software roundup → §5 + Avoid; r/IBO promo → reframe-only routing). But two are neither resolved nor flagged: (a) the live PAA questions were NOT captured, yet the plan carries a §9 FAQ that will be built from inferred questions; (b) no AI Overview was captured, a near-publish click-economics recheck. These are silently dropped. |
| Keyword's dominant intent is actually covered | yes | Dominant informational "teach me the method + when to use it" is fully covered (definition, why, decision rule, step-by-step, tips, mistakes); the thin commercial slice is served proportionately by a high-level paper-vs-digital paragraph rather than a roundup. |

## Specific issues (only if not `approve`)

| # | Severity | Location in plan | Issue | Required fix |
|---|---|---|---|---|
| 1 | important | §"Open questions (resolved or flagged for plan review)" | Declares "None," but `serp.md` and `reddit.md` raised open questions; two are unresolved and carried nowhere: the un-captured live PAA list (the §9 FAQ will otherwise be invented from scratch) and the no-AI-Overview near-publish recheck. This is a silent drop of a named criterion. | Replace "None, awaiting plan review to proceed." with the two carried-forward flags (verbatim text below) so the outline/writer and finalize step inherit them. |
| 2 | minor | §"External links planned" | Only 2 external links are planned; `blog-craft.md` §"External linking" and the quality gates call for 3–5. The scarcity rationale (competitors cite almost no primary sources) is sound, but the post risks a gate flag for being light on citations. | Add one line noting the writer may promote a third primary/allowlist source if one fits naturally (e.g. an independent radiant-thinking / note-taking-efficacy source), else keep the two slots and accept the deliberate shortfall. |
| 3 | minor | §"Key sections" §5 "Paper vs. Digital Mind Maps" | No dedicated `facts.md` row backs this section; support lives only in `serp.md` (the writer's citable pool is `facts.md`). | Either add a short `facts.md` pointer for the paper-vs-digital claims (York "easier with paper and pen"; Hull A4/flip-chart/software; OU hand-drawn vs computer-generated) or keep the section framed as Olga's tested experience so no un-sourced factual claim is asserted. |

## Revision instruction (verbatim, for the editor)

In `plan.md`, replace the entire body of the section `## Open questions (resolved or flagged for plan review)` (currently the single line "None, awaiting plan review to proceed.") with:

```
Resolved during synthesis:
- Readers repeatedly asked to SEE a finished map (r/IBO, r/NoteTaking) — resolved by the original worked-example image (Image plan) that no competitor provides.
- r/PKMS/r/study threads skew to tool-shopping and self-promo — resolved by keeping §5 high-level and the explicit "NOT a software roundup" constraint.
- The strongest craft source (r/IBO) ends with a tutoring plug and is flagged as an ad — resolved by reframing its technique details as Olga's tested advice and never citing/linking it.

Flagged forward (not resolvable at plan stage):
- Live People Also Ask questions were NOT captured this run (serp.md §Open questions). The §9 FAQ must be drafted from inferred/reader-phrased questions; if a live PAA pull is available before drafting, use it to shape the FAQ block.
- No AI Overview was captured for this query (serp.md §Open questions). Click economics could shift — re-check the live SERP near publish/finalize.
```

Additionally, in `## External links planned`, append one sentence after the table: "If a natural third primary/allowlist source surfaces at Stage 3d (e.g. an independent source for the radiant-thinking / connections-aid-recall claim), promote it to reach the 3–5 external-link range; otherwise the two deliberate slots stand."

Finally, in `## Facts / data to feature prominently`, add one bullet so §5 has a citable anchor: "- Paper vs. digital framing: paper/large sheet suits big maps, software helps for editing/sharing — surface as Olga's tested experience (support exists in serp.md via York/Hull/OU but not as a standalone facts.md row; do not assert as researched fact without an [EXTERNAL_LINK_NEEDED:] or [VERIFY:] marker)."
