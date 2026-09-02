# X selection: screen-free hobbies

## Which tab, and why

**Used `f=live` (Latest), not `f=top`.** The `f=top` pull for the bare keyword returned only **4 posts**, of which two were unrelated (a growth-hacking thread about an app's onboarding funnel, a fitness post). That is the failure mode the skill warns about: on a niche phrase, X's Top tab ranks by engagement rather than relevance and returns popular-but-unrelated content.

The re-pull used a broadened phrase query on the Latest tab:
`"screen-free hobby" OR "screen free hobbies" OR "analog hobby"` , which returned **37 posts**, nearly all genuinely on-topic. `_x_search.json` holds the Latest set; the Top set was discarded.

Adding `"analog hobby"` to the query was a deliberate expansion, not a drift: `theeverygirl.com` (SERP rank 5) uses "analog hobbies" as its primary term, so it is the same concept under the vocabulary the discussion actually uses.

## What the capture shows

The signal here is different in kind from Reddit's, and that is what makes it worth keeping. Reddit answers *which hobby*; X shows *how the topic is being framed right now*:

- **It is being reported as a trend, not just a self-help topic.** Fortune has run the "Gen Z analog hobby boom" line twice in the window, tying birding specifically to post-screen-exhaustion behaviour. Quartz, British Vogue, Country Living, Apartment Therapy and a Las Vegas newspaper all published in the same window. Editorially useful, but every trend claim needs a primary source before it can be written as fact.
- **"Analog hobby" is the live vernacular.** It appears far more often than "screen-free hobby" in organic (non-publisher) posts. Worth using once in the post as the reader's own word, translated on first use per `audience.md`.
- **The organic posts are almost entirely evidence-of-doing, not advice.** People post the thing they made: the garden, the bookbinding, the LEGO, the tray of supplies. Nobody is posting "here are 50 ideas". That reinforces the Reddit read: the credible register for this post is showing and naming specifics, not listing nouns.
- **One recurring anxiety worth noting:** several posts frame a screen-free hobby as protection against work becoming automated ("cultivate a screen-free hobby now if you work a white collar job"). That is a real emotional driver in the current window, but it is speculative and off-brand for this blog's non-alarmist voice. Noted, deliberately not used.

## Selected for deep fetch (5 of 37)

1. (rank 3) https://x.com/FortuneMagazine/status/2093035873877024871 , @FortuneMagazine, the "Gen Z analog hobby boom / birding / screen exhaustion" trend claim from a major business title. The most citable-adjacent item in the set. Fetched for its replies as much as the post: worth seeing whether the trend framing gets pushback. **The post itself is not a citation**; if the underlying Fortune article is wanted as a source, Stage 3d must resolve it to the article and confirm it says what the tweet says.
2. (rank 16) https://x.com/longislandviper/status/2071335291235737795 , @longislandviper, 993 likes, by far the most-engaged organic post in the set: "My analog hobby is gardening; I often spend a couple of hours a day in my yard" plus photos of the results. The clearest illustration of the show-don't-list register, and gardening is the single most-recommended hobby across both Reddit and X.
3. (rank 34) https://x.com/Cthulhu_Coffee/status/2022622816701763891 , @Cthulhu_Coffee, 69 replies on 12 likes, the highest reply-to-like ratio in the set, meaning a real argument rather than a broadcast. About D&D as an analog hobby "that uses imagination". Useful for the social/tabletop category and for a counterpoint voice.
4. (rank 29) https://x.com/MadisonCummins0/status/2040080419148747115 , @MadisonCummins0, "cozy, screen-free hobbies (minus the switch) has been one of the best things i've done for my mental health in 2026". A first-person outcome post in exactly our reader's voice, including the honest parenthetical that they did not give up gaming entirely. Good antidote to purity framing.
5. (rank 26) https://x.com/KittiiMaow/status/2041660299678298523 , @KittiiMaow, 15 likes / 6 replies, "trying to find some screen-free hobbies" , a person asking the query itself, with replies. The closest thing in the set to watching our actual reader arrive.

**Engagement-threshold note:** the skill's guideline is likes >50 OR meaningful reply discussion. Only two posts in the entire 37 clear 50 likes, so picks 3, 4 and 5 qualify on the reply-discussion half of that test rather than on likes. This is a low-engagement topic on X generally, and the alternative (padding with publisher headlines that carry no discussion) would be worse.

## Skipped

- Publisher headline-and-link posts with no discussion: @BritishVogue (rank 1, the same article already deep-fetched at SERP rank 1), @qz (rank 9, the Facebook-syndicated piece already skipped at SERP rank 8), @CountryLiving (rank 18), @AptTherapy (rank 31), @reviewjournal (rank 27), the second @FortuneMagazine duplicate (rank 6). Headlines only, zero replies, and in two cases the underlying article is already in the SERP set.
- Off-topic keyword collisions: @RueNahcMohr (rank 14, "analog hobby **servos**", an electronics schematic), @DJGhozt (rank 5, monetising DJing), @EnginChaglar (rank 22, AI-economy speculation), @Z100NewYork (rank 12, a television/Alzheimer's study, adjacent but a medical claim this post is explicitly avoiding per brief.md).
- Non-English posts without translation value: ranks 4, 15, 17.
- @mzberlinonline (rank 23) and @bitforth (rank 19), on-topic but hostile or conspiratorial in register; nothing usable for this blog's voice.
- @ario (rank 36), the "cultivate a screen-free hobby before your white-collar job disappears" framing. Genuinely on-topic and genuinely current, deliberately excluded: it is speculative and fear-based, which `audience.md` §Language to avoid rules out.
