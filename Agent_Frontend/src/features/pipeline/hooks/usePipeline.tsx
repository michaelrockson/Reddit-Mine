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
    type: "input",
    position: { x: 250, y: 0 },
    data: { label: "Reddit Scraper" },
  },
  {
    id: "2",
    position: { x: 100, y: 150 },
    data: { label: "Filter by Keyword" },
  },
  {
    id: "3",
    position: { x: 400, y: 150 },
    data: { label: "Sentiment Analyzer" },
  },
  {
    id: "4",
    position: { x: 100, y: 300 },
    data: { label: "Pain Point Extractor" },
  },
  {
    id: "5",
    position: { x: 400, y: 300 },
    data: { label: "Duplicate Filter" },
  },
  {
    id: "6",
    type: "output",
    position: { x: 250, y: 450 },
    data: { label: "Save to Database" },
  },
];

const initialEdges: PipelineEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e5-6", source: "5", target: "6" },
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
