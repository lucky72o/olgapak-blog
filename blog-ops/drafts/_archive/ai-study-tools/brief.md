# Brief: ai-study-tools

Written by: blog-editor (Stage 0 intake, AUTOPILOT file intake, no human conversation).
Sourced from: `blog-ops/content-plan.md` row #18 + profile docs.
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

ai study tools

## Category

EdTech

Resolved against `blog-ops/profile/site-conventions.md` §Categories: the post's
pillar is "Learning & self-growth" (study/student-facing) crossed with "AI tools
for productivity and content creation". The mapping table sends study-cluster
content to EdTech; the AI-tools pillar maps to Productivity. Primary category is
EdTech (the reader is a student studying), with Productivity as the secondary
if the adapter supports multiple.

## Intent

transactional

The content-plan angle is "COMMERCIAL(soft) roundup: 10 Best AI Study Tools for
Students in 2026". Per `standards/blog-craft.md`'s post-type matrix, a "best X"
roundup where the reader is choosing between named tools is transactional
(soft-commercial), not informational. Stage 1a's observed SERP intent will
confirm or correct this before the plan is written.

## Audience emphasis

Primary audience, student segment: students and early-career learners who are
stretched thin, curious about AI but skeptical of hype, and specifically hitting
pain point #3 ("tool overwhelm, not knowing which AI tools are actually worth
adopting versus hype") and #1 ("overwhelmed and short on time"). Secondary
emphasis: self-improvers and knowledge workers who study on the side.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` is on; students discuss AI study tools
  heavily on r/college, r/GetStudying, r/studytips, high-value voice-of-customer
  and the main source of honest "this one is overhyped" counter-takes)
- x: yes (`modules.x_research` is on; AI-tool discourse moves fastest on X, and
  it surfaces which tools shipped or changed recently)

## Author voice

olga

Reasoning: single-author blog, `blog-ops/profile/authors.md` lists exactly one
author (olga) and defines no selection rubric, so `author_voice` is fixed. Her
stated expertise (AI tools for productivity, learning & self-growth) matches this
post directly.

## What the human wants to convey

Derived from the content-plan row and the blog's point of view, no live intake
conversation happened (autopilot). See "Autopilot assumptions" at the bottom for
what was inferred rather than stated.

- A genuinely useful shortlist of AI study tools for students in 2026, not
  another scraped listicle. The blog's stated point of view is explicit that it
  "does not publish generic SEO listicle filler."
- Each tool gets a clear "best for" segment so the reader can self-select fast
  rather than reading all ten.
- Honest about limits: where a tool is overhyped, where the free tier actually
  stops being useful, where AI is the wrong answer for studying. This is the
  differentiator against the SERP incumbents, which are almost all uncritical.
- Anchored in how students actually study (recall, note review, summarizing
  dense reading, planning a study week), not in tool-feature tourism.
- Beginner-friendly: translate every AI term on first use per
  `audience.md` §Niche jargon translation.

## Product features to mention

Soft, at the end, per `product.md` §Positioning recommendations, matched to the
topic rather than stuffed in:

- Text Summarizer (condensing dense readings / lecture notes, the closest fit
  to a studying workflow)
- Acronym Explainer (decoding unfamiliar terms in course material)

Do NOT hard-sell, do NOT list all four tools, and do NOT position them as
competitors to the reviewed study tools. One natural next-step mention near the
CTA.

## Soon-to-ship features (do NOT flag as gaps)

None. No soon-to-ship features were stated (autopilot: nothing in the content
plan or profile docs names any).

## First-party data points to include

None citable. `product.md` §First-party data availability marks tool usage /
adoption numbers as `hypothetical`, so no first-party number is safe to cite.
Any first-party framing must be experiential ("I use X for Y"), never numeric.

## Avoid list

- No pricing claims about Olga's own tools, they are free and there is no
  pricing page (`product.md` §Pricing page).
- No hustle-culture / "grind harder" framing (`audience.md` §Language to avoid).
- No "this one trick changes everything" overclaiming.
- No unexplained AI jargon (RAG, context window, LLM, etc.) without a
  plain-language translation on first use.
- No academic-integrity encouragement: the post must not frame any tool as a way
  to have AI write graded work. Position tools as study aids, and say so plainly.
- No invented pricing or feature claims about the reviewed tools. Every price or
  feature must be sourced (`[VERIFY:]` where uncertain), `modules.competitors`
  is OFF for this blog, so there are no competitor profiles to lean on and the
  writer must source each claim from research.

## Founder anecdote / story

Olga's own path is available and on-topic: she pivoted careers into a Master's in
Marketing & Strategy, so she was a student again while working, and she now
builds her own AI tools on OpenAI. A short first-person aside about studying with
AI tools (or about picking tools as a returning student) fits naturally in the
intro or in the "how I picked these" section. Optional, not mandatory.

## Internal link targets

Existing published posts (from `content/blog/`) that are contextually relevant:

- `how-to-plan-your-week`, planning a study week around the tools
- `time-blocking`, scheduling focused study sessions
- `cornell-note-taking-method`, the note-taking method AI summarizers feed into
- `note-taking-methods`, pillar page for the note-taking cluster
- `digital-vs-paper-notes`, relevant when a tool is digital-only
- `how-to-stop-doomscrolling` / `how-to-reduce-screen-time`, the focus-cost side
  of studying on a device

Pick 3–5 at outline time, distributed contextually; at most 1–2 in the intro.

## Source URLs for researcher to study

None specified, the researcher works from the Stage 1a SERP selection.

## Other notes

- **Affiliate policy:** `custom-instructions.md` §Content policy requires real
  working affiliate links in "best X" roundups. That rule is written for PHYSICAL
  product roundups (Amazon `/dp/<ASIN>?tag=op01e-20`). This post reviews SOFTWARE,
  which Amazon does not carry, so the applicable branch is the non-Amazon one:
  link each tool to its own official product page, untagged (the tag is
  Amazon-only). **No affiliate disclosure paragraph is emitted** unless the post
  ends up carrying at least one tagged Amazon link, the disclosure's trigger
  condition is explicitly "at least one tagged Amazon link."
- **Year in the title:** the content-plan angle says 2026. Slug stays
  `ai-study-tools` (no year, per the slug convention); the title may carry 2026.
- Tags must come from the live taxonomy in `blog.md` §Tag taxonomy, candidates:
  `ai tools`, `students`, `education`, `ai`. Do not invent new tags.

## Autopilot assumptions

This brief was written without a human intake conversation
(`CONSOLE_RUN_STATE` set). Every judgment call recorded:

1. **Author** = `olga`. `authors.md` defines NO §Selection rubric, so the
   documented fallback applied: the first (and only) author listed.
2. **Intent** = `transactional`, inferred from the content-plan angle
   ("COMMERCIAL(soft) roundup"). Stage 1a records the OBSERVED SERP intent; if
   the live SERP is informational rather than a tool roundup, the plan follows
   the observed intent, not this field.
3. **Category** = EdTech, inferred from the site-conventions mapping table
   (study/learning cluster). No human confirmed it.
4. **Reddit + X enabled.** No human chose; both modules are on and both sources
   are high-signal for this topic (students discussing AI tools).
5. **Product features** narrowed to Text Summarizer + Acronym Explainer by
   topical fit, per `product.md` §Positioning recommendations. Nobody asked for
   a specific tool.
6. **"10 Best" count** comes from the content-plan angle. If research shows
   fewer than 10 genuinely defensible tools, the plan may cut the number rather
   than pad it, the blog's point of view forbids filler.
7. **Competitors table omitted**, `modules.competitors` is false for this blog,
   so the "Competitors to mention" section is not part of this brief and Stage
   1.5c is skipped. The reviewed study tools are the post's SUBJECT, not
   competitor profiles.
8. **Anecdote** is offered as optional, not mandated; no human supplied one.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-06 13:30
- Human operator: console autopilot (no interactive operator)
