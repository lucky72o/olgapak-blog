# Action items: how-to-plan-your-week

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/how-to-plan-your-week/draft-v1.md` markers + `images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/how-to-plan-your-week/`, the archived working files (outline, facts, images.md, draft-v1.md, review history).
> - **Live post (where you edit):** the WordPress post (created as a draft by this workflow) + the canonical markdown at `content/blog/how-to-plan-your-week.md`.
> - **Asset folder:** `blog-ops/assets/how-to-plan-your-week/`, contains `README.md` (copy of images.md) plus the rendered image files.

Read by: the human operator (slav) before publishing.

**Purpose:** the single page to work through after Gate 2. Every item here is required before publish. Estimated total time: **~25 minutes** (most heavy lifting — images, markers, links — is already done automatically; what's left is verification + the 3 live inbound links + the Rank Math focus keyword + clicking Publish).

## 0. Pre-flight

Paths shown are pre-finalize. After Gate 2, swap `blog-ops/drafts/how-to-plan-your-week/` → `blog-ops/drafts/_archive/how-to-plan-your-week/` for the history files; the canonical post is `content/blog/how-to-plan-your-week.md` and the live copy is the WordPress draft.

- Draft (pre-finalize): `blog-ops/drafts/how-to-plan-your-week/draft-v1.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize canonical: `content/blog/how-to-plan-your-week.md`.
- Approved outline: `blog-ops/drafts/how-to-plan-your-week/outline.md` → archived to `blog-ops/drafts/_archive/how-to-plan-your-week/outline.md`
- Image plan: `blog-ops/drafts/how-to-plan-your-week/images.md` → archived + copied to `blog-ops/assets/how-to-plan-your-week/README.md`
- Review history: `review.md` → archived to `blog-ops/drafts/_archive/how-to-plan-your-week/`
- Total word count: ~2,440 (body ~2,440; within the 1,500–2,500 how_to target)
- Author: `olga` (Olga Pak)
- Title: How to Plan Your Week: A Routine That Survives Tuesday
- Target keyword: how to plan your week

## 1. Create images (3 total) — ALL RENDERED, verify only

Image spec: `blog-ops/drafts/how-to-plan-your-week/images.md` (also at `blog-ops/assets/how-to-plan-your-week/README.md` post-finalize). All three file-producing slots were rendered automatically at Stage 4a.5 and spot-checked by the editor. Estimated time: ~3 minutes (visual re-check).

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — RENDERED (hand-lettered title "How to Plan Your Week: A Routine That Survives Tuesday", "Plan" in red, Sunday-planning vignette, olgapak.com wordmark). Verify it reads well.
- [ ] Image 1: `week-grid-timeboxing.png`, see images.md §Image 1, type: `remotion` — RENDERED (Mon–Fri grid, 4 rock blocks, dashed "slack, on purpose" water callout, legend, watermark). Verify labels/legend.
- [ ] Image 2: `midweek-reset-scene.png`, see images.md §Image 2, type: `ai-prompt` — RENDERED (calm midweek reprioritizing scene, warm palette, olgapak.com wordmark). Verify it reads well.

**Remotion slots** (1 total): built + registered.

- [ ] Remotion: `WeekGridTimeboxing` → `week-grid-timeboxing.png` (composition built, registered in `tools/remotion/src/Root.tsx`, exported at `--scale=2`). Source `tools/remotion/src/WeekGridTimeboxing.tsx` ships with the post's PR.

**AI-generated slots** (2 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path — 0 failed.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `midweek-reset-scene.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/how-to-plan-your-week/`

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

**None.** The writer left zero `[VERIFY:]` markers; the grep at Stage 4b found zero. Nothing to do.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

Audit log of Stage 3d marker resolution + the pre-placed external link the editor verified.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v1.md:68` | Parkinson's Law — "work expands to fill the time available for its completion" (1955, C. Northcote Parkinson) | `resolved` | Linked to https://www.britannica.com/topic/Parkinsons-Law-or-The-Pursuit-of-Progress (authoritative_allowlist; browser-verified the page renders the dictum + attribution). Anchor "Parkinson's Law" in §3 Step 3. |
| 2 | `draft-v1.md:29` (pre-placed by writer, not a marker) | "manage your energy, not just your time" energy-management reframe | `resolved/verified` | https://hbr.org/2007/10/manage-your-energy-not-your-time (authoritative_allowlist; WebFetch confirmed the live HBR article by Schwartz & McCarthy, 2007). §1. |

Note: the optional VoucherCloud "under 3 focused hours/day" stat was intentionally NOT used (old, UK-specific, coupon-site source). No residual markers remain.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** All 5 planned internal links were placed by the writer as root-relative, no-trailing-slash links in their assigned sections: `/planning-tips-to-maximize-productivity` (intro), `/benefits-of-planning-ahead-for-peak-productivity` (§1), `/how-to-stay-focused-on-goals` (§3 Step 2), `/what-is-timeboxing` (§3 Step 3), `/how-to-stop-doomscrolling` (§3 Step 4). Zero `[INTERNAL_LINK_NEEDED:]` markers.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. `publish.wordpress.apply_inbound_links_live: true`, BUT this post is still a **draft** (never auto-published), so the live-REST application does NOT run automatically this cycle. None of the three target posts has a repo copy in `content/blog/` (they're WordPress-only), so there was nothing to edit in the repo at staging either. **Action: hand-apply each to the live WP post in wp-admin** (or, once this post is published, they will be applied live via REST per the adapter). New post URL to link to: `https://olgapak.com/how-to-plan-your-week` (no trailing slash).

- [ ] `what-is-timeboxing` (WP-only) — add anchor "how to plan your week" where that post explains applying timeboxing to a real schedule.
- [ ] `planning-tips-to-maximize-productivity` (WP-only) — add anchor "a repeatable weekly planning routine" in its intro or a "put it into a routine" tip.
- [ ] `benefits-of-planning-ahead-for-peak-productivity` (WP-only) — add anchor "how to plan your week step by step" where it moves from why planning helps to how to do it.

Paste-and-run per WP post (fill `<existing-slug>`, `<id>`, `<anchor>`, `<section/context>`):
```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into content.raw at "<section/context>":
#    <a href="https://olgapak.com/how-to-plan-your-week">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```
(`$WP_USER`=`wpx_admin101`, `$WP_BASE`=`https://olgapak.com`, `$WP_APP_PASSWORD_ENV`=`WP_APP_PASSWORD`.) After applying, reload the WP editor if open — dismiss any "Restore the backup" banner, do NOT restore.

## 5. Final manual read

- [ ] Read the whole draft aloud — catch any AI tells (awkward rhythm, overly formal connectors).
- [ ] Grammarly target 80–85 (not 99). If over 95, loosen a sentence or two.
- [ ] Product-feature sanity: the post makes exactly one soft mention of the free Email Generator (drafts an email from a short prompt) — confirmed against `blog-ops/profile/product.md` §Features; no hallucinated features, no prices.
- [ ] (competitors module off — no competitor-claim check.)

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (that's an Astro-adapter concern). Nothing to do; continue to §7.

## 7. Publish (WordPress)

- [ ] Open the WordPress draft preview (the `wp_preview_url` recorded in `pr-monitor.json` after the `autopilot-cont` staging step creates the WP draft).
- [ ] Read it once more in WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword (manual — Rank Math).** `site-conventions.md` §SEO plugin = **Rank Math**, and the focus keyword is **NOT settable via standard REST**. In the WP editor's Rank Math meta box, set the focus keyword to exactly: `how to plan your week` (verbatim target keyword — not the title, not a paraphrase).
- [ ] Click **Publish** in WP admin. This workflow never publishes for you; the post stays `draft` until you do.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/how-to-plan-your-week` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (Bing Webmaster Tools or the CLI)
- [ ] Check the featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fhow-to-plan-your-week`
- [ ] Check mobile rendering at a narrow viewport
- [ ] FAQ rich-result: the WordPress frontmatter template does not emit FAQPage JSON-LD (that's a WP-plugin/Rank Math concern) — if you want the FAQ rich result, ensure the SEO plugin's FAQ/schema block is populated, then validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fhow-to-plan-your-week`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose: false` for this blog — the repurpose chain is skipped. (If enabled later: `/repurpose-blog-post how-to-plan-your-week`.)

## 10. Archive cleanup (automatic at Gate 2 finalize)

Finalize moves `blog-ops/drafts/how-to-plan-your-week/` → `blog-ops/drafts/_archive/how-to-plan-your-week/`. Verify:

```bash
ls blog-ops/drafts/how-to-plan-your-week/          # should NOT exist
ls blog-ops/drafts/_archive/how-to-plan-your-week/ # should exist, contains the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete — re-run the finalize sequence.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (1 resolved at Stage 3d → Britannica; log in §3)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 2 hits (matches the 2 in-post ### Image entries in images.md; total images = 2 + 1 featured = 3)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/how-to-plan-your-week/draft-v1.md
```

Re-run against the canonical post before publishing:
```bash
POST=content/blog/how-to-plan-your-week.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The staging step (4b.5) replaces both `[IMAGE:]` placeholders with real embeds pointing at the rendered files in `blog-ops/assets/how-to-plan-your-week/`.

- [ ] Confirm both `[IMAGE:]` placeholders are replaced with real image embeds and each path points to a file that exists in the asset folder.
