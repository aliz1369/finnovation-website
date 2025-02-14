import React from "react";
import MainLayout from "../layouts/MainLayout";
import OrganizationChart from "../components/OrganizationChart";

const OrganizasyonPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center pt-10">
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Organizasyon Şeması
            </h2>
          </div>
        </div>
      </section>
      <section className="pt-10 flex justify-center">
        <div className="mx-auto">
          <OrganizationChart />
        </div>
      </section>
      <section className="px-1  flex justify-center items-center pt-10">
        {/* Parent Container */}
        <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
          {}
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[300px] rounded-full"
              style={{
                // Radial gradient for an elliptical shape
                background:
                  "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
                // Increase or decrease blur to taste
                filter: "blur(100px)",
              }}
            />
          </div>

          {/* Text Content on top (z-10) */}
          <div className="text-center relative z-10">
            {/* Main Heading */}
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Ready to start your AI <br /> journey with us?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-lg text-gray-700">
              Simple, transparent pricing. No setup fees or contracts. <br />
              Try without a credit card, cancel anytime.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-6">
              {/* Explore Our Solutions Button */}
              <button
                className="px-8 py-4 bg-[#3277BC] text-white font-bold rounded-full
                     shadow-lg hover:bg-[#285b8f] flex items-center transition-transform
                     transform hover:scale-105"
              >
                Explore Our Solutions
                <span className="ml-2 text-xl">→</span>
              </button>

              {/* Book a Demo Button */}
              <button
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800
                     font-bold rounded-full shadow-md hover:bg-gray-100
                     hover:border-gray-400 flex items-center transition-transform
                     transform hover:scale-105"
              >
                <img src="/bd.png" alt="Demo Icon" className="h-5 w-5 mr-2" />
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default OrganizasyonPage;
