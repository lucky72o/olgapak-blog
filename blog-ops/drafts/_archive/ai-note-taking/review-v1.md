# Review: ai-note-taking draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/ai-note-taking/draft-v1.md`, `blog-ops/drafts/ai-note-taking/outline.md`, `blog-ops/drafts/ai-note-taking/facts.md`, `blog-ops/drafts/ai-note-taking/brief.md`, `blog-ops/drafts/ai-note-taking/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/product.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `content/blog/digital-vs-paper-notes.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/ai-note-taking/draft-v1.md` (word count: 2,555 body prose excluding FAQ; outline target: 2,530)
- Outline: `blog-ops/drafts/ai-note-taking/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md`)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is factually disciplined and structurally clean, it clears every hard gate (zero forbidden phrases, zero em-dashes, zero forbidden-SERP external links, zero prices, correct product-mention count, correct marker shapes, +1.0% on word count) and it handles the retention-claim guardrail correctly. One `major` issue blocks approval: H2 4, the section the outline itself flagged as the thin-risk section, gives a reader who arrived shopping a category map with no criteria to choose inside a category, and its weakest row is the lecture/long-recording row where this post's primary audience actually lives. Six `minor` issues (British spellings against a US-spelling corpus, an invented personal-discovery provenance clause, a replication attribution conflation, missing standalone questions, bullet-list density, an uncited "it is free" clause) are worth fixing in the same pass.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | ✅ (with one nit) | Warm, first-person, lightly self-deprecating throughout. "Ouch." at line 149 is a direct hit on voice.md §Lexicon's one-word rhythm beats. "This is the one that got me" (line 149) and "Face-palm"-adjacent self-deprecation are in register. One drift: voice.md §Lexicon lists reader-directed rhetorical hooks as a signature and only H2 2 has one, see §6. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ | Grep for `\b(one could\|one should\|users are\|stakeholders\|one must)\b` returned zero hits. "One person on r/LifeProTips" (line 102) and "One student" (line 79) are counted persons, not the indefinite pronoun. |
| Active voice (no "X was scanned" shapes) | ✅ | Grep for `\bwas (scanned\|checked\|monitored\|built\|tested)\b` returned zero hits. Passives that do appear ("is often ruled out by workplace policy", line 125) are agentless by design and read naturally. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ | Per-section sentence-length stddev, all far above the <4-word fail threshold: H2 1 sd=7.4 (min 4, max 32), H2 2 sd=16.3 (4/67), H2 3 sd=13.5 (2/65), H2 4 sd=14.0 (8/53), H2 5 sd=9.5 (4/32), H2 6 sd=12.9 (2/48), CTA sd=11.0 (9/38). |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ | All 23 base phrases from `writing-standards.md` §Forbidden phrases grepped case-insensitively. `voice.md` §Additional forbidden phrases declares "None beyond the generic list", so no profile extension to check. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | ✅ | `grep -n '—'` returned nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | ✅ | `grep -n '–'` returned nothing, so the check is vacuously satisfied. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

Additional §1 sub-checks:

- **§1.7 Intro jargon check.** Intro spans lines 15–21 (4 paragraphs, between the closing frontmatter `---` and the first `## `). Grepped the `writing-standards.md` SEO/marketing baseline (`share a SERP`, `same SERP`, `funnel`, `top of funnel`, `bottom of funnel`, `featured snippet`, `rich snippet`, `E-E-A-T`) plus this blog's own list from `audience.md` §Niche jargon translation (`SERP`, `DR`, `Domain Rating`, `keyword difficulty`, `Parkinson's Law`, `timeboxing`, `Kanban`). Zero hits. The one piece of jargon the post does use, extractive vs. abstractive summarization, is deliberately held back to H2 1 and translated in plain English there (lines 35–37), which is exactly what `audience.md` §Reading posture asks for. **Pass.**
- **§1.8 Product code-literal grep.** `modules.product` is on. `blog-ops/profile/product.md` defines no backticked code constants, status enums, or table/component names, so there is nothing to grep for. **N/A.**
- **§1.9 Intro-hook over-anchoring.** The intro's hook (line 15) is a position ("the pitch is that you never have to take notes again"), not a time-bound event, price hike, or news peg. Check skipped per the skill's own escape clause. **N/A.**

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | ✅ | Checked against `adapters/publish/frontmatter/wordpress.md`. All six required fields present and filled: `title` (quoted, 54 chars, inside the 50–60 band), `date: 2026-09-09`, `excerpt` (148 chars, ≤160), `tags` (4 entries), `authors: [Olga Pak]` matching the `olga` entry's byline in `authors.md`, `draft: true`. Correctly carries **no** `cover`/`heroImage` field, per that template's §No cover/heroImage field, the featured image ships via `/wp-json/wp/v2/media` as `featured_media`. All 4 tags (`ai`, `ai tools`, `note-taking`, `students`) are real live WP terms from `blog.md` §Tag taxonomy, none invented. |
| Title in frontmatter matches outline "Final title" exactly | ✅ | `AI Note-Taking: A 5-Step Workflow That Actually Sticks`, byte-identical to outline §Final title. |
| Slug / meta description match outline | ✅ | Slug is carried by the draft directory (`ai-note-taking`), the WP frontmatter template defines no slug field. `excerpt` is byte-identical to outline §Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | ✅ | Draft H2s in order (lines 23, 39, 61, 117, 135, 153, 168, 174): "What AI note-taking actually does (and what it doesn't)" / "Why you still take the notes, and AI does the rest" / "My 5-step AI note-taking workflow" / "Which AI note-taking tool fits which job" / "Where AI note-taking still falls down" / "Before you hit record: permission, policy and privacy" / "Start with the mundane half" (the outline's §Closing CTA) / "FAQ". Exact 1:1 match with outline §Body sections H2 1–6 plus the planned CTA and FAQ. All five H3s under H2 3 also match outline H3 3.1–3.5 verbatim. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | ✅ | 4 paragraphs, 1–2 sentences each. P1 hook carries the target keyword. P2 is the expertise statement ("I build my own AI productivity tools on OpenAI"), drawn from `voice.md` §Credibility message. P3 carries exactly 1 internal link (cap is 2). P4 is the preview. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | ✅ | Every H2 clears the `writing-standards.md` §Required rhythm "at least one of" bar. See §6 for the stricter humanization-floor breakdown, where two sub-rows fall short. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ | 4 `###` items under `## FAQ`, matching all 4 outline FAQ questions verbatim, same order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per the skill's §2.1 and the WP frontmatter template's §FAQ (schema markup), FAQPage JSON-LD is a WP-plugin concern and this adapter emits none. Sub-check skipped by rule, not by omission. |
| Outro / CTA paragraph present | ✅ | H2 "Start with the mundane half" (lines 168–172), two short paragraphs, sits immediately before `## FAQ` with nothing after the final FAQ answer. Action anchor `Try my free AI tools` → `https://olgapak.com/ai-tools`, matching `blog.md` §Primary CTA target and hook exactly. No feature re-list, no "in conclusion". |

Structural deltas vs outline (if any):
- None. Title, meta, H2 order, H3 order, FAQ set, intro shape, CTA placement and internal-link distribution all match `outline.md` as approved.
- Absolute cross-post link check: grepped for `https?://(www\.)?olgapak\.com/<blog-slug>` shapes. The only two `olgapak.com` URLs in the draft (lines 93, 172) both point at `/ai-tools`, which is the marketing/tools page, not a blog post. `blog-craft.md` §Internal linking explicitly routes app/marketing-site links to the absolute form. **No issue.**

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ | Every number in the body resolves. "45 minutes to 10" (line 102) → `facts.md` §Statistics row 3, and correctly hedged as "one person's experience rather than a general figure". "more than thirty of these tools" / "three months" (lines 79, 85) → `facts.md` §Quotes, the 30+-tools student, attributed without a link. "the single most-upvoted reply" (line 75) → `facts.md` §Statistics row 4 (the draft wisely states the rank without printing the 970 vote count). "four months" (line 133) → `facts.md` §Quotes, u/Affectionate-Good168. "three or four businesses" (line 164) → `facts.md` §Named examples, the multi-vendor pipeline, and correctly framed with "commonly"/"frequently"/"can" per that row's `needs_verification` instruction. "at least a dozen" (line 151) is inside a verbatim quote. **Zero unsourced numeric claims.** |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors` is **off** for this blog (`config.yaml`), so there is no `facts.md` §Competitor facts table and no profile-backed competitor set to check. See the substitute audit below. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same reason. No `Last verified` freshness check applies. Separately: **zero prices appear anywhere in the draft.** Grep for `\$[0-9]`, `/month`, `per month`, `per seat`, `free up to`, and `N credits/uses` returned nothing. The rejected tl;dv price from `facts.md` §Rejected did not leak in. |
| Product mentions (count: `2`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | ✅ | Exactly the two the outline authorized: one in the body at H3 3.3 (line 93, the Text Summarizer, gated behind a real precondition, "when the source is already text rather than audio"), and one in the closing CTA (line 172). Deletion test: line 93's sentence loses its whole point without the tool, it exists to answer "what do I do when there is no audio to transcribe". No extras, no stuffing. No usage, adoption, or performance figure for Olga's tools appears anywhere, per `product.md` §First-party data availability (`hypothetical`) and `brief.md`. "free" is used as a durable framing, which `blog-craft.md` §Own-product pricing claims explicitly permits. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | ✅ | 5 total, inside the 3–5 band. Distribution matches the outline's plan exactly: `/digital-vs-paper-notes` (intro), `/cornell-note-taking-method` (H2 2), `/how-to-take-notes-on-ipad` (H3 3.1), `/note-taking-methods` (H3 3.4, the silo-UP link to the pillar), `/how-to-plan-your-week` (H3 3.5). Only 1 in the intro against a cap of 2, no "see also" stack. The first internal link (line 19) precedes the first external link (line 45). |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://yourblog.com{route_prefix}...` (absolute = `major`) | ✅ | All 5 are root-relative with **no** trailing slash, matching `blog.route_prefix: /` and `blog.trailing_slash: false`. |
| External links (count: `4` rendered + `2` markers) each point to reputable sources; anchor text = literal claim | ✅ | See the per-link forbidden-SERP audit below. Anchor texts are literal claims in all four cases. |
| Target keyword appears 2–8 times in body (actual count: `7`) | ✅ | Exact-phrase "AI note-taking" in the body prose at lines 15, 21, 23, 61, 117, 135, 151. Comfortably inside the 2–8 band, no stuffing. (Frontmatter and FAQ occurrences excluded from the count.) |

**§3.5 Forbidden external links to SERP competitors, per-link verdict.** This check is never module-gated and was run in full.

Forbidden set, from `research/serp.md` §Selected results analyzed plus the nine top-10 domains named in `facts.md` §Link-safety note: `zoom.com`, `metaview.ai`, `pcmag.com`, `medium.com`, `microsoft.com`, `plaud.ai`, `notta.ai`, `notegpt.io`, `otter.ai`. Allowlist: `blog-craft.md` §Authoritative-site allowlist; `voice.md` §Additional allowlist domains declares "None beyond the generic allowlist", so no profile extension.

| # | Link target | Anchor | Verdict |
|---|---|---|---|
| 1 | `https://journals.sagepub.com/doi/full/10.1177/0956797614524581` (line 45) | "laptop note-takers recorded more of the lecture word for word and did worse on conceptual questions" | ✅ Not in forbidden set. Academic publisher, primary source, matches `facts.md` §Statistics row 1 and the outline's External link plan row 1. Anchor = literal claim. |
| 2 | `https://link.springer.com/article/10.1007/s10648-019-09468-2` (line 47) | "performance did not consistently differ between any of the groups" | ✅ Not in forbidden set. Academic publisher, primary source, matches `facts.md` §Statistics row 2 and outline plan row 2. Anchor = literal claim. |
| 3 | `https://lsc.cornell.edu/notes.html` (line 59) | "a cue-and-recite loop" | ✅ Not in forbidden set. `.edu`, allowlist-class by rule. Matches outline plan row 3. |
| 4 | `https://support.google.com/notebooklm` (line 131) | "answers using only the sources you upload" | ✅ Not in forbidden set. `support.google.com` is named explicitly in the allowlist's §Official platform docs. Matches outline plan row 4. Its `facts.md` row is `needs_verification`, and Stage 3d confirming the wording before this link ships is already the outline's plan, not a review defect. See minor issue 7. |

Grep of the draft for all nine forbidden domains, in **any** position (link target, bare URL, or reference), returned **zero hits**. The two facts sourced to microsoft.com (the five-step model at line 33 and the extractive/abstractive translation at lines 35–37) and the fact sourced to medium.com (the chaptered stats lecture at line 79) are attributed in prose without links, exactly as the outline instructed. Reddit and X provenance is likewise named in prose only (`r/askanything`, `r/LifeProTips`, `r/AI_Agents`, `@wojakcodes on X`) with **no** reddit.com or x.com URLs rendered anywhere. **Zero critical link findings.**

**§3.6 / §3.7 Competitor freshness and `[VERIFY:]` on competitor pricing/features:** N/A, `modules.competitors` is off. Substitute audit, per the outline's carried constraint that every capability claim about a named third-party tool must be attributed opinion or carry a sourced `[VERIFY:]`: the draft names exactly **one** third-party tool, NotebookLM (line 131), and its two capability claims (source-only answering, click-through citations) both trace to `facts.md` §Named examples and are anchored to Google's own help docs. Every other capability statement in H2 4's table is written at the **category** level ("the AI note-taker built into your meeting app", "a dedicated hardware recorder you wear or carry"), never as a claim about a named product, which is the correct way to satisfy this constraint with `modules.competitors` off. Microsoft is named at line 33 as the **author of a guide**, not as a tool being assessed. No "most accurate" claim appears anywhere, and `facts.md` §Rejected's banned items (a transcription-accuracy percentage, the tl;dv price, the Metaview case study, the one-party/all-party consent specifics) are all absent.

**§3.8 Invented-number check.** Grepped for audience-size ranges (`\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`, `\d+K-\d+K`), "N+" adoption claims, and migration/volume ranges (`moving \d+ to \d+`, `cataloging \d+\+`). Zero hits. No fake precision.

**§3.9 Own-product pricing claims.** Zero `\$\d` hits and zero usage-cap phrasings anywhere in the draft. **Pass.**

**§3.10 Soon-to-ship feature gap check.** `brief.md` §Soon-to-ship features records "(None known.)", so there is no feature to check for gap framing. **N/A.**

**Retention-claim consistency audit vs `content/blog/digital-vs-paper-notes.md`** (the correction this blog already published, at lines 40–64 of that file):

- The draft never claims handwriting beats typing, and never claims handwriting improves memory. Grepped for both shapes.
- Line 45 cites the original lecture-note finding with the same anchor text and the same sagepub URL the published post uses at its line 44. Consistent.
- Line 47 follows it **immediately, in the very next paragraph**, with the replication, using the same anchor text and the same Springer URL the published post uses at its line 62. The mandatory guardrail is satisfied.
- Line 45 actively names the flattening ("That result travelled fast and got flattened into 'write it by hand'"), mirroring the published post's "it got flattened into 'handwriting improves memory'".
- Line 49 states the mechanism claim the blog is allowed to make ("the pen was never the active ingredient... That choosing and rephrasing is where the understanding happens"), matching the published post's "The mechanism it points to is what you do while you take notes, not the keyboard itself."
- The FAQ answer at line 182 repeats the honest version rather than reverting to the folk version.
- **No contradiction with the published correction. Zero critical findings on this axis.** One precision nit is logged as minor issue 4.

Unsourced / suspicious claims:
- None. Every numeric and factual claim in the body traces to a `facts.md` row, sits inside an attributed quote, or is carried by one of the two `[EXTERNAL_LINK_NEEDED:]` markers.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | ✅ N/A. Zero markers means §4.4's `\| source:` clause validation has nothing to validate, and it means the writer found a `facts.md` row (or an attributed quote) for every claim it made rather than deferring work to Phase 4. |
| `[EXTERNAL_LINK_NEEDED:]` | `2` | ✅ Expected count, exactly the two the outline planned. Line 139 (speech-recognition accuracy varies with accent/crosstalk/audio conditions, in H2 5) and line 160 (recording-consent rules differ by jurisdiction, in H2 6). Both carry the required `<claim + suggested source type>` payload. Both are placed exactly where the outline earmarked them. Critically, both surrounding passages **still read correctly if Stage 3d finds nothing**: line 139 immediately follows with "The practical answer doesn't need a study behind it", and line 160 follows with "This is not something to guess at, and it isn't something I can answer for you". That is the right defensive construction and it matches the outline's own contingency. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | ✅ Expected. All five internal links resolved to real published slugs. |
| `[IMAGE:]` | `4` vs outline `4` slots | ✅ Exact match. |

**§4.2 Image slot diff.** Outline §Image placement plan specifies 1 featured (frontmatter cover, `ai-prompt`) + 4 in-post. The draft carries exactly 4 in-post `[IMAGE:]` placeholders, 1:1 against the outline's four in-post slots, in the same order, with the same types:

| Draft line | After | Concept | Type | Matches outline slot |
|---|---|---|---|---|
| 43 | H2 2 + 1 para | Two-column "AI handles / you handle" | `remotion` | ✅ slot 1 |
| 65 | H2 3 + 1 para | Linear five-step process diagram | `remotion` | ✅ slot 2 |
| 121 | H2 4 + 1 para | Same person in three capture situations | `ai-prompt` | ✅ slot 3 |
| 157 | H2 6 + 1 para | Phone face-up between two people, asking before recording | `ai-prompt` | ✅ slot 4 |

**§4.2a Featured-image hygiene.** ✅ **Pass, and this is worth stating explicitly.** No `[IMAGE:]` placeholder carries `Suggested filename: featured.<ext>`, and none of the four concepts matches the outline's featured concept ("the split between the mundane half of note-taking that AI handles and the thinking half that stays yours"). The nearest neighbour is slot 1, the two-column AI-handles/you-handle diagram, but the featured slot is `ai-prompt` per `images.featured_default` and `custom-instructions.md` §Image style while slot 1 is `remotion`, and they are different renderings for different purposes. The featured image correctly ships via media upload with no inline embed and no frontmatter cover field, so the post will not render the same asset twice.

**§4.2b Image-placement hygiene.** ✅ Pass on all four. No placeholder is immediately followed by an `^## ` or `^### ` heading. Each sits after its H2 and after that section's first body paragraph, exactly as the outline planned. The nearest case is line 65, which is followed by one more prose paragraph (line 67) before H3 3.1 at line 69, so it is correctly placed.

**§4.2c Table-redundant chart.** ✅ Pass. The two `remotion` placeholders are at lines 43 and 65; the draft's only markdown table starts at line 123, which is 58 and 80 lines away respectively, far outside the ±20-line window. The one placeholder that does sit adjacent to the table (line 121) is `ai-prompt`, a scene rather than a chart, so 2c does not engage. The outline anticipated this and said so.

**§4.3 Off-shape markers.** Grepped for `\[Verify:` (lowercase v), `\[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`, `[IMAGE ` and `[VERIFY ` (missing colon). **Zero hits.** Every marker in the draft is in canonical Phase-4-greppable form.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None.

## 5. Word count

- Draft: `2,555` words (body prose, from the intro through the end of the closing CTA, excluding frontmatter and excluding the `## FAQ` block; the four `[IMAGE:]` description lines are excluded as production specs rather than prose, they account for 153 of the 2,708 raw words in that range)
- Outline target: `2,530` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+1.0%`
- Band: `within ±10% = pass, no issue`

Per-section breakdown against the outline's per-section estimates, for reference only, no issue is logged from any of these:

| Section | Outline estimate | Actual (prose, image lines excluded) | Delta |
|---|---|---|---|
| Intro | 200 | ~170 | -15% |
| H2 1 | 300 | 251 | -16% |
| H2 2 | 320 | ~330 | +3% |
| H2 3 | 650 | ~745 | +15% |
| H2 4 | 380 | ~375 | -1% |
| H2 5 | 330 | 307 | -7% |
| H2 6 | 250 | ~279 | +12% |
| CTA | 100 | 81 | -19% |

H2 3 running long and H2 1 running short is the right trade for a how-to: the workflow is the section the post exists for. Note for §7 issue 1: H2 4 hits its word target almost exactly, so its problem is **composition, not length**, only 9 prose sentences carry a 375-word section because the table absorbs the rest.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ | Both lists grepped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | ✅ | Zero. |
| En-dashes (`–`) only in numeric ranges | ✅ | Zero en-dashes present. |
| First-person throughout | ✅ | No third-person drift. |
| Active voice | ✅ | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | ✅ | All seven H2s clear the "at least one of" bar (H2 4 via its table plus a named example, every other H2 via a bullet list). |
| ≥1 bullet list per ~300 words | ⚠️ | 6 bullet lists across 2,555 body words = 1 per ~426 words, against a floor of ~8.5 lists. H2 4 is the only body H2 with no bullet list at all (the table substitutes, which is why this is `minor` rather than `major`). Logged as issue 6; the issue-1 fix resolves it. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | ⚠️ | The voice does call for it: `voice.md` §Lexicon lists "Reader-directed rhetorical hooks ('Do you ever feel...?')" as a signature move. Only H2 2 has one (line 41, "So if the software can capture, transcribe and summarize, what is actually left for you to do?"). H2 1, H2 3, H2 4 and H2 6 have none. H2 5's three questions are bullet items inside a checklist, not standalone paragraphs. Logged as issue 5. |
| ≥1 concrete number or named example per major section | ✅ | H2 1: the five-step model, Microsoft named. H2 2: two cited studies. H2 3: 30+ tools, three months, 45→10 minutes, ten minutes. H2 4: NotebookLM, four months with a wearable. H2 5: "at least a dozen", @wojakcodes. H2 6: three or four businesses, four checks. |
| No em-dash overuse | ✅ | Zero em-dashes, so nothing to overuse. |
| Visible sentence-length variation in every section | ✅ | Per-section stddev 7.4 to 16.3, all far above the <4 fail threshold. See §1. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Which AI note-taking tool fits which job | 117–133 | `major` | The section the outline flagged as the thin-risk section reads thin for a shopper, and the SERP is commercial-investigation dominant (`research/serp.md` §Search intent: 5 of 9 top results are product pages). It carries only 9 prose sentences around a 5-row table. The table's middle column tells a reader which **category** to buy from but gives them no criteria to choose **within** a category, and the section has no "how to choose" beat. Three rows are actionable because the reader already owns the thing (their meeting app, their notes app) and one row gets NotebookLM by name, but the "Lectures and long recordings" row leaves a reader at "a recorder plus transcription that chapters the audio by topic" with nothing to evaluate against, and the hardware row is caveat-only. That row is this post's **primary audience** per `brief.md` §Audience emphasis, so the section is weakest exactly where its core reader stands. A shopper bounces to a roundup here. | Add depth per category, NOT a ranked list. Two additions, both inside this H2: (a) after the table, add a short "what to check before you commit" bullet list of 4–5 category-agnostic shopping criteria a reader can apply to any tool in any row, drawn from what the post already establishes, e.g. does it capture audio in a physical room or only from a call, does it chapter or timestamp a long recording so you can navigate it, can you export the transcript and take it elsewhere, does it show you the source passage behind a summary line, and where does the audio go (which ties forward to H2 6); (b) expand the "Lectures and long recordings" case into one short prose paragraph covering what separates a good one from a bad one for a 75-minute session, using the chaptered-stats-lecture illustration from H3 3.2 as the concrete anchor. **Do NOT add tool names beyond NotebookLM, do NOT rank, score, or declare a "best overall", and do NOT add a numbered list of products.** The scored roundup is the separately queued `ai-study-tools` post (`brief.md` §Other notes) and this post must not cannibalise it. Keep the existing "I am not going to rank these" framing at line 119 intact, this fix makes that refusal more credible, not less. |
| Why you still take the notes / FAQ | 29, 45, 47, 49, 95, 182 | `minor` | Six British spellings sit in a corpus that is consistently US-spelled: `judgement` (29), `travelled` (45), `favouring` (47 and 182), `behaviour` (49), `recognise` (95). The published `content/blog/` corpus runs behavior 6/0, organize 4/0, summarize 2/0, favor 2/0, recognize 1/0, judgment 1/0 against their British forms, and the blog is US-facing (US-state recording law, a US Amazon Associates tag). Line 95 is internally inconsistent inside a single heading: "Step 4, **Organize**: give the output a shape you'll **recognise** later". | Change to US spellings: `judgement` → `judgment`, `travelled` → `traveled`, `favouring` → `favoring` (both occurrences), `behaviour` → `behavior`, `recognise` → `recognize`. Note for the editor: line 95 is an H3 that matches `outline.md` H3 3.4 verbatim, so this one is a spelling normalization rather than a structural change; make it anyway, since "Organize" and "recognise" cannot both be right in the same heading. |
| My 5-step AI note-taking workflow (H3 3.1) | 75 | `minor` | "on the r/LifeProTips thread where I first saw this workflow described" asserts a personal-discovery fact that no input file supports. `facts.md` records the thread as research provenance, not as something Olga encountered. `brief.md` §Founder anecdote is explicit: "do not invent a new anecdote." The clause also adds nothing, the sentence's actual job is to carry the most-upvoted counterpoint. | Replace "on the r/LifeProTips thread where I first saw this workflow described" with "on the r/LifeProTips thread about this workflow". Keep the rest of the sentence, including the most-upvoted-reply attribution, exactly as it is. |
| Why you still take the notes, and AI does the rest | 47 | `minor` | Precision slip in an otherwise exemplary passage. `facts.md` §Statistics row 2 records two distinct findings: the **2019 re-run** found performance did not consistently differ between the groups, and the **meta-analysis of the direct replications** found small effects favoring longhand that were not statistically significant. The draft merges them into one clause attributed to "the direct replications", which is not quite what either source says. The year is also dropped, though `facts.md` and the published `digital-vs-paper-notes` post both date it to 2019, and the date is what makes the correction feel current rather than vague. | Rewrite line 47 as two attributions instead of one: "Then researchers re-ran it in 2019. [performance did not consistently differ between any of the groups](https://link.springer.com/article/10.1007/s10648-019-09468-2), including a group that took no notes at all, and a meta-analysis of the direct replications found the small effects favoring longhand were not statistically significant." Keep the link, the anchor text and the paragraph's position immediately after line 45 unchanged. |
| H2 1, H2 3, H2 4, H2 6 | 23, 61, 117, 153 | `minor` | Humanization floor: no standalone-question paragraph in four of six body sections. `voice.md` §Lexicon names reader-directed rhetorical hooks as an Olga signature and H2 2's "So if the software can capture, transcribe and summarize, what is actually left for you to do?" (line 41) shows how well it works here. Its absence elsewhere flattens the texture. | Add one short standalone-question paragraph to at least H2 1 and H2 4, in the same register as line 41. Suggested placements: in H2 1, just before the extractive/abstractive explanation at line 35 (something on the order of "So why does an AI summary sometimes contain a sentence nobody said?"); in H2 4, immediately after the table and before the new criteria list from issue 1. Do not add one to every section, four rhetorical questions in a row is its own tell. |
| Which AI note-taking tool fits which job | 117–133 | `minor` | Bullet-list density is 1 list per ~426 words against the `writing-standards.md` §Humanization floor target of 1 per ~300. H2 4 is the only body H2 with no bullet list. | No separate action needed: the criteria bullet list added by issue 1 lands in exactly the section that lacks one and brings the ratio to 1 per ~365 words. Verify after applying issue 1 rather than adding filler lists elsewhere. |
| Which AI note-taking tool fits which job | 131 | `minor` | "The one tool I'll name is NotebookLM, because **it is free** and because..." puts a pricing/tier claim about a third-party tool outside the cited anchor. The linked anchor covers only "answers using only the sources you upload". `facts.md` §Named examples does describe it as free, but that row is marked `needs_verification` pending Stage 3d, and free tiers on third-party AI tools change without notice. The rest of the paragraph is well handled, including the honest "It is not a live meeting recorder, though" limitation. | Attribute the free claim rather than asserting it flatly: change "because it is free and because what it does is unusually easy to describe" to "because Google offers it free and because what it does is unusually easy to describe". Leave the link, the anchor text and the rest of the paragraph untouched. Flag for Stage 3d: confirm both the free tier and the exact capability wording on `support.google.com/notebooklm` before this link ships, per the outline's External link plan note. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **H2 2's retention passage (lines 45–53) is the best thing in the draft and must not be touched beyond the one-clause precision fix in issue 4.** It cites the original lecture-note finding, follows it in the very next paragraph with the replication, names the flattening out loud ("That result travelled fast and got flattened into 'write it by hand'"), and then lands the only claim this blog is allowed to make: "Which tells you the pen was never the active ingredient... That choosing and rephrasing is where the understanding happens, and it is precisely the part a finished AI summary removes." That last sentence is the whole post's thesis earned from evidence, and it keeps faith with the correction already published in `digital-vs-paper-notes`. Do not soften it, do not shorten it, and do not let a revision reintroduce "handwriting helps you remember".
- **The two `[EXTERNAL_LINK_NEEDED:]` passages are constructed so the post survives Stage 3d finding nothing.** Line 139 follows its marker with "The practical answer doesn't need a study behind it. Before you commit to anything, trial it on a real recording of your own"; line 160 follows its marker with "This is not something to guess at, and it isn't something I can answer for you." Both claims stand qualitatively if no citation lands, which is exactly what the outline's open question asked for and what a reviewer normally has to demand. Keep both markers and keep the sentences that follow them.
- **Sourcing discipline under a hostile link constraint.** Nine forbidden domains, several of them carrying facts the post genuinely needed, and the draft renders zero of them: the five-step model and the extractive/abstractive translation are attributed to "Microsoft's own guide to the category" in prose (line 33), the chaptered stats lecture becomes "one student who tested more than thirty of these tools" (line 79), and Reddit and X provenance is named without a single URL. Zero `[VERIFY:]` markers and zero unsourced numbers because the writer found a real `facts.md` row for every claim instead of deferring the work to Phase 4. Preserve every one of these prose attributions on revision, they are not padding.

Honorable mention, not to be lost: "a folder of summaries you never open is worse than three scrappy lines you wrote yourself, because it *feels* like preparation. Ouch." (line 149) is the single most on-voice line in the post per `voice.md` §Lexicon.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. H2 4 "Which AI note-taking tool fits which job" (lines 117-133) reads thin
   for a reader who arrived shopping: 9 prose sentences around a 5-row table,
   with no criteria for choosing WITHIN a category. Add depth per category,
   NOT a ranked list.
   (a) After the table, add a short "what to check before you commit" bullet
       list of 4-5 category-agnostic criteria a reader can apply to any tool in
       any row, drawn from what the post already establishes: does it capture
       audio in a physical room or only from a call; does it chapter or
       timestamp a long recording so you can navigate it; can you export the
       transcript and take it elsewhere; does it show you the source passage
       behind a summary line; where does the audio actually go (tie forward to
       H2 6).
   (b) Expand the "Lectures and long recordings" case into one short prose
       paragraph on what separates a good one from a bad one for a 75-minute
       session, anchored on the chaptered-stats-lecture illustration already
       used in H3 3.2.
   HARD CONSTRAINTS: do NOT add any tool name beyond NotebookLM. Do NOT rank,
   score, or declare a "best overall". Do NOT add a numbered product list. The
   scored roundup is the separately queued `ai-study-tools` post and this post
   must not cannibalise it. Keep the "I am not going to rank these" framing at
   line 119 exactly as written.

2. Normalize six British spellings to US spellings, matching the published
   content/blog corpus: line 29 `judgement` -> `judgment`; line 45 `travelled`
   -> `traveled`; line 47 `favouring` -> `favoring`; line 49 `behaviour` ->
   `behavior`; line 95 `recognise` -> `recognize`; line 182 `favouring` ->
   `favoring`. Line 95 is an H3 heading and this is a spelling normalization
   only, not a structural change ("Organize" and "recognise" cannot both be
   right in the same heading).

3. Line 75: replace "on the r/LifeProTips thread where I first saw this
   workflow described" with "on the r/LifeProTips thread about this workflow".
   That clause asserts a personal-discovery fact no input file supports and
   brief.md says not to invent anecdotes. Keep the rest of the sentence,
   including the most-upvoted-reply attribution, unchanged.

4. Line 47: split the merged replication attribution into the two findings
   facts.md actually records, and restore the year. Rewrite as:
   "Then researchers re-ran it in 2019. [performance did not consistently
   differ between any of the groups](https://link.springer.com/article/10.1007/s10648-019-09468-2),
   including a group that took no notes at all, and a meta-analysis of the
   direct replications found the small effects favoring longhand were not
   statistically significant."
   Keep the link, the anchor text, and the paragraph's position immediately
   after line 45 unchanged. Do NOT reintroduce any claim that handwriting
   beats typing or improves memory.

5. Add one short standalone-question paragraph to H2 1 and to H2 4, in the same
   register as line 41. Suggested: in H2 1, just before the
   extractive/abstractive explanation at line 35, something like "So why does an
   AI summary sometimes contain a sentence nobody said?"; in H2 4, immediately
   after the table and before the new criteria list from issue 1. Two only, do
   not add one to every section.

6. Line 131: change "because it is free and because what it does is unusually
   easy to describe" to "because Google offers it free and because what it does
   is unusually easy to describe". Leave the link, the anchor text, and the rest
   of the paragraph untouched.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/ai-note-taking/draft-v2.md. Do not overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- **Verdict arithmetic.** No forcing condition from Step 4's `request_revisions` branch fired: zero §2 structural deltas, zero forbidden-phrase hits, zero unsourced numeric claims, word count at +1.0% (well inside ±10%), zero forbidden-SERP external links, and no `[VERIFY:]` markers to fail the `| source:` clause check. `approve` is blocked solely by the single `major` in §7. If the editor disagreed with that call, the draft would be approvable as-is, so the H2 4 judgement is the whole decision and I want it visible rather than buried in a table. I hold the call: the SERP for this keyword is commercial-investigation dominant and the section's own primary-audience row is its weakest, which is a real reader-facing failure and not a stylistic preference.
- **External-link budget after Stage 3d.** The draft renders 4 external links against `blog-craft.md` §External linking's 3–5 band. If Stage 3d resolves **both** `[EXTERNAL_LINK_NEEDED:]` markers, the post lands at 6, one over the band. That is not a defect in this draft and no issue is logged for it, but the editor should decide at Stage 3d which of the two matters more, or accept 6 deliberately. The jurisdiction link (line 160) is the more valuable of the two given the post gives no legal advice and would benefit from pointing somewhere official; the accuracy link (line 139) is the one the outline already pre-authorized to be dropped in favor of a qualitative claim.
- **Explicitly not raised as a length issue,** per the editor's instruction and confirmed independently: body prose measures 2,555 against the outline roll-up of 2,530, a +1.0% delta. §5 passes cleanly and no trim/expand note is logged. Note that issue 1's fix will add roughly 100–140 words, pushing the post to about 2,690, which is +6% and still comfortably inside the band and inside the plan's 2,300–2,700 target. The writer does not need to trim elsewhere to compensate.
- **Autopilot posture.** Judged entirely on the artifact's merits. No issue in §7 asks for human intake or for a decision `brief.md` §Autopilot assumptions already recorded. The seven assumptions there (author, category, intent, research modules, product feature, no affiliate links, angle) are all faithfully reflected in the draft.
- **Watch on revision:** H2 4 is the section a revising writer is most likely to over-correct, because "make it deeper for shoppers" and "do not build a roundup" pull against each other. If draft-v2 comes back with a second named tool, a numbered list, or any superlative ("best for students", "the most accurate"), that is a `critical` cannibalisation finding at iteration 2, not a `minor` one. The criteria list in issue 1(a) is deliberately category-agnostic for exactly this reason: it adds shopping utility without adding a single product name.
- **Small thing, no action needed:** "source-grounded question answering" appears in the H2 4 table before it is glossed. It self-translates via "over files you upload" in the same cell and is fully explained one paragraph later at line 131, so it clears `audience.md` §Reading posture. Mentioning it only so a revision does not accidentally remove the gloss while expanding the section.
