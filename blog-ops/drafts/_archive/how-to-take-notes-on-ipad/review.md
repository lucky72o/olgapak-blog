# Review: how-to-take-notes-on-ipad draft-v2

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v1.md` (diff basis), `blog-ops/drafts/how-to-take-notes-on-ipad/review-v1.md` (§9 carry-forward), `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/facts.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/brief.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/research/{serp,reddit,x}.md`, `blog-ops/drafts/how-to-take-notes-on-ipad/research/_raw/x-07-antlerposter.json`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/authors.md`, `blog-ops/profile/audience.md`, `blog-ops/profile/blog.md`, `blog-ops/profile/site-conventions.md`, `blog-ops/profile/custom-instructions.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `${CLAUDE_PLUGIN_ROOT}/adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md` (word count: `2,499` body prose excluding FAQ; outline target: `2,420`)
- Outline: `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1-3 sentences): All seven `review-v1.md` §9 items landed verbatim and the diff against draft-v1 is exactly seven hunks with no collateral edits, including the one `major` (the false Reddit provenance claim at old line 133), which I independently re-verified: `grep -i 'protector|paperlike|matte' research/reddit.md` returns nothing, and the replacement now credits X and the SERP guides, which is where `facts.md` §Named examples actually sources it. Every forcing gate in Step 4 is clear: 0 critical, 0 major, 0 forbidden phrases, 0 em-dashes, 0 prices, 0 markers of any kind, structure byte-matched to the outline, 5 external links with no SERP-competitor host, word count +3.3%. Two `minor` copy-level issues remain (both introduced by my own literal replacement strings in iteration 1), neither of which is a forcing condition and neither of which justifies spending the last revise pass; see §10 for how to land them.

**Iteration counter:** this is revision pass `2` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. Not applicable, the verdict is `approve`.

## Carry-forward audit: did every `review-v1.md` §9 item land?

`diff -u draft-v1.md draft-v2.md` produces exactly seven hunks and nothing else. Independently confirmed, not taken on report.

| §9 item | Line in v2 | Landed? | Verified how |
|---|---|---|---|
| 1. Replace the false Reddit-plus-X provenance claim | 135 | yes, verbatim | Text now reads "it came up unprompted in my X research and again in the other guides I read". Re-greped `research/reddit.md` for `protector`, `paperlike`, `matte`: zero hits, so the v1 `major` was genuinely false. The two real sources are `research/x.md` L31/L106-107 (@ManishPushkar) and `research/serp.md` L89/L180 (hellobrio, rank 4), which is exactly what the new wording claims. Correct. |
| 2. Attribute the professor anecdote | 144 | yes, verbatim | Now "One student on X even described a professor who banned tablets for note-taking in his class because, he was told, a past student...". The attribution frame is present and the male pronoun for the professor is supported by `research/_raw/x-07-antlerposter.json` ("he pointed it out to me"). One residual pronoun-antecedent wobble in my own supplied string, logged as `minor` in §7 row 2. |
| 3. Split the 48-word expertise sentence at line 17 | 17 | yes, verbatim | Now two sentences (26 + 22 words). Intro sentence-length stddev improved from a 29-word floor to a 21-word floor. Intro total dropped to 175 words, so the "do not lengthen the intro" constraint held. |
| 4. Bridge the excerpt's "5-step routine" promise at line 21 | 21 | yes, verbatim | The bridge works: "all five" now reconciles the excerpt with the four `Step N` headings plus H2 1. The literal string I specified introduced a list-parallelism wobble; ruled on in §10 and logged as `minor` in §7 row 1. No heading was renumbered, the excerpt is untouched, no fifth Step heading was added. |
| 5. Rewrite line 58's search-industry framing | 58 | yes, verbatim | Now "Almost nobody writing about iPad note-taking mentions either of these two, and that is a gap rather than an accident." The second sentence ("They are structure tools rather than handwriting tools...") is byte-identical to v1. Greped the whole draft for `SERP`, `funnel`, `featured snippet`, `rich snippet`, `E-E-A-T`: zero hits anywhere now, not just the intro. |
| 6. Add one standalone question in H2 6 before the gear list | 124 | yes, verbatim | "So what actually earns a place in the bag?" sits as its own paragraph immediately before the list lead-in. No rhetorical questions were added anywhere else, so the "three more would read as a tic" constraint held. Body now carries four standalone questions (L62, L89, L104, L124). |
| 7. Optional keyword placement at line 100 | 100 | yes, applied | "Every method I have written about on this blog works when you take notes on an iPad". Reads naturally, not forced. This lifts body-prose keyword count from 1 to 2, clearing the `blog-craft.md` 2-8 floor on the strict basis. The v1 `minor` (§7 row 6) is closed. |

Collateral damage check: zero. No heading, no frontmatter field, no link, no `[IMAGE:]` marker, no FAQ answer, and none of the three §8 "do not touch" zones (the study section, the GoodNotes framing, the inline jargon glosses) appears in the diff.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `blog-ops/profile/authors.md`) | yes | The v1 `partial` is upgraded. Body was already a strong match (warm, first-person, self-implicating at L139, concessive rather than salesy). The intro drift that caused the v1 downgrade is materially reduced: L17 is now two sentences instead of one 48-word sentence, and the intro's sentence-length stddev is 5.61 with a 21-word floor. See §10 note 3 for the honest limit of that improvement. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep for `\b(one could\|one should\|users are\|stakeholders)\b` returns nothing. Second person used consistently for the reader; `I` used for the author's own testing and research. |
| Active voice (no "X was scanned" shapes) | yes | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returns nothing. The hook at L15 keeps its deliberate double passive ("was bought to take notes on and is currently being used to watch television in bed"), which is the outline's own drafted wording and reads as intended irony. Not flagged, same ruling as v1. |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Per-section stddev of sentence length, computed on link-stripped prose with `[IMAGE:]` lines excluded: intro 5.61, H2 1 8.96, H2 2 7.72, H2 3 9.74, H2 4 11.12, H2 5 9.79, H2 6 10.17, H2 7 10.98, CTA 9.87. All above the `<4` fail threshold. Shortest sentence in the post is 1 word (H2 7), longest 42 (H2 6). |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | All 23 phrases from `writing-standards.md` §Forbidden phrases greped individually against draft-v2. `voice.md` §Additional forbidden phrases records "None beyond the generic list in writing-standards.md", so nothing extends it. |
| Em-dash count: `0` (grep `—`); any hits = automatic §1 fail, each logged in §7 as `major` | yes | Zero. |
| En-dash context: every `–` hit is inside a numeric range (digits on both sides) | yes | Zero en-dashes in the file, so vacuously clean. |

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):
- None found.

**Intro jargon check (§1.7):** pass, and stronger than v1. The intro (L15-L21) contains none of the SEO/marketing baseline patterns and none of the `audience.md` §Niche jargon translation entries. §9 item 5 removed the one search-industry sentence that sat in the body (old L58), so the whole document is now clean of that register, not just the intro. Inline jargon translation remains intact at every first use: "annotate" (L33), "paper-feel screen protector" (L130), "palm rejection" (L133), "handwriting search" (L112), "Scribble" (L96), "Quick Notes" (L75), "Smart Selection" (L116).

**Intro-hook over-anchoring (§1.9):** not applicable. The hook is an evergreen scene (an unused iPad), not a time-bound event, so there is no hook noun phrase to over-repeat. The post reads fine in 12 months.

**Product code-literal grep (§1.8):** `modules.product` is on. `blog-ops/profile/product.md` defines no backticked internal code constants (the four tools are plain proper nouns), so there is nothing to grep for. Pass by absence.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template (title, date, excerpt, tags, authors, cover, JSON-LD) | yes | Byte-identical to v1 (no frontmatter hunk in the diff) and re-validated against `adapters/publish/frontmatter/wordpress.md`: `title` quoted at 58 chars (inside the 50-60 band), `date: 2026-08-19`, `excerpt` 152 chars (≤160), `tags` has 4 entries (`note-taking`, `note-taking app`, `students`, `productivity`), all four present in `blog.md` §Tag taxonomy as live WP terms; `authors: Olga Pak` matches the byline in `authors.md`; `draft: true` present; correctly no `cover`/`heroImage` field, which the wordpress template forbids. |
| Title in frontmatter matches outline "Final title" exactly | yes | `How to Take Notes on an iPad: A Setup That Actually Sticks`, byte-identical to outline §Final title. |
| Slug / meta description match outline | yes | Excerpt byte-identical to outline §Final meta description. Slug is directory-implied `how-to-take-notes-on-ipad`, matching outline §Final slug. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | All seven outline H2s present in order (L23, 39, 66, 79, 98, 118, 137), plus the writer-titled closing-CTA H2 at L149 and `## FAQ` at L155. All four body H3s present in order under their parent H2s (L47, 54, 60, 110). Heading wording is byte-identical to the outline in all eleven cases; only capitalization differs, which is correct per `writing-standards.md` §Formatting and was settled in `review-v1.md` §10 ruling 2. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | yes | Exactly 4 paragraphs (L15, L17, L19, L21) of 2 / 2 / 1 / 1 sentences. The §9 item 3 split moved L17 from 1 sentence to 2, still inside the 1-3 band. One internal link in the intro (`/note-taking-methods`, L19), inside the ≤2 ceiling. Grep for an absolute cross-post link (`https://olgapak.com/...`) returns nothing. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | Seven of the eight body H2s carry a bullet or numbered list; the CTA H2 carries a concrete named example (Text Summarizer). Four now also carry a standalone question. All eight clear the burstiness bar independently. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | yes | Five `###` items (L157, L161, L165, L169, L173), each byte-identical to the corresponding outline §FAQ block question, in outline order. FAQ is the last block; nothing follows the final answer at L175. Conclusion/CTA sits immediately before `## FAQ` per `blog-craft.md` §Conclusion / CTA. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | n/a | The wordpress-rest adapter emits no JSON-LD; `adapters/publish/frontmatter/wordpress.md` §FAQ states FAQPage schema is a WP-plugin concern. Sub-check correctly skipped per the skill's Step 3 §2.1 instruction. |
| Outro / CTA paragraph present | yes | L151-L153, two short paragraphs. Links the `blog.md` §Primary CTA target with the action anchor "Try my free AI tools to automate the mundane", which reproduces the `blog.md` §Primary CTA Hook verbatim. Not a bare homepage link. No feature re-list. |

Structural deltas vs outline (if any):
- None. Seven H2s + CTA H2 + FAQ, four body H3s, five FAQ items, four in-post image slots, five internal blog links, one CTA link and five external links all match the outline's plan exactly. Nothing in the seven-hunk diff touched structure.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Unchanged from v1 and re-checked: "three of the five Reddit threads I read" (L45) traces to facts.md §Voice-of-customer themes; "70% notes and 30% cue column" (L102) to §Named examples; "In 2014" and "A 2019 direct replication" (L85, L87) to §Study findings; "4 years of uni" (L29) sits inside a sourced quote; the Pencil Pro feature list (L133) to §Apple feature facts. No stat was manufactured to fill the gap facts.md §Statistics deliberately records as empty. The seven-hunk diff introduced no new number. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | n/a | `modules.competitors` is off for this blog. Applying the analogous test to the six third-party apps anyway: all six are labelled by fit, not ranked, and each label traces to facts.md §App landscape. No bare dismissals. The §9 item 5 rewrite at L58 did not change any app's framing, only the lens on why the SERP omits Notion and Obsidian. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | n/a | Module off, so no 14-day freshness rule applies. Separately re-confirmed for the post-specific constraint: `grep '\$'` returns zero hits across the whole file. Every price-adjacent word ("cost", "cheaper", "expensive", "monthly", "free", "fortune") is relative or a pricing-model term with no figure attached. |
| Product mentions (count: `1`, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | yes | Exactly one, at L153, in the closing CTA, naming Text Summarizer. Matches `plan.md`'s one-mention budget and `product.md` §Positioning recommendations. L151 sets up the mechanism so the mention lands on an argument the post already made. Deletion test: removing it kills the CTA entirely. |
| Internal links (count: `5` blog-post links + `1` CTA link) exist in the intro cluster per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` | yes | One in the intro (`/note-taking-methods`, L19), woven into a sentence rather than stacked. The other four sit in the body section where each topic is discussed: `/best-notebooks-for-note-taking` (L37), `/cornell-note-taking-method` (L102), `/charting-method-note-taking` (L106), `/how-to-stop-doomscrolling` (L145). Matches the outline's internal-link table row for row. Five total is the top of `blog-craft.md`'s 3-5 band. |
| Every internal blog link is root-relative `{route_prefix}<slug>` (trailing slash iff `blog.trailing_slash: true`), not `https://yourblog.com{route_prefix}...` (absolute = `major`) | yes | All six root-relative with no trailing slash, matching `config.yaml blog.trailing_slash: false` and `site-conventions.md` §Permalinks. The `/ai-tools` CTA link is correct as-is per `review-v1.md` §10 ruling 1, which the editor has confirmed as settled. |
| External links (count: `5`) each point to reputable sources; anchor text = literal claim | yes | Unchanged from v1 and byte-identical to the outline §External link plan table. Anchors are literal claims on the two study links and literal item names on the three product links. No outbound link sits on an app name. Inside the 3-5 band. First internal link (L19) precedes the first external link (L85). |
| Target keyword appears 2-8 times in body (actual count: `2`) | yes | Upgraded from v1's `partial`. §9 item 7 landed at L100, so the exact phrase now appears twice in body prose (L15, L100) on the strict basis §5 uses, clearing the `blog-craft.md` floor. Counting the rendered page including the FAQ gives 5 (L15, L100, L157, L161, L165), comfortably inside the 2-8 band and well short of stuffing. The v1 `minor` is closed. |

**Forbidden external links to SERP competitors (§3.5, never module-gated):** pass, zero flags. Forbidden set re-extracted from `research/serp.md` §Selected results analyzed: `tech.loveholidays.com`, `support.apple.com`, `hellobrio.com`, `blog.alexanderfyoung.com`, `zapier.com`. Per-link verdict on the five links draft-v2 renders:

| Link rendered | Host in forbidden set? | On allowlist? | Verdict |
|---|---|---|---|
| https://pubmed.ncbi.nlm.nih.gov/24760141/ | no | yes (NLM, `.gov`) | clean |
| https://link.springer.com/article/10.1007/s10648-019-09468-2 | no | academic publisher, not a ranking competitor for this keyword | clean |
| https://www.apple.com/apple-pencil/ | no (the SERP entry is `support.apple.com`, a different host and path) | yes, `apple.com` is named on `blog-craft.md` §Authoritative-site allowlist | clean |
| https://www.amazon.com/dp/B0BSBQWDSG | no | product link mandated by `custom-instructions.md` §Content policy; clean ASIN, no affiliate tag, and no affiliate disclosure is required while the links stay plain | clean |
| https://paperlike.com/products/paperlike-for-ipad | no | product link, brand page per facts.md §Product links | clean |

Zero links to `zapier.com`, `hellobrio.com`, `tech.loveholidays.com`, or `blog.alexanderfyoung.com`. The hellobrio screen-protector mechanism (serp.md L180) is still correctly reused as an unattributed plain-language explanation at L135 rather than linked, and the §9 item 1 rewrite now describes that reuse accurately.

**Invented-number check (§3.8):** pass. Greped for audience-size ranges (`\d+K to \d+K`, `\d+,?\d{3} to \d+,?\d{3}`), "N+" adoption claims, and migration/volume ranges. Zero hits. facts.md §Rejected bars the "85% of iPad owners" figure and the draft does not use it anywhere.

**Own-product pricing claims (§3.9):** pass. Grep for `\$\d` returns nothing; no usage caps, no tier names. The CTA says "free AI tools", the durable framing `blog-craft.md` §Own-product pricing claims asks for.

**Soon-to-ship feature gap check (§3.10):** pass by absence. `brief.md` §Soon-to-ship features records "None".

**Post-specific constraint audit (the four failure modes the editor flagged), re-run against draft-v2:**

1. **No prices.** PASS, clean. `grep '\$'` returns zero hits in the body and the FAQ. The @thefrikidude quote at L37 ("slightly cheaper than iPad") is the single permitted exception and names no figure. The seven-hunk diff introduced no price-adjacent language.
2. **The 2014 study keeps its visible scope limit and stays paired with the 2019 replication.** PASS, untouched. L85 states the Mueller and Oppenheimer finding, then immediately: "Notice what that study actually compared: longhand on paper against a laptop keyboard. It did not test tablets or styluses at all." L87 pairs the 2019 direct replication including the no-notes group and the authors' own "premature" verdict. L89 lands what survives both papers. FAQ L171 repeats the honest framing. Not in the diff, exactly as §8 of the v1 review demanded.
3. **No "best app" verdict.** PASS, untouched. L45 refuses out loud; FAQ L159 refuses again. Every app is labelled by fit against a facts.md §App landscape row. The §9 item 5 rewrite at L58 sits inside this section and did not introduce a ranking; "Almost nobody writing about iPad note-taking mentions either of these two" is an omission claim about coverage, not a quality verdict.
4. **Voice-of-customer attribution, GoodNotes data-loss framed as reader complaints.** PASS, and the v1 gap is closed. Attribution frames now run eight for eight: "wrote one redditor" (L27), "Another redditor came back with" and "someone on X put it more strongly" (L29), "The most-liked reply in my whole X research" (L37), "as one redditor put it" (L45), "one redditor wrote" and "Someone on X described" (L144), "One student on X even described" (L144, the item that was missing in v1), "Someone on X compressed" (L145). The GoodNotes data-loss material at L50 is untouched and still reads "Those data-loss reports are complaints readers raise rather than anything I can verify, but they come up often enough that you should back up anything you cannot afford to lose."

Unsourced / suspicious claims:
- `draft-v2.md:144`, "because, he was told, a past student", issue: not unsourced, but the pronoun's nearest antecedent is "a professor", so the clause can be read as *the professor* having been told secondhand. `research/_raw/x-07-antlerposter.json` says the opposite: the professor is the one who said it ("at the end of class he pointed it out to me and said it was because..."). The attribution frame itself is correct and the claim traces cleanly. Logged `minor`, §7 row 2. This wording came from my own iteration-1 literal string, not from writer drift.
- No other claim in the draft failed to trace. Every Apple feature statement (L70 auto-titling, L74 iCloud sync, L75 Quick Notes, L96 Scribble, L112 handwriting search "in supported languages", L116 Smart Selection, L120 finger-or-Pencil, L133 Pencil Pro feature split) maps to a verified verbatim row in facts.md §Apple feature facts.
- The v1 `major` at old line 133 is resolved and independently re-verified. It does not carry forward.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | n/a, and correct. Every claim traces to facts.md, so there was nothing to defer. The §4.4 `\| source:` validation is vacuous, which is the clean outcome, not a skipped check. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | yes. All five planned external links were resolvable and are rendered. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | yes. All five internal targets are live in `content/blog/`. No link to the three unpublished slugs facts.md bars (`digital-vs-paper-notes`, `ai-note-taking`, `best-pens-for-note-taking`). |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | yes, all four correct and none of the four is in the diff. |

Per-placeholder image audit (line numbers shifted +2 from v1 by the §9 item 6 insertion; the placeholders themselves are unchanged):

| Line | Slot | Featured-hygiene (2a) | Placement (2b) | Table-redundant chart (2c) |
|---|---|---|---|---|
| 43 | after H2 2 + 1 para, `pick-one-app.png`, ai-prompt | clean, filename is not `featured.*` and the concept is distinct from the outline's featured-image concept | clean, sits after the heading and its first body paragraph; next content line is prose | n/a, not remotion |
| 83 | after H2 4 + 1 para, `handwrite-or-type-decision.png`, remotion | clean | clean | clean, zero markdown table lines within ±20 lines |
| 122 | after H2 6 + 1 para, `gear-tiers-flat-lay.png`, ai-prompt | clean, a gear flat-lay is distinct from the featured desk scene | clean, and still clean after the §9 item 6 insertion: the line following it is the new standalone question, not a heading | n/a |
| 141 | after H2 7 + 1 para, `ipad-playing-video.png`, ai-prompt | clean | clean, next content line is a numbered list, not a heading | n/a |

Type mix still honours `custom-instructions.md` §Image style: exactly one `remotion` slot used for a genuine diagram, three `ai-prompt` slots for scenes, no blanket conversion. The featured slot stays frontmatter-only (`ai-prompt` per `config.yaml images.featured_default`) and is correctly not duplicated as an in-post placeholder.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greped for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `TBD`: zero hits. All four `[IMAGE:]` markers carry the full canonical shape including `Type:` and `Suggested filename:`.

## 5. Word count

- Draft: `2,499` words (body prose after the closing frontmatter `---`, from the intro through the end of the closing CTA, excluding the `## FAQ` block and excluding the four `[IMAGE:]` marker lines, which are production instructions rather than prose)
- Outline target: `2,420` words (outline §Word count roll-up "Total estimate (body prose, no FAQ)")
- Delta: `+3.3%`
- Band: `within ±10% = pass, no issue logged`

Supporting numbers, all on the same basis v1 used so the two reviews are comparable: raw `wc -w` on the whole file is 3,087 (was 3,061); body prose including the image markers is 2,657; the FAQ block is 366 words, unchanged. The +26-word body delta is the net of the seven hunks (item 6 adds a 9-word question, item 4 adds 12 words, items 1/2/3/5/7 net roughly +5). The ±15% ceiling is 2,783 and the draft is 284 words clear of it. The post also sits inside `blog-craft.md`'s how_to matrix band (1500-2500) and the outline's own 2,200-2,500 target.

Per-section prose totals against the outline's per-section estimates, for completeness: intro 175/200, H2 1 301/270, H2 2 456/430, H2 3 207/220, H2 4 255/290, H2 5 315/330, H2 6 326/310, H2 7 299/270, CTA 80/100. No section is more than 31 words off its estimate. The outline's flagged risk (H2 2 drifting long across three H3s) did not materialize beyond +6%.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | Both lists greped; `voice.md` adds none. |
| Zero em-dashes (`—`, grep returns nothing) | yes | Zero. |
| En-dashes (`–`) only in numeric ranges | yes | Zero en-dashes in the file. |
| First-person throughout | yes | No third-person drift markers. |
| Active voice | yes | Only the intentional hook passive at L15. |
| ≥1 rhythm marker in every H2 | yes | 7 of 8 body H2s carry a list; the CTA H2 carries a named concrete example. Four H2s now also carry a standalone question. |
| ≥1 bullet list per ~300 words | partial | 7 lists (18 `- ` bullets + 5 numbered items) across 2,499 words = one list per ~357 words, slightly under the 1-per-300 target. Every H2 except the CTA carries one, so no section reads as a wall of text. Not logged as an issue, same ruling as v1, and adding a list purely to hit a ratio would be padding. |
| ≥1 standalone-question paragraph per major section (if the selected author voice calls for it, per `blog-ops/profile/authors.md`) | yes | Upgraded from v1's `partial`. Four in the body: "Not sure?" (L62), "So what survives both papers?" (L89), "Which methods genuinely gain from a tablet?" (L104), "So what actually earns a place in the bag?" (L124, added by §9 item 6). `authors.md` does not mandate rhetorical questions and `voice.md` §Lexicon lists them as a signature move rather than a quota, so four across eight sections is the right density. Deliberately not asking for more. |
| ≥1 concrete number or named example per major section | yes | H2 1 the Reddit and X quotes; H2 2 six named apps plus "three of the five Reddit threads"; H2 3 the auto-titling and Quick Notes behaviours; H2 4 the 2014 and 2019 papers; H2 5 the 70/30 Cornell split; H2 6 the named Pencil Pro feature list; H2 7 five named mistakes with four named quotes; CTA the Text Summarizer. |
| No em-dash overuse | yes | Zero occurrences. |
| Visible sentence-length variation in every section | yes | Section stddevs 5.61 to 11.12, all above the `<4` fail threshold. The intro is the lowest at 5.61 and is the one section where the improvement is real but incomplete; see §10 note 3. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| (Intro, preview sentence) | 21 | `minor` | The "starting with" clause interrupts the list, so "the apps worth starting in", "the gear that earns its place", and "the mistakes..." read as parallel to "whether the iPad is even the right tool" rather than to "all five". Two consequences: the sentence is looser than v1's was, and it implicitly folds gear and mistakes into the five, when the five are H2 1 plus Steps 1 through 4 and gear and mistakes are the two sections after them. The writer applied my literal string correctly and flagged the wobble rather than smoothing it, which was the right call. The fix is mine to specify, not a writer defect. | Replace the whole of line 21 with: `This guide covers all five in order, starting with whether the iPad is even the right tool, then the gear that earns its place and the mistakes that turn an iPad into an expensive Netflix screen.` This keeps the "all five" bridge to the excerpt's "5-step routine" promise, bounds the five correctly, and runs 35 words against the current 38, so the intro does not lengthen. Dropping "the apps worth starting in" loses nothing: the app decision is one of the five, the excerpt already promises "the app", and H2 2 delivers it two screens later. Do NOT renumber any heading, do NOT edit the excerpt, and do NOT add a fifth Step heading. |
| The Mistakes That Turn an iPad Into an Expensive Netflix Screen | 144 | `minor` | In "a professor who banned tablets for note-taking in his class because, he was told, a past student...", the nearest antecedent for "he" is "a professor", so the clause can be read as the professor having been told secondhand. The source says the reverse: the professor is the one who said it (`research/_raw/x-07-antlerposter.json`: "at the end of class he pointed it out to me and said it was because..."). Separately, reading "he" as the student asserts a gender for @antlerposter that the raw capture never establishes. Again my own iteration-1 string, applied faithfully. | Replace `because, he was told, a past student` with `because, the professor said, a past student`. That matches the source exactly, removes the antecedent ambiguity, asserts nothing about the student's gender, and is one word shorter. Leave the quoted phrase, the attribution frame "One student on X even described", and the `Fix:` line untouched. Do NOT change "his class"; the professor's pronoun is supported by the raw capture. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **The study section (L85-L89) is still the best-executed part of the post and is still untouched.** It states the 2014 Mueller and Oppenheimer finding, names the scope limit in the reader's own language in the very next sentence ("Notice what that study actually compared: longhand on paper against a laptop keyboard. It did not test tablets or styluses at all."), pairs the 2019 direct replication including the no-notes group and the authors' "premature" verdict, then lands what survives both papers. Both links are literal-claim anchors to primary sources. This is stricter than facts.md required and it is the whole reason the post is publishable on a topic saturated with pop-science overclaims. The writer correctly kept it out of the diff. Change nothing in these five lines, at any stage, including the final humanize pass.
- **The revision discipline itself is the second strength and is worth naming.** Seven requested items, seven hunks, zero collateral edits, and the one item marked optional (§9 item 7) was applied only because it genuinely reads naturally at L100 rather than being forced. The writer also flagged the line-21 looseness upward instead of quietly improving on a literal instruction, which is exactly the right behaviour when a reviewer specifies an exact string: it kept the diff auditable and put the judgment call where it belonged. Preserve that pattern.
- **The attribution layer is now complete and is the post's core credibility asset.** Eight voice-of-customer quotes, eight attribution frames, no assertion of a third-party event as bare fact. The GoodNotes data-loss handling at L50 remains the model case ("Those data-loss reports are complaints readers raise rather than anything I can verify, but they come up often enough that you should back up anything you cannot afford to lose"): it reports the objection, refuses to assert it as a product defect, and still gives the reader an action. Do not soften it, do not strengthen it, do not cut it. The same applies to the inline jargon glosses at L33, L112, L130 and L133.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`, so no `mode=revise` pass is dispatched and no draft-v3 is produced.

The two `minor` issues in §7 carry copy-paste-ready literal replacement strings anyway, because they are single-string swaps that belong in the final polish rather than a writer revision cycle. See §10 note 1 for the recommended route.

## 10. Reviewer notes (free-form)

**Note 1, the ruling the editor asked for on line 21: the writer is right that it is looser, and I am giving the exact replacement, but it is a `minor` and it must NOT trigger a third writer pass.**

Three parts to this ruling, in order of what matters.

First, the substance: the writer's read is correct and it is worth more than the objection they raised. The "starting with" clause does interrupt the list, and there is a second defect they did not name: the sentence now implies that gear and mistakes are among "all five", when the five are H2 1 plus Steps 1 through 4 and the gear and mistakes sections come after them. So the line as it stands is both looser than v1's and slightly wrong about its own promise. That is my error, introduced by specifying a literal insertion without re-reading the full resulting sentence. The exact replacement is in §7 row 1; it is 35 words against the current 38, so it also honours the "do not lengthen the intro" constraint from iteration 1.

Second, the severity: `minor`, not `major`. The line parses, contains no false factual claim, misleads no reader about anything they will act on, and still delivers the bridge that §9 item 4 existed to build. Step 4's forcing list does not contain "loose list parallelism", and `approve` requires zero critical and zero major, not zero minor. Manufacturing a `major` out of a comma-level nit to force a fix would be exactly the "soften or harden the verdict for process reasons" failure the skill warns against, in the harden direction. The editor asked me to scope this review to what genuinely must change, and on the evidence, nothing must change.

Third, the route: apply both §7 strings at the final polish, not as a draft-v3. The skill's own division of labour allows for it ("Does not edit the draft, that's the writer's job on `mode=revise`, **or the humanize-text skill on final pass**"). Both issues are single literal string swaps with no ripple: no heading, no link, no marker, no word-count band, no FAQ answer is affected, and the intro gets 3 words shorter rather than longer. If for any reason the polish stage cannot take them, ship as-is: neither costs a reader anything, and burning the last revise pass plus a fourth-pass escalation risk on two commas would be a worse trade than shipping the looser line.

**Note 2, both remaining issues are mine, not the writer's, and that is a pattern worth registering.**

Iteration 1 specified literal replacement strings for five of its seven items, which is good practice for auditability and it worked: the diff is exactly seven hunks and every one is verifiable at a glance. The cost is that a literal string is only as good as the reviewer's read of the sentence it lands in, and two of five landed slightly off (line 21's parallelism, line 144's pronoun antecedent). Neither was catchable by the writer without overriding an explicit instruction, and the writer correctly did not override. If literal-string instructions stay the house style, the reviewer should quote the *full resulting sentence* in the §9 block, not just the substring being swapped. That would have caught both of these before they were ever written.

**Note 3, the intro voice improvement is real but partial, and I am deliberately not re-raising it.**

§9 item 3 did what it was asked: L17 went from one 48-word sentence to 26 + 22, the intro's sentence-length floor dropped from 29 words to 21, and stddev is 5.61. But `authors.md` asks for a voice that "mixes punchy short sentences with longer explanatory ones", and 21 words is not punchy. The intro still has no genuine short beat, unlike the body, which has a one-word sentence. This is a taste ceiling rather than a rule failure: the intro passes the burstiness threshold, passes the paragraph-shape check, and is 25 words under its own outline estimate. Re-raising a resolved item on the last pass with a new and stricter bar would be moving the goalposts. Recording it here as a candidate for the final humanize pass, at that pass's discretion, and nothing more. If the §7 row 1 replacement is applied, the preview sentence gets 3 words shorter, which helps marginally.

**Note 4, settled rulings re-confirmed, do not reopen any of these.**

- **Title Case headings are correct.** `writing-standards.md` §Formatting: "Title case for headings on blog, LinkedIn, newsletter." The outline's sentence-case H2 strings were transcription, not a case directive; the heading *wording* is byte-identical in all eleven cases. The sentence-case FAQ questions alongside Title Case body headings match house convention (`charting-method-note-taking.md` does the same).
- **`/ai-tools` root-relative is correct.** `site-conventions.md` §Permalinks governs, `config.yaml route_prefix: /` puts the page on the same host, and every recent post in `content/blog/` uses the root-relative form.
- **The two unlinked "Apple's own documentation says..." mentions (L120, FAQ L167) are deliberate.** `plan-review.md` records the decision: the `support.apple.com` citations were cut at the plan gate to stay inside `blog-craft.md`'s 3-5 external-link cap, and the draft renders exactly 5. Adding a sixth to link the Apple doc would break the cap and, separately, `support.apple.com` is a top-10 SERP result for this keyword, so linking it would trip §3.5. Flagged here so no later pass "fixes" it.

**Note 5, other observations for the editor, none of them defects.**

- **The FAQ runs 366 words against the outline's ~200 estimate**, unchanged from v1. Not gated: the outline explicitly excludes the FAQ from the roll-up, and the length goes into substance rather than padding. Leave it.
- **The stacked lead-ins at L124 and L126** ("So what actually earns a place in the bag?" immediately followed by "Here is the whole list, in descending order of how much it matters:") read very slightly stuttery. I am not logging it, and I recommend against merging them: the question needs to stay a standalone paragraph to serve as the §6 rhythm marker that §9 item 6 was written to add, and the second line carries information the question does not (the descending-importance ordering). Noting it only so a later pass does not "discover" it and merge them without knowing why the shape is there.
- **`mind-mapping-note-taking-method` is still available in facts.md §Internal links and still unlinked** at L107, which discusses mind maps directly. The outline locked the plan at five internal links and the draft honoured it, so this is not a defect. A candidate for a future refresh, since the anchor sentence already exists.
- **Nothing in this review requires re-running research, re-checking a fact, touching the outline, or dispatching the writer.** The post is publishable as it stands. Reminder for the stages after this one, per `custom-instructions.md`: the WordPress post stays `draft`, the Rank Math focus keyword must be set to the target keyword manually before publishing, and going live is the operator's own wp-admin action after the Gate 2 preview.
