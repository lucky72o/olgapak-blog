import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const CARD_W = 460;
const ARROW_W = 90; // 3 * 460 + 2 * 90 = 1560 = inner width, exact fit
const CARD_TOP = 470;
const CARD_H = 470;
const ARROW_Y = CARD_TOP + CARD_H / 2; // 705
const NAME_H = 96; // two lines of the 38px name, so all descriptions share a baseline
const TIMER_TOP = 170;
const STOPWATCH = 140;

const xAt = (i: number): number => SAFE_MARGIN + i * (CARD_W + ARROW_W); // 120, 670, 1220

type Step = {
  n: string;
  name: string;
  desc: string;
  accent?: boolean;
};

const STEPS: Step[] = [
  {
    n: "1",
    name: "Write the one decision",
    desc: "The thing that was actually settled, in one line.",
  },
  {
    n: "2",
    name: "Write who does what, by when",
    desc: "Owner and date. Both parts, every time.",
  },
  {
    n: "3",
    name: "Draft the follow-up",
    desc: "While the tone of the room is still in your head.",
    // The step everybody postpones, and the one that decays fastest.
    accent: true,
  },
];

// Stroke-only stopwatch, drawn inline: public/ stays empty.
const Stopwatch: React.FC = () => {
  const s = STOPWATCH;
  const cx = 50;
  const cy = 55;
  const r = 34;
  const line = {
    fill: "none",
    stroke: palette.text,
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg width={s} height={s} viewBox="0 0 100 100">
      <circle cx={cx} cy={cy} r={r} {...line} />
      {/* crown and stem */}
      <path d="M50 14 L50 21" {...line} />
      <rect x={44} y={7} width={12} height={7} rx={2} {...line} />
      {/* side lugs */}
      <path d="M27 26 L22 21" {...line} />
      <path d="M73 26 L78 21" {...line} />
      {/* hand to 12 */}
      <path d={`M${cx} ${cy} L${cx} ${cy - 22}`} {...line} />
      {/* hand to 1: the five-minute sweep */}
      <path
        d={`M${cx} ${cy} L${cx + 11} ${cy - 19}`}
        {...line}
        stroke={palette.muted}
      />
      <circle cx={cx} cy={cy} r={3} fill={palette.text} stroke="none" />
    </svg>
  );
};

const Arrow: React.FC<{ left: number }> = ({ left }) => (
  <svg
    width={ARROW_W}
    height={24}
    viewBox={`0 0 ${ARROW_W} 24`}
    style={{ position: "absolute", left, top: ARROW_Y - 12 }}
  >
    <line
      x1={14}
      y1={12}
      x2={ARROW_W - 24}
      y2={12}
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <path
      d={`M${ARROW_W - 28} 5 L${ARROW_W - 14} 12 L${ARROW_W - 28} 19`}
      fill="none"
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FiveMinutePostMeetingPass: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Timer motif */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: TIMER_TOP,
        width: CANVAS.width,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stopwatch />
      <div
        style={{
          marginTop: 14,
          fontFamily: fonts.mono,
          fontSize: 54,
          fontWeight: 700,
          lineHeight: 1.1,
          color: palette.text,
        }}
      >
        5:00
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 2.4,
          lineHeight: 1.2,
          color: palette.muted,
        }}
      >
        BEFORE THE NEXT THING STARTS
      </div>
    </div>

    {/* Three step cards in one row */}
    {STEPS.map((step, i) => {
      const mark = step.accent ? palette.accent : palette.primary;
      return (
        <div
          key={step.name}
          style={{
            position: "absolute",
            left: xAt(i),
            top: CARD_TOP,
            width: CARD_W,
            height: CARD_H,
            boxSizing: "border-box",
            background: step.accent ? accentTint : palette.surface,
            border: step.accent
              ? `2px solid ${palette.accent}`
              : `1px solid ${palette.border}`,
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)",
            padding: "36px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              flexShrink: 0,
              borderRadius: 23,
              border: `2px solid ${mark}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.mono,
              fontSize: 24,
              fontWeight: 700,
              color: mark,
            }}
          >
            {step.n}
          </div>
          <div
            style={{
              height: NAME_H,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.sans,
              fontSize: 38,
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "center",
              color: palette.text,
            }}
          >
            {step.name}
          </div>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 26,
              lineHeight: 1.36,
              textAlign: "center",
              color: palette.muted,
            }}
          >
            {step.desc}
          </div>
        </div>
      );
    })}

    {/* Two sequential connectors, identical length and clearance */}
    <Arrow left={xAt(0) + CARD_W} />
    <Arrow left={xAt(1) + CARD_W} />

    <BlogWatermark />
  </AbsoluteFill>
);
