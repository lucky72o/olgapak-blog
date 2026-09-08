# Action items: how-to-take-notes-in-meetings

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md` markers + `blog-ops/drafts/how-to-take-notes-in-meetings/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/how-to-take-notes-in-meetings/`, the archived working files (outline, facts, images.md, draft-v1.md, review history).
> - **Live post (where you edit):** `content/blog/how-to-take-notes-in-meetings.md`, plus the WordPress draft itself.
> - **Asset folder:** `blog-ops/assets/how-to-take-notes-in-meetings/`, contains `README.md` (copy of images.md) plus the five rendered image files.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Estimated total time: **15 minutes** (all five images already rendered and all markers already resolved, so what is left is the read-through, the Rank Math focus keyword, and clicking Publish).

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/how-to-take-notes-in-meetings.md`.
- Approved outline: `blog-ops/drafts/how-to-take-notes-in-meetings/outline.md` → archived
- Image plan: `blog-ops/drafts/how-to-take-notes-in-meetings/images.md` → archived + copied to `blog-ops/assets/how-to-take-notes-in-meetings/README.md`
- Review history: `review.md` (verdict `approve` on iteration 1; no `review-v<N>.md`, no revise pass ran) → archived
- Total word count: ~2,290 body prose + ~320 FAQ (3,013 words including frontmatter and markers)
- Author: `olga` (byline "Olga Pak")
- Category: `Productivity`. Tags: `productivity`, `note-taking`, `note-taking method`, `time management` (all four confirmed against the live taxonomy in `blog-ops/profile/blog.md` §Tag taxonomy)

## 1. Create images (5 total)

Image spec: `blog-ops/assets/how-to-take-notes-in-meetings/README.md` (copy of images.md). **All five were rendered automatically at Stage 4a.5, 0 failed, 0 pending.** These are verify-the-render records, not build TODOs. Estimated time: 3 minutes.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` , rendered. Funnel with speech bubbles going in and one note card coming out, hand-lettered title, olgapak.com watermark.
- [ ] Image 1: `transcription-trap.png`, see images.md §Image 1, type: `ai-prompt` , rendered.
- [ ] Image 2: `four-box-meeting-notes-template.png`, see images.md §Image 2, type: `remotion` , rendered.
- [ ] Image 3: `write-less-listen-more.png`, see images.md §Image 3, type: `ai-prompt` , rendered.
- [ ] Image 4: `five-minute-post-meeting-pass.png`, see images.md §Image 4, type: `remotion` , rendered.

**Remotion slots** (2 total): both built, registered in `tools/remotion/src/Root.tsx`, and exported. Composition IDs and exact render commands are in each slot's images.md production spec.

- [ ] Remotion: `FourBoxMeetingNotes` → `four-box-meeting-notes-template.png` (built, registered, exported)
- [ ] Remotion: `FiveMinutePostMeetingPass` → `five-minute-post-meeting-pass.png` (built, registered, exported)

> **Note for the reviewer:** this post's PR also carries a one-line fix to `tools/remotion/src/Root.tsx`. An unterminated `<Still id="FourCorePagesMap">` element arrived on `main` with the bullet-journal merge (commit `0939813`) and was a syntax error that broke **every** Remotion render, not just this post's. It is fixed here.

**AI-generated slots** (3 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `transcription-trap.png` (generated, reviewed, saved)
- [ ] AI: `write-less-listen-more.png` (generated, reviewed, saved)

Images 1 and 3 are a deliberate before/after pair, same person and same room. Character continuity was checked at Stage 4a.5 and holds.

Saved to: `blog-ops/assets/how-to-take-notes-in-meetings/`

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

**None.** The writer left zero `[VERIFY:]` markers; every numeric and factual claim in the draft traces to a `facts.md` row.

Stage 3d did do verification work here even so, because the outline deferred four external-link confirmations to it. That log is in §3.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

**Zero markers were left by the writer.** What Stage 3d verified instead were the four external URLs the writer had already placed, all of which still carried `needs_verification` in `facts.md`. Audit log:

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v1.md:60` | what the Cornell note-taking method actually is | `resolved` | https://alumni.cornell.edu/cornellians/cornell-notes/ , HTTP 200, page describes the cue column / notes column / summary layout as claimed |
| 2 | `draft-v1.md:99` | writing by hand pulls you into summarizing and paraphrasing as you go | `resolved` (anchor reworded) | https://www.bbc.com/worklife/article/20200910-the-benefits-of-note-taking-by-hand , HTTP 200. The page says handwriting "involves cognitive engagement in summarising, paraphrasing, organising" but does NOT say "prioritising", so the anchor was narrowed from "forces you to prioritize and summarize" to match what the source states |
| 3 | `draft-v1.md:133` | writing by hand is better for memory and learning | `resolved` | https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/ , HTTP 200, concludes pen and paper is "still the best way to learn"; every study it cites is students, lectures or preschool, which is why the post scopes the claim rather than applying it to meetings |
| 4 | `draft-v1.md:133` | longhand notes beat laptop notes for conceptual retention | `resolved` | https://journals.sagepub.com/doi/abs/10.1177/0956797614524581 , Mueller & Oppenheimer. **Returns 403 to `curl` behind Cloudflare but loads normally in a browser**; do not re-flag it as dead on a curl status. Abstract supports the anchor exactly |

No claim was deleted and no citation was invented. All four rows in `facts.md` now read `verified 2026-09-08` with the evidence recorded inline.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers; all five internal links were placed from the outline's plan.

For the record, the five internal links in the post (root-relative, no trailing slash, per `blog.trailing_slash: false`):
`/note-taking-methods` (intro), `/cornell-note-taking-method` (H2 2), `/charting-method-note-taking` (H2 3), `/mind-mapping-note-taking-method` (H2 4), `/digital-vs-paper-notes` (H2 6), plus the `/ai-tools` CTA link.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. These are APPLIED automatically at Stage 4b.5 to the repo copies. **This blog has `publish.wordpress.apply_inbound_links_live: true`**, so once this post's WordPress status is `publish`, the same links are applied live to the published target posts via REST and there is nothing further to do for those rows. Any row that falls back (target not found, not live, or the REST call failed) keeps the hand-apply wording and is called out in the checklist Notes.

- [ ] `content/blog/note-taking-methods.md`, add anchor "`how to take notes in meetings`" → `/how-to-take-notes-in-meetings`, in the section comparing which method suits which situation, pointing readers whose use case is work meetings rather than study
- [ ] `content/blog/cornell-note-taking-method.md`, add anchor "`adapting this for meetings`" → `/how-to-take-notes-in-meetings`, where the post discusses using Cornell beyond lectures
- [ ] `content/blog/digital-vs-paper-notes.md`, add anchor "`taking notes in meetings`" → `/how-to-take-notes-in-meetings`, where the post weighs typing against handwriting for specific situations

Include these edited files in the publish diff and confirm they rendered in the Gate 2 preview.

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] Grammarly score target: 80-85 (not 99; perfection is an AI signal)
- [ ] Scan for hallucinated product claims against `blog-ops/profile/product.md`. The post mentions the free AI tools only in the closing CTA, names no price (there is no pricing page) and claims no usage numbers (`facts.md` marks those `hypothetical`)
- [ ] `modules.competitors` is OFF for this blog, so there are no competitor pricing or feature claims to verify
- [ ] **Post-specific:** confirm no AI notetaker product is named anywhere. The post deliberately discusses the category only; Granola, Otter, Comu Action Pro and Heypocket all surfaced in research and are all excluded. The reviewer confirmed zero product names at Stage 3b
- [ ] **Post-specific:** the three numbers in the post (45 minutes to 10, roughly an hour of write-up per hour of meeting, 973 upvotes) are all individual accounts from Reddit and are attributed as such. If any got smoothed into a general claim during a later edit, put the attribution back

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url, filled at Stage 4b.5>`
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter)
- [ ] **Focus keyword.** `blog-ops/profile/site-conventions.md` §SEO plugin names **Rank Math**, and records that the focus keyword is **not settable via standard REST**. So set it yourself in the WP editor's Rank Math meta box, to exactly: `how to take notes in meetings` (verbatim, not the title, not a paraphrase). This workflow never attempts that write
- [ ] Click **Publish** in WP admin. This workflow never does that step for you
- [ ] After publishing, verify the live post per §8

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/how-to-take-notes-in-meetings` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check the featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fhow-to-take-notes-in-meetings`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema (5 Q/A pairs): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fhow-to-take-notes-in-meetings`
- [ ] Confirm the three inbound links from §4b are live on their target posts

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step for this post. If that changes, the standalone skill is `/repurpose-blog-post how-to-take-notes-in-meetings`.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/how-to-take-notes-in-meetings/          # should NOT exist
ls blog-ops/drafts/_archive/how-to-take-notes-in-meetings/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize did not complete; re-run the finalize sequence.

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
  blog-ops/drafts/how-to-take-notes-in-meetings/draft-v1.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/how-to-take-notes-in-meetings.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real Markdown image syntax at Stage 4b.5 staging, pointing at the five files already on disk in `blog-ops/assets/how-to-take-notes-in-meetings/`.

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and every path points to a file that exists in the asset folder
