# SERP selection: how to take notes on ipad

Observed intent: informational / how_to with a strong app-selection component — the live top results are a Reddit "show me your setup" thread, two personal "here's my system" posts, an app deep-dive, a ranked app roundup, and two Apple support docs; no shopping pack, no AI overview, and a "People also ask" block dominated by app-choice questions ("What is the best app for notes on iPad?", "How can I write notes on my iPad for free?").

Reviewed the 7 organic results Google returned in `_serp.json` (the page carried 7, not 10). Selected 5 (target 5–8, hard cap 8; fewer allowed when the SERP warrants it) for deep fetch:

1. (rank 2) https://tech.loveholidays.com/how-i-stay-organised-my-ipad-note-taking-system-6f3812b1692e , a full personal end-to-end system post — the closest structural analogue to what this post has to beat, and a source of the "organisation / folder structure" angle the roundups skip.
2. (rank 3) https://support.apple.com/guide/ipad/get-started-with-notes-ipadfeea407c/ipados , Apple's own Notes documentation. Primary source and allowlist-class, so it is both a structure reference AND a citable external link for every stock-Notes claim (handwriting, Markup, scanning) instead of guessing at feature behavior.
3. (rank 4) https://www.hellobrio.com/blog/note-taking-on-ipad , a single-app deep dive (Notability) — useful for the depth level readers expect on the handwriting-app section and for the vocabulary beginners actually search with.
4. (rank 5) https://blog.alexanderfyoung.com/how-i-take-notes-on-my-ipad-pro-note-taking-in-medical-school-and-work-2022/ , the heavy-use study case (medical school). Best source for the honest workflow detail — review habits, PDF annotation, why a setup survives a term — that the beginner posts omit.
5. (rank 6) https://zapier.com/blog/best-note-taking-app-for-ipad-iphone/ , the ranked app roundup that occupies the commercial half of this SERP. Fetched to map the app-comparison shape and the "best for X" labels readers expect; it is a top-10 SERP competitor, so it is a STRUCTURE reference only and must never be linked (per blog-craft.md §Forbidden external links) — any stat it carries gets routed to its own cited primary source.

Skipped:
- rank 1 (https://www.reddit.com/r/ipad/comments/1166m23/... , a Reddit discussion thread, not an article; Stage 1.5a fetches Reddit natively via the `.json` API with post + comment structure, so deep-fetching the HTML here would duplicate it worse)
- rank 7 (https://support.apple.com/en-gb/118442 , the en-GB variant of the same Apple Notes documentation already selected at rank 3; duplicate content, no new angle)
