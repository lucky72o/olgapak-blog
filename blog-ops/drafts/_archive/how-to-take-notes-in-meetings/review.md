# Review: how-to-take-notes-in-meetings draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `standards/blog-craft.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md` (body prose word count: `2,275`, excluding frontmatter and the FAQ block; outline roll-up target: `2,260`)
- Outline: `blog-ops/drafts/how-to-take-notes-in-meetings/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): Zero critical and zero major issues. Every forcing condition in the verdict tree is clean: no forbidden phrases, no em-dashes, no unsourced numeric claims, no `[VERIFY:]` markers at all, no external link touching a `research/serp.md` analysed URL, H2 order matches the outline, and body prose lands at +0.7% of the roll-up target. The seven issues logged in §7 are all `minor` copy-level fixes that do not block approval, though they are cheap enough to be worth sweeping at Stage 3d.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | PASS | Warm, first-person, lightly self-deprecating, punchy rhythm breaks present ("Sometimes that is completely true!" L35, "None of them, honestly." L133). The aviation-PR anecdote at L17 comes straight from the §Personal-anecdote bank. Reads as Olga, not as generic marketing copy. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | PASS | Grep for `\b(one could\|one should\|users are\|stakeholders\|the user)\b` returns nothing. "One person on r/LifeProTips" / "one commenter" are numeral uses, not third-person drift. |
| Active voice (no "X was scanned" shapes) | PASS | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returns nothing. Only mild passive is "the notes were written and everyone had already agreed to them" (L145), which is natural narration. |
| Burstiness present, every H2 section has visible sentence-length variation | PASS | Per-section sentence-length stddev: intro 13.8, H2 1 11.4, H2 2 6.0, H2 3 8.3, H2 4 12.0, H2 5 11.1, H2 6 8.2, H2 7 9.4, H2 8 8.5, CTA 16.3. All above the 4-word floor. Shortest sentence in the body is 1 word, longest 54. |
| Forbidden phrases count: `0` (list below); any hits = fail | PASS | Grepped against the full `writing-standards.md` §Forbidden phrases list; `voice.md` §Additional forbidden phrases declares "None beyond the generic list". Zero hits. |
| Em-dash count: `0` (grep U+2014); any hits = automatic §1 fail, each logged in §7 as `major` | PASS | grep for U+2014 in `draft-v1.md` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | PASS | `grep -n '–' draft-v1.md` returns nothing. Zero en-dashes to validate. |
| Intro jargon check (§Insider-jargon translation) | PASS | Intro (L15–21) contains no SEO/marketing jargon and none of the `audience.md` §Niche jargon translation terms. Body translates every specialist term on first use: "minutes" (L25), "action item" (L57), "timeboxing" (L117), "transcription" and "AI notetaker" (L123). |
| Product code-literal grep against the body (modules.product on) | PASS | `product.md` contains no backticked internal code constants; nothing to grep for. |
| Intro-hook over-anchoring | N/A | The intro hook is a durable behavioural scenario ("you type as fast as you can, you fill three pages"), not a time-bound event peg. The post will read the same in 12 months. |

Forbidden phrases found (grep output from `standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (`adapters/publish/frontmatter/wordpress.md`) | PASS | All six required fields present and filled: `title`, `date` (2026-09-08, today), `excerpt`, `tags`, `authors`, `draft: true`. Correctly carries NO `cover`/`heroImage` field, which is what this adapter's template requires (featured image ships via media upload, not frontmatter). `authors: Olga Pak` matches the byline in `authors.md`. |
| Title in frontmatter matches outline "Final title" exactly | PASS | `How to Take Notes in Meetings (Template + 5-Minute Habit)`, character-identical to outline §Final title. 57 chars, inside the strict 50–60 band, target keyword first, title case, no em-dash. |
| Slug / meta description match outline | PASS | Slug: the WordPress frontmatter template defines no slug field; the draft directory slug `how-to-take-notes-in-meetings` matches outline §Final slug. Excerpt is character-identical to outline §Final meta description (151 chars, ≤160; the outline's own "149 chars" annotation is two off, which is a bookkeeping nit in the outline, not a draft defect). |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | PASS | All 8 outline H2s present, in order, with exact heading text: L23, L37, L65, L82, L103, L121, L139, L147. The ninth H2 (`## Hand off the part you keep skipping`, L160) is the closing CTA, which the outline plans as an unnamed §Closing CTA block, and giving it a heading matches this blog's live convention (`bullet-journal-for-beginners.md` L196 `## Start it badly, tonight`, immediately before `## FAQ`). Not counted as a structural addition. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | PASS | Exactly 4 paragraphs, in the prescribed shape. L15 hook, 3 sentences, target keyword in the first clause. L17 expertise statement, 1 sentence. L19 internal-link paragraph, 1 sentence. L21 preview, 1 sentence. Intro internal-link count = 1, under the ≤2 ceiling and not a "see also" stack. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | PASS | H2 1 standalone question L31. H2 2 standalone question L59 + code block. H2 3 bullet list + standalone question L73. H2 4 bullet list + standalone question L88. H2 5 numbered list + question L117. H2 6 comparison table + standalone question L131. H2 7 concrete number "Ten seconds" L143 + 2-to-35-word sentence spread. H2 8 bullet list + standalone question L155. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | PASS | 5 `###` items (L168, 172, 176, 180, 184), all five outline questions, verbatim wording, same order. Inside the 3–5 band. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per the adapter's frontmatter template §FAQ, FAQPage JSON-LD is a WP-plugin concern and the adapter emits none; the SKILL's §2.1 says to skip this sub-check for this adapter. |
| Outro / CTA paragraph present | PASS | L160–164, two paragraphs, sitting immediately before `## FAQ`. Nothing follows the final FAQ answer. CTA links `/ai-tools` (the §Primary CTA target in `blog.md`) with the action anchor "Try my free AI tools to automate the mundane", matching the §Primary CTA hook verbatim and the pattern used in 14 live posts. |

Structural deltas vs outline (if any):
- None. The only difference from a literal heading-by-heading diff is that the closing CTA carries an H2 (`## Hand off the part you keep skipping`) where the outline names the block but not a heading. That is this blog's published house pattern and is not treated as drift.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | PASS | Full numeric sweep below. Every non-rhetorical figure traces to a `facts.md` row or `voice.md`. Zero `[VERIFY:]` markers needed and zero present. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors` is OFF for this post and `facts.md` has no §Competitor facts section. Separately confirmed the post names ZERO specific AI notetakers: grep for `granola\|otter\|heypocket\|comu\|zoom\|teams\|fireflies\|fathom\|notion\|obsidian\|evernote` returns nothing. The category is discussed generically ("an AI notetaker", defined at L123) exactly as `facts.md` §Named examples requires. This is not a tool roundup. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Module off; no competitor pricing or feature claims in the draft. |
| Product mentions (count: `3`, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | PASS | All three sit in the CTA (L164): "my free AI tools", "Email Generator", "Text Summarizer". Each is tethered to a specific job the body just established (drafting the follow-up; condensing a transcript). None survives the deletion test. Well under the >8 stuffing threshold and the body is entirely product-free, matching `voice.md` §Positioning. No price, dollar amount, usage cap, or tier breakdown anywhere (grep `\$\d` returns nothing); no adoption or usage figure, per `facts.md` §First-party data claims. |
| Internal links (count: `5` blog posts + `1` CTA page) exist in the intro cluster per `standards/blog-craft.md` | PASS | 1 in the intro (`/note-taking-methods`, L19, links UP to the pillar, correct silo direction), then distributed exactly as the outline's link table plans: `/cornell-note-taking-method` in H2 2 (L61), `/charting-method-note-taking` in H2 3 (L77), `/mind-mapping-note-taking-method` in H2 4 (L101), `/digital-vs-paper-notes` in H2 6 (L137), `/ai-tools` in the CTA (L164). 5 blog-post links is inside the 3–5 band. All five target slugs exist in `content/blog/`. First internal link (L19) precedes the first external link (L61). |
| Every internal blog link is root-relative `/<slug>` (no trailing slash, per `blog.trailing_slash: false`), not `https://olgapak.com/...` (absolute = `major`) | PASS | All six internal links are root-relative with no trailing slash. Grep for an absolute `olgapak.com` cross-post link returns nothing. |
| External links (count: `4`) each point to reputable sources; anchor text = literal claim | PASS | Inside the 3–5 band and exactly the four the outline's §External link plan specifies. See the forbidden-link audit below. Every anchor is the literal claim being cited, no "click here". |
| Target keyword appears 2–8 times in body (actual count: `3`) | PASS | L15 (intro hook), L105 (H2 5 opener), L133 (H2 6). Plus once in the title, which does not count toward the body total. Comfortably inside 2–8, no stuffing. |

**Numeric-claim trace (§3.1 detail).** Every number in the body, and where it traces:

| Line | Claim | Traces to |
|---|---|---|
| L17 | "eight years in commercial aviation PR and international event management" | `authors.md` bio ("8+ years") + `voice.md` §Personal-anecdote bank. |
| L61 | Cornell page "takes two minutes to read" | Rhetorical duration, not a factual claim. See §10. |
| L79 | "roughly an hour of write-up for a one-hour meeting" | `facts.md` §Statistics row 2. Attributed correctly as "one person's account rather than an average". |
| L95 | "what you said 30 seconds ago" | Inside the verbatim @DrPengSHEN quote, `facts.md` §Quotes. The post quotes the observation only and never touches the recording device that post promotes, per the facts.md note. |
| L113 | "post-meeting admin dropping from 45 minutes to 10" | `facts.md` §Statistics row 1. Attributed correctly as "one person's experience rather than a study". |
| L119 | "973 upvotes when I checked in September 2026" | `facts.md` §Quotes, u/Cheap_Appearance5095 row ("the top comment, 973 upvotes"). Dated as facts.md requires (engagement counts as of 2026-09-08 = today). |
| L143 | "Ten seconds" | Rhetorical. |
| L164 | "edit in a minute" | Rhetorical. |
| L51–55 | "14 October", "Friday 12th", "two weeks" | Inside the fenced template example; clearly illustrative, not factual claims. |

**Invented-number check (§3.8).** Greps for audience-size ranges (`\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`), "N+" adoption claims, and migration/volume ranges all return nothing. No fake precision anywhere. Notably, the draft correctly ships ZERO general meeting-cost, meeting-waste, or meetings-attended statistic, which `facts.md` §Rejected explicitly rules out. The writer did not import one from memory.

**Forbidden external links to SERP competitors (§3.5).** Forbidden set from `research/serp.md` §Selected results analyzed: `medium.com`, `asana.com`, `smallsheds.garden`, `duckalignment.academy`, `slack.com`, `teamwork.com`. Allowlist from `blog-craft.md` §Authoritative-site allowlist (`voice.md` §Additional allowlist domains declares "None beyond the generic allowlist").

| External link in draft | Line | Host on forbidden set? | On allowlist? | Verdict |
|---|---|---|---|---|
| `https://alumni.cornell.edu/cornellians/cornell-notes/` | L61 | No | Yes (`.edu` domain) | PASS |
| `https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand` | L99 | No | Yes (BBC, major publication) | PASS |
| `https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/` | L133 | No | Yes (major publication class) | PASS |
| `https://journals.sagepub.com/doi/abs/10.1177/0956797614524581` | L133 | No | Yes (primary_source, peer-reviewed SAGE) | PASS |

Zero links to any analysed SERP URL. The writer correctly routed to the primary source each competitor cites rather than to the competitor page, which is exactly the §Forbidden external links workflow.

**Quote-attribution audit.** All eight quoted or paraphrased sources are attributed as one person's experience, never as an average, a study, or expert authority: L29 ("Someone on r/projectmanagement"), L33 ("one project manager"), L35 ("a commenter in the same subreddit"), L63 ("one commenter"), L95 ("Someone on X"), L119 ("the most upvoted reply"), L135 ("as one commenter put it" / "someone asked on X"), L151 ("One commenter said it plainly"). The u/Interesting-Post4178 idea is used in Olga's own words at L137 without quotation marks, which is the right handling. The three `facts.md` §"Quotes available but NOT recommended" items (Schuurkes, Cotton, Fussell) are correctly absent as quotes; the Cotton facilitator point appears reworded in Olga's own voice at L141, as instructed.

Unsourced / suspicious claims:
- `draft-v1.md:29`, "Every new note-taker describes the same failure", issue: `universal generalization built on one Reddit comment; see §7 row 1`
- `draft-v1.md:63`, "It is also roughly where experienced note-takers end up on their own", issue: `same class, one commenter generalized into a cohort; see §7 row 2`
- No numeric claim is unsourced.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A. Nothing in the draft needed one, because every claim traces to `facts.md`. §4.4 source-clause validation therefore has nothing to validate. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | Correct. All four external claims found a real allowlist/primary source. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Correct. All five planned internal targets exist in `content/blog/`. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | PASS. Exact match on count, type, and position. |

**Image audit (§4.2, 4.2a, 4.2b, 4.2c):**

| Line | Type | Outline slot | Placement | Verdict |
|---|---|---|---|---|
| L27 | `ai-prompt` | After H2 1 + 1 paragraph | After L25, the section's first body paragraph | PASS |
| L41 | `remotion` | After H2 2 + 1 paragraph | After L39, the section's first body paragraph | PASS |
| L86 | `ai-prompt` | After H2 4 + 1 paragraph | After L84, the section's first body paragraph | PASS |
| L107 | `remotion` | After H2 5 + 1 paragraph | After L105, the section's first body paragraph | PASS |

- **Featured-image hygiene (4.2a):** PASS. No `[IMAGE:]` placeholder uses `featured.<ext>` and none matches the outline's featured concept (notebook beside a laptop on a meeting-room table). The featured image stays frontmatter/media-upload only, so nothing renders twice. Correct per `custom-instructions.md` §Image style, which also fixes the featured slot to `ai-prompt`.
- **Placement hygiene (4.2b):** PASS. No placeholder is immediately followed by an `^## ` or `^### ` heading; each sits after a heading plus its first body paragraph.
- **Table-redundant chart (4.2c):** PASS. The two `remotion` slots are a labelled quadrant diagram (L41) and a three-step process diagram (L107), neither a data chart. The only markdown table (L125–129) sits in H2 6, which the outline deliberately left imageless for exactly this reason, and the writer respected that.
- Every `[IMAGE:]` uses the canonical shape: description + `Type:` + `Suggested filename:`.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `\[Verify:`, `\[verify:`, `\[EXTERNAL_NEEDED:`, `\[IMG:`, `TODO`, and `TBD` all return nothing.

**Affiliate-disclosure check (post-specific).** PASS. Grep for `affiliate` / `amazon associate` returns nothing, and there are no Amazon or tagged product links. Correct: `brief.md` §Avoid list and §Autopilot assumption 6 establish this as an INFO guide with no affiliate links, so the `custom-instructions.md` §Content policy disclosure paragraph must NOT appear. Its absence is the right outcome, not an omission.

## 5. Word count

- Draft: `2,275` words (body prose: intro + 8 body H2s + CTA, excluding frontmatter and the `## FAQ` block; the fenced template block and the comparison table are counted, image placeholder text is not)
- Outline target: `2,260` words (outline §Word count roll-up "Total estimate", same basis)
- Delta: `+0.7%`
- Band: `within ±10% = pass, no issue logged`

Per-section drift against the outline's per-section estimates is small and self-cancelling: H2 2 runs ~30% light on prose (offset by its fenced template block), H2 3 runs +16%, H2 7 runs -16%, everything else is within 10%. The roll-up is effectively on target, so no trim/expand instruction is warranted. FAQ (~263 words) excluded from the gate, as specified.

## 6. Humanization floor (per `standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | PASS | Both lists grepped, zero hits. |
| Zero em-dashes (U+2014, grep returns nothing) | PASS | Zero. |
| En-dashes (`–`) only in numeric ranges | PASS | Zero en-dashes in the file, so nothing to validate. |
| First-person throughout | PASS | `I`, `we`, `you` only. No `one` / `users` / `stakeholders`. |
| Active voice | PASS | No passive markers. |
| ≥1 rhythm marker in every H2 | PASS | See §2. All nine H2s carry at least one. |
| ≥1 bullet list per ~300 words | PASS | 14 `- ` bullets plus one 3-item numbered list across 2,275 body words (1 bullet per ~163 words). Four list blocks: H2 3, H2 4, H2 5, H2 8. H2 2 and H2 6 substitute a fenced template block and a comparison table respectively, which serve the same wall-of-text-breaking function. |
| ≥1 standalone-question paragraph per major section (per `authors.md`, Olga's voice calls for rhetorical opener questions) | PARTIAL | 8 of 9 body sections have one: L31, L59, L73, L88, L117, L131, L155, plus the H2 6 pivot at L131. **H2 7 (`When you are the one running the meeting`, L139–145) has none.** Its only question mark sits inside a quoted line of dialogue ("Everyone happy?"). Logged as `minor` in §7. |
| ≥1 concrete number or named example per major section | PASS | H2 1 the Tronracer quote; H2 2 the worked template with named owners; H2 3 the one-hour write-up figure; H2 4 the "30 seconds" quote; H2 5 "45 minutes to 10" and "973 upvotes"; H2 6 the three-row table; H2 7 "Ten seconds" and the on-screen-notes example; H2 8 the u/svenson_26 quote. |
| No em-dash overuse | PASS | Zero em-dashes. |
| Visible sentence-length variation in every section | PASS | Stddev 6.0–16.3 across sections, all above the 4-word floor. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Why your meeting notes are not working | 29 | `minor` | "Every new note-taker describes the same failure" states a universal that rests on a single Reddit comment. `facts.md` §Rejected rejects exactly this move for the "nobody reads the notes" line, and the same discipline applies here. | Replace "Every new note-taker describes the same failure." with "The same failure turns up in every thread where note-takers compare notes." The quote that follows still lands, and the sentence stops claiming a universal it cannot source. |
| What to capture: the four-box meeting notes template | 63 | `minor` | "It is also roughly where experienced note-takers end up on their own" generalizes one commenter (u/Ezl) into a cohort, and the sentence that follows quotes exactly one person. | Replace "It is also roughly where experienced note-takers end up on their own." with "It is also where some experienced note-takers land on their own." Keep the quote unchanged. |
| During the meeting: write less, catch more | 99 | `minor` | The handwriting benefit is applied to meetings here ("you get a small bonus here"), 34 lines before H2 6 does the honest scoping. `facts.md` §Handwriting vs. typing warns the research is "largely from student/lecture research, not about business meetings specifically", and §Rejected rules out handwriting-beats-typing-for-meetings. The claim itself (handwriting forces condensing) is a mechanism claim and is sourced, so this is context, not overclaim. | Add a scoping clause so the sentence reads: "If you write by hand you get a small bonus here, and it is a mechanical one rather than a memory one, because [writing by hand forces you to prioritize and summarize as you go](https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand)." Leave the rest of the paragraph as is. |
| During the meeting: write less, catch more | 99 | `minor` | Spelling inconsistency inside one sentence: British "prioritise" and "summarise" in the anchor text sit next to American "behavior". The live corpus is American throughout (`Summarize` x15, `behavior` x6, zero British variants). | Change the anchor text to "writing by hand forces you to prioritize and summarize as you go". The anchor is the writer's paraphrase of the BBC claim, not a verbatim quotation, so the spelling is free to change; the URL and the literal-claim requirement are unaffected. |
| Paper, laptop, or an AI notetaker? | 135 | `minor` | "then answered himself across the replies" assigns a gender to @kabirnagral that `facts.md` does not establish. The facts row records only the handle and the reported finding. | Change "then answered himself across the replies" to "then answered it across the replies". |
| When you are the one running the meeting | 139–145 | `minor` | The only body section with no standalone-question paragraph, against the `writing-standards.md` §Humanization floor rule of one per major section and Olga's rhetorical-opener habit in `voice.md` §Lexicon. The section still passes the §Required rhythm rule via "Ten seconds" and its sentence-length spread. | Insert a standalone question as its own paragraph between L141 and L143, e.g. "So who writes it down instead?" directly before "Ask someone at the start, and rotate who that someone is." |
| FAQ | 178 | `minor` | The handwriting-vs-laptop answer says "Handwriting is linked to better memory and comprehension" without naming where that research comes from. The body scopes it properly at L133 ("come out of studying and lectures"), but FAQ answers get lifted into search results and read standalone, so the scoping should travel with the claim. "It depends what the notes are for" is a compressed version of the caveat, which is why this is `minor` and not `major`. | Change the second sentence to "Handwriting is linked to better memory and comprehension, though that research comes from studying and lectures rather than meetings, and it forces you to condense because you cannot keep up." Leave the rest of the answer unchanged. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The honest counterweight in H2 5 (L119) is the single best paragraph in the post and must not be trimmed.** Quoting the 973-upvote top comment that *disagrees* with the tip the section just recommended, then splitting the recommendation by meeting type ("Status updates and information-sharing calls suit the capture-then-process approach. Negotiations, design reviews and anything where you have to think on your feet do not"), is the exact thing every SERP competitor fails to do. It is also what makes the post read as tested rather than assembled. Keep the upvote count and the September 2026 date stamp on it.
- **The H2 6 handwriting-research scoping at L133 is a model of the discipline `facts.md` asked for.** "Both the case that... come out of studying and lectures, where the job is remembering things later. A meeting's job is usually different: produce a decision record other people can act on. So choose paper because it slows you down and has no inbox on it, not because a lecture-hall study said so." That paragraph turns a citation-shaped claim into a genuinely useful distinction, and it cites both the Scientific American and the SAGE primary source while doing it. Do not compress it.
- **The four-box template at L43–55 is the artifact the SERP is missing and it is executed exactly right.** A fenced, copy-pasteable block with one worked example line per box, immediately followed by the plain definition of an action item ("a task with a named owner and a date. Both parts, every time") and the sharpest line in the post ("'We should look at the budget' is not an action item, it is a feeling"). `research/serp.md` §Angle opportunities notes no competitor packages this as a ready-to-paste artifact; this draft does. Leave the block, the example lines, and the definition intact.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`.

## 10. Reviewer notes (free-form)

- **Carry the four external URLs to Stage 3d.** All four still carry `needs_verification` in `facts.md` §Handwriting vs. typing (and the Cornell page in §Named examples), and outline §Open questions records an unchecked box for exactly this: each URL must be confirmed to load AND to support the anchor wording used. The outline's standing instruction if one fails is to **cut the claim rather than soften it into a vague assertion, and accept that H2 6 loses roughly 40 words**. Do not backfill with an unsourced substitute. This is not a writer defect; it is an open Stage 3d task the editor should not lose.
- **L61 "takes two minutes to read"** is an unverifiable duration claim about the Cornell alumni page. It reads as colloquial rather than factual so I did not log it as an issue, but if Stage 3d is already touching that link, it costs nothing to change to "is worth two minutes" or drop the clause.
- **Reading level.** `authors.md` sets a beginner-friendly level and `writing-standards.md` targets 8th–9th grade. Two sentences run long enough to push past that: L17 (the expertise statement, 47 words in a single sentence) and L133 (the handwriting-research sentence, 54 words). Both are load-bearing and both sit next to short sentences, so burstiness is fine and I would not force a change. Worth a glance at the humanize pass, not a revision.
- **Tags.** All four (`productivity`, `note-taking`, `note-taking method`, `time management`) are verbatim entries from `blog.md` §Tag taxonomy, so no remap at staging. `note-taking method` is the loosest fit of the four (the post delivers a template rather than a named method), but it is defensible and it is a live term. No action.
- **Inbound internal links.** Outline §Inbound internal links plans three (`note-taking-methods`, `cornell-note-taking-method`, `digital-vs-paper-notes`). All three files exist in `content/blog/`. Per `custom-instructions.md` §Inbound internal links these get applied automatically at Stage 4b.5 to both the live WP posts and the local repo copies, without asking. Flagging so it does not get dropped, since the reviewer does not touch it.
- **Tone drift to watch on any future pass:** none detected. The risk with this topic is sliding into an AI-notetaker pitch, and the draft actively resists it (L137 names the vendor noise and says outright "which is exactly why this is not a tool roundup"). If a later pass adds any specific product name, that becomes a `critical` issue against `facts.md` §Rejected and `brief.md` §Avoid list.
