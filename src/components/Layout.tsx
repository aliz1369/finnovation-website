import React from "react";
import Header from "./HeaderMenu"; // Header bileşeninin yolunu kontrol edin
import Footer from "./Footer/Footer.tsx"; // Footer bileşenini ekliyoruz

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main style={{ paddingBottom: "60px" }}>
        {/* Dinamik içerik buraya gelir */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
