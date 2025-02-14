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
import SustainabilityPage from "../pages/SustainabilityPage";
import Culture from "../pages/Culture";
<<<<<<< HEAD
import WorkingInFinnovation from "../pages/WorkingInFinnovationPage";
import ProjelerPage from "../pages/ProjelerPage";
import BasvuruPage from "../pages/BasvuruPage";
import YetenekProgramlariPage from "../pages/YetenekProgramlariPage"; 
import CesitlilikAndKapsayicilikPage from "../pages/CesitlilikAndKapsayicilikPage";
=======
import WorkingInFinnovation from "../pages/WorkingInFinnovation";
import OrganizasyonPage from "../pages/OrganizasyonPage";
import ProjelerPage from "../pages/PageTemplate";
import CreditsPage from "../pages/CreditsPage";
import TreasuryPage from "../pages/TreasuryPage";
import CashManagementPage from "../pages/CashManagementPage";
import RiskManagementPage from "../pages/RiskManagementPage";
import EnergyTechPage from "../pages/EnergyTechPage";
import AgroTechPage from "../pages/AgroTechPage";
import HealthTechPage from "../pages/HealthTechPage";
import TourismTechPage from "../pages/TourismTechPage";
import EduTechPage from "../pages/EduTechPage";
import RetailTechPage from "../pages/RetailTechPage";
import AviationTechPage from "../pages/AviationTechPage";
import MedTechPage from "../pages/MedTechPage";
import DataArchitecturePage from "../pages/DataArchitecturePage";
import DataAnalyticsPage from "../pages/DataAnalyticsPage";
import BusinessIntelligencePage from "../pages/BusinessIntelligencePage";
import RegulatoryReportingPage from "../pages/RegulatoryReportingPage";
import ProcessMonitoringPage from "../pages/ProcessMonitoringPage";
import ProjectTechnologyPage from "../pages/ProjectTechnologyPage";
import ProjectManagementPage from "../pages/ProjectManagementPage";
import InnovationManagementPage from "../pages/InnovationManagementPage";
import CustomerSatisfactionPage from "../pages/CustomerSatisfactionPage";

>>>>>>> 6dcfdea8823f93e83da8825c9913d176cd5bf1b9
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
        <Route path="/about/organization" element={<OrganizasyonPage />} />
        {/* Services */}
        <Route
          path="/services/digital/management"
          element={<ProjeYonetimi />}
        />
        <Route path="/services/digital/management" element={<Culture />} />
        <Route path="/surec-izleme" element={<SurecIzleme />} />
        <Route path="/career/culture" element={<Culture />} />
        <Route path="/career/work-with-us" element={<WorkingInFinnovation />} />
        <Route path="/career/talent-programs" element={<YetenekProgramlariPage />} />
        <Route path="/career/diversity" element={<CesitlilikAndKapsayicilikPage />} />  
        <Route path="/project" element={<ProjelerPage />} />
<<<<<<< HEAD
        <Route path="/career/apply" element={<BasvuruPage />} />
=======
        <Route path="/about/sustainability" element={<SustainabilityPage />} />
        {/* Services */}
        <Route path="/services/fintech/credit" element={<CreditsPage />} />
        <Route path="/services/fintech/treasury" element={<TreasuryPage />} />
        <Route
          path="/services/fintech/cash-management"
          element={<CashManagementPage />}
        />
        <Route
          path="/services/fintech/risk-management"
          element={<RiskManagementPage />}
        />
        <Route path="/services/tech/energy" element={<EnergyTechPage />} />
        <Route path="/services/tech/agro" element={<AgroTechPage />} />
        <Route path="/services/tech/health" element={<HealthTechPage />} />
        <Route path="/services/tech/tourism" element={<TourismTechPage />} />
        <Route path="/services/tech/edu" element={<EduTechPage />} />
        <Route path="/services/tech/retail" element={<RetailTechPage />} />
        <Route path="/services/tech/aviation" element={<AviationTechPage />} />
        <Route path="/services/tech/med" element={<MedTechPage />} />
        <Route
          path="/services/data/architecture"
          element={<DataArchitecturePage />}
        />
        <Route
          path="/services/data/analytics"
          element={<DataAnalyticsPage />}
        />
        <Route
          path="/services/data/bi"
          element={<BusinessIntelligencePage />}
        />
        <Route
          path="/services/data/reporting"
          element={<RegulatoryReportingPage />}
        />
        <Route
          path="/services/digital/process"
          element={<ProcessMonitoringPage />}
        />
        <Route
          path="/services/digital/project-tech"
          element={<ProjectTechnologyPage />}
        />
        <Route
          path="/services/digital/management"
          element={<ProjectManagementPage />}
        />
        <Route
          path="/services/digital/innovation"
          element={<InnovationManagementPage />}
        />
        <Route
          path="/services/digital/customer-satisfaction"
          element={<CustomerSatisfactionPage />}
        />
>>>>>>> 6dcfdea8823f93e83da8825c9913d176cd5bf1b9
      </Routes>
    </Router>
  );
};

export default AppRoutes;






