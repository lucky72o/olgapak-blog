import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const STEP_W = 194;
const STEP_GAP = 32;
const STEP_COUNT = 7;
const TOTAL_W = STEP_COUNT * STEP_W + (STEP_COUNT - 1) * STEP_GAP; // 1550
const LEFT_X = 125; // centered on the 1800px canvas, inside SAFE_MARGIN
const RIGHT_EDGE = LEFT_X + TOTAL_W; // 1675
const BASELINE_Y = 1070; // ~48px of clear space above the watermark

const LABEL_BOX_H = 110;
const LABEL_GAP = 26; // clear space between a label box and its riser top

// The ramp fills the frame: step 7 tops out at y=256 (its label box then starts
// exactly at SAFE_MARGIN=120), step 1 still reads as a low first step.
const BASE_H = 250;
const STEP_RISE = 94;

const xAt = (i: number): number => LEFT_X + i * (STEP_W + STEP_GAP);
const heightAt = (i: number): number => BASE_H + i * STEP_RISE; // 250 .. 814
const topAt = (i: number): number => BASELINE_Y - heightAt(i); // 820 .. 256

const STEPS: { day: string; label: string }[] = [
  { day: "DAY 1", label: "Phone sleeps outside the bedroom" },
  { day: "DAY 2", label: "Notifications off, except people" },
  { day: "DAY 3", label: "Make the phone boring" },
  { day: "DAY 4", label: "One phone-free block" },
  { day: "DAY 5", label: "One protected focus block" },
  { day: "DAY 6", label: "A half-day offline" },
  { day: "DAY 7", label: "One full offline stretch" },
];

export const SevenDayRampDiagram: React.FC = () => (
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
      const isLast = i === STEP_COUNT - 1;
      return (
        <React.Fragment key={s.day}>
          {/* Change label, bottom-anchored so it climbs with its riser */}
          <div
            style={{
              position: "absolute",
              left: xAt(i),
              top: topAt(i) - LABEL_GAP - LABEL_BOX_H,
              width: STEP_W,
              height: LABEL_BOX_H,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: fonts.sans,
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 1.25,
              color: palette.text,
              boxSizing: "border-box",
            }}
          >
            <span>{s.label}</span>
          </div>

          {/* Riser */}
          <div
            style={{
              position: "absolute",
              left: xAt(i),
              top: topAt(i),
              width: STEP_W,
              height: heightAt(i),
              background: isLast ? accentTint : palette.surface,
              border: isLast
                ? `2px solid ${palette.accent}`
                : `1px solid ${palette.border}`,
              borderRadius: 16,
              boxShadow: cardShadow,
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              paddingTop: 28,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 1.6,
                color: isLast ? palette.accent : palette.text,
              }}
            >
              {s.day}
            </div>
          </div>
        </React.Fragment>
      );
    })}

    <BlogWatermark />
  </AbsoluteFill>
);

// Referenced so the safe-margin token stays an explicit design constraint here:
// LEFT_X (125) and RIGHT_EDGE (1675) both sit inside SAFE_MARGIN (120) .. 1680.
export const LAYOUT_BOUNDS = { left: LEFT_X, right: RIGHT_EDGE, margin: SAFE_MARGIN };
