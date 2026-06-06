import { dashboardService } from "../services/DashboardService.ts";
import type { DashboardData } from "../models/DashboardModels.ts";

export async function fetchDashboardData(): Promise<DashboardData> {
  const [analyticsCardData, pipelineData, agentRecords, agentPayload] =
    await Promise.all([
      dashboardService.getAnalyticsCardData(),
      dashboardService.getPipelineData(),
      dashboardService.getAgentRecords(),
      dashboardService.getLineChartData(),
    ]);
  return { analyticsCardData, pipelineData, agentRecords, agentPayload };
}

export async function refetchAnalyticsCards() {
  return dashboardService.getAnalyticsCardData();
}

export async function refetchPipelineData() {
  return dashboardService.getPipelineData();
}

export async function refetchAgentRecords() {
  return dashboardService.getAgentRecords();
}

export async function refetchAgentPayload() {
  return dashboardService.getLineChartData();
}
