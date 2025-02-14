import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const ProcessMonitoringPage: React.FC = () => {
  const benefits = [
    {
      title: "Real-time Monitoring",
      description: ["Live process tracking and analysis"],
      icon: "/public/monitoring.png",
    },
    {
      title: "Performance Metrics",
      description: ["Key process performance indicators"],
      icon: "/public/metrics.png",
    },
    {
      title: "Process Optimization",
      description: ["Continuous improvement solutions"],
      icon: "/public/optimization.png",
    },
    {
      title: "Automation",
      description: ["Process automation capabilities"],
      icon: "/public/automation.png",
    },
    {
      title: "Quality Control",
      description: ["Process quality assurance"],
      icon: "/public/quality.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Process Monitoring & Development
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

export default ProcessMonitoringPage;
