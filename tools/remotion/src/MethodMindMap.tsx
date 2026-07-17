import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const CENTER = { x: CANVAS.width / 2, y: CANVAS.height / 2 - 20 };

type Branch = {
  label: string;
  color: string;
  node: { x: number; y: number };
  twigs: { x: number; y: number }[];
};

// Four branches, each a distinct theme color used exactly once.
const branches: Branch[] = [
  {
    label: "Key idea",
    color: palette.primary,
    node: { x: 470, y: 350 },
    twigs: [
      { x: 300, y: 250 },
      { x: 330, y: 470 },
    ],
  },
  {
    label: "Example",
    color: palette.accent,
    node: { x: 1330, y: 350 },
    twigs: [
      { x: 1500, y: 250 },
      { x: 1470, y: 470 },
    ],
  },
  {
    label: "Cause",
    color: palette.muted,
    node: { x: 470, y: 830 },
    twigs: [
      { x: 300, y: 730 },
      { x: 330, y: 930 },
    ],
  },
  {
    label: "Effect",
    color: palette.warn,
    node: { x: 1330, y: 830 },
    twigs: [
      { x: 1500, y: 730 },
      { x: 1470, y: 930 },
    ],
  },
];

// Curved branch from the hub to a sub-node, control point pulled toward the hub's row.
const branchPath = (b: Branch) => {
  const cx = (CENTER.x + b.node.x) / 2;
  const cy = CENTER.y + (b.node.y - CENTER.y) * 0.12;
  return `M ${CENTER.x} ${CENTER.y} Q ${cx} ${cy} ${b.node.x} ${b.node.y}`;
};

const NODE_W = 240;
const NODE_H = 96;

export const MethodMindMap: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Branches, twigs, and twig dots */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {branches.map((b, i) => (
        <g key={i}>
          <path
            d={branchPath(b)}
            fill="none"
            stroke={b.color}
            strokeWidth={9}
            strokeLinecap="round"
          />
          {b.twigs.map((t, j) => (
            <g key={j}>
              <line
                x1={b.node.x}
                y1={b.node.y}
                x2={t.x}
                y2={t.y}
                stroke={b.color}
                strokeWidth={4}
                strokeLinecap="round"
              />
              <circle cx={t.x} cy={t.y} r={13} fill={b.color} />
            </g>
          ))}
        </g>
      ))}
    </svg>

    {/* Sub-nodes */}
    {branches.map((b, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: b.node.x - NODE_W / 2,
          top: b.node.y - NODE_H / 2,
          width: NODE_W,
          height: NODE_H,
          background: palette.surface,
          border: `3px solid ${b.color}`,
          borderRadius: 999,
          boxShadow: cardShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: b.color,
          }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 34,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          {b.label}
        </div>
      </div>
    ))}

    {/* Central hub node */}
    <div
      style={{
        position: "absolute",
        left: CENTER.x - 150,
        top: CENTER.y - 70,
        width: 300,
        height: 140,
        background: palette.text,
        borderRadius: 999,
        boxShadow: "0 14px 36px rgba(15,23,42,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 48,
          fontWeight: 800,
          color: palette.surface,
        }}
      >
        Topic
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
