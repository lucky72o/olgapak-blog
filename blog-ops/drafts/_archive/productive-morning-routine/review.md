# Review: productive-morning-routine draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/productive-morning-routine/draft-v2.md`, `blog-ops/drafts/productive-morning-routine/draft-v1.md` (diffed), `blog-ops/drafts/productive-morning-routine/review-v1.md`, `blog-ops/drafts/productive-morning-routine/outline.md`, `blog-ops/drafts/productive-morning-routine/facts.md`, `blog-ops/drafts/productive-morning-routine/brief.md`, `blog-ops/drafts/productive-morning-routine/research/serp.md`, `research/_raw/x-04-marclou.json` (quote spot-check), `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/productive-morning-routine/draft-v2.md` (word count: `2,064` body prose excluding frontmatter, FAQ and `[IMAGE:]` placeholder lines; `2,189` including the three placeholder lines; outline target: `2,140`)
- Outline: `blog-ops/drafts/productive-morning-routine/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1 to 3 sentences): All ten review-v1 issues are fixed with surgical edits (the v1 to v2 diff touches only the flagged lines), and the four v1 majors (invented personal backup routine, Marc Lou called "short", unreconciled 60-minute routine, flow-diagram labels missing as text) are gone. Every § passes, with 0 critical, 0 major, 0 em-dashes, 0 forbidden phrases and 0 unsourced numeric claims. One new minor (an ambiguous "Boil it down" lead-in at line 120) is optional polish, not a blocker.

**Iteration counter:** this is revision pass `2` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Pass | Warm first person, "Do you ever...?" hook (14), rhythm beats "Same, honestly." (31), "Nope!" (60), "Ouch!" (78), "Yay!" (187). The v1 drifts are fixed: no invented personal routine (132 now "A 10-minute backup can be this short:"), evaluative quote lead-ins cut to two (29 "summed up the mood perfectly", 68 "nailed it"), and jargon is glossed on first use: Pomodoro (114), timeboxing (118), Parkinson's Law (118). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | 0 hits for `one could / one should / users are / stakeholders`. |
| Active voice (no "X was scanned" shapes) | Pass | 0 passive-marker hits. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Per-H2 sentence-length stddev ranges 4.6 (intro, 4 sentences) to 19.5 (Step 3); every H2 body section is at 5.4 or above. None below 4. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Base list from writing-standards.md grepped case-insensitively; voice.md adds none. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | Also 0 hits for `&mdash;` / `&#8212;`. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

Additional §1 results:
- §1.7 intro jargon: 0 hits in the intro (lines 13 to 19). Pass.
- §1.8 product code-literal grep: 0 backticks in the draft; no product literals. Pass.
- §1.9 intro-hook over-anchoring: the hook is a reader scenario, not a time-bound event. Skipped.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | Pass | Unchanged from v1 (verified by diff): title, date, excerpt, 3 taxonomy tags, authors `Olga Pak`, `draft: true`. No cover field and no JSON-LD, both correct for wordpress-rest. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `Productive Morning Routine: 7 Simple Steps to Build Yours`. |
| Slug / meta description match outline | Pass | Slug `productive-morning-routine`; excerpt matches the outline Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | Key takeaways, Why most morning routines fail, Step 1 to Step 7, Two sample routines (H3 30-minute, H3 60-minute), closing CTA H2, FAQ. Same as v1. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | 3 paragraphs (2 / 1 / 1 sentences), 0 intro internal links as planned. |
| Direct answer within the first forty words of the body (outline P1 "Direct answer" clause present in the hook) | Pass | Keyword, "7 simple steps" and "a few small habits, set up the night before" land by word 40; "protect one focused block of work" follows at words 43 to 49. Accepted at v1 on the same basis; unchanged. |
| Key takeaways block present with 3–5 concrete bullets when the outline has `H2 1: Key takeaways` (required intents: transactional, comparison, review, how_to, data_driven, informational_pillar) | Pass | 4 bullets (22 to 25), each with a number or a name. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Every H2 has a bullet list and/or a standalone question; the CTA H2 has "Yay!" and a sentence-length swing. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 of 5, question text identical to the outline. FAQ is the last block. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest emits no JSON-LD at the adapter level. |
| Outro / CTA paragraph present | Pass | Lines 185 to 189, immediately before `## FAQ`, action anchor "Plan the rest of your day with time blocking" to `/time-blocking`. Deviates from blog.md's AI tools CTA per the standing operator rule "Don't promote the AI tools"; intended, not an issue. |

Structural deltas vs outline (if any):
- None that count as H2 deltas. Two intentional content moves made on review-v1's instructions: the /how-to-stop-doomscrolling link moved from Step 4 to the "Why most morning routines fail" section (line 43) so the first body link is internal, and the Marc Lou recap was removed from the "Two sample routines" opener (outline H2 10 mentions it as the real-world reference) because it repeated him a third time. Marc Lou still appears in Step 4 (104) and Step 5 (120).

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | CDC 7 hours / 30% to 46% / 2022 (47), Yoon 20 to 30 min (24, 98, 203), Bean 10 to 15 min (80), "about two weeks" (78, 146), "10x" (33), "9:30" (14, paraphrase of the facts.md OP quote), Marc Lou "until lunch" (120, verbatim fragment of `Cursor + localhost:3000 only, until lunch` in `research/_raw/x-04-marclou.json`). Routine lengths, habit times and sample timetables are outline-specified guidance phrased as recommendations ("I'd aim for", 114). The Pomodoro gloss (114) is number-free, so it introduces no unsourced "25 minutes". |
| Every competitor name used carries a "Best suited to" sentence plus a trade-off, not a takedown | N/A | `modules.competitors: false`; no competitor products named. |
| Methodology H2 present with criteria and disclosure (transactional, comparison and review posts; a review's disclosure only when it names this blog's product; `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Comparison posts) | N/A | Intent `how_to`; no comparison table. |
| Every comparison table cell is a fact, not an adjective; when `modules.product` is on, the product appears as an option in the table (N/A for a review without a comparison table of options, or with the module off; a table of the reviewed product's own plans is not one) | N/A | No tables in the draft. |
| The plan's information gain element survived into the draft, in the H2 the outline names | Pass | Verbatim quotes present in Step 1 (linked, 51), Step 2 (linked, 68), Step 3 (78, now attributed as "The same commenter", correctly tied to line 68), Step 6 (linked, 140). |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Competitors module off. |
| Product mentions (count: `0`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | Pass | 0 AI tools mentions, by design (standing rule; brief.md Avoid list). §3.9 own-product pricing: 0 hits. §3.10 soon-to-ship: none listed. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass | /how-to-stop-doomscrolling (43), /how-to-plan-your-week (72), /pomodoro-technique (114), /what-is-timeboxing (118), /time-blocking (189). 0 in the intro per outline. First body link is now internal (43) and precedes the first external link (CDC, 47), fixing the v1 minor. Four targets have files in `content/blog/`; `/what-is-timeboxing` has no local file but the editor confirmed HTTP 200 live. |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://yourblog.com{route_prefix}...` (absolute = `major`) | Pass | All 5 root-relative, no trailing slash. 0 absolute `olgapak.com` links. |
| External links (count: `8`) each point to reputable sources; anchor text = literal claim | Pass (note) | CDC (allowlist .gov), 3 therapist bio pages, 3 Reddit comment permalinks, 1 X post. §3.5: none of the 8 matches a URL in `research/serp.md` §Selected results (asana, findyourgoodspace, yahoo, realsimple, port.ac.uk, camillestyles, apartmenttherapy, cdc.gov/sleep/data_statistics.html); the CDC link is a different page on an allowlisted .gov host either way. The forbidden Reddit rank-1 thread 12zcdqw is not linked. Count above blog-craft's 3 to 5 guideline; accepted at v1, see §10. |
| Target keyword appears 2–8 times in body (actual count: `3`) | Pass | Lines 14, 22, 158 (plus title and excerpt). |

Unsourced / suspicious claims:
- None. The three v1 items (line 114 phrasing, Marc Lou "short", "My 10-minute backup") are all resolved.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `3` vs outline `3` slots | Yes. Lines 49, 110, 162, each after its H2 + first paragraph as the outline planned. None is the featured image. No placeholder is followed directly by a heading. No markdown tables near the two remotion slots. |
| Every data image has its values in nearby text (preceding sentence, same-section table, or caption) | `2` data slots | Both pass. Line 110 flow diagram: caption at line 112 lists all seven steps as plain text (fixes the v1 major). Line 162 timeline: every time and activity appears as text in the H3 lists (168 to 183). |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. 0 hits for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`. §4.4 source-clause validation: N/A (0 `[VERIFY:]`).

## 5. Word count

- Draft: `2,064` words (body prose from intro through closing CTA, excluding frontmatter, FAQ and the three `[IMAGE:]` placeholder lines; `2,189` with placeholder lines; FAQ separately `240`)
- Outline target: `2,140` words
- Delta: `-3.6%` (prose only; `+2.3%` with placeholders)
- Band: within ±10% = pass, no issue. Per-section note: Step 5 now runs ~290 vs outline ~220 (the caption, gloss and Marc Lou correction all landed there) while the intro (~109 vs ~200) and Step 4 (~150 vs ~200) run under. The total is in range, so no trim is needed.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | 0 hits. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0. |
| En-dashes (`–`) only in numeric ranges | Pass | 0 en-dashes. |
| First-person throughout | Pass | `I` / `you` throughout. |
| Active voice | Pass | 0 passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | Every H2 has a list and/or a standalone question. |
| ≥1 bullet list per ~300 words | Pass | 11 bullet lists (39 `- ` lines) across ~2,060 words; floor is ~7. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | Pass | Questions at 35, 43, 60, 64, 72, 78, 96, 114, 140, 146, 152 to 154, 160. CTA has none (short CTA, acceptable). |
| ≥1 concrete number or named example per major section | Pass | Every body H2 carries a number or a named source. |
| No em-dash overuse | Pass | 0. |
| Visible sentence-length variation in every section | Pass | Lowest body-section stddev 5.4 words (Step 7). |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Step 5: Protect one focus block | 120 | minor | "Boil it down and you get this:" follows the Marc Lou sentence, so the three bullets (task chosen the night before, a block with start and end, messages during drift time) read as a summary of his routine. His post says nothing about choosing a task the night before or a drift-time slot; those come from Step 2 and Linda Yoon. | Optional, at the humanizer pass or Gate 2: change "Boil it down and you get this:" to "Boil the whole step down and you get this:" (or "Put it all together and the focus block looks like this:") so the bullets read as the step's summary, not Marc Lou's routine. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- The revision was surgical: the v1 to v2 diff touches only the lines review-v1 flagged, so the strong sections (Step 1's CDC 7-hour line + 30% to 46% state range + pittdancer quote + Laura Sgro + 4-item checklist + "Is that glamorous? Nope!") came through untouched. Do not reopen them at the humanizer pass.
- The Marc Lou correction (120) is accurate and still useful: "isn't short (breakfast, then a gym session), but the shape is the point" keeps the example while matching the raw post and the facts.md row, and it no longer contradicts the "takes over an hour" sign at line 39.
- Jargon handling now matches authors.md: the Pomodoro gloss (114) stays number-free so it adds no unsourced figure, and the timeboxing gloss (118) mirrors audience.md's translation, next to the Parkinson's Law anecdote from voice.md's bank. The 60-minute routine's reconciliation sentence (176) ties back to the Step 6 "just existing" quote instead of breaking the 15-to-45-minute rule silently.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A

## 10. Reviewer notes (free-form)

- **Credibility line, "a decade in aviation PR" (line 16)** still follows voice.md's credibility message verbatim, while authors.md and voice.md's anecdote bank say "8+ years in commercial aviation PR". Carried over from v1; not a draft error. Flag for the human at Gate 2 if precision matters.
- **External link count is 8**, above blog-craft's 3 to 5. Five are attribution links for the outline's information-gain quotes and expert bios; trimming them would weaken the gain element. Accepted at v1 and unchanged.
- **Caption at line 112** repeats Key takeaways bullet 1 (line 22) almost word for word. That was review-v1's suggested wording and it is what §Data in images requires next to the diagram, so it stays; the humanizer may vary the phrasing slightly if it wants, as long as all seven steps remain stated as text.
- **"simple/simply"** appears 10 times (13 in v1). Fine now; the humanizer should not add more.
- **CTA target** is /time-blocking instead of blog.md's AI tools page per the standing operator rule; correctly executed with an action anchor.
