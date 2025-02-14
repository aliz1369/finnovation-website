import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const CreditsPage: React.FC = () => {
  const benefits = [
    {
      title: "Expert Analysis",
      description: ["Comprehensive credit analysis and strategy development"],
      icon: "/public/analysis.png",
    },
    {
      title: "Risk Management",
      description: ["Advanced risk assessment and monitoring systems"],
      icon: "/public/risk.png",
    },
    {
      title: "Process Optimization",
      description: ["Streamlined credit application and approval processes"],
      icon: "/public/process.png",
    },
    {
      title: "Portfolio Management",
      description: ["Effective credit portfolio management solutions"],
      icon: "/public/portfolio.png",
    },
    {
      title: "Digital Integration",
      description: ["Modern digital credit management tools"],
      icon: "/public/digital.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Credits
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

export default CreditsPage;
