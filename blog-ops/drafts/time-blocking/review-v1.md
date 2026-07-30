# Review: time-blocking draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/time-blocking/draft-v1.md`, `blog-ops/drafts/time-blocking/outline.md`, `blog-ops/drafts/time-blocking/facts.md`, `blog-ops/drafts/time-blocking/brief.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/custom-instructions.md`, `standards/blog-craft.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/time-blocking/draft-v1.md` (word count: `2,204` body prose excluding FAQ; outline target: `2,350`)
- Outline: `blog-ops/drafts/time-blocking/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

**Note on scope:** the editor pre-ran the mechanical checks (em-dashes, forbidden phrases, forbidden SERP-competitor links, external/internal link counts, H2 order, image-marker counts, keyword density, word count) and reported all green. This review spot-verified only the mechanical items that intersect a judgment question, and spent its effort on the seven judgment areas the editor flagged.

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The post's differentiator, cannibalization guard, statistical honesty, and neurodivergent-reader tone all hold, and several passages are genuinely excellent, but the recovery mechanic at the heart of H2 4 is logically muddled (two mutually exclusive moves presented as sequential steps), the H3 3.5 heading asserts the one claim `facts.md` explicitly forbids upgrading, and the FAQ block reintroduces an unsourced number and inflates a single commenter into "widely echoed." Per the Step 4 tree, the unsourced numeric claim at line 159 forces this branch independently of reviewer judgment.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`voice.md` + §`authors.md`) | partial | Rhythm, warmth, and jargon translation are on-voice and often excellent. Two gaps: the mandated personal anecdote is missing where it was planned (line 29), and the draft carries essentially zero self-deprecation, which `voice.md` §Tone and `authors.md` §Voice notes both name. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | 19 `I` occurrences; zero hits for `one could` / `one should` / `users are` / `stakeholders`. No `we`-voice slip on a single-narrator post. |
| Active voice (no "X was scanned" shapes) | pass | No passive-marker hits. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Strong throughout. e.g. line 92 `"Be productive" is not a block. "Draft section two" is a block.`; line 139 `Categories, yes. Clock-precision per task, no.`; line 143 `You keep the order. You give up the clock.` |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Pre-verified by the editor; not re-run. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail | pass | Pre-verified by the editor; not re-run. |
| En-dash context: every `–` hit is inside a numeric range | pass | 1 hit, line 94, `60–90` inside the `[VERIFY:]` marker. Digits both sides, valid numeric range. |
| Intro jargon check (`audience.md` §Niche jargon translation) | pass | Intro (lines 15–21) carries no untranslated specialist term. In-body translations are all present on first use: Parkinson's Law (line 29, "work stretches to fill whatever time you hand it"), deep work (line 33, "long, undistracted stretches on cognitively demanding tasks"), timeboxing / task batching / day theming (table, lines 47–52). |
| Intro-hook over-anchoring | n/a | The hook is an experiential scenario ("by 11am"), not a time-bound news event. The `11am` motif recurring in the H2 4 title is the outline's own structure, not event-anchoring. |
| Avoid-list: hustle culture / billionaire-calendar framing (`brief.md`) | pass | Actively defended, not merely avoided. Line 33: "None of this is new, and it isn't a founder trick." Line 147: "Don't rebuild your life on a Sunday." |

Forbidden phrases found: None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per `adapters/publish/frontmatter/wordpress.md` | pass | All six required fields present: `title`, `date`, `excerpt`, `tags`, `authors`, `draft: true`. Correctly carries **no** `cover`/`heroImage` field (wordpress-rest ships the featured image via media upload). |
| Title in frontmatter matches outline "Final title" exactly | pass | `Time Blocking: How to Do It (Without It Falling Apart)`, 53 chars (template wants 50–60). |
| Slug / meta description match outline | pass | `excerpt` is byte-identical to the outline's Final meta description, 137 chars (≤160). Slug is filename-derived for this adapter. |
| H2 order in body matches outline body-sections list exactly | pass | 7 H2s in outline order; pre-verified by the editor. |
| Intro is 2–4 paragraphs, 1–3 sentences each | pass | 4 paragraphs (lines 15, 17, 19, 21) of 2/2/1/1 sentences. 150 words. |
| Intro internal links ≤2, contextual | pass | 1 (`/planning-tips-to-maximize-productivity`, line 19), and it precedes the post's first external link at line 29 as the outline required. |
| Every H2 has at least one rhythm marker | pass | H2 1 bullets + question; H2 2 table + standalone question; H2 3 bullets + concrete numbers (no question, see minor issue 11); H2 4 bullets + question; H2 5 bullets + question. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 questions, verbatim match to the outline's 5, in order. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | n/a | `wordpress-rest` adapter emits no JSON-LD; FAQPage schema is a WP-plugin concern per the frontmatter template §FAQ. Sub-check correctly skipped. |
| FAQ is the last block, nothing after it | pass | File ends at line 171 with the final FAQ answer. |
| Outro / CTA paragraph present, links `blog.md` CTA target with an action anchor | pass | Lines 145–149, 99 words vs ~100 budget, sits immediately before `## FAQ`. Anchor "try my free AI tools to automate the mundane" → `/ai-tools`, which is the `blog.md` §Primary CTA hook near-verbatim. One product mention in the whole post, as the outline required, with a real use ("shrinks the block before it ever reaches your calendar"). No prices. |

Structural deltas vs outline (if any):
- No structural drift. Every H2, H3, FAQ item, image slot, and link target lands where the outline put it.
- **Section-budget imbalance** (not a structural delta, but worth the editor's attention): H2 3 runs 615 words against a 550 budget while H2 4, the post's stated reason for existing, runs 364 against a 420 budget. The outline explicitly sanctioned an H2 3 overrun, so this is not a violation, but the post is spending its length in the section competitors already cover well and economizing in the section that is supposed to beat them. See minor issue 9.

Per-section counts vs outline budget: intro 150/200, H2 1 304/380, H2 2 331/350, H2 3 615/550, H2 4 364/420, H2 5 341/350, CTA 99/100.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | **fail** | One hit: line 159 (FAQ) repeats "Roughly 60 to 90 minutes" with no marker and no `facts.md` entry. The body instance at line 94 is correctly marked; the FAQ instance is not. See major issue 3. |
| Banned "Rejected / not verifiable" figures absent in any rewording | pass | Scanned for 40% context-switching, 53% more tasks, 20% chronic procrastinators, unnamed MIT study, 2013 Utah study, 1,500 monthly searches, and the 40h/60h Newport estimate used as data. **Zero hits, including softened paraphrases.** The two regex matches were false positives on `commitments` and `admitting`. This is a clean result on the brief's single largest sourcing risk. |
| 2.5% supertaskers stat scoped per `facts.md` scoping note | pass | Line 31 confines it to "Almost nobody genuinely does two demanding things at once." No time-savings claim, no productivity percentage, no link to time blocking's efficacy. Exemplary. |
| Stanford CTL attributed as institutional guidance, not a study | pass | Line 84 pre-empts the misread inside the same sentence: "That's institutional advice for building a weekly calendar, not a research finding." |
| Reddit/X quotes attributed by username + subreddit, never as expert authority | pass, 1 gap | All eight VOC quotes carry username + subreddit. Line 143 (u/Bunnyeatsdesign) is the only one without a link. See minor issue 7. |
| Single-commenter views not upgraded into consensus | **fail** | Two hits, both outside the body prose where the writer got it right. Line 96 heading and line 167 FAQ. See major issues 1 and 4. |
| Franklin / Newport handled at the safe generality | pass | Line 33 states Franklin "planned the activities he would undertake each hour of the day" with no verbatim schedule and no Ladders citation, exactly as `facts.md` §Named examples permits. |
| Reactive-role pattern described in writer's own words, no forbidden persona names | pass | Line 124 uses "a teller at a counter, someone on a production line, a nurse on a ward". No Richard/Liza/Hannes/Ellis. No link to the forbidden competitor. |
| Product mentions each earn their place | pass | 1 mention (line 149), in the CTA only, with a topic-matched job to do. Not deletable without losing the sentence. |
| Internal links (count: `5` + CTA) root-relative, no trailing slash | pass | Pre-verified by the editor. Each sits in the section the outline assigned it. |
| External links (count: `5` authority + 8 VOC) each reputable; anchor = literal claim | pass | Pre-verified by the editor. Anchor text on all 5 authority links is the literal claim, e.g. "only about 2.5% of people multitask effectively", "at least 15 hours of entirely blank space". |
| Target keyword appears 2–8 times in body | pass | 6, per the editor's count. |

Unsourced / suspicious claims:
- `draft-v1.md:159`, "Roughly 60 to 90 minutes works for focused work", issue: `not in facts.md, no [VERIFY:] marker on the line`. The body twin at line 94 is marked; this one escaped.
- `draft-v1.md:167`, "one widely echoed reader rule ... is a 60/20/20 split", issue: `"widely echoed" is unsupported`. `facts.md` records this as one commenter (u/NectarineActive5664) and describes it as "the most concrete buffer rule found in any source", which is a statement about concreteness, not about how often it recurs.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | Shape valid. Contains ` \| source:` with a non-trivial clause ("outline.md §H3 3.4 and §FAQ direction, no matching facts.md entry"), which is an honest admission rather than a fabricated attribution. Not a competitor pricing/feature claim, so §3.7 does not apply. Incomplete coverage, though, see major issue 3. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | n/a |
| `[INTERNAL_LINK_NEEDED:]` | `0` | n/a |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Counts match. Featured-image hygiene (§4.2a): pass, no inline placeholder duplicates the featured concept and no `featured.*` filename appears. Placement hygiene (§4.2b): 3 of 4 pass; line 66 sits immediately before an H3, see minor issue 8. Table-redundant chart (§4.2c): the `remotion` slot at line 66 falls within ±20 lines of the table at 47–52, but that table compares four methods while the chart shows a 60/20/20 day split. Not redundant. Dismissed. |

Marker-shape problems: None. No lowercase `[Verify:`, no `[EXTERNAL_NEEDED:`, no stray `TODO:` / `[TBD]`.

## 5. Word count

- Draft: `2,204` words (body prose, excluding frontmatter and the `## FAQ` block)
- Outline target: `2,350` words
- Delta: `-6.2%`
- Band: `within ±10% = pass, no issue logged`

## 6. Humanization floor

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | |
| Zero em-dashes (`—`) | pass | |
| En-dashes (`–`) only in numeric ranges | pass | 1 hit, `60–90`, valid |
| First-person throughout | pass | 19 `I`, no third-person drift |
| Active voice | pass | |
| ≥1 rhythm marker in every H2 | pass | |
| ≥1 bullet list per ~300 words | pass | 11 bullets across 2,204 words, roughly 1 per 200. Lists in H2 1, 3, 4, 5; H2 2 uses a table instead, which serves the same function. |
| ≥1 standalone-question paragraph per major section | partial | Standalone question paragraphs at lines 58 and 141; sentence-initial rhetorical pivots at 29 and 112. H2 3, the longest section at 615 words, has no question of either kind. See minor issue 11. |
| ≥1 concrete number or named example per major section | pass | H2 1: 2.5%, Franklin, Newport. H2 2: 9:00–11:00, 4:00. H2 3: 15 hours, 60/20/20, doubling rule. H2 4: 11:03, @mattragland. H2 5: High/Medium/Low, Newport. |
| No em-dash overuse | pass | Zero |
| Visible sentence-length variation in every section | pass | |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 3 / H3 3.5 | 96 | major | The H3 heading "The tools: your calendar is probably enough" asserts, as a bare statement, the exact claim `facts.md` §Quotes forbids upgrading to: "you probably only need your calendar." The body underneath handles it correctly, but a heading is what skimmers read, what the table of contents shows, and what a search engine may lift as a snippet. The hedge three sentences later does not reach the reader who only reads headings. | Retitle the H3 so it poses the question instead of answering it, e.g. `The tools: does the app actually matter?`. Change the heading text only; leave the body of H3 3.5 (lines 98–100) exactly as written, it is the correctly-sourced version. |
| H2 4 | 112–116 | major | The recovery mechanic, which is the entire justification for this post existing, is presented as "Three moves, in order" but is not a sequence. Move 1 ("Slide, don't delete") sacrifices the *last* block of the day; move 2 ("Drop the lowest-value block whole") sacrifices a *different* block. They are mutually exclusive branches, and the post gives the reader no trigger for choosing between them. Move 3 ("Write down what it really took") is not a recovery move at all, it is a next-week calibration habit. A reader standing at 11:03 finishes this list without knowing what to actually do. | Restructure lines 112–116 as one decision plus one habit. Replace "Three moves, in order:" with a decision trigger, then two branches and a closing habit line, e.g.: first ask whether what's left of the day can absorb the overrun; **if it can, slide** (push the rest back and accept the last thing falls off, that's a decision, not a collapse); **if it can't, drop your lowest-value block whole** rather than compressing five blocks into four hours. Then keep "Write down what it really took" as a separate closing sentence outside the list, framed as what makes next week fit rather than as a third move. Keep the existing "Compressing five blocks into four hours means five things done badly. Killing one means four done properly." line, it is the sharpest sentence in the section. |
| FAQ | 159 | major | "Roughly 60 to 90 minutes works for focused work" is an unsourced numeric claim: no `facts.md` entry, no `[VERIFY:]` marker on the line. The identical claim at line 94 carries a marker, so the number is currently half-guarded, and a Stage 3d human verifying line 94 would not know line 159 exists. This is the check that independently forces `request_revisions`. | Resolve both instances the same way, and prefer converting rather than sourcing (see §10 for the reasoning). Recommended: at line 94, drop the `[VERIFY:]` marker and reattribute the number to personal practice in Olga's own voice, e.g. "Sixty to ninety minutes is what works for me before attention starts sagging, and admin blocks want to be short...". At line 159, mirror that framing: "In my experience 60 to 90 minutes works for focused work". First-person practice is a legitimate, on-voice, unverifiable-by-design claim; a bare number presented as general fact is not. If instead you keep it as a general claim, line 159 must carry its own `[VERIFY:]` marker with a `\| source:` clause. |
| FAQ | 167 | major | "one widely echoed reader rule ... is a 60/20/20 split" upgrades a single commenter into a widespread convention. `facts.md` records exactly one source for this (u/NectarineActive5664) and calls it the most *concrete* rule found, which is a claim about specificity, not about frequency. This is the same single-commenter-to-consensus inflation `facts.md` forbids for the tools quote, and the body at line 85 gets it right, so only the FAQ is wrong. | Change "one widely echoed reader rule, from u/NectarineActive5664 on r/productivity" to "one reader's rule, from u/NectarineActive5664 on r/productivity". Delete the words "widely echoed". Change nothing else in that answer. |
| H2 1 | 29 | major | Voice: the Parkinson's Law paragraph is written as encyclopedia exposition ("There is a name for what happens next..."). `brief.md` §Founder anecdote and `voice.md` §Personal-anecdote bank both name beating Parkinson's Law as *the* on-topic anecdote for this post, and `voice.md` §Credibility message is "tested, not theorized." This is the post's single best opportunity for the first-person credibility beat and it is spent on a definition. The section reads competent-generic here, not like Olga. | Add one first-person sentence to the paragraph at line 29, before or after the definition, drawn from the anecdote bank. Something in the shape of: "I learned this the expensive way, by giving myself an entire Sunday for one essay and watching it take an entire Sunday." Keep the existing plain-English translation ("work stretches to fill whatever time you hand it") and the Wikipedia link, both are correct. **Do not** reach for the timeboxing half of that anecdote, the cannibalization guard is at its ceiling already; tell the Parkinson's Law half only. |
| H2 4 | 104 | minor | The mandated back-reference sentence overstates its own claim: "which is exactly the line the comparison table above draws." The table draws the definitional line between blocking and timeboxing; it draws no line about buffers or gaps, which is what this paragraph is actually about. The parenthetical "(hard stops, nothing between them)" also edges toward re-teaching the distinction the outline said not to re-teach. | Tighten the same single sentence (do not add a second, exactly one back-reference is the hard constraint): "This is the timeboxing failure mode leaking into a time-blocked calendar." Delete the parenthetical and delete the "which is exactly the line..." clause. |
| H2 5 | 143 | minor | u/Bunnyeatsdesign is the only voice-of-customer quote in the post cited without a link, while the other eight are all linked. Inconsistent, and it slightly weakens a quote that is doing real work as the section's named alternative. | Link "r/productivity" on line 143 to `https://www.reddit.com/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/`, the same thread already cited at lines 85 and 108. |
| H2 3 | 66 | minor | The `remotion` `[IMAGE:]` placeholder sits immediately before the `### Start from your week, not your day` heading, so it renders before a heading rather than after one, and the paragraph above it (line 64) cites no evidence the image closes. The outline's placement plan did specify "After H2 3 + 1 paragraph", so this is sanctioned drift rather than writer error. | Optional, editor's call. If moving: place the placeholder after line 70 (the first H3's body paragraph). If the outline's placement is preferred as-is, leave it and this row is informational only. |
| H2 3 / H2 4 | 62–120 | minor | Budget imbalance. H2 3 runs 615 words against 550 while H2 4, the differentiator, runs 364 against 420. The post is longest where competitors are already strong and shortest where it is supposed to win. Total is comfortably inside band (-6.2%), so this is about distribution, not length. | Fold the roughly 60 words freed by tightening H2 3 into H2 4's recovery mechanic while restructuring it per the major issue above. Do not thin H3 3.3 (lines 80–88), which the outline flags as the post's most useful concrete guidance. The trimmable fat is in H2 3's connective prose, not its numbers. |
| Body-wide | 29, 58, 112, 141 | minor | All four rhetorical pivots in the post use the identical construction: "So why does...?", "So which one...?", "So what do you actually do...?", "So what replaces...?". Four instances of one formula is a uniformity tell in a draft that is otherwise well-varied. | Vary two of the four. Drop the leading "So" from one (line 58 works as "Which one are you actually looking for?") and reshape another into a statement or a direct address consistent with `voice.md`'s "Do you ever feel...?" register. |
| H2 3 | 62–100 | minor | The post's longest section (615 words) contains no question of any kind, standalone or sentence-initial, while every other H2 has one. Contributes to H2 3 reading as the most procedural, least conversational stretch of the post. | If you reshape the pivots per the row above, land one of the varied questions in H2 3, most naturally at the top of H3 3.3 (line 82) where the reader is being asked to make a choice. |
| FAQ | 163 | minor | The "Is time blocking the same as timeboxing?" answer runs to three sentences where the outline specified "One sentence, then the link to `/what-is-timeboxing`. Do not expand." The first distinction sentence also near-duplicates line 54. Cumulative timeboxing surface across the post is now a table row + 2 sentences + 1 back-reference + 3 FAQ sentences, which is still inside the guard but has no headroom left. | Delete the clause "They pair well, but they solve different problems, and" from line 163, leaving: "No. Time blocking reserves a chunk of your calendar for a kind of work, while timeboxing puts a hard deadline on a specific task and you stop when the time is up, finished or not. The timeboxing half has [its own guide](/what-is-timeboxing) here." |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision.

- **Line 31, the 2.5% supertaskers handling.** The sentence stops exactly where `facts.md`'s scoping note says to stop: "Almost nobody genuinely does two demanding things at once. The rest of us switch fast and call it multitasking." No time-savings figure, no productivity percentage, no implied claim about time blocking's efficacy. This is the hardest statistic in the pool to use honestly and the draft uses it perfectly. Do not touch this paragraph.
- **Line 84, the Stanford CTL attribution.** The draft pre-empts the misread inside the same sentence: "That's institutional advice for building a weekly calendar, not a research finding, but it's the most concrete buffer number I found anywhere." That second clause is doing real work, it tells the reader why a non-study is still worth their attention, which is a much harder move than either overclaiming or hedging. Keep verbatim.
- **Lines 137–139, the H2 5 spectrum.** Both readers appear in their own words: the one who scrapped the calendar for Energy Slices, and the contrarian who kept the method in modified form and located the failure precisely ("I hate allocating a set start/finish time to individual tasks"). The draft never uses a clinical term anywhere in the post, never diagnoses, and never implies a diagnosis is required to find rigid schedules unworkable. It frames the group situationally ("readers whose available energy simply isn't the same on Monday and Thursday") and closes with "Categories, yes. Clock-precision per task, no." This is the post's widest SERP gap and its highest-risk section, and it is handled better than the brief asked for. Do not soften, restructure, or add caveats to it.

## 9. Instructions for writer

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 96, H3 3.5 heading. Retitle "The tools: your calendar is probably
   enough" to "The tools: does the app actually matter?". Change the heading
   text ONLY. Leave lines 98-100 exactly as written, that body is the
   correctly-sourced version and must not be re-hedged or re-balanced.

2. Lines 112-116, H2 4's recovery mechanic. This is the post's differentiator
   and it currently does not work as instructions. Replace "Three moves, in
   order:" with a decision plus a habit. Ask first whether what's left of the
   day can absorb the overrun. If it can, slide (push the rest back, accept
   the last thing falls off, that's a decision not a collapse). If it can't,
   drop the lowest-value block whole rather than compressing. Then move "Write
   down what it really took" out of the list into a closing sentence, framed
   as what makes next week fit. Keep the sentence "Compressing five blocks
   into four hours means five things done badly. Killing one means four done
   properly." verbatim, it is the sharpest line in the section.

3. Lines 94 and 159, the 60-to-90-minute claim. Resolve both instances
   together. Preferred fix: convert it from a general claim into personal
   practice. At line 94, delete the [VERIFY:] marker and write it as "Sixty to
   ninety minutes is what works for me before attention starts sagging". At
   line 159, mirror it: "In my experience 60 to 90 minutes works for focused
   work". If you instead keep it as a general claim, line 159 MUST carry its
   own [VERIFY: ... | source: ...] marker; a marked claim in the body and an
   unmarked twin in the FAQ is not acceptable.

4. Line 167, FAQ. Delete the words "widely echoed". The phrase becomes "one
   reader's rule, from u/NectarineActive5664 on r/productivity". Change
   nothing else in that answer.

5. Line 29, H2 1. Add ONE first-person sentence to the Parkinson's Law
   paragraph, from the anecdote bank (brief.md, Founder anecdote). Shape:
   giving yourself a whole Sunday for one essay and watching it take the whole
   Sunday. Keep the plain-English translation and the Wikipedia link. Do NOT
   mention timeboxing in this sentence, the cannibalization guard has no
   headroom left.

6. Line 104. Tighten the back-reference to exactly: "This is the timeboxing
   failure mode leaking into a time-blocked calendar." Delete the parenthetical
   and the "which is exactly the line the comparison table above draws" clause.
   It must remain exactly ONE sentence, no more and no fewer.

7. Line 143. Link "r/productivity" to
   https://www.reddit.com/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/
   so u/Bunnyeatsdesign matches the other eight quote citations.

8. Line 163, FAQ. Delete the clause "They pair well, but they solve different
   problems, and" so the answer is No + one distinction sentence + the link.

9. Vary the "So <question>?" formula at lines 29, 58, 112 and 141, currently
   four identical constructions. Change at least two. Land one question inside
   H2 3, which is the longest section and currently has none, most naturally
   at the top of H3 3.3.

10. Rebalance length: tighten H2 3's connective prose (currently 615 words vs
    a 550 budget) and spend the freed words on H2 4's recovery mechanic
    (currently 364 vs 420). Do NOT thin H3 3.3, lines 80-88, which holds the
    post's most useful concrete guidance.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to (issue 3 does, for line
94 only, and only if you take the personal-practice route). Do NOT change the
H2 order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/time-blocking/draft-v2.md. Do not overwrite the prior
draft.
```

## 10. Reviewer notes (free-form)

**On the differentiator (the editor's question 1).** H2 4 does more than sympathize, so it clears the bar the brief set, but only just. The diagnosis is genuinely good and genuinely native to time blocking ("It dies because you built an over-packed calendar with zero buffer between blocks: a day designed for a version of you with no interruptions, no bad night's sleep, and no colleagues"), and the section does reach for a real mechanic rather than trailing off into encouragement. What undermines it is structural, not attitudinal: the section spends lines 104–111 on diagnosis and two sympathy quotes before it reaches the payload at 112, and then the payload itself is a list of three items that are not parallel and not sequential. A reader who came to this post from the SERP specifically because their plan broke has to read three beats of "yes, this happens to everyone" before getting an instruction, and the instruction then forks without telling them which fork to take. Fixing issue 2 is what converts this section from "better than the competitors" into "the reason to link to this post." It is the single highest-value change in the revision.

**On the cannibalization guard (question 2).** Holds, but with essentially zero headroom, and the editor should treat any future addition here as a regression. Current surface: one table row (line 50), two substantive sentences at line 54 of which the second is the handoff itself, one permitted back-reference at line 104, and three FAQ sentences at 163. Nothing anywhere teaches how to timebox, its benefits, or its history. The one borderline case is line 60, "If your problem is that one task swallows an entire afternoon, you want a hard stop on the task itself", which describes the timeboxing use case without naming it. I am deliberately not flagging it: it is routing advice that helps the reader pick a method, it does not teach the method, and it is arguably the most useful sentence in H2 2. But it is the reason issue 12 (trimming the FAQ answer) is worth doing, the cumulative total is at the ceiling.

**On H2 4's required framing (question 3).** Verified literally, all three parts. The phrase "an over-packed calendar with zero buffer between blocks" appears verbatim at line 104. The forbidden phrase "clock-precision, per-task scheduling" does not appear in H2 4. It does appear, in a variant, at line 139 as "Clock-precision per task, no" — but that is in H2 5, attached to u/riloky's quote, which is precisely where `facts.md` says that framing belongs ("it locates the failure in *clock-precision per-task scheduling*"). That is correct placement, not a violation. And the back-reference to H2 2 is exactly one sentence, the third sentence of line 104. Only its content overstates, hence the minor at issue 6.

**On statistical honesty (question 4).** The cleanest result in this review. Every banned figure is absent in every rewording I could construct a probe for, including the softened forms `facts.md` specifically warns about. The 2.5% statistic is scoped exactly as instructed. The two honesty failures I did find are both in the FAQ, not the body, which suggests the writer's guard dropped once it left the main prose. Worth the editor knowing as a pattern for future drafts: the FAQ block is where sourcing discipline slips, because it feels like summary rather than assertion. It isn't, it is the block most likely to be lifted into a search result.

**On the tools beat (question 5).** The body is a model answer. u/SalkMe is named, the view is explicitly labelled "one commenter's view rather than a settled verdict", the dissent is named as a person (u/ihateredditmor) and credited with "a real case" rather than being strawmanned, and the conclusion is calibrated to "a reasonable starting default, not a rule." I could not improve it. The heading above it then throws it away, which is why issue 1 is `major` rather than `minor`. Note that the outline itself specified this H3 title verbatim, so this is an outline/facts.md conflict the writer inherited rather than a writer error. `facts.md` is the harder constraint and the outline permits phrasing adjustments, so the heading should change.

**On H2 5's tone (question 6).** This section is the best thing in the draft and the editor should protect it. Specifics worth naming: the draft never once uses a clinical or diagnostic term anywhere in the post, the two subreddit names appear only as citation anchors, the groups are described by situation rather than identity ("People whose available energy swings from one day to the next, so a plan made on Monday is fiction by Thursday"), both ends of the spectrum are present with the contrarian given the more precise line, and the section closes by handing over a concrete replacement method rather than a disclaimer. It also opens by conceding the point rather than defending the technique ("Some days genuinely cannot be blocked, and pretending otherwise is how guides lose people"), which is what earns the reader's trust before the alternatives arrive. There is nothing to fix here.

**On voice (question 7).** Mostly Olga, not generic, but thinner than it should be in the first third. The draft has a real supply of writing no template would produce: "feel briefly invincible", "my to-do list had quietly turned into a wish list", "you'll do the wrong three things beautifully", "A calendar you've stopped trusting is just decoration", "instead of proof that you're hopeless", "the day is already shouting at you", "in a fair fight your phone will win", "Week one isn't performance, it's data collection." That is a genuinely good hit rate. Two gaps keep it from fully landing. First, the missing anecdote at line 29 (issue 5), which matters more than a normal voice note because `brief.md` designated that exact anecdote for that exact concept and the draft used the concept without the anecdote. Second, there is no self-deprecation anywhere, which both `voice.md` §Tone and `authors.md` §Voice notes list as a defining trait; line 64's "your first few attempts will be wrong" points the fallibility at the reader rather than at Olga. Fixing issue 5 addresses both at once, since the Sunday-essay anecdote is self-deprecating by construction.

**On the `[VERIFY:]` marker (question 8), my recommendation: convert, do not source.** Three reasons. First, the number is very unlikely to survive Stage 3d honestly. "60 to 90 minutes" is folk wisdom in this niche with no primary source that the Stage 1 research surfaced, and `facts.md` §Rejected exists precisely because this topic's most-repeated numbers do not trace anywhere; a determined search would most likely produce a vendor blog, which `brief.md`'s avoid list rules out anyway. Second, the surrounding sentences do not need it. Line 94's real point is the contrast between focused blocks and short admin blocks, which survives intact at "long enough for one real task, and admin blocks want to be short." Line 159 already argues against its own number two sentences later ("Treat those as starting numbers, not rules... your own calibration data beats any figure a guide can hand you"), so the FAQ is stronger, not weaker, without a specific figure asserted as fact. Third, and best, the post has a first-person narrator with genuine practice, which converts an unsourceable statistic into a fully legitimate claim at no cost. "Sixty to ninety minutes is what works for me" needs no verification, matches `voice.md`'s "tested, not theorized" credibility message, and is more useful to the reader than an unattributed general rule. That is the route issue 3's fix instruction takes. The blocking condition is only that both instances get resolved the same way.

**For the editor.** Nothing here is structural and nothing requires re-outlining. Five majors, seven minors, no criticals, no `reject` conditions anywhere near. The draft is closer to publishable than the issue count suggests: three of the five majors are one-line edits (the heading, the two FAQ phrases), one is a single added sentence, and only issue 2 is real rewriting. Expect draft-v2 to be approvable.
