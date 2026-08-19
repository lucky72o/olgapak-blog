import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Fixed layout grid: every coordinate below is derived from these constants,
// never eyeballed. In-post slot, so no title band and no subtitle.
const L = {
  centerX: CANVAS.width / 2, // 900

  questionTop: 230,
  questionH: 110,
  questionW: 900,

  trunkBottom: 410, // where the single stub from the question card splits

  condTop: 510,
  condH: 200,
  condW: 700,
  condGap: 120,

  outcomeTop: 800,
  outcomeH: 130,
};

const COND_TOTAL_W = L.condW * 2 + L.condGap; // 1520
const COND_LEFT_X = (CANVAS.width - COND_TOTAL_W) / 2; // 140, inside SAFE_MARGIN (120)
const LEFT_CX = COND_LEFT_X + L.condW / 2; // 490
const RIGHT_CX = COND_LEFT_X + L.condW + L.condGap + L.condW / 2; // 1310

const ARROW_HEAD = 11;
const CONNECTOR_GAP = 12; // clear space between an arrow tip and the card it points at

// Neutral mapping connector: muted, solid, 2.5, rounded caps. Both branches are
// mirror images of each other, so neither reads as the recommended path.
const arrowHeadDown = (x: number, y: number) =>
  `M${x - ARROW_HEAD} ${y - ARROW_HEAD} L${x} ${y} L${x + ARROW_HEAD} ${y - ARROW_HEAD}`;

const Connectors: React.FC = () => {
  const splitY = L.trunkBottom;
  const branchTipY = L.condTop - CONNECTOR_GAP;
  const vertTop = L.condTop + L.condH;
  const vertTipY = L.outcomeTop - CONNECTOR_GAP;

  const stroke = {
    fill: "none",
    stroke: palette.muted,
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {/* stub out of the question card, down to the split point */}
      <path
        d={`M${L.centerX} ${L.questionTop + L.questionH} L${L.centerX} ${splitY}`}
        {...stroke}
      />

      {/* two diverging branches, identical mirrored geometry */}
      {[LEFT_CX, RIGHT_CX].map((cx) => (
        <g key={`branch-${cx}`}>
          <path
            d={`M${L.centerX} ${splitY} L${cx} ${splitY} L${cx} ${branchTipY}`}
            {...stroke}
          />
          <path d={arrowHeadDown(cx, branchTipY)} {...stroke} />
        </g>
      ))}

      {/* two vertical connectors, identical fixed length, one per branch */}
      {[LEFT_CX, RIGHT_CX].map((cx) => (
        <g key={`vert-${cx}`}>
          <path d={`M${cx} ${vertTop} L${cx} ${vertTipY}`} {...stroke} />
          <path d={arrowHeadDown(cx, vertTipY)} {...stroke} />
        </g>
      ))}
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
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: fonts.sans,
  color: palette.text,
};

export const HandwriteOrTypeDecision: React.FC = () => (
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
        padding: "0 40px",
        fontSize: 44,
        fontWeight: 700,
      }}
    >
      What is in front of you?
    </div>

    {/* condition cards, wrapped multi-line, identical neutral recipe */}
    {[
      { x: COND_LEFT_X, text: "Conceptual, diagram-heavy, or arriving faster than you can think" },
      {
        x: COND_LEFT_X + L.condW + L.condGap,
        text: "Reference material you will search later, or accuracy matters more than processing",
      },
    ].map((c) => (
      <div
        key={c.text}
        style={{
          ...cardBase,
          left: c.x,
          top: L.condTop,
          width: L.condW,
          height: L.condH,
          padding: "26px 34px",
          fontSize: 32,
          fontWeight: 500,
          lineHeight: 1.3,
        }}
      >
        {c.text}
      </div>
    ))}

    {/* outcome cards: identical size, border, weight and recipe on both sides.
        The word colour is route coding only, not a recommendation. */}
    {[
      { x: COND_LEFT_X, word: "HANDWRITE", color: palette.accent },
      { x: COND_LEFT_X + L.condW + L.condGap, word: "TYPE", color: palette.primary },
    ].map((o) => (
      <div
        key={o.word}
        style={{
          ...cardBase,
          left: o.x,
          top: L.outcomeTop,
          width: L.condW,
          height: L.outcomeH,
          padding: "0 30px",
          fontSize: 58,
          fontWeight: 700,
          letterSpacing: 4,
          color: o.color,
        }}
      >
        {o.word}
      </div>
    ))}

    <BlogWatermark />
  </AbsoluteFill>
);
