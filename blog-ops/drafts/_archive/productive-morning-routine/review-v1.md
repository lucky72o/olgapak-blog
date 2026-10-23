# Review: productive-morning-routine draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/productive-morning-routine/draft-v1.md`, `blog-ops/drafts/productive-morning-routine/outline.md`, `blog-ops/drafts/productive-morning-routine/facts.md`, `blog-ops/drafts/productive-morning-routine/brief.md`, `blog-ops/drafts/productive-morning-routine/research/serp.md`, `research/_raw/reddit-*.json` + `research/_raw/x-*.json` (quote spot-checks), `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/productive-morning-routine/draft-v1.md` (word count: `1,999` body prose excluding frontmatter, FAQ and `[IMAGE:]` placeholder lines; `2,124` including the three placeholder lines; outline target: `2,140`)
- Outline: `blog-ops/drafts/productive-morning-routine/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1 to 3 sentences): The draft is structurally clean (H2 order, FAQ set, frontmatter, keyword, links and word count all pass, zero em-dashes and zero forbidden phrases), but it carries 4 major issues: an invented first-person claim ("My 10-minute backup") that the brief forbids, a misrepresentation of Marc Lou's routine as "short" when the cited post includes 1 to 2 hours at the gym, a 60-minute sample routine that contradicts the post's own 15-to-45-minute rule without explanation, and a 7-step flow diagram whose labels are not stated as text in its section. All four are small, local fixes.

**Iteration counter:** this is revision pass `1` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Partial | Warm, first-person, rhetorical "Do you ever...?" hook (line 14), voice-bank beats "Nope!" (60), "Ouch!" (78), "Yay!" (185). Two drifts: line 132 invents a personal routine ("My 10-minute backup"), and quote lead-ins fall into a repeated praise template (29, 33, 68, 94, 120, 140). authors.md "always translates niche jargon on first use" is missed for timeboxing / Pomodoro (114, 118). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | 0 hits for `one could / one should / users are / stakeholders`. |
| Active voice (no "X was scanned" shapes) | Pass | 0 hits for passive markers. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Per-H2 sentence-length stddev ranges 5.3 (Two sample routines) to 18.2 (Step 3); none below 4. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Both lists grepped (writing-standards.md base list; voice.md adds none). |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | Also 0 hits for `&mdash;` / `&#8212;`. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes in the draft. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

Additional §1 results:
- §1.7 intro jargon: 0 hits in the intro (lines 13 to 19). Pass.
- §1.8 product code-literal grep: draft contains 0 backticks; no product literals. Pass.
- §1.9 intro-hook over-anchoring: the hook is a reader scenario (scrolling at 9:30), not a time-bound event. Skipped.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | Pass | wordpress-rest template: title, date, excerpt (124 chars), 3 tags all from blog.md taxonomy (productivity, time management, planning tips and tricks), authors `Olga Pak`, `draft: true`. No cover field (correct for this adapter). JSON-LD not required by this adapter. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `Productive Morning Routine: 7 Simple Steps to Build Yours` (57 chars, keyword first). |
| Slug / meta description match outline | Pass | Directory slug `productive-morning-routine`; excerpt matches outline Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | Key takeaways, Why most morning routines fail, Step 1 to Step 7, Two sample routines (H3 30-minute, H3 60-minute), closing CTA H2, FAQ. Matches outline H2 1 to H2 10 + Closing CTA + FAQ. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | 3 paragraphs (2 / 1 / 1 sentences). 0 intro internal links, as the outline planned. |
| Direct answer within the first forty words of the body (outline P1 "Direct answer" clause present in the hook) | Pass | Keyword + "7 simple steps" + "a few small habits, set up the night before" land by word 40; "protect one focused block of work" lands at words 41 to 49. Acceptable for how_to (outcome + step count are inside 40 words). |
| Key takeaways block present with 3–5 concrete bullets when the outline has `H2 1: Key takeaways` (required intents: transactional, comparison, review, how_to, data_driven, informational_pillar) | Pass | 4 bullets; each carries a number or a name (7 steps, 7 hours/CDC, Linda Yoon 20 to 30 min, two weeks). Bullet 1 restates the direct answer. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Every H2 has a bullet list and/or a standalone question. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 of 5, question text identical to outline. FAQ is the last block. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest emits no JSON-LD at the adapter level. |
| Outro / CTA paragraph present | Pass | Lines 183 to 187, immediately before `## FAQ`, action anchor "Plan the rest of your day with time blocking" → `/time-blocking`. Targets time-blocking instead of blog.md's AI tools page per the standing operator rule "Don't promote the AI tools"; intended, not an issue. |

Structural deltas vs outline (if any):
- None. The closing CTA H2 wording ("Plan the rest of your day around your focus block") is the writer's; the outline names no heading text for it, so this is not a delta.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass (1 soft) | CDC 7 hours / 30% to 46% / 2022 (line 47), Yoon 20 to 30 min (24, 98, 201), Bean 10 to 15 min (80), "about two weeks" (78), "10x" (33), "9:30" (14, paraphrase of facts.md OP quote) all trace. Routine-length and habit-time numbers (15 to 45 min, 1/5/10/3 min, sample timetables) are outline-specified guidance, not statistics. Soft issue: line 114 "45 and 90 minutes works for a lot of people" phrases outline guidance as an empirical claim (logged minor). |
| Every competitor name used carries a "Best suited to" sentence plus a trade-off, not a takedown | N/A | `modules.competitors: false`; no competitor products named. |
| Methodology H2 present with criteria and disclosure (transactional, comparison and review posts; a review's disclosure only when it names this blog's product; `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Comparison posts) | N/A | Intent `how_to`; no comparison table. |
| Every comparison table cell is a fact, not an adjective; when `modules.product` is on, the product appears as an option in the table (N/A for a review without a comparison table of options, or with the module off; a table of the reviewed product's own plans is not one) | N/A | No tables in the draft. |
| The plan's information gain element survived into the draft, in the H2 the outline names | Pass (1 minor) | Verbatim quotes present in Step 1 (linked, line 51), Step 2 (linked, line 68), Step 3 (verbatim, named, unlinked, line 78), Step 6 (linked, line 140). All quote texts spot-checked against `research/_raw/reddit-14-productivity.json` and `reddit-04-adhd.json`: verbatim. Step 2 and Step 3 quote the same comment (pffxkmd) but read as two different people (logged minor). |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Competitors module off. |
| Product mentions (count: `0`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | Pass | 0 mentions of the AI tools, by design (standing rule; brief.md Avoid list). §3.9 own-product pricing: 0 hits. §3.10 soon-to-ship: none listed. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass (1 minor) | /how-to-plan-your-week (72), /how-to-stop-doomscrolling (106), /pomodoro-technique (114), /what-is-timeboxing (118), /time-blocking (187). 0 in the intro per outline. Placement matches the outline link table. blog-craft "first internal link must appear before the first external link" is broken: first external is CDC at line 47, first internal is line 72 (logged minor). `/what-is-timeboxing` has no file in `content/blog/`; writer reports it returns 200 live. Not verified by this reviewer (no fetch). |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://yourblog.com{route_prefix}...` (absolute = `major`) | Pass | All 5 root-relative, no trailing slash (`trailing_slash: false`). 0 absolute `olgapak.com` links. |
| External links (count: `8`) each point to reputable sources; anchor text = literal claim | Pass (note) | CDC (allowlist .gov, anchor = literal claim), 3 expert bio pages (anchor = expert name, per outline), 3 Reddit comment permalinks, 1 X post. §3.5: none of the 8 hosts/URLs is in `research/serp.md` §Selected results (asana, findyourgoodspace, yahoo, port.ac.uk, camillestyles, apartmenttherapy), and the forbidden Reddit rank-1 thread 12zcdqw is not linked. Count exceeds blog-craft's 3 to 5 guideline; see §10. |
| Target keyword appears 2–8 times in body (actual count: `3`) | Pass | Lines 14, 22, 158 (plus title/excerpt in frontmatter). |

Unsourced / suspicious claims:
- `draft-v1.md:114`, "Somewhere between 45 and 90 minutes works for a lot of people", issue: outline guidance phrased as an observed result; not in facts.md, no `[VERIFY:]`. Reword as a recommendation (minor).
- `draft-v1.md:120` and `:160`, Marc Lou's routine called "a short routine" / "Short routine, one protected block", issue: the cited post (`research/_raw/x-04-marclou.json`) reads "Breakfast w/ wife, 1–2 hours at the gym", so his pre-work routine is not short. facts.md §Named examples carries the same mischaracterization; the draft inherited it (major).
- `draft-v1.md:132`, "My 10-minute backup:", issue: presents a personal routine not in voice.md's anecdote bank; brief.md says "The writer must not invent specific personal morning-routine details" (major).

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `3` vs outline `3` slots | Yes. Each sits after its H2 + first paragraph as the outline planned (49, 112, 162). None is the featured image (featured concept lives in the outline only; no inline `featured.*`). No placeholder is followed directly by a heading. No markdown tables near the two remotion slots. |
| Every data image has its values in nearby text (preceding sentence, same-section table, or caption) | `2` data slots | 1 of 2 fails. Line 162 timeline: every time and activity appears as text in the H3 lists (168 to 181) in the same H2. Pass. Line 112 flow diagram: labels "1-2 habits", "10-minute backup", "2-week test" and the 7 step names are not stated as text in Step 5; they appear only in Key takeaways (line 22). Logged major. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. 0 hits for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`. §4.4 source-clause validation: N/A (0 `[VERIFY:]`).

## 5. Word count

- Draft: `1,999` words (body prose from intro through closing CTA, excluding frontmatter, FAQ and the three `[IMAGE:]` placeholder lines; `2,124` if placeholder lines are counted; FAQ separately `~240`)
- Outline target: `2,140` words
- Delta: `-6.6%` (prose only; `-0.7%` with placeholders)
- Band: within ±10% = pass, no issue. Per-section note: intro runs ~109 vs outline ~200 and Step 7 ~116 vs ~150; Step 5 and Step 3 run close to target. No trim or expand needed.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | 0 hits. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0. |
| En-dashes (`–`) only in numeric ranges | Pass | 0 en-dashes. |
| First-person throughout | Pass | `I` / `you` throughout. |
| Active voice | Pass | 0 passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | Every H2 has a list and/or a standalone question. |
| ≥1 bullet list per ~300 words | Pass | ~11 bullet lists (39 `- ` lines) across ~2,000 words; target ~7. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | Pass | Lines 35, 43, 60, 64, 72, 78, 96, 114, 140, 146, 160. Closing CTA has none (short CTA, acceptable). |
| ≥1 concrete number or named example per major section | Pass | Every body H2 carries a number or a named source. |
| No em-dash overuse | Pass | 0. |
| Visible sentence-length variation in every section | Pass | Lowest stddev 5.3 words (Two sample routines, which is mostly timetable lists). |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Step 6: Write a 10-minute version for bad mornings | 132 | major | "My 10-minute backup:" claims Olga has her own backup routine. Not in voice.md's anecdote bank; brief.md forbids inventing personal morning-routine details (the same failure the v1 plan review caught). | Replace "My 10-minute backup:" with a non-personal lead-in such as "A 10-minute backup can be this short:". Keep the three bullets unchanged. Do not add any other first-person routine detail. |
| Step 5: Protect one focus block / Two sample productive morning routines | 120, 160 | major | Marc Lou's routine is described as "a short routine" (120) and "Short routine, one protected block" (160). The cited X post lists "Breakfast w/ wife" and "1–2 hours at the gym" before work, so it is not short, and calling it short contradicts the post's own "too big if it takes over an hour" sign (line 39). Line 160 also repeats the routine a third time (after 104 and 120). | Line 120: describe it accurately, e.g. "Marc Lou's version isn't short (breakfast, then a gym session), but the shape is the point: the phone has been off since the night before, and once he sits down it's only coding "until lunch."" Keep the three bullets after it. Line 160: delete the Marc Lou recap sentences ("For a real-world reference... one protected block.") so the section opens straight into the two example routines. |
| Two sample productive morning routines (H3 60-minute) | 174 to 181 | major | The 60-minute routine contradicts the post's own rules: Step 3 says "Keep the whole routine somewhere between 15 and 45 minutes" (76), the FAQ says 15 to 45 minutes is plenty (193), and line 39 lists "takes over an hour" as a sign the routine is too big. The H3 offers 60 minutes with no reconciliation. | Add one sentence directly under the H3 "The 60-minute routine (for a slower start)" heading, before the list, explaining that this version runs past Step 3's 45-minute ceiling on purpose: the first 20 minutes are buffer time, not habits, for people who wake slowly (tie it to the "just existing" idea from Step 6). Do not change the timetable. |
| Step 5: Protect one focus block | 112 | major | The remotion flow diagram's labels ("night before, one goal, 1-2 habits, phone away, focus block, 10-minute backup, 2-week test") are not stated as text anywhere in Step 5; blog-craft §Data in images requires the values in the same section (alt text does not count). | Add a one-line caption directly under the line-112 placeholder that lists the seven steps in order as plain text, e.g. "The 7 steps in order: prep the night before, pick one goal, start with one or two habits, park the phone, protect one focus block, keep a 10-minute backup, test it for two weeks." |
| Step 2: Decide the one thing your morning is for / Step 3 | 68, 78 | minor | "Mornings go well when the first hour has one clear job" (68) and "I tried journaling and a long workout..." (78) are the same Reddit comment by u/SandeepKashyap4 (pffxkmd). Line 68 calls him "One r/productivity commenter", line 78 names him, so readers see two people. The Step 3 information-gain quote is also unlinked. | Line 68: attribute by name ("u/SandeepKashyap4 on r/productivity nailed it:") and keep the existing link. Line 78: change "As u/SandeepKashyap4 wrote on r/productivity:" to "The same commenter, u/SandeepKashyap4, also wrote:". Do not add a second link to the same URL. |
| Why most morning routines fail; Step 2; Step 4; Step 5; Step 6 | 29, 33, 68, 94, 120, 140 | minor | Quote lead-ins repeat one template that praises the quote: "summed up the mood perfectly" (29), "put it even more simply" (33), "nailed it" (68), "described it perfectly" (94), "refreshingly blunt" (120), "explained it beautifully" (140). Six in one post reads as a pattern, not a voice. | Keep at most two evaluative lead-ins in the whole post. Rewrite the rest as plain attribution ("wrote", "said", "on r/ADHD:") or let the quote follow a sentence of Olga's own. Suggested: keep 29 and 68, make 94, 120 and 140 plain, and change 33 to "u/lauraspeaks wrote on r/unpopularopinion:". |
| Step 2: Decide the one thing your morning is for | 68, 70 | minor | "Simple, right?" (68) is followed two sentences later by "keeps it simple" (70); "simple/simply" appears 13 times in the draft. | Line 70: replace "keeps it simple:" with "has a rule:" or similar. Leave the title, excerpt and hook's "simple" alone. |
| Step 5: Protect one focus block | 114, 118 | minor | "Pomodoro technique" (114) and "timeboxing" (118) appear without a plain-English gloss. audience.md lists Timeboxing in its jargon table ("giving a task a fixed time slot and stopping when it's up"), and authors.md says Olga "always translates niche jargon on first use". Parkinson's Law is glossed (118); these two are not. | Add a short gloss at first use: after "Pomodoro technique" add "(25-minute work sprints with short breaks)"; after the timeboxing link add a clause such as ", giving each task a fixed time slot and stopping when it's up,". Keep both links and anchors unchanged. |
| Step 5: Protect one focus block | 114 | minor | "Somewhere between 45 and 90 minutes works for a lot of people" presents outline guidance as an observed result with no source. | Reword as a recommendation: "I'd aim for somewhere between 45 and 90 minutes, or a few rounds of the Pomodoro technique if a long stretch feels like too much." |
| Step 1: Start your routine the night before | 47 (vs 72) | minor | blog-craft §Internal linking: "The first internal link must appear before the first external link." The first link in the body is the CDC external link (47); the first internal link is /how-to-plan-your-week (72). The writer flagged this; the outline's link table caused it. | Add one internal link before line 47 without raising the total above 5: move the /how-to-stop-doomscrolling link out of Step 4 (line 106) into the "Why most morning routines fail" section, e.g. add after line 43: "(And if your phone is the thing eating your mornings, here's how to [stop doomscrolling](/how-to-stop-doomscrolling).)" Then rewrite line 106 without the link, or cut it. Keep the anchor text "stop doomscrolling". |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- Every quote is verbatim against the raw research (checked pittdancer pffweye, SandeepKashyap4 pffxkmd, Remarkable_Focus986 pfdr12l, the r/ADHD nys6vhb and nys25fg comments, u/lauraspeaks, Marc Lou and Corey Ganim), and the three therapist attributions link to their own bio pages instead of the Yahoo/Real Simple SERP article. Do not paraphrase or re-source any of them.
- Step 1 (lines 45 to 60) is the strongest section: CDC's 7-hour line plus the 30% to 46% state range with the exact source URL, the pittdancer quote, Laura Sgro's line, a 4-item checklist, then "Is that glamorous? Nope!". It does exactly what the outline asked, in Olga's voice. Leave it as is.
- The Olga voice markers land without being forced: the "Do you ever...?" hook (14), "Same, honestly." (31), "Ouch!" (78), "Yay!" (185), and the timeboxing / Parkinson's Law anecdote (118) taken straight from the anecdote bank with the term glossed. Also keep the Key takeaways block (22 to 25): four bullets, each with a number or a name.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 132 (Step 6): replace "My 10-minute backup:" with a non-personal
   lead-in such as "A 10-minute backup can be this short:". Keep the three
   bullets. Do not add any other first-person routine detail; brief.md
   forbids inventing personal morning-routine details.

2. Line 120 (Step 5): Marc Lou's routine is not short (his post lists
   breakfast and 1–2 hours at the gym). Rewrite the sentence along the lines
   of: "Marc Lou's version isn't short (breakfast, then a gym session), but
   the shape is the point: the phone has been off since the night before,
   and once he sits down it's only coding "until lunch."" Keep the three
   bullets after it.
   Line 160 (Two sample routines): delete the Marc Lou recap sentences
   ("For a real-world reference, remember Marc Lou's four-line version: ...
   Short routine, one protected block.") so the section opens straight into
   the two example routines.

3. Under the H3 "The 60-minute routine (for a slower start)", before the
   list, add one sentence saying this version runs past Step 3's 45-minute
   ceiling on purpose: the first 20 minutes are buffer time, not habits, for
   people who wake slowly (tie it to the "just existing" idea from Step 6).
   Do not change the timetable.

4. Directly under the [IMAGE:] placeholder at line 112 (Step 5), add a
   one-line caption that lists the seven steps as plain text, e.g. "The 7
   steps in order: prep the night before, pick one goal, start with one or
   two habits, park the phone, protect one focus block, keep a 10-minute
   backup, test it for two weeks."

5. Lines 68 and 78: both quotes come from the same comment by
   u/SandeepKashyap4. Name him at line 68 (keep the existing link there).
   At line 78 change "As u/SandeepKashyap4 wrote on r/productivity:" to
   "The same commenter, u/SandeepKashyap4, also wrote:". Do not add a second
   link to the same URL.

6. Quote lead-ins: keep at most two evaluative ones in the whole post.
   Keep line 29 ("summed up the mood perfectly") and line 68 ("nailed it").
   Make the others plain: line 33 -> "u/lauraspeaks wrote on
   r/unpopularopinion:"; line 94 drop "described it perfectly" (e.g. "One
   r/ADHD commenter wrote:"); line 120 drop "refreshingly blunt" (already
   rewritten by item 2); line 140 drop "explained it beautifully" (e.g. "One
   r/ADHD commenter put it this way:").

7. Line 70: replace "keeps it simple:" with "has a rule:" (or similar), to
   avoid "simple" twice in three sentences.

8. Step 5, first use of jargon: after "Pomodoro technique" (line 114) add
   "(25-minute work sprints with short breaks)"; after the timeboxing link
   (line 118) add a clause such as ", giving each task a fixed time slot and
   stopping when it's up,". Keep both links and anchors unchanged.

9. Line 114: reword "Somewhere between 45 and 90 minutes works for a lot of
   people" as a recommendation, e.g. "I'd aim for somewhere between 45 and
   90 minutes, or a few rounds of the Pomodoro technique if a long stretch
   feels like too much."

10. First body link must be internal (blog-craft §Internal linking). Move
   the /how-to-stop-doomscrolling link from Step 4 (line 106) into the "Why
   most morning routines fail" section, e.g. add after line 43: "(And if
   your phone is the thing eating your mornings, here's how to [stop
   doomscrolling](/how-to-stop-doomscrolling).)" Then rewrite line 106
   without the link, or cut it. Keep the anchor text "stop doomscrolling"
   and keep the total at 5 internal links.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/productive-morning-routine/draft-v2.md. Do not overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- **facts.md needs a correction too.** §Named examples describes Marc Lou's routine as "a short routine plus one protected work block". The raw post (`research/_raw/x-04-marclou.json`) includes "1–2 hours at the gym". The editor should fix that row so later stages (humanizer, repurpose) don't reintroduce "short".
- **External link count is 8, above blog-craft's 3 to 5.** Five of the eight are attribution links for the information-gain quotes and expert bios the outline planned, so I did not log it as an issue; trimming them would weaken the gain element. If the editor wants to get closer to 5, the Reddit pffweye link (line 51) and the r/ADHD nys25fg link (line 140) are the least load-bearing, but the outline's information-gain plan calls them "inline linked quotes", so I would leave them.
- **Credibility line, "a decade in aviation PR" (line 16)** follows voice.md's credibility message verbatim, but authors.md's bio says "8+ years in commercial aviation PR and international event management". Not a draft error; flag for the human at Gate 2 if precision matters. The added clause "I've had to rebuild my days more than once" comes from the approved outline P2 and is mild, but it is not in the anecdote bank either.
- **`/what-is-timeboxing`** has no file under `content/blog/`. The writer reports it returns 200 live; I could not verify that (no fetch in this context). Worth a check at Stage 3d or Gate 2.
- **Several quotes are unlinked** (Corey Ganim, u/lauraspeaks, the r/productivity OP, u/Remarkable_Focus986, the r/ADHD nys6vhb comment). All are verbatim and traceable in facts.md, and adding links would push the external count further up, so this is acceptable.
- **CTA target** deviates from blog.md (AI tools page) per the standing operator rule; intended and correctly executed with an action anchor.
