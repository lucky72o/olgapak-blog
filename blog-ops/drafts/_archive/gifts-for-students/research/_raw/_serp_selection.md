# SERP selection: gifts for students

Observed intent: mixed transactional. The live top results split three ways: (a) retailer shopping/category pages (Amazon search, Target search), (b) editorial gift-guide listicles aimed at college/university students (Oprah Daily, Student Beans), and (c) teacher-to-student classroom gift ideas (end-of-year gifts and gift tags, classroom gift posts, an r/StudentTeaching thread). Roughly half the page reads the keyword as "what should a TEACHER give their students", not "what should a parent/relative buy a student". The brief assumed the second reading; the plan must decide how to handle the teacher segment.

Reviewed top 8 results from `_serp.json` (Google returned 8 organic results plus a People Also Ask box). Selected 4 for deep fetch (fewer than 5 because only 4 results are genuine articles; the rest are search/category pages, a Pinterest pin, or a Reddit thread better handled by Stage 1.5a):

1. (rank 3) https://www.oprahdaily.com/style/g65984424/gifts-for-college-students/ , the strongest editorial gift-guide competitor for the college-student reading: shows listicle length, category mix, and how a major publisher frames budget and "cozy vs useful" picks.
2. (rank 8) https://www.studentbeans.com/blog/uk/50-gift-ideas-for-students-starting-university , a student-brand listicle written for students starting university: shows what a student-facing audience considers useful and how a 50-item list is organized.
3. (rank 6) https://thecalmishteacher.com/classroom-gift-ideas-for-students/ , represents the teacher-to-student intent that holds a big share of this SERP; needed to judge whether the post should acknowledge that segment.
4. (rank 4) https://lessons4littleones.com/end-of-the-year-student-gifts-gift-tags/ , second teacher-to-student data point (end-of-year gifts); confirms whether that segment skews elementary/classroom (low overlap with a note-taker gift guide) or overlaps with study gear.

Skipped:
- rank 1 (Amazon search results page for "Small Gifts for Students": a product search page, not an article; signals strong shopping intent only)
- rank 2 (Target search/category page "Student Gifts": category page; title hints at journals, notebooks, and mugs as the retail framing)
- rank 5 (Pinterest pin "100 Inexpensive Gift Ideas for Students": a pin, not an article)
- rank 7 (r/StudentTeaching thread "Gifts ideas for students?": Reddit content is captured through Stage 1.5a's `.json` fetch instead of DOM scraping; it is another teacher-to-student signal)
