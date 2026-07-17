import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const ARROW_W = 120;

// Neutral mapping connector (not a "chosen vs. not chosen" path): solid, muted,
// strokeWidth 2.5, rounded caps, arrowhead in the same muted color. Fixed length.
const Arrow: React.FC = () => (
  <svg
    width={ARROW_W}
    height={24}
    viewBox={`0 0 ${ARROW_W} 24`}
    style={{ flexShrink: 0, alignSelf: "center" }}
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

const Card: React.FC<{ children: React.ReactNode; bold?: boolean }> = ({
  children,
  bold,
}) => (
  <div
    style={{
      flex: 1,
      background: palette.surface,
      border: `1px solid ${palette.border}`,
      borderRadius: 16,
      boxShadow: cardShadow,
      padding: "24px 30px",
      display: "flex",
      alignItems: "center",
      fontFamily: fonts.sans,
      fontSize: 33,
      fontWeight: bold ? 700 : 500,
      color: palette.text,
      lineHeight: 1.28,
    }}
  >
    {children}
  </div>
);

type Row = { situation: string; method: string };

const rows: Row[] = [
  { situation: "Fast, dense lecture", method: "Cornell cues, refine later" },
  { situation: "Structured lecture or textbook", method: "Outline" },
  { situation: "Brainstorming, connected ideas", method: "Mapping" },
  { situation: "Comparing facts across categories", method: "Charting" },
  { situation: "Meeting with action items", method: "Cornell cue column or light chart" },
];

export const MethodDecisionFlow: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Two-column mapping: situation cards -> method cards */}
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        right: SAFE_MARGIN,
        top: SAFE_MARGIN,
        height: 758,
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      {rows.map((row) => (
        <div
          key={row.situation}
          style={{ flex: 1, display: "flex", alignItems: "stretch", gap: 28 }}
        >
          <Card>{row.situation}</Card>
          <Arrow />
          <Card bold>{row.method}</Card>
        </div>
      ))}
    </div>

    {/* Single accent strip: the one emphasis element in the diagram */}
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        right: SAFE_MARGIN,
        bottom: 156,
        height: 128,
        background: "rgba(14,159,142,0.10)",
        border: `2px solid ${palette.accent}`,
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 34,
          fontWeight: 600,
          color: palette.text,
          textAlign: "center",
        }}
      >
        Whatever you pick: capture the signal live, then condense it soon after.
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
