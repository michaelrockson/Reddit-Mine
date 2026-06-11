import React from "react";
import { usePipeline } from "../hooks/usePipeline.tsx";
import { Background, ConnectionLineType, ReactFlow } from "@xyflow/react";
import PipelineNode from "./PipelineNode.tsx";
import { MdCheckCircle } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";

const nodeTypes = {
  custom: PipelineNode,
};

export default function AgentPipeline(): React.JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange } = usePipeline();

  return (
    <div className="li-pipeline-workspace li-flex-col li-card">
      <div className="li-flex li-justify-between">
        <div className="li-mb-lg">
          <h3 className="li-mb-sm">Agent Pipelines</h3>
          <p className="li-text-xs li-text-muted">
            Pipelines managed by agent services
          </p>
        </div>
        <div>
          <button className="li-btn li-btn-primary">Run All Pipelines</button>
        </div>
      </div>

      <div className="li-flex-no-gap li-items-start li-gap-xxl li-mb-lg li-mt-md">
        <div className="li-flex-col">
          <p className="li-text-muted li-text-secondary li-mb-sm">Last Run:</p>
          <p className="li-text-secondary li-flex li-items-center li-gap-sm">
            <IoCalendarNumberOutline size={18} />
            3days ago
          </p>
        </div>
        <div className="li-flex-col li-justify-between">
          <p className="li-text-muted li-text-secondary li-mb-sm">Duration:</p>
          <p className="li-text-secondary li-flex li-items-center li-gap-sm">
            <LuClock5 size={18} />
            12m 52s
          </p>
        </div>
        <div className="li-flex-col li-justify-between">
          <p className="li-text-muted li-text-secondary li-mb-sm">
            Pipeline Status:
          </p>
          <p className="li-text-secondary li-stat-trend-up li-flex li-items-center li-gap-sm">
            <MdCheckCircle size={18} /> Succeeded
          </p>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        connectionLineType={ConnectionLineType.Straight}
        defaultEdgeOptions={{
          style: { stroke: "#808080", strokeWidth: 4 },
          type: "smoothstep",
          animated: true,
        }}
        style={{ width: "100%", height: 360, minHeight: 360 }}
        className="li-text-secondary li-card"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
