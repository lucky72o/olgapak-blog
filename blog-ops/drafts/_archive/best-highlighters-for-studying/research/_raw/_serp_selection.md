# SERP selection: best highlighters for studying

Observed intent: commercial / transactional roundup (the live top results are "best highlighter pens" listicles from stationery retailers' blogs, a pastel swatch review, a Wirecutter single-product review of the Zebra Mildliner, plus retailer category pages and one Reddit thread; SERP feature: People also ask only, no shopping carousel captured).

Reviewed top 9 results from `_serp.json`. Selected 5 (target 5 to 8, hard cap 8; fewer allowed when the SERP warrants it) for deep fetch:

1. (rank 1) https://goldspot.com/blogs/magazine/best-highlighter-pens , the top-ranked roundup; retailer blog with per-product reasoning across study, work, and creative use, tells us the winning structure.
2. (rank 2) https://stationerynerd.com/highlighters/ , pastel highlighter swatch and review; the "pastel vs neon" and bleed-through angle with hands-on swatches, exactly the reader question this post must answer.
3. (rank 3) https://www.jetpens.com/blog/The-Best-Highlighter-Pens/pt/606 , JetPens' flagship guide; the most detailed product-mechanics source (tip shapes, ink types, dry-safe claims) and a likely source of manufacturer citations.
4. (rank 4) https://www.executivepensdirect.com/blogs/fun-stuff/6-best-highlighters-we-review-our-favorites , "6 best highlighters for students", the only result explicitly framed for students; shows the student-specific picks and objections.
5. (rank 9) https://www.nytimes.com/wirecutter/reviews/zebra-mildliner-highlighter-review/ , Wirecutter's Zebra Mildliner review; allowlist-class (NYT) so it doubles as a citable source for the anchor product, and it shows how a trusted publication frames the Mildliner's strengths and limits.

Skipped:
- rank 5 (Reddit thread r/stationery "world class highlighter that never dries"; Reddit is never DOM-scraped in this workflow. Carried forward as a candidate for Stage 1.5a selection via its permalink `/r/stationery/comments/1bjlhcu/`, since the dry-out complaint is a strong voice-of-customer signal)
- rank 6 (amazon.co.uk Best Sellers category page, no article content)
- rank 7 (jpsuppliesltd.co.uk retailer category page, no article content)
- rank 8 (undertherowantrees.co.uk retailer collection page, no article content)
