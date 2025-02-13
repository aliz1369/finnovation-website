import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import JobsPage from "../pages/JobsPage";
import ProjeYonetimi from "../pages/ProjeYonetimi";
import FinAcademyPage from "../pages/FinAcademyPage";
import HakkimizdaPage from "../pages/HakkimizdaPage";
import SurecIzleme from "../pages/Surecizleme";
import ValuesPage from "../pages/ValuesPage";
import HazinePage from "../pages/HazinePage";
import SustainabilityPage from "../pages/SustainabilityPage";
import Culture from "../pages/Culture";
import WorkingInFinnovation from "../pages/WorkingInFinnovation";
import ProjelerPage from "../pages/ProjelerPage";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/careers" element={<JobsPage />} />
        <Route path="/academy" element={<FinAcademyPage />} />
        <Route path="/about" element={<HakkimizdaPage />} />
        <Route path="/about/about-us" element={<AboutUsPage />} />
        <Route path="/about/values" element={<ValuesPage />} />
        <Route path="/about/sustainability" element={<SustainabilityPage />} />
        {/* Services */}
        <Route path="/services/fintech/treasury" element={<HazinePage />} />
        <Route
          path="/services/digital/management"
          element={<ProjeYonetimi />}
        />
        <Route path="/services/digital/management" element={<Culture />} />
        <Route path="/surec-izleme" element={<SurecIzleme />} />
        <Route path="/career/culture" element={<Culture />} />
        <Route path="/career/work-with-us" element={<WorkingInFinnovation />} />
        <Route path="/project" element={<ProjelerPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
