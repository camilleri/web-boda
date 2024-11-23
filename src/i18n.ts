import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import es from "./locales/es";
import val from "./locales/val";

const deviceLanguage = navigator.language.split("-")[0]; // Get the base language (e.g., 'en' from 'en-US').
const initialLanguage = deviceLanguage === "en" ? "en" : "val";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
      val,
    },
    lng: initialLanguage, // Set your default language here.
    fallbackLng: "val",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie", "localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
