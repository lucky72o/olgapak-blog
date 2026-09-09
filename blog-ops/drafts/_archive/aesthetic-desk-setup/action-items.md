# Action items: aesthetic-desk-setup

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/aesthetic-desk-setup/draft-v2.md` markers + `blog-ops/drafts/aesthetic-desk-setup/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/aesthetic-desk-setup/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/aesthetic-desk-setup.md`, plus the WordPress draft itself.
> - **Asset folder:** `blog-ops/assets/aesthetic-desk-setup/`, contains `README.md` (copy of images.md) plus the five rendered PNGs.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **20 minutes** (most sections are already done; the real work is the focus keyword, the inbound links, and the final read).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/aesthetic-desk-setup/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/aesthetic-desk-setup.md`.
- Approved outline: `blog-ops/drafts/aesthetic-desk-setup/outline.md` → archived to `blog-ops/drafts/_archive/aesthetic-desk-setup/outline.md`
- Image plan: `blog-ops/drafts/aesthetic-desk-setup/images.md` → archived + copied to `blog-ops/assets/aesthetic-desk-setup/README.md`
- Review history: `review.md` (iteration 2, verdict `approve`) + `review-v1.md` (iteration 1, `request_revisions`) + `plan-review.md` + `plan-review-v1.md` → all archived
- Total word count: **2,500** words of body prose (excluding the FAQ); 3,040 words including frontmatter, FAQ and image placeholders
- Author: `olga` (byline "Olga Pak")
- Title: `Aesthetic Desk Setup: 7 Simple Steps on Any Budget`
- Post date written into frontmatter at drafting: `2026-09-09` (the console rewrites this to the real publication day immediately before merge; do not hand-edit it)

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/aesthetic-desk-setup/images.md` (also copied to `blog-ops/assets/aesthetic-desk-setup/README.md`). **All five were rendered automatically at Stage 4a.5 — these are verify-the-render checks, not build tasks.** Estimated time: 5 minutes.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — rendered ✅ (re-rendered once so the script line clears the 1.91:1 OG/Twitter crop band; title reads verbatim, `olgapak.com` wordmark correct)
- [ ] Image 1: `bare-desk-reset.png`, see images.md §Image 1, type: `ai-prompt` — rendered ✅
- [ ] Image 2: `under-desk-cable-tray.png`, see images.md §Image 2, type: `ai-prompt` — rendered ✅
- [ ] Image 3: `ceiling-light-vs-desk-lamp.png`, see images.md §Image 3, type: `ai-prompt` — rendered ✅
- [ ] Image 4: `finished-desk-plant-personal.png`, see images.md §Image 4, type: `ai-prompt` — rendered ✅

**Remotion slots** (0 total): none. This post has no diagram or chart content, so the image planner assigned no `remotion` slot (recorded with its reasoning in images.md §Editor notes; Image 3's lighting before/after was the one arguable candidate and stayed `ai-prompt` because the compared content is shadow direction and colour temperature, which flat vector geometry cannot render).

**AI-generated slots** (5 total, `ai-prompt`): rendered automatically at Stage 4a.5 via codex. Nothing is `failed`, so no manual build is needed; each slot's `Prompt:` block in images.md remains the paste-anywhere fallback if you ever want to re-render one.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `bare-desk-reset.png` (generated, reviewed, saved)
- [ ] AI: `under-desk-cable-tray.png` (generated, reviewed, saved)
- [ ] AI: `ceiling-light-vs-desk-lamp.png` (generated, reviewed, saved)
- [ ] AI: `finished-desk-plant-personal.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/aesthetic-desk-setup/` (with the `.staged-by-blog-workflow` ownership sentinel).

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

**None.** The writer left zero `[VERIFY:]` markers in draft-v1 or draft-v2, so Stage 3d had none to resolve and there is no residual for you.

Worth knowing rather than doing: Step 6 (the phone section) was deliberately written with no statistic at all, because `facts.md` has none to support one. The plan, the outline, the writer prompt and the reviewer all enforced that, so if you feel the absence of a number there, that is by design, not an oversight.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

One marker, resolved. Nothing to do.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:91` | warm versus cool light and evening alertness | `resolved` | Cited to CDC/NIOSH, "Module 2. The Color of the Light Affects Circadian Rhythms": https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod2/20.html — loaded and read directly at Stage 3d; the prose was scoped to exactly what the page says (blue/white light triggers retinal photoreceptors to suppress melatonin during the body's sensitive periods; those photoreceptors barely respond to yellow and orange). Mirrored into `facts.md` §Statistics. |

**Related fact-check worth reading before you publish** (this is the post's most differentiating paragraph and the thing most likely to draw a reply): Step 5 states that a widely repeated percentage about houseplants and productivity is not in the study it gets attributed to. That is verified. The editor loaded https://pmc.ncbi.nlm.nih.gov/articles/PMC10346441/ directly on 2026-09-09; the figure does not appear in the article, and the study reports no direct plant effect on 13 of its 18 outcome variables. The post never states the number itself, deliberately. Full record in `facts.md` §Rejected.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers; all six internal links (five to published posts plus the `/ai-tools` CTA) were placed at drafting, root-relative with no trailing slash per `blog.trailing_slash: false`.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. These were applied at Stage 4b.5 to the **repo** copies of the target posts, and ship in the same commit/PR as this post.

**Per the `wordpress-rest` adapter's §4b branch:** `publish.wordpress.apply_inbound_links_live` is `true`, but this post stays a WordPress **draft** through Gate 2, so the live-application path does not fire and each row needs a hand-apply in wp-admin (or via the prefilled REST commands below) at publish time. Auto-sync of prior posts is out of v1 scope.

- [ ] `content/blog/how-to-stop-doomscrolling.md` — applied in the repo; **hand-apply to the live WP post**: add anchor "`aesthetic desk setup`" → `/aesthetic-desk-setup` where that post argues for changing the environment rather than relying on willpower
- [ ] `content/blog/time-blocking.md` — applied in the repo; **hand-apply to the live WP post**: add anchor "`set your desk up for it`" → `/aesthetic-desk-setup` where that post describes the conditions for a focused block
- [ ] `content/blog/best-notebooks-for-note-taking.md` — applied in the repo; **hand-apply to the live WP post**: add anchor "`desk setup`" → `/aesthetic-desk-setup` in the section about where a notebook lives day to day

Prefilled commands (paste and run, one target at a time; `<existing-slug>` is the slug from the row above):

```bash
# 1) fetch the target post's raw content
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/aesthetic-desk-setup">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

After any REST update to a post that is open in the WP editor, the editor shows a stale "Restore the backup" banner. **Dismiss or reload — do NOT restore** (`custom-instructions.md` §Operational notes).

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is on: scan for hallucinated product claims against `blog-ops/profile/product.md`. The post mentions the free AI tools exactly once, in the CTA, and names only the Text Summarizer. It states no prices for them (there are none).
- [ ] **Affiliate check (this post's highest-risk surface):** eight distinct Amazon `/dp/` links, every one carrying `?tag=op01e-20`, every one named in the visible anchor rather than a generic "Buy on Amazon". No untagged Amazon URL anywhere. The disclosure is the italic last paragraph of the intro, immediately before the first `##`. Spot-check two or three links actually resolve to the product described before publishing; they were verified live on 2026-09-09 but Amazon listings do change.
- [ ] `modules.competitors` is off for this blog: no competitor pricing/feature claims to verify.

## 6. Author map

**§6. N/A for the WordPress adapter.** WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`).

## 7. Publish

- [ ] Open the WordPress draft preview. **Note:** this run was staged under the console's verification handshake (`CONSOLE_VERIFICATION=on`), so the WordPress draft and the review PR are created by the follow-on `autopilot-cont` run, not by this one. The preview URL lands in `blog-ops/drafts/aesthetic-desk-setup/pr-monitor.json` as `wp_preview_url` once that runs.
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword (manual, required).** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via the standard REST API**. Set it yourself in the WP editor's Rank Math panel, to exactly: `aesthetic desk setup` (verbatim — not the title, not a paraphrase). The workflow never attempts this write.
- [ ] Confirm the post's category is **Productivity** (resolved at staging from `brief.md`; WP term id 12).
- [ ] Click **Publish** in WP admin. **This workflow never does that step for you** — going live is always your manual action (`custom-instructions.md` §Publishing & review).
- [ ] After publishing, verify the live post per §8, and work through §4b's hand-apply rows.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/aesthetic-desk-setup` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Faesthetic-desk-setup`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema: `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Faesthetic-desk-setup`
- [ ] Flip this post's Status to `published` in `blog-ops/content-plan.md` (row 30). The console does this at finalize; verify it landed.

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step for this post. Skip.

## 10. Archive cleanup (automatic at Gate-2 finalize)

The finalize step moves `blog-ops/drafts/aesthetic-desk-setup/` → `blog-ops/drafts/_archive/aesthetic-desk-setup/`. Verify:

```bash
ls blog-ops/drafts/aesthetic-desk-setup/          # should NOT exist
ls blog-ops/drafts/_archive/aesthetic-desk-setup/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits (1 emitted at drafting, resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/aesthetic-desk-setup/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/aesthetic-desk-setup.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. Stage 4b.5 replaces all four `[IMAGE:]` placeholders with real Markdown embeds pointing at the rendered files in `blog-ops/assets/aesthetic-desk-setup/`, so the staged post should already be clean.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in the asset folder
