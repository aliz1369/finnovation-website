import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
  );
};

export default App;
