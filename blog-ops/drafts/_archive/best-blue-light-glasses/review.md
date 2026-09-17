# Review: best-blue-light-glasses draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/best-blue-light-glasses/draft-v2.md`, `blog-ops/drafts/best-blue-light-glasses/review-v1.md` (iteration-1 audit, verified instruction by instruction), `outline.md`, `facts.md`, `brief.md`, `plan.md`, `research/serp.md`, `research/reddit.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/best-blue-light-glasses/draft-v2.md` (word count: 3,206 body prose net of marker text, excluding frontmatter and FAQ; outline roll-up target: ~3,210)
- Outline: `blog-ops/drafts/best-blue-light-glasses/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1-3 sentences): All twelve iteration-1 revision instructions landed verbatim and in the right places, including all four `major` sourcing fixes (the Swanwick efficacy clause, the FAQ "harmless" safety claim, the misstated X-thread metric, and the over-broad AAO attribution), and a fresh independent pass finds zero `critical` and zero `major` issues. Every gated check passes: 0 forbidden phrases, 0 em-dashes, 0 unsourced numeric claims, word count at -0.1%, no forbidden SERP-competitor links, both `[VERIFY:]` markers carrying non-trivial ` | source:` clauses, all 9 purchase-link markers intact, structure identical to the approved outline. What remains is four `minor` polish items that Stage 3c (humanization) and Stage 3d (marker resolution) handle by design.

**Iteration counter:** this is revision pass `2` of `max 2`. Verdict is `approve`, so no escalation is triggered and no further writer pass is dispatched.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | pass | Warm, first-person, level rather than smug, exactly the `authors.md` voice notes. The self-deprecating beat survives the revision intact at line 236 ("I ignore it roughly four times out of five"). Rhetorical hooks now sit in six of seven body sections (44, 83, 213, 236, 250). Reading level improved: the intro's two 40-word sentences were split per §9 item 9, dropping intro mean sentence length from 30.8 to 19.7 words. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `one could\|one should\|users are\|stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `was (scanned\|checked\|monitored\|built)`: 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 8.1, H2 1 12.2, H2 2 6.6, H2 3 7.8, H2 4 10.1, H2 5 11.2, H2 6 18.5, outro 12.0, FAQ 9.8. All well above the 4-word floor. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Grep of the full `writing-standards.md` §Forbidden phrases list plus `voice.md` §Additional forbidden phrases (which adds none): 0 hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—'` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–'` returns nothing. No en-dashes at all. |
| Intro jargon check (§Insider-jargon translation) | pass | No SEO/marketing jargon in the intro. `audience.md` defines no additional niche-jargon list. The eyewear terms that could have gone unexplained ("anti-reflective coating", "colour distortion") are still each defined on first use in the body (lines 67, 68). |
| Intro-hook over-anchoring | n/a | The hook ("By 9pm my eyes felt like sandpaper") is a personal scene, not a time-bound news peg. It recurs once at line 262 as a deliberate bookend, the correct use. |
| Product code-literal grep (`modules.product` on) | pass | `blog-ops/profile/product.md` defines no code constants; the only product surface is the tool names, used in prose. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | `adapters/publish/frontmatter/wordpress.md`: `title` (52 chars, inside the 50-60 rule, matches outline exactly), `date: 2026-09-09`, `excerpt` (138 chars, ≤160), `tags` (productivity / students / education, all live WP terms per `blog.md` §Tag taxonomy), `authors: Olga Pak` (matches `authors.md` byline), `draft: true`. Correctly carries NO `cover`/`heroImage` field per that template's §No cover/heroImage field. FAQPage JSON-LD sub-check skipped: the wordpress-rest adapter treats it as a plugin concern. |
| Title in frontmatter matches outline "Final title" exactly | pass | `Best Blue Light Glasses for Students: 9 Honest Picks`, character-identical. |
| Slug / meta description match outline | pass | Slug is the draft directory (`best-blue-light-glasses`); `excerpt` matches outline "Final meta description" verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | Unchanged from draft-v1. Draft H2s in order: 1 What the best blue light glasses can and can't do / 2 How I picked these blue light glasses / 3 The 9 best blue light glasses for students / 4 Clear or amber: which pair do you actually need? / 5 What actually helps tired eyes, and it isn't lenses / 6 How to buy a pair without getting upsold / 7 The hours are the real problem, not the lens (the outline's Closing CTA block) / 8 FAQ. All 9 H3 picks under H2 3 match outline H3 3.1-3.9 verbatim and in order. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Lines 14, 16, 18, 20 are the 4 outline-specified paragraphs (2 / 2 / 2 / 1 sentences after the §9 item 9 splits). Line 22 is the mandatory affiliate disclosure, counted as post furniture rather than a fifth paragraph per outline §Intro structure. Intro internal links: 2, at the ≤2 ceiling, both woven into a sentence rather than stacked as a see-also list. |
| Affiliate disclosure placement + wording (locked, `plan.md` §Affiliate disclosure + `custom-instructions.md` §Content policy) | pass | Line 22, italic, LAST paragraph of the intro, immediately before the first `##` at line 24. Byte-compared against `custom-instructions.md`: character-identical, including "at no extra cost to you." Position and wording both survived the revision untouched. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | All 7 body H2s carry a concrete number or named example plus visible burstiness. Standalone-question paragraphs now cover 5 of 7 body sections after the §9 item 11 addition at line 83; H2 2 and the outro remain without one, which iteration 1 explicitly signed off as by-design. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 questions, verbatim matches of the outline's 5, in order. Trimmed to three sentences each per §9 item 7 without dropping a single sourced clause. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | n/a | Adapter is `wordpress-rest`: no JSON-LD requirement at the adapter level, sub-check skipped per SKILL §2.1. |
| FAQ is the last block (no prose after the final answer) | pass | File ends at line 286 with the last FAQ answer. Nothing follows. |
| Outro / CTA paragraph present, links the blog CTA target with an action anchor | pass | Line 264: `[Try my free AI tools](/ai-tools)`, matching `blog.md` §Primary CTA hook, followed by a Text Summarizer example tied to the post's own thesis. Two short paragraphs, no feature re-list, no prices. |

Structural deltas vs outline (if any):
- None. Every H2, every H3, the intro shape, the disclosure, the FAQ set and the CTA block match the approved outline. The revision changed no structural element, as instructed.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass | Was `fail` at iteration 1; all four failures are fixed. "265 replies" (line 234) now matches facts.md's 265-reply thread and carries the `@lesrevenants967` handle; the Peepers age bracket is gone (line 175); the "30 centimetres" invention is gone (line 230). Every remaining number traces: 17 RCTs, six/three/three sleep split, under a day to five weeks, 30+ pairs, 20-20-20, 25 inches, two to three hours before bed. The r/Biohackers cortisol detail now carries the `[VERIFY:]` marker §9 item 12 asked for. |
| Cochrane + AAO claims quoted at exactly the strength facts.md records, in both directions | pass | Line 36 still quotes "may not attenuate symptoms of eye strain with computer use" verbatim inside the anchor, and line 38 still blocks the overstatement ("Not 'they do nothing'"), now as its own paragraph. Line 42 keeps sleep at "indeterminate, not disproven". Line 34's table cell preserves the very-low-certainty grading. The hardest thing in the post, still right. |
| No medical claims (brief.md §Avoid list): no prevention, no cure, no "fixes eye strain" | pass | The iteration-1 exception is closed: FAQ Q1 (line 270) now reads "Cochrane found adverse effects were infrequent, so for most people this is a comfort decision rather than a medical one", which matches facts.md §Statistics row 5 instead of contradicting it. No sentence anywhere claims prevention, cure or damage protection; lines 274 and 282 actively refute those framings. No reader is told to skip an eye test: line 282 sends changing vision to an eye exam. |
| No efficacy grounding in any pick's rationale (`plan.md` §Key sections item 3) | pass | Was `fail` at iteration 1. The Swanwick entry (line 199) now grounds in the lens itself ("a genuinely dark amber lens rather than a clear one pretending") with no generalization about what wearers feel. Re-audited all 9: Sojos colour shift, Tijn price/colours, Felix Gray AR coating and Rx, Warby Parker frames and try-on, EyeBuyDirect Rx price band, Zenni built-in filter, Peepers magnification, GUNNAR tint preference with the explicit "not proof it reduces eye strain" line, Swanwick tint visibility. Zero efficacy claims across the section. |
| Nothing from `facts.md` §"Rejected / not verifiable" appears | pass | Grep for `macular`, `380`, `nanometre`, `luxottica`, `99%`, `99 to 100`, `can't believe the difference`, `$`: 0 hits each. Line 201 names Swanwick's blocking percentages as unverified marketing without repeating a number; lines 58 and 60 refuse to rank on the number at all. No price in dollars anywhere. The r/sleep astroturfed testimonial is still absent. |
| Competitor mentions framed "best for [segment]" | n/a | `modules.competitors: false` in `config.yaml`; no §Competitor facts table exists. §3.6 and §3.7 skipped by their own guards. |
| Product mentions (count: 2) are each earning their place | pass | "building my own AI tools" (line 16, the plan-sanctioned expertise statement) and the CTA (line 264). Zero mentions inside the picks per `plan.md` §Product positioning. Neither survives the deletion test. |
| Own-product pricing claims (§3.9) | pass | No `$`, no usage cap, no tier breakdown anywhere. Line 264 says "free AI tools" and nothing more. |
| Soon-to-ship feature gap check (§3.10) | n/a | `brief.md` §Soon-to-ship features: None. |
| Internal links (count: 5 blog posts + 1 CTA page) land in their outline-assigned sections | pass | `/how-to-reduce-screen-time` + `/how-to-take-notes-on-ipad` in the intro, `/how-to-stop-doomscrolling` + `/screen-free-hobbies` in H2 4 (line 219), `/digital-detox-plan` in H2 5 (line 238), `/ai-tools` in the CTA. Matches outline §Intro internal links row for row. First internal link (line 18) precedes the first external link (line 36). |
| Every internal blog link is root-relative `/<slug>` (no trailing slash, `blog.trailing_slash: false`), not absolute | pass | All 6 root-relative, no domain, no trailing slash. Grep for `https://olgapak.com/`: 0 hits. All 5 target slugs exist in `content/blog/`. |
| External links (count: 4) each point to reputable sources; anchor text = literal claim | pass | pubmed.ncbi.nlm.nih.gov/37593770 (line 36), aao.org (40), academic.oup.com (211), aoa.org (256). Each URL used exactly once, each anchor a literal claim, matching outline §External link plan row for row. The AAO page backs facts in H2 1, H2 4 and H2 5 and is linked once, then referred to in prose. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | pass | Forbidden set from `research/serp.md` §Selected results analyzed, all 8: health.com, reddit.com/r/sleephackers, cnn.com, nytimes.com/wirecutter, optimizeyourbiology.com, health.clevelandclinic.org, pubmed.ncbi.nlm.nih.gov, aao.org. The draft links two of those hosts, and both take the documented allowlist exception: pubmed.ncbi.nlm.nih.gov is NLM and `.gov` (blog-craft.md §Authoritative-site allowlist, Government / academic bullet), and aao.org is a professional medical body classified `auth_allowlist` in serp.md §Citations harvested and in outline §External link plan, not a realistic ranking competitor for this keyword. The other six hosts get 0 links. Reddit and X voices are attributed in prose and unlinked at lines 215, 234 and 244, exactly as the outline required. No Amazon URL anywhere: grep for `amazon` inside a URL returns 0 hits. |
| Target keyword appears 2-8 times in body (actual count: 6) | pass | 6 body occurrences of "blue light glasses" excluding frontmatter and FAQ (10 including both). Not stuffed, not under-optimized. |

Unsourced / suspicious claims:
- None that block. Two claims sit behind `[VERIFY:]` markers by design (lines 40 and 215, see §4 and §10 for the keep-or-cut judgment on each).
- `draft-v2.md:223`, "The mechanism behind gritty evening eyes is a dry cornea, not the colour of the light", issue: a defensible plain-English rendering of facts.md's AAO row ("blinking less sometimes causes eye strain"), but stated flatly as fact in a section opener rather than attributed. The attribution arrives four lines later at 227. Logged `minor` in §7, not a sourcing failure.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `2` | Yes, both canonical and both legitimate. Line 40: `[VERIFY: sunlight is a far stronger source of blue light than a computer screen \| source: writer's general knowledge, no facts.md entry]`, terminal to its sentence, ` \| source:` present, and "writer's general knowledge, no source" is a value SKILL §4.4 names explicitly as honest. Line 215: `[VERIFY: r/Biohackers OP's null-result quote and cortisol logging \| source: research/reddit.md §Thread 2]`, terminal to its paragraph, ` \| source:` present, and the named file exists with the quote verbatim at `research/reddit.md:41` under "### 2. I wore blue-light blocking glasses at night for 1 weeks straight". The section label "§Thread 2" is a paraphrase of that heading rather than a literal match, which is a naming nit, not a broken attribution. Neither marker is a competitor pricing/feature claim, so §3.7's prohibition does not apply (and `modules.competitors` is off regardless). |
| `[EXTERNAL_LINK_NEEDED:]` | `9` | Yes. Exactly one per pick, all 9 picks covered, all using the outline's shape `[EXTERNAL_LINK_NEEDED: purchase link for <product>, Amazon /dp/<ASIN> with tag op01e-20, or brand product page]`. `<ASIN>` is a literal placeholder in every one: no invented ASIN, no invented URL, no `[AFFILIATE-LINK-PENDING:]`. Verified one-to-one against the 9 `### ` pick headings at lines 97-195. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes, none needed: all 5 planned internal links resolve to real published slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Yes. Outline §Image placement plan specifies 5 total = 1 frontmatter featured + 4 in-post; the draft carries the 4 in-post placeholders and correctly emits no inline featured placeholder (§2a passes; no `featured.<ext>` filename, no featured concept duplicated). Concepts and types match the plan 1:1: ai-prompt after H2 1 + 1 paragraph (line 28), ai-prompt after H2 3 + 1 paragraph (79), remotion after H2 4 + 1 paragraph (209), ai-prompt after H2 5 + 1 paragraph (225). §2b passes: no placeholder is immediately followed by a heading. §2c passes: the one `remotion` slot is a two-circle concept diagram, not a chart, and the nearest markdown table is 114 lines away. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `AFFILIATE-LINK-PENDING`: 0 hits.

## 5. Word count

- Draft: `3,206` words (body prose, excluding frontmatter and the `## FAQ` block, net of marker text; 3,512 with marker text included)
- Outline target: `3,210` words (§Word count roll-up "Total estimate", same basis)
- Delta: `-0.1%`
- Band: `within ±10% = pass, no issue`

FAQ block, counted separately and not part of the gated total: `388` words, down from 439 at iteration 1. Not logged as an issue this pass: the writer showed that `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §7's three-sentences-per-answer rule plus review-v1's own "preserve every sourced clause" constraint floors the block at roughly this length, and all five answers are now three sentences. The constraint, not padding, sets the number.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists grepped. |
| Zero em-dashes (`—`, grep returns nothing) | pass | 0. |
| En-dashes (`–`) only in numeric ranges | pass | 0 en-dashes in the file. |
| First-person throughout | pass | Consistent `I` / `you`, no `one` / `users` / `stakeholders`. |
| Active voice | pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | pass | Every H2 carries a concrete number or named example, and burstiness in all of them. |
| ≥1 bullet list per ~300 words | pass (soft floor, mitigated) | 4 bullet lists / 18 bullet lines (46-50, 66-71, 229-232, 252-256) across 3,206 body words, against a literal floor of ~10 lists. The floor exists to break up walls of text, and that job is done here by 2 markdown tables plus the 9 picks' bold-labelled Best for / The catch / Skip if blocks. Review-v1 asked for exactly one added list (§9 item 10) and explicitly forbade bulletizing the picks; that instruction landed at lines 46-50. No further action wanted, and this is not logged in §7. |
| ≥1 standalone-question paragraph per major section | partial | Present in H2 1 (44), H2 3 (83, added this pass), H2 4 (213), H2 5 (236), H2 6 (250). Absent from H2 2 and the outro, which iteration 1 signed off as by-design (the outro is two paragraphs on purpose). |
| ≥1 concrete number or named example per major section | pass | H2 1: 17 RCTs, six/three/three. H2 2: 30+ pairs. H2 3: 9 named products. H2 4: named quote plus the melatonin citation. H2 5: 20-20-20, 25 inches, 265 replies. H2 6: three named-source quotes. Outro: Text Summarizer. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Minimum per-section stddev is 6.6 words (H2 2), well clear of the 4-word floor. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 1 | 40 | `minor` | The paragraph is now 4 sentences, because the revision left the sourced AAO material and the unsourced sunlight sentence in the same block. `writing-standards.md` allows 4 "only when the argument genuinely needs them (rare)". This resolves itself either way at Stage 3d: if the sunlight claim is cut, the paragraph drops to 3. | If Stage 3d keeps the sunlight sentence, split the paragraph before "Sunlight is a far stronger source". If it cuts it, no action. |
| H2 4 | 219 | `minor` | Same shape: 4 sentences, mixing the AAO's evening advice with the two internal links. | Split after "which is also why it works better." so the internal-link pair starts a new paragraph. |
| H2 5 | 223 | `minor` | "The mechanism behind gritty evening eyes is a dry cornea, not the colour of the light" states a physiological mechanism flatly in a section opener. It is a fair rendering of facts.md's AAO blinking row and the attribution does arrive at line 227, but in a health-adjacent post the attribution should not trail the assertion by four lines. | Reword to "The mechanism the AAO points to is a dry cornea, not the colour of the light, which means the interventions that work are free and slightly boring." |
| H2 1 | 40 | `minor` | The `[VERIFY:]` marker text says "than a computer screen" while the prose it marks says "than any laptop". Harmless, but Stage 3d should not have to reconcile two wordings of the same claim. | No writer action. Stage 3d resolves against the prose sentence, which is the one that ships. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The two-directional Cochrane discipline at lines 36-38, now stronger for being split.** The anchor text carries "blue-light filtering spectacle lenses may not attenuate symptoms of eye strain with computer use" verbatim, and the next paragraph immediately blocks the opposite overstatement: "Note the wording. Not 'they do nothing', and the finding was graded low-certainty off trials running from under a day to five weeks." This is the single hardest passage in the post and it is right in both directions. Do not touch it at Stage 3c.
- **The repaired FAQ Q1 close at line 270.** "Cochrane found adverse effects were infrequent, so for most people this is a comfort decision rather than a medical one" replaces an unqualified "harmless" with the actual finding from facts.md §Statistics row 5. It keeps the reassurance while staying inside what the source supports, which is exactly the standard this post has to hit. Preserve verbatim.
- **The GUNNAR catch at line 189 and the affiliate honesty beat at line 52.** "Liking it is a preference, not proof it reduces eye strain. This brand also appeared in my research only through its own product page, not through an independent review", plus "the free habits further down this page have better evidence behind them than anything on the shopping list". Together these are the post's actual differentiator against every roundup on page one, and both survived the revision untouched.
- **What the revision did NOT break.** Every one of iteration 1's four `major` fixes landed without collateral damage: no structural change, no marker lost, no sourced clause dropped from the FAQ during the trim, and the affiliate disclosure at line 22 is still byte-identical and still the last thing before the first `##`.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`; no writer pass is dispatched. The four `minor` items in §7 are for Stage 3c (humanization) and Stage 3d (marker resolution), not for a revise round.

## 10. Reviewer notes (free-form)

- **Iteration-1 instruction audit, all 12 verified landed.** (1) Swanwick efficacy clause replaced with the supplied non-efficacy wording, line 199. (2) FAQ Q1 "harmless" replaced with the Cochrane adverse-events wording, line 270. (3) X quote reopened as "Under an X thread with 265 replies... @lesrevenants967", line 234, still unlinked. (4) AAO lead-in changed to "plus what it looks like in practice" and "30 centimetres" reworded to "half-arm's-length", lines 227 and 230; the 20-20-20 and 25-inch numbers untouched. (5) Plural "roundups" singularized at the four Wirecutter-only picks (77, 103, 115, 151) and correctly left plural where facts.md supports it (127, 139, 163, 175). (6) Peepers age bracket dropped, line 175. (7) FAQ trimmed to three sentences per answer, 439 to 388 words, every sourced clause intact. (8) All four over-long paragraphs split. (9) Both long intro sentences split, both internal links and anchor texts kept. (10) Bullet list added at 46-50. (11) Standalone question added at line 83. (12) `[VERIFY:]` appended to the r/Biohackers paragraph, line 215. Nothing was over-applied and nothing else moved.
- **Keep-or-cut judgment, line 40 sunlight claim: cut it on any friction, keep only if it sources in one lookup.** The claim is true and uncontroversial, but it is doing almost no work here. The AAO quote two sentences earlier already defuses the eye-damage fear, and the sentence is a grammatically standalone appendix that deletes with zero damage (and fixes the §7 4-sentence nit as a side effect). If Stage 3d wants to keep it, `https://www.aao.org/editors-choice/sunlight-exposure-reduces-myopia-in-children` is already in `research/serp.md` §Citations harvested as `auth_allowlist` and is adjacent, though it backs myopia prevention rather than relative intensity, so it would need the sentence reworded to match. My recommendation: do not spend a second lookup on it. Cut.
- **Keep-or-cut judgment, line 215 r/Biohackers null result: keep and resolve, do not cut.** This one is load-bearing. Outline H2 4 explicitly commissioned it as "the honest counterweight that a one-week self-experiment on the same subreddit found nothing at all", and it is the only thing balancing the u/ptarmiganchick "life-changing" quote three lines above it. Cutting it would leave the sleep section carrying a single glowing anecdote in a post whose whole argument is that the sleep evidence is split, which is precisely the medical-framing risk the brief warns about. Resolution is cheap: the quote is verbatim at `research/reddit.md:41` and the commenter pushback at line 217 is supported at `research/reddit.md:46`, so promoting the quote into `facts.md` §Quotes and deleting the marker is a one-minute editor action with no draft change. If for some reason it cannot be verified, the fix is not to cut it alone but to trim the ptarmiganchick quote alongside it so the section stays balanced.
- **The forbidden-link check deserves a note for the human at Gate 2.** Two of the draft's four external links (pubmed, aao.org) are hosts that appear in `serp.md` §Selected results analyzed. Both are allowlist-class and intentional, and iteration 1's review listed the forbidden set without them, which understated the check. Recorded properly here: the exception is deliberate, `.gov`/NLM for pubmed and professional-body class for AAO, and neither is a commercial competitor for this keyword.
- **Medical-safety posture is now clean in both directions.** No sentence overstates benefit, no sentence overstates "no benefit", the adverse-events row is represented, and the reader with changing vision is sent to an eye exam rather than a filter. This was the highest risk in the post and it is the part I would now defend hardest.
- **The online-pricing hard limit still holds.** Lines 255 and 286 advise pricing the same lens online before agreeing at the counter, without asserting any comparison or percentage. That is the outline's own approved bullet and stays on the right side of `plan.md` §Key sections item 6.
- **Nothing here needs a third writer pass.** The remaining items are two paragraph splits, one attribution reword, and two marker resolutions. Stage 3c and Stage 3d own all five by design, and dispatching a revise round for them would risk more than it fixes on a draft this close.
