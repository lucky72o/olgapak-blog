# SERP selection: how to plan your week

Observed intent: **informational / how-to** — the live top results are almost entirely step-by-step personal weekly-planning routines ("5 Steps to Plan Your Ideal Week", "11 Steps", "How I plan my day and entire week"), not product pages or comparisons. This confirms `brief.md` Intent = `how_to` and the numbered-steps SERP shape from `standards/blog-craft.md` §Post type matrix.

SERP features present: `people_also_ask`. No AI overview, no featured snippet, no shopping block detected at capture time.

Reviewed 8 captured results from `_serp.json`. Selected 7 (target 5–8, hard cap 8) for deep fetch:

1. (rank 2) https://www.hailleygriffis.com/weekly-planning/ — a first-person weekly planning *routine* framed around calm rather than output. Closest match to this blog's anti-hustle positioning (`audience.md` §Language to avoid), so it's the best read on how to do the angle well without sounding like grind culture.
2. (rank 3) https://daydesigner.com/a/blog/5-steps-to-plan-your-ideal-week — explicit 5-step structure from a planner brand. Useful as the baseline "steps" skeleton the SERP rewards, and it shows which steps readers expect to see named.
3. (rank 4) https://medium.com/swlh/how-to-plan-your-week-the-right-way-4da9b98e8a68 — The Startup (Medium) piece with a strong opinionated "the right way" framing. Picked for its counterpoint value: where it draws lines, our post can either agree with evidence or disagree deliberately.
4. (rank 5) https://nataliesisson.com/how-i-plan-my-day-and-entire-week-for-success/ — personal-brand account covering the day↔week relationship, which is the seam most weekly-planning posts fumble. Also a likely source of the "review then plan" ordering.
5. (rank 6) https://www.jessicamassey.com/blog/how-to-make-your-weekly-planning-easier — angled at reducing planning friction, i.e. the "I planned and then abandoned it" failure the brief explicitly wants covered.
6. (rank 7) https://www.memtime.com/blog/planning-your-week-for-work-productivity — SaaS blog aimed at work/professional planning rather than personal life. Covers the secondary audience (`audience.md`) and is the most likely of the set to carry citable research or stats worth chasing to a primary source.
7. (rank 8) https://www.wikihow.com/Plan-Your-Week — 11-step, heavily structured, exhaustively sub-headed. Best single read for coverage completeness: whatever subtopic everyone else omits, wikiHow usually has it, so it's the checklist against which our outline's gaps get spotted.

Skipped:
- rank 1 (https://www.reddit.com/r/productivity/comments/o5kg2i/...) — a Reddit discussion thread, not an article. Reddit is covered properly by Stage 1.5a with its own select-then-fetch pass against the `.json` API, which yields the full comment tree instead of a rendered page. Deep-fetching it here would duplicate that work with worse data.

Note for later stages: every URL listed in `_serp.json` §topResults is a **forbidden external-link target** per `standards/blog-craft.md` §"Forbidden external links: top-10 SERP competitors". Any stat found in these articles must be routed to the primary source they cite (harvested into `research/serp.md` §"Citations harvested from competitors"), never linked directly.
