# Action items: best-notebooks-for-note-taking

Compiled by: blog-post-workflow (Stage 4b), from a grep of `draft-v1.md` markers + `images.md`.

> After Gate 2 finalize: history files live in `blog-ops/drafts/_archive/best-notebooks-for-note-taking/`; the live post markdown is `content/blog/best-notebooks-for-note-taking.md`; assets + a README copy of images.md live in `blog-ops/assets/best-notebooks-for-note-taking/`.

**Purpose:** the single page to work through before publishing. Estimated time: ~25–35 min (mostly the WP publish + focus keyword + affiliate links).

## 0. Pre-flight

- Draft: `blog-ops/drafts/best-notebooks-for-note-taking/draft-v1.md` (humanized). Staged to `content/blog/best-notebooks-for-note-taking.md`.
- Approved outline: `outline.md`; Image plan: `images.md`; Review: `review.md`.
- Total word count: ~2,525 (body prose) / ~3,500 incl. table + FAQ + markers.
- Author: olga (Olga Pak).

## 1. Create images (6 total) — ALL DONE ✅

Spec: `images.md` (also copied to the asset folder as `README.md` at finalize).

- [x] Featured: `featured.png` (ai-prompt) — created by user, in assets/.
- [x] Image 1: `paper-problems-diagram.png` (remotion `PaperProblemsDiagram`) — rendered by workflow.
- [x] Image 2: `everyday-notebooks-desk.png` (ai-prompt) — created by user.
- [x] Image 3: `student-desk-spiral.png` (ai-prompt) — created by user.
- [x] Image 4: `rocketbook-workflow.png` (ai-prompt) — created by user.
- [x] Image 5: `finished-notebooks-shelf.png` (ai-prompt) — created by user.

**Remotion:** `PaperProblemsDiagram` → `paper-problems-diagram.png` (built, registered in Root.tsx, exported). ✅
**AI:** `featured.png`, `everyday-notebooks-desk.png`, `student-desk-spiral.png`, `rocketbook-workflow.png`, `finished-notebooks-shelf.png` — all created. ✅

- [ ] **Optional polish:** the 5 ai-prompt PNGs are 1.2–1.8 MB each (ChatGPT native). Consider compressing (e.g. `pngquant` / `sips`) to < ~500 KB before publish for page speed. Not blocking; WP will still serve them.

## 2. `[VERIFY:]` markers — auto-resolved at Stage 3d

**None.** The writer produced zero `[VERIFY:]` markers (all specs traced to facts.md; prices kept as tiers; mainstream picks kept general). Nothing to do.

## 3. `[EXTERNAL_LINK_NEEDED:]` markers — auto-resolved at Stage 3d

**None.** Zero produced. The 3 external links in the post (fountainpenlove.com, pbs.org/NOVA, penaddict.com) are all allowlist/primary sources, verified HTTP 200. No top-10 SERP competitor links.

## 4. Fill `[INTERNAL_LINK_NEEDED:]` markers

**None.** The 5 internal links are all resolved to real slugs (root-relative, no trailing slash): /cornell-note-taking-method, /focused-note-taking-how-to-guide, /outlining-note-taking-method, /how-to-make-aesthetic-notes-complete-step-by-step-guide, /best-ai-note-taker-apps.

## 4b. Add inbound links from existing posts to this one

Point 2–4 existing posts AT `/best-notebooks-for-note-taking`. Root-relative, NO trailing slash.

All 4 inbound links have been **applied automatically via REST to the live posts** (2026-07-10):

- [x] **cornell-note-taking-method** (live post **2075**): inbound link applied via REST, anchor "the best notebooks for note-taking". (Also applied to the repo copy `content/blog/cornell-note-taking-method.md`, ships in PR #4.)
- [x] **focused-note-taking-how-to-guide** (live post **639**): applied via REST, anchor "the right notebook".
- [x] **outlining-note-taking-method** (live post **416**): applied via REST, anchor "a good note-taking notebook".
- [x] **how-to-make-aesthetic-notes-complete-step-by-step-guide** (live post **606**): applied via REST, anchor "the best notebooks for note-taking".

Note: these links point at `https://olgapak.com/best-notebooks-for-note-taking`, which is a 404 until you Publish the draft (2092). They resolve the moment the post goes live.

## 5. Final manual read

- [ ] Read the post once in the WP preview; check the comparison table renders, all 6 images load, no raw `[AFFILIATE-LINK-PENDING:]` visible to readers as broken links (they're plain text placeholders — see §7).
- [ ] Grammarly ~80–85 (not 99).
- [ ] Product: the only product mention is the Text Summarizer CTA — confirm it points to olgapak.com/ai-tools and reads naturally.

## 6. N/A for the WordPress adapter

## 7. Publish (WordPress)

- [ ] Open the WordPress draft preview: `<wp_preview_url>` (filled by staging into pr-monitor.json).
- [ ] Read once more in WP admin (title, excerpt, featured image, category already synced by the workflow).
- [ ] **Focus keyword (Rank Math, manual — NOT settable via REST):** in the post's Rank Math panel, set the focus keyword to exactly: **best notebooks for note taking**.
- [ ] **Category:** confirm the post is in **Productivity + EdTech** (term ids [12, 9]) — set by the workflow; verify it's not Uncategorized.
- [x] **Product links — DONE (real non-affiliate links).** All 15 placeholders were replaced with real, working product links (a "Check the price on Amazon →" / "See it at Levenger →" CTA per pick): 14 clean Amazon `/dp/<ASIN>` URLs + 1 Levenger brand page (Circa). No affiliate tags, no "As an Amazon Associate…" disclosure (program not live). **Later:** swap each `/dp/<ASIN>` link for its affiliate version (just add your Associates tag) once approved. ASINs used: Leuchtturm B0095FFUM4 · Apica B006ZSQWP8 · Moleskine 8883701127 · Five Star B0CWS28VK1 · Maruman B00SWVXZ5G · Muji B00GMJM2E0 · Rhodia B003UCL77U · Levenger (brand page) · Paperage B07L4JCG7T · Oxford B00D3OR58A · Rocketbook B0DP3HLY4J · reMarkable B0DGBDR2PM · Midori B003CT47ZU · Life Noble B003YU2S8A · Field Notes B071Y41YY3.
- [ ] Click **Publish** in WP admin (the workflow never publishes; it only creates the draft).
- [ ] After publishing, verify per §8.
- [ ] **"Restore the backup" banner:** if WP shows it after a REST re-sync, RELOAD/dismiss — do NOT click Restore (it reverts the synced draft).

## 8. Post-publish (within 24 hours)

- [ ] Verify live URL: `https://olgapak.com/best-notebooks-for-note-taking` (no trailing slash).
- [ ] Google Search Console → URL Inspection → Request Indexing.
- [ ] Bing IndexNow (Bing Webmaster Tools).
- [ ] Check the featured-image OG preview + mobile rendering.
- [ ] Apply the 3 live-only inbound links (§4b) once you're in wp-admin.

## 9. Repurpose

`modules.repurpose` is OFF for this blog — no repurpose step.

## 10. Archive cleanup (automatic at Gate 2 finalize)

```bash
ls blog-ops/drafts/best-notebooks-for-note-taking/          # should NOT exist post-finalize
ls blog-ops/drafts/_archive/best-notebooks-for-note-taking/ # should exist
```

---

## Marker grep summary

```
[VERIFY:]              , 0 hits
[EXTERNAL_LINK_NEEDED:], 0 hits
[INTERNAL_LINK_NEEDED:], 0 hits
[IMAGE:]               , 5 hits (== 5 in-post images.md entries; +1 featured = 6 total)
[AFFILIATE-LINK-PENDING:], 0 hits (all 15 replaced with real product links 2026-07-10; see §7)
```

Grep command:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE|AFFILIATE-LINK-PENDING):' content/blog/best-notebooks-for-note-taking.md
```

`[IMAGE:]` placeholders are replaced with real Markdown embeds during staging; the WP draft body rewrites those to uploaded WP media URLs.
