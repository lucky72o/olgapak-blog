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

export const RemotionRoot: React.FC = () => (
  <>
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
  </>
);
