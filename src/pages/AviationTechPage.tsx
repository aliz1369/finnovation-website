import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const AviationTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Flight Management",
      description: ["Advanced flight operations systems"],
      icon: "/public/flight.png",
    },
    {
      title: "Maintenance",
      description: ["Predictive maintenance solutions"],
      icon: "/public/maintenance.png",
    },
    {
      title: "Safety Systems",
      description: ["Aviation safety monitoring"],
      icon: "/public/safety.png",
    },
    {
      title: "Passenger Experience",
      description: ["Digital passenger services"],
      icon: "/public/passenger.png",
    },
    {
      title: "Operations Analytics",
      description: ["Aviation operations optimization"],
      icon: "/public/aviation-analytics.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                AviationTech
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

export default AviationTechPage;
