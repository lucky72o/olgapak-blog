# Site conventions

> **Provenance:** hand-migrated on 2026-07-05 from the repo's former `CLAUDE.md`
> + `blog-ops/reference/md-to-gutenberg.py` (PR #2), NOT from a live-site
> inspection pass. The category taxonomy/IDs and post-furniture rows below are
> only as complete as those docs were. **Recommended:** re-run `/blog-setup`'s
> existing-blog site-inspection (adapter `## Site inspection (setup-time)`) once
> to verify these against the live site and fill the full category taxonomy.

## Platform

- **Editor / build system:** WordPress block editor (Gutenberg), served on WPX
  hosting with the Kadence theme.
- **Block/component library:** core WordPress blocks plus the **Kadence** block
  library (the site's theme). Posts use core `wp:paragraph`/`heading`/`list`/
  `image` blocks for body content and the Kadence table-of-contents block (below).

## Table of contents

Yes — existing posts carry a **Kadence** dynamic table-of-contents block placed
before the first heading (auto-builds from H2/H3; see reference WP post **1321**).
Passed as-is to `md-to-gutenberg.py --extra-blocks` (position `after-intro`).
Copied from this blog's convention verbatim (dynamic self-closing block — Kadence
renders the list from the post's own headings at view time):

```
<!-- wp:kadence/tableofcontents {"uniqueID":"toc_olgapak-1","allowedHeaders":[{"h1":false,"h2":true,"h3":true,"h4":true,"h5":false,"h6":false}],"listStyle":"none","linkStyle":"underline_hover","containerBackground":"palette9","titleColor":"palette3","titleFontWeight":"bold","titleBorderColor":"","titleTextTransform":"uppercase","enableToggle":true,"toggleIcon":"arrowcircle","contentColor":"palette1","contentHoverColor":"palette2","contentFontWeight":"inherit","listGap":[null,"",""],"displayShadow":true,"shadow":[{"color":"#000000","opacity":0.5,"spread":-10,"blur":25,"hOffset":0,"vOffset":14,"inset":false}],"enableSmoothScroll":true,"borderStyle":[{"top":["palette3","",2],"right":["palette3","",2],"bottom":["palette3","",2],"left":["palette3","",2],"unit":"px"}],"titleBorderStyle":[{"top":[null,"",""],"right":[null,"",""],"bottom":[null,"",""],"left":[null,"",""],"unit":"px"}],"enableTitleToggle":true} /-->
```

> Note: the former converter derived a per-post `uniqueID` (`toc_<slug>-1`); a
> single static `uniqueID` here is fine for a dynamic TOC (it only scopes the
> block's CSS). Re-inspecting a live post will confirm the exact current markup.

## Categories

**Taxonomy** (partial — only the categories referenced in the former `CLAUDE.md`
are confirmed; re-run site inspection for the full `GET /wp-json/wp/v2/categories`
list):

- Productivity  (WP term id **12**)
- EdTech  (WP term id **9**)
- (others not yet inspected — confirm/complete via site inspection)

**Per-cluster mapping** (pillars from `blog.md` §Content pillars → category; the
adapter resolves by category **name** at staging, IDs are informational):

| Content pillar | Category |
|---|---|
| Productivity systems & strategies (timeboxing, planning, focus) | Productivity |
| AI tools for productivity and content creation | Productivity |
| Blogging & content creation | Productivity *(no dedicated category confirmed — human to confirm/create)* |
| Digital wellbeing / beating phone distraction | Productivity *(human to confirm)* |
| Learning & self-growth | EdTech |
| Note-taking / study-guide posts (sub-cluster) | Productivity + EdTech `[12, 9]` |

`templates/brief.md`'s Category field resolves against this table. A post never
ships as "Uncategorized".

## SEO plugin

- **Name:** **Rank Math**.
- **Focus-keyword mechanism:** set via Rank Math's meta box in the WP editor
  after the draft is created (the value = the post's target keyword).
- **Settable via standard REST?** **No** — not exposed on the standard
  `wp/v2/posts` schema. Recorded as a manual action item (action-items §7): the
  human sets the focus keyword in the editor's Rank Math panel before publishing.

## Permalinks

- **Format:** `/<slug>` (site root + slug; `route_prefix: /`).
- **Trailing slash:** no.

Agrees with `blog.trailing_slash: false` in `config.yaml`. Internal links (both
outbound in the post and inbound added to other posts) are root-relative with NO
trailing slash.

## Post furniture

- **Author box:** assumed theme-automatic (Kadence) — not yet confirmed by
  inspection; nothing for the workflow to emit unless inspection says otherwise.
- **Related posts:** the workflow curates inbound internal links explicitly
  (2–4 existing related posts pointed at each new post); any theme "related
  posts" widget is separate. Confirm via inspection.
- **Disclosure blocks:** **Amazon affiliate links are HELD** until the Associates
  program is live — posts leave a marked placeholder, NO live affiliate links
  (see `custom-instructions.md`). No standing disclosure line is emitted yet.
- **Should generated content include any of the above?** Author box / related
  widget: no (theme-automatic, pending confirmation). Affiliate disclosure: not
  until affiliate links go live.

## Notes

- Reference well-structured post: WP id **1321** (block structure + Kadence TOC).
- After any REST update to an open post, the WP editor shows a stale "Restore the
  backup" banner — dismiss/reload, do NOT restore (see `custom-instructions.md`).
- Category taxonomy here is partial; treat a live site-inspection as the way to
  complete it rather than guessing new IDs.

**Last inspected:** 2026-07-05 (hand-migrated from `CLAUDE.md`/PR #2, not a live
adapter inspection — re-run `## Site inspection (setup-time)` to verify).
