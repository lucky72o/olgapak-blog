# Brief: screen-free-hobbies

Written by: blog-editor (Stage 0 intake, autopilot / headless).
Sourced from: `blog-ops/content-plan.md` row #20 + profile docs + `blog-ops/content-audit.md` (no human conversation; autopilot file-intake per SKILL.md §Autopilot).
Read by: all subsequent agents (researcher, editor in later stages, writer).

## Topic / Target Keyword

`screen-free hobbies`
Secondary: screen free hobbies, hobbies without screens, offline hobbies, non-screen hobbies, hobbies to replace screen time, analog hobbies

## Category

Productivity  (Digital wellbeing / beating phone distraction pillar → `Productivity`, WP term id **12**, per `site-conventions.md` §Categories)

## Intent

informational_pillar

The content-plan row is "INFO listicle: 50 Screen-Free Hobbies to Try This Year". The query is browse-and-choose, not do-this-now: readers want a wide, well-sorted menu of options they can pick from, plus enough guidance to actually stick with one. Structure is therefore a categorised listicle with a short framing section up front and a "how to actually keep it going" section near the end, not a step-by-step how-to. Re-confirmed against the live SERP at Stage 1a; if the SERP is dominantly problem/solution framed (screen-time detox angle), the plan rebalances the framing sections upward.

## Audience emphasis

Primary: students and early-career professionals who already know their screen time is too high and have decided to do something about it. They are past "why is scrolling bad" and want a concrete menu of things to do with the hours instead. They are usually short on money, short on space, and short on confidence that they will stick with anything ("I always start a hobby and quit in two weeks"). Secondary: the blog's broader digital-wellbeing readers arriving from `/how-to-reduce-screen-time` and `/digital-detox-plan` looking for the "replace, don't just remove" step those posts point at.

## Research sources enabled

- serp: yes (always)
- reddit: yes (`modules.reddit_research` on; r/hobbies, r/nosurf, r/digitalminimalism, r/simpleliving and r/getdisciplined carry unusually strong voice-of-customer signal on this exact topic: real people naming what they actually took up, what stuck, what cost, and what they quit)
- x: yes (`modules.x_research` on; enabled to catch analog-revival and "touch grass" takes the SEO top-10 misses; dropped from analysis at selection if the capture is off-topic, which is likely on a query this generic)

## Author voice

olga

Reasoning: single-author blog. `authors.md` lists one author and defines no multi-author selection rubric, so Olga's warm, tested-from-experience, beginner-friendly voice is the only voice, and it fits a "here is what actually stuck for me" hobby menu directly.

## What the human wants to convey

This is a Digital-Wellbeing-cluster listicle (content-plan post #20, "INFO listicle: 50 Screen-Free Hobbies to Try This Year"). It should:

- **Carve itself out from the two existing live posts it would otherwise cannibalise.** `/things-to-do-instead-of-being-on-your-phone` (75 items) is the *filler* post: cheap, zero-commitment things to do with ten spare minutes, explicitly framed as "don't require a new hobby or any equipment". `/productive-things-to-do-on-your-phone-instead-of-scrolling` is the *on-screen* alternative. This post is the third, different thing. It covers **durable hobbies**, meaning pursuits with a learning curve, a next session, and a version of you six months from now who is better at them. Say that distinction out loud early, and link to the 75-item post for readers who want the low-commitment option instead. Do NOT re-list its items.
- Deliver a genuinely wide, genuinely sorted menu of roughly 50 hobbies grouped into categories readers can self-select from (e.g. making/craft, movement/outdoors, mind/learning, music/performance, food, growing things, collecting/tinkering, social/community, quiet/restorative). Grouping is what makes 50 usable instead of a wall of nouns.
- Give each hobby enough to act on, not just a name: one line on what it actually involves, and, where it matters, the honest entry cost (free / cheap / needs kit) and the realistic barrier to starting. A bare list of 50 nouns is exactly the SEO filler this blog does not publish.
- Be honest that most people do not fail at hobbies for lack of ideas, they fail at the *starting and sticking* part. Include a short section on picking one (not five), sizing the first session down, and scheduling it, linking to the blog's own planning posts rather than re-teaching them.
- Acknowledge the awkward truth of the topic without moralising: screens are not evil, the goal is that the evening has somewhere else to go. No "phones are destroying your brain" panic, no digital-detox purity.
- Address the practical objections readers actually have: no money, no space, no time, no talent, living somewhere with bad weather, being the only person you know who does not want to be on a screen.
- Soft, tested-from-experience Olga framing throughout. She has a genuine, on-brand angle here: going back for a Master's and rediscovering learning for its own sake is exactly the "durable hobby" argument this post makes.

## Product features to mention

- **At most ONE soft mention, in or immediately before the closing CTA.** The blog's primary CTA (`blog.md`: the free AI tools page, `/ai-tools`, hook "Try my free AI tools to automate the mundane") is the required close, and the honest bridge for this post is time, not features: automating the mundane admin (drafting the email, summarising the long read) is how the hour for a hobby gets freed in the first place.
- Preferred tool if one is named: **Email Generator** or **Text Summarizer**, whichever the writer can bridge to without strain.
- **Deliberate constraint:** this is a screen-free post recommending screen-based tools, and a clumsy mid-post plug would undercut the whole piece. Do not scatter product mentions through the hobby list, and do not frame an AI tool as a hobby. One mention, at the end, about buying back time.

## Soon-to-ship features (do NOT flag as gaps)

- None.

## First-party data points to include

- None. `product.md` §First-party data availability lists only `hypothetical` tool-usage data, which is not citable. Do not invent adoption, usage, or "readers who tried this" numbers.

## Avoid list

- **No re-run of `/things-to-do-instead-of-being-on-your-phone`.** Different post, different job (see the carve-out above). Link to it, do not absorb it.
- No hustle-culture framing. A hobby does not have to be monetisable, a side project, or "productive". Explicitly push back on that, it is on-brand for this blog and it is what the audience is tired of.
- No moralising about phones, no "dopamine detox" pseudo-science, no claims that screens cause a specific medical outcome.
- **No unsourced research claims.** Screen-time, attention-span, and "hobbies reduce cortisol/anxiety" statistics are a swamp of miscited pop-science. Any health, wellbeing, or attention claim must come from a primary or allowlist source, confirmed to actually say it; otherwise `[VERIFY:]` it or write the general, defensible version instead.
- **No prices, and no affiliate links in this post.** It is not a product roundup, no Amazon links are planned, so the affiliate disclosure must NOT appear (it belongs only in posts carrying a tagged Amazon link, per `site-conventions.md` §Post furniture). If a hobby genuinely needs kit, describe the kit category and its rough cost *tier* (free / under-a-tenner / real investment) rather than a number that goes stale.
- No unexplained jargon: translate anything niche on first use ("analog", "slow hobby", "flow state", "digital minimalism").
- No filler entries padded to hit 50 ("breathing", "existing", "thinking"). If the honest list lands at 45 usable hobbies, the title and the count get adjusted rather than the list padded.
- No year-stamped claims that rot ("in 2026, everyone is...").

## Founder anecdote / story

Strong candidate available and encouraged: Olga's return to study for a Master's after 8+ years in aviation PR, picking learning back up for its own sake, questioning "what else does life have in store?" That is the exact argument of this post (a durable pursuit beats a filler activity), told honestly rather than as a productivity flex. The "intimidated by scary tech acronyms" beat also fits the "I have no talent for this" objection section. Writer weaves a short, genuine version; skip if it starts to feel bolted on.

## Internal link targets

Existing posts this new one should link to. Confirmed live on olgapak.com; the first five also have a repo copy in `content/blog/`:

- `how-to-reduce-screen-time`: the cluster pillar. Its "Replace, don't just remove" section literally points at this post's job. Strongest up-link, and the strongest inbound candidate too.
- `digital-detox-plan`: the intensive 7-day reset; the natural "if you want the structured version first" link.
- `how-to-stop-doomscrolling`: the trigger-level fix for readers whose problem is the scrolling itself, not the empty evening.
- `how-to-plan-your-week`: for the "schedule it or it will not happen" section.
- `time-blocking`: same, at the single-session level (give the hobby a slot).
- `things-to-do-instead-of-being-on-your-phone` (live, no repo copy): **the carve-out link.** For readers who want low-commitment filler rather than a hobby. Place it early, in the framing section, not buried.

Not published, do NOT link: `dopamine-detox` (#28), `bullet-journal-for-beginners` (#17), any other `planned` row in `content-plan.md`. If the writer wants a link it cannot confirm, it marks `[INTERNAL_LINK_NEEDED:]`.

## Source URLs for researcher to study

None. Let the researcher find their own from the live SERP.

## Other notes

- **Cluster role:** this is the "replace the time" spoke of the Digital Wellbeing cluster, sitting under the `/how-to-reduce-screen-time` pillar alongside `/digital-detox-plan` (reset) and `/how-to-stop-doomscrolling` (trigger). Planned inbound links at outline should come from `how-to-reduce-screen-time` (its "Replace, don't just remove" bullet) and `digital-detox-plan`; `how-to-stop-doomscrolling` is a good third.
- **Count discipline:** the title promises 50. The list must actually contain 50 distinct, non-padded hobbies, or the title and H1 change to the honest number before staging. The reviewer should check the count against the title.
- **Image plan note:** the featured slot stays `ai-prompt` per `config.yaml` + `custom-instructions.md`. In-post slots here are scenes and category illustrations, so `ai-prompt` is the natural type; there is little genuine chart/diagram material, so do not force `remotion` slots. (A single "pick one, not five" or category-map diagram would be the only defensible `remotion` candidate.)
- **Publish target:** WordPress (`wordpress-rest` adapter). The post stays `draft`; going live is the operator's manual wp-admin action after setting the Rank Math focus keyword (per `custom-instructions.md`).

## Autopilot assumptions

Recorded per SKILL.md §Autopilot "Intake without a conversation". Every judgment call made without a human:

1. **Author:** `olga`. `authors.md` defines a single author and no multi-author selection rubric, so the single-author path applies (not the "first author listed" fallback).
2. **Intent = `informational_pillar`.** The content-plan row is an INFO listicle and the keyword is a browse/idea query, not a task ("how to…") or a purchase ("best…"). Assumed rather than confirmed; re-checked against the observed SERP intent at Stage 1a, and the plan rebalances if the live results are dominantly problem/solution.
3. **Research sources:** SERP always; Reddit and X both enabled because both modules are on. Reddit is expected to carry the most signal (this topic is discussed constantly and concretely in hobby and no-scroll subreddits). X is enabled speculatively and will be dropped at selection if the capture is off-topic, which is likely for a query this generic.
4. **Category:** `Productivity` (WP term 12), from `site-conventions.md` §Categories' "Digital wellbeing / beating phone distraction → Productivity" row, which that table marks *(human to confirm)*. Matching the cluster's already-published posts is the safest call absent a human; flag at Gate 2 if the operator wants a dedicated wellbeing category created instead.
5. **The cannibalisation carve-out:** not stated in the content-plan row; derived from `content-audit.md` #8/#9 and `product.md` §Existing posts, which show two live posts covering adjacent ground, one of which (`/things-to-do-instead-of-being-on-your-phone`, 75 items, "things to do instead of being on your phone") would directly compete without a stated distinction. The hobbies-vs-filler split is the editor's call and is the single most load-bearing assumption in this brief. If Stage 1a shows the live SERP for "screen-free hobbies" is in fact the same "things to do" intent, the plan revisits it.
6. **Product mention held to one, at the end.** `product.md` §Positioning recommendations asks for one topic-matched soft mention after the educational content; the topic-match here is weak by nature (screen-free post, screen-based tools), so the bridge is time-freed rather than a feature. Constraint added by the editor, not by any profile doc.
7. **No affiliate links, no disclosure:** no Amazon roundup content is planned, so `custom-instructions.md` §Content policy's affiliate rules do not fire and the disclosure paragraph is deliberately omitted. If the draft ends up recommending specific purchasable kit with links, that decision flips and the disclosure becomes mandatory.
8. **Competitors:** `modules.competitors` is off for this blog, so the "Competitors by post" table is not read and no competitors are recorded. Stage 1.5c is correctly skipped.
9. **Internal link targets:** restricted to posts confirmed live in `content-audit.md` / `content/blog/`. `things-to-do-instead-of-being-on-your-phone` has no repo copy but is confirmed live (audit row #8) and is already linked from `content/blog/how-to-reduce-screen-time.md`, so it is safe to link.

---

## Metadata

- Created by: blog-editor (autopilot)
- Created at: 2026-09-02 00:07
- Human operator: slav (headless, operator console autopilot run)
