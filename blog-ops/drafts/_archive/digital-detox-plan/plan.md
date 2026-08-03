# Plan: digital detox plan

Written by: blog-editor (synthesis stage).
Sources: brief.md, research/serp.md, research/reddit.md, research/x.md, blog-ops/profile/product.md, facts.md.
Read by: plan-reviewer (Stage 1c.5), blog-editor (outline stage, Phase 2), blog-writer (Phase 3).

**Purpose:** the strategic document approved at Stage 1c.5 plan review. Once approved, it locks the angle, audience, and structure. Outline and drafting must follow this plan.

## Status

approved

## Intent

how_to

Reasoning: the SERP's dominant intent is informational with a strong how-to sub-intent (5 of 7 studied results are "how to do a digital detox" guides), and the reader searching "digital detox plan" wants a sequence to follow, not a definition — so the post is built as a dated, day-by-day procedure.

## Category

Productivity

## Audience emphasis

- **Primary:** students, early-career professionals, and aspiring bloggers/creators who feel stretched thin (per `audience.md`) — this is exactly the reader `research/serp.md` infers from the SERP mix (charity mental-health orgs, a workplace health org, a university student-life post all converging on the "stretched thin, self-aware, wants to change" reader).
- **Secondary:** busy knowledge workers who landed here for one specific way to cut screen time and don't identify with the productivity-blog world at all.

Reader knowledge level: beginner — every studied competitor assumes the reader has never structured a detox before.

## Author voice

olga — single-author blog; her anecdote bank (timeboxing to beat Parkinson's Law, building AI tools while working on a screen all day) makes her a credible narrator for "I am not telling you to quit screens."

## Product positioning emphasis

`discovery` — soft, single mention. The relevant tie-in is the **Text Summarizer** (cutting the time spent grinding through long text on a screen), introduced only in the closing CTA per `product.md` §Positioning recommendations. No feature list, no prices (there are none), no first-party data (the only entry is `hypothetical`).

## SERP shape match

mixed → executed as `how-to-numbered`

`research/serp.md` records the SERP shape as mixed (how-to guides + one scoping review + one narrative feature + one 30-day challenge). Crucially, **no competitor in the top 9 owns a true day-by-day plan**, and the word "plan" appears in zero competitor titles. The post therefore matches the how-to sub-intent that dominates the SERP while occupying the structural gap none of them fill.

## Title candidates (3 options)

1. `Digital Detox Plan: 7 Days to Reset Your Screen Time` — 52 chars, tone: plain and literal; keyword first, the number sets the commitment, "reset" carries the not-a-punishment framing.
2. `Digital Detox Plan: 7 Realistic Days Off Your Phone` — 51 chars, tone: leads with the differentiator ("realistic") as an implicit promise that this one won't collapse on Wednesday.
3. `Digital Detox Plan: 7 Days to Take Back Your Focus` — 50 chars, tone: benefit-led, aimed at the focus/attention pain point rather than the screen-time number.

## Recommended title

`Digital Detox Plan: 7 Days to Reset Your Screen Time`

Rationale: it puts the exact target keyword first, names the timeframe the whole post is built on, and "reset your screen time" matches the measurable thing the reader can actually check on their phone — while option 2's "realistic" is a claim the body has to earn and option 3 drifts toward the productivity framing this audience resents.

## Slug

`digital-detox-plan`

Validation: target keyword only, no year, no trigger words. Matches `content-plan.md` row 8, which is already the committed slug.

## Meta description (draft)

`A 7-day digital detox plan that ramps instead of going cold turkey — one change a day, what to do when you slip, and how to keep it after day 7.`

(142 chars.)

## Angle

Most detox advice is either a flat list of tactics with no order (Everyday Health's seven ways), a 30-day commitment most people won't start (Regis), or an unstructured "unplug for the weekend." This post is a **7-day ramp**: one small change per day, each one building on the last, ending in a genuinely offline stretch that feels achievable because six days of scaffolding came first. The two things it does that nobody in the SERP does: it tells you **what to do when you slip mid-week** (because the cold-turkey week that collapses by Wednesday is the actual failure mode), and it tells you **what day 8 looks like**, since a plan whose screen time snaps back the moment it ends was never a plan. It is also honest about the evidence — the research on digital detoxes is genuinely mixed, and a detox removes an easy escape rather than manufacturing ambition.

## Key sections (preview, becomes the outline in Phase 2)

1. What a digital detox plan actually is (and why cold turkey backfires)
2. Before day 1: get your baseline number
3. The 7-day digital detox plan (H3 per day: Day 1 → Day 7)
4. What to do when you slip (because you will)
5. Day 8 and beyond: the rules that keep it
6. Does a digital detox actually work? An honest answer
7. Closing CTA (immediately before the FAQ)
8. FAQ

## Product references planned

- **Intro expertise statement:** Olga's own credibility line — someone who works on a screen all day and built her own AI tools, so the post is explicitly not "quit screens." No product name in the intro.
- **Body mentions:** none. The body stays tool-agnostic; the only tools named in the steps are the phone's own built-in screen-time controls.
- **Conclusion CTA:** one soft line pointing to the free AI tools page (hook per `blog.md`: "Try my free AI tools to automate the mundane"), tied to the post's logic — if some screen time is unavoidable work, automate the mundane parts of it. Text Summarizer is the natural example. No feature re-list, no prices.

## Internal links planned

| Target slug | Anchor text (draft) | Where in the post |
|---|---|---|
| how-to-stop-doomscrolling | how to stop doomscrolling | intro (1 of the ≤2 intro links) |
| what-is-timeboxing | timeboxing | §3, Day 5 (the focus block) |
| things-to-do-instead-of-being-on-your-phone | things to do instead of being on your phone | §3, Day 4 (the replacement activity) |
| productive-things-to-do-on-your-phone-instead-of-scrolling | productive things to do on your phone | §4 (slip recovery / when the phone has to stay) |
| how-to-plan-your-week | plan your week | §5 (day 8 and beyond) |

All root-relative with **no** trailing slash (`blog.trailing_slash: false`, `route_prefix: /`), e.g. `/how-to-stop-doomscrolling`.

## External links planned

| Source | Claim it backs | URL |
|---|---|---|
| NIH / PMC scoping review | the evidence on digital detox is mixed; 37.1% pooled prevalence of problematic smartphone use | https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/ |
| The Guardian | a published 7-day detox ramp that explicitly rejects cold turkey (Tanya Goodin) | https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox |
| Apple Support | how to check Screen Time on iPhone (day-zero baseline step) | https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios |
| Google Support | how to check Digital Wellbeing on Android (day-zero baseline step) | https://support.google.com/android/answer/9346420 |
| NIH / PMC (2021 student study) | a small study in which a social media detox improved mood, sleep, and anxiety | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/ |

Forbidden for this post (ranking competitors, never link): health-in-mind.org.uk, lifeline.org.au, nuffieldhealth.com, everydayhealth.com, and the reddit.com thread at rank 8. Reddit quotes are attributed in prose without a hyperlink.

## Facts / data to feature prominently

- The evidence is genuinely mixed: the NIH/PMC scoping review found detox interventions may help depression and problematic internet use, while effects on life satisfaction and overall wellbeing "remain variable" — and only ~30% of the studies in this space were rated high quality.
- 37.1% pooled global prevalence of problematic smartphone use (109 studies, 97,748 people) — the "you are not unusual" fact that opens the post without shaming anyone.
- Tanya Goodin's published 7-day ramp in The Guardian, plus the "going cold turkey is daunting, so the week eases you in gently" quote — outside validation that ramping is the sound approach, not a softening of it.
- Gemma Cairney's real before/after from that week (4h06m and 57 pickups → 3h00m and 17 pickups) — a concrete, honest result: better, not transformed.
- The Reddit reframe: a detox "just removes an easy escape" — the spine of §6 and the answer to the "this doesn't make you productive" objection.

## Image plan (high-level)

- **Featured:** hand-lettered title over a friendly flat-vector scene — a person putting a phone face-down and picking up something offline; single bright saturated background. Type: `ai-prompt` (per `images.featured_default` and `custom-instructions.md`, the featured slot is always `ai-prompt`).
- **In-post images:** 4 total.
  - The 7-day ramp itself as a stepped diagram (Day 1 → Day 7) — type: `remotion` (a genuine diagram, which is the only thing Remotion is reserved for on this blog).
  - A warm scene for the phone-free block / replacement activity — type: `ai-prompt`.
  - A "you slipped, here's the recovery" scene — type: `ai-prompt`.
  - A maintenance scene (a no-phone Sunday) — type: `ai-prompt`.

Per `image-style.md`: warm, varied backgrounds; brand blue is an accent only, never the dominant fill.

## Length target

1,500–2,500 words (how_to per the `blog-craft.md` post-type matrix). Planned roll-up ≈2,300, which also sits close to the studied competitors' range (Lifeline 1,416; Nuffield 2,058; Everyday Health 2,198).

## Tone hooks

- **No shame, no hustle.** The audience's own words reject productivity-moralizing about phone use ("You don't need to be productive. That's some modern world BS"). The post's promise is calm and attention, not output.
- **Olga is not above this.** She works on a screen all day and built AI tools; the credibility comes from admitting the phone wins sometimes, not from claiming she solved it.
- **Say the uncomfortable thing.** Cravings are worst early and take real weeks to fade; a week is a reset, not a cure; the research is mixed. Honesty is the differentiator here, since every competitor either oversells the benefits or cites nothing.
- **Warm and specific, not clinical.** Every day of the plan gets a concrete action a reader can do in under ten minutes, plus permission to do the smaller version of it.
- Rhythm beats from `voice.md` ("Ouch!", "Nope!") used sparingly, first person throughout.

## Open questions (resolved or flagged for plan review)

- [x] Should the "does it actually work?" section come early or late? **Resolved:** late (§6). Leading with mixed evidence would undercut the plan before the reader has it; answering the objection after they've seen the steps reads as honesty rather than hedging.
- [x] Is 7 days the right length given the research says cravings fade over ~2 weeks? **Resolved:** yes, and the post says so plainly — 7 days is the reset that gets the structure in place, §5 is what carries it past the two-week mark. Overclaiming a cure in a week is exactly what the brief rules out.
- [x] Use the Huffington Post "62% resent their phone use" stat? **Resolved:** no. Dropped in `facts.md` rather than shipped with a `[VERIFY:]` — HuffPost is not allowlist-class and no primary pollster source was locatable.
- [ ] Three statistics in `facts.md` (the 68-participant student study, the 80-participant Instagram study, the screen-time-limit-features finding) reached us through a competitor's citation chain and are marked ⚠️. Stage 3d must confirm each at its NIH/PubMed URL before it ships; any that fails confirmation gets cut per the standard fallback. Flagged here so the writer treats them as provisional and does not build a section on them.

## Changes requested by human (log)

(none yet)
