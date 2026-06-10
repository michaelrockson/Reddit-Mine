import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type {
  DashboardLineChartProps,
  TimePeriod,
} from "../models/DashboardModels.ts";
import DashboardTimeFilter from "./DashboardTimeFilter.tsx";
import AgentActivityTooltip from "./AgentActivityTooltip.tsx";
import EmptyDataState from "../../../components/ui/EmptyDataState.tsx";

const AXIS_STYLE = {
  fontSize: 12,
  fill: "#62666d",
  fontFamily: "Inter, sans-serif",
};

export default function DashboardLineChart({
  agentData,
}: DashboardLineChartProps): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("6months");

  if (!agentData?.length) {
    return (
      <div className="li-card">
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Agent Activity</h3>
            <p className="li-text-xs li-text-muted">Run frequency over time</p>
          </div>
        </div>
        <EmptyDataState />
      </div>
    );
  }

  return (
    <div className="li-card">
      <div className="li-flex li-justify-between li-items-center li-mb-md">
        <div>
          <h3 style={{ marginBottom: 2 }}>Agent Activity</h3>
          <p className="li-text-xs li-text-muted">Run frequency over time</p>
        </div>
        <DashboardTimeFilter value={timePeriod} onChange={setTimePeriod} />
      </div>

      <ResponsiveContainer width="100%" aspect={2.2}>
        <AreaChart
          data={agentData}
          margin={{ top: 4, right: 4, bottom: 0, left: -16 }}
        >
          <defs>
            <linearGradient id="agentRunsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#27a644" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#27a644" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
          />

          <XAxis
            dataKey="month"
            tick={AXIS_STYLE}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis
            tick={AXIS_STYLE}
            axisLine={false}
            tickLine={false}
            width={36}
          />

          <Tooltip
            content={<AgentActivityTooltip />}
            cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }}
          />

          <Area
            type="monotone"
            dataKey="runs"
            stroke="#808080"
            strokeWidth={2}
            fill="#d3d3d3"
            fillOpacity={0.12}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#808080",
              stroke: "#e0e6ec",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
