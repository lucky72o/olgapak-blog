# Brief: charting-method-note-taking

Written by: blog-editor (Stage 0 intake, autopilot / headless).
Sourced from: `blog-ops/content-plan.md` row #11 + profile docs (no human conversation — autopilot file-intake per SKILL.md §Autopilot).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

`charting method note taking`
Secondary: charting note-taking method, charting method notes, what is the charting method, charting method example

## Category

Productivity, EdTech  (note-taking sub-cluster → WP terms [12, 9] per `site-conventions.md` §Categories)

## Intent

how_to

## Audience emphasis

Primary: students and early-career professionals who take notes for study or work and need to capture comparable, repetitive, fact-dense material (dates, categories, pros/cons, competing options) without drowning in paragraphs. Assume they've heard "charting method" in a list of note-taking methods but have never actually built a chart. Secondary: knowledge workers who land here searching the specific technique before a meeting, lecture, or exam.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on; study/note-taking methods have strong voice-of-customer signal on r/studytips, r/GetStudying, r/college)
- x: yes (`modules.x_research` on; enabled to catch study-tok/studygram-adjacent takes and any counterpoints the SEO top-10 misses — dropped from analysis if the capture is off-topic)

## Author voice

olga

Reasoning: single-author blog; Olga's tested-from-experience, beginner-friendly productivity voice is the only voice and fits a study-method how-to directly.

## What the human wants to convey

This is an informational spoke in the Note-Taking cluster (content-plan post #11, "INFO guide: The Charting Method of Note-Taking Explained"). It should:
- Explain plainly what the charting method is (splitting the page into columns by category and dropping short facts into rows) and why it works — it forces comparison and strips filler.
- Be explicit about WHEN charting beats other methods (comparable/repetitive content: historical periods, competing theories, product or tool comparisons, processes with fixed attributes, meeting decisions) and when it fails badly (unpredictable free-flowing lectures, narrative or argumentative material, anything you can't categorise in advance).
- Give a concrete, same-day step-by-step: decide the categories before class → draw/set up the columns → fill rows with short phrases, not sentences → review by covering a column and recalling it.
- Show at least one worked example the reader can copy (a real comparison table filled in), plus paper vs. digital setup at a high level (notebook + ruler, or a spreadsheet/table in a notes app) without becoming a tool roundup.
- Cover common beginner mistakes: choosing columns mid-lecture, writing full sentences in cells, too many columns, using it for material that doesn't chart.
- Position charting honestly against its siblings (Cornell, outline, mind mapping) — link up to the pillar rather than re-litigating the whole comparison.
- Soft, tested-from-experience Olga framing throughout; no generic SEO filler.

## Product features to mention

- **Text Summarizer** (soft, ONE mention, near the end after the educational content): condense a long chapter, PDF, or article into its key points first so you can see which categories should become your columns. Natural next step into the free AI tools CTA.
- (Fallback option if it reads more naturally: **Text Simplifier** — simplify dense source material before charting it. Only ONE soft product mention total.)

## Soon-to-ship features (do NOT flag as gaps)

- None.

## First-party data points to include

- None. Only `hypothetical` product-usage data exists per `product.md` §First-party data availability — not citable. Do not invent usage or adoption numbers.

## Avoid list

- No "this one trick changes everything" listicle filler.
- No affiliate links and NO affiliate disclosure (Amazon Associates not live). A pure INFO method post needs no product links; if a notebook/pen is genuinely worth naming, link the existing money post instead.
- No unexplained jargon — translate "charting method", "matrix notes", "row/column" framing on first use.
- Do not turn this into a note-taking-app roundup (dilutes the how-to intent).
- Do not re-run the full four-method comparison; that's the pillar's job (`/note-taking-methods`).
- No claims about memory/retention percentages unless a primary or allowlist source confirms them (mark `[VERIFY:]` rather than guessing).

## Founder anecdote / story

Optional: Olga charting something genuinely comparable — e.g. comparing AI writing tools, or aviation-PR-era competitor/press coverage tracking — as the moment a table beat paragraphs. Writer may weave a short, genuine version if it fits; skip if forced.

## Internal link targets

Existing published posts this new post should link to (all confirmed live in `content/blog/` or previously linked from the published mind-mapping post):
- `note-taking-methods` — the Cluster-A pillar/comparison hub; charting is one of its four compared methods (strong up-link, bidirectional).
- `cornell-note-taking-method` — sibling method (structured contrast: charting is column-first, Cornell is cue/summary-first).
- `mind-mapping-note-taking-method` — sibling method (contrast: radial/visual vs. tabular/comparative).
- `outlining-note-taking-method` — sibling method (contrast: hierarchical vs. tabular).
- `focused-note-taking-how-to-guide` — sibling method (process framing).
- `best-notebooks-for-note-taking` — money post (grid/dot-grid pages suit column ruling); link only where genuinely useful.

## Source URLs for researcher to study

None — let the researcher find their own from the live SERP.

## Other notes

- Spoke role: links up to the pillar hub (#4) and toward money posts where genuinely relevant (#5 notebooks; #9 pens and #13 highlighters are not written yet, so no link).
- Plan inbound links (existing → this post) at outline: the `note-taking-methods` pillar should gain a link pointing to this charting spoke; `cornell-note-taking-method` and/or `mind-mapping-note-taking-method` are good secondary candidates.
- Publish target: WordPress (wordpress-rest adapter). The post stays `draft`; going live is the operator's manual wp-admin action after setting the Rank Math focus keyword (per `custom-instructions.md`).

## Autopilot assumptions

Recorded per SKILL.md §Autopilot "Intake without a conversation" — every judgment call made without a human:

1. **Author** — `olga`. `authors.md` defines a single author and no multi-author selection rubric, so the single-author path applies (not the "first author listed" fallback).
2. **Intent = `how_to`** — the content-plan row says "INFO guide: The Charting Method of Note-Taking Explained", and the sibling method posts (cornell, mind-mapping) shipped as `how_to`. Search intent is re-confirmed against the live SERP at Stage 1a; if the SERP is dominantly definitional rather than instructional, the plan/outline adjust to match.
3. **Research sources** — SERP always; Reddit and X both enabled because both modules are on and neither costs a gate. X is included on the assumption it may surface study-community counterpoints; if the capture is off-topic it is dropped at selection rather than forced into the analysis.
4. **Category** — `Productivity, EdTech`, taken from `site-conventions.md` §Categories' note-taking sub-cluster row (`[12, 9]`), matching every prior note-taking post.
5. **Product mention** — Text Summarizer chosen over the other three tools because summarising source material into categories is the step immediately before building a chart; `product.md` §Positioning recommendations asks for one topic-matched soft mention near the end.
6. **Competitors** — `modules.competitors` is off for this blog, so the "Competitors by post" table is not read and no competitors are recorded. Stage 1.5c is correctly skipped.
7. **Internal link targets** — inferred from the note-taking cluster: repo-confirmed posts plus the older live method posts that the published `mind-mapping-note-taking-method` post already links to. The writer marks `[INTERNAL_LINK_NEEDED:]` for anything it cannot confirm.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-08-03 18:14
- Human operator: slav (headless — operator console autopilot run)
