# Review: pomodoro-technique draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/pomodoro-technique/draft-v1.md`, `blog-ops/drafts/pomodoro-technique/outline.md`, `blog-ops/drafts/pomodoro-technique/facts.md`, `blog-ops/drafts/pomodoro-technique/brief.md`, `blog-ops/drafts/pomodoro-technique/research/serp.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/pomodoro-technique/draft-v1.md` (body prose word count: `2,152`; outline roll-up target: `2,150`)
- Outline: `blog-ops/drafts/pomodoro-technique/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md`)

## Verdict

`request_revisions`

Reasoning (1-3 sentences): The draft is structurally exact and unusually clean (zero em-dashes, zero forbidden phrases, zero unsourced numbers, H2 order and FAQ set matching the outline 1:1, word count within 0.1% of the roll-up target), but two `major` factual problems block approval: line 41 asserts two things about the UNC Writing Center page that nothing on disk supports, and line 146 calls the Time Timer Home MOD "the best-reviewed of the bunch" when `facts.md`'s own ratings table shows a higher-rated product on the same list. Both fixes are one-sentence edits; everything else in the issue table is `minor`.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`profile/voice.md` + `profile/authors.md`) | pass (with one nit) | First-person, warm, lightly self-deprecating, tested-not-theorized. "I came to timed work the boring way" (line 16) and "It is the least intimidating origin story in all of productivity" (line 33) land the voice exactly. Nit: `voice.md` §Lexicon names "Rhetorical opener questions" as a signature move and the draft uses one in the whole post (see §7 issue 5). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `\b(one could\|one should\|users are\|stakeholders)\b` returned nothing. "A user in r/pomodoro" (line 108) is a person, not the generic-plural drift the rule targets. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returned nothing. "was invented by a student" (line 14) is a deliberate historical passive with the agent named; acceptable. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 14.4, H2 1 14.6, H2 2 9.2, H2 3 6.1, H2 4 6.4, H2 5 9.9, H2 6 14.2, H2 7 11.1, CTA 9.8, FAQ 11.0. Floor is 4.0. Shortest sentence in the post is 2 words, longest 52. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Both lists greped (`writing-standards.md` §Forbidden phrases; `voice.md` §Additional forbidden phrases states "None beyond the generic list"). |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—' draft-v1.md` returns nothing across 2,685 total words. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–' draft-v1.md` returns nothing. All ranges are written with hyphens ("45-60 minutes", "15 to 30") or the word "to". |
| Intro jargon check (`writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation) | pass | Intro (lines 14-22) contains no SEO/marketing jargon and none of the six terms in `audience.md`'s translation table appear untranslated. "Timeboxing" appears in the intro only as a plain-English paraphrase ("giving a task a fixed slot on the calendar", line 19) and is formally translated on first body use at line 41. "Deep work" and "flow state" are both translated at lines 53-54. `brief.md` §Avoid list is satisfied. |
| Product code-literal grep against the body (`modules.product: true`) | pass | `profile/product.md` exposes no snake_case identifiers, status enums, or internal table names. No backticked code literals appear anywhere in the draft body. |
| Intro-hook over-anchoring | N/A | The intro hook is an origin story from the late 1980s, not a time-bound news peg. Check skipped per §1.9. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | Per `adapters/publish/frontmatter/wordpress.md`: `title` 53 chars (50-60 ✓), `date: 2026-09-08` ✓, `excerpt` 151 chars (≤160 ✓), `tags` 4 entries all present in `blog.md` §Tag taxonomy (`productivity`, `time management`, `students`, `digital tools for productivity`) ✓, `authors: Olga Pak` matches `authors.md` byline ✓, `draft: true` ✓, no `cover`/`heroImage` field ✓ (correct, the featured image ships via media upload). |
| Title in frontmatter matches outline "Final title" exactly | pass | `Pomodoro Technique: How It Works and When to Break It`, byte-identical to outline §Final title. |
| Slug / meta description match outline | pass | The wordpress frontmatter template defines no `slug` field; the draft directory name `pomodoro-technique` matches outline §Final slug. `excerpt` is byte-identical to outline §Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | 7 body H2s in outline order (lines 25, 43, 58, 84, 100, 120, 130), then the CTA H2 "Run one today, judge it on Friday" (line 160), then `## FAQ` (line 166). H3 sets also match: 5 under H2 3 (outline 3.1-3.5), 6 under H2 7 (outline 7.1-7.6). Zero deltas. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Four content paragraphs (hook 2 sentences, expertise 2, internal link 1, preview 1) plus the required italic affiliate disclosure as paragraph 5. The disclosure is mandated verbatim by `custom-instructions.md` §Content policy and by outline §P5 as a standing line that is not one of the four; not a violation of blog-craft's 4-paragraph cap. |
| Intro internal-link count ≤2 | pass | Exactly 1 (`/what-is-timeboxing`, line 19). The other three sit in the body sections the outline assigned them to. |
| No absolute cross-post links | pass | Grep for `https?://(www\.)?olgapak\.com/` returns nothing. All six internal links are root-relative with no trailing slash, matching `blog.trailing_slash: false`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | All eight sections carry at least one concrete number or named example, and all eight clear the burstiness floor. See §6 for the per-marker breakdown. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 `###` items (lines 168, 172, 176, 180, 184) in the outline's exact order and wording. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per that adapter's frontmatter template §FAQ, FAQPage JSON-LD is a WP-plugin concern and the adapter emits none. Sub-check skipped per §2.1. |
| FAQ is the last block, nothing after it | pass | The post ends at line 186 with the final FAQ answer. No trailing CTA. |
| Outro / CTA paragraph present, links the CTA target with an action anchor | pass | Lines 160-164. Links `/ai-tools` with the anchor "try my free AI tools to automate the mundane", which is `blog.md` §Primary CTA's hook verbatim. Two short paragraphs, no feature re-list, no prices. |

Structural deltas vs outline (if any):
- None. Every locked element (title, meta, H2 order, H3 sets, FAQ set, intro shape, CTA placement, image slot count and section assignment, external link plan) matches `outline.md`.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass | All 14 numeric claims traced: 25/5/4/15-30 structure, "10-minute bursts"/"hour-long stretches", "late 1980s", "2011 University of Illinois study published in Cognition", "32 studies and 5,270 participants", "three... randomised controlled trials", "Five were quasi-experimental... remaining 24", "45 posts", "nearly 20 years", "20%", "52 college students", "7.5 inches", "3, 5, 10, 15, 25 or 30 minutes", "5/25/10/50". The 50/10 and 60/15 interval suggestions trace to `facts.md` §Industry-take quotes (@MCovBrown, "50 minutes deep work, 10 minute rest") and §Voice-of-customer quotes (r/ADHD, "40/10 or 60/15"). No invented effect size, percentage, or "X% more productive" claim anywhere; line 93 explicitly refuses one, which is what `facts.md` §Rejected demands. |
| Non-numeric claims about cited sources trace to `facts.md` | **fail** | Line 41 makes two assertions about `writingcenter.unc.edu` that no file on disk supports. See §7 issue 1. |
| Competitor mentions framed "best for [segment]", not bare dismissals | N/A | `modules.competitors: false`. `facts.md` has no §Competitor facts section and the draft names no competitor products. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Competitors module off. No `verified`-date stamp appears anywhere in reader-facing prose (grep for `verified 20` returns nothing). |
| Product mentions (count: `3`, `modules.product` on) are each earning their place | pass (one nit) | "free AI tools" ×1 and "Text Summarizer" ×2, all inside the CTA (lines 160-164). Sections 1-7 stay product-free exactly as `plan.md` §Product references planned required. Deletion rule holds for the first two; the third is redundant (see §7 issue 9). Well under the >8 stuffing threshold. |
| Own-product pricing claims (`blog-craft.md` §Own-product pricing claims) | pass | `grep '\$[0-9]'` returns nothing. The CTA says "free AI tools" with no tier, cap, or amount. `brief.md` §Avoid list satisfied. |
| Soon-to-ship feature gap check | N/A | `brief.md` §Soon-to-ship features: "None". |
| Internal links (count: `4` to blog posts, `2` to site pages) placed in the section each is relevant to | pass | `/what-is-timeboxing` (line 19, intro), `/how-to-plan-your-week` (line 66, H2 3 step 1), `/how-to-stop-doomscrolling` (line 78, H2 3 step 4), `/time-blocking` (line 106, H2 5). Exactly the outline §P3 placement table. Inside blog-craft's 3-5 range. The first internal link (line 19) precedes the first external link (line 41), as required. |
| Every internal blog link is root-relative `{route_prefix}<slug>` (no trailing slash per `blog.trailing_slash: false`) | pass | All six verified. |
| External links (count: `4` citations + `5` affiliate) each point to reputable sources; anchor text = literal claim | pass (one nit) | Citations: `writingcenter.unc.edu` (.edu), `news.illinois.edu` (.edu), `pmc.ncbi.nlm.nih.gov` ×2 (NLM). 4 citations is inside blog-craft's 3-5 rule. Anchor text is the literal claim on three of four; the UNC anchor describes the page rather than the claim (§7 issue 1). |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | **pass** | Forbidden set from `research/serp.md` §Selected results analyzed: `en.wikipedia.org`, `todoist.com`, `pomodorotechnique.com`, `bcu.ac.uk`, `edpsyched.co.uk`, `verywellmind.com`, `pmc.ncbi.nlm.nih.gov`, `nytimes.com`. Per-link verdict on all 9 external links the draft renders: `writingcenter.unc.edu` not in forbidden set + `.edu` allowlist → clean. `news.illinois.edu` not in forbidden set + `.edu` allowlist → clean. `pmc.ncbi.nlm.nih.gov/articles/PMC12532815/` in forbidden set (rank 8) BUT NLM is explicit allowlist-class per `blog-craft.md` §Authoritative-site allowlist → intentional exception, no flag. `pmc.ncbi.nlm.nih.gov/articles/PMC6406620/` not in the SERP capture + allowlist-class → clean. Five `amazon.com/dp/` product links not in forbidden set → clean. **Zero equity leaks to ranking competitors.** Wikipedia, Todoist, pomodorotechnique.com, BCU, Verywell Mind and pomofocus.io all supply facts to this draft and none of them is linked, which is exactly the routing `blog-craft.md` §Forbidden external links asks for. |
| Affiliate link format (`custom-instructions.md` §Content policy) | pass | All five Amazon links are `https://www.amazon.com/dp/<ASIN>?tag=op01e-20` with the correct US tag, and all five ASINs match `facts.md` §Timer products exactly (B08HWCWY6Z, B0D7JG4VLD, B0BK2J71M1, B07WFDZ72L, B01MQXZ61Q). No `[AFFILIATE-LINK-PENDING:]` placeholders, no untagged Amazon URLs. Disclosure present at line 22. |
| Free-app link discipline | pass | Forest, Focus To-Do, Session, Be Focused and Toggl Track are named at line 158 and none is linked. `pomofocus.io` (SERP rank 5) is not mentioned at all. |
| Reddit / X attribution discipline | pass | All six Reddit quotes are attributed by subreddit, never by username, and no Reddit or X thread is linked. Every quote is verbatim against `facts.md` §Voice-of-customer quotes, including the deliberately trimmed r/ADHD line (line 126) and the cleaned-up r/studytips line (line 118). |
| Scope guard on PMC6406620 | pass | Line 128 states the claim and then immediately says "That study says nothing about Pomodoro specifically." This is precisely the guard `facts.md` §Statistics and outline H2 6 §scope constraint demanded. |
| Target keyword appears 2-8 times in body (actual count: `7`) | pass | "pomodoro technique" ×7 (lines 14, 25, 120, 130 heading, 162, 168, 176). "Pomodoro" alone ×29, mostly as a common noun. Inside the 2-8 band, no stuffing. |
| Invented-number check (§3.8) | pass | Grep for `\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`, `\d+\+ ` + domain noun, and migration/volume ranges returns nothing. The only large number in the post (5,270) is a cited study total. |
| Ratings / price discipline (`facts.md` §Timer products rules) | **fail** | No exact price is printed anywhere ✓ and no rating figure is quoted ✓, but the qualitative superlative at line 146 contradicts the ratings table. See §7 issue 2. |

Unsourced / suspicious claims:
- `draft-v1.md:41`, "A UNC writing coach's [account of the technique forcing him to define what a task actually contains] ... **opens with** the line", issue: neither the content characterization nor the "opens with" positional claim is supported. `facts.md` §Quotes supplies only the quote and its attribution ("Josh, a writing coach at the UNC Writing and Learning Center"). `research/serp.md` §Citations harvested from competitors row 6 describes the page only as "UNC Writing Center's own how-to guide to using the Pomodoro technique". The page was never deep-fetched: there is no `research/_raw/` capture for `writingcenter.unc.edu`. No `[VERIFY:]` marker on the line.
- `draft-v1.md:146`, "It's the best-reviewed of the bunch", issue: `facts.md` §Timer products records Time Timer Home MOD at 4.5 stars and the Rotating Productivity Timer, on this same list, at 4.6. What is uniquely true of the Time Timer is rating *volume* (9,850, the highest in the table by 3,500), not rating *score*.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A. §4.4 source-clause validation is vacuously satisfied. Note: two claims should have carried one (§7 issues 1 and 2) rather than shipping unmarked. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | Correct. Every citation the outline planned resolved to a real allowlist URL. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Correct. All four planned internal targets exist. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Count matches. Types match the outline plan 1:1 (1 `remotion` diagram at line 29, 3 `ai-prompt` scenes at lines 62, 104, 134), and the section assignments match (H2 1, H2 3, H2 5, H2 7). Two placement nits, see §7 issue 7. |

- **Featured-image hygiene (§4.2a):** pass. No placeholder carries `Suggested filename: featured.<ext>` and none matches the outline's featured concept (hand-lettered title over a flat-vector desk scene). The featured image correctly exists only as a frontmatter/media-upload concern, so the post will not render the same asset twice.
- **Table-redundant chart (§4.2c):** pass. The single `remotion` placeholder (line 29) is a cycle loop diagram, and the draft contains zero markdown tables, so nothing duplicates it. The outline anticipated this check explicitly.
- **Image-placement hygiene (§4.2b):** two placeholders sit immediately before an H3. See §7 issue 7 (logged for completeness; the outline planned both deliberately).

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `\[Verify:`, `\[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `AFFILIATE-LINK-PENDING` all return nothing. All four `[IMAGE:]` markers use the exact canonical shape including `Type:` and `Suggested filename:`.

## 5. Word count

- Draft: `2,152` words (body prose: everything after the closing frontmatter `---` through the end of the CTA, excluding `## FAQ`, excluding heading lines and the four `[IMAGE:]` placeholder lines, which are production instructions rather than prose)
- Outline target: `2,150` words (outline §Word count roll-up "Total estimate", same basis)
- Delta: `+0.1%`
- Band: **within ±10% = pass, no issue logged.** Raw `wc -w` on the same span *including* headings and `[IMAGE:]` placeholder lines is 2,341 (+8.9%), which is still inside ±10% on the more generous basis. `plan.md` range check: 2,152 sits inside the 1,800-2,200 target.

Per-section breakdown against the outline's allocations (prose only, headings excluded):

| Section | Draft | Outline | Delta |
|---|---|---|---|
| Intro (incl. disclosure) | 202 | ~200 | +1% |
| H2 1 What the Pomodoro Technique actually is | 238 | 210 | +13% |
| H2 2 Why breaking work into timed chunks works | 236 | 220 | +7% |
| H2 3 How to run your first Pomodoro today | 239 | 260 | -8% |
| H2 4 What the research actually says (and doesn't) | 183 | 240 | **-24%** |
| H2 5 When the 25/5 rule stops working | 363 | 360 | +1% |
| H2 6 Is the Pomodoro Technique good for ADHD? | 216 | 220 | -2% |
| H2 7 The best Pomodoro timers | 364 | 340 | +7% |
| CTA Run one today, judge it on Friday | 111 | 100 | +11% |
| **Total (gated)** | **2,152** | **2,150** | **+0.1%** |
| FAQ (not gated) | 283 | ~180 | +57% |

The total is effectively perfect, so no trim/expand note is logged against §5. The one section-level imbalance worth acting on is H2 4 at -24% against its allocation; it is logged as a `minor` in §7 (issue 6) on editorial grounds, not on word-count grounds, because it is the outline's stated ranking differentiator.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists greped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | Zero across 2,685 total words. Notably clean for a draft this long. |
| En-dashes (`–`) only in numeric ranges | pass | Zero en-dashes present. |
| First-person throughout | pass | "I" appears in the intro, H2 5, H2 6, H2 7 and the CTA; "you" carries the instructional sections. No third-person drift. |
| Active voice | pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | pass | H2 1 bullet list + numbers; H2 2 bullet list + numbers; H2 3 numbers + short/long variation (sd 6.1); H2 4 bullet list + standalone question + numbers; H2 5 bullet list + numbers; H2 6 numbers + named study; H2 7 numbers + named products; CTA numbers. |
| ≥1 bullet list per ~300 words | **partial** | 4 bullet lists (lines 36-38, 53-54, 95-97, 111-113) across 2,152 body words = 1 per 538. H2 3 and H2 7 substitute H3 sub-structure, which genuinely breaks the wall of text. H2 6 (216 words, four paragraphs, three of them 45+ words) has neither. Logged as §7 issue 4. |
| ≥1 standalone-question paragraph per major section (author voice calls for it: `voice.md` §Lexicon lists "Rhetorical opener questions") | **fail** | Exactly one in the whole post: "So what does that mean for you on a Tuesday morning?" (line 90). Seven of eight major sections have none. Logged as §7 issue 5. |
| ≥1 concrete number or named example per major section | pass | H2 1: 25/5/4/15-30, Cirillo, late 1980s. H2 2: 2011 Illinois study, Lleras. H2 3: four pomodoros, 25, 5, 15-30. H2 4: 32/5,270/3/5/24. H2 5: 50/10, 60/15, 20%, nearly 20 years, 45 posts. H2 6: 45-60, 40/10, 60/15, 52 students. H2 7: five named products, 3/5/10/15/25/30, 7.5 inches. CTA: 25 minutes. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Per-section stddev 6.1 to 14.6, all comfortably above the 4-word floor. Standout beats: "That model is probably wrong." (5 words, line 45) against a 43-word neighbour; "Even sceptics come around." (4 words, line 41); "Cheapest, and the literal pomodoro." (5 words, line 154). |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 1 What the Pomodoro Technique actually is | 41 | `major` | Two unsupported assertions about the UNC Writing Center page. (a) The anchor text calls it an "account of the technique forcing him to define what a task actually contains" and (b) the sentence claims that account "opens with" the quoted line. Neither is verifiable from anything on disk: `facts.md` §Quotes supplies only the quote and its attribution, `research/serp.md` §Citations harvested from competitors row 6 describes the page only as a how-to guide, and the page has no `research/_raw/` capture. No `[VERIFY:]` marker on the line. | Rewrite the third sentence of line 41 to claim only what `facts.md` supports. Replace it with: `Even sceptics come around. A writing coach at the UNC Writing and Learning Center says in his [guide to using the Pomodoro technique](https://writingcenter.unc.edu/2020/04/pomodoros/), "I wasn't convinced that a method named after a tomato was my best bet."` Keep the link and the verbatim quote. Do not assert where in the article the quote sits and do not characterize the article's argument. |
| H2 7 The best Pomodoro timers / H3 Time Timer Home MOD | 146 | `major` | "It's the best-reviewed of the bunch" is contradicted by `facts.md` §Timer products: the Time Timer Home MOD is 4.5 stars, and the Rotating Productivity Timer on this same list is 4.6. The claim as written is checkable and wrong. What is uniquely true of the Time Timer is rating volume: 9,850 ratings, more than 3,500 ahead of anything else in the table. | In line 146, replace `It's the best-reviewed of the bunch` with `It's the most-reviewed of the bunch by a wide margin`. Do not print the rating figure or the ratings count; `facts.md` §Timer products rules require qualitative framing only. |
| Whole draft | 41, 49, 88, 122, 124 | `minor` | Five UK spellings against a US-spelling house style. `content/blog/` runs `color` 13 / `colour` 5, `behavior` 6 / `behaviour` 0, `organize`+`organized` 7 / `organis*` 0, `favorite`+`favor` 4 / `favour*` 1. The draft uses "sceptics" (41), "behaviour" (49), "randomised" (88), "favours" (122), "stabilising" (124). | Normalize all five to US spelling: `sceptics` → `skeptics`, `behaviour` → `behavior`, `randomised` → `randomized`, `favours` → `favors`, `stabilising` → `stabilizing`. Change nothing else on those lines. |
| H2 6 Is the Pomodoro Technique good for ADHD? | 120-129 | `minor` | The only major section with no bullet list and no standalone question, and it carries the post's second-densest prose run: 216 words in four paragraphs, three of them 45+ words. It reads as a wall next to the sections around it. | Insert a standalone-question paragraph immediately after line 122, before the "For some people..." paragraph: `So which is it?` That single line breaks the block and sets up the two-sided answer the section already delivers. Do not restructure the section or touch the quotes. |
| Whole draft | 90 | `minor` | One standalone-question paragraph in the entire post ("So what does that mean for you on a Tuesday morning?", line 90) across eight major sections. `voice.md` §Lexicon names "Rhetorical opener questions ('Do you ever feel...?')" as a signature Olga move, and `writing-standards.md` §Humanization floor asks for one per major section. The draft is otherwise voice-accurate, so this is the clearest remaining gap between it and the published posts. | Add exactly two more standalone-question paragraphs, one in H2 2 and one in H2 5, plus the one specified for H2 6 above. In H2 2, insert after line 49: `So why does the break do the work?` In H2 5, insert after line 102, before the image placeholder: `So when should you actually break the rule?` Four total across the post is the right density. Do not add one to every section. |
| H2 4 What the research actually says (and doesn't) | 84-99 | `minor` | Thinnest section against its outline allocation (183 words vs 240, -24%) while H2 1 (+13%) and H2 7 (+7%) run over. It is also the outline's stated ranking differentiator, and one strong caveat already sitting in `research/serp.md` is unused: the 2025 review is titled for anatomy education, but its own authors report "no studies explicitly addressing PT in anatomy education have been found", so the paper's actual population is general education and STEM contexts. | Add 40-60 words as a new paragraph after line 91, before the "So what does that mean" question: name the scope gap as a third caveat, sourced to the same PMC12532815 review already linked at line 88 (do not add a second link to it, the outline permits linking it once). Frame it as another reason to treat the evidence as promising rather than proven. Total body prose is on target, so trim one sentence from H2 1 if you want the roll-up to stay flat. |
| H2 3 How to run your first Pomodoro today / H2 7 The best Pomodoro timers | 62, 134 | `minor` | Both `[IMAGE:]` placeholders sit immediately before an H3 rather than after a heading plus its first body paragraph (line 62 is followed by `### Pick one task, not a list`; line 134 by `### Ticktime T6 Pomodoro Timer Cube`). | No change required. `outline.md` §Image placement plan places both slots deliberately after the section's opening paragraph, which is the last prose before the H3 run begins, and there is nowhere else in either section for a scene image to sit without splitting the step list or the product list. Logged for completeness only; leave both placeholders where they are. |
| FAQ | 172-178 | `minor` | Two FAQ answers restate body arguments almost beat for beat. Q2 ("What should I do during the 5-minute break?", line 174) repeats H2 3 step 4 (lines 77-78) including the phone warning. Q3 ("Can I just use my phone as a Pomodoro timer?", line 178) repeats H2 7's opening framing (line 132) down to the phrasing: "the exact distraction you're trying to escape" against "the thing you're hiding from". The FAQ also runs 283 words against the outline's ~180 estimate, most of the overage sitting in these two answers. | Keep both questions, they are locked by the outline. Make each answer add one thing the body does not. Q2 (line 174): name two or three specific break activities instead of restating the anti-phone rule (which H2 3 already owns). Q3 (line 178): give the practical middle path for a reader who will not buy anything, e.g. airplane mode, a focus-mode shortcut, or running the timer on a laptop instead of the phone. Trim each answer back toward 45-55 words. |
| CTA Run one today, judge it on Friday | 164 | `minor` | "Text Summarizer" is named twice in two consecutive sentences; the second sentence ("The [Text Summarizer](/ai-tools/ai-text-summarizer) is the one to start with.") adds only the link. `outline.md` §Closing CTA asks for the tool to be named once, and the repetition reads as a second pitch. | Merge into a single mention: move the `/ai-tools/ai-text-summarizer` link onto the first mention (`That's the job I built the [Text Summarizer](/ai-tools/ai-text-summarizer) for`) and delete the final sentence of line 164. Keep the `/ai-tools` action-anchor link exactly as it is. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **Line 128, the scope guard on the ADHD study.** The draft cites PMC6406620 and then immediately writes "That study says nothing about Pomodoro specifically. What it does say is that hunting for the one technique that fixes everything is the wrong hunt." That is the exact guard `facts.md` §Statistics and outline H2 6 §scope constraint demanded, executed without hedging the sentence into mush, and it is the single most honest paragraph in the post. Do not delete it, soften it, or move it.
- **Lines 88-89, the evidence breakdown in H2 4.** The 32 / 3 RCTs / 5 quasi-experimental / 24 observational split, plus the authors' own "moderate to low certainty" and the publication-bias flag, plus line 96's explicit refusal ("Nobody can honestly hand you a percentage improvement, and anyone who does is inventing it"). No page-1 competitor does this, `research/serp.md` §Angle opportunities identified it as the differentiator, and the draft delivers it with every number traceable. Keep all of it; issue 6 asks you to add to this section, never to cut it.
- **Lines 106-118, the three-failure-mode structure in H2 5.** Each failure mode is a bolded lead-in, a verbatim Reddit quote attributed by subreddit (never by username, per `facts.md`), and a specific adaptation, closing on the "Three swaps" bullet list at 111-113 and the platform-split observation at 116. It is the section nothing on page 1 has, it is the reason this post exists per the outline, and the quote-attribution discipline is exactly right. Change nothing here except the standalone question issue 5 asks you to insert after line 102.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 41, MAJOR. The sentence about the UNC Writing Center makes two claims
   nothing on disk supports: that the article is an "account of the technique
   forcing him to define what a task actually contains", and that it "opens
   with" the quoted line. facts.md supplies only the quote and its attribution.
   Replace the third sentence of line 41 with exactly:
   Even sceptics come around. A writing coach at the UNC Writing and Learning
   Center says in his [guide to using the Pomodoro technique](https://writingcenter.unc.edu/2020/04/pomodoros/),
   "I wasn't convinced that a method named after a tomato was my best bet."
   Keep the link and the verbatim quote. Do not assert where in the article the
   quote sits and do not characterize the article's argument.

2. Line 146, MAJOR. "It's the best-reviewed of the bunch" is contradicted by
   facts.md's own ratings table: Time Timer Home MOD is 4.5, the Rotating
   Productivity Timer on the same list is 4.6. Replace "It's the best-reviewed
   of the bunch" with "It's the most-reviewed of the bunch by a wide margin".
   Do not print the rating figure or the ratings count.

3. Lines 41, 49, 88, 122, 124, MINOR. Normalize five UK spellings to the US
   house style used across content/blog: sceptics -> skeptics, behaviour ->
   behavior, randomised -> randomized, favours -> favors, stabilising ->
   stabilizing. Change nothing else on those lines.

4. MINOR, rhythm. The post has one standalone-question paragraph in eight
   sections; voice.md names rhetorical questions as a signature move. Add
   exactly three, as their own one-line paragraphs:
   - after line 49 (H2 2): So why does the break do the work?
   - after line 102 (H2 5), before the [IMAGE:] placeholder: So when should you
     actually break the rule?
   - after line 122 (H2 6), before the "For some people..." paragraph: So which
     is it?
   Do not add any others.

5. Lines 84-99, MINOR. H2 4 runs 183 words against its 240-word outline
   allocation and is the post's stated ranking differentiator. Add one new
   40-60 word paragraph after line 91, before the "So what does that mean"
   question: the 2025 review is titled for anatomy education, but its own
   authors report that no studies explicitly addressing the technique in
   anatomy education were found, so the evidence base it summarizes is general
   education and STEM contexts, not the population its title implies. Source it
   to the review already linked at line 88; do NOT add a second link to that
   URL. If you want the roll-up to stay flat, trim one sentence from H2 1.

6. Lines 172-178, MINOR. Two FAQ answers restate the body. Keep both questions
   (locked by the outline) and rewrite the answers so each adds something new.
   Q2 "What should I do during the 5-minute break?": name two or three specific
   break activities instead of restating the anti-phone rule that H2 3 already
   owns. Q3 "Can I just use my phone as a Pomodoro timer?": give the practical
   middle path for a reader who will not buy anything (airplane mode, a focus-
   mode shortcut, running the timer on a laptop instead of the phone). Trim each
   answer toward 45-55 words.

7. Line 164, MINOR. "Text Summarizer" is named twice in consecutive sentences.
   Move the /ai-tools/ai-text-summarizer link onto the first mention ("That's
   the job I built the [Text Summarizer](/ai-tools/ai-text-summarizer) for")
   and delete the final sentence of line 164. Leave the /ai-tools action-anchor
   link untouched.

Do NOT change: the two [IMAGE:] placeholders at lines 62 and 134 (the outline
places them deliberately), the scope-guard sentence at line 128, the evidence
numbers at lines 88-89, the three-failure-mode structure and Reddit quote
attributions in H2 5, any of the five Amazon affiliate URLs or tags, or the
affiliate disclosure at line 22.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/pomodoro-technique/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

- **This is a strong draft and the verdict is narrow.** Two one-sentence factual fixes are the only things standing between it and `approve`. If the editor would rather hand-apply issues 1 and 2 than spend a writer pass, the remaining seven issues are all `minor` and none of them blocks the verdict gate. The link discipline in particular is the cleanest I can check for: six facts sourced from ranking competitors (Wikipedia, Todoist, pomodorotechnique.com, BCU, Verywell Mind, pomofocus.io) are used throughout and not one of those domains is linked.

- **Intro paragraph count is deliberately 5, not 4, and that is correct.** `blog-craft.md` §Intro structure caps the intro at four paragraphs; `custom-instructions.md` §Content policy requires the affiliate disclosure as the last paragraph before the first `##` whenever a tagged Amazon link ships, and `outline.md` §P5 records it as a standing line outside the four. The editor should not read the §2 pass as a miss.

- **Two internal-link anchors carry no keyword signal for their targets**, and both were locked by the outline rather than invented by the writer: "giving a task a fixed slot on the calendar" → `/what-is-timeboxing` (line 19) and "your phone will eat the break" → `/how-to-stop-doomscrolling` (line 78). `blog-craft.md` §Internal linking wants anchor text near-exact-match to the target post's keyword, slightly varied. Both read beautifully in context, which is presumably why the outline chose them. Raising it for the editor's judgment at outline level, not as a writer instruction; the other two anchors ("plan the week first", "time blocking") are on the money.

- **The platform-split paragraph (line 116) is the riskiest sentence in the post to age**, and the writer handled it correctly. It says "I found not one genuine complaint" rather than "no critics exist on X", which is exactly the framing `outline.md` §Open questions asked for. Leave it as reported observation, and if a future run re-pulls X and finds criticism, this is the paragraph to update.

- **"Best-reviewed" was inherited from the outline, not invented by the writer.** `outline.md` H3 7.3 says "Best-reviewed of the five" and `facts.md` §Timer products offers "the best-reviewed of the bunch" as sanctioned phrasing. The outline is wrong on this one against its own facts table, so the fix belongs in the draft now, and a future run should not re-introduce it from the outline.

- **Word count is unusually well controlled.** +0.1% against the roll-up on a 2,150-word target, with only one section (H2 4, -24%) meaningfully off its allocation. The FAQ at 283 words against a ~180 estimate is the only real overrun, and issue 8 addresses the cause.

- **Zero em-dashes across 2,685 words** with no evidence of after-the-fact substitution damage: the replacements read as natural colons, periods and parenthetical commas throughout ("The name is less mysterious than it sounds.", "Not the phone: [your phone will eat the break]"). Worth noting because this is the check that usually costs a revision pass.
