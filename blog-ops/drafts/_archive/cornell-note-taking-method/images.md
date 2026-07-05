# Images: cornell-note-taking-method

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/cornell-note-taking-method/outline.md` (image placement plan), `blog-ops/drafts/cornell-note-taking-method/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/cornell-note-taking-method/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/cornell-note-taking-method/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `3`
  - AI-generated (`ai-prompt` / `ai-api`): `2` (both `ai-prompt`)
  - Screenshots: `0`
- File destination: `blog-ops/assets/cornell-note-taking-method/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in `blog-ops/config.yaml`; a member of `images.enabled`, and the correct match for this blog's established illustrated-hero library).
- **Dimensions:** `ai-prompt`, 3:2 per `blog-ops/profile/image-style.md`'s aspect-ratio default.
- **Concept:** A friendly flat-vector hero of the recurring female character seated at a desk, pen in hand, beside one oversized Cornell-divided page (narrow cue column, wide notes column, bottom summary bar), with the post title hand-lettered above her.
- **Suggested filename:** `featured.png`
- **Alt text:** `Illustrated student at a desk beside a large three-zone Cornell notes page`

> **Featured-slot hygiene note:** the outline's concept is already a single, bold editorial idea (one character + one Cornell page + title), well within the "≤3 focal objects, legible as a thumbnail" rule. No numbered callouts, no annotate-all-the-zones density. Kept as-is; no simpler alternative needed.

### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** Ideogram (preferred for the legible hand-lettered title) or ChatGPT image / Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, single bright saturated background
  (brand blue #2B6CB0), generous flat empty space, no gradients, no photographic
  texture. Subject: a cheerful young woman (recurring brand character) sitting at a
  simple desk, pen in hand, smiling, turned three-quarters toward the viewer. Beside
  her, filling the right two-thirds of the frame, one large clean sheet of paper
  clearly divided into three Cornell zones: a narrow vertical column on the left, a
  wide column on the right, and a horizontal bar across the bottom, drawn as plain
  ruled shapes (no readable words inside). A small teal (#0E9F8E) accent on one
  desk prop (a mug or a sticky note). Bold, rounded, confident line-art shapes,
  clean vector fills, Montserrat-family geometry. Above the scene, the post title
  set in a playful hand-lettered / script face mixed with a bold rounded sans:
  "Cornell Note-Taking Method: The Complete Guide + Template", with the single word
  "Cornell" colored red (#E11D48) as the accent word. Small "olgapak.com" wordmark
  watermark, bottom area, low opacity (~0.55). Energetic, optimistic, approachable
  mood. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, gradients, drop shadows, cluttered background, numbered
  callouts, badges, arrows, dense annotations, extra limbs, extra fingers, deformed
  hands, stray logos, fake UI chrome, garbled/misspelled text, lorem ipsus body
  text inside the note zones, colors outside the brand palette (no orange, no purple)
  ```
- **Text-in-image warning:** the title and the accent word "Cornell" are load-bearing verbatim text. AI generators render lettering unreliably; if the model garbles the wording, generate the scene without the title and overlay the exact string "Cornell Note-Taking Method: The Complete Guide + Template" (with "Cornell" in red #E11D48) in a hand-lettered + bold-sans lockup during post-processing. Keep the words exactly as the frontmatter `title:`.
- **Style reference (if any):** `blog-ops/reference/image-samples/` featured heroes (e.g. `feat_focus.png`, `feat_planning.png`); `blog-ops/profile/image-style.md` §"Observed conventions" (featured hero bullet).
- **Source data (if any):** none (illustrative hero, no numeric claim).
- **Why this and not remotion/screenshot:** the whole existing featured library is illustrated flat-vector heroes with a recurring character; `ai-prompt` keeps this cover in that family. Nothing real to screenshot.

### Watermark

- **`ai-prompt` slot:** the `olgapak.com` wordmark is baked into the prompt (~0.55 opacity). If the generator drops or garbles it, overlay the `olgapak.com` wordmark bottom area in post at ~55% opacity.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

### Image 1, after H2 "The Cornell page layout: cue column, notes, and summary" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A clean labeled diagram of the three-zone Cornell page: narrow left cue column, wide right notes column (roughly twice the width), and a summary bar across the bottom, with an optional header block at the top. Type: remotion. Suggested filename: cornell-layout-diagram.png]`
- **Type:** `remotion`
- **Concept:** A labeled three-zone Cornell page schematic: a thin top header block, a narrow left cue column, a right notes column about twice as wide, and a bottom summary bar (the summary bar accent-tinted as the "quiet hero" zone).
- **Suggested filename:** `cornell-layout-diagram.png`
- **Alt text:** `Cornell page split into a narrow cue column, wide notes column, and bottom summary bar`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `CornellLayoutDiagram`
- **Component file:** `tools/remotion/src/CornellLayoutDiagram.tsx`
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **Mandatory layout primitives:** In-post image, so **NO title, NO subtitle.** `<BlogWatermark />` present (import from `./BlogWatermark`), background `palette.background`, content inside `SAFE_MARGIN`.
- **Visual spec (detailed):**
  - Title text: none (in-post).
  - Subtitle text: none (in-post).
  - Layout: one large page-shaped card (`palette.surface`, `1px solid palette.border`) centered on the canvas, drawn as a schematic Cornell page. Inside it, top-to-bottom / left-to-right:
    1. **Header block** across the top, ~10% of page height, labeled `Header (date · class · topic)` in `palette.muted`.
    2. Below it, a two-column split: **left cue column** ~1/3 width labeled `Cue column` with a smaller mono caption `keywords + questions, added after class`; **right notes column** ~2/3 width labeled `Notes column` with mono caption `capture live during class`. A visible vertical rule (`palette.border`) separates them; annotate the proportion with a small bracket / caption `~2x the cue column` spanning the notes width.
    3. **Summary bar** across the bottom, ~15% of page height, using the **emphasis / outcome card variant** (light `palette.accent` tint, `2px solid palette.accent`), labeled `Summary` with mono caption `2-3 sentences, in your own words, written last`.
  - Copy (exact strings to render): `Header (date, class, topic)`, `Cue column`, `keywords + questions, added after class`, `Notes column`, `capture live during class`, `~2x the cue column`, `Summary`, `2-3 sentences, in your own words, written last`. (No em-dash anywhere; use commas/parens.)
  - Palette: per `blog-ops/profile/image-style.md`. Accent (`#0E9F8E`) reserved for exactly one zone, the summary bar (the "quiet hero"); cue + notes columns neutral. No `palette.warn`.
  - Typography: `fonts.sans` (Montserrat) for zone labels; `fonts.mono` for the small captions/proportion note that read as annotations.
  - Icons / SVG assets: none required (pure geometric schematic). Check `tools/remotion/public/` before adding any.
  - Arrows / connectors: none (static layout); the `~2x the cue column` proportion may use a thin `palette.muted` bracket line, not an arrow.
  - Card recipe: outer page = neutral card; summary bar = emphasis/outcome variant.
- **Source data (if any):** `facts.md` line 11 (notes column ~2x the cue column) and line 12 (5-7 lines / ~2 inches summary bar). The optional header block: `facts.md` line 29 (GoodNotes optional top header).
- **Reference composition to mimic:** `tools/remotion/src/SampleDiagram.tsx` (starter scaffold; first custom composition for this blog).
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellLayoutDiagram --output=out/preview-cornell-layout-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellLayoutDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/cornell-note-taking-method/cornell-layout-diagram.png"
  ```
- **Why this and not a real screenshot:** it's a branded conceptual schematic with exact zone labels and proportions, nothing real to capture; `remotion` renders the verbatim labels reliably.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component, positioned/sized per the remotion adapter. Never inline, never reposition.

---

### Image 2, after H2 "How to take Cornell notes: the 5 R's" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A left-to-right process diagram of the five steps, Record then Reduce then Recite then Reflect then Review, each with a one-line label and a simple icon. Type: remotion. Suggested filename: cornell-5rs-process.png]`
- **Type:** `remotion`
- **Concept:** A left-to-right five-step process row, Record → Reduce → Recite → Reflect → Review, each a card with a one-line description and a simple icon, connected by uniform sequential arrows.
- **Suggested filename:** `cornell-5rs-process.png`
- **Alt text:** `Five-step Cornell flow: Record, Reduce, Recite, Reflect, Review, left to right`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`.
- **Composition `<Still>` ID:** `Cornell5RsProcess`
- **Component file:** `tools/remotion/src/Cornell5RsProcess.tsx`
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **Mandatory layout primitives:** In-post, so **NO title, NO subtitle.** `<BlogWatermark />` present, background `palette.background`, content inside `SAFE_MARGIN`.
- **Visual spec (detailed):**
  - Title text: none. Subtitle text: none.
  - Layout: five neutral cards in a single horizontal row (wrap to a centered layout only if width is tight; prefer one row). Each card is FIXED width with FIXED identical gaps; between adjacent cards a FIXED identical-length arrow (`node → arrow → node`). Each card stacks: a small numbered badge (1-5), a simple line icon, the step name (`fonts.sans`, bold), and a one-line description.
  - Copy (exact strings): step names `Record`, `Reduce`, `Recite`, `Reflect`, `Review`; descriptions:
    - Record: `Capture main ideas in the wide right column, during class.`
    - Reduce: `Pull keywords and questions into the left cue column, within 24 hours.`
    - Recite: `Cover the notes, answer your cues out loud from memory.`
    - Reflect: `Add your own connections, reactions, and open questions.`
    - Review: `Reread the page and summary in short, regular passes.`
    (No em-dash; commas only.)
  - Palette: neutral cards throughout. This is a sequential 1→2→3→4→5 flow with no "chosen vs not-chosen" meaning, so **no accent card** (nothing is "the answer"); keep accent unused rather than forcing false emphasis. `fonts.mono` for the number badges. No `palette.warn`.
  - Typography: `fonts.sans` for step names + descriptions; `fonts.mono` for the 1-5 badges.
  - Icons / SVG assets: five simple line icons (pencil/Record, funnel or scissors/Reduce, speech-bubble/Recite, lightbulb/Reflect, circular-arrows/Review). Check `tools/remotion/public/` first; if absent, draw them as inline SVG in the component (no external files) to avoid a missing-asset stall.
  - Arrows / connectors: **sequential step connector** style, `palette.muted`, `strokeWidth={2.5}`, solid, uniform length between every pair, arrowhead in the same muted color.
  - Card recipe: neutral variant for all five.
- **Source data (if any):** `facts.md` line 27 (the 5 R's: Record, Reduce, Recite, Reflect, Review) and line 13 (Reduce within 24 hours). Step descriptions paraphrased from draft-v1 lines 60-64.
- **Reference composition to mimic:** `tools/remotion/src/SampleDiagram.tsx`; follow §Arrow conventions (horizontal flow rows) for the uniform arrow/gap rule.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still Cornell5RsProcess --output=out/preview-cornell-5rs-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still Cornell5RsProcess --scale=2 \
    --output="$REPO/blog-ops/assets/cornell-note-taking-method/cornell-5rs-process.png"
  ```
- **Why this and not a real screenshot:** a branded process diagram with verbatim step labels; nothing to capture, and `remotion` renders the exact copy on-brand.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component. Never inline, never reposition.

---

### Image 3, after H2 "A filled-in Cornell page: a worked example" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A realistic filled-in Cornell page for a cellular respiration biology lecture, with handwritten-style notes in the right column, cue questions in the left column, and a two-sentence summary at the bottom. Type: remotion. Suggested filename: cornell-worked-example-biology.png]`
- **Type:** `remotion`
- **Concept:** A realistic filled-in Cornell page for the draft's cellular-respiration lecture: three cue questions on the left, five bulleted lecture notes on the right, and the exact two-sentence summary in the bottom bar.
- **Suggested filename:** `cornell-worked-example-biology.png`
- **Alt text:** `Filled Cornell page on cellular respiration with cue questions, notes, and a summary`

#### Production spec

##### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`.
- **Composition `<Still>` ID:** `CornellWorkedExampleBiology`
- **Component file:** `tools/remotion/src/CornellWorkedExampleBiology.tsx`
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **Mandatory layout primitives:** In-post, so **NO title, NO subtitle.** `<BlogWatermark />` present, background `palette.background`, content inside `SAFE_MARGIN`.
- **Visual spec (detailed):**
  - Title text: none. Subtitle text: none.
  - Layout: same page-shaped card as Image 1, but populated. Top-to-bottom / left-to-right:
    1. **Header block:** `Biology 101: Cellular Respiration` on the left, `Date: 2026-07-04` on the right (illustrative), `palette.muted`, `fonts.mono` for the date.
    2. **Left cue column** (~1/3 width), the three cue questions stacked, each on its own line (`fonts.sans`):
       - `Where does glycolysis happen?`
       - `Which stage produces the most ATP?`
       - `What happens without oxygen?`
    3. **Right notes column** (~2/3 width), five bullets (`fonts.sans`), styled as neat notes:
       - `Cellular respiration = how cells break down glucose to make ATP (energy)`
       - `Three stages: glycolysis, then the Krebs cycle, then the electron transport chain`
       - `Glycolysis happens in the cytoplasm, makes only 2 ATP`
       - `Electron transport chain makes the most ATP and needs oxygen`
       - `No oxygen? Cells switch to fermentation instead`
    4. **Summary bar** (bottom, emphasis/outcome card variant, light `palette.accent` tint + `2px solid palette.accent`), verbatim: `Cellular respiration breaks glucose down in three stages to produce ATP, the cell's energy currency. Most of that ATP comes from the oxygen-dependent electron transport chain, and without oxygen the cell falls back on fermentation.`
  - Copy: all strings above are VERBATIM from draft-v1 (right column lines 76-80, cue column lines 84-86, summary line 90). Do not paraphrase, reorder, or shorten. Wrap long lines as multi-line text inside the column, never overflow. No em-dash (the summary already uses commas).
  - Palette: cue + notes columns neutral (`palette.surface`); accent reserved for the one summary bar. `fonts.mono` only for the header date. No `palette.warn`.
  - Typography: `fonts.sans` for questions, notes, and summary; a slightly relaxed/handwritten feel is optional but keep legibility (Montserrat is fine; do not switch to an unlisted font). `fonts.mono` for the header date.
  - Icons / SVG assets: none required. Check `tools/remotion/public/` first.
  - Arrows / connectors: none.
  - Card recipe: outer page = neutral card; summary bar = emphasis/outcome variant; a light vertical rule (`palette.border`) between cue and notes columns.
- **Source data (if any):** all in-image copy is verbatim from `draft-v1.md` (right-column notes lines 76-80, cue questions lines 84-86, summary line 90). No `facts.md` numeric row beyond the layout proportions; header date is a hardcoded illustrative value.
- **Reference composition to mimic:** `tools/remotion/src/SampleDiagram.tsx`; share the page-card layout with `CornellLayoutDiagram` for visual consistency.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellWorkedExampleBiology --output=out/preview-cornell-worked-example-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellWorkedExampleBiology --scale=2 \
    --output="$REPO/blog-ops/assets/cornell-note-taking-method/cornell-worked-example-biology.png"
  ```
- **Why this and not a real screenshot:** the whole point is verbatim cue/notes/summary text matching the draft's example; `ai-prompt` would garble the exact wording, and there's no real page to photograph. `remotion` renders the exact strings on-brand.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component. Never inline, never reposition.

---

### Image 4, after H2 "When Cornell works best, and when to use another method" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A flat-vector illustration of choosing the right tool for the job, a desk with a few different note layouts and a hand reaching for the one that fits. Type: ai-prompt. Suggested filename: right-method-for-the-job.png]`
- **Type:** `ai-prompt`
- **Concept:** A flat-vector "right method for the job" scene: three different note-layout pages fanned on a desk, with a hand reaching for the Cornell-divided one.
- **Suggested filename:** `right-method-for-the-job.png`
- **Alt text:** `A hand choosing the Cornell layout from several note-page styles on a desk`

#### Production spec

##### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image / Ideogram / Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, single soft pastel background (a pale
  tint of brand blue #2B6CB0), generous flat empty space, no gradients, no
  photographic texture. Subject: a top-down / slightly angled view of a tidy desk
  with three different note-page layouts fanned side by side, drawn as simple ruled
  shapes with no readable words: (1) a plain lined page, (2) a mind-map / bubble
  layout, and (3) a Cornell-divided page (narrow left column, wide right column,
  bottom bar). A person's hand reaches in and picks up the Cornell page, which is
  gently highlighted with a teal (#0E9F8E) accent outline to read as "the chosen
  one". Bold, rounded, confident vector line-art, clean flat fills, Montserrat-family
  geometry, brand palette only (blues, teal accent, warm neutrals). Small
  "olgapak.com" wordmark watermark, low opacity (~0.55). Clean, approachable,
  confident mood. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, gradients, drop shadows, cluttered background, readable
  paragraphs of text on the pages, numbered callouts, arrows, extra limbs, extra
  fingers, deformed hands, stray logos, fake UI chrome, garbled text, colors outside
  the brand palette (no orange, no purple, no red except the watermark is not red)
  ```
- **Text-in-image warning:** this is a conceptual illustration with no verbatim text requirement; the note pages should carry only abstract ruled shapes, NOT legible words. If the model insists on rendering text on the pages, prefer an output where it's illegible/blurred rather than misspelled real words.
- **Style reference (if any):** `blog-ops/reference/image-samples/` section illustrations (e.g. `sec_prioritization.png`, `sec_tb-vs-tblock.png`); `blog-ops/profile/image-style.md` §"Observed conventions" (one illustration per H2, flat-vector, concept-literal, softer pastel background).
- **Source data (if any):** none (conceptual illustration).
- **Why this and not remotion/screenshot:** it's an illustrative "choose the right tool" metaphor, not a data-accurate diagram or a real screen; `ai-prompt` keeps it in the section-illustration family. The outline explicitly assigned `ai-prompt` here.

### Watermark

- **`ai-prompt` slot:** `olgapak.com` wordmark baked into the prompt (~0.55 opacity); overlay in post if the generator drops it.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/cornell-note-taking-method/
├── featured.png                          (ai-prompt)
├── cornell-layout-diagram.png            (remotion)
├── cornell-5rs-process.png               (remotion)
├── cornell-worked-example-biology.png    (remotion)
└── right-method-for-the-job.png          (ai-prompt)
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<Id>.tsx`, iterate to `out/`, final export at `--scale=2` into `blog-ops/assets/cornell-note-taking-method/`. Use `<BlogWatermark />`, the theme tokens from `src/theme.ts`, and the fonts/palette locked in `blog-ops/profile/image-style.md`.
2. **AI-generated (`ai-prompt` manual):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`. Paste the `Prompt:` block into the named tool, save to the suggested filename verbatim.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slots use the shared `<BlogWatermark />` component (no manual pass). `ai-prompt` slots bake `olgapak.com` into the prompt; overlay at ~55% opacity if dropped. Output format PNG for all five.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive. All five filenames comply.

## What the human does

1. Create each image per its production spec (3 remotion renders dispatch automatically via `generate-images`; the 2 `ai-prompt` slots are manual paste-ins).
2. Save to `blog-ops/assets/cornell-note-taking-method/` using the suggested filenames.
3. Verify file sizes (<200 KB featured, <500 KB in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Slot count matches:** 4 draft `[IMAGE:]` placeholders (draft-v1 lines 40, 56, 72, 96) == 4 in-post slots in the outline's image placement plan. No delta.
- **Types honor the outline + `images.enabled`:** all five types (`ai-prompt`, `remotion`, `remotion`, `remotion`, `ai-prompt`) are members of `images.enabled = [ai-prompt, screenshot, remotion]`. Featured type came from `images.featured_default: ai-prompt`.
- **Priority-ladder note:** the two `ai-prompt` slots (featured hero, "right method for the job") are illustrative/non-literal scenes where `remotion`'s geometric look would be wrong, correct per this blog's convention that reserves `remotion` for genuinely diagrammatic slots. The three `remotion` slots each carry verbatim on-brand text (zone labels, step names, the exact worked-example copy), which `ai-prompt` cannot render reliably, correct assignment.
- **Worked-example fidelity (action for image-builder):** Image 3's cue questions, five note bullets, and two-sentence summary must be rendered VERBATIM from draft-v1 (lines 76-80, 84-86, 90). Do not paraphrase. The header block (`Biology 101: Cellular Respiration`, date) is illustrative and may be adjusted, but the three zones' content must match the draft exactly, or the image will contradict the prose.
- **No chart needs fresh data:** all remotion content is grounded in `facts.md` (layout proportions, the 5 R's, 24h Reduce) or verbatim draft copy. Nothing flagged "needs fresh data".
- **No table-duplication conflict:** none of the three remotion slots duplicates a markdown table (the draft has no tables in these sections).
- **Featured hygiene:** no inline `[IMAGE:]` placeholder duplicates the featured concept; the featured slot is frontmatter-only. Clean.
- **Judgment call to review:** the 5 R's diagram (Image 2) intentionally uses NO accent card, because a neutral 1→5 sequence has no single "answer" step; if the editor wants one step emphasized (e.g. "Reduce" as the pivot), flag it and the builder can accent that one card.
