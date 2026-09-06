import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.08)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
// Elliptical ring: the cards are wider than they are tall, so the horizontal
// radius is larger, which keeps the centre label clear of the side cards.
const CENTER = { x: CANVAS.width / 2, y: 550 };
const RX = 545;
const RY = 290;

const deg = (d: number): number => (d * Math.PI) / 180;
const onRing = (angleDeg: number) => ({
  x: CENTER.x + RX * Math.cos(deg(angleDeg)),
  y: CENTER.y + RY * Math.sin(deg(angleDeg)),
});

const CARD_W = 440;
const CARD_H = 230;
const EMPHASIS_W = 560;
const TRIM_GAP = 24; // clear space between every connector end and the card it points at

const FOOTNOTE_TOP = 1000;

type Node = {
  key: string;
  label: string;
  caption: string[]; // explicit lines, joined verbatim, balanced so no line is an orphan word
  tag?: string;
  emphasis?: boolean;
  w: number;
  h: number;
  x: number;
  y: number;
};

const NODES: Node[] = [
  {
    key: "material",
    label: "Your material",
    caption: ["A lecture, a reading,", "a set of slides"],
    w: CARD_W,
    h: CARD_H,
    ...onRing(-90),
  },
  {
    key: "questions",
    label: "AI writes the questions",
    caption: ["Flashcards, a quiz,", "practice prompts"],
    w: CARD_W,
    h: CARD_H,
    ...onRing(0),
  },
  {
    key: "answer",
    tag: "THIS IS THE PART THAT WORKS",
    label: "You answer from memory",
    caption: ["Closed book, no scrolling back to check"],
    emphasis: true,
    w: EMPHASIS_W,
    h: CARD_H,
    ...onRing(90),
  },
  {
    key: "gaps",
    label: "The gaps show up",
    caption: ["Whatever you could not answer", "goes back in"],
    w: CARD_W,
    h: CARD_H,
    ...onRing(180),
  },
];

// Distance from a card's centre to the point where a ray in direction (ux, uy)
// exits its bounding box. Used to trim every connector by the real card edge
// plus a fixed gap, so no line ever touches a card.
const exitRadius = (n: Node, ux: number, uy: number): number => {
  const tx = Math.abs(ux) > 1e-6 ? n.w / 2 / Math.abs(ux) : Infinity;
  const ty = Math.abs(uy) > 1e-6 ? n.h / 2 / Math.abs(uy) : Infinity;
  return Math.min(tx, ty);
};

type Seg = { x1: number; y1: number; x2: number; y2: number; head: string };

const connector = (a: Node, b: Node): Seg => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const startPad = exitRadius(a, ux, uy) + TRIM_GAP;
  const endPad = exitRadius(b, ux, uy) + TRIM_GAP;
  const x1 = a.x + ux * startPad;
  const y1 = a.y + uy * startPad;
  const x2 = b.x - ux * endPad;
  const y2 = b.y - uy * endPad;
  const ah = 18;
  const aw = 9;
  const bx = x2 - ux * ah;
  const by = y2 - uy * ah;
  const px = -uy;
  const py = ux;
  const head = `M ${x2} ${y2} L ${bx + px * aw} ${by + py * aw} L ${bx - px * aw} ${by - py * aw} Z`;
  return { x1, y1, x2, y2, head };
};

const SEGS: Seg[] = NODES.map((n, i) => connector(n, NODES[(i + 1) % NODES.length]));

export const RecallLoop: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Four identical sequential-step connectors: the loop is continuous,
        no branch is favoured, so no accent stroke. */}
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      style={{ position: "absolute", inset: 0 }}
    >
      {SEGS.map((s, i) => (
        <g key={i}>
          <line
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke={palette.muted}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <path d={s.head} fill={palette.muted} />
        </g>
      ))}
    </svg>

    {/* Centre label, inside the ring's clear space */}
    <div
      style={{
        position: "absolute",
        left: CENTER.x - 220,
        top: CENTER.y - 46,
        width: 440,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: 3,
          color: palette.muted,
          lineHeight: 1.2,
        }}
      >
        ACTIVE RECALL
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 26,
          color: palette.muted,
          lineHeight: 1.3,
        }}
      >
        <div>Run the loop again</div>
        <div>at widening intervals</div>
      </div>
    </div>

    {NODES.map((n) => (
      <div
        key={n.key}
        style={{
          position: "absolute",
          left: n.x - n.w / 2,
          top: n.y - n.h / 2,
          width: n.w,
          height: n.h,
          background: n.emphasis ? accentTint : palette.surface,
          border: n.emphasis
            ? `2px solid ${palette.accent}`
            : `1px solid ${palette.border}`,
          borderRadius: 16,
          boxShadow: cardShadow,
          padding: "26px 28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {n.tag ? (
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              color: palette.accent,
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            {n.tag}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            color: palette.text,
            lineHeight: 1.15,
          }}
        >
          {n.label}
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: fonts.sans,
            fontSize: 26,
            color: palette.muted,
            lineHeight: 1.3,
          }}
        >
          {n.caption.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    ))}

    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: FOOTNOTE_TOP,
        width: CANVAS.width - 2 * SAFE_MARGIN,
        fontFamily: fonts.sans,
        fontSize: 26,
        color: palette.muted,
        lineHeight: 1.4,
      }}
    >
      Spaced repetition is the same loop, repeated at widening intervals rather than crammed
      once.
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
