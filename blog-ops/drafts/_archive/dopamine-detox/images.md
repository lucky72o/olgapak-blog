# Images: dopamine-detox

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/dopamine-detox/outline.md` (image placement plan), `blog-ops/drafts/dopamine-detox/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/dopamine-detox/facts.md` (diagram data), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style, and `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/*.md`.
Read by: the `image-builder` agent at Stage 4a.5 (and the human, on any slot it records `failed`).

**Purpose:** every image slot in the finalized draft gets a concrete spec that can be executed without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/dopamine-detox/`

> **Read this before rendering the Remotion slot.** `tools/remotion/src/Root.tsx` does not parse right now: the `FourCorePagesMap` `<Still>` at line 81 is missing its `width={CANVAS.width} height={CANVAS.height} />` closing line, so the `CostTierKey` tag opens before it closes. Until that one line is inserted, **no composition in this project renders**, including this post's. Exact fix in the Image 3 production spec and in §Editor notes.

> **Post-wide content guardrails for every slot in this file.** This post is health-adjacent and deliberately anti-hype, and its hardest tonal job is telling readers a popular idea is misnamed without making anyone who tried it feel stupid. Two hard bans apply to all five images:
>
> 1. **No mechanism imagery.** No brains, no brain cross-sections, no neurons, no synapses, no glowing neural pathways, no receptors, no molecules, no chemical structures, no "energy" auras around a head. The post's whole argument in H2 2 is that nothing chemical is happening, so an image implying a chemical mechanism would contradict the prose it sits next to.
> 2. **No shaming.** No one looks guilty, ashamed, defeated, hunched, zombie-like, or addicted. No chains, no handcuffs, no phone drawn as a monster or a claw, no one smashing or breaking a phone. Where the post depicts the austere viral version (Image 2, left panel), the emptiness of the room is the joke, never the person sitting in it.

## Featured image

> **Frontmatter only.** The `wordpress-rest` adapter's frontmatter template defines no cover/heroImage field: this asset ships as a WordPress media upload attached via `featured_media` at Stage 4b.5, which is why the filename is fixed at `featured.png`. Never duplicate it as an in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`. From `images.featured_default` in `blog-ops/config.yaml`, and reinforced as a standing rule by `blog-ops/profile/custom-instructions.md` §Image style ("Featured image is always `ai-prompt`... do NOT override the featured slot to `remotion`/anything else to 'auto-render for publishing'"). `ai-prompt` is a member of `images.enabled` (`[ai-prompt, screenshot, remotion]`). **Do not flip this slot to `remotion`.**
- **Dimensions:** 3:2, per `image-style.md` §Aspect ratio defaults. Target roughly 1800 x 1200 px. Keep the title block and every object inside the central 80% vertically, so the 1.91:1 OG crop slices only empty ground.
- **Concept:** A warm evening tabletop seen at a three-quarter angle, lamplight pooling across it: a phone lying face-down and forgotten at the near edge, a closed hardback and a steaming mug sitting in the light where the phone used to be, the post's whole thesis in one glance (a modest evening swap, not a 24-hour endurance stunt).
- **Archetype:** `scene-vignette`. A small illustrated moment rather than a diagram of one, which is exactly what this post's thesis needs: the argument is "an ordinary evening looks like this", and a card-and-arrow cover would say the opposite. The rotation ledger (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md` table, union sorted by date) ends with `2026-09-02 screen-free-hobbies` = `negative-space` and `2026-08-26 bullet-journal-for-beginners` = `big-number`, so **`negative-space` and `big-number` are off limits**. Alternatives weighed and rejected: `split-contrast` (the viral-versus-original contrast is real, but it belongs to H2 3, not to the whole post, and Image 2 already carries it, so a split cover would make the post's one section its headline); `object-metaphor` (an oversized single phone face-down is clean, but "phone put down" alone reads as a screen-time post, and this post is explicitly not a screen-time post, per outline §Open questions item 1); `diagram-lite` (the cadence is a genuine flow but it is one section's method, and the featured slot is a book cover, not the method). `scene-vignette` was last used on 2026-08-19 (`how-to-take-notes-on-ipad`, a woman handwriting on an iPad at a desk), three posts back and a completely different motif and palette. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `A phone lying face-down on a warm evening table beside a closed book and a steaming mug`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector blog hero illustration on a single flat warm dusty rose-clay background (roughly #E9A896), no gradient, no texture noise, no photographic lighting on the background itself.

  Composition, scene-vignette archetype: ONE small warm moment, not an arrangement and not a diagram. No panels, no cards, no grid, no arrows, no charts, no numbered callouts, no borders, no icons.

  Lower half of the frame, a plain walnut tabletop rendered in a gentle three-quarter view (the far table edge slightly higher than the near one, so it reads as a real table in a room rather than a flat-lay). Exactly three objects on it, each casting a soft short shadow:
  1. Near the front-left edge, a small plain dark-charcoal phone lying flat and FACE DOWN, blank back, no logo, no camera-bump detail, no screen visible, no glow. It sits slightly apart from the other two, quietly set aside rather than shoved away.
  2. Centre-right, a closed hardback book with a cloth cover in muted brick red and a fabric ribbon marker trailing from it. It looks read, not new: softly rounded corners, one slightly bent page block.
  3. Just behind the book, a chipped cream ceramic mug with two thin curls of steam rising from it.

  Right edge of the frame, cropped by the border, the lower half of a warm table lamp with a honey-coloured shade, throwing a soft pool of warm light across the table so the book and mug sit in the light and the phone sits at the edge of it. Behind and above the table, a suggestion of an evening room: a soft dark window pane and a hint of a chair back, kept very simple and low-contrast so it reads as depth, not detail. No people, no hands, no faces anywhere in the image.

  Upper third of the frame, on clear empty ground above the table, the post title rendered EXACTLY as
  Dopamine Detox: What It Is and How to Actually Do It Right
  centred, wrapping across two or three lines, set in a playful hand-lettered script mixed with a bold rounded sans, dark near-black (#222222), with only the word "Right" coloured brand teal (#0E9F8E) as the single accent.

  Palette and mood: warm, calm, ordinary, unpreachy. Dusty rose-clay ground, walnut table, brick-red cloth, cream ceramic, honey lamplight, one small muted green plant leaf at most. Brand teal (#0E9F8E) appears only in the title accent word and, at most, one tiny object detail. Brand blue (#2B6CB0) does not appear at all. Never a blue background, never a blue-dominant scene, never cold grey studio light. Clean bold outlines, soft cel shading, flat colour, generous empty space around the title.

  Bottom-right corner: the small lowercase wordmark olgapak.com in a plain rounded sans, dark, at about 55% opacity.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; also the featured-slot default, and it keeps this post's mixed `ai-prompt` plus `remotion` set consistent, since the Remotion canvas is 1800 x 1200)
- **Negative prompt** (if the tool supports it):
  ```
  brain, brain diagram, brain cross-section, anatomical head, neurons, synapses, neural pathways, glowing brain, dopamine molecule, chemical structure, molecular diagram, energy aura around a head, medical illustration, person looking guilty, ashamed, defeated, slumped or hunched, zombie-like figure, addiction imagery, chains, handcuffs, phone drawn as a monster or claw, cracked or smashed phone, hand reaching for a phone, crossed-out phone, red prohibition circle, notification badges, app icons, visible phone screen, screen glow, UI chrome, faces, people, hands, extra limbs, extra or malformed fingers, photorealism, 3D render, stock photo, glossy influencer flat-lay, styled marketing flatlay, brand-new pristine products, packaging, price tags, brand logos or wordmarks, Apple logo, clock or timer prominently featured, hourglass, calendar grid, more than three objects on the table, cluttered surface, misspelled or garbled lettering, duplicate text blocks, extra captions or labels beyond the title, gradient background, blue-dominant background, navy, teal or royal-blue ground, sage-green ground, marigold or amber ground, sand-oat ground, lavender ground, dark or moody colour grading, heavy black shadows, watermark other than the olgapak.com wordmark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script plus bold rounded sans, one accent-coloured title word, `olgapak.com` wordmark, one flat single-colour ground) and §Illustration palette (warm, wood-toned, never blue-dominant; the warmth benchmark is the `finished-notebooks-shelf` sample in `blog-ops/reference/image-samples/`). Prior covers are tonal family only, deliberately NOT composition or hue references: `blog-ops/assets/screen-free-hobbies/featured.png` (sand-oat, `negative-space`, and the one this cover must least resemble, since it also uses a face-down phone), `blog-ops/assets/how-to-take-notes-on-ipad/featured.png` (amber, the previous `scene-vignette`), `blog-ops/assets/time-blocking/featured.png` (terracotta), `blog-ops/assets/how-to-reduce-screen-time/featured.png` and `blog-ops/assets/best-pens-for-note-taking/featured.png` (both sage green), `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (navy).
- **Source data (if any):** none. The concept is editorial; no number appears in the image, and the title string carries none.
- **Text-in-image warning:** this slot needs the post title rendered legibly and verbatim. After generation, read the PNG and check it character by character against `Dopamine Detox: What It Is and How to Actually Do It Right` (including the colon after "Detox"), plus the `olgapak.com` wordmark. It is a 57-character title, which is long for hand-lettering, so a wrap across three lines is expected and fine; a dropped or invented word is not. If one letter is wrong, re-generate once; if it is still wrong, the fallback is a human text overlay on a clean untitled render, never shipping garbled lettering. No other text may appear: no object labels, no captions, no book-cover lettering.
- **Why this and not remotion/screenshot:** `images.featured_default` plus a standing custom instruction lock this slot to `ai-prompt`, and the whole hero convention on this blog is the hand-lettered illustrated cover, which Remotion's flat geometric language does not produce. There is nothing on a screen to capture, and the one screen in the concept is deliberately face-down.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md`; sizing, opacity, and position per the remotion adapter). Never inline a watermark, never reposition.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt only (bottom-right, about 55% opacity), matching the existing hero library. Section illustrations follow the library convention and carry NO wordmark and no text of any kind.
- **Own-site/product UI screenshots:** none in this post.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** every slot below already sits after its section heading and the section's first body paragraph in `draft-v1.md` (lines 42, 57, 74, and 110). Do not move the placeholders and do not edit their text.

**Table-redundancy rule:** `draft-v1.md` contains exactly one markdown table, at lines 59 to 64 in H2 3. Image 2 sits in that same section and is deliberately a **scene, not a chart**, precisely so it does not redraw the table. Image 3 is the post's one genuine diagram and sits in H2 4, which has no table of its own; the partial content overlap with the table's final row is examined in §Editor notes and the diagram is kept, because it adds ordering and a start point the table does not carry.

---

### Image 1, after H2 "So why does it seem to work?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A person walking outdoors with no headphones, mid-thought, warm daylight, flat-vector illustration; the visual for idle attention doing something useful. Type: ai-prompt. Suggested filename: idle-attention-walk.png]`
- **Type:** `ai-prompt`
- **Concept:** The recurring female character walking an ordinary tree-lined path in warm late-afternoon light, hands empty, ears empty, gaze middle-distance and unhurried, the visual for the section's claim that idle attention is doing something.
- **Suggested filename:** `idle-attention-walk.png`
- **Alt text:** `A woman walking an ordinary tree-lined path in warm afternoon light, hands empty and no headphones`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: a side-on, slightly-behind view of one woman walking left to right along an ordinary paved path, positioned in the left third of the frame with open space ahead of her, framed at roughly three-quarter length. She is in her early thirties, warm mid-brown skin, dark hair loosely tied back, wearing a soft mustard jumper, olive trousers and worn trainers, carrying nothing. Her hands are empty and swinging naturally, her ears are empty, no headphones, no earbuds, no phone anywhere in the frame. Her expression is calm, faintly amused, gaze resting in the middle distance: she is thinking, not searching for something and not sad.

  Background: a plain suburban walking route, not a beauty spot. A line of leafy trees along the right side of the path throwing dappled shade, a low brick wall, one lamppost, a couple of loose leaves on the path. Everything behind her is simplified and low-contrast so she stays the subject. Warm late-afternoon sun coming from the front-right, long soft shadow stretching behind her, a wash of honey light across the paving.

  Palette and mood: warm, everyday, unhurried, slightly ordinary on purpose. Honey-gold light, warm sand paving, mustard and olive clothing, muted sage and olive foliage, warm terracotta brick. Brand teal (#0E9F8E) appears only as a small accent such as the stripe on her trainers. Brand blue (#2B6CB0) does not appear. Never a blue-dominant scene, never a cold grey or overcast palette. Clean bold outlines, soft cel shading, flat colour, generous empty space in the upper right.

  This is an ordinary walk on an ordinary evening, not a fitness shoot and not a wellness advert: no activewear, no water bottle, no fitness tracker, nothing branded.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions, numbers or signage, brain, brain diagram, neurons, synapses, neural pathways, glowing head, thought bubbles filled with icons, dopamine molecule, chemical structure, medical illustration, meditation pose, lotus position, halo, sparkles, glowing aura, phone, smartphone, tablet, smartwatch, fitness tracker, headphones, earbuds, wired earphones, screens of any kind, fake UI chrome, notification icons, guilty or ashamed expression, sad or lonely expression, slumped posture, activewear, running gear, gym clothing, water bottle, branded logos, extra limbs, extra or malformed fingers, six fingers, warped face, distorted anatomy, two heads, second person in frame, children, photorealism, 3D render, stock photo, cold blue or monochrome blue scene, blue-dominant background, grey overcast sky, dark or moody grading, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("One illustration per H2 section", recurring female character where a person fits) and §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` look; explicitly NOT the cold blue `student-desk-spiral` or `rocketbook-workflow`). Keep the character visually consistent with the woman on `blog-ops/assets/how-to-take-notes-on-ipad/featured.png`.
- **Source data (if any):** none rendered in the image. The concept illustrates `facts.md` §Named examples (the default mode network, "the group of brain structures that becomes more active when you are idle"), but it deliberately depicts the **behaviour**, never the brain: see the text warning below.
- **Text-in-image warning:** this image must carry NO text at all. Any lettering the model adds is a defect and the slot should be re-generated. **Critical constraint for this slot specifically:** the source fact is a neuroscience term, and the obvious wrong illustration is a glowing brain. The draft's own words are "neither of them needs a diagram of your brain to explain", so a brain in this image would contradict the paragraph it sits beside. Idle attention is shown as a person walking, and nothing else.
- **Why this and not remotion/screenshot:** it is a warm human moment with no data content and no exact text, which is the `ai-prompt` case per `custom-instructions.md` §Image style. Remotion's flat geometric card-and-arrow language cannot produce a walking figure in dappled light, and there is no screen to capture.

---

### Image 2, after H2 "The viral version versus what the clinician who coined it suggested" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Two-panel flat-vector contrast, left panel a figure sitting alone in an empty room staring at a blank wall, right panel the same figure reading in a warm lamp-lit corner. Type: ai-prompt. Suggested filename: viral-versus-original.png]`
- **Type:** `ai-prompt`
- **Concept:** A two-panel flat-vector contrast of the same woman: on the left she sits upright and stoically bored on a hard chair in a stripped, echoing white room facing a blank wall; on the right she is folded into a warm lamp-lit armchair with a book, the phone face-down on the side table beside her.
- **Suggested filename:** `viral-versus-original.png`
- **Alt text:** `Two panels: the same woman on a hard chair facing a bare wall, then reading in a warm lamp-lit armchair`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, split into two equal side-by-side panels divided by a single thin vertical line in light warm grey. No title text, no panel labels, no lettering anywhere.

  The SAME woman appears in both panels: early thirties, warm mid-brown skin, dark hair loosely tied back, mustard jumper, olive trousers. Keep her face, hair and clothing identical across the two panels so a reader recognises her as one person in two situations.

  LEFT PANEL, the austere version: a stripped, echoing room in cool bone-white and pale putty. Bare walls, bare floorboards, one uncovered window with flat grey daylight, nothing else. She sits bolt upright on a hard wooden dining chair placed in the middle of the empty floor, facing a completely blank wall, hands flat on her knees, feet together. Her expression is patient, stoic and faintly unimpressed, the look of someone waiting out a boring meeting: NOT sad, NOT ashamed, NOT defeated, NOT crying, NOT slumped. The room is the absurd thing here, not her. The vast empty floor and the blank wall should dominate the panel and make it feel deliberately, comically bare.

  RIGHT PANEL, the liveable version: a warm cosy corner of an ordinary living room. She is curled sideways into a soft brick-red armchair with her legs tucked under her, holding an open paperback, a wool throw over the chair arm, reading with a small relaxed half-smile. Beside her, a low walnut side table carries a chipped cream mug and one plain dark phone lying FACE DOWN with its blank back up, no screen visible and no glow. A warm floor lamp with a honey shade at the right edge pools golden light over the chair, a small trailing houseplant behind her, a rug underfoot.

  Palette and mood: the contrast is warmth, not good versus evil. Left panel drained and neutral (bone white, pale putty, cool oatmeal, flat grey daylight) but NEVER blue-tinted, NEVER dark, NEVER menacing. Right panel warm and full (walnut, brick red, honey lamplight, cream, muted sage foliage). Brand teal (#0E9F8E) appears only as one tiny detail in the right panel, such as the book cover spine. Brand blue (#2B6CB0) does not appear at all. Clean bold outlines, soft cel shading, flat colour, both panels the same drawing style and the same line weight.

  Aspect ratio 3:2, so each panel is a tall portrait rectangle.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; each of the two panels then reads as a tall portrait frame, which suits a seated figure in both halves)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions, panel titles, numbers, tick marks, cross marks, thumbs up or down, brain, brain diagram, neurons, synapses, neural pathways, glowing head, dopamine molecule, chemical structure, medical illustration, guilty or ashamed expression, crying, tears, despair, slumped or hunched posture, head in hands, foetal position, prisoner or cell imagery, bars on the window, chains, handcuffs, straitjacket, padded cell, interrogation room, harsh overhead spotlight, horror or menacing atmosphere, dark or moody grading, phone screen visible, screen glow, notification icons, app icons, fake UI chrome, hand reaching for a phone, crossed-out phone, red prohibition circle, meditation pose, lotus position, monk robes, candles, incense, two different women, mismatched character between panels, extra limbs, extra or malformed fingers, six fingers, warped face, distorted anatomy, children, photorealism, 3D render, stock photo, blue-dominant background, cold blue or monochrome blue scene, navy walls, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("One illustration per H2 section") and §Illustration palette (warm right panel is the `finished-notebooks-shelf` benchmark; the left panel is drained but never blue, since blue is a link accent on this blog and never a scene ground). Same character as Image 1 and Image 4.
- **Source data (if any):** none rendered in the image. The contrast tracks `facts.md` §Named examples (the "stare at a wall" version currently circulating, and the documented viral distortion) against §Statistics (Sepah's moderate cadence), but the numbers live in the markdown table directly above the image, not in the image.
- **Text-in-image warning:** this image must carry NO text at all, and this slot is the highest-risk one for stray lettering because a two-panel comparison invites the model to add "before/after" captions. It must not: the draft's own table at lines 59 to 64 already labels both columns in real, SERP-eligible HTML, and a redundant, likely-misspelled painted label would be a defect. Warmth and posture carry the contrast. Re-generate if any lettering appears.
- **Why this and not remotion/screenshot:** deliberately a scene, not a chart. The section already carries a four-row markdown comparison table, and the outline's image rules bar duplicating a table as a chart, so the image's job is to make the contrast felt rather than restate it. That is illustration work, which is the `ai-prompt` case per `custom-instructions.md` §Image style. Nothing exists to screenshot.

---

### Image 3, after H2 "How to do a dopamine detox right" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A simple stepped diagram of the graduated cadence, three ascending steps labeled an evening window of one to four hours, then one lower-stimulation day a week, then an occasional longer stretch. Type: remotion. Suggested filename: graduated-cadence-steps.png]`
- **Type:** `remotion`
- **Concept:** Three ascending staircase risers carrying the graduated cadence in order, the first riser accent-tinted and tagged START HERE (an evening window of 1 to 4 hours), the second neutral (1 lower-stimulation day a week), the third neutral and explicitly tagged OPTIONAL (an occasional longer stretch).
- **Suggested filename:** `graduated-cadence-steps.png`
- **Alt text:** `Three ascending steps: an evening window of one to four hours, one day a week, then an optional longer stretch`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. This is an IN-POST slot: **NO title, NO subtitle.**

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `GraduatedCadenceSteps`
- **Component file:** `tools/remotion/src/GraduatedCadenceSteps.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token from `src/theme.ts`, matching every other composition in this project); final render at `--scale=2`, giving 3600 x 2400.
- **PREREQUISITE, do this first:** repair `tools/remotion/src/Root.tsx` before registering anything. The `FourCorePagesMap` `<Still>` at line 81 is missing its closing line, so the file does not parse. Insert this line immediately after `    <Still id="FourCorePagesMap" component={FourCorePagesMap}`:
  ```tsx
        width={CANVAS.width} height={CANVAS.height} />
  ```
  Then register this slot alongside the others:
  ```tsx
  <Still id="GraduatedCadenceSteps" component={GraduatedCadenceSteps}
    width={CANVAS.width} height={CANVAS.height} />
  ```
  plus the matching `import { GraduatedCadenceSteps } from "./GraduatedCadenceSteps";` at the top. `component` takes the component reference, never a JSX element.
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` imported from `./BlogWatermark` and left untouched (it self-positions bottom-left at `SAFE_MARGIN` / bottom 48, top edge around y 1118). Canvas background `palette.background`. All content inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - **Fixed coordinate frame** (declare these as module constants and derive every position from them; never eyeball a pixel, per the adapter's mapping rule):
    - `STEP_COUNT = 3`, `STEP_W = 480`, `STEP_GAP = 60`
    - `TOTAL_W = STEP_COUNT * STEP_W + (STEP_COUNT - 1) * STEP_GAP` = 1560
    - `LEFT_X = 120` (equals `SAFE_MARGIN`, so the block spans 120 to 1680 and is centred on the 1800 px canvas)
    - `BASELINE_Y = 1040` (leaves about 78 px of clear space above the watermark's top edge)
    - `BASE_H = 400`, `STEP_RISE = 240`
    - `xAt = (i) => LEFT_X + i * (STEP_W + STEP_GAP)` gives 120, 660, 1200
    - `heightAt = (i) => BASE_H + i * STEP_RISE` gives 400, 640, 880
    - `topAt = (i) => BASELINE_Y - heightAt(i)` gives 640, 400, 160 (the tallest riser's top sits 40 px below `SAFE_MARGIN`, so the staircase fills the canvas without touching the top edge)
  - **Layout, bottom to top:**
    1. **Baseline rule.** A single 1 px `palette.border` horizontal line from `LEFT_X` to `LEFT_X + TOTAL_W` at `BASELINE_Y`. All three risers sit on it. Mimics `SevenDayRampDiagram.tsx`.
    2. **Three risers**, one per step, each `STEP_W` wide, `heightAt(i)` tall, left edge at `xAt(i)`, bottom edge at `BASELINE_Y`. Card recipe from the adapter's §Card design language, with one deliberate change: `borderRadius: "16px 16px 0 0"` (top corners only) so each riser reads as sitting on the baseline rather than floating above it. Standard two-layer shadow, `padding: "28px"`.
       - **Riser 1 = the emphasis / outcome variant** and the composition's ONE accent element: background `rgba(14,159,142,0.10)`, border `2px solid palette.accent`. This is the section's whole argument ("start with a window, not a whole day"), so the accent sits on the lowest step deliberately, not on the tallest one. Do not add a second accent element anywhere.
       - **Risers 2 and 3 = the neutral variant**: `palette.surface`, `1px solid palette.border`.
       - Riser 3 conveys "optional" with `palette.muted` body text and an explicit `OPTIONAL` eyebrow, never with `opacity < 1` (per the adapter's §Color conventions).
    3. **Riser content**, top-anchored inside each riser's padding box (content width 480 - 56 = 424 px), stacked with fixed gaps:
       - **Eyebrow.** `fonts.sans`, 24 px, weight 700, uppercase, `letterSpacing: 2.4`. On riser 1 it is a pill: background `rgba(14,159,142,0.10)`, text `palette.accent`, `padding: "10px 20px"`, `borderRadius: 999`, inline-block. On risers 2 and 3 it is plain `palette.muted` text with no pill, so the accent stays unique to riser 1.
       - 20 px gap.
       - **Headline.** `fonts.sans`, 36 px, weight 700, `palette.text` on risers 1 and 2, `palette.muted` on riser 3. `lineHeight: 1.2`. Carry the line breaks explicitly as an array of strings per riser so no line ends on an orphan word (values below).
       - 16 px gap.
       - **Value line(s).** `fonts.mono`, 30 px, `palette.text` on risers 1 and 2, `palette.muted` on riser 3, `lineHeight: 1.3`. Mono because these read as data, per the adapter's §Typography.
       - 12 px gap.
       - **Sub-line.** `fonts.sans`, 26 px, weight 500, `palette.muted`, `lineHeight: 1.3`.
       - Budget check: riser 1 is the shortest at 400 px tall, giving 344 px of content box. Eyebrow pill 46 + 20 + headline two lines 87 + 16 + value one line 39 + 12 + sub one line 34 = 254 px, comfortably inside. Verify in the render rather than trusting the arithmetic.
  - **Copy, exact strings** (no em dashes anywhere, per the adapter's §Typography glyph rule; no enclosed or circled glyphs, no literal check or cross characters):
    - **Riser 1** (accent): eyebrow `START HERE`; headline lines `An evening` / `window`; value `1 to 4 hours`; sub `At the end of a workday`
    - **Riser 2** (neutral): eyebrow `NEXT RUNG`; headline lines `One lower-` / `stimulation day`; value `1 day a week`; sub `Same one or two behaviors`
    - **Riser 3** (neutral, muted): eyebrow `OPTIONAL`; headline lines `An occasional` / `longer stretch`; value line 1 `1 weekend a quarter`; value line 2 `1 week a year`; sub `Only if you want it`
    - Riser 2's headline breaks after the existing hyphen in "lower-stimulation", which is legitimate and keeps both lines inside the 424 px content width. If it still overflows at render, break as `One lower-stimulation` / `day` at 32 px rather than rewording the label.
  - **Palette:** per `blog-ops/profile/image-style.md` and the adapter's §Color conventions, all via `src/theme.ts` tokens. Never inline a hex; the one literal in the file is the accent tint `rgba(14,159,142,0.10)`, which matches the tint already used in `SevenDayRampDiagram.tsx` and `CostTierKey.tsx`. `palette.warn` is not used at all: nothing in this diagram is a failure state, and tinting the optional rung red would tell the reader that skipping it is a mistake, which the draft explicitly denies ("I am naming them because they exist, not because you owe anyone a week").
  - **Typography:** per `blog-ops/profile/image-style.md`, via the `fonts` token (`fonts.sans` Montserrat for eyebrows, headlines and sub-lines; `fonts.mono` for the value lines).
  - **Icons / SVG assets:** none. `tools/remotion/public/` was checked and nothing there is needed; the composition is pure JSX with one SVG baseline rule (or a 1 px div, either is fine).
  - **Arrows / connectors: none, deliberately.** The ascending staircase plus the `START HERE` / `NEXT RUNG` / `OPTIONAL` eyebrows carry the direction on their own. Adding arrows across the 60 px gaps at three different heights would clutter the frame without adding meaning, and the adapter reserves the accent stroke for at most one path per diagram, which the accent riser already spends.
  - **Card recipe to use:** the adapter's neutral variant for risers 2 and 3, the emphasis / outcome variant for riser 1, both with the top-corners-only radius noted above.
- **Source data (if any):** `facts.md` §Statistics, line 15: "1 to 4 hours at the end of a workday, one weekend day per week, one weekend per quarter, one week per year", the graduated schedule Cameron Sepah originally proposed, verified against Harvard Health. **Every number in this composition traces to that single line and nothing else.** Do not invent a day count, a week count, a duration, or a percentage. In particular: riser 2 is "1 day a week" because the source says one weekend day per week, and riser 3's two value lines are the source's own "one weekend per quarter, one week per year", which the draft names as genuinely optional at H3 4.3, which is why the eyebrow reads OPTIONAL.
- **Reference composition to mimic:** `tools/remotion/src/SevenDayRampDiagram.tsx`. It is the closest existing composition in this project, an ascending staircase of labelled risers on a baseline rule, and this is an in-post diagram, so its layout may be mimicked freely as well as its code conventions (theme imports, the fixed-coordinate-frame constants, the `xAt` / `heightAt` / `topAt` helper pattern, `cardShadow` and `accentTint` module constants, `<BlogWatermark />` usage). Differences: three risers rather than seven, so each is far wider and carries its labels inside the riser rather than in a separate label box above it.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still GraduatedCadenceSteps --output=out/preview-graduated-cadence-steps-v1.png
  ```
- **Final export command** (renders directly into this post's asset folder in the CURRENT tree; `REPO` is derived dynamically so this is correct in a git worktree as well as the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still GraduatedCadenceSteps --scale=2 \
    --output="$REPO/blog-ops/assets/dopamine-detox/graduated-cadence-steps.png"
  ```
- **Why this and not a real screenshot:** there is nothing to screenshot, this is a method diagram with exact numeric labels. It is `remotion` rather than `ai-prompt` for the reason the ladder exists: the whole point of the image is three verbatim numeric strings from `facts.md`, and Remotion renders real text that is exact by construction, while a generator would be free to invent "3 hours" or "2 days a week" in a health-adjacent post. This is also the one slot `custom-instructions.md` §Image style reserves Remotion for ("`remotion` only for genuine diagrams/charts").

---

### Image 4, after H2 "What to do with the hours you get back" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A reclaimed evening scene, hands busy at a kitchen table with cooking or sketching, no screen in frame, warm lamp light, flat-vector illustration. Type: ai-prompt. Suggested filename: reclaimed-evening.png]`
- **Type:** `ai-prompt`
- **Concept:** A close, over-the-shoulder view of two hands mid-task at a warm lamp-lit kitchen table, slicing vegetables on a worn wooden board with the cooking half-done around them, no screen anywhere in frame: the reclaimed hour actually being used.
- **Suggested filename:** `reclaimed-evening.png`
- **Alt text:** `Hands slicing vegetables on a worn board at a warm lamp-lit kitchen table, with no screen in sight`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: a close three-quarter view looking down and across a warm walnut kitchen table, cropped so the work fills the lower two thirds of the frame. Two hands enter from the lower left, cropped at the wrists, mid-task: the left hand steadying a red onion, the right holding a small kitchen knife part-way through a slice. Beneath them a worn end-grain wooden chopping board, visibly used, with a scatter of already-cut onion, a few sprigs of thyme and two halved cherry tomatoes on it. Around the board, arranged the way a real kitchen looks rather than a styled shoot: an open enamel pot with a wooden spoon resting across it, a chipped cream mug, a folded tea towel with one corner hanging off the table edge, a small dish of salt, and a couple of loose onion skins nobody has cleared yet. No face, no head, no full person in frame.

  Background: the upper third shows a simplified, low-contrast kitchen wall with a couple of open shelves holding jars and a small trailing plant, plus the warm glow of a low pendant lamp entering from the top right. Absolutely NO screen anywhere in the image: no phone, no tablet, no laptop, no television, no smart speaker, no digital clock, no microwave display.

  Palette and mood: warm, absorbed, ordinary weeknight. Walnut and honey wood tones, cream enamel, deep red onion, muted sage and olive herbs, warm terracotta accents, golden lamplight pooling on the board with soft short shadows. Brand teal (#0E9F8E) appears only as one small accent such as the knife handle. Brand blue (#2B6CB0) does not appear. Never a blue-dominant scene, never cold grey or studio light. Clean bold outlines, soft cel shading, flat colour, a little breathing room at the top of the frame.

  This is an ordinary kitchen mid-task, not a food-photography set: the board is scarred, the mug is chipped, the skins have not been tidied away, and the meal is clearly half-made rather than plated.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions, recipe cards or numbers, brain, brain diagram, neurons, dopamine molecule, chemical structure, medical illustration, phone, smartphone, tablet, laptop, television, smart speaker, digital clock, microwave display, any screen, screen glow, fake UI chrome, notification icons, faces, heads, full people, children, extra limbs, extra or malformed fingers, six fingers, warped or fused hands, hand holding the knife by the blade, photorealism, 3D render, stock photo, food photography, glossy influencer flat-lay, styled photoshoot, plated restaurant dish, garnish, pristine new cookware, brand logos, packaging, price tags, cold blue or monochrome blue scene, blue-dominant background, grey studio backdrop, dark or moody grading, cluttered unreadable surface, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("One illustration per H2 section") and §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` look; explicitly NOT the cold blue `student-desk-spiral` or `rocketbook-workflow`). Same hands-only, over-the-lap framing family as `blog-ops/assets/screen-free-hobbies/hands-busy-in-progress.png`, but a different room, task and palette so the two do not read as the same picture.
- **Source data (if any):** none. The task is drawn straight from the draft's own bullet list in this section ("cooking something that needs attention, not something you can make while watching a video"), and slicing an onion by hand is the version of that which is unmistakably attention-requiring.
- **Text-in-image warning:** this image must carry NO text at all. Any lettering the model adds is a defect and the slot should be re-generated. Jar labels on the background shelves are the likely offender: they must stay blank.
- **Why this and not remotion/screenshot:** a tactile, warm scene with no data content and no exact text, which is the `ai-prompt` case per `custom-instructions.md` §Image style. Remotion's flat geometric language cannot produce hands mid-task in lamplight, and the entire point of the section is that there is no screen here to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/dopamine-detox/
├── featured.png
├── idle-attention-walk.png
├── viral-versus-original.png
├── graduated-cadence-steps.png
└── reclaimed-evening.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. Repair `src/Root.tsx` first (see §Editor notes), write the component in `src/GraduatedCadenceSteps.tsx`, register the `<Still>`, export via the final command in the Image 3 spec. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; never inline a hex, a font stack, or a canvas dimension.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch). One slot per codex run; loop the four slots sequentially.
3. **Screenshots:** none in this post, deliberately. See §Editor notes.
4. **Watermark and polish:** `<BlogWatermark />` for the Remotion slot; the `olgapak.com` wordmark is requested inside the featured prompt only. Section illustrations carry no wordmark, matching the existing library. Output format: PNG for every slot.

## Naming conventions (from `standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `graduated-cadence-steps.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless `generate-images` records one `failed`.
2. On a failure, paste that slot's `Prompt:` block into any AI image tool and save the output to `blog-ops/assets/dopamine-detox/` under the exact suggested filename.
3. Verify file sizes (under 200 KB for featured, under 500 KB for in-post is a good rule of thumb).
4. Tick the "Create images" section in `action-items.md` once all five files exist.

## Editor notes

- **BLOCKER for the Remotion slot: `tools/remotion/src/Root.tsx` does not parse.** The `<Still id="FourCorePagesMap" component={FourCorePagesMap}` element at line 81 is missing its `width={CANVAS.width} height={CANVAS.height} />` line, so the next tag (`CostTierKey`, line 82) opens before it closes. This is the same class of defect the `screen-free-hobbies` plan flagged for three other elements, so the repair is regressing on merge. Until it is fixed, **no composition in this project renders**, including this post's. The fix is one inserted line, specified verbatim in the Image 3 production spec. I did not edit it: the planner is spec-only, and this is a repo-wide fix rather than a change to this post's files. Flagging it here and in the handoff so the builder does it before the first render rather than discovering it as a build failure.
- **Slot count matches exactly, no delta.** `outline.md` §Image placement plan lists 1 featured + 4 in-post; `draft-v1.md` carries exactly 4 `[IMAGE:]` placeholders, at lines 42, 57, 74 and 110, in the same sections (H2 2, H2 3, H2 4, H2 5) and the same order. Every placeholder's declared type and suggested filename is kept exactly as the writer placed it; nothing was overridden, added, dropped, or re-ordered.
- **Featured hygiene: clean.** No `[IMAGE:]` placeholder uses `featured.png` and none duplicates the featured concept. Image 2's right panel and the featured scene both involve a warm lamp-lit room, so the specs deliberately pull them apart: the cover is a tabletop with no person and no chair, Image 2 is a seated figure with an armchair and no table surface as subject.
- **WARNING, table-duplicate check on Image 3, examined and resolved in favour of keeping the diagram.** The hygiene rule triggers on distance: Image 3 is a chart-style `remotion` slot at line 74, and the markdown table at lines 59 to 64 is within the plus-or-minus-20-line window, with its final row reading "A cadence: one weekend day per week, one weekend per quarter, one week per year". So there is real content overlap. The diagram is kept because it adds three things the table cannot: an **order** (the table lists the cadence as one flat cell, the staircase says which rung comes first), a **start point** (the accent riser and the `START HERE` tag make the entry rung the visual answer, which is the section's entire argument and is not in the table at all), and the **evening window as rung one** rather than as a contrast against the 24-hour stunt. The two also serve different sections: the table argues "the viral version is not the real one", the diagram answers "so what do I actually do". If you disagree, the cheaper cut is the diagram, not the table, since the table is SERP-eligible HTML.
- **Priority-ladder check.** `remotion` is enabled and sits at the top of the ladder, but `custom-instructions.md` §Image style overrides it for this blog's scene and hero slots ("`remotion` only for genuine diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals"). The one genuinely diagrammatic slot (Image 3, three exact numeric strings) is `remotion`. Images 1, 2 and 4 are mood-and-place scenes with no data content and no exact text, which is the correct `ai-prompt` case. No slot is a `screenshot` that should have been a `remotion` mockup, because there is no `screenshot` slot at all.
- **No `screenshot` slot, deliberately, and none should be added.** There is no product UI, no external screen, and no app anywhere in this post; the one phone in the image set is face-down by design. A screenshot slot would also be the one type `generate-images` cannot produce, so it would sit as a manual action item and stall Stage 4b.5 staging on a missing file.
- **Featured type is locked and was not touched.** `images.featured_default: ai-prompt`, plus the standing custom instruction not to flip it to `remotion` for auto-render convenience. Recorded as `ai-prompt`.
- **Featured archetype: `scene-vignette`.** Ledger union (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md` table) sorted by date ends with `2026-09-02 screen-free-hobbies` = `negative-space` and `2026-08-26 bullet-journal-for-beginners` = `big-number`, so both are blocked. `scene-vignette` was last used on 2026-08-19 (`how-to-take-notes-on-ipad`), three posts back, with a completely different motif (a woman handwriting on an iPad at an amber desk) and palette. This post's own rotation entry is written to `blog-ops/featured-log/2026-09-07-dopamine-detox.md`; the legacy table is left untouched as read-only history.
- **Judgment call, and the one worth your attention: the featured motif is adjacent to the previous cover.** `screen-free-hobbies` (2026-09-02, the immediately preceding post) already used a face-down phone on its cover. The specs pull them apart on every axis that matters at thumbnail size: that one is a straight-overhead flat-lay on empty sand-oat ground with the phone isolated across a void (`negative-space`); this one is a three-quarter-angle evening tabletop with lamplight, a room behind it, and the phone tucked at the near edge of a lit scene (`scene-vignette`). Different archetype, different ground hue, different camera. If you look at the two side by side and still see one picture, the cheapest fix is dropping the phone from this cover entirely and letting the book, mug and lamplight carry it: the title already says "Dopamine Detox", so the phone is confirming, not carrying, the concept.
- **Judgment call: featured ground is dusty rose-clay `#E9A896`, chosen by elimination.** The existing cover library already owns amber/marigold, sage green (twice), terracotta, navy, teal, royal blue, lavender, and sand-oat (the most recent). Rose-clay is warm, unused, and suits an evening scene. It is the nearest neighbour to terracotta (`time-blocking`, 2026-07-30, eight posts back and a different archetype), so if it reads as a terracotta repeat at thumbnail size, deepen it toward a warm mulberry rather than reaching for a hue already spent.
- **Deliberate deviation: the featured title's accent word is brand teal `#0E9F8E`, not the usual red.** `image-style.md` says the accent word is "usually red" (`#E11D48`), but red lettering on a rose-clay ground is a low-contrast same-family pairing and would read muddy at OG-crop size. Teal is a locked brand token, complementary to rose, and maximally legible. The accent word is "Right", the title's payoff. If you would rather keep the red, change the ground instead of the word.
- **Deliberate deviation: no recurring female character on the cover.** `image-style.md` calls for her "where a person fits". A person does not fit this cover without importing the exact thing the post refuses to do, since any figure near a phone risks reading as guilty or withdrawn, and the tonal brief forbids that. She does appear in Image 1 and in both panels of Image 2, and keeping her off the cover also keeps the cover to three focal objects. Note this is now three covers in a row without her (`bullet-journal-for-beginners`, `screen-free-hobbies`, this one), so the next post is a good place to bring her back.
- **No chart needs data that is not already in `facts.md`.** The single diagram's every string comes from `facts.md` §Statistics line 15, and no prompt in this file asks for a number, a percentage, or a date. `facts.md` says plainly that this SERP reports "no percentages, no study effect sizes, and no timelines", and that absence is deliberate: if anyone later wants a chart here, it needs newly sourced data first. Do not let a generator invent one.
- **Ambiguity worth knowing about (Image 3, riser 3).** The draft names the longer stretches as "a weekend per quarter and a week per year", and calls them "genuinely optional". I rendered both as muted value lines under an `OPTIONAL` eyebrow, because dropping them would make riser 3 say nothing concrete, and promoting them would contradict the draft. If you would rather the diagram stayed at two rungs, cut riser 3 entirely and rebalance `BASE_H` and `STEP_RISE`; do not keep riser 3 while deleting its `OPTIONAL` eyebrow, which would turn an explicitly optional stretch into a prescribed one in a health-adjacent post.
- **Content guardrails were applied as hard negative prompts on every `ai-prompt` slot, not just as prose.** Every prompt bans brains, neurons, receptors, molecules and chemical structures, and every prompt bans guilty, ashamed, defeated or addicted depictions along with chains, monsters and smashed phones. Image 1 carries the highest mechanism risk (its underlying fact is the default mode network) and Image 2 the highest shaming risk (its left panel is the austere viral version), so both carry an extra explicit note in their text warning. If a render comes back with a glowing brain or a miserable figure, that is a re-generate, not a ship-with-note.
