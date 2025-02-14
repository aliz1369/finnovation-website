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
          {/* Başlık ve Slogan */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1E5E81] mb-4">Bize Katıl!</h1>
            <h2 className="text-2xl font-semibold text-[#3277BC] mb-4">
              Geleceği Beraber Tasarlayalım!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Büyük fırsatlar seni bekliyor, başvurunu hemen yap ve yolculuğuna Finnovation'la başla!
            </p>
          </div>

          {/* Başvuru Formu */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* İsim Soyisim */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Telefon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* CV Yükleme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Deneyim */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Eğitim */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Sosyal Medya */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Pozisyon Seçimi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Gönder Butonu */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#3277BC] text-white py-3 px-6 rounded-md hover:bg-[#1E5E81] transition-colors duration-300"
                >
                  Başvuruyu Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasvuruPage;