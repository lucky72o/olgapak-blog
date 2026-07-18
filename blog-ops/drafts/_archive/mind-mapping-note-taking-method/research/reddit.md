# Reddit Research: mind mapping note taking

Written by: blog-researcher subagent during Stage 1.5a analysis.
Sources: editor pre-selected 5 Reddit threads (`_raw/_reddit_search.json`, `_raw/_reddit_search2.json`, `_raw/_reddit_selection.md`); per-thread deep fetches at `_raw/reddit-NN-<short>.json`.
Read by: blog-editor (synthesis stage, plan + facts curation).

**Raw shape note:** parsed from Reddit's native `.json` API. Post at `[0].data.children[0].data` (t3); top-level comments at `[1].data.children[].data` (t1). Scores/comment counts below are the live values in the fetched JSON (they differ slightly from the editor's `_reddit_selection.md` snapshot, e.g. thread 1 is now score 39/9 comments, thread 2 score 89/36).

## Search metadata

- Source: Reddit
- Query: initial `mind mapping note taking` (sort=relevance, t=year) returned mostly off-topic high-score noise; refined `mind maps for studying notes` (sort=relevance, t=all) surfaced the on-topic threads, plus the r/PKMS thread that also ranked at SERP position 9
- Search URL: https://www.reddit.com/search/?q=mind%20maps%20for%20studying%20notes&sort=relevance&t=all
- Date searched: 2026-07-18
- Threads selected for deep fetch: 5
- Threads fetched successfully: 5

## Selected threads (per editor's `_reddit_selection.md`)

### 1. Switched to Mind Mapping for Atomic Structure Notes
- URL: https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
- Subreddit: r/NoteTaking
- Author: u/Responsible_Ball_356
- Score: 39 | Comments: 9 | Posted: 2026-04-11
- Why selected: first-person account of switching to mind mapping for a specific STEM subject — a clean "why it clicked" story from a beginner's angle.

#### Post body (verbatim, trimmed if needed)
> Instead of writing linear notes, I used Mindomo to create a mind map. Starting with the basic idea of the atom, I branched out into protons, neutrons, electrons, then further into concepts like orbitals, charges, and atomic models. Seeing everything visually connected made it much easier to understand how the topics relate instead of just memorizing isolated points. What really helped was: Breaking big topics into smaller chunks / Using connections instead of paragraphs / Keeping everything on one "map" so I could revise quickly. It felt more like building a system than just taking notes. Definitely made revision faster and less overwhelming.

#### Top comment patterns
- Most upvoted POV: "There should be a community where people can share their editable notes… like open source notes" — u/trying_to_learn_too, score 9 (a sharing/collaboration wish, not a critique of the method)
- Most contrarian POV: a practical limitation — "mindmap has a limit that you can not connect notes between different branch, only from parent to child note; if your notes have complicated connections, you should try whiteboard/canvas" — u/thenewvu, score 2
- Common concern raised: "what app did you use / how do I share the editable version?" — tool questions appeared in ~4 of 9 comments (Mindomo, sorusly.ai, SimpleMind, todofi all named)

### 2. STOP WASTING TIME ON NOTES! How I used Mind Mapping to score a 40+ in the IB
- URL: https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
- Subreddit: r/IBO (International Baccalaureate students)
- Author: u/Hopeful_Appeal_7346
- Score: 89 | Comments: 36 | Posted: 2025-06-06
- Why selected: exam-success story with the richest craft detail on the SERP+Reddit set (the actual mechanics + the #1 beginner mistake) AND real pushback in the comments. Note: post ends with a tutoring email/webinar plug, so treat as promo-tinged.

#### Post body (verbatim, trimmed if needed)
> Writing notes, is NOT studying. Especially when it's in that linear, Pinterest aesthetic we're made to believe constitutes to a straight A student… In theory, it makes sense. Your brain doesn't organize information linearly… When you think of one thing, your brain doesn't flip to the "next page" — it jumps to whatever is nearby on the mental map… The biggest mistake people tend to make with mind maps, is to repeat that 'linear' fashion of note taking into their mind maps… Your mind maps should NOT have big slabs of text. One sentence here and there is fine, but having paragraphs in your mind maps defeats the whole purpose… try to replace ideas and sentences with images as much as you can.

#### Top comment patterns
- Most upvoted POV: skeptical — "thats just notes but with extra steps. you still aren't really revising. u can score highly by just memorizing stuff for most subjects using anki and doing past papers" — u/iaancheng, score 17 (also flags the post as an "unsolicited ad")
- Most contrarian POV: same comment — challenges whether mapping is real revision vs. active recall (Anki/past papers)
- Common concern raised: "can you share a visual example?" — requests to actually SEE a finished map appeared in ~5 comments (u/Dramatic_Fisherman19, u/0534xn, u/RoryLoveskai asking if it works for math/bio)

### 3. Mind map + note taking?
- URL: https://www.reddit.com/r/PKMS/comments/1ig15k4/mind_map_note_taking/
- Subreddit: r/PKMS (personal knowledge management)
- Author: u/IdaSukiShwan
- Score: 10 | Comments: 25 | Posted: 2025-02-02
- Why selected: literally the query — someone wanting a structured branching mind-map layer on top of note-taking (also SERP rank 9). Shows the exact mental model beginners bring.

#### Post body (verbatim, trimmed if needed)
> I already use obsidian, and I know you can see the interconnections between notes in its graph view. I'm looking for something that follows a more structured graph view. One note can function as the root node, which branches in other daughter nodes… A mind map like structure instead of a web of interconnections. I know some mind mapping tools like Xmind but I feel they don't really lean too much into the note taking aspect.

#### Top comment patterns
- Most upvoted POV (tie, score 4): (a) build-your-own via an app author; (b) "In LogSeq you can directly use your Obsidian notes. If you indent (using tab) under the main topic, you can simply build the tree structure. Then with the mindmap plugin, it is converted to a mindmap." — u/Cautious_Exam_5537
- Most contrarian POV: the thread quietly reframes the ask — a hierarchical *mind map* (parent→child branches) is a different thing from Obsidian's *web* graph view (u/mrmodusai: "most graph-based note apps… focus on webs of connections rather than structured hierarchies")
- Common concern raised: heavy tool-recommendation spam / self-promo — 8+ different apps named (Escape, LogSeq, Noteey, Sublime, Heptabase, Craft, MindMeister, MindManager…), several by their own builders

### 4. Note-taking/Mind-mapping + PKM app for Mac/iOS
- URL: https://www.reddit.com/r/PKMS/comments/1oemrzu/notetakingmindmapping_pkm_app_for_macios/
- Subreddit: r/PKMS
- Author: u/BigNeuroticMess
- Score: 7 | Comments: 32 | Posted: 2025-10-24
- Why selected: a medical student's real workflow (Obsidian + SimpleMind) and its friction points — the concrete paper-vs-digital + "connect concepts across sources" angle.

#### Post body (verbatim, trimmed if needed)
> I'm a medical student and there are a lot of concepts that are mentioned across various lectures. I'd like the ability to connect concepts to help keep track of previously learned material and how it relates to new material… My main pain points with my current workflow are: I can't link multiple documents/nodes to a single topic/node in SimpleMind; I wish I could click on a connection between 2 nodes and be taken back and forth… Being able to nest a mind map within a mind map… would do wonders for letting me connect an idea on an overarching theme.

#### Top comment patterns
- Most upvoted POV: "you're asking for a lot! I don't think any one application can do it all" — u/Barycenter0, score 5 (recommends SimpleMind for mapping + Logseq for PDF whiteboard)
- Most contrarian POV: several insist a two-app split is unavoidable (DevonThink + Kosmik; Obsidian + Excalidraw) — no single tool nests maps AND does PDF search well
- Common concern raised: wanting to jump between a node and its source PDF / nest maps within maps — the "map as index back to the source" need appeared across ~4 comments

### 5. I've ADHD brain and I can't take notes in Uni
- URL: https://www.reddit.com/r/study/comments/1ux0s6g/ive_adhd_brain_and_i_cant_take_notes_in_uni/
- Subreddit: r/study
- Author: u/Optimal_Secretary241
- Score: 87 | Comments: 27 | Posted: 2026-07-15 (3 days before this research — very current)
- Why selected: pain-point VOC on *when linear note-taking fails* — and notably where mind mapping ALSO failed this user during fast lectures. Honest counter-evidence for the "when it doesn't work" section.

#### Post body (verbatim, trimmed if needed)
> My brain can't organize information on the page fast enough, so my notes end up messy or incomplete. Sometimes I'll write one sentence, then realize I missed 2 minutes of the lecture because I was focused on that one line. I've tried different note taking methods like cornell and mind mapping but none of them really work for me during lectures, especially when there's a lot of math and derivations moving fast on the board.

#### Top comment patterns
- Most upvoted POV: capture less, listen more — "As much as I can, I just write the important terms and then search about it later so I can focus more on the lecturer… Don't worry about organized notes… As long as you get back on your notes to review them" — u/Donkey-RubberDucky, score 8
- Most contrarian POV: don't map live at all — record the lecture, then build notes/maps after by pausing and rewinding (u/testing_testing5678, u/EveryDisaster "finished with a 3.9 GPA doing that", u/MightyWallJericho)
- Common concern raised: the "can't listen + organize + write simultaneously" overload appeared in ~6 comments; several recommend recording + post-lecture processing rather than real-time mapping

## Voice-of-customer themes

- **Theme:** Mind mapping's payoff is understanding *connections*, not capturing detail — it makes relationships between ideas visible.
  - Evidence: "Seeing everything visually connected made it much easier to understand how the topics relate instead of just memorizing isolated points.", https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
  - Evidence: "By the end of a Mind Mapping session, I was able to connect various parts of the chapter in ways that solidified my understanding in ways linear notes could never do.", https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
  - Frequency: appeared in 4/5 threads

- **Theme:** The #1 beginner mistake is cramming paragraphs into nodes — treating a map like linear notes.
  - Evidence: "Your mind maps should NOT have big slabs of text… having paragraphs in your mind maps defeats the whole purpose of doing them.", https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
  - Evidence (adjacent — "using connections instead of paragraphs" is the fix): "Using connections instead of paragraphs / Breaking big topics into smaller chunks", https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
  - Frequency: appeared in 2/5 threads (but it's the single most actionable craft point in the whole set)

- **Theme:** Mind mapping struggles for real-time capture of fast, dense, sequential material (math/derivations, fast lectures).
  - Evidence: "I've tried different note taking methods like cornell and mind mapping but none of them really work for me during lectures, especially when there's a lot of math and derivations moving fast on the board.", https://www.reddit.com/r/study/comments/1ux0s6g/ive_adhd_brain_and_i_cant_take_notes_in_uni/
  - Evidence (skeptic): "thats just notes but with extra steps. you still aren't really revising. u can score highly by just memorizing stuff… using anki and doing past papers.", https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
  - Frequency: appeared in 2/5 threads — important honest counterweight for the "when it doesn't work" section

- **Theme:** People conflate a hierarchical mind map (central topic → branches) with a web/graph of interconnections; the distinction confuses beginners.
  - Evidence: "I'm looking for something that follows a more structured graph view… A mind map like structure instead of a web of interconnections.", https://www.reddit.com/r/PKMS/comments/1ig15k4/mind_map_note_taking/
  - Evidence: "most graph-based note apps (like Obsidian) focus on webs of connections rather than structured hierarchies.", https://www.reddit.com/r/PKMS/comments/1ig15k4/mind_map_note_taking/
  - Frequency: appeared in 2/5 threads

- **Theme:** Mind maps shine for revision/overview and best-built *after* class, not necessarily live.
  - Evidence: "Keeping everything on one 'map' so I could revise quickly… Definitely made revision faster and less overwhelming.", https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
  - Evidence: "record every lecture… then compared my irl typed notes, then turned those into a study guide" / recommendations to build notes after class by pausing and rewinding, https://www.reddit.com/r/study/comments/1ux0s6g/ive_adhd_brain_and_i_cant_take_notes_in_uni/
  - Frequency: appeared in 2/5 threads

## Use-in-post quotes

- "Seeing everything visually connected made it much easier to understand how the topics relate instead of just memorizing isolated points.", u/Responsible_Ball_356, r/NoteTaking, source: https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
- "It felt more like building a system than just taking notes.", u/Responsible_Ball_356, r/NoteTaking, source: https://www.reddit.com/r/NoteTaking/comments/1siptte/switched_to_mind_mapping_for_atomic_structure/
- "Your mind maps should NOT have big slabs of text… having paragraphs in your mind maps defeats the whole purpose of doing them.", u/Hopeful_Appeal_7346, r/IBO, source: https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
- "When you think of one thing, your brain doesn't flip to the 'next page' — it jumps to whatever is nearby on the mental map.", u/Hopeful_Appeal_7346, r/IBO, source: https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
- "thats just notes but with extra steps. you still aren't really revising.", u/iaancheng, r/IBO, source: https://www.reddit.com/r/IBO/comments/1l4jdnu/stop_wasting_time_on_notes_how_i_used_mind/
- "none of them really work for me during lectures, especially when there's a lot of math and derivations moving fast on the board.", u/Optimal_Secretary241, r/study, source: https://www.reddit.com/r/study/comments/1ux0s6g/ive_adhd_brain_and_i_cant_take_notes_in_uni/
- "A mind map like structure instead of a web of interconnections.", u/IdaSukiShwan, r/PKMS, source: https://www.reddit.com/r/PKMS/comments/1ig15k4/mind_map_note_taking/

## Angle opportunities for this blog

- Lead the "how" with the ONE mistake that ruins beginner maps — paragraphs in nodes — because it's the highest-signal, most-repeated craft point and no SERP guide frames it as a mistake. Pair it with the fix ("connections instead of paragraphs," 1–5 words per node).
- Build the "when it does NOT work" section on real voice-of-customer, not theory: fast math/derivations, live capture of dense sequential detail (r/study), and the honest "is this just active recall with extra steps?" challenge (r/IBO) — then position mapping for overview/connections/revision, which is where users say it actually pays off.
- Clear up the map-vs-web confusion early (central topic → branches, a hierarchy — not Obsidian's web graph). Beginners arrive with the wrong mental model (r/PKMS).
- Frame mind mapping as often a *post-lecture / revision* activity ("build the map after, from your messy notes or a recording") — matches how successful students describe it and sidesteps the live-capture failure mode.
- Natural, honest Text Summarizer tie-in: since nodes must be tiny (1–5 words) and overstuffed maps fail, a "condense the source before you map it" step solves a real pain users voice — without turning the post into a tool pitch. Keep it soft and near the end per the brief.

## Open questions

- Two of the five threads (r/PKMS x2) skew heavily toward tool-shopping and self-promo; the on-brief guidance is to NOT mirror that (no software roundup) — flagging so the editor keeps the tools angle high-level.
- The strongest craft source (r/IBO) ends with a tutoring/webinar plug, and its top comment calls it an ad; use the technique details (they're sound and echoed elsewhere) but do not cite it as an authority or link it.
- No thread gives a shareable *image* of a finished map (multiple commenters explicitly asked to see one) — the post will need its own worked-example visual; flag an image placeholder for the editor.
