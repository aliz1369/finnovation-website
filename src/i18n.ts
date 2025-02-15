import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/locales/en/translation.json";
import trTranslation from "../src/locales/tr/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
