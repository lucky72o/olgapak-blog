# Review: best-notebooks-for-note-taking draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `standards/writing-standards.md`, `standards/blog-craft.md`, `profile/voice.md`, `profile/authors.md`, `profile/audience.md`, `profile/custom-instructions.md`, `profile/blog.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `draft-v1.md` (body prose word count: 2,525 excl. table/image slots/FAQ; outline target: ~2,700, range 2,400–2,900)
- Outline: `outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): All six objective sections pass with zero critical and zero major issues; the draft delivers all 15 picks grouped by use case behind a keyword-question lead H2, an honest trade-off on every pick, correctly-formed affiliate placeholders (no live URLs, no held disclosure), tiered pricing, allowlist-only external links with no SERP-competitor equity leak, and clean warm first-person voice with zero em-dashes and zero forbidden phrases. Only three minor observations are logged, none of which blocks approval.

**Iteration counter:** this is revision pass 1 of 2. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. (Not applicable, verdict is `approve`.)

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (voice.md + authors.md) | Pass | Warm, first-person, lightly self-deprecating ("bought and been quietly let down by enough of them"), reassuring asides, rhythm breaks. Reads as Olga, not generic marketing copy. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Consistent `I`/`you`. The lone "one should" grep hit (line 71) is reader speech inside quotes ("which one should I buy?"), not third-person drift. |
| Active voice (no "X was scanned" shapes) | Pass | No passive markers found. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Short punches ("No hype, just honest trade-offs.", "It depends.") sit beside 25+ word sentences in every section. |
| Forbidden phrases count: 0 | Pass | Grep of both writing-standards.md and voice.md lists returned nothing. |
| Em-dash count: 0 (grep `—`) | Pass | Zero. |
| En-dash context: every `–` hit is inside a numeric range | Pass | All hits are `80–100` / `80–90` gsm ranges (lines 33, 37, 38, 59, 187). Valid. |

Forbidden phrases found (grep from writing-standards.md + voice.md lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per wordpress frontmatter template (title, date, excerpt, tags, authors, draft; NO cover field; NO JSON-LD) | Pass | title, date (2026-07-08), excerpt (146 chars), 3 tags (Productivity/Planning/Focus, all in taxonomy), authors: Olga Pak, draft: true. No cover field (correct, WP ships featured via media upload). No JSON-LD required for wordpress-rest (correctly absent). |
| Title in frontmatter matches outline "Final title" exactly | Pass | `15 Best Notebooks for Note-Taking in 2026 (by Use Case)` matches verbatim. |
| Slug / meta description match outline | Pass | Slug = directory `best-notebooks-for-note-taking` (wordpress template defines no slug field). Excerpt matches outline meta verbatim. |
| H2 order in body matches outline body-sections list exactly | Pass | 9 body H2s in outline order, then the "Turn a full notebook..." conclusion/CTA H2 (outline "Closing CTA"), then `## FAQ`. No additions, removals, or reorderings. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link / preview) | Pass | 4 paragraphs (lines 14/16/18/20), 1–2 sentences each. Target keyword in hook; expertise beat; 1 intro internal link (Cornell); preview. |
| Every H2 has at least one rhythm marker | Pass | Bullet list (H2 1, 2, 9), standalone question (H2 1 "So which notebook is genuinely the best?", H2 2 "Which ink problems?"), and a concrete named product/spec in every section. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 questions, exact-match to the 5 outline FAQ questions in order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest adapter emits no JSON-LD at the frontmatter level; sub-check skipped per SKILL §2.1. |
| Outro / CTA paragraph present | Pass | "Turn a full notebook into something you'll use" sits immediately before `## FAQ`; nothing follows the FAQ. |

Structural deltas vs outline (if any):
- None. The outline's "Closing CTA" is correctly rendered as the `## Turn a full notebook into something you'll use` H2 immediately before the FAQ.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | 80–100 gsm sweet spot, 6 mm Leuchtturm ruling, 7 mm college rule, 90 gsm Rhodia "R" paper, 100 gsm Levenger/Paperage, Rocketbook mechanic + export targets, reMarkable 10.8" all trace to facts.md. No hard dollar figures asserted (all tiers). No `[VERIFY:]` needed because nothing unsourced slipped in. |
| Every competitor name used is discussed with a "best for [segment]" framing | Pass (n/a module) | Competitors module concerns rival products; here every notebook pick carries an explicit "Best for..." label + honest trade-off. No bare dismissals (even Moleskine gets "genuinely fine with pencils, ballpoints, and gel pens"). |
| Pricing / feature claims about competitors match facts.md (dates not stale) | N/A | No named business-competitor pricing rows; product prices are $/$$/$$$ tiers per blog policy. |
| Product mentions (own-product, if product module on) each earn their place | Pass | Own-product touch is a single soft CTA ("try my free AI tools" → Text Summarizer). Not stuffed; deletion rule holds (the CTA paragraph is purpose-built, not sprinkled). |
| Internal links (count: 5) exist per blog-craft | Pass | 1 in intro (Cornell), 4 distributed into the body sections each is relevant to (focused → students, outline → work, AI note-taker → reusable/digital, aesthetic → premium). ≤2 in intro satisfied; no "see also" stack. |
| Every internal blog link is root-relative `{route_prefix}<slug>`, trailing slash iff `blog.trailing_slash: true` | Pass | config.yaml: `route_prefix: /`, `trailing_slash: false`. All 5 links are `/<slug>` form, no trailing slash, no domain. No absolute cross-post links. |
| External links (count: 3 + 1 CTA) each reputable; anchor = literal claim | Pass | fountainpenlove.com (primary), pbs.org/nova (allowlist), penaddict.com (primary), all from the outline external-link plan; anchors are literal claims. CTA olgapak.com/ai-tools is correctly absolute (marketing/tools page). ZERO links to Wirecutter/JetPens/Wired/Gentleman Stationer or any serp.md "Selected results" URL. |
| Target keyword appears 2–8 times in body (actual: 5) | Pass | "best notebooks for note-taking" exact-match ×5 (lines 14, 22, and variants), not stuffed. |

Unsourced / suspicious claims:
- None that block. See §7 minor note on the Life Noble paraphrase (VOC-sourced, wording drifts "notebook" → "paper").

Affiliate + price policy verification (per editor's do-not-flag list):
- 15 `[AFFILIATE-LINK-PENDING: <product>]` placeholders, one per pick, all well-formed. Zero live Amazon URLs. Correct.
- No "As an Amazon Associate" disclosure present. Correct (held).
- No hard dollar price asserted as fact (`grep \$[0-9]` = none); all pricing is $/$$/$$$ tier. Correct.
- Mead Five Star / Muji / Oxford kept general (cover material, spiral, "basic paper") with NO invented GSM/page specs. Correct.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | Pass, nothing unsourced needed one |
| `[EXTERNAL_LINK_NEEDED:]` | 0 | Pass |
| `[INTERNAL_LINK_NEEDED:]` | 0 | Pass |
| `[IMAGE:]` | 5 vs outline 5 inline slots | Pass, matches the outline's 5 inline placements (featured cover is frontmatter-only and correctly NOT inlined) |

Marker-shape problems (lowercase, extra spaces, rogue formats):
- None. Off-shape grep (`[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`) returned nothing. All 15 affiliate placeholders use the exact `[AFFILIATE-LINK-PENDING: <product>]` shape.

Image hygiene:
- Featured-image duplication (§2a): none. No inline placeholder uses `featured.<ext>` or matches the featured flat-lay concept.
- Placement (§2b): each `[IMAGE:]` sits after its H2 heading + first body paragraph. None immediately precedes a heading.
- Table-redundant chart (§2c): the one `remotion` placeholder (line 57) is an explanatory feathering/bleeding/ghosting diagram, not a data chart of the comparison table; no redundancy. Outline correctly earmarked no chart for the H2 1 table section.

## 5. Word count

- Draft: 2,525 words (body prose: intro → CTA, excluding frontmatter, the 15-row comparison table, the 5 image-slot descriptions, the 15 affiliate markers, and the FAQ)
- Outline target: ~2,700 words (roll-up basis: "body prose, no FAQ"; table explicitly excluded)
- Delta: -6.5%
- Band: within ±10% = pass, no issue logged. (For transparency: counting the table + image-slot text + markers the raw post-frontmatter body is ~3,057, but the outline roll-up basis excludes the table, so 2,525 is the correct comparison and it lands comfortably in-band.)

## 6. Humanization floor

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | |
| Zero em-dashes (`—`) | Pass | |
| En-dashes (`–`) only in numeric ranges | Pass | All gsm ranges. |
| First-person throughout | Pass | |
| Active voice | Pass | |
| ≥1 rhythm marker in every H2 | Pass | Every H2 carries a bullet list, a standalone question, and/or a concrete named product — the blog-craft per-H2 OR-test passes cleanly in all 10 sections. |
| ≥1 bullet list per ~300 words | Pass (with note) | 3 bullet lists across the prose; the 15 discrete H3 product blurbs + the comparison table substitute for finer-grained bulleting in a roundup and keep every chunk scannable (no walls of text). See §7 minor. |
| ≥1 standalone-question paragraph per major section | Pass (author voice) | Present in H2 1, 2, 3, 6, 7; Olga's voice supports rhetorical hooks and the per-section OR rhythm rule is satisfied everywhere via concrete examples. |
| ≥1 concrete number or named example per major section | Pass | Every section names specific products and/or specs (gsm, mm ruling, page features). |
| No em-dash overuse | Pass | Zero em-dashes. |
| Visible sentence-length variation in every section | Pass | |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Best premium (Life Noble) | 155 | minor | VOC paraphrase drifts from the sourced quote: reddit.md has "the best notebook I've ever experienced"; the draft renders it as "the best paper they'd ever used." The "paper" swap is a small accuracy nudge (the reviewer scored the notebook overall, not the paper specifically). | Optional: change "called it the best paper they'd ever used" to "called it the best notebook they'd ever used" to match the source (research/reddit.md, r/notebooks PhD thread). No blocker. |
| Best reusable/digital (reMarkable) | 48, 141 | minor | The comparison-table cells for reMarkable read "digital / digital" under Ruling and Paper (gsm); functional but slightly awkward next to the paper rows. | Optional: use an em-word-free label such as "n/a (e-ink)" in the Ruling and Paper columns for the reMarkable row for a cleaner scan. Cosmetic only. |
| Whole post (roundup format) | — | minor | Bullet-list density (3 lists / ~2,525 words) is below the humanization-floor's ~1-per-300-words guideline; the 15 H3 chunks + table legitimately carry the anti-monotony load, so this is noted, not required. | No action needed. If a future revise pass touches a long H3 cluster, a short "at a glance" bullet inside one work/premium section would fully close the guideline. |

## 8. What the draft does well

- **Every one of the 15 picks carries a genuine, specific trade-off**, not a soft-pedaled one (Leuchtturm's "tight 6 mm" ruling + thin-paper ghosting, Rocketbook's app/FriXion lock-in + "only get so many pages," Midori's "bold printed line down the center"). This is the exact honest-buying-guide angle the brief and serp.md angle-opportunities called for. Do NOT sand these down on any future pass.
- **The affiliate + pricing policy is executed correctly end to end**: 15 well-formed `[AFFILIATE-LINK-PENDING:]` placeholders, zero live Amazon URLs, no held "Amazon Associate" disclosure, all pricing as $/$$/$$$ tiers with no hard dollar figure, and Mead/Muji/Oxford kept general with no invented specs. Preserve this discipline verbatim.
- **External-link routing is clean**: the paper-vocabulary claim links to fountainpenlove.com (the primary source Wirecutter cites) and the Moleskine caveat links to penaddict.com, routing entirely around the top-10 SERP competitors (Wirecutter/JetPens/Wired/Gentleman Stationer). Keep these primary-source substitutions exactly as-is.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A (verdict = `approve`). The three items in §7 are optional cosmetic polish the editor or human may apply directly; none requires a writer revise pass.

## 10. Reviewer notes (free-form)

The draft is unusually clean for an iteration-1 review: structure, sourcing, voice, link discipline, and marker hygiene all pass without a single major flag. The two things a human should still eyeball at Phase 4, both outside this skill's remit, are (1) confirming the 15 affiliate placeholders map to the intended ASINs when the Associates program goes live, and (2) sanity-checking the tier assignments ($/$$/$$$) against current retail before publish, since prices are deliberately volatile-safe here but the tiers themselves are the writer's judgment call. The reMarkable/Kindle Scribe pairing and the two-notebook work strategy are strong, on-audience angles competitors miss; no change needed.
