import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTintPill = "rgba(14,159,142,0.10)";
const accentTintRow = "rgba(14,159,142,0.06)";
const mutedTintPill = "rgba(107,114,128,0.10)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const LEFT_X = SAFE_MARGIN; // 120
const CONTENT_W = CANVAS.width - 2 * SAFE_MARGIN; // 1560

const TAG_H = 56;
const TAG_A_TOP = 130;

const TOP_ROWS_TOP = TAG_A_TOP + TAG_H + 40; // 226
const TOP_ROW_H = [92, 128];
const TOP_ROW_GAP = 18;
const topRowY = (i: number): number =>
  TOP_ROWS_TOP + TOP_ROW_H.slice(0, i).reduce((a, h) => a + h + TOP_ROW_GAP, 0);
const TOP_BLOCK_BOTTOM = topRowY(1) + TOP_ROW_H[1]; // 464

const DIVIDER_Y = TOP_BLOCK_BOTTOM + 48; // 512
const TAG_B_TOP = DIVIDER_Y + 20; // 532

const BOTTOM_ROWS_TOP = TAG_B_TOP + TAG_H + 38; // 626
const BOTTOM_ROW_H = 112;
const BOTTOM_ROW_GAP = 16;
const bottomRowY = (i: number): number =>
  BOTTOM_ROWS_TOP + i * (BOTTOM_ROW_H + BOTTOM_ROW_GAP);

const FOOTNOTE_TOP = 1018;

// Row column grid, shared by both blocks so every element sits on one vertical rhythm.
const ROW_PAD_X = 32;
const NAME_COL = 300;
const COL_GAP = 24;
const BADGE_COL = 210;
const TEXT_COL = CONTENT_W - 2 * ROW_PAD_X - NAME_COL - BADGE_COL - 2 * COL_GAP; // 902

// A limit string is prose with numerals in it: the numerals read as data, so they
// are set in fonts.mono while the surrounding words stay in fonts.sans.
type Token = { t: string; mono?: boolean };

const EVERNOTE_LIMIT: Token[] = [
  { t: "50", mono: true },
  { t: " notes, " },
  { t: "1", mono: true },
  { t: " notebook, " },
  { t: "5", mono: true },
  { t: " spaces, " },
  { t: "20", mono: true },
  { t: " tags, " },
  { t: "200", mono: true },
  { t: " attachments, sync to " },
  { t: "1", mono: true },
  { t: " device, " },
  { t: "1", mono: true },
  { t: " " },
  { t: "GB", mono: true },
  { t: " storage" },
];

const STUDLEY_LIMIT: Token[] = [
  { t: "Free plan covers one study set, stated in its own FAQ" },
];

const STATED: Array<{ name: string; limit: Token[] }> = [
  { name: "Studley", limit: STUDLEY_LIMIT },
  { name: "Evernote", limit: EVERNOTE_LIMIT },
];

const NOT_STATED = ["StudyFetch", "Turbo AI", "Mindgrasp"];
const NOT_STATED_TEXT = 'Markets "free" with no stated limit, no reachable pricing page';

const Tokens: React.FC<{ tokens: Token[]; size: number; color: string }> = ({
  tokens,
  size,
  color,
}) => (
  <span style={{ fontFamily: fonts.sans, fontSize: size, color, lineHeight: 1.3 }}>
    {tokens.map((tk, i) => (
      <span key={i} style={tk.mono ? { fontFamily: fonts.mono, fontWeight: 600 } : undefined}>
        {tk.t}
      </span>
    ))}
  </span>
);

const Pill: React.FC<{ top: number; text: string; accent: boolean }> = ({
  top,
  text,
  accent,
}) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      top,
      width: CANVAS.width,
      height: TAG_H,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        height: TAG_H,
        display: "flex",
        alignItems: "center",
        padding: "0 46px",
        borderRadius: 28,
        background: accent ? accentTintPill : mutedTintPill,
        color: accent ? palette.accent : palette.muted,
        fontFamily: fonts.sans,
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: 2,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      }}
    >
      {text}
    </div>
  </div>
);

const Badge: React.FC<{ text: string; accent: boolean }> = ({ text, accent }) => (
  <div
    style={{
      borderRadius: 8,
      border: `1.5px solid ${accent ? palette.accent : palette.border}`,
      color: accent ? palette.accent : palette.muted,
      background: palette.surface,
      fontFamily: fonts.sans,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: 1.5,
      padding: "10px 18px",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
    }}
  >
    {text}
  </div>
);

const rowBase: React.CSSProperties = {
  position: "absolute",
  left: LEFT_X,
  width: CONTENT_W,
  borderRadius: 16,
  boxShadow: cardShadow,
  padding: `0 ${ROW_PAD_X}px`,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: COL_GAP,
};

export const FreeTierTransparency: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <Pill top={TAG_A_TOP} text="2 OF 5 STATE THEIR FREE-PLAN LIMIT" accent />

    {STATED.map((v, i) => (
      <div
        key={v.name}
        style={{
          ...rowBase,
          top: topRowY(i),
          height: TOP_ROW_H[i],
          background: accentTintRow,
          border: `2px solid ${palette.accent}`,
        }}
      >
        <div
          style={{
            width: NAME_COL,
            flexShrink: 0,
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            color: palette.text,
            lineHeight: 1.1,
          }}
        >
          {v.name}
        </div>
        <div style={{ width: TEXT_COL, flexShrink: 0 }}>
          <Tokens tokens={v.limit} size={30} color={palette.text} />
        </div>
        <div
          style={{
            width: BADGE_COL,
            flexShrink: 0,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Badge text="STATED" accent />
        </div>
      </div>
    ))}

    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: DIVIDER_Y,
        width: CONTENT_W,
        height: 1,
        background: palette.border,
      }}
    />

    <Pill top={TAG_B_TOP} text="3 OF 5 STATE NO LIMIT ANYWHERE" accent={false} />

    {NOT_STATED.map((name, i) => (
      <div
        key={name}
        style={{
          ...rowBase,
          top: bottomRowY(i),
          height: BOTTOM_ROW_H,
          background: palette.surface,
          border: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            width: NAME_COL,
            flexShrink: 0,
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            color: palette.text,
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        <div
          style={{
            width: TEXT_COL,
            flexShrink: 0,
            fontFamily: fonts.sans,
            fontSize: 28,
            color: palette.muted,
            lineHeight: 1.3,
          }}
        >
          {NOT_STATED_TEXT}
        </div>
        <div
          style={{
            width: BADGE_COL,
            flexShrink: 0,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Badge text="NOT STATED" accent={false} />
        </div>
      </div>
    ))}

    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: FOOTNOTE_TOP,
        width: CONTENT_W,
        fontFamily: fonts.sans,
        fontSize: 24,
        color: palette.muted,
        lineHeight: 1.4,
      }}
    >
      Five vendor pages fetched 6 September 2026. Free-plan terms change, so check the page
      before you upload a semester of work.
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
