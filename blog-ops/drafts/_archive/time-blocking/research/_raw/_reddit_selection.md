# Reddit selection: time blocking

Transport: `chrome` (primary, per `research.reddit_transport`) via the logged-in
`open-claude-in-chrome` session; search returned HTTP 200, 25 results.

Signal quality note: only **7 of 25** results are actually about the productivity technique. The
remaining 18 are homonym noise on the word "block" (spam-call blocking, blocked shots in the NBA,
blocked bills in the Senate, Minecraft blocks, blocked sidewalks). Reddit's relevance ranking on a
two-word query is fuzzy, so heavy skipping here is expected rather than a fetch problem.

Selected 5 (cap 5) for deep fetch:

1. (rank 00) `/r/AuDHDWomen/comments/1t0phfq/timeblocking_is_a_toxic_trap_for_audhd_brains/` ,
   score 1365, 96 comments, 2026-05-01. By far the highest-engagement on-topic thread and the
   sharpest critical voice on the page. Directly serves `brief.md`'s requirement to be honest about
   who time blocking does *not* suit; expect strong first-person pain language about rigid
   schedules and self-blame when a block is missed.
2. (rank 01) `/r/ProductivityApps/comments/1tqw7h1/best_apps_for_time_blocking/` , score 21,
   64 comments, 2026-05-29. The "what do I actually run this on" question, with a large comment
   pool. Useful for the tools section and for learning whether people default to a plain calendar
   or reach for dedicated apps.
3. (rank 02) `/r/productivity/comments/1uhixbj/how_do_i_mantain_time_blocking/` , score 9,
   18 comments, 2026-06-28. The adherence problem stated plainly — people can start time blocking
   and can't sustain it. This is the failure mode the brief says most published guides skip.
4. (rank 03) `/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/` ,
   score 5, 13 comments, 2025-12-14. "What works better for you?" — surfaces the alternatives people
   migrate to after time blocking fails them, which the post needs for its honest "when to use
   something lighter" section.
5. (rank 04) `/r/ADHD_Programmers/comments/1q7byqa/how_i_made_time_blocking_finally_work_for_my_brain/` ,
   score 12, 5 comments, 2026-01-08. Deliberately included as the positive counterweight to rank 00:
   someone who adapted the method rather than abandoning it. Comment count (5) is below the usual
   ≥10 guideline, but the selection criteria treat that as typical-not-mandatory, and perspective
   diversity is worth more here than one more thread of app recommendations.

Skipped (on-topic but not selected):
- rank 05 `/r/ProductivityApps/.../app_for_time_blocking_daily_timeline/` (36 comments) , a second
  app-recommendation thread; redundant with rank 01, which has the larger comment pool. Dropped to
  keep the five picks covering five different angles.
- rank 06 `/r/ADHD/.../timeblocking_makes_me_feel_awful/` , score 3 and only 5 comments, and its
  angle (the emotional cost of a rigid schedule) is already covered far better by rank 00.

Skipped (off-topic homonym noise, 18 threads): ranks 07–24 — r/mildlyinfuriating (spam calls),
r/interestingasfuck (ice blocks), r/Millennials (block parties), r/politics (blocked interview),
r/pcmasterrace (GPU block), r/allthequestions (blocked bill), r/law (blocked bill), r/soccer
(blocked shot), r/BestofRedditorUpdates (blocked contact), r/kitchencels ×2 (blocked contact),
r/PublicFreakout, r/Bitcoin (block seventy-something), r/degoogle (blocking sideloading), r/2b2t
(Minecraft blocks), r/nba (blocks title), r/fuckcars (blocked sidewalk), r/worldnews (blocked
strait). None mention the productivity technique.
