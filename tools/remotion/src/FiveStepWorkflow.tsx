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

// 1. Capture: a phone lying face-up with a small sound arc.
const PhoneIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <rect x={12} y={16} width={22} height={34} rx={4} {...stroke(color)} />
    <path d="M20 22 L26 22" {...stroke(color)} />
    <path d="M41 22 A10 10 0 0 1 41 38" {...stroke(color)} />
    <path d="M46 15 A18 18 0 0 1 46 45" {...stroke(color)} />
  </svg>
);

// 2. Transcribe: a sound wave resolving into three lines of text.
const WaveToTextIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M7 21 L7 35" {...stroke(color)} />
    <path d="M14 12 L14 44" {...stroke(color)} />
    <path d="M21 24 L21 32" {...stroke(color)} />
    <path d="M31 18 L49 18" {...stroke(color)} />
    <path d="M31 28 L47 28" {...stroke(color)} />
    <path d="M31 38 L41 38" {...stroke(color)} />
  </svg>
);

// 3. Summarize: a block of lines shrinking to two lines.
const ShrinkIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M7 10 L33 10" {...stroke(color)} />
    <path d="M7 18 L29 18" {...stroke(color)} />
    <path d="M7 26 L33 26" {...stroke(color)} />
    <path d="M7 34 L26 34" {...stroke(color)} />
    <path d="M18 43 L37 43" {...stroke(color)} />
    <path d="M18 51 L31 51" {...stroke(color)} />
    <path d="M45 16 L45 34" {...stroke(color)} />
    <path d="M39.5 28.5 L45 34 L50.5 28.5" {...stroke(color)} />
  </svg>
);

// 4. Organize: an open folder with three tab dividers standing in it.
const FolderIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M7 47 L7 12 L21 12 L26 19 L49 19 L49 47 Z" {...stroke(color)} />
    <path d="M7 26 L49 26" {...stroke(color)} />
    <path d="M18 26 L18 47" {...stroke(color)} />
    <path d="M28 26 L28 47" {...stroke(color)} />
    <path d="M38 26 L38 47" {...stroke(color)} />
  </svg>
);

// 5. Review: an eye looking over a page of notes.
const ReviewIcon: React.FC<IconProps> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M5 47 L5 7 L23 7 L23 47 Z" {...stroke(color)} />
    <path d="M10 17 L18 17" {...stroke(color)} />
    <path d="M10 26 L16 26" {...stroke(color)} />
    <path d="M30 31 C36 20 47 20 53 31 C47 42 36 42 30 31 Z" {...stroke(color)} />
    <circle cx={41.5} cy={31} r={5} {...stroke(color)} />
  </svg>
);

type Role = "you" | "ai";

type Step = {
  n: string;
  name: string;
  desc: string;
  pill: string;
  role: Role;
  Icon: React.FC<IconProps>;
  accent?: boolean;
};

const steps: Step[] = [
  {
    n: "1",
    name: "Capture",
    desc: "Record it and stay in the room.",
    pill: "YOU",
    role: "you",
    Icon: PhoneIcon,
  },
  {
    n: "2",
    name: "Transcribe",
    desc: "Audio becomes searchable text.",
    pill: "AI",
    role: "ai",
    Icon: WaveToTextIcon,
  },
  {
    n: "3",
    name: "Summarize",
    desc: "A first pass, not a final answer.",
    pill: "AI",
    role: "ai",
    Icon: ShrinkIcon,
  },
  {
    n: "4",
    name: "Organize",
    desc: "Same fields, every time.",
    pill: "YOU",
    role: "you",
    Icon: FolderIcon,
  },
  {
    n: "5",
    name: "Review",
    desc: "Ten minutes, in your own words.",
    pill: "YOU",
    role: "you",
    Icon: ReviewIcon,
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

const pillStyle = (step: Step): React.CSSProperties => {
  if (step.accent) {
    return { background: "rgba(14,159,142,0.14)", color: palette.accent };
  }
  if (step.role === "ai") {
    return { background: "rgba(43,108,176,0.10)", color: palette.primary };
  }
  return { background: "rgba(229,231,235,0.85)", color: palette.muted };
};

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
      <div
        style={{
          marginTop: "auto",
          borderRadius: 999,
          padding: "8px 22px",
          fontFamily: fonts.sans,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 1.4,
          lineHeight: 1,
          ...pillStyle(step),
        }}
      >
        {step.pill}
      </div>
    </div>
  );
};

export const FiveStepWorkflow: React.FC = () => (
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
