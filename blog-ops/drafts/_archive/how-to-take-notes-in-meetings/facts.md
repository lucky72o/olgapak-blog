# Facts: how to take notes in meetings

Curated by: blog-editor (synthesis stage).
Sources: research/serp.md + research/reddit.md + research/x.md + blog-ops/profile/product.md.
Read by: blog-editor during plan creation; blog-writer (Phase 3) during drafting.

**Purpose:** this is the ONLY pool of concrete data the writer is allowed to cite without additional verification. Every fact here has a source. Writer's rule: if a claim they want to make isn't in this file, it gets marked `[VERIFY: <claim> | source: <where you found it>]` for the editor to resolve at Stage 3d.

## Statistics

Verified numeric claims. Each line: value + claim + source URL.

- 45 minutes → 10 minutes, one practitioner's self-reported post-meeting admin time after switching from during-meeting transcription to a short structured pass immediately after the call ("That is 35 minutes per call"), source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/, status: verified (as a first-person account; cite as one person's experience, NOT as a study or a general average)
- ~1 hour of write-up per 1 hour of meeting, a project manager's self-reported time for an AI-assisted meeting-notes workflow (record → AI summary → compare against own notes → verify against recording → simplify → correct → send), source: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/, status: verified (first-person account, cite as such)
- 3,201 upvotes / 99 comments on the "stop taking notes during the call, do the real work in the first 10 minutes after" tip; 4,776 upvotes / 245 comments on the "learn to take good meeting notes early in your career" tip, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/ and https://www.reddit.com/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/, status: verified (engagement counts as of 2026-09-08; only use if the post needs to show a claim is widely held, and date the observation)
- 208 replies to "Why has nobody solved for in-person meeting note-taking?", with the author repeatedly reporting that phone-mic AI capture "doesn't work well with group meetings", source: https://x.com/kabirnagral/status/2094652022914203656, status: verified (engagement count as of 2026-09-08)

### Handwriting vs. typing (claims that need a PRIMARY link, not the competitor's page)

Every row below was found INSIDE a top-10 SERP competitor article, so the competitor URL is **forbidden as a link** (blog-craft.md §Forbidden external links). The primary/allowlist URL in each row is what the writer links instead. The writer must not overstate these: they are about handwriting and memory generally, largely from student/lecture research, not about business meetings specifically.

**Stage 3d verification (2026-09-08):** all four URLs below were loaded and their content checked against the exact anchor wording used in the draft. All four now read `verified`. Two notes from that pass:
- The SAGE study returns HTTP 403 to `curl` (Cloudflare bot check) but loads normally in a real browser; the page is healthy and the abstract is public. Do not re-flag it as dead on the strength of a curl status.
- The BBC piece supports "summarizing, paraphrasing, organizing", not "prioritizing". The draft's anchor was changed to match what the source actually says.

- Writing notes by hand is associated with better memory recall and conceptual understanding than typing, link this claim to: https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/ (auth_allowlist; surfaced via a Slack article, which must NOT be linked), status: verified 2026-09-08 (HTTP 200; the article concludes that pen and paper is "still the best way to learn", and every study it cites is students, lectures or preschool letter learning, with no business-meeting evidence at all, which is exactly why the post scopes the claim instead of applying it to meetings)
- Handwriting is associated with better memorization, word recognition and conceptual understanding, and with more accurate note-taking than typing on mobile devices, link this claim to: https://www.frontiersin.org/articles/10.3389/fnbeh.2021.634158/full (primary_source, peer-reviewed) or the lighter https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand (auth_allowlist); surfaced via a Teamwork.com article, which must NOT be linked, status: verified 2026-09-08 (HTTP 200 on the BBC page, which says handwriting "involves cognitive engagement in summarising, paraphrasing, organising, concept and vocabulary mapping"; it does NOT say "prioritising", so the draft anchor was reworded to match)
- Taking notes by hand is better for long-term retention of conceptual information than laptop note-taking (Mueller & Oppenheimer, "The Pen Is Mightier Than the Keyboard"), link this claim to: https://journals.sagepub.com/doi/abs/10.1177/0956797614524581 (primary_source, peer-reviewed, SAGE); surfaced via an Asana article, which must NOT be linked, status: verified 2026-09-08 (403 to curl via Cloudflare, loads fine in a browser; abstract reads "students who took notes on laptops performed worse on conceptual questions than students who took notes longhand" and attributes it to laptop users transcribing verbatim rather than reframing, which independently supports this post's whole thesis)
- The act of writing by hand pulls you into summarizing and paraphrasing as you go, so handwritten notes arrive already condensed, link this claim to: https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand (auth_allowlist); surfaced via a Teamwork.com article, which must NOT be linked, status: verified 2026-09-08 (see the note above; wording narrowed from "prioritizing" to match the source)

## Quotes

Verbatim statements from reputable sources. Reddit and X quotes are attributed to a handle and framed as one person's experience, never as expert authority.

- "Are you minuting the conversation or the decision? Discovering that I should only be recording the decision was a huge lightbulb moment for me.", u/c3rbutt on r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
- "I don't try to capture and circulate 'meeting notes.' I capture actions, ownership and key decisions.", u/Ezl on r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
- "By the time I'm able to record what was said from one topic, they've already moved onto the next topic and I've missed half of what was said.", u/Tronracer on r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
- "Ima let you in on a secret… nobody reads the notes anyways.", u/TylertheDouche on r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
- "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting because if you don't pay attention and engage in the conversation you're going to have a bad time after.", u/Cheap_Appearance5095 on r/LifeProTips (the top comment, 973 upvotes, disagreeing with the record-instead tip), source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they often disable the tools.", u/OozeNAahz on r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "I've heard that if you're a minority, a young person, or a woman, then don't take notes. Because then you'll always be just the note taker, and nobody will actually listen to anything you have to contribute.", u/svenson_26 on r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/
- "while I was busy writing down what you said 30 seconds ago, I was missing what you're saying right now", @DrPengSHEN on X, source: https://x.com/DrPengSHEN/status/2096437717320278027 (NOTE: this post doubles as promotion for a recording device; quote the observation, never the product)
- "Why has nobody solved for in-person meeting note-taking? If someone has, I'm ready to buy", @kabirnagral on X, source: https://x.com/kabirnagral/status/2094652022914203656
- "The issue is not really capturing the meeting anymore. There are already good tools for transcription and summaries. The part that still feels manual is what happens after: deciding what actually matters, turning decisions into action items.", u/Interesting-Post4178 on r/ObsidianMD, source: https://www.reddit.com/r/ObsidianMD/comments/1tb6in5/how_do_you_turn_meeting_notes_into_something/

### Quotes available but NOT recommended for direct use

These are real and sourced, but each sits inside a top-10 SERP competitor page that cannot be linked, and none is independently findable, so quoting them means an uncited attribution. Use the IDEA, write it in Olga's own words, and skip the quotation marks.

- Joep Schuurkes on note-taking as a low-status job ("if you ask who wants to take notes, you're asking if someone wants to reduce their status in the meeting"), source: https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/ (SERP rank 4, forbidden link). The same point is independently available from u/svenson_26's quote above, which IS usable.
- Ben Cotton on the facilitator not being the note-taker ("It's very difficult to facilitate discussion and take notes on that discussion at the same time"), source: https://duckalignment.academy/meeting-notes/ (SERP rank 5, forbidden link). Use the point in Olga's own words.
- Chris Fussell (McChrystal Group) on deliberate meetings, source: https://www.teamwork.com/blog/how-to-take-meeting-notes/ (SERP rank 7, forbidden link). Skip; adds nothing the post needs.

## Named examples

Real named things that can be referenced without further verification.

- The Cornell note-taking method, page split into a narrow cue column, a wide notes column and a summary strip at the bottom (confirmed 2026-09-08 against the official Cornell page, HTTP 200); the closest established method to adapt for meetings, and this blog already has a full guide on it, source: internal, https://olgapak.com/cornell-note-taking-method (plus the official method page https://alumni.cornell.edu/cornellians/cornell-notes/ as an external option)
- Mind mapping and the charting method, two other established structures with existing guides on this blog, best suited to brainstorm meetings and recurring status meetings respectively, source: internal, https://olgapak.com/mind-mapping-note-taking-method and https://olgapak.com/charting-method-note-taking
- AI meeting notetakers as a product CATEGORY (transcribe-and-summarize assistants that join a call), named generically only. Specific product names surfaced in research (Granola, Comu Action Pro, Heypocket, Otter.ai, Teams/Zoom built-in summaries) came from promotional or incidental mentions and are NOT endorsed, compared or verified here, source: research/x.md, research/reddit.md

## Product facts

Facts about this blog's own product. Safe to use without external citation.

### Feature facts
- Olga's free AI tools are a small suite built on OpenAI: Email Generator (drafts an email from a short prompt), Text Simplifier, Acronym Explainer, Text Summarizer, source: blog-ops/profile/product.md
- The tools are free with no signup friction, and each does one job rather than being an all-in-one, source: blog-ops/profile/product.md
- Relevant to this post: the Email Generator fits the "draft the follow-up while it's fresh" step, and the Text Summarizer fits condensing a long transcript or a wall of raw notes, source: blog-ops/profile/product.md
- There is no pricing page and the tools are free, so the post must not state or imply a price, source: blog-ops/profile/product.md

### First-party data claims
- Tool usage / adoption numbers, availability: hypothetical, context: no usage analytics are citable yet, so the post makes NO claim about how many people use the tools, source: blog-ops/profile/product.md

## Rejected / not verifiable

Claims that surfaced during research but are not citable. Writer does NOT use these.

- Any general statistic about how many meetings are unproductive, how much money meetings waste, or how many meetings the average professional attends, reason rejected: no such figure appeared in any fetched source; do not import one from memory. If the post genuinely needs one, mark it `[VERIFY:]` with a source clause and let Stage 3d resolve or delete it.
- "Nobody reads meeting notes" as a general truth, reason rejected: it is one upvoted Reddit opinion (u/TylertheDouche), not a measured finding. Usable ONLY as a quoted opinion the post then answers, never as fact.
- Any claim that a specific AI notetaker is accurate, inaccurate, best, or worst, reason rejected: no product was tested and this post is not a tool roundup (brief.md §Avoid list). The verified claim is narrower: consumer AI capture is repeatedly reported to struggle with in-person multi-speaker meetings, and is blocked outright by some employers' policies.
- Post dates for the three X posts, reason rejected: not present in the raw captures; the post must not date them. Engagement counts are available and dated 2026-09-08.
- That handwriting beats typing FOR MEETINGS specifically, reason rejected: the underlying research is about learning and lectures. Scope any handwriting claim to memory and comprehension generally, and say plainly that meetings are a different job than studying.

## Verification key

- ✅ Verified (source found and quoted directly from the fetched capture)
- ⚠️ Needs verification (the claim is real but its PRIMARY link has not been loaded yet; Stage 3d must confirm the URL loads and supports the wording, or the claim gets cut)
- ❌ Rejected (do not cite)
