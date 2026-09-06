# Action items: ai-study-tools

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/ai-study-tools/draft-v2.md` markers + `blog-ops/drafts/ai-study-tools/images.md`.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/ai-study-tools/`
> - **Live post (where you edit):** `content/blog/ai-study-tools.md`
> - **Asset folder:** `blog-ops/assets/ai-study-tools/` (contains `README.md`, a copy of images.md, plus the 5 rendered PNGs)

Read by: the human operator before publishing.

**Purpose:** the single page to work through after Gate 2. Estimated total time: **20 minutes**, most of it the optional spot-test in §5.

## 0. Pre-flight

- Draft (pre-finalize): `blog-ops/drafts/ai-study-tools/draft-v2.md` (humanized at Stage 3c, markers resolved at Stage 3d). Post-finalize: `content/blog/ai-study-tools.md`.
- Approved outline: `blog-ops/drafts/ai-study-tools/outline.md` → archived
- Image plan: `blog-ops/drafts/ai-study-tools/images.md` → archived + copied to `blog-ops/assets/ai-study-tools/README.md`
- Review history: `review.md` + `review-v1.md`, plus `plan-review.md` + `plan-review-v1.md` → archived
- Total word count: **3,036** body prose excluding the FAQ (3,599 for the whole file including frontmatter and FAQ)
- Author: `olga` (byline: Olga Pak)
- Date filled: 2026-09-06

## 1. Create images (5 total)

Image spec: `blog-ops/drafts/ai-study-tools/images.md` (post-finalize: `blog-ops/assets/ai-study-tools/README.md`). **Estimated time: 2 minutes.** All five slots were rendered automatically at Stage 4a.5 with zero failures, so every box below is a VERIFY-the-render check, not a build TODO.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` (rendered; took two codex passes, the second added an OG safe-zone constraint so a centered 1.91:1 crop does not slice the title)
- [ ] Image 1: `serp-composition.png`, see images.md §Image 1, type: `remotion` (rendered)
- [ ] Image 2: `recall-loop.png`, see images.md §Image 2, type: `remotion` (rendered)
- [ ] Image 3: `free-tier-transparency.png`, see images.md §Image 3, type: `remotion` (rendered)
- [ ] Image 4: `closed-laptop.png`, see images.md §Image 4, type: `ai-prompt` (rendered)

**Remotion slots** (3 total): all built, registered and exported at `--scale=2`.

- [ ] Remotion: `SerpComposition` → `serp-composition.png` (composition built, registered, exported)
- [ ] Remotion: `RecallLoop` → `recall-loop.png` (composition built, registered, exported)
- [ ] Remotion: `FreeTierTransparency` → `free-tier-transparency.png` (composition built, registered, exported)

**AI-generated slots** (2 total, `ai-prompt`): rendered automatically at Stage 4a.5, zero failed.

- [ ] AI: `featured.png` (generated, reviewed, saved)
- [ ] AI: `closed-laptop.png` (generated, reviewed, saved)

Saved to: `blog-ops/assets/ai-study-tools/`

**Two Remotion notes that ship with this post:**

- [ ] **A pre-existing bug in `tools/remotion/src/Root.tsx` was fixed in this PR and is unrelated to this post.** The `FourCorePagesMap` `<Still>` was unclosed, which made the whole file invalid JSX, so no composition in that project could render at all. Confirm you are happy for that fix to ship here rather than as its own change.
- [ ] `tools/remotion/node_modules` does not exist in this worktree (only in the main checkout). The builder symlinked it to render and removed the symlink afterwards, so nothing stray is staged. **Any future re-render from this worktree needs `ln -s /Users/slav/work/olgapak-blog/tools/remotion/node_modules tools/remotion/node_modules` first, or a real `npm install`.**

## 2. `[VERIFY:]` markers, auto-resolved at Stage 3d

Both resolved at a primary source. **Nothing to do here**; this is the audit log.

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:182` | 57% of U.S. college students use AI in their coursework at least weekly | `resolved` | Confirmed verbatim at https://news.gallup.com/poll/704090/routine-college-students-despite-campus-limits.aspx (Gallup / Lumina, surveyed 2 to 31 Oct 2025, n=3,801, published 1 Apr 2026). **The competitor's cited URL was wrong**: the `gallup.com/analytics/644939/...` hub page it pointed at does not carry the figure. The prose gained the survey size and date, which the secondhand version lacked. |
| 2 | `draft-v2.md:58` | NotebookLM free tier: 100 notebooks, 50 sources per notebook, 500,000 words | `resolved` (with a correction and one sub-claim deleted) | Confirmed at https://support.google.com/notebooklm/answer/16213268 (notebooks/sources) and `.../16269187` (word ceiling). **Reddit had it wrong:** the source comment said 500,000 words *per notebook*; Google's docs say per *source*. The corrected figure shipped. **Deleted sub-claim:** the same comment's ".edu students get the $19.99/month premium free" was not confirmed on any Google-owned page and was dropped rather than softened. |

**Bonus fact verified while resolving #2:** Google now calls the product **Gemini Notebook** in its own help pages, and `notebooklm.google.com` redirects to `notebook.google.com`. The post keeps the NotebookLM name (what readers search) and adds one clause so nobody is confused by the name on screen.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers, auto-resolved at Stage 3d

One marker, resolved. **Nothing to do here.**

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:117` | OpenAI's own product page for ChatGPT study mode | `resolved` | https://openai.com/index/chatgpt-study-mode/. The writer's from-memory URL turned out to be correct. `WebFetch` returned HTTP 403 (openai.com blocks it), so this was verified through the Chrome fallback: title "Introducing study mode | OpenAI", published 29 July 2025, described as "step by step guidance instead of quick answers", matching the draft's claim. |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

None. The writer placed all internal links from the outline's plan; no slot was left unresolved.

## 4b. Add inbound links from existing posts to this one

Four rows, **applied automatically at Stage 4b.5** to the repo markdown before Gate 2, so you review the complete cross-post change in the preview. Per this blog's `apply_inbound_links_live: true`, they are also applied to the LIVE WordPress posts once this post is published (see `wordpress-rest.md` §On Gate 2 approval). Until this post is published, the repo edit is the only half that has happened.

- [ ] `content/blog/note-taking-methods.md`, anchor "AI study tools" → `/ai-study-tools`, in the section on choosing a method. Applied to the repo at Stage 4b.5; hand-apply to the live WP post in wp-admin if the live application does not run.
- [ ] `content/blog/cornell-note-taking-method.md`, anchor "AI study tools for students" → `/ai-study-tools`, where the post covers generating review questions from the cue column. Same.
- [ ] `content/blog/how-to-take-notes-on-ipad.md`, anchor "best AI study tools" → `/ai-study-tools`, in the digital-tooling section. Same.
- [ ] `content/blog/digital-vs-paper-notes.md`, anchor "AI study tools" → `/ai-study-tools`, where the digital side's advantages are discussed. Same.

Prefilled commands for the hand-apply fallback:
```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert by hand into the returned content.raw at the section noted above:
#    <a href="https://olgapak.com/ai-study-tools">"<anchor>"</a>     (no trailing slash)
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] **THE ONE THAT MATTERS: spot-test three tools before you approve.** `blog.md` §Point of view promises "every tool and tactic recommended here is something Olga has personally tested". **This post was written headlessly and NO hands-on testing backs its nine picks.** It is honest about that, the title drops "Tested", H2 1 states the real method, and no sentence implies firsthand use. But it is the first post on this blog to publish recommendations without that promise behind them, and both the plan reviewer and the draft reviewer flagged it independently. The fix is cheap: **NotebookLM, ChatGPT study mode, and Studley** are all free or near-free and checkable in minutes. Studley is the highest-value check because its free tier (a single study set) is the most restrictive claim in the post. If you do test them, the method statement can gain a firsthand clause and the post gets materially stronger. If you would rather not, it ships as an honestly-labelled research-based roundup.
- [ ] Read the whole draft aloud, catches AI tells the editor missed
- [ ] **Copy polish, one known nit:** the phrase "vendor homepages" appears at both L15 and L29, a side effect of a mandated hook rewrite at the review stage. Vary one of them.
- [ ] Grammarly score target: 80 to 85 (not 99, perfection is an AI signal)
- [ ] `modules.product` is on: scan for hallucinated product claims against `blog-ops/profile/product.md`. The post mentions only the Text Summarizer and Acronym Explainer, both real, and states no price (correct, they are free and there is no pricing page).
- [ ] `modules.competitors` is OFF for this blog, so there is no competitor-profile freshness check. The nine tools are the post's SUBJECT, not competitor profiles. **However, prices move:** Studley's listed price and Evernote's free-tier contents were observed on 2026-09-06. If you are publishing more than a few weeks later, re-check both or soften to durable framing.
- [ ] **Verify no link points at a top-10 SERP competitor.** Studley, StudyFetch, Turbo AI, Mindgrasp, Ask Maeve and Evernote must be named but never hyperlinked (they rank for this post's own target keyword). Verified clean at Stages 3b, 3c and 3d; re-check after any manual edit:
```bash
grep -nE 'https?://[^ )]*(studley|studyfetch|turbo\.ai|mindgrasp|ask-maeve|evernote|remnote|therundown)' content/blog/ai-study-tools.md
# expected: no output
```

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile. Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled by the adapter at Stage 4b.5; also recorded in `pr-monitor.json`)
- [ ] Read it once more in the WP admin preview (title, excerpt and featured image are already synced by the adapter)
- [ ] **Set the focus keyword.** In **Rank Math**'s meta box in the WP editor, set the focus keyword to exactly: `ai study tools` (verbatim, not a paraphrase, not the title). Per `site-conventions.md` §SEO plugin this is **not settable via standard REST**, so it is a manual step and this workflow never attempts it.
- [ ] Click **Publish** in WP admin. This workflow never does that step for you.
- [ ] After publishing, verify the live post per §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/ai-study-tools` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow
- [ ] Check the featured-image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fai-study-tools`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Confirm the four inbound links from §4b are live on their target posts
- [ ] JSON-LD FAQ schema: the wordpress-rest adapter does not emit it (FAQPage schema is a WP-plugin concern). If Rank Math is configured to emit FAQ schema, validate at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fai-study-tools`

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **false** for this blog, so there is no repurpose step. Skip.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/ai-study-tools/          # should NOT exist
ls blog-ops/drafts/_archive/ai-study-tools/ # should exist, contains all the working files
```

If the draft directory still exists, Gate 2 finalize did not complete; re-run the finalize sequence.

---

## Marker grep summary (raw, for re-verification)

```
[VERIFY:]              , 0 hits (2 resolved at Stage 3d)
[EXTERNAL_LINK_NEEDED:], 0 hits (1 resolved at Stage 3d)
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 4 hits (matches the 4 `### Image ` entries in images.md; total images = 4 + 1 featured = 5)
```

Grep command run at Stage 4b (against the pre-finalize draft):
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' \
  blog-ops/drafts/ai-study-tools/draft-v2.md
```

Re-run against the **live post** before publishing:
```bash
POST=content/blog/ai-study-tools.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. The four `[IMAGE:]` placeholders are replaced with real embeds by the adapter at Stage 4b.5, since all five renders exist on disk.

- [ ] All `[IMAGE:]` placeholders replaced with real image markup, each path pointing at a file that exists in `blog-ops/assets/ai-study-tools/`
