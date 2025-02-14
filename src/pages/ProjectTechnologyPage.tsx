import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const ProjectTechnologyPage: React.FC = () => {
  const benefits = [
    {
      title: "System Integration",
      description: ["Seamless technology integration"],
      icon: "/public/integration.png",
    },
    {
      title: "Custom Solutions",
      description: ["Tailored technology solutions"],
      icon: "/public/custom.png",
    },
    {
      title: "Infrastructure",
      description: ["Robust technical infrastructure"],
      icon: "/public/infrastructure.png",
    },
    {
      title: "Digital Transformation",
      description: ["Technology modernization"],
      icon: "/public/transformation.png",
    },
    {
      title: "Technical Support",
      description: ["Ongoing technical assistance"],
      icon: "/public/support.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Project-Based Technology & System Management
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

export default ProjectTechnologyPage;
