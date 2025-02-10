import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

const AppRoutes: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Diğer sayfaları buraya ekleyeceğiz */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
