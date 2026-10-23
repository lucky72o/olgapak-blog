import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Fixed layout grid: every coordinate below is derived from these constants,
// never eyeballed. In-post slot, so no title band and no subtitle.
const L = {
  centerX: CANVAS.width / 2, // 900

  questionTop: 250,
  questionH: 130,
  questionW: 1200,

  splitY: 500, // where the single stub from the question card fans out

  outcomeTop: 680,
  outcomeH: 260,
  outcomeW: 640,
  outcomeGap: 160,
};

const OUTCOME_TOTAL_W = L.outcomeW * 2 + L.outcomeGap; // 1440
const OUTCOME_LEFT_X = (CANVAS.width - OUTCOME_TOTAL_W) / 2; // 180, inside SAFE_MARGIN (120)
const LEFT_CX = OUTCOME_LEFT_X + L.outcomeW / 2; // 500
const RIGHT_CX = OUTCOME_LEFT_X + L.outcomeW + L.outcomeGap + L.outcomeW / 2; // 1300

const ARROW_HEAD = 12;
const CONNECTOR_GAP = 14; // clear space between an arrow tip and the card it points at
const TIP_Y = L.outcomeTop - CONNECTOR_GAP;

const arrowHeadDown = (x: number, y: number) =>
  `M${x - ARROW_HEAD} ${y - ARROW_HEAD} L${x} ${y} L${x + ARROW_HEAD} ${y - ARROW_HEAD}`;

const Connectors: React.FC = () => {
  const stubTop = L.questionTop + L.questionH;

  const base = {
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  // Yes leg to Keep it is the active path; No leg to Skip it is the alternative.
  const active = { ...base, stroke: palette.accent, strokeWidth: 4 };
  const activeHead = { ...active, strokeDasharray: undefined };
  const alt = { ...base, stroke: palette.muted, strokeWidth: 2.5 };

  return (
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {/* stub out of the question card, down to the split point */}
      <path d={`M${L.centerX} ${stubTop} L${L.centerX} ${L.splitY}`} {...alt} />

      {/* Yes leg, active: solid accent */}
      <path
        d={`M${L.centerX} ${L.splitY} L${LEFT_CX} ${L.splitY} L${LEFT_CX} ${TIP_Y}`}
        {...active}
      />
      <path d={arrowHeadDown(LEFT_CX, TIP_Y)} {...activeHead} />

      {/* No leg, alternative: dashed muted, geometry mirrored about the center line */}
      <path
        d={`M${L.centerX} ${L.splitY} L${RIGHT_CX} ${L.splitY} L${RIGHT_CX} ${TIP_Y}`}
        {...alt}
        strokeDasharray="6 8"
      />
      <path d={arrowHeadDown(RIGHT_CX, TIP_Y)} {...alt} />
    </svg>
  );
};

const cardBase: React.CSSProperties = {
  position: "absolute",
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: cardShadow,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: fonts.sans,
  color: palette.text,
};

// Branch labels sit above their own leg, on the horizontal run between the
// split point and the vertical drop, clear of both strokes.
const branchLabel: React.CSSProperties = {
  position: "absolute",
  fontFamily: fonts.sans,
  fontSize: 26,
  fontWeight: 600,
  textAlign: "center",
  width: 120,
};

export const DownsizingFilterDiagram: React.FC = () => (
  <AbsoluteFill
    style={{ background: palette.background, fontFamily: fonts.sans, color: palette.text }}
  >
    <Connectors />

    {/* question card */}
    <div
      style={{
        ...cardBase,
        left: L.centerX - L.questionW / 2,
        top: L.questionTop,
        width: L.questionW,
        height: L.questionH,
        padding: "26px 28px",
        fontSize: 54,
        fontWeight: 700,
      }}
    >
      Would this survive a downsizing?
    </div>

    {/* branch labels */}
    <div style={{ ...branchLabel, left: LEFT_CX + 26, top: L.splitY - 60, color: palette.accent }}>
      Yes
    </div>
    <div style={{ ...branchLabel, left: RIGHT_CX - 146, top: L.splitY - 60, color: palette.muted }}>
      No
    </div>

    {/* Keep it: the single emphasis / outcome card */}
    <div
      style={{
        ...cardBase,
        left: OUTCOME_LEFT_X,
        top: L.outcomeTop,
        width: L.outcomeW,
        height: L.outcomeH,
        padding: "26px 28px",
        background: "#E7F5F3",
        border: `2px solid ${palette.accent}`,
        gap: 18,
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 700, color: palette.accent }}>Keep it</div>
      <div style={{ fontSize: 28, fontWeight: 500, color: palette.muted, lineHeight: 1.35 }}>
        You would rebuy it from scratch. It earns its space.
      </div>
    </div>

    {/* Skip it: neutral card, no opacity dimming */}
    <div
      style={{
        ...cardBase,
        left: OUTCOME_LEFT_X + L.outcomeW + L.outcomeGap,
        top: L.outcomeTop,
        width: L.outcomeW,
        height: L.outcomeH,
        padding: "26px 28px",
        gap: 18,
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 700 }}>Skip it</div>
      <div style={{ fontSize: 28, fontWeight: 500, color: palette.muted, lineHeight: 1.35 }}>
        Pretty in the photo, unused in the drawer.
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
