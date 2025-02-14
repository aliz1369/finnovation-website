import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const RiskManagementPage: React.FC = () => {
  const benefits = [
    {
      title: "Risk Assessment",
      description: ["Comprehensive risk identification and analysis"],
      icon: "/public/risk-assessment.png",
    },
    {
      title: "ALM Solutions",
      description: ["Asset-liability management strategies"],
      icon: "/public/alm.png",
    },
    {
      title: "Monitoring Systems",
      description: ["Real-time risk monitoring and reporting"],
      icon: "/public/monitoring.png",
    },
    {
      title: "Compliance",
      description: ["Regulatory compliance and reporting"],
      icon: "/public/compliance.png",
    },
    {
      title: "Risk Analytics",
      description: ["Advanced risk analytics and modeling"],
      icon: "/public/analytics.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Risk Management & ALM
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={benefits}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default RiskManagementPage;
