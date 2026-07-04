# Image research — existing olgapak.com posts

Analysis of images from 8 published posts (April 2023–April 2024), captured
2026-07-04. Sample images and contact sheets live in
`blog-ops/reference/image-samples/` (`sheet_featured.png`,
`sheet_section.png`, `sheet_screenshots.png`); source URLs in
`_image-urls.json`.

## Posts analyzed

best-blogging-tools-for-beginners · productive-things-to-do-on-your-phone ·
planning-tips-to-maximize-productivity · productivity-skills ·
benefits-of-planning-ahead · how-to-stay-focused-on-goals ·
must-try-innovations-to-improve-productivity-with-ai · what-is-timeboxing

## Image roles per post

Every post follows the same structure:

1. **One featured (hero) image** — topic-named, 3:2 landscape.
2. **One illustration per H2 section** — named after the subheading; a
   list-style post ("11 things…") has ~8–12 of these. This is the dominant
   in-post image type by volume.
3. **Tool screenshots** — only in tool-roundup / how-to posts (e.g. the
   blogging-tools and AI posts); clean full-page captures.
4. **Related-post thumbnails** at the foot of the article — these are just
   other posts' featured images reused by the theme's related-posts widget,
   NOT editorial images. Excluded from this analysis.
5. The site favicon/logo (`Favicon-Blanka-McKinsey-transparent-1.png`) appears
   on every page as chrome — not editorial.

## Featured (hero) image style

- **Aspect ratio:** 3:2 landscape (originals ~1200×800+, served at 1024×683).
  Matches the Remotion canvas (1800×1200).
- **Composition:** big overlaid **post title** + a **flat vector
  illustration** on a single-color background.
- **Typography:** playful, Canva-style — a **hand-lettered / script** face
  mixed with a **rounded bold sans**, with **one accent word colored** (most
  often red, e.g. "fast", "[that work]"). Titles frequently number-led
  ("11", "7", "12"). NOTE: this is NOT the site's Montserrat body font.
- **Illustration:** friendly cartoon flat-vector — a recurring **female
  character** (Olga stand-in; dark or red hair) plus topic props (robot,
  rocket, phone, laptop, hourglass, road sign, books, big arrows).
- **Background:** one bright, saturated solid or soft gradient per post,
  varied across posts (orange, sky blue, green, teal, gray, white).
- **Watermark:** `olgapak.com`, small, bottom of image.
- **Mood:** energetic, optimistic, motivational, approachable.

## In-post section-header image style

- Same flat-vector + hand-lettered-title look as the hero, but the **title is
  the section subheading** (e.g. "Time management skills", "Delete all unused
  apps & files!").
- **Backgrounds are softer/pastel** (mint, pale blue, teal) vs the hero's
  brighter fields.
- **Concept-literal illustration:** the drawing depicts the heading idea (a
  clock held in two hands for time management; phone + recycling bin for
  decluttering; an elephant for the "eat an elephant a bite at a time"
  metaphor; SMART shown as a labeled acronym stack).
- **Occasional real photo** instead of illustration (e.g. a woman meditating
  at the beach for "use meditation apps") — used sparingly for lifestyle
  moments.
- **Annotated screenshots for how-to / comparison** content: real app UI with
  **red callout boxes and arrows** (e.g. Timeboxing vs Time-blocking compared
  side by side). This is the one place heavy annotation appears.

## Tool screenshot style

- Clean, **full-page product/homepage captures**, no browser chrome, landscape.
- Shown at readable width to identify the tool being discussed.
- Minimal/no annotation (annotation is reserved for how-to comparisons above).

## File formats observed

Predominantly **PNG** (illustrations + screenshots); some **JPG** and **WEBP**
(the AI post mixed all three). No strict convention — PNG is the safe default;
WEBP is fine for photographic content to save weight.

## Decision (2026-07-04): match the existing look

The existing library is a **playful, hand-lettered, flat-illustration** look
(Canva-style) — warm and character-driven. Rather than evolve toward the
cleaner Remotion aesthetic, we chose to **match the existing style** for
continuity:

- **Featured default is now `ai-prompt`** (changed from `remotion`). Featured
  heroes and section illustrations are generated via `ai-prompt` with a prompt
  describing the flat-vector + script-title + red-accent-word + recurring-
  character style.
- **Remotion stays enabled** but is reserved for genuinely diagrammatic slots
  (side-by-side comparisons, process/flow diagrams).
- **Screenshots** for tool captures — plain for roundups, red callout boxes +
  arrows for how-to comparisons.

Actionable version captured in `profile/image-style.md` → "Observed
conventions".
