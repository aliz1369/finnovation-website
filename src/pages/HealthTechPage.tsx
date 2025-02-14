import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const HealthTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Telemedicine",
      description: ["Remote healthcare solutions"],
      icon: "/public/telemedicine.png",
    },
    {
      title: "Patient Care",
      description: ["Digital patient management systems"],
      icon: "/public/patient.png",
    },
    {
      title: "Health Analytics",
      description: ["Healthcare data analytics"],
      icon: "/public/health-analytics.png",
    },
    {
      title: "Medical Records",
      description: ["Electronic health record management"],
      icon: "/public/records.png",
    },
    {
      title: "AI Diagnostics",
      description: ["AI-powered diagnostic tools"],
      icon: "/public/ai-health.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                HealthTech
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

export default HealthTechPage;
