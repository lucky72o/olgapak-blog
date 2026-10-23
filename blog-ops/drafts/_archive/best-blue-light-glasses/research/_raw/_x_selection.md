# X selection: best blue light glasses

Two captures were taken. **`f=top` is the kept set** (`_x_search.json`, copy preserved as `_x_search_top.json`); `f=live` was pulled as a cross-check (`_x_search_live.json`, query `"blue light glasses" min_faves:20`) because Top was dominated by one eyewear-industry thread. Live turned out to be mostly personal noise (K-pop merch, "me and my £5 blue light glasses"), so Top stays canonical. One post from the Live pull is selected anyway because it carries an argument neither tab repeated.

What the platform shows: on X the conversation is barely about which pair to buy. It is about **who profits** , lens upsells, retail margins, SEO money chasing the keyword , plus doctors being asked the question constantly. Useful counterweight to the SERP, which is almost entirely shopping pages.

Selected 5 for deep fetch:

1. (top rank 7) https://x.com/DGlaucomflecken/status/1285053673580576768 , an ophthalmologist saying he is asked about blue light glasses more than anything else and is "deeply uninterested" in the topic. 48 replies. The professional-scepticism voice, in a form readers will recognise.
2. (top rank 10) https://x.com/traversymedia/status/1529138541850152960 , 796 likes, 265 replies asking outright whether they help. This is the single richest reply thread in either capture: hundreds of ordinary wearers saying yes, no, or "only at night".
3. (top rank 2) https://x.com/HeyOscarx/status/2096206164476494021 , 497 likes, on online-bought glasses being as good as optometrist-dispensed ones. Directly relevant to the budget picks: a cheap online pair is not automatically a worse pair.
4. (top rank 3) https://x.com/HeyOscarx/status/2096206167714476236 , 378 likes, on lens upgrades being the highest-margin item an optician sells. This is the buyer-protection point the post owes its readers before they say yes to a coating at the counter.
5. (live rank 4) https://x.com/JunoCrypto3/status/2096882413427458120 , 43 likes but 40 replies: "we spend hundreds on fancy blue-light glasses and sleep supplements, yet doomscroll until 2 AM anyway." The behaviour-beats-gear argument, which is the honest frame of this whole post and the bridge to the screen-time internal links.

Skipped:

- top ranks 1, 5, 6 (HeyOscarx) , same thread as the two selected posts; the two picked carry the claims that matter to a buyer. Two from one thread is already the ceiling.
- top rank 9 Noahs4Cents , an SEO case study about ranking a glasses brand for this keyword. Interesting as market context, but it is self-promotion and says nothing about the product.
- top ranks 4, 8 (cqtwmnn, ProducingMedia_) , genuine questions with 6 and 5 likes and almost no replies. Nothing to harvest.
- live ranks 1, 2, 3 , personal posts about owning a pair, no argument or experience detail.
- live rank 5 VitalSun_App , app-promo post making a myopia claim; the post must not repeat health claims sourced from a marketing account.

## What the deep fetch changed (post-fetch note)

- **4 files, not 5.** Picks 3 and 4 are both tweets inside one HeyOscarx thread, and X serves the whole thread on either URL, so `x-02-HeyOscarx.json` captures both claims (the 8th and 9th tweets in its `topReplies` array) in a single fetch. No second file was needed.
- **`x-11-JunoCrypto3.json` is promotional and is retained under caution.** The deep fetch showed the "we spend hundreds on gear and doomscroll until 2 AM anyway" line is the hook of an ad for a sleep app. The sentiment is still the honest frame of this post, but the post must treat it as a mood quote at most, never as a source, and must not name or link the app.
- **`x-02-HeyOscarx.json` is secondhand industry claim, not fact.** Its Luxottica ownership and markup numbers are an unsourced retelling. Useful for the shape of the buyer's suspicion; every number in it needs an independent source before it can appear in the post, and the honest move is to make the point without the numbers.
