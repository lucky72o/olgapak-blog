# Facts: ai note taking

Curated by: blog-editor (synthesis stage, Stage 1c).
Sources: research/serp.md + research/reddit.md + research/x.md + blog-ops/profile/product.md +
this blog's own already-published, already-sourced posts (`content/blog/*.md`).
Read by: blog-editor during plan creation; blog-writer (Phase 3) during drafting.

**Purpose:** this is the ONLY pool of concrete data the writer is allowed to cite without additional
verification. Every fact here has a source. Writer's rule: if a claim they want to make isn't in this
file, it gets marked `[VERIFY: <claim> | source: <where you found it>]` for resolution.

**Link-safety note for the writer:** none of the URLs in this file appear in `research/serp.md`'s
top-10 for "ai note taking", and all are allowlist-class (`.gov`, `.edu`, academic publishers,
official platform docs). They are safe to link. The top-10 SERP URLs themselves (zoom.com,
metaview.ai, pcmag.com, medium.com, microsoft.com, plaud.ai, notta.ai, notegpt.io, otter.ai) are
**forbidden as link targets** even where a fact below is attributed to them — attribute in prose
without linking, or use the primary source instead.

## Statistics

- Laptop note-takers recorded more of the lecture word for word and did worse on conceptual
  questions than longhand note-takers, Mueller & Oppenheimer's original lecture-note study, source:
  https://journals.sagepub.com/doi/full/10.1177/0956797614524581, status: verified
  (already cited in this blog's published `digital-vs-paper-notes` post)
- When the study was re-run in 2019, some trends suggested longhand superiority, but performance did
  not consistently differ between any of the groups, including a group that took no notes at all;
  the meta-analysis of direct replications found small effects favoring longhand that were not
  statistically significant, source: https://link.springer.com/article/10.1007/s10648-019-09468-2,
  status: verified (already cited in `digital-vs-paper-notes`)
- One person's self-reported result from switching to record-then-summarize: post-meeting admin work
  went from 45 minutes to 10 minutes per call, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/,
  status: needs_verification (single self-reported anecdote — cite as one person's experience, with
  attribution, never as a general figure)
- The most-upvoted reply on that same thread (970 upvotes, more than any other comment) argues the
  tip is job-dependent: in some jobs the real work happens during the meeting, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/,
  status: verified (engagement counts are directly observable in the raw thread JSON)
- Across five commercial automated speech recognition systems (Amazon, Apple, Google, IBM,
  Microsoft), the average word error rate was 0.35 for black speakers compared with 0.19 for white
  speakers, over 19.8 hours of matched interview audio from 42 white and 73 black speakers, source:
  https://www.pnas.org/doi/10.1073/pnas.1915768117 (Koenecke et al., "Racial disparities in
  automated speech recognition", PNAS, 2020), status: verified at Stage 3d by loading the paper's
  own abstract in the browser. **Scope limit: this measures ONE specific gap, not accents in
  general.** Cite it as evidence that whose voice it is changes the result; do NOT present it as a
  general accuracy figure or as a number for any particular room.
- "State laws vary on permitting the recording of telephone conversations and the requirements to
  obtain consent of the recorded party", Federal Trade Commission, source:
  https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule, status:
  verified at Stage 3d (exact sentence confirmed on the live page). Scope limit: the FTC states this
  in telemarketing guidance about telephone recordings; it supports "US state rules vary" and
  nothing broader. The post gives no legal advice.

## Quotes

- "Accuracy drops with accents, crosstalk, and industry jargon. Run the trial on a real meeting
  recording, not the vendor's demo.", Microsoft 365, source:
  https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/ai-summarizer-note-taking-tools
  **DO NOT LINK — top-10 SERP URL.** Paraphrase the point in the writer's own words instead.
- "Recording rules differ by state and country, and some require everyone on the call to agree.",
  Microsoft 365, source: (same URL as above) **DO NOT LINK — top-10 SERP URL.**
- "AI summaries on long lectures are hit-or-miss. Sometimes the tool emphasizes the wrong thing or
  skips a section that turned out to be important. I learned pretty fast that the summary is a
  starting point, not a replacement for sitting with the material.", a student who tested 30+ AI
  note-taking tools over three months, source: the Medium article at SERP rank 7
  **DO NOT LINK — top-10 SERP URL.** Attribute in prose as "one student who tested more than thirty
  of these tools" without a link.
- "Record the lecture and go back and take the notes yourself when you can pause to write or rewind
  if you miss something. You'll learn a million percent more.", u/ShaylaDee, r/askanything, source:
  https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- "Taking notes helps because you're actively listening to the lecture and the act of transcribing
  what you hear into words on your own paper helps you retain that info better.", u/SmashinHunter,
  r/askanything, source:
  https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- "A lot of learning happens during the note taking process. If you farm out that process, you're
  missing out.", u/blakebonkofsky, r/askanything, source: (same thread as above)
- "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they
  often disable the tools.", u/OozeNAahz, r/LifeProTips, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "This is completely dependent on the job. In my job, most of the 'real' work happens during the
  meeting because if you don't pay attention and engage in the conversation you're going to have a
  bad time after.", u/Cheap_Appearance5095 (the thread's top comment, 970 upvotes), r/LifeProTips,
  source: (same thread as above)
- "I still review it before using the notes, but it's a lot better than trying to remember a long
  call from scratch at the end of the day.", u/Affectionate-Good168 on four months with a wearable
  AI recorder, r/AI_Agents, source:
  https://www.reddit.com/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/
- "The worst part is patients not being told what is happening to their data.", u/asdfgghk (212
  upvotes), r/therapists, source:
  https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/
- "probably another one of those vibe coded AI note-taking apps. I've seen at least a dozen of these
  on my tl today and they're all the same.", @wojakcodes, source:
  https://x.com/wojakcodes/status/1968572197296877869
- "the voice part is doing more work than it looks. people say things out loud they'd never type.
  writing makes you edit yourself.", @franciski replying to @rowancheung, source:
  https://x.com/rowancheung/status/2095538308436914307
- "please keep in mind not to assume all of the information described above is factual", the
  University of Wisconsin GUTS page, disclaiming its own list of handwriting benefits, source:
  https://guts.wisc.edu/2020/11/19/pros-and-cons-of-typed-digitally-handwritten-and-paper-notes/,
  (already cited in this blog's `digital-vs-paper-notes` post)

## Named examples

- **The five-step model most AI note-takers follow** — capture, transcribe, structure, summarize,
  sync — with a failure mode at each step (a tool that stops at step four leaves the filing to you),
  context: the cleanest plain-language skeleton for a "how it works" section; the writer should
  restate it in Olga's own words and adapt it into the post's own workflow, source: Microsoft 365's
  explainer at SERP rank 9. **DO NOT LINK — top-10 SERP URL.**
- **Extractive vs. abstractive summarization** — extractive picks out the sentences that already
  carry the most meaning; abstractive writes new ones that say the same thing in fewer words,
  context: the jargon translation `audience.md` requires when the post explains why AI summaries
  sometimes reword a point into something the speaker never said, source: (same as above)
  **DO NOT LINK.**
- **The multi-vendor data pipeline** — the app a person interacts with is often only the interface;
  session audio commonly goes to a separate transcription vendor and the transcript then to a
  general AI provider, so one recording can touch three or four companies, context: the concrete
  mechanism behind the privacy section; described by a therapist who read the terms of several
  clinical AI scribe tools, source:
  https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/,
  status: needs_verification as a general claim (verified as what that thread reports; the writer
  must frame it as "commonly" / "often", never as a fact about a specific named tool)
- **The marketing-versus-policy gap** — a platform's site said "Your data is yours" and "Your data is
  never used to train AI" while its actual privacy policy allowed creating de-identified data
  derived from information processed through the service, context: why "read the actual privacy
  policy, not the landing page" is concrete advice rather than a platitude; the tool is deliberately
  unnamed in that thread and must stay unnamed here, source: (same thread as above)
- **Gemini Notebook (Google), formerly NotebookLM** — Google's own help page says it "is designed to
  answer questions based on the information provided in your uploaded sources" and offers "clear
  in-line citations", context: the credible free-tier option for a student who will not pay a monthly
  subscription; it is source-grounded Q&A and summarization, NOT a live meeting recorder, source:
  https://support.google.com/gemininotebook/answer/16164461, status: verified at Stage 3d.
  **Two corrections made at Stage 3d:** (1) the product has been RENAMED — `support.google.com/notebooklm`
  now redirects to `support.google.com/gemininotebook`, so the post names it "Gemini Notebook, which
  Google used to call NotebookLM"; (2) the earlier "100% free" framing (which came from a tweet, not
  from Google) is NOT supported — the help centre has both "Manage your Gemini Notebook usage limits"
  and "Learn about Upgrading Gemini Notebook" topics, so the post says "a free tier with usage limits
  and a paid upgrade above it" and prints no price.
- **The record-then-structure-in-ten-minutes habit** — record the call, then immediately spend ten
  minutes writing down (1) the one decision that was actually made, (2) who is doing what by when,
  and (3) the follow-up message, while it is still fresh, context: a concrete, adaptable version of
  the review step, from the highest-engagement on-topic thread found in research, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- **The Cornell note-taking system's official layout and cue-and-recite loop**, context: the
  retrieval-practice habit AI output should feed into rather than replace, source:
  https://lsc.cornell.edu/notes.html (and the official layout PDF at
  https://lsc.cornell.edu/wp-content/uploads/2015/10/Cornell-Note_Taking-System.pdf), status:
  verified (already cited in this blog's `cornell-note-taking-method` post)

## Product facts

### Feature facts
- Olga's free AI tools include a **Text Summarizer** (condenses long text into a short, scannable
  summary) and a **Text Simplifier** (rewrites dense text into plain language), source:
  blog-ops/profile/product.md
- The tools are free with no signup friction, and each does one job rather than being an
  all-in-one suite, source: blog-ops/profile/product.md
- CTA target: Olga's free AI tools page, https://olgapak.com/ai-tools, hook: "Try my free AI tools to
  automate the mundane", source: blog-ops/profile/blog.md §Primary CTA

### First-party data claims
- Tool usage / adoption numbers, availability: `hypothetical`, context: no usage analytics are
  citable yet. **The writer must not cite any usage, adoption, or performance figure for Olga's
  tools.**

**Writer note:** never state a price for Olga's tools. They are free and there is no pricing page
(`product.md` §Pricing page). "Free" is fine; any number is not.

## Rejected / not verifiable

Claims that surfaced during research but are NOT citable as written. The writer does NOT state these
as fact. Stage 3d resolves or deletes anything the draft still needs.

- ~~Any specific transcription-accuracy percentage or word-error-rate figure.~~ **RESOLVED at
  Stage 3d.** The PNAS study was loaded in the browser and its abstract confirmed verbatim, so the
  0.35-vs-0.19 word-error-rate figure is now a verified entry in §Statistics above and is cited in
  the draft. What remains rejected is any accuracy figure for accents, crosstalk or jargon
  *generally* — the study does not measure those, and the draft names that limit in the prose.
- "Handwriting improves memory" as a flat claim. Reason rejected: this blog has already published
  the honest version in `digital-vs-paper-notes` — the 2019 replications found small, not
  statistically significant effects, and even the University of Wisconsin page listing handwriting
  benefits disclaims its own list. **This post must stay consistent with that.** The defensible
  claim is about the mechanism: what you do while taking notes (paraphrasing, deciding what matters)
  is what does the work, not the pen. Say that; do not say handwriting beats typing.
- tl;dv's "$18/seat/month annually" and its free-tier limits. Reason rejected: self-reported by a
  third-party article, not read from the vendor's own pricing page, and SaaS pricing goes stale
  fast. Do not print a price for any third-party tool in this post.
- Metaview's "50% recruiter time saved" case study. Reason rejected: vendor-reported, B2B recruiting
  context, irrelevant to this audience.
- Any claim that a specific named tool is "the most accurate". Reason rejected: the only support is
  one Reddit commenter's opinion about Otter.ai Pro. Attribute opinions as opinions.
- US/state recording-consent law specifics (one-party versus all-party consent). **PARTLY RESOLVED
  at Stage 3d:** the FTC's own sentence that state laws vary on permitting the recording of telephone
  conversations and on consent requirements is now verified in §Statistics above and cited in the
  draft. Still rejected: naming which states require all-party consent, quoting any statute, or
  anything that reads as legal advice. The draft says the rules differ and that this is not something
  to guess at, and stops there.

## Verification key

- ✅ Verified (independent or already-published-and-sourced by this blog)
- ⚠️ Needs verification (single source; attribute in prose, do not state as general fact)
- ❌ Rejected (do not cite; see the section above)
