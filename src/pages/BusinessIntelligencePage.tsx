import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const BusinessIntelligencePage: React.FC = () => {
  const benefits = [
    {
      title: "BI Reporting",
      description: ["Custom business intelligence reports"],
      icon: "/public/bi-reporting.png",
    },
    {
      title: "Dashboard Creation",
      description: ["Interactive business dashboards"],
      icon: "/public/dashboard.png",
    },
    {
      title: "KPI Monitoring",
      description: ["Key performance indicator tracking"],
      icon: "/public/kpi.png",
    },
    {
      title: "Data Discovery",
      description: ["Self-service data exploration"],
      icon: "/public/discovery.png",
    },
    {
      title: "Performance Analytics",
      description: ["Business performance analysis"],
      icon: "/public/performance.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Business Intelligence
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

export default BusinessIntelligencePage;
