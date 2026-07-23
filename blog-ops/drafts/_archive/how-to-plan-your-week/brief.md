# Brief: how-to-plan-your-week

Written by: blog-editor (Stage 0 intake).
Sourced from: `blog-ops/content-plan.md` row 3 (autopilot file-intake — no human conversation; see "Autopilot assumptions" below).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

how to plan your week

## Category

Productivity

Resolved against `blog-ops/profile/site-conventions.md` §Categories: this post's pillar is
"Productivity systems & strategies (timeboxing, planning, focus)" (`blog.md` §Content pillars),
which the per-cluster mapping table assigns to the **Productivity** category (WP term id 12).

## Intent

how_to

Per `standards/blog-craft.md` §Post type matrix: the keyword is a procedural query ("how to plan
your week"), the content-plan angle is an INFO guide describing a weekly planning routine, and the
expected SERP shape is numbered steps. Target length 1,500–2,500 words.

## Audience emphasis

Primary audience per `blog-ops/profile/audience.md`: students, early-career professionals, and
aspiring bloggers/creators who feel stretched thin. Lead on pain point #1 (feeling overwhelmed and
short on time) and pain point #5 (inconsistent planning and procrastination — good intentions that
don't turn into follow-through). Secondary: busy knowledge workers landing here for a specific
planning technique.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research: true`)
- x: yes (`modules.x_research: true`)

## Author voice

olga

Reasoning: single-author blog — `blog-ops/profile/authors.md` lists exactly one author (Olga Pak),
whose expertise covers productivity systems, and whose anecdote bank includes adopting timeboxing
to organize her time, which maps directly onto a weekly-planning post.

## What the human wants to convey

- The content-plan angle: an INFO guide to **How to Plan Your Week** built around a repeatable
  weekly planning routine the reader can run this Sunday (or whichever day suits them).
- Planning is not about grinding harder — it's about deciding in advance where energy goes, so the
  week runs on a decision made once instead of 20 decisions made while tired (per `blog.md` §Point
  of view).
- Practical and tested, not theorized: concrete steps, a realistic time cost for the routine, and
  what to do when the week goes sideways mid-week.
- Cover the failure mode most planning posts skip: over-planning. A weekly plan that assumes a
  perfect week collapses on Tuesday, so the routine has to include slack and a mid-week reset.
- Weave in the tools/techniques this blog already owns (timeboxing especially) rather than
  introducing a brand-new framework.

## Product features to mention

<none specified in the content-plan row; the editor selects at Stage 1c per `product.md`
§Positioning recommendations — introduce the relevant free AI tool near the end as a natural next
step, matched to the topic.>

- Candidate (editor's call at plan stage): **Text Summarizer** or **Email Generator**, whichever
  genuinely earns its place in a weekly-planning workflow. No feature stuffing.

## Soon-to-ship features (do NOT flag as gaps)

- None. No shipping-soon features were recorded for the free AI tools suite.

## First-party data points to include

- None citable. `blog-ops/profile/product.md` §First-party data availability lists tool
  usage/adoption numbers as `hypothetical` — not safe to cite. No first-party data in this post.

## Avoid list

- No toxic hustle-culture / "grind harder" framing (`audience.md` §Language to avoid).
- No "this one trick changes everything" overclaiming.
- No prices of any kind — the free AI tools have no pricing page (`product.md` §Pricing page).
- No affiliate links and no Amazon Associates disclosure (program not live; `custom-instructions.md`
  §Content policy).
- No unexplained jargon: translate "timeboxing", "Parkinson's Law", "kanban" on first use per
  `audience.md` §Niche jargon translation.

## Founder anecdote / story

From `voice.md` §Personal-anecdote bank, the on-topic one: **adopting timeboxing to finally
organize her time and beat Parkinson's Law** (work expands to fill the time you give it). Natural
fit for the "give each task a slot" step of the weekly routine. Secondary option if a second beat is
needed: juggling a Master's with a side project while short on time.

## Internal link targets

Existing published posts this new one should link to (3–5 in-body per `blog-craft.md`
§Internal linking; root-relative, NO trailing slash per `blog.trailing_slash: false`):

- `/what-is-timeboxing` — What is Timeboxing and How it Works (closest topical sibling; the
  "assign each task a slot" step should link here)
- `/planning-tips-to-maximize-productivity` — 12 Tried and Tested Planning Tips to Maximize
  Productivity
- `/benefits-of-planning-ahead-for-peak-productivity` — 11 Proven Benefits of Planning Ahead
- `/how-to-stay-focused-on-goals` — 10 Proven Strategies on How to Stay Focused on Goals
- `/how-to-stop-doomscrolling` — How to Stop Doomscrolling (protecting the focus blocks the plan
  creates; also a repo-tracked post at `content/blog/how-to-stop-doomscrolling.md`)
- `/productivity-skills` — 7 Essential Productivity Skills You Need for Success

Inbound candidates (existing posts that should link TO this one — finalized in the outline):
`/what-is-timeboxing`, `/planning-tips-to-maximize-productivity`,
`/benefits-of-planning-ahead-for-peak-productivity`.

## Source URLs for researcher to study

- None specified. The researcher works from the Stage 1a SERP capture and the Reddit/X captures.

## Other notes

- Publishing stays manual: the workflow stops at the Gate 2 preview, the WordPress post stays
  `draft`, and the Rank Math focus keyword (`how to plan your week`) is set by hand in wp-admin
  before publishing (`custom-instructions.md` §Publishing & review, `site-conventions.md` §SEO plugin).
- Featured image is `ai-prompt` per `config.yaml images.featured_default` and
  `custom-instructions.md` §Image style. In-post slots pick type by content — `remotion` only for a
  genuine diagram (e.g. a week-grid figure), `ai-prompt` for scenes.
- Tags must come from the live taxonomy in `blog.md` §Tag taxonomy. Best fits here:
  `productivity`, `time management`, `planning tips and tricks`, `daily planner`.

## Autopilot assumptions

This brief was written from `blog-ops/content-plan.md` row 3 without a human intake conversation
(`CONSOLE_RUN_STATE` is set). Every inference made:

1. **Intent = `how_to`** — inferred from the keyword shape + the row's "INFO guide … (weekly
   planning routine)" angle. The row does not state an intent.
2. **Author = `olga`** — the row's Author column is blank; per the autopilot intake rule the first
   author in `authors.md` is used. This blog has only one author, so there is no real ambiguity.
3. **Research sources = serp + reddit + x** — the row is silent; both optional research modules are
   enabled in `config.yaml`, so both were taken as enabled rather than declined.
4. **Category = Productivity** — derived from the pillar→category mapping table in
   `site-conventions.md`, not stated in the row.
5. **Audience emphasis, angle detail, avoid list, and anecdote choice** — derived from
   `audience.md`, `blog.md`, `voice.md`, and `custom-instructions.md`; the row supplies only the
   one-line angle.
6. **Internal link targets** — selected by topical proximity from `product.md` §Existing posts and
   the repo's `content/blog/`; the row names none.
7. **Product feature to mention** — deliberately left to Stage 1c rather than guessed here, since
   the row names none and `product.md` §Positioning says to match the tool to the topic.

## Metadata

- Created by: blog-editor (autopilot file-intake)
- Created at: 2026-07-22 18:19
- Human operator: slav (via operator console, headless run)
