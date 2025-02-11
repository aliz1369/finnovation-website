import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import JobsPage from "../pages/JobsPage";
import ProjeYonetimi from "../pages/ProjeYonetimi";
import SurecIzleme from "../pages/SurecIzleme";
import FinAcademyPage from "../pages/FinAcademyPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/careers" element={<JobsPage />} />
        <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />
        <Route path="/surec-izleme" element={<SurecIzleme />} />
        <Route path="/academy" element={<FinAcademyPage />} />
        <Route path="/hakkimizda" element={<HakkimizdaPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
