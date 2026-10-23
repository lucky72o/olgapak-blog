# Review: aesthetic-desk-setup draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/aesthetic-desk-setup/draft-v2.md`, `blog-ops/drafts/aesthetic-desk-setup/draft-v1.md` (for the revise-pass diff), `blog-ops/drafts/aesthetic-desk-setup/review-v1.md` (iteration-1 §9 items 1-8), `blog-ops/drafts/aesthetic-desk-setup/outline.md`, `blog-ops/drafts/aesthetic-desk-setup/facts.md`, `blog-ops/drafts/aesthetic-desk-setup/brief.md`, `blog-ops/drafts/aesthetic-desk-setup/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/aesthetic-desk-setup/draft-v2.md` (word count: `2,327` body prose excluding FAQ; outline roll-up target: `2,370`)
- Outline: `blog-ops/drafts/aesthetic-desk-setup/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1-3 sentences): All eight items from `review-v1.md` §9 landed as specified, and every objective check in §§1-6 passes with zero critical and zero major issues. The revise pass left four `minor` nits behind, two of them small craft wobbles the revisions themselves introduced (a rhetorical question that pays off two paragraphs late, and a three-item bullet list under a "two sources" stem) plus one unsourced ordinal in the CTA and the still-open `[EXTERNAL_LINK_NEEDED:]`. None of these would embarrass the blog, all four are one-line fixes an editor or Olga can make at Gate 2, and none justifies burning iteration 3.

**Iteration counter:** this is revision pass `2` of `max 3`. Verdict is `approve`, so no escalation is required.

## Verification of iteration-1 §9 items (1-8)

Checked by diffing `draft-v1.md` against `draft-v2.md`. All eight landed.

| # | Item | Landed? | Evidence |
|---|---|---|---|
| 1 | Target keyword to 3 body occurrences | ✅ | `aesthetic desk setup` now at lines 14 (intro), 36 ("An aesthetic desk setup is a short list of decisions"), 174 (FAQ Q1 answer). Exactly 3 in body, no heading touched. |
| 2 | Honest arithmetic at the "here's the deal" paragraph | ✅ | Line 34 now reads "Three of the seven steps cost nothing at all. The rest come down to one decision each, and where I name something to buy, it's one pick, not a shortlist. You won't need all of them." No product count stated. Line 156's "Three of the seven decisions cost nothing" left untouched, as instructed. |
| 3 | Name u/gin_martini5 | ✅ | Line 63: "One commenter's whole budget room plan, from u/gin_martini5, read as an order of operations, and step four was keeping the cords out of sight." No Reddit link added. |
| 4 | FAQ trim of Q1/Q2/Q3/Q5, Q4 untouched | ✅ | All four trimmed (lines 174, 178, 182, 190); Q4 (line 186) byte-identical to draft-v1. No question wording changed. FAQ now 289 words. |
| 5 | Bullet list in Step 3 | ✅ | Lines 83-85. See §7 issue 2 for a stem/count wobble it introduced. |
| 6 | Split "So where should it go?" + one more standalone question | ✅ | Line 125 is now a one-sentence paragraph; the second question is line 32. See §7 issue 1 for its placement. |
| 7 | De-template the CTA | ✅ | Line 168 fully rewritten and desk-specific; keeps `/ai-tools`, the "try my free AI tools" action anchor, and "automate the mundane". See §7 issue 3 for a claim it introduced. |
| 8 | Optional "A single, widely repeated percentage" | ✅ | Line 113. Figure still not named, lines 113-117 otherwise untouched. |

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | ✅ | First-person throughout, warm and practical, self-deprecating in the right register ("Fair.", "buy the fake one and don't apologise"). No stiff marketing drift. `voice.md` §Lexicon's rhetorical hooks now present at lines 32 and 125. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ | Grep for `\b(one could\|one should\|users are\|stakeholders)\b`: 0 hits. |
| Active voice (no "X was scanned" shapes) | ✅ | Grep for `\bwas (scanned\|checked\|monitored\|built)\b`: 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ | Per-section sentence-length stddev, all ≥ 6.5 (floor is 4): intro 14.4, H2 1 6.5, Step 1 12.4, Step 2 18.0, Step 3 10.5, Step 4 10.7, Step 5 9.9, Step 6 13.7, Step 7 18.6, "If you only buy three things" 7.2, CTA 11.9, FAQ 10.7. |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ | Grepped against `writing-standards.md` §Forbidden phrases (23 entries) and `voice.md` §Additional forbidden phrases ("None beyond the generic list"). Zero hits. |
| Em-dash count: `0` (grep U+2014); any hits = automatic §1 fail | ✅ | Zero. Worth noting the writer resisted the outline itself, whose P1/P4 hook drafts and H2 9 notes contain em-dashes; the draft substitutes a colon (line 14) and a dash-free list (line 20). |
| En-dash context: every `–` hit is inside a numeric range | ✅ | Zero `–` hits. |
| Intro jargon (per `writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation) | ✅ | Intro (lines 14-22) contains none of `SERP` / `DR` / `keyword difficulty` / `Parkinson's Law` / `timeboxing` / `kanban`, nor the SEO baseline set. The one technical passage in the post ("objects in view compete for neural representation", line 44) is in the body and glossed in the same sentence: "which is a precise way of saying your visual system has a limited budget". |
| Product code-literal grep (`modules.product: true`) | ✅ | Zero backticks in the draft; `product.md` defines no code constants for a consumer blog. N/A in substance. |
| Intro-hook over-anchoring | N/A | The hook is the reader's own saved-photos folder, not a time-bound event. Check skipped per §1.9. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per `adapters/publish/frontmatter/wordpress.md` | ✅ | `title` ✅, `date: 2026-09-09` ✅, `excerpt` (144 chars, ≤160) ✅, `tags` 3 entries ✅, `authors: Olga Pak` matches `authors.md` byline ✅, `draft: true` ✅, no `cover`/`heroImage` field ✅ (the wordpress adapter ships the featured image via media upload). |
| Title in frontmatter matches outline "Final title" exactly | ✅ | `Aesthetic Desk Setup: 7 Simple Steps on Any Budget`, 50 chars, byte-identical to outline §Final title. |
| Slug / meta description match outline | ✅ | Slug `aesthetic-desk-setup` (directory + frontmatter-free for this adapter); `excerpt` byte-identical to outline §Final meta description. |
| Tags exist in `blog-ops/profile/blog.md` §Tag taxonomy | ✅ | `productivity`, `students`, `time management` all present in the verified live-WP list. 3 tags, inside the 2-4 band. No invented tags. |
| H2 order in body matches outline body-sections list exactly | ✅ | Draft H2s in order: Why your desk doesn't look like the one you saved / Step 1 / Step 2 / Step 3 / Step 4 / Step 5 / Step 6 / Step 7 / If you only buy three things / Now protect the hours you spend at it / FAQ. Exact 1:1 with outline H2 1-9 + §Closing CTA + §FAQ block. Zero additions, removals, reorderings. |
| Intro is 2-4 paragraphs, 1-3 sentences each | ✅ | Four prose paragraphs (lines 14, 16, 18, 20) at 2/1/1/1 sentences, plus the disclosure at line 22, which the outline's P5 explicitly classes as furniture rather than a fifth prose paragraph. |
| Affiliate disclosure is the italic LAST paragraph of the intro, verbatim | ✅ | Line 22, immediately before the first `##` at line 24, character-for-character the string in `custom-instructions.md` §Content policy. |
| Intro internal links ≤2 | ✅ | Exactly 1 (`/how-to-reduce-screen-time`, line 18), woven into a sentence. No "see also" stack. |
| Every H2 has at least one rhythm marker | ✅ | H2 1 standalone question (line 32); Step 1 bullet list; Step 2 bullet list; Step 3 bullet list; Step 4 named examples + "two or three items"; Step 5 named examples + the 13-of-18 figures; Step 6 standalone question + ranked bullet list; Step 7 bullet list; "If you only buy three things" bullet list; CTA burstiness sd 11.9 + named tool. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ | 5 questions, wording byte-identical to the outline's five Q strings, same order. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | `wordpress-rest` adapter: FAQPage JSON-LD is a WP-plugin concern, not emitted by the frontmatter template. Sub-check skipped per SKILL §2.1. |
| FAQ is the last block, nothing after it | ✅ | Last line of the file is Q5's answer. The CTA sits at line 164-168, immediately before `## FAQ` at line 170. |
| Outro / CTA present with an action anchor to the blog's CTA target | ✅ | `[try my free AI tools](/ai-tools)` at line 168, matching `blog.md` §Primary CTA hook. Not a bare homepage link. |

Structural deltas vs outline (if any):
- None. Per-section word split drifts from the outline's per-section estimates (Step 5 291 vs 250, "If you only buy three things" 147 vs 200, CTA 117 vs 100) but the roll-up total is in band and per-section estimates are not a gated contract.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ | Line 46 "at or below eye level, at least 20 inches away" → `facts.md` §Statistics, OSHA, linked. Lines 30 + 63 "three of the five Reddit threads" → `facts.md` §Community-sourced fixes (declutter 3 of 5; cable management 3 of 5). Line 115 "nine Dutch organisations and tracked 18 outcomes... the other 13 outcomes" → `facts.md` §Statistics (9 organizations) + §Quotes (the abstract's "13 other outcome variables"; 5 significant + 13 null = 18, arithmetic the source supports). Line 186 FAQ repeats the same 13/18. Non-claim numerals ("9pm", "five-minute", "two seconds", "four pens") are rhetorical, not statistics. |
| The 47% plants figure is absent | ✅ | Grep for `47`: zero hits anywhere in the file. `facts.md` §Rejected's "Never promote" honored. |
| Step 5 does not overclaim what the study found | ✅ | Lines 113-117 state only what the abstract states (more attractive, more satisfied, fewer dry-air complaints, higher privacy, no direct effect on the other 13), then explicitly cut the productivity claim: "So a plant won't make you work faster." The one omission is the study's fifth positive (fewer health-related complaints), which under-claims rather than over-claims. Safe. |
| Step 6 contains no invented statistic | ✅ | The only numerals in lines 121-136 are "Step 1", "two seconds", and "the four" (a back-reference to the four-item list). Zero statistics, exactly as the outline required for the post's highest-risk section. |
| Competitor mentions framed "best for [segment]", not dismissals | N/A | `modules.competitors: false`. `facts.md` has no §Competitor facts table. |
| Competitor pricing / feature freshness (≤14 days) | N/A | Same. |
| `[VERIFY:]` on competitor pricing/features | N/A | Same; and zero `[VERIFY:]` markers exist. |
| Own-product mentions (count: `2`) each earn their place (`modules.product: true`) | ✅ | "The Text Summarizer" and "my free AI tools", both in the closing CTA, both load-bearing (delete either and the CTA loses its object). Far below the >8 stuffing threshold. Zero product mentions anywhere in the body. |
| Own-product pricing claims | ✅ | Grep `\$[0-9]`, `dollar`, `price`: zero hits in the whole file. No tier breakdown, no usage cap. |
| Soon-to-ship feature gap callouts | ✅ | `brief.md` §Soon-to-ship features: "None." Nothing to violate. |
| No prices anywhere (custom-instructions rule) | ✅ | Zero, for the eight Amazon picks and for Olga's tools alike. |
| Internal links (count: `6`) placed contextually | ✅ | Five blog-post links, each in the section its topic belongs to: `/how-to-reduce-screen-time` (intro), `/best-pens-for-note-taking` (Step 4), `/best-notebooks-for-note-taking` (Step 5), `/how-to-stop-doomscrolling` (Step 6), `/time-blocking` (Step 7). Plus `/ai-tools` (CTA target, not a blog post). Exactly the outline's P3 table. In the 3-5 band. |
| Every internal blog link is root-relative with no trailing slash | ✅ | All six are `](/slug)`. Zero absolute `https://olgapak.com/...` cross-post links (grep returns nothing). Matches `blog.trailing_slash: false`. |
| First internal link precedes the first external link | ✅ | Internal at line 18, first external (PMC3072218) at line 44. |
| External links (count: `3`) reputable; anchor text = literal claim | ✅ | `pmc.ncbi.nlm.nih.gov/articles/PMC3072218/` (anchor: "objects in view compete for neural representation and mutually suppress each other"), `osha.gov/etools/...` (anchor: "top of the screen at or below eye level, at least 20 inches away"), `pmc.ncbi.nlm.nih.gov/articles/PMC10346441/` (anchor: "The workspace was rated more attractive and people were more satisfied with it"). All three are the outline's §External link plan rows, all three anchor the literal claim. Sitting at the floor of blog-craft's 3-5 band, see §7 issue 4. |
| Each external citation URL linked exactly once | ✅ | Each of the three appears exactly once. The FAQ's Q4 re-references the PMC study in prose without emitting a second anchor, as the outline required. |
| Forbidden external links to SERP competitors (§3.5, unconditional) | ✅ | Forbidden set from `research/serp.md`: aestheticroomcore.com, slouchonline.com, orderofficefurniture.co.uk, stylebyemilyhenderson.com, savespendsplurge.com, nikkilo.com, octet.design, brewers.co.uk, forbes.com, psychologytoday.com, pmc.ncbi.nlm.nih.gov. The draft links none of them except `pmc.ncbi.nlm.nih.gov`, which is on `blog-craft.md` §Authoritative-site allowlist ("any `.gov` or `.edu` domain, NLM"), so the exception is intentional and no flag applies. `osha.gov` is `.gov`, allowlisted, and not in the SERP set. |
| Amazon links: all 8 from `facts.md` §Product picks, all tagged, product named in the anchor | ✅ | Eight distinct ASINs, byte-identical to the eight `facts.md` table rows: B0DK13ZHNJ, B00846E7JW, B0DS41FKHX, B0CQBVFSS8, B08GKBFN99, B0F8VN5T7K, B0BK5BQ8KD, B08DG3SHFD. Every one carries `?tag=op01e-20`. Zero untagged Amazon URLs. Every one of the eleven anchors names its product (no "Buy on Amazon"). Eleven anchors over eight ASINs because H2 9 re-links three picks, which outline H2 9 explicitly instructs: "Re-use the three product links already introduced above." |
| Steps 2 and 4 name one primary pick, alternates as brief asides | ✅ | Step 2 line 71: the D-Line box is a conditional clause inside the Univivi's own paragraph ("If your desk has no lip to clamp onto... the same decision solved in a different room"). Step 4 line 103: the Aothia pad is the same shape ("the same decision in a different material, so pick the one that matches the room you already have"). Neither is bulleted, neither gets its own paragraph, neither reads as a parallel recommendation. The pen box at line 105 correctly gets its own paragraph because it answers a different decision, not an alternate to the mat. |
| Target keyword appears 2-8 times in body (actual count: `3`) | ✅ | Lines 14, 36, 174. Inside blog-craft's 2-8 band, and this is the exact string the human sets as the Rank Math focus keyword pre-publish. |

Unsourced / suspicious claims:
- `draft-v2.md:168`, "The Text Summarizer was the first thing I built to claw that time back", issue: the ordinal "first" is an assertion about Olga's own build history that appears nowhere in `facts.md` §Product facts, `product.md`, or `brief.md` (which records "First-party data points to include: None"). Not a statistic and not reader-facing risk, but it is a fact the writer supplied rather than sourced. Logged `minor` in §7 with a one-word fix; Olga can also simply confirm it at Gate 2.
- Nothing else. No numeric claim in the draft lacks a `facts.md` row or an inline citation link.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A. No `\| source:` clause validation needed. |
| `[EXTERNAL_LINK_NEEDED:]` | `1` | ✅ shape. Line 91, canonical form with a claim + suggested source type: `[EXTERNAL_LINK_NEEDED: warm versus cool light and evening alertness, suggested source type: NLM/PMC study or .gov health guidance]`. Correctly attached to the one Step 3 sentence with no `facts.md` backing. See §7 issue 4 for the Stage 3d consequence. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A. All five planned internal links are resolved to real slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | ✅ Exact match. Lines 42, 61, 79, 111, each after its H2 heading plus one body paragraph (§4.2b hygiene: none is immediately followed by a heading). All `Type: ai-prompt`, matching `custom-instructions.md` §Image style (no `remotion`, no chart content). §4.2a featured-image hygiene: no `featured.*` filename and no slot matching the outline's featured concept appears inline, so the cover image will not render twice. §4.2c table-redundant chart: N/A, no `remotion` slots and no markdown tables in the body. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`: zero hits.

## 5. Word count

- Draft: `2,327` words (body prose, from the intro through the end of the closing CTA, excluding frontmatter and excluding the `## FAQ` block)
- Outline target: `2,370` words (outline §Word count roll-up "Total estimate", same basis)
- Delta: `-1.8%`
- Band: `within ±10% = pass, no issue logged`
- FAQ (counted separately, not gated): `289` words across five answers, with Q4 deliberately left at full length because it carries the post's evidence-correction beat.
- Plan band cross-check: `2,327` sits inside the plan's 2,000-2,400 band with room at both ends.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ | Both lists grepped. |
| Zero em-dashes (U+2014, grep returns nothing) | ✅ | Zero. |
| En-dashes (`–`) only in numeric ranges | ✅ | Zero en-dashes at all. |
| First-person throughout | ✅ | "I" or "you" in every H2 section. |
| Active voice | ✅ | Passive-marker grep clean. |
| ≥1 rhythm marker in every H2 | ✅ | See §2. Ten of ten sections. |
| ≥1 bullet list per ~300 words | ⚠️ pass with note | Six lists across ~2,327 body words = 1 per ~388. Below the ~1 per 300 guideline, but this is the state `review-v1.md` §9 item 5 deliberately asked for: it added the Step 3 list (5 → 6) and explicitly forbade lists in Step 4 and Step 5 because "those sections argue rather than enumerate and a list would read as filler". Re-flagging it now would contradict the instruction the writer correctly followed. No issue logged. |
| ≥1 standalone-question paragraph per major section | ⚠️ pass with note | Two, at lines 32 and 125. `review-v1.md` §9 item 6 specified exactly two and said "do not sprinkle", so this is the requested state, not a shortfall. `voice.md` §Lexicon names rhetorical hooks as a signature Olga move and two is enough to carry it. No issue logged; issue 1 in §7 is about where one of them sits, not how many there are. |
| ≥1 concrete number or named example per major section | ✅ | H2 1 u/crusty1uk + @lakshyalark + 3-of-5; Step 1 OSHA 20 inches + the riser + IKEA ALEX; Step 2 3-of-5 + u/gin_martini5 + Univivi + D-Line; Step 3 OSHA perpendicular-to-window + Honeywell; Step 4 two-or-three-items rule + Nordik + Aothia + walnut box; Step 5 nine organisations / 18 outcomes / 13 nulls + Mkono + two named Reddit commenters; Step 6 the four-home ranked list; Step 7 @TwiztidShot + the five-move list; H2 9 three named picks; CTA the Text Summarizer. |
| No em-dash overuse | ✅ | Zero, so trivially under the 1-per-300 ceiling. |
| Visible sentence-length variation in every section | ✅ | Lowest section stddev is 6.5 (H2 1), well above the 4-word floor. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Why your desk doesn't look like the one you saved | 32 | `minor` | The new standalone question "What's left, then, if it isn't taste and it isn't money?" is answered two paragraphs later. The paragraph that immediately follows it (line 34, "So here's the honest deal for this post...") is a scope statement about small rented bedrooms and pick counts, not an answer. The actual answer arrives at line 36: "An aesthetic desk setup is a short list of decisions." The question is good and belongs in the section; it just sits one paragraph too early, so the reader's expectation goes unpaid for 60 words. | Swap the order of the two paragraphs so the question is answered immediately: move line 32's question to sit directly before line 36, leaving line 34's "So here's the honest deal for this post..." paragraph where the question currently is. Do not reword either paragraph and do not delete the question. |
| Step 3: Fix the light before you buy any decor | 81-85 | `minor` | The stem reads "The fix is two sources instead of one:" and is followed by three bullets. The third, "Nothing overhead", is an exclusion rather than a source, so a reader who counts finds three items under a promise of two. The list itself is right and should stay; only the stem needs to account for the third line. | Change line 81 from "The fix is two sources instead of one:" to "The fix is two light sources instead of one, and one thing switched off:". Leave the three bullets exactly as they are. |
| Now protect the hours you spend at it | 168 | `minor` | "The Text Summarizer was the first thing I built to claw that time back" asserts a build order that is not in `facts.md` §Product facts, not in `product.md` (which lists the four tools as Email Generator, Text Simplifier, Acronym Explainer, Text Summarizer, with no chronology), and not in `brief.md`, which records "First-party data points to include: None." draft-v1's version of this line ("That's the job I built the Text Summarizer for") claimed nothing about order; the revise pass added the ordinal. | Either delete one word, making it "The Text Summarizer was the thing I built to claw that time back", or leave it and have Olga confirm at Gate 2 that the Text Summarizer really was the first of the four she built. Do not swap in a different tool name: the three complaints listed earlier in the sentence (a long read to boil down, an email rewritten four times, a term looked up mid-sentence) already map onto Summarizer, Email Generator and Acronym Explainer, and that mapping is worth keeping. |
| Step 3: Fix the light before you buy any decor | 91 | `minor` | The `[EXTERNAL_LINK_NEEDED:]` from draft-v1 is still open (correctly, it is a Stage 3d job, not a writer job). Flagging the consequence, not the marker: if it is deleted rather than resolved, the post ships with exactly three external citations, the floor of blog-craft's 3-5 band with no slack, and the sentence it is attached to ("Cooler and brighter while you're working, warm and low in the evening") becomes an unsourced recommendation rather than a cited one. | No writer action. At Stage 3d, prefer resolving over deleting: an NLM/PMC or `.gov` source on evening light and alertness would take the post to four externals and put a citation behind the one Step 3 sentence that currently has none. If no such source is found, delete the marker and soften the sentence to experience framing ("what works for me is cooler and brighter while I'm working, warm and low in the evening") rather than leaving it as a bare instruction. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The Step 5 honesty beat (lines 113-117) survived the revise pass intact and must keep surviving.** It withholds the disputed percentage entirely, says plainly that the number is not in the study it is credited to, reports what the study actually found with the 13-of-18 split exactly as `facts.md` §Quotes records it, and lands on "So a plant won't make you work faster. It makes the desk feel like somewhere you want to sit, which is the whole point of this post." No competitor in `research/serp.md` does this, and FAQ Q4 (line 186) carries the same beat into the snippet-eligible block at full length. Do not soften either, do not name the figure, do not add a second link.
- **The affiliate integrity is clean on every axis and the transparency line at line 55 is the reason it reads as honest rather than compliant.** Eight ASINs, all from the `facts.md` table, all tagged `op01e-20`, all named in the visible anchor, zero prices, disclosure verbatim as the italic last paragraph of the intro. On top of that, "I'm naming it because readers recommend it, not because it's linked here. It isn't." (the IKEA ALEX line) volunteers the one thing an affiliate post is never expected to volunteer. Keep it word for word.
- **Step 6 (lines 121-136) still invents nothing and is the post's most original passage against the SERP.** `facts.md` §Competitor structural finds records that no analysed competitor connects an aesthetic desk to phone management, and this section earns that ground with a ranked list of four phone homes and the line "None of this is willpower. It's geography: put the phone where reaching it costs a decision rather than a glance", then hands off to `/how-to-stop-doomscrolling` and closes the loop with "A desk that looks calm and a desk that keeps you focused turn out to be the same desk." Do not add a screen-time statistic to it under any circumstance.
- Bonus, also worth keeping: the rewritten CTA (line 168) is now genuinely desk-specific rather than the bullet-journal CTA with nouns swapped, and its three concrete complaints map onto three of the four real tools without naming or selling any of them. Only the word "first" needs a decision (§7 issue 3); the rest of the sentence should not be touched.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`.

The four `minor` issues in §7 do not require a writer pass. Issues 1, 2 and 3 are single-line edits an editor can apply directly at Stage 3c/3d (paragraph swap, stem reword, one-word deletion or a Gate 2 confirmation); issue 4 is a Stage 3d external-link resolution with no writer component. If the editor prefers to route them through the writer anyway, they should go as a copy-edit pass, not as a revise pass, and nothing outside lines 32-36, 81, 91 and 168 should be touched.

## 10. Reviewer notes (free-form)

- **The `facts.md` correction from iteration 1 is resolved and I am not re-raising it.** The u/gin_martini5 "ugly ass cords" quote now sits in `facts.md` §Quotes with its subreddit, thread URL, and the note that cable management was step four of that numbered budget plan. Line 63's attribution traces to `facts.md` cleanly. My iteration-1 note that the outline cited a quote `facts.md` did not carry was correct at the time; the backfill closes it.
- **Nothing broke in the revise pass.** I checked all eight §9 items against a full `draft-v1` → `draft-v2` diff, and the diff contains nothing outside those eight items. No section was rewritten as collateral, no product link was touched, no heading moved, no marker was dropped. The three small things the pass introduced (issues 1, 2 and 3 in §7) are all consequences of instructions I wrote, and two of them are arguably my fault rather than the writer's: §9 item 5 specified three bullets under a stem I did not ask to be reworded, and §9 item 6 specified a second question without specifying where in the section it should land.
- **On approving with four `minor` issues open.** Step 4's verdict gate is 0 critical + 0 major, and that is met. Judged on consequence rather than count: none of the four is visible to a reader as an error, none touches affiliate integrity, sourcing accuracy, or the two named traps (the 47% figure and an invented phone statistic, both still absent). The worst outcome if all four ship unfixed is a slightly slack rhetorical question, a list that says two and shows three, an unverified detail about which of Olga's own tools she built first, and a post at the floor of the external-link band. That is a normal Gate 2 punch list, not a revision.
- **Two outline-direction details the FAQ trim shed, recorded so nobody treats them as drift.** Q2 dropped "which is the job a monitor riser with a drawer or a cheap under-desk drawer unit does", and Q3 dropped "with a single palette". The outline's A directions named both. Both were cut because they restated body prose, which is what §9 item 4 asked for, and both answers still satisfy their outline direction's substance (Q2 still says everything else belongs in a drawer; Q3 still separates minimalist from empty). No action.
- **Carry to Gate 2 for the human:** (1) confirm or drop "first" at line 168; (2) resolve or delete the line 91 `[EXTERNAL_LINK_NEEDED:]`; (3) `outline.md` §Open questions still records the unlinked IKEA ALEX mention at line 53-55 as a human's call to cut, unchanged from iteration 1; (4) set the Rank Math focus keyword to `aesthetic desk setup` before publishing, per `custom-instructions.md`, since it is not settable via REST.
