# Outline: time blocking

Written by: blog-editor (Stage 2).
Sources: `blog-ops/drafts/time-blocking/plan.md` (approved at Stage 1c.5 plan review, iteration 2), `blog-ops/drafts/time-blocking/facts.md`, `standards/blog-craft.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/product.md`.
Read by: blog-writer (Phase 3) during drafting; blog-reviewer at Stage 3b for structural alignment checks.

**Purpose:** the structural blueprint produced at the end of Stage 2 by the editor's editorial judgment (no human gate). It locks every H2/H3, the intro shape, the FAQ set, and the external link plan. Writer may adjust phrasing but not structure.

## Status

approved

## Final title

`Time Blocking: How to Do It (Without It Falling Apart)`

Source: copied from `plan.md` "Recommended title" (revised at plan review iteration 1 so the literal keyword leads).

## Final slug

`time-blocking`

## Final meta description

`Time blocking, explained simply: how to block out your day, how much to leave unplanned, and what to do when the plan falls apart by 11am.` (137 chars)

## Author voice

olga

Source: `brief.md` + `plan.md`. First-person, warm, lightly self-deprecating. Every specialist term translated on first use.

## Word count target

1,800–2,500 words (body prose, excluding FAQ).

## Intent

informational_pillar

## Category

`Productivity`

---

## Intro structure (4 paragraphs max)

### P1, Hook

- Hook sentence (draft): `You block out your whole day, feel briefly invincible, and by 11am one long phone call has flattened the entire thing — which is usually the moment people decide time blocking doesn't work for them.`
- Fact anchor: none. Deliberate — the hook is the reader's own experience, not a statistic. Target keyword appears naturally in the first sentence.

### P2, Expertise statement

- Expertise sentence (draft): `I started blocking out my days while juggling a Master's with a side project, mostly because my to-do list had quietly become a wish list — and the version that finally stuck looks nothing like the tidy colour-coded grids you see online.`
- Drawn from `voice.md` §Credibility message + §Personal-anecdote bank (timeboxing / Parkinson's Law entry).

### P3, Intro internal links (≤2, contextual)

One link only, woven into a sentence. The rest sit in the body section where each topic is actually discussed.

| Anchor text | Target slug | Placement |
|---|---|---|
| planning tips that hold up | `/planning-tips-to-maximize-productivity` | intro |
| what timeboxing actually is | `/what-is-timeboxing` | H2 2 |
| plan your week first | `/how-to-plan-your-week` | H2 3 (step 1) |
| your phone will win | `/how-to-stop-doomscrolling` | H2 4 |
| staying focused on what matters | `/how-to-stay-focused-on-goals` | H2 1 |

All root-relative, **no trailing slash** (`blog.trailing_slash: false`). 5 total, within `blog-craft.md` §Internal linking's 3–5. **The intro's internal link must appear before the post's first external link.**

### P4, Preview

- Preview sentence (draft): `This guide covers what time blocking actually is, how it differs from the three methods people constantly confuse it with, how to block out tomorrow step by step, how much of the day to leave deliberately empty, and what to do when it collapses anyway.`

---

## Body sections

### H2 1: `What is time blocking (and why does it work)?`

- Covers: the plain-language definition — you give each chunk of your calendar a job in advance, instead of working from an open-ended list. Then the mechanism: an open list has no edges, so work stretches to fill whatever time is available. Then an honest boundary: blocking decides *when* you work on something; it does not decide priorities, create time, or make you want to do the task.
- Key fact: Parkinson's Law, "work expands so as to fill the time available for its completion", source: https://en.wikipedia.org/wiki/Parkinson%27s_law — **translate on first use** per `audience.md` (work stretches to fill the time you give it).
- Key fact: only about 2.5% of people multitask effectively, source: https://doi.org/10.3758/PBR.17.4.479 — used narrowly to justify doing one thing at a time. **Do NOT stretch into any time-savings or productivity-percentage claim** (`facts.md` scoping note).
- Key fact: Benjamin Franklin planned the activities he'd undertake each hour of the day; Cal Newport, who wrote *Deep Work*, is the modern popularizer and blocks his next day each evening. sources: https://en.wikipedia.org/wiki/Timeblocking and https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/ — one short historical beat, no hagiography.
- Internal link: `staying focused on what matters` → `/how-to-stay-focused-on-goals`, where the section notes blocking can't set your priorities for you.
- **Avoid-list enforcement:** no Musk/Dorsey/founder-calendar framing anywhere in this section (`brief.md` §Avoid list; `research/serp.md` §Avoid pitfalls flags that both Todoist and Wikipedia lead with it).
- Approximate word count: `380`

### H2 2: `Time blocking vs timeboxing vs task batching vs day theming`

- Covers: the four-way distinction in one short pass, as a markdown comparison table plus a couple of sentences. This is the section that stops readers conflating the terms — `research/serp.md` §Angle opportunities shows no competitor does all four well (Todoist has the best table but weak audience fit; Asana covers only three; MeisterTask only two).
- The distinctions to draw: **time blocking** = reserve a chunk of calendar for a kind of work. **Timeboxing** = give a task a hard deadline and stop when it's up. **Task batching** = group similar small tasks into one block. **Day theming** = give a whole day a single focus.
- **CANNIBALIZATION GUARD (hard constraint, from `brief.md` §Other notes + `plan.md`).** This blog already publishes *What is Timeboxing and How it Works*. Give timeboxing **one row in the table and at most two sentences**, then hand off via the internal link. Do NOT explain how to timebox, its benefits, or its history here.
- Internal link: `what timeboxing actually is` → `/what-is-timeboxing`.
- **No image in this section** — the comparison is already a markdown table, and per the template's placement rules a chart duplicating a table earns nothing.
- Approximate word count: `350`

### H2 3: `How to time block your day, step by step`

- Covers: the genuine numbered walkthrough, as H3 steps. This is the densest section; per plan-review's residual note it may run to the top of its budget.
- Approximate word count: `550`

#### H3 3.1: `Start from your week, not your day`
- Fixed commitments first (classes, meetings, shifts), then everything else fits around them.
- Internal link: `plan your week first` → `/how-to-plan-your-week`.

#### H3 3.2: `Block the big things, not every little thing`
- Deep work, study, errands, workouts, fixed commitments — not five-minute tasks.
- Key fact: "Don't time-block every tiny task... If your calendar becomes a perfect fantasy schedule, you'll stop trusting it", u/SalkMe, r/ProductivityApps. source: https://www.reddit.com/r/ProductivityApps/comments/1tqw7h1/best_apps_for_time_blocking/

#### H3 3.3: `Decide how much of the day you'll actually plan`
- The section's spine, and the post's most useful concrete guidance. Three numbers, each attributed:
  - Stanford CTL: aim for **at least 15 hours a week of entirely blank space**. source: https://ctl.stanford.edu/weekly-planning-time-blocking-method — attribute as institutional guidance, **not** a study.
  - A **60/20/20 split**: 60% planned, 20% for the unexpected, 20% for spontaneity — u/NectarineActive5664, r/productivity. source: https://www.reddit.com/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/
  - **Double your estimate:** "each window is about twice the estimated task time" — u/AiotexOfficial, r/ADHD_Programmers. source: https://www.reddit.com/r/ADHD_Programmers/comments/1q7byqa/how_i_made_time_blocking_finally_work_for_my_brain/

#### H3 3.4: `Name each block for the work, not the wish`
- A block called "write" beats a block called "be productive." Concrete block lengths (60–90 minutes for focused work; short blocks for admin).

#### H3 3.5: `The tools: does the app actually matter?`
- Short closing beat, **not** its own H2.
- **Heading corrected after Stage 3b review iteration 1 (major issue).** The original outline heading here read "The tools: your calendar is probably enough", which asserted in a heading the exact consensus claim `facts.md` forbids — a heading is what skimmers, the table of contents, and snippet extraction all read, so the body's correct hedge never reaches them. The heading now poses the question instead of answering it. This was an editor error in the outline, not a writer error.
- **SOURCING CONSTRAINT (plan review issue #4).** Attribute specifically to u/SalkMe — "the app matters less than keeping the system simple," recommending a plain Apple or Google Calendar for the blocks plus a separate light list for the backlog. source: https://www.reddit.com/r/ProductivityApps/comments/1tqw7h1/best_apps_for_time_blocking/ — and note honestly that not everyone agrees (the same thread has a dissent arguing dedicated apps genuinely help). **Do NOT assert "you probably just need your calendar" as a reader consensus** — `facts.md` explicitly forbids upgrading one commenter into consensus.
- Cal Newport's own practice (a short planning session the evening before) fits naturally here. source: https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/

### H2 4: `Why your time blocks fall apart by 11am (and how to recover)`

- Covers: the differentiator section. The failure is **an over-packed calendar with zero buffer between blocks** — a day built for a version of you with no interruptions, no bad nights of sleep, and no colleagues.
- **FRAMING CONSTRAINT (plan review issue #3, hard).** Name the failure in time-blocking-native language: *over-packed calendar, zero buffer*. Do **NOT** describe it as "clock-precision, per-task scheduling," which is this outline's own §2 definition of timeboxing and would re-derive that boundary in fresh words. Include **exactly one** sentence pointing back to §2 (that this is the timeboxing failure mode leaking into a time-blocked calendar). Do not re-teach the distinction.
- Key fact: "the moment something unexpected happens, my whole plan feels useless" / "Turns out, my life didn't get the memo... For the rest of us: low expectations, high flexibility", u/theodetteapp, r/productivity. source: https://www.reddit.com/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/
- Key fact: "I promise the first week is going to feel a little messy, because if you've never done this before it's easy to under or overestimate the time it takes to do something", @mattragland. source: https://x.com/mattragland/status/1703027584647229512 — the setup-cost honesty beat.
- **The recovery move (the part competitors skip):** a blown block is not a blown day. Slide the rest, drop the lowest-value block rather than compressing everything, and treat the first week as calibration data rather than failure. The doubling rule from §3.3 is the preventative version of the same fix.
- Also name the *other* adherence problem, distinct from plan breakage: the planning ritual itself gets boring. "I think it's REALLY boring to plan the day using Google Calendar", u/Impossible-Skirt6023, r/productivity. source: https://www.reddit.com/r/productivity/comments/1uhixbj/how_do_i_mantain_time_blocking/ — fix is to shrink the ritual (five minutes, same time daily), not to promise more discipline.
- Internal link: `your phone will win` → `/how-to-stop-doomscrolling`, on protecting a block once it exists.
- Approximate word count: `420`

### H2 5: `Who time blocking doesn't suit (and what to do instead)`

- Covers: honest limits, with real alternatives rather than a disclaimer paragraph. `research/serp.md` §Angle opportunities: the neurodivergent angle is **absent from the entire top 8**, and it is the highest-engagement Reddit thread in the research set.
- **Reactive and interrupt-driven roles.** Someone whose day is face-to-face or physical work measured in seconds can't meaningfully block it, while a colleague doing analysis in the same organisation can. Describe the *pattern* in your own words — **do not reuse the source's invented persona names** (`facts.md` note; the source is a forbidden competitor). Counter-move: Cal Newport's point that "periods of open-ended reactivity can be blocked off like any other type of obligation." source: https://en.wikipedia.org/wiki/Timeblocking
- **Readers whose energy varies day to day.** The strongest voice in the research: "I finally scrapped my entire calendar and switched to 'Energy Slices.' I don't assign tasks to a time; I tag them by the amount of mental battery they require (High, Medium, or Low)", u/Lost_Count7949, r/AuDHDWomen (1,365 upvotes). source: https://www.reddit.com/r/AuDHDWomen/comments/1t0phfq/timeblocking_is_a_toxic_trap_for_audhd_brains/
  - **Give the honest spectrum, not one verdict.** The same thread's top contrarian reply keeps the method in modified form: "I hate allocating a set start/finish time to individual tasks, it always leads to failure for me." source: same thread.
  - **TONE CONSTRAINT:** describe the reader's situation in their own language. Do not diagnose anyone, do not make clinical claims, do not imply a diagnosis is required to find rigid schedules unworkable.
- **The alternative worth naming:** an ordered task queue with no clock times — "tasks can take as long as they need to... if a screaming urgent task comes in, it can jump the queue but this doesn't derail the whole day", u/Bunnyeatsdesign, r/productivity. source: https://www.reddit.com/r/productivity/comments/1pmknhf/anyone_else_struggling_with_time_blocking_what/
- Approximate word count: `350`

---

## Closing CTA

- CTA angle (one line): the reader picks tomorrow, blocks three things and leaves the rest of the day genuinely empty — and if a chunk of their week is reading or admin, Olga's free AI tools (the **Text Summarizer** especially) can shrink that block before it goes on the calendar.
- Links the primary CTA target per `blog.md` (the free AI tools page) with an action anchor. **One product mention in the whole post, here only.** No feature re-list, no prices (`product.md` §Pricing page — the tools are free and there is no pricing page).
- ~100 words, ≤2 short paragraphs, sits immediately before the FAQ.

---

## FAQ block

- Q: `What is time blocking in simple terms?` → A direction: one or two sentences — you decide in advance which chunk of the day belongs to which work, and follow the calendar instead of an open list.
- Q: `How long should a time block be?` → A direction: 60–90 minutes for focused work, shorter for admin; the honest answer is to start from your own calibration data rather than a rule.
- Q: `Is time blocking the same as timeboxing?` → A direction: no — blocking reserves a chunk of calendar for a kind of work, timeboxing puts a hard deadline on a task. One sentence, then the link to `/what-is-timeboxing`. Do not expand.
- Q: `How much of my day should I leave unplanned?` → A direction: give the concrete numbers (Stanford CTL's 15 blank hours a week; a 60/20/20 split) with attribution.
- Q: `What should I do when my time blocks fall apart?` → A direction: slide the rest, drop the lowest-value block instead of compressing everything, and treat week one as calibration.

---

## Inbound internal links (existing posts → this post)

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| `what-is-timeboxing` | Where that post distinguishes timeboxing from adjacent methods — the reciprocal of this post's §2 hand-off, so the pair reads as a set rather than two overlapping posts | time blocking |
| `how-to-plan-your-week` | Where the weekly routine reaches the point of putting the week onto actual days; the daily layer is this post | time blocking your days |
| `planning-tips-to-maximize-productivity` | In whichever tip covers scheduling or calendar discipline | how to time block your day |

Applied automatically at Stage 4b.5 (before Gate 2) so the human reviews the complete cross-post change in the preview.

---

## External link plan

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source |
|---|---|---|---|
| work expands so as to fill the time available for its completion | https://en.wikipedia.org/wiki/Parkinson%27s_law | authoritative_allowlist | facts.md §Quotes, Parkinson's Law |
| only about 2.5% of people multitask effectively | https://doi.org/10.3758/PBR.17.4.479 | primary_source | facts.md §Statistics, Supertaskers ✅ |
| planned the activities he would undertake each hour of the day | https://en.wikipedia.org/wiki/Timeblocking | authoritative_allowlist | facts.md §Named examples, Benjamin Franklin |
| blocks his next day in a short planning session each evening | https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/ | primary_source | facts.md §Named examples, Cal Newport |
| at least 15 hours of entirely blank space | https://ctl.stanford.edu/weekly-planning-time-blocking-method | authoritative_allowlist | facts.md §Statistics, Stanford CTL ✅ |

5 external links, within `blog-craft.md` §External linking's 3–5.

**Forbidden as link targets, no exceptions:** `todoist.com`, `asana.com`, `meistertask.com`, `habitstrong.com` — all top-10 SERP competitors. If the writer wants a claim whose only source is one of these, the claim gets cut or marked `[VERIFY: <claim> | source: <where>]`, never linked.

**Reddit and X URLs** are cited inline as voice-of-customer attributions (username + subreddit), not counted as authority links. They are permitted and expected — they are the post's differentiator.

---

## Image placement plan (high-level)

- **Featured (frontmatter cover):** a day's calendar blocked out with deliberate empty gaps between the blocks — the white space is the point of the post; type: `ai-prompt` (per `images.featured_default` and `custom-instructions.md` §Image style, which forbids overriding the featured slot to another type).
- **After H2 1 + 1 paragraph:** a person at a desk glancing between an open-ended to-do list and a calendar with three clear blocks on it; type: `ai-prompt`
- **After H2 3 + 1 paragraph** (revised at Stage 3b review: place it after the *first H3's* body paragraph rather than after H2 3's lead-in, so it does not render immediately before the `### Start from your week` heading): the post's one genuine diagram — an over-packed day (blocks wall-to-wall, no gaps) beside a 60/20/20 day (60% blocked, 20% marked for the unexpected, 20% open), side by side; type: `remotion`
- **After H2 4 + 1 paragraph:** the 11am derail — a calendar where one long unplanned call has swallowed two neat blocks; type: `ai-prompt`
- **After H2 5 + 1 paragraph:** the energy-based alternative — tasks tagged High / Medium / Low mental battery instead of clock times; type: `ai-prompt`

1 featured + 4 in-post, matching `blog-craft.md` §Image count target (1 featured + 3–5 in-post). H2 2 deliberately has no image (its content is a comparison table).

---

## Word count roll-up

- Intro: ~200 words
- Body sections total: 380 + 350 + 550 + 420 + 350 = **2,050**
- Outro / CTA: ~100 words
- **Total estimate (body prose, no FAQ):** **2,350** vs plan target 1,800–2,500 ✅
- FAQ: ~150 words (not part of the gated total)

---

## Open questions (recorded, no longer block on a human gate)

- [ ] **Residual from plan review iteration 2 (non-blocking):** H2 3 carries proportionally more subject matter than the other sections. It is budgeted at 550 words against 350–420 elsewhere, deliberately. If the writer finds it still cramped, the honest fix is to let it run a little past 550 rather than to thin §3.3, which holds the post's most useful concrete guidance.
- [ ] **Self-check passed on intent match:** `research/serp.md` §Search intent reports hybrid explainer + step-by-step, no listicles. This outline is a segmented explainer (what → vs → how → failure → limits) with a genuine numbered walkthrough at H2 3, which matches. No structural change needed before drafting.

---

## Changes requested by human (log)

- (none)
