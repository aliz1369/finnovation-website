import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const CashManagementPage: React.FC = () => {
  const benefits = [
    {
      title: "Cash Flow Optimization",
      description: ["Efficient cash flow management and forecasting"],
      icon: "/public/cash-flow.png",
    },
    {
      title: "Working Capital",
      description: ["Optimized working capital management"],
      icon: "/public/capital.png",
    },
    {
      title: "Payment Solutions",
      description: ["Integrated payment and collection systems"],
      icon: "/public/payment.png",
    },
    {
      title: "Bank Relations",
      description: ["Strategic banking relationship management"],
      icon: "/public/bank.png",
    },
    {
      title: "Digital Integration",
      description: ["Advanced cash management technologies"],
      icon: "/public/digital.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Cash Management
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

export default CashManagementPage;
