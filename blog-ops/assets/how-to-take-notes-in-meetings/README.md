# Images: how-to-take-notes-in-meetings

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/how-to-take-notes-in-meetings/outline.md` (image placement plan), `blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/how-to-take-notes-in-meetings/facts.md` (for chart/diagram data), `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: the `image-builder` agent at Stage 4a.5 (and the human for anything it cannot render).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `2`
  - AI-generated (`ai-prompt`): `3`
  - Screenshots: `0`
- File destination: `blog-ops/assets/how-to-take-notes-in-meetings/`

> **Read this before rendering either Remotion slot.** `tools/remotion/src/Root.tsx` does NOT parse in this tree: the `<Still id="FourCorePagesMap" ...>` element at line 81 is missing its `width={CANVAS.width} height={CANVAS.height} />` closing line, so the next `<Still>` opens before it closes. Until that one line is added, **no composition in this project renders**, including this post's two. Exact fix in §Editor notes and in the Image 2 production spec.

## Featured image

> **Frontmatter only.** The `wordpress-rest` adapter's frontmatter template defines no cover/heroImage field: this asset ships as a WordPress media upload attached via `featured_media` at Stage 4b.5, which is why the filename is fixed at `featured.png`. Never duplicate it as an in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`. From `images.featured_default` in `blog-ops/config.yaml`, and reinforced as a standing rule by `blog-ops/profile/custom-instructions.md` §Image style (the featured slot is always `ai-prompt`, a hand-lettered hero over a flat-vector illustration). `ai-prompt` is a member of `images.enabled` (`[ai-prompt, screenshot, remotion]`). **Do not flip this slot to `remotion`.**
- **Dimensions:** 3:2, per `image-style.md` §Aspect ratio defaults. Target roughly 1800 x 1200 px. Keep the title block and every object inside the central 80% vertically so the 1.91:1 OG crop slices only empty ground.
- **Concept:** One oversized funnel standing alone on a flat coloured ground: a loose drift of empty speech bubbles pours into its wide mouth, and a single small note card with three short ink strokes drops out of the narrow spout, the post's whole argument (a room full of talk, filtered down to a few lines worth keeping) in one glance.
- **Archetype:** `object-metaphor`. One oversized central object carrying the thesis, no panels, no cards, no flow chain, no callouts. It fits because this post's argument is a filter, not a comparison and not a list: the funnel says "most of what is said should not be written down" without a single label. **Ledger check:** the union of `blog-ops/featured-log/*.md` and the legacy read-only `blog-ops/featured-log.md`, sorted by date, ends with `2026-08-26 bullet-journal-for-beginners = big-number` and `2026-09-02 screen-free-hobbies = negative-space`, so **`big-number` and `negative-space` are off limits**. Alternatives weighed and rejected: `split-contrast` (a dense scribbled page beside a four-line page is an honest statement of the thesis, but the previous split-contrast cover, `digital-vs-paper-notes`, is already two flat objects side by side on a flat ground, and this would have been a near-clone of it); `pattern-break` (a grid of speech bubbles with one marked is a good fit, but the last two pattern-break covers, `best-pens-for-note-taking` and `how-to-reduce-screen-time`, are both "grid of near-identical objects, one different", so the motif is the most-spent one in the library); `scene-vignette` (a woman at a meeting table is the obvious cover, and it is exactly what in-post Images 1 and 3 already are, so the cover would duplicate them); `diagram-lite` (unused so far, but this concept needs no flow and a card-and-arrow cover is the sameness the archetype rotation exists to prevent). The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `An oversized funnel taking in a drift of empty speech bubbles and dropping out one small note card`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector blog hero illustration on a single flat light clay-rose background (roughly #F0B9AC), no gradient, no texture, no room, no table, no horizon. The objects float on plain flat colour.

  Composition, object-metaphor archetype: ONE oversized central object, seen straight on, centred in the lower two thirds of the frame. No panels, no cards, no grid, no arrows, no charts, no numbered callouts, no borders, no second scene.

  The object is a large wide-mouthed funnel, drawn as a warm cream enamel funnel with a thin walnut-brown rim and a soft worn edge, tall and clearly the biggest thing in the picture, with a short narrow spout at the bottom.

  Falling into the wide mouth from the upper left, a loose drift of seven or eight small rounded speech bubbles in muted grey-blue, overlapping slightly, all of them COMPLETELY EMPTY: no words, no letters, no dots, no squiggles inside them. Some tumble in, one or two glance off the rim and drift away past the funnel's left side.

  Below the spout, one small cream index card catching a single drop's worth of output: on it, three short horizontal ink strokes (abstract handwriting, not readable words) and one small hand-drawn red star in its top corner. The card is small, tidy, and clearly the only thing that came through.

  Upper third of the frame, on clear empty ground above the funnel, the post title rendered EXACTLY as
  How to Take Notes in Meetings (Template + 5-Minute Habit)
  centred and wrapped on two lines, the first line "How to Take Notes in Meetings" in a playful hand-lettered script and the second line "(Template + 5-Minute Habit)" in a bold rounded sans, dark near-black (#222222), with only the single word "Meetings" coloured deep red (#C4162B) as the one accent.

  Palette and mood: warm, calm, a little witty. Light clay-rose ground, cream enamel, walnut brown, muted grey-blue bubbles, one deep red star. Teal (#0E9F8E) appears nowhere or only as a hairline detail on the funnel rim. Never a blue background, never a blue-dominant scene, no office photo, no cold grey. Clean bold outlines, soft cel shading, flat colour, generous empty space around the funnel.

  Bottom-left corner: the small lowercase wordmark olgapak.com in a plain rounded sans, dark, at about 55% opacity.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; also the featured-slot default)
- **Negative prompt** (if the tool supports it):
  ```
  text inside the speech bubbles, words or letters on the note card, extra captions, labels, subtitles or taglines beyond the title, garbled or misspelled lettering, duplicate title, people, faces, hands, extra limbs, extra or malformed fingers, meeting room, conference table, chairs, laptop, phone, whiteboard, office background, photorealism, 3D render, stock photo, glossy marketing render, gradient background, blue-dominant background, navy, royal blue, teal, sage green, marigold, amber, orange, terracotta, lavender or sand-oat ground, dark or moody grading, heavy black shadows, clutter, more than three object groups, watermark other than the olgapak.com wordmark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script line plus bold rounded sans line, one red accent word, `olgapak.com` wordmark, one flat single-colour ground). Prior covers for family resemblance only, deliberately NOT for composition or ground hue: `blog-ops/assets/screen-free-hobbies/featured.png` (sand-oat, `negative-space`), `blog-ops/assets/bullet-journal-for-beginners/featured.png` (orange, `big-number`), `blog-ops/assets/digital-vs-paper-notes/featured.png` (lavender, `split-contrast`, the two-flat-objects layout this cover must not resemble), `blog-ops/assets/how-to-plan-your-week/featured.png` (cream, `scene-vignette`).
- **Source data (if any):** none. The concept is editorial; no number appears in the image except the "5" inside the title string.
- **Text-in-image warning:** this slot needs the post title rendered legibly and verbatim. After generation, read the PNG and check it character by character against `How to Take Notes in Meetings (Template + 5-Minute Habit)`, including the parentheses, the plus sign, and the hyphen in "5-Minute", plus the `olgapak.com` wordmark. If one character is wrong, re-generate once; if it is still wrong, the fallback is a human text overlay on a clean untitled render, never shipping garbled lettering. No other text may appear: the speech bubbles and the note card must stay wordless, which is also what keeps the model from inventing fake meeting copy.
- **Why this and not remotion/screenshot:** `images.featured_default` plus a standing custom instruction lock this slot to `ai-prompt`, and this blog's whole hero convention is the hand-lettered illustrated cover, which Remotion's flat geometric language does not produce. Nothing exists to screenshot.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md`; sizing, opacity, and position per the remotion adapter). Never inline a watermark, never reposition.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt itself (bottom-left, ~55% opacity), matching the existing hero library. Section illustrations follow the library convention and carry NO wordmark.
- **Own-site/product UI screenshots:** none in this post.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** every slot below already sits after its section heading and the section's first body paragraph in `draft-v1.md` (lines 27, 41, 86, 107). Do not move the placeholders and do not edit their text.

**Character continuity (Images 1 and 3).** These two illustrations are a deliberate before/after pair: the same woman, the same meeting room, the same clothes, the same camera angle, first drowning in transcription and then calm. Both prompts below carry an identical character-and-room block, word for word. If one of the two is re-generated, re-read the other and keep them matched, a pair that does not read as the same person loses the whole point of the second image.

### Image 1, after H2 "Why your meeting notes are not working" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A person at a meeting table typing furiously into a laptop while the conversation on the other side of the table has already moved two topics ahead, speech bubbles floating past them unrecorded. Type: ai-prompt. Suggested filename: transcription-trap.png]`
- **Type:** `ai-prompt`
- **Concept:** A woman hunched over a laptop typing hard at a warm wooden meeting table while two colleagues opposite talk on without her, a stream of empty speech bubbles drifting past her head and off the edge of the frame uncaught.
- **Suggested filename:** `transcription-trap.png`
- **Alt text:** `A woman typing hard at a meeting table while speech bubbles drift past her uncaught`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: a slightly high three-quarter view across a warm walnut meeting table, the near edge of the table running along the bottom of the frame. Left of centre and closest to the camera, a woman in her mid thirties with dark hair in a loose bun and a mustard-ochre knit sweater sits hunched forward over an open silver laptop, shoulders raised, elbows in, both hands typing fast, eyes locked on her own screen. Small motion ticks around her fingers show the speed. A closed paper notebook and a pen sit ignored beside the laptop.

  Across the table, further from the camera and slightly smaller, two colleagues mid-conversation with each other: one leaning in and gesturing with an open hand, the other nodding. Neither is looking at her.

  Between and above them, a stream of five or six rounded speech bubbles in muted grey-blue drifts from the colleagues, arcs over the woman's head, and floats out past the right edge of the frame, getting fainter as it goes. Every bubble is COMPLETELY EMPTY: no words, no letters, no dots or squiggles inside.

  Background: a plain warm cream office wall, a single trailing pot plant on a shelf at the upper left, soft daylight from the right. Uncluttered, generous empty space in the upper third.

  Palette and mood: warm and ordinary, slightly stressful but not grim. Walnut table, warm cream wall, mustard-ochre sweater, muted sage on one colleague's shirt, muted grey-blue bubbles. Brand blue (#2B6CB0) only as a thin detail such as the notebook's elastic. Never a blue background, never a blue-dominant scene, no cold grey conference room, no fluorescent light. Clean bold outlines, soft cel shading.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions or numbers, words inside the speech bubbles, readable text on the laptop screen, UI chrome, app windows, slide decks, whiteboard writing, wall clocks with numerals, extra limbs, extra or malformed fingers, six fingers, warped hands, more than three people, crowd, photorealism, 3D render, stock photo, corporate stock imagery, cold grey conference room, glass wall office, fluorescent lighting, blue-dominant scene, monochrome blue, dark or moody grading, brand logos, laptop brand marks, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (one illustration per H2 section, same flat-vector look as the hero, concept-literal) and §Illustration palette (warm wood, cream, greenery; explicitly not the cold blue of `student-desk-spiral`). The recurring female character matches the one on `blog-ops/assets/how-to-plan-your-week/featured.png`.
- **Source data (if any):** none rendered. The scene illustrates the reader quote carried in this section's prose ("By the time I'm able to record what was said from one topic, they've already moved onto the next topic", `facts.md` §Quotes), but no quote appears in the image.
- **Text-in-image warning:** this image must carry NO text at all. The empty speech bubbles and the laptop screen are exactly where a model wants to add words, and any lettering it invents will be garbled and will also put unsourced meeting copy in front of the reader. Any visible lettering is a defect: re-generate.
- **Why this and not remotion/screenshot:** it is a human scene with no data content and no exact strings, which is the case `custom-instructions.md` §Image style reserves for `ai-prompt`; Remotion's flat geometric language cannot draw it. There is no real screen to capture, and faking one would break the screenshot rules.

---

### Image 2, after H2 "What to capture: the four-box meeting notes template" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A clean labeled diagram of the four-box meeting notes template, four equal quadrants headed Decisions, Action items, Open questions, and Context, with one short example line inside each. Type: remotion. Suggested filename: four-box-meeting-notes-template.png]`
- **Type:** `remotion`
- **Concept:** The template itself as a 2x2 grid of four identical cards headed Decisions, Action items, Open questions and Context, each carrying one worked example line lifted verbatim from the draft, with the post's filter rule as a single accent pill beneath the grid.
- **Suggested filename:** `four-box-meeting-notes-template.png`
- **Alt text:** `A four-box meeting notes grid: decisions, action items, open questions and context, one example each`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. This is an IN-POST slot: **NO title, NO subtitle.**

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `FourBoxMeetingNotesTemplate`
- **Component file:** `tools/remotion/src/FourBoxMeetingNotesTemplate.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token, matching every other composition in this project); final render at `--scale=2`.
- **PREREQUISITE, do this first:** repair `tools/remotion/src/Root.tsx` before registering anything. Line 81 reads
  ```tsx
  <Still id="FourCorePagesMap" component={FourCorePagesMap}
  ```
  and the next line opens a new `<Still>` instead of closing it. Insert the missing line immediately after it:
  ```tsx
      width={CANVAS.width} height={CANVAS.height} />
  ```
  Then register this slot (and Image 4's) with the matching imports at the top of the file:
  ```tsx
  <Still id="FourBoxMeetingNotesTemplate" component={FourBoxMeetingNotesTemplate}
    width={CANVAS.width} height={CANVAS.height} />
  ```
  `component` takes the component reference, never a JSX element.
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` imported from `./BlogWatermark` and left untouched, `palette.background` canvas, all content inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - **Fixed geometry** (module constants, computed, never eyeballed, per the adapter's mapping rule):
    - `GRID_LEFT = SAFE_MARGIN` (120), inner width `1560`
    - `CARD_GAP = 40`, `CARD_W = (1560 - CARD_GAP) / 2 = 760`, `CARD_H = 380`
    - `GRID_TOP = 130`; `xAt = (col) => GRID_LEFT + col * (CARD_W + CARD_GAP)` (120, 920); `yAt = (row) => GRID_TOP + row * (CARD_H + CARD_GAP)` (130, 550); grid bottom = 930
    - Accent pill centred at `CANVAS.width / 2`, top 985, height 70 (bottom 1055, leaving ~63 px clear above the watermark's top edge at ~1118)
  - **Layout, top to bottom:**
    1. **2x2 card grid**, reading order Decisions (top-left), Action items (top-right), Open questions (bottom-left), Context (bottom-right). This spatial arrangement is the whole point of the image: the draft's code block below it is a linear list, and the diagram is what makes "four boxes" look like four boxes.
    2. Inside every card, stacked with `padding: "34px 36px"` and left-aligned: **heading** (`fonts.sans`, 46, weight 700, `palette.text`, `letterSpacing: 0.4`); then an optional **muted sub-line** (`fonts.sans`, 26, `palette.muted`, `marginTop: 8`), used only on Action items; then a **1px `palette.border` divider** with 26 px of clearance above and below; then the **example line** (`fonts.mono`, 26, `palette.muted`, `lineHeight: 1.45`, wrapping to at most two lines, carried as an explicit array of strings so no line ends on an orphan word).
    3. **One accent pill** below the grid, centred: background `rgba(14,159,142,0.10)`, text `palette.accent`, `fonts.sans`, 30, weight 700, `letterSpacing: 1.6`, `padding: "18px 46px"`, `borderRadius: 999`, `whiteSpace: nowrap`.
    4. **`<BlogWatermark />`** last.
  - **Copy, exact strings** (no em dashes anywhere, per the adapter's §Typography glyph rule):
    - Card 1 heading `Decisions`, example `- Launch moved to 14 October, agreed by Sam`
    - Card 2 heading `Action items`, sub-line `who / what / by when`, example `- Priya / send the revised budget / Friday 12th`
    - Card 3 heading `Open questions`, example `- Do we still need legal sign-off on the` / `new landing page copy?` (two lines)
    - Card 4 heading `Context`, example `- Date moved because the printer lost two` / `weeks, not because design slipped` (two lines)
    - Accent pill: `IF A SENTENCE FITS NONE OF THE FOUR, IT DOES NOT GET WRITTEN DOWN`
  - Palette: canvas `palette.background`; **all four cards neutral and identical**, `palette.surface` with `1px solid palette.border`, radius 16, the standard two-layer shadow. No emphasis variant and no warning variant on any card: the four boxes are equal parts of one template, and tinting one would tell the reader that box matters most, which the section explicitly denies. `palette.accent` appears exactly once, in the pill, which belongs to no individual box. `palette.warn` appears nowhere.
  - Typography: `fonts.sans` for headings, sub-line and pill; `fonts.mono` for the four example lines, so a captured note reads as data rather than prose.
  - Icons / SVG assets: **none**. `tools/remotion/public/` is empty; do not add an asset for this slot.
  - Arrows / connectors: none. The four boxes are simultaneous, not sequential, and an arrow would invent an order the post does not teach.
  - Card recipe to use: neutral variant, four times (adapter §Card design language).
- **Source data (if any):** no statistics. All four example lines are lifted verbatim from the worked example block in `draft-v1.md` §"What to capture: the four-box meeting notes template" (lines 43 to 55). Hardcoded illustrative copy sourced from the draft, not from `facts.md`. Nothing here needs fresh data.
- **Reference composition to mimic:** `tools/remotion/src/CostTierKey.tsx` for the discipline (fixed computed constants, a row of deliberately identical neutral cards, exactly one centred accent pill that belongs to no single item, explicit line-break arrays) and `tools/remotion/src/FourCorePagesMap.tsx` for the `xAt` helper pattern and theme/watermark imports. Layout differs on purpose: a 2x2 grid, not a horizontal row.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FourBoxMeetingNotesTemplate --output=out/preview-four-box-v1.png
  ```
- **Final export command** (writes into the CURRENT tree; `REPO` derived dynamically so a worktree run does not export into the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FourBoxMeetingNotesTemplate --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-take-notes-in-meetings/four-box-meeting-notes-template.png"
  ```
- **Why this and not a real screenshot or ai-prompt:** the image is nine exact strings, including a date, a name and a deadline, and its value dies the moment a letter is wrong. Remotion renders real text and guarantees it; an AI generator does not. There is nothing on a screen to capture.

---

### Image 3, after H2 "During the meeting: write less, catch more" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The same person from the earlier illustration, now relaxed, listening to the room with one short line written in a notebook in front of them. Type: ai-prompt. Suggested filename: write-less-listen-more.png]`
- **Type:** `ai-prompt`
- **Concept:** The same woman at the same meeting table, laptop closed and pushed aside, sitting back and looking at the colleague who is speaking, with one short line and a small star written in an open paper notebook in front of her.
- **Suggested filename:** `write-less-listen-more.png`
- **Alt text:** `The same woman sitting back and listening, one short line written in the notebook in front of her`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere. It is the calm counterpart to an earlier illustration and must show the SAME woman in the SAME room from the SAME angle.

  Composition: a slightly high three-quarter view across a warm walnut meeting table, the near edge of the table running along the bottom of the frame. Left of centre and closest to the camera, the same woman in her mid thirties with dark hair in a loose bun and a mustard-ochre knit sweater, now sitting back in her chair with relaxed shoulders, head turned toward the person speaking, a small easy half-smile, one hand resting on the table holding a pen loosely. The silver laptop is CLOSED and pushed to the side, out of her way. In front of her, an open paper notebook with a single short line of abstract ink strokes (not readable words) on the page and one small hand-drawn star in the margin beside it. The rest of the page is blank.

  Across the table, further from the camera and slightly smaller, the same two colleagues: one mid-sentence with an open hand, the other nodding. This time the woman is looking straight at the speaker.

  Between them, just two rounded speech bubbles in muted grey-blue, small and unhurried, drifting toward her rather than past her. Both COMPLETELY EMPTY: no words, no letters, no dots or squiggles inside.

  Background: the same plain warm cream office wall, the same single trailing pot plant on a shelf at the upper left, soft daylight from the right, a touch warmer than before. Uncluttered, generous empty space in the upper third.

  Palette and mood: warm, calm, unhurried. Walnut table, warm cream wall, mustard-ochre sweater, muted sage on one colleague's shirt, cream notebook paper, muted grey-blue bubbles, one small red star. Brand blue (#2B6CB0) only as a thin detail such as the pen barrel. Never a blue background, never a blue-dominant scene, no cold grey conference room. Clean bold outlines, soft cel shading.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, readable handwriting, labels, captions or numbers, words inside the speech bubbles, open laptop, visible laptop screen, UI chrome, phone, tablet, whiteboard writing, wall clocks with numerals, extra limbs, extra or malformed fingers, six fingers, warped hands, a different woman, different hair, different sweater colour, more than three people, photorealism, 3D render, stock photo, corporate stock imagery, cold grey conference room, fluorescent lighting, blue-dominant scene, monochrome blue, dark or moody grading, brand logos, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions and §Illustration palette, plus **this post's own `transcription-trap.png`**, which is the direct continuity reference: same character, room, wall, plant, camera angle and light direction, only the posture and the density of the page change.
- **Source data (if any):** none. The single short line and the margin star are the draft's own instructions in this section ("Fragments, not sentences", "A star or a box in the margin"), not data.
- **Text-in-image warning:** no text at all, and the notebook page is the risky spot. The one written line must stay abstract ink strokes: readable or garbled handwriting is a defect and the slot should be re-generated. The meaning is carried by how LITTLE is on the page, not by what it says.
- **Why this and not remotion/screenshot:** it is the emotional half of the post's argument, a posture and a mood rather than a diagram, and `custom-instructions.md` §Image style routes scenes to `ai-prompt`. Nothing on a screen to capture.

---

### Image 4, after H2 "The five minutes after the meeting that do most of the work" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A three-step process diagram of the five-minute post-meeting pass, step one write the one decision, step two write who does what by when, step three draft the follow-up, with a five-minute timer motif. Type: remotion. Suggested filename: five-minute-post-meeting-pass.png]`
- **Type:** `remotion`
- **Concept:** A stopwatch reading 5:00 above a left-to-right chain of three numbered step cards (write the one decision, write who does what by when, draft the follow-up), with the third card accented as the step that decays fastest.
- **Suggested filename:** `five-minute-post-meeting-pass.png`
- **Alt text:** `A five-minute timer above three steps: write the decision, write who does what by when, draft the follow-up`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. This is an IN-POST slot: **NO title, NO subtitle.**

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `FiveMinutePostMeetingPass`
- **Component file:** `tools/remotion/src/FiveMinutePostMeetingPass.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token); final render at `--scale=2`.
- **PREREQUISITE:** the same `Root.tsx` repair described in the Image 2 spec, then register:
  ```tsx
  <Still id="FiveMinutePostMeetingPass" component={FiveMinutePostMeetingPass}
    width={CANVAS.width} height={CANVAS.height} />
  ```
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` from `./BlogWatermark`, `palette.background` canvas, everything inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - **Fixed geometry** (module constants; the horizontal row uses fixed identical arrow lengths and gaps, per the adapter's §Arrow conventions rule against flex-grown connectors):
    - `CARD_W = 460`, `ARROW_W = 90`, exact fit: `3 * 460 + 2 * 90 = 1560` = inner width
    - `xAt = (i) => SAFE_MARGIN + i * (CARD_W + ARROW_W)` (120, 670, 1220)
    - `CARD_TOP = 470`, `CARD_H = 470`, `ARROW_Y = CARD_TOP + CARD_H / 2` (705)
    - Timer block centred on `CANVAS.width / 2`, occupying y 180 to 400
  - **Layout, top to bottom:**
    1. **Timer motif**, centred: an inline SVG stopwatch drawn with strokes only (no static asset), about 150 x 150, `palette.text` at `strokeWidth={4}`, `strokeLinecap="round"`: a circle, a short stem and crown on top, two small side lugs, and two hands inside pointing from the centre to 12 and to 1 (a five-minute sweep), the minute hand drawn in `palette.muted`. Directly beneath it, `5:00` in `fonts.mono`, 54, weight 700, `palette.text`; beneath that, `BEFORE THE NEXT THING STARTS` in `fonts.sans`, 26, weight 600, `palette.muted`, uppercase, `letterSpacing: 2.4`.
    2. **Three step cards** in one row at `xAt(0..2)`, all `CARD_W` wide and `CARD_H` tall, contents stacked and centred with `padding: "36px 30px"` and `gap: 22`: a **numbered badge** (46 x 46 circle, `2px solid` the card's mark colour, `fonts.mono` 24 weight 700, digits `1`, `2`, `3`), a **step name** (`fonts.sans`, 38, weight 700, `palette.text`, centred, `lineHeight: 1.2`, in a fixed-height block of 96 px so all three descriptions start on the same baseline), and a **description** (`fonts.sans`, 26, `palette.muted`, centred, `lineHeight: 1.36`).
    3. **Two sequential arrows** between the cards, drawn at a fixed `ARROW_W` at `ARROW_Y`: `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, a plain chevron arrowhead. These are step connectors, not a chosen path, so they stay muted per the adapter.
    4. **`<BlogWatermark />`** last (its top edge sits near y 1118, leaving ~178 px clear below the cards).
  - **Copy, exact strings** (no em dashes anywhere):
    - Timer: `5:00` and `BEFORE THE NEXT THING STARTS`
    - Step 1: name `Write the one decision`, description `The thing that was actually settled, in one line.`
    - Step 2: name `Write who does what, by when`, description `Owner and date. Both parts, every time.`
    - Step 3: name `Draft the follow-up`, description `While the tone of the room is still in your head.`
  - Palette: canvas `palette.background`; cards 1 and 2 neutral (`palette.surface`, `1px solid palette.border`, radius 16, standard two-layer shadow) with `palette.primary` badges; **card 3 is the single emphasis card** (`rgba(14,159,142,0.10)` fill, `2px solid palette.accent`, `palette.accent` badge), because the draft names it as the step everybody postpones and the one that decays fastest. Exactly one accent element in the composition. `palette.warn` appears nowhere.
  - Typography: `fonts.sans` for names, descriptions and the timer caption; `fonts.mono` for the step digits and for `5:00`.
  - Icons / SVG assets: the stopwatch is drawn inline as SVG paths in the component. **No static assets**; `tools/remotion/public/` is empty and nothing should be added.
  - Arrows / connectors: two sequential connectors as specified above, identical length and identical clearance on both sides.
  - Card recipe to use: neutral variant twice, emphasis/outcome variant once (adapter §Card design language).
- **Source data (if any):** `5:00` is a hardcoded illustrative value taken from the post's own five-minute habit, not a measurement. **Deliberately not rendered:** the `45 minutes to 10 minutes` figure in `facts.md` line 13 is one practitioner's self-reported experience, and putting it in a diagram would present it as a general result. If anyone wants a before/after time graphic here later, it needs properly sourced data first. Nothing in this slot needs fresh data.
- **Reference composition to mimic:** `tools/remotion/src/ChartingFiveSteps.tsx`, which is the same shape: a horizontal chain of numbered step cards with fixed-width muted arrows, a fixed-height name block so descriptions share a baseline, and exactly one accent card at the end of the chain. Take its `StepCard`, `Arrow` and constant-driven layout wholesale; the differences are three cards instead of five (so `CARD_W` grows to 460) and the stopwatch block above the row.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FiveMinutePostMeetingPass --output=out/preview-five-minute-pass-v1.png
  ```
- **Final export command** (writes into the CURRENT tree; `REPO` derived dynamically):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still FiveMinutePostMeetingPass --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-take-notes-in-meetings/five-minute-post-meeting-pass.png"
  ```
- **Why this and not a real screenshot or ai-prompt:** an ordered three-step routine with exact wording and a legible `5:00` is precisely what Remotion is for, and an AI generator would garble both the digits and the step names. There is no screen to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/how-to-take-notes-in-meetings/
├── featured.png
├── transcription-trap.png
├── four-box-meeting-notes-template.png
├── write-less-listen-more.png
└── five-minute-post-meeting-pass.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. Repair `src/Root.tsx` first (see §Editor notes), write `src/FourBoxMeetingNotesTemplate.tsx` and `src/FiveMinutePostMeetingPass.tsx`, register both `<Still>`s, export via the final commands in the Image 2 and Image 4 specs. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; never inline a hex, a font stack, or a canvas dimension.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch). One slot per codex run.
3. **Screenshots:** none in this post, deliberately. See §Editor notes.
4. **Watermark and polish:** `<BlogWatermark />` for the two Remotion slots; the `olgapak.com` wordmark is requested inside the featured prompt only. Section illustrations carry no wordmark, matching the existing library. Output format: PNG for every slot.

## Naming conventions (from `standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `four-box-meeting-notes-template.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless `generate-images` records one `failed`.
2. On a failure, paste that slot's `Prompt:` block into any AI image tool and save the output to `blog-ops/assets/how-to-take-notes-in-meetings/` under the exact suggested filename.
3. Verify file sizes (under 200 KB for featured, under 500 KB for in-post is a good rule of thumb).
4. Tick the "Create images" section in `action-items.md` once all five files exist.

## Editor notes

- **BLOCKER for both Remotion slots: `tools/remotion/src/Root.tsx` does not parse.** The `<Still id="FourCorePagesMap" component={FourCorePagesMap}` element at line 81 is missing its `width={CANVAS.width} height={CANVAS.height} />` line, so `<Still id="CostTierKey" ...>` opens inside it. This is the same class of defect flagged (and fixed for three other Stills) during `screen-free-hobbies`; it regressed on the `bullet-journal-for-beginners` merge, which added `FourCorePagesMap`. Until the one line is added, **no composition in this project renders**. The fix is in the Image 2 production spec. I did not edit it: the planner is spec-only and this is a repo-wide file, not one of this post's. The builder should do it before its first render, not discover it as a failure.
  - Worth a follow-up outside this post: this has now broken twice in five posts, always the same missing closing line. A one-line lint (or moving registration into a `map()` over a composition array) would end it permanently.
- **Slot count matches exactly.** `outline.md` §Image placement plan lists 1 featured + 4 in-post; `draft-v1.md` carries exactly 4 `[IMAGE:]` placeholders, at lines 27, 41, 86 and 107, in the same sections and the same order (H2 1, H2 2, H2 4, H2 5). No delta. Every placeholder's assigned type and suggested filename is kept exactly as the outline and the writer set it; nothing was overridden, and I agree with all four assignments.
- **Featured hygiene: clean.** No `[IMAGE:]` placeholder uses `featured.png` and none duplicates the featured concept. The funnel cover shares no motif with any of the four in-post images.
- **Featured concept was rewritten from the outline's, deliberately.** The outline proposed "a notebook open beside a laptop on a meeting-room table", which is a setting rather than a thesis: it would describe the topic without saying anything the reader could not guess from the title, and every note-taking cover in this library already contains a notebook (`bullet-journal-for-beginners` used an open notebook two posts ago). The funnel says the actual argument (talk in, a few lines out) in one glance and survives the OG thumbnail crop. Two alternatives I weighed: a dense scribbled page beside a four-line page (rejected, too close to the existing `digital-vs-paper-notes` cover), and a grid of speech bubbles with one marked (rejected, the pattern-break grid motif is the most-used one in the library). If the human prefers the outline's original, say so and it can be re-specced as a `scene-vignette`, but it would then duplicate Images 1 and 3.
- **Featured archetype: `object-metaphor`.** Ledger union (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md`) sorted by date ends with `big-number` (2026-08-26, bullet-journal-for-beginners) and `negative-space` (2026-09-02, screen-free-hobbies), so both are blocked. `object-metaphor` was last used on 2026-08-03 and is the least recently used of the remaining options. This post's rotation entry is written to `blog-ops/featured-log/2026-09-08-how-to-take-notes-in-meetings.md`; the legacy table stays untouched as read-only history.
- **Featured ground hue is light clay-rose `#F0B9AC`, a hue this library has not used.** Spent grounds: sand-oat (`screen-free-hobbies`), orange (`bullet-journal-for-beginners`), lavender (`digital-vs-paper-notes`), cream (`how-to-plan-your-week`), plus sage green, marigold/amber, terracotta, navy, teal and royal blue in earlier covers. Risk to watch at Gate 2: the deep red accent word (`#C4162B`) on a rose ground has less separation than red on the sand or orange covers. If it reads muddy at thumbnail size, the cheapest fixes in order are (1) lighten the ground toward `#F6CCC1`, (2) keep the whole title near-black and move the red to the star on the note card. Do not solve it by reaching for another warm yellow ground, the last two covers are both in that family.
- **Partial-duplication call on Image 2, made knowingly.** The draft prints the four boxes as a fenced code block roughly 10 lines below the placeholder, so the diagram repeats copy that is already on the page. It is not a markdown table, so the table-duplicate rule does not strictly bite, and I kept the slot because the diagram adds the one thing the code block structurally cannot: the boxes arranged AS boxes (2x2), which is the entire mnemonic, plus the filter rule as a single accent line. If the human disagrees, the right cut is the image rather than the code block, since the code block is the copy-paste artifact the post promises in its title.
- **Priority-ladder check.** `remotion` sits at the top of the enabled ladder, but `custom-instructions.md` §Image style overrides it for scenes and heroes on this blog. The two genuinely diagrammatic slots (Images 2 and 4) are `remotion`, and both carry exact strings that only real rendered text can guarantee. Images 1 and 3 are human scenes with no data and no verbatim text, which is the correct `ai-prompt` case. The featured slot is `ai-prompt` per `images.featured_default` and the standing instruction, and was not touched.
- **No `screenshot` slot, deliberately, and none should be added.** The post names no products and shows no software, on purpose (`plan.md` avoid list, and H2 6 argues explicitly that the meeting-notes topic is drowning in vendor marketing). A screenshot of an AI notetaker would contradict the post's own position, and it is also the one type `generate-images` cannot produce, so it would sit as a manual action item and stall Stage 4b.5 staging.
- **No image in H2 6 ("Paper, laptop, or an AI notetaker?"), as the outline instructed.** That section carries a three-row comparison table, and a chart of the same three rows would be pure duplication. I did not add one.
- **No chart in this post needs fresh data.** The only statistic in `facts.md` that could carry a chart is the 45-to-10 minutes figure (line 13), which is one person's self-report and is explicitly flagged there as "cite as one person's experience, NOT as a study or a general average". Image 4 deliberately renders `5:00` (the post's own habit) instead. Do not let a generator invent a time-saving chart here.
- **Judgment call on Images 1 and 3 as a matched pair.** The draft's placeholder for Image 3 says "the same person from the earlier illustration", which no image generator can guarantee across two runs. I mitigated it by making the character, clothes, room, plant, wall colour, camera angle and light direction identical strings in both prompts, but this is the likeliest Gate 2 failure in the set. If the pair does not read as the same woman, re-generate Image 3 alone against Image 1 as a visual reference rather than re-generating both.
