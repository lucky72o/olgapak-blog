# Brief: best-blue-light-glasses

Written by: blog-editor (Stage 0 intake, autopilot / headless).
Sourced from: `blog-ops/content-plan.md` row #15 (no human conversation — see `## Autopilot assumptions`).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

best blue light glasses

Secondary keywords: best blue light glasses for students, blue light blocking glasses, blue light glasses for computer use, do blue light glasses work, best blue light glasses 2026

## Category

Productivity (WP term id 12) — digital wellbeing / screen-time pillar per `blog-ops/profile/site-conventions.md` §Categories.

## Intent

transactional

## Audience emphasis

Primary: students and early-career professionals who spend 8+ hours a day on screens — lectures on a laptop, notes on a tablet, evenings on a phone — and end the day with tired, gritty eyes and trouble winding down. Secondary: knowledge workers who searched a buying query and want a shortlist plus a straight answer on whether these glasses actually do anything. Pain point #3 (tool overwhelm — is this worth buying or is it hype?) is the emotional anchor; pain point #2 (screens eating focus and evenings) is the context.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on — r/optometry, r/glasses, r/college and student subs carry blunt voice-of-customer detail on tint, fit, price and whether people felt any difference)
- x: yes (`modules.x_research` on — quick takes, plus the recurring "blue light glasses are a scam" counterpoint the post has to answer honestly)

## What the human wants to convey

(Derived from the content-plan row's angle: "COMMERCIAL roundup: Best Blue Light Glasses for Students (2026)". Everything below is the editor's reading of that row plus the profile docs, not stated human input.)

- **Lead with honesty about the evidence, then help them buy well.** The strongest independent research (Cochrane's 2023 review of blue-light-filtering lenses) found no reliable benefit for eye strain, and eye-care bodies are cautious about the claims. A post that opens with "these cure eye strain!" would be both wrong and off-voice. The honest framing: eye strain is mostly about screen habits, blinking and breaks — glasses are a comfort purchase, and some people genuinely like wearing them. Say that, then help the reader pick a good pair for the reasons that hold up (comfort, fit, anti-reflective coating, low colour distortion, price).
- This is still a buying-decision post: the reader wants a shortlist with a reason for each pick, not a literature review. The evidence section is a short, honest gate near the top, not the whole post.
- Organise picks around real student jobs: cheap first pair, all-day lecture wear, prescription and clip-on options, evening/amber pair for night study, style-forward picks, screen-glare-focused picks with good anti-reflective coating.
- Explain the plain-language mechanics on first use: blue light vs blue-blocking percentage, clear vs amber/yellow tint, anti-reflective coating, colour distortion, "circadian" evening claims vs daytime eye-strain claims (these are two different claims with very different evidence).
- Pair the buying advice with the habit advice that actually works — 20-20-20, screen brightness, night mode, screen-time limits. Natural internal links to the screen-time cluster.
- Honest limitations belong in the post: no lens fixes a five-hour unblinking stare; amber lenses distort colour so they are bad for design work; cheap frames flex and break; "blocks 99% of blue light" marketing numbers are usually unverifiable.

## Product features to mention

None. Olga's free AI tools are not eyewear; the product link belongs only in the closing CTA (per `blog-ops/profile/blog.md` §Primary CTA), framed as "spend less time staring at a screen doing the mundane" — never wedged into the product picks.

## Soon-to-ship features (do NOT flag as gaps)

None.

## First-party data points to include

None marked `derivable` in `blog-ops/profile/product.md` applies to an eyewear roundup. Personal-usage framing ("the pair that lives on my desk") is voice, not a data claim, and must not be dressed up as a statistic.

## Avoid list

- **No medical claims.** Do not say blue light glasses prevent eye damage, macular degeneration, cure headaches, or fix eye strain. Do not tell readers to skip an eye exam. Where sleep is discussed, scope it to what the source actually supports and keep it modest.
- No `[AFFILIATE-LINK-PENDING:]` placeholders and no untagged Amazon URLs — every product gets a real, working Amazon link carrying the owner's US Associates tag (`https://www.amazon.com/dp/<ASIN>?tag=op01e-20`), or a brand/retailer product page where Amazon doesn't carry the genuine item, per `custom-instructions.md` §Content policy.
- No invented test data ("I wore each pair for 40 hours"), no fake lab measurements, no made-up blue-light-blocking percentages.
- No prices stated as fact — eyewear prices move constantly; use "budget / mid / premium" bands instead of dollar figures.
- No "this one pair changes everything" hype; no hustle-culture framing; no scare-mongering about screens damaging eyes.

## Founder anecdote / story

Optional and light: Olga's own long-screen days through a Master's in Marketing & Strategy and building her AI tools — the practical "what actually stopped my eyes feeling like sandpaper by 9pm" angle, honest that habits did more of the work than any lens. One short anecdote, not a memoir.

## Internal link targets

- `how-to-reduce-screen-time` — pillar; the habit half of the same problem (strongest pairing).
- `digital-detox-plan` — the structured reset for readers whose real issue is hours, not lenses.
- `how-to-stop-doomscrolling` — evening phone use is the sleep half of the blue-light question.
- `screen-free-hobbies` — what to do with the evening hours the glasses were meant to rescue.
- `how-to-take-notes-on-ipad` — tablet note-takers are squarely the audience for this post.

## Source URLs for researcher to study

None specified — the researcher works from the Stage 1a SERP selection. Note for Stage 1b/3d: the Cochrane review and eye-care professional bodies (AAO, College of Optometrists) are the primary/allowlist-class sources for the evidence section; commercial eyewear retailers ranking in the top 10 are not citable.

## Other notes

- Roundup size: the plan row does not name a count. Target 8–10 genuine picks organised by job; do not pad to hit a round number.
- Every product claim (lens tint, blocking claim, prescription availability, frame material) must trace to the manufacturer's own product page or a Stage 1b-cited source; unverifiable specifics get cut at Stage 3d rather than guessed.
- The post carries tagged Amazon links, so the standing affiliate disclosure is mandatory: an italic paragraph as the LAST paragraph of the intro, immediately before the first `##` (exact wording in `custom-instructions.md` §Content policy).
- Amazon blocks curl/WebSearch — `/dp/<ASIN>` links are found via the logged-in `open-claude-in-chrome` browser at the marker-resolution stage.

## Autopilot assumptions

- **No human intake conversation happened.** This brief was written from `blog-ops/content-plan.md` row #15 under `CONSOLE_RUN_STATE`; every field above is the editor's inference from that row plus the profile docs.
- **Author:** the content-plan Author cell is blank. `blog-ops/profile/authors.md` defines no §Selection rubric and lists exactly one author, so the fallback applies: `olga`.
- **Category:** taken from `site-conventions.md` §Categories per-cluster mapping (digital wellbeing pillar → Productivity), not human-confirmed.
- **Research sources:** both optional modules (`reddit_research`, `x_research`) are on in config and both add genuine value here — Reddit for real wearer experience, X for the "it's a scam" counterpoint the post must answer.
- **Intent:** `transactional` — the content-plan row labels it a COMMERCIAL roundup and the keyword is a "best X" buying query.
- **Evidence framing:** the editor decided the honest-evidence gate near the top of the post rather than a pure hype roundup. This is a judgment call made without the human, recorded here so it can be overridden at Gate 2.
- **Competitors module is off** in `blog-ops/config.yaml`, so no "Competitors to mention" table exists and Stage 1.5c is skipped by its own guard.

## Author voice

olga

Reasoning: single-author blog — `blog-ops/profile/authors.md` lists only `olga`, and the digital-wellbeing beat plus her first-person "tested, not theorized" framing is exactly what an honest blue-light roundup needs.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-09 12:46
- Human operator: slav (via operator console, headless)
