# Review: digital-detox-plan draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/digital-detox-plan/draft-v1.md`, `blog-ops/drafts/digital-detox-plan/outline.md`, `blog-ops/drafts/digital-detox-plan/facts.md`, `blog-ops/drafts/digital-detox-plan/brief.md`, `blog-ops/drafts/digital-detox-plan/research/serp.md`, `blog-ops/drafts/digital-detox-plan/research/reddit.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`.

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/digital-detox-plan/draft-v1.md` (word count: `2,179` body prose; outline target: `2,150`)
- Outline: `blog-ops/drafts/digital-detox-plan/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): Every objective gate passes clean (zero em-dashes, zero forbidden phrases, zero forbidden external links, zero unsourced numbers, word count +1.4%, H2 order and FAQ set exactly on outline), so this is a strong draft structurally. It is held back by two `major` accuracy defects in the same cited source: the r/iPhoneSE commenter's timeline is inverted at line 86 (the source says the detox illusion held *during* the first week and the relapse came *after*, the draft says the relapse happened "within a week"), and line 198 repeats that error while generalizing one commenter into "people... often report". Both are narrow, surgical fixes; nothing structural needs to move.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | ✅ | Warm, first-person, encouraging, non-shaming throughout. Punchy short-next-to-long rhythm is live: "You didn't fail. The plan was badly built." (L35), "Better, not transformed." (L60), "Standing up is exactly the friction you're buying." (L68). Rhetorical opener questions per `voice.md` §Lexicon appear in 6 of 7 sections (L26, L66, L74, L106, L138, L156, L162). Personal anecdote drawn correctly from `voice.md` §Personal-anecdote bank (timeboxing during a Master's, L104), not invented. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | ✅ | Grep for `one could\|one should\|users are\|stakeholders\|individuals` returned zero hits. Reader addressed as `you` throughout; author as `I`. |
| Active voice (no "X was scanned" shapes) | ✅ | One passive construction at L166 ("only about 30% of studies in this area were rated high quality"), which is the correct and idiomatic way to report a study-quality rating. Not a drift. |
| Burstiness present, every H2 section has visible sentence-length variation | ✅ | Per-section sentence-length stddev: intro 9.2, H2 1 11.4, H2 2 7.7, H2 3 7.4, H2 4 5.6, H2 5 9.0, H2 6 10.4, CTA 12.8, FAQ 6.7. All well above the <4 uniform-AI-tell threshold. Min/max spread is wide everywhere (e.g. H2 1 ranges 5 to 47 words). |
| Forbidden phrases count: `0` (list below); any hits = fail | ✅ | Dual-sourced grep against `writing-standards.md` §Forbidden phrases and `voice.md` §Additional forbidden phrases (which declares "None beyond the generic list"). Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | ✅ | `grep -n '—' draft-v1.md` returns nothing. Notable given the writer had to hand-truncate the Tanya Goodin quote at L35, whose source text in `facts.md` contains an em-dash. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | ✅ | `grep -n '–' draft-v1.md` returns nothing. Zero en-dashes to validate. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

**Intro jargon check (§1.7):** the intro (L14–L20) contains no SEO/marketing jargon and no entry from `audience.md` §Niche jargon translation. Pass. One jargon note falls outside the intro and is logged as `minor` in §7 (row 6): `timeboxing` at L104 is on the translation table but arrives without its inline gloss.

**Intro-hook over-anchoring (§1.9):** N/A. The hook is a durable behavioral scenario ("You put the phone in a drawer on Sunday night"), not a time-bound news peg. Nothing to over-anchor. The post reads the same in 12 months.

**Product code-literal grep (§1.8, module: product):** N/A. `product.md` defines no backticked code constants, status enums, or table names. Nothing to grep for.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | ✅ | Validated against `adapters/publish/frontmatter/wordpress.md`. All required fields present and filled: `title` (52 chars, in the 50–60 band), `date: 2026-08-03`, `excerpt` (143 chars, ≤160), `tags` (3 entries, all verified against the live taxonomy in `blog.md`: `productivity`, `time management`, `digital tools for productivity`), `authors: - Olga Pak` (matches `authors.md` byline), `draft: true`. Correctly carries **no** `cover`/`heroImage` field, per that template's §No cover/heroImage field. Per the skill's §2.1, the FAQPage JSON-LD sub-check is skipped for `wordpress-rest` (no adapter-level JSON-LD requirement). |
| Title in frontmatter matches outline "Final title" exactly | ✅ | Byte-for-byte match with outline §Final title: `Digital Detox Plan: 7 Days to Reset Your Screen Time`. |
| Slug / meta description match outline | ✅ | Excerpt is a byte-for-byte match with outline §Final meta description. The wordpress frontmatter template defines no `slug` field; the slug is carried by the draft directory name `digital-detox-plan`, which matches outline §Final slug. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | ✅ | 1:1 in order: `What a digital detox plan actually is (and why cold turkey backfires)` (L22), `Before day 1: get your baseline number` (L39), `The 7-day digital detox plan` (L54), `What to do when you slip (because you will)` (L126), `Day 8 and beyond: the rules that keep it` (L142), `Does a digital detox actually work? An honest answer` (L160). All seven H3s under H2 3 match outline H3 3.1–3.7 verbatim in order. The CTA heading `Start tonight, not Monday` (L172) is not an outline addition: it renders outline §Closing CTA, and a titled CTA H2 immediately before `## FAQ` is this blog's house convention (cf. `time-blocking` "Pick tomorrow and block three things", `content/blog/time-blocking.md`). |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | ✅ | Exactly 4 paragraphs, at the strict maximum. L14 hook (3 sentences, target keyword present), L16 expertise statement (2 sentences, drawn from `voice.md` §Credibility message), L18 internal link woven into a sentence (2 sentences), L20 preview (1 sentence). All within the 1–3 sentence rule. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | ✅ | H2 1: bullet list + 109/97,748/37.1%. H2 2: bullet list + 4h06m/57. H2 3: 4h06m→3h and 57→17, plus a bullet list at L82–84 and seven H3 breaks. H2 4: bullet list + "about two weeks". H2 5: bullet list + "three months". H2 6: 14 studies / ~30% / 68 students (no bullet list, carried by numbers). CTA: no list and no number, which is correct for a ≤2-paragraph CTA. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | ✅ | 5 questions in the draft, 5 in outline §FAQ block, matching verbatim and in order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per `adapters/publish/frontmatter/wordpress.md` §FAQ (schema markup), FAQPage JSON-LD is a WP-plugin concern and is neither emitted nor required by this frontmatter template. Skipped per skill §2.1. |
| Outro / CTA paragraph present | ✅ | `Start tonight, not Monday` (L172–176) sits immediately before `## FAQ`; nothing follows the FAQ. Links the `blog.md` §Primary CTA target with the exact §Hook as an action anchor ("Try my free AI tools to automate the mundane"), not the bare homepage. 2 short paragraphs, one crisp value line, no feature re-list, no prices. |

Structural deltas vs outline (if any):
- **Accepted, no action.** Outline §Intro P1 planned the 37.1% stat + its PMC link as the hook's fact anchor. The writer moved both into H2 1 (L26) because `blog-craft.md` §Internal linking requires the first body link to be internal, and an intro-P1 external link would have broken that. I independently agree with the editor's acceptance: the first link in the body is now internal (`/how-to-stop-doomscrolling`, L18) and precedes the first external link (L26). Outline §H2 1 pre-authorized this by writing "the 37.1% from the intro counts if not repeated here". P1 still carries the target keyword, and its scenario hook is a permitted hook shape per `blog-craft.md` §Intro structure ("short personal anecdote").
- **No other deltas.** Every planned internal link landed in its planned section: `/things-to-do-instead-of-being-on-your-phone` in Day 4 (L96), `/what-is-timeboxing` in Day 5 (L104), `/productive-things-to-do-on-your-phone-instead-of-scrolling` in H2 4 (L140), `/how-to-plan-your-week` in H2 5 (L158).
- Outline §H3 3.2 offered the screen-time-limit-features association (⚠️ `needs_verification`) as an optional fact hook for Day 2. The writer correctly declined to use it. That is the right call and removes one Stage 3d dependency.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | ✅ | Every number resolves to `facts.md` §Statistics: 109 studies / 97,748 people / 37.1% (L26), 4h06m and 57 pickups (L50, L60), 3h and 17 pickups (L60), December 2024 no-MeSH (L37), 14 eligible studies and ~30% high quality (L166), 68 students / 2021 (L166), "about two weeks" (L138, VOC row), "three months" (L156, VOC row). Zero invented numbers. Zero `[VERIFY:]` markers needed. Accuracy defects in *how* two sourced items are worded are logged separately in §7 rows 1, 2 and 3. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false` in `config.yaml`; `facts.md` has no §Competitor facts section. No competitor products are named in the draft. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same reason. §3.6 and §3.7 (staleness, `[VERIFY:]` on competitor pricing) are both module-gated off and have nothing to check. |
| Product mentions (count: `2`, if `modules.product` is on) are each earning their place, none can be deleted without losing meaning | ✅ | L16 ("I work on a screen all day and build my own AI tools") is the E-E-A-T expertise statement, drawn from `voice.md` §Credibility message, unlinked and unnamed. Deletion rule: removing it collapses the intro's entire "this is not a post telling you to quit screens" premise, so it earns its place. L176 is the CTA and is product-specific (names the Text Summarizer and what it does for this reader). 2 mentions is well under the 3–5 normal band, nowhere near stuffing. Outline §Intro P2 said "No product name here", and L16 does not name the product, it states what Olga builds. Compliant. |
| Internal links (count: `5`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | ✅ | 5 internal links total, inside the 3–5 band. Exactly 1 in the intro (≤2 required), woven into a sentence rather than stacked as a "see also" list. The other 4 are distributed into the body sections where their topic is actually discussed. |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://yourblog.com{route_prefix}...` (absolute = `major`) | ✅ | `config.yaml`: `route_prefix: /`, `trailing_slash: false`. All 5 are root-relative with no trailing slash: `/how-to-stop-doomscrolling`, `/things-to-do-instead-of-being-on-your-phone`, `/what-is-timeboxing`, `/productive-things-to-do-on-your-phone-instead-of-scrolling`, `/how-to-plan-your-week`. Zero absolute cross-post links. The one absolute `https://olgapak.com/...` URL (L176) targets the `/ai-tools` marketing page, not a blog post, which `blog-craft.md` §Internal linking explicitly routes as absolute. Logged as `minor` row 10 for house consistency only, not as a rule breach. |
| External links (count: `5` distinct URLs) each point to reputable sources; anchor text = literal claim | ✅ | Inside the 3–5 band (the PMC scoping review is cited twice and counts once). Every anchor is the literal claim: "about 37.1% of people worldwide show problematic smartphone use", "going cold turkey is daunting, so the week eases you in gently", "check your Screen Time on iPhone", "check Digital Wellbeing on Android", "effects on life satisfaction and overall wellbeing remain variable", "a social media detox improved mood, sleep, and anxiety". No "click here" anchors. |
| Target keyword appears 2–8 times in body (actual count: `4`) | ✅ | "digital detox plan" appears 4 times in the body (L14 hook, L22 H2, L24 definition, L54 H2) plus twice in frontmatter. Inside the 2–8 band and inside the typical 2–5 sub-band. No stuffing. |

**§3.5 Forbidden external links to SERP competitors (unconditional check).** Forbidden set extracted from `research/serp.md` §"Selected results analyzed" (7 URLs). Per-link verdict for every external URL the draft renders:

| Draft line | URL | In forbidden set? | On allowlist? | Verdict |
|---|---|---|---|---|
| L26, L164 | `https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/` | Yes (SERP rank 3) | Yes (NIH/NLM, `blog-craft.md` §Government / academic) | ✅ allowed, allowlist exception is intentional and pre-authorized by `facts.md` §Linking rule |
| L35 | `https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox` | Yes (SERP rank 6) | Yes (The Guardian, `blog-craft.md` §Major publications) | ✅ allowed, allowlist exception |
| L45 | `https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios` | No | Yes (official platform docs) | ✅ allowed |
| L46 | `https://support.google.com/android/answer/9346420` | No | Yes (`support.google.com` named explicitly) | ✅ allowed |
| L166 | `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/` | No | Yes (NIH/NLM) | ✅ allowed |
| L176 | `https://olgapak.com/ai-tools` | No | N/A (own marketing site) | ✅ allowed |

**Every named forbidden domain is absent.** Zero hits for `health-in-mind.org.uk`, `lifeline.org.au`, `nuffieldhealth.com`, `everydayhealth.com`, and `regis.edu`. **Zero `reddit.com` URLs appear anywhere in the draft**, and all four Reddit references are attributed in prose with no hyperlink, exactly per `facts.md` §Reddit rule: "One commenter in r/iPhoneSE" (L86), "One detoxer in r/digitalminimalism" (L138), "A commenter in r/nosurf" / "In the same r/nosurf thread" (L151, L154), "A commenter in r/digitalminimalism" (L168). This check is the highest-risk item on this post and the draft is clean on it.

**§3.8 Invented-number check.** Grepped for audience-size ranges (`\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`), "N+" adoption claims, and migration/volume ranges. Zero hits of any pattern. No fake precision anywhere.

**§3.9 Own-product pricing claims.** Grepped for `\$\d`, "free up to", "per month", "pricing", "price". **Zero hits.** The CTA uses the durable framing "my free AI tools" with no number attached, per `product.md` §Pricing page ("posts must not state prices") and the brief's avoid-list.

**§3.10 Soon-to-ship feature gap check.** `brief.md` §Soon-to-ship features lists none. Nothing to check, and the draft flags no product gaps.

**Brief avoid-list compliance (checked explicitly for this post).** Grepped for `rewir|brain|dopamine|neuro` and `grind|hustle|wasting your life|lazy|addict`: **zero hits on every pattern.** No neuroscience claims, no hustle-culture moralizing, no shame framing. The draft actively runs the other way: "That isn't a willpower failure" (L14), "You didn't fail. The plan was badly built." (L35), "that's information, not a scandal" (L50), "not evidence you're weak" (L132), "It isn't a diagnosis, and it isn't a verdict on your character" (L26).

Unsourced / suspicious claims:
- `draft-v1.md:86`, "reported that within a week he was still watching short videos and playing games on it", issue: **timeline inverted relative to the source.** `research/reddit.md:48` quotes u/Sindweller in full: "That was during the first week while I was just getting used to the size. **Now** I still watch tiktoks, play games, and even work." The first week is when the detox illusion *held*; the relapse came *after* it. The draft asserts the opposite. `facts.md:44` elides that clause with an ellipsis, so the writer was working from a truncated entry, but the full source is in the research file and contradicts the draft. Also assigns gender ("he") that no source states. Logged §7 rows 1 and 4.
- `draft-v1.md:198`, "people who buy a smaller or plainer device specifically to detox **often report** being back to the same habits **within a week**", issue: repeats the L86 timeline error, and converts a single commenter (plus one echo, u/dukerozen) into an unsourced frequency claim. `research/reddit.md:106` scopes this as "the dominant pushback in 1/5 threads". "Often report" is a soft statistic with no basis, which the brief's avoid-list ("No invented statistics") rules out. Logged §7 row 2.
- `draft-v1.md:166`, "a social media detox **improved** mood, sleep, and anxiety", issue: strengthens self-report into a causal finding. `facts.md:28` says "students completing a social media detox **reported improvements** to mood, sleep, and anxiety". The gap between "reported improvements" and "improved" matters in a section whose whole job is honest evidence calibration. Logged §7 row 3. Positively: the draft *does* describe the study as small and scope it exactly ("A small 2021 study of 68 students... and is still 68 students"), which is what outline §H2 6 and `facts.md` require of this ⚠️ `needs_verification` row. Stage 3d still has to confirm it at the NIH URL or the claim gets cut.
- No other claim is unsourced. Every remaining number resolves to a `facts.md` row.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | ✅ N/A. Nothing to validate, so §4.4's `\| source:` clause check has no rows. Correct outcome here: every numeric claim traced to `facts.md`, so no marker was needed. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | ✅ N/A. Outline planned 5 distinct external URLs and all 5 shipped as live links. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | ✅ N/A. All 5 planned internal targets are published posts and all 5 shipped. |
| `[IMAGE:]` | `4` vs outline `4` slots | ✅ Exact match, and each slot matches its planned concept and type: L58 seven-day ramp (`remotion`, the only genuine diagram, correct per `custom-instructions.md` §Image style), L94 phone-free block (`ai-prompt`), L130 slip-recovery (`ai-prompt`), L146 maintenance scene (`ai-prompt`). All four use the exact `[IMAGE: <desc>. Type: <type>. Suggested filename: <name>.png]` shape. |

**§4.2a Featured-image hygiene:** ✅ Pass. No inline placeholder uses `Suggested filename: featured.png`, and none matches the outline's featured concept (hand-lettered title over a flat-vector scene). The featured slot correctly stays out of the body, which for `wordpress-rest` ships as a media upload attached via `featured_media`, not an inline image.

**§4.2b Image-placement hygiene:** ✅ Pass. No placeholder is immediately followed by a heading. L58 is followed by body prose (L60), L94 by L96, L130 by L132, L146 by L148. Each sits after its heading plus first body paragraph, as the outline planned.

**§4.2c Table-redundant chart:** ✅ Pass. The one `remotion` slot (L58) is a genuine stepped-ramp diagram, and the draft contains no markdown tables anywhere, so there is nothing redundant within ±20 lines.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grepped for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`. Zero off-shape markers.

## 5. Word count

- Draft: `2,179` words (body prose: everything after the closing frontmatter `---` through the end of the CTA at L176, excluding `[IMAGE:]` placeholder text and excluding the `## FAQ` block)
- Outline target: `2,150` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+1.4%`
- Band: `within ±10% = pass, no issue`

Independently recomputed rather than inherited from the editor's note; the figure matches. Also inside the `blog-craft.md` §Post type matrix how_to band of 1,500–2,500 words. No issue logged.

Separate observation, not part of the gated total: the FAQ is 311 words against the outline's ~150 estimate. Ungated, but see §7 row 11.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | ✅ | Dual-sourced grep, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | ✅ | Zero. |
| En-dashes (`–`) only in numeric ranges | ✅ | Zero en-dashes present, so vacuously clean. |
| First-person throughout | ✅ | `I` for the author, `you` for the reader, no `one`/`users`/`stakeholders`. |
| Active voice | ✅ | One idiomatic passive at L166 reporting a study-quality rating. Acceptable. |
| ≥1 rhythm marker in every H2 | ✅ | Every body H2 carries a bullet list, a concrete number, or both. See §2 row 6 for the per-section breakdown. |
| ≥1 bullet list per ~300 words | ⚠️ | 5 bullet lists (17 bullets) across 2,179 words = 1 per ~436 words, against a floor of 1 per 300. **Judging the editor's specific question:** the per-H2 requirement in `blog-craft.md` §Body rules is satisfied, because that rule is an OR (list OR standalone question OR concrete number) and every H2 clears it. The writer's defense that H2 3's seven H3 days carry the list structure is also fair on the substance: that section is 7 titled sub-blocks of 1–3 sentence paragraphs plus its own bullet list at L82–84, which is the opposite of a wall of text. So this is a shortfall against the numeric floor, not a readability failure, and I am logging it `minor` (§7 row 7) rather than escalating. The one place it genuinely bites is H2 6, the only ~250-word section with neither a list nor an H3 break. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | ✅ | `voice.md` §Lexicon calls for "Rhetorical opener questions" and the draft delivers them in 6 of 7 sections (L26, L66, L74, L106, L138, L156, L162). They are question-led paragraph *openers* rather than standalone one-line paragraphs, which is a stylistic variant of the same device, not a miss. Only H2 2 lacks one, and it carries a bullet list plus two concrete numbers instead. |
| ≥1 concrete number or named example per major section | ✅ | H2 1: 109 / 97,748 / 37.1% + Tanya Goodin named. H2 2: 4h06m / 57 pickups. H2 3: 4h06m→3h, 57→17. H2 4: "about two weeks". H2 5: "three months". H2 6: 14 studies / ~30% / 68 students. |
| No em-dash overuse | ✅ | Zero, so nothing to overuse. |
| Visible sentence-length variation in every section | ✅ | Stddev 5.6 to 12.8 across all sections, every one comfortably above the <4 flag threshold. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| H2 3 / Day 3 | 86 | `major` | The r/iPhoneSE commenter's timeline is inverted. The draft says he was back to short videos and games "within a week". `research/reddit.md:48` quotes the source in full: "That was during the first week while I was just getting used to the size. **Now** I still watch tiktoks, play games, and even work." The first week is when the detox effect *held*; the relapse came *after* it, once the novelty of the smaller size wore off. `facts.md:44` elides that clause with an ellipsis, which is how the error got in. | Rewrite the sentence so the timeline matches the source. Replace "reported that within a week he was still watching short videos and playing games on it, exactly as before" with "reported that the detox effect lasted only while the smaller size still felt novel, and that they were soon back to short videos and games, exactly as before". Do not state a duration the source does not support. |
| FAQ / Q5 | 198 | `major` | Two problems in one clause: "people who buy a smaller or plainer device specifically to detox **often report** being back to the same habits **within a week**". It repeats the L86 timeline inversion, and it turns one commenter (plus one echo) into an unsourced frequency claim. `research/reddit.md:106` scopes this as "the dominant pushback in 1/5 threads", which does not support "often report". The brief's avoid-list forbids invented statistics, and "often" is a soft statistic. | Replace "people who buy a smaller or plainer device specifically to detox often report being back to the same habits within a week" with "people who buy a smaller or plainer device specifically to detox often find the novelty wears off and the old habits come back". Drop the "within a week" duration entirely and drop the implied frequency count. |
| H2 6 | 166 | `minor` | "a social media detox **improved** mood, sleep, and anxiety" states a causal finding, but `facts.md:28` records self-report: "students completing a social media detox **reported improvements** to mood, sleep, and anxiety". In a section whose entire job is honest evidence calibration, the overstatement is out of character with the surrounding prose. | Change the anchor text to "students reported better mood, sleep, and anxiety" so the link anchor still reads as the literal claim but matches the study's self-report design. Keep the "and is still 68 students" beat exactly as written. |
| H2 3 / Day 3 | 86 | `minor` | "he was still watching short videos" assigns a gender that no source states. `research/reddit.md` records u/Sindweller with no gender given. | Use "they" instead of "he". Fold this into the row-1 rewrite. |
| H2 5 | 156 | `minor` | The three-month detox quote is attributed only as "One person who spent three months without a smartphone at all", with no subreddit named. The other three Reddit references in the draft all name theirs (r/iPhoneSE, r/digitalminimalism, r/nosurf), so this one reads as vaguer than its neighbors for no reason. `facts.md:46` records it as u/mmorpgarea, r/selfimprovement. | Change "One person who spent three months without a smartphone at all" to "One person in r/selfimprovement who spent three months without a smartphone at all". Keep it unlinked, per `facts.md` §Reddit rule. |
| H2 3 / Day 5 | 104 | `minor` | "timeboxing" is on `audience.md` §Niche jargon translation ("giving a task a fixed time slot and stopping when it's up") but arrives without its inline gloss. `authors.md` says Olga "always translates niche jargon on first use". The concept is *implied* by L102 ("a start time and an end time you decide before you begin") and the `/what-is-timeboxing` link carries the depth, so this is close to a pass, but the term itself is never defined in-line. | Add the gloss to the anecdote sentence: "I picked up timeboxing, giving a task a fixed slot and stopping when it's up, while juggling a Master's with a side project". Keep the Parkinson's Law paraphrase ("work kept expanding to fill whatever time I handed it") exactly as written; it is already a correct plain-English translation. |
| Whole post | n/a | `minor` | Bullet-list density is 5 lists across 2,179 words (1 per ~436) against the `writing-standards.md` §Humanization floor of 1 per 300. The per-H2 requirement passes and the draft has no wall-of-text problem, so this does not block. The one section where it is real is H2 6 (~250 words, five consecutive prose paragraphs, no list and no H3 break). | Optional. If you want to close the gap, add one short bullet list to H2 6 breaking out what the research does and does not support (for example: may help with depression and problematic internet use / benefits look largest for people starting with more severe symptoms / effects on general life satisfaction stay variable). Do not add lists anywhere else; the rest of the post is well broken up already. |
| H2 2, H2 3 | 50, 60 | `minor` | The Guardian before/after numbers (4h06m and 57 pickups at L50; 3h and 17 pickups at L60) carry no link on the claim itself. The Guardian is linked once at L35, but on a different claim (the Goodin quote). `blog-craft.md` §External linking wants the anchor to be the literal claim being cited, and these two lines are the post's most checkable numbers. | Optional, and only do one of them so the post does not over-link. Put the existing Guardian URL on the L50 numbers, anchoring the literal claim: "started at [4 hours 6 minutes a day and 57 pickups](https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox)". Leave L60 unlinked. |
| H2 1, H2 2, H2 3 | 26, 52, 86 | `minor` | Six paragraphs run 4–5 sentences against the 1–3 sentence rule in `writing-standards.md` §Paragraph rules ("4-sentence paragraphs only when the argument genuinely needs them, rare"). Most are inflated by deliberate one-word rhythm fragments ("Calmer." / "Better rested." at L52), which are a `voice.md` device and should be kept. L86 is the only one that is 5 full sentences of real content. | Split L86 only. Start a new paragraph at "A capable phone stays capable." Leave L26, L35, L52, L68 and L138 alone; their short fragments are the intended rhythm, not padding. |
| CTA | 176 | `minor` | The CTA links `https://olgapak.com/ai-tools` absolute. Both forms are spec-compliant (`blog-craft.md` §Internal linking routes app/marketing-site links absolute, and this blog's `route_prefix: /` makes `/ai-tools` visually ambiguous with a post slug), and a prior review approved the absolute form. But the three most recent posts (`time-blocking`, `how-to-plan-your-week`, `how-to-stop-doomscrolling`) all use root-relative `/ai-tools`. Consistency nit only. | Optional. For consistency with the three most recent posts, change `https://olgapak.com/ai-tools` to `/ai-tools`. If you prefer the absolute form, leave it; it does not violate any rule. |
| FAQ | 180–198 | `minor` | The FAQ is 311 words against the outline's ~150 estimate. It is outside the gated word count so it does not affect §5, but two answers largely restate body prose: Q1 (L182) re-tells the day-8 rules from H2 5, and Q5 (L198) re-tells the Day 3 hardware warning. | Optional. Trim Q1 and Q5 by roughly a sentence each so they answer the question directly rather than re-summarizing their body sections. Do not cut Q2, Q3 or Q4; they are tight and each adds something the body does not spell out. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The anti-shame spine is the best thing in the post and must survive the revision intact.** L14 ("That isn't a willpower failure"), L26 ("It isn't a diagnosis, and it isn't a verdict on your character"), L35 ("You didn't fail. The plan was badly built."), L50 ("that's information, not a scandal") and L132 ("A lost evening is data about a trigger, not evidence you're weak") form a single consistent argument that the reader's past failures were design failures. This is exactly what `brief.md` §Avoid list and `audience.md` §Language to avoid asked for, it is what none of the SERP competitors do, and it is the post's real differentiator. Do not soften or trim any of those five lines.
- **The honesty calibration in H2 6 is a genuine E-E-A-T asset, not hedging.** L162 ("Partly, and less dramatically than the genre suggests"), L166 ("The evidence base is thin, and I'd rather tell you that than oversell it" plus "and is still 68 students"), and L37's no-MeSH-on-PubMed beat with its inline translation of what PubMed is, together do something the whole top-10 SERP refuses to do. The "is still 68 students" construction in particular is the right instinct for a ⚠️ `needs_verification` stat. Keep all of it; fix only the "improved" wording flagged in §7 row 3.
- **The Reddit sourcing discipline is clean and should be the template for future posts on this keyword.** Four voice-of-customer references, every one attributed in prose with a named subreddit or role, every one unlinked, zero `reddit.com` URLs anywhere in the file. L154 in particular ("In the same r/nosurf thread, a much more elaborate self-designed work cycle drew an immediate and fair reply") is precisely accurate to `research/reddit.md:63` and correctly notes that the pushback and the no-phone-Sundays comment sit in the same thread. That precision is worth preserving.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. L86 (Day 3), MAJOR, factual timeline is inverted. The source
   (research/reddit.md:48, u/Sindweller) says: "That was during the first week
   while I was just getting used to the size. NOW I still watch tiktoks, play
   games, and even work." The first week is when the detox effect HELD; the
   relapse came AFTER it. The draft says the opposite. Replace "reported that
   within a week he was still watching short videos and playing games on it,
   exactly as before" with "reported that the detox effect lasted only while the
   smaller size still felt novel, and that they were soon back to short videos
   and games, exactly as before". Note "they", not "he": no source states the
   commenter's gender. Do not state any duration the source does not support.

2. L198 (FAQ, "Will buying a simpler phone fix this?"), MAJOR, same timeline
   error plus an invented frequency claim. Replace "people who buy a smaller or
   plainer device specifically to detox often report being back to the same
   habits within a week" with "people who buy a smaller or plainer device
   specifically to detox often find the novelty wears off and the old habits
   come back". Drop "within a week" and drop the implied "often report" count;
   research/reddit.md:106 scopes this as the dominant pushback in 1 of 5
   threads, which does not support a frequency claim.

3. L166 (H2 6), MINOR, self-report stated as causation. facts.md:28 says
   students "reported improvements" to mood, sleep, and anxiety. Change the link
   anchor text from "a social media detox improved mood, sleep, and anxiety" to
   "students reported better mood, sleep, and anxiety". Keep the URL and keep
   the "and is still 68 students" beat exactly as written.

4. L156 (H2 5), MINOR, vague attribution. Change "One person who spent three
   months without a smartphone at all" to "One person in r/selfimprovement who
   spent three months without a smartphone at all". Keep it unlinked, per
   facts.md's Reddit rule.

5. L104 (Day 5), MINOR, untranslated jargon. audience.md requires "timeboxing"
   to be glossed on first use. Change to "I picked up timeboxing, giving a task
   a fixed slot and stopping when it's up, while juggling a Master's with a side
   project". Keep the Parkinson's Law paraphrase ("work kept expanding to fill
   whatever time I handed it") exactly as written.

6. L86 (Day 3), MINOR, paragraph length. After applying fix 1, split the
   paragraph: start a new paragraph at "A capable phone stays capable." Do not
   split any other paragraph; the one-word fragments elsewhere ("Calmer." /
   "Better rested." at L52) are deliberate voice devices and stay.

OPTIONAL (apply only if they cost nothing, none of these block approval):
7. H2 6 has no bullet list across ~250 words. If it reads naturally, add one
   short list of what the research does and does not support (may help with
   depression and problematic internet use / benefits look largest for people
   starting with more severe symptoms / effects on general life satisfaction
   stay variable). Do not add lists to any other section.
8. L50, attach the existing Guardian URL to the literal claim: "started at
   [4 hours 6 minutes a day and 57 pickups](https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox)".
   Do NOT also link L60; one is enough.
9. L176, change https://olgapak.com/ai-tools to /ai-tools for consistency with
   the three most recent posts. Both forms are valid; skip if you prefer.
10. FAQ Q1 (L182) and Q5 (L198) each restate a body section. Trim about one
    sentence from each. Leave Q2, Q3 and Q4 alone.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Do NOT add any link to health-in-mind.org.uk, lifeline.org.au,
nuffieldhealth.com, everydayhealth.com, regis.edu, or any reddit.com URL. The
draft is currently clean on this and it is the highest-risk rule on this post.
Keep every internal link root-relative with no trailing slash. Keep zero
em-dashes. Do not introduce any price.

Produce blog-ops/drafts/digital-detox-plan/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

- **This is a near-approve draft.** Every hard gate is green: zero em-dashes, zero en-dashes, zero forbidden phrases, zero forbidden external links, zero unsourced numbers, zero invented statistics, zero prices, zero marker-shape defects, word count +1.4%, H2 order and FAQ set exactly on outline, all five internal links root-relative and correctly distributed. The two `major` rows are both narrow wording fixes inside a single sourced anecdote. Nothing structural moves, and draft-v2 should be a 10-minute pass.
- **Both majors share one root cause worth recording.** `facts.md:44` compresses the u/Sindweller quote with an ellipsis that removes the clause carrying the timeline ("That was during the first week while I was just getting used to the size"). The writer read the truncated version and reconstructed a plausible but wrong timeline, then repeated it in the FAQ. The full quote was available in `research/reddit.md:48`. Worth considering at the synthesis stage whether `facts.md` VOC rows should preserve time-bearing clauses rather than elide them.
- **Stage 3d dependency, unchanged and correctly scoped.** The 68-student 2021 study (L166) is still ⚠️ `needs_verification` in `facts.md`. The draft handles it exactly as outline §H2 6 required: described as small, scoped to its size twice, and placed as supporting rather than load-bearing evidence. If Stage 3d cannot confirm it at `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/`, the sentence can be cut whole with no damage to the section, because L164's scoping-review finding and L166's "14 eligible studies / ~30% high quality" carry the argument on their own. Good structural insurance by the writer. The writer also declined outline §H3 3.2's optional screen-time-limit-features stat, which was the other ⚠️ row, removing a second Stage 3d dependency entirely.
- **On the editor's intro question, I agree with the acceptance and would not revisit it.** Moving the 37.1% stat and its PMC link from intro P1 into H2 1 was the correct resolution of the conflict between the outline's intro plan and `blog-craft.md`'s first-body-link-must-be-internal rule. The outline pre-authorized it in §H2 1. The resulting P1 is arguably a better hook than the stat version would have been, because the drawer-on-Sunday-night scenario is concrete and the reader recognizes themselves in it immediately.
- **Tone drift to watch on the revise pass:** the fixes in rows 1 and 2 both remove a crisp specific ("within a week") and replace it with a softer construction. Resist the temptation to compensate by adding emphasis elsewhere in Day 3. That section's power comes from the flat declarative "A capable phone stays capable", and it does not need propping up.
- **Category open question is still open and is not this review's call.** `outline.md` §Open questions records that the "Digital wellbeing" pillar row in `site-conventions.md` is marked "human to confirm" and the post ships as `Productivity`. That is a one-field change at publish and does not affect the draft.
- **Publishing reminder, per `custom-instructions.md`:** nothing in this review authorizes publication. The post stays WordPress `draft`, Gate 2 approval is the operator's browser action, and the Rank Math focus keyword ("digital detox plan") is a manual wp-admin step before going live.
