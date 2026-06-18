import React from "react";

export default function SettingsHeader(): React.JSX.Element {
  return (
    <div className="li-flex li-justify-between">
      <div className="">
        <h2 className="li-mb-sm">Agent Settings</h2>
        <p className="li-text-lg li-text-muted">
          Configure models, model behaviour,schedules and delivery outlets
        </p>
      </div>
      <div>
        <button className="li-btn li-btn-lg li-btn-secondary">
          Save Settings
        </button>
      </div>
    </div>
  );
}
