# Review: ai-study-tools draft-v1

Written by: `review-blog-post` skill (invoked by the editor at Stage 3b).
Sources: `blog-ops/drafts/ai-study-tools/draft-v1.md`, `blog-ops/drafts/ai-study-tools/outline.md`, `blog-ops/drafts/ai-study-tools/facts.md`, `blog-ops/drafts/ai-study-tools/brief.md`, `blog-ops/drafts/ai-study-tools/research/serp.md`, `research/reddit.md`, `research/x.md`, `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md`, `${CLAUDE_PLUGIN_ROOT}/standards/blog-craft.md`, `blog-ops/profile/voice.md`, `authors.md`, `blog.md`, `audience.md`, `product.md`, `custom-instructions.md`.
Read by: editor (decides next action), blog-writer (consumed as `review_path` when `mode=revise`).

**Purpose:** a deliberately critical, checklist-driven audit of the draft against every objective rule in the outline + brand docs. The review skill is independent of the writer so it isn't biased by the same prompts that wrote the draft.

## Reviewed

- Draft: `blog-ops/drafts/ai-study-tools/draft-v1.md` (word count: `2,995` body prose excluding FAQ; outline roll-up target: `2,800`)
- Outline: `blog-ops/drafts/ai-study-tools/outline.md` (status: `approved`)
- Author voice: `olga` (from brief.md / outline.md §Author voice)

## Verdict

`request_revisions`

Reasoning (1–3 sentences): all six hard constraints pass and no forcing condition in the Step 4 tree fires (zero forbidden phrases, zero em-dashes, zero forbidden-SERP links, structure matches the outline exactly, word count is +7.0% and inside the clean band, both `[VERIFY:]` markers carry a valid ` | source:` clause). But three `major` issues block `approve`: the very first sentence of the post makes a claim the SERP data does not support, the ChatGPT study-mode URL was written from memory and must enter the verification queue as `[EXTERNAL_LINK_NEEDED:]`, and the "five AI-study startups" claim in H2 4 attributes a verified fact to the wrong set of vendors. All three are small, surgical fixes; this is a strong draft that needs a tight revise pass, not a rewrite.

**Iteration counter:** this is revision pass `1` of `max 2`. If verdict = `request_revisions` AND iteration > 2: the editor should escalate to the human, not dispatch another writer pass.

---

## 0. The six hard constraints (verified individually, breach = `critical`)

| # | Constraint | Result | Evidence |
|---|---|---|---|
| 1 | No implied hands-on testing | **PASS** | Every sentence touching Olga's relationship to the nine tools was read individually. See §0.1 below. |
| 2 | No hyperlink to any top-10 SERP URL | **PASS** | 9 external links, all enumerated in §3. None matches the forbidden set. No bare URLs, no reference-style definitions, no autolinks, no URLs inside `[IMAGE:]` alt text. |
| 3 | Every vendor number attributed at point of use | **PASS** | L130 attributes all four user counts individually; L160 attributes the 92% and describes its footnote. No aggregation. |
| 4 | MIT "cognitive debt" study never appears as a finding | **PASS** | Grep for `MIT\|EEG\|brain\|cognitive\|neural\|study found\|researchers found\|a study showed\|a study found` returns zero hits in the body. H2 7 frames it as a debate and says so explicitly. |
| 5 | Zero em-dashes | **PASS** | `grep -n U+2014` returns nothing; `grep -n 'mdash\|#8212\|#x2014'` returns nothing. En-dash grep also returns nothing. |
| 6 | Pricing discipline | **PASS** | Only two `$` hits in the whole draft, both permitted. No price for Olga's own tools. No price for StudyFetch, Turbo AI or Mindgrasp. |

### 0.1 Constraint 1 detail (the most important check)

Every sentence that could be read as firsthand use was examined. The draft is disciplined throughout, and in several places actively defends the boundary:

- L17, the expertise statement: "I read those product pages the way a builder reads them". Perspective, not testing. Matches the outline's P2 hard constraint.
- L25, the method statement: "The picks below come from what students report actually using in real discussion threads, cross-checked against what each tool's own documentation commits to and what its free tier really includes. No lab, no scoring rubric out of ten." This is the strongest sentence in the post for this constraint. It pre-empts the reader's assumption instead of dodging it.
- L52: "most-praised across four of the five Reddit threads I read". Reading threads is the stated method, so "I read" is in-scope.
- L54: "The best usage tip I found came from u/eveno7o". Found, not tested.
- L134: "Perplexity is what I would open the moment a chatbot invents a reference". Conditional mood, deliberately.
- L156: "no pricing page I could reach at all". Refers to reading pages, consistent with the method.
- L180: "three cases where I would close the laptop". Conditional.
- L211 (FAQ): "if I had to hand one tool to a student today it would be NotebookLM". Conditional.

No soft breaches found. Specifically checked for and did **not** find: "I keep coming back to", "in my experience with", "the one I reach for", "I've been using", "after testing", "in daily use", "my go-to".

Two borderline lines were examined and cleared:

- L58, "The free tier is genuinely usable rather than a demo". A quality assessment, not a use claim, and the outline's H3 2.1 explicitly authorized this exact durable framing ("a genuinely usable free tier").
- L109, "It is also the easiest tool here to misuse, and I say that with sympathy." The sympathy attaches to the temptation, not to the tool's behaviour. A reader takes this as Olga knowing the feeling of wanting a shortcut, which is a legitimate personal claim, not a claim of having used ChatGPT study mode.

One line is flagged separately in §7 as `minor` on different grounds: L107's "the fastest way out" is an unsourced comparative superlative. It does not imply testing (it is addressed to "you", not narrated by "I"), so it is not a constraint-1 breach, but it is the one sentence in the post that asserts relative performance without a source.

### 0.2 Constraint 2 detail (forbidden-link cross-reference)

Forbidden set extracted from `research/serp.md` §"Selected results analyzed" plus `_raw/_serp_selection.md` (all 9 ranking URLs):

| Rank | Forbidden URL | Linked in draft? |
|---|---|---|
| 1 | https://www.studley.ai/ | No. Named at L150, L156, L162, L164 as plain text. |
| 2 | https://www.studyfetch.com/ | No. Named at L130, L150, L158, L160 as plain text. |
| 3 | https://www.turbo.ai/ | No. Named at L130, L150 as plain text. |
| 4 | https://www.mindgrasp.ai/ | No. Named at L98, L130, L150 as plain text. |
| 5 | https://www.remnote.com/blog/best-ai-study-tools | No. Referred to only as "one of the two editorial roundups", never named or linked. |
| 6 | https://www.reddit.com/r/studytips/comments/1ps962f/... | No. Referenced at L72 as "The Reddit thread that ranks on page one of Google for this very keyword", unlinked. |
| 7 | https://www.therundown.ai/best-ai-tools/best-ai-study-tools | No. Referred to only as "the other", unlinked. |
| 8 | ask-maeve.com | Not named at all (outline-conforming; it was never fetched, per `research/serp.md` L233). |
| 9 | https://evernote.com/chat-with-ai-assistant/free-study-ai-tool | No. Named at L150, L156 as plain text. |

Checked for the sneak-in vectors specifically: `grep -nE '^\[[^]]+\]:'` (reference-style definitions) returns nothing; `grep -nE '<https?://'` (autolinks) returns nothing; the four `[IMAGE:]` markers contain no URLs; the FAQ block (L207 onward) contains zero links of any kind. Clean.

### 0.3 Constraint 3 detail (vendor-number attribution)

- L130: "Studley's own site says it is trusted by more than 3 million students, StudyFetch's own site claims 8 million users worldwide, Turbo AI claims over 10 million learners, and Mindgrasp claims 5 million." Four numbers, four separate attributions, no shared verb doing double duty. Followed immediately by "Not one of those numbers is independently verified, and not one of those pages defines what a 'user' is." This satisfies `facts.md`'s tier-2 rule and its "never aggregate into 'millions of students use these tools'" prohibition.
- L160: "StudyFetch's site says 92% of its regularly active users reported grade improvements. Read the footnote: the figure comes from the company's own study of 1,000 of its own students during one December finals period, with no control group and no independent review. That is a customer survey wearing a lab coat." Attributed, footnote described rather than hidden, used as an example of how the category's evidence is built. Exactly `facts.md`'s stated "preferred use".
- The 85% and 30% figures are not used at all. Permitted; `facts.md` offers them but does not require them.
- No category-wide aggregation anywhere. Grep confirmed no "millions of students" phrasing.

### 0.4 Constraint 6 detail (pricing)

- Own tools: "try my free AI tools" (L205). Durable framing, no number, links `/ai-tools`. Compliant with `blog-craft.md` §Own-product pricing claims and `product.md` §Pricing page.
- Studley: "$3.74 per week billed monthly or $1.88 per week billed annually" (L156). Verbatim from `facts.md` §Verified, observed 2026-09-06. Permitted.
- Evernote free tier: "50 notes, one notebook, five spaces, 20 tags, 200 attachments, sync to one device and 1GB of storage, with a 40% student discount on an annual paid plan" (L156). Matches `facts.md` §Verified. Permitted.
- The Rundown's "$29 per month membership" (L29). In `facts.md` §Verified. Permitted, and the publisher is not named, so it carries no link risk.
- StudyFetch / Turbo AI / Mindgrasp: no price stated anywhere. L158 says so plainly ("no pricing page I could reach at all"), which converts the absence into evidence rather than a gap.

---

## 1. Voice + tone

| Check | Pass? | Notes |
|---|---|---|
| Matches `author_voice`: `olga` (§`blog-ops/profile/voice.md` + `authors.md`) | Pass | Warm, first-person, punchy-then-explanatory rhythm. Self-deprecating beats present ("Collecting nine apps is its own kind of procrastination", L64). Never scolds in H2 7, which `audience.md` §Language to avoid required. |
| First person throughout (`I`, `we`, `you`), no `one`, `users`, `stakeholders` | Pass | Grep for `\b(one could\|one should\|users are\|stakeholders)\b` returns zero hits. "users" appears only inside attributed vendor claims (L130, L160), which is correct. |
| Active voice (no "X was scanned" shapes) | Pass | Grep for `\bwas (scanned\|checked\|monitored\|built)\b` returns zero hits. |
| Burstiness present, every H2 section has visible sentence-length variation | Pass | Per-section sentence-length stddev: H2 1 = 6.5, H2 2 = 9.3, H2 3 = 9.3, H2 4 = 16.5, H2 5 = 8.9, H2 6 = 10.8, H2 7 = 9.1, H2 8 = 9.9, CTA = 8.9. Threshold is 4. Every section clears it by a wide margin. |
| Forbidden phrases count: `0` (list below); any hits = fail | Pass | Both lists greped (`writing-standards.md` §Forbidden phrases; `voice.md` §Additional forbidden phrases says "None beyond the generic list"). |
| Em-dash count: `0` (grep U+2014); any hits = automatic §1 fail | Pass | Also zero `&mdash;`, `&#8212;`, `&#x2014;`. |
| En-dash context: every U+2013 hit is inside a numeric range | Pass | Zero en-dashes in the file, so vacuously clean. |
| Intro jargon check (`audience.md` §Niche jargon translation) | Pass | The intro never says "SERP". L15 renders it as "the first four results" and "that first page", which is `audience.md`'s own reader-facing translation. No "funnel", "featured snippet", "E-E-A-T", "domain rating" anywhere in the draft. |
| Jargon glossed on first use (outline requirement) | Pass | "hallucinate" glossed L50; "grounded in your own sources" glossed L50; "active recall" and "spaced repetition" glossed L94; "Socratic" glossed L115. All four the outline named, all four done inline. |
| Intro-hook over-anchoring (§1.9) | Partial | The hook is a structural SERP observation, not a time-bound event, so the check technically does not apply. But "this search" recurs at L148, L150 and L223, which dates the post to the 2026-09-06 snapshot. Logged as `minor` scoped to the FAQ only; the body use is the approved differentiation angle and stays. |

<!-- module: product -->
Product code-literal grep: N/A. `product.md` defines no internal code constants (the features are prose names: Email Generator, Text Simplifier, Acronym Explainer, Text Summarizer). No backticked identifiers in the draft.
<!-- /module -->

Forbidden phrases found (grep output from `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md` lists):

None found. All 23 base-list phrases greped case-insensitively; `voice.md` adds none.

## 2. Structure

| Check | Pass? | Notes |
|---|---|---|
| Frontmatter block present and valid per the publish adapter's frontmatter template | Pass | `adapters/publish/frontmatter/wordpress.md` requires title / date / excerpt / tags / authors / `draft: true` and forbids a `cover` field. All present, correct, and no `cover`. wordpress-rest emits no JSON-LD at the adapter level, so that sub-check is skipped per §2.1. |
| Title in frontmatter matches outline "Final title" exactly | Pass | `9 Best AI Study Tools for Students in 2026, Ranked`, character-for-character. 49 chars. |
| Slug / meta description match outline | Pass | Slug `ai-study-tools` (directory name; no slug field in this adapter's template). Excerpt at L4 matches the outline's Final meta description exactly, 159 chars. Single-quoted YAML correctly wraps the embedded double quotes. |
| H2 order in body matches outline body-sections list exactly | Pass | All 8 body H2s in outline order, verbatim. The 9th H2 at L201 ("Where to Start This Week") is the outline's §Closing CTA block; an action-phrased H2 immediately before `## FAQ` is this blog's established convention (`bullet-journal-for-beginners.md` L196, `best-pens-for-note-taking.md` L254, `time-blocking.md` L154). Not a delta. |
| H3 set matches outline | Pass | All 8 H3s present in order: NotebookLM, Claude, Gemini, Otter.ai, ChatGPT Study Mode, Khanmigo, Perplexity, Wolfram Alpha. Converted from the outline's sentence case to Title Case, which is correct per `writing-standards.md` §Formatting and an improvement on the outline. |
| Intro is 2–4 paragraphs, 1–3 sentences each | Pass | 4 paragraphs (L15, L17, L19, L21) of 2 / 1 / 1 / 1 sentences. At the strict maximum, not over it. Target keyword present in P1. |
| Intro internal links ≤2 | Pass | Exactly 1 (`/digital-vs-paper-notes`, L19), woven into a sentence, not a "see also" stack. |
| First internal link precedes first external link | Pass | L19 internal, L50 first external. |
| Every H2 has at least one rhythm marker | Pass | All 9 sections carry a bullet list, a concrete number, or a named example. See §6 for the finer-grained bullet-density and standalone-question results. |
| FAQ has `### <Q>` items matching outline FAQ set 1:1 | Pass | 4 questions, verbatim matches of the 4 verified People Also Ask questions in `facts.md` §"People Also Ask". No invented fifth. |
| JSON-LD FAQPage schema matches FAQ body questions 1:1 | N/A | wordpress-rest emits no FAQPage JSON-LD; the adapter's frontmatter template states FAQ schema is a WP-plugin concern. |
| FAQ is the last block, nothing after it | Pass | L221–L224 is the final content. CTA sits immediately before `## FAQ`. |
| Outro / CTA paragraph present, with action anchor to the blog's CTA target | Pass | L205: "[try my free AI tools](/ai-tools) to automate the mundane". Action anchor, matches `blog.md` §Primary CTA hook verbatim, not the bare homepage. 2 paragraphs, one crisp value line, no feature re-list. |

Structural deltas vs outline (if any):

- None. The draft is a faithful execution of the approved outline's structure, including the image slot positions, the internal-link placement table, and the FAQ set.

## 3. Facts + sourcing

| Check | Pass? | Notes |
|---|---|---|
| Every numeric claim traces to a `facts.md` entry OR has `[VERIFY:]` marker | Fail (minor) | One exception: "eleven of them half-work at once" (L190) is an unsourced rhetorical number that also contradicts its own H2 ("Ten Apps", L188). Logged `minor`. Every other number traces. |
| Every claim traces to a `facts.md` row, an outline row, or a marker | Fail (major) | One mis-attribution: L98's "All five AI-study startups I looked at" applies a `facts.md` row about the five *fetched vendor pages* (which include Evernote and exclude Ask Maeve) to a set labelled "AI-study startups". Logged `major`. One unsupported characterization at L15, logged `major`. |
| Every competitor name used is discussed with a "best for [segment]" framing, not a takedown | Pass | `modules.competitors: false`, so this is not module-gated in. Checked anyway because H2 6 is adversarial by design: it lands on "None of that makes these apps bad... that is a legitimate choice" (L166) and gives the category a "Best for:" line (L168). Not a hit piece. |
| Pricing / feature claims about competitors match `facts.md` values | Pass | Studley and Evernote figures match `facts.md` §Verified verbatim. Freshness gate (§3.6) is module-gated off and `facts.md` has no §Competitor facts section, so the 14-day rule does not apply; both rows were observed 2026-09-06, which is today. No `verified`-date stamp leaks into reader-facing prose. |
| `[VERIFY:]` used for competitor pricing/features (§3.7, forbidden) | N/A | `modules.competitors: false` and `facts.md` has no §Competitor facts section, so §3.7 does not fire on L58's NotebookLM free-tier marker. The outline explicitly prescribed that marker's exact text. |
| Product mentions (count: `3`, `modules.product` on) each earn their place | Pass | L17 ("I build my own small AI tools now", the credibility anchor), L205 ("try my free AI tools" + "The Text Summarizer"). Deletion rule applied: removing either loses real meaning. Far under the >8 stuffing threshold. |
| Own-product pricing claims (§3.9) | Pass | No `$` or usage-cap phrasing anywhere near the product mentions. "free AI tools" is the approved durable framing. |
| Soon-to-ship feature gap check (§3.10) | N/A | `brief.md` lists no soon-to-ship features. |
| Internal links (count: `6`) placed per the outline's P3 table | Pass | 5 blog-post links exactly as the table specifies plus the `/ai-tools` CTA. See breakdown below. |
| Every internal blog link is root-relative, no trailing slash (`blog.trailing_slash: false`) | Pass | All 6 are root-relative. Zero absolute `https://olgapak.com/...` cross-post links. |
| External links (count: `9`) each point to reputable sources; anchor = literal claim | Pass with 1 `major` | See the external-link table below. The OpenAI URL is unverified and must become a marker. |
| Target keyword appears 2–8 times in body (actual count: `7`) | Pass | L15, L23, L27, L38, L70, L92, L123. Five of the seven are H2 headings the outline itself specified, so this is structural, not stuffing. Inside `blog-craft.md`'s 2–8 range. |

**Internal links, against the outline's P3 placement table:**

| Anchor | Target | Outline placement | Actual | Verdict |
|---|---|---|---|---|
| digital and paper notes | `/digital-vs-paper-notes` | intro | L19, intro | Match |
| note-taking method that fits how you study | `/note-taking-methods` | H2 2 | L46, H2 2 | Match |
| Cornell note-taking method | `/cornell-note-taking-method` | H2 4 | L98, H2 4 | Match |
| plan your study week | `/how-to-plan-your-week` | H2 8 | L199, H2 8 | Match |
| time blocking | `/time-blocking` | H2 8 | L199, H2 8 | Match |
| try my free AI tools | `/ai-tools` | CTA | L205, CTA | Match (CTA target, not counted in the 3–5 blog-post budget) |

All five target slugs exist as files in `content/blog/`. Root-relative form with no trailing slash is correct for `trailing_slash: false` and matches published precedent (`best-pens-for-note-taking.md` L258, `bullet-journal-for-beginners.md` L200).

**External links, per-link verdict (§3.5 runs unconditionally):**

| Line | URL | On forbidden SERP set? | On allowlist? | Verdict |
|---|---|---|---|---|
| 50 | https://notebooklm.google.com/ | No | Official platform docs (Google) | OK |
| 64 | https://claude.com/ | No | primary_source (subject of the roundup) | OK |
| 76 | https://gemini.google.com/ | No | Official platform docs (Google) | OK |
| 84 | https://otter.ai/ | No | primary_source | OK |
| 107 | https://openai.com/index/chatgpt-study-mode/ | No | primary_source | **`major`, URL unverified, written from memory** |
| 115 | https://www.khanacademy.org/khan-labs | No | primary_source | OK |
| 134 | https://www.perplexity.ai/ | No | primary_source | OK |
| 142 | https://www.wolframalpha.com/ | No | primary_source | OK |
| 172 | https://www.gallup.com/analytics/644939/state-of-higher-education.aspx | No | Major research org (`blog-craft.md` §Authoritative-site allowlist) | OK, and correctly carries its `[VERIFY:]` marker |

Zero links to the forbidden set. This is the check that actually protects the blog's rankings, and it is clean.

**Quote-fidelity audit (every quotation traced to source):**

| Line | Speaker | Source | Verdict |
|---|---|---|---|
| 40 | u/Im-Spartaque | `facts.md` §Quotes | Verbatim, ellipsis marked |
| 54 | u/eveno7o | `facts.md` §Quotes | Verbatim |
| 56 | u/dantheadmin | `facts.md` §Quotes | Typo cleaned to "sucks" exactly as `facts.md` instructed |
| 56 | u/luvv2ride | `facts.md` §Quotes | Correctly truncated at a sentence boundary |
| 64 | u/avc2539 | `research/reddit.md` L47 (via outline H3 2.2) | Verbatim, ellipsis marked, framed as "One student's opinion, not a benchmark" |
| 72 | u/Any-Cap-7752 | `facts.md` §Quotes | Verbatim, ellipsis marked |
| 134 | u/KevinTMT_c9 | `research/reddit.md` L61 (via outline H3 5.1) | **Truncated mid-sentence with no ellipsis.** Logged `minor` |
| 162 | Studley AI FAQ | `facts.md` §Quotes | Verbatim, framed as category overclaim, not endorsed |
| 176 | u/Adventurekitty74 | `facts.md` §Quotes | Verbatim, ellipsis marked, explicitly framed as discussion not study |
| 178 | u/Separate_District264 | `facts.md` §Quotes | Verbatim, given more room than the alarmed quote, as the outline directed |
| 178 | Colin Wright | `facts.md` §Quotes; "evolutionary biologist" traces to `research/x.md` L84 ("Evolutionary Biology PhD") | Accurate |
| 190 | u/studyToolkit | `facts.md` §Quotes | Verbatim |

**`[VERIFY:]` robustness test (the review's independent-of-writer check):** both markers were tested for whether the surrounding sentence survives deletion, in case Stage 3d cannot verify.

- L58: deleting the marker leaves "Reddit circulates specific quotas, and those move, so check before you plan a semester around them." Reads fine, and the paragraph's actual advice (check the limits) does not depend on the numbers.
- L172: deleting the sentence leaves "Most students are already using this stuff. So the interesting question is not whether to use it. It is when to put it down." Reads fine, and `facts.md` explicitly says the post's argument does not depend on the 57%.

Both pass. This is the fake-precision doctrine executed correctly.

Unsourced / suspicious claims:

- `draft-v1.md:15`, "the first four results all call themselves the best one", issue: `unsupported by the SERP data`. `research/serp.md` gives the rank-1 to rank-4 titles as "Studley AI Study Tool, Ace Your Exams & Crush Your Homework", "StudyFetch | The Top AI Learning Platform", "Turbo AI - Fastest Way to Learn", "Mindgrasp | The #1 AI Study Tool for Students". Two of the four claim top/#1 status; Studley claims neither and Turbo AI claims speed, not superiority. Inherited verbatim from the outline's approved hook, but an approved outline does not make a claim true, and this one is trivially checkable by any reader who runs the search. `major`.
- `draft-v1.md:98`, "All five AI-study startups I looked at ship the same four features", issue: `wrong set`. The `facts.md` §Named examples row covers "all five vendor pages fetched", which are Studley, StudyFetch, Turbo AI, Mindgrasp and **Evernote**. Evernote is not an AI-study startup. Meanwhile the post's other "five" at L52 ("five AI-study-startup homepages") means Studley, StudyFetch, Turbo AI, Mindgrasp and **Ask Maeve**, which was never fetched (`research/serp.md` L233), so the claim is unverified for that reading. Either reading makes the sentence inaccurate. `major`.
- `draft-v1.md:190`, "eleven of them half-work at once", issue: `unsourced number, and contradicts its own H2 at L188 ("Collecting Ten Apps")`. Rhetorical rather than statistical, so not a fake-precision breach, but the internal inconsistency reads as an error. `minor`.
- `draft-v1.md:223`, "Of the five paid all-in-one study apps ranking at the top of this search", issue: `same set mislabel as L98, plus two smaller inaccuracies`. Evernote ranks 9 (not "at the top"), has the free tier the post just itemized (so not simply "paid"), and is a note app rather than an all-in-one study app. The "only two state..." half of the sentence IS correct for the fetched five. `minor`.
- `draft-v1.md:107`, "the fastest way out", issue: `unsourced comparative superlative`. Minor on its own, but it sits in a post whose thesis is that unsourced superlatives are the category's problem. `minor`.
- `draft-v1.md:119`, "its coverage is strongest in school-level subjects rather than a third-year seminar", issue: `not in facts.md`. Directed verbatim by the outline's H3 4.2, so the writer followed the contract. Not logged as an issue; noted in §10 as a Stage 3d spot-check candidate.

## 4. Markers + placeholders

| Marker | Count | Placement OK? |
|---|---|---|
| `[VERIFY:]` | `2` | Yes. Both carry ` \| source:` with substantive, file-referencing clauses. Both sentences survive marker deletion. |
| `[EXTERNAL_LINK_NEEDED:]` | `0` | **Should be 1.** The ChatGPT study-mode URL (L107) was written from memory and needs this marker. See §7 and the adjudication in §10. |
| `[INTERNAL_LINK_NEEDED:]` | `0` | Correct. All five planned internal links resolved to real files in `content/blog/`. |
| `[IMAGE:]` | `4` vs outline `4` in-post slots | Yes. Exact match on count, position and type. |

**`[VERIFY:]` source-clause validation (§4.4):**

1. L58: `| source: research/reddit.md r/PromptEngineering thread, u/AdCold1610 comment, unconfirmed against Google's own docs`. Separator present, clause substantive, names a real file (`research/reddit.md` exists), and volunteers its own weakness ("unconfirmed"). Matches the outline's prescribed text verbatim. Valid.
2. L172: `| source: research/serp.md §"Citations harvested from competitors", secondhand via a competitor roundup, primary Gallup page not yet fetched`. Separator present, clause substantive, and the named section exists at `research/serp.md` L219 with the Gallup row at L223. Matches the outline's prescribed text verbatim. Valid.

Neither is trivial, blank, "TBD", or a restatement of the claim. §4.4 passes, so it does not trigger the Step 4 forcing branch.

**`[IMAGE:]` placement, against the outline's fixed slots:**

| Outline slot | Outline type | Draft line | Follows | Type match | Hygiene checks |
|---|---|---|---|---|---|
| After H2 1 + 1 paragraph | remotion | L27 | H2 1 (L23) + para (L25) | remotion | 2a pass (not the featured concept), 2b pass (next line is prose, not a heading), 2c pass (no table within ±20 lines) |
| After H2 4 + 1 paragraph | remotion | L96 | H2 4 (L92) + para (L94) | remotion | 2a/2b/2c all pass |
| After H2 6 + 1 paragraph | remotion | L152 | H2 6 (L148) + para (L150) | remotion | 2a/2b pass. 2c pass, and deliberately so: the outline kept H2 6's free-tier detail as prose precisely so this chart is not a duplicate of a markdown table. The draft has zero markdown tables. |
| After H2 7 + 1 paragraph | ai-prompt | L174 | H2 7 (L170) + para (L172) | ai-prompt | 2a/2b/2c all pass |

Featured-image hygiene (§2a): no inline `[IMAGE:]` carries `Suggested filename: featured.*` and none reproduces the outline's featured concept (a student at a desk choosing from floating tool icons). Correct: the wordpress-rest adapter ships the featured image via media upload, not an inline placeholder.

Type discipline per `custom-instructions.md` §Image style: three `remotion` slots, all genuine diagrams or charts; one `ai-prompt` slot, a scene. No blanket conversion. Featured stays `ai-prompt`. Compliant.

Marker-shape problems (e.g., `[Verify:]` lowercase v, extra spaces, rogue formats the Phase 4 grep will miss):

- None. Greped for `[Verify:`, `[verify:`, `[EXTERNAL_NEEDED:`, `TODO:`, `[TBD]`. Zero hits.

## 5. Word count

- Draft: `2,995` words (body prose: everything after the closing frontmatter `---` through the end of the CTA at L205, excluding the `## FAQ` block, excluding the four `[IMAGE:]` marker blocks, excluding `[VERIFY:]` marker text)
- Outline target: `2,800` words (outline §Word count roll-up, "Total estimate (body prose, no FAQ)")
- Delta: `+7.0%`
- Band: `within ±10% = pass, no issue logged`

FAQ measures 331 words separately, above the outline's ~150 estimate but not part of the gated total (`blog-craft.md` requires 3–5 Q/A pairs, not a length). Per-section spot-check against the roll-up shows no single section running away; H2 6 (the outline's designated first trim target) is proportionate. No trim needed.

## 6. Humanization floor (per `${CLAUDE_PLUGIN_ROOT}/standards/writing-standards.md` + `blog-ops/profile/voice.md`)

| Check | Pass? | Notes |
|---|---|---|
| No forbidden phrases (0 hits) | Pass | Both lists greped. |
| Zero em-dashes (U+2014, grep returns nothing) | Pass | Also zero HTML entities. |
| En-dashes (U+2013) only in numeric ranges | Pass | Zero en-dashes in the file. |
| First-person throughout | Pass | Zero third-person-drift hits. |
| Active voice | Pass | Zero passive-marker hits. |
| ≥1 rhythm marker in every H2 | Pass | All 9 sections carry at least one of bullet list / standalone question / concrete number / short-next-to-long. |
| ≥1 bullet list per ~300 words | **Fail** | 6 lists (L35, L44, L102, L127, L182, L194) across 2,995 words. The floor asks for ~10. H2 3 and H2 6 carry no list at all. `minor`, with a scoping caveat: do not fix this in H2 6. |
| ≥1 standalone-question paragraph per major section | **Fail** | Only 2 of 9 sections have one: L33 ("So what did I throw out?") and L154 ("So what does 'free' actually get you?"). `voice.md` §Tone lists reader-directed rhetorical hooks as an Olga signature, so this is a genuine voice gap, not just a checklist miss. `minor`. |
| ≥1 concrete number or named example per major section | Pass | H2 1 (9/6/2/7/10/$29), H2 2 (four of five threads, zero of five homepages), H2 3 (named: Gemini, Otter.ai, u/Any-Cap-7752), H2 4 (five startups, four features, 5 core concepts), H2 5 (3M/8M/10M/5M), H2 6 (five pages, two, 50 notes, 92%, 1,000), H2 7 (57%, three cases), H2 8 (two tools), CTA (ten questions). |
| No em-dash overuse | Pass | Zero. |
| Visible sentence-length variation in every section | Pass | Stddev 6.5 to 16.5 across the nine sections, against a threshold of 4. |

## 7. Specific issues

Issues ranked by severity. `critical` = must fix before approve; `major` = fix if revising; `minor` = nit-pick.

| Section (H2) | Line | Severity | Issue | Fix instruction (verbatim for writer if revising) |
|---|---|---|---|---|
| Intro | 15 | `major` | "the first four results all call themselves the best one" is not supported by the captured SERP. Per `research/serp.md`, rank 1 is "Studley AI Study Tool, Ace Your Exams & Crush Your Homework" (claims neither) and rank 3 is "Turbo AI - Fastest Way to Learn" (claims speed, not superiority). Only StudyFetch ("The Top AI Learning Platform") and Mindgrasp ("The #1 AI Study Tool for Students") actually claim to be the best. The post's entire credibility rests on not overclaiming, and this is sentence one. | Rewrite the first sentence so the claim matches the data, keeping the hook's shape and the target keyword in the first sentence. Use the sourced version, which is stronger anyway: `Search "AI study tools" and the first four results are not articles about the tools. They are the tools, and two of them open by calling themselves "the top AI learning platform" and "the #1 AI study tool for students".` Do not add a citation link; those are top-10 SERP URLs and stay unlinked. |
| H2 4 (ChatGPT Study Mode) | 107 | `major` | `https://openai.com/index/chatgpt-study-mode/` was written from memory and never fetched. The outline's §External link plan required this row's "exact URL confirmed at drafting", and that precondition was not met. Leaving it as a live-looking link removes it from Stage 3d's verification worklist, which is exactly where it needs to be. `/index/` paths on openai.com are news-post URLs that get reorganized, so an unverified one risks a 404 in a post whose thesis is "check the source". | Replace the inline markdown link with plain prose plus a marker. Change `[ChatGPT's study mode](https://openai.com/index/chatgpt-study-mode/)` to `ChatGPT's study mode [EXTERNAL_LINK_NEEDED: OpenAI's own product page for ChatGPT study mode / guided learning mode, primary_source, the writer's URL was written from memory and could not be verified]`. Leave the rest of the sentence and the section untouched. |
| H2 4 | 98 | `major` | "All five AI-study startups I looked at ship the same four features" attributes the `facts.md` §Named examples row to the wrong set. That row covers the five *fetched vendor pages*, which include Evernote (not a startup) and exclude Ask Maeve. Read the other way, as the "five AI-study-startup homepages" of L52, the claim covers Ask Maeve, which was never fetched (`research/serp.md` L233) and so cannot be claimed about. | Change `All five AI-study startups I looked at ship the same four features` to `All five vendor pages I read ship the same four features`. One phrase, nothing else in the sentence or paragraph changes. |
| FAQ ("Are there any free AI study apps?") | 223 | `minor` | "Of the five paid all-in-one study apps ranking at the top of this search" repeats the L98 set mislabel and adds two more inaccuracies: Evernote ranks 9 rather than "at the top", and it has the free tier the post itemized at L156, so it is not simply "paid" or an "all-in-one study app". Separately, "this search" dates the answer to the 2026-09-06 SERP, and FAQ answers are the part most likely to be surfaced out of context in a rich result. | Change `Of the five paid all-in-one study apps ranking at the top of this search, only two state anywhere on their own pages what their free plan actually includes` to `Of the five top-ranking study apps I read, only two state anywhere on their own pages what their free plan actually includes`. Leave the rest of the answer alone. |
| H2 8 | 188, 190 | `minor` | The H2 says "Collecting Ten Apps" and the first body sentence says "eleven of them half-work at once". The number is rhetorical rather than statistical, so it is not a fake-precision breach, but the two-line contradiction reads as an error and neither figure traces to `facts.md`. | Change `It is that eleven of them half-work at once` to `It is that ten of them half-work at once`, matching the heading. |
| H2 5 (Perplexity) | 134 | `minor` | u/KevinTMT_c9's quote is truncated mid-sentence without an ellipsis. The original (`research/reddit.md` L61) continues "/ use SciSpace to store and modify". Every other quotation in the draft marks its elisions with "...", so this one is inconsistent as well as imprecise. | Change `use Perplexity to search for materials"` to `use Perplexity to search for materials..."` so the elision is marked. |
| H2 4 (ChatGPT Study Mode) | 107 | `minor` | "the fastest way out" is an unsourced comparative superlative, in a post whose central argument is that the category's problem is unsourced superlatives. | Change `is the fastest way out` to `is the quickest thing to reach for`. |
| Whole post | 33, 154 | `minor` | Standalone-question paragraphs appear in only 2 of 9 body sections, against the humanization floor's one-per-major-section. `voice.md` §Tone names reader-directed rhetorical hooks ("Do you ever feel...?") as an Olga signature, so this is a voice gap as well as a checklist miss. | Add exactly two standalone-question paragraphs, one in H2 3 and one in H2 7, each on its own line as a single short question. Do not add more than two; the draft is at the top of its word budget. |
| H2 3, H2 6 | 70, 148 | `minor` | 6 bullet lists across 2,995 words against the floor's ~10, and H2 3 and H2 6 carry none at all. | Add one short bullet list (2–3 items) to H2 3 only, for example the two-step "upload the deck, ask for questions not a summary" move plus the permission check. Do **not** add a list to H2 6: the outline deliberately keeps its free-tier detail as prose so the L152 chart is not a duplicate of a markdown table, and a list there would recreate the redundancy the outline designed around. |

## 8. What the draft does well

Three specific strengths the writer should preserve on revision. Calling these out explicitly prevents the writer from rewriting strong sections accidentally.

- **L130's four-way attribution is the hardest thing in this post and it is done right.** Each of the 3M / 8M / 10M / 5M counts gets its own attribution verb ("Studley's own site says", "StudyFetch's own site claims", "Turbo AI claims", "Mindgrasp claims") rather than one verb stretched across a list, and the follow-up sentence ("Not one of those numbers is independently verified, and not one of those pages defines what a 'user' is") converts four weak vendor claims into one strong original point. Do not compress these into a single attributed sentence to save words.
- **H2 7 (L170–L186) handles the rejected MIT study exactly as `facts.md` demanded.** It frames the r/Teachers material as "Teachers are arguing about this in public right now", says outright that "that thread is a discussion rather than a study", gives the nuanced u/Separate_District264 reply more room than the alarmed one, and states zero EEG or brain-activity findings. The section also lands the tone `audience.md` requires: "Struggling with material is not a sign the tool failed. The struggle is the learning" is an argument, not a scolding. Do not touch this section beyond adding the one standalone question.
- **Both `[VERIFY:]` markers are built to survive deletion.** L58 and L172 are constructed so that if Stage 3d cannot confirm the claim, removing it leaves a sentence that still reads and an argument that still stands. That is the fake-precision doctrine done properly, and it is rarer than it should be.
- **The method statement at L25 is the post's spine and it defends the no-testing constraint by getting in front of it.** "No lab, no scoring rubric out of ten" is the sentence that makes the whole roundup honest instead of evasive. Keep it verbatim.
- **Every piece of jargon is glossed inline on first use**: "hallucinate" (L50), grounding (L50), active recall and spaced repetition (L94), Socratic (L115). And the intro translates "SERP" into "the first four results" / "that first page" rather than using the term, which is `audience.md` §Niche jargon translation applied without being told twice.

## 9. Instructions for writer (only if verdict = `request_revisions`)

Copy-paste-ready prompt block for the writer's `mode=revise` invocation. The writer reads this verbatim.

```
The editor requested revisions to draft-v1.md. Apply ONLY these issues
(preserve everything else, including the strengths listed above):

1. L15, first sentence. "the first four results all call themselves the best
   one" is not supported by research/serp.md: rank 1 (Studley, "Ace Your Exams
   & Crush Your Homework") and rank 3 (Turbo AI, "Fastest Way to Learn") make
   no such claim. Rewrite as:
   Search "AI study tools" and the first four results are not articles about
   the tools. They are the tools, and two of them open by calling themselves
   "the top AI learning platform" and "the #1 AI study tool for students".
   Keep the target keyword in this first sentence. Do NOT add a link; those
   are top-10 SERP URLs and stay unlinked.

2. L107. The OpenAI URL was written from memory and cannot be verified at this
   stage. Replace
   [ChatGPT's study mode](https://openai.com/index/chatgpt-study-mode/)
   with
   ChatGPT's study mode [EXTERNAL_LINK_NEEDED: OpenAI's own product page for
   ChatGPT study mode / guided learning mode, primary_source, the writer's URL
   was written from memory and could not be verified]
   Change nothing else in that sentence.

3. L98. Change "All five AI-study startups I looked at ship the same four
   features" to "All five vendor pages I read ship the same four features".
   The facts.md row covers the five fetched vendor pages, which include
   Evernote (not a startup) and exclude Ask Maeve (never fetched).

4. L223 (FAQ). Change "Of the five paid all-in-one study apps ranking at the
   top of this search" to "Of the five top-ranking study apps I read". Evernote
   ranks 9 and has the free tier the post itemizes at L156.

5. L190. Change "eleven of them half-work at once" to "ten of them half-work at
   once", matching the H2 at L188.

6. L134. Add an ellipsis to mark the elision: change
   use Perplexity to search for materials"
   to
   use Perplexity to search for materials..."

7. L107. Change "is the fastest way out" to "is the quickest thing to reach
   for". It is an unsourced comparative superlative in a post about unsourced
   superlatives.

8. Add exactly TWO standalone-question paragraphs, one in H2 3 and one in H2 7,
   each a single short question on its own line. No more than two; the draft is
   already at the top of its word budget.

9. Add ONE short bullet list (2 to 3 items) to H2 3 only. Do NOT add a bullet
   list to H2 6: its free-tier detail is deliberately prose so the L152 chart
   is not a duplicate of a markdown table.

Everything else is locked and must not change: the no-hands-on-testing
discipline (no sentence may imply Olga used these nine tools), the unlinked
treatment of Studley / StudyFetch / Turbo AI / Mindgrasp / Ask Maeve / Evernote,
the per-vendor attribution at L130 and L160, the debate-not-finding framing in
H2 7, zero em-dashes, and the Studley / Evernote pricing figures.

Do NOT remove [VERIFY:] / [EXTERNAL_LINK_NEEDED:] / [INTERNAL_LINK_NEEDED:] /
[IMAGE:] markers unless the issue explicitly says to. Do NOT change the H2
order, title, slug, meta description, or FAQ set, those are locked.

Produce blog-ops/drafts/ai-study-tools/draft-v2.md. Do not overwrite the prior
draft.
```

## 10. Reviewer notes (free-form)

**Adjudication 1: the ChatGPT study-mode URL. Ruling: convert it to `[EXTERNAL_LINK_NEEDED:]` now, do not leave it for Stage 3d to verify in place.**

Four reasons, in order of weight:

1. **A bare live-looking link is not on Stage 3d's worklist the way a marker is.** Stage 3d hunts markers. A plain markdown link reads as already-verified and gets skipped. Converting it is the only way to guarantee the URL is actually checked before publish. This argument alone decides it.
2. **The outline made verification a drafting-time obligation and it was not met.** The §External link plan row reads "OpenAI's own product page, exact URL confirmed at drafting". The precondition failed, so the contract's own fallback (a marker) applies.
3. **`blog-craft.md` §External linking says exactly this:** when a reputable source cannot be confirmed, mark `[EXTERNAL_LINK_NEEDED:]`. A URL written from memory is an invented fact of the same class as an invented statistic.
4. **The post cannot afford this particular failure.** Its whole thesis is that the category ships unverifiable claims and the reader should check the source. A 404 on a from-memory link would be the most quotable possible own-goal, and `/index/` paths on openai.com are news-post URLs that get reorganized regularly.

**Adjudication 2: the external-link count. Ruling: 9 is acceptable. Do NOT apply the outline's trim order. Keep Wolfram Alpha and keep the Gallup row.**

Reasons:

1. **`custom-instructions.md` outranks the standards default.** Its §Content policy requires a real, working product link for every product in a "best X" roundup ("give every product a real link now"), and that file's own precedence line puts it above persona/standards defaults. `blog-craft.md`'s "3 to 5 external links" is a standards default.
2. **The approved outline planned all 8 tool links explicitly**, and Stage 3b's job is conformance to the approved contract, not relitigating it.
3. **These 8 are not citations, they are the subjects of the roundup.** The 3-to-5 guidance exists to stop citation padding and equity leakage to sites competing for the keyword. A "9 best tools" post that names 8 tools and links none of them is worse for the reader and reads as evasive, in a post whose selling point is transparency.
4. **The rule that actually protects rankings is satisfied.** Zero links to the nine top-10 SERP URLs. That is the check with teeth, and it is clean.
5. **The trim order would cut the wrong thing anyway.** Wolfram Alpha is one of the nine picks. Linking seven picks and not the eighth is arbitrary from the reader's side.

Note the arithmetic after the revise pass: converting the OpenAI row to a marker (adjudication 1) drops the rendered count to 8 on its own, and if Stage 3d cannot confirm the Gallup figure the claim gets deleted per `facts.md`, landing at 7. So the count self-corrects downward through the verification stages without anyone cutting a pick's link. No action needed on this at Stage 3b.

**Residual risk the editor should carry to Gate 2, not to the writer.** `blog.md` §Point of view promises "Every tool and tactic recommended here is something Olga has personally tested". This post cannot make that promise and correctly does not try, but it is the first post on this blog to publish recommendations without it. The draft's mitigation (the explicit method statement at L25) is the right one and about as good as prose can do. The outline's own open question already carries the real fix: spot-test NotebookLM, ChatGPT study mode and Studley before approving, all free or near-free and checkable in minutes. That checkbox needs to survive into `action-items.md`. If Olga does spot-test, the L25 method statement can gain a clause at Gate 2 and the post gets materially stronger. Do not let the writer add that clause speculatively on the revise pass.

**Two outline-authorized claims that are worth a Stage 3d glance**, neither logged as an issue because the writer followed the contract exactly:

- L119, Khanmigo's "coverage is strongest in school-level subjects rather than a third-year seminar". Directed verbatim by outline H3 4.2 but not backed by a `facts.md` row.
- L86, "recording a lecture may need your lecturer's permission". Directed by outline H3 3.2, correctly hedged with "may", and safe as written.

**One thing that is very slightly stronger than the outline asked for and should be kept:** the H3 headings were converted from the outline's sentence case to Title Case, which is what `writing-standards.md` §Formatting actually requires. That is the writer improving on the contract, not drifting from it.

**Durability watch, not an issue.** "This search" recurs at L148, L150 and L223 and pins the post to the 2026-09-06 SERP snapshot. Body use is the approved differentiation angle and should stay. Only the FAQ instance is being changed, because FAQ answers get surfaced out of context. If this post is still ranking in a year and the SERP has reshuffled, H2 1 and H2 6 are where a refresh pass would start.
