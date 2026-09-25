# Reddit Research: how to take notes in meetings

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected 5 Reddit threads. Four came from `_raw/_reddit_search.json` (a re-pulled search, see note below); one (`reddit-00-projectmanagement.json`) came from the SERP's own rank-2 result rather than that search file. Per-thread deep fetches at `_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Query re-pull note (per `_reddit_selection.md`):** the literal target keyword returned 25 entirely off-topic threads, so the saved `_reddit_search.json` is from a broader query, `q="meeting notes"&sort=relevance&t=all` (dist: 25 results in the raw search listing, spanning subreddits like r/ObsidianMD, r/RemarkableTablet, r/politics). One selected thread (rank-2 in the SERP) is not part of that search file at all.

**Raw shape note:** Reddit raw files are Reddit's native public `.json` API responses. Search response: `data.children[].data`. Thread response: 2-element array `[postListing, commentListing]`; post at `[0].data.children[0].data` (kind `t3`); top-level comments at `[1].data.children[].data` (kind `t1`; `kind: "more"` entries skipped).

## Search metadata

- Source: Reddit
- Query: `"meeting notes"`, sort=relevance, t=all (re-pull; the literal target keyword failed to return on-topic results)
- Search URL: not separately recorded; search response `dist: 25`
- Date searched: 2026-09-08 (per fetch timestamps on the per-thread files)
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

## Selected threads (per editor's `_reddit_selection.md`)

### 1. How do you take notes in meetings?
- URL: https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
- Subreddit: r/projectmanagement
- Author: u/Tronracer
- Score: 148 | Comments: 204 | Posted: 2023-12-26 (created_utc 1703637011)
- Why selected: this is the SERP's own rank-2 result, a direct-keyword match thread with the deepest comment count of the set; captured via full comment-tree fetch instead of a DOM scrape of the Google result.

#### Post body (verbatim, trimmed if needed)
> This might be the most basic of basic skills, but I struggle to take effective notes and I know it's a skill I need to improve on. What I find is that as I'm trying to type as fast as I can, I am unable to keep up with how fast people are talking. I have trouble separating the noise from the important points when I'm new on a project. By the time I'm able to record what was said from one topic, they've already moved onto the next topic and I've missed half of what was said. I just started a new job where I'm expected to take notes for every meeting. What can I do to improve? Edit: many people are suggesting ai. How can I use ai without integrating ai into zoom/teams? My company locks down everything with tight security so I cannot invite an ai to the meeting. Also in most meetings I am not the host anyway.

#### Top comment patterns
- Most upvoted POV: "Ima let you in on a secret… nobody reads the notes anyways." (u/TylertheDouche, score 28) — a cynical but recurring undertone that most meeting notes go unread, which argues for capturing only what's actionable rather than everything.
- Structural advice POV: "Make sure you have an agenda. Under each agenda item note the following: Summary of the topic in real time, Action items, Assignments, Issues, Next steps." (u/pmpdaddyio, score 24) — near-identical structure to this post's planned template.
- Common concern raised: several commenters flag that AI transcription tools are blocked by company security/IT policy or require host permissions the note-taker doesn't have (OP's own edit, plus u/Ninjascubarex, score 20, worried about consent/security violations), appeared in at least 2 of the top comments plus OP's edit.

### 2. Please tell me honestly how long it takes you to write meeting notes.
- URL: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
- Subreddit: r/projectmanagement
- Author: u/dearcamus
- Score: 74 | Comments: 107 | Posted: 2026-08-21 (created_utc 1787857605, well within the past year)
- Why selected: direct match to this post's "overwhelmed and short on time" pain point, with a granular first-person account of an AI-assisted workflow that still takes an hour per one-hour meeting.

#### Post body (verbatim, trimmed if needed)
> I have teams recording all the meetings I lead... My team members confirmed that they don't read teams generated summaries sent by PM. This is my process: I focus on the conversation during the meeting and take notes. I get ai summary. I compare it to my notes but mind you my projects are VERY complex. I frequently need to go back to the recording and verify the details. I simplify the ai summary, using ai. It spits out much better notes. I fix quite a few details (see, I still can't trust ai!) then I send out the notes. This whole process takes me at least an hour for a one hour meeting. It's exhausting.

#### Top comment patterns
- Most upvoted POV: "I don't try to capture and circulate 'meeting notes.' I capture actions, ownership and key decisions. I don't know if I've ever been in a spot where someone wanted a summary of literally an entire meeting... It only takes me a few minutes." (u/Ezl, score 20) — directly supports this post's core thesis that capturing everything is the wrong goal.
- Most contrarian/high-signal POV: "Are you minuting the conversation or the decision? Discovering that I should only be recording the decision was a huge lightbulb moment for me." (u/c3rbutt, score 19) — a named "aha moment" almost identical to the post's planned structural-vs-discipline framing.
- Common concern raised: distrust of AI-generated summaries requiring manual verification/correction against the original recording, appeared in OP's post plus at least 2 top comments (u/EpitomeSandwich building a custom AI skill to fix this, u/Correct-Ship-581 explicitly avoiding AI).

### 3. LPT: If you spend more time writing up your meeting notes than the meeting itself, stop taking notes during the call and record it instead. The real work happens in the first 10 minutes after the meeting ends, not during.
- URL: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- Subreddit: r/LifeProTips
- Author: u/IntelligentHome4267
- Score: 3201 | Comments: 99 | Posted: 2026-07-25 (created_utc 1785020037, within the past year)
- Why selected: the single strongest voice-of-customer statement of this post's "five-minute post-meeting pass is the highest-leverage habit" claim, with a specific before/after time figure.

#### Post body (verbatim, trimmed if needed)
> I tried to take detailed notes on every call, but I quickly learned that doing so caused me to miss half the conversation. I would then spend so much time after trying to reorganize my notes and figure out what I meant. I was doing too much and not being able to be present for the meeting. Now I record every client call (with permission, obviously), and I spend the first 10 minutes after the call doing three things: 1. Write down the one decision that was actually made 2. Write down who is doing what by when 3. Draft the follow-up email while the conversation is still fresh in my head. My post-meeting admin work went from 45 minutes to 10 minutes by doing this. That is 35 minutes per call.

#### Top comment patterns
- Most upvoted disagreement: "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting because if you don't pay attention and engage in the conversation you're going to have a bad time after." (u/Cheap_Appearance5095, score 973) — the top comment is a direct pushback, this technique is not universal, it depends on meeting type/role.
- Practical objection: "Many companies specifically prohibit recording meetings or using transcribing AI tools. And they often disable the tools. They don't want every meeting that has happened to be part of ediscovery for lawsuits." (u/OozeNAahz, score 88) — recording-based workflows aren't available everywhere, a real constraint for corporate readers.
- Common concern raised: tension between "record and offload" vs. "stay present without a safety net," appeared across multiple comment threads including direct replies calling out the post's absolutist wording.

### 4. LPT: Starting out your career? Learn to record good meeting notes. You will end up in meetings that may take you years to get invited to otherwise.
- URL: https://www.reddit.com/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/
- Subreddit: r/LifeProTips
- Author: u/MrDeviantish
- Score: 4776 | Comments: 245 | Posted: 2023-10-16 (created_utc 1697479728, older than a year, deliberate per `_reddit_selection.md` rationale, treat behavioural advice as durable, specific tool mentions as dated — note there are no specific tool mentions in the top comments captured here, so this caveat mostly doesn't bite for this thread)
- Why selected: directly targets the brief's early-career audience with a career-advancement angle (notes as access to rooms/information) distinct from every other thread's productivity framing.

#### Post body (verbatim, trimmed if needed)
> Most people hate recording and distributing the meeting notes. It can be a thankless task, but learning to do it well and voluntarily may get you invited to meetings, privy to information and access to people that may take you years to get to otherwise.

#### Top comment patterns
- Most upvoted POV (skeptical/comic): "how do i get invited to less meetings" (u/lazy-but-talented, score 3515) — the single most-upvoted comment on this thread is a joke pushing back on the premise; signals this audience has genuine meeting fatigue, worth acknowledging honestly rather than selling meetings as unambiguously good.
- Corroborating case study: a founder-track career story where volunteering for meeting notes led into an informal project-management role and eventually a title change (u/EdwinaArkie, score 1427).
- Important counterpoint / equity concern: "I've heard that if you're a minority, a young person, or a woman, then don't take notes. Because then you'll always be just the note taker, and nobody will actually listen to anything you have to contribute." (u/svenson_26, score 223) — a real counterargument to the "notes = career capital" framing that echoes the SERP's smallsheds.garden essay on note-taking as a low-status job (see `research/serp.md`).

### 5. How do you turn meeting notes into something actually reusable?
- URL: https://www.reddit.com/r/ObsidianMD/comments/1tb6in5/how_do_you_turn_meeting_notes_into_something/
- Subreddit: r/ObsidianMD
- Author: u/Interesting-Post4178
- Score: 3 | Comments: 42 | Posted: 2026-05-12 (created_utc 1778602829, within the past year)
- Why selected: low score but the post body itself is a precise, well-articulated statement of this post's exact thesis (capture is solved, the post-meeting decision-and-follow-up work is not), and the subreddit gives a power-user/tooling-heavy counterpoint.

#### Post body (verbatim, trimmed if needed)
> The issue is not really capturing the meeting anymore. There are already good tools for transcription and summaries. The part that still feels manual is what happens after: deciding what actually matters, turning decisions into action items, saving useful context into Obsidian/Notion, drafting the follow-up, carrying unresolved items into the next meeting. Right now this still feels like a lot of copy/paste between a meeting tool, Claude/ChatGPT, notes, and email.

#### Top comment patterns
- Most upvoted POV: "Take better notes or have more useful meetings." (u/MrOddBawl, score 20) — blunt, and the top-voted reply essentially declines to engage with tooling and redirects to the fundamentals.
- Contrarian/skeptical of transcription: "Don't use transcription tools.. leartn to take good notes on the fly. Transcription tools just means your time is being half wasted :)" (u/FrozenOnPluto, score 2) — direct pushback on the OP's framing from within a note-taking-power-user subreddit.
- Common concern raised: multiple commenters describe manually funneling transcripts through an LLM and then hand-curating the output into permanent notes, essentially recreating the OP's "lot of copy/paste" problem rather than solving it (u/xRyul, u/ns1419), appeared in at least 2 of the top comments.

## Voice-of-customer themes

- **Theme:** Capturing everything (via typing or transcription) actively causes you to miss what matters, listening and transcribing compete for the same attention.
  - Evidence: "while I was busy writing down what you said 30 seconds ago, I was missing what you're saying right now" (this exact language also appears on X, see `research/x.md`), close paraphrase in this thread by OP's own struggle: "By the time I'm able to record what was said from one topic, they've already moved onto the next topic and I've missed half of what was said." https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
  - Evidence: "I tried to take detailed notes on every call, but I quickly learned that doing so caused me to miss half the conversation... I was doing too much and not being able to be present for the meeting." https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Frequency: appeared in 2/5 threads directly (and echoed in X research, see `research/x.md`).

- **Theme:** The real skill isn't transcription, it's deciding what to record: decisions and action items, not the conversation.
  - Evidence: "I don't try to capture and circulate 'meeting notes.' I capture actions, ownership and key decisions... It only takes me a few minutes" u/Ezl, https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
  - Evidence: "Are you minuting the conversation or the decision? Discovering that I should only be recording the decision was a huge lightbulb moment for me." u/c3rbutt, same URL
  - Evidence: "The issue is not really capturing the meeting anymore... The part that still feels manual is what happens after: deciding what actually matters, turning decisions into action items." u/Interesting-Post4178, https://www.reddit.com/r/ObsidianMD/comments/1tb6in5/how_do_you_turn_meeting_notes_into_something/
  - Frequency: appeared in 3/5 threads, this is the single strongest and most repeated pattern in the Reddit data, and directly validates the brief's core thesis.

- **Theme:** The highest-leverage moment is immediately after the meeting, not during it.
  - Evidence: "I spend the first 10 minutes after the call doing three things: 1. Write down the one decision that was actually made 2. Write down who is doing what by when 3. Draft the follow-up email while the conversation is still fresh in my head. My post-meeting admin work went from 45 minutes to 10 minutes." u/IntelligentHome4267, https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Evidence: "The best PM I ever saw would stop after each section of the meeting or presentation, and ask for key notes and actions which would be written up on screen in front of everyone... At the end of the meeting the succinct minutes/notes were already complete and accepted." u/Suchiko, https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
  - Frequency: appeared in 2/5 threads, but with very high engagement (this LPT thread has 3201 upvotes, the highest score of any captured thread).

- **Theme:** AI notetakers/transcription are widely discussed but trusted conditionally, blocked by IT policy in some workplaces, and don't remove the human curation step.
  - Evidence: "How can I use ai without integrating ai into zoom/teams? My company locks down everything with tight security so I cannot invite an ai to the meeting." OP edit, https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
  - Evidence: "Many companies specifically prohibit recording meetings or using transcribing AI tools... They don't want every meeting that has happened to be part of ediscovery for lawsuits." u/OozeNAahz, https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
  - Evidence: "I compare it to my notes but... I frequently need to go back to the recording and verify the details. I simplify the ai summary, using ai. It spits out much better notes. I fix quite a few details (see, I still can't trust ai!)" OP, https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
  - Frequency: appeared in 3/5 threads.

- **Theme:** Note-taking is not a neutral career move, it carries a status/equity dimension.
  - Evidence: "I've heard that if you're a minority, a young person, or a woman, then don't take notes. Because then you'll always be just the note taker, and nobody will actually listen to anything you have to contribute." u/svenson_26, https://www.reddit.com/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/
  - Evidence: "how do i get invited to less meetings" (top comment, 3515 upvotes) shows real skepticism toward the "meetings are opportunity" framing, same URL.
  - Frequency: appeared in 1/5 threads directly, but it's the top comment by a wide margin on the highest-scored thread in the whole set, so it carries outsized weight.

## Use-in-post quotes

- "Ima let you in on a secret… nobody reads the notes anyways.", u/TylertheDouche, r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/18rmwm2/how_do_you_take_notes_in_meetings/
- "I don't try to capture and circulate 'meeting notes.' I capture actions, ownership and key decisions.", u/Ezl, r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
- "Are you minuting the conversation or the decision? Discovering that I should only be recording the decision was a huge lightbulb moment for me.", u/c3rbutt, r/projectmanagement, source: https://www.reddit.com/r/projectmanagement/comments/1w0383c/please_tell_me_honestly_how_long_it_takes_you_to/
- "My post-meeting admin work went from 45 minutes to 10 minutes by doing this. That is 35 minutes per call.", u/IntelligentHome4267, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "This is completely dependent on the job. In my job, most of the 'real' work happens during the meeting because if you don't pay attention and engage in the conversation you're going to have a bad time after.", u/Cheap_Appearance5095, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- "I've heard that if you're a minority, a young person, or a woman, then don't take notes. Because then you'll always be just the note taker, and nobody will actually listen to anything you have to contribute.", u/svenson_26, r/LifeProTips, source: https://www.reddit.com/r/LifeProTips/comments/179chkv/lpt_starting_out_your_career_learn_to_record_good/
- "The issue is not really capturing the meeting anymore. There are already good tools for transcription and summaries.", u/Interesting-Post4178, r/ObsidianMD, source: https://www.reddit.com/r/ObsidianMD/comments/1tb6in5/how_do_you_turn_meeting_notes_into_something/

## Angle opportunities for this blog

- Lead structurally with the "decision vs. conversation" reframe; it's the single most-repeated, highest-conviction pattern across threads and it's exactly this post's planned thesis, giving real practitioner language to back it (u/c3rbutt's "lightbulb moment" quote is a strong candidate for the post itself).
- Use the 45-minutes-to-10-minutes framing to make the five-minute post-meeting pass concrete and numeric rather than abstract; readers respond strongly to specific before/after time figures (this is the highest-upvoted single thread captured).
- Address the "nobody reads the notes anyway" cynicism directly rather than ignoring it, acknowledging it up front (some notes genuinely go unread) reframes the post's template as being for the note-taker's own follow-through, not merely a document to circulate.
- Be honest about the equity/status dimension of note-taking rather than presenting it as a pure career-advancement play; the top comment on the highest-scoring thread pushes back hard on "volunteer for notes = career capital" as naive advice.
- Address IT/security blockers on AI notetakers directly (multiple threads name company policy, not personal preference, as the reason AI tools aren't an option), this is a concrete, underserved trade-off point for the "when an AI notetaker earns its place" section.

## Open questions

- Two of the five selected threads (LifeProTips #179chkv and, per the search file's broader listing, likely others outside this selection) are older than a year; per the editor's guidance in `_reddit_selection.md`, specific tool mentions there should be treated as dated. In practice neither of the two older/borderline threads used in this analysis names a specific tool in its top comments, so this caveat did not need to be applied to any harvested quote.
- The `_reddit_search.json` file's full 25-result listing includes several off-topic and self-promotional posts (a reMarkable tablet planner app launch, a Musk/politics thread) that were correctly excluded by the editor's selection; flagging only to confirm none of that noise leaked into the analysis above.
