# X selection: how to reduce screen time

## Which tab / query was used, and why

The plain target keyword does not work on X. `"reduce screen time"` on **Top** returned 2 usable posts, both unrelated startup content; **Latest** (`f=live`) was worse — the phrase "screen time" on X is dominated by a homonym (how much *screen time* a character gets in a film or TV show), so results were TV-fandom threads about Lestat, Armand, and reality-show contestants.

Kept query (Top tab, refined):

```
"screen time" (phone OR scrolling OR doomscrolling OR "digital minimalism") min_faves:50 -filter:replies
```

Adding the phone/scrolling disambiguator plus a `min_faves:50` floor removed the fandom collision and surfaced 25 genuinely engaged posts about personal device use. Captured by scrolling the timeline and de-duplicating by status URL (X virtualizes the list, so a single DOM read only ever sees ~8 posts).

Artifact note for the researcher: because the set was accumulated across scroll passes, two `rank` values (9 and 10) appear twice in `_x_search.json`. Rank is a display-order artifact here, not a relevance score; the `url` is the identity. None of the five selections is affected.

## Selected 5 for deep fetch

1. (rank 2) @aviralbhat — 178 likes, 9 replies — `https://x.com/aviralbhat/status/1795770942477451588`
   "I've been trying to reduce screen time and have got down to <90 mins, some interventions:" followed by an actual list. First-person, quantified, and tactic-level — the single most useful post in the set.
2. (rank 1) @quotesdaily100 — 160 likes, 4 replies — `https://x.com/quotesdaily100/status/2068735746761265336`
   "THE PHONE SETTINGS THAT ACTUALLY CHANGE YOUR LIFE: grayscale mode / notifications off for social apps / do not disturb after 9pm …". The device-settings layer, stated as a list the audience is already sharing. Aggregator-style account, so treat it as evidence of what circulates rather than as an authority.
3. (rank 16) @KevinSzabo14 — 131 likes, 83 replies — `https://x.com/KevinSzabo14/status/1962081751628472590`
   "Everyone says phone addiction is the villain. But they're missing the real question: What are you doing with it?" — the deliberate counterpoint, and it is the brief's own framing (intentional screen time vs. the scrolling that leaks the day). 83 replies means the disagreement is documented, not assumed.
4. (rank 23) @redhairshanks86 — 193 likes, 45 replies — `https://x.com/redhairshanks86/status/1982743642138665382`
   "my average screen time last week across laptop and phone was 9 hrs 40 min" — an unvarnished confessional with a reply thread. Voice-of-customer pain language in the reader's own words.
5. (rank 22) @joelholzx — 518 likes, 14 replies — `https://x.com/joelholzx/status/1991063182413267159`
   "everytime you doomscroll, you teach your nervous system that your needs are already fulfilled." The mechanism/"why it's hard" angle, and the highest-engagement genuinely on-topic post. Feeds the section on why willpower and app timers alone fail.

Mix check: one tactic list, one settings list, one counterpoint, one confession, one mechanism explanation — five distinct perspectives, not five posts agreeing.

## Skipped (representative)

- rank 3 @TheAppleDesign (Samsung service-centre privacy story) and rank 5 @OneManCircus87 (a health-conspiracy list that merely mentions screens) — matched on keyword, unrelated to the topic.
- rank 9 @AnatoliKopadze ("Earn $500/week … turn screen time into real income", DePIN crypto) and rank 8 @AsifInsights (eye-care promo) — promotional.
- rank 14 @AmandaMGoetz (children and slumber parties) — parenting intent, off-audience per brief.md.
- rank 15 @carlmonkft ("Do NOT make a SCREEN TIME app") — about building an app, not reducing usage.
- ranks 18 @vividvoid (636 likes) and 20 @nickcammarata (473 likes) — both genuinely on-topic and strong, cut only against the hard cap of 5; noted here in case a later pass wants more.
