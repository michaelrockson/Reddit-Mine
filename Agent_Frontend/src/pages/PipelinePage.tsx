import React from "react";
import { PipelineStats, ScoutPipeline } from "../features/pipeline/index..ts";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-h-full">
      <PipelineStats />
      <ScoutPipeline />
    </section>
  );
}
