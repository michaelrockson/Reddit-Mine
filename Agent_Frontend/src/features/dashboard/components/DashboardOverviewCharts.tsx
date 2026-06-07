import React from "react";
import DashboardLineChart from "./DashboardLineChart.tsx";
import DashboardHexChart from "./DashboardHexChart.tsx";
import type { AgentPayload, PipelinePayload } from "../models/DashboardModels.ts";

interface Props {
  agentData: AgentPayload[];
  pipelineData: PipelinePayload[];
}

export default function DashboardOverviewCharts({ agentData, pipelineData }: Props): React.JSX.Element {
  return (
    <section className="li-section-sm li-grid li-grid-take-5">
      <DashboardLineChart agentData={agentData} />
      <DashboardHexChart pipelineData={pipelineData} />
    </section>
  );
}
