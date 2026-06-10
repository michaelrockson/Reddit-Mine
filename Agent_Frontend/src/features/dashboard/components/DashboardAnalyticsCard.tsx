import React from "react";
import type { AnalyticsCardsPayload } from "../models/DashboardModels.ts";

export default function DashboardAnalyticsCard({
  tag,
  data,
  trend,
  trendDirection = "neutral",
}: AnalyticsCardsPayload): React.JSX.Element {
  const trendClass =
    trendDirection === "up"
      ? "li-stat-trend li-stat-trend-up"
      : trendDirection === "down"
        ? "li-stat-trend li-stat-trend-down"
        : "li-stat-trend li-stat-trend-neutral";

  return (
    <div className="li-card">
      <p className="li-text-sm li-text-secondary li-mb-md">{tag}</p>

      <h1 className="li-h1 li-mb-sm">{data}</h1>

      {trend !== undefined && (
        <span className={trendClass}>
          {trendDirection === "down" ? "-" : "+"}
          {Math.abs(trend)}%{" "}
          <span style={{ fontWeight: 400, opacity: 0.7 }}>vs last month</span>
        </span>
      )}
    </div>
  );
}
