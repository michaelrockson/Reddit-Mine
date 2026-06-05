import { useState } from "react";

type PipelinePayload = {
  pipeline: string;
  runs: number;
};

const pipelinePayload: PipelinePayload[] = [
  { pipeline: "Scout", runs: 62 },
  { pipeline: "Ingress", runs: 82 },
  { pipeline: "Sentiment", runs: 62 },
  { pipeline: "Core", runs: 76 },
  { pipeline: "Egress", runs: 15 },
];

export function useDashboardHexChart() {
  const [pipelineData] = useState(pipelinePayload);

  return { pipelineData };
}
