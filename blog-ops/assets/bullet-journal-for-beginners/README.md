# Images: bullet-journal-for-beginners

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/bullet-journal-for-beginners/outline.md` (image placement plan), `blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/bullet-journal-for-beginners/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (screenshot slots, failed fallbacks).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4` (1 featured + 3 in-post)
  - Screenshots: `0`
- File destination: `blog-ops/assets/bullet-journal-for-beginners/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, taken from `images.featured_default` in `blog-ops/config.yaml` and reinforced by `blog-ops/profile/custom-instructions.md` §Image style, which explicitly forbids overriding the featured slot to `remotion` "to auto-render for publishing". This slot is never converted.
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 x 1024). Keep the title lines and the numeral inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips neither.
- **Concept:** An oversized hand-lettered "4" with the word "pages" beneath it, standing beside one plain open dot-grid notebook and a single pen on a flat warm apricot ground, under the hand-lettered post title.
- **Archetype:** `big-number`, a typographic lead where one figure from the post carries the whole composition. It fits because the post's actual claim is that the entire system is four plain pages and one pen: the title band already says "You Don't Need Art Skills" in words, so the picture is free to show what you *do* need instead of re-arguing the art point. A single numeral is also the most legible thing a cover can carry at thumbnail and OG-crop size. The archetype governs composition only; palette, fonts, watermark, and the verbatim title band are unchanged from the house style.
  - **Ledger check** (union of `blog-ops/featured-log/` and the legacy read-only `blog-ops/featured-log.md`, sorted by date ascending, this slug excluded): the last two entries are `best-pens-for-note-taking` = `pattern-break` (2026-08-08) and `how-to-reduce-screen-time` = `pattern-break` (2026-08-08), so **`pattern-break` is OFF LIMITS**. `big-number` and `diagram-lite` are the only two archetypes this blog has never shipped; the concept needs no flow, so `diagram-lite` is out per the skill's own guidance and `big-number` is the unused, non-blocked pick.
  - **Alternatives considered and rejected:**
    - `split-contrast` (the outline's own concept: a heavily decorated spread beside a plain working one). **Rejected, and this is a deliberate departure from `outline.md` §Image placement plan.** Stage 3b already caught this concept colliding with the in-post H2 2 slot and rewrote the H2 2 slot rather than the cover, leaving both images built from the same two props (a decorated spread, a plain notebook) making the same point. WordPress renders the cover as a banner directly above the title, so the reader would meet the decorated-versus-plain argument twice inside the first 600 words. There is a second, larger problem: a cover whose largest, prettiest object is an immaculate decorated spread sells the post as an art-project post at thumbnail size, which is the exact impression the whole draft exists to undo. Re-concepting the cover leaves the decoration critique entirely to in-post Image 1, where it belongs, and removes the shared-prop risk completely instead of managing it.
    - `object-metaphor` (one oversized plain notebook with the art supplies, washi tape, brush pens and stencils sliding out of frame). Rejected on the same thumbnail logic: a cover crowded with craft supplies reads as a craft post at 200 px wide, whatever the arrangement argues. Also the last-but-one pair of covers in the ledger (`charting-method-note-taking`, `digital-detox-plan`) were both `object-metaphor`.
    - `scene-vignette` (a person writing in a plain notebook at a desk). Rejected. This library already ships several desk scenes, and this post uses desk-scene language twice inside the body (in-post Images 3 and 4), so the cover would preview a body image.
    - `negative-space` (a small plain page off-center in an empty field). Rejected as too quiet to carry a beginner's-guide promise; it says "plain" but not "four pages, one sitting".
- **Suggested filename:** `featured.png`
- **Alt text:** `A large hand-lettered 4 pages beside a plain open notebook and one pen`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a flat warm apricot field (soft sunlit apricot orange, NOT green, NOT
  olive, NOT sage, NOT blue, NOT purple, NOT marigold yellow, NOT terracotta red)
  filling the whole canvas, with generous empty space.

  Composition (big-number archetype: ONE huge typographic figure carries the whole
  image; no panels, no cards, no charts, no arrows, no flow, no grid of objects):
  slightly left of center in the lower two thirds, one enormous hand-drawn numeral
  "4" in near-black (#222222), drawn with a confident marker-like stroke, tall enough
  to fill most of the lower half of the canvas. Directly beneath the numeral, the
  single lowercase word "pages" in a bold rounded sans (Montserrat or similar),
  near-black, small next to the numeral, centered under it. One short confident
  hand-drawn soft teal (#0E9F8E) underline stroke sweeping under the word "pages",
  the only teal element in the image.

  To the right of the numeral, resting on the same ground plane and clearly smaller
  than it, one plain open notebook drawn from slightly above at a gentle
  three-quarter angle: cream pages with a faint grey dot grid, a plain dark cover, a
  soft ground shadow beneath it, and four or five short loose black ink marks on the
  right-hand page suggesting a very short handwritten list, unreadable, no legible
  words. One single slim capped pen lies at a shallow diagonal across the lower right
  corner of the notebook. Nothing else on the canvas: no desk, no phone, no screen,
  no hands, no person, no mug, no plants, no washi tape, no brush pens, no
  watercolors, no stickers, no decorative banners, no icons.

  Title treatment overlaid across the upper area, centered, with clear space beneath
  it before the numeral begins, two lines, VERBATIM text:
  line 1, "Bullet Journal for Beginners:" in a playful hand-lettered brush script,
  with the single word "Journal" in bright red (#E11D48) and "Bullet", "for",
  "Beginners" and the colon in near-black (#222222);
  line 2, "You Don't Need Art Skills" in a bold rounded sans (Montserrat or similar),
  near-black (#222222), noticeably smaller than line 1, with a normal apostrophe in
  "Don't".
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive.

  Palette: flat warm apricot ground, cream paper white, near-black #222222 for the
  numeral, the notebook cover, the ink and the title, one red accent word #E11D48,
  soft teal #0E9F8E used ONLY on the single underline stroke. Mood: clean,
  approachable, confident, optimistic. Flat vector, crisp shapes, subtle warm
  shading, no gradients beyond a hint of warm light, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no green or sage or olive background, no cold blue or navy or purple background, no
  marigold or terracotta ground, no decorated or hand-lettered notebook spread, no
  washi tape, no watercolor banners, no stickers, no brush pens, no marker sets, no
  colored pencils, no stencils, no rulers, no craft supplies of any kind, no desk
  scene, no phone, no tablet, no screen, no hands, no fingers, no person, no coffee
  mug, no plants, no lamp, no second notebook, no stack of notebooks, no numbered
  callouts or badges, no infographic panels, no cards, no arrows, no charts, no extra
  numerals besides the single "4", no brand names or logos, no garbled or misspelled
  lettering, no extra words beyond the title, the word "pages" and the wordmark, no
  lorem ipsum, no duplicated watermark, no 3D render, no stock-photo realism, no
  heavy drop shadows on text, no busy texture, no cluttered background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, bright saturated single-color ground, wordmark bottom-left). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/best-pens-for-note-taking/featured.png` and `blog-ops/assets/how-to-reduce-screen-time/featured.png` (both sage green, which is why this one is apricot), `blog-ops/assets/digital-vs-paper-notes/featured.png` (lilac).
- **Source data (if any):** `facts.md` lines 153 to 156 (the four core collections: Index, Future Log, Monthly Log, Daily Log). The cover's "4 pages" is the draft's own wording, `draft-v2.md` line 29: "The system he published runs on four pages". No other figure is rendered.
- **Text-in-image warning:** this cover carries exact text, and one word of it is the whole archetype. Check the render character by character against the frontmatter `title:`, `Bullet Journal for Beginners: You Don't Need Art Skills`, including the colon and the apostrophe in "Don't", and check that the numeral is a single `4` and the word beneath it reads `pages`. A wrong numeral is worse than a wrong font here, because it states a claim. If the model garbles, misspells, or reflows any of it, re-run once; if it still fails, keep the illustration and overlay the title, the numeral and the word as a post-processing text layer rather than shipping wrong lettering.
- **Why this and not remotion/screenshot:** `images.featured_default: ai-prompt` plus `custom-instructions.md` §Image style lock the featured slot to the hand-lettered flat-vector hero, which is an illustration job rather than a diagram job, and there is no screen to capture. Noted for the record: the skill's ladder would normally push a big-number cover toward `remotion` because Remotion renders exact text by construction; the config lock wins, and the text-in-image warning above plus the overlay fallback is how that risk is carried.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md` and `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition.
- **Own-site/product UI screenshots:** not applicable, no screenshot slots in this post.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt only, bottom-left, ~55% opacity per `image-style.md` §Watermark. In-post `ai-prompt` slots carry no wordmark and no lettering at all (see the in-post preamble below). If a featured render omits or garbles the wordmark, add it post-hoc rather than re-rolling the whole image.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph. All four placeholders in this draft already satisfy that rule as the writer placed them (H2 2 line 46, H2 4 line 84, H2 5 line 126, H2 7 line 166); do not move them.

**No lettering in-post:** every in-post `ai-prompt` slot in this post is specified with no title, no caption, no labels and no legible words, following the most recent posts in this library (`best-pens-for-note-taking`) rather than the older "titled with the subheading" convention in `image-style.md` §Observed conventions. The section heading sits directly above each image and does that job; AI-rendered lettering is the highest-risk element in these prompts and there is nothing here it needs to say.

**Table-redundancy rule:** the draft carries one markdown table, the rapid-logging symbol key under H2 5 (`draft-v2.md` lines 132 to 138), and the slot next to it (Image 3) was proposed as a `remotion` symbol key. That is a chart-style slot whose content is already the table, so it has been re-concepted and re-typed rather than shipped as a picture of the table. See §Editor notes for the full reasoning. Do not add any other slot to that section.

### Image 1, after H2 "The real reason beginners never start" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The aesthetic trap seen from the reader's side. A hand holds a phone that dominates the frame, its screen scrolling an endless grid of immaculate, heavily decorated bullet journal spreads. On the desk beside it, a plain half-filled notebook lies open with a pen across the page, untouched and ignored. Type: ai-prompt. Suggested filename: scrolling-spreads-notebook-ignored.png]`
- **Type:** `ai-prompt`
- **Concept:** A phone held upright dominates the foreground, its screen filled with a bright grid of immaculate decorated spreads, while the reader's own plain, barely-started notebook lies open and unlit at the edge of the desk behind it.
- **Suggested filename:** `scrolling-spreads-notebook-ignored.png`
- **Alt text:** `A phone scrolling decorated bullet journal spreads beside an ignored plain notebook`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline, no
  captions: a warm oat-and-greige desk surface under soft warm light, seen at a low
  three-quarter angle so there is depth from foreground to background.

  Foreground, right of center and dominating roughly half the frame: one hand,
  simplified flat-vector, seen from behind and below, holding a phone upright in
  portrait orientation, thumb resting mid-screen mid-scroll. Exactly one hand,
  exactly five fingers, no second hand, no arm beyond the wrist, no face, no body.
  The phone screen is the brightest, coolest thing in the picture and glows slightly
  onto the hand: it shows a dense scrolling grid of twelve tiny square thumbnails,
  each one an immaculate, heavily decorated notebook spread, bright and colorful and
  perfect, with pastel washi tape edges, watercolor banner shapes, tiny floral
  doodles, ornate lettering blocks and neat colored habit-tracker grids. The
  thumbnails are miniature and impressionistic, no legible words anywhere, and the
  grid is cropped by the top and bottom of the screen so it clearly continues
  forever.

  Background, left of center, further away and noticeably smaller, sitting in soft
  shadow with none of the screen's glow on it: one plain cream notebook lying open
  on the desk, faint grey dot grid, only three or four short loose black ink marks on
  the left page and the rest of both pages blank, one slim capped pen lying still
  across the page. It is angled slightly away from the viewer and is completely
  untouched. Nothing else on the desk: no mug, no plants, no laptop, no lamp, no
  stationery, no clutter.

  Palette: warm oat and greige desk, cream paper white, near-black #222222 ink and
  phone body, warm grey #6B7280 for the shadowed notebook, and the phone screen's
  colorful pastel thumbnails as the only bright saturated area. Warm and tactile
  everywhere except the screen. Brand blue is NOT the background and NOT the dominant
  fill. Flat vector with subtle warm shading, crisp shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults, keeps the in-post set consistent with the cover)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no arrows, no callout
  boxes, no numbers, no legible words, no readable UI text, no app icons, no status
  bar text, no garbled or misspelled text, no lorem ipsum, no second hand, no extra
  fingers, no malformed fingers, no arms, no face, no full person, no two phones, no
  tablet, no laptop, no coffee mug, no plants, no lamp, no clutter, no cold blue or
  navy scene, no monochrome brand-blue palette, no decorated spread on the paper
  notebook itself, no washi tape or stickers on the real notebook, no stray
  watermark, no wordmark, no logos, no 3D render, no photorealism, no heavy drop
  shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette, warm and inviting, explicitly avoiding the cold, too-blue feel of `student-desk-spiral` and `rocketbook-workflow`. The screen is the one cool element and it is cool on purpose.
- **Source data (if any):** none rendered as a figure. The section's evidence (`facts.md` lines 25 to 36, the creator's own 4-minute explainer at 15M+ views; `facts.md` §Quotes, "art about planning") is prose, not a number in the image. The twelve thumbnails are illustrative, no count is claimed anywhere.
- **Text-in-image warning:** this slot must carry **no** legible text at all, including on the phone screen. The thumbnails are specified as miniature and impressionistic precisely so there is nothing for the model to spell. If the render produces readable words, app labels, a status bar clock or caption-like text anywhere, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** the slot is a mood and a moment, the pull of the feed against the ignored page, which is an illustration job. A `screenshot` would need a real Instagram or Pinterest feed, which is someone else's copyrighted content and dates instantly; a Remotion diagram cannot carry the warmth or the screen glow that makes the point.

---

### Image 2, after H2 "How to set up your bullet journal in one sitting" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A labelled map of the four core pages of a bullet journal, drawn as a left-to-right flow: Index (find anything) to Future Log (months ahead) to Monthly Log (this month) to Daily Log (today), with short captions under each explaining what it holds and arrows showing tasks moving between them. Type: remotion. Suggested filename: four-core-pages-map.png]`
- **Type:** `remotion`
- **Concept:** The four core pages as a left-to-right map: four cards, each carrying a small drawing of the page's actual shape plus a one-line description, connected in setup order, with two return arcs beneath showing where an unfinished task goes at migration.
- **Suggested filename:** `four-core-pages-map.png`
- **Alt text:** `Map of the four core bullet journal pages, Index to Future, Monthly and Daily Log`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `FourCorePagesMap` (register in `tools/remotion/src/Root.tsx`, `component={FourCorePagesMap}`, the reference, never a JSX element)
- **Component file:** `tools/remotion/src/FourCorePagesMap.tsx`
- **Canvas dimensions:** 1800 x 1200 (`CANVAS` from `src/theme.ts`, matches the series); render final at `--scale=2`.
- **In-post image: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - **Fixed horizontal geometry, exact fit, no flex-grown connectors** (per remotion.md §Arrow conventions, mimic the constant block at the top of `HybridWorkflowFlow.tsx`): `CARD_W = 300`, `CONNECTOR_W = 120`, `ARROW_W = 80` (20 px clear each side), `xAt(i) = SAFE_MARGIN + i * (CARD_W + CONNECTOR_W)` giving x = 120, 540, 960, 1380, with the fourth card's right edge landing exactly on 1680. Check: `4 * 300 + 3 * 120 = 1560` = inner width. `CARD_TOP = 200`, `CARD_H = 420`, `ARROW_Y = CARD_TOP + CARD_H / 2 = 410`.
  - Layout, left to right, four neutral cards (standard recipe from remotion.md §Card design language, `palette.surface`, `1px solid palette.border`, radius 16, the standard shadow, padding 26 x 28). Inside each card, top to bottom:
    1. A step badge in the card's top-left corner: a 44 px circle, `1.5px solid palette.border`, with the step numeral in `fonts.mono` 24 px `palette.muted`. Numerals 1 to 4.
    2. A page glyph, ~150 px tall, centered, drawn in SVG with `fill: none`, `stroke: palette.primary`, `strokeWidth: 4`, round caps (the `iStroke` pattern already used in `Cornell5RsProcess.tsx` and `HybridWorkflowFlow.tsx`). Each glyph shows the shape of that actual page, and this is the whole reason the slot is a diagram rather than a list:
       - Index: a single page outline with four short ruled lines, each ending in a small right-aligned tick standing in for a page number.
       - Future Log: a two-page spread outline, each page ruled into three stacked empty blocks (six blocks total).
       - Monthly Log: a two-page spread outline, the left page carrying a column of short evenly spaced ticks (the days), the right page carrying three short list lines.
       - Daily Log: a single page outline with one short heading rule at the top and four bullet lines below it, one of them struck through.
    3. Card title in `fonts.sans` 38 px semibold `palette.text`.
    4. Caption in `fonts.sans` 25 px `palette.muted`, wrapping to a maximum of three lines inside the card, never overflowing.
  - **Sequential connectors** between the cards: `palette.muted`, `strokeWidth={2.5}`, solid, with a muted arrowhead marker, each exactly `ARROW_W` long at `ARROW_Y`, identical length and identical clearance on both sides. These carry the setup order only.
  - **Migration arc (the composition's ONE accent element):** a smooth curve leaving the bottom edge of the Daily Log card at (1530, 620), dropping to about y = 790, curving left and returning up into the bottom edge of the Monthly Log card at (1110, 620) with an accent arrowhead. `palette.accent`, `strokeWidth={4}`, solid, round caps.
  - **Second, lesser arc:** a curve leaving the bottom edge of the Monthly Log card at (1110, 620), dropping to about y = 920, curving left and returning up into the bottom edge of the Future Log card at (690, 620) with a muted arrowhead. `palette.muted`, `strokeWidth={2.5}`, `strokeDasharray="6 8"` (the alternative path, per remotion.md §Arrow conventions).
  - Arc labels, centered under each arc's lowest point, `fonts.sans` 26 px: the accent arc's label in `palette.accent` at about y = 820, the dashed arc's label in `palette.muted` at about y = 950. Keep 100 px of clear space above the watermark.
  - Copy (exact strings, no em-dashes, no enclosed glyphs):
    - Card titles: `Index`, `Future Log`, `Monthly Log`, `Daily Log`
    - Card captions: `A contents page you fill in as you go` / `Anything landing further out than this month` / `The days of this month down one page, tasks on the other` / `Today's date, then lines added as the day happens`
    - Accent arc label: `> Migrated forward to the next month`
    - Dashed arc label: `< Scheduled back into the Future Log`
  - Palette: per `blog-ops/profile/image-style.md` tokens + remotion.md §Color conventions. Background `palette.background`; card surfaces `palette.surface` on `palette.border`; titles `palette.text`; captions, step badges and sequential arrows `palette.muted`; page glyphs `palette.primary`; `palette.accent` used exactly once, on the migration arc and its label. No card gets the emphasis variant: all four pages are the system, none of them is "the answer", and the one thing worth emphasizing here is the movement between them. `palette.warn` unused. No `opacity < 1` dimming.
  - Typography: `fonts.sans` for card titles, captions and arc labels; `fonts.mono` for the four step numerals only. No em-dash (U+2014) anywhere in rendered text.
  - Icons / SVG assets: none external. `tools/remotion/public/` is empty in this project, so draw every page glyph inline in SVG; do not reference `staticFile`.
  - Card recipe to use: the neutral standard recipe only (remotion.md §Card design language).
  - Vertical budget check: content runs 200 to 990, mass centered near y = 595, watermark top at about 1100, so nothing crowds the watermark and nothing floats at the top.
- **Source data:** `facts.md` lines 153 to 156 (the four core collections and the official setup order: notebook, intentions, Index, Future Log, Monthly Log, Daily Log, Migration) for the card sequence, and `facts.md` lines 157 to 160 (the official symbol set) for the `>` and `<` prefixes on the two arc labels. Card captions paraphrase the draft's own Step 1 to Step 4 text (`draft-v2.md` lines 88 to 120). No fresh data needed.
- **Reference composition to mimic:** `tools/remotion/src/HybridWorkflowFlow.tsx`, which already solves exactly this problem (a fixed-pitch horizontal card row with exact-fit arithmetic in a constant block, fixed-length arrows, inline `iStroke` SVG icons). Take its code conventions and geometry discipline; this diagram has four cards rather than three, so recompute the constants as specified above, and it adds two return arcs it does not have.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FourCorePagesMap --output=out/preview-four-core-pages-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe, writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FourCorePagesMap --scale=2 \
    --output="$REPO/blog-ops/assets/bullet-journal-for-beginners/four-core-pages-map.png"
  ```
- **Why this and not a real screenshot:** there is no screen to capture, the four pages are a paper structure. This is the one genuinely diagrammatic slot in the post: it carries exact page names, a fixed order and two directional relationships, and Remotion renders that text exactly by construction where an AI illustration would invent labels.

---

### Image 3, after H2 "Rapid logging: the symbols that do all the work" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The rapid-logging symbol key drawn at pen-stroke scale as it actually appears on paper, five handwritten rows: a filled dot for a task, a small open circle for an event, a hyphen for a note, a right-pointing angle bracket for a migrated task, a left-pointing angle bracket for one scheduled into the Future Log, each with a short handwritten example line beside it. Type: remotion. Suggested filename: rapid-logging-symbol-key.png]`
- **Type:** `ai-prompt` (changed from the placeholder's `remotion`, see §Editor notes)
- **Concept:** A close, slightly angled view of one real Daily Log page mid-week, where the five marks appear in use down a single day's list at true pen-stroke scale, two lines struck through and one starred in the margin, rather than set out as a key.
- **Suggested filename:** `daily-log-page-in-use.png` (changed from the placeholder's `rapid-logging-symbol-key.png`, see §Editor notes)
- **Alt text:** `A daily log page with tasks, events and notes marked in ink, two lines crossed off`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline, no
  captions, no legend: an extreme close-up of one single page of an open cream
  notebook, the page filling almost the entire frame, faint grey dot grid, viewed
  from above at a slight three-quarter angle with a soft shadow along its outer edge
  and only a sliver of warm natural oak desk visible at the very edge of the frame.

  On the page, one ordinary weekday's list written in black ink, eight short lines
  stacked down the page with normal uneven spacing. The handwriting itself is loose
  cursive scribble, suggestive and completely unreadable, no legible words, no
  numbers, no labels. What IS drawn crisply and unambiguously is the single mark at
  the start of each line, at true pen scale, small next to the writing:
  line 1, a small solid filled round dot;
  line 2, a small solid filled round dot;
  line 3, a small hollow open circle, clearly unfilled;
  line 4, a short horizontal dash;
  line 5, a small solid filled round dot with the whole line after it struck through
  with one clean horizontal line;
  line 6, a right-pointing angle bracket, like a greater-than sign;
  line 7, a left-pointing angle bracket, like a less-than sign;
  line 8, a small solid filled round dot with the whole line after it struck through.
  One small five-pointed star sits alone out in the left margin beside line 6.

  The page is plainly, unglamorously used: slightly uneven line lengths, one tiny ink
  blot, nothing decorative. No colored ink, no highlighter, no washi tape, no
  drawings, no banners, no lettering flourishes, no ruled boxes, no headers. One slim
  capped pen may rest at a shallow diagonal across the very bottom corner of the
  frame, and nothing else.

  Palette: cream paper white, warm natural oak at the frame edge, near-black #222222
  ink, faint warm grey #6B7280 dot grid. Warm lamplight falling across the page from
  the upper left. Brand blue is NOT used here. Flat vector with subtle warm shading
  and soft paper texture, crisp shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no legend, no key, no
  table, no column headers, no arrows, no callout boxes, no numbers, no dates, no
  legible words, no garbled or misspelled text, no lorem ipsum, no colored ink, no
  highlighters, no washi tape, no stickers, no watercolor, no doodles, no floral
  decoration, no hand-lettered banners, no habit tracker grids, no ruled boxes, no
  second page of symbols, no hands, no fingers, no person, no phone, no laptop, no
  screen, no coffee mug, no plants, no clutter, no cold blue or navy scene, no
  monochrome brand-blue palette, no stray watermark, no wordmark, no logos, no 3D
  render, no photorealism, no heavy drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette, the warm wood-toned `finished-notebooks-shelf` look. Closest in-family precedent for the paper-and-ink treatment: `blog-ops/assets/best-pens-for-note-taking/ink-types-writing-sample.png` (take its warmth and paper texture, not its framing, this one is a much tighter crop of a single page).
- **Source data (if any):** `facts.md` lines 157 to 160 (the official rapid-logging symbol set: filled dot for a task, open circle for an event, dash for a note, `>` migrated forward, `<` scheduled into the Future Log). The image shows the marks in use; the meanings are carried by the table and the prose around it, not by any text in the image.
- **Text-in-image warning:** this slot must carry **no** legible text, and the handwriting is specified as unreadable scribble for that reason. The marks themselves are the one thing that must be correct: verify against `facts.md` lines 157 to 160 that the render shows a *filled* dot, a *hollow* circle, a dash, a right-pointing bracket and a left-pointing bracket, and that no mark is invented or substituted. A wrong mark sits four lines above a table that says otherwise. If the marks come out wrong, re-run once; if the second render is still wrong, record the slot `failed` and tell the editor to drop it, the table already carries the notation and this image is a bonus, not load-bearing.
- **Why this and not remotion/screenshot:** the section already presents the notation as a markdown table, so a Remotion symbol key would be a picture of that table (`${CLAUDE_PLUGIN_ROOT}/skills/suggest-images/SKILL.md` §Hard rules). What the table cannot show is what a real page looks like with the marks in use: their true size next to handwriting, the strike-throughs, the margin star, the plainness. That is a texture and scene job, which `custom-instructions.md` §Image style assigns to `ai-prompt`, and there is no screen to capture.

---

### Image 4, after H2 "What a bullet journal is bad at" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: An open bullet journal on a desk beside a phone showing a calendar app with timed appointments, both clearly in use, a pen resting on the notebook. The honest hybrid: paper for thinking, screen for anything with a clock time attached. Type: ai-prompt. Suggested filename: notebook-plus-calendar-hybrid.png]`
- **Type:** `ai-prompt`
- **Concept:** A flat top-down view of a working setup: an open, visibly used notebook holding the thinking, and a phone lying flat beside it showing a plain day of timed calendar blocks, both in use at once with no winner.
- **Suggested filename:** `notebook-plus-calendar-hybrid.png`
- **Alt text:** `An open bullet journal beside a phone showing a day of timed calendar blocks`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A warm, inviting flat-vector illustration, no title lettering, no headline, no
  captions: a flat top-down overhead view, looking straight down at a warm walnut
  desk surface in even warm daylight, everything lying flat, no perspective, no
  angle, no depth of field.

  Left of center and dominating the frame, an open cream notebook with a faint grey
  dot grid, both pages visible, clearly in use: a short handwritten list down the
  right-hand page in black ink, six or seven loose unreadable scribbled lines, two of
  them struck through, a couple of small marks in the margin. The handwriting is
  suggestive scribble, no legible words, no numbers. One slim capped pen rests
  diagonally across the notebook's lower right corner, positioned as if just put
  down.

  To the right of the notebook, lying flat on the desk, noticeably smaller than the
  notebook and not overlapping it, one phone seen straight from above. Its screen
  shows a plain, unfussy day view of a calendar app: one narrow vertical column with
  faint evenly spaced horizontal gridlines, and five soft teal (#0E9F8E) rounded
  blocks of different heights placed at different points down the column, some with
  gaps between them. The blocks are plain filled shapes with no text in them, and
  there are no icons, no app bar, no buttons and no readable labels anywhere on the
  screen. The screen is calm and mostly white, not glowing, not the brightest thing
  in the picture.

  Both objects are equally well lit and equally in use: neither is in shadow, neither
  is pushed aside, and the composition gives them comparable visual weight even
  though the notebook is larger. Nothing else on the desk: no mug, no laptop, no
  plants, no lamp, no stationery, no hands, no person, no clutter.

  Palette: warm walnut desk, cream paper white, near-black #222222 ink and phone
  body, warm grey #6B7280 for the dot grid and gridlines, soft teal #0E9F8E used only
  for the calendar blocks. Warm, inviting, natural wood tones. Brand blue is NOT the
  background and NOT the dominant fill. Flat vector with subtle warm shading, crisp
  shapes, no outline-only line art.
  ```
- **Aspect ratio:** `3:2` (matches `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no title text, no headline lettering, no captions, no labels, no arrows, no callout
  boxes, no numbers, no clock times, no dates, no legible words, no readable UI text,
  no app icons, no status bar, no buttons, no garbled or misspelled text, no lorem
  ipsum, no three-quarter angle, no perspective view, no tilted camera, no hands, no
  fingers, no person, no laptop, no tablet, no second phone, no coffee mug, no
  plants, no lamp, no clutter, no decorated or hand-lettered notebook spread, no
  washi tape, no stickers, no colored ink, no cold blue or navy scene, no monochrome
  brand-blue palette, no glowing screen, no stray watermark, no wordmark, no logos,
  no 3D render, no photorealism, no heavy drop shadows, no busy background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette, warm and wood-toned. Deliberately framed differently from Image 1 in this same post: that one is a low three-quarter angle with a hand, a dominant glowing phone and a shadowed notebook; this one is a flat overhead with no hand, a dominant notebook, a calm screen and even light. If the two renders start to look alike, re-run this one.
- **Source data (if any):** `facts.md` lines 63 to 73 (seven commenters in one r/BasicBulletJournals thread describing the same split: appointments in a digital calendar, everything else in the notebook). Nothing numeric is rendered; the five calendar blocks are illustrative and no count is claimed in the alt text.
- **Text-in-image warning:** this slot must carry **no** legible text, including on the phone screen, where a calendar UI is exactly the kind of surface a model will try to fill with garbled times and labels. The calendar is specified as plain colored blocks on gridlines for that reason. If the render produces readable times, dates, event names or a status bar, re-run rather than accepting it.
- **Why this and not remotion/screenshot:** a real screenshot of a calendar app would leak a personal schedule, date the post, and put a third-party product's UI at the center of a section about paper. A Remotion mockup would render a crisp fake UI, which is more literal than this slot needs; the point is the pairing of two objects on a desk, an illustration job per `custom-instructions.md` §Image style.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/bullet-journal-for-beginners/
├── featured.png
├── scrolling-spreads-notebook-ignored.png
├── four-core-pages-map.png
├── daily-log-page-in-use.png
└── notebook-plus-calendar-hybrid.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate via `npx remotion still <Id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <Id> --scale=2 --output=blog-ops/assets/bullet-journal-for-beginners/<filename>`. Use `<BlogWatermark />` and the fonts/palette locked in `blog-ops/profile/image-style.md`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** the shared `<BlogWatermark />` for the Remotion slot; the `olgapak.com` wordmark is requested inside the featured prompt only. In-post `ai-prompt` slots carry no wordmark.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `four-core-pages-map.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the `remotion` and `ai-prompt` slots under normal conditions: Stage 4a.5 renders all five.
2. For any slot recorded `failed`, follow its production spec by hand and save to `blog-ops/assets/bullet-journal-for-beginners/` using the filenames above, verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb; this library's existing covers run larger and that has been accepted).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

1. **The featured concept departs from `outline.md` §Image placement plan, deliberately.** The outline's cover was "a heavily decorated spread beside a plain working one" (`split-contrast`). Stage 3b caught that concept colliding with the H2 2 in-post slot and fixed the H2 2 slot instead, which left both images built from the same two props and making the same argument, with the cover rendering as a banner directly above the title. Rather than manage that residual overlap, this plan re-concepts the cover to `big-number`: an oversized "4 pages" beside one plain notebook and one pen. Two reasons. First, it removes the collision entirely instead of narrowing it, and in-post Image 1 now owns the decoration critique alone. Second, and independently: a cover whose largest, most attractive object is an immaculate decorated spread sells this post as a craft post at thumbnail size, which is the exact impression the draft exists to undo. The title band already says "You Don't Need Art Skills" in words, so the picture is free to show the system instead of re-arguing the point. **The editor may overrule this and restore the outline's concept**; if so, the `split-contrast` archetype is not blocked by the ledger and the prompt would need to make the plain page unmistakably the winner, with the decorated page smaller and cooler.
2. **The `4 pages` claim on the cover is the draft's own wording**, `draft-v2.md` line 29: "The system he published runs on four pages: the Index, the Future Log, the Monthly Log, and the Daily Log", grounded in `facts.md` lines 153 to 156. It is not an invented figure. Strictly the Index occupies two pages and two of the four are spreads, so if the editor wants the cover to be literal rather than to echo the post's own sentence, the fallback is the word `pages` swapped for `collections`, which is uglier and less legible; I recommend keeping the post's wording.
3. **WARNING, table-duplicate slot (Image 3), resolved by re-concepting rather than by dropping.** The H2 5 placeholder proposed a `remotion` symbol key sitting four lines above the markdown symbol table in the same section (`draft-v2.md` lines 132 to 138), which the template's table-redundancy rule and the skill's hard rules both forbid: a five-row graphic of mark, meaning, example is a picture of that table. But the outline's own justification for the slot was sound and pointed away from a key: what the table genuinely cannot show is what the marks look like *in use*, at pen scale, mixed into one real day's page. So the slot survives with a new concept (a close-up of a used Daily Log page, marks in use, two lines struck through, a star in the margin) and a new type. Nothing in it repeats the table's structure. **Dropping the slot was the acceptable alternative and I considered it**; I kept it because H2 5 is the mechanical heart of the post and because the re-concepted image also does thesis work the rest of the post cannot: it shows a page that is plainly, unglamorously ordinary.
4. **Image 3 changed type from `remotion` to `ai-prompt`,** agreeing with the Stage 3b reviewer. "At pen-stroke scale as it actually appears on paper" is a texture and scene brief, and `custom-instructions.md` §Image style reserves `remotion` for genuine diagrams and charts. There is a second reason: the post now carries exactly one diagram (Image 2), which is the right amount for a post arguing that this system is plain and human rather than systematized.
5. **Image 3's filename changed** from the placeholder's `rapid-logging-symbol-key.png` to `daily-log-page-in-use.png`, because the old name describes an image this plan no longer specifies. The draft placeholder still contains the old name and the old `Type: remotion`; that is expected (this skill never edits the draft) but the finalize step must take the filename from **this file**, not from the placeholder text, when it swaps in the Markdown image syntax.
6. **Fallback if Image 3 renders wrong twice:** the five marks are the only load-bearing content in it, and a wrong mark would sit four lines above a table that says otherwise. If the second render still gets them wrong, drop the slot, delete the `[IMAGE:]` placeholder at `draft-v2.md` line 126, and ship three in-post images. The outline pre-authorised exactly this outcome and the table carries the notation regardless.
7. **Slot-count check: no mismatch.** Four `[IMAGE:]` placeholders in `draft-v2.md` (lines 46, 84, 126, 166), four in-post slots in the outline's image placement plan, all four placed after their heading plus one paragraph. Total 5 with the featured, inside `blog-craft.md`'s 1 featured + 3 to 5 in-post target.
8. **Priority-ladder check.** No slot is a `screenshot`, and none should be: the only capturable surfaces this post could show are someone else's decorated-spread feed (Image 1) and a calendar app holding a real personal schedule (Image 4), both of which would date the post and put third-party content at the center of the frame. No `remotion` slot duplicates a table after the Image 3 change. The one `remotion` slot is the only slot carrying exact names, a fixed order and directional relationships, which is where that rung belongs.
9. **No chart needs data that is not in `facts.md`.** Nothing is flagged for a fresh pull.
10. **Featured hue.** The last two covers (`best-pens-for-note-taking`, `how-to-reduce-screen-time`) are both sage green, so this one is specified as warm apricot and the negative prompt excludes green explicitly. Also excluded: marigold (`digital-detox-plan`), terracotta (`time-blocking`), lilac (`digital-vs-paper-notes`).
11. **In-post slots carry no lettering at all**, following the recent posts in this library rather than the older "each section illustration titled with its subheading" note in `image-style.md` §Observed conventions. If the editor wants the older lettered-section look back, that is a per-slot prompt edit, but it raises garbled-text risk on three images that currently have nothing to garble.
12. **Cross-image collision watch for Gate 2.** Image 1 and Image 4 both contain a notebook and a phone. They are specified to be as different as two images with the same two props can be: low three-quarter angle with a hand, dominant glowing phone, shadowed unused notebook (Image 1) versus flat overhead with no hand, dominant used notebook, calm screen, even light (Image 4). Check them side by side at Gate 2; if they still read as the same picture, re-run Image 4 with the phone moved to the bottom edge and half out of frame.
