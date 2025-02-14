import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const DataAnalyticsPage: React.FC = () => {
  const benefits = [
    {
      title: "Predictive Analytics",
      description: ["Advanced predictive modeling"],
      icon: "/public/predictive.png",
    },
    {
      title: "Big Data Processing",
      description: ["Large-scale data processing solutions"],
      icon: "/public/big-data.png",
    },
    {
      title: "Machine Learning",
      description: ["AI & ML implementation"],
      icon: "/public/ml.png",
    },
    {
      title: "Data Visualization",
      description: ["Interactive data visualization"],
      icon: "/public/visualization.png",
    },
    {
      title: "Real-time Analytics",
      description: ["Real-time data analysis"],
      icon: "/public/real-time.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Data Analytics
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

export default DataAnalyticsPage;
