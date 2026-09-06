# Plan: ai study tools

Written by: blog-editor (Stage 1c synthesis, autopilot).
Sources: `brief.md`, `research/serp.md`, `research/reddit.md`, `research/x.md`, `blog-ops/profile/product.md`, `facts.md`.
Read by: plan-reviewer (Stage 1c.5), blog-editor (Stage 2 outline), blog-writer (Stage 3a).

## Status

approved

## Intent

transactional

Reasoning: 6 of the 9 live top results are tool vendor homepages a searcher lands on to sign up, so Google reads this as "show me the tools," and the post must be a pick-one-and-go roundup, not an explainer.

## Category

EdTech

## Audience emphasis

- **Primary:** students and early-career learners (primary audience, student segment), because they are the ones typing this query mid-term and hitting pain point #3, tool overwhelm, with ten near-identical products all claiming to be #1.
- **Secondary:** self-improvers and knowledge workers who study on the side, because the same "make dense material stick" jobs apply to a certification or a course, and the tool picks transfer unchanged.

Reader knowledge level: beginner. Vendor pages assume near-zero AI literacy while Reddit assumes fluency in "spaced repetition" and "NotebookLM"; the post must serve the vendor-page reader and translate every term on first use per `audience.md` §Niche jargon translation.

## Author voice

olga, single-author blog with no selection rubric in `authors.md`, and her stated expertise (AI tools for productivity, learning and self-growth) is a direct match for a study-tools roundup.

## Product positioning emphasis

`text_summarizer_primary` (with Acronym Explainer as a secondary mention)

Per `voice.md` §Positioning: lead with the practical payoff, introduce Olga's own free tools as the natural next step near the end. The Text Summarizer is the honest topical match, condensing dense reading is the exact job the post's first section is about. One soft mention near the CTA. It is NOT positioned as a competitor to the nine reviewed tools, and no price is stated (there is none, per `blog-craft.md` §Own-product pricing claims).

## SERP shape match

best-of-listicle

Per `research/serp.md`: the SERP shape is mixed and vendor-homepage-dominant, but the only editorially-viable shape for this blog is the listicle, since a searcher wants named picks. The post takes the listicle shape and adds the two things page 1 lacks: stated free-tier limits and a section on when not to use these at all.

## Title candidates (3 options)

1. `9 Best AI Study Tools for Students in 2026, Ranked`, 49 chars, tone: straight best-of. Matches the post-type matrix formula, target keyword effectively first, odd-number prefix, contains "best" so Google keeps serving the informational SERP rather than flipping to e-commerce.
2. `Best AI Study Tools 2026: What Students Actually Use`, 51 chars, tone: leads with the differentiation. Sharper and more honest to the angle, but drops the odd-number prefix that `blog-craft.md` §Title rules calls for on listicles.
3. `9 Best Free AI Study Tools for Students (2026 Guide)`, 51 chars, tone: leads on "free". Directly answers the "Are there any free AI study apps?" People Also Ask question, but overcommits: two of the nine picks have real paid ceilings, so "Free" in the title would misrepresent the list.

## Recommended title

`9 Best AI Study Tools for Students in 2026, Ranked`

Rationale: it satisfies every title rule (49 chars, keyword first, "best" present, odd number, title case, no dash) while option 2's honesty advantage is recoverable in the meta description and the H1 subhead, and option 3 makes a promise the list cannot keep.

**Deliberately NOT chosen: any title containing "Tested".** See Open Questions, this run has no hands-on testing behind it and the title must not claim one.

## Slug

`ai-study-tools`

Validation: target keyword only, no year, no trigger words. Matches the content-plan row.

## Meta description (draft)

`Most "best AI study tools" lists are written by the tools themselves. Here are 9 picks students really use, what each free tier gives you, and when to skip AI.`

(159 characters, inside the 160 limit.)

## Angle

Almost every page ranking for "AI study tools" is the tool selling itself, and the two that aren't are compromised: one roundup ranks its own product #1 without disclosing it, the other funds a $29/month membership. So a student researching this decision is reading advertising and does not know it. This post is the independent version: nine picks organized by the study job you are actually trying to do, each with what its free tier genuinely gives you before it stops being useful, plus the section nobody on page 1 will write, when AI is the wrong tool and you should close the laptop and struggle with the material instead. The evidence for the picks comes from what students report using in real discussion threads, cross-checked against what each tool's own documentation commits to, and the post says so plainly rather than pretending to a lab test.

## Key sections (preview, becomes the outline in Phase 2)

1. So What Are the Best AI Study Tools, Really? (the honest method, and why most lists you'll find are advertising)
2. Best for making sense of dense readings and lecture material
3. Best for the lectures you can't keep up with
4. Best for turning material into actual recall practice
5. Best for checking sources and getting the maths right
6. The paid all-in-ones the search results push (and what "free" means on them)
7. When AI is the wrong tool for studying
8. How to build a two-tool study stack instead of collecting ten apps (+ CTA)
9. FAQ

**Tool-to-section mapping (so Phase 2 does not have to guess):**

- **§2, dense readings and lecture material:** NotebookLM, Claude
- **§3, lectures you can't keep up with:** Otter.ai, Gemini
- **§4, turning material into recall practice:** ChatGPT (Study Mode), Khanmigo
- **§5, checking sources and getting the maths right:** Perplexity, Wolfram Alpha
- **§6, the paid all-in-ones:** the single grouped pick (Studley, StudyFetch, Turbo AI, Mindgrasp, with Evernote as the "you may already have this" note)

Two tools per section across §2 to §5, plus the grouped 9th pick in §6. At roughly 130 words per tool that is about 1,040 words of tool coverage, leaving roughly 1,360 for the five framing sections, the intro, the CTA and the FAQ, which lands the post inside the 2,400-word target.

**§9 FAQ commitment:** 4 Q/A pairs, one for each of the verified People Also Ask questions captured in `facts.md` §"People Also Ask": "What is the best AI tool for studying?", "What is the best AI tool to learn?", "Is ChatGPT good for studying?", "Are there any free AI study apps?". This sits inside `blog-craft.md`'s 3 to 5 range with no invented fifth question; if the writer adds a fifth it must come from a `facts.md` row and be named as such.

Products / items planned, 9 picks grouped by job:

- **NotebookLM** (Google), best for turning your own readings into something you can question. The spine pick: named in both editorial roundups, most-praised tool across 4 of 5 Reddit threads, and absent from every AI-study-startup homepage. Carries its honest limit too ("excellent retrieval model, but it suckssss in the reasoning dept", u/dantheadmin) and the brand-trust objection ("everyone has been burned by Google at this point", u/luvv2ride).
- **ChatGPT (Study Mode)**: best for unblocking when a concept won't land. Anchored to the strongest voice-of-customer theme: students use AI to break down confusing readings, then rewrite in their own words.
- **Claude**: best for working through a long, dense document. Backed by the Reddit contrarian who argues for one general model used well over tool-hopping.
- **Gemini**: best for turning lecture slides into practice questions. This is the exact discovery that opened the r/studytips thread ranking on page 1 for our keyword.
- **Perplexity**: best for finding sources you can actually cite, and the natural answer to "the AI made up a reference."
- **Khanmigo** (Khan Academy), best when you want a tutor that won't just hand you the answer. The only other tool in both roundups; the Socratic framing is also the academic-integrity-safe pick.
- **Otter.ai**: best for lectures you need captured while you listen instead of transcribe.
- **Wolfram Alpha**: best for STEM, where a language model guessing at arithmetic is the wrong tool entirely.
- **The paid all-in-ones as one grouped pick** (Studley, StudyFetch, Turbo AI, Mindgrasp, with Evernote's AI features as the "you may already have this" note), best for students who genuinely want one app that does flashcards, quizzes, notes and a tutor together. Assessed honestly as a category: all five ship the same four features, three never state what "free" includes anywhere, and Studley's own free tier is a single study set.

## Product references planned

- **Intro expertise statement:** one line placing Olga as someone who went back to studying as an adult and now builds AI tools herself, so she is reading these product pages with a builder's eye. No tool names.
- **Body mentions:** none. The nine picks are the body; inserting her own tools mid-list would be exactly the conflict of interest the post criticizes in RemNote. This restraint is itself on-brand.
- **Conclusion CTA:** one soft mention of the free Text Summarizer (and Acronym Explainer in passing) as the small, single-purpose next step for condensing a dense reading, linking the free AI tools page per `blog.md` §Primary CTA with an action anchor. No price, no feature re-list.

## Internal links planned

| Target slug | Anchor text (draft) | Where in the post |
|---|---|---|
| `note-taking-methods` | note-taking method that fits how you study | §2 (dense readings), where tool output has to land in a system |
| `cornell-note-taking-method` | Cornell note-taking method | §4 (recall practice), the method AI-generated questions feed into |
| `how-to-plan-your-week` | plan your study week | §8 (building the stack), scheduling the sessions |
| `time-blocking` | time blocking | §8, giving each study session a fixed slot |
| `digital-vs-paper-notes` | digital and paper notes | intro, one contextual link only |

Five planned, `blog-craft.md` §Internal linking allows 3–5; the outline may drop one if the intro gets crowded. At most 1–2 in the intro (currently 1). Root-relative, no trailing slash, per `blog.trailing_slash: false`.

## Inbound internal links planned (existing posts → this post)

| Existing post | Where the link fits |
|---|---|
| `note-taking-methods` | the pillar page; a sentence on AI-assisted study fits alongside the method comparison |
| `cornell-note-taking-method` | where the post discusses generating review questions from notes |
| `how-to-take-notes-on-ipad` | digital-study-tooling context, a natural adjacent recommendation |
| `digital-vs-paper-notes` | where the digital side's advantages are discussed |

Applied automatically at Stage 4b.5, per the adapter's staging step.

## External links planned

**Hard constraint applied throughout:** `blog-craft.md` §"Forbidden external links" bars linking to ANY top-10 SERP URL for this keyword. That rules out studley.ai, studyfetch.com, turbo.ai, mindgrasp.ai, ask-maeve.com, the Evernote page, RemNote's roundup and The Rundown AI's roundup, i.e. every one of the paid all-in-ones. **Those tools are therefore NAMED but NOT hyperlinked.** Naming is not linking; a reader can search the name, and this blog does not hand link equity to the five competitors it is assessing. Every tool that IS linked below sits outside the top 10 or on the authoritative allowlist.

| Source | Claim it backs | URL | Classification |
|---|---|---|---|
| Gallup / Lumina State of Higher Education | "57% of U.S. college students use AI in coursework at least weekly" | https://www.gallup.com/analytics/644939/state-of-higher-education.aspx | primary_source (allowlist: major research org). **Must be confirmed at the primary page at Stage 3d; RemNote's secondhand citation is NOT usable and its roundup is a forbidden link.** Delete the claim if Gallup does not confirm it. |
| Google NotebookLM official | what NotebookLM is and what its free tier includes | https://notebooklm.google.com/ (+ `support.google.com` help docs for the limits) | authoritative_allowlist (official platform docs) |
| Khan Academy | Khanmigo asks guiding questions instead of supplying answers | https://www.khanacademy.org/khan-labs | primary_source (the tool's own page; not a top-10 SERP URL) |
| Wolfram Alpha | computational answers for STEM work | https://www.wolframalpha.com/ | primary_source (not a top-10 SERP URL) |
| OpenAI | ChatGPT's study/guided-learning mode | https://openai.com/ (specific product page at drafting) | primary_source (not a top-10 SERP URL) |

Five citation-style rows planned, matching `blog-craft.md`'s 3 to 5 range.

**Separately and non-negotiably, the four reviewed tools that are NOT top-10 SERP URLs each get a real link to their own official page: Perplexity, Claude, Gemini and Otter.ai.** This is not conditional on the external-link budget. `custom-instructions.md` §Content policy ("give every product a real link now") applies to them cleanly: none of the four ranks for this post's target keyword, so there is no link-equity cost, and none earns this blog any affiliate revenue, so there is no monetization question either. If the total external-link count needs trimming, the Wolfram Alpha and OpenAI citation rows above are cut first, never these four product links.

The five or six top-10 vendor pages stay **name-only** by contrast, and for a different reason than budget: linking Studley, StudyFetch, Turbo AI, Mindgrasp, Ask Maeve or the Evernote page would hand outbound link equity, and literal reader traffic, to the exact pages currently outranking this post for its own target keyword. That is the specific harm `blog-craft.md` §"Forbidden external links" exists to prevent, and it is not the affiliate-monetization question `custom-instructions.md` governs, so there is no genuine precedence conflict between the two documents here.

## Facts / data to feature prominently

The spine of the post, all from `facts.md` §Verified:

1. **6 of the 9 top results for this keyword are the tools' own homepages**, and neither of the two roundups is independent (one ranks itself #1 undisclosed; the other sells a $29/month membership). This single fact justifies the post's existence and opens §1.
2. **The two roundups overlap on only 2 of their combined 15 tools**, and neither names any of the five vendors outranking them. Concrete proof that "best AI study tools" lists do not agree, which is exactly why the reader is still searching.
3. **Only 2 of the 5 vendor pages state what their free tier includes.** Studley's free plan is one study set; Evernote publishes an itemized table; StudyFetch, Turbo AI and Mindgrasp market "free" with no stated limit anywhere and no reachable pricing page. This is §6 and the post's most practically useful paragraph.
4. **NotebookLM is the most-recommended tool by actual students and is invisible on the commercial SERP** (named in 4 of 5 Reddit threads and both roundups, on zero vendor homepages), because the vendors will not promote a free competitor.
5. **Every AI-study startup ships the same four features** (flashcards, quizzes, AI tutor, notes); the differentiation is packaging. Kills the reader's fear of missing out on a magic tool.

## Image plan (high-level)

- **Featured:** a student at a desk with a laptop, surrounded by too many app icons, choosing one, the "tool overwhelm" pain rendered warmly rather than anxiously. Type: `ai-prompt` (per `images.featured_default` and `custom-instructions.md` §Image style, which forbids overriding the featured slot).
- **In-post images:** 4, mixed. Likely one `remotion` diagram for the "9 tools by study job" grouping (a genuine diagram, which is what `remotion` is for), one `remotion` for the free-tier-limits comparison, and two `ai-prompt` conceptual illustrations for §7 (when AI is the wrong tool) and §8 (the two-tool stack). The image-planner assigns final types at Stage 4a; per `custom-instructions.md`, `remotion` only for genuine diagrams/charts and never a blanket conversion.

Target: 1 featured + 4 in-post, inside `blog-craft.md` §Image count (1 + 3–5).

## Length target

2,000–3,000 words, per the post-type matrix for transactional intent. Planning to **~2,400**, which fits nine picks at roughly 130 words each plus five framing sections, without padding the tool entries, which the blog's stated point of view explicitly forbids.

## Tone hooks

- Open with the confusion itself, not with a definition. The reader has already seen five sites claiming to be the #1 AI study tool; naming that experience is the hook.
- Warm and encouraging, never scolding, especially in §7. The point is that struggling with material is how learning works, not that students using AI are cheating. `audience.md` §Language to avoid rules out both hustle framing and moralizing.
- Translate every AI term on first use, per the jargon table. "Grounded in your own sources," "spaced repetition," and "hallucination" all need a plain-language gloss.
- One first-person anecdote maximum, from the `voice.md` bank: going back for a Master's as an adult, or being intimidated by anything that looked technical. Keep it to a few sentences; the reader came for the picks.
- Be specific about limits without being sour. "Here is where the free tier stops" is useful; "these companies are lying to you" is not the blog's voice.
- No em-dashes anywhere (`custom-instructions.md`, and the humanizer enforces zero).

## Open questions (resolved or flagged for plan review)

- [x] **Can this post claim the tools were "personally tested"?** No, and this is the plan's most important call. `blog.md` §Point of view states "every tool and tactic recommended here is something Olga has personally tested," but this run is headless and no hands-on testing occurred. **Resolution, in two parts.** First, the post must not claim testing it did not do: §1 states the actual method plainly (what students report using in real discussion threads, cross-checked against each tool's own documentation and stated free-tier limits), the title drops "Tested", and **no sentence anywhere in the draft may imply firsthand use** until the second part happens. Second, a concrete action for Gate 2 rather than an open worry: **the recommendation to Olga is to spot-test three picks before approving, NotebookLM, ChatGPT Study Mode, and Studley.** All three are free or near-free and checkable in minutes, and Studley is the highest-value check of the three because its free tier (a single study set) is the most restrictive claim in the post and the fastest to confirm or refute. If she does that, the firsthand framing can be restored at Gate 2; if she does not, the post ships on the disclosed research-based method and says so. This is carried into `action-items.md` at Stage 4b so it reaches her as a checkbox, not a buried note.

- [x] **May the post link to the tools it reviews?** Not to the ones ranking in this keyword's top 10, per `blog-craft.md` §Forbidden external links. Resolved above: those five are named, not linked, and `custom-instructions.md`'s "ship real working links" rule is satisfied for every tool where it does not collide with the forbidden-link rule. Noting that `custom-instructions.md` outranks the standards doc on precedence, so the reviewer may reverse this; the plan takes the conservative route because the rule's whole purpose is to avoid handing equity to a direct ranking competitor for the exact target keyword.
- [x] **Is an affiliate disclosure required?** No. `custom-instructions.md` triggers the disclosure on "at least one tagged Amazon link"; this post reviews software, carries no Amazon links and no tags, so the disclosure paragraph is correctly absent. Recorded here so a reviewer does not read its absence as an omission.
- [ ] **The Gallup 57% statistic is unverified.** It reaches us only through a competitor's citation. Stage 3d must confirm it at gallup.com or the claim gets deleted, not softened. The post's argument does not depend on it, so deletion is a safe outcome.
- [ ] **The MIT "cognitive debt" study is rejected as a source** (`facts.md` §Rejected). §7 therefore describes an educator debate as a debate and states no research finding. If the reviewer wants a hard finding there, someone must locate the primary paper first.

## Changes requested by human (log)

- (none yet)
