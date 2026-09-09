# Reddit Research: ai note taking

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected up to 5 Reddit threads from `{drafts_dir}/ai-note-taking/research/_raw/_reddit_search.json` and `{drafts_dir}/ai-note-taking/research/_raw/_reddit_selection.md`. Per-thread deep fetches at `{drafts_dir}/ai-note-taking/research/_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** Reddit raw files are Reddit's native public `.json` API responses. Search response: `data.children[].data` array of post objects. Thread response: 2-element array `[postListing, commentListing]`; post at `[0].data.children[0].data` (kind `t3`); top-level comments at `[1].data.children[].data` (kind `t1`; `kind: "more"` entries skipped).

## Search metadata

- Source: Reddit
- Query: AI note taking (fuzzy relevance search)
- Search URL: not recorded in `_reddit_search.json` (transport: chrome, logged-in fetch of Reddit's `.json` endpoints per `_reddit_selection.md`)
- Date searched: 2026-09-09 (inferred from sibling raw files; not explicitly timestamped in `_reddit_search.json`)
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

## Selected threads (per editor's `_reddit_selection.md`)

### 1. Therapists using AI note-taking tools: please actually read the terms you're agreeing to.
- URL: https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/
- Subreddit: r/therapists
- Author: u/Dear_Preference_9487
- Score: 590 | Comments: 265 | Posted: (created_utc 1787257527)
- Why selected: richest thread on the privacy/consent/terms-of-service failure mode the brief wants covered, from a profession legally required to care.

#### Post body (verbatim, trimmed if needed)
> I've been looking into AI therapy scribe tools and I'm surprised they are as popular as they are... I assumed these companies were the ones processing the session and generating the note, maybe this is common knowledge but most of them are only the interface therapists interact with, the session audio is actually sent to a different company for transcribing, and then the transcript to either OpenAI or Anthropic for the note generating. Throughout the whole process the entire therapy session... touches 3-4 other vendors, sometimes a lot more... I also think therapists need to read the legal terms themselves instead of believing the "safe and secure" or "we don't train AI on your data" claims on their websites. One of the most popular platform says very clearly: "Your data is yours" and "Your data is never used to train AI". But their actual privacy policy says they can create de-identified data derived from information processed through the service...

#### Top comment patterns
- Most upvoted POV: multi-vendor data flow is the real risk, not any single tool's marketing claims, score 212 (u/asdfgghk: "The worst part is patients not being told what is happening to their data.")
- Most contrarian POV: some benefits (personalization from reflecting on past sessions) do exist, but the OP counters that those benefits accrue to the therapist, not the client (u/Dear_Preference_9487, score 27: "Those all benefit the therapist. Why should clients risk their privacy to benefit me?")
- Common concern raised: the "we don't train AI on your data" marketing claim conflicts with the actual privacy policy language allowing de-identified data use, raised by OP and echoed through the thread (a security engineer, u/toad__warrior, score 77, backs this up as a professional obligation to read terms)

### 2. Is it still bad to use AI for note taking in college?
- URL: https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- Subreddit: r/askanything
- Author: u/ExoticAd7605
- Score: 5 | Comments: 50 | Posted: (created_utc 1775918284)
- Why selected: directly the question this post's primary (student) audience is asking, argued from both sides.

#### Post body (verbatim, trimmed if needed)
> I can't keep up with Professor while trying to both comprehend what they're saying and write down notes. AI can record the lecture and transcribe it into notes, but is this detrimental to the environment? Edit: Some of you do not understand what ADHD is like.

#### Top comment patterns
- Most upvoted POV: record now, but do the actual note-writing yourself afterward, score 29 (u/ShaylaDee: "Record the lecture and go back and take the notes yourself when you can pause to write or rewind if you miss something. You'll learn a million percent more.")
- Most contrarian POV: outsourcing note-taking entirely is fine for some ("Do both. Your note taking helps with learning. Then comparing your work with the AI can assure you didn't miss anything," u/daneato, score 4) versus the majority framing it as "cognitive offloading" that undermines learning (u/KTeacherWhat, score 13: "You're basically paying for AI to get a degree instead of you.")
- Common concern raised: retention/learning loss from letting AI do the transcribing, appeared in at least 4 top comments (u/ShaylaDee, u/blakebonkofsky, u/KTeacherWhat, u/SmashinHunter — "Taking notes helps because you're actively listening to the lecture and the act of transcribing what you hear into words on your own paper helps you retain that info better.")

### 3. What AI meeting note tools are actually worth paying for?
- URL: https://www.reddit.com/r/NoteTaking/comments/1u96pgc/what_ai_meeting_note_tools_are_actually_worth_paying_for/
- Subreddit: r/NoteTaking
- Author: u/jimmybobjoeflow
- Score: 9 | Comments: 56 | Posted: (created_utc 1781790317)
- Why selected: tool-evaluation thread from the note-taking subreddit itself, on which tools people kept paying for versus dropped.

#### Post body (verbatim, trimmed if needed)
> After trying a few AI note-taking tools, I'm starting to feel like a lot of them look affordable at first but end up charging extra features that seem like they should be included. I'm mainly looking for something that can record meetings, generate useful summaries, and work reliably on mobile... For those using AI note takers regularly, what have you found offers the best value without a bunch of surprise add-ons or usage limits?

#### Top comment patterns
- Most upvoted POV: Otter.ai Pro has "Best transcription accuracy I've found, especially for multi-speaker meetings. The action items extraction actually works," u/Paradisos_, score 3 (highest-scored substantive comment in this thread)
- Most contrarian POV: several low-effort single-tool plugs (Granola, Fathom, Fellow) with no comparative reasoning, each around score 1
- Common concern raised: surprise add-on pricing / feature-gating beyond the advertised plan, raised by OP and implicit in the "worth paying for" framing of the top comment

### 4. Best AI note taking devices for meetings?
- URL: https://www.reddit.com/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/
- Subreddit: r/AI_Agents
- Author: u/Thiaguin20
- Score: 17 | Comments: 27 | Posted: (created_utc 1781453804)
- Why selected: covers the hardware-recorder corner of the category (Plaud etc., which ranks #4 on the SERP), letting the post address it honestly rather than pretending the category is software-only.

#### Post body (verbatim, trimmed if needed)
> I've tried a few AI note taking apps for meetings. Most of them are okay for summaries, but I'm starting to wonder if a physical device makes more sense for some situations. Apps are fine when I'm already sitting at my laptop. The annoying part is when I'm moving between calls, having in person meetings, or just don't want another bot joining the meeting... Has anyone here moved from AI note taking apps to a physical device, like an AI recorder, AI earbuds, or something wearable?

#### Top comment patterns
- Most upvoted POV: a wearable recorder (viaim RecDot) used for four months, with a "record then ask the notes for the useful parts" workflow, but still reviewed before use, score 6 (u/Affectionate-Good168: "I still review it before using the notes, but it's a lot better than trying to remember a long call from scratch at the end of the day.")
- Most contrarian POV: software-only advocates (Granola, Fathom, Fireflies) push back on needing hardware at all, score 3 (u/Radiant-Scarcity2333)
- Common concern raised: consent for recording in-person/group settings varies by context, one commenter noted the recorder maker "mentioned they'd ask if it was okay to record at the start of 1 on 1 convos. For group discussions, they were likely to just let it run without asking," u/chasing_next, score 3

### 5. LPT: If you spend more time writing up your meeting notes than the meeting itself, stop taking notes during the call and record it instead.
- URL: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- Subreddit: r/LifeProTips
- Author: u/IntelligentHome4267
- Score: 3209 | Comments: 99 | Posted: (created_utc 1785020037)
- Why selected: highest-engagement on-topic thread and a direct argument for the record-then-summarize workflow this post recommends, including honest pushback.

#### Post body (verbatim, trimmed if needed)
> I work from home managing multiple clients. I tried to take detailed notes on every call, but I quickly learned that doing so caused me to miss half the conversation... Now I record every client call (with permission, obviously), and I spend the first 10 minutes after the call doing three things: 1. Write down the one decision that was actually made 2. Write down who is doing what by when 3. Draft the follow-up email while the conversation is still fresh in my head... My post-meeting admin work went from 45 minutes to 10 minutes by doing this. That is 35 minutes per call.

#### Top comment patterns
- Most upvoted POV: the tip is job-dependent, not universal, score 970 (u/Cheap_Appearance5095: "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting because if you don't pay attention and engage in the conversation you're going to have a bad time after.")
- Most contrarian POV: many companies flatly prohibit recording or AI transcription and disable the tools organization-wide, score 88 (u/OozeNAahz: "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they often disable the tools. They don't want every meeting that has happened to be part of ediscovery for lawsuits.")
- Common concern raised: whether this "record, don't write" approach generalizes across job types and company policy, raised in the top 3 comments by score

## Voice-of-customer themes

- **Theme:** Note-taking-by-hand/typing is believed to aid retention; outsourcing it entirely to AI is seen as "cognitive offloading" that costs learning.
  - Evidence: "Taking notes helps because you're actively listening to the lecture and the act of transcribing what you hear into words on your own paper helps you retain that info better.", u/SmashinHunter, https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
  - Evidence: "A lot of learning happens during the note taking process. If you farm out that process, you're missing out.", u/blakebonkofsky, https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
  - Frequency: appeared in 1/5 threads (r/askanything), but as 4+ separate top comments within that thread
- **Theme:** Vendor privacy claims ("your data is never used to train AI") often don't survive contact with the actual privacy policy, and multi-vendor data pipelines (audio → transcription vendor → LLM vendor) multiply the risk.
  - Evidence: OP's post itself, quoting a platform's marketing ("Your data is yours"/"never used to train AI") against its actual policy language allowing de-identified data use, https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/
  - Evidence: "The worst part is patients not being told what is happening to their data.", u/asdfgghk, https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/
  - Frequency: appeared in 2/5 threads (r/therapists directly, r/AI_Agents touches consent for in-person recording)
- **Theme:** The "record now, structure/write up after" workflow is popular and saves real time, but is not universally applicable and depends on the type of work.
  - Evidence: "My post-meeting admin work went from 45 minutes to 10 minutes by doing this.", u/IntelligentHome4267, https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Evidence: "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting...", u/Cheap_Appearance5095 (970 upvotes, the top comment on the thread), https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Frequency: appeared in 2/5 threads (LifeProTips directly, echoed in askanything's "record + write up yourself" top comment)
- **Theme:** Company policy and consent law are a real, practical blocker, not just a hypothetical concern — some workplaces ban recording/transcription tools outright.
  - Evidence: "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they often disable the tools.", u/OozeNAahz, https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Evidence: "consent is a hot topic around these devices, they mentioned they'd ask if it was okay to record at the start of 1 on 1 convos. For group discussions, they were likely to just let it run without asking.", u/chasing_next, https://www.reddit.com/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/
  - Frequency: appeared in 2/5 threads (LifeProTips, AI_Agents)

## Use-in-post quotes

- "Record the lecture and go back and take the notes yourself when you can pause to write or rewind if you miss something. You'll learn a million percent more.", u/ShaylaDee, r/askanything, source: https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- "Taking notes helps because you're actively listening to the lecture and the act of transcribing what you hear into words on your own paper helps you retain that info better.", u/SmashinHunter, r/askanything, source: https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- "My post-meeting admin work went from 45 minutes to 10 minutes by doing this. That is 35 minutes per call.", u/IntelligentHome4267, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting because if you don't pay attention and engage in the conversation you're going to have a bad time after.", u/Cheap_Appearance5095, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they often disable the tools.", u/OozeNAahz, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "Best transcription accuracy I've found, especially for multi-speaker meetings. The action items extraction actually works.", u/Paradisos_ (on Otter.ai Pro), r/NoteTaking, source: https://www.reddit.com/r/NoteTaking/comments/1u96pgc/what_ai_meeting_note_tools_are_actually_worth_paying_for/
- "I still review it before using the notes, but it's a lot better than trying to remember a long call from scratch at the end of the day.", u/Affectionate-Good168, r/AI_Agents, source: https://www.reddit.com/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/

## Angle opportunities for this blog

- The retention/"AI doesn't replace note-taking" angle the brief wants is exactly the live debate in r/askanything: this post can validate the top comments' instinct (record + review + write yourself) instead of pitching pure automation, giving it built-in audience buy-in.
- Company/classroom policy and legal consent variance (state-by-state, employer bans, professor permission) is treated by Redditors as a real practical blocker, not a footnote — worth a dedicated, concrete section (how to ask, what to check) rather than a single caveat line.
- The "record now, structure the notes in the first 10 minutes after" workflow from the top LPT thread is a genuinely reusable, concrete workflow step this post can adapt into its capture → transcribe → summarize → organize → review structure, while also citing the top pushback (not universal, depends on the job/class) for honesty.

## Open questions

- `created_utc` timestamps weren't converted to calendar dates in the raw files reviewed; exact post ages are unknown, though the threads read as recent (2026-era product names like Granola, tl;dv, Fathom throughout).
- The r/therapists thread is about a regulated professional context (PHI, clinical notes), not general note-taking; use its privacy-pipeline mechanics (audio → transcription vendor → LLM vendor) as illustrative of a general principle, but don't imply the same legal stakes apply to a student recording a lecture.
- No thread here quantifies transcription accuracy or retention with data, only anecdote; still needs a primary source per the SERP research's "Citations harvested" gap.
