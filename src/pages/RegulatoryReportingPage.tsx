import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const RegulatoryReportingPage: React.FC = () => {
  const benefits = [
    {
      title: "Compliance Reporting",
      description: ["Automated compliance reporting"],
      icon: "/public/compliance-report.png",
    },
    {
      title: "Regulatory Updates",
      description: ["Real-time regulatory tracking"],
      icon: "/public/regulatory.png",
    },
    {
      title: "Data Validation",
      description: ["Comprehensive data validation"],
      icon: "/public/validation.png",
    },
    {
      title: "Audit Support",
      description: ["Audit trail and documentation"],
      icon: "/public/audit.png",
    },
    {
      title: "Risk Reporting",
      description: ["Risk assessment reporting"],
      icon: "/public/risk-report.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Regulatory Reporting
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

export default RegulatoryReportingPage;
