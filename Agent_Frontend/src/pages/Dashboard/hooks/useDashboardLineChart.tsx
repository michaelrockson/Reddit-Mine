import {useState} from "react";

type AgentPayload = {
    month: string;
    runs: number;
}

const agentPayload: AgentPayload[] = [
    { month: "Jan", runs: 45 },
    { month: "Feb", runs: 60 },
    { month: "March", runs: 72 },
    { month: "April", runs: 14 },
    { month: "May", runs: 35 },
    { month: "June", runs: 92 },
    { month: "July", runs: 140 },
    { month: "August", runs: 45 },
];

export function useDashboardLineChart() {
    const [agentData] =  useState(agentPayload);

    return{agentData};
}