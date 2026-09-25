# Reddit selection: gifts for students

Transport: `chrome` (primary), namespace `open-claude-in-chrome`, same-origin `.json` fetch after passing reddit.com's JS challenge.

## Search capture notes

- First capture, exact keyword `gifts for students` (`t=year`, 25 results), was entirely off-topic: news (a university donation), AITA/relationship drama, teacher anecdotes, and posts where "gift" means money or talent. Zero threads asking what to buy a student. Kept on disk as `_reddit_search_q1_offtopic.json` for audit; not analyzed.
- Replacement capture, saved as `_reddit_search.json` (native listing shape, deduped, 67 threads, each child tagged with `_query`), combined three gift-intent phrasings in one fetch with `t=all`: `gift ideas for college student`, `gift for college student`, `gifts for students studying`. Reddit's relevance ranking still surfaced mostly high-engagement drama, but the tail holds genuine gift-request threads.

## Selected (5)

1. (rank in `_reddit_search.json` sorted list: r/EngineeringStudents) `/r/EngineeringStudents/comments/1lvzraq/gift_ideas_for_engineering_student/` , "Gift ideas for engineering student", 78 comments, score 22, 2025-07-10. Students themselves answering what they actually use (tools, calculators, desk gear): direct voice of the recipient.
2. (r/medicalschool) `/r/medicalschool/comments/1s4z3eb/gift_for_medical_student/` , "Gift for medical student", 41 comments, score 147, 2026-03-27. Highest-scored on-topic thread; grad/professional-student perspective on useful vs useless gifts.
3. (r/NursingUK) `/r/NursingUK/comments/1vtu6xj/practical_gift_ideas_for_my_sister_starting/` , "Practical gift ideas for my sister starting nursing as a mature student?", 36 comments, score 8, 2026-08-20. Very recent, explicitly "practical", and a returning/mature student, which matches Olga's own back-to-school story.
4. (r/mathematics) `/r/mathematics/comments/1vx7jwo/math_gift_ideas_for_first_year_college_student/` , "Math gift ideas for first year college student", 29 comments, score 24, 2026-08-24. Very recent, first-year college giver question; likely surfaces notebook, pen, and study-gear recommendations.
5. (r/UWMadison) `/r/UWMadison/comments/1tb7ko8/gifts_for_new_student/` , "Gifts for new student?", 20 comments, score 10, 2026-05-12. General new-college-student gift question from a campus sub: the broadest match to the post's core reader (a giver shopping for a new student).

## Skipped (representative)

- All high-engagement AITA / BestofRedditorUpdates / ProRevenge / relationship threads (off-topic; "gift" matched incidentally).
- r/flying "Gift Ideas for student pilot" (on-topic but too niche for a general student gift guide).
- r/YouShouldKnow "highlighting and re-reading are two of the least effective study methods" (study topic, not a gift thread; score high but off-intent).
- r/singularity "Google is gifting a year of Gemini Advanced to every college student" (news, not gift advice; a dated promo).
- r/GiftIdeas threads for mom / father-in-law / girlfriend / friend (not student recipients); r/GiftIdeas "Gift for siblings of college student" (7 comments, below threshold).
- r/CryptoCurrency "earn crypto for college students" (off-topic).
