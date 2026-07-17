# Images: note-taking-methods

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/note-taking-methods/outline.md` (image placement plan), `blog-ops/drafts/note-taking-methods/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/note-taking-methods/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/note-taking-methods/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `2` (Cornell layout diagram, decision-flow graphic)
  - AI-generated (`ai-prompt` / `ai-api`): `3` (featured, mind-map example, charting-table example)
  - Screenshots: `0`
- File destination: `blog-ops/assets/note-taking-methods/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in config.yaml; a member of `images.enabled`).
- **Dimensions:** `ai-prompt` at **3:2** per `blog-ops/profile/image-style.md`'s aspect-ratio default (matches the existing hero library).
- **Concept:** The recurring friendly female character (Olga stand-in) sitting with one open notebook in her lap, a small fan of three or four closed notebooks/paper props behind her (each hinting at a different layout: a faint grid, a branching web, a bullet list), on a bright saturated TEAL single-color background, with the post title overlaid big across the upper third (accent word "One" in red), conveying "many note-taking methods, pick the one that fits." Background = teal (#0E9F8E) per human choice (breaks the all-blue featured streak). Title baked into the generation per human choice.
- **Suggested filename:** `featured.png`
- **Alt text:** `Illustrated woman choosing one open notebook from several note-taking styles`

> **Cover concept note (skill hard rule on featured images):** the outline proposed a **four-quadrant grid, one mini-layout per method**. That is a dense "annotate all four methods" infographic, which the featured-image hard rule forbids on a cover (it reads as clutter at the OG/thumbnail crop and buries the thesis). I brainstormed simpler single-glance concepts and picked the cleanest:
> - **(A) Four-quadrant grid of the four methods** — *rejected:* busy multi-focal infographic; poor as a small thumbnail; that density belongs to the in-post diagrams, not the cover.
> - **(B) One giant open notebook whose single page splits into four faint method previews** — *rejected:* still four competing focal zones; hard to read small.
> - **(C, chosen) Character choosing one notebook from a small fan of styles** — one bright background, ≤3 focal objects (character + her open notebook + the fanned props), says "compare, then pick the one that fits" in a single glance, and matches the blog's established single-character flat-vector hero look.

### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in a clean, approachable, optimistic
  style. A cheerful young woman (recurring brand character) sits cross-legged holding
  one open notebook in her lap, looking down at it with a small confident smile. Behind
  her, a gentle fan of three or four closed notebooks and loose paper sheets, each
  hinting at a different note layout through simple abstract marks only: one faint grid
  of squares, one branching web of dots and lines radiating from a center, one short
  stack of indented bullet dashes, one two-column split. Single bright saturated flat
  TEAL background (#0E9F8E as a solid fill), generous empty space around the character so
  she reads clearly as a small thumbnail. Flat vector shapes, soft rounded forms, minimal
  shading, no gradients, no photorealism. Montserrat-like clean geometry to the shapes.
  Across the upper third, a big bold post title reading exactly "Note-Taking Methods
  Compared: Find the One That Fits", set in a playful hand-lettered script mixed with a
  rounded bold sans-serif, the single word "One" colored warm red (#E11D48) as the
  accent and the rest of the title in white / near-white, correctly spelled and cleanly
  kerned with high contrast on the teal. Character and notebook fan sit in the lower two-
  thirds below the title. Prop accents in white, near-white, brand blue #2B6CB0, with one
  warm red detail used sparingly. In the lower-left corner, a small clean lowercase sans-
  serif wordmark reading exactly "olgapak.com" in a muted light tone at low opacity,
  correctly spelled, no box or logo around it. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no words or lettering on the notebooks or props, no numbers on the props, no signature,
  no extra fingers or limbs, no distorted hands, no photorealistic faces, no busy four-
  quadrant grid, no dense infographic, no UI chrome, no browser window, no stray logos,
  no misspelled title, no misspelled wordmark, no blue background, no colors outside the
  stated palette (avoid neon/clashing hues)
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "1 featured hero" recipe (friendly flat-vector illustration, single bright single-color background, recurring female character + topic props). Sample library at `blog-ops/reference/image-samples/`.
- **Source data (if any):** none (illustrative concept, not a data figure).
- **Text-in-image note:** per the human's choice, the title "Note-Taking Methods Compared: Find the One That Fits" is now baked INTO the generation prompt (upper third, "One" in red accent, per the blog hero convention). Caveat: image models frequently garble a title this long — verify it is spelled correctly and cleanly kerned; if the model mangles it, regenerate or replace the title with a hand-lettered overlay in post (the blog's established heroes are made that way).
- **Why this and not remotion/screenshot:** the featured hero follows the blog's locked flat-vector illustrated-character look (per image-style.md), which `ai-prompt` produces and `remotion`/`screenshot` cannot; nothing real to capture.

### Watermark

- **`ai-prompt` slot:** the `olgapak.com` wordmark is now requested IN the generation prompt (lower-left, muted gray, low opacity) per the human's instruction. AI text rendering is unreliable, so verify it reads exactly `olgapak.com` and is correctly spelled; if the model garbles or omits it, add/replace the `olgapak.com` wordmark post-generation at ~0.55 opacity per `blog-ops/profile/image-style.md`.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already a markdown table in the same section unless the chart adds something the table can't. (The at-a-glance markdown table under H2 1 correctly has NO image slot; no duplication anywhere in this plan.)

### Image 1, after H2 "The Cornell Method" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Labeled Cornell page-layout diagram showing the cue column on the left, the notes area on the right, and the summary strip along the bottom, with a short label on each zone. Type: remotion. Suggested filename: cornell-layout-diagram.png]`
- **Type:** `remotion`
- **Concept:** A clean labeled page-layout diagram of the Cornell method: a header strip, a narrow cue column on the left, a roughly 2x-wider notes column on the right, and an accent-tinted summary bar along the bottom, each zone labeled.
- **Suggested filename:** `cornell-layout-diagram.png`
- **Alt text:** `Cornell note page layout: cue column, wider notes area, and a summary strip`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `CornellLayoutDiagram` — **already built and registered** at `tools/remotion/src/CornellLayoutDiagram.tsx` and in `tools/remotion/src/Root.tsx`. Reuse verbatim; no new component needed.
- **Component file:** `tools/remotion/src/CornellLayoutDiagram.tsx` (exists)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** (The existing composition already carries none — do not add any.)
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: single outer surface card inset at `SAFE_MARGIN`, containing top-to-bottom: (1) a muted "Header (date, class, topic)" strip; (2) a proportion bracket over the notes column reading "~2x the cue column"; (3) a two-column split, left "Cue column" (flex 1) with caption "keywords + questions, added after class", a vertical rule, right "Notes column" (flex 2) with caption "capture live during class"; (4) an accent-tinted "Summary" bar with caption "2-3 sentences, in your own words, written last".
  - Copy (exact strings, as already in the component): `Header (date, class, topic)`, `~2x the cue column`, `Cue column`, `keywords + questions, added after class`, `Notes column`, `capture live during class`, `Summary`, `2-3 sentences, in your own words, written last`.
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`); summary bar uses the accent emphasis variant (the one accent element in the diagram).
  - Typography: `fonts.sans` for zone labels, `fonts.mono` for captions.
  - Icons / SVG assets: none.
  - Arrows / connectors: none (static layout).
  - Card recipe: outer surface card + inner header/summary blocks per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Card design language; summary = emphasis/outcome variant.
- **Source data (if any):** hardcoded illustrative labels; three-zone description backed by `facts.md` line 40 (Cornell reference grid) and the draft's Cornell section.
- **Reference composition to mimic:** itself, `CornellLayoutDiagram.tsx` (already the finished target).
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellLayoutDiagram --output=out/preview-cornell-layout-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CornellLayoutDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/note-taking-methods/cornell-layout-diagram.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot; a branded, cleanly labeled layout diagram that must stay on-brand and editable.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component (already in the composition). Never inline or reposition.

---

### Image 2, after H2 "The Mapping (Mind Mapping) Method" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Simple mind map with a central topic bubble and four labeled branches fanning out to sub-ideas. Type: remotion. Suggested filename: mind-map-example.png]`
- **Type:** `remotion` (switched from ai-prompt per human request — crisp labeled nodes, consistent with the post's other remotion diagrams)
- **Composition MethodMindMap ID:** `MethodMindMap`
- **Canvas:** 1800x1200 (theme CANVAS), in-post layout (NO title/subtitle)
- **Concept:** A clean flat-vector mind map: one central rounded node labeled "Topic" in the middle, four thick curved branches fanning out to labeled sub-idea nodes (e.g. "Key idea", "Example", "Cause", "Effect"), each branch a different theme color (primary blue, accent teal, muted, warn used once), with one or two thin twigs off each branch to small dots. Real short labels (remotion renders text cleanly). Watermark present.
- **Render command:** `npx remotion still MethodMindMap --output=blog-ops/assets/note-taking-methods/mind-map-example.png --scale=2` (run from tools/remotion via the adapter's REPO-derived invocation)
- **Suggested filename:** `mind-map-example.png`
- **Alt text:** `Mind map with a central topic and four labeled branches fanning to sub-ideas`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  A simple, friendly hand-drawn-style mind map diagram, flat and clean. One rounded
  central topic bubble in the middle of the frame, with three or four thick curved
  branches fanning outward to smaller rounded sub-idea bubbles, and a couple of thin
  twigs off each branch. Doodle/marker aesthetic but tidy and legible, generous
  whitespace, on a soft off-white paper background (#F7F7F7). Each branch a different
  calm brand color: brand blue #2B6CB0, teal #0E9F8E, warm coral, soft slate. Bubbles
  are empty or hold only tiny placeholder squiggles, not real words. Approachable,
  optimistic, uncluttered. Flat vector doodle style, no photorealism, no 3D.
  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no rendered text, no legible words, no numbers, no watermark, no signature,
  no photorealism, no 3D render, no dense tangled lines, no dark/moody palette,
  no UI chrome, no stray logos, no colors outside the calm brand palette
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "one illustration per H2" concept-literal section-illustration look.
- **Source data (if any):** none (illustrative example of the mapping shape, not real data).
- **Text-in-image note:** the map communicates purely through shape and color; keep the bubbles wordless. If the human wants labels ("Main topic", branch names), add them as a post-processing text overlay rather than trusting the model's raw text.
- **Why this and not remotion/screenshot:** an intentionally loose, illustrative "what a mind map feels like" sketch suits the blog's flat-vector section-illustration look; there is no precise data or verbatim text to render, and nothing real to capture.

### Watermark

- **`ai-prompt` slot:** add the `olgapak.com` watermark post-generation at 0.55 opacity per `blog-ops/profile/image-style.md` if the output lacks one.

---

### Image 3, after H2 "The Charting Method" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Small filled charting-table example with four labeled columns and a few completed rows, showing categories compared side by side. Type: remotion. Suggested filename: charting-example.png]`
- **Type:** `remotion` (switched from ai-prompt per human request — a legible grid is the ai-prompt weak spot; remotion renders real, crisp cell text)
- **Composition ChartingExample ID:** `ChartingExample`
- **Canvas:** 1800x1200 (theme CANVAS), in-post layout (NO title/subtitle)
- **Concept:** A clean flat comparison table (the charting method): a shaded header row (primary blue fill, white header text) with a leftmost label column + three category columns, then three or four body rows with real short cell text. Illustrative content (no facts.md figure is load-bearing) — e.g. three economic theories across Focus / Key thinker / View on markets, OR five battles across Date / Cause / Outcome. Thin border gridlines, rounded outer corners, subtle shadow (card design language). Watermark present.
- **Render command:** `npx remotion still ChartingExample --output=blog-ops/assets/note-taking-methods/charting-example.png --scale=2`
- **Suggested filename:** `charting-example.png`
- **Alt text:** `Filled charting-method table comparing four items across labeled columns`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  A clean, tidy flat-illustration comparison table on a soft off-white background
  (#F7F7F7), viewed head-on. Four columns with a shaded header row (brand blue
  #2B6CB0 header fill, white header lettering) and three or four filled body rows,
  thin light-gray gridlines (#E5E7EB), rounded outer corners, subtle soft shadow.
  A leftmost label column plus three category columns, each body cell holding a short
  block of neat text. Flat vector, minimal, approachable, generous margins, no browser
  chrome, no hand, no desk. Palette limited to off-white, brand blue #2B6CB0, teal
  #0E9F8E accents, and dark gray #222222 text. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no garbled text, no fake gibberish words, no watermark, no signature, no photorealism,
  no 3D, no browser window or app chrome, no hands, no clutter, no dark background,
  no colors outside the brand palette, no wavy/misaligned gridlines
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" (concept-literal section illustration); the desired grid geometry echoes the at-a-glance markdown table under H2 1.
- **Source data (if any):** none required; the draft names illustrative examples (three economic theories across four attributes; five battles across date/cause/outcome/significance) — any of these is fine as filler, no facts.md figure is load-bearing here.
- **Text-in-image note (IMPORTANT):** this slot's whole point is a legible grid of column headers and cell values, and AI image models render tabular text unreliably. Expect the raw output to have garbled cells. Strongly recommend the human treat the generated grid as a *background frame* and overlay the real column headers + cell text as a post-processing step (or use the Remotion override below). Do NOT ship a version with unreadable/gibberish cells.
- **Why this and not remotion/screenshot:** honoring the outline/task steer to the blog's flat-vector section-illustration look; nothing real to screenshot. **See Editor notes for a `remotion` override** if crisp, reliable cell text is preferred over the illustrated look.

### Watermark

- **`ai-prompt` slot:** add the `olgapak.com` watermark post-generation at 0.55 opacity per `blog-ops/profile/image-style.md` if the output lacks one.

---

### Image 4, after H2 "Which Method Fits Which Situation" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Situation-to-method decision flow graphic mapping each scenario (fast lecture, structured reading, brainstorming, comparing facts, meeting) to a recommended method. Type: remotion. Suggested filename: method-decision-flow.png]`
- **Type:** `remotion`
- **Concept:** A situation-to-method decision-flow: a left column of five scenario cards each connected by a horizontal arrow to a right column of recommended-method cards, with a single accent-tinted "capture then refine" strip along the bottom.
- **Suggested filename:** `method-decision-flow.png`
- **Alt text:** `Decision flow mapping five study situations to a recommended note-taking method`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `MethodDecisionFlow` — **new**; create `tools/remotion/src/MethodDecisionFlow.tsx` and register a `<Still id="MethodDecisionFlow" component={MethodDecisionFlow} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/MethodDecisionFlow.tsx` (to create)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** Diagram starts at the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: two vertical columns of five aligned rows. Left column = "situation" cards; right column = "recommended method" cards. Each left card connects to the same-row right card by ONE horizontal arrow of fixed identical length and identical gap on both sides (never a flex-grown connector). Below the two columns, one full-width accent-tinted strip spans the canvas.
  - Copy (exact strings):
    - Left (situation) cards, top to bottom: `Fast, dense lecture` / `Structured lecture or textbook` / `Brainstorming, connected ideas` / `Comparing facts across categories` / `Meeting with action items`
    - Right (method) cards, top to bottom: `Cornell cues, refine later` / `Outline` / `Mapping` / `Charting` / `Cornell cue column or light chart`
    - Bottom accent strip: `Whatever you pick: capture the signal live, then condense it soon after.`
  - Palette: theme tokens from `tools/remotion/src/theme.ts`. Situation and method cards use the neutral card recipe (`palette.surface`, `1px solid palette.border`). The bottom strip is the ONE accent element (light `palette.accent` tint background, `2px solid palette.accent` border) — the post's core "capture then refine" lever. Do not accent-color the method cards (would dilute the single-emphasis rule).
  - Typography: `fonts.sans` for card labels and the bottom strip; method-card labels bold.
  - Icons / SVG assets: none (check `tools/remotion/public/` first if you add any).
  - Arrows / connectors: five horizontal connectors, one per row. These are **mapping connectors, not "chosen vs. not chosen" paths**, so per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Arrow conventions use the neutral sequential style: `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, arrowhead marker in `palette.muted`. Fixed identical length + gap for every row.
  - Card recipe: per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Card design language.
- **Source data (if any):** the five situation→method mappings are from the draft's H2 6 bullets and `facts.md` "Method reference grid" (lines 40-43); illustrative, common-knowledge, no fresh data needed.
- **Reference composition to mimic:** `tools/remotion/src/Cornell5RsProcess.tsx` (closest existing flow/process composition for arrow + card conventions); reuse `CornellLayoutDiagram.tsx`'s card + accent-bar recipe for the bottom strip.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MethodDecisionFlow --output=out/preview-method-decision-flow-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MethodDecisionFlow --scale=2 \
    --output="$REPO/blog-ops/assets/note-taking-methods/method-decision-flow.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot; the diagram encodes a decision mapping (situation → method) with directional flow that prose and a table can't show as cleanly, and it must stay on-brand.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component (import from `./BlogWatermark`). Never inline or reposition.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/note-taking-methods/
├── featured.png                 (ai-prompt)
├── cornell-layout-diagram.png   (remotion, Still: CornellLayoutDiagram)
├── mind-map-example.png         (ai-prompt)
├── charting-example.png         (ai-prompt)
└── method-decision-flow.png     (remotion, Still: MethodDecisionFlow — new)
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. `CornellLayoutDiagram` already exists and is registered; `MethodDecisionFlow` must be authored and registered in `src/Root.tsx`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`.
2. **AI-generated (`ai-prompt` manual):** adapters `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`. Human pastes the `Prompt:` block into the named tool and saves to the asset folder verbatim.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slots use `<BlogWatermark />` (no manual pass). `ai-prompt` outputs get the `olgapak.com` wordmark at 0.55 opacity post-generation if absent. Output format: PNG.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `cornell-layout-diagram.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/note-taking-methods/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Slot/placeholder count matches:** 4 draft `[IMAGE:]` placeholders = 4 in-post slots in the outline's image placement plan. No mismatch. Featured lives in frontmatter only (not an in-post slot). No `[IMAGE:]` placeholder duplicates the featured concept and none is named `featured.*` — no featured-duplication violation.
- **No table-duplicate charts:** the outline correctly skipped an image under H2 1 (the at-a-glance comparison is already a markdown table). No chart slot duplicates a table.
- **Featured concept was reshaped (judgment call, human can override):** the outline's four-quadrant "one mini-layout per method" cover trips the featured-image hard rule (dense multi-focal infographic, weak at thumbnail/OG crop). I kept the `ai-prompt` type (= `images.featured_default`) but swapped the concept to the blog's single-character hero look (concept C above). If you specifically want the four-method grid, override the concept but be aware it will read cluttered small.
- **Charting slot (Image 3) is `ai-prompt` per the outline/task steer, but its content is a legible grid of text — the exact case the ai-prompt bar warns about.** AI text-in-grid rendering is unreliable; the spec instructs a post-processing text overlay. **Override option:** if you want crisp, reliable cells, retype it as `remotion` (a `charting` table composition mimicking `CornellLayoutDiagram`'s card/grid recipe) — `remotion` is enabled and renders real text. The outline/task offered only `ai-prompt`/`screenshot` for this slot, and `screenshot` has nothing real to capture, so I stayed with `ai-prompt` + overlay while flagging the cleaner remotion path for your call.
- **Priority-ladder check:** Cornell layout (Image 1) and decision-flow (Image 4) correctly went `remotion` (branded labeled diagram + directional-flow mapping). Mind-map (Image 2) is a genuinely illustrative loose sketch → `ai-prompt` is right. Featured → `ai-prompt` per `images.featured_default`. No `screenshot` slots (nothing real to capture in this post).
- **No chart needs fresh data:** every diagram/example is common-knowledge or illustrative; nothing requires data not already in `facts.md`.
- **Reuse win:** Image 1's composition (`CornellLayoutDiagram`) already exists in `tools/remotion/src/` and is registered — the builder only needs to render it to this post's asset folder, no new authoring. Only `MethodDecisionFlow` is net-new.
