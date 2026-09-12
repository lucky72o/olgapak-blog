# Outline: ai note taking

Written by: blog-editor (Stage 2).
Sources: `plan.md` (approved at Stage 1c.5), `facts.md`, `standards/blog-craft.md`,
`standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/product.md`.
Read by: blog-writer (Phase 3) during drafting; blog-reviewer at Stage 3b for structural alignment.

## Status

approved

## Final title

`AI Note-Taking: A 5-Step Workflow That Actually Sticks`

Source: copied from `plan.md` "Recommended title" (53 characters).

## Final slug

`ai-note-taking`

## Final meta description

`AI can transcribe and summarize your notes, but it shouldn't do your thinking. Here's the 5-step AI note-taking workflow I use, and where it breaks.`

(147 characters.)

## Author voice

olga

## Word count target

2,300–2,700 words (roll-up 2,530, body prose excluding FAQ). Matches the plan's length target and
sits inside the observed SERP range (median 2,112, mean 2,691 across the five deep-fetched results).

## Intent

how_to

## Category

`Productivity, EdTech`

---

## Intro structure (4 paragraphs max)

### P1, Hook

- Hook sentence (draft): `The pitch for AI note-taking is that you never have to take notes again, and that is exactly the part I'd ignore.`
- Fact anchor (if any): none — the hook is a position, not a statistic. The retention evidence lands
  in H2 2 where there is room to state it honestly.

### P2, Expertise statement

- Expertise sentence (draft): `I build my own AI productivity tools on OpenAI, and I have spent enough time watching them do the boring half of my work brilliantly and the thinking half badly to know where the line is.`

### P3, Intro internal links (≤2, contextual)

| Anchor text | Target slug | Placement (intro or which H2) |
|---|---|---|
| whether digital or paper notes actually work better | digital-vs-paper-notes | intro |
| the Cornell note-taking method | cornell-note-taking-method | H2 2 |
| taking notes on an iPad | how-to-take-notes-on-ipad | H2 3 (capture step) |
| note-taking methods | note-taking-methods | H2 3 (organize step) |
| plan your week | how-to-plan-your-week | H2 3 (review step) |

One internal link in the intro (cap is two). The other four sit in the section where their topic is
actually discussed. All are root-relative with NO trailing slash (`/digital-vs-paper-notes`), per
`blog.trailing_slash: false`. The first internal link must appear before the first external link.

### P4, Preview

- Preview sentence (draft): `This guide covers what AI note-taking actually does, the five-step workflow I run, which kind of tool fits which job, and the three things that catch people out.`

**No affiliate disclosure in this post.** It carries no tagged Amazon links (software/workflow
topic), so `custom-instructions.md` §Content policy's disclosure requirement does not engage.

---

## Body sections

### H2 1: `What AI note-taking actually does (and what it doesn't)`

- Covers: the plain-English definition, and the distinction readers arrive without — transcription
  (turning speech into text), summarization (shortening text), and note-taking (deciding what
  matters). Most tools sold as "AI note-takers" do the first two and quietly leave the third to you.
- Key fact to cite: the five-step model most of these tools follow — capture, transcribe, structure,
  summarize, sync — with a failure mode at each step, e.g. a tool that stops before the last step
  leaves the filing to you. From `facts.md` §Named examples, "The five-step model most AI
  note-takers follow". **Attribute in prose, do NOT link** (top-10 SERP URL).
- Jargon translation required here per `audience.md` §Reading posture: extractive summarization
  picks out the sentences that already carry the most meaning; abstractive summarization writes new
  ones that say the same thing in fewer words. That second kind is why an AI summary sometimes
  contains a sentence nobody in the room ever said. From `facts.md` §Named examples.
- Approximate word count: 300

### H2 2: `Why you still take the notes, and AI does the rest`

- Covers: the honest retention argument. The reason to keep doing part of this yourself is not that
  handwriting is magic; it is that the deciding-and-rephrasing is where the understanding happens.
- Key fact to cite: laptop note-takers recorded more of the lecture word for word and did worse on
  conceptual questions, `facts.md` §Statistics row 1, source:
  https://journals.sagepub.com/doi/full/10.1177/0956797614524581
- **Mandatory honesty guardrail:** immediately follow it with the replication, `facts.md` §Statistics
  row 2, source: https://link.springer.com/article/10.1007/s10648-019-09468-2 — performance did not
  consistently differ between the groups and the effects favoring longhand were small and not
  statistically significant. This blog has already published that correction in
  `digital-vs-paper-notes`; contradicting it here would be a `critical` review issue. The claim this
  post is allowed to make is about the processing, never "handwriting beats typing".
- Voice-of-customer anchor: "A lot of learning happens during the note taking process. If you farm
  out that process, you're missing out." (u/blakebonkofsky) and "Record the lecture and go back and
  take the notes yourself when you can pause to write or rewind if you miss something."
  (u/ShaylaDee), `facts.md` §Quotes, source:
  https://www.reddit.com/r/askanything/comments/1siksog/is_it_still_bad_to_use_ai_for_note_taking_in/
- Internal link: `the Cornell note-taking method` → `/cornell-note-taking-method`, as the example of
  a system built around pulling information back out of your own memory.
- Approximate word count: 320

### H2 3: `My 5-step AI note-taking workflow`

- Covers: the actual runnable process, five numbered H3s. This is the section the whole post exists
  for and the reason it beats a tool list.
- Section-level fact anchor: the five-step shape is adapted from the capture → transcribe →
  structure → summarize → sync model in `facts.md` §Named examples, restated in Olga's own words.
- Approximate word count: 650 total across the five H3s (roughly 130 each).

#### H3 3.1: `Step 1, Capture: record it, and stay in the room`

- The one decision here is what does the recording: your phone, your laptop's meeting tool, a tablet,
  or a dedicated recorder. Whatever it is, it should require zero attention once it starts.
- Internal link: `taking notes on an iPad` → `/how-to-take-notes-on-ipad`, for the reader whose
  capture device is a tablet.
- Honest note: recording is not always allowed. Forward-reference H2 6 in one clause; do not
  duplicate that section here.

#### H3 3.2: `Step 2, Transcribe: turn the recording into searchable text`

- What transcription buys you is not a document to read; it is the ability to find the ninety seconds
  that mattered without scrubbing through an hour.
- Concrete illustration: one student's stats lecture came back split into chapters by topic, with
  timestamps on the worked examples. From `research/serp.md` §Use-in-post facts. **Attribute without
  linking** (top-10 SERP URL); frame as "one student who tested more than thirty of these tools".

#### H3 3.3: `Step 3, Summarize: get a first pass, not a final answer`

- The summary is a starting point, not a replacement for sitting with the material — cite the
  student's own conclusion from `facts.md` §Quotes (attributed, unlinked).
- **The single product mention in this post goes here**, and only here: a short, optional line that
  the summarizing job is exactly what Olga's free Text Summarizer does, for the case where the text
  is already text (a reading, a long email chain) rather than audio. No feature list, no numbers,
  no price. `facts.md` §Product facts.

#### H3 3.4: `Step 4, Organize: give the output a shape you'll recognise later`

- An AI summary that lands in a folder with 200 other AI summaries is not a note. Pick one structure
  and put every summary through it.
- Internal link: `note-taking methods` → `/note-taking-methods`, as the menu of structures to choose
  from (silo direction: this links UP to the pillar).

#### H3 3.5: `Step 5, Review: the ten minutes that make it stick`

- The adapted habit from `facts.md` §Named examples: right after the session, write down the one
  decision that was actually made, who is doing what by when, and the follow-up — in your own words,
  from the summary, not copied out of it. That rewriting IS the step H2 2 argued for.
- Internal link: `plan your week` → `/how-to-plan-your-week`, for scheduling the review so it
  actually happens.
- Cite the source's own result honestly: one person reported their post-meeting admin dropping from
  45 minutes to 10, `facts.md` §Statistics row 3 — attributed as one person's experience, never as a
  general figure, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/

### H2 4: `Which AI note-taking tool fits which job`

- Covers: five job-shaped categories, not a ranking and not a scored list — live meetings, long
  recordings and lectures, source-grounded Q&A over your own documents, AI bolted onto a notes app
  you already use, and dedicated hardware recorders. Each gets what it is good at and what it is bad
  at. Table plus short prose.
- **Constraint carried from the plan review (checklist Notes item 2):** `facts.md` has exactly one
  sourced entry for a named tool. Every other capability claim must be attributed opinion or carry
  `[VERIFY: <claim> | source: <where>]`. **No prices for any third-party tool. No "most accurate"
  claims.**
- Key fact to cite: NotebookLM answers using only the sources you upload and links each answer back
  to the passage it came from, `facts.md` §Named examples, source: https://support.google.com/notebooklm
  (marked `needs_verification` — Stage 3d confirms the wording before this link ships).
- Hardware honesty anchor: four months with a wearable recorder, still reviewed before use — "it's a
  lot better than trying to remember a long call from scratch at the end of the day",
  `facts.md` §Quotes, source:
  https://www.reddit.com/r/AI_Agents/comments/1u5pd09/best_ai_note_taking_devices_for_meetings/
- Explicitly NOT a roundup: no numbered ranking, no "best overall", no scores. The scored roundup is
  a separate queued post.
- Approximate word count: 380

### H2 5: `Where AI note-taking still falls down`

- Covers: the three failure modes readers actually hit, plus the fatigue.
- Failure 1, the transcript: accuracy drops with accents, crosstalk and jargon, and the way to find
  out is to trial a tool on a real recording of your own rather than the vendor's demo. Source
  situation: every SERP competitor asserts this without citing anything, so the draft carries
  `[EXTERNAL_LINK_NEEDED: speech-recognition accuracy varies with speaker accent, crosstalk and audio
  conditions, suggested source type: peer-reviewed speech-recognition study or a .gov/.edu benchmark]`
  for Stage 3d. If Stage 3d cannot confirm a source, the claim stays qualitative.
- Failure 2, the summary: it can emphasize the wrong thing or skip the section that turned out to
  matter, and abstractive summarizing can produce a sentence nobody said. Ties back to H2 1's jargon
  translation.
- Failure 3, the never-re-read trap: a folder of summaries you never open is worse than three
  scrappy lines you wrote yourself, because it feels like preparation.
- The fatigue, honestly named: "another one of those vibe coded AI note-taking apps... they're all
  the same", `facts.md` §Quotes, source: https://x.com/wojakcodes/status/1968572197296877869
- Approximate word count: 330

### H2 6: `Before you hit record: permission, policy and privacy`

- Covers: four concrete checks — ask the people in the room, check the rules where you are, check
  your employer's or campus's policy, and read the actual privacy policy rather than the landing page.
- Key fact: recording rules differ by country and by US state, and some settings require everyone to
  agree. `facts.md` §Quotes (attributed, unlinked — top-10 SERP URL). Any firmer legal claim carries
  `[EXTERNAL_LINK_NEEDED: recording-consent rules differ by jurisdiction, suggested source type: .gov
  or official legal resource]`. **The post never gives legal advice.**
- Policy reality, cited: "Many companies specifically prohibit recording meetings or using
  transcribing AI tools. And they often disable the tools." (u/OozeNAahz), `facts.md` §Quotes, source:
  https://www.reddit.com/r/LifeProTips/comments/1v6mivd/lpt_if_you_spend_more_time_writing_up_your/
- The privacy mechanism, in plain language: the app you tap is often only the front end. The audio
  can go to a separate transcription company and the transcript on to a general AI provider, so one
  recording touches three or four businesses. And a landing page saying "we never train on your data"
  is not the same document as the privacy policy that says what the company may keep. `facts.md`
  §Named examples, source:
  https://www.reddit.com/r/therapists/comments/1vtuze2/therapists_using_ai_notetaking_tools_please/
  — framed as "commonly" and "often", NEVER as a claim about a specific named tool, and NEVER
  implying a student recording a lecture carries the same legal stakes as a clinician.
- Approximate word count: 250

---

## Closing CTA

- CTA angle (one line): the workflow is the point, and the mundane half of it is exactly what a
  small AI tool should be doing for you — try Olga's free AI tools, action anchor
  `Try my free AI tools`, target https://olgapak.com/ai-tools. Two short paragraphs maximum, no
  feature re-list, no prices, no "in conclusion".
- Approximate word count: 100

---

## FAQ block

- Q: `Is it cheating to use AI to take notes in college?` → A direction: no, using it to capture and
  transcribe is not cheating, but check your institution's own policy because they differ; the line
  most people draw is between AI carrying the notes and AI doing the understanding.
- Q: `Does using AI to take notes hurt your memory?` → A direction: what the evidence actually
  supports is that the processing does the work, not the tool; the replication research found the
  handwriting advantage small and not statistically significant, so the honest answer is that
  outsourcing the deciding-and-rephrasing is the risk, not the software.
- Q: `What is the best free AI note-taking tool?` → A direction: name the free source-grounded option
  and be clear about what it is not (it is not a live meeting recorder), and point back to the
  job-matching section instead of declaring a winner.
- Q: `Do I need to tell people I'm recording a meeting?` → A direction: yes, ask, and check the rules
  where you are, because they differ by country and US state and many employers ban recording tools
  outright. No legal advice.

---

## Inbound internal links (existing posts → this post)

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| note-taking-methods | in the section on choosing a method, as the "what if a machine does the capturing" follow-on | using AI to take notes |
| digital-vs-paper-notes | where the post discusses typing and speed of capture, as the third option readers now ask about | AI note-taking |
| how-to-take-notes-on-ipad | in the apps/setup section, as the workflow layer on top of the device | an AI note-taking workflow |
| cornell-note-taking-method | where the post covers reviewing and summarizing, as the AI-assisted version of the same loop | AI note-taking |

All four are applied automatically at Stage 4b.5. Links are root-relative with no trailing slash:
`/ai-note-taking`.

---

## External link plan

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source / SERP citation reference |
|---|---|---|---|
| laptop note-takers recorded more of the lecture word for word and did worse on conceptual questions | https://journals.sagepub.com/doi/full/10.1177/0956797614524581 | primary_source | `facts.md` §Statistics row 1 |
| performance did not consistently differ between any of the groups | https://link.springer.com/article/10.1007/s10648-019-09468-2 | primary_source | `facts.md` §Statistics row 2 |
| the cue-and-recite loop the Cornell system is built around | https://lsc.cornell.edu/notes.html | authoritative_allowlist (.edu) | `facts.md` §Named examples |
| answers using only the sources you upload | https://support.google.com/notebooklm | authoritative_allowlist (official platform docs) | `facts.md` §Named examples, `needs_verification` |

Plus two `[EXTERNAL_LINK_NEEDED:]` slots for Stage 3d (speech-recognition accuracy in H2 5;
recording-consent jurisdiction in H2 6). Four confirmed links plus up to two resolved markers keeps
the post inside the 3–5 external-link band once Stage 3d has run.

**None of the nine top-10 SERP URLs appears above** (zoom.com, metaview.ai, pcmag.com, medium.com,
microsoft.com, plaud.ai, notta.ai, notegpt.io, otter.ai). Several facts in this outline are sourced
to those pages; every one is marked "attribute in prose, do not link". Reddit and X thread URLs are
research provenance recorded in `facts.md`, not link targets in the post.

---

## Image placement plan (high-level)

- **Featured (frontmatter cover):** the split between the mundane half of note-taking that AI handles
  and the thinking half that stays yours, type: `ai-prompt` (per `images.featured_default` and
  `custom-instructions.md` §Image style — this blog's featured slot is always `ai-prompt`).
- **After H2 2 + 1 paragraph:** a two-column "AI handles / you handle" comparison — capture,
  transcribe, tidy, find again on one side; decide what matters, put it in your own words, connect it
  to what you already know on the other. Type: `remotion` (a genuine diagram, and the section has no
  competing markdown table).
- **After H2 3 + 1 paragraph:** the five-step workflow as a linear process diagram (capture →
  transcribe → summarize → organize → review), with the two steps AI owns visually distinguished from
  the one that stays human. Type: `remotion`.
- **After H2 4 + 1 paragraph:** a scene of the same person in three capture situations — a lecture
  hall, a video call, a walk with a recorder — illustrating that the job decides the tool. Type:
  `ai-prompt`. (Not a chart, so it does not duplicate this section's table.)
- **After H2 6 + 1 paragraph:** a scene about asking before recording — a phone face-up on a table
  between two people mid-conversation. Type: `ai-prompt`.

Total: 1 featured + 4 in-post, inside `blog-craft.md` §Image count's 1 + 3–5 target. No `screenshot`
slots: this post is not about one product's interface, and a vendor UI screenshot would date fast and
read as an endorsement.

---

## Word count roll-up

- Intro: ~200 words
- Body sections total: 2,230 (H2 1: 300, H2 2: 320, H2 3: 650, H2 4: 380, H2 5: 330, H2 6: 250)
- Outro / CTA: ~100 words
- **Total estimate (body prose, no FAQ):** 2,530 vs plan target 2,300–2,700 ✅
- FAQ: ~180 words (listed for completeness; NOT part of the gated total)

---

## Open questions (recorded, no longer block on a human gate)

- [ ] The speech-recognition accuracy citation is unresolved by design. H2 5 ships an
  `[EXTERNAL_LINK_NEEDED:]` for Stage 3d; if no primary source confirms, the claim is softened to a
  qualitative one rather than deleted, since "trial it on your own recording" stands on its own.
- [ ] H2 4 names tool CATEGORIES with only one sourced named tool behind them. That is deliberate
  (the scored roundup is a separate queued post), but it is the section most likely to read thin to a
  reader who arrived shopping. The fix if flagged at Stage 3b is more depth per category, not a
  ranked list.
- [ ] Autopilot run: no human intake. Angle, author, category, intent and research sources were all
  the editor's call from `blog-ops/content-plan.md` row 10 plus the profile docs; the full list is in
  `brief.md` §Autopilot assumptions.

---

## Changes requested by human (log)

(none yet)
