# Reddit selection: ai note taking

Transport: **chrome** (`research.reddit_transport: chrome`, namespace `open-claude-in-chrome`
resolved at preflight). Logged-in browser fetch of Reddit's `.json` endpoints, PRIMARY path — no
curl fallback needed. Search returned HTTP 200, 25 results.

Reddit's relevance ranking on this short query is very fuzzy: 25 results, of which roughly 15 are
noise (r/Futurology on AI job loss, r/Stellaris game AI, app-giveaway spam, "take notes" used as an
idiom). Skipping liberally is correct here. Selected 5 of the ~9 genuinely on-topic threads.

Selected:

1. (rank 00) `/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/` ,
   "Therapists using AI note-taking tools: please actually read the terms you're agreeing to."
   585 score, 265 comments. The single richest thread on the PRIVACY / consent / terms-of-service
   failure mode the brief explicitly wants covered — a profession that legally has to care, arguing
   it out in detail. Expect concrete, quotable objections.
2. (rank 01) `/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/` ,
   "Is it still bad to use AI for note taking in college?" 4 score but 50 comments. Directly the
   question this post's primary (student) audience is asking, argued from both sides. Low score,
   high comment count = a real debate, which is what we want; the `score ≥ 5` heuristic is waived
   here because on-topic-ness for the target audience matters more.
3. (rank 03) `/r/NoteTaking/comments/1u96pgc/what_ai_meeting_note_tools_are_actually_worth/` ,
   "What AI meeting note tools are actually worth paying for?" 6 score, 56 comments, and from the
   note-taking subreddit itself. The tool-evaluation thread: which tools people kept paying for and
   which they dropped.
4. (rank 06) `/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/` ,
   "Best AI note taking devices for meetings?" 17 score, 27 comments. Covers the hardware-recorder
   corner of the category (Plaud et al., which ranks 4 on the SERP), so the post can address it
   honestly instead of pretending the category is software-only.
5. (rank 09) `/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/` ,
   "LPT: If you spend more time writing up your meeting notes than the meeting itself, stop taking
   notes during the meeting." 3,209 score, 99 comments. The highest-engagement on-topic thread and
   a direct argument about the record-then-summarize workflow this post recommends — including the
   pushback, which is the honest counterweight.

Skipped (on-topic but not selected, kept here in case a later stage wants them):
- rank 02 `/r/antiai/` "Is it ok to use ai to help take notes?" (0 score, 21 comments) , useful
  skeptic counterpoint, but r/therapists and r/askanything already carry the critical side.
- rank 07 `/r/ProductivityApps/` "looking for an ai note taker as im going into college" (3 score,
  15 comments) , same student angle as rank 01 but thinner.
- rank 16 `/r/melbourne/` psychiatrist-refuses-patients-without-AI-consent (429 score) , news story,
  consent angle already covered by rank 00.
- rank 19 `/r/PhD/` students using AI to write everything , about AI writing, not note-taking.

Skipped as off-topic noise: r/Futurology (AI job loss), r/Stellaris (game AI), r/CRM x2 (sales
automation), r/AppGiveaway + r/WebSoftGiveaway (app-giveaway promos), r/MormonWivesHulu, r/aiwars,
r/ProtectHire, r/IndiaPulse_, r/jobsearchhack, r/kemono_piracy, r/interviews, r/medicine (Epic EHR),
r/littlebird (founder self-promo).
