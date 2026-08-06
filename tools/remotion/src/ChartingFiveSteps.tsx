import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const stroke = (color: string) => ({
  fill: "none",
  stroke: color,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

type IconProps = { color: string };

// 1. Three vertical bars of unequal height inside a rounded frame.
const ColumnsIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <rect x={7} y={9} width={42} height={38} rx={6} {...stroke(color)} />
    <path d="M18 39 L18 19" {...stroke(color)} />
    <path d="M28 39 L28 26" {...stroke(color)} />
    <path d="M38 39 L38 15" {...stroke(color)} />
  </svg>
);

// 2. A ruler drawing a straight vertical line.
const RulerIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <rect x={6} y={8} width={18} height={40} rx={3} {...stroke(color)} />
    <path d="M6 18 L14 18" {...stroke(color)} />
    <path d="M6 28 L14 28" {...stroke(color)} />
    <path d="M6 38 L14 38" {...stroke(color)} />
    <path d="M38 5 L38 51" {...stroke(color)} />
  </svg>
);

// 3. Three short horizontal strokes of decreasing length.
const PhrasesIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M10 16 L46 16" {...stroke(color)} />
    <path d="M10 28 L37 28" {...stroke(color)} />
    <path d="M10 40 L25 40" {...stroke(color)} />
  </svg>
);

// 4. A rectangle with a dashed strip down its right edge.
const MarginIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <rect x={8} y={8} width={40} height={40} rx={5} {...stroke(color)} />
    <path d="M36 10 L36 46" {...stroke(color)} strokeDasharray="5 6" />
  </svg>
);

// 5. The right third of a small grid covered by a solid slab.
const CoverIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <rect x={6} y={12} width={44} height={32} rx={4} {...stroke(color)} />
    <path d="M20 12 L20 44" {...stroke(color)} />
    <path d="M34 12 L34 44" {...stroke(color)} />
    <path d="M34 14 L48 14 L48 42 L34 42 Z" fill={color} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

type Step = {
  n: string;
  name: string;
  desc: string;
  Icon: React.FC<IconProps>;
  accent?: boolean;
};

const steps: Step[] = [
  {
    n: "1",
    name: "Decide columns",
    desc: "Pick the categories before the session, not during it.",
    Icon: ColumnsIcon,
  },
  {
    n: "2",
    name: "Rule and label",
    desc: "Page landscape, three to five columns, no more.",
    Icon: RulerIcon,
  },
  {
    n: "3",
    name: "Short phrases",
    desc: "Two to six words per cell, abbreviations welcome.",
    Icon: PhrasesIcon,
  },
  {
    n: "4",
    name: "Escape hatch",
    desc: "A spare row or margin for what fits no column.",
    Icon: MarginIcon,
  },
  {
    n: "5",
    name: "Cover a column",
    desc: "Hide one column and recall it from the row labels.",
    Icon: CoverIcon,
    accent: true,
  },
];

const CARD_W = 262;
const ARROW_W = 62;
// Two lines of the 32px step name, so every description starts at the same height.
const NAME_H = 78;

const Arrow: React.FC = () => (
  <svg
    width={ARROW_W}
    height={24}
    viewBox={`0 0 ${ARROW_W} 24`}
    style={{ flexShrink: 0, alignSelf: "center" }}
  >
    <line
      x1={4}
      y1={12}
      x2={ARROW_W - 14}
      y2={12}
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <path
      d={`M${ARROW_W - 18} 5 L${ARROW_W - 4} 12 L${ARROW_W - 18} 19`}
      fill="none"
      stroke={palette.muted}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StepCard: React.FC<{ step: Step }> = ({ step }) => {
  const { Icon } = step;
  const mark = step.accent ? palette.accent : palette.primary;
  return (
    <div
      style={{
        width: CARD_W,
        flexShrink: 0,
        boxSizing: "border-box",
        background: step.accent ? "rgba(14,159,142,0.10)" : palette.surface,
        border: step.accent ? `2px solid ${palette.accent}` : `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "36px 24px",
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
      <Icon color={mark} />
      <div
        style={{
          height: NAME_H,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.sans,
          fontSize: 32,
          fontWeight: 700,
          color: palette.text,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {step.name}
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 22,
          color: palette.muted,
          textAlign: "center",
          lineHeight: 1.36,
        }}
      >
        {step.desc}
      </div>
    </div>
  );
};

export const ChartingFiveSteps: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <div
      style={{
        position: "absolute",
        inset: SAFE_MARGIN,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* alignItems stretch: every card takes the height of the tallest one */}
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {steps.map((step, i) => (
          <React.Fragment key={step.name}>
            <StepCard step={step} />
            {i < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
    <BlogWatermark />
  </AbsoluteFill>
);
