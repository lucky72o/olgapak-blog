# Images: charting-method-note-taking

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/charting-method-note-taking/outline.md` (image placement plan), `blog-ops/drafts/charting-method-note-taking/draft-v3.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/charting-method-note-taking/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/charting-method-note-taking/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `2`
  - AI-generated (`ai-prompt`): `3`
  - Screenshots: `0`
- File destination: `blog-ops/assets/charting-method-note-taking/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title and the focal object inside the vertical safe zone so the 1.91:1 OG/Twitter crop does not clip them.
- **Concept:** One oversized notebook page, turned landscape, its ruled lines resolving into a bold labeled grid, with the recurring character drawn small at its base pulling one column line with a long ruler.
- **Archetype:** `object-metaphor` — one oversized central object carries the post's whole thesis (a page becomes a grid), no cards, no flow, no callouts. It fits because charting *is* one object, a page with columns; the cover can say the entire method in one glance without listing a single step. Composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (`blog-ops/featured-log.md`, this slug's own rows excluded, none exist yet): the last two prior rows are `how-to-plan-your-week` = `scene-vignette` and `time-blocking` = `negative-space`, so **`scene-vignette` and `negative-space` are OFF LIMITS**. `object-metaphor` is picked from the remaining set.
  - **Alternatives considered and rejected** (the outline's concept, "a notebook page ruled into labelled columns with a hand-lettered title", is kept but sharpened into a single oversized object so it reads at thumbnail size):
    - `split-contrast` (messy scribbled page vs. tidy grid) — rejected, a two-panel before/after cover would preview in-post Image 4's overstuffed chart, and the post is not framed as a before/after.
    - `big-number` (a giant "5" for the five steps) — rejected, the title band already ends in "5 Steps", so a huge numeral doubles the same word and sells the post as a listicle rather than as a method.
    - `diagram-lite` (three cards and an arrow) — rejected, the post's genuine flow already exists as in-post Image 2, and the skill's rotation rule says prefer something else when the concept needs no flow.
    - `pattern-break` — rejected, the thesis is not "one thing differs"; nothing in the post hinges on an anomaly.
- **Suggested filename:** `featured.png`
- **Alt text:** `A large notebook page ruled into labeled columns, the charting method in one image`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat marigold / golden-amber field (NOT blue, NOT cream) filling the
  whole canvas, with generous empty space around one central object.

  Composition (object-metaphor archetype: ONE oversized central object, no panels,
  no cards, no arrows, no callout badges, no infographic): a single giant sheet of
  cream notebook paper, turned landscape, floating head-on in the middle-lower half
  of the canvas, tilted just a few degrees for a hand-placed feel, with a soft warm
  shadow beneath it. The page is ruled into FOUR bold columns and three rows, drawn
  with confident warm-grey rules. The top header strip of each column is filled with
  a solid flat color bar (one muted sage green, one warm honey, one terracotta, one
  soft teal #0E9F8E) and the body cells hold only short wordless pencil-grey squiggle
  marks, two or three per cell, standing in for short handwritten phrases. No readable
  letters anywhere on the page. The leftmost column's cells carry slightly darker,
  bolder squiggles so it reads as the label column.
  Second, much smaller element: the recurring friendly young woman with dark hair in
  a loose bun and a mustard sweater (the same character as prior olgapak.com covers),
  drawn small at the lower-left corner of the page, standing, holding a long wooden
  ruler along one vertical column line as if she just drew it. Nothing else in frame,
  no desk, no room, no laptop, no plants: the rest is flat marigold color.

  Title treatment overlaid across the upper area, centered, with clear space beneath
  it before the page begins, two lines, VERBATIM text:
  line 1, "Charting Method Note-Taking:" in a playful hand-lettered brush script,
  with the single word "Charting" in bright red (#E11D48) and the rest in near-black
  (#222222);
  line 2, "How to Do It in 5 Steps" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive.

  Palette: marigold / golden-amber ground, cream paper white, near-black #222222 text
  and outlines, one red accent word #E11D48, sage green / warm honey / terracotta /
  soft teal #0E9F8E used only as the four small column header bars. Brand blue is NOT
  the background and NOT the dominant fill. Mood: clean, approachable, confident,
  optimistic. Flat vector, crisp shapes, subtle warm shading, no gradients beyond a
  hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no spreadsheet UI,
  no app window, no browser chrome, no toolbar, no cell reference letters or numbers,
  no readable words inside the grid, no garbled or misspelled lettering, no extra words
  beyond the title and the wordmark, no numbered callouts or badges, no arrows, no
  connector lines, no multiple panels, no card grid, no before-and-after split, no
  giant numeral, no cluttered desk scene, no room interior, no window, no shelves, no
  houseplants, no laptop, no phone, no stock-photo realism, no 3D render, no heavy
  gradients, no drop shadows on text, no duplicated watermark, no stray logos or
  third-party brand marks, no extra limbs or fingers, no distorted face
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, recurring female character, one bright saturated background) and §Illustration palette (warm, never monochrome brand-blue). Prior covers for tonal family, deliberately NOT for composition: `blog-ops/assets/time-blocking/featured.png` (`negative-space`) and `blog-ops/assets/how-to-plan-your-week/featured.png` (`scene-vignette`).
- **Source data (if any):** none. The four columns and their fills are illustrative, not a data claim.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:` — `Charting Method Note-Taking: How to Do It in 5 Steps` — including the hyphen in "Note-Taking", the colon, and the numeral 5. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The grid cells must stay wordless: do NOT ask the model to render column headings as words, that is exactly the job of in-post Image 1 (`remotion`, real text).
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job, not a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition. It sits at `left: SAFE_MARGIN, bottom: 48` (occupying roughly x 120–330, y 1124–1152 on the 1800 × 1200 canvas), keep every diagram element at least 40 px clear of it.
- **Own-site/product UI screenshots:** skip the watermark, the UI chrome is already self-branding. (No screenshot slots in this post.)
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v3.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't.

### Image 1, after H2 "What the Charting Method Actually Is" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Anatomy of a charting-method page, a ruled grid with callouts labeling the row labels down the left edge, the category headers across the top, and what belongs inside a single cell. Type: remotion. Suggested filename: charting-anatomy.png]` (draft-v3.md line 27)
- **Type:** `remotion` (as tagged in the draft, correct: this is a labelled anatomy diagram whose entire point is exact, legible label text)
- **Concept:** A charting-method page dissected, with a bracket naming the row labels down the left edge, a bracket naming the category headers across the top, and one highlighted cell explaining what belongs inside it.
- **Suggested filename:** `charting-anatomy.png`
- **Alt text:** `Diagram of a charting page: row labels on the left, category headers on top, one cell highlighted`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `ChartingAnatomy` (register in `tools/remotion/src/Root.tsx`; note `ChartingExample` already exists and is a DIFFERENT composition, do not overwrite it)
- **Component file:** `tools/remotion/src/ChartingAnatomy.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram and its top callout. Watermark, `palette.background`, and `SAFE_MARGIN` (120) still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout (three callouts only, exactly the three the draft placeholder names, nothing more):
    - **Grid card**, the centrepiece: x ≈ 470 → 1680, y ≈ 330 → 930. Standard neutral card recipe (`palette.surface`, `1px solid palette.border`, 20 px radius, the shared `cardShadow`, `overflow: hidden`). Four columns via `gridTemplateColumns: "1.15fr 1fr 1fr 1fr"` and a `CELL_PAD` of `"22px 26px"`, mirroring `ChartingExample.tsx`.
    - **Header row** across the top of the card: background `palette.primary`, text `palette.surface`, `fonts.sans` 30 px, weight 700.
    - **Three body rows**, each separated by `1px solid palette.border`; the leftmost cell of each row uses `palette.background` fill and weight 700 (the label column), the other cells `palette.surface` and weight 500, `fonts.sans` 27 px.
    - **Top callout:** a downward bracket in `palette.muted` (2 px, three sides, open at the bottom) spanning columns 2 to 4 only, its top edge at y ≈ 240, meeting the header row at y ≈ 330. Its label sits centered above it at y ≈ 175, `fonts.sans` 27 px, `palette.muted`, one line.
    - **Left callout:** a left-facing bracket in `palette.muted` (2 px, three sides, open at the right) hugging the card's left edge from y ≈ 400 to y ≈ 910, at x ≈ 400 → 460. Its label sits in the left gutter (x 120 → 380), right-aligned, vertically centered on the bracket, `fonts.sans` 27 px, `palette.muted`, wrapped over three short lines. Never rotate text.
    - **Cell callout (the one accent role):** the "Causes" cell of the middle body row gets the emphasis variant, a `rgba(14,159,142,0.10)` fill with a `2px solid palette.accent` inset border drawn inside the cell so the grid's own rules stay intact. A 2 px `palette.accent` leader line drops from the cell's bottom edge to y ≈ 1010, then a short horizontal run to a pill label. Pill: `palette.surface` background, `1.5px solid palette.accent`, 6 px radius, `palette.accent` text, `fonts.sans` 26 px, positioned in the right half of the canvas (x ≈ 700 → 1680) so it never comes near the watermark.
    - Bottom of every element stays above y ≈ 1070 (watermark clearance).
  - Copy (exact strings to render, nothing else):
    - Header row: `Revolution` | `Dates` | `Causes` | `Key figures`
    - Row 1: `French` | `1789-1799` | `debt, famine, hunger` | `Robespierre`
    - Row 2: `Russian` | `1917` | `war, bread shortages` | `Lenin`
    - Row 3: `Industrial` | `1760-1840` | `steam power, cheap coal` | `Watt, Arkwright`
    - Top callout label: `Category headers, one question per column, decided before the session`
    - Left callout label: `Row labels, one topic per row`
    - Cell pill label: `One cell = one topic meets one category, 2 to 6 words`
    - No em-dash (U+2014) anywhere; the date ranges use plain hyphens. No check/cross glyphs as text.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. `palette.primary` is the header-row fill only (matching the established `ChartingExample.tsx` treatment of a charting grid); `palette.accent` is spent on exactly one role, the single highlighted cell plus its leader line and pill. `palette.warn` is NOT used, nothing here is a failure state, so the adapter's annotated-screenshot red-callout sub-style deliberately does not apply. Never dim anything with `opacity < 1`.
  - Typography: `fonts.sans` for headers, cells and callout labels; `fonts.mono` for the date ranges in the `Dates` column only (they read as data), per `blog-ops/profile/image-style.md`.
  - Icons / SVG assets: none. `tools/remotion/public/` is empty; do not add an asset for this slot. Brackets and the leader line are inline SVG or bordered divs.
  - Arrows / connectors: no arrowheads. The three callouts use plain brackets and one straight leader line, not directional arrows, this is an anatomy diagram, not a flow.
  - Card recipe to use: the standard neutral recipe for the grid card; the emphasis/outcome variant for the one highlighted cell only.
- **Source data (if any):** hardcoded illustrative values, acceptable in a diagram context. The revolutions example is grounded in the draft's own bullet at line 47 ("Historical periods, compared across dates, causes, key figures and outcomes") and in `facts.md` §Named examples line 52 (Evernote's history-class structure, flagged there as "a structural seed only, build our own filled-in version") — the cell contents above are ours, not copied. Cell contents are deliberately 2 to 6 words each so the image demonstrates Step 3 while it explains the anatomy.
- **Reference composition to mimic:** `tools/remotion/src/ChartingExample.tsx` — an existing in-post charting grid (grid template columns, `CELL_PAD`, primary header row, label-column fill, `<BlogWatermark />`, no title). Reuse its grid-rendering code wholesale; the new work is the three callouts and the highlighted cell. **Do not reuse its content**: that composition renders an economics-theory chart in another post, this one must stay on the revolutions example. Secondary reference for bracket-and-caption language: `tools/remotion/src/CornellLayoutDiagram.tsx` (its "~2x the cue column" bracket is the exact treatment to copy for the top callout).
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ChartingAnatomy --output=out/preview-charting-anatomy-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-charting-method-note-taking` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ChartingAnatomy --scale=2 \
    --output="$REPO/blog-ops/assets/charting-method-note-taking/charting-anatomy.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, the subject is a hand-ruled paper page, and the whole point of the image is three verbatim labels plus exact short cell phrases, which Remotion renders exactly by construction while an AI generator cannot be trusted with legible text.

---

### Image 2, after H2 "How to Use the Charting Method in 5 Steps" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The five charting steps as a compact left-to-right flow, decide columns, rule and label, short phrases, escape hatch, cover a column. Type: remotion. Suggested filename: charting-five-steps.png]` (draft-v3.md line 85)
- **Type:** `remotion` (as tagged in the draft, correct: a sequential branded flow with five verbatim step names)
- **Concept:** The five charting steps as five numbered cards in a single left-to-right row, connected by plain step arrows, with the review step marked as the one that does the actual work.
- **Suggested filename:** `charting-five-steps.png`
- **Alt text:** `Five charting steps in order: decide columns, rule and label, short phrases, escape hatch, review`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `ChartingFiveSteps`
- **Component file:** `tools/remotion/src/ChartingFiveSteps.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** Watermark, `palette.background`, and `SAFE_MARGIN` (120) still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right: one flex row, `position: absolute; inset: SAFE_MARGIN`, `alignItems: center; justifyContent: center` — five step cards separated by four fixed-width arrows. Copy the exact geometry from `Cornell5RsProcess.tsx`: `CARD_W = 262`, `ARROW_W = 62`, `flexShrink: 0` on both, giving 5 × 262 + 4 × 62 = 1558 px inside the 1560 px safe width. **Never use a flex-grown connector**, every arrow is identical length with identical gaps.
  - Each card, top to bottom: a 46 px circular number badge (`2px solid palette.primary`, `fonts.mono` 24 px, weight 700, `palette.primary` text), then a 56 × 56 inline-SVG icon, then the step name (`fonts.sans` 32 px, weight 700, `palette.text`), then the one-line description (`fonts.sans` 22 px, `palette.muted`, centered, `lineHeight: 1.36`).
  - Copy (exact strings to render, nothing else):
    - Card 1 — name `Decide columns`, description `Pick the categories before the session, not during it.`
    - Card 2 — name `Rule and label`, description `Page landscape, three to five columns, no more.`
    - Card 3 — name `Short phrases`, description `Two to six words per cell, abbreviations welcome.`
    - Card 4 — name `Escape hatch`, description `A spare row or margin for what fits no column.`
    - Card 5 — name `Cover a column`, description `Hide one column and recall it from the row labels.`
    - Badges: `1` `2` `3` `4` `5`
    - No em-dash anywhere. No check/cross glyphs as text.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. Cards 1 to 4 use the standard neutral card recipe. **Card 5 is the single accent role**: emphasis/outcome variant, `rgba(14,159,142,0.10)` fill with `2px solid palette.accent`, its icon stroked in `palette.accent` and its number badge bordered/filled in `palette.accent` instead of `palette.primary`. This is deliberate: the post argues (Step 5 and the final FAQ answer) that the review step is what does the actual work. No other element gets accent. `palette.warn` is not used at all. Never dim a card with `opacity < 1`.
  - Typography: `fonts.sans` for names and descriptions, `fonts.mono` for the five number badges, per `blog-ops/profile/image-style.md`.
  - Icons / SVG assets: none from `public/` (it is empty). Five inline SVG icons at 56 × 56, drawn with the same stroke object as `Cornell5RsProcess.tsx`'s `iStroke` (`fill: none`, `strokeWidth: 4`, round caps and joins), stroke `palette.primary` on cards 1 to 4 and `palette.accent` on card 5:
    1. three vertical bars of unequal height inside a rounded frame (choosing columns)
    2. a ruler drawing a straight vertical line (ruling and labelling)
    3. three short horizontal strokes of decreasing length (short phrases)
    4. a rectangle with a dashed strip down its right edge (the margin escape hatch)
    5. a flat hand shape covering the right third of a small grid (cover a column)
  - Arrows / connectors: four sequential step connectors, `palette.muted`, `strokeWidth={2.5}`, solid, round caps, with a matching muted arrowhead — the adapter's "sequential step connector" convention, NOT the accent path style (there is no chosen-vs-not-chosen meaning here, and the accent budget is already spent on card 5). Copy `Cornell5RsProcess.tsx`'s `<Arrow />` component verbatim.
- **Source data (if any):** hardcoded illustrative values, acceptable in a diagram context. The five step names and descriptions are compressions of the draft's own H3s at lines 87, 93, 99, 105 and 111. Step 1's "before the session, not during it" is additionally grounded in `facts.md` line 33 (e-student.org: "The charting method is not one that allows you to take notes as you go, analyzing your materials beforehand is an important part of the prep work"), and Step 3 in `facts.md` line 37 (Plaud: "Short phrases work better"). No figures are rendered, so nothing here needs fresh data.
- **Reference composition to mimic:** `tools/remotion/src/Cornell5RsProcess.tsx` — an existing in-post five-card horizontal flow with number badges, inline SVG icons, fixed-width arrows and no title. In-post diagrams may mimic a reference layout freely; reuse its `StepCard`, `Arrow`, `CARD_W`/`ARROW_W` constants and `iStroke` helper rather than re-deriving them. The one deliberate departure: Cornell's five cards are all neutral, this one promotes card 5 to the emphasis variant.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ChartingFiveSteps --output=out/preview-charting-five-steps-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-charting-method-note-taking` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ChartingFiveSteps --scale=2 \
    --output="$REPO/blog-ops/assets/charting-method-note-taking/charting-five-steps.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, and the image's job is five verbatim step names rendered as legible text in a fixed order, which Remotion renders exactly by construction.

---

### Image 3, after H2 "Paper vs. Digital: Which One to Chart On" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A paper notebook ruled into labeled columns lying beside a tablet showing the same chart on screen. Type: ai-prompt. Suggested filename: paper-vs-digital-chart.png]` (draft-v3.md line 137)
- **Type:** `ai-prompt` (as tagged in the draft; kept — this is a physical scene of two objects, not a data-accurate diagram, and it carries no verbatim text)
- **Concept:** An open paper notebook hand-ruled into labeled columns lying on a warm wooden desk beside a tablet displaying the very same chart, the two versions of one page side by side.
- **Suggested filename:** `paper-vs-digital-chart.png`
- **Alt text:** `A paper notebook ruled into columns beside a tablet showing the same chart on screen`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, on a soft oatmeal-cream
  background with natural walnut wood tones: two objects lying side by side on a warm
  wooden desk surface, seen from a gentle top-down three-quarter angle, as if looking
  down at your own desk.

  Left object: an open paper notebook with cream dot-grid pages, turned landscape, hand
  ruled into four columns and three rows with a warm pencil-grey line, slightly uneven
  and clearly hand-drawn. The top header strip of each column is filled with a small
  flat color bar (muted sage green, warm honey, terracotta, soft teal #0E9F8E), and the
  body cells hold only short wordless pencil squiggle marks, two or three per cell. A
  slim wooden pencil and a short wooden ruler rest across the notebook's lower edge.
  Right object: a slim tablet lying flat, screen facing up, tilted a few degrees the
  other way, showing THE SAME four-column three-row chart, but crisp and machine-perfect:
  clean straight rules, the same four color header bars, the same wordless squiggle
  marks in the cells. The tablet has a plain dark bezel, no visible buttons, no app
  toolbar, no status bar, no icons. A stylus rests beside it.
  The two charts should read as unmistakably the same page, one hand-made, one printed.
  Background: mostly empty warm walnut desk in soft natural light, one small terracotta
  pot with a little greenery in a far corner, nothing else. Uncluttered, generous
  breathing room, no visual noise.

  Palette: oatmeal cream, natural walnut wood, terracotta, near-black #222222 for
  outlines and small details, sage green / warm honey / soft teal #0E9F8E as small
  accents only. Brand blue is NOT the background and NOT the dominant fill. Mood:
  clean, approachable, calm, productive. Flat vector with subtle warm shading, no
  gradients, no photorealism. Small lowercase "olgapak.com" wordmark bottom-left,
  near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no blue-heavy
  objects, no readable words or numbers anywhere, no garbled lettering, no spreadsheet
  cell references, no app UI chrome, no browser toolbar, no status bar, no home screen
  icons, no notification popups, no visible brand logos or third-party wordmarks, no
  apple or tablet-maker mark, no laptop, no phone, no coffee cup clutter, no sticky-note
  wall, no cluttered desk, no person, no hands, no extra limbs or fingers, no 3D render,
  no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Samples in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none rendered. The concept is backed by `facts.md` §Named examples line 54 (a nursing student's charting-method notes hand-written into a pre-made table on a tablet, shared by the Goodnotes app account), which is exactly the paper-format-travels-to-tablet point the section makes. **Do not draw any real app's branding**, that fact supports the concept, not a logo.
- **Text-in-image warning:** this scene must contain NO legible text at all. Both charts are wordless color header bars plus squiggle marks, so nothing here depends on the model rendering letters, which is why `ai-prompt` is safe for this slot. If the model adds words, column headings, or a tablet status bar with a clock, re-run rather than accepting garbled labels. Real column labels are in-post Image 1's job (`remotion`).
- **Why this and not remotion/screenshot:** it is a physical scene comparing two objects (a hand-ruled page and a glass screen) with warm light and material texture, which is the post's section-illustration series per `image-style.md` §Chosen direction, not a diagram. `screenshot` is explicitly wrong here: capturing a real notes app would drag a third-party brand into the frame, would date the image, and would block an autopilot run on a manual capture step.

---

### Image 4, after H2 "Five Mistakes That Ruin a Chart" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: An overstuffed, unusable chart with far too many narrow columns and full sentences crammed into every cell, spilling over the ruled lines. Type: ai-prompt. Suggested filename: overstuffed-chart.png]` (draft-v3.md line 153)
- **Type:** `ai-prompt` (as tagged in the draft; kept — a deliberately messy visual punchline, and its whole point is that the writing is unreadable)
- **Concept:** A chart ruined by its own ambition, nine sliver-thin columns packed with long crammed handwriting that spills across the ruled lines and off the edge of the page.
- **Suggested filename:** `overstuffed-chart.png`
- **Alt text:** `An overstuffed chart with too many narrow columns and long sentences spilling out of the cells`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration on a warm dusty-rose / muted blush background:
  one sheet of cream notebook paper, turned landscape, seen head-on and filling the
  middle of the frame, tilted a couple of degrees, with a soft warm shadow beneath it.
  The picture is a deliberate, slightly comic failure case.

  Composition: the page is ruled into NINE absurdly narrow vertical columns, so thin
  that nothing could fit in them, plus four rows. Every single cell is crammed edge to
  edge with dense wordless handwriting: tight rows of pencil-grey squiggle lines,
  four or five per cell, packed with no breathing room, visibly overflowing their cells
  and crossing over the ruled column lines into their neighbours. Several squiggle
  lines run right off the right edge of the page and get cropped by it. Two of the
  ruled lines are redrawn crookedly on top of earlier ones, as if the columns were
  changed halfway through, and one column line is scribbled out. In the far right of
  the page, one cell has a small flat bright red (#E11D48) scribble mark where the
  writing has been forced sideways: the single red element in the picture, marking the
  breaking point. No arrows, no numbered badges, no callout boxes, no labels.
  Beside the page, small and secondary at the lower right, a stub of pencil with a worn
  eraser lying flat. Nothing else in frame: the rest is flat dusty-rose color with
  generous empty margin around the page.

  Palette: warm dusty rose / muted blush ground, cream paper, pencil grey for all the
  writing marks, near-black #222222 for outlines, a single bright red #E11D48 accent
  mark, warm walnut for the pencil. Brand blue is NOT the background and NOT the
  dominant fill, no teal here. Mood: rueful and a bit comic, honest about the mess,
  never alarming or aggressive. Flat vector, subtle warm shading, no gradients, no
  photorealism. Small lowercase "olgapak.com" wordmark bottom-left, near-black at about
  55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no readable words
  or numbers anywhere, no garbled or misspelled lettering, no lorem ipsum, no
  spreadsheet UI, no app window, no browser chrome, no cell reference letters, no
  screen or device, no red X marks, no warning triangle, no exclamation icon, no fire
  or explosion metaphor, no crumpled paper ball, no angry or distressed face, no person,
  no hands, no extra limbs or fingers, no cluttered desk, no room interior, no visible
  brand logos, no 3D render, no stock-photo realism, no heavy drop shadows, no neon
  colors
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm background hue, brand blue as accent only) and §Annotation conventions for the red-as-problem semantics. Hue is deliberately varied from the featured marigold and Image 3's oatmeal-and-walnut.
- **Source data (if any):** none rendered. The failure it depicts is the draft's mistakes list at lines 155 to 159 (columns chosen mid-lecture, full sentences in cells, too many columns), plus `facts.md` line 37 (Plaud: "Don't worry about writing detailed sentences. Short phrases work better") as the rule being broken. Nine columns is an illustrative exaggeration of the draft's "eight columns on one page" line, not a claim.
- **Text-in-image warning:** the crammed writing must be **wordless squiggle marks, never real sentences**. That is a feature, not a compromise: the point of the image is that the cells are unreadable, and a texture of dense strokes says "too much writing" more reliably than any AI-rendered sentence, which would come out garbled and pull the reader into trying to read it. Do NOT ask the model for column headings, labels, or a caption. If the render produces letterforms, re-run.
- **Why this and not remotion/screenshot:** the slot needs a hand-made mess, overflowing strokes, crooked redrawn rules, writing shoved sideways, which is exactly what a from-scratch flat illustration does well and what a clean geometric Remotion grid cannot fake without looking tidy; a Remotion version of "unreadable" would still render as neat text. Nothing exists to screenshot.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/charting-method-note-taking/
├── featured.png
├── charting-anatomy.png
├── charting-five-steps.png
├── paper-vs-digital-chart.png
└── overstuffed-chart.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register `ChartingAnatomy` and `ChartingFiveSteps` as `<Still>`s in `src/Root.tsx`, write the components in `src/ChartingAnatomy.tsx` and `src/ChartingFiveSteps.tsx`, iterate via `npx remotion still` into `out/` (throwaway), final export at `--scale=2` into `blog-ops/assets/charting-method-note-taking/`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`, never inline a hex or a font stack.
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Three slots here (featured + Images 3 and 4).
3. **Screenshots:** none in this post. See §Editor notes for why the tablet in Image 3 is illustrated rather than captured.
4. **Watermark + polish:** `<BlogWatermark />` for the two Remotion slots; for the three `ai-prompt` slots the wordmark is requested in-prompt and can be added post-hoc if a render drops it. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `charting-five-steps.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## Editor notes

- **Counts match.** Draft `[IMAGE:]` placeholders in `draft-v3.md` = 4 (lines 27, 85, 137, 153); the outline's §Image placement plan lists 4 in-post slots (outline.md lines 201 to 204) plus the frontmatter-only featured slot. No delta. Planned against v3 only; `draft-v1.md` and `draft-v2.md` are superseded and were not read for slot extraction.
- **No type changes.** All four draft-tagged types were kept exactly as the writer placed them: two `remotion` diagrams and two `ai-prompt` scenes. Every assigned type is a member of `images.enabled = [ai-prompt, screenshot, remotion]`.
- **Priority-ladder check.** The two slots whose whole point is verbatim legible text (Image 1's three anatomy labels, Image 2's five step names) are both `remotion`, which is the correct top rung. Images 3 and 4 are material scenes with zero exact-text dependency, so `remotion` was considered and rejected on fit, not on effort: a geometric composition cannot render a hand-ruled page, warm light, or a believable overflowing mess. `image-style.md` §Chosen direction backs this split explicitly ("Reserve Remotion for genuinely diagrammatic slots only"). No `screenshot` slot would improve on any `remotion` slot here, and no `remotion` slot duplicates a table.
- **Zero screenshot slots, deliberately.** The only capturable surface in the post is the tablet in Image 3, and it is specified as an illustration: a real capture would drag a third-party app's branding and chrome into the frame, would date the image, and would stall an autopilot run on a manual human capture. `remotion` for this blog's own product UI is moot, the post shows no product screen.
- **Table-redundancy check: passed, with one instruction.** Image 1 (line 27) sits 6 lines above the section's Decision / Owner / Deadline mini table (lines 33 to 36), inside the ±20-line window, so this was checked carefully. It is not a duplicate: the diagram's job is the three labelled callouts (row labels, category headers, what goes in a cell) that a markdown table cannot render, exactly as the outline argued at line 201. **To keep it that way, the composition must NOT reuse the Decision / Owner / Deadline content** — it renders the revolutions example instead, per the copy strings above. The post's other table (the worked example, lines 121 to 125) has no image in its section at all, per the outline.
- **Cross-post duplication check.** `tools/remotion/src/ChartingExample.tsx` already exists (an economics-theory charting grid built for a previous post). `ChartingAnatomy` reuses its grid-rendering *code* but must render different content and add the callouts, or the two posts ship near-identical images. Flagged for whoever writes the composition.
- **Featured-duplication check: passed.** No placeholder uses `featured.png`, and no in-post concept matches the cover. The cover and Image 1 both involve a grid, so they are separated on purpose: the cover is a warm marigold flat-vector illustration with **wordless** cells, Image 1 is a neutral `#F7F7F7` diagram whose entire content is labels.
- **Archetype rotation:** `object-metaphor` chosen. The ledger (`blog-ops/featured-log.md`) blocked `scene-vignette` (how-to-plan-your-week) and `negative-space` (time-blocking); `split-contrast`, `big-number`, `diagram-lite` and `pattern-break` were available but rejected for the reasons recorded in §Featured image. A row for this slug was appended to the ledger.
- **Featured concept sharpened (not retyped).** The outline's concept was already close; it was reduced to a single oversized object with at most two focal elements (the page, and the small character with a ruler) so it survives the 1.91:1 OG crop and reads at thumbnail size. No numbered callouts, no badges, no multi-panel layout on the cover.
- **No slot needs fresh data.** Nothing in this post renders a statistic, which is correct: `facts.md` line 9 records the editor's standing warning that no verified statistic about the charting method exists. Do not let any image acquire a percentage, a retention figure, or a study reference. Image 1's cell contents and Image 2's step copy are illustrative and are grounded in the draft's own prose plus `facts.md` lines 33, 37 and 52.
- **Hue variation across the set (per `image-style.md` §Illustration palette):** featured = marigold / golden amber, Image 3 = oatmeal cream + walnut, Image 4 = dusty rose. The two `remotion` slots sit on the neutral `palette.background`, which naturally spaces the warm scenes apart in the reading flow. No blue-dominant scene anywhere; brand blue and teal appear as accents only. Image 4 is the only slot using red, and only for the single breaking-point mark.
- **Judgment call worth an override look, Image 2's accent.** I promoted card 5 (`Cover a column`) to the emphasis/outcome variant rather than leaving all five neutral like `Cornell5RsProcess.tsx`. Rationale: the post's own FAQ closer says the review step "is what does the actual work". If a reviewer prefers strict visual parity with the Cornell composition, drop card 5 to the neutral recipe, that is a one-line change and costs nothing else.
- **Do not edit the draft.** The `[IMAGE:]` placeholders stay exactly as written; the publish adapter's staging step swaps them for real Markdown image syntax.
