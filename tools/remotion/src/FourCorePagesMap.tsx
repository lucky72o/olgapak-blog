import React from "react";
import { AbsoluteFill } from "remotion";
import { BlogWatermark } from "./BlogWatermark";
import { CANVAS, SAFE_MARGIN, fonts, palette } from "./theme";

const cardShadow = "0 10px 30px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";

// Fixed horizontal geometry, exact fit: 4 * 324 + 3 * 88 = 1560 = inner width.
const CARD_W = 324;
const CONNECTOR_W = 88;
const ARROW_W = 56; // fixed arrow inside the connector, 16px clear on each side
const CARD_TOP = 190;
const CARD_H = 440;
const CARD_BOTTOM = CARD_TOP + CARD_H; // 630
const xAt = (i: number) => SAFE_MARGIN + i * (CARD_W + CONNECTOR_W); // 120, 532, 944, 1356
const cxAt = (i: number) => xAt(i) + CARD_W / 2; // 282, 694, 1106, 1518
const ARROW_Y = CARD_TOP + CARD_H / 2; // 410

const iStroke = {
  fill: "none",
  stroke: palette.primary,
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GLYPH_W = 200;
const GLYPH_H = 140;

const glyphBox = {
  width: 214,
  height: 150,
  viewBox: `0 0 ${GLYPH_W} ${GLYPH_H}`,
};

// A contents page: one page, four ruled entries, each with a page-number tick.
const IndexGlyph: React.FC = () => (
  <svg {...glyphBox}>
    <rect x={58} y={12} width={84} height={116} rx={5} {...iStroke} />
    {[40, 62, 84, 106].map((y) => (
      <g key={y}>
        <line x1={70} y1={y} x2={110} y2={y} {...iStroke} />
        <line x1={122} y1={y} x2={131} y2={y} {...iStroke} />
      </g>
    ))}
  </svg>
);

// A two-page spread ruled into six empty month blocks.
const FutureLogGlyph: React.FC = () => (
  <svg {...glyphBox}>
    <rect x={18} y={16} width={164} height={110} rx={5} {...iStroke} />
    <line x1={100} y1={16} x2={100} y2={126} {...iStroke} />
    {[26, 60, 94].map((y) => (
      <g key={y}>
        <rect x={30} y={y} width={56} height={24} rx={3} {...iStroke} />
        <rect x={114} y={y} width={56} height={24} rx={3} {...iStroke} />
      </g>
    ))}
  </svg>
);

// A two-page spread: the days of the month down one page, tasks on the other.
const MonthlyLogGlyph: React.FC = () => (
  <svg {...glyphBox}>
    <rect x={18} y={16} width={164} height={110} rx={5} {...iStroke} />
    <line x1={100} y1={16} x2={100} y2={126} {...iStroke} />
    {[32, 47, 62, 77, 92, 107].map((y) => (
      <line key={y} x1={30} y1={y} x2={56} y2={y} {...iStroke} />
    ))}
    {[44, 71, 98].map((y) => (
      <line key={y} x1={114} y1={y} x2={170} y2={y} {...iStroke} />
    ))}
  </svg>
);

// One page: a date rule at the top, then bulleted lines, one already struck out.
const DailyLogGlyph: React.FC = () => (
  <svg {...glyphBox}>
    <rect x={58} y={12} width={84} height={116} rx={5} {...iStroke} />
    <line x1={70} y1={32} x2={104} y2={32} {...iStroke} />
    {[52, 73, 94, 115].map((y, i) =>
      // the second task is done: its bullet is crossed and its line goes muted
      i === 1 ? (
        <g key={y}>
          <line x1={68} y1={69} x2={76} y2={77} {...iStroke} stroke={palette.muted} strokeWidth={3} />
          <line x1={76} y1={69} x2={68} y2={77} {...iStroke} stroke={palette.muted} strokeWidth={3} />
          <line x1={82} y1={y} x2={130} y2={y} {...iStroke} stroke={palette.muted} />
        </g>
      ) : (
        <g key={y}>
          <circle cx={72} cy={y} r={3.5} fill={palette.primary} stroke="none" />
          <line x1={82} y1={y} x2={130} y2={y} {...iStroke} />
        </g>
      )
    )}
  </svg>
);

type Page = {
  step: string;
  title: string;
  caption: string;
  Glyph: React.FC;
};

const pages: Page[] = [
  {
    step: "1",
    title: "Index",
    caption: "A contents page you fill in as you go",
    Glyph: IndexGlyph,
  },
  {
    step: "2",
    title: "Future Log",
    caption: "Anything landing further out than this month",
    Glyph: FutureLogGlyph,
  },
  {
    step: "3",
    title: "Monthly Log",
    caption: "The days of this month down one page, tasks on the other",
    Glyph: MonthlyLogGlyph,
  },
  {
    step: "4",
    title: "Daily Log",
    caption: "Today's date, then lines added as the day happens",
    Glyph: DailyLogGlyph,
  },
];

const PageCard: React.FC<{ page: Page; x: number }> = ({ page, x }) => {
  const { Glyph } = page;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: CARD_TOP,
        width: CARD_W,
        height: CARD_H,
        boxSizing: "border-box",
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          width: 44,
          height: 44,
          borderRadius: 22,
          border: `1.5px solid ${palette.border}`,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.mono,
          fontSize: 24,
          color: palette.muted,
        }}
      >
        {page.step}
      </div>
      <div style={{ marginTop: 12, height: 150 }}>
        <Glyph />
      </div>
      <div
        style={{
          marginTop: 14,
          fontFamily: fonts.sans,
          fontSize: 38,
          fontWeight: 600,
          lineHeight: 1.2,
          color: palette.text,
        }}
      >
        {page.title}
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 25,
          fontWeight: 500,
          lineHeight: 1.35,
          color: palette.muted,
        }}
      >
        {page.caption}
      </div>
    </div>
  );
};

// Sequential step connector: muted, solid, strokeWidth 2.5, rounded caps.
const Arrow: React.FC<{ i: number }> = ({ i }) => {
  const left = xAt(i) + CARD_W + (CONNECTOR_W - ARROW_W) / 2;
  return (
    <svg
      width={ARROW_W}
      height={24}
      viewBox={`0 0 ${ARROW_W} 24`}
      style={{ position: "absolute", left, top: ARROW_Y - 12 }}
    >
      <line
        x1={3}
        y1={12}
        x2={ARROW_W - 13}
        y2={12}
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d={`M${ARROW_W - 16} 6 L${ARROW_W - 3} 12 L${ARROW_W - 16} 18`}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Migration arcs. The accent arc (Daily -> Monthly) is the one emphasized path.
const MIGRATE_FROM_X = cxAt(3); // 1518
const MIGRATE_TO_X = cxAt(2) + 30; // 1136
const SCHEDULE_FROM_X = cxAt(2) - 30; // 1076
const SCHEDULE_TO_X = cxAt(1); // 694

const ArcLabel: React.FC<{ centerX: number; top: number; color: string; text: string }> = ({
  centerX,
  top,
  color,
  text,
}) => (
  <div
    style={{
      position: "absolute",
      left: centerX - 400,
      top,
      width: 800,
      textAlign: "center",
      fontFamily: fonts.sans,
      fontSize: 26,
      fontWeight: 600,
      lineHeight: 1.2,
      color,
    }}
  >
    {text}
  </div>
);

export const FourCorePagesMap: React.FC = () => (
  <AbsoluteFill style={{ background: palette.background, width: CANVAS.width }}>
    {pages.map((page, i) => (
      <PageCard key={page.title} page={page} x={xAt(i)} />
    ))}
    <Arrow i={0} />
    <Arrow i={1} />
    <Arrow i={2} />

    <svg
      width={CANVAS.width}
      height={CANVAS.height}
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <path
        d={`M${MIGRATE_FROM_X} ${CARD_BOTTOM} C${MIGRATE_FROM_X} 877, ${MIGRATE_TO_X} 877, ${MIGRATE_TO_X} ${CARD_BOTTOM}`}
        fill="none"
        stroke={palette.accent}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d={`M${MIGRATE_TO_X - 9} ${CARD_BOTTOM + 16} L${MIGRATE_TO_X} ${CARD_BOTTOM} L${MIGRATE_TO_X + 9} ${CARD_BOTTOM + 16}`}
        fill="none"
        stroke={palette.accent}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M${SCHEDULE_FROM_X} ${CARD_BOTTOM} C${SCHEDULE_FROM_X} 1043, ${SCHEDULE_TO_X} 1043, ${SCHEDULE_TO_X} ${CARD_BOTTOM}`}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      <path
        d={`M${SCHEDULE_TO_X - 8} ${CARD_BOTTOM + 15} L${SCHEDULE_TO_X} ${CARD_BOTTOM} L${SCHEDULE_TO_X + 8} ${CARD_BOTTOM + 15}`}
        fill="none"
        stroke={palette.muted}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <ArcLabel
      centerX={(MIGRATE_FROM_X + MIGRATE_TO_X) / 2}
      top={855}
      color={palette.accent}
      text="> Migrated forward to the next month"
    />
    <ArcLabel
      centerX={(SCHEDULE_FROM_X + SCHEDULE_TO_X) / 2}
      top={980}
      color={palette.muted}
      text="< Scheduled back into the Future Log"
    />

    <BlogWatermark />
  </AbsoluteFill>
);
