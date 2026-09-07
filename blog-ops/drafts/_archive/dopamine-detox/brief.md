# Brief: dopamine-detox

Written by: blog-editor (Stage 0 intake, autopilot file-intake).
Sourced from: `blog-ops/content-plan.md` row #28 (no human conversation; headless console run).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

dopamine detox

## Category

Productivity

(Resolved against `blog-ops/profile/site-conventions.md` §Categories: the post's
pillar is "Digital wellbeing / beating phone distraction", which that mapping
table assigns to **Productivity**.)

## Intent

informational_pillar

## Audience emphasis

Primary: students, early-career professionals, and aspiring creators who feel
stretched thin and lose focus to their phone (audience.md pain point #2,
"Losing focus to distraction, especially the phone / endless scrolling", and #1,
"Feeling overwhelmed and short on time").

Secondary: busy knowledge workers who searched the exact phrase "dopamine
detox" after hearing it on TikTok/YouTube and want to know whether it is real
and what to actually do.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` is on; this topic has a large lived-
  experience community (r/NoSurf, r/getdisciplined, r/dopaminedetoxing), and the
  pain language there is the post's biggest differentiator)
- x: yes (`modules.x_research` is on; the "dopamine detox is pseudoscience"
  counter-take lives mostly on X and the post needs that counterpoint to be
  honest)

## Author voice

olga

Reasoning: single-author blog. `blog-ops/profile/authors.md` lists exactly one
author (olga) and defines no selection rubric, so the fallback (the first and
only author listed) applies.

## What the human wants to convey

Sourced from the content-plan row's angle: "INFO guide: Dopamine Detox (what it
is and how to do it right)". Expanded by the editor into the working angle
below; every expansion is logged under `## Autopilot assumptions`.

- Explain what a dopamine detox actually is, in plain language, without the
  neuroscience jargon dump. The name is wrong (you cannot detox from a
  neurotransmitter your body needs) but the underlying practice is useful.
- Separate the viral TikTok/YouTube version (stare at a wall for 24 hours, no
  music, no food you enjoy, no talking) from the version that actually helps:
  a deliberate break from high-stimulation, low-effort dopamine hits so that
  ordinary work stops feeling boring by comparison.
- "How to do it right" is the load-bearing half of the post. Give a concrete,
  doable protocol rather than an extremist challenge people quit by lunchtime.
- Be honest that the term is scientifically loose. Readers who have seen the
  debunk videos should feel the post is level with them, not selling a trend.
- Land it in the blog's own lane: this is a focus/productivity tactic, not a
  wellness cleanse. The payoff is being able to sit with hard work again.

## Product features to mention

None specified. Per `blog-ops/profile/product.md` §Positioning recommendations,
introduce the closest-fit free AI tool near the end as a natural next step, not
a hard sell. Text Summarizer is the natural match (it cuts the reading/skimming
load that pushes people back to their phone).

- Text Summarizer (soft mention, CTA section only)

## Soon-to-ship features (do NOT flag as gaps)

None.

## First-party data points to include

None. `product.md` §First-party data availability lists tool usage/adoption
numbers as `hypothetical`, which is not citable. The post cites no first-party data.

## Avoid list

- No hustle-culture framing ("grind harder", "discipline is everything").
- No "this one trick rewires your brain" overclaiming: the audience doc
  explicitly bans overhyped claims, and this topic is full of them.
- No unexplained neuroscience jargon (receptor downregulation, mesolimbic
  pathway) without a plain-language translation on first use.
- No medical or clinical advice. This is not addiction treatment; where the
  post brushes against genuine compulsive use, point the reader at a
  professional rather than a protocol.
- No affiliate/product links. This is an informational post, not a roundup,
  so no Amazon links and therefore no affiliate disclosure paragraph.
- No prescriptive fasting/food restriction advice (the viral version includes
  it; the post should not).

## Founder anecdote / story

From `voice.md` §Personal-anecdote bank: adopting timeboxing to finally
organize her time and beat Parkinson's Law is the closest genuine fit: the
"I could not sit with a hard task until I changed what I did between tasks"
thread. Weave one short first-person beat; do not invent a detox story that
did not happen.

## Internal link targets

Existing published posts (all live at `https://olgapak.com/<slug>`):

- `how-to-stop-doomscrolling`, the tactical sibling; the behaviour a detox is
  interrupting
- `digital-detox-plan`, the 7-day screen-time reset; the closest neighbour and
  the natural "if you want the structured version" link
- `how-to-reduce-screen-time`, the measurement and settings half
- `screen-free-hobbies`, what to do with the reclaimed hours (the single
  biggest reason detoxes fail is having nothing to replace the scroll with)
- `time-blocking`, the follow-on system once focus returns

## Source URLs for researcher to study

None specified. The researcher works from the SERP capture.

## Other notes

- The post must survive the "is this pseudoscience?" objection in the first
  screen, because a meaningful share of searchers arrive already skeptical.
- Blog cadence is weekly; this slots into the digital-wellbeing pillar
  alongside four already-published neighbours, so the internal-link web matters
  more than usual here.

## Autopilot assumptions

Headless run, so no intake conversation happened. Every judgment below was made
by the editor from files, and is flagged so a human can correct it on review.

1. **Author = olga.** `authors.md` defines no §Selection rubric and lists one
   author; fallback path taken (recorded per SKILL.md §Intake without a
   conversation).
2. **Category = Productivity**, from `site-conventions.md`'s pillar→category
   mapping for "Digital wellbeing / beating phone distraction". That row is
   annotated *(human to confirm)* in the source doc; assumed rather than
   confirmed.
3. **Reddit + X both enabled.** Both modules are on in `config.yaml`; the
   editor enabled both because the topic's best material (lived experience,
   and the debunk counter-take) lives on those two platforms rather than in
   the SEO top-10.
4. **Intent = informational_pillar**, inferred from the content-plan angle
   ("INFO guide"), not from a human statement.
5. **Angle expansion.** The plan row gave one line; the "what it is" / "how to
   do it right" split, the honest-about-the-name framing, and the
   anti-extremist protocol stance are the editor's reading of that line
   against `voice.md` (no overhyped claims) and `audience.md` (pain point #2).
6. **No affiliate links, no disclosure paragraph.** `custom-instructions.md`
   §Content policy mandates real affiliate links in commercial roundups; this
   is an informational guide with no product recommendations, so neither
   applies.
7. **Internal link targets** were picked by the editor from `content/blog/`,
   not named by a human.
8. **Competitors module is off** (`modules.competitors: false`), so the
   "Competitors by post" table was not read and no competitors are named.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-07 03:41
- Human operator: autopilot (operator console, run `1788752390191-dopamine-detox-autopilot`)
