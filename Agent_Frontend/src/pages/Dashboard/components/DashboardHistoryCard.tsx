import React from "react";
import { useDashboardHistoryCard } from "../hooks/useDashboardHistoryCard.tsx";

export default function DashboardHistoryCard(): React.JSX.Element {
  const { record } = useDashboardHistoryCard();
  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        <h3 className="li-mb-md">Recent Findings</h3>

        <div className="li-table-container">
          <table className="li-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {record.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.content}</td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
