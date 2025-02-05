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

// Yeni sayfalar
import OrganizasyonPage from "../pages/OrganizasyonPage";
import VeriAnalitigiPage from "../pages/VeriAnalitigiPage";
import IsZekasiPage from "../pages/IsZekasiPage";
import YasalRaporlamaPage from "../pages/YasalRaporlamaPage";
import ProjelerPage from "../pages/ProjelerPage";
import KariyerPage from "../pages/KariyerPage";

const AppRoutes: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Ana sayfa */}
            <Route path="/" element={<MainPage />} />

            {/* Biz Kimiz alt menü yolları */}
            <Route path="/hakkimizda" element={<HakkimizdaPage />} />
            <Route path="/degerlerimiz" element={<ValuesPage />} />
            <Route path="/organizasyon" element={<OrganizasyonPage />} />
            <Route path="/surdurulebilirlik" element={<SustainabilityPage />} />

            {/* Uzmanlık Alanlarımız */}
            <Route path="/uzmanlik-alanlarimiz" element={<UzmanlikAlanlarimizPage />} />

            {/* Danışmanlık altındaki 3. seviye yollar */}
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/hazine"
                element={<HazinePage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/nakit-yonetimi"
                element={<NakitYonetimiPage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/krediler"
                element={<KredilerPage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/risk-yonetimi"
                element={<RiskYonetimiPage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/veri-mimarisi"
                element={<VeriMimarisi />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/veri-analitigi"
                element={<VeriAnalitigiPage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/is-zekasi"
                element={<IsZekasiPage />}
            />
            <Route
                path="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/yasal-raporlama"
                element={<YasalRaporlamaPage />}
            />

            <Route path="/surec-izleme" element={<Surecizleme />} />
            <Route path="/proje-bazli-entegrasyon" element={<ProjeEntegrasyon />} />
            <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />

            {/* FinAcademy */}
            <Route path="/finacademy" element={<FinAcademyPage />} />

            {/* Projeler */}
            <Route path="/projeler/dijital-donusum" element={<DigitalDonusum />} />
            <Route path="/projeler/egitim-danismanligi" element={<EgitimDanismanligiPage />} />
            <Route path="/projeler" element={<ProjelerPage />} />

            {/* Kariyer */}
            <Route path="/kariyer" element={<KariyerPage />} />

            {/* Bize Ulaşın */}
            <Route path="/bize-ulasin" element={<BizeUlasinPage />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default AppRoutes;

