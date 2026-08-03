# Review: charting-method-note-taking draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/charting-method-note-taking/draft-v2.md`, `blog-ops/drafts/charting-method-note-taking/draft-v1.md` (regression diff), `blog-ops/drafts/charting-method-note-taking/review-v1.md` (prior verdict), `blog-ops/drafts/charting-method-note-taking/outline.md`, `blog-ops/drafts/charting-method-note-taking/facts.md`, `blog-ops/drafts/charting-method-note-taking/brief.md`, `blog-ops/drafts/charting-method-note-taking/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/charting-method-note-taking/draft-v2.md` (word count: `2,245` body prose, headings included, marker text excluded, `## FAQ` excluded; `2,131` excluding heading text; outline roll-up target: `2,060`)
- Outline: `blog-ops/drafts/charting-method-note-taking/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)
- Modules active: `product` ON, `competitors` OFF (all competitor checks skipped as configured in `config.yaml`).
- Prior review: `review-v1.md`, verdict `request_revisions`, 0 critical / 2 major / 6 minor.

### Verification of the two `major` issues from draft-v1

| v1 issue | Status in draft-v2 | Evidence |
|---|---|---|
| **Major 1**, the worked-example table broke the post's own "two to six words per cell / no full sentences" rule | **FIXED, fully** | Every one of the 12 cells at lines 123–125 is now 4–6 words: `Same questions, asked to a sample` (6), `Large; breadth is the point` (5), `Attitudes and behavior, big groups` (5), `Self-reported; correlation, not cause` (4), `Change one variable, measure another` (5), `Smaller, split into groups` (4), `Testing cause and effect` (4), `Lab conditions unlike real life` (5), `Deep look at one case` (5), `One case, or a handful` (5), `Rich detail, rare situations` (4), `Does not generalize beyond the case` (6). The longest cell went from 19 words to 6. The five column headers and three row labels are unchanged, and the `[VERIFY:]` marker at line 127 survived. The writer also took the review's "move the nuance to the prose" instruction literally and added line 131 (`Two details did not survive the squeeze...`), which now demonstrates the Step 4 escape-hatch principle inside the worked example. That is a better fix than the one requested. |
| **Major 2**, mistake 4 told the reader charting "is not meant for taking notes during live lectures" after three earlier sections taught them to chart a lecture | **FIXED, fully** | Line 160 now reads: "One beginner's guide goes further and rules out live lectures altogether, along with equation-based material such as math. I would put the line in a slightly different place: a lecture you can predict and prep columns for charts fine, a rambling seminar does not." The source's blanket claim is reported, then narrowed to the post's own position instead of contradicting it. Prose-only attribution preserved (grep confirms no e-student.org URL was added). Consistent now with line 56 (UTC on distinct lecture formats), lines 89–91 (pick columns the night before from the lecture title / slide deck) and mistake 1 at line 157. |

All six `minor` issues from v1 were also applied: US spelling conversion (lines 15, 27, 123–125, 139, 181), the `did the rounds a few years ago` overclaim deleted (line 147), the intro superlative softened (line 19), two standalone-question paragraphs added (lines 141, 165), the Olga voice warmed at lines 107 / 153 / 137, and roughly 86 words trimmed from H2 2 and H2 6.

## Verdict

`request_revisions`

Reasoning (1–3 sentences): both `major` issues from draft-v1 are genuinely and completely fixed, every forcing condition in the verdict tree is clear (zero forbidden phrases, zero em-dashes, zero forbidden SERP-competitor URLs, zero unsourced numeric claims, a well-formed `| source:` clause, word count now inside ±10%), and the voice finally matches `authors.md`. It still cannot be approved because one `major` internal contradiction remains, untouched from v1 and missed by the v1 review: line 153 opens the mistakes section with "Four of them happened before the session even started", and the numbered list directly beneath it contains at most two pre-session mistakes, one explicitly mid-lecture (mistake 1) and one explicitly post-session (mistake 5). In a post whose entire differentiator is refusing to repeat claims it cannot back, being wrong about the count of its own list is the one error it cannot afford; the fix is one clause.

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. This review is iteration 2, so one further writer pass is still inside budget; the resulting draft-v3 would be reviewed at iteration 3, where any remaining `request_revisions` escalates.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | pass | Upgraded from `partial` in v1. All three missing `voice.md` signatures are now present: the reader-directed rhetorical hook ("Do you ever start a chart in a notes app and spend the session rearranging columns instead of listening?", line 137), the one-word rhythm beat ("Ouch.", line 153), and genuine self-deprecation (line 107, "born from the chart I ruined by wedging one homeless fact sideways across three cells"; line 153, "I have made all five... which was a humbling thing to notice"). The register now reads as the friend-who-has-been-through-it that `authors.md` prescribes, not a columnist. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep `\b(one could\|one should\|users are\|stakeholders)\b`: zero hits. "one" appears only as a numeral or pronoun ("one page", "one row", "one case"). |
| Active voice (no "X was scanned" shapes) | pass | Grep `\bwas (scanned\|checked\|monitored\|built)\b`: zero hits. The one passive construction, "were shared publicly by a note-taking app account" (line 147), is the exact wording review-v1 prescribed to strip an unsupported reach claim; passive is correct there because the sharer is not the point. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 9.0, H2 1 8.1, H2 2 34.7, H2 3 17.3, H2 4 10.2, H2 5 10.3, H2 6 11.1, H2 7 13.2, H2 8 6.2, CTA 7.8. All clear the stddev < 4 fail threshold with room. H2 8 (6.2) is flattest, up from 5.5 in v1 after the question at line 165 was added. Shortest sentence in the body is 1 word ("Ouch.", line 153); longest is 53. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | All 23 base phrases from `writing-standards.md` §Forbidden phrases grepped case-insensitively; `voice.md` §Additional forbidden phrases states "None beyond the generic list". Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—' draft-v2.md` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–' draft-v2.md` returns nothing. The e-student quote at line 89 is still correctly paraphrased with a colon rather than reproducing that source's en-dash. |
| Intro jargon check (§Insider-jargon translation + `audience.md` §Niche jargon translation) | pass | No SEO/marketing jargon in the intro (lines 15–21). Both in-niche aliases are translated on first use at line 29: "grid notes or the matrix method. Both names describe one page: a grid where the columns are the questions you are asking, and the rows are the things you are asking about." |
| Product code-literal grep (module: product) | pass | `product.md` defines no code constants, only reader-facing tool names. No backticked internal literals anywhere in the body. |
| Intro-hook over-anchoring | N/A | The hook is a recognition hook ("you have probably seen it listed and never tried it"), not a time-bound event peg. Check skipped per §1.9. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | Per `adapters/publish/frontmatter/wordpress.md`: `title` (52 chars, inside the 50–60 band), `date: 2026-08-03`, `excerpt` (137 chars, ≤160), `tags` (4 entries), `authors: Olga Pak` (matches the `olga` byline in `authors.md`), `draft: true`. Correctly carries NO `cover`/`heroImage` field, this adapter attaches the featured image via a `featured_media` media ID. |
| Tags drawn from the live WP taxonomy (`blog.md` §Tag taxonomy) | pass | `note-taking`, `note-taking method`, `students`, `productivity` are four verbatim rows of the live taxonomy. Zero invented tags, so no remap at staging. |
| Title in frontmatter matches outline "Final title" exactly | pass | `Charting Method Note-Taking: How to Do It in 5 Steps`, character-for-character against outline §Final title. |
| Slug / meta description match outline | pass | Slug is carried by the draft directory (`charting-method-note-taking`); this adapter's frontmatter has no slug field. `excerpt` matches outline §Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | 8 body H2s at lines 23, 42, 60, 81, 117, 135, 151, 163 in outline order, plus the CTA H2 at 171 and `## FAQ` at 177. The five H3 steps under H2 4 (lines 87, 93, 99, 105, 111) match outline H3 4.1–4.5 in order and content. The only delta is title-casing, required by `writing-standards.md` §Formatting. Unchanged from v1. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | pass | 4 paragraphs at lines 15, 17, 19, 21 with 2 / 1 / 2 / 1 sentences. Target keyword lands in sentence 2 of the hook. Expertise statement present at 17. |
| Intro internal links ≤2, woven into a sentence | pass | Exactly 1 (`/note-taking-methods`, line 19), woven into the "if you are still weighing your options" clause, not a see-also stack. |
| No absolute cross-post links | pass | Grep `https?://(www\.)?olgapak\.com/`: zero hits. All six internal links are root-relative with no trailing slash, matching `route_prefix: /` + `trailing_slash: false` in `config.yaml`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | H2 1 mini table + question at 40; H2 2 bullet list; H2 3 bullet list; H2 4 five H3s + concrete numbers; H2 5 table + question at 129; H2 6 questions at 137 and 141; H2 7 numbered list + the "Ouch." beat; H2 8 question at 165. Every section now clears on a strong arm of the OR, an improvement over v1 where H2 6 and H2 8 cleared only via a named example. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 questions at lines 179, 183, 187, 191, 195, verbatim matches of outline §FAQ block in the same order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` adapter emits no JSON-LD at the adapter level (`frontmatter/wordpress.md` §FAQ: FAQPage JSON-LD is a WP-plugin concern). Sub-check skipped per §2.1. |
| Outro / CTA paragraph present, immediately before `## FAQ`, nothing after the FAQ | pass | `## Start With One Chart This Week` (lines 171–175) sits immediately before `## FAQ` (line 177). The file ends at the final FAQ answer, line 197. Two short paragraphs, no feature re-list. |
| CTA links this blog's CTA target with an action anchor | pass | `[Try my free AI tools](/ai-tools)` at line 175, matching `blog.md` §Primary CTA hook verbatim. Not a bare homepage link. |
| H2 8 contains no comparison table (pillar-cannibalisation guard) | pass | Zero table rows between lines 163 and 170. One positioning paragraph plus one honesty paragraph, exactly as outline H2 8 specifies. The added question at line 165 did not introduce a table. |

Structural deltas vs outline (if any):
- None. Headings, order, intro shape, FAQ set, CTA placement and image slot count all match `outline.md` exactly. The revision touched only prose; no structural element moved.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass | Every number in the body is procedural instruction, not evidence: "three to five columns" (25, 95), "Two to six words per cell" (101), "Two rows, three columns" (38), "Eight columns on one page" (159, the v1 "A4" replaced with a locale-neutral phrasing), "five ways" (153). None asserts a research finding. The one unverifiable evidentiary block, the worked-example table, carries a `[VERIFY:]` at line 127. The `79 slides` stat from facts.md §Statistics (marked ⚠️ "Preferred: skip it") is still correctly unused. |
| **Invented-evidence check (editor-flagged, priority 1)** | pass | Zero retention/memory percentages, zero "studies show", zero "research suggests" attached to any charting claim. Grep for `studies\|research suggest\|retention\|memor\|proven\|evidence` returns only the honesty beat itself and one metaphorical "evidence" in the argument-structure sentence at line 73. |
| **H2 3 states the retention claim is unsupported and names the structural benefit instead (outline-required)** | pass | Lines 75–79 are byte-identical to v1 and still do exactly what the outline demands without softening: "I went looking for the research behind that line while writing this, and there isn't any: every guide making the claim cites nothing at all, and I could not find a single study on charting specifically. So I am not going to repeat it." No "studies suggest" hedge crept in during the revision. |
| **FAQ answer 5 agrees with H2 3 rather than hedging back** | pass | Line 197, unchanged from v1: "I could not find a single study supporting a memory benefit specific to charting... treat that claim as unproven. The gains you can count on are structural." Same position, same firmness. |
| **Misattributed social quotes (editor-flagged, priority 3)** | pass | Both Reddit quotes survive the revision with their framing clauses intact. Line 115: "One r/NoteTaking poster described the underlying trap **for note-taking in general**". Line 161: "As one person on r/NoteTaking described **their own systems**", inside a mistake the draft pre-labels "a note-taking problem long before it is a charting problem". Neither implies the commenter used or endorsed charting. The `@DrAminaYonis` X quote is still unused. The Goodnotes X post (line 147) is now claimed correctly, which is why the unsourced-claims list below is empty for the first time. |
| Competitor mentions framed as "best for [segment]" | N/A | `modules.competitors` OFF in `config.yaml`. Check skipped. |
| Competitor pricing / feature freshness + `[VERIFY:]` on competitor pricing | N/A | `modules.competitors` OFF. Both checks skipped. |
| Product mentions (count: `1`, `modules.product` ON) each earning their place | pass | Exactly ONE named product mention: "Text Summarizer" at line 175, in the closing CTA only, passing the deletion rule (the sentence describes condensing a chapter to surface repeating categories, which is the pre-charting step, not a bolt-on). The intro's "build small AI tools on the side" (line 17) names no feature, per outline P2. Zero mentions in H2 1–8. |
| Own-product pricing claims (no price, tier, usage number) | pass | Grep `\$\d`, `free up to`, `per month`, `tier`: zero hits. "free AI tools" is the durable framing `blog-craft.md` §Own-product pricing claims asks for. |
| Soon-to-ship feature gap check | N/A | `brief.md` §Soon-to-ship features lists "None". |
| Internal links (count: `5` post links + 1 CTA link) placed per outline | pass | `/note-taking-methods` (19, intro pillar up-link), `/outlining-note-taking-method` (73, H2 3 where an argument beats a grid), `/best-notebooks-for-note-taking` (149, H2 6 on dot-grid pages), `/cornell-note-taking-method` + `/mind-mapping-note-taking-method` (167, H2 8). All five outline rows placed in their planned sections; the H2 6 trim did not drop the notebooks link. Anchor text near-exact-match and varied. |
| First internal link appears before the first external link | pass | First internal at line 19; first external at line 56. |
| Every internal blog link is root-relative `{route_prefix}<slug>` with no trailing slash | pass | All six are `/slug` form, no domain, no trailing slash, matching `trailing_slash: false`. |
| **Forbidden external links to SERP competitors (editor-flagged, priority 2, never module-gated)** | pass | The draft renders exactly two external URLs: `https://www.utc.edu/...` (line 56) and `https://subjectguides.york.ac.uk/note-taking/charting` (line 71). Both are `authoritative_allowlist` per `blog-craft.md` §Authoritative-site allowlist (`.edu` literal enumeration; the academic-domain heuristic clause for `.ac.uk`) and per outline §External link plan. Cross-referenced against `research/serp.md` §Selected results analyzed: **evernote.com, plaud.ai, meetjamie.ai, e-student.org and sheridancollege.libguides.com appear ZERO times as URLs.** Each is instead quoted with the vague prose attribution the outline mandates: "One college study-skills guide" (54, Sheridan), "One note-taking guide" (64) and "one note-taking guide sums it up" (103, both Plaud), "one beginner's guide" (89, 160, e-student). The mistake-4 rewrite did NOT introduce a link to e-student.org, which was the specific regression risk in that fix. |
| External links (count: `2`) each point to reputable sources; anchor text = literal claim | pass, with a documented shortfall | Anchors are the literal cited claims: "set up your paper by drawing columns and labeling appropriate headings in a table" (56) and "harder to work with for STEM subjects that require visual representations like graphs or formulas" (71). 2 rendered links is below `blog-craft.md` §External linking's 3–5 guidance, but the two remaining external rows are correctly left as `[EXTERNAL_LINK_NEEDED:]` markers for Stage 3d, and `outline.md` §Open questions records the two-link outcome as a deliberate accepted decision. **Not logged as an issue and not a reason to revise.** |
| Target keyword appears 2–8 times in body (actual count: `7`) | pass | "charting method" appears 7 times in the body prose (lines 15 ×2, 21, 23, 42, 75, 81), plus 6 in the FAQ and 1 in the title. The full-string form "charting method note-taking" lands once, in the intro at line 15. Unchanged from v1. No stuffing. |

Unsourced / suspicious claims:
- **None.** Both v1 entries are resolved: the intro superlative at line 19 is now "nothing else lays it out as clearly", and the Goodnotes reach claim at line 147 now asserts only what `facts.md` §Named examples supports. Every remaining claim in the draft carries either a facts.md row, a prose attribution, a `[VERIFY:]` marker or an `[EXTERNAL_LINK_NEEDED:]` marker.
- One coverage note, not an unsourced claim: line 131's two research-methods details (random assignment to conditions; surveys running as questionnaire or interview) moved OUT of the table during the revision and therefore out of the `[VERIFY:]` marker's stated scope at line 127, which names only "the sample-size and main-limitation characterisations in this table". Both are uncontroversial textbook statements and neither is numeric, so §3.1 does not fire, but the Stage 3d human verifying the table will not know to check line 131. Logged `minor` in §7.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | Yes, with a scope note. Line 127, immediately under the worked-example table it scopes. The shape is canonical and the `\| source:` clause is present and non-trivial: "writer's general research-methods knowledge, no external source in facts.md", the honest-disclaimer form `blog-craft.md` §`[VERIFY:]` source clause explicitly accepts. Matches `outline.md` §Open questions row 2. The `minor` in §7 is about the marker's stated scope no longer covering line 131, not about its shape. |
| `[EXTERNAL_LINK_NEEDED:]` | `2` | Yes, and both are CORRECT, not missing links. Line 115 (retrieval practice, backing Step 5) and line 145 (paper vs digital) are external link plan rows 4 and 3, deliberately routed to Stage 3d. Both carry a `suggested source type:` clause. Neither claim is asserted as fact around the marker: line 145 still hedges to "Someone will tell you handwriting beats screens for recall", honouring the outline's "do not assert a paper-beats-screens claim unsourced". Both survived the H2 6 trim intact. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes. All five planned internal targets were confirmed and linked, so no slot needed a marker. |
| `[IMAGE:]` | `4` vs outline `4` slots | Yes, exact match, and none moved during the revision. Line 27 (remotion, chart anatomy, after H2 1 + 1 paragraph), line 85 (remotion, five-step flow, after H2 4 + 1 paragraph), line 139 (ai-prompt, paper vs tablet, after H2 6 + 1 paragraph), line 155 (ai-prompt, overstuffed chart, after H2 7 + 1 paragraph). **Zero slots in H2 5**, where the worked-example table carries the visual load, per outline. **Zero featured-image placeholder**, correct for `wordpress-rest` (featured image ships as a `featured_media` ID, not a body placeholder) and consistent with `custom-instructions.md` §Image style pinning the featured slot to `ai-prompt`. Concepts, types and filenames all match `outline.md` §Image placement plan. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[verify:`, `[Image:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` returns zero hits. All four marker shapes are the exact literals the Phase 4 compile greps for.

Sub-checks run and cleared:
- **§4.2a featured-image hygiene:** clear. No `Suggested filename: featured.*`, and none of the four concepts duplicates the outline's featured concept (a hand-lettered hero over a ruled notebook page). The line-27 anatomy diagram is the nearest neighbour but is a `remotion` callout diagram, not the `ai-prompt` hero; see §10.
- **§4.2b image-placement hygiene:** the line-85 placeholder is followed (after a blank line) by `### Step 1:`. That is the placement `outline.md` §Image placement plan explicitly specifies ("After H2 4 + 1 paragraph"), and the five-step flow image previews the H3 sequence it introduces. Not logged as an issue, same call as v1.
- **§4.2c table-redundant chart:** the line-27 `remotion` placeholder sits 6 lines from the mini table at 33–36. The rule's own exception applies and the outline pre-argued it: the diagram adds labelled callouts (what a row label is, what a column header is, what belongs in a cell) that a markdown table cannot render. Not logged as an issue.

## 5. Word count

- Draft: `2,245` words (body prose: intro at line 15 through the end of the CTA at line 175, headings included, `[IMAGE:]` / `[VERIFY:]` / `[EXTERNAL_LINK_NEEDED:]` marker text excluded, `## FAQ` block excluded). Excluding heading text: `2,131`. Excluding the three markdown tables as well: `1,999`. FAQ, counted separately and not gated: `354`.
- Outline target: `2,060` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+9.0%` on the primary basis (`+3.4%` excluding heading text)
- Band: `within ±10% = pass, no issue logged`

The trim worked. Re-measuring draft-v1 on this exact basis gives `2,308` words (`+12.0%`), which review-v1 logged as a `minor` trim note; draft-v2 is now inside the clean band, so no word-count issue is logged and §9 requests no further trimming.

Per-section deltas vs the outline's per-section breakdown (marker and heading text excluded, so directly comparable to the v1 table):

| Section | Outline | v1 | v2 | v2 delta |
|---|---|---|---|---|
| Intro | 200 | 176 | 178 | -11% |
| H2 1 What the Charting Method Actually Is | 200 | 182 | 182 | -9% |
| H2 2 When the Charting Method Wins | 200 | 269 | 225 | +13% |
| H2 3 When Charting Flops | 230 | 264 | 264 | +15% |
| H2 4 How to Use the Charting Method in 5 Steps | 350 | 326 | 331 | -5% |
| H2 5 A Worked Example, Start to Finish | 250 | 286 | 281 | +12% |
| H2 6 Paper vs. Digital | 180 | 231 | 189 | +5% |
| H2 7 Five Mistakes That Ruin a Chart | 220 | 239 | 251 | +14% |
| H2 8 How Charting Fits Next to the Others | 130 | 137 | 146 | +12% |
| CTA | 100 | 84 | 84 | -16% |

The two sections review-v1 named are both back inside tolerance: H2 2 dropped 44 words (+35% → +13%) and H2 6 dropped 42 (+28% → +5%). H2 7 and H2 8 grew slightly because the requested voice beat ("Ouch.", 153), the mistake-4 reconciliation (160) and the H2 8 question (165) all landed there. No section is now more than +15% over its own budget.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists grepped case-insensitively, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | Zero. |
| En-dashes (`–`) only in numeric ranges | pass | Zero en-dashes at all. |
| First-person throughout | pass | `I` / `you` throughout; no `one` / `users` / `stakeholders` as third-person address. |
| Active voice | pass | No passive-marker hits; the single passive at line 147 is the wording review-v1 prescribed. |
| ≥1 rhythm marker in every H2 | pass | All nine sections clear, and every one now clears on a strong arm (list, table or standalone question) rather than on burstiness alone. |
| ≥1 bullet list per ~300 words | fail (accepted, do not fix) | 3 list blocks (5 bullets at 48–52, 4 at 66–69, the numbered 5 at 157–161) across ~2,131 words = 1 per ~710. Three markdown tables and the five H3s under H2 4 do the same wall-breaking work, and paragraphs run 1–3 sentences throughout. **review-v1 explicitly instructed the writer NOT to add lists** ("Do not add lists to H2 5, its table is the break. Do not convert existing prose paragraphs into bullets in H2 4"), so this is a deliberate, documented shortfall rather than a writer failure. Not logged in §7 and not a reason to revise. |
| ≥1 standalone-question paragraph per major section (author voice calls for it, per `blog-ops/profile/authors.md` + `voice.md` §Lexicon) | partial | Up from 2 to 5: lines 40, 129, 137, 141, 165. H2 6 alone now carries two. Four of nine sections still have none (H2 2, H2 3, H2 4, H2 7). The writer delivered three where review-v1 asked for two, so the residual is optional polish only. Logged `minor` in §7 with an explicit do-not-churn note. |
| ≥1 concrete number or named example per major section | pass | H2 1 the meeting mini table; H2 2 five named scenarios; H2 3 four named avoid-cases; H2 4 "three to five columns", "two to six words"; H2 5 the three-method table; H2 6 the nursing-student tablet notes; H2 7 "Eight columns on one page"; H2 8 Cornell / outlining / mind mapping named. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Every section stddev ≥ 6.2; range runs from a 1-word beat ("Ouch.", line 153) to 53-word sentences. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 7 Five Mistakes That Ruin a Chart | 153 | `major` | The section's opening claim contradicts its own list. Line 153 says "Four of them happened before the session even started, which was a humbling thing to notice." The five mistakes at lines 157–161 are: (1) "Choosing your columns **mid-lecture**", which the item itself locates during the session ("redrawing the grid at minute twelve while the lecturer moves on"); (2) "Writing full sentences in the cells", which happens while you write; (3) "Too many columns", a setup decision, pre-session; (4) "Charting material that does not chart", a pre-session decision; (5) "Building the chart and never opening it again", explicitly after the session. Pre-session mistakes: two, not four. Even on the most generous causal reading (counting mistake 1 because the root cause is skipped prep) the number is three, and mistake 5 cannot be counted under any reading. This is the same species of self-contradiction as the v1 mistake-4 issue, it was present in draft-v1, and the v1 review touched this exact line for a voice note without checking the arithmetic. In a post whose whole differentiator is refusing to repeat claims it cannot back, miscounting its own list is the one error it cannot afford. | Replace the count with a claim the list supports. Rewrite line 153 as: "Every bad chart I have made failed in one of five ways, and I have made all five. Ouch. Most of them were decided before the session even started, which was a humbling thing to notice." Keep "Ouch." and keep the self-deprecating clause "and I have made all five"; those are the voice beats review-v1 asked for and they work. Do not renumber, reorder or reword any of the five mistakes at lines 157–161. |
| H2 5 A Worked Example, Start to Finish | 131, 133 | `minor` | The paragraph added at line 131 during the revision (a good addition, see §8) collides with the section's closing thesis two sentences later. Line 131 ends "**Both of those** belong in the margin, not in a cell", and line 133 then says "Three tidy paragraphs would have carried exactly the same information and hidden **both of those** observations inside it." The writer did distinguish "details" (131) from "observations" (133, meaning the two things the chart surfaced at line 129), so a careful reader recovers it, but the repeated "both of those" two sentences apart makes the closing thesis briefly read as "the format's value is that it pushes two details into the margin", the opposite of the point. | Break the echo at line 133 without touching line 131. Change "and hidden both of those observations inside it" to "and buried both of those insights mid-paragraph." Keep the preceding sentence "That is the whole value of the format." exactly as it is. Do not delete or shorten the line-131 paragraph; it is one of the best additions in this revision. |
| H2 5 A Worked Example, Start to Finish | 127, 131 | `minor` | The `[VERIFY:]` marker at line 127 scopes itself to "the sample-size and main-limitation characterisations **in this table**". During the revision, two research-methods claims moved out of the table and into the prose at line 131 (an experiment assigns participants to conditions at random; a survey can run as a questionnaire or as an interview). Both are uncontroversial and neither is numeric, so no sourcing rule fires, but the human verifying this at Stage 3d will read the marker's scope literally and never look at line 131. | Widen the marker scope. Replace line 127 with: `[VERIFY: the sample-size and main-limitation characterizations in this table, and the two research-methods details in the paragraph below it \| source: writer's general research-methods knowledge, no external source in facts.md]`. This also fixes the British "characterisations" to US spelling, matching the prose conversion the rest of the draft received. |
| H2 6 Paper vs. Digital | 137, 145 | `minor` | The H2 6 trim left the section making the same point twice with nothing added the second time. Line 137: "Paper wins more often than I expected, because ruling columns by hand **forces you to commit to your categories** up front." Line 145: "For charting specifically, the difference I notice is more mundane: **paper makes you commit**." In draft-v1 the second instance carried a contrast that justified it ("on paper you commit to your columns, and on a screen you keep fiddling with them"); the trim removed the contrast and left a bare five-word restatement. | Give line 145 back a distinct payload rather than restoring the cut clause. Change "paper makes you commit" to "you cannot quietly redraw a column you already ruled in ink." Keep the "Someone will tell you handwriting beats screens for recall." sentence and the `[EXTERNAL_LINK_NEEDED:]` marker exactly as they are. |
| H2 7 Five Mistakes That Ruin a Chart | 160 | `minor` | The mistake-4 reconciliation is correct and fully resolves the v1 `major`, but the closing clause needs a re-read: "a lecture you can predict and prep columns for charts fine, a rambling seminar does not." The verb "charts" sits directly after the noun phrase "prep columns for", and the two halves are joined by a comma splice. Note that review-v1 §9 supplied this wording verbatim, so this is the reviewer's sentence to fix, not the writer's error. | Repunctuate for readability without changing the position. Replace the clause with: "a lecture you can predict, and prep columns for, charts fine; a rambling seminar does not." Keep the first sentence of mistake 4 unchanged, keep the prose-only attribution, and do NOT add a link to e-student.org. |
| H2 2, H2 3, H2 4, H2 7 | 42–58, 60–79, 81–115, 151–161 | `minor` | Humanization-floor residual: standalone-question paragraphs now stand at 5 (lines 40, 129, 137, 141, 165), up from 2, but four of nine sections still have none. `voice.md` §Lexicon names rhetorical opener questions as an Olga signature. **Explicitly optional.** The writer delivered three where review-v1 asked for two, every section already clears the rhythm-marker requirement on a stronger arm, and churning four more sections risks the tic reading as formulaic. | Optional, low priority, skip if it does not land naturally. At most add ONE, to H2 4's opener at line 83 (e.g. "Where does the work actually go?" before "Five steps, in the order I actually do them"). Do NOT add questions to H2 2, H2 3 or H2 7; H2 7 already opens with the "Ouch." beat and a second device would crowd it. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The worked-example fix at lines 121–131 over-delivered, and the added paragraph at 131 is the best new sentence in this revision.** review-v1 asked only for cells compressed to six words or fewer. The writer did that (the longest cell went from 19 words to 6, and every cell now obeys Step 3's "Two to six words per cell") and then went further: line 131, "Two details did not survive the squeeze: an experiment assigns its participants to conditions at random, and a survey can run as a questionnaire or as an interview. Both of those belong in the margin, not in a cell", turns the compression into a live demonstration of Step 4's escape hatch. The worked example now teaches the method twice, once by shape and once by what it costs. Keep this paragraph. The §7 `minor` on line 133 is about the sentence AFTER it, not about this.
- **The honesty beat at lines 75–79 and FAQ answer 5 at line 197 came through the revision completely untouched.** Both are byte-identical to draft-v1. No "studies suggest" hedge crept in while the writer was reworking three adjacent sections, and the FAQ still holds the same firm line as the body instead of quietly walking it back. This is the plan's whole differentiator and it has now survived a full revision pass, which is the harder test. Change nothing here on a third pass.
- **The voice fixes are genuine rather than bolted on, and every forbidden-source discipline held.** "born from the chart I ruined by wedging one homeless fact sideways across three cells" (107), "Ouch." (153) and "Do you ever start a chart in a notes app and spend the session rearranging columns instead of listening?" (137) are the three `voice.md` signatures the v1 review found missing, and none of them reads as a retrofit. Simultaneously, the mistake-4 rewrite kept its prose-only attribution with no e-student.org URL, the Reddit quotes kept their "for note-taking in general" (115) and "their own systems" (161) framing clauses through the trim, and the Goodnotes claim at 147 now asserts only what `facts.md` supports. Do not touch those framing clauses.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v2.md. This is a small pass: ONE real
fix and four one-line polish items. Draft-v2 resolved both major issues from the
previous review cleanly, so do NOT rework any section wholesale. Apply ONLY
these, and preserve everything else, including the strengths listed above:

1. REQUIRED. H2 7, line 153: the sentence "Four of them happened before the
   session even started" contradicts the list directly beneath it. Of the five
   mistakes at lines 157-161, only two are pre-session (mistake 3, too many
   columns; mistake 4, charting material that does not chart). Mistake 1 is
   explicitly mid-lecture, mistake 2 happens while you write, mistake 5 happens
   after. Rewrite line 153 as:

   "Every bad chart I have made failed in one of five ways, and I have made all
   five. Ouch. Most of them were decided before the session even started, which
   was a humbling thing to notice."

   Keep "Ouch." and keep "and I have made all five". Do NOT renumber, reorder or
   reword any of the five mistakes at lines 157-161.

2. H2 5, line 133: "both of those observations" echoes "Both of those" at the end
   of line 131 and briefly inverts the section's closing point. Change
   "and hidden both of those observations inside it"
   to
   "and buried both of those insights mid-paragraph."
   Keep "That is the whole value of the format." unchanged. Do NOT delete or
   shorten the line-131 paragraph ("Two details did not survive the squeeze...");
   it is the best addition in draft-v2.

3. H2 5, line 127: widen the [VERIFY:] scope so it covers the two claims that
   moved out of the table into line 131, and fix the British spelling inside the
   marker. Replace the whole marker with:

   [VERIFY: the sample-size and main-limitation characterizations in this table,
   and the two research-methods details in the paragraph below it | source:
   writer's general research-methods knowledge, no external source in facts.md]

4. H2 6, line 145: "paper makes you commit" just restates line 137's "forces you
   to commit to your categories up front". Change "paper makes you commit" to
   "you cannot quietly redraw a column you already ruled in ink." Keep the
   preceding "Someone will tell you handwriting beats screens for recall."
   sentence and the [EXTERNAL_LINK_NEEDED:] marker exactly as they are.

5. H2 7, line 160: repunctuate the closing clause of mistake 4 so it reads on
   the first pass. Replace
   "a lecture you can predict and prep columns for charts fine, a rambling
   seminar does not."
   with
   "a lecture you can predict, and prep columns for, charts fine; a rambling
   seminar does not."
   Keep the first sentence of mistake 4 unchanged, keep the prose-only
   attribution, and do NOT add a link to e-student.org.

6. OPTIONAL, skip if it does not land naturally: add ONE standalone-question
   paragraph to H2 4's opener at line 83, e.g. "Where does the work actually go?"
   before "Five steps, in the order I actually do them." Do NOT add questions to
   H2 2, H2 3 or H2 7.

Do NOT trim or expand anything else: draft-v2 is at 2,245 body words against a
2,060 target (+9.0%), inside the clean band, and these edits are net-neutral.

Change NOTHING in H2 3 (lines 60-79), nothing in FAQ answer 5 (line 197), and
nothing in the worked-example table itself (lines 121-125) - all three are now
correct. Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. The two
[EXTERNAL_LINK_NEEDED:] markers at lines 115 and 145 are CORRECT and belong to
Stage 3d; do not invent URLs for them and do not delete them. Do NOT add any link
to evernote.com, plaud.ai, meetjamie.ai, e-student.org or
sheridancollege.libguides.com. Do NOT change the H2 order, title, slug, meta
description, tags, image placeholders, or FAQ set, those are locked.

Produce blog-ops/drafts/charting-method-note-taking/draft-v3.md. Do not overwrite
the prior draft.
```

## 10. Reviewer notes (free-form)

- **This is a good revision, and the verdict should not be read as a knock on it.** Every one of the eight instructions in review-v1 §9 was applied, both `major` issues are genuinely resolved rather than papered over, the word count moved from `+12.0%` into the clean `±10%` band, and the voice now matches `authors.md` for the first time. The single `major` blocking approve was present in draft-v1 and the v1 review missed it, so draft-v2 did not regress; it simply was never told about this one.
- **Owning the v1 miss:** review-v1 §7 quoted line 149 of draft-v1 ("Every bad chart I have made failed in one of five ways") as "one clause away from a genuine self-deprecating beat" and asked the writer to warm it. The writer warmed it exactly as asked and the count error rode through untouched, now reinforced with "which was a humbling thing to notice". The lesson for future passes: when a review touches a sentence for tone, it should still check that sentence's claim.
- **Three of the four `minor` issues are direct side effects of correct fixes.** The line-133 echo exists because the writer added the (excellent) line-131 paragraph the review asked for; the `[VERIFY:]` scope drifted because content moved out of the table as instructed; the H2 6 duplication appeared because the trim removed the contrast clause that used to justify the second mention. None of them is a writer failure, and all three are one-line edits. If the editor decides the `major` at line 153 is cheap enough to hand-edit rather than spend a full writer pass on, these four should ride along in the same edit.
- **British spelling now survives only inside marker text.** Reader-facing prose is uniformly US English (`labeled`, `recognizable`, `analyzing`, `behavior`, `generalize`, `math`, and `A4` neutralized to "one page"). The two remaining British spellings are `centre` inside the line-115 `[EXTERNAL_LINK_NEEDED:]` suggested-source-type text and `characterisations` inside the line-127 `[VERIFY:]`. Neither ships to the reader, since both markers resolve at Stage 3d. Item 3 in §9 sweeps the `[VERIFY:]` one incidentally; the line-115 one can be ignored.
- **Profile-doc gap, still open from v1 and worth fixing outside this post:** neither `voice.md` nor `site-conventions.md` states a spelling locale, yet the published corpus is consistently US English. A one-line "US English" note in `voice.md` would stop this costing a review round on every future draft.
- **For the image planner at Stage 4a:** unchanged from v1. The featured concept from `outline.md` (a hand-lettered hero over a notebook page ruled into labeled columns) and the line-27 in-post slot (a `remotion` anatomy diagram of a ruled grid) are adjacent enough to render as near-duplicates. They pass the featured-image hygiene check as written (different type, different job) but should be visually differentiated at production, ideally by making line 27 unmistakably a diagram with leader lines and labels rather than a second illustrated notebook page.
- **Two things a revising writer might be tempted to "fix" and should leave alone:** the H2 1 mention of the University of York at line 38 is deliberately unlinked because the York link is spent at line 71, per the outline's "use it in whichever section reads better, once only"; and the CTA at 84 words is deliberately under its 100-word budget, which is the right direction for a closing CTA.
- **If draft-v3 comes back with item 1 applied and nothing else broken, it approves.** There is no structural, sourcing, linking, marker or word-count work left on this post.
