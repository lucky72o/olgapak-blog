import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const accentTint = "rgba(14,159,142,0.10)";
const warnTint = "rgba(225,29,72,0.08)";

// ---- Fixed coordinate frame (never hand-place a pixel) ----
const LEFT_X = SAFE_MARGIN; // 120
const BAR_W = CANVAS.width - 2 * SAFE_MARGIN; // 1560
const SEG_GAP = 10;
const USABLE = BAR_W - 2 * SEG_GAP; // 1540
const TOTAL = 9;
const wAt = (n: number): number => (n / TOTAL) * USABLE;

const EYEBROW_Y = 152;
const BAR_TOP = 230;
const BAR_H = 120;

const CARDS_TOP = 430;
const CARDS_H = 470;
const COL_GUTTER = 48;
const COL_W = (BAR_W - 2 * COL_GUTTER) / 3; // 488
const colLeft = (i: number): number => LEFT_X + i * (COL_W + COL_GUTTER);

const FOOTNOTE_TOP = 962;

const PIP = 52;
const PIP_GAP = 12;

type Group = {
  name: string;
  n: number;
  count: string;
  pips: string[];
  caption: string;
  tone: "neutral" | "warn" | "accent";
};

const GROUPS: Group[] = [
  {
    name: "Vendor homepages",
    n: 6,
    count: "6 of 9",
    pips: ["1", "2", "3", "4", "8", "9"],
    caption:
      "The tools themselves. Two of them open by calling themselves the top platform in the category.",
    tone: "neutral",
  },
  {
    name: "Editorial roundups",
    n: 2,
    count: "2 of 9",
    pips: ["5", "7"],
    caption:
      "Neither is independent. One ranks its own product first with no disclosure, the other sells a $29 per month membership on the same page.",
    tone: "warn",
  },
  {
    name: "Forum discussion",
    n: 1,
    count: "1 of 9",
    pips: ["6"],
    caption: "The only result on page one with nothing to sell you.",
    tone: "accent",
  },
];

const toneColor = (tone: Group["tone"]): string =>
  tone === "warn" ? palette.warn : tone === "accent" ? palette.accent : palette.text;

const segStyle = (g: Group): React.CSSProperties => {
  if (g.tone === "warn") {
    return { background: warnTint, border: `1.5px solid ${palette.warn}` };
  }
  if (g.tone === "accent") {
    return { background: accentTint, border: `2px solid ${palette.accent}` };
  }
  return { background: palette.surface, border: `1px solid ${palette.border}` };
};

const cardStyle = (g: Group): React.CSSProperties => {
  if (g.tone === "accent") {
    return { background: accentTint, border: `2px solid ${palette.accent}` };
  }
  if (g.tone === "warn") {
    return { background: palette.surface, border: `1.5px solid ${palette.warn}` };
  }
  return { background: palette.surface, border: `1px solid ${palette.border}` };
};

// Segment left offsets are cumulative, computed, never typed as literals.
const segLeft = (i: number): number => {
  let x = LEFT_X;
  for (let k = 0; k < i; k++) {
    x += wAt(GROUPS[k].n) + SEG_GAP;
  }
  return x;
};

export const SerpComposition: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Eyebrow label (not a title band): one quiet muted line */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: EYEBROW_Y,
        fontFamily: fonts.sans,
        fontSize: 30,
        fontWeight: 600,
        letterSpacing: 2,
        color: palette.muted,
        whiteSpace: "nowrap",
      }}
    >
      WHAT PAGE ONE ACTUALLY IS
    </div>

    {/* Proportional bar: widths are the claim, computed from wAt() */}
    {GROUPS.map((g, i) => (
      <div
        key={`seg-${g.name}`}
        style={{
          position: "absolute",
          left: segLeft(i),
          top: BAR_TOP,
          width: wAt(g.n),
          height: BAR_H,
          borderRadius: 16,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...segStyle(g),
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 44,
            fontWeight: 700,
            color: toneColor(g.tone),
            lineHeight: 1,
          }}
        >
          {String(g.n)}
        </div>
      </div>
    ))}

    {/* Three group cards, aligned to the bar's left edge */}
    {GROUPS.map((g, i) => (
      <div
        key={`card-${g.name}`}
        style={{
          position: "absolute",
          left: colLeft(i),
          top: CARDS_TOP,
          width: COL_W,
          height: CARDS_H,
          borderRadius: 16,
          boxShadow: cardShadow,
          padding: "26px 28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          ...cardStyle(g),
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 40,
            fontWeight: 600,
            color: palette.text,
            lineHeight: 1.15,
          }}
        >
          {g.name}
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: fonts.mono,
            fontSize: 34,
            fontWeight: 700,
            color: toneColor(g.tone),
            lineHeight: 1,
          }}
        >
          {g.count}
        </div>
        <div
          style={{
            marginTop: 22,
            display: "flex",
            flexWrap: "wrap",
            gap: PIP_GAP,
          }}
        >
          {g.pips.map((p) => (
            <div
              key={p}
              style={{
                width: PIP,
                height: PIP,
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                background: palette.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 26,
                color: palette.text,
                boxSizing: "border-box",
              }}
            >
              {p}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: fonts.sans,
            fontSize: 27,
            lineHeight: 1.4,
            color: palette.muted,
          }}
        >
          {g.caption}
        </div>
      </div>
    ))}

    {/* Footnote, above the watermark's clear space */}
    <div
      style={{
        position: "absolute",
        left: LEFT_X,
        top: FOOTNOTE_TOP,
        width: BAR_W,
        fontFamily: fonts.sans,
        fontSize: 26,
        lineHeight: 1.4,
        color: palette.muted,
      }}
    >
      Google page one for "ai study tools", observed 6 September 2026. The two roundups name
      seven and ten tools, overlap on two, and name none of the five vendors outranking them.
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
