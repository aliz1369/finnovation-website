import { useEffect, useState } from "react";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-10 md:right-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex justify-between items-center z-50">
      <p className="text-sm">
        Bu web sitesi çerezleri kullanmaktadır. Daha fazla bilgi için gizlilik
        politikamızı inceleyin.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-4"
      >
        Kabul Et
      </button>
    </div>
  );
};

export default CookiePopup;
