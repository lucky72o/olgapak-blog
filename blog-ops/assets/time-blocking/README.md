# Images: time-blocking

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/time-blocking/outline.md` (image placement plan), `blog-ops/drafts/time-blocking/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/time-blocking/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/time-blocking/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/time-blocking/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep all content inside the vertical safe zone so the 1.91:1 OG/Twitter crop does not clip the title or the focal element.
- **Concept:** A near-empty warm canvas holding one slim day-column card, off-center, with just three filled blocks and wide deliberate gaps between them, the empty space itself carrying the post's argument.
- **Archetype:** `negative-space` — one small focal element placed off-center in a generous empty canvas. It fits because the post's whole thesis is *plan less of the day*: emptiness is the message, so a cover that is mostly empty says the thesis in one glance and stays legible as a thumbnail. Composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (`blog-ops/featured-log.md`): one prior row (`how-to-plan-your-week`, `scene-vignette`), so `scene-vignette` is OFF LIMITS. That matters visually too, the prior cover is a full warm-room desk scene, and this cover must not repeat it.
  - **Alternatives considered and rejected** (the outline's suggested concept, "a day's calendar blocked out with deliberate empty gaps," was kept but simplified, it was drifting toward a literal full calendar grid):
    - `split-contrast` (packed day vs 60/20/20 day) — rejected, it is exactly in-post Image 2 (the Remotion diagram); the cover would duplicate a body image.
    - `big-number` (a giant "3" for "block three things") — rejected, the post title carries no number, so a bare numeral reads ambiguously at thumbnail size.
    - `object-metaphor` (oversized jar with rocks and visible air gaps) — rejected, it imports the "big rocks" framework the post never uses, which would mislead.
- **Suggested filename:** `featured.png`
- **Alt text:** `A day's calendar with only three blocks planned and the rest deliberately left open`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat dusty-terracotta / warm clay field (NOT blue, NOT cream) filling
  the whole canvas with almost nothing on it. Deliberately empty, airy composition
  with generous negative space, the emptiness is the point of the picture.

  Composition (negative-space archetype, at most two focal objects, no panels, no
  charts, no grid of cards): a single slim vertical "day column" card, flat cream
  paper white with a soft rounded rectangle shape and a hairline warm-grey edge,
  standing upright and placed OFF-CENTER in the lower right third of the canvas,
  seen head-on. Inside the column, exactly three filled rounded blocks: one muted
  sage green, one warm honey yellow, one soft teal, spaced far apart with wide blank
  cream gaps between and below them, so roughly two thirds of the column is empty.
  Second, much smaller focal element: the recurring friendly young woman with dark
  hair in a loose bun and a mustard sweater (the same character as prior olgapak.com
  covers), drawn small, seated cross-legged on the flat ground plane at the lower
  left, relaxed, holding a pen and a single small notebook, looking up toward the
  day column. No room, no furniture, no window, no shelves, no plants, no props
  beyond her notebook and pen: the rest of the canvas stays flat empty color.

  Title treatment overlaid across the upper area, centered, with clear space beneath
  it before the illustration begins, two lines, VERBATIM text:
  line 1, "Time Blocking:" in a playful hand-lettered brush script, with the single
  word "Blocking" in bright red (#E11D48) and "Time" and the colon in near-black
  (#222222);
  line 2, "How to Do It (Without It Falling Apart)" in a bold rounded sans (Montserrat
  or similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive.

  Palette: warm terracotta/clay ground, cream paper white, near-black #222222 text,
  one red accent word #E11D48, sage green / honey yellow / soft teal #0E9F8E block
  fills used sparingly as small accents only. Mood: clean, approachable, confident,
  calm, optimistic. Flat vector, crisp shapes, subtle warm shading, no gradients
  beyond a hint of warm light, no outlines-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no dense calendar
  grid, no spreadsheet, no hour-by-hour timetable, no wall-to-wall blocks, no numbered
  callouts or badges, no arrows, no infographic panels, no multiple cards, no cluttered
  desk scene, no room interior, no window, no shelves, no houseplants, no laptop,
  no phone, no clock face, no stock-photo realism, no 3D render, no gradients-heavy
  look, no drop shadows on text, no garbled or misspelled lettering, no extra words
  beyond the title and the wordmark, no lorem ipsum, no duplicated watermark, no
  stray logos or third-party brand marks, no extra limbs or hands, no distorted face,
  no crowded background, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, recurring female character) and §Illustration palette (warm, never monochrome brand-blue). Prior cover for tonal family, deliberately NOT for composition: `blog-ops/assets/how-to-plan-your-week/featured.png` (that one is `scene-vignette`, this one must be far emptier).
- **Source data (if any):** none — the three blocks are illustrative, not a data claim.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Modern gpt-image usually renders described text, but check the render word by word against the frontmatter `title:` — `Time Blocking: How to Do It (Without It Falling Apart)` — including the parentheses and the colon. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. Do NOT let the model invent labels inside the three blocks; they stay wordless.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job, not a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** skip the watermark, the UI chrome is already self-branding. (No screenshot slots in this post.)
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't.

### Image 1, after H2 "What is time blocking (and why does it work)?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A person at a desk glancing between an open-ended to-do list on paper and a calendar on screen showing three clear blocks. Warm, uncluttered, flat-vector style. Type: ai-prompt. Suggested filename: list-versus-calendar.png]` (draft-v2.md line 27)
- **Type:** `ai-prompt` (as tagged in the draft, correct: this is a scene, not a diagram)
- **Concept:** A person at a warm wooden desk looking back and forth between a long paper to-do list with no end and a screen calendar holding three clearly bounded blocks.
- **Suggested filename:** `list-versus-calendar.png`
- **Alt text:** `Person comparing an endless paper to-do list with a calendar holding three clear blocks`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, on a soft oatmeal-cream
  background with natural wood tones: a young woman with dark hair in a loose bun,
  seen from a slight three-quarter side angle, sitting at a warm walnut desk,
  mid-glance between two things.

  Foreground left, on the desk: a long strip of cream paper, a handwritten to-do
  list, drawn as evenly spaced wordless pencil-grey squiggle lines with small
  checkbox squares, curling off the front edge of the desk and out of frame at the
  bottom so it visibly has no end.
  Foreground right: a slim laptop or monitor at a slight angle showing a simple
  clean day calendar, a pale cream panel with faint warm-grey hour lines and exactly
  THREE generously spaced filled blocks, one muted sage green, one warm honey, one
  soft teal, with clear empty space above, between, and below them.
  Her posture and eyeline read as comparing the two, head turned toward the screen,
  one hand resting near the paper list.
  Background: mostly empty warm wall in soft light, a single small terracotta pot
  with a bit of greenery far right for warmth, nothing else. Uncluttered, generous
  breathing room, no visual noise.

  Palette: oatmeal cream, natural walnut wood, terracotta, near-black #222222 for
  outlines and small details, sage green / honey / teal #0E9F8E as small accents
  only. Brand blue is NOT the background and NOT the dominant fill. Mood: clean,
  approachable, calm, productive. Flat vector with subtle warm shading, no gradients,
  no photorealism. Small lowercase "olgapak.com" wordmark bottom-left, near-black
  at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no blue-heavy
  objects, no dense calendar grid, no spreadsheet, no wall-to-wall blocks, no
  readable words or numbers anywhere, no garbled lettering, no app UI chrome, no
  browser toolbar, no visible brand logos, no sticky-note wall, no cluttered desk,
  no coffee-shop crowd, no second person, no extra limbs or hands, no distorted
  face, no 3D render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Samples in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none. The three blocks echo the post's "block three things" advice illustratively.
- **Text-in-image warning:** this scene must contain NO legible text at all. The list is wordless squiggles and the calendar blocks are wordless color bars, so nothing here depends on the model rendering letters. If the model adds words anyway, re-run rather than accepting garbled labels.
- **Why this and not remotion/screenshot:** it is a human moment (the glance between list and calendar), not a data-accurate diagram; there is no real screen to capture, and `image-style.md` assigns section scenes to `ai-prompt`.

---

### Image 2, after H3 "Start from your week, not your day" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Side-by-side diagram of two day columns. Left: an over-packed day with blocks wall to wall, no gaps. Right: a 60/20/20 day, 60% blocked, 20% marked "unexpected", 20% left open. Type: remotion. Suggested filename: packed-vs-buffered-day.png]` (draft-v2.md line 72)
- **Type:** `remotion` (as tagged in the draft, correct: this is the post's one genuine diagram and it renders exact percentages as real text)
- **Concept:** Two day columns side by side, the left one packed wall to wall with no gaps, the right one split 60% planned / 20% reserved for the unexpected / 20% left open.
- **Suggested filename:** `packed-vs-buffered-day.png`
- **Alt text:** `Two day columns side by side: one packed wall to wall, one planned 60 percent with buffer`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `PackedVsBufferedDay`
- **Component file:** `tools/remotion/src/PackedVsBufferedDay.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram (only the two section-tag pills sit above the columns). Watermark, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right:
    - Two half-canvas columns inside `SAFE_MARGIN` (120). Left half centered ≈ x 470, right half centered ≈ x 1330. A single full-height 1px `palette.border` vertical divider at x = 900, inset ~60px from the top and bottom of the diagram band.
    - Above each half, a centered section-tag pill (bold, uppercase, generous horizontal padding, ~40px gap to the block stack below it): left pill = `palette.warn` tint background with `palette.warn` text; right pill = `palette.accent` tint background with `palette.accent` text.
    - Each half holds ONE slim vertical day column: a rounded rect (16px radius) of `palette.surface` with `1px solid palette.border`, width ~420px, top y ≈ 300, bottom y ≈ 1040. Hour ticks in `fonts.mono`, `palette.muted`, on the outer side of each column (9a, 11a, 1p, 3p, 5p, 7p).
    - **Left column (packed):** eight abutting blocks filling the column edge to edge with ZERO gaps, each a flat fill in a light `palette.muted` tint with a hairline `palette.border` separator, labels in `fonts.sans` `palette.text` at small size. The visual read is "no white anywhere".
    - **Right column (60/20/20):** three segments stacked with visible gaps.
      - Top 60% of the column height: three planned blocks in a light `palette.accent` tint with `2px solid palette.accent` (this is the one "outcome" emphasis in the composition), separated by ~14px gaps.
      - Next 20%: a band with no fill, `2px dashed palette.muted` border, label inside.
      - Bottom 20%: left visibly empty against `palette.surface`, with a `2px dashed palette.border` outline and a muted label.
    - Percentage figures sit immediately right of the right-hand column in `fonts.mono`, one per segment, vertically centered on their segment.
  - Copy (exact strings to render):
    - Left pill: `PACKED, NO BUFFER`
    - Left column blocks, top to bottom: `Essay`, `Email`, `Reading`, `Errands`, `Lecture`, `Admin`, `Draft section 2`, `Gym`
    - Right pill: `PLANNED 60 / 20 / 20`
    - Right column planned blocks: `Essay`, `Lecture`, `Draft section 2`
    - Right column band 2 label: `unexpected`
    - Right column band 3 label: `open`
    - Right-side mono figures: `60%`, `20%`, `20%`
    - No other text. No em-dash anywhere; no check/cross glyphs as text.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. `palette.accent` used for exactly one role, the right column's planned blocks + its section pill (that column is the answer the diagram argues for). `palette.warn` used only for the left section pill (the failing pattern), never decoratively. The packed column is conveyed with `palette.muted` tints, never with `opacity < 1`.
  - Typography: `fonts.sans` for pills and block labels, `fonts.mono` for hour ticks and the percentage figures, per `blog-ops/profile/image-style.md`.
  - Icons / SVG assets: none needed. `tools/remotion/public/` is empty; do not add an asset for this slot.
  - Arrows / connectors: none. This is a static comparison, not a flow, so no arrows (keeps the accent budget for the outcome column).
  - Card recipe to use: the standard neutral recipe for the two day-column containers; the emphasis/outcome variant (accent tint + `2px solid palette.accent`) for the right column's three planned blocks only.
  - Map every block's y position with a single `yAt(hour)` helper off a fixed grid box, never hand-place pixels (mirror `WeekGridTimeboxing.tsx`'s `xAt`/`yAt` pattern).
- **Source data (if any):** `blog-ops/drafts/time-blocking/facts.md` line 33 — "Try planning 60%, keep 20% for unexpected situations and 20% for spontaneous and social activities", u/NectarineActive5664, r/productivity. The three percentages must match that row exactly. Block labels and hour boundaries are hardcoded illustrative values (acceptable in a diagram context) and are drawn from the draft's own examples so they read as the same day the prose describes.
- **Reference composition to mimic:** `tools/remotion/src/WeekGridTimeboxing.tsx` — an existing in-post calendar-grid composition (fixed grid box, `xAt`/`yAt` helpers, no title, `<BlogWatermark />`, accent-tinted block fills). In-post diagrams may mimic its layout freely; reuse its grid math and block-rendering helpers rather than re-inventing them.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PackedVsBufferedDay --output=out/preview-packed-vs-buffered-day-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-time-blocking` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PackedVsBufferedDay --scale=2 \
    --output="$REPO/blog-ops/assets/time-blocking/packed-vs-buffered-day.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, and the point of the image is three exact percentages rendered as legible text, which Remotion renders exactly by construction while an AI generator cannot be trusted with verbatim numbers.

---

### Image 3, after H2 "Why your time blocks fall apart by 11am (and how to recover)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A day calendar where one long unplanned phone call has swallowed two neat blocks, the following blocks pushed off the visible grid. Type: ai-prompt. Suggested filename: eleven-am-derail.png]` (draft-v2.md line 112)
- **Type:** `ai-prompt` (as tagged in the draft; kept — see Editor notes, this is a conceptual scene with no exact numeric claim)
- **Concept:** A day's plan where one long unplanned call has spilled over two neat blocks and shoved the rest of the day off the bottom of the page.
- **Suggested filename:** `eleven-am-derail.png`
- **Alt text:** `A day plan where one long unplanned phone call has swallowed two scheduled blocks`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration on a warm dusty-clay background with a soft
  cream paper surface: a single day's plan, drawn head-on as a tall cream page with
  faint warm-grey hour lines, tilted a few degrees for a hand-placed feel and
  cropped by the bottom edge of the frame.

  Composition: near the top of the page, two neat, tidy rounded blocks, one muted
  sage green, one warm honey, drawn small and orderly. Starting just below them,
  one long solid block in bright red (#E11D48) runs down the page, visibly OVERLAPPING
  and covering the lower halves of those two neat blocks, and continuing far past
  where they ended, so it reads as one thing that swallowed two. Attached to that
  red block, a small flat phone handset icon and a couple of simple curved ring
  lines, no screen, no app UI. Below the red block, the remaining two or three
  rounded blocks are pushed downward and clipped by the bottom edge of the frame,
  half off the page, so they read as shoved out of the day.
  Foreground lower right, small and secondary: a hand holding a pen hovering,
  paused, not writing. No full room, no desk clutter, no window. Background stays
  a flat warm clay field with generous empty space at the top and left.

  Palette: warm dusty clay ground, cream paper, near-black #222222 for outlines,
  bright red #E11D48 used ONLY for the intruding call block, muted sage green and
  warm honey for the neat blocks, soft teal #0E9F8E as a tiny accent at most.
  Mood: honest and a bit rueful but still calm and approachable, not alarming.
  Flat vector, subtle warm shading, no gradients, no photorealism. Small lowercase
  "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no readable words
  or numbers on the blocks, no clock digits, no garbled lettering, no app UI chrome,
  no smartphone screen, no notification popups, no visible brand logos, no angry or
  distressed face, no fire or explosion metaphor, no red X marks, no cracked glass,
  no cluttered desk, no room interior, no second person, no extra limbs or extra
  fingers, no 3D render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm background hue, brand blue as accent only) and §Annotation conventions for the red-as-problem semantics. Vary the background hue deliberately from Image 1's oatmeal and Image 4's sage.
- **Source data (if any):** none. The 11am derail is narrative, not a data point.
- **Text-in-image warning:** the blocks must stay wordless, no hour labels, no task names, no clock digits. Nothing in this concept depends on exact text, which is why `ai-prompt` is safe here. If the model renders any words, re-run; if a hand-off overlay is ever wanted (e.g. a "11:03" label), add it as a post-processing text layer, never trust the model with it.
- **Why this and not remotion/screenshot:** it is a conceptual, illustrative moment (an overrun spilling over a plan), carrying no exact figures, and it sits in the post's warm flat-vector section-illustration series per `image-style.md`; there is no real screen to capture.

---

### Image 4, after H2 "Who time blocking doesn't suit (and what to do instead)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A task list where items are tagged High, Medium, or Low mental battery instead of clock times, with a small battery icon beside each. Type: ai-prompt. Suggested filename: energy-tagged-tasks.png]` (draft-v2.md line 135)
- **Type:** `ai-prompt` (as tagged in the draft; kept — see Editor notes for the text-legibility caveat)
- **Concept:** A short task list where each item carries a battery icon at high, half, or low charge instead of a clock time, showing the energy-based alternative to the grid.
- **Suggested filename:** `energy-tagged-tasks.png`
- **Alt text:** `Task list tagged by mental battery level, full to low, instead of clock times`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration on a warm muted sage-green background with a
  cream paper card: a single simple task list, seen head-on, filling the middle of
  the frame with generous empty margins around it.

  Composition: a cream rounded card, slightly tilted, holding five list rows stacked
  with roomy spacing. Each row = a small rounded checkbox on the left, a wordless
  pencil-grey squiggle line standing in for the task text, and on the RIGHT a small
  flat horizontal battery icon. The battery charge levels vary clearly down the list:
  row 1 nearly full charge filled soft teal #0E9F8E, row 2 nearly full teal, row 3
  half charge filled warm honey, row 4 half honey, row 5 low charge filled muted
  warm grey. Crucially there are NO clock times and NO hour grid anywhere on the
  card, the batteries have replaced them.
  Background: flat sage field, generous empty space, one small terracotta pot with a
  little greenery in a far corner and a single warm wooden pencil resting beside the
  card. Nothing else, uncluttered.

  Palette: muted sage green ground, cream paper, warm walnut pencil, terracotta
  accent, near-black #222222 outlines, soft teal #0E9F8E and warm honey as the battery
  fills. Brand blue is NOT the background and NOT the dominant fill. Mood: clean,
  approachable, calm, kind. Flat vector, subtle warm shading, no gradients, no
  photorealism. Small lowercase "olgapak.com" wordmark bottom-left, near-black at
  about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no clock face, no
  hour grid, no calendar grid, no readable words or numbers on the list rows, no
  garbled lettering, no app UI chrome, no phone or laptop screen, no visible brand
  logos, no lightning-bolt or emoji icons, no percentage digits inside the batteries,
  no cluttered desk, no room interior, no person, no hands, no extra limbs, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, wood-toned `finished-notebooks-shelf` reference; avoid the cold blue of `student-desk-spiral`). Battery-fill semantics follow §Annotation conventions' accent color.
- **Source data (if any):** the concept paraphrases u/Lost_Count7949's "Energy Slices" (High / Medium / Low mental battery), cited in the draft at line 146 and in `facts.md`'s voice-of-customer section. No figures are rendered.
- **Text-in-image warning:** the prompt deliberately encodes High / Medium / Low as **battery charge levels, not words**, precisely because AI-rendered labels are unreliable and the prose right beside the image already names the three tiers. Do NOT ask the model for the words "High", "Medium", "Low". If a reviewer decides the image genuinely needs those three labels rendered legibly, that flips the slot to `remotion` (real text, exact by construction) rather than a re-roll, see Editor notes.
- **Why this and not remotion/screenshot:** with the tiers conveyed as battery levels rather than verbatim words, this is an illustrative scene in the post's warm flat-vector series, not a data-accurate diagram; there is no screen to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/time-blocking/
├── featured.png
├── list-versus-calendar.png
├── packed-vs-buffered-day.png
├── eleven-am-derail.png
└── energy-tagged-tasks.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register the `<Still>` in `src/Root.tsx`, write the component in `src/PackedVsBufferedDay.tsx`, iterate via `npx remotion still` into `out/` (throwaway), final export at `--scale=2` into `blog-ops/assets/time-blocking/`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Four slots here (featured + Images 1, 3, 4).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `<BlogWatermark />` for the Remotion slot; for the `ai-prompt` slots the wordmark is requested in-prompt and can be added post-hoc if a render drops it. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `packed-vs-buffered-day.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (Stage 4a.5 auto-renders the Remotion slot and dispatches the four `ai-prompt` slots to codex).
2. Save to `blog-ops/assets/time-blocking/` using the suggested filenames verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Counts match.** Draft `[IMAGE:]` placeholders = 4 (lines 27, 72, 112, 135); outline's in-post slots = 4. Featured is frontmatter-only, per the outline. No delta.
- **No type changes.** All four draft-tagged types were kept as the writer placed them: three `ai-prompt` scenes and one `remotion` diagram. Nothing was mistyped, the only slot whose whole point is exact numbers (60/20/20) is already `remotion`, and the three scenes carry no verbatim-text dependency.
- **Featured concept simplified (not retyped).** The outline's "a day's calendar blocked out with deliberate empty gaps" was drifting toward a literal full calendar grid, which would have (a) read as an infographic rather than a cover and (b) overlapped in-post Image 2's right-hand column. It is kept in spirit but reduced to the `negative-space` archetype: one slim off-center day column with three blocks and a mostly empty canvas. Rejected alternatives and why are recorded in §Featured image.
- **Archetype rotation:** `negative-space` chosen. The ledger (`blog-ops/featured-log.md`) has one prior row, `how-to-plan-your-week` = `scene-vignette`, so `scene-vignette` was off limits; `split-contrast` was additionally ruled out because it would duplicate in-post Image 2. Row appended to the ledger for this slug.
- **Table-redundancy check: passed.** The draft's only markdown table (lines 49–54, the blocking/timeboxing/batching/theming comparison) sits 18 lines above the Image 2 placeholder, inside the ±20-line window, but its content is entirely different from the packed-vs-60/20/20 day chart. The chart is not a duplicate of it, and per the outline H2 2 deliberately carries no image of its own.
- **Featured-duplication check: passed.** No placeholder uses `featured.png`, and no in-post concept matches the (now simplified) cover.
- **Judgment call worth an override look, Image 4.** The draft asks for items "tagged High, Medium, or Low mental battery". I spec it as battery *charge levels* rather than the three words, because AI-rendered labels are unreliable and the surrounding prose already names the tiers. If a reviewer wants those three words rendered legibly in-image, the right move is to convert Image 4 to `remotion` (real text, exact by construction) rather than re-roll the prompt, and to reference `tools/remotion/src/WeekGridTimeboxing.tsx` for the card/list language.
- **No slot needs fresh data.** The one data-bearing image (Image 2) is fully grounded in `facts.md` line 33. Nothing is flagged "needs fresh data before generation".
- **Hue variation across the set (per `image-style.md` §Illustration palette):** featured = warm terracotta/clay, Image 1 = oatmeal cream + walnut, Image 3 = dusty clay, Image 4 = muted sage. Deliberately no blue-dominant scene anywhere; brand blue and teal appear as accents only. Image 3 is the only slot using `warn` red, and only for the intruding call block.
- **Do not edit the draft.** The `[IMAGE:]` placeholders stay exactly as written; the publish adapter's staging step swaps them for real Markdown image syntax.
