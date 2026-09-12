import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.08)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const PANEL_TOP = SAFE_MARGIN; // 120
const PANEL_BOTTOM = 1064; // clears the watermark
const PANEL_H = PANEL_BOTTOM - PANEL_TOP; // 944
const GUTTER = 64;
const PANEL_W = (CANVAS.width - 2 * SAFE_MARGIN - GUTTER) / 2; // 748
const LEFT_X = SAFE_MARGIN; // 120
const RIGHT_X = SAFE_MARGIN + PANEL_W + GUTTER; // 932

const PAD_X = 44;
const CONTENT_W = PANEL_W - 2 * PAD_X; // 660

const HEADING_Y = 44;
const DIVIDER_Y = 120;
const ROW_H = 132;
const ROW_GAP = 20;
const GLYPH = 74;
const GLYPH_GAP = 24;
const LABEL_W = CONTENT_W - GLYPH - GLYPH_GAP; // 580

// Row block is vertically centred inside the space under the divider,
// so the 4-row and the 3-row panel read as balanced rather than top-aligned.
const BLOCK_TOP = DIVIDER_Y + 34;
const BLOCK_H = PANEL_H - BLOCK_TOP - 34;
const blockHeight = (n: number): number => n * ROW_H + (n - 1) * ROW_GAP;
const rowsTop = (n: number): number => BLOCK_TOP + (BLOCK_H - blockHeight(n)) / 2;
const rowY = (i: number, n: number): number => rowsTop(n) + i * (ROW_H + ROW_GAP);

// ---- Glyphs: inline stroked SVG paths, 56x56 user space, no fill ----
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

// Capture: a microphone on a stand.
const MicGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={22} y={7} width={12} height={25} rx={6} />
    <path d="M 15 27 a 13 13 0 0 0 26 0" />
    <path d="M 28 40 V 48" />
    <path d="M 19 48 H 37" />
  </Svg>
);

// Transcribe: a sound wave resolving into lines of text.
const WaveToTextGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 8 21 V 35" />
    <path d="M 15 13 V 43" />
    <path d="M 22 24 V 32" />
    <path d="M 32 19 H 49" />
    <path d="M 32 28 H 47" />
    <path d="M 32 37 H 42" />
  </Svg>
);

// Tidy up: a broom beside a page of lines.
const BroomGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={4} y={13} width={22} height={30} rx={3} />
    <path d="M 10 23 H 20" />
    <path d="M 10 31 H 18" />
    <path d="M 51 10 L 41 24" />
    <path d="M 34 22 L 47 31 L 41 40 L 28 31 Z" />
    <path d="M 39 26 L 34 34" />
  </Svg>
);

// Find it again: a magnifier over a page.
const SearchGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={5} y={7} width={28} height={38} rx={3} />
    <path d="M 12 17 H 26" />
    <path d="M 12 25 H 23" />
    <circle cx={36} cy={33} r={11} />
    <path d="M 44 41 L 51 48" />
  </Svg>
);

// Decide what matters: one line pulled out of a stack and pointed at.
const PickOneGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 6 47 H 42" />
    <path d="M 6 37 H 36" />
    <rect x={5} y={9} width={34} height={14} rx={4} />
    <path d="M 41 24 L 52 43 L 45.5 42 L 43 49 L 39 40 Z" />
  </Svg>
);

// Put it in your own words: a speech bubble holding a pen nib.
const OwnWordsGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 8 10 h 40 a 4 4 0 0 1 4 4 v 22 a 4 4 0 0 1 -4 4 H 25 l -9 8 v -8 h -8 a 4 4 0 0 1 -4 -4 V 14 a 4 4 0 0 1 4 -4 z" />
    <path d="M 22 33 L 33 20 L 38 24 L 27 37 Z" />
    <path d="M 22 33 L 26 36.5" />
  </Svg>
);

// Connect it to what you know: two dots joined by a curved link.
const ConnectGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <circle cx={13} cy={40} r={7} />
    <circle cx={43} cy={16} r={7} />
    <path d="M 19 35 Q 28 39 37 21" />
  </Svg>
);

type Row = { Glyph: React.FC<GlyphProps>; label: string };

const LEFT_ROWS: Row[] = [
  { Glyph: WaveToTextGlyph, label: "Turn speech into text" },
  { Glyph: BroomGlyph, label: "Draft a first summary" },
  { Glyph: SearchGlyph, label: "Make it searchable" },
];

const RIGHT_ROWS: Row[] = [
  { Glyph: PickOneGlyph, label: "Decide what matters" },
  { Glyph: OwnWordsGlyph, label: "Put it in your own words" },
  { Glyph: ConnectGlyph, label: "Connect it to what you already know" },
];

const Panel: React.FC<{
  x: number;
  emphasis: boolean;
  heading: string;
  headingColor: string;
  rows: Row[];
  glyphColor: string;
}> = ({ x, emphasis, heading, headingColor, rows, glyphColor }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: PANEL_TOP,
      width: PANEL_W,
      height: PANEL_H,
      background: emphasis ? accentTint : palette.surface,
      border: emphasis ? `2px solid ${palette.accent}` : `1px solid ${palette.border}`,
      borderRadius: 16,
      boxShadow: cardShadow,
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: PAD_X,
        top: HEADING_Y,
        width: CONTENT_W,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 46,
        fontWeight: 800,
        letterSpacing: 3,
        color: headingColor,
        lineHeight: 1.1,
      }}
    >
      {heading}
    </div>

    <div
      style={{
        position: "absolute",
        left: PAD_X,
        top: DIVIDER_Y,
        width: CONTENT_W,
        height: 1,
        background: palette.border,
      }}
    />

    {rows.map(({ Glyph, label }, i) => (
      <div
        key={label}
        style={{
          position: "absolute",
          left: PAD_X,
          top: rowY(i, rows.length),
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
          <Glyph color={glyphColor} />
        </div>
        <div
          style={{
            width: LABEL_W,
            fontFamily: fonts.sans,
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1.3,
            color: palette.text,
          }}
        >
          {label}
        </div>
      </div>
    ))}
  </div>
);

export const AiHandlesYouHandle: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <Panel
      x={LEFT_X}
      emphasis={false}
      heading="AI HANDLES"
      headingColor={palette.primary}
      rows={LEFT_ROWS}
      glyphColor={palette.primary}
    />
    <Panel
      x={RIGHT_X}
      emphasis
      heading="YOU HANDLE"
      headingColor={palette.accent}
      rows={RIGHT_ROWS}
      glyphColor={palette.accent}
    />
    <BlogWatermark />
  </AbsoluteFill>
);
