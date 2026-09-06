# SERP selection: ai study tools

Observed intent: **transactional / navigational-commercial.** The live top 9 is
dominated by TOOL VENDOR HOMEPAGES (ranks 1, 2, 3, 4, 8, 9 are all product front
pages), not by editorial articles. Only three results are genuine content: two
"best AI study tools" roundups (ranks 5, 7) and one Reddit discussion (rank 6).
Google is reading this query as "show me the tools themselves," with a thin
roundup layer on top. That confirms the brief's `transactional` intent AND
identifies the gap: there is very little honest, editorially-independent
comparison on page 1 — almost every top result is a tool selling itself.

Google SERP features present: `people_also_ask`. No AI Overview, no featured
snippet, no shopping pack. The PAA questions (captured verbatim, they feed the
FAQ block at outline time):

- What is the best AI tool for studying?
- What is the best AI tool to learn?
- Is ChatGPT good for studying?
- Are there any free AI study apps?

Reviewed all 9 results from `_serp.json`. Selected 8 (target 5–8, hard cap 8) for
deep fetch. Because the SERP is vendor-dominated, the selection deliberately
MIXES two classes, and the reason for each class is different:

**Editorial / discussion (3) — for structure, angle, and honest counter-takes:**

1. (rank 5) https://www.remnote.com/blog/best-ai-study-tools , the closest direct
   competitor for this exact keyword ("7 Best AI Study Tools for Students in
   2026"); tells us the roundup structure Google is currently rewarding, the
   tool set it names, and how many tools it commits to.
2. (rank 6) https://www.reddit.com/r/studytips/comments/1ps962f/whats_your_best_free_ai_tool_to_make_studying/ ,
   a real student discussion ranking on page 1 of a commercial query. This is
   voice-of-customer sitting inside the SERP itself, and the one page-1 result
   with any incentive to say a tool is bad or overhyped.
3. (rank 7) https://www.therundown.ai/best-ai-tools/best-ai-study-tools , second
   editorial roundup, from an AI-newsletter publisher rather than a study-tool
   vendor; a useful cross-check on which tools appear in BOTH roundups (overlap
   = the consensus set a reader expects to see named).

**Tool vendor pages (5) — as PRIMARY SOURCES for the tools' own feature and
pricing claims:** this post is a roundup, so the tools being reviewed are the
post's SUBJECT, not competitors to route around. `standards/blog-craft.md`
§External linking classifies a product's own official page as a
`primary_source` for what that product does, and the brief's affiliate branch
sends every software tool's link to its own official page. Fetching them here is
how the writer gets sourced feature/pricing facts instead of inventing them.

4. (rank 2) https://www.studyfetch.com/ , the highest-ranked tool with an actual
   platform pitch ("The Top AI Learning Platform"); likely a named pick.
5. (rank 3) https://www.turbo.ai/ , ranks above two better-known names, so worth
   understanding on its own terms.
6. (rank 4) https://www.mindgrasp.ai/ , self-describes as "The #1 AI Study Tool
   for Students"; a claim worth checking against what the page actually offers.
7. (rank 1) https://www.studley.ai/ , the #1 result; whatever it is, a reader
   searching this term will land on it first, so the post should be able to
   place it.
8. (rank 9) https://evernote.com/chat-with-ai-assistant/free-study-ai-tool , the
   only established general-purpose brand in the set. Important as the
   "you may already have this" option, and as a counterweight to the
   AI-study-startup monoculture in ranks 1–4.

Skipped:

- rank 8 (https://www.ask-maeve.com/en-gb/) , a sixth vendor homepage in the
  same category as ranks 1–4 and the weakest-ranked of them. Dropped purely to
  respect the hard cap of 8; adding it would have added a seventh near-identical
  product page and no new angle. Noted here so a later stage can pick it up if
  research shows it is genuinely differentiated.

Nothing else was skipped: 9 results were returned, 8 selected, 1 dropped.

Gap this SERP leaves open (carry into the plan): nobody on page 1 covers
**when AI is the wrong tool for studying**, the free-tier cliff (where each
tool stops being usable for free), or the academic-integrity line. Vendors will
not write it and the two roundups do not. That is the post's differentiation.

---

## Routing amendment (made during deep fetch)

Selection #2 (rank 6, the r/studytips thread) is NOT deep-fetched here as a
`NN-*.json` SERP artifact. Reddit is never DOM-scraped by this workflow, and this
blog's `research.reddit_transport` is `chrome`, so the thread is fetched as
native Reddit `.json` in Stage 1.5a instead, where the researcher can parse the
post + comment listings properly. It is carried forward as a **mandatory pick in
`_reddit_selection.md`** rather than dropped — it is the one page-1 result with
honest student counter-takes, so losing it would cost the post its
differentiation.

Net SERP deep fetches: **7** (`05`, `07`, plus the five vendor pages), still
inside the 5–8 target. The 8th selected result lives in the Reddit stage.
