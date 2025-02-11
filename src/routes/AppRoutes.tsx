import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";

// FinAcademy için eklediğimiz yeni sayfa
import FinAcademyPage from "../pages/FinAcademyPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />

        {/* Yeni FinAcademy rotası */}
        <Route path="/academy" element={<FinAcademyPage />} />

        {/* Gerekiyorsa diğer sayfaları da ekleyebilirsiniz */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
