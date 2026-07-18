import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const HUB = { x: CANVAS.width / 2, y: 560 };

type Pt = { x: number; y: number };
type Branch = {
  label: string;
  color: string;
  node: Pt;
  subs: { label: string; at: Pt }[];
};

// Four main branches, each a distinct theme color used exactly once
// (color-coded branch legend, sanctioned per the plan's Step-5 exception).
const branches: Branch[] = [
  {
    label: "Structure",
    color: palette.primary,
    node: { x: 500, y: 330 },
    subs: [
      { label: "Chambers", at: { x: 255, y: 200 } },
      { label: "Valves", at: { x: 205, y: 355 } },
      { label: "Walls", at: { x: 315, y: 500 } },
    ],
  },
  {
    label: "Blood Flow",
    color: palette.accent,
    node: { x: 1300, y: 330 },
    subs: [
      { label: "Atria", at: { x: 1545, y: 200 } },
      { label: "Ventricles", at: { x: 1600, y: 355 } },
      { label: "Aorta", at: { x: 1490, y: 500 } },
    ],
  },
  {
    label: "Electrical System",
    color: palette.muted,
    node: { x: 500, y: 810 },
    subs: [
      { label: "SA node", at: { x: 250, y: 700 } },
      { label: "Pacemaker", at: { x: 280, y: 905 } },
    ],
  },
  {
    label: "Common Problems",
    color: palette.warn,
    node: { x: 1300, y: 810 },
    subs: [
      { label: "Arrhythmia", at: { x: 1550, y: 700 } },
      { label: "Murmur", at: { x: 1520, y: 905 } },
    ],
  },
];

const branchPath = (b: Branch) => {
  const cx = (HUB.x + b.node.x) / 2;
  const cy = HUB.y + (b.node.y - HUB.y) * 0.12;
  return `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${b.node.x} ${b.node.y}`;
};

// Cross-link endpoints: Electrical System <-> Common Problems (the two bottom nodes).
const elec = branches[2].node;
const prob = branches[3].node;

export const HeartMindMap: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <svg width={CANVAS.width} height={CANVAS.height} style={{ position: "absolute", left: 0, top: 0 }}>
      {/* main branches + twigs */}
      {branches.map((b, i) => (
        <g key={i}>
          <path d={branchPath(b)} fill="none" stroke={b.color} strokeWidth={9} strokeLinecap="round" />
          {b.subs.map((s, j) => (
            <line
              key={j}
              x1={b.node.x}
              y1={b.node.y}
              x2={s.at.x}
              y2={s.at.y}
              stroke={b.color}
              strokeWidth={4}
              strokeLinecap="round"
            />
          ))}
        </g>
      ))}
      {/* one dashed relational cross-link */}
      <path
        d={`M ${elec.x} ${elec.y + 6} Q ${(elec.x + prob.x) / 2} ${elec.y + 120} ${prob.x} ${prob.y + 6}`}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
    </svg>

    {/* cross-link caption */}
    <div
      style={{
        position: "absolute",
        left: HUB.x,
        top: elec.y + 110,
        transform: "translate(-50%, -50%)",
        fontFamily: fonts.sans,
        fontSize: 24,
        fontStyle: "italic",
        color: palette.muted,
        background: palette.background,
        padding: "2px 12px",
      }}
    >
      related
    </div>

    {/* sub-nodes */}
    {branches.map((b) =>
      b.subs.map((s, j) => (
        <div
          key={`${b.label}-${j}`}
          style={{
            position: "absolute",
            left: s.at.x,
            top: s.at.y,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: palette.surface,
            border: `2.5px solid ${b.color}`,
            borderRadius: 999,
            boxShadow: cardShadow,
            padding: "12px 20px",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 999, background: b.color }} />
          <div style={{ fontFamily: fonts.sans, fontSize: 26, fontWeight: 600, color: palette.text }}>
            {s.label}
          </div>
        </div>
      ))
    )}

    {/* main branch nodes */}
    {branches.map((b, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: b.node.x,
          top: b.node.y,
          transform: "translate(-50%, -50%)",
          background: palette.surface,
          border: `3px solid ${b.color}`,
          borderRadius: 999,
          boxShadow: cardShadow,
          padding: "18px 34px",
          whiteSpace: "nowrap",
          fontFamily: fonts.sans,
          fontSize: 34,
          fontWeight: 700,
          color: palette.text,
        }}
      >
        {b.label}
      </div>
    ))}

    {/* central hub */}
    <div
      style={{
        position: "absolute",
        left: HUB.x,
        top: HUB.y,
        transform: "translate(-50%, -50%)",
        background: palette.text,
        borderRadius: 999,
        boxShadow: "0 14px 36px rgba(15,23,42,0.18)",
        padding: "30px 54px",
        whiteSpace: "nowrap",
        fontFamily: fonts.sans,
        fontSize: 48,
        fontWeight: 800,
        color: palette.surface,
      }}
    >
      The Heart
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
