# Review: gifts-for-students draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/gifts-for-students/draft-v2.md`, `blog-ops/drafts/gifts-for-students/draft-v1.md` (diff baseline), `blog-ops/drafts/gifts-for-students/review-v1.md` (iteration-1 issues 1 to 10 and editor addenda 11 to 15), `blog-ops/drafts/gifts-for-students/outline.md`, `blog-ops/drafts/gifts-for-students/facts.md`, `blog-ops/drafts/gifts-for-students/brief.md`, `blog-ops/drafts/gifts-for-students/plan.md`, `blog-ops/drafts/gifts-for-students/checklist.md` (budget-band price evidence, read only), `blog-ops/drafts/gifts-for-students/research/serp.md`, `blog-ops/drafts/gifts-for-students/research/reddit.md`, `standards/writing-standards.md`, `standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `blog-ops/config.yaml`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/gifts-for-students/draft-v2.md` (word count: `2,620` body prose, intro through CTA, quick-pick table included; frontmatter, disclosure line, `[IMAGE:]`/`[VERIFY:]` markers, link URLs and the FAQ excluded; outline target: `2,645`)
- Outline: `blog-ops/drafts/gifts-for-students/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1 to 3 sentences): All 10 iteration-1 issues and all 5 editor addenda landed as written, plus the editor's post-spawn FAQ fix. The v1 to v2 diff touches only those lines, so nothing else changed. Every objective check passes (0 forbidden phrases, 0 em or en dashes, 0 unsourced numbers, 0 structural deltas, word count -0.9%), and I found no new critical, major, or minor defect.

**Iteration counter:** this is revision pass `2` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | yes | Unchanged from v1 and still on-voice: warm first person, short beats mixed with longer explanatory sentences ("Nope!" line 231, "Honest. I like that." line 155, "You know how it goes" line 211, "to automate the mundane" line 240). The new wording reads as Olga, not as patch text: "a gift card is a fair fallback (more on that near the end)" (66), "since pens wander off" (86), "a silent sweep (no ticking), a loud alarm" (211). Jargon is still translated on first use (low latency at 126, NRR at 170, and now "silent sweep" glossed as "no ticking" at 211). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep `one could / one should / users are / stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | yes | Grep `was (scanned\|checked\|monitored\|built)`: 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Sentence-length stddev per section: intro 15.9, H2 1 16.1, H2 2 12.2, H2 3 16.1, H2 4 11.4, H2 5 15.8, H2 6 15.1, H2 7 15.7, CTA 6.9, FAQ 10.6. All above the 4-word floor. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | All 23 base phrases grepped case-insensitive, plus the `delve`, `leverag` and `revolutioniz` stems. voice.md adds none. |
| Em-dash count: `0` (grep U+2014 literal, `&mdash;`, `&#8212;`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | 0 hits. |
| En-dash context: every U+2013 hit is inside a numeric range (digits on both sides) | yes | 0 en dashes (literal, `&ndash;`, `&#8211;`). |

Additional §1 checks:
- Intro jargon (§1.7): 0 hits for the baseline SEO patterns or audience.md's niche list in the intro (lines 14 to 22).
- Product code literals (§1.8): product.md has no backticked code constants, so there is nothing to grep.
- Intro-hook over-anchoring (§1.9): the hook isn't tied to an event or date, so this check was skipped.

Forbidden phrases found (grep output from `standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (wordpress-rest: title, date, excerpt, tags, authors, draft; no cover field; no JSON-LD requirement) | yes | `title` (54 chars), `date: 2026-09-13`, `excerpt` (156 chars, under the 160 cap), 3 tags from the blog.md taxonomy (`students`, `note-taking`, `productivity`), `authors: Olga Pak` (authors.md byline), `draft: true`, no cover or heroImage field. |
| Title in frontmatter matches outline "Final title" exactly | yes | "Best Gifts for Students: 15 Picks They'll Actually Use". |
| Slug / meta description match outline | yes | The slug comes from the directory name (`gifts-for-students`). The excerpt matches the corrected outline Final meta description exactly (checked with `diff`): "...sorted by need with a budget band, plus what to skip." This closes the review-v1 §10 Gate 2 item. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | 7 body H2s, then the CTA H2, then `## FAQ`, in the outline's order with the outline's wording. All 15 H3 pick headings are verbatim and in table order. |
| Intro is 2 to 4 paragraphs, 1 to 3 sentences each (hook / expertise / internal-link cluster / preview) | yes | 4 content paragraphs (lines 14, 16, 18, 20) of 3, 1, 1 and 1 sentences, then the required disclosure (22) as the last paragraph before the first `##`. The target keyword is in the hook (14). There is 1 internal link in the intro (18) and no absolute cross-post link anywhere. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Every body H2 now has a standalone question and at least one list or number. |
| FAQ section has `### Q` items matching outline FAQ set 1:1 | yes | 5 of 5 with the outline's wording. The FAQ is the last block, with nothing after it. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | The wordpress-rest adapter leaves FAQ schema to a WordPress plugin (`adapters/publish/frontmatter/wordpress.md` §FAQ). |
| Outro / CTA paragraph present | yes | `## The One Study Gift That Costs Nothing` (lines 236 to 240) sits right before `## FAQ`. It links `/ai-tools` with the blog.md action anchor "Try my free AI tools" plus "to automate the mundane". No prices. |

Structural deltas vs outline (if any):
- None. The Rocketbook split (100/102) and the Time Timer split (177/179) turn one paragraph into two inside an existing H3. They are paragraph breaks, not structural changes.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Every number traces to facts.md or a verified post:<br>- 251 pages, 12-count, 0.7 mm, 25-pack, 0.5 mm, 60-minute (§Product links / §Statistics)<br>- iPad 10th generation and A16 (§Named examples)<br>- 2018 (Crayon listing title, now also Logitech's support page in §Named examples)<br>- 40 h, 60 h, 4 h on a 10-minute charge (§Statistics)<br>- 14 dB NRR (§Statistics)<br>- one minute to ten days and five seconds (§Statistics)<br>- 314 to 161 minutes and two weeks (§Statistics, Castelo row, which verbatim-confirms the PMC copy)<br>- 20-20-20 (§Quotes)<br>- eight years (authors.md)<br>- seven-day and Day 1 (published detox post)<br>No number was added in v2. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. No SERP competitor is named. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | `modules.competitors: false`. |
| Product mentions (count: `3` in the CTA at line 240: "free AI tools", "Text Summarizer", "Text Simplifier"; plus the expertise mention "my own AI productivity tools" at line 16) are each earning their place, none can be deleted without losing meaning | yes | Unchanged from v1. Own-product mentions appear only in the CTA, and the descriptions match product.md §Features. Grep `\$`: 0 hits in the whole draft. brief.md lists no soon-to-ship features. |
| Internal links (count: `5` contextual + 1 CTA) exist in the intro cluster per `standards/blog-craft.md` | yes | Intro: `/best-notebooks-for-note-taking` (18). Body: `/best-pens-for-note-taking` (86), `/how-to-take-notes-on-ipad` (122), `/how-to-plan-your-week` (204), `/digital-detox-plan` (211). CTA: `/ai-tools` (240). All five post slugs exist in `content/blog/`. The first internal link (18) comes before the first external citation (128). |
| Every internal blog link is root-relative (for this blog `/slug`, no trailing slash since `blog.trailing_slash: false`), not absolute `https://olgapak.com/...` (absolute = `major`) | yes | All 6 are root-relative with no trailing slash, and there are 0 olgapak.com URLs. |
| External links (count: `5` citations + 30 Amazon affiliate links) each point to reputable sources; anchor text = literal claim | yes | The citations are exactly the 5 URLs in the outline's External link plan, with unchanged anchors: apple.com/apple-pencil (128), service.soundcore.com Q20i FAQ (155), thekitchensafe.com FAQ (186), **pmc.ncbi.nlm.nih.gov/articles/PMC11834938** (190), aao.org (231). `academic.oup.com`: 0 hits. The PMC host is `.gov`, which is on the blog-craft §Authoritative-site allowlist.<br>§3.5 check: the forbidden set is the 4 serp.md §Selected results URLs (oprahdaily.com, lessons4littleones.com, thecalmishteacher.com, studentbeans.com), and none of the draft's hosts match.<br>Amazon: 30 links, all 30 carrying `?tag=op01e-20`, 0 untagged, 0 `[AFFILIATE-LINK-PENDING:]`. Each product's two links use the same ASIN, and every ASIN matches facts.md §Product links.<br>Reddit: 0 links and 0 usernames. The disclosure appears once, verbatim, at line 22. |
| Target keyword appears 2 to 8 times in body (actual count: `5`) | yes | "gifts for students" appears at line 14 (prose), in the H2s at 24, 68 and 116, and in the FAQ H3 at 248. |

Unsourced / suspicious claims:
- None. I re-traced every line v2 changed:
  - The Rocketbook cloud-app wording (102) and the erasable-pen limit (106) match facts.md §Named examples, Rocketbook row (✅ verified).
  - "silent sweep (no ticking), a loud alarm" (211) matches facts.md §Named examples, Equity row (✅ verified from the listing bullets).
  - "only need to know their iPad is from 2018 or later, not the exact model" (138) matches facts.md §Named examples, Logitech row (✅ verified: "2018 models and later", no exceptions).
  - The PMC link (190) matches facts.md §Statistics, Castelo row.
- I also spot-checked the Reddit thread descriptions against research/reddit.md:
  - Line 58, "a relative shopping for an incoming student": the original post is about a cousin's son "going off to college ... in the fall".
  - Line 110, calculators: reddit.md names mechanical pencils and calculators as the most-repeated recommendation.
  - Line 234, "almost unanimously": reddit.md says "near-unanimous".

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `2` | Yes, both have a non-trivial ` \| source:` clause.<br>- **Line 102 (Rocketbook):** replaced verbatim per issue 3. Its source clause names facts.md §Named examples, Rocketbook row, and that row exists and is ✅ verified.<br>- **Line 223 (BenQ):** unchanged from v1. facts.md now also carries a ✅ manufacturer row confirming it (clamp fits flat monitors 1 to 3 cm thick).<br>Both are ready for Stage 3d to resolve. They mark planned confirmations, not defects. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `4` vs outline `4` slots | Yes. Lines 56, 72, 120 and 147 each sit after their H2 and one paragraph.<br>- §4.2a: none is the featured concept or a `featured.*` file.<br>- §4.2b: none is immediately followed by a heading.<br>- §4.2c: the one `remotion` slot (56) is a decision diagram, not a chart that repeats the table, so this check doesn't apply.<br>All four use the canonical `Type:` / `Suggested filename:` shape. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`, `[AFFILIATE`: 0 hits.

## 5. Word count

- Draft: `2,620` words (intro through CTA, FAQ excluded, quick-pick table included; frontmatter, disclosure, `[IMAGE:]`/`[VERIFY:]` markers and link URLs excluded). Other bases for reference: prose without the table is 2,451 (-7.3%). The writer's figure is ~2,708 (+2.4%). Raw `wc -w` of the same span is 2,941, but that counts every URL and marker, so it isn't the gated basis. FAQ: 385 words, which isn't gated.
- Outline target: `2,645` words
- Delta: `-0.9%` (primary basis).
- Band: `within ±10% = pass, no issue`

Basis note: the same script gives draft-v1 2,548 words, so v2 adds about 72 words of fixes, mostly issues 1, 4 and 14. Review-v1's 2,636 used a slightly different tokenization. Every prose basis for v2 is inside ±10%.

Per section vs outline (H2 heading text excluded): intro 139 vs ~200, H2 1 261 vs 180 (inflated by the table), H2 2 149 vs 180, H2 3 555 vs 560, H2 4 254 vs 290, H2 5 603 vs 560, H2 6 292 vs 325, H2 7 232 vs 250, CTA 72 vs ~100. No section is padded or thin enough to log.

## 6. Humanization floor (per `standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | 0 hits. |
| Zero em-dashes (U+2014, grep returns nothing) | yes | 0. |
| En-dashes (U+2013) only in numeric ranges | yes | 0 en dashes. |
| First-person throughout | yes | See §1. |
| Active voice | yes | See §1. |
| ≥1 rhythm marker in every H2 | yes | Every H2 has a bullet list, a standalone question, a number, or several of these. |
| ≥1 bullet list per ~300 words | yes | 17 bullet lists (the H2 2 decision list, 15 pick lists and the skip list) across ~2,620 words. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | yes | **Fixed since v1.** Standalone questions by section: H2 1 (48), H2 2 (60), **H2 3 (100, "Torn between paper and digital?", now its own paragraph per issue 2)**, H2 4 (136), H2 5 (151, 188), H2 6 (198), H2 7 (227). The CTA isn't a major section. |
| ≥1 concrete number or named example per major section | yes | Every major section names products along with listing or manufacturer figures. |
| No em-dash overuse | yes | 0. |
| Visible sentence-length variation in every section | yes | See the §1 stddevs. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| N/A | N/A | N/A | None, draft is clean. | N/A |

None, draft is clean.

## 8. What the draft does well

- **The Rocketbook pick is now the most honest product entry in the post (lines 100 to 106).** It names the exact pens that erase (Pilot FriXion or BIC Illusion) and calls back to the Jetstream from two picks earlier ("so notes in a regular ballpoint like the Jetstream won't come off"). A giver who might have bought both now gets warned in the same section. Keep the callback, and don't shorten the Skip it if line to a bare "erasable pens only".
- **The kSafe evidence paragraph (lines 188 to 190) still frames the study honestly.** It admits "Nobody has studied lock boxes that I know of" and says "That study tested an app, not a box", and the citation now points to the PMC copy that facts.md verbatim-confirms. Keep it word for word.
- **The budget bands now agree everywhere they appear.** All 15 table rows match their pick's **Budget:** bullet. The FAQ "cheap gifts" answer (250) lists exactly the five Small budget picks, with each problem in the same order as its pick. Only the two Splurge picks (Sony at 166, BenQ at 222) carry that label, which fits line 28's "graduation or another big milestone" definition. Any future band change has to touch all three places together, as addendum 11 did.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A

## 10. Reviewer notes (free-form)

**Iteration-1 issue resolution (draft-v1 line numbers mapped to draft-v2 lines):**

| # | Issue | draft-v2 line | Status |
|---|---|---|---|
| 1 | Rocketbook Skip it if: erasable-pen limit | 106 | Resolved, verbatim |
| 2 | Standalone question in H2 3 | 100 (question), 102 (paragraph opens "The [Rocketbook Core]...") | Resolved, verbatim |
| 3 | Rocketbook cloud-app wording + replacement `[VERIFY:]` | 102 | Resolved, sentence and marker both verbatim |
| 4 | "You can't tell" bullet adds gift-card fallback | 66 | Resolved, verbatim; now agrees with the diagram (56) and line 234 |
| 5 | Leuchtturm Skip it if: subreddit-only attribution | 82 | Resolved, verbatim |
| 6 | Jetstream non sequitur | 86 | Resolved, verbatim |
| 7 | Crayon "model guesswork" overstatement | 138 | Resolved, verbatim |
| 8 | "study session" repeat in the Focus intro | 145 | Resolved, verbatim |
| 9 | Time Timer paragraph split | 177 / 179 | Resolved |
| 10 | "Gear for the job they're training for" | 233 | Resolved, verbatim; stethoscope quote untouched |
| 11 | Three budget bands + FAQ edits | Apple Pencil 37, 131, 262; Mildliner 34, 96, 250; Time Timer 42, 182, 250 | Resolved in all three places each; FAQ iPad answer no longer says "splurge" (262); all other bands unchanged (verified against the v1 diff) |
| 12 | Excerpt = corrected meta | 4 | Resolved, exact match to outline.md |
| 13 | Castelo citation to PMC | 190 | Resolved; anchor and surrounding sentences unchanged |
| 14 | Equity "silent sweep (no ticking), a loud alarm" | 211 | Resolved, verbatim |
| 15 | Crayon wording confirmed, no Logitech link | 138, 262 | Resolved; 0 logi.com links, citation count still 5 |
| Post-spawn | FAQ "losing track of time mid-study" | 250 | Present. It keeps the item order (pens, time, math, noise, bed) aligned with the listed picks, and it fixes the two-phone-problems overlap addendum 11 would have created |

**Collateral-damage check:** `diff draft-v1.md draft-v2.md` shows 20 hunks, and every one maps to a row above. No heading, marker (except the issue 3 swap), link target (except issue 13), ASIN or FAQ question changed. The new wording adds no em or en dash, no `$`, and no dorm, roommate or campus language.

**Standing constraints, all verified by grep:**
- 30/30 Amazon links tagged, and the disclosure appears verbatim once (line 22).
- 0 dollar figures.
- "dorm" appears only inside the approved triad (145), and "roommate" and "on campus" appear 0 times.
- "college" appears only in the outline-locked FAQ question and its answer (244, 246).
- Exactly the 5 planned citation URLs, and 0 Reddit links or usernames.

**Gate 2 human checks (not draft defects; I have no fetch access and haven't verified any price):**
- *US availability and buy-box sellers:* this run's Amazon session delivered to a UK address, as the editor noted.
- *BenQ ScreenBar band:* checklist.md records no verified US price for the ScreenBar, so its Splurge band has no price evidence on disk. From memory, and I'm not certain, it lists at roughly $100 to $110, right at the "over ~$100" line. If it's under $100 today, it moves to Mid-range in the table (46), the pick bullet (222), and nowhere else (the FAQ doesn't mention it).
- *Boundary bands:* the checklist records the Loop Quiet 2 and the Time Timer MOD at $24.95 each against an "under ~$25" rule. The Apple Pencil (USB-C) $79 comes from general knowledge, but it's safely Mid-range. The Loop and Time Timer bands are correct as read, but a small price change flips them. The low-risk reading is that "Small budget" stays honest within a dollar or two, so no action is needed unless the human sees a clearly higher price.
- *Stage 3d:* both `[VERIFY:]` markers (102, 223) now have ✅ facts.md rows behind them, so Stage 3d can resolve them without new research.

**Watch items, not defects:**
- "wander off" now appears twice, at 86 (from issue 6) and 232. It reads as a deliberate callback. Don't add a third.
- "surprise" appears 4 times (60, 136, 194, 262) and "actually" 6 times in the body and FAQ, both unchanged from v1. Don't add more.
- Line 28 calls mid-range "a proper birthday present", and the Mildliner 25-pack now sits in that band. It's slightly generous for highlighters, but the band definition is a feel, not a price, and the band itself is calibrated correctly.
- The target keyword appears in running prose only once (14), with the other four hits in headings. That's within band, and I don't recommend forcing it.
