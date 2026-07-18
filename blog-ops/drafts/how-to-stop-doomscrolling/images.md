# Images: how-to-stop-doomscrolling

Written by: `suggest-images` skill (invoked by the editor at Stage 4a).
Sources: `blog-ops/drafts/how-to-stop-doomscrolling/outline.md` (image placement plan), `blog-ops/drafts/how-to-stop-doomscrolling/draft-v1.md` (`[IMAGE:]` placeholders), `blog-ops/drafts/how-to-stop-doomscrolling/facts.md` (for chart/diagram data), `${CLAUDE_PLUGIN_ROOT}/adapters/images/*.md` (per-type production specs).
Read by: human (creates the actual assets and saves them under `blog-ops/assets/how-to-stop-doomscrolling/`).

**Purpose:** every image slot in the finalized draft gets a concrete spec the human can execute without re-reading the post. One image slot = one detailed entry.

## Summary

- Total image count: `4` (1 featured + 3 in-post)
- Breakdown by type:
  - Remotion compositions: `1` (the doomscroll-loop labeled diagram)
  - AI-generated (`ai-prompt` / `ai-api`): `3` (featured hero, "make your phone boring", "phone-free morning")
  - Screenshots: `0`
- File destination: `blog-ops/assets/how-to-stop-doomscrolling/`

## Featured image

> **Frontmatter only.** This asset is referenced from the post's cover-image frontmatter field per the publish adapter's convention (`adapters/publish/wordpress-rest.md`) and rendered as a banner above the title. Never duplicate it as the first in-post `[IMAGE:]` placeholder; the post would render the same image twice.

- **Type:** `ai-prompt` (from `images.featured_default` in config.yaml; a member of `images.enabled`).
- **Dimensions:** `ai-prompt` at **3:2** per `blog-ops/profile/image-style.md`'s aspect-ratio default (matches the existing hero library). Keep title + character inside the vertical safe zone so the 1.91:1 OG/Twitter crop doesn't clip them.
- **Concept:** The recurring friendly female brand character sits curled on a couch at night, face lit warm by her phone; from the screen an endless ribbon of little cards (tiny reels, hearts, bad-news headlines) spirals up and away into the dark, but her expression is calm and hopeful rather than anxious, and a warm lamp / hint of dawn keeps the scene inviting, not bleak. The post title is overlaid big across the upper third.
- **Suggested filename:** `featured.png`
- **Alt text:** `Woman on a couch at night lit by her phone as a ribbon of feed cards spirals away`

> **Cover concept note (skill hard rule on featured images):** this concept already passes the featured-image hard rule, so I kept it as the outline/task specified rather than reshaping it. It is ONE bold metaphor (the doomscroll made visible) with 3 focal objects (character + glowing phone + spiraling card ribbon), generous dark negative space, and reads at a thumbnail/OG crop. It is not a multi-callout infographic and does not try to cram the 12 strategies onto the cover. No alternatives needed.
>
> **House-style note (`image-style.md`):** the featured hero is the documented exception that may keep a single saturated/mood background, so the night scene is allowed. Per the "illustration palette" rule, brand blue `#2B6CB0` stays an ACCENT (the card ribbon + glow rim), never the dominant fill; the scene is kept WARM (warm phone/lamp glow, a hint of dawn) so it lands hopeful, not cold or bleak.

### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration in a clean, approachable, optimistic
  style. A cheerful young woman (recurring brand character) curled up on a cozy couch
  at night, holding a smartphone whose screen casts a soft warm glow across her calm,
  hopeful face. From the top of the phone screen, a long ribbon of small rounded cards
  spirals upward and away into the darkness, each card a tiny simple icon only: a little
  play/reel triangle, a heart, a short bad-news headline bar, a bell, a comment bubble,
  getting smaller as the ribbon curls off into the background. Her body language is
  relaxed and at-ease, not anxious, hinting she is about to set the phone down. Warm
  night interior: deep twilight indigo background (NOT pure black), a warm table lamp
  and a hint of dawn light at the edge of a window keeping the mood inviting and
  hopeful, a little greenery (a small plant) and warm wood tones for warmth. Flat vector
  shapes, soft rounded forms, minimal shading, no gradients, no photorealism. The
  spiraling feed cards and the phone's glow rim use brand blue #2B6CB0 as an ACCENT only
  (never the dominant fill); warm creams, wood browns, and lamp-amber dominate the
  scene; a little teal #0E9F8E detail. Across the upper third, a big bold post title
  reading exactly "How to Stop Doomscrolling: 12 Science-Backed Strategies", set in a
  playful hand-lettered script mixed with a rounded bold sans-serif, the single word
  "Stop" colored warm red (#E11D48) as the accent and the rest of the title in
  white / near-white, correctly spelled and cleanly kerned with high contrast on the
  dark background. Character and couch sit in the lower two-thirds below the title. In
  the lower-left corner, a small clean lowercase sans-serif wordmark reading exactly
  "olgapak.com" in a muted light tone at low opacity, correctly spelled, no box or logo
  around it. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no readable words or lettering on the little feed cards, no real headlines, no numbers
  on the cards, no signature, no extra fingers or limbs, no distorted hands, no
  photorealistic faces, no pure-black background, no bleak or depressing mood, no
  horror/creepy tone, no dense infographic, no UI chrome or realistic phone OS interface,
  no browser window, no stray logos, no misspelled title, no misspelled wordmark, no
  brand blue used as the background or dominant fill, no colors outside the stated palette
  (avoid neon/clashing hues)
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "1 featured hero" recipe (friendly flat-vector illustration, recurring female character + topic props, hand-lettered title with one red accent word). Sample library at `blog-ops/reference/image-samples/`; match the warm, wood-toned `finished-notebooks-shelf` warmth rather than the too-cold `student-desk-spiral`.
- **Source data (if any):** none (illustrative thesis concept, not a data figure).
- **Text-in-image note:** the title "How to Stop Doomscrolling: 12 Science-Backed Strategies" is baked INTO the generation prompt (upper third, "Stop" in red accent, per the blog hero convention). Caveat: image models frequently garble a title this long, verify it is spelled correctly and cleanly kerned; if the model mangles it, regenerate or replace the title with a hand-lettered overlay in post (the blog's established heroes are made that way). Keep the little feed cards wordless (icons only) so the model has no text to garble there.
- **Why this and not remotion/screenshot:** the featured hero follows the blog's locked flat-vector illustrated-character look (per image-style.md), which `ai-prompt` produces and `remotion`/`screenshot` cannot; nothing real to capture.

### Watermark

- **`ai-prompt` slot:** the `olgapak.com` wordmark is requested IN the generation prompt (lower-left, muted light tone, low opacity). AI text rendering is unreliable, so verify it reads exactly `olgapak.com` and is correctly spelled; if the model garbles or omits it, add/replace the `olgapak.com` wordmark post-generation at ~0.55 opacity per `blog-ops/profile/image-style.md`.

---

## In-post images

Each image below corresponds to an `[IMAGE: ...]` placeholder in `draft-v1.md`. One entry per placeholder, in draft order. The featured asset above is **not** an in-post entry.

**Placement rule:** in-post images sit *after* the section heading + the section's first body paragraph.

**Table-redundancy rule:** never spec a chart-style image whose content is already a markdown table in the same section unless the chart adds something the table can't. (This post has no markdown tables, so no duplication risk.)

### Image 1, after H2 "What doomscrolling actually is (and why \"just stop\" never works)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: The doomscroll loop as a clean labeled diagram, trigger to open feed to variable reward/dopamine hit to negativity bias to feel worse to repeat. Type: remotion. Suggested filename: doomscroll-loop-diagram.png]`
- **Type:** `remotion`
- **Concept:** A clean labeled cycle diagram of the doomscroll loop: five sequential step cards (Trigger → Open the feed → Variable reward / dopamine hit → Negativity bias → Feel worse) connected by arrows, with a curved return arrow labeled "and the loop repeats" carrying "Feel worse" back to "Trigger" so the closed cycle is the point.
- **Suggested filename:** `doomscroll-loop-diagram.png`
- **Alt text:** `Doomscroll loop diagram: trigger, open feed, dopamine hit, negativity bias, feel worse, repeat`

#### Production spec

> Conform to `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`.

- **Tool:** Remotion (React → PNG), project at `tools/remotion/`. Studio: `npx remotion studio --port=3003`.
- **Composition `<Still>` ID:** `DoomscrollLoopDiagram` — **new**; create `tools/remotion/src/DoomscrollLoopDiagram.tsx` and register a `<Still id="DoomscrollLoopDiagram" component={DoomscrollLoopDiagram} width={CANVAS.width} height={CANVAS.height} />` in `tools/remotion/src/Root.tsx`.
- **Component file:** `tools/remotion/src/DoomscrollLoopDiagram.tsx` (to create)
- **Canvas dimensions:** In-post, 1800 × 1200; render at `--scale=2`.
- **In-post: NO title, NO subtitle.** The diagram starts near the top safe margin and fills the whole canvas.
- **Visual spec (detailed):**
  - Title text: none (in-post)
  - Subtitle text: none (in-post)
  - Layout: the five step cards arranged as a closed loop, not a straight line, so the "it comes back around" insight is visual. Recommended: a horseshoe/oval path, two step cards across an upper row and two across a lower row with the "Feel worse" card at bottom-left, or a pentagon ring, whichever the builder finds cleanest inside `SAFE_MARGIN`. Each card holds a short bold label (`fonts.sans`) and a one-line `fonts.mono` caption. Sequential arrows connect the five cards in order; ONE prominent curved return arrow runs from the "Feel worse" card back to the "Trigger" card, carrying the label `and the loop repeats`. Keep every arrow's length/gap consistent per the adapter's flow rules; never a flex-grown connector between variable-width cards.
  - Copy (exact strings):
    - Card 1 label: `Trigger` — caption: `boredom, stress, a notification`
    - Card 2 label: `Open the feed` — caption: `a thumb reflex, not a choice`
    - Card 3 label: `Variable reward` — caption: `the next post might be a jackpot`
    - Card 4 label: `Negativity bias` — caption: `threats feel urgent, so you keep looking`
    - Card 5 label: `Feel worse` — caption: `anxious, drained, still scrolling`
    - Return-arrow label: `and the loop repeats`
  - Palette: theme tokens from `tools/remotion/src/theme.ts` (per `blog-ops/profile/image-style.md`). Cards 1–4 use the neutral card recipe (`palette.surface`, `1px solid palette.border`). Card 5 ("Feel worse") uses the **warning/failing variant** (border + status text tinted toward `palette.warn`), the one genuine negative-state element, and the return arrow that closes the loop is drawn in `palette.warn` to read as "this is the trap". Do NOT use `palette.accent` anywhere here: this diagram depicts the problem, there is no "chosen good path / answer" for accent to mark (accent is saved for the strategies that follow).
  - Typography: `fonts.sans` for card labels (bold), `fonts.mono` for the captions and the return-arrow label.
  - Icons / SVG assets: none required (check `tools/remotion/public/` first if the builder wants a small glyph per card; keep it optional, labels carry the meaning).
  - Arrows / connectors: four sequential step connectors between cards 1→2→3→4→5 in `palette.muted`, `strokeWidth={2.5}`, solid, rounded caps, arrowhead in `palette.muted`. One curved return connector 5→1 in `palette.warn`, `strokeWidth={4}`, arrowhead in `palette.warn`, so the "and the loop repeats" closure is the emphasized line. Map every endpoint off a fixed layout grid / helper function, never eyeball pixel offsets.
  - Card recipe: per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` §Card design language; card 5 = warning variant.
- **Source data (if any):** the two named mechanisms are grounded in `facts.md` Statistics — "variable-reward (intermittent reinforcement) schedules … drive dopamine" (line 15, https://pmc.ncbi.nlm.nih.gov/articles/PMC12322333/) and "doomscrolling is positively associated with negativity bias" (line 16, https://pmc.ncbi.nlm.nih.gov/articles/PMC9580444/). The card labels are illustrative summaries of the loop, not verbatim stat values, so no fresh data is needed.
- **Reference composition to mimic:** `tools/remotion/src/Cornell5RsProcess.tsx` (closest existing sequential-process/flow composition for the step-card + arrow conventions); borrow `MethodDecisionFlow.tsx`'s fixed-length arrow discipline and `CornellLayoutDiagram.tsx`'s accent/warn card recipe.
- **Iteration command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still DoomscrollLoopDiagram --output=out/preview-doomscroll-loop-v1.png
  ```
- **Final export command:**
  ```
  REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still DoomscrollLoopDiagram --scale=2 \
    --output="$REPO/blog-ops/assets/how-to-stop-doomscrolling/doomscroll-loop-diagram.png"
  ```
- **Why this and not a real screenshot:** nothing to screenshot; the loop is a conceptual cycle with directional flow (and a closing return arrow) that must stay on-brand, carry crisp verbatim labels, and remain editable, exactly the `remotion` case.

### Watermark

- **`remotion` slot:** shared `<BlogWatermark />` component (import from `./BlogWatermark`). Never inline or reposition.

---

### Image 2, after H2 "Layer 1: Reshape your environment (make the scroll harder to start)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Make your phone boring concept illustration, a grayscale phone with feed icons tucked into a back-page folder while messaging apps stay up front. Type: ai-prompt. Suggested filename: boring-grayscale-phone.png]`
- **Type:** `ai-prompt`
- **Concept:** A friendly flat-vector illustration of a single phone shown in grayscale (drained of color), its bright social/news feed icons swept into a small folder tucked on a back home-screen page, while a couple of plain messaging-app icons stay easy to reach up front, visually saying "make the feeds boring and far, keep real connection close".
- **Suggested filename:** `boring-grayscale-phone.png`
- **Alt text:** `Grayscale phone with feed apps buried in a folder and messaging apps kept up front`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, clean and approachable, of a single
  smartphone shown head-on, held lightly by one simple hand or resting upright. The
  phone's whole screen is deliberately GRAYSCALE, drained to soft black-white-gray, to
  show a "boring phone". On the screen, most app icons are dull gray and swept together
  into one small labelled folder tucked in a far corner of the last home-screen page
  (the feed / social / news apps, hinted only by generic shapes: a play triangle, a
  little globe, a camera, a bird-ish blob, all in gray). Kept separate and easy to reach
  near the bottom, two or three plain messaging-app icons (a speech bubble, an envelope)
  that are allowed to stay simple and legible. Set on a WARM inviting background, soft
  cream or warm wood tone (#F7F7F7 base warmed slightly), generous empty space, a little
  greenery. Flat vector shapes, soft rounded forms, minimal shading, no gradients, no
  photorealism. The one small pop of brand blue #2B6CB0 and teal #0E9F8E is reserved for
  the kept messaging bubbles as an accent, everything feed-related stays gray, so the
  contrast reads "boring feeds vs. useful messaging". Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no readable app names or words, no real brand logos (no actual Instagram/Twitter/X/
  TikTok/Facebook marks), no legible UI text, no numbers, no watermark, no signature, no
  photorealism, no 3D render, no realistic phone OS chrome, no full-color feed on the
  screen, no dark/moody background, no clutter, no extra fingers or distorted hands, no
  colors outside the warm brand palette, no brand blue used as the background
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "one illustration per H2" concept-literal section-illustration look; match the warm, wood-toned `finished-notebooks-shelf` warmth (avoid the too-cold, too-blue `student-desk-spiral`). Section illustrations must NOT be monochrome brand-blue; blue is an accent only here.
- **Source data (if any):** none (illustrative concept: grayscale + friction, not a data figure). Grounded in the section's tactics (grayscale "removes positive reinforcements", `facts.md` line 26; bury the feeds off the home screen).
- **Text-in-image note:** communicate purely through icon shape and the color/grayscale contrast; keep app labels wordless. If the human wants a "feeds" folder label or a "messaging" label, add it as a post-processing text overlay rather than trusting the model's raw in-image text.
- **Why this and not remotion/screenshot:** an illustrative "make your phone boring" concept suits the blog's flat-vector section-illustration look; there is no precise data or verbatim text to render, and a real screenshot would expose actual third-party brand logos (off-brand) and can't show the grayscale-metaphor cleanly.

### Watermark

- **`ai-prompt` slot:** add the `olgapak.com` watermark post-generation at 0.55 opacity per `blog-ops/profile/image-style.md` if the output lacks one.

---

### Image 3, after H2 "Layer 3: Rebuild your routine (design days that don't need willpower)" + 1 paragraph

- **Draft placeholder (verbatim):** `[IMAGE: Phone-free morning concept illustration, sunrise with a real alarm clock and a wristwatch on the nightstand while the phone charges in another room. Type: ai-prompt. Suggested filename: phone-free-morning.png]`
- **Type:** `ai-prompt`
- **Concept:** A warm flat-vector illustration of a calm phone-free morning: a nightstand by a window with warm sunrise light, holding a simple analog alarm clock and a wristwatch, while through a doorway in the background a phone sits charging on a shelf in another room, saying "the two reasons you reach for the phone (time + alarm) are handled, so the day starts screen-free".
- **Suggested filename:** `phone-free-morning.png`
- **Alt text:** `Sunrise nightstand with an alarm clock and wristwatch, phone charging in another room`

#### Production spec

#### If `ai-prompt` (manual: paste into your AI image tool of choice)

- **Tool:** ChatGPT image (gpt-image / DALL·E) or Midjourney
- **Prompt:**
  ```
  Friendly flat-vector editorial illustration, warm and optimistic, of a calm phone-free
  morning. Foreground: a cozy wooden nightstand beside a bed near a window, bathed in
  warm golden sunrise light. On the nightstand sit two clear focal props, a simple retro
  analog alarm clock with little bells, and a wristwatch resting beside it. Background,
  seen through an open bedroom doorway: a smartphone sitting on a shelf or dresser in
  ANOTHER room, plugged into a charger with a small charging light, clearly away from the
  bed. A little greenery (a small potted plant on the sill) and a mug for warmth. Soft
  morning color: warm cream, honey, wood browns, a peachy sunrise sky through the window.
  Flat vector shapes, soft rounded forms, minimal shading, no gradients, no photorealism.
  Brand blue #2B6CB0 and teal #0E9F8E used only as small accents (the clock face rim, the
  charger light, a book spine), never as the dominant fill, the scene stays warm.
  Generous empty space, uncluttered, no people needed. Aspect ratio 3:2.
  ```
- **Aspect ratio:** `3:2`
- **Negative prompt** (if the tool supports it):
  ```
  no phone on the nightstand or in the bed, no readable numbers on the clock face, no
  legible text, no words, no watermark, no signature, no photorealism, no 3D render, no
  dark/moody or cold blue lighting, no nighttime, no clutter, no extra limbs, no brand
  logos, no colors outside the warm brand palette, no brand blue used as the background
  or dominant fill
  ```
- **Style reference (if any):** `blog-ops/profile/image-style.md` §"Observed conventions" — the "one illustration per H2" concept-literal section-illustration look; explicitly match the warm, wood-toned `finished-notebooks-shelf` reference for warmth and natural light.
- **Source data (if any):** none (illustrative routine concept). Grounded in the section's tactics (charge the phone outside the bedroom; trade the phone alarm/clock for real ones), no facts.md figure is load-bearing.
- **Text-in-image note:** keep the clock face and any labels wordless / non-numeric; AI-rendered clock numerals garble easily. If a specific time is wanted on the clock, add it as a post-processing overlay rather than trusting the model.
- **Why this and not remotion/screenshot:** an illustrative, warm "phone-free morning" scene suits the blog's flat-vector section-illustration look; there is no precise data or verbatim text to render, and there is nothing real to capture.

### Watermark

- **`ai-prompt` slot:** add the `olgapak.com` watermark post-generation at 0.55 opacity per `blog-ops/profile/image-style.md` if the output lacks one.

---

## File destination (copy these paths when saving)

```
blog-ops/assets/how-to-stop-doomscrolling/
├── featured.png                   (ai-prompt)
├── doomscroll-loop-diagram.png    (remotion, Still: DoomscrollLoopDiagram — new)
├── boring-grayscale-phone.png     (ai-prompt)
└── phone-free-morning.png         (ai-prompt)
```

Asset folder is created automatically by the Phase 4 finalize step (Gate 2 approval).

## Tools reference

1. **Remotion compositions:** project at `tools/remotion/`. Adapter: `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. `DoomscrollLoopDiagram` must be authored and registered in `src/Root.tsx`. Use `<BlogWatermark />` and the tokens in `src/theme.ts`; reference `Cornell5RsProcess.tsx` / `MethodDecisionFlow.tsx` for flow + arrow conventions.
2. **AI-generated (`ai-prompt` manual):** adapter `${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`. Human pastes the `Prompt:` block into the named tool and saves to the asset folder verbatim.
3. **Screenshots:** none in this post.
4. **Watermark + polish:** `remotion` slot uses `<BlogWatermark />` (no manual pass). `ai-prompt` outputs get the `olgapak.com` wordmark at 0.55 opacity post-generation if absent. Output format: PNG.

## Naming conventions (from `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`)

- Lowercase, kebab-case, descriptive
- Good: `doomscroll-loop-diagram.png`
- Bad: `image1.png`, `screenshot.jpg`, `IMG_0042.PNG`

## What the human does

1. Create each image per its production spec.
2. Save to `blog-ops/assets/how-to-stop-doomscrolling/` using the suggested filenames.
3. Verify file sizes (<200 KB for featured, <500 KB for in-post is a good rule of thumb).
4. Once all images exist locally, tick the "Create images" section in `action-items.md`.

## Generation outcome (2026-07-18)

All 4 assets produced and saved to `blog-ops/assets/how-to-stop-doomscrolling/`:
- `doomscroll-loop-diagram.png` — Remotion `DoomscrollLoopDiagram` (authored + registered in `tools/remotion/src/Root.tsx`), rendered at `--scale=2` (3600×2400). Warn-tinted "Feel worse" card + return arrow kept per the planner's spec.
- `featured.png`, `boring-grayscale-phone.png`, `phone-free-morning.png` — generated via the `codex exec` built-in imagegen skill (gpt-image, 1536×1024, 3:2). The featured hero's baked-in title ("How to Stop Doomscrolling: 12 Science-Backed Strategies", "Stop" in red) rendered cleanly and correctly spelled — modern image models handle described text reliably, so the earlier "garble" caveat did not apply. `olgapak.com` wordmark present and correct on all three.

## Editor notes

- **Slot/placeholder count matches:** 3 draft `[IMAGE:]` placeholders (draft-v1.md lines 27, 41, 83) = 3 in-post slots in the outline's image placement plan. No mismatch. Featured lives in frontmatter only (not an in-post slot). No `[IMAGE:]` placeholder is named `featured.*` and none duplicates the featured concept, no featured-duplication violation.
- **No table-duplicate charts:** the post contains no markdown tables, so no chart/diagram duplicates a table.
- **Featured concept kept as specified (passes the hard rule):** the couch-at-night + spiraling-feed-ribbon hero is a single bold metaphor with ≤3 focal objects, not a multi-callout infographic, so no reshape was needed. Type stayed `ai-prompt` (= `images.featured_default`). I steered the palette WARM with brand blue as an accent only, per `image-style.md`'s illustration-palette rule, so the night scene reads hopeful, not bleak or cold.
- **Priority-ladder check:** Image 1 (doomscroll loop) correctly went `remotion`, it is a branded labeled cycle diagram with directional flow, crisp verbatim labels, and a closing return arrow, the exact `remotion` case; `ai-prompt` would garble the labels. Images 2 and 3 are genuinely illustrative concept scenes (grayscale-phone metaphor, warm morning) with no verbatim text or data, so `ai-prompt` is right; a `screenshot` would either have nothing real to capture or expose off-brand third-party app logos. Featured → `ai-prompt` per `images.featured_default`. No `screenshot` slots (enabled, but nothing real to capture in this post).
- **No chart needs fresh data:** the only diagram (Image 1) uses illustrative loop labels grounded in `facts.md` lines 15–16 (variable-reward/dopamine + negativity bias); nothing requires data not already in `facts.md`.
- **Judgment call for the human to override:** in Image 1 I reserved `palette.accent` (used `palette.warn` for the "Feel worse" card + return arrow instead) because this diagram depicts the problem, not the solution, so nothing earns the "this is the answer" accent. If you'd rather the loop feel less alarming, the builder can drop the warn tint to neutral/muted, your call.
