# Review: dopamine-detox draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/dopamine-detox/draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `plan.md`, `plan-review.md`, `plan-review-v1.md`, `research/serp.md`, `research/reddit.md`, `research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `authors.md`, `audience.md`, `blog.md`, `product.md`, `custom-instructions.md`, `adapters/publish/frontmatter/wordpress.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/dopamine-detox/draft-v1.md` (word count: `2,255` body prose excluding FAQ; outline roll-up target: `2,260`)
- Outline: `blog-ops/drafts/dopamine-detox/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1-3 sentences): The draft clears the highest-risk axis on this post cleanly, every one of facts.md's four rejected claims is absent in stated, softened, and implied form, the caffeine analogy is framed strictly as reported experience with two explicit disclaimers, the PMC review is cited with the mandated "a peer-reviewed review reports" phrasing and no number attached, and the section 6 guardrail from both plan reviews is honored exactly. Structure, frontmatter, link plan, image placement, keyword density, and word count all match the approved outline, and every number in the body traces to facts.md. Six `minor` issues remain, all line-level polish that does not block the verdict.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§voice.md + §authors.md) | yes | Warm, first-person, lightly self-deprecating, and the punchy-short-next-to-long rhythm authors.md asks for is present in every body section ("Nothing is being flushed out. Nothing is being emptied." L28; "Pick one. Two if you are feeling brave." L82; "That lands." L127; "Fair." L123). The register is steadier than voice.md's "Ouch!/Yay!/Nope!" beats, which is the right call for a correction post and is not drift. One exception: the intro itself carries no short beat, logged as issue 1. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | yes | Grep for `one could\|one should\|users are\|stakeholders` returns nothing. Reader is addressed as `you` throughout; the author speaks as `I` in the intro (L16), H2 2 (L47, L51), H3 4.3 (L94), H3 4.4 (L100), and H2 6 (L123). |
| Active voice (no "X was scanned" shapes) | yes | No passive markers found. The one construction that could have drifted passive, the Harvard Health documentation beat, is written active: "Harvard Health documented people avoiding eating..." (L66). |
| Burstiness present, every H2 section has visible sentence-length variation | yes | Per-section sentence-length standard deviation: H2 1 = 10.4, H2 2 = 9.5, H2 3 = 9.6, H2 4 = 11.0, H2 5 = 9.5, H2 6 = 7.7, CTA = 14.8. All far above the <4 uniformity flag. Intro sd = 6.8 but with a 27-word floor, see issue 1. |
| Forbidden phrases count: `0` (list below); any hits = fail | yes | Grep against writing-standards.md §Forbidden phrases returns nothing. voice.md §Additional forbidden phrases declares "None beyond the generic list", so there is no second list to grep. |
| Em-dash count: `0` (grep U+2014); any hits = automatic §1 fail, each logged in §7 as `major` | yes | `grep -c` returns 0. |
| En-dash context: every U+2013 hit is inside a numeric range (digits on both sides) | yes | `grep -c` returns 0. No en-dashes to contextualize. |

Forbidden phrases found (grep output from writing-standards.md + voice.md lists):
- None found.

**Intro jargon check (§1.7):** clean. No SEO/marketing jargon in the intro, and no unexplained specialist term. audience.md's §Niche jargon translation table is honored in the body too: `default mode network` is glossed inline on first use ("the group of brain areas that switches on when you are not busy with a task", L45) and `Parkinson's Law` is translated inline exactly as the table specifies ("work expands to fill the time you give it", L100). One body term escapes the same treatment, see issue 5.

**Hustle-culture check (brief.md §Avoid list):** clean, and better than clean. The post distances itself from the trend without sneering at the reader: L94 ("I am naming them because they exist, not because you owe anyone a week"), L98 ("an evening of being bored and annoyed at a productivity trend"), and L123, where the post turns the r/adhdwomen "it's always an advert for an app" complaint on itself before answering it. No "grind harder" register anywhere. One line comes closest to the wrong side of this, see issue 3.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | yes | Checked against `adapters/publish/frontmatter/wordpress.md`. `title` (57 chars, in the 50-60 band), `date: 2026-09-07`, `excerpt` (142 chars, under 160), `tags` (3, in the 2-4 band), `authors: [Olga Pak]` matching authors.md's byline, `draft: true`. Correctly carries NO `cover`/`heroImage` field, which the wordpress template forbids (§No cover/heroImage field): the featured image ships via media upload as `featured_media`. No JSON-LD requirement at this adapter level, so that sub-check is skipped per SKILL.md §2.1. |
| Title in frontmatter matches outline "Final title" exactly | yes | `Dopamine Detox: What It Is and How to Actually Do It Right`, character-for-character. |
| Slug / meta description match outline | yes | Slug is directory-derived (`dopamine-detox`); this frontmatter template defines no slug field, so N/A by design. `excerpt` matches outline "Final meta description" character-for-character. |
| H2 order in body matches outline body-sections list exactly (no additions, no removals, no reorderings) | yes | Six body H2s in outline order, headings verbatim, plus the closing CTA H2 and `## FAQ`. H3s inside H2 4 match outline 4.1-4.4 in order and wording. Full diff below. |
| Intro is 2-4 paragraphs, 1-3 sentences each (hook / expertise / internal-link cluster / preview) | yes | Four paragraphs (L14, L16, L18, L20), sentence counts 2/1/1/1. Shape matches the outline's P1-P4 plan exactly, including the target keyword in sentence 1. One intro internal link (`/how-to-stop-doomscrolling`), inside the ≤2 ceiling. |
| Every H2 has at least one rhythm marker (bullet list OR standalone question OR concrete number OR burstiness) | yes | H2 1: standalone question L34 + named example (Sepah, 2019) + sd 10.4. H2 2: bullet list + named example + sd 9.5. H2 3: table + question-opener L68 + sd 9.6. H2 4: numbered H3s + question L80 + sd 11.0. H2 5: bullet list + question L119 + sd 9.5. H2 6: named example (background audio) + sd 7.7. CTA: sd 14.8. |
| FAQ section has H3 question items matching outline FAQ set 1:1 | yes | Five questions, verbatim and in outline order. |
| JSON-LD FAQPage schema in frontmatter matches FAQ body questions 1:1 | N/A | wordpress-rest emits no JSON-LD at the adapter level; the frontmatter template states FAQPage schema is a WP-plugin concern. Skipped per SKILL.md §2.1. |
| Outro / CTA paragraph present | yes | Two short paragraphs (L133, L135) immediately before `## FAQ`. Nothing follows the final FAQ answer. CTA carries the action anchor from blog.md §Primary CTA verbatim ("Try my free AI tools to automate the mundane") pointing at `/ai-tools`, not the bare homepage. |

Structural deltas vs outline (if any):
- **None.** H2 diff is a clean match: (1) `What a dopamine detox actually is (and why the name is wrong)`, (2) `So why does it seem to work?`, (3) `The viral version versus what the psychologist who coined it suggested`, (4) `How to do a dopamine detox right`, (5) `What to do with the hours you get back`, (6) `When a dopamine detox is not the right tool`, then the CTA H2 and `## FAQ`.
- **Examined and cleared:** the outline specifies "Two paragraphs, no more" for H2 6, and the draft renders four (L123, L125, L127, L129). This is not a delta. The outline's own bullet list for that section authorizes the r/adhdwomen "advert for a paid app" line as optional colour on top of the two required beats, and writing-standards.md §Paragraph rules caps paragraphs at 1-3 sentences, which forces the breaks. Both required beats are present and correctly ordered: not-one-size-fits-all (L125, L127) and the one-sentence professional pointer (L129). Section runs 207 words against a 240 target.
- **Examined and cleared:** the internal link `/time-blocking` was optional per the outline ("Writer drops the second if the section gets crowded"). The writer kept it and placed it in its own paragraph (L119) behind a standalone question, rather than stacking it with `/screen-free-hobbies` (L117). That is the right resolution of the outline's condition.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | yes | Full audit below. Every number in the body traces to facts.md §Statistics or to a verbatim quote in §Voice-of-customer. No percentages, no timelines, no effect sizes anywhere in the draft, which is exactly what facts.md's "Deliberately thin" note demands. Zero `[VERIFY:]` markers were needed and zero were emitted. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | N/A | `modules.competitors: false` in config.yaml. No competitors named, no `facts.md` §Competitor facts section exists. Competitor-freshness rules do not apply to this blog. |
| Pricing / feature claims about competitors match `facts.md` values (verify dates not stale) | N/A | Same, competitors module off. |
| Product mentions (count: `2` in one sentence, `modules.product` is on) are each earning their place, none can be deleted without losing meaning | yes | "free AI tools" and "Text Summarizer", both in the CTA sentence at L135, which is the only product mention in the post. Deletion rule: the sentence collapses without them, since the whole CTA is the tool recommendation. Well under the 3-5 normal band. No dollar amounts, no usage caps, no tier breakdown (product.md notes the tools are free with no pricing page). brief.md §Soon-to-ship features is empty, so the gap-callout check is vacuous. |
| Internal links (count: `5` blog cross-links + `1` CTA) exist in the intro cluster per blog-craft.md | yes | All five planned blog links present at their planned locations: `/how-to-stop-doomscrolling` (intro L18), `/digital-detox-plan` (H2 4 L72), `/how-to-reduce-screen-time` (H3 4.1 L80), `/screen-free-hobbies` (H2 5 L117), `/time-blocking` (H2 5 L119). Five is the top of blog-craft.md's 3-5 range, as the outline intended. All five targets verified to exist in `content/blog/`. The first internal link (L18) precedes the first external link (L28), as required. |
| Every internal blog link is root-relative (`route_prefix` + post slug, trailing slash iff `blog.trailing_slash: true`), not absolute | yes | All six root-relative, no trailing slashes, matching `route_prefix: /` and `trailing_slash: false`. Grep for an absolute `olgapak.com` cross-post link returns nothing. `/ai-tools` matches the pattern used by the already-published `how-to-reduce-screen-time`, `time-blocking`, and `screen-free-hobbies`. |
| External links (count: `5`) each point to reputable sources; anchor text = literal claim | yes | Exactly the five links in the outline's External link plan, no additions. Per-link forbidden-SERP verdict below. |
| Target keyword appears 2-8 times in body (actual count: `6`) | yes | Six on the §5 body basis (prose plus body headings, excluding FAQ): three in prose, three in headings. The locked FAQ questions add four more, for ten across the whole document. Judged natural rather than stuffed: all four FAQ hits are the outline's verbatim locked questions and read as real search phrasings, not insertions. |

**Forbidden-SERP-competitor external link check (§3.5, unconditional).** Forbidden set from `research/serp.md` §Selected results analyzed: `health.clevelandclinic.org/dopamine-detox` (rank 2), `pmc.ncbi.nlm.nih.gov/articles/PMC11223451/` (rank 3), `biogena.com` (rank 4), `medicalnewstoday.com` (rank 5), `reddit.com/r/productivity/...1i2wqp1` (rank 5), `health.harvard.edu/blog/dopamine-fasting-...` (rank 6), `crisistextline.org` (rank 8). Per-link verdict:

| Rendered link | In forbidden set? | Allowlisted? | Verdict |
|---|---|---|---|
| `health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-...` (L28) | yes, rank 6 | yes, `.edu` domain class (blog-craft.md §Authoritative-site allowlist, Government / academic) | permitted, allowlist exception is intentional |
| `nytimes.com/2019/11/07/style/dopamine-fasting.html` (L32) | no | yes, NYT (Major publications) | permitted |
| `pmc.ncbi.nlm.nih.gov/articles/PMC6127769/` (L45) | no | yes, NLM (Government / academic) | permitted |
| `pmc.ncbi.nlm.nih.gov/articles/PMC11223451/` (L47) | yes, rank 3 | yes, NIH/NLM | permitted, exactly the exception facts.md §Scope-limited pre-authorized |
| `linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/` (L61) | no | N/A, classified `primary_source` under blog-craft.md §Forbidden external links step 3 | permitted |

Zero forbidden-competitor links. The four ranking competitors the outline ruled out (Cleveland Clinic, biogena, MedicalNewsToday, Crisis Text Line) appear nowhere in the draft, and neither does the rank-5 Reddit thread. The one claim sourced only to Cleveland Clinic, the Parkinson's/depression/restless-leg/ADHD association, is stated in prose without a link at L30, exactly as the outline's §Open questions item 2 resolved.

Anchor-text literalism, all five match the outline's plan: "does not actually lower your dopamine levels", "the title's not to be taken literally", "more active when you are idle", "less impulsive behavior, better focus, and less overwhelm", "One to four hours at the end of the day".

**Number-by-number audit (invented-precision check, §3.8).**

| Line | Number | Traces to |
|---|---|---|
| 14, 55, 61, 145 | 24 hours (the viral version) | facts.md §Statistics, "far more moderate than the viral 24-hour version" |
| 32 | 2019, "Dopamine Fasting 2.0" | facts.md §Statistics, third bullet |
| 61, 86, 145 | one to four hours at the end of a workday | facts.md §Statistics, first bullet |
| 64, 92, 94 | one weekend day per week, one weekend per quarter, one week per year | facts.md §Statistics, first bullet |
| 62, 68, 78 | six behaviors, and the verbatim list | facts.md §Statistics, second bullet (two independent authorities) |
| 88 | 20 minutes | inside the verbatim u/whitswhisper quote, facts.md §Voice-of-customer |

Examined and cleared, not flagged: "Take the feed off the table for two hours" (L44) is an illustrative duration sitting inside the sourced one-to-four-hour window, carrying no evidentiary weight; "a week off it" (L51) belongs to the coffee analogy, not to any dopamine recovery timeline; "Four specific things" (L110) counts the list that immediately follows; "two or three" (L117) is advice, not data. No percentages, no study effect sizes, no recovery timelines anywhere. Greps for `studies show`, `research shows`, `science says`, `proven`, `rewire`, `reset your`, `baseline`, `receptor`, `tonic`, `phasic`, `neurotransmitter`, and `weeks` all return zero hits.

**facts.md §Rejected kill-list audit (the highest-risk axis on this post). All four clear.**

1. **"A detox resets dopamine levels."** Absent, and actively contradicted. L28 states the correction unhedged and links Harvard Health for it: "Your dopamine does not drop when you step away from stimulating activities, so a dopamine fast does not actually lower your dopamine levels. Nothing is being flushed out. Nothing is being emptied." The FAQ repeats the correction at L149. No softened or implied restatement anywhere: no "restores", no "raises your baseline", no "resets".
2. **Any recovery timeline.** Absent. Grep for `weeks` returns zero. The only durations in the post are the sourced protocol windows and the illustrative two hours.
3. **The phasic/tonic mechanism.** Absent. Grep for `tonic`, `phasic`, and `receptor` returns zero. L40 forecloses the whole class of claim: "Nothing chemical is happening."
4. **"Boredom is scientifically nefarious."** Absent, and the draft leans the other way. L45 frames idle time as productive ("Staring out of a bus window is not wasted time"). The only boredom claim in the post is that an unplanned empty evening feels flat and makes people call the practice a scam (L98, L106), which is a motivation argument, not a health claim.

**Caffeine-tolerance analogy (facts.md §Rejected, conditional-use item).** Correctly handled at L51, and this is the single best-executed compliance beat in the draft. It is introduced as reported experience ("You will also hear people describe the aftermath the way they describe coming back to coffee after a week off it"), then disclaimed twice in the writer's own voice ("That is how the experience feels to a lot of people. It is not a mechanism I can point you to a study for, and I am not going to dress it up as one"). Never stated as biology. Meets facts.md's "ONLY if explicitly framed as how people describe the experience" condition with room to spare.

**PMC review scope discipline (facts.md §Scope-limited).** Correct in both places. L47: "A peer-reviewed review of this practice reports that people who follow this kind of routine may see less impulsive behavior, better focus, and less overwhelm", followed immediately by the mandated caveats (extreme versions carry real risks, findings are inconsistent, no one-size-fits-all). FAQ L141 repeats the same construction. Never "studies show". No number, percentage, or timeline attached in either instance. The lead-in at L47 ("The formal evidence is thinner than the confident videos suggest, and I would rather tell you that than pretend") is a further hedge in the right direction.

**Section 6 guardrail (plan.md §Guardrail on section 6, reaffirmed by both plan reviews).** Honored. The Parkinson's / depression / restless-leg / ADHD association appears exactly once, at L30 in H2 1, phrased verbatim from facts.md and framed as general context for why "less dopamine" is the wrong target, not addressed at the reader's own condition. It is absent from H2 6 (L121-129) in stated, softened, and implied form. H2 6 contains no mechanism claim and no diagnostic claim in the writer's own voice: it carries the reader-voice quote the outline authorized, the background-audio example, and one closing sentence pointing at a professional (L129, "that is a conversation worth having with a professional rather than a protocol worth trying harder at"), with no clinical language and no crisis-line copy, exactly as specified. Examined and cleared: FAQ L149 says "low dopamine is associated with conditions nobody is trying to induce on a Saturday" without naming any condition, which is the outline's own FAQ direction for that question and is nowhere near a reader-directed ADHD framing.

**Attribution honesty (Reddit and X as reader voice, never evidence).** Clean. Every social claim is attributed to a thread or a poster, never to an expert and never as evidence: L49 "Someone in a Reddit discussion", L66 "Someone posted recently ... and a reply pushed back", L88 "Someone on Reddit described theirs perfectly", L123 "came from r/adhdwomen, where someone noted", L125 "a commenter pushed back". No person is named, satisfying the outline's instruction on the X account. The substance of the L49 Reddit line ("does not control dopamine") is independently established from Harvard Health at L28, so nothing load-bearing rests on the quote.

**H2 4 framing guardrail (plan.md §Guardrail on section 4).** Honored. L72 opens the section: "What follows is my own on-ramp, shaped by that moderate cadence rather than copied from it." Sepah's material stays attributed to Sepah where it belongs ("where the original version starts", L86; "The longer stretches in the original cadence", L94) without the on-ramp itself being presented as his protocol. This is the framing serp.md §Avoid pitfalls and plan-review-v1 issue 5 both required.

Unsourced / suspicious claims:
- `draft-v1.md:32`, "Cameron Sepah, a clinical psychologist working with tech workers in Silicon Valley", issue: `facts.md and every research source say "a psychologist" who "used it clinically"; the credential "clinical psychologist" is not in the citable pool`. Logged as issue 2, `minor`.
- Nothing else. Every other claim in the draft traces to a facts.md row.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `0` | yes, and correctly so. The draft needed none: nothing in it falls outside facts.md. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | yes, all five planned external links are rendered. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | yes, all five planned internal links are rendered. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | yes, exact match. |

Image placement, slot by slot:

| Draft line | Position | Outline slot | Type | Verdict |
|---|---|---|---|---|
| 42 | after H2 2 (L38) + its first body paragraph (L40) | "After H2 2 + 1 paragraph", walking with no headphones | `ai-prompt` | correct |
| 57 | after H2 3 (L53) + its first body paragraph (L55) | "After H2 3 + 1 paragraph", two-panel contrast | `ai-prompt` | correct |
| 74 | after H2 4 (L70) + its first body paragraph (L72) | "After H2 4 + 1 paragraph", stepped cadence diagram | `remotion` | correct |
| 108 | after H2 5 (L104) + its first body paragraph (L106) | "After H2 5 + 1 paragraph", reclaimed evening | `ai-prompt` | correct |

**Featured-image hygiene (§4.2a):** pass. No inline placeholder was emitted for the featured concept (the face-down phone beside a book and a mug). For the wordpress-rest adapter the featured image ships via media upload as `featured_media` rather than through frontmatter or an inline placeholder, so emitting one would have rendered the asset twice. The writer correctly emitted none. Type mix also honors custom-instructions.md §Image style: `remotion` used once, for the only genuine diagram; `ai-prompt` for all three scenes.

**Image-placement hygiene (§4.2b), examined and cleared:** the L74 placeholder is followed (after a blank line) by `### 1. Pick the one or two things you are actually detoxing from`. This is not the orphaned-before-a-heading failure the check targets. H2 4's shape is heading, one intro paragraph, then four numbered H3s, so "after the section's first body paragraph" necessarily lands before the first H3, which is precisely where the outline placed it. The stepped-cadence diagram also previews the exact three rungs those H3s then walk through, so it illustrates the section it opens. No issue logged.

**Table-redundant chart (§4.2c), examined and cleared:** the `remotion` placeholder at L74 sits within 20 lines of the markdown table at L59-64, which trips the mechanical proximity test. It is not redundant. The table is H2 3's viral-versus-original contrast; the diagram is H2 4's graduated cadence, a different section and different content. The outline anticipated this exactly: "H2 4 has no table, so this duplicates nothing." No issue logged.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):
- None. Greps for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO`, `[TBD]`, and `AFFILIATE-LINK-PENDING` all return zero.

## 5. Word count

- Draft: `2,255` words (body prose, from the intro through the closing CTA, excluding frontmatter and the `## FAQ` block)
- Outline target: `2,260` words (outline §Word count roll-up "Total estimate")
- Delta: `-0.2%`
- Band: `within ±10% = pass, no issue`

Per-section breakdown against the outline's own estimates, recorded for transparency rather than as an issue:

| Section | Draft | Outline estimate | Delta |
|---|---|---|---|
| Intro | 182 | 200 | -9% |
| H2 1 | 249 | 330 | -25% |
| H2 2 | 345 | 330 | +5% |
| H2 3 | 295 | 300 | -2% |
| H2 4 | 558 | 480 | +16% |
| H2 5 | 251 | 280 | -10% |
| H2 6 | 207 | 240 | -14% |
| CTA | 96 | 100 | -4% |

The redistribution is editorially sound and should not be corrected. Weight moved out of H2 1 and into H2 4, which is where brief.md says it belongs ("'How to do it right' is the load-bearing half of the post"). H2 1 is terse but complete: it lands the definition, the dopamine gloss, the Harvard correction, the Parkinson's association, the Sepah origin and quote, and the handoff question, in seven short paragraphs. The FAQ (352 words) is excluded from the gated total per SKILL.md §5.

## 6. Humanization floor (per writing-standards.md + voice.md)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | yes | Both lists gripped; voice.md adds none. |
| Zero em-dashes (U+2014, grep returns nothing) | yes | 0. |
| En-dashes (U+2013) only in numeric ranges | yes | 0 present. Ranges are written as words ("one to four hours"), which is the safest form. |
| First-person throughout | yes | See §1. |
| Active voice | yes | See §1. |
| ≥1 rhythm marker in every H2 | yes | See §2, every section carries at least two. |
| ≥1 bullet list per ~300 words | qualified pass, ruled explicitly below | 2 bullet lists (6 bullets) across 2,255 words, plus 1 markdown table, 4 numbered H3s, and 4 image breaks. |
| ≥1 standalone-question paragraph per major section (if the author voice calls for it) | qualified pass, ruled below | Present in H2 1 (L34), H2 3 (L68), H2 4 (L80), H2 5 (L119). Absent from H2 2 and H2 6. |
| ≥1 concrete number or named example per major section | yes | H2 1: 2019, Sepah, NYT. H2 2: default mode network, the peer-reviewed review. H2 3: 24 hours, one to four hours, six behaviors. H2 4: the full cadence, the 20-minute Reddit account. H2 5: four named replacements. H2 6: the background-audio example, which the outline explicitly nominated as this section's concrete example. CTA: Text Summarizer. |
| No em-dash overuse | yes | Zero present. |
| Visible sentence-length variation in every section | yes | Standard deviations 7.7 to 14.8 across body sections, all far above the <4 flag. Intro is the weakest at 6.8 with a 27-word floor, see issue 1. |

**Explicit ruling on the bullet-list floor (the writer's self-flagged item).** The floor is met in substance and the draft should NOT gain bullet lists in H2 1 or H2 6 on any subsequent pass.

The nominal arithmetic does fall short: one list per 300 words over 2,255 words implies roughly seven, and the draft has two. But the rule exists to prevent walls of text, and the defect it targets is absent. Structural breaks are distributed across the whole post: bullet lists in H2 2 and H2 5, a four-row markdown table in H2 3, four numbered H3 subsections in H2 4, four in-post images, and paragraphs that run 1 to 3 sentences almost everywhere (the single exception is logged as issue 4). No section reads as an undifferentiated block.

The two list-free sections are list-free by design and are correct as written. The outline specified no list for H2 1 because that section is a narrative correction whose whole rhetorical job is to walk the reader from the definition to the debunk to "so is this nonsense?" without flattening into a listicle takedown; bulleting the correction would make it read like the very debunk videos the post is trying to be gentler than. The outline specified no list for H2 6 with the note "keep it plain and short", and bulleting the "this might not be for you, and here is when to see a professional" beat would give it a checklist-of-symptoms shape, which is precisely the diagnostic register both plan reviews barred from that section.

Ruling: qualified pass, no issue logged, and this is recorded in §8 as something to preserve.

**Explicit ruling on the standalone-question floor.** Also a qualified pass. H2 2's heading is itself the standalone question ("So why does it seem to work?"), handed off from H2 1's own question at L34, so the section is built as the answer to a question the reader has already been asked; adding a second question inside it would be redundant. H2 6 omits one deliberately, and correctly: a rhetorical question in a section about compulsive use and professional help would read as glib. authors.md's rhetorical-hook note is satisfied across the post as a whole.

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Intro | 14-20 | `minor` | All five intro sentences run 27 to 46 words, with no short beat anywhere on the first screen. authors.md's voice note for olga is "mixes punchy short sentences with longer explanatory ones for rhythm", and this is the one stretch of the post where that mix is missing. The rest of the draft does it well. | In the intro, split one long sentence and add a 3-to-8-word beat. The cleanest candidate is P1's second sentence: end it at "you are stuck in the awkward middle." and follow with a short sentence such as "That is exactly where I was." Do not lengthen the intro overall; it is already at target. |
| H2 1 | 32 | `minor` | "a clinical psychologist working with tech workers in Silicon Valley" upgrades a credential the citable pool does not state. facts.md and all three research sources say "a psychologist" who "used it clinically with Silicon Valley tech workers and investors". On a health-adjacent post where facts.md is the only permitted pool, the compression from "used it clinically" to "is a clinical psychologist" is a precision the draft cannot support. | Change "a clinical psychologist working with tech workers in Silicon Valley" to "a psychologist who used the idea with tech workers and investors in Silicon Valley", which is what facts.md §Named examples supports. Cut, do not add a `[VERIFY:]` marker. |
| H2 3 | 66 | `minor` | "That reply is doing more useful thinking than the post." This is the one line in the draft that punches at a person rather than at the trend. brief.md's hardest tonal job is to correct a popular idea without making anyone who tried it feel stupid, and a reader who did the stare-at-a-wall version is the person on the wrong end of this sentence. The rest of the post is careful about this (L88 in particular). | Redirect the judgment from the poster to the idea. Replace with something like "The reply is the more useful half of that exchange." or cut the sentence entirely; the paragraph lands without it. |
| H2 4 (H3 4.4) | 100 | `minor` | Five-sentence paragraph, the densest block in the post, against writing-standards.md §Paragraph rules (1 to 3 sentences, with 4 reserved for rare cases where the argument needs it). The founder anecdote does need continuity, but not five sentences in one block, one of which runs 40 words. | Split into two paragraphs after "It was not." The second paragraph then begins "It was that the gap between tasks had no shape..." and carries the Parkinson's Law translation. Change no wording. |
| H2 6 | 125 | `minor` | "neurotypicals" appears unglossed. audience.md §Reading posture requires every specialist term to be translated on first use for a beginner reader, and the post is otherwise scrupulous about this (default mode network at L45, Parkinson's Law at L100). The word sits inside a verbatim reader quote, so the quote itself must not change, but the lead-in can carry the gloss. | Gloss the term in the lead-in sentence rather than editing the quote. For example: "a commenter pushed back on the blanket rule directly, pointing out that it is written for brains that are not wired like hers:" then the quote unchanged. |
| CTA | 135 | `minor` | The CTA sentence is near-verbatim with the one already live in `how-to-reduce-screen-time` ("the Text Summarizer condenses a long article or report into something you can read in a minute, so a screen you had to be in front of anyway gives you a piece of your evening back"). The two posts are siblings in the same digital-wellbeing pillar and this post links to that one, so a reader can plausibly hit both in a session. The anchor itself is the house hook from blog.md and should stay identical. | Keep the anchor "Try my free AI tools to automate the mundane" exactly as is. Rewrite only the clause after the colon so it speaks to this post's own frame, for example tying the Text Summarizer to the reading pile that is still waiting at the end of the reclaimed hours, which is the point L133 just made. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision.

- **The caffeine-analogy handling at L51 is the model for how a conditional-use fact should be written.** facts.md §Rejected permits the tolerance analogy only as reported experience, and the draft does not merely comply, it makes the compliance part of the voice: "That is how the experience feels to a lot of people. It is not a mechanism I can point you to a study for, and I am not going to dress it up as one." That second sentence buys the post more credibility with a debunk-primed reader than any citation in it. Do not trim it for length and do not soften it into a hedge.
- **H2 6 is exactly the right length, register, and shape, including its two deliberate omissions.** It carries no bullet list and no rhetorical question, it names no condition, it makes no mechanism claim, and it closes with one plain sentence pointing at a professional (L129). Both plan reviews flagged this section as the post's medical-claim risk, and the draft defuses it by staying small. The temptation on a revise pass will be to bulk it up toward its 240-word estimate or add a list to serve the humanization floor. Do neither.
- **The on-ramp framing at L72 plus the reader-protective beat at L88.** L72 ("my own on-ramp, shaped by that moderate cadence rather than copied from it") satisfies the plan's section 4 guardrail in a single clause without a disclaimer's dead weight. L88 ("That is not a failed detox, that is what withdrawal from a very well-designed product feels like") is the sentence that keeps a reader who already tried and quit from feeling stupid, which brief.md names as the post's hardest tonal job. Both should survive untouched.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A. Verdict is `approve`.

## 10. Reviewer notes (free-form)

- **The six `minor` issues are polish, not blockers, and are best applied at the humanize/polish pass rather than through a full writer revise cycle.** None of them touches structure, facts, links, or the guardrails. If the editor prefers a revise pass anyway, §7's fix instructions are written to be copy-paste ready.
- **On the L49 Reddit quote framing.** "Someone in a Reddit discussion about exactly this question put it better than any of the explainers I read" grants a Reddit comment a rhetorical promotion over the expert sources. This is not an attribution violation: the endorsement is explicitly about phrasing quality, the attribution to a Reddit discussion is unambiguous, and the substance of the quote is independently established from Harvard Health at L28, so nothing load-bearing rests on it. Flagging it here only so the editor knows it was examined and cleared rather than missed.
- **FAQ 5 (L157) names the 7-day digital detox plan without linking it,** while L72 links the same post. Left unflagged deliberately: the post is already at five internal links, the ceiling of blog-craft.md's 3-to-5 range, and the target is reachable from H2 4. If the editor would rather have the link, adding it is safe since it points at an already-linked target rather than a sixth destination. Editor's call, not a defect.
- **Angle worth noting for the repurpose or promo pass if one runs later.** The H2 3 side-by-side table is the piece of this post that no top-10 result offers, per serp.md §Angle opportunities, and it is the most self-contained asset in the draft. It would carry a social or newsletter excerpt on its own.
- **One open item is inherited, not introduced by this draft.** outline.md §Open questions bullet 3 is still unchecked: the category (Productivity), the author (olga), and the both-research-modules decision were autopilot judgments from files rather than human answers. That is a Gate 2 item for the human, and it has no bearing on this verdict.
