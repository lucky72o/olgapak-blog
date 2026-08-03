# SERP Research: time blocking

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP via the resolved Chrome MCP. Never hallucinate, cite every claim.

## Query metadata

- Search engine: Google
- Query used: time blocking
- Date searched: 2026-07-29
- Top N results studied: 7 (of 8 rank slots; rank 5 was a duplicate todoist.com anchor-link result, not deep-fetched)
- Browser session: not specified in raw files
- Any SERP features observed: people_also_ask (per `_serp.json` `serpFeatures`). No AI Overview, no Google Shopping recorded.

Note: `_serp_selection.md` IS on disk in `_raw/` and records the editor's rationale (it was temporarily absent when this analysis ran, due to a path error since corrected). It confirms what this analysis inferred: ranks 1,2,3,4,6,7,8 selected, rank 5 skipped as a duplicate of rank 1's URL with a text-fragment anchor. It also records the link policy — ranks 1/4/6/7 (todoist, asana, meistertask, habitstrong) are forbidden external-link targets; ranks 2/3 (Wikipedia, Stanford CTL) are citable.

## SERP shape (inferred)

mixed

Reasoning: The SERP blends a definitional/encyclopedic entry (Wikipedia, rank 2), an institutional how-to (Stanford CTL, rank 3), long-form hybrid explainer-plus-how-to guides from productivity SaaS vendors (Todoist rank 1, Asana rank 4, MeisterTask rank 7), a psychology-framed how-to (Verywell Mind, rank 6), and a single pros/cons opinion piece (HabitStrong, rank 8). No pure listicle format appears; every result combines "what is it" + "how to do it" + method comparisons in one page.

## Search intent

- Dominant intent: informational
- Evidence: 6 of 7 analyzed results are long-form explainer/how-to hybrids (Todoist 5,469 words, Asana 2,793 words, MeisterTask 3,860 words, Verywell Mind 1,750 words, Stanford CTL 662 words) each opening with "what is time blocking" before moving to step-by-step instructions; Wikipedia (rank 2) is purely definitional/encyclopedic; only `people_also_ask` is present as a SERP feature (no AI Overview, no Shopping, no commercial pack). No vendor is selling a "time blocking product" directly — Todoist, Asana, and MeisterTask are task-management tools using the topic as content marketing, not commercial landing pages.
- Secondary intent: navigational/commercial-adjacent for the SaaS results (Todoist, Asana, MeisterTask), each of which pivots at the end toward "time blocking with [our tool]" — but this is a soft CTA layered on top of informational content, not the page's organizing structure.
- Implication for our post structure: This confirms the brief's `informational_pillar` angle is correct — the live SERP is predominantly hybrid explainer + step-by-step, NOT numbered listicles. However, note that most competitors (Todoist, Asana, MeisterTask) fold the "who should/shouldn't do this" and "vs. timeboxing/task batching/day theming" disambiguation INTO the main explainer rather than as separate sections, and only HabitStrong (rank 8) treats "should you do this at all" as the dominant frame of an entire piece. Our post's segmented (what/why/how/who/when) structure with a genuine step-by-step block matches this shape well; the differentiator is depth on the "collapses by 11am" failure mode and the "who it doesn't suit" honesty, both of which the top 4 results underplay.

## Selected results analyzed

### 1. Time Blocking - Your Complete Guide to More Focused Work
- URL: https://www.todoist.com/productivity-methods/time-blocking
- Domain: todoist.com
- SERP rank (1-10): 1
- DR: not available from raw data
- Word count (approximate): 5,469
- Title formula: informational (guide framing, no "best"/year/list modifier)
- Hook style: Opens with a Cal Newport pull-quote ("A 40 hour time-blocked work week... produces the same amount of output as a 60+ hour work week pursued without structure") then frames the problem as "if you don't control your schedule, it will control you."
- Top H2/section headings:
  - What is time blocking?
  - Time blocking methods (task batching, day theming, time boxing as "cousins")
  - Why is time blocking so effective?
  - But will time blocking work with my job?
- Key data points cited: Cal Newport quote (attributed, sourced via `calnewport.com` and a Virgin Radio UK interview link); reference to "Making the Best Laid Plans Better: How Plan-Making Increases Follow-Through" (researchers Rogers, Milkman, John, and Norton) — cited but the externalLinks entry for this title points to `k-froot.com`, an unrelated/likely broken domain, so the citation cannot be verified as a real primary source from this data.
- Strengths: Most thorough disambiguation of the four terms (time blocking, task batching, day theming, time boxing) in a single comparison table with example phrasing for each; explicitly addresses reactive/unpredictable jobs ("will time blocking work with my job?") with a Newport quote about blocking "periods of open-ended reactivity."
- Gaps/weaknesses: No treatment of neurodivergent readers; "pitfalls" section is a bullet list with no depth on the "collapses by 11am" scenario; heavy internal-linking/CTA structure (quiz, Todoist product mentions) dilutes informational focus toward the end.

### 2. Timeblocking (Wikipedia)
- URL: https://en.wikipedia.org/wiki/Timeblocking
- Domain: en.wikipedia.org
- SERP rank (1-10): 2
- DR: allowlist/institutional (Wikipedia)
- Word count (approximate): 1,384
- Title formula: informational (single-term definitional)
- Hook style: Direct dictionary-style definition ("Timeblocking... is a productivity technique for personal time management in which a period of time... is divided into smaller segments or blocks").
- Top H2/section headings:
  - History
  - Method
  - Benefits
  - Scientific support
  - Criticisms
  - Relationship with other methods
  - Notable users
- Key data points cited: "one study finding that professionals who timeblock accomplish 53% more tasks than otherwise" — cited to footnotes [9][10] (Entrepreneur/Rampton article and Quantime), not a named peer-reviewed study; Cal Newport 40-hour/60-hour productivity claim (same as Todoist's, attributed to Newport directly, footnote [6] pointing to the RescueTime blog "Time blocking 101" post); "Scientific support" section is vague ("Research... suggests," "Studies... also report") with a single footnote [11] to Monsell's 2003 "Task switching" (Trends in Cognitive Sciences) — a real academic citation, though the surrounding text over-generalizes what that single paper shows.
- Strengths: Only source with historical grounding (Bronze Age calendars, Benjamin Franklin as "one of the early adopters," footnote to a Ladders.com article on Franklin's schedule); clean "Relationship with other methods" section explicitly distinguishing timeboxing ("a variant of timeblocking used in project management") from the Pomodoro technique; lists notable users (Franklin, Jack Dorsey, Marc Andreessen, Cal Newport, Bill Gates) each with sourced footnotes.
- Gaps/weaknesses: No actionable how-to; "Criticisms" section is thin (just David Allen's reversal on calendar-only scheduling) and does not address the ADHD/neurodivergent critique visible on Reddit.

### 3. Weekly Planning: Time Blocking Method
- URL: https://ctl.stanford.edu/weekly-planning-time-blocking-method
- Domain: ctl.stanford.edu
- SERP rank (1-10): 3
- DR: allowlist/institutional (Stanford .edu)
- Word count (approximate): 662
- Title formula: how_to
- Hook style: Practical, low-hype opener: "Creating a weekly calendar can help you stay intentional about how you're spending your time – and reduce decision fatigue."
- Top H2/section headings:
  - A step-by-step time blocking example
  - Address / Make an Appointment / Resources (site furniture, not content)
- Key data points cited: None (no statistics); purely procedural advice.
- Strengths: Explicitly recommends buffer time as a *quantified* rule — "Leave yourself buffer time! Aim for at least 15 hours of entirely 'blank' space" per week — the only competitor result with a concrete, numeric buffer recommendation. Worked example is genuinely student-specific (Spanish homework, CS PSet, Psych readings) matching this blog's audience. Frames the calendar explicitly as "a flexible decision-making tool," directly countering rigidity.
- Gaps/weaknesses: Extremely short, no disambiguation of time blocking vs. other methods, no discussion of failure modes or who it doesn't suit, no deep-work/Parkinson's Law framing. Note: this domain also links internally to a "Neurodiversity" resource (`ctl.stanford.edu/students/neurodiversity`) though that page was not part of this deep-fetch and its content is unverified from this data.

### 4. Time Blocking: Complete Guide for Focused Work & Rest
- URL: https://asana.com/resources/what-is-time-blocking
- Domain: asana.com
- SERP rank (1-10): 4
- DR: not available from raw data
- Word count (approximate): 2,793
- Title formula: informational (guide framing)
- Hook style: Relatable, low-hype ("In the past week, you've probably reprioritized your tasks, rescheduled your calendar, and maybe even worked late...").
- Top H2/section headings:
  - What is time blocking?
  - How time blocking works
  - Why time blocking works
  - Who should try time blocking?
  - Time blocking methods to try
  - 7 tips to start time blocking your schedule today
- Key data points cited: Cites "Gallup's State of the Global Workplace 2025 report" for employee well-being/burnout claims (named, plausible primary source, though no URL provided in body text or externalLinks — not independently verifiable from this file); explicitly names Parkinson's Law with a Wikipedia link (`en.wikipedia.org/wiki/Parkinson%27s_law`) and Cal Newport with a Wikipedia link (`en.wikipedia.org/wiki/Cal_Newport`); FAQ states "Is time blocking good for ADHD? Yes... provides visual structure that reduces overwhelm. The key is to stay flexible and build buffer time between blocks" — asserted, no citation.
- Strengths: Best "vs." structure of any competitor — three explicit named H3 comparisons: "Time blocking vs. timeboxing," "Time blocking vs. task batching," "Time blocking vs. time tracking," each with a compact aspect/example comparison table. Every one of the "7 tips" pairs a tip with a named "Potential pitfall," which is the closest any competitor gets to the "plan collapses by 11am" failure mode — e.g. tip 6 "Allow for unexpected interruptions" explicitly states "Time blocking fails when you don't have room for surprises." FAQ directly answers "Can I use time blocking if my job is unpredictable?" ("Yes, you can schedule blocks for reactive work and use 'floating' blocks...").
- Gaps/weaknesses: The ADHD claim is bare-asserted (no source); "ADHD" is mentioned only once in an FAQ answer, not developed; ultimately steers to Asana product CTAs.

### 5. Want to Be More Productive? Use Time Blocking to Manage Your Day With Ease
- URL: https://www.verywellmind.com/how-to-use-time-blocking-to-manage-your-day-4797509
- Domain: verywellmind.com
- SERP rank (1-10): 6
- DR: not available from raw data (health/psychology publisher, editorially fact-checked per byline "Fact checked by Andrea Rice")
- Word count (approximate): 1,750
- Title formula: problem/how_to hybrid ("Want to Be More Productive? Use Time Blocking...")
- Hook style: Names the myth of multitasking directly as the villain, then pivots to time blocking (aka "time-chunking," "monotasking") as the fix.
- Top H2/section headings:
  - Why Time Blocking Actually Helps Us Get Stuff Done
  - Only 2.5% People Can Really Multitask—Most Just Believe They Can
  - How to Use Time Blocking (Plus an Example Schedule)
- Key data points cited: "only about 2.5% of people are able to multitask effectively" — footnoted to a real DOI-linked study, "Supertaskers: Profiles in extraordinary multitasking ability" (`doi.org/10.3758/PBR.17.4.479`), a genuine primary source; "a 2013 study at the University of Utah found that people who try to juggle multiple tasks at once are more easily distracted, less productive, make more errors, and score lower on recall tests" — named institution + year but no direct DOI link isolated in the externalLinks list for this specific claim (multiple multitasking-cognition DOIs are present in the link list generally, e.g. `doi.org/10.1073/pnas.0903620106` "Cognitive control in media multitaskers," which is a plausible match but not confirmable as the exact "2013 Utah" study from this data alone).
- Strengths: This is the only competitor result to source a specific, citable, DOI-backed statistic rather than an asserted round number — directly useful given the brief's "no unsourced productivity statistics" rule. Provides a fully worked example schedule (6 a.m.–10 p.m., hour-by-hour) useful as a "what a filled-in day looks like" reference. Explicit "Protect Your Time" section treats time blocks like real meetings — useful language for the failure-mode section.
- Gaps/weaknesses: No disambiguation of time blocking vs. timeboxing/task batching/day theming at all; no discussion of who it doesn't suit; psychology framing is strong but the piece doesn't address the "collapses by 11am" failure mode directly.

### 6. Time blocking: what it is, how it works and how to use it
- URL: https://www.meistertask.com/blog/time-blocking
- Domain: meistertask.com
- SERP rank (1-10): 7
- DR: not available from raw data
- Word count (approximate): 3,860
- Title formula: informational (guide framing)
- Hook style: "We all know the feeling of a runaway workday, where the hours fly by but the to-do list stays just as long."
- Top H2/section headings:
  - What is the time blocking method?
  - What are the benefits of time blocking?
  - How to apply time blocking
  - How is time blocking different from time boxing?
  - How is time blocking different from task batching?
  - When is time blocking helpful, and when is it not?
  - 5 time blocking pitfalls to watch out for
- Key data points cited: "over 1,500 monthly searches for 'time management techniques'" (self-serving SEO stat, no source, bare-asserted); "20% of the US population" are "chronic procrastinators" — bare-asserted, no citation, though phrased near a reference to "An MIT study" on self-imposed deadlines that IS somewhat specific (no link provided in externalLinks, unverifiable from this data — treat as bare-asserted); "context switching... costs as much as 40% of your productive time" — bare-asserted, exactly the kind of uncited number the brief instructs to flag and cut; "A good rule of thumb is to schedule no more than 6 focused hours in an 8-hour day" — asserted operational guidance, not sourced as research but presented as a practical rule, useful as a concrete block-sizing number regardless of citation status.
- Strengths: Best "who it's for / who it's not for" treatment among the SaaS competitors — uses named persona case studies (Richard the manufacturing administrator: yes; Liza the production-line worker: no; Hannes the bank senior manager: yes; Ellis the bank teller: no) to show reactive/physical-first-line roles as poor fits. "5 time blocking pitfalls" section explicitly names "Falling into the planning fallacy trap" and "Over-scheduling your day" with concrete remediation — the closest match to the brief's required "plan collapses by 11am" failure mode of any competitor. States plainly: "If your job is extremely reactive by design and you don't work in a digital environment, time blocking in the traditional sense isn't a practical solution."
- Gaps/weaknesses: Multiple bare-asserted statistics (flagged above) that must NOT be repeated per the brief's avoid-list; no neurodivergent-specific discussion; long product-pitch tail (MeisterTask Agenda/Google Calendar integration) not relevant to our post.

### 7. Pros and cons of time blocking. Should you do it or not?
- URL: https://www.habitstrong.com/time-blocking-pros-cons/
- Domain: habitstrong.com
- SERP rank (1-10): 8
- DR: not available from raw data
- Word count (approximate): 1,320
- Title formula: problem (framed as a genuine yes/no decision, not a guide)
- Hook style: First-person practitioner account: "I have been time blocking my day in 60-minute chunks for several months now."
- Top H2/section headings:
  - Advantages of time blocking
  - Disadvantages of Time Blocking
  - Find the right balance
- Key data points cited: None — this piece is entirely first-person experiential, no statistics or external studies cited at all (only 3 external links, none evidentiary — YouTube video, own YouTube channel, own Telegram channel).
- Strengths: This is the SERP's only genuinely critical, non-vendor voice, and it maps closely to two of the brief's core requirements. On the failure mode: "One mistake that I made when I started time-blocking was to plan every minute of the day. I soon realized that that just won't cut it," followed by a concrete fix ("I schedule about 4-5 hours for my most important, and I leave another 2-3 hours loose"). On who it doesn't suit / spontaneity: "Lack of spontaneity... It can be difficult to be flexible and go with the flow if you have your day planned out to the minute." Recommends starting small: "Start by time blocking just 2-4 hours a day."
- Gaps/weaknesses: No sourcing of any kind (pure opinion/anecdote — nothing here should be cited as a "fact," only usable as an illustrative first-person pattern if attributed as such); no treatment of the four-term disambiguation; site itself has 3 "Similar Posts" teasers referencing "Why structured routines break down" and "You're doing Productivity wrong" (not fetched, titles suggest overlapping critical territory but content unverified).

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| time blocking / time-blocking | 7 | appears in title of every analyzed result |
| guide / complete guide | 3 | Todoist, Asana ("Complete Guide"), implicitly MeisterTask ("what it is, how it works") |
| what is / what it is | 2 | Wikipedia-style definitional framing (implicit in Wikipedia's title itself; explicit in MeisterTask's H1) |
| pros and cons / should you | 1 | HabitStrong only — sole critical-framing title |
| year (2025) | 1 | Asana's `<title>` tag includes "[2025]" though not the visible H1 |
| best | 0 | no "best" modifier anywhere in this SERP |
| list / numbered | 0 | no numbered-listicle titles |

## Audience inferences

Based on the shape of the SERP and the angle competitors take:

- Primary audience: knowledge workers and students seeking a general productivity method, per the mix of SaaS-vendor guides (workplace-oriented) and the Stanford CTL result (explicitly student-oriented, with worked examples like "CS PSet due Monday night"). This matches the brief's student/early-career emphasis.
- Secondary audience: people who already tried time blocking and are troubleshooting it — evidenced indirectly by the SERP's heavy "pitfalls"/"when it's not helpful" sections (Asana's per-tip pitfalls, MeisterTask's "5 pitfalls," HabitStrong's entire premise) even though this is an informational head-term query, not a "time blocking not working" long-tail query.
- Reader knowledge level: beginner-to-intermediate — every competitor opens with a "what is time blocking" definition regardless of depth, confirming readers arriving on this exact-match query still need the term explained from scratch.
- Reader intent: primarily informational, secondarily "should I do this" (evaluative) — HabitStrong's rank-8 presence and the "when is it helpful / not helpful" sections in Asana and MeisterTask signal that a meaningful slice of searchers want a decision framework, not just a definition.

## Angle opportunities

- No competitor combines disambiguation (time blocking vs. timeboxing vs. task batching vs. day theming) with a genuinely worked, buffer-padded first week setup AND an explicit "who it doesn't suit" section — Todoist has the best disambiguation table but weak audience-fit discussion; MeisterTask has the best audience-fit personas but the weakest disambiguation (only 2 of 4 terms, no day theming comparison).
- The neurodivergent angle is completely absent from the entire top-8 SERP (not one competitor mentions ADHD substantively — Asana's single unsourced FAQ line is the only trace, and Wikipedia/Stanford don't touch it at all). This is a wide-open gap directly matched by the Reddit research's strongest thread (r/AuDHDWomen, 1,365 upvotes).
- No competitor sources a real, named study for "context switching costs X%" or similar productivity-loss statistics — MeisterTask's 40% context-switching claim and 1,500-searches claim are bare-asserted, and Wikipedia's 53%-more-tasks claim traces to a non-academic Entrepreneur article, not a study. Verywell Mind's 2.5%-multitasking DOI citation is the SERP's only genuinely verifiable statistic. Our post can differentiate by either omitting unsourced numbers entirely or explicitly noting when a number is anecdotal vs. researched — a level of statistical honesty no competitor here demonstrates.
- Only HabitStrong and Stanford CTL give concrete numeric guidance (Stanford: 15 hours/week blank buffer; HabitStrong: block 4-5 hours important + 2-3 hours loose, start with 2-4 hours/day). A post that synthesizes concrete, numbered buffer/block-length guidance as a standalone "how much to plan" section would out-specify the SaaS guides, which mostly stay qualitative ("pad your schedule," "leave buffer time").

## Avoid pitfalls

- Don't repeat the "40-hour time-blocked week = 60-hour unstructured week" Cal Newport quote as if it's a controlled study finding — it appears verbatim in both Todoist and Wikipedia already; it's Newport's own estimate ("I estimate"), not measured data, and using it a third time adds nothing differentiating.
- Don't cite the bare "40% context switching" or "53% more tasks" or "1,500 monthly searches" figures — per the brief's avoid-list, these are unsourced or thinly-sourced numbers already circulating uncredited across this SERP (MeisterTask, Wikipedia via a non-peer-reviewed source respectively) and repeating them would compound the exact pattern this post is meant to correct.
- Don't lead with hustle-culture examples (Elon Musk's "5-minute increments," Jack Dorsey running two companies) as the hook — Todoist and Wikipedia both foreground these, and the brief explicitly forbids "grind harder" / "4am-CEO-calendar" framing.

## Use-in-post facts

### Statistics
- "Only about 2.5% of people are able to multitask effectively," verywellmind.com citing "Supertaskers: Profiles in extraordinary multitasking ability," DOI: https://doi.org/10.3758/PBR.17.4.479 — genuinely sourced, safe to use with attribution. Source: https://www.verywellmind.com/how-to-use-time-blocking-to-manage-your-day-4797509
- BARE-ASSERTED, DO NOT USE AS FACT: "context switching... costs as much as 40% of your productive time," no citation given. Source: https://www.meistertask.com/blog/time-blocking
- BARE-ASSERTED, DO NOT USE AS FACT: "professionals who timeblock accomplish 53% more tasks than otherwise," Wikipedia footnotes this to an Entrepreneur.com article and a Quantime philosophy page, neither of which is a peer-reviewed study. Source: https://en.wikipedia.org/wiki/Timeblocking
- BARE-ASSERTED, DO NOT USE AS FACT: "20% of the US population" are chronic procrastinators; "An MIT study" on self-imposed deadlines is named but not linked/verifiable. Source: https://www.meistertask.com/blog/time-blocking
- Stanford CTL's concrete buffer recommendation: "Aim for at least 15 hours of entirely 'blank' space" per week — presented as institutional practical guidance, not a research statistic; safe to use as a named-source recommendation (attribute to Stanford CTL). Source: https://ctl.stanford.edu/weekly-planning-time-blocking-method

### Quotes
- "A 40 hour time-blocked work week, I estimate, produces the same amount of output as a 60+ hour work week pursued without structure," Cal Newport (author of Deep Work), quoted identically by both Todoist and Wikipedia — attribute as Newport's own estimate, not a study finding. Source: https://www.todoist.com/productivity-methods/time-blocking and https://en.wikipedia.org/wiki/Timeblocking
- "Periods of open-ended reactivity can be blocked off like any other type of obligation," Cal Newport, on time blocking for reactive jobs. Source: https://www.todoist.com/productivity-methods/time-blocking
- "As Parkinson's Law states, 'work expands so as to fill the time available for its completion,'" Asana, linking to Wikipedia's Parkinson's Law entry as the term's primary reference. Source: https://asana.com/resources/what-is-time-blocking
- "One mistake that I made when I started time-blocking was to plan every minute of the day. I soon realized that that just won't cut it," HabitStrong (Rajan Singh), first-person practitioner account of the plan-collapses-by-11am failure mode. Source: https://www.habitstrong.com/time-blocking-pros-cons/
- "If your job is extremely reactive by design and you don't work in a digital environment, time blocking in the traditional sense isn't a practical solution," MeisterTask, on who time blocking doesn't suit. Source: https://www.meistertask.com/blog/time-blocking

### Named examples
- Richard (manufacturing administrator) uses time blocking successfully for inventory management/quality control; Liza (production-line worker) cannot use it because "the work is physical — with each step sometimes taking only seconds." MeisterTask's persona pair illustrating who does/doesn't suit the method. Source: https://www.meistertask.com/blog/time-blocking
- Hannes (senior banking manager) uses time blocking for deep work/complex analysis; Ellis (bank teller) cannot because "day-to-day work involves working face-to-face with customers... and can't be planned in advance." Source: https://www.meistertask.com/blog/time-blocking
- Benjamin Franklin, "known to be an early adopter" of time blocking, "avidly detailed the activities he would undertake every hour of the day." Wikipedia footnotes this to a Ladders.com article, "10 lessons from Benjamin Franklin's daily schedule." Source: https://en.wikipedia.org/wiki/Timeblocking (primary Franklin source itself not directly cited by Wikipedia — see Citations harvested section below)

## Competitor product mentions

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| Todoist | 1 (self) + referenced as alternative in reddit discussion (out of scope here) | task manager positioned as the calendar-pairing tool for time blocking |
| Asana | 1 (self) | project/work management tool positioned for teams doing time blocking |
| MeisterTask | 1 (self) | Kanban-style task tool with Google Calendar sync for time blocking |
| RescueTime | 1 (mentioned by Todoist as a time-tracking tool to "find your most productive hours") | time-tracking add-on, not competing directly |
| Toggl | 1 (same, mentioned by Todoist) | time-tracking add-on |
| Clockwise | 1 (mentioned by Asana for auto-scheduling around meetings) | meeting-scheduling automation tool |

## Citations harvested from competitors

Per the brief's link policy: ranks 1, 4, 6, 7 (todoist.com, asana.com, meistertask.com, habitstrong.com) are FORBIDDEN as external link targets. Wikipedia (rank 2) and Stanford CTL (rank 3) are allowlist/institutional and MAY be cited directly.

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://doi.org/10.3758/PBR.17.4.479 | https://www.verywellmind.com/how-to-use-time-blocking-to-manage-your-day-4797509 | "Only about 2.5% of people are able to multitask effectively" ("Supertaskers: Profiles in extraordinary multitasking ability") | primary_source |
| https://en.wikipedia.org/wiki/Timeblocking | (this blog directly, no intermediary needed — rank 2 is itself allowlist) | Full definitional/history/criticism treatment of time blocking, incl. Benjamin Franklin and Cal Newport | auth_allowlist |
| https://ctl.stanford.edu/weekly-planning-time-blocking-method | (this blog directly — rank 3 is itself allowlist) | Step-by-step time blocking example and the 15-hour buffer recommendation | auth_allowlist |
| https://en.wikipedia.org/wiki/Parkinson%27s_law | https://asana.com/resources/what-is-time-blocking | "Work expands so as to fill the time available for its completion" (Parkinson's Law) | auth_allowlist |
| https://en.wikipedia.org/wiki/Cal_Newport | https://asana.com/resources/what-is-time-blocking | Background on Cal Newport as originator of "deep work" and time-blocking proponent | auth_allowlist |
| https://www.theladders.com/career-advice/lessons-from-benjamin-franklins-daily-schedule-that-will-double-your-productivity | https://en.wikipedia.org/wiki/Timeblocking | "10 lessons from Benjamin Franklin's daily schedule that will double your productivity" — Wikipedia's own source for the Franklin claim | claim_only_in_competitor — this is a secondary listicle interpretation of Franklin's schedule, not Franklin's primary schedule document itself; usable as a named source if attributed, but not a true primary source. Editor should decide whether to link it or seek Franklin's actual schedule image/primary transcription independently. |
| https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/ | https://en.wikipedia.org/wiki/Timeblocking | Cal Newport's own blog post, "Deep Habits: The Importance of Planning Every Minute of Your Work Day" — Wikipedia's footnote [17] for "Cal Newport spends 20 minutes each evening timeblocking his next day" | primary_source (Newport's own site, directly relevant to the "Cal Newport / Deep Work" primary-source need flagged in the brief) |
| https://www.forbes.com/sites/kevinkruse/2017/04/19/why-highly-productive-people-use-time-blocking/ | https://en.wikipedia.org/wiki/Timeblocking | "Why Highly Productive People Use 'Time Blocking'" — Wikipedia's footnote [19] | auth_allowlist (Forbes is commonly allowlisted as a major publication; editor should confirm against the actual allowlist doc) |
| https://www.cnbc.com/2018/08/13/the-time-management-strategy-jack-dorsey-uses-for-twitter-and-square.html | https://en.wikipedia.org/wiki/Timeblocking | Jack Dorsey's day-theming schedule, quoted directly ("On Monday... I focus on management...") | auth_allowlist (CNBC, major publication) |
| https://calnewport.com/my-new-book-slow-productivity/ | https://www.todoist.com/productivity-methods/time-blocking (FORBIDDEN as link target itself, but the destination is independently reachable) | Cal Newport's own site promoting "Slow Productivity," source for the "Slow Productivity" book Newport quote about the "sweet spot" pace | primary_source (Newport's own domain; reachable independently of the forbidden Todoist link) |
| https://k-froot.com/ | https://www.todoist.com/productivity-methods/time-blocking | Anchor text claims this is "Making the Best Laid Plans Better: How Plan-Making Increases Follow-Through" (Rogers, Milkman, John, Norton) but the URL resolves to an unrelated-looking domain (`k-froot.com`) — likely a broken/mislabeled link in Todoist's own page. | claim_only_in_competitor — do not treat as a usable primary source; the actual academic paper (a real, findable publication in this research area) would need to be located independently if this claim is used. |

Per the brief: Cal Newport / Deep Work primary sources are best reached via `calnewport.com` directly (both `calnewport.com/my-new-book-slow-productivity/` and `calnewport.com/blog/2013/12/21/deep-habits-...` are Newport's own domain, harvested above from Wikipedia's and Todoist's link lists respectively). No result in this SERP set independently cites a standalone, verifiable primary source for Benjamin Franklin's actual schedule (only secondary listicle interpretations were found); the editor may need to locate Franklin's autobiography or a documented image of his schedule independently if that primary source is required.

## Open questions for editor

- ~~No `_serp_selection.md` on disk~~ **RESOLVED (editor, post-analysis):** the file was written to the wrong tree during the run and has been restored to `_raw/_serp_selection.md`. Its recorded rationale matches this analysis's inference exactly (7 of 8 selected; rank 5 skipped as a text-fragment duplicate of rank 1). No open question remains.
- The MIT study on self-imposed deadlines (referenced by MeisterTask near the "20% chronic procrastinators" claim) and the "2013 University of Utah" multitasking study (referenced by Verywell Mind) are both named with enough specificity that they likely exist as real research, but neither is directly linked/traceable to a specific DOI in the raw externalLinks data — if either is needed as a citable stat, it should be located independently rather than assumed from this SERP data.
- DR (Ahrefs) values were not available in any of the 7 raw files; "rank-1 low DR" positive-signal check could not be performed.
- Given the cannibalization guard: this SERP's disambiguation content (especially Todoist's table and Asana's three "vs." H3s) treats timeboxing as one of several "cousin" methods rather than as a fully separate concept — the editor should confirm the boundary drawn in `what-is-timeboxing` still holds, since none of these competitors draw as sharp a line as the brief wants (most define timeboxing as "same idea, smaller/more granular unit," which is compatible with, not contradictory to, this blog's existing framing).
