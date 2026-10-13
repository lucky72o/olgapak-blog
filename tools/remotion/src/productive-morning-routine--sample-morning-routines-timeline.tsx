import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";
const bufferTint = "rgba(107,114,128,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const MIN_START = 0;
const MIN_END = 60;
const AXIS_TOP = 260;
const AXIS_BOTTOM = 940;
const yAt = (minute: number): number =>
  AXIS_TOP + ((minute - MIN_START) / (MIN_END - MIN_START)) * (AXIS_BOTTOM - AXIS_TOP);

const COL_W = 600;
const LEFT_X = 310;
const RIGHT_X = 1000;
const DIVIDER_X = (LEFT_X + COL_W + RIGHT_X) / 2; // 955
const TICK_RIGHT = LEFT_X - 26; // tick labels end here
const GRID_LEFT = LEFT_X - 12;
const GRID_RIGHT = RIGHT_X + COL_W + 12;

const BLOCK_GAP = 6;
const FOCUS_H = 70;
const PILL_Y = 165;

const TICKS = [0, 10, 20, 30, 40, 50, 60];
const fmt = (m: number): string => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;

type Block = { start: number; end: number; label: string; buffer?: boolean };

const LEFT_BLOCKS: Block[] = [
  { start: 0, end: 5, label: "Water + daylight" },
  { start: 5, end: 10, label: "Get dressed" },
  { start: 10, end: 20, label: "Breakfast" },
  { start: 20, end: 30, label: "Reread first task" },
];
const RIGHT_BLOCKS: Block[] = [
  { start: 0, end: 20, label: "Water + coffee, \"just existing\"", buffer: true },
  { start: 20, end: 25, label: "Get dressed" },
  { start: 25, end: 40, label: "15-minute walk outside" },
  { start: 40, end: 55, label: "Breakfast" },
  { start: 55, end: 60, label: "Reread first task" },
];

const Label: React.FC<{ minute: number; text: string; muted?: boolean; bold?: boolean }> = ({
  minute,
  text,
  muted,
  bold,
}) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 16, whiteSpace: "nowrap" }}>
    <span style={{ fontFamily: fonts.mono, fontSize: 24, color: muted ? palette.muted : palette.primary }}>
      {fmt(minute)}
    </span>
    <span
      style={{
        fontFamily: fonts.sans,
        fontSize: 26,
        fontWeight: bold ? 700 : 600,
        color: muted ? palette.muted : palette.text,
      }}
    >
      {text}
    </span>
  </div>
);

const ActivityBlock: React.FC<{ b: Block; x: number }> = ({ b, x }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: yAt(b.start) + BLOCK_GAP / 2,
      width: COL_W,
      height: yAt(b.end) - yAt(b.start) - BLOCK_GAP,
      boxSizing: "border-box",
      // Opaque so the shared gridlines never run through the label.
      background: b.buffer ? `linear-gradient(${bufferTint}, ${bufferTint}), ${palette.background}` : palette.surface,
      border: b.buffer ? `2px dashed rgba(107,114,128,0.5)` : `1px solid ${palette.border}`,
      borderRadius: 10,
      boxShadow: b.buffer ? "none" : cardShadow,
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Label minute={b.start} text={b.label} muted={b.buffer} />
  </div>
);

const FocusCard: React.FC<{ minute: number; x: number }> = ({ minute, x }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: yAt(minute) + BLOCK_GAP / 2,
      width: COL_W,
      height: FOCUS_H,
      boxSizing: "border-box",
      background: accentTint,
      border: `2px solid ${palette.accent}`,
      borderRadius: 10,
      boxShadow: cardShadow,
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Label minute={minute} text="Focus block starts" bold />
  </div>
);

const SectionPill: React.FC<{ x: number; text: string }> = ({ x, text }) => (
  <div
    style={{
      position: "absolute",
      top: PILL_Y,
      left: x,
      width: COL_W,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: accentTint,
        color: palette.accent,
        borderRadius: 999,
        padding: "14px 36px",
        fontFamily: fonts.sans,
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: 1.4,
        lineHeight: 1,
      }}
    >
      {text}
    </div>
  </div>
);

export const C_productive_morning_routine__sample_morning_routines_timeline: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background, fontFamily: fonts.sans, color: palette.text }}>
    <SectionPill x={LEFT_X} text="30-MINUTE ROUTINE" />
    <SectionPill x={RIGHT_X} text="60-MINUTE ROUTINE" />

    {/* Shared time axis: tick labels + light gridlines across both columns */}
    {TICKS.map((m) => (
      <React.Fragment key={m}>
        <div
          style={{
            position: "absolute",
            left: 120,
            width: TICK_RIGHT - 120,
            top: yAt(m) - 15,
            textAlign: "right",
            fontFamily: fonts.mono,
            fontSize: 26,
            color: palette.muted,
          }}
        >
          {fmt(m)}
        </div>
        <div
          style={{
            position: "absolute",
            left: GRID_LEFT,
            width: GRID_RIGHT - GRID_LEFT,
            top: yAt(m),
            height: 0,
            borderTop: `1.5px dashed ${palette.border}`,
          }}
        />
      </React.Fragment>
    ))}

    {/* Divider between the two routines */}
    <div
      style={{
        position: "absolute",
        left: DIVIDER_X,
        top: AXIS_TOP - 20,
        width: 1,
        height: AXIS_BOTTOM + FOCUS_H + 20 - (AXIS_TOP - 20),
        background: palette.border,
      }}
    />

    {LEFT_BLOCKS.map((b) => (
      <ActivityBlock key={`l${b.start}`} b={b} x={LEFT_X} />
    ))}
    <FocusCard minute={30} x={LEFT_X} />

    {RIGHT_BLOCKS.map((b) => (
      <ActivityBlock key={`r${b.start}`} b={b} x={RIGHT_X} />
    ))}
    <FocusCard minute={60} x={RIGHT_X} />

    {/* Shared rule for both routines */}
    <div
      style={{
        position: "absolute",
        top: 1050,
        left: LEFT_X,
        width: RIGHT_X + COL_W - LEFT_X,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1px solid ${palette.border}`,
          borderRadius: 999,
          padding: "12px 30px",
          fontFamily: fonts.sans,
          fontSize: 24,
          fontWeight: 500,
          color: palette.muted,
          lineHeight: 1.2,
        }}
      >
        Phone stays in another room until the focus block is done
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
