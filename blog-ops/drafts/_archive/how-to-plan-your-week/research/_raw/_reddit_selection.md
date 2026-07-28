# Reddit selection: how to plan your week

## Search note (why the query differs from the target keyword)

The first search used the literal target keyword (`q=how to plan your week`, `sort=relevance&t=year`) and returned **25 results, 0 of them on-topic** — Reddit's relevance ranking latched onto common words and surfaced r/WTF, r/AmItheAsshole, r/cats, r/BestofRedditorUpdates, etc. This is the "Reddit's relevance ranking on short queries is fuzzy" failure the workflow warns about, in its extreme form.

The capture was therefore re-run as a single combined fetch across four tighter queries, deduped by post id into one `_reddit_search.json` (87 unique threads). The variants, recorded in the file's `_query_variants` field:

1. `/r/productivity/search.json?q=weekly planning&restrict_sr=1&sort=relevance&t=year`
2. `/r/productivity/search.json?q=plan my week&restrict_sr=1&sort=relevance&t=all`
3. `/search.json?q="weekly planning"&sort=relevance&t=all` (site-wide, quoted phrase)
4. `/r/getdisciplined/search.json?q=weekly planning&restrict_sr=1&sort=relevance&t=all`

Transport: `chrome` (primary, per `research.reddit_transport`), logged-in browser fetch of Reddit's `.json` endpoints, one combined blob-download. No DOM scraping.

## Selected (5 of 87, the cap)

1. **(#0) r/productivity — "How do you plan your daily and weekly tasks?"** — 1,037 score, 60 comments, 2025-07-31.
   `/r/productivity/comments/1mdzy6h/how_do_you_plan_your_daily_and_weekly_tasks/`
   The highest-engagement on-topic thread in the set, and the OP frames the exact reader state this post is written for ("a big reason I haven't stuck with a vision/project is because I may just be a really poor planner"). 60 comments of people describing what they actually do is the single best voice-of-customer source here.

2. **(#1) r/productivity — "How do you plan and keep up with your extreme busy weeks/days?"** — 41 score, 47 comments, 2026-04-20.
   `/r/productivity/comments/1sqfbbw/how_do_you_plan_and_keep_up_with_your_extreme/`
   Most recent substantial thread (3 months old), and the OP is a graduating undergrad juggling an 18-credit load plus work — almost exactly this blog's primary audience per `audience.md`. Picked for the overload case: how planning holds up when the week is genuinely too full.

3. **(#15) r/productivity — "I've tried every planning, scheduling and routine thing possible and NOTHING clicks"** — 129 score, 71 comments, 2025-10-10.
   `/r/productivity/comments/1o3d6w0/ive_tried_every_planning_scheduling_and_routine/`
   The highest comment count of the selected set and the most important thread editorially: it is the failure mode the brief explicitly wants covered (plans that collapse), argued by someone who has tried everything. Whatever advice recurs here is what our post has to answer; whatever gets shot down here is what our post must not blithely recommend.

4. **(#20) r/productivity — "Planning is great until I actually have to do it... Need advice on tools and consistency!"** — 25 score, 38 comments, 2026-03-19.
   `/r/productivity/comments/1rxs7re/planning_is_great_until_i_actually_have_to_do_it/`
   Recent, and isolates the plan→execution gap (pain point #5 in `audience.md`: good intentions that don't turn into follow-through). Distinct from #15: this OP can plan fine, they just don't do the plan. That's a different fix and it deserves its own section.

5. **(#37) r/PlannerAddicts — "My weekly planning system"** — 121 score, 26 comments, 2024-04-23.
   `/r/PlannerAddicts/comments/1cb9n0m/my_weekly_planning_system/`
   Subreddit diversity (the only non-r/productivity pick) plus a concretely described end-to-end system with a year pre-planned on sticky notes. Useful as a real example of what a maintained weekly system looks like, and as a reality check on how much overhead people will tolerate.

## Skipped, and why

- **The r/getdisciplined `[Plan] Weekly Plan!` series** (#64–#82, ~17 threads) — a recurring weekly accountability stickied post, not a discussion of *how* to plan. Scores of 2–7 and 2–11 comments each, all boilerplate. High keyword match, near-zero editorial value.
- **(#73) r/getdisciplined "I stopped planning my week. I started planning my day. Here's what actually changed."** — genuinely the best contrarian framing in the set and it was a close call, but 2 score / 4 comments is below the engagement floor, so the "discussion" would be one person's blog-style post with no counter-voices. The same contrarian argument appears inside #15's comments with real pushback, which is the better source.
- **(#4) "My weekly planning system: 4 steps, 15 minutes"** (1 comment) and **(#3) "Automated my weekly review/planning sessions with Claude Cowork"** (2 comments) — on-topic but effectively self-promo posts with no discussion attached.
- **(#25–#28) the phone/dopamine-detox blockbusters** (2,900–5,000 score) — huge engagement but they belong to `/how-to-stop-doomscrolling`, not this post. Including them would drag the post off its keyword.
- **Everything from the site-wide quoted-phrase variant that isn't productivity-related** (#38–#61: r/politics, r/NYKnicks, r/Warhammer40k, r/wallstreetbets …) — matched on "week plan" as a substring in news headlines. Noise.
- **(#32) "Sunday Reset game plan"** (2018) and **(#36) "planning my next 52 weeks"** (2019) — on-topic but 7–8 years old, outside the 12–24-month recency preference, and the comment volume is thin.
