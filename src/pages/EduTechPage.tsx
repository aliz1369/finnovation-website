import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const EduTechPage: React.FC = () => {
  const benefits = [
    {
      title: "E-Learning",
      description: ["Digital learning management systems"],
      icon: "/public/elearning.png",
    },
    {
      title: "Interactive Content",
      description: ["Interactive educational content creation"],
      icon: "/public/interactive.png",
    },
    {
      title: "Student Analytics",
      description: ["Learning progress tracking and analysis"],
      icon: "/public/student-analytics.png",
    },
    {
      title: "Virtual Classroom",
      description: ["Remote learning solutions"],
      icon: "/public/virtual-classroom.png",
    },
    {
      title: "Assessment Tools",
      description: ["Digital assessment and evaluation systems"],
      icon: "/public/assessment.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                EduTech
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

export default EduTechPage;
