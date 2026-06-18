import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useModelSettings } from "../hooks/useModelSettings";
import {
  CURATOR_DEFAULT_INSTRUCTIONS,
  MODEL_OPTIONS,
  SCOUT_DEFAULT_INSTRUCTIONS,
} from "../models/ModelSettings";

function Divider() {
  return <div className="model-settings-divider" />;
}

function Row({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="li-flex li-justify-between">
      <div>
        <h3 className="li-text-primary">{title}</h3>
        <p className="li-text-secondary li-mt-sm li-text-sm">{description}</p>
      </div>
      <div className="li-flex li-justify-end">{children}</div>
    </div>
  );
}

function InstructionsEditor({
  label,
  description,
  defaultValue,
}: {
  label: string;
  description: string;
  defaultValue: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const isEdited = value !== defaultValue;

  return (
    <div className="instructions-editor">
      <button
        onClick={() => setOpen((o) => !o)}
        className="li-flex li-w-full li-items-center li-justify-between li-btn-ghost model-settings-instructions-btn"
      >
        <div className="li-text-left">
          <div className="li-flex li-items-center li-gap-sm">
            <h3 className="li-text-primary">{label}</h3>
            {isEdited && (
              <p className="li-badge li-badge-warning model-settings-edited-badge">
                edited
              </p>
            )}
          </div>
          <p className="li-text-secondary li-mt-sm">{description}</p>
        </div>
        <ChevronDown
          size={18}
          className="li-text-secondary model-settings-instructions-icon"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div className="li-mt-md">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={8}
            className="li-input li-w-full model-settings-textarea"
          />
          <div className="li-flex li-justify-end li-gap-sm li-mt-sm">
            <button
              onClick={() => setValue(defaultValue)}
              disabled={!isEdited}
              className={`li-btn ${isEdited ? "li-btn-secondary" : "li-btn-ghost"}`}
              style={{ color: !isEdited ? "var(--li-text-muted)" : undefined }}
            >
              Reset to default
            </button>
            <button className="li-btn li-btn-primary">Save instructions</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ModelSettings() {
  const { model, setModel } = useModelSettings();

  return (
    <div>
      <div className="li-mx-auto">
        <div className="li-card">
          <h3 style={{ marginBottom: 2 }}>Model Settings</h3>
          <p className="li-text-sm li-mt-sm li-text-muted">
            Controls how the Reddit-Mine agent classifies and scores pain
            points.
          </p>

          <Divider />

          <Row
            title="Model"
            description="Used for classification and scoring at every pipeline step."
          >
            <div style={{ position: "relative", width: 280 }}>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="li-select li-w-full"
              >
                {MODEL_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </Row>

          <Divider />

          <InstructionsEditor
            label="Scout instructions"
            description="Guides how the Scout agent filters candidate pain points during the first phase."
            defaultValue={SCOUT_DEFAULT_INSTRUCTIONS}
          />

          <Divider />

          <InstructionsEditor
            label="Curator instructions"
            description="Guides how the Curator agent processes pain points."
            defaultValue={CURATOR_DEFAULT_INSTRUCTIONS}
          />
        </div>
      </div>
    </div>
  );
}
