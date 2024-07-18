import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../translation/ar.json";
import en from "../translation/en.json";
import ua from "../translation/ua.json";
import jp from "../translation/jp.json";

const resources = {
  en,
  ar,
  ua,
  jp,
};

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    lng: "en",
    resources,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
