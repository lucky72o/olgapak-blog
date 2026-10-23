# Images: aesthetic-stationery

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/aesthetic-stationery/outline.md` (image placement plan), `blog-ops/drafts/aesthetic-stationery/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/aesthetic-stationery/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: the `image-builder` agent at Stage 4a.5 (renders `remotion` + `ai-prompt` slots) and the human (executes anything that fails, saves assets under `blog-ops/assets/aesthetic-stationery/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/aesthetic-stationery/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in `blog-ops/config.yaml`; a member of `images.enabled = [ai-prompt, screenshot, remotion]`). This is a locked choice: `profile/custom-instructions.md` §Image style states the featured slot is always the hand-lettered hero over a flat-vector illustration and must never be converted to `remotion` so it auto-renders.
- **Dimensions:** `ai-prompt` at the blog's 3:2 aspect default (`profile/image-style.md` §Aspect ratio defaults). The post page renders the cover at native 3:2; OG/Twitter previews crop to 1.91:1, so keep the title and the central object inside a horizontally centered safe zone with generous top and bottom margin.
- **Concept:** One oversized cream ceramic pen cup holding exactly four pieces of muted-pastel stationery (two slim pens, one pastel highlighter, one pencil), sitting on a warm neutral surface with one closed dot-grid notebook leaning behind it, under a big hand-lettered title.
- **Archetype:** `object-metaphor`. One oversized central object, no panels and no flow, is the composition that states the post's thesis (a small curated set that earns its space) in a single glance. A cover built as a spread of many items would read as a haul and visually contradict the copy's whole restraint argument. Rotation check: the last two prior posts in the ledger are `screen-free-hobbies` (`negative-space`, 2026-09-02) and `bullet-journal-for-beginners` (`big-number`, 2026-08-26), so both are off limits; `split-contrast` was deliberately left free for in-post Image 1, which is a genuine split scene, and `diagram-lite` is wrong because nothing here is a flow. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
  - Alternatives considered and rejected: (a) `pattern-break`, a grid of many pens with one pulled out, rejected because a dense grid is exactly the overflowing-collection look the post argues against, and `best-pens-for-note-taking` already shipped that motif; (b) `scene-vignette`, a woman at a tidy desk, rejected as a weaker statement of the thesis and used recently on 2026-08-19.
- **Suggested filename:** `featured.png`
- **Alt text:** `Cream pen cup holding four muted pastel pens and a highlighter beside a dot-grid notebook`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in the olgapak.com brand style,
  warm, calm and inviting. Composition: ONE oversized central object, an
  object-metaphor cover with no panels, no cards, no arrows and no charts. A
  large cream ceramic pen cup stands slightly off-center in the lower half of
  the frame, holding exactly four pieces of stationery and no more: two slim
  pens, one chisel-tip highlighter, one wooden pencil, their caps and barrels
  in muted pastels (dusty rose, sage green, butter yellow, pale dusty blue).
  One closed dot-grid notebook in warm kraft brown leans behind the cup at a
  slight angle. Nothing else on the surface: generous empty space all around
  the object, a deliberately small and curated set rather than a collection or
  a haul. Viewed head-on at eye level, soft flat shapes, thin clean outlines,
  minimal shading, gentle warm light, no photorealism. Single flat warm sand
  background (#EFE3D5) filling the whole canvas, with a soft warm neutral desk
  band under the object. Big hand-lettered script title across the top third
  reading exactly "Aesthetic Stationery: 17 Best Picks That Earn Their Space",
  mixed with a bold rounded sans-serif (Montserrat feel); the numeral "17" is
  oversized, the word "Earn" is colored red (#E11D48) as the single accent
  word, all other lettering in dark charcoal (#222222). Palette limited to
  warm sand, cream, kraft brown, charcoal #222222, muted pastels, one red
  accent #E11D48 and a small teal detail #0E9F8E. Small "olgapak.com" wordmark
  watermark in the bottom-right corner at low opacity. 3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, overflowing stationery collection, haul layout,
  dozens of pens, cluttered desk, maximalist, neon or fluorescent colors,
  saturated rainbow highlighters, dark or moody background, numbered callouts,
  badges, infographic annotations, arrows, charts, garbled or misspelled text,
  gibberish lettering, duplicate or warped hands and fingers, extra limbs,
  real brand logos or trade dress, Zebra / Mildliner / Post-it / Muji
  wordmarks, fake UI chrome, heavy drop shadows, colors outside the warm
  neutral and muted pastel palette, brand-blue background
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions (featured hero pattern) and §Palette; the warm, wood-toned `finished-notebooks-shelf` reference look named in §Illustration palette; existing heroes in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none directly; the numeral "17" matches the 17 picks in the post (`facts.md` §Product table, 17 rows).
- **Text-in-image warning:** the hand-lettered title carries an exact string, `Aesthetic Stationery: 17 Best Picks That Earn Their Space`. AI text rendering is unreliable at this length. If the model garbles or misspells any word, regenerate a clean illustration with no lettering and add the title as a post-processing overlay (Montserrat bold plus a script face, "17" oversized, "Earn" in #E11D48) rather than shipping broken lettering.
- **Why this and not remotion/screenshot:** the site's locked featured-hero look is a hand-lettered flat-vector illustration and `custom-instructions.md` forbids converting this slot to `remotion`; there is nothing real to screenshot.

### Watermark

- **`ai-prompt` slots:** request the low-opacity `olgapak.com` wordmark in the prompt (bottom-right); the human confirms or adds it in post if the model omits it.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph (so the heading introduces the section, the paragraph frames the point, and the image illustrates it).

**Table-redundancy rule:** never spec a chart-style image whose content is already presented as a markdown table in the same section. Checked: the only diagram slot (Image 2) has no markdown table within 20 lines either side.

### Image 1, after H2 "Why aesthetic stationery actually works (and where it stops working)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A split scene, a staged pastel stationery flat-lay on one side and a real working desk with crumpled notes and a tangled charger on the other. Type: ai-prompt. Suggested filename: staged-versus-real-desk.png]`
- **Type:** `ai-prompt`
- **Concept:** A single desk split down the middle: the left half is a perfectly staged pastel flat-lay with four items arranged in a grid, the right half is the same desk mid-use with crumpled notes, snack wrappers and a tangled charger.
- **Suggested filename:** `staged-versus-real-desk.png`
- **Alt text:** `A staged pastel stationery flat-lay on the left and a real working desk with crumpled notes on the right`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in the olgapak.com brand style,
  warm and lived-in, no lettering anywhere in the image. One wide desk seen
  from directly above, split down the exact vertical center into two halves
  that share the same warm neutral wood surface, with a thin soft shadow line
  marking the divide. LEFT HALF, staged: four items only, arranged in a neat
  even grid with wide equal spacing, a closed dot-grid notebook, two slim pens
  in muted pastel barrels, one pastel highlighter, plus a tiny sprig of
  eucalyptus, everything aligned, spotless and calm, pale cream paper and
  dusty rose, sage and butter-yellow accents. RIGHT HALF, real: the same desk
  actually being used and genuinely messy, three crumpled balls of paper, a
  half-open notebook with dense scribbled handwriting and a coffee ring on the
  page, two torn snack wrappers, a tangled charging cable looping across the
  surface, a phone face-down, pen caps loose and separated from their pens.
  The messiness must read clearly as real working chaos, not as a slightly
  untidy version of the left half. Soft flat shapes, thin clean outlines,
  minimal shading, warm natural light from the top-left. Muted neutral palette
  throughout: warm wood, cream paper, kraft brown, charcoal #222222, muted
  pastels, with small teal #0E9F8E and red #E11D48 details only. Small
  "olgapak.com" wordmark watermark in the bottom-right corner at low opacity.
  3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, labels, captions or lettering, garbled letters, photorealism, 3D
  render, neon or fluorescent colors, dark moody background, brand-blue
  background, real brand logos or trade dress, product wordmarks, human faces
  or hands, extra limbs, fake UI chrome, numbered callouts, badges, arrows,
  overflowing stationery haul on the staged side, identical tidiness on both
  halves, watermark text other than olgapak.com
  ```
- **Style reference (if any):** `profile/image-style.md` §Illustration palette (warm, wood-toned `finished-notebooks-shelf` reference; explicitly not the cold blue `student-desk-spiral` look).
- **Source data (if any):** none. The concept illustrates the X quote at `facts.md` §Quotes ("my actual study area is covered in crumpled notes, snack wrappers and tangled chargers"), so those three props must all appear on the right half.
- **Text-in-image warning:** this slot needs no in-image text at all; the section prose carries the argument. Request no lettering so there is nothing for the model to garble.
- **Why this and not remotion/screenshot:** it is a mood and lifestyle contrast, not a data or UI artifact; `custom-instructions.md` reserves `remotion` for genuine diagrams only, and there is no real screen to capture.

### Watermark

- **`ai-prompt` slots:** request the low-opacity `olgapak.com` wordmark in the prompt; the human confirms or adds it in post if the model omits it.

---

### Image 2, after H2 "How I picked these 17" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A simple decision diagram of the "would it survive a downsizing?" filter, three questions branching to keep or skip. Type: remotion. Suggested filename: downsizing-filter-diagram.png]`
- **Type:** `remotion`
- **Concept:** One question card, "Would this survive a downsizing?", splitting into a Yes branch that lands on a Keep it outcome and a No branch that lands on a Skip it outcome.
- **Suggested filename:** `downsizing-filter-diagram.png`
- **Alt text:** `Decision diagram: would this survive a downsizing, yes means keep it, no means skip it`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `DownsizingFilterDiagram` (register in `tools/remotion/src/Root.tsx` with `width={CANVAS.width} height={CANVAS.height}`, following the existing `<Still>` entries).
- **Component file:** `tools/remotion/src/DownsizingFilterDiagram.tsx`
- **Canvas dimensions:** 1800 × 1200 (the adapter's `CANVAS` token, matching the rest of this project's in-post diagrams); render final at `--scale=2`.
- **In-post image: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout, top to bottom, every coordinate derived from a fixed `L` constants object (never eyeballed), exactly as `HandwriteOrTypeDecision.tsx` does it:
    1. **Question card**, horizontally centered, ~900 px wide, top edge around y=250, standard neutral card recipe. Single line of bold `fonts.sans` copy in `palette.text`.
    2. **A short vertical stub** down from the question card's bottom center to a split point, then two connectors fanning left and right to the two outcome cards.
    3. **Two outcome cards**, side by side, equal width (~640 px each) with a fixed 160 px gutter, centered as a pair inside `SAFE_MARGIN`, top edge around y=680. Each holds a bold headline line plus one muted supporting line beneath it.
    4. Aim the diagram's visual center of mass near y=650 to 700; keep everything clear of the watermark band (top of watermark near y=1100).
  - Copy (exact strings, rendered verbatim, no em-dashes):
    - Question card: `Would this survive a downsizing?`
    - Left branch label, on the connector: `Yes`
    - Right branch label, on the connector: `No`
    - Left outcome card headline: `Keep it`
    - Left outcome card support line: `You would rebuy it from scratch. It earns its space.`
    - Right outcome card headline: `Skip it`
    - Right outcome card support line: `Pretty in the photo, unused in the drawer.`
  - **Keep it simple: exactly one question and two outcomes.** Do not add a second or third question row, do not add sub-conditions, do not add per-item examples. The restraint of the diagram is the point of the section.
  - Palette: per `profile/image-style.md` and remotion.md §Color conventions. Canvas `palette.background`; question card and the Skip card use the standard neutral surface recipe (`palette.surface`, `1px solid palette.border`); the **Keep it** card is the single emphasis/outcome card (light `palette.accent` #0E9F8E tint background, `2px solid palette.accent` border, headline in `palette.accent`). The Skip card stays neutral with `palette.muted` support text; do NOT use `palette.warn` (skipping a pen is not an error state) and do NOT dim it with opacity.
  - Typography: `fonts.sans` throughout (question, headlines, support lines, branch labels). Question ~54 px bold, outcome headlines ~48 px bold, support lines ~28 px `palette.muted`, branch labels ~26 px semibold. No `fonts.mono` needed, there is no data value in this composition. No em-dash, no enclosed or check/cross glyphs as text.
  - Icons / SVG assets: none. `tools/remotion/public/` is empty, do not add assets for this slot.
  - Arrows / connectors: per remotion.md §Arrow conventions. The **Yes leg to Keep it** is the active path: `palette.accent`, `strokeWidth={4}`, solid, rounded caps, accent arrowhead marker. The **No leg to Skip it** is the alternative path: `palette.muted`, `strokeWidth={2.5}`, dashed (`strokeDasharray="6 8"`), muted arrowhead. Both legs have identical geometry mirrored about the center line; place each branch label just above its own leg, clear of the stroke.
  - Card recipe: standard recipe from remotion.md §Card design language (radius 16, the adapter's `cardShadow`, padding 26px 28px) for the question and Skip cards; emphasis variant for exactly one card, Keep it.
- **Source data (if any):** no numbers are rendered. The filter itself comes from `facts.md` line 20 (r/stationery downsizing thread, 2,251 upvotes / 89 comments, a stash cut by "about 90-95%") and the r/stationery start-over quote in the draft's section intro. Card copy is hardcoded illustrative text, acceptable in a diagram context. Nothing here needs fresh data.
- **Reference composition to mimic:** `tools/remotion/src/HandwriteOrTypeDecision.tsx` (one question card splitting to two outcomes; same fixed-`L` geometry approach). `tools/remotion/src/NotesDecisionRule.tsx` is a secondary reference for the connector and arrow helpers. Take code conventions from both, the layout here is simpler: one question, two outcomes.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still DownsizingFilterDiagram --output=out/preview-downsizing-filter-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe, writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still DownsizingFilterDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/aesthetic-stationery/downsizing-filter-diagram.png"
  ```
- **Why this and not a real screenshot:** it is an editorial decision rule with exact label text, there is nothing to capture, and Remotion renders the wording exactly in brand type and palette (an AI illustration would garble it).

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component; never inline, never reposition.

---

### Image 3, after H2 "Pens, highlighters and markers" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A group shot of pens, highlighters and fineliners in a muted pastel palette laid out on a warm neutral desk. Type: ai-prompt. Suggested filename: pens-highlighters-group.png]`
- **Type:** `ai-prompt`
- **Concept:** A small group of writing tools, three gel pens, two pastel highlighters and two fineliners, laid out in a loose fan on a warm neutral desk beside an open notebook showing a few pastel-highlighted lines.
- **Suggested filename:** `pens-highlighters-group.png`
- **Alt text:** `Gel pens, pastel highlighters and fineliners fanned out on a warm desk beside an open notebook`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in the olgapak.com brand style,
  warm and inviting, no lettering anywhere in the image. Seven writing tools
  and no more, laid out in a loose relaxed fan on a warm wooden desk seen from
  slightly above at a gentle three-quarter angle: three slim gel pens with
  clip caps, two chisel-tip highlighters, two fine-tip fineliners. Their
  barrels and caps are in soft muted pastels only, dusty rose, sage green,
  butter yellow, pale dusty blue, muted lilac, warm grey, on cream bodies.
  Behind them, an open notebook page in cream paper with a few short abstract
  handwriting strokes and two soft pastel highlighter swipes across them, the
  strokes suggested as wavy lines rather than readable words. Generous empty
  desk space around the group, a small curated set rather than a pile.
  Soft flat shapes, thin clean outlines, minimal shading, warm natural light
  from the top-left, a subtle soft shadow under each pen. Muted neutral
  palette: warm wood, cream, kraft brown, charcoal #222222, muted pastels,
  small teal #0E9F8E detail. Small "olgapak.com" wordmark watermark in the
  bottom-right corner at low opacity. 3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, labels, readable handwriting, garbled letters, brand names, real
  brand logos or trade dress, Zebra / Mildliner / Pilot / Muji wordmarks,
  photorealism, 3D render, neon or fluorescent highlighter colors, saturated
  rainbow set, dozens of pens, overflowing pen case, cluttered haul, dark or
  moody background, brand-blue background, hands or fingers, extra limbs,
  numbered callouts, badges, arrows, fake UI chrome
  ```
- **Style reference (if any):** `profile/image-style.md` §Illustration palette (warm wood-toned reference look) and §Palette. The muted pastel range should read like the post's "gentle" highlighter and neutral sticky-note palette without naming or depicting any brand.
- **Source data (if any):** none. The section covers 6 pen and highlighter picks (`facts.md` §Product table rows 1 to 6); the illustration is representative, not a one-to-one depiction, so it must not be read as a product lineup.
- **Text-in-image warning:** no in-image text is wanted. Handwriting on the notebook page must stay abstract wavy strokes so the model has nothing to spell.
- **Why this and not remotion/screenshot:** a warm product-family scene, not a diagram and not a screen; `remotion` is reserved for genuine diagrams on this blog.

### Watermark

- **`ai-prompt` slots:** request the low-opacity `olgapak.com` wordmark in the prompt; the human confirms or adds it in post if the model omits it.

---

### Image 4, after H2 "Notebooks and paper" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A group of notebooks and paper pads shown open to their pages rather than stacked as covers, dot-ruled and grid pages visible. Type: ai-prompt. Suggested filename: notebooks-open-pages.png]`
- **Type:** `ai-prompt`
- **Concept:** Three notebooks and one loose-leaf pad lying open on a warm desk so their dot-grid, grid and lined pages are the visible subject, rather than a stack of closed covers.
- **Suggested filename:** `notebooks-open-pages.png`
- **Alt text:** `Three notebooks and a loose-leaf pad lying open to show dot-grid, grid and lined pages`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in the olgapak.com brand style,
  warm and inviting, no lettering anywhere in the image. Four paper items and
  no more, lying OPEN on a warm wooden desk seen from directly above, gently
  overlapping at the corners so every ruling pattern stays visible: a
  softcover notebook open to a cream dot-grid spread, a slim hardcover
  notebook open to a pale grid spread, a stapled pocket notebook open to a
  lined spread, and a loose-leaf pad of cream paper with a punched edge. The
  open pages are the subject; no closed covers stacked into a pile. A couple
  of pages carry light abstract pencil strokes and one soft pastel highlighter
  swipe, suggested as wavy marks rather than readable words. One slim pastel
  pen rests across a corner of one spread. Generous empty desk space around
  the group. Soft flat shapes, thin clean outlines, minimal shading, warm
  natural light from the top-left, a soft shadow under each page edge. Muted
  neutral palette: warm wood, cream and ivory paper, kraft brown, charcoal
  #222222, muted pastel accents, small teal #0E9F8E detail. Small
  "olgapak.com" wordmark watermark in the bottom-right corner at low opacity.
  3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, labels, readable handwriting, garbled letters, brand names, real
  brand logos or trade dress, Leuchtturm / Moleskine / Rhodia / Muji
  wordmarks, closed covers stacked in a tall pile, dozens of notebooks, a
  bookshelf of notebooks, cluttered haul, photorealism, 3D render, neon
  colors, dark or moody background, brand-blue background, hands or fingers,
  extra limbs, numbered callouts, badges, arrows, fake UI chrome
  ```
- **Style reference (if any):** `profile/image-style.md` §Illustration palette; the warm `finished-notebooks-shelf` reference look, adapted to open pages rather than a shelf.
- **Source data (if any):** none. The section covers the notebook and paper picks (`facts.md` §Product table, the notebooks and paper rows); the illustration is representative, not a one-to-one product lineup.
- **Text-in-image warning:** no in-image text is wanted. Page marks must stay abstract strokes so the model has nothing to spell.
- **Why this and not remotion/screenshot:** it shows paper texture and ruling styles, which an illustration conveys and a diagram cannot; nothing real to capture.

### Watermark

- **`ai-prompt` slots:** request the low-opacity `olgapak.com` wordmark in the prompt; the human confirms or adds it in post if the model omits it.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/aesthetic-stationery/
├── featured.png
├── staged-versus-real-desk.png
├── downsizing-filter-diagram.png
├── pens-highlighters-group.png
└── notebooks-open-pages.png
```

Asset folder is created automatically by Stage 4a.5 (`image-builder` / `generate-images`).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/DownsizingFilterDiagram.tsx`, iterate via `npx remotion still DownsizingFilterDiagram --output=out/preview-...png` (throwaway), final export via the worktree-safe command in the Image 2 spec. Use `<BlogWatermark />` and the fonts/palette locked in `profile/image-style.md`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark and polish:** `remotion` slot uses the shared `<BlogWatermark />` component; `ai-prompt` slots request the `olgapak.com` wordmark in-prompt and the human adds it in post if the model omits it. Output format: PNG for every slot.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `pens-highlighters-group.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the four `ai-prompt` slots and the one `remotion` slot unless Stage 4a.5 records a `failed` disposition; then generate that slot from its spec above.
2. Save to `blog-ops/assets/aesthetic-stationery/` using the suggested filenames verbatim.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Diagram simplified against the draft placeholder wording.** The Image 2 placeholder text reads "three questions branching to keep or skip", but the spec above deliberately builds ONE question ("Would this survive a downsizing?") branching to Keep it / Skip it, per the editor's instruction and because the section's own argument is a single test. The placeholder text is not edited (writer placement is untouched) and is not rendered anywhere, so nothing in the published post contradicts the image. If the human prefers the three-question version, it would need three stacked question rows and would break the deliberate simplicity of the slot.
- **Slot counts match.** 4 `[IMAGE:]` placeholders in `draft-v2.md` (lines 29, 51, 67, 133), 4 in-post slots in `outline.md` §Image placement plan, plus 1 featured. No delta.
- **Type assignments are the outline's and `custom-instructions.md`'s, unchanged.** Featured `ai-prompt` (locked by `images.featured_default` and the standing instruction never to convert it to `remotion`); one `remotion` slot only (Image 2, a genuine decision diagram, the sole use this blog permits); three scene illustrations as `ai-prompt`. Priority-ladder note: rung 1 (`remotion`) is technically enabled for the three scene slots, but this blog's profile explicitly forbids blanket-converting scenes to `remotion`, so the ladder yields `ai-prompt` for them.
- **No chart needs fresh data.** The single diagram renders no numbers; its filter is grounded in `facts.md` line 20.
- **Table-duplicate check clean.** No markdown table sits within 20 lines of the Image 2 placeholder.
- **Featured-image hygiene check clean.** No in-post placeholder uses `featured.png` or duplicates the featured concept.
- **Restraint is a visual requirement, not a preference.** Every prompt caps the number of depicted items (4 featured, 7 pens, 4 paper items) and asks for generous empty space, because a full-frame haul would visually argue the opposite of the post. If a generation comes back looking like a collection, regenerate rather than accept it.
- **No brand logos or trade dress anywhere.** Every `ai-prompt` negative prompt names the likely offenders explicitly; the palette language stands in for the branded products the post recommends.
