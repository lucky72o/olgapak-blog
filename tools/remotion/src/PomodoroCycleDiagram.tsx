import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.08)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const CARD_W = 520;
const CARD_H = 230;
const CARD_GAP = 200; // fixed gap, fixed-length connector between the pair
const PAIR_W = CARD_W * 2 + CARD_GAP; // 1240
const PAIR_LEFT = (CANVAS.width - PAIR_W) / 2; // 280
const PAIR_RIGHT = PAIR_LEFT + PAIR_W; // 1520
const CARD_TOP = 320;
const CARD_BOTTOM = CARD_TOP + CARD_H; // 550
const CARD_MID_Y = CARD_TOP + CARD_H / 2; // 435

const LEFT_X = PAIR_LEFT; // 280
const RIGHT_X = PAIR_LEFT + CARD_W + CARD_GAP; // 1000
const LEFT_CX = LEFT_X + CARD_W / 2; // 540
const RIGHT_CX = RIGHT_X + CARD_W / 2; // 1260
const CANVAS_CX = CANVAS.width / 2; // 900

// Bracket above the pair
const BRACKET_Y = 252;
const BRACKET_TICK = 16;

// Return loop (right card -> back under the pair -> left card)
const LOOP_Y = 700;
const CORNER = 40;

// Branch out to the long break
const BRANCH_X = 1640; // inside SAFE_MARGIN (1800 - 120 = 1680)
const BRANCH_Y = 800;

// Long-break card
const LB_W = 640;
const LB_H = 200;
const LB_LEFT = CANVAS_CX - LB_W / 2; // 580
const LB_TOP = 860;

const ARROW_INSET = 8; // stop the stroke short so the marker tip lands on the edge

const neutralCard: React.CSSProperties = {
  position: "absolute",
  width: CARD_W,
  height: CARD_H,
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: cardShadow,
  padding: "26px 28px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
};

const eyebrow: React.CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 26,
  fontWeight: 700,
  letterSpacing: 1.6,
  color: palette.muted,
};

const value: React.CSSProperties = {
  fontFamily: fonts.mono,
  fontSize: 76,
  fontWeight: 700,
  color: palette.text,
  lineHeight: 1.1,
};

const subLine: React.CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 26,
  color: palette.muted,
};

export const PomodoroCycleDiagram: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* ---- Connectors (one SVG plane under the cards' labels, above the ground) ---- */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <defs>
        <marker
          id="seqArrow"
          markerWidth={9}
          markerHeight={8}
          refX={8}
          refY={4}
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill={palette.muted} />
        </marker>
      </defs>

      {/* Focus -> Break, fixed length, sequential */}
      <path
        d={`M ${LEFT_X + CARD_W + 32} ${CARD_MID_Y} L ${RIGHT_X - 32 - ARROW_INSET} ${CARD_MID_Y}`}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
        markerEnd="url(#seqArrow)"
      />

      {/* Return loop: right card bottom -> under the pair -> left card bottom */}
      <path
        d={[
          `M ${RIGHT_CX} ${CARD_BOTTOM}`,
          `L ${RIGHT_CX} ${LOOP_Y - CORNER}`,
          `Q ${RIGHT_CX} ${LOOP_Y} ${RIGHT_CX - CORNER} ${LOOP_Y}`,
          `L ${LEFT_CX + CORNER} ${LOOP_Y}`,
          `Q ${LEFT_CX} ${LOOP_Y} ${LEFT_CX} ${LOOP_Y - CORNER}`,
          `L ${LEFT_CX} ${CARD_BOTTOM + ARROW_INSET}`,
        ].join(" ")}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
        markerEnd="url(#seqArrow)"
      />

      {/* Branch: right card right edge -> down and back to centre -> long-break card */}
      <path
        d={[
          `M ${PAIR_RIGHT} ${CARD_MID_Y}`,
          `L ${BRANCH_X - CORNER} ${CARD_MID_Y}`,
          `Q ${BRANCH_X} ${CARD_MID_Y} ${BRANCH_X} ${CARD_MID_Y + CORNER}`,
          `L ${BRANCH_X} ${BRANCH_Y - CORNER}`,
          `Q ${BRANCH_X} ${BRANCH_Y} ${BRANCH_X - CORNER} ${BRANCH_Y}`,
          `L ${CANVAS_CX + CORNER} ${BRANCH_Y}`,
          `Q ${CANVAS_CX} ${BRANCH_Y} ${CANVAS_CX} ${BRANCH_Y + CORNER}`,
          `L ${CANVAS_CX} ${LB_TOP - ARROW_INSET}`,
        ].join(" ")}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
        markerEnd="url(#seqArrow)"
      />

      {/* Bracket over the pair */}
      <path
        d={[
          `M ${PAIR_LEFT} ${BRACKET_Y}`,
          `L ${PAIR_LEFT} ${BRACKET_Y + BRACKET_TICK}`,
          `M ${PAIR_LEFT} ${BRACKET_Y}`,
          `L ${PAIR_RIGHT} ${BRACKET_Y}`,
          `L ${PAIR_RIGHT} ${BRACKET_Y + BRACKET_TICK}`,
        ].join(" ")}
        fill="none"
        stroke={palette.border}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>

    {/* ---- Bracket caption ---- */}
    <div
      style={{
        position: "absolute",
        left: PAIR_LEFT,
        top: BRACKET_Y - 58,
        width: PAIR_W,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 30,
        fontWeight: 600,
        color: palette.muted,
      }}
    >
      1 pomodoro
    </div>

    {/* ---- Focus card ---- */}
    <div style={{ ...neutralCard, left: LEFT_X, top: CARD_TOP }}>
      <div style={eyebrow}>FOCUS</div>
      <div style={value}>25 min</div>
      <div style={subLine}>one task, no interruptions</div>
    </div>

    {/* ---- Break card ---- */}
    <div style={{ ...neutralCard, left: RIGHT_X, top: CARD_TOP }}>
      <div style={eyebrow}>BREAK</div>
      <div style={value}>5 min</div>
      <div style={subLine}>away from the screen</div>
    </div>

    {/* ---- Pill sitting on the return loop ---- */}
    <div
      style={{
        position: "absolute",
        left: LEFT_CX,
        top: LOOP_Y - 26,
        width: RIGHT_CX - LEFT_CX,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: palette.background,
          padding: "0 20px",
          fontFamily: fonts.sans,
          fontSize: 30,
          fontWeight: 700,
          color: palette.text,
          lineHeight: "52px",
        }}
      >
        repeat 4 times
      </div>
    </div>

    {/* ---- Branch label, clear of the branch stroke ---- */}
    <div
      style={{
        position: "absolute",
        left: BRANCH_X - 280,
        top: CARD_BOTTOM + 40,
        width: 240,
        textAlign: "right",
        fontFamily: fonts.sans,
        fontSize: 26,
        color: palette.muted,
      }}
    >
      after the fourth
    </div>

    {/* ---- Long-break card, the one emphasis card ---- */}
    <div
      style={{
        position: "absolute",
        left: LB_LEFT,
        top: LB_TOP,
        width: LB_W,
        height: LB_H,
        background: accentTint,
        border: `2px solid ${palette.accent}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "26px 28px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <div style={{ ...eyebrow, color: palette.accent }}>LONG BREAK</div>
      <div style={{ ...value, fontSize: 68 }}>15-30 min</div>
      <div style={subLine}>properly away from the desk</div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);

// Referenced so the safe-margin token stays an explicit design constraint here:
// content spans x 280..1640 and y 194..1060, inside SAFE_MARGIN (120 .. 1680).
export const LAYOUT_BOUNDS = { left: PAIR_LEFT, right: BRANCH_X, margin: SAFE_MARGIN };
