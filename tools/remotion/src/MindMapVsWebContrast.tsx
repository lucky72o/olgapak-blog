import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Panel geometry (two equal cards, even gutter, inside SAFE_MARGIN).
const PANEL_TOP = SAFE_MARGIN;
const PANEL_BOTTOM = 1064; // leaves clear space above the watermark
const PANEL_H = PANEL_BOTTOM - PANEL_TOP;
const GUTTER = 64;
const PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2;
const LEFT_X = SAFE_MARGIN;
const RIGHT_X = SAFE_MARGIN + PANEL_W + GUTTER;

// Interior SVG canvas for each panel's diagram.
const SVG_W = PANEL_W - 80; // 40px padding each side
const SVG_H = PANEL_H - 150; // label band + padding reserved at top/bottom

// ---- Left panel: clean central-topic hierarchy ----
type MapNode = { label: string; color: string; x: number; y: number; dot: { x: number; y: number } };
const HUB = { x: SVG_W / 2, y: SVG_H * 0.44 };
const mapNodes: MapNode[] = [
  { label: "Idea A", color: palette.primary, x: SVG_W * 0.20, y: SVG_H * 0.14, dot: { x: SVG_W * 0.06, y: SVG_H * 0.30 } },
  { label: "Idea B", color: palette.accent, x: SVG_W * 0.80, y: SVG_H * 0.16, dot: { x: SVG_W * 0.95, y: SVG_H * 0.32 } },
  { label: "Idea C", color: palette.muted, x: SVG_W * 0.28, y: SVG_H * 0.82, dot: { x: SVG_W * 0.10, y: SVG_H * 0.70 } },
];
const NODE_W = 176;
const NODE_H = 62;
const mapPath = (n: MapNode) => {
  const cx = (HUB.x + n.x) / 2;
  const cy = HUB.y + (n.y - HUB.y) * 0.15;
  return `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${n.x} ${n.y}`;
};

// ---- Right panel: structureless web (dots + many muted lines) ----
const webNodes = [
  { x: SVG_W * 0.18, y: SVG_H * 0.20 },
  { x: SVG_W * 0.72, y: SVG_H * 0.12 },
  { x: SVG_W * 0.88, y: SVG_H * 0.46 },
  { x: SVG_W * 0.60, y: SVG_H * 0.62 },
  { x: SVG_W * 0.30, y: SVG_H * 0.52 },
  { x: SVG_W * 0.14, y: SVG_H * 0.78 },
  { x: SVG_W * 0.52, y: SVG_H * 0.88 },
  { x: SVG_W * 0.84, y: SVG_H * 0.82 },
];
// Connect nearly every node to nearly every other node (the tangle).
const webEdges: [number, number][] = [];
for (let i = 0; i < webNodes.length; i++) {
  for (let j = i + 1; j < webNodes.length; j++) {
    // drop a few pairs so it reads dense but not a solid fill
    if ((i + j) % 7 === 3) continue;
    webEdges.push([i, j]);
  }
}

const PanelLabel: React.FC<{ children: React.ReactNode; color: string }> = ({
  children,
  color,
}) => (
  <div
    style={{
      fontFamily: fonts.sans,
      fontSize: 42,
      fontWeight: 800,
      color,
      textAlign: "center",
      marginBottom: 8,
    }}
  >
    {children}
  </div>
);

export const MindMapVsWebContrast: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Left panel: emphasis / correct model */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
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
        alignItems: "center",
      }}
    >
      <PanelLabel color={palette.text}>Mind map</PanelLabel>
      <svg width={SVG_W} height={SVG_H}>
        {/* branches + twigs */}
        {mapNodes.map((n, i) => (
          <g key={i}>
            <path d={mapPath(n)} fill="none" stroke={n.color} strokeWidth={8} strokeLinecap="round" />
            <line x1={n.x} y1={n.y} x2={n.dot.x} y2={n.dot.y} stroke={n.color} strokeWidth={3.5} strokeLinecap="round" />
            <circle cx={n.dot.x} cy={n.dot.y} r={10} fill={n.color} />
          </g>
        ))}
        {/* sub-nodes */}
        {mapNodes.map((n, i) => (
          <g key={`n${i}`}>
            <rect
              x={n.x - NODE_W / 2}
              y={n.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx={NODE_H / 2}
              fill={palette.surface}
              stroke={n.color}
              strokeWidth={3}
            />
            <text
              x={n.x}
              y={n.y + 10}
              textAnchor="middle"
              fontFamily={fonts.sans}
              fontSize={30}
              fontWeight={700}
              fill={palette.text}
            >
              {n.label}
            </text>
          </g>
        ))}
        {/* hub */}
        <rect x={HUB.x - 105} y={HUB.y - 46} width={210} height={92} rx={46} fill={palette.text} />
        <text x={HUB.x} y={HUB.y + 12} textAnchor="middle" fontFamily={fonts.sans} fontSize={36} fontWeight={800} fill={palette.surface}>
          Topic
        </text>
      </svg>
    </div>

    {/* Right panel: neutral / tangled web */}
    <div
      style={{
        position: "absolute",
        left: RIGHT_X,
        top: PANEL_TOP,
        width: PANEL_W,
        height: PANEL_H,
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "34px 40px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PanelLabel color={palette.muted}>Web / graph</PanelLabel>
      <svg width={SVG_W} height={SVG_H}>
        {webEdges.map(([a, b], i) => (
          <line
            key={i}
            x1={webNodes[a].x}
            y1={webNodes[a].y}
            x2={webNodes[b].x}
            y2={webNodes[b].y}
            stroke={palette.muted}
            strokeWidth={2}
          />
        ))}
        {webNodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={15} fill={palette.surface} stroke={palette.muted} strokeWidth={3} />
        ))}
      </svg>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
