# Images: how-to-reduce-screen-time

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/how-to-reduce-screen-time/outline.md` (image placement plan), `blog-ops/drafts/how-to-reduce-screen-time/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/how-to-reduce-screen-time/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/how-to-reduce-screen-time/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `4` (1 featured + 3 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `3`
  - Screenshots: `0` (Image 2 was planned as a screenshot and is **dropped from this post**, see its entry below)
- File destination: `blog-ops/assets/how-to-reduce-screen-time/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and independently locked by `blog-ops/profile/custom-instructions.md` §Image style, which forbids overriding the featured slot to `remotion` or anything else. Not a judgment call; do not change it.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title band and the whole hourglass grid inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither.
- **Concept:** A tidy grid of identical upright hourglasses, all calm and intact, with exactly one tipped on its side and quietly spilling its sand, while the recurring female character crouches beside it to set that one back upright.
- **Archetype:** `pattern-break` — a repeated motif grid where exactly one element differs, and the anomaly is the message. It fits because this post's whole thesis is that your hours are not all the same: most of them are fine and stay untouched, one pile is leaking, and the guide is only about that pile. A grid of identical hourglasses with one tipped says that in a single glance, needs no callouts or labels, and stays legible as a thumbnail. It is also non-shaming by construction: nothing is crossed out, nothing is switched off, and the anomaly is being fixed rather than scolded. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check: `blog-ops/featured-log/` does not exist yet, so the rotation history is the legacy `blog-ops/featured-log.md` alone (READ-ONLY). Sorted ascending, its last two rows are `charting-method-note-taking` = `object-metaphor` and `digital-detox-plan` = `object-metaphor`, so **`object-metaphor` is OFF LIMITS**. No prior row exists for this slug, so nothing of this post's own is being churned away.
  - **Alternatives considered and rejected:**
    - `split-contrast` (chosen hours vs. leaked hours as two panels) — the most literal read of the thesis, and rejected precisely for that: it is exactly in-post Image 1 (the Remotion two-piles diagram), so the cover would duplicate a body image.
    - `scene-vignette` (the outline's own suggestion: a person setting the phone face-down and picking the evening back up) — rejected on two counts. It is the same picture as the published `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (a woman, a sofa, a phone), which is this post's closest cluster sibling, and it also overlaps in-post Images 3 and 4, which are already warm person-and-phone scenes.
    - `big-number` (a giant "2 hours") — rejected on accuracy, not composition. The only headline number in the post is the NIH two-hour figure, and H2 7 spends its whole length defusing it ("not this month's target"). Putting it on the cover would advertise the one claim the post argues against.
    - `object-metaphor` — ledger-blocked (used by the last two posts, including the sibling `digital-detox-plan` dial).
    - `diagram-lite` — rejected on the skill's own guidance: this thesis has no flow, and a card-and-arrow cover would echo the in-post diagram again.
    - `negative-space` (one small tipped hourglass alone on an empty canvas) — a near miss, but it loses the plural "most of your hours are fine" half of the thesis, which is the part that makes this post different from every other screen-time guide. It was also the `time-blocking` cover's archetype.
- **Suggested filename:** `featured.png`
- **Alt text:** `A grid of upright hourglasses with one tipped over and spilling, being set back upright`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated background:
  a flat leafy sage-green field (a warm, slightly yellow-leaning green, NOT blue, NOT
  navy, NOT teal, NOT marigold, NOT terracotta) filling the whole canvas, with generous
  empty space.

  Composition (pattern-break archetype: ONE repeated motif in a tidy grid where exactly
  one element differs, no panels, no cards, no charts, no arrows, no flow, no numbered
  callouts): eight identical small hourglasses arranged in a neat, evenly spaced grid of
  four columns by two rows, occupying the lower two thirds of the canvas, all drawn
  head-on at the same size and the same angle. Each hourglass has a flat cream-white
  frame with warm walnut wooden caps top and bottom and warm amber sand inside, upright,
  intact, calm, each with a soft ground shadow beneath it. Exactly ONE hourglass differs,
  the third one along the bottom row: it lies tipped over on its side, its wooden cap
  loose, and a small quiet stream of sand has spilled out of it into a soft teal (#0E9F8E)
  puddle on the ground. That tipped hourglass and its teal spill are the only accent color
  in the scene; every other hourglass stays cream, walnut and amber.

  Second, much smaller focal element: the recurring friendly young woman with dark hair in
  a loose bun and a mustard sweater (the same character as prior olgapak.com covers),
  drawn small, crouching on the flat ground plane to the left of the tipped hourglass,
  calm and faintly pleased, one hand reaching out to set that single hourglass back
  upright. She is not upset and not hurrying. A single small terracotta pot with a little
  greenery beside her. Nothing else on the canvas: no room, no furniture, no desk, no
  phone, no screens, no icons, no clocks.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the grid begins, two lines, VERBATIM text:
  line 1, "How to Reduce Screen Time:" in a playful hand-lettered brush script, with the
  single word "Reduce" in bright red (#E11D48) and "How to", "Screen Time" and the colon
  in near-black (#222222);
  line 2, "A Guide That Actually Holds" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: leafy sage green ground, cream paper white, warm walnut wood, warm amber sand,
  terracotta, near-black #222222 text and outlines, one red accent word #E11D48, soft teal
  #0E9F8E used only on the single spilled hourglass. Mood: clean, approachable, confident,
  calm, optimistic, never scolding. Flat vector, crisp shapes, subtle warm shading, no
  gradients beyond a hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no marigold or orange
  background, no night scene, no smartphone, no phone screen, no laptop, no app icons, no
  notification icons, no social media logos, no crossed-out phone, no red prohibition sign,
  no no-entry symbol, no broken glass, no shattered hourglass, no chains, no handcuffs, no
  padlock, no addiction imagery, no scolding or shaming cues, no sad or guilty or panicked
  face, no clock faces, no calendar grid, no numbered callouts or badges, no infographic
  panels, no cards, no arrows, no charts, no more than one tipped hourglass, no garbled or
  misspelled lettering, no extra words beyond the title and the wordmark, no lorem ipsum,
  no duplicated watermark, no extra limbs or fingers, no distorted face, no 3D render, no
  stock-photo realism, no heavy drop shadows on text, no busy texture, no cluttered
  background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, recurring female character, bright saturated single-color ground). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/digital-detox-plan/featured.png` (marigold `object-metaphor` dial, the nearest sibling, which this cover must not resemble), `blog-ops/assets/charting-method-note-taking/featured.png` (marigold again, so avoid that ground), `blog-ops/assets/time-blocking/featured.png` (terracotta), `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (navy night sofa scene, the topical neighbour this cover must not echo).
- **Source data (if any):** none. The eight hourglasses are illustrative, not a count of anything in `facts.md`; no figure is rendered.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:` — `How to Reduce Screen Time: A Guide That Actually Holds` — including the colon. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The hourglasses must stay unlabelled and unnumbered; do NOT let the model add hour numbers or captions to them.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job rather than a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition. One slot here (Image 1).
- **Own-site/product UI screenshots:** not applicable, this post has no own-product screenshot.
- **External screenshots:** the `olgapak.com` wordmark bottom-left at 55–80% opacity, applied post-capture. Applies to Image 2 (a phone OS settings screen, which is not this blog's UI).
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph. All four placeholders in this draft already satisfy that.

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't. `draft-v2.md` contains no markdown tables at all, so nothing here can duplicate one.

### Image 1, after H2 "Not all screen time is the problem" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A simple two-column split diagram. Left column "hours you'd choose again" with small icons for work, study, a video call, reading. Right column "hours that leaked" with icons for a feed, autoplay video, a notification. Type: remotion. Suggested filename: two-piles-of-screen-time.png]` (draft-v2.md line 27)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: this is the post's one genuine diagram, its eight labels must render as exact legible text, and the section contains no markdown table for it to duplicate)
- **Concept:** Two side-by-side panels splitting the reader's hours into the pile they'd choose again and the pile that leaked, with the leaked panel accent-highlighted as the only one this guide targets.
- **Suggested filename:** `two-piles-of-screen-time.png`
- **Alt text:** `Two panels splitting screen time into hours you would choose again and hours that leaked`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `TwoPilesOfScreenTime`
- **Component file:** `tools/remotion/src/TwoPilesOfScreenTime.tsx` (register in `tools/remotion/src/Root.tsx` as `<Still id="TwoPilesOfScreenTime" component={TwoPilesOfScreenTime} width={CANVAS.width} height={CANVAS.height} />`, passing the component reference, never a JSX element)
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` → 3600 × 2400.
- **In-post image: NO title and NO subtitle.** The whole top band belongs to the diagram. `<BlogWatermark />`, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout (derive every coordinate from this constant block; mirror the constants-then-render structure of `MindMapVsWebContrast.tsx`, never hand-place a pixel):
    - `PANEL_TOP = SAFE_MARGIN` (120), `PANEL_BOTTOM = 1064` (clears the watermark, whose top sits near y 1118), `PANEL_H = 944`.
    - `GUTTER = 64`, `PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2 = 748`, `LEFT_X = 120`, `RIGHT_X = 932`.
    - Panel padding `40px 44px`, so content width = `PANEL_W - 88 = 660`.
    - **Panel heading**, panel-relative y 44, centered, `fonts.sans`, 44px, weight 800. Left heading `palette.text`, right heading `palette.text`.
    - **Divider** under each heading: full content-width 1px rule, `palette.border`, panel-relative y 120.
    - **Four item rows per panel**, first row top at panel-relative y 190, `ROW_H = 132`, `ROW_GAP = 20` → rows at 190, 342, 494, 646; the block ends at y 778, leaving 166px of clear space at the panel bottom for the caption.
    - Each row: a 56 × 56 inline-SVG glyph box flush left (2.5px stroke, round caps, no fill), then a 24px gap, then the label in a 580px-wide text box, vertically centered against the glyph, `fonts.sans`, 30px, weight 600, line-height 1.3, wrapping to at most 2 lines. Left-panel glyph stroke `palette.text`; right-panel glyph stroke `palette.muted`.
    - **Caption line** at panel-relative y 866, centered, `fonts.sans`, 30px, weight 700, single line. Left caption `palette.muted`, right caption `palette.accent`.
    - No element may overlap another: no glyph touching its label, no row touching the next, no panel touching the other (64px gutter), nothing touching the watermark.
  - Copy (exact strings to render, nothing else on the canvas):
    - Left panel heading: `Hours you'd choose again`
    - Left rows (glyph, label): briefcase → `The work that pays you`; graduation cap → `Coursework`; speech bubble with a small camera dot → `A video call with your sister`; open book → `A book at the bus stop`
    - Left caption: `Leave this pile alone.`
    - Right panel heading: `Hours that leaked`
    - Right rows (glyph, label): a card with three stacked lines and a small down arrow (a feed) → `The feed you can't remember`; a play triangle inside a rounded square → `One more autoplay video`; a notification bell → `A notification you never asked for`; a browser tab (rounded rect with a small tab notch on top) → `The tab you reopened four times`
    - Right caption: `This guide is only about this pile.`
    - No em-dash anywhere; no check/cross glyphs as text; no numbers anywhere in this composition.
  - Palette: per `blog-ops/profile/image-style.md` tokens via `tools/remotion/src/theme.ts` and the adapter's §Color conventions. **Left panel = the standard neutral card recipe** (`palette.surface`, `1px solid palette.border`, 16px radius, `cardShadow`). **Right panel = the emphasis/outcome variant used exactly once** (`rgba(14,159,142,0.08)` accent tint background, `2px solid palette.accent`), because the leaked pile is the one thing this guide is about; that is the single accent role in the composition. **`palette.warn` is NOT used anywhere:** the post is deliberately non-shaming and the leaked pile is a target, not a failure state. Never dim a row with `opacity < 1`; the "less important" left-hand pile stays at full contrast.
  - Typography: `fonts.sans` throughout (headings, labels, captions). No `fonts.mono` here, nothing in this diagram reads as data.
  - Icons / SVG assets: **none from disk.** All eight glyphs are drawn inline as simple stroked SVG paths inside the component; `tools/remotion/public/` holds nothing needed here and no new asset should be added.
  - Arrows / connectors: **none.** The two panels are a comparison, not a flow, and the accent budget is spent on the right panel.
  - Card recipe to use: neutral recipe (left), emphasis/outcome variant (right), per §Card design language.
- **Source data (if any):** none needed. The eight labels paraphrase the post's own two bullet lists (draft-v2.md lines 29–30); treat them as hardcoded illustrative copy, which the adapter permits in a diagram context. The two-pile split itself is the post's argued frame, supported by `facts.md` §Quotes (@KevinSzabo14, the "it's how you use it" counterpoint the section answers). **No fresh data needed.**
- **Reference composition to mimic:** `tools/remotion/src/MindMapVsWebContrast.tsx` — the closest existing in-post composition and almost exactly this geometry (two equal panels inside `SAFE_MARGIN`, `PANEL_BOTTOM = 1064`, a 64px gutter, one accent-tinted emphasis panel against one neutral panel, no title, `<BlogWatermark />`). Reuse its constant block and panel styling rather than re-inventing them. `tools/remotion/src/PackedVsBufferedDay.tsx` is a secondary reference for row-label typography inside a panel.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still TwoPilesOfScreenTime --output=out/preview-two-piles-of-screen-time-v1.png
  ```
- **Final export command** (only after sign-off; `REPO` is derived dynamically so this works inside the `blog-how-to-reduce-screen-time` worktree as well as the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still TwoPilesOfScreenTime --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-reduce-screen-time/two-piles-of-screen-time.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot, and the whole point of the image is eight exact labels plus two captions rendered as legible text, which Remotion renders exactly by construction while an AI generator cannot be trusted with verbatim wording.

---

### Image 2 — DROPPED (not shipped in this post)

> **Status: dropped.** This slot is a `screenshot` of a real phone's Screen Time / Digital Wellbeing dashboard, which only a human holding a phone can capture — no automated path produces it. Shipping the post with a visible "Image pending" note in its place would be worse than shipping without it, and the section already sends the reader to that exact screen in prose with both platform links, so the placeholder was removed from `draft-v2.md` and from the staged post. The full spec below is kept verbatim so the shot can be captured and dropped in later as a post-publish enhancement (see `action-items.md` §8). It has no `Suggested filename` field any more, deliberately: that field is what the console's build check reads as "this file must exist on disk."
>
> Planned filename if it is ever captured: `screen-time-dashboard.png`.

- **Draft placeholder (originally, now removed):** `[IMAGE: A real phone screen-time dashboard, weekly view, showing the total, the daily bars, and the per-app breakdown underneath. Type: screenshot. Suggested filename: screen-time-dashboard.png]` (was draft-v2.md line 42)
- **Type:** `screenshot` (as tagged in the draft and the outline, kept deliberately: this is an external surface, the phone OS's own settings screen, and the section's entire job is to send the reader to that literal screen and have them recognize it. A Remotion mockup would render a screen that does not exist on anyone's phone, which is the one thing this slot must not do.)
- **Concept:** A real weekly Screen Time / Digital Wellbeing dashboard showing the weekly total, the seven daily bars, and a category-level breakdown underneath, with nothing personally identifying in frame.
- **Filename if captured later:** `screen-time-dashboard.png` (intentionally NOT a `Suggested filename` field while this slot is dropped)
- **Alt text:** `Weekly phone screen time dashboard showing the total, seven daily bars, and category breakdown`

#### Production spec

##### If `screenshot`

- **Source:** `External: Apple Screen Time (iOS Settings)`. Android is an acceptable substitute if the capturer is on Android: `External: Digital Wellbeing (Android Settings)`. Either matches the post, which walks through both platforms.
- **URL to capture:** none, this is an on-device settings screen, not a web page. Tap path instead:
  - **iOS:** Settings → Screen Time → See All App & Website Activity → select the **Week** tab → scroll so the weekly total, the daily bar chart, and the list underneath are all in one viewport. **Tap the "Categories" segment** rather than "Apps" (see privacy note below).
  - **Android:** Settings → Digital Wellbeing and parental controls → Dashboard → switch the ring/chart to the **Week** view.
- **What to include in frame:**
  - The weekly total (and the "daily average" line beneath it, if the OS shows one).
  - The seven daily bars with their day-of-week letters.
  - At least three rows of the breakdown list underneath, each with its label and its time value, so the reader can see the total is not the interesting part.
  - The Week/Day selector visibly set to **Week**.
- **What to crop out:**
  - **Hard requirement: no personal app names and no real identifying data.** Capture with the **Categories** view selected (iOS) so the rows read `Social`, `Entertainment`, `Productivity & Finance` rather than named apps. On Android, where the dashboard is app-first, either capture on a spare/test device or blur the app names to genuinely unreadable (a strong Gaussian blur, not a light one, and not a mosaic that can be reversed).
  - The carrier name, the Wi-Fi/network name, the battery percentage and clock if they identify anything, the Apple ID / Google account row, the device owner name, any contact names, any notification previews or banners.
  - Browser or desktop chrome, and any surrounding desktop wallpaper if the capture is mirrored.
- **Zoom / device:** mobile 390w portrait, captured at native device resolution (2x–3x). Then **place the portrait capture centered on a flat `#F7F7F7` canvas exported at 3:2 (1800 × 1200)** with generous even padding, so the post does not render a very tall image mid-section. Do not stretch the capture; pad it.
- **Capture tool:** the phone's native screenshot (iOS: side button + volume up; Android: power + volume down), then crop, blur, pad and export in Preview, Photos, or any lightweight image editor. Output PNG.
- **Capture date** (external only): record the actual capture date here when the shot is taken, format `YYYY-MM-DD`. Expected `2026-08-08`. The OS UI changes between releases, so a future reader needs to know how stale this is.
- **Annotations required** (if any): **none required.** The surrounding prose already names the three things to look at, and an un-annotated capture reads as the screen the reader will actually see. If a reviewer decides a highlight helps, add at most one: a rounded rectangle around the breakdown list (not around the big total, which the prose explicitly calls the least useful thing on the screen).
- **Annotation style** (only if the optional annotation above is used): color `#0E9F8E` (`palette.accent` per `blog-ops/profile/image-style.md` §Annotation conventions); stroke 3 px; rounded 6 px corners; no label text. Per `${CLAUDE_PLUGIN_ROOT}/adapters/images/screenshot.md`, any annotation overlay is composited as a `remotion` layer over the raw capture, never drawn freehand.
- **Watermark:** external screenshot, so add the `olgapak.com` wordmark bottom-left at 55–80% opacity after capture, on the padded 3:2 canvas.
- **Disposition note:** this slot is manual by design; `generate-images` recorded it as `screenshot_pending`. Nobody could capture it during the headless run, and the console's build check treats every `Suggested filename` in this file as a file that must exist, so the slot was dropped from the post rather than shipped as a visible "Image pending" note. To restore it: capture per the spec above, save as `blog-ops/assets/how-to-reduce-screen-time/screen-time-dashboard.png`, and add the embed back under the "Step 1" H2's first paragraph in the live post.

---

### Image 3, after H2 "Step 3: The daily habits that hold the gains" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A bedside table at night holding only a paperback and a small alarm clock, with the phone charging on a desk across the room, warm lamp light. Type: ai-prompt. Suggested filename: phone-charging-across-the-room.png]` (draft-v2.md line 100)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: a warm human-scale scene with no exact text and no figures)
- **Concept:** A bedside table at night holding only a paperback and a small alarm clock, with the phone charging quietly on a desk across the room in warm lamplight.
- **Suggested filename:** `phone-charging-across-the-room.png`
- **Alt text:** `Bedside table with a book and alarm clock while the phone charges on a desk across the room`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration of a calm bedroom at night, warm and inviting, in a
  soft warm plum and dusty-mauve palette (a WARM dark, never navy or cold blue), lit by one
  pool of amber lamplight.

  Composition: the foreground left holds a small walnut bedside table, seen from a gentle
  three-quarter angle, with the corner of a bed and a cream linen duvet just visible beside
  it. On the table, only three things: a small warm-toned lamp casting a soft amber glow, a
  closed paperback with a plain cream cover lying flat, and a little round analogue alarm
  clock with plain unlabelled hands. Nothing else on the table, no phone, no charging cable,
  no glass, no clutter. Across the room in the middle distance, on the right, a plain walnut
  desk against the wall: on it, a single smartphone lying flat and FACE-DOWN on a small
  charging pad, screen hidden, dark and quiet, with a slim cable trailing to the wall, small
  and unremarkable in the frame. A single terracotta pot with a little trailing greenery on
  the desk beside it. Between the two, plain floor and a warm empty wall with generous
  breathing room. A window at the far right shows a simple flat night sky with two or three
  small stars, no moonlit detail, no city.

  Palette: warm plum and dusty mauve walls, walnut wood, cream linen, amber lamplight,
  terracotta, near-black #222222 for outlines and small details, soft teal #0E9F8E and brand
  blue #2B6CB0 used ONLY as tiny accents (the clock rim, the book spine). Brand blue is NOT
  the background and NOT the dominant fill. Mood: calm, warm, restful, ordinary, never
  scolding. Flat vector with subtle warm shading, no gradients, no photorealism. Small
  lowercase "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no navy or cold blue background, no monochrome brand-blue scene, no glowing phone screen,
  no visible phone screen content, no phone on the bedside table, no app icons, no
  notification icons, no swirl or stream of icons, no social media logos, no crossed-out
  phone, no red prohibition sign, no no-entry symbol, no chains, no padlock, no person in
  the bed, no face, no sleeping figure, no readable words or numbers anywhere, no numbers on
  the clock face, no garbled lettering, no book title text, no app UI chrome, no television,
  no laptop, no tablet, no cluttered nightstand, no extra limbs or extra fingers, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — warm, wood-toned, the `finished-notebooks-shelf` reference look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Samples in `blog-ops/reference/image-samples/`. This is the post's only night scene and it must NOT resemble `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (navy night, sofa, glowing phone, icon swirl): warm plum instead of navy, no person, no lit screen.
- **Source data (if any):** none. The habit in this section (charge the phone outside the bedroom) is advice, not a figure.
- **Text-in-image warning:** this scene must contain NO legible text at all. The paperback cover stays blank and the alarm clock face carries plain hands with no numerals, precisely so nothing depends on the model rendering type. If it adds words or numbers anyway, re-run rather than accepting garbled lettering.
- **Why this and not remotion/screenshot:** a warm domestic night scene is an illustration job, not a data-accurate diagram; there is no real screen to capture, and `image-style.md` assigns section scenes to `ai-prompt`.

---

### Image 4, after H2 "Step 4: What to do when the limits stop working" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Split scene. On the left, a thumb tapping "Ignore Limit" on a phone screen. On the right, the same phone locked in a drawer across the room while the person reads. Type: ai-prompt. Suggested filename: past-the-limit-then-friction.png]` (draft-v2.md line 119)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, kept: the image is a human before/after moment, not a data-accurate layout. It does carry two short words of UI copy, so see the text-in-image warning below, but the picture still reads correctly if the model drops them, which is the test for whether a slot belongs to `remotion` instead.)
- **Concept:** One illustration split down the middle: on the left a thumb dismissing an app-limit card with a single tap, on the right the same phone shut in a drawer across the room while she reads instead.
- **Suggested filename:** `past-the-limit-then-friction.png`
- **Alt text:** `A thumb dismissing an app limit on one side, the same phone shut in a drawer on the other`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration in warm daylight, divided into two halves by one clean
  vertical seam down the exact center of the canvas, both halves in the same flat-vector
  style with the same warm sand and clay palette so they read as one picture, not two.

  LEFT HALF (the dismissal): a close-up, slightly angled view of a single smartphone held
  upright, filling most of that half against a flat warm sand background. Its screen shows
  one simple flat card, cream with rounded corners, containing a small grey hourglass glyph
  and, beneath it, one short button in muted grey with the VERBATIM two-word label
  "Ignore Limit" in a plain bold sans. A relaxed human thumb, drawn simply, is mid-tap on
  that button, the tap radiating one faint grey ripple. Nothing else on the screen, no app
  icons, no status bar detail, no photos, no other buttons. The mood here is matter-of-fact,
  not guilty.

  RIGHT HALF (the friction): a wider view of a warm clay-toned room. In the middle distance,
  a walnut chest of drawers with its top drawer pushed almost closed; through the last inch
  of gap, the same smartphone is just visible lying flat and dark inside, screen hidden. In
  the foreground, the recurring friendly young woman with dark hair in a loose bun and a
  mustard sweater (the same character as prior olgapak.com illustrations) sits sideways in a
  cream armchair, feet tucked up, reading an open paperback, calm and absorbed, not looking
  at the drawer. A small terracotta pot with greenery beside the chair, and a soft rectangle
  of afternoon light on the wall behind her. Generous empty space, no clutter.

  Palette: warm sand and clay grounds, walnut wood, cream, mustard, terracotta, near-black
  #222222 for outlines, soft teal #0E9F8E as a small accent on the right half only (the book
  spine or the pot), brand blue #2B6CB0 at most as a tiny detail. Brand blue is NOT the
  background and NOT the dominant fill. Mood: honest, gentle, non-judgmental, quietly
  hopeful. Flat vector with subtle warm shading, no gradients, no photorealism. Small
  lowercase "olgapak.com" wordmark bottom-left, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no night scene, no
  glowing or colorful phone screen, no app icons, no notification icons, no social media
  logos, no real brand marks, no lock icon, no padlock, no chains, no handcuffs, no
  crossed-out phone, no red prohibition sign, no no-entry symbol, no clock or countdown
  numerals, no percentage or statistic on the screen, no addiction or zombie imagery, no sad
  crying or ashamed face, no head in hands, no pointing finger of blame, no words anywhere
  except the two-word button label, no paragraph of UI copy, no garbled or misspelled
  lettering, no lorem ipsum, no third panel, no duplicated woman, no extra limbs or extra
  fingers, no distorted face or hand, no 3D render, no stock-photo realism, no heavy drop
  shadows, no busy texture
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm background hue, brand blue as accent only; match the warm wood-toned `finished-notebooks-shelf` look). Hue deliberately varied from Image 3's plum night, and the composition deliberately avoids the sofa-and-phone framing already owned by `blog-ops/assets/how-to-stop-doomscrolling/featured.png`.
- **Source data (if any):** none. The section's evidence is quoted prose (`facts.md` §Quotes, u/Iris_006 and u/Icy_Flan_7185), not a figure, and nothing numeric is rendered.
- **Text-in-image warning:** this scene renders exactly two words, `Ignore Limit`, and nothing else. Check the render letter by letter. If the model garbles or misspells them, re-run once; if the second attempt still fails, the acceptable degradation is a **blank grey button with no text at all** (the thumb-mid-tap gesture plus the hourglass glyph still carry the meaning), or a post-processing text overlay of the two words. Do **not** ship garbled lettering, and do not let the model add any other UI copy, app names, times, or percentages to the screen.
- **Why this and not remotion/screenshot:** it is a human before/after moment across two rooms, not a precise data layout, and the picture survives without its two words, so it fails the "the whole point is verbatim text" test that would send it to `remotion`. There is also no real screen to capture: an actual iOS limit prompt would be an Apple UI screenshot the post does not need, and faking one in `remotion` would be exactly the "screenshot mockup of a state that does not exist" the adapters forbid.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/how-to-reduce-screen-time/
├── featured.png
├── two-piles-of-screen-time.png
├── phone-charging-across-the-room.png
└── past-the-limit-then-friction.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register the `<Still>` in `src/Root.tsx`, write the component in `src/TwoPilesOfScreenTime.tsx`, iterate via `npx remotion still` into `out/` (throwaway), final export at `--scale=2` into `blog-ops/assets/how-to-reduce-screen-time/`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`. One slot here (Image 1).
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Three slots here (featured + Images 3, 4).
3. **Screenshots:** none shipped. One slot was planned (Image 2) and is dropped; its spec is kept for a possible post-publish capture. Native phone screenshot, then crop, blur any app names, pad onto a 3:2 `#F7F7F7` canvas, and add the wordmark. Record the capture date. Output PNG.
4. **Watermark + polish:** `<BlogWatermark />` for the Remotion slot; the wordmark is requested in-prompt for the `ai-prompt` slots (add post-hoc if a render drops it); applied post-capture at 55–80% opacity for the external screenshot. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `two-piles-of-screen-time.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (Stage 4a.5 auto-renders the Remotion slot and dispatches the three `ai-prompt` slots to codex; Image 2 is the only manual one).
2. Save to `blog-ops/assets/how-to-reduce-screen-time/` using the suggested filenames verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Counts match.** Draft `[IMAGE:]` placeholders = 4 (draft-v2.md lines 27, 42, 100, 119); the outline's §Image placement plan lists the same 4 in-post slots plus the frontmatter-only featured. No delta, and every draft-tagged type matches the outline's type one for one.
- **No type changes.** All four writer-placed types were kept: one `remotion` diagram, one `screenshot`, two `ai-prompt` scenes. Priority-ladder check: the `remotion` slot is the only one whose point is exact rendered wording; the `screenshot` slot is an external surface (a phone OS settings screen), not this blog's own product UI, so the "never screenshot your own UI when remotion is enabled" rule does not apply, and a Remotion mockup would actively defeat the slot's purpose (the reader must recognize the real screen); neither `ai-prompt` slot carries a numeric or verbatim-text dependency that should have sent it to `remotion`.
- **Image 2 is a manual action item, by design.** `generate-images` will record it as `screenshot_pending`, and the post ships a build-safe "Image pending" note if nobody captures it. Non-blocking: the featured slot is file-producing, so staging still has an asset.
- **Privacy is a hard requirement on Image 2.** No personal app names, no account rows, no carrier or contact data. The spec routes iOS capturers to the **Categories** view so the breakdown reads `Social` / `Entertainment` rather than named apps; Android capturers must use a spare device or blur app names to genuinely unreadable.
- **Featured concept rebuilt, not just retyped.** The outline's featured suggestion (a person setting the phone face-down and picking the evening back up) is a `scene-vignette` that would have been the same picture as the published `how-to-stop-doomscrolling` cover and would also have overlapped in-post Images 3 and 4. Replaced with a `pattern-break` (a grid of hourglasses, exactly one tipped and spilling), which states the whole post's thesis — most of your hours are fine, one pile leaks, fix that one — in a single thumbnail-legible glance. Rejected alternatives are recorded in §Featured image.
- **Archetype rotation:** `pattern-break` chosen. `blog-ops/featured-log/` does not exist yet, so the ledger is the legacy `blog-ops/featured-log.md`; its last two rows blocked **`object-metaphor`** (used by both `charting-method-note-taking` and `digital-detox-plan`). `split-contrast`, `scene-vignette`, `big-number`, `diagram-lite` and `negative-space` were available but rejected on fit, see §Featured image. This post's entry is written to `blog-ops/featured-log/2026-08-08-how-to-reduce-screen-time.md` (one file per post; the legacy table is read-only and was not appended to).
- **Featured-duplication check: passed.** No placeholder uses `featured.png`, and no in-post concept matches the cover.
- **Table-redundancy check: not applicable.** `draft-v2.md` contains no markdown tables at all, so the one chart-style slot (Image 1) cannot duplicate one.
- **No slot needs fresh data.** Image 1's labels are the post's own two bullet lists; nothing in this plan renders a figure from `facts.md`, so nothing is flagged "needs fresh data before generation". Note that the two headline numbers in the post (the NIH two-hour guidance and the PNAS Nexus results) are deliberately NOT rendered in any image: H2 7 spends its length qualifying the two-hour figure, and putting it in a picture would strip that qualification.
- **Tone constraint enforced across every prompt** (carried from the brief and the sibling posts: this cluster is deliberately non-shaming). Every negative prompt bans crossed-out phones, prohibition/no-entry symbols, chains, padlocks, addiction or zombie imagery, and guilty or ashamed faces. Image 1 uses NO `palette.warn` red: the leaked pile is the guide's target, not a failure state. Treat any shaming cue in a render as a re-run, not a nitpick.
- **Hue variation across the set** (per `image-style.md` §Illustration palette): featured = bright leafy sage green (the one saturated single-color ground, deliberately not the marigold used by the last two covers, not the terracotta of `time-blocking`, not the navy of `how-to-stop-doomscrolling`); Image 1 = neutral `palette.background` #F7F7F7 (Remotion); Image 2 = the captured UI padded on #F7F7F7; Image 3 = warm plum night; Image 4 = warm sand and clay daylight. No blue-dominant scene anywhere; brand blue `#2B6CB0` and teal `#0E9F8E` appear only as small accents.
- **Judgment call worth an override look, Image 4.** It renders two words of UI copy (`Ignore Limit`). I kept it `ai-prompt` because the picture reads correctly without them, and the spec names a blank-button fallback plus a text-overlay fallback. If a reviewer would rather guarantee the wording, the alternative is rebuilding the left half as a `remotion` annotated mockup and dropping the right half into its own scene, which costs a slot and splits one idea into two images. I do not recommend it.
- **Do not edit the draft.** The `[IMAGE:]` placeholders stay exactly as written; the publish adapter's staging step swaps them for real Markdown image syntax.
