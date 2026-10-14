# Review: rocketbook-review draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/rocketbook-review/draft-v2.md`, `blog-ops/drafts/rocketbook-review/draft-v1.md` (diffed), `blog-ops/drafts/rocketbook-review/review-v1.md` (prior issues), `blog-ops/drafts/rocketbook-review/outline.md`, `blog-ops/drafts/rocketbook-review/facts.md`, `blog-ops/drafts/rocketbook-review/brief.md`, `blog-ops/drafts/rocketbook-review/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/rocketbook-review/draft-v2.md` (word count: `2,175` body prose, FAQ, table rows, image placeholders and link URLs excluded; outline target: `~2,260`)
- Outline: `blog-ops/drafts/rocketbook-review/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): All seven review-v1 issues were applied exactly as instructed, and the diff against draft-v1 touches nothing else. Both sourcing errors are fixed: the "3-4 weeks" quote and the "6 refills in 7 months" report now belong to two different owners (line 140), and the 0.5 mm claim is a single hedged owner report that matches the new facts.md row (line 150). A fresh full pass finds 0 critical and 0 major issues, 0 forbidden phrases, 0 em or en dashes and no SERP-competitor links, and word count is within ±10%.

**Iteration counter:** this is revision pass `2` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

### Prior issues (review-v1) resolution

| # | v1 issue | v2 line | Resolved? |
|---|---|---|---|
| 1 | "3-4 weeks" quote misattributed to the 6-refills owner (major) | 140 | Yes. "one heavy user said: '...3-4 weeks...' Another owner in the same thread went through 6 refills in 7 months. Ouch!" Matches facts.md attribution note. |
| 2 | 0.5 mm claim pluralized and unhedged (major) | 150 | Yes. "One owner ... seemed to make them last longer and smudge less". Matches facts.md row (u/oldwindways, single hedged report). Affiliate link unchanged. |
| 3 | "ghosting" unglossed at first use (minor) | 27 | Yes. "(faint traces of old ink)". |
| 4 | "Next Gen pages" unglossed (minor) | 92 | Yes. "(the current generation of the Core, Mini and Flip)", consistent with facts.md (Core, Mini, Flip all Next Gen). |
| 5 | Annual cost claim asserted (minor) | 152 | Yes. Now conditional, no paper-notebook figures. |
| 6 | Two 4-sentence paragraphs (minor) | 106 to 108, 132 to 134 | Yes. Both split. |
| 7 | Missing standalone questions in two sections (minor) | 120, 164 | Yes. Both added, one line each. |

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Pass | Warm, practical, lightly self-deprecating (line 16), "Ouch!" (line 140), "Not sold? Fair enough." (line 177), "no shame in that" (line 189). The jargon gloss at line 27 now honors her "translates niche jargon on first use" note. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | 0 hits for `one could / one should / users are / stakeholders`. |
| Active voice (no "X was scanned" shapes) | Pass | 0 hits for passive markers. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | v2 only adds short lines (120, 164) and splits two paragraphs, which raises variation in How It Holds Up and Who It Is For. Other sections unchanged from v1, where every section scored stddev ≥5.0 (Key takeaways excluded as a mandated bullet block). |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Base list grepped (23 entries); voice.md adds none. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | 0. Also 0 for `&mdash;` and `&#8212;`. Spaced hyphens at lines 88 and 160 are inside verbatim Reddit quotes; leave them. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

Other §1 checks: intro jargon grep (SERP / funnel / snippet / E-E-A-T, plus audience.md's list) returns 0 hits in lines 13 to 20. Product code-literal grep: no product or AI-tools mention anywhere (standing rule honored). Intro-hook over-anchoring: no time-bound event hook, skipped.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | Pass | wordpress-rest: title, date, excerpt, 3 live tags (`note-taking`, `students`, `productivity`), `authors: Olga Pak`, `draft: true`. Unchanged from v1. JSON-LD not required for this adapter. |
| Title in frontmatter matches outline "Final title" exactly | Pass | Exact match. |
| Slug / meta description match outline | Pass | Excerpt matches "Final meta description"; slug `rocketbook-review` matches the directory. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | All 10 outline H2s in order (lines 22 to 175), plus the outline's Closing CTA headed `## So, Should You Get One?` (line 185) per site convention, as accepted in review-v1. H3 `Rocketbook` (line 156) is outline H3 9.1. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | 3 paragraphs plus the mandated italic affiliate disclosure as the last intro paragraph (line 20). 1 intro internal link. |
| Direct answer within the first forty words of the body (outline P1 "Direct answer" clause present in the hook) | Pass | Conditional yes by word 28 (line 14). |
| Key takeaways block present with 3–5 concrete bullets when the outline has `H2 1: Key takeaways` (required intents: transactional, comparison, review, how_to, data_driven, informational_pillar) | Pass | Intent `review`; 5 bullets, each with a number, name or recommendation. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Every section. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 of 5, same order. FAQ is the last block. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest: FAQPage schema is a WP-plugin concern. |
| Outro / CTA paragraph present | Pass | Lines 187 to 189: action anchor "Check the Rocketbook Core's price on Amazon" (B0DP3HLY4J, tagged), then the paper-roundup pointer. No AI-tools mention, per the brief's standing rule. |

Structural deltas vs outline (if any):
- None.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | Lineup table (verify-07/08), $35 Core, $9 3-pack, $12 to $15 derived estimate, 140°F, 10 to 20 seconds, 3-4 weeks, 6 refills / 7 months, 7 and 8 months, 70 pages, 0.5 / 0.7 mm, seven models: all trace to facts.md rows. |
| Every competitor name used carries a "Best suited to" sentence plus a trade-off, not a takedown | Pass | competitors module off. Each alternative gets a "Best for" line; e-ink carries explicit trade-offs (line 181). |
| Methodology H2 present with criteria and disclosure (transactional, comparison and review posts; a review's disclosure only when it names this blog's product; `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Comparison posts) | Pass | "How I Evaluated It" (line 30) precedes "What Works", lists 6 criteria, states it is research-led. Disclosure N/A (this blog's product not named). |
| Every comparison table cell is a fact, not an adjective; when `modules.product` is on, the product appears as an option in the table (N/A for a review without a comparison table of options, or with the module off; a table of the reviewed product's own plans is not one) | Pass | 0 adjective hits in table cells (lines 57 to 65). Product-in-table N/A: the table is the reviewed product's own lineup and the standing rule bars any product mention. |
| The plan's information gain element survived into the draft, in the H2 the outline names | Pass | Seven-model table in H2 4 (lines 57 to 67); dated owner reports in H2 6, 7 and 8. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | competitors module off. Rocketbook prices are dated October 2026 snapshots. |
| Product mentions (count: `0`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | Pass | 0, as the brief requires. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass | 1 intro (line 16), 4 body (lines 84, 100, 173, 183), where the outline placed them. |
| Every internal blog link is root-relative `/<slug>` (no trailing slash, per `blog.trailing_slash: false`), not `https://olgapak.com/...` (absolute = `major`) | Pass | All 5 root-relative, no trailing slash; 0 absolute olgapak.com links. |
| External links (count: `5` citations + `11` affiliate) each point to reputable sources; anchor text = literal claim | Pass | 2 Rocketbook help-center pages, 3 r/rocketbook threads (1ffjpok, 1lzuhyj, pp34py). None appears in serp.md's selected results; the top-10 xj2z3h quotes (lines 84, 160) stay unlinked. All Amazon links use facts.md ASINs with `?tag=op01e-20`. |
| Target keyword appears 2–8 times in body (actual count: `2`) | Pass (floor) | "rocketbook review" at lines 14 and 32, plus title and excerpt. |

Unsourced / suspicious claims:
- None blocking. See §7 for one minor generalisation (line 14 / line 211).

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `3` vs outline `3` in-post slots (featured is frontmatter-level) | Yes. Lines 47, 118, 142 each sit after the first paragraph of their outline-named H2 and are followed by prose, not a heading. No inline featured placeholder. No markdown table within ±20 lines of the remotion chart (line 142). |
| Every data image has its values in nearby text (preceding sentence, same-section table, or caption) | `1` data slot (line 142) | Yes. "3-4 weeks" at line 140; "about 5 pens" / "about 4 pens" at lines 146 to 147, same section. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. 0 hits for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`.

## 5. Word count

- Draft: `2,175` words (lines 13 to 189: intro through CTA; FAQ, table rows, `[IMAGE:]` lines and link URLs excluded, the same basis as review-v1 and the outline). Raw `wc -w` of the same range with everything left in: 2,460.
- Outline target: `~2,260` words
- Delta: `-3.8%` (raw count: +8.8%)
- Band: within ±10% = pass, no issue. Both bases land inside the band.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | 0. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0. |
| En-dashes (`–`) only in numeric ranges | Pass | 0. |
| First-person throughout | Pass | I / you throughout. |
| Active voice | Pass | 0 passive markers. |
| ≥1 rhythm marker in every H2 | Pass | Every H2. |
| ≥1 bullet list per ~300 words | Pass | 7 bullet lists (30 bullets) for ~2,175 words. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | Pass | Now present in Lineup (69), What Works (90), What Does Not Work (112), Holds Up (120), Pens (144), Who It Is For (164), Alternatives (177). How I Evaluated and What It Is are short framing sections; not logged. |
| ≥1 concrete number or named example per major section | Pass | Every section. |
| No em-dash overuse | Pass | 0. |
| Visible sentence-length variation in every section | Pass | See §1. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Intro / FAQ | 14, 211 | `minor` | "plenty of long-term owners quietly stop opening" (line 14) and "Many owners use it less over time" (line 211) generalise from two owner quotes in facts.md (u/jbdaddy12 2024, the 2025 1lzuhyj owner). The outline's direct answer asks for this framing, so it is not a structural miss, but the quantifiers are stronger than the evidence. Does not block approval. | Optional at Gate 2: soften to "some long-term owners" (line 14) and "Some owners use it less over time" (line 211). No other change. |

## 8. What the draft does well

- The two sourcing fixes are precise and should stay exactly as written: line 140 now gives each figure to its own owner and keeps "Ouch!" on the burn rate, and line 150 carries the "seemed to" hedge from the source while still justifying the 0.5 mm affiliate link honestly.
- The seven-model lineup table (lines 57 to 67) remains the information-gain element: every cell traces to verify-07/verify-08, prices are tiers plus one dated "$35 Core" line (line 69), and the "Best suited to" column is something no SERP competitor has. Do not touch it.
- The new standalone questions land naturally rather than as bolt-ons: "So will the pages actually last?" (line 120) is answered immediately by "Owner reports say yes, mostly." (line 122), and "Not sure which side you're on?" (line 164) hands off cleanly to the skip list. Keep both.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A (verdict is `approve`).

## 10. Reviewer notes (free-form)

- facts.md now contains the 0.5 mm owner row and the two-owner attribution note, so the review-v1 editor action is done.
- Carried from review-v1 for Gate 2, not issues: the "$12 to $15" semester estimate is pro-rated at $3 a pen, which a 3-pack buyer may not pay exactly (Olga may prefer "about $3 a pen"); the Kindle Scribe link (B0DB2RG2C5) is the Essentials Bundle listing, not the bare device.
- The care image (line 118) shows a water spray bottle as a "do". The outline's image plan asks for it and it is harmless as an illustration, but facts.md notes the Core ships with no spray bottle, and Rocketbook's documented suggestion for small fixes is a water pen. The image-builder may prefer a water pen in the prompt.
- Line 110 ("You can't add to a note you've already scanned; rescanning creates a new note") rests on one 2022 owner report ("cannot amend notes."), stated as fact. Unchanged from v1 and plausible; worth a glance at Gate 2.
- No first-hand Olga test exists; the draft is honest about that ("research-led, not a lab test", line 32). Gate 2 is where she can add her own notes or a photo.
