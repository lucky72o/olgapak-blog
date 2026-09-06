import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

// Content colours: real highlighter ink and paper, not brand tokens.
const INK = { neon: "#F2EA3B", pastel: "#F7EFA8" };
const PAPER = { white: "#FFFFFF", cream: "#F1E6CE" };
const WOOD = { body: "#C99B63", shaved: "#E8C89A" };
const accentTint = "rgba(14,159,142,0.10)";
// Thickness is computed from the real tip size, never eyeballed.
// The scale factor is illustrative; only the RATIO between the strokes is a claim.
const PX_PER_MM = 22;
const wAt = (mm: number): number => mm * PX_PER_MM; // 110 / 44 / 88

// ---- Band A: fixed coordinate frame ----
const COL_W = 480;
const COL_GAP = 60;
const colX = (i: number): number => SAFE_MARGIN + i * (COL_W + COL_GAP);

const GLYPH_TOP = 170;
const GLYPH_W = 200;
const glyphX = (i: number): number => colX(i) + (COL_W - GLYPH_W) / 2;

const STROKE_LEN = 270; // visual width including the round caps
const STROKE_X = (i: number): number => colX(i);
const LABEL_GAP = 18;
const LABEL_X = (i: number): number => colX(i) + STROKE_LEN + LABEL_GAP;
const LABEL_W = COL_W - STROKE_LEN - LABEL_GAP; // 192

// Column 1 stacks two strokes (5 mm over 2 mm) with 30 px of clear paper between.
const STACK_TOP = 322;
const STROKE_GAP = 30;
const cy5 = STACK_TOP + wAt(5) / 2; // 377
const cy2 = STACK_TOP + wAt(5) + STROKE_GAP + wAt(2) / 2; // 494
const cySingle = (cy5 + cy2) / 2; // single-stroke columns share the stack's midline

const NAME_TOP = 540;
const NAME_H = 48;
const TRAIT_TOP = NAME_TOP + NAME_H + 6;

const DIVIDER_Y = 700;

// ---- Band B: the paper contrast strip ----
const SW_W = 360;
const SW_GAP = 40;
const SW_TOP = 750;
const SW_H = 190;
const swX = (i: number): number => SAFE_MARGIN + i * (SW_W + SW_GAP);
const BAR_H = 7;
const BAR_X = 30;
const BAR_STEP = 46;
const barTop = (i: number): number => 44 + i * BAR_STEP; // 44 / 90 / 136
const SW_BAND_H = 60;
const SW_BAND_TOP = barTop(1) + BAR_H / 2 - SW_BAND_H / 2; // centred on the middle bar
const CAPTION_TOP = SW_TOP + SW_H + 12;

const PILL_TOP = 1030;

type Tip = {
  name: string;
  trait: string[];
  glyph: React.ReactNode;
  strokes: { w: number; cy: number; label?: string }[];
};

// Every tip glyph is drawn in a local 200 x 130 box: barrel in palette.muted,
// working tip in palette.text, the wax lead in real ink colour.
const ChiselGlyph: React.FC = () => (
  <g>
    <rect x={45} y={0} width={110} height={62} rx={8} fill={palette.muted} />
    <path d="M 45 62 L 155 62 L 155 100 L 45 130 Z" fill={palette.text} />
  </g>
);

const BulletGlyph: React.FC = () => (
  <g>
    <rect x={62} y={0} width={76} height={62} rx={8} fill={palette.muted} />
    <path
      d="M 62 62 L 138 62 L 112 116 Q 100 132 88 116 Z"
      fill={palette.text}
    />
  </g>
);

const PencilGlyph: React.FC = () => (
  <g>
    <rect x={35} y={0} width={130} height={58} rx={4} fill={WOOD.body} />
    <path d="M 35 58 L 165 58 L 144 92 L 56 92 Z" fill={WOOD.shaved} />
    <path
      d="M 56 92 L 144 92 L 106 126 Q 100 131 94 126 Z"
      fill={INK.neon}
      stroke="rgba(0,0,0,0.10)"
      strokeWidth={1}
    />
  </g>
);

const TIPS: Tip[] = [
  {
    name: "Chisel",
    trait: ["Broad side for lines,", "edge for underlining"],
    glyph: <ChiselGlyph />,
    strokes: [
      { w: wAt(5), cy: cy5, label: "5 mm" },
      { w: wAt(2), cy: cy2, label: "2 mm" },
    ],
  },
  {
    name: "Bullet",
    trait: ["Rounded fine point", "for margin notes"],
    glyph: <BulletGlyph />,
    // No width label, ever: the manufacturer's own figures conflict.
    strokes: [{ w: 16, cy: cySingle }],
  },
  {
    name: "Wax pencil",
    trait: ["A lead, not ink,", "so nothing bleeds"],
    glyph: <PencilGlyph />,
    strokes: [{ w: wAt(4), cy: cySingle, label: "4 mm lead" }],
  },
];

const SWATCHES: { paper: keyof typeof PAPER; ink: keyof typeof INK; caption: string }[] = [
  { paper: "white", ink: "neon", caption: "Neon on white" },
  { paper: "white", ink: "pastel", caption: "Pastel on white" },
  { paper: "cream", ink: "neon", caption: "Neon on cream" },
  { paper: "cream", ink: "pastel", caption: "Pastel on cream" },
];

const BAR_WIDTHS = [280, 300, 240];

export const HighlighterTipShapes: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      {/* Band A: tip glyphs and the strokes they make, at true relative width */}
      {TIPS.map((t, i) => (
        <React.Fragment key={t.name}>
          <g transform={`translate(${glyphX(i)}, ${GLYPH_TOP})`}>{t.glyph}</g>
          {t.strokes.map((s) => (
            <line
              key={`${t.name}-${s.cy}`}
              x1={STROKE_X(i) + s.w / 2}
              y1={s.cy}
              x2={STROKE_X(i) + STROKE_LEN - s.w / 2}
              y2={s.cy}
              stroke={INK.neon}
              strokeWidth={s.w}
              strokeLinecap="round"
            />
          ))}
        </React.Fragment>
      ))}
    </svg>

    {/* Width labels, hugging the right end of their stroke */}
    {TIPS.map((t, i) =>
      t.strokes.map((s) =>
        s.label ? (
          <div
            key={`${t.name}-label-${s.label}`}
            style={{
              position: "absolute",
              left: LABEL_X(i),
              top: s.cy - 24,
              width: LABEL_W,
              height: 48,
              display: "flex",
              alignItems: "center",
              fontFamily: fonts.mono,
              fontSize: 30,
              fontWeight: 600,
              color: palette.text,
              whiteSpace: "nowrap",
            }}
          >
            {s.label}
          </div>
        ) : null,
      ),
    )}

    {/* Tip names and traits */}
    {TIPS.map((t, i) => (
      <React.Fragment key={`copy-${t.name}`}>
        <div
          style={{
            position: "absolute",
            left: colX(i),
            top: NAME_TOP,
            width: COL_W,
            height: NAME_H,
            display: "flex",
            alignItems: "center",
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            color: palette.text,
          }}
        >
          {t.name}
        </div>
        <div
          style={{
            position: "absolute",
            left: colX(i),
            top: TRAIT_TOP,
            width: COL_W,
            display: "flex",
            flexDirection: "column",
            fontFamily: fonts.sans,
            fontSize: 28,
            lineHeight: 1.3,
            color: palette.muted,
          }}
        >
          {t.trait.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </React.Fragment>
    ))}

    {/* Divider between the two bands */}
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: DIVIDER_Y,
        width: CANVAS.width - SAFE_MARGIN * 2,
        height: 1,
        background: palette.border,
      }}
    />

    {/* Band B: the same two inks on white and on cream paper */}
    {SWATCHES.map((s, i) => (
      <React.Fragment key={s.caption}>
        <div
          style={{
            position: "absolute",
            left: swX(i),
            top: SW_TOP,
            width: SW_W,
            height: SW_H,
            background: PAPER[s.paper],
            border: `1px solid ${palette.border}`,
            borderRadius: 12,
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {BAR_WIDTHS.map((w, b) => (
            <div
              key={`${s.caption}-bar-${b}`}
              style={{
                position: "absolute",
                left: BAR_X,
                top: barTop(b),
                width: w,
                height: BAR_H,
                borderRadius: BAR_H / 2,
                background: palette.muted,
              }}
            />
          ))}
          {/* Translucent ink over the middle line only */}
          <div
            style={{
              position: "absolute",
              left: BAR_X,
              top: SW_BAND_TOP,
              width: 300,
              height: SW_BAND_H,
              background: INK[s.ink],
              opacity: 0.9,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: swX(i),
            top: CAPTION_TOP,
            width: SW_W,
            textAlign: "center",
            fontFamily: fonts.sans,
            fontSize: 26,
            color: palette.muted,
          }}
        >
          {s.caption}
        </div>
      </React.Fragment>
    ))}

    {/* The composition's one accent element */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: PILL_TOP,
        width: CANVAS.width,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: accentTint,
          color: palette.accent,
          fontFamily: fonts.sans,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 1.8,
          padding: "16px 44px",
          borderRadius: 999,
          whiteSpace: "nowrap",
        }}
      >
        PASTEL LOSES ITS CONTRAST ON CREAM PAPER
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
