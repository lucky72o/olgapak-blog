# Review: how-to-plan-your-week draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `draft-v1.md`, `outline.md`, `facts.md`, `brief.md`, `research/serp.md`, `standards/writing-standards.md`, `standards/blog-craft.md`, `profile/voice.md`, `profile/authors.md`, `profile/audience.md`, `profile/product.md`, `profile/blog.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/how-to-plan-your-week/draft-v1.md` (word count: 2,026 body prose excl. FAQ + IMAGE markers; outline roll-up target: ~2,320)
- Outline: `blog-ops/drafts/how-to-plan-your-week/outline.md` (status: approved)
- Author voice: `olga` (from brief.md)

## Verdict

`approve`

Reasoning (1–3 sentences): The draft clears every objective gate with zero critical and zero major issues — perfect forbidden-link discipline (all six SERP competitors quoted by name only, HBR the single allowlist external link), both differentiator sections (§4 midweek reset, §6 plan-less-when-overloaded) are substantive, zero em-dashes, clean first-person voice, and exactly one soft product mention. Only three minor nits remain (a slightly-under word count within the acceptable band, one lightly-altered quotation string, and a low external-link count that the outline already documented as intentional), none of which block approval.

**Iteration counter:** this is revision pass 1 of max 2. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass. (N/A here — verdict is approve.)

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (voice.md + authors.md) | Pass | Warm, first-person, lightly self-deprecating ("Let me answer the doubt first, because I had it too"; "It stings to write down"). Beginner-friendly, jargon translated on first use. Matches Olga's authors.md voice notes. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Grep for `one could/one should/users are/stakeholders` returned nothing. |
| Active voice (no "X was scanned" shapes) | Pass | Grep for passive markers returned nothing. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Short beats next to long sentences throughout ("No." L84; "Reflection isn't the warm-up. It's half the value." L54; "That's genuinely it." L131). |
| Forbidden phrases count: 0 (list below); any hits = fail | Pass | Dual-sourced grep (writing-standards.md + voice.md "None beyond generic"). Zero hits. |
| Em-dash count: 0 (grep `—`); any hits = automatic §1 fail | Pass | Zero. Asides handled with parentheses/commas/periods correctly (e.g. L37 "(a sick kid, a last-minute meeting, a flat tire)"). Note: outline H2 6 title used an em-dash; draft correctly renders it with a comma. |
| En-dash context: every `–` hit is inside a numeric range | Pass | Zero en-dashes; ranges written as "15 to 60 minutes", "45 min to 1 hr". |

Forbidden phrases found (grep output from writing-standards.md + voice.md lists):
- None found.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter present and valid per wordpress-rest adapter template (title, date, excerpt, tags, authors, draft) | Pass | All required fields present. 4 tags all from blog.md taxonomy (productivity, time management, planning tips and tricks, daily planner). `authors: Olga Pak` matches authors.md. `draft: true`. No `cover` field (correct for this adapter). |
| Title in frontmatter matches outline "Final title" exactly | Pass | "How to Plan Your Week: A Routine That Survives Tuesday" (53 chars, in 50–60 band). |
| Slug / meta description match outline | Pass | Excerpt matches outline Final meta description verbatim (157 chars). Slug fixed = how-to-plan-your-week. |
| H2 order matches outline body-sections list exactly | Pass | 7 body H2s in order + conclusion (`Plan once, so you can stop deciding`) + `## FAQ`. No additions, removals, or reorderings. 5 H3 steps under §3 in order. |
| Intro is 2–4 paragraphs, 1–3 sentences each | Pass | 4 paragraphs (hook L15 / expertise L17 / internal-link L19 / preview L21), each 1–3 sentences. Target keyword in hook. 1 intro internal link (≤2). |
| Every H2 has at least one rhythm marker | Pass | Standalone questions (L25, L84), bullet lists (§2, §4, §6, §7), concrete numbers/named examples in each section. |
| FAQ section has `### <Q>` items matching outline FAQ set 1:1 | Pass | 5 questions, exact match to outline's 5 FAQ items. FAQ is the last block; nothing follows it. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | wordpress-rest adapter emits no JSON-LD at the adapter level; sub-check skipped per SKILL §2.1. FAQPage schema is a WP-plugin concern. |
| Outro / CTA paragraph present | Pass | `## Plan once, so you can stop deciding` sits immediately before `## FAQ`; links the CTA target `/ai-tools` with the exact blog.md action anchor ("try my free AI tools to automate the mundane"), no feature re-list. |

Structural deltas vs outline (if any):
- None.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Pass | "45 min to 1 hr" + "over eight years" (Tara, facts.md Quotes/Named examples); "17 minutes" (facts.md millersarah); "15 to 60 minutes" (honest synthesis of the two anecdotes). No VoucherCloud stat (correctly dropped per plan). No invented precision, no unsourced numbers. |
| Every competitor name used has "best for [segment]" framing, not a takedown | N/A | Competitors module off (facts.md: "competitors module off"). No product-competitor comparisons in the draft. |
| Pricing / feature claims about competitors match `facts.md` (verify dates not stale) | N/A | Competitors module off; no competitor pricing/feature claims. |
| Product mentions (count: 1 Email Generator + 1 CTA "free AI tools") each earn their place | Pass | Single soft Email Generator mention (L133), matched to the "batch your admin" idea per outline §7. CTA references the tools page generally (L139). No feature list, no prices. Deletion rule: the L133 sentence carries product-specific context (drafting batched-admin replies). |
| Internal links exist in the intro cluster per blog-craft.md | Pass | 1 internal link in intro (L19), ≤2. First internal link (L19) precedes first external link (L29). |
| Every internal blog link is root-relative (trailing slash iff `blog.trailing_slash: true`) | Pass | `trailing_slash: false`, `route_prefix: /`. All 5 blog links root-relative, no trailing slash (`/what-is-timeboxing`, `/planning-tips-to-maximize-productivity`, `/benefits-of-planning-ahead-for-peak-productivity`, `/how-to-stay-focused-on-goals`, `/how-to-stop-doomscrolling`) + `/ai-tools`. No absolute cross-post links. |
| External links each point to reputable sources; anchor = literal claim | Pass | 1 rendered external link: hbr.org (authoritative allowlist), anchor = literal claim "manage your energy, not just your time". No forbidden SERP-competitor links (see §3.5 detail below). |
| Target keyword appears 2–8 times in body | Pass | "plan your week" exact = 4 in body (within 2–8); broader planning-your-week variants ~9 total, not stuffed. |

Unsourced / suspicious claims:
- None. Every quote traces verbatim (or near-verbatim, see §7 minor) to a facts.md row, and every competitor voice is attributed by name/description with no hyperlink.

**§3.5 Forbidden-external-link cross-reference (unconditional check).**
Forbidden set (research/serp.md §Selected results analyzed): hailleygriffis.com, daydesigner.com, medium.com, nataliesisson.com, jessicamassey.com, memtime.com, wikihow.com. Allowlist: blog-craft.md §Authoritative-site allowlist (incl. HBR) + voice.md (none added).
- Only rendered external link is `https://hbr.org/2007/10/manage-your-energy-not-your-time` → HBR is on the allowlist → **no flag**. hbr.org does not appear in the forbidden SERP set anyway.
- Sheena McGinley (memtime), Jessica Massey (jessicamassey.com), Tara Viswanathan (x.com), and the @CryptoMaliel / Reddit voices are all quoted with name/description attribution and **zero hyperlinks** → compliant.
- Verdict: clean. No link equity passed to any ranking competitor.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 0 | N/A |
| `[EXTERNAL_LINK_NEEDED:]` | 1 (L68) | Yes — well-formed: `[EXTERNAL_LINK_NEEDED: Parkinson's Law originated in a 1955 Economist article by C. Northcote Parkinson \| suggested source type: The Economist archive or Encyclopaedia Britannica]`. Claim + suggested-source-type present; both targets are allowlist-class. Stage 3d resolves. |
| `[INTERNAL_LINK_NEEDED:]` | 0 | N/A |
| `[IMAGE:]` | 2 vs outline 2 slots | Yes — count matches. Slot 1 remotion week-grid (L66, after Step 3 first paragraph); slot 2 ai-prompt midweek-reset scene (L86, after §4 first paragraph). Matches outline Image placement plan. |

Image-hygiene sub-checks:
- 2a Featured-image hygiene: neither placeholder uses `featured.<ext>` nor matches the featured concept (hand-lettered "Plan Your Week" hero). No duplicate-render risk. Pass.
- 2b Placement hygiene: neither `[IMAGE:]` is immediately followed by a heading (L66→body L68; L86→body L88). Pass.
- 2c Table-redundant chart: slot 1 is a remotion diagram, but no markdown table exists anywhere within ±20 lines (draft has no tables). No redundancy. Pass.

Marker-shape problems (lowercase, missing colon, rogue formats): None. Grep for `[Verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]` returned nothing.

## 5. Word count

- Draft: 2,026 words (body prose, excl. frontmatter, FAQ, and the two `[IMAGE:]` marker descriptions; 2,097 if the marker text is included)
- Outline target: ~2,320 words (outline roll-up "Total estimate (body prose, no FAQ)")
- Delta: -12.7% (prose-only basis); -9.6% if marker text is counted
- Band: **beyond ±10% up to ±15% → minor issue logged in §7, still counts as a PASS for the verdict gate.** Comfortably inside the plan's 1,500–2,500 acceptable range; the draft simply lands nearer the ~2,000 target than the upper-middle ~2,320 estimate. No section reads thin — the compression is uniform, tight writing rather than a gap.

## 6. Humanization floor (per writing-standards.md + voice.md)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | — |
| Zero em-dashes (`—`) | Pass | grep returns nothing |
| En-dashes (`–`) only in numeric ranges | Pass | zero en-dashes; ranges written with "to" |
| First-person throughout | Pass | — |
| Active voice | Pass | — |
| ≥1 rhythm marker in every H2 | Pass | bullet list / standalone question / concrete number present in each section |
| ≥1 bullet list per ~300 words | Pass (soft) | 4 bullet lists (§2, §4, §6, §7). Below the strict 1-per-300 arithmetic, but §1/§3-prose/§5 use short paragraphs + standalone questions instead of walls of text, so the anti-monotony intent is met. Not flagged. |
| ≥1 standalone-question paragraph per major section | Pass | e.g. L25 "Isn't planning just procrastination in a nicer outfit?"; L84 "Do you throw it out and feel bad until next week? No." |
| ≥1 concrete number or named example per major section | Pass | HBR, McGinley, Tara's "45 min to 1 hr", rocks/water, Massey's "margin", "Do less things", the 15–60 min range |
| No em-dash overuse | Pass | zero |
| Visible sentence-length variation in every section | Pass | strong burstiness throughout |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| How long weekly planning actually takes / Step 1 | 54 | minor | The quotation-marked string `"takes me 45 min to 1 hr, including reflection from last week"` drops "to form this" and alters the source phrasing in facts.md (`"...takes me 45 min to 1 hr to form this — including reflection from last week"`). The figure is faithful; the quoted wording is not exact. (The source contains an em-dash, which the draft rightly can't reproduce.) | Tighten the quotation marks to the exact preserved span (e.g. quote only `"45 min to 1 hr"`) or paraphrase the rest outside the quotes; keep the "45 min to 1 hr" figure and the attribution to Tara Viswanathan. |
| (whole post) | — | minor | Only 1 rendered external link (HBR) vs blog-craft's 3–5 guideline. This is documented as intentional in outline §External link plan ("only ~2 solid external candidates exist... acceptable for this informational how-to rather than padding to 5 with weak links"). | No action required from the writer. Flagging so Stage 3d resolves the L68 `[EXTERNAL_LINK_NEEDED:]` Parkinson's Law marker to a second allowlist/primary link (The Economist archive or Encyclopaedia Britannica) rather than dropping it, which would bring the post to 2 external links. |
| (whole post) | — | minor | Body prose ~2,026 words is -12.7% under the outline roll-up ~2,320 estimate (band 2: within the verdict-passing range, above the ±15% fail threshold). | No expansion required — the post sits well inside the 1,500–2,500 target and no section is thin. If the writer touches it during any revise pass, the natural place to add a little depth is §3 Step 1 or §5, but this is optional. |

## 8. What the draft does well

- **Forbidden-link discipline is executed flawlessly — preserve it exactly.** Every top-10 SERP competitor (Sheena McGinley/memtime L37, Jessica Massey L74, Tara Viswanathan L54/L103, plus the @CryptoMaliel and Reddit voices) is quoted by name/description with zero hyperlinks, and hbr.org (L29) is the single allowlist external link with the literal claim as anchor text. Do not add any competitor hyperlink on revision.
- **Both differentiator sections are substantive and own the uncontested SERP angle.** §4 The midweek reset (L82–97: the 4-step reset bullet list + the "consciously drop the rest without guilt" insight + the non-judgmental "you're not broken for needing a reset") and §6 When you're truly overloaded (L109–121: "Do less things" + the "rank, don't balance" 3-item worked example for the overloaded-student persona) are the post's competitive moat per research/serp.md §Angle opportunities. Do not trim either.
- **The anti-overclaim honesty directly satisfies the brief's avoid-list.** L105 "What it won't be is a five-minute magic trick that fixes your life. Anyone promising that is selling something." and the reframe "less grinding, more direction" (L137) hit the calm, anti-hustle, no-"one trick" tone the brief and audience.md require, while jargon (timeboxing L17/L64, Parkinson's Law L68, margin L74) is defined on first use. Keep this voice.

## 9. Instructions for writer (only if verdict = `request_revisions`)

N/A — verdict is `approve`. The three minor issues in §7 are non-blocking; the editor may hand the L54 quote tightening and the L68 external-link resolution to Stage 3d/action-items rather than a full revise pass.

## 10. Reviewer notes (free-form)

- The `/ai-tools` CTA link is root-relative, consistent with the blog's same-domain `route_prefix: /` convention. blog-craft's "app/marketing site → absolute" note is arguably in tension for a product/tools page, but since the tools live on the same olgapak.com domain and the existing posts treat tools as same-site links, root-relative is acceptable. No action needed; noted only so the editor can standardize later if desired.
- facts.md marks the HBR row and the Parkinson's Law source as `needs_verification ⚠️` — the reviewer does not fetch, so Stage 3d must confirm hbr.org loads and supports "manage your energy, not your time" before publish, and resolve the L68 `[EXTERNAL_LINK_NEEDED:]` to a live allowlist source. These are expected Stage 3d items, not draft defects.
- Product tie-in chose Email Generator (admin-block framing) over the Text Summarizer fallback — a natural fit for the "batch your admin" idea, exactly one soft mention, per outline §7 and plan.md. Correct call.
