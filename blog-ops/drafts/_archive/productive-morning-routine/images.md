# Images: productive-morning-routine

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/productive-morning-routine/outline.md` (image placement plan), `blog-ops/drafts/productive-morning-routine/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/productive-morning-routine/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/productive-morning-routine/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `4` (1 featured + `3` in-post)
- Breakdown by type:
  - Remotion compositions: `2`
  - AI-generated (`ai-prompt`): `2` (featured + Image 1)
  - Screenshots: `0`
- File destination: `blog-ops/assets/productive-morning-routine/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`, from `images.featured_default` in `blog-ops/config.yaml`, reinforced by `blog-ops/profile/custom-instructions.md` §Image style (featured is always `ai-prompt`, never overridden to `remotion`).
- **Dimensions:** 3:2 per `blog-ops/profile/image-style.md` §Aspect ratio defaults (target ~1536 × 1024). Keep the title and the woman inside the vertical safe zone so the 1.91:1 OG/Twitter crop clips nothing.
- **Concept:** A small, calm sunrise moment: the recurring woman sits at a tidy desk by a window with the sun just coming up, a glass of water beside her, pen on an open notebook where one single task is circled, starting her focus block with no phone anywhere in the scene.
- **Archetype:** `scene-vignette`. The post's thesis is an outcome, not a mechanism: a short, simple morning that delivers you to one focused block of work with energy left. A small illustrated moment of that outcome (quiet desk, one circled task, sun rising, no phone) says it in one glance and carries the recurring character the house style calls for.
  - Ledger check (union of `blog-ops/featured-log/*.md` and the legacy `blog-ops/featured-log.md`, this slug's own entry excluded; no prior entry for this slug exists): the last two prior posts are `2026-09-09 ai-note-taking → object-metaphor` and `2026-09-13 gifts-for-students → split-contrast`, so **`object-metaphor` and `split-contrast` are OFF LIMITS**. `scene-vignette` was last used 2026-09-07 (dopamine-detox).
  - Motif guard: dopamine-detox's cover was a face-down phone on an evening table, and screen-free-hobbies used a face-down phone too. The outline's featured concept (desk with phone face-down far away) would be a third phone-on-table cover, so the phone is removed from the cover entirely. Its absence is the point; the in-post Image 1 already shows the phone charging outside the bedroom.
  - **Alternatives considered and rejected:**
    - `big-number` (a giant hand-lettered "7" with a rising sun tucked into its crossbar): rejected, the title band already leads with "7 Simple Steps", so a giant 7 repeats the title instead of adding meaning.
    - `negative-space` (one small glass of water and a notebook off-centre on an empty sunrise field): viable and simpler, but it loses the person, and the image-style doc says the recurring character should appear where a person fits. A morning routine is about a person's morning.
    - `diagram-lite` (night before → one goal → focus block cards): rejected, it duplicates in-post Image 2 (the 7-step flow) and the concept does not need a flow on the cover.
- **Suggested filename:** `featured.png`
- **Alt text:** `Woman at a sunlit desk at sunrise with water and a notebook, one task circled, starting her focus block`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration on a single bright, saturated, warm
  background: a soft sunrise apricot / peach field (NOT blue, NOT navy, NOT grey)
  filling the whole canvas. Clean, uncluttered, generous breathing room.

  Composition (scene-vignette archetype: ONE small illustrated moment showing the
  outcome, not a diagram of it; no panels, no cards, no charts, no arrows, no grid,
  at most three focal elements):

  1. The moment, sitting in the lower two thirds of the canvas, slightly right of
  centre: the recurring friendly young woman with dark hair in a loose bun and a
  mustard sweater (the same character as prior olgapak.com covers), seated at a
  small natural-wood desk, seen from a gentle three-quarter side angle. She is calm
  and focused, pen in hand, writing in an open cream notebook.
  2. On the notebook page: a few WORDLESS pencil-grey squiggle lines, with exactly
  ONE line circled in soft teal (#0E9F8E), so the page reads as "one task chosen".
  Beside the notebook: a clear glass of water catching the light.
  3. Behind the desk on the left: one simple window with a soft yellow sun just
  rising over a low horizon line, warm light falling across the desk. One small
  green plant on the sill is fine.
  There is NO phone, NO laptop, NO screen of any kind anywhere in the scene. No
  clock with numbers. The rest of the canvas stays plain warm apricot.

  Title treatment overlaid across the upper area, centered, with clear space beneath
  it before the scene begins, two lines, VERBATIM text:
  line 1, "Productive Morning Routine:" in a playful hand-lettered brush script, with
  the word "Productive" in bright red (#E11D48) and "Morning Routine:" in near-black
  (#222222);
  line 2, "7 Simple Steps to Build Yours" in a bold rounded sans (Montserrat or
  similar), near-black (#222222), noticeably smaller than line 1.
  Small lowercase wordmark "olgapak.com" in the bottom-left corner, near-black at
  about 55% opacity, unobtrusive.

  Palette: warm apricot/peach ground, natural wood tones, cream paper white,
  near-black #222222 text and ink, soft teal #0E9F8E and mustard as small accents
  only, a little greenery. Brand blue #2B6CB0 may appear only as a tiny detail (e.g.
  the pen), never as the background or a dominant fill. Mood: clean, approachable,
  confident, productive, quietly optimistic. Flat vector, crisp shapes, subtle warm
  shading, gentle warm light, no heavy gradients, no line-art-only outlines.
  ```
- **Aspect ratio:** `3:2` (matches the featured-slot default in `blog-ops/profile/image-style.md` §Aspect ratio defaults)
- **Negative prompt** (if the tool supports it):
  ```
  no phone, no smartphone, no laptop, no tablet, no screens, no app UI chrome, no
  cold blue or navy background, no monochrome brand-blue scene, no split screen, no
  before/after panels, no process flow, no arrows, no numbered callouts or badges, no
  infographic panels, no clock face with numbers, no extra text beyond the two title
  lines and the olgapak.com wordmark, no misspelled or garbled lettering, no stray
  logos or brand marks, no extra watermarks, no extra limbs or fingers, no distorted
  hands, no photorealism, no cluttered desk, no dark night scene
  ```
- **Text-in-image warning:** the title must render VERBATIM as "Productive Morning Routine: 7 Simple Steps to Build Yours". gpt-image is usually reliable with text, but check every word and the colon on the output; if any letter is garbled or a word changed, regenerate, or as a last resort generate without the title and overlay it in post (hand-lettered script line 1, Montserrat bold line 2, "Productive" in #E11D48).
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered title over flat-vector illustration on one bright saturated background, one red accent word, recurring female character) and §Illustration palette (warm, wood-toned; the `finished-notebooks-shelf` look in `blog-ops/reference/image-samples/`).
- **Source data (if any):** none, illustrative only.
- **Why this and not remotion/screenshot:** featured is locked to `ai-prompt` by config and `custom-instructions.md`; a warm character scene is exactly what the house hero style is.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (logo + wordmark per `blog-ops/profile/image-style.md`; sizing, opacity, and position per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`). Never inline a watermark, never reposition. The component is the single point of brand-mark control.
- **Own-site/product UI screenshots:** skip the watermark, the UI chrome is already self-branding.
- **External screenshots:** this blog's logo bottom-left at 55–80% opacity, applied post-capture.
- **`ai-prompt` slots:** the featured prompt asks for the small `olgapak.com` wordmark bottom-left; Image 1 (in-post scene) carries none, matching prior in-post illustrations.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph (so the heading introduces the section, the paragraph frames the point, and the image illustrates it). The exception is an image that closes evidence cited in the prior section's prose, that may sit before the next H2.

**Table-redundancy rule:** never spec a chart-style image (`remotion` or `ai-prompt`) whose content is already presented as a markdown table in the same section, unless the chart adds something the table can't (color coding, callout arrows, computed totals, derivative chart shape).

**Values-in-text rule:** every data image's numbers, labels and values also appear as text in the same section (preceding sentence, table or caption). Alt text does not count. Fill `Values stated in text at:` for each data slot.

### Image 1, after H2 "Step 1: Start your routine the night before" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Calm evening prep scene in flat-vector style: a phone charging on a hallway shelf outside the bedroom, clothes laid out on a chair, a glass of water, and a sticky note with three tasks. Type: ai-prompt. Suggested filename: evening-prep-night-before.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm evening hallway-and-bedroom-doorway scene: a phone charging on a wooden hallway shelf outside the open bedroom door, tomorrow's clothes folded on a chair, a glass of water ready, and a sticky note with three short task lines stuck beside it.
- **Suggested filename:** `evening-prep-night-before.png`
- **Alt text:** `Evening prep: phone charging in the hallway, clothes laid out, water ready, sticky note with three tasks`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via ${CLAUDE_PLUGIN_ROOT}/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector editorial illustration of a calm evening-prep moment, warm
  and inviting, in the olgapak.com in-post illustration style: natural wood tones,
  cream paper, warm lamp light, a little greenery.

  Composition, straight-on view with a slight depth, generous breathing room, no
  people:
  - Left third: a narrow hallway with a simple natural-wood wall shelf. On the
  shelf, a smartphone lies face-up but dark, plugged into a short white charging
  cable, a tiny soft teal (#0E9F8E) charging glow at its edge. Beside it, one small
  potted plant.
  - Right two thirds: an open bedroom doorway framed in warm cream, a glimpse of a
  made bed with a soft mustard blanket. Just inside the doorway, a simple wooden
  chair with tomorrow's clothes neatly folded on the seat (a sweater and trousers),
  and on a little side table next to it a clear glass of water.
  - On the doorframe at eye level: one square pale-yellow sticky note with exactly
  THREE short WORDLESS handwritten squiggle lines in near-black ink, each with a
  small empty tick box in front.
  - A warm table lamp casts soft amber light across the scene; the window, if
  visible, shows a dusky evening sky.

  Background colour: warm cream / soft terracotta wall tones (vary from the
  featured image's apricot). Palette: natural wood, cream paper white, mustard,
  muted terracotta, near-black #222222 ink, soft teal #0E9F8E as one small accent.
  Brand blue #2B6CB0 only as a tiny detail if at all, never the dominant colour.
  Mood: clean, approachable, calm, quietly organized. Flat vector, crisp shapes,
  subtle warm shading.
  ```
- **Aspect ratio:** `3:2` (in-post default per `blog-ops/profile/image-style.md`)
- **Negative prompt** (if the tool supports it):
  ```
  no people, no readable text or real words anywhere (squiggles only), no title
  lettering, no watermark, no logos or brand marks on the phone, no app UI or
  notifications on the phone screen, no laptop, no TV, no cold blue or navy palette,
  no monochrome brand-blue scene, no clutter, no mess, no night-time darkness, no
  photorealism, no distorted furniture perspective
  ```
- **Text-in-image warning:** none needed; the sticky-note lines are deliberately wordless squiggles. If the model writes real words on the note, regenerate.
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm, wood-toned `finished-notebooks-shelf` look; avoid the cold `student-desk-spiral` / `rocketbook-workflow` feel).
- **Source data (if any):** none, illustrative only (depicts the 10-minute evening checklist in the same section).
- **Why this and not remotion/screenshot:** a warm, concept-literal scene illustration; `custom-instructions.md` routes scenes to `ai-prompt`, and there is nothing real to screenshot.

---

### Image 2, after H2 "Step 5: Protect one focus block" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Simple left-to-right flow diagram of the 7 steps: night before, one goal, 1-2 habits, phone away, focus block, 10-minute backup, 2-week test. Type: remotion. Suggested filename: morning-routine-7-steps-flow.png]`
- **Type:** `remotion`
- **Concept:** The 7 steps as numbered cards reading left to right over two rows (steps 1 to 4, then 5 to 7), with step 5 "Protect one focus block" as the single accent-highlighted outcome card.
- **Suggested filename:** `morning-routine-7-steps-flow.png`
- **Alt text:** `Seven-step morning routine flow, from prepping the night before to a two-week test, focus block highlighted`

#### Production spec

##### If `remotion`

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `productive-morning-routine--morning-routine-7-steps-flow` (from `composition-id.mjs`)
- **Component file:** `tools/remotion/src/productive-morning-routine--morning-routine-7-steps-flow.tsx`, exporting `C_productive_morning_routine__morning_routine_7_steps_flow`; register in `src/Root.tsx` with `component={C_productive_morning_routine__morning_routine_7_steps_flow}`.
- **Canvas dimensions:** 1800 × 1200 (`CANVAS`), final render at `--scale=2`.
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: two horizontal flow rows inside `SAFE_MARGIN`. Row 1 (vertical centre y≈380): cards 1, 2, 3, 4, left to right. Row 2 (vertical centre y≈780): cards 5, 6, 7, left-aligned under cards 1 to 3 so the eye returns to the left like reading a line of text. A single muted elbow connector runs from the right edge of card 4 down and back left into card 5 (down, left along a gutter at y≈580, down into the top of card 5). All cards identical size (≈ 330 × 220), identical fixed gaps (≈ 100) with fixed-length arrows centred in each gap; map positions via `xAt(col)` / `yAt(row)` helpers, never hand-placed. Keep everything above y≈1040 and clear of the bottom-left watermark.
  - Card content: a round number badge top-left (`fonts.mono`, ≈ 34px, `palette.primary` text on a light primary tint), then the step label below in `fonts.sans` semibold ≈ 36px, wrapping to two lines at most, centred.
  - Copy (exact strings, match the draft's sentence after the placeholder):
    1. `Prep the night before`
    2. `Pick one goal`
    3. `Start 1 or 2 habits`
    4. `Park the phone`
    5. `Protect one focus block`
    6. `Keep a 10-minute backup`
    7. `Test it for two weeks`
  - Palette: per `blog-ops/profile/image-style.md` tokens via `theme.ts`; background `palette.background`, cards `palette.surface` with `palette.border` edge. Card 5 only uses the emphasis/outcome variant (light `palette.accent` tint, `2px solid palette.accent`), because the section says it is "the step the whole routine exists for". No `palette.warn` anywhere.
  - Typography: `fonts.sans` (Montserrat) for labels, `fonts.mono` for the step numbers.
  - Icons / SVG assets: none (`tools/remotion/public/` does not exist; no assets needed).
  - Arrows / connectors: sequential step connectors per adapter §Arrow conventions: `palette.muted`, `strokeWidth={2.5}`, solid, arrowheads, fixed identical length. The arrow entering card 5 (the elbow) and the arrow leaving card 4 stay muted too; accent is carried by card 5's border only.
  - Card recipe: standard neutral card for 1 to 4, 6, 7; emphasis/outcome variant for 5.
- **Source data (if any):** the post's own step list (draft-v2 H2s "Step 1" to "Step 7"); no `facts.md` numbers involved.
- **Values stated in text at:** "The 7 steps in order: prep the night before, pick one goal..." (the sentence directly after the placeholder, same section). Card labels match it word for word.
- **Reference composition to mimic:** `tools/remotion/src/FiveStepWorkflow.tsx` (numbered step-card flow, theme imports, connector helpers).
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still productive-morning-routine--morning-routine-7-steps-flow --output=out/preview-7-steps-flow-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still productive-morning-routine--morning-routine-7-steps-flow --scale=2 \
    --output="$REPO/blog-ops/assets/productive-morning-routine/morning-routine-7-steps-flow.png"
  ```
- **Why this and not a real screenshot:** a process diagram with exact step labels; nothing to screenshot, and `remotion` renders the text exactly.

---

### Image 3, after H2 "Two sample productive morning routines" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Side-by-side timeline of two morning routines. Left, the 30-minute routine: 0:00 water and daylight, 0:05 get dressed, 0:10 breakfast, 0:20 review first task, 0:30 focus block. Right, the 60-minute routine: 0:00 water and coffee (just existing), 0:20 get dressed, 0:25 15-minute walk, 0:40 breakfast, 0:55 review first task, 1:00 focus block. Type: remotion. Suggested filename: sample-morning-routines-timeline.png]`
- **Type:** `remotion`
- **Concept:** Two vertical timeline columns on one shared 0:00 to 1:00 time axis, so the 30-minute routine visibly reaches its teal focus block halfway down while the 60-minute routine reaches it at the bottom, with the first 20 minutes of the slow start shown as a muted "just existing" buffer.
- **Suggested filename:** `sample-morning-routines-timeline.png`
- **Alt text:** `Two morning routine timelines side by side: 30 minutes and 60 minutes, each ending in a focus block`

#### Production spec

##### If `remotion`

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `productive-morning-routine--sample-morning-routines-timeline` (from `composition-id.mjs`)
- **Component file:** `tools/remotion/src/productive-morning-routine--sample-morning-routines-timeline.tsx`, exporting `C_productive_morning_routine__sample_morning_routines_timeline`; register in `src/Root.tsx`.
- **Canvas dimensions:** 1800 × 1200 (`CANVAS`), final render at `--scale=2`.
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: a shared vertical time axis on the far left (x≈200) with mono tick labels `0:00`, `0:10`, `0:20`, `0:30`, `0:40`, `0:50`, `1:00` and light gridlines across both columns. `yAt(minute)` maps 0 → y≈260 and 60 → y≈940 (≈ 11.3 px/min). Two columns: left centred x≈720, right centred x≈1330, each ≈ 480 wide, with a 1px `palette.border` divider at x≈1025. Column headers as centred section-tag pills at y≈180: left `30-MINUTE ROUTINE`, right `60-MINUTE ROUTINE` (accent tint + accent text both, uppercase, bold). Each activity is a block spanning its start to end minute (`yAt(start)` to `yAt(end)`, 6px gap between blocks), label left-aligned inside the block with its start time in mono before it. The focus block in each column is a ≈ 70px-tall emphasis card starting at its start minute (left at `yAt(30)`, right at `yAt(60)`), so the left column's empty space below 0:30 shows the time saved. Right column ends by y≈1020. Bottom-centre (y≈1070, offset right to stay clear of the bottom-left watermark): one muted chip `Phone stays in another room until the focus block is done`.
  - Copy (exact strings, block labels per the draft's H3 lists):
    - Left (30-minute): `0:00 Water + daylight` (0 to 5), `0:05 Get dressed` (5 to 10), `0:10 Breakfast` (10 to 20), `0:20 Reread first task` (20 to 30), `0:30 Focus block starts` (emphasis card).
    - Right (60-minute): `0:00 Water + coffee, "just existing"` (0 to 20, buffer style), `0:20 Get dressed` (20 to 25), `0:25 15-minute walk outside` (25 to 40), `0:40 Breakfast` (40 to 55), `0:55 Reread first task` (55 to 60), `1:00 Focus block starts` (emphasis card).
    - The 5-minute blocks (≈ 57px tall) take a single 26px label line; keep labels one line, widen the column rather than shrinking type.
  - Palette: theme tokens only. Activity blocks `palette.surface` with `palette.border` edge; the "just existing" buffer block in a muted tint (`rgba(107,114,128,0.10)`) with a dashed `palette.border` edge and `palette.muted` label so it reads as slack, not a task (not reduced opacity). Both focus-block cards use the emphasis variant (`palette.accent` tint + 2px accent border). This is one role ("the outcome") shown in both columns, which is the deliberate exception to one-accent-card; nothing else is accent. No `palette.warn`.
  - Typography: `fonts.mono` for times and tick labels, `fonts.sans` for activity labels and headers.
  - Icons / SVG assets: none.
  - Arrows / connectors: none; position on the shared axis carries the comparison.
  - Card recipe: standard card for activity blocks (tighter padding, e.g. `10px 18px`, radius 10), emphasis/outcome variant for the focus blocks.
- **Source data (if any):** hardcoded values from the draft's own example routines (draft-v2 H3 "The 30-minute routine" and "The 60-minute routine"); illustrative examples, not `facts.md` data.
- **Values stated in text at:** the two H3 bullet lists directly below in the same section ("0:00: Drink a glass of water and get some daylight..." and "0:00: Water and coffee, with no agenda..."), plus "In both, the phone stays in another room until the focus block is done." Every time and label in the image appears there.
- **Reference composition to mimic:** `tools/remotion/src/PackedVsBufferedDay.tsx` (two columns on a shared `yAt(hour)` time axis, column tints, divider; reuse its coordinate-frame pattern with minutes instead of hours).
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still productive-morning-routine--sample-morning-routines-timeline --output=out/preview-routines-timeline-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still productive-morning-routine--sample-morning-routines-timeline --scale=2 \
    --output="$REPO/blog-ops/assets/productive-morning-routine/sample-morning-routines-timeline.png"
  ```
- **Why this and not a real screenshot:** a data-accurate time comparison with exact times; nothing to capture, and `remotion` renders the times exactly.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/productive-morning-routine/
├── featured.png
├── evening-prep-night-before.png
├── morning-routine-7-steps-flow.png
└── sample-morning-routines-timeline.png
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Studio: `npx remotion studio --port=3003`. Register a `<Still>` in `src/Root.tsx`, write the component in `src/<id>.tsx`, iterate via `npx remotion still <id> --output=out/preview-...png` (throwaway), final export via `npx remotion still <id> --scale=2 --output=blog-ops/assets/productive-morning-routine/<filename>`. Use `<BlogWatermark />` and the fonts/palette locked in `blog-ops/profile/image-style.md`. In a console worktree, run `npm ci` in `tools/remotion` first, and `tsc --noEmit` after editing `Root.tsx`.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md` (+ `codex.md` for dispatch).
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slots use `<BlogWatermark />`. Output format: PNG for all four slots.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `broken-link-example.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec (Stage 4a.5 generates all four automatically; only `failed` slots need a human).
2. Save to `blog-ops/assets/productive-morning-routine/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Editor notes

- Slot count matches: 3 `[IMAGE:]` placeholders in `draft-v2.md`, 3 in-post slots in the outline's image placement plan. No featured duplicate inline.
- Featured concept changed from the outline: the outline's "phone face-down far away on the desk" was dropped, because two recent covers (dopamine-detox, screen-free-hobbies) already used a face-down phone. The cover is now a scene-vignette with no phone at all. Override at Gate 2 if you want the outline's version.
- Image 2 placement (judgment call, not changed): a whole-post 7-step overview sits inside the Step 5 section. It reads fine because the recap sentence follows it, but it would sit more naturally after Key takeaways or at the end of Step 7. Moving it is a draft edit for the editor or human; I left the placeholder as written.
- Image 3 repeats the two H3 bullet lists below it. They are lists, not a markdown table, so the table-redundancy rule does not strictly apply, and the shared time axis adds a comparison the lists can't show (the 30-minute version hits the focus block at the halfway mark). Keep it.
- Image 3 labels use the draft's "Reread first task" rather than the placeholder's "review first task", so image text matches the post text.
- No chart needs data from `facts.md`; no slot needs a caption.
