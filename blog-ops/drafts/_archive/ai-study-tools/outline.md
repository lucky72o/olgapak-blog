# Outline: ai study tools

Written by: blog-editor (Stage 2).
Sources: `blog-ops/drafts/ai-study-tools/plan.md` (approved at Stage 1c.5), `facts.md`, `standards/blog-craft.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/product.md`.
Read by: blog-writer (Stage 3a) during drafting; blog-reviewer at Stage 3b for structural alignment checks.

## Status

approved

## Final title

`9 Best AI Study Tools for Students in 2026, Ranked`

Source: `plan.md` §Recommended title. 49 characters, target keyword early, "best" present, odd-number prefix, title case, no dash.

## Final slug

`ai-study-tools`

## Final meta description

`Most "best AI study tools" lists are written by the tools themselves. Here are 9 picks students really use, what each free tier gives you, and when to skip AI.`

159 characters.

## Author voice

olga

Warm, first-person, encouraging, lightly self-deprecating. Punchy short sentences mixed with longer explanatory ones. Beginner-friendly: every AI term gets a plain-language gloss on first use.

## Word count target

2,000 to 3,000 words, planning to ~2,400 (body prose, excluding FAQ).

## Intent

transactional

## Category

`EdTech`

---

## Intro structure (4 paragraphs max)

### P1, Hook

- Hook sentence (draft): `Search "AI study tools" and the first four results all call themselves the best one, which is a strange thing to discover when you are trying to pick just one.`
- Fact anchor: 6 of the 9 top Google results for this keyword are the tools' own homepages, not articles. Source: `facts.md` §Verified, "The SERP's own shape", observed 2026-09-06 from `_raw/_serp.json`.
- Writer note: the target keyword must appear in this paragraph. Keep to 1 to 2 sentences.

### P2, Expertise statement

- Expertise sentence (draft): `I went back to studying as an adult in the middle of a career change, and I build my own small AI tools now, so I read these product pages the way a builder reads them: looking for what the free plan actually stops you doing.`
- Source: `voice.md` §Credibility message + §Personal-anecdote bank (the Master's pivot; building AI tools on OpenAI).
- **HARD CONSTRAINT (from `plan.md` §Open questions):** this sentence establishes perspective, NOT hands-on testing. No sentence anywhere in this post may imply Olga personally tested the nine tools, because no hands-on testing happened. Write around it.

### P3, Intro internal links (≤2, contextual)

| Anchor text | Target slug | Placement |
|---|---|---|
| digital and paper notes | `digital-vs-paper-notes` | intro |
| note-taking method that fits how you study | `note-taking-methods` | H2 2 |
| Cornell note-taking method | `cornell-note-taking-method` | H2 4 |
| plan your study week | `how-to-plan-your-week` | H2 8 |
| time blocking | `time-blocking` | H2 8 |

Five internal links total, inside the 3 to 5 range. Exactly ONE in the intro, woven into a sentence, never a "see also" stack. All root-relative with NO trailing slash (`blog.trailing_slash: false`), e.g. `[digital and paper notes](/digital-vs-paper-notes)`.

**The first internal link must appear before the first external link.** The intro link satisfies this.

### P4, Preview

- Preview sentence (draft): `This guide covers how I chose these nine, what each one is genuinely good at, where every free plan runs out, and the times you are better off closing the laptop.`

---

## Body sections

### H2 1: `So What Are the Best AI Study Tools, Really?`

- Covers: the honest method, and why nearly everything the reader will find on this search is advertising. This section earns the reader's trust or the rest of the post does not land.
- Key fact: 6 of the 9 top results are vendor homepages; only 2 are editorial roundups and neither is independent, one ranks its own product #1 with no disclosure on the page, the other promotes its own $29/month membership on the same page. Source: `facts.md` §Verified, from `_raw/05-remnote-com.json` and `_raw/07-therundown-ai.json`.
- Key fact: the two roundups overlap on only 2 tools out of a combined 15, and neither names any of the five vendors outranking them. Source: `facts.md` §Verified.
- **State the method plainly and in the first person:** picks come from what students report actually using in real discussion threads, cross-checked against what each tool's own documentation commits to and what its free tier really includes. Do NOT claim a hands-on test.
- Include the short list of what got a tool EXCLUDED (tools that only surfaced as creator self-promotion in comment threads; tools whose "free" plan has no stated limit anywhere).
- Approximate word count: 280

### H2 2: `Best AI Study Tools for Making Sense of Dense Readings`

- Covers: the highest-frequency job in the research. Students overwhelmingly describe using AI to break down confusing source material, then rewriting it themselves.
- Key quote to anchor the section: "I mostly use AI for breaking down readings because some professors write in the most confusing way possible... then rewrite everything in my own words after." u/Im-Spartaque, source: https://www.reddit.com/r/AIToolsAndTips/comments/1sronyp/what_free_ai_tools_are_you_actually_using_for/ (`facts.md` §Quotes)
- Internal link here: `note-taking-methods`, anchor "note-taking method that fits how you study", because tool output is useless unless it lands in a system.
- Jargon to translate on first use: "grounded in your own sources" (the tool only answers from the documents you gave it, so it is far less likely to invent something), "hallucination".
- Approximate word count: 330 (two H3s)

#### H3 2.1: `NotebookLM, best for turning your own readings into something you can question`

- The spine pick. Free, and grounded in material you upload rather than the open web.
- Evidence it earns the top slot: named in BOTH editorial roundups, most-praised tool across 4 of the 5 Reddit threads analyzed, and named on ZERO of the five AI-study-startup homepages, because a vendor will not promote a free competitor. Source: `facts.md` §Verified, "Which tools are actually named where".
- Usage tip worth stealing, quote it: "NotebookLM, don't upload a whole unit (trash in, trash out). One chapter per file to get maximum details." u/eveno7o, source: https://www.reddit.com/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/
- **Cons, do not skip these:** it retrieves well but reasons poorly, quote u/dantheadmin ("it functions as an excellent retrieval model, but it suckssss in the reasoning dept", clean the typo to "sucks"), source: same r/PromptEngineering thread. Also carry the honest brand objection: some people will not adopt a Google product because Google discontinues things, quote u/luvv2ride.
- Best for: anyone with a pile of PDFs, slides or papers for one course.
- Free tier: describe it in DURABLE terms ("a genuinely usable free tier"). The specific quota numbers circulating on Reddit are unverified, so if the writer wants numbers they must be marked `[VERIFY: <claim> | source: research/reddit.md r/PromptEngineering thread, u/AdCold1610 comment, unconfirmed against Google's own docs]` for Stage 3d to confirm at `support.google.com` or delete.
- External link: NotebookLM official page (`authoritative_allowlist`, official platform docs).

#### H3 2.2: `Claude, best for working through one long, dense document`

- Positioned against tool-hopping, which is a real reader pain: one capable general model used well often beats five specialist apps.
- Evidence: the Reddit contrarian who argues exactly this, u/avc2539 ("Claude is hands down the best value for money AI there is... I start from my problem and fine tune it till I find a satisfactory solution"), source: https://www.reddit.com/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/. Attribute as one student's opinion, not a benchmark.
- Cons: it is not grounded in your sources by default the way NotebookLM is, so it can state something confidently that your textbook does not say.
- Best for: long readings where you want an explanation rather than a summary.
- External link: Claude's official product page (firm commitment per `plan.md` §External links).

### H2 3: `Best AI Study Tools for Lectures You Cannot Keep Up With`

- Covers: the capture problem. You cannot take good notes and follow a fast lecture at the same time.
- Key quote anchoring the section: the r/studytips post that ranks on page 1 of Google for this very keyword, "I've always studied best through questions, not by reading PowerPoint slides or copying notes... you can upload your lecture slides to Gemini and ask it to generate questions based on them, and... wow." u/Any-Cap-7752, source: https://www.reddit.com/r/studytips/comments/1ps962f/whats_your_best_free_ai_tool_to_make_studying/
- Approximate word count: 300 (two H3s)

#### H3 3.1: `Gemini, best for turning lecture slides into practice questions`

- The exact use case from the thread above. Upload the deck, ask for questions rather than a summary.
- Best for: anyone whose course runs on slide decks.
- Cons: it answers from general knowledge as well as your upload, so it can drift off your syllabus. Say so plainly.
- External link: Gemini's official page (firm commitment per `plan.md`).

#### H3 3.2: `Otter.ai, best for capturing the lecture while you actually listen`

- Transcription so attention goes to understanding rather than stenography. Named in the RemNote roundup. Source: `facts.md` §Verified, "Which tools are actually named where".
- Cons: a transcript is raw material, not revision. It only helps if something downstream turns it into questions. Point forward to H2 4.
- **Check before recommending:** recording a lecture may need the lecturer's permission. One sentence, no lecturing.
- Best for: fast lecturers and long seminars.
- External link: Otter.ai official page (firm commitment per `plan.md`).

### H2 4: `Best AI Study Tools for Turning Material Into Recall Practice`

- Covers: the part that actually makes things stick, and the point at which AI can quietly start doing the learning FOR you. Set up the tension here so H2 7 lands.
- Key fact: every AI-study startup ships the same four features (flashcards, quizzes, an AI tutor, notes), so the differentiation is packaging, not capability. Mindgrasp's own page maps them to real learning-science ideas (Active Recall, Practice Testing, Spaced Repetition, Self-Explanation), and those techniques long predate AI. Source: `facts.md` §Named examples.
- Internal link here: `cornell-note-taking-method`, anchor "Cornell note-taking method", the method AI-generated questions feed straight into.
- Jargon to translate: "active recall" (testing yourself instead of rereading), "spaced repetition" (revisiting material at widening intervals).
- Two reusable prompts, both from `facts.md` §Quotes, presented as prompts and NOT wrapped in their original "an MIT student" / "top Stanford students" framing, which is unverifiable:
  - "What are the 5 core concepts this week's content is built on, and how do they connect to what I studied last week?"
  - "What would I need to genuinely understand about this material to be able to teach it to someone with zero background in this subject?"
- Approximate word count: 330 (two H3s)

#### H3 4.1: `ChatGPT Study Mode, best for unblocking when a concept will not land`

- Best for: the 11pm "I have read this paragraph four times" moment.
- Named in The Rundown AI's directory. Source: `facts.md` §Verified.
- Cons, and this is the important one: the easiest tool in the list to misuse. Getting the answer is not the same as being able to produce it in an exam. Frame warmly, not as a telling-off.
- External link: OpenAI's official page for the study/guided-learning mode (`primary_source`). This is a citation-style row and is first to be cut if the external-link count needs trimming.

#### H3 4.2: `Khanmigo, best when you want a tutor that will not just hand you the answer`

- The only tool besides NotebookLM named in BOTH editorial roundups, and positioned in both as Socratic: it asks guiding questions instead of supplying answers. Source: `facts.md` §Verified.
- Why it earns a slot: it is the structurally safest pick on academic integrity. The tool's design does the work the reader's willpower otherwise has to.
- Cons: slower, and sometimes that is the point. Coverage is strongest in school-level subjects.
- External link: Khan Academy's own page (`primary_source`).

### H2 5: `Best AI Study Tools for Checking Sources and Getting the Maths Right`

- Covers: the two jobs where a general chatbot is actively the wrong instrument. This section is the practical half of the "when AI is wrong" argument, placed before the philosophical half.
- Key fact anchor: the whole category's marketing runs on unverifiable numbers. The four top-ranking vendors claim 3M, 5M, 8M and 10M users respectively, none independently verified, none defining what a "user" is. Source: `facts.md` §Statistics, vendor self-report tier. **Attribute explicitly every time: "Studley's own site says", "Turbo AI claims". Never state as fact, never aggregate.**
- Approximate word count: 290 (two H3s)

#### H3 5.1: `Perplexity, best for finding sources you can actually cite`

- Best for: the moment a chatbot invents a reference and you need a real one.
- Evidence: named in The Rundown AI's directory, and a chemistry undergraduate on Reddit describes exactly this stacking pattern, u/KevinTMT_c9 ("I daily converse with Gemini to sort out the framework and ideas, use Perplexity to search for materials"), source: https://www.reddit.com/r/AIToolsAndTips/comments/1sronyp/what_free_ai_tools_are_you_actually_using_for/
- Cons: a citation that exists is not a citation that says what you think it says. You still open it.
- External link: Perplexity's official page (firm commitment per `plan.md`).

#### H3 5.2: `Wolfram Alpha, best for STEM, where a chatbot guessing at arithmetic is the wrong tool`

- Named in the RemNote roundup. Source: `facts.md` §Verified.
- Why it earns a slot: it computes rather than predicts text. The clearest single illustration in the post of "match the tool to the job".
- Cons: no help at all with essays or reading, and the interface rewards knowing what to ask.
- External link: Wolfram Alpha official page (`primary_source`). Citation-style row, second to be cut if trimming is needed.

### H2 6: `The Paid All-in-Ones the Search Results Push (and What "Free" Means on Them)`

- Covers: the ninth pick, treated as a category rather than nine words of praise each. These are Studley, StudyFetch, Turbo AI and Mindgrasp, plus Evernote's AI features as the "you may already be paying for this" note. This is the post's most practically useful section.
- **LINKING RULE, non-negotiable:** these tools are NAMED but NOT hyperlinked. Every one of them ranks in the top 10 for this post's own target keyword, and `blog-craft.md` §"Forbidden external links" bars linking to them. No exceptions, including in an image caption or the FAQ.
- Key fact, the spine of the section: only 2 of the 5 vendor pages state what their free tier includes. Studley's free plan is a single study set, stated in its own FAQ. Evernote publishes an itemized table. StudyFetch, Turbo AI and Mindgrasp market "free" with no stated limit anywhere on the page and no reachable pricing page. Source: `facts.md` §Verified, "Free-tier transparency".
- Second key fact: StudyFetch's strongest-looking number, 92% of active users reporting grade improvements, comes from the company's own study of 1,000 of its own users during one exam period. Describe the footnote, not just the percentage. Source: `facts.md` §Statistics.
- The overclaim to quote and push back on, gently: Studley's own FAQ says "Who needs to pay for an overpriced tutor when you can get the same results with Studley AI for basically nothing... a lot more engaging and effective than a human tutor." Source: `facts.md` §Quotes. Quote it as category overclaim, never endorse.
- Useful context, one sentence: Studley runs a paid creator program, which is worth knowing when weighing enthusiastic coverage of it. Source: `facts.md` §Named examples.
- Prices: Studley's listed price and Evernote's free-tier contents may be stated, both were observed directly on 2026-09-06, but prefer durable framing where possible since prices move. NO price may be stated for StudyFetch, Turbo AI or Mindgrasp, none was published anywhere reachable and `brief.md` forbids inventing one.
- Best for: a student who genuinely wants one app for everything and will pay for it. Say that plainly, this section is not a hit piece.
- Approximate word count: 380

### H2 7: `When AI Is the Wrong Tool for Studying`

- Covers: the section nobody on page 1 will write. This is the post's differentiation and the reason it deserves to exist.
- **Tone is load-bearing.** Warm, never scolding. The argument is that struggling with material IS the learning, not that students using AI are cheating. `audience.md` §Language to avoid rules out moralizing as firmly as it rules out hustle-culture.
- Educator evidence, quoted as an ongoing debate and NOT as a research finding: "it kills the ability to problem solve and be creative... anything not on paper that's proctored in a classroom cannot be given the same weight in calculating grades." u/Adventurekitty74, source: https://www.reddit.com/r/Teachers/comments/1rwqaul/anyone_else_worried_about_cognitive_debt_new_mit/
- The more useful, nuanced counterpoint, give it more room than the alarmed one: "I saw this before AI was a thing. As soon as 1 to 1 Chromebooks came in, they Googled everything... Even with AI, they don't use it as a tool or 'thought partner' it's just fancy Google." u/Separate_District264, same thread.
- A second independent voice, on assessment design rather than cognitive cost: "I'm all for students using AI for studying. I just wouldn't have any take-home tests or writing assignments." Colin Wright, source: https://x.com/SwipeWright/status/2095275889474830413
- **HARD CONSTRAINT:** the "cognitive debt" MIT study is REJECTED in `facts.md` and was never verified at a primary source. The post may say educators are actively debating the cognitive cost of AI in classrooms and cite the discussion AS a discussion. It must NOT state any EEG, brain-activity, or study finding. If the writer wants the finding, it is `[VERIFY:]` with an honest source clause, and Stage 3d will confirm at an MIT-owned source or delete it.
- Give the reader three concrete "close the laptop" cases rather than a vague warning: first-pass problem sets in a subject you are graded on, anything you will be examined on without a device, and any assignment where the work IS the thinking.
- One sentence on academic integrity, stated once, plainly, without a lecture: these are study aids, and having AI produce graded work is a different thing entirely.
- Approximate word count: 330

### H2 8: `How to Build a Two-Tool Study Stack Instead of Collecting Ten Apps`

- Covers: the closing practical payoff, and the direct answer to the reader's actual pain, tool overwhelm.
- Key quote, the whole reason this section exists: "Most students aren't using one AI tool, it's a mix, ChatGPT for concepts, Notion AI for notes, Grammarly for writing. Real issue is everything's scattered." u/studyToolkit, source: https://www.reddit.com/r/studytips/comments/1s6mifv/best_ai_tools_college_students_are_actually_using/
- The recommendation: one tool grounded in your own material, plus one general model for explaining. Two. Then stop, and spend the time you saved on recall instead of setup.
- Internal links here: `how-to-plan-your-week` (anchor "plan your study week") and `time-blocking` (anchor "time blocking"), both genuinely contextual, this is the section about fitting study sessions into a week.
- Approximate word count: 260

---

## Closing CTA

- CTA angle: the reader picks two tools and starts this week. Then one soft, single-sentence mention that Olga builds small free AI tools of her own, with the Text Summarizer as the on-topic one for condensing a dense reading (Acronym Explainer in passing at most), linking the free AI tools page with an action anchor per `blog.md` §Primary CTA.
- ≤2 short paragraphs. NO feature re-list, NO price (the tools are free and have no pricing page, per `blog-craft.md` §Own-product pricing claims). Do not position them against the nine reviewed tools.
- ~100 words.

---

## FAQ block

Four questions, one per verified People Also Ask question captured in `facts.md` §"People Also Ask". No invented fifth.

- Q: `What is the best AI tool for studying?` → A direction: refuse the single-winner framing honestly, then answer anyway. NotebookLM for material you upload yourself, because it is free and grounded in your own sources; name the runner-up for explaining rather than retrieving.
- Q: `What is the best AI tool to learn?` → A direction: distinguish learning from retrieving. Point at the Socratic option (Khanmigo) as the one whose design makes you do the thinking, and repeat the two-tool stack in one line.
- Q: `Is ChatGPT good for studying?` → A direction: yes for unblocking a concept and generating practice questions, no for anything you will be examined on without a device. Reference H2 7 without repeating it.
- Q: `Are there any free AI study apps?` → A direction: yes, and the genuinely free ones are mostly not the ones advertising "free" hardest. Note that three of the top-ranking paid tools never state what their free plan includes. Durable framing, no quota numbers.

---

## Inbound internal links (existing posts → this post)

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| `note-taking-methods` | the pillar page's section on choosing a method; a sentence noting that AI tools can generate review questions from notes once a method is in place | AI study tools |
| `cornell-note-taking-method` | where the post covers generating review questions from the cue column | AI study tools for students |
| `how-to-take-notes-on-ipad` | the digital-tooling section, as a natural adjacent recommendation | best AI study tools |
| `digital-vs-paper-notes` | where the digital side's advantages are discussed | AI study tools |

Applied automatically at Stage 4b.5 (adapter §Staging step 5), before Gate 2, so the human reviews the complete cross-post change in the preview.

---

## External link plan

**Forbidden and enforced throughout:** no link to any top-10 SERP URL for this keyword. That bars studley.ai, studyfetch.com, turbo.ai, mindgrasp.ai, ask-maeve.com, the Evernote page, RemNote's roundup and The Rundown AI's roundup. Those tools are named, never linked. See H2 6's linking rule.

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source reference |
|---|---|---|---|
| NotebookLM | https://notebooklm.google.com/ | authoritative_allowlist (official platform docs) | `facts.md` §Verified, "Which tools are actually named where" |
| Claude | https://claude.com/ | primary_source (tool's own page, not a top-10 SERP URL) | `plan.md` §External links, firm product link |
| Gemini | https://gemini.google.com/ | authoritative_allowlist (official platform docs) | `plan.md` §External links, firm product link |
| Otter.ai | https://otter.ai/ | primary_source (not a top-10 SERP URL) | `facts.md` §Verified, named in the RemNote roundup |
| Perplexity | https://www.perplexity.ai/ | primary_source (not a top-10 SERP URL) | `plan.md` §External links, firm product link |
| Khanmigo (Khan Academy) | https://www.khanacademy.org/khan-labs | primary_source | `facts.md` §Verified, named in both roundups |
| ChatGPT study mode | OpenAI's own product page, exact URL confirmed at drafting | primary_source | `facts.md` §Verified, named in The Rundown AI's directory |
| Wolfram Alpha | https://www.wolframalpha.com/ | primary_source | `facts.md` §Verified, named in the RemNote roundup |

**Optional, verification-gated, not counted above:** the Gallup / Lumina "57% of U.S. college students use AI in coursework at least weekly" claim, https://www.gallup.com/analytics/644939/state-of-higher-education.aspx, `primary_source` (allowlist, major research org). It reaches us only through a competitor's secondhand citation, so the writer marks it `[VERIFY: 57% of U.S. college students use AI in their coursework at least weekly | source: research/serp.md §"Citations harvested from competitors", secondhand via a competitor roundup, primary Gallup page not yet fetched]`. Stage 3d confirms it at gallup.com or DELETES the claim. The post's argument does not depend on it.

Four of the eight rows above are the firm product links `plan.md` committed to (Perplexity, Claude, Gemini, Otter.ai). If the citation-style count needs trimming, cut Wolfram Alpha or the OpenAI row first, never the four product links.

---

## Image placement plan (high-level)

- **Featured (frontmatter cover only, never also an in-post slot):** a student at a desk choosing one app from a crowd of floating tool icons, warm rather than anxious, hand-lettered title over flat-vector illustration per `image-style.md`. Type: `ai-prompt` (per `images.featured_default`; `custom-instructions.md` forbids overriding the featured slot to any other type).
- **After H2 1 + 1 paragraph:** the SERP composition itself, 6 vendor homepages vs 2 compromised roundups vs 1 forum thread, rendered as a simple proportional diagram. Type: `remotion` (a genuine diagram, which is what `remotion` is for).
- **After H2 4 + 1 paragraph:** the recall loop, material in, questions out, self-testing, gaps back in. Type: `remotion` (genuine diagram).
- **After H2 6 + 1 paragraph:** free-tier transparency across the five vendor pages, 2 that state their limits vs 3 that do not. Type: `remotion` (genuine chart, and deliberately NOT a duplicate of a markdown table, H2 6 carries its free-tier detail as prose, so the chart is the only tabular rendering of it).
- **After H2 7 + 1 paragraph:** a warm conceptual illustration of the closed laptop and the worked-by-hand problem set. Type: `ai-prompt` (a scene, not a diagram).

1 featured + 4 in-post, matching `blog-craft.md` §Image count (1 + 3 to 5). Types respect `custom-instructions.md` §Image style: `remotion` only for genuine diagrams and charts, `ai-prompt` for scenes and conceptual visuals, no blanket conversion.

---

## Word count roll-up

- Intro: ~200
- H2 1: 280
- H2 2: 330
- H2 3: 300
- H2 4: 330
- H2 5: 290
- H2 6: 380
- H2 7: 330
- H2 8: 260
- Body sections total: 2,500
- Outro / CTA: ~100
- **Total estimate (body prose, no FAQ): ~2,800** vs plan target 2,000 to 3,000. Inside the range, above the ~2,400 the plan aimed at.
- FAQ: ~150 (listed for completeness, NOT part of the gated total)

**Editor note on the overshoot:** the roll-up lands at 2,800 against the plan's stated ~2,400 aim, because nine picks each need their cons stated to deliver the post's honesty angle, and H2 6 and H2 7 are the differentiation and cannot be thin. 2,800 is inside the plan's own 2,000 to 3,000 range and inside the post-type matrix range, so this is a deliberate choice, not drift. The Stage 3b length gate measures against 2,800; if the writer comes in materially over that, H2 6 and H2 5 are the first to trim.

---

## Open questions (recorded, no human gate)

- [ ] **No hands-on testing backs these picks.** Carried from `plan.md` §Open questions. The recommendation at Gate 2 is that Olga spot-tests NotebookLM, ChatGPT Study Mode and Studley before approving, all free or near-free and checkable in minutes. Until then no sentence may imply firsthand use. This reaches her as a checkbox in `action-items.md` at Stage 4b.
- [ ] **The Gallup 57% statistic is unverified** and reaches us only via a competitor's citation. Stage 3d confirms it at gallup.com or deletes it. The post does not depend on it.
- [ ] **The MIT "cognitive debt" study is rejected as a source.** H2 7 describes an educator debate as a debate and states no research finding.
- [ ] **Prices move.** Studley's listed price and Evernote's free-tier contents were observed on 2026-09-06. If Gate 2 slips by more than a few weeks, re-check both or fall back to durable framing.

---

## Changes requested by human (log)

- (none yet)
