import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";
import MainLayout from "../layouts/MainLayout";
import UzmanlikAlanlarimizPage from "../pages/UzmanlikAlanlarimizPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main page  */}
          <Route path="/" element={<MainPage />} />

          {/* Hakkımızda page */}
          <Route path="/hakkimizda" element={<HakkimizdaPage />} />

          <Route path="/uzmanlik-alanlarimiz" element={<UzmanlikAlanlarimizPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
