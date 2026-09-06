# Facts: ai study tools

Curated by: blog-editor (Stage 1c synthesis).
Sources: `research/serp.md`, `research/reddit.md`, `research/x.md`, `blog-ops/profile/product.md`.
Read by: blog-editor during plan + outline creation; blog-writer (Stage 3a) during drafting.

**Purpose:** this is the ONLY pool of concrete data the writer is allowed to cite without additional verification. Every fact here has a source. Writer's rule: if a claim they want to make isn't in this file, it gets marked `[VERIFY: <claim> | source: <where you found it>]`.

**Standing rule for this post, read before using anything below.** Almost every number in the AI-study-tool market is a VENDOR SELF-REPORT with no independent backing. This file therefore separates three tiers, and the writer must respect the difference in the prose:

1. **✅ Verified / structurally checkable**, safe to state plainly.
2. **⚠️ Vendor self-report**, usable ONLY with explicit attribution ("StudyFetch's own site says…", "Turbo AI claims…"). Never state as fact, never round, never aggregate into "millions of students use these tools."
3. **❌ Rejected**, do not cite at all. Listed at the bottom so nobody re-discovers them and assumes they were missed.

---

## Statistics

### ⚠️ Vendor self-reported user counts (attribute explicitly, never state as fact)

These four numbers are the entire evidentiary basis of the top-4 ranking pages. None is independently verified, none links to a source, and no vendor page defines what "user" or "trusted by" means. Their VALUE to this post is collective, not individual: they demonstrate that the category's marketing runs on unverifiable scale claims.

- "Trusted by 3,000,000+ students", Studley AI, its own homepage, source: https://www.studley.ai/ (`_raw/01-studley-ai.json`), status: ⚠️ vendor self-report
- "8M+ Users worldwide" + "4.9 App store rating from 10k reviews", StudyFetch, its own homepage, source: https://www.studyfetch.com/ (`_raw/02-studyfetch-com.json`), status: ⚠️ vendor self-report
- "TRUSTED BY OVER 10 MILLION LEARNERS WORLDWIDE", Turbo AI, its own homepage, source: https://www.turbo.ai/ (`_raw/03-turbo-ai.json`), status: ⚠️ vendor self-report
- "Used by 5m+ students", Mindgrasp, its own homepage, source: https://www.mindgrasp.ai/ (`_raw/04-mindgrasp-ai.json`), status: ⚠️ vendor self-report

### ⚠️ Vendor's own internal study (the strongest-sounding number in the category, and the weakest)

- "92% of regular active users reported grade improvements / 85% of total users reported grade improvements / 30% reduction in average study time", StudyFetch, footnoted on its own homepage as "*Based on a study of 1,000 StudyFetch students during December 2024 finals", source: https://www.studyfetch.com/ (`_raw/02-studyfetch-com.json`), status: ⚠️ vendor's internal study of its own users, self-selected sample, self-reported outcomes, no control group, not peer-reviewed. If used, the footnote must be described, not just the percentage. Preferred use: as an example of how the category's evidence is built, not as evidence that the tools work.

### ⚠️ Needs primary-source verification before any use

- ✅ **CONFIRMED AT PRIMARY SOURCE (Stage 3d, 2026-09-06).** "more than half (57%) of U.S. college students are using artificial intelligence in their coursework at least weekly", including about one in five who use it daily. Gallup / Lumina Foundation, surveyed 2 to 31 October 2025, n=3,801 enrolled students, published 1 April 2026. Confirmed at: https://news.gallup.com/poll/704090/routine-college-students-despite-campus-limits.aspx (HTTP 200). **Note the URL correction:** the hub page the competitor cited (`gallup.com/analytics/644939/...`) does NOT carry the figure; the news release above does. Status: ✅ verified, safe to state and link.
- ✅ **CONFIRMED AT PRIMARY SOURCE (Stage 3d, 2026-09-06), with one Reddit error corrected.** Google's own plan comparison states the free plan ("Gemini Notebook Standard") allows **100 notebooks per user** and **50 sources per notebook**, with a ceiling of **500,000 words per source**. Confirmed at: https://support.google.com/notebooklm/answer/16213268 (notebooks/sources table) and https://support.google.com/notebooklm/answer/16269187 (the per-source word ceiling), both HTTP 200. **The Reddit comment that surfaced these was wrong on one point:** u/AdCold1610 gave 500,000 words *per notebook*; Google's docs say per *source*. The corrected figures are what shipped. Status: ✅ verified.
- ❌ **The ".edu students get the $19.99/month premium free" claim is NOT confirmed and was NOT used.** It came from the same Reddit comment and no Google-owned page checked at Stage 3d states it. Dropped rather than softened.
- ✅ **Product rename (Stage 3d, 2026-09-06).** Google's own help pages now call the product **Gemini Notebook**; `notebooklm.google.com` redirects to `notebook.google.com` and the app's page title reads "Gemini Notebook". Confirmed by direct browser navigation. Corroborates `research/serp.md`'s note that The Rundown AI lists it as "Gemini Notebook (formerly NotebookLM)". Status: ✅ verified. The post keeps the NotebookLM name (which is what readers search) and adds one clause about the rename.

---

## ✅ Verified / structurally checkable facts

These do not depend on a vendor's honesty. They were observed directly in the fetched pages or are structural properties of the SERP itself, and they are the factual spine of this post.

### The SERP's own shape (observed 2026-09-06, `_raw/_serp.json`)

- 6 of the 9 top Google results for "ai study tools" are tool vendor HOMEPAGES, not articles: Studley (1), StudyFetch (2), Turbo AI (3), Mindgrasp (4), Ask Maeve (8), Evernote (9). Source: `_raw/_serp.json`, status: ✅ verified by direct observation.
- Only 2 of the 9 are editorial roundups (RemNote at 5, The Rundown AI at 7) and 1 is a Reddit discussion (rank 6). Source: `_raw/_serp.json`, status: ✅ verified.
- Neither editorial roundup is independent: RemNote publishes the roundup AND ranks itself as the #1 pick in it, with no disclosure on the page; The Rundown AI promotes its own $29/month "AI University" membership via multiple CTAs on the same page. Source: `_raw/05-remnote-com.json`, `_raw/07-therundown-ai.json`, status: ✅ verified by direct observation.
- The two roundups barely agree with each other: RemNote names 7 tools, The Rundown names 10, and only NotebookLM and Khanmigo appear on both lists. Source: `_raw/05-remnote-com.json`, `_raw/07-therundown-ai.json`, status: ✅ verified.
- Neither roundup names ANY of the five vendor homepages that outrank them (Studley, StudyFetch, Turbo AI, Mindgrasp, Ask Maeve). Source: same, status: ✅ verified.
- Google surfaces no AI Overview and no featured snippet for this query, only a People Also Ask box. Source: `_raw/_serp.json`, status: ✅ verified.

### Free-tier transparency (the gap this post fills)

- Of the five vendor pages fetched, only TWO state what their free tier actually includes. Three (StudyFetch, Turbo AI, Mindgrasp) market "free" with no stated limit anywhere in the fetched page, and no reachable pricing page. Source: `_raw/01`–`04`, `_raw/09`, status: ✅ verified by direct observation (the `pricingUrl`/`pricingText` fields were empty for all three).
- **Studley AI** free plan is limited to ONE study set, stated in its own FAQ "to show you the value of Studley"; the Unlimited plan is listed at $3.74/week billed monthly or $1.88/week billed annually. Source: https://www.studley.ai/ (`_raw/01-studley-ai.json`), status: ✅ verified as the vendor's stated pricing on 2026-09-06. **Writer: prices change. Re-check at publish or use durable framing.**
- **Evernote** free plan: 50 notes, 1 notebook, 5 spaces, 20 tags, 200 attachments, sync to 1 device, 1GB storage; paid plans carry a 7-day free trial; a 40% student discount applies to an annual Advanced subscription. Source: https://evernote.com/compare-plans (`_raw/09-evernote-com.json`), status: ✅ verified as stated on 2026-09-06. **Same caveat: re-check or use durable framing.**

### Which tools are actually named where

- NotebookLM is named as a pick in BOTH editorial roundups, is the most-praised tool across 4 of the 5 Reddit threads analyzed, and recurs across the X sample, while appearing on ZERO of the five AI-study-startup vendor homepages. Source: `research/serp.md`, `research/reddit.md`, `research/x.md`, status: ✅ verified across the research set. (The Rundown AI lists it as "Gemini Notebook (formerly NotebookLM)"; treat the naming as in flux and describe rather than assert.)
- Khanmigo (Khan Academy) is the only other tool named in both roundups, positioned in both as a Socratic tutor that asks guiding questions instead of supplying answers. Source: `_raw/05-remnote-com.json`, `_raw/07-therundown-ai.json`, status: ✅ verified.
- Tools named across the research set, with their positioning: RemNote (flashcards + spaced repetition), Notion AI (organization), Otter.ai (lecture transcription), Wolfram Alpha (STEM computation), Napkin.ai (text-to-diagram), ChatGPT Study Mode (guided conversation), Perplexity (research with citations), Claude, Gemini, Shepherd, Unriddle, Gauth, plus the SERP-ranking five. Source: `research/serp.md` §Competitor product mentions, status: ✅ verified as "named in the research", NOT as endorsements.

### People Also Ask (verbatim, drives the FAQ block)

- "What is the best AI tool for studying?"
- "What is the best AI tool to learn?"
- "Is ChatGPT good for studying?"
- "Are there any free AI study apps?"

Source: Google SERP for "ai study tools", captured 2026-09-06, `_raw/_serp_selection.md`, status: ✅ verified by direct observation.

---

## Quotes

### From students (Reddit, voice-of-customer, quotable as opinion not fact)

- "Most students aren't using one AI tool, it's a mix, ChatGPT for concepts, Notion AI for notes, Grammarly for writing. Real issue is everything's scattered." u/studyToolkit, r/studytips, source: https://www.reddit.com/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/
- "NotebookLM, don't upload a whole unit (trash in, trash out). One chapter per file to get maximum details." u/eveno7o, r/studytips, source: https://www.reddit.com/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/
- "I mostly use AI for breaking down readings because some professors write in the most confusing way possible... then rewrite everything in my own words after." u/Im-Spartaque, r/AIToolsAndTips, source: https://www.reddit.com/r/AIToolsAndTips/comments/1sronyp/what_free_ai_tools_are_you_actually_using_for/
- "I've always studied best through questions, not by reading PowerPoint slides or copying notes... you can upload your lecture slides to Gemini and ask it to generate questions based on them, and... wow." u/Any-Cap-7752, r/studytips, source: https://www.reddit.com/r/studytips/comments/1ps962f/whats_your_best_free_ai_tool_to_make_studying/
- "it functions as an excellent retrieval model, but it suckssss in the reasoning dept." u/dantheadmin on NotebookLM, r/PromptEngineering, source: https://www.reddit.com/r/PromptEngineering/comments/1rvhlf3/googles_notebooklm_is_still_the_most_slepton_free/, **the honest limit on the post's most-recommended tool; the post should carry it, lightly cleaned of the typo.**
- "everyone has been burned by Google at this point. They put products out and then eol them, constantly." u/luvv2ride, r/PromptEngineering, source: same thread, a real reason a reader might skip an otherwise-good free tool.

### From educators (the counterweight)

- "it kills the ability to problem solve and be creative... anything not on paper that's proctored in a classroom cannot be given the same weight in calculating grades." u/Adventurekitty74, r/Teachers, source: https://www.reddit.com/r/Teachers/comments/1rwqaul/anyone_else_worried_about_cognitive_debt_new_mit/
- "I saw this before AI was a thing. As soon as 1 to 1 Chromebooks came in, they Googled everything... Even with AI, they don't use it as a tool or 'thought partner' it's just fancy Google." u/Separate_District264, r/Teachers, source: same thread, the nuanced version, worth more than the alarmed version.
- "I'm all for students using AI for studying. I just wouldn't have any take-home tests or writing assignments. All testing and writing would be done in-class, on computers that do not have internet access." Colin Wright (@SwipeWright), source: https://x.com/SwipeWright/status/2095275889474830413

### The overclaim to push back on

- "Who needs to pay for an overpriced tutor when you can get the same results with Studley AI for basically nothing... Studley AI is a lot more engaging and effective than a human tutor." Studley AI's own FAQ, source: https://www.studley.ai/ (`_raw/01-studley-ai.json`). **Quote it as an example of category overclaim, never endorse it.**

### Usable technique, stripped of its unverifiable wrapper

- Ask a synthesis question, not "summarize": "What are the 5 core concepts this week's content is built on, and how do they connect to what I studied last week?" source: https://x.com/ihteshamali/status/2041576806810370553
- Ask a teach-it-back question: "What would I need to genuinely understand about this material to be able to teach it to someone with zero background in this subject?" source: https://x.com/aigleeson/status/2032864380489277775

**Writer note on both:** use the PROMPTS, which are self-evidently reusable. Do NOT repeat the "an MIT student", "top Stanford students", or "compress a semester into 90 minutes" framing wrapped around them. Those are unverifiable anecdotes from engagement-driven accounts (`research/x.md`).

---

## Named examples

- **The three-way disagreement.** The two page-1 roundups and the live SERP name almost entirely different tools: RemNote's 7, The Rundown's 10, overlapping only on NotebookLM and Khanmigo, and neither list includes any of the five vendors that outrank them. Source: `research/serp.md`, status: ✅ verified. This is the post's single most useful concrete example of why the category is confusing to a student.
- **Every AI-study startup ships the same four features.** Flashcards, quizzes, an AI tutor, and notes appear on all five vendor pages fetched; the differentiation is packaging, not capability. Source: `research/serp.md` §Avoid pitfalls, status: ✅ verified by direct observation.
- **Mindgrasp names the learning science explicitly** (Active Recall → flashcards, Practice Testing → quizzes, Spaced Repetition → notes, Self-Explanation → AI tutor), the clearest such framing among the vendor pages. Source: https://www.mindgrasp.ai/ (`_raw/04-mindgrasp-ai.json`), status: ✅ verified as the vendor's own framing. Useful because the underlying techniques are real and long-predate AI.
- **Studley runs a paid creator/affiliate program** (its FAQ answers "Can I make money promoting Studley AI?"). Source: https://www.studley.ai/ (`_raw/01-studley-ai.json`), status: ✅ verified. Context for why glowing coverage of a tool is not evidence about the tool.
- **The Gauth promotion cluster.** Four X posts promoting the same tool in the same window, one carrying an explicit "Paid partnership" disclosure, at 168–211 likes each. Source: `research/x.md`, `_raw/_x_selection.md`, status: ✅ verified by direct observation. A concrete illustration for the "how to judge a recommendation" angle.

---

## Product facts

### Feature facts

- Text Simplifier: rewrites dense or complex text into plain, easy-to-read language. Source: `blog-ops/profile/product.md` §Features.
- Text Summarizer: condenses long text into a short, scannable summary. Source: `blog-ops/profile/product.md` §Features.
- Acronym Explainer: expands and explains unfamiliar acronyms in context. Source: `blog-ops/profile/product.md` §Features.
- Email Generator: drafts an email from a short prompt. Source: `blog-ops/profile/product.md` §Features.
- The tools are free with no signup friction, each single-purpose rather than an all-in-one, built and personally used by Olga on OpenAI. Source: `blog-ops/profile/product.md` §Differentiators.
- There is NO pricing page and the tools are free. Source: `blog-ops/profile/product.md` §Pricing page. **The post must not state any price for them** (`blog-craft.md` §Own-product pricing claims).

### First-party data claims

- Tool usage / adoption numbers, availability: **hypothetical**, context: no usage analytics are citable yet. **Not usable.** Any first-person framing must be experiential ("I built these because…"), never numeric.

---

## Rejected / not verifiable

Listed so nobody re-discovers them later and assumes they were overlooked. The writer does NOT cite these.

- ❌ **"Your Brain on ChatGPT" / the MIT cognitive-debt EEG finding.** Referenced only inside a Reddit post (r/Teachers, 941 score, 292 comments); the study itself was never fetched or verified in this research pass. Reason rejected: a Reddit thread describing a study is not a source for that study's findings. **If ever verified at an MIT-owned `.edu` primary source, promote to Statistics**, it would be the single strongest fact in the "when AI is the wrong tool" section. Until then the post may say educators are debating cognitive cost, citing the discussion as a discussion, and must not state any EEG or brain-activity finding.
- ❌ "A Harvard study put students with a well-designed AI tutor against an active-learning classroom, the AI group learned more." X post @andrew_allday, 0 likes, no link to the study. Reason rejected: unlinked, unverifiable, from a zero-engagement post.
- ❌ "A Stanford researcher ran a 15-minute experiment that lifted students' exam scores by a third." X post @aigleeson. Reason rejected: same, unlinked and unverifiable.
- ❌ "An MIT student compresses an entire semester into one 90-minute study session." X post @ihteshamali. Reason rejected: unverifiable third-party anecdote from an engagement-driven account. The PROMPTS in that post are usable (see Quotes); the outcome claim is not.
- ❌ Any "trusted by N million" figure used WITHOUT attribution. Reason rejected: see the vendor self-report tier above. Attributed use is fine; bare use is not.
- ❌ Pricing for StudyFetch, Turbo AI, and Mindgrasp. Reason rejected: not present anywhere in the fetched pages and no pricing page resolved. The brief forbids inventing pricing. Either the writer omits price for these three, or marks `[VERIFY:]` with an honest source clause.
- ❌ Small tools surfaced only in Reddit comments (thea.study, knowbit.org, okti, MemoNow, instaboard, digestly.co, prismcanvas.app, cypher-ai.dev). Reason rejected: these read as creator self-promotion, one commenter admitted it outright, and none has independent evidence. Do not recommend.
- ❌ Any engagement figure for the X posts. Reason rejected: `research/x.md` flags an unexplained gap between the search-listing numbers and the post-page numbers; neither can be confirmed. Nothing in this post depends on them.

---

## Verification key

- ✅ Verified (observed directly in a fetched page, or a structural property of the captured SERP)
- ⚠️ Needs verification / vendor self-report (single-source or self-interested; attribute explicitly or confirm at a primary source before use)
- ❌ Rejected (couldn't verify; do not cite)
