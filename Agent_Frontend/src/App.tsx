import LoginPage from "./pages/LoginPage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import DefaultLayout from "./components/layout/DefaultLayout.tsx";
import "./App.css";

export default function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}
