# Reddit selection: digital vs paper notes

Transport: `chrome` (primary, per `research.reddit_transport`) — logged-in browser
same-origin fetch of Reddit's `.json` endpoints after passing the JS challenge.
Search returned HTTP 200, 25 results, `t=year`, `sort=relevance`.

Relevance ranking was fuzzy as expected on this short query: of the 25 results, roughly
half are unrelated to note-taking entirely (r/BestofRedditorUpdates, r/steam_giveaway,
r/legaladvice, r/boardgames, r/GamingLeaksAndRumours, r/S24Ultra), and several more are
device-shopping threads (Kindle Scribe vs reMarkable, Supernote, Remarkable 2) that are
about which e-ink tablet to buy rather than whether digital or paper helps you learn.
Skipping liberally here is correct.

Selected **5** threads for deep fetch:

1. (idx 0) `/r/productivity/comments/1p0qpop/why_your_brain_treats_digital_reading_differently/` — score 637, 84 comments, 2025-11. The highest-engagement on-topic thread on the page, and it opens on exactly this post's core question (does the medium change how your brain processes the material). The comment tree on a 637-score r/productivity post is the best available source of real counter-arguments to the "paper always wins" narrative.
2. (idx 14) `/r/notebooks/comments/1mqh2rq/research_confirms_that_paper_notes_stick_better/` — score 91, 30 comments, 2025-08. Titled as a research claim ("Research confirms that paper notes stick better than digital") and the OP body summarizes the longhand-vs-laptop study. Valuable in two directions: the claim itself, and how ordinary readers push back on it. **Do not cite the thread as evidence** — use it to find which study people mean, then verify against the primary source at Stage 3d.
3. (idx 16) `/r/productivity/comments/1mtiezy/paper_notes_vs_digital_notes_what_works_better/` — score 30, 33 comments, 2025-08. The most literally on-keyword thread in the set ("Paper notes vs. digital notes – what works better for you?"), a straight solicitation of lived experience. Prime voice-of-customer language for how readers actually phrase this dilemma.
4. (idx 3) `/r/PE_Exam/comments/1tsely7/tablet_vs_paper_for_pe_study_anyone_else_going/` — 34 comments, 2026-05. Score is 0, below the usual ≥5 bar, but 34 comments makes it a genuine discussion, and it is the only thread covering the **working professional studying for a high-stakes exam** — the brief's secondary audience. Selected on comment volume and audience fit, with the low score noted.
5. (idx 21) `/r/OntarioUniversities/comments/1sf10hr/are_we_actually_studying_better_with_digital/` — 5 comments, 2026-04. Lowest engagement of the five and normally below the bar, but it carries the sharpest angle on the page: "are we actually studying better with digital notes, or just making prettier ones?" That aesthetic-notes trap is a real reader failure mode this post should name, and it connects to this blog's existing `aesthetic notes` tag. Selected for angle, not for engagement — weight its quotes accordingly.

Skipped (representative):

- idx 5, 11, 12 (r/eink, r/Supernote, r/RemarkableTablet) — device-purchase threads (Kindle Scribe vs reMarkable vs Supernote). This post is not a tablet roundup, and the brief bars commercial framing.
- idx 15 (r/csMajors), idx 9 (r/civilengineering), idx 22 (r/CasualConversation) — on-topic but thin (1–5 score, ≤12 comments) and largely duplicate what idx 3 and idx 16 already cover.
- idx 1 (r/SoloDevelopment), idx 18 (r/personaltraining), idx 19 (r/TestedOnMe) — adjacent but domain-specific (game ideas, client sessions, work notes) rather than study/knowledge note-taking.
- idx 2, 4, 6, 8, 10, 13, 17, 20, 23, 24 — entirely off-topic; Reddit relevance noise.
