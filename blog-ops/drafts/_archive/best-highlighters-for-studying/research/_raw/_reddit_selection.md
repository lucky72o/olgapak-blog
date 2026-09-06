# Reddit selection: best highlighters for studying

Transport: `chrome` (open-claude-in-chrome, logged-in same-origin `fetch()` of Reddit `.json` URLs).

Note on the search capture: the literal query (`search.json?q=best highlighters for studying&t=year`) returned 25 entirely off-topic high-score threads (Reddit's fuzzy relevance on a 4-word phrase). `_reddit_search.json` was therefore re-captured as a MERGED listing (same native `data.children[]` shape, deduplicated by post id, 150 entries) from six queries recorded in `data.queries`: two global searches (`"best highlighters" studying`, `highlighters textbook bleed`, `t=all`) plus subreddit-restricted searches in r/stationery, r/studytips, r/GetStudying, and r/pens. Index numbers below are positions in that merged file.

Reviewed all 150; roughly 40 were on-topic. Selected 5 (max 5) for deep fetch:

1. (index 055) r/stationery "Zebra mildliner highlighters BLEED THROUGH", score 149, 33 comments, 2026-03-01. The bleed-through argument on the post's anchor product, with paper-specific detail. `permalink: /r/stationery/comments/1ri7piv/zebra_mildliner_highlighters_bleed_through/`
2. (index 100) r/GetStudying "What's your go-to highlighter color?", score 511, 63 comments, 2026-07-13. Highest engagement of any on-topic thread; students describing their colour-coding systems, which feeds the "highlight selectively with a colour key" section. `permalink: /r/GetStudying/comments/1uvheh5/whats_your_goto_highlighter_color/`
3. (index 101) r/GetStudying "I'm I really over highlighting?", score 65, 65 comments, 2026-03-25. The "does highlighting work at all" debate in students' own words; the counterpoint the post must address honestly. `permalink: /r/GetStudying/comments/1s3f5fl/im_i_really_over_highlighting/`
4. (index 125) r/pens "Zebra Smudge Resistant Highlighters Test", score 49, 15 comments, 2026-05-03. A hands-on smear test of highlighting over gel ink, the crossover topic with the pens roundup. `permalink: /r/pens/comments/1t2wlf4/zebra_smudge_resistant_highlighters_test/`
5. (SERP rank 5, not in the merged listing; stored as index 151) r/stationery "I want a world class highlighter that never dries", 2024-03. Google ranks this thread on the target keyword itself; the dry-out complaint is a distinct pain point none of the other picks cover. `permalink: /r/stationery/comments/1bjlhcu/i_want_a_fucking_world_class_highlighter_that/`

Skipped (on-topic but redundant or thin):
- index 059 r/stationery "best highlighter for glossy textbook" (13 comments, score 12; niche paper case, covered in part by pick 1)
- index 084 r/studytips "highlighting your notes is not actually learning" (21 comments; same debate as pick 3, lower engagement)
- index 147 r/pens "What pens do y'all use coupled with highlighters?" (23 comments, 2024; same crossover as pick 4, older)
- index 028 r/LawSchool "Best highlighters for textbooks" (8 comments, score 4; too thin)
- index 067 r/stationery "Affordable pastel highlighters?" (9 comments; thin)
- index 050/052/054 r/stationery haul and swatch photo posts (high score, low discussion value)
