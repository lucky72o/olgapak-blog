# X selection: pomodoro technique

Tab used: **Top**, twice, with a query refinement (no `f=live` pull).

The bare query `pomodoro technique` on the Top tab returned 21 posts that were technically
on-topic but nearly worthless: generic "14 Harvard techniques" / "5 Japanese techniques"
listicle threads where Pomodoro is item 3 of 14, plus repeated engagement-bait ("you can
become a millionaire simply by doing the pomodoro technique"). Rather than fall back to
`f=live` (for a keyword this saturated with focus-app promo bots, Latest is strictly worse
than Top), the query was refined to
`"pomodoro" (focus OR studying OR timer OR "deep work") -filter:links min_faves:20`, still on
the Top tab. That pull returned 24 posts with a much higher share of real takes, and is the
kept set. The broad-query results are preserved in `_x_search.json` under `broadQueryResults`
for provenance.

**The single most useful observation from X is a contrast, not a claim.** X's Pomodoro
conversation is overwhelmingly promotional and uncritical (millionaire bait, app launches,
"this one technique" threads), which is the exact opposite of Reddit, where the highest-
engagement threads on the same keyword are titled "I actually hate the Pomodoro technique".
The gap between the two platforms is itself evidence for the post's honest-assessment angle.

Selected 5 for deep fetch:

1. @karpathy , 832 likes, 40 replies. https://x.com/karpathy/status/1427022225954070528 . A high-credibility technical voice endorsing the technique in plain terms and linking the Wikipedia entry rather than a product; the replies are the closest thing on X to a real discussion of whether it works.
2. @thejustinwelsh , 241 likes. https://x.com/thejustinwelsh/status/1607727446790471680 . "Get yourself a Pomodoro Timer... after being recommended to me multiple times" , a first-person account of buying a physical timer, which is the commercial half of this post stated by a real user rather than a seller.
3. @MCovBrown , 366 likes. https://x.com/MCovBrown/status/1441805252198424581 . States the 25/5 and 50/10 variants side by side with a cycle count; the clearest popular articulation of the "the standard interval is not the only interval" point.
4. @the_grafixmedic , 84 likes, 41 replies (recent). https://x.com/the_grafixmedic/status/2053175872811585560 . Frames techniques as answers to specific mental states ("Exhausted: Pomodoro method"), which is a sharper, more honest framing than "Pomodoro fixes everything" and matches this blog's point of view.
5. @Seb_Kersten , 91 likes (recent). https://x.com/Seb_Kersten/status/2021919640373366909 . "Top 5 battle-tested frameworks to protect focus", with Pomodoro as one option among several; useful for positioning the technique relative to alternatives rather than as the only answer.

Skipped:
- @starter_story (multiple posts), @DadsBible_, @ActionableMind, @quotesdaily100, @richardyuzee, @heyeaslo (engagement-bait listicle threads; Pomodoro appears as one numbered item with no substance)
- @GetFocusFlo ("The Pomodoro Technique is changing" thread) , topically the most on-point post in the set, but it is a focus-app account's promo thread with 0 likes; self-promotion is excluded by the selection criteria
- @projectsbywin, @om_patel5, @dkare1009 (product/app launches and study-music promos)
- @grok, @heartwoodnc (a bot summary and the request that prompted it, not human takes)
- @SystemSunday (930 likes on the Pomodoro fragment) , the post's substance is a plug for a specific Chrome extension inside a broader afternoon-slump thread; @thejustinwelsh already covers the "I bought a timer" angle without the plug
