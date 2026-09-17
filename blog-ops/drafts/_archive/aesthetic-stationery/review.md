# Review: aesthetic-stationery draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/aesthetic-stationery/draft-v2.md`, `blog-ops/drafts/aesthetic-stationery/draft-v1.md` (diff base), `blog-ops/drafts/aesthetic-stationery/review-v1.md` (the iteration-1 review this pass verifies against), `blog-ops/drafts/aesthetic-stationery/outline.md`, `blog-ops/drafts/aesthetic-stationery/facts.md`, `blog-ops/drafts/aesthetic-stationery/brief.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`.

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

**Scope of this pass.** Iteration 2 is a verification pass, not a fresh sweep. The editor pre-verified the mechanical invariants against draft-v1 (17 Amazon URLs byte-identical and in order, headings identical, 4 `[IMAGE:]` / 3 `[EXTERNAL_LINK_NEEDED:]` / 0 `[VERIFY:]`, zero em-dashes or en-dashes, zero prices, all seven §9 fixes textually present). I re-ran the character-level and marker greps myself anyway because they are cheap, and they agree. The judgment work in this review is: (a) are the seven fixes correct in *substance*, (b) are the three protected passages genuinely untouched, (c) does the bullet-list conversion break image placement, (d) did anything regress.

**Diff basis.** `diff -u draft-v1.md draft-v2.md` returns exactly nine hunks, one per §9 instruction (instruction 5 and 6 each touch two sites). Zero incidental edits. Nothing outside the seven instructions moved.

## Reviewed

- Draft: `blog-ops/drafts/aesthetic-stationery/draft-v2.md` (word count: `2,905` body prose excluding FAQ, on the iteration-1 measurement basis; outline target: `2,800`)
- Outline: `blog-ops/drafts/aesthetic-stationery/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1-3 sentences): All seven §9 instructions are applied and all seven are correct in substance, not merely present, including the one with real judgment content: the @ElShai_eg quote at l.285 now carries its own attribution, the platform switch from r/planners to X is visible, and "the same X post that opened this piece" is factually true (both quotes trace to `https://x.com/ElShai_eg/status/2095889827837165865` in `facts.md` §Quotes). The three protected passages are untouched, the bullet-list conversion does not break image placement, and the diff introduces no new forbidden phrase, unsourced claim or invented testing claim. Zero critical, zero major; one `minor` stylistic echo created by fix #2 is logged for the humanize pass and does not block.

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not applicable here.

## Verification of the seven iteration-1 instructions

| # | Instruction | Applied? | Correct in substance? | Evidence |
|---|---|---|---|---|
| 1 | Attribute the closing @ElShai_eg quote and make the platform switch visible (was `major`) | yes | **yes** | l.285 now reads `The cure is unglamorous and free, and the same X post that opened this piece already said it: "Before joining the haul, check what you already have. Your old pens might still work."` Three sub-tests, all pass. (a) It no longer inherits the r/planners attribution: the preceding clause closes on the u/luckyarchery quote and the new clause opens a new attribution phrase, so the reader is handed a new speaker before the quotation marks open. (b) The platform switch is explicit: "r/planners" then "X post". (c) The factual claim is true: `facts.md` §Quotes lists both the September/highlighters line quoted at l.27 and this line under the same handle **and the same status URL** (`https://x.com/ElShai_eg/status/2095889827837165865`), so "the same X post" is literally accurate, not a convenient paraphrase. The l.27 attribution ("someone on X described it better than I could") gives the back-reference a real antecedent, so the callback resolves for a reader who reads linearly. Quoted string byte-exact against `facts.md`. |
| 2 | Add the opinion frame to the intro's weak productivity claim | yes | yes, with a stylistic side effect | l.15 now reads `In my experience, supplies you genuinely like the look of really can make you more likely to open the notebook...`. This is exactly what `facts.md` §Rejected permits ("framed explicitly as opinion and experience, not as a research finding"). The claim was not strengthened and no citation was added. Side effect: `in my experience` now appears twice, l.15 and l.37. Logged `minor` in §7. |
| 3 | Disambiguate "I have kept all three" to the list reading | yes | yes | l.57: `I have kept all three on the list, for different reasons`. The ownership reading is closed off, `facts.md` Hard rule 4 is no longer at risk in that sentence, and nothing else in the sentence changed. |
| 4 | 400 tabs to 480 tabs | yes | yes | l.275 now reads `storing 480 tabs you will never peel`, matching l.233 in this draft and `facts.md` §Product picks row 14 ("a 480-piece pack"). The post's only internal numeric contradiction is gone. |
| 5 | Convert the two gloss run-ons into bullet lists | yes | yes | l.61-65 (nib / bleed-through+ghosting / archival-pigment) and l.127-131 (B5 / A5 / dot-ruled). Same wording, same terms, same order, still before the first H3 of each section, so every gloss still lands at or before first use: nib before l.99, bleed-through before l.119, archival before l.105, B5 before l.153, A5 before l.157, dot-ruled before l.203. The lead-in prose sentence and its colon were kept as instructed. |
| 6 | Add two standalone-question paragraphs | yes | yes | l.71 `So which one do you actually buy first?` (H2 3, before the first H3) and l.215 `How much of this do you really need?` (H2 6, before the first H3). Both are single sentences alone on a line with blank lines either side, and neither is answered inside its own paragraph. Post total rises from 1 to 3. |
| 7 | Rebuild the CTA bridge on the argument the post actually made | yes | yes | l.289: `The whole case for nicer supplies was that they lower the cost of starting. The same logic applies to what happens once the notebook fills up.` The imported efficiency premise is gone and the sentence now restates the thesis stated at l.37 and l.301. Second paragraph, `/ai-tools` link, action anchor and the single Text Summarizer mention are byte-identical to draft-v1. |

## Verification of the three protected passages

| Protected item | Status | Evidence |
|---|---|---|
| H2 6's Bande washi paragraph (l.223, "Now the honest part, and it is not about pack size...") | **untouched** | Byte-identical to draft-v1 l.209. The habit-existence reframe that resolved the `plan-review.md` issue #1 contradiction survives intact, as does the H2 8 settlement sentence `No smaller version fixes it, because the issue is whether the decorating habit already exists.` (l.275). The only change inside that l.275 paragraph is the 400 to 480 correction, which was instruction 4. |
| l.31, "That post gives the feeling a name" plus the hold-it-loosely sentence | **untouched** | Byte-identical to draft-v1 l.31, including `Worth saying plainly: that was one person's observation on social media, not a study they cited, so hold it loosely.` The single hardest requirement in `facts.md` §Rejected is still met verbatim. |
| The P2 expertise sentence (l.17) | **untouched** | Byte-identical to draft-v1 l.17. The writer did not "improve" it, which is the correct outcome; it remains a Gate 2 human-confirmation item, carried forward in §10. |

## Ruling: image placement after the bullet-list conversion (the writer-flagged side effect)

**No move needed. Placement still satisfies both the outline and §4.2b.** Three tests:

1. **Mechanical §4.2b test.** The check is whether the line immediately following an `[IMAGE:]` placeholder is a heading. l.67's next content line is l.69, body prose. l.133's next content line is l.135, body prose. Neither image sits before a heading. Pass, same as draft-v1.
2. **Outline-intent test.** `outline.md` §Image placement plan says "After H2 3 + 1 paragraph" and "After H2 4 + 1 paragraph". The rule exists to stop an image orphaning directly under a heading and to stop it sinking below the first product. The gloss list is not a new section, it is the tail of the same opening body unit: a lead-in sentence ending in a colon plus its three items, one grammatical construction split across four lines. The image still sits after the H2, after that opening unit, and before the first H3. Both constraints the outline is protecting are satisfied.
3. **Render test.** In Gutenberg an image block after a list block renders identically to an image block after a paragraph block, and the following prose (l.69, l.135) starts a genuinely new thought in each case, so the image is not severing a connected passage.

Moving either placeholder up to sit between the lead-in sentence and its own bullets would be strictly worse: it would split a colon from the list it introduces. Leave both where they are.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | yes | Unchanged from draft-v1 except in the seven edited sites, and all seven read as Olga. The two new standalone questions (l.71, l.215) are exactly the reader-directed rhetorical hook `voice.md` §Lexicon names as her signature, so this revision moves toward the voice profile rather than away from it. The rebuilt CTA opener (l.289) is plainer and more direct than what it replaced. No corporate drift introduced. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Re-greped `one could\|one should\|users are\|stakeholders`: zero hits. The added text is first and second person throughout ("In my experience", "do you actually buy first", "do you really need"). |
| Active voice (no "X was scanned" shapes) | yes | Re-greped `was (scanned\|checked\|monitored\|built\|tested)`: zero hits. No passive introduced by the edits. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Recomputed for draft-v2: intro sd 7.3, H2 1 17.2, H2 2 14.7, H2 3 7.3, H2 4 7.6, H2 5 8.6, H2 6 7.6, H2 7 7.4, H2 8 14.8, CTA 5.1. All clear the <4 fail threshold with room. The two bullet conversions raised variation in H2 3 and H2 4 rather than lowering it, because the bullets are short units against long product prose. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | Re-greped the full `writing-standards.md` §Forbidden phrases list plus `voice.md` §Additional forbidden phrases (which adds none) against draft-v2, including the `game changer` risk that lives inside the u/dogfault_ source quote. Zero hits. No edit introduced one. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | Zero, independently re-counted on draft-v2. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | yes | Zero en-dashes present, so vacuously clean. |
| Intro jargon (per `audience.md` §Reading posture) | yes | The intro's only edit was the four-word opinion frame at l.15. No term added. |
| Product code-literal grep (module: product) | yes (N/A) | `product.md` defines no backticked internal code constants. Nothing to grep for. |
| Intro-hook over-anchoring | yes (N/A) | Hook is a durable behavioural observation, not a time-bound event peg. Unchanged from draft-v1. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (`adapters/publish/frontmatter/wordpress.md`) | yes | Frontmatter is byte-identical to draft-v1: `title`, `date`, `excerpt`, `tags` (4), `authors` (`Olga Pak`), `draft: true`, and correctly no `cover`/`heroImage`. wordpress-rest emits no JSON-LD at the adapter level, so the FAQPage schema sub-check is skipped per SKILL §2.1. |
| Title in frontmatter matches outline "Final title" exactly | yes | Unchanged, matches `outline.md` §Final title byte for byte. |
| Slug / meta description match outline | yes | Excerpt byte-identical to §Final meta description (148 chars). Slug `aesthetic-stationery`. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | Editor pre-verified; my own heading extraction agrees: 8 outline H2s in order, then the CTA H2, then `## FAQ`, 10 total, and all 17 H3s in outline order. Zero delta. The diff touches no heading line. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | yes | Still 4 content paragraphs (3 / 2 / 2 / 1 sentences) plus the mandatory affiliate disclosure as the last paragraph before the first `##`. Fix #2 added a frame inside an existing sentence and changed no sentence or paragraph count. 1 internal link in the intro, inside the ≤2 gate. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Improved. H2 3 and H2 6 now each carry two markers where they carried one, and H2 3 and H2 4 gained a bullet list. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | yes | 5 questions, verbatim against the outline's 5, in the same order. FAQ block is byte-identical to draft-v1. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | yes (N/A) | wordpress-rest adapter: not emitted at the adapter level. Skipped per SKILL §2.1. |
| Outro / CTA paragraph present, immediately before `## FAQ`, nothing after the FAQ | yes | `## Spend your energy on the notes, not the note-keeping` sits immediately before `## FAQ`; the post still ends on the final FAQ answer with no trailing prose. Fix #7 rewrote the CTA's first sentence only. |
| CTA links the `blog.md` target with an action anchor | yes | `[Try my free AI tools](/ai-tools)`, untouched by fix #7 as instructed. |

Structural deltas vs outline (if any):
- Same two cosmetic H3 shortenings ruled acceptable at iteration 1 (`Kokuyo Campus B5 notebooks, dot-ruled`, `Post-it Super Sticky Notes, muted palette`), both still carrying the dropped detail in body prose. Unchanged, still not logged as issues.
- Same deliberate "Bande sticker rolls" wording at l.57 to avoid an unglossed first use of "washi". Unchanged, still ruled acceptable.
- New: two bullet lists at l.63-65 and l.129-131 that the outline does not enumerate. The outline does not prescribe paragraph-versus-list form inside a section intro, and these were introduced on this reviewer's own iteration-1 instruction, so this is not drift.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Improved since draft-v1. The only numeric change in the diff is 400 to 480 at l.275, which now matches `facts.md` §Product picks row 14 and the draft's own l.233. All previously cleared figures are untouched: 2,251 / 89 and 668 / 149 and "roughly 90 to 95 percent" (l.53), "score 10" (l.139), and the product specs. No new number was introduced anywhere in the diff. |
| Every quoted source is attributed as voice-of-customer, not as authority | **yes** (was the blocking `major`) | All eight quotations now carry their own attribution and all eight are framed as ordinary people, never as authorities: "someone on X" (l.27), "Another poster" (l.33), "the top answer" of the r/stationery start-over thread (l.49), "One commenter" (l.55), "One note-taker on r/stationery" (l.115), "one person in r/planners" (l.189), "someone in r/planners" (l.285), and now "the same X post that opened this piece" (l.285). The l.285 mix-up is resolved as described in the verification table above. |
| Quote verbatim accuracy | yes | The diff changes no character inside any quotation mark. All eight quoted strings remain byte-exact against `facts.md` §Quotes, including the `create-` hyphen and the internal ellipsis. |
| Every competitor name used is discussed with a "best for [segment]" framing | yes (N/A) | `modules.competitors: false`. No software competitor named; the three rejected categories at l.279-281 are generic nouns. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | yes (N/A) | Module off. No `Last verified` row cited, no verified-date stamp in reader-facing prose. |
| No prices anywhere (`facts.md` Hard rule 1) | yes | Independently re-counted: zero `$` characters in the file. |
| Product mentions (count: `2`, `modules.product` on) are each earning their place | yes | Still exactly "free AI tools" and "Text Summarizer", both inside the CTA, both after the educational content. Fix #7 did not change the count or add a third. Neither sentence survives deletion of the mention. |
| Own-product pricing claims | yes | No `$`, no tier, no usage cap, no "free up to". |
| Soon-to-ship feature gap check | yes (N/A) | `brief.md` §Soon-to-ship features: none. No gap language present. |
| Internal links (count: `5` post links + 1 CTA) exist per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | yes | Unchanged by the diff. 5 internal post links, inside the 3-5 target, 1 in the intro, the other 4 in the sections they belong to. |
| Every internal blog link is root-relative `/<slug>` (trailing slash iff `blog.trailing_slash: true`) | yes | `config.yaml`: `route_prefix: /`, `trailing_slash: false`. All six links bare `/slug`, no domain, no trailing slash. Zero absolute cross-post links. |
| External links (count: `0` rendered, `3` markers) each point to reputable sources; anchor text = literal claim | deferred | Unchanged from draft-v1. No external link is rendered; all three claims ship as `[EXTERNAL_LINK_NEEDED:]` with the literal claim as anchor text and a suggested source class. Below `blog-craft.md` §External linking's 3-5 target, pre-accepted at plan review because the harvested-citation pool was empty. Stage 3d resolves or deletes. Not a draft fault. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | yes | Re-greped: 17 `https?://` hits in draft-v2, all `www.amazon.com/dp/`. None of the six forbidden hosts from `research/serp.md` §Selected results analyzed (undertherowantrees.co.uk, drpen.co.uk, thequalityedit.com, goodgudi.com, swiftwellnessmag.com, savespendsplurge.com) appears. Amazon `/dp/` links are affiliate product links, exempt per the outline's External link plan. |
| Affiliate link integrity (`facts.md` Hard rule 2, `custom-instructions.md` §Content policy) | yes | 17 URLs, all tagged `?tag=op01e-20`, byte-identical to draft-v1 and to `facts.md` §Product picks, same order. Zero `[AFFILIATE-LINK-PENDING:]`, zero untagged Amazon URLs. |
| Affiliate disclosure (`facts.md` Hard rule 3) | yes | Present at l.23, verbatim, italicised, last paragraph of the intro immediately before the first `##`. Untouched by the diff. |
| No invented testing claims (`facts.md` Hard rule 4) | yes | Improved. Fix #3 closed the one ambiguous first-hand-ownership reading at l.57. I re-read every edited site specifically for this: the new text at l.15, l.71, l.215 and l.289 makes no claim of having used a named product. l.15's "In my experience" attaches to a category-level claim about liking the look of supplies, which is the exact framing `facts.md` §Rejected permits, not a testing claim. |
| Productivity claim held at the permitted weak version (`facts.md` §Rejected) | yes (was the `minor`) | All three instances are now framed as opinion: l.15 "In my experience", l.37 "in my experience", l.301 "the one I would stand behind". The strong claim is still explicitly refused at l.41 and l.301. This check moves from "yes, with a framing nit" to a clean pass. |
| Target keyword appears 2-8 times in body (actual count: `3` in prose, `6` including FAQ) | yes | Unchanged by the diff; both counts inside the 2-8 band. |
| Frontmatter tags drawn from the live taxonomy (`blog.md` §Tag taxonomy) | yes | Unchanged: `aesthetic notes`, `students`, `productivity`, `note-taking`. |

Unsourced / suspicious claims:
- None outstanding. All three iteration-1 entries are resolved or re-cleared: the l.271 attribution error is fixed (now l.285), the 400-versus-480 contradiction is fixed (now l.275), and "The consensus in the stationery threads" (l.125) is unchanged, still outline-authorised and still hedged to "the stationery threads" rather than to the hobby at large. It stays a Gate 2 watch item in §10, not an issue.
- New claim introduced by the diff, checked and cleared: "the same X post that opened this piece" (l.285). Verified true against `facts.md` §Quotes, where the l.27 quote and the l.285 quote share both the handle `@ElShai_eg` and the status URL `https://x.com/ElShai_eg/status/2095889827837165865`.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | yes. Unchanged. Nothing in the draft needs one; every numeric claim traces to `facts.md`. The §4.4 `\| source:` clause validation has nothing to validate and passes vacuously. |
| `[EXTERNAL_LINK_NEEDED:]` | `3` | yes. l.31 (fresh start effect), l.55 (sunk-cost fallacy), l.125 (handwriting and retention). All three are byte-identical to draft-v1, all three match the outline's External link plan, all three use the canonical shape with the claim first and a `\| suggested source type:` clause. l.125 moved from mid-paragraph to end-of-paragraph as a side effect of the sizes-gloss conversion, which improves it: the marker now closes its sentence instead of sitting in front of an unrelated gloss run. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | yes. All five planned internal links resolved to real slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | yes. Exact match, same four concepts, same four descriptions, byte-identical text. See the placement ruling above for the two that now follow bullet lists. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Re-greped `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `PENDING` against draft-v2: zero hits.

Image hygiene sub-checks:
- **Featured-image hygiene (§4.2a):** pass. No placeholder is named `featured.<ext>` and none duplicates the outline's featured concept. Unchanged.
- **Placement hygiene (§4.2b):** pass. All four placeholders are followed by body prose, never by a heading. l.29 to l.31, l.51 to l.53, l.67 to l.69, l.133 to l.135. See the dedicated ruling above.
- **Table-redundant chart (§4.2c):** pass. The one `remotion` slot (l.51) is a genuine decision diagram and the draft contains no markdown tables at all, so nothing sits within ±20 lines. This remains the only `remotion` use `custom-instructions.md` §Image style permits.

## 5. Word count

- Draft: `2,905` words (body prose after the closing frontmatter through the end of the CTA, excluding the `## FAQ` block, on the same measurement basis the iteration-1 review used: `[IMAGE:]` and marker scaffolding text and raw URLs stripped, link anchor text retained). Derivation: draft-v1 measured `2,873` on that basis, and the diff is a net `+32` words, which I verified by measuring both files with one identical script (v1 `2,940`, v2 `2,972`, a slightly more inclusive strip that counts heading words; the delta between the two files is `+32` either way).
- Outline target: `2,800` words
- Delta: `+3.8%`
- Band: `within ±10% = pass, no issue`

Per-section deltas from draft-v1, all small and all in the sections the seven fixes touched: intro `+3`, H2 2 `+3`, H2 3 `+10`, H2 4 `+2`, H2 6 `+8`, H2 8 `+12`, CTA `-6`. H2 1, H2 5 and H2 7 are unchanged to the word. FAQ measures 329 words, unchanged and correctly excluded from the gated total.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | Both lists re-greped against draft-v2. Clean. |
| Zero em-dashes (`—`, grep returns nothing) | yes | Zero. |
| En-dashes (`–`) only in numeric ranges | yes | Zero present. |
| First-person throughout | yes | Consistent `I` / `you` across all ten sections, including the four new passages. |
| Active voice | yes | No evasive passives introduced. |
| ≥1 rhythm marker in every H2 | yes | All ten sections, with H2 3 and H2 6 now carrying two each. |
| ≥1 bullet list per ~300 words | yes, by reviewer ruling | Literal count: 4 lists / 12 bullets across 2,905 words, against a literal floor of roughly 10 lists. The iteration-1 ruling stands and is now fully executed: the floor is a proxy for "no wall of text", the 17 H3 blocks each break into four short units so no screen of this post is a slab, and the two genuinely list-shaped paragraphs the floor was really pointing at (the jargon glosses) have been converted, doubling both list count and bullet count. Forcing more lists into the item blocks would fight the outline's mandated four-element H3 shape. Recording this as a documented ruling rather than a literal pass so Gate 2 can overrule it if the human disagrees. |
| ≥1 standalone-question paragraph per major section (author voice calls for it, per `authors.md` / `voice.md` §Lexicon "Reader-directed rhetorical hooks") | yes, by reviewer ruling | Literal count: 3 standalone-question paragraphs (l.35, l.71, l.215) across 8 major sections, up from 1. The writer executed the iteration-1 instruction exactly as written, including both suggested placements, and put them in the two longest sections where the reader most needs a beat. The five sections still without one run 79 to 261 words each; a rhetorical question in H2 5, H2 7 or the CTA would be padding rather than rhythm. Escalating this now, after the writer complied in full with a `minor` instruction, would be moving the goalposts. Ruled sufficient. |
| ≥1 concrete number or named example per major section | yes | Re-verified per section: H2 1 two named X posts, H2 2 four engagement figures, H2 3 to H2 7 named products plus specs, H2 8 two upvote-backed quotes plus three named categories and the 480 figure, CTA the named Text Summarizer. |
| No em-dash overuse | yes | Zero. |
| Visible sentence-length variation in every section | yes | Lowest section stddev is 5.1 words (the 79-word CTA) against a <4 fail threshold; every body section is above 7.3. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| intro + `Why aesthetic stationery actually works (and where it stops working)` | `15`, `37` | `minor` | Side effect of iteration-1 fix #2: the phrase `in my experience` now appears twice, roughly 350 words apart, and both instances frame the same underlying claim (that supplies you like lower the cost of opening the notebook). The frame is required at both sites by `facts.md` §Rejected, so neither can simply be deleted, but the verbatim repetition reads as a tic in a voice that otherwise varies its hedges. Does not block approve and does not warrant a writer pass on its own. | At l.15 only, vary the wording of the frame while keeping it an explicit opinion-and-experience frame. E.g. `I find that supplies you genuinely like the look of really can make you more likely to open the notebook, and over a term that small thing adds up.` Leave l.37 exactly as it is. Do not remove either frame and do not strengthen the claim. Suitable for the humanize pass at Stage 3d rather than a writer revision cycle. |

All seven iteration-1 issues are resolved and none has recurred. No new `critical` and no new `major` issue exists in draft-v2.

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The revision was surgical, which is itself the achievement here.** `diff -u draft-v1.md draft-v2.md` returns exactly the seven instructed changes and nothing else: no drive-by rewording, no "while I was in there" improvements to the three passages iteration 1 explicitly fenced off (the H2 6 Bande habit-existence reframe, l.31's hold-it-loosely sentence, l.17's expertise line), and no collateral damage to the 17 affiliate URLs, the headings, the FAQ or the frontmatter. That discipline is the reason this pass could be a verification rather than a re-review, and it is the behaviour to repeat on any future revision of this post.
- **l.285 now does more work than the fix asked for.** The instruction was to attribute the quote and expose the platform switch. `and the same X post that opened this piece already said it` does both, and it also closes the post's frame: the piece opens on that post naming the September delusion and ends on the same post naming the cure. That is a better structure than the mechanical attribution I asked for, and it is true to the source, both lines share one status URL. Do not flatten it back to a bare "as @ElShai_eg wrote on X".
- **Everything iteration 1 called strong is intact.** The downsizing-filter contradiction is still resolved in all four places (l.57 flags all three items, l.89 and l.233 point forward on pack size, l.223 pivots the Bande case to habit-existence, l.275 settles all three individually). l.31's "that was one person's observation on social media, not a study they cited, so hold it loosely" is still verbatim. The honest-downside discipline across all 17 H3 blocks is untouched, including the ones that cost the sale (Maruman l.163, Midori l.173, Hobonichi l.197). None of this should be softened at Stage 3d.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`; no writer revision pass is required. The single `minor` in §7 is a humanize-pass note, not a revision instruction, and the editor should not dispatch `mode=revise` for it.

## 10. Reviewer notes (free-form)

**Gate 2 watch item, carried forward from iteration 1, still open: the P2 expertise claim.** l.17 reads "I take a lot of notes, by hand, and I have bought my share of pretty things that never earned their place." The outline's §P2 asserts this is "documented in `voice.md` §Personal-anecdote bank". It is not. That bank lists the aviation PR pivot, the first-blog intimidation, the Grammarly/Hemingway editor, building the AI tools, and timeboxing. Nothing about hand note-taking and nothing about buying stationery that went unused. The hand-notes half is loosely supported by `brief.md` §Founder anecdote ("sketching AI tools by hand in notebooks first"); the "bought my share of pretty things" half is supported by nothing on file. It is category-level, so it does not breach `facts.md` Hard rule 4, and the writer was following an approved outline, which is why I did not log it as an issue at iteration 1 and why I told the writer to leave it alone (correctly obeyed, the line is byte-identical in draft-v2). **This is the one thing in this post that an automated check cannot settle.** It is a first-person biographical claim about Olga, in the post's authority paragraph, that no profile doc backs. The human must confirm at Gate 2 that it is true before this ships. If it is true, add the line to `voice.md` §Personal-anecdote bank so future posts can draw on it legitimately. If it is not, l.17 needs rewriting before publish, and the honest replacement is the note-taking half alone.

**Second Gate 2 watch item, lower stakes: "the consensus in the stationery threads" (l.125).** Generalises two or three Reddit threads into a consensus. Outline-authorised wording, hedged to "the stationery threads" rather than to the hobby at large, so it stays cleared, but it is the post's loosest sourcing sentence and worth a human glance.

**Ruling on "already said it" (l.285), checked because the new sentence is the one substantive edit.** "The same X post that opened this piece already said it" could in principle be misread as "said it earlier in this article", when in fact the cure line was not quoted earlier. The natural reading is the correct one, that the post itself already contains the line, and the sentence immediately produces the quotation so the reader is never left guessing. Not worth an issue. If Stage 3d is touching that paragraph for another reason, "says it too" would be marginally tighter than "already said it". Not otherwise.

**Rulings from iteration 1 that still stand, re-verified as unchanged.** The truncated u/dogfault_ quote (first sentence quoted byte-exact, second sentence containing "game changer" dropped rather than ellipsed, remainder handled as reported speech at l.159) is honest and correctly attributed; it remains the right way to route around a forbidden phrase living inside a source quote. The "washi" gloss placement still works: the term first appears in the H2 6 heading at l.211 and is glossed in the first sentence at l.213. All six required glosses still land at or before first use, re-verified against the new bullet-list positions.

**Compliance items outside the checklist tables, all clean and all unchanged.** `custom-instructions.md` §Image style: featured slot stays `ai-prompt`, the single `remotion` slot is a genuine diagram. `custom-instructions.md` §Content policy: real tagged affiliate links throughout, disclosure present and correctly placed, no placeholders. `blog-craft.md` §Heading structure would prefer H2 1 of a transactional post to be phrased as a question containing the target keyword; it contains the keyword but is not a question. Outline-level decision, locked, not a draft fault.

**For the editor.** This is a clean approve, and I want to be explicit that it is not an approve granted for progress: I verified each of the seven fixes for correctness of substance rather than presence, checked the one factual claim the revision introduced against `facts.md` (both @ElShai_eg quotes share a status URL, so "the same X post" is true), confirmed by diff that the three fenced-off passages are byte-identical, and ruled on the image-placement side effect the writer flagged. Two rows in §6 pass by documented reviewer ruling rather than by literal count; both rulings are stated in full above so Gate 2 can overrule either. Route draft-v2 to Stage 3d. The `minor` at §7 and the l.285 "says it too" nit are humanize-pass material, not a revision cycle. The only thing that should block publish is the l.17 expertise claim, and that needs a human, not another writer pass.
