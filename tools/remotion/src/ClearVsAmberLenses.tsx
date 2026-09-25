import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// No theme token encodes an amber lens tint, and the tint IS this diagram's
// content, so the five constants below are local. Everything else is a token.
const LENS_AMBER = "#E3A13C";       // amber lens fill
const LENS_AMBER_EDGE = "#B87A22";  // amber lens rim
const LENS_CLEAR_FILL = "rgba(255,255,255,0.92)";
const SHIFTED = ["#9A7A3E", "#C2632F", "#8A8A32"]; // illustrative amber-shift of the three dots

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const COL_CX = [560, 1240];
const COL_W = 620;
const DIVIDER_X = 900;

const LENS_CY = 460;
const LENS_R = 170;
const DOT_R = 22;
const DOT_DX = [-64, 0, 64];

const PILL_TOP = 170;
const WHEN_TOP = 690;
const PURPOSE_TOP = 770;
const DIVIDER_Y0 = 170;
const DIVIDER_Y1 = 890;
const FOOTNOTE_TOP = 915;
const ACCENT_TOP = 985;

const TRUE_DOTS = [palette.primary, palette.warn, palette.accent];

// Captions carry their own line breaks so no row ends on an orphan word.
const PURPOSE: string[][] = [
  [
    "What you are buying is an",
    "anti-reflective coating and a",
    "lens that does not shift colour.",
  ],
  ["A tint you can obviously see,", "worn only in the hours", "before bed."],
];

const TAGS = ["CLEAR LENS", "AMBER LENS"];
const WHEN = ["DAY", "EVENING"];

const colLeft = (i: number): number => COL_CX[i] - COL_W / 2;

// One thin highlight arc in the upper-left quadrant of a lens.
const highlightPath = (cx: number, cy: number): string => {
  const r = LENS_R - 34;
  const a0 = Math.PI * 1.08;
  const a1 = Math.PI * 1.44;
  return [
    `M ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)}`,
    `A ${r} ${r} 0 0 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)}`,
  ].join(" ");
};

export const ClearVsAmberLenses: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: palette.background }}>
    {/* Section tag pills, both neutral: neither lens is the winner. */}
    {TAGS.map((tag, i) => (
      <div
        key={tag}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: PILL_TOP,
          width: COL_W,
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 999,
            padding: "16px 44px",
            fontFamily: fonts.sans,
            fontSize: 30,
            fontWeight: 700,
            color: palette.text,
            letterSpacing: 2.4,
            whiteSpace: "nowrap",
            boxSizing: "border-box",
            height: 68,
            display: "flex",
            alignItems: "center",
          }}
        >
          {tag}
        </div>
      </div>
    ))}

    {/* Lenses, dots and the vertical divider */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <line
        x1={DIVIDER_X}
        y1={DIVIDER_Y0}
        x2={DIVIDER_X}
        y2={DIVIDER_Y1}
        stroke={palette.border}
        strokeWidth={1}
      />

      {/* Clear lens */}
      <circle
        cx={COL_CX[0]}
        cy={LENS_CY}
        r={LENS_R}
        fill={LENS_CLEAR_FILL}
        stroke={palette.border}
        strokeWidth={6}
      />
      <path
        d={highlightPath(COL_CX[0], LENS_CY)}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={10}
        strokeLinecap="round"
        opacity={0.95}
      />
      {DOT_DX.map((dx, i) => (
        <circle
          key={`clear-${i}`}
          cx={COL_CX[0] + dx}
          cy={LENS_CY + 6}
          r={DOT_R}
          fill={TRUE_DOTS[i]}
        />
      ))}

      {/* Amber lens */}
      <circle
        cx={COL_CX[1]}
        cy={LENS_CY}
        r={LENS_R}
        fill={LENS_AMBER}
        stroke={LENS_AMBER_EDGE}
        strokeWidth={6}
      />
      <path
        d={highlightPath(COL_CX[1], LENS_CY)}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={10}
        strokeLinecap="round"
        opacity={0.28}
      />
      {DOT_DX.map((dx, i) => (
        <circle
          key={`amber-${i}`}
          cx={COL_CX[1] + dx}
          cy={LENS_CY + 6}
          r={DOT_R}
          fill={SHIFTED[i]}
        />
      ))}
    </svg>

    {/* When row */}
    {WHEN.map((w, i) => (
      <div
        key={w}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: WHEN_TOP,
          width: COL_W,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.sans,
          fontSize: 46,
          fontWeight: 700,
          color: palette.text,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        {w}
      </div>
    ))}

    {/* Purpose blocks */}
    {PURPOSE.map((lines, i) => (
      <div
        key={`purpose-${i}`}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: PURPOSE_TOP,
          width: COL_W,
          fontFamily: fonts.sans,
          fontSize: 30,
          color: palette.muted,
          lineHeight: 1.35,
          textAlign: "center",
        }}
      >
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    ))}

    {/* Footnote: the evidence line that keeps this from reading as an endorsement */}
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: FOOTNOTE_TOP,
        width: CANVAS.width - SAFE_MARGIN * 2,
        fontFamily: fonts.sans,
        fontSize: 26,
        color: palette.muted,
        textAlign: "center",
        whiteSpace: "nowrap",
      }}
    >
      A 2023 Cochrane review of 17 trials: these lenses may not reduce eye strain
      with computer use.
    </div>

    {/* The composition's single accent element, belonging to neither column */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: ACCENT_TOP,
        width: CANVAS.width,
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: accentTint,
          color: palette.accent,
          fontFamily: fonts.sans,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 1.8,
          padding: "18px 46px",
          borderRadius: 999,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          height: 68,
          display: "flex",
          alignItems: "center",
        }}
      >
        NO SINGLE PAIR DOES BOTH JOBS
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
