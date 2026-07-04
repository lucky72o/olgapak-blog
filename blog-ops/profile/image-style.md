# Image style

## Palette

| Token | Hex |
|---|---|
| background | #F7F7F7 |
| surface | #FFFFFF |
| border | #E5E7EB |
| text | #222222 |
| muted | #6B7280 |
| primary | #2B6CB0 |
| accent | #0E9F8E |
| warn | #E11D48 |

Derived from the live site: background `#F7F7F7`, body text `#3B3B3B`,
headings `#222222`, and the brand-blue CTA/link color `#2B6CB0` used as
`primary`. Accent teal and warn red kept from sensible defaults for contrast.

## Fonts

**Sans:** Montserrat, ui-sans-serif, sans-serif
**Mono:** ui-monospace, monospace

Montserrat matches the site's heading font.

## Mood

Clean, approachable, confident, productive.

## Watermark

**Text:** olgapak.com
**Opacity:** 0.55

## Annotation conventions

**Accent color:** palette.accent (#0E9F8E)
**Stroke width:** 3px
**Corner radius:** 6px

## Aspect ratio defaults

3:2 for featured and most in-post images; adjust per-slot when a chart or
screenshot genuinely needs a different ratio.

## Observed conventions (from published posts)

Derived from 8 existing posts — full analysis in
`blog-ops/reference/image-research.md`, samples in
`blog-ops/reference/image-samples/`. Use these when planning image slots so
new posts stay consistent with the existing library.

**Every post uses this image set:**
- **1 featured hero** (3:2): big overlaid post title + a friendly flat-vector
  illustration on one bright, saturated single-color background. Title uses a
  playful hand-lettered/script face mixed with a rounded bold sans, with one
  accent word colored (usually red); titles are often number-led ("11", "7").
  A recurring female character (Olga stand-in) plus topic props appears. Mood:
  energetic, optimistic, approachable.
- **One illustration per H2 section**: same flat-vector + lettered-title look
  as the hero but titled with the subheading, on softer pastel backgrounds.
  The drawing is concept-literal (depicts the heading's idea). This is the
  highest-volume image type — plan one per major section for list/how-to posts.
- **Real photos** used sparingly for lifestyle moments (e.g. meditation).
- **Annotated screenshots** (red callout boxes + arrows) for how-to /
  side-by-side comparisons; plain full-page screenshots for tool roundups.

**Formats:** PNG default; WEBP acceptable for photographic content.

**Chosen direction (match existing style):** featured default is `ai-prompt`.
Generate featured heroes and section illustrations via `ai-prompt` — the
prompt should call for the established look: **friendly flat-vector
illustration, single bright/pastel background, a hand-lettered/script title
mixed with a bold rounded sans, one red accent word, the recurring female
character where a person fits, and the `olgapak.com` watermark.** Reserve
**Remotion** for genuinely diagrammatic slots only (side-by-side comparisons,
process/flow diagrams), where its clean geometric look is an asset. Use
`screenshot` for tool captures (plain for roundups; red callout boxes + arrows
for how-to comparisons). See `blog-ops/reference/image-research.md` for the
full analysis and sample library.
