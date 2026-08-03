# X selection: digital detox plan

Three captures were run before anything was selected, because the obvious ones were unusable:

1. `q=digital detox plan&f=top` — 4 posts, and 3 of them were consecutive tweets from ONE
   ChatGPT-prompt thread that merely contains "digital detox plan" as a prompt idea. Off-topic.
2. `q=digital detox&f=live` (Latest) — 8 posts after scrolling, nearly all zero-engagement, several
   non-English one-liners. No discussion to read.
3. `q="digital detox" min_faves:50&f=top` — **kept**. Forcing an engagement floor is what finally
   surfaced posts with real reply threads. This is the capture saved as `_x_search.json`; the two
   thin captures were discarded rather than merged, so the file reflects the set actually used.

Honest read on this source: X has no practical how-to material for this keyword. What it does have
is **attitude and demand data** — how people talk about detox as a trend, and what they push back
on. That is what the 4 selections below are for; the post's procedural substance comes from SERP
and Reddit, not from here.

Selected 4 posts (cap 5) for deep fetch:

1. (rank 3) https://x.com/gregisenberg/status/1736058260908572793 — "Someone will make $1B in the
   'digital detox' space", 917 likes / 89 replies. The single highest-engagement on-topic post in
   the set. The reply thread is the useful part: what people say they'd actually do (or pay for) to
   get off their phones.
2. (rank 5) https://x.com/MarioNawfal/status/2049159706514493541 — 25 likes / **451 replies**, on a
   Japanese app that forces screen breaks. Massive reply volume on the exact question this post has
   to answer: do blockers and nag apps work, or do people just dismiss them?
3. (rank 4) https://x.com/sometherapist/status/2036223453255311750 — 28 likes / 47 replies, on a
   college running a two-year no-smartphone program. Picked for the opposite pole of the argument:
   what an enforced, long, environment-level detox looks like versus a self-run week.
4. (rank 7) https://x.com/gregisenberg/status/1728412707366277424 — 235 likes / 27 replies, on
   "every big trend sparks an anti-trend". Context for why detox content is everywhere right now,
   and a useful check against writing hype.

**Deep-fetch limitation (recorded for the researcher):** all four posts were fetched successfully,
but the reply threads did NOT render — every post page returned exactly one `article` element, so
`topReplies` is empty in all four files. The likely cause is that the automated tab is not the
foreground tab, so X's virtualized reply list never renders. Each file therefore carries the main
post text only. **Treat every X-derived claim as coming from the post author alone, not from a
discussion.** Reply counts quoted in this selection file come from the search-results capture
(`_x_search.json`), which is why they still appear here.

Skipped:
- ranks 1 and 2 (gregisenberg startup-ideas and 12-questions threads) — high engagement, but
  "digital detox" appears only in passing inside a general listicle. Not about the practice.
- rank 6 (mechnclgrl) — Indonesian-language self-improvement post, 33 likes / 19 replies; the
  detox mention is one bullet in a general brain-upgrade list.
- The entire `f=live` capture and the `digital detox plan&f=top` capture, per the note above.
