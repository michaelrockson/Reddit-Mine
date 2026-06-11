import React from "react";
import { AgentPipeline } from "../features/pipeline/index..ts";
import UserGreeting from "../components/ui/UserGreeting.tsx";
import PipelineRunHistory from "../features/pipeline/components/PipelineRunHistory.tsx";

export default function PipelinePage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-h-full">
      <UserGreeting username={"Michael Rockson"} />
      <AgentPipeline />
      <PipelineRunHistory />
    </section>
  );
}
