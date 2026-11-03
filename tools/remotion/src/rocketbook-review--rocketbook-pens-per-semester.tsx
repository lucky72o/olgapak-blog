import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const L = {
  LABEL_X: SAFE_MARGIN, // 120
  LABEL_W: 340,
  PLOT_LEFT: 500,
  PLOT_RIGHT: 1480,
  TOTAL_X: 1508,
  TOTAL_W: 180,
  TAG_Y: SAFE_MARGIN + 20, // 140
  TAG_H: 56,
  ROW_A_Y: 330,
  ROW_B_Y: 580,
  BAR_H: 120,
  SEG_INSET: 4,
  SEG_RADIUS: 12,
  AXIS_Y: 760,
  TICK_LEN: 12,
  TICK_LABEL_Y: 788,
  AXIS_TITLE_Y: 850,
  LEGEND_Y: 930,
  FOOTNOTE_Y: 1010,
  PEN_SIZE: 48,
  PEN_PAD: 16,
};

const WEEKS = 15;
const WEEK_W = (L.PLOT_RIGHT - L.PLOT_LEFT) / WEEKS;
const xAt = (week: number): number => L.PLOT_LEFT + week * WEEK_W;

type Seg = { from: number; to: number; partial?: boolean };
const ROWS: { label: string; total: string; y: number; segs: Seg[] }[] = [
  {
    label: "3 weeks per pen",
    total: "5 pens",
    y: L.ROW_A_Y,
    segs: [
      { from: 0, to: 3 },
      { from: 3, to: 6 },
      { from: 6, to: 9 },
      { from: 9, to: 12 },
      { from: 12, to: 15 },
    ],
  },
  {
    label: "4 weeks per pen",
    total: "4 pens",
    y: L.ROW_B_Y,
    segs: [
      { from: 0, to: 4 },
      { from: 4, to: 8 },
      { from: 8, to: 12 },
      { from: 12, to: 15, partial: true },
    ],
  },
];
const TICKS = [0, 3, 6, 9, 12, 15];

const PenGlyph: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <g
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(45 18 18)"
    >
      {/* barrel */}
      <rect x={14} y={3} width={8} height={22} rx={2} />
      {/* clip */}
      <line x1={22} y1={6} x2={24.5} y2={6} />
      <line x1={24.5} y1={6} x2={24.5} y2={15} />
      {/* conical tip */}
      <path d="M14 25 L18 33 L22 25" />
    </g>
  </svg>
);

export const C_rocketbook_review__rocketbook_pens_per_semester: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background, fontFamily: fonts.sans, color: palette.text }}>
    {/* Section tag */}
    <div
      style={{
        position: "absolute",
        top: L.TAG_Y,
        left: 0,
        width: CANVAS.width,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: L.TAG_H,
          padding: "0 32px",
          borderRadius: L.TAG_H / 2,
          background: accentTint,
          color: palette.accent,
          fontSize: 28,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
        }}
      >
        15-week semester, heavy note-taking
      </div>
    </div>

    {/* Dashed gridlines from each tick up to above row A */}
    {TICKS.map((t) => (
      <div
        key={`grid-${t}`}
        style={{
          position: "absolute",
          left: xAt(t) - 1,
          top: L.ROW_A_Y - 20,
          height: L.AXIS_Y - (L.ROW_A_Y - 20),
          width: 0,
          borderLeft: `2px dashed ${palette.border}`,
        }}
      />
    ))}

    {/* Rows */}
    {ROWS.map((row) => (
      <React.Fragment key={row.label}>
        <div
          style={{
            position: "absolute",
            left: L.LABEL_X,
            top: row.y,
            width: L.LABEL_W,
            height: L.BAR_H,
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 600,
            color: palette.text,
          }}
        >
          {row.label}
        </div>

        {row.segs.map((s) => (
          <div
            key={`${row.label}-${s.from}`}
            style={{
              position: "absolute",
              left: xAt(s.from) + L.SEG_INSET,
              top: row.y,
              width: xAt(s.to) - xAt(s.from) - 2 * L.SEG_INSET,
              height: L.BAR_H,
              borderRadius: L.SEG_RADIUS,
              boxSizing: "border-box",
              background: s.partial ? palette.surface : palette.accent,
              border: s.partial ? `2px dashed ${palette.accent}` : "none",
              display: "flex",
              alignItems: "center",
              paddingLeft: L.PEN_PAD,
            }}
          >
            <PenGlyph color={s.partial ? palette.muted : palette.surface} size={L.PEN_SIZE} />
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            left: L.TOTAL_X,
            top: row.y,
            width: L.TOTAL_W,
            height: L.BAR_H,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            whiteSpace: "nowrap",
            fontFamily: fonts.mono,
            fontSize: 48,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          {row.total}
        </div>
      </React.Fragment>
    ))}

    {/* Week axis */}
    <div
      style={{
        position: "absolute",
        left: L.PLOT_LEFT,
        top: L.AXIS_Y - 1,
        width: L.PLOT_RIGHT - L.PLOT_LEFT,
        height: 2,
        background: palette.border,
      }}
    />
    {TICKS.map((t) => (
      <React.Fragment key={`tick-${t}`}>
        <div
          style={{
            position: "absolute",
            left: xAt(t) - 1,
            top: L.AXIS_Y,
            width: 2,
            height: L.TICK_LEN,
            background: palette.muted,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: xAt(t) - 40,
            top: L.TICK_LABEL_Y,
            width: 80,
            textAlign: "center",
            fontFamily: fonts.mono,
            fontSize: 26,
            color: palette.muted,
          }}
        >
          {t}
        </div>
      </React.Fragment>
    ))}
    <div
      style={{
        position: "absolute",
        left: L.PLOT_LEFT,
        top: L.AXIS_TITLE_Y,
        width: L.PLOT_RIGHT - L.PLOT_LEFT,
        textAlign: "center",
        fontSize: 26,
        fontWeight: 500,
        color: palette.muted,
      }}
    >
      Weeks into the semester
    </div>

    {/* Legend */}
    <div
      style={{
        position: "absolute",
        top: L.LEGEND_Y,
        left: 0,
        width: CANVAS.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 64,
        fontSize: 26,
        color: palette.muted,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 48, height: 28, borderRadius: 6, background: palette.accent }} />
        one pen, used up
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 28,
            borderRadius: 6,
            boxSizing: "border-box",
            background: palette.surface,
            border: `2px dashed ${palette.accent}`,
          }}
        />
        pen still in use at semester end
      </div>
    </div>

    {/* Footnote */}
    <div
      style={{
        position: "absolute",
        top: L.FOOTNOTE_Y,
        left: (CANVAS.width - 1400) / 2,
        width: 1400,
        textAlign: "center",
        fontSize: 26,
        fontStyle: "italic",
        color: palette.muted,
      }}
    >
      Estimate based on owner-reported 2021 burn rate
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
