import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";
const primaryTint = "rgba(43,108,176,0.10)";

// ---- Fixed layout grid (never hand-place a card) ----
const CARD_W = 330;
const CARD_H = 220;
const GAP = 80; // identical gap between every pair of cards in a row
const COLS = 4;
const ROW_W = COLS * CARD_W + (COLS - 1) * GAP; // 1560
const LEFT = (CANVAS.width - ROW_W) / 2; // 120, the safe margin
const ROW_CENTERS = [370, 790];
const GUTTER_Y = (ROW_CENTERS[0] + ROW_CENTERS[1]) / 2; // 580

const xAt = (col: number): number => LEFT + col * (CARD_W + GAP);
const yAt = (row: number): number => ROW_CENTERS[row] - CARD_H / 2;

type Step = { n: number; label: string; row: number; col: number; accent?: boolean };

const STEPS: Step[] = [
  { n: 1, label: "Prep the night before", row: 0, col: 0 },
  { n: 2, label: "Pick one goal", row: 0, col: 1 },
  { n: 3, label: "Start 1 or 2 habits", row: 0, col: 2 },
  { n: 4, label: "Park the phone", row: 0, col: 3 },
  { n: 5, label: "Protect one focus block", row: 1, col: 0, accent: true },
  { n: 6, label: "Keep a 10-minute backup", row: 1, col: 1 },
  { n: 7, label: "Test it for two weeks", row: 1, col: 2 },
];

const ARROW_PAD = 14; // clear space between an arrow tip/tail and a card edge
const HEAD = 14;

const StepCard: React.FC<{ step: Step }> = ({ step }) => (
  <div
    style={{
      position: "absolute",
      left: xAt(step.col),
      top: yAt(step.row),
      width: CARD_W,
      height: CARD_H,
      boxSizing: "border-box",
      background: step.accent ? accentTint : palette.surface,
      border: step.accent ? `2px solid ${palette.accent}` : `1px solid ${palette.border}`,
      borderRadius: 16,
      boxShadow: cardShadow,
      padding: "22px 26px 26px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 26,
        flexShrink: 0,
        background: step.accent ? "rgba(14,159,142,0.16)" : primaryTint,
        color: step.accent ? palette.accent : palette.primary,
        fontFamily: fonts.mono,
        fontSize: 30,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {step.n}
    </div>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 33,
        fontWeight: 600,
        lineHeight: 1.22,
        color: palette.text,
      }}
    >
      {step.label}
    </div>
  </div>
);

const arrowStroke = {
  fill: "none",
  stroke: palette.muted,
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Horizontal connector inside the fixed gap after a given column.
const HArrow: React.FC<{ row: number; col: number }> = ({ row, col }) => {
  const x1 = xAt(col) + CARD_W + ARROW_PAD;
  const x2 = xAt(col + 1) - ARROW_PAD;
  const y = ROW_CENTERS[row];
  return (
    <>
      <path d={`M${x1} ${y} L${x2} ${y}`} {...arrowStroke} />
      <path d={`M${x2 - HEAD} ${y - 8} L${x2} ${y} L${x2 - HEAD} ${y + 8}`} {...arrowStroke} />
    </>
  );
};

// Elbow from the bottom of card 4, along the gutter, into the top of card 5.
const ElbowArrow: React.FC = () => {
  const xStart = xAt(3) + CARD_W / 2;
  const yStart = yAt(0) + CARD_H + ARROW_PAD;
  const xEnd = xAt(0) + CARD_W / 2;
  const yEnd = yAt(1) - ARROW_PAD;
  const r = 18;
  const d = [
    `M${xStart} ${yStart}`,
    `L${xStart} ${GUTTER_Y - r}`,
    `Q${xStart} ${GUTTER_Y} ${xStart - r} ${GUTTER_Y}`,
    `L${xEnd + r} ${GUTTER_Y}`,
    `Q${xEnd} ${GUTTER_Y} ${xEnd} ${GUTTER_Y + r}`,
    `L${xEnd} ${yEnd}`,
  ].join(" ");
  return (
    <>
      <path d={d} {...arrowStroke} />
      <path d={`M${xEnd - 8} ${yEnd - HEAD} L${xEnd} ${yEnd} L${xEnd + 8} ${yEnd - HEAD}`} {...arrowStroke} />
    </>
  );
};

export const C_productive_morning_routine__morning_routine_7_steps_flow: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background, fontFamily: fonts.sans, color: palette.text }}>
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <HArrow row={0} col={0} />
      <HArrow row={0} col={1} />
      <HArrow row={0} col={2} />
      <ElbowArrow />
      <HArrow row={1} col={0} />
      <HArrow row={1} col={1} />
    </svg>
    {STEPS.map((s) => (
      <StepCard key={s.n} step={s} />
    ))}
    <BlogWatermark />
  </AbsoluteFill>
);
