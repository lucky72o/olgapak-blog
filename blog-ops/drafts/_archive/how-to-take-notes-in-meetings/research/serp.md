# SERP Research: how to take notes in meetings

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP raw fetches under `_raw/`. Never hallucinate, cite every claim.

## Query metadata

- Search engine: Google
- Query used: how to take notes in meetings
- Date searched: 2026-09-08
- Top N results studied: 6 (of 7 captured; rank 2 is a Reddit thread, deliberately skipped here and covered by the Reddit source instead)
- Browser session: not recorded in raw files
- Any SERP features observed: People Also Ask. No AI Overview, no Shopping.

## SERP shape (inferred)

mixed

Reasoning: three SaaS content-marketing guides (Asana, Slack, Teamwork) share a near-identical "what are meeting notes / how to take them / template" structure, but the SERP also seats one opinionated practitioner essay (Medium, rank 1), one non-corporate framing essay ("five levels", rank 4), and one facilitation-practice blog (Duck Alignment Academy, rank 5) plus a Reddit thread (rank 2). It's how-to-numbered at the SaaS end and informational/essay at the independent end, source: `_raw/_serp.json`, `_raw/_serp_selection.md`.

## Search intent

- Dominant intent: informational (how-to)
- Evidence: 6 of 7 captured results are instructional guides teaching a note-taking method; People Also Ask is present; no Shopping block, no AI Overview, source: `_raw/_serp.json`, `_raw/_serp_selection.md`.
- Secondary intent: commercial-adjacent. Three of the six analyzed results (Asana, Slack, Teamwork) are vendor content marketing that pivots the "how" into "use our tool/template," source: `_raw/03-asana-com.json`, `_raw/06-slack-com.json`, `_raw/07-teamwork-com.json`.
- Implication for our post structure: readers want a usable method plus a copyable template, not a product pitch. The SaaS pieces earn their rankings on structural completeness (before/during/after, template, AI section), not on original insight, this is exactly the gap the independent essays (Medium, smallsheds.garden, Duck Alignment Academy) exploit with a stronger point of view.

## Selected results analyzed

### 1. How to take good meeting notes (Katie Riley, Medium/Envoy Design)
- URL: https://medium.com/@katierileyco/how-to-take-good-meeting-notes-bf49702a03c8
- Domain: medium.com
- SERP rank (1-10): 1
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2187
- Title formula: how_to
- Hook style (opening angle): opens with a personal anecdote (a boardroom meeting where a volunteer refuses to take notes with "I'm bad at taking notes") to reframe note-taking as a mindset problem, not a skill problem, before giving techniques.
- Top H2/section headings:
  - Like so many other things, it starts with your mindset.
  - Techniques for taking great meeting notes
  - An example in action
- Key data points cited:
  - No statistics; the piece is argument-and-anecdote led, source: https://medium.com/@katierileyco/how-to-take-good-meeting-notes-bf49702a03c8
- Strengths (what they do well):
  - Leads with "why" (mindset shift: notes exist to transmit information to others, not just for the note-taker) before "how," which is unusual for this SERP
  - Names concrete audiences the notes serve (non-attendees, future teams building on past decisions)
- Gaps / weaknesses (what they miss):
  - No template the reader can copy directly
  - No treatment of AI notetakers or the paper-vs-laptop trade-off

### 2. Meeting notes tips: How to take notes & track actions (Asana)
- URL: https://asana.com/resources/meeting-notes-tips
- Domain: asana.com
- SERP rank (1-10): 3
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2638
- Title formula: how_to
- Hook style (opening angle): opens with a "85% of Fortune 100 companies choose Asana" trust badge, then frames meetings as where decisions happen and notes as the mechanism for not losing them.
- Top H2/section headings:
  - What are meeting notes?
  - Benefits of taking good meeting notes
  - What to include in your meeting notes format
  - How to take meeting notes
  - 9 proven tips for taking better meeting notes
  - Taking meeting notes manually vs. with AI tools
  - How to turn meeting notes into action items
- Key data points cited:
  - "Research shows that taking notes by hand is better for long-term retention of conceptual information," citing a linked academic source, source: https://asana.com/resources/meeting-notes-tips (external link: https://journals.sagepub.com/doi/abs/10.1177/0956797614524581)
- Strengths (what they do well):
  - Explicit before/during/after step structure (Step 1-4)
  - Direct manual-vs-AI comparison section, which matches this post's planned trade-off discussion
- Gaps / weaknesses (what they miss):
  - Structurally exhaustive but generic; reads as a checklist assembled to cover every subtopic rather than a point of view
  - Ends by funneling into "centralize in Asana," so the AI/tooling framing is not neutral

### 3. Five levels of note-taking in meetings (Joep Schuurkes)
- URL: https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/
- Domain: smallsheds.garden
- SERP rank (1-10): 4
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 1307
- Title formula: informational
- Hook style (opening angle): opens with genuine bafflement at meetings where nobody takes notes, then builds a five-level maturity model (no notes → personal notes → shared-after → shared-during → collaborative → notes as part of the meeting).
- Top H2/section headings:
  - level 0: no one takes notes
  - level 1: take notes for yourself
  - level 2: one person takes notes and shares afterwards
  - level 4: collaborative note-taking
  - level 5: note-taking is part of the meeting
- Key data points cited:
  - Quotes Johanna Rothman's "Modern Management Made Easy": "If a meeting is essential, it will have an agenda. It will have minutes. It will have a list of action items," source: https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/ (external link: https://leanpub.com/b/modernmanagementmadeeasy)
- Strengths (what they do well):
  - The only result on this SERP naming the power dynamics of note-taking directly: "Note-taking tends to be seen as a low-status job... So if you ask who wants to take notes, you're asking if someone wants to reduce their status in the meeting"
  - Names that taking notes for yourself helps focus even if you never reread them, close to this post's attention-focused thesis
- Gaps / weaknesses (what they miss):
  - No template, no explicit before/during/after routine, no AI-notetaker discussion
  - Framed for a facilitation/tech-industry reader, not explicitly for early-career professionals or students

### 4. How to take notes at meetings (Duck Alignment Academy, Ben Cotton)
- URL: https://duckalignment.academy/meeting-notes/
- Domain: duckalignment.academy
- SERP rank (1-10): 5
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 1143
- Title formula: how_to
- Hook style (opening angle): opens from open-source project management context (chapter 6 of the author's book), positions notes as necessary because "there's no chatbot to record" for in-person/video meetings that lack a recording tool.
- Top H2/section headings:
  - Before the meeting
  - During the meeting
  - After the meeting
- Key data points cited:
  - No statistics; practitioner advice grounded in the author's own open-source governance experience, source: https://duckalignment.academy/meeting-notes/
- Strengths (what they do well):
  - Explicitly separates who takes notes from who leads the meeting: "if you're the one leading the meeting, it should not be you. It's very difficult to facilitate discussion and take notes on that discussion at the same time," directly useful for this post's "when you are the one running the meeting" trade-off
  - Names how to handle confidential information in notes, a gap-filler not covered elsewhere on this SERP
- Gaps / weaknesses (what they miss):
  - No downloadable template
  - No AI-notetaker treatment at all (2024 publish date, predates the current AI-notetaker wave)

### 5. From Huddle to Action: How to Take Effective Meeting Notes (Slack)
- URL: https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes
- Domain: slack.com
- SERP rank (1-10): 6
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2353
- Title formula: how_to
- Hook style (opening angle): opens by naming the productivity paradox of meetings (opportunities for collaboration, but also frequent lack of post-meeting clarity), then promises a full "capture through action" pipeline.
- Top H2/section headings:
  - What are meeting notes?
  - How to take meeting notes effectively
  - Choosing the right note-taking tools and techniques
  - Strategies for writing efficient meeting notes during meetings
  - Best practices for organizing meeting notes post-meeting
  - How to elevate your note-taking process with technology
- Key data points cited:
  - "While research shows that writing notes by hand is helpful for memory recall and conceptual understanding, digital note-taking is equally important..." linking to Scientific American, source: https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes (external link: https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/)
  - Names the Cornell note-taking method explicitly, linking to Cornell's own page, source: same (external link: https://alumni.cornell.edu/cornellians/cornell-notes/)
- Strengths (what they do well):
  - Balanced framing of paper vs. digital rather than picking a side outright
  - Names two concrete named methods (Cornell, mind mapping) with real citations behind the hand-writing claim
- Gaps / weaknesses (what they miss):
  - Heavily pivots toward "elevate with technology" / Slack huddles and AI (Agentforce) in the back half, a soft product pitch
  - No treatment of "when you are the one running the meeting"

### 6. How to take flawless meeting notes (Free template included) (Teamwork.com)
- URL: https://www.teamwork.com/blog/how-to-take-meeting-notes/
- Domain: teamwork.com
- SERP rank (1-10): 7
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2557
- Title formula: transactional (template-led)
- Hook style (opening angle): opens with a "summary and key takeaways" bullet block, upfront and scannable, then a Chris Fussell (McChrystal Group) quote on deliberate meetings.
- Top H2/section headings:
  - 5 items that should be covered in your meeting notes
  - 8 tips for taking effective meeting notes
  - Types of meeting notes
- Key data points cited:
  - "Improves memorization, word recognition, and conceptual understanding" and "Improves accuracy of note taking (compared to typing on mobile devices)" as benefits of handwriting, linking to a research summary, source: https://www.teamwork.com/blog/how-to-take-meeting-notes/ (external link: https://observatory.tec.mx/edu-news/study-reveals-the-advantages-of-taking-notes-by-hand/, and a separate link to https://www.frontiersin.org/articles/10.3389/fnbeh.2021.634158/full for the mobile-typing accuracy comparison)
  - Quote: "As a leader, you must consistently drive effective communication. Meetings must be deliberate and intentional - your organizational rhythm should value purpose over habit and effectiveness over efficiency." — Chris Fussell, Managing Partner at McChrystal Group, source: https://www.teamwork.com/blog/how-to-take-meeting-notes/
- Strengths (what they do well):
  - Explicit 5-item "what to capture" checklist (agenda, action items, team ideas, key questions, main decisions) close to this post's planned template categories
  - Names three concrete note-taking methods (Cornell, Quadrant, Mind Mapping) with brief descriptions of each
- Gaps / weaknesses (what they miss):
  - Front-loaded free-template CTA feels like lead-gen; body content secondary to the download hook
  - No discussion of the mindset/structural-failure framing this post leads with

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| how (to) | 6 | every analyzed result frames itself as a how-to |
| notes | 7 | universal, expected for the keyword |
| meeting(s) | 7 | universal |
| effective / flawless / good | 3 | Slack "effective," Teamwork "flawless," Medium "good" — quality-modifier framing dominant over listicle framing |
| template | 1 (title) + implied in 2 more bodies | Teamwork titles it explicitly; Asana and Slack both surface templates inside the body |
| tips | 1 | Asana |

## Audience inferences

Based on the shape of the SERP and the angle competitors take:

- Primary audience: early-career professionals sitting in meetings, per this blog's brief. The SaaS pieces (Asana, Slack, Teamwork) target a generalist "anyone who attends meetings" reader with no seniority assumed, and the projectmanagement-adjacent framing of several pieces implies junior-to-mid professionals learning the skill, consistent with brief.md's target audience.
- Secondary audience: people specifically responsible for running or facilitating meetings — Duck Alignment Academy and smallsheds.garden both write from a facilitator/PM vantage point, source: `_raw/05-duckalignment-academy.json`, `_raw/04-smallsheds-garden.json`.
- Reader knowledge level: beginner to intermediate. No result assumes prior familiarity with a specific method; each explains Cornell/Quadrant/mind-mapping from scratch when naming them.
- Reader intent: informational/how-to, with a secondary transactional pull toward "download the template" on three of six results.

## Angle opportunities

- None of the six analyzed results leads with the "transcription vs. deciding what matters" structural framing this blog's brief specifies as the core thesis. Medium comes closest with a mindset argument, but stops at "why notes matter," not "why most note-taking attempts fail structurally," source: `_raw/01-medium-com.json`.
- No result gives a single copy-paste template that combines decisions + action items (owner + date) + open questions + context in one block; Teamwork's 5-item list and Asana's "what to include" section are the closest partial matches but neither packages it as a ready-to-paste artifact, source: `_raw/07-teamwork-com.json`, `_raw/03-asana-com.json`.
- Only one result (smallsheds.garden) even gestures at the "you are the one running the meeting" case, and it does so as a maturity-level framework rather than a direct callout with different advice for the facilitator role; Duck Alignment Academy explicitly separates the roles but doesn't build the trade-off out further, source: `_raw/04-smallsheds-garden.json`, `_raw/05-duckalignment-academy.json`.
- No result names the "five-minute post-meeting pass" as the single highest-leverage habit; the closest analog on this SERP set is buried inside Asana's four-step process without being called out as the most important step, source: `_raw/03-asana-com.json`. (Note: the Reddit source has a much sharper version of this exact claim, see `research/reddit.md`.)

## Avoid pitfalls

- The "Cornell Method / Quadrant Method / mind mapping" trio of named note-taking methods is done by both Slack and Teamwork already; naming these as if novel would read as commoditized, source: `_raw/06-slack-com.json`, `_raw/07-teamwork-com.json`.
- Generic "what are meeting notes vs. meeting minutes" definitional throat-clearing opens three of six results (Asana, Slack, and implicitly Teamwork's summary block); this post's audience (early-career, time-pressed) doesn't need this distinction belabored up front.

## Use-in-post facts

### Statistics
- Handwriting is associated with better memorization, word recognition, and conceptual understanding, and better accuracy than typing on mobile devices, per a research summary Teamwork.com cites, source: https://www.teamwork.com/blog/how-to-take-meeting-notes/ (their cited primary link: https://observatory.tec.mx/edu-news/study-reveals-the-advantages-of-taking-notes-by-hand/)
- Writing notes by hand is linked to better memory recall and conceptual understanding, per a research claim Slack cites, source: https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes (their cited primary link: https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/)
- Asana cites that taking notes by hand is better for long-term retention of conceptual information, linking to a peer-reviewed study, source: https://asana.com/resources/meeting-notes-tips (their cited primary link: https://journals.sagepub.com/doi/abs/10.1177/0956797614524581)

### Quotes
- "If a meeting is essential, it will have an agenda. It will have minutes. It will have a list of action items, and someone will manage them so that people are accountable for their action items." — Johanna Rothman, quoted via smallsheds.garden, source: https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/
- "Note-taking tends to be seen as a low-status job... So if you ask who wants to take notes, you're asking if someone wants to reduce their status in the meeting." — Joep Schuurkes, source: https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/
- "If you're the one leading the meeting, it should not be you [taking notes]. It's very difficult to facilitate discussion and take notes on that discussion at the same time." — Ben Cotton, source: https://duckalignment.academy/meeting-notes/
- "As a leader, you must consistently drive effective communication. Meetings must be deliberate and intentional - your organizational rhythm should value purpose over habit and effectiveness over efficiency." — Chris Fussell, Managing Partner at McChrystal Group, quoted via Teamwork.com, source: https://www.teamwork.com/blog/how-to-take-meeting-notes/

### Named examples
- The Cornell note-taking method (divide the page into notes/questions/summary sections), named by both Slack and Teamwork as a concrete technique, context: useful as a named alternative structure to compare against this post's own template, source: https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes and https://www.teamwork.com/blog/how-to-take-meeting-notes/

## Competitor product mentions

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| Otter.ai / auto-transcription tools | 1 (Medium) | example of a transcription tool distinct from note-taking |
| Slack (own product, incl. Agentforce/huddles) | 1 (Slack, self-referential) | positions itself as where notes and follow-up live |
| Asana (own product) | 1 (Asana, self-referential) | positions itself as where action items get tracked |
| Teamwork.com (own product, incl. TeamworkAI) | 1 (Teamwork, self-referential) | positions itself as the template + task home |

## Citations harvested from competitors

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/ | https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes | Writing notes by hand is helpful for memory recall and conceptual understanding | auth_allowlist (major publication) |
| https://journals.sagepub.com/doi/abs/10.1177/0956797614524581 | https://asana.com/resources/meeting-notes-tips | Taking notes by hand is better for long-term retention of conceptual information | primary_source (peer-reviewed journal, SAGE Publications) |
| https://www.frontiersin.org/articles/10.3389/fnbeh.2021.634158/full | https://www.teamwork.com/blog/how-to-take-meeting-notes/ | Handwriting improves accuracy of note taking compared to typing on mobile devices | primary_source (peer-reviewed journal, Frontiers) |
| https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand | https://www.teamwork.com/blog/how-to-take-meeting-notes/ | Handwritten notes produce results that are "already prioritized and summarized" (the note-taking process forces prioritization) | auth_allowlist (BBC, major publication) |
| https://alumni.cornell.edu/cornellians/cornell-notes/ | https://slack.com/intl/en-gb/blog/productivity/how-to-take-effective-meeting-notes | Describes the official Cornell note-taking method | auth_allowlist (.edu-affiliated official source for the method's name) |
| https://leanpub.com/b/modernmanagementmadeeasy | https://smallsheds.garden/blog/2025/five-levels-of-note-taking-in-meetings/ | Source of the "essential meetings have an agenda, minutes, and tracked action items" claim, quoting Johanna Rothman's book | claim_only_in_competitor (self-published book sales page, not an independent primary source; treat the underlying claim as attributable only to Rothman via the smallsheds.garden essay, don't link the leanpub sales page) |
| https://observatory.tec.mx/edu-news/study-reveals-the-advantages-of-taking-notes-by-hand/ | https://www.teamwork.com/blog/how-to-take-meeting-notes/ | Summarizes several studies on handwriting benefits for memorization/word recognition/conceptual understanding | primary_source (Tecnológico de Monterrey's research news outlet, summarizing named studies; treat as a secondary summary of primary studies, still independently credible) |

Note: the Frontiers and SAGE journal links above are the strongest primary-source candidates for the brief's specific interest in "attention, memory, note-taking by hand vs. typing" claims. The Scientific American and BBC Worklife links are solid allowlist-class alternatives if a lighter-weight citation is preferred over a raw journal DOI link.

## Open questions for editor

- None of the fetches failed; all 6 analyzed URLs returned `fetchStatus: ok`.
- Rank 2 (the Reddit thread `r/projectmanagement` "How do you take notes in meetings?") was deliberately skipped here per `_serp_selection.md` and is covered instead in `research/reddit.md` as `reddit-00-projectmanagement.json`; that thread ranking on page 1 of Google is itself a signal that this audience actively searches for peer discussion, not just guides, worth flagging to the editor when weighing SERP-vs-Reddit angle synthesis.
- Whether to cite the raw journal DOI (SAGE/Frontiers) directly or route through the more readable Scientific American/BBC summaries is an editorial call, both options are captured above.
