import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const GRID_LEFT = SAFE_MARGIN; // 120
const GRID_INNER_W = CANVAS.width - 2 * SAFE_MARGIN; // 1560
const CARD_GAP = 40;
const CARD_W = (GRID_INNER_W - CARD_GAP) / 2; // 760
const CARD_H = 380;
const GRID_TOP = 130;
const PILL_TOP = 985;

// Fixed-height sub-line slot on every card (used only by Action items), so the
// divider and the example lines share one baseline across all four boxes.
const SUBLINE_H = 34;

const xAt = (col: number): number => GRID_LEFT + col * (CARD_W + CARD_GAP); // 120, 920
const yAt = (row: number): number => GRID_TOP + row * (CARD_H + CARD_GAP); // 130, 550

type Box = {
  heading: string;
  subline?: string;
  example: string[]; // explicit line breaks, never an orphan word
};

// Copy lifted verbatim from the worked example in the draft.
const BOXES: Box[] = [
  {
    heading: "Decisions",
    example: ["- Launch moved to 14 October,", "agreed by Sam"],
  },
  {
    heading: "Action items",
    subline: "who / what / by when",
    example: ["- Priya / send the revised budget /", "Friday 12th"],
  },
  {
    heading: "Open questions",
    example: ["- Do we still need legal sign-off on the", "new landing page copy?"],
  },
  {
    heading: "Context",
    example: ["- Date moved because the printer lost two", "weeks, not because design slipped"],
  },
];

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: CARD_W,
  height: CARD_H,
  boxSizing: "border-box",
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)",
  padding: "34px 36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const FourBoxMeetingNotesTemplate: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* 2x2 grid: Decisions, Action items / Open questions, Context.
        All four cards identical: no box outranks another. */}
    {BOXES.map((box, i) => (
      <div
        key={box.heading}
        style={{
          ...cardStyle,
          left: xAt(i % 2),
          top: yAt(Math.floor(i / 2)),
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 46,
            fontWeight: 700,
            letterSpacing: 0.4,
            lineHeight: 1.15,
            color: palette.text,
          }}
        >
          {box.heading}
        </div>

        <div
          style={{
            marginTop: 8,
            height: SUBLINE_H,
            display: "flex",
            alignItems: "center",
            fontFamily: fonts.sans,
            fontSize: 26,
            lineHeight: 1.3,
            color: palette.muted,
          }}
        >
          {box.subline ?? ""}
        </div>

        <div
          style={{
            marginTop: 26,
            marginBottom: 26,
            width: "100%",
            height: 1,
            background: palette.border,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: fonts.mono,
            fontSize: 26,
            lineHeight: 1.45,
            color: palette.muted,
          }}
        >
          {box.example.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    ))}

    {/* The composition's single accent element, belonging to no box */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: PILL_TOP,
        width: CANVAS.width,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: accentTint,
          color: palette.accent,
          fontFamily: fonts.sans,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 1.6,
          padding: "18px 46px",
          borderRadius: 999,
          whiteSpace: "nowrap",
        }}
      >
        IF A SENTENCE FITS NONE OF THE FOUR, IT DOES NOT GET WRITTEN DOWN
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
