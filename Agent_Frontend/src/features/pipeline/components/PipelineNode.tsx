import { Handle, type NodeProps, Position } from "@xyflow/react";
import type { PipelineNode } from "../models/PipelineModels.ts";
import { MdCheckCircle } from "react-icons/md";
import { BsBox } from "react-icons/bs";

export default function PipelineNode({
  data,
  selected,
}: NodeProps<PipelineNode>) {
  return (
    <div className={`custom-node ${selected ? "selected" : ""}`}>
      <Handle type="target" position={Position.Left} />

      <div className="node-content li-card-mute" style={{ width: 340 }}>
        <div className="li-flex li-justify-between">
          <div className="li-flex-lg">
            <BsBox size={36} className="li-stat-trend-neutral" />
            <h2 className="li-h2">{data.label}</h2>
          </div>
        </div>

        <div className="li-flex-col">
          <div className="li-flex-xxl li-justify-between li-mt-md li-px-sm li-py-sm">
            <h3 className="li-text-muted li-h3">Status:</h3>
            <span className="li-text-muted li-text-lg li-flex li-stat-trend-up">
              <MdCheckCircle size={36} />
            </span>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
