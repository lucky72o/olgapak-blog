import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

const headers = ["Theory", "Focus", "Key thinker", "View on markets"];

const rows: string[][] = [
  ["Classical", "Free markets self-correct", "Adam Smith", "Minimal intervention"],
  ["Keynesian", "Demand drives output", "J. M. Keynes", "Active fiscal support"],
  ["Monetarist", "Money supply is central", "Milton Friedman", "Control money growth"],
  ["Austrian", "Individual choice, cycles", "F. A. Hayek", "Let markets clear"],
];

// Leftmost label column is a touch wider than the three category columns.
const gridCols = "1.15fr 1fr 1fr 1fr";
const CELL_PAD = "26px 30px";

export const ChartingExample: React.FC = () => (
  <AbsoluteFill
    style={{
      background: palette.background,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: CANVAS_INNER_WIDTH,
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
              background: palette.primary,
              color: palette.surface,
              fontFamily: fonts.sans,
              fontSize: 32,
              fontWeight: 700,
              padding: CELL_PAD,
              textAlign: i === 0 ? "left" : "left",
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
          {row.map((cell, c) => (
            <div
              key={c}
              style={{
                padding: CELL_PAD,
                borderLeft: c === 0 ? "none" : `1px solid ${palette.border}`,
                background: c === 0 ? palette.background : palette.surface,
                fontFamily: fonts.sans,
                fontSize: 30,
                fontWeight: c === 0 ? 700 : 500,
                color: c === 0 ? palette.text : palette.text,
                display: "flex",
                alignItems: "center",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);

const CANVAS_INNER_WIDTH = 1800 - SAFE_MARGIN * 2;
