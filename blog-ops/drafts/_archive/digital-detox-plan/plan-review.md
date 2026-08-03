# Plan Review: digital detox plan

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/digital-detox-plan/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: the plan's angle, structure, sourcing, and link discipline all check out against `serp.md`, `facts.md`, and `blog-craft.md`; only minor, non-blocking notes remain.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | `serp.md` §"Search intent" calls the SERP informational-with-how-to-sub-intent and explicitly says "no competitor... owns a true day-by-day plan" — the plan's 7-day, day-by-day `how-to-numbered` structure fills exactly that gap and is traceable to `serp.md` §"Angle opportunities" line 1. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes (1 minor gap) | H2s 1, 2, 3, 5, 6 each trace cleanly to a `facts.md` entry (Goodin cold-turkey quote; built-in screen-time tools; Goodin's 7-day ramp; the two Reddit maintenance quotes; the PMC stats + "removes an easy escape" quote). H2 4, "What to do when you slip," has no direct `facts.md` line to trace to — it's built from the brief's angle requirement and the general Reddit "cravings fade over ~2 weeks" theme rather than a specific sourced claim. Not fatal (it's prescriptive advice, not a factual claim), but worth tightening at outline stage — see note below. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a | `config.yaml` has `modules.competitors: false` and `facts.md` carries no "Competitor facts" rows (no named-competitor pricing/feature claims in this post) — the module is inactive for this blog/post, so this criterion doesn't apply. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | All 5 planned external links are allowlist-class (NIH/PMC ×2, The Guardian, Apple Support, Google Support). The PMC scoping review (rank 3) and The Guardian (rank 7) both sit in the top-10 SERP but are correctly linked anyway per `blog-craft.md` §"Authoritative-site allowlist" (gov/.edu + major-publication exceptions). The plan's own "Forbidden for this post" list matches `facts.md`'s forbidden-domain list exactly (health-in-mind.org.uk, lifeline.org.au, nuffieldhealth.com, everydayhealth.com, the reddit.com rank-8 thread). |
| Length target appropriate for the intent and H2 set | yes | 1,500–2,500 words is the correct `how_to` bracket per `blog-craft.md` §"Post type matrix," and the planned ≈2,300-word roll-up is defensible against 8 sections including 7 daily H3s, provided each day stays to the "concrete action... under ten minutes" the plan promises. This is ambitious but workable, not padded and not thin. |
| Open questions genuinely resolved or explicitly flagged | yes | 3 of 4 questions are resolved with real reasoning (section ordering, 7-day length vs. the ~2-week craving research, dropping the unverifiable HuffPost stat). The 4th (the three ⚠️ `facts.md` stats reached via a competitor citation chain) is explicitly left open and flagged for Stage 3d verification, with an instruction not to build a section on them — correct handling given the standard fallback. |
| Keyword's dominant intent is actually covered | yes | The keyword is procedural ("plan"); the H2 set delivers baseline → 7 numbered days → slip recovery → day-8 maintenance → an honest evidence section, which covers the how-to intent completely and adds the two structural elements (slip recovery, day-8 rules) that `serp.md` §"Angle opportunities" identifies as the gap. |

## Specific issues (only if not `approve`)

None — verdict is `approve`. The following are minor notes for the editor to carry into the outline stage; they do not block advancing this plan.

1. **H2 4, "What to do when you slip"** has no direct `facts.md` citation backing it (see rubric row 2). Recommend the outline explicitly ground this section in the Reddit "it took about two weeks... the cravings became less and less over time" theme (`facts.md` Voice-of-customer quotes, u/Thinkhuge) so the slip-recovery advice reads as informed by real detoxer experience rather than invented from scratch.
2. **Structural echo of the Guardian's Goodin plan.** The plan cites Tanya Goodin's 7-day ramp (Day 1 phone out of the bedroom → Days 6–7 full offline stretch) as "the closest structural precedent," and the post's own day-by-day arc follows a similar one-change-per-day escalation shape. Attribution and linking are correctly handled (Guardian is allowlist-class), but the outline stage should make sure the specific Day 1–7 actions are Olga's own construction, not a close paraphrase of Goodin's specific days, so the "nobody in the SERP does this" differentiation claim holds up beyond the two added sections (slip recovery, day 8+).
3. **Category assumption.** `site-conventions.md` §Categories marks the "Digital wellbeing" → Productivity mapping row "human to confirm." The brief/plan correctly apply the documented autopilot fallback (Productivity is the only confirmed fit), so this isn't a plan defect, but it's worth a human glance at some point since it's still an unconfirmed mapping rather than a verified one.

## Revision instruction (verbatim, for the editor)

(none — verdict is approve; the notes above are optional refinements for the outline stage, not required changes to `plan.md`)
