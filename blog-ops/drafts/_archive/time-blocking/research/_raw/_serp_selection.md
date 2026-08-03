# SERP selection: time blocking

Observed intent: **informational** — every ranking result is an explainer/guide answering "what is
time blocking and how do I do it"; there are no product/commercial pages, no comparison tables, and
no transactional listicles in the top 8. The SERP carries a `people_also_ask` block and no AI
Overview was detected at capture time.

Structural note for Stage 2: the winners are **hybrid explainers** — a definition section up top,
then a numbered how-to, then variants (task batching / day theming / timeboxing) and pitfalls. That
confirms `brief.md`'s `informational_pillar` intent rather than a pure numbered how-to, but the post
must contain a real step-by-step block inside the pillar, not just theory.

Reviewed 8 results captured in `_serp.json`. Selected 7 (target 5–8, hard cap 8) for deep fetch:

1. (rank 1) https://www.todoist.com/productivity-methods/time-blocking , the canonical #1 result and
   the most-linked time-blocking guide on the web; sets the structural and length bar the post has
   to clear.
2. (rank 2) https://en.wikipedia.org/wiki/Timeblocking , definitional and historical framing
   (origin, notable practitioners), and an allowlist-class source we can legitimately cite where a
   tool blog can't be cited.
3. (rank 3) https://ctl.stanford.edu/weekly-planning-time-blocking-method , Stanford's Center for
   Teaching and Learning; a `.edu` institutional treatment aimed at students, which is this blog's
   primary audience, and the strongest candidate in the set for a citable primary/authoritative
   source.
4. (rank 4) https://asana.com/resources/what-is-time-blocking , the other major tool-vendor guide;
   useful for seeing which subtopics are table stakes across both big competitors.
5. (rank 6) https://www.verywellmind.com/how-to-use-time-blocking-to-manage-your-day-4797509 ,
   psychology/wellbeing framing rather than a productivity-tool framing; likely source of the
   attention-and-context-switching angle and of any research citations worth chasing to their
   primaries.
6. (rank 7) https://www.meistertask.com/blog/time-blocking , a third tool guide, included to
   establish what the commodity coverage looks like so the outline can deliberately go past it.
7. (rank 8) https://www.habitstrong.com/time-blocking-pros-cons/ , explicitly a pros-and-cons /
   "should you even do this" piece; the only critical voice on the page and directly relevant to the
   brief's "be honest about who time blocking does not suit" requirement.

Skipped:
- rank 5 (https://www.todoist.com/productivity-methods/time-blocking#:~:text=... , a
  featured-snippet text-fragment jump link into the rank-1 URL already selected; same page, no new
  content).

Link-policy note carried into Stage 1c: ranks 1, 4, 6, 7 (todoist, asana, meistertask, habitstrong)
are top-10 SERP competitors and are therefore **forbidden as external link targets** per
`standards/blog-craft.md` §External linking, no matter what facts they contain. Wikipedia (rank 2)
and Stanford CTL (rank 3) are allowlist/institutional class and may be cited. Anything else must be
routed to the primary source these articles themselves cite — that is what the researcher's
"Citations harvested from competitors" section is for.
