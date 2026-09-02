import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const RULE_X0 = 200;
const RULE_X1 = 1600;
const AXIS_Y = 390;
const TICK_UP = 24;
const TICK_DOWN = 24;

const COL_W = 440;
const TICK_STEP = 540;
const TICK_INSET = 160;

const NAME_TOP = 200;
const NAME_BOTTOM = 330; // every tier name stack is bottom-anchored here
const END_CAP_TOP = 430;
const DEF_TOP = 520;
const DEF_H = 128;
const CARD_TOP = 690;
const CARD_H = 190;
const NAME_BOX_H = 96; // fixed two-line box so all three eyebrows share a baseline
const PILL_TOP = 950;

type Tier = {
  name: string;
  definition: string[];
  example: string[];
};

const TIERS: Tier[] = [
  {
    name: "FREE",
    definition: ["Nothing you do not", "already own"],
    example: ["Walking a new", "route"],
  },
  {
    name: "CHEAP",
    definition: ["One small one-off", "outlay, then nothing"],
    example: ["Crochet"],
  },
  {
    name: "REAL INVESTMENT",
    definition: ["Meaningful money", "up front, or a cost", "that keeps arriving"],
    example: ["Climbing"],
  },
];

// Tick positions are computed off the tier count, never typed as literals.
const xAt = (i: number): number => RULE_X0 + TICK_INSET + i * TICK_STEP;
const colLeft = (i: number): number => xAt(i) - COL_W / 2;

const cardStyle: React.CSSProperties = {
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)",
  padding: "26px 28px",
  boxSizing: "border-box",
};

const endCaptionStyle: React.CSSProperties = {
  position: "absolute",
  top: END_CAP_TOP,
  height: 40,
  display: "flex",
  alignItems: "center",
  fontFamily: fonts.sans,
  fontSize: 26,
  fontWeight: 600,
  letterSpacing: 2.4,
  color: palette.muted,
  whiteSpace: "nowrap",
};

export const CostTierKey: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* The rule and its three ticks. No arrowhead: the scale is a disclosure, not a ranking. */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <line
        x1={RULE_X0}
        y1={AXIS_Y}
        x2={RULE_X1}
        y2={AXIS_Y}
        stroke={palette.muted}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {TIERS.map((t, i) => (
        <line
          key={t.name}
          x1={xAt(i)}
          y1={AXIS_Y - TICK_UP}
          x2={xAt(i)}
          y2={AXIS_Y + TICK_DOWN}
          stroke={palette.text}
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
    </svg>

    {/* Tier names, bottom-anchored so one- and two-line names share a baseline */}
    {TIERS.map((t, i) => (
      <div
        key={`name-${t.name}`}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: NAME_TOP,
          width: COL_W,
          height: NAME_BOTTOM - NAME_TOP,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: 1.6,
            lineHeight: 1.1,
            color: palette.text,
          }}
        >
          {t.name}
        </div>
      </div>
    ))}

    {/* End captions, under the empty ends of the rule */}
    <div style={{ ...endCaptionStyle, left: RULE_X0 }}>COSTS NOTHING</div>
    <div
      style={{
        ...endCaptionStyle,
        left: 0,
        width: RULE_X1,
        justifyContent: "flex-end",
      }}
    >
      COSTS REAL MONEY
    </div>

    {/* Definitions, one block per tick, explicit line breaks */}
    {TIERS.map((t, i) => (
      <div
        key={`def-${t.name}`}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: DEF_TOP,
          width: COL_W,
          height: DEF_H,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontFamily: fonts.sans,
          fontSize: 30,
          lineHeight: 1.3,
          color: palette.muted,
          boxSizing: "border-box",
        }}
      >
        {t.definition.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    ))}

    {/* Example cards. All three identical: no tier is the recommended one. */}
    {TIERS.map((t, i) => (
      <div
        key={`card-${t.name}`}
        style={{
          ...cardStyle,
          position: "absolute",
          left: colLeft(i),
          top: CARD_TOP,
          width: COL_W,
          height: CARD_H,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2.4,
            lineHeight: 1,
            color: palette.muted,
          }}
        >
          EXAMPLE
        </div>
        <div
          style={{
            marginTop: 12,
            height: NAME_BOX_H,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.2,
            color: palette.text,
          }}
        >
          {t.example.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    ))}

    {/* The composition's single accent element, belonging to no tier */}
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
          letterSpacing: 1.8,
          padding: "18px 46px",
          borderRadius: 999,
          whiteSpace: "nowrap",
        }}
      >
        EVERY HOBBY IN THIS POST CARRIES ONE OF THESE THREE TAGS
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
