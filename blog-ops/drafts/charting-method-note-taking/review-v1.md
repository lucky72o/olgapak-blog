# Review: charting-method-note-taking draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/charting-method-note-taking/draft-v1.md`, `blog-ops/drafts/charting-method-note-taking/outline.md`, `blog-ops/drafts/charting-method-note-taking/facts.md`, `blog-ops/drafts/charting-method-note-taking/brief.md`, `blog-ops/drafts/charting-method-note-taking/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/charting-method-note-taking/draft-v1.md` (word count: `2,338` body prose incl. headings, `2,270` excl. headings, FAQ and marker text excluded; outline roll-up target: `2,060`)
- Outline: `blog-ops/drafts/charting-method-note-taking/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)
- Modules active: `product` ON, `competitors` OFF (all competitor checks skipped as instructed).

## Verdict

`request_revisions`

Reasoning (1–3 sentences): the draft is clean on every automated gate that can force a revision (zero forbidden phrases, zero em-dashes, zero forbidden SERP-competitor URLs, zero unsourced numbers, a well-formed `[VERIFY:]` source clause, word count inside the ±15% band), and it nails the two hardest editorial asks: the honesty beat about the unsupported retention claim and the correct general-note-taking framing of every social quote. It cannot be approved because two `major` internal contradictions remain: the flagship worked-example table breaks the post's own "two to six words per cell / no full sentences" rule, and mistake 4 tells the reader charting "is not meant for taking notes during live lectures" after three earlier sections taught them to chart a lecture. Both are one-pass fixes; nothing structural is wrong.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | partial | First-person, tested-from-experience framing is present and genuine (lines 83, 107, 135, 145). But the register runs cooler and more columnist-declarative than `authors.md`'s "warm, encouraging, lightly self-deprecating". Not one self-deprecating beat, not one punchy one-word rhythm marker ("Ouch!"/"Nope!"), and no reader-directed rhetorical hook of the "Do you ever feel...?" shape anywhere in 2,270 words. Logged `minor` in §7. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `one could\|one should\|users are\|stakeholders`: zero hits. "one" appears only as a numeral/pronoun ("one page", "one row"), never as third-person address. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `was (scanned\|checked\|monitored\|built)`: zero hits. Sole passive constructions are inside the worked-example table ("participants assigned to conditions at random"), which is correct textbook phrasing. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 9.2, H2 1 8.1, H2 2 13.6, H2 3 10.4, H2 4 8.8, H2 5 10.8, H2 6 11.9, H2 7 15.1, H2 8 5.5, CTA 7.8. All above the stddev < 4 fail threshold. H2 8 (5.5) is the flattest but clears. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | All 23 base phrases from `writing-standards.md` §Forbidden phrases grepped case-insensitively; `voice.md` §Additional forbidden phrases says "None beyond the generic list". Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—' draft-v1.md` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–' draft-v1.md` returns nothing. Note the writer correctly reproduced the e-student quote at line 89 as a paraphrase with a colon rather than copying that source's en-dash. |
| Intro jargon check (§Insider-jargon translation + `audience.md` §Niche jargon translation) | pass | No SEO/marketing jargon in the intro (lines 15–21). Both in-niche aliases are translated on first use at line 29: "grid notes or the matrix method. Both names describe one page: a grid where the columns are the questions you are asking, and the rows are the things you are asking about." |
| Product code-literal grep (module: product) | pass | `product.md` defines no code constants, only reader-facing tool names. No backticked internal literals in the body. |
| Intro-hook over-anchoring | N/A | The hook is a recognition hook ("you have probably seen it listed and never tried it"), not a time-bound event peg. Check skipped per §1.9. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | Per `adapters/publish/frontmatter/wordpress.md`: `title` (52 chars, in the 50–60 band), `date: 2026-08-03`, `excerpt` (137 chars, ≤160), `tags` (4 entries), `authors: Olga Pak` (matches the `olga` byline in `authors.md`), `draft: true`. Correctly carries NO `cover`/`heroImage` field, this adapter attaches the featured image as a `featured_media` ID. |
| Tags drawn from the live WP taxonomy (`blog.md` §Tag taxonomy) | pass | `note-taking`, `note-taking method`, `students`, `productivity` are all four verbatim rows of the live taxonomy list. Zero invented tags, so no staging remap. |
| Title in frontmatter matches outline "Final title" exactly | pass | `Charting Method Note-Taking: How to Do It in 5 Steps`, character-for-character. |
| Slug / meta description match outline | pass | Slug is carried by the draft directory (`charting-method-note-taking`), which this adapter's frontmatter has no field for. `excerpt` matches outline §Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | 8 body H2s in outline order, plus the CTA H2 and `## FAQ`. The five H3 steps under H2 4 match outline H3 4.1–4.5 in order and content. Only delta is title-casing of the headings, which is required by `writing-standards.md` §Formatting. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | pass | 4 paragraphs at lines 15, 17, 19, 21 with 2 / 1 / 2 / 1 sentences. Target keyword lands in sentence 2 of the hook. Expertise statement present. |
| Intro internal links ≤2, woven into a sentence | pass | Exactly 1 (`/note-taking-methods`, line 19), woven into the "if you are still weighing your options" clause, not a see-also stack. |
| No absolute cross-post links | pass | Grep for `https?://(www\.)?olgapak\.com/`: zero hits. All six internal links are root-relative with no trailing slash, matching `route_prefix: /` + `trailing_slash: false`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | H2 1 mini table + "So where does the real effort go?"; H2 2 bullet list; H2 3 bullet list; H2 4 numbered steps + concrete numbers; H2 5 table + "So what does the finished grid show you?"; H2 6 named example (the tablet notes); H2 7 numbered list; H2 8 named examples. H2 6 and H2 8 clear only on the weakest arm of the OR, see §7 issue 7. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 questions, verbatim matches of outline §FAQ block in the same order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` adapter emits no JSON-LD at the adapter level (`frontmatter/wordpress.md` §FAQ). Sub-check skipped per §2.1. |
| Outro / CTA paragraph present, immediately before `## FAQ`, nothing after the FAQ | pass | `## Start With One Chart This Week` (lines 165–169) sits immediately before `## FAQ` (line 171). File ends at the final FAQ answer, line 191. Two short paragraphs, no feature re-list. |
| CTA links this blog's CTA target with an action anchor | pass | `[Try my free AI tools](/ai-tools)` at line 169, matching `blog.md` §Primary CTA hook verbatim. Not a bare homepage link. |
| H2 8 contains no comparison table (pillar-cannibalisation guard) | pass | Zero `|` table rows between lines 159 and 164. One honest paragraph plus a positioning paragraph, exactly as outline H2 8 specifies. |

Structural deltas vs outline (if any):
- None. Headings, order, intro shape, FAQ set, CTA placement and image slot count all match `outline.md` exactly.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass | Every number in the body is procedural instruction, not evidence: "three to five columns" (25, 95), "Two to six words per cell" (101), "Two rows, three columns" (38), "Eight columns on an A4 page" (155), "five ways" (149). None asserts a research finding. The one unverifiable evidentiary block (the worked-example table) carries a `[VERIFY:]` at line 127. The `79 slides` stat from facts.md §Statistics (marked ⚠️ "Preferred: skip it") is correctly not used. |
| **Invented-evidence check (editor-flagged, priority 1)** | pass | Zero retention/memory percentages, zero "studies show", zero "research suggests" attached to any charting claim. Grep for `studies\|research suggest\|retention\|memor\|proven\|evidence` returns only the honesty beat itself and one metaphorical "evidence" in the argument-structure sentence at line 73. |
| **H2 3 states the retention claim is unsupported and names the structural benefit instead (outline-required)** | pass | Lines 75–79 do exactly what the outline demands and do not soften: "Several popular guides state that the charting method improves memory and retention. I went looking for the research behind that line while writing this, and there isn't any: every guide making the claim cites nothing at all... So I am not going to repeat it. What charting reliably gives you is structural." No "studies suggest" hedge anywhere. |
| **FAQ answer 5 agrees with H2 3 rather than hedging back** | pass | Line 191: "I could not find a single study supporting a memory benefit specific to charting, and the popular guides claiming one cite nothing at all, so treat that claim as unproven. The gains you can count on are structural." Same position, same firmness, no contradiction with the body. |
| **Misattributed social quotes (editor-flagged, priority 3)** | pass | Two Reddit quotes, both framed correctly. Line 115: "One r/NoteTaking poster described the underlying trap **for note-taking in general**". Line 157: "As one person on r/NoteTaking described **their own systems**", inside a mistake the draft explicitly pre-labels "a note-taking problem long before it is a charting problem" (line 157). Neither implies the commenter used, recommended or endorsed charting. The `@DrAminaYonis` X quote is not used at all. The Goodnotes X post (line 143) is used as tablet-format evidence without naming or endorsing the app, per outline H2 6, though its reach is overstated, see §7 issue 5. |
| Competitor mentions framed as "best for [segment]" | N/A | `modules.competitors` OFF for this blog. Check skipped. |
| Competitor pricing / feature freshness + `[VERIFY:]` on competitor pricing | N/A | `modules.competitors` OFF. Checks skipped. |
| Product mentions (count: `1`, `modules.product` ON) each earning their place | pass | Exactly ONE named product mention: "Text Summarizer" at line 169, in the closing CTA only, and it passes the deletion rule (the sentence describes condensing a chapter to surface repeating categories, which is the pre-charting step, not a bolt-on). The intro's "build small AI tools on the side" (line 17) names no feature, per outline P2. Zero mentions in H2 1–8. |
| Own-product pricing claims (no price, tier, usage number) | pass | Grep for `\$\d`, `free up to`, `per month`, `tier`: zero hits. "free AI tools" is the durable framing `blog-craft.md` §Own-product pricing claims asks for. |
| Soon-to-ship feature gap check | N/A | `brief.md` §Soon-to-ship features lists "None". |
| Internal links (count: `5` post links + 1 CTA link) placed per outline | pass | `/note-taking-methods` (19, intro pillar up-link), `/outlining-note-taking-method` (73, H2 3 where an argument beats a grid), `/best-notebooks-for-note-taking` (145, H2 6 on dot-grid pages), `/cornell-note-taking-method` + `/mind-mapping-note-taking-method` (161, H2 8). All five outline rows placed in their planned sections. Anchor text is near-exact-match and varied. |
| First internal link appears before the first external link | pass | First internal at line 19; first external at line 56. |
| Every internal blog link is root-relative `{route_prefix}<slug>` with no trailing slash | pass | All six are `/slug` form, no domain, no trailing slash. |
| **Forbidden external links to SERP competitors (editor-flagged, priority 2, never module-gated)** | pass | The draft renders exactly two external URLs: `https://www.utc.edu/...` (line 56) and `https://subjectguides.york.ac.uk/note-taking/charting` (line 71). Both are `authoritative_allowlist` per outline §External link plan (`.edu` literal enumeration and the academic-domain heuristic clause). Cross-referenced against `research/serp.md` §Selected results analyzed: **evernote.com, plaud.ai, meetjamie.ai, e-student.org and sheridancollege.libguides.com appear ZERO times as URLs.** Every one of them is instead quoted with vague prose attribution exactly as the outline requires: "One college study-skills guide" (54, Sheridan), "One note-taking guide" (64) and "one note-taking guide sums it up" (103, both Plaud), "one beginner's guide" (89, 156, e-student). Evernote and Jamie are not referenced at all. |
| External links (count: `2`) each point to reputable sources; anchor text = literal claim | pass, with a documented shortfall | Anchors are the literal cited claims: "set up your paper by drawing columns and labeling appropriate headings in a table" (56) and "harder to work with for STEM subjects that require visual representations like graphs or formulas" (71). 2 rendered links is below `blog-craft.md` §External linking's 3–5 guidance, but the two remaining external rows are correctly left as `[EXTERNAL_LINK_NEEDED:]` markers for Stage 3d, and `outline.md` §Open questions records the two-link outcome as a deliberate accepted decision ("fabricating a citation to hit a link count would violate the post's own honesty angle"). **Not logged as an issue and not a reason to revise.** |
| Target keyword appears 2–8 times in body (actual count: `7`) | pass | "charting method" appears 7 times in the body prose (plus 6 in the FAQ and 1 in the title). The full-string form "charting method note-taking" lands once, in the intro at line 15. No stuffing. |

Unsourced / suspicious claims:
- `draft-v1.md:19`, "when the material genuinely is comparable it beats the alternatives outright", issue: unsupported superlative the body never earns back. H2 8 states the defensible version ("a narrow tool that is very good inside its lane"). Logged `minor` in §7.
- `draft-v1.md:143`, "did the rounds a few years ago when a note-taking app account shared them", issue: implies viral reach that `facts.md` §Named examples does not support and that `research/x.md` contradicts (on-topic posts top out at 33 likes). `plan.md` §Rejected forbids any popularity framing. Logged `minor` in §7.
- No other claim in the draft asserts an outcome without either a facts.md row, a prose attribution, a `[VERIFY:]` marker or an `[EXTERNAL_LINK_NEEDED:]` marker.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | Yes. Line 127, immediately under the worked-example table it scopes. Shape is canonical and the `\| source:` clause is present and non-trivial: "writer's general research-methods knowledge, no external source in facts.md", which is the honest-disclaimer form `blog-craft.md` explicitly accepts. Matches `outline.md` §Open questions row 2, which anticipated exactly this marker. |
| `[EXTERNAL_LINK_NEEDED:]` | `2` | Yes, and both are CORRECT, not missing links. Line 115 (retrieval practice, backing Step 5) and line 141 (paper vs digital) are external link plan rows 4 and 3, deliberately routed to Stage 3d. Both carry a `suggested source type:` clause. Neither claim is asserted as fact around the marker: line 141 hedges to "Someone will tell you handwriting beats screens for recall", which honours the outline's "do not assert a paper-beats-screens claim unsourced". |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes. All five planned internal targets were confirmed and linked, so no slot needed a marker. |
| `[IMAGE:]` | `4` vs outline `4` slots | Yes, exact match. After H2 1 + 1 paragraph (line 27, remotion, chart anatomy), after H2 4 + 1 paragraph (line 85, remotion, five-step flow), after H2 6 + 1 paragraph (line 137, ai-prompt, paper vs tablet), after H2 7 + 1 paragraph (line 151, ai-prompt, overstuffed chart). **Zero slots in H2 5**, where the worked-example table carries the visual load, per outline. **Zero featured-image placeholder**, correct for `wordpress-rest`, which sets the cover via a `featured_media` ID rather than a body placeholder; no placeholder uses a `featured.<ext>` filename. Concepts, types and filenames all match `outline.md` §Image placement plan. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` returns zero hits. All four marker shapes are the exact literals the Phase 4 compile greps for.

Sub-checks run and cleared:
- **§4.2a featured-image hygiene:** clear. No `Suggested filename: featured.*`, and none of the four concepts duplicates the outline's featured concept (a hand-lettered hero over a ruled notebook page). The line-27 anatomy diagram is the nearest neighbour but is a `remotion` callout diagram, not the `ai-prompt` hero; see §10.
- **§4.2b image-placement hygiene:** the line-85 placeholder is followed (after a blank line) by `### Step 1:`. This is the placement `outline.md` §Image placement plan explicitly specifies ("After H2 4 + 1 paragraph"), and the five-step flow image previews the H3 sequence it introduces. Not logged as an issue.
- **§4.2c table-redundant chart:** the line-27 `remotion` placeholder sits 6 lines from the mini table at 33–36. The rule's own exception applies and the outline pre-argued it: the diagram adds labelled callouts (what a row label is, what a column header is, what belongs in a cell) that a markdown table cannot render. Not logged as an issue.

## 5. Word count

- Draft: `2,338` words (body prose: intro through the end of the CTA at line 169, headings included, `[IMAGE:]`/`[VERIFY:]` marker text excluded, `## FAQ` block excluded). Excluding heading text: `2,270`. Excluding the three markdown tables as well: `2,094`. FAQ, counted separately and not gated: `356`.
- Outline target: `2,060` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+13.5%` on the primary basis (`+10.2%` excluding heading text)
- Band: `beyond ±10% up to ±15% = minor issue logged in §7 (trim note), still counts as a pass for the verdict gate`

Per-section deltas vs the outline's per-section breakdown (marker text excluded, heading text excluded):

| Section | Outline | Draft | Delta |
|---|---|---|---|
| Intro | 200 | 176 | -12% |
| H2 1 What the charting method actually is | 200 | 182 | -9% |
| H2 2 When the charting method wins | 200 | 269 | **+35%** |
| H2 3 When charting flops | 230 | 264 | +15% |
| H2 4 How to use it in 5 steps | 350 | 390 | +11% |
| H2 5 A worked example | 250 | 286 | +14% |
| H2 6 Paper vs. digital | 180 | 243 | **+35%** |
| H2 7 Five mistakes | 220 | 239 | +9% |
| H2 8 How charting fits next to the others | 130 | 137 | +5% |
| CTA | 100 | 84 | -16% |

The overage is concentrated in H2 2 and H2 6, not spread as general padding. H2 6 in particular runs 63 words over on a section the outline capped deliberately ("high-level only", "no app roundup").

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists grepped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | Zero. |
| En-dashes (`–`) only in numeric ranges | pass | Zero en-dashes at all. |
| First-person throughout | pass | `I` / `you` throughout; no `one` / `users` / `stakeholders` as third-person address. |
| Active voice | pass | No passive-marker hits outside correct textbook phrasing inside the worked-example table. |
| ≥1 rhythm marker in every H2 | pass | All nine sections clear, though H2 6 and H2 8 clear only via named example rather than a list or a question. |
| ≥1 bullet list per ~300 words | fail | 3 bullet lists (lines 48–52, 66–69, and the numbered list at 153–157) across ~2,270 words = 1 per ~570 words. The three markdown tables partially compensate visually, but H2 4, H2 6 and H2 8 run as unbroken prose. Logged `minor` in §7. |
| ≥1 standalone-question paragraph per major section (author voice calls for it: `voice.md` §Lexicon lists "Rhetorical opener questions") | fail | Only 2 in the whole post: "So where does the real effort go?" (line 40) and "So what does the finished grid show you?" (line 129). Both are excellent. Seven of nine sections have none. Logged `minor` in §7. |
| ≥1 concrete number or named example per major section | pass | H2 1 the meeting mini table; H2 2 five named scenarios; H2 3 four named avoid-cases; H2 4 "three to five columns", "two to six words"; H2 5 the three-method table; H2 6 the nursing-student tablet notes; H2 7 "Eight columns on an A4 page"; H2 8 Cornell / outlining / mind mapping named. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Every section stddev ≥ 5.5; range runs from 1-word beats ("Something always fits none of them." at 4 words, line 109) to 53-word sentences. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 5 A Worked Example, Start to Finish | 121–125 | `major` | The flagship worked example violates two rules the post itself just taught. Cells run 4 to 19 words and are written as full clauses: "Changing one variable on purpose and measuring the effect on another, with participants assigned to conditions at random" (19 words), "Self-reported answers, and it shows things going together, not one causing the other" (13), "Asking a sample the same set of questions, by questionnaire or interview" (12). Step 3 at line 101 says "Two to six words per cell" and mistake 2 at line 154 says "Writing full sentences in the cells. The chart stops being scannable and becomes a badly formatted essay." A reader who copies the model chart is copying the mistake. | Compress every cell in the lines 121–125 table to six words or fewer, so the example demonstrates Step 3 instead of contradicting it. E.g. "What it is" for Survey becomes `Same questions, asked to a sample`; for Experiment becomes `Change one variable, measure another`; Survey's "Main limitation" becomes `Self-reported; correlation, not cause`; Experiment's becomes `Lab conditions unlike real life`. Keep the five column headers and the three row labels exactly as they are. Keep the `[VERIFY:]` marker at line 127 and update nothing else in the section. If compressing loses a nuance you need, put that nuance in the prose paragraph at line 129, not back in the cell. |
| H2 7 Five Mistakes That Ruin a Chart | 156 | `major` | Mistake 4 quotes the beginner's guide as saying charting "is not meant for taking notes during live lectures (Cornell or a split-page layout suits those better)". That flatly contradicts three earlier sections the post is built on: line 56 cites UTC on setting up columns when "the lecture format is distinct", line 89–91 tells the reader to pick columns "the night before" from "the lecture title, the slide deck, or the chapter subheadings", and mistake 1 at line 153 assumes a charting session in a live lecture ("You end up redrawing the grid at minute twelve while the lecturer moves on"). The reader is told both to chart lectures and that charting is not for lectures. | Reconcile the contradiction rather than deleting the citation. Reframe line 156 so the source's blanket claim is narrowed to the post's own position, for example: "One beginner's guide goes further and rules out live lectures altogether, along with equation-based material such as maths. I would put the line in a slightly different place: a lecture you can predict and prep columns for charts fine, a rambling seminar does not." Keep the equation-based clause, keep the prose-only attribution, and do NOT add a link to the source. |
| Whole post | n/a | `minor` | Body prose is 2,338 words against the outline roll-up target of 2,060, `+13.5%`. Inside the ±15% band so it does not force a revision, but the overage is concentrated in two sections: H2 2 runs 269 against a 200-word budget and H2 6 runs 243 against 180, on a section the outline deliberately capped as "high-level only". | While revising, trim roughly 60 words from H2 2 (the meetings paragraph at line 58 restates the meeting example already made concrete by the mini table at lines 33–36) and roughly 50 words from H2 6 (lines 139 and 141 both make the "you keep fiddling with columns on a screen" point). Do not trim H2 4 or H2 5; those sections are the ones the title promises. |
| Whole post | 15, 62, 89, 123, 125, 137, 155, 156, 175 | `minor` | The draft is written in British English while the published cluster it links into is American: `content/blog/note-taking-methods.md` and `content/blog/mind-mapping-note-taking-method.md` use "labeled", "organize", "color", and `content/blog/cornell-note-taking-method.md` uses "behavior". The draft uses "labelled" (15, 137, 175), "recognisable" (62), "analysing" (89), "behaviour" (123), "generalise" (125), "maths" (156), plus "A4" (155) as the default paper size. | Convert to US spelling to match the published sibling posts: labelled → labeled, recognisable → recognizable, analysing → analyzing, behaviour → behavior, generalise → generalize, maths → math. Leave the verbatim UTC quote at line 56 ("labeling") and the verbatim Reddit quote at line 157 ("realize") untouched, they are already US spelling. At line 155, either keep "A4" or switch to a neutral phrasing like "on one page". |
| H2 6 Paper vs. Digital | 143 | `minor` | "A nursing student's charting-method notes... **did the rounds a few years ago** when a note-taking app account shared them" asserts reach that no source supports. `facts.md` §Named examples records only that the notes were shared by the Goodnotes account; `research/x.md` puts on-topic engagement at a 33-like ceiling, and `plan.md` §Rejected bars any popularity framing for charting. The post is 4,000 characters away from telling the reader that unsupported claims are the problem with this whole SERP. | Reword line 143 to claim only what the source supports: "A nursing student's charting-method notes, hand-written into a pre-made table on a tablet, were shared publicly by a note-taking app account, which tells you the format travels off paper perfectly well." Delete "did the rounds a few years ago". Do not name the app. |
| Intro | 19 | `minor` | "when the material genuinely is comparable it beats the alternatives outright" is an unearned superlative in a post whose entire angle is refusing to overclaim. The body's own honest version is at line 163: "a narrow tool that is very good inside its lane." | Soften line 19 to the claim the post actually defends, e.g. "because when the material genuinely is comparable, nothing else lays it out as clearly." Keep the rest of the sentence and the `/note-taking-methods` link exactly as they are. |
| H2 4, H2 6, H2 8 | 83–115, 135–145, 161–163 | `minor` | Humanization floor: 3 bullet lists across ~2,270 words (1 per ~570, the floor is 1 per ~300), and only 2 standalone-question paragraphs in nine sections (lines 40 and 129) when `voice.md` §Lexicon names rhetorical opener questions as an Olga signature. H2 6 and H2 8 run as unbroken prose with neither a list nor a question. | Add one standalone-question paragraph to H2 6 (e.g. a one-line "So which should you actually pick?" before line 139) and one to H2 7 or H2 8. Do not add lists to H2 5, its table is the break. Do not convert existing prose paragraphs into bullets in H2 4; the H3 step structure already breaks that section. |
| Whole post | 15–169 | `minor` | Voice register runs cooler than `authors.md` prescribes for `olga` ("warm, first-person, encouraging, lightly self-deprecating"). The personal beats that are there are good (lines 83, 107, 135, 145) but there is no self-deprecating moment, no punchy one-word rhythm beat from `voice.md` §Lexicon ("Ouch!" / "Nope!"), and no reader-directed hook ("Do you ever feel...?"). The prose reads as a confident columnist rather than a friend who has been through it. | Warm two or three moments without touching the argument. Best candidates: line 107 (Step 4, "This one is my own addition") could carry a short admission of the chart that broke on you; line 149 ("Every bad chart I have made failed in one of five ways") is one clause away from a genuine self-deprecating beat; line 135 could open with a short reader-directed question. Do not add hype, do not add exclamation marks to the honesty beat at lines 75–79, and change nothing in H2 3. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The honesty beat at lines 75–79 is the best thing in the post and must not be touched.** It names the unsupported claim, says plainly that the writer went looking and found nothing ("every guide making the claim cites nothing at all, and I could not find a single study on charting specifically. So I am not going to repeat it"), and then immediately supplies the defensible replacement benefit. No "studies suggest" hedge crept in anywhere, and FAQ answer 5 at line 191 holds exactly the same line instead of quietly walking it back. This is the plan's whole differentiator, executed.
- **Every forbidden competitor is quoted without being linked, and every social quote keeps its general-note-taking framing.** Sheridan, Plaud and e-student are all paraphrased or quoted with deliberately vague prose attribution ("One college study-skills guide", "one beginner's guide") and zero URLs, while the only two external links go to utc.edu and york.ac.uk. The two Reddit quotes are explicitly labelled "for note-taking in general" (115) and "their own systems" (157), and mistake 5 pre-empts the misattribution risk in its own words: "it is a note-taking problem long before it is a charting problem". Do not rewrite those framing clauses when trimming.
- **Step 4, "Leave an Escape Hatch" (lines 105–109), is the post's genuine original contribution and the one thing no SERP competitor offers.** It is short, concrete (a spare bottom row or a two-finger right margin), honestly labelled as the writer's own practice rather than a sourced claim, and closes on a 4-word sentence that earns its place: "Something always fits none of them." Keep the step, its framing and its length exactly as they are.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. H2 5, the worked-example table at lines 121-125: compress every cell to six
   words or fewer so the example obeys Step 3 ("Two to six words per cell",
   line 101) and mistake 2 ("Writing full sentences in the cells", line 154)
   instead of contradicting them. Cells currently run 4 to 19 words in full
   clauses. Suggested compressions: Survey / What it is -> "Same questions,
   asked to a sample"; Experiment / What it is -> "Change one variable, measure
   another"; Survey / Main limitation -> "Self-reported; correlation, not
   cause"; Experiment / Main limitation -> "Lab conditions unlike real life".
   Keep the five column headers and three row labels exactly as they are. Keep
   the [VERIFY:] marker at line 127 unchanged. If compressing loses a nuance you
   need, move that nuance into the prose paragraph at line 129, not back into a
   cell.

2. H2 7, mistake 4 at line 156: the sentence "charting is not meant for taking
   notes during live lectures" contradicts line 56 (UTC on distinct lecture
   formats), lines 89-91 (pick columns the night before from the lecture title
   or slide deck) and mistake 1 at line 153 (charting a live lecture). Reconcile
   it rather than deleting the citation, e.g.: "One beginner's guide goes
   further and rules out live lectures altogether, along with equation-based
   material such as maths. I would put the line in a slightly different place: a
   lecture you can predict and prep columns for charts fine, a rambling seminar
   does not." Keep the prose-only attribution and do NOT add a link to that
   source.

3. Trim roughly 110 words total, taken only from H2 2 and H2 6, which run 35%
   over their outline budgets. In H2 2, the meetings paragraph at line 58
   restates what the mini table at lines 33-36 already showed. In H2 6, lines
   139 and 141 both make the "you keep fiddling with columns on a screen" point.
   Do NOT trim H2 4 or H2 5.

4. Convert British spellings to US, matching the published sibling posts:
   labelled -> labeled (lines 15, 137, 175), recognisable -> recognizable (62),
   analysing -> analyzing (89), behaviour -> behavior (123), generalise ->
   generalize (125), maths -> math (156). Leave the verbatim UTC quote at line 56
   and the verbatim Reddit quote at line 157 exactly as they are.

5. Line 143: delete "did the rounds a few years ago" and claim only what the
   source supports: "A nursing student's charting-method notes, hand-written
   into a pre-made table on a tablet, were shared publicly by a note-taking app
   account, which tells you the format travels off paper perfectly well." Do not
   name the app.

6. Line 19: soften "it beats the alternatives outright" to the claim the post
   actually defends, e.g. "nothing else lays it out as clearly." Keep the rest of
   the sentence and the /note-taking-methods link unchanged.

7. Add one standalone-question paragraph to H2 6 (e.g. "So which should you
   actually pick?" before line 139) and one to H2 7 or H2 8; both sections
   currently run as unbroken prose with no list and no question. Do not add
   bullets to H2 5.

8. Warm two or three moments to match Olga's lightly self-deprecating register
   without touching the argument: line 107 (Step 4) and line 149 ("Every bad
   chart I have made") are the best candidates, and line 135 could open with a
   short reader-directed question. Change NOTHING in H2 3 (lines 60-79) and
   nothing in FAQ answer 5.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. The two
[EXTERNAL_LINK_NEEDED:] markers at lines 115 and 141 are CORRECT and belong to
Stage 3d; do not invent URLs for them and do not delete them. Do NOT add any
link to evernote.com, plaud.ai, meetjamie.ai, e-student.org or
sheridancollege.libguides.com. Do NOT change the H2 order, title, slug, meta
description, tags, image placeholders, or FAQ set, those are locked.

Produce blog-ops/drafts/charting-method-note-taking/draft-v2.md. Do not
overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- **All three editor-flagged risk areas came back clean.** No invented statistic, no forbidden competitor URL, no misattributed social quote. The writer clearly read `facts.md`'s standing warning and the outline's per-source link bans, and the two-external-link outcome is the documented, accepted decision from `outline.md` §Open questions, not a shortfall to fix. Neither of the two `major` issues in §7 is a sourcing failure; both are internal-consistency failures the writer created by being more thorough in one section than in another.
- **Both majors point the same direction: the post teaches compression and then does not model it.** Fixing issue 1 will make issue 2 easier to see, because a chart of six-word cells makes the "not for live lectures" line read even more oddly next to Step 1's "decide your columns the night before".
- **For the image planner at Stage 4a:** the featured concept from `outline.md` (a hand-lettered hero over a notebook page ruled into labelled columns) and the line-27 in-post slot (a `remotion` anatomy diagram of a ruled grid) are adjacent enough that they could render as near-duplicates. They pass the featured-image hygiene check as written (different type, different job: hero versus labelled callouts) but they should be visually differentiated at production, ideally by making line 27 unmistakably a diagram with leader lines and labels rather than a second illustrated notebook page.
- **Two things worth leaving alone that a revising writer might be tempted to "fix":** the H2 1 mention of the University of York at line 38 is deliberately unlinked because the York link is spent at line 71, per the outline's "use it in whichever section reads better, once only" instruction; and the CTA at 84 words is deliberately under its 100-word budget, which is the right direction for a closing CTA.
- **Profile-doc gap worth recording outside this post:** neither `voice.md` nor `site-conventions.md` states a spelling locale, yet the published corpus is consistently US English. Adding a one-line "US English" note to `voice.md` would prevent this drift recurring on every future draft rather than being caught per-post at review.
