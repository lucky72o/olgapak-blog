# Images: best-blue-light-glasses

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/best-blue-light-glasses/outline.md` (image placement plan), `blog-ops/drafts/best-blue-light-glasses/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/best-blue-light-glasses/facts.md` (for diagram data), `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: the `image-builder` agent at Stage 4a.5 (and the human for anything it cannot render).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/best-blue-light-glasses/`

> **Read this before rendering the Remotion slot.** `tools/remotion/src/Root.tsx` is BROKEN again in this worktree: the `<Still id="FourCorePagesMap" ...>` element is missing its `width={CANVAS.width} height={CANVAS.height} />` closing line, so the next `<Still>` opens before it closes and the file does not parse. No composition in this project renders until it is repaired. Exact fix in §Editor notes and in the Image 3 production spec.

> **Health-claim guardrail for this whole post.** This is a health-adjacent guide whose thesis is that the evidence for these lenses is weak. No image, no alt text, no in-image copy may state or imply that blue light glasses treat, prevent, protect against, cure, or fix anything (eye strain, eye damage, sleep, headaches). No shield, force-field, deflected-beam, before/after-symptom, or clinical/medical imagery in any prompt. Every alt text below describes only what is visibly in the frame.

## Featured image

> **Frontmatter only.** The `wordpress-rest` adapter's frontmatter template defines NO cover/heroImage field: this asset ships as a WordPress media upload attached via `featured_media` at Stage 4b.5, which is why the filename is fixed at `featured.png`. It is NOT one of the draft's `[IMAGE:]` placeholders and must never be duplicated inline.

- **Type:** `ai-prompt`. From `images.featured_default` in `blog-ops/config.yaml`, and locked by `blog-ops/profile/custom-instructions.md` §Image style ("Featured image is always `ai-prompt`... do NOT override the featured slot to `remotion`/anything else"). `ai-prompt` is a member of `images.enabled` (`[ai-prompt, screenshot, remotion]`). **Do not flip this slot to `remotion`.**
- **Dimensions:** 3:2, per `image-style.md` §Aspect ratio defaults. Target roughly 1800 x 1200 px. Keep the title block and every object inside the central 80% vertically so the 1.91:1 OG crop only slices empty ground.
- **Concept:** A quiet late-evening desk vignette on a flat pale dusk-mauve ground: an open notebook with a folded pair of glasses resting on the page, the warm pool of a desk lamp on one side and the cool spill of a laptop screen on the other, the post's whole argument (an evening, a screen, and a pair of glasses that is only one part of it) in one glance.
- **Archetype:** `scene-vignette`. One small illustrated moment rather than a diagram, which is what the outline's featured concept describes and what a nine-pick roundup needs (a cover about a time of day, not about one product). Rotation check, ledger union (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md` table, sorted by date): the last two prior posts are `2026-08-26 bullet-journal-for-beginners` = `big-number` and `2026-09-02 screen-free-hobbies` = `negative-space`, so **`big-number` and `negative-space` are off limits**. `scene-vignette` last ran on `2026-08-19` (how-to-take-notes-on-ipad), three posts back, and is not blocked. Alternatives weighed and rejected: `object-metaphor` (one oversized pair of glasses; genuinely tempting and the closest runner-up, rejected because a giant hero pair of glasses on the cover is exactly the "these are the answer" reading the post spends 2,000 words refusing, and it would also collide with the Image 3 lens diagram); `split-contrast` (clear versus amber; that is Image 3's job, and spending it on the cover would make the cover argue a sub-point instead of the thesis); `diagram-lite` (nothing here is a flow, and the skill says prefer anything else when the concept does not need one). The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `A pair of glasses resting on an open notebook at a desk in the evening, lamp beside a laptop`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector blog hero illustration on a single flat pale dusk-mauve background (roughly #D8B7C4), no gradient, no photographic texture, generous flat colour.

  Composition, scene-vignette archetype: ONE small, quiet illustrated moment sitting in the lower half of the frame, with the upper third left clear for the title. No panels, no cards, no arrows, no charts, no numbered callouts, no borders, no split screen.

  The scene, seen from a low three-quarter angle across a walnut desk surface: in the centre, an open notebook lying flat with faintly ruled cream pages, and a folded pair of ordinary thin-rimmed glasses resting on the open page, arms folded, one lens catching a soft warm highlight. To the right and slightly behind, the lower corner of an open laptop, its screen turned mostly away so only a pale cool light spills onto the desk. To the left, a small desk lamp with a honey-warm glow pooling across the wood. Nothing else on the desk. Empty mauve ground around the whole vignette, especially on the left.

  Warm lamplight is the dominant light in the scene; the laptop's light is a small, cool secondary spill, never blue beams, never rays, never a glow travelling towards the glasses.

  Upper third of the frame, on clear empty ground above the scene, the post title rendered EXACTLY as
  Best Blue Light Glasses for Students: 9 Honest Picks
  centred, wrapping across two lines, set in a playful hand-lettered script mixed with a bold rounded sans, dark near-black (#222222), with only the word "Honest" coloured warm red (#E11D48) as the single accent.

  Palette and mood: warm, calm, honest, unglamorous, late evening at home. Pale dusk-mauve ground, walnut and honey wood tones, cream paper, soft amber lamplight, near-black frames. Teal (#0E9F8E) appears only as a tiny detail such as the notebook's ribbon. Never a blue background, never a navy night-room scene, never a blue-dominant image. Clean bold outlines, soft cel shading, flat colour.

  Bottom-right corner: the small lowercase wordmark olgapak.com in a plain rounded sans, dark, at about 55% opacity.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; also the featured-slot default)
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, stock photo, glossy product shot, brand-new pristine eyewear on a display stand, packaging, price tags, brand logos or wordmarks, glasses case with a brand name, visible laptop screen content, UI chrome, app icons, blue light beams, coloured rays, light being blocked or deflected by the lenses, shield or force-field motif, before-and-after comparison, red irritated eyes, eye anatomy, medical or clinical imagery, doctor, optician, prescription chart, faces, people, hands, extra limbs, extra or malformed fingers, misspelled or garbled lettering, duplicate text blocks, extra captions or labels beyond the title, cluttered desk, more than three objects, gradient background, blue-dominant background, navy or royal-blue ground, sage-green ground, marigold or amber ground, terracotta ground, sand or oat ground, dark or moody colour grading, heavy black shadows, watermark other than the olgapak.com wordmark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script plus bold rounded sans, one red accent word, `olgapak.com` wordmark, one flat single-colour ground) and §Illustration palette (warm, never blue-dominant). Tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/screen-free-hobbies/featured.png` (sand, `negative-space`), `blog-ops/assets/bullet-journal-for-beginners/featured.png` (orange, `big-number`). **Anti-convergence reference: `blog-ops/assets/how-to-stop-doomscrolling/featured.png` is a navy night-room scene with the recurring female character and a glowing phone. This cover must NOT look like it.** That is why the ground is pale mauve rather than dark, why no person is in frame, and why the crop is a desk vignette rather than a whole room.
- **Source data (if any):** none. The concept is editorial; the only number in the image is the "9" inside the title string.
- **Text-in-image warning:** this slot needs the post title rendered legibly and verbatim. After generation, read the PNG and check it character by character against `Best Blue Light Glasses for Students: 9 Honest Picks` (including the colon), plus the `olgapak.com` wordmark. If one character is wrong, re-generate once; if it is still wrong, the fallback is a human text overlay on a clean untitled render, never shipping garbled lettering. No other text may appear: no notebook writing, no laptop screen copy, no labels.
- **Why this and not remotion/screenshot:** `images.featured_default` plus a standing custom instruction lock this slot to `ai-prompt`, and this blog's hero convention is a hand-lettered illustrated cover, which Remotion's flat geometric language does not produce. Nothing exists to screenshot.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md`; sizing, opacity, and position per the remotion adapter). Never inline a watermark, never reposition.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt only (bottom-right, about 55% opacity), matching the existing hero library. Section illustrations follow the library convention and carry NO wordmark.
- **Own-site/product UI screenshots:** none in this post.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** all four placeholders already sit after their section heading and the section's first body paragraph in `draft-v2.md` (lines 28, 81, 211, 229). Do not move them and do not edit their text.

**Table-redundancy rule:** `draft-v2.md` contains three markdown tables (the claims table in H2 1, the picks table in H2 3, the FAQ-adjacent none). None of the four image slots redraws any of them: three are scenes and the fourth (Image 3) is a two-lens comparison whose content appears in no table anywhere in the draft.

**Tone guardrail for every `ai-prompt` slot in this post.** The post argues that the marketing overstates the lenses and that habits and hours do the real work. So: no glossy eyewear product photography, no packaging, no brand marks, no "blocking" visual metaphors, no medical framing. Scenes are ordinary rooms with objects that look owned. The audience is students, so young adults only, never children.

### Image 1, after H2 "What the best blue light glasses can and can't do" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: a person rubbing tired eyes in front of a bright laptop late at night, a pair of blue light glasses set down beside the keyboard, warm desk lamp. Type: ai-prompt. Suggested filename: honest-verdict-tired-eyes.png]`
- **Type:** `ai-prompt`
- **Concept:** A young woman at a wooden desk late at night, pressing the heel of one hand against a tired eye while the open laptop lights her face, with a folded pair of glasses set down on the desk beside the keyboard, unworn.
- **Suggested filename:** `honest-verdict-tired-eyes.png`
- **Alt text:** `A student rubbing a tired eye at a bright laptop late at night, glasses set down beside the keyboard`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: a three-quarter view of a young woman in her early twenties sitting at a walnut desk late at night, seen from her left and slightly above the desk line, cropped at the waist. She has dark hair loosely tied up and wears a soft cream jumper. Her right elbow rests on the desk and she presses the heel of her hand against one closed eye, head tilted slightly down, tired rather than distressed. An open laptop sits in front of her, turned so the screen is mostly hidden from the viewer and only its pale cool light falls on her face and the desk edge. On the desk beside the keyboard, clearly NOT being worn, a folded pair of thin-rimmed glasses lying on their arms next to a closed notebook and a half-full mug. A small desk lamp on the right casts a honey-warm pool across the wood. Behind her, a plain warm-taupe wall in soft shadow with one dark window edge suggesting night.

  Palette and mood: warm, ordinary, honest, quietly tired. Walnut desk, warm taupe wall, cream knit, honey lamplight as the dominant light, and only a small pale cool spill from the laptop. Small teal (#0E9F8E) accent on the mug only. Never a blue-dominant scene, never a navy room, never cold studio light. Clean bold outlines, soft cel shading, generous empty space in the upper left of the frame.

  This is an ordinary student desk, not a photoshoot: the notebook is worn, the mug is chipped, nothing is new or arranged.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions or numbers, visible screen content, UI chrome, app icons, blue light beams, coloured rays, glowing blue aura, light being blocked or deflected, shield or force-field motif, before-and-after split, red irritated eyes, bloodshot eyes, eye anatomy diagram, tears, medical or clinical imagery, doctor, optician, eye chart, packaging, brand logos, price tags, glasses worn on the face, children, teenagers under 18, extra limbs, extra or malformed fingers, six fingers, warped or fused hands, distorted face, photorealism, 3D render, stock photo, glossy product shot, cold blue or monochrome blue scene, blue-dominant background, navy room, grey studio backdrop, dark or moody grading, cluttered desk, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("One illustration per H2 section") and §Illustration palette (warm, wood-toned, the `finished-notebooks-shelf` look; explicitly NOT the cold blue `student-desk-spiral` or `rocketbook-workflow`).
- **Source data (if any):** none. The scene tracks the section's argument (the strain is real, the lens is not what fixes it), but no figure or quote is rendered in the image. The glasses are deliberately OFF her face: the section says the evidence for wearing them is weak, so the image must not show them working.
- **Text-in-image warning:** this image must carry NO text at all. Any lettering the model adds is a defect and the slot should be re-generated.
- **Why this and not remotion/screenshot:** it is a human moment with warm light, not a diagram, so Remotion's flat geometric language cannot produce it. There is no real screen worth capturing, and this blog illustrates rather than photographs.

---

### Image 2, after H2 "The 9 best blue light glasses for students" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: flat-lay of several frame styles on a wooden desk beside a laptop, thin wire frames, chunky acetate frames and a wraparound amber pair. Type: ai-prompt. Suggested filename: frame-styles-flatlay.png]`
- **Type:** `ai-prompt`
- **Concept:** A straight-overhead flat-lay of three unbranded frame styles laid in a row on a walnut desk, thin wire, chunky black acetate and a wraparound amber pair, with the corner of a closed laptop entering one edge of the frame.
- **Suggested filename:** `frame-styles-flatlay.png`
- **Alt text:** `Overhead view of thin wire, chunky acetate and wraparound amber frames on a wooden desk`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: straight overhead view, looking directly down at a walnut desk surface. Three pairs of glasses laid out in a loose row across the middle of the frame, evenly spaced, each folded with its arms closed and each casting a soft short shadow. Left: a thin round wire-framed pair with near-colourless lenses. Centre: a chunky tortoiseshell acetate pair with square lenses and thick arms. Right: a wraparound pair with a single curved warm-amber lens, clearly and obviously tinted, the only strongly coloured object in the picture. Entering the frame from the top-right corner, the closed lid of a laptop in plain matte grey, no logo, cropped by the frame edge. Bottom-left, a small cream notebook and a pencil, partly cropped. Plenty of empty wood grain between the objects.

  Palette and mood: warm, tactile, ordinary. Walnut and honey wood grain, near-black and tortoiseshell frames, cream paper, one warm amber lens. Small teal (#0E9F8E) accent on the pencil only. Never a blue-dominant scene, never a cold grey studio flat-lay. Clean bold outlines, soft cel shading, flat colour, soft daylight from the upper left.

  These are used, ordinary frames, not a retail display: a light scuff on one arm, a fingerprint smudge on one lens, no stands, no boxes.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions, numbers, price tags or product codes, brand logos or wordmarks, retail display stands, boxes, packaging, cases with branding, shop shelves, blue light beams, coloured rays, glowing lenses, blue-tinted lenses, light being blocked or deflected, shield motif, medical or clinical imagery, eye chart, faces, people, hands, extra limbs, extra or malformed fingers, photorealism, 3D render, stock photo, glossy influencer flat-lay, styled marketing flatlay, more than three pairs of glasses, cluttered surface, cold blue or monochrome blue scene, blue-dominant background, grey studio backdrop, dark or moody grading, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (section illustration, flat-vector) and §Illustration palette (warm wood tones, the `finished-notebooks-shelf` benchmark). The overhead flat-lay framing follows `blog-ops/assets/best-pens-for-note-taking/ink-types-writing-sample.png` as the nearest in-library precedent for a "several variants of one object" section image.
- **Source data (if any):** none rendered. The three styles map to the shortlist's own spread (wire-framed picks such as the SOJOS SJ5511, chunkier acetate frames, and the dedicated amber evening pair), but the image carries no names, no ranking and no numbers. **Do not depict a specific real product.**
- **Text-in-image warning:** this image must carry NO text at all, and in particular no brand names on the arms of any pair. Any lettering the model adds is a defect and the slot should be re-generated.
- **Why this and not remotion/screenshot:** it is a tactile flat-lay of physical objects, which Remotion's flat diagram language cannot produce convincingly. A screenshot is impossible (nothing on screen), and a real product photo would mean naming a specific pair the post has not independently tested.

---

### Image 3, after H2 "Clear or amber: which pair do you actually need?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: a simple two-circle comparison diagram, a clear lens labelled "day, colour accuracy" and an amber lens labelled "evening, wind-down", with a short line of purpose under each. Type: remotion. Suggested filename: clear-vs-amber-lenses.png]`
- **Type:** `remotion`
- **Concept:** Two lens circles side by side, a clear one over true-colour dots and an amber one over the same dots visibly shifted, each captioned with when it is worn and what it is bought for, under a single honest footnote about the eye-strain evidence.
- **Suggested filename:** `clear-vs-amber-lenses.png`
- **Alt text:** `A clear lens circle labelled day beside an amber lens circle labelled evening, with a note under each`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. This is an IN-POST slot: **NO title, NO subtitle.**

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `ClearVsAmberLenses`
- **Component file:** `tools/remotion/src/ClearVsAmberLenses.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token, matching every other composition in this project); final render at `--scale=2`.
- **PREREQUISITE, do this first:** repair `tools/remotion/src/Root.tsx` before registering anything. The `FourCorePagesMap` `<Still>` is missing its closing line, so the file does not parse. Insert `      width={CANVAS.width} height={CANVAS.height} />` immediately after `    <Still id="FourCorePagesMap" component={FourCorePagesMap}`, then register this slot:
  ```tsx
  <Still id="ClearVsAmberLenses" component={ClearVsAmberLenses}
    width={CANVAS.width} height={CANVAS.height} />
  ```
  (plus `import { ClearVsAmberLenses } from "./ClearVsAmberLenses";` at the top). `component` takes the component reference, never a JSX element.
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` imported from `./BlogWatermark` and left untouched (it self-positions bottom-left at `SAFE_MARGIN`, bottom 48, top edge around y 1118), `palette.background` canvas, all content inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - **Local colour constants** (declare at the top of the file with this comment; this is the composition's only literal-colour deviation, and it follows the existing precedent of `lineLight` in `WeekGridTimeboxing.tsx`):
    ```tsx
    // No theme token encodes an amber lens tint, and the tint IS this diagram's
    // content, so the five constants below are local. Everything else is a token.
    const LENS_AMBER = "#E3A13C";       // amber lens fill
    const LENS_AMBER_EDGE = "#B87A22";  // amber lens rim
    const LENS_CLEAR_FILL = "rgba(255,255,255,0.92)";
    const SHIFTED = ["#9A7A3E", "#C2632F", "#8A8A32"]; // illustrative amber-shift of the three dots
    ```
  - **Fixed coordinate frame** (module constants; never eyeball a pixel):
    - `COL_CX = [560, 1240]`, `COL_W = 620`, `DIVIDER_X = 900`
    - `LENS_CY = 460`, `LENS_R = 170`, `DOT_R = 22`, `DOT_DX = [-64, 0, 64]`
  - **Layout, top to bottom:**
    1. **Two section-tag pills**, y 170 to 238 (height 68), each centred on its `COL_CX`. Background `palette.surface`, `1px solid palette.border`, `borderRadius: 999`, padding `16px 44px`, `fonts.sans` 30 px, weight 700, `palette.text`, uppercase, `letterSpacing: 2.4`, `whiteSpace: nowrap`. Copy: `CLEAR LENS` and `AMBER LENS`. **Both pills are neutral and identical.** The adapter's warn-tint/accent-tint pair is deliberately not used here: neither lens is the loser and neither is the winner, they answer different questions, and tinting one would make the diagram argue something the section explicitly refuses to argue.
    2. **~40 px gap**, then the two lens circles, SVG, centred on each `COL_CX` at `LENS_CY`, radius `LENS_R` (top 290, bottom 630). Left circle: fill `LENS_CLEAR_FILL`, stroke `palette.border`, `strokeWidth={6}`, plus one thin white highlight arc in the upper-left quadrant. Right circle: fill `LENS_AMBER`, stroke `LENS_AMBER_EDGE`, `strokeWidth={6}`, same highlight arc at low opacity.
    3. **Three colour dots inside each circle**, radius `DOT_R`, at `cx + DOT_DX[i]`, `cy = LENS_CY + 6`. Inside the CLEAR lens the three dots are `palette.primary`, `palette.warn`, `palette.accent` (true colour). Inside the AMBER lens the same three dots are `SHIFTED[0..2]` (the same hues pushed towards olive and burnt orange). This is the only place the diagram shows a difference rather than asserting one, and it is illustrative, not a colorimetric measurement.
    4. **When row**, y 690 to 750, `COL_W` block centred on each `COL_CX`, `fonts.sans` 46 px, weight 700, `palette.text`, uppercase, `letterSpacing: 2`, `textAlign: center`. Copy: `DAY` and `EVENING`.
    5. **Purpose block**, y 770 to 890, `COL_W` wide, centred on each `COL_CX`, `fonts.sans` 30 px, `palette.muted`, `lineHeight: 1.35`, `textAlign: center`. Carry the line breaks explicitly as an array of strings per column so no row ends on an orphan word:
       - Clear: `["What you are buying is an", "anti-reflective coating and a", "lens that does not shift colour."]`
       - Amber: `["A tint you can obviously see,", "worn only in the hours", "before bed."]`
    6. **Vertical divider**, a single SVG `line` at `x = DIVIDER_X` from y 170 to y 890, `palette.border`, `strokeWidth={1}`. The adapter's §In-post stacked comparisons prescribes a full-width HORIZONTAL divider for stacked halves; this composition is side by side because each half is a single circle plus three short lines and fits comfortably in a 620 px column, so the divider is rotated to match. Deviation is deliberate and noted in §Editor notes.
    7. **Footnote row**, one centred line spanning the full content width, y 915 to 950, `fonts.sans` 26 px, `palette.muted`, `textAlign: center`, `whiteSpace: nowrap`. Copy: `A 2023 Cochrane review of 17 trials: these lenses may not reduce eye strain with computer use.` This line is mandatory. It is what keeps a two-lens "pick one" diagram from reading as an endorsement.
    8. **One accent pill**, centred horizontally, y 985 to 1053: background `rgba(14,159,142,0.10)`, text `palette.accent`, `fonts.sans` 30 px, weight 700, `letterSpacing: 1.8`, padding `18px 46px`, `borderRadius: 999`, `whiteSpace: nowrap`. Copy: `NO SINGLE PAIR DOES BOTH JOBS`. This is the composition's single accent element and belongs to neither column. About 65 px of clear space remains above the watermark.
    9. **`<BlogWatermark />`** last, untouched.
  - **Copy, exact strings** (no em dashes anywhere, per the adapter's §Typography glyph rule): `CLEAR LENS` | `AMBER LENS` | `DAY` | `EVENING` | the two three-line purpose blocks above | `A 2023 Cochrane review of 17 trials: these lenses may not reduce eye strain with computer use.` | `NO SINGLE PAIR DOES BOTH JOBS`
  - **Copy that must NOT appear:** no blocking percentages, no "blocks X% of blue light", no nanometre figures, no "protects", "prevents", "reduces strain", "improves sleep", no brand names, no prices. The post refuses every one of those claims in prose and the diagram must not reintroduce them.
  - Palette: canvas `palette.background`, pills `palette.surface` with `1px solid palette.border`, headings and when-row `palette.text`, purpose blocks and footnote `palette.muted`, divider `palette.border`, dots `palette.primary` / `palette.warn` / `palette.accent` inside the clear lens only. `palette.accent` also appears once in the bottom pill. **`palette.warn` appears nowhere except as one true-colour dot inside the clear lens**, where it is a colour sample, not a warning state.
  - Typography: `fonts.sans` throughout. No `fonts.mono`: the only numeric strings are "2023" and "17" inside a prose sentence, which is prose, not data.
  - Icons / SVG assets: **none**. `tools/remotion/public/` is empty; do not add an asset for this slot. The lenses are plain SVG circles.
  - Arrows / connectors: none. Nothing flows from one column to the other; they are alternatives, not steps.
  - Card recipe to use: none. Two neutral pills plus circles, per the adapter's "stay sparse" rule for in-post comparisons.
- **Source data (if any):** the footnote is `facts.md` lines 13 and 14 (2023 Cochrane systematic review, 17 randomised controlled trials, low-certainty evidence of no difference in subjective visual fatigue), both `status: verified`, and it matches the draft's own wording in H2 1. The `EVENING` column's framing tracks `facts.md` line 26 (blue light suppresses melatonin about twice as much as green light at equal photon density) and line 20 (the AAO's evening advice is behavioural, not optical), but **neither number is rendered**: the image makes no efficacy claim. The lens tints and the shifted dots are hardcoded illustrative values, explicitly not measurements. **Nothing here needs fresh data.**
- **Reference composition to mimic:** `tools/remotion/src/InkFamiliesTradeoff.tsx` for CODE conventions (theme imports, module-level coordinate constants, a small commented local colour constant, `accentTint`, watermark usage) and `tools/remotion/src/PackedVsBufferedDay.tsx` for the two-halves comparison idiom. Take conventions, not layout.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ClearVsAmberLenses --output=out/preview-clear-vs-amber-v1.png
  ```
- **Final export command** (writes into the CURRENT tree's asset folder):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ClearVsAmberLenses --scale=2 \
    --output="$REPO/blog-ops/assets/best-blue-light-glasses/clear-vs-amber-lenses.png"
  ```
- **Why this and not a real screenshot:** there is no screen to capture, and the slot's whole point is two exact captions and a verbatim evidence footnote, which is real rendered text in Remotion and unreliable in a generated image. This is the one genuinely diagrammatic slot in the post, which is exactly the case `custom-instructions.md` §Image style reserves `remotion` for.

---

### Image 4, after H2 "What actually helps tired eyes, and it isn't lenses" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: a desk beside a window, a student looking up and away from the laptop towards something distant outside, a small timer on the desk. Type: ai-prompt. Suggested filename: twenty-twenty-twenty-habit.png]`
- **Type:** `ai-prompt`
- **Concept:** A daylit desk beside a window where a student has lifted her head from the open laptop to look out at a distant tree, with a small analog dial timer sitting on the desk beside her and no glasses anywhere in frame.
- **Suggested filename:** `twenty-twenty-twenty-habit.png`
- **Alt text:** `A student at a desk by a window looking up from her laptop towards a distant tree, timer on the desk`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: a side view of a young woman in her early twenties sitting at a light oak desk pushed up against a large window, seen from her right, cropped at the hips. The open laptop sits on the desk in front of her, but she has turned her head away from it and is looking up and out through the window at a distant tree on a far hillside, chin lifted, shoulders relaxed, one hand still resting near the trackpad. Her seat is about an arm's length back from the screen, so there is visible space between her face and the laptop. On the desk beside the laptop, a small round analog kitchen timer with a plain dial, a bare pointer and unmarked tick lines, no digits of any kind. A glass of water and a closed notebook further along the desk. Through the window, soft afternoon light, a green hillside and one distinct tree in the distance, drawn small to read as far away.

  Palette and mood: warm, airy, calm, mid-afternoon. Light oak desk, cream wall, sage and warm green outside, honey daylight falling across the desk from the window. Small teal (#0E9F8E) accent on the timer's dial only. Never a blue-dominant scene, never a night scene, never cold studio light. Clean bold outlines, soft cel shading, generous empty space above the desk.

  No glasses appear anywhere in this image, on her face or on the desk.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions or numbers, digits on the timer face, clock numerals, countdown display, digital timer, visible screen content, UI chrome, app icons, glasses, eyewear on the face or on the desk, blue light beams, coloured rays, light being blocked or deflected, shield motif, red irritated eyes, eye anatomy, eye exercises diagram, medical or clinical imagery, doctor, optician, eye chart, children, teenagers under 18, extra limbs, extra or malformed fingers, six fingers, warped or fused hands, distorted face, photorealism, 3D render, stock photo, cold blue or monochrome blue scene, blue-dominant background, night scene, grey studio backdrop, dark or moody grading, cluttered desk, brand logos, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (one illustration per H2 section, the recurring female character where a person fits) and §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` benchmark, never the cold blue `student-desk-spiral`).
- **Source data (if any):** the scene visualises the AAO's 20-20-20 rule and the roughly 25-inch viewing distance as stated in the draft's own bullet list in this section (both sourced from `facts.md` §AAO rows). **No number is rendered in the image**, which is exactly why the timer must have a blank dial: "20" as legible text belongs in the prose, not in a generated image.
- **Text-in-image warning:** this image must carry NO text and NO numerals at all, including on the timer face and the laptop screen. Digits on a timer dial are the most likely defect here; check the rendered PNG specifically for them and re-generate if any appear.
- **Why this and not remotion/screenshot:** it is a warm human moment about looking away from a screen, not a diagram, and a Remotion "20-20-20" card stack would restate the bullet list directly above it. Nothing here is capturable.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/best-blue-light-glasses/
├── featured.png
├── honest-verdict-tired-eyes.png
├── frame-styles-flatlay.png
├── clear-vs-amber-lenses.png
└── twenty-twenty-twenty-habit.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. Repair `src/Root.tsx` first (see §Editor notes), write the component in `src/ClearVsAmberLenses.tsx`, register the `<Still>`, export via the final command in the Image 3 spec. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; the five lens constants named in the Image 3 spec are the only sanctioned literals.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch). One slot per codex run.
3. **Screenshots:** none in this post, deliberately. See §Editor notes.
4. **Watermark and polish:** `<BlogWatermark />` for the Remotion slot; the `olgapak.com` wordmark is requested inside the featured prompt only. Section illustrations carry no wordmark, matching the existing library. Output format: PNG for every slot.

## Naming conventions (from `standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `clear-vs-amber-lenses.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless `generate-images` records one `failed`.
2. On a failure, paste that slot's `Prompt:` block into any AI image tool and save the output to `blog-ops/assets/best-blue-light-glasses/` under the exact suggested filename.
3. Verify file sizes (under 200 KB for featured, under 500 KB for in-post is a good rule of thumb).
4. Tick the "Create images" section in `action-items.md` once all five files exist.

## Editor notes

- **BLOCKER for the Remotion slot: `tools/remotion/src/Root.tsx` does not parse.** `<Still id="FourCorePagesMap" component={FourCorePagesMap}` is missing its `width={CANVAS.width} height={CANVAS.height} />` line, so `<Still id="CostTierKey" ...>` opens inside it. This is the same class of defect that blocked the screen-free-hobbies run (that one was three missing lines, fixed then, and a new one has landed since). Until it is repaired, **no composition in this project renders**, including this post's. The fix is one inserted line, specified in the Image 3 production spec. I did not edit it: the planner is spec-only and this is a repo-wide file, not one of this post's. Worth a follow-up outside this post: the pattern suggests whoever appends a `<Still>` keeps pasting above the previous element's closing line.
- **Slot count matches exactly.** `outline.md` §Image placement plan lists 1 featured plus 4 in-post; `draft-v2.md` carries exactly 4 `[IMAGE:]` placeholders, at lines 28, 81, 211 and 229, in the same sections and the same order (H2 1, H2 3, H2 4, H2 5). No delta. Every placeholder's type and suggested filename is kept exactly as the writer placed it; nothing was converted.
- **Featured hygiene: clean.** No `[IMAGE:]` placeholder uses `featured.png` and none duplicates the featured concept. Image 1 is the closest (both are evening desk scenes), which is why the featured vignette has NO person in it and Image 1 does: at a glance they read as different pictures.
- **Table-duplicate check: passes.** The draft's two markdown tables are the marketing-claims table (H2 1) and the picks table (H2 3). Neither is redrawn. The one Remotion slot compares clear and amber lenses, content that appears in no table in the post, and it adds what prose cannot: the colour shift shown rather than asserted.
- **Priority-ladder check.** `remotion` sits at the top of the ladder and is enabled, but `custom-instructions.md` §Image style overrides it for this blog's scene and hero slots ("`remotion` only for genuine diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals"). Image 3 is the one genuinely diagrammatic slot and is `remotion`. Images 1, 2 and 4 are mood-and-place scenes with no data content and no exact text, the correct `ai-prompt` case. The featured slot is locked to `ai-prompt` by config and by standing instruction, and was not touched.
- **No `screenshot` slot, deliberately, and none should be added.** Nothing in this post lives on a screen worth capturing: a product page screenshot would date instantly (the post deliberately ships no prices), would carry a retailer's branding into the post, and would be the one type `generate-images` cannot produce, so it would stall Stage 4b.5 staging on a missing file.
- **Featured archetype: `scene-vignette`.** Ledger union (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md`) sorted by date ends with `2026-08-26 bullet-journal-for-beginners` = `big-number` and `2026-09-02 screen-free-hobbies` = `negative-space`, so both are blocked. `scene-vignette` last ran 2026-08-19 and is clear. This post's rotation entry is written to `blog-ops/featured-log/2026-09-09-best-blue-light-glasses.md`; the legacy table is left untouched as read-only history.
- **Convergence risk I actively designed around, worth your review.** `blog-ops/assets/how-to-stop-doomscrolling/featured.png` is already a navy night-room scene with the recurring female character lit by a glowing device, which is uncomfortably close to a literal reading of this post's outline concept. Three deliberate divergences: a pale dusk-mauve ground instead of a dark room, a tight desk vignette instead of a whole interior, and no person in frame. If you would rather have the character on the cover, swap Image 1's framing onto the featured slot and give Image 1 the flat-lay treatment, but do not ship both a night-room character cover and Image 1 as they stand.
- **Judgment call: no recurring female character on the cover.** `image-style.md` asks for her "where a person fits". She fits, but she was on the previous night-scene cover (doomscrolling) and the cover-density rule caps focal objects at three, which the glasses, laptop and lamp already spend. She appears in two of the four in-post scenes instead.
- **Judgment call: ground hue is pale dusk-mauve `#D8B7C4`, chosen by elimination.** The cover library already owns marigold and bright orange, sage green, terracotta, navy, teal, royal blue, lavender and sand. Mauve is unused, reads as evening without being blue (which matters more than usual on a post about blue light), and keeps a red accent word legible. If it renders washed out at thumbnail size, deepen it towards a dusty rose rather than reaching for a hue that is already spent.
- **Judgment call: the red accent word is "Honest", not the numeral "9".** Number-led covers are the house habit (and the last two both leaned numeric), but "Honest" is this post's actual differentiator against nine competing roundups. Easy to flip if you disagree.
- **Deliberate deviation in the Remotion slot, flagged so it is not read as a mistake.** Two of them. (1) The adapter's §In-post stacked comparisons prescribes a warn-tinted pill for the "bad" side and an accent-tinted pill for the "good" side; both pills here are neutral, because the section's whole argument is that clear and amber answer different questions and neither is the winner. The single accent goes to the bottom pill, which belongs to neither column. (2) The divider is vertical rather than the prescribed full-width horizontal one, because each half is a circle plus three short lines and fits a 620 px column comfortably, and the draft placeholder explicitly asks for a two-circle side-by-side.
- **Five local colour literals in the Remotion slot.** No theme token encodes an amber lens tint, and the tint is literally the diagram's content, so `LENS_AMBER`, `LENS_AMBER_EDGE`, `LENS_CLEAR_FILL` and the three `SHIFTED` dot colours are declared locally with a comment (precedent: `lineLight` in `WeekGridTimeboxing.tsx`). If you would rather hold the no-literals line strictly, the fallback is two outlined circles distinguished by their captions alone, which loses the one thing the image shows rather than asserts.
- **No chart needs fresh data.** The single diagram renders one sentence sourced from `facts.md` lines 13 and 14 (both verified) and no figures beyond "2023" and "17" inside that sentence. No prompt in this file asks for a price, a percentage or a blocking figure, and none may be added: `facts.md` line 54 flags CNN Underscored's "99 to 100% blocked" as explicitly unverified and not repeatable.
- **Health-claim guardrail, applied and worth spot-checking at Gate 2.** No alt text in this file says the glasses do anything. The featured alt says they are "resting on a notebook"; Image 1's says they are "set down beside the keyboard"; Image 3's names the labels only. Image 1 deliberately shows the glasses OFF the wearer's face, and Image 4 excludes glasses entirely, so the two images bracketing the evidence sections cannot be read as endorsement. Every negative prompt bans blocked beams, shields, irritated eyes and clinical imagery.
