# Brief: gifts-for-students

Written by: blog-editor (Stage 0 intake, autopilot / headless).
Sourced from: `blog-ops/content-plan.md` row #19 plus `blog-ops/content-calendar-q3-2026.md` #19 (no human conversation, see `## Autopilot assumptions`).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

gifts for students

Secondary keywords (from the content calendar): gifts for note takers, study gifts. Semantic neighbours worth covering naturally: gifts for college students, back to school gifts, graduation gifts for students, useful gifts for students.

## Category

Productivity + EdTech (WP term ids [12, 9]), note-taking / study-guide sub-cluster per `blog-ops/profile/site-conventions.md` §Categories. A student gift guide built around study and note-taking gear sits in that sub-cluster.

## Intent

transactional

## Audience emphasis

Primary here is the GIFT GIVER, not the student: parents, relatives, partners, and friends shopping for a high school or college student (and students buying for classmates). They want a useful gift the student will actually use, not clutter. Secondary: students themselves building a wishlist, and the note-taker / aesthetic-notes crowd who already read this blog. Pain point #3 (tool overwhelm: which of the hundreds of "gift ideas" is actually worth it) is the emotional anchor; pain point #2 (losing focus to the phone) justifies the focus and digital-wellbeing picks.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on; r/college, r/GradSchool, r/students, and gift subs carry honest "what I actually used vs what gathered dust" detail)
- x: yes (`modules.x_research` on; quick student wishlist takes)

## Author voice

olga

Reasoning: single-author blog. `blog-ops/profile/authors.md` lists only `olga`, and her note-taking, study, and productivity beat plus the "tools I actually use" framing fits a practical student gift guide.

## What the human wants to convey

(Derived from the content-plan row "COMMERCIAL roundup: 20 Best Gifts for Students & Note-Takers (2026)" and the calendar note "Cross-category: notebooks, pens, iPad, headphones, blue-light glasses, planners. The highest-AOV post, links out to every other money post." Everything below is the editor's reading of those rows, not stated human input.)

- A buying-decision gift guide: a scannable shortlist of about 20 genuinely useful gifts, each with a one-line reason it helps a student study, focus, or stay organized.
- Cross-category by design. Cover the categories the calendar names: notebooks, pens, iPad / tablet note-taking gear, noise-cancelling headphones, blue-light glasses, planners. Fill the rest with study, focus, and desk picks (e.g. a focus timer, a phone lockbox or analog alarm clock, desk lamp, highlighters, a reusable notebook) where research shows real demand.
- Organize by what the gift DOES for the student (note-taking, focus, organization/planning, study comfort, small budget stocking stuffers), so a giver can pick by need and budget, not by brand.
- Budget bands instead of dollar prices: "under a small budget / mid-range / splurge", so the post doesn't go stale.
- Note-taker angle is the blog's edge: this is where the post differs from generic dorm-gift listicles. Lean into study and note-taking gear Olga already covers.
- Honest guidance for givers: what to avoid (gimmicks, anything that duplicates school-issued gear), and when a gift card or letting the student choose is the better call.
- Hub post: it should link out to the existing money posts (notebooks, pens, iPad note-taking) so readers who want depth on one category can go deeper.

## Product features to mention

None in the picks. Olga's free AI tools (e.g. Text Summarizer for readings) belong only in the closing CTA per `blog-ops/profile/blog.md` §Primary CTA, framed as a free "gift" a student can use today. Never wedged into the product list as a numbered pick.

## Soon-to-ship features (do NOT flag as gaps)

None.

## First-party data points to include

None. No `derivable` data in `blog-ops/profile/product.md` applies to a gift guide. Personal framing ("the notebook I'd buy for my younger self") is voice, not a data claim.

## Avoid list

- No `[AFFILIATE-LINK-PENDING:]` placeholders and no untagged Amazon URLs. Every product gets a real, working link: Amazon `https://www.amazon.com/dp/<ASIN>?tag=op01e-20` preferred; a brand/retailer product page (no tag) where Amazon doesn't carry the genuine item. Per `custom-instructions.md` §Content policy (supersedes the stale "not live yet" note in `product.md`).
- The affiliate disclosure is REQUIRED (the post will carry tagged Amazon links): italic paragraph as the last paragraph of the intro, immediately before the first `##`: `*Some links in this guide are affiliate links. As an Amazon Associate, I earn from qualifying purchases, at no extra cost to you.*`
- No dollar prices stated as fact. Use budget bands.
- No invented testing claims ("I tested 60 gifts"), no fake usage stats, no made-up battery-life or spec numbers. Specs trace to the manufacturer page or get cut at Stage 3d.
- No date-bound seasonal framing that expires ("this back-to-school season"). Evergreen: works for back-to-school, birthdays, graduation, and the holidays.
- No hype ("this gift changes everything"), no hustle-culture framing.
- No links to planned-but-unpublished posts (best headphones, blue light glasses, highlighters, planners, focus timers, alarm clocks are NOT live yet).

## Founder anecdote / story

Optional and light: Olga went back to school for a Master's in Marketing & Strategy after 8+ years in aviation PR, so she knows what a returning student actually used day to day (and what she wished someone had gifted her). One short anecdote, not a memoir.

## Internal link targets

Published posts only (verified against `content/blog/`):
- `best-notebooks-for-note-taking`: the notebook pick(s) go deeper here.
- `best-pens-for-note-taking`: the pen pick(s) go deeper here.
- `how-to-take-notes-on-ipad`: the iPad / stylus pick.
- `bullet-journal-for-beginners`: journal / planner and aesthetic-supplies picks.
- `how-to-plan-your-week` or `time-blocking`: planner pick context.
- `digital-detox-plan` / `how-to-reduce-screen-time`: phone lockbox / analog alarm / focus picks.
- `note-taking-methods`: pillar, for the note-taker framing.

## Source URLs for researcher to study

None specified. The researcher works from the Stage 1a SERP selection.

## Other notes

- Roundup size: the plan row says 20. Treat 20 as the target but do not pad; if the honest list is fewer strong picks, the outline may trim and the title number follows the real count (odd numbers preferred per blog-craft title rules).
- Keep per-pick write-ups short (a gift guide is scanned, not read): what it is, why a student will use it, best for whom. A long 20-pick post must still land near the transactional length band.
- Amazon blocks curl/WebSearch: find each `/dp/<ASIN>` via the logged-in `open-claude-in-chrome` browser (search Amazon, take the top genuine result / Amazon's Choice), then verify the ASIN page title matches the named product.
- Timing: today is 2026-09-13. Back-to-school intent has peaked; holiday gifting intent is next. Evergreen framing covers both.

## Autopilot assumptions

- **No human intake conversation happened.** This brief was written from `blog-ops/content-plan.md` row #19 and the matching calendar entry under `CONSOLE_RUN_STATE`; every field above is the editor's inference from those rows plus the profile docs.
- **Author:** the content-plan Author cell is blank. `blog-ops/profile/authors.md` defines no §Selection rubric and lists exactly one author, so the fallback applies: `olga`.
- **Category:** taken from the `site-conventions.md` §Categories per-cluster mapping (note-taking / study-guide sub-cluster), not human-confirmed.
- **Research sources:** both optional modules (`reddit_research`, `x_research`) are on in config and add real value for a gift guide (what students actually use), so both were enabled without asking.
- **Intent:** `transactional`. The row labels it a COMMERCIAL roundup and "gifts for students" is a shopping query.
- **Audience:** assumed the gift giver is the primary reader (the keyword is "gifts FOR students"); the SERP analysis may revise this.
- **Affiliate policy:** followed `custom-instructions.md` (tagged links + disclosure), not the older `product.md` "not live yet" note, per the precedence rule.
- **Competitors module is off** in `blog-ops/config.yaml`, so no "Competitors to mention" table and Stage 1.5c is skipped by its own guard.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-13 12:27
- Human operator: slav (via operator console, headless)
