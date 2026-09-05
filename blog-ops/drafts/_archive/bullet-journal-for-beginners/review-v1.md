# Review: bullet-journal-for-beginners draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/bullet-journal-for-beginners/draft-v1.md`, `blog-ops/drafts/bullet-journal-for-beginners/outline.md`, `blog-ops/drafts/bullet-journal-for-beginners/facts.md`, `blog-ops/drafts/bullet-journal-for-beginners/brief.md`, `blog-ops/drafts/bullet-journal-for-beginners/plan.md`, `blog-ops/drafts/bullet-journal-for-beginners/research/reddit.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/bullet-journal-for-beginners/draft-v1.md` (word count: 2,793 body prose excluding FAQ; outline roll-up target: 2,750)
- Outline: `blog-ops/drafts/bullet-journal-for-beginners/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md` §Author voice)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is structurally clean, factually well-sourced and genuinely better than anything on this SERP, and its two hardest asks (H2 7 stays critical, every jargon term gets a real gloss) both land. It is held back by two `major` issues: the inline image at line 46 renders the same concept as the frontmatter featured image, so the post would ship the same picture twice, and Olga herself disappears for the 1,094-word instructional core (H2 4 through H2 6 carry zero first-person and the draft never once says whether she has kept a bullet journal), leaving a permission-giving guide that reads competent but not personally hers. Seven `minor` issues cover quote-scope precision, the FAQ overage, and the reader-directed-question shortfall.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | **Partial** | Permission-giving register is authentically Olga ("Dotted paper is a preference. Not a requirement.", line 70; "If a line comes out crooked, the appointment still happens.", line 96; "Start it badly, tonight", line 188). But `voice.md` §Tone's "lightly self-deprecating" and "a friend who has been through the struggle" are absent: zero self-deprecating beats in 2,793 words, and lines 76–155 (1,094 words, the whole instructional core) carry no first person at all. See §7 major-2. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | **Partial** | Second person is constant and correct. Authorial first person is thin: 7 touches total (lines 17, 50, 74, 178, 180, 192, 210). Grep for `one could\|one should\|users are\|stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | Pass | Grep for `was (scanned\|checked\|monitored\|built\|designed\|created)`: 0 hits. Prose is active throughout. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Computed per section, population stddev of sentence length: intro 9.4, H2 1 8.7, H2 2 11.2, H2 3 11.0, H2 4 10.4, H2 5 4.9, H2 6 10.4, H2 7 10.2, H2 8 9.6, CTA 9.3, FAQ 8.8. All well above the <4 fail threshold. H2 5 (4.9) is the flattest but still passes; it is the table-heavy section, so that is expected. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | All 23 base-list phrases grepped individually. `voice.md` §Additional forbidden phrases declares "None beyond the generic list". |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | Also 0 hits for `&mdash;` and `&#8212;`. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes in the file. |
| Intro jargon check (§Insider-jargon translation + `audience.md` §Niche jargon translation) | Pass | None of `audience.md`'s six listed insider terms appear anywhere in the draft. The one judgement call: "spread" appears unglossed in the intro (line 13, "the hand-lettered spread") and is not defined until line 29. Ruled acceptable, the term is used ostensively inside a list of visual features where context carries it, the sentence is the outline's own approved P1 hook, and the gloss lands at the first point the meaning is load-bearing. Not logged as an issue. |
| Intro-hook over-anchoring | N/A | No time-bound event hook. The intro's hook is an evergreen observation about decorated spreads. Check skipped per §1.9. |
| Product code-literal grep against the body (`modules.product` on) | Pass | No backticked internal code constants from `product.md` appear in the body. The only backticks in the draft are the five rapid-logging symbols in the table at lines 124–130, which are reader-facing notation, not code. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | Pass | Checked against `adapters/publish/frontmatter/wordpress.md`. `title` (quoted, 55 chars), `date: 2026-08-26`, `excerpt` (146 chars, ≤160), `tags` (4, within 2–4), `authors: [Olga Pak]` (matches `authors.md` byline), `draft: true`. No `cover`/`heroImage` field, correct for this adapter. FAQPage JSON-LD not required at the adapter level for `wordpress-rest`, sub-check skipped per §2.1. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `Bullet Journal for Beginners: You Don't Need Art Skills`, character-for-character. |
| Slug / meta description match outline | Pass | Slug is the directory name `bullet-journal-for-beginners`. `excerpt` matches outline §Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | 8 body H2s at lines 23, 42, 58, 76, 116, 136, 156, 174 in outline order, plus the CTA H2 at 188 and `## FAQ` at 194. The 4 H3 sub-steps (84, 92, 100, 106) match outline H3 4.1–4.4 exactly. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | 4 paragraphs (lines 13, 17, 19, 21) of 2 / 1 / 2 / 1 sentences. 166 words vs the outline's ~200, under but not gated separately. Exactly 1 intro internal link (`/how-to-plan-your-week`), well inside the ≤2 ceiling. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Every one of the 8 body H2s plus the CTA carries a concrete number or named example, and all carry strong burstiness. See §6 for the per-marker breakdown. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 4 `###` items at lines 196, 200, 204, 208, matching the outline's four People Also Ask questions verbatim and in order. FAQ is the last block; nothing follows the final answer. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` emits no JSON-LD at the adapter level (`adapters/publish/frontmatter/wordpress.md` §FAQ), so this sub-check does not apply. |
| Outro / CTA paragraph present | Pass | `## Start it badly, tonight` at line 188, 117 words vs the outline's ~110, sitting immediately before `## FAQ`. Action anchor `try my free AI tools` links `/ai-tools` (verified as this blog's live CTA slug: 11 existing posts in `content/blog/` use the same root-relative target). No feature re-list, no prices. |

Structural deltas vs outline (if any):
- None. The draft follows the approved outline's structure exactly, including the four numbered H3 sub-steps and the image slot positions.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | "more than 15 million times" and "eleven years old" (line 48) trace to `facts.md` §Statistics row 1 and carry the linkable primary-source URL. "four minutes long" (48) matches the same row. "five marks" (122, 132), "four pages" (27), "two pages, six months to a page" (94) are descriptive counts of the notation and setup documented in `facts.md` §Named examples. "At least five people" (168) is not in `facts.md` and correctly carries a `[VERIFY:]` marker. No unsourced numbers found. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. `facts.md` has no §Competitor facts section. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same, module off. |
| Product mentions (count: `2`, `modules.product` on) are each earning their place, none can be deleted without losing meaning | Pass | Both sit in the CTA at line 192: "Text Summarizer" and "my free AI tools". Deletion test: the sentence collapses without them, they are the CTA's whole subject. Zero body mentions, which matches `plan.md` §Product references planned ("Body mentions: none"). |
| Internal links (count: `6`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass | 1 in the intro, 5 distributed into the sections where their topics are actually discussed, matching `plan.md` §Internal links planned row-for-row. All 5 body targets confirmed to exist as files in `content/blog/`. |
| Every internal blog link is root-relative `/some-post-slug` (no trailing slash, since `blog.trailing_slash: false`), not `https://olgapak.com/some-post-slug` (absolute = `major`) | Pass | All 6 internal links are root-relative with no trailing slash, correct for `trailing_slash: false`. Zero absolute cross-post links in the body. |
| External links (count: `8`) each point to reputable sources; anchor text = literal claim | Pass | rydercarroll.com (primary, attribution), youtube.com/watch?v=fm15cmYU0IM (creator's own explainer), 4 distinct Reddit comment-thread URLs (the utterances themselves), scientificamerican.com. Cross-referenced against `outline.md` §External link plan's forbidden set: **zero** of the 7 top-10 SERP URLs appear. Anchor text is the literal claim in every case. One anchor is a verbatim uncredited-looking borrowing, see §7 minor-4. |
| Target keyword appears 2–8 times in body (actual count: `2`) | Pass | Lines 13 and 44, plus the frontmatter title. At the floor of the band but inside it, and both placements are natural rather than stuffed. No action needed. |

Quote and attribution audit (cross-checked line by line against `facts.md` §Quotes and `research/reddit.md`):

| Line | Attribution in draft | Source record | Accurate? |
|---|---|---|---|
| 50 | u/reallybiglizard, "art about planning" | `facts.md` §Quotes, r/bulletjournal 1q4ssdj, score 35 | Yes. Verbatim span, correct user, correct thread, and "replying to a beginner who had asked how to start without being creative" matches `research/reddit.md` thread 1's title and OP body. |
| 52 | u/Rainbow_Catnip, "put bullet journaling off for years" | `facts.md` §Quotes, r/bulletjournal 1swqru9 | Yes. Verbatim span. `research/reddit.md` records a slightly longer version ("...and sad that I can't do that"); truncation does not change the meaning. |
| 54 | official Bullet Journal site, "feels like this intimidating organization system" | `facts.md` §Quotes, **DO NOT LINK** row | Quote span verbatim and correctly unlinked with prose attribution. **Framing overstates:** the source reads "For some people, the Bullet Journal method feels like...". See §7 minor-1. |
| 62 | u/SunnyClime, "Any notebook and writing tool are absolutely enough" | `facts.md` §Quotes, r/bulletjournal 1q4ssdj, score 45 | Yes. Verbatim, correct user, and correctly presented as the most-upvoted answer's position. |
| 166 | u/ptdaisy333, "What the journal can't do is issue reminders" | `facts.md` §Quotes, r/BasicBulletJournals 1q3k0vv | Quote accurate and used for exactly the claim it supports (limit 1, no reminders). **Framing overstates:** "the minimalist end of the community is direct about the first one" reads as consensus, but `research/reddit.md` records ptdaisy333 (score 4) as the thread's *nuanced pushback*, who actually says the journal is "OK for tracking appointments". See §7 minor-2. Trailing "It's a journal." is recapitalised from `facts.md`'s "- it's a journal"; trivial, not logged. |
| 168 | u/Fun_Apartment631, "For me, it's b" | `facts.md` §Quotes (score 38); `research/reddit.md` thread 3 "Most upvoted POV" | Yes. "the thread's top commenter" is supported. The added gloss "picking the option that said the method isn't much of a calendar" is a genuine service to the reader for an otherwise opaque quote, and matches the OP body in `research/reddit.md`. |
| 168 | "At least five people in the same thread described the identical hybrid" | `research/reddit.md` thread 3: "appeared in at least 5 comments (u/Fun_Apartment631, u/patch99329, u/pet_a_ghost, u/FuryVonB, u/RhiaMaykes)" | Count supported. The gloss half-overstates. See §7 minor-3. |
| 170 | Scientific American | `facts.md` §From a competitor's harvested citation | Yes, and correctly scoped: "about posture rather than superiority" respects `facts.md` §Rejected's ban on re-asserting handwriting-beats-typing, and the adjacent `/digital-vs-paper-notes` link is framed as nuance ("messier than 'handwriting wins'", "doesn't replicate cleanly"), exactly as the outline required. Only defect is the missing quotation marks, see §7 minor-4. |
| 178 | u/lizzyote, "Open your journal every single day" | `facts.md` §Quotes, r/bulletjournal 1swqru9 | Yes. Verbatim including the source's own "youre" typo, which is correct practice for a quote. |
| 183 | "One person in r/Travelersnotebooks", "kind of killed my bujo habit" | `facts.md` §Quotes, **Scope limit: adjacent evidence about journaling consistency in general, not a bullet-journal-specific finding** | **Yes, and this is the best-handled citation in the draft.** The scope limit is honoured explicitly in the prose: "One person's experience, in a thread about a different format, but it matches a pattern worth avoiding." Nothing to fix. |
| 186 | u/BlueProcess, "It's the stage, not the show" | `facts.md` §Quotes, r/bulletjournal 1swqru9, score 36 | Yes. Verbatim, correct user, correct thread ("that same tips thread" matches line 178's link). |

X-source scope check: **clean.** The draft cites zero X material. The `@kellyangyang` quote the outline listed as optional cross-platform corroboration was omitted, and the 32,227-like `@yungkalez` post carrying `facts.md`'s explicit "about journaling in general, NOT the bullet journal method" scope limit never appears. No sentence anywhere presents general-journaling colour as bullet-journal evidence.

Unsourced / suspicious claims:
- None. Every numeric and attributed claim traces to `facts.md`, to `research/reddit.md`, or to a marker.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | Yes, line 168. |
| `[EXTERNAL_LINK_NEEDED:]` | `2` | Yes, lines 150 and 210. Both are exactly the two marker slots `outline.md` §External link plan pre-registered (H2 6's task-offloading claim, and the FAQ's ADHD answer). Both carry a `suggested source type:` clause naming a primary/allowlist class. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A, all 6 planned internal links are resolved to live slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Count matches. Positions match (all four sit after their H2 + 1 paragraph, per lines 46, 80, 120, 160). **Concept collision on one, see §7 major-1.** |

`[VERIFY:]` source-clause validation (§4.4), line 168:
- Contains the literal ` | source:` separator: **yes**.
- Source clause non-trivial: **yes**, it names both a file and a specific thread (`research/reddit.md thread r/BasicBulletJournals "/r/BasicBulletJournals/comments/1q3k0vv/"`).
- Named file exists: **yes**, `blog-ops/drafts/bullet-journal-for-beginners/research/reddit.md`.
- Claim resolves against that file: **yes**. `research/reddit.md` thread 3 §Top comment patterns records "appeared in at least 5 comments" and names all five users. **Marking this was the correct call** (the claim is not in `facts.md`, so the writer's standing rule required a marker), and the marker is unusually well-formed. It is also resolvable by the editor right now from on-disk research without any fetch, see §10.

Featured-image hygiene (§4.2a): **fails on one slot.** No `Suggested filename: featured.<ext>` anywhere, but the line-46 concept matches the outline's featured-image concept. See §7 major-1.

Image-placement hygiene (§4.2b): pass. No `[IMAGE:]` is immediately followed by a heading (line 46 → 48 prose, 80 → 82 prose, 120 → 122 prose, 160 → 162 bullet list).

Table-redundant chart (§4.2c): **checked and justified, no issue.** The line-120 slot is `remotion` and a markdown table sits 4 lines below it (124–130). The outline pre-registered this exact risk and set the bar: the slot survives only if the graphic shows what the table cannot. The draft's description clears that bar explicitly, "drawn at pen-stroke scale as it actually appears on paper, five handwritten rows... each with a short handwritten example line beside it". Keep it.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`, `TBD`, `AFFILIATE` all return 0 hits.

## 5. Word count

- Draft: `2,793` words (body prose after the closing frontmatter `---` through the end of the CTA, excluding the `## FAQ` block, excluding `[IMAGE:]` placeholder text and marker text, with link URLs stripped)
- Outline target: `2,750` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+1.6%`
- Band: `within ±10% = pass, no issue`

Per-section against the outline's own breakdown, for the writer's reference:

| Section | Actual | Outline target | Delta |
|---|---|---|---|
| Intro | 166 | ~200 | -17% |
| H2 1 What a bullet journal actually is | 277 | 280 | -1% |
| H2 2 The real reason beginners never start | 300 | 300 | 0% |
| H2 3 What you actually need to start | 222 | 240 | -8% |
| H2 4 How to set up your bullet journal | 555 | 500 | +11% |
| H2 5 Rapid logging | 252 | 240 | +5% |
| H2 6 Migration | 287 | 280 | +3% |
| H2 7 What a bullet journal is bad at | 328 | 300 | +9% |
| H2 8 How to keep it going past week two | 289 | 300 | -4% |
| CTA Start it badly, tonight | 117 | ~110 | +6% |
| **Body prose subtotal (gated)** | **2,793** | **2,750** | **+1.6%** |
| FAQ (ungated by §5, but inside `plan.md`'s range) | 339 | ~250 | **+36%** |
| **Grand total** | **3,132** | plan range 2,600–3,000 | **+4.4% over the top of range** |

The gated metric passes cleanly. The FAQ overage is logged separately as §7 minor-5, since it is the one number that breaches a target recorded in `plan.md`.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | All 23 base-list phrases grepped individually; `voice.md` adds none. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0 hits, plus 0 for `&mdash;` / `&#8212;`. |
| En-dashes (`–`) only in numeric ranges | Pass | 0 en-dashes in the file. |
| First-person throughout | **Partial** | Second person constant; authorial first person is 7 touches, none of them between lines 76 and 155. See §7 major-2. |
| Active voice | Pass | 0 passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | Every body H2 carries a concrete number plus visible burstiness; 5 of them also carry a bullet list or table. |
| ≥1 bullet list per ~300 words | **Partial** | 5 bullet lists (lines 32–38, 64–68, 144–148, 162–164, 182–184) plus 1 markdown table (124–130) across 2,793 words, so ~1 scannable block per 465 words against a ~300 target. Ruled acceptable rather than logged as an issue: H2 4's four numbered H3 sub-steps perform the same scannability job, and forcing bullets into a walk-through section would make it worse writing. Recorded here for the record, no fix requested. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | **Fail** | 3 rhetorical questions in the whole draft (lines 50, 142, 170), and none is a standalone paragraph, each opens a paragraph it then answers. H2 1, H2 3, H2 4, H2 5, H2 8, the intro and the CTA carry none. `authors.md` does not mandate the shape but `voice.md` §Lexicon names "Rhetorical opener questions ('Do you ever feel...?')" as a signature move. See §7 minor-7. |
| ≥1 concrete number or named example per major section | Pass | Intro "a decade in aviation PR" / "four pen colors"; H2 1 "four pages" / Ryder Carroll / Brooklyn; H2 2 "four minutes" / "15 million" / "eleven years"; H2 3 "Two things" / u/SunnyClime; H2 4 "two pages, six months to a page"; H2 5 "five marks"; H2 6 "three months running"; H2 7 "three of them" / "at least five people"; H2 8 u/lizzyote / u/BlueProcess; CTA "page one" / "three lines" / Text Summarizer. |
| No em-dash overuse | Pass | Zero to overuse. |
| Visible sentence-length variation in every section | Pass | Section stddevs run 4.9 to 11.2, comfortably above the <4 fail threshold. This is a genuine strength of the draft, not a bare pass. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 2 The real reason beginners never start | 46 | `major` | The inline `ai-prompt` placeholder renders the same concept as the post's featured image. `outline.md` §Image placement plan defines the featured slot as "an elaborate, heavily decorated spread beside a plain, obviously-working one, with the plain page clearly the point", and line 46 describes "A split composition contrasting what people think a bullet journal has to look like with what a working one looks like. Left: an elaborate hand-lettered spread... Right: a plain page". WordPress renders the featured image as a banner above the title, so the reader would meet the same split composition twice within 400 words. | Rewrite the line-46 `[IMAGE:]` description so it does not repeat the featured concept. Keep the slot and the `Type: ai-prompt`, but change the subject to something the featured banner does not already show, for example a phone screen scrolling a grid of immaculate decorated spreads while a plain, half-filled notebook sits open and ignored beside it. Update `Suggested filename:` to match the new concept. Do not touch the other three `[IMAGE:]` placeholders. |
| Whole post, concentrated in H2 4 / H2 5 / H2 6 | 76–155 | `major` | Olga is absent from the instructional core. Lines 76 to 155 run 1,094 words with zero first person, and across the whole draft there are only 7 authorial "I" touches, none of them self-deprecating. `voice.md` §Tone requires "warm, encouraging, conversational, practical, and lightly self-deprecating... like a friend who has been through the struggle". The draft never says whether Olga has actually kept a bullet journal, so line 17's expertise claim ("I tried most of the planning systems the internet recommends") is never cashed out anywhere in the body. `voice.md` §Personal-anecdote bank's "being intimidated building her first blog with zero HTML/CSS knowledge", which `brief.md` §Founder anecdote names as the secondary fit and which is an exact thematic match for this post's thesis, goes unused. | Add exactly two short first-person beats, without inventing any bullet-journal-specific experience that is not in `voice.md` §Personal-anecdote bank. (a) In H2 2, after line 54, add one or two sentences drawing the parallel to the anecdote bank's blog-building story: Olga was intimidated by something that only looked technical and nearly did not start, and it cost her time. Keep it to 35 words or fewer and keep it lightly self-deprecating in the register of `voice.md`'s "Face-palm city, right?", not a heroic origin story. (b) In H2 4 or H2 6, add one sentence in Olga's own first person about the boring-and-simple principle she already claims at line 17, for example that the setups she abandoned were always the ones that needed a ruler. Do NOT add first person to H2 7, it works as it is. |
| H2 2 The real reason beginners never start | 54 | `minor` | The framing "opens its own beginner guide by admitting the whole thing 'feels like this intimidating organization system'" converts a scoped concession into a universal one. `facts.md` §Quotes records the source as "**For some people**, the Bullet Journal method feels like this intimidating organization system that's made for people with an artistic gift or a knack for hyper-productivity". The quoted span itself is verbatim and correctly unlinked; only the lead-in overstates. | Change "opens its own beginner guide by admitting the whole thing" to "opens its own beginner guide by conceding that for some people the method". Leave the quoted span, the prose-only attribution and the rest of the sentence exactly as they are. |
| H2 7 What a bullet journal is bad at | 166 | `minor` | "The minimalist end of the community is direct about the first one" attributes a community-wide posture to a single score-4 comment. `research/reddit.md` thread 3 records u/ptdaisy333 as the thread's "Most contrarian/nuanced POV", whose full comment actually argues the opposite of a consensus reading: "For me, it's OK for tracking appointments, I put them in my future log and monthly log... What the journal can't do is issue reminders." The quoted fragment is accurate and supports limit 1 correctly; only the "community" framing over-reaches. | Change "The minimalist end of the community is direct about the first one." to "One commenter in the minimalist r/BasicBulletJournals put the first limit plainly." Leave the quote, the link and the following sentence unchanged. |
| H2 7 What a bullet journal is bad at | 168 | `minor` | "At least five people in the same thread described the identical hybrid: paper for thinking and planning, a digital calendar for anything with a clock time attached." `research/reddit.md` thread 3 supports the count and the digital-calendar half ("appeared in at least 5 comments... all describe a hybrid paper-journal-plus-digital-calendar setup"), but it does not record those five as describing paper's role as "thinking and planning", which is the draft's own framing. "Identical" also overstates five separately worded comments. | Change the sentence to: "At least five people in the same thread described the same split, with appointments and reminders living in a digital calendar and the notebook keeping everything else." Leave the `[VERIFY:]` marker on the line exactly as it is, its shape and source clause are correct. |
| H2 7 What a bullet journal is bad at | 170 | `minor` | Scientific American's line is reproduced word for word as anchor text with no quotation marks, so a verbatim 20-word borrowing reads as the draft's own paraphrase. `facts.md` records it as a quotation. | Wrap the anchor's text in quotation marks so it reads: Scientific American's framing is about posture rather than superiority: many people, it writes, "approach computers and tablets with a state of mind less conducive to learning than the one they bring to paper". Keep the link on the quoted span and keep the URL unchanged. |
| FAQ | 194–212 | `minor` | The FAQ runs 339 words against the outline's ~250 (+36%), pushing the grand total to 3,132 against `plan.md`'s 2,600–3,000 range. Body prose passes at +1.6%, so this does not fail §5. Most of the length is earned: FAQ answers are schema-facing and must be self-contained, and the outline explicitly planned the overlap between FAQ 1 and H2 4 Step 1. The unearned part is preamble, not substance, and it is concentrated in two spots. **Do not cut a whole answer**, all four are live People Also Ask questions and dropping one loses a schema entry. | Trim roughly 60 words. (a) Line 210: delete the opening sentence "Here is what the method does mechanically, which is the honest limit of what I can tell you." and start the answer at "At the end of each month, migration makes you rewrite..." The answer's own third sentence already carries that disclaimer. (b) Line 202: delete the closing sentence "Everything else you have seen online is optional.", which restates line 25's "Everything else is decoration." (c) Tighten line 206's four mistakes to one clause each. Change nothing else in the FAQ, and do not remove the `[EXTERNAL_LINK_NEEDED:]` marker at line 210. |
| H2 8 How to keep it going past week two | 182 | `minor` | The bullet is headed "Don't add collections until the four core pages have survived a month" but the list under it includes *threading*, which is not a collection. The draft's own gloss at line 29 defines a collection as "any list or page you make for one topic", and threading is a cross-referencing technique. Small category slip in the one section that is teaching a beginner to be careful about what they add. | Change the bullet lead from "**Don't add collections until the four core pages have survived a month.**" to "**Don't add extras until the four core pages have survived a month.**" Leave the rest of the bullet, including the *threading* gloss, exactly as written. |
| Whole post | 50, 142, 170 | `minor` | Only 3 rhetorical questions across 8 body H2s, and all three are analytical ("So what are you actually looking at...") rather than reader-directed. `voice.md` §Lexicon names "Rhetorical opener questions ('Do you ever feel...?')" as an Olga signature, and `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` §Humanization floor asks for one standalone-question paragraph per major section. H2 1, H2 3, H2 4, H2 5, H2 8, the intro and the CTA carry none. | Add two reader-directed questions as their own one-line paragraphs, and no more than two. Put one in H2 3 (around line 70, in the register of "Do you already own a notebook with fifteen pages used? That is the one.") and one in H2 8 (around line 176). Do not convert the existing three questions at lines 50, 142 and 170, they work. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **H2 7 stays critical to the last word, which is the single hardest thing the outline asked for.** `outline.md` H2 7 and `plan.md` §Tone hooks both forbid the section from concluding "but actually it's great", and line 172 closes it with "So if your week is mostly meetings that move, a notebook will lose to a calendar app, and no amount of setup will change that." That is a hard concession, not a walk-back, and the three limits at lines 162–164 are stated as flat facts with no hedge. The paper-versus-screens nuance at line 170 is the only pro-paper beat in the section and the writer correctly boxed it in ("about posture rather than superiority", "messier than 'handwriting wins'", "doesn't replicate cleanly"), honouring `facts.md` §Rejected's ban on re-asserting handwriting-beats-typing. **Do not move line 170 after line 172, do not soften line 172, and do not add a reassuring closer to this section.**
- **Line 183 is the model for how adjacent evidence should be labelled.** `facts.md` attaches an explicit scope limit to the r/Travelersnotebooks material ("adjacent evidence about journaling consistency in general, not a bullet-journal-specific finding"). The draft states the limit in the prose itself, in the reader's hearing: "One person's experience, in a thread about a different format, but it matches a pattern worth avoiding." It respects the constraint without going limp, and the X material carrying a similar scope limit was omitted entirely rather than stretched. Keep this sentence verbatim.
- **The jargon translations are genuinely written for a beginner, and each one carries a worked example rather than a definition alone.** Line 29 ("so a 'weekly spread' is two pages laid out for a week", "so a page headed 'books to read' is a collection"), line 118 (rapid logging shown as a before-and-after: "Call the letting agency" against "I really need to remember to call the letting agency tomorrow morning"), line 134 (signifier, with a star and an exclamation mark), line 138 (migration, defined mechanically before it is defended). The four core pages are named at line 27 with an honest deferral ("We'll build all four further down") and then each defined at the point of use. Not one gloss is written insider-to-insider. Keep all of them, including the deferral at line 27.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 46, the inline [IMAGE:] placeholder in H2 2. Rewrite its description so it
   does not duplicate the post's featured image. outline.md defines the featured
   slot as "an elaborate, heavily decorated spread beside a plain, obviously-working
   one", which is the same picture line 46 currently describes, and WordPress renders
   the featured image as a banner above the title, so the reader would meet it twice.
   Keep the slot and keep "Type: ai-prompt", but change the subject to something the
   banner does not already show, for example a phone screen scrolling a grid of
   immaculate decorated spreads while a plain, half-filled notebook sits open and
   ignored beside it. Update "Suggested filename:" to match the new concept. Do not
   touch the other three [IMAGE:] placeholders.

2. Voice, lines 76 to 155. Olga disappears for the entire 1,094-word instructional
   core, and there is no self-deprecating beat anywhere in the post, which voice.md
   §Tone requires. Add exactly two short first-person beats, and invent NO
   bullet-journal-specific experience that is not in voice.md §Personal-anecdote bank:
   (a) In H2 2, after line 54, add one or two sentences (35 words maximum) drawing the
       parallel to the anecdote bank's blog-building story: Olga was intimidated by
       something that only looked technical, nearly did not start, and it cost her
       time. Keep the register light and self-deprecating, in the spirit of voice.md's
       "Face-palm city, right?", not a heroic origin story.
   (b) In H2 4 or H2 6, add one sentence in Olga's own first person cashing out the
       claim she already makes at line 17, for example that the planning setups she
       abandoned were always the ones that needed a ruler.
   Do NOT add first person to H2 7. It works as it is.

3. Line 54. Change "opens its own beginner guide by admitting the whole thing" to
   "opens its own beginner guide by conceding that for some people the method".
   facts.md records the source as "For some people, the Bullet Journal method feels
   like...", and the current lead-in turns a scoped concession into a universal one.
   Leave the quoted span, the prose-only attribution and the rest of the sentence
   exactly as they are, and do NOT add a link to bulletjournal.com.

4. Line 166. Change "The minimalist end of the community is direct about the first
   one." to "One commenter in the minimalist r/BasicBulletJournals put the first limit
   plainly." research/reddit.md records u/ptdaisy333 as that thread's nuanced pushback
   at score 4, not its consensus. Leave the quote, the link and the following sentence
   unchanged.

5. Line 168. Replace "At least five people in the same thread described the identical
   hybrid: paper for thinking and planning, a digital calendar for anything with a
   clock time attached." with "At least five people in the same thread described the
   same split, with appointments and reminders living in a digital calendar and the
   notebook keeping everything else." research/reddit.md supports the count and the
   digital-calendar half but not the "thinking and planning" gloss. Leave the [VERIFY:]
   marker on that line exactly as it is; its shape and source clause are correct.

6. Line 170. Scientific American's line is reproduced word for word as anchor text
   with no quotation marks. Rewrite the clause as: Scientific American's framing is
   about posture rather than superiority: many people, it writes, "approach computers
   and tablets with a state of mind less conducive to learning than the one they bring
   to paper". Keep the link on the quoted span and keep the URL unchanged.

7. FAQ, lines 194 to 212. Trim roughly 60 words; the FAQ runs 339 against a ~250
   target, putting the grand total at 3,132 against plan.md's 2,600 to 3,000 range.
   Do NOT cut a whole answer, all four are live People Also Ask questions.
   (a) Line 210: delete the opening sentence "Here is what the method does
       mechanically, which is the honest limit of what I can tell you." and start the
       answer at "At the end of each month, migration makes you rewrite...". The
       answer's third sentence already carries that disclaimer.
   (b) Line 202: delete the closing sentence "Everything else you have seen online is
       optional.", which restates line 25.
   (c) Line 206: tighten the four mistakes to one clause each.
   Change nothing else in the FAQ. Do NOT remove the [EXTERNAL_LINK_NEEDED:] marker at
   line 210, and do NOT add any clinical claim or "studies show" phrasing to the ADHD
   answer; its mechanical-only framing is correct and was verified.

8. Line 182. Change the bullet lead "**Don't add collections until the four core pages
   have survived a month.**" to "**Don't add extras until the four core pages have
   survived a month.**" Threading is a cross-referencing technique, not a collection,
   and the draft's own gloss at line 29 defines a collection as "any list or page you
   make for one topic". Leave the rest of that bullet, including the *threading* gloss,
   exactly as written.

9. Add two reader-directed questions as their own one-line paragraphs, and no more than
   two: one in H2 3 (around line 70, in the register of "Do you already own a notebook
   with fifteen pages used? That is the one.") and one in H2 8 (around line 176).
   voice.md §Lexicon names rhetorical opener questions as an Olga signature and the
   draft has only three in eight sections. Do NOT convert the existing questions at
   lines 50, 142 and 170; they work.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Do NOT add Amazon or affiliate links and do NOT add an affiliate disclosure
paragraph. Shipping zero product links is the designed behaviour for this post
(plan.md §Open questions, confirmed at plan review).

Produce blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md. Do not
overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

- **The `[VERIFY:]` at line 168 can be closed by the editor now, without a fetch.** `research/reddit.md` thread 3 §Top comment patterns names all five commenters (u/Fun_Apartment631, u/patch99329, u/pet_a_ghost, u/FuryVonB, u/RhiaMaykes) and states "appeared in at least 5 comments". That is on-disk evidence for the count, so the claim does not need to wait for Stage 3d. Recommended: promote it to a `facts.md` §Statistics row and drop the marker after the draft-v2 pass. If for any reason it is not promoted, note that the number is currently load-bearing for the paragraph, so the writer's fallback if Stage 3d cannot confirm it is "several people in the same thread described the same split", which keeps the sentence intact.
- **The line-46 image collision originates in the outline, not the writer.** `outline.md` §Image placement plan describes the featured slot and the H2 2 slot in nearly the same terms, and the writer rendered both faithfully. The fix belongs in the draft because that is where the `[IMAGE:]` description lives, but the editor may also want to correct the outline's featured-slot line so the Stage 4a image planner does not reintroduce the collision.
- **`Type: remotion` on the line-120 symbol key is worth the image planner's second look at Stage 4a.** The description asks for handwriting "at pen-stroke scale as it actually appears on paper", which is closer to what `custom-instructions.md` §Image style calls an `ai-prompt` job than a "genuine diagram/chart". The slot itself is justified (see §4), it is only the type that may be wrong. Not logged as an issue because the type call is explicitly the image planner's at Stage 4a, not the writer's.
- **"Spread" in the intro was considered and cleared.** `plan.md` §Tone hooks lists spread among the terms requiring a first-use gloss, and the first use is line 13 while the gloss is line 29. I did not log it: the intro use is ostensive, inside a list of visual features that define it by context, the sentence is the outline's own approved P1 hook, and the gloss lands at the first point the meaning does any work. Flagging it would push the writer to break a hook that is doing its job.
- **The bullet-list density check is a soft pass, recorded so it is not re-litigated at iteration 2.** Six scannable blocks (five bullet lists plus one table) across 2,793 words is about one per 465 words against the humanization floor's ~300. I ruled it acceptable because H2 4's four numbered H3 sub-steps do the same work and adding bullets to a walk-through would be worse writing. If a future reviewer disagrees, the honest place to add one is H2 1, not H2 4.
- **Tone to watch on the revise pass.** The two additions requested in issue 2 are the only place this draft can go wrong. The post's whole credibility rests on telling the reader they need less than they were told (`plan.md` §Tone hooks), so the personal beats must stay small and slightly rueful. A confident "here is how I mastered this" anecdote would do more damage than the current absence.
- **Worth leaning into if there is ever a v2 of this post.** The strongest unused angle in `research/reddit.md` is thread 2's finding that long-time users say the practice took *years* to stick (u/pandafulcolors: "it can take a long time for the practice to stick, and personally took me a few years"). H2 8 currently frames week three as the danger point, which is true and useful, but the multi-year framing would be a genuinely differentiated honest note. Not requested for this revision, the section is already at budget.
