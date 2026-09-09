# Plan: ai note taking

Written by: blog-editor (synthesis stage, Stage 1c).
Sources: brief.md, research/serp.md, research/reddit.md, research/x.md,
blog-ops/profile/product.md, facts.md.
Read by: plan-reviewer (Stage 1c.5), blog-editor (outline stage, Phase 2), blog-writer (Phase 3).

**Purpose:** the strategic document approved at Stage 1c.5 plan review. Once approved, it locks the
angle, audience, and structure. Outline and drafting must follow this plan.

## Status

approved

## Intent

how_to

Reasoning: the observed SERP intent is commercial investigation with an informational sub-intent, but
that lane is saturated (five vendor pages, three roundups) and the brief explicitly reserves the
scored roundup for `ai-study-tools`, so this post competes on the one job nobody in the top nine
does: showing a reader how to actually run AI inside a note-taking system, with a short explainer up
front and an honest, unranked tool section in the middle.

## Category

Productivity, EdTech  (note-taking sub-cluster → WP terms [12, 9] per `site-conventions.md`
§Categories; carried unchanged from `brief.md`)

## Audience emphasis

- **Primary:** students and early-career professionals who take a lot of notes, per
  `audience.md` §Primary audience — `research/serp.md` found exactly one of nine top results
  written for the lecture use case, so this is both the blog's audience and the SERP's biggest hole.
- **Secondary:** busy knowledge workers who land here for a specific meeting-notes workflow — the
  bulk of what the SERP serves, so the post must be genuinely useful to them without becoming a B2B
  meeting-tool piece.

Reader knowledge level: beginner

## Author voice

olga — single-author roster (`authors.md` defines no selection rubric), and the topic is squarely in
her stated expertise: she builds her own AI productivity tools on OpenAI, which is the credibility
line the intro leans on.

## Product positioning emphasis

`text_summarizer_primary` — the Text Summarizer is the tool that matches this post's topic
(condensing a long transcript or a wall of lecture notes into something scannable), introduced once,
near the end, as a next step. Per `voice.md` §Positioning: educational payoff first, tool second,
framed as helpful rather than sold.

## SERP shape match

mixed

Based on `research/serp.md`: five product pages, three roundups, one explainer, no single dominant
shape. The post takes the mixed shape deliberately — short definitional opening (matching the
Microsoft explainer that owns the informational sub-intent), then numbered how-to steps (the shape
nobody in the top nine offers), then a use-case-tagged tool section (the pattern the highest-ranking
genuine article uses), and it never becomes a scored ranking.

## Title candidates (3 options)

1. `AI Note-Taking: A 5-Step Workflow That Actually Sticks`, 53 chars, tone: practical and
   process-led; "actually sticks" carries the retention promise without over-claiming.
2. `AI Note Taking for Students: What Works, What Doesn't`, 52 chars, tone: honest and
   audience-named; strongest audience signal, but narrows the secondary meeting-notes reader out.
3. `AI Note-Taking: How to Use AI Without Losing Recall`, 51 chars, tone: cautionary; leads with the
   risk rather than the payoff, which reads more negative than this blog's warm register.

## Recommended title

`AI Note-Taking: A 5-Step Workflow That Actually Sticks`

Rationale: the target keyword leads, it promises the one thing the whole SERP is missing (a workflow
rather than a shopping list), and "actually sticks" signals the honest retention angle without
promising a memory benefit the evidence in `facts.md` does not support.

## Slug

`ai-note-taking`

Validation: target keyword only, kebab-case, no year, no trigger words. Matches
`blog-ops/content-plan.md` row 10.

## Meta description (draft)

`AI can transcribe and summarize your notes, but it shouldn't do your thinking. Here's the 5-step AI note-taking workflow I use, and where it breaks.`

(147 characters.)

## Angle

Every result on this SERP either sells an AI note-taker or ranks twelve of them, and all of them
quietly assume the goal is to stop taking notes. This post takes the opposite position: AI is
brilliant at the mundane half of note-taking (capturing, transcribing, tidying, finding things
again) and genuinely bad at the half that makes notes worth having (deciding what matters and
putting it in your own words). So it hands the reader one concrete five-step workflow that automates
the first half and deliberately protects the second, names which kind of tool fits which job without
ranking them, and is honest about the three things that burn people: shaky transcripts, summaries
nobody re-reads, and hitting record without permission. The reader should finish with a workflow they
can run at their next lecture or meeting, not a shortlist to go shopping with.

## Key sections (preview, becomes the outline in Phase 2)

1. What AI note-taking actually does (and what it doesn't) — the plain-English explainer, including
   the transcription vs. summarization vs. note-taking distinction and the extractive-vs-abstractive
   translation.
2. Why you still take the notes, and AI does the rest — the retention argument, framed honestly per
   `facts.md` (the mechanism is the processing, not the pen) and validated by the r/askanything
   debate.
3. My 5-step AI note-taking workflow — capture, transcribe, summarize, organize, review. Numbered
   H3s, one per step, each with the thing to actually do.
4. Which AI note-taking tool fits which job — grouped by job (live meetings, lectures and long
   recordings, source-grounded Q&A, an app you already use, a hardware recorder), no ranking, no
   prices, with what each kind is bad at.
5. Where AI note-taking still falls down — transcript accuracy on accents and crosstalk, summaries
   that emphasize the wrong thing, the never-re-read trap, and the tool-overwhelm fatigue.
6. Before you hit record: permission, policy and privacy — ask first, check the rules where you are,
   check your employer or campus policy, and read the actual privacy policy rather than the landing
   page.
7. Conclusion / CTA — one crisp line plus the free AI tools link.
8. FAQ

## Product references planned

- **Intro expertise statement:** one clause on building her own AI productivity tools with OpenAI —
  credibility, not a pitch. No tool name in the intro.
- **Body mentions:** one mention only, in the summarize step of the workflow (step 3), where the
  Text Summarizer is the literal job being described. Framed as "the one I built for this" and
  optional.
- **Conclusion CTA:** "Try my free AI tools" → https://olgapak.com/ai-tools, action anchor, no
  feature re-list, no prices.

## Internal links planned

| Target slug | Anchor text (draft) | Where in the post |
|---|---|---|
| digital-vs-paper-notes | whether digital or paper notes work better | intro |
| cornell-note-taking-method | the Cornell note-taking method | §2 (why you still take the notes) |
| how-to-take-notes-on-ipad | taking notes on an iPad | §3, capture step |
| note-taking-methods | note-taking methods | §3, organize step |
| how-to-plan-your-week | plan your week | §3, review step |

Five internal links, one in the intro (the cap is two), each placed in the section where its topic is
actually discussed. Silo direction is correct: this post links UP to the `note-taking-methods` pillar.

## External links planned

| Source | Claim it backs | URL |
|---|---|---|
| Mueller & Oppenheimer lecture-note study (Psychological Science) | laptop note-takers recorded more of the lecture word for word and did worse on conceptual questions | https://journals.sagepub.com/doi/full/10.1177/0956797614524581 |
| 2019 replication + meta-analysis (Educational Psychology Review) | performance did not consistently differ between the groups, and the effects favoring longhand were small and not statistically significant | https://link.springer.com/article/10.1007/s10648-019-09468-2 |
| Cornell University Learning Strategies Center | the cue-and-recite loop the Cornell system is built around | https://lsc.cornell.edu/notes.html |
| Google NotebookLM help docs | it answers only from the sources you upload and links each answer back to the passage | https://support.google.com/notebooklm |
| `[EXTERNAL_LINK_NEEDED:]` slot | speech-recognition accuracy varies with accent, crosstalk and audio conditions | to be resolved at Stage 3d (peer-reviewed speech-recognition study or a .gov/.edu benchmark; the 2020 PNAS disparities study is a candidate, unconfirmed) |

Every row is allowlist-class (academic publisher, `.edu`, official platform docs) and none appears in
`research/serp.md`'s top-10, so no link passes equity to a ranking competitor. `research/serp.md`
§"Citations harvested from competitors" found ZERO usable citations in the competitor set, which is
why all four confirmed rows are independently sourced (three of them already used and verified in
this blog's own published posts).

## Facts / data to feature prominently

- The honest retention finding: laptop note-takers transcribed more and did worse on conceptual
  questions, but the 2019 replications found the effect small and not statistically significant. The
  post's claim is about the *processing*, not the keyboard, and never that handwriting beats typing.
- The five-step model AI note-takers follow (capture, transcribe, structure, summarize, sync), with a
  failure mode at each step — restated in Olga's words as the post's own workflow.
- The r/askanything consensus: record it, then write the notes yourself. "A lot of learning happens
  during the note taking process. If you farm out that process, you're missing out."
- The multi-vendor data pipeline: one recording can pass through three or four companies, and a
  landing page saying "we never train on your data" is not the same as the privacy policy.
- The honest counterweight, from the highest-engagement thread in research: the record-don't-write
  approach is job-dependent, and plenty of employers ban recording tools outright.

## Image plan (high-level)

- **Featured:** the "AI does the mundane half, you do the thinking half" split, concept-led, type:
  `ai-prompt` (per `images.featured_default` and `custom-instructions.md` §Image style — the featured
  slot is always `ai-prompt` for this blog).
- **In-post images:** 4, mixed. One `remotion` diagram for the five-step workflow (a genuine
  process diagram, which is what `remotion` is for). One `remotion` comparison for
  "AI handles / you handle". One `ai-prompt` scene for the tool-choice section. One `ai-prompt`
  scene for the permission-and-privacy section. No `screenshot` slots planned: this post is not
  about one product's interface, and a screenshot of a vendor UI would date fast and read as an
  endorsement.

## Length target

2,300–2,700 words (roll-up target 2,550). Justification: the five deep-fetched SERP results run
1,297 / 1,769 / 2,112 / 3,052 / 5,226 words (median 2,112, mean 2,691), and `blog-craft.md` §Post
type matrix puts `how_to` at 1,500–2,500. This post carries an explainer, a five-step workflow, a
tool section and a privacy section, so it sits at the top of the how-to band and inside the SERP's
own range.

## Tone hooks

- Lead with the reader's actual failure state, not the technology: falling behind a fast lecturer,
  or looking at a transcript nobody will ever read again.
- Translate every piece of jargon on first use — transcription, summarization, extractive versus
  abstractive — per `audience.md` §Reading posture. No unexplained acronyms.
- Stay warm about AI while being blunt about its failures. The register is "here's what worked for
  me and where it let me down", not a warning label and not a sales page.
- Name the tool fatigue out loud. Readers are drowning in near-identical app recommendations
  (`research/x.md`: "another one of those vibe coded AI note-taking apps... they're all the same"),
  and saying so earns the right to give a workflow instead of a twelfth list.
- Never imply AI can do the learning. The line to hold: it can carry the notes, it cannot carry the
  understanding.

## Open questions (resolved or flagged for plan review)

- [ ] **Tool naming depth.** The plan names tool *categories* plus a handful of widely-known
  examples, with no ranking and no prices, to stay out of `ai-study-tools`' lane. Flagging for the
  reviewer: if this reads as too thin for a reader who came to the SERP shopping, the fix is more
  detail per category, not a scored list.
- [ ] **The transcription-accuracy citation is unresolved.** No source in the research supplies a
  number, so §5 carries an `[EXTERNAL_LINK_NEEDED:]` that Stage 3d must resolve or the claim gets
  softened to a qualitative one. Flagged so it is not mistaken for an oversight.
- [ ] **Autopilot run, no human intake.** Every answer in `brief.md` came from
  `blog-ops/content-plan.md` row 10 plus the profile docs; the assumptions are listed in that file's
  §Autopilot assumptions. The angle in particular (AI assists, does not replace) was the editor's
  call, not the human's.

## Changes requested by human (log)

(none yet)
