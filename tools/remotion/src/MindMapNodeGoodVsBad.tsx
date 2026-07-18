import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const PANEL_TOP = SAFE_MARGIN;
const PANEL_BOTTOM = 1064;
const PANEL_H = PANEL_BOTTOM - PANEL_TOP;
const GUTTER = 64;
const PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2;
const LEFT_X = SAFE_MARGIN;
const RIGHT_X = SAFE_MARGIN + PANEL_W + GUTTER;

const INNER_W = PANEL_W - 80;
const INNER_H = PANEL_H - 150;

const CRAMMED =
  "The left atrium receives oxygenated blood from the lungs and passes it to the left ventricle, which pumps it out to the body through the aorta under high pressure.";

// Small drawn badges (no literal check/cross glyphs as text).
const XBadge: React.FC = () => (
  <svg width={52} height={52} viewBox="0 0 52 52">
    <rect x={0} y={0} width={52} height={52} rx={14} fill={palette.warn} />
    <path d="M17 17 L35 35 M35 17 L17 35" stroke={palette.surface} strokeWidth={5} strokeLinecap="round" />
  </svg>
);
const CheckBadge: React.FC = () => (
  <svg width={52} height={52} viewBox="0 0 52 52">
    <rect x={0} y={0} width={52} height={52} rx={14} fill={palette.accent} />
    <path d="M15 27 L23 35 L38 18" fill="none" stroke={palette.surface} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
// Small drawn heart icon.
const Heart: React.FC<{ color: string }> = ({ color }) => (
  <svg width={30} height={30} viewBox="0 0 32 32">
    <path
      d="M16 28 C16 28 3 20 3 11.5 C3 6.8 6.8 4 10.3 4 C13 4 15 5.6 16 7.4 C17 5.6 19 4 21.7 4 C25.2 4 29 6.8 29 11.5 C29 20 16 28 16 28 Z"
      fill={color}
    />
  </svg>
);

const Caption: React.FC<{ children: React.ReactNode; color: string }> = ({ children, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
    <div style={{ fontFamily: fonts.sans, fontSize: 34, fontWeight: 800, color }}>{children}</div>
  </div>
);

export const MindMapNodeGoodVsBad: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* ---- Left panel: Too much (warning variant) ---- */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: PANEL_TOP,
        width: PANEL_W,
        height: PANEL_H,
        background: palette.surface,
        border: `2px solid ${palette.warn}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "34px 40px 40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <XBadge />
        <div style={{ fontFamily: fonts.sans, fontSize: 34, fontWeight: 800, color: palette.warn }}>
          Cramming a paragraph
        </div>
      </div>

      <div style={{ position: "relative", width: INNER_W, flex: 1 }}>
        <svg width={INNER_W} height={INNER_H} style={{ position: "absolute", left: 0, top: 0 }}>
          <path
            d={`M 0 ${INNER_H * 0.62} Q ${INNER_W * 0.14} ${INNER_H * 0.5} ${INNER_W * 0.24} ${INNER_H * 0.5}`}
            fill="none"
            stroke={palette.warn}
            strokeWidth={8}
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            left: INNER_W * 0.2,
            top: "50%",
            transform: "translateY(-50%)",
            width: INNER_W * 0.8,
            background: "rgba(225,29,72,0.06)",
            border: `2px solid ${palette.warn}`,
            borderRadius: 22,
            padding: "22px 24px",
            fontFamily: fonts.sans,
            fontSize: 27,
            fontWeight: 500,
            lineHeight: 1.32,
            color: palette.text,
          }}
        >
          {CRAMMED}
        </div>
      </div>
    </div>

    {/* ---- Right panel: Just right (emphasis / outcome variant) ---- */}
    <div
      style={{
        position: "absolute",
        left: RIGHT_X,
        top: PANEL_TOP,
        width: PANEL_W,
        height: PANEL_H,
        background: "rgba(14,159,142,0.08)",
        border: `2px solid ${palette.accent}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "34px 40px 40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
        <CheckBadge />
        <div style={{ fontFamily: fonts.sans, fontSize: 34, fontWeight: 800, color: palette.accent }}>
          Keywords + a link
        </div>
      </div>

      <div style={{ position: "relative", width: INNER_W, flex: 1 }}>
        <svg width={INNER_W} height={INNER_H} style={{ position: "absolute", left: 0, top: 0 }}>
          {/* branch stub into the main node */}
          <path
            d={`M 0 ${INNER_H * 0.5} Q ${INNER_W * 0.14} ${INNER_H * 0.38} ${INNER_W * 0.26} ${INNER_H * 0.38}`}
            fill="none"
            stroke={palette.accent}
            strokeWidth={8}
            strokeLinecap="round"
          />
          {/* thin twig to the sub-keyword */}
          <line
            x1={INNER_W * 0.5}
            y1={INNER_H * 0.48}
            x2={INNER_W * 0.66}
            y2={INNER_H * 0.72}
            stroke={palette.accent}
            strokeWidth={3.5}
            strokeLinecap="round"
          />
          <circle cx={INNER_W * 0.66} cy={INNER_H * 0.72} r={9} fill={palette.accent} />
        </svg>

        {/* main keyword node */}
        <div
          style={{
            position: "absolute",
            left: INNER_W * 0.5,
            top: INNER_H * 0.38,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: palette.surface,
            border: `3px solid ${palette.accent}`,
            borderRadius: 999,
            boxShadow: cardShadow,
            padding: "18px 30px",
            whiteSpace: "nowrap",
          }}
        >
          <Heart color={palette.accent} />
          <div style={{ fontFamily: fonts.sans, fontSize: 34, fontWeight: 700, color: palette.text }}>
            Left atrium
          </div>
        </div>

        {/* sub-keyword node */}
        <div
          style={{
            position: "absolute",
            left: INNER_W * 0.66,
            top: INNER_H * 0.72,
            transform: "translate(-8%, -50%)",
            marginLeft: 22,
            background: palette.surface,
            border: `2.5px solid ${palette.muted}`,
            borderRadius: 999,
            boxShadow: cardShadow,
            padding: "12px 22px",
            whiteSpace: "nowrap",
            fontFamily: fonts.sans,
            fontSize: 27,
            fontWeight: 600,
            color: palette.text,
          }}
        >
          oxygenated
        </div>
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
