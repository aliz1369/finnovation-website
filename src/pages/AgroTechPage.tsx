import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const AgroTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Smart Farming",
      description: ["Precision agriculture solutions"],
      icon: "/public/smart-farming.png",
    },
    {
      title: "Crop Management",
      description: ["Advanced crop monitoring systems"],
      icon: "/public/crop.png",
    },
    {
      title: "Supply Chain",
      description: ["Agricultural supply chain optimization"],
      icon: "/public/supply-chain.png",
    },
    {
      title: "Weather Analytics",
      description: ["Predictive weather analysis"],
      icon: "/public/weather.png",
    },
    {
      title: "Resource Planning",
      description: ["Efficient resource management"],
      icon: "/public/resource.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                AgroTech
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

export default AgroTechPage;
