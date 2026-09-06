# Review: best-highlighters-for-studying draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/best-highlighters-for-studying/draft-v2.md`, `.../outline.md`, `.../facts.md`, `.../brief.md`, `.../research/serp.md`, `.../research/reddit.md`, `.../research/x.md`, `.../research/_raw/_stage3d_prep.md`, `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/standards/writing-standards.md`, `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/product.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

Note: iteration 1 was a synthetic length-gate review written by the editor (`review-v1.md`), not a reviewer sweep. This is the first full sweep on this post.

## Reviewed

- Draft: `blog-ops/drafts/best-highlighters-for-studying/draft-v2.md` (word count: 2,685 body prose, intro through the closing CTA, excluding frontmatter, the `## FAQ` block and marker text; 3,354 by plain `wc -w`; outline roll-up target: ~2,600)
- Outline: `blog-ops/drafts/best-highlighters-for-studying/outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning: the draft clears every forcing gate (structure, word count, forbidden phrases, forbidden SERP links, marker source clauses) and is close to shippable, but it asserts a manufacturer claim the workspace has already disproved (Smear Guard on the Sharpie Pocket line, line 173), which is a `major` issue and blocks `approve`. The rest is a short list of accuracy nits and two humanization-floor rows that the same pass can fix cheaply.

**Iteration counter:** this is revision pass 2 of max 2. Verdict is `request_revisions` at iteration 2, so a third writer pass is still in-policy; if a review of draft-v3 also lands on `request_revisions`, the editor escalates to the human rather than dispatching a fourth pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | pass | Warm, first person, lightly self-deprecating. The "Ouch!" beat (line 15) and "Nope!" (line 61) are both on Olga's documented one-word rhythm list. "I have been that student" (line 55) is exactly the anecdote-as-authority move `authors.md` describes. No stiff-marketing drift anywhere. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `one could\|one should\|users are\|stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `was (scanned\|checked\|monitored\|built)`: 0 hits. Passive constructions elsewhere are attributive ("was blamed for bleeding through", line 84), which is correct because the blame is the community's, not the draft's. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length standard deviation (marker text and tables excluded): Intro 15.7, H2 1 7.6, H2 2 9.0, H2 3 10.2, H2 4 9.1, H2 5 9.7, H2 6 8.3, CTA 15.0, FAQ 9.2. Every section is far above the <4 uniformity threshold. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Both lists greped. `blog-ops/profile/voice.md` §Additional forbidden phrases says "None beyond the generic list". |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—' draft-v2.md` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–' draft-v2.md` returns nothing. All ranges are written out ("2 + 5 mm", "80 to 100 gsm", "3.5 to 4 mm"), which is the safest form. |
| Intro jargon check (§Insider-jargon translation + `audience.md` §Niche jargon translation) | pass | Intro (lines 15–23) greped for `SERP`, `funnel`, `featured snippet`, `rich snippet`, `E-E-A-T`, `domain rating`, `keyword difficulty`: 0 hits. Domain jargon is translated on first use in the body as the brief requires: feathering / bleed-through / ghosting (line 79), chisel / bullet / pencil (line 81), gsm (line 84), gutter (line 113). |
| Product code-literal grep (`modules.product` on) | pass | `blog-ops/profile/product.md` defines no backticked code constants; nothing to grep for. N/A in substance. |
| Intro-hook over-anchoring | n/a | The intro hook is a personal anecdote (the all-yellow chapter), not a time-bound event peg, so the check is skipped. The one callback at line 55 ("My glowing chapter from the intro") is a deliberate narrative return, not an anchor the post depends on to stay current. |

Forbidden phrases found (grep output from `standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found. All 23 base phrases greped case-insensitively, including the `leverage` / `cutting-edge` / `pivotal` / `holistic` traps: 0 hits.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (`adapters/publish/frontmatter/wordpress.md`) | pass | `title` (56 chars, in the 50–60 band), `date: 2026-09-05`, `excerpt` (153 chars, ≤160), `tags` (4 entries, all present in `blog.md` §Tag taxonomy: students / note-taking / education / productivity), `authors: [Olga Pak]` (matches `authors.md` byline), `draft: true`. No `cover`/`heroImage` field, which is correct for this adapter (featured ships via media upload). FAQPage JSON-LD is not required at the adapter level for `wordpress-rest`, so that sub-check is skipped per the skill. |
| Title in frontmatter matches outline "Final title" exactly | pass | `11 Best Highlighters for Studying in 2026 (by Study Job)`, byte-identical to outline §Final title. |
| Slug / meta description match outline | pass | Slug is the directory name `best-highlighters-for-studying` (the WordPress frontmatter template defines no slug field). `excerpt` is byte-identical to outline §Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | Draft H2s in order: What are the best highlighters for studying? (25) / Does highlighting actually help you study? (49) / How to choose a highlighter for studying (a 60-second primer) (73) / The 11 best highlighters for studying (87) / How to highlight over gel pen ink without smearing (193) / Highlighting on paper vs on an iPad (207) / Turn the highlights into something you can revise from (215) / FAQ (221). Exact match to outline H2 1–6 + §Closing CTA + §FAQ block. All 11 pick H3s present in outline order (lines 93–191), none added, none dropped. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Four paragraphs (15, 17, 19, 21) plus the mandatory affiliate disclosure at 23, which the outline explicitly sanctions as a fifth block ("4 paragraphs max, plus the mandatory affiliate disclosure line"). Sentence counts: 2 / 1 / 1 / 1. Disclosure wording is verbatim per `custom-instructions.md` §Content policy and sits immediately before the first `##`. |
| Intro internal links ≤2; no absolute cross-post links | pass | 1 intro internal link (`/note-taking-methods`, line 19). Grep for `olgapak.com` in the body: 0 hits, so no absolute cross-post link. All 6 internal links are root-relative with no trailing slash, matching `blog.route_prefix: /` + `blog.trailing_slash: false`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | Every H2 carries at least a concrete number, and burstiness is high everywhere. See §6 for the stricter per-section standalone-question row, which does not pass. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 4 questions, in outline order, wording matched: pastel vs neon / why does it bleed through / gel pen without smearing / does highlighting actually help. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | n/a | `publish.adapter: wordpress-rest`. The WordPress frontmatter template states FAQPage JSON-LD is a WP-plugin concern, not an adapter output, so there is no `mainEntity` array to diff. |
| FAQ is the last block, nothing after it | pass | File ends at line 237 with the last FAQ answer. The CTA H2 sits immediately before `## FAQ`. |
| Outro / CTA paragraph present, links the blog CTA with an action anchor | pass | Two short paragraphs (217, 219), 97 words against the outline's ~100. Anchor "Try my free AI tools" → `/ai-tools`, matching `blog.md` §Primary CTA hook exactly. No feature re-list, no prices. |

Structural deltas vs outline (if any):
- **H2 1 dropped the outline's short-answer bullets.** Outline §H2 1 specifies "opens with a standalone-question paragraph ... and a four-line short answer, then the comparison table", with five named bullets (Best overall for notes / Best for textbooks / Best over gel ink / Best for thin paper / Best budget pack). Draft-v2 keeps the standalone question (line 27) but compresses the short answer to one sentence naming only two picks (line 29). This is a content-level drift, not an H2-order delta, so §2 still passes, but it costs the section its most snippet-eligible block. Logged as `minor` in §7.
- No other drift. Heading set, FAQ set, CTA placement and disclosure placement are all exactly as planned.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass (with 1 nit) | Every hard spec in the draft was traced row by row: 1971, 2 + 5 mm, 1 + 4 mm, 3.8 mm, 3.5 to 4 mm, 4 hours, 4 neon colours, 5 colours / 5- and 12-packs, 5 to 25 pens across six named palettes, 6 Tombow colours, 8 fluorescent + 14 pastel, 14 pastel, ~40 shades attributed to Wirecutter, 80 to 100 gsm, Reddit scores 490 / 101 / 91 / 37, "4+ years". All present in `facts.md` §Statistics / §Quotes / §Named examples / §Manufacturer facts. The one derived number without a facts.md row is the Kire-Na "five bright and five pale" split (lines 45, 187), logged `minor` in §7. Also correct by omission: no Kire-Na dry time in seconds, no exact Mildliner colour count, no Tombow bullet-tip width, no prices anywhere. Every one of those is on the facts.md §Rejected list and the draft honors all four. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | n/a | `modules.competitors: false`. The product picks are not competitors; each nonetheless carries a **Best for:** and a **Watch out:** line, and criticism is attributed to its source rather than asserted (line 115 r/pens on the Mojini, line 129 Wirecutter on the Mildliner). |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | n/a | Module off. No `Last verified` stamp appears in reader-facing prose (greped): correct. |
| Product mentions (count: `1` block, `modules.product` on) are each earning their place | pass | Olga's tools appear only at line 217, in the closing CTA, exactly as `brief.md` §Product features to mention requires ("Never wedged into the product picks"). The sentence fails the deletion test in the right direction: remove the tools and the paragraph has no subject. Text Summarizer and Text Simplifier are the two `facts.md` §Product facts names for this post's CTA. Zero body mentions. |
| Own-product pricing claims (§Own-product pricing claims) | pass | Grep `\$[0-9]`: 0 hits. "free AI tools" is durable framing and factually correct (`product.md`: the tools are free, there is no pricing page). The `$`/`$$`/`$$$` tokens in the comparison table are bands, explicitly defined as such at line 47, not prices. |
| Soon-to-ship feature gap check | pass | `brief.md` §Soon-to-ship features: "None". Nothing to flag. |
| Internal links (count: `6`) placed contextually per `standards/blog-craft.md` §Internal linking | pass | `/note-taking-methods` (intro), `/cornell-note-taking-method` (H2 2), `/best-notebooks-for-note-taking` (H2 3), `/best-pens-for-note-taking` (H2 5), `/how-to-take-notes-on-ipad` (H2 6), `/ai-tools` (CTA). The five post links match the outline §P3 placement table row for row. The sixth is the CTA product target, a different class. First internal link (line 19) precedes the first external link (line 57). |
| Every internal blog link is root-relative `/`<slug> with no trailing slash | pass | All six confirmed. 0 absolute `olgapak.com` links. |
| External links (count: `5` editorial + `11` buy links) each point to reputable sources; anchor text = literal claim | pass | Editorial set: journals.sagepub.com (line 57), stabilo.com (85), zebrapen.com (113), tombowusa.com (133), nytimes.com/wirecutter (199). That is the outline §External link plan set exactly, five of five, within the 3–5 target. Anchor text is the literal claim in every case ("rated highlighting a low-utility study technique", "can be left with its cap off for up to 4 hours without drying out", "binds with water-based ink such as gel, ballpoint, fountain, and inkjet to prevent smudging", "doesn't smear when highlighting over pencil or ink", "some ink, particularly gel ink, can smudge pretty badly while being highlighted"). Buy links: all 11 present, 9 tagged `amazon.com/dp/<ASIN>?tag=op01e-20` and 2 brand pages (staedtler.com, pilotpen.com.sg) for the picks Amazon US does not carry, matching the outline §Product buy links table row for row. No `[AFFILIATE-LINK-PENDING:]`, no untagged Amazon URL. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | pass | Forbidden set from `research/serp.md` §Selected results analyzed: goldspot.com, stationerynerd.com, jetpens.com, executivepensdirect.com, nytimes.com. Hosts the draft actually links: journals.sagepub.com, pilotpen.com.sg, www.amazon.com, www.nytimes.com, www.stabilo.com, www.staedtler.com, www.tombowusa.com, www.zebrapen.com. Only `nytimes.com` intersects the forbidden set, and it is allowlist-class per `blog-craft.md` §Authoritative-site allowlist (major publications: NYT), so the exception is intentional and permitted. Zero violations. Notably clean given how much the draft leans on JetPens- and Stationery Nerd-derived material: both are cited in prose without a link ("one large hobbyist pastel swatch test", line 141) exactly as facts.md instructs. |
| Target keyword appears 2–8 times in body (actual count: `3`) | pass | Lines 15 (intro hook), 25 (H2 1), 87 (H2 4). Two more instances live in frontmatter `title` and `excerpt`, which are not body hits. Comfortably inside the band, no stuffing. |

Unsourced / suspicious claims:
- `draft-v2.md:173`, "with the Clear View's Smear Guard ink claim" (Sharpie **Pocket**), issue: **contradicted by an already-verified source in this workspace.** `research/_raw/_stage3d_prep.md` records that the editor loaded https://www.sharpie.com/highlighters/sharpie-pocket-highlighters-chisel-tip/SAP_27145.html on 2026-09-05 and found the page "does NOT mention Smear Guard or bleed-through", with the explicit scope note "do not attribute Smear Guard to the Pocket line". The writer's `[VERIFY:]` points at `facts.md` §Named examples, which does carry the claim, but that row's only sources are Goldspot and Stationery Nerd (both SERP competitors, both flagged do-not-link) plus a 403 from sharpie.com. The primary source now exists and it does not support the claim. Logged `major` in §7.
- `draft-v2.md:45` and `draft-v2.md:187`, "Both (5 bright, 5 pale)" / "Ten colours, five bright and five pale", issue: `facts.md` §Manufacturer facts lists the ten Kire-Na colour names (Blue, Green, Orange, Pink, Yellow, Warm Gray, Pale Pink, Pale Orange, Pale Blue, Pale Green) but never states a 5/5 bright-versus-pale split, and Warm Gray is not a pale. "Ten colours" is sourced; the split is the writer's inference and one of the five is mischaracterized. Logged `minor` in §7.
- `draft-v2.md:41`, table cell "Chisel" for the Pilot FriXion Light, issue: the same tip-shape claim is wrapped in `[VERIFY:]` at line 149, so the draft asserts as bare fact in the table what it marks as unverified in the prose. (For the editor: `_stage3d_prep.md` has since confirmed "1.0 – 3.3mm Chisel tip" on Pilot Pen Australia, so the claim is true and the marker is resolvable, but the two lines must move together at Stage 3d.) Logged `minor` in §7.
- `draft-v2.md:85`, "refills were what people said they would pay extra for", issue: `facts.md` §Mechanics facts says "refillability is a real purchase driver (**one user** would pay a large premium for reliable refills)". The draft pluralizes a single commenter into "people". Logged `minor` in §7.
- `draft-v2.md:115`, the quoted fragment "no better than regular good quality highlighters", issue: presented as a verbatim quote but not carried in `facts.md` §Quotes. It is genuine and traceable (`research/reddit.md:73`, the r/pens Zebra smudge-test OP), so this is a citation-hygiene gap, not an invented quote. Logged `minor` in §7.
- `draft-v2.md:209`, "students who study paperless recreate the Stabilo Boss and Mildliner palettes as hex codes", issue: `facts.md` §Named examples flags this source as "usable as a named example of the digital crossover, **not as a statistic**". The draft's plural-generic phrasing reads as a behavioral pattern rather than one named instance. Logged `minor` in §7.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `4` | Yes. Lines 57, 149, 157, 173. All four carry a literal ` \| source:` separator and a non-trivial, honest clause (no "TBD", no restated claim, no "see context"). Line 149's clause is exemplary: it splits what facts.md covers from what is the writer's own product knowledge. Named source files all exist: `facts.md` §Study-science facts and §Named examples are both real sections. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | Yes. All five planned external links resolved to real URLs, so none is expected. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes. All five planned internal links resolved. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Count matches. Placement: all four sit after their H2 and after that section's first body paragraph (49→51→53, 73→75→77, 87→89→91, 193→195→197), which is the rule. None is immediately followed by a heading. No slot names `featured.<ext>`, so the featured asset is not duplicated inline. One concept-overlap nit, see §7. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greped for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`, `[AFFILIATE`: 0 hits. Every marker is in the canonical shape from `blog-craft.md` §Placeholder marker shapes.

Table-redundant-chart sub-check: the line 53 `remotion` slot sits 8 lines below the comparison table (lines 33–45), inside the ±20-line window, but its subject is the three-colour key (a conceptual diagram with fixed colour meanings and two rules), which shares no data with the comparison table. Not flagged. Same reasoning clears line 77 (tip-shape scale diagram). Both are genuine diagrams, matching `custom-instructions.md` §Image style ("`remotion` only for genuine diagrams/charts").

## 5. Word count

- Draft: `2,685` words (body prose: intro through the closing CTA H2, excluding frontmatter, the `## FAQ` block, and the text inside `[VERIFY:]` / `[IMAGE:]` markers, which is the same basis `review-v1.md` used)
- Outline target: `2,600` words (outline §Word count roll-up; plan range 2,400–2,800)
- Delta: `+3.3%`
- Band: within ±10% = pass, no issue logged

The v1 length failure is fully resolved: 3,070 → 2,685, a 385-word cut that landed inside the plan range with room to spare. Per-section actuals against the roll-up:

| Section | v1 | v2 | Outline target | Note |
|---|---|---|---|---|
| Intro | 190 | 190 | ~200 | on target, untouched as instructed |
| H2 1 `What are the best highlighters for studying?` | 417 | 356 | 250 | trimmed 61 of the ~147 requested; still the largest per-section overage |
| H2 2 `Does highlighting actually help you study?` | 303 | 310 | 350 | on target |
| H2 3 `How to choose a highlighter (60-second primer)` | 375 | 328 | 300 | trimmed 47, near target |
| H2 4 `The 11 best highlighters for studying` | 1,360 | 1,109 | 1,100 | trimmed 251, on target |
| H2 5 `How to highlight over gel pen ink without smearing` | 174 | 184 | 180 | on target |
| H2 6 `Highlighting on paper vs on an iPad` | 103 | 111 | 120 | on target |
| CTA `Turn the highlights into something you can revise from` | 87 | 97 | ~100 | on target |
| **Body total (gated)** | **3,070** | **2,685** | **~2,600** | **+3.3%, pass** |
| FAQ (not gated) | 316 | 318 | ~200 | not part of the gated total |

H2 1's residual overage is logged as `minor` in §7 rather than a §5 failure, because the gated total is what §5 measures and it passes cleanly. There is roughly 115 words of headroom to the plan ceiling of 2,800, which is enough to absorb the small additions this review requests.

## 6. Humanization floor (per `standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists, 0 hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | 0 hits. |
| En-dashes (`–`) only in numeric ranges | pass | 0 hits at all; every range is spelled out. |
| First-person throughout | pass | "I once opened", "I have worn through", "I have been that student", "the order I would try them", "the detail that surprised me most". No third-person drift. |
| Active voice | pass | 0 passive-marker hits; the passives that exist are attributive by design. |
| ≥1 rhythm marker in every H2 | pass | Every H2 carries a concrete number at minimum; H2 1, H2 2, H2 3, H2 4 and H2 5 also carry a list or a question. |
| ≥1 bullet list per ~300 words | **fail** | 4 lists (lines 63–65, 81–85, 183–185, 203–205) across 2,685 body words, against a floor of roughly 9. Mitigating: the 11-row comparison table, 11 scannable H3 blocks and 22 bold **Best for:** / **Watch out:** lines carry most of the scanning load the rule exists to protect, which is why this is logged `minor` rather than `major`. The thinnest stretch is H2 4's 100-line run (93–191) with a single list in it. |
| ≥1 standalone-question paragraph per major section (Olga's voice explicitly calls for rhetorical openers, per `voice.md` §Lexicon) | **fail** | 3 of 8 body sections have one: line 27 ("So which highlighter should you actually buy?"), line 59 ("So should you stop highlighting?"), line 211 ("So should you just highlight on a screen?"). Missing in H2 3, H2 4, H2 5 and the CTA. Logged `minor` in §7 with two suggested insertion points. |
| ≥1 concrete number or named example per major section | pass | H2 1: 11-row table with tip widths. H2 2: score 101, the 2013 review, the three-colour key. H2 3: 2 + 5 mm, 80 to 100 gsm, score 490, 4 hours. H2 4: a spec in every one of the 11 picks. H2 5: four named ink classes plus the Wirecutter quote. H2 6: three named apps. CTA: two named tools. |
| No em-dash overuse | pass | Zero, so nothing to overuse. |
| Visible sentence-length variation in every section | pass | Minimum section standard deviation is 7.6 words (H2 1), nearly double the 4-word floor. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| `The 11 best highlighters for studying` (Sharpie Pocket) | 173 | major | The draft attributes Smear Guard ink to the Sharpie **Pocket** line. `research/_raw/_stage3d_prep.md` records that Sharpie's own Pocket Highlighters product page was loaded on 2026-09-05 and does not mention Smear Guard at all, with the explicit note "do not attribute Smear Guard to the Pocket line". The facts.md row that the `[VERIFY:]` points at is sourced only to two SERP competitors and a 403. | In the Sharpie Pocket paragraph, delete the clause ", with the Clear View's Smear Guard ink claim" and delete the whole `[VERIFY: Sharpie Pocket chisel-tip highlighters use Smear Guard ink \| source: facts.md Named examples, Sharpie row]` marker. Replace with a claim Sharpie's own Pocket page supports: the chisel tip, the pocket clip, and the large multipacks. Leave the Sharpie Clear View Smear Guard sentence and its `[VERIFY:]` at line 157 exactly as they are, that one is supported. |
| `What are the best highlighters for studying?` / `The 11 best highlighters for studying` (Pilot Kire-Na) | 45, 187 | minor | "5 bright, 5 pale" / "five bright and five pale" is a split facts.md does not state, and Warm Gray (one of the ten) is not a pale. | Change the table cell at line 45 to `Both (10 shades)` and the sentence at line 187 to "Ten colours, five bright and five soft, one of them a warm gray, no Amazon US listing." Keep the "Ten colours" figure, it is sourced. |
| `What are the best highlighters for studying?` (FriXion row) | 41, 149 | minor | The table asserts "Chisel" as the FriXion Light's tip while the prose marks the same claim `[VERIFY:]`, so the post states as fact in one place what it flags as unverified in another. | Leave the `[VERIFY:]` at line 149 in place, but add the tip-shape claim to its scope so Stage 3d knows the table cell moves with it: change the table cell at line 41 from `Chisel` to `Chisel [VERIFY: see line 149]`, or simply leave both and let the editor note it. Do not delete either. |
| `How to choose a highlighter for studying (a 60-second primer)` | 85 | minor | "refills were what people said they would pay extra for" pluralizes what facts.md records as one user. | Change to "and one commenter in that thread said reliable refills were the one thing they would pay a real premium for". |
| `The 11 best highlighters for studying` (Zebra Mojini) | 115 | minor | The quoted fragment "no better than regular good quality highlighters" is verbatim from `research/reddit.md:73` (the r/pens smudge-test OP) but is not carried in `facts.md` §Quotes, so it ships as a quotation with no facts.md row behind it. | Keep the quote, it is accurate. Add the source to the sentence so the attribution is checkable: "...still smeared some gel and fountain-pen inks, and the tester's verdict was that they seemed \"no better than regular good quality highlighters\"." No marker needed; the editor will add the facts.md row. |
| `Highlighting on paper vs on an iPad` | 209 | minor | "students who study paperless recreate the Stabilo Boss and Mildliner palettes as hex codes" reads as a general behavioral claim; facts.md flags this source as a named example, not a statistic. | Reframe as the single instance it is: "The detail that surprised me most in the research: someone had rebuilt the Stabilo Boss and Mildliner palettes as hex codes for GoodNotes, Notability and Noteshelf." |
| `What are the best highlighters for studying?` | 27–31 | minor | The outline specified a four-line short answer with five named bullets (Best overall for notes / Best for textbooks / Best over gel ink / Best for thin paper / Best budget pack). The v1→v2 trim removed it, leaving a one-sentence answer naming two picks. This was the section's most snippet-eligible block. | Restore a compact five-line bullet answer immediately after line 29, before the table: `**Best overall for notes:** Zebra Mildliner`, `**Best for textbooks:** Stabilo Boss Original`, `**Best over gel ink:** Zebra Mojini`, `**Best for thin paper:** Staedtler Textsurfer Dry`, `**Best budget pack:** Sharpie Pocket`. Names only, no explanations, roughly 30 words total. |
| `How to choose a highlighter for studying (a 60-second primer)` | 356 words in H2 1; 328 in H2 3 | minor | H2 1 is 356 words against an outline target of 250 (+42%) and H2 3 is 328 against 300, so the v1 trim instruction for those two sections was only partly applied. The gated body total is fine at +3.3%, so this does not fail §5. | Take about 25 words out of H2 1's prose (not the table, not the bullets you are about to add) to pay for the restored short-answer bullets. No change needed in H2 3. |
| `How to choose a highlighter` / `The 11 best highlighters` / `How to highlight over gel pen ink` | 75, 89, 195 | minor | Four of eight body sections have no standalone-question paragraph, against the humanization floor's "at least one per major section" and Olga's own documented rhetorical-opener habit. H2 4 in particular runs 100 lines without one. | Add one short standalone question, on its own line, in two of these three places. Suggested: before line 75, "So what actually separates a good highlighter from a bad one?"; before line 89, "So which one belongs in your bag?" Do not add more than two, and keep each under 10 words. |
| `Does highlighting actually help you study?` | 53 | minor | The line 91 in-post `[IMAGE:]` concept (warm flat-vector desk scene, open textbook, fan of highlighters, natural wood tones) overlaps heavily with the outline's featured-image concept (flat-vector scene, warm wooden desk, open textbook, fan of pastel highlighters). Two near-identical illustrations would render within one scroll of each other. | No draft change required. Editor/Stage 4a note only: differentiate the two at image-generation time, e.g. make the in-post slot a close-up of the marked page rather than a second full desk scene. |

## 8. What the draft does well

- **The forbidden-link discipline is genuinely hard-won and must not be undone.** This post leans on material that originated at JetPens, Goldspot and Stationery Nerd, all SERP top-10 competitors, and it cites every one of them in prose without a link: "one large hobbyist pastel swatch test" at line 141 instead of a Stationery Nerd URL, the ink-reaction mechanism at lines 83 and 195 routed through the Zebra and Wirecutter sources instead of JetPens, the Kire-Na award at line 181 attributed to Pilot's own February 2025 announcement instead of JetPens' retelling, and the correct award name ("Japan's Stationery Shop Award 2025", not the "Japan Stationery Awards" that retailers use). Zero forbidden links in a post this dependent on competitor research is the single best thing here. Do not "improve" any of these by adding a source link.
- **Every facts.md §Rejected row is honored.** The draft says "quick-drying" for the Kire-Na and never the 2-second JetPens figure; "around 40 shades" attributed to Wirecutter and never an exact Mildliner count; "extra-fine bullet tip" for the Tombow and never 0.8 or 0.5 mm; no dollar price anywhere despite eleven affiliate products; no "Europe's No. 1 highlighter". Four traps, four avoided. Keep all four exactly as written.
- **The three-colour key at lines 61–69 is the thing that makes this more than a product list, and it is structurally load-bearing.** It gives the honest study-science finding somewhere to land instead of leaving the post arguing against its own topic, it carries the two hard rules ("one line per paragraph", "second pass only"), it hands off cleanly into the Cornell internal link at line 69, and it is what the CTA at line 217 pays off. Do not compress it, do not move it, and do not soften the "second pass only" rule.

## 9. Instructions for writer (only if verdict = `request_revisions`)

```
The editor requested revisions to draft-v2.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. SHARPIE POCKET, FACTUAL FIX (the only blocking issue). In the "Sharpie
   Pocket chisel-tip highlighters" H3, delete the clause ", with the Clear
   View's Smear Guard ink claim" AND delete the entire marker
   [VERIFY: Sharpie Pocket chisel-tip highlighters use Smear Guard ink |
   source: facts.md Named examples, Sharpie row].
   Sharpie's own Pocket Highlighters page does not mention Smear Guard;
   the claim is not supportable for this line. Replace it with what that
   page does support: chisel tip, pocket clip, sold in large multipacks.
   Leave the Sharpie Clear View Smear Guard sentence and its [VERIFY:]
   marker in the Clear View H3 completely untouched, that one is fine.

2. PILOT KIRE-NA COLOUR SPLIT. In the comparison table, change the
   "Neon or pastel" cell for Pilot Kire-Na from "Both (5 bright, 5 pale)"
   to "Both (10 shades)". In the Kire-Na H3, change "Ten colours, five
   bright and five pale, no Amazon US listing." to "Ten colours, five
   bright and five soft, one of them a warm gray, no Amazon US listing."

3. REFILL CLAIM. In the "Dry-out and refills" numbered item, change
   "and refills were what people said they would pay extra for" to
   "and one commenter in that thread said reliable refills were the one
   thing they would pay a real premium for".

4. R/PENS QUOTE ATTRIBUTION. In the Zebra Mojini H3, change
   "...still smeared some gel and fountain-pen inks, \"no better than
   regular good quality highlighters\"." to
   "...still smeared some gel and fountain-pen inks, and the tester's
   verdict was that they seemed \"no better than regular good quality
   highlighters\"."

5. IPAD SECTION, SINGLE-EXAMPLE FRAMING. Change "students who study
   paperless recreate the Stabilo Boss and Mildliner palettes as hex
   codes for GoodNotes, Notability and Noteshelf" to "someone had rebuilt
   the Stabilo Boss and Mildliner palettes as hex codes for GoodNotes,
   Notability and Noteshelf". Keep the rest of the sentence and the
   following two paragraphs as they are.

6. RESTORE THE SHORT-ANSWER BULLETS in "What are the best highlighters
   for studying?". Immediately after the "If you want one answer and no
   shopping..." sentence and BEFORE the "Here is the whole shortlist"
   line, add exactly these five bullets, names only, no explanations:
   - **Best overall for notes:** Zebra Mildliner
   - **Best for textbooks:** Stabilo Boss Original
   - **Best over gel ink:** Zebra Mojini
   - **Best for thin paper:** Staedtler Textsurfer Dry
   - **Best budget pack:** Sharpie Pocket
   Then cut about 25 words of prose from elsewhere in that same H2 to pay
   for them. Do not cut the table, the bullets, or the price-tier line.

7. ADD TWO STANDALONE QUESTIONS, each on its own line, each under 10
   words: one as the opening line of "How to choose a highlighter for
   studying (a 60-second primer)" (suggested: "So what actually separates
   a good highlighter from a bad one?") and one as the opening line of
   "The 11 best highlighters for studying" (suggested: "So which one
   belongs in your bag?"). Exactly two, no more.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to (only item 1 says to).
Do NOT change the H2 order, title, slug, meta description, or FAQ set, those
are locked. Do NOT add or remove any link: all 11 buy links, the 5 external
links and the 6 internal links stay exactly as they are. Do NOT touch the
three-colour key section, the affiliate disclosure, or the frontmatter.
Keep zero em-dashes and zero en-dashes. Net word change should be roughly
+20 words; the body must stay between 2,400 and 2,800 words.

Produce blog-ops/drafts/best-highlighters-for-studying/draft-v3.md. Do not
overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- **This is a strong draft and the revise list is deliberately narrow.** Only item 1 blocks approval; the other six are cheap accuracy and rhythm fixes bundled in because the pass is happening anyway. If the editor wants to minimize churn, items 1 through 5 are the ones that change what the post asserts; items 6 and 7 are quality-of-reading.
- **For Stage 3d, three of the four `[VERIFY:]` markers are already resolvable from `research/_raw/_stage3d_prep.md`**, which the writer does not appear to have had: the Dunlosky claim is confirmed verbatim ("Five techniques received a low utility assessment: summarization, highlighting..."), the Clear View Smear Guard claim is confirmed on sharpie.com with the caveat "let ink dry before highlighting", and the FriXion Light chisel tip is confirmed at "1.0 – 3.3mm Chisel tip" on Pilot Pen Australia along with the heat caution. The fourth (Sharpie Pocket) is disproved, which is issue 1 above. Stage 3d should also carry the FriXion tip confirmation into the comparison table cell at line 41, not just the prose.
- **Watch the FriXion "hot car, a radiator" phrasing at line 153.** Pilot's own caution is the general "do not leave writing where it may be subjected to high temperatures for a prolonged period" plus "ink will reappear at approximately -10°C". The hot-car and radiator examples are the writer's illustration rather than Pilot's wording. They are covered by the line 149 marker and are reasonable, but if Stage 3d tightens that sentence, keep the illustrations and attribute the caution to Pilot rather than dropping to a bare temperature.
- **The bullet-density floor is the one humanization row this post structurally cannot meet**, and I do not think it should try. A product roundup carries its scannability in an 11-row comparison table and 11 H3 blocks with bold Best for / Watch out lines. Adding lists inside the pick H3s would make them worse. Flagged as `minor` for the record; the editor should not push the writer on it beyond the two standalone questions requested.
- **Image note for Stage 4a:** the outline's featured concept and the in-post slot at line 91 are close enough that generating both from their current descriptions risks two near-identical warm flat-vector desk scenes appearing within a screen of each other. Differentiate at prompt time (close-up of a marked page for the in-post slot), not by editing the draft.
