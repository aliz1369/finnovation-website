import React from "react";
import MainLayout from "../layouts/MainLayout";
import CallToAction from "../components/CallToAction";

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

            {/* Help Dropdown */}
            <div className="mt-6">
              <label
                htmlFor="help"
                className="block text-base sm:text-lg font-medium text-gray-700 font-segouie"
              >
                Size nasıl yardımcı olabiliriz?
              </label>
              <select
                id="help"
                className="mt-2 block w-full h-[43px] border border-gray-600 rounded-[10px] px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Seç...</option>
                <option>Teknik Destek</option>
                <option>Soru</option>
                <option>Fiyatlandırma</option>
              </select>
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

            {/* Consent Checkbox */}
            <div className="mt-6 flex items-center">
              <input
                id="consent"
                type="checkbox"
                className="h-5 w-5 text-blue-600 border-gray-600 rounded"
              />
              <label
                htmlFor="consent"
                className="ml-2 mt-2 text-sm text-gray-700 font-segouie"
              >
                KVKK kapsamında kişisel bilgilerimizin işlenmesine onay
                veriyorum.
              </label>
            </div>

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

      {/* Ready to start your AI journey? */}
      <section className="px-1 py-16 flex justify-center items-center">
        {/* Parent Container */}
        <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
          {/* Arka plan (radial gradient) */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[300px] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #44B870, #58595B)",
                filter: "blur(100px)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center relative z-10">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight font-segouie">
              Ready to start your AI <br /> journey with us?
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-segouie">
              Simple, transparent pricing. No setup fees or contracts. <br />
              Try without a credit card, cancel anytime.
            </p>

            {/* Butonlar (mobilde dikey stack için flex-col) */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Explore Our Solutions Button */}
              <button
                className="px-8 py-4 bg-[#44B870] text-white font-segouie font-bold rounded-full
                             shadow-lg hover:bg-[#44B870] flex items-center transition-transform
                             transform hover:scale-105"
              >
                Explore Our Solutions
                <span className="ml-2 text-xl font-segouie">→</span>
              </button>

              {/* Book a Demo Button */}
              <button
                className="px-8 py-4 bg-white border-2 border-gray-300 font-segouie text-gray-800
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
      <CallToAction />
    </MainLayout>
  );
};

export default ContactUsPage;
