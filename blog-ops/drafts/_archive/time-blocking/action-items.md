# Action items: time-blocking

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/time-blocking/draft-v2.md` markers + `blog-ops/drafts/time-blocking/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/time-blocking/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/time-blocking.md` (and the WordPress draft it was synced into), marker fixes and `[IMAGE:]` replacements land here.
> - **Asset folder:** `blog-ops/assets/time-blocking/`, contains `README.md` (copy of images.md) plus the 5 rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/time-blocking/draft-v2.md` (pre-move). The shell snippets below use variables so either phase works: set `POST=...` to the live path after finalize, or the draft path before.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: `20` minutes (most of §1 and all of §2-§4 were automated; the real remaining work is the WP-admin read, the Rank Math focus keyword, the 3 hand-applied inbound links, and Publish).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/time-blocking/` → `blog-ops/drafts/_archive/time-blocking/` for the history files, and the draft becomes `content/blog/time-blocking.md`, the live post you edit.

- Draft (pre-finalize): `blog-ops/drafts/time-blocking/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/time-blocking.md`.
- Approved outline: `blog-ops/drafts/time-blocking/outline.md` → archived to `blog-ops/drafts/_archive/time-blocking/outline.md`
- Image plan: `blog-ops/drafts/time-blocking/images.md` → archived to `blog-ops/drafts/_archive/time-blocking/images.md` + copied to `blog-ops/assets/time-blocking/README.md`
- Review history: `blog-ops/drafts/time-blocking/review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/time-blocking/`
- Total word count: `2748`
- Author: `olga` (Olga Pak — single-author blog; `authors.md` defines no selection rubric, so the sole listed author applies)
- Title: `Time Blocking: How to Do It (Without It Falling Apart)`
- Target keyword: `time blocking`
- Category: `Productivity` (WP term id 12)

## 1. Create images (`5` total)

Image spec (post-finalize): `blog-ops/drafts/_archive/time-blocking/images.md` (also copied to `blog-ops/assets/time-blocking/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/time-blocking/images.md`. Estimated time: `5` minutes (verification only — every slot was rendered automatically at Stage 4a.5; nothing here needs building).

**All 5 slots rendered successfully at Stage 4a.5. There are no `screenshot` slots in this plan and no `failed` slots, so every item below is a verify-the-render check, not a build TODO.**

- [ ] Featured image: `featured.png` (1536x1024, rendered), see images.md §Featured image, type: `ai-prompt` — archetype `negative-space`; verify the title reads verbatim `Time Blocking: How to Do It (Without It Falling Apart)` and the `olgapak.com` wordmark is legible bottom-left
- [ ] Image 1: `list-versus-calendar.png` (1536x1024, rendered), see images.md §Image 1, type: `ai-prompt`
- [ ] Image 2: `packed-vs-buffered-day.png` (3600x2400, rendered), see images.md §Image 2, type: `remotion` — verify `60% / 20% / 20%` render as real text and the watermark is intact
- [ ] Image 3: `eleven-am-derail.png` (1536x1024, rendered), see images.md §Image 3, type: `ai-prompt`
- [ ] Image 4: `energy-tagged-tasks.png` (1536x1024, rendered), see images.md §Image 4, type: `ai-prompt`

**Remotion slots** (`1` total): built per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md` at Stage 4a.5.

- [ ] Remotion: `PackedVsBufferedDay` → `packed-vs-buffered-day.png` (composition built, registered in `tools/remotion/src/Root.tsx`, exported at `--scale=2`) — **both source files are new/changed and ship with this post:** `tools/remotion/src/PackedVsBufferedDay.tsx` (new) and `tools/remotion/src/Root.tsx` (registers the `<Still>`)

**AI-generated slots** (`4` total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path — verify each render.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `list-versus-calendar.png` (generated, reviewed, saved)
- [ ] AI: `eleven-am-derail.png` (generated, reviewed, saved)
- [ ] AI: `energy-tagged-tasks.png` (generated, reviewed, saved)

Save all to: `blog-ops/assets/time-blocking/` (already there, with the `.staged-by-blog-workflow` sentinel)

**Two builder notes worth acting on:**

- [ ] **Optional: compress the 4 `ai-prompt` PNGs.** They are 1.2–2.0 MB each, above the images.md size rule of thumb. They upload and render fine as-is; compressing before publish is a page-weight improvement, not a blocker. (`packed-vs-buffered-day.png` is already fine at 290 KB.)
- Accepted spec deviation, no action needed: in `packed-vs-buffered-day.png` the right column's hour ticks sit on the INNER side (between divider and column) rather than the outer side named in the spec, because the outer side carries the `60% / 20% / 20%` figures and outer ticks would have overlapped them.

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

These were resolved automatically at Stage 3d (marker auto-resolution), so there is normally nothing to do here. This section is the audit log of what the editor did, plus any residual that was deliberately left for you.

Stage 3d resolution log (one row per marker the writer left):

**None reached Stage 3d.** The grep at Stage 4b returned `0` hits.

For the record, the one `[VERIFY:]` the writer raised in `draft-v1.md` never became a Stage 3d item:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v1.md` (resolved before v2) | "60 to 90 minutes for a focused block" | `kept-general` | Resolved inside the Stage 3b revise pass, not at Stage 3d: the figure came from the outline but had no `facts.md` entry, so both sites were rewritten as first-person practice rather than a sourced claim. No citation was invented, nothing was deleted, and the marker is gone from `draft-v2.md`. Nothing to do. |

Competitor-routed markers: `0` (`modules.competitors` is `false` for this blog, so this class cannot occur).

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

Same as §2: Stage 3d either linked the claim to an allowlist/primary source or (if no source existed) deleted the claim. This is the audit log.

**None.** The writer placed all 5 planned external links at Stage 3a, so no marker was ever left for Stage 3d. The grep at Stage 4b returned `0` hits.

The 5 external links in the shipped post, for reference (all verified against the outline's external link plan, none pointing at a top-10 SERP competitor):

| Anchor (literal claim) | Target | Class |
|---|---|---|
| work expands so as to fill the time available for its completion | `en.wikipedia.org/wiki/Parkinson%27s_law` | authoritative_allowlist |
| only about 2.5% of people multitask effectively | `doi.org/10.3758/PBR.17.4.479` | primary_source |
| planned the activities he would undertake each hour of the day | `en.wikipedia.org/wiki/Timeblocking` | authoritative_allowlist |
| blocks his next day in a short planning session each evening | `calnewport.com/blog/2013/12/21/deep-habits-...` | primary_source |
| at least 15 hours of entirely blank space | `ctl.stanford.edu/weekly-planning-time-blocking-method` | authoritative_allowlist |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

Internal links where the outline's existing-posts table didn't offer a fit. Pick the closest existing published post OR add to the backlog if no fit exists. Insert as root-relative `[anchor](/target-post-slug)` (no trailing slash — `blog.trailing_slash: false`), never `https://olgapak.com/...` (per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Internal linking).

`0` markers:

**None.** All 5 internal links plus the `/ai-tools` CTA were placed by the writer at Stage 3a, all root-relative and all without trailing slashes.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. These were **applied automatically at Stage 4b.5** to the repo markdown, before Gate 2, so they appear in the preview you review.

**WordPress caveat (`publish.adapter: wordpress-rest`, v1 scope):** an edit to an existing post's markdown in this repo does NOT by itself reach the live site. This adapter tracks only THIS post's `wp_post_id`, so the three existing posts below have no recorded WP post ID to PATCH. Each therefore needs the same one-line edit hand-applied to the live WP post in wp-admin. The live-REST path (`publish.wordpress.apply_inbound_links_live: true`) only fires once THIS post's own WordPress status is `publish`, which by design it is not at Gate 2 — so treat these as hand-apply items unless a later finalize run reports otherwise.

- [ ] `content/blog/how-to-plan-your-week.md`, anchor "`time blocking your days`" → `/time-blocking`. **Applied to the repo markdown at Stage 4b.5** — it extends the existing related-posts sentence in "Step 3: Give each priority a slot (timeboxing)", right after the `/what-is-timeboxing` link, so it reads as one sentence rather than a bolted-on "see also". Verified link-only diff. It ships in this post's commit; **hand-apply the same edit to the live WP post in wp-admin.**
- [ ] `what-is-timeboxing`, anchor "`time blocking`" → `/time-blocking`, where that post distinguishes timeboxing from adjacent methods (the reciprocal of this post's §2 hand-off, so the pair reads as a set rather than two overlapping posts). **No repo markdown exists** (`content/blog/what-is-timeboxing.md` is absent — the post predates this repo being the source of truth), so nothing was applied locally. **Hand-apply in wp-admin.** The post is live (verified HTTP 200).
- [ ] `planning-tips-to-maximize-productivity`, anchor "`how to time block your day`" → `/time-blocking`, in whichever tip covers scheduling or calendar discipline. **No repo markdown exists** (`content/blog/planning-tips-to-maximize-productivity.md` is absent), so nothing was applied locally. **Hand-apply in wp-admin.** The post is live (verified HTTP 200).

**Note on the two missing files:** their absence costs nothing here, because the `wordpress-rest` adapter's §4b already makes EVERY inbound row a hand-apply item in v1 — a repo-markdown edit does not reach the live WP site, and only this post's own `wp_post_id` is tracked. The only difference for these two is that there is no repo copy to keep in sync afterwards. Worth considering separately: both posts are live but unrepresented in `content/blog/`, so the repo is not yet a complete mirror of the site.

Prefilled commands for the hand-apply (run once per existing slug; build the body with jq, never a hand-quoted string):

```bash
WP_USER="wpx_admin101"
WP_APP_PASSWORD_ENV="WP_APP_PASSWORD"
WP_BASE="https://olgapak.com"
EXISTING_SLUG="what-is-timeboxing"   # then how-to-plan-your-week, then planning-tips-to-maximize-productivity

# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=$EXISTING_SLUG&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/time-blocking">time blocking</a>
#    (no trailing slash — blog.trailing_slash: false)
# 3) POST the edited content back
curl -sf -u "$WP_USER:${!WP_APP_PASSWORD_ENV}" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

**After any REST update to a post that is open in the WP editor**, the editor shows a stale "Restore the backup" banner. Dismiss or reload — do **NOT** click Restore (restoring reverts the synced draft). Per `custom-instructions.md` §Operational notes.

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md` — anything the post claims the product does must exist
- [n/a] `modules.competitors` is `false` for this blog — no competitor pricing / feature claims to verify

**Three residual `minor` notes carried from the Stage 3b review, none blocking, all optional polish:**

- [ ] Optional: H2 4's decision trigger asks whether the day can "absorb the overrun", but branch 1 still drops the tail item, so "absorb" slightly overpromises. Left alone deliberately — that span is inside the protected lines 118–125 the reviewer called the post's strongest section, and preserving it beat a one-word gain.
- [ ] Optional: one `So <question>?` construction remains (the line inside the H2 5 protected passage). The other was varied at Stage 3c.
- [ ] **Do NOT add another exact "time blocking" instance during any final copy edit.** The phrase sits at 6 in body prose / 9 across the rendered post, at the top of `blog-craft.md`'s 2–8 band. Equally, do not REDUCE it: the surplus lives entirely in outline-locked headings and one locked table row label, so removing a prose instance would only make the headings look more repetitive.

## 6. Author map

§6. N/A for the WordPress adapter. WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: https://olgapak.com/wp-admin/post.php?post=2144&action=edit (WP post 2144, PR #13).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Set the Rank Math focus keyword.** `site-conventions.md` §SEO plugin records **Rank Math**, and records it as **not settable via standard REST** (not exposed on the `wp/v2/posts` schema). So this is a manual step: in the WP editor's Rank Math panel, set the focus keyword to exactly `time blocking` (verbatim — not a paraphrase, not the title). The workflow never attempts this write via REST.
- [ ] Click **Publish** in WP admin. **This workflow never does that step for you** — going live is always your manual action, per `custom-instructions.md` §Publishing & review.
- [ ] After publishing, verify the live post per §8 below.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/time-blocking` (no trailing slash — `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Ftime-blocking`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the FAQ rich result (the post carries a 5-question `## FAQ` block): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Ftime-blocking`
- [ ] Hand-apply the three inbound links from §4b to the live WP posts, then spot-check each one renders

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is `false` for this blog, so this step is optional and off by default. If you want the outputs anyway, the standalone skill still runs:

```
/repurpose-blog-post time-blocking
```

The skill writes four platform-native outputs under `blog-ops/drafts/_archive/time-blocking/repurpose/`.

## 10. Archive cleanup (automatic at Gate-2 finalize)

The finalize step already moved `blog-ops/drafts/time-blocking/` → `blog-ops/drafts/_archive/time-blocking/`. Verify:

```bash
ls blog-ops/drafts/time-blocking/          # should NOT exist
ls blog-ops/drafts/_archive/time-blocking/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize didn't complete, re-run the finalize sequence from the main skill's Gate 2 step.

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
  blog-ops/drafts/time-blocking/draft-v2.md
```

The four `[IMAGE:]` hits were at draft-v2.md lines 27, 72, 112, 135.

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/time-blocking.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. All four `[IMAGE:]` placeholders are replaced with real embeds at Stage 4b.5, since every slot rendered.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder
