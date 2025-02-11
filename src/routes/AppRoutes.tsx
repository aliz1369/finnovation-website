import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";

const AppRoutes: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/hakkimizda" element={<HakkimizdaPage />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
