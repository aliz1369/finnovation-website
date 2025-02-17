import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="px-1 py-16 flex justify-center items-center">
      <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
           Yeni Projelere Birlikte İmza Atalım
          </h2>
          <p className="mt-4 text-lg text-gray-700">
          Hemen bize ulaşın projelerinizi hayata geçirelim.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#285b8f] flex items-center transition-transform transform hover:scale-105">
              Başvuru Yap
              <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 