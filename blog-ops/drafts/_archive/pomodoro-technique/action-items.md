# Action items: pomodoro-technique

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/pomodoro-technique/draft-v2.md` markers + `blog-ops/drafts/pomodoro-technique/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/pomodoro-technique/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/pomodoro-technique.md`, and the WordPress draft it was synced into.
> - **Asset folder:** `blog-ops/assets/pomodoro-technique/`, contains `README.md` (copy of images.md) plus the five rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/pomodoro-technique/draft-v2.md` (pre-move).

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **15 minutes** (all five images already rendered; no markers to resolve; the real work is the read-through, the Rank Math focus keyword, and clicking Publish).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/pomodoro-technique/` → `blog-ops/drafts/_archive/pomodoro-technique/` for the history files, and the post becomes `content/blog/pomodoro-technique.md` plus the synced WordPress draft.

- Draft (pre-finalize): `blog-ops/drafts/pomodoro-technique/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/pomodoro-technique.md`.
- Approved outline: `blog-ops/drafts/pomodoro-technique/outline.md` → archived to `blog-ops/drafts/_archive/pomodoro-technique/outline.md`
- Image plan: `blog-ops/drafts/pomodoro-technique/images.md` → archived to `blog-ops/drafts/_archive/pomodoro-technique/images.md` + copied to `blog-ops/assets/pomodoro-technique/README.md`
- Review history: `blog-ops/drafts/pomodoro-technique/review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/pomodoro-technique/`
- Total word count: 2,745 (2,146 body prose on the reviewer's gated basis, vs the 2,150 outline roll-up, -0.2%)
- Author: `olga` (Olga Pak)
- Title: `Pomodoro Technique: How It Works and When to Break It`
- Target keyword: `pomodoro technique`
- Category: `Productivity`
- Post date: 2026-09-08 (placeholder; the console rewrites this to the real publication day immediately before merge)

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/pomodoro-technique/images.md` (also copied to `blog-ops/assets/pomodoro-technique/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/pomodoro-technique/images.md`. Estimated time: **0 minutes, all five rendered automatically at Stage 4a.5.** These are verify-the-render records, not build TODOs.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` , **rendered**, verify it reads well as the WP featured image and in the Open Graph preview (§8)
- [ ] Image 1: `pomodoro-cycle-diagram.png`, see images.md §Image 1, type: `remotion` , **rendered**
- [ ] Image 2: `pomodoro-desk-session.png`, see images.md §Image 2, type: `ai-prompt` , **rendered**
- [ ] Image 3: `pomodoro-timer-ignored.png`, see images.md §Image 3, type: `ai-prompt` , **rendered**
- [ ] Image 4: `pomodoro-timers-lineup.png`, see images.md §Image 4, type: `ai-prompt` , **rendered**

**Remotion slots** (1 total): built and exported at Stage 4a.5 per `adapters/images/remotion.md`. The composition source ships on this post's branch (`tools/remotion/src/` + the `Root.tsx` registration diff).

- [ ] Remotion: `PomodoroCycleDiagram` → `pomodoro-cycle-diagram.png` (composition built, registered, exported) , **done at Stage 4a.5**, verify the render

**AI-generated slots** (4 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path. Zero `failed`, so there is no pasteable-prompt fallback to run.

- [ ] AI: `featured.png` (generated, reviewed, saved) , **done**
- [ ] AI: `pomodoro-desk-session.png` , **done**
- [ ] AI: `pomodoro-timer-ignored.png` , **done**
- [ ] AI: `pomodoro-timers-lineup.png` , **done**

**Screenshot slots:** none. The image planner deliberately declined to put a screenshot on the free-apps subsection (an external app capture would block the run on a manual step for no reader gain).

Saved to: `blog-ops/assets/pomodoro-technique/` (ownership sentinel `.staged-by-blog-workflow` present).

**Two planner judgment calls, flagged in case you want to override:**
- Image 4 shows four timer archetypes for the five reviewed products; the Time Timer MOD and the Secura would have rendered as near-duplicate red discs.
- Image 1 adds a "1 pomodoro" bracket that the draft's placeholder did not request.

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

**None.** The grep found zero `[VERIFY:]` markers in `draft-v2.md`. The writer sourced every claim from `facts.md` and needed no verification markers, so Stage 3d resolved nothing, deleted nothing, and routed nothing.

Worth knowing: the writer twice avoided inventing a small number ("two-minute jobs", "20 more minutes") by rewording to generic phrasing rather than leaving a `[VERIFY:]`. No effect-size or percentage claim appears anywhere in the post, per the `facts.md` §Rejected prohibition, and H2 4 says so to the reader in as many words.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

**None.** The grep found zero. All four external citations were pre-planned in the outline and shipped verbatim:

| # | Claim | Target URL | Class |
|---|---|---|---|
| 1 | 32 studies and 5,270 participants, only three randomised trials | https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/ | authoritative_allowlist |
| 2 | brief diversions from a task measurably improve the ability to stay focused on it | https://news.illinois.edu/brief-diversions-vastly-improve-focus-researchers-find/ | primary_source |
| 3 | a writing coach's account of the technique forcing him to define what a task contains | https://writingcenter.unc.edu/2020/04/pomodoros/ | authoritative_allowlist |
| 4 | the strategies these students rely on are a mix of habits, reframing and symptom-specific tactics, not any single method | https://pmc.ncbi.nlm.nih.gov/articles/PMC6406620/ | authoritative_allowlist |

All four re-verified HTTP 200 at Stage 3d. Zero links to any of the 15 captured SERP URLs. Both PMC links are a deliberate allowlist exception (NLM/NIH is allowlist-class per `standards/blog-craft.md`, and PMC is not a realistic ranking competitor for this blog).

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** Zero markers. The post ships four body internal links, all planned in the outline and all verified HTTP 200 on the live site, plus the two CTA links:

- `/what-is-timeboxing` (intro), `/how-to-plan-your-week` (H2 3), `/how-to-stop-doomscrolling` (H2 3), `/time-blocking` (H2 5)
- CTA: `/ai-tools` and `/ai-tools/ai-text-summarizer`

All root-relative with no trailing slash, per `blog.trailing_slash: false`.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. These are **applied automatically at Stage 4b.5** to the repo copies, and `publish.wordpress.apply_inbound_links_live: true` means they are also applied to the LIVE published targets via REST once this post itself is published (see the adapter's §"Live inbound-link application"). Do not hand-apply them pre-emptively; confirm each rendered correctly in the Gate 2 preview.

- [ ] `content/blog/time-blocking.md`, add anchor "**the Pomodoro Technique**" → `/pomodoro-technique` in §"Who time blocking doesn't suit (and what to do instead)"
- [ ] `content/blog/how-to-stop-doomscrolling.md`, add anchor "**timed focus sessions**" → `/pomodoro-technique` in §"Layer 3: Rebuild your routine (design days that don't need willpower)"
- [ ] `content/blog/how-to-plan-your-week.md`, add anchor "**a Pomodoro timer**" → `/pomodoro-technique` in §"Tools that make weekly planning easier"

If any row fell back to hand-apply (target not found, not live, or the REST call failed), the commands are:

```bash
WP_BASE=https://olgapak.com
WP_USER=wpx_admin101
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "$WP_BASE/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/pomodoro-technique">the Pomodoro Technique</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "$WP_BASE/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole post aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors)
- [ ] Grammarly score target: 80-85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] Product scan (`modules.product` is on): the post names exactly one tool, the **Text Summarizer**, once, in the CTA. Confirm nothing claims a feature `blog-ops/profile/product.md` does not list, and that no price appears anywhere (the tools are free and there is no pricing page)
- [ ] Affiliate check: five Amazon links, every one carrying `?tag=op01e-20`, and the italic disclosure is the last paragraph of the intro. No `[AFFILIATE-LINK-PENDING:]` placeholders, no untagged Amazon URLs, no exact prices anywhere
- [ ] Quote-attribution check: every Reddit quote is credited to a subreddit, never a username, and no Reddit or X thread is linked
- [ ] `modules.competitors` is off for this blog, so there are no competitor pricing/feature claims to re-verify

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (written into `pr-monitor.json` by the adapter when the WP draft is created at `autopilot-cont`)
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by this adapter)
- [ ] **Focus keyword.** Set the focus keyword in **Rank Math** to exactly: `pomodoro technique`. It is **not** settable via standard REST (`blog-ops/profile/site-conventions.md` §SEO plugin), so this is a manual step in the WP editor's Rank Math meta box, and the workflow never attempts it
- [ ] Click **Publish** in WP admin. This workflow never does that step for you
- [ ] After publishing, verify the live post per §8

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/pomodoro-technique` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fpomodoro-technique`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema (5 Q/A pairs): `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fpomodoro-technique`
- [ ] Confirm the three inbound links from §4b are live on their target posts

## 9. Trigger Phase 5 repurpose (when ready)

`modules.repurpose` is **off** for this blog, so there is no repurpose step. Skip.

## 10. Archive cleanup (automatic at Gate-3 finalize)

The finalize step already moved `blog-ops/drafts/pomodoro-technique/` → `blog-ops/drafts/_archive/pomodoro-technique/`. Verify:

```bash
ls blog-ops/drafts/pomodoro-technique/          # should NOT exist
ls blog-ops/drafts/_archive/pomodoro-technique/ # should exist, contains all the working files
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
  blog-ops/drafts/pomodoro-technique/draft-v2.md
```

Hits were at lines 29, 64, 110, 142, all `[IMAGE:]`, all resolved to real embeds by the adapter at Stage 4b.5 staging.

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/pomodoro-technique.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. **Marker fixes land in the live `$POST` file, not in the archived draft.**

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in `blog-ops/assets/pomodoro-technique/`
