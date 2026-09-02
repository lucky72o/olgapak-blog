# Action items: how-to-take-notes-on-ipad

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md` markers + `blog-ops/drafts/how-to-take-notes-on-ipad/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/how-to-take-notes-on-ipad/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/how-to-take-notes-on-ipad.md`, plus the WordPress draft it was pushed to. Marker fixes and copy edits land here.
> - **Asset folder:** `blog-ops/assets/how-to-take-notes-on-ipad/`, contains `README.md` (copy of images.md) plus the five rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: `15` minutes.

**Short version: this post is unusually clean.** Zero markers of any kind survived into the draft, all five images rendered, and the inbound links were applied automatically. What is actually left for you is a read-through, the Rank Math focus keyword, and clicking Publish.

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/how-to-take-notes-on-ipad.md`.
- Approved outline: `blog-ops/drafts/how-to-take-notes-on-ipad/outline.md` → archived to `blog-ops/drafts/_archive/how-to-take-notes-on-ipad/outline.md`
- Image plan: `blog-ops/drafts/how-to-take-notes-on-ipad/images.md` → archived + copied to `blog-ops/assets/how-to-take-notes-on-ipad/README.md`
- Review history: `review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/how-to-take-notes-on-ipad/`
- Plan review history: `plan-review.md` + `plan-review-v1.md` → archived to the same place
- Total word count: `3,053` (of which `2,465` is body prose excluding the FAQ, against an outline roll-up target of 2,420)
- Author: `olga` (byline: Olga Pak)
- Title: `How to Take Notes on an iPad: A Setup That Actually Sticks`
- Target keyword: `how to take notes on ipad`

## 1. Create images (`5` total)

Image spec (post-finalize): `blog-ops/drafts/_archive/how-to-take-notes-on-ipad/images.md` (also copied to `blog-ops/assets/how-to-take-notes-on-ipad/README.md` by the finalize step). Estimated time: `3` minutes, all verification, no building.

**All five slots are file-producing and all five rendered successfully at Stage 4a.5.** Nothing here is a build TODO; these are verify-the-render checks.

- [x] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — rendered, editor-reviewed
- [x] Image 1: `pick-one-app.png`, see images.md §Image 1, type: `ai-prompt` — rendered, editor-reviewed
- [x] Image 2: `handwrite-or-type-decision.png`, see images.md §Image 2, type: `remotion` — rendered at `--scale=2`, editor-reviewed
- [x] Image 3: `gear-tiers-flat-lay.png`, see images.md §Image 3, type: `ai-prompt` — rendered, editor-reviewed
- [x] Image 4: `ipad-playing-video.png`, see images.md §Image 4, type: `ai-prompt` — rendered, editor-reviewed

**Remotion slots** (`1` total): built and exported at Stage 4a.5.

- [x] Remotion: `HandwriteOrTypeDecision` → `handwrite-or-type-decision.png` (component written at `tools/remotion/src/HandwriteOrTypeDecision.tsx`, registered as a `<Still>` in `tools/remotion/src/Root.tsx`, exported at `--scale=2`)

**AI-generated slots** (`4` total, `ai-prompt`): rendered automatically at Stage 4a.5 via the machine's codex shim (`~/.claude/impeccable-codex/generate-image-codex.mjs`), one invocation per slot, prompts passed verbatim from images.md.

- [x] AI: `featured.png` (generated, reviewed, saved)
- [x] AI: `pick-one-app.png` (generated, reviewed, saved)
- [x] AI: `gear-tiers-flat-lay.png` (generated, reviewed, saved)
- [x] AI: `ipad-playing-video.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/how-to-take-notes-on-ipad/`

**One judgment call to eyeball at the Gate 2 preview, not a defect:** `gear-tiers-flat-lay.png` came out in a more painterly, semi-rendered style than the bold-outline flat vector of the other three AI scenes. It passes every checklist item (no text, no logos, warm palette, correct depth tiering, brand blue as an accent only) and `image-style.md` does permit photographic-feeling treatments for lifestyle moments, so neither the builder nor the editor burned a re-render on it. If you want it restyled, its `Prompt:` block in images.md §Image 3 is pasteable as-is.

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

**None.** The writer produced zero `[VERIFY:]` markers, so Stage 3d had nothing to resolve.

This was not luck. The editor loaded and read every external source during Stage 1a and recorded the exact claims in `research/_raw/_editor_source_checks.md`, and `facts.md` carried explicit scope guards (most importantly on the handwriting-versus-typing research), so every claim the writer wanted was already sourced before drafting started. Nothing to do here.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

**None.** Zero markers of this type were produced. All five external links were planned at Stage 2, verified live by the editor, and re-checked reachable at Stage 3d (PubMed 203, Springer 200, Paperlike 200, Apple 200, Amazon 200). Nothing to do here.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers of this type. All five internal links were planned against posts confirmed present in `content/blog/` and inserted by the writer:

- `/note-taking-methods` (intro)
- `/best-notebooks-for-note-taking` (H2 1, the paper-still-wins section)
- `/cornell-note-taking-method` (H2 5)
- `/charting-method-note-taking` (H2 5)
- `/how-to-stop-doomscrolling` (H2 7)

Plus `/ai-tools` in the closing CTA. All root-relative with no trailing slash, per `site-conventions.md` §Permalinks.

## 4b. Add inbound links from existing posts to this one

Three rows from the outline's "Inbound internal links" section. **These are applied automatically at Stage 4b.5** (adapter §Staging step 5), before Gate 2, so you review them in the preview rather than doing them by hand.

Per the `wordpress-rest` adapter's §4b branch, and because `publish.wordpress.apply_inbound_links_live: true` in config but this post is still `draft`, each row reads: applied to the repo markdown, then hand-applied to the live WordPress post in wp-admin (auto-sync of prior posts is out of v1 scope). The exact per-row status, including the before/after and the WP post id where one was resolved, is recorded in `checklist.md` §Notes at staging time.

- [ ] `content/blog/note-taking-methods.md` — anchor "how to take notes on an iPad" → `/how-to-take-notes-on-ipad`, in the "Pick One and Try It This Week" area, extending the existing line "And do not overthink the container. Paper or an app both work." Applied to the repo at Stage 4b.5; hand-apply to the live WP post in wp-admin.
- [ ] `content/blog/best-notebooks-for-note-taking.md` — anchor "taking notes on an iPad" → `/how-to-take-notes-on-ipad`, in "Best reusable and digital notebooks", on the reMarkable entry that already says "Best for the reader actually weighing 'notebook or iPad?'". Applied to the repo at Stage 4b.5; hand-apply to the live WP post in wp-admin.
- [ ] `content/blog/cornell-note-taking-method.md` — anchor "set it up on an iPad" → `/how-to-take-notes-on-ipad`, in "Paper vs digital, plus a free Cornell template". Applied to the repo at Stage 4b.5; hand-apply to the live WP post in wp-admin.

Prefilled commands for the hand-apply step, one per row (substitute `<existing-slug>` and the returned `<id>`):

```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/how-to-take-notes-on-ipad">"<anchor>"</a>
#    (no trailing slash — blog.trailing_slash: false)
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

Reminder from `custom-instructions.md` §Operational notes: after any REST update to a post that is open in the WP editor, the editor shows a stale "Restore the backup" banner. Dismiss or reload — do **not** restore, which reverts the synced draft.

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md`. This post makes exactly one product mention (Text Summarizer, in the closing CTA) and states no product features beyond "condense a long reading into its key points"
- [ ] `modules.competitors` is DISABLED for this blog, so there are no competitor pricing/feature claims to re-verify. The note-taking apps named in H2 2 are third-party tools, not competitors, and the post states no prices, tiers, or amounts for any of them (verified: zero `$` characters in the draft)
- [ ] **Post-specific check worth doing deliberately:** confirm the handwriting-versus-typing section still pairs the 2014 study with the 2019 replication and keeps the sentence saying the 2014 study compared paper longhand against a laptop keyboard and did not test tablets. That scoping is the reason this post is defensible on a topic saturated with pop-science overclaims, and it is the one thing a well-meaning copy edit could quietly break.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled in at Stage 4b.5 when the draft is created; also recorded in `pr-monitor.json` as `wp_preview_url`).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image, and category are already synced by the adapter).
- [ ] **Focus keyword.** Set the focus keyword in **Rank Math** to exactly: `how to take notes on ipad` — verbatim, not a paraphrase and not the title. Per `site-conventions.md` §SEO plugin this is **not settable via standard REST**, so it is a manual step: set it yourself in the WP editor's Rank Math meta box before publishing. The workflow never attempts that write.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you, by design and by standing instruction (`custom-instructions.md` §Publishing & review).
- [ ] After publishing, verify the live post per §8 below.
- [ ] After publishing, mark row #16 in `blog-ops/content-plan.md` as `published` (that is the content-calendar Status column, not the WordPress post status).

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/how-to-take-notes-on-ipad` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fhow-to-take-notes-on-ipad`
- [ ] Check mobile rendering at a narrow viewport
- [ ] FAQ schema: this blog's `wordpress-rest` frontmatter template does not emit JSON-LD itself (FAQPage schema is a WP-plugin concern). If Rank Math is configured to emit FAQ schema, validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fhow-to-take-notes-on-ipad`
- [ ] Hand-apply the three inbound links from §4b to their live WordPress posts

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step for this post. Nothing to run.

## 10. Archive cleanup (automatic at Gate 2 finalize)

The finalize step moves `blog-ops/drafts/how-to-take-notes-on-ipad/` → `blog-ops/drafts/_archive/how-to-take-notes-on-ipad/`. Verify:

```bash
ls blog-ops/drafts/how-to-take-notes-on-ipad/          # should NOT exist
ls blog-ops/drafts/_archive/how-to-take-notes-on-ipad/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence from the main skill's Gate 2 step.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command the editor ran at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/how-to-take-notes-on-ipad/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/how-to-take-notes-on-ipad.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real Markdown embeds at Stage 4b.5 staging, pointing at the rendered files in `blog-ops/assets/how-to-take-notes-on-ipad/`; every one of those files already exists on disk, so none of them falls back to a build-safe "Image pending" note.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder
