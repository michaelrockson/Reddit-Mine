import { useState } from "react";
import type { PipelineAnalyticsPayload } from "../models/PipelineModels.ts";

const analyticsData: PipelineAnalyticsPayload[] = [
  {
    id: 0,
    tag: "Last Run",
    data: "3 days ago",
  },
  {
    id: 1,
    tag: "Run-Duration",
    data: "12m 52s",
  },
  {
    id: 2,
    tag: "Status",
    data: "Success",
  },
  {
    id: 3,
    tag: "Outputs",
    data: "123",
  },
];

export function usePipelineAnalytics() {
  const [analyticsPayload] = useState(analyticsData);

  return { analyticsPayload };
}
