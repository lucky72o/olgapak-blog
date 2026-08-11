# Reddit selection: how to reduce screen time

Search: `https://www.reddit.com/search.json?q=how%20to%20reduce%20screen%20time&sort=relevance&t=year&limit=25` via the logged-in Chrome transport (`research.reddit_transport: chrome`). 25 results returned, HTTP 200.

Reddit's relevance ranking on this query is very fuzzy: 20 of the 25 results are high-engagement threads from unrelated subs (r/Battlefield, r/DestinyTheGame, r/movies, r/Superstonk, r/StarWars …) that matched on generic words like "reduce", "time", and "update". Only 5 threads are genuinely about a person's own screen time. Skipping liberally here is correct, not a shortfall.

Selected 5 for deep fetch:

1. (rank 00) r/getdisciplined — "How to reduce my screen time and advice on what to do instead of scrolling" — score 33, 45 comments, 2026-06. `/r/getdisciplined/comments/1u07htj/how_to_reduce_my_screen_time_and_advice_on_what/`
   Exact query match from someone in our audience, and it explicitly asks the replacement-behavior question the brief flags ("what to do instead"). Recent.
2. (rank 01) r/digitalminimalism — "How I Reduced My 'Bad Screen Time' by About 90%" — score 94, 39 comments, 2026-02. `/r/digitalminimalism/comments/1rcu73p/how_i_reduced_my_bad_screen_time_by_about_90/`
   A method write-up with the intentional-vs-leaked screen time distinction the brief is built on, plus a comment thread stress-testing it. Highest score of the on-topic set.
3. (rank 02) r/digitalminimalism — "My screen time is 15-17 hours a day and nothing I've tried works. What actually helped you?" — score 31, 95 comments, 2026-06. `/r/digitalminimalism/comments/1ug6kqr/my_screen_time_is_1517_hours_a_day_and_nothing/`
   The single best source of voice-of-customer pain language, and 95 replies of "what actually worked" — directly feeds the brief's requirement to say what to do when app limits and timers fail.
4. (rank 05) r/tamilyapping — "How to reduce screen time" — score 21, 140 comments, 2026-06. `/r/tamilyapping/comments/1u7k1ef/how_to_reduce_screen_time/`
   Largest comment count in the on-topic set by a wide margin (140), so the tactic pool is broad. Caveat noted for the researcher: this is a regional casual sub, so some replies may be code-mixed English/Tamil; use only clearly-parsable comments.
5. (SERP rank 4, not in the Reddit search results) r/digitalminimalism — "How to cut down screen time to the extreme?" — `/r/digitalminimalism/comments/19amd6q/how_to_cut_down_screen_time_to_the_extreme/`
   Surfaced by Google at position 4 for our exact target keyword (see `_serp_selection.md`, where it was deliberately skipped for SERP deep-fetch in favour of being fetched here as proper thread JSON). A thread Google ranks for the keyword is worth reading. Filed as `reddit-25-dmextreme.json` — 25 is a synthetic index placed after the 25 search hits (00–24), because this thread has no rank inside `_reddit_search.json`.

Skipped (representative, not exhaustive): ranks 03, 04, 06–20, 22–24 — high-engagement threads from unrelated subs (reality TV, gaming patch notes, film review threads, stock trading) with no connection to personal screen-time reduction; rank 21 (r/NixOS) — "reduce boot time", a keyword collision on "reduce … time" with nothing to do with the topic.
