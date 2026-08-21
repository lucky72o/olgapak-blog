# SERP selection: best pens for note taking

Observed intent: **commercial / transactional** — the live top 10 is dominated by "best pens" roundups (Wirecutter, JetPens, Pen Addict, The Gentleman Stationer), a retailer category page, an Amazon search page, and one Reddit "what's the best pen for note taking?" thread. Readers want a ranked shortlist with a reason per pick, not an explainer. Two supporting sub-intents show up: pen *mechanics* (a gel-vs-ballpoint comparison ranks at #7) and *use-case* framing (studying/HSC at #6, planning/journaling at #10). SERP features: People Also Ask (no AI overview, no featured snippet captured).

Reviewed top 10 results from `_serp.json`. Selected 7 (target 5–8, hard cap 8) for deep fetch:

1. (rank 1) https://www.penaddict.com/top-5-pens — long-running enthusiast site; a short, opinionated "top 5" is the counterweight to the 15-item affiliate roundups and shows which picks survive expert scrutiny.
2. (rank 4) https://www.nytimes.com/wirecutter/reviews/the-best-pen/ — Wirecutter is the highest-authority competitor on this SERP and the one readers cross-check against; its test methodology and pick set define what "complete" looks like here.
3. (rank 5) https://www.jetpens.com/blog/The-Best-Pens-for-Note-Taking/pt/985 — the most on-keyword result on the page (exact "pens for note-taking" framing) from a specialist retailer; densest source of tip-size / ink-type / dry-time detail and of the per-use-case structure this post needs to beat.
4. (rank 6) https://pilotpen.com.au/blog/hsc-best-pens-for-note-taking — brand blog, but a genuine article and the only result framing picks around *studying* (exam prep, lecture speed), which is this post's primary audience. Read for the student angle, not for neutral product claims.
5. (rank 7) https://bastionboltactionpen.com/blogs/news/gel-pen-vs-ballpoint-pen — covers the mechanics sub-intent (gel vs ballpoint: dry time, smudging, ink flow) that the pure roundups skip; feeds the plain-language "how pens actually differ" section.
6. (rank 9) https://www.gentlemanstationer.com/best-pens-2024 — second enthusiast voice, deliberately picked over a higher-ranked shop page for a different taste profile (fine tips, refillables); also a date signal — a 2024-titled page still ranking says the SERP is not aggressively freshness-gated.
7. (rank 10) https://smallstuffcounts.com/best-pens-for-planning/ — the planner / journaling / colour-coding angle and the bleed-through-on-cheap-paper complaint; closest to the aesthetic-notes secondary audience and a natural bridge to our notebooks post.

Skipped:
- rank 2 (reddit.com/r/pens "What's the best pen for note taking?" — a genuine discussion, but Reddit is a separate research stage here with a proper `.json` fetch; deep-fetching it as an HTML SERP result would duplicate Stage 1.5a and waste one of eight slots. Flagged for the Reddit selection instead.)
- rank 3 (cross.com "Best Pens for Note Taking" — a brand shop collection page, not an article; single-brand picks with no comparative reasoning.)
- rank 8 (amazon.co.uk search-results page — no editorial content at all, and UK-market listings besides.)

Coverage check: this set spans all three observed sub-intents (ranked roundups ×4, mechanics ×1, use-case student/planner ×2), two authority tiers (mainstream review desk + specialist retailer vs. independent enthusiasts), and both the brand-published and independent perspectives. Adding an eighth would have meant a second shop page, which adds no new angle.
