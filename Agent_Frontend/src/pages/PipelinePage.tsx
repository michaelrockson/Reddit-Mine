import React from "react";
import {
  PipelineBoard,
  PipelineHeader,
  PipelineStats,
} from "../features/pipeline/index..ts";
import PipelineRunHistory from "../features/pipeline/components/PipelineRunHistory.tsx";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-gap-lg li-h-full">
      <PipelineHeader />
      <PipelineStats />
      <PipelineBoard />
      <PipelineRunHistory />
    </section>
  );
}
