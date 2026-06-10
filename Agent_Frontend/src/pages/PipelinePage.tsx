import React from "react";
import { PipelineWorkspace } from "../features/pipeline/index..ts";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-h-full">
      <PipelineWorkspace />
    </section>
  );
}
