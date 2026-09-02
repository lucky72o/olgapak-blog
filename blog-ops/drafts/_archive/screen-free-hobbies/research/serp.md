# SERP Research: screen-free hobbies

Written by: blog-researcher agent, invoked with `source=serp`.
Read by: blog-editor (synthesis stage).
Source: Google SERP via pre-fetched raw JSON (`_raw/_serp.json`, `_raw/_serp_selection.md`, `_raw/NN-*.json`). Never hallucinate, cite every claim.

## Query metadata

- Search engine: Google
- Query used: `screen-free hobbies`
- Date searched: 2026-09-01 (captured 2026-09-02 per selection note)
- Top N results studied: 6 of 8 organic (deep-fetched)
- Browser session: logged in, UK-localised (operator location TW10, Richmond, per `_serp_selection.md`)
- Any SERP features observed: People Also Ask, People Also Search For, Top Stories carousel. No AI Overview, no featured snippet, no Google Shopping pack.

## SERP shape (inferred)

**best-of-listicle**

Reasoning: every non-forum organic result on page 1 is a numbered list of screen-free hobbies/activities (8, 55, 10, 30, 50 items respectively); no how-to, no product roundup, no definitional explainer ranks. Source: `_raw/_serp.json` titles + all 6 deep-fetched articles.

## Search intent

- Dominant intent: **informational**, browse-and-choose. Confirmed from harvested files: 5 of 6 deep-fetched results are pure numbered lists of hobby ideas (Vogue 8, Guardian 55, Everygirl 10, Mudita 30, Game Quitters 50); the 6th (The Works) is a near-empty exact-match hub, not a competing format. A Reddit thread ("What are your non-screen/non-tech hobbies?") ranks organically at #2, above every publisher except Vogue.
- Evidence: no AI Overview, no featured snippet, no Shopping pack, no comparison/review formatting anywhere on page 1 (`_raw/_serp.json` serpFeatures + all 6 fetched articles' h2s).
- Secondary intent: none distinct, all results converge on the same list format. One structural signal worth noting: `04-theworks-co-uk.json` is a 278-word retailer hub ranking #4 on an exact-keyword URL with almost no prose, which shows this query is weakly defended, not a competing intent.
- Implication for our post structure: lead with the menu of hobbies (matches the observed intent), organized with real structure since nothing on page 1 states an organizing principle beyond "by age" (Game Quitters) or loose category labels. The hobbies-vs-filler carve-out from brief.md is not SERP-mandated, it should be framing/context, not the spine of the post.

## Selected results analyzed

### 1. 8 Analogue Hobbies To Reset Your Attention Span This Autumn (British Vogue)
- URL: https://www.vogue.co.uk/article/scree-free-hobby-ideas
- Domain: vogue.co.uk
- SERP rank: 1
- DR: not available in raw data
- Word count: 1,866
- Title formula: problem/mixed ("Reset Your Dopamine" framing, informational)
- Hook style: opens by explicitly refusing to cite screen-time statistics ("I'm not going to berate you with statistics about screen time. Let's just agree that too long spent staring at a screen ... makes you feel a bit icky.") then pivots straight to editor-personal hobby picks.
- Top H2/section headings: Watercolour painting, Bedazzling, Crafting, Gardening, Jewellery making, Baking, Collaging, Paint-by-numbers
- Key data points cited: none. No statistics, no cited research; explicitly first-person editor testimony only.
- Strengths: strong personal voice per entry (each hobby written as "I tried this"), gives it more texture than a bare list.
- Gaps / weaknesses: no cost guidance per entry (article links almost entirely to paid products/affiliate shopping, £33–£450 range, via `externalLinks`), no structure/organizing principle, short at 8 items, zero engagement with the "no money" or "no space" objections.

### 2. Beat brain rot: clear your mind with 55 screen-free activities (The Guardian)
- URL: https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities
- Domain: theguardian.com
- SERP rank: 3
- DR: not available in raw data
- Word count: 3,628
- Title formula: data/problem hybrid ("55 activities", "Beat brain rot")
- Hook style: opens on mindfulness/anxiety framing ("Feel like screen time is sapping your concentration?") then explicitly invokes "social media anxiety" and the Oxford "brain rot" word-of-the-year before listing.
- Top H2/section headings: Gardening, Jigsaws for adults, Jigsaws for kids, Birdwatching, Colouring books for adults, Colouring books and art for kids, Outdoor yoga, Journaling for adults, Journaling for kids, Lego for kids, Lego for adults, Running, Puzzle books for adults, Puzzle books for kids
- Key data points cited:
  - "mindfulness ... can help to reduce symptoms of anxiety and boost concentration" (unattributed in-body, but linked to mentalhealth.org.uk and health.harvard.edu, see citations table below)
  - "immersing yourself in nature can positively affect your mental health" (linked to mind.org.uk)
  - "Jigsaws are thought to help children develop their hand-eye coordination and problem-solving skills" (linked to sciencedaily.com)
- Strengths: longest, most structurally comparable list (55 items) to a 50-item post; splits several categories by adult/kids sub-entries; the only competitor that cites external sources for its health claims rather than asserting them bare.
- Gaps / weaknesses: heavily kids-inclusive (Jigsaws for kids, Lego for kids, Puzzle books for kids, Colouring for kids) which this blog's adults-only brief explicitly avoids; entries lean shopping-affiliate (prices for jigsaws, binoculars, journals) rather than skill guidance; no cost-tier framing, no "how to actually stick with it" guidance.

### 3. Screen-Free Hobby Inspiration (The Works)
- URL: https://www.theworks.co.uk/inspiration/screen-free-hobbies
- Domain: theworks.co.uk
- SERP rank: 4
- DR: not available in raw data
- Word count: 278 (confirmed thin on fetch, per `_serp_selection.md` correction)
- Title formula: informational
- Hook style: N/A, page is a near-empty inspiration hub, not an article. `bodyText` is dominated by site navigation and category links, not prose.
- Top H2/section headings: "The Joy of Jigsaws: Why Puzzles Are the Perfect Winter Hobby", "25 Screen-Free Bedtime Short Stories for Children", "How to Find Hobbies as an Adult", "Free Simple Crochet Patterns" (these read as teaser links to other hub pages, not sections of this page's own content)
- Key data points cited: none, no usable prose.
- Strengths: none content-wise. The only real signal: an exact-keyword-match URL on a near-empty retailer hub still ranks #4.
- Gaps / weaknesses: no usable entries, no cost data, no citations. Confirms this query is weakly defended, a thorough, well-structured 50-item post can plausibly outrank incumbents on depth alone.

### 4. 10 Analog Hobbies to Replace Your Screen Time This Year (The Everygirl)
- URL: https://theeverygirl.com/analog-hobbies/
- Domain: theeverygirl.com
- SERP rank: 5
- DR: not available in raw data
- Word count: 1,980
- Title formula: transactional/how_to hybrid ("Replace Your Screen Time This Year")
- Hook style: first-person confessional ("I hate to admit it, but my screentime is embarrassingly high...") plus a millennial-nostalgia framing ('90s nostalgia creeping back into pop culture) before the list starts.
- Top H2/section headings: 1. Needlepoint, 2. Coloring, 3. Reading, 4. Sending snail mail, 5. Cooking and baking, 6. Solo dates, 7. Paint-by-number, 8. Junk journaling, 9. Gardening, 10. Taking in-person classes
- Key data points cited: none, purely editor testimony and product recommendations.
- Strengths: the only page-1 result using "analog hobbies" vocabulary as its primary term (matches the trend vernacular seen on X); "Solo dates" and "Taking in-person classes" are non-craft entries that broaden the category usefully.
- Gaps / weaknesses: heavily shopping/affiliate-driven (needlepoint kits, Etsy links, rewardStyle links dominate `externalLinks`); short at 10 items; no cost-tier framing; no engagement with the cost objection raised repeatedly on Reddit/X.

### 5. 30 Offline Hobbies to Do at Home (Mudita)
- URL: https://mudita.com/community/blog/30-offline-hobbies-to-try-indoors/
- Domain: mudita.com
- SERP rank: 6
- DR: not available in raw data
- Word count: 2,604
- Title formula: informational/data
- Hook style: opens with unsourced blue-light health claims ("negative effects of blue light can impact your sleep, eyesight and overall health") before listing hobbies.
- Top H2/section headings: "Learn by getting lost - hobbies you can do at home" (single umbrella H2; the 30 items are sub-headed within, not captured as distinct h2s in the raw extraction)
- Key data points cited: unsourced "blue light" claims (no external citation for the health claim itself); one linked reference to `bustle.com` (benefits of cooking) and `nourishmedicine.com` (antioxidants), neither of which is a primary source or allowlist domain.
- Strengths: published by a digital-wellbeing brand (Mudita makes minimalist phones), so entries are argued rather than just listed; mid-size list (30) shows where padding starts to creep in.
- Gaps / weaknesses: unsourced health claims (exactly the "swamp of miscited pop-science" brief.md warns against); citations that do exist point to non-authoritative lifestyle sites (Bustle, a supplement blog), not usable per our allowlist/primary-source standard.

### 6. 50 Best Screen-Free Activities by Age (Game Quitters)
- URL: https://gamequitters.com/best-screen-free-activities-by-age/
- Domain: gamequitters.com
- SERP rank: 7
- DR: not available in raw data
- Word count: 3,292
- Title formula: informational, organized by age
- Hook style: opens addressing "parents who are concerned that gaming is taking over their child's life," framing the whole piece around child gaming-addiction intervention, not adult screen-time replacement.
- Top H2/section headings: "What is healthy gaming?", "Screen-free activities by age", "Need help?"
- Key data points cited: none externally sourced; the "healthy gaming" definition is asserted, not cited.
- Strengths: the only result with a stated organizing principle (by age: toddlers, kids, tweens, teens, adults); useful as the clearest counter-example for how NOT to structure this post, since this blog is adults-only.
- Gaps / weaknesses: fundamentally a child gaming-addiction / parent-support site (site nav includes "Parent Support Group", "Clinical Training" for gaming disorder). Confirms brief.md's warning: audience fragmentation toward kids/teens is real on this SERP and must not drift into our post.

## Title modifier tally

| Word / Modifier | Count | Notes |
|---|---|---|
| screen-free / screen free | 4 | Vogue, Works, Guardian ("screen-free activities"), Game Quitters |
| analog(ue) | 2 | Vogue ("Analogue Hobbies"), Everygirl ("Analog Hobbies") |
| hobbies/hobby | 5 | all except Guardian (uses "activities") |
| numbered count (8/55/10/30/50) | 5 of 6 | every substantive result is a counted list; The Works (thin hub) is the exception |
| "this year" / "this autumn" | 2 | Vogue, Everygirl, time-bound framing |
| by age | 1 | Game Quitters only |

## Audience inferences

- Primary audience: students and early-career adults per brief.md's stated positioning; not directly evidenced in these 6 results (none address budget or space explicitly), but the "People Also Search For" set (`screen free activities for couples`, `for men`, `hobbies to reduce screen time`) confirms a general adult searcher base beyond any one demographic.
- Secondary audience: parents of children/teens (Game Quitters, Guardian's kids sub-sections, People Also Search For entries for "10 year olds" and "for teens"). This blog deliberately does not serve this audience per brief.md.
- Reader knowledge level: beginner, none of the 6 results assume prior hobby experience.
- Reader intent: informational, browse-and-choose (confirmed above).

## Angle opportunities

- **Cost tiers.** None of the 6 deep-fetched results give per-entry cost guidance; Vogue and Everygirl actively push paid products via affiliate links instead. Brief.md's "no prices, cost tiers only" plan directly fills a real, visible gap, and it answers the PAA question "What hobbies can I do for free?" that no page-1 result answers well.
- **Adults-only, no kid drift.** Guardian splits many categories into adult/kid pairs; Game Quitters is fundamentally a parent-of-gamers site. A cleanly adults-only post, stated as such, differentiates from both without extra work.
- **Durable hobby vs quick filler distinction.** No page-1 result distinguishes a hobby with a learning curve from a ten-minute filler activity (per `_serp_selection.md`). This should be light framing per the editor's read, not the post's spine, but it's real differentiation from every SERP competitor.
- **Space constraint.** None of the 6 results address limited living space/storage as an explicit selection filter (Mudita's "indoor" framing is about location, not storage capacity). Flag for editor: needs to be checked against Reddit findings too (see `research/reddit.md`).

## Avoid pitfalls

- Bare, uncited health/psychology claims. Mudita asserts blue-light and mental-health effects with no citation; Vogue explicitly opts out of statistics entirely. Both are commoditized failure modes the brief's "no unsourced research claims" rule already rules out.
- Padding via low-effort/generic entries (e.g., "reading," "gardening," "journaling" repeated near-identically across all 6 results with little differentiation) is already the norm; a 50-item post needs specificity per entry to stand out, per the Everygirl/Guardian comparison of where padding starts around item 25-30 (Mudita, 30 items) versus staying sharp at 55 (Guardian).

## Use-in-post facts

### Statistics
(none traceable to a primary source among the 6 fetched results, see Citations table below for what the Guardian links out to instead)

### Quotes
- "I'm not going to berate you with statistics about screen time. Let's just agree that too long spent staring at a screen ... makes you feel a bit icky.", Morgan Fargo, British Vogue, source: https://www.vogue.co.uk/article/scree-free-hobby-ideas
- "Article said I need a hands-on hobby to combat screen fatigue. Try pottery. Woodworking. Film photography. ... So... $300 minimum to start touching clay." (this is Reddit content, not SERP; retained here only as cross-reference, primary citation lives in `research/reddit.md`)

### Named examples
- "Jigsaws are thought to help children develop their hand-eye coordination and problem-solving skills", context: linked out to a ScienceDaily 2020 release rather than asserted bare, source: https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities (claim itself), citation at https://www.sciencedaily.com/releases/2020/07/200728201605.htm

## Competitor product mentions

No third-party tools/products (software, apps) are mentioned across the 6 results, this is a physical-hobby topic, not a tool-comparison topic. Shopping product mentions are per-entry retail items (Cricut machines, needlepoint kits, jigsaw brands) rather than repeated brands across multiple results, so no cross-result product table applies.

## Citations harvested from competitors

Per `blog-craft.md` §"Forbidden external links", we don't link to top-10 SERP URLs. The Guardian is the only one of the 6 fetched competitors whose article body cites external sources for its claims (rather than bare assertion or affiliate/shopping links); Vogue, The Works, Everygirl, Mudita, and Game Quitters yielded no usable primary-source or allowlist citations, their `externalLinks` are dominated by social/nav/affiliate-shopping links (verified by inspecting all `externalLinks` entries in each raw JSON).

| Cited URL | Cited by (competitor URL) | Claim it backs | Classification |
|---|---|---|---|
| https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/mindfulness | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | Mindfulness "can help to reduce symptoms of anxiety and boost concentration" | primary_source (UK national mental health charity, official info page) |
| https://www.health.harvard.edu/healthbeat/mindfulness-practice-for-focus | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | Same mindfulness/concentration claim as above, second citation in the same sentence | primary_source (Harvard Health Publishing) |
| https://www.mind.org.uk/information-support/tips-for-everyday-living/nature-and-mental-health/ | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | "Immersing yourself in nature can positively affect your mental health" (backs the Gardening entry) | primary_source (UK national mental health charity, official info page) |
| https://www.sciencedaily.com/releases/2020/07/200728201605.htm | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | Jigsaws help children develop hand-eye coordination and problem-solving skills | primary_source (science-news aggregator reporting a study; note this backs a kids-specific claim, likely not usable in an adults-only post) |
| https://corp.oup.com/word-of-the-year/ | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | "Brain rot" as Oxford's word of the year (used in the article's own title/framing) | primary_source (Oxford University Press, official announcement page) |
| https://www.mcleanhospital.org/essential/it-or-not-social-medias-affecting-your-mental-health | https://www.theguardian.com/thefilter/2025/apr/17/screen-free-calming-activities | Backs the article's mention of "social media anxiety" as a reason to unplug | primary_source (McLean Hospital, Harvard-affiliated psychiatric teaching hospital) |

**Note on the Fortune "Gen Z analog hobby boom / birding" claim:** this reached the researcher via `research/x.md` (x-03-FortuneMagazine.json), not via any SERP result, it does not appear as a citation in any of the 6 fetched articles. Per brief.md and `_x_selection.md`, treat it as an unresolved lead, not a citation, until the underlying fortune.com article is fetched and confirmed. Flagged again below and in the X research file.

No `claim_only_in_competitor` rows: Vogue, Everygirl, Mudita, Game Quitters, and The Works either cite nothing or cite non-credible/affiliate destinations only (Bustle, a supplement blog, retail shopping links), so their unsourced claims (Mudita's blue-light assertion in particular) should NOT be repeated in our post without an independently-sourced citation, they have no home to point to.

## Open questions for editor

- The Fortune "Gen Z analog hobby / birding" trend claim (surfaced via X, not SERP) needs the underlying fortune.com article fetched and verified before any use; the tweet is not a citation. See `research/x.md`.
- ScienceDaily's jigsaw/hand-eye-coordination citation backs a kids-specific claim in the Guardian's original context; if reused, confirm whether the underlying study has adult-relevant findings or drop it, this post is adults-only.
- No result on page 1 addresses limited living space/storage as a hobby-selection filter; cross-check against `research/reddit.md` per `_serp_selection.md`'s flag before deciding whether the post needs a dedicated space-constrained section.
- DR (Ahrefs) data was not available in any raw file for these 6 domains; editor may want to pull it separately if link-authority context is needed for the plan.
