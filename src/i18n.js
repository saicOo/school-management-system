import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "../public/locales/en/translation.json";
import ar from "../public/locales/ar/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: localStorage.getItem("app_lang") || "en", // default language
    fallbackLng: "en", // fallback if translation not found
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
