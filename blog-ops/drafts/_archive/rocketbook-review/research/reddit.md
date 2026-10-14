# Reddit Research: rocketbook review

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected up to 5 Reddit threads from `{drafts_dir}/<slug>/research/_raw/_reddit_search.json` and `{drafts_dir}/<slug>/research/_raw/_reddit_selection.md`. Per-thread deep fetches at `{drafts_dir}/<slug>/research/_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** Reddit raw files are Reddit's native public `.json` API responses, not normalized to our schema. Search response: `data.children[].data` array of post objects. Thread response: 2-element array `[postListing, commentListing]`; post at `[0].data.children[0].data` (kind `t3`); top-level comments at `[1].data.children[].data` (kind `t1`; entries with `kind: "more"` are "load more" placeholders, skip them). Field names are Reddit's: `selftext`, `num_comments`, `permalink`, `created_utc`, etc.

**Age warning (read before using any quote):** the past-year search was thin, so the pool was re-pulled with `t=all`. Thread ages: 2 threads from September 2021 (5 years old), 1 from September 2022 (comments run to 2025), 1 from September 2024, 1 from July 2025. Every quote below carries its comment date. 2021 owner reports describe products and an app as they were then; present them as "owners reported in 2021", not as current.

## Search metadata

- Source: Reddit
- Query: three merged queries, `rocketbook worth it` | `rocketbook review` | `rocketbook ghosting` (per `_reddit_search.json` note); original `t=year` pull for `rocketbook review` returned 7 results, 2 on-topic (per `_reddit_selection.md`)
- Search URL: https://www.reddit.com/search/?q=rocketbook%20worth%20it&t=all, same pattern for the other two queries (exact URLs not stored in the raw file; reconstructed from its note)
- Date searched: 2026-10-14
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

Pool shape: 71 merged results; 34 in r/rocketbook, 7 in r/notebooks, 3 in r/college, the rest spread across 24 subreddits (e-ink, productivity, BuyItForLife). Result dates span 2017 to 2026; ghosting-titled threads cluster in 2019-2022.

## Selected threads (per editor's `_reddit_selection.md`)

### 1. Rocketbook, a gimmick or something useful?
- URL: https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
- Subreddit: r/notebooks (general paper-notebook community, ~218k subscribers; not a Rocketbook fan sub)
- Author: u/HeshamCraft
- Score: 46 | Comments: 50 | Posted: 2022-09-20 (comments span 2022-09 to 2025-08)
- Why selected: Google's #1 result for the keyword; the title is the reader's exact question.

#### Post body (verbatim, trimmed if needed)
> So I've seen a couple posts and videos about rocketbook notebooks and I was wondering if anyone has them and if they would recommend it? I know there's multiple types they make and was wondering which one will be the best for a college student? ... The fact that it also changes handwriting to text and also can be reused multiple times is really tempting me, and the price isn't too bad.

#### Top comment patterns
- Most upvoted POV: good for notes you don't need to keep; special pens required and handwriting recognition misses sometimes; start with the Core (u/Straight-Ad688, 2022-09-20), score 11
- Most contrarian POV: "gimmicky" next to a full digital pen system; any notebook can be photographed to PDF (u/TLCD96, 2023-07-04), score 3; plus phone scanners/CamScanner make it redundant (u/SubstantialLine5597 2024-07-24, score 5; u/adankey0_0 2024-08-28, score 5)
- Common concern raised: wait time before closing/turning or it smears; FriXion dependence; cannot append to an already-scanned note; appeared in 4 comments

### 2. Long-term Reviews
- URL: https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
- Subreddit: r/rocketbook (owner/enthusiast community, ~11k subscribers)
- Author: u/DaringRoses
- Score: 9 | Comments: 17 | Posted: 2021-09-16 (all comments 2021)
- Why selected: long-term owner verdicts on coating wear and pen life; the durability core.

#### Post body (verbatim, trimmed if needed)
> I'm looking into getting the Rocketbook Fusion to go paperless during my time at college. I'm looking for long term reviews. Specifically info on how it holds up after a couple semesters? Does the coating wear off after a while? How long does the pen last before it needs a refill?

#### Top comment patterns
- Most upvoted POV: switching from the 0.7mm to 0.5mm pens makes them last longer and smudge less (u/oldwindways), score 5
- Most contrarian POV: after 7 months, one page "unusably damaged", "moderate ghosting on most pages" but barely visible; app "really does not like colored ink"; still recommends it (u/3dprintedturtle), score 2
- Common concern raised: FriXion pens run out fast (4 pens in ~2.5 months; 3-4 weeks per pen; 6 refills in 7 months), appeared in 4 comments

### 3. Debating on Whether to Buy a Rocketbook
- URL: https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
- Subreddit: r/rocketbook
- Author: u/Apprehensive-Tour924
- Score: 9 | Comments: 11 | Posted: 2024-09-13 (one reply 2026-03-10)
- Why selected: a college student weighing Rocketbook vs iPad; maps to who-it-suits and who-should-skip.

#### Post body (verbatim, trimmed if needed)
> One thing I'm concerned about is that the ink might take too long to dry when writing notes and that it'll smear all over the page when I need to flip it over (I'm currently in college and there is a LOT of notetaking). Another is that I'm worried that maybe it's not worth the investment and upfront cost, especially if I need to replace the pens frequently (and I heard the highlighters aren't good??) or if the pages get worn down easily

#### Top comment patterns
- Most upvoted POV: a 7-point workflow guide (water brush for small fixes, stock refills, cardstock between pages, Multi-subject has the most paper-like pages) (u/AcuriousNat), score 3
- Most contrarian POV: a year of work use, but prefers typed notes in Obsidian; OCR "never 100%"; "I rarely even take pics of my RB pages anymore" (u/jbdaddy12), score 2; and "The pens never work right, the sheets included in the books are limited and overpriced to get packs so I just stopped using it all together" (u/cnabret1991), score 1
- Common concern raised: ink not drying at lecture speed / smearing on page turn, appeared in 4 comments

### 4. Pocketbook dying?
- URL: https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
- Subreddit: r/rocketbook
- Author: u/agdraco8
- Score: 9 | Comments: 29 | Posted: 2025-07-14 (comments July 2025)
- Why selected: the most recent substantive thread; about brand/line longevity.

What it actually says: despite "Pocketbook" in the title, it is about Rocketbook. The OP had heard little from the company, finds the app "still a little glitch", and asks if it is still worth buying. Nobody in the thread reports a discontinuation or shutdown. Replies split: some say Rocketbook is "dying" or "loosing ground" to phone scanning, LLM transcription and e-ink tablets; others say it is still their one-click OneNote workflow, and one says "They just released a new Rocketbook!" (no model named). Ownership claims in the thread, all unverified: "Bic now owns Rocketbook", "Bic bought them 5 years ago", and BIC "moved production to China". The OP's update: bought the sticky notes anyway, "because I don't really use the app much".

#### Post body (verbatim, trimmed if needed)
> I'm a huge rocketbook fan. I want to get the post it notes. But I'm a bit concerned the company is going downhill. I havent heard much from them and the app is still a little glitch. Still worth it?

#### Top comment patterns
- Most upvoted POV: still happy; Rocketbook app gets a page into OneNote "3 seconds later" with title and searchable text, where his wife's e-ink device needs a make.com workaround (u/AndyBakes80), score 8
- Most contrarian POV: phone document scanning leaves erasable pages as "the only meaningful reason" to use it; "It's dying quickly, or pretty much has already, in my opinion." (u/Low-Kaleidoscope-123), score 1
- Common concern raised: the app needs work or is optional; appeared in 5 comments (OP, Chunkaster, LakeTranquility, Twicetranslated, RumpledSilkSkeins)

### 5. Moderate ghosting after a couple days of use... any idea?
- URL: https://www.reddit.com/r/rocketbook/comments/pt23s9/moderate_ghosting_after_a_couple_days_of_use_any/
- Subreddit: r/rocketbook
- Author: u/FraYoshi
- Score: 11 | Comments: 18 | Posted: 2021-09-22 (all comments 2021)
- Why selected: the most-cited practical complaint, with causes and fixes.

#### Post body (verbatim, trimmed if needed)
> (Title only, image post.) Moderate ghosting after a couple days of use... any idea? I always only used the pens came with the mini rocketbook... And erased with the microfiber and water. Tried with hot, tried with cold no success the ghosting remains (1 week total of use, erased every day or 2).. only on this page! (1st)

#### Top comment patterns
- Most upvoted POV: "That's just what they do unfortunately." (u/vext01), score 5
- Most contrarian POV: ghosting is not the real failure mode; "the problem these products will face is that they stop accepting ink (not ghosting)" (u/Wild_Penguin82), score 4
- Common concern raised: technique matters (too much water, unrinsed cloth pushing ink, using the FriXion eraser); appeared in 5 comments

## Voice-of-customer themes

- **Theme:** Ghosting and wear are real but usually cosmetic; technique and pen choice drive them.
  - Evidence: "There's moderate ghosting on most pages, but it's invisible unless you're inspecting it very, very closely or under very bright light." (2021), https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
  - Evidence: "they will eventually wear down. dont use eraser, use water pen , wipe down /erase sooner than later." (2021), https://www.reddit.com/r/rocketbook/comments/pt23s9/moderate_ghosting_after_a_couple_days_of_use_any/
  - Frequency: appeared in 3/5 threads

- **Theme:** FriXion dependence is a running cost and a frustration (pens run out fast, smear, highlighters weak).
  - Evidence: "The Frixion pens last me 3-4 weeks so be prepared to buy a lot of refills." (2021), https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
  - Evidence: "I don't like how much faster these pens run out than the typical pen" (2024), https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
  - Evidence: "I don't know if being cornered into having to use frixion pens is worth it." (2025), https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
  - Frequency: appeared in 5/5 threads

- **Theme:** Dry time (ink and wiped pages) is the daily friction, worst for fast writers and pocket use.
  - Evidence: "I have to wait that 10 seconds or so before closing, else it will smear." (2022), https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
  - Evidence: "If you're writing at speed, you'll likely find the ink doesn't dry in time" (2024), https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
  - Frequency: appeared in 3/5 threads

- **Theme:** Scanned notes often go unused; the reusable page outlives the app (maps to the brief's time anchor).
  - Evidence: "while I used the app, I did not really interact with the pdfs once generated. Mostly they acted as archived data for me." (2025), https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
  - Evidence: "I rarely even take pics of my RB pages anymore." (2024), https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
  - Evidence: "The app is secondary for me really." (2025), https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
  - Frequency: appeared in 3/5 threads

- **Theme:** "Why not just photograph paper?" Phone scanners, LLMs and e-ink tablets erode the smart half of the pitch.
  - Evidence: "I can do that with any notebook and converting to PDF isn't always necessary." (2023), https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
  - Evidence: "For me, Rocketbook was the gateway drug to Remarkable." (2025), https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
  - Frequency: appeared in 3/5 threads

## Use-in-post quotes

- "Overall, I would definitely recommend that you at least get the core - it has blank and dotted pages - to see if you like it.", u/Straight-Ad688, r/notebooks, 2022-09-20, source: https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
- "cannot amend notes.", u/PM_ME_GOODDOGS, r/notebooks, 2022-09-20 (scanning again creates a new note instead of adding to the old one), source: https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
- "Focus factor is 100% better than digital.", u/vaneyessewkal, r/notebooks, 2024-11-11, source: https://www.reddit.com/r/notebooks/comments/xj2z3h/rocketbook_a_gimmick_or_something_useful/
- "I have been using the Fusion at my job for 8 month quite heavily (using almost all the pages every week) and it still works very well, no sign of coating wearing off.", u/ValentinSaulas, r/rocketbook, 2021-09-16, source: https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
- "I've been using mine since 2018. It's held up just fine. I have taken very good care of my rocketbook, however.", u/lianali, r/rocketbook, 2021-09-16, source: https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
- "The rocketbook app really does not like colored ink, even in it's color friendly mode.", u/3dprintedturtle, r/rocketbook, 2021-09-21, source: https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/
- "accuracy of the OCR was never 100% and fixing it took enough time in review that I may as well have just taken the original note electronically", u/jbdaddy12, r/rocketbook, 2024-09-13, source: https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
- "The pens never work right, the sheets included in the books are limited and overpriced to get packs so I just stopped using it all together", u/cnabret1991, r/rocketbook, 2024-09-17, source: https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
- "It's only really sustainable if you buy it, take care of it, and actually use it.", u/MrsWeebTastic, r/rocketbook, 2024-09-20, source: https://www.reddit.com/r/rocketbook/comments/1ffjpok/debating_on_whether_to_buy_a_rocketbook/
- "I can use the Rocketbook app to scan the page - and 3 seconds later, it's in OneNote, with my title on it.", u/AndyBakes80, r/rocketbook, 2025-07-14, source: https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
- "I agree with the others - the Rocketbook app needs some love.", u/LakeTranquility, r/rocketbook, 2025-07-15, source: https://www.reddit.com/r/rocketbook/comments/1lzuhyj/pocketbook_dying/
- "That's just what they do unfortunately.", u/vext01, r/rocketbook, 2021-09-22 (on ghosting), source: https://www.reddit.com/r/rocketbook/comments/pt23s9/moderate_ghosting_after_a_couple_days_of_use_any/
- "Make sure to rinse/ring out your microfiber towel so that it doesn't just end up pushing ink around the page.", u/EdgerAllenPoeDameron, r/rocketbook, 2021-09-22, source: https://www.reddit.com/r/rocketbook/comments/pt23s9/moderate_ghosting_after_a_couple_days_of_use_any/

## Angle opportunities for this blog

- Lead with "the notebook half is the product, the app is optional": several 2024-2025 owners use the reusable pages and barely touch the scans. This answers the brief's "do scanned notes actually get used" anchor with real owner voice.
- Cost-over-time with honest pen math: owners report 3-4 weeks per pen at heavy use (2021) plus page packs; no SERP competitor does this. Use tiers, not prices.
- "Who should skip": fast lecture note-takers (dry time), left-handers (smudge), people who revise or append notes (cannot amend a scanned note), anyone already happy photographing paper.
- A care section that settles the eraser question: owners split (most say never use the FriXion eraser; one uses it with minor effect), so give the conservative advice and say why.
- "Start with the Core" is the community's default starting recommendation (2022), consistent with the brief's lineup section.

## Open questions

- Bic ownership and "moved production to China" claims (2025 thread) are unsourced Reddit comments; verify before mentioning or leave out.
- "They just released a new Rocketbook!" (July 2025) names no model; check the current lineup on getrocketbook.com.
- Most durability evidence is from 2021. Has coating quality or the app changed since? No 2025-2026 long-term thread was in the selected set (pool rank 25, "Review - Rocketbook Core Everlast", 2026-06, 5 comments, was not fetched).
- Third-party pens and inks (ParKoo, Kiwi Inks erasable ink, felt-tip refillables) are reported working by owners; not verified, and conflicts with "FriXion only" in SERP reviews.
- Walmart "AeroNote" mentioned as a cheaper comparable alternative (2024, one commenter); unverified.
- Free printable Rocketbook pages to try before buying: https://getrocketbook.com/pages/rocketbook-for-free (linked by u/The_True_North, 2022); confirm the page is still live before citing.
