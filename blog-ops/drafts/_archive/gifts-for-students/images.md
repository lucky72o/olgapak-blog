# Images: gifts-for-students

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/gifts-for-students/outline.md` (image placement plan), `blog-ops/drafts/gifts-for-students/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/gifts-for-students/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: human (creates the actual assets and saves them under `blog-ops/assets/gifts-for-students/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/gifts-for-students/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml` (a member of `images.enabled = [ai-prompt, screenshot, remotion]`), and locked by `blog-ops/profile/custom-instructions.md` §Image style, which forbids overriding the featured slot to `remotion`.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target about 1536 × 1024). Keep the title and all three focal elements inside the vertical safe zone (roughly the middle 79% of the height) so the 1.91:1 OG/Twitter crop clips nothing important; the character's feet may crop, the title may not.
- **Concept:** One gift, two fates: on the left a wrapped present forgotten at the back of a half-open drawer, on the right the same gift unwrapped and in use, the recurring woman sitting beside its open box writing in the notebook that came out of it.
- **Archetype:** `split-contrast`. A two-panel this-vs-that composition where the accent marks the winning side. It fits because the post's whole thesis is a contrast the title already states: gifts that "look great in the box and then quietly move to the back of a drawer by week three" (draft-v2.md line 14) versus picks "They'll Actually Use". One glance at a dusty drawer beside a gift in use says that without a single label, and it survives thumbnail size. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date, no prior entry for this slug): the last two prior posts are `2026-09-07 dopamine-detox → scene-vignette` and `2026-09-09 ai-note-taking → object-metaphor`, so **`scene-vignette` and `object-metaphor` are OFF LIMITS**. `split-contrast` was last used 2026-08-05 (`digital-vs-paper-notes`), the oldest gap of any archetype that has been used at all.
  - **Outline concept replaced.** The outline's featured wording ("a warm flat-vector scene of a study desk with a few wrapped gifts, a notebook, pens, headphones, and a planner") is a `scene-vignette` (blocked) and carries five-plus props, over the skill's three-focal-object cover limit. It also overlaps in-post Images 2 to 4, which already show those exact props.
  - **Alternatives considered and rejected:**
    - `big-number` (a giant hand-lettered "15" tied with ribbon): the title already leads with "15", so the cover would say the same number twice and read as "long list" rather than "gifts that get used".
    - `pattern-break` (a row of identical wrapped boxes, one opened and in use): implies one winner among many, which contradicts a 15-pick guide sorted by need. It was also used twice on 2026-08-08.
    - `negative-space` (one small open gift off-centre in an empty field): says "gift" but not "actually used", and it is the most recently used non-blocked archetype (2026-09-02).
    - `diagram-lite` (question card branching to gift types): duplicates in-post Image 1, the paper-or-screen decision diagram.
- **Suggested filename:** `featured.png`
- **Alt text:** `A wrapped gift forgotten in a drawer beside the same gift opened, a woman writing in its notebook`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial blog hero illustration on a single bright, fresh
  pistachio-green background (roughly #B5D98C, a sunny yellow-green, NOT grey sage,
  NOT blue, NOT navy, NOT teal) filling the whole canvas as one flat colour, no
  gradient, no texture noise. Clean, uncluttered, generous breathing room.

  Composition (split-contrast archetype: exactly TWO halves side by side, this versus
  that, no cards, no charts, no arrows, no numbered callouts, three focal elements in
  total). Below the title, the lower two thirds of the canvas are divided into two
  equal halves by one thin vertical cream line. The same flat pistachio ground runs
  behind both halves.

  LEFT HALF, the forgotten gift, drawn in faded, muted, slightly greyed colours: a
  single simple wooden desk drawer in pale washed-out wood, pulled half open and seen
  at a slight three-quarter angle from above. Pushed to the back of the drawer sits
  one small wrapped gift box in dull dusty grey-lilac paper with a flattened, slightly
  crumpled bow. A few soft grey dust specks rest on the lid. Nothing else in this
  half: no person, no desk, no room. It should feel quiet and a little sad, never
  dirty or gloomy.

  RIGHT HALF, the gift in use, drawn in full warm saturated colour: the same size gift
  box, now open, its lid leaning against its side, a loose cream-and-mustard ribbon
  trailing out, a puff of cream tissue paper inside. Sitting cross-legged on the flat
  ground right beside it, the recurring friendly young woman of olgapak.com covers:
  dark hair in a loose messy bun, rosy cheeks, mustard-yellow sweater, dark trousers,
  white sneakers. She holds an open cream dotted notebook on her knee and is writing
  in it with a plain black pen, smiling, clearly absorbed. The notebook page shows
  only wordless handwritten squiggle lines. Around the open box, four or five short
  soft-teal (#0E9F8E) sparkle dashes mark this as the winning side.

  Title treatment overlaid across the upper area, centred, starting about one eighth
  of the way down from the top edge, with clear flat space beneath it before the two
  halves begin. Two lines, VERBATIM text, exact spelling and punctuation:
  line 1, "Best Gifts for Students:" in a playful hand-lettered brush script, near-black
  (#222222);
  line 2, "15 Picks They'll Actually Use" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), with ONLY the word "Actually" in bright red
  (#E11D48). Line 2 is noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at about
  55% opacity, unobtrusive, not overlapping the drawer.

  Palette: pistachio-green ground, cream paper white, natural wood (washed out on the
  left, warm honey on the right), mustard, near-black #222222 for text and outlines,
  dusty grey-lilac only on the forgotten wrapping paper, soft teal #0E9F8E only on the
  small sparkle dashes, red #E11D48 only on the word "Actually". Brand blue #2B6CB0 is
  NOT the background and NOT a dominant fill. Mood: energetic, optimistic, approachable,
  warm. Cheerful modern flat vector, clean bold outlines, soft cel shading.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no blue or navy background, no teal background, no grey-green sage background, no
  gradient background, no red-and-green Christmas palette, no Christmas tree, no
  holly, no Santa, no snow, no red ribbon, no more than two halves, no third panel,
  no labels on the halves, no "before" or "after" words, no arrows, no numbered
  callouts, no badges, no infographic, no cards, no price tags, no gift tags with
  writing, no brand logos, no product trademarks, no branded packaging, no readable
  words in the notebook, no extra words beyond the title and the wordmark, no
  garbled or misspelled lettering, no missing apostrophe, no duplicated watermark,
  no cluttered room, no bookshelf, no window, no laptop, no smartphone, no headphones,
  no pile of presents, no cobwebs, no spiders, no dirt, no dark gloomy lighting on the
  left half, no second person, no child figure, no extra limbs or fingers, no
  distorted face, no 3D render, no stock-photo realism, no heavy drop shadows on text
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script mixed with a bold rounded sans, one red accent word, recurring female character, single bright saturated background, `olgapak.com` watermark) and §Illustration palette (warm, never brand-blue dominant). Sample library in `blog-ops/reference/image-samples/` (`feat_*.png`). Character reference: `blog-ops/assets/ai-note-taking/featured.png` (same woman: dark loose bun, mustard sweater, dark trousers, white sneakers). Prior covers are for tonal family only, never composition or hue: amber is taken by `how-to-take-notes-on-ipad` and `ai-note-taking`, sage by `how-to-reduce-screen-time` and `best-pens-for-note-taking`, marigold, terracotta, apricot, sand-oat, rose-clay, lavender, teal, royal blue and navy by earlier covers.
- **Source data (if any):** none. The drawer-versus-in-use contrast restates the draft's own hook (draft-v2.md line 14), not a measured figure.
- **Text-in-image warning:** this cover carries exact text: the post title verbatim, `Best Gifts for Students: 15 Picks They'll Actually Use`, plus the `olgapak.com` wordmark. Check the render word by word against the frontmatter `title:`, including the colon after "Students", the numeral "15", the apostrophe in "They'll", and that only "Actually" is red. If the model garbles, misspells, or reflows the words, re-run once; if it still fails, keep the illustration and overlay the title as a post-processing text layer rather than shipping wrong lettering. The notebook page is wordless squiggles by design, so nothing else depends on rendered letters.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` and `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero look, which is an illustration job, not a diagram job; there is no screen to capture.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (wordmark per `blog-ops/profile/image-style.md` §Watermark; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition. The component is the single point of brand-mark control.
- **Own-site/product UI screenshots:** not applicable, this post has no screenshot slots.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside each prompt, bottom-left, about 55% opacity per `image-style.md` §Watermark. If a render omits or garbles it, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph (so the heading introduces the section, the paragraph frames the point, and the image illustrates it). The exception is an image that closes evidence cited in the prior section's prose, that may sit before the next H2.

**Table-redundancy rule:** never spec a chart-style image (`remotion` or `ai-prompt`) whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't (color coding, callout arrows, computed totals, derivative chart shape).

**Background hue per section (varied on purpose, per `image-style.md` §Illustration palette):** featured = pistachio green; Image 1 = the Remotion neutral `palette.background`; Image 2 = warm walnut wood; Image 3 = pale butter-yellow wall; Image 4 = dusty terracotta-clay wall in lamplight.

### Image 1, after H2 "Start With One Question: Paper or Screen?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Simple decision diagram titled "How do they take notes?" branching into three paths: "By hand" (notebook, pens, highlighters, mechanical pencil), "On an iPad" (stylus), and "Not sure" (focus and planning gifts, or a gift card). Type: remotion. Suggested filename: paper-or-screen-gift-decision.png]` (draft-v2.md line 56)
- **Type:** `remotion` (as tagged in the draft and the outline, correct: a genuine branching flow whose node labels must render as exact, legible text)
- **Concept:** A root question card "How do they take notes?" splitting into three equal branches, "By hand", "On an iPad", and "Not sure", each ending in a card that lists the matching gifts with a small line glyph per gift.
- **Suggested filename:** `paper-or-screen-gift-decision.png`
- **Alt text:** `Decision diagram: how they take notes leads to handwriting gifts, a stylus, or focus and planning gifts`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **PREREQUISITE, render blocker:** `tools/remotion/src/Root.tsx` does not parse right now (`npx tsc --noEmit` → `src/Root.tsx(89,5): error TS1003: Identifier expected`). Line 88, `<Still id="GraduatedCadenceSteps" component={GraduatedCadenceSteps}`, is missing its closing line, so the next `<Still>` opens inside it. Until it is fixed, no composition in the project renders, this one included. The fix is one inserted line directly after line 88: `      width={CANVAS.width} height={CANVAS.height} />`. Apply it before registering this composition.
- **Composition `<Still>` ID:** `PaperOrScreenGiftDecision`
- **Component file:** `tools/remotion/src/PaperOrScreenGiftDecision.tsx`
- **Registration:** import `{ PaperOrScreenGiftDecision }` in `tools/remotion/src/Root.tsx` and append `<Still id="PaperOrScreenGiftDecision" component={PaperOrScreenGiftDecision} width={CANVAS.width} height={CANVAS.height} />` after the `FiveStepWorkflow` entry (component reference, never a JSX element).
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token), rendered at `--scale=2` for the final PNG.
- **In-post image: NO title and NO subtitle.** The placeholder says the diagram is "titled" with the question; render that question as the diagram's root node card, not as a title band. `<BlogWatermark />`, `palette.background`, and `SAFE_MARGIN` still apply.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, top to bottom, every coordinate derived from one constants object (mirror the `L` object pattern in `HandwriteOrTypeDecision.tsx`, never eyeballed):
    - `centerX = CANVAS.width / 2` (900).
    - **Question card:** `questionTop = SAFE_MARGIN` (120), `questionH = 124`, `questionW = 900`, centred (x 450 to 1350).
    - **Trunk stub:** from the question card's bottom (y 244) straight down to `splitY = 324`.
    - **Three columns:** `COL_W = 480`, `COL_GAP = 60`, total `3 × 480 + 2 × 60 = 1560`, so `COL_LEFT_X = SAFE_MARGIN` (120) and the band ends exactly at 1680. Column centres `colCX(i) = 120 + 240 + i × 540`, i.e. 360, 900, 1440.
    - **Branch connectors:** one horizontal line at `splitY` from x 360 to x 1440, then three identical vertical drops from `splitY` to `branchTop - CONNECTOR_GAP` (392), each ending in a downward arrowhead (`ARROW_HEAD = 11`, `CONNECTOR_GAP = 12`, reuse `arrowHeadDown()` from `HandwriteOrTypeDecision.tsx`). The middle drop coincides with the trunk; draw it once.
    - **Branch cards:** `branchTop = 404`, `branchH = 104`, width `COL_W`, one per column.
    - **Outcome connectors:** three identical vertical arrows from the branch card bottom (y 508) to `outcomeTop - CONNECTOR_GAP` (588). Every connector in the diagram has the same stroke; the three columns are mirror images of each other.
    - **Outcome cards:** `outcomeTop = 600`, `outcomeH = 464` (bottom y 1064, which leaves about 54px above the watermark's text top at y ≈ 1118), width `COL_W`, `PAD_X = 32`.
    - **Rows inside each outcome card:** `GLYPH = 56`, `GLYPH_GAP = 20`, `LABEL_W = COL_W - 2 × PAD_X - GLYPH - GLYPH_GAP` (340), `ROW_H = 88`, `ROW_GAP = 14`. The row block is vertically centred inside the card with the `blockHeight(n)` / `rowsTop(n)` / `rowY(i, n)` helpers from `AiHandlesYouHandle.tsx` (lines 33 to 35), adapted to the card's own height. `ROW_H` stays identical in all three cards; the cards stay equal height and the shorter blocks simply sit centred with more air around them. Labels may wrap to two lines inside the 88px row, never overflow.
    - **Middle card (iPad) block:** one glyph row, then `ROW_GAP`, then a caption box of height 76 spanning the full content width (416px), left-aligned with the card's content edge. Block height `88 + 14 + 76 = 178`, centred like the others.
  - Copy (exact strings to render, verbatim, nothing else):
    - Question card: `How do they take notes?`
    - Branch cards, left to right: `By hand`, `On an iPad`, `Not sure`
    - Left outcome rows, top to bottom: `Notebook`, `Pens`, `Highlighters`, `Mechanical pencil`
    - Middle outcome row: `Stylus`; middle caption: `Check their iPad model first`
    - Right outcome rows, top to bottom: `Focus gifts`, `Planning gifts`, `A gift card`
    - No other text anywhere. No brand or product names. No prices or budget bands. No em dash (U+2014) and no en dash. No check or cross characters as text.
  - Palette: tokens imported from `tools/remotion/src/theme.ts` (derived from `blog-ops/profile/image-style.md`), plus the adapter's §Color conventions.
    - Question card: **emphasis/outcome variant** (`rgba(14,159,142,0.08)` background, `2px solid palette.accent`), text `palette.text`. It is the one accent element in the composition: the section's single argument is "ask this first". None of the three routes is recommended over another, so no branch or outcome card gets the accent (same reasoning as the mirrored neutral branches in `HandwriteOrTypeDecision.tsx`).
    - Branch and outcome cards: **standard neutral recipe** (`palette.surface`, `1px solid palette.border`, 16px radius, the shared `cardShadow`).
    - Glyph strokes: `palette.primary`, small line work only, so brand blue stays an accent detail rather than a fill.
    - Caption text: `palette.muted`.
    - `palette.warn` NOT used: no route is a failure state. Never dim any card with `opacity < 1`.
  - Typography: `fonts.sans` throughout, no `fonts.mono` (there is no data value). Question card 50px bold; branch cards 40px bold, centred; row labels 32px semibold, `palette.text`, left-aligned, line-height 1.2; caption 26px medium, `palette.muted`, line-height 1.3.
  - Icons / SVG assets: inline stroked SVG glyphs only, drawn in a 56×56 user space through an `<Svg>` wrapper copied from `AiHandlesYouHandle.tsx` (lines 40 to 53, set its size to this composition's `GLYPH = 56`, `strokeWidth 3`, no fill, rounded caps and joins). `tools/remotion/public/` does not exist; do not create it. Glyphs, all generic with no brand marks:
    - `Notebook`: a portrait rounded rectangle with a vertical elastic band near its right edge and a short ribbon-bookmark tail out of the bottom.
    - `Pens`: two slim parallel pens angled at 45 degrees, each with a short clip line.
    - `Highlighters`: one chunky marker body with a slanted chisel tip and a short swash line beneath the tip.
    - `Mechanical pencil`: one slim diagonal barrel with a clip line, a knurled grip shown as three short ticks, and a conical tip ending in a fine lead point.
    - `Stylus`: a slim diagonal stylus whose tip touches the lower-right corner area of a small tablet rectangle, with a tiny ink squiggle at the contact point.
    - `Focus gifts`: over-ear headphones, one headband arc and two rounded ear cups.
    - `Planning gifts`: a planner page, a rectangle with two ring tabs on its top edge and a 2×2 grid inside.
    - `A gift card`: a landscape rounded card with one horizontal stripe and a small two-loop bow at its top-left corner.
  - Arrows / connectors: neutral mapping connectors per the adapter's §Arrow conventions, `palette.muted`, `strokeWidth 2.5`, solid, rounded caps and joins, arrowheads in the same colour. No accent stroke on any path (no route is "the answer"), no dashed "not taken" styling (all three routes are valid). Map every point from the constants above.
  - Card recipe to use: emphasis/outcome variant for the question card only; standard neutral recipe for all six other cards.
- **Source data (if any):** hardcoded illustrative values taken from the draft's own copy, no numbers. The three routes and the "Not sure" fallback are draft-v2.md lines 54 and 62 to 66; the handwriting rows are the H3 picks at lines 76 to 108 named by category, not brand; the stylus caption restates line 122 and `facts.md` §Named examples, Apple Pencil compatibility row (line 45: "Gift implication: check the student's iPad model first").
- **Reference composition to mimic:** `tools/remotion/src/HandwriteOrTypeDecision.tsx` for the branching tree (fixed `L` constants, `Connectors` SVG, `arrowHeadDown()`, `cardBase`), extended from two branches to three; `tools/remotion/src/AiHandlesYouHandle.tsx` for glyph rows inside a card (`Svg` wrapper, `rowY()` centring helpers). In-post diagrams may mimic their layouts freely.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PaperOrScreenGiftDecision --output=out/preview-paper-or-screen-gift-decision-v1.png
  ```
- **Final export command** (writes into the CURRENT tree's assets folder; `REPO` is derived dynamically so this is worktree-safe):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PaperOrScreenGiftDecision --scale=2 \
    --output="$REPO/blog-ops/assets/gifts-for-students/paper-or-screen-gift-decision.png"
  ```
- **Why this and not a real screenshot:** there is nothing to screenshot; this is the post's own decision rule, and its eleven labels must render as exact text, which is a Remotion job.

---

### Image 2, after H2 "Gifts for Students Who Take Notes by Hand" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Warm flat-lay illustration of a hardcover dotted notebook, a multipack of black pens, a fan of highlighters, and a mechanical pencil on a wooden desk, tied together with a loose gift ribbon. Type: ai-prompt. Suggested filename: handwriting-study-gifts-flat-lay.png]` (draft-v2.md line 72)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: a warm illustrative still life with no exact text; the section's picks are already named in prose and in the H2 1 table)
- **Concept:** A straight-overhead flat-lay on a warm walnut desk of an open hardcover dotted notebook, a plain kraft box of black pens with two slipped out, five pastel highlighters fanned out, and a slim mechanical pencil, all looped together by one loose dusty-rose ribbon.
- **Suggested filename:** `handwriting-study-gifts-flat-lay.png`
- **Alt text:** `A dotted notebook, a box of black pens, fanned highlighters and a mechanical pencil tied with ribbon`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, warm and inviting: a straight overhead (90
  degree, top-down) flat-lay on a warm walnut wood desktop that fills the whole
  canvas, its grain drawn as a few simple flowing lines in slightly darker brown.

  Arranged as one loose, balanced cluster in the centre of the frame with generous
  empty wood around it, four study gifts:
  1. An open hardcover notebook with a deep olive-green linen cover, an elastic band
     and a thin ribbon bookmark, lying open on a cream dot-grid page that carries a
     few short wordless handwritten squiggle lines and one tiny sketched box diagram.
  2. A slim plain kraft-cardboard box with its lid off, holding a neat row of
     identical black retractable ballpoint pens, two of the pens slipped out and lying
     beside the box.
  3. Five dual-tip highlighters in soft pastel mint, peach, lilac, butter yellow and
     blush pink, fanned out like a hand of cards.
  4. One slim black-and-silver mechanical pencil with a knurled grip, lying on a gentle
     diagonal.
  One loose dusty-rose satin gift ribbon loops lazily around and between all four
  items, tying the group together, finished in a soft bow near the lower right.
  In the top-left corner, just entering the frame, a small sprig of eucalyptus.

  Palette: warm walnut and honey wood, cream paper, olive green, pastel highlighter
  tones, near-black #222222 for outlines and pen bodies, dusty rose for the ribbon,
  soft teal #0E9F8E only on the mint highlighter cap, brand blue #2B6CB0 at most as one
  hairline stripe on the pen box, never a background and never a dominant fill.
  Soft warm natural light from the upper left, gentle short shadows. Mood: clean,
  approachable, confident, productive, a thoughtful present laid out for someone.
  Cheerful modern flat vector, clean bold outlines, soft cel shading, no photorealism.
  Small lowercase "olgapak.com" wordmark in the bottom-left corner, near-black at about
  55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no brand logos, no product trademarks, no printed brand names on the notebook,
  pens, pen box, highlighters or pencil, no embossed logo on the notebook cover, no
  price tags, no gift tags with writing, no readable words or numbers anywhere, no
  garbled lettering, no labels, no ruler markings, no cold blue or navy palette, no
  blue notebook, no blue-dominant objects, no monochrome scene, no angled
  perspective, no human hands, no people, no laptop, no tablet, no phone, no
  calculator, no scissors, no sticky-note clutter, no wrapping-paper pile, no gift
  box, no Christmas decorations, no cluttered desk, no 3D render, no stock-photo
  realism, no heavy drop shadows, no busy texture, no duplicated watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette: match the warm, wood-toned `finished-notebooks-shelf` look; explicitly avoid the too-cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. The overhead walnut flat-lay format matches `blog-ops/assets/how-to-take-notes-on-ipad/gear-tiers-flat-lay.png` in family, but with different props and a single-tier cluster.
- **Source data (if any):** none. The four objects map to the section's H3 picks (draft-v2.md lines 76 to 114) by category only; no product is depicted as a specific brand.
- **Text-in-image warning:** this image must contain NO legible text. The notebook page is wordless squiggles and dots; the pen box, pens, highlighters and pencil carry no printing. If the model adds words or a brand-like wordmark to any object, re-run rather than accepting it. The only lettering allowed is the `olgapak.com` wordmark.
- **Why this and not remotion/screenshot:** it is a warm product-category still life with no exact text or data, which `image-style.md` assigns to `ai-prompt`; a screenshot of retailer listings would carry trademarks and prices, which this post keeps out of its images.

---

### Image 3, after H2 "Gifts for Students Who Take Notes on an iPad" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Cozy illustration of a student at a warm desk handwriting notes on a tablet with a stylus, a mug and a small plant nearby. Type: ai-prompt. Suggested filename: ipad-stylus-note-taking-desk.png]` (draft-v2.md line 120)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: an illustrated human scene, not a diagram)
- **Concept:** An over-the-shoulder view of the recurring woman at a light oak desk against a pale butter-yellow wall, handwriting on a plain unbranded tablet with a slim stylus, a steaming mug and a small trailing plant at the desk's far corner.
- **Suggested filename:** `ipad-stylus-note-taking-desk.png`
- **Alt text:** `Over-the-shoulder view of a student handwriting notes on a tablet with a stylus, a mug and plant nearby`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, cozy and warm, seen from an over-the-shoulder
  angle: the camera sits slightly above and behind the student's left shoulder, so the
  tablet screen and her writing hand are the clear focal point in the centre of the
  frame and her face shows only in soft three-quarter profile.

  The student is the recurring young woman of olgapak.com illustrations: dark hair in
  a loose messy bun with a few loose strands, rosy cheek visible, wearing a soft
  sage-green knit cardigan. She sits at a simple light oak desk, leaning in a little,
  relaxed and focused.

  Foreground and centre: a plain unbranded tablet with a thin dark bezel, propped at a
  low angle on a simple fold stand. Her right hand holds a slim plain white stylus
  mid-stroke on the screen. The screen shows only handwriting drawn as loose wordless
  ink squiggle lines, one small hand-drawn arrow and a circled doodle, on a cream
  page. No toolbar, no app interface, no icons.

  Far right corner of the desk: a cream ceramic mug with a terracotta band and a thin
  curl of steam, and beside it a small terracotta pot with a trailing green pothos
  spilling over the desk edge. Nothing else on the desk.

  Background: a flat pale butter-yellow wall (soft and light, NOT saturated amber, NOT
  orange) lit by soft morning light from the left, mostly empty, generous breathing
  room above her head.

  Palette: pale butter yellow, light oak and honey wood, sage green, cream, terracotta,
  near-black #222222 for outlines and the tablet bezel, soft teal #0E9F8E only as a
  thin band on the stylus, brand blue #2B6CB0 not used or at most a tiny detail, never
  a background and never a dominant fill. Mood: clean, approachable, calm, productive.
  Cheerful modern flat vector, clean bold outlines, soft cel shading, no photorealism.
  Small lowercase "olgapak.com" wordmark in the bottom-left corner, near-black at about
  55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no Apple logo, no brand logos, no product trademarks, no camera bump branding, no
  readable words or numbers on the screen, no garbled lettering, no app toolbar, no
  interface icons, no status bar, no browser chrome, no keyboard, no laptop, no
  phone, no paper notebook, no second person, no front-facing view, no amber or orange
  background, no cold blue or navy palette, no blue-dominant objects, no blue mug, no
  cluttered desk, no bookshelf, no window, no desk lamp, no extra limbs or fingers, no
  six fingers, no distorted hand holding the stylus, no child figure, no 3D render, no
  stock-photo realism, no heavy drop shadows, no busy texture, no duplicated watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (recurring female character where a person fits) and §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` family; not the cold blue of `student-desk-spiral`). **Deliberately NOT a copy of `blog-ops/assets/how-to-take-notes-on-ipad/featured.png`**, which is almost exactly this placeholder's scene (front three-quarter view, cream sweater, amber wall, orange notebook, blue mug). This spec changes the camera angle to over-the-shoulder, the wall to pale butter yellow, her top to sage green, and drops the paper notebook and blue mug, so a reader who has seen that cover does not meet the same picture twice. Keep her hair and face consistent with this post's featured image.
- **Source data (if any):** none. The section's compatibility caveat (Apple Pencil works per iPad model, `facts.md` line 45) is a prose claim and stays out of the image.
- **Text-in-image warning:** this scene must contain NO legible text. The tablet screen shows only wordless squiggles and a doodle, with no interface. If the model adds words, UI chrome or a fruit-shaped logo, re-run rather than accepting it. The only lettering allowed is the `olgapak.com` wordmark.
- **Why this and not remotion/screenshot:** it is a human scene about a working moment, not a data-accurate diagram, and `image-style.md` assigns section scenes to `ai-prompt`. A screenshot of Apple's model selector was considered and rejected: it would show trademarks, date fast, and repeat what the linked page already does.

---

### Image 4, after H2 "Gifts That Help Students Focus" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Calm, warmly lit study corner with over-ear headphones resting on a desk, a visual countdown timer, an open notebook, and a phone shut away inside a small lock box. Type: ai-prompt. Suggested filename: calm-focus-study-corner.png]` (draft-v2.md line 147)
- **Type:** `ai-prompt` (as tagged in the draft and the outline, correct: a mood still life, not a diagram)
- **Concept:** A quiet walnut desk corner against a dusty terracotta-clay wall in warm evening lamplight, holding oat-coloured over-ear headphones, a square visual timer with a shrinking teal wedge, an open notebook with a pen, and a frosted translucent lock box with a phone visible lying inside.
- **Suggested filename:** `calm-focus-study-corner.png`
- **Alt text:** `A calm desk corner with headphones, a visual timer, an open notebook, and a phone locked in a small box`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration, calm and warmly lit: a small study-desk corner
  seen at eye level from a gentle three-quarter angle, the desk's front edge running
  across the lower third of the frame. No person, no hands.

  On a warm walnut desktop, spaced out calmly with clear room between them, left to
  right:
  1. A pair of over-ear headphones in soft oat beige with tan cushions, resting on
     their side, headband curving up. Plain, no logos.
  2. A small square visual countdown timer seen from the front: a plain cream dial with
     NO numbers, only a few short tick marks, and a single soft teal (#0E9F8E) wedge
     showing about a third of the time left.
  3. An open notebook with a cream page of wordless handwritten squiggle lines and a
     plain black pen resting across it, in the centre, slightly nearer the viewer.
  4. A small frosted translucent lock box with a closed lid and a single small round
     dial on top; through its frosted side a smartphone is visible lying inside, face
     down, dark, clearly shut away.
  Behind the timer, a small terracotta pot with a little green plant.

  Background: a flat dusty terracotta-clay wall (soft rose-orange, muted) with the warm
  glow of an unseen desk lamp spilling in from the top left, leaving a soft pool of
  honey light on the desk. Mostly empty wall, generous calm space, no shelves, no
  window.

  Palette: dusty terracotta clay, warm walnut wood, honey lamplight, oat beige, cream
  paper, near-black #222222 for outlines and the phone, a single soft teal #0E9F8E
  wedge on the timer, a little leafy green. Brand blue #2B6CB0 is NOT the background and
  NOT a dominant fill. Mood: clean, approachable, calm, quietly productive, the opposite
  of a cluttered, buzzing desk. Cheerful modern flat vector, clean bold outlines, soft
  cel shading, no photorealism. Small lowercase "olgapak.com" wordmark in the
  bottom-left corner, near-black at about 55% opacity.
  ```
- **Aspect ratio:** `3:2` (per `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no brand logos, no product trademarks, no logos on the headphones, no red timer
  disc, no numbers on the timer dial, no printed labels on the lock box, no digital
  display, no readable words or numbers anywhere, no garbled lettering, no phone
  outside the box, no glowing phone screen, no notification icons, no laptop, no
  monitor, no tablet, no desk lamp fully in frame, no people, no hands, no shelves, no
  window, no cold blue or navy palette, no blue headphones, no blue-dominant objects,
  no neon, no dark moody lighting, no cluttered desk, no cables everywhere, no 3D
  render, no stock-photo realism, no heavy drop shadows, no busy texture, no
  duplicated watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` family, a little greenery; not the cold blue of `student-desk-spiral`). Background hue deliberately differs from the featured image (pistachio) and Image 3 (butter yellow).
- **Source data (if any):** none. The objects map to the section's picks (headphones and earplugs, Time Timer, kSafe, draft-v2.md lines 153 to 194) by category only; the timer wedge shows no real time value, and the PNAS Nexus screen-time figure (`facts.md` line 18) stays in prose.
- **Text-in-image warning:** this scene must contain NO legible text. The timer dial carries tick marks only, no numbers, and the lock box has no labels. The teal wedge (rather than red) keeps the timer generic, away from a specific product's trade dress. If the model adds numerals or a brand mark, re-run. The only lettering allowed is the `olgapak.com` wordmark.
- **Why this and not remotion/screenshot:** the section's point is a calmer mood and setting, which a card-and-arrow diagram cannot carry; there is no screen to capture, and `image-style.md` assigns section scenes to `ai-prompt`.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/gifts-for-students/
├── featured.png
├── paper-or-screen-gift-decision.png
├── handwriting-study-gifts-flat-lay.png
├── ipad-stylus-note-taking-desk.png
└── calm-focus-study-corner.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Fix the `Root.tsx` line 88 parse error first (see Image 1). Register a `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate via `npx remotion still <Id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <Id> --scale=2 --output=blog-ops/assets/gifts-for-students/<filename>.png`. Use `<BlogWatermark />` and the fonts/palette locked in `tools/remotion/src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Needs no API key (codex authenticates itself).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** for `remotion` slots, use the shared `<BlogWatermark />` component (no manual pass needed). For `ai-prompt` slots, the wordmark is requested inside the prompt; add it post-hoc if a render drops it. Output format: **PNG** for every slot in this post.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `paper-or-screen-gift-decision.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/gifts-for-students/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **BLOCKER for the Remotion slot: `tools/remotion/src/Root.tsx` does not parse.** `npx tsc --noEmit` reports `src/Root.tsx(89,5): error TS1003: Identifier expected`. Line 88 (`<Still id="GraduatedCadenceSteps" component={GraduatedCadenceSteps}`) is missing its `width={CANVAS.width} height={CANVAS.height} />` line. It looks like the same class of merge defect flagged in the screen-free-hobbies plan, reintroduced with the dopamine-detox composition. Until one line is inserted, no composition renders, so Image 1 would be recorded `failed`. I did not edit it: the planner is spec-only and this is a repo-wide fix. The builder should apply it first.
- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 56, 72, 120, 147), 4 in-post slots in `outline.md` §Image placement plan. Types and filenames kept exactly as the draft emitted them.
- **Featured hygiene passed.** No inline placeholder uses `featured.*` or repeats the cover concept.
- **Featured concept replaced (judgment call).** The outline's cover (a study desk with wrapped gifts, notebook, pens, headphones, planner, optional character) is a blocked `scene-vignette`, exceeds the three-focal-object cover limit, and repeats the props of Images 2 to 4. Replaced with a `split-contrast`: a gift forgotten in a drawer beside the same gift in use. If the human prefers the literal desk scene, the cost is a blocked archetype and a cover that previews three body images.
- **Archetype rotation.** `split-contrast` chosen. Blocked by the last two prior posts: `scene-vignette` (`2026-09-07 dopamine-detox`) and `object-metaphor` (`2026-09-09 ai-note-taking`). Also rejected on fit: `big-number`, `pattern-break`, `negative-space`, `diagram-lite` (reasons in §Featured image). Recorded at `blog-ops/featured-log/2026-09-13-gifts-for-students.md`; the legacy table is untouched.
- **Featured hue (judgment call).** Pistachio green was picked because amber, sage, marigold, terracotta, apricot, sand-oat, rose-clay, lavender, teal, royal blue and navy are all spent on earlier covers. The prompt steers away from a red-and-green Christmas read: the ribbon is cream-and-mustard, and red appears only on the word "Actually". Easy to override to another unused saturated hue.
- **Recurring character is back on the cover.** She appears on the featured image and in Image 3. Generate the cover first and use it as the reference for her hair and face in Image 3. Her top deliberately changes (mustard on the cover, sage cardigan in Image 3) for contrast against the butter-yellow wall.
- **Image 3 steered away from an existing cover.** The placeholder describes almost exactly `blog-ops/assets/how-to-take-notes-on-ipad/featured.png`, and this post links to that post in the same section. The spec keeps the placeholder's content (student, desk, tablet, stylus, mug, plant) but changes angle, wall hue, clothing and props so the two do not read as the same picture.
- **Watermark on in-post `ai-prompt` images (interpretation).** The brief says "no text other than the featured title". I read that as in-scene text (labels, prices, product names) and kept the `olgapak.com` wordmark on all three in-post illustrations, per `image-style.md` §Watermark and every prior post's in-post prompts. If the intent was literally zero lettering on in-post images, delete the final wordmark sentence from the Image 2, 3 and 4 prompts.
- **No trademarks in any image.** Every product is drawn generically: no brand names, logos, or product-specific trade dress (the timer wedge is teal, not a red disc; the tablet has no logo; the lock box is a generic frosted container). No prices anywhere.
- **Table-redundancy check passed.** The only markdown table (draft-v2.md lines 30 to 46, 15 gifts by "Best for" and "Budget") sits 10 lines above Image 1, but Image 1 maps note-taking style to gift categories and repeats no table row, product name, or budget band.
- **No `screenshot` slots, on purpose.** Nothing in the post needs a real external screen. Retailer listings would put trademarks and prices into the images, and Apple's model selector (the one plausible capture, for Image 3's section) is already linked in the prose and would date fast.
- **No chart needs fresh data.** Image 1 is a decision diagram built from the draft's own copy; no slot represents a `facts.md` number.
