import React, { useState } from "react";
import CallToAction from "../components/CallToAction";
import HeroTitle from "../components/HeroTitle";
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
    agreement: false,
  });

  const positions = [
    "Yazılım Geliştirici",
    "Veri Bilimci",
    "İş Analisti",
    "Proje Yöneticisi",
    "UI/UX Tasarımcı",
    "DevOps Mühendisi",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
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
      <div className="min-h-screen bg-white">
        <section className="bg-white">
          <HeroTitle
            title="Geleceği Beraber Tasarlayalım!"
            description="Büyük fırsatlar seni bekliyor, başvurunu hemen yap ve yolculuğuna Finnovation'la başla!"
          />
        </section>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mt-20 mb-20">
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
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement || false}
                onChange={handleInputChange}
                className="w-5 h-5 text-[#3277BC] border-gray-300 rounded focus:ring-[#3277BC]"
                required
              />
              <label
                htmlFor="agreement"
                className="ml-3 text-[16px] sm:text-[18px] text-[#1E5E81]"
              >
                KVKK kapsamında kişisel bilgilerimin işlenmesine onay veriyorum.
              </label>
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
          </form>
        </div>
      </div>

      <CallToAction />
    </MainLayout>
  );
};

export default BasvuruPage;
