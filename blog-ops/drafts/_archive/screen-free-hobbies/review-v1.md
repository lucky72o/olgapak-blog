# Review: screen-free-hobbies draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/screen-free-hobbies/draft-v1.md`, `blog-ops/drafts/screen-free-hobbies/outline.md`, `blog-ops/drafts/screen-free-hobbies/facts.md`, `blog-ops/drafts/screen-free-hobbies/brief.md`, `blog-ops/drafts/screen-free-hobbies/plan.md`, `blog-ops/drafts/screen-free-hobbies/research/serp.md`, `research/reddit.md`, `research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/custom-instructions.md`, `blog-ops/profile/site-conventions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/screen-free-hobbies/draft-v1.md` (word count: `2,988` body prose excluding frontmatter, FAQ, headings and `[IMAGE:]` lines, `3,188` on the editor's inclusive basis; outline target: `3,260`)
- Outline: `blog-ops/drafts/screen-free-hobbies/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1-3 sentences): No forcing condition fired and no issue rises above `minor`, so this is a near-approve, but §6's humanization floor is not fully green (only two reader-directed questions in the whole body, neither standing alone as its own paragraph, against an author voice that names rhetorical hooks as a signature) and seven small issues remain, two of which sit on the post's two load-bearing promises: its sourcing discipline (line 67) and its hobby-versus-filler carve-out (line 52). The three risks the editor flagged as most likely to sink this post (external-link overclaim, invented numbers, audience drift) all held clean, so a single tight revision pass should clear this to approve.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | Pass with note | First person throughout, the career-pivot anecdote is used twice and both times argues the post's thesis rather than flexing (lines 16, 102). But the register runs cooler and more essayistic than authors.md's "warm, encouraging, lightly self-deprecating". None of voice.md's documented beats appear: no "Do you ever feel...?" hook, no punchy one-word rhythm break, no "From personal experience...". The nearest warm beats are "expect the first square to be a trapezoid" (69) and "Singing (Free). Costs nothing, embarrasses everyone" (105), and they are good; there are just too few of them. Logged as minor issue 6. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Grep for `one could\|one should\|users are\|stakeholders`: zero hits. Second person addresses the reader consistently. |
| Active voice (no "X was scanned" shapes) | Pass | Grep for `was (scanned\|checked\|monitored\|built)`: zero hits. No passive drift found on manual read either. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Sentence-length standard deviation by section: intro 10.5, H2 1 9.4, H2 2 7.4, H2 3 7.0, H2 4 7.2, H2 5 6.1, H2 6 8.7, H2 7 9.9, H2 8 9.7, H2 9 11.0, CTA 11.9, FAQ 12.0. Every section is far above the <4 uniformity threshold. Shortest sentence 1 word, longest 41. This is the draft's strongest mechanical quality. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Both lists greped: `writing-standards.md` §Forbidden phrases (23 entries) and `voice.md` §Additional forbidden phrases (explicitly "None beyond the generic list"). Zero hits. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | Pass | `grep -o '—' draft-v1.md \| wc -l` returns 0. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | Pass | Zero en-dashes present, so the range condition is vacuously satisfied. |
| Intro jargon (per `writing-standards.md` §Insider-jargon translation + `audience.md` §Niche jargon translation) | Pass | No SEO/marketing jargon in the intro. None of audience.md's six listed insider terms (SERP, DR, keyword difficulty, Parkinson's Law, timeboxing, kanban board) appears anywhere in the body. The one niche term the post does use, "analog hobbies", is deliberately held back to H2 1 and translated inline on first use at line 40 ("which just means the activity happens off a screen, with your hands, in the actual room"), exactly as `plan.md` §Tone hooks and audience.md §Reading posture require. |
| Product code-literal grep (modules.product on) | Pass | `product.md` defines no backticked internal code constants; the product surface is four named consumer tools. Nothing to leak. |
| Intro-hook over-anchoring | N/A | The intro hook is a competitive-positioning observation ("Most lists of screen-free hobbies hand you a wall of nouns"), not a time-bound event peg. No date, launch, price change or news hook to over-anchor on. The post carries no year stamp anywhere, which `brief.md` §Avoid list requires. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | Pass | Checked against `adapters/publish/frontmatter/wordpress.md`. `title` quoted and 53 chars (blog-craft wants 50-60), `date: 2026-09-02` in `YYYY-MM-DD`, `excerpt` 136 chars (≤160), `tags` 3 entries all present in `blog.md` §Tag taxonomy with exact lowercase WP term names (`productivity`, `time management`, `students`), `authors: Olga Pak` matches the byline in `authors.md`, `draft: true` present. No `cover`/`heroImage` field, which this adapter requires to be absent (featured image ships via media upload as `featured_media`). No FAQPage JSON-LD requirement at the adapter level, so that sub-check is correctly skipped for `wordpress-rest`. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `51 Screen-Free Hobbies to Try When Scrolling Gets Old`, character-for-character. Title case, odd-number listicle prefix, target keyword in position 2, no semicolon, no em-dash. |
| Slug / meta description match outline | Pass | Slug `screen-free-hobbies` (directory name; the WP template defines no frontmatter slug field, staging derives it). `excerpt` reproduces the outline's Final meta description verbatim. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | Pass | All nine outline H2s present, verbatim, in order (lines 22, 42, 61, 80, 98, 113, 126, 139, 154). The tenth H2, `Pick one, and give it a night this week` (168), is the outline's §Closing CTA block and matches house convention: `how-to-reduce-screen-time.md` closes on `## Pick one tier and do it tonight` and `how-to-stop-doomscrolling.md` on `## Reclaim the hours, then spend them on purpose`, both immediately before `## FAQ`. Not counted as an addition. No `# ` H1 duplicated in body. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | Pass | Four paragraphs (14, 16, 18, 20), two sentences each, 179 words against the outline's ~200. Shape is exactly hook / expertise / internal link / preview. Target keyword lands in the first sentence. One internal link in the intro, under the ≤2 ceiling and well clear of a "see also" stack. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | Pass | Seven sections carry bullet lists (62 bullets total). H2 9 has no bullets but opens on a standalone question (158) and cites a checkable internal number ("the twelve entries in the free section"). The CTA has no bullets but names a concrete example (Email Generator) and varies 3-word to 32-word sentences. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | Five `###` questions, verbatim matches to the outline's five, in the same order. Within blog-craft's 3-5. FAQ is the last block; nothing follows line 194. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | `wordpress-rest` emits no JSON-LD at the adapter level; the frontmatter template states FAQPage schema is a WP-plugin concern. Sub-check correctly skipped. |
| Outro / CTA paragraph present | Pass | Two short paragraphs (170, 172), immediately before `## FAQ`, 88 words. Links `/ai-tools` with the action anchor "try my free AI tools to automate the mundane", which reproduces `blog.md` §Primary CTA's hook. No feature re-list. No affiliate disclosure, correct: the post carries no tagged Amazon link, so `site-conventions.md` §Post furniture's disclosure rule does not fire. |

Structural deltas vs outline (if any):
- None. This is the cleanest structural match I have seen from a draft on this blog: nine H2s verbatim, five FAQ questions verbatim, title and meta verbatim, image slots placed exactly where the outline's placement plan said (after each named H2 plus one paragraph, at lines 26, 65, 84, 143).
- Entry count verified independently by parsing the bulleted entries: 12 + 10 + 9 + 8 + 6 + 6 = 51, matching the number in the title. Every entry's cost tier also matches the tier the outline assigned it, with zero drift across all 51.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | Full number sweep run over the body. Zero statistics of any kind, which is correct: `facts.md` §Statistics is deliberately empty and the standing warning bars importing screen-time, attention-span or wellbeing figures from memory. Nothing of that shape appears. The numbers that do appear are one of four safe classes: (a) the entry count 51, verified against the list itself; (b) the author's own biography ("eight years in aviation PR", lines 16 and 102, from `voice.md` §Personal-anecdote bank); (c) research-process claims that trace to facts.md, checked one by one below; (d) instructional quantities in the writer's own voice ("three constellations", "one minute running, two walking", "twenty minutes"), which carry no factual load. |
| Research-process claims traced | Pass | Line 44 "the biggest thread I read on cheap, offline hobbies": r/povertyfinance scores 763/642 comments, the largest in `research/reddit.md`. "Walking, running and hiking came top by a distance": top comment score 659 against 277 for the next, so "by a distance" is supported, not embellished. Line 82 "top or near-top answer in three of the five Reddit threads": matches reddit.md's 3/5 exactly. Line 82 "the most-engaged post on the subject on X was a man simply listing what he had planted this year": `research/x.md` records @longislandviper (Colin Moriarty) at 993 likes, "by far the most-engaged organic post in the set", posting about daisies, flowers, shrubs and trees. Line 128 "The person who started the biggest thread ... said flatly ... that they did not have any friends either": the r/povertyfinance OP wrote "I don't have any friends either" in the same paragraph as the hobby ask. All four hold. |
| Quote fidelity | Pass | All six quoted passages are verbatim against `facts.md` §Quotes with correct handle and subreddit attribution: lines 38, 63, 86, 148, 150, 156. Line 150's X quote is truncated to "cozy, screen-free hobbies (minus the switch)", dropping the source's "in 2026 so far" tail; the retained fragment is verbatim and the truncation removes a year stamp `brief.md` §Avoid list bars. Good judgment, keep it. |
| Competitor mentions framed "best for [segment]" | N/A | `modules.competitors` is off for this blog (`config.yaml`). No competitor profiles exist and none are named in the draft. |
| Pricing / feature claims about competitors match `facts.md` values | N/A | Same reason. |
| Product mentions (count: `2`, `modules.product` is on) are each earning their place | Pass | "my free AI tools" and "The Email Generator", both inside the closing CTA, both at line 172. Deletion test: remove either and the sentence loses its subject. Well under the 3-5 normal band, and the placement obeys `brief.md`'s hard constraint of at most one soft mention at the end. No mid-post plug anywhere in the 51 entries. The bridge is time, not features ("part of your screen time is admin that has to happen regardless"), which is exactly the honest bridge `brief.md` §Product features specified for a screen-free post recommending screen-based tools. No AI tool is framed as a hobby. |
| Own-product pricing claims | Pass | Grep for `$` returns only lines 86 and 156, both Reddit quotes. No price, tier, usage cap or feature-by-tier breakdown for Olga's tools. "free AI tools" is the durable framing blog-craft asks for. |
| Soon-to-ship feature gap check | N/A | `brief.md` §Soon-to-ship features lists "None". |
| Internal links (count: `5` blog posts, plus the `/ai-tools` CTA) placed contextually per `blog-craft.md` | Pass | `/how-to-reduce-screen-time` (18, intro), `/things-to-do-instead-of-being-on-your-phone` (28, H2 1 carve-out), `/digital-detox-plan` (28, H2 1), `/how-to-plan-your-week` (147, H2 8), `/time-blocking` (147, H2 8). Five is the top of blog-craft's 3-5 band. Every one sits in the section where its topic is actually discussed, and each of the five was named in `brief.md` §Internal link targets, so all are confirmed live. No `[INTERNAL_LINK_NEEDED:]` needed. First internal link (18) precedes first external link (40). |
| Every internal blog link is root-relative `/<slug>` with no trailing slash | Pass | All six are root-relative, no trailing slash, matching `blog.route_prefix: /` and `blog.trailing_slash: false`. Grep for absolute `https://olgapak.com/...` cross-post links: zero hits. |
| External links (count: `3`) each point to reputable sources; anchor text = literal claim | Pass | Three, the floor blog-craft sets and the number the outline planned. All three are the exact URLs and exact anchors from the outline's §External link plan. Scope audit below. |
| No external link points to a top-10 SERP URL | Pass | Forbidden set extracted from `research/serp.md` §Selected results analyzed: vogue.co.uk, theguardian.com/thefilter, theworks.co.uk, theeverygirl.com, mudita.com, gamequitters.com, plus the r/simpleliving thread ranking organically at #2. The draft's three external hosts are corp.oup.com, health.harvard.edu and mind.org.uk. Zero intersection. Reddit and X appear only as plain-text quote attribution with no hyperlink, which is stricter than the outline required and is the right call given the #2 organic Reddit result. |
| Target keyword appears 2-8 times in body (actual count: `6`) | Pass | Six exact "screen-free hobbies" in body prose, plus one singular "screen-free hobby" (line 24), plus two in the FAQ. Six in body prose sits comfortably inside blog-craft's 2-8, and four of the six are inside H2 headings where they read naturally. No stuffing. |

**External-link scope audit** (the editor flagged this as the post's likeliest failure mode; `facts.md` §Rejected documents all three risks):

1. **Harvard Health, line 67.** Anchor: `Mindfulness practice supports focus`, identical to the outline's planned anchor and correctly scoped to mindfulness practice, never to hobbies. The setup sentence reproduces the outline's scope-safe construction almost verbatim ("These hobbies borrow the thing mindfulness practice trades on: attention with somewhere to sit"), which is an analogy, not a transfer of the finding. The conditional link therefore survives its scope test and the outline's substitution path correctly did not fire. **One residual problem:** the citation and an uncited effect claim about crochet share a single comma-joined sentence, which puts "so your attention stops shopping for the next notification" inside the citation's blast radius for a skimming reader. Logged as minor issue 1. The scope itself is sound; only the sentence boundary needs moving.
2. **Mind, line 82.** Anchor: `spending time in nature is good for your mental health`, scoped to nature exactly as `facts.md` §Available for external linking row 1 requires. The surrounding prose says gardening "puts you outdoors on purpose" and then makes the nature claim; it never says gardening improves your mental health. No leak. Clean pass, no action needed.
3. **Oxford University Press, line 40.** Anchor: `named "brain rot" its word of the year`, with no year stated, which is what `facts.md`'s ⚠️ flag demanded since the year reached research via The Guardian's citation rather than a direct read. The claim is true to the source. **The problem is the bridge, not the scope:** "The phrase caught on for a reason" refers to "analog hobbies", but the OUP fact is about a different phrase, so the citation is positioned as evidence for a vocabulary-popularity claim it does not support. Logged as minor issue 2.

Unsourced / suspicious claims:
- `draft-v1.md:166`, "four of those across a week is more practice than most people manage in a month of good intentions", issue: `unsourced comparative claim about "most people" in the one section the outline explicitly fenced to reasoned guidance with no prevalence claim. Rhetorical rather than statistical, so minor, but it is the only sentence in the post that reaches for a population.`
- Nothing else. The invented-number sweep (audience-size ranges, "N+" adoption patterns, migration/volume ranges) returns zero hits. Both dollar amounts appear only inside quotation marks with named attribution, and the post never restates a price in its own voice: line 156 answers the pottery quote with "the arithmetic is not the problem" rather than repeating a figure. That is precisely what `facts.md` §Rejected and `brief.md` §Avoid list required.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | Yes. Zero is correct here, not an omission: `facts.md` §Statistics is empty by design and the draft ships no claim that needs one. No missing `\| source:` clause is possible. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | Yes. The outline's fallback path (mark this marker if the Harvard sentence fails its scope test) correctly did not fire, because the sentence survived. Three external links meets blog-craft's floor. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Yes. All five planned internal targets are confirmed live in `brief.md`, so no slot went unfilled. |
| `[IMAGE:]` | `4` vs outline `4` slots | Yes. Lines 26, 65, 84, 143, matching the outline's four in-post slots one for one. Featured-image hygiene: none uses `featured.<ext>` and none reproduces the outline's featured concept (hand-lettered title over a flat-vector overhead scene), so the cover asset will not render twice. Placement hygiene: no placeholder is immediately followed by a heading; each sits after its H2 plus one paragraph, exactly as planned. Table-redundancy: the draft contains zero markdown tables, so the `remotion` cost-tier diagram at line 26 cannot duplicate one. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `[TBD]` and `AFFILIATE-LINK-PENDING` all return zero. All four `[IMAGE:]` markers carry the full canonical shape including `Type:` and `Suggested filename:`, and the types match the outline's plan (one `remotion` diagram, three `ai-prompt` scenes), which is what `custom-instructions.md` §Image style asks for.

## 5. Word count

- Draft: `2,988` words (body prose: everything after the closing frontmatter `---` through the end of the CTA, excluding the `## FAQ` block, `[IMAGE:]` placeholder lines and H2 heading text). On the editor's inclusive basis, which counts headings and placeholder lines, `3,188`.
- Outline target: `3,260` words
- Delta: `-8.3%` on the strict basis, `-2.2%` on the inclusive basis
- Band: `within ±10% = pass, no issue`. Both bases land inside the clean band, so §5 passes outright and logs nothing in §7 regardless of which basis the editor prefers.

Per-section detail (strict basis, against the outline's roll-up): intro 179/200, H2 1 266/300, H2 2 384/430, H2 3 345/370, H2 4 318/340, H2 5 300/300, H2 6 231/240, H2 7 251/240, H2 8 319/400, H2 9 307/340, CTA 88/100. Every section is inside ±12% except H2 8 at -20%. See §10 for why that one does not become an issue row.

FAQ (outside the gated total): `500` words against the outline's ~200 estimate, 2.5x. Ruling in §10.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | Both lists greped, zero hits. |
| Zero em-dashes (`—`, grep returns nothing) | Pass | Zero. |
| En-dashes (`–`) only in numeric ranges | Pass | Zero present. |
| First-person throughout | Pass | No `one`/`users`/`stakeholders` drift. |
| Active voice | Pass | No passive markers found. |
| ≥1 rhythm marker in every H2 | Pass | Bullets in seven sections; H2 9 and the CTA carry a standalone question, a concrete number and strong length variation instead. |
| ≥1 bullet list per ~300 words | Pass | 62 bullets across 2,988 words of body prose, roughly one per 48 words. Comfortably clear. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | **Fail** | Two reader-directed questions in the entire body (lines 102 and 158), and neither is a standalone paragraph: both are the opening clause of a longer paragraph. That leaves 8 of 10 body sections with none. The voice does call for it: `voice.md` §Tone lists "Reader-directed rhetorical hooks: 'Do you ever feel...?'" as documented evidence from published posts, and §Lexicon repeats it as "Rhetorical opener questions". This is the single row keeping §6 from being green, and with it the only thing keeping the verdict from `approve`. Logged as minor issue 6. |
| ≥1 concrete number or named example per major section | Pass | Every section names specific things rather than gesturing: cribbage and gin rummy (56), blackberries and elderflower (89), sauerkraut (122), dishcloths (72). H2 9 carries a checkable internal number ("the twelve entries in the free section", which I verified against the list). |
| No em-dash overuse | Pass | Zero em-dashes, so no density question arises. |
| Visible sentence-length variation in every section | Pass | Per-section standard deviation ranges 6.1 to 12.0, all far above the <4 flag threshold. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| `Hands-busy hobbies: crafts, making, and building` | `67` | `minor` | The Harvard citation and an uncited effect claim about crochet share one comma-joined sentence. The anchor and the setup sentence are correctly mindfulness-scoped, but "so your attention stops shopping for the next notification" reads as though it sits inside the citation. This is the post's highest-risk claim, so the boundary should be unambiguous. | Split the sentence so nothing uncited shares it with the link. Replace the sentence beginning "[Mindfulness practice supports focus]" with: "[Mindfulness practice supports focus](https://www.health.harvard.edu/healthbeat/mindfulness-practice-for-focus). A row of crochet works on a similar bargain: one small repeatable motion holds your hands, so your attention stops shopping for the next notification." Do not change the anchor text, the URL, or the preceding sentence about attention having somewhere to sit. |
| `What counts as a screen-free hobby (and what this list leaves out)` | `40` | `minor` | "The phrase caught on for a reason. Oxford University Press has named 'brain rot' its word of the year." The phrase in question is "analog hobbies"; the Oxford fact is about a different phrase, so the citation is positioned as evidence for a vocabulary-popularity claim it does not support. | Rewrite the bridge so the Oxford fact anchors the cultural moment rather than the vocabulary. Use: "The phrase caught on because the feeling behind it is everywhere. Oxford University Press has [named \"brain rot\" its word of the year](https://corp.oup.com/word-of-the-year/)." Keep the anchor text exactly as it is and do not add a year, the year is unconfirmed. |
| `Free screen-free hobbies you can start this week` | `52` | `minor` | Litter-picking closes on "Visible progress, no skill barrier", which contradicts the load-bearing promise seventeen lines earlier that "Everything here has a learning curve". It is the one entry that reads like the ten-minute filler this list explicitly carves itself out from. | Replace "Visible progress, no skill barrier." with a line that keeps the low barrier but names the durable dimension: "Visible progress, and after a few months you know one stretch of ground better than anyone else who walks it." Do not change the tier or the rest of the entry. |
| `Free screen-free hobbies you can start this week` / `Hands-busy hobbies` / `Screen-free hobbies that get you outside` / `Screen-free hobbies that build a real skill` | `55`, `71`, `96`, `109` | `minor` | Four Free-tier entries name an object without the "nothing you do not already own" qualifier the tier definition at line 34 demands: sketching (55, implies paper and pencil), hand-sewing (71, implies needle and thread), urban sketching (96, "A pocket notebook and a pen"), longhand writing (109, "A pen"). Other Free entries get this right ("Any notebook you already own", "Paper you already have", "Same shoes", "Your eyes are the equipment"). The tiers are this post's whole differentiator, so the qualifier has to be consistent or the strict definition stops being credible. | Add the qualifier to those four, matching the pattern already used in journaling and origami. Line 55: "Draw the same mug once a week for a month, in whatever notebook you already have." Line 71: "A needle and thread from the kit already in a drawer, and everything you fix is something you already own." Line 96: "A pocket notebook and a pen you already own, drawing what is actually in front of you in the town you already live in." Line 109: "Fiction, letters, terrible poetry, in a notebook you already have." Do not retier any entry and do not touch the entries that already carry the qualifier. |
| `FAQ` | `178` | `minor` | FAQ 1 recites 22 named entries across six categories. The outline's direction for this question was "name the categories and a handful of specific entries, then point up to the list rather than restating it", and this restates it. It also duplicates work FAQ 2 does better (18 free entries, correctly filtered) and FAQ 3 does again (the same six categories re-sorted), leaving three consecutive answers doing list recital. | Cut FAQ 1 to roughly 55-65 words: name the six categories with at most one example each, then keep the existing closing sentence "The full 51, each with a cost tier and a line on what it actually involves, are in the sections above." Leave FAQ 2, 3, 4 and 5 exactly as they are. |
| Whole post | `102`, `158` | `minor` | Only two reader-directed questions in the entire body, both buried as the opening clause of a longer paragraph, leaving 8 of 10 sections with none. `voice.md` names "Reader-directed rhetorical hooks" as a documented Olga signature, and the draft's register runs cooler and more essayistic than `authors.md`'s "warm, encouraging, lightly self-deprecating". This is the one row failing §6's humanization floor. | Add two standalone one-line question paragraphs as section openers in Olga's voice, one in H2 2 or H2 3 and one in H2 8. Keep them short and reader-directed, in the shape of "So which one do you actually pick?" rather than an essayist's setup. Also add one lightly self-deprecating first-person beat to H2 1 or H2 8, in the register of the existing "expect the first square to be a trapezoid". Change nothing else about the surrounding prose; the sentence rhythm elsewhere is already strong and must not be flattened while adding these. |
| `When money, space, or time is the real problem` | `166` | `minor` | "four of those across a week is more practice than most people manage in a month of good intentions" is an unsourced comparative about most people. Nothing in `facts.md` or `research/*.md` supports a prevalence claim, and the outline fenced this section to reasoned guidance without one. | Reframe to the reader instead of the population: "and four of those across a week adds up faster than a month of good intentions ever has." Remove "most people". |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **All three external links survive their scope tests, which was this post's stated likeliest failure mode.** Line 67 reproduces the outline's scope-safe construction near-verbatim ("These hobbies borrow the thing mindfulness practice trades on: attention with somewhere to sit"), which keeps the Harvard claim on mindfulness practice and turns the hobby link into an analogy rather than a transfer. Line 82 keeps the Mind link attached to nature and never lets it slide onto gardening. Line 40 states the Oxford claim with no year, exactly as `facts.md`'s ⚠️ flag required. Issues 1 and 2 ask you to move a sentence boundary and a logical bridge. They do **not** ask you to rewrite these framings, which are correct.
- **Both dollar figures stay quoted and attributed, and the post never restates a price in its own voice.** Line 86 ("I got $20 skates from Walmart...", u/brainbl0ck) and line 156 (the $300 pottery breakdown, u/vivian_banshee03) are verbatim, in quotation marks, with named handles. Crucially, line 156 answers the objection with "the arithmetic is not the problem. The problem is that pottery gets sold as the cheap alternative to scrolling", refusing the price restatement `brief.md` bars while still using the quote's force. Do not paraphrase either quote or absorb its numbers into the surrounding prose.
- **FAQ 2's free list is internally verified and correctly filtered.** All 18 entries it names are tiered Free in the body, and it deliberately omits the two conditional ones (the card game and second-hand jigsaws, both Free-or-Cheap). That is the post's cost-tier credibility in miniature, and it is the one place a lazy draft would have overclaimed. Issue 5 cuts FAQ 1 only; leave FAQ 2 completely alone.

Also worth not breaking, in one line each: the carve-out at lines 24 and 28 states the hobby-versus-filler distinction and then actively sends the reader away to `/things-to-do-instead-of-being-on-your-phone`, which is the strongest version of that instruction; the anti-hustle line at 100 ("None of these has to become a side project, an income stream, or content. You are allowed to be mediocre at something on purpose, for years, because it is yours") is said once, plainly, in exactly the section the outline assigned it; and the CTA at 172 solves the structural awkwardness of a screen-free post recommending screen-based tools by bridging on time rather than features.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 67, H2 3. Split the Harvard sentence so nothing uncited shares it with
   the link. Replace the sentence beginning "[Mindfulness practice supports
   focus]" with:
   "[Mindfulness practice supports focus](https://www.health.harvard.edu/healthbeat/mindfulness-practice-for-focus).
   A row of crochet works on a similar bargain: one small repeatable motion
   holds your hands, so your attention stops shopping for the next
   notification."
   Do NOT change the anchor text, the URL, or the preceding sentence about
   attention having somewhere to sit. That framing is deliberately scoped and
   is correct.

2. Line 40, H2 1. The Oxford fact is about "brain rot", not about "analog
   hobbies", so it currently reads as evidence for a claim it does not support.
   Rewrite the bridge to:
   "The phrase caught on because the feeling behind it is everywhere. Oxford
   University Press has [named "brain rot" its word of the year](https://corp.oup.com/word-of-the-year/)."
   Keep the anchor text exactly as it is. Do NOT add a year; the year is
   unconfirmed by design.

3. Line 52, H2 2. "Visible progress, no skill barrier" contradicts H2 1's
   promise that everything here has a learning curve. Replace that closing
   phrase with:
   "Visible progress, and after a few months you know one stretch of ground
   better than anyone else who walks it."
   Do not change the tier or the rest of the entry.

4. Lines 55, 71, 96, 109. Four Free-tier entries name an object without the
   "nothing you do not already own" qualifier that the tier definition at line
   34 demands. Add it, matching the pattern already used in journaling and
   origami:
   - Line 55 (Sketching): "Draw the same mug once a week for a month, in
     whatever notebook you already have."
   - Line 71 (Hand-sewing and mending): "A needle and thread from the kit
     already in a drawer, and everything you fix is something you already own."
   - Line 96 (Urban sketching): "A pocket notebook and a pen you already own,
     drawing what is actually in front of you in the town you already live in."
   - Line 109 (Longhand writing): "Fiction, letters, terrible poetry, in a
     notebook you already have."
   Do NOT retier any entry, and do not touch entries that already carry the
   qualifier.

5. FAQ, line 178. Cut the first FAQ answer to roughly 55-65 words. Name the six
   categories with at most one example each, then keep its existing closing
   sentence ("The full 51, each with a cost tier and a line on what it actually
   involves, are in the sections above."). It currently recites 22 entries,
   which restates the list instead of pointing up at it and duplicates FAQ 2 and
   FAQ 3. Leave FAQ 2, 3, 4 and 5 exactly as they are; their length is earned.

6. Voice, whole post. Only two reader-directed questions exist in the body
   (lines 102 and 158) and neither stands alone as its own paragraph. Add two
   standalone one-line question paragraphs as section openers, one in H2 2 or
   H2 3 and one in H2 8, short and reader-directed in the shape of "So which one
   do you actually pick?". Also add one lightly self-deprecating first-person
   beat to H2 1 or H2 8, in the register of the existing "expect the first
   square to be a trapezoid". Do NOT flatten or rewrite the surrounding prose
   while doing this; the sentence-length variation across the post is already
   strong and must survive intact.

7. Line 166, H2 9. Remove the prevalence claim about "most people". Replace
   "and four of those across a week is more practice than most people manage in
   a month of good intentions" with:
   "and four of those across a week adds up faster than a month of good
   intentions ever has."

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked. Do NOT
change any cost tier, the entry count (51), or the wording of any quoted
passage.

Produce blog-ops/drafts/screen-free-hobbies/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

**Rulings the editor asked for, in order.**

1. **Overclaiming from real sources: held.** All three links pass their scope tests. The Harvard one, the one `facts.md` §Rejected calls the post's likeliest overclaim, is handled correctly at the level that matters: the anchor is mindfulness-scoped, the setup sentence is an explicit analogy, and no sentence anywhere claims a hobby improves your focus. The Mind link never touches gardening. The Oxford link states no year. The two flags I raised (issues 1 and 2) are about sentence construction, not scope, and both are two-minute fixes.

2. **Invented numbers: none.** This is the cleanest result in the review. Zero statistics of any kind, which is the correct outcome given an empty `facts.md` §Statistics. No screen-time figure, no attention-span figure, no wellbeing figure, not even a hedged one. Both dollar amounts appear only inside quotation marks with named attribution, and line 156 pointedly refuses to restate the pottery figures in the post's own voice. The only sentence reaching toward a population claim is line 166 (issue 7), and it is rhetoric rather than a statistic.

3. **The cannibalisation carve-out: it lands.** Lines 24 and 28 do the full job: they define the distinction (learning curve, next session, a better version of you in six months), name the alternative reader ("if what you want is the ten-minute version"), and actively send them away with the link. The stronger test is whether the list drifts back into filler, and it mostly does not: every entry names a first move that implies a second session. One entry breaks it, litter-picking's "no skill barrier" (issue 3), and one is inherently borderline, "Walking a new route", which the outline mandated on the strength of it being the most-upvoted answer in the largest thread. I would leave walking alone; it is well-framed as exploration and the research backs its inclusion. **Caveat I cannot resolve offline:** `/things-to-do-instead-of-being-on-your-phone` has no repo copy (`brief.md` confirms this) and I have no fetch capability, so I could not diff this list against its 75 items. Walking, reading, journaling and baking are the likeliest collisions. Worth a two-minute spot-check at Stage 3d.

4. **Audience drift: clean.** Grep for kid/teen/child/parent/nephew across the whole draft returns exactly two lines, and both are the adults-only disclaimer (line 30, "This list is for adults. No kids' section, no teen section, no crafts to do with your nephew", and the FAQ 3 restatement). No paediatric claim was ported in, which matters because `facts.md` §Rejected specifically bars The Guardian's children-scoped jigsaw finding. No entry is written for a family context. The risk the two kid-scoped page-1 competitors created did not materialise at all.

5. **Cost tiers: honest and internally consistent, with one systematic wobble.** All 51 tiers match the outline's assignments exactly, with zero drift. The two-sided entries are the honest ones ("Free through swaps, Cheap to buy", "Real investment, or Free if the bike is already in the hallway", "Cheap for whittling, Real investment for woodwork"), and the LEGO entry refusing to pretend at line 76 ("It is not a cheap way to spend an evening and I am not going to pretend otherwise") is the tier system proving it means what it says. The wobble is issue 4: several Free entries name an object without the "you already own" clause the strict definition demands, while others do it correctly. It is a phrasing inconsistency rather than a dishonest tier, but on the post's own differentiator it should be uniform. Independently verified: 18 entries are unconditionally Free, matching the plan review's "roughly 20 of 51" estimate, and the post never claims most are free, so the withdrawn title's cost promise stays withdrawn in the body too.

6. **The FAQ at 502 words: mostly earns itself, with one exception. Do not cut it back to 200.** The outline's ~200 estimate was low, not the draft long. Answers in the 90 to 110 word band are the right size for answer-engine extraction, and four of the five do real work the body cannot do for a skimmer: FAQ 2 is the People Also Ask question the outline called the strongest on the list and it earns every word by doing the definitional work on what "free" means; FAQ 3 does the temperament-sort steering the outline asked for; FAQ 4 compresses H2 8 into a standalone answer; FAQ 5 handles the screen-leakage question honestly. The exception is FAQ 1, which recites 22 entries in violation of its own outline direction and duplicates FAQ 2 and FAQ 3, leaving three consecutive answers doing list recital. Trim that one to 55-65 words (issue 5) and the block lands near 450, which I would ship. Cutting further would strip extractability for no gate reason, since the FAQ sits outside the gated body total by design.

**Other observations that did not earn an issue row.**

- **H2 8 runs 319 words against the outline's 400, the only section beyond ±12%,** and it is the post's stated differentiator ("the part every competitor omits"). I checked whether anything is actually missing and nothing is: all five planned beats are present (pick one, shrink the session, schedule it with both internal links, do not buy the good kit with the quote attributed to readers not to us, expect leakage with both the Reddit and X quotes). The section is complete and dense rather than thin, so I did not log it. Issue 6 will add a little length there anyway. Flagging it only so the editor knows I looked.
- **The `remotion` cost-tier diagram at line 26 sits before the tier definitions it illustrates** (bullets at lines 34-36). The writer followed the outline's generic "after H2 plus one paragraph" rule exactly, so this is not a fidelity problem, and either placement is defensible since images get scanned rather than read in sequence. If Stage 4a wants it tighter, moving the placeholder to just after line 36 would put the key after the keys. Not worth a writer round-trip on its own.
- **"analog hobby" appears twice, not once** as `plan.md` §Tone hooks specified: the translated first use at line 40, and a second inside the attributed X paraphrase at line 130, where the phrasing is inherited from `facts.md`. Since the term is already translated by then and the second use is quotation-adjacent, this is fine as shipped.
- **Geocaching is the one Free entry that requires a phone** ("A free app points you at small containers"). Mildly ironic in a screen-free post, but it comes straight from `facts.md` §Named examples, and H2 8's whole leakage argument ("Looking up a pattern is not a relapse") retroactively licenses it. Deliberate, not a slip.
- **The prose is consistently British** (fortnight, towpath, allotment, five-a-side, watercolour, labelled) with no US spellings mixed in, which is right for a UK-based author and a UK-localised SERP. Noting only because the blog's Amazon associate tag is US (`op01e-20`) and part of the audience is American. No rule in any profile doc governs this, no affiliate links exist in this post, and I would not change it. Recorded as an operator preference question, not a defect.
- **Tone rules from `plan.md` §Tone hooks all hold.** Not phone-shaming (line 152, "Looking up a pattern is not a relapse. The goal was never purity"). Not hustle (line 100, said once and plainly, in the assigned section). Honest about leakage (lines 150-152, using the "minus the switch" quote exactly as the plan wanted). Show-don't-name (every entry gives a concrete first move: draw the same mug, one row not a jumper, dishcloths before anything anyone has to wear).
- **What to watch on the revise pass.** The failure mode for draft-v2 is the writer over-correcting issue 6 and sprinkling questions and warmth into prose that is currently taut. Two questions and one self-deprecating beat is the whole ask. If draft-v2 comes back with a question opening every section, that is worse than draft-v1, and I would say so.
