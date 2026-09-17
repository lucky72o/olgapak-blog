# SERP Research: pomodoro technique

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: pre-fetched raw JSON at `research/_raw/` (Google SERP capture, not live browsing).

## Query metadata

- Search engine: Google
- Query used: `pomodoro technique`
- Date searched: 2026-09-08
- Top N results studied: 8 (of 15 captured; page 1 returned only 6 organic results, ranks 7-15 are page-2 organic)
- Browser session: not applicable (data pre-fetched by editor before this agent was spawned)
- Any SERP features observed: AI Overview, People Also Ask, Images, Videos, Short videos, Discussions and forums. No Google Shopping.

## SERP shape (inferred)

mixed (definitional + how-to, with a strong dissent counter-current)

Reasoning: Rank 1 is Wikipedia's definitional entry, rank 2 (Todoist) and rank 4/6 (university and ed-psych sites) are how-to guides, rank 7 (Verywell Mind) is a benefits-and-drawbacks explainer, and rank 8 is a peer-reviewed scoping review. No result is a "best tools" listicle and nothing sells timers on page 1, so this isn't a commercial/comparison shape despite the keyword's $2.04 CPC.

## Search intent

- Dominant intent: informational (how-to / definitional), with a secondary "does it actually work" evaluative thread running through the AI Overview and PAA.
- Evidence: 6 of 6 page-1 organic results are definitional or how-to content (Wikipedia, Todoist, official site, two university/study-skills pages); the AI Overview's own headings are "How It Works / Why It Helps / Where It Falls Short / How to Adapt It for ADHD"; PAA leads with "Is Pomodoro good for ADHD?" and "What are the disadvantages of Pomodoro?"; a Discussions-and-forums block surfaces a Reddit ADHD thread directly on the SERP. No Google Shopping block, no product-comparison pages on page 1.
- Secondary intent: commercial/product (timer recommendations), evidenced only by the CPC ($2.04) and by pomofocus.io ranking at 5 as an app homepage, not by any ranking article's content. Confirms the brief's read that "best timers" is additive, not the ranking angle.
- Implication for our post structure: lead with the how-to and honest effectiveness assessment (matching what's actually ranking and what Google surfaces in the AI Overview/PAA), then fold in the timer recommendations as a secondary, clearly-marked section rather than the spine of the post.

## Selected results analyzed

### 1. Pomodoro Technique (Wikipedia)
- URL: https://en.wikipedia.org/wiki/Pomodoro_Technique
- Domain: en.wikipedia.org
- SERP rank: 1
- DR: not available in raw data (no Ahrefs overlay captured)
- Word count (approximate): 859
- Title formula: informational
- Hook style: encyclopedic, opens with the flat definition and immediately gives the origin story (Cirillo, late 1980s, tomato-shaped kitchen timer) in the first two sentences.
- Top H2/section headings:
  - Description
  - Tools
  - Research
- Key data points cited:
  - "The original technique consists of deciding on the task, setting the timer (typically for 25 minutes), working on the task, taking a short break (typically 5-10 minutes) when the timer rings. This repeats until four pomodori are completed, after which a long break (typically 20 to 30 minutes) is taken." (`01-en-wikipedia-org.json`)
- Strengths (what they do well):
  - Neutral, citation-backed baseline every other result paraphrases; useful as the "official" step sequence to check our own how-to against.
- Gaps / weaknesses (what they miss):
  - No effectiveness discussion beyond a thin "Research" heading; no drawbacks, no adaptation guidance, no product recommendations. Purely definitional.

### 2. The Pomodoro Technique — Why it works & how to do it (Todoist)
- URL: https://www.todoist.com/productivity-methods/pomodoro-technique
- Domain: todoist.com
- SERP rank: 2
- DR: not available
- Word count (approximate): 3701
- Title formula: how_to / informational, mixed with vendor content marketing
- Hook style: playful direct address ("The secret to effective time management is...thinking in tomatoes"), then a qualifying checklist ("The Pomodoro Technique may be for you if you...") that pre-segments the reader before explaining the method.
- Top H2/section headings:
  - What is the Pomodoro Technique?
  - What is the history of the Pomodoro Technique?
  - Three Pomodoro Technique rules for maximum productivity
  - Does the Pomodoro Technique work?
  - Quick tips for Pomodoro-ing
  - How to Pomodoro with Todoist (product pitch)
- Key data points cited:
  - Three named rules: break down projects needing more than 4 pomodoros; batch small tasks under one pomodoro together; "once a Pomodoro is set, it must ring" (no interruptions, log them for later); overlearning during leftover time. (`02-todoist-com.json`)
  - Cites Tim Pychyl (Carleton University psychology professor, author of "Procrastination, Health, and Well-Being") on procrastination as emotion-avoidance. (`02-todoist-com.json`)
- Strengths (what they do well):
  - The strongest content competitor on this keyword: long, well-structured, covers rules most blogs skip (the "must ring" rule, overlearning), and pulls in an academic voice (Pychyl) for credibility.
- Gaps / weaknesses (what they miss):
  - No honest "who this doesn't work for" section; "Does it work?" answers with an unqualified "Yes" and consumer benefits, never engages the rigidity/flow-state objections that dominate Reddit. Ends in a product pitch (Todoist), which this blog should not mirror.

### 3. Pomodoro® Technique — Time Management Method (official site)
- URL: https://www.pomodorotechnique.com/
- Domain: pomodorotechnique.com
- SERP rank: 3
- DR: not available
- Word count (approximate): 607
- Title formula: transactional (product/program sales page)
- Hook style: authority framing ("Created by Francesco Cirillo") immediately followed by a correction of the common shorthand: "The timer is only the starting point. The full Pomodoro® Technique includes daily planning, interruption management, and effort estimation."
- Top H2/section headings:
  - Official Self-Paced Program
  - Start Free
  - For Companies & Teams
- Key data points cited:
  - Practitioner Program priced at $49/5 months (founding price, future $149); Certified Practitioner at $149/5 months (founding price, future $499). (`03-pomodorotechnique-com.json`)
  - Claims "Over two million people have already used the Pomodoro® Technique." (`03-pomodorotechnique-com.json`, meta description; self-reported, unverified)
- Strengths (what they do well):
  - The primary source for what the official technique includes beyond the timer (daily planning sheets, interruption logging, effort estimation) that most secondary blogs drop entirely.
  - Free downloadable sheets/quick-start guide.
- Gaps / weaknesses (what they miss):
  - Almost entirely a sales funnel for the paid program now; thin on the actual mechanics a beginner needs, and the "2 million people" claim has no citation.

### 4. The Pomodoro technique for focus (Birmingham City University)
- URL: https://www.bcu.ac.uk/exams-and-revision/time-management-tips/pomodoro-technique
- Domain: bcu.ac.uk (allowlist-class, .ac.uk)
- SERP rank: 4
- DR: not available
- Word count (approximate): 853
- Title formula: how_to / informational, aimed at students
- Hook style: direct definition + immediate relevance claim ("great for people with ADHD, or anyone who struggles to focus"), embedded video.
- Top H2/section headings:
  - What is the Pomodoro technique?
  - Why should I use the Pomodoro technique?
  - How does the Pomodoro method work?
  - Best Pomodoro apps for studying
  - Can the Pomodoro technique help with ADHD?
- Key data points cited:
  - ADHD FAQ answers "Yes!" citing short structured sessions, regular breaks against burnout, reduced procrastination via more-manageable study time (unsourced institutional claim, not a cited study). (`04-bcu-ac-uk.json`)
  - Names specific apps: Pomofocus, Be Focused, Focus To-Do, Forest, Pomodoro Kitty, Astrostation, Study With Me, Study Bunny. (`04-bcu-ac-uk.json`)
- Strengths (what they do well):
  - Directly serves the student half of this blog's audience; names a wide spread of apps, useful competitive-landscape signal for our "best timers" section.
- Gaps / weaknesses (what they miss):
  - Treats "good for ADHD" as an uncomplicated yes with no caveats or drawbacks; no mention of physical timers at all, app-only framing.

### 5. Using the Pomodoro Technique to Overcome Procrastination (EdPsyched)
- URL: https://www.edpsyched.co.uk/blog/pomodoro-technique-overcome-procrastination
- Domain: edpsyched.co.uk
- SERP rank: 6
- DR: not available
- Word count (approximate): 1109
- Title formula: problem / informational, first-person practitioner voice
- Hook style: self-deprecating admission ("As a semi-professional procrastinator... this blog was written whilst procrastinating on an EHC report") from an educational psychologist, which is close to this blog's own tested-not-theorized voice.
- Top H2/section headings:
  - The Pomodoro's 'how to'
  - References
- Key data points cited:
  - Author frames the technique through executive-function (EF) theory rather than willpower, drawing on a CPD course by Dr Rebecca Ashton. (`06-edpsyched-co-uk.json`)
  - Cites a secondary source, not a primary study: Owens, R. (2023), "The Pomodoro Technique: What It Is & How It Boosts Productivity," Lifehack. (`06-edpsyched-co-uk.json`)
- Strengths (what they do well):
  - Grounds the "why it works" mechanism in executive-function psychology rather than just asserting benefit; matches the brief's requirement to explain the mechanism, not just assert it.
- Gaps / weaknesses (what they miss):
  - Its own cited source (Lifehack) is a low-authority secondary blog, not a primary study; the piece is really a personal anecdote with a light EF gloss, not evidence-backed.

### 6. Pomodoro Technique: History, Steps, Benefits, and Drawbacks (Verywell Mind)
- URL: https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111
- Domain: verywellmind.com
- SERP rank: 7
- DR: not available
- Word count (approximate): 1401
- Title formula: informational, data/balanced framing
- Hook style: reviewed-by-MD medical-content format opening with "Key Takeaways" bullets, then a diagnostic question ("Do you find it difficult to stay focused and complete tasks?").
- Top H2/section headings:
  - What Is the Pomodoro Technique?
  - How to Practice the Pomodoro Technique
  - How the Pomodoro Technique Was Developed
  - Benefits of the Pomodoro Technique
  - Drawbacks of the Pomodoro Technique
- Key data points cited:
  - Step list: select task, set 25-min timer, work until it rings, 5-min break, repeat, take a 15-30 min break every four pomodoros; introduces "marinara timers" as the term for customized-interval variants. (`07-verywellmind-com.json`)
  - Drawbacks named explicitly: intervals "can sometimes feel a little *too* rigid," stressful if a task overruns the interval, unclear what to do if a task finishes early, and the framework "doesn't account for interruptions beyond your control." (`07-verywellmind-com.json`)
  - Cites a study suggesting the technique may help remote workers reduce stress (footnote 6) and one study finding it may help people with ADHD/learning disabilities with task initiation and focus maintenance (footnote 7). (`07-verywellmind-com.json`)
- Strengths (what they do well):
  - The only top-page result that gives drawbacks genuinely equal billing to benefits, with a named, itemized drawbacks section; directly the shape this blog's honest-assessment section should beat.
- Gaps / weaknesses (what they miss):
  - Drawbacks section is short (4 bullets) and generic; doesn't mine real user language or specific failure modes the way Reddit does, and doesn't say when to break the rule, only that rigidity is a downside.

### 7. Assessing the efficacy of the Pomodoro technique in enhancing anatomy lesson retention during study sessions: a scoping review (PMC / BMC Medical Education)
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/
- Domain: pmc.ncbi.nlm.nih.gov (allowlist-class, NLM/NIH)
- SERP rank: 8
- DR: not available (peer-reviewed journal, N/A concept)
- Word count (approximate): 7562 (body capped at 20,000 characters in the raw fetch; Discussion/Limitations/Conclusion sections beyond that cap were not retrievable from this raw file)
- Title formula: data / academic
- Hook style: standard academic abstract, no narrative hook.
- Top H2/section headings:
  - Abstract, Introduction, Materials and methods, Results, Discussion, Conclusions
- Key data points cited (what this study DOES and does NOT establish; read carefully before overclaiming):
  - Design: a scoping review (not a meta-analysis, not a single RCT), published Oct 17, 2025 in BMC Medical Education. Searched 6 databases (PubMed, Web of Science, Scopus, ERIC, MEDLINE, Google Scholar) through May 2023, yielding 6,499 initial records, screened to 135 full-text articles, of which 32 studies (N=5,270 total participants across studies; range 25-300 per study; median 87) met inclusion criteria. (`08-pmc-ncbi-nlm-nih-gov.json`)
  - Of the 32 included studies: 3 RCTs, 5 quasi-experimental designs, 24 observational/comparative studies, plus studies on digital/AI-enhanced Pomodoro tools. (`08-pmc-ncbi-nlm-nih-gov.json`)
  - Critical caveat: "no studies explicitly addressing PT in anatomy education have been found," so the review's actual population is general education / STEM / cognitive-science contexts, not anatomy specifically, despite the paper's title; the anatomy angle is the study's own stated gap, not a finding. (`08-pmc-ncbi-nlm-nih-gov.json`)
  - Explicit certainty statement: "the overall certainty of the evidence was moderate to low. Most studies were observational or conceptual, limiting their generalizability." The authors also flag likely publication bias ("Studies that reported positive outcomes were more frequently encountered"). (`08-pmc-ncbi-nlm-nih-gov.json`)
  - Reported theme: "Most studies reported favorable perceptions of PT among learners," with commonly cited benefits of enhanced task focus, improved time management, reduced cognitive load — but this is a synthesis of mostly self-reported/observational findings, not a controlled-trial effect size. (`08-pmc-ncbi-nlm-nih-gov.json`)
- Strengths (what they do well):
  - The single most citable primary source in the set: peer-reviewed, methodologically transparent (PRISMA-ScR), explicit about its own evidence-quality limits. Ideal for a hedged claim like "a 2025 scoping review of 32 studies found mostly positive but low-to-moderate-certainty evidence for the technique."
- Gaps / weaknesses (what they miss):
  - Does NOT establish causal effectiveness via RCT-level evidence (only 3 of 32 studies were RCTs); does NOT cover anatomy education specifically despite its title; body text past ~20,000 characters (Discussion/Limitations/Conclusion) was not captured in this raw fetch, so exact author-stated limitations beyond what's summarized above are unverified. Flagged in Open Questions below.

### 8. This Time-Management Trick Changed My Whole Relationship With Time (NYT Magazine)
- URL: https://www.nytimes.com/2020/06/23/magazine/pomodoro-technique.html
- Domain: nytimes.com (allowlist-class)
- SERP rank: 15 (page 2)
- DR: not available
- Word count (approximate): 824 (likely paywall-truncated; see note below)
- Title formula: problem / narrative personal-essay
- Hook style: anecdotal, opens with a rumor about a "notable artist" who structured her whole day in 25/5 intervals, then pivots to the author's own adoption of the habit during 2020 lockdown.
- Top H2/section headings: none meaningful (site-nav headings only in the captured H2s: "Related Content," "Site Index"); this is a narrative essay, not a structured how-to.
- Key data points cited:
  - Author Dean Kissick, published June 23, 2020, byline "Letter of Recommendation" column. Frames the rigidity as a feature: "You are not allowed to extend a pomodoro, either... After a set of four 25-minute intervals are completed, you're supposed to take a longer break of 15 to 30 minutes." (`15-nytimes-com.json`)
- Strengths (what they do well):
  - The only non-listicle, non-how-to perspective in the set; useful tonal reference for a personal, narrative aside rather than a citable fact source.
- Gaps / weaknesses (what they miss):
  - Fetch is almost certainly paywall-truncated: word count (824) is thin for an NYT Magazine feature, and the captured body ends abruptly in ad-tech/cookie-consent link boilerplate rather than a real article conclusion. Treat only the captured opening ~700 words as reliable; do not assume the rest of the essay's content or draw claims from unretrieved sections.

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| technique | 8/8 | present in nearly every title verbatim (part of the keyword) |
| history / steps / benefits / drawbacks | 1 | Verywell Mind only; the sole "balanced assessment" title formula |
| for focus / procrastination / ADHD | 3 | BCU ("for focus"), EdPsyched ("Overcome Procrastination"), BCU H2 on ADHD |
| efficacy / scoping review | 1 | PMC, academic framing |
| best / 2026 / review | 0 | none of the 8 selected titles use listicle or freshness modifiers |

No result on page 1 uses "best," a year, or "review" in its title; this is not a listicle-shaped SERP, confirming the mixed/informational shape above.

## Audience inferences

- Primary audience: students and early-career professionals per `{profile_dir}/audience.md`; directly evidenced by two university study-skills pages (BCU, and skipped-but-visible Pitt/USC pages) and Todoist's "may be for you if..." qualifier list aimed at procrastinators and the overwhelmed.
- Secondary audience: knowledge workers searching for one specific technique, evidenced by Todoist's and the official site's broader productivity framing beyond students.
- Reader knowledge level: beginner. Every selected result re-explains the basic 25/5 mechanic from scratch, even the academic scoping review's introduction; nothing on page 1 assumes prior familiarity.
- Reader intent: mixed informational + evaluative ("does this work for me specifically, e.g. with ADHD"), per PAA and the AI Overview headings.

## Angle opportunities

- Nobody on page 1 combines the honest "who this doesn't work for" section with a concrete "how to adapt the 25/5 rule" section in one place; Verywell Mind has short drawbacks with no adaptation advice, and the AI Overview's own heading structure ("Where It Falls Short / How to Adapt It for ADHD") suggests Google itself expects a page that does both and none of the ranking pages fully deliver it.
- No selected result cites the PMC scoping review's actual evidence-quality caveats (moderate-to-low certainty, mostly observational studies, no anatomy-specific data despite the study's title); citing this honestly and specifically would be a differentiator versus vaguer "studies show" claims like EdPsyched's uncredited Lifehack citation.
- No result recommends specific timers (physical or app) alongside the how-to in one integrated post; BCU lists apps only, the official site sells its own program, and no page names physical kitchen timers at all. This is open ground for the "best timers" section the brief calls for.
- No result draws on real user voice (Reddit-style pain language) about specific failure modes (flow-state interruption, ADHD hyperfocus conflict, task-overrun stress); every page's "drawbacks" section is written in generic third person.

## Avoid pitfalls

- The basic step-by-step (25 min work / 5 min break / long break every 4) is fully commoditized across Wikipedia, Todoist, BCU, and Verywell Mind; restating it without adding mechanism or nuance adds nothing.
- The "Pomodoro is good for ADHD" claim is stated as an uncomplicated "Yes!" by BCU with no caveats; repeating that framing uncritically would put this post behind Verywell Mind's more careful treatment and badly behind what Reddit's r/ADHD data (see `research/reddit.md`) actually shows.

## Use-in-post facts

### Statistics
- Keyword pomodoro technique gets 60,500 US monthly searches at $2.04 CPC (Surfer SEO overlay on the live SERP), source: `_serp.json` (keywordMetrics; internal research artifact, not an external URL — do not cite as an external source in the post).
- A 2025 scoping review (BMC Medical Education) screened 6,499 records down to 32 included studies (N=5,270 total participants, range 25-300, median 87 per study), comprising 3 RCTs, 5 quasi-experimental designs, and 24 observational/comparative studies, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/
- That same review states its overall certainty of evidence is "moderate to low" because most included studies were observational or conceptual, and flags likely publication bias toward positive-outcome studies, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/
- The review found no studies specifically addressing the Pomodoro Technique in anatomy education despite that being its stated focus, source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12532815/

### Quotes
- "The timer is only the starting point. The full Pomodoro® Technique includes daily planning, interruption management, and effort estimation — a complete system for making deep work sustainable.", Francesco Cirillo's official site, source: https://www.pomodorotechnique.com/
- "The framework doesn't account for interruptions beyond your control. For instance, there may be other tasks or colleagues that demand your attention at work.", Verywell Mind, source: https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111
- "Timers with customized intervals and breaks are sometimes referred to as marinara timers.", Verywell Mind, source: https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111

### Named examples
- Francesco Cirillo developed the technique in the late 1980s as a university student, using a tomato-shaped ("pomodoro") kitchen timer, and settled on 25-minute intervals after experimenting with shorter (10-minute, too short) and longer (hour-long, no break, too long) intervals, context: consistent origin story corroborated by Wikipedia, Todoist, and Verywell Mind independently, source: https://en.wikipedia.org/wiki/Pomodoro_Technique
- Todoist's "three rules": break projects needing more than 4 pomodoros into smaller steps; combine small sub-pomodoro tasks together; "once a Pomodoro is set, it must ring" (no mid-interval interruptions, log them for later instead), context: the most detailed articulation of the technique's actual operating rules beyond the basic timer mechanic, source: https://www.todoist.com/productivity-methods/pomodoro-technique

## Competitor product mentions

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| Pomofocus | 2 (BCU, and unselected rank-5 pomofocus.io itself) | free web-based Pomodoro timer |
| Forest | 1 (BCU) | app that gamifies focus via a growing virtual tree |
| Focus To-Do | 1 (BCU) | app-based Pomodoro + task manager |
| Be Focused | 1 (BCU) | iOS Pomodoro timer app |
| Pomodoro Kitty / Astrostation / Study With Me / Study Bunny | 1 (BCU) | aesthetic/gamified study-timer apps aimed at students |
| Todoist | 1 (Todoist itself, self-promotional) | task manager positioning itself as the Pomodoro companion app |
| Official Pomodoro® program (pomodorotechnique.com) | 1 | paid self-paced course/certification, not a timer product |

## Citations harvested from competitors

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://pmc.ncbi.nlm.nih.gov/articles/PMC6406620/ | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | Study on coping strategies (including Pomodoro-adjacent structured time approaches) for time-related and productivity challenges among young people with learning disabilities and ADHD | primary_source |
| https://science.nichd.nih.gov/confluence/display/newsletter/2020/05/07/The+Pomodoro+Technique%3A+An+Effective+Time+Management+Tool | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | NICHD (part of NIH) newsletter piece framing the Pomodoro Technique as an effective time-management tool | auth_allowlist |
| https://doi.org/10.1002/nsr.30653 | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | Study suggesting the technique may help remote workers stay focused and reduce stress while working from home | primary_source |
| https://doi.org/10.1111/bjep.12593 | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | Study ("Understanding effort regulation") comparing Pomodoro-style breaks against self-regulated breaks | primary_source |
| https://doi.org/10.3390/children6020028 | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | Study on strategies for coping with time-related/productivity challenges in young people with learning disabilities and ADHD (same underlying study as the PMC6406620 link above, different DOI resolver) | primary_source |
| https://writingcenter.unc.edu/2020/04/pomodoros/ | https://www.verywellmind.com/pomodoro-technique-history-steps-benefits-and-drawbacks-6892111 | UNC Writing Center's own how-to guide to using the Pomodoro technique | auth_allowlist |
| https://synapse.ucsf.edu/articles/2020/09/21/power-overlearning | https://www.todoist.com/productivity-methods/pomodoro-technique | UCSF Synapse piece on "overlearning," backing Todoist's advice to use leftover pomodoro time for overlearning | auth_allowlist |
| https://www.amazon.com/Procrastination-Health-Well-Being-Fuschia-Sirois/dp/0128028629 | https://www.todoist.com/productivity-methods/pomodoro-technique | Book "Procrastination, Health, and Well-Being" by Fuschia Sirois, cited alongside Tim Pychyl's procrastination-as-emotion-avoidance framing | claim_only_in_competitor (an Amazon product listing, not itself a primary source; the claim about Pychyl's research has no independent citation in the article beyond naming him) |
| https://expertfile.com/experts/gloria.mark/gloria-mark | https://www.todoist.com/productivity-methods/pomodoro-technique | Expert-directory profile of Gloria Mark, a UC Irvine researcher on attention and interruptions, cited as an authority elsewhere in the article's "Does it work?" section | claim_only_in_competitor (a bio/directory page, not a study; if this angle is used, find Gloria Mark's actual published research independently) |

Note: the two DOI links (10.1002/nsr.30653 for remote-work stress and 10.3390/children6020028 for ADHD/learning-disability coping) resolve to paywalled or database-gated pages and were not independently deep-fetched by this agent; treat them as `primary_source` candidates for the editor to verify access before using as an `[EXTERNAL_LINK_NEEDED:]` target.

## Open questions for editor

- The PMC scoping review's `bodyText` was capped at 20,000 characters in the raw fetch, so the paper's Discussion, explicit author-stated Limitations, and Conclusions sections were not retrievable. The Abstract, Methods, and Results captured above are solid, but any claim specifically attributed to the paper's own "Discussion/Limitations" language should be treated as unverified pending a supplemental fetch, or phrased to rely only on the captured Methods/Results.
- `15-nytimes-com.json` (NYT Magazine) is very likely paywall-truncated (824 words, ends in ad-tech boilerplate rather than a real conclusion). Usable only for its opening ~700 words / tone reference; do not cite content beyond what's quoted above.
- rank 9 (hannahbrenchercreative.com), rank 10 (Pitt), rank 12 (USC), rank 13 (Kaplan), and rank 14 (pomodoro-tracker.com) were deliberately skipped by the editor's selection (documented in `_serp_selection.md`) and are not analyzed here; if the writer needs a second university-study-lab source beyond BCU, Pitt/USC pages exist in `_serp.json`'s topResults but were not deep-fetched.
- No DR/Ahrefs data was present in any raw file, so "DR (if known)" fields above are all marked not available; if domain authority context is needed, it will require a separate check outside this research pass.
