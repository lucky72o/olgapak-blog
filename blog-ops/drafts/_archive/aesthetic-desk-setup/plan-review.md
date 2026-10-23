# Plan Review: aesthetic desk setup

Written by: plan-reviewer agent (Stage 1c.5), iteration 2 (final pass; revision cap is 1). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/aesthetic-desk-setup/plan.md`. The reviewer did NOT write the plan. Prior review archived at `plan-review-v1.md`.

## Verdict

approve

One-line rationale: all three required fixes from `plan-review-v1.md` landed verbatim and correctly (affiliate disclosure, Step 6 no-invented-stat guard, one-primary-pick rule); a fresh pass over the full plan against `serp.md`, `facts.md`, `brief.md`, and `blog-craft.md` finds no other rubric failure, only two trivial, non-blocking notes.

## Fix verification (from `plan-review-v1.md`)

| # | Issue | Verified fix |
|---|---|---|
| 1 (critical) | Intro must carry the standing affiliate disclosure | Fixed. `plan.md` §Key sections, item 1, now states the intro ends with the disclosure "as its last paragraph, in italics, immediately before the first `##` heading," and quotes it in full. The quoted text is byte-for-byte the standing disclosure defined in `site-conventions.md` §Post furniture ("*Some links in this guide are affiliate links. As an Amazon Associate, I earn from qualifying purchases, at no extra cost to you.*") — not paraphrased, not invented. |
| 2 (important) | Step 6 has no `facts.md` grounding; risk of an invented phone-usage stat | Fixed. `plan.md` §Facts / data to feature prominently now has a final bullet stating Step 6 "has no dedicated fact, stat, or quote in `facts.md`," directs the writer to reasoned advice plus the two named internal links only, forbids inventing a phone-usage/attention-span statistic, and routes any wanted stat to `[VERIFY:]` per `blog-craft.md`. This is the correct resolution: no fact exists to force, so the plan honestly flags the gap and closes the fabrication risk instead. |
| 3 (minor) | Multi-product steps should name one primary pick, not a parallel list | Fixed. `plan.md` now has an "Outline-stage rule for multi-product steps (Steps 2 and 4)" paragraph requiring one primary pick per decision with any alternate as a brief in-sentence aside, never a bulleted pair. |

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Re-verified directly against `serp.md` §Search intent: "informational-visual with a strong commercial tail," PAA led by "How do I make my desk look aesthetic?", and an explicit instruction to "lead with the small number of styling decisions... then attach specific buyable picks per decision, rather than opening with a shopping list." `plan.md`'s `how_to` override and "7 decisions, products attached per decision" structure implement this instruction directly, and correctly drop the transactional-only `best`-in-title rule (`blog-craft.md` §Title rules). Unchanged from v1, still correct. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Steps 1, 2, 3, 4, 5, and 7 each trace cleanly to a `facts.md` entry (visual-competition study, Reddit cable-management theme + 2 products, OSHA's three monitor rules + lamp, the 4 surface/palette products, the plant study + 47% debunk + the contested personal-item quotes, and the maintenance quote). Step 6 ("Give your phone somewhere else to live") is the one step with no `facts.md` entry, but this is now the honestly-flagged exception fixed above: the plan makes no factual claim there for the writer to source, only reasoned advice and two internal links, so there is nothing left unsourced. The step itself is independently justified by `brief.md`'s own "what the human wants to convey" list ("a phone that lives somewhere else is the part that actually changes how the day goes") and by the audience's #2 priority pain point ("losing focus to distraction, especially the phone," `audience.md` §Pain points), so it belongs in the plan even without a citable stat. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | yes | Not applicable: `modules.competitors` is off (`brief.md` §Autopilot assumptions item 6), so there is no competitors table and no Stage 1.5c gate. Correctly absent. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Cross-checked `plan.md` §External links planned (PMC3072218, OSHA `osha.gov`, PMC10346441) against every URL in `serp.md`'s 7 analyzed competitors (aestheticroomcore, slouchonline, orderofficefurniture, stylebyemilyhenderson, savespendsplurge, nikkilo, octet.design) and against `serp.md` §"Citations harvested from competitors": no overlap. All three are `.gov`/NLM domains, `blog-craft.md`'s authoritative allowlist. The plan also declines to link Emily Henderson's "5 items or less" page (`facts.md` explicitly marks it "do not link, top-SERP competitor") and names the IKEA ALEX drawer with no link at all rather than a competitor URL. |
| Length target appropriate for the intent and H2 set | yes | 2,000–2,400 words is inside `blog-craft.md`'s `how_to` band (1,500–2,500). Recomputed the 7-competitor average independently from the word counts in `plan.md`/`serp.md` (1,026 + 1,867 + 2,272 + 2,200 + 1,934 + 1,071 + 3,797) / 7 = 2,023.9 — the plan's "roughly 2,000 words" claim is accurate, and the target sits right at that average across intro + 7 steps + a closing pick-3 + CTA + FAQ. |
| Open questions genuinely resolved or explicitly flagged | yes | The two logged open questions (intent override, IKEA ALEX unlinked) remain correctly resolved/flagged. The affiliate-disclosure MUST that v1 caught as a silent drop is now fixed inline rather than merely logged, which is the stronger resolution. See also the minor note on the monitor-stand placement below, which is flagged inline (if informally) rather than silently dropped. |
| Keyword's dominant intent is actually covered | yes | The dominant informational-visual/method intent is covered by the 7-decision structure plus an FAQ built to include the PAA's own question verbatim; the secondary commercial tail is covered by attaching a named, tagged product to the relevant steps rather than opening with a shopping list, matching `serp.md`'s stated structural implication. |

## Minor notes (non-blocking)

- `plan.md` §Products planned to appear lists the Bamboo Monitor Stand Riser as "(Step 1 or 4 — raises the screen, hides small clutter)." This placement is still undecided at the plan stage. It's not a silent drop (the ambiguity is stated plainly, not hidden), but the outline stage should pick one step for it rather than carrying the ambiguity forward, to avoid the product either appearing twice or being dropped by accident.
- The meta description in `plan.md` §Meta description (draft) is logged as "(142 characters.)" but is actually 144 characters by direct count. Both are comfortably under `blog-craft.md`'s ≤160-character limit, so this has no practical effect and needs no fix — noting only for accuracy.

## Specific issues (only if not `approve`)

None. No rubric criterion fails; the two items above are logged as non-blocking notes, not required fixes.

## Revision instruction (verbatim, for the editor)

(Empty — verdict is `approve`.)
