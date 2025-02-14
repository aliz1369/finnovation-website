import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const TourismTechPage: React.FC = () => {
  const benefits = [
    {
      title: "Smart Booking",
      description: ["Intelligent reservation systems"],
      icon: "/public/booking.png",
    },
    {
      title: "Travel Analytics",
      description: ["Tourism data analysis and insights"],
      icon: "/public/travel-analytics.png",
    },
    {
      title: "Virtual Tours",
      description: ["Virtual and augmented reality solutions"],
      icon: "/public/virtual-tour.png",
    },
    {
      title: "Customer Experience",
      description: ["Digital customer experience management"],
      icon: "/public/customer-exp.png",
    },
    {
      title: "Travel Management",
      description: ["Integrated travel management systems"],
      icon: "/public/travel-management.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                TourismTech
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

export default TourismTechPage;
