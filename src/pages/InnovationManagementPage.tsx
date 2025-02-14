import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const InnovationManagementPage: React.FC = () => {
  const benefits = [
    {
      title: "Innovation Strategy",
      description: ["Strategic innovation planning"],
      icon: "/public/innovation-strategy.png",
    },
    {
      title: "Digital Transformation",
      description: ["Digital innovation solutions"],
      icon: "/public/digital-transform.png",
    },
    {
      title: "Change Management",
      description: ["Organizational change support"],
      icon: "/public/change.png",
    },
    {
      title: "Innovation Culture",
      description: ["Building innovative culture"],
      icon: "/public/culture.png",
    },
    {
      title: "Technology Adoption",
      description: ["New technology implementation"],
      icon: "/public/adoption.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Innovation & Change Management
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

export default InnovationManagementPage;
