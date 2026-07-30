# X selection: time blocking

Login verified at `https://x.com/home` before searching.

**Which tab was used and why.** Three pulls were needed:

1. `?q=time blocking&f=top` , 4 results, **all off-topic**: a Vercel AI-crawler thread, a screen-time
   app prototype, someone blocking a person on X, and a Netflix/AI story. Same homonym problem the
   Reddit search hit, plus engagement-ranked noise.
2. `?q="time blocking" productivity&f=live` , 9 results, on-topic but **unusable**: waitlist
   announcements, AI-prompt spam, content-farm threads, and self-promo for the poster's own article.
   Highest engagement in the set was 2 likes, except one entirely off-topic post about Claude Code.
   Nothing here clears "real takes, not pure self-promotion."
3. `?q="time blocking" min_faves:150&f=top` , **kept**. Adding an engagement floor is what finally
   surfaced genuine practitioner discourse. `_x_search.json` holds this third pull.

Selected 3 (cap 5) for deep fetch:

1. (rank 2) https://x.com/mattragland/status/1703027584647229512 , 844 likes, 32 replies.
   "A Brief Overview of Time Blocking," written as follow-up to a time-blocking post of his that went
   viral. The single highest-quality practitioner explainer in the set; the replies are where to look
   for how real people say the method breaks for them.
2. (rank 7) https://x.com/thejustinwelsh/status/1651561154672484353 , 31 likes but **134 replies**,
   the largest discussion in the set. Thread head framing time blocking as one of six systems, opened
   with the James Clear "you fall to the level of your systems" line. Selected for the reply volume,
   not the like count — the criteria accept meaningful reply discussion as an alternative signal.
   (Its own continuation tweet, rank 8, 209 likes, is deliberately **not** selected separately: same
   thread, same author, and the head post already pulls the replies.)
3. (rank 1) https://x.com/SqueegeeGod/status/1629830424263360512 , 12 likes, 25 replies.
   "Jack Dorsey built multiple billion dollar companies... How? They use Time Blocking." Selected as
   a deliberate specimen of the **guru/CEO-calendar framing this post is required to push back on**
   (`brief.md` §Avoid list bans exactly this messaging). Its 25 replies are the useful part: the
   pushback in them is the argument the post should make in the author's own voice. Weakest
   engagement of the three; included for perspective diversity, not authority.

Skipped:
- rank 3 (heyeaslo, 11 likes) , generic "5 productivity techniques" listicle, no original take.
- rank 4 (heyDian, 872 likes) , genuinely high-engagement and squarely on the ADHD/time-blocking
  angle, but written in Indonesian, so nothing in it is directly quotable for an English post. The
  neurodivergent angle it represents is already covered with quotable material by two selected
  Reddit threads (`reddit-00-audhdwomen`, `reddit-04-adhdprogrammers`).
- rank 5 (AvilloKarl, 21 likes, 0 replies) , on the student-study angle that matches this blog's
  audience, but below the engagement bar with no discussion attached.
- rank 6 (vicarioreinaldo, 36 likes) , Indonesian-language, same quotability problem as rank 4.
- rank 8 (thejustinwelsh, 209 likes) , continuation tweet of the rank-7 thread already selected.

**Weight this source lightly at Stage 1c.** Even the kept pull is thin: X's time-blocking discourse
is dominated by founder-productivity marketing rather than by people describing their actual days.
Reddit is the far stronger voice-of-customer source for this keyword, and the plan should treat it
as such.

## Deep-fetch limitation (recorded for the researcher)

All three selected posts fetched successfully (`fetchStatus: ok`), but **`topReplies` is empty in
every one of them**. X did not render the reply threads in this session — each status page returned
only the root `article[data-testid="tweet"]` even after scrolling. The root post text is intact and
complete in all three files.

Practical consequence: the reply-discussion value that motivated selecting ranks 7 and 1 (134 and 25
replies respectively) is **not on disk**. Analyze these three as standalone author takes only, and do
not infer or invent reply sentiment. This further supports weighting X lightly at Stage 1c.
