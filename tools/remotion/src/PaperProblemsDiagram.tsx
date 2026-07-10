import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Card visual variants: three defect cards use the warning tint, the "clean"
// card is the single emphasis/outcome accent card.
type Variant = "warn" | "accent";

const variantStyles: Record<Variant, { border: string; titleColor: string }> = {
  warn: { border: `2px solid ${palette.warn}`, titleColor: palette.warn },
  accent: { border: `2px solid ${palette.accent}`, titleColor: palette.accent },
};

// The sample word rendered inside every paper swatch, styled per defect.
const Swatch: React.FC<{ kind: "feather" | "bleed" | "ghost" | "clean" }> = ({ kind }) => {
  const word = "note";
  const baseWord: React.CSSProperties = {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: 88,
    color: palette.text,
    letterSpacing: 1,
  };

  return (
    <div
      style={{
        background: palette.background,
        border: `1px solid ${palette.border}`,
        borderRadius: 12,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {kind === "feather" && (
        <div
          style={{
            ...baseWord,
            filter: "blur(0.9px)",
            textShadow: "0 0 3px rgba(34,34,34,0.55), 0 0 6px rgba(34,34,34,0.35)",
          }}
        >
          {word}
        </div>
      )}

      {kind === "bleed" && (
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* heavy soaked-through copy sitting under the ink */}
          <div
            style={{
              ...baseWord,
              position: "absolute",
              left: 3,
              top: 5,
              color: "#111111",
              opacity: 0.5,
              filter: "blur(1.4px)",
              transform: "scaleY(1.04)",
            }}
          >
            {word}
          </div>
          <div style={{ ...baseWord, position: "relative", color: "#111111" }}>{word}</div>
        </div>
      )}

      {kind === "ghost" && (
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* faint mirrored show-through behind the crisp word */}
          <div
            style={{
              ...baseWord,
              position: "absolute",
              left: 0,
              top: 2,
              color: palette.muted,
              opacity: 0.28,
              transform: "scaleX(-1)",
            }}
          >
            {word}
          </div>
          <div style={{ ...baseWord, position: "relative" }}>{word}</div>
        </div>
      )}

      {kind === "clean" && <div style={{ ...baseWord }}>{word}</div>}
    </div>
  );
};

const DefectCard: React.FC<{
  variant: Variant;
  kind: "feather" | "bleed" | "ghost" | "clean";
  title: string;
  definition: string;
}> = ({ variant, kind, title, definition }) => {
  const vs = variantStyles[variant];
  return (
    <div
      style={{
        background: variant === "accent" ? "rgba(14,159,142,0.08)" : palette.surface,
        border: vs.border,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "30px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Swatch kind={kind} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 38,
            fontWeight: 700,
            color: vs.titleColor,
          }}
        >
          {title}
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: 26, color: palette.muted }}>
          {definition}
        </div>
      </div>
    </div>
  );
};

export const PaperProblemsDiagram: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background }}>
    <div
      style={{
        position: "absolute",
        left: SAFE_MARGIN,
        top: SAFE_MARGIN,
        right: SAFE_MARGIN,
        bottom: 138,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 40,
      }}
    >
      <DefectCard
        variant="warn"
        kind="feather"
        title="Feathering"
        definition="Ink spreads into fuzzy, hairy lines."
      />
      <DefectCard
        variant="warn"
        kind="bleed"
        title="Bleeding"
        definition="Ink soaks through to the other side."
      />
      <DefectCard
        variant="warn"
        kind="ghost"
        title="Ghosting"
        definition="Writing shows faintly on the reverse."
      />
      <DefectCard
        variant="accent"
        kind="clean"
        title="Clean writing"
        definition="Crisp lines, minimal show-through."
      />
    </div>

    <BlogWatermark />
  </AbsoluteFill>
);
