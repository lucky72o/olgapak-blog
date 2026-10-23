# SERP selection: best blue light glasses

Observed intent: **commercial / transactional with a strong embedded informational gate** — the live top results are a mix of brand collection pages (Felix Gray, Blockbluelight, GUNNAR, Zenni Blokz), editor-tested roundups (Health.com, CNN Underscored, NYT Wirecutter), and one Reddit test thread. Google's People Also Ask block is dominated by scepticism, not shopping: "Do any blue light glasses actually work?", "Which blue light glasses are most effective?", "Do doctors ever recommend blue light glasses?". A roundup that does not answer the "do these actually do anything" question early will not match this SERP.

Three captures were taken (all `gl=us&hl=en`, because the browser's default locale returned a UK SERP — amazon.co.uk, Boots Opticians, firmoo.co.uk — which does not match this blog's US Amazon Associates audience):

- `_serp.json` — the target keyword, "best blue light glasses" (ranks 1–9)
- `_serp_students.json` — secondary keyword, "best blue light glasses for students" (ranks 21–29). Mostly kids-focused brand collection pages; only one result worth deep-fetching.
- `_serp_evidence.json` — "do blue light glasses work evidence" (ranks 41–49), captured because the PAA block shows the evidence question IS part of this SERP's intent. This is where the primary/allowlist-class sources live.

Selected 8 (hard cap) for deep fetch:

1. (rank 2) https://www.health.com/condition/eye-health/best-blue-light-glasses , the highest-ranking genuine roundup; editor-tested format shows what this SERP rewards structurally (per-pick pros/cons, price band, "best for" labels).
2. (rank 3) https://www.reddit.com/r/sleephackers/comments/12ci2fp/i_just_finished_testing_30_pairs_of_blueblocking/ , a reader who measured 30 pairs; the single richest source of real wearer language plus actual blocking-percentage scepticism. Ranking on page 1 of a commercial SERP is itself a signal about what readers want.
3. (rank 7) https://www.cnn.com/cnn-underscored/health-fitness/best-blue-light-glasses , "per optometrists" framing; expected to carry expert quotes and the honest caveats a credible roundup needs.
4. (rank 8) https://www.nytimes.com/wirecutter/reviews/best-blue-light-blocking-glasses/ , Wirecutter is the most evidence-cautious mainstream roundup in this SERP; useful as the benchmark for how honest the competition already is.
5. (rank 29) https://optimizeyourbiology.com/best-blue-blocking-glasses , the only lab-measurement-flavoured pick set in either commercial capture; relevant to the evening/amber-lens half of the topic where the claims differ from the daytime eye-strain half.
6. (rank 41) https://health.clevelandclinic.org/do-blue-light-blocking-glasses-actually-work , authoritative plain-language explainer; allowlist-class source for the evidence gate.
7. (rank 42) https://pubmed.ncbi.nlm.nih.gov/37593770/ , the Cochrane systematic review of blue-light-filtering spectacle lenses; the primary source the whole honest-evidence section rests on.
8. (rank 44) https://www.aao.org/eye-health/tips-prevention/are-computer-glasses-worth-it , American Academy of Ophthalmology; primary professional-body position, and the source for the "what actually helps eye strain" habits.

Skipped:

- rank 1 felixgray.com, rank 4 blockbluelight.com, rank 5 gunnar.com, rank 9 zennioptical.com (also ranks 23, 24, 27, 28) , brand collection / homepage pages, not articles. They are useful later as manufacturer product pages for verifying a specific pick's specs, not as research sources.
- rank 6 / rank 22 amazon.com best-sellers list , not an article, and Amazon blocks scripted extraction. Product discovery happens through the logged-in browser at the affiliate-link stage instead.
- rank 21 health.com , duplicate of rank 2, already selected.
- rank 25 axonoptics.com, rank 26 mommypotamus.com, rank 46 axonoptics.com , kids-focused or brand-blog content; our audience is students and early-career professionals, not parents buying for children.
- rank 43 reddit r/medicine , thin thread, and the Reddit stage (1.5a) covers Reddit sourcing properly.
- rank 45 theeyedoctors.net, rank 47 poudrevalleyeyecare.com, rank 48 zenottic.com , local-practice and eyewear-vendor SEO pages; the same claims are available from AAO and Cochrane, which are citable.
- rank 49 PMC12833160 , a second review on the same question; held in reserve. If the Cochrane abstract at rank 42 turns out to be too thin to cite precisely, this is the fallback primary source.
