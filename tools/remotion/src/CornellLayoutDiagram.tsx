import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const ZoneLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: fonts.sans, fontSize: 40, fontWeight: 700, color: palette.text }}>
    {children}
  </div>
);

const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: fonts.mono, fontSize: 24, color: palette.muted, marginTop: 12 }}>
    {children}
  </div>
);

export const CornellLayoutDiagram: React.FC = () => (
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
        gap: 26,
      }}
    >
      {/* Header block */}
      <div
        style={{
          border: `1px solid ${palette.border}`,
          borderRadius: 12,
          background: palette.background,
          padding: "22px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 74,
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 30, fontWeight: 600, color: palette.muted }}>
          Header (date, class, topic)
        </div>
      </div>

      {/* Proportion bracket over the notes column */}
      <div style={{ display: "flex", alignItems: "flex-end", height: 46 }}>
        <div style={{ flex: 1 }} />
        <div style={{ width: 28 }} />
        <div style={{ flex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "100%",
              height: 12,
              borderLeft: `2px solid ${palette.muted}`,
              borderRight: `2px solid ${palette.muted}`,
              borderTop: `2px solid ${palette.muted}`,
            }}
          />
          <div style={{ fontFamily: fonts.mono, fontSize: 22, color: palette.muted, marginTop: 8 }}>
            ~2x the cue column
          </div>
        </div>
      </div>

      {/* Two-column split */}
      <div style={{ flex: 1, display: "flex", alignItems: "stretch" }}>
        {/* Cue column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingRight: 28 }}>
          <ZoneLabel>Cue column</ZoneLabel>
          <Caption>keywords + questions, added after class</Caption>
        </div>

        {/* Vertical rule */}
        <div style={{ width: 2, background: palette.border, alignSelf: "stretch" }} />

        {/* Notes column */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", paddingLeft: 34 }}>
          <ZoneLabel>Notes column</ZoneLabel>
          <Caption>capture live during class</Caption>
        </div>
      </div>

      {/* Summary bar (emphasis / outcome variant) */}
      <div
        style={{
          background: "rgba(14,159,142,0.10)",
          border: `2px solid ${palette.accent}`,
          borderRadius: 12,
          padding: "22px 28px",
          minHeight: 118,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontFamily: fonts.sans, fontSize: 40, fontWeight: 700, color: palette.text }}>
          Summary
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 24, color: palette.muted, marginTop: 12 }}>
          2-3 sentences, in your own words, written last
        </div>
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
