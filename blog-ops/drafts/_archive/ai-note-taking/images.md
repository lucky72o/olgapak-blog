# Images: ai-note-taking

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/ai-note-taking/outline.md` (image placement plan), `blog-ops/drafts/ai-note-taking/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/ai-note-taking/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/ai-note-taking/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `2`
  - AI-generated (`ai-prompt`): `3`
  - Screenshots: `0`
- File destination: `blog-ops/assets/ai-note-taking/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title and the focal object inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips nothing.
- **Concept:** One oversized funnel: a tall wall of machine-tidied transcript lines pours in at the top and comes out as three short handwritten lines on a small card, with the recurring woman drawn small beside it holding the pen that wrote them.
- **Archetype:** `object-metaphor` — one oversized central object carrying the post's whole thesis, no panels and no flow chain. It fits because the post's argument is a volume argument: the machine grinds the pile (capture, transcribe, tidy, find again) and you keep the three lines that matter (decide, rephrase, connect). A funnel says "lots in, little out, and the little bit is yours" in one glance and survives thumbnail size, which a two-column list does not.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy `blog-ops/featured-log.md`, this slug's own entry excluded): the last two prior posts are `2026-08-26 bullet-journal-for-beginners → big-number` and `2026-09-02 screen-free-hobbies → negative-space`, so **`big-number` and `negative-space` are OFF LIMITS**. `object-metaphor` was last used 2026-08-03, the oldest gap of any available archetype.
  - **Alternatives considered and rejected:**
    - `split-contrast` (an "AI half / your half" two-panel cover, which is where the outline's featured wording naturally points) — rejected, it is exactly in-post Image 1. The cover would be a smaller copy of a body diagram, and the reader would meet the same picture twice within 800 words.
    - `diagram-lite` (three cards, capture → summarize → review) — rejected, it duplicates in-post Image 2's five-step flow, and the skill's own guidance says not to default to a flow when the concept doesn't need one.
    - `scene-vignette` (a woman at a lecture with a phone recording) — rejected, in-post Images 3 and 4 are both warm illustrated scenes with the same character; a third scene as the cover would make the whole post's image set read as one undifferentiated texture. Also last used 2026-08-19, the most recent non-blocked archetype.
- **Suggested filename:** `featured.png`
- **Alt text:** `A wall of machine transcript pouring through a funnel into three short handwritten lines`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat warm amber / golden-honey field (NOT blue, NOT navy, NOT grey)
  filling the whole canvas. Clean, uncluttered, generous breathing room.

  Composition (object-metaphor archetype: ONE oversized central object, no panels,
  no cards, no charts, no arrows, no grid, at most three focal elements):

  1. The hero object, large and centered in the lower two thirds of the canvas: a
  single oversized funnel seen head-on, drawn as a simple wide-mouthed flat shape in
  cream paper white with a hairline warm-grey edge and a soft muted-teal band around
  its rim.
  2. Falling into the funnel's wide mouth from above: a tall loose stack of pale
  grey-blue transcript sheets, drawn as WORDLESS evenly-spaced pencil-grey squiggle
  lines on cream paper, many sheets, slightly overlapping and tumbling, so the top of
  the composition reads as a big machine-made pile.
  3. Coming out of the narrow spout at the bottom: one small cream index card holding
  exactly THREE short handwritten squiggle lines in near-black ink, noticeably fewer
  and rounder than the machine lines above, resting on a flat ground plane.
  4. Small, at the lower right: the recurring friendly young woman with dark hair in
  a loose bun and a mustard sweater (the same character as prior olgapak.com covers),
  drawn small and relaxed, standing beside the little card with a pen in one hand,
  looking at it. No desk, no room, no furniture, no window, no plants, no laptop, no
  phone: the rest of the canvas stays flat empty amber.

  Title treatment overlaid across the upper area, centered, with clear space beneath
  it before the falling sheets begin, two lines, VERBATIM text:
  line 1, "AI Note-Taking:" in a playful hand-lettered brush script, with the word
  "AI" in bright red (#E11D48) and "Note-Taking" plus the colon in near-black
  (#222222);
  line 2, "A 5-Step Workflow That Actually Sticks" in a bold rounded sans (Montserrat
  or similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive.

  Palette: warm amber/honey ground, cream paper white, near-black #222222 text and
  ink, pencil grey for the machine lines, soft teal #0E9F8E and a touch of mustard as
  small accents only. Brand blue #2B6CB0 is NOT the background and NOT a dominant
  fill. Mood: clean, approachable, confident, optimistic. Flat vector, crisp shapes,
  subtle warm shading, no gradients beyond a hint of warm light, no line-art-only
  outlines.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no two-column
  layout, no split screen, no before/after panels, no side-by-side comparison, no
  process flow, no arrows, no numbered callouts or badges, no infographic panels, no
  multiple cards, no robot, no android face, no brain icon, no circuit-board motif,
  no glowing neon, no sci-fi look, no cluttered desk, no room interior, no window, no
  shelves, no houseplants, no laptop, no smartphone, no microphone icon spam, no
  stock-photo realism, no 3D render, no heavy gradients, no drop shadows on text, no
  readable words on the transcript sheets or the index card, no garbled or misspelled
  lettering, no extra words beyond the title and the wordmark, no lorem ipsum, no
  duplicated watermark, no stray logos or third-party brand marks, no extra limbs or
  fingers, no distorted face, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, recurring female character, single bright saturated background) and §Illustration palette (warm, never monochrome brand-blue). Samples in `blog-ops/reference/image-samples/`. Prior covers are for tonal family only, never composition: `blog-ops/assets/screen-free-hobbies/featured.png` (`negative-space`) and `blog-ops/assets/bullet-journal-for-beginners/featured.png` (`big-number`) are both blocked archetypes and must not be echoed.
- **Source data (if any):** none. The "many sheets in, three lines out" ratio is the post's argument (draft-v2.md lines 53-58 and 109-114), not a measured figure.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:` — `AI Note-Taking: A 5-Step Workflow That Actually Sticks` — including the hyphen in "Note-Taking", the "5-Step" numeral, and the colon. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The transcript sheets and the index card stay WORDLESS squiggles by design, so nothing else in the image depends on rendered letters.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job, not a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, this post has no screenshot slots.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside each prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph (so the heading introduces the section, the paragraph frames the point, and the image illustrates it).

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't.

### Image 1, after H2 "Why you still take the notes, and AI does the rest" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A two-column comparison. Left column "AI handles": turn speech into text, draft a first summary, make it searchable. Right column "You handle": decide what matters, put it in your own words, connect it to what you already know. Type: remotion. Suggested filename: ai-handles-you-handle.png]` (draft-v2.md line 45)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: two labeled lists of exact copy strings, which is real rendered text by construction, and the section has no competing markdown table)
- **Concept:** Two labeled panels side by side, the left listing the three jobs AI does (turn speech into text, draft a first summary, make it searchable) and the right listing the three that stay yours (decide what matters, put it in your own words, connect it to what you know), with the right panel carrying the emphasis. **Revised at Stage 4b.5** during the §Staging visual backstop: the original left column read `Capture / Transcribe / Tidy up / Find it again`, which contradicted Image 2, where step 1 `Capture` and step 4 `Organize` are both labelled `YOU`. Two diagrams in one post cannot put the same word on opposite sides. The left column now names the mundane mechanics instead of the step names, so nothing collides; the source and the render were both updated.
- **Suggested filename:** `ai-handles-you-handle.png`
- **Alt text:** `Two panels: AI handles transcribing, first-draft summaries and search; you handle deciding and rephrasing`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `AiHandlesYouHandle`
- **Component file:** `tools/remotion/src/AiHandlesYouHandle.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` for the final PNG.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram (only the two panel headings sit at the top of their own panels). `<BlogWatermark />`, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right:
    - Two equal panels inside `SAFE_MARGIN` (120), mirroring `TwoPilesOfScreenTime.tsx`'s geometry exactly: `PANEL_TOP = SAFE_MARGIN` (120), `PANEL_BOTTOM = 1064` (clears the watermark), `GUTTER = 64`, `PANEL_W = (1800 - 240 - 64) / 2 = 748`, `LEFT_X = 120`, `RIGHT_X = 932`. Reuse those constants rather than re-deriving them.
    - Each panel is a card: left panel uses the **standard neutral recipe** (`palette.surface`, `1px solid palette.border`, 16px radius, the shared `cardShadow`); right panel uses the **emphasis/outcome variant** (background `rgba(14,159,142,0.08)`, `2px solid palette.accent`). Exactly one accent card in the composition, per the adapter's §Color conventions.
    - Inside each panel, top to bottom: a heading line at `HEADING_Y = 44` from the panel top, a full-width `1px palette.border` divider at `DIVIDER_Y = 120`, then the item rows starting at `ROWS_TOP = 190`.
    - Item rows: `ROW_H = 132`, `ROW_GAP = 20`, each row is a 56px inline stroked SVG glyph (`GLYPH = 56`, `strokeWidth 2.5`, no fill) plus a label to its right with a 24px gap, label column `LABEL_W = PANEL_W - 2*44 - 56 - 24`. Left-panel glyphs stroke in `palette.primary`, right-panel glyphs stroke in `palette.accent`.
    - The left panel has 4 rows, the right has 3. Do NOT stretch the right panel's rows to fill; keep `ROW_H` identical in both panels and let the right panel end higher, with its remaining space empty. Vertically center each panel's row block inside its own panel so the two stacks read as balanced rather than top-aligned with a hole.
    - Row labels are single-line where they fit and wrap to two lines inside the row otherwise (never an overflowing single-line pill). "Connect it to what you already know" will wrap; budget two lines for it.
  - Copy (exact strings to render, verbatim, nothing else):
    - Left panel heading: `AI HANDLES`
    - Left rows, top to bottom: `Turn speech into text`, `Draft a first summary`, `Make it searchable`
    - Right panel heading: `YOU HANDLE`
    - Right rows, top to bottom: `Decide what matters`, `Put it in your own words`, `Connect it to what you already know`
    - No other text anywhere. No em-dash (U+2014). No check/cross characters as text.
  - Palette: per `blog-ops/profile/image-style.md` tokens imported from `tools/remotion/src/theme.ts`, plus the adapter's §Color conventions. `palette.accent` is spent on exactly one role, the right panel (the human half is the thing the section argues for). `palette.primary` carries the left panel's heading and glyph strokes. `palette.warn` is NOT used: neither half is a failure state. Never dim the left panel with `opacity < 1`; it stays full-contrast neutral.
  - Typography: `fonts.sans` for both headings (bold, uppercase, letter-spaced) and all row labels; no `fonts.mono` needed, there is no data value in this image.
  - Icons / SVG assets: inline stroked SVG glyphs only, hand-drawn in the component in a 56×56 user space via a shared `<Svg>` wrapper (copy the pattern from `TwoPilesOfScreenTime.tsx` lines 32-56). `tools/remotion/public/` holds no reusable icon for these, and none should be added. Needed glyphs: left = microphone, sound wave crossing into a text line, a small broom sweeping a page, a magnifier over a page; right = a hand picking one line out of three, a speech bubble containing a pen nib, two dots joined by a curved link.
  - Arrows / connectors: none. This is a static two-panel comparison with no directional flow, so no arrows, which keeps the accent budget on the right panel.
  - Card recipe to use: standard neutral recipe for the left panel, emphasis/outcome variant for the right panel. Rows are not cards, just glyph + label lines.
- **Source data (if any):** none needed. The two lists are the draft's own copy: the left column restates draft-v2.md lines 27-33 (transcription, summarization, tidying, retrieval) and the right column is verbatim from the draft's own bullet list at lines 55-57. Hardcoded illustrative values are acceptable here; no `facts.md` row is being represented.
- **Reference composition to mimic:** `tools/remotion/src/TwoPilesOfScreenTime.tsx` — an existing in-post two-panel comparison with identical geometry constants, glyph rows, no title, and `<BlogWatermark />`. In-post diagrams may mimic its layout freely; reuse its panel constants, `rowY(i)` helper, and `<Svg>` glyph wrapper instead of re-inventing them. `MindMapVsWebContrast.tsx` is a second example of the same panel math.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still AiHandlesYouHandle --output=out/preview-ai-handles-you-handle-v1.png
  ```
- **Final export command** (writes into the CURRENT tree's assets folder; `REPO` is derived dynamically so this is worktree-safe):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still AiHandlesYouHandle --scale=2 \
    --output="$REPO/blog-ops/assets/ai-note-taking/ai-handles-you-handle.png"
  ```
- **Why this and not a real screenshot:** there is nothing to screenshot, this is the post's own division of labor, and the seven labels must render as exact, legible text, which is a Remotion job.

---

### Image 2, after H2 "My 5-step AI note-taking workflow" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A linear five-step process diagram, capture to transcribe to summarize to organize to review, with the transcribe and summarize steps visually marked as the AI's job and review marked as the human's. Type: remotion. Suggested filename: five-step-workflow.png]` (draft-v2.md line 67)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: a sequential flow with exact step names and role labels, and the section has no markdown table)
- **Concept:** Five numbered step cards in a left-to-right row, capture → transcribe → summarize → organize → review, each carrying a small role pill marking it AI's job or yours, with review drawn as the emphasized final card.
- **Suggested filename:** `five-step-workflow.png`
- **Alt text:** `Five-step flow: capture, transcribe, summarize, organize, review, with two steps marked as AI's job`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `FiveStepWorkflow`
- **Component file:** `tools/remotion/src/FiveStepWorkflow.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` for the final PNG.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. `<BlogWatermark />`, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right:
    - One horizontal row of five equal step cards inside `SAFE_MARGIN` (120), separated by four arrows. Reuse `ChartingFiveSteps.tsx`'s exact constants: `CARD_W = 262`, `ARROW_W = 62`, `NAME_H = 78` (two lines of the 32px step name so every description starts at the same height). 5 × 262 + 4 × 62 = 1558, which fits the 1560px band inside the safe margins with 1px to spare on each side. Every arrow is the same fixed length with the same fixed gap on both sides; never a flex-grown connector.
    - Each card: `flexShrink: 0`, 16px radius, the shared `cardShadow`, `padding: "36px 24px"`, column flex, centered, `gap: 22`. Card content top to bottom: a 46px circular number badge (`2px solid` the card's mark color, number in `fonts.mono`), a 56px inline stroked SVG glyph, the step name (`fonts.sans`, 32px, semibold, reserved `NAME_H`), a one-line description (`fonts.sans`, ~22px, `palette.muted`), and at the card's foot a small role pill.
    - Card variants: cards 1-4 use the **standard neutral recipe** (`palette.surface`, `1px solid palette.border`) with mark color `palette.primary`; card 5 (`Review`) uses the **emphasis/outcome variant** (`rgba(14,159,142,0.10)` background, `2px solid palette.accent`) with mark color `palette.accent`. Exactly one accent card, per the adapter's §Color conventions. That card is the emphasis because the draft's own line is that step five is "the only one that makes the other four worth doing".
    - Role pills (this is how "AI's job" vs "yours" is marked, without spending a second accent): a small rounded pill at the foot of each card, `fonts.sans`, bold, uppercase, ~18px, generous horizontal padding. Cards 2 and 3 get `rgba(43,108,176,0.10)` background with `palette.primary` text; cards 1 and 4 get a `palette.border`-tinted background with `palette.muted` text; card 5 gets `rgba(14,159,142,0.14)` background with `palette.accent` text.
    - Vertical placement: the card row's visual center sits at roughly y = 610, i.e. card top ≈ y 375 with a card height of ~470 once the content above renders. Keep at least 150px of clear space between the card bottoms and the watermark at y ≈ 1100.
  - Copy (exact strings to render, verbatim, nothing else):
    - Card 1: badge `1`, name `Capture`, description `Record it and stay in the room.`, pill `YOU`
    - Card 2: badge `2`, name `Transcribe`, description `Audio becomes searchable text.`, pill `AI`
    - Card 3: badge `3`, name `Summarize`, description `A first pass, not a final answer.`, pill `AI`
    - Card 4: badge `4`, name `Organize`, description `Same fields, every time.`, pill `YOU`
    - Card 5: badge `5`, name `Review`, description `Ten minutes, in your own words.`, pill `YOU`
    - No other text anywhere. No em-dash (U+2014). No check/cross characters as text.
  - Palette: per `blog-ops/profile/image-style.md` tokens imported from `tools/remotion/src/theme.ts`, plus the adapter's §Color conventions. `palette.accent` on card 5 only. `palette.primary` on the neutral cards' badges/glyphs and the two `AI` pills. `palette.warn` NOT used, no step is a failure state. Convey "not the AI's job" with `palette.muted` text, never with `opacity < 1`.
  - Typography: `fonts.sans` for step names, descriptions, and role pills; `fonts.mono` for the five number badges only (they read as data, per the adapter's §Typography).
  - Icons / SVG assets: inline stroked SVG glyphs only, drawn in the component in a 56×56 user space (copy the `stroke()` helper and icon pattern from `ChartingFiveSteps.tsx` lines 7-60). No files in `tools/remotion/public/` are needed and none should be added. Glyphs: 1 = a phone lying face-up with a small sound arc, 2 = a sound wave resolving into three text lines, 3 = a long block of lines shrinking to two lines, 4 = a labeled folder with three tab dividers, 5 = a page with an eye or a small circular arrow over it.
  - Arrows / connectors: **sequential step connector** style per the adapter's §Arrow conventions, `palette.muted`, `strokeWidth 2.5`, solid, rounded caps, arrowhead marker in the same muted color. There is no "chosen path vs. not chosen" meaning here, so no accent stroke on any arrow. Copy the `<Arrow />` component from `ChartingFiveSteps.tsx` lines 113-137 verbatim.
  - Card recipe to use: standard neutral recipe for cards 1-4, emphasis/outcome variant for card 5.
- **Source data (if any):** hardcoded illustrative values, drawn from the draft's own workflow at draft-v2.md line 65 (`capture, transcribe, summarize, organize, review`) and the five H3 step headings at lines 71, 79, 85, 97, 105. **Do NOT render the Microsoft five-step model from `facts.md` lines 104-106** (`capture, transcribe, structure, summarize, sync`), which is a different list, cited in the post as someone else's framing at draft-v2.md line 33. The role split (AI on transcribe and summarize) is the post's own argument, not a sourced figure.
- **Reference composition to mimic:** `tools/remotion/src/ChartingFiveSteps.tsx` — an existing in-post five-card horizontal flow with fixed `CARD_W` / `ARROW_W`, a numbered badge, a per-card glyph, an accent-flagged final card, no title, and `<BlogWatermark />`. In-post diagrams may mimic its layout freely; reuse its `StepCard`, `Arrow`, and `stroke()` helpers and add only the role pill, which is the one element it does not already have.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FiveStepWorkflow --output=out/preview-five-step-workflow-v1.png
  ```
- **Final export command** (writes into the CURRENT tree's assets folder; `REPO` is derived dynamically so this is worktree-safe):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FiveStepWorkflow --scale=2 \
    --output="$REPO/blog-ops/assets/ai-note-taking/five-step-workflow.png"
  ```
- **Why this and not a real screenshot:** the workflow is the author's own process, not a screen; the five step names and the AI/you role labels must be exact rendered text.

---

### Image 3, after H2 "Which AI note-taking tool fits which job" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The same person in three capture situations, a lecture hall with a phone on the desk, a video call at a kitchen table, and a walk outdoors with a small recorder clipped on, illustrating that the situation decides the tool. Type: ai-prompt. Suggested filename: capture-situations.png]` (draft-v2.md line 123)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: an illustrated human scene, not a diagram; it deliberately does not restate the section's table)
- **Concept:** A three-panel illustrated strip of the same woman capturing in three different places, a lecture hall with her phone face-up on the desk, a video call at her kitchen table, and a walk outdoors with a small recorder clipped to her jacket.
- **Suggested filename:** `capture-situations.png`
- **Alt text:** `The same woman recording in three places: a lecture hall, a video call at home, and a walk`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, drawn as a single wide
  triptych: three equal vertical vignettes side by side, separated by two thin
  vertical hairlines in warm grey, each vignette with its own flat background color
  and the SAME young woman in all three, dark hair in a loose bun, mustard sweater,
  calm and attentive, seen at a slight three-quarter angle.

  Left vignette, flat oatmeal-cream background: a lecture hall. She sits at a sloped
  wooden bench desk in the middle distance, facing away toward a large pale
  blackboard drawn as wordless chalky squiggle marks, a couple of simplified
  classmates as plain silhouettes beside her. On her desk, foreground and clearly
  visible, a phone lying FACE-UP, flat and dark-screened, with a small soft teal
  sound arc rising from it. Her pen rests on a small open notebook.

  Middle vignette, flat warm sage-green background: her kitchen table at home. She
  sits three-quarter facing a slim open laptop on a warm walnut tabletop, screen
  angled away so no interface is visible, only a plain pale panel. A mug and a small
  terracotta pot with a bit of greenery share the table. A soft teal sound arc rises
  from the laptop edge.

  Right vignette, flat dusty-terracotta background: outdoors, walking. She is shown
  mid-stride in profile on a simple path, a small rounded recorder clipped to her
  jacket collar with a soft teal sound arc beside it, one hand in a pocket. Behind
  her, two or three simplified leafy shapes and nothing else, generous empty sky.

  Every vignette is uncluttered with generous breathing room and only three or four
  objects. Palette across the strip: oatmeal cream, warm sage green, dusty terracotta,
  natural walnut wood, near-black #222222 for outlines and small details, soft teal
  #0E9F8E used only for the three small sound arcs. Brand blue is NOT a background and
  NOT a dominant fill. Mood: clean, approachable, calm, productive. Flat vector with
  subtle warm shading, no gradients, no photorealism. Small lowercase "olgapak.com"
  wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults; the triptych fits a wide 3:2 frame without needing a panoramic ratio)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no blue-heavy
  objects, no readable words or numbers anywhere, no garbled lettering, no labels, no
  captions, no panel titles, no app UI chrome, no browser toolbar, no visible screen
  interface, no video-call grid, no waveform charts, no visible brand logos, no
  headphones brand marks, no robot, no floating icons, no arrows, no numbered badges,
  no crowded lecture hall, no busy street, no cluttered desk, no different-looking
  women across the panels, no extra limbs or fingers, no distorted face, no 3D render,
  no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Samples in `blog-ops/reference/image-samples/`. Same recurring character as the featured image, so generate this slot after the cover and match her hair, sweater, and build.
- **Source data (if any):** none. The three situations map to rows of the section's table (draft-v2.md lines 125-131) but represent no numeric claim.
- **Text-in-image warning:** this image must contain NO legible text at all. The blackboard is wordless chalk marks, the laptop screen is a plain panel, and there are no panel labels. Nothing here depends on the model rendering letters, so if it adds words, re-run rather than accepting garbled lettering. The only lettering allowed is the `olgapak.com` wordmark.
- **Why this and not remotion/screenshot:** it is a human scene about context, not a data-accurate diagram, and `image-style.md` assigns section scenes to `ai-prompt`. There is nothing to screenshot: the point is the room, not a product's interface, and a vendor UI capture here would date fast and read as an endorsement (the outline's explicit reasoning).

---

### Image 4, after H2 "Before you hit record: permission, policy and privacy" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A phone lying face-up on a table between two people mid-conversation, one of them gesturing toward it, the moment of asking before recording. Type: ai-prompt. Suggested filename: ask-before-recording.png]` (draft-v2.md line 171)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: a social moment, not a diagram)
- **Concept:** A phone lying face-up on a café or meeting table between two people mid-conversation, one gesturing openly toward it while the other nods, the small moment of asking permission before recording.
- **Suggested filename:** `ask-before-recording.png`
- **Alt text:** `Two people at a table, one gesturing toward a phone lying face-up, asking before recording`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, on a flat soft clay-pink
  background with natural wood tones: two people sitting across a round warm walnut
  table, drawn from a slightly raised three-quarter angle so the tabletop is clearly
  visible between them.

  Centre of the table, the focal object, drawn larger than strict perspective would
  give it: a single phone lying FACE-UP and flat on the wood, dark screen with one
  small soft teal dot near its top edge and a faint teal sound arc above it, plainly
  the thing being discussed.

  Left, the recurring young woman with dark hair in a loose bun and a mustard sweater
  (the same character as the other olgapak.com illustrations), leaning slightly
  forward, one open palm extended toward the phone in a relaxed asking gesture, warm
  and unhurried, her expression friendly.
  Right, a second person with short curly hair in a soft sage-green shirt, seated
  upright, head tilted in a small agreeing nod, both hands resting near a mug. The two
  are clearly mid-conversation and at ease with each other.

  On the table besides the phone: two mugs and a small closed notebook, nothing more.
  Background: mostly empty flat clay-pink wall in soft warm light, one small terracotta
  pot with a bit of greenery far right. Uncluttered, generous breathing room, no visual
  noise.

  Palette: clay pink, natural walnut wood, cream, sage green, mustard, near-black
  #222222 for outlines and small details, soft teal #0E9F8E only on the recording dot
  and sound arc. Brand blue is NOT the background and NOT a dominant fill. Mood: clean,
  approachable, calm, respectful. Flat vector with subtle warm shading, no gradients,
  no photorealism. Small lowercase "olgapak.com" wordmark bottom-left, near-black at
  about 55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no blue-heavy
  objects, no readable words or numbers anywhere, no garbled lettering, no speech
  bubbles, no consent-form paperwork, no legal gavel, no contract document, no red
  record button spam, no app UI chrome, no visible phone interface, no browser toolbar,
  no visible brand logos, no surveillance or spy imagery, no hidden-camera look, no
  tense or confrontational body language, no crowded cafe, no third person, no
  cluttered table, no laptop, no extra limbs or fingers, no distorted faces, no
  identical twin faces, no 3D render, no stock-photo realism, no heavy drop shadows,
  no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — warm, wood-toned, `finished-notebooks-shelf` family; avoid the cold blue of `student-desk-spiral`. Samples in `blog-ops/reference/image-samples/`. Same recurring character as the featured image and Image 3; keep her consistent. Background hue is deliberately different from Image 3's three panels so the post's image set does not read as one flat color.
- **Source data (if any):** none. The section's substance (recording-consent rules varying by jurisdiction, `facts.md` FTC row) is legal text and deliberately stays in prose, not in the image.
- **Text-in-image warning:** this scene must contain NO legible text at all. The phone screen stays dark with no interface, the notebook is closed, and there are no signs or labels. If the model adds words, re-run rather than accepting garbled lettering. The only lettering allowed is the `olgapak.com` wordmark.
- **Why this and not remotion/screenshot:** the subject is a social moment between two people, which a card-and-arrow diagram cannot carry, and there is no screen to capture. `image-style.md` assigns section scenes to `ai-prompt`.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/ai-note-taking/
├── featured.png
├── ai-handles-you-handle.png
├── five-step-workflow.png
├── capture-situations.png
└── ask-before-recording.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate via `npx remotion still <Id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <Id> --scale=2 --output=blog-ops/assets/ai-note-taking/<filename>.png`. Use `<BlogWatermark />` and the fonts/palette locked in `tools/remotion/src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Needs no API key (codex authenticates itself).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** for `remotion` slots, use the shared `<BlogWatermark />` component (no manual pass needed). For `ai-prompt` slots, the wordmark is requested inside the prompt; add it post-hoc if a render drops it. Output format: **PNG** for every slot in this post.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `five-step-workflow.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/ai-note-taking/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 45, 67, 123, 171), 4 in-post slots in `outline.md` §Image placement plan, and all 4 types and filenames were kept exactly as the outline assigned and the writer emitted them. No filename or type was changed.
- **Featured concept vs. Image 1, deliberate divergence.** The outline's featured wording ("the split between the mundane half AI handles and the thinking half that stays yours") is the same idea as in-post Image 1, and rendering it literally would have produced a two-column cover that is a smaller copy of a body diagram. Per the skill's featured-hygiene rule, the cover was re-brainstormed into the `object-metaphor` funnel (a volume metaphor for the same thesis) so the two images say the same thing in visibly different pictures. If a human prefers the literal split cover, the tradeoff is that duplication.
- **Archetype rotation.** `object-metaphor` chosen. Blocked by the last two prior posts: `big-number` (`2026-08-26 bullet-journal-for-beginners`) and `negative-space` (`2026-09-02 screen-free-hobbies`). Also rejected on fit: `split-contrast` and `diagram-lite` (both duplicate in-post images), `scene-vignette` (two in-post scenes already). Recorded at `blog-ops/featured-log/2026-09-09-ai-note-taking.md`.
- **No `screenshot` slots, on purpose.** `screenshot` sits above `ai-prompt` on the priority ladder and is enabled for this blog, but no slot in this post needs one: the post names tool CATEGORIES rather than reviewing one product's interface, and the only named tool (Gemini Notebook) appears in one paragraph of prose. A vendor UI capture would date fast, read as an endorsement, and add a manual capture step to an otherwise fully automatable set. This matches `outline.md`'s explicit reasoning.
- **No chart needs fresh data.** Neither `remotion` slot is a data chart. Image 1's copy is the draft's own bullet list; Image 2's five steps come from the draft's own H3 headings. Nothing in this plan requires a `facts.md` row that does not exist, and no slot is flagged "needs fresh data".
- **Watch item for the builder on Image 2:** `facts.md` lines 104-106 carry a DIFFERENT five-step list (Microsoft's `capture, transcribe, structure, summarize, sync`), cited in the post as someone else's framing at draft-v2.md line 33. The diagram must render the post's own five steps (`capture, transcribe, summarize, organize, review`), not that one. The spec says so explicitly, but it is the most likely mix-up in this post.
- **Table-redundancy check passed.** The one markdown table (draft-v2.md lines 125-131) sits in the same section as Image 3, but Image 3 is an illustrated scene rather than a chart of the table's rows, so no `remotion` chart duplicates table content anywhere in this post.
- **Character consistency across three `ai-prompt` slots.** The featured image, Image 3, and Image 4 all show the recurring woman. Generate the featured cover first and use it as the reference for her hair, sweater, and build in the other two, otherwise the set reads as three different people.
