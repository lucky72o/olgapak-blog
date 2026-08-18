import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Panel geometry (two equal cards, even gutter, inside SAFE_MARGIN).
// Panels + caption are centered as one block inside the band
// SAFE_MARGIN (120) .. watermark top (~1100).
const PANEL_TOP = 280;
const PANEL_BOTTOM = 860;
const PANEL_H = PANEL_BOTTOM - PANEL_TOP; // 580
const GUTTER = 64;
const PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2; // 748
const LEFT_X = SAFE_MARGIN; // 120
const RIGHT_X = SAFE_MARGIN + PANEL_W + GUTTER; // 932

const PAD_X = 42;
const PAD_TOP = 40;
const ROW_GAP = 52;
const CAPTION_TOP = 908;

type PanelData = {
  header: string;
  headerColor: string;
  markerColor: string;
  bullets: string[];
  emphasis: boolean;
};

const panels: PanelData[] = [
  {
    header: "What the study measured",
    headerColor: palette.text,
    markerColor: palette.muted,
    emphasis: false,
    bullets: [
      "University students taking notes on real lectures",
      "Longhand versus laptop, tested shortly afterwards",
      "Laptop notes were more verbatim, and weaker on conceptual questions",
    ],
  },
  {
    header: "What it doesn't show",
    headerColor: palette.accent,
    markerColor: palette.accent,
    emphasis: true,
    bullets: [
      "Not memory in general, one task measured once",
      "Not paper versus screens, nobody handwrote on a tablet",
      "Not that typing harms learning, the mechanism is what you do while writing",
    ],
  },
];

const Panel: React.FC<{ data: PanelData; x: number }> = ({ data, x }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: PANEL_TOP,
      width: PANEL_W,
      height: PANEL_H,
      boxSizing: "border-box",
      background: data.emphasis ? "rgba(14,159,142,0.08)" : palette.surface,
      border: data.emphasis
        ? `2px solid ${palette.accent}`
        : `1px solid ${palette.border}`,
      borderRadius: 16,
      boxShadow: cardShadow,
      padding: `${PAD_TOP}px ${PAD_X}px`,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 44,
        fontWeight: 800,
        letterSpacing: -0.5,
        color: data.headerColor,
        lineHeight: 1.15,
        whiteSpace: "nowrap",
      }}
    >
      {data.header}
    </div>

    <div
      style={{
        marginTop: 26,
        height: 1,
        background: palette.border,
        width: "100%",
      }}
    />

    <div
      style={{
        marginTop: 38,
        display: "flex",
        flexDirection: "column",
        gap: ROW_GAP,
      }}
    >
      {data.bullets.map((b) => (
        <div key={b} style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              background: data.markerColor,
              flexShrink: 0,
              marginTop: 16,
              marginRight: 22,
            }}
          />
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 32,
              fontWeight: 500,
              color: palette.text,
              lineHeight: 1.35,
            }}
          >
            {b}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const WhatTheStudyMeasured: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <Panel data={panels[0]} x={LEFT_X} />
    <Panel data={panels[1]} x={RIGHT_X} />

    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        right: SAFE_MARGIN,
        top: CAPTION_TOP,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 26,
        fontWeight: 500,
        color: palette.muted,
        whiteSpace: "nowrap",
      }}
    >
      2019 replication: small, nonsignificant effects favoring longhand
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
