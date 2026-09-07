import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const STEP_COUNT = 3;
const STEP_W = 480;
const STEP_GAP = 60;
const TOTAL_W = STEP_COUNT * STEP_W + (STEP_COUNT - 1) * STEP_GAP; // 1560
const LEFT_X = SAFE_MARGIN; // 120, so the block spans 120..1680 and is centered
const RIGHT_EDGE = LEFT_X + TOTAL_W; // 1680
const BASELINE_Y = 1040; // ~78px of clear space above the watermark's top edge

const BASE_H = 400;
const STEP_RISE = 240;

const xAt = (i: number): number => LEFT_X + i * (STEP_W + STEP_GAP); // 120, 660, 1200
const heightAt = (i: number): number => BASE_H + i * STEP_RISE; // 400, 640, 880
const topAt = (i: number): number => BASELINE_Y - heightAt(i); // 640, 400, 160

type Step = {
  eyebrow: string;
  headline: string[];
  values: string[];
  sub: string;
  variant: "accent" | "neutral" | "muted";
};

// Every number below traces to facts.md Statistics line 15 and nothing else.
const STEPS: Step[] = [
  {
    eyebrow: "START HERE",
    headline: ["An evening", "window"],
    values: ["1 to 4 hours"],
    sub: "At the end of a workday",
    variant: "accent",
  },
  {
    eyebrow: "NEXT RUNG",
    headline: ["One lower-", "stimulation day"],
    values: ["1 day a week"],
    sub: "Same one or two behaviors",
    variant: "neutral",
  },
  {
    eyebrow: "OPTIONAL",
    headline: ["An occasional", "longer stretch"],
    values: ["1 weekend a quarter", "1 week a year"],
    sub: "Only if you want it",
    variant: "muted",
  },
];

export const GraduatedCadenceSteps: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Baseline rule every riser sits on */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: BASELINE_Y,
        width: RIGHT_EDGE - LEFT_X,
        height: 1,
        background: palette.border,
      }}
    />

    {STEPS.map((s, i) => {
      const isAccent = s.variant === "accent";
      const isMuted = s.variant === "muted";
      const bodyColor = isMuted ? palette.muted : palette.text;
      return (
        <div
          key={s.eyebrow}
          style={{
            position: "absolute",
            left: xAt(i),
            top: topAt(i),
            width: STEP_W,
            height: heightAt(i),
            background: isAccent ? accentTint : palette.surface,
            border: isAccent
              ? `2px solid ${palette.accent}`
              : `1px solid ${palette.border}`,
            borderRadius: "16px 16px 0 0",
            boxShadow: cardShadow,
            boxSizing: "border-box",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Eyebrow: a pill on the accent riser, plain muted text elsewhere */}
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: isAccent ? palette.accent : palette.muted,
              ...(isAccent
                ? {
                    background: accentTint,
                    padding: "10px 20px",
                    borderRadius: 999,
                  }
                : {}),
            }}
          >
            {s.eyebrow}
          </div>

          {/* Headline */}
          <div
            style={{
              marginTop: 20,
              fontFamily: fonts.sans,
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.2,
              color: bodyColor,
            }}
          >
            {s.headline.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {/* Value line(s), mono because they read as data */}
          <div
            style={{
              marginTop: 16,
              fontFamily: fonts.mono,
              fontSize: 30,
              lineHeight: 1.3,
              color: bodyColor,
            }}
          >
            {s.values.map((v) => (
              <div key={v}>{v}</div>
            ))}
          </div>

          {/* Sub-line */}
          <div
            style={{
              marginTop: 12,
              fontFamily: fonts.sans,
              fontSize: 26,
              fontWeight: 500,
              lineHeight: 1.3,
              color: palette.muted,
            }}
          >
            {s.sub}
          </div>
        </div>
      );
    })}

    <BlogWatermark />
  </AbsoluteFill>
);

// Referenced so the safe-margin token stays an explicit design constraint here:
// LEFT_X (120) and RIGHT_EDGE (1680) sit exactly on SAFE_MARGIN (120) .. 1680.
export const LAYOUT_BOUNDS = { left: LEFT_X, right: RIGHT_EDGE, margin: SAFE_MARGIN };
