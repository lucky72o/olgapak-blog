# Images: digital-vs-paper-notes

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/digital-vs-paper-notes/outline.md` (image placement plan), `blog-ops/drafts/digital-vs-paper-notes/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/digital-vs-paper-notes/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/digital-vs-paper-notes/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `3`
  - AI-generated (`ai-prompt`): `2`
  - Screenshots: `0`
- File destination: `blog-ops/assets/digital-vs-paper-notes/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the page, the tablet, and the crossing ink line inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither the title nor the line's crossing point.
- **Concept:** One continuous handwritten teal line that starts on a cream paper page, crosses the gap, and carries on unbroken across a tablet screen, so the cover says in a single glance that the writing motion travels across the paper/digital divide.
- **Archetype:** `split-contrast` — a two-panel this-vs-that composition (paper on the left, screen on the right), with the accent stroke as the element that unites rather than separates them. It fits because the post's entire thesis is that the popular dividing line (digital vs paper) is drawn in the wrong place: two panels state the "vs" the title promises, and one unbroken accent line answers it. Two objects plus one line stays thumbnail-legible with generous empty space, and it carries no callouts, badges, or numbered annotations. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (`blog-ops/featured-log.md`): the last two rows are `time-blocking` = `negative-space` and `digital-detox-plan` = `object-metaphor`, so **both are OFF LIMITS**. No prior row exists for this slug (first Stage 4a run for this post).
  - The outline's own featured suggestion ("a hand mid-sentence in an open notebook beside a tablet and a laptop showing the same page") was rebuilt: three devices plus a hand is four focal objects, it reads as a props table rather than a thesis, and it overlaps in-post Image 2 almost exactly. The rebuilt concept keeps the outline's *idea* (the motion travels) and drops the clutter.
  - **Alternatives considered and rejected:**
    - `object-metaphor` — blocked by the ledger (`digital-detox-plan`), and a single object cannot express a "vs" claim anyway.
    - `negative-space` — blocked by the ledger (`time-blocking`).
    - `scene-vignette` — rejected: a desk scene with a person writing is what in-post Image 2 does, and the two nearest covers in the library (`note-taking-methods`, `cornell-note-taking-method`) are already character-at-a-desk compositions.
    - `big-number` — rejected on evidence grounds: the only numbers available (14.6% vs 8.8% verbatim, 13 vs 40 wpm) are flagged `⚠️ needs_verification` in `facts.md` lines 31-32 and are deliberately NOT stated in the draft. A cover must never render a figure the post refuses to claim.
    - `pattern-break` — rejected: the post's structure is two-against-two (handwriting side vs typing side), not one anomaly in a grid, so a single odd tile would misstate the argument.
    - `diagram-lite` — rejected on the skill's own guidance: this post already carries three in-post diagrams, and a card-and-arrow cover would read as a fourth.
- **Suggested filename:** `featured.png`
- **Alt text:** `A handwritten line running unbroken from a paper page onto a tablet screen`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated soft
  lavender background (a warm, slightly dusty lilac, NOT blue, NOT navy, NOT teal, NOT
  yellow, NOT terracotta) filling the whole canvas, with generous empty space.

  Composition (split-contrast archetype: exactly TWO objects side by side in the lower
  two thirds, no panels of cards, no charts, no badges, no numbered callouts, no arrows):

  Left object: an open cream paper notebook, seen from a gentle three-quarter angle,
  lying flat, with a soft warm ground shadow beneath it. Its visible page carries five or
  six short rows of wordless handwriting, drawn as simple near-black squiggle strokes,
  never as readable letters.

  Right object: a modern tablet of roughly the same size, lying flat at the same angle, a
  thin near-black bezel around a plain warm-white screen, with the same kind of soft
  ground shadow. A slim warm walnut stylus rests along the tablet's lower edge.

  The single connecting element and the point of the whole picture: ONE continuous
  handwritten line in soft teal (#0E9F8E), drawn as a flowing wordless cursive squiggle
  with a slightly thick brush stroke. It begins in the middle of the paper page, runs
  rightwards, leaves the page edge, arcs briefly through the empty lavender gap between
  the two objects, and carries on across the tablet screen in exactly the same stroke
  weight and rhythm, ending in a small tapered tail. The line must be visibly UNBROKEN
  and identical on both sides: nothing interrupts it, no gap, no break, no fade, no
  border cuts through it. Nothing else on the canvas: no person, no hands, no desk, no
  room, no laptop, no phone, no icons, no keyboard.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the two objects begin, two lines, VERBATIM text:
  line 1, "Digital vs Paper Notes:" in a playful hand-lettered brush script, with the
  single word "vs" in bright red (#E11D48) and "Digital", "Paper", "Notes" and the colon
  in near-black (#222222);
  line 2, "What the Research Really Says" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: soft lavender ground, cream paper, warm white screen, warm walnut, near-black
  #222222 outlines and squiggles, one red accent word #E11D48, soft teal #0E9F8E used
  ONLY for the continuous crossing line. Mood: clean, approachable, confident, curious,
  quietly clever. Flat vector, crisp shapes, subtle soft shading, no gradients beyond a
  hint of light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no blue or navy background, no teal or green background, no marigold or terracotta
  background, no monochrome brand-blue scene, no person, no hands, no fingers, no arms,
  no face, no desk scene, no room interior, no laptop, no keyboard, no smartphone, no
  third device, no app icons, no notification badges, no UI chrome, no browser toolbar,
  no charts, no cards, no panels, no arrows, no numbered callouts, no labels on the
  objects, no versus symbol drawn between the objects, no dividing line or wall between
  the page and the tablet, no broken or dashed connecting line, no readable words or
  numbers beyond the title and the wordmark, no garbled or misspelled lettering, no lorem
  ipsum, no duplicated watermark, no 3D render, no stock-photo realism, no heavy drop
  shadows on text, no busy texture, no cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, bright saturated single-color ground, `olgapak.com` wordmark). Prior covers for tonal family only, deliberately NOT for hue or composition: `blog-ops/assets/note-taking-methods/featured.png` (teal, character at centre, fanned notebooks — the closest topical neighbour, which this cover must not resemble), `blog-ops/assets/cornell-note-taking-method/featured.png` and `blog-ops/assets/best-notebooks-for-note-taking/featured.png` (both royal blue), `blog-ops/assets/digital-detox-plan/featured.png` (marigold, object-metaphor).
- **Source data (if any):** none, and deliberately so. `facts.md` lines 31-32 hold the only numeric candidates (14.6% vs 8.8% verbatim; ~13 vs ~40 wpm) and both are `⚠️ needs_verification`; the draft never states them, so nothing numeric may appear on the cover.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim plus the wordmark). Check the render word by word against the frontmatter `title:` — `Digital vs Paper Notes: What the Research Really Says` — including the lowercase "vs" and the colon. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The handwriting on the page and on the screen must stay wordless squiggles: do NOT let the model write real sentences there.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job, not a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't.

### Image 1, after H2 "What the research actually says (and what it doesn't)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Two-column card, "What the study measured" beside "What it doesn't show", each with three short bullet lines, on-brand palette. Type: remotion. Suggested filename: what-the-study-measured.png]` (draft-v2.md line 42)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: every line is exact scoping wording that must render as legible, verbatim text, which is a Remotion job by construction)
- **Concept:** Two columns setting what the 2014 laptop-versus-longhand study actually measured beside the three things it does not show, with the limits column carrying the accent.
- **Suggested filename:** `what-the-study-measured.png`
- **Alt text:** `Two columns comparing what the note-taking study measured and what it does not show`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `WhatTheStudyMeasured`
- **Component file:** `tools/remotion/src/WhatTheStudyMeasured.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. Watermark, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout (derive every coordinate from a constant block, never hand-place a pixel; mirror the panel-geometry block at the top of `MindMapVsWebContrast.tsx`):
    - `PANEL_TOP = SAFE_MARGIN` (120), `PANEL_BOTTOM = 990`, `PANEL_H = 870`.
    - `GUTTER = 64`, `PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2 = 748`, `LEFT_X = 120`, `RIGHT_X = 932`.
    - Each panel is one card, padding `40px 44px`, radius 16.
    - Panel header on one line at the card's top: `fonts.sans`, 44px, weight 800, letter-spacing -0.5. Left header `palette.text`, right header `palette.accent`. A 1px `palette.border` rule spans the card's inner width 26px below the header.
    - Three bullet rows per panel below the rule, `ROW_GAP = 44`. Each row: a 12px circle marker (left panel `palette.muted`, right panel `palette.accent`) vertically aligned to the first text line, 22px to the left of a text block that wraps to at most 3 lines at `fonts.sans`, 32px, weight 500, `palette.text`, line-height 1.35. Bullet text never touches the card edge and rows never overlap.
    - Footer caption centered under both panels at y ≈ 1030, single line, `fonts.sans`, 26px, weight 500, `palette.muted`. Clearance to the watermark (~y 1100) is ~50px, nothing may cross it.
  - Copy (exact strings to render, nothing else on the canvas):
    - Left header: `What the study measured`
      - `University students taking notes on real lectures`
      - `Longhand versus laptop, tested shortly afterwards`
      - `Laptop notes were more verbatim, and weaker on conceptual questions`
    - Right header: `What it doesn't show`
      - `Not memory in general, one task measured once`
      - `Not paper versus screens, nobody handwrote on a tablet`
      - `Not that typing harms learning, the mechanism is what you do while writing`
    - Footer caption: `2019 replication: small, nonsignificant effects favoring longhand`
    - No em-dash anywhere; no check or cross glyphs as text; no percentages, no word counts, no sample sizes.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. Left panel uses the **standard neutral card recipe** (`palette.surface`, `1px solid palette.border`, radius 16, `cardShadow`). Right panel uses the **emphasis/outcome variant exactly once** (light `palette.accent` tint background, `2px solid palette.accent`), because the section's argument is the limits column. `palette.warn` is NOT used: the study is not a failure state, it is a correctly scoped result. Never dim a panel with `opacity < 1`.
  - Typography: `fonts.sans` throughout (nothing here reads as data). Headers 44px/800, bullets 32px/500, caption 26px/500.
  - Icons / SVG assets: none. **`tools/remotion/public/` does not exist in this project**, so never call `staticFile()`; draw any shape inline as SVG.
  - Arrows / connectors: **none.** The two panels are a comparison, not a flow.
  - Card recipe to use: neutral recipe left, emphasis/accent variant right.
- **Source data (if any):** `facts.md` line 58 (Mueller & Oppenheimer, *The Pen Is Mightier Than the Keyboard*, 2014, what it compared and reported) and line 61 (Morehead, Dunlosky & Rawson 2019 replication, ✅ verified at Stage 3d, 2026-08-05, "small (nonsignificant) effects favoring longhand"). The three right-column lines are the draft's own scoping bullets (draft-v2.md lines 58-60), shortened without changing meaning. **No fresh data needed.** Deliberately excluded: the `⚠️ needs_verification` figures at `facts.md` lines 31-32.
- **Reference composition to mimic:** `tools/remotion/src/MindMapVsWebContrast.tsx` — the closest existing two-panel contrast composition (fixed panel-geometry constants, equal cards, even gutter, per-panel header label, no title, `<BlogWatermark />`). Reuse its constants-then-layout structure and card styling. `tools/remotion/src/PaperProblemsDiagram.tsx` is a secondary reference for bullet-row typography inside a card.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still WhatTheStudyMeasured --output=out/preview-what-the-study-measured-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-digital-vs-paper-notes` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still WhatTheStudyMeasured --scale=2 \
    --output="$REPO/blog-ops/assets/digital-vs-paper-notes/what-the-study-measured.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, and the whole point of the image is six exact scoping sentences rendered as legible text, which Remotion renders exactly while an AI generator cannot be trusted with verbatim wording.

---

### Image 2, after H2 "It's the handwriting, not the paper" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The same hand writing the same sentence twice, once in an open paper notebook and once on a tablet with a stylus, side by side, flat-vector style. Type: ai-prompt. Suggested filename: motion-not-material.png]` (draft-v2.md line 70)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: a conceptual scene with no exact text or figures)
- **Concept:** A close overhead view of one hand writing the same wordless sentence twice, once with a pen in a paper notebook and once with a stylus on a tablet, the two writing motions mirrored on a warm wooden desk.
- **Suggested filename:** `motion-not-material.png`
- **Alt text:** `The same hand writing one sentence twice, once on paper and once on a tablet screen`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, seen from directly overhead
  (top-down flat-lay), on a natural walnut wooden desk surface with soft golden light
  raking in from the upper right and an oatmeal-cream background at the edges.

  Composition: two writing moments side by side, mirrored, filling the middle band of
  the frame with generous space above and below. On the left, an open cream paper
  notebook with a hand holding a slim black pen, caught mid-stroke; the page shows three
  short rows of wordless handwriting drawn as simple near-black squiggles. On the right,
  a tablet with a plain warm-white screen and the SAME hand, in the same pose and at the
  same angle, holding a warm walnut stylus mid-stroke; its screen shows the same three
  rows of the same wordless squiggles, matching the paper page line for line so the two
  halves read as one repeated motion. The hands are the subject: relaxed, natural, warm
  skin tone, sleeves of a soft mustard knit sweater at the wrists. Between the two, a
  small terracotta pot with a little greenery and a warm honey mug sit on the wood as
  quiet props. Nothing else in frame: no laptop, no keyboard, no phone, no face, no room.

  Palette: natural walnut wood, oatmeal cream, cream paper, warm honey, terracotta,
  mustard knit, near-black #222222 for outlines and squiggles, soft teal #0E9F8E and
  brand blue #2B6CB0 only as tiny accents (a mug rim, the stylus band). Brand blue is NOT
  the background and NOT the dominant fill. Mood: warm, calm, hands-on, matter-of-fact.
  Flat vector with subtle warm shading, no gradients, no photorealism. Small lowercase
  "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no lavender
  background, no night scene, no glowing or colorful screen, no app icons, no
  notification badges, no UI chrome, no browser toolbar, no keyboard, no laptop, no
  phone, no readable words or numbers anywhere, no garbled lettering, no versus symbol,
  no arrows, no labels, no dividing line between the two halves, no crossed-out object,
  no extra limbs, no extra fingers, no third hand, no distorted anatomy, no face, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture, no cluttered
  desk
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look (`blog-ops/reference/image-samples/`); explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Hue is deliberately warm wood so it does not echo the lavender featured cover.
- **Source data (if any):** none. This section's claim is explicitly an inference about the mechanism (draft-v2.md line 74), not a measured result, so the image must not imply a figure.
- **Text-in-image warning:** this image must contain NO legible text at all. Both the page and the screen show wordless pencil-grey/near-black squiggle rows, never real sentences. Nothing here depends on the model rendering letters; if it adds words, re-run rather than accepting garbled type.
- **Why this and not remotion/screenshot:** it is a human, tactile moment (one motion, two surfaces), not a data-accurate diagram; there is no real screen to capture, and `image-style.md` assigns section scenes to `ai-prompt`.

---

### Image 3, after H2 "The hybrid system most people actually land on" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Three-step horizontal flow, handwrite in the lecture, pull out what matters, searchable review, with simple icons per step. Type: remotion. Suggested filename: hybrid-workflow-flow.png]` (draft-v2.md line 139)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: a genuine sequential process diagram whose three step labels must render as exact text)
- **Concept:** The hybrid workflow as three connected cards, handwrite live, pull out only what's worth keeping, then put it somewhere searchable, with the last step carrying the accent.
- **Suggested filename:** `hybrid-workflow-flow.png`
- **Alt text:** `Three-step flow: handwrite live, pull out what matters, then make it searchable`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `HybridWorkflowFlow`
- **Component file:** `tools/remotion/src/HybridWorkflowFlow.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. Watermark, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right (fixed constants plus a pure `xAt(i)` helper, never eyeballed offsets):
    - Inner width `1800 - 2 * SAFE_MARGIN = 1560`. `CARD_W = 420`, `CONNECTOR_W = 150` (a FIXED 110px arrow centered inside it, 20px clear on each side). `3 * 420 + 2 * 150 = 1560`, exact fit. `xAt(i) = SAFE_MARGIN + i * (CARD_W + CONNECTOR_W)` → 120, 690, 1260.
    - `CARD_TOP = 310`, `CARD_H = 560` (bottom 870, clear of the watermark at ~1100 and of the top safe margin). All three cards share the same top and height; arrows are vertically centered on the card band at y = 590.
    - Inside each card, top to bottom with fixed gaps: a 64px inline SVG icon (stroke `palette.primary`, strokeWidth 4, round caps, in the style of the icon block in `Cornell5RsProcess.tsx`); a step tag in `fonts.mono`, 24px, bold, letter-spaced, `palette.muted`; the step title in `fonts.sans`, 38px, weight 700, `palette.text`, wrapping to at most 2 lines; the step body in `fonts.sans`, 27px, weight 500, `palette.muted`, line-height 1.35, wrapping to at most 4 lines. Card padding `36px 32px`, text centered, nothing touching a card edge.
  - Copy (exact strings to render, nothing else on the canvas):
    - Card 1, icon = pen/pencil: tag `STEP 1`, title `Handwrite live`, body `In the lecture or the meeting, on paper or a tablet. Don't try to catch everything.`
    - Card 2, icon = funnel: tag `STEP 2`, title `Pull out what matters`, body `Not a transcript. The ideas, the questions, the three things you'd hate to forget.`
    - Card 3, icon = magnifying glass over a document: tag `STEP 3`, title `Make it searchable`, body `A notes app, a doc, anywhere with a search box.`
    - No em-dash anywhere; no check or cross glyphs as text; no numbers beyond the step tags.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. Cards 1 and 2 use the **standard neutral card recipe**. Card 3 uses the **emphasis/outcome variant exactly once** (light `palette.accent` tint background, `2px solid palette.accent`, its icon stroked in `palette.accent`), because the searchable copy is what the whole workflow is for. `palette.warn` is NOT used anywhere: no step is a failure state.
  - Typography: `fonts.mono` for the `STEP N` tags (they read as data), `fonts.sans` for titles and bodies.
  - Icons / SVG assets: three inline SVGs drawn in the component (pen, funnel, magnifier-over-document). **`tools/remotion/public/` does not exist in this project**, so never call `staticFile()`. The pen and funnel can be lifted almost verbatim from `Cornell5RsProcess.tsx`'s `PencilIcon` and `FunnelIcon`.
  - Arrows / connectors: two **sequential step connectors** per the adapter (`palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, arrowhead in the same muted color), identical fixed length, identical gaps, never flex-grown. The accent budget is spent on card 3, so no arrow is accent-colored.
  - Card recipe to use: neutral for cards 1 and 2, emphasis/outcome variant for card 3 only.
- **Source data (if any):** the three steps are the draft's own numbered workflow (draft-v2.md lines 145-147), condensed for the diagram without changing meaning, and the pattern is backed by the r/productivity voice-of-customer quote in `facts.md` §Voice-of-customer ("Both. I take notes on paper/eink, then put the important stuff into obsidian", draft-v2.md line 137). Treat the copy as hardcoded illustrative wording, acceptable in a diagram context. **No fresh data needed.**
- **Reference composition to mimic:** `tools/remotion/src/Cornell5RsProcess.tsx` — the closest existing icon-per-step process composition (inline icon SVGs off a shared stroke object, step data array, no title, `<BlogWatermark />`). `tools/remotion/src/MethodDecisionFlow.tsx` is the reference for the fixed-width `Arrow` component (copy its `ARROW_W` pattern rather than re-inventing a connector).
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HybridWorkflowFlow --output=out/preview-hybrid-workflow-flow-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-digital-vs-paper-notes` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HybridWorkflowFlow --scale=2 \
    --output="$REPO/blog-ops/assets/digital-vs-paper-notes/hybrid-workflow-flow.png"
  ```
- **Why this and not a real screenshot:** there is no screen to capture, and the image's value is three exact step labels plus a directional sequence, which Remotion renders precisely and keeps editable in git.

---

### Image 4, after H2 "So which should you pick?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Compact if-then decision flow, five conditions on the left branching to handwrite, type, or hybrid on the right. Type: remotion. Suggested filename: notes-decision-rule.png]` (draft-v2.md line 161)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: a decision diagram whose five conditions and outcomes must render as exact text)
- **Concept:** Five if-then rows mapping a situation on the left to handwriting, typing, or the hybrid on the right, with the high-stakes row carrying the accent.
- **Suggested filename:** `notes-decision-rule.png`
- **Alt text:** `If-then chart matching five situations to handwriting, typing, or a hybrid approach`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `NotesDecisionRule`
- **Component file:** `tools/remotion/src/NotesDecisionRule.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. Watermark, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, five stacked rows, each row `condition card → arrow → outcome card` (fixed constants plus a pure `yAt(i)` helper):
    - Inner width `1560`. `COND_W = 900`, `ARROW_W = 120` with a fixed 24px gap on each side, `OUT_W = 1560 - 900 - 24 - 120 - 24 = 492`. Condition card x = 120, arrow x = 1044, outcome card x = 1188.
    - `ROW_TOP = 140`, `ROW_H = 146`, `ROW_GAP = 44`. `yAt(i) = ROW_TOP + i * (ROW_H + ROW_GAP)` → 140, 330, 520, 710, 900; last row bottom = 1046, leaving ~54px clear of the watermark at ~1100. Nothing crosses it.
    - Condition card: neutral recipe, padding `22px 30px`, text left-aligned, vertically centered, `fonts.sans`, 30px, weight 500, `palette.text`, line-height 1.28, wrapping to at most 2 lines.
    - Outcome card: padding `22px 26px`, text centered, `fonts.sans`, 31px, weight 700, `palette.text`, line-height 1.25, wrapping to at most 2 lines.
    - Every arrow is identical and fixed-length, vertically centered on its own row; no flex-grown connectors, no row overlaps, no card touching another.
  - Copy (exact strings to render, nothing else on the canvas):
    - Row 1: `If you need to understand it (lectures, new concepts, anything you'll be tested on)` → `Handwrite it, paper or tablet`
    - Row 2: `If you need to find it later (reference, meeting actions, shared docs)` → `Type it`
    - Row 3: `If the task or the exam happens on a screen` → `Practice on a screen`
    - Row 4: `If handwriting is painful, slow, or not available to you` → `Type it, then summarize`
    - Row 5: `If it matters a lot` → `Handwrite, then digitize`
    - No em-dash anywhere; no check or cross glyphs as text; no arrows drawn as text characters.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. All condition cards and outcome cards 1 to 4 use the **standard neutral card recipe**. Outcome card 5 uses the **emphasis/outcome variant exactly once** (light `palette.accent` tint, `2px solid palette.accent`), because "handwrite, then digitize" is the post's strongest recommendation. Do NOT color-code the three outcome families (that would spend the accent three times and flatten the emphasis), and do NOT use `palette.warn`: no row here is a failure state. Never dim a row with `opacity < 1`.
  - Typography: `fonts.sans` throughout; nothing in this diagram reads as data.
  - Icons / SVG assets: none. **`tools/remotion/public/` does not exist in this project**, so never call `staticFile()`.
  - Arrows / connectors: five **neutral mapping connectors** (`palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, matching arrowhead), all the same fixed length: reuse the `Arrow` component pattern in `MethodDecisionFlow.tsx` verbatim. These are condition-to-outcome mappings, not a "chosen vs not chosen" path, so none is accent-colored or dashed.
  - Card recipe to use: neutral everywhere except outcome card 5.
- **Source data (if any):** the five rules are the draft's own if-then list (draft-v2.md lines 167-171), condensed without changing meaning; the accessibility row is backed by `facts.md` line 106 / draft-v2.md line 103 (University of Toronto Scarborough learning-strategies page) and the screen-format row by the r/PE_Exam quote in `facts.md` §Voice-of-customer (draft-v2.md line 107). Treat the rendered copy as hardcoded illustrative wording. **No fresh data needed.**
- **Reference composition to mimic:** `tools/remotion/src/MethodDecisionFlow.tsx` — the same shape of diagram for the sibling post (condition card, fixed-width muted arrow, outcome card, stacked rows, no title, `<BlogWatermark />`). Reuse its `Arrow` and `Card` components and its row-stacking structure directly; only the copy, the row count, and the single accent row change.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still NotesDecisionRule --output=out/preview-notes-decision-rule-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-digital-vs-paper-notes` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still NotesDecisionRule --scale=2 \
    --output="$REPO/blog-ops/assets/digital-vs-paper-notes/notes-decision-rule.png"
  ```
- **Why this and not a real screenshot:** nothing to capture; the image is ten exact sentences arranged as a mapping, which Remotion renders verbatim and an AI generator would garble.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/digital-vs-paper-notes/
├── featured.png
├── what-the-study-measured.png
├── motion-not-material.png
├── hybrid-workflow-flow.png
└── notes-decision-rule.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register each `<Still>` in `src/Root.tsx` (component reference, never a JSX element), write components in `src/WhatTheStudyMeasured.tsx`, `src/HybridWorkflowFlow.tsx`, `src/NotesDecisionRule.tsx`, final export at `--scale=2` into `blog-ops/assets/digital-vs-paper-notes/`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`. Three slots here (Images 1, 3, 4). Note: this project has **no `public/` directory**, so no `staticFile()` assets.
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Two slots here (featured + Image 2).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `<BlogWatermark />` for the three Remotion slots; for the two `ai-prompt` slots the wordmark is requested in-prompt and can be added post-hoc if a render drops it. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `what-the-study-measured.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (Stage 4a.5 auto-renders the three Remotion slots and dispatches the two `ai-prompt` slots to codex).
2. Save to `blog-ops/assets/digital-vs-paper-notes/` using the suggested filenames verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Counts match.** Draft `[IMAGE:]` placeholders = 4 (draft-v2.md lines 42, 70, 139, 161); the outline's §Image placement plan lists the same 4 in-post slots plus the frontmatter-only featured. No delta, and the draft-tagged types match the outline's types one for one.
- **No type changes.** All four writer-placed types were kept: three `remotion` diagrams (each one's whole point is exact rendered wording) and one `ai-prompt` scene. Priority-ladder check: no `screenshot` slot exists or is warranted (the post shows no external surface, and this blog's own product UI is not in play, so the "never screenshot own UI when remotion is enabled" rule never binds).
- **Table-redundancy check: cleared, but worth a look.** The draft's only markdown table sits at lines 29-34 (the four options: paper, laptop, tablet, hybrid), which is within ±20 lines of Image 1 (line 42). The content is different (Image 1 scopes the 2014 study; the table compares four note-taking options), so no duplicate-chart warning is raised. Note the outline deliberately gave H2 1 no image for exactly this reason.
- **Featured-duplication check: passed.** No placeholder uses `featured.png`, and no in-post concept is the cover's concept.
- **Featured concept rebuilt, not just retyped.** The outline's suggestion (notebook + tablet + laptop showing the same page, with a hand) is four focal objects and would have duplicated in-post Image 2. Replaced with a two-object split-contrast plus one unbroken accent line. Rejected alternatives are recorded in §Featured image.
- **Archetype rotation:** `split-contrast` chosen. Ledger (`blog-ops/featured-log.md`) blocked `negative-space` (time-blocking) and `object-metaphor` (digital-detox-plan). `scene-vignette`, `big-number`, `pattern-break` and `diagram-lite` were available but rejected on fit. Row appended to the ledger for this slug.
- **No number appears in any image, on purpose.** The two numeric candidates in `facts.md` (lines 31-32: 14.6% vs 8.8% verbatim; ~13 vs ~40 wpm) are both `⚠️ needs_verification` and are absent from the draft. Nothing here is flagged "needs fresh data" because no slot depends on unverified data; if a reviewer asks for a chart of those figures, the answer is that the data must be verified first.
- **Judgment call worth an override look: featured vs Image 2 proximity.** Both show paper beside a tablet. They are deliberately separated by medium (flat lavender ground, no people, two objects and a line vs a warm top-down wooden desk with hands) and by hue. If a reviewer still finds them too close, the cleanest fix is to crop Image 2 tighter onto the two hands and pen tips, not to change either slot's type.
- **Judgment call: featured hue.** Lavender was picked because the existing cover library already owns royal blue (`cornell-note-taking-method`, `best-notebooks-for-note-taking`), teal (`note-taking-methods`), marigold (`digital-detox-plan`), terracotta (`time-blocking`) and navy (`how-to-stop-doomscrolling`), and a red accent word needs a ground it can carry on. It is a cool hue, which `image-style.md`'s warmth rule targets at *section illustrations*, not the hero; the warm props (cream paper, walnut stylus) keep it in family. Easy to override to another unused saturated hue.
- **Judgment call: no character on the cover.** `image-style.md` notes a recurring female character "where a person fits". Here the featured hard rule (one simple idea, ≤3 focal objects) won, and the character would compete with the crossing line. Image 2 keeps the house presence via the mustard-sweater cuffs and hands.
- **Accent discipline:** each of the three Remotion slots spends `palette.accent` exactly once (Image 1 right panel, Image 3 card 3, Image 4 outcome row 5), and none uses `palette.warn`, since this post has no failure state to depict.
- **No `public/` directory in `tools/remotion/`.** Every icon in Images 1, 3 and 4 must be inline SVG; a `staticFile()` call will fail the render.
- **Do not edit the draft.** The `[IMAGE:]` placeholders stay exactly as written; the publish adapter's staging step swaps them for real Markdown image syntax.
