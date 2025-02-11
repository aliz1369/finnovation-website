import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import JobsPage from "../pages/JobsPage";
import ProjeYonetimi from "../pages/ProjeYonetimi";
import SurecIzleme from "../pages/SurecIzleme"; // Süreç İzleme sayfasını import et
import FinAcademyPage from "../pages/FinAcademyPage";
import Culture from "../pages/Culture";
import WorkingInFinnovation from "../pages/WorkingInFinnovation";

const AppRoutes: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Diğer sayfaları buraya ekleyeceğiz */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/careers" element={<JobsPage />} />
          <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />
          <Route path="/academy" element={<FinAcademyPage />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/workingInFinnovation" element={<WorkingInFinnovation />} />
        </Routes>
      </Router>
  )
}
export default AppRoutes;
