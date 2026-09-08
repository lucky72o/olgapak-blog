# Outline: pomodoro technique

Written by: blog-editor (Stage 2).
Sources: `blog-ops/drafts/pomodoro-technique/plan.md` (approved at Stage 1c.5 plan review), `blog-ops/drafts/pomodoro-technique/facts.md`, `standards/blog-craft.md`, `standards/writing-standards.md`, `blog-ops/profile/voice.md`, `blog-ops/profile/product.md`.
Read by: blog-writer (Phase 3) during drafting; blog-reviewer at Stage 3b for structural alignment checks.

**Purpose:** the structural blueprint produced at the end of Stage 2 by the editor's editorial judgment (no human gate). It locks every H2/H3, the intro shape, the FAQ set, and the external link plan. Writer may adjust phrasing but not structure.

## Status

approved

## Final title

`Pomodoro Technique: How It Works and When to Break It`

Source: copied from `plan.md` "Recommended title". 53 characters.

## Final slug

`pomodoro-technique`

Source: copied from `plan.md`.

## Final meta description

`The Pomodoro Technique in plain English: how the 25/5 cycle works, what the research really shows, when to break the rule, and the timers worth buying.`

Source: copied from `plan.md`. 150 characters.

## Author voice

olga

Source: `brief.md` and `plan.md`. Single-author blog; first-person throughout, lightly self-deprecating, tested-not-theorized.

## Word count target

1,800-2,200 words of body prose (intro + body + CTA, excluding FAQ), per `plan.md` §Length target.

## Intent

how_to

Carried from `plan.md`. Explanatory H2s carrying one numbered how-to section inside them, matching the mixed definitional/how-to SERP shape rather than a pure step list.

## Category

`Productivity`

Source: copied from `plan.md` (WP term id 12 per `blog-ops/profile/site-conventions.md` §Categories).

---

## Intro structure (4 paragraphs max)

Per `standards/blog-craft.md` intro rules: hook → expertise statement → internal link → preview. **Then the affiliate disclosure paragraph**, which is the LAST paragraph of the intro, immediately before the first `##`, per `blog-ops/profile/custom-instructions.md` §Content policy. The disclosure is not one of the four intro paragraphs; it is a required standing italic line that follows them.

### P1, Hook

One or two sentences, target keyword present, built on the origin story rather than a statistic (no effect-size number exists that `facts.md` permits).

- Hook sentence (draft): `The Pomodoro Technique was invented by a student with a tomato-shaped kitchen timer who had already tried 10-minute stretches and hour-long ones before he landed on 25 minutes.`
- Fact anchor: Cirillo experimented with ~10-minute intervals (too short) and hour-long unbroken stretches (too long) before settling on 25, source: `facts.md` §Named examples (corroborated by Wikipedia/Todoist/Verywell Mind; **no external link**, all three are forbidden SERP URLs)

### P2, Expertise statement

- Expertise sentence (draft): `I came to timed work the boring way: after pivoting careers and going back for a Master's, my to-do list stopped fitting in the day, and the only thing that moved the needle was giving work a fixed slot instead of an open-ended evening.`
- Source: `voice.md` §Credibility message + §Personal-anecdote bank (timeboxing to beat Parkinson's Law). First-person, lived rather than asserted.

### P3, Intro internal links (≤2, contextual)

One link only. The other three sit in the body sections where their topic is actually discussed.

| Anchor text | Target slug | Placement (intro or which H2) |
|---|---|---|
| giving a task a fixed slot on the calendar | what-is-timeboxing | intro |
| plan the week first | how-to-plan-your-week | H2 3 |
| your phone will eat the break | how-to-stop-doomscrolling | H2 3 |
| time blocking | time-blocking | H2 5 |

All four are root-relative with **no trailing slash** (`blog.trailing_slash: false`), e.g. `[giving a task a fixed slot on the calendar](/what-is-timeboxing)`. All four verified HTTP 200 on the live site, 2026-09-08.

### P4, Preview

- Preview sentence (draft): `This guide covers what the technique actually is, why timed chunks work, how to run your first one today, what the research does and doesn't show, the moments the 25/5 rule stops working, whether it suits ADHD, and the timers worth owning.`

### P5, Affiliate disclosure (required, verbatim, italic)

Last paragraph of the intro, immediately before the first `##`:

`*Some links in this guide are affiliate links. As an Amazon Associate, I earn from qualifying purchases, at no extra cost to you.*`

Triggered because H2 7 ships five tagged Amazon links.

---

## Body sections

Every H2 carries at least one `facts.md`-sourced fact. Product mentions appear only in the CTA (sections 1-7 stay clean, per `plan.md` §Product references planned).

### H2 1: `What the Pomodoro Technique actually is`

- Bullet: plain-language definition of the 25/5 mechanic and the long break, then the point most guides skip: the timer is the most-copied part of a bigger system that also covers daily planning, interruption handling and effort estimation.
- Bullet: key fact, `25 minutes of work, a 5-minute break, and a longer 15-to-30-minute break after four cycles`, source: https://writingcenter.unc.edu/2020/04/pomodoros/ (external link lives here, see External link plan row 3 anchor placement note)
- Bullet: key fact, the technique is more than the timer (daily planning, interruption management, effort estimation), source: `facts.md` §Named examples, "The technique is more than the timer" (**no external link**: pomodorotechnique.com is rank 3, forbidden)
- Bullet: key fact, `pomodoro` is Italian for tomato and Cirillo named it after the kitchen timer he used as a student in the late 1980s, source: `facts.md` §Named examples (**no external link**)
- Bullet: translate on first use here: "timeboxing".
- Approximate word count: `210`

### H2 2: `Why breaking work into timed chunks works`

- Bullet: the mechanism, not the hype. Attention is not a tank that empties; performance drops because you stop noticing the task, and a brief break restores it. This is why the break is load-bearing rather than a reward.
- Bullet: key fact + quote, `a 2011 University of Illinois study published in Cognition found brief diversions from a task measurably improve the ability to stay focused on it`, plus the Lleras quote ("attention is not the problem"), source: https://news.illinois.edu/brief-diversions-vastly-improve-focus-researchers-find/
- Bullet: second mechanism, a 25-minute commitment is small enough to start, which is the real reason it beats procrastination. Frame from `facts.md`; do NOT attach a number, no effect-size claim is permitted.
- Bullet: translate on first use here: "deep work", "flow state".
- Approximate word count: `220`

### H2 3: `How to run your first Pomodoro today`

The one numbered how-to section. Five H3 sub-steps.

- Bullet: key fact, the three operating rules most guides drop, `break any task needing more than four pomodoros into smaller pieces; batch tiny sub-pomodoro tasks together; once a pomodoro starts, it runs to the bell (log interruptions instead of servicing them)`, source: `facts.md` §Named examples (**no external link**: todoist.com is rank 2, forbidden; facts usable)
- Bullet: internal link, `plan the week first` → `/how-to-plan-your-week`, in step 1 (you cannot time-box a task you have not chosen).
- Bullet: internal link, `your phone will eat the break` → `/how-to-stop-doomscrolling`, in step 4 (the break is where the method actually fails).
- Approximate word count: `260`

#### H3 3.1: `Pick one task, not a list`
- Split anything needing more than four pomodoros; batch the two-minute jobs into one.

#### H3 3.2: `Set 25 minutes and start`
- Any timer works for the first one. Section 7 covers the upgrade.

#### H3 3.3: `Log interruptions, don't service them`
- Write the intrusive thought on paper, keep working. Cirillo's rule: once it starts, it runs to the bell.

#### H3 3.4: `Take the break away from the screen`
- Five minutes, standing up. Not the phone; that break never ends.

#### H3 3.5: `After four, take a real one`
- 15 to 30 minutes. This is the part people skip and then wonder why the fourth hour is useless.

### H2 4: `What the research actually says (and doesn't)`

- Bullet: the honest evidence picture, said plainly rather than buried as a disclaimer. This is the differentiator `research/serp.md` §Angle opportunities identifies: nobody on page 1 cites the review's own caveats.
- Bullet: key fact, `a 2025 scoping review pulled together 32 studies and 5,270 participants, but only three of them were randomised trials`, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/
- Bullet: key fact, `the review's authors rate their own evidence moderate to low certainty` and flag likely publication bias toward positive results, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/
- Bullet: the takeaway sentence. Mostly positive, weakly evidenced, and worth a week of your own testing rather than faith.
- Bullet: **hard constraint**, no effect size, no percentage, no "X% more productive". `facts.md` §Rejected explicitly forbids inventing one.
- Approximate word count: `240`

### H2 5: `When the 25/5 rule stops working, and what to do instead`

The largest section and the reason this post exists. Three named failure modes, each with the specific adaptation.

- Bullet: failure mode 1, deep technical work. The timer interrupts the moment the problem finally opens up. Quote r/studytips: `"Once your brain finally clicks into complex logic, stopping on an arbitrary timer does more harm than good."` Adaptation: longer intervals (50/10, 60/15), which is closer to `time blocking` than to Pomodoro.
- Bullet: internal link, `time blocking` → `/time-blocking`, here.
- Bullet: failure mode 2, the break that is not a break. Quote r/pomodoro (a user with nearly 20 years of practice): `"Don't time your short breaks... it's just nice not to feel like I'm permanently on the clock and at the mercy of a timer."` Adaptation: keep the work timer, drop the break timer.
- Bullet: failure mode 3, being told what to do by a tomato. Quote r/ADHD: `"Maybe it's also my authority complex showing, but I don't like being told when to take a break. Especially by a tomato."` Adaptation: **Flowtime**, named and explained. Work until you naturally need a break, then take one roughly proportional to the time worked (around 20%). Source: `facts.md` §Named examples.
- Bullet: closing rule for the section, r/studytips: `"Pomodoro is a tool, not a rule. Use it to build focus, not to interrupt it."` (clean up the original's lowercase and missing article, per `facts.md`).
- Bullet: **attribution rule**, quote by subreddit, never by username. Reddit threads are reader-experience evidence, never external links.
- Approximate word count: `360`

### H2 6: `Is the Pomodoro Technique good for ADHD?`

Lifted straight from the PAA block, which leads with this question.

- Bullet: state both outcomes and assert neither as universal. Some readers find the external structure stabilising; others find the forced break destroys hyperfocus. `facts.md` §Rejected forbids the flat "yes" that Birmingham City University gives uncaveated.
- Bullet: quote r/adhdwomen: `"The only negative for me is that it interrupts my hyperfocus... when I'm working on something and I'm in the zone, I'll get so much more done uninterrupted."`
- Bullet: quote r/ADHD (use the trimmed form only, the full comment contains a vulgarity): `"I feel like I need at least 45-60 minutes to get into a flow... But also, you can modify it for yourself. Try a 40/10 or 60/15 approach"`
- Bullet: key fact, `a qualitative study of 52 college students with learning disabilities and ADHD found the strategies they actually relied on were multidimensional, a mix of habits and routines, reframing, and symptom-specific tactics, rather than any single method`, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6406620/
- Bullet: **scope constraint**, that study never mentions the Pomodoro Technique and reports nothing about it. It supports exactly one claim: no single technique is the answer for these readers. Any sentence implying it endorses Pomodoro is an overclaim.
- Approximate word count: `220`

### H2 7: `The best Pomodoro timers (and the free apps worth trying)`

Five physical timers as H3s, each with a one-line "best for", then the free apps named but never linked. Nothing on page 1 covers this at all.

- Bullet: framing sentence, why a dedicated timer beats the phone (the phone is the thing you are hiding from).
- Bullet: source, every ASIN opened at its own `/dp/` page in a logged-in browser on 2026-09-08, `facts.md` §Timer products.
- Bullet: **hard constraints**, never print an exact price (tiers like "under $10" are fine); never quote a rating figure not in the `facts.md` table, prefer qualitative framing; link format is mandatory `https://www.amazon.com/dp/<ASIN>?tag=op01e-20`; no `[AFFILIATE-LINK-PENDING:]` placeholders and no untagged Amazon URLs.
- Approximate word count: `340`

#### H3 7.1: `Ticktime T6 Pomodoro Timer Cube` , best for the purpose-built pick
- Flip the cube to a preset face (3/5/10/15/25/30 min) and it starts. No phone involved. The priciest of the five.
- Link: https://www.amazon.com/dp/B08HWCWY6Z?tag=op01e-20

#### H3 7.2: `Rotating Productivity Timer (5/25/10/50)` , best value
- Amazon's "Overall Pick" for `pomodoro timer`; same flip-to-start idea, and the faces are literally 25 and 5.
- Link: https://www.amazon.com/dp/B0D7JG4VLD?tag=op01e-20

#### H3 7.3: `Time Timer Home MOD` , best visual, and the quietest
- Shows time as a shrinking red disc rather than digits, with a silenceable alert. The pick for quiet rooms and for readers who find a digital countdown stressful. The most-reviewed of the five by a wide margin (roughly 9,850 ratings); do NOT call it the best-rated, the rotating timer scores higher on far fewer ratings.
- Link: https://www.amazon.com/dp/B0BK2J71M1?tag=op01e-20

#### H3 7.4: `Secura 60-Minute Visual Countdown Timer` , best for a shared desk
- Oversized 7.5-inch dial with a magnetic back, readable across a room. Works for a study group or a fridge door.
- Link: https://www.amazon.com/dp/B07WFDZ72L?tag=op01e-20

#### H3 7.5: `Tomato Mechanical Kitchen Timer` , cheapest, and the literal pomodoro
- **Report the middling rating honestly:** a basic wind-up. It ticks, and it is not precise. Recommend it as the cheapest way to try the method, not as the best timer.
- Link: https://www.amazon.com/dp/B01MQXZ61Q?tag=op01e-20

#### H3 7.6: `The free apps worth trying`
- Name only, never link: Forest, Focus To-Do, Session, Be Focused, Toggl Track. `pomofocus.io` is rank 5 in this post's SERP capture, so mention it in passing at most and never link it.

---

## Closing CTA

Sits immediately before `## FAQ`. Two short paragraphs, per `standards/blog-craft.md` §Conclusion / CTA.

- CTA angle (one line): run one 25-minute pomodoro today and judge it by the end of the week, not by the theory; then, since you now have protected focus time, spend less of it on the busywork inside it.
- CTA target + hook: Olga's free AI tools page, per `blog-ops/profile/blog.md` §Primary CTA. Hook: try my free AI tools to automate the mundane. Action anchor links `/ai-tools`; **name the Text Summarizer only** (`/ai-tools/ai-text-summarizer`), per `brief.md` and `plan.md`. No second tool, no feature re-list, no prices (the tools are free and there is no pricing page).
- Approximate word count: `100`

---

## FAQ block

Five questions, deliberately chosen NOT to duplicate H2 4 ("does it work") or H2 6 (ADHD), which already own those answers in the body. Feeds the JSON-LD FAQ schema.

- Q: `Why is it called the Pomodoro Technique?` → A direction: `pomodoro` is Italian for tomato; Cirillo used a tomato-shaped kitchen timer as a student in the late 1980s. One or two sentences.
- Q: `What should I do during the 5-minute break?` → A direction: stand up and get off the screen; the break restores attention only if it is genuinely a break, and the phone is the reliable way to lose it.
- Q: `Can I just use my phone as a Pomodoro timer?` → A direction: yes, and it works, but the phone is usually the distraction you are trying to escape, which is the whole argument for a dedicated timer.
- Q: `What is the Flowtime technique?` → A direction: work until you naturally need a break, then take one roughly proportional to the time worked (around 20%). The named alternative real users switch to when 25/5 fails them.
- Q: `How many pomodoros should I do in a day?` → A direction: no fixed number is supported by anything in `facts.md`, so answer honestly: start with two or three, and let the count follow the work rather than a target. **No invented number.**

---

## Inbound internal links (existing posts → this post)

Three already-published posts that should link TO this new post. Applied automatically at Stage 4b.5 (to the live WordPress posts via REST per `custom-instructions.md` §Inbound internal links, and to the repo copies in `content/blog/`), so the human reviews them in the Gate 2 preview.

| Existing post (slug) | Section / context for the link | Anchor text (draft) |
|---|---|---|
| time-blocking | §"Who time blocking doesn't suit (and what to do instead)" , a timer-driven method is the genuine alternative for readers whose day is too interrupt-driven to block in advance | the Pomodoro Technique |
| how-to-stop-doomscrolling | §"Layer 3: Rebuild your routine (design days that don't need willpower)" , timed work sessions are a concrete routine that removes the decision the scroll exploits | timed focus sessions |
| how-to-plan-your-week | §"Tools that make weekly planning easier" , a physical timer is the execution layer under a weekly plan | a Pomodoro timer |

All three anchors link to `/pomodoro-technique` (root-relative, no trailing slash) in the repo copies, and to `https://olgapak.com/pomodoro-technique` in the live WordPress `content.raw` per the adapter's REST path.

---

## External link plan

Four citation sources, inside `standards/blog-craft.md`'s 3-5 rule. Plus five tagged Amazon product links in H2 7 (product links, not citations; listed separately below).

**Forbidden for this post:** every URL in `research/serp.md`'s 15 captured SERP results, including Wikipedia (rank 1), Todoist (rank 2), pomodorotechnique.com (rank 3), BCU (rank 4), pomofocus.io (rank 5), EdPsyched (rank 6), Verywell Mind (rank 7) and the NYT piece (rank 15). Their facts are usable throughout this outline; their URLs are not. Reddit and X threads are never external links either.

| Anchor (literal claim in post) | Target URL | Source classification | Facts.md source / SERP citation reference |
|---|---|---|---|
| 32 studies and 5,270 participants, only three of them randomised trials | https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/ | authoritative_allowlist | `facts.md` §Statistics, lines 1-3 (NLM/NIH, allowlist-class per `blog-craft.md` §Authoritative-site allowlist) |
| the review's authors rate their own evidence moderate to low certainty | https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/ | authoritative_allowlist | `facts.md` §Statistics, line 3. Same URL as the row above; the writer links it ONCE, on whichever of the two claims reads more naturally, and leaves the other unlinked |
| brief diversions from a task measurably improve the ability to stay focused on it | https://news.illinois.edu/brief-diversions-vastly-improve-focus-researchers-find/ | primary_source | `facts.md` §Statistics, 2011 Illinois/Cognition entry + §Quotes (Lleras) |
| a writing coach's account of the technique forcing him to define what a task actually contains | https://writingcenter.unc.edu/2020/04/pomodoros/ | authoritative_allowlist | `facts.md` §Statistics (25/5/4/15-30 structure) + §Quotes (Josh, UNC Writing and Learning Center); `research/serp.md` §Citations harvested from competitors, row 6 |
| the strategies these students actually rely on are a mix of habits and routines, reframing, and symptom-specific tactics, not any single method | https://pmc.ncbi.nlm.nih.gov/articles/PMC6406620/ | authoritative_allowlist | `facts.md` §Statistics, 52-students entry; `research/serp.md` §Citations harvested from competitors, row 1 |

**Both `pmc.ncbi.nlm.nih.gov` links are a deliberate allowlist exception, not an oversight.** The 2025 scoping review is rank 8 and therefore inside the 15-result capture, but NLM/NIH is explicitly allowlist-class per `blog-craft.md` §"Authoritative-site allowlist", which permits linking even when the domain appears in the top SERP. PMC is not a realistic ranking competitor for this blog.

**Stage 3d note:** `pmc.ncbi.nlm.nih.gov` serves a reCAPTCHA interstitial to plain `curl` for the PMC6406620 article. Both PMC URLs were verified HTTP 200 in a logged-in browser on 2026-09-08. Re-verify in the browser rather than reading a curl failure as a dead link.

**Affiliate product links (H2 7, five total, not citations):**

| Product | URL |
|---|---|
| Ticktime T6 Pomodoro Timer Cube | https://www.amazon.com/dp/B08HWCWY6Z?tag=op01e-20 |
| Rotating Productivity Timer 5/25/10/50 | https://www.amazon.com/dp/B0D7JG4VLD?tag=op01e-20 |
| Time Timer Home MOD | https://www.amazon.com/dp/B0BK2J71M1?tag=op01e-20 |
| Secura 60-Minute Visual Countdown Timer | https://www.amazon.com/dp/B07WFDZ72L?tag=op01e-20 |
| Tomato Mechanical Kitchen Timer | https://www.amazon.com/dp/B01MQXZ61Q?tag=op01e-20 |

---

## Image placement plan (high-level)

1 featured + 4 in-post, inside `standards/blog-craft.md` §Image count (1 featured + 3-5 in-post). Featured is frontmatter-only and is NOT also an in-post slot. In-post slots sit after the section heading and the section's first body paragraph.

- **Featured (frontmatter cover):** hand-lettered post title over a flat-vector desk scene with a tomato kitchen timer, type: `ai-prompt` (`images.featured_default`, and `custom-instructions.md` §Image style fixes the featured slot to `ai-prompt`)
- **After H2 1 `What the Pomodoro Technique actually is` + 1 paragraph:** the cycle diagram, 25 minutes work → 5-minute break, repeated four times → 15-to-30-minute long break, type: `remotion` (the one genuine diagram in the post; no markdown table duplicates it, so the chart-duplication rule does not apply)
- **After H2 3 `How to run your first Pomodoro today` + 1 paragraph:** a desk mid-session, timer running, phone face-down and out of reach, type: `ai-prompt`
- **After H2 5 `When the 25/5 rule stops working` + 1 paragraph:** someone deep in a problem while the timer rings unheeded, the moment the rule earns breaking, type: `ai-prompt`
- **After H2 7 `The best Pomodoro timers` + 1 paragraph:** a lineup of physical timers on a desk (cube, rotating dial, visual disc, wind-up tomato), type: `ai-prompt`

Type mix matches `custom-instructions.md` §Image style: `remotion` only for the genuine diagram, `ai-prompt` for scenes and conceptual visuals. No `screenshot` slots, there is no tool UI this post owns or needs to capture.

---

## Word count roll-up

Body prose only: intro + body sections + CTA, EXCLUDING the FAQ.

- Intro: ~200 words (4 paragraphs + the one-line affiliate disclosure)
- Body sections total: 1,850
  - H2 1: 210
  - H2 2: 220
  - H2 3: 260
  - H2 4: 240
  - H2 5: 360
  - H2 6: 220
  - H2 7: 340
- Outro / CTA: ~100 words
- **Total estimate (body prose, no FAQ):** `2,150` vs plan target `1,800-2,200` , inside range, deliberately mid-to-upper because H2 5 and H2 7 are the two sections nothing on page 1 covers.
- FAQ: ~180 words across 5 questions (listed for completeness; NOT part of the gated total)

---

## Intent match (self-check)

`research/serp.md` §Search intent records: dominant informational (how-to / definitional), with a secondary "does it actually work" evaluative thread, and a secondary commercial (timer) intent evidenced only by CPC and one app homepage, not by any ranking article.

This outline matches it: explanatory H2s (1, 2, 4, 6) carrying one numbered how-to section (H2 3) inside them, the evaluative thread given its own honest H2 (4) plus the adaptation section (5) that the AI Overview's own headings imply Google expects and no ranking page delivers, and the timer roundup (7) folded in as a secondary, clearly-marked section rather than the spine. Structure fits the observed intent; no correction needed.

---

## Open questions (recorded, no longer block on a human gate)

- [ ] The single most on-point study for this post's central question (timer-driven vs self-regulated breaks, `10.1111/bjep.12593`, British Journal of Educational Psychology) is paywalled and returns HTTP 403, so H2 2 and H2 5 argue from the Illinois attention research plus real user reports instead. If a future run gets institutional access, H2 5 gains a much stronger citation.
- [ ] X produced no criticism at all across 45 posts and their replies, while Reddit's two highest-engagement threads for the identical keyword are both "I hate this". The post uses this contrast in H2 5's framing as evidence of what each platform surfaces, never as proof that no critics exist on X.
- [ ] Verywell Mind's NICHD (.gov) citation is a dead URL as of 2026-09-08 (DNS failure) and two of its Wiley DOIs are paywalled, so three otherwise-promising sources are unusable. Resolved at plan review by adding PMC6406620 for H2 6; recorded here so a future run does not re-chase them.

---

## Changes requested by human (log)

None. Stage 2 has no human gate; the outline closes on the editor's judgment and any structural problem surfaces as a Stage 3b reviewer issue.
