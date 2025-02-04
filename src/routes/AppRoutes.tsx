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
import DigitalDonusum from "../pages/DigitalDonusum";
import VeriMimarisi from "../pages/VeriMimarisi";

import HazinePage from "../pages/HazinePage";
import NakitYonetimiPage from "../pages/NakitYonetimiPage";
import KredilerPage from "../pages/KredilerPage";
import RiskYonetimiPage from "../pages/RiskYonetimiPage";
import BizeUlasinPage from "../pages/BizeUlasinPage";
import EgitimDanismanligiPage from "../pages/EgitimDanismanligiPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main page  */}
          <Route path="/" element={<MainPage />} />

          {/* Hakkımızda page */}
          <Route path="/hakkimizda" element={<HakkimizdaPage />} />
          <Route
            path="/uzmanlik-alanlarimiz"
            element={<UzmanlikAlanlarimizPage />}
          />
          <Route path="/degerlerimiz" element={<ValuesPage />} />
          <Route path="/surdurulebilirlik" element={<SustainabilityPage />} />
          <Route path="/finacademy" element={<FinAcademyPage />} />
          <Route path="/surec-izleme" element={<Surecizleme />} />
          <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />
          <Route
            path="/proje-bazli-entegrasyon"
            element={<ProjeEntegrasyon />}
          />
          <Route
            path="/projeler/dijital-donusum"
            element={<DigitalDonusum />}
          />
          <Route path="/veri-mimarisi" element={<VeriMimarisi />} />
          <Route path="/kariyer/hazine" element={<HazinePage />} />
          <Route
            path="/kariyer/nakit-yonetimi"
            element={<NakitYonetimiPage />}
          />
          <Route path="/kariyer/krediler" element={<KredilerPage />} />
          <Route path="/kariyer/risk-yonetimi" element={<RiskYonetimiPage />} />
          <Route path="bize-ulasin" element={<BizeUlasinPage />} />
          <Route
            path="projeler/egitim-danismanligi"
            element={<EgitimDanismanligiPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
