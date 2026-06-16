import React from "react";
import { MdArrowDownward } from "react-icons/md";

export default function ReportsHeader(): React.JSX.Element {
  return (
    <div className="li-flex li-justify-between">
      <div className="li-mb-lg">
        <h2 className="li-mb-sm">Reports & Analysis</h2>
        <p className="li-text-lg li-text-muted">
          Aggregated across 5 pipelines • last updated 3 weeks ago
        </p>
      </div>
      <div>
        <button className="li-btn li-btn-lg li-btn-secondary">
          <MdArrowDownward /> Export CSV
        </button>
      </div>
    </div>
  );
}
