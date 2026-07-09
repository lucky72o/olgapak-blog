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

- [x] **cornell-note-taking-method** (LOCAL): inbound link applied to `content/blog/cornell-note-taking-method.md` in the repo (ships in this PR). **Also hand-apply to the LIVE WP cornell post** in wp-admin (v1 can't auto-sync existing posts unless `apply_inbound_links_live` fires at publish). Anchor: "the best notebooks for note-taking".
- [ ] **focused-note-taking-how-to-guide** (LIVE-ONLY, not local markdown): hand-apply in wp-admin. Fetch → insert anchor "the right notebook" → PATCH:
  ```bash
  WP_USER="wpx_admin101"; WP_BASE="https://olgapak.com"
  curl -sf -u "$WP_USER:${WP_APP_PASSWORD}" "$WP_BASE/wp-json/wp/v2/posts?slug=focused-note-taking-how-to-guide&context=edit&_fields=id,content"
  # insert <a href="https://olgapak.com/best-notebooks-for-note-taking">the right notebook</a> in the tools/supplies context, then:
  curl -sf -u "$WP_USER:${WP_APP_PASSWORD}" -X POST -H 'Content-Type: application/json' "$WP_BASE/wp-json/wp/v2/posts/<id>" -d @<(jq -n --arg c "<edited content.raw>" '{content:$c}')
  ```
- [ ] **outlining-note-taking-method** (LIVE-ONLY): same procedure, anchor "a good note-taking notebook".
- [ ] **how-to-make-aesthetic-notes-complete-step-by-step-guide** (LIVE-ONLY): same procedure, anchor "the best notebooks for note-taking" (a current top-8 ranker — high-value link source).

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
- [ ] **⚠️ AFFILIATE LINKS (15) — HELD until the Amazon Associates program is live.** The post contains 15 `[AFFILIATE-LINK-PENDING: <product>]` plain-text placeholders (one per notebook). Before publishing, EITHER (a) if the Associates program is live: replace each with a real affiliate link + add the "As an Amazon Associate I earn from qualifying purchases…" disclosure above the fold; OR (b) if not live yet: remove/neutralize the placeholders so readers don't see them (e.g. delete the placeholder text, leaving the product name), and publish WITHOUT the affiliate disclosure. Do NOT publish live affiliate links or the disclosure until the program is approved. Placeholder locations (draft line → product):
  - L77 Leuchtturm1917 · L81 Apica Premium CD · L85 Moleskine Classic · L95 Mead Five Star · L99 Maruman Mnemosyne N194A · L103 Muji · L111 Rhodia dotPad · L115 Levenger Circa · L123 Paperage · L127 Oxford · L137 Rocketbook Core · L141 reMarkable Paper Pro · L151 Midori MD · L155 Life Noble Note B6 · L159 Field Notes 3-Pack
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
[AFFILIATE-LINK-PENDING:], 15 hits (held; see §7)
```

Grep command:
```bash
grep -nE '\[(VERIFY|EXTERNAL_LINK_NEEDED|INTERNAL_LINK_NEEDED|IMAGE|AFFILIATE-LINK-PENDING):' content/blog/best-notebooks-for-note-taking.md
```

`[IMAGE:]` placeholders are replaced with real Markdown embeds during staging; the WP draft body rewrites those to uploaded WP media URLs.
