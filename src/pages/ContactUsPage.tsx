import React from "react";
import MainLayout from "../layouts/MainLayout";
import KVKKModal from "../components/KVKKModal";

const ContactUsPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Contact Form Section */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Başlık: responsive font boyutları */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-900 leading-tight font-segouie">
            Bizimle İletişime <br className="hidden sm:block" /> Geçin
          </h1>

          <form className="bg-white p-6 sm:p-10 rounded-[20px] shadow-lg mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
                >
                  Ad
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 block w-full h-[43px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                />
              </div>
              {/* Surname */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
                >
                  Soyad
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 block w-full h-[43px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                />
              </div>
            </div>

            {/* Company */}
            <div className="mt-6">
              <label
                htmlFor="company"
                className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
              >
                Şirket / Kuruluş
              </label>
              <input
                type="text"
                id="company"
                className="mt-2 block w-full h-[43px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
              >
                Şirket e-mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full h-[43px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder=""
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 block w-full h-[150px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Size daha iyi yardımcı olabilmemiz için lütfen nasıl yardımcı olabileceğimizi açıklayın.."
              />
            </div>
            
            <div className="h-5 md:h-5"></div>
            <KVKKModal />
            <div className="h-5 md:h-5"></div>

            {/* Submit Button */}
            <div className="relative mt-6">
              <button
                type="submit"
                className="absolute bottom-[-20px] left-0 bg-[#3277BC] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#285b8f] transform hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#3277BC]"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Adres Section */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Başlık: responsive font boyutları */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-900 leading-tight font-segouie mb-6">
            Adresimiz
          </h1>

          {/* Resim */}
          <div className="flex justify-center mb-10">
            <img
              src="/address.png" // PNG resmin yolu
              alt="Adres Haritası"
              className="w-full h-auto max-w-[1200px] rounded-lg shadow-lg"
            />
          </div>

          {/* Adres Metni */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center font-segouie">
            Barış Mahallesi, Koşuyolu Caddesi Kuluçka Merkezi No:30 Gebze /
            Kocaeli
          </p>
        </div>
      </section>
      
    </MainLayout>
  );
};

export default ContactUsPage;
