import React from "react";
import { usePipeline } from "../hooks/usePipeline.tsx";
import { Background, ConnectionLineType, ReactFlow } from "@xyflow/react";
import PipelineNode from "./PipelineNode.tsx";

const nodeTypes = {
  custom: PipelineNode,
};

export default function PipelineBoard(): React.JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange } = usePipeline();

  return (
    <div className="li-pipeline-workspace li-flex-col li-card">
      <h3 className="li-h3 li-mb-lg">Pipeline Flow</h3>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
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
