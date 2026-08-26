# Review: bullet-journal-for-beginners draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md`, `blog-ops/drafts/bullet-journal-for-beginners/draft-v1.md` (diffed), `blog-ops/drafts/bullet-journal-for-beginners/review-v1.md`, `blog-ops/drafts/bullet-journal-for-beginners/outline.md`, `blog-ops/drafts/bullet-journal-for-beginners/facts.md`, `blog-ops/drafts/bullet-journal-for-beginners/brief.md`, `blog-ops/drafts/bullet-journal-for-beginners/research/reddit.md`, `blog-ops/drafts/bullet-journal-for-beginners/research/_raw/reddit-10-basicbujo.json`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md` (word count: 2,851 body prose excluding FAQ on this review's measurement basis, 2,874 on the editor's; outline roll-up target: 2,750)
- Outline: `blog-ops/drafts/bullet-journal-for-beginners/outline.md` (status: `approved`)
- Author voice: `olga` (from `brief.md` §Author voice)

## Verdict

`approve`

Reasoning (1–3 sentences): All nine iteration-1 items were applied, and the one that could have broken the post did not: the two personal beats at lines 56 and 100 are both failure stories, they draw only on `voice.md` §Personal-anecdote bank and `brief.md`'s named secondary anecdote, and neither invents bullet-journal experience or inflates Olga's authority. The revision is surgical, the diff against draft-v1 touches exactly the thirteen instructed spots and nothing else, so every strength named in `review-v1.md` §8 survives verbatim, including H2 7's refusal to walk its criticism back and the scope labelling at line 189. Three `minor` issues remain, all cosmetic one-line edits an editor can apply by hand in under a minute; none is worth a third writer pass, and none blocks `approve` under the Step 4 gate (0 critical + 0 major, every § passing).

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not triggered, verdict is `approve`.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Pass | Upgraded from Partial at iteration 1. `voice.md` §Tone's "lightly self-deprecating" and "a friend who has been through the struggle" now land at line 56 ("I put off building my own blog for months because HTML and CSS sounded like something you needed a qualification for. The first page took one evening. Face-palm city.", 33 words, inside the 35-word cap I set) and at line 100 ("Every planning setup I have ever abandoned was one that needed a ruler."). Both are admissions of failure, not competence claims, which is exactly the register `review-v1.md` §10 warned had to hold. "Face-palm city." is the literal signature phrase `voice.md` §Tone cites from a published post. The permission-giving register from v1 is untouched (lines 76, 100, 196). |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Authorial first person is now 6 touches (17, 56, 78, 100, 186, 198) plus the two new reader-directed questions. The 1,094-word first-person gap that drove `review-v1.md` major-2 is broken at line 100, inside H2 4. Lines 120 to 158 (H2 5 and H2 6, ~500 words) still carry no authorial "I", which is deliberate: I capped the additions at two and told the writer not to add first person to H2 7. Grep for `one could\|one should\|users are\|stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | Pass | Grep for `was (scanned\|checked\|monitored\|built\|designed\|created)`: 0 hits. The two added beats are both active ("I put off", "I have ever abandoned"). |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Population stddev of sentence length, recomputed on v2: intro 9.4, H2 1 12.8, H2 2 11.4, H2 3 15.3, H2 4 9.9, H2 5 19.7, H2 6 19.6, H2 7 9.8, H2 8 9.5, CTA 9.3, FAQ 8.6. All far above the <4 fail threshold. H2 3 rose from 11.0 to 15.3 and H2 2 held, because both additions are short punchy sentences dropped into longer explanatory runs. H2 5's 19.7 is inflated by the markdown table parsing as one long unit, not a real signal. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | All 23 base-list phrases re-grepped individually against draft-v2. `voice.md` §Additional forbidden phrases declares "None beyond the generic list". |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | 0 hits, plus 0 for `&mdash;` and `&#8212;`. Confirmed independently, matching the editor's mechanical re-run. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | 0 en-dashes in the file. |
| Intro jargon check (§Insider-jargon translation + `audience.md` §Niche jargon translation) | Pass | Intro unchanged from v1 (lines 15 to 21, byte-identical in the diff). None of `audience.md`'s six insider terms appear anywhere. The "spread" call was made and documented at iteration 1 and is not re-litigated. |
| Intro-hook over-anchoring | N/A | No time-bound event hook. Check skipped per §1.9. |
| Product code-literal grep against the body (`modules.product` on) | Pass | No backticked internal code constants from `product.md` in the body. The only backticks remain the five rapid-logging symbols in the table at lines 128 to 134, which are reader-facing notation. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

**Judgement on the two personal beats, since this was the revision's highest-risk edit.** Both pass, and they pass for different reasons.

- **Line 56 is rueful and small.** Four sentences, 33 words, and the shape is confession then punchline: the delay is the subject ("months"), the correction is one clause ("The first page took one evening"), and the beat closes on self-mockery rather than on a lesson. It also earns its position, because the paragraph above it ends "the ledge is real" and this one opens "I recognize that ledge", so the anecdote is offered as an instance of the reader's own problem, not as a credential. It draws on `voice.md` §Personal-anecdote bank row 2 ("Being intimidated building her first blog with zero HTML/CSS knowledge"), which `brief.md` §Founder anecdote names as the sanctioned secondary. Zero bullet-journal-specific experience is invented anywhere in the post: the draft still never claims Olga keeps a bullet journal, which is the honest position. The one nit is two biographical specifics the profile does not record, logged as §7 minor-1.
- **Line 100 cashes out line 17 without claiming mastery.** "Every planning setup I have ever abandoned was one that needed a ruler" is a record of abandonments. The sentence is placed between "No ruler-perfect boxes." and "If a line comes out crooked, the appointment still happens.", so the personal note arrives as the middle beat of an escalation the section had already started, and the pun on "ruler" is doing structural work rather than decorating. It says "planning setup", not "bullet journal", so the anecdote-bank constraint holds.
- **Continuity check on the insertion point.** Line 58 still opens "Which makes the diagnosis fairly simple.", a fragment connector that in draft-v1 followed "the ledge is real" directly. With line 56 intervening it now points back at the accumulated argument plus the anecdote, and the diagnosis that follows ("You are not failing at a difficult system. You are looking at a hobby that grew on top of a simple one") is precisely what the anecdote illustrates. Checked deliberately, and it reads better than v1, not worse.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | Pass | Byte-identical to draft-v1 (the diff shows no frontmatter change), which was checked against `adapters/publish/frontmatter/wordpress.md` at iteration 1: `title` (quoted, 55 chars), `date: 2026-08-26`, `excerpt` (146 chars), `tags` (4, all live WP terms per `blog.md` §Tag taxonomy), `authors: [Olga Pak]`, `draft: true`. No `cover`/`heroImage` field, correct for this adapter. FAQPage JSON-LD not required at the adapter level for `wordpress-rest`, sub-check skipped per §2.1. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `Bullet Journal for Beginners: You Don't Need Art Skills`, character-for-character. Unchanged. |
| Slug / meta description match outline | Pass | Slug is the directory name. `excerpt` matches outline §Final meta description verbatim. Unchanged. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | 8 body H2s at lines 23, 42, 60, 80, 120, 140, 160, 178 in outline order, plus the CTA H2 at 194 and `## FAQ` at 200. The 4 H3 sub-steps (88, 96, 104, 110) match outline H3 4.1 to 4.4. No heading text changed; only line numbers shifted by the four insertions. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | Unchanged: 4 paragraphs (15, 17, 19, 21) of 2 / 1 / 2 / 1 sentences, 166 words, exactly 1 intro internal link (`/how-to-plan-your-week`), inside the ≤2 ceiling. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | All 8 body H2s plus the CTA carry a concrete number or named example and strong burstiness; H2 3 and H2 8 now also carry a standalone question. See §6. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 4 `###` items at 202, 206, 210, 214, matching the outline's four People Also Ask questions verbatim and in order. The 57-word trim removed sentences only, no question and no whole answer. FAQ is still the last block, nothing follows line 216. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` emits no JSON-LD at the adapter level (`adapters/publish/frontmatter/wordpress.md` §FAQ). |
| Outro / CTA paragraph present | Pass | `## Start it badly, tonight` at 194, 116 words, sitting immediately before `## FAQ`. Untouched by the revision. Action anchor `try my free AI tools` links `/ai-tools`, matching `blog.md` §Primary CTA. No feature re-list, no prices. |

Structural deltas vs outline (if any):
- None. Structure is byte-identical to draft-v1's, which matched the approved outline exactly. The four additions (lines 56, 74, 100, 180) all sit inside existing sections and none creates, removes or reorders a heading.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | The one claim that carried a marker in v1 is now a sourced `facts.md` §Statistics row (7 commenters, verified by the editor against `research/_raw/reddit-10-basicbujo.json`), so the draft's "at least five" at line 172 is a conservative statement of a verified seven. I re-counted the raw file independently and confirm it: Fun_Apartment631, NutkinNB, silverpoinsetta, Bearrister18, patch99329, gigiwasabi_jc and FuryVonB all describe keeping appointments in a digital calendar with the notebook doing the rest. All other numbers are unchanged from v1 and were cleared then. Two new numbers arrived with the revision and neither is a factual claim: "fifteen pages used" (line 74) is a rhetorical figure inside a question addressed to the reader, and "months" / "one evening" (line 56) are the author's own biography, which is self-sourcing rather than a facts.md matter. See §7 minor-1 for the one caveat. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. `facts.md` has no §Competitor facts section. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same, module off. |
| Product mentions (count: `2`, `modules.product` on) are each earning their place, none can be deleted without losing meaning | Pass | Both still sit in the CTA at line 198 ("Text Summarizer", "my free AI tools"), untouched by the revision. Deletion test: the sentence collapses without them. Zero body mentions, matching `plan.md`. |
| Internal links (count: `6`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | Pass | Unchanged: 1 in the intro, 5 distributed into the sections their topics belong to (`/best-notebooks-for-note-taking`, `/best-pens-for-note-taking`, `/time-blocking`, `/digital-vs-paper-notes`, `/ai-tools`). |
| Every internal blog link is root-relative `/some-post-slug` (no trailing slash, since `blog.trailing_slash: false`), not `https://olgapak.com/some-post-slug` (absolute = `major`) | Pass | All 6 root-relative, no trailing slash. Zero absolute cross-post links. |
| External links (count: `8` instances, `7` unique URLs) each point to reputable sources; anchor text = literal claim | Pass | Identical URL set to draft-v1, no link added, removed or retargeted: rydercarroll.com, youtube.com/watch?v=fm15cmYU0IM, 4 Reddit comment-thread URLs, scientificamerican.com. Cross-referenced against `outline.md` §External link plan's forbidden set: zero of the 7 top-10 SERP URLs appear. The one v1 anchor defect (an unquoted verbatim borrowing) is fixed at line 174. |
| Target keyword appears 2–8 times in body (actual count: `2`) | Pass | Lines 15 and 44, plus the frontmatter title. Unchanged, at the floor of the band but inside it, both placements natural. |

Quote and attribution audit, iteration 2 (only the four spans the revision touched are re-audited in full; the other seven were cleared at iteration 1 and are byte-identical in the diff):

| Line | Attribution in draft | Source record | Accurate now? |
|---|---|---|---|
| 54 | official Bullet Journal site, "feels like this intimidating organization system" | `facts.md` §Quotes, **DO NOT LINK** row | **Fixed.** Now reads "opens its own beginner guide by conceding that for some people the method 'feels like...'", which matches the source's own "For some people, the Bullet Journal method feels like...". The scope overstatement from v1 is gone, the span is still verbatim, the attribution is still prose-only, and no link to bulletjournal.com was added. |
| 170 | u/ptdaisy333, "What the journal can't do is issue reminders" | `facts.md` §Quotes, r/BasicBulletJournals 1q3k0vv | **Fixed.** "One commenter in the minimalist r/BasicBulletJournals put the first limit plainly." no longer attributes a community-wide posture to a single score-4 comment. Quote, link and the following sentence untouched, as instructed. One cosmetic side effect, see §7 minor-2. |
| 172 | "At least five people in the same thread described the same split" | `facts.md` §Statistics row 4 (verified against `research/_raw/reddit-10-basicbujo.json`) | **Fixed and now sourced.** The "thinking and planning" gloss and the word "identical" are gone. "appointments and reminders living in a digital calendar" is directly supported: NutkinNB cites "Google calendar & notifications", Bearrister18 cites "Google Calendar with reminders for appointments". "At least five" against a verified seven is a conservative claim, which is the right direction to be wrong in. `[VERIFY:]` correctly dropped rather than left in place. |
| 174 | Scientific American | `facts.md` §From a competitor's harvested citation | **Fixed.** Now reads: many people, it writes, "approach computers and tablets with a state of mind less conducive to learning than the one they bring to paper". The verbatim span carries quotation marks, the link sits on the quoted span, the URL is unchanged, and the scoping that `facts.md` §Rejected requires ("about posture rather than superiority", "messier than 'handwriting wins'") is intact. |

X-source scope check: **still clean.** The draft cites zero X material. The 32,227-like `@yungkalez` post carrying `facts.md`'s "about journaling in general, NOT the bullet journal method" scope limit never appears, and the revision did not introduce it.

Unsourced / suspicious claims:
- None. Every numeric and attributed claim traces to `facts.md`, to `research/reddit.md`, to the raw capture, or is first-person authorial experience.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | Yes. The single v1 marker at old line 168 was dropped on the editor's amendment because the claim became a sourced `facts.md` §Statistics row. That is the outcome `review-v1.md` §10 recommended, and it is the correct one: leaving a marker on a verified claim would have sent Stage 3d chasing a closed question. |
| `[EXTERNAL_LINK_NEEDED:]` | `2` | Yes, lines 154 and 216. Both are the two slots `outline.md` §External link plan pre-registered (H2 6's task-offloading claim, the FAQ's ADHD answer), both survived the FAQ trim, and both still carry a `suggested source type:` clause naming a primary/allowlist class. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A, all 6 planned internal links resolve to live slugs. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Count matches, positions match, and the v1 concept collision is resolved. See below. |

`[VERIFY:]` source-clause validation (§4.4): **nothing to validate**, zero markers in the file. No missing `| source:` clause can exist, so the Step 4 forcing condition for §4.4 is not in play.

Featured-image hygiene (§4.2a): **now passes.** The line-46 slot was rewritten from "A split composition contrasting... Left: an elaborate hand-lettered spread... Right: a plain page" to "A hand holds a phone that dominates the frame, its screen scrolling an endless grid of immaculate, heavily decorated bullet journal spreads. On the desk beside it, a plain half-filled notebook lies open with a pen across the page, untouched and ignored." Judged against `outline.md` §Image placement plan's featured concept ("an elaborate, heavily decorated spread beside a plain, obviously-working one"), that is a genuinely different picture: different primary subject (a phone and a hand, not two notebook pages), different composition (one dominant object plus a neglected one, not a side-by-side comparison), and a different proposition (scrolling instead of writing, rather than decorated versus working). The residual overlap is that decorated spreads and a plain notebook appear in both, which is unavoidable in a post about this topic and is not what §4.2a polices. `Type: ai-prompt` kept, filename updated to `scrolling-spreads-notebook-ignored.png`. The other three placeholders are untouched, as instructed. One note for the Stage 4a planner in §10.

Image-placement hygiene (§4.2b): pass. No `[IMAGE:]` is immediately followed by a heading (46 → 48 prose, 84 → 86 prose, 124 → 126 prose, 164 → 166 bullet list).

Table-redundant chart (§4.2c): **checked, no issue, unchanged from iteration 1.** The line-124 slot is `remotion` with a markdown table 4 lines below it, and its description still clears the outline's own bar for keeping it (the symbols "drawn at pen-stroke scale as it actually appears on paper... each with a short handwritten example line beside it"). The line-164 slot is `ai-prompt`, so the check does not apply to it.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`, `TBD`, `AFFILIATE`, `amazon` all return 0 hits.

## 5. Word count

- Draft: `2,851` words (body prose after the closing frontmatter `---` through the end of the CTA, excluding the `## FAQ` block, excluding `[IMAGE:]` and marker text, with link URLs stripped; the editor's independent count on a slightly wider basis is `2,874`)
- Outline target: `2,750` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+3.7%` on this review's basis, `+4.5%` on the editor's
- Band: `within ±10% = pass, no issue`

Per-section, measured on a like-for-like basis against draft-v1 so the revision's cost is visible:

| Section | v1 | v2 | Change | Outline target | v2 delta |
|---|---|---|---|---|---|
| Intro | 166 | 166 | 0 | ~200 | -17% |
| H2 1 What a bullet journal actually is | 276 | 276 | 0 | 280 | -1% |
| H2 2 The real reason beginners never start | 302 | 338 | +36 (personal beat) | 300 | +13% |
| H2 3 What you actually need to start | 222 | 240 | +18 (reader question) | 240 | 0% |
| H2 4 How to set up your bullet journal | 550 | 563 | +13 (personal beat) | 500 | +13% |
| H2 5 Rapid logging | 229 | 229 | 0 | 240 | -5% |
| H2 6 Migration | 290 | 290 | 0 | 280 | +4% |
| H2 7 What a bullet journal is bad at | 329 | 329 | 0 | 300 | +10% |
| H2 8 How to keep it going past week two | 290 | 304 | +14 (reader question) | 300 | +1% |
| CTA Start it badly, tonight | 116 | 116 | 0 | ~110 | +5% |
| **Body prose subtotal (gated)** | **2,770** | **2,851** | **+81** | **2,750** | **+3.7%** |
| FAQ (ungated by §5) | 334 | 277 | **-57** | ~250 | +11% |
| **Grand total** | 3,103 | 3,127 | +24 | plan range 2,600–3,000 | +4.2% over the top |

The gated metric passes cleanly and per-section overages are all inside single figures of their targets except H2 2 and H2 4 at +13%, which is where the two requested beats went and is not separately gated. The v1 FAQ issue is resolved: 334 to 277 is the 57-word trim asked for, landing the FAQ at +11% against ~250 instead of +36%. **The grand total is still about 4% over the top of `plan.md`'s 2,600–3,000 range and I am deliberately not re-logging it.** The overage now sits in body prose that §5 passes at +3.7%, and the only way to recover it would be to cut the two personal beats and two reader questions that iteration 1 required, which would be a worse post for a number `plan.md` records as a range rather than a ceiling.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | All 23 base-list phrases re-grepped individually against v2; `voice.md` adds none. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | 0 hits, plus 0 for `&mdash;` / `&#8212;`. |
| En-dashes (`–`) only in numeric ranges | Pass | 0 en-dashes in the file. |
| First-person throughout | Pass | Upgraded from Partial. 6 authorial touches (17, 56, 78, 100, 186, 198), including the two new beats, and second person is constant throughout. |
| Active voice | Pass | 0 passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | Every body H2 carries a concrete number plus visible burstiness; 5 also carry a bullet list or table; 2 now also carry a standalone question. |
| ≥1 bullet list per ~300 words | **Partial, ruled acceptable at iteration 1, not re-litigated** | 5 bullet lists (33–38, 68–72, 148–150, 166–168, 188–190) plus 1 markdown table across 2,851 words, about one scannable block per 475 words against a ~300 target. The iteration-1 ruling stands: H2 4's four numbered H3 sub-steps do the same scannability job, and forcing bullets into a walk-through would be worse writing. No fix requested. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | Pass, against the cap I set at iteration 1 | Two standalone one-line question paragraphs were requested, capped at two, and delivered: line 74 ("Do you already own a notebook with fifteen pages used and the rest blank? That is the one.") in H2 3, and line 180 ("Do you know the feeling of a notebook that just stops halfway through March?") opening H2 8. Both are in `voice.md` §Lexicon's "Do you ever feel...?" register, both are their own paragraph, and the cap was respected exactly: body questions now number 5 (50, 74, 146, 174, 180), the original three untouched. The literal floor asks for one per major section, which this post does not meet and which I explicitly instructed the writer not to attempt, because a rhetorical question opening all eight sections would read as a tic. Recorded as a Pass on that basis rather than silently. |
| ≥1 concrete number or named example per major section | Pass | Unchanged from v1 and strengthened in two places: H2 3 gains "fifteen pages", H2 8 gains "halfway through March". |
| No em-dash overuse | Pass | Zero to overuse. |
| Visible sentence-length variation in every section | Pass | Section stddevs 9.3 to 19.7, all far above the <4 threshold, and H2 3 improved from 11.0 to 15.3 on the new short question. |

**Judgement on the two new questions, since the invocation asked for it.** Both land, and both do structural work rather than sitting there as voice decoration. Line 74 arrives immediately after the five-item shopping list the top-ranking guides push, so the question functions as the rebuttal to the list ("That is the one.") rather than as a general warm-up. Line 180 opens H2 8 with an image of abandonment in March, which quietly sets up the "Don't wait for January" bullet ten lines later: a notebook that dies halfway through March is a January start. Neither is generic ("Do you struggle with consistency?" would have been), and neither breaks the surrounding paragraph flow.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

**0 critical, 0 major, 3 minor.** All three are one-line edits. Since the verdict is `approve`, §9 is `N/A` and no writer pass is warranted; the fix column below is written so the editor or the humanize pass can apply each by hand, or ship without them.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 2 The real reason beginners never start | 56 | `minor` | Two biographical specifics in the new personal beat are not recorded anywhere in the profile docs: that the delay was "months", and that "The first page took one evening". `voice.md` §Personal-anecdote bank records only "Being intimidated building her first blog with zero HTML/CSS knowledge", and the published-post evidence line it quotes is "I was initially intimidated by the thought of building a blog", with no duration attached. The anecdote is the sanctioned one and the register is right, so this is not a rewrite request: it is a flag that two details about Olga's own history entered the post from the writer rather than from a source, and only Olga can confirm them. | Confirm both details at Gate 2, since they are Olga's own biography and she is the only person who can check them. If either is wrong, the minimal edit is to soften without losing the beat: "I put off building my own blog for far longer than it deserved because HTML and CSS sounded like something you needed a qualification for. The first page took an evening. Face-palm city." Do not delete the beat, and keep "Face-palm city." as the closing sentence either way. |
| H2 7 What a bullet journal is bad at | 170 | `minor` | "r/BasicBulletJournals" now appears twice in two consecutive sentences ("One commenter in the minimalist r/BasicBulletJournals put the first limit plainly." then "wrote u/ptdaisy333 in r/BasicBulletJournals, in a thread asking..."). This is a side effect of iteration 1's issue 4, whose prescribed sentence introduced the subreddit name into a position where the following sentence already carried it, and the writer was told not to touch that following span. The writer was right to flag it rather than improvise. It is worth logging because a reader hears the repetition, but it is cosmetic and the fix is a deletion, not a rewrite. | Delete the two words "in r/BasicBulletJournals" from the second sentence so it reads: `wrote u/ptdaisy333, in a thread asking whether the method is any good for appointments.` The subreddit is already named in the preceding sentence and is carried by the link, so nothing is lost. Change nothing else on the line, and leave the quote, the link and "It's a journal." exactly as they are. |
| FAQ | 216 | `minor` | The ADHD answer no longer names the question it is answering. The trim deleted "Here is what the method does mechanically, which is the honest limit of what I can tell you.", which was the sentence tethering the answer to the heading, so the answer now opens "At the end of each month, migration makes you rewrite every unfinished task by hand..." with no bridge from "Is a bullet journal good for ADHD?". The mechanical-only framing, the no-clinical-claim requirement and the `[EXTERNAL_LINK_NEEDED:]` marker are all intact and correct, and the answer still reaches a real verdict ("which camp you land in is not something an article can predict. Two weeks of doing it is enough of a test to know."). This is my own iteration-1 instruction landing slightly too hard: I asked for the deletion on the grounds that the third sentence carries the disclaimer, which it does, but the deleted sentence was also doing the tethering. | Add one short bridge clause at the front of the answer, well under the 57 words the trim recovered, and add no clinical claim: `The part people usually mean is migration. At the end of each month, it makes you rewrite every unfinished task by hand, so a stale list cannot quietly accumulate:` and continue from "each item is rewritten" unchanged. Do not restore the deleted v1 sentence, do not add "studies show" or any clinical framing, and do not remove the `[EXTERNAL_LINK_NEEDED:]` marker. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The two personal beats are failure stories, which is the only version of this edit that could have worked.** `review-v1.md` §10 warned that a confident "here is how I mastered this" anecdote would do more damage than the absence of voice, and neither beat goes there. Line 56 spends its word budget on the delay rather than the fix, and closes on "Face-palm city." rather than on a lesson. Line 100 ("Every planning setup I have ever abandoned was one that needed a ruler.") is a record of things Olga quit, placed so the "ruler" lands as the pivot between "No ruler-perfect boxes." and "If a line comes out crooked, the appointment still happens." Neither claims bullet-journal experience the post cannot back, and the draft still never asserts that Olga keeps a bullet journal, which is the honest position given the research set. **Keep both verbatim, keep them in these two positions, and do not add a third.**
- **The revision is surgical, and everything iteration 1 told the writer not to touch is untouched.** A diff of v1 against v2 shows changes at exactly the thirteen spots the nine instructions named, and nowhere else. H2 7 still ends on line 176 with the hard concession ("a notebook will lose to a calendar app, and no amount of setup will change that"), the three limits at 166 to 168 are still flat facts with no hedge, line 189's scope labelling of the r/Travelersnotebooks quote ("One person's experience, in a thread about a different format, but it matches a pattern worth avoiding") survives word for word, and every jargon gloss at lines 29, 122, 138 and 142 is intact. That discipline is worth naming because it is rarer than it sounds on a nine-item revise pass. **Do not touch any of these on any later pass.**
- **The quote-scope repairs are precise rather than defensive.** Three of the four fixes could easily have been over-corrected into mush, and none was: line 54 narrows the framing to "for some people" while keeping the punchy "When the creators are the ones talking you down off the ledge, the ledge is real" that follows it; line 170 downgrades a community claim to one commenter without weakening the limit it supports; line 172 replaces an invented gloss with the split the sources actually describe, and reads better for it. Line 174's quotation marks now credit Scientific American for its own sentence while the surrounding scoping still refuses to re-assert handwriting-beats-typing. **Keep all four as they now stand.**

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`. The three `minor` issues in §7 carry hand-applicable fixes for the editor or the humanize pass; none justifies dispatching a writer pass, and iteration 2 is the last revise pass this workflow permits before escalation.

## 10. Reviewer notes (free-form)

- **On the verdict, plainly.** The remaining issues are cosmetic, not substantive. Two of the three exist because of imprecision in my own iteration-1 instructions (the subreddit repetition at line 170 and the FAQ tether at line 216), and the third is a Gate 2 confirmation of Olga's own biography, not a defect the writer can resolve. Requesting a third pass to fix a two-word deletion and a bridge clause would burn the escalation budget on polish. Approve, apply the §7 fixes by hand if the editor wants them, and ship.
- **For the Stage 4a image planner.** The featured slot and the line-46 slot are now distinct in concept, but they still share two props (decorated spreads, a plain notebook). Keep the featured banner paper-only, with no phone in the frame, and keep line 46's decorated spreads reading unmistakably as screen content (a scrolling grid of thumbnails, phone bezel visible). If both prompts are rendered by the same model in the same session, that is where they would drift back together. `outline.md` §Image placement plan now carries the corrected featured description, so the source of the v1 collision is closed.
- **The raw capture supports a stronger sentence than the draft makes, and the draft is right not to make it.** Counting `research/_raw/reddit-10-basicbujo.json` directly, seven of twenty commenters describe the calendar hybrid, and three of those seven (u/NutkinNB, u/Bearrister18, u/patch99329) also copy appointments into the notebook for planning while relying on the calendar for the reminder. That nuance slightly complicates "appointments... living in a digital calendar", but it strengthens rather than weakens the paragraph's actual claim, which is about the split. "At least five" against a verified seven is conservative in the safe direction. Leave the sentence alone.
- **What the FAQ trim cost, for the record.** The tightened mistakes answer at line 212 lost its most vivid clause ("the fastest way to turn a planning system back into a craft project"). That was the requested trade and the answer is now scannable and accurate, but if a later pass finds 8 spare words anywhere, that clause is the best place in the FAQ to spend them.
- **`Type: remotion` on the line-124 symbol key still deserves the image planner's second look at Stage 4a**, unchanged from iteration 1: the description asks for handwriting "at pen-stroke scale as it actually appears on paper", which is closer to what `custom-instructions.md` §Image style calls an `ai-prompt` job than a genuine diagram. The slot itself is justified. The type call belongs to the planner, not the writer, so it is not logged as an issue in either review.
- **Not re-litigated, deliberately, and listed so a third reviewer does not reopen them:** the intro's ostensive use of "spread" before its line-29 gloss; the bullet-list density soft pass; the recapitalised "It's a journal." at line 170; the target keyword sitting at the floor of the 2 to 8 band. All four were examined and cleared at iteration 1 and nothing in the revision changed their basis.
- **Still worth leaning into if there is ever a v2 of this post.** `research/reddit.md` thread 2's finding that long-time users say the practice took years to stick (u/pandafulcolors: "it can take a long time for the practice to stick, and personally took me a few years") remains the strongest unused angle. H2 8 is at budget and the section works, so this is a future-post note, not a request.
