# SERP Research: dopamine detox

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP raw files in `_raw/`. Never hallucinate, cite every claim.

## Query metadata

- Search engine: Google
- Query used: dopamine detox
- Date searched: 2026-09-07
- Top N results studied: 7 (of top 8; rank 1 skipped as off-topic, see `_serp_selection.md`)
- Browser session: not recorded in raw files
- Any SERP features observed: people_also_ask. No AI Overview, no Google Shopping.

## SERP shape (inferred)

**mixed** (definitional/debunk pieces interleaved with how-to-numbered guides)

Reasoning: 5 of 7 analyzed results (Cleveland Clinic, PMC, MedicalNewsToday, Harvard Health, Crisis Text Line) are definitional/debunk pieces that lead with "here's what this term actually means and whether it works." Only Biogena is a pure how-to-numbered guide, and the Reddit thread (rank 6) is a first-person testimonial. Per `_serp_selection.md`, the dominant register is medical-authority correction, not a listicle war.

## Search intent

- Dominant intent: **informational**, with a strong "is this actually real?" verification sub-intent (per `_serp_selection.md`'s provisional read, confirmed here).
- Evidence: 5 of 7 analyzed results are medical/mental-health authorities (Cleveland Clinic, PMC review, MedicalNewsToday, Harvard Health, Crisis Text Line) whose H1s or opening paragraphs explicitly say the term is scientifically inaccurate before explaining what to do instead. `people_also_ask` present; no AI Overview at capture time; no Google Shopping. This is not a transactional or comparison SERP, there are no competing tools/products/rankings among these results.
- Secondary intent: **how-to** — even the debunking authorities (Cleveland Clinic "What to do instead", Crisis Text Line "How to Try a Dopamine Detox Without Going Extreme") pivot to a concrete protocol in their second half.
- Implication for our post structure: lead with the definition-and-verdict (name is wrong, mechanism story is wrong, but the practice can still help), then give the load-bearing how-to section. This matches the brief's angle exactly and is the same structure most top-ranking results are already using, so the post should aim to do it more concretely/less hedgy than the debunk pieces.

## Selected results analyzed

### 1. Dopamine Detoxes Don't Work: Here's What To Do Instead (Cleveland Clinic)
- URL: https://health.clevelandclinic.org/dopamine-detox
- Domain: health.clevelandclinic.org
- SERP rank: 2
- DR: not available in raw data
- Word count: 2235
- Title formula: problem (debunk framing)
- Hook style: opens with "wellness trend that sounds too good to be true," immediately undercuts it ("Dopamine detoxes are NOT that trend... they don't even work")
- Top H2/section headings:
  - What is a dopamine detox?
  - Do dopamine detoxes actually work?
  - Better health starts here
- Key data points cited:
  - Cameron Sepah, a psychologist, coined "dopamine fasting" in a 2019 LinkedIn article, source: https://health.clevelandclinic.org/dopamine-detox (links to https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/)
  - "The only part of Dopamine Fasting 2.0 that was innovative was the name" — quotes Sepah's own admission that it's "just a catchy title," source: https://health.clevelandclinic.org/dopamine-detox
  - Dr. Susan Albers (Cleveland Clinic psychologist) frames the accurate underlying practice as cognitive behavioral therapy (CBT), not dopamine manipulation, source: https://health.clevelandclinic.org/dopamine-detox
  - Low dopamine is linked to Parkinson's disease, depression, restless leg syndrome, and ADHD — argument for why "detoxing" dopamine would be actively harmful, source: https://health.clevelandclinic.org/dopamine-detox
- Strengths:
  - Names Sepah and links directly to his original LinkedIn post, giving a real paper trail for the "dopamine fasting 2.0" origin
  - Gives a concrete 5-step CBT-based alternative protocol (pick a behavior, set an experiment window, find a replacement activity, keep records, review) attributed to Dr. Albers
- Gaps / weaknesses:
  - Protocol is framed entirely as clinical CBT, no acknowledgment of the "why does this help if the mechanism is wrong" tension that Reddit/X audiences are already asking
  - No mention of the moderate viral version (Sepah's own weekday/weekend/quarter/year schedule); jumps straight to "start an experiment"

### 2. A Literature Review on Holistic Well-Being and Dopamine Fasting: An Integrated Approach (PMC/Cureus)
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/
- Domain: pmc.ncbi.nlm.nih.gov
- SERP rank: 3
- DR: not available (NIH/NCBI, authoritative by nature)
- Word count: 5980
- Title formula: data (academic literature review)
- Hook style: abstract-first, clinical register, no narrative hook
- Top H2/section headings:
  - Introduction and background
  - Review
  - Conclusions
- Key data points cited:
  - "Individuals who engage in dopamine-fasting-like ideologies may experience reduced impulsive behaviors, increased focus on tasks, and reduced overwhelm" — attributed to unspecified numbered references [10,11] within the review's own citation list, NOT to a named/linked primary study in this raw file. Scope as reported by the review, not independently verified here. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/
  - "Extreme forms of dopamine fasting, such as prolonged periods of isolation or severe dietary restrictions, could have negative implications for mental and physical health" [8,9,12,13], source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/
  - Explicitly states the practice "lacks scientific backing" per critics, and that benefits reported are inconsistent ("no one-size-fits-all approach"), source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/
- Strengths:
  - The only peer-reviewed source in the top-8; useful as an `auth_allowlist`/primary-source-class citation for "some structured version of this shows measurable focus/impulsivity benefits, but the evidence base is thin and inconsistent"
  - Explicit two-sided framing (benefits AND risks of extreme versions) matches the honest tone the brief wants
- Gaps / weaknesses:
  - Numbered references, not linked DOIs, in the fetched bodyText, so this analyst could not trace [10,11] to a specific named study. This means the underlying "reduced impulsivity" claim is only as reliable as an unreviewed literature review's own citation, not a primary RCT we can independently verify. **Flagging as scope-limited, not fully unverifiable, but the editor should not cite the specific numbers/percentages (there are none reported) or treat this as strong evidence.**
  - Written for a clinical audience; not usable as reader-facing prose

### 3. Dopamine detox: benefits, rules & how to get started (Biogena)
- URL: https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide
- Domain: biogena.com
- SERP rank: 4
- DR: not available
- Word count: 1509
- Title formula: how_to
- Hook style: relatable scroll-without-thinking opener ("You reach for your phone without even realising it... it all feels good, but somehow... empty?")
- Top H2/section headings:
  - What is a dopamine detox and what are its benefits?
  - Symptoms of dopamine addiction
  - A guide to dopamine fasting: follow these tips and rules for a successful dopamine detox
  - Conclusion: Your detox. Your path.
- Key data points cited:
  - Cites Desai et al. 2024 Cureus literature review (same PMC study as result #2) and Wise, R.A. et al. "Dopamine and Addiction," Annu Rev Psychol 2020, as "Further reading," source: https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide (links to https://pubmed.ncbi.nlm.nih.gov/38966464/ and https://pubmed.ncbi.nlm.nih.gov/31905114/)
  - "Dopamine detox isn't about self-denial, it's about mindfulness," explicitly rejects the all-or-nothing framing, source: https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide
  - "Although research into this is still in its infancy" — the article's own honesty caveat, source: https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide
- Strengths:
  - 7-point moderate protocol (mobile-free zones/times, mindful eating without restriction, moderate exercise, deliberate quiet, meditation, mindful morning routine, micronutrients) is concrete and non-extreme, closest in spirit to what the brief wants (minus the supplement upsells)
  - Openly non-prescriptive about food ("Instead of giving them up: make conscious choices") which matches the brief's "no prescriptive fasting/food restriction" requirement
- Gaps / weaknesses:
  - Publisher is a supplement retailer; the piece pivots to selling ashwagandha/magnesium/omega-3 products mid-article. Cannot be used as a model without noting the commercial motive; also disqualifies it from ever being an external link target under `auth_allowlist` rules (commercial content, not authoritative)
  - No neuroscience jargon explained (mentions "reward system," "sensitivity" without defining terms), inconsistent with the brief's "translate jargon on first use" requirement

### 4. Dopamine detox: How does it work? (MedicalNewsToday)
- URL: https://www.medicalnewstoday.com/articles/dopamine-detox
- Domain: medicalnewstoday.com
- SERP rank: 5
- DR: not available (large health media property)
- Word count: 1456
- Title formula: informational
- Hook style: leads with a flat correction: "no substantial evidence supports the concept of a 'dopamine detox.'"
- Top H2/section headings:
  - What is a dopamine detox?
  - What is dopamine?
  - Does a dopamine detox work?
  - Does a dopamine detox have benefits?
- Key data points cited:
  - Dr. Cameron Sepah "is the creator of the dopamine fast," used clinically with tech workers/VCs; his approach draws on CBT, source: https://www.medicalnewstoday.com/articles/dopamine-detox (links "dopamine fast" to https://onlinelibrary.wiley.com/doi/full/10.1002/lim2.54, a peer-reviewed discussion of the term, not to Sepah's own LinkedIn post)
  - Sepah's six named target behaviors: emotional eating, excessive internet/gaming, gambling/shopping, porn/masturbation, thrill/novelty-seeking, recreational drugs, source: https://www.medicalnewstoday.com/articles/dopamine-detox
  - Cites the same 2024 PMC/Cureus literature review (result #2) for "increased focus on tasks, reduced feelings of overwhelm, reduced impulsive behaviors," while also reproducing that review's own caveat that extreme versions can cause anxiety, malnutrition, loneliness, source: https://www.medicalnewstoday.com/articles/dopamine-detox (links to https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/)
  - Links "affects many" (dopamine's functions: learning, motivation, sleep, mood, attention) to an NCBI Bookshelf physiology reference (StatPearls-class), source: https://www.ncbi.nlm.nih.gov/books/NBK535451/
  - Links "state of mindfulness" claim (stress relief, lower blood pressure, improved sleep) to an NIH/PMC mindfulness study, source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6597263/
- Strengths:
  - Best-sourced of the mainstream explainers; every major claim traces to a linked NIH/PMC/peer-reviewed source
  - Sepah's six-category list is specific and directly quotable for "what people are actually cutting" without inventing categories
- Gaps / weaknesses:
  - Never links Sepah's own original 2019 LinkedIn article, so on this page alone the "creator" attribution rests on secondary sourcing; Cleveland Clinic (result #1) and Harvard Health (result #6) do link it directly, which is where the editor should point if a primary link to Sepah's own words is wanted

### 5. This 30-day dopamine detox reset my brain and changed my life (r/productivity — ranks organically at position 6)
- URL: https://www.reddit.com/r/productivity/comments/1i2wqp1/this_30day_dopamine_detox_reset_my_brain_and/
- Domain: reddit.com
- SERP rank: 6
- DR: n/a (UGC)
- Word count: not reported (short post + comment thread)
- Title formula: transactional/testimonial ("reset my brain and changed my life")
- Hook style: personal before/after, opens with "my screen time tended to fluctuate a lot" struggle before the fix
- Top H2/section headings: none (Reddit post, no headings)
- Key data points cited:
  - Self-reported, gradual-friction 4-week protocol reducing daily social-media "unblocks" from 25/day to 5/day and phone pickups from ~130/day to 55/day, with self-tracked screen time dropping from 7 hrs/day to 2 hrs/day over the 4 weeks, source: https://www.reddit.com/r/productivity/comments/1i2wqp1/this_30day_dopamine_detox_reset_my_brain_and/ (self-reported anecdote, not a study, do not present as generalizable data)
  - Top comment (213 pts, u/rpkacnh) asks for basic clarification, showing the post itself is under-specified for a general reader without the "unblock" jargon explained
  - Comment (u/Akilayd, 74 pts) and (u/malloryknox86, 18 pts) explicitly state "dopamine detox is not a thing that exists," calling it "the incorrect name given to a form of CBT" and noting that a literal dopamine depletion would cause Parkinson's-like symptoms — same skeptic framing found on Cleveland Clinic and MedicalNewsToday, source: same URL
- Strengths:
  - The gradual-friction, week-by-week tapering structure (rather than cold-turkey) is a genuinely different and more doable protocol shape than any of the medical sources propose; good model for "how to do it right" without extremism
  - Shows real reader skepticism sitting right next to the testimonial, i.e., proof the "is this bullshit" tension is already visible even inside a positive result post
- Gaps / weaknesses:
  - No neuroscience explanation at all; purely behavioral self-tracking. Cannot be used to support any mechanism claim, only as an example protocol and as evidence of skeptical audience reaction

### 6. Dopamine fasting: Misunderstanding science spawns a maladaptive fad (Harvard Health)
- URL: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917
- Domain: health.harvard.edu
- SERP rank: 7
- DR: not available (Harvard Medical School property, authoritative-allowlist class)
- Word count: 1544
- Title formula: problem
- Hook style: opens by naming Sepah directly and quoting his own NYT admission that the name is "not to be taken literally"
- Top H2/section headings: none formal (essay-style blog post); sections are "What's the thinking behind a dopamine fast?", "You can't 'fast' from a naturally occurring brain chemical", "Fasting may simply be a technique to reduce stress...", "Misunderstanding science can create maladaptive behaviors"
- Key data points cited:
  - Direct quote: Sepah told the New York Times, "Dopamine is just a mechanism that explains how addictions can become reinforced, and makes for a catchy title. The title's not to be taken literally," source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 (links directly to https://www.nytimes.com/2019/11/07/style/dopamine-fasting.html)
  - Sepah's original schedule, as reported by Harvard Health: "practice dopamine fasting from one to four hours at the end of the day... for one weekend day... one weekend per quarter... and one week per year," source: same URL (links directly to Sepah's own 2019 LinkedIn article: https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/)
  - Same six compulsive behaviors as MedicalNewsToday: emotional eating, excessive internet/gaming, gambling/shopping, porn/masturbation, thrill/novelty seeking, recreational drugs, source: same URL
  - Explicit statement: dopamine "doesn't actually decrease when you avoid overstimulating activities, so a dopamine 'fast' doesn't actually lower your dopamine levels" — direct, unhedged mechanism correction from a Harvard Medical School-affiliated physician, source: same URL
  - Names the viral extreme distortion explicitly: people "not eating, exercising, listening to music, socializing, talking more than necessary, and not allowing themselves to be photographed if there's a flash," calling it a departure from Sepah's original, more moderate idea, source: same URL
- Strengths:
  - The single best citable source in this SERP for two of the brief's exact claims: (a) the name is wrong but the practice traces to something real, and (b) Sepah's own graduated, moderate schedule (not a 24-hour wall stare) — and it's the only result that links Sepah's original document directly
  - Explicitly separates "the original intent" from the "maladaptive" viral extreme, exactly the distinction the brief's angle requires
- Gaps / weaknesses:
  - Somewhat dismissive/mocking tone toward the wellness industry generally; useful for facts, not for voice modeling

### 7. What is a Dopamine Detox? The Truth About Dopamine Addiction and Overstimulation (Crisis Text Line)
- URL: https://www.crisistextline.org/blog/2026/03/26/dopamine-detox/
- Domain: crisistextline.org
- SERP rank: 8
- DR: not available (mental-health nonprofit; treat as auth_allowlist-adjacent, not medical-journal-grade)
- Word count: 1548
- Title formula: informational
- Hook style: opens by naming the TikTok/influencer trend directly ("If you spend time on social media, you've probably seen the term...")
- Top H2/section headings: "What is a Dopamine Detox?", "Can You Actually Be Addicted to Dopamine?", "Why Do People Feel the Need for a Dopamine Detox?", "How to Try a Dopamine Detox Without Going Extreme", "If You're Feeling Stuck or Overwhelmed"
- Key data points cited:
  - "Dopamine cannot be eliminated from the body... it plays an important role in the brain's reward system," source: https://www.crisistextline.org/blog/2026/03/26/dopamine-detox/ (no external citation given for this claim in this piece — same claim independently corroborated by Cleveland Clinic and Harvard Health above)
  - Concrete moderate protocol list: phone-free time blocks, limiting algorithm-driven scrolling, "low-stimulation breaks" (walk without headphones, sitting outside, stretching), screen-free activities (cooking, drawing, journaling, reading), source: same URL
  - Explicit boundary: frames constant stimulation-seeking as sometimes masking "anxiety, loneliness, grief, depression, or stress" and directs readers to crisis support resources if they feel "stuck or overwhelmed," source: same URL
- Strengths:
  - The clearest "when this is not the right tool, talk to someone" framing in the set, useful primary structural model for the brief's required mental-health boundary
  - Non-extreme, no food restriction, no all-or-nothing framing, matches the brief's avoid-list well
- Gaps / weaknesses:
  - Zero external citations for any factual claim in the piece (all `externalLinks` in the raw file are site navigation/social/donation links, none are content citations); every substantive claim here should be treated as `claim_only_in_competitor` unless independently corroborated elsewhere in this set (most are)

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| dopamine | 7 | present in all 7 analyzed titles |
| detox | 6 | "detox"/"detoxes" in all but the PMC academic title |
| what is / how does it work | 3 | Cleveland Clinic, MedicalNewsToday, Crisis Text Line frame as a definition/explainer question |
| fasting | 2 | Biogena, Harvard Health use "fasting" over "detox" |
| truth / misunderstanding / don't work | 3 | Crisis Text Line ("The Truth About"), Harvard Health ("Misunderstanding science"), Cleveland Clinic ("Don't Work") — debunk-register words dominate over benefit-promising words |

No result uses "best," a year, or "review" — this is not a listicle-comparison SERP.

## Audience inferences

- Primary audience: per `brief.md`, students/early-career professionals/aspiring creators who lose focus to their phone; the Reddit r/productivity thread (rank 6) and the productivity-framed medical pivots (Cleveland Clinic's CBT steps, Crisis Text Line's "phone-free blocks") both target this exact reader
- Secondary audience: people who saw the TikTok/YouTube version and specifically want a verdict on whether it's "real" — evidenced by 5 of 7 results leading with a correction/debunk before any protocol
- Reader knowledge level: beginner. No result assumes prior neuroscience literacy; all define "dopamine" from scratch (Cleveland Clinic, MedicalNewsToday, Crisis Text Line all include a basic "what is dopamine" primer)
- Reader intent: informational, secondarily how-to

## Angle opportunities

- No result in this set gives the reader a doable, non-extreme, week-by-week protocol married to an honest "here's why it works even though the name is wrong" explanation in one place. Cleveland Clinic and Harvard Health nail the honesty; Biogena and the Reddit thread nail concrete steps; none of the 7 combine both cleanly, which is exactly the gap `brief.md`'s angle targets.
- None of the 7 explicitly separates the "viral extreme" version (24 hours, no food/music/talking) from Sepah's actual moderate original (1-4 hrs/day, one weekend day, one weekend/quarter, one week/year) as a named, side-by-side contrast. Harvard Health has both pieces of information but does not present them as a contrast table or checklist.
- No result addresses the ADHD-specific caveat (using long-form audio/podcasts as a coping tool rather than "cheap dopamine" to eliminate) — this is Reddit-only territory (see reddit.md) and is a real gap the blog could fill responsibly, without giving medical advice, by simply noting the practice isn't one-size-fits-all.

## Avoid pitfalls

- Do not re-run the "dopamine can't literally be detoxed, we need it to live" correction as the entire post; 5 of 7 top results already do this and a reader arriving via this exact query has very likely already seen it once.
- Do not present Cameron Sepah's protocol as brand-new or original to this post; every authoritative source in this SERP already names him and links his LinkedIn article.

## Use-in-post facts

### Statistics
(none, this SERP is not stat-drive; no result reports a study finding as a specific number/percentage — see Open Questions on the PMC review's unlinked numbered citations)

### Quotes
- "Dopamine is just a mechanism that explains how addictions can become reinforced, and makes for a catchy title. The title's not to be taken literally." — Cameron Sepah, quoted via NYT, source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 (which links to https://www.nytimes.com/2019/11/07/style/dopamine-fasting.html)
- "The only part of Dopamine Fasting 2.0 that was innovative was the name." — Cleveland Clinic's summary of Sepah's approach, source: https://health.clevelandclinic.org/dopamine-detox
- "A more appropriate or accurate term would be cognitive behavioral therapy (CBT)" — Dr. Susan Albers, PsyD, Cleveland Clinic, source: https://health.clevelandclinic.org/dopamine-detox

### Named examples
- Cameron Sepah, psychologist, coined "Dopamine Fasting 2.0" in a 2019 LinkedIn article, originally used clinically with tech workers/VCs in Silicon Valley; his six named target behaviors are emotional eating, excessive internet/gaming use, gambling/shopping, porn/masturbation, thrill/novelty-seeking, recreational drugs, context: named consistently across Cleveland Clinic, MedicalNewsToday, and Harvard Health, source: https://health.clevelandclinic.org/dopamine-detox, https://www.medicalnewstoday.com/articles/dopamine-detox, https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917
- Sepah's original graduated schedule: 1-4 hours at the end of a weekday, one full weekend day per week, one weekend per quarter, one week per year, context: this is the moderate original protocol the viral 24-hour/no-food/no-talking version distorts, source: https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917

## Competitor product mentions

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| (none) | — | This is not a listicle SERP; no tools/apps/products are compared across results. Biogena mentions its own supplement line but that is a single-site upsell, not a cross-SERP pattern. |

## Citations harvested from competitors

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/ | https://health.clevelandclinic.org/dopamine-detox | Sepah's original 2019 "Dopamine Fasting 2.0" article, primary source for the term's origin | primary_source |
| https://www.linkedin.com/pulse/dopamine-fasting-new-silicon-valley-trend-dr-cameron-sepah/ | https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 | Sepah's original graduated schedule (1-4hrs/day, 1 weekend day/week, 1 weekend/quarter, 1 week/year) | primary_source |
| https://www.nytimes.com/2019/11/07/style/dopamine-fasting.html | https://www.health.harvard.edu/blog/dopamine-fasting-misunderstanding-science-spawns-a-maladaptive-fad-2020022618917 | Sepah's own quote that "the title's not to be taken literally" | auth_allowlist |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11223451/ | https://www.medicalnewstoday.com/articles/dopamine-detox | 2024 literature review reporting possible focus/impulsivity benefits alongside risks of extreme versions | primary_source (note: this is itself one of the 8 top-10 SERP URLs at rank 3, so do not treat as an "external" link candidate, it's already a directly analyzed competitor above) |
| https://www.ncbi.nlm.nih.gov/books/NBK535451/ | https://www.medicalnewstoday.com/articles/dopamine-detox | Basic dopamine physiology (learning, motivation, sleep, mood, attention) | auth_allowlist |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6597263/ | https://www.medicalnewstoday.com/articles/dopamine-detox | Mindfulness benefits (stress relief, lower blood pressure, improved sleep) as an alternative framing to "detox" | auth_allowlist |
| https://onlinelibrary.wiley.com/doi/full/10.1002/lim2.54 | https://www.medicalnewstoday.com/articles/dopamine-detox | Peer-reviewed discussion backing the description of Sepah's "dopamine fast" concept | primary_source |
| https://pubmed.ncbi.nlm.nih.gov/38966464/ | https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide | Same 2024 Cureus/PMC literature review, listed as "further reading" | primary_source (same underlying paper as PMC11223451, duplicate; do not cite as a second independent source) |
| https://pubmed.ncbi.nlm.nih.gov/31905114/ | https://biogena.com/en-gb/knowledge/blog/dopamine-detox-guide | Wise, R.A. et al., "Dopamine and Addiction," Annu Rev Psychol 2020, general dopamine/addiction background | primary_source |

No claim in this competitor set was found with `claim_only_in_competitor` classification, every claim harvested traces to a linked primary source or NIH-class allowlist page. The one exception is Crisis Text Line (result #7), whose article contains zero content citations at all (only nav/social links) — if the editor wants to cite any of its specific claims (e.g., the moderate protocol list), treat those claims as needing independent sourcing, since Crisis Text Line itself provides none.

## Open questions for editor

- The PMC/Cureus literature review's key benefit claim ("reduced impulsive behaviors, increased focus on tasks, reduced overwhelm") is attributed only to bracketed reference numbers [10,11] within the review's own bibliography; this raw fetch does not include the reference list with resolvable links, so this analyst cannot verify what specific study those numbers point to. Recommend treating this as "a peer-reviewed review reports X" rather than citing a specific underlying study, and do not attach a percentage or timeline to it, none was given.
- No result in this set states a "receptor reset" mechanism or any recovery timeline (e.g., "X weeks to reset your dopamine"). This absence is itself useful: it confirms `_x_selection.md`'s finding that the "12-15 weeks to heal" claim seen on X (skipped, unsourced) has no support anywhere in the SERP either, and should not appear in the post in any form.
- Cannot verify whether "Ayahuasca," "Can You Actually Be Addicted to Love?" and the other unrelated related-article titles pulled into Cleveland Clinic's h3 list carry any relevance, they're clearly auto-generated related-content modules, not part of the article's argument; excluded from analysis above.
