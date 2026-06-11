import React from "react";

export default function PipelineHeader(): React.JSX.Element {
  return (
    <div className="li-flex li-justify-between">
      <div className="li-mb-lg">
        <h2 className="li-mb-sm">Agent Pipelines</h2>
        <p className="li-text-lg li-text-muted">
          Five stage agent processing pipeline
        </p>
      </div>
      <div>
        <button className="li-btn li-btn-lg li-btn-secondary">
          Run All Pipelines
        </button>
      </div>
    </div>
  );
}
