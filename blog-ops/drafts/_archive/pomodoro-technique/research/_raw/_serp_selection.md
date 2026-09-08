# SERP selection: pomodoro technique

Observed intent: **informational / how-to, with a strong "does it actually work?" counter-current.**
The live top results are a definitional encyclopedia entry, a competitor how-to guide, the
technique's own official site, and university study-skills pages. Google renders an AI Overview
whose own headings are `How It Works / Why It Helps / Where It Falls Short / How to Adapt It for
ADHD`, plus a People-also-ask block led by "Is Pomodoro good for ADHD?" and "What are the
disadvantages of Pomodoro?", plus a Discussions-and-forums block surfacing a Reddit ADHD thread.
Nobody on page 1 sells timers, so the commercial half of this post ("best timers") is an
additive angle rather than the ranking intent. Keyword metrics from the Surfer overlay on the
live SERP: 60,500 US monthly searches, $2.04 CPC.

Capture note: page 1 returned only **6 organic results** (the rest of the page is AI Overview,
PAA, Images, Videos, Short videos, Discussions). `num=20` is ignored by Google now, so page 2
(`start=10`) was captured separately and its results are recorded as ranks 7-15.

Reviewed 15 results from `_serp.json`. Selected 8 (hard cap) for deep fetch:

1. (rank 1) https://en.wikipedia.org/wiki/Pomodoro_Technique , canonical definition, origin story (Cirillo, late 1980s, the tomato kitchen timer) and the official step list; the neutral baseline every other result paraphrases.
2. (rank 2) https://www.todoist.com/productivity-methods/pomodoro-technique , the strongest content competitor on this keyword and the shape to beat; deep-fetched to map its structure and harvest the primary sources it cites (we must not link to it).
3. (rank 3) https://www.pomodorotechnique.com/ , Francesco Cirillo's own site, the primary source for what the technique officially is (including the parts most blogs drop: daily planning, interruption handling, effort estimation).
4. (rank 4) https://www.bcu.ac.uk/exams-and-revision/time-management-tips/pomodoro-technique , university study-skills framing for the student half of our audience; allowlist-class (.ac.uk).
5. (rank 6) https://www.edpsyched.co.uk/blog/pomodoro-technique-overcome-procrastination , the educational-psychology angle on WHY short timed sprints beat procrastination, which is the mechanism our post has to explain rather than assert.
6. (rank 7) https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 , the only strong result that gives drawbacks equal billing; directly feeds the brief's "be honest about who this does not work for" requirement.
7. (rank 8) https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/ , a peer-reviewed efficacy study on the Pomodoro technique indexed in PubMed Central; the citable primary source for any effectiveness claim, and allowlist-class (NLM).
8. (rank 15) https://www.nytimes.com/2020/06/23/magazine/pomodoro-technique.html , NYT Magazine narrative on living with the technique; allowlist-class and useful for a non-blog, non-listicle perspective. May hit a paywall, in which case the fetch is recorded as failed and the post proceeds on the other seven.

Skipped:
- rank 5 pomofocus.io (a web timer's app homepage, not an article, no prose to analyze)
- rank 9 hannahbrenchercreative.com (thin personal-blog retelling; adds no angle the eight above miss)
- rank 10 asundergrad.pitt.edu and rank 12 libguides.usc.edu (both university study-lab pages that duplicate the BCU framing already selected; picking three of the same shape wastes fetch slots)
- rank 11 reddit.com/r/GetStudying "The TRUTH About the Pomodoro Technique" (a Reddit thread; Reddit is covered properly at Stage 1.5a where the comment tree is fetched, not as a SERP page scrape)
- rank 13 kaplan.co.uk (short definitional post, fully covered by Wikipedia + the official site)
- rank 14 pomodoro-tracker.com (tool homepage, not an article)
