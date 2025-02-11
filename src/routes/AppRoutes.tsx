import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import SurecIzleme from "../pages/SurecIzleme"; // Süreç İzleme sayfasını import et

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/surec-izleme" element={<SurecIzleme />} /> {/* Yeni eklenen route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

