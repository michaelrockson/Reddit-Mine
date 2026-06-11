import type { Edge, Node } from "@xyflow/react";

export type PipelineNode = Node<{ label: string }>;
export type PipelineEdge = Edge;

export type PipelineRecord = {
  id: number;
  pipeline: string;
  status?: string;
  duration: string;
};

export interface PipelineRunHistoryCardProps {
  record: PipelineRecord[];
}
