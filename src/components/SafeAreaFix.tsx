import { useEffect } from "react";

const SafeAreaFix = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari = /^((?!chrome|android).)*safari/.test(userAgent);
    if (isSafari) {
      document.body.style.paddingBottom = "304px";
    }
  }, []);

  return null;
};

export default SafeAreaFix;
