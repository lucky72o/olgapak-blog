# Review: aesthetic-stationery draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/aesthetic-stationery/draft-v1.md`, `blog-ops/drafts/aesthetic-stationery/outline.md`, `blog-ops/drafts/aesthetic-stationery/facts.md`, `blog-ops/drafts/aesthetic-stationery/brief.md`, `blog-ops/drafts/aesthetic-stationery/plan-review.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/product.md`, `blog-ops/profile/custom-instructions.md`.

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/aesthetic-stationery/draft-v1.md` (word count: `2,873` body prose excluding FAQ; outline target: `2,800`)
- Outline: `blog-ops/drafts/aesthetic-stationery/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`request_revisions`

Reasoning (1-3 sentences): The draft is substantively strong and clears every hard rule that was at risk (the downsizing-filter contradiction is genuinely resolved, not merely acknowledged; there are zero invented testing claims; the productivity claim is correctly held at the weak version and explicitly denied in the body). One `major` issue blocks approval: at line 271 an X quote from @ElShai_eg is dropped into a paragraph attributed to r/planners with no attribution of its own, so the reader will read it as the same commenter. Six minors, mostly craft-level, ride along.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | yes | Warm, first-person, lightly self-deprecating, beginner reading level. Punchy rhythm breaks present ("Nothing you can buy does that.", "Know the job first.", "Buy the book second."). No corporate drift in any of the 17 H3 blocks. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep for `one could\|one should\|users are\|stakeholders` returns zero. "One commenter" (l.55) and "One note-taker" (l.109) are the numeral, not the impersonal pronoun. |
| Active voice (no "X was scanned" shapes) | yes | Grep for `was (scanned\|checked\|monitored\|built\|tested)` returns zero. Passive constructions that do appear ("was named directly in the r/stationery thread", l.69) are correct English for reported attribution, not evasion. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Per-section stddev of sentence word length: intro 6.9, H2 1 12.1, H2 2 14.0, H2 3 9.6, H2 4 8.8, H2 5 8.5, H2 6 7.6, H2 7 6.9, H2 8 11.4, CTA 8.5. All well clear of the <4 uniformity threshold. Shortest sentence 3 words, longest 54. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | Both lists greped (`writing-standards.md` §Forbidden phrases + `voice.md` §Additional forbidden phrases, which adds none). Notably "game changer" is absent even though the source quote at `facts.md` §Quotes contains it, see §10. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | Zero. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | yes | Zero en-dashes present, so vacuously clean. |
| Intro jargon (per `audience.md` §Reading posture + §Niche jargon translation) | yes | The intro carries no unglossed niche term. "Flat-lay" (l.17) is consumer-visual vocabulary, not stationery jargon, and is self-evident in context. |
| Product code-literal grep (module: product) | yes (N/A) | `product.md` defines no backticked internal code constants. Nothing to grep for. |
| Intro-hook over-anchoring | yes (N/A) | The hook is a durable behavioural observation ("it photographs beautifully, and then it sits in a drawer"), not a time-bound event peg. The one seasonal beat ("Every autumn", l.27) is inside a quoted source and does not recur in section openers or the outro, so the post reads fine in 12 months. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (`adapters/publish/frontmatter/wordpress.md`) | yes | All six required fields present and filled: `title`, `date`, `excerpt`, `tags` (4 entries), `authors` (`Olga Pak`, matching `authors.md` byline), `draft: true`. Correctly carries NO `cover`/`heroImage` field, per that template's §No cover/heroImage field. wordpress-rest emits no JSON-LD at the adapter level, so the FAQPage schema sub-check is skipped per SKILL §2.1. |
| Title in frontmatter matches outline "Final title" exactly | yes | `Aesthetic Stationery: 17 Best Picks That Earn Their Space`, 57 chars, inside the 50-60 gate. Contains "Best" as the transactional gate requires. |
| Slug / meta description match outline | yes | Excerpt is byte-identical to the outline's Final meta description, 148 chars (≤160). Slug is directory-derived, `aesthetic-stationery`, matching. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | All 8 outline H2s present in order, verbatim wording, followed by the CTA H2 and `## FAQ`. Zero delta. All 17 H3s present, in the outline's order, one per `facts.md` §Product picks row. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | yes | 4 content paragraphs (3 / 2 / 2 / 1 sentences) plus the mandatory affiliate disclosure as a 5th, which the outline's §P5 and `custom-instructions.md` §Content policy both require to be the last paragraph before the first `##`. Target keyword is the first two words of the post. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Every H2 carries a concrete number or a named example, and all ten sections clear the burstiness bar. See §6 for the density caveat on bullet lists and standalone questions specifically. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | yes | 5 questions, verbatim against the outline's 5, in the same order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | yes (N/A) | wordpress-rest adapter: FAQPage JSON-LD is a WP-plugin concern, explicitly not emitted by this frontmatter template. Check skipped per SKILL §2.1. |
| Outro / CTA paragraph present, immediately before `## FAQ`, nothing after the FAQ | yes | `## Spend your energy on the notes, not the note-keeping` sits immediately before `## FAQ`; the post ends on the final FAQ answer with no trailing prose. |
| CTA links the `blog.md` target with an action anchor | yes | `[Try my free AI tools](/ai-tools)`, matching `blog.md` §Primary CTA hook verbatim. Not a bare homepage link. |

Structural deltas vs outline (if any):
- Two H3 headings are shortened from the outline's literal strings: `Kokuyo Campus B5 notebooks, dot-ruled` (outline: `...dot-ruled, 5-pack`) and `Post-it Super Sticky Notes, muted palette` (outline: `...muted "Neutrality" palette`). Both retain the dropped detail in the body prose (l.143 "5-pack" in the link anchor, l.225 the "Neutrality" colourway named). Not logged as issues; the shortening reads better as a heading and loses nothing.
- H2 2 refers to the third tension item as "the Bande sticker rolls" (l.57) where the outline says "the Bande washi roll stickers". This is the writer's deliberate dodge to avoid an unglossed first use of "washi" before H2 6. Ruled acceptable, see §10.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | 2,251 upvotes / 89 comments (l.53), 668 / 149 (l.53), "roughly 90 to 95 percent" (l.53), "score 10" (l.127) all trace to `facts.md` §Statistics / §Named examples. Product specs (0.38mm, 10-colour, 12-pack, 480-piece, 5-pack, B5/A5/A6, No.16) all trace to `facts.md` §Product picks. Inspected and cleared as rhetorical rather than factual: "80 pages" (l.217), "page three" (l.111), "week two of term" (l.141), "six months" (l.261). One numeric inconsistency logged in §7 (400 vs 480). |
| Every quoted source is attributed as voice-of-customer, not as authority | **no** | Seven of the eight quotations are attributed correctly and hedged exactly as `facts.md` §Quotes demands ("someone on X", "one person in r/planners", "One note-taker on r/stationery"). The eighth (l.271, the @ElShai_eg X quote) carries no attribution at all and inherits the r/planners attribution of the sentence before it. Logged `major` in §7. |
| Quote verbatim accuracy | yes | All eight quoted strings are byte-exact against `facts.md` §Quotes, including the awkward `create-` hyphen and the internal ellipsis in the u/SaltyBlackBroad quote. The u/dogfault_ quote is truncated after its first sentence; ruled honest, see §10. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | yes (N/A) | `modules.competitors: false`. No software competitor is named. The three rejected product categories at l.265-267 are generic category nouns, not named brands. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | yes (N/A) | Module off. No `Last verified` row is cited, and no verified-date stamp appears in reader-facing prose. |
| No prices anywhere (`facts.md` Hard rule 1) | yes | Zero `$` characters in the file. Relative framing only ("without spending much", l.137; "the cheapest genuine upgrade", l.215). |
| Product mentions (count: `2`, `modules.product` on) are each earning their place | yes | "free AI tools" and "Text Summarizer", both inside the CTA, both after the educational content, exactly one tool named. Matches `product.md` §Positioning recommendations and `facts.md` §Product facts. Neither sentence survives deletion of the mention, so no stuffing. |
| Own-product pricing claims | yes | No `$`, no tier, no usage cap, no "free up to". The tools are described only as "free", which is durable and true per `product.md` §Pricing page. |
| Soon-to-ship feature gap check | yes (N/A) | `brief.md` §Soon-to-ship features: none. No gap language present. |
| Internal links (count: `5` post links + 1 CTA) exist per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | yes | 5 internal post links, inside the 3-5 target: 1 in the intro (≤2 gate), the other 4 distributed to the sections that discuss them (pens → H2 3, notebooks → H2 4, planner + bullet journal → H2 5). No "see also" stack. First body link is internal, ahead of any external. |
| Every internal blog link is root-relative `/`<slug> (trailing slash iff `blog.trailing_slash: true`) | yes | `config.yaml` sets `route_prefix: /` and `trailing_slash: false`. All six links are bare `/slug` with no trailing slash and no domain. Zero absolute `https://olgapak.com/...` cross-post links in the body. |
| External links (count: `0` rendered, `3` markers) each point to reputable sources; anchor text = literal claim | deferred | No external link is rendered, so nothing can point anywhere wrong. All three claims ship as `[EXTERNAL_LINK_NEEDED:]` with the literal claim as the anchor text and a suggested source class. This lands below `blog-craft.md` §External linking's 3-5 target, which the outline's §Open questions explicitly pre-accepted at plan review (the harvested-citation pool was empty). Stage 3d resolves or deletes. Not a draft fault. |
| Forbidden external links to SERP competitors (§3.5, never module-gated) | yes | `research/serp.md` §Selected results analyzed yields six forbidden hosts: undertherowantrees.co.uk, drpen.co.uk, thequalityedit.com, goodgudi.com, swiftwellnessmag.com, savespendsplurge.com. Grep of every `https?://` in the draft returns 17 URLs, all `www.amazon.com/dp/`. Zero forbidden hosts. Amazon `/dp/` links are affiliate product links, exempt per the outline's External link plan. |
| Affiliate link integrity (`facts.md` Hard rule 2, `custom-instructions.md` §Content policy) | yes | 17 URLs, 17 unique, byte-identical to `facts.md` §Product picks and in the same order. All carry `?tag=op01e-20`. Zero `[AFFILIATE-LINK-PENDING:]`, zero untagged Amazon URLs. |
| Affiliate disclosure (`facts.md` Hard rule 3) | yes | Present at l.23, verbatim, italicised, as the last paragraph of the intro immediately before the first `##`. |
| No invented testing claims (`facts.md` Hard rule 4) | yes | Read every one of the 17 H3 blocks specifically for this. Not one sentence claims first-hand use of a named product. Every "why it earns a slot" line is sourced to a documented property, a community mention, or a category judgment. Category-level experience appears where it should and only there: l.17, l.37 ("in my experience"), l.49, l.53. One ambiguous phrasing logged `minor` in §7 (l.57). |
| Productivity claim held at the permitted weak version (`facts.md` §Rejected) | yes, with a framing nit | The strong claim is never made and is explicitly refused: "Make you productive. Nothing you can buy does that." (l.41), and again in the FAQ ("Not directly, no. Nothing you buy will make you study.", l.287). The permitted claim appears three times. Two are correctly framed as opinion (l.37 "in my experience"; l.287 "the one I would stand behind"). The third (l.15) states it flat, logged `minor` in §7. |
| Target keyword appears 2-8 times in body (actual count: `3` in prose, `6` including FAQ) | yes | Both counts sit inside the 2-8 band. Appears in the title, the excerpt, the first sentence, and H2 1. No stuffing. |
| Frontmatter tags drawn from the live taxonomy (`blog.md` §Tag taxonomy) | yes | `aesthetic notes`, `students`, `productivity`, `note-taking`. Four tags, inside the 2-4 gate, all four present verbatim in the live WP tag list. |

Unsourced / suspicious claims:
- `draft-v1.md:271`, "Before joining the haul, check what you already have. Your old pens might still work.", issue: correctly quoted from `facts.md` §Quotes but attributed by adjacency to r/planners when the source is @ElShai_eg on X. Sourcing is fine; attribution is wrong. Logged `major`.
- `draft-v1.md:261`, "storing 400 tabs you will never peel", issue: the pack is 480 pieces per `facts.md` §Product picks row 14 and per the draft's own l.219. Logged `minor`.
- `draft-v1.md:119`, "The consensus in the stationery threads is not about covers.", issue: generalises two or three threads into "the consensus". Outline-authorised wording and hedged to "the stationery threads" rather than to the hobby at large, so cleared, but noted in §10 as a Gate 2 watch item.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | yes. Nothing in the draft needed one: every numeric claim traces to `facts.md`. Because the count is zero, the §4.4 `\| source:` clause validation has nothing to validate and passes vacuously. |
| `[EXTERNAL_LINK_NEEDED:]` | `3` | yes. l.31 (fresh start effect), l.55 (sunk-cost fallacy), l.119 (handwriting and retention). All three match the outline's External link plan exactly, all three use the canonical shape with the claim first and a `\| suggested source type:` clause, and all three sit inside a sentence where the anchor text is the literal claim. l.31 additionally does the right thing that `facts.md` §Rejected demands: it tells the reader outright that the fresh-start-effect framing came from one person on social media and not from a cited study. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | yes. All five planned internal links resolved to real slugs, none deferred. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | yes. Exact match. |

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` and `PENDING` returns zero.

Image hygiene sub-checks:
- **Featured-image hygiene (§4.2a):** pass. No placeholder is named `featured.<ext>`, and none duplicates the outline's featured concept (a curated muted-pastel set on a warm neutral desk under a hand-lettered title). The nearest, `pens-highlighters-group.png`, is a distinct category group shot.
- **Placement hygiene (§4.2b):** pass. All four placeholders are followed by body prose, never by a heading, and each sits after its H2 plus one paragraph exactly as the outline's Image placement plan specifies.
- **Table-redundant chart (§4.2c):** pass. The one `remotion` slot (l.51, the downsizing-filter decision diagram) has no markdown table anywhere within ±20 lines; the draft contains no tables at all. It is a genuine diagram, which is the only `remotion` use `custom-instructions.md` §Image style permits.

## 5. Word count

- Draft: `2,873` words (body prose after the closing frontmatter through the end of the CTA, excluding the `## FAQ` block; `[IMAGE:]` and `[EXTERNAL_LINK_NEEDED:]` marker text and raw URLs stripped, link anchor text retained)
- Outline target: `2,800` words
- Delta: `+2.6%`
- Band: `within ±10% = pass, no issue`

Per-section actuals vs the outline roll-up: intro 178 (target ~200), H2 1 249 (300), H2 2 229 (220), H2 3 553 (490), H2 4 543 (490), H2 5 262 (220), H2 6 346 (310), H2 7 220 (220), H2 8 233 (250), CTA 86 (100). The item sections run slightly long and the two framing sections slightly short, which is the right direction of drift for a transactional roundup. FAQ measures 329 words, correctly excluded from the gated total.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | Both lists clean. |
| Zero em-dashes (`—`, grep returns nothing) | yes | Zero. |
| En-dashes (`–`) only in numeric ranges | yes | Zero present. |
| First-person throughout | yes | Consistent `I` / `you` across all ten sections. |
| Active voice | yes | No evasive passives. |
| ≥1 rhythm marker in every H2 | yes | All ten sections carry a concrete number or named example, and all ten show sentence-length variation. |
| ≥1 bullet list per ~300 words | **no** | 2 lists / 6 bullets across 2,873 words. The literal floor asks for roughly 9. Partially mitigated, see the ruling below. |
| ≥1 standalone-question paragraph per major section (author voice calls for it, per `authors.md` / `voice.md` §Lexicon "Reader-directed rhetorical hooks") | **no** | Exactly one standalone-question paragraph in the whole post ("So what does a nice pen actually do for you?", l.35). "Why do people keep buying anyway?" (l.55) opens a paragraph rather than standing as one. Eight major sections, one hook. |
| ≥1 concrete number or named example per major section | yes | Verified per section: H2 1 two named X posts, H2 2 four engagement figures, H2 3-H2 7 named products plus specs, H2 8 the 2 upvote-backed quotes plus three named categories, CTA the named Text Summarizer. |
| No em-dash overuse | yes | Zero. |
| Visible sentence-length variation in every section | yes | Lowest section stddev is 6.9 words against a <4 fail threshold. |

**Ruling on the writer's low-list-density flag.** Half right. The bullet-list floor exists to break walls of text, and the 17 H3 blocks genuinely do that job: each is four short units (why / bold `Best for:` / downside / link), so no screen of this post is ever a slab of prose, and forcing bullets into the item blocks would fight the outline's mandated four-element shape. That defence holds for the item sections. It does not hold for the two glossary paragraphs at l.61 and l.119, which are literally three-item enumerations written as run-on sentences and are the most list-shaped prose in the post. Converting those is a free win that raises density and improves the glosses at the same time. The standalone-question floor is a separate matter and the H3 rhythm does not cover it at all: it is a voice marker, not a layout marker, and `voice.md` §Lexicon names reader-directed rhetorical hooks as an Olga signature. One in 2,873 words is thin. Both logged `minor`, neither blocking.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| `What I would skip (and what to buy instead)` | `271` | `major` | The closing quotation "Before joining the haul, check what you already have. Your old pens might still work." has no attribution of its own and follows "As someone in r/planners wrote:" in the same paragraph, so it reads as the same commenter. It is actually from @ElShai_eg on X, per `facts.md` §Quotes, a different person on a different platform. It is also a bare floating quote with no speaker, which is a craft flaw independent of the mix-up. | In the last paragraph of H2 8, give the second quotation its own attribution and make the platform switch visible. Replace `The cure is unglamorous and free. "Before joining the haul, check what you already have. Your old pens might still work."` with something like: `The cure is unglamorous and free, and the same X post that opened this piece already said it: "Before joining the haul, check what you already have. Your old pens might still work."` Keep the quoted string byte-exact. |
| `Why aesthetic stationery actually works (and where it stops working)` (intro) | `15` | `minor` | "Supplies you genuinely like the look of really can make you more likely to open the notebook" states the permitted weak claim flatly. `facts.md` §Rejected permits this claim only when "framed explicitly as opinion and experience, not as a research finding". The draft does frame it correctly at l.37 and l.287, so the intro is the one unframed instance, and it is the instance most readers see. | Add the opinion frame to the third sentence of the intro's first paragraph. E.g. `In my experience, supplies you genuinely like the look of really can make you more likely to open the notebook, and over a term that small thing adds up.` Do not strengthen the claim and do not add a citation. |
| `How I picked these 17` | `57` | `minor` | "I have kept all three, for different reasons" is ambiguous between "kept them on this list" (intended, and clear enough from the following clause) and "kept them when I downsized my own stash", which is an ownership implication two sentences after a paragraph about someone discarding 90 to 95 percent of their own supplies. `facts.md` Hard rule 4 forbids implying first-hand ownership of these specific products. | Disambiguate to the list reading. Replace `I have kept all three, for different reasons` with `I have kept all three on the list, for different reasons`. Change nothing else in that sentence. |
| `What I would skip (and what to buy instead)` | `261` | `minor` | "rather than storing 400 tabs you will never peel" contradicts the draft's own "480-piece pack" at l.219 and `facts.md` §Product picks row 14. Two different figures for the same pack, 42 lines apart, reads as sloppiness in a post whose whole pitch is accuracy. | In H2 8, change `storing 400 tabs you will never peel` to `storing 480 tabs you will never peel`. |
| `Pens, highlighters and markers` + `Notebooks and paper` | `61`, `119` | `minor` | Both section intros pack three required jargon glosses into a single run-on sentence (l.61 is 55 words, l.119 is 47). The glosses themselves are correct and correctly placed at first use, but as prose they read as a front-loaded lecture before the reader reaches any product, and they are the two most list-shaped paragraphs in a post that is under the bullet-list floor. | Convert the gloss run in each of these two section intros into a short bullet list, keeping the wording and the terms in the same order and keeping the list before the first H3 so the glosses still land at first use. Example shape for l.61: keep `This is where the aesthetic genuinely pays off, because a pen is the thing your hand touches every day. Three terms first, in plain English:` as prose, then three `- ` bullets, one per term. Do the same for the sizes and dot-ruled glosses at l.119. |
| all body sections | `35` | `minor` | Only one standalone-question paragraph in 2,873 words, against a floor of one per major section and against `voice.md` §Lexicon, which names reader-directed rhetorical hooks ("Do you ever feel...?") as an Olga signature. The post currently asks the reader a direct question once, in H2 1. | Add two standalone-question paragraphs, each on its own line with blank lines around it, in the long item sections. Suggested placements: in `Pens, highlighters and markers` before the first H3 (something like `So which one do you actually buy first?`), and in `Washi tape, tabs and sticky notes` before the first H3 (something like `How much of this do you really need?`). One sentence each, no answer in the same paragraph. |
| `Spend your energy on the notes, not the note-keeping` | `275` | `minor` | The CTA bridge opens `If the point of nicer supplies is spending less of your attention on the mundane parts of studying and working`, but that is not the point the post argued. The body's thesis is narrower and was stated twice: nice supplies lower the cost of starting. The bridge quietly swaps in an efficiency premise to make the segue to the Text Summarizer work, which is the one place the post's argument slackens. | Rebuild the CTA's first sentence on the argument the post actually made. E.g. `The whole case for nicer supplies was that they lower the cost of starting. The same logic applies to what happens once the notebook fills up.` Keep the second paragraph, the `/ai-tools` link, the action anchor and the single Text Summarizer mention exactly as they are. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The downsizing-filter contradiction is fully resolved, in all four required places, and the Bande item uses a genuinely different reason.** This was the blocking issue carried from `plan-review.md` issue #1, and the draft executes it better than the plan asked. l.57 names all three items up front and promises a resolution; l.83 and l.219 flag pack size and point forward, with l.219 explicitly tying itself to the Sarasa case ("the same pack-size problem as the Sarasa set"); l.209 opens with "Now the honest part, and it is not about pack size" and pivots to habit-existence, which is exactly the reframe `plan-review.md` asked Stage 3b to verify; and l.261 settles all three individually, with "No smaller version fixes it, because the issue is whether the decorating habit already exists" doing the specific work required. The Bande `Best for:` line was also changed from the outline's "page-flagging and decoration from a single roll" to "people who already decorate their pages", which aligns the segment label with the downside instead of fighting it. Do not touch any of this.
- **l.31's handling of the fresh start effect.** "Worth saying plainly: that was one person's observation on social media, not a study they cited, so hold it loosely." This is the single hardest thing `facts.md` §Rejected asked for, it is done in one sentence, and it converts a sourcing weakness into a visible trust signal. Preserve verbatim.
- **The honest-downside discipline across all 17 H3 blocks, including the ones that cost the sale.** Every downside is a real reason not to buy, compressed from `facts.md` rather than pasted, and several are the kind most affiliate roundups suppress: the Maruman "fails the aesthetic brief outright if you wanted colour" (l.151), the Midori "if you want a notebook that looks like something before you write in it, this is not the one" (l.161), the Hobonichi "buying in September wastes months you paid for" (l.185) in a post dated September. The Post-it and Rhodia downsides being conceptual rather than physical (l.171, l.229) is also the right call. None of these should be softened.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. Line 271, H2 8. The closing quotation "Before joining the haul, check what
   you already have. Your old pens might still work." is from @ElShai_eg on X,
   not from r/planners, but it currently sits unattributed right after "As
   someone in r/planners wrote:" so it reads as the same person. Give it its
   own attribution and make the platform switch visible. Replace
   `The cure is unglamorous and free. "Before joining the haul, check what you
   already have. Your old pens might still work."` with something like
   `The cure is unglamorous and free, and the same X post that opened this
   piece already said it: "Before joining the haul, check what you already
   have. Your old pens might still work."` Keep the quoted string byte-exact.

2. Line 15, intro paragraph 1. Add the opinion frame that facts.md §Rejected
   requires on the "more likely to open the notebook" claim. Change the third
   sentence to `In my experience, supplies you genuinely like the look of
   really can make you more likely to open the notebook, and over a term that
   small thing adds up.` Do not strengthen the claim and do not add a citation.

3. Line 57, H2 2. Change `I have kept all three, for different reasons` to
   `I have kept all three on the list, for different reasons`, so it cannot be
   read as claiming you personally own these three products. Change nothing
   else in that sentence.

4. Line 261, H2 8. Change `storing 400 tabs you will never peel` to
   `storing 480 tabs you will never peel`, matching line 219 and facts.md
   §Product picks row 14.

5. Lines 61 and 119, the section intros of `Pens, highlighters and markers`
   and `Notebooks and paper`. Convert the run-on jargon-gloss sentence in each
   into a short bullet list. Keep the same wording, the same terms, and the
   same order, and keep the list before the first H3 so each term is still
   glossed at first use. For line 61, keep `This is where the aesthetic
   genuinely pays off, because a pen is the thing your hand touches every day.
   Three terms first, in plain English:` as prose, then one `- ` bullet each
   for nib, bleed-through/ghosting, and archival/pigment ink. Do the same at
   line 119 for B5, A5 and dot-ruled.

6. Add two standalone-question paragraphs, each alone on its own line with
   blank lines around it. Put one in `Pens, highlighters and markers` before
   the first H3 (e.g. `So which one do you actually buy first?`) and one in
   `Washi tape, tabs and sticky notes` before the first H3 (e.g. `How much of
   this do you really need?`). One sentence each, and do not answer the
   question inside the same paragraph.

7. Line 275, the CTA. The opening clause `If the point of nicer supplies is
   spending less of your attention on the mundane parts of studying and
   working` asserts a premise the post did not argue. Rebuild it on the
   argument the post actually made, e.g. `The whole case for nicer supplies
   was that they lower the cost of starting. The same logic applies to what
   happens once the notebook fills up.` Keep the second paragraph, the
   /ai-tools link, the action anchor and the single Text Summarizer mention
   exactly as they are.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/aesthetic-stationery/draft-v2.md. Do not overwrite the
prior draft.
```

## 10. Reviewer notes (free-form)

**Ruling on the truncated u/dogfault_ quote (writer-flagged item a).** Honest, and correctly attributed. The draft quotes the first sentence byte-exact inside quotation marks and simply stops before the second, which contains the forbidden phrase "game changer". Dropping a trailing sentence is not the same as an ellipsis that alters a claim: the quoted portion is complete, self-contained, and says exactly what the surrounding sentence claims it says. Attribution to "the top answer" of the r/stationery start-over thread rather than to the handle is accurate against `facts.md` §Named examples. The residual half of the quote is then handled as reported speech at l.147 ("the person who said buying good paper was what changed how writing felt for them"), outside quotation marks, which is the correct register for a paraphrase and does not overstate the original. No issue. This is the right way to route around a forbidden phrase that lives inside a source quote, and it should be left alone.

**Ruling on the "washi" gloss placement (writer-flagged item 4).** It works. The literal term "washi" first appears in the H2 6 heading at l.199 and is glossed in the first sentence of the very next paragraph at l.201, so no reader meets the word without an explanation within one line. The dodge at l.57, calling the item "the Bande sticker rolls" instead of "the Bande washi roll stickers", costs nothing: Bande is a brand name, the referent is unambiguous, and the H3 at l.203 restores the full product name once the term is glossed. All six required glosses land at or before first use, verified individually: nib / bleed-through / archival-pigment at l.61 before their first uses at l.93, l.113 and l.99; B5, A5 and dot-ruled at l.119 before l.125, l.141 and l.191; A6 at l.181, one line after its heading appearance; washi at l.201.

**Gate 2 watch item, not a writer instruction: the P2 expertise claim.** l.17 reads "I take a lot of notes, by hand, and I have bought my share of pretty things that never earned their place." The outline's §P2 asserts this is "documented in `voice.md` §Personal-anecdote bank". It is not. That bank lists the aviation PR pivot, the first-blog intimidation, the Grammarly/Hemingway editor, building the AI tools, and timeboxing. Nothing about hand note-taking or about buying stationery that went unused. The hand-notes half is loosely supported by `brief.md` §Founder anecdote ("sketching AI tools by hand in notebooks first"); the "bought my share of pretty things" half is supported by nothing on file. It is category-level and so does not breach `facts.md` Hard rule 4, and the writer was following an approved outline, so I have not logged it as an issue and the writer should not change it unprompted. But it is a first-person claim about Olga that no profile doc backs, in the post's authority paragraph, and the human should confirm at Gate 2 that it is true before it ships. If it is true, `voice.md` §Personal-anecdote bank should gain the line so future posts can draw on it legitimately.

**Minor observation, not logged.** l.31 says "That post gives the feeling a name" immediately after a quotation that does not contain the name. `facts.md` §Rejected confirms the X post does name the term elsewhere, so the claim is true, but the reader cannot see it in the excerpt shown. If the writer is touching that paragraph anyway, "That poster elsewhere gives the feeling a name" would close the gap. Not worth a revision pass on its own.

**Compliance items outside the checklist tables, all clean.** `custom-instructions.md` §Image style: the featured slot stays `ai-prompt` (outline-level, unchanged by the draft) and the single `remotion` slot is a genuine diagram, not a blanket conversion. `custom-instructions.md` §Content policy: real tagged affiliate links throughout, disclosure present, no placeholders. `blog-craft.md` §Heading structure would prefer the first H2 of a transactional post to be phrased as a question containing the target keyword; H2 1 contains the keyword but is not a question. That is an outline-level decision, locked, and not a draft fault.

**For the editor.** If the writer applies all seven items, this is an approve on iteration 2. The only issue with any judgment content is #1, and the fix is mechanical. Nothing in §7 requires re-argument or restructuring, and no section needs rewriting, so the revise pass should be surgical. Watch that the writer does not "improve" H2 8's Bande paragraph or l.31 while in the file.
