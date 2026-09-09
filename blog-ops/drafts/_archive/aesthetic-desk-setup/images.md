# Images: aesthetic-desk-setup

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/aesthetic-desk-setup/outline.md` (image placement plan), `blog-ops/drafts/aesthetic-desk-setup/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/aesthetic-desk-setup/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (screenshot slots, failed fallbacks).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `0`
  - AI-generated (`ai-prompt`): `5` (1 featured + 4 in-post)
  - Screenshots: `0`
- File destination: `blog-ops/assets/aesthetic-desk-setup/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion` "to auto-render for publishing". A codex-generated `ai-prompt` hero is the expected deliverable. This slot is never converted.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title band and the whole desk silhouette inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither the lettering nor the desk legs.
- **Concept:** One oversized wooden desk, cut out and floating alone in a flat dusty-rose field, carrying exactly three things (a warm-lit lamp, a small plant, an open notebook) with one cable dropping into a tray under the top and nothing else anywhere, under the hand-lettered post title.
- **Archetype:** `object-metaphor`, one oversized central object standing for the post's thesis, no cards, no panels, no flow. It fits because the argument is *an aesthetic desk is seven decisions, not forty purchases*: a single desk isolated on an empty ground, holding a countable handful of objects, says "this is all of it" in one glance. The three surviving objects are the visual restatement of what the seven decisions leave behind, and the emptiness around and on the desk is the message. Legible at thumbnail size, no numerals fighting the title, no multi-callout density. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date ascending; no prior row for this slug, so nothing is being churned away from a re-run): the last two entries are `2026-08-26 bullet-journal-for-beginners = big-number` and `2026-09-02 screen-free-hobbies = negative-space`, so **`big-number` and `negative-space` are OFF LIMITS**. `object-metaphor` was last used on 2026-08-03 (`charting-method-note-taking`, `digital-detox-plan`), five posts back.
  - **Alternatives considered and rejected:**
    - `scene-vignette` (the outline's own suggestion: a calm desk in a bedroom corner at warm evening light, one lamp, one plant, one open notebook), **rejected, and this is the important one.** That concept is in-post Image 4 almost word for word, so the cover would preview a body image. See §Editor notes; the object-metaphor exists specifically to break that duplication. `scene-vignette` was also the 2026-08-19 cover.
    - `split-contrast` (cluttered cold desk on the left, calm warm desk on the right): rejected. In-post Image 3 is already a side-by-side before/after of the same desk, so the cover would ship the same composition shape as a body image two scrolls later.
    - `pattern-break` (a grid of desk-decor products with one lamp lit): a genuinely good fit for "not forty purchases", but `pattern-break` carried both 2026-08-08 covers, and using it a third time in six posts is exactly the convergence this rotation exists to prevent.
    - `diagram-lite`: rejected per the skill's guidance: the post has no flow to draw, and a card-and-arrow cover is the house default the rotation breaks.
- **Suggested filename:** `featured.png`
- **Alt text:** `A small wooden desk holding only a lamp, a plant and an open notebook, under the post title`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single flat, saturated, warm
  background: a soft dusty rose field (warm blush pink, NOT cream, NOT orange, NOT sage
  green, NOT marigold, NOT terracotta, NOT blue) filling the whole canvas edge to edge,
  with generous empty space and no room, no wall, no floor, no window.

  Composition (object-metaphor archetype: ONE oversized central object, no panels, no
  cards, no charts, no arrows, no split screen, no grid): a single small writing desk,
  cut out and floating alone on the flat ground with a soft shadow beneath its legs,
  centered in the lower two thirds of the canvas and drawn large, seen head-on at a
  very slight three-quarter angle. Simple light natural oak top, four slim tapered legs,
  no drawers, no clutter, deliberately plain.

  On the desk top, exactly three objects and nothing else, spaced apart with clear
  empty surface between them: a slim warm-metal desk lamp at the left, its head tilted
  down and casting one soft warm pool of light on the wood; a small green plant in a
  cream ceramic pot at the right; and one open notebook lying flat in the middle with
  blank cream pages and no writing on them. One single slim cable runs from the lamp
  down the back of the desk into a small tray clipped under the desk top, and nothing
  touches the ground. No mug, no laptop, no monitor, no phone, no papers, no pens, no
  chair, no person, no hands.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the desk begins, two lines, VERBATIM text:
  line 1, "Aesthetic Desk Setup:" in a playful hand-lettered brush script, with the
  single word "Aesthetic" in bright red (#E11D48) and "Desk", "Setup" and the colon in
  near-black (#222222);
  line 2, "7 Simple Steps on Any Budget" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: flat dusty rose ground, light natural oak, cream paper white, warm brass for
  the lamp, muted sage green foliage, near-black #222222 for outlines and title, one
  red accent word #E11D48, a small soft teal #0E9F8E detail on the plant pot rim only.
  Mood: clean, approachable, confident, calm, optimistic. Flat vector, crisp shapes,
  subtle warm shading, one warm light pool as the only glow, no gradients beyond that,
  no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no cream or butter-yellow background, no bright orange background, no sage green
  background, no marigold, no terracotta, no cold blue or navy, no monochrome
  brand-blue scene, no room interior, no wall, no window, no curtains, no floor
  boards, no rug, no chair, no person, no hands, no fingers, no laptop, no monitor,
  no keyboard, no phone, no coffee mug, no stack of books, no papers, no loose pens,
  no picture frames, no shelves, no string lights, no LED strip, no wall art, no
  second desk, no split screen, no before-and-after panels, no numbered callouts or
  badges, no infographic panels, no cards, no arrows, no charts, no brand names or
  logos, no garbled or misspelled lettering, no extra words beyond the title and the
  wordmark, no lorem ipsum, no duplicated watermark, no 3D render, no stock-photo
  realism, no heavy drop shadows on text, no busy texture, no cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, flat saturated single-color ground, `olgapak.com` wordmark) and §Illustration palette (warm, never cold blue). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/screen-free-hobbies/featured.png` (butter cream, `negative-space`) and `blog-ops/assets/bullet-journal-for-beginners/featured.png` (bright orange, `big-number`). Dusty rose is unused across the current library (cream, orange, sage, marigold and terracotta are taken), which is why it is specified here.
- **Source data (if any):** none rendered as a figure. The three objects on the desk are illustrative of Steps 3, 4 and 5, not a count of anything the post claims; the only numeral in the image is the "7" inside the verbatim title.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:`, which reads `Aesthetic Desk Setup: 7 Simple Steps on Any Budget`, including the colon and the numeral 7. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The notebook pages must stay blank; do NOT let the model write text on them.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero, which is an illustration job rather than a diagram job. There is no screen to capture anywhere in this post.

### Watermark

- **`remotion` slots:** none in this post.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt only, bottom-left, ~55% opacity per `image-style.md` §Watermark. The four in-post illustrations follow the existing library convention and carry no wordmark. If the featured render omits or garbles the wordmark, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph. All four placeholders in `draft-v2.md` (lines 42, 61, 79, 111) already satisfy that rule as the writer placed them; do not move them, and do not change their `Suggested filename` strings, staging matches on them.

**Table-redundancy rule:** `draft-v2.md` contains no markdown tables at all, so no slot can duplicate one. Nothing to flag.

**Hue rotation across this post** (per `image-style.md` §Illustration palette, vary the background hue section to section, stay warm, brand blue is an accent only and never a fill): featured = flat dusty rose; Image 1 = warm oat/cream daylight room; Image 2 = warm olive-grey floor under oak; Image 3 = neutral warm grey on the left panel, amber on the right; Image 4 = deep warm terracotta dusk.

### Image 1, after H2 "Step 1: Take everything off the desk first" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A bare wooden desk in a small bedroom, completely cleared, with a cardboard box on the floor beside it holding mugs, papers, cables and pens. Mid-reset, honest and slightly untidy rather than styled. Type: ai-prompt. Suggested filename: bare-desk-reset.png]`
- **Type:** `ai-prompt`
- **Concept:** A small bedroom desk stripped completely bare in flat daylight, with an open cardboard box on the floor beside it overflowing with the mugs, papers, cables and pens that were on it a minute ago.
- **Suggested filename:** `bare-desk-reset.png`
- **Alt text:** `A completely cleared wooden desk with a box of mugs, papers and cables on the floor beside it`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline: a small
  bedroom corner in soft daytime light, seen from the side at a gentle three-quarter
  angle, standing about two metres back so the whole desk and the floor beside it are
  in frame.

  The subject is a plain light natural oak desk pushed against a warm oat-cream wall,
  and it is completely, conspicuously empty: bare wood, not one object on the surface,
  a faint dust line and a pale rectangle where something used to sit. The only thing
  left is a laptop-free desk top and a single wall socket behind it. The emptiness is
  the point, give the bare surface real visual weight.

  On the floor beside the desk, an open cardboard box, flaps folded outward, packed
  honestly and a little untidily with the things that came off the desk and visibly
  overflowing at the top: two mugs, a loose stack of papers with corners sticking out,
  a tangle of black and white cables spilling over one edge, four or five pens, a
  charger brick. Nothing is arranged, nothing is styled, a couple of items lean. One
  pen has rolled out onto the floor beside the box.

  Mood: mid-reset, honest, in progress, not finished and not photographed. No person,
  no hands.

  Palette: warm oat-cream wall, light natural oak desk and floorboards, kraft brown
  cardboard, cream paper, near-black #222222 for the cables and outlines, warm grey
  #6B7280 for shadows, one small soft teal #0E9F8E detail on a single mug. Warm and
  inviting, natural wood tones, cream paper, soft daylight. Brand blue is NOT used
  here and the scene is NOT cold or blue-tinted. Flat vector with subtle warm shading,
  crisp shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults, keeps the in-post set consistent with the cover)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no arrows, no callout
  boxes, no numbers, no legible words, no garbled or misspelled text, no lorem ipsum,
  no cold blue or navy scene, no monochrome brand-blue palette, no grey office
  cubicle, no objects left on the desk top, no laptop, no monitor, no keyboard, no
  mug on the desk, no plant on the desk, no lamp on the desk, no person, no hands, no
  fingers, no pet, no tidy styled flat-lay, no neatly packed box, no moving-house
  vibe with many boxes, no stray logos or brand names, no watermark, no 3D render, no
  photorealism, no heavy drop shadows, no busy wallpaper pattern
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`.
- **Source data (if any):** none. The section's only sourced claims (Princeton's competing-objects finding, the OSHA monitor-height guidance) are prose, not figures, and nothing numeric is rendered.
- **Text-in-image warning:** this slot must carry **no** legible text. The papers in the box are specified as blank stacks seen edge-on with no writing, and there are no labels anywhere. If the render produces label-like text or writing on the papers, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** it is a real-room moment with texture, daylight and deliberate untidiness, which is a scene job per `custom-instructions.md` §Image style; a flat Remotion diagram cannot render "honestly messy", and there is no screen to capture.

---

### Image 2, after H2 "Step 2: Get the cables out of sight" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A cutaway view underneath a desk showing a clamp-on cable tray holding a power strip and neatly coiled cables, with nothing touching the floor. Clean, warm, illustrative. Type: ai-prompt. Suggested filename: under-desk-cable-tray.png]`
- **Type:** `ai-prompt`
- **Concept:** A low cutaway view into the space under a desk, showing a clamp-on tray fixed beneath the desk top holding the power strip and neatly coiled cables, with clean empty floor underneath and nothing hanging down.
- **Suggested filename:** `under-desk-cable-tray.png`
- **Alt text:** `Under a desk, a clamp-on tray holding the power strip and coiled cables, nothing on the floor`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, clean, illustrative flat-vector cutaway, no title lettering, no headline:
  the view into the space underneath a desk, camera set low and close, roughly at
  knee height, looking horizontally into the gap so the underside of the desk top
  fills the upper third of the frame and the floor runs across the lower third.

  Fixed to the underside of the light natural oak desk top, a shallow open wire-mesh
  cable tray in matte near-black, clamped on at each end with two visible C-clamps
  gripping the desk top and no screws or drilled holes. Resting inside the tray, a
  white power strip with three plugs seated in it and a small charger brick beside it.
  Two cables leave the tray, each coiled into a neat flat loop and secured with a
  simple velcro tie, then routed up the back leg of the desk and out of frame at the
  top.

  The floor underneath is completely clear: bare warm wood, one soft shadow cast by
  the tray, and absolutely nothing hanging down, no cable touching the ground, no
  slack loop dangling, no dust, no clutter. The contrast between the tidy tray above
  and the empty floor below is the whole point of the image. Cross-section framing is
  fine, a clean cutaway rather than a labelled technical diagram.

  Palette: light natural oak desk underside and warm wood floor, muted warm
  olive-grey floor shadow, matte near-black #222222 tray and cables, cream white power
  strip, warm grey #6B7280 for the clamps, one small soft teal #0E9F8E velcro tie as
  the single accent. Warm and inviting, natural wood tones, soft warm light. Brand
  blue is NOT used here and the scene is NOT cold or blue-tinted. Flat vector with
  subtle warm shading, crisp shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no part numbers, no
  arrows, no callout boxes, no dimension lines, no technical blueprint styling, no
  legible words, no garbled or misspelled text, no cold blue or navy scene, no
  monochrome brand-blue palette, no cables touching the floor, no dangling slack
  cables, no tangled mess, no dust bunnies, no power strip on the floor, no drilled
  screws or wall anchors, no person, no legs, no feet, no hands, no pet, no chair
  wheels, no stray logos or brand names on the power strip, no watermark, no 3D
  render, no photorealism, no heavy drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: warm wood-toned family, the `finished-notebooks-shelf` look rather than the cold `rocketbook-workflow` one.
- **Source data (if any):** none numeric. The clamp-on, no-drill construction is the product characteristic the prose relies on (the Univivi tray clamps rather than screws in, which is what makes it work in a rented room), so the clamps must be visible and there must be no drilled fixings.
- **Text-in-image warning:** this slot must carry **no** legible text, and specifically no brand name on the power strip or the tray. The three moves are named in the prose beside it, so nothing needs labelling. If the render adds labels or a logo, re-run.
- **Why this and not remotion/screenshot:** it shows a physical spatial relationship with real materials and light under a real desk, not an abstract flow; there is no screen to capture and no data to plot, so neither of the higher rungs fits. A Remotion cutaway would read as a furniture-assembly schematic, which is the wrong register for this post.

---

### Image 3, after H2 "Step 3: Fix the light before you buy any decor" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The same small desk shown twice side by side. Left: lit only by a flat overhead ceiling light, cold and shadowless. Right: lit by one warm lamp at desk level, cosy and dimensional. Type: ai-prompt. Suggested filename: ceiling-light-vs-desk-lamp.png]`
- **Type:** `ai-prompt`
- **Concept:** One desk drawn twice side by side, identical in every object and angle, differing only in its light: flat, cold and shadowless under the ceiling fitting on the left, warm and dimensional under a single desk lamp on the right.
- **Suggested filename:** `ceiling-light-vs-desk-lamp.png`
- **Alt text:** `The same desk under a flat ceiling light on the left and one warm desk lamp on the right`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A flat-vector illustration in two equal halves, side by side, no title lettering, no
  headline, no captions and no labels: the SAME small desk drawn twice, once in each
  half, identical in furniture, objects, placement and camera angle so the only
  difference a viewer can see is the light. Separate the halves with one thin vertical
  near-black rule down the exact centre of the canvas. Both halves seen from the same
  straight-on, slightly raised angle.

  In each half: a plain light oak desk against a wall, with an open notebook, a closed
  laptop and a small plant in a pot on it. Same three objects, same positions, both
  sides.

  LEFT HALF, overhead ceiling light only: a plain round ceiling fitting glowing at the
  top of the frame, its light falling straight down and evenly on everything. Colours
  desaturated toward a flat neutral warm grey, wood gone pale and lifeless, no
  directional shadow anywhere, everything the same brightness corner to corner, the
  surface reading as one dull grey plane with no depth. Cool and clinical without being
  blue.

  RIGHT HALF, one warm desk lamp only, ceiling light off: the ceiling fitting drawn
  dark and switched off at the top of the frame, and a slim desk lamp standing on the
  desk with its head tilted down, throwing one soft amber pool of light across the
  notebook and the desk top. Rich warm amber and honey tones inside the pool, the wood
  reading as real wood, long soft shadows stretching sideways from every object, the
  corners of the half falling gently into warm shadow. Cosy, dimensional, evening.

  Palette: LEFT, flat neutral warm greys #6B7280, washed pale oak, near-black #222222
  outlines, no saturation. RIGHT, warm amber and honey light, rich natural oak, cream
  paper, near-black #222222 outlines, one small soft teal #0E9F8E detail on the plant
  pot. Brand blue is NOT used and neither half is blue or navy tinted, the left half
  is grey and shadowless rather than cold-blue. Flat vector with subtle shading, crisp
  shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults; the two halves each occupy 3:4 within it, which is enough width for a desk in each)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no "before" or "after"
  words, no arrows, no callout boxes, no numbers, no tick or cross icons, no legible
  words, no garbled or misspelled text, no cold blue or navy tint on either half, no
  monochrome brand-blue palette, no different furniture between the halves, no
  different objects between the halves, no different camera angle between the halves,
  no string lights, no RGB or LED strip, no coloured gel lighting, no candles, no
  window, no person, no hands, no pet, no stray logos or brand names, no watermark, no
  3D render, no photorealism, no heavy drop shadows on the divider, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: the right half is the reference warm `finished-notebooks-shelf` look; the left half is deliberately desaturated toward neutral grey, and must NOT be pushed toward the cold blue of `student-desk-spiral`, which is the failure mode this style note calls out.
- **Source data (if any):** none rendered. The section's sourced claims (OSHA on placing the monitor perpendicular to the window, NIOSH on blue light suppressing melatonin) are prose; no figure is drawn and the image makes no numeric claim. Note that the monitor-and-window point is deliberately NOT drawn: there is no window in either half, so the image cannot contradict the guidance it sits next to.
- **Text-in-image warning:** this slot must carry **no** legible text, including no "before"/"after" labels. The prose immediately above and below names which side is which, and the light difference is self-explanatory. If the render adds panel labels, re-run rather than accepting them.
- **Why this and not remotion/screenshot:** the comparison is entirely about *quality of light*, flat and shadowless versus warm, pooled and directional. `image-style.md` does list side-by-side comparisons as a Remotion strength, and this was the one slot in the post worth arguing about, but a flat geometric composition cannot render the thing being compared: shadow length, colour temperature and falloff are the content, not the layout. So `ai-prompt` is the correct rung here on the merits, not by default. Nothing to screenshot.

---

### Image 4, after H2 "Step 5: Add one living thing and one thing that's yours" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A finished small desk in warm evening light with one plant, an open notebook, and two personal objects on it. Lived-in and slightly imperfect rather than staged. Type: ai-prompt. Suggested filename: finished-desk-plant-personal.png]`
- **Type:** `ai-prompt`
- **Concept:** The finished desk in a real room at dusk, warm lamplight on it, holding one plant, an open notebook and exactly two personal objects, with small honest imperfections that say somebody sits here rather than photographs it.
- **Suggested filename:** `finished-desk-plant-personal.png`
- **Alt text:** `A finished desk in warm evening light with one plant, an open notebook and two personal objects`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline: a small
  desk in the corner of a real bedroom at dusk, seen at a three-quarter angle from a
  seated eye height, close enough that the desk fills most of the frame but with the
  wall, the corner and part of the darkening window visible behind it.

  The desk is finished and in use. A slim desk lamp at the back left is on, throwing a
  soft amber pool across the surface and leaving the corners of the room in warm
  shadow. On a muted felt desk mat: an open notebook lying at a slight angle with a
  few lines of loose handwriting on the left page, unreadable and suggestive rather
  than legible; a small trailing green plant in a cream ceramic pot; and exactly two
  personal objects, one small framed photograph and one ceramic mug with a chipped rim.
  Nothing else on the surface.

  The honesty details matter, make it lived-in rather than styled: the notebook sits
  slightly askew rather than square to the mat, one pen lies loose across the open
  page instead of in a holder, the chair back is just in frame at the lower edge, and
  one plant leaf droops. It should look like somebody stood up from this desk a minute
  ago, not like it was arranged for a photograph. No person and no hands in frame.

  Palette: deep warm terracotta wall falling into shadow, rich natural oak desk, muted
  warm charcoal felt mat, cream paper, warm amber lamplight as the only light source,
  muted sage green foliage, near-black #222222 outlines, one small soft teal #0E9F8E
  detail on the mug. Warm, cosy, evening, inviting: natural wood tones, cream paper,
  warm light, a little greenery. Brand blue is NOT used here and the scene is NOT cold
  or blue-tinted. Flat vector with subtle warm shading and soft texture, crisp shapes,
  no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no arrows, no callout
  boxes, no numbers, no legible words, no readable handwriting, no garbled or
  misspelled text, no cold blue or navy scene, no monochrome brand-blue palette, no
  daylight, no overhead ceiling light on, no string lights, no RGB or LED strip, no
  person, no hands, no fingers, no pet, no laptop, no monitor, no phone, no more than
  one plant, no shelf of figurines, no crowd of trinkets, no wall of picture frames,
  no perfectly symmetrical styled flat-lay, no showroom staging, no visible cables, no
  stray logos or brand names, no watermark, no 3D render, no photorealism, no heavy
  drop shadows, no busy wallpaper pattern
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: this is the closest slot in the post to the reference warm, wood-toned `finished-notebooks-shelf` look; match it directly.
- **Source data (if any):** none rendered. The section's plant evidence (the Dutch nine-organisation study: workspace rated more attractive, higher satisfaction, fewer dry-air complaints, no direct effect on 13 of 18 outcomes) is a prose correction of a bad statistic and must NOT be drawn as a figure or a percentage anywhere in this image.
- **Text-in-image warning:** this slot must carry **no** legible text. The handwriting in the notebook is specified as unreadable scribble precisely so there is nothing for the model to garble, and the framed photo must contain an abstract shape rather than a caption. If the render produces readable words, re-run.
- **Why this and not remotion/screenshot:** the whole slot is atmosphere: evening light, warmth, and deliberate small imperfections that make a desk read as lived-in. That is a scene job per `custom-instructions.md` §Image style; Remotion renders geometry, not cosiness, and there is nothing to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/aesthetic-desk-setup/
├── featured.png
├── bare-desk-reset.png
├── under-desk-cable-tray.png
├── ceiling-light-vs-desk-lamp.png
└── finished-desk-plant-personal.png
```

Asset folder is created automatically by the Stage 4a.5 image-generation step; this skill does not create it.

## Tools reference

1. **Remotion compositions:** none in this post. The project lives at `tools/remotion/` if a fallback is ever needed; adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). All five slots in this post route here.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** the featured `ai-prompt` slot requests the `olgapak.com` wordmark inside the prompt; the four in-post illustrations follow the existing library convention and carry no wordmark. Output format: PNG throughout.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `under-desk-cable-tray.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless Stage 4a.5 records one `failed`; then copy that slot's `Prompt:` block into any AI image tool and save the output under the exact `Suggested filename`.
2. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
3. Check the featured render's title against the frontmatter `title:` word by word, including the colon and the numeral 7, and confirm no in-post render carries legible text.

## Editor notes

- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 42, 61, 79, 111) and 4 in-post slots in `outline.md` §Image placement plan, in the same order and the same sections. No delta. All four sit after their H2 plus one paragraph, as the placement rule requires.
- **MAJOR, resolved at planning time: the outline's featured concept duplicated in-post Image 4.** `outline.md` specified the cover as "a small, calm desk in a bedroom corner at warm evening light" with "one lamp, one plant, one open notebook", which is in-post Image 4's placeholder almost word for word. Shipping both would have made the cover a preview of a body image two thirds of the way down the post. The draft is not at fault and no placeholder needs deleting: the featured concept was re-conceived instead, as an isolated `object-metaphor` cutout on a flat dusty-rose ground with no room, no window, no evening light and no personal objects. The two images now share only the subject noun. If a reviewer prefers the outline's original scene as the cover, Image 4 has to change, not just the cover.
- **Featured stays `ai-prompt`, not negotiable here.** `images.featured_default: ai-prompt` plus `blog-ops/profile/custom-instructions.md` §Image style, which forbids converting the featured slot to `remotion` for auto-rendering. Publishing is a human step regardless.
- **Type mix is content-driven, and I agree with the outline: no `remotion` slot is justified.** Every in-post slot in this post is a physical scene whose content is material, light and mess: a bare surface, a cutaway under a desk, a lighting difference, an evening room. `custom-instructions.md` §Image style reserves `remotion` for genuine diagrams and charts, and there is no diagram, no flow, no chart and no numeric figure anywhere in the post. `draft-v2.md` contains no markdown tables either, so the table-duplication rule has nothing to catch.
- **The one slot worth arguing about was Image 3.** `image-style.md` names side-by-side comparisons as a Remotion strength, and Image 3 is a side-by-side. It still stays `ai-prompt` because the thing being compared is light quality, not layout: shadow direction, colour temperature and falloff carry the entire message, and flat geometric vector cannot render them. Flagging the call so it can be overridden knowingly. If it is ever converted, the Remotion version must render two identical desks with genuinely different lighting treatments, which is a hard composition, not a card grid.
- **No `screenshot` slot anywhere, by design.** The post contains no software UI, no product interface and nothing external to capture. A screenshot slot here would become a manual human action-item that blocks staging for no editorial gain. Priority-ladder check therefore passes: nothing is sitting on a lower rung that a higher rung would have served.
- **No chart needs data that is missing.** No slot renders a figure, so nothing in `facts.md` is required before generation and nothing needs a fresh pull.
- **Deliberate omission: the plant statistic must never appear in an image.** The post's Step 5 exists partly to correct a widely repeated percentage that is not in the study it is credited to. Image 4's spec explicitly forbids drawing any percentage or figure, so a render cannot reintroduce the number the prose just debunked.
- **Hue rotation is specified per slot** because `image-style.md` §Illustration palette calls out background-hue repetition as a known failure. Cream, bright orange, sage green, marigold and terracotta are all taken by existing covers, so the featured ground is dusty rose; the four in-post scenes run oat-cream, olive-grey, neutral-grey/amber, and terracotta dusk. Brand blue `#2B6CB0` is used nowhere as a fill in this post, and teal `#0E9F8E` appears only as a single small accent detail per image.
- **Rotation ledger.** This run writes `blog-ops/featured-log/2026-09-09-aesthetic-desk-setup.md`. `blog-ops/featured-log.md` is the legacy ledger and was read only, never appended to. The blocked set came from the two most recent entries across both sources: `big-number` (2026-08-26) and `negative-space` (2026-09-02).
