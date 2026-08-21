import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const LEFT_X = 200;
const RIGHT_X = 1600;
const AXIS_Y = 430;
const TICK_UP = 24;
const TICK_DOWN = 24;
const END_NUDGE = 50; // pulls the two end markers inward so their labels stay inside SAFE_MARGIN

const FAMILY_BOX_W = 260;
const FAMILY_BOX_H = 150;
const FAMILY_GAP = 22; // clear space between a family label block and its tick

const PILL_TOP = 560;
const DIVIDER_Y = 690;

// Band B: three tip-width rows off one baseline helper
const ROW_Y0 = 810;
const ROW_STEP = 100;
const STROKE_X0 = 460;
const STROKE_LEN = 840;
const CAPTION_X = STROKE_X0 + STROKE_LEN + 40; // 1340, ends inside SAFE_MARGIN
const CAPTION_W = CANVAS.width - SAFE_MARGIN - CAPTION_X; // 340

// Thickness is computed from the real tip size, never eyeballed.
// The scale factor is illustrative; only the RATIO between the three is a claim.
const PX_PER_MM = 32;
const wAt = (mm: number): number => mm * PX_PER_MM; // 12.16 / 16 / 22.4

const FAMILIES: { name: string; trait: string }[] = [
  { name: "Rollerball", trait: "Wettest line, slowest to dry" },
  { name: "Gel", trait: "Darker and glossier, sits wet" },
  { name: "Fineliner", trait: "Firm felt tip, drawing tool first" },
  { name: "Ballpoint", trait: "Dries almost on contact" },
];

const rawXAt = (i: number): number =>
  LEFT_X + i * ((RIGHT_X - LEFT_X) / (FAMILIES.length - 1));

const xAt = (i: number): number => {
  if (i === 0) return rawXAt(i) + END_NUDGE;
  if (i === FAMILIES.length - 1) return rawXAt(i) - END_NUDGE;
  return rawXAt(i);
};

// Captions carry their own line breaks so no row ends on an orphan word.
const WIDTHS: { label: string; mm: number; caption: string[] }[] = [
  { label: "0.38 mm", mm: 0.38, caption: ["Hairline, needs", "smooth paper"] },
  { label: "0.5 mm", mm: 0.5, caption: ["The middle ground"] },
  { label: "0.7 mm", mm: 0.7, caption: ["Broad and dark", "when you rush"] },
];

const rowY = (i: number): number => ROW_Y0 + i * ROW_STEP;

// One fixed hand-written tail, identical in every row; only strokeWidth changes.
const strokePath = (y: number): string => {
  const x = STROKE_X0;
  return [
    `M ${x} ${y}`,
    `L ${x + 640} ${y}`,
    `C ${x + 690} ${y - 22} ${x + 730} ${y + 22} ${x + 780} ${y}`,
    `C ${x + 805} ${y - 14} ${x + 825} ${y - 20} ${x + STROKE_LEN} ${y - 26}`,
  ].join(" ");
};

const endLabelStyle: React.CSSProperties = {
  position: "absolute",
  top: AXIS_Y + TICK_DOWN + 26,
  fontFamily: fonts.sans,
  fontSize: 30,
  fontWeight: 600,
  letterSpacing: 2.4,
  color: palette.muted,
  whiteSpace: "nowrap",
};

export const InkFamiliesTradeoff: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* ---------- Band A: the trade-off axis ---------- */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <line
        x1={LEFT_X}
        y1={AXIS_Y}
        x2={RIGHT_X}
        y2={AXIS_Y}
        stroke={palette.muted}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {FAMILIES.map((f, i) => (
        <line
          key={f.name}
          x1={xAt(i)}
          y1={AXIS_Y - TICK_UP}
          x2={xAt(i)}
          y2={AXIS_Y + TICK_DOWN}
          stroke={palette.text}
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}

      {/* ---------- Band B: true relative tip widths ---------- */}
      {WIDTHS.map((w, i) => (
        <path
          key={w.label}
          d={strokePath(rowY(i))}
          fill="none"
          stroke={palette.text}
          strokeWidth={wAt(w.mm)}
          strokeLinecap="round"
        />
      ))}
    </svg>

    {/* Family label stacks, bottom-anchored just above their ticks */}
    {FAMILIES.map((f, i) => (
      <div
        key={f.name}
        style={{
          position: "absolute",
          left: xAt(i) - FAMILY_BOX_W / 2,
          top: AXIS_Y - TICK_UP - FAMILY_GAP - FAMILY_BOX_H,
          width: FAMILY_BOX_W,
          height: FAMILY_BOX_H,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.15,
            color: palette.text,
          }}
        >
          {f.name}
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: fonts.sans,
            fontSize: 27,
            lineHeight: 1.3,
            color: palette.muted,
          }}
        >
          {f.trait}
        </div>
      </div>
    ))}

    {/* Axis end labels, below the rule so they never crowd the family stacks */}
    <div style={{ ...endLabelStyle, left: LEFT_X }}>SMOOTH AND WET</div>
    <div style={{ ...endLabelStyle, left: 0, width: RIGHT_X, textAlign: "right" }}>
      FAST-DRYING AND FIRM
    </div>

    {/* The composition's one accent element, on no family in particular */}
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
        NO WINNER, ONLY A POSITION ON THIS LINE
      </div>
    </div>

    {/* Divider between the two bands */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: DIVIDER_Y,
        width: RIGHT_X - LEFT_X,
        height: 1,
        background: palette.border,
      }}
    />

    {/* Width labels + captions for Band B */}
    {WIDTHS.map((w, i) => (
      <React.Fragment key={w.label}>
        <div
          style={{
            position: "absolute",
            left: LEFT_X,
            top: rowY(i) - 40,
            width: 200,
            height: 80,
            display: "flex",
            alignItems: "center",
            fontFamily: fonts.mono,
            fontSize: 34,
            fontWeight: 600,
            color: palette.text,
          }}
        >
          {w.label}
        </div>
        <div
          style={{
            position: "absolute",
            left: CAPTION_X,
            top: rowY(i) - 45,
            width: CAPTION_W,
            height: 90,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: fonts.sans,
            fontSize: 27,
            lineHeight: 1.3,
            color: palette.muted,
          }}
        >
          {w.caption.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </React.Fragment>
    ))}

    <BlogWatermark />
  </AbsoluteFill>
);
