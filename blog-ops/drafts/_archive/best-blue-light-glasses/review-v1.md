# Review: best-blue-light-glasses draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/best-blue-light-glasses/draft-v1.md`, `blog-ops/drafts/best-blue-light-glasses/outline.md`, `blog-ops/drafts/best-blue-light-glasses/facts.md`, `blog-ops/drafts/best-blue-light-glasses/brief.md`, `blog-ops/drafts/best-blue-light-glasses/plan.md`, `blog-ops/drafts/best-blue-light-glasses/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/best-blue-light-glasses/draft-v1.md` (word count: 3,183 body prose net of marker text, excluding frontmatter and FAQ; outline target: ~3,210)
- Outline: `blog-ops/drafts/best-blue-light-glasses/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1-3 sentences): Structure, links, markers, word count, voice and the entire evidence gate are clean, and the medical-safety framing is mostly exemplary in both directions. But four `major` sourcing problems remain: the Swanwick entry reintroduces a soft efficacy claim the post spent 450 words dismantling, the first FAQ answer calls the lenses "harmless" against a facts.md row recording Cochrane adverse events, an X quote misstates its own source metric and carries no attribution, and a habits list is attributed wholesale to the AAO when three of its details are not in facts.md. Zero `critical` issues: this is a wording-level revision, not a structural one, so do NOT route to `reject`.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | pass | Warm, first-person, level not smug. The self-deprecating beat lands at line 222 ("I ignore it roughly four times out of five"), exactly the voice.md posture. Rhetorical hooks at lines 42, 201, 234. Reading level runs slightly high in the intro (see §7 row 9), otherwise on-voice. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `one could\|one should\|users are\|stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `was (scanned\|checked\|monitored\|built)`: 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 10.0, H2 1 13.5, H2 2 7.1, H2 3 7.1, H2 4 10.1, H2 5 14.2, H2 6 23.0, outro 14.5, FAQ 9.6. All well above the 4-word floor. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Grep of the full `writing-standards.md` §Forbidden phrases list plus `voice.md` §Additional forbidden phrases (which adds none): 0 hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—'` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–'` returns nothing. No en-dashes at all. |
| Intro jargon check (§Insider-jargon translation) | pass | No SEO/marketing jargon in the intro. Eyewear terms that could have gone unexplained ("anti-reflective coating", "colour distortion") are each defined on first use in the body (lines 57, 58). |
| Intro-hook over-anchoring | n/a | The hook ("By 9pm my eyes felt like sandpaper") is a personal scene, not a time-bound news peg. It recurs once at line 246 as a deliberate bookend, which is the correct use. |
| Product code-literal grep (`modules.product` on) | pass | `blog-ops/profile/product.md` defines no code constants; the only product surface is the tool names, used in prose. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | `adapters/publish/frontmatter/wordpress.md`: `title` (52 chars, matches outline), `date: 2026-09-09`, `excerpt` (136 chars, ≤160), `tags` (3 entries: productivity / students / education, all live WP terms per `blog.md` §Tag taxonomy), `authors: Olga Pak` (matches `authors.md` byline), `draft: true`. Correctly carries NO `cover`/`heroImage` field, per that template's §No cover/heroImage field. No JSON-LD required: the wordpress-rest adapter treats FAQPage schema as a plugin concern. |
| Title in frontmatter matches outline "Final title" exactly | pass | `Best Blue Light Glasses for Students: 9 Honest Picks`, character-identical. |
| Slug / meta description match outline | pass | Slug is the draft directory (`best-blue-light-glasses`); `excerpt` matches outline "Final meta description" verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | Draft H2s in order: 1 What the best blue light glasses can and can't do / 2 How I picked these blue light glasses / 3 The 9 best blue light glasses for students / 4 Clear or amber: which pair do you actually need? / 5 What actually helps tired eyes, and it isn't lenses / 6 How to buy a pair without getting upsold / 7 The hours are the real problem, not the lens (the outline's unnamed "Closing CTA" block; an H2-titled outro directly before `## FAQ` is the house pattern in `content/blog/best-pens-for-note-taking.md` and `best-notebooks-for-note-taking.md`) / 8 FAQ. All 9 H3 picks under H2 3 match the outline's H3 3.1-3.9 titles and order verbatim. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Lines 14, 16, 18, 20 are the 4 outline-specified paragraphs (2 / 1 / 1 / 1 sentences). Line 22 is the mandatory affiliate disclosure, counted as post furniture rather than a fifth intro paragraph per outline §Intro structure and `custom-instructions.md` §Content policy. |
| Affiliate disclosure placement + wording (locked, `plan.md` §Affiliate disclosure) | pass | Line 22, italic, LAST paragraph of the intro, immediately before the first `##` at line 24. Wording is character-identical to `custom-instructions.md`: `*Some links in this guide are affiliate links. As an Amazon Associate, I earn from qualifying purchases, at no extra cost to you.*` |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | All 7 body H2s carry a concrete number or named example plus visible burstiness. Standalone-question paragraphs are missing from H2 2, H2 3 and the outro (§7 row 12). |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 questions, verbatim matches of the outline's 5, in order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | n/a | Adapter is `wordpress-rest`: no JSON-LD requirement at the adapter level, sub-check skipped per SKILL §2.1. |
| FAQ is the last block (no prose after the final answer) | pass | File ends at line 270 with the last FAQ answer. Nothing follows. |
| Outro / CTA paragraph present, links the blog CTA target with an action anchor | pass | Line 248: `[Try my free AI tools](/ai-tools)`, matching `blog.md` §Primary CTA hook, followed by a Text Summarizer example tied to the post's own thesis (fewer screen hours). Two short paragraphs, no feature re-list, no prices, per outline §Closing CTA. |

Structural deltas vs outline (if any):
- None. Every H2, every H3, the intro shape, the disclosure, the FAQ set and the CTA block match the approved outline.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | fail | Most do (17 trials, six/three/three sleep split, 30+ pairs, 20-20-20, 25 inches all trace cleanly). Four do not: "265 people" at line 220 misreads facts.md's "265-reply thread"; "people over about 40" at line 163; "30 centimetres" at line 216; and the AAO-attributed glosses at lines 215 and 218. See §7 rows 3, 4, 10. |
| Cochrane + AAO claims quoted at exactly the strength facts.md records, in both directions | pass | Line 36 quotes "may not attenuate symptoms of eye strain with computer use" verbatim, then explicitly refuses the overstatement: "Note the wording. Not 'they do nothing'". Line 38 renders the AAO position without inflating it into a debunking. Line 40 keeps the sleep evidence at "indeterminate", not "disproven". Line 34's table cell preserves the very-low-certainty grading. This is the hardest thing in the post and the draft gets it right. |
| No medical claims (brief.md §Avoid list): no prevention, no cure, no "fixes eye strain" | pass with one exception | No sentence claims the glasses prevent eye damage, cure headaches or fix eye strain; lines 258 and 266 actively refute those framings. The exception runs the other way: line 254's unqualified "harmless" is a safety claim facts.md contradicts (§7 row 2). |
| No efficacy grounding in any pick's rationale (`plan.md` §Key sections item 3) | fail | 8 of 9 picks ground only in comfort, fit, AR coating, colour shift, Rx availability, style or price band. GUNNAR, the flagged high-risk entry, is handled exactly as the plan demanded (line 177). Swanwick at line 187 is the failure: "the evening category is the only one where wearers consistently describe noticing something" is a perceived-efficacy generalization. See §7 row 1. |
| Nothing from `facts.md` §"Rejected / not verifiable" appears | pass | Grep confirms: no blocking percentage anywhere (line 189 names the concept and refuses the number), no `$` figure anywhere, no Luxottica/markup figures, no macular-degeneration claim in any direction, no online-vs-in-store price comparison and no discount percentage, no use of the r/sleep "can't believe the difference" testimonial. The 380-500nm band was correctly dropped rather than cited to a top-10 competitor. |
| Competitor mentions framed "best for [segment]" | n/a | `modules.competitors: false` in `config.yaml`; no §Competitor facts table exists. §3.6 and §3.7 skipped by their own guards. |
| Product mentions (count: 2) are each earning their place | pass | "my own AI tools" at line 16 (the plan-sanctioned expertise statement) and the CTA at line 248. Zero mentions inside the picks, per `plan.md` §Product positioning emphasis. Neither is deletable without losing meaning. |
| Own-product pricing claims (§3.9) | pass | No `$`, no usage cap, no tier breakdown anywhere. Line 248 says "free AI tools" and nothing more. |
| Soon-to-ship feature gap check (§3.10) | n/a | `brief.md` §Soon-to-ship features: None. |
| Internal links (count: 5 blog posts + 1 CTA page) exist in the intro cluster per §Internal linking | pass | 5 blog-post internal links (3-5 target): `/how-to-reduce-screen-time` and `/how-to-take-notes-on-ipad` in the intro (2, at the ≤2 ceiling, both woven into a sentence rather than stacked as a see-also list), `/how-to-stop-doomscrolling` + `/screen-free-hobbies` in H2 4, `/digital-detox-plan` in H2 5. All five land in the sections the outline assigned them. Plus `/ai-tools` in the CTA. First internal link (line 18) precedes the first external link (line 36), per §Internal linking. |
| Every internal blog link is root-relative `/<slug>` (no trailing slash, `blog.trailing_slash: false`), not absolute | pass | All 6 are root-relative with no trailing slash and no domain. Verified against `content/blog/`: `how-to-reduce-screen-time.md`, `how-to-take-notes-on-ipad.md`, `how-to-stop-doomscrolling.md`, `screen-free-hobbies.md`, `digital-detox-plan.md` all exist. Grep for `https://olgapak.com/`: 0 hits. |
| External links (count: 4) each point to reputable sources; anchor text = literal claim | pass | 4 citations, in the 3-5 band, each URL used exactly once, each anchor a literal claim: pubmed.ncbi.nlm.nih.gov/37593770 (line 36), aao.org (line 38), academic.oup.com (line 199), aoa.org (line 240). Matches the outline §External link plan row for row. The AAO page backs facts in H2 1, H2 4 and H2 5 and is correctly linked once, then referred to in prose. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | pass | Forbidden set from `research/serp.md` §Selected results analyzed: health.com, reddit.com, cnn.com, nytimes.com/wirecutter, felixgray.com, blockbluelight.com, gunnar.com, zennioptical.com, amazon.com best-sellers, optimizeyourbiology.com. Zero of the 4 rendered external links hit that set. Reddit and X voices are attributed in prose and unlinked at lines 203, 220 and 230, exactly as the outline required. No invented ASIN or product URL anywhere: grep for `amazon` in a URL returns 0 hits. |
| Target keyword appears 2-8 times in body (actual count: 6) | pass | 6 body occurrences of "blue light glasses" excluding frontmatter and FAQ. Not stuffed, not under-optimized. |

Unsourced / suspicious claims:
- `draft-v1.md:187`, "the evening category is the only one where wearers consistently describe noticing something", issue: perceived-efficacy generalization inside a pick's rationale, not in facts.md, and contradicted by the draft's own line 203. The only source that would support "consistently" is the r/sleep thread facts.md rejects as likely astroturfed.
- `draft-v1.md:254`, "The lenses are harmless either way", issue: contradicts facts.md §Statistics row 5 (adverse events reported in 9 RCTs, 333 participants: headache, discomfort wearing the glasses, lower mood, increased depressive symptoms).
- `draft-v1.md:220`, "a thread asking 265 people whether blue light glasses helped", issue: facts.md records a "265-reply thread", not 265 people asked; and the quote carries no platform or handle attribution.
- `draft-v1.md:213-218`, "Here is the whole list, straight from the AAO's guidance", issue: three details in the list are not in facts.md's AAO rows (the focusing-muscles gloss at 215, "30 centimetres" at 216, brightness-matching at 218).
- `draft-v1.md:163`, "roundups aimed at people over about 40", issue: age bracket not in facts.md, no `[VERIFY:]`.
- `draft-v1.md:203`, "Absolutely nothing. Total scam." plus the cortisol/sleep/mood/energy detail, issue: verbatim-correct against `research/reddit.md` §Thread 2 but not present in facts.md, and carries no `[VERIFY:]`.
- `draft-v1.md:67, 91, 103, 139`, "the roundups I read" / "the independent roundups", issue: facts.md records a single source (Wirecutter) for Sojos, Tijn and EyeBuyDirect; the plural inflates the count.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | Yes. Line 38, terminal to its sentence, canonical shape, carries the ` \| source:` separator with a non-trivial honest clause ("writer's general knowledge, no facts.md entry"), which SKILL §4.4 names as an acceptable value. The surrounding paragraph reads fine if the human can't verify it and the sentence is cut. |
| `[EXTERNAL_LINK_NEEDED:]` | `9` | Yes. Exactly one per pick, all 9 picks covered, all using the outline's specified shape `[EXTERNAL_LINK_NEEDED: purchase link for <product>, Amazon /dp/<ASIN> with tag op01e-20, or brand product page]`. `<ASIN>` is a literal placeholder in every one: no invented ASIN, no invented URL, no `[AFFILIATE-LINK-PENDING:]`. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes, none needed: all 5 planned internal links are resolved to real slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Yes. Outline §Image placement plan specifies 5 total = 1 frontmatter featured + 4 in-post. The draft carries the 4 in-post placeholders and correctly does NOT emit an inline featured placeholder (§2a passes). Concepts and types match the plan 1:1: ai-prompt after H2 1 + 1 paragraph (line 28), ai-prompt after H2 3 + 1 paragraph (69), remotion after H2 4 + 1 paragraph (197), ai-prompt after H2 5 + 1 paragraph (211). §2b passes: no placeholder is immediately followed by a heading. §2c passes: the one `remotion` slot is a two-circle concept diagram, not a chart, and the nearest markdown table is 120+ lines away. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `AFFILIATE-LINK-PENDING`: 0 hits.

## 5. Word count

- Draft: `3,183` words (body prose, excluding frontmatter and the `## FAQ` block, net of marker text; 3,476 with marker text included)
- Outline target: `3,210` words (§Word count roll-up "Total estimate", same basis)
- Delta: `-0.8%`
- Band: `within ±10% = pass, no issue`

FAQ block, counted separately and not part of the gated total: `439` words against the outline's `~180`. Logged as a `minor` in §7 row 6.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists grepped. |
| Zero em-dashes (`—`, grep returns nothing) | pass | 0. |
| En-dashes (`–`) only in numeric ranges | pass | 0 en-dashes in the file. |
| First-person throughout | pass | Consistent `I` / `you`, no `one` / `users` / `stakeholders`. |
| Active voice | pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | pass | Every H2 carries a concrete number or named example, and burstiness in all of them. |
| ≥1 bullet list per ~300 words | fail | 3 bullet lists (lines 56-61, 215-218, 236-240) across 3,183 body words, against a floor of ~10. Partly mitigated by 2 markdown tables and the bold-labelled Best for / The catch / Skip if blocks across the 9 picks. Logged `minor` in §7 row 7 with a fix that does not touch the picks. |
| ≥1 standalone-question paragraph per major section | partial | Present in H2 1 (line 42), H2 4 (201), H2 5 (222), H2 6 (234). Absent from H2 2, H2 3 and the outro. §7 row 12. |
| ≥1 concrete number or named example per major section | pass | H2 1: 17 RCTs, six/three/three. H2 2: 30+ pairs. H2 3: 9 named products. H2 4: named quote plus the melatonin citation. H2 5: 20-20-20, 25 inches. H2 6: three named-source quotes. Outro: Text Summarizer. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Minimum per-section stddev is 7.1 words (H2 2 and H2 3), well clear of the 4-word floor. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 3, Swanwick Night Swannies | 187 | `major` | "the evening category is the only one where wearers consistently describe noticing something" grounds the pick in perceived efficacy, which `plan.md` §Key sections item 3 forbids for every pick. "Consistently" is not supported: facts.md holds one positive anecdote (u/ptarmiganchick) against one null self-experiment, and the only thread that would support consistency is rejected in facts.md as likely astroturfed. The draft's own line 203 contradicts it 16 lines later. | Replace the clause with a non-efficacy reason, e.g.: "This is a genuinely dark amber lens rather than a clear one pretending, and the evening is the only time of day a tint this strong is worth wearing. If you are going to try the sleep side of this at all, try it with a lens you can obviously see the colour of." Do not substitute any other wording that generalizes about what wearers feel. |
| FAQ, Q1 | 254 | `major` | "The lenses are harmless either way" is an unqualified safety claim that contradicts facts.md §Statistics row 5: Cochrane reported adverse events in 9 RCTs (333 participants) including headache, discomfort wearing the glasses, lower mood and increased depressive symptoms. In a health-adjacent post, understating risk is as wrong as overstating benefit. | Replace "The lenses are harmless either way, so this is a comfort decision, not a medical one." with: "Cochrane found adverse effects were infrequent, so for most people this is a comfort decision rather than a medical one." |
| H2 5 | 220 | `major` | "a thread asking 265 people whether blue light glasses helped" misstates the source: facts.md records a 265-*reply* thread, not 265 people asked. The quote also carries no platform or handle attribution, which outline §External link plan requires for X voices ("attribution in prose (subreddit or handle), unlinked"). | Rewrite the sentence opener as: "Under an X thread with 265 replies asking whether blue light glasses helped, @lesrevenants967 cut through everything:" and keep the quote and the closing line as written. Do not add a link. |
| H2 5 | 213-218 | `major` | "Here is the whole list, straight from the AAO's guidance" attributes the entire list to a named medical authority, but three details are not in facts.md's AAO rows: the "gives the focusing muscles a break" gloss (215), the "30 centimetres" comparison (216), and "turn the brightness down to match the room you are in" (218). | Change the lead-in at line 213 to "Here is what the AAO actually recommends, plus what it looks like in practice:". Then either delete "rather than the 30 centimetres most of us drift to by hour four" from line 216, or keep it and reword so it is visibly your observation, not AAO guidance ("rather than the half-arm's-length most of us drift to by hour four"). Leave the 20-20-20 and 25-inch numbers exactly as they are, they are sourced. |
| H2 3, Sojos / Tijn / EyeBuyDirect | 67, 91, 103, 139 | `minor` | "the independent roundups I read" and "the roundups" (plural) for three picks that facts.md traces to a single source (Wirecutter). Felix Gray, Warby Parker, Peepers and Zenni genuinely have two or more, so the plural is right there. | For lines 67, 91, 103 and 139 only, change the plural to the singular: "it turned up as a top pick in one of the independent roundups I read", "It was also the top pick for style plus low colour shift in one of the roundups I read", "it was the budget pick in one of the roundups I read", "from a retailer whose prescription-compatible picks made one of the independent roundups". |
| FAQ | 250-270 | `minor` | FAQ runs 439 words against the outline's ~180 (+144%). Answers average 88 words where the plan implies about 55. This does not affect the gated body count, but four-sentence FAQ answers read long in a rich result. | Trim each of the five answers to three sentences by cutting the third-value restatement in each. Preserve every sourced clause (the Cochrane wording in Q1, the AAO position in Q4) and the eye-test advice in Q4. |
| Whole post | n/a | `minor` | 3 bullet lists across 3,183 body words, against the humanization floor's ≥1 per ~300 words. | Convert one prose run to a short list, e.g. split line 44's three "if you like..." clauses into a 3-item bullet list. Do NOT bulletize the 9 picks: their table plus Best for / The catch / Skip if blocks are the outline's chosen structure and already break the wall of text. |
| H2 1, H2 2, H2 4, H2 6 | 36, 52, 203, 232 | `minor` | Four paragraphs run 4 to 5 sentences, against the standard's 1-3 with four "only when the argument genuinely needs them (rare)". | Split each at its natural pivot: line 36 after "compared with ordinary lenses."; line 52 after "behave completely differently."; line 203 after "Total scam.'"; line 232 after "does not change how colour looks." |
| Intro | 16, 18 | `minor` | Both paragraphs are single sentences of 42 and 40 words, against an 8th-9th grade reading-level target. The intro's mean sentence length (30.8 words) is the highest in the post. | Split line 16 after "than I would like to admit." and start a new sentence with "So I went through the actual studies before spending anything." Split line 18 after "](/how-to-reduce-screen-time)." and start "And if you are [taking notes on an iPad](/how-to-take-notes-on-ipad) through every lecture, you are exactly who I wrote this for." Keep both internal links and both anchor texts. |
| H2 3, Peepers | 163 | `minor` | "roundups aimed at people over about 40" states an age bracket that is not in facts.md and carries no `[VERIFY:]`. | Drop the number: "which is the whole reason this brand keeps appearing in roundups aimed at readers who already use reading glasses." |
| H2 4 | 203 | `minor` | The "Absolutely nothing. Total scam." quote and the cortisol / sleep / mood / energy detail are verbatim-correct against `research/reddit.md` §Thread 2, but they are not in facts.md, which is the writer's only no-marker citation pool. | No text change if the editor promotes the quote into facts.md §Quotes (it is verbatim and the outline explicitly called for this counterweight). Otherwise append `[VERIFY: r/Biohackers OP's null-result quote and cortisol logging \| source: research/reddit.md §Thread 2]` to the end of the paragraph. |
| H2 2, H2 3, outro | n/a | `minor` | No standalone-question paragraph in these three sections, against the humanization floor's per-major-section rule. H2 2's line 50 is a short standalone statement, close but not a question. | Add one short question paragraph to H2 3, before the shortlist table at line 73: "So which one do you actually buy?" Leave H2 2 and the outro as they are, the outro is 2 paragraphs by design. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **Line 36's two-directional discipline on the Cochrane finding.** It quotes "may not attenuate symptoms of eye strain with computer use" verbatim inside the anchor text, then immediately blocks the overstatement in the other direction: "Note the wording. Not 'they do nothing', and the finding was graded low-certainty off trials running from under a day to five weeks." This is the single hardest sentence in the post to get right and it is right. Do not touch this paragraph beyond the sentence split in §7.
- **Line 177's GUNNAR catch.** "Liking it is a preference, not proof it reduces eye strain. This brand also appeared in my research only through its own product page, not through an independent review." This is exactly what `plan.md` §Key sections item 3 demanded of the highest-risk entry, and it also honours the promise made at line 63. Preserve verbatim.
- **Line 44's affiliate honesty beat.** "And yes, some links below earn me a commission, which is exactly why I would rather say it here: the free habits further down this page have better evidence behind them than anything on the shopping list." This is `plan.md` §Tone hooks executed precisely, and it is the post's actual differentiator against every roundup on page one. Preserve.
- **The Peepers entry's restraint (lines 161-167).** facts.md offers a "headache-prone wearers" framing for this brand and the draft deliberately does not use it, because it would have been a medical claim. That is exactly the judgment `brief.md` §Avoid list asks for, and it is invisible unless you check what was left out.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 187 (Swanwick): replace "and the evening category is the only one where
   wearers consistently describe noticing something" with a non-efficacy reason.
   Use: "This is a genuinely dark amber lens rather than a clear one pretending,
   and the evening is the only time of day a tint this strong is worth wearing.
   If you are going to try the sleep side of this at all, try it with a lens you
   can obviously see the colour of." Do not substitute any other wording that
   generalizes about what wearers feel.

2. Line 254 (FAQ Q1): replace "The lenses are harmless either way, so this is a
   comfort decision, not a medical one." with "Cochrane found adverse effects
   were infrequent, so for most people this is a comfort decision rather than a
   medical one."

3. Line 220: rewrite the sentence opener as "Under an X thread with 265 replies
   asking whether blue light glasses helped, @lesrevenants967 cut through
   everything:" and keep the quote and the closing line as written. Do not add
   a link.

4. Line 213: change the lead-in to "Here is what the AAO actually recommends,
   plus what it looks like in practice:". Then in line 216 reword "rather than
   the 30 centimetres most of us drift to by hour four" to "rather than the
   half-arm's-length most of us drift to by hour four". Leave the 20-20-20 rule
   and the 25-inch number exactly as they are, they are sourced.

5. Lines 67, 91, 103 and 139 only: change plural "roundups" to singular, since
   facts.md traces Sojos, Tijn and EyeBuyDirect to one source each. Use "one of
   the independent roundups I read" / "one of the roundups I read". Leave the
   plural at lines 115, 127, 151 and 163, those picks genuinely have two or more.

6. Line 163 (Peepers): drop the unsourced age bracket. Use "which is the whole
   reason this brand keeps appearing in roundups aimed at readers who already
   use reading glasses."

7. Trim each of the five FAQ answers to three sentences (currently 439 words
   against a ~180 plan). Preserve every sourced clause: the Cochrane wording in
   Q1, the AAO position in Q4, and the eye-test advice in Q4.

8. Split these over-long paragraphs at their natural pivot: line 36 after
   "compared with ordinary lenses."; line 52 after "behave completely
   differently."; line 203 after "Total scam.'"; line 232 after "does not change
   how colour looks."

9. Split the two long intro sentences. Line 16: split after "than I would like
   to admit." and start "So I went through the actual studies before spending
   anything." Line 18: split after the /how-to-reduce-screen-time link and start
   "And if you are [taking notes on an iPad](/how-to-take-notes-on-ipad) through
   every lecture, you are exactly who I wrote this for." Keep both internal links
   and both anchor texts.

10. Add one bullet list: split line 44's three "if you like..." clauses into a
    3-item bullet list. Do NOT bulletize the 9 picks, their table plus the
    Best for / The catch / Skip if blocks are the outline's chosen structure.

11. Add a short standalone question paragraph to H2 3, immediately before the
    shortlist table at line 73: "So which one do you actually buy?"

12. Line 203: if the editor has not promoted the r/Biohackers null-result quote
    into facts.md, append to the end of that paragraph:
    [VERIFY: r/Biohackers OP's null-result quote and cortisol logging | source:
    research/reddit.md §Thread 2]

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked. Do NOT
touch the affiliate disclosure at line 22, the Cochrane paragraph's "Note the
wording" beat, the GUNNAR catch at line 177, or the affiliate honesty beat at
line 44.

Produce blog-ops/drafts/best-blue-light-glasses/draft-v2.md. Do not overwrite
the prior draft.
```

## 10. Reviewer notes (free-form)

- **The medical-safety posture is the strongest thing here, and the two failures are both edge-of-frame, not core.** The evidence gate (H2 1) does not overstate benefit in a single sentence, and it also does not overstate "no benefit", which is the failure mode the brief warned about in both directions. The two `major` medical-adjacent rows (Swanwick's "consistently", the FAQ's "harmless") are the only places the discipline slips, and both are one-sentence fixes.
- **Two of the four `major` issues trace back to the outline, not the writer.** Outline H3 3.9 literally instructs "the only category where wearers consistently report feeling a difference", and the outline's FAQ direction says "note the lenses are harmless either way". The writer followed instructions; the outline is where the drift originated. Both fixes are phrasing-level and stay inside the locked structure, so no outline amendment is needed, but the editor may want to note it if this pattern recurs.
- **The online-pricing hard limit is respected, narrowly.** Line 239 ("price the same lens online before you say yes in the shop") and line 270 ("price it online before agreeing to it at the counter") advise the reader to compare without asserting any comparison or percentage. That is the outline's own approved bullet and it stays on the right side of `plan.md` §Key sections item 6. Flagging it here only so the human at Gate 2 knows it was checked deliberately rather than missed.
- **The `[VERIFY:]` at line 38 is well-formed but worth a decision at Phase 4.** "Sunlight is a far stronger source of blue light than any laptop" is uncontroversial and the marker is honest about having no source. If the human cannot find one quickly, the sentence deletes cleanly with no damage to the paragraph, which is why it is not logged as an issue.
- **`/ai-tools` link form.** `blog-craft.md` §Internal linking says marketing-site links go absolute, but olgapak.com is one WordPress site and three of the five published posts that link the tools page use root-relative `/ai-tools`. The draft matches the dominant house convention. No change wanted.
- **Watch the pick lengths on revision.** The 9 picks land at roughly 105 words each against the outline's ~115 budget, which is why the total came in at -0.8%. Fixes 1, 5 and 6 all shorten pick copy slightly; do not let the writer compensate by expanding elsewhere.
