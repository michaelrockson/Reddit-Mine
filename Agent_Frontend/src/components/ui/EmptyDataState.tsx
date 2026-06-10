import React from "react";
import { ImDatabase } from "react-icons/im";

export default function EmptyDataState(): React.JSX.Element {
  return (
    <div className="li-empty-state-card">
      <div className="li-empty-state">
        <ImDatabase className="li-empty-state-icon" />
        <p className="li-empty-state-title">No Data Available</p>
        <p className="li-empty-state-sub">There's no data to show right now.</p>
      </div>
    </div>
  );
}
