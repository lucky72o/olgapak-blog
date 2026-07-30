import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";
const warnTint = "rgba(225,29,72,0.10)";
const mutedTintA = "rgba(107,114,128,0.10)";
const mutedTintB = "rgba(107,114,128,0.17)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const H_START = 9; // 9a
const H_END = 19; // 7p
const COL_TOP = 300;
const COL_BOTTOM = 1040;
const COL_W = 420;
const COL_H = COL_BOTTOM - COL_TOP;

const LEFT_CENTER = 470;
const RIGHT_CENTER = 1330;
const LEFT_X = LEFT_CENTER - COL_W / 2; // 260
const RIGHT_X = RIGHT_CENTER - COL_W / 2; // 1120

const DIVIDER_X = 900;
const DIVIDER_INSET = 60;

const yAt = (hour: number): number =>
  COL_TOP + ((hour - H_START) / (H_END - H_START)) * COL_H;
// y relative to a column's inner top edge
const yIn = (hour: number): number => yAt(hour) - COL_TOP;

const TICKS: { hour: number; label: string }[] = [
  { hour: 9, label: "9a" },
  { hour: 11, label: "11a" },
  { hour: 13, label: "1p" },
  { hour: 15, label: "3p" },
  { hour: 17, label: "5p" },
  { hour: 19, label: "7p" },
];

// ---- Left column: packed wall to wall, zero gaps ----
const PACKED: { label: string; start: number; end: number }[] = [
  { label: "Essay", start: 9, end: 10 },
  { label: "Email", start: 10, end: 11 },
  { label: "Reading", start: 11, end: 12 },
  { label: "Errands", start: 12, end: 13 },
  { label: "Lecture", start: 13, end: 14 },
  { label: "Admin", start: 14, end: 15 },
  { label: "Draft section 2", start: 15, end: 17 },
  { label: "Gym", start: 17, end: 19 },
];

// ---- Right column: 60 / 20 / 20 ----
const SEG_INSET = 8; // half of the visible gap between segments
const SEG_PADX = 16; // horizontal inset of a segment inside the column
const PLANNED_GAP = 14;

const SEG1 = { top: 0, height: COL_H * 0.6 }; // 60%
const SEG2 = { top: COL_H * 0.6, height: COL_H * 0.2 }; // 20%
const SEG3 = { top: COL_H * 0.8, height: COL_H * 0.2 }; // 20%

const PLANNED = ["Essay", "Lecture", "Draft section 2"];
const PLANNED_H = (SEG1.height - 2 * SEG_INSET - 2 * PLANNED_GAP) / 3;

const FIGURES = [
  { label: "60%", center: SEG1.top + SEG1.height / 2 },
  { label: "20%", center: SEG2.top + SEG2.height / 2 },
  { label: "20%", center: SEG3.top + SEG3.height / 2 },
];

const columnShell: React.CSSProperties = {
  position: "absolute",
  top: COL_TOP,
  width: COL_W,
  height: COL_H,
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: cardShadow,
  boxSizing: "border-box",
  overflow: "hidden",
};

const pillBase: React.CSSProperties = {
  position: "absolute",
  top: 196,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 64,
  borderRadius: 32,
  fontFamily: fonts.sans,
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: 1.4,
  boxSizing: "border-box",
  padding: "0 36px",
};

export const PackedVsBufferedDay: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Section tag pills */}
    <div
      style={{
        ...pillBase,
        left: LEFT_CENTER - 230,
        width: 460,
        background: warnTint,
        color: palette.warn,
      }}
    >
      PACKED, NO BUFFER
    </div>
    <div
      style={{
        ...pillBase,
        left: RIGHT_CENTER - 230,
        width: 460,
        background: accentTint,
        color: palette.accent,
      }}
    >
      PLANNED 60 / 20 / 20
    </div>

    {/* Vertical divider between the two halves */}
    <div
      style={{
        position: "absolute",
        left: DIVIDER_X,
        top: COL_TOP + DIVIDER_INSET,
        width: 1,
        height: COL_H - 2 * DIVIDER_INSET,
        background: palette.border,
      }}
    />

    {/* Hour ticks, left column (outer side) */}
    {TICKS.map((t) => (
      <div
        key={`lt${t.label}`}
        style={{
          position: "absolute",
          left: SAFE_MARGIN,
          top: yAt(t.hour) - 15,
          width: LEFT_X - SAFE_MARGIN - 18,
          textAlign: "right",
          fontFamily: fonts.mono,
          fontSize: 26,
          color: palette.muted,
        }}
      >
        {t.label}
      </div>
    ))}

    {/* Hour ticks, right column (inner side, so the percentage figures own the outer side) */}
    {TICKS.map((t) => (
      <div
        key={`rt${t.label}`}
        style={{
          position: "absolute",
          left: DIVIDER_X + 20,
          top: yAt(t.hour) - 15,
          width: RIGHT_X - DIVIDER_X - 38,
          textAlign: "right",
          fontFamily: fonts.mono,
          fontSize: 26,
          color: palette.muted,
        }}
      >
        {t.label}
      </div>
    ))}

    {/* Left day column: packed, no white anywhere */}
    <div style={{ ...columnShell, left: LEFT_X }}>
      {PACKED.map((b, i) => (
        <div
          key={b.label}
          style={{
            position: "absolute",
            left: 0,
            top: yIn(b.start),
            width: COL_W - 2,
            height: yIn(b.end) - yIn(b.start),
            background: i % 2 === 0 ? mutedTintA : mutedTintB,
            borderTop: i === 0 ? "none" : `1px solid ${palette.border}`,
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0 22px",
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 25,
              fontWeight: 600,
              color: palette.text,
            }}
          >
            {b.label}
          </div>
        </div>
      ))}
    </div>

    {/* Right day column: 60 planned / 20 unexpected / 20 open */}
    <div style={{ ...columnShell, left: RIGHT_X }}>
      {/* 60%: three planned blocks (the one accent role in this diagram) */}
      {PLANNED.map((label, i) => (
        <div
          key={label}
          style={{
            position: "absolute",
            left: SEG_PADX,
            top: SEG1.top + SEG_INSET + i * (PLANNED_H + PLANNED_GAP),
            width: COL_W - 2 - 2 * SEG_PADX,
            height: PLANNED_H,
            background: accentTint,
            border: `2px solid ${palette.accent}`,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 25,
              fontWeight: 600,
              color: palette.text,
            }}
          >
            {label}
          </div>
        </div>
      ))}

      {/* 20%: reserved for the unexpected */}
      <div
        style={{
          position: "absolute",
          left: SEG_PADX,
          top: SEG2.top + SEG_INSET,
          width: COL_W - 2 - 2 * SEG_PADX,
          height: SEG2.height - 2 * SEG_INSET,
          border: `2px dashed ${palette.muted}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 25,
            fontWeight: 600,
            color: palette.muted,
          }}
        >
          unexpected
        </div>
      </div>

      {/* 20%: left empty on purpose */}
      <div
        style={{
          position: "absolute",
          left: SEG_PADX,
          top: SEG3.top + SEG_INSET,
          width: COL_W - 2 - 2 * SEG_PADX,
          height: SEG3.height - 2 * SEG_INSET,
          border: `2px dashed ${palette.border}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 25,
            fontWeight: 600,
            color: palette.muted,
          }}
        >
          open
        </div>
      </div>
    </div>

    {/* Percentage figures, outer side of the right column */}
    {FIGURES.map((f, i) => (
      <div
        key={`${f.label}-${i}`}
        style={{
          position: "absolute",
          left: RIGHT_X + COL_W + 24,
          top: COL_TOP + f.center - 18,
          width: CANVAS.width - SAFE_MARGIN - (RIGHT_X + COL_W + 24),
          fontFamily: fonts.mono,
          fontSize: 30,
          color: palette.text,
        }}
      >
        {f.label}
      </div>
    ))}

    <BlogWatermark />
  </AbsoluteFill>
);
