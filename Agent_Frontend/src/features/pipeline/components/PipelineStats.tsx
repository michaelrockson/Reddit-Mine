import React from "react";

export default function PipelineStats(): React.JSX.Element {
  return (
    <div className="li-card li-flex-no-gap li-items-start li-gap-xxl li-mb-lg">
      <div className="li-flex-col">
        <p className="li-text-muted li-text-secondary li-mb-sm">Last Run</p>
        <p className="li-items-center li-gap-sm">3 days ago</p>
      </div>

      <div className="li-flex-col li-justify-between">
        <p className="li-text-muted li-text-secondary li-mb-sm">Duration</p>
        <p className="li-items-center li-gap-sm">12m 52s</p>
      </div>

      <div className="li-flex-col li-justify-between li-mb-2xl">
        <p className="li-text-muted li-text-secondary li-mb-sm">Status</p>
        <p className="li-stat-trend-up li-items-center li-gap-sm">Succeeded</p>
      </div>
    </div>
  );
}
