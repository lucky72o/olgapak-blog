# Action items: screen-free-hobbies

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/screen-free-hobbies/draft-v2.md` markers + `blog-ops/drafts/screen-free-hobbies/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/screen-free-hobbies/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/screen-free-hobbies.md`, plus the WordPress draft it was pushed to.
> - **Asset folder:** `blog-ops/assets/screen-free-hobbies/`, contains `README.md` (copy of images.md) plus the 5 rendered PNGs.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/screen-free-hobbies/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page to work through after Gate 2. Estimated total time: **10 minutes** (unusually short: every image rendered, and there are zero unresolved markers).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/screen-free-hobbies/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/screen-free-hobbies.md`.
- Approved outline: `blog-ops/drafts/screen-free-hobbies/outline.md` → archived to `blog-ops/drafts/_archive/screen-free-hobbies/outline.md`
- Image plan: `blog-ops/drafts/screen-free-hobbies/images.md` → archived + copied to `blog-ops/assets/screen-free-hobbies/README.md`
- Review history: `review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/screen-free-hobbies/`
- Total word count: **3,284 body prose** (target 3,260, +0.7%), plus a 477-word FAQ block. 3,761 total.
- Author: `olga`
- Title: `51 Screen-Free Hobbies to Try When Scrolling Gets Old`
- Category: `Productivity` (WP term id 12)

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/screen-free-hobbies/images.md` (also at `blog-ops/assets/screen-free-hobbies/README.md`). Estimated time: **2 minutes** (verification only).

**All five rendered successfully at Stage 4a.5. Nothing to build.** These are verify-the-render records, not TODOs.

- [ ] Featured image: `featured.png` rendered, type `ai-prompt`. Verify: hand-lettered "51 Screen-Free Hobbies to Try When Scrolling Gets Old" over a flat-vector overhead scene (yarn and hook, a paperback, a trowel, phone face-down at the left edge), warm sand ground, `olgapak.com` watermark. 1536x1024. Editor eyeballed it: title text matches the post title exactly.
- [ ] Image 1: `cost-tier-key.png` rendered, type `remotion`. Verify: the three-tier scale (Free / Cheap / Real investment) with definitions and one example each. Editor eyeballed it: tier definitions match H2 1's prose verbatim, and all three examples (walking a new route, crochet, climbing) carry those exact tiers in the post body. 3600x2400.
- [ ] Image 2: `hands-busy-in-progress.png` rendered, type `ai-prompt`. 1536x1024.
- [ ] Image 3: `outdoors-at-dusk.png` rendered, type `ai-prompt`. 1536x1024.
- [ ] Image 4: `one-hobby-one-slot.png` rendered, type `ai-prompt`. 1536x1024.

**Remotion slots** (1 total): built and registered at Stage 4a.5.

- [ ] Remotion: `CostTierKey` → `cost-tier-key.png` (composition built, registered in `tools/remotion/src/Root.tsx`, exported at `--scale=2`)

> **Out-of-scope repo fix riding along in this PR.** `tools/remotion/src/Root.tsx` did not parse on `origin/main`: three `<Still>` tags (`HandwriteOrTypeDecision`, `NotesDecisionRule`, `TwoPilesOfScreenTime`) were missing their `width={CANVAS.width} height={CANVAS.height} />` self-close, so no composition in the project could render. Introduced by `722e07e` (the how-to-take-notes-on-ipad PR), not by this post. Fixed here because this post's Remotion slot could not otherwise render. Three added lines; `<Still>` tags and self-closes now balance at 24/24. **Review this hunk deliberately, it is unrelated to the post's content.**

**AI-generated slots** (4 total, `ai-prompt`): all rendered automatically at Stage 4a.5 via codex. Zero failed, so no pasteable-prompt fallback is needed.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `hands-busy-in-progress.png` (generated, reviewed, saved)
- [ ] AI: `outdoors-at-dusk.png` (generated, reviewed, saved)
- [ ] AI: `one-hobby-one-slot.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/screen-free-hobbies/` (ownership sentinel `.staged-by-blog-workflow` present).

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

**None.** The writer emitted zero `[VERIFY:]` markers, so Stage 3d had nothing to resolve, keep-general, delete, or competitor-route. Nothing to do.

For the record, Stage 3d did not sit idle. With no markers to chase it verified the three citations the post actually ships, and **found and fixed one factual error**:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:42` | Oxford named "brain rot" its word of the year | `corrected` | The draft stated this with no year, which reads as current and was no longer true. The live OUP page is headed "Oxford Word of the Year 2025", names **"rage bait"** as the 2025 winner, and calls "brain rot" *"last year's choice"*. Rewritten to `made "brain rot" its word of the year in 2024 ... and the year after that it picked "rage bait"`. Source: https://corp.oup.com/word-of-the-year/ |

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

**None.** Zero markers emitted. All three planned external links shipped and were each verified live at Stage 3d:

| # | URL | Status | Scope check |
|---|---|---|---|
| 1 | https://corp.oup.com/word-of-the-year/ | HTTP 200 | Year resolved to 2024, see §2 above. |
| 2 | https://www.mind.org.uk/information-support/tips-for-everyday-living/nature-and-mental-health/ | Live (verified in-browser) | Page states "Spending time in green space or bringing nature into your everyday life can benefit your mental health". Anchor is scoped to **nature**, not to hobbies. **Returns HTTP 403 to `curl` because of bot protection. This is NOT a dead link, do not "fix" it if an automated checker flags it.** |
| 3 | https://www.health.harvard.edu/healthbeat/mindfulness-practice-for-focus | HTTP 200 | Page H1 is literally "Mindfulness practice for focus". Anchor is mindfulness-scoped; the hobby comparison sits in a separate sentence in the author's own voice, so the source is not stretched onto hobbies. |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers. All five planned internal links resolved to confirmed-live posts: `/how-to-reduce-screen-time`, `/things-to-do-instead-of-being-on-your-phone`, `/digital-detox-plan`, `/how-to-plan-your-week`, `/time-blocking`, plus `/ai-tools` in the CTA. All root-relative with no trailing slash, per `blog.trailing_slash: false`.

## 4b. Add inbound links from existing posts to this one

Three rows from the outline. `publish.wordpress.apply_inbound_links_live: true`, but this post is still a WordPress **draft** at Gate 2, so the adapter's `false`/`draft` branch applies: the repo copies are edited at Stage 4b.5 and ship in this PR, and the LIVE WordPress posts need a hand-apply after this post is published (its permalink is stable from the slug either way).

- [ ] `content/blog/how-to-reduce-screen-time.md`, anchor "`screen-free hobbies worth sticking with`" → `/screen-free-hobbies`, in its "Replace, don't just remove" section, beside the existing link to the 75-item filler post. **Strongest fit in the cluster.**
- [ ] `content/blog/digital-detox-plan.md`, anchor "`screen-free hobbies to fill the gap`" → `/screen-free-hobbies`, where the reset week discusses reclaimed evenings.
- [ ] `content/blog/how-to-stop-doomscrolling.md`, anchor "`a hobby to put in its place`" → `/screen-free-hobbies`, in the section on replacing the habit rather than resisting it.

Hand-apply each to the live WP post after publishing (auto-sync of prior posts is out of v1 scope):

```bash
WP_BASE=https://olgapak.com
WP_USER=wpx_admin101
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/screen-free-hobbies">anchor text</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

> After any REST update to a post open in the WP editor, the editor shows a stale "Restore the backup" banner. **Dismiss or reload, do NOT restore** (restoring reverts the synced draft). Per `custom-instructions.md` §Operational notes.

## 5. Final manual read

- [ ] Read the whole post aloud, catches AI tells the editor missed.
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal).
- [ ] Product scan: exactly ONE soft product mention is intended, in the closing CTA, bridging on time freed rather than on features. Confirm nothing claims the free AI tools do something `blog-ops/profile/product.md` does not list, and that no AI tool is framed as a hobby.
- [ ] `modules.competitors` is off for this blog, so there are no competitor pricing claims to verify.
- [ ] **Count check:** the title promises 51 and the body delivers 12+10+9+8+6+6 = 51. If you edit any entry out, the title must change with it.
- [ ] **Price check:** the post must never state a price in its own voice. The two dollar figures ($300 pottery, $20 skates) are correct ONLY inside quotation marks with named attribution. Verify they still are.
- [ ] **Spelling (operator decision, not a defect):** the prose is consistently British (fortnight, towpath, allotment, watercolour, labelled) with no US spellings mixed in. Correct for a UK-based author, but part of the audience is American. No profile doc governs this. Change it or leave it, deliberately.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile. Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview (URL recorded in `pr-monitor.json` as `wp_preview_url` at Stage 4b.5).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Focus keyword.** `site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. So this is a manual step: in the WP editor's Rank Math panel, set the focus keyword to exactly `screen-free hobbies` (verbatim, not the title, not a paraphrase). The workflow never attempts this write.
- [ ] Confirm the category is **Productivity** and the tags are `productivity`, `time management`, `students` (all confirmed-live terms from `blog.md` §Tag taxonomy, no invented tags).
- [ ] Click **Publish** in WP admin. **This workflow never does that step for you** (`custom-instructions.md` §Publishing: going live is always your manual action).
- [ ] Merge the review PR so the repo copy matches what went live.
- [ ] After publishing, verify the live post per §8, then hand-apply the three inbound links from §4b.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/screen-free-hobbies` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fscreen-free-hobbies`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema (5 questions): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fscreen-free-hobbies`
- [ ] Update `blog-ops/content-plan.md` row #20 Status from `planned` to `published`, and add the row to `blog-ops/content-calendar-q3-2026.md`. (This is the content-calendar Status column, which is the only thing "mark published" ever means here.)

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **false** for this blog, so there is no repurpose step. Skip.

## 10. Archive cleanup (automatic at Gate-2 finalize)

```bash
ls blog-ops/drafts/screen-free-hobbies/          # should NOT exist
ls blog-ops/drafts/_archive/screen-free-hobbies/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete; re-run the finalize sequence.

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
  blog-ops/drafts/screen-free-hobbies/draft-v2.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/screen-free-hobbies.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real embeds by the adapter at Stage 4b.5, since all five files exist on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in `blog-ops/assets/screen-free-hobbies/`
