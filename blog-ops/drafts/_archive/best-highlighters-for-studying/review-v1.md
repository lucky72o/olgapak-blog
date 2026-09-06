# Review: best-highlighters-for-studying draft-v1

**Synthetic length-gate review**: reviewer not dispatched (pre-review length check, Step 11.1 item 2). The editor wrote this file so the Stage 3b revise loop runs on a trim-only instruction instead of spending a reviewer cycle on a length failure. Every section other than §5 and §9 is N/A because no reviewer sweep ran.

Written by: `blog-post-workflow` editor (main session), Stage 3b iteration 1.
Sources: `blog-ops/drafts/best-highlighters-for-studying/draft-v1.md`, `blog-ops/drafts/best-highlighters-for-studying/outline.md` §Word count roll-up.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

## Reviewed

- Draft: `blog-ops/drafts/best-highlighters-for-studying/draft-v1.md` (word count: 3,070 body prose, excluding frontmatter, the FAQ block and marker text; 3,739 by plain `wc -w`; outline target: ~2,600, plan range 2,400–2,800)
- Outline: `blog-ops/drafts/best-highlighters-for-studying/outline.md` (status: approved)
- Author voice: olga (from brief.md)

## Verdict

`request_revisions`

Reasoning: body prose is 18% over the outline roll-up target (3,070 vs ~2,600), beyond the +15% band that forces `request_revisions`. Nothing else was reviewed in this iteration; the real reviewer runs on draft-v2.

**Iteration counter:** this is revision pass 1 of max 2.

## 1. Voice + tone

N/A (no reviewer sweep ran). Editor spot-checks on v1: 0 forbidden phrases, 0 em-dashes, 0 en-dashes.

## 2. Structure

N/A (no reviewer sweep ran). Editor spot-checks on v1: H2 order matches the outline's six body H2s plus the planned CTA H2; four FAQ items match the outline 1:1.

## 3. Facts + sourcing

N/A

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | 4 | N/A (all four carry a ` | source:` clause) |
| `[EXTERNAL_LINK_NEEDED:]` | 0 | N/A |
| `[INTERNAL_LINK_NEEDED:]` | 0 | N/A |
| `[IMAGE:]` | 4 vs outline 4 slots | N/A |

Marker-shape problems: N/A

## 5. Word count

- Draft: 3,070 words (body prose: intro through the closing CTA H2, excluding frontmatter, the `## FAQ` block and the text inside `[VERIFY:]` / `[IMAGE:]` markers)
- Outline target: ~2,600 words (plan range 2,400–2,800)
- Delta: +18%
- Band: beyond +15% = fail, forces `request_revisions`

Per-section actuals vs the outline roll-up (markers excluded):

| Section | Actual | Outline target | Action |
|---|---|---|---|
| Intro (4 paragraphs + disclosure) | 190 | ~200 | leave |
| H2 1 `What are the best highlighters for studying?` | 417 | 250 | trim to about 270 |
| H2 2 `Does highlighting actually help you study?` | 303 | 350 | leave |
| H2 3 `How to choose a highlighter for studying (a 60-second primer)` | 375 | 300 | trim to about 310 |
| H2 4 `The 11 best highlighters for studying` | 1,360 | 1,100 | trim to about 1,130 (roughly 20 words per pick) |
| H2 5 `How to highlight over gel pen ink without smearing` | 174 | 180 | leave |
| H2 6 `Highlighting on paper vs on an iPad` | 103 | 120 | leave |
| CTA H2 `Turn the highlights into something you can revise from` | 87 | ~100 | leave |
| FAQ (not gated) | 316 | ~200 | leave |

## 6. Humanization floor

N/A

## 7. Specific issues

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| `What are the best highlighters for studying?` | 25–56 | major | 417 words vs 250 target | Trim to about 270 words. Keep the quick-answer list of all 11 picks and the three-colour key; cut restated reasoning that H2 3 and H2 4 repeat. |
| `How to choose a highlighter for studying (a 60-second primer)` | 81–94 | major | 375 words vs 300 target | Trim to about 310 words. Keep every concrete number (tip widths, gsm, dry-out hours); cut duplicated explanation. |
| `The 11 best highlighters for studying` | 95–207 | major | 1,360 words vs 1,100 target | Trim to about 1,130 words, roughly 20 words per pick. Keep every buy link, every "best for" H3, every fact and every `[VERIFY:]` and `[IMAGE:]` marker; cut redundant framing sentences and repeated caveats. |

## 8. What the draft does well

- Opens on the neon-wall confession and lands the target keyword and the "Ouch!" beat in the first paragraph, exactly the hook the outline asked for.
- Every one of the 11 picks carries its planned buy link (tagged Amazon `/dp/<ASIN>?tag=op01e-20` or brand page) and a "best for" H3, and the affiliate disclosure sits as the last intro paragraph.
- Every unverified claim is wrapped in a `[VERIFY:]` marker with a source clause, including the Sharpie Smear Guard claims on both lines, so Stage 3d has a clean hand-off.

## 9. Instructions for writer (only if verdict = `request_revisions`)

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. TRIM ONLY. Body prose (intro through the closing CTA H2 "Turn the
   highlights into something you can revise from", excluding frontmatter,
   the ## FAQ block and the text inside markers) is 3,070 words. Bring it
   to 2,500–2,700 words (target 2,600; hard range 2,400–2,800).
2. Take the cut from these three sections only:
   - "What are the best highlighters for studying?": 417 -> about 270 words.
     Keep the quick-answer list of all 11 picks and the three-colour key;
     cut reasoning that H2 3 and H2 4 repeat.
   - "How to choose a highlighter for studying (a 60-second primer)":
     375 -> about 310 words. Keep every concrete number.
   - "The 11 best highlighters for studying": 1,360 -> about 1,130 words,
     roughly 20 words per pick. Cut redundant framing sentences and
     repeated caveats, never a fact, a buy link, a "best for" H3 or a
     marker.
3. Leave the intro, H2 2, H2 5, H2 6, the CTA H2 and the FAQ as they are
   (they are on target). Do not add any new content anywhere.
4. Preserve verbatim: every link (all 11 buy links, the 5 external links,
   the 2 internal links), the affiliate disclosure paragraph, every fact
   and number, every H2/H3 heading, the frontmatter, and all 4 [VERIFY:]
   and 4 [IMAGE:] markers with their exact text.
5. Keep at least one rhythm marker (bullet list, standalone question,
   concrete number) in each trimmed section, first person, active voice,
   zero em-dashes.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/best-highlighters-for-studying/draft-v2.md. Do not overwrite the prior draft.
```

## 10. Reviewer notes (free-form)

The full reviewer sweep (voice, structure, facts, humanization floor) runs on draft-v2. One thing for that pass and for Stage 3d: `research/_raw/_stage3d_prep.md` records that Sharpie's Pocket Highlighters page does not mention Smear Guard, so the Pocket line's `[VERIFY:]` will most likely be cut or generalised at Stage 3d; the writer should not pre-empt that here.
