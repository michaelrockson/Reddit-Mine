import { useCallback, useState } from "react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react";
import type { PipelineEdge, PipelineNode } from "../models/PipelineModels.ts";

const initialNodes: PipelineNode[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 200 },
    data: { label: "Scout" },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 50 },
    data: { label: "Scrape" },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 800, y: 300 },
    data: { label: "Analyze" },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 1200, y: 50 },
    data: { label: "Process" },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 1600, y: 300 },
    data: { label: "Deliver" },
  },
];

const initialEdges: PipelineEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
];

export function usePipeline() {
  const [nodes, setNodes] = useState<PipelineNode[]>(initialNodes);
  const [edges, setEdges] = useState<PipelineEdge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange<PipelineNode>[]) =>
      setNodes((prev) => applyNodeChanges(changes, prev)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<PipelineEdge>[]) =>
      setEdges((prev) => applyEdgeChanges(changes, prev)),
    [],
  );

  return { nodes, edges, onNodesChange, onEdgesChange };
}
