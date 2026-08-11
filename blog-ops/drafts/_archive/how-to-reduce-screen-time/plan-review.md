# Plan Review: how to reduce screen time

Written by: plan-reviewer agent (Stage 1c.5). Read by: blog-editor (applies fixes or advances).
Independent review of `blog-ops/drafts/how-to-reduce-screen-time/plan.md`. The reviewer did NOT write the plan. This is the iteration-2 (final) review; prior verdict was `request_revisions` (see `plan-review-v1.md`).

## Verdict

approve

One-line rationale: all three required iteration-1 fixes landed correctly (the §Key sections scope note, the extended §Open questions resolution, and the meta-description char count), the editor's own restructuring of §Internal links planned (5 links, 4 moved inline) stays within blog-craft.md's 3–5 range and correctly resolves the legacy-slug-with-no-local-file question as "linkable but not inbound-editable" — leaving only one minor, non-blocking execution gap worth flagging for the Stage 3b draft reviewer.

## Rubric check

| Criterion | Pass? | Note |
|---|---|---|
| Angle/structure matches observed search intent (`research/serp.md` §"Search intent") | yes | Unchanged from iteration 1; still sound. Friction-tier ordering matches the informational, `how-to-numbered` intent and fills the §Angle opportunities gap. |
| Every planned H2 traces to a sourced fact in `facts.md` | yes | Unchanged from iteration 1. Sections 2, 3, 5, 6, 7 trace cleanly; section 1's framing ("not all screen time is the problem") remains uncited beyond a Reddit angle note, which is acceptable since it is framing, not a claim. |
| Every competitor claim is fresh (`Last verified` <=14 days from today) | N/A | `modules.competitors: false` in `blog-ops/config.yaml`; plan makes no competitor pricing/feature claims. Skipped per task instructions, as in iteration 1. |
| Zero forbidden SERP-competitor URLs in the external-link plan | yes | Checked all 5 rows in §External links planned against `research/serp.md`'s top-10 set; no overlap, same as iteration 1. §Internal links planned's added fifth row (`things-to-do-instead-of-being-on-your-phone`) is an internal olgapak.com slug, not a SERP-competitor URL, so it does not trip this criterion either. |
| Length target appropriate for the intent and H2 set | yes | Unchanged from iteration 1; 2,600–3,000 words is justified against SERP competitor length and house length, and the deviation from the 3,000–5,000 pillar band is explicitly flagged and argued rather than silently taken. Ruling stands: accepted. |
| Open questions genuinely resolved or explicitly flagged | yes | Fix #1 (the cannibalization risk) is now addressed: §Key sections carries a scope note (checklist depth, two named unique contributions — Screen Time/Digital Wellbeing app-limit mechanics and the effort-tier framing — plus "link down inline at each tactic"), and §Open questions row 1 is extended verbatim per the iteration-1 instruction to say this resolution "also governs sections 3-4's depth." Fix #3 (meta description) is corrected: recount confirms the description is exactly 150 characters, matching the plan's updated "(150 chars.)" note. See the one residual minor gap below. |
| Keyword's dominant intent is actually covered | yes | Unchanged from iteration 1; still covers both the ordered-actions intent and the "why" audience segment, plus the two SERP-identified gaps. |

## Specific issues (only if not `approve`)

| # | Severity | Location in plan | Issue | Required fix |
|---|---|---|---|---|
| 1 | minor | §Key sections scope note (line ~84) vs. §Internal links planned table | The scope note's own text commits to "link down to the relevant sibling post inline at the point each individual tactic is mentioned" — but the final §Internal links planned table only links `how-to-stop-doomscrolling` once, in the intro. Section 3 ("Step 2: The ten-minute setup"), which per the scope note will still touch grayscale/notifications/home-screen-decluttering at checklist depth (tactics `how-to-stop-doomscrolling`'s Layer 1 items 1-5 own in full), has zero internal links planned inside it. Only section 4 ("daily habits") got the two new inline links (`digital-detox-plan` at the phone-charging item, `time-blocking` at the leisure-slot item). This is not a strategic problem — the scope note's checklist-depth framing and the two named unique contributions genuinely discharge the core cannibalization risk from iteration 1 — but the mechanical "link at each tactic" promise is under-executed for the doomscrolling sibling specifically. Flagged as a residual concern for the Stage 3b draft/outline stage to enforce, not as grounds to send this plan back for a third revision pass (the workflow caps plan review at one revision, and this gap is fixable at the outline/writer stage without re-touching the plan's strategy). | At outline or draft stage, add one inline mention/link to `how-to-stop-doomscrolling` inside §Step 2 (the ten-minute setup) at whichever specific tactic it retains (grayscale, notifications off, or home-screen decluttering), instead of relying solely on the intro link — trading against another row if needed to stay within blog-craft.md's 3–5 internal-link range. |

## Revision instruction (verbatim, for the editor)

None — verdict is `approve`. The one issue above is minor and logged for the Stage 3b draft reviewer to enforce at outline/draft time; it does not require reopening `plan.md`.
