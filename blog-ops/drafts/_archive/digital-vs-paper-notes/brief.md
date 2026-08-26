# Brief: digital-vs-paper-notes

Written by: blog-editor (Stage 0 intake, autopilot file-intake — no human conversation).
Sourced from: `blog-ops/content-plan.md` row 14 + profile docs.
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

digital vs paper notes

## Category

Productivity, EdTech

(Resolved via `blog-ops/profile/site-conventions.md` §Categories per-cluster mapping:
"Note-taking / study-guide posts (sub-cluster) → Productivity + EdTech `[12, 9]`".
This post is a note-taking comparison, so it sits in that sub-cluster.)

## Intent

informational_pillar

Observed-intent note: the content-plan angle is a COMPARE post ("which is better
for memory?"). The five-value intent taxonomy in `blog-craft.md` §Post type matrix
has no `comparison` value, and `informational_pillar` is the closest fit for a
research-backed explainer. **Structure must follow the comparison shape**
(side-by-side table + per-option sections + a "which should you pick" decision
section), per the editor persona's Stage 2 intent-match self-check against the
observed SERP intent recorded in `research/serp.md`. **Length is calibrated at
Stage 1c from the top-5 SERP competitor average, not from the pillar row's
3,000–5,000 band** — a two-option comparison at pillar length would pad.

## Audience emphasis

Primary: students and early-career professionals who take notes for study or
work and are deciding whether to type or handwrite. Secondary: knowledge workers
landing on the specific "does handwriting help memory" question.

Pain points in play (per `audience.md`, priority order): #3 tool overwhelm
(iPad + app vs. notebook, which is actually worth it), #2 distraction (a laptop
in a lecture is also a distraction machine), #1 short on time (typing is faster,
but faster at what?).

## Research sources enabled

- serp: yes (always)
- reddit: yes
- x: yes

## Author voice

olga

Reasoning: single-author blog — `authors.md` lists one author (olga) and defines
no multi-author selection rubric, so the author is fixed. Her "went back for a
Master's after a decade in aviation PR and had to relearn how to study"
anecdote is directly on-topic for a study-notes comparison.

## What the human wants to convey

<from the content-plan angle; no intake conversation happened — autopilot>
- The headline question is **memory**: which one actually helps you remember more,
  paper or digital? Answer it honestly from research rather than declaring a winner.
- Do not write a lazy "it depends" post. Give a clear decision rule for when to
  reach for each, the way `note-taking-methods` gives a decision rule across methods.
- Keep the handwriting-vs-typing research claims scoped to exactly what the studies
  support. This topic is full of over-cited pop-science; over-claiming here is the
  main quality risk.
- Cover the practical middle ground readers actually live in (tablet + stylus,
  handwrite-then-digitize, search vs. recall trade-off), not just a two-column purity war.

## Product features to mention

- Text Summarizer — the natural fit near the end (condensing long notes/readings
  into something scannable). Introduce softly, after the educational content, per
  `product.md` §Positioning recommendations.

## Soon-to-ship features (do NOT flag as gaps)

- None.

## First-party data points to include

- None. `product.md` §First-party data availability lists tool usage/adoption as
  `hypothetical`, so nothing is citable. Do not invent adoption numbers.

## Avoid list

- No affiliate links and no `[AFFILIATE-LINK-PENDING:]` placeholders. If a specific
  notebook or app is named, link the existing roundup post instead of a retailer;
  this is not a commercial roundup.
- No affiliate disclosure block (Associates program is not live).
- No pricing for any named app (`blog-craft.md` §Own-product pricing claims applies
  to Olga's tools; third-party app pricing goes stale fast and the competitors
  module is OFF for this blog, so there is no verified pricing source — omit prices
  entirely rather than guess).
- No "this one trick changes everything" framing, no hustle-culture framing
  (`audience.md` §Language to avoid).
- Do not declare a universal winner. The evidence does not support one.

## Founder anecdote / story

Going back for a Master's in Marketing & Strategy after 8+ years in commercial
aviation PR, and having to relearn how to take notes as an adult student — laptop
in lectures vs. notebook, and what actually held up at exam time. Same anecdote
bank the `cornell-note-taking-method` and `note-taking-methods` posts draw on;
vary the wording so it does not read as copy-paste across posts.

## Internal link targets

Published posts (root-relative, no trailing slash, per `blog.trailing_slash: false`):
- `/note-taking-methods` — the method-comparison pillar; link UP to it (silo direction).
- `/cornell-note-taking-method` — works on paper or digital; natural anchor in the
  "what actually makes notes stick" section.
- `/mind-mapping-note-taking-method` — the method where paper vs. digital genuinely
  changes the experience.
- `/best-notebooks-for-note-taking` — for the paper side, instead of a retailer link.
- `/digital-detox-plan` or `/how-to-stop-doomscrolling` — optional, only if the
  "a laptop is also a distraction machine" point earns it.

## Source URLs for researcher to study

<none specified — researcher selects from the live SERP>

## Other notes

- **Tags:** pick 2–4 from the verified live tag list in `blog.md` §Tag taxonomy
  (lowercase, e.g. `note-taking`, `note-taking method`, `students`, `productivity`,
  `digital tools for productivity`, `education`). Do NOT emit `Focus` / `Planning`
  — those are not live tags, and published posts carrying them are known drift.
- **Publishing:** the post ships as a WordPress **draft** only. Going live is a
  human wp-admin action after the Rank Math focus keyword is set
  (`custom-instructions.md`).
- **Inbound links:** planned at Stage 2 and applied automatically at Stage 4b.5 —
  never left as a human action item (`custom-instructions.md` §Inbound internal links).

## Autopilot assumptions

This brief was written from files, not from an intake conversation
(`CONSOLE_RUN_STATE` set). Assumptions made, each flagged for the Gate 2 reviewer:

1. **Author = olga**, taken as fixed rather than proposed: `authors.md` defines a
   single author and no §Selection rubric, so the fallback path applied.
2. **Reddit and X research both enabled.** Both modules are on in `config.yaml`, and
   this topic has a large lived-experience discussion footprint (students arguing
   typing vs. handwriting) that the SEO-optimized top-10 will not carry. The brief
   template's "default serp only" was overridden deliberately.
3. **Intent recorded as `informational_pillar`** with a comparison-shape override
   and SERP-calibrated length — see §Intent above. Reconsider at Stage 1c if the
   observed SERP intent disagrees.
4. **Category = Productivity, EdTech**, from the site-conventions mapping table.
   No human confirmed it; the note-taking sub-cluster row is an exact match.
5. **Product feature = Text Summarizer**, chosen by topic fit (notes/reading
   condensation) since the content-plan row named none.
6. **Competitors module is OFF** for this blog, so no competitor profiles were
   consulted and the "Competitors to mention" table is intentionally absent.
   Any app named in the post is described behaviorally, never with prices or
   verified feature claims.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-08-05 13:37
- Human operator: slav (console autopilot run)
