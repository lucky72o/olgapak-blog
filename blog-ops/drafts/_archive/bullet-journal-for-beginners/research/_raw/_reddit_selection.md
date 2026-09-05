# Reddit selection: bullet journal for beginners

Searched `https://www.reddit.com/search.json?q=bullet+journal+for+beginners&sort=relevance&t=year&limit=25`
via the logged-in browser (chrome transport, primary). 25 results returned; relevance ranking
was its usual fuzzy self — roughly half the set is unrelated (lucid dreaming, side hustles,
astral projection, a relationships post), matched on "beginners"/"guide"/"journal" rather than
on the topic. Skipping liberally is the expected behaviour here.

Selected 5 for deep fetch:

1. (rank 2) `/r/bulletjournal/comments/1q4ssdj/beginner_here_how_do_i_start_bullet_journaling_if/`
   "Beginner here: How do I start Bullet Journaling if I'm not creative?" — 47 score, 41
   comments, 2026-01-05. The single most on-brief thread in the set: it is *exactly* the
   objection the post is built to dismantle (the aesthetic barrier stopping people starting).
   41 comments of people answering that objection is the voice-of-customer core.

2. (rank 0) `/r/bulletjournal/comments/1swqru9/what_are_some_of_you_best_personal_tips_for/`
   "What are some of you best PERSONAL tips for bullet journaling?" — 38 score, 36 comments,
   2026-04-27. Practitioner tips in practitioners' own words; the place to find the specific,
   unglamorous habits that make the system stick, which is what a beginner guide usually
   misses.

3. (rank 10) `/r/BasicBulletJournals/comments/1q3k0vv/help_bujo_good_for_organizing_tasks_but_not_so/`
   "[Help] BuJo good for organizing tasks but not so good for appointments?" — 39 score, 44
   comments, 2026-01-04. A named weakness of the method, argued out by users. Feeds the honest
   "what it's bad at / who it doesn't suit" section the brief asks for, and it comes from
   r/BasicBulletJournals, the minimalist splinter community, which is closer to our angle than
   the main sub's spread-art culture.

4. (rank 11) `/r/Travelersnotebooks/comments/1pan7uc/new_to_travelers_notebooks_should_i_switch_from/`
   "New to Traveler's Notebooks, should I switch from Bullet Journaling?" — 22 score, 52
   comments, 2025-11-30. Highest comment count of any on-topic thread. Deliberately picked
   from *outside* the bullet-journal subs: it captures why people leave the system, which no
   pro-bujo thread will tell you honestly.

5. (out of band, from the Google SERP) `/r/bulletjournal/comments/60e15w/faq_for_beginners/`
   "FAQ for Beginners" — the community's pinned beginner FAQ. It did not appear in the API
   search results (it is older than the `t=year` window) but it ranks organically on page 1 of
   Google for our exact target keyword, which makes it live evidence of what beginners search
   for and what the community considers the canonical answer. Deferred here from the SERP
   selection rather than fetched twice as flat page text. Filed as `reddit-90-*` to mark it as
   SERP-sourced rather than search-ranked.

Skipped, with reasons:

- rank 1 `r/bulletjournal` "New journaling method, who dis?" (118 score, 16 comments) — high
  score but thin discussion, and its real subject is journaling for mental health, a different
  post.
- rank 3 `r/bulletjournal` "Minimalist Weekly Spread Idea" — 0 score, 0 comments. Nothing to read.
- rank 21 `r/bulletjournal` "Newbie Question-Sorry if it's been asked before" (6 score, 29
  comments) — genuinely on topic and the closest runner-up; cut only because threads 1 and 2
  already cover the beginner-question ground with more engagement.
- rank 24 `r/digitalbujo` "DiBuJo help please" (9 score, 16 comments) — digital-bujo specific;
  the paper-vs-digital question is already covered by our published `digital-vs-paper-notes`
  post.
- ranks 4–9, 12–20, 22, 23 — off-topic keyword collisions (lucid dreaming, astral projection,
  side hustles, KDP self-publishing, a violin post, a relationships post, a beauty guide).
  Reddit matched "beginners"/"guide"/"journal", not the subject.
