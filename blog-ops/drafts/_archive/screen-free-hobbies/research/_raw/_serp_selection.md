# SERP selection: screen-free hobbies

Captured 2026-09-02 from google.com. **Results are UK-localised** (operator location TW10, Richmond), which is why two UK-specific properties rank (Vogue UK, The Works). Treat the *ranking order* as geo-biased; treat the *format consensus* as reliable, since it is identical across UK and US publishers here.

Page 1 carries **8 organic results** plus a Top Stories carousel, People Also Ask, and People Also Search For. No AI Overview, no featured snippet, no shopping pack.

## Observed intent

**Informational, browse-and-choose listicle.** Every non-forum result on page 1 is a numbered list of screen-free hobbies or activities, and nothing else ranks: no how-to, no product roundup, no definitional explainer. Counts run 8, 10, 30, 50, 55, which confirms a 50-item list is squarely in-format rather than excessive.

Three secondary signals worth carrying into the plan:

1. **The dominant framing is replacement, not abstinence.** Titles are "…To Reset Your Dopamine", "…to Replace Your Screen Time This Year", "Beat brain rot". Readers arrive already sold on cutting screen time and want somewhere for the hours to go. This validates brief.md's positioning of the post as the "replace, don't just remove" spoke under `/how-to-reduce-screen-time`.
2. **A Reddit thread ranks #2 organically.** Google is explicitly rewarding real people naming what they actually took up. That is a strong argument for weighting Stage 1.5a voice-of-customer material heavily in the draft, and for making entries concrete rather than generic.
3. **Nobody on page 1 states an organising principle.** Every list is either alphabetical-ish or grouped by a shallow label ("indoors", "by age"). None distinguishes a durable hobby from a ten-minute filler activity, and none addresses the sticking problem. brief.md's hobbies-vs-filler carve-out therefore survives contact with the live SERP and is the clearest differentiation available. It also means the carve-out is **not** SERP-mandated: the plan should lead with the menu (matching intent) and carry the distinction as framing, not turn the post into an essay about the distinction.

**Audience fragmentation to note:** People Also Search For splits into adults / teens / men / couples / 10-year-olds, and the #7 result organises entirely "by age". This post targets adults (students and early-career professionals per brief.md). Adding a kids section would chase a different searcher and dilute it; the plan should say so explicitly rather than drift.

**People Also Ask** (FAQ candidates): what hobbies don't require screens; ideas for screen-free activities; what hobbies can I do for free; non-screen activities for adults. The free-cost question is the notable one, it matches brief.md's "no money" objection and should get a real answer, not a hand-wave.

## Selected for deep fetch (6 of 8)

Target is 5–8. Six covers every distinct format on the page; the two skips are justified below rather than being coverage gaps. **All six fetched successfully (0 failures)**, though one (rank 4) proved thin on arrival, leaving five substantive sources.

1. (rank 1) https://www.vogue.co.uk/article/scree-free-hobby-ideas , the top-ranked result and the "dopamine reset" framing in its purest form; a short, high-authority list whose per-item depth sets the bar we need to beat.
2. (rank 3) https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities , the longest list on the page (55 items, Apr 2025) from a major publisher; the direct structural comparator for a 50-item post and the best test of how a big list stays usable.
3. (rank 4) https://www.theworks.co.uk/inspiration/screen-free-hobbies , exact-keyword URL match ranking on a retailer's inspiration hub rather than a publisher's; worth reading for how a commercial page satisfies this query.
   **Post-fetch correction:** it is a 278-word hub page, not the substantial article the SERP annotation suggested. Its research value is therefore a single structural fact rather than content: an exact-match *hub* with almost no prose ranks #4, which says this query is weakly defended and that a thorough post can outrank incumbents on depth alone. No usable entries, cost data, or citations came out of it. Fetch kept on disk as evidence; the researcher should not try to mine it.
4. (rank 5) https://theeverygirl.com/analog-hobbies/ , closest to our own angle ("Analog Hobbies to Replace Your Screen Time This Year", Jan 2026) and the only result using the "analog" vocabulary; recent, so it shows what the current treatment of this topic looks like.
5. (rank 6) https://mudita.com/community/blog/30-offline-hobbies-to-try-indoors/ , from a digital-wellbeing brand rather than a lifestyle title, so its entries are argued rather than listed; also the mid-size list (30) that shows where padding starts.
6. (rank 7) https://gamequitters.com/best-screen-free-activities-by-age/ , the only result with a stated organising principle (by age) and the only one from a behaviour-change site; the useful counter-example for how we group 50 items, and the clearest illustration of the audience split we are deliberately not chasing.

## Skipped

- rank 2 (https://www.reddit.com/r/simpleliving/comments/w8w1hv/what_are_your_nonscreen_nontech_hobbies/) , deliberately not deep-fetched here. It is a forum thread, and Stage 1.5a fetches Reddit through the `.json` API, which returns the post plus structured top comments instead of a scraped page. **Carried forward as a mandatory pick in `_reddit_selection.md`**, since it is the thread Google itself ranks #2 for this exact query.
- rank 8 (https://www.facebook.com/quartznews/posts/...) , a Facebook post, not an article. Login-walled, no extractable body, and its content is a syndicated teaser of a Quartz piece. No research value.
