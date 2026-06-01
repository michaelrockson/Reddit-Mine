import React from "react";
import DashboardAnalyticsCard from "./DashboardAnalyticsCard.tsx";

export default function DashboardOverviewCards(): React.JSX.Element {
  return (
    <section className="li-section-sm li-grid li-grid-4">
      <DashboardAnalyticsCard />
      <DashboardAnalyticsCard />
      <DashboardAnalyticsCard />
      <DashboardAnalyticsCard />
    </section>
  );
}
