import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const MedTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Medical Devices",
      description: ["Smart medical device solutions"],
      icon: "/public/medical-devices.png",
    },
    {
      title: "Clinical Systems",
      description: ["Clinical management platforms"],
      icon: "/public/clinical.png",
    },
    {
      title: "Research Tools",
      description: ["Medical research applications"],
      icon: "/public/research.png",
    },
    {
      title: "Healthcare IoT",
      description: ["Connected healthcare solutions"],
      icon: "/public/healthcare-iot.png",
    },
    {
      title: "Medical Analytics",
      description: ["Healthcare data insights"],
      icon: "/public/medical-analytics.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                MedTech
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

export default MedTechPage;
