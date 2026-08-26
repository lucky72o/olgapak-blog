import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Fixed row geometry. Inner width 1560.
const COND_W = 900;
const ARROW_W = 120;
const GAP = 24;
const OUT_W = 1560 - COND_W - GAP - ARROW_W - GAP; // 492
const COND_X = SAFE_MARGIN; // 120
const ARROW_X = COND_X + COND_W + GAP; // 1044
const OUT_X = ARROW_X + ARROW_W + GAP; // 1188

const ROW_TOP = 140;
const ROW_H = 146;
const ROW_GAP = 44;
const yAt = (i: number) => ROW_TOP + i * (ROW_H + ROW_GAP); // 140, 330, 520, 710, 900

// Neutral mapping connector: muted, solid, strokeWidth 2.5, rounded caps, fixed length.
const Arrow: React.FC<{ y: number }> = ({ y }) => (
  <svg
    width={ARROW_W}
    height={24}
    viewBox={`0 0 ${ARROW_W} 24`}
    style={{ position: "absolute", left: ARROW_X, top: y + ROW_H / 2 - 12 }}
  >
    <line
      x1={6}
      y1={12}
      x2={ARROW_W - 16}
      y2={12}
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <path
      d={`M${ARROW_W - 20} 5 L${ARROW_W - 6} 12 L${ARROW_W - 20} 19`}
      fill="none"
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Row = { condition: string; outcome: string; emphasis: boolean };

const rows: Row[] = [
  {
    condition:
      "If you need to understand it (lectures, new concepts, anything you'll be tested on)",
    outcome: "Handwrite it, paper or tablet",
    emphasis: false,
  },
  {
    condition: "If you need to find it later (reference, meeting actions, shared docs)",
    outcome: "Type it",
    emphasis: false,
  },
  {
    condition: "If the task or the exam happens on a screen",
    outcome: "Practice on a screen",
    emphasis: false,
  },
  {
    condition: "If handwriting is painful, slow, or not available to you",
    outcome: "Type it, then summarize",
    emphasis: false,
  },
  {
    condition: "If it matters a lot",
    outcome: "Handwrite, then digitize",
    emphasis: true,
  },
];

export const NotesDecisionRule: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {rows.map((row, i) => {
      const y = yAt(i);
      return (
        <React.Fragment key={row.outcome}>
          <div
            style={{
              position: "absolute",
              left: COND_X,
              top: y,
              width: COND_W,
              height: ROW_H,
              boxSizing: "border-box",
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "22px 30px",
              display: "flex",
              alignItems: "center",
              fontFamily: fonts.sans,
              fontSize: 30,
              fontWeight: 500,
              color: palette.text,
              lineHeight: 1.28,
            }}
          >
            {row.condition}
          </div>

          <Arrow y={y} />

          <div
            style={{
              position: "absolute",
              left: OUT_X,
              top: y,
              width: OUT_W,
              height: ROW_H,
              boxSizing: "border-box",
              background: row.emphasis ? "rgba(14,159,142,0.10)" : palette.surface,
              border: row.emphasis
                ? `2px solid ${palette.accent}`
                : `1px solid ${palette.border}`,
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "22px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: fonts.sans,
              fontSize: 31,
              fontWeight: 700,
              color: palette.text,
              lineHeight: 1.25,
            }}
          >
            {row.outcome}
          </div>
        </React.Fragment>
      );
    })}

    <BlogWatermark />
  </AbsoluteFill>
);
