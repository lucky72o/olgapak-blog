# Images: rocketbook-review

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/rocketbook-review/outline.md` (image placement plan), `blog-ops/drafts/rocketbook-review/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/rocketbook-review/facts.md` (for chart/diagram data), `blog-ops/drafts/rocketbook-review/review.md` §10, the Stage 4a editor note on the care slot, `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: human (creates the actual assets and saves them under `blog-ops/assets/rocketbook-review/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `4` (1 featured + 3 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `3`
  - Screenshots: `0`
- File destination: `blog-ops/assets/rocketbook-review/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml` (a member of `images.enabled = [ai-prompt, screenshot, remotion]`), and locked by `blog-ops/profile/custom-instructions.md` §Image style, which forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target about 1536 × 1024). Keep the title, the woman's head and hands, the notebook and the phone inside the vertical safe zone (roughly the middle 79% of the height) so the 1.91:1 OG/Twitter crop clips nothing important.
- **Concept:** A small warm moment: the recurring woman at a plain wooden desk, smiling as she wipes half of a reusable dot-grid notebook page clean with a damp cloth, a pen resting on the page, while her phone lies screen-up but dark and switched off at the far edge of the desk, plainly not needed.
- **Archetype:** `scene-vignette`. A small illustrated scene showing the outcome, not a diagram of it. It fits because the title's thesis is a two-part judgement, "Great Notebook, Optional App", and a single moment can carry both halves at once: the notebook is in active, happy use, and the phone (the app's only way in) sits idle and out of the way. One glance reads "this is a notebook first" without a label. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date, no prior entry for this slug): the last two prior posts are `2026-09-09 ai-note-taking → object-metaphor` and `2026-09-13 gifts-for-students → split-contrast`, so **`object-metaphor` and `split-contrast` are OFF LIMITS**. `scene-vignette` was last used 2026-09-07 (`dopamine-detox`).
  - **Outline concept adapted, not replaced.** The outline's featured idea (a notebook with half its page wiped clean, a FriXion pen and a microfiber cloth) shows the reusable page well but says nothing about the app half of the title, and on its own it is an `object-metaphor` (blocked). It is kept as the centre of the scene; the woman and the idle phone are added to carry "Optional App".
  - **Motif collision avoided:** `dopamine-detox` (2026-09-07) used a face-down phone. Here the phone is screen-up with a plain dark, switched-off screen, pushed to the desk edge, so it reads "unused tool", not "digital detox".
  - **Alternatives considered and rejected:**
    - `negative-space` (one half-wiped notebook small and off-centre in empty canvas): says "reusable" clearly but drops the app half of the thesis.
    - `big-number` (a giant "3-4 weeks" per pen): makes the cover about pen running cost, one sub-point of the review.
    - `pattern-break` (a stack of identical spiral notebooks with one reusable notebook among them): says "replaces a stack", again only one point, and reads as a roundup.
    - `diagram-lite` (write, scan, wipe flow): duplicates in-post Image 1 and the existing `best-notebooks-for-note-taking/rocketbook-workflow.png`.
- **Suggested filename:** `featured.png`
- **Alt text:** `A woman wipes half a reusable notebook page clean while her phone sits switched off at the desk edge`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial blog hero illustration on a single bright, sunny
  lemon-yellow background (roughly #F5E26B, a clear fresh lemon, NOT marigold, NOT
  mustard, NOT orange, NOT blue) filling the whole canvas as one flat colour, no
  gradient, no texture noise. Clean, uncluttered, generous breathing room.

  Composition (scene-vignette archetype: one small, simple illustrated moment, not a
  diagram; no panels, no cards, no charts, no arrows, no numbered callouts; three
  focal elements in total: the woman, the notebook, the phone). Below the title, in
  the lower two thirds of the canvas, a single plain honey-toned wooden desktop runs
  across the frame as one simple slab seen from a slight elevated front angle. No
  room, no wall details, no shelves: just the lemon ground and the desk.

  Behind the desk, centred slightly left, the recurring friendly young woman of
  olgapak.com covers: dark hair in a loose messy bun, rosy cheeks, a soft olive-green
  knit sweater, seen from the waist up. She is smiling, relaxed and absorbed.

  In front of her on the desk lies one open spiral-free reusable notebook with a
  smooth, slightly glossy cream dot-grid page on each side and a plain charcoal-grey
  cover edge. The left page is covered in short wordless handwritten squiggle lines
  and one tiny sketched box. On the right page she is wiping with a small folded
  damp microfiber cloth in soft teal (#0E9F8E) held in her right hand: the lower half
  of that page is already wiped perfectly clean and blank, with two or three tiny
  water-sheen sparkle dashes, while the upper half still shows faint squiggle lines.
  A slim plain black retractable gel pen with a small rubber tip on its end rests
  diagonally across the left page.

  At the far right edge of the desk, small, sits one plain smartphone lying flat,
  screen facing up, its screen a uniform dark grey, switched off, nothing displayed.
  It is clearly set aside and unused: no hand near it, no glow.

  Title treatment overlaid across the upper area, centred, starting about one eighth
  of the way down from the top edge, with clear flat space beneath it before the
  scene begins. Two lines, VERBATIM text, exact spelling and punctuation:
  line 1, "Rocketbook Review (2026):" in a playful hand-lettered brush script,
  near-black (#222222);
  line 2, "Great Notebook, Optional App" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), with ONLY the word "Optional" in bright red
  (#E11D48). Line 2 is noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive, not overlapping the desk objects.

  Palette: lemon-yellow ground, honey wood desk, cream paper, olive-green sweater,
  charcoal grey on the notebook cover and the phone, near-black #222222 for text and
  outlines, soft teal #0E9F8E only on the cloth and the tiny sparkle dashes, red
  #E11D48 only on the word "Optional". Brand blue #2B6CB0 is NOT the background and
  NOT a dominant fill (at most absent). Warm soft light from the upper left. Mood:
  energetic, optimistic, approachable, warm. Cheerful modern flat vector, clean bold
  outlines, soft cel shading.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no Rocketbook logo, no brand logos, no product trademarks, no printed brand names
  on the notebook, pen, cloth or phone, no app icons, no glowing phone screen, no
  phone notifications, no QR codes, no scan frame, no face-down phone, no second
  phone, no laptop, no tablet, no spray bottle, no blue or navy background, no
  marigold or orange background, no gradient background, no blue notebook, no
  blue-dominant objects, no spiral binding, no readable words on the notebook pages,
  no extra words beyond the title and the wordmark, no garbled or misspelled
  lettering, no missing parentheses, no missing colon, no missing comma, no second
  red word, no duplicated watermark, no arrows, no numbered steps, no badges, no
  infographic, no cards, no panels, no room interior, no bookshelf, no window, no
  coffee mug clutter, no second person, no extra limbs or fingers, no distorted
  hands or face, no 3D render, no stock-photo realism, no heavy drop shadows on text
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script mixed with a bold rounded sans, one red accent word, recurring female character, single bright saturated background, `olgapak.com` watermark) and §Illustration palette. Sample library in `blog-ops/reference/image-samples/` (`feat_*.png`). Character reference: `blog-ops/assets/ai-note-taking/featured.png` and `blog-ops/assets/gifts-for-students/featured.png` (same woman: dark loose bun, rosy cheeks; the sweater changes to olive green here so it does not clash with the lemon ground). Prior covers are for tonal family only, never composition or hue: pistachio is taken by `gifts-for-students`, amber by `how-to-take-notes-on-ipad` and `ai-note-taking`, sage by `how-to-reduce-screen-time` and `best-pens-for-note-taking`, and marigold, terracotta, apricot, sand-oat, rose-clay, lavender, teal, royal blue and navy by earlier covers. Lemon yellow is new.
- **Source data (if any):** none. The scene restates the title and the draft's own direct answer (draft-v2.md line 14: "The scanning app is a nice extra that some long-term owners quietly stop opening"), not a measured figure.
- **Text-in-image warning:** this cover carries exact text: the post title verbatim, `Rocketbook Review (2026): Great Notebook, Optional App`, plus the `olgapak.com` wordmark. Check the render word by word against the frontmatter `title:`, including both parentheses around "2026", the colon after them, the comma after "Notebook", and that only "Optional" is red. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The notebook pages are wordless squiggles by design.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, an illustration job; a real product photo or screenshot would need first-hand capture Olga has not done (outline §Open questions).

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (wordmark per `blog-ops/profile/image-style.md` §Watermark; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition. The component is the single point of brand-mark control.
- **Own-site/product UI screenshots:** not applicable, this post has no screenshot slots.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside each prompt, bottom-left, about 55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph (so the heading introduces the section, the paragraph frames the point, and the image illustrates it). The exception is an image that closes evidence cited in the prior section's prose, that may sit before the next H2.

**Table-redundancy rule:** never spec a chart-style image (`remotion` or `ai-prompt`) whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't (color coding, callout arrows, computed totals, derivative chart shape).

**Values-in-text rule:** every data image's numbers, labels and values also appear as text in the same section (preceding sentence, table or caption). Alt text does not count. Fill `Values stated in text at:` for each data slot.

**Background hue per section (varied on purpose, per `image-style.md` §Illustration palette):** featured = lemon yellow; Image 1 = warm light-oak desk; Image 2 = pale blush-clay wall over a birch counter; Image 3 = the Remotion neutral `palette.background`.

### Image 1, after H2 "What a Rocketbook Actually Is" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Three simple side-by-side panels showing the Rocketbook loop: a FriXion pen writing on a dot-grid page, a phone scanning the page, and a microfiber cloth wiping the page clean. Type: ai-prompt. Suggested filename: rocketbook-write-scan-wipe.png]` (draft-v2.md line 47)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: an illustrative three-moment sequence with no exact text; the steps are already named in the sentence above it)
- **Concept:** Three warm, wordless side-by-side moments of the same notebook on a light-oak desk: a hand in an olive knit sleeve writing on a cream dot-grid page, the same page framed by a phone held above it, and the same page half wiped blank with a damp teal cloth.
- **Suggested filename:** `rocketbook-write-scan-wipe.png`
- **Alt text:** `Three steps: a hand writes on a dot-grid notebook page, a phone scans it, a damp cloth wipes it clean`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting, made of exactly three
  equal side-by-side scenes read left to right, separated by two thin cream gutters.
  Each scene is a straight overhead (top-down) view of the same light-oak wooden
  desktop, its grain drawn as a few simple flowing lines in a slightly darker honey
  brown, and on it the same open reusable notebook: a smooth, slightly glossy cream
  dot-grid page with a plain charcoal-grey cover edge, no spiral binding.

  Scene 1 (left), writing: a hand in a soft olive-green knit sleeve holds a slim
  plain black retractable gel pen and writes short wordless handwritten squiggle
  lines and one tiny sketched box on the page. A small sprig of eucalyptus enters
  the top-left corner of this scene only.

  Scene 2 (middle), scanning: the same page with the same squiggle lines; a hand in
  the same olive sleeve holds a plain charcoal smartphone flat above the page. The
  phone screen shows a simplified miniature of the same page with four small soft
  teal (#0E9F8E) corner brackets around it, as if it is being captured. No app
  interface, no buttons, no words on screen.

  Scene 3 (right), wiping: a hand in the same olive sleeve sweeps a small folded
  damp microfiber cloth in soft teal (#0E9F8E) across the page. The lower half of
  the page is perfectly clean and blank with two or three tiny water-sheen sparkle
  dashes; the upper half still shows faint squiggle lines.

  Between the scenes, the sequence is implied by the repetition only: no arrows, no
  numbers, no step labels.

  Palette: light oak and honey wood, cream paper, olive-green sleeves, charcoal grey
  on the notebook edge and phone, near-black #222222 for outlines, soft teal #0E9F8E
  only on the cloth and the scan brackets, a little eucalyptus green. Brand blue
  #2B6CB0 at most as one hairline detail, never a background and never a dominant
  fill. Soft warm natural light from the upper left, gentle short shadows. Mood:
  clean, approachable, confident, productive. Cheerful modern flat vector, clean
  bold outlines, soft cel shading. Small lowercase "olgapak.com" wordmark in the
  bottom-left corner, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults; three portrait-ish scenes fit side by side at this ratio)
- **Negative prompt** (if the tool supports it):
  ```
  no white background, no blue or navy palette, no blue notebook binding, no blue
  sleeves, no blue numbered circles, no step numbers, no "WRITE" "SCAN" "WIPE"
  labels, no arrows, no readable words anywhere, no to-do list text, no lightbulb
  doodle, no garbled lettering, no Rocketbook logo, no brand logos, no app icons, no
  app interface, no buttons on the phone screen, no spiral binding, no spray bottle,
  no rubber eraser use, no more than three scenes, no hard black panel borders, no
  cold monochrome look, no extra hands, no extra fingers, no distorted hands, no
  faces, no 3D render, no stock-photo realism, no heavy drop shadows, no duplicated
  watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: match the warm wood-toned `blog-ops/assets/best-notebooks-for-note-taking/finished-notebooks-shelf.png`. **Do not resemble** `blog-ops/assets/best-notebooks-for-note-taking/rocketbook-workflow.png`, which shows this same write, scan, wipe loop on white with blue numbered badges and blue sleeves, and which `image-style.md` names as too cold. That post links to this review, so a reader may see both images back to back; this one must read as a clearly different, warmer picture.
- **Source data (if any):** none. The loop restates draft-v2.md line 45 and `facts.md` §Lineup and specs, row 20 (the Core ships with one pen and a microfiber cloth).
- **Values stated in text at:** not a data slot (no numbers or labels in the image). The three steps are named in the sentence before the placeholder ("A Rocketbook is a notebook with special reusable pages. You write with a Pilot FriXion pen, scan the page...").
- **Why this and not remotion/screenshot:** a warm hands-on sequence is an illustration job; there are no labels to render exactly, and a real app screenshot would need a first-hand capture that does not exist.

---

### Image 2, after H2 "How It Holds Up Over Time" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Care do and don't scene: on one side a damp microfiber cloth and a water pen with a check mark, on the other side soap, wet wipes and a pen eraser crossed out. Type: ai-prompt. Suggested filename: rocketbook-care-dos-donts.png]` (draft-v2.md line 118)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: an illustrative still life with no exact text)
- **Concept:** A two-sided still life on a birch counter: on the "do" side a damp folded microfiber cloth and a refillable water brush pen with a teal check badge; on the "don't" side a bar of soap, a pack of wet wipes and a pen's rubber eraser end scrubbing a smeared page, each with a small red cross badge. **Changed from the placeholder per the Stage 4a editor note:** the spray bottle is replaced by a water pen, because the Core ships with no spray bottle (`facts.md` row 20) and Rocketbook's own tip for small fixes is a water pen (`facts.md` row 41).
- **Suggested filename:** `rocketbook-care-dos-donts.png`
- **Alt text:** `Do: damp microfiber cloth and water pen. Don't: soap, wet wipes, or scrubbing with the pen's eraser`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting: a simple still life on a
  pale birch-wood counter in front of a flat pale blush-clay wall (roughly #EBCFC4,
  soft and warm, NOT pink-candy, NOT blue), seen from a slight elevated front angle.
  The counter runs across the whole frame. The scene is split into two halves by
  generous empty space in the middle, no divider line, no panels.

  LEFT HALF, the right way to clean, drawn in fresh, clean colours:
  1. A small folded microfiber cloth in soft teal (#0E9F8E), visibly damp, with two
     or three tiny water droplets beside it.
  2. Lying next to it, one refillable water brush pen: a slim clear plastic barrel
     with water visibly inside, a short soft brush tip, a plain grey cap set beside
     it.
  Above these two items floats one small round soft-teal (#0E9F8E) badge with a
  bold white check mark drawn inside it.

  RIGHT HALF, what to avoid, drawn in slightly duller, muted colours:
  1. A plain pale-green bar of soap with a few soap bubbles.
  2. A soft plastic pack of wet wipes with one white wipe pulled half out of it.
  3. A small corner of a cream dot-grid notebook page with a slim plain black gel
     pen held upside down so its little rubber eraser end rubs the page, leaving a
     grey smeared patch and a few tiny eraser crumbs.
  Above each of these three items floats one small round red (#E11D48) badge with a
  bold white X drawn inside it.

  Every object is generic and unbranded. Arrange the five items as calm, evenly
  spaced groups with breathing room; the left group a little larger and closer, the
  right group a little smaller.

  Palette: pale blush-clay wall, birch and honey wood, cream paper, soft teal
  #0E9F8E only on the cloth and the check badge, red #E11D48 only on the three X
  badges, near-black #222222 for outlines and the pen body, pale green on the soap.
  Brand blue #2B6CB0 at most as one hairline detail, never a background and never a
  dominant fill. Soft warm natural light from the upper left, gentle short shadows.
  Mood: clean, approachable, confident, helpful. Cheerful modern flat vector, clean
  bold outlines, soft cel shading. Small lowercase "olgapak.com" wordmark in the
  bottom-left corner, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no spray bottle, no mist sprayer, no plant mister, no sponge, no paper towel, no
  bucket, no cleaning spray, no "DO" or "DON'T" words, no labels, no readable words
  or numbers anywhere, no garbled lettering, no brand logos, no product trademarks,
  no printed brand names on the soap, wipes pack, pen or cloth, no Rocketbook logo,
  no check or X badge on the wrong side, no more than one check badge, no more than
  three X badges, no blue or navy palette, no white background, no cold monochrome
  look, no human hands, no people, no faces, no extra objects, no
  cluttered counter, no 3D render, no stock-photo realism, no heavy drop shadows, no
  duplicated watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, wood-toned, brand blue as accent only); `blog-ops/assets/best-notebooks-for-note-taking/finished-notebooks-shelf.png` for warmth.
- **Source data (if any):** `facts.md` §Pens, ink and care, row 38 (damp microfiber towel for whole pages; the pen's eraser "may leave residue behind" that raises ghosting), row 41 (water pen for small mistakes), and the care-guide warning against soap and wipes with oils or solvents quoted at draft-v2.md line 130; `facts.md` row 20 (no spray bottle in the box).
- **Values stated in text at:** not a data slot (no numbers or labels in the image). The do and don't items are stated in the care bullet list that follows the placeholder ("Use a damp microfiber cloth for whole pages.", "Go easy on the pen's built-in eraser.", "No soap, no wipes with oils or solvents...").
- **Text-in-image note:** the check and X marks are drawn shapes inside badges, not text characters; no other text is needed.
- **Why this and not remotion/screenshot:** a warm still life of physical objects is an illustration job; nothing here needs exact rendered text.

---

### Image 3, after H2 "How Fast You Go Through Pens (and What That Means Over a Semester)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Simple bar chart estimating pens used over a 15-week semester of heavy note-taking: about 5 pens at 3 weeks per pen and about 4 pens at 4 weeks per pen, labelled "estimate, based on owner-reported 2021 burn rate". Type: remotion. Suggested filename: rocketbook-pens-per-semester.png]` (draft-v2.md line 142)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: exact numbers and labels must render as real text)
- **Concept:** Two horizontal segmented bars across a 15-week semester track: the top bar split into five 3-week pen segments ("5 pens"), the bottom into three full 4-week segments plus one 3-week segment for a pen still in use at semester end ("4 pens"), with an estimate footnote.
- **Suggested filename:** `rocketbook-pens-per-semester.png`
- **Alt text:** `Bar chart: a 15-week semester uses about 5 FriXion pens at 3 weeks each, about 4 at 4 weeks each`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **PREREQUISITE 1, render blocker:** `tools/remotion/src/Root.tsx` does not parse right now (identical on `main`). Three `<Still>` entries are missing their closing line: line 99 `FiveMinutePostMeetingPass`, line 100 `DownsizingFilterDiagram`, and line 103 `HighlighterTipShapes`. Insert `      width={CANVAS.width} height={CANVAS.height} />` directly after each of those three lines, then run `npx tsc --noEmit` in `tools/remotion/` before registering this composition. Until then no composition in the project renders.
- **PREREQUISITE 2:** this worktree has no `tools/remotion/node_modules`. Run `npm ci` in `tools/remotion/` before Stage 4a.5.
- **Composition `<Still>` ID:** `rocketbook-review--rocketbook-pens-per-semester` (from `composition-id.mjs`)
- **Component file:** `tools/remotion/src/rocketbook-review--rocketbook-pens-per-semester.tsx`, exporting `C_rocketbook_review__rocketbook_pens_per_semester`
- **Registration:** in `tools/remotion/src/Root.tsx`, `import { C_rocketbook_review__rocketbook_pens_per_semester } from "./rocketbook-review--rocketbook-pens-per-semester";` and append `<Still id="rocketbook-review--rocketbook-pens-per-semester" component={C_rocketbook_review__rocketbook_pens_per_semester} width={CANVAS.width} height={CANVAS.height} />` after the `PaperOrScreenGiftDecision` entry (component reference, never a JSX element).
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` for the final PNG.
- **In-post image: NO title and NO subtitle.** `<BlogWatermark />`, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, top to bottom, every coordinate from one constants object (never eyeballed):
    - **Plot box:** `LABEL_X = SAFE_MARGIN` (120), `LABEL_W = 340`; `PLOT_LEFT = 500`, `PLOT_RIGHT = 1480` (width 980); `TOTAL_X = 1520` to `1680` (totals column).
    - **Week helper:** `WEEKS = 15`, `WEEK_W = (PLOT_RIGHT - PLOT_LEFT) / WEEKS` (≈ 65.33). `xAt(week) = PLOT_LEFT + week * WEEK_W`, where `week` is the number of weeks elapsed (0 to 15). Segment `[a, b)` spans `xAt(a)` to `xAt(b)`.
    - **Section tag** (top): a centred pill at `y = SAFE_MARGIN + 20` (140), height 56, text `15-week semester, heavy note-taking`, `palette.accent` tint background with `palette.accent` text per the adapter's §In-post stacked comparisons tag style.
    - **Row A:** bar top `ROW_A_Y = 330`, `BAR_H = 120`. Label left of the plot box, vertically centred: `3 weeks per pen`. Segments: `[0,3) [3,6) [6,9) [9,12) [12,15)`, five equal segments.
    - **Row B:** bar top `ROW_B_Y = 580`, same `BAR_H`. Label: `4 weeks per pen`. Segments: `[0,4) [4,8) [8,12)` full, then `[12,15)` as the partial last pen (see palette). The bar ends at week 15.
    - **Segment gap:** every segment is inset 4px on each side so adjacent pens read as separate blocks (`SEG_GAP = 8` total between neighbours); corner radius 12.
    - **Pen glyph:** inside each segment, left-aligned with 16px padding, one small inline stroked SVG pen (a slim diagonal barrel with a clip line and a conical tip, 36×36 user space, `strokeWidth 3`, no fill, rounded caps), in `palette.surface` on full segments and `palette.muted` on the partial segment.
    - **Totals column:** at `TOTAL_X`, vertically centred on each bar: `5 pens` (row A) and `4 pens` (row B).
    - **Week axis:** a 2px `palette.border` line at `AXIS_Y = 760` from `PLOT_LEFT` to `PLOT_RIGHT`; tick marks (12px down) at `xAt(0)`, `xAt(3)`, `xAt(6)`, `xAt(9)`, `xAt(12)`, `xAt(15)`, with lighter dashed gridlines rising from each tick to `ROW_A_Y - 20`. Tick labels below each tick: `0`, `3`, `6`, `9`, `12`, `15`. Axis title centred under the plot box at `y ≈ 850`: `Weeks into the semester`.
    - **Legend chip row** at `y ≈ 930`, centred: a small solid segment swatch + `one pen, used up`; a small dashed-outline swatch + `pen still in use at semester end`.
    - **Footnote** at `y ≈ 1010`, centred, max width 1400: `Estimate based on owner-reported 2021 burn rate`. Bottom of all content ≤ 1040 so it clears the watermark (text top ≈ 1100) with room to spare.
  - Copy (exact strings to render, verbatim, nothing else):
    - `15-week semester, heavy note-taking`
    - `3 weeks per pen`, `4 weeks per pen`
    - `5 pens`, `4 pens`
    - `0`, `3`, `6`, `9`, `12`, `15`, `Weeks into the semester`
    - `one pen, used up`, `pen still in use at semester end`
    - `Estimate based on owner-reported 2021 burn rate`
    - No brand names (no "Rocketbook", no "FriXion"), no prices, no em dash (U+2014), no en dash, no check or cross characters as text.
  - Palette: tokens imported from `tools/remotion/src/theme.ts`, plus the adapter's §Color conventions.
    - Full segments, both rows: solid `palette.accent`. The accent role here is "a used-up pen", the one thing the chart counts; both rows share it because neither rate is the "right" one.
    - Partial segment (row B, weeks 12 to 15): `palette.surface` fill with a `2px dashed palette.accent` border, so it reads as a pen in progress, not a dimmed one (never `opacity < 1`).
    - Labels and totals: `palette.text`; axis ticks, axis title, legend text and footnote: `palette.muted`.
    - `palette.warn` NOT used (nothing is a failure). `palette.primary` NOT used.
  - Typography: row labels `fonts.sans` 36px semibold; totals `fonts.mono` 48px bold; tick labels `fonts.mono` 26px; axis title `fonts.sans` 26px medium; legend `fonts.sans` 26px; footnote `fonts.sans` 26px italic; section tag `fonts.sans` 28px bold, sentence case as written.
  - Icons / SVG assets: inline SVG pen glyph only (see Layout). `tools/remotion/public/` does not exist; do not create it.
  - Arrows / connectors: none.
  - Card recipe to use (if any): none; bars sit directly on `palette.background`. Optionally wrap the whole chart in one standard neutral card (`palette.surface`, `1px solid palette.border`, 16px radius) from `x 100` to `1700`, `y 110` to `1060`, if the bars read as floating; keep every coordinate above inside it.
- **Source data (if any):** `facts.md` §Owner-reported long-term use, row 56 ("3-4 weeks" per pen at heavy use, 2021) and §Pens: prices, row 31 (editor arithmetic: a 15-week semester uses roughly 4 to 5 pens). The segment split is arithmetic on those rows: 15 / 3 = 5 full pens; 15 / 4 = 3 full pens plus a fourth pen three-quarters used, counted as 4 pens bought. Per `facts.md` row 60, the image does not attribute the rate to one owner.
- **Values stated in text at:** the bullet list directly after the placeholder in the same section ("A 15-week semester at 3 weeks per pen: about 5 pens." and "The same semester at 4 weeks per pen: about 4 pens."), plus "The Frixion pens last me 3-4 weeks..." in the paragraph before it.
- **Reference composition to mimic:** `tools/remotion/src/SevenDayRampDiagram.tsx` for the `xAt()` helper pattern and fixed constants; `tools/remotion/src/TwoPilesOfScreenTime.tsx` for the `cardShadow` / `accentTint` constants and glyph sizing. In-post diagrams may mimic their layouts freely.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still rocketbook-review--rocketbook-pens-per-semester --output=out/preview-rocketbook-pens-per-semester-v1.png
  ```
- **Final export command** (writes into the CURRENT tree's assets folder; `REPO` is derived dynamically so this is worktree-safe):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still rocketbook-review--rocketbook-pens-per-semester --scale=2 \
    --output="$REPO/blog-ops/assets/rocketbook-review/rocketbook-pens-per-semester.png"
  ```
- **Why this and not a real screenshot:** there is nothing to screenshot; it is the post's own estimate, and its numbers must render as exact text, which is a Remotion job.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/rocketbook-review/
├── featured.png
├── rocketbook-write-scan-wipe.png
├── rocketbook-care-dos-donts.png
└── rocketbook-pens-per-semester.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<id>.tsx`, iterate via `npx remotion still <id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <id> --scale=2 --output=blog-ops/assets/rocketbook-review/<filename>`. Use `<BlogWatermark />` and the fonts/palette locked in `blog-ops/profile/image-style.md`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Needs no API key (codex authenticates itself).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** for `remotion` slots, use the shared `<BlogWatermark />` component (no manual pass needed). For `ai-prompt` slots, the wordmark is in each prompt; add it post-hoc only if a render drops it. Output format: **PNG** for all four slots.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `broken-link-example.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/rocketbook-review/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Slot count matches.** 3 `[IMAGE:]` placeholders in draft-v2.md (lines 47, 118, 142) = 3 in-post slots in the outline's image placement plan. No placeholder duplicates the featured concept.
- **Care slot spec diverges from its placeholder (Image 2), on purpose.** Per the Stage 4a editor note, the spray bottle is replaced by a water pen. The placeholder text at draft-v2.md line 118 still says "a small water spray bottle"; I did not edit the draft. The placeholder is replaced by the image at staging, so this only matters if anyone reads the placeholder as the brief. Optionally update its wording to match.
- **Eraser nuance (Image 2).** The draft says the eraser is "fine for gentle spot fixes" but leaves residue. The image shows the eraser scrubbing a smeared page as a "don't", which matches the editor note and the "Go easy" bullet, but a strict reader could see a mild tension with "fine for gentle spot fixes". Low risk; flagged for Gate 2.
- **Image 1 overlaps an existing asset.** `blog-ops/assets/best-notebooks-for-note-taking/rocketbook-workflow.png` already shows write, scan, wipe as three panels, and that post links to this review. The spec forces a visibly different, warm, wordless version. If Olga would rather not repeat the idea at all, drop Image 1; the section stands without it.
- **Image 3 render blockers.** `tools/remotion/src/Root.tsx` is unparseable on `main` and in this worktree (lines 99, 100, 103 lack their closing `width/height />` line), and `tools/remotion/node_modules` is missing in this worktree. Both must be fixed before Stage 4a.5 can render this slot.
- **Image 3 shape.** The placeholder asks for a "simple bar chart"; it is specced as two segmented horizontal bars on a week axis, which still reads as a bar chart but shows per-pen cadence the two bullets below it cannot. No markdown table duplicates it.
