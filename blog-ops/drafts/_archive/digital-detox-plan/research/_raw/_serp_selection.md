# SERP selection: digital detox plan

Observed intent: **informational / how-to hybrid** — the live top results are practical
"how to do a digital detox" guides (Lifeline, Everyday Health, Nuffield Health), one structured
day-count challenge (Regis, 30-day), one research review (PMC/NIH), and one narrative beginner's
guide (Guardian). No shopping results, no product pages, no detected AI Overview or featured
snippet. Nobody in the top 9 owns a genuinely day-by-day *plan* the reader can follow, which is
the gap this post's 7-day structure fills. Captured SERP is UK-localized (NHS, Lifeline,
Nuffield, Health in Mind).

Reviewed all 9 results from `_serp.json`. Selected 7 (target 5–8, hard cap 8) for deep fetch:

1. (rank 2) https://health-in-mind.org.uk/resources/digital-detoxing/ — a charity-published
   detox explainer; useful read on how non-commercial health orgs frame the practice and what
   practical steps they consider table stakes.
2. (rank 3) https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ — NIH/PMC review of digital detox
   strategies and mental health. Allowlist-class primary source and the single best candidate for
   citable evidence (including the honest "results are mixed" framing this post needs).
3. (rank 4) https://www.lifeline.org.au/get-help/support-toolkit/techniques-and-guides/how-to-do-a-digital-detox
   — the clearest direct how-to competitor; shows the step set readers expect to see covered.
4. (rank 5) https://www.regis.edu/news/2023/regis-life/11/digital-detox-challenge — a .edu
   30-day challenge, the only result structured as a day-count plan. Direct structural
   comparison for our 7-day format (and shows why 30 days is a harder sell).
5. (rank 6) https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you — benefits-led
   framing plus likely cited health claims; harvest its outbound citations for primary sources.
6. (rank 7) https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
   — allowlist-class major publication, narrative beginner's guide. Good for tone contrast and for
   the realistic "what the first days feel like" material most guides skip.
7. (rank 9) https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/
   — the closest match to this post's stance (a reset, not cold turkey). Needed to see what the
   nearest-angle competitor already covers so the post differentiates rather than repeats.

Skipped:
- rank 1 (https://www.nhs.uk/live-well/addiction-support/drug-addiction-getting-help/) — off-topic:
  a drug-addiction help page, not a digital detox resource. Google surfaced it on the
  "addiction" association, not the query intent.
- rank 8 (https://www.reddit.com/r/selfimprovement/comments/13d1nmf/...) — a Reddit thread, and
  Reddit is covered properly by Stage 1.5a (which fetches thread bodies + top comments through
  Reddit's own JSON API). Deep-fetching it here would duplicate that work with a worse artifact;
  carried forward as a candidate for the Reddit selection instead.
