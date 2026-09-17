import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.08)";

// Fixed layout grid: every coordinate below is derived from these constants,
// never eyeballed. In-post slot, so no title band and no subtitle; the question
// is the diagram's root node.
const L = {
  centerX: CANVAS.width / 2, // 900

  questionTop: SAFE_MARGIN, // 120
  questionH: 124,
  questionW: 900,

  splitY: 324,

  branchTop: 404,
  branchH: 104,

  outcomeTop: 600,
  outcomeH: 464, // bottom 1064, clear of the watermark
};

const COL_W = 480;
const COL_GAP = 60;
const COL_LEFT_X = SAFE_MARGIN; // 120, band ends at 1680
const colX = (i: number): number => COL_LEFT_X + i * (COL_W + COL_GAP);
const colCX = (i: number): number => colX(i) + COL_W / 2; // 360, 900, 1440
const COLS = [0, 1, 2];

const ARROW_HEAD = 11;
const CONNECTOR_GAP = 12;

// Rows inside the outcome cards.
const BORDER = 1;
const PAD_X = 32;
const CONTENT_W = COL_W - 2 * PAD_X - 2 * BORDER; // 414
const GLYPH = 56;
const GLYPH_GAP = 20;
const LABEL_W = CONTENT_W - GLYPH - GLYPH_GAP; // 338
const ROW_H = 88;
const ROW_GAP = 14;
const CAPTION_H = 76;
const INNER_H = L.outcomeH - 2 * BORDER;

const blockHeight = (n: number): number => n * ROW_H + (n - 1) * ROW_GAP;
const rowsTop = (h: number): number => (INNER_H - h) / 2;
const rowY = (i: number, n: number, h: number): number => rowsTop(h) + i * (ROW_H + ROW_GAP);

const arrowHeadDown = (x: number, y: number) =>
  `M${x - ARROW_HEAD} ${y - ARROW_HEAD} L${x} ${y} L${x + ARROW_HEAD} ${y - ARROW_HEAD}`;

// Neutral mapping connectors: muted, solid, 2.5, rounded. All three routes are
// mirror images of each other, so none reads as the recommended path.
const Connectors: React.FC = () => {
  const branchTipY = L.branchTop - CONNECTOR_GAP; // 392
  const outcomeFromY = L.branchTop + L.branchH; // 508
  const outcomeTipY = L.outcomeTop - CONNECTOR_GAP; // 588

  const stroke = {
    fill: "none",
    stroke: palette.muted,
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {/* trunk out of the question card; it doubles as the middle drop */}
      <path
        d={`M${L.centerX} ${L.questionTop + L.questionH} L${L.centerX} ${branchTipY}`}
        {...stroke}
      />
      {/* split bar with the two outer drops, one continuous path */}
      <path
        d={`M${colCX(0)} ${branchTipY} L${colCX(0)} ${L.splitY} L${colCX(2)} ${L.splitY} L${colCX(2)} ${branchTipY}`}
        {...stroke}
      />
      {COLS.map((i) => (
        <path key={`bh-${i}`} d={arrowHeadDown(colCX(i), branchTipY)} {...stroke} />
      ))}

      {/* branch card to outcome card, identical length per column */}
      {COLS.map((i) => (
        <g key={`oc-${i}`}>
          <path d={`M${colCX(i)} ${outcomeFromY} L${colCX(i)} ${outcomeTipY}`} {...stroke} />
          <path d={arrowHeadDown(colCX(i), outcomeTipY)} {...stroke} />
        </g>
      ))}
    </svg>
  );
};

// ---- Glyphs: inline stroked SVG, 56x56 user space, no fill ----
type GlyphProps = { color: string };

const Svg: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <svg
    width={GLYPH}
    height={GLYPH}
    viewBox="0 0 56 56"
    fill="none"
    stroke={color}
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Notebook: portrait cover, elastic band near the right edge, ribbon tail below.
const NotebookGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={12} y={5} width={30} height={40} rx={3} />
    <path d="M 35 5 V 45" />
    <path d="M 20 45 V 52 L 23 49.5 L 26 52 V 45" />
  </Svg>
);

// Pens: two slim parallel pens at 45 degrees, each with a clip line.
const PensGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <g transform="rotate(-45 28 28)">
      <rect x={6} y={15} width={34} height={7} rx={3.5} />
      <path d="M 40 15.5 L 49 18.5 L 40 21.5" />
      <path d="M 10 15 V 11 H 21" />
      <rect x={6} y={33} width={34} height={7} rx={3.5} />
      <path d="M 40 33.5 L 49 36.5 L 40 39.5" />
      <path d="M 10 33 V 29 H 21" />
    </g>
  </Svg>
);

// Highlighter: chunky body, slanted chisel tip, swash beneath the tip.
const HighlighterGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <g transform="rotate(135 28 24)">
      <rect x={2} y={16} width={28} height={16} rx={3} />
      <path d="M 24 16 V 32" />
      <path d="M 30 19 L 38 19 L 43 29 L 30 29" />
    </g>
    <path d="M 6 50 Q 12 45 18 50 T 30 50" />
  </Svg>
);

// Mechanical pencil: slim barrel with clip, three grip ticks, cone and lead.
const MechPencilGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <g transform="rotate(135 28 28)">
      <rect x={2} y={24} width={36} height={8} rx={2} />
      <path d="M 6 24 V 20 H 17" />
      <path d="M 27 22 V 34" />
      <path d="M 30.5 22 V 34" />
      <path d="M 34 22 V 34" />
      <path d="M 38 24 L 47 28 L 38 32" />
      <path d="M 47 28 H 53" />
    </g>
  </Svg>
);

// Stylus: slim stylus touching the lower-right area of a small tablet, ink squiggle.
const StylusGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={4} y={8} width={34} height={44} rx={4} />
    <path d="M 12 43 Q 16 38 20 43 T 29 42" />
    <g transform="translate(31 42) rotate(-60)">
      <rect x={8} y={-2.5} width={32} height={5} rx={2.5} />
      <path d="M 8 -2.5 L 0 0 L 8 2.5" />
    </g>
  </Svg>
);

// Focus gifts: over-ear headphones.
const HeadphonesGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 11 32 V 28 A 17 17 0 0 1 45 28 V 32" />
    <rect x={6} y={30} width={11} height={19} rx={4.5} />
    <rect x={39} y={30} width={11} height={19} rx={4.5} />
  </Svg>
);

// Planning gifts: planner page with two ring tabs and a 2x2 grid.
const PlannerGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={8} y={11} width={40} height={40} rx={3} />
    <path d="M 20 6 V 16" />
    <path d="M 36 6 V 16" />
    <rect x={15} y={22} width={26} height={22} rx={1.5} />
    <path d="M 28 22 V 44" />
    <path d="M 15 33 H 41" />
  </Svg>
);

// A gift card: landscape card, one stripe, small two-loop bow at top-left.
const GiftCardGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={5} y={22} width={46} height={28} rx={4} />
    <path d="M 5 41 H 51" />
    <path d="M 17 22 C 8 8 2 19 17 22" />
    <path d="M 17 22 C 26 8 32 19 17 22" />
    <path d="M 17 22 L 12 29" />
    <path d="M 17 22 L 22 29" />
  </Svg>
);

type Row = { Glyph: React.FC<GlyphProps>; label: string };

const branchLabels = ["By hand", "On an iPad", "Not sure"];

const OUTCOMES: { rows: Row[]; caption?: string }[] = [
  {
    rows: [
      { Glyph: NotebookGlyph, label: "Notebook" },
      { Glyph: PensGlyph, label: "Pens" },
      { Glyph: HighlighterGlyph, label: "Highlighters" },
      { Glyph: MechPencilGlyph, label: "Mechanical pencil" },
    ],
  },
  {
    rows: [{ Glyph: StylusGlyph, label: "Stylus" }],
    caption: "Check their iPad model first",
  },
  {
    rows: [
      { Glyph: HeadphonesGlyph, label: "Focus gifts" },
      { Glyph: PlannerGlyph, label: "Planning gifts" },
      { Glyph: GiftCardGlyph, label: "A gift card" },
    ],
  },
];

const cardBase: React.CSSProperties = {
  position: "absolute",
  background: palette.surface,
  border: `${BORDER}px solid ${palette.border}`,
  borderRadius: 16,
  boxShadow: cardShadow,
  boxSizing: "border-box",
  fontFamily: fonts.sans,
  color: palette.text,
};

const centered: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export const PaperOrScreenGiftDecision: React.FC = () => (
  <AbsoluteFill
    style={{ background: palette.background, fontFamily: fonts.sans, color: palette.text }}
  >
    <Connectors />

    {/* root question: the single accent element */}
    <div
      style={{
        ...cardBase,
        ...centered,
        left: L.centerX - L.questionW / 2,
        top: L.questionTop,
        width: L.questionW,
        height: L.questionH,
        background: accentTint,
        border: `2px solid ${palette.accent}`,
        padding: "0 40px",
        fontSize: 50,
        fontWeight: 700,
      }}
    >
      How do they take notes?
    </div>

    {/* branch cards, identical neutral recipe */}
    {branchLabels.map((label, i) => (
      <div
        key={label}
        style={{
          ...cardBase,
          ...centered,
          left: colX(i),
          top: L.branchTop,
          width: COL_W,
          height: L.branchH,
          padding: "0 28px",
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        {label}
      </div>
    ))}

    {/* outcome cards, equal height; row blocks centred inside each */}
    {OUTCOMES.map(({ rows, caption }, c) => {
      const h = blockHeight(rows.length) + (caption ? ROW_GAP + CAPTION_H : 0);
      return (
        <div
          key={`outcome-${c}`}
          style={{
            ...cardBase,
            left: colX(c),
            top: L.outcomeTop,
            width: COL_W,
            height: L.outcomeH,
          }}
        >
          {rows.map(({ Glyph, label }, i) => (
            <div
              key={label}
              style={{
                position: "absolute",
                left: PAD_X,
                top: rowY(i, rows.length, h),
                width: CONTENT_W,
                height: ROW_H,
                display: "flex",
                alignItems: "center",
                gap: GLYPH_GAP,
              }}
            >
              <div
                style={{
                  width: GLYPH,
                  height: GLYPH,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Glyph color={palette.primary} />
              </div>
              <div
                style={{
                  width: LABEL_W,
                  fontSize: 32,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: palette.text,
                  textAlign: "left",
                }}
              >
                {label}
              </div>
            </div>
          ))}

          {caption ? (
            <div
              style={{
                position: "absolute",
                left: PAD_X,
                top: rowsTop(h) + blockHeight(rows.length) + ROW_GAP,
                width: CONTENT_W,
                height: CAPTION_H,
                display: "flex",
                alignItems: "center",
                fontSize: 26,
                fontWeight: 500,
                lineHeight: 1.3,
                color: palette.muted,
                textAlign: "left",
              }}
            >
              {caption}
            </div>
          ) : null}
        </div>
      );
    })}

    <BlogWatermark />
  </AbsoluteFill>
);
