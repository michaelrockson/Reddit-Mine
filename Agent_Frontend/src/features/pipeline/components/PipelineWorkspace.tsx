import React from "react";
import { usePipeline } from "../hooks/usePipeline.tsx";
import { ReactFlow } from "@xyflow/react";

export default function PipelineWorkspace(): React.JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange } = usePipeline();
  return (
    <div className="li-pipeline-workspace li-card">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
