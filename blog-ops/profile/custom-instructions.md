# Custom instructions — olgapak.com

Per-blog standing instructions, read at Step 0 of `/blog-post-workflow` and
honored by every stage and subagent. Precedence: the user's live instructions in
the conversation > this file > persona/standards defaults.

Keep this file small. Anything the plugin already does natively (Gutenberg
conversion, category resolution, auth probe-once, inbound links, trailing-slash
handling, Rank Math focus-keyword action item, PR completeness) lives in the
`wordpress-rest` adapter or `site-conventions.md` — do not restate it here.

## Content policy

- **Amazon affiliate links are HELD until the Associates program is live.** Do
  not emit live affiliate links. Where a post would naturally place one, leave a
  clearly marked placeholder (e.g. `[AFFILIATE-LINK-PENDING: <product>]`) and no
  live URL. Remove this instruction once the program is approved.

## Operational notes

- **"Restore the backup" banner:** after any REST update to a post that's open in
  the WP editor, the editor shows a stale "Restore the backup" banner. Tell the
  human to dismiss/reload — **NOT** restore (restoring reverts the synced draft).
