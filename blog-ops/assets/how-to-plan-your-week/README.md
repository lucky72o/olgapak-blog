# Images: how-to-plan-your-week

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/how-to-plan-your-week/outline.md` (image placement plan), `blog-ops/drafts/how-to-plan-your-week/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/how-to-plan-your-week/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/how-to-plan-your-week/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `3` (1 featured + 2 in-post)
- Breakdown by type:
  - Remotion compositions: `1` (the week-grid timeboxing figure)
  - AI-generated (`ai-prompt`): `2` (featured Sunday-planning hero, midweek-reset scene)
  - Screenshots: `0`
- File destination: `blog-ops/assets/how-to-plan-your-week/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in config.yaml; a member of `images.enabled`. Also mandated by `custom-instructions.md` §Image style: the featured hero is always the hand-lettered title over a flat-vector illustration.)
- **Dimensions:** `ai-prompt` at **3:2** per `blog-ops/profile/image-style.md`'s aspect-ratio default (matches the existing hero library). Keep the title band + character inside the vertical safe zone so the 1.91:1 OG/Twitter crop doesn't clip them.
- **Concept:** The recurring friendly female brand character sits at a sunlit table on a calm Sunday, coffee in hand, an open weekly planner / calendar spread in front of her as she maps out the week ahead, warm and unhurried, with the post title hand-lettered across the top.
- **Archetype:** `scene-vignette` — a small illustrated moment showing the post's thesis (sitting down once, calmly, to plan the week) rather than a diagram of it. Fits because the whole post argues planning is one calm decision made in advance; a warm "Sunday planning" vignette says that at a glance, and it is exactly this blog's documented hero recipe (recurring character + topic props in a warm scene). Ledger check: `blog-ops/featured-log.md` is absent (this blog's first logged row), so no archetype is blocked; `scene-vignette` is chosen on fit, and it is deliberately NOT `diagram-lite` (the concept needs no flow). The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `Woman at a sunny table with coffee, mapping her week in an open weekly planner`

> **Cover concept note (skill hard rule on featured images):** this concept passes the featured-image hard rule as-is, so no reshape was needed. It is ONE calm metaphor (sit down once and plan the week) with 3 focal objects beyond the title + watermark (character + open weekly planner/calendar + coffee mug), generous warm negative space, and it reads at a thumbnail and at the OG crop. It is NOT a multi-callout infographic and does not try to cram the five steps / rocks-and-water / midweek reset onto the cover, that density is reserved for the in-post week-grid diagram. No alternatives were needed.
>
> **House-style note (`image-style.md`):** the featured hero is the documented exception that may keep a single bright/saturated background, so a warm sunlit wash is allowed. Per the illustration-palette rule, brand blue `#2B6CB0` stays an ACCENT (a small planner detail / mug rim), never the dominant fill; the scene is kept WARM (morning light, wood tones, cream paper) to match the `finished-notebooks-shelf` warmth rather than the too-cold `student-desk-spiral`.

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in a clean, approachable, optimistic
  style. A cheerful young woman (recurring brand character) sits at a warm wooden
  table on a calm Sunday morning, relaxed and unhurried, holding a mug of coffee in
  one hand. In front of her, open head-on to the viewer, is a weekly planner / paper
  calendar spread showing a simple week laid out as a light grid of day columns with a
  few soft colored blocks already placed on it (wordless, just rounded rectangles
  suggesting scheduled slots), a pen resting on the page. Her expression is calm and
  content, mid-thought, clearly deciding where the week goes rather than stressed. Warm
  inviting interior bathed in soft golden morning light from a window: cream paper, warm
  wood tones, a little greenery (a small potted plant), a second mug or a folded
  notebook as gentle props, generous empty space around her. Flat vector shapes, soft
  rounded forms, minimal shading, no gradients, no photorealism. Warm creams, honey,
  and wood browns dominate; brand blue #2B6CB0 and teal #0E9F8E appear only as small
  accents (the planner's grid lines, a book spine, the mug rim), never as the dominant
  fill or the background. Across the top of the image, a big bold post title reading
  exactly "How to Plan Your Week: A Routine That Survives Tuesday", set in a playful
  hand-lettered script mixed with a rounded bold sans-serif, the single word "Plan"
  colored warm red (#E11D48) as the accent and the rest of the title in dark charcoal
  (#222222), correctly spelled and cleanly kerned with high contrast against the light
  warm background. Character and table sit in the lower two-thirds below the title. In
  the lower-left corner, a small clean lowercase sans-serif wordmark reading exactly
  "olgapak.com" in a muted tone at low opacity, correctly spelled, no box or logo around
  it. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no readable words or numbers on the planner or calendar, no legible day names or
  dates, no real app UI, no digital screens or phones, no signature, no extra fingers or
  limbs, no distorted hands, no photorealistic face, no 3D render, no cold or moody
  lighting, no cluttered desk, no dense infographic, no callout badges or numbered
  markers, no stray logos, no misspelled title, no misspelled wordmark, no brand blue
  used as the background or dominant fill, no colors outside the warm brand palette
  (avoid neon or clashing hues)
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "1 featured hero" recipe (friendly flat-vector illustration, recurring female character + topic props, hand-lettered title with one red accent word). Match the warm, wood-toned `finished-notebooks-shelf` warmth in `blog-ops/reference/image-samples/`; avoid the too-cold, too-blue `student-desk-spiral`.
- **Source data (if any):** none (illustrative thesis concept, not a data figure).
- **Text-in-image note:** the title "How to Plan Your Week: A Routine That Survives Tuesday" is baked INTO the prompt (top band, "Plan" in red accent, per the blog hero convention). Modern gpt-image renders described titles reliably, but verify the full title is spelled correctly and cleanly kerned; if the model garbles a title this long, regenerate or replace it with a hand-lettered overlay in post (the blog's heroes are made that way). Keep the planner blocks wordless (rounded shapes only) so there is no in-image text to garble on the page.
- **Why this and not remotion/screenshot:** the featured hero follows the blog's locked flat-vector illustrated-character look (per `image-style.md`), which `ai-prompt` produces and `remotion`/`screenshot` cannot; there is nothing real to capture.

### Watermark

- **`ai-prompt` slot:** the `olgapak.com` wordmark is requested IN the prompt (lower-left, muted, low opacity). AI text rendering can be unreliable, so verify it reads exactly `olgapak.com` and is correctly spelled; if the model garbles or omits it, add/replace the `olgapak.com` wordmark post-generation at ~0.55 opacity per `blog-ops/profile/image-style.md`.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already a markdown table in the same section unless the chart adds something the table can't. (This post has no markdown tables, so no duplication risk.)

### Image 1, after H2 "How to plan your week, step by step" → H3 "Step 3: Give each priority a slot (timeboxing)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A week-grid diagram showing three or four timeboxed "rocks" (fixed, labeled blocks) with deliberate empty "water"/slack space between them, presented as a clean figure rather than a photo. Type: remotion. Suggested filename: week-grid-timeboxing.png]`
- **Type:** `remotion`
- **Concept:** A clean weekly-calendar grid (day columns × a short time axis) with three or four solid, labeled "rock" blocks timeboxed onto it and the gaps between them left visibly empty as "water"/slack, with one empty gap called out as deliberate on-purpose slack, so the figure teaches "place the rocks, then protect the water".
- **Suggested filename:** `week-grid-timeboxing.png`
- **Alt text:** `Week grid with a few timeboxed rock blocks and deliberate empty slack between them`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`, that adapter is the source of truth for canvas, palette, typography, watermark, card recipes, and arrow conventions.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `WeekGridTimeboxing` — **new**; create `tools/remotion/src/WeekGridTimeboxing.tsx` and register `<Still id="WeekGridTimeboxing" component={WeekGridTimeboxing} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/WeekGridTimeboxing.tsx` (to create)
- **Canvas dimensions:** In-post, **1800 × 1200**; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** The grid starts near the top safe margin and fills the whole canvas. (An in-post title band is the most common defect in this pipeline, do not add one.)
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: a single weekly-calendar grid filling the canvas inside `SAFE_MARGIN`.
    - **Columns:** five day columns, headers `Mon` `Tue` `Wed` `Thu` `Fri` in `fonts.sans`, sitting just under the top safe margin.
    - **Time axis:** a left-hand vertical axis with a few `fonts.mono` tick labels down the side: `9a` `11a` `1p` `3p` `5p`. Axis line + horizontal gridlines in `palette.border` (solid axis, one step lighter for interior gridlines).
    - **Grid body:** faint `palette.border` gridlines dividing the day columns and time rows so the empty cells read as an intentional, mostly-empty calendar.
    - **Rocks (the filled blocks):** three or four solid, labeled blocks placed on the grid at plausible day/time positions, each a **neutral card** (`palette.surface`, `1px solid palette.border`, rounded per the §Card design language recipe) carrying a bold `fonts.sans` label and a `fonts.mono` time caption. Blocks must not touch each other, always with visible empty cells between them.
    - **Water (the slack):** the empty grid cells between the rocks stay deliberately empty. Add ONE explicit callout on a clearly empty region: a dashed-outline empty block in `palette.accent` (light `palette.accent` tint fill + `2px` dashed `palette.accent` border) with a short `fonts.sans` label, so the reader sees the empty space is on purpose. This is the single accent element in the composition (accent = the one thing the figure argues for: protect the slack).
    - **Legend (small, bottom strip inside safe margin):** two swatches with `fonts.sans` labels: a solid neutral swatch = `Rocks: fixed, timeboxed blocks`; a dashed accent swatch = `Water: flexible slack, left empty on purpose`.
  - Copy (exact strings the composition should render):
    - Day headers: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`
    - Time-axis ticks: `9a`, `11a`, `1p`, `3p`, `5p`
    - Rock 1 label: `Team standup` — caption: `Mon 9 to 10a`
    - Rock 2 label: `Deep work: report` — caption: `Tue 9 to 11a`
    - Rock 3 label: `Client call` — caption: `Wed 1 to 2p`
    - Rock 4 label: `Gym` — caption: `Thu 5 to 6p`
    - Accent slack callout label: `slack, on purpose`
    - Legend line 1: `Rocks: fixed, timeboxed blocks`
    - Legend line 2: `Water: flexible slack, left empty on purpose`
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`). Rocks use the **neutral card variant**. The one slack callout uses the **emphasis/accent variant** (light `palette.accent` tint + `2px` accent dashed border), used exactly once. Do NOT tint the rock blocks with `palette.accent` (that would spread accent across many elements and lose the emphasis); do NOT use `palette.warn` anywhere (nothing here is a failure/error state).
  - Typography: `fonts.sans` for day headers, rock labels, callout label, and legend; `fonts.mono` for the time-axis ticks and the rock time captions (they read as "data").
  - Icons / SVG assets: none required (check `tools/remotion/public/` first if the builder wants a tiny rock/water glyph; keep it optional, labels carry the meaning). Note: `tools/remotion/public/` is currently empty.
  - Arrows / connectors: none (this is a spatial grid, not a directional flow). No `§Arrow conventions` needed. Position every block and tick with fixed helper functions (`xAt(dayIndex)`, `yAt(hour)`) off a defined grid box, never eyeball pixel offsets.
  - Card recipe: per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Card design language; rocks = neutral variant, the single slack callout = emphasis/accent variant.
- **Source data (if any):** hardcoded illustrative values (the sample rocks + times are a plausible illustrative week, not a `facts.md` figure). Grounded conceptually in `facts.md` Named examples, the "rocks and water" model (line 40) and the timeboxing / Parkinson's Law rationale (line 39); no fresh data is needed and none is load-bearing.
- **Reference composition to mimic:** `tools/remotion/src/CornellLayoutDiagram.tsx` (closest existing spatial-region/grid layout for the grid box + card placement and the neutral/accent card recipe). Borrow `MethodDecisionFlow.tsx`'s fixed-helper-function coordinate discipline for the `xAt`/`yAt` grid mapping. **Take code conventions only** (theme imports, watermark usage, helper style); the grid layout itself is new.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still WeekGridTimeboxing --output=out/preview-week-grid-timeboxing-v1.png
  ```
- **Final export command** (only after sign-off; writes directly to the blog assets folder of the CURRENT tree; `REPO` derived dynamically so it is worktree-safe, never hardcode an absolute path):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still WeekGridTimeboxing --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-plan-your-week/week-grid-timeboxing.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot; the week grid is a branded conceptual figure with crisp verbatim labels and an intentional empty-space message that must stay on-brand and editable, exactly the `remotion` case. `ai-prompt` would garble the block labels and time captions.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component (import from `./BlogWatermark`). Never inline or reposition; keep ~40px clear space around it (nothing, including the legend strip, touching it).

---

### Image 2, after H2 "The midweek reset: what to do when the plan breaks" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A calm, conceptual scene of a person at a desk mid-week, unhurried, crossing out and re-prioritizing what's left of their week in a notebook or on a calendar. Warm, low-pressure mood. Type: ai-prompt. Suggested filename: midweek-reset-scene.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm flat-vector scene of the recurring brand character at a desk midweek, calm and unhurried, lightly crossing out a couple of items and re-prioritizing what is left of the week in an open notebook or weekly calendar, a low-pressure "it is fine, just adjust" moment rather than a stressed one.
- **Suggested filename:** `midweek-reset-scene.png`
- **Alt text:** `Woman at a desk midweek calmly crossing out tasks and re-prioritizing her week`

#### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, clean, warm and reassuring, of the
  recurring brand character (a calm young woman) sitting at a tidy desk in the middle of
  the week, unhurried and relaxed. She is leaning over an open notebook or a weekly
  calendar page and lightly crossing out one or two items with a pen while circling or
  re-ordering a couple of others, clearly re-prioritizing what is left of the week rather
  than starting over. Her expression is calm and accepting, a small "that's okay, just
  adjust" moment, not stressed or frustrated. On the page, tasks are shown wordlessly as
  simple lines and rounded blocks, a few with a soft strikethrough mark and one gently
  highlighted as the thing that still matters, no legible text. Warm low-pressure
  interior: soft daylight, warm wood desk, cream paper, a mug of tea and a small potted
  plant as gentle props, generous calm empty space around her. Flat vector shapes, soft
  rounded forms, minimal shading, no gradients, no photorealism. Warm creams, honey, and
  wood browns dominate; brand blue #2B6CB0 and teal #0E9F8E appear only as small accents
  (the pen, the one highlighted task, the mug rim), and warm red #E11D48 used only for
  the light strikethrough marks; none of these as the dominant fill or the background.
  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no readable words or numbers on the notebook or calendar, no legible task text, no
  dates, no real app UI, no phone or laptop screen, no signature, no watermark text
  baked in, no extra fingers or limbs, no distorted hands, no photorealistic face, no 3D
  render, no cold or moody lighting, no anxious or stressed expression, no messy cluttered
  desk, no dense infographic, no stray logos, no colors outside the warm brand palette,
  no brand blue used as the background or dominant fill
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "one illustration per H2" concept-literal section-illustration look; match the warm, wood-toned `finished-notebooks-shelf` warmth (avoid the too-cold, too-blue `student-desk-spiral`). Section illustrations must NOT be monochrome brand-blue; blue is an accent only here.
- **Source data (if any):** none (illustrative concept scene). Grounded in the section's reset steps (look at what is left, re-pick the one or two things that still matter, drop the rest without guilt); no `facts.md` figure is load-bearing.
- **Text-in-image note:** communicate purely through the crossing-out gesture, the strikethrough marks, and the one highlighted item; keep all notebook/calendar text wordless. If the human wants a real label (e.g. day names), add it as a post-processing text overlay rather than trusting the model's raw in-image text.
- **Why this and not remotion/screenshot:** an illustrative, warm "calm midweek reset" scene suits the blog's flat-vector section-illustration look; there is no precise data or verbatim text to render, and there is nothing real to capture.

### Watermark

- **`ai-prompt` slot:** add the `olgapak.com` watermark post-generation at 0.55 opacity per `blog-ops/profile/image-style.md` if the output lacks one.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/how-to-plan-your-week/
├── featured.png                 (ai-prompt)
├── week-grid-timeboxing.png     (remotion, Still: WeekGridTimeboxing — new)
└── midweek-reset-scene.png      (ai-prompt)
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. `WeekGridTimeboxing` must be authored and registered in `src/Root.tsx`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; reference `CornellLayoutDiagram.tsx` (grid/region layout + card recipe) and `MethodDecisionFlow.tsx` (fixed coordinate-helper discipline).
2. **AI-generated (`ai-prompt`, automated via codex — no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch). Generated at Stage 4a.5; on failure the `Prompt:` block is the manual paste-anywhere fallback.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slot uses `<BlogWatermark />` (no manual pass). `ai-prompt` outputs get the `olgapak.com` wordmark at 0.55 opacity post-generation if absent. Output format: PNG for `remotion`; codex-native for `ai-prompt`.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `week-grid-timeboxing.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (or let Stage 4a.5 `generate-images` produce the `remotion` + `ai-prompt` slots automatically).
2. Save to `blog-ops/assets/how-to-plan-your-week/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Slot/placeholder count matches:** 2 draft `[IMAGE:]` placeholders (draft-v1.md lines 66 and 86) = 2 in-post slots in the outline's image placement plan. No mismatch. Featured lives in frontmatter only (not an in-post slot). No `[IMAGE:]` placeholder is named `featured.*` and neither duplicates the featured concept, so no featured-duplication violation.
- **No table-duplicate charts:** the post contains no markdown tables (the rocks/water, reset-steps, ranking, and tools content are bullet lists), so no chart/diagram duplicates a table. The week-grid is a spatial figure, not a re-rendered table.
- **Featured concept kept as specified (passes the hard rule):** the Sunday-planning vignette is a single calm metaphor with ≤3 focal objects (character + open weekly planner + coffee), not a multi-callout infographic, so no reshape was needed. Type stayed `ai-prompt` (= `images.featured_default` + the blog's mandatory hero convention). Archetype `scene-vignette` chosen on fit; ledger absent so nothing was blocked (this is the blog's first logged row). Palette steered WARM with brand blue as an accent only, per `image-style.md`'s illustration-palette rule.
- **Priority-ladder check:** Image 1 (week grid) correctly went `remotion` — it is a branded figure with a precise grid layout and crisp verbatim block labels + time captions, the exact `remotion` case; `ai-prompt` would garble those labels, and there is nothing real to screenshot. Image 2 (midweek reset) is a genuinely illustrative concept scene with no verbatim text or data, so `ai-prompt` is right; a screenshot has nothing to capture. Featured → `ai-prompt` per `images.featured_default`. No `screenshot` slots (enabled, but nothing real to capture in this post).
- **No chart needs fresh data:** the only diagram (Image 1) uses hardcoded illustrative rocks/times grounded conceptually in `facts.md` lines 39–40 (Parkinson's Law / rocks-and-water); nothing requires data not already in `facts.md`.
- **Accent-discipline judgment call (human can override):** in Image 1 I reserved the single `palette.accent` element for one "slack, on purpose" empty-gap callout (the figure's actual argument) and left all rock blocks neutral, per the adapter's "one accent role per composition" rule. If you would rather the rocks themselves carry the accent, the builder can flip it, but then the slack callout should drop to muted so accent stays singular.
