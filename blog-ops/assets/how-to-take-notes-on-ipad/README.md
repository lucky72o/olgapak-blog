# Images: how-to-take-notes-on-ipad

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md` (image placement plan), `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/how-to-take-notes-on-ipad/facts.md` (for chart/diagram data), `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: the `image-builder` agent at Stage 4a.5 (and the human for anything it cannot render).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/how-to-take-notes-on-ipad/`

## Featured image

> **Frontmatter only.** The `wordpress-rest` adapter's frontmatter template defines NO cover/heroImage field: this asset ships as a WordPress media upload attached via `featured_media` at Stage 4b.5, which is why the filename is fixed at `featured.png`. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`. From `images.featured_default` in `blog-ops/config.yaml`, and reinforced as a standing rule by `blog-ops/profile/custom-instructions.md` §Image style ("Featured image is always `ai-prompt`... do NOT override the featured slot to `remotion`/anything else"). `ai-prompt` is a member of `images.enabled` (`[ai-prompt, screenshot, remotion]`).
- **Dimensions:** 3:2, per `image-style.md` §Aspect ratio defaults. Target roughly 1800 x 1200 px. Keep the title band and the character inside the vertical safe zone so the 1.91:1 OG crop does not slice either.
- **Concept:** A young woman at a warm, sunlit desk writing by hand on an open iPad, with a closed paper notebook and a mug resting beside it, the post's whole thesis (a setup that actually sticks, digital without abandoning what paper taught you) in one calm scene.
- **Archetype:** `scene-vignette`. A small illustrated moment showing the outcome the post promises, rather than a diagram of it. It fits because the post's thesis is a working habit, not a comparison or a statistic, and it lets the recurring female character carry the frame as the observed convention expects. The rotation ledger (`blog-ops/featured-log.md` legacy table, plus the now-created `blog-ops/featured-log/`) shows the last two prior posts both used `object-metaphor` (2026-08-03 `charting-method-note-taking`, 2026-08-03 `digital-detox-plan`), so `object-metaphor` is off limits. Alternatives weighed and rejected: `split-contrast` (iPad vs paper) would tell the reader the post crowns a winner, which H2 1 and the FAQ explicitly refuse to do; `big-number` has nothing to lead with, the post carries no headline statistic and the title is not number-led. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `A woman writing by hand on an iPad at a sunny desk, a closed paper notebook beside her`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector blog hero illustration on a single bright, saturated warm-amber background (roughly #F2B441), no gradients in the background, generous flat colour.

  Composition, scene-vignette archetype: ONE small illustrated moment, no panels, no cards, no arrows, no charts, no numbered callouts. A young woman with dark hair in a loose bun sits three-quarter view at a simple desk in the lower two thirds of the frame, leaning slightly forward, writing by hand with a slim stylus on an open tablet propped at a low angle in front of her. The tablet screen shows loose handwritten strokes and a small sketched diagram, drawn as simple ink lines, not readable words. Beside the tablet on the desk: one closed paper notebook with a warm terracotta cover and an elastic band, and a mug of tea. That is all: three focal objects total plus the character. Generous empty background around and above her.

  Style: cheerful modern flat vector, clean bold outlines, soft cel shading, warm and inviting, natural wood desk tone and cream paper against the amber field. Small teal (#0E9F8E) and brand-blue (#2B6CB0) accents only on tiny details such as the stylus barrel or the mug, never as a background or a dominant fill. Mood per blog-ops/profile/image-style.md: clean, approachable, confident, productive.

  Title treatment, upper area of the frame, above the character, on a clear band of flat background: the post title rendered EXACTLY as
  How to Take Notes on an iPad: A Setup That Actually Sticks
  set in a playful hand-lettered script mixed with a bold rounded sans, dark near-black (#222222), with the single word "Sticks" coloured warm red (#E11D48) as the one accent word. Title stays inside the horizontal safe area and wraps across two or three lines, centred.

  Bottom-right corner: the small lowercase wordmark olgapak.com in a plain rounded sans, dark, at about 55% opacity.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; also the featured-slot default)
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, stock-photo look, dense infographic, multi-panel layout, numbered badges or callout bubbles, arrows, charts, misspelled or garbled lettering, duplicate or nonsense text blocks, extra limbs, extra or malformed fingers, warped hands, Apple logo or any real brand logo or wordmark, third-party app icons, realistic UI chrome or a readable operating-system interface, cold monochrome blue scene, blue-dominant background, dark or moody colour grading, cluttered desk, watermark other than the olgapak.com wordmark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("1 featured hero" bullet, plus the §Illustration palette rule); the warm, wood-toned `finished-notebooks-shelf` sample in `blog-ops/reference/image-samples/` is the warmth benchmark. Do NOT reference `student-desk-spiral` or `rocketbook-workflow` (too cold, too blue).
- **Source data (if any):** none. The concept is editorial, no numbers appear in the image.
- **Text-in-image warning:** this slot needs the post title rendered legibly and verbatim, which gpt-image gets right most of the time but not reliably. After generation, read the PNG and check the title character by character against `How to Take Notes on an iPad: A Setup That Actually Sticks` and check the `olgapak.com` wordmark. If a single letter is wrong, re-generate once; if it is still wrong, the fallback is a human post-processing text overlay on a clean untitled render, not shipping garbled lettering.
- **Why this and not remotion/screenshot:** `images.featured_default` plus a standing custom instruction lock the featured slot to ai-prompt, and the whole hero convention on this blog is the illustrated character scene, which Remotion's flat geometric language cannot produce.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per the remotion adapter). Never inline a watermark, never reposition.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the prompt itself (bottom-right, ~55% opacity), matching the existing hero library.
- **Own-site/product UI screenshots:** none in this post.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** every slot below already sits after its section heading and the section's first body paragraph in `draft-v2.md`. Do not move the placeholders.

**Table-redundancy rule:** the draft contains no markdown tables at all, so no chart or diagram slot duplicates tabular content.

### Image 1, after H2 "Step 1: Pick One App and Stop Shopping" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A person at a warm-lit desk surrounded by floating note-taking app icons, calmly reaching for just one of them. Warm palette, brand blue and teal as accents only. Type: ai-prompt. Suggested filename: pick-one-app.png]`
- **Type:** `ai-prompt`
- **Concept:** A woman at a warm cream-and-wood desk with a loose ring of blank, unbranded app tiles floating around her, calmly reaching for exactly one while the others drift out of focus.
- **Suggested filename:** `pick-one-app.png`
- **Alt text:** `A woman choosing one note-taking app from several floating app tiles above her desk`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text.

  Composition: head-on, slightly raised eye level. A young woman with dark hair in a loose bun sits at a light oak desk in the lower third, one hand lifted, calmly reaching up toward a single rounded-square app tile that glows a little brighter than the rest. Six or seven other blank rounded-square tiles float in a loose arc around and behind her, tilted at slight angles, softer and lower in contrast so they read as receding. Every tile is blank or carries only an abstract mark: a simple pen nib, a page corner, a plain dot. No real app icons, no brand marks, no lettering. On the desk: an open tablet with a stylus resting on it, and a small potted plant.

  Palette and mood: warm and inviting. Cream paper background (#F4EDE3) with natural light oak desk tones, honey-coloured light from the left, a little green from the plant. The one chosen tile is tinted teal (#0E9F8E); brand blue (#2B6CB0) appears only as a small accent on the stylus. Never a blue background, never a blue-dominant scene. Clean bold outlines, soft cel shading, generous empty space in the upper corners.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions or numbers, real app icons, Apple or GoodNotes or Notability or Notion logos, any recognisable brand mark, photorealism, 3D render, stock photo, dark or moody lighting, cold blue or monochrome blue scene, blue-dominant background, extra limbs, extra or malformed fingers, warped hands, cluttered desk, fake UI chrome, screen glare, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions, "One illustration per H2 section" bullet, plus the §Illustration palette rule (warm, wood-toned, `finished-notebooks-shelf` look; not `student-desk-spiral`).
- **Source data (if any):** none. Illustrative only; the section's supporting evidence stays in the prose.
- **Text-in-image warning:** this image must carry NO text. If the model renders any lettering on the tiles, that is a defect and the slot should be re-generated.
- **Why this and not remotion/screenshot:** it is a mood-and-concept scene, not a diagram, and screenshotting six real app icons would put third-party brand marks and stale UI into an evergreen post.

---

### Image 2, after H2 "Step 3: Decide When You Handwrite and When You Type" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A clean decision diagram. Top node "What is in front of you?" branching into two labelled paths: "Conceptual, diagram-heavy, or arriving faster than you can think" leading to HANDWRITE, and "Reference material you will search later, or accuracy matters more than processing" leading to TYPE. Type: remotion. Suggested filename: handwrite-or-type-decision.png]`
- **Type:** `remotion`
- **Concept:** A two-branch decision diagram: one question card at the top splits into the conceptual/fast-material branch ending at HANDWRITE and the reference/accuracy branch ending at TYPE.
- **Suggested filename:** `handwrite-or-type-decision.png`
- **Alt text:** `Decision diagram: conceptual or fast material leads to handwriting, reference material leads to typing`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/adapters/images/remotion.md`. This is an IN-POST slot: NO title, NO subtitle.

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `HandwriteOrTypeDecision`
- **Component file:** `tools/remotion/src/HandwriteOrTypeDecision.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token, matching every other composition in this project); final render at `--scale=2`.
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` present and untouched, `palette.background` canvas, all content inside `SAFE_MARGIN` (120).
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - Layout, top to bottom, the stack vertically centred in the band between the top safe margin and the watermark (visual centre of mass around y = 580):
    1. **Question card**, centred, roughly 900 px wide, single line, standard neutral card recipe, text in `fonts.sans` bold at ~44 px.
    2. **Two diverging connectors** from the bottom edge of the question card down to the top edge of each condition card. Both are neutral mapping connectors, not a chosen-vs-not-chosen pair: `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, arrowhead in the same muted colour, drawn as one SVG layer with fixed helper coordinates off a defined layout grid, never eyeballed offsets. Both connectors are mirror images of each other, identical length.
    3. **Two condition cards**, side by side, equal width (roughly 700 px each) with a fixed gap of ~120 px between them. Each holds its full sentence as WRAPPED multi-line text (these strings are long; never a single-line pill), `fonts.sans` at ~32 px, `palette.text`, line height ~1.3. Neutral card recipe for both.
    4. **Two vertical connectors**, identical fixed length (~90 px), same neutral muted style as above, one under each condition card.
    5. **Two outcome cards**, aligned under their condition cards, same width as the card above them, shorter height, holding one word each in `fonts.sans` 700 weight at ~58 px with wide letter spacing.
  - Copy, exact strings:
    - Question card: `What is in front of you?`
    - Left condition card: `Conceptual, diagram-heavy, or arriving faster than you can think`
    - Right condition card: `Reference material you will search later, or accuracy matters more than processing`
    - Left outcome card: `HANDWRITE`
    - Right outcome card: `TYPE`
  - Palette: canvas `palette.background`, cards `palette.surface` with `1px solid palette.border`, all card text `palette.text`, connectors `palette.muted`. **Colour coding, deliberate:** the word `HANDWRITE` is rendered in `palette.accent` and `TYPE` in `palette.primary`, purely as route coding. Both outcome cards keep the identical neutral card recipe, identical size, identical border and identical font weight, so neither branch reads as the recommended one. The section refuses to crown a winner, so no emphasis-variant card, no accent-coloured "winning" path, and no `palette.warn` anywhere (nothing here is a failure state).
  - Typography: `fonts.sans` throughout. No `fonts.mono`, there is no data value in this diagram. No em dash in any rendered string.
  - Icons / SVG assets: none. `tools/remotion/public/` is empty; do not add an asset for this slot.
  - Arrows / connectors: per the adapter §Arrow conventions, sequential/mapping style (muted, solid, 2.5) for all four connectors. Do not use the accent stroke here: an accent path would assert that one branch is the answer, which contradicts the section's argument.
  - Card recipe to use: §Card design language neutral variant for all five cards. No emphasis variant, no warning variant.
- **Source data (if any):** no numbers. The two branch strings are the author's decision rule as written in `draft-v2.md` §"Step 3: Decide When You Handwrite and When You Type" (the two-bullet rule), which rests on `facts.md` §Study findings lines 21 to 24 (Mueller and Oppenheimer 2014 plus the 2019 Morehead replication) and its editorial line at line 24. Hardcoded illustrative copy, no facts.md figure is rendered. Nothing here needs fresh data.
- **Reference composition to mimic:** `tools/remotion/src/MethodDecisionFlow.tsx` (closest existing decision-flow composition; take its `Arrow` component, `Card` recipe, theme imports, and watermark usage). In-post diagrams may mimic the reference's layout freely, but note that `MethodDecisionFlow` flows left to right in a single row while this one branches top-down into two columns.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HandwriteOrTypeDecision --output=out/preview-handwrite-or-type-v1.png
  ```
- **Final export command** (writes into the CURRENT tree, `REPO` derived dynamically so a worktree run does not export into the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still HandwriteOrTypeDecision --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-take-notes-on-ipad/handwrite-or-type-decision.png"
  ```
- **Why this and not a screenshot or ai-prompt:** it is a genuine branching diagram whose whole value is the two verbatim branch sentences rendered legibly, which is exactly what Remotion guarantees and what an AI generator does not. Nothing exists to screenshot.

---

### Image 3, after H2 "The Gear That Earns Its Place (and the Gear That Doesn't)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Flat-lay of iPad note-taking gear on warm wood, tiered by importance: iPad and stylus sharp in the foreground, screen protector box mid-ground, case and keyboard receding softly into the background. Type: ai-prompt. Suggested filename: gear-tiers-flat-lay.png]`
- **Type:** `ai-prompt`
- **Concept:** An overhead flat-lay on warm walnut wood where a generic tablet and stylus sit crisp in the foreground, a matte film sleeve mid-ground, and a case and keyboard fade softly into the background, so importance reads as depth.
- **Suggested filename:** `gear-tiers-flat-lay.png`
- **Alt text:** `Overhead view of a tablet and stylus on a wooden desk, with a case and keyboard fading behind them`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text.

  Composition: straight overhead flat-lay on a warm walnut wood tabletop, visible wood grain drawn as simple flowing lines. Foreground, lower centre, crisp and fully saturated with the strongest outlines: a plain unbranded tablet lying flat with loose handwritten ink strokes visible on its screen, and a slim stylus resting diagonally across its lower edge. Mid-ground, slightly smaller and a little softer: a flat rectangular sleeve of matte screen film with one corner peeled back. Background, upper area, noticeably lighter in contrast and lower in saturation so they read as receding and optional: a folded tablet case and a small detached keyboard. A sprig of eucalyptus and a warm ceramic mug sit at the edge of the frame for warmth. Generous empty wood space between the three tiers so the depth ranking is obvious.

  Palette and mood: warm walnut and honey wood tones, cream paper, soft warm light from the upper left casting gentle short shadows, a little muted green from the eucalyptus. Teal (#0E9F8E) only on the stylus grip and brand blue (#2B6CB0) only as a thin edge detail on the film sleeve. Never a blue background, never a blue-dominant scene, no cold grey studio look. Clean bold outlines, soft cel shading.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, price tags or numbers, Apple logo, Logitech logo, Paperlike logo, any real brand mark or product name, photorealism, 3D render, stock photo, dark or moody lighting, cold blue or monochrome blue scene, blue-dominant background, grey studio backdrop, cluttered surface, human hands, extra fingers, fake UI chrome, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette, explicitly the warm wood-toned `finished-notebooks-shelf` reference in `blog-ops/reference/image-samples/`. This slot is the closest in the post to that benchmark, match it.
- **Source data (if any):** none. Ranking is qualitative, per `draft-v2.md` §"The Gear That Earns Its Place" and `facts.md` §Apple feature facts (a Pencil is not required). No prices appear in the post, so no price may appear in the image.
- **Text-in-image warning:** no text at all in this image. Tier labels are deliberately conveyed by depth and contrast rather than words, precisely because rendered labels are unreliable here. If the model adds lettering or a price, re-generate.
- **Why this and not remotion/screenshot:** it is a warm lifestyle scene, not a diagram; a real photo or product screenshot would date the moment Apple ships a new model and would drag brand marks into the frame.

---

### Image 4, after H2 "The Mistakes That Turn an iPad Into an Expensive Netflix Screen" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: An iPad propped on a stand playing video in a dim room, stylus lying untouched beside it next to a cold cup of tea. Gently rueful rather than scolding, warm lamplight. Type: ai-prompt. Suggested filename: ipad-playing-video.png]`
- **Type:** `ai-prompt`
- **Concept:** A tablet propped on a stand in a dim, lamplit room playing an unnamed video, with an untouched stylus and a cold mug of tea beside it, the bought-for-notes device quietly doing something else.
- **Suggested filename:** `ipad-playing-video.png`
- **Alt text:** `A tablet on a stand playing video in a dim room, with an untouched stylus and a cold mug beside it`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text.

  Composition: low, close, slightly side-on view of a bedside table at night. Centre frame, a plain unbranded tablet propped on a small folding stand, its screen showing an abstract playing video, just soft blocks of colour and a simple play triangle, nothing readable and no interface chrome. Beside it, lying flat and clearly untouched, a slim stylus with a faint layer of dust motes in the lamplight, and a mug of tea with no steam rising from it. A small warm table lamp at the left edge is the only light source. A closed notebook sits at the back of the table, just out of the light. No person in frame.

  Palette and mood: warm and dim, not cold or bleak. Deep terracotta and warm plum-brown room tones, amber lamplight pooling on the tabletop, cream notebook cover catching a little of it. The tablet screen glow is a soft warm gold, not blue. Teal (#0E9F8E) only on the stylus grip. Never a blue background, never a blue-dominant scene, never harsh blue screen light. Gently rueful and quiet rather than scolding or sinister. Clean bold outlines, soft cel shading, generous empty space in the upper half.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, subtitles, labels or numbers, Netflix or YouTube logo, any streaming service branding, recognisable film or show still, real UI chrome, playback bar with timecodes, Apple logo, photorealism, 3D render, stock photo, cold blue screen glow, blue-dominant scene, harsh or horror lighting, sad or shaming facial expression, people, extra limbs, extra or malformed fingers, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, inviting, wood and lamplight; explicitly not the cold blue `student-desk-spiral` or `rocketbook-workflow` feel). This slot is the darkest in the set, so warmth control matters most here.
- **Source data (if any):** none. The mood echoes `facts.md` §Quotes (the "iPad in some corner collecting dust" and "ipad + youtube = doomscrolling" lines), but no quote is rendered in the image.
- **Text-in-image warning:** no text at all, and specifically no streaming-service branding, even though the heading names Netflix. The heading carries that joke in prose; putting a real logo in the image would be a trademark problem and would date instantly.
- **Why this and not remotion/screenshot:** a scene with a mood, not a diagram, and a real screenshot of a streaming app is exactly what must not appear here.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/how-to-take-notes-on-ipad/
├── featured.png
├── pick-one-app.png
├── handwrite-or-type-decision.png
├── gear-tiers-flat-lay.png
└── ipad-playing-video.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/adapters/images/remotion.md`. Register the `<Still>` in `src/Root.tsx`, write the component in `src/HandwriteOrTypeDecision.tsx`, export via the final command in the Image 2 spec. Use `<BlogWatermark />` and the tokens in `src/theme.ts`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.11.0/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark and polish:** `<BlogWatermark />` for the Remotion slot; the `olgapak.com` wordmark is requested inside the featured prompt. Section illustrations follow the existing library and carry no wordmark. Output format: PNG for every slot.

## Naming conventions (from `standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `handwrite-or-type-decision.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the four automated slots unless `generate-images` records one `failed`.
2. On a failure, paste that slot's `Prompt:` block into any AI image tool and save the output to `blog-ops/assets/how-to-take-notes-on-ipad/` under the exact suggested filename.
3. Verify file sizes (under 200 KB for featured, under 500 KB for in-post is a good rule of thumb).
4. Tick the "Create images" section in `action-items.md` once all five files exist.

## Editor notes

- **Slot count matches exactly.** `outline.md` §Image placement plan lists 1 featured + 4 in-post; `draft-v2.md` carries exactly 4 `[IMAGE:]` placeholders, in the same sections and the same order. No delta.
- **Featured hygiene: clean.** No `[IMAGE:]` placeholder uses `featured.png` and none duplicates the featured concept. The featured desk scene (woman writing, paper notebook beside her) and Image 1 (app-tile choice) are visually distinct.
- **Table-duplicate check: not applicable.** The draft contains no markdown tables at all, so the Remotion diagram duplicates nothing.
- **Priority-ladder check.** `remotion` is enabled and sits at the top of the ladder, but `custom-instructions.md` §Image style explicitly overrides it for this blog's scene and hero slots ("`remotion` only for genuine diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals"). The one genuinely diagrammatic slot in this post (Image 2) is `remotion`. No slot is specced `screenshot`, and none should be: the only capturable surfaces here are third-party app UIs, which would be off-brand, stale within a release cycle, and a manual action item blocking an autopilot run.
- **Judgment call worth an override if you disagree (Image 2 colour coding).** The remotion adapter reserves `palette.accent` for exactly one "this is the answer" element per composition. This diagram has two equally valid outcomes, and H2 4 explicitly refuses to crown one, so I used accent on `HANDWRITE` and primary on `TYPE` as neutral route coding with identical card treatment on both sides, rather than accenting one branch. If you would rather stay literally within the one-accent rule, make both outcome words `palette.text` and drop the colour coding entirely; do not instead accent a single branch, that would put a claim in the image the post does not make.
- **Rotation ledger.** `blog-ops/featured-log/` did not exist before this run; I created it and wrote `blog-ops/featured-log/2026-08-19-how-to-take-notes-on-ipad.md` (the per-post format the skill mandates, one file per post so concurrent posts cannot conflict). I did NOT append a row to the legacy `blog-ops/featured-log.md` table: the skill treats it as read-only history and the planner reads the union of both, so rotation still counts every prior post.
- **No chart needs fresh data.** The only diagram carries no numbers.
