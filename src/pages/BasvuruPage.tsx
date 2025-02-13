import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const BasvuruPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cv: null as File | null,
    experience: "",
    education: "",
    socialMedia: "",
    position: "",
  });

  const positions = [
    "Yazılım Geliştirici",
    "Veri Bilimci",
    "İş Analisti",
    "Proje Yöneticisi",
    "UI/UX Tasarımcı",
    "DevOps Mühendisi",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        cv: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:-ml-12">
            <div className="mb-8">
              <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
                Bize Katıl!
              </h1>
              
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-4">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium">
                  Geleceği Beraber Tasarlayalım!
                </h2>

                <p className="text-[16px] sm:text-[18px] text-gray-700 lg:max-w-xl -ml-20">
                  Büyük fırsatlar seni bekliyor, başvurunu hemen yap ve<br />
                  yolculuğuna Finnovation'la başla!
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      İsim - Soyisim
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      CV Yükle
                    </label>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      Deneyim
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      Mezun Olduğu Okul
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      GitHub/LinkedIn Profili
                    </label>
                    <input
                      type="text"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] sm:text-[18px] font-medium text-[#1E5E81]">
                      Başvurmak İstediğiniz Pozisyon
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3277BC] focus:border-[#3277BC]"
                      required
                    >
                      <option value="">Seçiniz</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center justify-center transition-colors"
                    >
                      Başvuru Yap
                      <span className="ml-2 text-xl">→</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasvuruPage;