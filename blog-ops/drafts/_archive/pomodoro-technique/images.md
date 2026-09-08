# Images: pomodoro-technique

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/pomodoro-technique/outline.md` (image placement plan), `blog-ops/drafts/pomodoro-technique/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/pomodoro-technique/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (screenshot slots, failed fallbacks).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1` (in-post Image 1, the cycle diagram)
  - AI-generated (`ai-prompt`): `4` (1 featured + 3 in-post)
  - Screenshots: `0`
- File destination: `blog-ops/assets/pomodoro-technique/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion` "to auto-render for publishing". A codex-generated `ai-prompt` hero is the expected deliverable here.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title band and the timer inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither.
- **Concept:** One oversized red tomato-shaped mechanical kitchen timer, three-quarter view on a flat saturated warm ground, its dial wound with a thin teal arc running past the 25-minute tick, under the hand-lettered post title.
- **Archetype:** `object-metaphor`: one oversized central object standing in for the whole post's thesis, no cards, no flow, no panels. It fits because the tomato timer *is* the technique: it names it, it explains the origin story the intro leads with, and it is instantly legible as a thumbnail. The teal arc pushed past the 25 tick carries the second half of the title ("and When to Break It") without adding a single label or callout. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date, this slug's own rows excluded): the last two prior posts are `2026-08-26 bullet-journal-for-beginners` = `big-number` and `2026-09-02 screen-free-hobbies` = `negative-space`, so **`big-number` and `negative-space` are OFF LIMITS**. No prior row exists for `pomodoro-technique`, so nothing is being churned away from a re-run. `object-metaphor` was last used on `2026-08-03` (`charting-method-note-taking`, `digital-detox-plan`), well outside the blocked window.
  - **Alternatives considered and rejected:**
    - `split-contrast` (25/5 on one side, 50/10 on the other), rejected. It is legible only if you can read four numerals at thumbnail size, it turns the cover into a comparison the post does not actually frame as a versus, and it duplicates the argument in-post Image 3 already carries.
    - `scene-vignette` (a woman working at a desk with a timer running), rejected. That is exactly in-post Image 2, so the cover would preview a body image, and the library already ships several study-desk covers (`how-to-take-notes-on-ipad`, `how-to-plan-your-week`).
    - `diagram-lite` (work → break → long break cards), rejected per the skill's own guidance and because it would be a shrunken copy of in-post Image 1, the Remotion cycle diagram.
    - `pattern-break` (a row of four tomatoes, one different), rejected: it reads as a grocery illustration at thumbnail size, and `pattern-break` was the archetype for both 2026-08-08 covers, so the library has it recently enough.
- **Suggested filename:** `featured.png`
- **Alt text:** `An oversized red tomato kitchen timer with its dial wound past the 25-minute mark`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat sunlit olive-moss field (warm yellow-green, deeper and warmer than
  pale sage, NOT blue, NOT navy, NOT amber, NOT apricot, NOT sand, NOT terracotta)
  filling the whole canvas, no gradient, no texture noise, with generous empty space.

  Composition (object-metaphor archetype: ONE oversized central object, no panels, no
  cards, no charts, no arrows, no flow, no numbered callouts): a single large
  tomato-shaped mechanical kitchen timer sitting alone in the lower two thirds of the
  canvas, centered, drawn at a slight three-quarter angle so it reads as a real object
  rather than an icon. The body is a plump ripe tomato in warm red (#E11D48 leaning
  slightly deeper), with a small stylised green stalk and two leaves on top, and a
  round cream-white dial face set into the front. The dial face carries only minute
  tick marks around its edge, evenly spaced, and one short cream pointer, no digits.
  A soft warm ground shadow pools under the timer so it sits on the surface rather than
  floating.

  THE ONE DEVIATION, the second half of the post's argument: a thin soft teal (#0E9F8E)
  arc traced around the outside of the dial, starting at the top tick and sweeping
  clockwise well PAST the pointer, roughly a third of the way further round, ending in
  a small teal dot. It reads as the dial being wound further than the standard setting.
  Nothing else on the canvas: no desk, no notebook, no paper, no laptop, no phone, no
  hands, no person, no mug, no clock, no second timer.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the timer begins, two lines, VERBATIM text:
  line 1, "Pomodoro Technique:" in a playful hand-lettered brush script, with the
  single word "Pomodoro" in bright red (#E11D48) and "Technique" plus the colon in
  near-black (#222222);
  line 2, "How It Works and When to Break It" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: sunlit warm olive-moss ground, ripe warm red tomato, cream paper white dial,
  warm leaf green stalk, near-black #222222 for outlines and title, one red accent word
  #E11D48, soft teal #0E9F8E used ONLY on the wound-past arc and its end dot. Mood:
  clean, approachable, confident, optimistic. Flat vector, crisp bold outlines, soft
  cel shading, no gradients beyond a hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no amber, apricot,
  sand, sage or terracotta ground, no desk scene, no notebook, no paper, no laptop, no
  phone, no screen, no hands, no fingers, no person, no face, no coffee mug, no wall
  clock, no hourglass, no more than one timer, no tomato slices or vegetables, no salad,
  no numbered callouts or badges, no digits or numerals on the dial, no infographic
  panels, no cards, no arrows, no charts, no clock hands drawn as a real clock, no brand
  names or logos, no garbled or misspelled lettering, no extra words beyond the title and
  the wordmark, no lorem ipsum, no duplicated watermark, no 3D render, no photorealism,
  no stock-photo look, no heavy drop shadows on text, no busy texture, no cluttered
  background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, bright saturated single-color ground, wordmark bottom-left). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/bullet-journal-for-beginners/featured.png` (apricot), `blog-ops/assets/screen-free-hobbies/featured.png` (sand-oat), `blog-ops/assets/how-to-take-notes-on-ipad/featured.png` (amber). Olive-moss is chosen because none of the last five covers used a saturated warm green ground, and it makes the red tomato the single focal object.
- **Source data (if any):** `facts.md` line 57 (Cirillo timed his study sessions with a tomato-shaped kitchen timer; `pomodoro` is Italian for tomato) and line 17 (the 25 / 5 / 4 / 15-30 structure the teal arc gestures at). No figure is rendered as text.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:`, which reads `Pomodoro Technique: How It Works and When to Break It`, including the colon. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The dial must carry **no digits**: a garbled "25" on the face would be a visible error, so tick marks only.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero, which is an illustration job rather than a diagram job; there is no screen to capture. This slot is never converted to `remotion`.

### Watermark

- **`remotion` slots:** Image 1 uses the shared `<BlogWatermark />` component (wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt for the featured hero only, bottom-left, ~55% opacity per `image-style.md` §Watermark. The three in-post illustrations follow the existing library convention and carry no wordmark. If the featured render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph. All four placeholders in this draft already satisfy that rule as the writer placed them (Image 3 sits after the section's opening line and its one-line bridge question); do not move them.

**Table-redundancy rule:** this draft contains **no markdown tables at all**, so no chart-style slot can duplicate one. The check passes trivially.

### Image 1, after H2 "What the Pomodoro Technique actually is" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The full cycle as a loop diagram, 25 minutes of focused work leading to a 5-minute break, repeated four times, then branching into a 15-to-30-minute long break. Type: remotion. Suggested filename: pomodoro-cycle-diagram.png]`
- **Type:** `remotion`
- **Concept:** A loop diagram: a Focus 25 min card and a Break 5 min card side by side with a return arc labelled "repeat 4 times" running back under them, and a single branch dropping from the fourth break to an accent-tinted Long break 15-30 min card.
- **Suggested filename:** `pomodoro-cycle-diagram.png`
- **Alt text:** `Loop diagram: 25 minutes focus, 5 minute break, repeated four times, then a 15 to 30 minute long break`

#### Production spec

#### If `remotion`

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `PomodoroCycleDiagram`
- **Component file:** `tools/remotion/src/PomodoroCycleDiagram.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` for the final PNG.
- **Mandatory layout primitives:** in-post slot, so **NO title band and NO subtitle**. `<BlogWatermark />` imported from `./BlogWatermark` and left untouched. Canvas background `palette.background`, all content inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post).
  - Subtitle text: **none** (in-post).
  - Layout, top to bottom:
    1. **Cycle row**, vertically centred around y ≈ 420. Two neutral cards side by side, each 520 × 230, horizontally centred as a pair with a **fixed 200 px gap** between them (the adapter's fixed-length arrow rule: one arrow, one fixed gap, never a flex-grown connector).
       - Left card, "one pomodoro": eyebrow `FOCUS` in `fonts.sans`, 26 px, weight 700, `letterSpacing: 1.6`, `palette.muted`; value `25 min` in `fonts.mono`, 76 px, weight 700, `palette.text`; sub-line `one task, no interruptions` in `fonts.sans`, 26 px, `palette.muted`.
       - Right card: eyebrow `BREAK`, value `5 min` (`fonts.mono`, 76 px), sub-line `away from the screen`.
       - Between them, a horizontal sequential connector: `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, arrowhead in the same muted colour, pointing left → right.
    2. **Bracket label above the pair**, centred over both cards at y ≈ 250: a thin `palette.border` bracket line spanning the pair's full width with short downward ticks at each end, and the caption `1 pomodoro` centred above it in `fonts.sans`, 30 px, weight 600, `palette.muted`.
    3. **Return loop**, an SVG path leaving the right card's bottom edge, dropping ~120 px, running back left beneath both cards, and rising into the left card's bottom edge with an arrowhead pointing up. Stroke `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, rounded corner radii ~40 px. Centred on that horizontal run, a small pill sitting ON the line (background `palette.background`, 20 px horizontal padding so the stroke is visually broken behind it, no border) with the text `repeat 4 times` in `fonts.sans`, 30 px, weight 700, `palette.text`.
    4. **Branch down to the long break**: a second path leaving the right card's right edge, curving down and back to the horizontal centre of the canvas, ending with an arrowhead entering the top edge of the long-break card. Same muted sequential styling (`strokeWidth={2.5}`, solid). Beside its vertical run, the label `after the fourth` in `fonts.sans`, 26 px, `palette.muted`, placed clear of the stroke (≥ 24 px).
    5. **Long-break card**, centred horizontally, top edge at y ≈ 880, 640 × 200. This is the composition's **single emphasis card**: background a light `palette.accent` tint (`rgba(14,159,142,0.08)`), border `2px solid palette.accent`. Eyebrow `LONG BREAK` in `fonts.sans`, 26 px, weight 700, `letterSpacing: 1.6`, `palette.accent`; value `15-30 min` in `fonts.mono`, 68 px, weight 700, `palette.text`; sub-line `properly away from the desk` in `fonts.sans`, 26 px, `palette.muted`.
  - Copy (exact strings, nothing else rendered): `FOCUS`, `25 min`, `one task, no interruptions`, `BREAK`, `5 min`, `away from the screen`, `1 pomodoro`, `repeat 4 times`, `after the fourth`, `LONG BREAK`, `15-30 min`, `properly away from the desk`. Use a plain hyphen in `15-30 min`, never an en or em dash (adapter §Typography).
  - Palette: per `blog-ops/profile/image-style.md` / `tools/remotion/src/theme.ts` tokens only, never inline hex. `palette.accent` is used for exactly one role, the long-break card (the outcome the diagram builds to). `palette.warn` is **not** used anywhere: nothing here is a failure state. `palette.primary` is unused.
  - Typography: `fonts.sans` for labels, eyebrows and captions; `fonts.mono` for every duration value (`25 min`, `5 min`, `15-30 min`), per the adapter's "numbers read as data" rule.
  - Icons / SVG assets: **none**. `tools/remotion/public/` does not exist in this repo, so use no `staticFile()` reference; every shape is CSS or inline SVG.
  - Arrows / connectors: per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Arrow conventions. All three connectors are sequential-step connectors (`palette.muted`, `strokeWidth={2.5}`, solid). There is no "chosen vs. not chosen" path here, so **no accent stroke and no dashed stroke**. Map every point off a fixed layout constant (card x/y/w/h), never eyeball offsets.
  - Card recipe: the standard neutral recipe (`palette.surface`, `1px solid palette.border`, `borderRadius: 16`, the adapter's two-layer box shadow, `padding: "26px 28px"`) for the Focus and Break cards; the emphasis/outcome variant for the long-break card only.
- **Source data (if any):** `facts.md` line 17: "25 / 5 / 4 / 15-30, the standard interval structure: 25 minutes of work, a 5-minute break, and a longer 15-to-30-minute break after four cycles", status verified, corroborated by every SERP result analysed. Every numeral in the composition comes from that row; invent nothing.
- **Reference composition to mimic:** `tools/remotion/src/DoomscrollLoopDiagram.tsx` for **code conventions on a loop** (theme imports, the `arrow()` helper that trims a connector to node edges, `<BlogWatermark />` usage). Do **not** copy its pentagon ring layout: that post's loop is a five-node vicious cycle, this one is a two-card cycle with a branch, and the two posts must not ship look-alike diagrams. `tools/remotion/src/SevenDayRampDiagram.tsx` is the closer reference for a horizontal card row with fixed-length connectors.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PomodoroCycleDiagram --output=out/preview-pomodoro-cycle-v1.png
  ```
- **Final export command** (writes into the CURRENT tree; `REPO` derived dynamically so a worktree run does not export into the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PomodoroCycleDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/pomodoro-technique/pomodoro-cycle-diagram.png"
  ```
- **Why this and not a real screenshot:** the cycle is an abstract structure, not a screen; and its whole value is four exact durations rendered as legible text, which is what `remotion` guarantees by construction and `ai-prompt` does not.

---

### Image 2, after H2 "How to run your first Pomodoro today" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A desk mid-session, a physical timer counting down beside an open notebook, phone face-down and pushed out of reach. Type: ai-prompt. Suggested filename: pomodoro-desk-session.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm daylit desk seen at a low three-quarter angle mid-session: a small mechanical timer running beside an open handwritten notebook, with the phone lying face-down at the far edge of the desk, out of arm's reach.
- **Suggested filename:** `pomodoro-desk-session.png`
- **Alt text:** `A desk mid-session: a running kitchen timer, an open notebook, and a phone face-down out of reach`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration of a desk mid-work-session, viewed at a low
  three-quarter angle from just above table height, so the objects have depth and the
  far edge of the desk recedes. Natural light oak desk surface filling the lower two
  thirds, a soft cream wall behind it with generous empty space, warm honey daylight
  coming from the left and soft shadows falling right.

  Three focal objects and nothing else, arranged from near to far:
  1. FOREGROUND CENTRE: an open notebook lying flat, cream pages, a few lines of loose
     handwritten cursive scribble filling the left page and the top of the right page,
     suggestive strokes only, absolutely no readable words, no headings, no bullet
     numbers. A slim capped pen rests in the gutter.
  2. JUST BEHIND AND RIGHT: a small mechanical kitchen timer standing on the desk,
     cream-white body with a warm red trim ring and a plain dial face carrying only
     evenly spaced minute tick marks and one short pointer, no digits. It is clearly
     mid-countdown, suggested by the pointer sitting part-way round and two small thin
     motion ticks beside it, not by any text.
  3. FAR EDGE, PUSHED AWAY: a plain dark phone lying flat and FACE-DOWN at the very back
     right of the desk, small in the frame, deliberately out of reach, screen not
     visible, no glow, no logo.
  Nothing else on the desk: no laptop, no mug, no plant, no lamp, no papers.

  Palette and mood: warm and calm, quietly focused. Natural light oak, cream paper
  white, near-black #222222 ink and outlines, warm grey #6B7280 for soft shadows, warm
  red only on the timer's trim ring, and one small soft teal #0E9F8E detail on the pen
  cap. Brand blue is NOT used, never a blue-dominant scene, never a cold or clinical
  look. Clean bold outlines, soft cel shading, flat colour with a hint of warm light,
  no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults, keeps the in-post set consistent with the cover)
- **Negative prompt** (if the tool supports it):
  ```
  no text, no title lettering, no captions, no labels, no numbers, no digits on the
  timer dial, no legible handwriting, no garbled or misspelled words, no lorem ipsum,
  no arrows, no callout boxes, no numbered badges, no cold blue or navy scene, no
  monochrome brand-blue palette, no clinical white light, no person, no hands, no
  fingers, no arms, no face, no laptop, no monitor, no tablet, no visible phone screen,
  no screen glow, no UI chrome, no app icons, no coffee mug, no plant, no desk lamp, no
  wall clock, no loose papers, no clutter, no brand names or logos, no stray watermark,
  no 3D render, no photorealism, no heavy drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Distinct from in-post Image 3 by framing: this is a calm object still life with no person, Image 3 is a person-led scene.
- **Source data (if any):** none rendered as a figure. The setup illustrates `facts.md` line 59 (once a pomodoro starts it runs to the bell, interruptions get logged not serviced) and the draft's "the phone is the thing you're hiding from" argument. No numeral appears in the image.
- **Text-in-image warning:** this slot must carry **no** legible text. The handwriting is specified as unreadable scribble and the dial carries tick marks only, so there is nothing for the model to garble. If the render produces label-like text or digits anywhere, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** it is a warm atmospheric scene that sets up the how-to section, not a diagram of anything, and there is no screen to capture (the one screen in frame is deliberately face-down).

---

### Image 3, after H2 "When the 25/5 rule stops working, and what to do instead" + its opening lines

- **Draft placeholder (verbatim):** `[IMAGE: Someone deep in a hard problem at a desk, notes spread out, while the timer beside them rings unheeded. Type: ai-prompt. Suggested filename: pomodoro-timer-ignored.png]`
- **Type:** `ai-prompt`
- **Concept:** A woman leaning into a hard problem at a desk covered in spread-out working notes, absorbed, while the small timer beside her elbow visibly rings and she does not look at it.
- **Suggested filename:** `pomodoro-timer-ignored.png`
- **Alt text:** `A woman absorbed in working notes while the timer beside her rings unnoticed`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration of one small scene, viewed three-quarter from the
  front left, on a plain cream background with generous empty space in the upper third.

  A young woman with dark hair loosely tied up sits at a simple oak desk in the lower
  two thirds of the frame, seen from the chest up, leaning forward with both forearms on
  the desk, one hand holding a pen mid-stroke and the other flat on a sheet of paper.
  Her expression is calm, concentrated, absorbed, brows slightly drawn, eyes down on the
  work. Face drawn simply in the flat-vector house style, no photorealism.

  Spread across the desk in front of her: four or five loose sheets of cream paper
  overlapping at angles, covered in loose handwritten cursive scribble and a couple of
  small hand-drawn diagrams (a rough boxes-and-lines sketch, a short list of
  hand-drawn dashes), all suggestive strokes, absolutely no readable words or numbers.

  THE POINT OF THE IMAGE: at her right elbow, near the front edge of the desk, a small
  cream-and-red mechanical kitchen timer is visibly RINGING, drawn with three short
  curved motion lines radiating from each side of it and a slight tilt, so it clearly
  reads as an alarm going off. She is not looking at it, not reaching for it, not
  turning towards it. Her whole body stays angled into the paper.

  Palette and mood: warm and absorbed. Cream background, natural oak desk, cream paper,
  near-black #222222 ink and outlines, warm grey #6B7280 shadows, a soft warm terracotta
  sweater on the character, warm red only on the timer's trim, one small soft teal
  #0E9F8E accent on the pen. Brand blue is NOT used, never a blue-dominant scene. Clean
  bold outlines, soft cel shading, warm light from the left, flat colour, no
  outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no text, no title lettering, no captions, no labels, no speech bubbles, no numbers, no
  digits on the timer dial, no legible handwriting, no garbled or misspelled words, no
  lorem ipsum, no arrows, no callout boxes, no numbered badges, no exclamation marks, no
  cartoon sound-effect words, no cold blue or navy scene, no monochrome brand-blue
  palette, no photorealistic face, no extra limbs, no extra or malformed fingers, no
  warped hands, no second person, no laptop, no monitor, no tablet, no phone, no screen
  glow, no UI chrome, no coffee mug, no plant, no wall clock, no brand names or logos,
  no stray watermark, no 3D render, no photorealism, no stressed, panicked or
  distressed expression, no heavy drop shadows, no cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (the recurring female character, flat vector, warm scenes) and §Illustration palette (warm wood and cream, blue only as an accent). Closest existing look: `blog-ops/assets/how-to-take-notes-on-ipad/featured.png` for the character treatment, but the framing here is tighter and paper-only, no device.
- **Source data (if any):** none rendered as a figure. The scene illustrates the section's lead argument and the r/studytips quote the prose carries ("once your brain finally clicks into complex logic, stopping on an arbitrary timer does more harm than good"), `facts.md` §Reddit quotes. No numeral appears in the image.
- **Text-in-image warning:** this slot must carry **no** legible text. The notes are specified as unreadable scribble, the dial carries no digits, and the ringing is conveyed by motion lines rather than a sound-effect word. If the render produces any lettering, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** the section's point is emotional (the moment the rule earns breaking), which needs a human posture and a ringing object, not a card-and-arrow diagram; and there is no screen to capture.

---

### Image 4, after H2 "The best Pomodoro timers (and the free apps worth trying)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A lineup of physical timers on a wooden desk, a flip cube, a rotating dial timer, a red visual-disc timer and a wind-up tomato timer. Type: ai-prompt. Suggested filename: pomodoro-timers-lineup.png]`
- **Type:** `ai-prompt`
- **Concept:** Four physically distinct timers standing in a row on a warm wooden desk, head-on at eye level: a flip cube, a rotating dial puck, a red shrinking-disc visual timer and a wind-up tomato timer, all unbranded.
- **Suggested filename:** `pomodoro-timers-lineup.png`
- **Alt text:** `Four physical focus timers in a row: a flip cube, a rotating dial, a red disc timer and a tomato timer`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm flat-vector product-family illustration, viewed head-on at desk-eye level with
  a very slight three-quarter turn on each object: four small physical timers standing
  in one evenly spaced row on a natural oak desk surface, cream wall behind with
  generous empty space above the row. Each object sits in its own clear space with a
  soft warm ground shadow beneath it, none of them touching or overlapping. All four are
  roughly the same visual weight, no single hero.

  Left to right:
  1. A matte pastel-grey CUBE timer resting on one face, its upward-facing side plain
     with a small pointer notch, the visible faces carrying only small tick marks, no
     digits, no wordmark.
  2. A flat round PUCK timer, cream body with a knurled rotating outer ring in warm
     walnut, its face divided into four plain coloured quadrants (soft teal, warm sand,
     pale grey, warm red) and a small pointer, no digits.
  3. A VISUAL DISC timer: a cream squarish body with a large round face showing a bold
     warm red pie-shaped segment covering roughly two thirds of the dial, the classic
     shrinking-red-disc look, with a slim cream bezel, no digits.
  4. A plump ripe-red WIND-UP TOMATO timer with a small green stalk and two leaves and a
     cream dial face with tick marks and one short pointer, no digits.
  Nothing else on the desk: no packaging, no price tags, no phone, no notebook, no
  hands.

  Palette and mood: warm, tactile, unglamorous, honest, like objects photographed on a
  real desk rather than a marketing shot. Natural oak, cream white, warm walnut, pastel
  grey, warm red #E11D48 on the disc and the tomato, one soft teal #0E9F8E quadrant on
  the puck. Brand blue is NOT used, never a blue-dominant scene. Clean bold outlines,
  soft cel shading, warm light from the left, flat colour, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no text, no captions, no labels, no product names, no brand names, no wordmarks, no
  logos, no digits or numerals on any dial or face, no digital LCD readout, no garbled or
  misspelled lettering, no lorem ipsum, no price tags, no packaging or boxes, no star
  ratings, no numbered badges, no arrows, no callout boxes, no comparison grid, no
  cold blue or navy scene, no monochrome brand-blue palette, no hands, no fingers, no
  person, no phone, no laptop, no screen, no app UI, no notebook, no coffee mug, no
  plant, no more than four timers, no overlapping objects, no stray watermark, no 3D
  render, no photorealism, no glossy studio marketing shot, no heavy drop shadows, no
  cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm wood tones, warm light, blue as accent only) and the "plain full-page look for tool roundups" convention in §Observed conventions, translated here into an unbranded illustrated lineup. Closest tonal reference: `blog-ops/assets/screen-free-hobbies/featured.png` for the honest, unglamorous object treatment.
- **Source data (if any):** `facts.md` §Products / the draft's five product sections (Ticktime T6 cube, rotating 5/25/10/50 timer, Time Timer Home MOD, Secura visual countdown, tomato mechanical timer). The illustration shows **four generic timer archetypes, not five products**, and deliberately renders no brand identity: the draft names and links the actual products in prose. Do not attempt likenesses of specific SKUs.
- **Text-in-image warning:** this slot must carry **no** legible text or digits. Real timers of these types have printed numerals on their faces, and the draft even quotes preset values (3, 5, 10, 15, 25, 30 and 5/25/10/50), so the model will be tempted to render digits it will garble. The prompt and negative prompt both forbid them: faces carry tick marks, coloured quadrants and pointers only. The alt text claims no numbers, so a garbled numeral is a re-run, not an acceptable render.
- **Why this and not remotion/screenshot:** these are four physical objects with distinct shapes and materials, which is an illustration job; there is no screen to capture, and specced as `screenshot` it would need real product photography this blog does not own. Flat Remotion cards would lose exactly the thing that separates the four picks, their physical form.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/pomodoro-technique/
├── featured.png
├── pomodoro-cycle-diagram.png
├── pomodoro-desk-session.png
├── pomodoro-timer-ignored.png
└── pomodoro-timers-lineup.png
```

Asset folder is created automatically by the Stage 4a.5 image-generation step; this skill does not create it.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/PomodoroCycleDiagram.tsx`, iterate via `npx remotion still PomodoroCycleDiagram --output=out/preview-...png` (throwaway), final export via `npx remotion still PomodoroCycleDiagram --scale=2 --output=blog-ops/assets/pomodoro-technique/pomodoro-cycle-diagram.png`. Use `<BlogWatermark />` and the tokens locked in `src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** the Remotion slot uses `<BlogWatermark />`. The featured `ai-prompt` slot requests the `olgapak.com` wordmark inside the prompt; the three in-post `ai-prompt` illustrations follow the existing library convention and carry no wordmark. Output format: PNG throughout.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `pomodoro-cycle-diagram.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless Stage 4a.5 records one `failed`; then copy that slot's `Prompt:` block into any AI image tool and save the output under the exact `Suggested filename`.
2. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
3. Check the featured render's title against the frontmatter `title:` word by word, and check that no timer dial in Images 2, 3 or 4 has rendered digits.

## Editor notes

- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 29, 64, 110, 142) and 4 in-post slots in `outline.md` §Image placement plan. No delta. The featured slot is frontmatter-only and is not duplicated inline: the hygiene check passes, no placeholder uses `featured.png` or repeats the cover concept.
- **No markdown tables in this draft**, so the table-duplicate-chart check is trivially clean. Image 1 is the only chart-style slot and it visualises a sequence the prose describes in sentences, not a table.
- **Featured stays `ai-prompt`, not negotiable here.** `images.featured_default: ai-prompt` plus `blog-ops/profile/custom-instructions.md` §Image style, which forbids converting the featured slot to `remotion` for auto-rendering. Publishing is a human step regardless.
- **Priority-ladder check.** Only Image 1 is a genuine diagram carrying exact durations as text, so only Image 1 is `remotion` (the highest enabled rung that fits). Images 2-4 are scenes and physical objects: no verbatim numerals, no data-accurate layout, so `remotion` would be the wrong rung and `ai-prompt` is correct per `custom-instructions.md` §Image style. **No `screenshot` slot is warranted anywhere in this post:** the section on free apps names Pomofocus, Forest and Flow in prose, and an app screenshot there would be an off-brand external capture that blocks the autopilot run on a manual action-item for no editorial gain. Flagging it as a deliberate omission in case a reviewer expects one.
- **JUDGMENT CALL, Image 4 shows four timer archetypes for five products.** The draft reviews five (Ticktime T6 cube, rotating 5/25/10/50, Time Timer Home MOD, Secura visual countdown, tomato mechanical). The cube and the rotating puck are visually distinct, but the Time Timer MOD and the Secura are both red-disc visual timers and would render as near-duplicates, so the lineup collapses them into one disc timer. Nothing in the image or the alt text claims a count. If the human wants one object per product, the fix is a fifth object with a much larger dial and a magnetic back, not a relabelled duplicate.
- **JUDGMENT CALL, Image 1 renders "one pomodoro" as a bracket over the pair.** The draft's placeholder asks for the loop, the four repetitions and the branch; the `1 pomodoro` bracket is my addition so the reader can see what the unit actually is (the section's opening sentence defines it). Drop it if a reviewer finds the composition busy, everything else in the spec stands without it.
- **No chart needs data that is missing.** Every numeral in Image 1 comes from `facts.md` line 17 (25 / 5 / 4 / 15-30), verified and multi-source. Nothing here needs fresh data before generation.
- **`tools/remotion/public/` does not exist.** Image 1's spec therefore uses no `staticFile` assets; every shape is CSS or inline SVG. Do not add an asset directory for this post.
- **Do not let Image 1 converge on `DoomscrollLoopDiagram`.** That published composition is also a loop, and it is cited here for code conventions only. Its five-node pentagon ring must not be reused: this diagram is two cards, a return arc and one branch.
- **Rotation ledger.** This run writes `blog-ops/featured-log/2026-09-08-pomodoro-technique.md`. `blog-ops/featured-log.md` is the legacy ledger and was read only, never appended to. Blocked by the last two prior entries: `big-number` (bullet-journal-for-beginners) and `negative-space` (screen-free-hobbies).
