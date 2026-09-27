# Action items: aesthetic-stationery

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/aesthetic-stationery/draft-v2.md` markers + `images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/aesthetic-stationery/`
> - **Live post (where you edit):** `content/blog/aesthetic-stationery.md`
> - **Asset folder:** `blog-ops/assets/aesthetic-stationery/` (contains `README.md` = copy of images.md, plus the 5 rendered PNGs)

Read by: the human operator before publishing.

**Purpose:** the single page to work through after Gate 2. Estimated total time: **15 minutes** (nearly everything was automated this run; the real work is the Rank Math focus keyword and clicking Publish).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/aesthetic-stationery/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/aesthetic-stationery.md`.
- Approved outline: `blog-ops/drafts/aesthetic-stationery/outline.md` → archived
- Image plan: `blog-ops/drafts/aesthetic-stationery/images.md` → archived + copied to `blog-ops/assets/aesthetic-stationery/README.md`
- Review history: `review.md` + `review-v1.md`, plan review: `plan-review.md` + `plan-review-v1.md` → archived
- Total word count: 3419 (body prose excl. FAQ measured at 2,905 at Stage 3b; target 2,400-2,900)
- Author: `olga` (byline: Olga Pak)
- Category: **Productivity**
- Target keyword: **aesthetic stationery**

## 1. Create images (5 total)

Image spec: `blog-ops/assets/aesthetic-stationery/README.md` (also archived at `blog-ops/drafts/_archive/aesthetic-stationery/images.md`).

**All five were rendered automatically at Stage 4a.5. Nothing to build. These are verify-the-render checks.** Estimated time: 3 minutes.

- [ ] Featured image: `featured.png`, images.md §Featured image, type: `ai-prompt` — rendered, hand-lettered title reads "Aesthetic Stationery: 17 Best Picks That Earn Their Space"
- [ ] Image 1: `staged-versus-real-desk.png`, images.md §Image 1, type: `ai-prompt` — rendered
- [ ] Image 2: `downsizing-filter-diagram.png`, images.md §Image 2, type: `remotion` — rendered
- [ ] Image 3: `pens-highlighters-group.png`, images.md §Image 3, type: `ai-prompt` — rendered
- [ ] Image 4: `notebooks-open-pages.png`, images.md §Image 4, type: `ai-prompt` — rendered

**Remotion slots** (1 total):

- [ ] Remotion: `DownsizingFilterDiagram` → `downsizing-filter-diagram.png` (composition built at `tools/remotion/src/DownsizingFilterDiagram.tsx`, registered in `Root.tsx`, exported at 1800x1200). Both files ship in this post's PR.

**AI-generated slots** (4 total, `ai-prompt`, generated via the codex path):

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `staged-versus-real-desk.png` (generated, reviewed, saved)
- [ ] AI: `pens-highlighters-group.png` (generated, reviewed, saved)
- [ ] AI: `notebooks-open-pages.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/aesthetic-stationery/` (ownership sentinel `.staged-by-blog-workflow` present).

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

**None.** The writer left zero `[VERIFY:]` markers; every factual claim traced to a `facts.md` row. Nothing to do.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

Three markers, all closed by the editor at Stage 3d. Audit log:

| # | Line (draft-v2) | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | 31 | the "fresh start effect", that a date felt as a new beginning increases motivation to pursue goals | `resolved` | https://hbr.org/2014/08/youre-more-likely-to-pursue-your-goals-after-a-birthday-or-the-first-of-the-month (HBR, `authoritative_allowlist`, HTTP 200, page confirmed to carry the claim). The page's per-landmark percentages were deliberately NOT quoted; the post cites the qualitative claim only. |
| 2 | 55 | the sunk-cost fallacy, that people keep investing because of what they already spent | `resolved` | https://pmc.ncbi.nlm.nih.gov/articles/PMC6324799/ (NLM/PMC, `primary_source`, HTTP 200). Carries the Arkes & Blumer definition verbatim; confirmed by direct browser read because WebFetch was captcha-blocked on PMC. |
| 3 | 125 | writing notes by hand aids retention compared with typing | `deleted` | **Claim removed.** Removed text: "and there is a wider case that [writing notes by hand aids retention compared with typing]". The evidence is genuinely contested: Mueller & Oppenheimer (2014) carries a 2018 corrigendum, and a large direct replication (Urry et al.) reports its results do not support better encoding from longhand. This was the one claim plan review flagged as untraceable to any research file, and it did not survive verification. The surrounding sentence stands on its own; skim line 125 if you want to confirm it reads well. |

**Note:** the post therefore ships with **2** editorial external links, below `blog-craft.md`'s 3-5 target. This was accepted at plan review as better than inventing a citation or linking a ranking competitor: the competitor research harvested **zero** citable sources across all 144 external links in the six analysed articles.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** All 5 planned internal links were placed by the writer at their outline positions (`/cornell-note-taking-method`, `/best-pens-for-note-taking`, `/best-notebooks-for-note-taking`, `/bullet-journal-for-beginners`, `/how-to-plan-your-week`), root-relative and with no trailing slash per `blog.trailing_slash: false`.

## 4b. Add inbound links from existing posts to this one

Applied automatically at Stage 4b.5 to the repo markdown. Per the `wordpress-rest` adapter §4b branch: **this post is still `draft`, so an edit to the repo markdown does not by itself reach the live site.** Each row below must be hand-applied to the live WP post in wp-admin (or via the prefilled REST commands) at publish time.

- [ ] `content/blog/best-notebooks-for-note-taking.md`, anchor "`aesthetic stationery`" → `/aesthetic-stationery`, in the passage about choosing a notebook you will actually want to open. Applied to the repo file; hand-apply to the live WP post.
- [ ] `content/blog/best-pens-for-note-taking.md`, anchor "`aesthetic stationery worth buying`" → `/aesthetic-stationery`, near the closing / related-reading sentence. Applied to the repo file; hand-apply to the live WP post.
- [ ] `content/blog/bullet-journal-for-beginners.md`, anchor "`aesthetic stationery that earns its space`" → `/aesthetic-stationery`, in the supplies section. Applied to the repo file; hand-apply to the live WP post.

Prefilled commands for each (substitute `<existing-slug>`, `<id>`, `<anchor>`):
```bash
# 1) fetch the target post's raw content
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section noted above:
#    <a href="https://olgapak.com/aesthetic-stationery"><anchor></a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

**Operational note:** after any REST update to a post that is open in the WP editor, the editor shows a stale "Restore the backup" banner. **Dismiss or reload, do NOT restore** (restoring reverts the synced draft).

## 5. Final manual read

- [ ] Read the whole post aloud, catches AI tells the editor missed.
- [ ] Grammarly score target: 80-85 (not 99, perfection is an AI signal).
- [ ] **Product-claim scan.** The only product mention is a single soft Text Summarizer reference in the CTA. Confirm it states no price (the tools are free and have no pricing page) and re-lists no features.
- [ ] **Confirm the expertise claim is true.** The intro's second paragraph says "I take a lot of notes, by hand, and I have bought my share of pretty things that never earned their place." **This is a first-person claim about you that no profile doc currently backs** (`voice.md` §Personal-anecdote bank does not contain it; the hand-notes half is loosely supported by `brief.md` §Founder anecdote). Stage 3b flagged it for you twice. If it is true, add the line to `voice.md` §Personal-anecdote bank so future posts can draw on it legitimately. If it is not, edit the sentence before publishing.
- [ ] **Spot-check 3 affiliate links.** All 17 were verified HTTP 200 with matching product titles on 2026-09-08, but availability changes. Each is `https://www.amazon.com/dp/<ASIN>?tag=op01e-20`.
- [ ] Confirm the affiliate disclosure is present and is the last paragraph of the intro, immediately before the first `##`.

## 6. N/A for the WordPress adapter.

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url, filled at Stage 4b.5 by autopilot-cont>`.
- [ ] Read it once more in WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** Set the focus keyword in **Rank Math** to exactly: `aesthetic stationery`. Per `site-conventions.md` §SEO plugin this is **not settable via standard REST**, so it is a manual step in the WP editor's Rank Math meta box. The workflow never attempts this write.
- [ ] Click **Publish** in WP admin. **This workflow never does that step for you.**
- [ ] After publishing, verify the live post per §8.
- [ ] After publishing, re-visit §4b and hand-apply the three inbound links to the live posts.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/aesthetic-stationery` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Faesthetic-stationery`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the FAQ rich result: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Faesthetic-stationery`
- [ ] Update `blog-ops/content-plan.md` row 23 Status: `planned` → `published` (the **content calendar** column, not the WP status)

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **false** for this blog, so there is no repurpose step. Skip.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/aesthetic-stationery/          # should NOT exist
ls blog-ops/drafts/_archive/aesthetic-stationery/ # should exist, contains all working files
```

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (3 resolved/deleted at Stage 3d, see §3)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 '### Image ' entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command run at Stage 4b:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/aesthetic-stationery/draft-v2.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/aesthetic-stationery.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: **zero hits.** The four `[IMAGE:]` placeholders are replaced with real Markdown image embeds by the adapter at Stage 4b.5, since every referenced file exists on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax, each path pointing at a file that exists in `blog-ops/assets/aesthetic-stationery/`
