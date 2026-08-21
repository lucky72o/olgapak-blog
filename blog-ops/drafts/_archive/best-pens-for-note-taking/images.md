# Images: best-pens-for-note-taking

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/best-pens-for-note-taking/outline.md` (image placement plan), `blog-ops/drafts/best-pens-for-note-taking/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/best-pens-for-note-taking/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (screenshot slots, failed fallbacks).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4` (1 featured + 3 in-post)
  - Screenshots: `0`
- File destination: `blog-ops/assets/best-pens-for-note-taking/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` — from `images.featured_default` in `blog-ops/config.yaml`, and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion` "to auto-render for publishing". A manual/codex `ai-prompt` hero is the expected deliverable here.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title band and the pen row inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither.
- **Concept:** A tidy row-and-grid of near-identical dark pens lying at one shared angle, with exactly one pale pen lifted out of the line and marked in teal, over a flat saturated warm ground and the hand-lettered post title.
- **Archetype:** `pattern-break` — a repeated motif where exactly one element differs, and the anomaly carries the message. It fits because the post's whole argument is *there is no single best pen, there is the one that matches how you write*: a wall of interchangeable pens with one pulled out says "eleven picks, one of them is yours" in a single glance, is legible as a thumbnail, and renders no numerals that would fight the title. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (`blog-ops/featured-log.md`, the legacy read-only ledger; `blog-ops/featured-log/` does not exist yet and is created by this run): the last two rows are `charting-method-note-taking` = `object-metaphor` and `digital-detox-plan` = `object-metaphor`, so **`object-metaphor` is OFF LIMITS**. No prior row exists for this slug, so nothing is being churned away from a re-run.
  - **Alternatives considered and rejected:**
    - `scene-vignette` (the outline's own suggestion: an open notebook mid-sentence with a few pens beside it) — rejected. It is a generic study-desk picture, this library already ships several (`student-desk-spiral`, the best-notebooks covers), and the same scene language is used again inside this post at in-post Image 4. The cover would preview a body image.
    - `big-number` (a giant hand-lettered "11") — rejected on the same ground the `digital-detox-plan` cover rejected it: the verbatim title band already reads "11 Picks That Survive Class", so an oversized numeral says the same word twice and fights the lettering.
    - `split-contrast` (a wet glossy stroke vs a crisp dry stroke) — rejected, that is exactly in-post Image 1 (the Remotion trade-off axis); the cover would duplicate a body diagram.
    - `diagram-lite` — rejected per the skill's own guidance: the concept needs no flow, and a card-and-arrow cover is the house default this rotation exists to break.
- **Suggested filename:** `featured.png`
- **Alt text:** `A row of near-identical pens with one lifted out and marked, over the post title`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat sunlit sage green field (warm green, NOT blue, NOT navy, NOT
  marigold, NOT terracotta) filling the whole canvas, with generous empty space.

  Composition (pattern-break archetype: ONE repeated motif, exactly ONE element
  different; no panels, no cards, no charts, no arrows, no flow): a neat arrangement of
  slim capped pens lying flat on the ground plane, filling the lower two thirds of the
  canvas, drawn head-on from directly above. Roughly eleven pens, all identical in
  shape and all lying at exactly the same shallow diagonal angle, evenly spaced in two
  tidy rows like a display tray. Every pen but one is drawn in near-black (#222222) and
  warm walnut brown, matte and low contrast, deliberately interchangeable.

  THE ANOMALY, the only focal deviation and the point of the whole image: one single
  pen, positioned slightly right of center, is drawn in cream paper white with a soft
  teal (#0E9F8E) cap and clip, and is lifted OUT of the tidy arrangement, rotated a few
  degrees off the shared angle and nudged forward with a small soft ground shadow under
  it so it clearly sits above the others. Beneath its tip, one short confident
  hand-drawn teal ink stroke on the ground, as if it has just been written with.
  Nothing else on the canvas: no desk, no notebook, no paper, no hands, no person, no
  mug, no plants, no icons.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the pens begin, two lines, VERBATIM text:
  line 1, "Best Pens for Note Taking:" in a playful hand-lettered brush script, with
  the single word "Pens" in bright red (#E11D48) and "Best", "for", "Note", "Taking"
  and the colon in near-black (#222222);
  line 2, "11 Picks That Survive Class" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: sunlit warm sage green ground, cream paper white, warm walnut brown,
  near-black #222222 for the pen bodies, outlines and title, one red accent word
  #E11D48, soft teal #0E9F8E used ONLY on the single lifted pen and its ink stroke.
  Mood: clean, approachable, confident, optimistic. Flat vector, crisp shapes, subtle
  warm shading, no gradients beyond a hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no marigold or
  terracotta ground, no desk scene, no notebook, no open book, no sheet of paper, no
  hands, no fingers, no person, no coffee mug, no plants, no lamp, no pen cup or
  holder, no fanned bouquet of pens, no rainbow of colored pens, no more than one
  non-black pen, no numbered callouts or badges, no infographic panels, no cards, no
  arrows, no charts, no rulers or measurement marks, no brand names or pen wordmarks on
  the barrels, no stray logos, no garbled or misspelled lettering, no extra words
  beyond the title and the wordmark, no lorem ipsum, no duplicated watermark, no 3D
  render, no stock-photo realism, no heavy drop shadows on text, no busy texture, no
  cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, bright saturated single-color ground) and §Illustration palette (warm, never cold blue). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/digital-detox-plan/featured.png` (marigold, `object-metaphor`) and `blog-ops/assets/time-blocking/featured.png` (terracotta, `negative-space`).
- **Source data (if any):** none rendered as a figure. The pen count echoes the post's 11 picks illustratively; if the model draws nine or twelve pens that is acceptable, no text or numeral states a count and the alt text does not claim one.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:` — `Best Pens for Note Taking: 11 Picks That Survive Class` — including the colon and the numeral 11. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The pen barrels must stay unlabelled; do NOT let the model write brand names on them.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero, which is an illustration job rather than a diagram job; there is no screen to capture. This slot is never converted to `remotion`.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt, bottom-left, ~55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph. All four placeholders in this draft already satisfy that rule as the writer placed them; do not move them.

**Table-redundancy rule:** no chart-style slot in this post repeats a markdown table. The post's two tables (the shortlist under H2 1 and the use-case matrix under H2 4) have **no image slot attached** — the outline deliberately omits one on "Which pen for which kind of note-taking" so the table is not redrawn as a chart. Do not add a slot there.

### Image 1, after H2 "Gel, ballpoint, rollerball or fineliner?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A clean diagram placing the four ink families on a horizontal axis running from "smooth and wet" on one end to "fast-drying and firm" on the other, with the three note-taking tip widths (0.38 / 0.5 / 0.7 mm) drawn underneath at actual relative line thickness. Type: remotion. Suggested filename: ink-families-tradeoff.png]`
- **Type:** `remotion`
- **Concept:** A two-band diagram: the four ink families placed along one horizontal trade-off axis from "smooth and wet" to "fast-drying and firm", and beneath it three ink strokes drawn at the true relative thickness of a 0.38, 0.5 and 0.7 mm tip.
- **Suggested filename:** `ink-families-tradeoff.png`
- **Alt text:** `Ink families on a smooth-and-wet to fast-drying scale, with 0.38, 0.5 and 0.7 mm tips at true relative width`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `InkFamiliesTradeoff` (register in `tools/remotion/src/Root.tsx`, `component={InkFamiliesTradeoff}`, the reference, never a JSX element)
- **Component file:** `tools/remotion/src/InkFamiliesTradeoff.tsx`
- **Canvas dimensions:** 1800 × 1200 (`CANVAS` from `src/theme.ts`, matches the series); render final at `--scale=2`.
- **In-post image: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout, top to bottom, everything inside `SAFE_MARGIN` (120), everything positioned off fixed helper functions, never hand-placed pixels:
    1. **Band A, the trade-off axis (y ≈ 200–640).** One horizontal rule at `AXIS_Y = 470`, from `LEFT_X = 200` to `RIGHT_X = 1600`, 3 px `palette.border`, rounded caps. End labels sit just above the rule ends in `fonts.sans`, uppercase, 30 px, `palette.muted`, letter-spaced: left-aligned `SMOOTH AND WET` at `LEFT_X`, right-aligned `FAST-DRYING AND FIRM` at `RIGHT_X`.
    2. **Four family markers** at `xAt(i) = LEFT_X + i * ((RIGHT_X - LEFT_X) / 3)`, i.e. x = 200, 666, 1133, 1600. Nudge the two end markers inward by ~40 px so their labels stay inside `SAFE_MARGIN`. Each marker is a 4 px vertical tick in `palette.muted` crossing the axis (24 px above, 24 px below), with a stacked label ABOVE the axis: family name in `fonts.sans` 44 px semibold `palette.text`, and one muted trait line beneath it in `fonts.sans` 27 px `palette.muted`, max ~230 px wide, wrapping to two lines rather than overflowing. Left to right: Rollerball, Gel, Fineliner, Ballpoint.
    3. **Takeaway pill, centered, y ≈ 600.** A single centered pill per remotion.md §In-post stacked comparisons: `palette.accent` tint background (`rgba(14,159,142,0.10)`), `palette.accent` text, bold, uppercase, generous horizontal padding. This is the composition's **one** accent element, and it is deliberately NOT on any pen family: the post argues there is no winner, so no family gets the emphasis treatment.
    4. **Divider, y = 700.** Full-width 1 px `palette.border` rule from `LEFT_X` to `RIGHT_X`.
    5. **Band B, the tip widths (y ≈ 760–1060).** Three rows, 100 px apart (row baselines y = 800, 900, 1000). Each row: the width label at `LEFT_X` in `fonts.mono` 34 px `palette.text` (a number, so mono per §Typography), then the stroke starting at x = 460 and running ~900 px, drawn in SVG in `palette.text` with `strokeLinecap="round"`. **Thickness is computed, never eyeballed:** `PX_PER_MM = 24`, `wAt(mm) = mm * PX_PER_MM` → 9.1 px, 12 px, 16.8 px. Same helper for all three, so the ratio on the page is the true ratio of the tips. Each stroke is a straight run that ends in one gentle hand-written squiggle (a fixed cubic path, identical for all three rows, same `strokeWidth`) so the width reads the way it would in handwriting. A short caption sits to the right of each stroke in `fonts.sans` 27 px `palette.muted`.
  - Copy (exact strings, no em-dashes, no enclosed glyphs):
    - Axis ends: `SMOOTH AND WET` / `FAST-DRYING AND FIRM`
    - Family names: `Rollerball`, `Gel`, `Fineliner`, `Ballpoint`
    - Family traits: `Wettest line, slowest to dry` / `Darker and glossier, sits wet` / `Firm felt tip, drawing tool first` / `Dries almost on contact`
    - Takeaway pill: `NO WINNER, ONLY A POSITION ON THIS LINE`
    - Width labels: `0.38 mm`, `0.5 mm`, `0.7 mm`
    - Width captions: `Hairline, needs smooth paper` / `The middle ground` / `Broad and dark when you rush`
  - Palette: per `blog-ops/profile/image-style.md` tokens + remotion.md §Color conventions. Background `palette.background`; strokes, family names and width labels `palette.text`; axis, ticks and all secondary copy `palette.muted` / `palette.border`; `palette.accent` used once only, on the takeaway pill. `palette.warn` unused (nothing here is a failure state). No `opacity < 1` dimming.
  - Typography: `fonts.sans` for names, traits, axis labels and the pill; `fonts.mono` for the three tip-width values. No em-dash (U+2014) anywhere in rendered text.
  - Icons / SVG assets: none. `tools/remotion/public/` does not exist in this project, so draw everything in CSS/SVG; do not reference `staticFile`.
  - Arrows / connectors: none. This is a scale, not a flow, so no arrowheads: the two end labels carry the direction. Do not add a directional arrow along the axis.
  - Card recipe: none. No cards in this composition, the axis and the stroke rows are the whole layout.
- **Source data:** `facts.md` line 16 (0.38 / 0.5 / 0.7 mm as the meaningful note-taking range, verified multi-source) for the three widths; `facts.md` line 54 (ballpoint ink dries almost immediately, gel sits wet longer) and line 56 (ballpoint outlasts gel) for the two ends of the axis. **The ordering of Fineliner between Gel and Ballpoint is an editorial placement, not a sourced figure** — see §Editor notes. The `PX_PER_MM = 24` scale factor is a hardcoded illustrative constant; only the *ratio* between the three strokes is a claim.
- **Reference composition to mimic:** `tools/remotion/src/SevenDayRampDiagram.tsx` (fixed coordinate frame, `xAt()`-style helpers, a baseline rule and captions off one grid). Fall back to `tools/remotion/src/SampleDiagram.tsx` for the base scaffold. Take its code conventions and layout language, not its ramp shape.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still InkFamiliesTradeoff --output=out/preview-ink-families-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe, writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still InkFamiliesTradeoff --scale=2 \
    --output="$REPO/blog-ops/assets/best-pens-for-note-taking/ink-families-tradeoff.png"
  ```
- **Why this and not a real screenshot:** it is an explanatory diagram of a physical trade-off, there is nothing real to capture, and only Remotion renders the exact tip-width numerals and true relative stroke thickness by construction, which is the entire point of the slot.

---

### Image 2, after H2 "The 11 best pens for note taking" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The same short handwritten sentence written out five times on one page, each in a different ink type, with visible differences between them: line darkness, a smudge where a hand dragged across one, and a hint of show-through on another. Type: ai-prompt. Suggested filename: ink-types-writing-sample.png]`
- **Type:** `ai-prompt`
- **Concept:** A close, slightly angled view of one sheet of cream ruled paper carrying the same short handwritten line five times, each stroke a visibly different ink: crisp and pale, dark and glossy, one smeared sideways by a dragged hand, one showing faintly through from the reverse.
- **Suggested filename:** `ink-types-writing-sample.png`
- **Alt text:** `The same line written five times in different inks, one smeared and one showing through the page`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline: a single
  sheet of cream ruled paper filling most of the frame, lying on a light natural oak
  desk surface with a little warm lamplight falling across it. Viewed from above at a
  slight three-quarter angle so the page has depth, with a soft ground shadow under its
  edge and one corner lifting very slightly.

  On the page, five short handwritten lines of the same length, stacked evenly down the
  sheet, each written in a visibly different ink so a reader can compare them at a
  glance:
  line 1, a fine crisp mid-grey line, thin and even;
  line 2, a dark glossy near-black line, noticeably heavier and wetter looking, with a
  faint sheen on the strokes;
  line 3, a dark line with a soft horizontal smear pulled sideways from its right end,
  as if a hand dragged across it before it dried;
  line 4, a medium warm-black line, matte and dry, perfectly clean;
  line 5, a fine deliberate line with a faint pale shadow of the same writing showing
  through from the reverse of the page beneath it.
  The handwriting is loose cursive scribble, suggestive rather than readable, no
  legible words, no labels, no numbers.

  Beside the page, at most two props: one slim capped pen resting on the desk at a
  shallow angle near the lower right, and one more pen just out of the page's edge.
  Nothing else on the desk.

  Palette: warm natural oak, cream paper white, near-black #222222 ink, warm grey
  #6B7280 for the fine and faded strokes, one small soft teal #0E9F8E detail on a pen
  cap. Warm, inviting, tactile: natural wood tones, cream paper, warm light. Brand blue
  is NOT used here. Flat vector with subtle warm shading and soft paper texture, crisp
  shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults, keeps the in-post set consistent with the cover)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no arrows, no callout
  boxes, no numbers, no legible words, no garbled or misspelled text, no lorem ipsum,
  no cold blue or navy scene, no monochrome brand-blue palette, no rainbow of bright
  colored inks, no highlighters, no hands, no fingers, no arms, no person, no laptop,
  no phone, no screen, no coffee mug, no clutter, no brand names or logos on the pens,
  no stray watermark, no 3D render, no photorealism, no heavy drop shadows, no busy
  background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette — match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`.
- **Source data (if any):** `facts.md` line 54 (ballpoint dries on contact, gel sits wet longer) and line 57 (the smudging / show-through failure vocabulary). The image shows behavior, not figures; nothing numeric is rendered.
- **Text-in-image warning:** this slot must carry **no** legible text. The handwriting is deliberately specified as unreadable scribble, and there are no ink-type labels in the image — the five families are named in the prose immediately around it, so garbled AI lettering has nothing to garble. If the render produces label-like text anywhere, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** the whole point is the *look* of ink on paper (sheen, smear, show-through), which is a texture and lighting job; a flat Remotion diagram cannot fake wet ink convincingly, and there is no screen to capture.

---

### Image 3, after H2 "Your paper matters as much as your pen" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Close-up of three labelled handwriting samples side by side on different papers, demonstrating feathering (ink spreading out from the letter edges), bleeding (ink soaked through to the reverse), and ghosting (writing faintly visible through the page but not soaked through). Type: ai-prompt. Suggested filename: paper-feathering-bleeding-ghosting.png]`
- **Type:** `ai-prompt`
- **Concept:** Three cream paper swatches side by side in macro close-up, each showing the same short handwritten word behaving differently: furry spreading edges, ink soaked visibly through to the back, and a faint ghost of the writing showing through a clean page.
- **Suggested filename:** `paper-feathering-bleeding-ghosting.png`
- **Alt text:** `Three paper swatches showing feathering, bleed-through, and ghosting from the same pen`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, tactile flat-vector illustration, macro close-up, viewed straight on from
  above: three rectangular cream paper swatches of the same size side by side, evenly
  spaced with generous space between them, resting on a warm natural oak surface with
  soft warm light and a subtle shadow under each swatch. Each swatch shows the same
  short handwritten word written across it in dark ink, and each behaves differently:

  LEFT swatch: the ink has crept sideways out of the letter edges into fine hairy
  fibres, so the writing looks furry and slightly blurred, the paper visibly toothy and
  fibrous.

  CENTRE swatch: the same word, but heavy dark ink has soaked right through the sheet,
  with dark saturated blotches pushing through and a hint of the reverse side visible
  at the swatch's lifted lower corner, showing the writing coming through as solid dark
  marks.

  RIGHT swatch: the same word written crisply and cleanly, with only a faint pale grey
  shadow of writing showing through from the reverse, soft and washed out, clearly not
  soaked through.

  Under each swatch, one short hand-lettered label in a bold rounded sans, near-black
  #222222, exactly these words and nothing else, in this order left to right:
  "Feathering", "Bleeding", "Ghosting". No other text anywhere in the image.

  Palette: warm natural oak ground, cream paper white, near-black #222222 ink, warm
  grey #6B7280 for the faint show-through, and one small soft teal #0E9F8E accent
  underline beneath the "Ghosting" label only. Brand blue is NOT used. Warm and
  inviting rather than clinical, flat vector with subtle paper texture and warm
  shading, crisp shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no extra text beyond the three labels, no captions, no sentences, no definitions, no
  numbers, no gsm figures, no arrows, no callout boxes, no numbered badges, no garbled
  or misspelled lettering, no lorem ipsum, no cold blue or navy scene, no monochrome
  brand-blue palette, no white clinical laboratory look, no hands, no fingers, no
  person, no pens in frame, no notebook spiral or binding, no highlighters, no logos,
  no stray watermark, no 3D render, no photorealism, no heavy drop shadows, no busy
  background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm wood tones, cream paper, warm light). **Deliberately unlike** `blog-ops/assets/best-notebooks-for-note-taking/paper-problems-diagram.png`, the flat four-card Remotion treatment of the same vocabulary on a neighbouring post: this one is a warm macro close-up of real-looking paper, so the two posts do not ship near-identical images. Keep it that way.
- **Source data (if any):** `facts.md` line 57 (feathering / bleeding / ghosting definitions) and line 32 (the r/notebooks comment the prose quotes for the same three terms). No figure is rendered; do **not** put gsm numbers in the image, `facts.md` line 59 says weight does not predict this and the prose makes that point in words.
- **Text-in-image warning:** this slot needs **three exact words** rendered legibly: `Feathering`, `Bleeding`, `Ghosting`, in that left-to-right order. gpt-image renders short labels reasonably but not reliably. Check every letter and the order against the prose definitions before accepting. If the labels garble or reorder after one re-run, either overlay them as a post-processing text layer on the illustration, or fall back to a `remotion` composition (see §Editor notes) — never ship misspelled or mismatched labels, since the whole section is about people mixing these three words up.
- **Why this and not remotion/screenshot:** feathering, bleed-through and ghosting are ink-and-fibre textures; a flat vector diagram can only symbolise them, and the neighbouring post already used the flat card treatment. Nothing here exists on a screen to capture.

---

### Image 4, after H2 "The honest limits nobody mentions" + its two opening lines

- **Draft placeholder (verbatim):** `[IMAGE: A late-night study desk scene lit by a single lamp, with a small graveyard of dead and capless pens pushed to one side and a thick stack of finished handwritten notes beside them. Type: ai-prompt. Suggested filename: dead-pens-study-desk.png]`
- **Type:** `ai-prompt`
- **Concept:** A late-night desk under one warm lamp, with a heap of spent, capless, chewed-looking pens pushed to one side and a thick stack of finished handwritten pages beside them, the visual cost of a term of note-taking.
- **Suggested filename:** `dead-pens-study-desk.png`
- **Alt text:** `A heap of spent, capless pens beside a thick stack of finished handwritten notes at night`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, cosy flat-vector illustration of a late-night study desk, no title lettering,
  no headline: a natural oak desktop seen from a low three-quarter angle, lit by one
  small warm desk lamp at the upper left whose pool of amber light falls across the
  desk and fades into a deep warm-brown dark room behind. Night outside, one window
  edge hinted at in the shadow, no city detail.

  Two focal groups on the desk and nothing else:
  LEFT, a small graveyard of dead pens pushed into an untidy heap: eight to ten spent
  pens lying at every angle, most of them uncapped with the caps scattered loose beside
  them, one snapped in half, a couple with visibly empty transparent ink barrels, drawn
  in muted near-black, warm grey and faded warm walnut so the pile reads as used up and
  discarded.
  RIGHT, a thick, slightly untidy stack of finished handwritten pages, cream paper,
  maybe forty sheets high with the edges not quite aligned, the top page showing loose
  cursive scribble that is suggestive and not readable, no legible words. One single
  surviving pen rests neatly on top of the stack, in cream with a soft teal #0E9F8E
  cap: the only clean, cool-toned object in the frame.

  Generous empty desk space between the two groups so the contrast reads instantly.

  Palette: warm amber lamplight, deep warm brown shadow, natural oak, cream paper
  white, near-black #222222 and warm grey #6B7280 for the dead pens, one soft teal
  #0E9F8E accent on the surviving pen's cap. Brand blue is NOT used, the scene is warm,
  not cold. Flat vector with soft warm shading and a gentle light falloff, crisp
  shapes, no outline-only line art. Mood: honest and a little rueful, tired but not
  bleak.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no text, no title lettering, no captions, no labels, no numbers, no legible
  handwriting, no garbled or misspelled words, no lorem ipsum, no arrows, no callout
  boxes, no cold blue or navy night scene, no monochrome brand-blue palette, no harsh
  clinical white light, no person, no hands, no fingers, no face, no laptop, no phone,
  no tablet, no screen, no glowing monitor, no coffee mug, no clock, no plants, no
  bookshelf, no clutter beyond the two groups, no brand names or logos on the pens, no
  bin or wastebasket, no crumpled paper balls, no stray watermark, no 3D render, no
  photorealism, no horror or grim tone, no skulls or literal graveyard imagery
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm wood tones, cream paper, warm light; the `finished-notebooks-shelf` reference look). Distinct from in-post Image 2 by lighting and framing: Image 2 is a daylit overhead page, this is a low-angle night scene.
- **Source data (if any):** `facts.md` line 26 (the r/pens top comment that no gel pen survives heavy note-taking) and line 56 (ballpoint outlasts gel because it lays down less ink). The pile size is illustrative; no count is claimed in the image or the alt text.
- **Text-in-image warning:** this slot must carry **no** legible text. The handwriting on the top page is specified as unreadable scribble and there are no labels. "Graveyard" is a figure of speech from the draft placeholder: the negative prompt explicitly blocks literal graveyard/skull imagery, keep it a heap of pens.
- **Why this and not remotion/screenshot:** it is an atmospheric scene carrying the section's emotional point (pens die, notes accumulate), not a diagram of anything, and there is no screen to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/best-pens-for-note-taking/
├── featured.png
├── ink-families-tradeoff.png
├── ink-types-writing-sample.png
├── paper-feathering-bleeding-ghosting.png
└── dead-pens-study-desk.png
```

Asset folder is created automatically by the Stage 4a.5 image-generation step; this skill does not create it.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate via `npx remotion still <Id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <Id> --scale=2 --output=blog-ops/assets/best-pens-for-note-taking/<filename>`. Use `<BlogWatermark />` and the tokens locked in `src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slot uses `<BlogWatermark />`. The featured `ai-prompt` slot requests the `olgapak.com` wordmark inside the prompt; the three in-post `ai-prompt` illustrations follow the existing library convention and carry no wordmark. Output format: PNG throughout.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `ink-families-tradeoff.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the four automated slots unless Stage 4a.5 records one `failed`; then copy that slot's `Prompt:` block into any AI image tool and save the output under the exact `Suggested filename`.
2. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
3. Check the featured render's title against the frontmatter `title:` word by word, and Image 3's three labels against the prose definitions.

## Editor notes

- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 46, 67, 223, 245) and 4 in-post slots in `outline.md` §Image placement plan. No delta. The featured slot is frontmatter-only and is not duplicated inline, the hygiene check passes.
- **No slot on H2 4 "Which pen for which kind of note-taking", by design.** That section is a markdown table, and the outline deliberately omits an image there so a chart does not re-present table content. Same for the shortlist table under H2 1. Do not add either.
- **Featured stays `ai-prompt`, not negotiable here.** `images.featured_default: ai-prompt` plus `blog-ops/profile/custom-instructions.md` §Image style, which forbids converting the featured slot to `remotion` for auto-rendering. Publishing is a human step regardless.
- **Type mix is content-driven, not blanket-converted.** Only Image 1 is a genuine diagram (an axis with computed stroke widths and exact numerals), so only Image 1 is `remotion`. Images 2–4 are scenes and textures, which is what `ai-prompt` is for per `custom-instructions.md`. Priority-ladder check: no `screenshot` slot is warranted anywhere in this post (nothing external to capture, no product UI), and no chart-style `remotion` slot duplicates a table.
- **JUDGMENT CALL, the fineliner's position on the axis (Image 1).** `facts.md` anchors both ends: ballpoint dries on contact (line 54) and rollerball is the wettest/slowest (draft prose). It does **not** state where a fineliner's pigment ink sits on dry time. I placed Fineliner between Gel and Ballpoint on the grounds that its tip is firm and its pigment ink dries faster than gel. That is editorial, and a reviewer may want it moved or the axis relabelled to be about tip firmness only. Flagging so the human can override before the composition is written.
- **NOTE, Image 3 overlaps a published image's subject.** `best-notebooks-for-note-taking` already ships `paper-problems-diagram.png`, a flat four-card Remotion diagram of feathering / bleeding / ghosting (plus clean writing). This post's Image 3 covers the same vocabulary. It stays `ai-prompt` deliberately so the two posts do not ship near-identical assets: warm macro close-up of real-looking paper here, flat card grid there. If Image 3's labels garble twice at Stage 4a.5, the fallback is a new `remotion` composition — but it must not be a copy of `PaperProblemsDiagram.tsx`, or the two posts converge.
- **No chart needs data that is missing.** Image 1's only hard numbers (0.38 / 0.5 / 0.7 mm) are in `facts.md` line 16, verified multi-source. Nothing here needs fresh data before generation.
- **`tools/remotion/public/` does not exist.** Image 1's spec therefore uses no `staticFile` assets; everything is CSS/SVG. Do not add an asset directory for this post.
- **Rotation ledger.** This run writes `blog-ops/featured-log/2026-08-08-best-pens-for-note-taking.md` (creating the directory, which did not exist). `blog-ops/featured-log.md` is the legacy ledger and was read only, never appended to.
