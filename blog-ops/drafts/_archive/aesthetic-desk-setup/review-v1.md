# Review: aesthetic-desk-setup draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/aesthetic-desk-setup/draft-v1.md`, `blog-ops/drafts/aesthetic-desk-setup/outline.md`, `blog-ops/drafts/aesthetic-desk-setup/facts.md`, `blog-ops/drafts/aesthetic-desk-setup/brief.md`, `blog-ops/drafts/aesthetic-desk-setup/research/serp.md`, `blog-ops/drafts/aesthetic-desk-setup/research/reddit.md`, `blog-ops/drafts/aesthetic-desk-setup/research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `blog-ops/profile/site-conventions.md`, `blog-ops/profile/product.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/aesthetic-desk-setup/draft-v1.md` (word count: `2,396` body prose excluding FAQ; outline target: `2,370`)
- Outline: `blog-ops/drafts/aesthetic-desk-setup/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The affiliate, sourcing, and structural discipline this post was commissioned to get right is genuinely clean, no untagged or invented Amazon URL, no price, no 47% figure, no invented phone statistic, no forbidden phrase, no em-dash. Two `major` issues block approval: the target keyword "aesthetic desk setup" appears exactly once in the entire body (blog-craft §Body rules requires 2–8, and Rank Math's focus keyword is set to that exact phrase before publish), and line 32's "The other four have one specific pick each" misdescribes the post's own shape, since five steps carry a pick, Step 4 carries two, and Step 1 sits in both the "costs nothing" set and the "has a pick" set. Both are small, surgical edits.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | pass | Warm, first-person, lightly self-deprecating, beginner-friendly. Anecdote at line 16 is drawn from the sanctioned anecdote bank (career pivot, Master's, building AI tools) with no invented specifics. "Fair." (line 30) and "buy the fake one and don't apologise" (line 109) are the punchy rhythm beats the voice doc asks for. The one soft spot is the absence of the documented rhetorical-question hook, see §6. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | pass | Grep for `\b(one could\|one should\|users are\|stakeholders)\b`: 0 hits. |
| Active voice (no "X was scanned" shapes) | pass | Grep for `was (scanned\|checked\|monitored\|built)`: 0 hits. Passive constructions that do appear are legitimate reporting of study results ("The workspace was rated more attractive", line 107) and mirror the source abstract. |
| Burstiness present, every H2 section has visible sentence-length variation | pass | Per-section sentence-length stddev: intro 14.4, H2 1 7.2, Step 1 15.0, Step 2 17.5, Step 3 10.9, Step 4 11.2, Step 5 9.9, Step 6 14.4, Step 7 17.1, "If you only buy three things" 8.8, CTA 9.8. All well above the <4 uniformity threshold. Shortest sentences run 2–5 words ("Everything.", "Fair.", "That's it.") against 44–71-word longest. |
| Forbidden phrases count: `0` (list below); any hits = fail | pass | Both lists greped (`writing-standards.md` §Forbidden phrases; `voice.md` §Additional forbidden phrases declares none beyond the generic list). |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | pass | Zero. The outline's own draft hook and preview sentences contained em-dashes (outline P1, P4); the writer correctly converted them to a colon and a colon respectively. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | pass | Zero `–` hits. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

Intro jargon check (`writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation): none of `SERP`, `DR`, `keyword difficulty`, `Parkinson's Law`, `timeboxing`, `Kanban board`, `funnel`, `featured snippet`, `E-E-A-T` appears in the intro or anywhere in the body. Intro-hook over-anchoring: no time-bound event hook, check skipped.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | pass | Adapter is `wordpress-rest`, template `adapters/publish/frontmatter/wordpress.md`: `title` (50 chars, in the 50–60 band), `date: 2026-09-09`, `excerpt` (144 chars, ≤160), `tags` (3, in the 2–4 band), `authors: [Olga Pak]` matching `authors.md` byline, `draft: true`. Correctly emits no `cover`/`heroImage` field (featured image ships via media upload). No JSON-LD requirement at this adapter level, sub-check skipped per SKILL §2.1. All three tags exist in `blog.md` §Tag taxonomy: `productivity`, `students`, `time management`. |
| Title in frontmatter matches outline "Final title" exactly | pass | `Aesthetic Desk Setup: 7 Simple Steps on Any Budget`, character-identical. |
| Slug / meta description match outline | pass | Slug `aesthetic-desk-setup` is the draft directory and carries no frontmatter field under this adapter. `excerpt` is character-identical to the outline's Final meta description. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | pass | Draft H2s in order: line 24 "Why your desk doesn't look like the one you saved", 36 Step 1, 55 Step 2, 73 Step 3, 89 Step 4, 99 Step 5, 113 Step 6, 128 Step 7, 144 "If you only buy three things", 154 "Now protect the hours you spend at it" (the outline's unnamed Closing CTA, given a heading exactly as the published `bullet-journal-for-beginners` and `screen-free-hobbies` posts do), 160 FAQ. Zero deltas against outline H2 1–9. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | pass | Four paragraphs (lines 14, 16, 18, 20): hook 2 sentences with the target keyword in P1, expertise 1 sentence, internal-link sentence 1, preview 1. One intro internal link (`/how-to-reduce-screen-time`), inside the ≤2 limit and woven into a sentence rather than stacked. Affiliate disclosure at line 22 is the italic last paragraph immediately before the first `##`, verbatim against `custom-instructions.md` §Content policy and the live `best-pens-for-note-taking.md:22`. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | pass | Every section clears the blog-craft §Body rules bar: H2 1 (3-of-5 threads), Step 1 (bullets), Step 2 (bullets), Step 3 (named lamp + 9pm), Step 4 (two-or-three-item rule + named picks), Step 5 (nine organisations / 18 / 13), Step 6 (bullets), Step 7 (bullets), H2 9 (bullets). Density across the whole post is thinner than the humanization floor wants, see §6. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | pass | 5 `###` items, question wording character-identical to the outline's five, in the same order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | n/a | `wordpress-rest` emits no JSON-LD; FAQPage schema is a WP-plugin concern per the frontmatter template §FAQ. Skipped per SKILL §2.1/§2.5. |
| Outro / CTA paragraph present | pass | Lines 154–158, two short paragraphs, immediately before `## FAQ`, nothing after the FAQ. Links the `blog.md` §Primary CTA target with the action anchor "try my free AI tools" to `/ai-tools`, matching the convention in 12 published posts. No feature re-list beyond a single Text Summarizer mention, no price. |

Structural deltas vs outline (if any):
- None. Section-length drift only, and it is minor: Step 5 runs 302 words against the outline's 250 (+21%), "If you only buy three things" 154 against 200 (-23%), CTA 112 against 100. The post total absorbs it (see §5).

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | pass with one exception | Traced: "at least 20 inches" / "at or below eye level" (line 51, facts §Statistics, OSHA); "perpendicular to the window" (line 81, same row, re-referenced without a second anchor); "nine Dutch organisations", "18 outcomes", "the other 13" (line 107, facts §Statistics + §Quotes abstract, exact); "three of the five threads" for decluttering (line 28) and for cables (line 61), both facts §Named examples. The exception is "step four was to keep the cords out of sight" (line 61), see the unsourced list below. Non-claims that are rhetoric, not statistics: "forty purchases" (14), "9pm" (75), "two seconds away" (117), "Nine kept by accident" (111). |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | n/a | `modules.competitors: false`; no competitor brand is named anywhere in the draft. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | n/a | Competitors module off. No `verified`-date stamp leaks into prose (grep `verified 20`: 0 hits). |
| Product mentions (count: `11`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | pass | Own-product mentions: 2 ("Text Summarizer", "my free AI tools", both line 158), well under the 3–5 normal band and confined to the CTA per `product.md` §Positioning recommendations. Affiliate product picks: 9 anchors across 8 distinct ASINs (Univivi, Nordik and Honeywell each appear a second time in the "If you only buy three things" shortlist, which the outline's H2 9 explicitly instructs: "Re-use the three product links already introduced above"). Every one of the 8 ASINs is in `facts.md` §Named examples → Product picks, every URL carries `?tag=op01e-20` verbatim, and every anchor names the product, no generic "Buy on Amazon" anchor anywhere (the exact pitfall `facts.md` records for two SERP competitors). Zero `[AFFILIATE-LINK-PENDING:]`. Zero prices: grep `\$` returns 0 hits, and no product or the blog's own free tools carries a price, tier, or usage cap. IKEA ALEX is named and deliberately unlinked at line 53 with the transparency line the outline required. |
| Internal links (count: `6`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | pass | 5 blog-post links (`/how-to-reduce-screen-time` intro, `/best-pens-for-note-taking` Step 4, `/best-notebooks-for-note-taking` Step 5, `/how-to-stop-doomscrolling` Step 6, `/time-blocking` Step 7) plus the `/ai-tools` CTA. Matches the outline's internal-link table exactly, one per planned section. All five target files exist in `content/blog/`. First internal link (line 18) precedes the first external link (line 42). |
| Every internal blog link is root-relative `/<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://olgapak.com/...` (absolute = `major`) | pass | All six are root-relative with no trailing slash, per `config.yaml` `trailing_slash: false` and `site-conventions.md` §Permalinks. Grep for an absolute `olgapak.com` cross-post link: 0 hits. |
| External links (count: `3`) each point to reputable sources; anchor text = literal claim | pass | `pmc.ncbi.nlm.nih.gov/articles/PMC3072218/` (line 42), `osha.gov/etools/computer-workstations/components/monitors` (line 51), `pmc.ncbi.nlm.nih.gov/articles/PMC10346441/` (line 107). Each linked exactly once; Step 3 (line 81) and FAQ Q4 (line 176) re-reference the OSHA and PMC sources in prose without emitting a duplicate anchor, exactly as the outline's external link plan requires. Anchor text is the literal claim in all three. **§3.5 forbidden-SERP-link check (unconditional): zero hits.** None of aestheticroomcore.com, slouchonline.com, orderofficefurniture.co.uk, stylebyemilyhenderson.com, savespendsplurge.com, nikkilo.com or octet.design is linked. The 8 Amazon URLs are affiliate picks, not citations, and amazon.com is not among the analysed SERP results. Count sits at the bottom of blog-craft's 3–5 band; the pending `[EXTERNAL_LINK_NEEDED:]` at line 83 is the intended fourth. |
| Target keyword appears 2–8 times in body (actual count: `1`) | **fail** | Exact phrase "aesthetic desk setup" appears once in the body (line 14) and not again, including the FAQ. "aesthetic desk" appears twice, "aesthetic" three times in 2,800 words. Under-optimized against blog-craft §Body rules (2–8, typically 2–5), and this is the exact phrase the human sets as the Rank Math focus keyword before publishing (`site-conventions.md` §SEO plugin, `custom-instructions.md` §Publishing & review). Logged as `major` in §7. |

Unsourced / suspicious claims:
- `draft-v1.md:61`, "One commenter's whole budget room plan read as an order of operations, and step four was to keep the cords out of sight", issue: the ordinal is accurate against `research/reddit.md:78` (u/gin_martini5's numbered budget checklist, item 4) but it is **not** in `facts.md`, which is the writer's sanctioned pool, and unlike every other community claim in the post the commenter is not named. The outline's H2 3 bullet cites this to "`facts.md` §Quotes, u/gin_martini5", but that quote was never carried into `facts.md`; the outline is wrong, not the draft. Logged as `minor` in §7. The claim is true, so this is an attribution-discipline fix, not a fact problem.
- No other unsourced numeric claim. Specifically: **Step 6 (lines 113–126) contains zero statistics**, exactly as the outline demanded. No phone-usage, screen-time, notification-count or attention-span number was invented; the section runs on reasoned geography plus two internal links. This was the highest-risk section in the post and the writer got it right.
- **The 47% plants claim does not appear**, in any form, in the body or the FAQ. Grep for `47`: 0 hits.
- Step 5 does not overclaim what the study did find. Line 107 reports attractiveness, satisfaction, fewer dry-air complaints and higher sense of privacy, then "On the other 13 outcomes, they measured no direct effect at all", which matches the abstract quoted in `facts.md` §Quotes. It omits the fifth significant finding (fewer health-related complaints at work), an under-claim, not an over-claim, and the 13-of-18 split is exact. FAQ Q4 (line 176) repeats the same split correctly.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | n/a. No `[VERIFY:]` marker in the draft, so §4.4 source-clause validation has nothing to validate and cannot fail. |
| `[EXTERNAL_LINK_NEEDED:]` | `1` | Yes, line 83, canonical shape, claim + suggested source type both present, and it is the one the outline pre-authorised for H2 4 (light and evening alertness). Stage 3d resolves or deletes; the sentence it follows ("Cooler and brighter while you're working, warm and low in the evening") survives deletion as ordinary advice. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | n/a; every planned internal link is resolved to a real published slug. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Yes. Lines 40, 59, 77, 103, all `Type: ai-prompt` per `custom-instructions.md` §Image style (no `remotion` slot, correct for a post with no chart content). §2a featured-image hygiene: none of the four duplicates the outline's featured concept and no `Suggested filename: featured.*` appears, so the featured asset ships only via media upload. §2b placement: each sits after its H2 plus one paragraph and is followed by prose, never immediately by a heading. §2c: no `remotion` chart, no adjacent markdown table. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `[TBD]`, `[AFFILIATE-LINK-PENDING` all return zero hits.

## 5. Word count

- Draft: `2,396` words (body prose, excluding frontmatter and the `## FAQ` block)
- Outline target: `2,370` words (roll-up "Total estimate", same basis)
- Delta: `+1.1%`
- Band: `within ±10% = pass, no issue logged`

FAQ is 407 words against the outline's ~180 estimate. Per the SKILL's measurement basis the FAQ is not part of the gated total, so this is a judgement call, not a length failure: see the `minor` padding issue in §7. Plan target 2,000–2,400 is also met.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | pass | Both lists greped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | pass | Zero. |
| En-dashes (`–`) only in numeric ranges | pass | Zero `–` hits. |
| First-person throughout | pass | "I" and "you" throughout; no `one`/`users`/`stakeholders`. |
| Active voice | pass | Only study-reporting passives, which mirror the cited abstract. |
| ≥1 rhythm marker in every H2 | pass | All 9 body H2s carry a bullet list or a concrete number (see §2). |
| ≥1 bullet list per ~300 words | **fail** | 5 bullet lists across 2,396 body words; the floor asks for roughly 8. Four sections in a row carry no list at all: H2 1 (line 24), Step 3 (73), Step 4 (89), Step 5 (99). Logged as `minor` in §7, since blog-craft §Body rules' per-section "at least one of" bar is met in each of them by a concrete number. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | **fail** | Zero standalone-question paragraphs in the whole post. `voice.md` §Lexicon lists "Reader-directed rhetorical hooks ('Do you ever feel...?')" as a signature move, so this voice does call for it. The one rhetorical question that exists, "So where should it go?" (line 117), is buried at the head of a four-sentence paragraph instead of standing alone. Logged as `minor` in §7. |
| ≥1 concrete number or named example per major section | pass | Every body H2 has one; see §2 rhythm row. |
| No em-dash overuse | pass | Zero em-dashes. |
| Visible sentence-length variation in every section | pass | Stddev 7.2–17.5 across sections, minimum sentence 2 words, maximum 71. |

Two rows fail. Both are logged as `minor` because the per-section craft rule in `blog-craft.md` §Body rules is satisfied everywhere; if the editor reads the humanization floor as hard-gating, escalate both to `major` and they simply join the revise list already required by the two `major` issues below.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| (whole body) | 14 | `major` | Target keyword "aesthetic desk setup" appears exactly once in the body and zero times in any H2, FAQ question, or FAQ answer. blog-craft §Body rules requires 2–8 occurrences, and this exact phrase is what the human sets as the Rank Math focus keyword before publishing. | Add two natural occurrences of the exact phrase "aesthetic desk setup" without touching any heading (headings are locked). Suggested spots: line 34, change "An aesthetic desk is a short list of decisions" to "An aesthetic desk setup is a short list of decisions"; and FAQ Q1's answer (line 164), work the phrase into the first sentence, e.g. "An aesthetic desk setup on a budget starts with the three steps that cost nothing". Do not add a third occurrence; 3 total is the target. |
| Why your desk doesn't look like the one you saved | 32 | `major` | "Three of the seven steps cost nothing. The other four have one specific pick each, and you do not need all four." This misdescribes the post's own structure and undercounts its affiliate links. Five steps carry a pick (Steps 1, 2, 3, 4, 5), Step 4 carries two (desk mat and pen box), Steps 2 and 4 each add an alternate, and Step 1 is counted in the "costs nothing" three at line 146 while also recommending the monitor riser. Eight products are linked, not four. In a post whose entire promise is "decisions, not a shopping list", the one sentence that sets the deal with the reader is the wrong number. | Rewrite the last two sentences of line 32 so the arithmetic is honest and the promise still holds, e.g.: "Three of the seven steps cost nothing at all. The rest come down to one decision each, and where I name something to buy, it's one pick, not a shortlist. You will not need all of them." Do not add a product count to the sentence and do not change line 146's "Three of the seven decisions cost nothing: clear the surface, move the phone, do the reset", which is correct as the actions. |
| Step 2: Get the cables out of sight | 61 | `minor` | "step four was to keep the cords out of sight" is accurate against `research/reddit.md:78` (u/gin_martini5's numbered budget checklist) but the detail is not carried in `facts.md`, and the commenter is unnamed while every other community claim in the post names its source. | Name the source the way the rest of the post does, e.g. "One commenter's whole budget room plan, from u/gin_martini5, read as an order of operations, and step four was keeping the cords out of sight." Do not add a link to the Reddit thread. |
| Step 5 / FAQ | 105, 176 | `minor` | The disputed plants figure is referred to as "A specific percentage figure" (line 105) and "A widely repeated percentage figure" (line 176) without being named. **Reviewer's judgement: this is correct restraint, not evasion, and it should stay unnamed.** `facts.md` §Rejected says "Never promote" and the standing instruction is that the number must not appear; naming it in order to debunk it still puts it on the page where it can be quoted out of context or picked up by an LLM summarizer. The passage also gives the reader enough to recognise the claim ("attached to well-being, concentration and productivity", "credited to one study in the National Library of Medicine's archive"). The only nit is that line 105's "A specific percentage figure" reads slightly more coy than line 176's "widely repeated". | Optional, do not force it: change "A specific percentage figure follows plants around this topic" to "A single, widely repeated percentage follows plants around this topic". Do NOT name the figure. If the writer touches nothing here, that is an acceptable outcome. |
| FAQ | 160–180 | `minor` | FAQ is 407 words against the outline's ~180 estimate, and two answers restate body prose almost verbatim: Q5 (line 180) is the Step 7 bullet list turned into a sentence ("Non-daily items go in the drawer, cups leave the room, papers become one pile, the phone goes to its home"), and Q3 (line 172) restates the Step 4 palette rule. Duplicated passages weaken both copies for snippet selection. | Trim Q1, Q2, Q3 and Q5 to roughly 50 words each by cutting the sentence in each that repeats the body. Keep Q4 (the plants answer) at full length; it carries the honesty beat and is the FAQ's most differentiating answer. Do not change any question wording, the FAQ set is locked. |
| (whole body) | 24, 73, 89, 99 | `minor` | Bullet-list density is 5 lists per 2,396 words against the humanization floor's ~1 per 300 words, and four consecutive sections (H2 1, Step 3, Step 4, Step 5) run as unbroken prose. | Add one short bullet list to Step 3, in the paragraph at line 79, breaking the two-source fix into its parts (daylight from the side / one warm light at desk level / nothing overhead). Do not add lists to Step 4 or Step 5; those sections argue rather than enumerate and a list would read as filler. |
| (whole body) | 117 | `minor` | Zero standalone-question paragraphs across the whole post, though `voice.md` §Lexicon names reader-directed rhetorical hooks as a signature Olga move. "So where should it go?" at line 117 is the only one and it is buried at the head of a four-sentence paragraph. | Split "So where should it go?" onto its own line as a one-sentence paragraph at line 117, and add one more standalone question to open the second half of H2 1 or Step 4, in Olga's register (short, reader-directed). Two in the whole post is enough; do not sprinkle. |
| Now protect the hours you spend at it | 158 | `minor` | The CTA is near-verbatim the CTA of the most recently published post, `content/blog/bullet-journal-for-beginners.md:200` ("That's the job I built the Text Summarizer for, so if that's where your evenings disappear, [try my free AI tools](/ai-tools) to automate the mundane and keep the page for the thinking"). Repeated across consecutive posts it reads as a template rather than a voice. | Keep the `/ai-tools` link, the action anchor "try my free AI tools", and the "automate the mundane" hook, all of which are required. Rewrite the sentence around them so the setup is desk-specific rather than the bullet-journal sentence with two nouns swapped. |
| Step 5 | 99 | `minor` | Step 5 runs 302 words against the outline's 250 (+21%), the largest single-section overrun, while "If you only buy three things" runs 154 against 200. The post total is fine (+1.1%), so this needs no action on its own. | No action required. If the FAQ trim above leaves you wanting to rebalance, take 20 words out of Step 5's closing personal-items paragraph (line 111), not out of the plants evidence paragraphs (lines 105–107), which are the post's differentiator. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The Step 5 honesty beat (lines 105–109) is the best paragraph in the post and must survive verbatim.** It withholds the disputed percentage entirely, states plainly that the number is not in the study it is credited to, then reports what the study actually found with the 13-of-18 split exactly as `facts.md` §Quotes records it, and lands on "So a plant won't make you work faster. It makes the desk feel like somewhere you want to sit." No competitor in `research/serp.md` does this. Do not soften it, do not add the number, do not add a second external link.
- **Steps 2 and 4 keep the one-primary-pick discipline the plan's whole angle depends on.** At line 69 the D-Line box is a conditional aside inside the Univivi's own paragraph ("If your desk has no lip to clamp onto... which is the same decision solved in a different room"), and at line 95 the Aothia pad is the same move ("the same decision in a different material"). Neither is a parallel recommendation and neither is bulleted. The pen box at line 97 correctly gets its own short paragraph because it answers a different decision. Keep this shape.
- **Step 6 (lines 113–126) invents nothing.** The section the outline flagged as the highest-risk in the post, no fact in `facts.md`, carries zero statistics, and instead earns its authority from a ranked list of four phone homes and the line "None of this is willpower. It's geography: put the phone where reaching it costs a decision rather than a glance." That is the post's most original passage against the SERP. Do not add a screen-time statistic to it under any circumstance.
- Bonus, also worth keeping: the IKEA ALEX transparency line at line 53 ("I'm naming it because readers recommend it, not because it's linked here. It isn't.") is exactly the affiliate posture this blog wants, and every one of the nine Amazon anchors names its product instead of saying "Buy on Amazon".

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 14 area / keyword coverage: the target keyword "aesthetic desk setup"
   currently appears exactly once in the entire body. Add two more natural
   occurrences of that exact phrase, without touching any heading. Do this at
   line 34, changing "An aesthetic desk is a short list of decisions" to "An
   aesthetic desk setup is a short list of decisions", and in the FAQ Q1 answer
   (line 164), working the phrase into the first sentence, e.g. "An aesthetic
   desk setup on a budget starts with the three steps that cost nothing." Stop
   at three total occurrences in the body.

2. Line 32: "Three of the seven steps cost nothing. The other four have one
   specific pick each, and you do not need all four" is not true of this post.
   Five steps carry a pick, Step 4 carries two, Steps 2 and 4 each add an
   alternate, eight products are linked, and Step 1 is in the "costs nothing"
   three at line 146 while also recommending the riser. Rewrite the last two
   sentences of line 32 so the arithmetic is honest and the promise survives,
   for example: "Three of the seven steps cost nothing at all. The rest come
   down to one decision each, and where I name something to buy, it's one pick,
   not a shortlist. You will not need all of them." Do not state a product
   count. Leave line 146 exactly as it is.

3. Line 61: name the commenter behind the numbered budget plan, the way every
   other community claim in the post does: "One commenter's whole budget room
   plan, from u/gin_martini5, read as an order of operations, and step four was
   keeping the cords out of sight." Do not add a link to the Reddit thread.

4. FAQ (lines 160-180): trim Q1, Q2, Q3 and Q5 to roughly 50 words each by
   cutting the sentence in each that repeats body prose. Q5 currently restates
   the Step 7 bullet list and Q3 restates the Step 4 palette rule. Leave Q4 (the
   plants answer) at full length. Do not change any question wording.

5. Step 3 (line 79): add one short bullet list breaking the two-source fix into
   its parts (whatever daylight the room gives you / one warm light at desk
   level / nothing overhead). Do not add lists to Step 4 or Step 5.

6. Line 117: split "So where should it go?" onto its own line as a one-sentence
   paragraph, and add one more standalone rhetorical question, in Olga's
   register, to open the second half of either H2 1 or Step 4. Two in the whole
   post, no more.

7. Line 158: the CTA is near-verbatim the CTA of the last published post
   (bullet-journal-for-beginners). Keep the /ai-tools link, the "try my free AI
   tools" action anchor, and the "automate the mundane" hook, but rewrite the
   surrounding sentence so it is desk-specific rather than the previous post's
   sentence with nouns swapped.

8. Optional, only if it reads better to you: at line 105, "A specific percentage
   figure" may become "A single, widely repeated percentage". Do NOT name the
   figure, and do not otherwise touch lines 105-109.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked. Do NOT
change any Amazon URL, add a product not in facts.md, state a price, or add a
statistic to Step 6.

Produce blog-ops/drafts/aesthetic-desk-setup/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

- **The two things this post was commissioned to get right, it got right.** Affiliate integrity is clean on every axis checked: eight distinct ASINs, all from the `facts.md` table, all tagged `op01e-20`, all named in the visible anchor, zero prices anywhere in the post including for the blog's own free tools, disclosure verbatim and correctly placed. And the two named traps, the 47% figure and an invented phone statistic, are both absent. Neither of the two `major` issues is about integrity; both are craft and SEO.
- **On the Step 5 naming question the editor asked about:** the draft's restraint is correct and I would not change it. Naming a debunked number in the act of debunking it is normal journalism, but this blog's own `facts.md` says "Never promote", the operator's standing rule says the claim must not appear, and the paragraph as written still lets a reader who has seen the figure recognise exactly which claim is being challenged. The `minor` in §7 is a wording nit, not a request to name it.
- **Watch at Stage 3d:** if the `[EXTERNAL_LINK_NEEDED:]` at line 83 is deleted rather than resolved, the post ships with three external citations, the floor of blog-craft's 3–5 band. That is compliant but has no slack. If a resolvable NLM or .gov source on evening light and alertness exists, taking it is worth a little effort.
- **Outline defect worth recording for the editor, not the writer:** the outline's H2 3 bullet cites the "ugly ass cords" quote to "`facts.md` §Quotes, u/gin_martini5", but that quote was never carried into `facts.md`. The writer paraphrased accurately from `research/reddit.md` anyway. Nothing to fix in the draft beyond issue 3; the note is so a future pass does not treat facts.md as complete.
- **Length judgement on the FAQ:** 407 words is not padded across the board. Q4 (96 words) earns every word and is the reason a reader would trust this post over the SERP. Q1 and Q2 are usefully full. The trim in §7 targets only the two answers that restate body prose, and should land the FAQ around 280–300 words rather than at the outline's ~180 estimate, which was too tight for a post with an evidence correction in it.
