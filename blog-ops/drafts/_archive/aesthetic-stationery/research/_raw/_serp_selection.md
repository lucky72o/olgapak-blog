# SERP selection: aesthetic stationery

Observed intent: **transactional / navigational-to-retailer**. The live US top-8 for the
exact head term is 100% commerce: seven shop or collection pages (Coral & Ink,
NotebookTherapy, Amazon search, MochiThings, MUJI US, Stationery Pal, Cloth & Paper)
plus one Pinterest board. **Zero genuine articles rank for the head term.** People
searching "aesthetic stationery" are overwhelmingly trying to BUY, not to read.

## Captures on disk

| File | Query | Why |
|---|---|---|
| `_serp.json` | `aesthetic stationery` (`gl=us&hl=en&pws=0`) | The authoritative head-term SERP for this post's target keyword and this blog's market (US; the blog runs a US Amazon Associates tag). This is the intent evidence. |
| `_serp_uk_default.json` | `aesthetic stationery` (browser default geo → UK) | The first capture, kept as evidence. Google served a UK result set (Coral & Ink UK, Amazon.co.uk, Ryman, The Journal Shop). Superseded by the US capture, retained so the geo correction is auditable. |
| `_serp_supplementary.json` | `aesthetic stationery must haves` (`gl=us&hl=en&pws=0`) | **Editor's addition.** The head-term SERP contains no articles to deep-fetch, so it cannot tell us how a competing *article* is structured. This content-shaped variant is the query this post actually competes on (the content-plan angle is "Ultimate Aesthetic Stationery Haul, 25 must-haves") and it does surface real roundups. Every deep-fetched article below comes from here. |

## Selected for deep fetch (6)

From `_serp_supplementary.json`:

1. (rank 5) https://drpen.co.uk/blogs/guides/top-10-stationery-aesthetic-organisation , retailer-blog roundup that pairs each aesthetic item with an organisation job; closest structural sibling to our "pretty things you actually use" angle.
2. (rank 6) https://www.thequalityedit.com/articles/must-have-stationery , editorial (non-retailer) curated roundup of 11 picks; the best read on how an independent publisher justifies a short, opinionated list instead of a padded one.
3. (rank 7) https://www.savespendsplurge.com/guide-to-an-aesthetic-office-setup-part-8-office-stationery , personal-blog first-person haul with real opinions and price sensitivity; nearest voice match to Olga's tested-not-hyped framing.
4. (rank 8) https://www.goodgudi.com/blogs/news/the-ultimate-guide-to-aesthetic-stationery-brighten-up , explicitly titled "Ultimate Guide to Aesthetic Stationery"; direct title-and-scope competitor for the planned "ultimate haul" framing.
5. (rank 9) https://www.swiftwellnessmag.com/blog/aesthetic-school-supplies , 82-item student-supplies megalist; useful as the high-count end of the format spectrum and as a check on whether 25 items is enough, too many, or padded.

From `_serp_uk_default.json` (rank 9 of the head-term SERP, the ONLY genuine article to rank for the head term in either geo):

6. (rank 9, head-term) https://undertherowantrees.co.uk/blogs/news/what-is-aesthetic-stationery-and-why-is-it-so-popular , the definitional "what is / why popular" piece; the only evidence of what an article that actually ranks for the head term has to do.

## Skipped

- Head-term ranks 1, 2, 3, 4, 6, 7, 8 (Coral & Ink, NotebookTherapy, Amazon search, MochiThings, MUJI US, Stationery Pal, Cloth & Paper) , retailer collection/home pages, no article content to analyse.
- Head-term rank 5 and supplementary rank 2 (Pinterest board / Pinterest ideas page) , image boards, explicitly out of scope per Stage 1a criteria.
- Supplementary ranks 1 and 3 (NotebookTherapy, Amazon search) , duplicates of head-term shop results.
- Supplementary rank 4 (https://www.reddit.com/r/stationery/comments/1jcpgrp/) , a genuinely valuable "if you had to start over, what stationery would you NEED" thread, deliberately NOT deep-fetched here: it is routed to Stage 1.5a (Reddit research), which fetches threads through Reddit's `.json` API and parses comments properly.

## Editorial flag carried forward to Stage 1c

The head term is retailer-owned. A blog roundup is unlikely to displace seven shops for
"aesthetic stationery" itself, so `plan.md` should target the long-tail intent the
content plan already chose ("must haves" / "haul" / per-category picks) and treat the
head term as a secondary, brand-adjacent target rather than the primary ranking bet.
