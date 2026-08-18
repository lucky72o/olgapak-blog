# X selection: digital vs paper notes

**Selected: 0 posts. No deep fetches performed. Stage 1.5b produced no `x-NN-*.json` files.**

X login was confirmed live before searching (`x.com/home` rendered the logged-in
timeline, no redirect to a login wall), so this is a genuine empty result, not an
auth failure and not a fetch failure.

## Which tab was used and why

Per the skill's `f=top` → `f=live` fallback rule, all three of these were run:

| Query | Tab | Results | Verdict |
|---|---|---|---|
| `digital vs paper notes` | top | 2 | Off-topic — both are Obsidian/AI-workflow promo posts from one account (@KanikaBK, 81 and 137 likes) |
| `digital vs paper notes` | live | 5 | Off-topic — four near-duplicate mining/business newsletter link-dumps from three related accounts, plus an e-commerce white paper. The keyword matched incidentally inside long link lists |
| `handwritten notes vs typing` | top | 2 | One crypto/AI promo post; one genuinely on-topic post with 0 likes and 0 replies |

The third query was an editor addition, not in the original plan: the literal target
keyword returned pure noise on both tabs, so a semantically equivalent phrasing was
tried before declaring the source empty. It surfaced the only on-topic post of the
entire stage.

## Why nothing was selected

The one relevant post (@Luisduque: "Handwriting tops out around 13 words a minute.
Typing runs 40 to 60.") was rejected on two independent grounds:

1. **Engagement floor.** 0 likes, 0 replies — fails "likes > 50 OR meaningful reply
   count" by every margin. There is no discussion attached to deep-fetch.
2. **It would be an over-claiming trap.** Those words-per-minute figures are stated
   without a source by a zero-engagement account. The brief names over-claiming the
   handwriting-vs-typing research as this post's single biggest quality risk. A
   speed differential is exactly the kind of number that reads as authoritative and
   gets repeated; if the post makes that claim at all, it must come from a primary
   source verified at Stage 3d, never from an X post. The claim is recorded in
   `_x_search.json` so it is traceable if it resurfaces, explicitly marked do-not-cite.

## Consequence for downstream stages

`research/x.md` will record this stage as empty. This is **not** counted as a fetch
failure for the >50% aggregate rule — every search request returned HTTP 200 and
rendered; X simply has no substantive conversation on this topic.

The voice-of-customer load for this post therefore rests entirely on Reddit
(Stage 1.5a: 5 threads, 66 top-level comments), which is well-supplied. The
`blog-researcher` should not treat the missing X analysis as a gap to be filled with
inference.
