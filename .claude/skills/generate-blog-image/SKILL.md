---
name: generate-blog-image
description: Generate an AI illustration for an olgapak.com blog post using codex's built-in image model (gpt-image), and save the PNG into the post's asset folder. Use whenever a post's images.md has an `ai-prompt` slot that needs a real image file — the featured hero or an in-post concept illustration — e.g. at Stage 4a.5 of the blog-post-workflow, or when a human asks to "generate the images / featured image" for a post. Produces a real file; does NOT require OPENAI_API_KEY (codex authenticates itself).
---

# generate-blog-image (codex / gpt-image)

Generate a blog illustration by handing the image brief to **codex's built-in imagegen skill**. This is the sanctioned way to produce `ai-prompt` image slots for olgapak.com without a human pasting prompts into a web UI. It does **not** publish anything — it only writes an image file.

## When to use

- A post's `images.md` has an `ai-prompt` slot (featured hero, or an in-post concept scene) that needs a real PNG on disk.
- Someone asks to "generate the featured image" / "make the images" for a post.

Not for `remotion` slots (those render from a React composition — see `adapters/images/remotion.md`) or `screenshot` slots (captured by hand).

## Inputs

1. **The prompt** — copy the `Prompt:` block from the slot's `#### If ai-prompt` entry in the post's `images.md`, verbatim. It already carries the house style (flat-vector, warm palette, brand blue `#2B6CB0` as accent), the `olgapak.com` wordmark instruction, and any baked-in title text.
2. **Output path** — `blog-ops/assets/<slug>/<suggested-filename>.png` (the `Suggested filename` from images.md).
3. **Size** — `1536x1024` (3:2) is the house default for featured + concept illustrations. Portrait/square only if the slot's aspect ratio says so.

## The command (proven pattern)

Run codex non-interactively, letting it use its own image model. **Give it the raw image brief plus a save instruction — nothing more.**

```bash
codex exec --sandbox workspace-write --add-dir ~/Downloads - <<'EOF'
<paste the images.md Prompt block verbatim here>

Aspect ratio 3:2 (1536x1024). Please save the picture to the Downloads folder with the filename <suggested-filename>.png
EOF
```

Then move it into the asset folder and verify:

```bash
cp ~/Downloads/<suggested-filename>.png blog-ops/assets/<slug>/<suggested-filename>.png
file blog-ops/assets/<slug>/<suggested-filename>.png   # expect: PNG image data, 1536 x 1024
```

Finally, **Read the PNG** (view it) to sanity-check: correct concept, on-brand palette, `olgapak.com` wordmark present and spelled right, and — for a hero — the title text legible and correctly spelled. If it's off, re-run once with a tightened brief.

## Gotchas (learned the hard way, 2026-07-18)

- **Use `--sandbox workspace-write`.** The `--dangerously-bypass-approvals-and-sandbox` flag gets **blocked by Claude Code's auto-mode classifier** — don't use it. `workspace-write` lets codex write into the repo/worktree; `--add-dir ~/Downloads` lets it also write there.
- **Do NOT over-constrain the prompt.** If you tell codex to "call the OpenAI Images API using OPENAI_API_KEY, and print NO_IMAGE_CREDENTIALS if absent," it will dutifully check for the env var, find none, and bail. codex's **built-in imagegen skill authenticates via its own codex/ChatGPT login — no `OPENAI_API_KEY` needed.** Just give it the image brief + "save the picture to …". Let it pick the tool.
- **Modern gpt-image renders described text reliably.** Bake the post title and the `olgapak.com` wordmark straight into the prompt (as images.md already does). The old "title will garble, overlay it in Canva" caveat no longer applies — verify the render, but expect clean text.
- **It takes 1–3 minutes.** Use a long Bash timeout (e.g. 560000 ms). codex prints the saved path + dimensions when done.
- **Filename:** codex sometimes names the file itself. Tell it the exact `<suggested-filename>.png` in the save instruction; if it still uses its own name, grab the newest PNG in `~/Downloads` (`ls -t ~/Downloads/*.png | head -1`) and move it.
- **One slot per run** is most reliable. For a post with N `ai-prompt` slots, loop this once per slot.
- codex may add the wordmark via an ImageMagick overlay if the model omits it — that's expected and fine.

## What this skill does NOT do

- Does not publish, upload to WordPress, or touch a post's status. Image files only.
- Does not create `remotion` or `screenshot` slots.
- Does not decide the prompt — the prompt is authored by the image-planner in `images.md`; this skill just executes it.
