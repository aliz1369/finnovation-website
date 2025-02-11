import React from "react";

const Hero: React.FC = () => {
  return (
    // Header 16px (h-16) yer kaplıyor, altına boşluk bırakalım:
    <section className="pt-16 w-full bg-white">
      {/* w-full yaparak büyük ekranlarda da tam genişlik */}
      <div className="w-full px-4 sm:px-6 lg:px-8 
                      flex flex-col md:flex-row items-center justify-between 
                      py-10">

        {/* Sol Blok */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-black font-bold text-4xl sm:text-5xl md:text-6xl">
            Stratejinizi Gerçeğe Dönüştürüyoruz
          </h1>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            Yenilikçi BT çözümleri ile iş sürekliliğinizi sağlıyoruz.
          </p>
        </div>

        {/* Sağ Blok */}
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Empowering businesses through data-driven insights and automation 
            to achieve unparalleled growth. We build to revolutionize industries 
            and improve productivity.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row 
                          space-y-4 sm:space-y-0 sm:space-x-4 
                          justify-center md:justify-start">
            <button className="bg-[#3277BC] text-white px-6 py-3 rounded-full">
              Explore Our Solutions
            </button>
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Örnek logo bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 
                      flex flex-wrap items-center justify-center 
                      gap-6 py-6">
        <img src="/public/turkiye-isbankasi.png" alt="İş Bankası" className="h-8" />
        <img src="/public/enpara.png" alt="Enpara" className="h-8" />
        <img src="/public/netcad.png" alt="Netcad" className="h-8" />
        <img src="/public/qnb.png" alt="QNB" className="h-8" />
        <img src="/public/fibabanka.png" alt="Fibabanka" className="h-8" />
        {/* vb. */}
      </div>
    </section>
  );
};

export default Hero;
