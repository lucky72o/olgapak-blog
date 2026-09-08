# Reddit selection: how to take notes in meetings

## Query note (read this first)

The literal target keyword returns pure noise on Reddit's relevance ranking. The first pull
(`q=how to take notes in meetings&sort=relevance&t=year&limit=25`) came back with 25 results
of which ZERO were on topic: r/BestofRedditorUpdates, r/nfl, r/Eminem and similar. Reddit's
relevance scoring collapses on long natural-language queries — the same failure mode the
editor persona (§Stage 1.5a) warns about, just at its extreme.

Two more queries were tried. `q=how do you take notes in meetings` and
`q=note taking in meetings` both returned the same noise. The quoted phrase query
**`q="meeting notes"&sort=relevance&t=all&limit=25`** returned a genuinely on-topic set, so
that is the capture saved as `_reddit_search.json`. This mirrors the documented X
`f=top` → `f=live` re-pull rule: keep whichever pull is on-topic and say which one was used.

`t=all` rather than `t=year` was deliberate: the two highest-value career-advice threads on
this topic are older than a year, and meeting-note practice is not a fast-moving subject.
Thread ages are recorded per selection below so the researcher can weight accordingly.

## Selection

Reviewed the 25 results in `_reddit_search.json`. Selected 5 (hard cap 5) for deep fetch:

1. (SERP rank 2, not in `_reddit_search.json`) `/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/` , the single most on-topic thread available anywhere for this keyword; it ranks on page one of Google for the exact target phrase, so it is part of what the reader already sees. Sourced from `_serp.json` rank 2 rather than from the Reddit search, and deliberately routed here (full comment tree via the `.json` API) instead of being DOM-scraped as a SERP result.
2. (rank 14, r/projectmanagement, 11 days old, score 69, 107 comments) `/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/` , very recent, 107 comments, and squarely on the post's core pain: the write-up time cost after the meeting ends.
3. (rank 7, r/LifeProTips, 44 days old, score 3203, 99 comments) `/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/` , high-engagement thread arguing the write-up should not outlast the meeting; the dissent in the comments is as useful as the tip.
4. (rank 9, r/LifeProTips, ~2.9 years old, score 4776, 245 comments) `/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/` , explicitly addressed to early-career professionals, which is this post's primary audience; 245 comments of practitioner argument about what to record and why. Old, so treat specific tool mentions as dated and the behavioural advice as durable.
5. (rank 0, r/ObsidianMD, 118 days old, score 4, 42 comments) `/r/ObsidianMD/comments/1tb6in5/how_do_you_turn_meeting_notes_into_something/` , low score but 42 real replies, and it is the post's thesis stated as a question: notes that are never reopened. Included for the "make them reusable afterwards" section despite the sub-5 score, because the discussion quality carries it.

## Skipped

- Every r/macapps / r/iosapps / r/PlaudNoteUsers / r/LovingOpenSourceAI result (ranks 12, 13, 18, 21, 23, 24) , AI-notetaker product launch/self-promo posts, not reader discussion.
- r/politics + r/NoShitSherlock "Musk cabinet meeting notes" (ranks 5, 19) , news story, keyword coincidence.
- r/exmormon, r/ypsi, r/jacksonville, r/NVDA_Stock (ranks 15, 17, 20, 22) , literal minutes of specific meetings, not the practice.
- r/PenmanshipPorn, r/adhdmeme, r/HandwritingAnalysis , handwriting-aesthetics posts, no method content.
- r/Fire (rank 6), r/LegalAdviceUK (rank 16) , workplace-incident stories that happen to involve notes.
- r/adhdwomen (rank 10), r/RemarkableTablet (rank 1), r/ObsidianMD ranks 2/3/4 , adjacent and interesting, but ranks 2 and 3 are 1.5–2.4 years old Obsidian-workflow threads whose value duplicates selection 5, and the tablet post is a product build log.
- r/TwoXChromosomes "Only woman in the office, only one who can take notes apparently" (surfaced by the `note taking in meetings` pull, score 4741, 535 comments) , a genuinely important angle (who gets assigned note-taking) and the strongest cut here; dropped only because the five above map more directly onto the how-to the post has to deliver. Worth revisiting if the draft needs a "rotate the notetaker" section.
