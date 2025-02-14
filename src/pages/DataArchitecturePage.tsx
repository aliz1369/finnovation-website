import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const DataArchitecturePage: React.FC = () => {
  const benefits = [
    {
      title: "Data Modeling",
      description: ["Enterprise data modeling solutions"],
      icon: "/public/data-model.png",
    },
    {
      title: "Infrastructure Design",
      description: ["Scalable data infrastructure"],
      icon: "/public/infrastructure.png",
    },
    {
      title: "Data Integration",
      description: ["Seamless system integration"],
      icon: "/public/integration.png",
    },
    {
      title: "Data Governance",
      description: ["Comprehensive data governance"],
      icon: "/public/governance.png",
    },
    {
      title: "Security Framework",
      description: ["Data security architecture"],
      icon: "/public/security.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Data Architecture
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

export default DataArchitecturePage;
