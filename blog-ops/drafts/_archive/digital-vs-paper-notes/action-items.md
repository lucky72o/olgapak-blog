# Action items: digital-vs-paper-notes

Compiled by: blog-post-workflow skill (editor role) at Stage 4b, from a grep of `blog-ops/drafts/digital-vs-paper-notes/draft-v2.md` markers + `blog-ops/drafts/digital-vs-paper-notes/images.md` count.

> **Path convention after Gate 2 finalize:**
> - **History / spec (read-only):** `blog-ops/drafts/_archive/digital-vs-paper-notes/`, the archived working files (outline, facts, images.md, draft-v2.md, review history).
> - **Live post (where you edit):** `content/blog/digital-vs-paper-notes.md` plus the WordPress draft it was synced into.
> - **Asset folder:** `blog-ops/assets/digital-vs-paper-notes/`, contains `README.md` (copy of images.md) plus the 5 rendered image files.
>
> If you read this file before Gate 2, the draft is still at `blog-ops/drafts/digital-vs-paper-notes/draft-v2.md` (pre-move). The shell snippets below use variables so either phase works: set `POST=...` to the live path after finalize, or the draft path before.

Read by: the human operator before publishing.

**Purpose:** the single page the human works through after Gate 2. Every item here is required before publish. Estimated total time: **10 minutes** (all images are already rendered and all markers are already resolved; what's left is a read-through, the Rank Math focus keyword, and clicking Publish).

## 0. Pre-flight

Paths shown below are pre-finalize. After Gate 2, swap `blog-ops/drafts/digital-vs-paper-notes/` → `blog-ops/drafts/_archive/digital-vs-paper-notes/` for the history files, and the draft becomes `content/blog/digital-vs-paper-notes.md`, the live post you edit.

- Draft (pre-finalize): `blog-ops/drafts/digital-vs-paper-notes/draft-v2.md` (humanized at Stage 3c). Post-finalize: `content/blog/digital-vs-paper-notes.md`.
- Approved outline: `blog-ops/drafts/digital-vs-paper-notes/outline.md` → archived to `blog-ops/drafts/_archive/digital-vs-paper-notes/outline.md`
- Image plan: `blog-ops/drafts/digital-vs-paper-notes/images.md` → archived to `blog-ops/drafts/_archive/digital-vs-paper-notes/images.md` + copied to `blog-ops/assets/digital-vs-paper-notes/README.md`
- Review history: `blog-ops/drafts/digital-vs-paper-notes/review.md` + `review-v1.md` → archived to `blog-ops/drafts/_archive/digital-vs-paper-notes/`
- Total word count: **3,256** (2,700 body prose + FAQ + frontmatter)
- Author: `olga` (frontmatter `authors: [Olga Pak]`)
- Category (resolved at intake): **Productivity, EdTech** (`[12, 9]`)
- Target keyword: **digital vs paper notes**

## 1. Create images (5 total)

Image spec (post-finalize): `blog-ops/drafts/_archive/digital-vs-paper-notes/images.md` (also copied to `blog-ops/assets/digital-vs-paper-notes/README.md` by the finalize step). Pre-finalize: `blog-ops/drafts/digital-vs-paper-notes/images.md`. Estimated time: **0 minutes, all 5 already rendered at Stage 4a.5** (0 failed, 0 pending). Every box below is a verify-the-render check, not a build TODO.

- [ ] Featured image: `featured.png`, see images.md §Featured image, type: `ai-prompt` — **rendered**, archetype `split-contrast`
- [ ] Image 1: `what-the-study-measured.png`, see images.md §Image 1, type: `remotion` — **rendered**
- [ ] Image 2: `motion-not-material.png`, see images.md §Image 2, type: `ai-prompt` — **rendered**
- [ ] Image 3: `hybrid-workflow-flow.png`, see images.md §Image 3, type: `remotion` — **rendered**
- [ ] Image 4: `notes-decision-rule.png`, see images.md §Image 4, type: `remotion` — **rendered**

**Remotion slots** (3 total): built per `${CLAUDE_PLUGIN_ROOT}/adapters/images/remotion.md`. Each was registered in `tools/remotion/src/Root.tsx`, written as `src/<Id>.tsx`, and exported at `--scale=2` into the asset folder. Nothing to build; confirm each still renders if you change the theme.

- [x] Remotion: `WhatTheStudyMeasured` → `what-the-study-measured.png` (composition built, registered, exported)
- [x] Remotion: `HybridWorkflowFlow` → `hybrid-workflow-flow.png` (composition built, registered, exported)
- [x] Remotion: `NotesDecisionRule` → `notes-decision-rule.png` (composition built, registered, exported)

**AI-generated slots** (2 total, `ai-prompt`): rendered automatically at Stage 4a.5 via the codex path — verify each render; a `failed` slot would be a build TODO via its pasteable `Prompt:` block in images.md (`${CLAUDE_PLUGIN_ROOT}/adapters/images/ai-prompt.md`). Neither failed.

- [x] AI: `featured.png` (generated, reviewed by the editor, saved)
- [x] AI: `motion-not-material.png` (generated, saved)

Save all to: `blog-ops/assets/digital-vs-paper-notes/` (already there, with the `.staged-by-blog-workflow` sentinel)

## 2. `[VERIFY:]` markers , auto-resolved at Stage 3d

These were resolved automatically at Stage 3d (marker auto-resolution), so there is normally nothing to do here. This section is the audit log of what the editor did, plus any residual that was deliberately left for you.

Stage 3d resolution log (one row per marker the writer left):

**None.** The writer emitted **zero** `[VERIFY:]` markers, deliberately: every figure `facts.md` flags as `needs_verification` (the 14.6% / 8.8% verbatim split, the 13-vs-40 wpm handwriting/typing speeds, device-ownership stats) was kept out of the post entirely rather than written-then-marked. The speed gap is stated qualitatively instead, per the Stage 1c.5 plan-reviewer ruling. Nothing was deleted, nothing was left general, nothing routed to a human.

**One claim was ADDED at Stage 3d** (not a marker resolution, an enrichment the Stage 3b reviewer flagged at both iterations as the post's strongest missing differentiator):

| # | Line | Claim | Outcome | Source / note |
|---|---|---|---|---|
| 1 | `draft-v2.md:62` | The 2014 study's replication picture: some trends favored longhand but performance did not consistently differ between groups; the meta-analysis of direct replications found small, nonsignificant effects favoring longhand | `resolved` (added with citation) | Morehead, Dunlosky & Rawson (2019), *Educational Psychology Review* 31, 753-780 — https://link.springer.com/article/10.1007/s10648-019-09468-2 — confirmed by fetching the publisher's canonical article page; primary source, NOT in this post's SERP top-10. Mirrored into `facts.md` §Named examples. |

## 3. `[EXTERNAL_LINK_NEEDED:]` markers , auto-resolved at Stage 3d

Same as §2: Stage 3d either linked the claim to an allowlist/primary source or (if no source existed) deleted the claim. This is the audit log.

**None.** The writer emitted zero `[EXTERNAL_LINK_NEEDED:]` markers; every planned external link was resolvable from the outline's external link plan at drafting time.

For the record, the post's 4 external links, all re-verified live at Stage 3d:

| URL | Class | HTTP |
|---|---|---|
| https://journals.sagepub.com/doi/full/10.1177/0956797614524581 | `primary_source` (the 2014 study itself) | loads in a browser; 403s `curl` as bot protection, re-verified in Chrome |
| https://link.springer.com/article/10.1007/s10648-019-09468-2 | `primary_source` (the 2019 replication, added at Stage 3d) | 200 |
| https://guts.wisc.edu/2020/11/19/pros-and-cons-of-typed-digitally-handwritten-and-paper-notes/ | `authoritative_allowlist` (`.edu`) | 200 |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4812780/ | `authoritative_allowlist` (NLM) | 200 |
| https://www.utsc.utoronto.ca/learningstrategies/digital-vs-paper-notes | `authoritative_allowlist` (`.edu`) — see the flag in §5 | 200 |

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

Internal links where the outline's existing-posts table didn't offer a fit. Pick the closest existing published post OR add to the backlog if no fit exists. Insert as root-relative `[anchor](/<slug>)` (no trailing slash, per `blog.trailing_slash: false`), never `https://olgapak.com/...` (per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §Internal linking).

**None.** 0 markers. The post carries 5 outbound internal links, all resolved at drafting time from the outline's existing-posts table: `/note-taking-methods`, `/cornell-note-taking-method`, `/mind-mapping-note-taking-method`, `/how-to-stop-doomscrolling`, and the CTA target.

## 4b. Add inbound links from existing posts to this one

From the outline's "Inbound internal links" section. **These are applied automatically at Stage 4b.5, not by you.** Per `custom-instructions.md` §Inbound internal links plus `publish.wordpress.apply_inbound_links_live: true`, each is applied to the repo copy at staging and to the LIVE WordPress post via REST once this post is published.

- [x] `content/blog/cornell-note-taking-method.md`, anchor "digital vs paper notes" → `/digital-vs-paper-notes`, in its `## Paper vs digital, plus a free Cornell template` section — applied to the repo copy at Stage 4b.5; hand-apply or let the post-publish live application handle the WP copy
- [x] `content/blog/mind-mapping-note-taking-method.md`, anchor "whether to go digital or stay on paper" → `/digital-vs-paper-notes`, in its `## Paper vs. Digital Mind Maps` section — same
- [x] `content/blog/note-taking-methods.md`, anchor "choosing between digital and paper notes" → `/digital-vs-paper-notes`, in its `## Which Method Fits Which Situation` section — same
- [x] `content/blog/best-notebooks-for-note-taking.md`, anchor "digital vs paper notes" → `/digital-vs-paper-notes`, in its `## Best reusable and digital notebooks` section — same

Confirm all four rendered correctly in the Gate 2 preview. The exact before/after for each is recorded in the archived `checklist.md` Notes.

If a live REST application fails or a target isn't found, the fallback is the hand-apply sequence:
```bash
# 1) fetch the target post's raw content
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" \
  "https://olgapak.com/wp-json/wp/v2/posts?slug=<existing-slug>&context=edit&_fields=id,content"
# 2) insert the anchor by hand into the returned content.raw at the section named above:
#    <a href="https://olgapak.com/digital-vs-paper-notes">"<anchor>"</a>
# 3) POST the edited content back (build the body with jq, never a hand-quoted string):
curl -sf -u "$WP_USER:$WP_APP_PASSWORD" -X POST \
  -H 'Content-Type: application/json' \
  "https://olgapak.com/wp-json/wp/v2/posts/<id>" \
  -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
```

## 5. Final manual read

- [ ] Read the whole draft aloud, catches AI tells the editor missed (awkward rhythm, overly formal connectors, "it's important to note that" variants)
- [ ] Grammarly score target: 80–85 (not 99, perfection is an AI signal). If over 95, deliberately loosen one or two sentences
- [ ] `modules.product` is enabled: scan for hallucinated product features against `blog-ops/profile/product.md` — the post mentions the Text Summarizer once, in the CTA section
- [ ] `modules.competitors` is **off** for this blog; no competitor pricing/feature claims to verify
- [ ] **Editor flag (config, not content):** the post links `utsc.utoronto.ca`, permitted under a per-post ruling in `facts.md` §Linking rules, while `blog-ops/profile/voice.md` §Additional allowlist domains still reads "None". The link is fine (`.edu` is allowlist-class by the generic rule). Consider adding the domain to `voice.md` so future reviews stop relitigating it. Raised at both Stage 3b review iterations.
- [ ] **Editor flag (config, not content):** spelling locale is undeclared in `voice.md`. That is what let 13 British spellings through draft-v1 as a blocking `major`. Adding an explicit "American English" line to `voice.md` prevents a repeat.

## 6. N/A for the WordPress adapter

WordPress has no author-map file to reconcile (unlike the Astro adapter's optional `authors_map_check`). Continue to §7.

## 7. Publish

- [ ] Open the WordPress draft preview: `<wp_preview_url — filled at Stage 4b.5 staging; this run defers the WP-draft create to the console's autopilot-cont step under CONSOLE_VERIFICATION=on>`.
- [ ] Read it once more in the WP admin preview (title, excerpt, featured image already synced by this adapter).
- [ ] **Focus keyword.** Set the focus keyword in **Rank Math** to exactly: `digital vs paper notes`. Per `blog-ops/profile/site-conventions.md` §SEO plugin this is **not** settable via standard REST, so it is a manual step in the WP editor's Rank Math meta box. The workflow never attempts that write.
- [x] Click **Publish** in WP admin. This workflow never does that step for you. — already done by the author before finalize ran (post 2187 was `status: publish`); finalize detected the external publish and skipped the content re-sync so nothing you edited in admin was overwritten
- [ ] After publishing, verify the live post per action-items §8.

## 8. Post-publish (within 24 hours)

- [ ] Verify the live URL: `https://olgapak.com/digital-vs-paper-notes` (no trailing slash, per `blog.trailing_slash: false`)
- [ ] Submit URL to Google Search Console → URL Inspection → Request Indexing
- [ ] Submit URL to Bing IndexNow (via Bing Webmaster Tools or the CLI)
- [ ] Check featured image Open Graph preview: `https://www.opengraph.xyz/?url=https%3A%2F%2Folgapak.com%2Fdigital-vs-paper-notes`
- [ ] Check mobile rendering at a narrow viewport
- [ ] Validate the JSON-LD FAQ schema at `https://search.google.com/test/rich-results?url=https%3A%2F%2Folgapak.com%2Fdigital-vs-paper-notes`
- [x] Confirm the 4 inbound links from §4b are live on their published posts — done at Gate 2 finalize 2026-08-26: all four LIVE WP posts (2075, 2114, 2102, 2092) updated via REST, HTTP 200 each, re-fetch confirms exactly one `/digital-vs-paper-notes` anchor per post

## 9. Trigger Phase 5 repurpose (when ready)

**Skipped for this blog** — `modules.repurpose: false` in `blog-ops/config.yaml`. No X / LinkedIn / newsletter outputs are produced.

## 10. Archive cleanup (automatic at Gate-3 finalize)

The finalize step already moved `blog-ops/drafts/digital-vs-paper-notes/` → `blog-ops/drafts/_archive/digital-vs-paper-notes/`. Verify:

```bash
ls blog-ops/drafts/digital-vs-paper-notes/          # should NOT exist
ls blog-ops/drafts/_archive/digital-vs-paper-notes/ # should exist, contains all the working files
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
  blog-ops/drafts/digital-vs-paper-notes/draft-v2.md
```

Re-run against the **live post** before publishing (after Gate 2 the draft has moved):
```bash
POST=content/blog/digital-vs-paper-notes.md
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE):' "$POST"
```

Expected output: zero hits. Every marker must be resolved in the live post before it ships. **Marker fixes land in the live `$POST` file, not in the archived draft.**

The 4 `[IMAGE:]` placeholders are replaced with real Markdown image syntax by Stage 4b.5 staging (every one of the 5 files exists on disk, so all 4 become real embeds rather than "Image pending" notes):

```markdown
![<alt text>](/blog-ops/assets/digital-vs-paper-notes/<filename>)
```

- [ ] All `[IMAGE:]` placeholders replaced with real Markdown image syntax and the path points to a file that exists in the asset folder
