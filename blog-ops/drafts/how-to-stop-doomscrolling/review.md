# Review: how-to-stop-doomscrolling draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/how-to-stop-doomscrolling/draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `blog-ops/profile/voice.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `research/serp.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs.

## Reviewed

- Draft: `blog-ops/drafts/how-to-stop-doomscrolling/draft-v1.md` (word count: 2019 body prose, excl. FAQ and the 3 image-placeholder lines; outline roll-up target: ~2360, plan band 2000–2400)
- Outline: `blog-ops/drafts/how-to-stop-doomscrolling/outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): Every forcing condition is clean, zero forbidden phrases, zero em-dashes, zero unsourced science numbers, zero top-10 SERP competitor links, structure matches the outline exactly (12 numbered strategies in 3 layers, 5-Q FAQ last), and the non-shaming "design not willpower" angle holds start to finish. The only findings are two minor humanization/length nits that do not block approval. No critical or major issues.

**Iteration counter:** this is revision pass 1 of max 2. Verdict is `approve`, so no escalation applies.

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§voice.md + authors.md) | Pass | Warm, first-person, lightly self-deprecating ("I have lost that hour too, more nights than I would like to admit," L17); credibility line "tested-not-theorized" (L17) drawn straight from voice.md. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | "Opening one should take a deliberate search" (L45) is "one [app]", not impersonal `one`. No third-person drift. |
| Active voice (no "X was scanned" shapes) | Pass | No passive-marker hits. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Strong short/long variation, e.g. "You will slip." (L104) next to 20+ word sentences; "It sounds almost too small to work." (L82). |
| Forbidden phrases count: 0 (list below); any hits = fail | Pass | The only grep hit was "highest-leverage change" (L39), which is adjectival, not the forbidden verb `leverage`. Not a violation. |
| Em-dash count: 0 (grep `—`); any hits = automatic §1 fail | Pass | Grep returned nothing. |
| En-dash context: every `–` hit is inside a numeric range | Pass | Grep returned nothing. |

Forbidden phrases found: None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter valid per wordpress-rest template (title, date, excerpt, tags, authors, draft; NO cover field) | Pass | All required fields present; correctly omits a `cover`/`heroImage` field (featured image ships via WP media upload, not frontmatter). 3 tags, all from the live taxonomy. |
| Title matches outline "Final title" exactly | Pass | "How to Stop Doomscrolling: 12 Science-Backed Strategies". |
| Slug / meta description match outline | Pass | Slug = dir name; excerpt (L4) matches outline Final meta verbatim (~139 chars, ≤160). |
| H2 order matches outline body-sections list exactly | Pass | H2 1 (what it is) → Layer 1 → Layer 2 → Layer 3 → closing CTA ("Reclaim the hours...") → FAQ. No additions/removals/reorders. 12 numbered H3 strategies (1–12) present and in order. |
| Intro is 2–4 paragraphs, 1–3 sentences each | Pass | 4 paras (hook L15 / expertise L17 / internal-link L19 / preview L21); 1 intro internal link (≤2). |
| Every H2 has ≥1 rhythm marker | Pass | Standalone question (L25), bullet list (L55–56), concrete numbers/named experts throughout. |
| FAQ `### <Q>` items match outline FAQ set 1:1 | Pass | 5 questions, exact match to outline's 5. FAQ is the last block; nothing follows it. |
| JSON-LD FAQPage schema matches FAQ body 1:1 | N/A | wordpress-rest adapter emits no adapter-level JSON-LD; FAQ schema is a WP-plugin concern. Skipped per SKILL §2.1. |
| Outro / CTA paragraph present | Pass | Closing CTA sits immediately before `## FAQ`, links `/ai-tools` with action anchor "try my free AI tools" (L110). |

Structural deltas vs outline (if any): None.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to `facts.md` OR has `[VERIFY:]` | Pass | The only science claims (melatonin L55, in-bed insomnia L56, psychological distress L33) are each linked to their `facts.md` primary source. Other numbers ("forty minutes", "30 seconds", "five seconds") are tactic/anecdote framing, not science stats. |
| Rejected claims NOT reintroduced ("IQ drops 10 points", "7.5 hours/day", brain rot, Nuffield survey) | Pass | Grep confirms none present. The "IQ" grep hit was the substring in "technique" (L82), a false positive. |
| Competitor names discussed with "best for" framing, not takedown | N/A | competitors module context not applicable; no product-competitor comparisons in this post. |
| Product mentions (count: 2, product module on) each earn their place | Pass | "my free AI tools" + "Text Summarizer" (L110), soft end-of-post CTA, one value line, deletion rule holds. No stuffing, no price. |
| Internal links exist per blog-craft (count: 5 total, 1 in intro) | Pass | `/how-to-stay-focused-on-goals` (L19, intro), `/productive-things-to-do...` (L62), `/things-to-do-instead...` (L78), `/what-is-timeboxing` (L92), `/ai-tools` (L110, CTA). All planned in outline. |
| Every internal link root-relative `/slug`, no trailing slash (config: route_prefix `/`, trailing_slash `false`), not absolute | Pass | All 5 are root-relative with no trailing slash; no absolute cross-post links. |
| External links each reputable; anchor = literal claim (count: 4) | Pass | doi.org/10.1111/ppc.12803 (L33), wired.com (L49, allowlist), pubmed 29101797 (L55), doi.org sleh.2017 (L56). All primary/allowlist. First internal link (L19) precedes first external (L33). |
| No external link to a top-10 SERP competitor URL | Pass | ZERO. mentalhealth.org.uk, healthassured.org, nuffieldhealth.com, drginacleo.com, happiful.com, zenhabits.net, and the Guardian article are all correctly NOT linked. Dr Gina Cleo, Kimberley Wilson, Leo Babauta, and the "vicarious trauma" concept are attributed as expert framing with no competitor link, exactly as facts.md directs. |
| Target keyword "how to stop doomscrolling" appears 2–8 times in body (actual: 2) | Pass | Exact phrase at L15 and L35 (=2, at the floor). The topic noun "doomscrolling" recurs ~19x naturally as the unavoidable subject word, which is not stuffing. |

Unsourced / suspicious claims: None. The mechanism sentence (variable-reward loops + negativity bias, L29) correctly carries an `[EXTERNAL_LINK_NEEDED:]` marker per the editor's facts.md note, rather than asserting an uncited science number.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | 1 | Yes — L29, mechanism claim, source suggestion "APA or NLM" per outline/facts.md. |
| `[INTERNAL_LINK_NEEDED:]` | 0 | N/A |
| `[IMAGE:]` | 3 vs outline 3 slots | Yes — after first paragraph of H2 1 (L27, remotion loop diagram), H2 2 (L41), and H2 4 (L88). Matches the outline's exact 3-slot plan. No inline featured-image placeholder (featured ships via frontmatter cover / WP media). |

Marker-shape problems: None. No off-shape markers (`[Verify:]`, `TODO:`, `[TBD]`, etc.) found.

Notes: L41 and L88 image placeholders sit just before the first H3 of their layer, but each closes the layer-frame concept in the paragraph above it and matches the outline's explicit "after H2 + 1 paragraph" placement, so §4.2b is satisfied. The L27 remotion chart has no adjacent markdown table (§4.2c clean).

## 5. Word count

- Draft: 2019 words (body prose, excl. frontmatter, FAQ, and the 3 image-placeholder lines; 2107 if the placeholder lines are counted)
- Outline target: ~2360 (roll-up "Total estimate"); plan absolute band 2000–2400
- Delta: -14.4% vs the 2360 roll-up (-10.7% if placeholder lines counted)
- Band: beyond ±10% up to ±15% = **minor issue logged in §7 (expand note), still counts as a pass for the verdict gate.** Sits at the low end but comfortably inside the plan's absolute 2000–2400 target. No padding or thin sections, so not escalated.

## 6. Humanization floor

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | |
| Zero em-dashes (`—`) | Pass | |
| En-dashes (`–`) only in numeric ranges | Pass | None present. |
| First-person throughout | Pass | |
| Active voice | Pass | |
| ≥1 rhythm marker in every H2 | Pass | Question / numbers / named examples in each. |
| ≥1 bullet list per ~300 words | Minor miss | Only 1 bullet list (L55–56) in ~2019 words. Mitigated by the 12 numbered H3 strategies, which supply the list scaffolding and break up the text; the "no walls of text" intent is met. Logged §7 minor. |
| ≥1 standalone-question paragraph per major section | Pass (author-appropriate) | H2 1 opens "So what is doomscrolling, exactly?"; rhetorical questions in strategies 4 and 6. Olga's voice favors these; coverage is adequate. |
| ≥1 concrete number or named example per major section | Pass | Tristan Harris, Dr Gina Cleo, Kimberley Wilson, Leo Babauta, "30 seconds", "two sources, two times a day". |
| No em-dash overuse | Pass | Zero. |
| Visible sentence-length variation in every section | Pass | Strong burstiness. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick. None of the below block the `approve` verdict.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| (whole body) | n/a | minor | Body prose ~2019 words is -14% under the outline roll-up estimate of ~2360 (still inside the 2000–2400 plan band). | Optional polish only: if expanding, add ~1–2 sentences of concrete texture to the shorter layer frames (Layer 2 and Layer 3 openers). Do not pad. |
| (whole body) | 55 | minor | Only one bullet list in ~2019 words; blog-craft floor is ~1 per 300 words. | Optional: convert one or two of the denser strategy paragraphs (e.g. strategy 5's caveats, or strategy 11's news-diet steps) into a short bullet list. The 12 numbered H3s already carry most of the list-structure load, so this is not required. |
| What doomscrolling actually is | 31 | minor | "Psychologists even have a name... vicarious trauma" is an uncited conceptual claim (facts.md sources the term to a competitor, to be attributed generally). | Acceptable as-is (general attribution, no competitor link, and "vicarious trauma" is an established term). No change needed unless a primary is added at Stage 3d. |

## 8. What the draft does well

- **The non-shaming angle is executed cleanly and repeatedly, not just asserted.** "It was never really a willpower problem" (L15), "you are not weak and you are not broken" (L25), "the expected outcome, not a character flaw" (L33), "a design problem, not a willpower or character problem" (L124), "treat a lapse as data, not failure" (L104). This is the core brief angle. Do not soften or cut any of these lines on revision.
- **Sourcing discipline around competitors is exactly right.** Every expert (Dr Gina Cleo, Kimberley Wilson, Leo Babauta, Tristan Harris) and the "vicarious trauma" concept is used as attributed framing while the four SERP-competitor domains are never linked; the only shipped external links are primary sources + Wired (allowlist). Preserve this routing.
- **The VOC quotes are load-bearing and well-placed**, e.g. "i deleted instagram & twitter but now i just scroll on reddit all day instead" (L35) sets up strategy 7 "Replace, don't just remove", and "at least I stopped thinking it's a personal flaw" (L104) lands the self-compassion close. Keep these anchoring their respective strategies.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A (verdict = `approve`).

## 10. Reviewer notes (free-form)

- The exact-phrase target keyword count sits at the floor (2). It is a pass, but if the writer touches the body for any other reason, one additional natural use of "how to stop doomscrolling" (e.g. in a Layer 2 or Layer 3 frame) would add margin without stuffing. Not required.
- "highest-leverage change" (L39) tripped the `leverage` forbidden-phrase grep as a false positive (adjectival, not the forbidden verb). Flagging only so a future automated pass does not re-raise it.
- Strong, publishable draft on iteration 1. The editor can proceed to Stage 3d (resolve the single `[EXTERNAL_LINK_NEEDED:]` mechanism link to an APA/NLM primary) and image generation.
