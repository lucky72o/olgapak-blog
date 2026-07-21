import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, TITLE_TOP, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Verbatim frontmatter title (remotion featured primitive: never reworded).
const TITLE = "Mind Mapping Note-Taking: How to Use It (With Steps)";
const SUBTITLE =
  "A visual note-taking method that branches out from one central idea.";

// Motif lives in the lower band of the canvas, centered horizontally.
const HUB = { x: CANVAS.width / 2, y: 830 };

type Node = { label: string; color: string; x: number; y: number };

// Three branches, each a distinct theme color used exactly once.
const nodes: Node[] = [
  { label: "Idea", color: palette.primary, x: 560, y: 640 },
  { label: "Branch", color: palette.accent, x: 1240, y: 640 },
  { label: "Keyword", color: palette.muted, x: 900, y: 1010 },
];

const branchPath = (n: Node) => {
  const cx = (HUB.x + n.x) / 2;
  const cy = HUB.y + (n.y - HUB.y) * 0.15;
  return `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${n.x} ${n.y}`;
};

const NODE_W = 240;
const NODE_H = 92;

export const MindMapFeatured: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Title band (verbatim frontmatter title) */}
    <div
      style={{
        position: "absolute",
        top: TITLE_TOP,
        left: SAFE_MARGIN,
        right: SAFE_MARGIN,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 82,
        fontWeight: 800,
        color: palette.text,
        lineHeight: 1.14,
        letterSpacing: "-0.5px",
      }}
    >
      {TITLE}
    </div>

    {/* Subtitle */}
    <div
      style={{
        position: "absolute",
        top: TITLE_TOP + 210,
        left: SAFE_MARGIN,
        right: SAFE_MARGIN,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 38,
        fontWeight: 500,
        color: palette.muted,
      }}
    >
      {SUBTITLE}
    </div>

    {/* Curved branches + twig-free strokes to keyword nodes */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {nodes.map((n, i) => (
        <path
          key={i}
          d={branchPath(n)}
          fill="none"
          stroke={n.color}
          strokeWidth={10}
          strokeLinecap="round"
        />
      ))}
    </svg>

    {/* Keyword nodes */}
    {nodes.map((n, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: n.x - NODE_W / 2,
          top: n.y - NODE_H / 2,
          width: NODE_W,
          height: NODE_H,
          background: palette.surface,
          border: `3px solid ${n.color}`,
          borderRadius: 999,
          boxShadow: cardShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
        }}
      >
        <div
          style={{ width: 18, height: 18, borderRadius: 999, background: n.color }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 34,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          {n.label}
        </div>
      </div>
    ))}

    {/* Central hub */}
    <div
      style={{
        position: "absolute",
        left: HUB.x - 165,
        top: HUB.y - 72,
        width: 330,
        height: 144,
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
          fontSize: 50,
          fontWeight: 800,
          color: palette.surface,
        }}
      >
        Mind map
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
