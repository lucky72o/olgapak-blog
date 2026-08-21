# Review: best-pens-for-note-taking draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md`, `draft-v1.md` (diffed), `review-v1.md` (the iteration-1 audit, archived), `outline.md`, `facts.md`, `brief.md`, `plan.md`, `research/serp.md`, `research/reddit.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/custom-instructions.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/site-conventions.md`.
Read by: editor (decides next action), Stage 3d marker-resolution pass (consumes §10's do-not-break list).

**Purpose:** a deliberately critical, checklist-driven audit of draft-v2 against every objective rule, plus verification that each of `review-v1.md` §9's eight instructions actually landed and that nothing else moved.

**Precedence note:** `blog-ops/profile/custom-instructions.md` was re-read first and outranks persona/standards defaults. Six things that would normally read as defects are CORRECT for this blog and are explicitly NOT flagged below: the 12 `[EXTERNAL_LINK_NEEDED:]` markers (11 product + 1 Sakura, resolved at Stage 3d), product links being excluded from the 3–5 external-link budget, the absent affiliate disclosure, the absent prices, naming Pen Addict / Wirecutter in prose without linking them, and the title's deliberate omission of the post-type matrix's "Tested and Ranked" (approved at Stage 1c.5).

## Reviewed

- Draft: `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md` (word count: `2,838` body prose, markers stripped, FAQ excluded; outline target: `2,980`)
- Prior draft: `draft-v1.md` (`2,778` body prose) — full `diff -u` run, see the fix-verification table below
- Outline: `blog-ops/drafts/best-pens-for-note-taking/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md`)

## Verdict

`approve`

Reasoning (1–3 sentences): Both `major` issues from iteration 1 are fixed correctly and surgically, I-1's false "Same eleven pens" is now a count-free framing and the Muji H3 now delivers the same four-beat shape the other ten do without touching any of the three `[VERIFY:]` markers. The diff confirms exactly eight hunks and no collateral edits, so every clean result from iteration 1 (0 forbidden phrases, 0 em-dashes, 0 forbidden-SERP links, 0 unsourced numbers, valid `| source:` clauses on all three `[VERIFY:]`, matching H2 order, matching FAQ set) survives intact, and word count moved from -6.8% to -4.8%. Zero critical, zero major, six `minor` remain, none of which is a Step 4 forcing condition and four of which are deliberately deferred Stage 3d / editor actions rather than writer work.

**Iteration counter:** this is revision pass `2` of `max 2`. Verdict is `approve`, so no escalation is required and the loop closes here.

## 0. Verification of iteration-1 fixes

`diff -u draft-v1.md draft-v2.md` returns exactly eight hunks. All eight map 1:1 to `review-v1.md` §9. Zero unrequested edits, zero collateral damage.

| §9 item | Applied? | Evidence in draft-v2 |
|---|---|---|
| 1. L205 "Same eleven pens" → count-free framing | ✅ correct | L207 now reads `The picks above, sorted by what you're actually doing with them.` Table below it is untouched at 7 job rows, no rows added to force "eleven" true. The count-place sweep drops from six to five (see §10). |
| 2. Muji H3 rationale sentence, positioning only, `[VERIFY:]` untouched | ✅ correct | New L185 sits directly after the `**Best for:**` line, tracks the outline's §H3 3.10 "Why" ("consistency and understated design"), and asserts no ink chemistry, no tip sizes, no refill availability. All three `[VERIFY:]` markers at L187 are byte-identical to v1, including their `\| source:` clauses. One phrase in the new sentence goes slightly past the outline's wording, logged as `minor` I-13. |
| 3. "she'd killed" → "they'd killed" | ✅ correct | L249. Rest of the sentence, the "three gel pens in a month" figure, and the u/felipetwo quote are unchanged. |
| 4. delete "and drawing" | ✅ correct | L159 now reads `It's Wirecutter's pick for fine lettering, and liquid ink is genuinely different to write with`. The drawing/craft-work positioning stays where `facts.md` puts it, on the Sakura entry (L171). |
| 5. "seven roundups I studied" → "seven guides I studied" | ✅ correct | L24. Number kept at four-of-seven. L123's "two of the roundups I studied" correctly left alone, both of those are genuine roundups. |
| 6. gloss "hybrid" on first use | ✅ correct | L24 now reads `its fast-drying hybrid ink, a ballpoint-gel cross`. The fuller definition stays at L48 where it belongs. Closes the `audience.md` §Reading posture translate-on-first-use gap. |
| 7. H2 6's four bold beats → bulleted list | ✅ correct | L249–L252 are now `- ` bullets with each bold lead-in retained inside its bullet. The H3 picks in H2 3 were correctly NOT bullet-ified. Bullet-list count goes 2 → 3, bullet count 7 → 11. |
| 8. two standalone-question paragraphs | ✅ correct | L229 (`So which one is actually happening on your page?`, immediately before the H2 5 definitions block) and L243 (`So what do lists like this one leave out?`, at the top of H2 6). Two total, not sprinkled. Standalone-question sections go 1 of 6 → 3 of 6. A construction-repetition nit is logged as `minor` I-14. |

Also verified as NOT broken by the revision, each was an explicit "do not touch" in §9's trailer:

- All eleven H3 headings still use the comma form, zero em-dashes reintroduced (§8 of `review-v1.md` called this out as the highest-risk regression).
- Marker counts unchanged: 3 `[VERIFY:]` / 12 `[EXTERNAL_LINK_NEEDED:]` / 0 `[INTERNAL_LINK_NEEDED:]` / 4 `[IMAGE:]`.
- H2 order, title, excerpt, meta description, FAQ set: byte-identical to v1.
- No prices, no dry times, no test counts, no Reddit write-out-length figures introduced.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`voice.md` + `authors.md`) | ✅ pass (upgraded from ⚠️ partial) | Fix 8 closes the gap iteration 1 logged as I-10. `voice.md` §Lexicon names "Rhetorical opener questions" as an Olga signature, and the draft now carries three (L53, L229, L243) across six body sections instead of one. Combined with the intro's self-deprecation (L14, L16), the beginner-friendly translations (L24 "a ballpoint-gel cross", L135 "a technical way of saying", L235 "gsm (grams per square metre)"), and the short-sentence beats (L59, L61, L223), the draft now reads as the warm-authoritative voice `authors.md` describes rather than blunt-generic. No one-word rhythm beats ("Ouch!" / "Nope!"), but those are optional lexicon items, not a floor requirement. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ pass | Grep for `one could\|one should\|users are\|stakeholders\|the user` returns zero hits. |
| Active voice (no "X was scanned" shapes) | ✅ pass | Grep for `was (scanned\|checked\|monitored\|built\|tested)` returns zero hits. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ pass | Per-section sentence-length stddev (tables and headings excluded): intro = 5.19, H2 1 = 16.99, H2 2 = 5.97, H2 3 = 8.66, H2 4 = 6.05, H2 5 = 8.44, H2 6 = 13.24, CTA = 9.81. Every section is far above the <4 uniformity threshold. H2 6 rose from 13.02 to 13.24 after the bullet conversion, so fix 7 did not flatten it. |
| Forbidden phrases count: `0`; any hits = fail | ✅ pass | All 23 base phrases from `writing-standards.md` greped, plus a broad catch-all sweep across the usual AI-tell vocabulary. Zero hits. `voice.md` §Additional forbidden phrases says "None beyond the generic list". The three new sentences added in v2 introduce none. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail | ✅ pass | Zero. The eleven comma-form H3 headings survived the revision intact. |
| En-dash context: every `–` hit is inside a numeric range | ✅ pass | Zero en-dashes in the file. |

Forbidden phrases found: none.

**Intro jargon check (§1.7).** Pass, and the one in-body gap iteration 1 logged is now closed. The intro (L14–L20) contains no SEO/marketing jargon (`SERP`, `funnel`, `featured snippet`, `E-E-A-T`) and no untranslated stationery jargon. I-12's "hybrid" gap is fixed at L24: the term is glossed on first appearance ("a ballpoint-gel cross") and fully explained at L48, exactly the shape `audience.md` §Reading posture asks for.

**Intro-hook over-anchoring check (§1.9).** Skipped per its own guard. The hook is a personal anecdote (L14, "I have thrown away more pens mid-semester"), not a time-bound event peg. The post carries no dated hook and should read identically in 12 months.

**Product code-literal check (§1.8, `modules.product: true`).** `product.md` defines no backticked code constants or status enums, only human-readable tool names. Nothing to grep. Pass, N/A in practice.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | ✅ pass | Unchanged from v1 and re-validated against `adapters/publish/frontmatter/wordpress.md`. `title` (54 chars, 50–60 band), `date: 2026-08-08`, `excerpt` (151 chars, ≤160), `tags` (3, in the 2–4 band, all three exist verbatim in `blog.md` §Tag taxonomy), `authors: [Olga Pak]`, `draft: true`. Correctly carries NO `cover`/`heroImage` field. FAQPage JSON-LD sub-check skipped per SKILL §2.1, `wordpress-rest` has no adapter-level JSON-LD requirement. |
| Title in frontmatter matches outline "Final title" exactly | ✅ pass | `Best Pens for Note Taking: 11 Picks That Survive Class`, byte-identical to outline §Final title, unchanged by the revision. |
| Slug / meta description match outline | ✅ pass | `excerpt` byte-identical to outline §Final meta description. Directory name matches outline §Final slug. |
| H2 order in body matches outline body-sections list exactly | ✅ pass | 1:1 in order, and identical to v1. `What are the best pens for note taking?` · `Gel, ballpoint, rollerball or fineliner?` · `The 11 best pens for note taking` · `Which pen for which kind of note-taking` · `Your paper matters as much as your pen` · `The honest limits nobody mentions` · `Turn the notes into something you can revise from` (outline §Closing CTA) · `FAQ`. Zero additions, zero removals, zero reorderings. |
| Intro is 2–4 paragraphs, 1–3 sentences each | ✅ pass | Unchanged: 4 paragraphs (L14, L16, L18, L20) at 2 / 1 / 1 / 1 sentences. Target keyword in the hook. 1 internal link, under the ≤2 cap. |
| Every H2 has at least one rhythm marker | ✅ pass, and stronger than v1 | H2 1: shortlist table + "four of the seven guides". H2 2: 4-item bullet list + standalone question (L53). H2 3: named examples, tip-size numbers, 33 bold beats. H2 4: job table. H2 5: 3-item bullet list + standalone question (L229) + 70/100 gsm. H2 6: standalone question (L243) + 4-item bullet list + cited quote. CTA: named tools. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ pass | 5 questions (L262, L266, L270, L274, L278) against 5 in outline §FAQ block, all verbatim matches, unchanged by the revision. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | `wordpress-rest` emits no JSON-LD. Half-check skipped per SKILL §2.5. |
| Outro / CTA paragraph present | ✅ pass | H2 `Turn the notes into something you can revise from` (L254) sits immediately before `## FAQ` (L260) with nothing after the final FAQ answer. Action anchor `[Try my free AI tools](/ai-tools)` (L258) matches `blog.md` §Primary CTA hook, not a bare homepage link. Unchanged. |

Structural deltas vs outline: **none.**

**Targeted check 1, the 11-vs-10 pick consistency (requested by name at Stage 1c.5).** Still internally consistent at eleven, and the sweep surface shrank by one place because fix 1 removed L205's count.

| Location | Line | Says | OK? |
|---|---|---|---|
| Frontmatter title | 2 | `11 Picks` | ✅ |
| Frontmatter excerpt | 4 | `11 pens` | ✅ (not on the original Stage 1c.5 sweep list, see I-3) |
| Intro preview | 20 | `the 11 pens I'd pick` | ✅ |
| §H2 3 heading | 63 | `The 11 best pens` | ✅ |
| §H2 1 shortlist table | 28–40 | 11 data rows | ✅ |
| §H2 4 opener | 207 | *no count* | ✅ **fixed, was the I-1 defect** |
| Actual H3 pick count | 69–193 | 11 H3s | ✅ |

Grep for `eleven\|11 ` across the whole draft now returns exactly four count-bearing places (L2, L4, L20, L63) plus the table rows. The word "eleven" no longer appears anywhere in the body.

**Targeted check 2, §H2 4 must be a compact table, not prose.** ✅ Still shipped correctly and untouched by the revision. L209–L217 keeps the outline's exact `What you're doing | Pick | Why` columns and 7 rows covering the outline's 7 specified jobs. The single prose paragraph after it (L219) is the outline's explicitly required Parker Jotter comfort disagreement, not duplication. Both internal links stay woven into the "Why" cell text (L215, L216). The outline's "no image slot here" rule is honored.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ pass | The revision introduced no new numbers. The three added sentences (L185, L229, L243) are number-free. Every number carried over from v1 was traced digit-by-digit in `review-v1.md` §3 and none of those lines changed except L24 ("guides" for "roundups", which strengthens the noun's accuracy) and L249 ("they'd" for "she'd", which leaves the figure alone). Zero unsourced numbers. |
| Every competitor name used is discussed with a "best for [segment]" framing | N/A | `modules.competitors: false` in `config.yaml`. No §Competitor facts table exists. Check skipped by its own module gate, along with §3.6 and §3.7. |
| Product mentions (count: `1`, `modules.product: true`) are each earning their place | ✅ pass | Exactly one, in the CTA (L258). Well under the >8 stuffing threshold. Deletion rule applied: remove it and the closing section loses its purpose. `brief.md` §Product features to mention says the product link belongs only in the closing CTA, and the draft obeys, zero AI-tool mentions inside the eleven picks. |
| Internal links (count: `4` blog-post links + 1 site-page CTA link) exist per `blog-craft.md` | ✅ pass | Unchanged from v1 and re-verified: `/note-taking-methods` (L18), `/cornell-note-taking-method` (L215), `/charting-method-note-taking` (L216), `/best-notebooks-for-note-taking` (L239), `/ai-tools` (L258). All root-relative, zero trailing slashes (correct for `blog.trailing_slash: false`), all four blog targets exist in `content/blog/`. First internal link (L18) precedes the first external link (L55), as `blog-craft.md` §Internal linking requires. |
| Every internal blog link is root-relative, not absolute | ✅ pass | Grep for `olgapak.com` returns zero hits. |
| External links (count: `6` unique non-product URLs / `9` rendered anchors) each point to reputable sources | ⚠️ partial | Unchanged from v1. Sources and anchors correct; count runs one unique URL over the 3–5 budget. Still logged `minor` I-5, still optional, still a Stage 3d judgment call. |
| Target keyword appears 2–8 times in body (actual count: `3`) | ✅ pass | Exact phrase at L14, L22, L63, plus the title. Mid-band, no stuffing. Related-form "note taking / note-taking" reads naturally for a 2,838-word post on this topic. |

**§3.5 forbidden external links to SERP competitors. ✅ PASS, zero violations.** Re-run in full against `research/serp.md` §"Selected results analyzed". The forbidden set is `penaddict.com`, `nytimes.com/wirecutter`, `jetpens.com`, `pilotpen.com.au`, `bastionboltactionpen.com`, `gentlemanstationer.com`, `smallstuffcounts.com`.

| Line | URL | In forbidden set? | Verdict |
|---|---|---|---|
| 55, 135 | `reddit.com/r/pens/.../1otlbx6/` | No | ✅ allowed |
| 75 | `uniball.com.au/uni-super-ink/` | No, and it is the harvested primary source (`serp.md` §Citations harvested row 4, `primary_source`) | ✅ allowed, correct routing around Wirecutter |
| 147, 219 | `reddit.com/r/pens/.../1lovocm/` | No | ✅ allowed |
| 173 | `reddit.com/r/pens/.../1micc41/` | No | ✅ allowed |
| 227, 235 | `reddit.com/r/notebooks/.../1v4agc3/` | No | ✅ allowed |
| 249 | `reddit.com/r/pens/.../1u85stl/` | No | ✅ allowed |
| 71, 83, 95, 107, 119, 131, 143, 155, 167, 181, 195 | `https://www.amazon.com/dp/<ASIN>` inside `[EXTERNAL_LINK_NEEDED:]` markers | No | ✅ not yet rendered links; resolved at Stage 3d |

The draft still names Pen Addict in prose (L87, L99, L111) and Wirecutter once (L159) **without linking either**, which `facts.md`'s "do not link" annotations require. Confirmed by grep: no `penaddict.com`, no `nytimes.com`, no `jetpens.com`, no `bastionboltactionpen.com`, no `smallstuffcounts.com` anywhere in the draft.

**§3.8 invented-number check. ✅ PASS.** Greped for audience-size ranges, "N+" adoption claims, and migration/volume ranges. Zero hits of any pattern.

**Targeted check 3, fabricated numbers. ✅ PASS, all standing bans still clean in v2.** Greped again on the revised file: zero prices or currency symbols (`\$[0-9]`, `£`, `€`), zero "I tested N" framing, zero Ritsumeikan / memory claims, zero Mueller & Oppenheimer, zero Reddit write-out-length figures (`metre`/`1,600`/`12,500`/`165 page`), zero dry-time seconds or lab units. The gsm example at L235 still carries the cheap-versus-expensive contrast with no currency figure. Fix 5 ("guides" for "roundups") actually improves the accuracy of the single number backing the post's number-one pick, closing I-8.

Unsourced / suspicious claims:
- One new, and it is `minor`, not a forcing condition: the L185 Muji rationale sentence. See I-13.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `3` | ✅ All three on L187 in the Muji H3, all three with valid non-trivial `\| source:` clauses, all three byte-identical to v1. |
| `[EXTERNAL_LINK_NEEDED:]` | `12` | ✅ **Expected, not a defect.** 11 per-pick product links (L71, 83, 95, 107, 119, 131, 143, 155, 167, 181, 195) + 1 load-bearing Sakura archival-ink link (L171). `custom-instructions.md` §Content policy forbids `[AFFILIATE-LINK-PENDING:]` and requires real untagged `/dp/<ASIN>` links, which the writer has no browser to find. All 12 resolve at Stage 3d. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | ✅ Correct. All four planned internal links resolved to real posts. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | ✅ Exact match. |

**Targeted check 4, `[VERIFY:]` source-clause validation. ✅ ALL THREE PASS, unchanged.**

| # | Claim | `\| source:` clause | Valid? |
|---|---|---|---|
| 1 | the Muji Gel Ink Ballpoint uses gel ink rather than oil-based ballpoint or hybrid ink | `brief.md anchor-brand list; facts.md §Rejected/not verifiable flags Muji as absent from all 7 studied SERP results` | ✅ Names two real files and two real sections; both check out (`brief.md` L42, `facts.md` L85). Non-trivial. |
| 2 | the tip sizes Muji offers in this line | `no facts.md entry, needs Muji's own product page` | ✅ An honest disclaimer of the shape `blog-craft.md` sanctions, and it names the resolution path. |
| 3 | whether Muji sells refills for this pen separately | `no facts.md entry, needs Muji's own product page` | ✅ Same, valid. |

Zero missing clauses, zero blank clauses, zero "TBD", zero claim-text repeats. The §4.4 forcing condition does **not** fire. Critically, fix 2 added prose *above* these markers without absorbing, weakening, or pre-empting any of the three claims they hold, which is exactly what `review-v1.md` §9 item 2 demanded.

**Marker-shape problems.** None. Greped for `\[Verify:`, `\[verify:`, `\[EXTERNAL_NEEDED:`, `TODO`, `TBD`, `[LINK`, `[SOURCE`, `AFFILIATE-LINK-PENDING`. Zero hits. Every marker uses the canonical shape the Phase 4 action-items grep expects.

**§4.2 image-slot diff.** 4 draft `[IMAGE:]` against 4 outline in-post slots.

| Line | Concept | Type | Outline slot | Match? |
|---|---|---|---|---|
| 46 | ink families on a smooth/wet ↔ fast-dry/firm axis + tip widths at relative thickness | `remotion` | after H2 2 + 1 paragraph | ✅ |
| 67 | one sentence written five times in five ink types | `ai-prompt` | after H2 3 + 1 paragraph | ✅ |
| 225 | three labelled paper samples: feathering / bleeding / ghosting | `ai-prompt` | after H2 5 + 1 paragraph | ✅ |
| 247 | late-night desk, pen graveyard beside finished notes | `ai-prompt` | after H2 6 + 1 paragraph | ✅ (now + 2 short paragraphs, see §10) |

All four use the canonical shape. Type selection matches `custom-instructions.md` §Image style: one `remotion` for a genuine diagram, three `ai-prompt` for scenes and samples. No blanket conversion.

**§4.2a featured-image hygiene. ✅ PASS.** No draft `[IMAGE:]` carries `Suggested filename: featured.<ext>` and none duplicates the outline's featured concept. The featured slot correctly stays out of the body, which is right for `wordpress-rest` where it ships as `featured_media`. The "featured is always `ai-prompt`" rule is respected by omission.

**§4.2b image-placement hygiene. ✅ PASS.** No `[IMAGE:]` is immediately followed by a heading line in v2. The L247 slot is followed by a blank line and then the bullet list at L249. The L67 slot is followed by the H3 at L69 and mechanically trips the check, but is not flagged: the approved outline specifies this exact position and the image illustrates evidence the prior sections establish, which is the check's own stated exception. Identical handling to iteration 1, recorded so it is not re-litigated.

**§4.2c table-redundant chart.** Mechanically triggers on the L46 `remotion` slot because the H2 1 shortlist table falls inside the ±20-line window. **Judged a false positive and not logged**, unchanged from iteration 1: the table is a pick-by-pick shortlist (Pen / Best for / Catch), the diagram is a smooth-wet ↔ dry-firm axis with tip widths at relative line thickness. Zero content overlap, and the diagram does the one thing a table cannot.

## 5. Word count

- Draft: `2,838` words (body prose, markers stripped, from the intro through the end of the CTA, excluding frontmatter and excluding the `## FAQ` block)
- Outline target: `2,980` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `-4.8%` (was `-6.8%` at v1)
- Band: `within ±10% = pass, no issue logged`

Supporting measurements: raw `wc -w` on the whole file = 3,822. Body span raw = 3,415, dropping to 2,838 once the 12 `[EXTERNAL_LINK_NEEDED:]`, 3 `[VERIFY:]`, and 4 `[IMAGE:]` marker bodies are stripped. The FAQ adds 347 words, correctly excluded per the outline and SKILL §5. The whole post lands inside `plan.md`'s 2,600–3,200 band and inside `blog-craft.md` §Post type matrix's 2,000–3,000 for transactional. Independently matches the editor's own 2,838 count.

Per-section against the outline's allocations, for awareness (no issue logged, the total is clean):

| Section | v1 | v2 | Outline | Delta |
|---|---|---|---|---|
| Intro | 161 | 161 | ~200 | -20% |
| H2 1 | 292 | 294 | 250 | +18% |
| H2 2 | 339 | 338 | 400 | -16% |
| H2 3 | 1,171 | 1,205 | 1,150 | +5% |
| H2 4 | 273 | 272 | 250 | +9% |
| H2 5 | 269 | 277 | 330 | -16% |
| H2 6 | 192 | 204 | 300 | -32% |
| CTA | 81 | 80 | ~100 | -20% |

H2 6 remains the thinnest section relative to plan at -32% (improved from -36% by fix 8's added question). All four outline beats are present and the section now carries a question, a bullet list, and a cited quote. Since the total is inside ±10% and the section passes every rhythm and sourcing check, this stays `minor` (I-11) and does not block `approve`.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ pass | All 23 base phrases greped; `voice.md` adds none. |
| Zero em-dashes (`—`) | ✅ pass | Zero, and the eleven comma-form H3 headings survived the revision. |
| En-dashes (`–`) only in numeric ranges | ✅ pass | Zero en-dashes in the file. |
| First-person throughout | ✅ pass | No `one` / `users` / `stakeholders` drift. |
| Active voice | ✅ pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | ✅ pass | See §2. Every H2 now carries at least two. |
| ≥1 bullet list per ~300 words | ⚠️ improved, still short | 3 true `- ` lists / 11 bullets (L48–51, L231–233, L249–252) across 2,838 body words; the floor implies ~9 lists. Up from 2 lists / 7 bullets at v1. H2 3 still runs 1,205 words without one, mitigated by 2 markdown tables and 33 bold-label beats. Stays `minor` I-9, and I do NOT want this closed by bullet-ifying the H3 picks (see §8). |
| ≥1 standalone-question paragraph per major section | ⚠️ improved, still short | 3 of 6 body sections (H2 2 at L53, H2 5 at L229, H2 6 at L243), up from 1 of 6 at v1. H2 1, 3 and 4 still lack one, but H2 1 is a 3-sentence lead-in to a table, H2 3 is eleven templated H3s, and H2 4 is a table plus one caveat, so none of the three is a natural home for one. Stays `minor` I-10 with the severity reduced; forcing questions into those three would read as filler. |
| ≥1 concrete number or named example per major section | ✅ pass | H2 1 "four of the seven guides" + 11 named pens; H2 2 "0.38, 0.5 and 0.7 mm"; H2 3 named pens and cited quotes throughout; H2 4 seven named picks; H2 5 "70 gsm / 100 gsm"; H2 6 "three gel pens in a month". |
| No em-dash overuse | ✅ pass | Zero em-dashes, vacuously clean. |
| Visible sentence-length variation in every section | ✅ pass | Every section's stddev is between 5.19 and 16.99, all far above the <4 flag. Shortest sentences run 2–4 words ("Same pen. Different paper." L223, "It's narrower." L61), longest 45–48. |

Floor verdict: 9 of 11 rows pass outright, and the 2 that fall short are both materially better than v1 (bullet lists 2→3, question sections 1→3). Both are `minor`, neither is a Step 4 forcing condition.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick. **Zero critical, zero major.** All six remaining rows are `minor`, and none requires another writer pass.

| # | Section (H2) | Line | Severity | Issue | Fix instruction |
|---|---|---|---|---|---|
| I-13 (new) | The 11 best pens for note taking | 185 | `minor` | The new Muji rationale sentence is positioning, as instructed, but two of its clauses read as checkable product-design assertions rather than brand positioning: "nothing printed down the barrel" and "no restyling every couple of seasons". The outline's §H3 3.10 "Why" line says only "valued for consistency and understated design", and `facts.md` L85 is explicit that Muji has zero support in the research set. Neither clause is one of the three things the `[VERIFY:]` markers hold, so it is not a marker-shape defect, but it is an unsourced concrete claim about the one conditional pick. | No writer pass needed. **Stage 3d action:** the Muji product page is already being opened to resolve the three `[VERIFY:]` markers, so confirm the barrel-branding and product-line-consistency claims on the same visit. If the page contradicts either, soften L185 to the outline's own wording ("valued for consistency and understated design") rather than deleting the sentence, the four-beat shape must survive. If the pick is cut entirely, the sentence goes with it. |
| I-14 (new) | (whole post) | 53, 229, 239, 243 | `minor` | The two questions added by fix 8 both open with "So", matching the pre-existing L53 question, so all three standalone questions now share one construction. Worse locally: H2 5 has two paragraph-initial "So" paragraphs ten lines apart (L229 "So which one is actually happening on your page?" and L239 "So pick the pen you like..."). Individually fine, but four paragraph-initial "So" in one post is a visible tic and the exact kind of uniformity a humanization pass exists to catch. | Carry-forward to Stage 4 / `humanize-text`, not a revision. Cheapest fix is to re-open one of the two H2 5 paragraphs without "So", e.g. L229 → "Which one is actually happening on your page?" or L239 → "Pick the pen you like, then pick...". Do not delete either question, both earn their place and closing I-10 was the point. |
| I-3 | (frontmatter) | 4 | `minor` | The excerpt carries "11 pens", but the Stage 1c.5 Muji-cut sweep list names only four places (title, §H2 3 heading, intro preview, §H2 1 table). The excerpt is a fifth. If Muji is cut and only the four listed places are edited, the meta description ships saying 11 while the post has 10. | No change to the draft. Editor action: extend the Stage 3d Muji-cut checklist to five places, adding the frontmatter excerpt (L4). Fix 1 already removed the sixth (the §H2 4 opener), so the sweep shrank from six back to five. |
| I-4 | Gel, ballpoint, rollerball or fineliner? | 75 | `minor` | The Uni-ball citation still ships as `http://uniball.com.au/uni-super-ink/`, not HTTPS. The outline's external link plan says "Verify it resolves (prefer HTTPS) at Stage 3d". An `http://` outbound link on an HTTPS page is a quality nit and may redirect or fail. | Stage 3d: confirm the page resolves and switch to `https://` if the HTTPS version serves the same content. If neither scheme resolves, drop the link and keep the claim attributed in prose ("Uni-ball says..."), or swap to `[EXTERNAL_LINK_NEEDED:]` for the manufacturer's current Super Ink page. Do not silently delete the claim. |
| I-5 | (whole post) | 55, 75, 135, 147, 173, 219, 227, 235, 249 | `minor` | Six unique non-product external URLs across nine rendered anchors, against `blog-craft.md` §External linking's 3–5 budget. Product links correctly excluded per `custom-instructions.md`. Three URLs are each linked twice (1otlbx6 at L55/L135, 1lovocm at L147/L219, 1v4agc3 at L227/L235). Five of the six are Reddit, a thin authority profile for a buying post, though every quote is load-bearing. | Optional, Stage 3d judgment call. If trimming: drop the second instance of one repeated Reddit URL (L135 is the best candidate, the same thread is linked at L55 and the u/StillPissed quote is attributed by username inline either way). Do NOT drop the uniball.com.au link, it is the post's only manufacturer primary source. Do not add links to hit a number. Note that if the Muji pick survives, its product page becomes a seventh unique URL, which is when this actually needs deciding. |
| I-11 | The honest limits nobody mentions | 241–252 | `minor` | 204 words against the outline's 300 allocation, -32%, still the thinnest section relative to plan. All four beats are present but "Fineliners are art tools first" and "Smooth and fast-drying are pulling against each other" remain one sentence each. This is the post's trust-earning section and its strongest differentiator from the SERP. | Optional, and explicitly NOT worth another revision loop. If anyone touches it at Stage 4, add one concrete sentence to each of those two bullets: what the reader should actually do about the fineliner problem, and the physical reason smooth and fast-drying conflict (ink formulated to set on contact is the same property that costs it glide). Both are already established in H2 2, so it is restatement in a new frame, not a new claim, and needs no new source. |

Resolved since iteration 1 and closed: I-1 (`major`), I-2 (`major`), I-6, I-7, I-8, I-12. Partially closed and severity-reduced: I-9, I-10.

## 8. What the draft does well

Three specific strengths to preserve. Since the verdict is `approve`, these are aimed at Stage 3d, Stage 4a image generation, and the humanize pass, any of which could break them accidentally.

- **The eleven comma-form H3 headings are a deliberate fix that must never be reverted.** The approved outline writes all eleven picks as `Uni-ball Jetstream RT — best overall` with em-dashes. The writer converted every one to a comma (L69, 81, 93, 105, 117, 129, 141, 153, 165, 179, 193) in v1 and correctly did not regress a single one in v2. If any later pass re-syncs headings against the outline, or if a Gutenberg conversion round-trips the headings, keep the commas. Eleven em-dashes is the single largest regression risk left in this post.
- **The Sakura Pigma Micron entry (L165–L177) is the post's competitive moat and must not be softened.** It leads with the honest catch instead of burying it, quotes u/asdqqq33 verbatim from `facts.md`, immediately balances it with the long-time-users counterpoint from `research/reddit.md`, and lands on "Pressure is the variable, not the pen." That directly contradicts Wirecutter's uncaveated fineliner pick, which `research/reddit.md` identifies as the biggest gap in the SERP. The `[EXTERNAL_LINK_NEEDED:]` at L171 is load-bearing: it backs both the archival-pigment claim and the craft-work positioning, so if Stage 3d cannot find Sakura's own page, the sentence needs rewording, not an unmarked publish.
- **The price, test-count and fabrication discipline is flawless and survived the revision untouched.** Four separate temptations in the source material (Wirecutter's "62 researched / 37 tested", the £1-vs-£10 notebook comparison, the Reddit write-out-length figures, the Ritsumeikan memory claim) are all still absent in v2. The gsm example at L235 keeps the cheap-versus-expensive contrast the argument needs ("a cheap 70 gsm notebook against a lovely 100 gsm one, and it was the expensive one that bled") with zero currency figures. Preserve that phrasing exactly; it is the hardest version of this to get right and a well-meaning edit could easily reintroduce a price.

Three more worth not breaking: the L61 tip-size passage ("A 0.38 is not better than a 0.7. It's narrower.") is the clearest anti-hype beat in the post; the H2 4 table's internal links (L215, L216) are woven into the "Why" cell text rather than bolted on as "see also", the exact shape `blog-craft.md` §Internal linking asks for; and L207's new count-free opener ("The picks above, sorted by...") is deliberately count-free, so do not "helpfully" restore a number there during the Muji sweep.

## 9. Instructions for writer

N/A. Verdict is `approve`, so there is no `mode=revise` dispatch. The six remaining `minor` issues are Stage 3d, editor, or humanize-pass actions, itemised in §7's fix column and summarised in §10's do-not-break list. No further writer pass is warranted, and the max-2-revise loop closes here.

## 10. Reviewer notes (free-form)

**On the verdict.** Every forcing condition in the SKILL's Step 4 tree is clean: no critical issues, no §2 structural delta, no forbidden phrases, no unsourced numeric claims, word count at -4.8% (inside ±10%), no forbidden-SERP link, no missing `| source:` clause, competitors module off so §3.6/§3.7 do not apply. `approve` also requires 0 major issues, and both of v1's majors are correctly closed. The revision was unusually disciplined: `diff -u` shows exactly the eight requested hunks with zero collateral edits, which is the cheapest possible thing for a reviewer to verify and the reason I could be confident nothing regressed.

**On the writer's flagged side effect (H2 6's `[IMAGE:]` now following two paragraphs).** Not an issue, and I would not change it. Three reasons. First, SKILL §4.2b only fires when the line after an `[IMAGE:]` is a heading; here L247 is followed by the bullet list at L249, so the check passes outright. Second, the specific concern, the image sitting between "Four things I'd want a friend to tell me before I spent anything." and the four things themselves, existed identically in v1 (the image was already between that line and the four bold beats), so this is not a regression, it is the pre-existing placement with one extra line above it. Third, the outline's "after H2 6 + 1 paragraph" is a placement heuristic, not a locked constraint, and both paragraphs above the image are one line each, so the visual gap between heading and image is still small. Leave it.

**On the Muji dependency, for Stage 3d.** The post is consistent at eleven today, and fix 1 shrank the cut-path sweep from six places to five: title (L2), excerpt (L4), intro preview (L20), §H2 3 heading (L63), and §H2 1 table (L28–L40, drop the Muji row). L207 no longer carries a count, and the word "eleven" is gone from the body entirely. Cutting the H3 also removes the post's only three `[VERIFY:]` markers and one `[EXTERNAL_LINK_NEEDED:]` product marker plus the new L185 sentence, which changes the action-items compile at Phase 4, worth noting so the counts do not read as drift later. My read on the odds is unchanged: `facts.md` L85 is blunt that Muji is absent from all seven SERP results and appears once on Reddit as a *paper* brand, so go in expecting to confirm from Muji's own product page or cut, not expecting corroboration. Note also that if the pick survives, the Muji page becomes an actual outbound link and pushes the non-product external count from 6 to 7, which is the point at which I-5 stops being optional.

**What the Stage 3d marker-resolution pass must NOT break.** This is the explicit approve-condition list; resolving the 16 markers is the only remaining work on the body, and each of these is a way that pass could silently undo an approved property.

1. **Zero em-dashes.** Do not reintroduce any, especially not by re-syncing the eleven H3 headings against the outline, which still carries them. Re-grep `—` after the pass; the correct count is 0.
2. **The three `[VERIFY:]` markers resolve to prose or to a cut, never to silence.** If Muji's page confirms the ink type, tip sizes, and refill availability, write those in and delete the markers. If it does not, cut the H3 and run the five-place count sweep in the same pass. Do not delete a marker while leaving its unverified claim standing.
3. **The eleven product links ship real and untagged.** Clean `https://www.amazon.com/dp/<ASIN>` with no affiliate tag, or a brand/retailer page where Amazon lacks the genuine item, per `custom-instructions.md` §Content policy. No `[AFFILIATE-LINK-PENDING:]`, no invented ASINs, no dead links, and no affiliate disclosure added (the Associates program is not live). Product links stay outside the 3–5 external budget.
4. **The Sakura link at L171 is load-bearing, not decorative.** It backs the archival-pigment claim and the craft-work positioning. If Sakura's own page cannot be found, reword the claim rather than publishing it unsourced.
5. **No prices, no test counts, no dry-time numbers, no Reddit write-out-length figures, no Ritsumeikan claim.** Resolving links means visiting product pages that display prices; do not let one land in the prose. Re-grep `\$[0-9]`, `£`, `€` after the pass; the correct count is 0.
6. **Do not link any of the seven SERP top-10 domains** (`penaddict.com`, `nytimes.com/wirecutter`, `jetpens.com`, `pilotpen.com.au`, `bastionboltactionpen.com`, `gentlemanstationer.com`, `smallstuffcounts.com`). Pen Addict and Wirecutter stay named-but-unlinked. This is the easiest rule to break while hunting for a product page.
7. **Internal links stay root-relative with no trailing slash** (`/note-taking-methods`, not `https://olgapak.com/note-taking-methods/`).
8. **Marker counts after the pass should be 0 / 0 / 0 / 4**, with the four `[IMAGE:]` slots surviving into Stage 4a with their `Type:` values intact, one `remotion` and three `ai-prompt`, and the featured slot staying `ai-prompt` and out of the body.

**Two items for Gate 2 rather than now.** I-14's four paragraph-initial "So" is the only prose tic I would want a human to glance at in the rendered preview, and I-11's thin H2 6 is a "could be better, is not wrong" call that only matters if the rendered section looks stubby next to the others. Neither justifies holding the post.

**One thing to watch, not an issue.** The FAQ runs 347 words against the outline's ~150 estimate. It is ungated and each of the five answers is a reasonable 60–75 words for FAQPage schema, so there is nothing to fix. Flagging only so the +131% against the outline estimate is not read as unexplained drift at a later gate.

**Publishing reminder, per `custom-instructions.md`.** This approval is a Stage 3b content verdict and is not Gate 2 approval and not authorization to publish. The WordPress post stays `draft`, the Rank Math focus keyword is a manual wp-admin step before publish, and going live remains the operator's own action.
