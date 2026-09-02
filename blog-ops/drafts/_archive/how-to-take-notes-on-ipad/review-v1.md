# Review: how-to-take-notes-on-ipad draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v1.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/facts.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/brief.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/research/{serp,reddit,x}.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/site-conventions.md`, `blog-ops/profile/custom-instructions.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v1.md` (word count: `2,473` body prose excluding FAQ; outline target: `2,420`)
- Outline: `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1-3 sentences): The draft is materially strong and clears every forcing gate (0 critical issues, structure matches the outline exactly, 0 forbidden phrases, 0 em-dashes, 0 prices, 0 forbidden SERP links, word count +2.2%), but line 133 states a research-provenance fact that is false: the paper-feel screen protector was volunteered in the X research and in the SERP, not in the Reddit research, which contains zero screen-protector mentions. That is a `major` issue under the Step 4 tree, and `approve` requires zero majors. Everything else is `minor` and fixable in a single tight revise pass.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not applicable here.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | partial | Body is a strong match: warm, first-person, self-implicating ("I have made at least three of these myself", L137), concessive rather than salesy. The intro is the one drift: `authors.md` says "mixes punchy short sentences with longer explanatory ones for rhythm" and the intro has no short sentence anywhere (paragraph word counts 58 / 48 / 29 / 31, min sentence 29 words, mean 33.2). See §7 row 3. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep for `\b(one could\|one should\|users are\|stakeholders)\b` returns nothing. Second person used consistently for the reader. |
| Active voice (no "X was scanned" shapes) | yes | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returns nothing. The hook (L15) carries a deliberate double passive ("was bought to take notes on and is currently being used to watch television in bed"), which is the outline's own drafted wording and reads as intended irony, not drift. Not flagged. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Per-section stddev of sentence length, all far above the <4 fail threshold: intro 8.3, H2 1 9.2, H2 2 7.9, H2 3 10.3, H2 4 11.6, H2 5 9.8, H2 6 9.7, H2 7 10.6, CTA 11.4. Shortest sentence in the post is 1 word, longest 48. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | All 23 phrases from `writing-standards.md` §Forbidden phrases greped individually. `voice.md` §Additional forbidden phrases records "None beyond the generic list", so nothing extends it. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | Zero. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | yes | Zero en-dashes in the file, so vacuously clean. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

**Intro jargon check (§1.7):** pass. Intro paragraphs (L15-L21) contain none of the SEO/marketing baseline patterns (`SERP`, `funnel`, `featured snippet`, `E-E-A-T`) and none of the six entries in `audience.md` §Niche jargon translation. Separately, `audience.md` §Reading posture (translate every specialist term on first use) is honoured unusually well across the body: "annotate" (L33), "paper-feel screen protector" (L128), "palm rejection" (L131), "handwriting search" (L112), "Scribble" (L96), "Quick Notes" (L75), "Smart Selection" (L116) are each translated inline on first appearance. This is the draft's single most consistent craft strength.

**Intro-hook over-anchoring (§1.9):** not applicable. The hook is an evergreen scene (an unused iPad), not a time-bound event, so there is no hook noun phrase to over-repeat. The post reads fine in 12 months.

**Product code-literal grep (§1.8):** `modules.product` is on. `blog-ops/profile/product.md` defines no backticked internal code constants (the four tools are plain proper nouns), so there is nothing to grep for. Pass by absence.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | yes | Validated against `adapters/publish/frontmatter/wordpress.md`. `title` quoted and 58 chars; `date: 2026-08-19`; `excerpt` 152 chars (≤160); `tags` has 4 entries (`note-taking`, `note-taking app`, `students`, `productivity`), all four present in `blog.md` §Tag taxonomy as live WP terms; `authors: Olga Pak` matches the byline in `authors.md`; `draft: true` present; correctly no `cover`/`heroImage` field, which the wordpress template forbids. FAQPage JSON-LD: skipped per the skill, the wordpress-rest adapter has no adapter-level JSON-LD requirement (schema is a WP-plugin concern). |
| Title in frontmatter matches outline "Final title" exactly | yes | `How to Take Notes on an iPad: A Setup That Actually Sticks`, byte-identical to outline §Final title. Target keyword leads; 58 chars is inside `blog-craft.md`'s strict 50-60 band. |
| Slug / meta description match outline | yes | Excerpt is byte-identical to outline §Final meta description. Slug is directory-implied `how-to-take-notes-on-ipad`, matching outline §Final slug (keyword only, no year, no trigger words). |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | All seven outline H2s present in order, plus the closing-CTA H2 `Write Less, and Keep More of It`. The outline specifies a §Closing CTA block but leaves its heading text to the writer, and every published post (`charting-method-note-taking.md` L169, `time-blocking.md` L154) titles its CTA H2, so this is convention, not a delta. All four outline H3s present in order under their parent H2s. Heading wording is byte-identical to the outline; only capitalization differs (see §10 ruling 2). |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | yes | Exactly 4 paragraphs (L15, L17, L19, L21) of 2 / 1 / 1 / 1 sentences. Shape follows `blog-craft.md` §Intro structure: hook with target keyword, expertise statement drawn from `voice.md` §Credibility message ("tested, not theorized", not "I am an Apple expert"), one woven internal link, preview. Sentence *length* is the problem, not paragraph count. See §7 row 3. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Seven of the eight H2s carry a bullet or numbered list; the CTA H2 carries a concrete named example (Text Summarizer). All eight also clear the burstiness bar independently. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | yes | Five `###` items (L155, L159, L163, L167, L171), each byte-identical to the corresponding outline §FAQ block question. FAQ is the last block; nothing follows the final answer. Conclusion/CTA sits immediately before `## FAQ`, per `blog-craft.md` §Conclusion / CTA. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | n/a | The wordpress-rest adapter emits no JSON-LD; the template explicitly states FAQPage schema is a WP-plugin concern. Sub-check correctly skipped. |
| Outro / CTA paragraph present | yes | L149-L151, two short paragraphs. Links the `blog.md` §Primary CTA target with the action anchor "Try my free AI tools to automate the mundane", which reproduces the `blog.md` §Primary CTA Hook almost verbatim. No feature re-list. One product mention only. |

Structural deltas vs outline (if any):
- None. Seven H2s + CTA H2 + FAQ, four H3s, five FAQ items, four in-post image slots, five internal links and five external links all match the outline's plan exactly.
- Two non-delta observations recorded for the editor: (a) the CTA H2 title is writer-chosen because the outline left it open, matching published-post convention; (b) heading capitalization is Title Case where the outline recorded sentence case, wording unchanged. Ruled on in §10.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Every number in the body traces: "three of the five Reddit threads I read" (L45) to facts.md §Voice-of-customer themes "Appeared in 3 of 5 Reddit threads"; "70% notes and 30% cue column" (L102) to §Named examples; "In 2014" and "A 2019 direct replication" (L85, L87) to §Study findings; "4 years of uni" (L29) inside a sourced quote; the Pencil Pro feature list (L131) to §Apple feature facts. Two engagement claims were spot-checked against raw research and hold: "the highest-engagement thread I found" (L27) is reddit.md thread 1 at score 3066 / 632 comments, the top of the set, and "the most-liked reply in my whole X research" (L37) is confirmed verbatim at x.md L63 and L119. No stat was manufactured to fill the gap facts.md §Statistics deliberately records as empty. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | n/a | `modules.competitors` is off for this blog. Applying the analogous test to the six third-party apps anyway: all six are labelled by fit, not ranked, and each label traces to facts.md §App landscape (Apple Notes "correct starting point", GoodNotes "the all-rounder most people land on", Notability "the student pick", Noteful/CollaNote "the no-subscription alternatives", OneNote "if the rest of your life already lives inside Microsoft", Notion/Obsidian "notes that link to each other"). No bare dismissals. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | n/a | Module off, so no 14-day freshness rule applies. Separately confirmed: the post carries zero prices. `grep '\$'` returns nothing, and every price-adjacent word ("cost", "cheaper", "expensive", "monthly", "free") is used as a relative or pricing-model term with no figure attached. "A cheaper stylus" (L127) is facts.md §Product links' own wording. The @thefrikidude quote (L37) is the single permitted exception and names no figure. This constraint passes cleanly. |
| Product mentions (count: `1`, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | yes | Exactly one, at L151, in the closing CTA, naming Text Summarizer. Matches `plan.md`'s one-mention budget and `product.md` §Positioning recommendations (one topic-matched soft mention near the end). L149 sets up the mechanism ("I condense it first and hand-write only what survives the cut") so the mention lands on an argument the post already made, rather than being bolted on. Deletion test: removing it kills the CTA entirely. |
| Internal links (count: `5` blog-post links + `1` CTA link) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | yes | Exactly one internal link in the intro (`/note-taking-methods`, L19), inside the ≤2 ceiling and woven into a sentence rather than stacked as a "see also" list. The other four sit in the body section where each topic is actually discussed: `/best-notebooks-for-note-taking` on the paper-wins sentence (L37), `/cornell-note-taking-method` and `/charting-method-note-taking` in the methods section (L102, L106), `/how-to-stop-doomscrolling` on the notifications mistake (L143). Matches the outline's §Intro internal links table row for row. Five total is the top of `blog-craft.md`'s 3-5 band. |
| Every internal blog link is root-relative `/<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://olgapak.com/...` (absolute = `major`) | yes | All five are root-relative with no trailing slash, matching `config.yaml blog.trailing_slash: false` and `site-conventions.md` §Permalinks. Grep for an absolute cross-post link returns nothing. The `/ai-tools` CTA link is ruled on separately in §10 ruling 1. |
| External links (count: `5`) each point to reputable sources; anchor text = literal claim | yes | The five URLs are byte-identical to the outline §External link plan table: pubmed.ncbi.nlm.nih.gov (NLM, allowlist), link.springer.com, apple.com/apple-pencil (allowlist-class), amazon.com/dp/B0BSBQWDSG (clean ASIN, no affiliate tag, per `custom-instructions.md` §Content policy), paperlike.com. Anchors are literal claims on the two study links ("students taking notes on laptops did worse on conceptual questions", "a 2019 direct replication found performance did not consistently differ between any groups") and literal item names on the three product links. No outbound link sits on an app name. Inside the 3-5 band. First internal link (L19) precedes the first external link (L85). |
| Target keyword appears 2-8 times in body (actual count: `1` in body prose, `3` counting the FAQ) | partial | The exact phrase "take/taking notes on an iPad" appears once in 2,473 words of body prose (L15) and twice more in the FAQ (L155, L163). Counting the rendered page body including the FAQ gives 3, inside the 2-8 band; counting body prose on the same basis §5 uses gives 1, below the floor. Logged as `minor` in §7 rather than a fail, because Step 4's forcing list does not include keyword density and because forcing extra instances into clean prose is worse than the shortfall. See §7 row 6. |

**Forbidden external links to SERP competitors (§3.5, never module-gated):** pass, zero flags. Forbidden set extracted from `research/serp.md` §Selected results analyzed: `tech.loveholidays.com`, `support.apple.com`, `hellobrio.com`, `blog.alexanderfyoung.com`, `zapier.com`. Per-link verdict on the five links the draft renders:

| Link rendered | Host in forbidden set? | On allowlist? | Verdict |
|---|---|---|---|
| https://pubmed.ncbi.nlm.nih.gov/24760141/ | no | yes (NLM, `.gov`) | clean |
| https://link.springer.com/article/10.1007/s10648-019-09468-2 | no | academic publisher, not a ranking competitor for this keyword | clean |
| https://www.apple.com/apple-pencil/ | no (the SERP entry is `support.apple.com`, a different host and path) | yes (apple.com official docs) | clean |
| https://www.amazon.com/dp/B0BSBQWDSG | no | product link mandated by `custom-instructions.md` §Content policy | clean |
| https://paperlike.com/products/paperlike-for-ipad | no | product link, brand page per facts.md §Product links | clean |

Zero links to `zapier.com`, `hellobrio.com`, `tech.loveholidays.com`, or `blog.alexanderfyoung.com`. The `hellobrio` screen-protector mechanism (serp.md L180) was correctly reused as an unattributed plain-language explanation (L133) rather than linked.

**Invented-number check (§3.8):** pass. Greped for audience-size ranges (`\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`), "N+" adoption claims, and migration/volume ranges. Zero hits. The post contains no fake precision. Notably, facts.md §Rejected bars the "85% of iPad owners" figure and the draft does not use it anywhere.

**Own-product pricing claims (§3.9):** pass. Grep for `\$\d` returns nothing; no usage caps, no tier names. The CTA says "free AI tools", which is the durable framing `blog-craft.md` §Own-product pricing claims asks for.

**Soon-to-ship feature gap check (§3.10):** pass by absence. `brief.md` §Soon-to-ship features records "None", so there is nothing to flag as a gap.

**Post-specific constraint audit (the four failure modes the editor flagged):**

1. **No prices.** PASS, clean. Detailed above. Zero figures anywhere including the FAQ; the @thefrikidude exception is used correctly.
2. **Handwriting research not overclaimed.** PASS, and this is the strongest section in the post. L85 states the 2014 finding, then immediately: "Notice what that study actually compared: longhand on paper against a laptop keyboard. It did not test tablets or styluses at all." The scope guard is visible, in the same paragraph, in plain language. L87 pairs the 2019 direct replication including the no-notes group and the authors' own "premature" verdict. L89 lands the line that survives both papers. FAQ L169 repeats the honest framing ("The memory research is contested, so do not decide on that"). Citing 2014 alone would have been critical; the draft does the opposite and is more careful than facts.md strictly required.
3. **No "best app" verdict.** PASS. L45 says it out loud: "There is no best note-taking app for an iPad, and I am not going to pretend otherwise." FAQ L157 refuses again: "There isn't one, and anyone crowning a single winner is guessing." Every app is labelled by fit against a facts.md §App landscape row. No ranking, no numbered app list, no winner.
4. **Voice-of-customer attribution.** MOSTLY PASS, one gap. Correct attribution frames throughout: "wrote one redditor" (L27), "Another redditor came back with" (L29), "someone on X put it more strongly" (L29), "The most-liked reply in my whole X research" (L37), "as one redditor put it" (L45), "one redditor wrote" / "Someone on X described" (L142), "Someone on X compressed" (L143). The GoodNotes data-loss material (L50) is framed exactly as facts.md demands: "some readers report losing notes. Those data-loss reports are complaints readers raise rather than anything I can verify." That is model handling. The one gap is the professor sentence at L142, which asserts an X-sourced third-party event with no attribution frame while the two quotes immediately around it carry one. Logged as `minor` in §7 row 2.

Unsourced / suspicious claims:
- `draft-v1.md:133`, "both my Reddit and my X research volunteered it independently, without me going looking", issue: **false provenance claim.** `research/reddit.md` contains zero occurrences of "paperlike", "screen protector", or "matte" (greped). The two independent sources per facts.md §Named examples are X (@ManishPushkar, x.md L31/L106-107) and the SERP (hellobrio, rank 4, serp.md L89/L180). The claim is presented as first-hand methodology evidence, which makes it an E-E-A-T assertion rather than a stylistic flourish. Logged `major`, §7 row 1.
- `draft-v1.md:142`, "There is even a professor who banned tablets for note-taking in his class", issue: stated as established fact with no source frame. The event is single-sourced to one X post by the affected student (`research/_raw/x-07-antlerposter.json`). Note for the writer: the male pronoun IS supported by the raw capture ("he pointed it out to me", "i told him this"), so only the attribution frame needs fixing, not the pronoun. Logged `minor`, §7 row 2.
- No other claim in the draft failed to trace. Every Apple feature statement (L70 auto-titling, L74 iCloud sync, L75 Quick Notes, L96 Scribble, L112 handwriting search "in supported languages", L116 Smart Selection, L120 finger-or-Pencil, L131 Pencil Pro feature split) maps to a verified verbatim row in facts.md §Apple feature facts.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | n/a, and correct. Every claim the post makes traces to facts.md, so there was nothing to defer. No missing `| source:` clause is possible. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | yes. All five planned external links were resolvable and are rendered. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | yes. All five internal targets are confirmed live in `content/blog/`. No link to the three unpublished slugs facts.md bars (`digital-vs-paper-notes`, `ai-note-taking`, `best-pens-for-note-taking`). |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | yes, all four correct. |

Per-placeholder image audit:

| Line | Slot | Featured-hygiene (2a) | Placement (2b) | Table-redundant chart (2c) |
|---|---|---|---|---|
| 43 | after H2 2 + 1 para, `pick-one-app.png`, ai-prompt | clean, filename is not `featured.*` and the concept (floating app icons, choosing one) is distinct from the outline's featured concept | clean, sits after the heading and its first body paragraph; next line is prose, not a heading | n/a, not remotion |
| 83 | after H2 4 + 1 para, `handwrite-or-type-decision.png`, remotion | clean | clean | clean, zero markdown table lines within ±20 lines, and the outline pre-checked this |
| 122 | after H2 6 + 1 para, `gear-tiers-flat-lay.png`, ai-prompt | clean, a gear flat-lay is distinct from the featured desk scene | clean | n/a |
| 139 | after H2 7 + 1 para, `ipad-playing-video.png`, ai-prompt | clean | clean, next content line is a numbered list, not a heading | n/a |

Type mix also honours `custom-instructions.md` §Image style: exactly one `remotion` slot, used for a genuine diagram, and three `ai-prompt` slots for scenes. No blanket conversion.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greped for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`: zero hits. All four `[IMAGE:]` markers carry the full canonical shape including `Type:` and `Suggested filename:`.

## 5. Word count

- Draft: `2,473` words (body prose after the closing frontmatter `---`, from the intro through the end of the closing CTA, excluding the `## FAQ` block and excluding the four `[IMAGE:]` marker lines, which are production instructions rather than prose)
- Outline target: `2,420` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+2.2%`
- Band: `within ±10% = pass, no issue logged`

Supporting numbers: raw `wc -w` on the whole file is 3,061; body prose including the image markers is 2,631; the FAQ block is 366 words. The FAQ runs long against the outline's ~200-word estimate, but the outline explicitly lists FAQ length as "NOT part of the gated total", so it does not affect this band. Noted in §10 as a trim candidate only if the editor wants one. The draft also sits inside `blog-craft.md`'s how_to matrix band (1500-2500) and the outline's own 2,200-2,500 target.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | Both lists greped; `voice.md` adds none. |
| Zero em-dashes (`—`, grep returns nothing) | yes | Zero. |
| En-dashes (`–`) only in numeric ranges | yes | Zero en-dashes in the file. |
| First-person throughout | yes | No third-person drift markers. |
| Active voice | yes | Only the intentional hook passive at L15. |
| ≥1 rhythm marker in every H2 | yes | 7 of 8 H2s carry a list; the CTA H2 carries a named concrete example. |
| ≥1 bullet list per ~300 words | partial | 7 lists (18 `- ` bullets + 5 numbered items) across 2,473 words = one list per ~353 words, slightly under the 1-per-300 target. Every H2 except the CTA carries one, so no section reads as a wall of text. Not logged as an issue. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | partial | Three in the body: "Not sure?" (L62), "So what survives both papers?" (L89), "Which methods genuinely gain from a tablet?" (L104). Absent from H2 1, H2 3, H2 6, H2 7 and the CTA. `authors.md` does not mandate rhetorical questions, but `voice.md` §Lexicon lists "Reader-directed rhetorical hooks" as a signature move. Logged `minor`, §7 row 7. |
| ≥1 concrete number or named example per major section | yes | H2 1 the Reddit/X quotes; H2 2 six named apps + "three of the five Reddit threads"; H2 3 the auto-titling and Quick Notes behaviours; H2 4 the 2014 and 2019 papers; H2 5 the 70/30 Cornell split; H2 6 the named Pencil Pro feature list; H2 7 five named mistakes with three named quotes; CTA the Text Summarizer. |
| No em-dash overuse | yes | Zero occurrences, so nothing to overuse. |
| Visible sentence-length variation in every section | yes | Section stddevs 7.9 to 11.6, all roughly double the <4 fail threshold. The intro passes on stddev (8.3) but fails the spirit of the rule because its floor is 29 words rather than a short beat; see §7 row 3. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| The Gear That Earns Its Place | 133 | `major` | "both my Reddit and my X research volunteered it independently, without me going looking" is false. `research/reddit.md` contains zero mentions of a screen protector, Paperlike, or a matte film. Per `facts.md` §Named examples the two independent sources are X (@ManishPushkar) and the SERP (hellobrio, rank 4). Stating it as Reddit-plus-X is an invented corroboration claim about the post's own research method, which is exactly the kind of credibility signal a reader cannot check. | Replace `and both my Reddit and my X research volunteered it independently, without me going looking` with `and it came up unprompted in my X research and again in the other guides I read, without me going looking`. Keep the rest of the sentence and the whole mechanism explanation that follows exactly as written. |
| The Mistakes That Turn an iPad Into an Expensive Netflix Screen | 142 | `minor` | "There is even a professor who banned tablets for note-taking in his class" asserts a specific third-party event as established fact with no attribution frame, while the two quotes immediately before it in the same list item are both correctly attributed. The event is single-sourced to one X post by the student it happened to. The male pronoun is fine, it is supported by the raw capture, so do not change it. | Replace `There is even a professor who banned tablets for note-taking in his class because a past student` with `One student on X even described a professor who banned tablets for note-taking in his class because, he was told, a past student`. Leave the quoted phrase and the "Fix:" line untouched. |
| (Intro) | 15-21 | `minor` | The intro has no short sentence anywhere: its four paragraphs run 58 / 48 / 29 / 31 words and its shortest sentence is 29 words. `authors.md` specifies a voice that "mixes punchy short sentences with longer explanatory ones for rhythm", and `voice.md` evidences one-word beats. The expertise paragraph (L17) is a single 48-word sentence, the longest in the post, sitting at the highest-bounce position on the page. | Split L17 into two sentences at the comma before "so I came to the iPad", giving something like: `I write about productivity systems, and I have spent the last year working through the paper note-taking methods on this blog. So I came to the iPad already knowing what I wanted my notes to do, and which parts of paper I was not willing to give up.` Do not lengthen the intro; the word budget is already at target. |
| (Frontmatter / Step headings) | 4, 39-98 | `minor` | The excerpt promises "the 5-step routine that survives a real term" but the body labels only four steps (Step 1 through Step 4). The five are really H2 1 plus Steps 1-4, and the intro gestures at this with "the five decisions you make in the first hour", but a reader counting "Step N" headings finds four. The excerpt and the H2 wording are both locked, so the fix has to be the bridge sentence. | Change the preview sentence at L21 from `This guide covers the setup steps in order` to `This guide covers all five in order, starting with whether the iPad is even the right tool`. Do not renumber any heading, do not edit the excerpt, and do not add a fifth Step heading. |
| Step 1: Pick One App and Stop Shopping | 58 | `minor` | "Worth saying out loud, because nobody else does: Notion and Obsidian appear in none of the top-ranking guides for this search" is search-industry framing pointed at a reader who came to learn note-taking. The observation itself is sourced and worth keeping (facts.md §App landscape: absent from all 5 fetched SERP results); only the "who ranks for this search" lens is off-register for `audience.md`, which asks for plain reader-facing language. | Rewrite L58's first sentence as `Almost nobody writing about iPad note-taking mentions either of these two, and that is a gap rather than an accident.` Keep the second sentence ("They are structure tools rather than handwriting tools...") exactly as written. |
| (Whole body) | n/a | `minor` | The exact target phrase "take/taking notes on an iPad" appears once in 2,473 words of body prose (L15); the other two body occurrences are both inside the FAQ. Rendered-page count is 3, inside `blog-craft.md`'s 2-8 band, so this is a thin pass rather than a failure. One more natural placement would help the Rank Math focus keyword the operator sets before publishing. | Only if it lands naturally: in the H2 5 opener at L100, change `Every method I have written about on this blog runs on an iPad` to `Every method I have written about on this blog works when you take notes on an iPad`. If that reads forced, leave L100 alone and change nothing. Do not add the phrase anywhere else, and do not touch any heading. |
| (Multiple) | n/a | `minor` | Standalone-question paragraphs appear in only three body sections (L62, L89, L104). H2 1, H2 3, H2 6 and H2 7 have none, and `voice.md` §Lexicon lists reader-directed rhetorical hooks as a signature move for this voice. | Add exactly one standalone question as its own paragraph, in H2 6 immediately before the gear list at L124, phrased as `So what actually earns a place in the bag?` Do not add questions to any other section; three more would read as a tic. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The study section (L85-L89) is the best-executed part of the post and must not be touched.** It states the 2014 Mueller and Oppenheimer finding, then immediately names the scope limit in the reader's own language ("Notice what that study actually compared: longhand on paper against a laptop keyboard. It did not test tablets or styluses at all."), then pairs the 2019 direct replication including the no-notes group and the authors' "premature" verdict, then lands the line that survives both papers. Both links are literal-claim anchors to primary sources. This is stricter than facts.md required and it is the whole reason the post is publishable on a topic saturated with pop-science overclaims. Change nothing in these five lines.
- **The GoodNotes data-loss handling at L50 is the exact framing facts.md demanded, word for word in spirit:** "Those data-loss reports are complaints readers raise rather than anything I can verify, but they come up often enough that you should back up anything you cannot afford to lose." It reports the objection, refuses to assert it as a product defect, and still gives the reader an action. Do not soften it, do not strengthen it, do not cut it.
- **Jargon translation is done inline and invisibly across the entire body, not dumped in a glossary.** "annotate, meaning write and highlight directly on the document the way you would on a printout" (L33), "a matte film you stick over the screen to add a little friction" (L128), "palm rejection, which simply means the screen ignores the hand you rest on it while you write" (L131), "you type a word, and the app finds the page where you wrote it by hand, months ago, in your own scrawl" (L112). This satisfies `audience.md` §Reading posture and the brief's explicit avoid-list item, and it is the single most consistent craft decision in the draft. Preserve every one of these gloss clauses.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 133 states a false research-provenance claim. The paper-feel screen
   protector was volunteered in the X research and in the SERP guides, NOT in
   the Reddit research, which contains zero screen-protector mentions.
   Replace `and both my Reddit and my X research volunteered it
   independently, without me going looking` with `and it came up unprompted in
   my X research and again in the other guides I read, without me going
   looking`. Keep the rest of that sentence and the entire mechanism
   explanation that follows exactly as written.

2. Line 142 asserts the professor anecdote as established fact with no
   attribution, unlike the two quotes around it. Replace `There is even a
   professor who banned tablets for note-taking in his class because a past
   student` with `One student on X even described a professor who banned
   tablets for note-taking in his class because, he was told, a past student`.
   Leave the quoted phrase and the `Fix:` line untouched. Do NOT change the
   male pronoun; it is supported by the raw source.

3. Line 17 is a single 48-word sentence, the longest in the post, sitting in
   the intro. Split it at the comma before "so I came to the iPad":
   `I write about productivity systems, and I have spent the last year working
   through the paper note-taking methods on this blog. So I came to the iPad
   already knowing what I wanted my notes to do, and which parts of paper I
   was not willing to give up.` Do not lengthen the intro overall.

4. Line 21 leaves the excerpt's "5-step routine" promise unbridged, because
   the body labels only Step 1 through Step 4. Change `This guide covers the
   setup steps in order` to `This guide covers all five in order, starting
   with whether the iPad is even the right tool`. Do NOT renumber any heading,
   do NOT edit the excerpt, and do NOT add a fifth Step heading.

5. Line 58 opens with search-industry framing. Rewrite its first sentence as
   `Almost nobody writing about iPad note-taking mentions either of these two,
   and that is a gap rather than an accident.` Keep the second sentence
   ("They are structure tools rather than handwriting tools...") exactly as
   written.

6. Add exactly one standalone-question paragraph in H2 6, immediately before
   the gear list at line 124: `So what actually earns a place in the bag?`
   Do not add rhetorical questions anywhere else.

7. Optional, only if it reads naturally: at line 100, change `Every method I
   have written about on this blog runs on an iPad` to `Every method I have
   written about on this blog works when you take notes on an iPad`. If that
   reads forced, leave line 100 exactly as it is and skip this item.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked. Do NOT
change heading capitalization; Title Case is correct. Do NOT change the
/ai-tools CTA link; root-relative is correct for this blog. Do NOT touch
lines 85-89 (the study section), line 50 (the GoodNotes framing), or any of
the inline jargon glosses.

Produce blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md. Do not
overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

**Ruling 1, the `/ai-tools` CTA link: leave it as it is. No change.**

`blog-craft.md` §Internal linking splits links two ways: blog posts get root-relative `{route_prefix}<slug>`, and "the app/marketing site (`/signup`, homepage, `/#pricing`)" gets absolute `https://yourblog.com/...`. That second rule exists for blogs whose app or marketing site lives on a different host from the blog, which is the shape the rule was written against. olgapak.com is not that shape: `config.yaml` sets `route_prefix: /`, so posts render at `olgapak.com/<slug>` and `/ai-tools` is a page on the exact same host. `site-conventions.md` §Permalinks is the blog-specific doc governing this case and it says plainly: "Internal links (both outbound in the post and inbound added to other posts) are root-relative with NO trailing slash." A per-blog profile doc beats a generic standard written for a different topology.

The published corpus backs this rather than contradicting it. Across `content/blog/` there are 8 root-relative `/ai-tools` links and 4 absolute `https://olgapak.com/ai-tools` links, and the split tracks recency: the older posts (`cornell-note-taking-method`, `mind-mapping-note-taking-method`, `best-notebooks-for-note-taking`) use absolute, while every recent one (`charting-method-note-taking`, `time-blocking`, `how-to-plan-your-week`, `how-to-stop-doomscrolling`, `digital-detox-plan`) uses root-relative. `best-notebooks-for-note-taking.md` is the older convention, not the current one, so it is the wrong post to standardize on. Both forms resolve identically for readers either way, so this was never a functional risk. No replacement string needed; keep `(/ai-tools)`.

**Ruling 2, Title Case headings: the draft is right, the outline was the loose record. But the premise offered for it is wrong and should not be reused.**

The draft is correct, and the reason is `writing-standards.md` §Formatting, which states flatly: "Title case for headings on blog, LinkedIn, newsletter." That is the binding rule, and it is why §2's H2-order check passes: the heading *wording* is byte-identical to the outline in all eleven cases (seven H2s, four H3s), only capitalization differs, and capitalization is not structure. The outline itself is internally inconsistent on this point, recording sentence-case H2 strings while writing its own Final title in Title Case, which confirms the H2 strings were transcription rather than a case directive.

Correcting the supporting premise, because it will misfire if reused: it is **not** true that every published post in `content/blog/` uses Title Case. Six of the nine use sentence case (`best-notebooks-for-note-taking`, `cornell-note-taking-method`, `digital-detox-plan`, `how-to-plan-your-week`, `how-to-stop-doomscrolling`, `time-blocking`) and only three use Title Case (`charting-method-note-taking`, `mind-mapping-note-taking-method`, `note-taking-methods`). The corpus is genuinely split. The ruling therefore rests on the standard, not on corpus precedent, and the corpus is the thing that is out of line. Separately, the draft's FAQ questions are in sentence case while its body headings are Title Case, which looks inconsistent inside one document but exactly matches house convention: `charting-method-note-taking.md` does the same thing (Title Case H2s, sentence-case FAQ questions). Correct as written, no change.

**Other notes for the editor:**

- **The one real defect is a research-provenance error, not a content error.** Worth registering as a pattern: the writer got every quote attribution right seven times out of eight and got every fact right, then invented a claim about where its own research came from. That class of error is invisible to a facts.md cross-check because facts.md §Named examples records the sources correctly; catching it needed a grep against `research/reddit.md` itself. If this recurs on a future post, it may be worth adding a standing check on any sentence of the form "my X and my Y research both...".
- **The FAQ runs 366 words against the outline's ~200 estimate.** Not gated, since the outline explicitly excludes the FAQ from the roll-up, and the length is going into substance rather than padding (the "best app" answer refuses to crown a winner and explains why, which is the post's thesis). Leave it unless the editor wants a trim for its own sake.
- **"Apple's own documentation says..." appears twice (L120, FAQ L165) without a link, and that is correct.** `plan-review.md` records the decision: the two `support.apple.com` citations were cut at the plan gate to stay inside `blog-craft.md`'s 3-5 external link cap, and the draft already renders exactly 5. Adding a sixth to link the Apple doc would break the cap. Flagging it here only so it is not "fixed" by a later pass.
- **`mind-mapping-note-taking-method` is available in facts.md §Internal links but goes unlinked** even though L107 discusses mind maps directly. The outline locked the link plan at five and the draft honoured it, so this is not a defect. Noting it as a candidate if a future refresh wants a sixth internal link, since the anchor sentence already exists.
- **The plan-review's drafting-craft note was honoured.** It warned that H2 3's Apple facts (auto-titling, iCloud sync, Quick Notes) are "organizational-adjacent but not the thing the H2 is actually teaching" and asked for them to be woven in rather than force-fitted as an evidentiary backbone. L70 uses auto-titling as a naming-convention aside and L74-L75 demote sync and Quick Notes to two setup bullets, which is exactly what was asked for. Worth noting the carry-forward worked.
- **Nothing in this review requires re-running research, re-checking a fact, or touching the outline.** All seven items are line edits inside `draft-v1.md`. Iteration 2 should be short.
