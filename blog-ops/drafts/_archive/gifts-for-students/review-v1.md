# Review: gifts-for-students draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/gifts-for-students/draft-v1.md`, `blog-ops/drafts/gifts-for-students/outline.md`, `blog-ops/drafts/gifts-for-students/facts.md`, `blog-ops/drafts/gifts-for-students/brief.md`, `blog-ops/drafts/gifts-for-students/research/serp.md`, `blog-ops/drafts/gifts-for-students/research/reddit.md`, `standards/writing-standards.md`, `standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/gifts-for-students/draft-v1.md` (word count: `2,636` body prose, intro through CTA, quick-pick table included, disclosure line, `[IMAGE:]`/`[VERIFY:]` markers and link URLs excluded; outline target: `2,645`)
- Outline: `blog-ops/drafts/gifts-for-students/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1 to 3 sentences): Zero critical issues and no structural drift, but two `major` issues block approve: the Rocketbook pick leaves out the erasable-pen limit that facts.md explicitly flags for it (right after the post recommends a regular ballpoint multipack), and the handwriting H2 has no standalone-question paragraph, which fails the §6 humanization floor. Every fix is line-level, so draft-v2 should be a light pass.

**Iteration counter:** this is revision pass `1` of `2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | yes | Warm, first person, practical. Lexicon beats land naturally: "Nope!" (line 227), "Honest. I like that." (line 153), "You know how it goes" (line 207), "to automate the mundane" (line 236). Expertise line (16) draws on the anecdote bank (Master's after aviation PR, building AI tools). Jargon translated on first use ("low latency (the line shows up right as they write)", line 124; "NRR (noise reduction rating, ...)", line 168). No testing claims beyond "I'd buy", consistent with facts.md §Rejected. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep for `one could / one should / users are / stakeholders`: 0 hits. |
| Active voice (no "X was scanned" shapes) | yes | Grep for `was (scanned\|checked\|monitored\|built)`: 0 hits. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Sentence-length stddev per section: intro 15.8, H2 1 18.0, H2 2 13.4, H2 3 11.9, H2 4 11.2, H2 5 15.2, H2 6 14.8, H2 7 16.3, CTA 7.7, FAQ 10.5. All well above the 4-word floor. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | Base list (23 phrases, plus `delve` and `leverag` stems) grepped case-insensitive; voice.md adds none. |
| Em-dash count: `0` (grep U+2014 literal, `&mdash;`, `&#8212;`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | 0 hits. |
| En-dash context: every U+2013 hit is inside a numeric range (digits on both sides) | yes | 0 en-dashes in the draft. |

Additional §1 checks:
- Intro jargon (§1.7): 0 hits for the baseline SEO patterns or audience.md's niche list in the intro (lines 14 to 22).
- Product code literals (§1.8): product.md contains no backticked code constants; nothing to grep.
- Intro-hook over-anchoring (§1.9): the hook is not time-bound (no event peg); skipped.

Forbidden phrases found (grep output from `standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (wordpress-rest: title, date, excerpt, tags, authors, draft; no cover field; no JSON-LD requirement) | yes | `title`, `date: 2026-09-13`, `excerpt` (140 chars), 3 tags all in blog.md taxonomy (`students`, `note-taking`, `productivity`), `authors: Olga Pak` (matches authors.md byline), `draft: true`, no cover/heroImage field. |
| Title in frontmatter matches outline "Final title" exactly | yes | "Best Gifts for Students: 15 Picks They'll Actually Use" (54 chars). |
| Slug / meta description match outline | yes | Slug comes from the draft directory (`gifts-for-students`), matching outline. Excerpt matches outline "Final meta description" verbatim. See §10 on the meta's "grouped by budget" wording (outline-level, not a writer issue). |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | 7 body H2s + CTA H2 + `## FAQ`, same order and wording as outline. All 15 H3 pick headings match the outline verbatim, same order as the quick-pick table. |
| Intro is 2 to 4 paragraphs, 1 to 3 sentences each (hook / expertise / internal-link cluster / preview) | yes | 4 content paragraphs (lines 14, 16, 18, 20) of 3 / 1 / 1 / 1 sentences, then the required disclosure (line 22) as the last paragraph before the first `##`, as the outline specifies. Target keyword in the hook (line 14). 1 intro internal link (line 18). No absolute cross-post links anywhere. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Every H2 has at least one bullet list or number. (The stricter standalone-question floor fails for H2 3; see §6.) |
| FAQ section has `### Q` items matching outline FAQ set 1:1 | yes | 5 of 5, question wording identical to outline. FAQ is the last block; nothing follows it. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest adapter leaves FAQ schema to a WP plugin (`adapters/publish/frontmatter/wordpress.md` §FAQ). Not flagged, per editor instruction. |
| Outro / CTA paragraph present | yes | `## The One Study Gift That Costs Nothing` (lines 232 to 236) sits immediately before `## FAQ`, links `/ai-tools` with the blog.md action anchor "Try my free AI tools" plus the hook "to automate the mundane". 2 short paragraphs, no prices. |

Structural deltas vs outline (if any):
- None. H2/H3 set, order, FAQ set, image slots, and link plan all match. The only deviations are the section-length ones the writer declared (Paper or Screen 135 words vs ~180; CTA 72 vs ~100), which are length, not structure, and are the right call (see §10).

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Traced: 251 numbered pages, 12-count, 0.7 mm, 25-pack, 0.5 mm, 60-minute (facts.md §Product links / §Statistics); iPad 10th generation, A16 (§Named examples); 2018 (Crayon listing title); 40 h / 60 h / 4 h on 10 min (§Statistics, Q20i FAQ); 14 dB NRR (§Statistics); one minute to ten days, five seconds (§Statistics, kSafe FAQ); 314 to 161 minutes, two weeks (§Statistics, Castelo et al.); 20-20-20 (§Quotes, AAO); "more than eight years" (authors.md 8+ years); "seven-day" plan and "Day 1" (confirmed in `content/blog/digital-detox-plan.md` lines 2 and 62). "By week three" (line 14) is a rhetorical hook, not a data claim. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. No SERP competitor is named. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | `modules.competitors: false`. |
| Product mentions (count: `3`, all in the CTA paragraph at line 236: "free AI tools", "Text Summarizer", "Text Simplifier"; plus the expertise mention "my own AI productivity tools" at line 16) are each earning their place, none can be deleted without losing meaning | yes | Own-product mentions confined to the CTA as brief.md requires. Descriptions match product.md §Features. No prices, caps, or tiers (grep `\$`: 0 hits in the whole draft). No soon-to-ship features listed in brief.md, so §3.10 has nothing to check. |
| Internal links (count: `5` contextual + 1 CTA) exist in the intro cluster per `standards/blog-craft.md` | yes | Intro: `/best-notebooks-for-note-taking` (18). Body: `/best-pens-for-note-taking` (86), `/how-to-take-notes-on-ipad` (120), `/how-to-plan-your-week` (200), `/digital-detox-plan` (207). CTA: `/ai-tools` (236). All placements match the outline. All five post slugs exist in `content/blog/`. The cross-post claims hold: the Jetstream RT is "best overall" in `best-pens-for-note-taking.md` (line 71), and the detox plan's Day 1 is "The phone sleeps outside the bedroom" (line 62). First internal link (18) precedes the first external citation (126). |
| Every internal blog link is root-relative (for this blog `/slug`, no trailing slash since `blog.trailing_slash: false`), not absolute `https://olgapak.com/...` (absolute = `major`) | yes | All 6 are root-relative with no trailing slash. 0 absolute olgapak.com links. |
| External links (count: `5` citations + 30 Amazon affiliate links) each point to reputable sources; anchor text = literal claim | yes | Citations exactly match outline §External link plan, anchors verbatim: apple.com/apple-pencil (126), service.soundcore.com Q20i FAQ (153), thekitchensafe.com FAQ (182), academic.oup.com PNAS Nexus (186), aao.org (227). §3.5 forbidden-link check: serp.md §Selected results (oprahdaily.com, lessons4littleones.com, thecalmishteacher.com, studentbeans.com) vs draft hosts: 0 matches, so no flag. Amazon: 30 links, 30 carry `?tag=op01e-20`, 0 untagged, 0 `[AFFILIATE-LINK-PENDING:]`. Reddit: 0 links, 0 usernames. Affiliate disclosure present once, verbatim, last intro paragraph (line 22). |
| Target keyword appears 2 to 8 times in body (actual count: `5`) | yes | "gifts for students": line 14 (prose), H2s at lines 24, 68, 114, FAQ H3 at 244. Only 1 of the 5 is in running prose; acceptable, see §10. |

Unsourced / suspicious claims:
- None unsourced. Accuracy concerns on sourced material (all logged in §7):
- `draft-v1.md:100`, "save each page to their phone", issue: facts.md §Named examples says the app saves scans "to your cloud destination of choice"; the phone scans, it isn't where notes are saved.
- `draft-v1.md:100` to `104`, Rocketbook pick, issue: omits facts.md's flagged "Honest limit for the pick" (erases only with Pilot FriXion or BIC Illusion erasable gel pens).
- `draft-v1.md:136`, "you're covered without any model guesswork", issue: the writer's inference goes beyond the listing title it cites (the giver still needs to know the iPad is 2018 or later).
- `draft-v1.md:37 to 38, 129, 139`, budget bands, issue: no price data in facts.md or plan.md backs any band assignment (editor item, not writer).

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `2` | Yes. Line 100 (Rocketbook mechanics) and line 219 (BenQ monitor-not-laptop), both matching the outline's planned markers. Both have a non-trivial ` \| source:` clause. Line 100's source file `content/blog/best-notebooks-for-note-taking.md` exists and its Rocketbook entry (line 138) does say FriXion / scan / damp cloth. That clause's "not in facts.md" is now stale, because facts.md §Named examples carries a verified Rocketbook row (fixed in §7). Both claims are confirmed in facts.md and slated for Stage 3d resolution, so their presence is not a defect. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[INTERNAL_LINK_NEEDED:]` | `0` | N/A |
| `[IMAGE:]` | `4` vs outline `4` slots | Yes. Each sits after its H2 plus one paragraph, as planned (lines 56, 72, 118, 145). None is the featured concept or `featured.*` (§4.2a pass). None is immediately followed by a heading (§4.2b pass). The one `remotion` slot (line 56) is 10 lines below the quick-pick table, but it is a decision diagram, not a chart restating table data, so §4.2c does not apply. All use the canonical `Type:` / `Suggested filename:` shape. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`, `[AFFILIATE`: 0 hits.

## 5. Word count

- Draft: `2,636` words (intro through CTA, FAQ excluded, quick-pick table included; disclosure, `[IMAGE:]`/`[VERIFY:]` markers and link URLs excluded). Other bases, for reference: raw `wc -w` of the same span 2,850 (counts URLs and markers); prose without the table 2,402; writer's figure 2,525. FAQ: 387 words (not gated; outline estimated ~150).
- Outline target: `2,645` words
- Delta: `-0.3%` (primary basis). Every basis falls inside ±10% (range -9.2% to +7.8%).
- Band: `within ±10% = pass, no issue`

Per-section vs outline: intro 139 vs ~200, H2 1 326 vs 180 (table-inflated), H2 2 135 vs 180, H2 3 514 vs 560, H2 4 255 vs 290, H2 5 608 vs 560, H2 6 287 vs 325, H2 7 229 vs 250, CTA 72 vs ~100. No section is padded or thin enough to log.

## 6. Humanization floor (per `standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | 0 hits. |
| Zero em-dashes (U+2014, grep returns nothing) | yes | 0. |
| En-dashes (U+2013) only in numeric ranges | yes | 0 en-dashes. |
| First-person throughout | yes | See §1. |
| Active voice | yes | See §1. |
| ≥1 rhythm marker in every H2 | yes | Every H2 has a bullet list, a number, or both. |
| ≥1 bullet list per ~300 words | yes | 17 bullet lists (H2 2 decision list, 15 pick lists, the skip list) across ~2,640 words. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | **no** | Present in H2 1 (48), H2 2 (60), H2 4 (134), H2 5 (149, 184), H2 6 (194), H2 7 (223). **Missing in H2 3** (lines 68 to 112). The only question there, "Torn between paper and digital?", opens the line-100 paragraph rather than standing alone. voice.md lists rhetorical questions as a lexicon feature, so the floor applies. Logged `major` in §7. |
| ≥1 concrete number or named example per major section | yes | Every major section names products plus listing or manufacturer figures. |
| No em-dash overuse | yes | 0. |
| Visible sentence-length variation in every section | yes | See §1 stddevs. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Gifts for Students Who Take Notes by Hand | 104 | major | The Rocketbook pick omits the limit facts.md §Named examples flags as "Honest limit for the pick": pages only erase with a Pilot FriXion or BIC Illusion erasable gel pen, so regular ballpoints are out. The same section recommends a ballpoint multipack two picks earlier (line 86). A giver who buys both gets a "reusable" notebook the student can't wipe. | Replace the Skip it if bullet at line 104 with: `- **Skip it if:** they love keeping a filled notebook as a keepsake, or they won't switch pens (it only wipes clean with a Pilot FriXion or BIC Illusion erasable gel pen, so notes in a regular ballpoint like the Jetstream won't come off)` |
| Gifts for Students Who Take Notes by Hand | 100 | major | H2 3 has no standalone-question paragraph, which fails the humanization floor (`standards/writing-standards.md` §Humanization floor). It is the only major section without one. | Put "Torn between paper and digital?" on its own line as a standalone paragraph directly under `### Rocketbook Core Reusable Notebook`, and begin the next paragraph with "The [Rocketbook Core](https://www.amazon.com/dp/B0DP3HLY4J?tag=op01e-20) is a reusable smart notebook: ...". Change nothing else in that sentence except as the next issue specifies. |
| Gifts for Students Who Take Notes by Hand | 100 | minor | "save each page to their phone" doesn't match facts.md: the app sends scans "to your cloud destination of choice" (Email, Google Drive, Evernote, Dropbox, OneNote, OneDrive). The `[VERIFY:]` source clause says "not in facts.md", which is now false. Its claim wording ("a Pilot FriXion pen", "a damp cloth") is also narrower than the verified row. | Change the clause to: "they write by hand, scan each page with their phone into a cloud app they already use (Google Drive, OneNote, or Dropbox, for example), then wipe it clean and start again". Keep a `[VERIFY:]` marker for Stage 3d, but replace it with: `[VERIFY: Rocketbook pages wipe clean with a bit of water and a towel, only erase with a Pilot FriXion or BIC Illusion erasable gel pen, and the app sends scans to a cloud destination such as Google Drive, OneNote, or Dropbox \| source: facts.md §Named examples, Rocketbook row (getrocketbook.com/pages/how-rocketbook-works, read 2026-09-13)]` |
| Start With One Question: Paper or Screen? | 66 | minor | The "You can't tell" bullet points only to the focus and planning picks. The decision diagram at line 56 and the gift-card bullet at line 230 both offer a gift card for exactly this case, so the section contradicts its own image and the later advice. | Change line 66 to: `- **You can't tell:** the focus and planning gifts work either way, and a gift card is a fair fallback (more on that near the end).` |
| Gifts for Students Who Take Notes by Hand | 82 | minor | "One engineering student's advice on Reddit" asserts the commenter's identity and breaks the subreddit-only attribution used at lines 58 and 70. | Change to: "A commenter in that same r/EngineeringStudents thread was blunt ("No need for nice books"), and a multipack of cheap spirals will serve that student better." |
| Gifts for Students Who Take Notes by Hand | 86 | minor | Non sequitur: the Jetstream being "best overall" in the pens guide is not a reason to gift a box instead of one fancy pen. Pens going missing is. | Change the last sentence to: "It's also the best overall pick in my guide to the [best pens for note taking](/best-pens-for-note-taking), and since pens wander off, I'd gift the box instead of one fancy pen." |
| Gifts for Students Who Take Notes on an iPad | 136 | minor | "you're covered without any model guesswork" overstates the cited listing title. The same sentence admits the giver still needs to know the iPad is 2018 or later. | Change the end of the sentence to: "so you only need to know their iPad is from 2018 or later, not the exact model." Apply the same framing if you touch FAQ line 258 (keep "its listing says"). |
| Gifts That Help Students Focus | 143 | minor | "study session" appears in back-to-back sentences. | Change the second sentence to: "These five picks are about calmer study time: less noise, fewer phone detours, and a clear end to each block of work." |
| Gifts That Help Students Focus | 175 | minor | 4-sentence paragraph that reads better split (`standards/writing-standards.md` §Paragraph rules). | End the paragraph after "so the time left is right there on the desk." Start a new paragraph at "It's silent (...". |
| Gifts to Skip (and When a Gift Card Is the Better Gift) | 229 | minor | "Gifts themed on their major" sits awkwardly beside the GraphGear's "Best for: math and engineering students" (line 110). The stethoscope example is gear for their future job, not a themed gift. | Change the bold lead-in to "**Gear for the job they're training for.**" and the next sentence to "Professional gear can feel thoughtful to you and pointless to them while they're still studying." Keep the stethoscope quote as is. |
| What Are the Best Gifts for Students? | 37 | minor | Budget bands have no price backing in facts.md or plan.md. Apple Pencil (USB-C) is "Splurge" (lines 37, 129, FAQ 258) while Logitech Crayon is "Mid-range" (38, 139), and line 28 defines splurge as the graduation-level gift, the same band as the Sony XM6. I haven't verified current prices; from launch pricing I believe the two styluses sit close together. | EDITOR ITEM, writer makes no change: spot-check all 15 bands against current Amazon listings at Stage 3d (without writing prices into the post), and move any mismatched band in the table, pick bullet, and FAQ together. |

## 8. What the draft does well

- **The kSafe evidence paragraph (lines 184 to 186) is the most honest study-to-product bridge this blog has shipped.** It asks the question, admits "Nobody has studied lock boxes that I know of", links the PNAS Nexus result with the literal-claim anchor, then says "That study tested an app, not a box." Keep it word for word. It is exactly the framing facts.md demands ("never imply a lock box was studied").
- **The Q20i-to-Loop Quiet 2 pairing (lines 147, 153, 157, 168).** Quoting the manufacturer's own admission that its noise cancelling is "weak" on voices, then routing voice noise to the small-budget earplugs, turns a spec limit into a buying decision. The "Honest. I like that." beat is on-voice. Don't soften the quote or reorder these picks.
- **The paper-or-screen spine runs through the whole post.** The r/EngineeringStudents "moot" quote (58) sets up the GraphGear's Skip it if callback (112), the iPad section's compatibility catch (116), the Crayon's standalone "Can't find out their model..." (134), and FAQ 5 (258). Line 74's "splurge a little on the thing they keep ..., and buy multipacks of the things they lose" resolves two contradictory Reddit quotes in one sentence, and the rest of the section hangs off it ("This is the thing they keep." / "And this is the thing they lose."). Preserve all of these hooks and callbacks.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 104 (Rocketbook, Skip it if): replace the bullet with
   - **Skip it if:** they love keeping a filled notebook as a keepsake, or they won't switch pens (it only wipes clean with a Pilot FriXion or BIC Illusion erasable gel pen, so notes in a regular ballpoint like the Jetstream won't come off)

2. Line 100 (Rocketbook): put "Torn between paper and digital?" on its own
   line as a standalone paragraph directly under
   "### Rocketbook Core Reusable Notebook". Begin the next paragraph with
   "The [Rocketbook Core](https://www.amazon.com/dp/B0DP3HLY4J?tag=op01e-20) is a reusable smart notebook: ...".

3. Line 100 (Rocketbook, same sentence): change "they write by hand, save
   each page to their phone, then wipe it clean and start again" to
   "they write by hand, scan each page with their phone into a cloud app they already use (Google Drive, OneNote, or Dropbox, for example), then wipe it clean and start again".
   Replace the existing [VERIFY:] marker on that sentence with exactly:
   [VERIFY: Rocketbook pages wipe clean with a bit of water and a towel, only erase with a Pilot FriXion or BIC Illusion erasable gel pen, and the app sends scans to a cloud destination such as Google Drive, OneNote, or Dropbox | source: facts.md §Named examples, Rocketbook row (getrocketbook.com/pages/how-rocketbook-works, read 2026-09-13)]

4. Line 66 (Paper or Screen, third bullet): change to
   - **You can't tell:** the focus and planning gifts work either way, and a gift card is a fair fallback (more on that near the end).

5. Line 82 (Leuchtturm, Skip it if): change the second sentence to
   "A commenter in that same r/EngineeringStudents thread was blunt ("No need for nice books"), and a multipack of cheap spirals will serve that student better."

6. Line 86 (Jetstream): change the last sentence to
   "It's also the best overall pick in my guide to the [best pens for note taking](/best-pens-for-note-taking), and since pens wander off, I'd gift the box instead of one fancy pen."

7. Line 136 (Logitech Crayon): change "so as long as their iPad isn't older
   than that, you're covered without any model guesswork" to
   "so you only need to know their iPad is from 2018 or later, not the exact model".

8. Line 143 (Focus section intro): change the second sentence to
   "These five picks are about calmer study time: less noise, fewer phone detours, and a clear end to each block of work."

9. Line 175 (Time Timer): end the paragraph after "so the time left is
   right there on the desk." and start a new paragraph at "It's silent (".

10. Line 229 (Gifts to Skip, third bullet): change the bold lead-in to
    "**Gear for the job they're training for.**" and the next sentence to
    "Professional gear can feel thoughtful to you and pointless to them while they're still studying."
    Keep the stethoscope quote and its framing sentence unchanged.

Do NOT change any budget band (Small budget / Mid-range / Splurge) in this
pass; the editor is checking those separately.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Keep all standing constraints: every Amazon link tagged ?tag=op01e-20, the
affiliate disclosure verbatim as the last intro paragraph, no prices, no em
dashes or en dashes, no "roommate" / "on campus" / bare "dorm", no Reddit
links or usernames, only the 5 planned external citation URLs.

Produce blog-ops/drafts/gifts-for-students/draft-v2.md. Do not overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

**Writer choices the editor asked me to judge:**
- *Best for / Budget / Skip it if as short bullet lists:* keep. They satisfy the outline's bold-label format, scan well in a gift guide, and convert cleanly to a `wp:list`. The Leuchtturm Skip it if bullet (line 82) runs two sentences, which is fine.
- *Reddit quotes attributed by subreddit only:* the right call, and consistent with the no-link rule (0 Reddit URLs, 0 usernames). The only slip, line 82's asserted identity, is fixed in §7. Thread-description attributions (lines 100, 229, 230) are acceptable.
- *"Paper or Screen?" at 135 words and the CTA at 72:* correct not to pad. Both do their job, and the total sits at -0.3% against the roll-up. Fix 4 adds about 12 words to H2 2 naturally.
- *No FAQ JSON-LD:* not flagged, per the wordpress-rest template.

**Standing constraints, all verified by grep:** 30/30 Amazon links tagged; disclosure verbatim once at line 22; 0 `$` characters; "dorm" appears only inside the approved triad at line 143; 0 "roommate" / "on campus"; "lecture" appears only as "read like a lecture" (line 190); exactly the 5 outline citation URLs; 0 Reddit links.

**Outline-level item for Gate 2 (not a writer fix, the meta is locked):** the meta description / excerpt says picks are "grouped by budget", but the post groups by need (paper, iPad, focus, planning) and tags each pick with a band. Intro line 20 describes it correctly. Something like "sorted by need, with a budget band on each" would be more accurate. This is the human's call at Gate 2, since plan.md and the outline carry the current wording.

**Stage 3d checks worth adding (I could not verify these, no fetch access):**
- *Logitech Crayon compatibility.* The pick and FAQ 5 rest on the Amazon title "for All iPads (2018 Releases and Later)". I have an unconfirmed recollection that Logitech's compatibility list carved out some 2024 iPad Pro / iPad Air models. If Logitech's own page lists exceptions, line 136 and FAQ line 258 need a caveat. Treat this as a guess to check, not a finding.
- *Budget bands* (§7 last row): nothing on disk records the prices these were assigned from.
- *Equity 33100 "silent" (line 207).* The listing's "Silent" almost certainly means no ticking, but a giver could read "a silent analog alarm clock" as an alarm that makes no sound. If Stage 3d confirms the no-tick meaning, a two-word clarification helps. Not logged as an issue because facts.md only carries the listing title.

**Watch items, not defects:**
- The Sony WH-1000XM6 pick (lines 159 to 164) is the thinnest write-up. That's forced by facts.md's no-specs rule. If an XM6 spec is ever verified on sony.com, this pick is where it pays off.
- "Surprise" appears as a framing device four times (lines 60, 134, 190, 258) and "actually" six times in body/FAQ. Neither is a tic yet. Don't add more on revise.
- The target keyword appears in running prose only once (line 14). The other four hits are headings. That's within the 2 to 8 band. The secondary keyword "gifts for note takers" appears 0 times. Optional, and not worth forcing.
- FAQ runs 387 words against the outline's ~150 estimate. It isn't gated, and each answer is 3 to 4 plain sentences suited to a PAA-style snippet, so no trim is requested.
