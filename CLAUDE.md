# CLAUDE.md — olgapak.com blog repo

Operating notes for Claude when working in this repository. This blog is set up
with the **blogsmith** plugin (`blog-ops/config.yaml`); write posts with
`/blog-post-workflow`.

## WordPress publishing — ALWAYS convert to Gutenberg blocks

This blog publishes to a live WordPress site (`olgapak.com`) via the
`wordpress-rest` adapter. That adapter's default posts raw HTML, which WordPress
renders as ONE broken "Classic" block. **Do not do that.** Every WP post must:

1. Be converted from the finalized markdown to **Gutenberg block markup** using
   `blog-ops/reference/md-to-gutenberg.py` (emits native paragraph/heading/list/
   image blocks + a Kadence Table-of-Contents block that auto-builds from H2/H3).
2. Follow the full recipe in **`blog-ops/reference/wordpress-publishing.md`**
   (credentials, media upload, tag resolution, create/update, draft status).

**WP auth-lockout caution (important):** Claude Code's Bash runs on the user's
Mac, so WP auth attempts count against the user's IP. Repeated failed
`wp-json` auth calls trip a login lockout (401 `rest_not_logged_in`) that blocks
even the correct credential and is EXTENDED by retrying. Probe auth **at most
once**; on failure, STOP and let the user clear it — never retry-hammer or
background-poll. (Password: env `WP_APP_PASSWORD` in `~/.zshrc`; user
`wpx_admin101`; never print the secret.)

After any REST update to an open post, the user's editor shows a stale
"Restore the backup" banner — tell them to dismiss/reload, NOT restore.

## Conventions

- Posts are created as WordPress **drafts** only; the human clicks Publish.
- Images follow the brand's illustrated style; see `blog-ops/profile/image-style.md`
  ("Observed conventions") and samples in `blog-ops/reference/image-samples/`.
- Amazon affiliate links are HELD until the Associates program is live; leave a
  marked placeholder, no live links.
- Well-structured reference WP post: id **1321**.
