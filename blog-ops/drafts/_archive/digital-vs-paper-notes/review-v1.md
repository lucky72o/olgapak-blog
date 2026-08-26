# Review: digital-vs-paper-notes draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/digital-vs-paper-notes/draft-v1.md`, `blog-ops/drafts/digital-vs-paper-notes/outline.md`, `blog-ops/drafts/digital-vs-paper-notes/facts.md`, `blog-ops/drafts/digital-vs-paper-notes/brief.md`, `blog-ops/drafts/digital-vs-paper-notes/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/digital-vs-paper-notes/draft-v1.md` (word count: `2,642` body prose, excluding frontmatter, the `## FAQ` block, and the four `[IMAGE:]` placeholder lines; outline target: `2,610`)
- Outline: `blog-ops/drafts/digital-vs-paper-notes/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is structurally and factually clean, it hits every outline section, the word target within +1.2%, zero forbidden phrases, zero em-dashes, zero unsourced numbers, and it handles this topic's central over-claiming trap better than anything on the SERP. One `major` issue blocks approve: the post is written in mixed en-GB / en-US spelling (13 British forms against 5 American ones), which clashes with the blog's published corpus and, awkwardly, with the product name "Text Summarizer" that appears in the same post as "summarising" and "summarise". Everything else is minor polish.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | ⚠️ pass with note | Warm, first-person, lightly self-deprecating throughout, and the Master's-pivot anecdote (L17) is varied from `cornell-note-taking-method` / `note-taking-methods` as the outline required. Two gaps against the documented voice: (a) `voice.md` §Lexicon calls for "reader-directed rhetorical hooks (Do you ever feel...?)" and four body sections carry no question at all (see §6); (b) the en-GB spelling drift (see §7 issue 1) reads as a different writer than the published corpus. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ | Grep for `\b(one could\|one should\|users are\|stakeholders\|users)\b` returns zero hits. `I` and `you` carry the whole post. |
| Active voice (no "X was scanned" shapes) | ⚠️ pass with note | One passive construction: L44 "some by longhand and some on laptops, and **were tested** afterwards". Idiomatic for describing a study, but it is the one place the standard is broken. Logged `minor`. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ | Per-section sentence-length stddev: intro 8.3, H2 1 13.0, H2 2 14.1, H2 3 12.4, H2 4 7.8, H2 5 13.4, H2 6 11.1, H2 7 10.5, CTA 6.5. Every section is well above the <4 uniformity threshold. Shortest sentences run 1–4 words ("It's slow. That's the feature." L109), longest 65 words. |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ | Grepped against `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` §Forbidden phrases (22 entries) and `blog-ops/profile/voice.md` §Additional forbidden phrases ("None beyond the generic list"). Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | ✅ | `grep -n '—' draft-v1.md` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | ✅ | `grep -n '–' draft-v1.md` returns nothing. Zero en-dashes to validate. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

**Intro jargon check (§1.7).** Intro is L15–L21. Grepped for the SEO/marketing baseline (`SERP`, `funnel`, `featured snippet`, `rich snippet`, `E-E-A-T`) plus this blog's own list in `blog-ops/profile/audience.md` §Niche jargon translation (`SERP`, `DR`, `keyword difficulty`, `Parkinson's Law`, `timeboxing`, `Kanban board`). Zero hits in the intro. The two in-body specialist terms the outline flagged, "verbatim transcription" and "conceptual questions", are both translated on first use at L46 ("Two bits of jargon worth translating there..."), exactly per the outline's writer note and `audience.md` §Reading posture. Pass.

**Product code-literal grep (§1.8, `modules.product: true`).** `blog-ops/profile/product.md` contains no backticked code constants, snake_case identifiers, or status-enum strings. Nothing to grep. N/A.

**Intro-hook over-anchoring (§1.9).** The intro hook is the SERP-consensus observation ("Search 'digital vs paper notes' and just about every result tells you the same thing"), not a time-bound event peg. No price hike, launch, or news anchor. Check skipped as designed. The post carries no year-stamped framing anywhere and will read the same in 12 months.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | ✅ | Validated against `adapters/publish/frontmatter/wordpress.md`. `title` ✅ (52 chars, quoted, matches outline exactly), `date: 2026-08-05` ✅, `excerpt` ✅ (143 chars, ≤160), `tags` ✅ (4 entries: `note-taking`, `students`, `productivity`, `digital tools for productivity`, all live per `blog.md` §Tag taxonomy, no `Focus`/`Planning` drift), `authors: Olga Pak` ✅ (matches `authors.md` byline), `draft: true` ✅. No `cover`/`heroImage` field ✅ (correct, the featured image ships via WP media upload). No JSON-LD requirement at the wordpress-rest adapter level, that sub-check is skipped per §2.1. |
| Title in frontmatter matches outline "Final title" exactly | ✅ | `Digital vs Paper Notes: What the Research Really Says` = byte-identical to outline §Final title. |
| Slug / meta description match outline | ✅ | Slug `digital-vs-paper-notes` carried by the draft directory (the WP frontmatter template defines no `slug` field). Excerpt is byte-identical to outline §Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | ✅ | 1:1 in order, L23 / L38 / L62 / L83 / L105 / L125 / L145 against outline H2 1–7. L167 `## Automate the mundane part` is the outline's §Closing CTA rendered as its own H2, which matches this blog's shipped convention (`cornell-note-taking-method.md:138` `## Try the free tools that draft your summary for you`). Not counted as an addition. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | ⚠️ partial | 4 paragraphs ✅ in the correct shape: hook L15 (2 sentences, target keyword present), expertise L17, internal link L19 (1 sentence), preview L21 (1 sentence). **L17 runs 4 sentences / 72 words**, over the 1–3 cap in `blog-craft.md` §Intro structure. Logged `minor`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | ✅ | H2 1 comparison table + "four real options"; H2 2 3-bullet scoping list + Mueller & Oppenheimer 2014; H2 3 2-bullet list + Cornell's three zones; H2 4 5-bullet list + r/PE_Exam + UTSC; H2 5 3-bullet list + NLM review; H2 6 3-step numbered list + r/productivity; H2 7 5-bullet if-then list. Every section clears `writing-standards.md` §Required rhythm. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ | 5 `###` items (L175, L179, L183, L187, L191) against 5 outline FAQ questions, verbatim string match on all five, same order. FAQ is the last block, nothing follows L193. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per `adapters/publish/frontmatter/wordpress.md` §FAQ, FAQPage JSON-LD is a WP-plugin concern and is not emitted by this adapter or its frontmatter template. Sub-check skipped per §2.1. |
| Outro / CTA paragraph present | ✅ | L167–L171, 2 paragraphs, 91 words (outline target ~100). Links the `blog.md` §Primary CTA target with the action anchor "try my free AI tools" ✅, no feature re-list ✅, no prices ✅, sits immediately before `## FAQ` ✅. |

Structural deltas vs outline (if any):
- None. Every H2, the FAQ set, the CTA placement, the image slots, and the internal/external link plan match `outline.md` exactly. Per-section word counts also track the outline's per-section estimates closely: intro 186/200, H2 1 250 incl. table/250, H2 2 389/420, H2 3 355/330, H2 4 361/350, H2 5 338/330, H2 6 307/330, H2 7 308/300, CTA 91/100.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ | The draft contains almost no numerals by design. The only sourced figure is "2014" + "*Psychological Science*" (L40), both carried by `facts.md` §Named examples. Everything else is either structural ("four real options", "three things", "three zones") or rhetorical time language ("three months ago", "six months", "eighteen months"). **Critically: every `needs_verification` number in `facts.md` was correctly kept out.** No 14.6%/8.8% verbatim split, no 13-vs-40 wpm figures, no 96%/96.3% device-ownership stats, no "n = 21". The wpm gap is rendered qualitatively at L48 ("Most people type considerably faster than they write by hand"), exactly per the plan-reviewer's ruling (b) recorded in outline H2 2. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false` in `config.yaml`. No competitor profiles exist and `facts.md` has no §Competitor facts section. Check does not apply. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same, `modules.competitors: false`. No `Last verified` rows to age-check. Separately confirmed: no `verified`-date stamp leaks into reader-facing prose, and no third-party app or device price appears anywhere (grep `\$[0-9]` returns zero), per `brief.md` §Avoid list. |
| Product mentions (count: `2`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | ✅ | L143 "Text Summarizer" and L171 "free AI tools". Deletion test: L143 sits inside the digitize-then-condense step the section is literally about, remove it and the paragraph loses its point. L171 is the sanctioned CTA. 2 mentions is well under the >8 stuffing threshold and under the 3–5 normal band. Feature-level only, no prices, no adoption or usage numbers (`facts.md` §First-party data claims marks those `hypothetical`, correctly untouched). `brief.md` §Soon-to-ship features lists "None", so the gap-callout check has nothing to test. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | ✅ | 1 in the intro (L19 `/note-taking-methods`, woven into a sentence, not a see-also stack) + 4 distributed into the sections that discuss them: L77 `/cornell-note-taking-method` (H2 3), L111 `/how-to-stop-doomscrolling` (H2 5), L121 `/mind-mapping-note-taking-method` (H2 5), L123 `/best-notebooks-for-note-taking` (H2 5). 5 total = inside the 3–5 rule, matches the outline's link table exactly. Silo direction correct: the intro link points UP to the pillar. First internal link (L19) precedes the first external link (L44) ✅. |
| Every internal blog link is root-relative `/<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://olgapak.com/...` (absolute = `major`) | ✅ | All 5 cross-post links are root-relative with no trailing slash, correct for `blog.trailing_slash: false`. The two `https://olgapak.com/ai-tools` hits (L143, L171) are not cross-post links, `/ai-tools` is the tools page, and `blog-craft.md` §Internal linking explicitly permits absolute for the app/marketing site. Consistency nit only, logged `minor`. |
| External links (count: `4`) each point to reputable sources; anchor text = literal claim | ✅ | All four anchors are the literal claim being cited, per the outline's §External link plan. 4 links = inside the 3–5 rule. |
| Target keyword appears 2–8 times in body (actual count: `3`) | ✅ | Body hits at L15 (intro, as the thing the reader searched), L23 (H2 1 heading), L25. Inside the 2–8 band, comfortably clear of stuffing. Two further occurrences are in frontmatter (`title`, `excerpt`) and are not counted as body. |

**§3.5 forbidden-external-link cross-reference (unconditional, runs regardless of modules).**

Forbidden set from `research/serp.md` §"Selected results analyzed": `universalcpareview.com`, `research.com`, `wondertools.substack.com`, `guts.wisc.edu`, `utwente.nl`, `rkursem.medium.com`, `utsc.utoronto.ca`.

| # | Link rendered in draft | Line | In forbidden set? | Allowlisted? | Verdict |
|---|---|---|---|---|---|
| 1 | `https://journals.sagepub.com/doi/full/10.1177/0956797614524581` | 44 | No | n/a | ✅ Clean. Primary source, routed around `research.com` exactly as `blog-craft.md` §Forbidden external links prescribes. |
| 2 | `https://guts.wisc.edu/2020/11/19/pros-and-cons-of-typed-digitally-handwritten-and-paper-notes/` | 50 | Yes, SERP rank 6 | Yes, `.edu` per `blog-craft.md` §Authoritative-site allowlist | ✅ Intentional allowlist exception, no flag. |
| 3 | `https://www.utsc.utoronto.ca/learningstrategies/digital-vs-paper-notes` | 95 | Yes, SERP rank 9 | Judgment call, see below | ⚠️ Allowed, logged `minor` for config hygiene. |
| 4 | `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4812780/` | 111 | No | Yes, NLM per `blog-craft.md` §Authoritative-site allowlist | ✅ Clean. |
| 5–6 | `https://olgapak.com/ai-tools` | 143, 171 | No, own site | n/a | ✅ Not an external link. |

On link 3: `utsc.utoronto.ca` is a `.ca` domain, so it is not literally covered by the `.gov`/`.edu` line in `blog-craft.md` §Authoritative-site allowlist, and `blog-ops/profile/voice.md` §Additional allowlist domains says "None beyond the generic allowlist in blog-craft.md". The exception rests on two per-post editorial rulings, `facts.md` §Linking rules ("Linkable (authoritative-allowlist, even though they rank): guts.wisc.edu, utsc.utoronto.ca") and `research/serp.md` result 7 ("`.edu`-equivalent institutional domain, authoritative-allowlist"), and it also clears `blog-craft.md`'s own escape heuristic (industry-recognized institution whose primary purpose is student support, not ranking). **Not flagged `critical`**, the exception is documented and deliberate. Flagged `minor` so the editor promotes it to `voice.md` §Additional allowlist domains and future reviews stop relitigating it.

**Citation-discipline spot check (the post's stated top quality risk).** `facts.md` §Nuance warns that `guts.wisc.edu` and `utsc.utoronto.ca` are linkable as institutions but their uncited retention claims are not citable, and §Rejected bars four specific claims. The draft honors all of it: `guts.wisc.edu` is cited only for the three-way modality split (L27) and its own self-disclaimer (L50); `utsc.utoronto.ca` is cited only for the accessibility point (L95), never for "handwriting has been shown to be more effective for memory". The utwente.nl "no universal winner" verdict is neither quoted nor linked. The saccadic-movement Reddit claim is absent. The Reddit quotes are framed as what people say, never as evidence, and L70 says so explicitly.

Unsourced / suspicious claims:
- `draft-v1.md:119`, "The highest-voted comment in an r/PE_Exam thread about going fully digital was a flat one-liner", issue: `the superlative is not in facts.md`. It is true and traceable, `research/reddit.md:76` records "u/DueJudge944 (score 19)... highest-scored comment in the thread", but `facts.md`'s preamble is explicit that facts.md is the only pool citable without further verification. Logged `minor`, not `major`, because the claim is accurate and one hop from a research artifact.
- Nothing else. No numeric claim in the draft lacks a `facts.md` row.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | ✅ Correct, and deliberate. `facts.md` marks every statistic `needs_verification` and instructs the writer to prefer the qualitative direction over a precise number. The writer took the harder path and wrote the post without needing a single unverified figure, so there is nothing left for Stage 3d to resolve. §4.4 source-clause validation has no markers to validate. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | ✅ All four external claims resolved to real primary/allowlist URLs at draft time. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | ✅ All five internal targets are published posts confirmed in `content/blog/`. |
| `[IMAGE:]` | `4` vs outline `4` slots | ✅ Exact match, and each slot's `Type:` matches the outline's §Image placement plan: L42 remotion (after H2 2 + 1 para), L66 ai-prompt (after H2 3 + 1 para), L129 remotion (after H2 6 + 1 para), L149 remotion (after H2 7 + 1 para). All four use the canonical shape `[IMAGE: <desc>. Type: <type>. Suggested filename: <name>.png]`. |

**§4.2a featured-image hygiene:** no placeholder carries `Suggested filename: featured.<ext>` and none reproduces the outline's featured concept (the hand-mid-sentence-beside-tablet-and-laptop scene). The featured image stays frontmatter/media-upload only, per outline §Image placement plan and `custom-instructions.md` §Image style. Pass, no duplicate render.

**§4.2b placement hygiene:** for all four placeholders the immediately following line is body prose, never an `^## ` or `^### ` heading. Every image sits after a heading plus its first paragraph. Pass.

**§4.2c table-redundant chart:** L42 is the only `remotion` placeholder within ±20 lines of a markdown table (the four-options table at L29–L34, 8 lines above). No conflict, the table compares four note-taking media in H2 1 while the card scopes the Mueller & Oppenheimer study in H2 2. Different sections, different data, no redundancy. Pass. The outline anticipated this and deliberately gave H2 1 no image slot.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grepped for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`, and `[AFFILIATE-LINK-PENDING:]` (the last barred by `brief.md` §Avoid list and `custom-instructions.md` §Content policy). Zero hits on all five.

## 5. Word count

- Draft: `2,642` words (body, excluding frontmatter, excluding the `## FAQ` block, excluding the four `[IMAGE:]` placeholder lines; the H2 1 comparison table is counted as body prose)
- Outline target: `2,610` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+1.2%`
- Band: `within ±10% = pass, no issue`

Supporting numbers: raw `wc -w` on the whole file is 3,158. Lines 14–172 (post-frontmatter through the CTA, pre-FAQ) are 2,748 words including image placeholders, 2,642 excluding them. The FAQ block is a separate 352 words, correctly outside the gated total and inside the outline's ~150-word-per-block expectation at 5 questions. Plan target band was 2,400–2,700, and 2,642 sits inside it. No trim or expand note needed.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ | Both lists grepped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | ✅ | Zero. |
| En-dashes (`–`) only in numeric ranges | ✅ | Zero en-dashes present, nothing to validate. |
| First-person throughout | ✅ | No `one`/`users`/`stakeholders` drift anywhere. |
| Active voice | ⚠️ | One passive at L44 ("were tested afterwards"). Everything else is active. Logged `minor`. |
| ≥1 rhythm marker in every H2 | ✅ | All 7 body H2s plus the CTA carry a list, a table, or a named example. See §2. |
| ≥1 bullet list per ~300 words | ⚠️ | 7 list structures (1 table, 5 bullet lists, 1 numbered list) across 2,642 body words = 1 per ~377 words, under the ~1-per-300 floor. Every body H2 has one; the intro (186 words) and the CTA (91 words) have none, which is normal for those blocks. Marginal miss, logged `minor`. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | ⚠️ | No section contains a paragraph that is purely a question. Question marks appear in only 3 of 8 body sections: H2 2 (L48 "So why would the slower method win?", paragraph-opening), H2 3 (L79 and L81, both embedded), and H2 7's heading. H2 1, H2 4, H2 5, H2 6, the intro, and the CTA carry none. `authors.md` does not mandate the shape and this blog's published posts use it rarely (`note-taking-methods.md` and `digital-detox-plan.md` have zero), but `voice.md` §Lexicon does list "Rhetorical opener questions (Do you ever feel...?)" as house style. Logged `minor`, calibrated against the shipped corpus rather than escalated. |
| ≥1 concrete number or named example per major section | ✅ | H2 1 UW-Madison GUTS; H2 2 Mueller & Oppenheimer 2014 + r/notebooks; H2 3 u/fluffyofblobs quote + the Cornell method; H2 4 UTSC + r/PE_Exam; H2 5 the NLM review + r/PE_Exam; H2 6 r/productivity + Obsidian + r/OntarioUniversities; H2 7 r/productivity + the five-condition rule. |
| No em-dash overuse | ✅ | Zero em-dashes in 2,642 words. |
| Visible sentence-length variation in every section | ✅ | Stddev 6.5–14.1 across all nine blocks, every one far above the <4 uniformity tell. Deliberate short beats at L109 ("It's slow. That's the feature."), L115, L165. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Whole post | 25, 77, 97, 109, 141, 157, 158, 177, 185, 193 | `major` | Mixed en-GB / en-US spelling. British forms: `labelled` (L25), `summarising` (L77, L158, L185), `practising` (L97, twice), `summarise` (L109, L177), `favour` (L109), `Colour` (L141), `practise` (L157, L193 twice). American forms in the same document: `digitize` (L34, L131, L159), `digitized` (L143), `Summarizer` (L143). The blog's published corpus is American (`digitize` ×4, `organize`/`organized` ×6, `labeled` ×3, `summarizing`/`summarizer` ×2 in `content/blog/`), and the post promotes a product literally named **Text Summarizer** (L143) while spelling the same verb "summarising" fifteen lines later (L158). | Normalize the entire post to American spelling, matching `content/blog/` and the "Text Summarizer" product name. Specifically: `labelled`→`labeled` (L25); `summarising`→`summarizing` (L77, L158, L185); `practising`→`practicing` (L97, both); `summarise`→`summarize` (L109, L177); `favour`→`favor` (L109); `Colour-coding`→`Color-coding` (L141); `practise`→`practice` (L157, L193 both). Leave `digitize`/`digitized` as they are, they are already correct. Do not change `afterwards`, it is acceptable in both. Change nothing else in those sentences. |
| Intro | 17 | `minor` | Intro paragraph 2 runs 4 sentences / 72 words, over the 1–3-sentence cap in `blog-craft.md` §Intro structure and `writing-standards.md` §Paragraph rules. The outline's P2 draft was a single sentence. | Split L17 into two paragraphs after "...convinced the next setup would be the one that made things stick." The remaining two sentences ("It wasn't the setup. What I eventually worked out is...") become their own paragraph. Do not rewrite the wording, the anecdote is doing its job. |
| H2 2, 3, 4, 5, 6, 7 | 48, 50, 70, 79, 97, 109, 141, 151 | `minor` | Eight further 4-sentence body paragraphs (41–79 words each). `writing-standards.md` §Paragraph rules allows 4-sentence paragraphs "only when the argument genuinely needs them (rare)"; eight occurrences across roughly forty body paragraphs is not rare. | Split the four densest into two paragraphs each: L50 (79 words), L79 (73 words), L141 (60 words), L97 (59 words). Break at the natural pivot in each. Leave L48, L70, L109, and L151 alone, L109's four sentences include two 3-to-5-word rhythm beats and splitting it would kill the cadence. |
| H2 5 | 119 | `minor` | "The highest-voted comment in an r/PE_Exam thread about going fully digital was a flat one-liner". The superlative is not carried in `facts.md`, whose preamble states it is the only pool citable without further verification. It is true and one hop away (`research/reddit.md:76`, "u/DueJudge944 (score 19)... highest-scored comment in the thread"). | Either soften to "One of the most upvoted comments in an r/PE_Exam thread about going fully digital was a flat one-liner:" (no marker needed), or keep the superlative and append `[VERIFY: highest-voted comment in the r/PE_Exam tablet-vs-paper thread \| source: research/reddit.md §thread 4 Top comment patterns]`. Prefer the softening, it costs nothing and keeps the post marker-free. |
| Intro, H2 1, 4, 5, 6 | 15, 23, 83, 105, 125 | `minor` | No standalone-question paragraph anywhere in the post, and five blocks contain no question mark at all. `writing-standards.md` §Humanization floor asks for one per major section and `voice.md` §Lexicon lists "Rhetorical opener questions (Do you ever feel...?)" as house style. Every section does clear §Required rhythm by other means, so this is voice polish, not a structural failure. | Add one short standalone-question paragraph to two of these sections, no more. Suggested spots: in H2 4, before the bullet list at L91, a line like "So what can a screen do that a page simply cannot?"; in H2 5, before L117, "What does paper still do better?" Keep them one sentence each. Do not add questions to every section, five new rhetorical questions would read as a tic. |
| H2 2 | 44 | `minor` | Passive construction, "some by longhand and some on laptops, and were tested afterwards", against `writing-standards.md` §Person and voice. | Reword to active: "University students took notes on real lectures, some by longhand and some on laptops, then sat a test afterwards." |
| H2 6, CTA | 143, 171 | `minor` | `https://olgapak.com/ai-tools` is written absolute. The blog's two most recent posts use root-relative `/ai-tools` (`digital-detox-plan.md:184`, `how-to-plan-your-week.md:132`), while three older ones use the absolute form. Both are permitted by `blog-craft.md` §Internal linking (`/ai-tools` is a marketing page, not a cross-post link), so this is consistency only. | Change both to root-relative: `[Text Summarizer](/ai-tools)` at L143 and `[try my free AI tools](/ai-tools)` at L171. Matches the newer published posts and avoids a redirect hop. |
| H2 4 | 95 | `minor` | The `utsc.utoronto.ca` link is a top-10 SERP URL (rank 9) allowed under a per-post ruling in `facts.md` §Linking rules rather than a config-level allowlist entry. `voice.md` §Additional allowlist domains currently reads "None beyond the generic allowlist in blog-craft.md", so every future review of a `.ca`/institutional citation re-argues this. | **Editor action, not a writer action. Leave the link in the draft.** Add `utsc.utoronto.ca` (and any other institutional non-`.edu` domains this blog cites) to `blog-ops/profile/voice.md` §Additional allowlist domains so §3.5 resolves it automatically next time. |
| Whole post | n/a | `minor` | Bullet-list density is 1 structure per ~377 words (7 lists/tables across 2,642 body words) against the ~1-per-300 humanization floor. | No action required if the two standalone questions above are added, the rhythm gap they close is the same one. Do not manufacture bullet lists to hit the ratio, converting prose to bullets would cost more than it gains here. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The scoping sub-block at L54–L58, the three "here is what the study does not show" bullets, is the entire reason this post beats the SERP. Do not compress it, do not soften it, do not move it below the fold.** `research/serp.md` records that four of seven analyzed competitors assert the retention claim with zero citation, and L57 ("It isn't paper versus screens. Nobody in it was handwriting on a tablet. The comparison was longhand against a keyboard, not pulp against glass") is the load-bearing sentence that H2 3, H2 7, and two FAQ answers all rest on. If any revision touches this block, the post loses its differentiator.
- **The honesty disclaimer at L70 is the brand, executed exactly as `facts.md` demanded.** "Nobody in the original study used a stylus, so this is an inference about the mechanism rather than something anyone measured. It's a reasonable inference. It is not a result." That three-sentence beat is what stops the tablet argument from becoming the same over-claim the post spends H2 2 dismantling, and its short-short cadence is also the draft's best rhythm moment. Preserve verbatim. The same discipline shows at L52, where the r/notebooks skepticism is quoted without repeating the unverified "n = 21" that `facts.md` §Rejected bars.
- **The citation routing is flawless and fragile, so leave it exactly as it is.** `research.com` carries most of the numbers in `facts.md` and is never linked; the Mueller & Oppenheimer claim goes straight to the SAGE DOI (L44). `guts.wisc.edu` is cited only for the modality split and its own self-disclaimer (L27, L50), never for its uncited "high retention" claim. `utsc.utoronto.ca` is cited only for accessibility (L95), never for its uncited memory claim. Every `needs_verification` figure in `facts.md` (14.6%/8.8%, 13 vs 40 wpm, 96%/96.3%) stays out of the post, which is why the draft ships with zero `[VERIFY:]` markers. **Do not add any number back on the revise pass.** Related: H2 7 takes a real position at L161–L163 ("the motion matters more than the material, and the stakes decide the rest") instead of the "it depends on you" ending `research/serp.md` §Avoid pitfalls told us to beat, and L165 ("Your notebook isn't holding you back. Your autopilot might be.") lands it. Keep both.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Normalize the whole post to American spelling, matching the blog's
   published corpus in content/blog/ and the "Text Summarizer" product name.
   Make exactly these substitutions and change nothing else in those
   sentences: `labelled` -> `labeled` (L25); `summarising` -> `summarizing`
   (L77, L158, L185); `practising` -> `practicing` (L97, both occurrences);
   `summarise` -> `summarize` (L109, L177); `favour` -> `favor` (L109);
   `Colour-coding` -> `Color-coding` (L141); `practise` -> `practice` (L157,
   and both occurrences on L193). Leave `digitize` / `digitized` / `Summarizer`
   as they are, they are already correct. Leave `afterwards` alone, it is
   acceptable in American English.

2. Split intro paragraph 2 (L17) into two paragraphs after "...convinced the
   next setup would be the one that made things stick." The remaining two
   sentences become their own paragraph. Do not rewrite the wording.

3. Split these four dense 4-sentence paragraphs into two paragraphs each,
   breaking at the natural pivot: L50, L79, L141, L97. Leave L48, L70, L109,
   and L151 as they are, their four-sentence shape is carrying deliberate
   rhythm.

4. At L119, soften the unsourced superlative. Change "The highest-voted comment
   in an r/PE_Exam thread about going fully digital was a flat one-liner:" to
   "One of the most upvoted comments in an r/PE_Exam thread about going fully
   digital was a flat one-liner:". Keep the quote itself unchanged.

5. Add exactly two short standalone-question paragraphs, one sentence each, and
   no more: in "Where digital notes genuinely win", immediately before the
   bullet list at L91, add "So what can a screen do that a page simply cannot?";
   in "Where paper genuinely wins", immediately before L117, add "What does
   paper still do better?" Do not add rhetorical questions to any other section.

6. Rewrite the passive clause at L44 as active: "University students took notes
   on real lectures, some by longhand and some on laptops, then sat a test
   afterwards." Keep the linked anchor sentence that follows it unchanged.

7. Make the two tools links root-relative to match the newer published posts:
   `[Text Summarizer](/ai-tools)` at L143 and `[try my free AI tools](/ai-tools)`
   at L171.

Do NOT add any number, percentage, sample size, or words-per-minute figure back
into the post. facts.md marks every statistic needs_verification and the draft's
number-free treatment is deliberate and correct.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/digital-vs-paper-notes/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

This is the strongest first draft I have reviewed against this outline set, and the single `major` is a mechanical find-and-replace rather than a thinking problem. If the editor wants to ship faster, issues 1, 4, 6, and 7 are pure substitutions that could be applied without a full writer pass; issues 2, 3, and 5 genuinely want the writer's judgment about where paragraphs break.

Three things for the editor to carry forward:

- **Stage 3d still has one high-value job the writer correctly did not attempt.** Outline §External link plan flags the Mueller & Oppenheimer replication picture (`facts.md` §Rejected) as the post's strongest potential differentiator. The draft is built so that confirming it would slot cleanly into H2 2 after L58 without disturbing anything, and so that failing to confirm it costs nothing. That is good architecture and it should be exercised, not skipped.
- **The `utsc.utoronto.ca` allowlist question will recur.** This blog cites institutional pages regularly and `voice.md` §Additional allowlist domains is currently empty. Adding the two per-post rulings from `facts.md` §Linking rules into `voice.md` turns a judgment call into a config lookup. See §7 issue 8.
- **Spelling locale is undeclared anywhere in the profile.** `config.yaml` says `language: en`, which is what let this drift through. The corpus is unambiguously American; worth one line in `voice.md` or `site-conventions.md` so no future draft repeats the same `major`.

Two smaller observations that did not earn a table row. The H2s are sentence case rather than the title case in `blog-craft.md` §Formatting, but they were locked verbatim by the approved outline and match every published post in `content/blog/`, so this is blog convention overriding the generic standard, not writer drift. And the Reddit quotes are attributed as "one r/notebooks commenter" / "a commenter in r/PE_Exam" without usernames or links, which is a defensible choice (the outline recorded usernames but nothing requires surfacing them, and Reddit is not allowlist-class for external links) and keeps the external-link count at a clean 4.

Autopilot assumptions from `brief.md` §Autopilot assumptions still need a human at Gate 2, particularly the category (`Productivity, EdTech`) and the Text Summarizer product choice. Neither is a draft defect; flagging so the editor does not lose them.
