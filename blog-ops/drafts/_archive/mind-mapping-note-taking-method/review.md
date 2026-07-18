# Review: mind-mapping-note-taking-method draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `standards/writing-standards.md`, `profile/voice.md`, `standards/blog-craft.md`, `research/serp.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `draft-v1.md` (word count: 1,993 body prose excl. FAQ; outline target: ~2,100)
- Outline: `outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): Every objective check passes: 0 forbidden phrases, 0 em-dashes, exact H2 order, exact FAQ set, correct marker counts (2 external / 1 internal / 3 image / 0 verify), keyword in range, no forbidden SERP-competitor links, and a disciplined single soft product mention. There are 0 critical and 0 major issues; only two non-blocking minor notes (Reddit attribution style, prose length near the lower band).

**Iteration counter:** this is revision pass 1 of 2. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. (Not applicable — verdict is `approve`.)

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§voice.md + authors.md) | ✅ | Warm, first-person, tested-from-experience; self-aware beats ("Fair.", "The rebuild is the studying."); career-pivot credibility line woven in P2. On-voice throughout. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ | Grep for `one could/should`, `users are`, `stakeholders` = 0 hits. Consistent `I`/`you`. |
| Active voice (no "X was scanned" shapes) | ✅ | Grep for passive markers = 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ | Short beats ("Fair.", "Same idea, different name.") next to 20+ word sentences in every section. |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ | Dual-list grep (writing-standards.md + voice.md) = 0 hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail | ✅ | Grep `—` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range | ✅ | Grep `–` returns nothing. |

Forbidden phrases found (grep output from writing-standards.md + voice.md lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter valid per wordpress-rest template (title, date, excerpt, tags, authors, draft) | ✅ | title (52 chars), date 2026-07-18, excerpt (148 chars ≤160), 4 tags all from live taxonomy (note-taking, note-taking method, students, productivity), authors: Olga Pak, draft: true. No `cover` field (correct — featured ships via media upload). JSON-LD not required for wordpress-rest (skipped per adapter). |
| Title in frontmatter matches outline "Final title" exactly | ✅ | `Mind Mapping Note-Taking: How to Use It (With Steps)`. |
| Slug / meta description match outline | ✅ | Slug dir = `mind-mapping-note-taking-method`; excerpt = outline Final meta description verbatim. |
| H2 order matches outline body-sections list exactly | ✅ | 7 body H2s + CTA (`Start Your First Mind Map`) + FAQ, in exact outline order. No additions/removals/reorderings. |
| Intro is 2–4 paragraphs, 1–3 sentences each | ✅ | 4 paragraphs (hook / expertise / 1 internal link / preview), 1–3 sentences each. Target keyword in P1 hook. |
| Every H2 has ≥1 rhythm marker | ✅ | Tables, bullet lists, standalone questions, concrete examples across all sections. |
| FAQ `### <Q>` items match outline FAQ set 1:1 | ✅ | 5 questions, exact wording match to outline's 5 FAQ items. |
| JSON-LD FAQPage schema matches FAQ body 1:1 | N/A | wordpress-rest emits no adapter-level JSON-LD (FAQ schema is a WP-plugin concern); sub-check skipped per SKILL §2.1. |
| Outro / CTA paragraph present | ✅ | `Start Your First Mind Map` sits immediately before `## FAQ`; nothing follows FAQ. Links `https://olgapak.com/ai-tools` with action anchor "Try my free AI tools". |

Structural deltas vs outline (if any):
- None.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to `facts.md` OR has `[VERIFY:]` | ✅ | "one to five words per node" (facts.md Statistics, reframed, not linked); "3–7 branches"/"2–3 levels" are Buzan craft (facts.md Named examples). Dual-coding + Buzan-origin claims carry `[EXTERNAL_LINK_NEEDED:]`. No invented numbers, no audience/volume ranges. |
| Competitor names framed "best for [segment]", not takedown | N/A | `modules.competitors` OFF. No competitor named in body; York/OU/Hull/Evernote/Goodnotes craft claims reframed as tested advice, never quoted-and-linked (per facts.md routing note). |
| Pricing/feature claims about competitors match facts.md (dates fresh) | N/A | Competitors module OFF; no competitor pricing/feature claims present. |
| Product mentions (count: 2) each earn their place | ✅ | "Text Summarizer" once (line 117, tied to the condense-before-mapping step) + "free AI tools" CTA (line 140). Well under 8; the ONE required soft Text Summarizer mention. Deletion rule holds — each is context-tethered. |
| Internal links (count: 5 instances / 4 unique) placed contextually | ✅ | `/note-taking-methods` (intro + §When), `/outlining-note-taking-method` (§What Is), `/focused-note-taking-how-to-guide` (§When), `/how-to-make-aesthetic-notes...` (§Tips). 3–5 total; first internal (line 19) precedes first external (line 117). |
| Every internal blog link root-relative, no trailing slash | ✅ | All 4 are `/<slug>` with NO trailing slash (matches `route_prefix: /`, `trailing_slash: false`). No absolute cross-post links. |
| External links each reputable; anchor = literal claim | ✅ | Only external links are own-site `olgapak.com/ai-tools` (marketing/tool page, absolute is correct). Two external claims correctly deferred to `[EXTERNAL_LINK_NEEDED:]`. |
| Target keyword appears 2–8 times in body (actual: ~2–3) | ✅ | "mind mapping note-taking" in intro (line 15) + H2 1 (line 23) + FAQ (line 144); dense supporting "mind map(ping)" variants. In range, not stuffed. |

Unsourced / suspicious claims:
- None. Every numeric/craft claim traces to facts.md or carries an `[EXTERNAL_LINK_NEEDED:]` marker.

**§3.5 forbidden-SERP-link cross-reference (unconditional):** Forbidden set from `research/serp.md` §Selected results = york.ac.uk, open.ac.uk, hull.ac.uk, evernote.com, goodnotes.com (+ mindmup, canva homepages). Draft renders only `https://olgapak.com/ai-tools` (own domain, not on the forbidden set). **0 forbidden links. Pass.**

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | ✅ Expected 0; no untraceable claims left raw. |
| `[EXTERNAL_LINK_NEEDED:]` | 2 | ✅ Buzan origin (line 64) + dual-coding/images-aid-memory (line 41), exactly the two planned in outline's External link plan. Both carry a source-type class. |
| `[INTERNAL_LINK_NEEDED:]` | 1 | ✅ Paper-gear large/sketch pad (line 96), matches outline (best-notebooks not confirmed live). |
| `[IMAGE:]` | 3 vs outline 3 inline slots | ✅ After H2 1 (map-vs-web, ai-prompt), after H2 4 (heart worked-example, remotion), after H2 7 (good-vs-bad node, ai-prompt). Featured image correctly NOT inline (ships via frontmatter/media upload). |

Marker-shape problems (lowercase, missing colon, rogue formats):
- None. All markers canonical; off-shape grep (`[Verify:`, `TODO:`, `[TBD]`, etc.) = 0 hits.

Marker hygiene notes:
- §4.2a featured-image hygiene: none of the 3 inline images is the featured concept or a `featured.<ext>` filename. Clean.
- §4.2b: the line-66 `[IMAGE:]` (remotion worked-example) is followed by `### Step 1`. This is the allowed exception — it illustrates the heart-map example introduced in the paragraph directly above it, and the outline explicitly plans it there ("After H2 4 + 1 paragraph"). Not flagged.
- §4.2c: the remotion image is a branded diagram, not a data chart duplicating a nearby table. Not redundant.

## 5. Word count

- Draft: 1,993 words (body prose after frontmatter, excluding `## FAQ`)
- Outline target: ~2,100 words (roll-up "Total estimate", same basis)
- Delta: -5.1%
- Band: within ±10% = pass, no issue logged. (Stripping the 3 image-placeholder description lines lands it ~1,874, still comfortably inside the plan's stated 1,800–2,200 range.)

## 6. Humanization floor

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ | Confirmed §1.1. |
| Zero em-dashes (`—`) | ✅ | Grep returns nothing. |
| En-dashes (`–`) only in numeric ranges | ✅ | No `–` present. |
| First-person throughout | ✅ | Consistent `I`/`you`. |
| Active voice | ✅ | No passive shapes. |
| ≥1 rhythm marker in every H2 | ✅ | Table / bullets / standalone Q / concrete example in each. |
| ≥1 bullet list per ~300 words | ✅ | 13 `^- ` bullets across ~2,000 words (≈1 per 154 words) + 1 decision table. |
| ≥1 standalone-question paragraph per major section | ✅ (soft) | Present in several sections ("So why does laying ideas out in space help you remember them?", "People always ask which is better..."); not in every H2, acceptable for this voice given strong burstiness elsewhere. |
| ≥1 concrete number or named example per major section | ✅ | r/PKMS + Obsidian, r/NoteTaking student, the when-to table, the heart worked example + Buzan, r/study, r/IBO, "one to five words". |
| No em-dash overuse | ✅ | Zero. |
| Visible sentence-length variation in every section | ✅ | Confirmed. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Why Mind Mapping Works / When to Use / Mistakes | 33, 39, 56, 125 | minor | Reddit voice-of-customer quotes are attributed to the subreddit only ("one person on r/PKMS", "One student on r/NoteTaking"), not user+subreddit as facts.md records them. Prose reads well this way, but the source record wants both. | Optional: keep the subreddit-only phrasing for readability, OR add the handle where it reads naturally (e.g. "a student on r/NoteTaking"). No change required for approval. |
| How to Make a Mind Map | 68–90 | minor | The 6 H3 steps use `### Step N: Title Case` while the outline drafted them as `Step N — lowercase`; content matches exactly, only capitalization/dash style differs. Title-case is correct per house heading rules, so this is an improvement, logged only for traceability. | No action needed. |

Neither issue is critical or major; both are non-blocking. Verdict remains `approve`.

## 8. What the draft does well

- **The honest "When to Use (and When to Skip It)" section (lines 43–60) is the draft's differentiator and must be preserved intact.** It pairs a two-column decision table with the real r/study "math and derivations moving fast" quote AND fairly answers the r/IBO skeptic's "just notes but with extra steps" by distinguishing understanding-structure from active-recall. This is exactly the angle serp.md flagged as unoccupied — do not trim it on any future edit.
- **The worked heart-chapter example (lines 62–90) with the labeled Structure/Blood Flow/Electrical System/Common Problems branches makes the steps concrete instead of generic**, filling the gap serp.md identified (competitors show finished maps but nobody narrates building one). Keep the specific example; do not abstract it back to "map a topic."
- **The soft Text Summarizer tie-in (line 117) is placed perfectly** — it rides the genuine "condense a dense source so branches stay short" workflow step rather than being bolted on, with "free" framing and no price/tier. This is the model for how the product should surface; keep it single and in-context.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A — verdict is `approve`.

## 10. Reviewer notes (free-form)

- This is a genuinely clean draft; approving it is not leniency. All hard gates (forbidden phrases, em-dashes, marker shapes/counts, H2 + FAQ structure, keyword range, forbidden-SERP-link scan, product discipline) pass, and the two brief-mandated distinctives (the "when to skip it" + skeptic counterpoint, and the single soft Text Summarizer mention) are both present and well-executed.
- Downstream (Stage 3d) still owes resolution of the two `[EXTERNAL_LINK_NEEDED:]` markers to independent primary sources (Buzan; dual-coding/images-aid-memory) per the outline's External link plan — the writer correctly did NOT invent links or point them at the .ac.uk/Goodnotes competitors. The `[INTERNAL_LINK_NEEDED:]` paper-gear slot resolves or deletes once best-notebooks-for-note-taking is confirmed live.
- The competitor craft spine (Evernote's "overviews vs. detail", Goodnotes' node rule, Buzan's rules) is reframed in Olga's own words with no quote-and-link, exactly as facts.md's routing note requires. No competitor pricing/feature claims exist (competitors module off), so §3.6/§3.7 don't apply. No soon-to-ship gap language (brief lists none).
