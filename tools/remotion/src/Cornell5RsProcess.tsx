import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const ICON = palette.primary;
const iStroke = { fill: "none", stroke: ICON, strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const PencilIcon = () => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M14 42 L14 34 L38 10 L46 18 L22 42 Z" {...iStroke} />
    <path d="M33 15 L41 23" {...iStroke} />
    <path d="M14 42 L22 42" {...iStroke} />
  </svg>
);

const FunnelIcon = () => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M10 12 L46 12 L33 30 L33 46 L23 40 L23 30 Z" {...iStroke} />
  </svg>
);

const SpeechIcon = () => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M10 12 L46 12 L46 36 L26 36 L16 46 L16 36 L10 36 Z" {...iStroke} />
    <path d="M20 22 L36 22" {...iStroke} />
    <path d="M20 29 L32 29" {...iStroke} />
  </svg>
);

const BulbIcon = () => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M28 8 C18 8 12 15 12 24 C12 31 17 34 20 39 L36 39 C39 34 44 31 44 24 C44 15 38 8 28 8 Z" {...iStroke} />
    <path d="M22 45 L34 45" {...iStroke} />
    <path d="M25 50 L31 50" {...iStroke} />
  </svg>
);

const RefreshIcon = () => (
  <svg width={56} height={56} viewBox="0 0 56 56">
    <path d="M44 20 A18 18 0 1 0 46 32" {...iStroke} />
    <path d="M44 8 L44 20 L32 20" {...iStroke} />
  </svg>
);

type Step = { n: string; name: string; desc: string; Icon: React.FC };

const steps: Step[] = [
  { n: "1", name: "Record", desc: "Capture main ideas in the wide right column, during class.", Icon: PencilIcon },
  { n: "2", name: "Reduce", desc: "Pull keywords and questions into the left cue column, within 24 hours.", Icon: FunnelIcon },
  { n: "3", name: "Recite", desc: "Cover the notes, answer your cues out loud from memory.", Icon: SpeechIcon },
  { n: "4", name: "Reflect", desc: "Add your own connections, reactions, and open questions.", Icon: BulbIcon },
  { n: "5", name: "Review", desc: "Reread the page and summary in short, regular passes.", Icon: RefreshIcon },
];

const CARD_W = 262;
const ARROW_W = 62;

const Arrow: React.FC = () => (
  <svg width={ARROW_W} height={24} viewBox={`0 0 ${ARROW_W} 24`} style={{ flexShrink: 0 }}>
    <line x1={4} y1={12} x2={ARROW_W - 14} y2={12} stroke={palette.muted} strokeWidth={2.5} strokeLinecap="round" />
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
  return (
    <div
      style={{
        width: CARD_W,
        flexShrink: 0,
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "30px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 23,
          border: `2px solid ${palette.primary}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.mono,
          fontSize: 24,
          fontWeight: 700,
          color: palette.primary,
        }}
      >
        {step.n}
      </div>
      <Icon />
      <div style={{ fontFamily: fonts.sans, fontSize: 34, fontWeight: 700, color: palette.text }}>
        {step.name}
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 23,
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

export const Cornell5RsProcess: React.FC = () => (
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
      {steps.map((step, i) => (
        <React.Fragment key={step.name}>
          <StepCard step={step} />
          {i < steps.length - 1 && <Arrow />}
        </React.Fragment>
      ))}
    </div>
    <BlogWatermark />
  </AbsoluteFill>
);
