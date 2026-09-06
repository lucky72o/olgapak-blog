# Action items: best-highlighters-for-studying

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/best-highlighters-for-studying/draft-v3.md` markers + `blog-ops/drafts/best-highlighters-for-studying/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/best-highlighters-for-studying/`, the archived working files (outline, facts, images.md, draft-v3.md, review history).
> - **Live post (where you edit):** `content/blog/best-highlighters-for-studying.md`, marker fixes and any late edits land here.
> - **Asset folder:** `blog-ops/assets/best-highlighters-for-studying/`, contains `README.md` (copy of images.md) plus the 5 rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/best-highlighters-for-studying/draft-v3.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: 20 minutes (all 5 images are already rendered; the real work is the read-through, the Rank Math focus keyword, and clicking Publish).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/best-highlighters-for-studying/` → `blog-ops/drafts/_archive/best-highlighters-for-studying/` for the history files, and the draft becomes `content/blog/best-highlighters-for-studying.md`, the live post you edit.

- Draft (pre-finalize): `blog-ops/drafts/best-highlighters-for-studying/draft-v3.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/best-highlighters-for-studying.md`.
- Approved outline: `blog-ops/drafts/best-highlighters-for-studying/outline.md` → archived to `blog-ops/drafts/_archive/best-highlighters-for-studying/outline.md`
- Image plan: `blog-ops/drafts/best-highlighters-for-studying/images.md` → archived + copied to `blog-ops/assets/best-highlighters-for-studying/README.md`
- Review history: `review.md` + `review-v1.md` (synthetic length gate) + `review-v2.md` (request_revisions) + `review-v3.md` (approve) → archived
- Total word count: 3,331 total / 2,959 body prose (outline roll-up target 2,600)
- Author: `olga`
- Category: Productivity + EdTech (WP term ids [12, 9])
- Target keyword: `best highlighters for studying`

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/best-highlighters-for-studying/images.md` (also copied to `blog-ops/assets/best-highlighters-for-studying/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/best-highlighters-for-studying/images.md`.

**All 5 slots were rendered automatically at Stage 4a.5 (0 pending, 0 failed).** Every box below is a verify-the-render check, not a build TODO.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` (archetype `split-contrast`; rotation entry `blog-ops/featured-log/2026-09-06-best-highlighters-for-studying.md`)
- [ ] Image 1: `three-colour-highlighting-key.png`, see images.md §Image 1, type: `remotion`
- [ ] Image 2: `highlighter-tip-shapes-neon-vs-pastel.png`, see images.md §Image 2, type: `remotion`
- [ ] Image 3: `study-desk-selective-highlights.png`, see images.md §Image 3, type: `ai-prompt`
- [ ] Image 4: `highlight-first-write-second.png`, see images.md §Image 4, type: `ai-prompt`

**Remotion slots** (2 total): both are already built, registered and exported. Each `remotion` entry in images.md carries its composition ID + exact render command if you want to re-export.

- [ ] Remotion: `ThreeColourHighlightingKey` → `three-colour-highlighting-key.png` (composition built, registered, exported)
- [ ] Remotion: `HighlighterTipShapes` → `highlighter-tip-shapes-neon-vs-pastel.png` (composition built, registered, exported)

Re-export command (either slot, worktree-safe):
```bash
REPO=$(git rev-parse --show-toplevel) && cd "$REPO/tools/remotion" && npx remotion still <Id> --scale=2 \
  --output="$REPO/blog-ops/assets/best-highlighters-for-studying/<filename>"
```

> **Heads-up, ships with this post's PR:** `tools/remotion/src/Root.tsx` carried a JSX syntax error from the previous post (`<Still id="FourCorePagesMap" ...>` was never closed), which would have broken *every* Remotion render in the project. Stage 4a.5 fixed it while registering the two new stills. That fix plus `src/ThreeColourHighlightingKey.tsx` and `src/HighlighterTipShapes.tsx` are in this post's branch, so review them in the PR diff alongside the post.
>
> The worktree has no `tools/remotion/node_modules` (the temporary symlink used for rendering was removed, since `.gitignore`'s `node_modules/` pattern does not match a symlink and it would otherwise have been committable). Run `npm install` in `tools/remotion/` there if you want to re-render from the worktree.

**AI-generated slots** (3 total, `ai-prompt`): rendered automatically at Stage 4a.5 via codex.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `study-desk-selective-highlights.png` (generated, reviewed, saved) — took two codex runs; the first came back photoreal CGI, which `blog-ops/profile/image-style.md` rules out, so it was re-run with a flat-vector-tightened brief
- [ ] AI: `highlight-first-write-second.png` (generated, reviewed, saved) — images.md flags the small "before" smear inset as AI-fragile, with an explicit ship-without-it rule if it reads badly

Save all to: `blog-ops/assets/best-highlighters-for-studying/` (already done)

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

These were resolved automatically at Stage 3d (marker auto-resolution), so there is nothing to do here. This section is the audit log of what the editor did. **No residual markers were left for you: 3 of 3 resolved, 0 kept-general, 0 deleted, 0 competitor-routed.**

Stage 3d resolution log (one row per marker the writer left):

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v3.md:63` | highlighting rated low utility in Dunlosky et al. 2013, PSPI 14(1) | `resolved` | Cited as already anchored: `https://journals.sagepub.com/doi/10.1177/1529100612453266`. Wording confirmed on APS, the journal's own publisher: "highlighting and underlining, and rereading" got "a low utility rating", while "practice testing and distributed practice — made the grade, receiving the highest overall utility rating" (`https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html`, HTTP 200). The DOI page 403s to curl/WebFetch but renders normally in the logged-in browser (title, authors, "Volume 14, Issue 1" confirmed by screenshot), so the canonical DOI anchor was kept rather than swapped. |
| 2 | `draft-v3.md:159` | FriXion Light has a chisel tip, and its heat-sensitive ink clears with heat such as a hot car or a radiator | `resolved` | Chisel tip confirmed on Pilot's own product page ("3mm Chisel tip"), `https://pilotpen.com.au/markers/frixion-light`, read in the browser; "3mm chisel tip" added to the prose. Heat half confirmed on Pilot's own FAQ (ink "heats up to over 60°C and becomes invisible"; warns about "heaters, in a car on a hot day") and now cited inline on the "Watch out" line, so line 159 and the previously-unmarked assertion at line 163 were resolved in one edit: `https://www.pilotpen.eu/faq/` (HTTP 200). |
| 3 | `draft-v3.md:167` | Sharpie Clear View uses Smear Guard ink | `resolved` | Confirmed verbatim on Sharpie's own Clear View Stick page (`https://www.sharpie.com/highlighters/sharpie-clear-view-stick-highlighters-see-through-chisel-tip/SAP_1966798.html`, read in the browser; it 403s to curl/WebFetch): "Sharpie highlighters also feature Smear Guard® ink (let ink dry before highlighting)." Marker dropped with **no new external link**: the post already scopes this as what Sharpie "markets" on the line, and the post sits at 6 non-buy external links against the standard's 3–5 band. Source recorded in `facts.md` instead. |

> **Related, already handled at review-v2:** the draft originally attributed Smear Guard ink to the Sharpie **Pocket** line too. Sharpie's Pocket page does not mention it (`research/_raw/_stage3d_prep.md`), so that clause and its marker were cut. Do not let it back in.
>
> **Link-budget deviation for the record:** non-buy external links went 5 → 6 (the Pilot FAQ). One over the standard's 3–5 band, spent deliberately on the heat warning, the one claim in the post that can cost a reader their notes.

Outcome key:
- `resolved`, marker replaced with the confirmed claim + an allowlist/primary citation. Nothing to do.
- `kept-general`, claim was true-in-spirit but not citable as stated; rewritten to a defensible general version, marker dropped. Nothing to do.
- `deleted`, claim could not be confirmed from any allowlist/primary source; the minimal span was removed (the removed text is logged).

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

None. The writer left zero `[EXTERNAL_LINK_NEEDED:]` markers; the grep at Stage 4b confirms 0 hits.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer resolved every internal link against the outline's existing-posts table; the grep at Stage 4b confirms 0 hits. The post carries 6 internal links, all root-relative and without a trailing slash (`blog.trailing_slash: false`).

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. **These are APPLIED AUTOMATICALLY at Stage 4b.5** to the repo copies, per `blog-ops/profile/custom-instructions.md` §Inbound internal links, so each row below is a record + publish reminder, not a build TODO.

This post's WordPress status stays `draft` through Gate 2, so the live-application branch of the adapter (`publish.wordpress.apply_inbound_links_live: true` AND status `publish`) does not fire yet: the repo copies are edited now, and the live WP posts are updated once this post is published.

- [ ] `content/blog/best-pens-for-note-taking.md`, applied at Stage 4b.5: anchor "`the best highlighters for studying`" → `/best-highlighters-for-studying`, in §"Your paper matters as much as your pen", appended to the paragraph beginning "One more pairing rule". Hand-apply to the live WP post in wp-admin (or let the post-publish live sync do it), and confirm it rendered in the Gate 2 preview.
- [ ] `content/blog/best-notebooks-for-note-taking.md`, applied at Stage 4b.5: anchor "`the best highlighters for studying`" → `/best-highlighters-for-studying`, in §"How to choose a notebook for note-taking", appended to the paragraph beginning "Worth saying plainly: all three of these are a pairing problem". Hand-apply to the live WP post in wp-admin, and confirm it rendered in the Gate 2 preview.
- [ ] `content/blog/cornell-note-taking-method.md`, applied at Stage 4b.5: anchor "`the best highlighters for studying`" → `/best-highlighters-for-studying`, extending the last bullet of the setup list in §"The Cornell page layout". Hand-apply to the live WP post in wp-admin, and confirm it rendered in the Gate 2 preview.

Prefilled commands for the live hand-apply (per target; build the body with `jq`, never a hand-quoted string):
```bash
# 1) fetch the target post's raw content
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/best-highlighters-for-studying">the best highlighters for studying</a>
# 3) POST the edited content back
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md`
- [ ] Check the 9 tagged Amazon links still resolve to the right product and carry `?tag=op01e-20`, and that the 2 brand product pages (Stabilo, Pilot SG) still load. The Stabilo Boss Original Pastel pick (`B01MR2AC1N`) is a marketplace listing that was **low stock on 2026-09-05** — worth a look before publishing
- [ ] Confirm the affiliate disclosure is the last paragraph of the intro, immediately before the first `##` heading
- [ ] `modules.competitors` is off for this blog: no competitor pricing/feature check applies

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`).

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled by Stage 4b.5 staging into `pr-monitor.json`; also shown on the Gate 2 banner)
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter)
- [ ] **Focus keyword (manual, required).** Set the focus keyword in **Rank Math** to exactly: `best highlighters for studying`. Per `blog-ops/profile/site-conventions.md` §SEO plugin this is **not** exposed on the standard `wp/v2/posts` REST schema, so the workflow never writes it: set it yourself in the WP editor's Rank Math panel before publishing.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per action-items §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/best-highlighters-for-studying` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fbest-highlighters-for-studying`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Apply the 3 §4b inbound links to the LIVE WordPress posts (they are applied to the repo copies already; the live ones only become linkable once this post is published)
- [ ] If the frontmatter template emits a JSON-LD FAQ schema: validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fbest-highlighters-for-studying`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step. (If you turn it on later: `/repurpose-blog-post best-highlighters-for-studying`.)

## 10. Archive cleanup (automatic at Gate-3 finalize)

The finalize step already moved `blog-ops/drafts/best-highlighters-for-studying/` → `blog-ops/drafts/_archive/best-highlighters-for-studying/`. Verify:

```bash
ls blog-ops/drafts/best-highlighters-for-studying/          # should NOT exist
ls blog-ops/drafts/_archive/best-highlighters-for-studying/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete, re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits (3 written by the writer, all resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/best-highlighters-for-studying/draft-v3.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/best-highlighters-for-studying.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The 4 `[IMAGE:]` placeholders are replaced with real embeds by Stage 4b.5 staging, since all 5 renders exist on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder
