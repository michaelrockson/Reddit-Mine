import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useReportSubredditChart from "../hooks/useReportSubredditChart.tsx";
import type { TimePeriod } from "../../dashboard/models/DashboardModels.ts";
import TimeFilter from "../../../components/ui/TimeFilter.tsx";

const AXIS_STYLE = {
  fontSize: 12,
  fill: "#62666d",
  fontFamily: "Inter, sans-serif",
};

export default function ReportSubredditChart(): React.JSX.Element {
  const { reportsChartData } = useReportSubredditChart();
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("6months");

  return (
    <div className="li-card">
      <div className="li-flex li-justify-between li-items-center li-mb-xl">
        <div>
          <h3 style={{ marginBottom: 2 }}>Active Subreddits</h3>
          <p className="li-text-xs li-text-muted">
            Key selected subreddits for monitoring
          </p>
        </div>
        <TimeFilter value={timePeriod} onChange={setTimePeriod} />
      </div>

      <ResponsiveContainer width="100%" aspect={2.2}>
        <BarChart
          data={reportsChartData}
          margin={{ top: 4, right: 4, bottom: 0, left: -16 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
          />

          <XAxis
            dataKey="subreddit"
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
            cursor={{
              stroke: "rgba(255,255,255,0.08)",
              strokeWidth: 1,
              fill: "transparent",
            }}
          />

          <Bar
            dataKey="posts"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            activeBar={false}
          />
          <Bar
            dataKey="problems"
            fill="#82ca9d"
            radius={[10, 10, 0, 0]}
            activeBar={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
