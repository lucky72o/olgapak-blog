# Review: ai-study-tools draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/ai-study-tools/draft-v2.md`, `draft-v1.md` (diff basis), `review-v1.md` (§9 verification basis), `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `research/reddit.md`, `research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `authors.md`, `blog.md`, `audience.md`, `product.md`, `custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

**This is a re-review.** It is scoped to three questions: did all nine `review-v1.md` §9 items land correctly, did the revision break anything, and do the six hard constraints still hold. Sections the revision did not touch were re-greped mechanically but not re-litigated.

## Reviewed

- Draft: `blog-ops/drafts/ai-study-tools/draft-v2.md` (word count: `3,036` body prose excluding FAQ; outline roll-up target: `2,800`)
- Outline: `blog-ops/drafts/ai-study-tools/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md / outline.md §Author voice)
- Prior review: `blog-ops/drafts/ai-study-tools/review-v1.md` (verdict `request_revisions`, 0 critical / 3 major / 6 minor, 9-item §9 block)

## Verdict

`approve`

Reasoning (1–3 sentences): all nine §9 instructions landed, seven of them verbatim as written and two (the H2 3 bullet list, the two standalone questions) as authorized latitude; the three `major` issues from iteration 1 are fully closed and all six `minor` ones are closed too. The revision broke nothing: the six hard constraints all still pass, both `[VERIFY:]` markers survive intact with their ` | source:` clauses, the new `[EXTERNAL_LINK_NEEDED:]` marker is correctly shaped, all four `[IMAGE:]` slots still sit at their outline positions, and the word count moved from +7.0% to +8.4%, still inside the clean ±10% band. One `minor` issue is logged, a wording echo the mandated hook rewrite created between L15 and L29, which does not block approve and is a Gate 2 polish call, not a writer round-trip.

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not applicable, verdict is `approve`.

---

## 0a. The nine §9 instructions, verified one by one

| # | §9 instruction | Landed? | Evidence in draft-v2 |
|---|---|---|---|
| 1 | Rewrite the L15 hook to the sourced version, keep the target keyword in sentence one, add no link | **Yes, with one authorized compression** | L15 carries the mandated text verbatim through `"the #1 AI study tool for students"`. The writer then compressed the following two sentences to `Six of the nine results on that first page are vendor homepages.` See §0b for the full adjudication. Target keyword present in sentence one. No link added. |
| 2 | Replace the OpenAI markdown link with `[EXTERNAL_LINK_NEEDED: ...]`, change nothing else in the sentence | **Yes, verbatim** | L117. Marker text is character-for-character the §9 text. `grep -oE 'https?://'` confirms `openai.com` is gone from the file entirely. Rest of the sentence and the whole H3 untouched apart from item 7. |
| 3 | L98 → `All five vendor pages I read ship the same four features` | **Yes, verbatim** | L108. One phrase changed, the rest of the paragraph byte-identical to v1. The `facts.md` §Named examples row now matches the set the sentence names. |
| 4 | FAQ → `Of the five top-ranking study apps I read` | **Yes, verbatim** | L235. The Evernote mislabels (`paid`, `all-in-one`, `at the top`) are all gone; `on their own pages` retained, which keeps the claim anchored to page-reading rather than use. |
| 5 | `eleven of them half-work` → `ten` | **Yes, verbatim** | L202. Now agrees with the H2 at L200 (`Collecting Ten Apps`). |
| 6 | Add the ellipsis to u/KevinTMT_c9's quote | **Yes, verbatim** | L144, `use Perplexity to search for materials..."`. Source (`research/reddit.md` L61) continues `/ use SciSpace to store and modify`, so the elision is real and now marked, consistent with the other nine quotations. |
| 7 | `is the fastest way out` → `is the quickest thing to reach for` | **Yes, verbatim** | L117. The comparative now attaches to the act of reaching rather than to the tool's performance, which is the point. |
| 8 | Add exactly TWO standalone-question paragraphs, one in H2 3 and one in H2 7 | **Yes, exactly two** | L74 `So what do you do with a lecture you only half-caught?` (H2 3) and L190 `So where do you draw your own line?` (H2 7). Count is now 4 of 9 sections (L33, L74, L164, L190). Not three, not one. The cap was respected. |
| 9 | Add ONE short bullet list (2 to 3 items) to H2 3 only; add none to H2 6 | **Yes** | L82–L84, a 3-item list under the Gemini H3, inside the authorized 2-to-3 range. H2 6 (L158–L178) is unchanged and still carries zero bullets, exactly as instructed, so the L162 chart is not duplicating a table. Total lists: 7 (L35, L44, L82, L112, L137, L194, L206), up from 6. |

Nothing outside these nine items changed. `diff draft-v1.md draft-v2.md` returns 9 hunks, all of them traceable to a §9 item, and zero incidental edits.

## 0b. Adjudication: the writer's self-reported deviation on item 1

**Ruling: the compression is correct and should stand. It does not lose the outline's P1 fact anchor and it does not distort anything.**

The writer's report is accurate. The §9 mandated text (`Search "AI study tools" and the first four results are not articles about the tools. They are the tools, and two of them open by calling themselves...`) made v1's next two sentences (`Six of the nine results on that first page are not articles at all. They are the tools' own homepages.`) a near-verbatim restatement of the sentence immediately above them. Keeping both would have said "not articles / they are the tools" twice in three sentences. The writer collapsed them to one clause.

Checks run on the compression:

- **Outline P1 fact anchor preserved.** The anchor is "6 of the 9 top Google results for this keyword are the tools' own homepages, not articles" (`outline.md` L50, sourced to `facts.md` §Verified from `_raw/_serp.json`). Both halves survive: the 6-of-9 count and the "homepages" characterization sit in the retained sentence, and "not articles" is carried by the mandated sentence one. Nothing was dropped.
- **No distortion.** `the tools' own homepages` became `vendor homepages`. Same referent, same six results (`facts.md` L25 names them: studley.ai, studyfetch.com, turbo.ai, mindgrasp.ai, ask-maeve.com, evernote.com). The count is unchanged and correctly stated.
- **New sentence two is accurate.** "two of them open by calling themselves" maps to rank 2 (`StudyFetch | The Top AI Learning Platform`) and rank 4 (`Mindgrasp | The #1 AI Study Tool for Students`) in `research/serp.md`. Ranks 1 and 3 make no superiority claim, which is precisely why the iteration-1 issue existed. The claim is now true of exactly the results it names.
- **Intro structure holds.** Still 4 paragraphs (L15, L17, L19, L21), the outline's stated maximum, not over it. Sentence counts per paragraph: 3 / 1 / 1 / 1, all inside the template's 1–3 band. P1 was also 3 sentences in v1, so the compression did not push it over anything it was previously inside.
- **Target keyword still in sentence one.** `Search "AI study tools" and...`. The outline's P1 writer note is satisfied.
- **It reads well.** The paragraph now moves observation → evidence → scale, and the two quoted vendor taglines do more work than v1's abstract "call themselves the best one" ever did. This is a stronger opening than v1's, not a compromise.

One cost, logged as the single `minor` in §7: `vendor homepages` at L15 now repeats the exact noun phrase at L29 (`Of the nine top results, six are vendor homepages`) fourteen lines later. v1 had the same fact in both places but in different words, so the echo is newly audible. It is a polish nit, not an error.

---

## 0c. The six hard constraints (re-verified from scratch on draft-v2, breach = `critical`)

| # | Constraint | Result | Evidence |
|---|---|---|---|
| 1 | No implied hands-on testing | **PASS** | Every changed line re-read individually plus a full-file re-sweep. See §0d. |
| 2 | No hyperlink to any top-10 SERP URL | **PASS** | 8 external links now (down from 9; the OpenAI row became a marker). None matches the forbidden set. No bare URLs, no reference-style definitions, no autolinks, no URLs in `[IMAGE:]` alt text or in the FAQ. |
| 3 | Every vendor number explicitly attributed | **PASS** | L140 and L170 are byte-identical to v1. Four user counts, four separate attributions; the 92% attributed with its footnote described. `grep -i 'millions of students'` returns zero. |
| 4 | MIT "cognitive debt" study never stated as a finding | **PASS** | `grep -Ei 'MIT\|EEG\|brain\|cognitive\|neural\|study (found\|showed)\|researchers found'` returns only false positives from `limit` / `admitted`. H2 7 (L180–L198) is unchanged apart from the added question at L190 and still frames the r/Teachers material as "a discussion rather than a study". |
| 5 | Zero em-dashes | **PASS** | `grep -n U+2014` returns nothing. `grep -n 'mdash\|#8212\|#x2014'` returns nothing. En-dash grep returns nothing. The nine new/changed sentences introduce no dash of any kind. |
| 6 | Pricing discipline | **PASS** | Exactly two `$` lines, both unchanged from v1 and both permitted (L29 The Rundown's $29/month, L166 Studley + Evernote from `facts.md` §Verified). No price, cap or tier for Olga's own tools; L217 still says "free AI tools" with no number. |

### 0d. Constraint 1 detail, re-swept

The revision added or altered eleven sentences. Each was tested for an implied-use reading:

- L15, the new hook. Describes a search result page. No use claim.
- L74, `So what do you do with a lecture you only half-caught?`. Second person, addressed to the reader. No narrator claim of any kind.
- L80, `Three steps, in [Gemini]`. Prescriptive framing, not a report of steps taken.
- L82–L84, the three bullets. All imperative (`Upload`, `Ask`, `Answer`), the same mood as the two prompts at L112 the outline already authorized. Imperative advice is not a testimony of use, and the section's con sentence at L88 (`it will happily wander off your syllabus`) is a documented behaviour rather than an observed one.
- L108, `All five vendor pages I read`. Reading pages is the stated method (L25). In-scope, and strictly safer than v1's phrasing.
- L117, `is the quickest thing to reach for`. Softer than v1's "fastest way out" and no first-person verb.
- L190, `So where do you draw your own line?`. Second person.
- L202, `ten of them half-work at once`. Rhetorical, no narrator.
- L235, `the five top-ranking study apps I read`. Slightly elliptical (you read pages, not apps) but the clause `on their own pages` in the same sentence anchors it to page-reading. No testing implied. This was the §9-mandated wording.

The v1 load-bearing sentences all survive verbatim: L25's method statement (`No lab, no scoring rubric out of ten`), L17's builder's-perspective expertise line, L144's conditional `what I would open`, L192's `three cases where I would close the laptop`, L223's FAQ conditional `if I had to hand one tool to a student today`. Re-greped for the soft-breach phrases (`I keep coming back to`, `in my experience with`, `the one I reach for`, `I've been using`, `after testing`, `in daily use`, `my go-to`): zero hits.

### 0e. Constraint 2 detail, re-run against the forbidden set

| Rank | Forbidden URL | Linked in draft-v2? |
|---|---|---|
| 1 | https://www.studley.ai/ | No. Named at L160, L166, L172, L174 as plain text. |
| 2 | https://www.studyfetch.com/ | No. Named at L140, L160, L168, L170 as plain text. |
| 3 | https://www.turbo.ai/ | No. Named at L140, L160 as plain text. |
| 4 | https://www.mindgrasp.ai/ | No. Named at L108, L140, L160 as plain text. |
| 5 | https://www.remnote.com/blog/best-ai-study-tools | No. Referred to only as "one of the two roundups". |
| 6 | https://www.reddit.com/r/studytips/comments/1ps962f/... | No. Referenced unlinked at L76. |
| 7 | https://www.therundown.ai/best-ai-tools/best-ai-study-tools | No. Unnamed, unlinked. |
| 8 | ask-maeve.com | Not named at all. |
| 9 | https://evernote.com/chat-with-ai-assistant/free-study-ai-tool | No. Named at L160, L166 as plain text. |

Sneak-in vectors re-checked on v2: `grep -nE '^\[[^]]+\]:'` (reference-style link definitions) returns nothing; `grep -nE '<https?://'` (autolinks) returns nothing; the four `[IMAGE:]` markers contain no URLs; the FAQ block (L219–L235) contains zero links. The removal of the OpenAI link reduced the surface further. Clean.

---

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `authors.md`) | Pass | Unchanged where untouched, and improved where touched: the two new standalone questions (L74, L190) are exactly the reader-directed rhetorical hook `voice.md` §Tone names as an Olga signature, and the H2 3 bullet list converts a dense two-clause instruction into a scannable move. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | `grep -nE '\b(one could\|one should\|users are\|stakeholders)\b'` returns zero. "users" still appears only inside attributed vendor claims (L140, L170), which is correct. |
| Active voice (no "X was scanned" shapes) | Pass | `grep -nE '\bwas (scanned\|checked\|monitored\|built)\b'` returns zero. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Recomputed per-section stddev on v2: intro 12.5, H2 1 6.5, H2 2 9.3, H2 3 8.7, H2 4 16.9, H2 5 8.9, H2 6 10.8, H2 7 8.7, H2 8 9.9, CTA 8.9. Threshold is 4. The two sections the revision touched (H2 3: 9.3 → 8.7, H2 7: 8.9 → 8.7) dipped fractionally because bullets and a short question shorten the mean, and both still clear the threshold twofold. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Both lists re-greped case-insensitively against the full v2 file, not just the diff. |
| Em-dash count: `0` (grep U+2014); any hits = automatic §1 fail | Pass | Also zero `&mdash;`, `&#8212;`, `&#x2014;`. |
| En-dash context: every U+2013 hit is inside a numeric range | Pass | Zero en-dashes in the file, so vacuously clean. |
| Intro jargon check (`audience.md` §Niche jargon translation) | Pass | The rewritten intro still never says "SERP". `audience.md`'s translation table lists SERP, DR, keyword difficulty, Parkinson's Law, timeboxing, Kanban; none appears. `vendor homepages` is not on the table and is glossed by the sentence in front of it ("They are the tools"), so a first-time reader is not left guessing. No "funnel", "featured snippet", "E-E-A-T" anywhere. |
| Jargon glossed on first use (outline requirement) | Pass | Unchanged: "hallucinate" and grounding (L50), active recall and spaced repetition (L104), "Socratic" (L125). |
| Intro-hook over-anchoring (§1.9) | Pass, unchanged | Still a structural observation rather than a time-bound event, so the check does not properly fire. The v1 `minor` on "this search" recurring in the FAQ was resolved by §9 item 4; L235 now says "the five top-ranking study apps I read". Remaining body uses at L158 and L160 are the approved differentiation angle. |

<!-- module: product -->
Product code-literal grep: N/A. `product.md` defines no internal code constants; the features are prose names (Email Generator, Text Simplifier, Acronym Explainer, Text Summarizer). No backticked identifiers in the draft.
<!-- /module -->

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):

None found. All 23 base-list phrases greped case-insensitively over the whole file; `voice.md` §Additional forbidden phrases adds none.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | Pass | L1–L13 byte-identical to v1. `adapters/publish/frontmatter/wordpress.md` requires title / date / excerpt / tags / authors / `draft: true` and forbids a `cover` field. All present, no `cover`. wordpress-rest emits no JSON-LD at the adapter level, so that sub-check is skipped per §2.1. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `9 Best AI Study Tools for Students in 2026, Ranked`, unchanged. |
| Slug / meta description match outline | Pass | Slug `ai-study-tools` (directory name; no slug field in this adapter's template). Excerpt at L4 unchanged and still matches the outline's Final meta description exactly, 159 chars. |
| H2 order in body matches outline body-sections list exactly | Pass | All 8 body H2s in outline order, verbatim, plus the outline's §Closing CTA block as an action-phrased H2 at L213 immediately before `## FAQ`, which is this blog's established convention. No additions, removals or reorderings. The revision added zero headings. |
| H3 set matches outline | Pass | All 8 H3s present in order and unchanged: NotebookLM, Claude, Gemini, Otter.ai, ChatGPT Study Mode, Khanmigo, Perplexity, Wolfram Alpha. |
| Intro is 2–4 paragraphs, 1–3 sentences each | Pass | 4 paragraphs (L15, L17, L19, L21), 3 / 1 / 1 / 1 sentences. At the outline's stated maximum, not over it. Target keyword in sentence one. See §0b. |
| Intro internal links ≤2 | Pass | Exactly 1 (`/digital-vs-paper-notes`, L19), woven into a sentence. Unchanged. |
| First internal link precedes first external link | Pass | L19 internal, L50 first external. |
| Every H2 has at least one rhythm marker | Pass | All 9 sections. H2 3 gained a second marker (the bullet list at L82) and H2 7 gained a third (the question at L190). |
| FAQ has `### <Q>` items matching outline FAQ set 1:1 | Pass | 4 questions (L221, L225, L229, L233), verbatim matches of the 4 verified People Also Ask questions in `facts.md`. The revision changed one answer's wording, no question text. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | wordpress-rest emits no FAQPage JSON-LD; the adapter's frontmatter template states FAQ schema is a WP-plugin concern. |
| FAQ is the last block, nothing after it | Pass | L235 is the final line of the file. CTA sits at L213–L217, immediately before `## FAQ` at L219. |
| Outro / CTA paragraph present, with action anchor to the blog's CTA target | Pass | L217 unchanged: `[try my free AI tools](/ai-tools) to automate the mundane`. Matches `blog.md` §Primary CTA hook verbatim, not the bare homepage. |

Structural deltas vs outline (if any):

- None. The revision touched only prose inside existing sections. Heading count, heading order, image slot positions, internal-link placements and the FAQ set are all identical to v1, which was already a faithful execution of the approved outline.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | The one v1 exception ("eleven of them half-work") was fixed at L202 and now agrees with its own H2. Every remaining number traces to `facts.md`, to the outline, or to a `[VERIFY:]` marker. The revision introduced two new numbers, both safe: "Three steps" (L80, describes the list beneath it) and "two of them" (L15, verified against `research/serp.md` ranks 2 and 4). |
| Every claim traces to a `facts.md` row, an outline row, or a marker | Pass | Both v1 mis-attributions are closed. L15 no longer overclaims about ranks 1 and 3. L108's "five vendor pages I read" now names the set `facts.md` §Named examples actually covers (Studley, StudyFetch, Turbo AI, Mindgrasp, Evernote), and the FAQ at L235 uses the same set with the same honesty. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | Pass | `modules.competitors: false`, checked anyway because H2 6 is adversarial by design. Unchanged: it still lands on "None of that makes these apps bad... that is a legitimate choice" (L176) and gives the category a "Best for:" line (L178). |
| Pricing / feature claims about competitors match `facts.md` values | Pass | L166 is byte-identical to v1. Studley and Evernote figures match `facts.md` §Verified verbatim, both observed 2026-09-06. The §3.6 freshness gate is module-gated off and `facts.md` has no §Competitor facts section. No `verified`-date stamp in reader-facing prose. |
| `[VERIFY:]` used for competitor pricing/features (§3.7, forbidden) | N/A | `modules.competitors: false` and `facts.md` has no §Competitor facts section, so §3.7 does not fire on L58's NotebookLM free-tier marker. The outline prescribed that marker's exact text. |
| Product mentions (count: `3`, `modules.product` on) each earn their place | Pass | L17 (the credibility anchor), L217 ("try my free AI tools" + "The Text Summarizer"). Unchanged by the revision. Deletion rule applied: removing either loses real meaning. Far under the >8 stuffing threshold. |
| Own-product pricing claims (§3.9) | Pass | No `$` or usage-cap phrasing anywhere near the product mentions. "free AI tools" is the approved durable framing. |
| Soon-to-ship feature gap check (§3.10) | N/A | `brief.md` lists no soon-to-ship features. |
| Internal links (count: `6`) placed per the outline's P3 table | Pass | Unchanged and complete: `/digital-vs-paper-notes` (L19, intro), `/note-taking-methods` (L46, H2 2), `/cornell-note-taking-method` (L108, H2 4), `/how-to-plan-your-week` and `/time-blocking` (L211, H2 8), plus the `/ai-tools` CTA (L217). Note that item 3's rewrite touched the same L108 sentence that carries the Cornell link, and the link survived intact. |
| Every internal blog link is root-relative, no trailing slash (`blog.trailing_slash: false`) | Pass | All 6 root-relative. `grep -n 'olgapak.com'` returns zero, so no absolute cross-post links. |
| External links (count: `8`) each point to reputable sources; anchor = literal claim | Pass | Down from 9. The v1 `major` on the OpenAI URL is closed. Table below. |
| Target keyword appears 2–8 times in body (actual count: `6` in prose, 7 including the L27 image alt) | Pass | L15, L23, L38, L70, L102, L133, plus the alt text at L27. Five of the six prose hits are H2 headings the outline specified. Inside `blog-craft.md`'s 2–8 range. The intro's `"the #1 AI study tool for students"` is a quoted vendor title tag, not counted. |

**External links, per-link verdict (§3.5 runs unconditionally):**

| Line | URL | On forbidden SERP set? | On allowlist? | Verdict |
|---|---|---|---|---|
| 50 | https://notebooklm.google.com/ | No | Official platform docs (Google) | OK |
| 64 | https://claude.com/ | No | primary_source (subject of the roundup) | OK |
| 80 | https://gemini.google.com/ | No | Official platform docs (Google) | OK, and the link survived item 9's restructure of this paragraph with its anchor text intact |
| 94 | https://otter.ai/ | No | primary_source | OK |
| 127 | https://www.khanacademy.org/khan-labs | No | primary_source | OK |
| 144 | https://www.perplexity.ai/ | No | primary_source | OK |
| 152 | https://www.wolframalpha.com/ | No | primary_source | OK |
| 182 | https://www.gallup.com/analytics/644939/state-of-higher-education.aspx | No | Major research org (`blog-craft.md` §Authoritative-site allowlist) | OK, still carries its `[VERIFY:]` marker |

Zero links to the forbidden set. The count self-corrected from 9 to 8 exactly as `review-v1.md` §10 adjudication 2 predicted, without anyone cutting a pick's link.

**Quote-fidelity re-audit (only the row the revision touched):**

| Line | Speaker | Source | Verdict |
|---|---|---|---|
| 144 | u/KevinTMT_c9 | `research/reddit.md` L61 | **Fixed.** Now `use Perplexity to search for materials..."`. The source continues `/ use SciSpace to store and modify`, so the elision is genuine and now marked, matching the convention every other quotation in the post uses. |

The other eleven quotations are byte-identical to v1 and were verified verbatim against `facts.md` §Quotes in iteration 1. Re-diffed, not re-traced.

**`[VERIFY:]` robustness re-test:** both markers are unchanged and both still survive deletion. L58 leaves "Reddit circulates specific quotas, and those move, so check before you plan a semester around them." L182 leaves "Most students are already using this stuff. So the interesting question is not whether to use it. It is when to put it down."

Unsourced / suspicious claims:

- None. Every claim flagged in iteration 1 (`draft-v1.md:15`, `:98`, `:190`, `:223`, `:107`) was fixed, and the revision introduced no new unsourced claim. The two outline-authorized claims noted in `review-v1.md` §10 for a Stage 3d glance are unchanged and still carry that status: L129 (Khanmigo's school-level coverage) and L96 (lecture-recording permission, correctly hedged with "may").

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `2` | Yes. Both unchanged, both carry ` \| source:` with substantive, file-referencing clauses, both sentences survive marker deletion. |
| `[EXTERNAL_LINK_NEEDED:]` | `1` | Yes, and it is the one iteration 1 required. L117. Shape validated below. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Correct. All five planned internal links resolve to real files in `content/blog/`. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Yes. Count, position and type all unchanged from v1 and still matching the outline's fixed slots. |

**`[VERIFY:]` source-clause validation (§4.4):**

1. L58: `| source: research/reddit.md r/PromptEngineering thread, u/AdCold1610 comment, unconfirmed against Google's own docs`. Separator present, clause substantive, names a real file, volunteers its own weakness. Valid.
2. L182: `| source: research/serp.md §"Citations harvested from competitors", secondhand via a competitor roundup, primary Gallup page not yet fetched`. Separator present, clause substantive, the named section exists at `research/serp.md` L219 with the Gallup row at L223. Valid.

Neither is blank, "TBD", or a restatement of the claim. §4.4 passes, so the Step 4 forcing branch does not fire.

**`[EXTERNAL_LINK_NEEDED:]` shape validation (new in v2):**

L117 reads `[EXTERNAL_LINK_NEEDED: OpenAI's own product page for ChatGPT study mode / guided learning mode, primary_source, the writer's URL was written from memory and could not be verified]`. Checked against `blog-craft.md` §Placeholder marker shapes, which specifies `[EXTERNAL_LINK_NEEDED: <claim + suggested source type>]`:

- Literal uppercase marker name with the colon, no stray space, so the Phase 4 grep will find it.
- Claim present (OpenAI's own product page for ChatGPT study mode).
- Source type present and named in the standard's own vocabulary (`primary_source`).
- Names the alternative product naming ("guided learning mode") so the human at Stage 3d can find the page even if OpenAI has renamed the feature. That is more than the shape requires and genuinely useful.
- States honestly why the marker exists rather than hiding it.
- Placement: inline between the subject and its verb, so resolving it means wrapping `ChatGPT's study mode` in the confirmed URL. Unambiguous.

Well formed. This is the marker doing exactly the job `review-v1.md` §10 adjudication 1 argued for: the URL is now on Stage 3d's worklist instead of passing as pre-verified.

**`[IMAGE:]` placement, re-checked against the outline's fixed slots:**

| Outline slot | Outline type | Draft-v2 line | Follows | Next line after marker | Hygiene checks |
|---|---|---|---|---|---|
| After H2 1 + 1 paragraph | remotion | L27 | H2 1 (L23) + para (L25) | prose (L29) | 2a pass, 2b pass, 2c pass (zero markdown tables in the file) |
| After H2 4 + 1 paragraph | remotion | L106 | H2 4 (L102) + para (L104) | prose (L108) | 2a/2b/2c all pass |
| After H2 6 + 1 paragraph | remotion | L162 | H2 6 (L158) + para (L160) | the standalone question at L164 | 2a/2b pass. 2c pass, and deliberately so: H2 6's free-tier detail stays prose per §9 item 9, so this chart duplicates no table. |
| After H2 7 + 1 paragraph | ai-prompt | L184 | H2 7 (L180) + para (L182) | prose (L186) | 2a/2b/2c all pass |

**H2 7 slot, specifically checked per the writer's note.** The image at L184 is anchored by the paragraph at L182 (the 57% Gallup sentence plus "It is when to put it down"), which is the paragraph the outline intended it to close. The new standalone question sits at L190, six lines *after* the image and after two further paragraphs of teacher quotes. It does not sit between the heading and its first paragraph, does not separate the image from its anchor, and does not push the image out of the outline's "after H2 7 + 1 paragraph" position. The slot is correct. The question also reads better there than it would have earlier: it turns the two quoted teachers into a prompt for the reader immediately before Olga states her own line at L192.

Featured-image hygiene (§2a): no inline `[IMAGE:]` carries `Suggested filename: featured.*` and none reproduces the outline's featured concept. Correct for the wordpress-rest adapter, which ships the featured image via media upload.

Type discipline per `custom-instructions.md` §Image style: three `remotion` slots (all genuine diagrams or charts), one `ai-prompt` slot (a scene). No blanket conversion. Featured stays `ai-prompt`. Compliant.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):

- None. Greped v2 for `[Verify:`, `[verify:`, `[EXTERNAL_NEEDED:`, `[IMAGE :`, `TODO:`, `[TBD]`. Zero hits.

## 5. Word count

- Draft: `3,036` words (body prose: everything after the closing frontmatter `---` at L13 through the end of the CTA at L217, excluding the `## FAQ` block, excluding the four `[IMAGE:]` marker lines, excluding `[VERIFY:]` and `[EXTERNAL_LINK_NEEDED:]` marker text)
- Outline target: `2,800` words (`outline.md` L296, "Total estimate (body prose, no FAQ)")
- Delta: `+8.4%`
- Band: `within ±10% = pass, no issue logged`

The revision added 91 words on this basis (the two questions, the three bullets, the marker-adjacent rewording), moving the delta from +7.0% to +8.4%. Still inside the clean band, so no trim note is required and the outline's designated trim targets (H2 6, then H2 5) stay untouched. Per-section measurement confirms no runaway: H2 2 470, H2 4 401, H2 6 370, H2 7 318, H2 5 307, H2 3 288, H2 1 226, H2 8 197, intro 170, CTA 91. FAQ measures 325 words separately and is not part of the gated total.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | Both lists re-greped over the whole file. |
| Zero em-dashes (U+2014, grep returns nothing) | Pass | Also zero HTML entities. |
| En-dashes (U+2013) only in numeric ranges | Pass | Zero en-dashes in the file. |
| First-person throughout | Pass | Zero third-person-drift hits. |
| Active voice | Pass | Zero passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | All 9 sections, and two sections gained one. |
| ≥1 bullet list per ~300 words | Improved, still under the nominal floor | 7 lists (L35, L44, L82, L112, L137, L194, L206) across 3,036 words; the raw floor implies ~10. **Not re-logged as an issue.** `review-v1.md` §9 item 9 deliberately authorized exactly one new list and expressly forbade one in H2 6, to keep the L162 chart from duplicating a table. The writer complied precisely. Re-flagging this would ask the writer to violate the instruction it was just given. |
| ≥1 standalone-question paragraph per major section | Improved, still under the nominal floor | 4 of 9 sections (L33, L74, L164, L190), up from 2. **Not re-logged**, for the same reason: §9 item 8 capped the addition at exactly two, on word-budget grounds, and the cap was respected. |
| ≥1 concrete number or named example per major section | Pass | Unchanged, and H2 3 gained one ("Three steps", L80). |
| No em-dash overuse | Pass | Zero. |
| Visible sentence-length variation in every section | Pass | Stddev 6.5 to 16.9 across ten blocks, against a threshold of 4. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Intro | 15 | `minor` | The mandated hook rewrite left `Six of the nine results on that first page are vendor homepages` at L15 and `Of the nine top results, six are vendor homepages` at L29 sharing the exact noun phrase fourteen lines apart. v1 stated the same fact in both places but in different words, so the echo is new. Not an accuracy problem (both statements are correct and sourced to `facts.md` §Verified) and not a structural one (L29 goes on to add the roundup detail the intro does not carry), purely an audible repetition in the post's most-read fourteen lines. | Optional, and a Gate 2 copy-polish call rather than a writer round-trip. If touched at all, change L15's clause to `Six of the nine results on that first page are the tools' own homepages`, which restores the outline P1 fact anchor's own wording and de-duplicates L29. Change nothing else in the paragraph, and do not restore v1's `not articles at all` sentence, that is the restatement the compression correctly removed. |

All nine issues from `review-v1.md` §7 (3 `major`, 6 `minor`) are closed. No new `critical` or `major` issue was introduced.

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The revision is surgical.** `diff` shows nine hunks and nothing else. Every load-bearing sentence iteration 1 asked to keep is byte-identical in v2: L25's method statement, L140's four-way vendor attribution, L170's 92% footnote description, the whole of H2 6's pricing paragraph, both `[VERIFY:]` markers. The writer changed what it was asked to change and nothing more, which is exactly the behaviour that makes a second review cheap. Preserve this discipline.
- **The new hook is materially stronger than v1's, and the writer's compression is the reason.** Quoting two vendors' own title tags back at the reader ("the top AI learning platform", "the #1 AI study tool for students") proves the post's thesis in the first two sentences instead of asserting it. The writer then noticed the mandated text made the next two sentences redundant and cut them rather than shipping a repetitive paragraph and blaming the instruction. Do not reinstate the removed sentences.
- **The H2 3 bullet list adds a step that was not in the instruction and is the best of the three.** "Answer them on paper before you look anything up" is the move that makes the Gemini technique actually work, it is the same closing-the-laptop argument H2 7 makes, and it costs seven words. Keep it.
- **The two new standalone questions are placed where the argument turns, not where a checklist wanted one.** L74 sits between the problem statement and the Reddit quote that answers it; L190 sits between the two quoted teachers and Olga's own line. Neither reads as filler inserted to satisfy a rule.
- **The `[EXTERNAL_LINK_NEEDED:]` marker does more than its shape requires.** It names the alternative product name ("guided learning mode") so Stage 3d can find OpenAI's page even if the feature has been renamed, and it says outright why the marker exists. That is a marker written for the human who has to resolve it.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`; the draft does not return to the writer. The single `minor` in §7 is an optional Gate 2 copy-polish note, not a revision instruction, and it must not be dispatched as a third writer pass.

## 10. Reviewer notes (free-form)

**On the compression, one word about process.** The writer hit a real conflict between the §9 instruction and the paragraph it landed in, resolved it in the direction of the reader, and reported the deviation instead of hiding it. That is the correct handling, and the deviation was correct on the merits (see §0b). Had it silently shipped the redundant version, the review would have logged a repetition issue against the reviewer's own mandated text, which is the failure mode worth avoiding here. Nothing to action.

**Carried forward, already routed.** The residual-risk observation from `review-v1.md` §10 stands unchanged and unweakened by this revision: `blog.md` §Point of view promises "Every tool and tactic recommended here is something Olga has personally tested", and this post cannot make that promise. It correctly does not try, and L25's method statement is the right mitigation. The editor has confirmed this is being written into `action-items.md` as a Stage 4b checkbox (spot-test NotebookLM, ChatGPT study mode and Studley before Gate 2). Not re-argued here. Note only that if Olga does spot-test, L25 can gain a clause at Gate 2 and the post gets materially stronger, and that clause must be added by a human at Gate 2, never speculatively by the writer.

**Stage 3d worklist, unchanged from iteration 1 plus one new item:**

1. L58, the NotebookLM free-tier quotas `[VERIFY:]`. Sentence survives deletion.
2. L182, the 57% Gallup figure `[VERIFY:]` plus its live link. Sentence survives deletion; `facts.md` says the argument does not depend on it.
3. **New:** L117, the `[EXTERNAL_LINK_NEEDED:]` for OpenAI's ChatGPT study mode page. Resolve by finding the current canonical URL and wrapping `ChatGPT's study mode`; if no stable page can be confirmed, leaving the prose unlinked is acceptable and the sentence still reads.
4. L129, Khanmigo's "coverage is strongest in school-level subjects" (outline-directed, no `facts.md` row) and L96, the lecture-recording permission line (outline-directed, correctly hedged). Both worth a glance, neither logged as an issue.

**External link count after the revision: 8.** The self-correction `review-v1.md` §10 adjudication 2 predicted happened on its own. If Stage 3d cannot confirm the Gallup figure, the claim gets deleted per `facts.md` and the count lands at 7, comfortably inside the standards default without any pick losing its link. Still no action needed at Stage 3b.

**Nothing else.** Iteration 2 found one `minor` where iteration 1 found nine issues, and the one it found is a side effect of a fix rather than a new defect. This draft is ready to move to Stage 3c.
