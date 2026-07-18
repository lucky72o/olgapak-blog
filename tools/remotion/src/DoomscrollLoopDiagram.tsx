import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

type Node = { label: string; caption: string; x: number; y: number; warn?: boolean };

// Five nodes on a pentagon ring around the canvas center. Top vertex first, clockwise.
const CENTER = { x: CANVAS.width / 2, y: CANVAS.height / 2 + 20 };
const R = 400;
const deg = (d: number) => (d * Math.PI) / 180;
const onRing = (angleDeg: number) => ({
  x: CENTER.x + R * Math.cos(deg(angleDeg)),
  y: CENTER.y + R * Math.sin(deg(angleDeg)),
});

const nodes: Node[] = [
  { label: "Trigger", caption: "boredom, stress, a notification", ...onRing(-90) },
  { label: "Open the feed", caption: "a thumb reflex, not a choice", ...onRing(-18) },
  { label: "Variable reward", caption: "the next post might be a jackpot", ...onRing(54) },
  { label: "Negativity bias", caption: "threats feel urgent, so you keep looking", ...onRing(126) },
  { label: "Feel worse", caption: "anxious, drained, still scrolling", warn: true, ...onRing(198) },
];

const CARD_W = 300;
const CARD_H = 150;

// An arrow from node a's edge to node b's edge, trimmed by a padding radius at each end.
const arrow = (
  a: Node,
  b: Node,
  color: string,
  strokeWidth: number,
  startPad: number,
  endPad: number,
) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const x1 = a.x + ux * startPad;
  const y1 = a.y + uy * startPad;
  const x2 = b.x - ux * endPad;
  const y2 = b.y - uy * endPad;
  // arrowhead
  const ah = 18;
  const aw = 9;
  const bx = x2 - ux * ah;
  const by = y2 - uy * ah;
  const px = -uy;
  const py = ux;
  const head = `M ${x2} ${y2} L ${bx + px * aw} ${by + py * aw} L ${bx - px * aw} ${by - py * aw} Z`;
  const mid = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
  return { x1, y1, x2, y2, head, color, strokeWidth, mid };
};

export const DoomscrollLoopDiagram: React.FC = () => {
  const seq = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    seq.push(arrow(nodes[i], nodes[i + 1], palette.muted, 3, 112, 122));
  }
  // return edge: Feel worse (4) -> Trigger (0), emphasized in warn
  const ret = arrow(nodes[4], nodes[0], palette.warn, 4.5, 118, 128);

  return (
    <AbsoluteFill style={{ background: palette.background }}>
      <svg
        width={CANVAS.width}
        height={CANVAS.height}
        viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
        style={{ position: "absolute", inset: 0 }}
      >
        {[...seq, ret].map((s, i) => (
          <g key={i}>
            <line
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke={s.color}
              strokeWidth={s.strokeWidth}
              strokeLinecap="round"
            />
            <path d={s.head} fill={s.color} />
          </g>
        ))}
        {/* return-edge label */}
        <g>
          <rect
            x={ret.mid.x - 150}
            y={ret.mid.y - 26}
            width={300}
            height={52}
            rx={26}
            fill={palette.background}
          />
          <text
            x={ret.mid.x}
            y={ret.mid.y + 8}
            textAnchor="middle"
            fontFamily={fonts.mono}
            fontSize={26}
            fontWeight={700}
            fill={palette.warn}
          >
            and the loop repeats
          </text>
        </g>
      </svg>

      {nodes.map((n) => (
        <div
          key={n.label}
          style={{
            position: "absolute",
            left: n.x - CARD_W / 2,
            top: n.y - CARD_H / 2,
            width: CARD_W,
            height: CARD_H,
            background: palette.surface,
            border: `${n.warn ? 2 : 1}px solid ${n.warn ? palette.warn : palette.border}`,
            borderRadius: 18,
            boxShadow: cardShadow,
            padding: "22px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 34,
              fontWeight: 700,
              color: n.warn ? palette.warn : palette.text,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            {n.label}
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 19,
              color: palette.muted,
              textAlign: "center",
              lineHeight: 1.32,
            }}
          >
            {n.caption}
          </div>
        </div>
      ))}

      <BlogWatermark />
    </AbsoluteFill>
  );
};
