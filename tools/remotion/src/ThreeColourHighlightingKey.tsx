import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

// Content colours: these represent real highlighter ink, not brand tokens.
const INK = { yellow: "#F6E86B", pink: "#F79AC0", blue: "#8FC7EA" };
const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const CARD_W = 480;
const CARD_GAP = 60;
const CARD_TOP = 190;
const CARD_H = 500;
const CARD_PAD_X = 28;
const CARD_PAD_Y = 26;

const cardX = (i: number): number => SAFE_MARGIN + i * (CARD_W + CARD_GAP);
const INNER_W = CARD_W - CARD_PAD_X * 2;

// Swatch stack, measured from the card's inner top edge.
const BAND_W = 380;
const BAND_H = 72;
// The whole swatch stack is centred in the card's inner box (309 tall in 448).
const BAND_TOP = CARD_TOP + 95; // 285
const BAR_H = 6;
const BAR_1_TOP = BAND_TOP + BAND_H + 24; // 381
const BAR_2_TOP = BAR_1_TOP + BAR_H + 18; // 405
const NAME_TOP = BAR_2_TOP + BAR_H + 34; // 445
const NAME_H = 54;
const JOB_TOP = NAME_TOP + NAME_H + 14; // 513

const DIVIDER_Y = 760;

const RULES_W = 1160;
const RULES_X = (CANVAS.width - RULES_W) / 2; // 320
const RULES_TOP = 820;
const RULES_H = 210;
const RULES_PAD_L = 40;

type Swatch = { key: keyof typeof INK; name: string; job: string[] };

// Copy is quoted verbatim from the post's prose; line breaks live in the data
// so no row ends on an orphan word.
const SWATCHES: Swatch[] = [
  {
    key: "yellow",
    name: "Yellow",
    job: ["Terms and definitions,", "the vocabulary of the chapter"],
  },
  {
    key: "pink",
    name: "Pink or orange",
    job: ["Must reproduce from memory:", "formulas, dates, steps"],
  },
  {
    key: "blue",
    name: "Blue or green",
    job: ["Questions, and anything", "you do not understand yet"],
  },
];

const cardStyle: React.CSSProperties = {
  position: "absolute",
  top: CARD_TOP,
  width: CARD_W,
  height: CARD_H,
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)",
  boxSizing: "border-box",
};

// A swipe, not a rectangle: both ends lean by SLANT px.
const SLANT = 10;
const bandPath = (x: number, y: number): string =>
  [
    `M ${x + SLANT} ${y}`,
    `L ${x + BAND_W} ${y}`,
    `L ${x + BAND_W - SLANT} ${y + BAND_H}`,
    `L ${x} ${y + BAND_H}`,
    "Z",
  ].join(" ");

const barStyle = (top: number, width: number): React.CSSProperties => ({
  position: "absolute",
  top,
  width,
  height: BAR_H,
  borderRadius: BAR_H / 2,
  background: palette.border,
});

export const ThreeColourHighlightingKey: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Cards */}
    {SWATCHES.map((s, i) => (
      <div key={s.name} style={{ ...cardStyle, left: cardX(i) }} />
    ))}

    {/* Ink bands, drawn over the cards in one SVG layer */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {SWATCHES.map((s, i) => {
        const x = cardX(i) + (CARD_W - BAND_W) / 2;
        return (
          <path
            key={s.name}
            d={bandPath(x, BAND_TOP)}
            fill={INK[s.key]}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={1}
            strokeLinejoin="round"
          />
        );
      })}
    </svg>

    {/* Per-card contents */}
    {SWATCHES.map((s, i) => (
      <React.Fragment key={`copy-${s.name}`}>
        <div
          style={{
            ...barStyle(BAR_1_TOP, 300),
            left: cardX(i) + (CARD_W - 300) / 2,
          }}
        />
        <div
          style={{
            ...barStyle(BAR_2_TOP, 210),
            left: cardX(i) + (CARD_W - 210) / 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: cardX(i) + CARD_PAD_X,
            top: NAME_TOP,
            width: INNER_W,
            height: NAME_H,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: fonts.sans,
            fontSize: 42,
            fontWeight: 600,
            color: palette.text,
          }}
        >
          {s.name}
        </div>
        <div
          style={{
            position: "absolute",
            left: cardX(i) + CARD_PAD_X,
            top: JOB_TOP,
            width: INNER_W,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontFamily: fonts.sans,
            fontSize: 30,
            lineHeight: 1.35,
            color: palette.muted,
          }}
        >
          {s.job.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </React.Fragment>
    ))}

    {/* Divider */}
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: DIVIDER_Y,
        width: CANVAS.width - SAFE_MARGIN * 2,
        height: 1,
        background: palette.border,
      }}
    />

    {/* The composition's one accent element */}
    <div
      style={{
        position: "absolute",
        left: RULES_X,
        top: RULES_TOP,
        width: RULES_W,
        height: RULES_H,
        background: accentTint,
        border: `2px solid ${palette.accent}`,
        borderRadius: 16,
        boxSizing: "border-box",
        paddingLeft: RULES_PAD_L,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: palette.accent,
          marginBottom: 22,
        }}
      >
        Two rules that keep it honest
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 38,
          lineHeight: "46px",
          color: palette.text,
        }}
      >
        One line per paragraph, never more.
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 38,
          lineHeight: "46px",
          color: palette.text,
        }}
      >
        Second pass only: read first, sort second.
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
