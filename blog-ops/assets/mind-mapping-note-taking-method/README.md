# Images: mind-mapping-note-taking-method

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/mind-mapping-note-taking-method/outline.md` (image placement plan), `blog-ops/drafts/mind-mapping-note-taking-method/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/mind-mapping-note-taking-method/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human / `image-builder` (creates the actual assets and saves them under `blog-ops/assets/mind-mapping-note-taking-method/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `4` (1 featured + 3 in-post)
- Breakdown by type:
  - Remotion compositions: `4` (featured hero card + map-vs-web contrast + heart worked-example + good-vs-bad node)
  - AI-generated (`ai-prompt` / `ai-api`): `0`
  - Screenshots: `0`
- File destination: `blog-ops/assets/mind-mapping-note-taking-method/`

> **Run-specific override (operator instruction):** this post must publish autonomously with all images rendered. `images.enabled = [ai-prompt, screenshot, remotion]` and `ai-api` is OFF, so `remotion` is the ONLY file-producing type in `generate-images` autonomous dispatch (`ai-prompt` needs a human paste, `screenshot` needs a human capture). All four slots — featured included — are therefore `remotion`, overriding `images.featured_default: ai-prompt`. All four are structured diagrams / a branded hero card that Remotion renders cleanly; none is a photo or a loose flat-vector scene. See § Editor notes for the full rationale.

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `remotion` (operator override; `images.featured_default = ai-prompt` is overridden so the featured asset is auto-renderable in autonomous mode. `remotion` is a member of `images.enabled`).
- **Dimensions:** `remotion` at **1800 × 1200 (3:2)** native canvas (see `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` for the exact layout constants), rendered at `--scale=2` (→ 3600 × 2400 PNG). The blog post page renders the cover at native aspect (no crop); OG/Twitter previews crop to 1.91:1, so keep the title and motif inside the vertical safe zone.
- **Concept:** A clean branded hero title card: the post title across the title band, and below it one small, calm mind-map motif — a central "Mind map" node with three short color-coded branches fanning out to tiny keyword nodes — conveying the whole post's single idea (notes that branch out from one center) in one glance.
- **Suggested filename:** `featured.png`
- **Alt text:** `Mind mapping note-taking guide title card with a small central-topic mind map motif`

> **Cover concept note (featured-image hard rule):** the concept is one bold idea (a mind map = ideas branching from one center) with a single small motif under the title band, ≤3 focal objects, generous empty space, thumbnail- and OG-crop-legible. No numbered callouts, badges, or "annotate every section" density. The motif is deliberately minimal (3 branches, not the full worked example) so the cover stays a book cover, not an infographic; the dense worked example lives in-post (Image 2).

### Production spec

#### If `remotion`

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions. Featured images **must** use the adapter's title-anchored layout + `<BlogWatermark />` corner watermark.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `MindMapFeatured` — **new**; create `tools/remotion/src/MindMapFeatured.tsx` and register `<Still id="MindMapFeatured" component={MindMapFeatured} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/MindMapFeatured.tsx` (to create)
- **Canvas dimensions:** Featured, **1800 × 1200**; render at `--scale=2`.
- **Mandatory layout primitives (FEATURED image):**
  - Title = the post frontmatter `title:` **verbatim**: `Mind Mapping Note-Taking: How to Use It (With Steps)`, positioned at `TITLE_TOP` (110px), centered, full canvas width, wrapping faithfully if needed. (See § Editor notes: the operator's quoted short form "Mind Mapping Note-Taking: How to Use It" is a shortening; the remotion verbatim-title primitive wins, so the exact frontmatter title is used.)
  - Optional one-line subtitle below the title band: `A visual note-taking method that branches out from one central idea.` (styled in `fonts.sans`, `palette.muted`). May be set to "none" if the human prefers a barer cover.
  - `<BlogWatermark />` (import from `./BlogWatermark`), never inlined, never repositioned.
  - Background `palette.background`, content kept inside `SAFE_MARGIN`.
- **Visual spec (detailed):**
  - Title text: `Mind Mapping Note-Taking: How to Use It (With Steps)` (verbatim frontmatter title)
  - Subtitle text: `A visual note-taking method that branches out from one central idea.` (optional)
  - Layout: top-to-bottom — (1) title band at `TITLE_TOP`, centered; (2) optional muted subtitle line directly beneath; (3) in the lower ~60% of the canvas, one centered mind-map motif: a dark central rounded pill labeled `Mind map`, with three thick short curved branches fanning to three small rounded keyword nodes, each branch + its node a single distinct theme color used once (`palette.primary`, `palette.accent`, `palette.muted`); (4) `<BlogWatermark />` bottom-left.
  - Copy (exact strings in the motif): central node `Mind map`; the three keyword nodes `Idea`, `Branch`, `Keyword`.
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`). Central hub = `palette.text` fill with `palette.surface` text (as in `MethodMindMap`'s hub). Three branches color-coded one each: `palette.primary`, `palette.accent`, `palette.muted`. Use `palette.warn` nowhere here (no failure state on the cover).
  - Typography: `fonts.sans` for the title, subtitle, hub label, and node labels. Title is the largest text on the canvas.
  - Icons / SVG assets: none (curved branch paths drawn as inline `<svg>` `<path>`, per `MethodMindMap`); check `tools/remotion/public/` before adding any.
  - Arrows / connectors: none directional; branches are curved `<path>` strokes (thick, rounded caps) exactly as in `MethodMindMap.tsx`, no arrowheads.
  - Card recipe: rounded-pill nodes per `MethodMindMap.tsx` (surface fill, colored border, `borderRadius: 999`, card shadow); hub = dark solid pill.
- **Source data (if any):** none — hardcoded illustrative motif (acceptable in a featured/diagram context); the labels are generic mind-map vocabulary, no `facts.md` figure is load-bearing.
- **Reference composition to mimic:** `tools/remotion/src/MethodMindMap.tsx` (the existing rendered mind-map diagram — reuse its hub + curved-branch + colored-node recipe, trimmed to three branches) plus the adapter's featured title-band + `<BlogWatermark />` primitives layered on top (no existing featured composition exists yet, so this is the first branded hero card).
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapFeatured --output=out/preview-mindmap-featured-v1.png
  ```
- **Final export command** (worktree-safe; writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapFeatured --scale=2 \
    --output="$REPO/blog-ops/assets/mind-mapping-note-taking-method/featured.png"
  ```
- **Why this and not remotion/screenshot:** the featured image illustrates the post's thesis (notes that branch out from one center), not a single screen; per the operator override it must be auto-renderable, and `remotion` bakes the verbatim title + brand palette + watermark with no human paste step.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component (import from `./BlogWatermark`). Never inline, never reposition.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already a markdown table in the same section. (The only markdown table is the when-to-use/skip table under H2 3, which has NO image slot — no duplication anywhere in this plan.)

### Image 1, after H2 "What Is the Mind Mapping Note-Taking Method?" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A side-by-side contrast, on the left a clean central-topic hierarchy (one center, a few branches, sub-branches), on the right a tangled everything-links-to-everything web, labeled "mind map" vs "web/graph" to fix the beginner mental model. Type: remotion. Suggested filename: mindmap-vs-web-contrast.png]`
- **Type:** `remotion`
- **Concept:** A two-panel side-by-side: left panel a clean central-topic hierarchy (one center, a few branches, sub-branches) labeled "Mind map", right panel a tangled everything-links-to-everything mesh labeled "Web / graph", so beginners fix the correct mental model.
- **Suggested filename:** `mindmap-vs-web-contrast.png`
- **Alt text:** `Clean central-topic mind map beside a tangled everything-links web, labeled mind map vs graph`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `MindMapVsWebContrast` — **new**; create `tools/remotion/src/MindMapVsWebContrast.tsx` and register `<Still id="MindMapVsWebContrast" component={MindMapVsWebContrast} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/MindMapVsWebContrast.tsx` (to create)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout: two equal-width panel cards side by side inside `SAFE_MARGIN`, an even gutter between them. Each panel is a surface card holding an inline `<svg>` diagram plus a bold panel label at the panel top.
    - **Left panel — "Mind map" (emphasis/outcome variant, the correct model):** one central rounded hub node in the panel center, three or four thick branches fanning outward to labeled sub-nodes, and one or two thinner twigs off each branch to small dots — a strict parent→child hierarchy, no cross-panel-wide meshing. Nodes/branches color-coded with theme colors used once each (`palette.primary`, `palette.accent`, `palette.muted`). Card uses the emphasis variant (light `palette.accent` tint background, `2px solid palette.accent` border) — this is the ONE accent element of the composition (the model the post endorses).
    - **Right panel — "Web / graph" (neutral variant):** six to eight small identical dot/nodes scattered evenly, with many thin straight `palette.muted` lines connecting nearly every node to every other node (an everything-links-to-everything tangle) — no center, no hierarchy. Card uses the neutral recipe (`palette.surface`, `1px solid palette.border`); lines `palette.muted`, `strokeWidth={2}`, solid, deliberately crossing/overlapping to read as tangled.
  - Copy (exact strings): left panel label `Mind map`; right panel label `Web / graph`; left sub-node labels (short, illustrative) `Idea A`, `Idea B`, `Idea C` (hub label `Topic`). Right panel nodes carry no text (dots only) to emphasize the structureless tangle.
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`) + remotion.md §Color conventions. Accent reserved for the left "correct" panel only. No `palette.warn` (the web is "not what you want", not an error state).
  - Typography: `fonts.sans` for panel labels and node labels; panel labels bold.
  - Icons / SVG assets: none (nodes = drawn circles / rounded pills; branches + web lines = inline `<svg>`); check `tools/remotion/public/` first.
  - Arrows / connectors: no directional arrows. Left branches are curved `<path>` strokes (thick, rounded caps, no arrowhead, per `MethodMindMap`); right web lines are straight thin muted lines, no arrowheads. Map both with fixed helper functions off each panel's plot box, never hand-eyeballed offsets.
  - Card recipe: two outer panel cards per remotion.md §Card design language; left = emphasis/outcome variant (the one accent card), right = neutral variant.
- **Source data (if any):** none required; the hierarchy-vs-web contrast is common-knowledge / VOC-backed (`facts.md` line 39, "a mind map is a hierarchy, not a web"; the r/PKMS "mind map like structure instead of a web of interconnections" quote, `facts.md` line 29). Node labels are hardcoded illustrative.
- **Reference composition to mimic:** left panel reuses `tools/remotion/src/MethodMindMap.tsx`'s hub + curved-branch + colored-node recipe (trimmed to fit one panel); overall two-panel scaffold mimics `tools/remotion/src/SampleDiagram.tsx` / `tools/remotion/src/CornellLayoutDiagram.tsx` (side-by-side surface cards). `MethodDecisionFlow.tsx` is the reference for the neutral-card recipe.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapVsWebContrast --output=out/preview-mindmap-vs-web-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapVsWebContrast --scale=2 \
    --output="$REPO/blog-ops/assets/mind-mapping-note-taking-method/mindmap-vs-web-contrast.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot; it is an explanatory contrast diagram (correct hierarchy vs. wrong tangle) that must stay on-brand, carry crisp panel labels, and encode structure a photo cannot.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component. Never inline or reposition.

---

### Image 2, after H2 "How to Make a Mind Map for Notes, Step by Step" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The worked-example mind map the reader is building, central topic "The Heart" in the middle with color-coded main branches (Structure, Blood Flow, Electrical System, Common Problems) and labeled sub-branches, plus one cross-link between branches. Type: remotion. Suggested filename: heart-mindmap-worked-example.png]`
- **Type:** `remotion`
- **Concept:** The worked-example mind map the reader builds in the section: a central "The Heart" hub with four color-coded main branches (Structure, Blood Flow, Electrical System, Common Problems), each with labeled keyword sub-branches, plus one dashed cross-link between Electrical System and Common Problems.
- **Suggested filename:** `heart-mindmap-worked-example.png`
- **Alt text:** `Mind map of the human heart: central topic with four color-coded branches and keyword sub-branches`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `HeartMindMap` — **new**; create `tools/remotion/src/HeartMindMap.tsx` and register `<Still id="HeartMindMap" component={HeartMindMap} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/HeartMindMap.tsx` (to create)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout: adapt `MethodMindMap.tsx` directly. One central dark rounded hub in the canvas center labeled `The Heart`. Four thick curved branches fan to four color-coded main-branch nodes positioned NW / NE / SW / SE (as in `MethodMindMap`'s four-quadrant layout). Off each main node, two or three thinner twigs run to small labeled keyword sub-nodes (small rounded pills or dot + label). One dashed cross-link line runs from the Electrical System branch across to the Common Problems branch (the "cross-links are where a map earns its keep" beat from the draft).
  - Copy (exact strings):
    - Central hub: `The Heart`
    - Main branches (one theme color each): `Structure`, `Blood Flow`, `Electrical System`, `Common Problems`
    - Sub-branches (illustrative, common-knowledge biology; short keywords per the draft's "one to five words" rule):
      - Structure → `Chambers`, `Valves`, `Walls`
      - Blood Flow → `Atria`, `Ventricles`, `Aorta`
      - Electrical System → `SA node`, `Pacemaker`
      - Common Problems → `Arrhythmia`, `Murmur`
    - Cross-link: a single dashed connector between `Electrical System` and `Common Problems` (no label, or a tiny muted caption `related`).
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`). Follow `MethodMindMap.tsx`'s established four-color branch coding — one distinct theme color per main branch (`palette.primary`, `palette.accent`, `palette.muted`, `palette.warn`), each used exactly once. (This mirror of the existing rendered `MethodMindMap` is the sanctioned exception to the "accent once / warn only for failures" rule: here the four colors are a legend for color-coded branches, which is the whole pedagogical point of Step 5, "give each main branch its own color." See § Editor notes.)
  - Typography: `fonts.sans` for the hub, branch labels, and sub-branch labels; hub label largest, main-branch labels bold, sub-branch labels regular.
  - Icons / SVG assets: none required (branches/twigs/cross-link drawn as inline `<svg>` paths/lines per `MethodMindMap`); check `tools/remotion/public/` before adding a heartbeat glyph if desired.
  - Arrows / connectors: no arrowheads on the branches (curved `<path>` strokes, thick, rounded caps, per `MethodMindMap`). The ONE cross-link uses the "alternative/relational" style from remotion.md §Arrow conventions: `palette.muted`, `strokeWidth={2.5}`, dashed (`strokeDasharray="6 8"`), no arrowhead, to read as a lightweight association rather than a flow.
  - Card recipe: rounded-pill nodes per `MethodMindMap.tsx` (surface fill, colored border, `borderRadius: 999`, card shadow); hub = dark solid pill. Sub-nodes are smaller pills or colored dots + adjacent label.
- **Source data (if any):** the heart topic + branch names come from the draft's H2 4 worked example (draft lines 64–90; "Structure, Blood Flow, Electrical System, Common Problems"; "Under Structure: chambers, valves, walls"). Sub-branches beyond those named are hardcoded illustrative common-knowledge biology (acceptable in a diagram). No `facts.md` figure is load-bearing.
- **Reference composition to mimic:** `tools/remotion/src/MethodMindMap.tsx` (an existing rendered mind-map diagram — the closest match; reuse its hub, curved-branch, twig, and colored-node recipe, extended with real branch/sub-branch labels and the one dashed cross-link).
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HeartMindMap --output=out/preview-heart-mindmap-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HeartMindMap --scale=2 \
    --output="$REPO/blog-ops/assets/mind-mapping-note-taking-method/heart-mindmap-worked-example.png"
  ```
- **Why this and not a real screenshot:** it is the original worked example the section narrates (the hero visual competitors lack and readers explicitly asked to SEE); nothing real to screenshot, and Remotion renders the exact color-coded branch labels on brand palette.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component. Never inline or reposition.

---

### Image 3, after H2 "Common Mind Mapping Mistakes to Avoid" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A good-vs-bad node comparison, on the left a single branch stuffed with a full paragraph of text, on the right the same branch condensed to two or three keywords with a small icon. Type: remotion. Suggested filename: mindmap-node-good-vs-bad.png]`
- **Type:** `remotion`
- **Concept:** A two-panel good-vs-bad node comparison: left a single branch node crammed with a full paragraph (the mistake), right the same branch condensed to two or three keywords with a small icon (the fix).
- **Suggested filename:** `mindmap-node-good-vs-bad.png`
- **Alt text:** `Mind map node comparison: a branch stuffed with a paragraph versus the same branch as tight keywords`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `MindMapNodeGoodVsBad` — **new**; create `tools/remotion/src/MindMapNodeGoodVsBad.tsx` and register `<Still id="MindMapNodeGoodVsBad" component={MindMapNodeGoodVsBad} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/MindMapNodeGoodVsBad.tsx` (to create)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout: two equal-width panel cards side by side inside `SAFE_MARGIN`, even gutter. Each panel shows a tiny stub of a branch (a short curved stroke from the panel's left edge) ending in ONE node, plus a small caption label above the panel.
    - **Left panel — "Too much" (warning variant):** the branch ends in a wide rounded node stuffed with a full multi-line paragraph of small text that visibly crowds the node to its edges (the mistake). Card border + caption tinted toward `palette.warn`; a small warning badge (a drawn "X" inside a rounded `palette.warn` square — never a literal cross glyph as text, per remotion.md §Typography).
    - **Right panel — "Just right" (emphasis/outcome variant):** the same branch ends in a compact pill holding two or three keywords, with a small simple icon (e.g. a drawn heart or dot) beside the words (the fix). Card = emphasis variant (light `palette.accent` tint, `2px solid palette.accent`) — the ONE accent element; a small check badge (a drawn check inside a rounded `palette.accent` square, not a literal check glyph as text).
  - Copy (exact strings):
    - Left caption: `Cramming a paragraph`
    - Left node paragraph (the stuffed text, verbatim): `The left atrium receives oxygenated blood from the lungs and passes it to the left ventricle, which pumps it out to the body through the aorta under high pressure.`
    - Right caption: `Keywords + a link`
    - Right node keywords: `Left atrium` (with a small icon beside it), plus one thin twig to `oxygenated`.
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`) + remotion.md §Color conventions. `palette.warn` used only for the genuine "wrong / crammed" left panel; `palette.accent` reserved for the one "correct" right panel (the single emphasis element).
  - Typography: `fonts.sans` throughout; captions bold; the crammed paragraph in a smaller `fonts.sans` size to read as an overstuffed slab; keywords in a normal node size. No em-dash, no enclosed/circled glyphs, no literal check/cross character as text (draw badges instead).
  - Icons / SVG assets: none from `public/` required; the small keyword icon, the check badge, and the X badge are drawn inline (`<svg>` / styled `<div>`). Check `tools/remotion/public/` before adding any.
  - Arrows / connectors: no directional arrows between panels. Each panel's short branch stub is a curved `<path>` stroke (rounded cap, no arrowhead) matching `MethodMindMap`'s branch style; the right panel's twig is a thin line + dot.
  - Card recipe: two outer panel cards per remotion.md §Card design language — left = warning variant, right = emphasis/outcome variant (exactly one accent card).
- **Source data (if any):** none required. The good-vs-bad contrast is grounded in the draft (H2 7, r/IBO "your mind maps should NOT have big slabs of text… paragraphs defeat the whole purpose", `facts.md` line 25) and Step 4's own example ("Left atrium," not "the left atrium receives oxygenated blood from the lungs," draft line 82). The stuffed paragraph is hardcoded illustrative text.
- **Reference composition to mimic:** `tools/remotion/src/SampleDiagram.tsx` / `tools/remotion/src/CornellLayoutDiagram.tsx` for the two-panel side-by-side surface-card scaffold; `tools/remotion/src/MethodDecisionFlow.tsx` for the warning/emphasis card variants and badge styling; `tools/remotion/src/MethodMindMap.tsx` for the branch-stub + node styling.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapNodeGoodVsBad --output=out/preview-node-good-vs-bad-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still MindMapNodeGoodVsBad --scale=2 \
    --output="$REPO/blog-ops/assets/mind-mapping-note-taking-method/mindmap-node-good-vs-bad.png"
  ```
- **Why this and not a real screenshot:** it is an explanatory before/after diagram with verbatim illustrative node text that must render crisply on brand palette; nothing real to screenshot, and the exact "stuffed paragraph vs. tight keywords" contrast is the point.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component. Never inline or reposition.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/mind-mapping-note-taking-method/
├── featured.png                       (remotion, Still: MindMapFeatured — new)
├── mindmap-vs-web-contrast.png        (remotion, Still: MindMapVsWebContrast — new)
├── heart-mindmap-worked-example.png   (remotion, Still: HeartMindMap — new)
└── mindmap-node-good-vs-bad.png       (remotion, Still: MindMapNodeGoodVsBad — new)
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. All four compositions (`MindMapFeatured`, `MindMapVsWebContrast`, `HeartMindMap`, `MindMapNodeGoodVsBad`) are net-new: write each in `src/<Id>.tsx` and register a `<Still>` in `src/Root.tsx`. Reuse `MethodMindMap.tsx` (hub/branch/node recipe), `SampleDiagram.tsx` / `CornellLayoutDiagram.tsx` (two-panel scaffold), and `MethodDecisionFlow.tsx` (card variants) as references. Use `<BlogWatermark />` and the tokens in `src/theme.ts`.
2. **AI-generated (`ai-prompt` / `ai-api`):** none in this post (operator override to all-remotion).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** every `remotion` slot uses `<BlogWatermark />` (no manual pass). Output format: PNG.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive.
- Good: `heart-mindmap-worked-example.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (author + register the four compositions).
2. Save to `blog-ops/assets/mind-mapping-note-taking-method/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `checklist.md` (editor action).

## Editor notes

- **Count reconciliation:** draft `[IMAGE:]` count = 3 (draft lines 27, 66, 127) = 3 in-post slots in the outline's image placement plan (after H2 1, H2 4, H2 7). Match, no delta. Featured is frontmatter-only (not an in-post slot), as required.
- **Featured-type OVERRIDE (operator instruction, deliberate):** `images.featured_default = ai-prompt` was overridden to `remotion` for the featured slot so the whole post publishes autonomously with every image rendered. Rationale: `images.enabled = [ai-prompt, screenshot, remotion]`, `ai-api` is OFF, and in `generate-images` autonomous dispatch only `remotion` produces a file without a human (`ai-prompt` needs a manual paste, `screenshot` needs a manual capture). All four slots are structured diagrams / a branded hero card that Remotion renders cleanly — none is a photo or a loose flat-vector scene — so `remotion` is a genuine fit for every one, not just a fallback. This intentionally departs from the blog's usual flat-vector illustrated-hero convention (`profile/image-style.md`); if the human later wants the on-brand illustrated hero, regenerate `featured.png` as `ai-prompt` post-publish.
- **Featured verbatim-title conflict resolved:** the operator's brief quoted the cover title as "Mind Mapping Note-Taking: How to Use It", but the remotion adapter's featured layout primitive requires the frontmatter `title:` **verbatim**. Because this slot is `remotion` (not `ai-prompt`, where a shortened hand-lettered title is allowed), the verbatim rule wins: the card renders the exact frontmatter title `Mind Mapping Note-Taking: How to Use It (With Steps)`. If the human prefers the shorter form on the cover, either shorten the frontmatter `title:` or switch the featured slot to `ai-prompt`.
- **Featured hygiene:** no inline `[IMAGE:]` placeholder is named `featured.*` or duplicates the featured concept — no duplication violation. Cover concept is one bold idea with a single small ≤3-object motif, thumbnail/OG-legible; no callout pile-up.
- **Priority-ladder / type check:** all four are branded diagrams or a hero card → `remotion` is the correct (and, under the override, the only file-producing) rung. No slot would be better as a `screenshot` (nothing real to capture) or `ai-prompt` (no loose illustrative scene here, and Images 1–3 carry verbatim labels/data-accurate structure that `ai-prompt` renders unreliably — `remotion` is the right pick on the merits, independent of the override).
- **No table-duplicate charts:** the only markdown table (when-to-use vs. skip, H2 3) has no image slot; no chart duplicates a table.
- **Color-coding exception (Image 2, HeartMindMap):** it follows the existing rendered `MethodMindMap.tsx` four-color branch legend (`primary`/`accent`/`muted`/`warn`, one per branch). This is a sanctioned deviation from remotion.md's "accent once / warn only for failure states" guidance because color-coded branches ARE the pedagogical point of the section's Step 5 ("give each main branch its own color"), and it keeps parity with the already-shipped mind-map composition.
- **No chart needs fresh data:** every diagram is common-knowledge or illustrative; branch/sub-branch labels are hardcoded illustrative values acceptable in a diagram context. Nothing requires data not already in `facts.md`.
- **All four compositions are net-new:** `MindMapFeatured`, `MindMapVsWebContrast`, `HeartMindMap`, `MindMapNodeGoodVsBad` must each be authored in `tools/remotion/src/` and registered in `Root.tsx`. `MethodMindMap.tsx` is the strongest reuse anchor (Images featured + 1 + 2 all borrow its hub/branch/node recipe).
