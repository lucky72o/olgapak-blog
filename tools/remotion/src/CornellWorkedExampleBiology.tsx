import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const cueQuestions = [
  "Where does glycolysis happen?",
  "Which stage produces the most ATP?",
  "What happens without oxygen?",
];

const notes = [
  "Cellular respiration = how cells break down glucose to make ATP (energy)",
  "Three stages: glycolysis, then the Krebs cycle, then the electron transport chain",
  "Glycolysis happens in the cytoplasm, makes only 2 ATP",
  "Electron transport chain makes the most ATP and needs oxygen",
  "No oxygen? Cells switch to fermentation instead",
];

const summary =
  "Cellular respiration breaks glucose down in three stages to produce ATP, the cell's energy currency. Most of that ATP comes from the oxygen-dependent electron transport chain, and without oxygen the cell falls back on fermentation.";

export const CornellWorkedExampleBiology: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: SAFE_MARGIN,
        right: SAFE_MARGIN,
        bottom: 138,
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: 34,
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      {/* Header block */}
      <div
        style={{
          border: `1px solid ${palette.border}`,
          borderRadius: 12,
          background: palette.background,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 66,
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 30, fontWeight: 700, color: palette.text }}>
          Biology 101: Cellular Respiration
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 26, color: palette.muted }}>
          Date: 2026-07-04
        </div>
      </div>

      {/* Two-column split */}
      <div style={{ flex: 1, display: "flex", alignItems: "stretch", minHeight: 0 }}>
        {/* Cue column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingRight: 28, gap: 22 }}>
          <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: palette.muted, letterSpacing: 1 }}>
            CUE COLUMN
          </div>
          {cueQuestions.map((q) => (
            <div
              key={q}
              style={{ fontFamily: fonts.sans, fontSize: 29, fontWeight: 600, color: palette.text, lineHeight: 1.3 }}
            >
              {q}
            </div>
          ))}
        </div>

        {/* Vertical rule */}
        <div style={{ width: 2, background: palette.border, alignSelf: "stretch" }} />

        {/* Notes column */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", paddingLeft: 34, gap: 18 }}>
          <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: palette.muted, letterSpacing: 1 }}>
            NOTES COLUMN
          </div>
          {notes.map((n) => (
            <div key={n} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: palette.primary,
                  marginTop: 12,
                  flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: fonts.sans, fontSize: 28, color: palette.text, lineHeight: 1.32 }}>
                {n}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary bar (emphasis / outcome variant) */}
      <div
        style={{
          background: "rgba(14,159,142,0.10)",
          border: `2px solid ${palette.accent}`,
          borderRadius: 12,
          padding: "20px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 700, color: palette.muted, letterSpacing: 1 }}>
          SUMMARY
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: 26, color: palette.text, lineHeight: 1.34 }}>
          {summary}
        </div>
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
