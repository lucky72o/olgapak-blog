# Images: best-notebooks-for-note-taking

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/best-notebooks-for-note-taking/outline.md` (image placement plan), `blog-ops/drafts/best-notebooks-for-note-taking/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/best-notebooks-for-note-taking/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/best-notebooks-for-note-taking/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `6` (1 featured + 5 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt` / `ai-api`): `5`
  - Screenshots: `0`
- File destination: `blog-ops/assets/best-notebooks-for-note-taking/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in config.yaml; a member of `images.enabled = [ai-prompt, screenshot, remotion]`). Matches the site's established featured-hero convention: a hand-lettered title over a friendly flat-vector illustration on a single bright background (`profile/image-style.md` §Observed conventions).
- **Dimensions:** `ai-prompt` at the blog's 3:2 aspect default (`profile/image-style.md` §Aspect ratio defaults). The post page renders the cover at native 3:2; OG/Twitter previews crop to 1.91:1, so keep the title and any character inside a horizontally centered safe zone.
- **Concept:** A fanned stack of varied notebooks (hardcover, spiral, dot-grid) flat-lay on a bright brand-blue background, with a playful hand-lettered "15 Best Notebooks for Note-Taking" title above them and a pen resting across the fan.
- **Suggested filename:** `featured.png`
- **Alt text:** `Fanned stack of the best notebooks for note-taking with a hand-lettered title`

### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** Ideogram (best in-image text rendering for the hand-lettered title) or ChatGPT image; Midjourney as a fallback if the title is added as a post-processing overlay instead.
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, playful and optimistic, in the
  olgapak.com brand style. A neatly fanned-out stack of five or six varied
  note-taking notebooks (a navy hardcover, a spiral pad, a dot-grid journal, a
  slim pocket notebook, a kraft-brown softcover), seen from directly above as a
  clean flat-lay, with a single simple pen resting diagonally across the fan.
  Big hand-lettered / script title reading "15 Best Notebooks for Note-Taking"
  filling the top third, mixed with a bold rounded sans-serif; the numeral "15"
  is oversized and the word "Best" is colored red as the one accent word, the
  rest in dark charcoal (#222222). One flat bright brand-blue (#2B6CB0)
  background with generous empty space around the objects. Palette limited to
  brand blue #2B6CB0, charcoal #222222, off-white paper #F7F7F7, one red accent
  #E11D48, one teal accent #0E9F8E; soft flat shapes, minimal shading, thin
  clean outlines, no photorealism. Small "olgapak.com" wordmark watermark in a
  bottom corner at low opacity. 3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, cluttered composition, numbered callouts, badges,
  infographic annotations, garbled or misspelled text, gibberish letters,
  duplicate/warped fingers or hands, extra limbs, stray brand logos, fake UI
  chrome, drop-shadow-heavy skeuomorphism, colors outside the brand palette,
  neon, dark/moody background
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions (featured hero pattern) and §Palette; existing featured heroes in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none (illustrative; the "15" matches the 15 picks in the post).
- **Text-in-image warning:** the hand-lettered title carries exact words ("15 Best Notebooks for Note-Taking"). AI text rendering is unreliable; if the model garbles the lettering, the human should regenerate a clean illustration and add the title as a post-processing text overlay in Montserrat + a script face rather than ship misspelled lettering.
- **Why this and not remotion/screenshot:** the site's locked featured-hero look is a hand-lettered flat-vector illustration (`images.featured_default = ai-prompt`); nothing to screenshot.

### Watermark

- **`ai-prompt` slots:** request a low-opacity `olgapak.com` wordmark in the prompt; the human confirms/adds it in post if the model omits it.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

### Image 1, after H2 "How to choose a notebook for note-taking (what actually matters)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A labeled diagram contrasting four writing samples on a page: feathering (fuzzy ink), bleeding (ink soaked to the back), ghosting (faint show-through), and clean writing. Type: remotion. Suggested filename: paper-problems-diagram.png]`
- **Type:** `remotion`
- **Concept:** A four-panel diagram showing the same short word written four ways, feathering (fuzzy edges), bleeding (ink soaked through), ghosting (faint reverse show-through), and clean crisp writing, with a label and one-line definition under each panel.
- **Suggested filename:** `paper-problems-diagram.png`
- **Alt text:** `Diagram comparing feathering, bleeding, ghosting, and clean writing on notebook paper`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. This is an **in-post** slot: NO title, NO subtitle. `<BlogWatermark />`, background, and safe margin still apply.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `PaperProblemsDiagram`
- **Component file:** `tools/remotion/src/PaperProblemsDiagram.tsx`
- **Canvas dimensions:** 1800 × 1200 (matches the hero series); render at `--scale=2`.
- **In-post image: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post). Subtitle text: none (in-post).
  - Layout: a 2×2 grid of four cards, evenly spaced inside `SAFE_MARGIN`, identical size and gutters. Each card is a small mock "paper swatch": a `palette.background` writing area holding the same sample word (use `note`) rendered to simulate the defect, then a bold card title, then a one-line muted definition beneath the swatch.
    - Top-left, **Feathering** (warn variant): sample word with soft blurred/spread edges (CSS `filter: blur(0.6px)` plus a faint text-shadow halo) to read as fuzzy, hairy ink.
    - Top-right, **Bleeding** (warn variant): the sample word plus a heavy, dark, slightly offset mirrored copy underneath at higher opacity to read as ink soaked through to the reverse.
    - Bottom-left, **Ghosting** (warn variant): a crisp sample word with a faint, low-contrast mirrored copy behind/under it (light `palette.muted`) to read as gentle show-through.
    - Bottom-right, **Clean writing** (emphasis/outcome variant): the sample word rendered crisply in `palette.text`, no blur, no bleed; this is the one accent card.
  - Copy (exact strings):
    - Card titles: `Feathering`, `Bleeding`, `Ghosting`, `Clean writing`
    - Definitions (muted, one line each):
      - `Ink spreads into fuzzy, hairy lines.`
      - `Ink soaks through to the other side.`
      - `Writing shows faintly on the reverse.`
      - `Crisp lines, minimal show-through.`
    - Sample word inside every swatch: `note`
  - Palette: per `profile/image-style.md` + remotion.md §Color conventions. Cards use the standard surface recipe; the three problem cards use the **warning variant** (border + card-title tinted toward `palette.warn` #E11D48, a genuine failure state); "Clean writing" uses the **emphasis/outcome variant** (light `palette.accent` #0E9F8E tint background, 2px accent border) as the single accent card. Swatch writing areas fill `palette.background`.
  - Typography: `fonts.sans` for card titles and definitions; the `note` sample word in `fonts.sans` too (it is handwriting-mimicking display text, not data). No em-dash, no enclosed glyphs.
  - Icons / SVG assets: none needed; check `tools/remotion/public/` before adding any.
  - Arrows / connectors: none (four parallel comparison cards, no directional flow).
  - Card recipe: standard recipe from remotion.md §Card design language; warning variant for the three problems, emphasis variant for "Clean writing" (exactly one accent card).
- **Source data (if any):** `facts.md` line 62 (feathering / bleeding / ghosting definitions, cited to fountainpenlove.com) and line 63 (80–100 gsm sweet spot). The ink-defect swatch rendering is a hardcoded illustrative visual (acceptable in a diagram context).
- **Reference composition to mimic:** `tools/remotion/src/CornellLayoutDiagram.tsx` (closest existing card-grid diagram); fall back to `tools/remotion/src/SampleDiagram.tsx` for the base scaffold.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PaperProblemsDiagram --output=out/preview-paper-problems-v1.png
  ```
- **Final export command** (only after sign-off; worktree-safe, writes into the CURRENT tree):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still PaperProblemsDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/best-notebooks-for-note-taking/paper-problems-diagram.png"
  ```
- **Why this and not a real screenshot:** it is an explanatory diagram of ink behavior, there is nothing real to capture, and Remotion renders the exact labels/definitions in brand type on brand palette.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component; never inline, never reposition.

---

### Image 2, after H2 "Best all-purpose notebooks for everyday note-taking" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A warm, inviting flat-lay of two or three everyday notebooks on a wooden desk beside a pen and a coffee. Type: ai-prompt. Suggested filename: everyday-notebooks-desk.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm flat-vector desk scene with two or three everyday notebooks stacked beside an open one, a pen, and a coffee mug, inviting and lived-in.
- **Suggested filename:** `everyday-notebooks-desk.png`
- **Alt text:** `Two everyday notebooks on a desk beside a pen and a coffee mug, ready for note-taking`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image or Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector illustration in the olgapak.com brand style, warm and
  inviting. A cozy top-down-ish desk scene on a light wooden desk: two or three
  everyday notebooks (a navy hardcover and a dot-grid softcover) with one open
  showing faint ruled lines, a simple pen resting on the open page, and a small
  coffee mug with a wisp of steam beside them. Soft flat shapes, thin clean
  outlines, minimal shading, generous empty space. Palette: brand blue #2B6CB0
  as the hero color, warm wood tone, off-white paper #F7F7F7, charcoal #222222
  linework, a small teal #0E9F8E accent (the mug). Calm, productive mood. Small
  "olgapak.com" wordmark watermark in a bottom corner at low opacity. 3:2 aspect
  ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, text labels, words, letters, numbers, garbled text,
  extra limbs or hands, stray brand logos, fake UI chrome, cluttered desk,
  neon colors, dark/moody lighting, colors outside the brand palette
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions (one flat-vector illustration per H2) and §Palette.
- **Source data (if any):** none (lifestyle illustration).
- **Text-in-image warning:** no in-image text needed; keep the notebook covers blank so the model does not invent garbled lettering.
- **Why this and not remotion/screenshot:** an inviting lifestyle mood, not a diagram or a real screen; the site's per-section look is flat-vector `ai-prompt`.

---

### Image 3, after H2 "Best notebooks for students (class and lecture notes)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: An illustration of a student's desk with an open spiral notebook full of class notes, a highlighter, and a laptop pushed to the side. Type: ai-prompt. Suggested filename: student-desk-spiral.png]`
- **Type:** `ai-prompt`
- **Concept:** A flat-vector student desk with an open spiral notebook covered in abstract class-note scribbles, a highlighter, and a laptop pushed to one side.
- **Suggested filename:** `student-desk-spiral.png`
- **Alt text:** `Student desk with an open spiral notebook of class notes, a highlighter, and a laptop`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image or Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector illustration in the olgapak.com brand style, energetic
  and studious. A student's desk seen from a gentle three-quarter angle: an open
  wire-bound spiral notebook filling the foreground, its pages covered in
  abstract handwriting squiggles and a couple of underlines (no readable words),
  a chunky highlighter lying across the page, and a slim laptop pushed to the
  side at the edge of the frame. Soft flat shapes, thin clean outlines, minimal
  shading, generous whitespace. Palette: brand blue #2B6CB0 as the hero color,
  off-white paper #F7F7F7, charcoal #222222 linework, one teal #0E9F8E accent
  (the highlighter) and a small red #E11D48 accent detail. Small "olgapak.com"
  wordmark watermark in a bottom corner at low opacity. 3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, readable text, words, letters, numbers, garbled
  handwriting that forms real words, extra limbs or hands, stray brand logos,
  fake UI on the laptop screen, cluttered desk, neon colors, dark lighting,
  colors outside the brand palette
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions and §Palette.
- **Source data (if any):** none (lifestyle illustration).
- **Text-in-image warning:** keep the "class notes" as abstract squiggles, not real words, to avoid garbled AI text.
- **Why this and not remotion/screenshot:** a scene-setting illustration, not a diagram or screen; matches the site's per-section flat-vector look.

---

### Image 4, after H2 "Best reusable and digital notebooks" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A simple three-step workflow illustration for a reusable notebook: (1) write on the page, (2) scan it with a phone, (3) wipe the page clean with a cloth. Type: ai-prompt. Suggested filename: rocketbook-workflow.png]`
- **Type:** `ai-prompt`
- **Concept:** A left-to-right three-step flat-vector workflow: a hand writing on a page, a phone scanning that page, and a cloth wiping the page clean, connected by simple arrows.
- **Suggested filename:** `rocketbook-workflow.png`
- **Alt text:** `Three-step reusable notebook workflow: write on the page, scan with a phone, wipe it clean`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image or Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector illustration in the olgapak.com brand style, clean and
  instructional. A simple horizontal three-step workflow, three equal panels
  left to right connected by two simple arrows: panel 1, a hand writing on an
  open reusable notebook page with a pen; panel 2, a smartphone held above the
  same page scanning it, a soft glow / capture frame on the screen; panel 3, a
  hand wiping the page clean with a small cloth, the page now blank. Soft flat
  shapes, thin clean outlines, minimal shading, lots of whitespace, panels
  evenly sized with equal spacing. Palette: brand blue #2B6CB0 as the hero
  color, off-white paper #F7F7F7, charcoal #222222 linework, one teal #0E9F8E
  accent for the arrows/scan glow. Small "olgapak.com" wordmark watermark in a
  bottom corner at low opacity. 3:2 aspect ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, step-number text, words, letters, garbled text,
  legible UI on the phone screen, brand logos (Rocketbook or otherwise), extra
  limbs or fingers, cluttered background, neon colors, dark lighting, uneven
  panel sizes, colors outside the brand palette
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions and §Palette.
- **Source data (if any):** none (illustrative process; represents the generic reusable-notebook workflow, not a specific brand claim).
- **Text-in-image warning:** the three steps are shown by imagery + arrows, not numbered text; do not render "1 / 2 / 3" labels (AI numerals garble). If step numbers are wanted, add them as a post-processing overlay. Keep the phone screen glow abstract, no fake UI text.
- **Why this and not remotion/screenshot:** no real product capture is required (and none is on hand); a clean flat-vector process illustration matches the site's per-section look. (A real Rocketbook screenshot was the outline's alternative; declined, no captured asset and off-brand vs. the illustrated set.)

---

### Image 5, after H2 "Best premium notebooks for journaling and keeping" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A cozy shelf or stack of finished, well-loved notebooks with worn spines and ribbon bookmarks, the "keeper" payoff. Type: ai-prompt. Suggested filename: finished-notebooks-shelf.png]`
- **Type:** `ai-prompt`
- **Concept:** A cozy flat-vector shelf of finished, well-loved notebooks with worn spines and dangling ribbon bookmarks, the sentimental "keeper" payoff.
- **Suggested filename:** `finished-notebooks-shelf.png`
- **Alt text:** `A shelf of finished, well-loved notebooks with worn spines and ribbon bookmarks`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image or Midjourney.
- **Prompt:**
  ```
  Friendly flat-vector illustration in the olgapak.com brand style, warm and
  nostalgic. A cozy wooden shelf holding a row of five or six finished, well-
  loved hardcover notebooks, some standing, a couple stacked flat on top, with
  slightly worn spines, rounded corners, and thin ribbon bookmarks dangling from
  a few of them. A small potted plant or mug bookends the row for warmth. Soft
  flat shapes, thin clean outlines, minimal shading, generous whitespace.
  Palette: brand blue #2B6CB0 as the hero color across several spines, warm wood
  tone, off-white #F7F7F7, charcoal #222222 linework, one red #E11D48 and one
  teal #0E9F8E accent spine. Calm, sentimental "keeper" mood. Small
  "olgapak.com" wordmark watermark in a bottom corner at low opacity. 3:2 aspect
  ratio.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, text, titles on the spines, words, letters, garbled
  text, brand logos, extra limbs or hands, cluttered background, neon colors,
  dark/moody lighting, colors outside the brand palette
  ```
- **Style reference (if any):** `profile/image-style.md` §Observed conventions and §Palette.
- **Source data (if any):** none (sentimental payoff illustration).
- **Text-in-image warning:** keep spines free of titles; no readable text, so the model does not produce garbled lettering.
- **Why this and not remotion/screenshot:** an emotional "keeper" payoff mood, not a diagram or screen; matches the site's per-section flat-vector look.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/best-notebooks-for-note-taking/
├── featured.png
├── paper-problems-diagram.png
├── everyday-notebooks-desk.png
├── student-desk-spiral.png
├── rocketbook-workflow.png
└── finished-notebooks-shelf.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/PaperProblemsDiagram.tsx`, preview via `npx remotion still ... --output=out/preview-...png`, final export at `--scale=2` into the assets dir. Use `<BlogWatermark />` and the tokens in `src/theme.ts`.
2. **AI-generated (`ai-prompt` manual):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`. Paste each `Prompt:` block into the named tool, save to the suggested filename verbatim.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** for the `remotion` slot, `<BlogWatermark />` handles it. For `ai-prompt` slots, confirm the `olgapak.com` wordmark rendered; add it in post if the model omitted it. Output format: PNG for the remotion slot; the AI tool's native format for the five AI slots (save as `.png` per this blog's PNG-default convention).

## Naming conventions

- Lowercase, kebab-case, descriptive. Good: `paper-problems-diagram.png`. Bad: `image1.png`, `IMG_0042.PNG`.

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/best-notebooks-for-note-taking/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- **Type ladder:** the five illustrative slots are correctly `ai-prompt` (flat-vector lifestyle/scene art, no verbatim data). The one `remotion` slot (paper-problems diagram) is correctly a diagram, not a screenshot, and is NOT chart-style, so no table-redundancy conflict: the H2 1 comparison table (draft lines 35–44) is about notebook picks, a different section and different content; the H2 2 bullet list of feathering/bleeding/ghosting definitions (lines 65–67) is prose, and the diagram adds a visual the prose cannot (what each defect looks like). Kept as-is.
- **Count reconciliation:** draft `[IMAGE:]` count = 5; outline in-post image-plan slots = 5 (after H2 2, 3, 4, 7, 8). Match, no delta. Featured is frontmatter-only, as required.
- **Featured hygiene:** no inline `[IMAGE:]` duplicates the featured fanned-stack concept and none is named `featured.*`. Featured concept is a single bold visual (one fanned stack + pen + title), ≤3 focal objects, no callout pile-up, thumbnail-legible. No violation.
- **Featured type source:** came from `images.featured_default = ai-prompt` (config), which is in `images.enabled`.
- **Text-in-image:** the featured title ("15 Best Notebooks for Note-Taking") and the optional Rocketbook step numbers are the only in-image text; both flagged for a post-processing overlay if the model garbles them. Note the hand-lettered featured title is a shortened form of the full post title ("15 Best Notebooks for Note-Taking in 2026 (by Use Case)"), matching the site's number-led hero convention; a human may set the full title if preferred. This shortening is allowed because the featured slot is `ai-prompt`, not `remotion` (the verbatim-title rule is a remotion layout primitive).
- **No charts need fresh data:** the only data-grounded slot (paper-problems diagram) is fully covered by facts.md lines 62–63; nothing is missing.
