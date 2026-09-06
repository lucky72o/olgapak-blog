# Reddit selection: ai study tools

Transport: `chrome` (config `research.reddit_transport`), resolved namespace
`open-claude-in-chrome`. Search fetched same-origin from reddit.com after the JS
challenge; HTTP 200, 154KB, 25 results.

Reddit's relevance ranking on this query is very fuzzy, as expected. Roughly half
the top 25 match "AI" + "study" in the **research-paper** sense ("a new study
finds AI...", ranks 9–19) rather than the **studying** sense. Those are all
skipped, however high their score — a 1,385-point r/science thread about who uses
AI is not about study tools. Skipping liberally here is the correct behavior, not
a thin result.

Selected 5 (cap 5):

1. **(SERP rank 6, carried over) `/r/studytips/comments/1ps962f/whats_your_best_free_ai_tool_to_make_studying/`**
   — "What's your best free AI tool to make studying easier?" Mandatory pick,
   routed here from `_serp_selection.md` because it ranks on page 1 of Google for
   the target keyword itself. A discussion thread that Google promotes into a
   vendor-dominated commercial SERP is the strongest available signal of what
   real searchers want, and it is the only page-1 result with any incentive to
   name a tool as bad. Fetched as native `.json` rather than DOM-scraped.

2. **(rank 0) `/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/`**
   — "Best AI tools college students are actually using to study?" (2026-03-29,
   score 20, 82 comments). The single best voice-of-customer thread in the set:
   82 comments of students naming what they actually use, in the exact
   "actually using" framing the post's angle needs. High comment-to-score ratio
   means genuine discussion rather than a popularity pile-on.

3. **(rank 3) `/r/AIToolsAndTips/comments/1sronyp/what_free_ai_tools_are_you_actually_using_for/`**
   — "What free AI tools are you actually using for study or assignments?"
   (2026-04-21, score 26, 47 comments). Same question from the AI-tools side of
   the room rather than the study-skills side, so it cross-checks thread 2 with a
   different, more tool-literate crowd. The FREE constraint matters: the PAA box
   asks "Are there any free AI study apps?", and this thread is 47 comments of
   the answer.

4. **(rank 20) `/r/PromptEngineering/comments/1rvhlf3/googles_notebooklm_is_still_the_most_slepton_free/`**
   — "Google's NotebookLM is still the most slept-on free AI tool in 2026 and i
   don't get why" (2026-03-16, score 476, 88 comments). Chosen for a specific
   gap: NotebookLM appears in NONE of the vendor homepages on the SERP (they will
   not promote a free Google product that competes with them), yet it is a
   serious study tool. A 476-point thread arguing it is underrated, plus 88
   comments of pushback, is exactly the outside-the-SERP input a non-filler
   roundup needs.

5. **(rank 11) `/r/Teachers/comments/1rwqaul/anyone_else_worried_about_cognitive_debt_new_mit/`**
   — "Anyone else worried about 'Cognitive Debt'? (New MIT study on AI in the
   classroom)" (2026-03-18, score 948, 292 comments). The deliberate
   counterweight, and a different perspective by design (educators, not
   students). The post's stated differentiation is covering **when AI is the
   wrong tool for studying** — nobody on page 1 of the SERP will write that, and
   this is 292 comments of people who watch the consequences daily. NOTE for
   Stage 1b/3d: the thread references an MIT study; the CLAIM must be traced to
   the primary source before any number from it is cited. Reddit is voice-of-
   customer evidence, never a citable source for a research finding.

Skipped (with reasons):

- ranks 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24 — "study" in the
  research-paper sense, or about AI in hiring / coding / game dev. Off-topic
  regardless of score.
- rank 5 (r/SideProject, 14-year-old's essay-provenance tool) and rank 21
  (r/InternalAudit, CIA exam prep) — real but far too narrow a niche.
- rank 4 (r/UGCcreators) — a creator looking for paid UGC work for an AI study
  tool, i.e. marketing, not usage.
- rank 22 (r/PromptEngineering, "i tested 47 AI tools in 90 days") — genuinely
  interesting but general-purpose, not study-specific; thread 4 covers this
  subreddit's perspective already.
- ranks 1, 2, 7 (r/AIAssisted, r/studytips ×2) — on-topic but thinner
  (score 2–10, 26–38 comments) and substantially duplicative of threads 1–3.
  These are the first reserves if a selected thread fails to fetch.
- rank 6, 8 (r/medicalschool) — med-school-specific study culture; the audience
  for this post is general students, not a professional program.
