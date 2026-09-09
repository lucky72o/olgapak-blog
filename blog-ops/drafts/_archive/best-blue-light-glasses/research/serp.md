# SERP Research: best blue light glasses

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP, captured by the editor as raw JSON files (three captures, all `gl=us&hl=en`). Every claim below cites a specific raw file or URL.

## Query metadata

- Search engine: Google
- Query used: "best blue light glasses" (primary capture, `_serp.json`); supplemented by "best blue light glasses for students" (`_serp_students.json`, ranks 21-29) and "do blue light glasses work evidence" (`_serp_evidence.json`, ranks 41-49)
- Date searched: 2026-09-09
- Top N results studied: 8 (deep-fetched, per `_serp_selection.md`), drawn from a combined pool of 25 across the three captures
- Browser session: not recorded in raw files; locale forced to `gl=us&hl=en` per `_serp_selection.md` (default locale returned a UK SERP)
- Any SERP features observed: People Also Ask (`_serp.json` → `serpFeatures: ["people_also_ask"]`). No AI Overview, no Shopping block recorded in the raw capture.

## SERP shape (inferred)

`mixed`

Reasoning: the primary capture's top 9 results split between brand collection/homepage pages (Felix Gray rank 1, Blockbluelight rank 4, GUNNAR rank 5, Zenni rank 9), editor-tested best-of listicles (Health.com rank 2, CNN Underscored rank 7, NYT Wirecutter rank 8), an Amazon best-sellers list (rank 6), and one Reddit lab-test thread (rank 3, r/sleephackers). No single format dominates.

## Search intent

- Dominant intent: commercial, with a strong embedded informational gate
- Evidence: `_serp.json`'s People Also Ask block is entirely skepticism-framed ("Do any blue light glasses actually work?", "Do doctors ever recommend blue light glasses?", "Which brand is best for anti-blue light glasses?") rather than shopping-framed. Result types are a mix of brand pages, editor-tested roundups (Health.com, CNN, Wirecutter), and a wearer-test Reddit thread (rank 3) — all confirmed via `02-health-com.json`, `07-cnn-com.json`, `08-nytimes-com.json`, `03-reddit-com.json`.
- Secondary intent: navigational/informational — the `_serp_evidence.json` capture (ranks 41-49) shows a distinct cluster of clinical-evidence content (Cleveland Clinic, Cochrane, AAO) that Google also serves for adjacent phrasing of this topic, per `_serp_selection.md`.
- Implication for our post structure: a roundup that opens with product picks before answering "do these actually work" will read as a shill to this SERP's audience. Health.com (rank 2) and Wirecutter (rank 8), the two most-earned results, both front-load the evidence question before their picks (`02-health-com.json` H2 "Do Blue Light Glasses Really Work?"; `08-nytimes-com.json` H2 "What is blue light, and do you need to block it?").

## Selected results analyzed

### 1. The 7 Best Blue Light Glasses of 2026, Tested by Editors
- URL: https://www.health.com/condition/eye-health/best-blue-light-glasses
- Domain: health.com
- SERP rank (1-10): 2
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2,332
- Title formula: data (implies testing) + best-of
- Hook style (opening angle): opens with a hedged claim ("blue light blocking may be useful if you experience eye strain") sourced to a UC Davis study, then immediately states "experts say evidence on the effectiveness of blue light glasses is mixed" before recommending 20-minute screen breaks regardless.
- Top H2/section headings:
  - Top Picks
  - Do Blue Light Glasses Really Work?
  - What to Look For When Shopping for Blue Light Glasses
- Key data points cited:
  - "we tested 24 pairs at home for a week and evaluated each pair for fit, feel, clarity, effectiveness, and value" (`02-health-com.json`)
  - "we spent over 300 hours testing 24 pairs of blue light glasses" (Our Testing Process section, `02-health-com.json`)
  - "consulted with five eyecare experts" — named (Dora Adamopoulos OD, Mark Fromer MD, Bradley Katz MD PhD, Dagny Zhu MD, James Dello Russo OD)
- Strengths (what they do well):
  - Per-pick labels ("BEST OVERALL", "BEST FOR WORKING", "BEST FOR HEADACHES", "MOST VERSATILE", "BEST FOR READING", "BEST BUDGET", "MOST STYLISH") with a "Who It's Best For" + "It's Worth Noting" (con) field on every pick, and a "Product Details" block (Rx option, sizes, colors)
  - Explicit buying-criteria section covering tint, AR coating, and an at-home test tip
- Gaps / weaknesses (what they miss):
  - No link to a primary study for the melatonin/eye-strain claim beyond one UC Davis blog post; doesn't cite Cochrane or AAO
  - Doesn't separate the daytime eye-strain claim from the evening/sleep claim as cleanly as Wirecutter does

### 2. I just finished testing 30 pairs of blue-blocking glasses! Here's what I found…
- URL: https://www.reddit.com/r/sleephackers/comments/12ci2fp/i_just_finished_testing_30_pairs_of_blueblocking/
- Domain: reddit.com (r/sleephackers)
- SERP rank (1-10): 3
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 581 (post body only)
- Title formula: data / problem
- Hook style (opening angle): opens by naming the industry problem directly — "most blue-blocking glasses 'claim' to block X amount of blue/green light without backing that up with any kind of data" — then presents the author's own spectrometer testing as the fix.
- Top H2/section headings (Reddit markdown, not HTML h-tags):
  - Circadian Light Reduction
  - Before and After Spectrum
  - Lux Reduction
  - Fit and Style Matters!
- Key data points cited:
  - Circadian Light Reduction metric sourced to LHRC's published algorithm (linked in post)
  - "wraparound-style glasses prevent significantly more unfiltered light from entering the eye than regular-style glasses do" — demonstrated with a mannequin ("Henry") rig
  - Score 1,191, 402 comments (`03-reddit-com.json`) — ranking on page 1 of a commercial SERP is itself a signal of reader appetite for hard data over brand copy
- Strengths (what they do well):
  - Only source in the selected set with independent spectrometer measurement of actual blocking performance vs. marketing claims
  - Explicitly separates two different metrics (circadian light reduction vs. lux/brightness reduction) that most commercial copy conflates
- Gaps / weaknesses (what they miss):
  - No statistical rigor (single spectrometer, single tester, "Henry" the mannequin is illustrative, not a controlled trial) — cite as a wearer/hobbyist test, not a clinical source
  - Post itself doesn't state brand-level blocking percentages in the fetched body text; those live in the linked external database, which was not separately fetched

### 3. 11 best blue-light glasses of 2026, per optometrists
- URL: https://www.cnn.com/cnn-underscored/health-fitness/best-blue-light-glasses
- Domain: cnn.com (CNN Underscored)
- SERP rank (1-10): 7
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 2,240
- Title formula: data + best-of + authority ("per optometrists")
- Hook style (opening angle): opens by hedging ("the merits of blue-light-blocking glasses are still being debated") then pivots to sleep-quality benefit sourced to Dr. James Dello Russo, an optometrist.
- Top H2/section headings:
  - Best blue-light glasses
  - How to select the best blue-light glasses
  - FAQs
- Key data points cited:
  - Dr. James Dello Russo: "blue light is a high-energy visible light with wavelengths between 380-500 nanometers"
  - Dr. Danielle Richardson recommends "a blue-light antireflective coating like TechShield Blue"
  - "Studies show that when people wear blue-light-blocking glasses, they're more likely to fall asleep faster and experience improved sleep" (unsourced to a specific study in the fetched body)
- Strengths (what they do well):
  - Picks are staff-tested first-person accounts (11 named CNN Underscored staffers with named products and prices), reads as credible rather than generic
  - Clear buying criteria: tint level, lens quality/AR coating, extra features (UV protection)
- Gaps / weaknesses (what they miss):
  - `externalLinks` field contains zero primary-source citations — every outbound link is CNN internal navigation or other CNN Underscored articles (checked in full; see Citations section below)
  - The "studies show" sleep claim is asserted without a linkable source, making it a `claim_only_in_competitor` case

### 4. The 4 Best Blue-Light Blocking Glasses of 2026
- URL: https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/
- Domain: nytimes.com (Wirecutter)
- SERP rank (1-10): 8
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 3,920
- Title formula: data + best-of
- Hook style (opening angle): the most evidence-cautious opener in the set — "If you believe the hype, blue-light blocking glasses will prevent headaches, decrease eyestrain, and help you sleep like a baby. But do they work? The answer is murky." Explicitly separates the sleep claim ("may help you to doze off afterward and sleep better") from the eye-strain claim ("won't magically cure headaches or tired eyes").
- Top H2/section headings:
  - What is blue light, and do you need to block it?
  - Why you should trust us
  - How we picked and tested
- Key data points cited:
  - "We enlisted a panel of three testers to try 13 different pairs" and "interviewed three optometrists, two eyeglasses providers, two sleep specialists, a medical doctor, and an ergonomics expert" and "read nearly two dozen studies and position statements"
  - Direct AAO citation: "The American Academy of Ophthalmology and the American Optometric Association have both stated that exposure to blue light from digital devices doesn't cause adverse effects"
  - Quotes Dr. Sunir Garg (AAO clinical spokesperson) recommending artificial tears + the 20-20-20 rule for eye strain instead of blue-light glasses
  - States most kids shouldn't wear blue-light glasses, citing Dr. William T. Reynolds (then-president, American Optometric Association)
- Strengths (what they do well):
  - Cleanest split anywhere in the SERP between the sleep claim (qualified "may help") and the eye-strain claim (explicitly debunked: "probably have very little effect")
  - Rich, real `externalLinks` to primary/authoritative sources (AAO, AOA, a peer-reviewed melatonin study, a 2019 lens-spectral-evaluation study) — see Citations section
- Gaps / weaknesses (what they miss):
  - Only 4 picks, all budget-to-midrange; no premium or prescription-forward pick, no explicit price-band framing

### 5. The 4 Best Blue Light Blocking Glasses for Sleep (Lab Tested)
- URL: https://optimizeyourbiology.com/best-blue-blocking-glasses
- Domain: optimizeyourbiology.com
- SERP rank (1-10): 29 (secondary-keyword capture, `_serp_students.json`)
- DR (if known from Ahrefs extension): not captured
- Word count (approximate): 3,198
- Title formula: data ("Lab Tested") + best-of, evening/sleep-specific (not daytime eye-strain)
- Hook style (opening angle): positions the author (Derek Antosiek, "Light & Circadian Research Lead") and his spectrometer-based testing of "120+ pairs" as the credibility hook, explicitly against marketing claims ("I test every product against reference-grade instruments and hard data, not marketing claims").
- Top H2/section headings:
  - How We Did Our Testing
  - Which Blue Blocker Lenses to Pick
  - The Best Blue Blockers
- Key data points cited:
  - Uses "Circadian Light Reduction," a metric attributed to the LHRC, plus lux/brightness reduction, as its two comparison axes (same framework as the r/sleephackers post, rank 3 above — these two sources appear to share methodology/lineage)
  - Picks: Infield Terminators (Best Overall, ~$20, wraparound), TrueDark Twilights (Best for Insomnia), FilterOptix (Best European, prescription option), Block Blue Light (Best Prescription)
- Strengths (what they do well):
  - This is the only selected source that treats evening/night blue-blocking (amber/red lenses, sleep-specific) as a distinct product category from daytime clear-lens computer glasses — directly useful for the brief's "separate evening/amber pair" angle
  - Transparent methodology section explaining the difference between circadian-light reduction and lux reduction, which prevents readers from being misled by a single "% blocked" marketing number
- Gaps / weaknesses (what they miss):
  - Affiliate-heavy page (explicit "Affiliate links" disclosure) recommending niche/expensive brands (TrueDark, FilterOptix) not available on Amazon in the same way as mainstream picks — treat pricing as directional, not verified
  - No named clinical citations for the Circadian Light Reduction metric's validity beyond a link to the LHRC's own model page

### 6. Do Blue Light Glasses Work? (Cleveland Clinic)
- URL: https://health.clevelandclinic.org/do-blue-light-blocking-glasses-actually-work
- Domain: health.clevelandclinic.org
- SERP rank (1-10): 41 (evidence-keyword capture, `_serp_evidence.json`)
- DR (if known from Ahrefs extension): not captured (allowlist-class authoritative health system domain)
- Word count (approximate): 1,751
- Title formula: informational / problem
- Hook style (opening angle): "Blue light glasses are everywhere... They promise to protect your eyes from the dangers of blue light... But do they really deliver?" then immediately hedges: "the benefits depend on why you're wearing them in the first place."
- Top H2/section headings:
  - What do blue light glasses do?
  - Blue light-blocking benefits: Are they true?
- Key data points cited:
  - Ophthalmologist Kathleen Petro, MD, quoted throughout, claim-by-claim
  - "the American Academy of Ophthalmology doesn't recommend blue light glasses for eye strain"
  - On eye strain: "it's likely not that blue light is causing your eyes to be tired at work... It's simply the act of focusing your eyes on a screen" (Dr. Petro: reduced blink rate dries the cornea)
  - On eye health/damage: "current research shows no evidence that the levels of blue light emitted from your tech can harm your retinas or cause eye disease"
  - On sleep: "This is the one area where blue light glasses may offer some benefit... But do you need them for better sleep? Probably not" (Dr. Petro: "healthy sleep habits matter just as much, if not more")
  - Names the placebo effect explicitly as a real, separate mechanism
- Strengths (what they do well):
  - Cleanly separates all three commonly marketed claims (eye strain, eye disease/damage, sleep) and gives each its own verdict — this is the exact three-way split the brief's evidence-gate section needs
  - Names a real clinician (Dr. Kathleen Petro) with direct quotes per claim, allowlist-class domain
- Gaps / weaknesses (what they miss):
  - No links to primary studies in the fetched body; the piece summarizes expert opinion, not literature, so pair with Cochrane/AAO for the primary-source layer

### 7. Blue-light filtering spectacle lenses for visual performance, sleep, and macular health in adults (Cochrane, via PubMed)
- URL: https://pubmed.ncbi.nlm.nih.gov/37593770/
- Domain: pubmed.ncbi.nlm.nih.gov (Cochrane Database Syst Rev abstract, PMID 37593770)
- SERP rank (1-10): 42 (evidence-keyword capture, `_serp_evidence.json`)
- DR (if known from Ahrefs extension): not captured (primary source / allowlist-class, NIH domain)
- Word count (approximate): 7,325 (full PubMed page; abstract itself is a fraction of this)
- Title formula: informational / data (systematic review)
- Hook style (opening angle): N/A — clinical abstract, no marketing framing
- Top H2/section headings: N/A — structured abstract (Background, Objectives, Search methods, Selection criteria, Data collection and analysis, Main results, Authors' conclusions)
- Key data points cited (quote precisely, per brief instruction — do not overstate in either direction):
  - Scope: "We included 17 RCTs, with sample sizes ranging from five to 156 participants, and intervention follow-up periods from less than one day to five weeks."
  - Eye strain: "There may be no difference in subjective visual fatigue scores with blue-light filtering lenses compared to non-blue-light filtering lenses, at less than one week of follow-up (low-certainty evidence)."
  - Visual performance (BCVA): "there is probably little or no effect of blue-light filtering lenses on BCVA compared with non-blue-light filtering lenses" (moderate-certainty evidence)
  - Sleep: "We do not know if blue-light filtering spectacle lenses are equivalent or superior to non-blue-light filtering spectacle lenses with respect to sleep quality (very low-certainty evidence)... three studies reported a significant improvement in sleep scores... and the other three studies reported no significant difference"
  - Overall conclusion (verbatim, Authors' conclusions): "This systematic review found that blue-light filtering spectacle lenses may not attenuate symptoms of eye strain with computer use, over a short-term follow-up period, compared to non-blue-light filtering lenses... Potential effects on sleep quality were also indeterminate, with included trials reporting mixed outcomes among heterogeneous study populations."
  - Adverse events: "Reported adverse events related to blue-light filtering lenses were infrequent, but included increased depressive symptoms, headache, discomfort wearing the glasses, and lower mood" (9 RCTs, 333 participants, low-certainty evidence)
- Strengths (what they do well):
  - This is THE primary source for the post's evidence gate — a 2023 Cochrane systematic review of 17 RCTs, with GRADE-rated certainty per outcome. Quotable, precise, and honest in both directions (does not claim "no effect," it grades certainty per outcome and calls sleep effects "indeterminate," not "disproven")
- Gaps / weaknesses (what they miss):
  - This is an abstract page, not the full review; per `_serp_selection.md`, PMC12833160 (rank 49) is held in reserve as a fallback primary source if this one proves too thin for a specific claim
  - Reviews adult populations only — do not extend its conclusions to children

### 8. Are Blue Light-Blocking Glasses Worth It? (American Academy of Ophthalmology)
- URL: https://www.aao.org/eye-health/tips-prevention/are-computer-glasses-worth-it
- Domain: aao.org
- SERP rank (1-10): 44 (evidence-keyword capture, `_serp_evidence.json`)
- DR (if known from Ahrefs extension): not captured (primary professional-body source / allowlist-class)
- Word count (approximate): 841
- Title formula: informational / problem, direct
- Hook style (opening angle): opens by naming the marketing claims directly, then states the Academy's position in the second paragraph without hedging: "There is no scientific evidence that the light coming from computer screens is damaging to the eyes. Because of this, the Academy does not recommend any special eye wear for computer use."
- Top H2/section headings:
  - Is Blue Light From Screens Hurting My Eyes?
  - Do Blue Light-Blocking Glasses Help With Eye Strain?
  - What Can I Do To Ease Eye Strain?
  - My Child Uses Screens All Day. Do They Need Special Glasses?
- Key data points cited (quote precisely):
  - "Several studies suggest that blue light-blocking glasses do not improve symptoms of digital eye strain. The American Academy of Ophthalmology does not recommend blue light-blocking glasses because of the lack of scientific evidence that blue light is damaging to the eyes."
  - "A study reprinted by the National Library of Medicine found no measurable UVA or UVB radiation (the most harmful part of light) from computer screens."
  - On sleep (the one area AAO does concede some effect): "There is some evidence that blue light affects the body's circadian rhythm... The best way to avoid sleep disruption is to avoid using screens two to three hours before bed. Using 'dark' or 'night' mode on devices in the evening can help, too." — note AAO frames this as a behavior recommendation, not a glasses recommendation.
  - Concrete eye-strain habits (usable for the "what actually helps" section): "Sit about 25 inches (arm's length) from the computer screen... Take regular breaks using the '20-20-20' rule... use artificial tears... If you wear contact lenses, give your eyes a break by wearing your glasses."
- Strengths (what they do well):
  - The single most quotable, unhedged professional-body position statement in the whole set. Short, and every sentence is directly usable.
  - Gives concrete, non-glasses eye-strain interventions the post can recommend instead (arm's length, 20-20-20, artificial tears)
- Gaps / weaknesses (what they miss):
  - Published/last reviewed March 5, 2021 per byline (older than the 2023 Cochrane review); still Google's rank-44 result for the evidence query as of this capture, and its position is consistent with Cochrane's later findings, so treat as current

## Title modifier tally

Words appearing across the primary capture's 9 SERP titles (`_serp.json`), ranked by frequency.

| Word / Modifier | Count | Notes |
|---|---|---|
| blue light / blue-light | 9 | present in every title (query term) |
| glasses | 8 | all but rank 5 (GUNNAR, uses "Glasses" too, so effectively 9) |
| best | 4 | ranks 2, 6, 7, 8 |
| 2026 | 3 | ranks 2, 7, 8 (all three editor-tested roundups date-stamp) |
| tested / testing | 2 | ranks 2 ("Tested by Editors"), 3 ("testing 30 pairs") |
| blocking | 4 | ranks 4, 6, 8, and implied in "Blokz" branding (rank 9) |
| computer | 2 | ranks 5, 6 |
| night / night time | 1 | rank 4 |

## Audience inferences

- Primary audience: students and early-career professionals on screens 8+ hours a day, per brief. Evidenced by the SERP's mix of workplace-framed picks (Health.com's "BEST FOR WORKING," CNN's Zoom/meeting-glare framing) and the PAA's skepticism about whether the product does anything — this is a buyer doing homework before spending money, not an impulse shopper.
- Secondary audience: night-time/sleep-focused searchers, evidenced by `_serp_students.json`'s heavy skew toward kids'-glasses brand pages (Blockbluelight, Boncharge, Axon Optics) and by the distinct evening/amber-lens content cluster (optimizeyourbiology.com, rank 29; blockbluelight.com night-time collection, rank 4).
- Reader knowledge level: intermediate — the PAA questions ("Do any blue light glasses actually work?") show readers have already encountered the hype and are actively looking for a debunk/verify answer, not a 101 explainer.
- Reader intent: mixed (commercial + informational). Confirmed by the split between shopping-page results and the informational evidence cluster Google surfaces for adjacent queries.

## Angle opportunities

- Lead with the honest evidence gate before any product picks — Health.com and Wirecutter both do this, but neither cites Cochrane or AAO directly by name/URL in the fetched body text the way this post's brief requires; doing so with precise, non-overstated quotes is a credibility edge over all 8 selected competitors.
- Explicitly separate the daytime eye-strain claim from the evening/sleep claim as two different questions with two different evidence bases — Wirecutter does this best among competitors but still blends them somewhat in its picks section; Cleveland Clinic's three-way split (eye strain / eye disease / sleep) is the cleanest model to structure the post's evidence section around.
- Recommend a separate evening/amber pair for night study as a distinct purchase decision, not a feature toggle on the daytime pair — only optimizeyourbiology.com (rank 29, a niche affiliate site) and the r/sleephackers thread (rank 3) treat this as its own category; none of the three mainstream roundups (Health.com, CNN, Wirecutter) frame it this way for a student audience specifically.
- Give readers the buyer-protection framing surfaced in Reddit (see reddit.md) about opticians upselling blue-light coatings — none of the 8 SERP competitors mention this angle at all.

## Avoid pitfalls

- Do not lead with product picks before addressing whether blue light glasses "work" — every one of the three top-ranking mainstream roundups (Health.com, CNN, Wirecutter) already does the "do they work" hedge; skipping it would read as less credible than the competition, not more.
- Do not present a single "% blue light blocked" marketing number as meaningful without context — both spectrometer-testing sources in this SERP (rank 3 Reddit, rank 29 optimizeyourbiology.com) independently make the point that manufacturer blocking-percentage claims are often unverified or misleading depending on lens style (wraparound vs. regular) and measurement method (circadian-light reduction vs. lux/brightness).

## Use-in-post facts

### Statistics
- Cochrane systematic review included 17 RCTs (5-156 participants each, follow-up under 1 day to 5 weeks), source: https://pubmed.ncbi.nlm.nih.gov/37593770/
- Health.com tested 24 pairs over 300+ hours, consulting 5 named eyecare experts, source: https://www.health.com/condition/eye-health/best-blue-light-glasses
- Wirecutter tested 13 pairs with a 3-person panel and interviewed 3 optometrists, 2 eyeglasses providers, 2 sleep specialists, a medical doctor, and an ergonomics expert, reading "nearly two dozen studies," source: https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/
- Reddit r/sleephackers post independently spectrometer-tested 30+ pairs (score 1,191, 402 comments), source: https://www.reddit.com/r/sleephackers/comments/12ci2fp/i_just_finished_testing_30_pairs_of_blueblocking/

### Quotes
- "This systematic review found that blue-light filtering spectacle lenses may not attenuate symptoms of eye strain with computer use, over a short-term follow-up period, compared to non-blue-light filtering lenses.", Cochrane Database Syst Rev (Singh et al., 2023), source: https://pubmed.ncbi.nlm.nih.gov/37593770/
- "There is no scientific evidence that the light coming from computer screens is damaging to the eyes. Because of this, the Academy does not recommend any special eye wear for computer use.", American Academy of Ophthalmology, source: https://www.aao.org/eye-health/tips-prevention/are-computer-glasses-worth-it
- "the American Academy of Ophthalmology doesn't recommend blue light glasses for eye strain", attributed via Dr. Kathleen Petro, MD, source: https://health.clevelandclinic.org/do-blue-light-blocking-glasses-actually-work
- "Blue-light blocking glasses can help you sleep... Blue-light blocking glasses probably won't reduce headaches or digital eye strain.", NYT Wirecutter (Kaitlyn Wells and Zoe Vanderweide), source: https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/
- "experts say evidence on the effectiveness of blue light glasses is mixed", Health.com (Jaylyn Pruitt), source: https://www.health.com/condition/eye-health/best-blue-light-glasses

### Named examples
- Infield Terminators, TrueDark Twilights, FilterOptix, Block Blue Light — evening/night-specific lab-tested picks, context: optimizeyourbiology.com's spectrometer-based evening-lens roundup, distinct product category from daytime clear-lens computer glasses, source: https://optimizeyourbiology.com/best-blue-blocking-glasses
- Sojos She Young, Tijn Blue Light Blocking Glasses, EyeBuyDirect Escape/Botanist Glasses — Wirecutter's 4 picks, context: budget-to-midrange, chosen specifically for near-colorless lenses and comfort over blocking-percentage claims, source: https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/

## Competitor product mentions

| Tool | Mentioned in (# of top results) | Typical positioning |
|---|---|---|
| Felix Gray (Jemison / Carver) | 3 (Health.com, CNN, own brand page rank 1) | best for working / Zoom calls, no reflective glare, Rx option |
| Warby Parker (Thurston / Keiko) | 2 (Health.com, CNN) | most versatile, Rx-compatible, style-forward |
| Peepers by PeeperSpecs | 2 (Health.com, CNN "Peepers Dante") | best for headaches / readers, budget-to-mid |
| Zenni (Blokz) | 2 (CNN, own brand page rank 9) | editor-favorite, long-term daily wearer testimonial |
| EyeBuyDirect | 2 (CNN — Amber Glasses + St. Michel Glasses) | Rx-compatible, budget, style variety |
| GUNNAR | 1 (own brand page, rank 5) | gaming/computer-specific positioning, not independently reviewed in selected picks |
| Swanwick (Night Swannies) | 1 (CNN) | dedicated evening/night pair, amber tint, 99-100% claimed blue-light block (unverified in fetched body) |

## Citations harvested from competitors

Per `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md` §"Forbidden external links", the top-10 SERP URLs themselves are off-limits as external links. These are the primary/authoritative sources the competitor articles cite instead.

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://academic.oup.com/jcem/article/88/9/4502/2845835 | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | "the difference between falling asleep in 30 minutes and one hour" (melatonin suppression from evening blue light exposure) | primary_source |
| https://www.aao.org/eye-health/tips-prevention/are-computer-glasses-worth-it | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | AAO's position that blue-light-blocking glasses aren't proven to reduce eye strain | auth_allowlist |
| https://www.aao.org/eye-health/diseases/amd-macular-degeneration | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | background on age-related macular degeneration, referenced when discussing (and largely dismissing) the eye-damage claim | auth_allowlist |
| https://www.aoa.org/news/clinical-eye-care/health-and-wellness/blue-light-hype-or-much-ado-about-nothing?sso=y | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | American Optometric Association's position on blue-light hype | auth_allowlist |
| https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome?sso=y | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | definition/background on digital eye strain (computer vision syndrome) | auth_allowlist |
| https://www.aao.org/editors-choice/sunlight-exposure-reduces-myopia-in-children | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | backs the claim that natural blue-wavelength light exposure helps prevent myopia in children, hence most kids shouldn't wear blue-light glasses | auth_allowlist |
| https://journals.lww.com/optvissci/Fulltext/2019/07000/Spectral_Evaluation_of_Eyeglass_Blocking.8.aspx | https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ | a July 2019 spectral-evaluation study of blue-light-blocking eyeglass lenses, referenced in the testing/methodology discussion | primary_source |
| https://health.ucdavis.edu/blog/cultivating-health/blue-light-effects-on-your-eyes-sleep-and-health/2022/08 | https://www.health.com/condition/eye-health/best-blue-light-glasses | backs the claim that blue light's negative side effects "can include eye strain, dry eyes, headaches, and difficulty sleeping" | primary_source |
| "Studies show that when people wear blue-light-blocking glasses, they're more likely to fall asleep faster and experience improved sleep" | https://www.cnn.com/cnn-underscored/health-fitness/best-blue-light-glasses | sleep-improvement claim attributed only to "studies," no source linked in the fetched `externalLinks` field (all CNN outbound links were internal navigation/other CNN articles) | claim_only_in_competitor |

## Open questions for editor

- CNN Underscored's `externalLinks` field contains no primary-source citations at all (every harvested link was CNN internal nav or unrelated CNN Underscored articles) — its sleep-benefit claim and several expert quotes have no linkable backing in the fetched data. Flagging so the editor can decide whether to independently source that claim or drop it.
- `29-optimizeyourbiology-com.json` is an affiliate-heavy niche site; its named picks (TrueDark, FilterOptix, Block Blue Light) may not be available via Amazon `/dp/<ASIN>` links the way the brief requires — the editor/Stage 3d product-link step should verify Amazon availability before including these as picks.
- PMC12833160 (rank 49, the fallback primary source per `_serp_selection.md`) was not deep-fetched in this pass; if any Cochrane-sourced claim in the draft needs stronger backing than the abstract provides, this is the reserve source to pull.
