import React, { useRef, useState } from 'react';

interface KVKKModalProps {
  onAcceptCallback?: (accepted: boolean) => void;  // Opsiyonel callback
}

const KVKKModal: React.FC<KVKKModalProps> = ({ onAcceptCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const isAtBottom = Math.abs(
      element.scrollHeight - element.scrollTop - element.clientHeight
    ) < 1;
    
    if (isAtBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const handleAccept = () => {
    if (hasScrolledToBottom) {
      setIsChecked(true);
      onAcceptCallback?.(true);  // Callback varsa çağır
      setIsOpen(false);
      setHasScrolledToBottom(false);
    }
  };

  const handleCheckboxClick = () => {
    if (!isChecked) {
      // Eğer checkbox işaretli değilse, modalı aç
      setIsOpen(true);
    } else {
      // Eğer checkbox işaretliyse, işareti kaldır
      setIsChecked(false);
      onAcceptCallback?.(false);
    }
  };

  return (
    <>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="kvkk-agreement"
          checked={isChecked}
          onChange={handleCheckboxClick}
          className="w-5 h-5 text-[#3277BC] border-gray-300 rounded focus:ring-[#3277BC]"
          required
        />
        <label
          htmlFor="kvkk-agreement"
          className="ml-3 text-[16px] sm:text-[18px] text-[#1E5E81]"
        >
          KVKK kapsamında kişisel bilgilerimin işlenmesine onay veriyorum.
        </label>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                FİNNOVATION YAZILIM ÇÖZÜMLERİ A.Ş. KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİNE DAİR AYDINLATMA METNİ
              </h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setHasScrolledToBottom(false);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                ✕
              </button>
            </div>
            
            <div 
              ref={modalRef}
              onScroll={handleScroll}
              className="p-6 overflow-y-auto"
              style={{ maxHeight: "calc(80vh - 140px)" }}
            >
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold mb-2">1. Veri Sorumlusunun Kimliği</h3>
                  <p>
                    Finnovation Yazılım Çözümleri A.Ş. ("Şirketimiz"), Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında veri sorumlusu olarak hareket etmektedir.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">2. Kişisel Verilerin Hangi Amaçlarla İşlendiği</h3>
                  <p>Toplanan kişisel verileriniz, şu amaçlarla işlenmektedir:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Hizmetlerimizin sunulması ve geliştirilmesi,</li>
                    <li>Müşteri ilişkilerinin yönetilmesi ve destek hizmetleri,</li>
                    <li>Hukuki ve idari yükümlülüklerin yerine getirilmesi,</li>
                    <li>Finansal ve muhasebesel işlemlerin gerçekleştirilmesi,</li>
                    <li>İç denetim ve raporlama faaliyetlerinin yürütülmesi,</li>
                    <li>Pazarlama faaliyetleri ve bilgilendirme yapılması.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
                  <p>
                    Kişisel verileriniz, otomatik ya da otomatik olmayan yöntemlerle, Şirketimiz tarafından sunulan hizmet ve faaliyetler çerçevesinde; internet sitesi, mobil uygulamalar, sözleşmeler, formlar, e-posta ve benzeri kanallar aracılığıyla toplanabilir. KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebepler dâhilinde işlenmektedir.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">4. Kişisel Verilerin Aktarılması</h3>
                  <p>
                    Toplanan kişisel verileriniz; hukuki yükümlülüklerin yerine getirilmesi, hizmetlerin sunulması ve iyileştirilmesi amacıyla; yetkili kamu kurumları, iş ortaklarımız, tedarikçilerimiz ve yasal çerçevede yetkilendirilmiş diğer üçüncü kişilerle paylaşılabilir.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">5. Kişisel Veri Sahibinin Hakları</h3>
                  <p>KVKK'nın 11. maddesi uyarınca veri sahipleri olarak şunlara hakkınız bulunmaktadır:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                    <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                    <li>Verilerin aktardığı kişileri bilme,</li>
                    <li>Yanlış veya eksik işlendiğini düşünüyorsanız düzeltilmesini talep etme,</li>
                    <li>Verilerin silinmesini veya yok edilmesini isteme,</li>
                    <li>Verilerinize zarar verildiğini düşünüyorsanız itiraz etme,</li>
                    <li>Kanuna aykırı bir şekilde işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">6. Başvuru Yöntemi</h3>
                  <p>
                    KVKK kapsamında yukarıda belirtilen haklarınızı kullanmak için, kimliğinizi tevsik edici belgelerle birlikte, aşağıdaki iletişim kanallarından Şirketimize başvurabilirsiniz:
                  </p>
                  <div className="mt-2">
                    <p>Finnovation Yazılım Çözümleri A.Ş.</p>
                    <p>Adres: Bahriye Üçok Mah. 1762 Sk. No: 9 Daire: 1 Karşıyaka / İzmir</p>
                    <p>E-posta: info@finnovation.com.tr</p>
                    <p>Telefon: +90 532 542 8443</p>
                  </div>
                  <p className="mt-4">
                    Başvurularınız, KVKK ve ilgili mevzuat çerçevesinde en geç 30 gün içerisinde yanıtlanacaktır.
                  </p>
                </div>

                <div>
                  <p className="italic">Güncellenme Tarihi: 19.02.2025</p>
                  <p className="mt-2">
                    Bu aydınlatma metni, Şirketimizin KVK politikaları uyarınca güncellenebilir. Değişiklikler web sitemizde yayınlanarak yürürlüğe girecektir.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={handleAccept}
                disabled={!hasScrolledToBottom}
                className={`w-full py-3 rounded-full font-bold ${
                  hasScrolledToBottom
                    ? "bg-[#3277BC] text-white hover:bg-[#2b66a2]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {hasScrolledToBottom ? "Okudum, Anladım" : "Lütfen metni sonuna kadar okuyunuz"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KVKKModal; 