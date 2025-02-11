import React from "react";
import MainLayout from "../layouts/MainLayout";

const ContactUsPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Contact Form Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-8xl font-semibold text-gray-900 leading-tight">
            Bizimle İletişime <br /> Geçin
          </h1>
          <form className="bg-white p-10 rounded-[20px] shadow-lg mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
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
                <label htmlFor="lastName" className="block text-lg font-meidum text-gray-700">
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
              <label htmlFor="company" className="block text-lg font-medium text-gray-700">
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
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
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
              <label htmlFor="help" className="block text-lg font-medium text-gray-700">
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
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
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
              <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                KVKK kapsamında kişisel bilgilerimizin işlenmesine onay veriyorum.
              </label>
            </div>

            {/* Submit Button */}
            <div className="relative mt-6">
              <button
                type="submit"
                className="absolute bottom-[-25px] left-0 bg-[#3277BC] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#285b8f] transform hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#3277BC]"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
  
  <div className="max-w-6xl mx-auto">
    {/* Başlık */}
    <h1 className="text-8xl font-bold text-gray-900 leading-tight mb-12">
      Adresimiz
    </h1>

    {/* Resim */}
    <div className="flex justify-center mb-10">
      <img
        src="/public/address.png" // PNG resmin yolu
        alt="Adres Haritası"
        className="w-[1200px] h-[642px] rounded-lg shadow-lg"
      />
    </div>

    {/* Adres Metni */}
    <p className="text-1xl text-gray-700 leading-relaxed text-center">
    Barış Mahallesi, Koşuyolu Caddesi Kuluçka Merkezi No:30 Gebze / Kocaeli
    </p>
  </div>
</section>



      {/* Ready to Start Section */}
      <section className="px-1 py-16 flex justify-center items-center">
        <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[300px] rounded-full"
              style={{
                background: "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
                filter: "blur(100px)",
              }}
            />
          </div>
          <div className="text-center relative z-10">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Ready to start your AI <br /> journey with us?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Simple, transparent pricing. No setup fees or contracts. <br />
              Try without a credit card, cancel anytime.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <button
                className="px-8 py-4 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#285b8f] transform hover:scale-105 transition-transform"
              >
                Explore Our Solutions <span className="ml-2 text-xl">→</span>
              </button>
              <button
          className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800
                     font-bold rounded-full shadow-md hover:bg-gray-100
                     hover:border-gray-400 flex items-center transition-transform
                     transform hover:scale-105"
        >
          <img
            src="/public/bd.png"
            alt="Demo Icon"
            className="h-5 w-5 mr-2"
          />
          Book a Demo
        </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3277BC] text-white py-8">
  <div className="container mx-auto px-6">
    {/* Navigation Links */}
    <nav className="mb-6">
      <ul className="flex flex-wrap justify-center space-x-4 text-lg font-medium">
        <li>
          <a href="#about" className="hover:underline">
            Biz Kimiz?
          </a>
        </li>
        <li>•</li>
        <li>
          <a href="#expertise" className="hover:underline">
            Uzmanlık Alanlarımız
          </a>
        </li>
        <li>•</li>
        <li>
          <a href="#finacademy" className="hover:underline">
            FinAcademy
          </a>
        </li>
        <li>•</li>
        <li>
          <a href="#resources" className="hover:underline">
            Resources
          </a>
        </li>
        <li>•</li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>

    {/* Logo and Tagline */}
    <div className="flex flex-col items-center mb-6">
      <img
        src="/public/finnovation-white.png"
        alt="Finnovation Logo"
        className="h-24 mb-1"
      />
      <p className="text-center text-lg max-w-xl leading-relaxed">
        Our AI models learn and improve over time,<br />
        delivering increasingly accurate results<br />
        and adapting to changing trends.
      </p>
    </div>

    {/* Email + Button Row with a Single Underline */}
    <div className="flex justify-center">
      <div className="flex items-center space-x-32 border-b-2 border-white pb-4 px-2">
        {/* Underlined Email Text */}
        <h2 className="text-6xl font-medium">Email Address</h2>

        {/* Button with PNG Icon */}
        <button
          className="flex items-center justify-center
                     w-12 h-12 sm:w-16 sm:h-16
                     rounded-full border-2 border-white
                     transition-all hover:bg-white group"
        >
          <img
            src="/public/myCustomButtonIcon.png" 
            alt="Button Icon"
            className="w-6 h-6 sm:w-16 sm:h-16
                       transition-transform group-hover:scale-105
                       group-hover:opacity-80"
          />
        </button>
      </div>
    </div>
  </div>
</footer>
    </MainLayout>
  );
};

export default ContactUsPage;
