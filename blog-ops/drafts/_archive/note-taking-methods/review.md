# Review: note-taking-methods draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `research/serp.md` + `reddit.md`, `standards/writing-standards.md`, `standards/blog-craft.md`, `profile/voice.md` + `authors.md` + `audience.md` + `product.md` + `blog.md`, `config.yaml`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs.

## Reviewed

- Draft: `note-taking-methods/draft-v1.md` (body prose ~2,215–2,329 words; outline target ~2,510)
- Outline: `note-taking-methods/outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): The draft passes every objective gate with zero critical and zero major issues: no em-dashes, no forbidden phrases, no unsourced numbers, correct H2 order, a compliant four-method comparison table, FAQ 5/5 matching the outline, CTA correctly placed before the FAQ, and clean external-link discipline (both live external links are allowlisted primaries, not SERP competitors; Mueller & Oppenheimer is correctly held as `[EXTERNAL_LINK_NEEDED:]`). Only three minor nits remain (a slightly long hook paragraph, low bullet-list density, and body prose on the low side of target), none of which block approval.

**Iteration counter:** this is revision pass `1` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate. Not applicable here.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (voice.md + authors.md) | Pass | Warm, first-person, lightly self-deprecating; personal Master's/aviation-PR anecdote (L14–16); punchy beats ("Sound familiar?", "It is not magic, though.") match the lexicon. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Grep for `one could/one should/users are/stakeholders` returned nothing. |
| Active voice (no "X was scanned" shapes) | Pass | Passive-marker grep returned nothing. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Short beats sit beside long explanatory sentences in every section. |
| Forbidden phrases count: `0` | Pass | Dual-sourced grep (writing-standards.md + voice.md, which adds none) found zero hits. |
| Em-dash count: `0` (grep `—`) | Pass | Zero. |
| En-dash context: every `–` hit in a numeric range | Pass | Zero en-dashes present. |

Forbidden phrases found: None found.

Intro jargon check: no SEO/marketing jargon in the intro (L14–20). Pass. Intro-hook over-anchoring: the hook ("for years I took notes wrong") is a lived beat, not a time-bound event; no over-anchoring. Pass. Product code-literal grep: product.md defines no snake_case code constants; N/A.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter valid per wordpress.md template (title, date, excerpt, tags, authors, draft; NO cover field) | Pass | All required fields present; title quoted, 3 tags from taxonomy (Productivity/Focus/Planning), author "Olga Pak", `draft: true`, correctly no `cover`/`heroImage` (featured image ships via media upload for wordpress-rest). |
| Title in frontmatter matches outline "Final title" exactly | Pass | "Note-Taking Methods Compared: Find the One That Fits" (52 chars). |
| Slug / meta description match outline | Pass | Slug = directory `note-taking-methods`; excerpt matches outline Final meta description verbatim (≤160 chars). |
| H2 order matches outline exactly | Pass | 7 body H2s + CTA (`Pick One and Try It This Week`) + FAQ, in the outline's order with no additions/removals/reorderings. |
| Intro is 2–4 paragraphs, 1–3 sentences each | Partial | 4 paragraphs, 1 internal link (≤2). P1 (L14) runs ~5 short sentences vs the 1–3 guideline — logged as minor. |
| Every H2 has ≥1 rhythm marker | Pass | Table, bullet list, standalone questions, and concrete named examples distributed across sections. |
| FAQ `### <Q>` items match outline FAQ set 1:1 | Pass | 5 questions, matching the outline's 5 (Q2 wording "studying or exams" is a trivial variant of "studying / for exams"). |
| JSON-LD FAQPage schema matches FAQ body 1:1 | N/A | wordpress-rest adapter emits no JSON-LD at the adapter level (FAQ schema is a WP-plugin concern); sub-check skipped per SKILL §2.1. |
| Outro / CTA paragraph present | Pass | CTA section L110–114 sits immediately before `## FAQ`; nothing follows the FAQ. Links CTA target `/ai-tools` with action anchor "Try my free AI tools" (matches blog.md Primary CTA). |

Structural deltas vs outline: None. Body-section order and count are an exact match; the outline's "SKIP an image after H2-1 (table already present)" instruction is honored (no image after the at-a-glance table).

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to facts.md OR has a `[VERIFY:]` marker | Pass | "2014 experiment" (Mueller & Oppenheimer) and "within 24 hours" (UNC) both in facts.md Statistics; no orphan numbers. |
| Competitor mentions framed "best for [segment]", not takedowns | N/A | `modules.competitors: false`; no competitor (Goodnotes/Box) named in the draft. |
| Competitor pricing/feature claims match facts.md (dates not stale) | N/A | Competitors module off; no competitor pricing/feature claims present. |
| Product mentions (count: 2 "Text Summarizer" + CTA) each earn their place | Pass | L106 (condense-step tie-in) and L114 (planned CTA "starting with the Text Summarizer"); both outline-sanctioned, neither is deletable without losing meaning; well under the >8 stuffing threshold. |
| Internal links exist in the intro cluster per blog-craft.md | Pass | 1 contextual internal link in the intro (`/focused-note-taking-how-to-guide`, L18); method-specific links live in their body sections. |
| Every internal blog link root-relative, trailing slash iff `trailing_slash: true` | Pass | config `trailing_slash: false`, `route_prefix: /`. All internal links are root-relative with no trailing slash and no absolute host (`/cornell-note-taking-method`, `/outlining-note-taking-method`, `/ai-tools/ai-text-summarizer`, `/ai-tools`). |
| External links point to reputable sources; anchor = literal claim | Pass | 2 external links, both allowlisted primaries (see below); anchors are the literal claim. |
| Target keyword appears 2–8 times in body | Pass | "note-taking method(s)" ~7 body occurrences; within range, not stuffed. |

Unsourced / suspicious claims: None.

**Forbidden external-link cross-reference (SKILL §3.5, unconditional):**
- `research/serp.md` §Selected results forbidden set = utc.edu, learningcenter.unc.edu, ncl.ac.uk, goodnotes.com, blog.box.com, oxfordlearning.com, help.open.ac.uk. The draft links NONE of these.
- L47 `https://lsc.cornell.edu/notes.html` — NOT in the forbidden SERP set; on the allowlist (`.edu`, method's home institution, facts.md external-link candidate). Allowed.
- L96 `https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.01810/full` — NOT in the forbidden SERP set; allowlisted primary_source (facts.md external-link candidate). Allowed.
- Mueller & Oppenheimer (L96) correctly held as `[EXTERNAL_LINK_NEEDED:]`, not a fabricated link. Correct.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | 1 (L96) | OK — Mueller & Oppenheimer 2014, resolved at Stage 3d per outline. |
| `[INTERNAL_LINK_NEEDED:]` | 3 (L67, L77, L108) | OK — mind-mapping, charting, best-notebooks; all planned-but-unpublished per brief. |
| `[IMAGE:]` | 4 vs outline 4 in-post slots | OK — placed after H2-2/H2-4/H2-5/H2-6 + first paragraph, matching the outline image plan; no inline placeholder duplicates the featured (four-quadrant) concept. |

Additional: `[AFFILIATE-LINK-PENDING: note-taking notebooks]` (L108) is the correct held placeholder per custom-instructions.md (Amazon Associates not live), no live URL. Image-placement hygiene (§4.2b): no `[IMAGE:]` sits immediately before a heading. Table-redundant chart (§4.2c): the L41 Cornell diagram (remotion) is a labeled page-layout, not a data chart duplicating the comparison table. Off-shape markers (`[Verify:`, `TODO:`, `[TBD]`, etc.): none.

## 5. Word count

- Draft: ~2,329 words (body, frontmatter + FAQ excluded); ~2,215 if the 114 words of `[IMAGE:]` marker text are also excluded as non-prose.
- Outline target: ~2,510 words
- Delta: approximately `-7%` (image-marker text included) to `-11.8%` (excluded)
- Band: within ±10% on the inclusive count (pass, no issue) / beyond ±10% up to ±15% on the prose-only count (minor issue, still passes the verdict gate). The draft is slightly under target, consistent with the outline's "trim toward 2,400; do not pad." Logged as minor; no expansion required.

## 6. Humanization floor

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | |
| Zero em-dashes (`—`) | Pass | |
| En-dashes (`–`) only in numeric ranges | Pass | None present. |
| First-person throughout | Pass | |
| Active voice | Pass | |
| ≥1 rhythm marker in every H2 | Pass | Table / bullets / standalone questions / named examples across all sections. |
| ≥1 bullet list per ~300 words | Partial | Only one bullet list in the body (L85–90); a ~2,200-word post would nominally want more. Mitigated by the comparison table + strong burstiness + short-paragraph structure. Logged as minor. |
| ≥1 standalone-question paragraph per major section | Pass | Present where the Olga voice calls for it ("Sound familiar?", "So when does it fall apart?", "Now, the question everyone asks:"); authors.md does not mandate one per section. |
| ≥1 concrete number or named example per major section | Pass | Walter Pauk / Cornell (L47), war-causes outline example (L53), three-theories & five-battles charting example (L71), 24-hour review (L96), etc. |
| No em-dash overuse | Pass | Zero. |
| Visible sentence-length variation in every section | Pass | |

## 7. Specific issues

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Intro | 14 | minor | Hook paragraph P1 runs ~5 sentences vs the 1–3-sentence paragraph guideline. | Optional: split P1 after "…nothing sticks." into two short paragraphs so no intro paragraph exceeds 3 sentences. Preserve the punchy "Sound familiar?" beat. |
| (whole body) | — | minor | Bullet-list density below the ~1-per-300-words humanization floor (one bullet list, L85–90). | Optional: convert one dense prose passage (e.g., the STEM-vs-conceptual or capture-then-refine explanation) into a short bullet list to add visual variation. Do not bullet-ify the method sections, whose prose flow is a strength. |
| The 4 Note-Taking Methods at a Glance | 24 | minor | Body prose ~2,215–2,329 words, on the low side of the ~2,510 target (roughly -7% to -12%). | No action required (outline says trim toward 2,400, do not pad). If the writer touches this on any future pass, add depth only where it earns its place, do not pad. |

## 8. What the draft does well

- The four-method comparison table (L26–31) delivers the outline's core differentiator exactly, and the two "effort" and "built-in review" columns (called out at L33) are the genuine value-add no SERP competitor offers. Preserve this table and its framing verbatim.
- Balanced, honest trade-offs for every method (Cornell "It is not magic, though" L45; Outline "when does it fall apart?" L55; Mapping "clear weak spot" L67; Charting "The catch is…" L77) directly retire the rejected "Cornell has no disadvantages" framing. Keep every one of these con-paragraphs.
- Clean external-link and product discipline: the Mueller & Oppenheimer citation is correctly held as `[EXTERNAL_LINK_NEEDED:]` (L96) rather than fabricated, "learning styles" is explicitly retired (L96, L128), and the Text Summarizer appears as one soft, tethered mention plus the planned CTA. Do not add live links or extra product mentions.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A — verdict is `approve`.

## 10. Reviewer notes (free-form)

- Watch on future passes: "Text Summarizer" is named twice (L106 body + L114 CTA). Both are outline-sanctioned and neither reads as stuffing, but if a later edit adds a third product mention, revisit the deletion rule.
- Q2 in the FAQ ("studying or exams") is a trivial wording variant of the outline's "studying / for exams" — treated as a match, not a delta.
- The three minor issues are all optional polish; the editor can approve as-is or route a light revise pass at its discretion. None affects the objective gate.
