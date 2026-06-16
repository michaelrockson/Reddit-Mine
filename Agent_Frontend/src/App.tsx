import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage.tsx";
import PageContainer from "./layout/PageContainer.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import PipelinePage from "./pages/PipelinePage.tsx";
import "./App.css";
import ReportsPage from "./pages/ReportsPage.tsx";

export default function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<PageContainer />}>
          <Route index element={<DashboardPage />} />
          <Route path="pipeline" element={<PipelinePage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
