import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const ProjectManagementPage: React.FC = () => {
  const benefits = [
    {
      title: "Planning & Strategy",
      description: ["Comprehensive project planning"],
      icon: "/public/planning.png",
    },
    {
      title: "Resource Management",
      description: ["Efficient resource allocation"],
      icon: "/public/resource.png",
    },
    {
      title: "Risk Management",
      description: ["Project risk assessment"],
      icon: "/public/risk.png",
    },
    {
      title: "Progress Tracking",
      description: ["Real-time project monitoring"],
      icon: "/public/tracking.png",
    },
    {
      title: "Quality Assurance",
      description: ["Project quality control"],
      icon: "/public/quality-control.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Project Management
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

export default ProjectManagementPage;
