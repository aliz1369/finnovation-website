
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route path="/" element={<MainPage />} />

        {/* Hakkımızda page */}
        <Route path="/hakkimizda" element={<HakkimizdaPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
