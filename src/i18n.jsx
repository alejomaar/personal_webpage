import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json"; // Import the translation files
import esTranslation from "./locales/es.json";

const resources = {
  en: enTranslation,
  es: esTranslation,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: false, // It should be false
  fallbackLng: "en",
});

export default i18n;
