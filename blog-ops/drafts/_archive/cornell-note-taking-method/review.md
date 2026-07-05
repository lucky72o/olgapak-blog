# Review: cornell-note-taking-method draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `research/reddit.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `standards/blog-craft.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/cornell-note-taking-method/draft-v1.md` (word count: 2,319 body prose; outline target: ~2,520)
- Outline: `blog-ops/drafts/cornell-note-taking-method/outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): Every objective check passes with zero critical and zero major issues: the two title-promised deliverables (a real filled-in worked example in §4 and the printable-PDF + Notion template in §7) are both present, the effectiveness section is honestly mixed with the handwriting-beats-typing claim explicitly hedged, and voice/structure/markers/links/word-count all clear. Only two minor nits remain, neither of which blocks approval.

**Iteration counter:** this is revision pass 1 of 2. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. (Not applicable here, verdict is approve.)

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§voice.md + authors.md) | Pass | Warm, first-person, lightly self-deprecating; intro deploys the career-pivot anecdote (aviation PR → Master's) from voice.md's credibility message and anecdote bank. No corporate/stiff drift. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Grep for third-person drift returned nothing. Consistent `I`/`you`. |
| Active voice (no "X was scanned" shapes) | Pass | Passive-marker grep returned nothing. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Short beats ("One page, three jobs.", "So: helpful structure, not a spell.") sit next to 20+ word sentences in every section. |
| Forbidden phrases count: 0 (list below); any hits = fail | Pass | Grepped both writing-standards.md §Forbidden phrases and voice.md §Additional forbidden phrases (none beyond base). Zero hits, including no `game-changing`/`game-changer` (the Reddit "literal game-changer" quote was correctly not imported). |
| Em-dash count: 1 (grep `—`); any hits = automatic §1 fail | Pass (by design) | The single `—` is inside the `[AFFILIATE_PLACEHOLDER:]` marker on line 126 (stripped in Phase 4). Per the review contract this is intentional and NOT flagged. Body prose has zero em-dashes; the intro uses colons where an em-dash would tempt (lines 14, 24). |
| En-dash context: every `–` hit is inside a numeric range | Pass | Grep for `–` returned nothing. Ranges use hyphens (`5-7 lines`, `two-to-three-sentence`). |

Forbidden phrases found (grep output from writing-standards.md + voice.md lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per wordpress-rest frontmatter template (title, date, excerpt, tags, authors, draft; no cover field) | Pass | All required fields present and filled. No `cover`/`heroImage` field (correct for this adapter, featured image ships via media upload). FAQPage JSON-LD sub-check skipped per skill §2.1 (wordpress-rest carries no adapter-level JSON-LD requirement). |
| Title in frontmatter matches outline "Final title" exactly | Pass | `Cornell Note-Taking Method: The Complete Guide + Template` (57 chars, within 50–60). Exact match. |
| Slug / meta description match outline | Pass | wordpress template defines no slug field (slug = directory `cornell-note-taking-method`, matches outline). `excerpt` matches outline Final meta description verbatim (154 chars, ≤160). |
| H2 order in body matches outline body-sections list exactly | Pass | All 7 outline body H2s present in order (H2 5 uses a comma instead of the outline's em-dash, correct per the character rule). The draft adds a distinct closing-CTA H2 ("Try the free tools that draft your summary for you") immediately before `## FAQ`; this realizes the outline's planned "Closing CTA" block and complies with blog-craft §Conclusion/CTA. Not a delta. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link / preview) | Pass | 4 paragraphs: hook + r/studytips VOC (line 14), expertise anecdote (16), single contextual internal link (18), preview (20). Each 1–2 sentences. |
| Every H2 has at least one rhythm marker | Pass | Bullet/numbered lists in §1–§5,§7; standalone questions ("So why the lopsided columns?", "Where does it struggle?", "See what just happened?", "Paper or screen?"); concrete numbers throughout. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 `###` questions, matching the outline's 5-item FAQ set 1:1 (three-parts, effectiveness, digital, not-good-for, summary-section). |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | wordpress-rest adapter emits no JSON-LD at the adapter level (FAQ schema is a WP-plugin concern per the frontmatter template §FAQ). Skipped per skill §2.1. |
| Outro / CTA paragraph present | Pass | Closing CTA (lines 139–143) sits immediately before `## FAQ`; nothing follows the FAQ. Links `https://olgapak.com/ai-tools` with action anchor "Try my free AI tools" (matches blog.md Primary CTA + hook), not a bare homepage. |

Structural deltas vs outline (if any):
- None that fail. The one addition (a closing-CTA H2) is the planned "Closing CTA" section rendered as a heading, compliant with blog-craft §Conclusion/CTA.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | 1950s/Walter Pauk/How to Study in College (facts.md Quotes+Named examples), notes column ~2× cue + ~2-inch/5-7-line summary (facts.md Statistics), 24-hour Reduce (facts.md Statistics) all trace. The 2024 positive study, the null study, and the paper-vs-digital "no clear difference" each carry an `[EXTERNAL_LINK_NEEDED:]` on-line. The biology worked-example figures (2 ATP, three stages, glycolysis in cytoplasm) are illustrative lecture content inside the hypothetical filled page, not method-evidence claims; all are factually accurate. |
| Competitor mentions framed "best for [segment]", not takedowns | N/A | `modules.competitors` is off (config.yaml). No competitor-product takedowns in the draft; GoodNotes/Notion/etc. are not named. |
| Pricing / feature claims about competitors match `facts.md` (verify dates) | N/A | Competitors module off; no competitor pricing/feature claims. |
| Product mentions each earn their place (modules.product on) | Pass | Own-product footprint = one soft Text Summarizer mention in §7 (line 135) + a plan-sanctioned FAQ tie-in (line 165, outline FAQ Q5) + the closing free-AI-tools CTA (line 143). No product mention in the body §1–§6. This is the intended footprint, not stuffing. |
| Internal links exist in the intro cluster per blog-craft | Pass | 1 intro internal link (focused-note-taking, line 18), ≤2. |
| Every internal blog link is root-relative `{route_prefix}<slug>/` | Pass | route_prefix = `/`. All 4 internal links root-relative (`/focused-note-taking-how-to-guide/`, `/outlining-note-taking-method/`, `/how-to-make-aesthetic-notes-complete-step-by-step-guide/`, `/how-to-write-a-meeting-summary/`). No absolute cross-post links. |
| External links each point to reputable sources; anchor = literal claim | Pass | Only rendered external links are `olgapak.com/ai-tools` (own CTA, ×2). All study/source citations are still `[EXTERNAL_LINK_NEEDED:]` markers (resolved at Stage 3d). No link to any top-10 SERP competitor (§3.5): Rob Lambert/Cultivated, Cornell LSC, GoodNotes, Wikipedia, distance-learning-centre are all quoted/paraphrased WITHOUT links, exactly as required. |
| Target keyword appears 2–8 times (actual: 5) | Pass | "cornell note-taking method" appears 5× in body; keyword in intro sentence 1. |

Unsourced / suspicious claims:
- None. All numeric/factual claims trace to facts.md or carry an `[EXTERNAL_LINK_NEEDED:]` marker.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | N/A (no untraceable stats; all facts sourced or routed to external-link markers) |
| `[EXTERNAL_LINK_NEEDED:]` | 5 | Yes, matches the outline's External link plan (layout PDF; Abualzain 2024; Broe 2013; Saran 2022; paper-vs-digital PMC). By design at this stage. |
| `[INTERNAL_LINK_NEEDED:]` | 0 | N/A (all internal-link slots filled from the outline's inbound/outbound plan) |
| `[IMAGE:]` | 4 vs outline 4 in-post slots | Yes, 4 in-post placeholders match the outline's 4 in-post slots (featured image is frontmatter/media-upload only, correctly no inline placeholder). |

Additional marker hygiene:
- Featured-image hygiene (§4.2a): no inline `[IMAGE:]` uses `featured.<ext>` or the featured hero concept. Pass.
- Placement hygiene (§4.2b): each `[IMAGE:]` sits after its H2 + first body paragraph (lines 40, 56, 72, 96); none immediately precedes a heading. Pass.
- Table-redundant chart (§4.2c): the three `remotion` images are a layout diagram, a process diagram, and a filled-example page (not data charts), and the body contains no markdown tables. Pass.
- `[AFFILIATE_PLACEHOLDER:]` (1, line 126): correct, Amazon Associates links intentionally HELD per brief; the single em-dash inside it is stripped in Phase 4. Not a defect.

Marker-shape problems (lowercase, missing colon, rogue formats):
- None. Grep for off-shape markers (`[Verify:`, `[Image:`, `TODO:`, `[TBD]`, `[EXTERNAL_NEEDED:`) returned nothing. All markers use canonical shapes the Phase 4 grep will catch.

## 5. Word count

- Draft: 2,319 words (body region, lines 13–144: intro through closing CTA, excluding frontmatter and FAQ)
- Outline target: ~2,520 words (roll-up "Total estimate", plan range 2,300–2,600)
- Delta: -8.0%
- Band: within ±10% = pass, no issue logged.
- Watch-item (minor, does not block): ~230–260 of those words are `[EXTERNAL_LINK_NEEDED:]` / `[IMAGE:]` descriptor text that resolves away at Stage 3d, so reader-facing prose lands closer to ~2,060. That still exceeds every top SERP competitor (max 1,391 words) and clears the pillar's competitive-depth bar, but it sits just under the 2,300 plan floor. Logged in §7 as a minor expand watch-note.

## 6. Humanization floor (per writing-standards.md + voice.md)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | Dual-list grep clean. |
| Zero em-dashes (`—`) | Pass (by design) | Only hit is inside the `[AFFILIATE_PLACEHOLDER:]` marker (stripped Phase 4); body prose has none. |
| En-dashes (`–`) only in numeric ranges | Pass | Zero en-dashes present. |
| First-person throughout | Pass | Consistent `I`/`you`. |
| Active voice | Pass | No passive shapes. |
| ≥1 rhythm marker in every H2 | Pass | Bullets, numbered list, standalone questions, concrete numbers across all body sections. |
| ≥1 bullet list per ~300 words | Pass | 19 bullet lines + a 5-item numbered list across ~2,300 words. |
| ≥1 standalone-question paragraph per major section | Pass | "So why the lopsided columns?", "Where does it struggle?", "See what just happened?", "Paper or screen?", "Which brings us to the summary row..." rhythm questions distributed through the sections. |
| ≥1 concrete number or named example per major section | Pass | Pauk/1950s, 2× column, 24 hours, 2 ATP worked example, Abualzain 2024 / Broe 2013, engineering-student Reddit quote. |
| No em-dash overuse | Pass | Zero in prose. |
| Visible sentence-length variation in every section | Pass | Strong burstiness throughout. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Try the free tools that draft your summary for you | 143 | minor | The closing CTA broadens into a mini feature list ("draft your summaries, simplify dense passages, and get more out of every page"), naming a second tool capability (Text Simplifier) not covered in the body. blog-craft §Conclusion/CTA asks for "one crisp value line at most" and no feature re-list. | Tighten the CTA to the single summary-row value that the whole post built toward, e.g. "Try my free AI tools to draft that summary row for you while you keep the thinking." Drop "simplify dense passages". |
| Paper vs digital, plus a free Cornell template | 13–144 | minor | Reader-facing prose (~2,060 words after `[EXTERNAL_LINK_NEEDED:]` and `[IMAGE:]` descriptors resolve at Stage 3d) sits just under the 2,300-word plan floor, though the raw body (2,319) is within ±10% of target and already outweighs every SERP competitor. | Optional: at humanize/Stage 3d, add ~200–300 words of depth to the thinner sections (a second worked-example angle or a brief "how professionals adapt the cue column" note per facts.md's symbol system: circle = action, ? = explore, * = key insight) so the published pillar holds above the floor. Not required for approval. |

## 8. What the draft does well

- **The effectiveness section (§6) is exactly the honest, cited balance the brief and facts.md mandate.** Line 110 states the research is "mixed, not magic and not myth," pairs a positive study against a null one via `[EXTERNAL_LINK_NEEDED:]`, and line 118 hedges the handwriting-beats-typing claim explicitly ("Some research points that way, but it isn't settled, so I won't sell it as fact"). This is the E-E-A-T differentiator over the whole SERP; do not soften it into a superlative on any future pass.
- **The §4 worked example delivers the title's promise with narrated thinking, not just a layout restatement.** The cellular-respiration page shows raw right-column notes, the Reduce-generated left-column cue questions, and a two-sentence summary, then explains why turning notes into a self-quiz matters ("every future review session is now a self-test instead of a reread"). This is the gap no competitor fills; preserve it intact.
- **Link and product discipline is clean.** Every SERP competitor (Cornell LSC, GoodNotes, Wikipedia, Cultivated/Rob Lambert, distance-learning-centre) is quoted or paraphrased WITHOUT a link, citations route to primary sources via `[EXTERNAL_LINK_NEEDED:]`, internal links are root-relative, and the product footprint is a single soft Text Summarizer mention + a plan-sanctioned FAQ tie-in + the closing CTA. Keep this restraint.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A (verdict = approve). The two minor items in §7 are optional polish the editor may apply at Stage 3d / humanize; neither requires a writer revise pass.

## 10. Reviewer notes (free-form)

- The draft resolves the STEM contradiction honestly (line 106): it names the "not good for fast equation-heavy lectures" weakness, then counters with the real engineering-student Reddit quote and the timing trick (Record live, do Reduce/summary after class). This matches the outline's mandate and is a genuine trust-builder, lean into it rather than trimming it.
- Product footprint is at its ceiling: §7 soft mention + FAQ Q5 tie-in + closing CTA are all sanctioned by the approved outline. Do not add any further Text Summarizer / AI-tools touch on revision, that would tip into over-selling.
- The closing CTA rendered as its own H2 is acceptable and compliant, but the editor should confirm it reads as a natural section close rather than a second sales beat after §7's already-present Text Summarizer nudge. The §7-minor fix above (tightening the CTA to the summary-row value) also addresses this.
