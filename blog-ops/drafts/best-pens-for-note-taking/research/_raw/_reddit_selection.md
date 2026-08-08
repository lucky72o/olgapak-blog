# Reddit selection: best pens for note taking

Transport: `chrome` (per `research.reddit_transport`) — logged-in browser `fetch()` of Reddit's `.json` endpoints, blob-downloaded to disk. No DOM scraping, no curl fallback needed.

## Search note (why `_reddit_search.json` is a merged listing)

The contract query — `search.json?q=best pens for note taking&sort=relevance&t=year&limit=25` — returned 25 results of which **3 were on-topic**. The rest were high-engagement noise from r/BestofRedditorUpdates, r/movies, r/Helldivers and similar: Reddit's relevance ranking on short consumer queries is fuzzy, which the editor persona (§Stage 1.5a) explicitly anticipates. Rather than deep-fetch three thin threads, three supplementary queries were merged into the same artifact, native shape preserved:

- `r/pens/search.json?q=note taking&restrict_sr=1&sort=relevance&t=all`
- `search.json?q=best pen for taking notes&sort=relevance&t=all` (returned nothing new)
- `r/notebooks/search.json?q=pen&restrict_sr=1&sort=relevance&t=all`

49 unique children were appended to the original 25 (74 total); `_merged_note` in the file records this. Ranks below are indices in the merged listing.

## Selected (5 of 74)

1. (rank 25) `/r/pens/comments/1u85stl/i_need_a_pen_that_can_stand_up_to_my_excessive/` — "I need a pen that can stand up to my excessive class note taking", 59 points / 65 comments, 2026-06. The single best voice-of-customer thread in the set: the exact reader of this post, stating the exact failure mode (pens dying mid-semester), answered at length by people who actually write all day.
2. (rank 27) `/r/pens/comments/1micc41/comparison_of_my_sakura_pigma_microns_03mm_fresh/` — "Comparison of my Sakura Pigma Microns (0.3mm) fresh vs after a full day", 71 points / 71 comments, 2025-08. Rare hands-on durability evidence on one of the brief's four anchor brands, and the counterweight to every roundup that recommends Microns without mentioning tip wear.
3. (rank 1) `/r/pens/comments/1otlbx6/best_pens_for_notetaking_as_a_college_student/` — "Best pens for notetaking as a college student?", 14 points / 23 comments, 2025-11. The highest-quality on-topic thread from the ORIGINAL contract query; recommendation-dense and squarely on the primary audience.
4. (rank 36) `/r/pens/comments/1lovocm/which_pen_should_i_get_for_notetaking_in/` — "Which pen should I get for note-taking in University? Help!", 10 points / 28 comments, 2025-07. Second student thread chosen deliberately for its budget framing and its disagreements — the pushback between commenters is what stops the post reading like consensus that doesn't exist.
5. (rank 55) `/r/notebooks/comments/1v4agc3/so_paper_thickness_has_nothing_to_do_with_being/` — "so paper thickness has nothing to do with being fountain pen friendly", 15 points / 43 comments, 2026-07. Different subreddit and the pen↔paper interaction the brief calls for: it directly attacks the "higher gsm = no bleed-through" assumption most roundups repeat, and is the natural bridge to our notebooks post.

## Skipped (notable)

- `/r/pens/comments/1pa38rv/whats_the_best_pen_for_note_taking/` (11/17) — this is the thread that ranked #2 on the Google SERP and was deferred here from `_serp_selection.md`. Skipped anyway: it is a thinner version of picks 3 and 4, and spending a slot on it would buy repetition rather than a new angle.
- `/r/pens/comments/1v53ygz/best_pens_for_note_taking/` (3/15) and `/r/pens/comments/1q3yjo8/pens_for_note_taking/` (2/20) — on-topic but low-signal; score below the ≥5 bar with few substantive replies.
- `/r/JEENEETards/comments/1vbgx8h/...` (2/34) — genuinely on-topic students, but score 2 and India-specific pen brands (Pentonic) that don't map to what this post's readers can buy.
- `/r/pens/comments/1tuztrc/my_new_goto_combo_for_notetaking/` (181/4) and `/r/pens/comments/1t5wixc/my_daily_drivers_for_taking_notes/` (27/3) — high-score photo posts with almost no discussion; a picture of someone's pen case is not voice-of-customer.
- `/r/notebooks/comments/1sbflhb/moleskine_hates_fountain_pens/` (594/226) — big and lively, but it is a notebook-quality argument centred on fountain pens, which are a footnote in this post, not a pick.
- Every r/BestofRedditorUpdates / r/movies / r/Helldivers / r/CATHELP result from the original query — pure ranking noise, zero topical relation.
