import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Grid card geometry (absolute, on the 1800 x 1200 canvas).
const CARD_X = 470;
const CARD_RIGHT = 1680;
const CARD_W = CARD_RIGHT - CARD_X; // 1210
const CARD_Y = 330;
const HEADER_H = 96;
const ROW_H = 168;
const CARD_H = HEADER_H + ROW_H * 3; // 600 -> bottom edge at y 930
const CARD_BOTTOM = CARD_Y + CARD_H;

// Leftmost label column is a touch wider than the three category columns.
const gridCols = "1.15fr 1fr 1fr 1fr";
const CELL_PAD = "22px 26px";

// Derived column boundaries (total 4.15fr across CARD_W).
const FR = CARD_W / 4.15;
const COL1_W = FR * 1.15;
const COL2_X = CARD_X + COL1_W; // start of the category columns
const CAUSES_X = COL2_X + FR; // "Causes" column left edge
const CAUSES_CENTER = CAUSES_X + FR / 2;

const headers = ["Revolution", "Dates", "Causes", "Key figures"];

const rows: string[][] = [
  ["French", "1789-1799", "debt, famine, hunger", "Robespierre"],
  ["Russian", "1917", "war, bread shortages", "Lenin"],
  ["Industrial", "1760-1840", "steam power, cheap coal", "Watt, Arkwright"],
];

// The one accent role: the highlighted cell is the "Causes" cell of the last row,
// so its leader line leaves the card's bottom edge without crossing any other cell.
const HL_ROW = 2;
const HL_COL = 2;

export const ChartingAnatomy: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    {/* Top callout label (two balanced lines, verbatim copy) */}
    <div
      style={{
        position: "absolute",
        left: COL2_X,
        top: 132,
        width: CARD_RIGHT - COL2_X,
        textAlign: "center",
        fontFamily: fonts.sans,
        fontSize: 27,
        lineHeight: 1.45,
        color: palette.muted,
      }}
    >
      Category headers, one question per column,
      <br />
      decided before the session
    </div>

    {/* Top bracket: spans the three category columns, open at the bottom */}
    <div
      style={{
        position: "absolute",
        left: COL2_X,
        top: 240,
        width: CARD_RIGHT - COL2_X,
        height: 78,
        borderTop: `2px solid ${palette.muted}`,
        borderLeft: `2px solid ${palette.muted}`,
        borderRight: `2px solid ${palette.muted}`,
      }}
    />

    {/* Left callout label */}
    <div
      style={{
        position: "absolute",
        left: 120,
        top: 555,
        width: 250,
        textAlign: "right",
        fontFamily: fonts.sans,
        fontSize: 27,
        lineHeight: 1.45,
        color: palette.muted,
      }}
    >
      Row labels,
      <br />
      one topic
      <br />
      per row
    </div>

    {/* Left bracket: hugs the card's label column, open at the right */}
    <div
      style={{
        position: "absolute",
        left: 396,
        top: 400,
        width: 60,
        height: 510,
        borderLeft: `2px solid ${palette.muted}`,
        borderTop: `2px solid ${palette.muted}`,
        borderBottom: `2px solid ${palette.muted}`,
      }}
    />

    {/* The grid card */}
    <div
      style={{
        position: "absolute",
        left: CARD_X,
        top: CARD_Y,
        width: CARD_W,
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 20,
        boxShadow: cardShadow,
        overflow: "hidden",
      }}
    >
      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: gridCols }}>
        {headers.map((h, i) => (
          <div
            key={i}
            style={{
              height: HEADER_H,
              background: palette.primary,
              color: palette.surface,
              fontFamily: fonts.sans,
              fontSize: 30,
              fontWeight: 700,
              padding: CELL_PAD,
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Body rows */}
      {rows.map((row, r) => (
        <div
          key={r}
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            borderTop: `1px solid ${palette.border}`,
          }}
        >
          {row.map((cell, c) => {
            const highlighted = r === HL_ROW && c === HL_COL;
            return (
              <div
                key={c}
                style={{
                  position: "relative",
                  height: ROW_H,
                  padding: CELL_PAD,
                  boxSizing: "border-box",
                  borderLeft: c === 0 ? "none" : `1px solid ${palette.border}`,
                  background: c === 0 ? palette.background : palette.surface,
                  fontFamily: c === 1 ? fonts.mono : fonts.sans,
                  fontSize: 27,
                  lineHeight: 1.3,
                  fontWeight: c === 0 ? 700 : 500,
                  color: palette.text,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(14,159,142,0.10)",
                      border: `2px solid ${palette.accent}`,
                    }}
                  />
                )}
                <div style={{ position: "relative" }}>{cell}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>

    {/* Cell callout: leader line down from the highlighted cell's bottom edge */}
    <div
      style={{
        position: "absolute",
        left: CAUSES_CENTER - 1,
        top: CARD_BOTTOM,
        width: 2,
        height: 70,
        background: palette.accent,
      }}
    />

    {/* Cell callout pill */}
    <div
      style={{
        position: "absolute",
        left: CAUSES_CENTER - 470,
        top: CARD_BOTTOM + 70,
        width: 940,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.accent}`,
          borderRadius: 6,
          padding: "14px 26px",
          fontFamily: fonts.sans,
          fontSize: 26,
          color: palette.accent,
          whiteSpace: "nowrap",
        }}
      >
        One cell = one topic meets one category, 2 to 6 words
      </div>
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
