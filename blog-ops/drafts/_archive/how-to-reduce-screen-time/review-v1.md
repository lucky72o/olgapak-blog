# Review: how-to-reduce-screen-time draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/how-to-reduce-screen-time/draft-v1.md`, `blog-ops/drafts/how-to-reduce-screen-time/outline.md`, `blog-ops/drafts/how-to-reduce-screen-time/facts.md`, `blog-ops/drafts/how-to-reduce-screen-time/brief.md`, `blog-ops/drafts/how-to-reduce-screen-time/research/serp.md`, `blog-ops/drafts/how-to-reduce-screen-time/research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/site-conventions.md`, `content/blog/how-to-stop-doomscrolling.md`, `content/blog/digital-detox-plan.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-reduce-screen-time/draft-v1.md` (word count: `3,015` body prose excluding FAQ and `[IMAGE:]` placeholder text; outline target: `2,900`)
- Outline: `blog-ops/drafts/how-to-reduce-screen-time/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): The draft is structurally clean, holds the cannibalization line the plan reviewer blocked over, and gets the forbidden-link trap exactly right (PNAS Nexus, not georgetown.edu). It is blocked by one class of problem only: four reader-facing empirical claims carry precision or population scope that traces to nothing in `facts.md` and carries no `[VERIFY:]` marker, so the Phase 4 action-items grep will never surface them and they would ship as fact. Every fix below is a sentence-level swap; no section needs rewriting.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | PASS | Warm, first-person, lightly self-deprecating throughout. Uses the voice.md one-word rhythm beat once ("Nope." L34) and not again, exactly as the outline asked. The timeboxing anecdote (L111-113) is genuine first-person authority, not generic marketing copy. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | PASS | Grep for `one could\|one should\|users are\|stakeholders` returned a single hit, L67 "Opening one should cost you", where "one" is a pronoun for an app, not third-person drift. No `users` / `stakeholders` anywhere. |
| Active voice (no "X was scanned" shapes) | PASS | Grep for `was (scanned\|checked\|monitored\|built)` returned nothing. One deliberate stylistic passive at L106 ("without any decision being made"), which reads as intended and is not flagged. |
| Burstiness present, every H2 section has visible sentence-length variation | PASS | Every section pairs 3-to-8-word sentences against 30-plus-word sentences (e.g. L34 runs a 60-word argument straight into "Nope. Rest counts."; L54 pairs a 15-word instruction with "Not for the total, ever."). No section reads uniform. |
| Forbidden phrases count: `0` (list below); any hits = fail | PASS | Full grep against the writing-standards.md list; voice.md §Additional forbidden phrases declares "None beyond the generic list". |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | PASS | `grep -n '—'` returns nothing. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | PASS | `grep -n '–'` returns nothing. No en-dashes at all. |
| Intro jargon (§Insider-jargon translation + `audience.md` §Niche jargon translation) | PASS | Intro (L15-21) contains no SEO/marketing jargon and no unexplained specialist term. |
| Product code-literal grep against body (`modules.product` on) | PASS | `product.md` defines no backticked code constants; nothing to leak into the body. |
| Intro-hook over-anchoring | N/A | The intro hook is a timeless scene (9pm to 11:40), not a time-bound news peg. Check skipped per §1.9. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | PASS | Checked against `adapters/publish/frontmatter/wordpress.md`. All five required fields present and filled: `title`, `date` (2026-08-08), `excerpt`, `tags` (4 entries), `authors` (Olga Pak, matches `authors.md` §Byline), `draft: true`. Correctly carries NO `cover`/`heroImage` field, which that template forbids. |
| Title in frontmatter matches outline "Final title" exactly | PASS | `How to Reduce Screen Time: A Guide That Actually Holds`, 53 chars, inside blog-craft's 50-60 band, target keyword first. |
| Slug / meta description match outline | PASS | `excerpt` is character-identical to the outline's Final meta description (149 chars, under 160). The wordpress frontmatter template defines no `slug` field; the draft directory name matches the outline's Final slug. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | PASS | 1:1 in order: Not all screen time is the problem / Step 1: Get your real number before you change anything / Step 2: The ten-minute setup / Step 3: The daily habits that hold the gains / Step 4: What to do when the limits stop working / Don't forget the laptop / How much screen time should you actually aim for? / Pick one tier and do it tonight (the outline's Closing CTA) / FAQ. Zero delta. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | PASS | 4 paragraphs at L15, L17, L19, L21, of 2 / 2 / 2 / 1 sentences. Target keyword lands in the hook paragraph. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | PASS | All 7 body H2s carry a standalone-question paragraph, which is unusually strong: L36, L52, L74, L109, L123, L144, L164. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | PASS | 5 questions, verbatim matches of the outline's 5, in outline order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per SKILL §2.1 and the wordpress frontmatter template §FAQ, FAQPage JSON-LD is a WP-plugin concern and is not emitted at the adapter level. Sub-check skipped by rule, not by omission. |
| Outro / CTA paragraph present | PASS | `## Pick one tier and do it tonight` (L170-174) sits immediately before `## FAQ`, nothing follows the FAQ, two short paragraphs, no re-list of body tactics. Action anchor "try my free AI tools to automate the mundane" matches `blog.md` §Primary CTA Hook and links `/ai-tools`. |

Structural deltas vs outline (if any):
- None. Section order, FAQ set, image slot count, and intro shape all match the approved outline exactly.
- Per-section word counts vs the outline's per-section budget: intro 189/200, H2 1 269/280, H2 2 352/330, H2 3 506/450, H2 4 386/400, H2 5 662/520, H2 6 263/300, H2 7 276/320, CTA 112/100. The two overruns (H2 3, H2 5) are both in the sections the outline designates as this post's own contribution, which is the correct place to spend the budget. Not logged as an issue.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | **FAIL** | Four claims do not. See "Unsourced / suspicious claims" below. All study numbers (91%, about a quarter, 20 minutes, five hours to two and a half, two hours recreational) and the 9h40m X figure DO trace cleanly to `facts.md` rows; the failures are all durability/population generalizations the writer added around them. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. No competitor facts pool exists for this post and the draft names no third-party product at all. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | `modules.competitors: false`. Freshness and `[VERIFY:]`-on-competitor-pricing checks (§3.6, §3.7) are module-gated off. Separately verified: the draft names none of the products `facts.md` §Rejected bars (One Sec, Freedom, Brick, Unpluq, ScreenZen, Regain, LockMyApps, Detoxdroid, BePresent), and L132 describes the delay-app *category* with no name and no price, which is exactly what that row permits. |
| Product mentions (count: `2`, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | PASS | L17 "build my own AI tools" is the outline's own P2 expertise sentence and carries the "I can't go screen-free either" pre-emption. L174 is the CTA with the Text Summarizer named as the topical match per `facts.md` §Product facts. Neither survives deletion without losing meaning. Well under the 3-5 normal band, nowhere near stuffing. |
| Own-product pricing claims (§3.9) | PASS | `grep '\$'` returns nothing. No tier, no usage cap, no "free up to N". The word "free" is used as a durable framing only ("my free AI tools"), which `facts.md` §Product facts confirms is accurate and `blog-craft.md` §Own-product pricing claims permits. |
| Soon-to-ship feature gap check (§3.10) | N/A | `brief.md` §Soon-to-ship features: "None." Nothing to flag as a gap. |
| Internal links (count: `6`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | PASS | Exactly 1 in the intro (L19, `/digital-detox-plan`, woven into a sentence, not a "see also" stack), under the ≤2 cap. The other 5 sit inline at the tactic each belongs to, per the outline's placement table. |
| Every internal blog link is root-relative in the `/digital-detox-plan` form (`blog.trailing_slash: false`), not absolute | PASS | All 6 are `](/slug)` with no trailing slash and no domain: `/digital-detox-plan`, `/how-to-stop-doomscrolling`, `/time-blocking`, `/things-to-do-instead-of-being-on-your-phone`, `/how-to-plan-your-week`, `/ai-tools`. `grep 'olgapak.com'` returns nothing, so there are zero absolute cross-post links. |
| External links (count: `5`) each point to reputable sources; anchor text = literal claim | PASS | See the per-link verdict table below. 5 links is the top of blog-craft's 3-5 range. Each URL appears exactly once in the post, per the outline's instruction. Every anchor is the literal claim or the literal thing the reader is told to open. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | PASS | Full per-link verdict below. Zero hits against the forbidden set. |
| Target keyword appears 2–8 times in body (actual count: `2`) | PASS | Exact-match "reduce screen time" at L15 (intro hook) and L172 (CTA), plus the title. Variants "reduce my screen time" (L178) and "reducing screen time" (L186) in the FAQ. At the floor of the 2-8 band but passing; the writer must NOT drop either instance on revision. |

**§3.5 per-link verdict.** Forbidden set extracted from `research/serp.md` §Selected results analyzed (7 URLs): theguardian.com/thefilter/..., harmonyhit.com, mdanderson.org/cancerwise/..., scripps.org/news_items/6310-..., healthshield.co.uk/blog/..., listsof30.com/p/..., georgetown.edu/news/digital-detox-reduce-screen-time-benefits/. Allowlist from `blog-craft.md` §Authoritative-site allowlist (voice.md §Additional allowlist domains declares "None beyond the generic allowlist").

| Draft line | URL | In forbidden set? | Allowlist class | Verdict |
|---|---|---|---|---|
| L44 | `support.apple.com/en-gb/guide/iphone/iphbfa595995/ios` | No | Official platform docs | OK |
| L44 | `play.google.com/store/apps/details?id=com.google.android.apps.wellbeing` | No | Official platform listing (`facts.md` §Named examples row 2) | OK |
| L138 | `academic.oup.com/pnasnexus/article/4/2/pgaf017/8016017` | No | primary_source, peer-reviewed | OK |
| L158 | `www.nhlbi.nih.gov/health/educational/wecan/reduce-screen-time/index.htm` | No | `.gov` | OK |
| L168 | `www.ncbi.nlm.nih.gov/pmc/articles/PMC10353947/` | No | `.gov` / NLM | OK |

**The georgetown.edu trap is cleanly avoided.** `grep -i georgetown` and `grep -i kushlev` both return nothing: the draft cites the study at L138 as "a two-week study published in PNAS Nexus" and links the journal article, never the news write-up. This was the single highest-risk check on this post and the writer got it exactly right.

Unsourced / suspicious claims:
- `draft-v1.md:94`, "for a lot of people it quietly stops working in about two weeks", issue: `no facts.md row supports a two-week durability window. The nearest evidence, facts.md §Quotes u/Iris_006, says only "that didn't last either" with no timeframe. No [VERIFY:] marker, so the Phase 4 action-items grep will never surface it.`
- `draft-v1.md:192`, "most people switch it back within a couple of weeks", issue: `same invented durability window as L94, restated in the FAQ where it reads as settled fact. Not in facts.md, no [VERIFY:] marker.`
- `draft-v1.md:50`, "Most people find one specific window doing the damage, and for a lot of us it's after 9pm", issue: `population-scoped claim plus a specific clock time. facts.md supports "night is a common failure window" through two r/getdisciplined quotes, but not "most people" and not 9pm.`
- `draft-v1.md:107`, "This is the single change most people keep after a reset week ends", issue: `superlative population claim with nothing behind it in facts.md. The mechanism clause that follows it (payoff shows up the next morning) is fine and does the work on its own.`

Claims that were checked and DO trace cleanly (no action needed): 91% / about a quarter / 20 minutes more sleep / five hours to two and a half (all `facts.md` §Statistics, Kushlev rows, linked once at L138); two hours recreational (`facts.md` §Statistics row 1, linked L158); sleep association phrased as "linked to", never "causes" (L168, matches the row's explicit instruction); 9 hours 40 minutes (`facts.md` §Quotes @redhairshanks86, and the "most of it wasn't productive" gloss is faithful to the verbatim post text in `research/x.md` L92-105, which says "my screen time is not productive").

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | YES. L104. Shape is canonical, contains the literal ` \| source:` separator, and the source clause is non-trivial and accurate: it names `research/x.md §"Use-in-post quotes"` (that section exists at x.md L147 and the `<90 mins` quote is at L149) and honestly states that the quote is in facts.md while the 90-minute figure is not. This is a correct call, not an over-marking. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | YES. The one candidate (`facts.md` §Named examples, the 20-20-20 rule) was left out of the post entirely, matching the outline's Open-questions decision. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | YES. The outline's writer note allowed this as a fallback if the AI-tools path was uncertain. The path was verifiable, so a real link is correct. See §10. |
| `[IMAGE:]` | `4` vs outline `4` slots | YES. Exact match on count, type, and position: L27 remotion (two piles) after H2 1 + 1 paragraph; L42 screenshot (dashboard) after H2 2 + 1 paragraph; L100 ai-prompt (charging across the room) after H2 4 + 1 paragraph; L119 ai-prompt (past the limit, then friction) after H2 5 + 1 paragraph. No featured-image placeholder in the body (§4.2a clean). No placeholder is immediately followed by a heading (§4.2b clean). The draft contains zero markdown tables, so the remotion slot cannot be table-redundant (§4.2c clean). |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, and `[TBD]` all return nothing.

## 5. Word count

- Draft: `3,015` words (body prose, excluding frontmatter, excluding the `## FAQ` block, excluding `[IMAGE:]` placeholder text). Raw figures for reference: 3,506 words after the frontmatter including FAQ; 3,150 excluding FAQ but counting placeholder text; 356 in the FAQ.
- Outline target: `2,900` words (outline §Word count roll-up, same basis)
- Delta: `+4.0%`
- Band: `within ±10% = pass, no issue logged`

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | PASS | Both lists greped. Zero. |
| Zero em-dashes (`—`, grep returns nothing) | PASS | Zero. |
| En-dashes (`–`) only in numeric ranges | PASS | Zero en-dashes present. |
| First-person throughout | PASS | `I`, `my`, `you` throughout; no `users` / `stakeholders` / third-person `one`. |
| Active voice | PASS | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | PASS | All 7 body H2s carry both a bullet list or standalone question; question paragraphs at L36, L52, L74, L109, L123, L144, L164. |
| ≥1 bullet list per ~300 words | PASS | 9 bullet lists across 3,015 words, roughly 1 per 335 words: H2 1 (1), H2 2 (1), H2 3 (3), H2 4 (1), H2 5 (1), H2 6 (1), plus the escalation ladder rendered as bold-led paragraphs. H2 7 has no list but carries three concrete numbers and a standalone question. |
| ≥1 standalone-question paragraph per major section | PASS | 7 of 7. This is the strongest single rhythm signal in the draft. |
| ≥1 concrete number or named example per major section | PASS with one noted exception | H2 1 (L23-36) carries no number and no named example, only an anonymized "one person on X". This is outline-mandated: outline L88 explicitly instructs "no external link in this section, the writer must NOT attach a statistic to the reframe". Do not "fix" this by adding a stat. Every other section carries at least one facts.md-traceable number or a named platform. |
| No em-dash overuse | PASS | Zero occurrences. |
| Visible sentence-length variation in every section | PASS | No section approaches uniform sentence length. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Step 2: The ten-minute setup / FAQ | 94, 192 | `major` | Invented durability window. "for a lot of people it quietly stops working in about two weeks" (L94) and "most people switch it back within a couple of weeks" (L192) both assert a specific timeframe that appears in no `facts.md` row and carries no `[VERIFY:]` marker, so the Phase 4 grep will not surface it and it ships as fact. The nearest evidence (u/Iris_006) says only that grayscale "didn't last either", with no duration. | Delete the numeric window from both sentences. L94 becomes: `This tier buys a real drop and it buys it fast, and for a lot of people it quietly stops working once the novelty wears off.` L192 becomes: `The catch is that it's an easy setting to switch back the first morning you need to see a photo properly.` Do not replace the number with a `[VERIFY:]` marker; the sentences are stronger without a timeframe at all. |
| Step 1: Get your real number | 50 | `minor` | Population-scoped claim plus a specific clock time with no source. "Most people find one specific window doing the damage, and for a lot of us it's after 9pm." `facts.md` supports "night is a common failure window" (two r/getdisciplined quotes) but not "most people" and not 9pm. | Replace the sentence with: `There's usually one window doing most of the damage, and for a lot of us it's the stretch after dinner.` Keep the preceding clause ("because leaked time clusters") unchanged. |
| Step 3: The daily habits | 107 | `minor` | Unsourced superlative population claim: "This is the single change most people keep after a reset week ends." Nothing in `facts.md` ranks retention across changes. The mechanism clause that follows already carries the bullet. | Replace the opening of that second sentence so the bullet reads: `Charge it outside the bedroom overnight. This is the one I'd start with, because the payoff (a first hour that starts with you rather than a feed) shows up the very next morning.` |
| Step 1: Get your real number | 56 | `minor` | Attribution shape. "they wrote" signals a verbatim quote, but the text that follows is a compressed paraphrase of u/Oof160 that merges two sentences and drops a word. Either quote it or paraphrase it, not both. | Replace from "and it's the most useful line in the thread:" to the end of that sentence with: `and it's the most useful line in the thread: "your goals for this are pretty vague." Their advice was to write down something you can actually check, like no phone while eating, or no phone for the first 30 minutes after waking up.` |
| Step 1: Get your real number | 56 | `minor` | First use of the timeboxing term is untranslated. "A written, time-boxed rule does" lands 55 lines before the term is translated at L111. `audience.md` §Niche jargon translation names "Timeboxing" explicitly and §Reading posture requires a plain-language explanation on first appearance. | Change the final sentence of that paragraph to: `A written rule with a time attached to it does.` This leaves L111 as the first, correctly-translated use of "timeboxing". Do not touch L111. |
| Don't forget the laptop | 146 | `minor` | Unverified gender attribution. The draft says "his average" and "he admitted" for @redhairshanks86, whose gender is not established anywhere in `research/x.md` (author listed only as "Squiggly Hair Shanks", bio not captured). | Change to: `their average last week across laptop and phone was 9 hours 40 minutes, and they admitted most of it wasn't productive.` Leave the L104 "@aviralbhat / his" phrasing alone; `research/x.md` L22 names that author. |
| Step 2: The ten-minute setup | 67 | `minor` | Near-verbatim self-duplication. "Opening one should cost you a deliberate search rather than a thumb reflex" repeats a published sentence in `content/blog/how-to-stop-doomscrolling.md` L43 ("Opening one should take a deliberate search, not a thumb reflex"). Two posts in the same cluster carrying the same line reads as recycled filler to a reader who follows the link. | Replace the second sentence of that bullet with: `If you have to search for an app by name, you've already had the half-second you needed to notice you didn't mean to open it.` Keep the first sentence unchanged. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The cannibalization line held, which was the plan reviewer's blocking concern.** H2 3 (L64-72) and H2 4 (L102-107) stay at exactly the depth the outline's scope note demands: one action plus one sentence of why per item, no paragraph-per-tactic. Both sections link down instead of re-hosting (`/how-to-stop-doomscrolling` at L72, `/time-blocking` at L105). The only place given real depth in H2 3 is the app-limit walkthrough (L76-92), which is the one thing the outline authorizes and which neither sibling post nor any of the 7 SERP competitors covers. `content/blog/how-to-stop-doomscrolling.md` §Layer 1 and `content/blog/digital-detox-plan.md` Days 1-3 own grayscale, notifications, home-screen burial, and the bedroom charger in full paragraph depth, and the draft does not duplicate any of it. Do NOT expand these two sections on revision, and do not import tactic depth from either sibling.
- **H2 5 reads as the centrepiece, and the measurement backs it up.** At 662 words it is 31% larger than the next-biggest section (H2 3 at 506) and 27% over its own generous 520-word budget, which is the correct place to overspend. The u/Iris_006 plus u/Icy_Flan_7185 pairing at L121 does the "you are not uniquely weak" work with two independent voices; the night-avoidance beat at L128 converts the failure from a willpower story into a feelings story; and the permission line at L138 (only about a quarter fully complied, 91% still improved) is the strongest evidence in the whole facts pool, correctly linked to the journal article. Preserve L121, L128, and L138 verbatim.
- **Sourcing and linking discipline is close to flawless.** Five external links, all allowlist-class or primary-source, each URL used exactly once, zero hits against the 7-URL forbidden SERP set, and the georgetown.edu trap avoided by citing PNAS Nexus directly with no mention of Georgetown or Kushlev at all. Zero dollar amounts, zero named third-party blocker apps (L132 describes the category instead, exactly as `facts.md` §Rejected requires), zero em-dashes, zero forbidden phrases, and all four `tags` are verbatim entries from the live WordPress taxonomy in `blog.md`. None of this needs touching.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these seven
sentence-level edits (preserve everything else, including the strengths listed
below). No section needs restructuring, no section needs expanding or trimming,
and the word count is already inside band.

1. L94, delete the invented two-week durability window. Replace the sentence
   "This tier buys a real drop and it buys it fast, and for a lot of people it
   quietly stops working in about two weeks."
   with:
   "This tier buys a real drop and it buys it fast, and for a lot of people it
   quietly stops working once the novelty wears off."
   Do NOT add a [VERIFY:] marker instead; no source exists for a timeframe and
   the sentence is stronger without one.

2. L192 (FAQ, "Is grayscale mode worth turning on?"), same invented window.
   Replace "The catch is that most people switch it back within a couple of
   weeks."
   with:
   "The catch is that it's an easy setting to switch back the first morning you
   need to see a photo properly."

3. L50, remove the unsourced population claim and the clock time. Replace
   "Most people find one specific window doing the damage, and for a lot of us
   it's after 9pm."
   with:
   "There's usually one window doing most of the damage, and for a lot of us
   it's the stretch after dinner."
   Leave the preceding clause "because leaked time clusters" unchanged.

4. L107, remove the unsourced superlative. The bullet should read in full:
   "Charge it outside the bedroom overnight. This is the one I'd start with,
   because the payoff (a first hour that starts with you rather than a feed)
   shows up the very next morning."

5. L56, fix the u/Oof160 attribution so a quoted fragment is actually quoted.
   Replace everything from "and it's the most useful line in the thread:" to
   the end of that sentence with:
   "and it's the most useful line in the thread: \"your goals for this are
   pretty vague.\" Their advice was to write down something you can actually
   check, like no phone while eating, or no phone for the first 30 minutes
   after waking up."

6. L56 (same paragraph, final sentence), translate the timeboxing term or drop
   it. Replace "A written, time-boxed rule does."
   with:
   "A written rule with a time attached to it does."
   Do NOT touch L111; that is the correct, translated first use of "timeboxing"
   and it must stay exactly as written.

7. Two small accuracy edits:
   a. L146, the gender of @redhairshanks86 is not established in
      research/x.md. Replace "his average last week across laptop and phone was
      9 hours 40 minutes, and he admitted most of it wasn't productive."
      with:
      "their average last week across laptop and phone was 9 hours 40 minutes,
      and they admitted most of it wasn't productive."
      Leave the "his" at L104 alone; research/x.md names that author.
   b. L67, the second sentence duplicates a published line in
      /how-to-stop-doomscrolling. Replace "Opening one should cost you a
      deliberate search rather than a thumb reflex."
      with:
      "If you have to search for an app by name, you've already had the
      half-second you needed to notice you didn't mean to open it."
      Keep the first sentence of that bullet unchanged.

Explicitly do NOT change, because these were checked and passed:
- The five external links and their placement. Each URL appears exactly once,
  none is a SERP competitor, and the PNAS Nexus link at L138 is the correct
  substitute for the forbidden georgetown.edu write-up.
- The checklist depth of H2 3 and H2 4. Do not expand them, do not add a
  paragraph per tactic, do not import detail from /how-to-stop-doomscrolling or
  /digital-detox-plan.
- The three bolded lead-ins in H2 5 (L132, L134, L136). They are consistent
  structural labels for one ordered ladder, not scatter-bolding.
- The single [VERIFY:] marker at L104. Its shape and source clause are correct.
- The two exact-match uses of "reduce screen time" at L15 and L172. The body is
  at the floor of the 2-8 keyword band; removing either would drop it below.
- The absence of any statistic in H2 1. The outline forbids attaching one there.
- The /ai-tools CTA link. Root-relative with no trailing slash is verified
  correct against seven published posts and site-conventions.md.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md. Do not overwrite
the prior draft.
```

## 10. Reviewer notes (free-form)

**Judgment on the five items the writer flagged, so the editor doesn't have to re-litigate them:**

- **(a) The `[VERIFY:]` on "under 90 minutes" is the right call and the marker is well-formed.** `facts.md` §Quotes carries only @aviralbhat's arm's-length sentence; the `<90 mins` figure lives in `research/x.md` L28 and L149, which is not a citable pool. The source clause names a section that genuinely exists and is honest about the split. Guidance for the human at Phase 4: the bullet reads fine without the figure, so if the tweet can't be re-verified, the fallback is to shorten the clause to "listed this among the changes that worked for him" rather than delete the bullet. No revision needed now.
- **(b) Dropping the "15-17 hours a day" thread context was correct.** That figure is a self-reported Reddit thread title, and `facts.md` §Rejected bars every "average person spends N hours" statistic in this SERP. Paraphrasing around it was right; do not restore it.
- **(c) The three bolded lead-ins in H2 5 are NOT scatter-bolding.** `grep -o '\*\*[^*]*\*\*'` returns exactly three hits in the entire draft (L132, L134, L136), all inside one section, all serving as parallel labels for the three rungs of one ordered ladder that the section announces at L130. `blog-craft.md` §Heading structure bans bold *scattered* through the body for emphasis; three consistent structural labels in a single section, with no other bold anywhere in 3,000 words, is the opposite of scattering. Keep them.
- **(d) The `/ai-tools` path is verified.** `grep -rho '](/ai-tools[^)]*)' content/blog/*.md` returns 7 hits of `](/ai-tools)` across 6 published posts, plus one deeper `](/ai-tools/ai-text-summarizer)`. `site-conventions.md` §Permalinks and `config.yaml blog.route_prefix: /` + `trailing_slash: false` both confirm the form. Note for the editor: the outline's Closing CTA line says to link the absolute `https://olgapak.com/ai-tools`; the draft's root-relative form is the correct one and matches both live convention and `blog-craft.md` §Internal linking, so the outline line is the stale one, not the draft. No `[INTERNAL_LINK_NEEDED:]` fallback was needed.
- **(e) Both platform doc links sitting in H2 2 is outline-compliant.** Outline L106 explicitly permits either placement and requires each URL to appear once across the post. Nothing requires the H2 3 walkthrough to carry a link, and the walkthrough names the exact buttons, which is what the reader actually needs there. No issue.

**Other observations the tables didn't capture:**

- The founder anecdote at L111-113 runs six sentences across two paragraphs against the outline's "two or three sentences" guidance. I am not logging it as an issue: it is the brief's mandated first-person anchor (brief.md §Founder anecdote), it translates both "timeboxing" and "Parkinson's Law" inline as `audience.md` requires, and the L113 turn (leisure obeys the same law) is the bridge that earns H2 4's leisure-slot bullet. Leave it.
- "Doomscrolling" appears once (L72) as the anchor text of a link to a post whose own first H2 defines the term. Untranslated on first use in the strictest reading, but the definition is one click away and the word is mainstream consumer vocabulary by now. Not flagged; do not add a parenthetical gloss.
- Tone floor is clean and better than clean. L32 and L34 actively dismantle the productive-versus-wasted framing rather than merely avoiding it ("sorting your life into productive and wasted just adds a second layer of guilt on top of the first"), L94 pre-forgives the reader before the failure happens, L117 names the failure in second person without blame, and L138 closes the argument with "Three quarters of them did it imperfectly and it still worked." The `facts.md` warning about @KevinSzabo14's hustle wording was respected: `grep -i 'winning or wasting'` returns nothing while the substance of the counterpoint is still engaged at L34.
- Watch on the next pass: the four fixes in §9 items 1-4 all remove hedge-free generalizations. There is a mild risk the writer replaces them with new ones. The replacement text is given verbatim for exactly that reason; the writer should paste it rather than compose around it.
- If iteration 2 comes back with only these seven edits applied and nothing else disturbed, this post should approve. There is no structural, sourcing, linking, or tone work outstanding.
