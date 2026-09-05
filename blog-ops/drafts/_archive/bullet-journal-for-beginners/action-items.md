# Action items: bullet-journal-for-beginners

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md` markers + `blog-ops/drafts/bullet-journal-for-beginners/images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/bullet-journal-for-beginners/`, the archived working files.
> - **Live post (where you edit):** `content/blog/bullet-journal-for-beginners.md`, plus the WordPress draft.
> - **Asset folder:** `blog-ops/assets/bullet-journal-for-beginners/`, contains `README.md` (copy of images.md) plus the five rendered images.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Estimated total time: **20 minutes**, almost all of it the read-aloud pass and the two WP admin steps. This post generated unusually few TODOs: every image rendered, every marker resolved automatically, and the inbound links are applied by the workflow.

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/bullet-journal-for-beginners.md`.
- Approved outline: `blog-ops/drafts/bullet-journal-for-beginners/outline.md`
- Image plan: `blog-ops/drafts/bullet-journal-for-beginners/images.md`, also copied to `blog-ops/assets/bullet-journal-for-beginners/README.md` at finalize
- Review history: `review.md` + `review-v1.md`; plan review history: `plan-review.md` + `plan-review-v1.md`
- Total word count: **3,498** (body prose excluding FAQ: 2,874 against a 2,750 target, +4.5%)
- Author: `olga` (byline: Olga Pak)
- Category: **Productivity** (WP term id 12)
- Target keyword: `bullet journal for beginners`

**One item on this post genuinely needs Olga's eye, and only hers.** See §5.

## 1. Create images (5 total)

Image spec: `blog-ops/drafts/bullet-journal-for-beginners/images.md`, copied to `blog-ops/assets/bullet-journal-for-beginners/README.md` at finalize. **All five were rendered automatically at Stage 4a.5. Nothing here is a build TODO; these are verify-the-render checks.** Estimated time: 5 minutes.

- [x] Featured image: `featured.png`, images.md §Featured image, type: `ai-prompt`. Rendered. Editor checked the lettering character by character: title band reads `Bullet Journal for Beginners: You Don't Need Art Skills`, the numeral is a single `4` above the word `pages`, wordmark bottom-left, apricot ground with one red accent word.
- [x] Image 1: `scrolling-spreads-notebook-ignored.png`, images.md §Image 1, type: `ai-prompt`. Rendered.
- [x] Image 2: `four-core-pages-map.png`, images.md §Image 2, type: `remotion`. Rendered. Editor checked the labels against the post's own terminology (Index, Future Log, Monthly Log, Daily Log) and the two migration arrows (`>` forward, `<` back into the Future Log).
- [x] Image 3: `daily-log-page-in-use.png`, images.md §Image 3, type: `ai-prompt`. Rendered. **Note the filename change:** the image planner renamed this slot from the draft placeholder's `rapid-logging-symbol-key.png` and retyped it from `remotion` to `ai-prompt`, because a Remotion symbol key would have been a picture of the markdown table sitting beside it. images.md is the authority for both the filename and the type, not the placeholder.
- [x] Image 4: `notebook-plus-calendar-hybrid.png`, images.md §Image 4, type: `ai-prompt`. Rendered.

**Remotion slots** (1 total): `FourCorePagesMap` → `four-core-pages-map.png`. Composition built at `tools/remotion/src/FourCorePagesMap.tsx` and registered in `tools/remotion/src/Root.tsx`.

- [x] Remotion: `FourCorePagesMap` → `four-core-pages-map.png` (built, registered, exported)

> **Heads-up, unrelated to this post but shipping with it.** `tools/remotion/src/Root.tsx` was broken on `main`: a union-merge left `NotesDecisionRule`, `TwoPilesOfScreenTime` and `InkFamiliesTradeoff` as unclosed `<Still>` tags, so the whole Remotion project failed to build and NO composition could render. The image-builder repaired those three entries in order to render this post's diagram. That repair is in this post's PR. It is a real fix to shared infrastructure, worth a look in the diff, and it unblocks every future Remotion image, not just this one.

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex adapter.

- [x] AI: `featured.png` (generated, reviewed, saved)
- [x] AI: `scrolling-spreads-notebook-ignored.png` (generated, reviewed, saved)
- [x] AI: `daily-log-page-in-use.png` (generated, reviewed, saved)
- [x] AI: `notebook-plus-calendar-hybrid.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/bullet-journal-for-beginners/`

## 2. `[VERIFY:]` markers, auto-resolved

Grep against `draft-v2.md` returns **zero** `[VERIFY:]` markers. The one the writer left was closed at Stage 3b, before Stage 3d ran.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:168` (as written in draft-v2 pre-edit) | at least five commenters in one r/BasicBulletJournals thread describe the same paper-plus-digital-calendar split | `resolved` | Verified by the editor directly against the raw capture `research/_raw/reddit-10-basicbujo.json`, counting all 20 comments including nested replies. **Seven** commenters describe it (u/Fun_Apartment631, u/NutkinNB, u/silverpoinsetta, u/Bearrister18, u/patch99329, u/gigiwasabi_jc, u/FuryVonB), so the post's "at least five" is conservative. Promoted to `facts.md` §Statistics and the marker dropped. Worth knowing: `research/reddit.md`'s own list of five names was partly wrong (u/pet_a_ghost and u/RhiaMaykes split appointments into PAPER planners), which is why the raw file was counted instead of the analysis file being trusted. |

**Nothing to do.**

## 3. `[EXTERNAL_LINK_NEEDED:]` markers, auto-resolved at Stage 3d

Grep against `draft-v2.md` returns **zero**. Both markers were handled at Stage 3d.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:156` | writing an unfinished task down reduces how much it intrudes on your attention | `resolved` | Cited https://users.wfu.edu/masicaej/MasicampoBaumeister2011JPSP.pdf (Masicampo and Baumeister 2011, *Journal of Personality and Social Psychology* 101(4) 667-683), served from the first author's own Wake Forest faculty page, a `.edu` allowlist domain. **The claim was corrected in the process, which is the part worth reading.** The PDF was fetched and its abstract read rather than trusted from a search snippet, and the paper credits *making a specific plan*, not *writing the task down*: "Allowing participants to formulate specific plans for their unfulfilled goals eliminated the various activation and interference effects." Bare capture is not a plan. The sentence was rewritten to credit the decision, which is both what the source supports and a stronger argument for migration. |
| 2 | `draft-v2.md:218` (FAQ, ADHD answer) | whether a manual task-migration habit helps people with ADHD | `kept-general` (marker dropped) | Searched for a primary or allowlist source and found only blogs and commercial planner sites (creatorsfriend.com.au, nicolaknobel.com, edielovesmath.blog, audhdpsychiatry.co.uk). Nothing peer-reviewed, no `.edu`, no recognised ADHD organisation. On inspection there was no claim to delete: the answer describes the migration mechanic (sourced elsewhere) and then explicitly declines to predict who it suits. The marker was dropped and the answer left intact. A citation there would have been decoration. |

**Nothing to do.** Two other citations flagged `needs verification` were also discharged at Stage 3d: Scientific American returns 200 and contains the quoted line verbatim (in "The Reading Brain in the Digital Age" by Ferris Jabr), and the YouTube figure was checked live (15m views, runtime 4:11, `uploadDate` 2015-05-21), so the post's "more than 15 million times", "four minutes" and "eleven years old" are all accurate and all round down.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers; all five internal links were placed by the writer from the outline's plan.

## 4b. Add inbound links from existing posts to this one

Applied automatically at Stage 4b.5, before the Gate 2 preview, so you review the whole cross-post change together. Per `publish.wordpress.apply_inbound_links_live: true`, these are repo edits for now and become live-post edits once this post is published (see `adapters/publish/wordpress-rest.md` §Action-items sections §4b).

- [ ] `content/blog/how-to-plan-your-week.md`, anchor "starting a bullet journal" → `/bullet-journal-for-beginners`, in the section on choosing a planning format, as the paper-first alternative. Applied to the repo file at Stage 4b.5; **hand-apply to the live WP post in wp-admin after publishing** (auto-sync of prior posts is out of v1 scope).
- [ ] `content/blog/best-notebooks-for-note-taking.md`, anchor "start a bullet journal in it" → `/bullet-journal-for-beginners`, near the top where the post asks what you will actually use the notebook for. Applied to the repo file; hand-apply live after publishing.
- [ ] `content/blog/digital-vs-paper-notes.md`, anchor "a paper planning system like a bullet journal" → `/bullet-journal-for-beginners`, in the part on where paper genuinely wins. Applied to the repo file; hand-apply live after publishing.

Prefilled commands for the live hand-apply (paste and run, one per target):
```bash
# 1) fetch the target post's raw content
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/bullet-journal-for-beginners">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "wpx_admin101:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```
No trailing slash on the URL (`blog.trailing_slash: false`).

## 5. Final manual read

- [ ] **Confirm two details about your own history, in the H2 "The real reason beginners never start".** This is the one item nobody but you can check. The passage reads: "I put off building my own blog for months because HTML and CSS sounded like something you needed a qualification for. The first page took one evening. Face-palm city." `voice.md` §Personal-anecdote bank records the anecdote itself but attaches no duration to it, so **"months" and "one evening" came from the writer, not from a source.** If either is wrong, the reviewer's minimal edit keeps the beat: *"I put off building my own blog for far longer than it deserved because HTML and CSS sounded like something you needed a qualification for. The first page took an evening. Face-palm city."* Keep "Face-palm city." as the closing sentence either way.
- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] Grammarly score target: 80-85 (not 99; perfection is an AI signal)
- [ ] `modules.product` is on: scan for hallucinated product features against `blog-ops/profile/product.md`. This post mentions the free AI tools once, in the closing CTA, naming Text Summarizer. No prices are stated anywhere (there are none).
- [ ] `modules.competitors` is off for this blog: no competitor pricing or feature claims to verify.
- [ ] Sanity-check the deliberate omission: **this post ships zero Amazon links and no affiliate disclosure, on purpose.** It is an informational guide whose central argument is that you should buy nothing to start, so the supplies section routes to `/best-notebooks-for-note-taking` and `/best-pens-for-note-taking` instead. The decision is recorded in `plan.md` §Open questions and was confirmed at plan review. If you disagree, that is a Gate 2 change request, not a bug.

## 6. N/A for the WordPress adapter.

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled at Stage 4b.5 staging).
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by the adapter).
- [ ] **Set the Rank Math focus keyword** to exactly: `bullet journal for beginners` (verbatim, not a paraphrase and not the title). Rank Math does not expose this on the standard `wp/v2/posts` REST schema (`site-conventions.md` §SEO plugin), so this is a manual step in the WP editor's Rank Math meta box. The workflow never attempts that write.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/bullet-journal-for-beginners` (no trailing slash)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fbullet-journal-for-beginners`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema (4 questions): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fbullet-journal-for-beginners`
- [ ] Apply the three inbound links to the LIVE posts per §4b
- [ ] Flip this post's row in `blog-ops/content-plan.md` from `planned` to `published`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is nothing to run here.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/bullet-journal-for-beginners/          # should NOT exist
ls blog-ops/drafts/_archive/bullet-journal-for-beginners/ # should exist, contains all the working files
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

Grep command the editor ran at Stage 4b:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/bullet-journal-for-beginners/draft-v2.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/bullet-journal-for-beginners.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real Markdown image syntax at Stage 4b.5 staging, using the filenames from **images.md** (not the placeholders, which disagree on Image 3).

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax, each path pointing at a file that exists in `blog-ops/assets/bullet-journal-for-beginners/`
