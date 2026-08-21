# SERP selection: how to reduce screen time

Observed intent: **informational / how-to** — the live top results are almost entirely numbered "N ways/tips to reduce screen time" listicles for adults, plus one benefits explainer, one stats page, and one Reddit discussion. No commercial or product results, no shopping pack. SERP features: `people_also_ask` only (no AI Overview, no featured snippet captured).

Reviewed top 9 results from `_serp.json`. Selected 7 (target 5–8, hard cap 8) for deep fetch:

1. (rank 1) https://www.theguardian.com/thefilter/2026/jun/04/how-to-reduce-your-screen-time — the rank-1 result and the freshest (June 2026); mainstream editorial listicle that defines the format the SERP rewards.
2. (rank 2) https://www.harmonyhit.com/phone-screen-time-statistics/ — the SERP's statistics hub; the likeliest source of the screen-time numbers every other article recycles, so it is worth harvesting for the primary sources it cites rather than for its own prose.
3. (rank 3) https://www.mdanderson.org/cancerwise/clinical-psychologist--7-ways-to-reduce-excessive-screen-time.h00-159852978.html — expert-attributed (clinical psychologist) on a major medical institution's site; strong candidate for allowlist-class citations and for the "what to do when limits fail" angle.
4. (rank 5) https://www.scripps.org/news_items/6310-8-tips-to-reduce-screen-time-for-adults — explicitly adult-focused (most screen-time content drifts to parenting), which matches our audience; health-system authority.
5. (rank 7) https://www.healthshield.co.uk/blog/the-surprising-benefits-of-reducing-screen-time-for-your-health/ — the only result covering the "why bother / what improves" payoff rather than the tactics; needed so the pillar's motivation section isn't hand-waved.
6. (rank 8) https://www.listsof30.com/p/30-micro-habits-to-reduce-screen — a genuinely different format (30 micro-habits, low-friction framing) rather than another 7–12 item list; useful for finding tactics the mainstream articles omit.
7. (rank 9) https://www.georgetown.edu/news/digital-detox-reduce-screen-time-benefits/ — university-published and research-referencing; the best chance in this SERP of routing to primary studies instead of to competitor articles.

Skipped:
- rank 4 (reddit.com/r/digitalminimalism "How to cut down screen time to the extreme?") — a discussion thread, not an article. Reddit is covered properly by Stage 1.5a, which fetches the thread JSON with its comments; deep-fetching it here would duplicate that with worse data. Flagged for the Reddit selection step.
- rank 6 (screenagersmovie.com "10 Ways to Limit Screen Time in Teens") — parenting/teen intent. Our audience is students and early-career professionals reducing their OWN screen time (brief.md §Audience emphasis), so the tactics don't transfer.

Note on URLs: ranks 2 and 3 carried Google `#:~:text=` scroll-to-text fragments in the SERP capture; those are stripped before fetching.
