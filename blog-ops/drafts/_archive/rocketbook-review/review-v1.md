# Review: rocketbook-review draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/rocketbook-review/draft-v1.md`, `blog-ops/drafts/rocketbook-review/outline.md`, `blog-ops/drafts/rocketbook-review/facts.md`, `blog-ops/drafts/rocketbook-review/brief.md`, `blog-ops/drafts/rocketbook-review/research/serp.md`, `blog-ops/drafts/rocketbook-review/research/reddit.md` (plus `research/_raw/reddit-57-longterm.json` to check quote attribution), `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/rocketbook-review/draft-v1.md` (word count: `2,150` body prose, FAQ, table rows, image placeholders and link URLs excluded; outline target: `~2,260`)
- Outline: `blog-ops/drafts/rocketbook-review/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is structurally clean, on-voice, within word count and free of forbidden phrases, em-dashes and SERP-competitor links. Two sourcing errors block approval: line 134 attributes the "3-4 weeks" quote to the wrong owner (the 6-refills owner is a different person), and line 144 turns one light-use owner's hedged comment into "owners said the 0.5 mm pens last longer and smudge less", a claim that is not in facts.md and sits right next to an affiliate link.

**Iteration counter:** this is revision pass `1` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Pass | Warm, practical, lightly self-deprecating ("filled more notebooks than I'd like to admit", line 16). Uses her rhythm beat "Ouch!" (line 134). "Not sold? Fair enough." (line 169) and "no shame in that" (line 181) fit. One voice-note miss: "always translates niche jargon on first use" (see §7, ghosting at line 27). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | 0 hits for `one could / one should / users are / stakeholders`. |
| Active voice (no "X was scanned" shapes) | Pass | 0 hits for passive markers. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Sentence-length stddev per section: Intro 10.3, How I Evaluated 7.7, What a Rocketbook Is 12.1, Lineup 7.6, What Works 12.0, What Does Not Work 20.5, Holds Up 14.2, Pens 9.5, Who It Is For 10.2, Alternatives 7.6, CTA 5.0. Key takeaways is 2.7, but it is a mandated block of one-sentence bullets, so the bullet list is its rhythm marker; not logged. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Base list grepped; voice.md adds none. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | None. The two spaced hyphens (lines 88, 154) are inside verbatim Reddit quotes; leave them. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

Other §1 checks: intro jargon grep (SERP / funnel / snippet / E-E-A-T, plus audience.md's table) returns 0 hits in lines 13 to 20. Product code-literal grep: no product or AI-tools mention anywhere (standing rule honored). Intro-hook over-anchoring: no time-bound event hook, skipped.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | Pass | wordpress-rest template: title (54 chars), date, excerpt (154 chars), 3 tags all from the live taxonomy in blog.md (`note-taking`, `students`, `productivity`), `authors: Olga Pak`, `draft: true`, no cover field. JSON-LD not required for this adapter. |
| Title in frontmatter matches outline "Final title" exactly | Pass | Exact match. |
| Slug / meta description match outline | Pass | Excerpt matches "Final meta description" exactly; slug `rocketbook-review` matches the directory. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | All 10 outline H2s present in order. The extra `## So, Should You Get One?` (line 177) is the outline's Closing CTA section given a heading, which matches the live posts' convention (gifts-for-students, best-notebooks, best-pens all head their closing section with an H2). Not a delta. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | 3 paragraphs (hook, expertise + internal link, preview) plus the mandated italic affiliate disclosure as the last intro paragraph (line 20). Each paragraph 1 to 3 sentences. 1 intro internal link (≤2). |
| Direct answer within the first forty words of the body (outline P1 "Direct answer" clause present in the hook) | Pass | "worth it ... yes, if you hand-write a lot and mainly want pages you can wipe and reuse" lands by word 28; the app-as-extra clause by word 40. |
| Key takeaways block present with 3–5 concrete bullets when the outline has `H2 1: Key takeaways` (required intents: transactional, comparison, review, how_to, data_driven, informational_pillar) | Pass | 5 bullets, first restates the answer, each carries a number, a name or a recommendation. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Every section has a number or named example; most also have a list. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 of 5, same questions, same order. FAQ is the last block. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest: FAQPage schema is a WP-plugin concern. |
| Outro / CTA paragraph present | Pass | Lines 179 to 181: action anchor "Check the Rocketbook Core's price on Amazon" with tagged link, plus the paper-roundup pointer. Replaces blog.md's AI-tools CTA per the brief's standing rule. 2 short paragraphs. |

Structural deltas vs outline (if any):
- None. The CTA heading at line 177 is the outline's Closing CTA, headed per site convention.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Fail | "0.5 mm pens last longer and smudge less" (line 144) is not in facts.md; it exists only in research/reddit.md line 50 as one hedged, light-use comment. Line 134 misattributes the "3-4 weeks" quote. Every other number checks out (lineup table, $35 Core, $9 3-pack, 140°F, 10 to 20 seconds, 7 and 8 months, 70 pages, seven models). |
| Every competitor name used carries a "Best suited to" sentence plus a trade-off, not a takedown | Pass | competitors module off. Alternatives (paper + phone, reMarkable Paper Pro / Kindle Scribe, iPad) each get a "Best for" line and, for e-ink, explicit trade-offs (lines 171 to 175). |
| Methodology H2 present with criteria and disclosure (transactional, comparison and review posts; a review's disclosure only when it names this blog's product; `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Comparison posts) | Pass | "How I Evaluated It" (line 30) sits before "What Works", names 6 criteria in order and how each was checked, and states plainly it is research-led, not a lab test. Disclosure line N/A (this blog's product is not named). |
| Every comparison table cell is a fact, not an adjective; when `modules.product` is on, the product appears as an option in the table (N/A for a review without a comparison table of options, or with the module off; a table of the reviewed product's own plans is not one) | Pass | 0 adjective hits in table cells; every cell traces to verify-07/verify-08 rows in facts.md. Product-in-table: N/A (the lineup table is the reviewed product's own models, and the standing rule bars any product mention). |
| The plan's information gain element survived into the draft, in the H2 the outline names | Pass | Seven-model "which Rocketbook for which note-taker" table in H2 4 (lines 57 to 67); dated owner reports in H2 6, 7 and 8. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | competitors module off. Rocketbook store prices are dated October 2026 snapshots per facts.md. |
| Product mentions (count: `0`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | Pass | 0 mentions, as the brief requires (standing rule: no AI-tools mention). |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass | 1 in the intro (line 16), 4 in the body exactly where the outline placed them (lines 84, 100, 165, 175). First internal link precedes the first external link. |
| Every internal blog link is root-relative `/<slug>` (no trailing slash, per `blog.trailing_slash: false`), not `https://olgapak.com/...` (absolute = `major`) | Pass | All 5 root-relative, no trailing slash; 0 absolute olgapak.com links. |
| External links (count: `5` citations + `11` affiliate) each point to reputable sources; anchor text = literal claim | Pass | 2 Rocketbook help-center (primary), 3 r/rocketbook threads (primary owner reports), each anchored on the literal claim. None is a top-10 SERP URL (forbidden set: trustedreviews, crackberry, techfortravel, the-gadgeteer, smarthomesolver, pocket-lint, trustpilot, reddit xj2z3h); xj2z3h quotes at lines 84 and 154 are correctly unlinked. All 11 Amazon links use ASINs from facts.md with `?tag=op01e-20`. Pens help page linked once only, as the outline asked. |
| Target keyword appears 2–8 times in body (actual count: `2`) | Pass (floor) | "rocketbook review" at lines 14 and 32 (plus title/excerpt). At the minimum; one more natural use (e.g. in the CTA or "Who it is for") would not hurt but is not required. |

Unsourced / suspicious claims:
- `draft-v1.md:134`, "one went through 6 refills in 7 months. As that owner put it: 'The Frixion pens last me 3-4 weeks...'", issue: misattribution. In the source thread (pp34py) the "3-4 weeks" quote is from the 8-month heavy-use Fusion owner (u/ValentinSaulas); the "6 refills in 7 months" figure is from a different owner (u/3dprintedturtle, the same owner as the ghosting report). facts.md also lists them as two owners ("another owner").
- `draft-v1.md:144`, "Owners in that 2021 thread also said the 0.5 mm pens last longer and smudge less", issue: not in facts.md, no `[VERIFY:]` marker. Source is one comment (u/oldwindways) who says "I haven't been using mine a huge amount" and that 0.5 mm refills "seem to last longer (and also be less smudgy for me)". The draft drops the hedge and pluralizes it, then uses it to justify an affiliate link.
- `draft-v1.md:146`, "a heavy writer usually spends less over a year than buying a fresh notebook every few weeks", issue: no paper-notebook cost in facts.md, so "usually" is asserted, not shown. Outline asked for this point in tiers; the wording should be softer (minor).

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `3` vs outline `3` in-post slots (featured is frontmatter-level, not inline) | Yes. Lines 47, 116, 136 each follow the first paragraph(s) of their outline-named H2 and are followed by body prose, not a heading. No featured-image placeholder inline. The remotion chart (line 136) has no markdown table within ±20 lines. |
| Every data image has its values in nearby text (preceding sentence, same-section table, or caption) | `1` data slot (line 136) | Yes. "3 to 4 weeks" is in line 134 before it; "about 5 pens" / "about 4 pens" are in the bullets at lines 140 to 141 in the same section. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. 0 hits for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`.

## 5. Word count

- Draft: `2,150` words (body prose from intro through CTA; FAQ, lineup table rows, `[IMAGE:]` lines and link URLs excluded, matching the outline's "table excluded" basis). Raw `wc -w` of the same range with table, placeholders and URLs left in: 2,435.
- Outline target: `~2,260` words
- Delta: `-4.9%` (raw count: +7.7%)
- Band: within ±10% = pass, no issue. Both counting bases land inside the band.

Per-section vs outline (prose words): Key takeaways 112/90, How I Evaluated 133/150, What It Is 108/120, Lineup 187/260 (table excluded), What Works 206/230, What Does Not Work 310/300, Holds Up 263/230, Pens 183/180, Who It Is For 201/200, Alternatives 152/200, CTA 62/100. No section is padded or starved enough to matter.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | 0. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0. |
| En-dashes (`–`) only in numeric ranges | Pass | 0. |
| First-person throughout | Pass | I / you throughout. |
| Active voice | Pass | 0 passive markers. |
| ≥1 rhythm marker in every H2 | Pass | Every H2 has a number, named example or list. |
| ≥1 bullet list per ~300 words | Pass | 7 bullet lists (30 bullets) for ~2,150 words. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | Partial | voice.md lists "reader-directed rhetorical hooks" as a lexicon marker. Present in What Works (line 90), What Does Not Work (line 110), Pens (line 138), Lineup (line 69, opens a paragraph), Alternatives (line 169). Missing in How I Evaluated, What a Rocketbook Is, How It Holds Up Over Time and Who It Is For. Logged as minor for the two longest of those. |
| ≥1 concrete number or named example per major section | Pass | Every section. |
| No em-dash overuse | Pass | 0. |
| Visible sentence-length variation in every section | Pass | See §1 stddev table. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| How Fast You Go Through Pens | 134 | `major` | Quote misattributed. "As that owner put it" hands the "3-4 weeks" quote to the 6-refills-in-7-months owner. In the pp34py thread these are two different people: the quote is from the owner who used a Fusion heavily at work for 8 months; the 6 refills (of "various colors") are from the 7-month owner. facts.md also lists them as separate ("another owner"). | Rewrite line 134 so each figure belongs to its own owner. Example: "In a 2021 long-term thread, one owner who used a Fusion heavily at work for 8 months said: 'The Frixion pens last me 3-4 weeks so be prepared to buy a lot of refills.' Another owner in the same thread went through 6 refills in 7 months. Ouch!" Keep "Ouch!" on the burn rate. |
| How Fast You Go Through Pens | 144 | `major` | Claim not in facts.md, and overstated. One owner who said "I haven't been using mine a huge amount" found 0.5 mm refills "seem to last longer (and also be less smudgy for me)". The draft turns that into "Owners ... said the 0.5 mm pens last longer and smudge less" and uses it to sell the 0.5 mm 3-pack. | Rewrite as a single, hedged owner report: "One owner in that 2021 thread found that switching from 0.7 mm to 0.5 mm refills seemed to make them last longer and smudge less, so I'd grab a [Pilot FriXion 0.5 mm 3-pack](https://www.amazon.com/dp/B004JXHTDK?tag=op01e-20) with the notebook..." Keep the affiliate link. Editor: add this row to facts.md (§Owner-reported long-term use, source pp34py, u/oldwindways, 2021, light use). |
| Key takeaways / How I Evaluated It | 27, 36 | `minor` | "Ghosting" is used at lines 27 and 36 but not explained until line 114. Olga's voice notes say she "always translates niche jargon on first use", and the audience is beginners. | At the first use (line 27), add a short gloss, e.g. "which Rocketbook says leaves residue that raises ghosting (faint traces of old ink)". Leave the fuller definition at line 114 as it is. |
| What Works | 92 | `minor` | "Next Gen pages" is a Rocketbook product-line label that a reader meeting the brand for the first time won't know. | Add a four-to-six-word gloss, e.g. "its Next Gen pages (the current generation of the Core, Mini and Flip)". |
| How Fast You Go Through Pens | 146 | `minor` | "a heavy writer usually spends less over a year than buying a fresh notebook every few weeks" is asserted with no paper-notebook cost in facts.md behind it. | Soften to a conditional: "If you'd otherwise fill a fresh notebook every few weeks, the refills can still work out cheaper over a year. The pens are the running cost; the notebook isn't." No dollar figures for paper notebooks. |
| What Does Not Work / How It Holds Up Over Time | 106, 128 | `minor` | Both paragraphs run to 4 sentences (writing-standards: 1–3 per paragraph). | Line 106: move "The same owner added: 'I rarely even take pics of my RB pages anymore.'" into its own short paragraph. Line 128: split after "...can come back blank." so the freezer fix and the "gone for good" line form a second paragraph. |
| How It Holds Up Over Time / Who It Is For | 112, 148 | `minor` | No standalone-question paragraph in these two sections, a rhetorical-hook marker in Olga's voice that the other long sections have. | Add one short standalone question per section, e.g. after line 114's paragraph: "So will the pages actually last?" and before the skip list at line 158: "Not sure which side you're on?" Keep each to one line. |

## 8. What the draft does well

- The seven-model lineup table (lines 57 to 67) is the information-gain element from the plan and it is clean: every cell traces to verify-07/verify-08, price shown as tiers with a single dated "$35 Core" line (line 69), and a "Best suited to" column no SERP competitor has. Do not touch the table or its caption.
- Sourcing discipline is strong: every Reddit quote carries its year, the top-10-SERP thread (xj2z3h) quotes at lines 84 and 154 are correctly unlinked, the five citation links are anchored on the literal claim, and the FAQ "How long does a Rocketbook last?" answer (line 195) honestly says "7 to 8 months" instead of the outline's unsupported "years". Keep all of that.
- The verdict-first framing is honest and on-voice: the hook gives a conditional yes plus who should skip (line 14), "How I Evaluated It" says plainly this is "research-led, not a lab test" (line 32), and "What Does Not Work" closes with "Does any of this sink it? No." (line 110), which reads like Olga, not a sales page. Preserve the hook, the methodology paragraph and that closing line.

## 9. Instructions for writer (only if verdict = `request_revisions`)

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 134 (How Fast You Go Through Pens): the "3-4 weeks" quote and the
   "6 refills in 7 months" figure come from two different owners in the
   2021 pp34py thread. Remove "As that owner put it" and attribute each to
   its own owner. Example: "In a 2021 long-term thread, one owner who used
   a Fusion heavily at work for 8 months said: 'The Frixion pens last me
   3-4 weeks so be prepared to buy a lot of refills.' Another owner in the
   same thread went through 6 refills in 7 months. Ouch!" Keep "Ouch!".

2. Line 144: replace "Owners in that 2021 thread also said the 0.5 mm pens
   last longer and smudge less" with a single hedged report: "One owner in
   that 2021 thread found that switching from 0.7 mm to 0.5 mm refills
   seemed to make them last longer and smudge less, so I'd grab a ..."
   Keep the Pilot FriXion 0.5 mm 3-pack affiliate link exactly as is.

3. Line 27: gloss "ghosting" at its first use, e.g. "raises ghosting
   (faint traces of old ink)". Leave the definition at line 114 as is.

4. Line 92: gloss "Next Gen pages", e.g. "its Next Gen pages (the current
   generation of the Core, Mini and Flip)".

5. Line 146: soften the cost claim to a conditional, with no dollar
   figures for paper notebooks: "If you'd otherwise fill a fresh notebook
   every few weeks, the refills can still work out cheaper over a year.
   The pens are the running cost; the notebook isn't."

6. Paragraph length: at line 106, move "The same owner added: 'I rarely
   even take pics of my RB pages anymore.'" into its own paragraph. At
   line 128, split after "...can come back blank." so the freezer fix and
   "Ink you've wiped off with water, though, is gone for good." form a
   second paragraph.

7. Add one short standalone-question paragraph in "How It Holds Up Over
   Time" (e.g. "So will the pages actually last?" after the line 114
   paragraph) and one in "Who It Is For" (e.g. "Not sure which side
   you're on?" before the skip list). One line each.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.
No em-dashes or en-dashes in anything you add.

Produce blog-ops/drafts/rocketbook-review/draft-v2.md. Do not overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- Editor action outside the writer's scope: add the 0.5 mm owner report to facts.md (§Owner-reported long-term use) so the sourcing trail is complete before Gate 2. Source: https://www.reddit.com/r/rocketbook/comments/pp34py/longterm_reviews/, u/oldwindways, 2021, light use, hedged ("seem to").
- The "$12 to $15" semester estimate (line 142) is pro-rated at $3 a pen ($9 / 3). That matches the store's single-pen price ($3.00 in facts.md), so it holds, but a reader buying 3-packs would pay $9 or $18 depending on whether the included pen counts. Not logged as an issue; Olga may want to phrase it as "about $3 a pen" at Gate 2.
- The "6 refills" owner said "of various colors", so that figure is weaker evidence of burn rate than the "3-4 weeks" quote. Fine to keep as supporting colour once attributed correctly.
- The Kindle Scribe link (line 173) points to ASIN B0DB2RG2C5, which facts.md records as the "Essentials Bundle (64GB)", not the bare device. Verified ASIN, so not an issue, but Olga may prefer a non-bundle listing at Gate 2.
- Carry-over from the outline's open questions: there is still no first-hand Olga test; the draft handles this honestly. Gate 2 is where she can add her own notes or a real photo.
