# X selection: aesthetic stationery

## Which tab, and why both are on disk

Pulled `f=top` first (`_x_search_top.json`, 6 results). It was mostly off-topic: the two
highest-engagement posts (227 and 34 likes) are AI image-generation prompt templates that
merely contain the word "aesthetic". Per the Stage 1.5b rule, re-pulled `f=live` with
`lang:en` and scrolled for more depth (`_x_search.json`, 20 results).

**Neither tab is strong, and that is the finding.** The Live tab is dominated by
zero-engagement seller posts (pencil-case affiliate listings, mystery-box bundles, wedding
stationery ads), one journaling account posting photo updates, and more AI-prompt spam
(371 and 153 likes, both off-topic). `_x_search.json` is the Live pull and is the primary
file; `_x_search_top.json` is retained because two of the four selections below come from it.

X carries far less usable signal on this keyword than Reddit did. Selections below are
chosen for the QUALITY OF THE TAKE, not for engagement thresholds, and two of them have
low like counts. The researcher should weight X lightly against SERP and Reddit.

## Selected (4)

1. **`@ElShai_eg`** , https://x.com/ElShai_eg/status/2095889827837165865 (Live). "Every September, we convince ourselves that a new notebook, fresh pens, and a suspicious number of pastel highlighters will finally make us productive," then names the **fresh start effect** by name. The single sharpest take in either tab and the exact psychology our post has to handle honestly: this is why people search this term in the first place.
2. **`@areumsafa`** , https://x.com/areumsafa/status/1939885470131134905 (Top, 266 likes). "cute and aesthetic stationery , a thread." A real recommendation thread with genuine engagement; the closest thing on X to what our readers are looking for, and useful for seeing which item categories enthusiasts actually lead with.
3. **`@Fffffddddkkk1`** , https://x.com/Fffffddddkkk1/status/2094863171546919023 (Top). "Aesthetic stationery, desk setups and study spaces dominate studytok feeds, making learning look stylish and effortless. My actual study area is cov[ered]..." The aspiration-versus-reality gap stated plainly. Low engagement, kept for the counterpoint, which pairs with the Reddit overconsumption threads.
4. **`@planpaperontwt`** , https://x.com/planpaperontwt/status/1348481574048698370 (Top, 217 likes). "REKOMENDASI STATIONERY AESTHETIC TERMURAH , a thread" (Indonesian: *cheapest* aesthetic stationery recommendations). Non-English, kept for one reason: it is the only high-engagement post in either tab organised around the BUDGET end of the category, which our roundup needs to cover.

## Skipped

- Top ranks 1, 3 and Live ranks 2, 6, 17 , AI image-generation prompt templates (up to 371 likes). They match "aesthetic" and nothing else.
- Live ranks 4, 7, 9, 13, 15, 18, 20 and Top rank 4 , seller/affiliate posts (mystery boxes, pencil cases, wedding stationery). Self-promotion, excluded by the Stage 1.5b criteria.
- Live ranks 3, 5, 8, 11, 16, 19 , one journaling account's photo posts. Pleasant, near-zero text substance, 0-1 likes each. Rank 16 ("the various journals i use & what i like to use them for") was the closest call; dropped because the value is in an image, not the post text.
- Live rank 10 (brand identity design) and rank 12 (kraft-paper cleaning supplies) , keyword-incidental.

## Post-fetch correction (editor, after deep fetch)

Deep-fetching selection 2 (`@areumsafa`) proved the pick wrong: the "thread" body is 42
characters and every one of its six self-replies is a bare Shopee affiliate link with the
content carried in images. There is no analysable text. It is retained on disk as
`x-02-areumsafa.json` for auditability, but **the researcher should treat it as
no-signal and not quote from it.**

Selection 4 (`@planpaperontwt`) was dropped WITHOUT fetching for the same reason: it is
the identical format (an Indonesian Shopee affiliate thread, "©️ PlanPaper ID ©️" plus a
shopee.co.id link in the opening post). Spending an X navigation on it would have produced
a second empty file.

**Net usable X sources: 2** , `x-01-ElShai_eg.json` and `x-03-Fffffddddkkk1.json`. Both are
takes rather than product recommendations, and both point the same way: the fresh-start
impulse and the staged-versus-real study space. That is the honest yield of this source
for this keyword, and it reinforces the note above that X should be weighted lightly here.
