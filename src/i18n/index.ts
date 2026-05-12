import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt-BR.json";
import en from "./en-GB.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
  });

export default i18n;
