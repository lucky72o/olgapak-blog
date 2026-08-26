import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Fixed horizontal geometry: 3 * 420 + 2 * 150 = 1560 = inner width. Exact fit.
const CARD_W = 420;
const CONNECTOR_W = 150;
const ARROW_W = 110; // fixed arrow inside the connector, 20px clear on each side
// Card band centered in the usable canvas (SAFE_MARGIN 120 .. watermark top ~1100).
const CARD_TOP = 375;
const CARD_H = 470;
const xAt = (i: number) => SAFE_MARGIN + i * (CARD_W + CONNECTOR_W); // 120, 690, 1260
const ARROW_Y = CARD_TOP + CARD_H / 2; // 610

const iStroke = {
  fill: "none",
  stroke: palette.primary,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PenIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M14 42 L14 34 L38 10 L46 18 L22 42 Z" {...iStroke} stroke={color} />
    <path d="M33 15 L41 23" {...iStroke} stroke={color} />
    <path d="M14 42 L22 42" {...iStroke} stroke={color} />
  </svg>
);

const FunnelIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M10 12 L46 12 L33 30 L33 46 L23 40 L23 30 Z" {...iStroke} stroke={color} />
  </svg>
);

const SearchDocIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width={64} height={64} viewBox="0 0 56 56">
    <path d="M12 8 L32 8 L32 20 L44 20 L44 30" {...iStroke} stroke={color} />
    <path d="M32 8 L44 20" {...iStroke} stroke={color} />
    <path d="M12 8 L12 48 L28 48" {...iStroke} stroke={color} />
    <circle cx={38} cy={38} r={11} {...iStroke} stroke={color} />
    <path d="M46 46 L52 52" {...iStroke} stroke={color} />
  </svg>
);

type Step = {
  tag: string;
  title: string;
  body: string;
  Icon: React.FC<{ color: string }>;
  emphasis: boolean;
};

const steps: Step[] = [
  {
    tag: "STEP 1",
    title: "Handwrite live",
    body: "In the lecture or the meeting, on paper or a tablet. Don't try to catch everything.",
    Icon: PenIcon,
    emphasis: false,
  },
  {
    tag: "STEP 2",
    title: "Pull out what matters",
    body: "Not a transcript. The ideas, the questions, the three things you'd hate to forget.",
    Icon: FunnelIcon,
    emphasis: false,
  },
  {
    tag: "STEP 3",
    title: "Make it searchable",
    body: "A notes app, a doc, anywhere with a search box.",
    Icon: SearchDocIcon,
    emphasis: true,
  },
];

const StepCard: React.FC<{ step: Step; x: number }> = ({ step, x }) => {
  const { Icon } = step;
  const iconColor = step.emphasis ? palette.accent : palette.primary;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: CARD_TOP,
        width: CARD_W,
        height: CARD_H,
        boxSizing: "border-box",
        background: step.emphasis ? "rgba(14,159,142,0.08)" : palette.surface,
        border: step.emphasis
          ? `2px solid ${palette.accent}`
          : `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "56px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <Icon color={iconColor} />
      <div
        style={{
          marginTop: 22,
          fontFamily: fonts.mono,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 2,
          color: palette.muted,
        }}
      >
        {step.tag}
      </div>
      <div
        style={{
          marginTop: 16,
          // reserve two title lines in every card so the bodies stay aligned
          height: 2 * 38 * 1.2,
          display: "flex",
          alignItems: "center",
          fontFamily: fonts.sans,
          fontSize: 38,
          fontWeight: 700,
          color: palette.text,
          lineHeight: 1.2,
        }}
      >
        {step.title}
      </div>
      <div
        style={{
          marginTop: 20,
          fontFamily: fonts.sans,
          fontSize: 27,
          fontWeight: 500,
          color: palette.muted,
          lineHeight: 1.35,
        }}
      >
        {step.body}
      </div>
    </div>
  );
};

// Sequential step connector: muted, solid, strokeWidth 2.5, rounded caps.
const Arrow: React.FC<{ i: number }> = ({ i }) => {
  const left = xAt(i) + CARD_W + (CONNECTOR_W - ARROW_W) / 2;
  return (
    <svg
      width={ARROW_W}
      height={24}
      viewBox={`0 0 ${ARROW_W} 24`}
      style={{ position: "absolute", left, top: ARROW_Y - 12 }}
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
};

export const HybridWorkflowFlow: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background, width: CANVAS.width }}>
    {steps.map((step, i) => (
      <StepCard key={step.tag} step={step} x={xAt(i)} />
    ))}
    <Arrow i={0} />
    <Arrow i={1} />
    <BlogWatermark />
  </AbsoluteFill>
);
