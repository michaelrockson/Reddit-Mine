import React from "react";
import DashboardLineChart from "./DashboardLineChart.tsx";
import DashboardHexChart from "./DashboardHexChart.tsx";

export default function DashboardOverviewCharts(): React.JSX.Element {
  return (
    <section className="li-section-sm li-grid li-grid-take-5">
      <DashboardLineChart />
      <DashboardHexChart />
    </section>
  );
}
