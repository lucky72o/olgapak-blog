# SERP Research: digital detox plan

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP via the resolved Chrome MCP. Never hallucinate, cite every claim.

## Query metadata

- Search engine: Google
- Query used: digital detox plan
- Date searched: 2026-08-03
- Top N results studied: 7 (of 9 captured; UK-localized SERP)
- Browser session: not recorded in raw files
- Any SERP features observed: None (`serpFeatures: []` in `_serp.json`)

## SERP shape (inferred)

`mixed` (how-to guides + one research review + one narrative feature + one day-count challenge)

Reasoning: the studied set blends practical how-to guides (Health in Mind, Lifeline, Nuffield Health, Everyday Health), one academic scoping review (PMC/NIH), one journalistic narrative experiment (The Guardian), and one structured day-count challenge (Regis, 30-day). No listicle format, no product pages, no shopping block.

Not `google-shopping-dominant` — no shopping results observed, keyword supports a blog post.

## Search intent

- Dominant intent: informational (how-to sub-intent)
- Evidence: 5 of 7 studied results are practical "how to do a digital detox" guides written by health/charity organizations (Health in Mind, Lifeline, Nuffield Health, Everyday Health); one is an academic research review (PMC); one is a narrative journalism feature (Guardian) that embeds a 7-day plan. No product pages, no comparison tables, no shopping block, no AI Overview detected.
- Secondary intent (if any): none strongly present — this is a single-intent informational SERP
- Implication for our post structure: lead with a genuinely actionable day-by-day structure — per `_serp_selection.md`, nobody in the top 9 owns a true day-by-day *plan* the reader can follow (Regis's 30-day challenge is the closest, but 30 days is a much harder sell than 7). This is the structural gap our post fills.

## Selected results analyzed

### 1. Digital Detoxing (Health in Mind)
- URL: https://health-in-mind.org.uk/resources/digital-detoxing/
- Domain: health-in-mind.org.uk
- SERP rank: 2
- DR: not available (Ahrefs extension not used in this capture)
- Word count (approximate): 971
- Title formula: informational
- Hook style: opens with a rhetorical question ("Is your screen stressing you out?") then normalizes the difficulty of stepping away
- Top H2/section headings:
  - Take care of your self-worth
  - Get your time back
  - Set clear boundaries
  - End the doomscroll
  - Sleep better
- Key data points cited: none (no externally-sourced stats; purely advice-based charity content)
- Strengths: names concrete tactics (do-not-disturb mode, journaling substitute, "I will not answer work calls between 5pm and 9am" boundary scripts, phone-on-other-side-of-room at bedtime)
- Gaps: no day-by-day structure at all, no mention of what to do after a slip, no acknowledgment that a cold-turkey week is hard to sustain

### 2. Digital Detox Strategies and Mental Health: A Comprehensive Scoping Review (PMC/NIH)
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
- Domain: pmc.ncbi.nlm.nih.gov (NIH — allowlist-class, safe to cite/link directly even though it's in the top 10)
- SERP rank: 3
- DR: not available
- Word count (approximate): 9,926 (only the introduction/methods portion was captured in `bodyText`; results/discussion beyond the first ~10,000 characters were truncated in the raw fetch)
- Title formula: data / academic
- Hook style: none (scientific abstract structure)
- Top H2/section headings:
  - Abstract
  - Introduction and background
  - Review
  - Conclusions
- Key data points cited:
  - "A total of 14 studies were found eligible, and data from these studies and their relevant references (totaling 640 citations) were extracted and synthesized" — source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
  - "Our findings suggest that digital detox interventions may alleviate depression and problematic internet use, and individuals with higher baseline symptom severity appear to derive higher benefits. However, the impact on broader outcomes such as life satisfaction and overall well-being remains variable" — the "mixed evidence" framing this post explicitly wants — source: same URL
  - "A systematic review and meta-analysis of 109 studies from 2012 to 2022 covering a total of 97,748 individuals estimated the global pooled prevalence of PSU [problematic smartphone use] at 37.1% (95% CI: 33.5%-40.8%)" — source: same URL
  - "A previous systematic review found that only about 30% of the eligible studies related to digital detox keywords across multiple databases were of high quality" — a caveat on evidence quality worth citing honestly — source: same URL
  - "As of December 2024, there was no Medical Subject Heading (MeSH) on PubMed for digital detox" — signals the term is still an emerging/informal category, not a defined clinical intervention — source: same URL
- Strengths: this is the single best citable source in the whole SERP for the honest "evidence is mixed" framing the brief specifically wants, and it's allowlist-class (NIH/.gov), so it can be linked directly
- Gaps: zero practical structure — a scoping review, not a how-to; not written for the reader who wants a plan

### 3. How to do a digital detox (Lifeline)
- URL: https://www.lifeline.org.au/get-help/support-toolkit/techniques-and-guides/how-to-do-a-digital-detox
- Domain: lifeline.org.au
- SERP rank: 4
- DR: not available
- Word count (approximate): 1,416
- Title formula: how_to
- Hook style: leads with a relatable direct quote from an unnamed contributor ("Sometimes, there'd be instances where I'd go to check a message and an hour later, I'm on social media" — Lily)
- Top H2/section headings:
  - How does screen time impact mental health and wellbeing?
  - How can a digital detox help me?
  - How to do a digital detox
  - Setting a digital detox goal
  - Strategies for a successful digital detox
  - Consider long-term changes
- Key data points cited:
  - "the average Australian spends four hours of their spare time each day watching TV or using devices... about 25% of your waking hours" — no external source linked, appears to be the org's own framing; not independently verifiable from this article — source: https://www.lifeline.org.au/get-help/support-toolkit/techniques-and-guides/how-to-do-a-digital-detox (mark as `claim_only_in_competitor`, do not cite as fact)
- Strengths: the only competitor result with an explicit "Consider long-term changes" section — i.e., a real answer to "what happens after the detox ends," which is exactly the day-8 gap the brief flags. Its goal-setting framework ("choose a specific behaviour...make a realistic plan") is solid and worth structurally differentiating from, not copying.
- Gaps: no ramp structure within the detox itself (it treats the whole detox as one block, not a day-by-day build), no explicit "what to do when you slip" guidance despite acknowledging "habit change is always hard"

### 4. 30-Day Digital Detox Challenge (Regis University)
- URL: https://www.regis.edu/news/2023/regis-life/11/digital-detox-challenge
- Domain: regis.edu (.edu — allowlist-class)
- SERP rank: 5
- DR: not available
- Word count (approximate): 629
- Title formula: how_to (numbered challenge)
- Hook style: direct address, "Are you up for the challenge?"
- Top H2/section headings:
  - Pre-Challenge Preparation
  - 30-Day Challenge Plan (H3s: Week 1 Awareness and Reduction, Week 2 Establishing Boundaries, Week 3 Digital Diet, Week 4 Mindful Tech Use)
- Key data points cited: none (no external stats; purely structural/prescriptive)
- Strengths: the only result in the whole SERP structured as an actual day-count plan with escalating steps (Day 1-3 → Day 4-7 → Day 8-10... one new behavior added roughly every 2-4 days). This is the closest structural precedent for our post and validates the "one small change per [period]" ramp approach.
- Gaps: 30 days is a much bigger ask than a reader searching "digital detox plan" typically wants to commit to upfront (per `_serp_selection.md`, this is exactly why our 7-day format is the differentiator); provides no fallback for missed days, and ends on "Day 29-30: Reflect and Plan" with no concrete post-challenge rules beyond "regularly assess your digital habits"

### 5. All you need to know before starting a digital detox (Nuffield Health)
- URL: https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you
- Domain: nuffieldhealth.com
- SERP rank: 6
- DR: not available
- Word count (approximate): 2,058
- Title formula: informational (FAQ-style)
- Hook style: relationship-management framing — "staying connected... can feel tiring"
- Top H2/section headings:
  - What is a digital detox?
  - What are the benefits of a digital detox?
  - How do I do a digital detox?
  - Are there health benefits to a digital detox?
  - How long should my detox last?
  - The facts and figures
- Key data points cited (each with the competitor's own outbound source, harvested below in "Citations harvested from competitors"):
  - "Britons spend more time looking at a screen than they do asleep" — cited to BBC News — source: https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you
  - "62% of us say they resent how much we use our phones" — cited to a Huffington Post UK poll writeup — source: same URL
  - "The average person gets 63.5 notifications a day" — cited to breakthetwitch.com, a low-credibility stats-aggregator site — source: same URL (do not cite this number; primary source unverifiable through this chain)
  - "Gaming addiction is now a recognised medical condition" — cited to BBC News — source: same URL
  - "As smartphone use increases, so does anxiety" — cited to a ScienceDirect journal article — source: same URL
- Strengths: recommends a graduated first-timer approach ("start small with half a day, or one day... if you're finding it beneficial by the end of your second day, you can always add time on") — validates a ramp-based structure over cold-turkey; also explicitly names the Friday-afternoon-to-Sunday-evening pattern as a common starting cadence
- Gaps: recommends a flat 2-day weekend detox as the default rather than a full week with daily escalation; "facts and figures" section is stat-heavy but several of its own citations trace to non-authoritative aggregator sites, which is itself a useful negative example (don't do this)

### 6. How to quit your tech: a beginner's guide to divorcing your phone (The Guardian)
- URL: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
- Domain: theguardian.com (allowlist-class major publication)
- SERP rank: 7
- DR: not available
- Word count (approximate): 4,852
- Title formula: informational / narrative
- Hook style: direct question to reader ("What's the first thing you do when you wake up?") followed by a first-person framing device
- Top H2/section headings:
  - The digital detox rules
  - The broadcaster / The journalist / The personal trainer / The record company boss / The entrepreneur / The scientist (per-subject case studies)
- Key data points cited:
  - Explicit 7-day escalating plan devised by Tanya Goodin (founder of "Time To Log Off," author of *Off*): Day 1 phone outside bedroom; Day 2 phone in a central location, not carried; Day 3 work email off phone; Day 4 one meal/event phone-free; Day 5 airplane mode as default; Days 6-7 full detox from Friday 7pm–Monday 8am — source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
  - Six real participants self-report before/after screen time and pickup counts (e.g., broadcaster Gemma Cairney: 4h06m/day and 57 pickups before, down to 3h00m/day and 17 pickups after) — source: same URL
  - Direct quote: "Going cold turkey is daunting, so the week eases you in gently — from cutting down on particular aspects of your phone use to getting used to leaving it behind from time to time" — Tanya Goodin — source: same URL
- Strengths: THIS is the closest structural precedent to our post's 7-day ramp concept, already validated by a major publication, and it explicitly rejects cold-turkey in favor of gradual escalation — strong evidence our angle is sound, not novel-for-novelty's-sake. Case studies show honest struggle (multiple participants report feeling "sleepy," "bored," "panicked," missing being reachable) — good realism to match, not exceed, in tone.
- Gaps: 8 years old (2018); no mention of what happens after day 7 (the case studies just end with before/after numbers, no keep-it-going rules); doesn't address what to do when a participant breaks the plan mid-week (none of the six seem to have a formal "slip" protocol, they mostly narrate guilt/rationalization in the moment)

### 7. How to Do a Digital Detox Without Unplugging Completely (Everyday Health)
- URL: https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/
- Domain: everydayhealth.com
- SERP rank: 9
- DR: not available
- Word count (approximate): 2,198
- Title formula: how_to (problem-framed: explicitly NOT cold turkey)
- Hook style: reassurance framing — "Your phone doesn't have to be on lockdown for you to preserve your peace of mind"
- Top H2/section headings:
  - 7 Ways to Do a Digital Detox (Without Pulling the Plug Entirely) — with H3 sub-steps (Schedule Time Away From Screens, Take Periodic Breaks, Downgrade Your Phone, Turn Off Your Phone at a Specific Time, Adjust Phone Settings to Limit Apps, Create No-Phone Areas, Reach Out to a Mental Health Professional)
- Key data points cited (all with the competitor's own outbound source, harvested below):
  - Quote from Carol Vidal, MD, PhD, MPH (Johns Hopkins): "Excessive technology use can take away time from activities such as sleep, exercise, and socializing, which are all important for well-being" — source: https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/
  - "A study from 2021 found that students who completed a social media detox reported positive changes to their mood, sleep, and anxiety" (explicitly noted as a small study, 68 participants) — cited to NIH/PMC — source: same URL
  - "Another study found that women who quit Instagram reported higher life satisfaction" (80 participants) — cited to PubMed — source: same URL
  - "People who didn't use [screen-time limit] features were more likely to experience problematic smartphone use and worse well-being than those who did" — cited to PubMed — source: same URL
- Strengths: this is the closest-angle competitor named in `_serp_selection.md` (a reset, not cold turkey) — its stance validates our post's premise, but it is a flat list of 7 tactics, not a day-by-day sequence, and it never tells the reader in what order or over what timeframe to apply them; explicitly labels both studies it cites as small (honest about evidence limits, similar to the PMC review's "mixed" framing)
- Gaps: no sequencing/timeline at all (a reader finishes this article with 7 disconnected tactics, not a plan); no slip-recovery guidance; no after-the-detox rules

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| digital detox | 7 | appears in nearly every title verbatim or close variant |
| how to | 3 | Health in Mind implicit, Lifeline, Everyday Health |
| guide | 1 | Guardian ("beginner's guide") |
| challenge | 1 | Regis (30-Day Digital Detox Challenge) |
| review / scoping review | 1 | PMC |
| plan | 0 | notably absent from every title in the studied set — no competitor titles the concept as a "plan" |

## Audience inferences

- Primary audience: overwhelmed, distraction-prone knowledge workers / students who feel their phone is eating their time and focus — matches the brief's target (students, early-career professionals, aspiring creators). The SERP mix of charity mental-health orgs (Health in Mind, Lifeline), workplace-adjacent health orgs (Nuffield), and a university student-life post (Regis) all converge on this same "stretched thin, self-aware, wants to change" reader.
- Secondary audience: readers drawn by the mental-health/wellbeing framing (anxiety, sleep, stress) rather than pure productivity — three of seven results (Health in Mind, Lifeline, Nuffield) are explicitly mental-health orgs, not productivity blogs.
- Reader knowledge level: beginner — every studied result assumes the reader has never structured a detox before and needs the basics explained (what is a digital detox, why do one, how long should it last).
- Reader intent: informational, with a practical "give me the steps" sub-intent — no comparison intent, no purchase intent (aside from Nuffield's "wellness retreats" aside, mentioned in passing, not a shopping pathway).

## Angle opportunities

- No competitor in the top 9 offers a true 7-day, day-by-day plan with progressive escalation AND an explicit slip-recovery step AND explicit after-day-7 rules — the Guardian's 7-day plan (Goodin's) comes closest structurally but stops at day 7 with no aftercare guidance, and none of the guides address slipping mid-week.
- The PMC review's honest "mixed evidence, benefits vary by baseline severity" finding is currently buried in a 9,926-word academic paper nobody outside researchers will read — surfacing it plainly ("the evidence on digital detox is genuinely mixed, and that's OK") in an accessible post is a differentiator most detox content avoids (competitors either oversell benefits or don't cite evidence quality at all).
- Reddit's r/digitalminimalism counterpoint thread ("digital detoxing doesn't make you productive") is a real, current objection none of the SERP competitors address — answering it honestly (a detox removes the escape hatch, it doesn't manufacture ambition) is a credibility-building angle no ranking competitor takes.
- Nuffield Health's own citation chain shows several popular "digital detox stat" numbers trace back to non-authoritative aggregator blogs (breakthetwitch.com, itstimetologoff.com) rather than real research — modeling honest sourcing discipline (only citing what traces to NIH/PubMed/BBC-tier sources) is a trust differentiator.

## Avoid pitfalls

- Generic listicles of "7 tips" with no sequencing (Everyday Health's structure) — already done, don't repeat a flat tactic list.
- Framing that implies eliminating technology entirely is the goal or that cold turkey is the "real" detox (implicit in Nuffield's "some people completely withdraw... this may not be possible or desirable for everyone" framing, and clearly present as a failure mode in Reddit's r/digitalminimalism accounts of relapse) — the brief explicitly rules this out, and several competitors already hint at its unsustainability without solving it.
- Vague, unsourced screen-time stats presented as fact (Lifeline's "25% of waking hours," several of Nuffield's aggregator-sourced numbers) — avoid inventing or reusing unverifiable stats; the brief also forbids invented statistics.

## Use-in-post facts

Verbatim quotes, concrete numbers, and named examples extracted from the SERP. Editor will curate these into `facts.md`.

### Statistics
- "A total of 14 studies were found eligible, and data from these studies and their relevant references (totaling 640 citations) were extracted and synthesized," scoping review of digital detox interventions, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
- "The impact on broader outcomes such as life satisfaction and overall well-being remains variable" (i.e., evidence on digital detox is mixed, not uniformly positive), source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
- "A systematic review and meta-analysis of 109 studies... estimated the global pooled prevalence of problematic smartphone use at 37.1% (95% CI: 33.5%-40.8%)," source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/
- "Only about 30% of the eligible studies related to digital detox keywords across multiple databases were of high quality" (evidence-quality caveat), source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11871965/

### Quotes
- "Going cold turkey is daunting, so the week eases you in gently — from cutting down on particular aspects of your phone use to getting used to leaving it behind from time to time," Tanya Goodin, founder of Time To Log Off, quoted in The Guardian, source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
- "Excessive technology use can take away time from activities such as sleep, exercise, and socializing, which are all important for well-being," Carol Vidal, MD, PhD, MPH, Johns Hopkins University School of Medicine, quoted in Everyday Health, source: https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/
- "It's soooo hard though — ok, but have you thought about the cost of inaction?" is a Reddit voice-of-customer line, not a SERP source; not included here (see research/reddit.md).

### Named examples
- The Guardian's 7-day escalating detox plan by Tanya Goodin (Time To Log Off founder, author of *Off*): Day 1 phone outside the bedroom overnight; Day 2 phone kept in a central location rather than carried; Day 3 work email removed from phone; Day 4 one phone-free meal/outing; Day 5 airplane mode as default; Days 6-7 full detox Friday 7pm to Monday 8am. Context: the single closest structural precedent to this post's 7-day plan, explicitly framed as a gentle ramp rather than cold turkey. Source: https://www.theguardian.com/technology/2018/jan/13/how-to-quit-your-tech-phone-digital-detox
- Regis University's 30-Day Digital Detox Challenge, structured in 4 weekly phases (Awareness & Reduction → Establishing Boundaries → Digital Diet → Mindful Tech Use) with sub-steps added every 2-4 days. Context: the only other day-count structured competitor; shows escalating-steps format works but at a much longer, harder-to-commit-to timeframe. Source: https://www.regis.edu/news/2023/regis-life/11/digital-detox-challenge

## Competitor product mentions

Products / tools that appear across multiple SERP results.

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| Built-in phone screen-time tools (iOS Screen Time / Android Digital Wellbeing) | 3 (Lifeline, Nuffield, Everyday Health) | free, native, first tool recommended before any third-party app |
| Moment (screen-time tracker app) | 1 (Guardian) | tracking tool used by Tanya Goodin's participants to measure before/after usage |
| "Digital Detox" (digitaldetox.com, tech-free retreat company) | 1 (Everyday Health) | paid, in-person retreat option for people wanting a structured break |

## Citations harvested from competitors

Per `blog-craft.md` "Forbidden external links," we don't link to top-10 SERP URLs. Instead, we harvest each competitor article's `externalLinks` field and surface those primary sources here.

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://www.bbc.co.uk/news/technology-28677674 | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "Britons spend more time on tech than asleep, study suggests" | auth_allowlist (BBC) |
| https://www.bbc.co.uk/news/technology-42541404 | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "Gaming addiction is now a recognised medical condition" (WHO classification) | auth_allowlist (BBC) |
| https://www.sciencedirect.com/science/article/abs/pii/S0747563213003993 | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "Cell phone use/texting was negatively related to GPA and positively related to anxiety" | primary_source (peer-reviewed journal article via ScienceDirect) |
| https://pmc.ncbi.nlm.nih.gov/pmc/articles/PMC7366948/ | https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/ | research review: frequent technology use linked to attention-deficit symptoms, impaired social intelligence, disrupted sleep | auth_allowlist (NIH/PMC) |
| https://journals.sagepub.com/doi/full/10.1177/0963721417730833 | https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/ | active vs. passive social media use has different effects on connection | primary_source (Current Directions in Psychological Science, SAGE peer-reviewed journal) |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7717533/ | https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/ | "a study from 2021 found that students who completed a social media detox reported positive changes to mood, sleep, and anxiety" (n=68, noted as small) | auth_allowlist (NIH/PMC) |
| https://pubmed.ncbi.nlm.nih.gov/31851833/ | https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/ | "women who quit Instagram reported higher life satisfaction" (n=80, noted as small), published in Cyberpsychology, Behavior, and Social Networking | auth_allowlist (NIH/PubMed) |
| https://pubmed.ncbi.nlm.nih.gov/32354288/ | https://www.everydayhealth.com/emotional-health/how-to-do-a-digital-detox-without-unplugging-completely/ | "people who didn't use [screen-time limit] features were more likely to experience problematic smartphone use and worse well-being" | auth_allowlist (NIH/PubMed) |
| https://www.huffingtonpost.co.uk/2015/01/21/phone-addiction-poll_n_6513876.html | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "62% of us say they resent how much we use our phones" (poll) | claim_only_in_competitor (Huffington Post UK is a recognizable outlet but not on the standards allowlist; treat as forbidden per the "when in doubt" heuristic — a primary poll source was not independently locatable from this chain) |
| https://www.breakthetwitch.com/statistics-mobile-devices/ | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "average person gets 63.5 notifications a day"; "74% of mobile users 18-34 get an urge to check phone when bored" | claim_only_in_competitor (low-credibility stats-aggregator site, drop the specific numbers, do not cite) |
| https://www.itstimetologoff.com/digital-detox-facts/ | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | "average user checks phone once every 12 minutes"; "46% of Americans say they could not live without their smartphone" | claim_only_in_competitor (unverifiable aggregator site, drop) |
| https://cardinalclinic.co.uk/5-reasons-to-do-a-digital-detox/ | https://www.nuffieldhealth.com/article/how-a-digital-detox-can-help-you | general health benefits of a digital detox day | claim_only_in_competitor (private clinic marketing content, not independently authoritative) |
| https://support.apple.com/en-au/guide/iphone/iph24dcd4fb8/ios | https://www.lifeline.org.au/get-help/support-toolkit/techniques-and-guides/how-to-do-a-digital-detox | how to check screen-time on iPhone | auth_allowlist (official Apple developer/support docs) |
| https://support.google.com/android/answer/9346420 | https://www.lifeline.org.au/get-help/support-toolkit/techniques-and-guides/how-to-do-a-digital-detox | how to check screen-time on Android | auth_allowlist (official Google support docs) |

## Open questions for editor

- The PMC/NIH scoping review's `bodyText` capture cuts off partway through its results/discussion section (word count 9,926 but the visible extract stops mid-way through Table 2's study list). If the editor wants results/discussion-section findings beyond what's quoted here (e.g., specific effect sizes, the "mindful digital downtime → depression" pathway referenced in Figure 3's caption), a follow-up fetch of the full article may be needed.
- Rank 1 (nhs.uk drug-addiction page) and rank 8 (the Reddit thread) were correctly skipped per `_serp_selection.md` — rank 1 is off-topic, rank 8 is covered properly in `research/reddit.md` as `reddit-99-selfimprovement.json`. No action needed, noted for completeness.
- The Huffington Post UK poll number ("62% resent how much they use their phones") is a plausible, specific, attributable claim, but Huffington Post is not on the standards allowlist. The editor may want to independently verify whether a primary poll source (e.g., YouGov, the original pollster) exists before deciding whether to use this stat with a `[VERIFY:]` marker or drop it.
</content>
