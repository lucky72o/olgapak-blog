import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";
const lineLight = "#EEF0F2"; // one step lighter than palette.border

// ---- Grid box (fixed coordinate frame) ----
const GX0 = 235; // grid left edge (x of Monday)
const GX1 = 1680; // grid right edge (right safe margin)
const NDAYS = 5;
const COLW = (GX1 - GX0) / NDAYS; // 289
const H_START = 9; // 9a
const H_END = 18; // 6p
const GY0 = 250; // y of hour 9
const GY1 = 935; // y of hour 18

const xAt = (day: number): number => GX0 + day * COLW;
const yAt = (hour: number): number =>
  GY0 + ((hour - H_START) / (H_END - H_START)) * (GY1 - GY0);

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const TICKS: { hour: number; label: string }[] = [
  { hour: 9, label: "9a" },
  { hour: 11, label: "11a" },
  { hour: 13, label: "1p" },
  { hour: 15, label: "3p" },
  { hour: 17, label: "5p" },
];

type Rock = { label: string; caption: string; day: number; start: number; end: number };
const ROCKS: Rock[] = [
  { label: "Team standup", caption: "Mon 9 to 10a", day: 0, start: 9, end: 10 },
  { label: "Deep work: report", caption: "Tue 9 to 11a", day: 1, start: 9, end: 11 },
  { label: "Client call", caption: "Wed 1 to 2p", day: 2, start: 13, end: 14 },
  { label: "Gym", caption: "Thu 5 to 6p", day: 3, start: 17, end: 18 },
];

const SLACK = { day: 4, start: 11, end: 14, label: "slack, on purpose" };

const BLOCK_PADX = 10;
const BLOCK_PADY = 6;

export const WeekGridTimeboxing: React.FC = () => {
  const horizontalHours: number[] = [];
  for (let h = H_START; h <= H_END; h++) horizontalHours.push(h);
  const tickHours = new Set(TICKS.map((t) => t.hour));

  return (
    <AbsoluteFill style={{ background: palette.background }}>
      {/* Day headers */}
      {DAYS.map((d, i) => (
        <div
          key={d}
          style={{
            position: "absolute",
            left: xAt(i),
            top: 178,
            width: COLW,
            textAlign: "center",
            fontFamily: fonts.sans,
            fontSize: 34,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          {d}
        </div>
      ))}

      {/* Time-axis tick labels */}
      {TICKS.map((t) => (
        <div
          key={t.label}
          style={{
            position: "absolute",
            left: SAFE_MARGIN,
            top: yAt(t.hour) - 16,
            width: GX0 - SAFE_MARGIN - 16,
            textAlign: "right",
            fontFamily: fonts.mono,
            fontSize: 26,
            color: palette.muted,
          }}
        >
          {t.label}
        </div>
      ))}

      {/* Horizontal gridlines */}
      {horizontalHours.map((h) => (
        <div
          key={`h${h}`}
          style={{
            position: "absolute",
            left: GX0,
            top: yAt(h),
            width: GX1 - GX0,
            height: tickHours.has(h) ? 1 : 1,
            background: tickHours.has(h) ? palette.border : lineLight,
          }}
        />
      ))}

      {/* Vertical gridlines (day boundaries) */}
      {Array.from({ length: NDAYS + 1 }).map((_, i) => (
        <div
          key={`v${i}`}
          style={{
            position: "absolute",
            left: xAt(i),
            top: GY0,
            width: i === 0 ? 2 : 1,
            height: GY1 - GY0,
            background: palette.border,
          }}
        />
      ))}

      {/* Rocks (neutral cards) */}
      {ROCKS.map((r) => (
        <div
          key={r.label}
          style={{
            position: "absolute",
            left: xAt(r.day) + BLOCK_PADX,
            top: yAt(r.start) + BLOCK_PADY,
            width: COLW - 2 * BLOCK_PADX,
            height: yAt(r.end) - yAt(r.start) - 2 * BLOCK_PADY,
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 12,
            boxShadow: cardShadow,
            padding: "8px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 23,
              fontWeight: 700,
              color: palette.text,
              lineHeight: 1.12,
            }}
          >
            {r.label}
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              color: palette.muted,
              marginTop: 5,
            }}
          >
            {r.caption}
          </div>
        </div>
      ))}

      {/* Water: the one deliberate-slack callout (accent variant) */}
      <div
        style={{
          position: "absolute",
          left: xAt(SLACK.day) + BLOCK_PADX,
          top: yAt(SLACK.start) + BLOCK_PADY,
          width: COLW - 2 * BLOCK_PADX,
          height: yAt(SLACK.end) - yAt(SLACK.start) - 2 * BLOCK_PADY,
          background: accentTint,
          border: `2px dashed ${palette.accent}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
          padding: "8px 16px",
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 24,
            fontWeight: 700,
            color: palette.accent,
            lineHeight: 1.15,
          }}
        >
          {SLACK.label}
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          position: "absolute",
          left: SAFE_MARGIN,
          right: SAFE_MARGIN,
          top: 985,
          display: "flex",
          alignItems: "center",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 34,
              height: 34,
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 8,
              boxShadow: cardShadow,
              flexShrink: 0,
            }}
          />
          <div style={{ fontFamily: fonts.sans, fontSize: 27, color: palette.text }}>
            Rocks: fixed, timeboxed blocks
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 34,
              height: 34,
              background: accentTint,
              border: `2px dashed ${palette.accent}`,
              borderRadius: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ fontFamily: fonts.sans, fontSize: 27, color: palette.text }}>
            Water: flexible slack, left empty on purpose
          </div>
        </div>
      </div>

      <BlogWatermark />
    </AbsoluteFill>
  );
};
