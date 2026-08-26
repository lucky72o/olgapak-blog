# SERP selection: digital vs paper notes

Observed intent: **informational / comparison** — the live top 10 is a pros-and-cons
comparison field (university learning-strategy pages, a note-taking pros/cons explainer,
personal "what finally works for me" essays), with **zero commercial listicles and zero
product roundups**. Google is not serving "buy a notebook or an app"; it is serving
"help me decide, and tell me what the research says."

Two signals worth carrying into the plan:

- **Rank 1 is a Reddit thread** (`r/udub`, "digital or paper notes?"). On this keyword
  Google is ranking lived student experience above every polished article on the page.
  That is a strong argument for weighting the Stage 1.5a Reddit analysis heavily and for
  writing from tested personal experience rather than a neutral survey.
- **Three of the top 10 are university pages** (`guts.wisc.edu`, `utwente.nl`,
  `utsc.utoronto.ca`). Academic-adjacent authority is what ranks here, so the post's
  research claims have to be genuinely accurate and scoped — the audience arriving from
  this SERP has just read a university study-skills page.
- SERP features: `people_also_ask` only. No AI Overview, no featured snippet, no shopping.

Note on `.edu` and the forbidden-competitor rule: `guts.wisc.edu` and
`utsc.utoronto.ca` are top-10 results, but `.edu` domains are **authoritative-allowlist**
class per `blog-craft.md` §Authoritative-site allowlist, so they remain legitimate
external-link targets. `utwente.nl` is a university domain but not `.edu`/`.gov` — treat
it as a top-10 competitor (do NOT link), and route to whatever primary research it cites.

Reviewed all 10 results from `_serp.json`. Selected **7** for deep fetch:

1. (rank 2) https://www.universalcpareview.com/ask-joey/digital-note-taking-pros-cons-and-best-practices/ — the closest thing on the page to a straight pros/cons explainer; sets the baseline structure readers expect.
2. (rank 4) https://research.com/education/digital-notes-vs-paper-notes — exact-match on the target keyword and dated to 2026; the most direct ranking competitor, so its coverage defines the completeness bar.
3. (rank 5) https://wondertools.substack.com/p/paper-vs-digital — a first-person "what finally works for me" essay; the angle closest to this blog's voice, useful as a contrast for how to be personal without being thin.
4. (rank 6) https://guts.wisc.edu/2020/11/19/pros-and-cons-of-typed-digitally-handwritten-and-paper-notes/ — University of Wisconsin. Splits the comparison **three** ways (typed / digitally handwritten / paper) instead of two, which is the structural insight this post needs; also the likeliest source of citable primary research.
5. (rank 7) https://www.utwente.nl/en/stories/student/599125/paper-or-digital-notes-the-final-showdown/ — student-voice university piece; useful for the lived-experience angle and for what the "showdown" framing gets wrong.
6. (rank 8) https://rkursem.medium.com/paper-or-digital-notes-how-to-get-the-best-of-both-worlds-2c95607edafb — the hybrid/"best of both worlds" angle, which the brief explicitly wants covered rather than a two-column purity war.
7. (rank 9) https://www.utsc.utoronto.ca/learningstrategies/digital-vs-paper-notes — University of Toronto Scarborough learning-strategies page; exact-keyword match from an academic source, likely to name the specific studies.

Skipped:

- rank 1 (`reddit.com/r/udub`) — a Reddit thread, not an article. Deliberately NOT deep-fetched here: Stage 1.5a fetches Reddit properly via the `.json` API with full comment trees, which yields far better voice-of-customer material than scraping one thread's DOM. Its rank-1 position is recorded above as an intent signal.
- rank 3 (`xerox.com`) — off-intent. Despite the "digital vs paper" title, it is a managed-print-services piece about business documents and paperless offices, not note-taking or memory. Fetching it would pollute the analysis with enterprise-document framing.
- rank 10 (`researchgate.net`) — a forum-style Q&A post, thin body content and frequently gated/JS-heavy; low signal for structure and unreliable to fetch.
