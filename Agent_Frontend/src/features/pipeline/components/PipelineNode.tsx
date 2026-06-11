import { Handle, type NodeProps, Position } from "@xyflow/react";
import type { PipelineNode } from "../models/PipelineModels.ts";
import { MdCheckCircle } from "react-icons/md";

export default function PipelineNode({
  data,
  selected,
}: NodeProps<PipelineNode>) {
  return (
    <div className={`custom-node ${selected ? "selected" : ""}`}>
      <Handle type="target" position={Position.Left} />

      <div className="node-content li-card-mute">
        <div className="li-flex li-justify-between">
          <div className="li-flex">
            <MdCheckCircle size={32} className="li-stat-trend-up" />
            <h3 className="li-h3">{data.label}</h3>
          </div>
        </div>

        <div className="li-flex-col">
          <div className="li-flex-xxl li-justify-between li-mt-md li-px-sm li-py-sm">
            <p className="li-text-muted li-text-lg">Start time</p>
            <p className="li-text-muted li-text-lg">3m 15s</p>
          </div>
          <div className="li-flex-xxl li-justify-between li-mt-md li-px-sm li-py-sm">
            <p className="li-text-muted li-text-lg">Process time</p>
            <p className="li-text-muted li-text-lg">3m 15s</p>
          </div>
          <div className="li-flex-xxl li-justify-between li-mt-md li-px-sm li-py-sm">
            <p className="li-text-muted li-text-lg">Total Run Time</p>
            <p className="li-text-muted li-text-lg">3m 15s</p>
          </div>
        </div>

        <button className="li-btn li-btn-secondary li-w-full li-mt-lg li-btn-lg">
          Run Stage
        </button>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
