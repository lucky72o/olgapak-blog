# Reddit Research: how to take notes on ipad

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected 5 Reddit threads from `_reddit_search.json` (contract search) and `_reddit_search_supplemental.json` (three query-keyed captures), documented in `_reddit_selection.md`. Per-thread deep fetches at `reddit-01` through `reddit-05`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** Reddit raw files are Reddit's native public `.json` API responses. Thread response is a 2-element array `[postListing, commentListing]`; post at `[0].data.children[0].data` (kind `t3`); top-level comments at `[1].data.children[].data` (kind `t1`). Every fetched thread returned only its top-level comment tree as captured (9-15 comments per thread), not the full comment count shown on the post (which runs into the hundreds for threads 1 and 2) — analysis below covers what's in the raw files, not the full live discussion.

## Search metadata

- Source: Reddit
- Query: two capture paths per `_reddit_selection.md` — contract search `q=how to take notes on ipad` (mostly off-topic keyword collisions) and a supplemental capture keyed by query: (a) `q=ipad note taking` sitewide, (b) `q=note taking` restricted to r/ipad, (c) `q=goodnotes vs notability` sitewide, all relevance/past-year/limit 25
- Search URL: Reddit native `.json` search endpoint (no single URL; see selection.md for the three supplemental query strings)
- Date searched: 2026-08-19 (per file timestamps)
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

## Selected threads (per editor's `_reddit_selection.md`)

### 1. for those thinking about buying an ipad pro for school, think twice. you might barely use it.
- URL: https://www.reddit.com/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/
- Subreddit: r/ipad
- Author: u/Old_Interaction_4437
- Score: 3066 | Comments: 632 | Posted: 2026-07-21
- Why selected: highest-engagement on-topic thread in either capture; the honest counterweight to a SERP that is entirely "here's my beautiful system" content — direct evidence for the brief's required "iPad is not automatically better than paper" section.

#### Post body (verbatim, trimmed if needed)
> This is my review after owning one for two years. It is a beautiful and powerful device, but I mostly use mine for taking notes in goodnotes. That is basically it. As a normal student, you will probably use your laptop for assignments and serious work, then use your phone for videos, reading, and quick tasks. The iPad ends up awkwardly in the middle. You may imagine using it for yt, movies, studying, and productivity, but in reality it is often less convenient than simply reaching for your phone or laptop. I still think an iPad is useful for students, but most people do not need the Pro model. A cheaper iPad can handle notes just as well. The extra money would be much better spent on a better laptop.

#### Top comment patterns
- Most upvoted POV: a high-school teacher observes students arrive with new iPad Pros excited, then realize by year's end they need a laptop for college anyway; "the iPad is still cool as a digital notebook, but it's not a replacement [for] anything else," u/Dr0110111001101111, score 749
- Most contrarian POV: several commenters report the iPad as their sole or primary computer (u/MeSlaw3, score 149: "My iPad Pro was my sole computer through college"; u/LifeImitatesFarts, score 28, a CS grad student running it as a "thin compute" device via remote/SSH)
- Common concern raised: the base/non-Pro model is "just fine" for note-taking specifically, and the Pro's extra cost is better spent elsewhere — u/hicsuntleones720 (score 43): "a base model ipad will do everything you need just fine... its more so a vanity device," echoing the OP directly.

### 2. To the post saying "think twice, you might barely use it for school": My iPad is literally an insanely portable Windows PC.
- URL: https://www.reddit.com/r/ipad/comments/1v2b9m0/to_the_post_saying_think_twice_you_might_barely/
- Subreddit: r/ipad
- Author: u/18lan_xi
- Score: 1227 | Comments: 176 | Posted: 2026-07-21
- Why selected: the direct reply thread to #1, selected for perspective mix per Stage 1.5a persona ("don't pick 5 takes that all agree").

#### Post body (verbatim, trimmed if needed)
> Granted, I have a Windows PC at home. But the iPad really gives me the best of both worlds. When I'm at home, I game directly on my PC. When I go out, the iPad is super easy to throw in a bag. And if I want to game while I'm away? No problem, I just stream my PC straight to it.

**Important nuance for the editor:** despite the title framing this as a rebuttal, the post body is entirely about gaming/remote-desktop streaming, not school note-taking, and it does not actually counter thread #1's note-taking argument. The top comments in the raw data agree with this reading rather than back the "rebuttal":
- u/DiamondMidgar (score 429): "Isn't this kind of proving the point? You could have just got a MacBook probably for cheaper than the windows pc + the iPad"
- u/PsychologicalPanic8 (score 43): "lmao OP basically proved the point of the other post"
- u/neokurtosis (score 14): "Post is about school but all OP mentions is gaming lol"

One comment does offer genuine counter-evidence to thread #1's thesis: u/krqkan (score 48): "I used my iPad for 4 years of uni. It's still full of notes, drawings and pdf" — this is the actual pro-iPad counterpoint in this thread, not the OP's post body.

#### Top comment patterns
- Most upvoted POV: the top comment (429) reads the OP's own post as accidentally proving thread #1's thesis rather than rebutting it.
- Most contrarian POV (to thread #1): u/krqkan, score 48, "I used my iPad for 4 years of uni. It's still full of notes, drawings and pdf."
- Common concern raised: "stop assuming everyone uses their devices exactly like how they do" — u/Ultimate_os, score 403, a general plea against over-generalizing from either thread's anecdote.

### 3. I tested many notetaking apps this year, here are the best ones
- URL: https://www.reddit.com/r/ipad/comments/1pgzhl8/i_tested_many_notetaking_apps_this_year_here_are/
- Subreddit: r/ipad
- Author: (self-identified med student)
- Score: 343 | Comments: 107 | Posted: 2025-12-08
- Why selected: best single source for how real users rank handwriting apps against each other, as opposed to how affiliate roundups do; explicitly tested Obsidian and Notion among others (both absent from the SERP's fetched results).

#### Post body (verbatim, trimmed if needed)
> My opinion obviously :) (credentials: med student). Spent a lot of money this year testing the pro versions of notetaking apps so hopefully this helps someone... Top 5: Notability (not for taking the notes, more for document storage and AI Learn) ProDrafts BoardNotes KiloNotes Feyn. Among these, the others i tested were: Goodnotes Starnotes Nebo Notewise Freenotes CollaNote MarginNote Documents XMind Flow Noteshelf Noteful Notes+ Ahmni Obsidian Notion Concepts ZoomNotes Guga [and more]... Update 5/14: I see that a lot of people return to this post a lot so just want to add that after 8 months, I am a Notability + Starnotes...

#### Top comment patterns
- Most upvoted POV: u/wtfmatey88 (score 103) questions why GoodNotes wasn't ranked higher, citing a specific complaint: "warning deleted my notes a few times... that's a deal breaker"
- Most contrarian POV: u/DizzyStatistician192 (score 13): "collanote is the best note taking app imo. no subscription, just a one time purchase and it does almost everything" — pushes against subscription-model apps generally.
- Common concern raised: subscription fatigue toward paid note apps, appearing repeatedly — u/smaad (score 17): "anything with a subscription lost me. I'm sick of it like why a sub to take notes"; u/FairyFatale echoes the same complaint specifically about GoodNotes' lack of a one-time payment option.

### 4. What's your best note taking app for iPad?
- URL: https://www.reddit.com/r/ipad/comments/1n5n7n3/whats_your_best_note_taking_app_for_ipad/
- Subreddit: r/ipad
- Author: (anonymized in raw data)
- Score: 59 | Comments: 126 | Posted: 2025-09-01
- Why selected: highest comment count of the plain "which app" threads; chosen for the spread of answers over the thin post body.

#### Post body (verbatim, trimmed if needed)
> Hi everyone, currently started taking my self taught path to software engineering (iOS dev & AI/ML) seriously, what's your go to app for taking notes, especially with a stylus or Apple Pencil. I sort of prefer writing on my tablet.

#### Top comment patterns
- Most upvoted POV: u/mindful_deception (score 22): "Noteful is awesome and cheap," with several other commenters (u/East-Pay6275, score 13) independently recommending Noteful as a low-cost, no-subscription alternative.
- Most contrarian POV: u/plazman30 (score 10): "Apple Notes is really good and it comes with the iPad. Anything else is going to require a subscription" — argues against paid apps entirely.
- Common concern raised: the over-customization trap the brief explicitly wants covered — u/Rockfish70 (score 19): "I bought goodnotes and spent a fortune on templates. Ultimately though I have gone back to apple notes it's more than enough for my use case." This is direct voice-of-customer evidence for the "beautiful notes I never reread" / over-customizing failure mode.

### 5. BEST note taking apps *free* for ipad, with no limits
- URL: https://www.reddit.com/r/ipad/comments/1r5zwz6/best_note_taking_apps_free_for_ipad_with_no_limits/
- Subreddit: r/ipad
- Author: (anonymized in raw data)
- Score: 34 | Comments: 78 | Posted: 2026-02-16
- Why selected: directly behind Google's own People Also Ask question "How can I write notes on my iPad for free?"; voice-of-customer for the free/no-subscription reader segment.

#### Post body (verbatim, trimmed if needed)
> Hi guys, I am looking for your go-to app for notetaking on an ipad that is preferably free, and has no limits to how many notes you can take (also minimal popup ads). For reference, I am a college student with a lot of note taking based classes. I have tried free goodnotes, notability, and collanote. I think goodnotes is okay, but I have heard a lot of things about glitches though and that has made me weary about committing to a subscription from them. With notability, I really liked it, but the consistent subscription platform is not feasible for me, personally...

#### Top comment patterns
- Most upvoted POV: u/DTLow (score 41): "Apple Pages / Apple Notes" — the plain free-and-built-in answer leads.
- Most contrarian POV: u/JYR2023 (score 7) and u/betoulloa each push Obsidian/Collanote as capable free-tier alternatives with linking/markup features stock Notes lacks.
- Common concern raised: subscription aversion again, plus a workaround pattern — u/Garnet__Rose (score 3): "I downgraded to a previous version of Notability that I really liked before they made a bunch of changes, and this version doesn't hit me with the subscription."

## Voice-of-customer themes

- **Theme:** Buying an iPad (especially the Pro model) doesn't automatically make someone a better note-taker, and for many students it becomes an underused third device between phone and laptop.
  - Evidence: "As a normal student, you will probably use your laptop for assignments and serious work, then use your phone for videos, reading, and quick tasks. The iPad ends up awkwardly in the middle," u/Old_Interaction_4437, https://www.reddit.com/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/
  - Evidence: "I always feel bad for the kids that show up with brand new iPad pros instead of laptops at the beginning of the year... near the end of the year virtually all of them realize they're going to need a laptop for college," u/Dr0110111001101111 (score 749), same thread
  - Frequency: dominant theme in thread 1 (3066 score, top comment 749); directly relevant to the brief's required "when paper still wins" honesty section.

- **Theme:** Subscription pricing on the major handwriting apps (GoodNotes, Notability) is a real, repeated point of reader friction driving people to one-time-purchase or free alternatives (Noteful, CollaNote, Apple Notes).
  - Evidence: "anything with a subscription lost me. I'm sick of it like why a sub to take notes," u/smaad, https://www.reddit.com/r/ipad/comments/1pgzhl8/i_tested_many_notetaking_apps_this_year_here_are/
  - Evidence: "Apple Notes is really good and it comes with the iPad. Anything else is going to require a subscription," u/plazman30, https://www.reddit.com/r/ipad/comments/1n5n7n3/whats_your_best_note_taking_app_for_ipad/
  - Frequency: appeared in 3/5 threads (3, 4, 5). Note: this is a pricing-model preference, not a price figure, so it's citable without violating the NO_PRICES constraint as long as no actual dollar amount is repeated.

- **Theme:** Over-investing in templates, pen customization, and app-hopping instead of actually taking useful notes is a self-reported trap, not a hypothetical one.
  - Evidence: "I bought goodnotes and spent a fortune on templates. Ultimately though I have gone back to apple notes it's more than enough for my use case," u/Rockfish70, https://www.reddit.com/r/ipad/comments/1n5n7n3/whats_your_best_note_taking_app_for_ipad/
  - Frequency: appeared explicitly in thread 4; consistent with the brief's named failure mode and with X source x-05 (see research/x.md).

- **Theme:** GoodNotes reliability/data-loss complaints are a specific, recurring reason people cite for choosing a different handwriting app.
  - Evidence: "Why didn't GoodNotes make your list? I was interested until I saw 'warning deleted my notes a few times' yeah that's a deal breaker lol," u/wtfmatey88 (score 103), https://www.reddit.com/r/ipad/comments/1pgzhl8/i_tested_many_notetaking_apps_this_year_here_are/
  - Evidence: "I've tried a few different apps and it was by far my favorite [Goodnotes]... it had a similar issue for me as you had with Prodrafts with losing my notes," u/legendaryjangles, same thread
  - Frequency: appeared in thread 3 as the top comment by score.

## Use-in-post quotes

- "As a normal student, you will probably use your laptop for assignments and serious work, then use your phone for videos, reading, and quick tasks. The iPad ends up awkwardly in the middle.", u/Old_Interaction_4437, r/ipad, source: https://www.reddit.com/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/
- "The iPad is still cool as a digital notebook. But it's not a replacement [for] anything else.", u/Dr0110111001101111, r/ipad, source: https://www.reddit.com/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/
- "I bought goodnotes and spent a fortune on templates. Ultimately though I have gone back to apple notes it's more than enough for my use case.", u/Rockfish70, r/ipad, source: https://www.reddit.com/r/ipad/comments/1n5n7n3/whats_your_best_note_taking_app_for_ipad/
- "I used my iPad for 4 years of uni. It's still full of notes, drawings and pdf", u/krqkan, r/ipad, source: https://www.reddit.com/r/ipad/comments/1v2b9m0/to_the_post_saying_think_twice_you_might_barely/
- "a base model ipad will do everything you need just fine... its more so a vanity device", u/hicsuntleones720, r/ipad, source: https://www.reddit.com/r/ipad/comments/1v281ef/for_those_thinking_about_buying_an_ipad_pro_for/

## Angle opportunities for this blog

- Lead the "when paper still wins / honest limits" section directly from thread 1's evidence: the iPad becoming a third, underused device between phone and laptop is a specific, well-corroborated risk (749-score top comment corroborates the 3066-score OP), stronger than a generic caveat.
- Use the over-customization trap (thread 4, u/Rockfish70) and the "spent a fortune on templates" framing as a concrete, named cautionary example for the brief's "beautiful notes I never reread" failure mode, rather than an abstract warning.
- The subscription-fatigue theme (3 of 5 threads) supports building the app-layer section around genuinely free/low-cost options (Apple Notes, Noteful, CollaNote) as first-class recommendations, not afterthoughts, matching what readers are actually asking for and what Google's own People Also Ask surfaces.
- Thread 2's actual content (a mismatch between its "rebuttal" title and its gaming-focused body, which top comments call out) is itself a useful cautionary example of overclaiming, worth noting to the editor rather than citing as a genuine counter-argument.

## Open questions

- Both threads 1 and 2 report much higher total comment counts (632 and 176) than the raw files actually captured (9 comments each); the analysis above reflects only what's in the deep-fetch JSON, and reader sentiment beyond these top ~9-15 comments per thread is unverified.
- Thread 2 was selected by the editor as a "rebuttal," but its post body does not substantively counter thread 1's thesis, and its own top comments say so. Flagging this so the editor doesn't cite thread 2's post body as if it were a strong pro-iPad counter-argument; the one genuine counterpoint it contains is a single comment (u/krqkan), not the OP.
