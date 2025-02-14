import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const PageTemplate: React.FC = () => {
  const benefits = [
    {
      title: "Flexible Working",
      description: ["Maintain work-life balance with hybrid working model"],
      icon: "/public/collab.png",
    },
    {
      title: "Continuous Development",
      description: ["Develop yourself with regular training and workshops"],
      icon: "/public/collab.png",
    },
    {
      title: "Health Insurance",
      description: ["You and your family are secure with private health insurance"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Social Activities",
      description: ["Regular team activities and social events"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Technology Support",
      description: ["All technological equipment support you need"],
      icon: "/public/activeuser.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                [Page Title]
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

export default PageTemplate;
