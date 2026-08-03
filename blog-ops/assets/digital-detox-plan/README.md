# Images: digital-detox-plan

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/digital-detox-plan/outline.md` (image placement plan), `blog-ops/drafts/digital-detox-plan/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/digital-detox-plan/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/digital-detox-plan/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/digital-detox-plan/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the dial and the character inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither the title nor the focal object.
- **Concept:** One oversized flat-vector dial with seven notches, its pointer eased a few notches down from loud toward calm (never to "off"), with the recurring female character standing small beside it, one hand resting on the knob.
- **Archetype:** `object-metaphor` — one oversized central object carrying the post's thesis, no cards, no flow, no panels. It fits because the whole post argues *turn it down in steps, don't switch it off*: a dial with seven notches says "seven graded changes, still on" in a single glance, stays legible as a thumbnail, and is non-shaming by construction (nothing is crossed out, nothing is switched off). The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (`blog-ops/featured-log.md`): the last two rows are `how-to-plan-your-week` = `scene-vignette` and `time-blocking` = `negative-space`, so **both are OFF LIMITS**. No prior row exists for this slug. That ruling also kills the outline's own featured suggestion ("a person setting a phone face-down and reaching for something offline"), which is a textbook `scene-vignette` and would additionally sit far too close to the published `how-to-stop-doomscrolling` cover (a woman on a sofa with a phone). Rethought from scratch, per §Featured-slot archetype.
  - **Alternatives considered and rejected:**
    - `big-number` (a giant "7" carrying the canvas) — rejected, the verbatim title band already reads "7 Days to Reset Your Screen Time", so a huge numeral would fight the title typographically and say the same word twice.
    - `split-contrast` (cold-turkey cliff vs. gentle ramp) — rejected, that is precisely in-post Image 1 (the Remotion seven-day ramp); the cover would duplicate a body image.
    - `pattern-break` (seven tiles, one accent-colored) — rejected, "one tile is different" reads as *one special day*, which inverts the post's actual claim that every day carries one change.
    - `diagram-lite` — rejected on the skill's own guidance: the concept needs no flow, and a card-and-arrow cover would again echo the in-post ramp.
- **Suggested filename:** `featured.png`
- **Alt text:** `An oversized dial with seven notches turned down a few steps instead of switched off`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat sunlit marigold / warm amber field (NOT blue, NOT navy, NOT
  terracotta) filling the whole canvas, with generous empty space.

  Composition (object-metaphor archetype: ONE oversized central object, no panels, no
  cards, no charts, no arrows, no flow): a single large round dial or volume knob,
  drawn head-on and slightly oversized, centered in the lower two thirds of the canvas.
  The dial face is flat cream paper white with a hairline warm-grey edge and a soft
  ground shadow beneath it. Around its rim, exactly SEVEN evenly spaced notch marks in
  near-black, arranged as an arc from upper-left round to upper-right, each notch a
  simple short tick, no numbers, no words. A short chunky pointer sits a few notches
  along from the loud end, resting clearly in the middle of the arc, nowhere near
  either extreme: the dial is turned DOWN, not off. The one notch the pointer rests on
  is filled soft teal (#0E9F8E); the rest stay near-black. A small warm walnut wooden
  knob cap sits at the dial's center for a tactile, hand-made feel.

  Second, much smaller focal element: the recurring friendly young woman with dark hair
  in a loose bun and a mustard sweater (the same character as prior olgapak.com covers),
  drawn small, standing on the flat ground plane to the lower left of the dial, calm and
  faintly pleased, one hand resting on the dial's rim as if she has just eased it down.
  A single small terracotta pot with a little greenery beside her feet. Nothing else on
  the canvas: no room, no furniture, no desk, no phone, no screens, no icons.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the dial begins, two lines, VERBATIM text:
  line 1, "Digital Detox Plan:" in a playful hand-lettered brush script, with the single
  word "Detox" in bright red (#E11D48) and "Digital", "Plan" and the colon in near-black
  (#222222);
  line 2, "7 Days to Reset Your Screen Time" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: bright marigold / warm amber ground, cream paper white, warm walnut wood,
  terracotta, near-black #222222 text and outlines, one red accent word #E11D48, soft
  teal #0E9F8E used only on the single active notch. Mood: clean, approachable,
  confident, calm, optimistic, never scolding. Flat vector, crisp shapes, subtle warm
  shading, no gradients beyond a hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no night scene, no
  sofa, no smartphone, no phone screen, no crossed-out phone, no red prohibition sign,
  no no-entry symbol, no broken or cracked screen, no chains, no handcuffs, no padlock,
  no addiction imagery, no scolding or shaming cues, no sad or guilty face, no power
  switch in the off position, no numbered callouts or badges, no infographic panels, no
  cards, no arrows, no charts, no calendar grid, no clock face, no notification icons,
  no app icons, no social media logos, no stray brand marks, no garbled or misspelled
  lettering, no extra words beyond the title and the wordmark, no lorem ipsum, no
  duplicated watermark, no extra limbs or fingers, no distorted face, no 3D render, no
  stock-photo realism, no heavy drop shadows on text, no busy texture, no cluttered
  background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, recurring female character, bright saturated single-color ground). Prior covers for tonal family, deliberately NOT for composition or hue: `blog-ops/assets/time-blocking/featured.png` (`negative-space`, terracotta) and `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (a navy night sofa scene, the closest topical neighbour, which this cover must not resemble).
- **Source data (if any):** none. The seven notches echo the post's seven days illustratively; no figure is rendered.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:` — `Digital Detox Plan: 7 Days to Reset Your Screen Time` — including the colon and the numeral 7. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The dial's notches must stay wordless and unnumbered; do NOT let the model label them.
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

### Image 1, after H2 "The 7-day digital detox plan" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A stepped ramp diagram of the seven days, Day 1 through Day 7 rising left to right, each step labelled with its single change (phone out of the bedroom, notifications off, phone made boring, one phone-free block, one focus block, half-day offline, full offline stretch). Type: remotion. Suggested filename: seven-day-ramp-diagram.png]` (draft-v2.md line 58)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: this is the post's one genuine diagram, and every step must render its exact day label as legible text)
- **Concept:** Seven risers climbing left to right, one per day, each labelled with that day's single change, so the week reads as a gentle ramp rather than a cliff.
- **Suggested filename:** `seven-day-ramp-diagram.png`
- **Alt text:** `Seven rising steps, one per day, each labelled with that day's single detox change`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `SevenDayRampDiagram`
- **Component file:** `tools/remotion/src/SevenDayRampDiagram.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2`.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. Watermark, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, left to right (derive every coordinate from these constants with two pure helpers, `xAt(i)` and `heightAt(i)`, never hand-place a pixel; mirror the constant-block style of `PackedVsBufferedDay.tsx`):
    - `STEP_W = 194`, `STEP_GAP = 32`, seven steps → total width `7 × 194 + 6 × 32 = 1550`, centered: `LEFT_X = 125` (inside `SAFE_MARGIN = 120`). `xAt(i) = LEFT_X + i * (STEP_W + STEP_GAP)`.
    - `BASELINE_Y = 1030`. All risers sit ON this baseline; a single 1px `palette.border` horizontal rule runs from x 125 to x 1675 at `BASELINE_Y`. Clearance to the watermark (~y 1100) is ~70px, nothing may cross it.
    - `heightAt(i) = 150 + i * 62` → 150, 212, 274, 336, 398, 460, 522. Riser top = `BASELINE_Y - heightAt(i)` → 880, 818, 756, 694, 632, 570, 508. The staircase rises evenly left to right, so the whole shape reads as a ramp.
    - Each riser is a rounded rect (16px radius) sitting on the baseline, width `STEP_W`.
    - **Day pill:** inside each riser, horizontally centered, 28px below its top edge, `fonts.mono`, 26px, bold, letter-spaced, `palette.text` (on step 7: `palette.accent`).
    - **Change label:** a fixed 110px-high, `STEP_W`-wide text box whose BOTTOM edge sits 26px above that riser's top edge, so the labels climb with the steps. Text centered, `fonts.sans`, 26px, weight 600, `palette.text`, line-height 1.25, wraps to at most 3 lines. Highest label top ≈ y 384, well clear of the top safe margin.
    - No element may overlap another: label boxes never touch their riser, risers never touch each other (32px gap), nothing touches the watermark.
  - Copy (exact strings to render, nothing else on the canvas):
    - Step 1: pill `DAY 1`, label `Phone sleeps outside the bedroom`
    - Step 2: pill `DAY 2`, label `Notifications off, except people`
    - Step 3: pill `DAY 3`, label `Make the phone boring`
    - Step 4: pill `DAY 4`, label `One phone-free block`
    - Step 5: pill `DAY 5`, label `One protected focus block`
    - Step 6: pill `DAY 6`, label `A half-day offline`
    - Step 7: pill `DAY 7`, label `One full offline stretch`
    - No em-dash anywhere; no check/cross glyphs as text; no numbers beyond the day pills.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. Steps 1 to 6 use the **standard neutral card recipe** (`palette.surface`, `1px solid palette.border`, 16px radius, `cardShadow`). Step 7 uses the **emphasis/outcome variant** exactly once (light `palette.accent` tint background, `2px solid palette.accent`), because day 7 is where the week lands. `palette.warn` is NOT used anywhere in this composition: the post is deliberately non-shaming and nothing here is a failure state. Never dim a step with `opacity < 1`.
  - Typography: `fonts.mono` for the `DAY N` pills (they read as data), `fonts.sans` for the change labels, per `blog-ops/profile/image-style.md`.
  - Icons / SVG assets: none. `tools/remotion/public/` holds nothing needed here; do not add an asset for this slot.
  - Arrows / connectors: **none.** The rising staircase already carries the sequence, and the accent budget is spent on step 7. Do not add a flow arrow along the baseline.
  - Card recipe to use: neutral recipe for steps 1 to 6, emphasis/outcome variant for step 7 only.
- **Source data (if any):** the seven labels are this post's own day headings (draft-v2.md lines 62, 70, 78, 92, 102, 112, 120), shortened for the diagram without changing meaning; treat them as hardcoded illustrative copy, acceptable in a diagram context. The ramp *shape* is supported by `blog-ops/drafts/digital-detox-plan/facts.md` line 53 (Tanya Goodin's published 7-day ramp, The Guardian) and line 37 (the "going cold turkey is daunting, so the week eases you in gently" quote). **No fresh data needed.**
- **Reference composition to mimic:** `tools/remotion/src/PackedVsBufferedDay.tsx` — the closest existing in-post composition (fixed constant block, pure position helpers, no title, `<BlogWatermark />`, one accent-tinted emphasis element, neutral card recipe elsewhere). Reuse its constants-then-helpers structure and its card styling rather than re-inventing them. `tools/remotion/src/DoomscrollLoopDiagram.tsx` is a secondary reference for label-inside-card typography.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still SevenDayRampDiagram --output=out/preview-seven-day-ramp-diagram-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` derived dynamically so this works inside the `blog-digital-detox-plan` worktree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still SevenDayRampDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/digital-detox-plan/seven-day-ramp-diagram.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, and the entire point of the image is seven exact day labels rendered as legible text, which Remotion renders exactly by construction while an AI generator cannot be trusted with verbatim wording.

---

### Image 2, after H3 "Day 4: One phone-free block, with something waiting in it" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A warm scene of a phone-free block, a table set for a meal in natural wood and warm afternoon light, the phone left face-down on a shelf across the room, brand blue only as a small accent. Type: ai-prompt. Suggested filename: phone-free-block-scene.png]` (draft-v2.md line 96)
- **Type:** `ai-prompt` (as tagged in the draft, correct: a warm human scene, no exact text or figures)
- **Concept:** A wooden table set for a meal in warm afternoon light with something already waiting on it, while the phone rests face-down on a shelf across the room.
- **Suggested filename:** `phone-free-block-scene.png`
- **Alt text:** `A wooden table set for a meal in warm light, phone left face-down on a far shelf`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, on a soft oatmeal-cream
  background with natural walnut wood tones and low golden afternoon light raking in
  from the right.

  Composition: a solid wooden table seen from a gentle three-quarter angle in the
  foreground, set for one unhurried meal, a simple ceramic bowl of food, a cream plate,
  a warm honey-glazed mug, a folded linen napkin, and an open paperback resting
  face-up beside the plate so the block visibly has something waiting in it. The
  recurring friendly young woman with dark hair in a loose bun and a mustard sweater
  (the same character as prior olgapak.com illustrations) sits at the far side of the
  table, relaxed, mid-reach for the mug, looking down at the book, calm and content.
  Middle distance behind her, a plain walnut wall shelf holding a smartphone lying flat
  and FACE-DOWN, screen hidden, dark and quiet, small and unremarkable in the frame,
  clearly across the room and not being reached for. Beside it on the shelf, a single
  terracotta pot with a little trailing greenery. Background stays a warm empty cream
  wall with a soft pool of afternoon light, nothing else, generous breathing room.

  Palette: oatmeal cream, natural walnut wood, terracotta, warm honey, near-black
  #222222 for outlines and small details, soft teal #0E9F8E and brand blue #2B6CB0 used
  ONLY as tiny accents (a mug rim, a book spine). Brand blue is NOT the background and
  NOT the dominant fill. Mood: calm, warm, inviting, ordinary, never scolding. Flat
  vector with subtle warm shading, no gradients, no photorealism. Small lowercase
  "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no blue-heavy
  objects, no night scene, no glowing phone screen, no visible phone screen at all, no
  crossed-out phone, no red prohibition sign, no no-entry symbol, no notification icons,
  no app icons, no social media logos, no readable words or numbers anywhere, no garbled
  lettering, no app UI chrome, no browser toolbar, no TV or laptop, no cluttered table,
  no restaurant crowd, no second diner, no extra limbs or extra fingers, no distorted
  face, no 3D render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Samples in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none. Day 4 in the draft is advice, not a figure.
- **Text-in-image warning:** this scene must contain NO legible text at all. The open book shows wordless pencil-grey lines, not readable type. Nothing here depends on the model rendering letters; if it adds words anyway, re-run rather than accepting garbled labels.
- **Why this and not remotion/screenshot:** it is a human moment (a meal with the phone left behind), not a data-accurate diagram; there is no real screen to capture, and `image-style.md` assigns section scenes to `ai-prompt`.

---

### Image 3, after H2 "What to do when you slip (because you will)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A calm, non-judgmental moment of someone catching themselves mid-scroll on the sofa and setting the phone down without drama, warm light, no guilt cues. Type: ai-prompt. Suggested filename: slip-recovery-moment.png]` (draft-v2.md line 132)
- **Type:** `ai-prompt` (as tagged in the draft, correct: an emotional beat, no exact text or figures)
- **Concept:** Someone on a sofa noticing they have drifted into a scroll and calmly setting the phone face-down beside them, unbothered, in warm daylight.
- **Suggested filename:** `slip-recovery-moment.png`
- **Alt text:** `Person on a sofa calmly setting a phone face-down after catching themselves scrolling`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration on a warm dusty-rose / soft clay background in
  bright late-afternoon daylight (definitely a DAY scene, not an evening one).

  Composition: the recurring friendly young woman with dark hair in a loose bun and a
  cream knit sweater (the same character as prior olgapak.com illustrations) sits
  sideways on a warm terracotta sofa, seen from a three-quarter angle, mid-motion:
  her arm is extended and she is laying a small smartphone FACE-DOWN on the cushion
  beside her, screen hidden, hand already relaxing off it. Her expression is calm and
  mildly amused, a small self-aware half-smile, eyes lifting away from the phone toward
  the light, shoulders loose. No frown, no wince, no guilt. Beside her on a small
  walnut side table, a warm honey mug and one small terracotta pot with greenery. A
  single soft rectangle of daylight falls across the sofa from a window implied off
  frame at the right. Background stays a flat dusty-rose wall with generous empty space,
  no shelves, no pictures, no clutter.

  Palette: dusty rose and soft clay ground, terracotta sofa, cream knit, warm walnut,
  honey, near-black #222222 for outlines, soft teal #0E9F8E as a tiny accent (the mug or
  the pot) and brand blue #2B6CB0 at most as a small detail. Brand blue is NOT the
  background and NOT the dominant fill. Mood: gentle, forgiving, matter-of-fact, calm,
  absolutely non-judgmental. Flat vector with subtle warm shading, no gradients, no
  photorealism. Small lowercase "olgapak.com" wordmark bottom-left, near-black at about
  55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no dark night room,
  no glowing phone screen, no visible phone screen content, no swirl or stream of app
  icons, no notification icons, no social media logos, no crossed-out phone, no red
  prohibition sign, no no-entry symbol, no chains, no handcuffs, no zombie or addict
  imagery, no sad crying or ashamed face, no head in hands, no clock shaming, no red
  warning marks, no readable words or numbers anywhere, no garbled lettering, no app UI
  chrome, no second person, no extra limbs or extra fingers, no distorted face, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm background hue, brand blue as accent only). Deliberately contrast with `blog-ops/assets/how-to-stop-doomscrolling/featured.png`, the published navy night sofa scene with an app-icon swirl: same character and same furniture family, but a bright warm daytime scene with no icons, because this image is about the calm recovery, not the scroll.
- **Source data (if any):** none. The slip-recovery rule in this section is behavioural advice, not a figure.
- **Text-in-image warning:** the scene must carry no legible text. The phone is face-down precisely so no UI or copy is ever rendered. If the model produces words or a visible screen, re-run.
- **Why this and not remotion/screenshot:** it is a human emotional beat with no exact figures, sitting in the post's warm flat-vector section-illustration series per `image-style.md`; there is nothing to capture.

---

### Image 4, after H2 "Day 8 and beyond: the rules that keep it" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: An ordinary, calm maintenance scene, two people on a standing phone-free day, a shared breakfast table with a book and coffee and no screens in sight, warm and unremarkable. Type: ai-prompt. Suggested filename: no-phone-day-maintenance.png]` (draft-v2.md line 148)
- **Type:** `ai-prompt` (as tagged in the draft, correct: a scene, not a diagram)
- **Concept:** Two people sharing an unremarkable slow breakfast on their standing phone-free day, a book and coffee on the table and not a screen in sight.
- **Suggested filename:** `no-phone-day-maintenance.png`
- **Alt text:** `Two people sharing a slow breakfast with a book and coffee and no screens in sight`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration on a muted sage-green background with soft, clear
  morning light and natural oak wood tones.

  Composition: a round oak breakfast table seen from a slight three-quarter angle,
  filling the lower middle of the frame, with two people seated across from each other,
  relaxed and mid-conversation. On the left, the recurring friendly young woman with
  dark hair in a loose bun and a mustard sweater (the same character as prior
  olgapak.com illustrations), one hand around a cream mug, an open paperback resting
  beside her. On the right, a second adult in a soft oatmeal shirt, short dark hair,
  buttering toast, looking toward her. Between them: a small cafetiere, a plate of
  fruit, a little jug of milk, and a small terracotta pot with greenery. Deliberately
  ordinary and unremarkable, an easy Sunday, nothing staged. Absolutely NO screens
  anywhere in frame, no phone, no tablet, no laptop, no television, and no empty
  charging dock or phone-shaped absence being pointed at. Background stays a flat sage
  wall with a soft window glow at the far right and generous empty space.

  Palette: muted sage green ground, natural oak wood, cream, oatmeal, mustard,
  terracotta, near-black #222222 for outlines, soft teal #0E9F8E and brand blue #2B6CB0
  only as tiny accents (a mug stripe, a book spine). Brand blue is NOT the background
  and NOT the dominant fill. Mood: calm, warm, companionable, quietly ordinary. Flat
  vector with subtle warm shading, no gradients, no photorealism. Small lowercase
  "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no phone, no tablet,
  no laptop, no television, no smartwatch, no screens of any kind, no crossed-out phone,
  no red prohibition sign, no no-entry symbol, no calendar or checklist on the wall, no
  readable words or numbers anywhere, no garbled lettering, no app UI chrome, no visible
  brand logos, no restaurant crowd, no third person, no children, no pets crowding the
  frame, no cluttered table, no extra limbs or extra fingers, no distorted faces, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, wood-toned `finished-notebooks-shelf` reference; avoid the cold blue of `student-desk-spiral`). Hue deliberately varied from Image 2's oatmeal and Image 3's dusty rose.
- **Source data (if any):** the concept paraphrases the r/nosurf commenter's "no-phone Sundays with their partner", cited in the draft at line 153 and in `facts.md`'s voice-of-customer section. No figures are rendered.
- **Text-in-image warning:** no legible text anywhere. The paperback shows wordless pencil-grey lines. If the model renders words, re-run rather than accepting garbled type.
- **Why this and not remotion/screenshot:** an ordinary domestic moment is an illustration job, not a diagram or a capture; it belongs to the post's warm flat-vector section-illustration series per `image-style.md`.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/digital-detox-plan/
├── featured.png
├── seven-day-ramp-diagram.png
├── phone-free-block-scene.png
├── slip-recovery-moment.png
└── no-phone-day-maintenance.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register the `<Still>` in `src/Root.tsx`, write the component in `src/SevenDayRampDiagram.tsx`, iterate via `npx remotion still` into `out/` (throwaway), final export at `--scale=2` into `blog-ops/assets/digital-detox-plan/`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`. One slot here (Image 1).
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Four slots here (featured + Images 2, 3, 4).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `<BlogWatermark />` for the Remotion slot; for the `ai-prompt` slots the wordmark is requested in-prompt and can be added post-hoc if a render drops it. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `seven-day-ramp-diagram.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (Stage 4a.5 auto-renders the Remotion slot and dispatches the four `ai-prompt` slots to codex).
2. Save to `blog-ops/assets/digital-detox-plan/` using the suggested filenames verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Counts match.** Draft `[IMAGE:]` placeholders = 4 (draft-v2.md lines 58, 96, 132, 148); the outline's §Image placement plan lists the same 4 in-post slots plus the frontmatter-only featured. No delta, and the draft-tagged types match the outline's types one for one.
- **No type changes.** All four writer-placed types were kept: one `remotion` diagram (the only slot in the post whose whole point is exact rendered wording) and three `ai-prompt` scenes. Priority-ladder check: no `screenshot` slot exists or is warranted (there is no external surface the post needs to show, and this blog's own UI is not in play); no `ai-prompt` slot carries a verbatim-text or numeric dependency that should have gone to `remotion`.
- **Featured concept rebuilt, not just retyped.** The outline's featured suggestion ("a person setting a phone face-down and reaching for something offline") is a `scene-vignette`, which the ledger blocks, and it would have overlapped both in-post Image 3 and the published `how-to-stop-doomscrolling` cover. Replaced with an `object-metaphor` (a seven-notch dial eased down, not switched off), which says the whole post's thesis in one glance and stays thumbnail-legible. Rejected alternatives are recorded in §Featured image.
- **Archetype rotation:** `object-metaphor` chosen. Ledger (`blog-ops/featured-log.md`) blocked `scene-vignette` (how-to-plan-your-week) and `negative-space` (time-blocking); `split-contrast`, `big-number`, `pattern-break` and `diagram-lite` were available but rejected on fit, see §Featured image. Row appended to the ledger for this slug.
- **Featured-duplication check: passed.** No placeholder uses `featured.png`, and no in-post concept matches the cover.
- **Table-redundancy check: not applicable.** The draft contains no markdown tables at all, so the one chart-style slot (Image 1) cannot duplicate one.
- **No slot needs fresh data.** Image 1's ramp shape is supported by `facts.md` lines 37 and 53; its seven labels are the post's own day headings. Nothing is flagged "needs fresh data before generation".
- **Tone constraint enforced across every prompt** (carried from the brief, this post is deliberately non-shaming): every negative prompt bans crossed-out phones, prohibition/no-entry symbols, chains, addiction or zombie imagery, and guilty or ashamed faces. Image 1 deliberately uses NO `palette.warn` red, since no day in this plan is a failure state. Reviewers should treat any shaming cue in a render as a re-run, not a nitpick.
- **Hue variation across the set (per `image-style.md` §Illustration palette):** featured = bright marigold/amber (the one saturated single-color ground), Image 1 = neutral `palette.background` #F7F7F7 (Remotion), Image 2 = oatmeal cream + walnut, Image 3 = dusty rose/clay, Image 4 = muted sage. No blue-dominant scene anywhere; brand blue `#2B6CB0` and teal `#0E9F8E` appear only as small accent details.
- **Judgment call worth an override look, Image 3.** This post's neighbour, `how-to-stop-doomscrolling`, already owns a sofa-plus-phone scene (its featured image, navy night, app-icon swirl). Image 3 keeps the sofa because the draft placeholder asks for it, but the spec forces a bright warm daytime treatment with no icons so the two do not read as the same picture. If a reviewer still finds them too close, the cleanest fix is moving Image 3 off the sofa (a kitchen counter or a park bench), not changing its type.
- **Do not edit the draft.** The `[IMAGE:]` placeholders stay exactly as written; the publish adapter's staging step swaps them for real Markdown image syntax.
