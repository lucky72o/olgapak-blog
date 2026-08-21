# Review: best-pens-for-note-taking draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/best-pens-for-note-taking/draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `plan.md`, `research/serp.md`, `research/reddit.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/custom-instructions.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/site-conventions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

**Precedence note:** `blog-ops/profile/custom-instructions.md` was read first and outranks persona/standards defaults. Six things that would normally read as defects are CORRECT for this blog and are explicitly NOT flagged below: the 12 `[EXTERNAL_LINK_NEEDED:]` markers (11 product + 1 Sakura, resolved at Stage 3d), product links being excluded from the 3–5 external-link budget, the absent affiliate disclosure, the absent prices, naming Pen Addict / Wirecutter in prose without linking them, and the title's deliberate omission of the post-type matrix's "Tested and Ranked" (approved at Stage 1c.5, since no hands-on test happened and `blog.md` §Point of view forbids implying one).

## Reviewed

- Draft: `blog-ops/drafts/best-pens-for-note-taking/draft-v1.md` (word count: `2,778` body prose, markers stripped, FAQ excluded; outline target: `2,980`)
- Outline: `blog-ops/drafts/best-pens-for-note-taking/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md`)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is structurally clean and factually disciplined, zero forbidden phrases, zero em-dashes, zero forbidden-SERP links, zero unsourced numeric claims, word count inside ±10%, and all three `[VERIFY:]` markers carry real `| source:` clauses, so none of Step 4's forcing conditions fires. But two `major` issues block `approve`: line 205's "Same eleven pens" is factually wrong about the table directly beneath it, and the Muji H3 is the only pick of eleven missing the "why it earns the spot" beat that line 65 explicitly promises the reader. Both are surgical fixes that need no new research and no invented facts.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`voice.md` + `authors.md`) | ⚠️ partial | First-person, opinionated, "tested not theorized" credibility all land. But the warmth and light self-deprecation that `voice.md` names as core are concentrated in the intro (L14, L16) and thin out after it. No punchy rhythm beats ("Ouch!" / "Nope!"), and only one reader-directed rhetorical hook in six body sections despite `voice.md` §Lexicon naming those as a signature. Reads more blunt-authoritative than warm-friend. Logged `minor` (I-10). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ pass | Grep for `one could\|one should\|users are\|stakeholders\|one must\|the user` returned zero hits. |
| Active voice (no "X was scanned" shapes) | ✅ pass | Grep for `was (scanned\|checked\|monitored\|built\|tested)` returned zero hits. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ pass | Per-section sentence-length stddev: H2 1 = 15.58, H2 2 = 6.73, H2 3 = 8.39, H2 4 = 6.05, H2 5 = 8.25, H2 6 = 13.02. Every section is well above the <4 uniformity threshold. Intro = 5.19. The CTA section reads as sd 0.00 only because it contains a single prose sentence outside the link paragraph; not a real failure at 81 words. |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ pass | All 23 base phrases from `writing-standards.md` greped individually. `voice.md` §Additional forbidden phrases says "None beyond the generic list", so no profile extension to add. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | ✅ pass | Zero. Notably, the writer converted all eleven outline H3 headings from `Pen Name — best X` to `Pen Name, best X` rather than copying the outline's em-dashes through. See §8. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | ✅ pass | Zero en-dashes in the file, so vacuously clean. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

Intro jargon check (§1.7, per `writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation): the intro (L14–L20) contains no SEO/marketing jargon (`SERP`, `funnel`, `featured snippet`, `E-E-A-T`) and no untranslated stationery jargon. Pass. One in-body first-use gap is logged as `minor` (I-12): "hybrid ink" appears at L24 (H2 1) but is not defined until L48 (H2 2), and `audience.md` §Reading posture requires translation on first use. Everywhere else the draft translates well and unprompted: "low-viscosity, which is a technical way of saying the ink is runnier than old-school biro ink" (L135), "gsm (grams per square metre)" (L231), "archival pigment ink... resists fading in a way that ordinary ink doesn't" (L171).

Intro-hook over-anchoring check (§1.9): the hook is a personal anecdote ("I have thrown away more pens mid-semester"), not a time-bound event peg. Check skipped, correctly, per its own guard. The post carries no dated hook and should read identically in 12 months.

Product code-literal check (§1.8, `modules.product: true`): `product.md` defines no backticked code constants or status enums, only four human-readable tool names. Nothing to grep. Pass, N/A in practice.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | ✅ pass | Validated against `adapters/publish/frontmatter/wordpress.md`. All required fields present and filled: `title` (54 chars, in the 50–60 band), `date: 2026-08-08`, `excerpt` (151 chars, ≤160), `tags` (3, in the 2–4 band), `authors: [Olga Pak]` (matches the `olga` byline in `authors.md`), `draft: true`. Correctly carries NO `cover`/`heroImage` field, which the template explicitly forbids for this adapter. FAQPage JSON-LD sub-check skipped per SKILL §2.1: `wordpress-rest` has no JSON-LD requirement at the adapter level (schema is a WP-plugin concern). |
| Title in frontmatter matches outline "Final title" exactly | ✅ pass | `Best Pens for Note Taking: 11 Picks That Survive Class`, byte-identical to outline §Final title. |
| Slug / meta description match outline | ✅ pass | Meta description in `excerpt` is byte-identical to outline §Final meta description. The wordpress frontmatter template defines no `slug` field; the draft directory name `best-pens-for-note-taking` matches outline §Final slug. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | ✅ pass | 1:1 in order. See the diff below. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | ✅ pass | Exactly 4 paragraphs (L14, L16, L18, L20) at 2 / 1 / 1 / 1 sentences. Target keyword lands in the hook (L14). Expertise statement (L16) draws on `voice.md` §Credibility message without inventing a test count. 1 internal link in the intro, under the ≤2 cap. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | ✅ pass | H2 1: shortlist table + "four of the seven roundups". H2 2: 4-item bullet list + standalone question (L53). H2 3: named examples and tip-size numbers throughout. H2 4: job table. H2 5: 3-item bullet list + 70/100 gsm. H2 6: four bold beats + a cited quote. CTA: named tools. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ pass | 5 questions in the draft (L259, L263, L267, L271, L275) against 5 in outline §FAQ block. All five question strings are verbatim matches. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` adapter emits no JSON-LD. Half-check skipped per SKILL §2.5. |
| Outro / CTA paragraph present | ✅ pass | H2 `Turn the notes into something you can revise from` (L251) sits immediately before `## FAQ` (L257) with nothing after the final FAQ answer. CTA carries an action anchor, `[Try my free AI tools](/ai-tools)` (L255), matching `blog.md` §Primary CTA hook verbatim, not a bare homepage link. `/ai-tools` root-relative is the established site convention (used identically in `how-to-stop-doomscrolling.md`, `note-taking-methods.md`, `charting-method-note-taking.md`, `time-blocking.md`). Text Summarizer is the matched tool with Acronym Explainer as the secondary aside, exactly as the outline directed. No feature re-list, no prices. |

Structural deltas vs outline (if any):
- None. H2 diff, draft against outline, in order: `What are the best pens for note taking?` = H2 1 ✅ · `Gel, ballpoint, rollerball or fineliner?` = H2 2 ✅ · `The 11 best pens for note taking` = H2 3 ✅ · `Which pen for which kind of note-taking` = H2 4 ✅ · `Your paper matters as much as your pen` = H2 5 ✅ · `The honest limits nobody mentions` = H2 6 ✅ · `Turn the notes into something you can revise from` = outline §Closing CTA (outline specifies the slot and angle, not a heading string) ✅ · `FAQ` ✅. Zero additions, zero removals, zero reorderings.

**Targeted check 1, the 11-vs-10 pick consistency (requested by name at Stage 1c.5).** As of draft-v1 the post is internally consistent at eleven. Verified place by place:

| Location | Line | Says | OK? |
|---|---|---|---|
| Frontmatter title | 2 | `11 Picks` | ✅ |
| **Frontmatter excerpt** | **4** | **`11 pens`** | **✅ but NOT on the Stage 1c.5 sweep list, see I-3** |
| Intro preview | 20 | `the 11 pens I'd pick` | ✅ |
| §H2 3 heading | 63 | `The 11 best pens` | ✅ |
| §H2 1 shortlist table | 28–40 | 11 data rows (13 `\|` lines = header + separator + 11) | ✅ |
| Actual H3 pick count | 69–191 | 11 H3s | ✅ |
| **§H2 4 opener** | **205** | **`Same eleven pens`** | **❌ wrong today, see I-1; also NOT on the sweep list** |

Two findings the editor needs before Stage 3d. First, the sweep list the Stage 1c.5 reviewer wrote (title, §H2 3 heading, intro preview, §H2 1 table) is **incomplete**: the frontmatter excerpt at L4 and the §H2 4 opener at L205 both carry the count too. If Muji is cut, that is a **six**-place edit, not four. Second, L205 is already wrong at eleven picks, independent of the Muji decision, which is logged as `major` I-1.

**Targeted check 2, §H2 4 must be a compact table, not prose.** ✅ Shipped correctly. L207–L215 is a markdown table with the outline's exact `What you're doing | Pick | Why` columns and 7 rows covering the outline's 7 specified jobs (fast lecture notes, left-handed, three-hour sessions, annotating printed pages, colour-coding a planner, tight table cells, buy-once-forget-it). The single prose paragraph that follows (L217) is not duplication, it is the outline's explicitly required key fact, the Parker Jotter comfort disagreement, used to justify offering a grip option instead of one declared winner. Both internal links land inside the table's "Why" cells woven into the row text (L213, L214), exactly as the outline specified, not as bare "see also" links. The outline's "no image slot here" rule is honored, correctly, since the section's content is already a table. The plan-review constraint is satisfied.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ pass | Full digit-by-digit sweep of L14–L278 below. Zero unsourced numbers. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false` in `config.yaml`. No §Competitor facts table exists. Check skipped by its own module gate. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same module gate. §3.6 and §3.7 (stale competitor rows, `[VERIFY:]` on competitor pricing) both skipped. |
| Product mentions (count: `1`, `modules.product: true`) are each earning their place, none can be deleted without losing meaning | ✅ pass | Exactly one product mention, in the CTA (L255). Well under the >8 stuffing threshold and even under the 3–5 "normal" band. Deletion rule applied: remove it and the closing section loses its entire purpose. `brief.md` §Product features to mention says "None... the product link belongs only in the closing CTA, never wedged into the product picks" and the draft obeys that exactly, zero AI-tool mentions inside the eleven picks. |
| Internal links (count: `4` blog-post links + 1 site-page CTA link) exist per `blog-craft.md` | ✅ pass | See the dedicated block below. |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not absolute (absolute = `major`) | ✅ pass | Grep for `olgapak.com` in the draft returns zero hits. |
| External links (count: `6` unique non-product URLs / `9` rendered anchors) each point to reputable sources; anchor text = literal claim | ⚠️ partial | Sources and anchors are correct; the count runs one unique URL over the 3–5 budget. Logged `minor` I-5. |
| Target keyword appears 2–8 times in body (actual count: `4`) | ✅ pass | Exact-phrase "best pens for note taking" x4 (L14, L22, L63, plus the title). Comfortably mid-band, no stuffing. Related-form "note taking / note-taking" x22 reads naturally for a 2,778-word post on this topic. |

**Targeted check 5, internal links.** ✅ All requirements met.

| Line | Anchor | Target | Root-relative? | Trailing slash? | Target exists? |
|---|---|---|---|---|---|
| 18 (intro) | the note-taking method you use | `/note-taking-methods` | ✅ | ✅ none | ✅ `content/blog/note-taking-methods.md` |
| 213 (H2 4) | the Cornell method's cue column | `/cornell-note-taking-method` | ✅ | ✅ none | ✅ `content/blog/cornell-note-taking-method.md` |
| 214 (H2 4) | the charting method's tight table cells | `/charting-method-note-taking` | ✅ | ✅ none | ✅ `content/blog/charting-method-note-taking.md` |
| 235 (H2 5) | the notebook you pair it with | `/best-notebooks-for-note-taking` | ✅ | ✅ none | ✅ `content/blog/best-notebooks-for-note-taking.md` |
| 255 (CTA) | Try my free AI tools | `/ai-tools` | ✅ | ✅ none | ✅ site page, matches published-post convention |

Four blog-post internal links, inside the 3–5 rule. Zero trailing slashes, correct for `blog.trailing_slash: false` and `site-conventions.md` §Permalinks ("Format: `/<slug>`. Trailing slash: no"). Zero absolute cross-post links. Only 1 internal link in the intro, under the ≤2 cap and woven into a sentence rather than stacked as a "see also" list. **First internal link (L18) precedes the first external link (L55)** as `blog-craft.md` §Internal linking requires. All four match the outline's planned anchor/target/placement table exactly.

**§3.5 forbidden external links to SERP competitors. ✅ PASS, zero violations.** The forbidden set from `research/serp.md` §"Selected results analyzed" is the seven top-10 URLs: `penaddict.com`, `nytimes.com/wirecutter`, `jetpens.com`, `pilotpen.com.au`, `bastionboltactionpen.com`, `gentlemanstationer.com`, `smallstuffcounts.com`. Per-link verdict on every external URL the draft renders:

| Line | URL | In forbidden set? | Verdict |
|---|---|---|---|
| 55, 135 | `reddit.com/r/pens/.../1otlbx6/` | No | ✅ allowed |
| 75 | `uniball.com.au/uni-super-ink/` | No, and it is the harvested primary source, `serp.md` §Citations harvested row 4, classified `primary_source` (manufacturer's own technical page) | ✅ allowed, correct routing around Wirecutter |
| 147, 217 | `reddit.com/r/pens/.../1lovocm/` | No | ✅ allowed |
| 173 | `reddit.com/r/pens/.../1micc41/` | No | ✅ allowed |
| 225, 231 | `reddit.com/r/notebooks/.../1v4agc3/` | No | ✅ allowed |
| 243 | `reddit.com/r/pens/.../1u85stl/` | No | ✅ allowed |
| 71, 83, 95, 107, 119, 131, 143, 155, 167, 181, 193 | `https://www.amazon.com/dp/<ASIN>` inside `[EXTERNAL_LINK_NEEDED:]` markers | No | ✅ not yet rendered links; resolved at Stage 3d |

The draft names Pen Addict in prose four times (L87, L99, L111, and implicitly L24) and Wirecutter once (L159) **without linking either**, which is exactly what `facts.md`'s "do not link" annotations require and is the correct handling, not a defect. Confirmed by grep: no `penaddict.com`, no `nytimes.com`, no `jetpens.com` anywhere in the draft.

**§3.8 invented-number check. ✅ PASS.** Greped for audience-size ranges, "N+" adoption claims, and migration/volume ranges. Zero hits of any pattern.

**Targeted check 3, fabricated numbers. ✅ PASS on all three rejected claims plus the standing bans.**

| Rejected item (from `facts.md` §Rejected / not verifiable, or `brief.md` §Avoid list) | Present? | Evidence |
|---|---|---|
| Reddit write-out-length figures (500–600 m / ~40 pages / ~1,600 m / ~100 pages / 12,500 m) | ❌ absent | Greped `metre\|meters\|metres\|1,600\|12,500\|500-600\|500–600\|165 page\|40 pages\|100 pages`. Only hit is "gsm (grams per square metre)" at L231, a units expansion, not the rejected figure. The direction ("Ballpoints outlast gels because they lay down less ink", L243) is stated qualitatively with zero numbers, exactly as `facts.md` permits. |
| Ritsumeikan "black ink aids memory" claim | ❌ absent | Greped `ritsumeikan\|memory\|remember`. Zero hits anywhere in the draft. |
| "I tested N pens" framing | ❌ absent | Greped `i tested\|we tested\|tested [0-9]+`. Zero hits. The draft consistently says research, not testing: "the most-recommended pen in everything I read for this post" (L24), "No other pen in my research came close" (L75), "the roundups I studied" (L24, L123). Wirecutter's own 62-researched/37-tested figure, which `facts.md` records but ties to a do-not-link URL, is correctly left out entirely. |
| Any stated price | ❌ absent | Greped `\$[0-9]\|£\|€\|dollars\|pounds\|price\|cost`. Zero hits. The gsm example at L231 correctly renders the source's "£1 70 gsm vs £10 100 gsm" as "a cheap 70 gsm notebook against a lovely 100 gsm one", carrying the cheap/expensive contrast the argument needs without a currency figure. |
| Invented dry times / lab numbers | ❌ absent | Dry-time claims are all comparative and qualitative: "dries almost the instant it lands" (L48), "sits wet on the page a moment longer" (L49), "explicitly slow to dry" (L161). No seconds, no lab units. |
| Mueller & Oppenheimer / handwriting-beats-typing | ❌ absent | Greped `mueller\|oppenheimer\|handwriting (beats\|vs\|versus) typing`. Zero hits. The outline flagged this link as optional with "Cut it rather than stretch it", and the writer cut it. Correct call. The outline also warned that two SERP competitors open on this exact angle; the draft's hook avoids it entirely. |

Full numeric sweep, every number in the body traced:

| Line | Number / claim | Traces to |
|---|---|---|
| 24 | "four of the seven roundups I studied" | `facts.md` §Named examples: "named in 4 of 7 studied SERP results" ✅ (wording nit logged as I-8) |
| 46, 61 | "0.38, 0.5 and 0.7 mm" | `facts.md` §Statistics row 2 ✅ |
| 87 | "EnerGel LRN-5 as the refill to buy" | `facts.md` §Named examples (Pentel EnerGel) ✅ |
| 99 | "not on its top-five list despite outselling everything" | `facts.md` §Named examples (Pilot G2) ✅ |
| 111 | Signo DX 0.38 quote + "keeps its position year after year" | `facts.md` §Named examples; `serp.md` L43 "The reigning champion for several years" ✅ |
| 123 | "two of the roundups", "recommended twice, independently", "Sarasa Grand 0.7" | `facts.md` §Named examples (Zebra Sarasa) ✅. Correctly renders the source's "100 gsm paper" as "a heavier, smoother paper" |
| 135 | u/StillPissed quote | `facts.md` §Quotes, verbatim ✅ |
| 173 | u/asdqqq33 quote | `facts.md` §Quotes, verbatim ✅ |
| 175 | "long-time users... report years of use out of the same pens" | `research/reddit.md` L47 (u/SwimmingInLakess, 7 years, score 31), stated without a number ✅. Outline-mandated balance sentence |
| 217 | Parker Jotter quote + "more than four hours a day for a year" | `facts.md` §Quotes (u/MindfulPangolin + u/Zar_Of_Castilla) ✅ |
| 225 | u/nuclearwes feathering/bleed/ghosting quote | `facts.md` §Quotes, verbatim ✅ |
| 231 | "70 gsm... 100 gsm" + u/Ok-Spite-5454 quote | `facts.md` §Statistics row 5 + §Quotes ✅ |
| 243 | "three gel pens in a month" + u/felipetwo quote | `facts.md` §Statistics row 4 (used correctly as "one student reported", never as a benchmark; the 165-pages half is omitted) + §Quotes ✅ (attribution nit logged as I-6) |
| 14, 16, 44, 103, 145, 227, 239 | "three-hour lecture", "week three", "Four families", "five minutes", "Three words", "Four things" | Personal anecdote, rhetorical, or structural counts verifiable from the text itself ✅ |

Unsourced / suspicious claims:
- None at the level that forces `request_revisions`. Two small precision drifts are logged as `minor` in §7: I-7 (L159 "and drawing" is not in the Precise V5 row of `facts.md`) and I-8 (L24 "roundups" for all seven studied SERP results, two of which are a brand blog and a gel-vs-ballpoint explainer).

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `3` | ✅ All three in the Muji H3 (L185), all three with valid non-trivial `\| source:` clauses. See the validation table below. |
| `[EXTERNAL_LINK_NEEDED:]` | `12` | ✅ **Expected, not a defect.** 11 per-pick product links (L71, 83, 95, 107, 119, 131, 143, 155, 167, 181, 193) + 1 load-bearing Sakura archival-ink link (L171). `custom-instructions.md` §Content policy forbids `[AFFILIATE-LINK-PENDING:]` and requires real untagged `https://www.amazon.com/dp/<ASIN>` links, which the writer has no browser to find. All 12 resolve at Stage 3d. Each product marker correctly states the fallback ("or the brand's own product page if Amazon doesn't carry the genuine item"). |
| `[INTERNAL_LINK_NEEDED:]` | `0` | ✅ Correct. All four planned internal links resolved to real posts; no gaps left. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | ✅ Exact match. |

**Targeted check 4, `[VERIFY:]` source-clause validation (mandatory per `blog-craft.md` §Placeholder marker shapes). ✅ ALL THREE PASS.**

| # | Claim | `\| source:` clause | Valid? |
|---|---|---|---|
| 1 | the Muji Gel Ink Ballpoint uses gel ink rather than oil-based ballpoint or hybrid ink | `brief.md anchor-brand list; facts.md §Rejected/not verifiable flags Muji as absent from all 7 studied SERP results` | ✅ Names two real files and two real sections; both check out (`brief.md` L42 lists Muji as an anchor pick, `facts.md` L85 carries the ⚠️ Muji row). Non-trivial, not "TBD", not a restatement of the claim. |
| 2 | the tip sizes Muji offers in this line | `no facts.md entry, needs Muji's own product page` | ✅ An honest disclaimer of the exact shape `blog-craft.md` §"What to put after \| source:" sanctions, and it names the resolution path. |
| 3 | whether Muji sells refills for this pen separately | `no facts.md entry, needs Muji's own product page` | ✅ Same, valid. |

Zero missing clauses, zero blank clauses, zero "TBD", zero claim-text repeats, zero "see context" placeholders. The §4.4 forcing condition in Step 4's verdict tree does **not** fire.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greped for `\[Verify:`, `\[verify:`, `\[EXTERNAL_NEEDED:`, `TODO`, `TBD`, `[LINK`, `[SOURCE`, and `AFFILIATE-LINK-PENDING`. Zero hits. Every marker uses the exact canonical shape the Phase 4 action-items grep expects.

**§4.2 image-slot diff.** 4 draft `[IMAGE:]` against 4 outline in-post slots, and each lands in the outline's planned position:

| Line | Concept | Type | Outline slot | Match? |
|---|---|---|---|---|
| 46 | ink families on a smooth/wet ↔ fast-dry/firm axis + tip widths at relative thickness | `remotion` | after H2 2 + 1 paragraph | ✅ |
| 67 | one sentence written five times in five ink types | `ai-prompt` | after H2 3 + 1 paragraph | ✅ |
| 223 | three labelled paper samples: feathering / bleeding / ghosting | `ai-prompt` | after H2 5 + 1 paragraph | ✅ |
| 241 | late-night desk, pen graveyard beside finished notes | `ai-prompt` | after H2 6 + 1 paragraph | ✅ |

All four use the canonical `[IMAGE: <desc>. Type: <type>. Suggested filename: <name>.png]` shape. Type selection matches `custom-instructions.md` §Image style ("`remotion` only for genuine diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals"): the one `remotion` slot is a real trade-off diagram, the three `ai-prompt` slots are scenes and samples. No blanket conversion. Correct.

**§4.2a featured-image hygiene. ✅ PASS.** No draft `[IMAGE:]` carries `Suggested filename: featured.<ext>`, and none duplicates the outline's featured concept (hand-lettered title over a flat-vector study scene). The featured slot correctly stays out of the body, which is right for `wordpress-rest` where the featured image ships via media upload as `featured_media`, not via frontmatter or an inline placeholder. `custom-instructions.md`'s "featured is always `ai-prompt`, never converted to `remotion`" rule is respected by omission.

**§4.2b image-placement hygiene.** The L67 placeholder is followed (after a blank line) by the H3 at L69, so it technically sits before a heading rather than after one. Not flagged: the approved outline specifies this exact position ("After H2 3 + 1 paragraph"), and the image illustrates the ink-type differences the preceding sections establish, which is the check's own stated exception. Flagging it would contradict an approved outline. Noted in §10 for awareness only.

**§4.2c table-redundant chart.** Mechanically triggers: the L46 `remotion` placeholder is a data visualization, and the H2 1 shortlist table (L28–L40) falls inside the ±20-line window. Judged a **false positive and not logged**. The check exists to catch a chart that re-renders the adjacent table's data; here the table is the pick-by-pick shortlist (Pen / Best for / Catch) while the diagram is a smooth-wet ↔ dry-firm axis with tip widths drawn at relative line thickness. Zero content overlap, and the diagram does the one thing a table cannot, show 0.38 / 0.5 / 0.7 mm at actual relative width. The outline already reasoned about this rule correctly when it declined an image slot on H2 4.

## 5. Word count

- Draft: `2,778` words (body prose, markers stripped, from the intro through the end of the CTA, excluding frontmatter and excluding the `## FAQ` block)
- Outline target: `2,980` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `-6.8%`
- Band: `within ±10% = pass, no issue logged`

Supporting measurements: raw `wc -w` on the whole file = 3,762. Body span L13–L256 raw = 3,355, which drops to 2,778 once the 12 `[EXTERNAL_LINK_NEEDED:]`, 3 `[VERIFY:]`, and 4 `[IMAGE:]` marker bodies are stripped (marker text is production instruction, not reader-facing prose). The FAQ adds 349 words, correctly excluded from the gated total per the outline and SKILL §5. The whole post also lands inside `plan.md`'s 2,600–3,200 band and inside `blog-craft.md` §Post type matrix's 2,000–3,000 for transactional.

Per-section against the outline's own allocations, for the editor's awareness (no issue logged, the total is clean):

| Section | Draft | Outline | Delta |
|---|---|---|---|
| Intro | 161 | ~200 | -20% |
| H2 1 | 292 | 250 | +17% |
| H2 2 | 339 | 400 | -15% |
| H2 3 | 1,171 | 1,150 | +2% |
| H2 4 | 273 | 250 | +9% |
| H2 5 | 269 | 330 | -18% |
| H2 6 | 192 | 300 | -36% |
| CTA | 81 | ~100 | -19% |

H2 6 is the one section meaningfully under plan at -36%, logged as `minor` I-11. It is the trust-earning section and the outline gave it four beats; the draft delivers all four, just tersely. Since the overall total is inside ±10% and the section still passes every rhythm and sourcing check, this stays `minor` rather than escalating.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ pass | All 23 base phrases greped individually; `voice.md` adds none. |
| Zero em-dashes (`—`, grep returns nothing) | ✅ pass | Zero. |
| En-dashes (`–`) only in numeric ranges | ✅ pass | Zero en-dashes in the file. |
| First-person throughout | ✅ pass | No `one` / `users` / `stakeholders` drift. |
| Active voice | ✅ pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | ✅ pass | See §2. |
| ≥1 bullet list per ~300 words | ❌ fail | Only 2 true `- ` bullet lists (H2 2 at L48–L51, H2 5 at L227–L229) across 2,778 body words; the floor implies ~9. H2 3 runs 1,171 words with no bullet list at all. Mitigated in practice by 2 markdown tables and 33 bold-label beats, so logged as `minor` I-9, not `major`. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `authors.md`) | ❌ fail | Exactly one, "So which family should you actually want?" (L53) in H2 2. H2 1, 3, 4, 5 and 6 have none. `voice.md` §Lexicon explicitly names "Reader-directed rhetorical hooks ('Do you ever feel...?')" as an Olga signature, so the voice does call for it. Logged as `minor` I-10. |
| ≥1 concrete number or named example per major section | ✅ pass | H2 1 "four of the seven roundups" + 11 named pens; H2 2 "0.38, 0.5 and 0.7 mm"; H2 3 named pens and cited quotes throughout; H2 4 seven named picks; H2 5 "70 gsm / 100 gsm"; H2 6 "three gel pens in a month". |
| No em-dash overuse | ✅ pass | Zero em-dashes, so vacuously clean. |
| Visible sentence-length variation in every section | ✅ pass | Every body section's stddev is between 6.05 and 15.58, all far above the <4 uniformity flag. Shortest sentences run 2–4 words ("Same pen. Different paper." L221, "It's narrower." L61), longest run 45–46, which is genuine burstiness rather than a uniform mid-length hum. |

Floor verdict: 9 of 11 rows pass. The two failures are structural-rhythm nits, both `minor`, and neither is one of Step 4's forcing conditions.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| # | Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|---|
| I-1 | Which pen for which kind of note-taking | 205 | `major` | "Same eleven pens, sorted by what you're actually doing with them." is factually wrong about the table directly beneath it. The table has 7 job rows covering only 6 distinct pens (Jetstream RT, Acroball, S-Gel, Pigma Micron, FriXion, Signo DX 0.38). Five picks (EnerGel RTX, G2, Sarasa Dry, Muji, and the Precise V5, which appears only as an "avoid") are not sorted into it at all. A reader who counts will catch it. It is also a sixth "eleven" that the Muji-cut sweep has to catch. | Replace the sentence at L205 with a count-free framing that matches what the table actually does, for example: `The picks above, sorted by what you're actually doing with them.` Do not add rows to make eleven true, the seven-job table is the outline-mandated shape. Removing the number also removes one place the 11-to-10 sweep would otherwise have to touch. |
| I-2 | The 11 best pens for note taking | 179–189 | `major` | The Muji H3 is the only pick of eleven with no "why it earns the spot" beat. L65 promises the reader "Every pick below follows the same shape: what it's best at, why it earns the spot, the honest catch, and who should skip it", and the other ten deliver all four. Muji has `Best for` → three `[VERIFY:]` markers → `The catch` → `Skip if`, with zero prose rationale. As written, the section reads as a pick with no argument behind it, which is the weakest possible state for the one entry whose survival is already conditional. | Add one short rationale sentence after the `**Best for:**` line, drawn from the outline's own §H3 3.10 "Why" line: it is an anchor brand from the brief, valued for consistency and understated, unbranded design. Frame it as positioning, not as a spec. Do NOT assert ink chemistry, tip sizes, or refill availability in that sentence, those three are exactly what the `[VERIFY:]` markers are holding, and `facts.md` §Rejected/not verifiable requires them to come from Muji's own product page at Stage 3d. Keep all three `[VERIFY:]` markers exactly as they are. |
| I-3 | (frontmatter) | 4 | `minor` | The excerpt carries "11 pens", but the Stage 1c.5 sweep list for the Muji-cut scenario names only four places (title, §H2 3 heading, intro preview, §H2 1 table). The excerpt is a fifth, and L205 a sixth. If Muji is cut at Stage 3d and only the four listed places are edited, the meta description ships saying 11 while the post has 10. | No change to the draft. Editor action: extend the Stage 3d Muji-cut checklist from four places to six, adding the frontmatter excerpt (L4) and the §H2 4 opener (L205). If I-1 is applied, L205 stops carrying a count and the sweep drops back to five places. |
| I-4 | Gel, ballpoint, rollerball or fineliner? | 75 | `minor` | The Uni-ball citation ships as `http://uniball.com.au/uni-super-ink/`, not HTTPS. The outline's external link plan says "Verify it resolves (prefer HTTPS) at Stage 3d". An `http://` outbound link on an HTTPS page is a mixed-signal quality nit and may redirect or fail. | At Stage 3d, confirm the page resolves and switch to `https://` if the HTTPS version serves the same content. If neither scheme resolves, drop the sentence's link and keep the claim attributed in prose ("Uni-ball says..."), or replace with `[EXTERNAL_LINK_NEEDED:]` for the manufacturer's current Super Ink page. |
| I-5 | (whole post) | 55, 75, 135, 147, 173, 217, 225, 231, 243 | `minor` | Six unique non-product external URLs across nine rendered anchors, against `blog-craft.md` §External linking's 3–5 budget. Product links are correctly excluded from this count per `custom-instructions.md`. Three URLs are each linked twice (1otlbx6 at L55/L135, 1lovocm at L147/L217, 1v4agc3 at L225/L231). Five of the six are Reddit, which is a thin authority profile for an E-E-A-T-adjacent buying post even though every quote is genuinely load-bearing. | Optional, judgment call. If trimming: drop the second instance of one repeated Reddit URL (L135 is the best candidate, the same thread is already linked at L55 four sections earlier and the u/StillPissed quote is attributed by username in-line either way). Do not drop the uniball.com.au link, it is the post's only manufacturer primary source. Do not add links to hit a number. |
| I-6 | The honest limits nobody mentions | 243 | `minor` | "When a student posted that she'd killed three gel pens in a month" attributes a gender the source does not state. `research/reddit.md` L98 records the poster as u/meerkatherine with the quote "I've run through 3 just this month and I'm getting frustrated. It was about 165 pages of notes." The username implies but does not establish gender. Small, but it is an invented detail about a real person in a post whose whole pitch is honesty. | Change "she'd killed three gel pens" to "they'd killed three gel pens" at L243. No other change to the sentence, the "three gel pens in a month" figure and the "one student reported" framing are both correct per `facts.md` §Statistics row 4. |
| I-7 | The 11 best pens for note taking | 159 | `minor` | "It's Wirecutter's pick for fine lettering and drawing". `facts.md` §Named examples records the Precise V5/V7 as "rollerball for fine lettering, explicitly flagged as slow-drying" with no drawing claim. The "detailed drawings and craft work" positioning belongs to the Sakura entry, not this one. "and drawing" is an unsourced two-word addition. | Delete "and drawing" at L159 so the sentence reads "It's Wirecutter's pick for fine lettering, and liquid ink is genuinely different to write with". Everything else in the sentence traces correctly. |
| I-8 | What are the best pens for note taking? | 24 | `minor` | "named in four of the seven roundups I studied". `facts.md` says "named in 4 of 7 studied SERP results", and two of those seven are not roundups: `bastionboltactionpen.com` is a gel-vs-ballpoint explainer and `pilotpen.com.au` is a brand blog. The number is right, the noun overstates what the research set was. It matters slightly because this is the single number backing the post's number-one pick. | Change "four of the seven roundups I studied" to "four of the seven guides I studied" at L24. Keep the number, keep the no-link handling. Apply the same read to L123 if you touch it ("two of the roundups I studied" is accurate there, both are genuine roundups, so L123 needs no change). |
| I-9 | (whole post) | 63–201 | `minor` | Only 2 true bullet lists (L48–L51, L227–L229) across 2,778 body words, against the humanization floor's ≥1 per ~300 words. H2 3 runs 1,171 words without one. | Optional. The 33 `**Best for:** / **The catch:** / **Skip if:**` bold beats and the 2 tables already break up the text well, which is why this is `minor` rather than `major`. If you want to close it cheaply, convert the four bold beats in H2 6 (L243, L245, L247, L249) into a `- ` bulleted list with the bold lead-in retained inside each bullet. Do not bullet-ify the H3 picks, their current shape is a strength (see §8). |
| I-10 | (whole post) | 22–249 | `minor` | One standalone-question paragraph (L53) across six body sections, and the warmth/self-deprecation `voice.md` calls for fades after the intro. No "Ouch!" / "Nope!" rhythm beats, no second reader-directed hook. The prose reads confident and blunt rather than warm-friend, a visible drift from `authors.md` ("Warm, first-person, encouraging, lightly self-deprecating") and `voice.md` §Lexicon. | Add one short reader-directed question as a standalone paragraph in two sections that currently lack one, best fits are immediately before the L227 definitions block in H2 5 (something like "So which one is actually happening to your page?") and at the top of H2 6. Keep them genuine questions the section then answers, not rhetorical filler. Do not touch L59 or L221, those short-sentence beats already work. |
| I-11 | The honest limits nobody mentions | 237–249 | `minor` | 192 words against the outline's 300 allocation, -36%, the thinnest section relative to plan. All four outline beats are present but the "fineliners are art tools first" and "smooth vs fast-drying" beats are one sentence each. This is the post's trust-earning section and the strongest differentiator from the SERP. | Optional, and only if I-9's bullet conversion does not already lengthen it. Add one concrete sentence to the "Fineliners are art tools first" beat (L245) pointing at what the reader should actually do about it, and one to the "Smooth and fast-drying" beat (L247) naming the physical reason they conflict (ink that dries fast is formulated to set on contact, which is the same property that costs it glide). Both are already established in H2 2, so this is restatement in a new frame, not a new claim, and needs no new source. |
| I-12 | What are the best pens for note taking? | 24 | `minor` | "its fast-drying hybrid ink" uses "hybrid" at first appearance without translating it. The definition arrives one section later at L48 ("Ballpoint, including hybrids like the Jetstream: thick, oil-based ink..."). `audience.md` §Reading posture requires translation on first use, and this post's own outline lists "hybrid ink" in the H2 2 translate-on-first-use bullet. | Add a three-word gloss at L24, for example: "its fast-drying hybrid ink, a ballpoint-gel cross". Keep the full explanation at L48 where it belongs, this is just a bridge so the term is not naked on first sight. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The H3 heading punctuation is a deliberate, correct fix that must not be reverted.** The approved outline writes all eleven picks as `Uni-ball Jetstream RT — best overall` with em-dashes. The writer converted every one to a comma (`Uni-ball Jetstream RT, best overall`, L69, L81, L93, L105, L117, L129, L141, L153, L165, L179, L191) rather than copying the outline through, which is exactly what `writing-standards.md` §Forbidden characters demands and is the difference between a zero-em-dash draft and eleven automatic `major` issues. If any future pass re-syncs headings against the outline, keep the commas.
- **The Sakura Pigma Micron entry (L165–L177) is the post's competitive moat and is built correctly.** It leads with the honest catch instead of burying it, quotes u/asdqqq33 verbatim from `facts.md`, immediately balances it with the long-time-users counterpoint from `research/reddit.md`, and lands on "Pressure is the variable, not the pen." That directly contradicts Wirecutter's uncaveated fineliner pick, which `research/reddit.md` L105 and L138 both identify as the single biggest gap in the SERP. The `[EXTERNAL_LINK_NEEDED:]` at L171 is correctly marked as load-bearing. Do not soften, shorten, or hedge this section.
- **The price and test discipline is flawless under real pressure.** The source material handed the writer four separate temptations, Wirecutter's "62 researched / 37 tested" headline number, the £1-vs-£10 notebook comparison, the Reddit write-out-length figures, and the Ritsumeikan memory claim. All four are absent. The gsm example at L231 keeps the cheap-versus-expensive contrast the argument needs ("a cheap 70 gsm notebook against a lovely 100 gsm one, and it was the expensive one that bled") while carrying zero currency figures, which is the hardest version of this to get right. Preserve that phrasing.

Two more worth not breaking: the L61 tip-size passage ("A 0.38 is not better than a 0.7. It's narrower.") is the clearest anti-hype beat in the post and does real work against the SERP's spec-worship; and the H2 4 table's internal links (L213, L214) are woven into the "Why" cell text rather than bolted on as "see also", which is the exact shape `blog-craft.md` §Internal linking asks for.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. L205: replace "Same eleven pens, sorted by what you're actually doing with
   them." with "The picks above, sorted by what you're actually doing with
   them." The table below it has 7 job rows covering only 6 distinct pens, so
   "eleven" is wrong. Do NOT add rows to the table to make eleven true, the
   seven-job shape is outline-mandated.

2. L179-189 (Muji H3): add one short rationale sentence after the
   "**Best for:**" line so this pick has the same four-beat shape as the other
   ten, which L65 promises the reader. Use the outline's own §H3 3.10 "Why"
   line: it is an anchor brand from the brief, valued for consistency and
   understated, unbranded design. Frame it as positioning ONLY. Do NOT assert
   ink chemistry, tip sizes, or refill availability, those three claims are
   exactly what the [VERIFY:] markers are holding for Stage 3d. Keep all three
   [VERIFY:] markers on L185 exactly as written.

3. L243: change "she'd killed three gel pens" to "they'd killed three gel
   pens". The source thread does not state the poster's gender. Change nothing
   else in that sentence.

4. L159: delete the two words "and drawing" so the clause reads "It's
   Wirecutter's pick for fine lettering". facts.md supports fine lettering
   only; the drawing/craft-work positioning belongs to the Sakura entry.

5. L24: change "four of the seven roundups I studied" to "four of the seven
   guides I studied". Keep the number. Two of the seven studied results are a
   brand blog and an explainer, not roundups. Leave L123 alone, "two of the
   roundups" is accurate there.

6. L24: add a three-word gloss so "hybrid" is not naked on first use, e.g.
   "its fast-drying hybrid ink, a ballpoint-gel cross". Keep the fuller
   explanation at L48 where it is.

7. L243-249 (H2 6): convert the four bold beats into a "- " bulleted list,
   keeping each bold lead-in inside its bullet. This closes the bullet-list
   density gap in the post's longest bullet-free stretch. Do NOT bullet-ify
   the H3 picks in H2 3, their current shape is a strength.

8. Add one standalone-question paragraph in each of two sections that lack
   one: immediately before the L227 definitions block in H2 5, and at the top
   of H2 6. Make them genuine questions the section then answers (voice.md
   names reader-directed hooks as an Olga signature). Two total, do not
   sprinkle more.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked. Do NOT
introduce em-dashes; keep the comma form in all eleven H3 headings. Do NOT add
prices, dry times, test counts, or the Reddit write-out-length figures.

Produce blog-ops/drafts/best-pens-for-note-taking/draft-v2.md. Do not
overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

**On the verdict.** This is a strong draft that lands one notch short of `approve` on a technicality that is nonetheless real. Every forcing condition in the SKILL's Step 4 tree is clean: no critical issues, no §2 structural delta, no forbidden phrases, no unsourced numeric claims, word count at -6.8% (inside ±10%), no forbidden-SERP link, no missing `| source:` clause, and the competitors module is off so §3.6/§3.7 do not apply. The verdict is `request_revisions` purely because `approve` requires 0 major issues and there are 2. Both are ten-minute fixes. The editor should expect draft-v2 to approve cleanly.

**On the Muji dependency, for Stage 3d.** The post is consistent at eleven today, but the cut path is wider than the Stage 1c.5 note assumed. The full sweep is six places, not four: title (L2), excerpt (L4), intro preview (L20), §H2 3 heading (L63), §H2 1 table (L28–L40, drop the Muji row), and §H2 4 opener (L205). Applying fix I-1 removes the L205 count and shrinks the sweep to five. Cutting the H3 also removes the post's only three `[VERIFY:]` markers and one `[EXTERNAL_LINK_NEEDED:]` product marker, which changes the action-items compile at Phase 4, worth noting so the counts do not look like drift later. My read on the odds: `facts.md` L85 is blunt that Muji is absent from all seven SERP results and appears once on Reddit as a *paper* brand, so Stage 3d should go in expecting to confirm from Muji's own product page or cut, not expecting to find corroboration. Also note that the outline's External link plan reserved an `[EXTERNAL_LINK_NEEDED:]` row for "the tip sizes Muji offers"; the writer expressed that need as three `[VERIFY:]` markers instead. Both compile to action items and both point at the same Muji product page, so this is not a defect, but if the pick survives, that page becomes an actual outbound link and pushes the non-product external count from 6 to 7. Worth deciding at 3d whether the Muji link or one of the duplicate Reddit links goes.

**On the 3d product-link pass.** Eleven `/dp/<ASIN>` lookups need the logged-in `open-claude-in-chrome` browser (Amazon blocks curl and WebSearch). Two picks are the likeliest to need the brand-page fallback rather than a clean Amazon listing: the Muji Gel Ink Ballpoint (patchy non-Muji distribution, which the draft itself flags at L187) and the Uni-ball Signo DX 0.38 (frequently sold as grey-market Japanese imports where the "genuine item" test gets murky). Budget extra time for those two.

**On image placement, noted not flagged.** The L67 `[IMAGE:]` sits immediately before the first H3 rather than after a heading plus a paragraph, which mechanically trips SKILL §4.2b. Not logged as an issue because the approved outline specifies exactly this position and the image illustrates evidence the prior sections established, which is that check's own stated exception. Similarly, SKILL §4.2c trips on the L46 `remotion` slot because the H2 1 table falls inside the ±20-line window, but the table and the diagram share zero content. Both are false positives; recording them here so a future reviewer does not re-litigate.

**Two things I checked hard and found clean, worth stating positively.** First, the forbidden-link discipline is genuinely impressive: the draft names Pen Addict four times and Wirecutter once, leans on both for real claims, and links neither, routing instead to `uniball.com.au`, the primary source Wirecutter itself cites (`serp.md` §Citations harvested row 4). That is exactly the workflow `blog-craft.md` §Forbidden external links prescribes, executed without being reminded in the draft. Second, the tag block (`note-taking`, `students`, `productivity`) is three names that all exist verbatim in `blog.md` §Tag taxonomy, inside the 2–4 band, with zero invented generics. Given that a prior post's invented tags forced a remap at staging, this one should stage without intervention.

**One thing to watch, not an issue yet.** The FAQ runs 349 words against the outline's ~150 estimate. It is ungated and each of the five answers is a reasonable 60–75 words for FAQPage schema, so there is nothing to fix. Flagging only so the +133% against the outline estimate is not read as unexplained drift at a later gate.
