# Plan Review: best highlighters for studying

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/best-highlighters-for-studying/plan.md`. The reviewer did NOT write the plan.

## Verdict

approve

One-line rationale: both required fixes from plan-review-v1 landed verbatim (literal Dunlosky fallback hook in §Angle, literal 9-pick fallback title in §Recommended title), all three open questions are genuinely resolved, and every other rubric criterion still passes; only trivial off-by-one character-count notes remain.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from v1: dominant=commercial, secondary=informational per serp.md §"Search intent"; plan's H2 order (short-answer table -> honest-science primer -> mechanics primer -> 11 picks -> crossover/edge sections -> CTA/FAQ) mirrors the JetPens primer-then-picks model serp.md names as the structural template. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Unchanged from v1: each H2 maps to a facts.md section (Study-science facts, Mechanics facts, Named examples for all 11 picks, Wirecutter/r/pens quotes, the hex-code Named example). |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | n/a (pass) | `blog-ops/config.yaml` line 12: `competitors: false`. brief.md §Autopilot assumptions confirms the module is off for this blog, so the freshness gate does not apply; the manufacturer spec claims used instead (Stabilo, Zebra, Tombow, Staedtler) are all dated 2026-09-05 in facts.md, same day as this review. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | The 5 planned external links (Wirecutter/NYT, Stabilo, Zebra, Tombow, Dunlosky/SAGE) contain none of the 9 URLs in serp.md's top results. Wirecutter (SERP rank 9) is correctly treated as allowlist-class per blog-craft.md §"Authoritative-site allowlist" and is explicitly annotated in serp.md as "citable directly, not a link-target restriction." |
| Length target appropriate for the intent and H2 set | yes | 2,400-2,800 words sits in the matrix's 2,000-3,000 transactional band and close to the 5 deep-fetched competitors' ~2,500-word average; the plan's own de-pad valve (drop to 9 picks rather than invent an 11th) keeps it from padding if sourcing comes up short. |
| Open questions genuinely resolved or explicitly flagged | yes | All three open questions in §Open questions are now marked `[x]` with the v1 fix applied: (1) Kire-Na provisional-11 kept, literal 9-pick fallback title now present verbatim at plan.md §Recommended title; (2) Dunlosky citation now has a literal fallback hook verbatim at plan.md §Angle (paragraph 2); (3) the two-Stabilo-entries question resolved as "keep both, sharpen at outline," which was v1's own verdict and required no plan text change. |
| Keyword's dominant intent is actually covered | yes | The comparison table (H2 1) plus the 11-item ranked list with pros/cons (H2 4) cover the commercial buying intent; H2 2/3 cover the SERP's secondary informational intent. |

## Fix verification (this iteration's specific task)

- **Fix 1 (Angle fallback hook):** confirmed landed. plan.md §Angle now reads, verbatim per the v1 revision instruction: "Fallback if Dunlosky 2013 cannot be verified at Stage 3d: rebuild the opening hook on already-verified facts.md rows only, the r/GetStudying quote... and the r/stationery bleed-through consensus... Reframe the honesty angle as a self-reported student failure mode, not a cited research finding, and drop any 'a 2013 review found...' framing from the intro and from H2 2's heading copy." Only the quote-mark style changed (single to double, a valid Markdown adaptation), the wording is otherwise identical to the v1 instruction.
- **Fix 2 (9-pick fallback title):** confirmed landed. plan.md §Recommended title now carries, verbatim: "Fallback title if Pilot Kire-Na is cut at Stage 3d and the list drops to 9: `9 Best Highlighters for Studying in 2026 (by Study Job)` ... meta description and slug are unaffected since neither states the count."
- Both fixes are logged correctly in §Changes requested by human with status `addressed`, and the two "minor, no fix required" v1 notes (H2 6 brevity, Boss Pastel differentiator) are correctly carried forward as outline-stage guidance rather than dropped.

## Minor notes (non-blocking)

- The fallback title's stated character count is off by one: `9 Best Highlighters for Studying in 2026 (by Study Job)` counts to 55 characters, not the 54 stated in plan.md §Recommended title (and in v1's own revision instruction, so this is an inherited v1 error, not something the editor introduced). Still comfortably inside the 50-60 char title rule in blog-craft.md, so no functional problem; worth a one-character correction at outline if convenient.
- The meta description's stated length is also off by one: plan.md says "(152 characters.)" but the quoted string is 153 characters. Still under the 160-char limit in blog-craft.md, so compliant regardless.
- The Angle's fallback-hook text quotes the r/GetStudying line as "Highlight key WORDS not key SENTENCES," but facts.md §Quotes (row for u/bl_ueberrycheesecake, score 101) has it verbatim as "Highly key WORDS not key SENTENCES." This one-word drift originated in v1's own revision instruction, not this iteration's edit. It only matters if the Dunlosky fallback ever triggers and someone quotes straight from the Angle section instead of re-checking facts.md. Recommend the outline stage pull the quote fresh from facts.md verbatim rather than from the Angle paragraph, to avoid shipping a misquote.

## Revision instruction (verbatim, for the editor)

None. Verdict is approve.
