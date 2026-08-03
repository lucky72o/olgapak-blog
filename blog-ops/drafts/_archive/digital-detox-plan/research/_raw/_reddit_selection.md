# Reddit selection: digital detox plan

Transport: `chrome` (primary, per `research.reddit_transport`) — logged-in browser fetch of
Reddit's own `.json` URLs via `open-claude-in-chrome`. Search returned HTTP 200, 25 results.

Signal quality note: this query is heavily polluted. **13 of the 25 results are the same
self-promo post ("The Digital Detox & Focus Plan") reposted weekly to r/xclusiveprompt_free**,
each with score 1 and 1–2 comments. All 13 are skipped. Two more are off-topic (a family-conflict
post that matched on "detox", a Nepal trekking promo). That leaves a small pool of genuine
discussion, so selection is by quality of the discussion, not by score.

Selected 5 threads (cap 5) for deep fetch:

1. (rank 0) `/r/digitalminimalism/comments/1uebf1n/digital_detox_2_how_i_didnt_consume_any_content/`
   — "Digital Detox #2: How I didn't consume any content for one month", 632 score / 31 comments,
   2026-06-24. The strongest first-hand account in the set: a repeat detoxer describing what
   actually changed and what came back. Best source of real language about the middle days.
2. (rank 14) `/r/digitalminimalism/comments/1q3tf8r/digital_detoxing_doesnt_make_you_productive/`
   — "DIGITAL DETOXING DOESN'T MAKE YOU PRODUCTIVE..??", 8 score / 21 comments, 2026-01-04.
   Deliberately picked as the counterpoint: the post argues a detox alone doesn't produce
   productivity. This post needs that objection answered honestly rather than dodged.
3. (rank 1) `/r/iPhoneSE/comments/1qh72qn/thinking_of_buying_an_iphone_se_2022_in_2026_as_a/`
   — 37 score / **67 comments**, 2026-01-19. The most-discussed genuine thread in the set. People
   debating whether buying a deliberately boring phone works maps directly onto the "make the
   phone boring instead of banning it" step, including the voices saying the hardware swap is a
   way of avoiding the actual habit change.
4. (rank 10) `/r/nosurf/comments/1tnpwj0/i_made_my_own_work_cycle_2_days_on_1_day_off_with/`
   — "2 days on, 1 day off with a full digital detox", 6 score / 6 comments, 2026-05-25. Low
   score, but it is the only thread describing a *repeatable schedule* rather than a one-off
   week, which is exactly the day-8 problem this post has to solve.
5. (SERP-surfaced, not in this search result set)
   `/r/selfimprovement/comments/13d1nmf/i_went_on_a_3month_digital_detox_living_without_a/`
   — "I went on a 3-month digital detox, living without a smartphone". Carried over from the
   Stage 1a SERP (it ranked #8 for this keyword and was deliberately skipped there so it could be
   fetched properly here, with its comment thread). Filed as `reddit-99-selfimprovement.json`
   since it has no rank in `_reddit_search.json`.

Skipped:
- ranks 4, 5, 7, 8, 9, 12, 13, 16, 17, 18, 19, 20, 21, 22, 24 — all the same reposted
  self-promo "The Digital Detox & Focus Plan" in r/xclusiveprompt_free (score 1, no discussion).
- rank 2 (r/Advice, "Dad is making me choose between my hearing and my brothers") — off-topic,
  matched on unrelated wording.
- rank 6 (r/NamasteNepalTrekking, monastery-stay promo) — travel marketing, not a detox
  discussion.
- rank 11 (r/ProductivityApps) — app promo post.
- rank 3 (r/Focido) — 1 score / 1 comment, subreddit is the app's own promo channel.
- rank 15 (r/PickAorB, $1999 detox retreat) — 9 comments, mildly interesting attitude data about
  paying for detox, but it's a poll thread with thin discussion; cut to stay under the cap.
- rank 23 (r/PakistaniTwenties, "Digital detox") — 11 score / 8 comments, real but thin and
  region-specific; cut for the four stronger threads above.
