import React from "react";
import { Still } from "remotion";
import { CANVAS } from "./theme";
import { SampleDiagram } from "./SampleDiagram";
import { CornellLayoutDiagram } from "./CornellLayoutDiagram";
import { Cornell5RsProcess } from "./Cornell5RsProcess";
import { CornellWorkedExampleBiology } from "./CornellWorkedExampleBiology";
import { PaperProblemsDiagram } from "./PaperProblemsDiagram";
import { MethodDecisionFlow } from "./MethodDecisionFlow";
import { MethodMindMap } from "./MethodMindMap";
import { ChartingExample } from "./ChartingExample";
import { ChartingAnatomy } from "./ChartingAnatomy";
import { ChartingFiveSteps } from "./ChartingFiveSteps";
import { DoomscrollLoopDiagram } from "./DoomscrollLoopDiagram";
import { MindMapFeatured } from "./MindMapFeatured";
import { MindMapVsWebContrast } from "./MindMapVsWebContrast";
import { HeartMindMap } from "./HeartMindMap";
import { MindMapNodeGoodVsBad } from "./MindMapNodeGoodVsBad";
import { WeekGridTimeboxing } from "./WeekGridTimeboxing";
import { PackedVsBufferedDay } from "./PackedVsBufferedDay";
import { SevenDayRampDiagram } from "./SevenDayRampDiagram";
import { WhatTheStudyMeasured } from "./WhatTheStudyMeasured";
import { HybridWorkflowFlow } from "./HybridWorkflowFlow";
import { NotesDecisionRule } from "./NotesDecisionRule";
import { TwoPilesOfScreenTime } from "./TwoPilesOfScreenTime";
import { InkFamiliesTradeoff } from "./InkFamiliesTradeoff";
import { FourCorePagesMap } from "./FourCorePagesMap";

export const RemotionRoot: React.FC = () => (
  <>
    <Still id="DoomscrollLoopDiagram" component={DoomscrollLoopDiagram}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="SampleDiagram" component={SampleDiagram}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="CornellLayoutDiagram" component={CornellLayoutDiagram}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="Cornell5RsProcess" component={Cornell5RsProcess}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="CornellWorkedExampleBiology" component={CornellWorkedExampleBiology}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="PaperProblemsDiagram" component={PaperProblemsDiagram}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="MethodDecisionFlow" component={MethodDecisionFlow}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="MethodMindMap" component={MethodMindMap}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="ChartingExample" component={ChartingExample}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="ChartingAnatomy" component={ChartingAnatomy}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="ChartingFiveSteps" component={ChartingFiveSteps}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="MindMapFeatured" component={MindMapFeatured}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="MindMapVsWebContrast" component={MindMapVsWebContrast}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="HeartMindMap" component={HeartMindMap}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="MindMapNodeGoodVsBad" component={MindMapNodeGoodVsBad}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="WeekGridTimeboxing" component={WeekGridTimeboxing}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="PackedVsBufferedDay" component={PackedVsBufferedDay}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="SevenDayRampDiagram" component={SevenDayRampDiagram}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="WhatTheStudyMeasured" component={WhatTheStudyMeasured}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="HybridWorkflowFlow" component={HybridWorkflowFlow}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="NotesDecisionRule" component={NotesDecisionRule}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="TwoPilesOfScreenTime" component={TwoPilesOfScreenTime}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="InkFamiliesTradeoff" component={InkFamiliesTradeoff}
      width={CANVAS.width} height={CANVAS.height} />
    <Still id="FourCorePagesMap" component={FourCorePagesMap}
      width={CANVAS.width} height={CANVAS.height} />
  </>
);
