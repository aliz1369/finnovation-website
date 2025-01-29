import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";
import MainLayout from "../layouts/MainLayout";
import UzmanlikAlanlarimizPage from "../pages/UzmanlikAlanlarimizPage";
import ValuesPage from "../pages/ValuesPage";
import SustainabilityPage from "../pages/SustainabilityPage";
import FinAcademyPage from "../pages/FinAcademyPage";
import Surecizleme from "../pages/Surecizleme";
import ProjeYonetimi from "../pages/ProjeYonetimi";
import ProjeEntegrasyon from "../pages/ProjeEntegrasyon";




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
          <Route path="/degerlerimiz" element={<ValuesPage />} />
          <Route path="/surdurulebilirlik" element={<SustainabilityPage />} />
          <Route path="/finacademy" element={<FinAcademyPage />} />
          <Route path="/surec-izleme" element={<Surecizleme />} />
          <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />
          <Route path="/proje-bazli-entegrasyon" element={<ProjeEntegrasyon />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
