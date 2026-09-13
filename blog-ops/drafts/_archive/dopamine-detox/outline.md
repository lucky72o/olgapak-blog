# Outline: dopamine detox

Written by: blog-editor (Stage 2).
Sources: `blog-ops/drafts/dopamine-detox/plan.md` (approved at Stage 1c.5 plan review), `facts.md`, `research/serp.md`, `research/reddit.md`, `research/x.md`, plugin `standards/blog-craft.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `audience.md`, `authors.md`, `blog.md`, `product.md`, `custom-instructions.md`.
Read by: blog-writer (Phase 3) during drafting; blog-reviewer at Stage 3b for structural alignment checks.

**Purpose:** the structural blueprint produced at the end of Stage 2 by the editor's editorial judgment (no human gate). It locks every H2/H3, the intro shape, the FAQ set, and the external link plan. Writer may adjust phrasing but not structure.

## Status

approved

## Final title

`Dopamine Detox: What It Is and How to Actually Do It Right`

Source: copied from `plan.md` "Recommended title" (58 chars).

## Final slug

`dopamine-detox`

Source: copied from `plan.md`.

## Final meta description

`Dopamine detox isn't what TikTok says it is. Here's what actually helps, and a version you'll finish, from the psychologist who coined the term.`

(142 chars. Refined from `plan.md`'s draft, which promised a "7-day reset"; section 4 no longer takes that shape, see §Open questions item 1.)

## Author voice

olga

Source: copied from `brief.md` and `plan.md`. Warm, first-person, encouraging, lightly self-deprecating. Beginner reading level, every specialist term translated on first use. The hardest tonal job in this post: tell the reader a popular idea is misnamed without making anyone who tried it feel stupid.

## Word count target

2,000 to 2,400 words of body prose (excluding FAQ), target 2,200. Carried from `plan.md` §Length target and confirmed by the Stage 1c.5 reviewer against the SERP average of roughly 1,660 words.

## Intent

informational_pillar

Carried from `plan.md`. Definition and verdict first, method second, matching `research/serp.md` §Search intent.

## Category

`Productivity`

Source: copied from `plan.md`, carried from `brief.md`.

---

## Intro structure (4 paragraphs max)

### P1, Hook

- Hook sentence (draft): `You have probably seen the videos: someone sits in an empty room for 24 hours with no phone, no music, no food they enjoy, and calls it a dopamine detox.` Second sentence lands the reader's real question: `If you have also seen the videos explaining that the whole idea is nonsense, you are in the awkward middle, which is exactly where I was.`
- Target keyword appears in sentence 1.
- Fact anchor: the viral distortion as documented (not eating, not exercising, no music, no socialising, no talking more than necessary), source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 (facts.md §Named examples)

### P2, Expertise statement

- Expertise sentence (draft): `I write about focus for a living and I have tested most of these ideas on myself, so this is the version I would give a friend: what the research actually supports, what it does not, and what to do on Saturday.`
- Drawn from `voice.md` §Credibility message ("tested, not theorized"). Not a generic authority claim, and it makes no medical claim.

### P3, Intro internal links (≤2, contextual)

One link only, woven into a sentence about the behaviour a detox is trying to interrupt.

| Anchor text | Target slug | Placement |
|---|---|---|
| stop doomscrolling | how-to-stop-doomscrolling | intro |
| reduce your screen time | how-to-reduce-screen-time | H2 4 |
| 7-day digital detox plan | digital-detox-plan | H2 4 |
| screen-free hobbies | screen-free-hobbies | H2 5 |
| time blocking | time-blocking | H2 5 |

Root-relative, no trailing slash (`/how-to-stop-doomscrolling`), per config `route_prefix: /` and `trailing_slash: false`. Five links total, at the top of blog-craft.md's 3 to 5 range; the writer drops `time-blocking` if H2 5 gets crowded rather than stacking two links in one paragraph.

### P4, Preview

- Preview sentence (draft): `This guide covers what a dopamine detox actually is, why it helps even though the name is wrong, how the original version differs from the one that went viral, and a routine you can start tonight.`

### P4b, Affiliate disclosure

Not applicable. This post carries no affiliate links, so per `custom-instructions.md` §Content policy the disclosure paragraph is omitted.

---

## Body sections

### H2 1: `What a dopamine detox actually is (and why the name is wrong)`

- Covers: the plain-language definition (a deliberate break from high-stimulation, low-effort activities), then the correction, in that order. Define dopamine once, in one sentence, without jargon.
- Key fact: dopamine does not decrease when you avoid overstimulating activities, so a dopamine fast does not lower your dopamine levels, source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 (facts.md §Scope-limited, stated unhedged by a Harvard-affiliated physician, so state it plainly)
- Key fact: low dopamine is associated with Parkinson's disease, depression, restless leg syndrome, and ADHD, which is why "less dopamine" is the wrong goal to aim at, source: https://health.clevelandclinic.org/dopamine-detox (facts.md §Named examples). **This fact lives HERE and only here.** Per `plan.md` §Guardrail on section 6, it must not reappear in H2 6 next to a reader's own ADHD, where it would read as a diagnostic claim. Cited in prose without a link (Cleveland Clinic is a forbidden SERP competitor); the surrounding correction carries the Harvard Health link instead.
- Key fact: Cameron Sepah coined "Dopamine Fasting 2.0" in 2019 and has said the name is a catchy title, "not to be taken literally", source: https://www.nytimes.com/2019/11/07/style/dopamine-fasting.html (facts.md §Quotes)
- Rhythm: opens with the definition, then a standalone-question paragraph ("So is the whole thing nonsense?") that hands off to H2 2 rather than answering here.
- Approximate word count: 330

### H2 2: `So why does it seem to work?`

- Covers: the honest mechanism. Nothing chemical. Two behavioural explanations, both sourced: you are removing the easy option so the hard thing stops competing with something engineered to win, and idle time does something useful on its own.
- Key fact: the default mode network becomes more active when you are idle rather than working on a task, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6127769/ (facts.md §Named examples). Translate the term on first use, per `audience.md` §Reading posture: the group of brain areas that switches on when you are not busy.
- Key fact: a peer-reviewed review reports people practising this kind of routine may see less impulsive behaviour, better focus, and less overwhelm, while warning that extreme versions carry real risks and that the evidence is inconsistent, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/ (facts.md §Scope-limited). **Scope discipline:** write "a peer-reviewed review reports", never "studies show", and attach no number, percentage, or timeline.
- Voice-of-customer, usable as reader voice and not as evidence: the r/Neuropsychology framing that the practice does not control dopamine, it just gets you doing things that were already known to help (facts.md §Voice-of-customer quotes). Paraphrase or quote briefly; attribute to a Reddit discussion, not to an expert.
- **Forbidden here:** any "resets your receptors", "tolerance reset", or "raises your baseline" framing. facts.md §Rejected kills all three. If the draft wants the caffeine-tolerance analogy, it may appear ONLY as "this is how people describe the feeling", never as a mechanism.
- Rhythm: bullet list of the two explanations; one short sentence next to a long one.
- Approximate word count: 330

### H2 3: `The viral version versus what the psychologist who coined it suggested`

- Covers: the side-by-side contrast that `research/serp.md` §Angle opportunities says no result in the top 10 makes. This is the section that earns the post its place.
- Key fact: Sepah's actual graduated schedule, 1 to 4 hours at the end of a workday, one weekend day per week, one weekend per quarter, one week per year, source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 and the origin document https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/ (facts.md §Statistics)
- Key fact: the six behaviours the original protocol targeted, emotional eating, excessive internet use and gaming, gambling and shopping, pornography and masturbation, thrill and novelty seeking, recreational drugs, source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 (facts.md §Statistics). Handle the sexual-behaviour item in one neutral clause; do not dwell, do not moralise, and do not drop it silently either, because the list is the point.
- Key fact: the viral distortion in practice (no eating, no exercise, no music, no socialising, no talking more than necessary), source: same Harvard Health URL (facts.md §Named examples)
- **Structure:** a markdown table with two columns, "What went viral" and "What was actually proposed". A table, not an image, because tables render as SERP-eligible HTML and the outline's image rules bar duplicating a table as a chart. The image slot in this section is a scene, not a chart.
- Optional colour, use at most one: the publicly posted account of a detox consisting of work, reading, and staring at a wall, and the reply that it "makes life feel so limited", source: https://x.com/liamottley_/status/2094070276031914357 (facts.md §Named examples). Reference generically ("someone posted recently that their detox was work, read, stare at a wall"); do not name the person.
- Approximate word count: 300

### H2 4: `How to do a dopamine detox right`

- Covers: the load-bearing how-to, built as a graduated cadence rather than a fixed week. Four H3 sub-steps.
- **Framing guardrail (from `plan.md`):** present this as this blog's own on-ramp, shaped by Sepah's moderate cadence and by the gradual-tapering shape of the r/productivity account, never as Sepah's own protocol. Every number in this section traces to facts.md or is cut.
- **Differentiation guardrail (new at Stage 2, see §Open questions item 1):** this is NOT a screen-time schedule. The already-published `digital-detox-plan` post owns that shape (its own H2s are "Before day 1: get your baseline number" and "The 7-day digital detox plan"). This section is about which behaviours you pick and how long a window you can actually hold, and it links out to that post explicitly for readers who want the screen-time version.
- Internal links land here: `reduce your screen time` (/how-to-reduce-screen-time) for the measuring step, and `7-day digital detox plan` (/digital-detox-plan) as the structured alternative.
- Rhythm: numbered H3s; at least one bullet list; the shortest paragraph in the post should be in here.
- Approximate word count: 480

#### H3 4.1: `Pick the one or two things you are actually detoxing from`

- The original protocol named six behaviours, not "everything fun". Ask the reader which one costs them the most, and start there.
- Fact anchor: Sepah's six behaviours (facts.md §Statistics), already introduced in H2 3, referenced here without re-citing.

#### H3 4.2: `Start with a window, not a whole day`

- 1 to 4 hours at the end of a workday is where the original protocol starts, and it is the version a person finishes.
- Fact anchor: Sepah's schedule (facts.md §Statistics), the one number-bearing claim in this section.
- The r/Productivitycafe voice-of-customer line belongs here as the honest warning about what the first attempt feels like ("I sat there for 20 minutes before I realized I was just thinking about TikTok"), facts.md §Voice-of-customer quotes.

#### H3 4.3: `Add one lower-stimulation day a week`

- One weekend day per week is the next rung, again from the original cadence. Longer stretches (a weekend per quarter) are optional and named as such.
- No new numbers beyond facts.md §Statistics.

#### H3 4.4: `Decide what you will do instead, before you start`

- The single highest-value instruction in the post, and the one the viral version omits entirely. Hands off to H2 5.
- **Founder anecdote lands here or at the top of H2 5** (per `plan.md` §Angle and the Stage 1c.5 reviewer's carry-forward note): the timeboxing and Parkinson's Law beat from `voice.md` §Personal-anecdote bank, the "I could not sit with a hard task until I changed what I did between tasks" thread. Translate Parkinson's Law on first use per `audience.md`. Do not invent a detox-specific story that did not happen. Keep the anecdote even if the writer drops the `time-blocking` internal link.

### H2 5: `What to do with the hours you get back`

- Covers: the failure mode. A detox with nothing on the other side of it is just an evening of being bored and annoyed, which is what the "feels like a scam" reaction is actually reacting to.
- Key fact: the default mode network point from H2 2, applied rather than re-explained; idle time is doing something, but so is a walk with no headphones, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6127769/ (facts.md §Named examples)
- Concrete named examples, not a generic "find a hobby": a walk without headphones, cooking something that needs attention, a book you already own, one thing with your hands.
- Internal links land here: `screen-free hobbies` (/screen-free-hobbies) as the long list, and `time blocking` (/time-blocking) as the system for the reclaimed hours. Writer drops the second if the section gets crowded.
- Rhythm: bullet list of replacements; one standalone-question paragraph.
- Approximate word count: 280

### H2 6: `When a dopamine detox is not the right tool`

- Covers: the boundary. Two paragraphs, no more.
- Paragraph 1, the not-one-size-fits-all point: for some people, background audio during a dull chore is a working coping strategy rather than a bad habit, and the blanket advice does not fit. Source as reader voice: https://www.reddit.com/r/adhdwomen/comments/1t3umr5/dopamine_detox_with_adhd/ (facts.md §Voice-of-customer quotes, u/Anathita). **Guardrail, from `plan.md` and reaffirmed by the Stage 1c.5 reviewer: no mechanism claim, no diagnostic claim, and do NOT cite the Parkinson's / depression / restless-leg / ADHD association here.** That fact belongs in H2 1 only.
- Paragraph 2, the honest boundary: if the pull is compulsive, or the attention problem predates the phone, that is a conversation for a professional, not a protocol. One sentence, no crisis-line copy, no clinical language.
- Optional reader-voice line: the r/adhdwomen observation that this content often turns out to be an advert for a paid app (facts.md §Voice-of-customer quotes). It earns its place by being self-aware, since this post is also content about dopamine detoxes.
- Rhythm: no bullet list needed here; keep it plain and short. The concrete-example requirement is met by the background-audio example.
- Approximate word count: 240

---

## Closing CTA

- CTA angle (one line): the reader's next step is not another rule about their phone, it is taking one recurring low-value task off their plate so the reclaimed attention has somewhere to go.
- Links `blog.md` §Primary CTA (Olga's free AI tools page) with an action anchor, hooked as "try my free AI tools to automate the mundane". Name Text Summarizer once, as the tool that fits this post's problem, per `plan.md` §Product references planned. No feature re-list, no prices (the tools are free and there is no pricing page).
- Two short paragraphs maximum. Sits immediately before `## FAQ`; nothing follows the FAQ.

---

## FAQ block

- Q: `Does a dopamine detox actually work?` → A direction: yes for the behaviour, no for the mechanism. It works because you stop competing with something engineered to win, not because your dopamine changes. One sentence of the peer-reviewed review's hedged finding, no numbers.
- Q: `How long should a dopamine detox last?` → A direction: start with 1 to 4 hours at the end of a day, which is where the original version starts; a full day is the next rung, not the entry point.
- Q: `Can you really detox from dopamine?` → A direction: no, and you would not want to. Dopamine does not drop when you avoid stimulating activities, and low dopamine is not a goal worth aiming at. Shortest answer in the set.
- Q: `What should I do during a dopamine detox?` → A direction: anything absorbing and low-stimulation that you chose in advance. Staring at a wall is a version of this, not the definition of it.
- Q: `Is a dopamine detox the same as a digital detox?` → A direction: overlapping, not identical; a digital detox is about screens, this is about the easy-reward habits, some of which are not screens at all. Points at `/digital-detox-plan`.

Five questions, inside blog-craft.md's 3 to 5. These feed the JSON-LD FAQ schema per the wordpress-rest frontmatter template.

---

## Inbound internal links (existing posts → this post)

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| digital-detox-plan | §"What a digital detox plan actually is (and why cold turkey backfires)", where the post distinguishes itself from adjacent trends; a clause noting that the related idea people bring to it is a dopamine detox, which is about the reward habits rather than the screens | dopamine detox |
| how-to-stop-doomscrolling | §"Layer 2: Catch the trigger (work with your brain, not against it)", which already discusses the reward loop; a sentence pointing readers who want the wider version of that idea to the dopamine detox post | dopamine detox |
| how-to-reduce-screen-time | §"Not all screen time is the problem", where the post separates useful screen use from the compulsive kind; the natural spot to note that the same distinction drives a dopamine detox | dopamine detox |

Three inbound links, inside blog-craft.md's 1 to 4. All three are digital-wellbeing siblings, so the link is contextual rather than a tacked-on "see also". Applied automatically at Stage 4b.5 to the local repo copies, and per `custom-instructions.md` §Inbound internal links, also applied to the LIVE WordPress posts via REST (the new post's permalink `https://olgapak.com/dopamine-detox` is stable from its slug even while the post is still a draft).

---

## External link plan

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source |
|---|---|---|---|
| does not actually lower your dopamine levels | https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 | authoritative_allowlist | facts.md §Scope-limited, Harvard Health entry |
| the title's not to be taken literally | https://www.nytimes.com/2019/11/07/style/dopamine-fasting.html | authoritative_allowlist | facts.md §Quotes, Sepah via NYT |
| one to four hours at the end of the day | https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/ | primary_source | facts.md §Statistics, Sepah's graduated schedule |
| a peer-reviewed review reports less impulsive behaviour and better focus | https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/ | authoritative_allowlist | facts.md §Scope-limited, PMC/Cureus review |
| more active when you are idle | https://pmc.ncbi.nlm.nih.gov/articles/PMC6127769/ | authoritative_allowlist | facts.md §Named examples, default mode network |

Five external links, inside blog-craft.md's 3 to 5. The first internal link (intro P3) appears before the first external link (H2 1), as required.

**Classification notes.** `health.harvard.edu` ranks 7 on this SERP but sits on the `harvard.edu` `.edu` domain, an explicit allowlist exemption. `pmc.ncbi.nlm.nih.gov/articles/PMC11223451/` ranks 3 but is NIH/NLM, also explicitly allowlisted. Sepah's article is `primary_source` under blog-craft.md §Forbidden external links step 3 (route to the origin document a competitor cites), a classification that does not depend on the linkedin.com allowlist carve-out; it is not one of the analysed top-10 URLs either. Confirmed by the Stage 1c.5 reviewer.

**Deliberately not linked, all four are top-10 ranking competitors and none is allowlist-class:** health.clevelandclinic.org (rank 2), biogena.com (rank 4), medicalnewstoday.com (rank 5), crisistextline.org (rank 8). Where a claim exists only in one of those articles, the claim is dropped rather than linked; the one exception is the Parkinson's/depression/restless-leg/ADHD association in H2 1, which is stated in prose without a link because it is corroborated across several sources and carries no number.

---

## Image placement plan (high-level)

- **Featured (frontmatter cover):** a phone lying face-down on a table in warm evening light beside a book and a mug, hand-lettered title over a flat-vector scene, type: `ai-prompt` (per `images.featured_default` and `custom-instructions.md` §Image style, which requires the featured slot to stay `ai-prompt`)
- **After H2 2 + 1 paragraph:** a person walking with no headphones, mid-thought, the visual for idle attention doing something useful, type: `ai-prompt`
- **After H2 3 + 1 paragraph:** a two-panel flat-vector contrast, one figure staring at a blank wall in an empty room, one reading in a lamp-lit corner, type: `ai-prompt` (a scene, deliberately not a chart, because this section's contrast is already a markdown table)
- **After H2 4 + 1 paragraph:** the graduated cadence as a simple stepped diagram, an evening window, then one day a week, then the occasional longer stretch, type: `remotion` (a genuine diagram, which is what `custom-instructions.md` reserves remotion for; H2 4 has no table, so this duplicates nothing)
- **After H2 5 + 1 paragraph:** a reclaimed evening scene, hands busy with cooking or sketching, no screen in frame, type: `ai-prompt`

One featured plus four in-post, matching blog-craft.md §Image count (1 featured + 3 to 5 in-post). Type mix honours `custom-instructions.md` §Image style: remotion only for the one genuine diagram, `ai-prompt` for every scene.

---

## Word count roll-up

- Intro: ~200 words
- Body sections total: 330 + 330 + 300 + 480 + 280 + 240 = **1,960**
- Outro / CTA: ~100 words
- **Total estimate (body prose, no FAQ): 2,260** vs plan target 2,000 to 2,400. Inside range.
- FAQ: ~200 words (listed for completeness; NOT part of the gated total)

---

## Open questions (recorded, no longer block on a human gate)

- [x] **Section 4 was restructured at Stage 2, away from `plan.md`'s "7-day reset".** Resolved by the editor. The approved plan named section 4 "How to do a dopamine detox right: a 7-day reset". On checking the already-published neighbours, that shape collides almost heading-for-heading with `digital-detox-plan`, which already ships "Before day 1: get your baseline number" and "The 7-day digital detox plan". Publishing a second 7-day screen schedule would have the two posts competing with each other for the same intent. Section 4 is therefore built on the graduated cadence from the source material (an evening window, then one day a week, then the occasional longer stretch), which is both more faithful to `facts.md` §Statistics and genuinely distinct from the neighbouring post, and it links out to `digital-detox-plan` for readers who want the screen-time schedule. The plan's angle, guardrails, facts spine, and word count are otherwise unchanged. The meta description was updated to match.
- [x] **Cleveland Clinic is the source for the "low dopamine is associated with Parkinson's, depression, restless leg syndrome, and ADHD" fact, and it is a forbidden SERP competitor.** Resolved: the claim is stated in prose in H2 1 without a link. It carries no number, it is corroborated by the general dopamine-physiology framing across several sources, and the surrounding paragraph carries the Harvard Health citation. If the Stage 3b reviewer disagrees, the fallback is to cut the clause; the section stands without it.
- [ ] **Headless-run assumptions inherited from `brief.md`.** The category (Productivity), the author (olga), and the decision to run both Reddit and X research were all editor judgments from files rather than human answers, and are logged in `brief.md` §Autopilot assumptions. They are surfaced here so the human can correct any of them at Gate 2.

---

## Changes requested by human (log)

(none)
