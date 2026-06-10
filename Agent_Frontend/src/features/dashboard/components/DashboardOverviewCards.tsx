import React from "react";
import type { DashboardOverviewCardsProps } from "../models/DashboardModels";
import DashboardAnalyticsCard from "./DashboardAnalyticsCard";
import EmptyDataState from "../../../components/ui/EmptyDataState.tsx";

export default function DashboardOverviewCards({
  cardData,
}: DashboardOverviewCardsProps): React.JSX.Element {
  if (!cardData?.length) {
    return <EmptyDataState />;
  }

  return (
    <section className="li-section-sm li-grid li-grid-4">
      {cardData.map((data) => (
        <DashboardAnalyticsCard key={data.id} {...data} />
      ))}
    </section>
  );
}
