# Outline: digital detox plan

Written by: blog-editor (Stage 2).
Sources: `blog-ops/drafts/digital-detox-plan/plan.md` (approved at Stage 1c.5), `facts.md`, `standards/blog-craft.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/product.md`.
Read by: blog-writer (Phase 3) during drafting; blog-reviewer at Stage 3b for structural alignment checks.

**Purpose:** the structural blueprint produced at the end of Stage 2 by the editor's editorial judgment (no human gate). It locks every H2/H3, the intro shape, the FAQ set, and the external link plan. Writer may adjust phrasing but not structure.

## Status

approved

## Final title

`Digital Detox Plan: 7 Days to Reset Your Screen Time`

(52 chars. Source: `plan.md` "Recommended title".)

## Final slug

`digital-detox-plan`

## Final meta description

`A 7-day digital detox plan that ramps instead of going cold turkey: one change a day, what to do when you slip, and how to keep it after day 7.`

(142 chars. Note the em-dash from `plan.md` has been replaced with a colon — em-dashes are banned in this blog's output.)

## Author voice

olga

## Word count target

1,500–2,500 words (how_to per the `blog-craft.md` post-type matrix).

## Intent

how_to

## Category

`Productivity`

(Per `site-conventions.md` §Categories the "Digital wellbeing" pillar row is still marked "human to confirm"; Productivity is the only confirmed fit and is what the post ships under. Flagged in Open questions.)

## Frontmatter (per `adapters/publish/frontmatter/wordpress.md`)

- `title`: exactly the Final title above
- `excerpt`: exactly the Final meta description above
- `authors`: `- Olga Pak`
- `tags` (2–4, from the live taxonomy in `blog.md` — do NOT invent new ones): `productivity`, `time management`, `digital tools for productivity`
- `draft: true`
- No `cover` / `heroImage` field (the featured image ships as a WP media upload, not a frontmatter path)

---

## Intro structure (4 paragraphs max)

### P1, Hook

- Hook sentence (draft): open on the honest, non-shaming version of the problem — the reader has already tried putting the phone down and it lasted about a day, which is why a **digital detox plan** beats willpower. Target keyword appears here.
- Fact anchor: about **37.1%** of people worldwide show problematic smartphone use (109 studies, 97,748 people), source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ — used as "you are not unusual", never as a diagnosis or a scare stat.
- 1–2 sentences. No shame framing.

### P2, Expertise statement

- Expertise sentence (draft): one sentence in Olga's voice — she works on a screen all day and builds AI tools for a living, so this is not a post telling anyone to quit screens; it is what worked when she needed her attention back. Draws on `voice.md` §Credibility message. No product name here.

### P3, Intro internal links (≤2, contextual)

| Anchor text | Target slug | Placement |
|---|---|---|
| how to stop doomscrolling | how-to-stop-doomscrolling | intro |

One link only, woven into a sentence (e.g. this plan is the structured week; the trigger-level fixes live in the doomscrolling post). No "see also" stack. Root-relative, no trailing slash: `/how-to-stop-doomscrolling`.

### P4, Preview

- Preview sentence (draft): this guide covers the baseline to take before day 1, the seven daily steps, what to do when you slip, and the rules that keep it going after day 7.

---

## Body sections

### H2 1: `What a digital detox plan actually is (and why cold turkey backfires)`

- Defines the term plainly for a beginner: a digital detox plan is a short, structured reduction in screen use with a defined start, a defined end, and one change at a time — not deleting every app and hoping.
- Names the failure mode up front: the all-or-nothing week that collapses by Wednesday, after which the reader concludes they failed rather than that the plan was badly designed.
- Key fact to cite: Tanya Goodin's published week-long ramp, "Going cold turkey is daunting, so the week eases you in gently," source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox — outside validation that ramping is the sound approach.
- Second fact available: the term is informal enough that PubMed had no MeSH heading for "digital detox" as of December 2024, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ — use only if it fits naturally; it is a nice honesty beat, not a requirement.
- One concrete number required (the 37.1% from the intro counts if not repeated here — prefer the Goodin quote as this section's anchor).
- Approximate word count: 250

### H2 2: `Before day 1: get your baseline number`

- The step almost every guide skips: check the actual screen-time figure and the actual pickup count before changing anything, so day 8 has something to compare against.
- Concrete instructions for both platforms, each linked to the official doc: iOS Screen Time and Android Digital Wellbeing.
- Second half of the step: write down one sentence on what the reader wants the extra time to feel like (calmer, more rested, or getting a specific thing done). This is lifted from the audience's own reframe and is what §6 later pays off.
- Key facts to cite: how to check Screen Time on iPhone, source: https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios ; how to check Digital Wellbeing on Android, source: https://support.google.com/android/answer/9346420
- Include a concrete number: name a realistic baseline range readers see, or use the Guardian participant's starting numbers (4h06m/day, 57 pickups), source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
- Approximate word count: 200

### H2 3: `The 7-day digital detox plan`

- The spine of the post. One H3 per day. Each day: **the change**, **why this one now** (each builds on the last), and **the smaller version** if the reader's day is already too full. Every day's action is doable in under ten minutes of setup.
- Structural rule for the writer: these are Olga's own steps, in her own words and her own order. Goodin's Guardian ramp is cited once in §1 as precedent and must not be paraphrased day-for-day here.
- Key fact anchoring the section: a real before/after from a week-long run — 4h06m/day and 57 pickups down to 3h00m and 17 pickups, source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox — framed honestly as better, not transformed.
- Approximate word count: 700 (≈100 per day)

#### H3 3.1: `Day 1: The phone sleeps outside the bedroom`

- The single highest-leverage change and the easiest to start on: a charger somewhere that isn't arm's reach of the bed.
- Smaller version: across the room, still in the bedroom.
- Why first: it fixes the two worst windows (last thing at night, first thing in the morning) without touching the reader's working day.

#### H3 3.2: `Day 2: Turn off every notification that isn't a person`

- Keep messages and calls from actual humans. Kill everything an app sends to win attention back.
- Smaller version: just the top three worst offenders from yesterday's Screen Time list.
- Fact hook available: the association between not using built-in limit features and problematic use, source: https://pubmed.ncbi.nlm.nih.gov/32354288/ — ⚠️ marked `needs_verification` in `facts.md`; if the writer uses it, it must be scoped to an association, never causation, and Stage 3d confirms it.

#### H3 3.3: `Day 3: Make the phone boring on purpose`

- Grayscale, a home screen stripped to tools (no feed apps on page one), search-to-open instead of tap-to-open.
- Explicit warning, drawn from real pushback: **buying a "boring" phone is not a plan**. A capable phone stays capable; one commenter who bought a smaller phone specifically to detox reported still watching short videos and playing games on it within a week. The change has to be the configuration and the habit, not the hardware.
- Smaller version: grayscale on a schedule (evenings only).

#### H3 3.4: `Day 4: One phone-free block, with something waiting in it`

- A meal, a walk, or a commute with the phone left behind — and a decided-in-advance replacement, because an empty block gets filled by the phone.
- Internal link: `/things-to-do-instead-of-being-on-your-phone` as the replacement-activity bank.
- Smaller version: 20 minutes, phone in another room.

#### H3 3.5: `Day 5: One protected focus block`

- Airplane mode or Do Not Disturb for one block of real work or study, with a start and an end.
- Internal link: `/what-is-timeboxing` — the mechanism behind giving the block a fixed edge, plus a natural spot for Olga's own timeboxing anecdote (one line, per `voice.md` §Personal-anecdote bank).
- Smaller version: 25 minutes.

#### H3 3.6: `Day 6: A half-day offline`

- Half a day with the phone off or parked, chosen where it costs least (a weekend morning for most people).
- Allowances stated explicitly: keep the phone reachable if someone depends on you being reachable; caregiving and on-call work are real, and the plan bends for them rather than breaking.
- Smaller version: two hours.

#### H3 3.7: `Day 7: The full offline stretch, then look at the number`

- One continuous offline stretch (an evening through the next morning is the realistic version for most readers), then re-check the baseline from §2 and write down what actually changed.
- Sets up §5: the number is not the finish line, it is the starting point for what the reader keeps.

### H2 4: `What to do when you slip (because you will)`

- The section no competitor in the top 9 has. Slipping is the expected case, not the failure case: a lost evening to a feed is data about a trigger, not evidence the reader is weak.
- The recovery rule: name the cue, resume the same day's step rather than restarting the week, and never "make up" a missed day by doubling the next one.
- Grounded in the real pattern from voice-of-customer research: cravings are worst early and fade with repetition — one detoxer described it taking about two weeks before the pull genuinely dropped off. Attribute in prose, no hyperlink (Reddit is not allowlist-class).
- Internal link: `/productive-things-to-do-on-your-phone-instead-of-scrolling` for readers whose phone has to stay in hand for work or caregiving.
- Concrete number requirement satisfied by the "about two weeks" pattern.
- Approximate word count: 200

### H2 5: `Day 8 and beyond: the rules that keep it`

- Answers the question the whole genre drops: the plan is worthless if screen time snaps back the moment the week ends.
- Three keep-it rules, all deliberately low-effort: keep the single change that cost the least and gave the most (usually Day 1), pick one recurring offline slot rather than an elaborate system, and re-check the baseline number monthly rather than daily.
- Evidence for going simple: the maintenance patterns people actually sustain are things like a standing no-phone day, while elaborate self-designed cycles draw immediate "that doesn't work with a normal job" pushback. Attribute in prose, no link.
- Second supporting point: even a three-month, no-smartphone detox ended in a deliberate return "with strict boundaries," not permanent abstinence — the endpoint is a boundary, not a monastery. Attribute in prose, no link.
- Internal link: `/how-to-plan-your-week` — where the recovered attention goes once the week is over.
- Approximate word count: 250

### H2 6: `Does a digital detox actually work? An honest answer`

- Placed here on purpose: the reader has the plan, so the honesty reads as credibility rather than hedging.
- What the research supports and what it doesn't: an NIH scoping review found detox interventions may help with depression and problematic internet use, with people who start with more severe symptoms benefiting most, while effects on broader life satisfaction and wellbeing remain variable. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
- The evidence-quality caveat, stated plainly: only around 30% of studies in this area were rated high quality, and the review itself covered 14 studies. Same source. This is the "I am not going to oversell this" beat.
- Optional supporting study (⚠️ `needs_verification` in `facts.md`, confirm at Stage 3d or cut): a small 2021 study of 68 students found a social media detox improved mood, sleep, and anxiety, source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/ — must be described as small.
- Answers the strongest real objection head-on: a detox does not manufacture ambition. What it reliably does is remove an easy escape, which is why §2's "what do you want the extra time to feel like" sentence matters. Attribute the reframe in prose, no link.
- No hustle framing anywhere in this section (`audience.md` §Language to avoid).
- Approximate word count: 250

---

## Closing CTA

- CTA angle: some screen time is just work that has to happen, so the honest next step is not "use your phone less" but "spend less of that time on the mundane parts." One soft line to Olga's free AI tools page with an action anchor (hook per `blog.md`: "Try my free AI tools to automate the mundane"), naming the Text Summarizer as the example that fits a post about reclaiming attention.
- ≤2 short paragraphs. No feature re-list. No prices (the tools are free and there is no pricing page). Sits immediately before `## FAQ`; nothing follows the FAQ.
- Approximate word count: 100

---

## FAQ block

- Q: `How long should a digital detox be?` → A direction: a week is enough to reset the structure and see a number change; the research-backed honest note is that cravings take longer than that to fade, which is what the day-8 rules are for.
- Q: `Do I have to give up my phone completely?` → A direction: no, and the version that requires it is the version that collapses; the plan reduces and re-times use rather than banning it, with explicit allowances for work and caregiving.
- Q: `What if I slip in the middle of the week?` → A direction: resume that same day's step rather than restarting; a slip identifies a trigger and costs nothing if it isn't treated as failure.
- Q: `Does a digital detox actually improve focus or productivity?` → A direction: the evidence is mixed and honest about it; a detox removes an easy escape rather than creating motivation, so what the reader does with the reclaimed time is still their call.
- Q: `Will buying a simpler phone fix this?` → A direction: usually not on its own — a capable phone stays capable, so the configuration and the habit are what change the outcome.

---

## Inbound internal links (existing posts → this post)

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| how-to-stop-doomscrolling | In the section on breaking the scroll loop / building longer-term habits — the natural sentence is that the trigger fixes work best inside a structured week | digital detox plan |
| things-to-do-instead-of-being-on-your-phone | Near the intro or the framing paragraph, where the post explains why having alternatives matters — a structured week is what makes room for them | 7-day digital detox plan |
| productive-things-to-do-on-your-phone-instead-of-scrolling | Where the post acknowledges the phone has to stay in hand for some readers — a detox plan bends around that | digital detox plan |

All three are confirmed `published` (per `content-plan.md` / `product.md` §Existing posts). Root-relative, no trailing slash: `/digital-detox-plan`.

---

## External link plan

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source |
|---|---|---|---|
| about 37.1% of people worldwide show problematic smartphone use | https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ | authoritative_allowlist (NIH; in top-10 SERP but allowlist-class) | facts.md §Statistics row 1 |
| going cold turkey is daunting, so the week eases you in gently | https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox | authoritative_allowlist (major publication; in top-10 SERP but allowlist-class) | facts.md §Quotes row 1 |
| check your Screen Time on iPhone | https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios | authoritative_allowlist (official platform docs) | facts.md §Named examples row 3 |
| check Digital Wellbeing on Android | https://support.google.com/android/answer/9346420 | authoritative_allowlist (official platform docs) | facts.md §Named examples row 3 |
| effects on life satisfaction and overall wellbeing remain variable | https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ | authoritative_allowlist (NIH) | facts.md §Statistics rows 2–4 |
| a small 2021 study of 68 students found a social media detox improved mood, sleep, and anxiety | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/ | authoritative_allowlist (NIH/PMC) | facts.md §Statistics row 5 (⚠️ needs_verification — confirm at Stage 3d or cut) |

Target: 3–5 distinct external URLs (the PMC scoping review is cited twice but counts once). **Forbidden for this post:** health-in-mind.org.uk, lifeline.org.au, nuffieldhealth.com, everydayhealth.com, and the reddit.com thread at rank 8 — all top-10 ranking competitors. Reddit quotes are attributed in prose with no hyperlink. The first link in the body must be internal, not external.

---

## Image placement plan (high-level)

- **Featured (frontmatter cover, not an in-post slot):** hand-lettered title over a friendly flat-vector scene — a person setting a phone face-down and reaching for something offline, single bright saturated background, recurring female character, `olgapak.com` watermark. Type: `ai-prompt` (per `images.featured_default` and `custom-instructions.md`, the featured slot is always `ai-prompt`).
- **After H2 3 heading + first paragraph:** the seven-day ramp as a stepped diagram, Day 1 → Day 7, each step labelled with its one change. Type: `remotion` (a genuine diagram, the only use this blog reserves Remotion for).
- **After H3 3.4 (Day 4) + first paragraph:** a warm scene of the phone-free block — a table, a walk, natural wood and warm light, phone left behind, brand blue as an accent only. Type: `ai-prompt`.
- **After H2 4 heading + first paragraph:** the slip-recovery moment — someone catching themselves mid-scroll and setting the phone down without drama, warm and non-judgmental. Type: `ai-prompt`.
- **After H2 5 heading + first paragraph:** the maintenance scene — a standing phone-free day, calm and ordinary. Type: `ai-prompt`.

4 in-post slots + 1 featured, matching `blog-craft.md` §Image count (1 featured + 3–5 in-post). Per `image-style.md`: vary background hue across the post, favor warm scenes, brand blue never dominant.

---

## Word count roll-up

- Intro: ~200 words
- Body sections total: 250 + 200 + 700 + 200 + 250 + 250 = **1,850**
- Outro / CTA: ~100 words
- **Total estimate (body prose, no FAQ): ~2,150** vs plan target 1,500–2,500 ✅
- FAQ: ~150 words (not part of the gated total)

---

## Open questions (recorded, no longer block on a human gate)

- [ ] Category: `site-conventions.md` maps the "Digital wellbeing / beating phone distraction" pillar to **Productivity** but marks that row "human to confirm". The post ships as Productivity; if a dedicated wellbeing category is wanted, that's a one-field change at publish.
- [ ] Three statistics in `facts.md` are ⚠️ `needs_verification` because they reached us through a competitor's citation chain (the 68-student study, the 80-participant Instagram study, the screen-time-limit-features association). Only the first is planned into the outline, as optional support in §6. Stage 3d confirms it at the NIH URL or the claim gets cut.

---

## Changes requested by human (log)

(none)
