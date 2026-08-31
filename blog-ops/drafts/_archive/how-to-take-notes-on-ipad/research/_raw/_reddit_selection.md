# Reddit selection: how to take notes on ipad

Transport: `chrome` (per `research.reddit_transport`), primary path — logged-in browser same-origin `fetch()` of Reddit's `.json` URLs after the JS challenge, one combined download per capture. No curl fallback needed; no failures.

## Why there are two search files

`_reddit_search.json` is the contract search (`q=how to take notes on ipad`, relevance, past year, limit 25). Its result set is almost entirely off-topic: 25 hits of which 3 are about iPads and note-taking at all, the rest being r/BestofRedditorUpdates / r/SubredditDrama threads that merely contain the word "iPad". This is the documented fuzzy-relevance behavior for short queries, and there was not enough on-topic material in it to select 5 real discussions from.

`_reddit_search_supplemental.json` is a second capture, same endpoint and same JSON shape, keyed by query:
- `a` = `q=ipad note taking` (sitewide, relevance, year, 25)
- `b` = `q=note taking` restricted to `r/ipad` (relevance, year, 25)
- `c` = `q=goodnotes vs notability` (sitewide, relevance, year, 25)

Every thread selected below is present in one of those two files; four of the five come from the supplemental capture. Recorded here so the selection stays auditable.

## Selected (5 of 5 fetched, 0 failed)

1. `reddit-01-ipad-think-twice.json` — r/ipad, score 3062, 632 comments, 2026-07-21
   `/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/`
   "for those thinking about buying an ipad pro for school, think twice. you might barely use it." The single highest-engagement on-topic thread in either capture, and the honest counterweight the whole SERP lacks: everything ranking is a "here's my beautiful system" post. This is the source for the post's "when paper still wins / don't buy hardware to fix a habit" section.

2. `reddit-02-ipad-rebuttal.json` — r/ipad, score 1230, 176 comments, 2026-07-21
   `/r/ipad/comments/1v2b9m0/to_the_post_saying_think_twice_you_might_barely/`
   The direct reply thread to #1, arguing the opposite. Selected deliberately for perspective mix (persona Stage 1.5a: "don't pick 5 takes that all agree") — together the pair gives the real shape of the disagreement instead of one side of it.

3. `reddit-03-ipad-tested-apps.json` — r/ipad, score 344, 107 comments, 2025-12-08
   `/r/ipad/comments/1pgzhl8/i_tested_many_notetaking_apps_this_year_here_are/`
   A user who actually tested the app field and wrote it up, plus 107 comments arguing with the picks. Best single source for how real users rank the handwriting apps against each other, as opposed to how affiliate roundups do.

4. `reddit-04-ipad-best-app.json` — r/ipad, score 62, 126 comments, 2025-09-01
   `/r/ipad/comments/1n5n7n3/whats_your_best_note_taking_app_for_ipad/`
   Highest comment count of the plain "which app" threads (126). Chosen over higher-scoring but thinner threads because the value here is the spread of answers, not the post body.

5. `reddit-05-ipad-free-apps.json` — r/ipad, score 33, 78 comments, 2026-02-16
   `/r/ipad/comments/1r5zwz6/best_note_taking_apps_free_for_ipad_with_no_limits/`
   Free-and-unlimited apps, with the paywall complaints that come with it. Selected because Google's own "People also ask" block on this keyword carries "How can I write notes on my iPad for free?" — this thread is the voice-of-customer behind that question.

## Skipped (notable)

- `/r/NoteTaking/comments/1rhre0s/this_is_how_i_take_notes_on_my_ipad/` (39 / 16, 2026-03-01) — genuinely on-topic and the only useful hit in the contract search, but it is one person's screenshot thread with thin discussion; the five above all carry more comment substance.
- `/r/GoodNotes/comments/1u1fxot/`, `/r/StudentNurse/comments/1r5d3lg/`, `/r/veterinaryschool/comments/1rs95fp/`, `/r/UBC/comments/1nk1soy/` — the GoodNotes-vs-Notability cluster. All real but small (12–22 comments each) and mutually redundant; that comparison is already covered inside threads 3 and 4.
- `/r/ipad/comments/1vjfd5a/` , `/r/ipad/comments/1v3w68l/` , `/r/ipad/comments/1qelgd4/` — "which iPad should I buy" threads. On-topic-adjacent but they are hardware purchase advice, and this post is deliberately not a buying guide.
- `/r/PhysicsStudents/comments/1t5ba9n/` (e-ink switch), `/r/Onyx_Boox/comments/1taugsv/` — e-reader alternatives; out of scope for an iPad how-to.
- Every r/BestofRedditorUpdates / r/SubredditDrama / r/weddingshaming / r/nba hit in the contract search — keyword collisions, no relation to note-taking.
- `/r/TechTipsAndTutorials/...` and `/r/SaundersTech/...` — 0-comment self-promotion posts for the author's own YouTube tutorials.
