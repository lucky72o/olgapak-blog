# X selection: ai study tools

## Which tab was used, and why the capture was re-pulled

The bare target keyword on the **Top** tab (`?q=ai study tools&f=top`) returned
only **2 usable posts, both off-topic** — a SaaS-GEO marketing thread and an
"AI side hustle" engagement thread. Per `SKILL.md` Step 4.8.1, an off-topic Top
tab is re-pulled on **Latest** (`&f=live`): that returned 7, but the quality was
no better (a tablet ad, a non-English study post, a $20K→$100K MRR marketing
thread, an untargeted Gemini student-plan blurb).

Rather than proceed on a 2-post sample, the capture was widened with two
adjacent on-topic queries (both **Top**):

- `NotebookLM studying students&f=top`
- `"studying with AI" OR "AI tutor" students&f=top`

All three captures are preserved verbatim in `_x_search.json` under `captures[]`,
each with its own `query`, `tab` and `searchUrl`; the flattened, de-duplicated
`results[]` (17 posts) is the pool this selection draws from, and every row
carries `fromQuery` / `fromTab` so nothing about the provenance is lost.

## Honest quality caveat, weight this source LIGHTLY

X is a weak source for this keyword and the Stage 1c synthesis should treat it
accordingly. Almost everything on-topic falls into one of two genres:

1. **Engagement-farmed "workflow" threads** — "a MIT student figured out how
   to...", "I accidentally uncovered a NotebookLM workflow top Stanford students
   use". These reliably contain a real tool name and a real workflow, and just as
   reliably wrap it in an unverifiable third-party anecdote.
2. **Coordinated product promotion.** Ranks 14, 15 and 17 are three separate
   accounts posting near-identical praise for the same product (Gauth) at
   196 / 211 / 168 likes within the same window. That is a campaign, not opinion,
   and all three are skipped as self-promotion.

**Hard rule carried to Stage 1b/1c/3d:** every research-flavored claim on this
list ("a Harvard study", "a Stanford researcher", "lifted exam scores by a
third") is an X post making a claim, NOT a source. None may be cited. If any is
used, it must be traced to the primary study and confirmed there, or dropped.

Selected 5 (cap 5):

1. **(rank 13) @aresotik — 205 likes, 25 replies** — https://x.com/aresotik/status/2094526688575078705
   The clearest statement of what students actually want from AI when stuck on
   homework ("sometimes you just need a clear explanation to get moving"), with
   real engagement behind it. Frames the use case as unblocking, not answer-
   generation, which is exactly the line this post needs to hold.

2. **(rank 11) @aigleeson — 172 likes, 2 replies** — https://x.com/aigleeson/status/2032864380489277775
   The highest-engagement NotebookLM exam-prep workflow post in the set. Included
   for the WORKFLOW it describes, not the "top Stanford students" framing, which
   is unverifiable and must not survive into the draft. Corroborates the
   r/PromptEngineering NotebookLM thread from a different platform.

3. **(rank 9) @ihteshamali — 6 likes but 121 replies** — https://x.com/ihteshamali/status/2041576806810370553
   Selected on the reply criterion, not likes: 121 replies is by far the largest
   discussion in the pool, and the replies are where the disagreement lives. The
   post's own claim (compressing a semester into a 90-minute session) is the kind
   of overclaim this blog exists to push back on — useful as a foil.

4. **(rank 12) @the_futureAI — 100 likes, 12 replies** — https://x.com/the_futureAI/status/2094427977203499172
   Same tool as #2 but aimed at teachers and course builders rather than
   students. Kept for audience contrast: it shows which capabilities read as
   valuable to the person setting the work, which is a different list from the
   one students care about.

5. **(rank 6) @SwipeWright — 16 likes, 1 reply — DELIBERATE EXCEPTION** — https://x.com/SwipeWright/status/2095275889474830413
   This post fails the stated engagement floor (>50 likes OR meaningful replies)
   and is selected anyway, on the "mix of perspectives, not 5 takes that all
   agree" criterion. It is the ONLY skeptical take in the entire 17-post pool:
   pro-student-AI-use but against take-home assessment. Without it this selection
   would be five posts that all agree AI study tools are great, which would feed
   the writer a biased sample. Low engagement means it is weak evidence of what
   people BELIEVE; it is still a legitimate perspective to weigh against the
   Reddit r/Teachers thread.

Skipped:

- ranks 14, 15, 17 (@EleanorLouiise, @AItechscarlett, @liambraus) — the Gauth
  promotion cluster described above. High likes, zero independence.
- rank 10 (@aigleeson, "Stanford researcher... lifted exam scores by a third")
  and rank 16 (@andrew_allday, "a Harvard study... the AI group learned more") —
  both are research claims with no engagement (37/1 and 0/0) and no link to the
  study. Not selected; if the underlying findings matter, Stage 3d must reach the
  primary papers directly.
- rank 8 (@david_marco45, 31 replies) — a third NotebookLM post; #2 and #4 cover
  that tool from two angles already. First reserve.
- ranks 1, 2, 4, 5, 7 — a tablet ad, a non-English post, an MRR marketing thread,
  a one-line product congratulation, and an untargeted Gemini student-plan blurb.
- rank 3 (@KoredeSec, 26 likes) — promotes the author's own tool
  (cypher-ai.dev). Its opening line ("Most AI study tools just summarize
  documentation") is a sharp observation, but the post is self-promotion.

---

## Amendment made during deep fetch, selection #1 dropped

**@aresotik (rank 13) is REMOVED from the selection.** Its post page carries an
explicit **"Paid partnership"** disclosure and the body promotes `gauth.com/course`
— it is a fourth post in the same Gauth advertising campaign that ranks 14, 15
and 17 were already skipped for. The search-results capture did not expose the
disclosure (it is only rendered on the post page), so the campaign read as one
independent post plus three promos until this fetch. Its 205 likes are paid
distribution, not signal, and it is not deep-fetched.

That the single highest-engagement "genuine" post in the pool turned out to be
an ad is itself the finding: **on X, this keyword is close to fully monetized.**
It reinforces the caveat above — weight X lightly, and prefer Reddit for
voice-of-customer.

**Promoted from reserve in its place: (rank 8) @david_marco45 — 12 likes,
31 replies** — https://x.com/david_marco45/status/... (NotebookLM as a free
research assistant). It was first reserve; its 31 replies clear the
meaningful-discussion bar, and it carries no partnership disclosure.

Final deep-fetch set: ranks **11, 9, 12, 6, 8** (4 selected + 1 promoted
reserve). Note that X caps reply rendering aggressively for logged-in
non-participants; where `topReplies` comes back empty in a per-post JSON, that is
X withholding the thread, not a fetch failure, and the post body is still valid.
