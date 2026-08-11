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
const ROWS_TOP = 190;
const ROW_H = 132;
const ROW_GAP = 20;
const GLYPH = 56;
const GLYPH_GAP = 24;
const LABEL_W = CONTENT_W - GLYPH - GLYPH_GAP; // 580
const CAPTION_Y = 866;

const rowY = (i: number): number => ROWS_TOP + i * (ROW_H + ROW_GAP);

// ---- Glyphs: inline stroked SVG paths, 56x56 user space, no fill ----
type GlyphProps = { color: string };

const Svg: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <svg
    width={GLYPH}
    height={GLYPH}
    viewBox="0 0 56 56"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const BriefcaseGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={6} y={18} width={44} height={28} rx={4} />
    <path d="M 21 18 V 14 a 3 3 0 0 1 3 -3 h 8 a 3 3 0 0 1 3 3 v 4" />
    <path d="M 6 30 H 50" />
  </Svg>
);

const CapGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 5 22 L 28 12 L 51 22 L 28 32 Z" />
    <path d="M 15 26.5 V 38 c 0 4 6 6.5 13 6.5 s 13 -2.5 13 -6.5 V 26.5" />
  </Svg>
);

const VideoCallGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 10 11 h 36 a 4 4 0 0 1 4 4 v 20 a 4 4 0 0 1 -4 4 H 26 l -9 7 v -7 h -7 a 4 4 0 0 1 -4 -4 V 15 a 4 4 0 0 1 4 -4 z" />
    <circle cx={28} cy={25} r={6} />
  </Svg>
);

const BookGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 28 18 c -5 -4 -12 -5 -20 -5 v 27 c 8 0 15 1 20 5" />
    <path d="M 28 18 c 5 -4 12 -5 20 -5 v 27 c -8 0 -15 1 -20 5" />
    <path d="M 28 18 V 45" />
  </Svg>
);

const FeedGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={7} y={8} width={42} height={40} rx={5} />
    <path d="M 15 18 H 41" />
    <path d="M 15 26 H 41" />
    <path d="M 15 34 H 30" />
    <path d="M 39 31 V 42" />
    <path d="M 34.5 37.5 L 39 42 L 43.5 37.5" />
  </Svg>
);

const AutoplayGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={8} y={8} width={40} height={40} rx={9} />
    <path d="M 24 19 L 38 28 L 24 37 Z" />
  </Svg>
);

const BellGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <path d="M 28 10 a 11 11 0 0 1 11 11 v 9 l 4 6 H 13 l 4 -6 v -9 a 11 11 0 0 1 11 -11 z" />
    <path d="M 23.5 41 a 4.5 4.5 0 0 0 9 0" />
  </Svg>
);

const TabGlyph: React.FC<GlyphProps> = ({ color }) => (
  <Svg color={color}>
    <rect x={6} y={13} width={44} height={33} rx={4} />
    <path d="M 6 24 H 50" />
    <path d="M 11 24 V 17 a 3 3 0 0 1 3 -3 h 9 a 3 3 0 0 1 3 3 v 7" />
    <path d="M 14 33 H 42" />
    <path d="M 14 40 H 32" />
  </Svg>
);

type Row = { Glyph: React.FC<GlyphProps>; label: string };

const LEFT_ROWS: Row[] = [
  { Glyph: BriefcaseGlyph, label: "The work that pays you" },
  { Glyph: CapGlyph, label: "Coursework" },
  { Glyph: VideoCallGlyph, label: "A video call with your sister" },
  { Glyph: BookGlyph, label: "A book at the bus stop" },
];

const RIGHT_ROWS: Row[] = [
  { Glyph: FeedGlyph, label: "The feed you can't remember" },
  { Glyph: AutoplayGlyph, label: "One more autoplay video" },
  { Glyph: BellGlyph, label: "A notification you never asked for" },
  { Glyph: TabGlyph, label: "The tab you reopened four times" },
];

const Panel: React.FC<{
  x: number;
  emphasis: boolean;
  heading: string;
  rows: Row[];
  glyphColor: string;
  caption: string;
  captionColor: string;
}> = ({ x, emphasis, heading, rows, glyphColor, caption, captionColor }) => (
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
        fontSize: 44,
        fontWeight: 800,
        color: palette.text,
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
          top: rowY(i),
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
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1.3,
            color: palette.text,
          }}
        >
          {label}
        </div>
      </div>
    ))}

    <div
      style={{
        position: "absolute",
        left: PAD_X,
        top: CAPTION_Y,
        width: CONTENT_W,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 30,
        fontWeight: 700,
        color: captionColor,
        lineHeight: 1.2,
      }}
    >
      {caption}
    </div>
  </div>
);

export const TwoPilesOfScreenTime: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <Panel
      x={LEFT_X}
      emphasis={false}
      heading="Hours you'd choose again"
      rows={LEFT_ROWS}
      glyphColor={palette.text}
      caption="Leave this pile alone."
      captionColor={palette.muted}
    />
    <Panel
      x={RIGHT_X}
      emphasis
      heading="Hours that leaked"
      rows={RIGHT_ROWS}
      glyphColor={palette.muted}
      caption="This guide is only about this pile."
      captionColor={palette.accent}
    />
    <BlogWatermark />
  </AbsoluteFill>
);
