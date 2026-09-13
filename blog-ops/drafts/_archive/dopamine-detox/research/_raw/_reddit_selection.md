# Reddit selection: dopamine detox

Transport: `chrome` (config `research.reddit_transport`), resolved namespace
`open-claude-in-chrome`. Search fetched same-origin from reddit.com's
`/search.json` after passing the JS challenge — never DOM-scraped.

Reviewed 25 results in `_reddit_search.json`. Reddit's relevance ranking is
fuzzy on a two-word query and it showed: six of the top 25 are copies of the
same off-topic "AITA … sister eloped" saga, matched on nothing but the word
"detox"/engagement, and one is a joke about a cat. Skipping liberally was the
right call here.

Selected 5 for deep fetch:

1. (idx 2) r/Neuropsychology , "Why does 'dopamine detox' help if it's bullshit?" (score 34, 25 comments, 260d)
   The single most valuable thread in the set. It is exactly the tension the
   post has to resolve in its first screen: people with a neuroscience
   background explaining why the practice produces a real effect even though
   the name and the mechanism story are wrong. Low score, high signal.
2. (idx 13) r/explainlikeimfive , "ELI5: How does the so-called 'dopamine detox' work?" (score 199, 43 comments, 150d)
   Plain-language mechanism explanations written for exactly this blog's
   reading posture (`audience.md` §Reading posture: translate jargon on first
   use). A good check on whether our explanation lands at the right level.
3. (idx 10) r/Productivitycafe , "This is how you do a dopamine detox?" (score 280, 37 comments, 97d)
   The most recent productivity-framed discussion, and a debate rather than a
   testimonial: people arguing about what the protocol should actually contain.
4. (idx 20) r/YouShouldKnow , "YSK about your brain's default mode network and why being bored is essential for mental health" (score 9031, 193 comments, 331d)
   Highest-engagement on-topic thread by an order of magnitude, and it names
   the mechanism the honest version of this post rests on: boredom and the
   default mode network, not "resetting receptors". Different perspective from
   the other four, which is why it earns a slot over another 30-day testimonial.
5. (idx 17) r/adhdwomen , "Dopamine 'detox' with ADHD" (score 64, 58 comments, 125d)
   The population where this advice can actively backfire. Supports the
   boundary `brief.md` §Avoid list requires (no medical advice; point people at
   a professional where the issue is not ordinary overstimulation). Comment
   count far exceeds score, which is the signature of a real discussion.

Skipped:
- idx 4, 9, 11, 15, 16 (r/BestofRedditorUpdates, r/BORUpdates) , entirely off-topic AITA saga, matched on the word "detox".
- idx 5 (r/CatTraining, "I think my cat needs to go on a dopamine detox?") , a joke post.
- idx 8 (r/digitalminimalism, "Instagram detox is good") , adjacent topic (one-app detox), already covered by our published `how-to-stop-doomscrolling` and `digital-detox-plan`.
- idx 0, 1, 7, 12, 23 , 30-day / 7-day personal testimonials; the genre is already represented by the r/productivity thread captured as SERP rank 6, and a second testimonial adds no new angle.
- idx 19, 21 , the same "You're not lazy, you're overstimulated" post cross-posted to two subs; strong phrase, but the argument is already covered by idx 20 with far more discussion.
- idx 3 ("literally a cheat code"), idx 6, idx 14, idx 24 , thin bodies or low comment counts (14, 17, 20 comments with little substance), and idx 24 has score 0.
- idx 18, 22 , adjacent ADHD/AuDHD threads; idx 17 already covers that perspective and is the more on-topic of them.
