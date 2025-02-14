import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const EnergyTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Smart Grid Solutions",
      description: ["Intelligent energy distribution systems"],
      icon: "/public/smart-grid.png",
    },
    {
      title: "Energy Analytics",
      description: ["Advanced energy consumption analysis"],
      icon: "/public/energy-analytics.png",
    },
    {
      title: "Renewable Integration",
      description: ["Renewable energy system integration"],
      icon: "/public/renewable.png",
    },
    {
      title: "Efficiency Management",
      description: ["Energy efficiency optimization"],
      icon: "/public/efficiency.png",
    },
    {
      title: "IoT Solutions",
      description: ["IoT-based energy monitoring systems"],
      icon: "/public/iot.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                EnergyTech
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

export default EnergyTechPage;
