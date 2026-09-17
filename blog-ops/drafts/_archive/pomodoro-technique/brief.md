# Brief: pomodoro-technique

Written by: blog-editor (Stage 0 intake, AUTOPILOT file-intake, no human conversation).
Sourced from: `blog-ops/content-plan.md` row 26 + blog profile docs.
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

pomodoro technique

## Category

Productivity

Resolved via `blog-ops/profile/site-conventions.md` §Categories: this post's pillar is
"Productivity systems & strategies (timeboxing, planning, focus)" per `blog.md` §Content
pillars, which the mapping table assigns to **Productivity** (WP term id 12).

## Intent

how_to

The content-plan row reads "INFO/COMMERCIAL guide: Pomodoro Technique (how it works + best
timers)": a practical technique guide with a commercial timer-roundup section, so the
dominant intent is how_to (1500-2500 words) rather than a 3000-5000-word pillar. Stage 1a
confirms this against the live SERP; if the SERP is dominated by deep definitional guides,
the plan may shift the roll-up target upward.

## Audience emphasis

Primary: students and early-career professionals who feel stretched thin and lose focus to
distraction (pain points 1 and 2 in `audience.md`). Secondary: busy knowledge workers who
land here searching for one specific productivity technique. Reader is a curious beginner:
translate every term on first use ("Parkinson's Law", "timeboxing", "deep work").

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on; Pomodoro has a large, opinionated Reddit
  discussion including a strong "it doesn't work for me" counter-current worth mining)
- x: yes (`modules.x_research` on)

## Author voice

olga

Reasoning: single-author blog. `authors.md` lists one author (olga) and defines no
selection rubric, so the author voice is fixed. Her productivity/timeboxing background maps
directly onto Pomodoro.

## What the human wants to convey

- Explain what the Pomodoro Technique actually is and how to run it, in plain language, for
  someone who has never used a timer method before.
- Be honest about who it does NOT work for and when to break the 25/5 rule. The blog's
  point of view is tested-not-theorized, not "this one trick changes everything".
- Recommend the best timers (physical cube/kitchen timers and apps), with real, working
  Amazon affiliate links per `custom-instructions.md` §Content policy.
- Connect it to the blog's existing focus/planning cluster (timeboxing, time blocking,
  weekly planning, beating phone distraction).

## Product features to mention

- Olga's free AI tools page, introduced softly near the end as the natural next step
  (per `product.md` §Positioning recommendations). Text Summarizer is the closest match
  for a focus/study post; do not hard-sell and do not state prices (the tools are free and
  there is no pricing page).

## Soon-to-ship features (do NOT flag as gaps)

- None.

## First-party data points to include

- None. `product.md` §First-party data availability lists tool usage/adoption numbers as
  `hypothetical` (no citable analytics yet), so no first-party numbers may be claimed.

## Avoid list

- Hustle-culture / "grind harder" framing.
- Overhyped "this one trick changes everything" claims.
- `[AFFILIATE-LINK-PENDING:]` placeholders or untagged Amazon URLs. Ship real tagged links.
- Stating any price for Olga's AI tools (they are free; there is no pricing page).
- Unexplained jargon (translate "Parkinson's Law", "deep work", "timeboxing" on first use).

## Founder anecdote / story

Candidate from `voice.md` §Personal-anecdote bank: adopting timeboxing to finally organize
her time and beat Parkinson's Law, the natural on-ramp to Pomodoro, and it links the post to
the existing timeboxing/time-blocking cluster. The writer picks the exact framing; keep it
first-person and lightly self-deprecating.

## Internal link targets

Candidates from the live site (final selection happens in `plan.md` / `outline.md`):
- /time-blocking: time blocking (sibling focus/scheduling technique)
- /what-is-timeboxing: timeboxing (the anecdote's anchor; older published post)
- /how-to-plan-your-week: weekly planning routine
- /how-to-stop-doomscrolling: beating phone distraction during a focus session
- /how-to-reduce-screen-time: screen-time pillar
- /productivity-skills: broader productivity skills post

## Source URLs for researcher to study

- None specified; the researcher works from the Stage 1a SERP capture.

## Other notes

- **Affiliate disclosure is required** if any tagged Amazon link ships: an italic paragraph
  as the LAST paragraph of the intro, immediately before the first `##`:
  `*Some links in this guide are affiliate links. As an Amazon Associate, I earn from
  qualifying purchases, at no extra cost to you.*`
- Amazon blocks curl/WebSearch, so find `/dp/<ASIN>` links via the logged-in
  `open-claude-in-chrome` browser, then tag with `?tag=op01e-20`.
- Tags must come from the live taxonomy in `blog.md` §Tag taxonomy. Best fits here:
  `productivity`, `time management`, `students`, `digital tools for productivity`.
- Permalinks are root-relative with NO trailing slash (`/<slug>`).

## Autopilot assumptions

This brief was written from files, with no human present. Assumptions made:

1. **Author**: `authors.md` defines NO §Selection rubric and lists exactly one author, so
   the fallback path was taken: the first (and only) author listed, `olga`.
2. **Intent**: the content-plan row gives an angle, not an intent value. `how_to` was
   inferred from "how it works + best timers"; re-confirmed against the observed SERP intent
   at Stage 1a.
3. **Research sources**: no human to ask, so both config-enabled optional sources (reddit,
   x) were enabled. Pomodoro is heavily discussed on both.
4. **Category**: taken from the `site-conventions.md` mapping table without human
   confirmation (Productivity).
5. **Angle specifics** ("be honest about who it does not work for", the timer roundup, the
   internal-link cluster) were derived from `blog.md` §Point of view, `voice.md`,
   `audience.md`, and the content-plan angle text, not from a human.
6. **Competitors module is OFF** (`modules.competitors: false`), so the content-plan's
   "Competitors by post" table was not read and no competitors are named.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-08 19:40
- Human operator: autopilot (console run, no human present at intake)
