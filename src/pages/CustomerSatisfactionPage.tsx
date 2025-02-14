import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const CustomerSatisfactionPage: React.FC = () => {
  const benefits = [
    {
      title: "Customer Experience",
      description: ["Enhanced customer journey"],
      icon: "/public/customer-exp.png",
    },
    {
      title: "Feedback Management",
      description: ["Customer feedback analysis"],
      icon: "/public/feedback.png",
    },
    {
      title: "Service Quality",
      description: ["Service quality improvement"],
      icon: "/public/service-quality.png",
    },
    {
      title: "Customer Analytics",
      description: ["Customer behavior analysis"],
      icon: "/public/customer-analytics.png",
    },
    {
      title: "Loyalty Programs",
      description: ["Customer retention solutions"],
      icon: "/public/loyalty.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Customer Satisfaction
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

export default CustomerSatisfactionPage;
