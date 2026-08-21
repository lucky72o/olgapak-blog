# Review: how-to-reduce-screen-time draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b, iteration 2).
Sources: `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md`, `draft-v1.md` (diff basis), `review-v1.md` (prior verdict), `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `research/reddit.md`, `research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `content/blog/how-to-stop-doomscrolling.md`, `content/blog/digital-detox-plan.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md` (word count: `3,030` body prose excluding frontmatter, the `## FAQ` block, and `[IMAGE:]` placeholder text; outline target: `2,900`)
- Outline: `blog-ops/drafts/how-to-reduce-screen-time/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md §Author voice)

**Scope of this pass.** `diff draft-v1.md draft-v2.md` returns exactly 8 changed lines, all one-for-one substitutions on lines 50, 56, 67, 94, 107, 146, 192. Nothing moved, nothing was added, nothing was deleted. All seven `review-v1.md` §9 edits landed. Per the editor's instruction, the checks that passed at iteration 1 were re-verified cheaply against the v2 file rather than re-audited from scratch; the fresh scrutiny went into (a) whether the seven replacements read naturally in context, (b) whether any of them introduced a new unsourced claim, and (c) whether any of them introduced a repetition.

## Verdict

`approve`

Reasoning (1–3 sentences): All seven prescribed edits landed verbatim, the four unsourced empirical claims that blocked iteration 1 are gone with nothing invented in their place, and every iteration-1 pass survived the revise intact (zero forbidden phrases, zero em-dashes, zero SERP-competitor links, georgetown.edu still absent, H2 order and FAQ set unchanged, word count +4.5%). One new near-verbatim echo between L117 and L192 is the only defect the revise introduced, it is a phrasing nit inside a single FAQ answer, and the humanize pass runs next and touches exactly that layer. Zero critical, zero major.

**Iteration counter:** this is revision pass `2` of `max 3` for this autopilot run. Verdict is `approve`, so no escalation is triggered. (Had this been `request_revisions` at iteration > 2, the editor would escalate to the human rather than dispatch another writer pass.)

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | PASS | Unchanged and, in two places, improved. L107's "This is the one I'd start with" replaces a fake population statistic with a real first-person recommendation, which is more on-voice than what it replaced. L146's singular "they" is consistent across all three references in the passage and does not read stilted. The one-word rhythm beat ("Nope." L34) still appears exactly once. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | PASS | `grep -nE '\b(one could\|one should\|users are\|stakeholders)\b'` now returns **zero** hits. The single iteration-1 hit ("Opening one should cost you", L67, a pronoun for an app, not third-person drift) was removed by edit 7b, so this check is now clean without an exception note. |
| Active voice (no "X was scanned" shapes) | PASS | `grep -nE '\bwas (scanned\|checked\|monitored\|built)\b'` returns nothing. The one deliberate stylistic passive at L106 ("without any decision being made") is untouched and still reads as intended. |
| Burstiness present, every H2 section has visible sentence-length variation | PASS | No replacement flattened a section. L94 and L192 each swapped one clause of similar length; L146 changed pronouns only; L50, L56, L67 and L107 each replaced a sentence with one of comparable length. Every section still pairs sub-10-word sentences against 30-plus-word ones (L34, L54, L109, L128, L154). |
| Forbidden phrases count: `0` (list below); any hits = fail | PASS | Full re-grep of the writing-standards.md list against v2 returns exit 1 (no matches). `voice.md` §Additional forbidden phrases: "None beyond the generic list." None of the seven replacements introduced a listed phrase. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | PASS | `grep -n '—' draft-v2.md` returns nothing. The replacement text uses periods and commas throughout; the L107 parenthetical uses round brackets, not dashes. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | PASS | `grep -n '–'` returns nothing. Zero en-dashes in the file. |
| Intro jargon (§Insider-jargon translation + `audience.md` §Niche jargon translation) | PASS | Intro (L15-21) is untouched by the diff and still carries no SEO/marketing jargon and no unexplained specialist term. Separately: edit 6 removed the premature "time-boxed" from L56, so the first appearance of the timeboxing concept is now L111, where it is translated inline ("which just means giving a task a fixed slot on the calendar and stopping when the slot is up"). This check is *stronger* in v2 than in v1. |
| Product code-literal grep against body (`modules.product` on) | PASS | `product.md` defines no backticked code constants. Nothing to leak, nothing changed. |
| Intro-hook over-anchoring | N/A | The intro hook is a timeless scene (9pm to 11:40), not a time-bound news peg. Check skipped per SKILL §1.9, same as iteration 1. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | PASS | Frontmatter (L1-13) is byte-identical to v1, which was verified against `adapters/publish/frontmatter/wordpress.md`. All five required fields present and filled: `title`, `date` (2026-08-08), `excerpt`, `tags` (4 entries, all verbatim from the live WP taxonomy in `blog.md`), `authors` (Olga Pak), `draft: true`. Correctly carries no `cover`/`heroImage` field, which that template forbids. |
| Title in frontmatter matches outline "Final title" exactly | PASS | `How to Reduce Screen Time: A Guide That Actually Holds`, unchanged, 53 chars, target keyword first. |
| Slug / meta description match outline | PASS | `excerpt` unchanged and still character-identical to the outline's Final meta description (149 chars). The wordpress frontmatter template defines no `slug` field; the draft directory name matches the outline's Final slug. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | PASS | Re-greped `^## ` on v2: L23 / L38 / L60 / L96 / L115 / L140 / L156 / L170 / L176. Identical set and order to v1 and to the outline. Zero delta. The diff touched no heading line. |
| Intro is 2–4 paragraphs, 1–3 sentences each (hook / expertise / internal-link cluster / preview) | PASS | 4 paragraphs at L15, L17, L19, L21, of 2 / 2 / 2 / 1 sentences. Untouched by the diff. One internal link in the intro (`/digital-detox-plan`), under the ≤2 cap. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | PASS | All 7 body H2s still carry a standalone-question paragraph: L36, L52, L74, L109, L123, L144, L164. All seven verified present in v2. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | PASS | 5 questions at L178, L182, L186, L190, L194, verbatim matches of the outline's 5, in outline order. Edit 2 changed one sentence *inside* answer 4; it did not touch a question. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `publish.adapter: wordpress-rest`. Per SKILL §2.1 and the wordpress frontmatter template §FAQ, FAQPage JSON-LD is a WP-plugin concern and is not emitted at the adapter level. Sub-check skipped by rule, not by omission. |
| Outro / CTA paragraph present | PASS | `## Pick one tier and do it tonight` (L170-174) sits immediately before `## FAQ`; nothing follows the FAQ. Action anchor "try my free AI tools to automate the mundane" links `/ai-tools` root-relative, matching `blog.md` §Primary CTA Hook. Untouched by the diff. |

Structural deltas vs outline (if any):
- None. Section order, FAQ set, image slot count, and intro shape all match the approved outline exactly, and the revise moved none of them.
- Per-section word counts are within a few words of iteration 1 (the diff net-added 15 words across the whole post). The two designed overruns (H2 3 and H2 5, this post's own contribution) are unchanged and remain the correct place to spend the budget. Not logged as an issue.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | **PASS** (was FAIL at iteration 1) | All four iteration-1 failures are resolved and none of the replacements smuggled in a substitute. L94 and L192 no longer name any timeframe. L50 no longer names a clock time or claims "most people". L107 no longer claims a retention ranking. Re-greped every remaining `\b\d+\b` in the body: 9pm / 11:40 (L15, the narrative hook, not an empirical claim), 30 minutes (L56, verbatim from `facts.md` L31), 90 minutes (L104, carries the `[VERIFY:]`), thirty minutes (L92, an illustrative budget the reader sets), 91% / about a quarter / two weeks-study / five hours to two and a half / 20 minutes (all `facts.md` §Statistics, linked once each), two hours (L158/L184, NHLBI, linked), 9 hours 40 minutes (L146, `facts.md` §Quotes @redhairshanks86), four hours to three (L166, framed explicitly as an example target, "which for many people means"). Zero unsourced numerics remain. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false`. No competitor facts pool exists and the draft names no third-party product. Re-verified against `facts.md` §Rejected: none of One Sec, Freedom, Brick, Unpluq, ScreenZen, Regain, LockMyApps, Detoxdroid, BePresent appears; L132 still describes the delay-app *category* with no name and no price. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | `modules.competitors: false`. §3.6 and §3.7 are module-gated off. |
| Product mentions (count: `2`, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | PASS | Unchanged by the diff. L17 ("build my own AI tools") is the outline's P2 expertise sentence carrying the "I can't go screen-free either" pre-emption; L174 is the CTA with the Text Summarizer as the topical match per `facts.md` §Product facts. Neither survives deletion. Well under the 3-5 normal band. |
| Own-product pricing claims (§3.9) | PASS | `grep -n '\$'` returns nothing. No tier, no cap, no "free up to N". "my free AI tools" is a durable framing that `facts.md` §Product facts confirms is accurate. |
| Soon-to-ship feature gap check (§3.10) | N/A | `brief.md` §Soon-to-ship features: "None." |
| Internal links (count: `6`) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | PASS | Re-greped: exactly 6, each appearing once, unchanged from v1. Exactly 1 in the intro (L19), under the ≤2 cap; the other 5 sit inline at the tactic each belongs to. |
| Every internal blog link is root-relative `/<slug>` (trailing slash iff `blog.trailing_slash: true`; here FALSE), not `https://olgapak.com/...` (absolute = `major`) | PASS | All 6 are `](/slug)` with no trailing slash and no domain: `/digital-detox-plan`, `/how-to-stop-doomscrolling`, `/time-blocking`, `/things-to-do-instead-of-being-on-your-phone`, `/how-to-plan-your-week`, `/ai-tools`. `grep 'olgapak.com'` returns nothing. |
| External links (count: `5`) each point to reputable sources; anchor text = literal claim | PASS | Identical set to v1, each URL appearing exactly once. See per-link verdict below. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | PASS | Zero hits against the 7-URL forbidden set. Re-verified on v2, not carried over. |
| Target keyword appears 2–8 times in body (actual count: `2`) | PASS | Exact-match "reduce screen time" at L15 (intro hook) and L172 (CTA), plus the title (L2) and excerpt (L4). Variants "reduce my screen time" (L178) and "reducing screen time" (L186) in the FAQ. At the floor of the 2-8 band but passing; neither instance was disturbed by the revise. |

**§3.5 per-link verdict (re-run against draft-v2).** Forbidden set from `research/serp.md` §Selected results analyzed (7 URLs): theguardian.com/thefilter/..., harmonyhit.com, mdanderson.org/cancerwise/..., scripps.org/news_items/6310-..., healthshield.co.uk/blog/..., listsof30.com/p/..., georgetown.edu/news/digital-detox-reduce-screen-time-benefits/. Allowlist from `blog-craft.md` §Authoritative-site allowlist (`voice.md` §Additional allowlist domains: "None beyond the generic allowlist").

| Draft line | URL | In forbidden set? | Allowlist class | Verdict |
|---|---|---|---|---|
| L44 | `support.apple.com/en-gb/guide/iphone/iphbfa595995/ios` | No | Official platform docs | OK |
| L44 | `play.google.com/store/apps/details?id=com.google.android.apps.wellbeing` | No | Official platform listing (`facts.md` §Named examples row 2) | OK |
| L138 | `academic.oup.com/pnasnexus/article/4/2/pgaf017/8016017` | No | primary_source, peer-reviewed | OK |
| L158 | `www.nhlbi.nih.gov/health/educational/wecan/reduce-screen-time/index.htm` | No | `.gov` | OK |
| L168 | `www.ncbi.nlm.nih.gov/pmc/articles/PMC10353947/` | No | `.gov` / NLM | OK |

**The georgetown.edu trap is still cleanly avoided in v2.** `grep -in 'georgetown\|kushlev'` on draft-v2.md returns nothing. The study is still cited at L138 as "a two-week study published in PNAS Nexus" with the journal article linked. No regression.

**Quote-fidelity spot check on edit 5 (new in v2).** The newly quoted fragment at L56, `"your goals for this are pretty vague."`, is verbatim against `facts.md` L31 and `research/reddit.md` L118 (source string: "your goals for this are pretty vague. You want to spend less time on your phone..."), punctuation included. The material that follows is now correctly framed as paraphrase ("Their advice was to..."), so the source's "no phone for specifically 30 minutes after waking up" rendering as "no phone for the first 30 minutes after waking up" is a legitimate paraphrase rather than a misquote. The iteration-1 defect (a paraphrase wearing "they wrote" attribution) is fully resolved.

Unsourced / suspicious claims:
- None. All four iteration-1 entries (L94, L192, L50, L107) are resolved, and the replacement text introduced no new empirical claim. Closest thing to a new assertion is the mechanism clause at L67 ("you've already had the half-second you needed to notice"), which is a rhetorical figure, not a measurement, contains no digits, and asserts nothing checkable. Not flagged. See §10.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `1` | YES. L104, untouched by the diff. Canonical shape, contains the literal ` \| source:` separator, non-trivial and accurate source clause naming `research/x.md §"Use-in-post quotes"` (that section exists) and honestly stating that the quote is in facts.md while the 90-minute figure is not. §4.4 passes. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | YES. Unchanged; matches the outline's Open-questions decision to leave the 20-20-20 rule out of the post entirely. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | YES. Unchanged; the `/ai-tools` path was verifiable, so a real link is correct and no fallback marker is needed. |
| `[IMAGE:]` | `4` vs outline `4` slots | YES. Re-greped on v2: L27 remotion (two piles), L42 screenshot (dashboard), L100 ai-prompt (charging across the room), L119 ai-prompt (past the limit, then friction). Exact match on count, type and position; the diff moved none of them. §4.2a clean (no featured-image placeholder in the body; the wordpress template emits the cover via WP, not inline). §4.2b clean (the line after each placeholder is blank, then body prose, never a heading). §4.2c clean (the draft contains zero markdown tables, so the remotion slot cannot be table-redundant). |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, and `[TBD]` all return zero on v2.

## 5. Word count

- Draft: `3,030` words (body prose, excluding frontmatter, excluding the `## FAQ` block, excluding `[IMAGE:]` placeholder text). Raw figures for reference: 3,528 words after the frontmatter including FAQ; 3,165 excluding FAQ but counting placeholder text; 135 words of placeholder text; 363 in the FAQ.
- Outline target: `2,900` words (outline L221 §Word count roll-up, same basis)
- Delta: `+4.5%` (was +4.0% at iteration 1; the seven edits net-added 15 words)
- Band: `within ±10% = pass, no issue logged`

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | PASS | Both lists re-greped against v2. Zero. |
| Zero em-dashes (`—`, grep returns nothing) | PASS | Zero. |
| En-dashes (`–`) only in numeric ranges | PASS | Zero en-dashes present at all. |
| First-person throughout | PASS | Now cleaner than v1: the `one should` pronoun hit at L67 is gone. `I` / `my` / `you` throughout; no `users`, no `stakeholders`. |
| Active voice | PASS | No passive-marker hits. |
| ≥1 rhythm marker in every H2 | PASS | 7 of 7 body H2s carry a standalone-question paragraph (L36, L52, L74, L109, L123, L144, L164), and 6 of 7 also carry a bullet list. |
| ≥1 bullet list per ~300 words | PASS | 27 `^- ` bullets across 9 lists in 3,030 words, roughly one list per 337 words. Distribution unchanged from v1. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `authors.md`) | PASS | 7 of 7. Still the draft's strongest rhythm signal. |
| ≥1 concrete number or named example per major section | PASS with one noted exception | H2 1 (L23-36) still carries no number and no named example. This is outline-mandated (outline L88: "no external link in this section, the writer must NOT attach a statistic to the reframe"). Do not "fix" this. Every other section carries at least one facts.md-traceable number or a named platform. |
| No em-dash overuse | PASS | Zero occurrences. |
| Visible sentence-length variation in every section | PASS | No section approaches uniform sentence length; the substitutions preserved the local rhythm in all seven places. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| FAQ ("Is grayscale mode worth turning on?") / Step 4 | 192 (echoes 117) | `minor` | Near-verbatim internal echo introduced by edit 2. L117 already says "You'll switch grayscale back on **the morning you need to see a photo properly** and never switch it off again"; the new L192 says "it's an easy setting to switch back **the first morning you need to see a photo properly**." Same image, same nine-word clause, 75 lines apart. Origin is `review-v1.md` §9 item 2, which prescribed this exact sentence without checking it against L117, so this is the reviewer's defect, not the writer's. It does not ship wrong (the claim is accurate and unsourced-free); it just reads as a copy-paste to anyone who reads top to bottom. | Vary the FAQ clause so the two do not share wording. Suggested: `The catch is that it is an easy setting to switch back, and most people who turn it on do exactly that.` Keep L117 unchanged, it is the more vivid of the two and it earns the image first. Not blocking; the humanize pass may resolve this on its own. |

No other issues. Zero `critical`, zero `major`.

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The revise was surgical, and that itself is worth preserving.** The diff is 8 lines, all one-for-one substitutions, on exactly the seven lines the review named. No section was reworded "while in there", no paragraph was resequenced, no marker was disturbed, no link moved. Two of the checks that merely passed at iteration 1 got *stronger* as a side effect: the §1.4 first-person grep is now literally zero hits (edit 7b removed the "Opening one should" pronoun), and the timeboxing jargon translation at L111 is now genuinely the first appearance of the concept (edit 6 removed the premature "time-boxed" at L56). Whatever the process was here, it should not change on the humanize pass.
- **The cannibalization line still holds, which was the plan reviewer's blocking concern.** H2 3 (L64-72) and H2 4 (L102-107) remain at checklist depth: one action plus one sentence of why per item, no paragraph-per-tactic, linking down rather than re-hosting (`/how-to-stop-doomscrolling` at L72, `/time-blocking` at L105). `content/blog/how-to-stop-doomscrolling.md` §Layer 1 and `content/blog/digital-detox-plan.md` Days 1-3 own grayscale, notifications, home-screen burial, and the bedroom charger in full paragraph depth, and v2 still duplicates none of it. Edit 7b actively improved this: L67 no longer reuses the published sentence from `how-to-stop-doomscrolling.md` L43 ("Opening one should take a deliberate search, not a thumb reflex"), and the replacement shares no phrasing with it. Do NOT expand these two sections and do not import tactic depth from either sibling.
- **H2 5 is still the centrepiece and is untouched.** The diff does not reach it. The u/Iris_006 plus u/Icy_Flan_7185 pairing at L121 does the "you are not uniquely weak" work with two independent voices; the night-avoidance beat at L128 converts the failure from a willpower story into a feelings story; the permission line at L138 (only about a quarter fully complied, 91% still improved, correctly linked to the journal article rather than the georgetown.edu write-up) is the strongest evidence in the facts pool. Preserve L121, L128, and L138 verbatim through the humanize pass.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`; no writer pass is dispatched. The single `minor` in §7 is a phrasing nit for the humanize pass to absorb, not a revision instruction.

## 10. Reviewer notes (free-form)

**Ruling on the writer's flagged deviation (edit 7a, L146). Acceptable, not a violation.**

`review-v1.md` §9 item 7a prescribed replacing "his average last week... and he admitted most of it wasn't productive" with the singular-they version, on the stated grounds that the gender of @redhairshanks86 is not established anywhere in `research/x.md`. The writer also changed the immediately following sentence from "His phone number alone would have looked fine" to "Their phone number alone would have looked fine", which the instruction did not ask for. Ruling in the writer's favour, for three reasons:

1. **The unrequested change serves the instruction's stated intent, not something else.** The defect being removed was an unverified gender attribution. Leaving "His" one sentence later would have preserved that exact defect in the exact same three-sentence passage, which is the outcome the edit exists to prevent. An instruction to remove an unsourced attribution is not satisfied by removing two of its three instances.
2. **It is the minimal edit that makes the prescribed text coherent.** "their average... they admitted... His phone number" is a pronoun clash inside one passage about one person. Any reader notices it. The writer changed one word and added no claim, no hedge, and no new information.
3. **The writer flagged it rather than burying it.** That is the correct handling of a prescribed edit that is internally incomplete: apply the minimal consistency fix, then surface it for the reviewer to rule on.

The general rule is unchanged and should be restated to the writer for future passes: prescribed edits are applied verbatim, and deviations are permitted **only** where the prescribed text is internally incomplete or self-contradicting, must be the smallest possible change, and must be flagged. This one met all three tests. The reviewer's §9 item was the thing at fault; it should have covered the whole sentence pair.

**Ruling on the "novelty" echo (L17 / L94). Not a repetition problem. Do not change either line.**

The writer flagged that edit 1's replacement ends "once the novelty wears off" (L94) and that this echoes the intro's "once the novelty wore off" (L17), 77 lines apart. I am not logging it, and I would argue against "fixing" it:

- The two clauses are doing complementary jobs, not the same job twice. L17 is the post's promise ("what I can tell you is which of these changes actually *held* for me once the novelty wore off"). L94 is the post cashing that promise ("this tier... quietly stops working once the novelty wears off"). The repeated phrase is what makes L94 land as the answer to L17 rather than as a new disclaimer. Removing it would weaken the intro's promise more than it tightens the prose.
- The tense and subject both differ (past/first-person versus present/general), so it reads as a callback rather than as a duplicated sentence, which is what the near-verbatim L117/L192 pair in §7 does read as. That is the distinction between the two, and it is why one is logged and the other is not.
- 77 lines and roughly 1,400 words of separation is far outside the window where a reader registers a repeated stock idiom.

Contrast this with the §7 issue: L117 and L192 share a nine-word clause including the concrete detail "see a photo properly", which is distinctive phrasing, not a stock idiom. That one is a real echo. "The novelty wears off" is not.

**Minor cross-post note, not an issue.** `content/blog/digital-detox-plan.md` L206 also contains "the novelty wears off". Unlike the L67 case fixed by edit 7b (which shared a distinctive 11-word construction with `how-to-stop-doomscrolling.md` L43), this is a four-word stock idiom in two different arguments about two different subjects (a hardware purchase there, a settings tier here). No action. I checked specifically because edit 7b established that this cluster has a self-duplication history.

**Naturalness read on all seven replacements (the fresh-eyes item the editor asked for).** All seven read as written-in-place rather than pasted-in. Notes on the three that took the most scrutiny:

- **L50** ("There's usually one window doing most of the damage, and for a lot of us it's the stretch after dinner"). Reads naturally and keeps the bullet's parallel shape. One thing to be aware of but not to act on: L128 later says the feelings-driven failure "shows up most clearly at night", which is a slightly later window than "after dinner". These are compatible rather than contradictory (the after-dinner stretch runs into the night, and the intro's own scene is 9pm to 11:40, which sits in both). No fix needed. I would not swap "after dinner" back to a clock time under any circumstance; that was the sourcing defect.
- **L107** ("This is the one I'd start with"). Two lines later, L109 asks "Which one of those four would actually change your week? Pick that one. Not all four." I checked whether the recommendation undercuts the question. It does not: L107 offers a default and L109 hands the choice back, which is a normal and warm sequence in this author's voice, and the default gives a reader who cannot decide somewhere to land. It is also strictly better than what it replaced, since the old version made the same recommendation while pretending it was a population statistic. Leave both.
- **L67** ("If you have to search for an app by name, you've already had the half-second you needed to notice you didn't mean to open it"). Slightly convoluted tense ("you've already had the half-second you needed"), but it is a voice-consistent construction and it is the price of removing the duplicated published line. The "half-second" is a rhetorical figure, not a measurement; §3.1's digit grep does not catch it and no reader will read it as data. Not flagged. If the humanize pass wants to smooth one sentence in this post, this is the one, but it is optional.

**Carry-forward from iteration 1, still standing, so the editor does not re-litigate:**

- The `[VERIFY:]` at L104 is the right call and well-formed. Phase 4 guidance unchanged: if the tweet cannot be re-verified, shorten the clause to "listed this among the changes that worked for him" rather than deleting the bullet. Note that the "his" at L104 is correct and must stay; `research/x.md` L22 names that author (@aviralbhat). Only @redhairshanks86 at L146 was ungendered, and only that line was changed.
- The three bolded lead-ins at L132, L134, L136 are structural labels for one ordered ladder, not scatter-bolding. `grep -o '\*\*[^*]*\*\*'` still returns exactly three hits in the whole file. Keep them.
- The `/ai-tools` CTA link is verified root-relative with no trailing slash, matching `blog.trailing_slash: false` and seven published posts. The outline's Closing CTA line that says to use the absolute URL is the stale artefact, not the draft.
- The absence of any statistic in H2 1 is outline-mandated. Do not add one.
- The body sits at the floor of the 2-8 keyword band (2 exact matches, L15 and L172). The humanize pass must not drop either instance.

**For the editor.** This is a clean approve, not a tired-on-iteration-2 approve. The four sourcing defects that blocked iteration 1 are genuinely gone rather than reworded, nothing regressed, and the one new defect is a phrasing echo inside a single FAQ sentence that the humanize pass touches by design. Remaining human gates before publish are unchanged and unaffected by this review: Phase 4 verification of the single `[VERIFY:]` at L104, the focus keyword, and the featured image.
