# Custom instructions — olgapak.com

Per-blog standing instructions, read at Step 0 of `/blog-post-workflow` and
honored by every stage and subagent. Precedence: the user's live instructions in
the conversation > this file > persona/standards defaults.

Keep this file small. Anything the plugin already does natively (Gutenberg
conversion, category resolution, auth probe-once, inbound links, trailing-slash
handling, Rank Math focus-keyword action item, PR completeness) lives in the
`wordpress-rest` adapter or `site-conventions.md` — do not restate it here.

## Content policy

- **Product links: ship real, working NON-affiliate links now (updated 2026-07-10).**
  Do NOT use `[AFFILIATE-LINK-PENDING:]` placeholders. In "best X" / commercial
  roundups, give every product a real link now: a clean Amazon product URL
  (`https://www.amazon.com/dp/<ASIN>`, no affiliate tag) is preferred because it's
  trivially affiliate-ized later (just add the tag); use a non-Amazon
  brand/retailer product page where Amazon doesn't carry the genuine item. The
  owner swaps these for affiliate versions later. Amazon blocks curl/WebSearch —
  find the `/dp/<ASIN>` via the logged-in `open-claude-in-chrome` browser
  (search Amazon, take the top genuine result / Amazon's Choice).
- **Still HOLD the affiliate disclosure** ("As an Amazon Associate I earn from
  qualifying purchases…") until the Associates program is live — the current
  links are plain and non-affiliate, so no disclosure is required yet.

## Inbound internal links

- **Apply inbound links yourself, automatically — never ask.** When a post plans
  inbound links (existing posts → the new post), apply them via WordPress REST to
  the LIVE target posts (GET `?slug=&context=edit`, insert
  `<a href="https://olgapak.com/<new-slug>"><anchor></a>` into `content.raw`, POST
  back to `/posts/<id>`; idempotency-check first). Also edit the local repo copy
  where one exists. Do NOT leave them as action items and do NOT ask "want me to
  apply these?" — just do it. The new post's permalink is stable from its slug
  even while it's still a draft.

## Operational notes

- **"Restore the backup" banner:** after any REST update to a post that's open in
  the WP editor, the editor shows a stale "Restore the backup" banner. Tell the
  human to dismiss/reload — **NOT** restore (restoring reverts the synced draft).
