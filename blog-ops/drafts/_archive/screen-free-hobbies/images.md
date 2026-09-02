# Images: screen-free-hobbies

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/screen-free-hobbies/outline.md` (image placement plan), `blog-ops/drafts/screen-free-hobbies/draft-v2.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/screen-free-hobbies/facts.md` (for chart/diagram data), `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/*.md` (per-type production specs), `blog-ops/profile/image-style.md`, `blog-ops/profile/custom-instructions.md` §Image style.
Read by: the `image-builder` agent at Stage 4a.5 (and the human for anything it cannot render).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `5` (1 featured + 4 in-post)
- Breakdown by type:
  - Remotion compositions: `1`
  - AI-generated (`ai-prompt`): `4`
  - Screenshots: `0`
- File destination: `blog-ops/assets/screen-free-hobbies/`

> **Read this before rendering the Remotion slot.** `tools/remotion/src/Root.tsx` is currently BROKEN on `main`: three `<Still>` elements (`HandwriteOrTypeDecision`, `NotesDecisionRule`, `TwoPilesOfScreenTime`) are missing their `width={CANVAS.width} height={CANVAS.height} />` closing line, so the file will not parse and NO composition in this project can render until it is repaired. Details and the exact fix are in §Editor notes.

## Featured image

> **Frontmatter only.** The `wordpress-rest` adapter's frontmatter template defines NO cover/heroImage field: this asset ships as a WordPress media upload attached via `featured_media` at Stage 4b.5, which is why the filename is fixed at `featured.png`. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt`. From `images.featured_default` in `blog-ops/config.yaml`, and reinforced as a standing rule by `blog-ops/profile/custom-instructions.md` §Image style ("Featured image is always `ai-prompt`... do NOT override the featured slot to `remotion`/anything else to 'auto-render for publishing'"). `ai-prompt` is a member of `images.enabled` (`[ai-prompt, screenshot, remotion]`). **Do not flip this slot to `remotion`.**
- **Dimensions:** 3:2, per `image-style.md` §Aspect ratio defaults. Target roughly 1800 x 1200 px. Keep the title block and every object inside the central 80% vertically so the 1.91:1 OG crop slices only empty ground.
- **Concept:** A straight-overhead flat-vector scene on a plain warm sand ground: a small off-centre cluster of three well-used analog hobby objects (a ball of wool with a hook pushed through it, a thumbed paperback, a worn hand trowel) with a plain phone lying face-down and alone at the opposite edge, the post's whole argument in one glance.
- **Archetype:** `negative-space`. One small cluster placed off-centre in a generous, almost empty field, with the phone isolated across the void from it: the emptiness IS the message (the evening has room in it, and the phone is the thing put down rather than the thing being fought). It also earns its keep as anti-convergence: the rotation ledger (`blog-ops/featured-log/` plus the legacy read-only `blog-ops/featured-log.md` table, union sorted by date) ends with `2026-08-08 how-to-reduce-screen-time` = `pattern-break` and `2026-08-19 how-to-take-notes-on-ipad` = `scene-vignette`, so **`pattern-break` and `scene-vignette` are off limits**. Alternatives weighed and rejected: `big-number` (tempting, the title is number-led at "51", but a huge "51" says "long list" and this post's whole pitch is that the list was never the hard part); `object-metaphor` (would need one oversized object, and no single hobby object stands for 51 of them without implying the post recommends that one); `scene-vignette` would have been the natural fit and is exactly why the ledger blocks it, the previous cover already spent it. The archetype governs composition only: palette, fonts, watermark, and the verbatim title band never vary.
- **Suggested filename:** `featured.png`
- **Alt text:** `Overhead view of wool, a paperback and a trowel on a table, with a phone face-down at the edge`

### Production spec

#### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector blog hero illustration on a single flat warm sand-oat background (roughly #EBD6AE), no gradient, no texture noise, generous flat colour reading as a plain tabletop seen from directly above.

  Composition, negative-space archetype: ONE small cluster of objects placed off-centre in a large, mostly empty field. No panels, no cards, no grid, no arrows, no charts, no numbered callouts, no borders. Straight overhead view.

  Lower-right third of the frame, a loose cluster of exactly three objects, slightly overlapping, each casting a soft short shadow: a ball of soft brick-red wool with a wooden crochet hook pushed through it and one loose strand trailing away; a closed, visibly thumbed paperback with a slightly bent cover and a bus ticket sticking out as a bookmark; a small hand trowel with a worn wooden handle and a little dry soil still on the blade. These objects look owned and used, not new: scuffed edges, a soft dent, nothing shiny.

  Far left of the frame, at the same height as the cluster and separated from it by a wide stretch of empty sand ground, one small plain dark-grey phone lying flat and FACE DOWN, blank back, no logo, no camera bump detail, no screen visible. It is small, quiet, and clearly set aside. The empty space between the phone and the cluster is the largest area in the picture and must stay completely empty.

  Upper third of the frame, on clear empty ground above everything else, the post title rendered EXACTLY as
  51 Screen-Free Hobbies to Try When Scrolling Gets Old
  centred, wrapping across two or three lines, set in a playful hand-lettered script mixed with a bold rounded sans, dark near-black (#222222), with only the numeral "51" coloured warm red (#E11D48) as the single accent.

  Palette and mood: warm, calm, honest, unglamorous. Warm sand ground, brick-red wool, cream paper, walnut and honey wood tones, a little muted green on the trowel blade. Teal (#0E9F8E) appears only as a tiny detail such as the trowel's ferrule. Never a blue background, never a blue-dominant scene. Clean bold outlines, soft cel shading, flat colour.

  Bottom-right corner: the small lowercase wordmark olgapak.com in a plain rounded sans, dark, at about 55% opacity.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; also the featured-slot default)
- **Negative prompt** (if the tool supports it):
  ```
  photorealism, 3D render, stock photo, glossy influencer flat-lay, styled marketing flatlay, brand-new pristine products, packaging, price tags, receipts, brand logos or wordmarks, Apple logo, visible phone screen, screen glow, UI chrome, app icons, more than four objects, cluttered surface, dense arrangement, symmetrical centred layout, borders or frames, children, faces, people, hands, extra limbs, extra or malformed fingers, misspelled or garbled lettering, duplicate text blocks, extra captions or labels beyond the title, gradient background, blue-dominant background, navy, teal or royal-blue ground, sage-green ground, marigold or amber ground, terracotta ground, dark or moody colour grading, heavy black shadows, watermark other than the olgapak.com wordmark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions (featured hero: hand-lettered script + bold rounded sans, one red accent word, `olgapak.com` wordmark, one flat single-colour ground) and §Illustration palette (warm, never blue-dominant). Prior covers for tonal family only, deliberately NOT for composition or hue: `blog-ops/assets/how-to-take-notes-on-ipad/featured.png` (amber, `scene-vignette`), `blog-ops/assets/how-to-reduce-screen-time/featured.png` and `blog-ops/assets/best-pens-for-note-taking/featured.png` (both sage green, so avoid that ground), `blog-ops/assets/time-blocking/featured.png` (terracotta, and the previous `negative-space` cover, which this one must not resemble in layout), `blog-ops/assets/how-to-stop-doomscrolling/featured.png` (navy). The warmth benchmark remains the wood-toned `finished-notebooks-shelf` sample in `blog-ops/reference/image-samples/`.
- **Source data (if any):** none. The concept is editorial; no number in the image except the "51" that is part of the title string.
- **Text-in-image warning:** this slot needs the post title rendered legibly and verbatim. After generation, read the PNG and check it character by character against `51 Screen-Free Hobbies to Try When Scrolling Gets Old` (including the hyphen in "Screen-Free"), plus the `olgapak.com` wordmark. If one letter is wrong, re-generate once; if it is still wrong, the fallback is a human text overlay on a clean untitled render, never shipping garbled lettering. No other text may appear: no object labels, no captions.
- **Why this and not remotion/screenshot:** `images.featured_default` plus a standing custom instruction lock this slot to `ai-prompt`, and the whole hero convention on this blog is the hand-lettered illustrated cover, which Remotion's flat geometric language does not produce. Nothing exists to screenshot.

### Watermark

- **`remotion` slots:** use the shared `<BlogWatermark />` component (per `blog-ops/profile/image-style.md`; sizing, opacity, and position per the remotion adapter). Never inline a watermark, never reposition.
- **`ai-prompt` slots:** the `olgapak.com` wordmark is requested inside the featured prompt itself (bottom-right, ~55% opacity), matching the existing hero library. Section illustrations follow the library convention and carry NO wordmark.
- **Own-site/product UI screenshots:** none in this post.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v2.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** every slot below already sits after its section heading and the section's first body paragraph in `draft-v2.md`. Do not move the placeholders and do not edit their text.

**Table-redundancy rule:** `draft-v2.md` contains **no markdown tables at all** (verified: zero lines starting with `|`), so no diagram slot duplicates tabular content. In particular, H2 1 states the three cost tiers as prose bullets, which is exactly why the Image 1 scale is a legitimate diagram rather than a redrawn table.

**Tone guardrail for every `ai-prompt` slot in this post.** The post argues AGAINST aspirational hobby marketing that hides real costs, and it says so out loud in H2 1 (quoting a reader on articles that "suggest these expensive hobbies like they're free alternatives"). So: no glossy influencer flat-lay, no studio-perfect setups, no expensive-looking gear, no finished masterpieces. Every scene shows work in progress in an ordinary room, with objects that look owned rather than bought for the photo. The post is explicitly adults-only ("No kids' section, no teen section"), so **no children in any scene**.

### Image 1, after H2 "What counts as a screen-free hobby (and what this list leaves out)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A simple labelled scale showing the three cost tiers, Free, Cheap and Real investment, with one example hobby sitting under each. Type: remotion. Suggested filename: cost-tier-key.png]`
- **Type:** `remotion`
- **Concept:** A horizontal labelled scale with three ticks (Free, Cheap, Real investment), each carrying the post's strict definition of that tier and one example hobby taken verbatim from the list below it.
- **Suggested filename:** `cost-tier-key.png`
- **Alt text:** `A three-point cost scale from Free to Real investment, with walking, crochet and climbing as examples`

#### Production spec

##### If `remotion`

> Conform to `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. This is an IN-POST slot: **NO title, NO subtitle.**

- **Tool:** Remotion (React to PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `CostTierKey`
- **Component file:** `tools/remotion/src/CostTierKey.tsx`
- **Canvas dimensions:** 1800 x 1200 (the `CANVAS` token, matching every other composition in this project); final render at `--scale=2`.
- **PREREQUISITE, do this first:** repair `tools/remotion/src/Root.tsx` before registering anything. Three existing `<Still>` elements are missing their closing line and the file does not parse. Add `      width={CANVAS.width} height={CANVAS.height} />` immediately after the `component={...}` line for each of `HandwriteOrTypeDecision`, `NotesDecisionRule`, and `TwoPilesOfScreenTime`, then register this slot:
  ```tsx
  <Still id="CostTierKey" component={CostTierKey}
    width={CANVAS.width} height={CANVAS.height} />
  ```
  (plus the matching `import { CostTierKey } from "./CostTierKey";` at the top). `component` takes the component reference, never a JSX element.
- **Mandatory layout primitives:** in-post slot, so **no title band and no subtitle**. `<BlogWatermark />` imported from `./BlogWatermark` and left untouched, `palette.background` canvas, all content inside `SAFE_MARGIN` (120), nothing within 40 px of the watermark.
- **Visual spec (detailed):**
  - Title text: **none** (in-post)
  - Subtitle text: **none** (in-post)
  - **Fixed coordinate frame** (declare these as module constants; never eyeball a pixel, per the adapter's §Arrow conventions mapping rule):
    - `RULE_X0 = 200`, `RULE_X1 = 1600`, `AXIS_Y = 390`
    - `TICK_X = [360, 900, 1440]` (derived as `RULE_X0 + 160 + i * 540`, or a `xAt(i)` helper off the three-tier count, either is fine as long as it is computed, not typed)
    - `COL_W = 440` (every column block is 440 wide and centred on its tick, so the outer columns span 140 to 580 and 1220 to 1660, both inside `SAFE_MARGIN`)
    - `TICK_UP = 24`, `TICK_DOWN = 24`
  - **Layout, top to bottom:**
    1. **Tier name row**, y 200 to 330, three blocks of `COL_W` centred on each tick, text **bottom-anchored** at y 330 so all three sit on one baseline regardless of line count. `fonts.sans`, 48 px, weight 700, `palette.text`, uppercase, `letterSpacing: 1.6`, `textAlign: center`, `lineHeight: 1.1`. "REAL INVESTMENT" wraps to two lines at this width, which is why the block is bottom-anchored.
    2. **The rule**, a single SVG `line` from `(RULE_X0, AXIS_Y)` to `(RULE_X1, AXIS_Y)`, `palette.muted`, `strokeWidth={3}`, `strokeLinecap="round"`. **No arrowhead** at either end: an arrow would imply that further along the scale is better, and the post's entire argument is that the tier is a disclosure, not a ranking.
    3. **Three ticks**, vertical lines at each `TICK_X` from `AXIS_Y - TICK_UP` to `AXIS_Y + TICK_DOWN`, `palette.text`, `strokeWidth={4}`, `strokeLinecap="round"`.
    4. **Two end captions**, y 430 to 470, sitting under the empty ends of the rule: left one left-aligned at `x = RULE_X0`, right one right-aligned ending at `x = RULE_X1`. `fonts.sans`, 26 px, weight 600, `palette.muted`, uppercase, `letterSpacing: 2.4`, `whiteSpace: nowrap`.
    5. **Definition row**, y 520 to 640, one `COL_W` block centred under each tick. `fonts.sans`, 30 px, `palette.muted`, `lineHeight: 1.35`, `textAlign: center`, up to three lines. Carry the line breaks explicitly (an array of strings per column) so no row ends on an orphan word.
    6. **Example card row**, y 690 to 860, one card per column, `COL_W` wide, 170 tall, **neutral card recipe** from the adapter's §Card design language (surface fill, `1px solid palette.border`, radius 16, the standard two-layer shadow, padding `26px 28px`). Inside each card, stacked and centred: a small `EXAMPLE` eyebrow (`fonts.sans`, 22 px, weight 600, `palette.muted`, uppercase, `letterSpacing: 2.4`), then the hobby name (`fonts.sans`, 40 px, weight 600, `palette.text`, `lineHeight: 1.2`, wraps to two lines where needed). **All three cards are identical** in size, border, fill, and font weight. No emphasis variant, no warning variant, no accent-tinted card: emphasising one tier would tell the reader that tier is the recommended one, which the section explicitly refuses to do.
    7. **One accent pill**, centred horizontally, y 950 to 1020: background `rgba(14,159,142,0.10)`, text `palette.accent`, `fonts.sans`, 30 px, weight 700, `letterSpacing: 1.8`, `padding: "18px 46px"`, `borderRadius: 999`, `whiteSpace: nowrap`. This is the composition's single accent element, and it deliberately belongs to no individual tier.
    8. **`<BlogWatermark />`** last (it self-positions bottom-left at `SAFE_MARGIN` / bottom 48, top edge around y 1118, leaving ~98 px clear under the pill).
  - **Copy, exact strings** (no em dashes anywhere, per the adapter's §Typography glyph rule):
    - Tier names: `FREE` | `CHEAP` | `REAL INVESTMENT`
    - End captions: left `COSTS NOTHING`, right `COSTS REAL MONEY`
    - Definitions (condensed faithfully from the draft's own strict tier bullets in H2 1):
      - Free: `Nothing you do not` / `already own` (two lines)
      - Cheap: `One small one-off outlay,` / `then nothing` (two lines)
      - Real investment: `Meaningful money up front,` / `or a cost that` / `keeps arriving` (three lines)
    - Example cards: eyebrow `EXAMPLE` on all three, then `Walking a new route` | `Crochet` | `Climbing`
    - Accent pill: `EVERY HOBBY IN THIS POST CARRIES ONE OF THESE THREE TAGS`
  - Palette: canvas `palette.background`, cards `palette.surface` with `1px solid palette.border`, tier names and hobby names `palette.text`, definitions and eyebrows and end captions `palette.muted`, rule `palette.muted`, ticks `palette.text`. `palette.accent` appears exactly once, in the pill. **`palette.warn` appears nowhere**: no tier is a failure state, and tinting "Real investment" red would make the image argue that expensive hobbies are bad, which the post does not say (it says the cost should be disclosed).
  - Typography: `fonts.sans` throughout. No `fonts.mono`: there is no numeric value in this diagram, and there must not be. The post ships no prices and `facts.md` §Statistics is deliberately empty, so no figure may be invented for the image.
  - Icons / SVG assets: **none**. `tools/remotion/public/` is empty; do not add an asset for this slot.
  - Arrows / connectors: none. The scale is a plain rule with ticks; see the no-arrowhead note above.
  - Card recipe to use: neutral variant only, three times.
- **Source data (if any):** no numbers. The three tier definitions are the draft's own strict definitions in `draft-v2.md` §"What counts as a screen-free hobby" (the three-bullet block), and the three example hobbies appear verbatim in the draft with exactly these tiers: "Walking a new route (Free)" in H2 2, "Crochet (Cheap)" in H2 3, "Climbing (Real investment)" in H2 4. Hardcoded illustrative copy, sourced from the draft, not from `facts.md`. **Nothing here needs fresh data**, and `facts.md` §Statistics is intentionally empty for this post, so a data chart was never an option.
- **Reference composition to mimic:** `tools/remotion/src/InkFamiliesTradeoff.tsx`. It is the same shape of thing: a horizontal rule with computed ticks, bottom-anchored label stacks above the rule, muted end captions, per-column caption text, and exactly one centred accent pill that belongs to no single item. Take its `xAt(i)` helper pattern, its fixed-constant discipline, its theme imports, and its watermark usage. Differences to make deliberately: this composition has example cards below the definitions (Ink has stroke rows), and three ticks rather than four.
- **Iteration command** (preview, throwaway, outputs to `tools/remotion/out/`, not committed):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CostTierKey --output=out/preview-cost-tier-key-v1.png
  ```
- **Final export command** (writes into the CURRENT tree; `REPO` derived dynamically so a worktree run does not export into the main checkout):
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still CostTierKey --scale=2 \
    --output="$REPO/blog-ops/assets/screen-free-hobbies/cost-tier-key.png"
  ```
- **Why this and not a screenshot or ai-prompt:** it is the one genuine diagram in the post, and its whole value is six short strings rendered exactly and legibly (the tier names and the definitions the author says she means "strictly"). Remotion renders real text and guarantees that; an AI generator does not. There is nothing on a screen to capture.

---

### Image 2, after H2 "Hands-busy hobbies: crafts, making, and building" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A craft in mid-progress on a lap or a kitchen table, the unfinished work and hands visible rather than a face, warm indoor light. Type: ai-prompt. Suggested filename: hands-busy-in-progress.png]`
- **Type:** `ai-prompt`
- **Concept:** A first-person, over-the-lap view of two hands crocheting a visibly uneven half-finished square at a kitchen table, with the ball of wool in the lap and a mug at the table edge, warm lamplight, no face in frame.
- **Suggested filename:** `hands-busy-in-progress.png`
- **Alt text:** `Hands crocheting an uneven half-finished square on a lap, with wool and a mug nearby`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: first-person point of view, looking down at your own lap and the near edge of a plain walnut kitchen table. Two hands enter from the bottom of the frame, cropped at the wrists, seen from above and behind, holding a crochet hook in the right hand and a half-finished square of oatmeal wool in the left. The square is clearly UNFINISHED and visibly uneven: one edge wider than the other, a slightly wavy top row, a few loose loops, one dropped stitch. A ball of the same oatmeal wool sits in the lap at the lower left with a strand running up into the work. On the table edge in the upper right, a chipped ceramic mug and a small pair of scissors. No face, no head, no full person in frame.

  Palette and mood: warm, lived-in, ordinary evening. Walnut table, oatmeal and soft brick-red wool, cream, honey-coloured lamplight coming from the upper right and pooling on the table, gentle short shadows. Small teal (#0E9F8E) accent only on the crochet hook's grip. Never a blue background, never a blue-dominant scene, no cold grey or studio light. Clean bold outlines, soft cel shading, generous empty space at the top of the frame.

  This is an ordinary room, not a styled photoshoot: the table has a mark on it, the mug is chipped, nothing is new or arranged.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2` (per `image-style.md` §Aspect ratio defaults; matches the rest of this post's set)
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, labels, captions or numbers, faces, heads, full people, children, teenagers, extra limbs, extra or malformed fingers, six fingers, warped or fused hands, photorealism, 3D render, stock photo, glossy influencer flat-lay, styled photoshoot, pristine finished blanket or jumper, perfectly even stitching, brand logos, yarn labels or packaging, price tags, cold blue or monochrome blue scene, blue-dominant background, grey studio backdrop, dark or moody grading, cluttered surface, screens, phone, tablet, fake UI chrome, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Observed conventions ("One illustration per H2 section") and §Illustration palette (warm, wood-toned, `finished-notebooks-shelf` look; explicitly NOT the cold blue `student-desk-spiral` or `rocketbook-workflow`).
- **Source data (if any):** none. The mood tracks `facts.md` §Quotes (u/Jji-Terada, "something tactile that keeps my hands busy") and the draft's own line that the first square should be expected to come out a trapezoid, but no quote is rendered in the image.
- **Text-in-image warning:** this image must carry NO text at all. Any lettering the model adds is a defect and the slot should be re-generated.
- **Why this and not remotion/screenshot:** it is a tactile, warm scene, not a diagram, and Remotion's flat geometric language cannot produce it. There is no screen to capture, and a real photo of a hobby in progress is exactly the thing this blog illustrates rather than photographs.

---

### Image 3, after H2 "Screen-free hobbies that get you outside" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: A small planted pot on a doorstep beside a well-used path at dusk, ordinary and unglamorous rather than aspirational. Type: ai-prompt. Suggested filename: outdoors-at-dusk.png]`
- **Type:** `ai-prompt`
- **Concept:** A single terracotta pot of young herb seedlings on a worn concrete doorstep beside a well-used garden path at dusk, muddy trainers by the door and a cut-down plastic bottle as a watering can, warm porch light, no people.
- **Suggested filename:** `outdoors-at-dusk.png`
- **Alt text:** `A small pot of herb seedlings on a worn doorstep beside a garden path at dusk`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text, no lettering anywhere.

  Composition: low, close, slightly angled view of an ordinary back doorstep at dusk, framed from about knee height. Lower centre-left, on a chipped concrete step, one small terracotta pot holding a few young herb seedlings, leaves uneven and one leaning. Beside it, a pair of muddy trainers left where they were kicked off, and a cut-down plastic bottle standing in for a watering can. Running from the step to the right edge of the frame, a well-used path of worn paving slabs with weeds coming up between them and grass grown over one corner. A plain brick wall and a closed back door behind. Above, a low band of dusk sky. A small warm porch light glows over the door. No people in frame.

  Palette and mood: warm dusk, calm and ordinary rather than aspirational. Terracotta pot, warm brick, weathered grey-brown concrete, muted sage and olive greens in the weeds and seedlings, and a dusk sky in soft peach fading to dusty mauve, NOT a blue sky and never a blue-dominant scene. Warm amber porch light casting a small pool on the step. Clean bold outlines, soft cel shading, generous empty space in the upper half.

  This is a real, slightly scruffy back garden, not a garden-centre display: the step is chipped, the path is uneven, the pot is one pot, not a row.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  any text, lettering, plant labels, seed packets, signs or numbers, people, faces, children, hands, extra limbs, photorealism, 3D render, stock photo, magazine garden feature, landscaped show garden, rows of matching pots, greenhouse, new or pristine planters, brand logos or garden-centre branding, price tags, cold blue or monochrome blue scene, blue-dominant sky, night-time navy, dark or moody grading, harsh lighting, screens, phone, fake UI chrome, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm and inviting, natural tones, a little greenery; never the cold blue of `student-desk-spiral`). This is the post's one outdoor scene, so it carries the greenery for the whole set.
- **Source data (if any):** none. It illustrates the section's opening claim (gardening was the most-recommended hobby across the research) which is sourced in `facts.md` §Named examples; no data is rendered.
- **Text-in-image warning:** no text at all. Plant labels and seed packets are specifically excluded because the model likes to add them and they would both introduce garbled lettering and make the scene look shop-bought.
- **Why this and not remotion/screenshot:** a mood-and-place scene with no diagrammatic content, and there is nothing on a screen to capture.

---

### Image 4, after H2 "How to pick one, and actually stick with it" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: One chosen hobby given a slot, a single craft item resting beside an open paper planner with one evening blocked out. Type: ai-prompt. Suggested filename: one-hobby-one-slot.png]`
- **Type:** `ai-prompt`
- **Concept:** An open paper weekly planner on a light oak table with exactly one evening block filled in and lightly tinted teal, a half-finished embroidery hoop resting beside it, everything else on the page left empty.
- **Suggested filename:** `one-hobby-one-slot.png`
- **Alt text:** `An open paper planner with one evening blocked out, an embroidery hoop resting beside it`

#### Production spec

##### If `ai-prompt` (codex-automated; generated at Stage 4a.5)

- **Tool:** `codex / gpt-image via /Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/skills/generate-image-codex/SKILL.md (no API key; on failure the Prompt below is the manual paste-anywhere fallback)`
- **Prompt:**
  ```
  A friendly flat-vector illustration for a blog section, no title text and no readable words anywhere.

  Composition: high three-quarter view looking down at a light oak table. Centre-left, an open paper weekly planner lying flat, its two pages ruled into a simple grid of seven narrow day columns with evening rows near the bottom. Exactly ONE cell, an evening cell in the middle of the week, is filled in by hand as a solid rounded block. Every other cell is empty. The handwriting on the page is only loose abstract ink strokes and squiggles, deliberately not readable words or letters. A plain pen lies diagonally across the lower page.

  To the right of the planner, one half-finished embroidery hoop resting on the table: a wooden hoop holding cream linen with a small partly stitched flower, several threads still loose and a needle parked in the fabric. That is the only craft object in the frame. Nothing else on the table: no second project, no pile of supplies.

  Palette and mood: warm, calm, morning light from the upper left, gentle short shadows. Light oak table, cream paper, warm wood hoop, soft brick-red and mustard embroidery thread. The one filled planner block is tinted teal (#0E9F8E) and is the single accent in the picture. Brand blue (#2B6CB0) appears only as a thin detail on the pen. Never a blue background, never a blue-dominant scene. Clean bold outlines, soft cel shading, generous empty space around the two objects.

  Ordinary and used, not styled: the planner is a plain paper one with a slightly creased corner, the hoop is mid-project and imperfect.

  Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  readable words, real lettering, day names, month names, dates, times, numbers, labels or captions, garbled or misspelled text, people, faces, children, hands, extra limbs, extra or malformed fingers, photorealism, 3D render, stock photo, glossy influencer flat-lay, styled desk photoshoot, bullet-journal art spread, decorative calligraphy headers, washi tape and stickers, multiple projects or supply piles, brand logos, planner branding, price tags, cold blue or monochrome blue scene, blue-dominant background, grey studio backdrop, dark or moody grading, screens, phone, laptop, fake UI chrome, watermark
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §Illustration palette (warm wood and cream paper, brand blue as accent only). Deliberately NOT the busy decorated-planner look: the section's point is one commitment, not a beautiful spread, and the draft says as much ("Three honest lines about the day beats a beautiful spread you abandon in week two").
- **Source data (if any):** none. No date, day name, or time may appear, which is also why the planner writing must stay abstract.
- **Text-in-image warning:** this image must carry NO readable text. A planner is exactly the kind of object a model wants to fill with day names and times, and those will come out garbled. The meaning is carried by the SHAPE (one filled cell in an otherwise empty grid), not by words. If the render produces any legible or garbled lettering on the page, re-generate.
- **Why this and not remotion/screenshot:** it is a warm scene, not a diagram, and the one piece of structure in it (an empty grid with a single filled cell) works better as illustration than as a rendered chart, which would look like a timetable rather than a decision. Nothing on a screen to capture.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/screen-free-hobbies/
├── featured.png
├── cost-tier-key.png
├── hands-busy-in-progress.png
├── outdoors-at-dusk.png
└── one-hobby-one-slot.png
```

Asset folder is created automatically at Stage 4a.5 by the `image-builder` agent.

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/remotion.md`. Repair `src/Root.tsx` (see §Editor notes), write the component in `src/CostTierKey.tsx`, register the `<Still>`, export via the final command in the Image 1 spec. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; never inline a hex, a font stack, or a canvas dimension.
2. **AI-generated (`ai-prompt`, automated via codex, no API key):** adapter `/Users/slav/.claude/plugins/cache/blogsmith/blogsmith/0.13.0/adapters/images/ai-prompt.md` (plus `codex.md` for dispatch). One slot per codex run.
3. **Screenshots:** none in this post, deliberately. See §Editor notes.
4. **Watermark and polish:** `<BlogWatermark />` for the Remotion slot; the `olgapak.com` wordmark is requested inside the featured prompt only. Section illustrations carry no wordmark, matching the existing library. Output format: PNG for every slot.

## Naming conventions (from `standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `cost-tier-key.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Nothing for the five automated slots unless `generate-images` records one `failed`.
2. On a failure, paste that slot's `Prompt:` block into any AI image tool and save the output to `blog-ops/assets/screen-free-hobbies/` under the exact suggested filename.
3. Verify file sizes (under 200 KB for featured, under 500 KB for in-post is a good rule of thumb).
4. Tick the "Create images" section in `action-items.md` once all five files exist.

## Editor notes

- **BLOCKER for the Remotion slot: `tools/remotion/src/Root.tsx` does not parse on `main`.** Three `<Still>` elements (`HandwriteOrTypeDecision`, `NotesDecisionRule`, `TwoPilesOfScreenTime`) are missing their `width={CANVAS.width} height={CANVAS.height} />` line, so the next tag opens before the previous one closes. It landed in commit `722e07e` (the how-to-take-notes-on-ipad merge). Until it is fixed, **no composition in this project renders**, including this post's. The fix is three inserted lines, specified in the Image 1 production spec. I did not edit it: the planner is spec-only, and this is a repo-wide fix rather than a change to this post's files. Flagging it here and in the handoff so the builder does it first rather than discovering it as a render failure.
- **Slot count matches exactly.** `outline.md` §Image placement plan lists 1 featured + 4 in-post; `draft-v2.md` carries exactly 4 `[IMAGE:]` placeholders, at lines 26, 69, 88 and 149, in the same sections and the same order (H2 1, H2 3, H2 4, H2 8). No delta. Every placeholder's type and suggested filename is kept exactly as the writer placed it; nothing was overridden.
- **Featured hygiene: clean.** No `[IMAGE:]` placeholder uses `featured.png` and none duplicates the featured concept. The featured overhead cluster (wool, paperback, trowel, phone face-down) is visually distinct from all four in-post scenes.
- **Table-duplicate check: not applicable.** `draft-v2.md` contains zero markdown tables, so the one Remotion diagram duplicates nothing. The cost tiers it draws are stated as prose bullets in H2 1, and the diagram adds what the prose cannot: the three tiers side by side on one scale with a worked example each, which is what makes the per-hobby tags in the following six sections readable at a glance.
- **Priority-ladder check.** `remotion` is enabled and sits at the top of the ladder, but `custom-instructions.md` §Image style overrides it for this blog's scene and hero slots ("`remotion` only for genuine diagrams/charts; `ai-prompt` for scenes, heroes, and conceptual visuals"). The one genuinely diagrammatic slot (Image 1) is `remotion`. Images 2, 3 and 4 are mood-and-place scenes with no data content and no exact text, which is the correct `ai-prompt` case.
- **No `screenshot` slot, deliberately, and none should be added.** There is nothing on a screen in this post: it is 51 offline hobbies. A screenshot slot would also be the one type `generate-images` cannot produce, so it would sit as a manual action item and stall Stage 4b.5 staging with a missing file.
- **Featured type is locked and was not touched.** `images.featured_default: ai-prompt`, plus the standing custom instruction not to flip it to `remotion` for auto-render convenience. Recorded as `ai-prompt`.
- **Featured archetype: `negative-space`.** Ledger union (`blog-ops/featured-log/` + legacy `blog-ops/featured-log.md`) sorted by date puts `pattern-break` (2026-08-08, how-to-reduce-screen-time) and `scene-vignette` (2026-08-19, how-to-take-notes-on-ipad) as the last two, so both are blocked. `negative-space` was last used on 2026-07-30 (`time-blocking`, a slim day column), which is far enough back and a completely different motif. This post's own rotation entry is written to `blog-ops/featured-log/2026-09-02-screen-free-hobbies.md`; the legacy table is left untouched as read-only history.
- **Judgment call: featured object count trimmed from four to three.** The outline names yarn, a paperback, a trowel AND a sketchbook. The featured-slot rule caps a cover at roughly three focal objects beyond title and watermark, and the phone is a mandatory fourth element because it carries the thesis. I dropped the sketchbook. If you want it back, drop the trowel instead (the trowel earns its place because gardening is the single most-recommended hobby in the research), but do not ship four hobby objects plus a phone: at OG thumbnail size that reads as clutter and the empty space that makes the archetype work disappears.
- **Judgment call: featured ground is warm sand-oat `#EBD6AE`, which is less saturated than the house norm.** The hue was chosen by elimination, the existing cover library already owns marigold/amber (three covers, including the most recent one), sage green (the two before that), terracotta, navy, teal, royal blue and lavender. Sand is warm, unused, keeps a red accent word legible, and suits a post that argues against glossy hobby marketing. If it renders washed out at thumbnail size, the cheapest fix is deepening it toward a warm ochre-sand rather than reaching for another saturated hue that is already spent.
- **Deliberate convention deviation: no recurring female character on the cover.** `image-style.md` calls for her "where a person fits". She does not fit a straight-overhead flat-lay, and the previous cover (`how-to-take-notes-on-ipad`) already used her in a scene vignette, which is the pattern the rotation exists to break. Every in-post scene is likewise person-free or shows hands only, which also keeps the post's adults-only stance unambiguous: no figure in any image could be read as a child.
- **No chart needs fresh data, and none could get it.** `facts.md` §Statistics is empty by deliberate editorial decision for this post ("There are no screen-time statistics in this file, deliberately"). The single diagram carries no numbers, and no prompt in this file asks for a price or a figure. If anyone later wants a cost chart here, it needs new sourced data first; do not let a generator invent one.
- **Ambiguity worth knowing about (Image 1 example hobbies).** "Walking a new route", "Crochet" and "Climbing" were picked because each appears verbatim in the draft carrying exactly that tier, and together they span three different sections. Any other draft entry with an unambiguous single tier is a fine substitute (for instance "Journaling" for Free, "Embroidery" for Cheap, "LEGO" for Real investment). Avoid entries with split tiers such as "Cycling (Real investment, or Free if the bike is already in the hallway)": the point of the key is that a tier is a single clear tag.
