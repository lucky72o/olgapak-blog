# Review: pomodoro-technique draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/pomodoro-technique/draft-v2.md`, `blog-ops/drafts/pomodoro-technique/outline.md`, `blog-ops/drafts/pomodoro-technique/facts.md`, `blog-ops/drafts/pomodoro-technique/brief.md`, `blog-ops/drafts/pomodoro-technique/research/serp.md`, `blog-ops/drafts/pomodoro-technique/review-v1.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/pomodoro-technique/draft-v2.md` (body prose word count: `2,146`; outline roll-up target: `2,150`)
- Outline: `blog-ops/drafts/pomodoro-technique/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md`)

## Verdict

`approve`

Reasoning (1-3 sentences): Both `major` issues from review-v1 are fixed exactly as instructed (line 41 no longer characterizes the UNC Writing Center article or asserts where the quote sits; line 154 now says "most-reviewed by a wide margin" instead of the false "best-reviewed"), and all five `minor` instructions were applied without collateral damage. Every objective section passes: zero forbidden phrases, zero em-dashes, zero unsourced numeric claims, zero forbidden-SERP-competitor links, zero markers of any kind, H2/H3/FAQ structure identical to the outline, and body prose at -0.2% against the roll-up target. Five `minor` issues remain, none of which blocks the verdict gate and four of which need no draft edit at all.

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not applicable here, the verdict is `approve`.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`profile/voice.md` + `profile/authors.md`) | pass | First-person, warm, lightly self-deprecating, tested-not-theorized. "I came to timed work the boring way" (line 17), "It is the least intimidating origin story in all of productivity" (line 31), "or wash up the mug that's been on your desk since morning" (line 182). `authors.md` §Voice notes asks for punchy short sentences mixed with longer explanatory ones; the draft delivers 2-word and 52-word sentences in the same post. The three added rhetorical questions (lines 47, 108, 130) close the one gap review-v1 named against `voice.md` §Lexicon. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `\b(one could\|one should\|users are\|stakeholders)\b` returns nothing. "A user in r/pomodoro" (line 114) is a named individual, not the generic plural the rule targets. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returns nothing. "was invented by a student" (line 15) is a deliberate historical passive with the agent named in the same clause. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 13.4, H2 1 14.3, H2 2 8.7, H2 3 5.7, H2 4 7.6, H2 5 10.2, H2 6 13.8, H2 7 10.4, CTA 9.6, FAQ 12.8. Floor is 4.0; the weakest section clears it by 43%. Shortest sentence in the post is 2 words ("Move, mostly.", line 182), longest 52. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | All 24 entries from `writing-standards.md` §Forbidden phrases greped case-insensitively; `voice.md` §Additional forbidden phrases states "None beyond the generic list in writing-standards.md". Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | `grep -n '—' draft-v2.md` returns nothing across 2,687 total words. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | `grep -n '–' draft-v2.md` returns nothing. Zero en-dashes present; all ranges use hyphens ("45-60 minutes", "5-minute") or the word "to" ("15 to 30 minutes"). |
| Intro jargon check (`writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation) | pass | Intro (lines 15-23) contains none of the SEO/marketing baseline patterns and none of the six terms in `audience.md`'s translation table. "Timeboxing" appears in the intro only as the plain-English paraphrase "giving a task a fixed slot on the calendar" (line 19) and is formally translated on first body use at line 41. "Deep work" and "flow state" are both explicitly translated at lines 55-56. "Parkinson's Law" is never used. `brief.md` §Avoid list ("unexplained jargon") is satisfied. |
| Product code-literal grep against the body (`modules.product: true`) | pass | `profile/product.md` exposes no snake_case identifiers, status enums, or internal table/component names. No backticked literal appears anywhere in the draft body. |
| Intro-hook over-anchoring (§1.9) | N/A | The hook is a late-1980s origin story, not a time-bound news peg or event anchor. Check skipped per the procedure's first step. |
| US spelling (house style, `content/blog/`) | pass | All five UK spellings review-v1 flagged are normalized: `skeptics` (41), `behavior` (51), `randomized` (90), `favors` (128), `stabilizing` (132). Grep for `sceptic\|behaviour\|randomis\|favour\|stabilis\|organis\|colour\|realis\|recognis` returns nothing. "math" replaced "maths" at line 112, which review-v1 did not catch and the writer fixed anyway. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | pass | Per `adapters/publish/frontmatter/wordpress.md`: `title` 53 chars (50-60 ✓), `date: 2026-09-08` ✓, `excerpt` 151 chars (≤160 ✓), `tags` 4 entries all present verbatim in `blog.md` §Tag taxonomy (`productivity`, `time management`, `students`, `digital tools for productivity`) ✓, `authors: Olga Pak` matches the `authors.md` byline ✓, `draft: true` ✓, no `cover`/`heroImage` field ✓ (correct for this adapter, the featured image ships via media upload). |
| Title in frontmatter matches outline "Final title" exactly | pass | `Pomodoro Technique: How It Works and When to Break It`, byte-identical to outline §Final title. |
| Slug / meta description match outline | pass | The wordpress frontmatter template defines no `slug` field; the draft directory name `pomodoro-technique` matches outline §Final slug. `excerpt` is byte-identical to outline §Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | 7 body H2s in outline order (lines 25, 43, 60, 86, 104, 126, 138), then the CTA H2 "Run one today, judge it on Friday" (line 168), then `## FAQ` (line 174). H3 sets also match: 5 under H2 3 (outline 3.1-3.5, lines 66-82), 6 under H2 7 (outline 7.1-7.6, lines 144-164). Zero deltas from draft-v1, which was already exact. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Four content paragraphs (line 15 hook, 2 sentences; line 17 expertise, 2; line 19 internal link, 1; line 21 preview, 1) plus the required italic affiliate disclosure at line 23. The disclosure is mandated verbatim by `custom-instructions.md` §Content policy and recorded by outline §P5 as a standing line outside the four, so it is not a breach of blog-craft's 4-paragraph cap. |
| Intro internal-link count ≤2 | pass | Exactly 1 (`/what-is-timeboxing`, line 19). The other three blog links sit in the body sections the outline assigned them. |
| No absolute cross-post links | pass | Grep for `https?://(www\.)?olgapak\.com` returns nothing. All six root-relative links carry no trailing slash, matching `blog.trailing_slash: false`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | All nine sections carry at least one concrete number or named example, and all nine clear the burstiness floor. Four now also carry a standalone question. Per-marker breakdown in §6. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 `###` items (lines 176, 180, 184, 188, 192) in the outline's exact order and wording. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per that adapter's frontmatter template §FAQ, FAQPage JSON-LD is a WP-plugin concern and the adapter emits none. Sub-check explicitly skipped per §2.1. |
| FAQ is the last block, nothing after it | pass | The post ends at line 194 with the final FAQ answer. No trailing CTA, no post-FAQ prose. |
| Outro / CTA paragraph present, links the CTA target with an action anchor | pass | Lines 168-172, immediately before `## FAQ`. Links `/ai-tools` with the anchor "try my free AI tools to automate the mundane", which is `blog.md` §Primary CTA's hook verbatim. Two short paragraphs, no feature re-list, no prices. The duplicate Text Summarizer mention review-v1 flagged is gone; the tool is now named once, with the link on that mention. |

Structural deltas vs outline (if any):
- None. Every locked element (title, meta description, H2 order, both H3 sets, FAQ set and wording, intro shape, affiliate-disclosure placement, CTA placement, image slot count and section assignment, external link plan, internal link placement table) matches `outline.md` exactly.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass | All 14 numeric claims traced to `facts.md`: 25/5/4/15-30 (line 27, §Statistics row 4); "10-minute bursts"/"hour-long stretches"/"late 1980s" (line 15, §Named examples Cirillo); "2011 University of Illinois study published in Cognition" (line 49, §Statistics row 5); "32 studies and 5,270 participants" / "three... randomized controlled trials" / "Five were quasi-experimental, and the remaining 24" (line 90, §Statistics rows 1-2); "50/10 or 60/15" (line 112, §Industry-take quotes @MCovBrown + §Voice-of-customer r/ADHD); "nearly 20 years" (line 114, §Voice-of-customer r/pomodoro); "around 20% of the time worked" (lines 116 and 190, §Named examples Flowtime); "45 posts" (line 124, §Named examples platform split); "45-60 minutes" / "40/10 or 60/15" (line 134, quoted verbatim); "52 college students" (line 136, §Statistics row 6); "3, 5, 10, 15, 25 or 30 minutes" and "5/25/10/50" and "7.5 inches" (lines 146, 148, 158, §Timer products). No effect size, percentage, or "X% more productive" claim appears anywhere; line 99 explicitly refuses one, which is what `facts.md` §Rejected demands. |
| Non-numeric claims about cited sources trace to `facts.md` | pass | The review-v1 `major` at line 41 is resolved: the sentence now claims only that a writing coach at the UNC Writing and Learning Center said the quoted line in his guide, which is exactly what `facts.md` §Quotes and `research/serp.md` §Citations row 6 support. The article's argument is no longer characterized and no positional claim ("opens with") remains. One new claim, the anatomy-scope caveat at line 94, traces to `research/serp.md` §Statistics rather than to `facts.md`; see §7 issue 2, logged `minor` because review-v1 commissioned it and it is verbatim-supported on disk. |
| Competitor mentions framed "best for [segment]", not bare dismissals | N/A | `modules.competitors: false`. `facts.md` has no §Competitor facts section and the draft names no competitor products. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Competitors module off. Grep for `verified 20` and `(verified` in reader-facing prose returns nothing, so no `Last verified` stamp leaked into the body. |
| Product mentions (count: `2`, `modules.product` on) are each earning their place | pass | "Text Summarizer" ×1 and "free AI tools" ×1, both inside the CTA (line 172). Sections 1-7 stay product-free exactly as `plan.md` §Product references planned required. Deletion rule holds for both: remove either and the sentence loses its referent. Down from 3 mentions in draft-v1, and far under the >8 stuffing threshold. |
| Own-product pricing claims (`blog-craft.md` §Own-product pricing claims) | pass | `grep '\$[0-9]'` returns nothing. The CTA says "free AI tools" with no tier, cap, or dollar amount. `brief.md` §Avoid list ("stating any price for Olga's AI tools") satisfied. |
| Soon-to-ship feature gap check | N/A | `brief.md` §Soon-to-ship features records "None", so there is no gap-framing language to grep for. |
| Internal links (count: `4` to blog posts, `2` to site pages) placed in the section each is relevant to | pass | `/what-is-timeboxing` (line 19, intro), `/how-to-plan-your-week` (line 68, H2 3 step 1), `/how-to-stop-doomscrolling` (line 80, H2 3 step 4), `/time-blocking` (line 112, H2 5). Exactly the outline §P3 placement table, and inside blog-craft's 3-5 range. The first internal link (line 19) precedes the first external link (line 41), as required. Plus `/ai-tools` and `/ai-tools/ai-text-summarizer` in the CTA (site pages, not blog posts). |
| Every internal blog link is root-relative `{route_prefix}<slug>` (no trailing slash per `blog.trailing_slash: false`) | pass | All six verified root-relative and slash-free. |
| External links (count: `4` citations + `5` affiliate) each point to reputable sources; anchor text = literal claim | pass (one nit) | Citations: `writingcenter.unc.edu` (.edu), `news.illinois.edu` (.edu), `pmc.ncbi.nlm.nih.gov` ×2 (NLM). Four citations, inside blog-craft's 3-5 rule, and PMC12532815 is linked exactly once as the outline's external-link plan required. Anchor text is the literal claim on three of four; the UNC anchor describes the page instead. See §7 issue 1, `minor` and deliberately so. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | pass | Forbidden set from `research/serp.md` §"Selected results analyzed": `en.wikipedia.org`, `www.todoist.com`, `www.pomodorotechnique.com`, `www.bcu.ac.uk`, `www.edpsyched.co.uk`, `www.verywellmind.com`, `pmc.ncbi.nlm.nih.gov` (rank 7 in the capture), `www.nytimes.com`. Per-link verdict on all 9 external URLs the draft renders: `writingcenter.unc.edu` not in the forbidden set, `.edu` allowlist → clean. `news.illinois.edu` not in the forbidden set, `.edu` allowlist → clean. `pmc.ncbi.nlm.nih.gov/articles/PMC12532815/` IS in the forbidden set but NLM is explicit allowlist-class per `blog-craft.md` §Authoritative-site allowlist → intentional exception, no flag. `pmc.ncbi.nlm.nih.gov/articles/PMC6406620/` not in the capture, allowlist-class → clean. Five `amazon.com/dp/` links are affiliate product URLs, not citations, and no Amazon URL appears in the SERP capture → clean. **Zero equity leaks to ranking competitors.** Six domains that supply facts to this draft (Wikipedia, Todoist, pomodorotechnique.com, BCU, Verywell Mind, pomofocus.io) are cited-from and linked to zero times, which is exactly the routing `blog-craft.md` §Forbidden external links asks for. |
| Affiliate link format (`custom-instructions.md` §Content policy) | pass | All five Amazon links are `https://www.amazon.com/dp/<ASIN>?tag=op01e-20` with the correct US Associates tag, and all five ASINs match `facts.md` §Timer products exactly (B08HWCWY6Z, B0D7JG4VLD, B0BK2J71M1, B07WFDZ72L, B01MQXZ61Q). No `[AFFILIATE-LINK-PENDING:]` placeholder and no untagged Amazon URL anywhere. Disclosure present verbatim at line 23. |
| Ratings / price discipline (`facts.md` §Timer products rules) | pass | The review-v1 `major` is resolved. Line 154 now reads "It's the most-reviewed of the bunch by a wide margin", which is true against the table (9,850 vs the next-highest 6,341) and does not print the figure. No exact price anywhere; only sanctioned qualitative tiers ("the priciest of the five here" line 146, "Best value" line 150, "Cheapest" line 162). No rating score is quoted for any product, and the Tomato timer's "middling rating" (line 162) is the honest framing `facts.md` demanded. |
| Free-app link discipline | pass | Forest, Focus To-Do, Session, Be Focused and Toggl Track are named at line 166 and none is linked. `pomofocus.io` (SERP rank 5) is not mentioned at all. |
| Reddit / X attribution discipline | pass | All six Reddit quotes attributed by subreddit (r/studytips, r/pomodoro, r/ADHD ×2, r/adhdwomen), never by username, and no Reddit or X thread is linked. Every quote is verbatim against `facts.md` §Voice-of-customer quotes, including the deliberately trimmed r/ADHD line (line 134) and the cleaned-up r/studytips line (line 124). The X platform-split observation (line 124) is framed as "I found not one genuine complaint", reported observation rather than proof of absence, exactly as outline §Open questions required. |
| Scope guard on PMC6406620 | pass | Line 136 states the claim and immediately follows with "That study says nothing about Pomodoro specifically." The guard `facts.md` §Statistics and outline H2 6 §scope constraint demanded survived the revision pass intact. |
| Target keyword appears 2-8 times in body (actual count: `6`) | pass | "pomodoro technique" ×6 in the body (lines 15, 25, 41, 126, 170, 176), plus 2 frontmatter occurrences that do not count. Inside the 2-8 band with no stuffing. |
| Invented-number check (§3.8) | pass | Grep for `\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`, `\d+\+ ` followed by a domain noun, and migration/volume ranges returns nothing. The only four-digit number in the post (5,270) is a cited study total linked to its source on the same line. |

Unsourced / suspicious claims:
- `draft-v2.md:94`, "That review is titled for anatomy education, but its authors searched and found no studies addressing the technique in anatomy teaching at all", issue: supported verbatim by `research/serp.md` §Use-in-post facts (Statistics, third bullet) and by outline H2 4, but not carried as a row in `facts.md`, which describes itself as "the ONLY pool of concrete data the writer is allowed to cite without additional verification". The claim carries no number, so the §3.1 numeric test does not fire, and review-v1 issue 5 explicitly commissioned this paragraph. Logged `minor` in §7 with a facts.md-side fix, not a draft-side one.
- No other unsourced or suspicious claim found. Both review-v1 entries in this list are resolved.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | N/A. §4.4 source-clause validation is vacuously satisfied. Both claims review-v1 said should have carried a marker were rewritten to fit `facts.md` instead, which is the better resolution. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | Correct. All four citations the outline planned resolved to real allowlist URLs. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Correct. All four planned internal targets exist and were verified HTTP 200 at outline time. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Count matches. Types match the outline plan 1:1 (one `remotion` diagram at line 29, three `ai-prompt` scenes at lines 64, 110, 142) and the section assignments match (H2 1, H2 3, H2 5, H2 7). Two placement nits carried over from draft-v1, see §7 issue 5. |

- **Featured-image hygiene (§4.2a):** pass. No placeholder carries `Suggested filename: featured.<ext>` and none matches the outline's featured concept (hand-lettered title over a flat-vector desk scene). The featured image exists only as a frontmatter/media-upload concern, so the post will not render the same asset twice.
- **Image-placement hygiene (§4.2b):** two of four placeholders (lines 64 and 142) are followed by an H3 rather than by body prose. Logged `minor` in §7 issue 5; no change is required, `outline.md` §Image placement plan puts both after the section's opening paragraph deliberately and there is nowhere else in either section for a scene image without splitting the step list or the product list.
- **Table-redundant chart (§4.2c):** pass. The single `remotion` placeholder (line 29) is a cycle loop diagram and the draft contains zero markdown tables, so nothing duplicates it.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `\[Verify:`, `\[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `AFFILIATE-LINK-PENDING` all return nothing. All four `[IMAGE:]` markers use the exact canonical shape including the `Type:` and `Suggested filename:` clauses.

## 5. Word count

- Draft: `2,146` words (body prose: everything after the closing frontmatter `---` through the end of the CTA, excluding `## FAQ`, excluding heading lines and the four `[IMAGE:]` placeholder lines, which are production instructions rather than prose)
- Outline target: `2,150` words (outline §Word count roll-up "Total estimate", same basis)
- Delta: `-0.2%`
- Band: **within ±10% = pass, no issue logged.** The same span including heading text is 2,275 (+5.8%), still inside ±10% on the more generous basis. `plan.md` range check: 2,146 sits inside the 1,800-2,200 target.

Per-section breakdown against the outline's allocations (prose only, headings and `[IMAGE:]` lines excluded):

| Section | Draft-v2 | Draft-v1 | Outline | Delta vs outline |
|---|---|---|---|---|
| Intro (incl. disclosure) | 202 | 202 | ~200 | +1% |
| H2 1 What the Pomodoro Technique actually is | 222 | 238 | 210 | +6% |
| H2 2 Why breaking work into timed chunks works | 237 | 236 | 220 | +8% |
| H2 3 How to run your first Pomodoro today | 232 | 239 | 260 | -11% |
| H2 4 What the research actually says (and doesn't) | 227 | 183 | 240 | -5% |
| H2 5 When the 25/5 rule stops working | 360 | 363 | 360 | 0% |
| H2 6 Is the Pomodoro Technique good for ADHD? | 213 | 216 | 220 | -3% |
| H2 7 The best Pomodoro timers | 358 | 364 | 340 | +5% |
| CTA Run one today, judge it on Friday | 95 | 111 | 100 | -5% |
| **Total (gated)** | **2,146** | 2,152 | **2,150** | **-0.2%** |
| FAQ (not gated) | 244 | 283 | ~180 | +36% |

Review-v1's one section-level imbalance is fixed: H2 4 moved from -24% to -5% on the strength of the new anatomy-scope paragraph, and the writer paid for it by trimming H2 1 and the CTA exactly as instructed, so the roll-up stayed flat. No section is now more than 11% off its allocation. The FAQ, which is not part of the gated total, dropped from 283 to 244 words with every answer landing in the 41-55 word band review-v1 asked for.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists greped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | Zero across 2,687 total words, with no evidence of after-the-fact substitution damage: the breaks read as natural colons, periods and commas ("The name is less mysterious than it sounds.", "Not the phone: [your phone will eat the break]", "Move, mostly."). |
| En-dashes (`–`) only in numeric ranges | pass | Zero en-dashes present. |
| First-person throughout | pass | "I" carries the intro, H2 5, H2 6, H2 7 and the CTA; "you" carries the instructional sections. No third-person drift. |
| Active voice | pass | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | pass | H2 1 bullet list + numbers; H2 2 bullet list + standalone question + numbers; H2 3 five H3 sub-steps + numbers + short/long variation; H2 4 bullet list + standalone question + numbers; H2 5 bullet list + standalone question + numbers; H2 6 standalone question + named study + numbers; H2 7 six H3s + named products + numbers; CTA numbers + short/long variation. |
| ≥1 bullet list per ~300 words | pass (with note) | 4 bullet lists (lines 35-37, 55-56, 98-100, 120-122) across 2,146 body words = 1 per 537 on a strict count. Counting structure rather than syntax, H2 3 and H2 7 are built from 5 and 6 H3 sub-blocks respectively, which break the wall of text harder than a bullet list would, and the intro and CTA are 1-3 sentence paragraphs. The single section with neither a list nor sub-headings is H2 6 (213 words, four paragraphs), which now carries a standalone question at line 130. Logged as §7 issue 4, `minor` and optional. |
| ≥1 standalone-question paragraph per major section (author voice calls for it: `voice.md` §Lexicon lists "Rhetorical opener questions") | pass | Four across the post (lines 47, 96, 108, 130), up from one in draft-v1. This is the exact density review-v1 prescribed ("Four total across the post is the right density. Do not add one to every section."), so the per-section reading of the floor is deliberately not applied here. `authors.md` sets no per-section requirement. |
| ≥1 concrete number or named example per major section | pass | H2 1: 25/5/4/15-30, Cirillo, late 1980s, UNC. H2 2: 2011 Illinois study, Lleras, Cognition. H2 3: four pomodoros, 25, five, 15-30. H2 4: 32 / 5,270 / 3 / 5 / 24. H2 5: 50/10, 60/15, 20%, nearly 20 years, 45 posts. H2 6: 45-60, 40/10, 60/15, 52 students. H2 7: five named products, 3/5/10/15/25/30, 7.5 inches, five named apps. CTA: 25 minutes, Text Summarizer. |
| No em-dash overuse | pass | Zero. |
| Visible sentence-length variation in every section | pass | Per-section stddev 5.7 to 14.3, all above the 4-word floor. Standout beats: "Move, mostly." (2 words, line 182) against a 39-word neighbour; "So which is it?" (4 words, line 130) against a 52-word one; "That model is probably wrong." (5 words, line 45). |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 1 What the Pomodoro Technique actually is | 41 | `minor` | The UNC external link's anchor text ("guide to using the Pomodoro technique") describes the destination page rather than restating the literal claim being cited, which is what `blog-craft.md` §External linking asks for. The other three citation anchors do it correctly. | No change. This anchor is the deliberate resolution of review-v1's `major` issue 1: any anchor that states a literal claim about that page would re-introduce an assertion about its contents that nothing on disk supports (the page was never deep-fetched, there is no `research/_raw/` capture for `writingcenter.unc.edu`). A descriptive anchor is the correct trade here. Logged for the record only. |
| H2 4 What the research actually says (and doesn't) | 94 | `minor` | The anatomy-scope caveat is sourced to `research/serp.md` §Use-in-post facts, not to `facts.md`, which declares itself the only pool the writer may cite without further verification. The claim is accurate and on disk, and review-v1 issue 5 commissioned it, so this is a provenance-bookkeeping gap rather than a content problem. | No draft change. Editor action instead: add a row to `facts.md` §Statistics carrying "the 2025 scoping review found no studies specifically addressing the Pomodoro Technique in anatomy education despite that being its stated focus, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/, status: verified", so the claim's provenance survives after the draft folder is archived and Phase 4 can verify it in 30 seconds. |
| FAQ | 190 | `minor` | Q4's Flowtime answer restates line 116 nearly beat for beat: both give "work until you genuinely need a break" plus "roughly proportional... around 20%" plus "the alternative real users switch to". The outline locked this question, so it stays, but the answer currently adds nothing the body has not already said 74 lines earlier. | Optional, and only worth a pass if the editor is already revising for another reason. Keep the question and the 20% mechanic (a reader who lands on the FAQ from search needs the definition), but replace the third sentence ("It is the alternative real users tend to switch to when the rigid 25/5 cycle keeps cutting them off mid-thought.") with the practical detail the body does not give: that you note the start and stop time and let the break scale with the session, so a 90-minute stretch earns roughly 18 minutes. Do not add a number that is not derived arithmetically from the 20% already sourced in `facts.md`. |
| H2 6 Is the Pomodoro Technique good for ADHD? | 126-136 | `minor` | The only major section with neither a bullet list nor H3 sub-structure: 213 words in five paragraphs, two of them 45+ words. Overall bullet density is 1 list per 537 words against the `writing-standards.md` §Humanization floor's 1-per-300 guideline. | Optional, not blocking. Review-v1 prescribed the standalone question at line 130 as the fix for this section and the writer applied it exactly, so demanding a bullet list now would move the goalposts on iteration 2. If the editor wants the density anyway, the cleanest insertion is a two-item list after line 132 contrasting "the timer helps you start" against "the timer cuts off hyperfocus", using only material already in that paragraph. Do not add new claims and do not touch the quotes. |
| H2 3 How to run your first Pomodoro today / H2 7 The best Pomodoro timers | 64, 142 | `minor` | Both `[IMAGE:]` placeholders are followed by an H3 rather than by body prose (line 64 by `### Pick one task, not a list`, line 142 by `### Ticktime T6 Pomodoro Timer Cube`), so each image sits before a heading instead of after one. | No change required. `outline.md` §Image placement plan puts both slots after the section's opening paragraph deliberately, which is the last prose before the H3 run begins, and there is nowhere else in either section for a scene image to sit without splitting the step list or the product list. Logged for completeness only; leave both placeholders where they are. |

All eight `major`/`minor` issues from review-v1 are resolved. Both `major` items (line 41 UNC over-claim, line 154 "best-reviewed") are fixed verbatim; the five actioned `minor` items (US spellings, three standalone questions, H2 4 anatomy-scope paragraph, two FAQ answer rewrites, CTA Text Summarizer de-duplication) are all applied; the one `minor` the review said needed no change (image placement) correctly went untouched.

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **Lines 90-102, H2 4's evidence breakdown, now the strongest section in the post.** The 32 / 3 RCTs / 5 quasi-experimental / 24 observational split, the authors' own "moderate to low certainty" and publication-bias flag, the new anatomy-scope caveat at line 94, and the explicit refusal at line 99 ("Nobody can honestly hand you a percentage improvement, and anyone who does is inventing it"). `research/serp.md` §Angle opportunities named this as the ranking differentiator because no page-1 competitor cites the review's own caveats, and the section now delivers three of them with every number traceable. Do not cut a word of this on any future pass.
- **Line 136, the scope guard on the ADHD study.** The draft cites PMC6406620, then writes "That study says nothing about Pomodoro specifically. What it does say is that hunting for the one technique that fixes everything is the wrong hunt." That is exactly the guard `facts.md` §Statistics and outline H2 6 §scope constraint demanded, delivered without hedging the sentence into mush, and it survived a full revision pass unchanged. Do not delete it, soften it, or move it.
- **Lines 112-124, the three-failure-mode structure in H2 5.** Each mode is a bolded lead-in, a verbatim Reddit quote attributed by subreddit (never by username), and a specific adaptation, closing on the "Three swaps" bullet list at 120-122 and the platform-split observation at 124. It is the section nothing on page 1 covers, it is the reason this post exists per the outline, and the new question at line 108 now opens it cleanly. The quote-attribution discipline in particular is exactly right; change nothing here.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`; no writer pass is dispatched. The three optional `minor` items in §7 (issues 2, 3 and 4) are editor-discretion polish, not writer instructions, and none of them blocks Stage 3c.

## 10. Reviewer notes (free-form)

- **The revision pass was surgical.** Diffing draft-v1 against draft-v2 shows changes on exactly 13 lines, every one of them traceable to a numbered review-v1 instruction, plus one unrequested deletion: the clause "which is exactly why it spread so fast" was cut from line 27. That deletion is an improvement and I would not put it back. It was an unsourced causal claim about the technique's adoption that nothing in `facts.md` supports, and cutting it is what funded H2 4's new paragraph without moving the roll-up.

- **The one thing the editor should action is issue 2, and it is a `facts.md` edit, not a draft edit.** The anatomy-scope caveat is now one of the post's three differentiating claims, and its only home on disk is `research/serp.md`. Once this draft folder is archived, a future run refreshing this post will find the claim in the published body with no facts.md row behind it. Two minutes now saves a re-verification later.

- **Intro paragraph count is deliberately 5, not 4, and that is correct.** `blog-craft.md` §Intro structure caps the intro at four paragraphs; `custom-instructions.md` §Content policy requires the affiliate disclosure as the last paragraph before the first `##` whenever a tagged Amazon link ships, and `outline.md` §P5 records it as a standing line outside the four. The editor should not read the §2 pass as a miss.

- **Two internal-link anchors carry no keyword signal for their targets**, and both were locked by the outline rather than chosen by the writer: "giving a task a fixed slot on the calendar" → `/what-is-timeboxing` (line 19) and "your phone will eat the break" → `/how-to-stop-doomscrolling` (line 80). `blog-craft.md` §Internal linking wants anchor text near-exact-match to the target post's keyword, slightly varied. Both read beautifully in context, which is presumably why the outline chose them. Raised again for the editor's judgment at outline level across future posts, not as a draft issue; the other two anchors ("plan the week first", "time blocking") are on the money.

- **Line 124 is still the sentence most likely to age badly**, and the writer is still handling it correctly. "On X, across 45 posts and their replies about this technique, I found not one genuine complaint" is a reported observation with its sample size stated, not a claim that no critics exist on X, which is exactly the framing `outline.md` §Open questions asked for. If a future run re-pulls X and finds criticism, this is the paragraph to update, and the stated sample size is what makes that update honest rather than embarrassing.

- **"Best-reviewed" was inherited from the outline, not invented by the writer.** `outline.md` H3 7.3 says "Best-reviewed of the five" and `facts.md` §Timer products offers "the best-reviewed of the bunch" as sanctioned phrasing, both contradicting the ratings table in the same file (Time Timer 4.5 vs Rotating Timer 4.6). The draft is now correct, but the outline and facts.md still carry the wrong phrasing. Worth correcting both files so a future run does not re-introduce the error from its own sources.

- **Character discipline held under revision, which is the failure mode this check exists for.** Zero em-dashes and zero en-dashes across 2,687 words after a pass that rewrote two FAQ answers, inserted four new paragraphs and touched five spellings. Substituted punctuation usually degrades on the second pass; here it did not.
