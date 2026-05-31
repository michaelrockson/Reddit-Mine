import React from "react";

export default function DashboardHistoryCard(): React.JSX.Element {
  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        <p className="li-text-sm li-text-secondary li-mb-sm">Agent Health</p>
        <h1 className="li-mb-md">92.05 /100</h1>
        <span className="li-stat li-stat-delta">+12%</span>
      </div>
    </section>
  );
}
