# Brief: how-to-stop-doomscrolling

Written by: blog-editor (Stage 0 intake).
Sourced from: Q3 2026 content calendar (post #2, Cluster B) + operator directive to run the full workflow autonomously and publish on finish.
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

how to stop doomscrolling

Secondary keywords: doomscrolling meaning, how to stop scrolling, why do I doomscroll

## Category

Productivity (WP term id 12) — Cluster B (Digital wellbeing / beating phone distraction) maps to "Productivity" per `{profile_dir}/site-conventions.md` §Categories per-cluster table. No dedicated "Digital Wellbeing" category is confirmed live; using the mapped default.

## Intent

problem_solution

(Observed shape: a named problem — doomscrolling — plus a numbered list of science-backed strategies to solve it. Confirm against live SERP at Stage 1a; if the SERP is dominated by pure how-to step lists, treat as how_to.)

## Audience emphasis

Primary: students, early-career professionals, and aspiring creators who lose focus to the phone / endless scrolling (audience.md pain point #2 — the direct hit) and feel stretched thin (pain point #1). Secondary audience also lands here searching the exact technique. Beginner-friendly, warm, non-judgmental — readers feel guilty about the habit, so avoid shaming.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on; doomscrolling has rich lived-experience discussion — strong VOC + counterpoint source)
- x: yes (`modules.x_research` on; good for sharp takes / mental-health angle)

## Author voice

olga

Reasoning: single-author blog — `author_voice` is fixed to Olga per `{profile_dir}/authors.md`. Her warm, first-person, lightly self-deprecating voice fits a habit readers feel guilty about ("I've caught myself 40 minutes deep at 1am too").

## What the human wants to convey

- This opens Cluster B (Digital Wellbeing) — the proven-ranker cluster that currently has zero live posts. It seeds the runway to the August wellness-gear money posts (#8 digital detox, #12 reduce screen time, #29 alarm clocks, #33 phone lockbox).
- Angle: practical + science-backed, NOT preachy. Readers already know scrolling is bad; give them tactics that actually work, grounded in why the brain does this (dopamine loops, negativity bias, variable rewards).
- 12 strategies, each concrete and same-day actionable. Mix environment/design tactics (grayscale, app limits, friction), mindset tactics (urge-surfing, replacement habits), and routine tactics (phone-free mornings/bedtime).
- Warm, non-shaming, first-person. Olga has struggled with this too.
- Soft CTA to Olga's free AI tools near the end (reclaim the time you get back).

## Product features to mention

- Free AI tools (the primary CTA target) — mention softly near the end, framed as "here's a good use of the attention you reclaim." Text Summarizer is the closest topical fit (turn long reading into short reading = less time staring at a screen), but keep it light; this is not a product post.

## Soon-to-ship features (do NOT flag as gaps)

- None.

## First-party data points to include

- None citable. `product.md` first-party data is `hypothetical` only (no usage analytics yet). Do NOT invent tool usage numbers.

## Avoid list

- No hustle-culture / "just have more willpower" shaming.
- No overhyped "this one trick fixes everything" framing.
- No hard product sell — free AI tools stay a soft, end-of-post next step.
- No affiliate links / no affiliate disclosure yet (Associates program not live; per custom-instructions.md).
- No hard-coded product prices.

## Founder anecdote / story

Optional: Olga catching herself deep in a late-night scroll despite "just checking one thing," or reclaiming that time for learning/side-project work after applying friction tactics. Fits the voice.md personal-anecdote bank (timeboxing to beat Parkinson's Law is an adjacent, reusable hook).

## Internal link targets

Existing LIVE olgapak.com posts (back-catalogue; not in local repo — link root-relative, NO trailing slash):
- `/things-to-do-instead-of-being-on-your-phone` — 75 Awesome Things to Do Instead of Being on Your Phone (current top-8 ranker; the natural "replacement activities" link)
- `/productive-things-to-do-on-your-phone-instead-of-scrolling` — 11 Productive Things to Do on Your Phone Instead of Scrolling
- `/how-to-stay-focused-on-goals` — 10 Proven Strategies on How to Stay Focused on Goals (focus/discipline angle)
- `/what-is-timeboxing` — What is Timeboxing and How it Works (structure-your-time replacement for scrolling gaps)

## Inbound internal links (existing posts → this new post)

Plan 2–4 existing LIVE posts to point at this new post (applied at Stage 4b.5 / finalize; live-REST per `apply_inbound_links_live: true` + custom-instructions.md):
- `things-to-do-instead-of-being-on-your-phone` → link "how to stop doomscrolling" to this post
- `productive-things-to-do-on-your-phone-instead-of-scrolling` → link to this post

## Source URLs for researcher to study

None specified — let the researcher find its own from SERP/Reddit/X.

## Other notes

- Operator directive: run the full workflow autonomously in this worktree and, on finish, PUBLISH the WordPress post (set status to `publish`) — this overrides the wordpress-rest adapter default of stopping at `draft`. This is the user's explicit, durable authorization for the outward-facing publish action.
- Gate 2 mode resolved to the async PR path (git remote + gh both work; recorded in checklist Notes).

---

## Metadata

- Created by: blog-editor
- Created at: 2026-07-18 13:27
- Human operator: slav (gurmanov.slava@gmail.com)
