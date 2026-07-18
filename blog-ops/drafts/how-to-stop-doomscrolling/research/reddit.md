# Reddit Research: how to stop doomscrolling

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected 5 Reddit threads (`_raw/_reddit_search.json` + `_raw/_reddit_selection.md`); per-thread deep fetches at `_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** parsed Reddit's native `.json` API responses — post at `[0].data.children[0].data` (t3), top comments at `[1].data.children[].data` (t1), `more` entries skipped.

## Search metadata

- Source: Reddit
- Query: how to stop doomscrolling
- Search URL: https://www.reddit.com/search/?q=how%20to%20stop%20doomscrolling (relevance ranking was noisy; ~half of top-25 were off-topic viral threads containing the word "scrolling")
- Date searched: 2026-07-18
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5 (all `fetchStatus: ok`)

## Selected threads (per editor's `_reddit_selection.md`)

### 1. the scariest addiction no one takes seriously: doomscrolling
- URL: https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
- Subreddit: r/selfimprovement
- Author: u/Either_Equipment8912
- Score: 1,205 | Comments: 196 | Posted: 2026 (created_utc 1770004973, ~Feb 2026)
- Why selected: flagship thread — huge engagement, pure lived-experience VOC, and a deep comment pool of what worked vs didn't.

#### Post body (verbatim, trimmed)
> Everyone talks about quitting smoking or drinking or whatever, but doomscrolling honestly feels way worse to me. It's so normal now that nobody even questions it. Just endless scrolling through bad news, reels, tweets, notifications every few minutes, comparing your life to random people online, constant FOMO. It's exhausting but somehow feels impossible to stop… I've tried setting limits. I've tried uninstalling apps. I'll stay off for a few days, maybe a week if I'm lucky, and then suddenly I'm back to scrolling like nothing changed. No decision, just autopilot… If you say you're addicted to doomscrolling, people laugh it off or say "same."

#### Top comment patterns
- Most upvoted POV: deleting the big apps just moves the scroll elsewhere — "i deleted instagram & twitter but now i just scroll on reddit all day instead," score 424 (u/_gem__)
- Most contrarian POV: "Doomscrolling is a symptom not a cause," score 5 (u/Adventurous_Drawing5) — reframes it as downstream of avoidance, not the root problem
- Common concern raised: it's a real, engineered addiction that's socially normalized and dismissed — "these devices are meticulously engineered to create unlimited engagement" (u/HELIOS2086, 74); "an addiction, just a socially accepted one" (u/Paulbuilds00, 13); appeared across the top ~8 comments

### 2. How do I stop doomscrolling?
- URL: https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
- Subreddit: r/ADHD
- Author: u/anyiar0cks
- Score: 16 | Comments: 29 | Posted: 2026 (created_utc 1783521923)
- Why selected: ADHD/dopamine angle overlaps the blog's distraction-prone audience; surfaces post-breakup emotional scrolling and the friction tactics ADHD folks rely on because willpower alone fails.

#### Post body (verbatim, trimmed)
> I really do think my ADHD makes it worse. I need to stop doomscrolling, especially when I'm sad, as it feeds my sadness instead of curing it. Having been broken up with recently, it's been pretty bad. But I can't stop and end up losing HOURS doomscrolling on instagram… I can't get rid of it bc it keeps me in contact with my friends, especially atm as I'm overseas. Any tips?

#### Top comment patterns
- Most upvoted POV: stack physical friction — Focus mode + "Device in the other room… No phone in bed or on my nightstand. Set the alarm and leave it out of reach," score 11 (u/Irritable_Curmudgeon)
- Most contrarian POV: doomscrolling is a "flinching reflex" from unprocessed pain — "There is always a reason for behaviour… The moment someone has a pain in their life that they can't process, they end up procrastinating," score 2 (u/Atelier_Carousel)
- Common concern raised: "I can't delete it, I need it for friends" — the exact "without deactivating" tension; answered with friction not deletion (move IG off home screen; keep messaging, cut feeds); appeared in ~4 comments

### 3. IWTL how to stop doomscrolling
- URL: https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
- Subreddit: r/IWantToLearn
- Author: u/FancyAnswer1878
- Score: 62 | Comments: 32 | Posted: 2026 (created_utc 1780599141)
- Why selected: direct tactic-request thread; comments are concrete, tested how-tos.

#### Post body (verbatim, trimmed)
> I'll pick up my phone for what feels like 5 minutes and suddenly an hour has disappeared. I've tried deleting apps, setting screen time limits, and keeping myself busy, but I always end up reinstalling everything or finding something else to scroll through. For people who successfully cut down their screen time, what actually worked? Was there a mindset shift, a habit, or a specific strategy that made the biggest difference?

#### Top comment patterns
- Most upvoted POV: you're an addict in a bar — remove the smartphone itself, get a brick/dumb phone, and START projects, don't just try to stop — "you can't just STOP doomscrolling you have to START projects. Have things to do," score 45 (u/ThirteenOnline)
- Most contrarian POV: don't aim for zero, redirect to a better waste of time — "I still waste time, but I'm wasting it doing something that I like and feel proud of" (ebooks/Kindle), score 23 (u/BriefcaseBunny)
- Common concern raised: app-based limits get bypassed/reinstalled; the fixes that stick are friction + replacement (One Sec delay app, charge phone in another room, hide apps off page 1); appeared in ~6 comments

### 4. How to stop doomscrolling?
- URL: https://www.reddit.com/r/nosurf/comments/1sjxo34/how_to_stop_doomscrolling/
- Subreddit: r/nosurf
- Author: u/adeliahearts
- Score: 7 | Comments: 14 | Posted: 2026 (created_utc 1776046166)
- Why selected: r/nosurf is the core anti-doomscroll community; high-signal, low-fluff tactics from people deep in the problem.

#### Post body (verbatim)
> I have a problem: i doomscroll on my phone. i am trying to find hobbies to lessen my time doomscrolling. what can I do and how do I stop? It's taking over my life.

#### Top comment patterns
- Most upvoted POV: reduce news anxiety by reframing the content itself — "learning that some politicians make wild claims only to later reverse them… has helped me calm down," score 5 (u/Future-Excuse6167)
- Most contrarian POV: micro-tactic over grand plans — "just standing up and walk around a little… it can refresh my brain," score 3 (u/Aromatic_Memory1079)
- Common concern raised: build a life that requires being off the phone; "Start small. Reading, walking, calling a friend, doing a puzzle… Learn about the hobbies with books not YouTube" (u/breakfreeinternet); appeared in ~3 comments

### 5. How do I convince my friends to stop doomscrolling and wrecking their mental health?
- URL: https://www.reddit.com/r/digitalminimalism/comments/1p9qr5q/how_do_i_convince_my_friends_to_stop/
- Subreddit: r/digitalminimalism
- Author: u/uhmyeahwellok
- Score: 22 | Comments: 28 | Posted: 2025 (created_utc 1764427790)
- Why selected: adds the social/relational dimension the health-org SERP ignores, plus a strong self-aware "news doomscroller" confession.

#### Post body (verbatim, trimmed)
> I know a few people who doom scroll the news every day. They are burned out and depressed… How do I convince these friends, who believe they are following their civic duty of keeping themselves informed, that the news is in fact increasingly destroying their life's happiness with the people around them? I have faced fierce resistance from them when I mentioned this.

#### Top comment patterns
- Most upvoted POV: you can't argue someone out of it — lead by example — "It's no different than trying to get an addict to stop… You cannot help someone who doesn't want to help themselves. Just be a living example," score 18 (u/Past-Weakness-5304)
- Most contrarian POV: don't pathologize others — "Just because digital minimalism is right for you, doesn't mean it's right for everyone," score 12 (u/guesswho135)
- Common concern raised: the "civic duty to stay informed" trap — a self-identified doomscroller: "I feel like to be a good person, the least I can do is know what's going on. But the news is heartbreaking… and it's wrecking my time at home with my family" (u/Defiant_Blacksmith32, 3); appeared in ~4 comments

## Voice-of-customer themes

- **Theme:** It's not a decision — it's autopilot, and time vanishes.
  - Evidence: "I'll pick up my phone for what feels like 5 minutes and suddenly an hour has disappeared," https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
  - Evidence: "then suddenly I'm back to scrolling like nothing changed. No decision, just autopilot," https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
  - Frequency: appeared in 4/5 threads

- **Theme:** It's environment/design, not willpower — and "failing" isn't a character flaw.
  - Evidence: "it's not about 'willpower', it's about environment. These apps are literally designed to hijack attention, so feeling like you 'fail' after a few days is kind of the expected outcome," https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
  - Evidence: "Genuinely you are an addict. And you're trying to stop drinking, at a bar. You're trying to not gamble, but are inside a casino," https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
  - Frequency: appeared in 3/5 threads

- **Theme:** Deleting apps just moves the scroll — you must replace, not only remove.
  - Evidence: "i deleted instagram & twitter but now i just scroll on reddit all day instead," https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
  - Evidence: "The only thing that helped a bit was replacing, not just removing. If I delete apps without having something else to reach for, my brain just finds another feed," https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
  - Evidence: "you can't just STOP doomscrolling you have to START projects. Have things to do," https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
  - Frequency: appeared in 4/5 threads

- **Theme:** Physical friction is what actually sticks (distance + effort to reach the phone/app).
  - Evidence: "Device in the other room… No phone in bed or on my nightstand. Set the alarm and leave it out of reach," https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
  - Evidence: "charging my phone in another room overnight. breaks the morning scroll which sets the tone for the whole day," https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
  - Evidence: "moving instagram off my home screen so opening it takes a deliberate search instead of a thumb reflex… buys you a pause," https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
  - Evidence (hardware): sister uses a "bricking" system with a physical NFC key kept "at the back of her closet so she has to very intentionally turn everything back on," https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
  - Frequency: appeared in 4/5 threads

- **Theme:** Doomscrolling is a coping mechanism for an underlying feeling (boredom, sadness, breakup, avoidance).
  - Evidence: "I need to stop doomscrolling, especially when I'm sad, as it feeds my sadness instead of curing it. Having been broken up with recently, it's been pretty bad," https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
  - Evidence: "The moment someone has a pain in their life, that they can't process, they end up procrastinating. It's a 'flinching' reflex," https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
  - Evidence: "For me it's boredom plus avoidance. Once I catch that moment, I can sometimes stop before going full autopilot," https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
  - Frequency: appeared in 3/5 threads

- **Theme:** The "civic duty to stay informed" trap keeps news-doomscrollers hooked and guilty.
  - Evidence: "I feel like to be a good person, the least I can do is know what's going on. But the news is heartbreaking and horrifying and it's wrecking my time at home with my family," https://www.reddit.com/r/digitalminimalism/comments/1p9qr5q/how_do_i_convince_my_friends_to_stop/
  - Frequency: appeared in 2/5 threads

## Use-in-post quotes

- "these apps are literally designed to hijack attention, so feeling like you 'fail' after a few days is kind of the expected outcome… at least I stopped thinking it's a personal flaw." — u/Paulbuilds00, r/selfimprovement, source: https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
- "i deleted instagram & twitter but now i just scroll on reddit all day instead." — u/_gem__, r/selfimprovement, source: https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
- "you can't just STOP doomscrolling you have to START projects. Have things to do." — u/ThirteenOnline, r/IWantToLearn, source: https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
- "moving instagram off my home screen so opening it takes a deliberate search instead of a thumb reflex, doesnt fix the sad but it buys you a pause." — u/garoono, r/ADHD, source: https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/
- "charging my phone in another room overnight. breaks the morning scroll which sets the tone for the whole day." — u/curioussoul0710, r/IWantToLearn, source: https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
- "just standing up and walk around a little. Idk why but it can refresh my brain." — u/Aromatic_Memory1079, r/nosurf, source: https://www.reddit.com/r/nosurf/comments/1sjxo34/how_to_stop_doomscrolling/
- "I still waste time, but I'm wasting it doing something that I like and feel proud of doing." — u/BriefcaseBunny, r/IWantToLearn, source: https://www.reddit.com/r/IWantToLearn/comments/1twwvlg/iwtl_how_to_stop_doomscrolling/
- "if I delete apps without having something else to reach for, my brain just finds another feed." — u/Paulbuilds00, r/selfimprovement, source: https://www.reddit.com/r/selfimprovement/comments/1qtko2q/the_scariest_addiction_no_one_takes_seriously/
- "Uninstall social media. Keep messaging apps. It's that simple." — u/post_shikari, r/ADHD, source: https://www.reddit.com/r/ADHD/comments/1uqur3t/how_do_i_stop_doomscrolling/

## Angle opportunities for this blog

- **Open by killing the guilt.** Real readers already feel it's "a personal flaw" and that people "laugh it off." Leading with "it's designed to hijack you, this isn't a willpower failure" matches the brief's non-shaming mandate and the single loudest VOC theme.
- **Make "replace, don't just remove" a headline strategy, not a footnote.** The most-repeated failure mode is deleting IG → scrolling Reddit/news instead. Pair every "remove" tactic with a specific replacement (ebooks/Kindle, audiobooks via Libby, walk, podcast, stand up, a project).
- **Rank tactics by friction, not virtue.** Readers report that physical distance/effort works and pure app-timers get bypassed. Concrete, same-day friction tactics (charge phone in another room, move app off home screen, greyscale, watch instead of phone, hardware lockers) will resonate more than "have more discipline."
- **Name the trigger before the tactic.** VOC ties scrolling to boredom, sadness, breakups, avoidance. A "catch the feeling first" urge-surfing step (what am I actually feeling right now?) is validated by real users, not just Zen Habits.
- **Speak to the "I need it for friends / to stay informed" bind.** Both the "without deactivating" tension (r/ADHD) and the "civic duty" trap (r/digitalminimalism) show readers won't nuke their accounts — offer keep-messaging-cut-feeds and the "two sources, two times a day" news discipline instead.
- **Warm first-person fits.** The threads that land are confessional ("that was me more often than I'd like to admit"). The olgapak voice is a natural match.

## Open questions

- X replies were not captured for either selected post (empty `topReplies`), so Reddit is carrying nearly all the voice-of-customer load — the themes above are robust (5 threads, ~76 top comments) and should be weighted accordingly.
- Several commenters plug specific tools (One Sec, Brick/getbrick, Flowzy, "steppin", minimalist launchers, dumb/brick phones). These are user testimonials, not endorsements — if the post names any, frame generically ("app-blockers", "a dumb phone") to honor the brief's no-hard-product-sell rule.
- r/digitalminimalism thread skews toward "you can't fix other people" — useful for a relational aside, but it's about convincing *others*, so most of its tactic value is indirect.
