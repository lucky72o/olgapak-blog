# Reddit Research: best pens for note taking

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected 5 Reddit threads from a MERGED listing (`_reddit_search.json`: 25 results from the contract query, of which only 3 were on-topic, plus 49 unique results appended from 3 supplementary queries — see `_reddit_selection.md`). Per-thread deep fetches at `research/_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** Reddit raw files are Reddit's native public `.json` API responses. Search response: `data.children[].data`. Thread response: `[postListing, commentListing]`; post at `[0].data.children[0].data` (kind `t3`); top-level comments at `[1].data.children[].data` (kind `t1`; `kind: "more"` entries skipped).

## Search metadata

- Source: Reddit
- Query: contract query `best pens for note taking` (search.json, sort=relevance, t=year, limit=25) merged with 3 supplementary queries (`r/pens` search for "note taking", `best pen for taking notes` sitewide, `r/notebooks` search for "pen") — see `_reddit_selection.md` for the full merge rationale
- Search URL: reddit.com/search.json?q=best+pens+for+note+taking&sort=relevance&t=year&limit=25 (plus 3 supplementary endpoints)
- Date searched: 2026-08-08 (per fetch timestamps on deep-fetched threads)
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

## Selected threads (per editor's `_reddit_selection.md`)

### 1. "I need a pen that can stand up to my excessive class note taking"
- URL: https://www.reddit.com/r/pens/comments/1u85stl/i_need_a_pen_that_can_stand_up_to_my_excessive/
- Subreddit: r/pens
- Author: u/meerkatherine
- Score: 59 | Comments: 65 | Posted: 2026 (created_utc 1781690071)
- Why selected: The single best voice-of-customer thread in the set — the exact reader of this post (excessive class note-taker) stating the exact failure mode (gel pens running dry mid-semester), answered at length by people who write all day.

#### Post body (verbatim, trimmed if needed)
> I like these pens for how juicy they are and they glide well. But I've run through 3 just this month and I'm getting frustrated. It was about 165 pages of notes. Im not sure if that's a good ratio but I'm tired of them running out every week. Are there pens with like extra large amounts of ink? Or pens that come with extra ink tubes? Biggest thing is it has to not smudge under a highlighter and not take too long to dry since I fly through pages.

#### Top comment patterns
- Most upvoted POV: "No gel pen will last with the amount of note taking you do. And that's normal... Energel LRN-5 is a classic, best refill honestly. 0.5mm will also last longer than 0.7... If you don't want to buy refills, you need to switch to ballpoint, but it's not the same writing experience." — u/felipetwo, score 71
- Most contrarian POV: several commenters (u/Prior_Garlic_8710 score 21, u/thoughtsplurge score 12) push fountain pens as the real fix ("Aaah, at that point I'd go fountain, because they're quick to refill constantly and write supppeerr smooth") — a direction the original poster hadn't considered and that mainstream roundups (Wirecutter, JetPens) underweight for heavy note-takers.
- Common concern raised: ink volume / write-out length as a real, quantifiable buying factor — u/Warmbreeze (score 5) cites specific write-out lengths ("average gel pen: 500-600 meters / ~40 pages; average ballpoint: ~1,600 meters / ~100 pages") and links two specific "Writometer" pens with claimed 1,200m (gel) and 12,500m (ballpoint) write-out lengths; appeared in 4+ comments (felipetwo, atgrey24, amoeba1126, Warmbreeze).

### 2. "Comparison of my sakura pigma microns (0.3mm) fresh vs after a full day of note-taking"
- URL: https://www.reddit.com/r/pens/comments/1micc41/comparison_of_my_sakura_pigma_microns_03mm_fresh/
- Subreddit: r/pens
- Author: u/TheyCouldveBeenFish
- Score: 71 | Comments: 71 | Posted: 2025-08 (created_utc 1754407784)
- Why selected: Rare hands-on durability evidence on one of the brief's four anchor brands (Sakura), and the direct counterweight to roundups (Wirecutter names the Pigma Micron its fineliner pick with no tip-wear caveat).

#### Post body (verbatim, trimmed if needed)
> [Image comparison post, no selftext] Title: "Comparison of my sakura pigma microns (03mm) fresh vs after a full day of note-taking. Please does anyone have any similar pens that don't die after half a notebook?"

#### Top comment patterns
- Most upvoted POV: "These pens aren't really designed well for sustained note taking. If you really want to use them for that, try pressing less hard and using smoother paper." — u/asdqqq33, score 115
- Most contrarian POV: several long-time users report no wear at all with lighter pressure — "I've used staedtlers liners for years the same pack of .04 and theyre fine, i use the whole ink and all that" (u/quietleavess, score 3) and "I've had my micron fineliners for about 7 years now and they're still all good!" (u/SwimmingInLakess, score 31) — suggesting writing pressure, not the pen itself, is the real variable.
- Common concern raised: Micron tips are explicitly "art pens," not note-taking pens — "This is the description on JetPens... Pigma Microns are a favorite for making detailed drawings and craft work... So, not made for normal writing and note taking" (u/BIGAL0720, score 6, quoting JetPens' own product copy back at the roundup framing); appeared in at least 5 comments (asdqqq33, TheLightStalker, wegettacos, SwimmingInLakess, BIGAL0720, West-Word-604).

### 3. "Best pens for notetaking as a college student?"
- URL: https://www.reddit.com/r/pens/comments/1otlbx6/best_pens_for_notetaking_as_a_college_student/
- Subreddit: r/pens
- Author: u/izzyd123456
- Score: 13 | Comments: 23 | Posted: 2025-11 (created_utc 1762798527)
- Why selected: The highest-quality on-topic thread from the ORIGINAL contract query; recommendation-dense and squarely on the primary audience (budget-conscious college student, currently using Pilot G2).

#### Post body (verbatim, trimmed if needed)
> I LOVE PENS. I am looking for good inexpensive note taking pen ideas to try out. I love taking notes with a really good pen and I would love to find more options! I am currently using a Pilot G-2 because I lost my favorite pen 🥲, idk what the name of my favorite was I think it was pentel though.

#### Top comment patterns
- Most upvoted POV: "Grab any of the 1,476 options for gel pens in the range of $1-15: Pentel Energel, Zebra Sarasa Dry, Uni-Ball Signo UM-151, Uni-Ball Signo 207, etc" — u/SpecialtyCoffee-Geek, score 8
- Most contrarian POV: "Have you considered a fountain pen? ... a 5 dollar bottle of ink will last 6 months to a year. Also, fountain pens are good for fast notetaking because they don't require pressure. I like the Platinum Prefounte personally." — u/paradoxmo, score 7; sparks a sub-thread debunking the "$5 bottle of ink" claim as unrealistic for the US market.
- Common concern raised: budget/value-per-pen framing recurs across nearly every top comment — "Ballpoints last the longest, so that makes them budget friendly. Uni Jetstream or Pilot Acroball will be great." (u/StillPissed, score 5); "My absolute favorite pen for taking notes is the Zebra Sarasa Grand 0.7 mm... They're under $8, which is a great value" (u/Temporary-Tree9737, score 2, also notes pairing with "100 gsm paper" specifically).

### 4. "Which pen should I get for note-taking in University? Help!"
- URL: https://www.reddit.com/r/pens/comments/1lovocm/which_pen_should_i_get_for_notetaking_in/
- Subreddit: r/pens
- Author: u/Richy_777
- Score: 11 | Comments: 28 | Posted: 2025-07 (created_utc 1751355722)
- Why selected: Second student thread, chosen for its budget framing and its genuine disagreements between commenters (Parker Jotter: great vs. "sucks" for long sessions) — stops the post from reading like a false consensus.

#### Post body (verbatim, trimmed if needed)
> Want to preface this by saying I'm not familiar with the pen-world, I just like to overthink and research every purchase I make... Anyway, from scouring this sub I have seen a few pens getting recommended, such as the uni Alpha-Gel Jetstream, and the parker jotter, but then all I hear is using different branded refills, the gel vs ink thing, and even expensive gel hybrid refill suggestions... Confusing! ... TDLR: All a bit much for me, I would be happier just to buy a nice, reliable, comfortable, easy, smooth pen, that won't tire my hand... and wish to just be able to buy readily available packs of non-expensive refills of the same brand.

#### Top comment patterns
- Most upvoted POV: "Even though the Jotter XL is only 7% larger than the standard Jotter, it's a difference that can definitely be felt in hand... if I was specifically looking to take copious notes on the regular at University, I'd likely not choose a Jotter at all, but rather something with a much more substantial and tactile grip section. On the more affordable side, the Sharpie S-Gel is great..." — u/_Vasuri_, score 7
- Most contrarian POV: direct disagreement thread — "For notes a Parker Jotter sucks, imho... It's not ergonomic." (u/MindfulPangolin, score 2) versus "I've seen some saying here that the Jotter is not the best for long sessions. Y'all are wrong. I use mine for Uni for more than 4 hours a day with no problems in the year I've been using it non stop, and add that am lefty... The Jotter is great" (u/Zar_Of_Castilla, score 2, explicitly identifies as left-handed).
- Common concern raised: refill ecosystem/cost-over-time as a hidden decision factor (Parker G2-compatible refills, Uni SXR series, Schneider Gelion+, Kaco G2 gel at "2-3 bucks for a Box of 10") appeared in nearly every substantive reply (felipetwo, SpecialtyCoffee-Geek, MindfulPangolin, Zar_Of_Castilla, eye4pens).

### 5. "so paper thickness has nothing to do with being fountain pen friendly"
- URL: https://www.reddit.com/r/notebooks/comments/1v4agc3/so_paper_thickness_has_nothing_to_do_with_being/
- Subreddit: r/notebooks
- Author: u/vespertinee3
- Score: 15 | Comments: 43 | Posted: 2026-07 (per thread title context; recent)
- Why selected: Different subreddit, and directly attacks the "higher gsm = no bleed-through" assumption most roundups repeat — the pen↔paper interaction the brief explicitly calls for; a natural bridge to a future notebooks post.

#### Post body (verbatim, trimmed if needed)
> the top notebook was a 70gsm £1 notebook, the bottom is a 100gsm £10 notebook. Yhe top one has stark white, has a flimsy paper cover, and the lines are too wide apart. I love that the bottom one has cream paper, faint 7mm line spacing, a soft faux leather cover, and the pages are numbered!! And yet, fountains pens bleed which make my already messy and small handwriting more cramped. At this point, I'm considering sacrificing my fountain pens because I love the latter notebook so much... [Edit: Thanks for the suggestions everyone. I've gone with Clairefontaine. Great smooth paper, no feathering, and cost effective]

#### Top comment patterns
- Most upvoted POV: "Not to correct you but I'm sure someone will so might as well be me. This is called feathering. Bleed is going through the paper. Not to be confused with ghosting where you can see it through the page but hasn't soaked through. As for papers: Kokuyo, Midori, Muji, rhodia, Clairefontaine, Iroful, Nakayabashi, Apica" — u/nuclearwes, score 26 (also directly names Muji, one of our anchor brands, in a paper-quality context).
- Most contrarian POV: n/a — no real disagreement in this thread; commenters converge quickly on "coating/sizing, not thickness, determines bleed-through," reinforcing the OP's title as accurate rather than contested.
- Common concern raised: gsm (paper weight) is a poor proxy for ink performance; sizing/coating quality is the real variable — appeared in at least 4 top comments (nuclearwes, Ok-Spite-5454, PhilosophicallyGodly, abyssaltourguide), each naming different "safe" notebook brands (Leuchtturm, Midori, Tomoe River, Clairefontaine, Kokuyo Sarasara).

## Voice-of-customer themes

- **Theme:** Heavy, sustained note-takers hit real ink-volume limits with gel pens that mainstream "best pens" roundups never quantify.
  - Evidence: "I've run through 3 just this month and I'm getting frustrated. It was about 165 pages of notes.", u/meerkatherine, https://www.reddit.com/r/pens/comments/1u85stl/i_need_a_pen_that_can_stand_up_to_my_excessive/
  - Evidence: "No gel pen will last with the amount of note taking you do. And that's normal... Energel LRN-5 is a classic, best refill honestly.", u/felipetwo, same thread
  - Frequency: appeared in 1/5 threads directly, but the underlying "gel dries out fast, ballpoint lasts longer" trade-off recurs as a sub-theme in threads 1 and 3.

- **Theme:** Fineliners/technical pens (Sakura Pigma Micron, Stabilo, Staedtler) are being mis-recommended for note-taking by roundups when they're actually art/drafting tools with delicate tips.
  - Evidence: "These pens aren't really designed well for sustained note taking... try pressing less hard and using smoother paper.", u/asdqqq33, https://www.reddit.com/r/pens/comments/1micc41/comparison_of_my_sakura_pigma_microns_03mm_fresh/
  - Evidence: "This is the description on JetPens... Pigma Microns are a favorite for making detailed drawings and craft work... So, not made for normal writing and note taking.", u/BIGAL0720, same thread
  - Frequency: appeared in 1/5 threads as the core topic, directly contradicting Wirecutter's SERP pick of the Pigma Micron as "the best fineliner" with no durability caveat (see serp.md).

- **Theme:** Budget/value-per-pen and refill-ecosystem cost matter more to real note-takers than roundups' "just buy this one pen" framing suggests.
  - Evidence: "Grab any of the 1,476 options for gel pens in the range of $1-15", u/SpecialtyCoffee-Geek, https://www.reddit.com/r/pens/comments/1otlbx6/best_pens_for_notetaking_as_a_college_student/
  - Evidence: "Ballpoints last the longest, so that makes them budget friendly.", u/StillPissed, same thread
  - Frequency: appeared in 3/5 threads (college student thread, university thread, excessive-note-taking thread).

- **Theme:** Consensus on pen recommendations is thinner than roundups imply — real disagreement exists even about widely-recommended pens (e.g., Parker Jotter).
  - Evidence: "For notes a Parker Jotter sucks, imho... It's not ergonomic.", u/MindfulPangolin, https://www.reddit.com/r/pens/comments/1lovocm/which_pen_should_i_get_for_notetaking_in/
  - Evidence: "I've seen some saying here that the Jotter is not the best for long sessions. Y'all are wrong... I use mine for Uni for more than 4 hours a day with no problems... and add that am lefty", u/Zar_Of_Castilla, same thread
  - Frequency: appeared in 1/5 threads as an explicit back-and-forth, but the pattern (someone loves a pen for hours-long use, someone else finds the same pen fatiguing) recurs in general across threads 3 and 4.

- **Theme:** "Higher gsm/thicker paper" is a widely believed but wrong proxy for ink bleed-through resistance; sizing/coating is the real variable — directly relevant to the brief's pen↔paper pairing requirement.
  - Evidence: "so paper thickness has nothing to do with being fountain pen friendly... the top notebook was a 70gsm £1 notebook, the bottom is a 100gsm £10 notebook... fountains pens bleed", u/vespertinee3, https://www.reddit.com/r/notebooks/comments/1v4agc3/so_paper_thickness_has_nothing_to_do_with_being/
  - Evidence: "Absolutely nothing to do with thickness and more to do with coating and overall paper quality and material.", u/Ok-Spite-5454, same thread
  - Frequency: appeared in 1/5 threads (the r/notebooks thread), as its entire premise.

## Use-in-post quotes

Verbatim quotes the writer can cite (with attribution). Each MUST include source URL.

- "No gel pen will last with the amount of note taking you do. And that's normal. If you want gel, you need to carry refills and quickly swap them.", u/felipetwo, r/pens, source: https://www.reddit.com/r/pens/comments/1u85stl/i_need_a_pen_that_can_stand_up_to_my_excessive/
- "These pens aren't really designed well for sustained note taking. If you really want to use them for that, try pressing less hard and using smoother paper.", u/asdqqq33, r/pens, source: https://www.reddit.com/r/pens/comments/1micc41/comparison_of_my_sakura_pigma_microns_03mm_fresh/
- "Ballpoints last the longest, so that makes them budget friendly. Uni Jetstream or Pilot Acroball will be great.", u/StillPissed, r/pens, source: https://www.reddit.com/r/pens/comments/1otlbx6/best_pens_for_notetaking_as_a_college_student/
- "For notes a Parker Jotter sucks, imho. It's an iconic, but old design. It's not ergonomic.", u/MindfulPangolin, r/pens, source: https://www.reddit.com/r/pens/comments/1lovocm/which_pen_should_i_get_for_notetaking_in/
- "Absolutely nothing to do with thickness and more to do with coating and overall paper quality and material.", u/Ok-Spite-5454, r/notebooks, source: https://www.reddit.com/r/notebooks/comments/1v4agc3/so_paper_thickness_has_nothing_to_do_with_being/
- "Not to correct you but I'm sure someone will so might as well be me. This is called feathering. Bleed is going through the paper... ghosting where you can see it through the page but hasn't soaked through.", u/nuclearwes, r/notebooks, source: https://www.reddit.com/r/notebooks/comments/1v4agc3/so_paper_thickness_has_nothing_to_do_with_being/

## Angle opportunities for this blog

What pain points / language patterns suggest angles for this blog?

- Quantify the ink-volume/write-out-length trade-off (gel vs. ballpoint vs. hybrid) as an honest limitation section — no SERP competitor does this, and it's a concrete, checkable claim pattern readers are already discussing (see Warmbreeze's write-out-length figures, unverified but directionally consistent with multiple commenters).
- Explicitly flag that fineliners/technical pens (including our anchor brand Sakura Pigma Micron) are art/drafting tools first and note-taking tools second — pairs directly with the brief's "honest limitations" requirement and differentiates from Wirecutter's uncaveated fineliner pick.
- Use the feathering/bleeding/ghosting vocabulary precisely (as clarified by u/nuclearwes) when discussing paper pairing — Wirecutter defines these terms too, but the Reddit thread gives a second, independent confirmation worth cross-referencing.
- Acknowledge real disagreement on ergonomics/comfort for long sessions (Parker Jotter thread) rather than presenting single-verdict picks — supports the brief's instruction to include honest trade-offs rather than a false consensus.

## Open questions

Things the researcher couldn't resolve.

- The "average write-out length" figures cited by u/Warmbreeze (gel ~500-600m/~40 pages; ballpoint ~1,600m/~100 pages; specific branded pens up to 12,500m) are Reddit-sourced estimates with no primary source linked in the comment — do not present as verified data; if used, attribute to "some pen enthusiasts estimate" or drop entirely.
- Thread 5's exact post date could not be precisely confirmed from the raw JSON's Unix timestamp within the token budget available for this analysis; treat as "2026" based on context (referenced as recent in `_reddit_selection.md`).
- Muji pens (an anchor brand) were mentioned only once across all 5 threads, and only as a paper-brand-adjacent aside ("Muji" listed among safe fountain-pen-friendly paper/notebook brands, not as a pen recommendation) — Reddit provides weak direct voice-of-customer support for Muji as a note-taking pen specifically; the editor may need to lean on SERP/brand data for Muji claims.
