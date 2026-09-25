# Images: best-highlighters-for-studying

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/best-highlighters-for-studying/outline.md` (image placement plan), `blog-ops/drafts/best-highlighters-for-studying/draft-v3.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/best-highlighters-for-studying/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (screenshot slots, failed fallbacks).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `2`
  - AI-generated (`ai-prompt`): `3` (1 featured + 2 in-post)
  - Screenshots: `0`
- File destination: `blog-ops/assets/best-highlighters-for-studying/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml`, and locked by `blog-ops/profile/custom-instructions.md` §Image style ("Featured image is always `ai-prompt`... do NOT override the featured slot to `remotion`"). Not the planner's own pick; this slot is never converted.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target roughly 1800 x 1200). Keep the title band and both pages inside the central 80% vertically so the 1.91:1 OG/Twitter crop slices only empty ground.
- **Concept:** Two identical cream pages side by side on a flat lilac ground: the left one drenched edge to edge in neon yellow, the right one almost clean with only three short marks (yellow, pink, blue), a small teal tick under the winning side, beneath the hand-lettered post title.
- **Archetype:** `split-contrast`, a two-panel this-vs-that composition where the accent marks the winning side. It fits because the post's thesis is not "buy a highlighter", it is *the best highlighters only work with a system*: the intro's glowing chapter versus the three-colour key, said in one glance with no numerals, no cards and no arrows. Readable as a thumbnail, and it is the argument that separates this post from every other roundup. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date ascending): the last two entries from prior posts are `bullet-journal-for-beginners` = `big-number` (2026-08-26) and `screen-free-hobbies` = `negative-space` (2026-09-02), so **`big-number` and `negative-space` are OFF LIMITS**. No prior entry exists for this slug, so nothing is being churned away from a re-run. This run writes `blog-ops/featured-log/2026-09-06-best-highlighters-for-studying.md`.
  - **Alternatives considered and rejected:**
    - `scene-vignette` (the outline's own suggestion: the recurring female character at a warm wooden desk with an open textbook and a fan of pastel highlighters). Rejected. It is a generic study-desk picture, the library already ships several of them (`how-to-take-notes-on-ipad` used exactly that archetype in August), and the same scene language runs again inside this post at in-post Image 3. The cover would preview a body image.
    - `pattern-break` (a row of identical highlighters with one lifted out). Rejected hard. That is verbatim the `best-pens-for-note-taking` cover from 2026-08-08, on the neighbouring roundup about the neighbouring product. Two sibling posts would ship what looks like the same picture with different barrels.
    - `object-metaphor` (one oversized highlighter laying a single broad band). Rejected as the weaker idea: it says "highlighter", not "highlight less and sort by colour", and it carries no argument at thumbnail size.
    - `diagram-lite`. Rejected per the skill's own guidance: the concept needs no flow, and a card-and-arrow cover is the house default this rotation exists to break.
- **Suggested filename:** `featured.png`
- **Alt text:** `A page drenched in yellow beside the same page marked in only three colours`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single flat, saturated background:
  a soft warm lilac field (roughly #C9AEDA, warm-leaning lilac, NOT cold blue, NOT
  navy, NOT apricot, NOT sand, NOT sage green, NOT terracotta), no gradient, no
  texture noise, generous empty space.

  Composition (split-contrast archetype: exactly TWO panels compared side by side, no
  cards, no charts, no arrows, no numbered callouts, no badges): two identical sheets
  of cream paper lying flat on the lilac ground, seen straight on from directly above,
  the same size and shape, side by side in the lower two thirds of the canvas, with a
  wide band of empty lilac ground between them acting as the divider, and a soft ground
  shadow under each sheet. Each sheet carries about ten short horizontal lines of loose
  handwritten scribble, suggestive and completely unreadable, no legible words, no
  labels, no numbers.

  LEFT sheet, the wrong way: every single line is covered in one solid slab of glowing
  neon yellow highlighter, edge to edge, so the whole page reads as one exhausting
  yellow block with barely any cream paper left showing. Slightly ragged highlighter
  stroke ends, as if swiped in a hurry.

  RIGHT sheet, the right way and the winner: the same page left mostly clean cream,
  with only THREE short highlighter marks on it, each covering just a few words on a
  different line, well spaced apart: one soft yellow, one warm pink, one calm blue.
  Everything else on that page stays unmarked.

  THE VERDICT, the only accent in the picture: one short confident hand-drawn soft teal
  (#0E9F8E) tick mark sitting on the lilac ground directly below the right sheet,
  small, like a checkmark drawn by hand. Nothing under the left sheet. Nothing else on
  the canvas: no desk, no wood, no hands, no person, no highlighter pens, no notebook
  spiral, no mug, no plants, no icons.

  Title treatment overlaid across the upper area, centered, with clear space beneath it
  before the sheets begin, two lines, VERBATIM text:
  line 1, "11 Best Highlighters for Studying" in a playful hand-lettered brush script,
  with the single word "Highlighters" in bright red (#E11D48) and "11", "Best", "for"
  and "Studying" in near-black (#222222);
  line 2, "in 2026 (by Study Job)" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive.

  Palette: flat warm lilac ground, cream paper white, near-black #222222 for the
  scribble strokes, outlines and title, one red accent word #E11D48, glowing neon
  yellow and soft yellow, warm pink and calm mid blue used ONLY as highlighter marks on
  the paper, soft teal #0E9F8E used ONLY for the single tick. Mood: clean, approachable,
  confident, optimistic. Flat vector, crisp shapes, subtle soft shading, no gradients
  beyond a hint of light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no cold blue or navy background, no monochrome brand-blue scene, no apricot, sand,
  amber, sage green or terracotta ground, no desk scene, no wooden table, no hands, no
  fingers, no arms, no person, no highlighter pens or markers in frame, no pencil case,
  no coffee mug, no plants, no lamp, no laptop, no phone, no third sheet of paper, no
  legible words, no garbled or misspelled lettering, no extra text beyond the title and
  the wordmark, no captions, no "before" or "after" labels, no arrows, no callout boxes,
  no numbered badges, no infographic panels, no cards, no charts, no rulers or
  measurement marks, no brand names or logos, no duplicated watermark, no rainbow of
  more than three highlighter colours on the right sheet, no 3D render, no stock-photo
  realism, no heavy drop shadows on text, no busy texture, no cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script plus bold rounded sans, one red accent word, flat saturated single-colour ground, `olgapak.com` wordmark) and §Illustration palette (brand blue is an accent, never a ground). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/best-pens-for-note-taking/featured.png` (sage, `pattern-break`) and `blog-ops/assets/bullet-journal-for-beginners/featured.png` (apricot, `big-number`).
- **Source data (if any):** none rendered as a figure. The three marks on the right sheet echo the post's yellow / pink / blue key (draft H2 2), but no text names them and the alt text makes no numeric claim.
- **Text-in-image warning:** this cover carries exact text (the post title verbatim, plus the `olgapak.com` wordmark). Check the render word by word against the frontmatter `title:`, which is `11 Best Highlighters for Studying in 2026 (by Study Job)`, including the numerals `11` and `2026` and both parentheses. If the model garbles, misspells or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The two sheets must carry no readable words at all.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero, which is an illustration job rather than a diagram job; there is no screen to capture. This slot is never converted to `remotion`.

### Watermark

- **`remotion` slots (Images 1 and 2):** use the shared `<BlogWatermark />` component (wordmark per `blog-ops/profile/image-style.md`; sizing, opacity and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt, bottom-left, roughly 55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image. In-post `ai-prompt` slots (Images 3 and 4) carry no wordmark, matching the existing in-post library.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v3.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading plus the section's first body paragraph. All four placeholders in this draft already satisfy that rule as the writer placed them; do not move them.

**Table-redundancy rule:** the post's one markdown table (the 11-pick shortlist under H2 1) has **no image slot attached**, and no slot below redraws it. Image 1 sits 13 lines after that table but shows unrelated content (the three-colour key, not the pick list), so it is not a table duplicate. Do not add a chart over the shortlist.

### Image 1, after H2 "Does highlighting actually help you study?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The three-colour highlighting key as a clean diagram: three swatches (yellow, pink, blue) each labelled with its fixed meaning (terms and definitions; must reproduce from memory; questions and gaps), with the two rules "one line per paragraph" and "second pass only" underneath. Type: remotion. Suggested filename: three-colour-highlighting-key.png]`
- **Type:** `remotion`
- **Concept:** Three highlighter swatch cards in a row, each pairing a broad ink band (yellow, pink, blue) with the one job that colour is allowed to do, over a single accent-tinted card carrying the two rules that keep the system honest.
- **Suggested filename:** `three-colour-highlighting-key.png`
- **Alt text:** `Three highlighter swatches with fixed jobs: yellow terms, pink recall, blue questions`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background and safe margin still apply.

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `ThreeColourHighlightingKey` (register in `tools/remotion/src/Root.tsx` as `component={ThreeColourHighlightingKey}`, the reference, never a JSX element)
- **Component file:** `tools/remotion/src/ThreeColourHighlightingKey.tsx`
- **Canvas dimensions:** 1800 x 1200 (`CANVAS` from `src/theme.ts`, matches the series); render final at `--scale=2`.
- **In-post image: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - **Content colours are local constants, not theme tokens.** The three highlighter inks are the subject matter, so declare them once at the top of the file with a comment saying so, exactly like `InkFamiliesTradeoff.tsx` declares its `accentTint`:
    ```tsx
    // Content colours: these represent real highlighter ink, not brand tokens.
    const INK = { yellow: "#F6E86B", pink: "#F79AC0", blue: "#8FC7EA" };
    const accentTint = "rgba(14,159,142,0.10)";
    ```
    Every other colour in the composition comes from `palette`.
  - Layout, top to bottom, everything inside `SAFE_MARGIN` (120), everything positioned off fixed constants and helper functions, never hand-placed pixels:
    1. **Three swatch cards in a row (y 190 to 690).** `CARD_W = 480`, `CARD_GAP = 60`, `CARD_TOP = 190`, `CARD_H = 500`; three cards span 1560 px, so `cardX(i) = 120 + i * (CARD_W + CARD_GAP)` puts the row exactly on the safe margins. Standard neutral card recipe per remotion.md §Card design language (`palette.surface`, `1px solid palette.border`, radius 16, the standard soft shadow, padding `26px 28px`). No card gets the emphasis variant: the three colours are peers, and the composition's single accent belongs to the rules card below.
    2. **Inside each card, top to bottom:**
       - **Ink band**, an SVG highlighter stroke 380 x 72 with radius 8, filled with `INK[colour]`, drawn with a slightly angled left and right end (a 4-point path, roughly 10 px of slant) so it reads as a swipe rather than a rectangle. Beneath it, two muted "text" bars (rounded rects, `palette.border`, 6 px tall, widths 300 and 210) sitting 18 px apart, so the band clearly sits over words.
       - **Colour name**, `fonts.sans` 42 px semibold `palette.text`, 34 px below the band.
       - **The job**, `fonts.sans` 30 px `palette.muted`, hard-wrapped into the two lines given in Copy below (carry the line breaks in the data array so no row ends on an orphan word), max width `CARD_W - 56`.
    3. **Divider, y = 760.** Full-width 1 px `palette.border` rule from x 120 to x 1680.
    4. **Rules card, centered, y 820 to 1030.** Width 1160, centered (`x = 320`), radius 16, background `accentTint`, border `2px solid palette.accent`. This is the composition's **one** accent element per remotion.md §Color conventions. Inside, three left-aligned lines with 26 px padding-left of 40 px: an eyebrow in `fonts.sans` 26 px bold uppercase `palette.accent` with 2 px letter-spacing, then two rule lines in `fonts.sans` 38 px `palette.text`, 46 px apart.
    5. **`<BlogWatermark />`** at its standard position, untouched.
  - Copy (exact strings, no em-dashes, no enclosed glyphs, no ticks or crosses as text):
    - Card 1: name `Yellow`, job `Terms and definitions,` / `the vocabulary of the chapter`
    - Card 2: name `Pink or orange`, job `Must reproduce from memory:` / `formulas, dates, steps`
    - Card 3: name `Blue or green`, job `Questions, and anything` / `you do not understand yet`
    - Rules eyebrow: `TWO RULES THAT KEEP IT HONEST`
    - Rule 1: `One line per paragraph, never more.`
    - Rule 2: `Second pass only: read first, sort second.`
  - Palette: per `blog-ops/profile/image-style.md` tokens plus remotion.md §Color conventions. Background `palette.background`; card surfaces `palette.surface` on `palette.border`; names and rule copy `palette.text`; job copy and the fake text bars `palette.muted` / `palette.border`; `palette.accent` used once only, on the rules card and its eyebrow. `palette.warn` unused, nothing here is a failure state. No `opacity < 1` dimming; the three inks are already light, so give each band a `1px solid rgba(0,0,0,0.06)` hairline instead of an opacity trick if it looks like it is floating.
  - Typography: `fonts.sans` throughout. `fonts.mono` is not used, this composition renders no numbers. No em-dash (U+2014) anywhere in rendered text.
  - Icons / SVG assets: none. `tools/remotion/public/` does not exist in this project, so draw everything in CSS/SVG and never reference `staticFile`.
  - Arrows / connectors: none. This is a key, not a flow. Do not add arrows between the cards.
  - Card recipe: neutral variant for the three swatch cards, emphasis/outcome variant for the rules card only.
- **Source data:** the three-colour key and both rules are the author's own system, quoted from the draft's H2 2 prose (`draft-v3.md` lines 71 to 77), not a `facts.md` figure. Copy the strings above verbatim so the diagram and the prose agree word for word. The ink hexes are hardcoded illustrative values; no colour claim is made in the post.
- **Reference composition to mimic:** `tools/remotion/src/CostTierKey.tsx` (a three-column key off a fixed coordinate frame, with a bottom band). Fall back to `tools/remotion/src/SampleDiagram.tsx` for the base scaffold. Take its code conventions (theme imports, fixed constants, watermark usage), not its axis.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ThreeColourHighlightingKey --output=out/preview-three-colour-key-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe, writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still ThreeColourHighlightingKey --scale=2 \
    --output="$REPO/blog-ops/assets/best-highlighters-for-studying/three-colour-highlighting-key.png"
  ```
- **Why this and not a real screenshot:** it is a rule system, not a screen. Nothing exists to capture, and the six exact copy strings have to match the prose word for word, which only Remotion renders exactly by construction.

---

### Image 2, after H2 "How to choose a highlighter for studying (a 60-second primer)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Tip shapes side by side at true relative scale: a chisel tip showing its 5 mm broad side and 2 mm edge, a rounded bullet tip, and a wax highlighter pencil; below them a contrast strip of the same neon and pastel yellow lines on white paper and on cream paper. Type: remotion. Suggested filename: highlighter-tip-shapes-neon-vs-pastel.png]`
- **Type:** `remotion`
- **Concept:** A two-band diagram: three highlighter tips drawn with the strokes they actually make at true relative width (chisel 5 mm and 2 mm, an extra-fine bullet, a wax lead), and beneath them four paper swatches showing neon and pastel yellow on white and on cream.
- **Suggested filename:** `highlighter-tip-shapes-neon-vs-pastel.png`
- **Alt text:** `Chisel, bullet and wax tips at true relative scale, with neon and pastel lines on white and cream paper`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background and safe margin still apply.

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `HighlighterTipShapes` (register in `tools/remotion/src/Root.tsx` as `component={HighlighterTipShapes}`)
- **Component file:** `tools/remotion/src/HighlighterTipShapes.tsx`
- **Canvas dimensions:** 1800 x 1200 (`CANVAS` from `src/theme.ts`); render final at `--scale=2`.
- **In-post image: NO title, NO subtitle.**
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - **Content colours and the mm scale are local constants** declared at the top of the file with a comment, as in Image 1:
    ```tsx
    // Content colours: real highlighter ink and paper, not brand tokens.
    const INK = { neon: "#F2EA3B", pastel: "#F7EFA8" };
    const PAPER = { white: "#FFFFFF", cream: "#F1E6CE" };
    const accentTint = "rgba(14,159,142,0.10)";
    // Thickness is computed from the real tip size, never eyeballed.
    // The scale factor is illustrative; only the RATIO between the strokes is a claim.
    const PX_PER_MM = 22;
    const wAt = (mm: number): number => mm * PX_PER_MM; // 110 / 44 / 88
    ```
  - Layout, top to bottom, everything inside `SAFE_MARGIN` (120), everything off fixed helpers:
    1. **Band A, the three tips (y 170 to 620).** Three equal columns, `COL_W = 480`, `COL_GAP = 60`, `colX(i) = 120 + i * (COL_W + COL_GAP)`. Each column is drawn directly on the background, no card, so the strokes read as marks on the page rather than UI:
       - **Tip glyph** at the top of the column, height 150, drawn in SVG in `palette.text` with a `palette.muted` barrel: column 1 a flat angled chisel wedge seen three-quarter on, its broad face `wAt(5)` = 110 px across and its edge `wAt(2)` = 44 px; column 2 a rounded bullet point tapering to a fine dome; column 3 a wood-cased pencil with a sharpened neon wax lead, the lead `wAt(4)` = 88 px across at its base.
       - **The stroke that tip makes**, beneath the glyph, an SVG line in `INK.neon` with `strokeLinecap="round"`, running 380 px across the column: column 1 gets TWO stacked strokes, 110 px and 44 px thick, 40 px apart; columns 2 and 3 get one stroke each, an extra-fine 16 px and an 88 px wax stroke respectively. Every thickness comes from `wAt()` except the bullet stroke, which is a fixed 16 px illustrative value (see Source data, no bullet-tip number may be rendered).
       - **Width labels**, `fonts.mono` 32 px `palette.text`, hugging the right end of each stroke: `5 mm`, `2 mm` on column 1; **no numeral at all** on column 2; `4 mm lead` on column 3.
       - **Tip name and trait**, bottom-anchored in the column at y 540, name in `fonts.sans` 40 px semibold `palette.text`, trait in `fonts.sans` 28 px `palette.muted` hard-wrapped to two lines.
    2. **Divider, y = 680.** Full-width 1 px `palette.border` rule from x 120 to x 1680.
    3. **Band B, the contrast strip (y 740 to 1000).** Four paper swatches in a row, `SW_W = 360`, `SW_GAP = 40`, `swX(i) = 120 + i * (SW_W + SW_GAP)` (spans 1560, on the safe margins). Each swatch is a rounded rect 360 x 190, radius 12, filled with its `PAPER` colour, `1px solid palette.border`, carrying three muted text bars (rounded rects, `palette.muted`, 7 px tall, widths 280 / 300 / 240, 34 px apart) with the middle bar covered by an ink band of 110 px height at 0.9 opacity in its `INK` colour. Order left to right: neon on white, pastel on white, neon on cream, pastel on cream. Caption under each swatch, `fonts.sans` 26 px `palette.muted`, centered.
    4. **Takeaway pill, centered, y = 1050.** One centered pill per remotion.md §In-post stacked comparisons: `accentTint` background, `palette.accent` text, bold, uppercase, 28 px, generous horizontal padding, radius 999. This is the composition's **one** accent element.
    5. **`<BlogWatermark />`** at its standard position, untouched. Check it does not collide with the takeaway pill; if it does, move the pill up to y 1030 rather than moving the watermark.
  - Copy (exact strings, no em-dashes):
    - Column 1: name `Chisel`, trait `Broad side for lines,` / `edge for underlining`; labels `5 mm`, `2 mm`
    - Column 2: name `Bullet`, trait `Rounded fine point` / `for margin notes`; **no width label**
    - Column 3: name `Wax pencil`, trait `A lead, not ink,` / `so nothing bleeds`; label `4 mm lead`
    - Swatch captions: `Neon on white`, `Pastel on white`, `Neon on cream`, `Pastel on cream`
    - Takeaway pill: `PASTEL LOSES ITS CONTRAST ON CREAM PAPER`
  - Palette: per `blog-ops/profile/image-style.md` tokens plus remotion.md §Color conventions. Background `palette.background`; glyphs, names and mm labels `palette.text`; barrels, traits, captions and text bars `palette.muted` / `palette.border`; `palette.accent` used once only, on the takeaway pill. `palette.warn` unused. No `opacity < 1` dimming anywhere except the single deliberate 0.9 ink band, which is simulating translucent highlighter ink, not disabling an element.
  - Typography: `fonts.sans` for names, traits and captions; `fonts.mono` for the three width values (`5 mm`, `2 mm`, `4 mm lead`) per §Typography, they are data. No em-dash anywhere.
  - Icons / SVG assets: none. `tools/remotion/public/` does not exist; draw the tips in SVG, never `staticFile`.
  - Arrows / connectors: none. This is a comparison, not a flow.
  - Card recipe: none in Band A (bare columns). Band B uses plain paper swatches, not the card recipe, so they read as paper rather than UI panels.
- **Source data:** `facts.md` line 20 (`2 mm and 5 mm`, the Stabilo Boss Original chisel widths, verified manufacturer) for the chisel labels, and `facts.md` line 69 (Staedtler Textsurfer Dry, wax lead, lead diameter about 4 mm, verified manufacturer) for the pencil label. **Hard constraint from `facts.md` line 26: never render a bullet-tip number.** Tombow's own pages conflict (0.8 mm vs 0.5 mm), so column 2 gets the words `Rounded fine point` and no numeral, ever. The `PX_PER_MM = 22` scale factor is a hardcoded illustrative constant; only the ratio between the strokes is a claim. Band B carries **no sourced figure**: the neon-versus-pastel contrast is the draft's own editorial point (H2 3, item 2), rendered illustratively, so no percentage, score or measurement may appear in it.
- **Reference composition to mimic:** `tools/remotion/src/InkFamiliesTradeoff.tsx` (the closest sibling: a `PX_PER_MM` helper, true-relative stroke widths, a divider between two bands, and exactly one accent pill). Take its code conventions and its two-band structure; the tip glyphs and swatch strip are new.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HighlighterTipShapes --output=out/preview-tip-shapes-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HighlighterTipShapes --scale=2 \
    --output="$REPO/blog-ops/assets/best-highlighters-for-studying/highlighter-tip-shapes-neon-vs-pastel.png"
  ```
- **Why this and not a real screenshot:** the whole point is that 5 mm and 2 mm are drawn at their true relative width with the numerals rendered exactly. A photo of a tip cannot label itself, and an AI render cannot be trusted with a verbatim millimetre figure. There is nothing on a screen to capture.

---

### Image 3, after H2 "The 11 best highlighters for studying" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Warm flat-vector desk scene: a cream-paper notebook open to a page with a few selective yellow, pink and blue highlighted lines, an open textbook beside it, and a pencil case with a fan of highlighters; natural wood tones with the brand blue as a small accent only. Type: ai-prompt. Suggested filename: study-desk-selective-highlights.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm oak desk seen from a slight overhead angle: an open cream-paper notebook marked with only a few yellow, pink and blue lines, an open textbook beside it, and a soft pencil case with a fan of highlighters spilling out.
- **Suggested filename:** `study-desk-selective-highlights.png`
- **Alt text:** `An open notebook marked in only three colours beside a textbook and a case of highlighters`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration of a study desk, no title lettering, no
  headline: a light natural oak desktop filling the frame, seen from above at a slight
  three-quarter angle so every object has a little depth, lit by soft warm daylight
  falling from the upper left, with gentle shadows under each object and generous empty
  wood around the edges.

  Three focal groups and nothing else:
  CENTRE, an open notebook with cream paper, lying flat, both pages showing about eight
  short lines of loose handwritten scribble that is suggestive and completely
  unreadable, no legible words. On those pages, only FIVE short highlighter marks in
  total, each covering just a few words on a different line, well spaced apart and
  leaving most of the page clean: two soft yellow, two warm pink, one calm blue. The
  restraint is the point, the page must look mostly unmarked.
  LEFT, an open hardback textbook, slightly larger, its pages a cooler white than the
  notebook and its visible page carrying dense unreadable grey text with one single
  short yellow mark on it, tilted a few degrees away from the notebook.
  RIGHT, a soft fabric pencil case lying open with a fan of six or seven capped
  highlighters spilling out of it toward the viewer, their barrels in cream, warm grey
  and soft pastel bands, laid out neatly at slightly different angles.

  Nothing else on the desk: no hands, no person, no laptop, no phone, no mug, no lamp
  in frame, no plants.

  Palette: warm natural oak desktop, cream paper, cooler white textbook pages, near-black
  #222222 outlines, warm grey #6B7280 for the scribble and printed text, soft yellow,
  warm pink and calm blue used ONLY as highlighter marks and pen bands, and brand blue
  #2B6CB0 used ONLY as one tiny accent detail such as a single pen band or the pencil
  case zip. Brand blue is never a background and never a dominant fill. Warm, inviting
  and tactile rather than clinical: natural wood tones, cream paper, warm light. Flat
  vector with subtle warm shading and soft paper texture, crisp shapes, no outline-only
  line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults, keeps the in-post set consistent with the cover)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no numbers, no legible
  words, no garbled or misspelled text, no lorem ipsum, no arrows, no callout boxes, no
  numbered badges, no cold blue or navy scene, no monochrome brand-blue palette, no
  blue-dominant desk, no page covered edge to edge in highlighter, no rainbow of more
  than three highlighter colours on the notebook page, no hands, no fingers, no arms, no
  person, no laptop, no phone, no screen, no coffee mug, no plants, no clutter, no brand
  names or logos on the pens, no stray watermark, no 3D render, no photorealism, no heavy
  drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. Sibling in-post scene for tone, not for layout: `blog-ops/assets/best-pens-for-note-taking/dead-pens-study-desk.png`.
- **Source data (if any):** none. The five marks on the page illustrate the three-colour key from H2 2; no figure is rendered and the alt text claims no count of picks.
- **Text-in-image warning:** this slot must carry **no** legible text. The handwriting and the textbook body copy are specified as unreadable scribble and grey text lines, and there are no labels, so garbled AI lettering has nothing to garble. If the render produces label-like text or brand names on the highlighter barrels anywhere, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** this is a mood-setting scene at the head of the 11-pick section, not a diagram. Flat Remotion geometry cannot deliver warm wood, paper texture and light, and `blog-ops/profile/custom-instructions.md` §Image style reserves Remotion for genuine diagrams. There is no screen to capture.

---

### Image 4, after H2 "How to highlight over gel pen ink without smearing" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Warm close-up illustration of a hand highlighting a line first and then writing a note over the dried band, with a small "before" inset in the corner showing a gel-ink line smeared by a highlighter. Type: ai-prompt. Suggested filename: highlight-first-write-second.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm close-up of a hand writing a clean note directly on top of a dry yellow highlighter band, with a small round inset in the corner showing the opposite: a gel-ink line dragged into a smear by a highlighter.
- **Suggested filename:** `highlight-first-write-second.png`
- **Alt text:** `A hand writing a clean note over a dried highlighter band, beside an inset of smeared gel ink`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, tactile flat-vector illustration, close-up, no title lettering, no headline: a
  sheet of cream paper filling most of the frame, resting on a light natural oak surface
  with soft warm light from the upper left and a gentle shadow along the paper's edge.
  Viewed from above at a slight three-quarter angle.

  MAIN ACTION, filling the frame: one broad soft yellow highlighter band already laid
  down across the middle of the page, clean-edged and clearly dry. A hand enters from the
  lower right holding a slim capped-off pen at a natural writing angle, and is writing a
  short line of dark ink directly ON TOP of that yellow band. The ink sits crisp and
  sharp on the yellow with no smearing at all, and the yellow underneath is undisturbed.
  The handwriting is loose cursive scribble, suggestive and completely unreadable, no
  legible words. The hand is drawn simply, warm skin tone, correct anatomy, five fingers,
  no jewellery, no sleeve detail beyond a plain cuff.

  INSET, small, in the upper LEFT corner and clearly secondary: a circular vignette about
  one fifth of the frame's width, with a thin cream ring border and a soft shadow, sitting
  on the oak surface. Inside it, a macro view of the wrong way: a dark line of handwriting
  with a yellow highlighter stroke dragged across it, pulling the dark ink sideways into a
  dirty greenish-grey smear that trails off to the right. Same paper, same lighting, no
  hand inside the inset.

  Nothing else in the frame: no second hand, no notebook spiral, no desk clutter, no mug,
  no phone, no plants, no other pens.

  Palette: warm natural oak, cream paper, soft yellow highlighter, near-black #222222 ink
  and outlines, warm grey #6B7280 for the smear, one small soft teal #0E9F8E detail on the
  pen barrel. Brand blue is NOT used here. Warm and inviting rather than clinical, flat
  vector with subtle warm shading and soft paper texture, crisp shapes, no outline-only
  line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no "before" or "after"
  text, no numbers, no legible words, no garbled or misspelled text, no lorem ipsum, no
  arrows, no callout boxes, no numbered badges, no split-screen panel layout, no
  rectangular comparison grid, no cold blue or navy scene, no monochrome brand-blue
  palette, no extra hands, no extra fingers, no six-fingered hand, no malformed fingers, no
  arm without a hand, no person's face, no laptop, no phone, no coffee mug, no plants, no
  clutter, no brand names or logos on the pen, no stray watermark, no 3D render, no
  photorealism, no heavy drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm wood tones, cream paper, warm light, brand blue only as an accent). Tonal sibling: `blog-ops/assets/best-pens-for-note-taking/paper-feathering-bleeding-ghosting.png`, which is the same warm macro-paper treatment; keep this one clearly distinct by centring it on the hand and the action rather than on swatches.
- **Source data (if any):** `facts.md` line 85 (highlighter ink is water-based and drags gel, rollerball, fountain and inkjet ink; ballpoint resists it) for the smear in the inset, and the r/pens "highlight first, write on it second so no smearing" advice quoted in the draft's H2 5 for the main action. No figure is rendered.
- **Text-in-image warning:** this slot must carry **no** legible text, and specifically **no** "before" or "after" label even though the concept is a before/after: the inset has to read as the wrong way purely through the smear. The handwriting is unreadable scribble by design. If the render produces any lettering, re-run rather than accepting it.
- **Fragility note:** the corner inset is the risky part of this prompt (models often merge an inset into the main scene or turn it into a second full panel). Acceptance rule: the main action (clean ink written over a dry yellow band, anatomically correct hand) is mandatory; the inset is desirable. If two runs fail to produce a clean circular inset, ship the main scene without it rather than shipping a mangled hand or a garbled split panel, and note it in `action-items.md`.
- **Why this and not remotion/screenshot:** wet ink dragging into a smear is a texture and lighting effect that flat Remotion geometry can only symbolise, and the slot needs a human hand mid-motion. There is nothing on a screen to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/best-highlighters-for-studying/
├── featured.png
├── three-colour-highlighting-key.png
├── highlighter-tip-shapes-neon-vs-pastel.png
├── study-desk-selective-highlights.png
└── highlight-first-write-second.png
```

Asset folder is created automatically by Stage 4a.5 (`image-builder`); this skill creates nothing on disk under `blog-ops/assets/`.

## Tools reference

1. **Remotion compositions (Images 1 and 2):** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register each `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate via `npx remotion still <Id> --output=out/preview-...png` (throwaway), final export via the worktree-safe command in each entry. Use `<BlogWatermark />` and the tokens locked in `src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` plus `codex.md` for dispatch. On this machine, generation runs through `node ~/.claude/impeccable-codex/generate-image-codex.mjs` style tooling per the skill; a render takes one to three minutes, so allow a long timeout.
3. **Screenshots:** none in this post.
4. **Watermark and polish:** `<BlogWatermark />` for the two Remotion slots (no manual pass). The featured `ai-prompt` render requests the `olgapak.com` wordmark in-prompt; the two in-post `ai-prompt` renders carry none. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `three-colour-highlighting-key.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## Editor notes

- **Slot count matches.** `outline.md` §Image placement plan lists 1 featured plus 4 in-post slots; `draft-v3.md` carries exactly 4 `[IMAGE:]` placeholders, in the same order and under the same H2s. No delta to reconcile.
- **Featured-image hygiene: clean.** No in-post placeholder is named `featured.*` and none duplicates the cover concept. The cover is a two-page split-contrast; the nearest in-post slot (Image 3) is a wood desk scene with a textbook and a pencil case, which is a different picture.
- **Table-duplicate check: clean, with one thing worth knowing.** Image 1's placeholder sits 13 lines below the 11-pick shortlist table, inside the plus-or-minus-20-line window the hygiene check watches, but the diagram shows the three-colour key rather than the shortlist, so it is not a duplicate and no chart is proposed over that table. Do not add one later.
- **Archetype rotation.** Picked `split-contrast`. The ledger (5 files in `blog-ops/featured-log/` plus 5 legacy rows in `blog-ops/featured-log.md`) blocked `big-number` and `negative-space` as the last two prior posts. `pattern-break` was additionally ruled out by hand because it is the `best-pens-for-note-taking` cover on the sibling roundup, and `scene-vignette` because it is both the outline's suggestion and the `how-to-take-notes-on-ipad` cover, and it would preview this post's own Image 3. Rotation entry written to `blog-ops/featured-log/2026-09-06-best-highlighters-for-studying.md`.
- **The outline's featured concept was overridden.** `outline.md` proposed the recurring female character at a desk with a fan of pastel highlighters. That is a competent scene but it says "studying", not "the best highlighters only work with a system", and it repeats a composition this library has shipped repeatedly. The split-contrast cover was chosen instead. The locked house elements (hand-lettered title with one red word, flat saturated ground, wordmark, `ai-prompt` type) are unchanged, so this is a composition change, not a style change. If the human prefers the outline's scene, swap the Composition and Negative-prompt blocks and change `Archetype:` plus the rotation file to `scene-vignette`; nothing else moves.
- **Cover ground colour is deliberately fresh.** Recent covers ran sage (best-pens), apricot (bullet-journal), sand-oat (screen-free-hobbies) and amber (ipad). This one is warm lilac, both to break the run and because the red accent word needs a light ground to stay legible. If lilac reads as too cold on screen, warm it toward mauve rather than moving to another orange.
- **No bullet-tip number may be rendered in Image 2.** `facts.md` line 26 records that Tombow's own pages conflict (0.8 mm vs 0.5 mm), so the composition labels the bullet column with words only. If a future edit adds a numeral there, it is a factual regression.
- **Image 2's contrast strip carries no sourced data.** The neon-versus-pastel-on-cream comparison is the draft's editorial point, rendered illustratively. Nothing in `facts.md` measures contrast, and nothing numeric may appear in that band. No slot in this post needs fresh data before generation.
- **Judgment call on Image 4's inset.** The draft asks for a "before" inset, which AI image models handle unreliably. The prompt specifies a circular corner vignette and the entry carries an explicit acceptance rule: ship the main scene without the inset rather than a mangled hand or a split panel. If the human would rather guarantee both halves, this slot could be rebuilt as a `remotion` stacked before/after per remotion.md §In-post stacked comparisons, at the cost of the warm illustrated texture that makes the point.
- **Priority ladder.** Two diagram slots took `remotion` (both render verbatim copy or true-scale measurements, which is exactly what that rung is for), two scene slots took `ai-prompt` per `custom-instructions.md` §Image style, and the featured slot is locked to `ai-prompt` by config. No `screenshot` slot was created: this post reviews physical stationery, so there is no external screen worth capturing, and nothing here fakes a screenshot of something that does not exist.
