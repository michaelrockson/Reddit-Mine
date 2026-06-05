import { useState } from "react";

type Record = {
  id: number;
  name: string;
  content: string;
  date: string;
};

const tableData: Record[] = [
  {
    id: 0,
    name: "Suspicious Login Attempt",
    content: "Multiple failed attempts from unknown IP",
    date: "04-06-2026",
  },
  {
    id: 1,
    name: "API Rate Limit Exceeded",
    content: "Service API hit threshold of 1000 req/min",
    date: "03-06-2026",
  },
  {
    id: 2,
    name: "New Device Registered",
    content: "User admin authenticated from new device",
    date: "01-06-2026",
  },
  {
    id: 3,
    name: "New Rust Package",
    content: "New Rust package for something interesting",
    date: "01-06-2026",
  },
];

export function useDashboardHistoryCard() {
  const [record] = useState(tableData);

  return { record };
}
