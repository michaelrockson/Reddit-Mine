import React from "react";
import {
  ReportsHeader,
  ReportsSubredditChart,
} from "../features/reports/index.ts";

export default function ReportsPage(): React.JSX.Element {
  return (
    <section className="li-section-sm li-px-lg li-flex li-flex-col li-gap-lg li-h-full">
      <ReportsHeader />
      <ReportsSubredditChart />
    </section>
  );
}
