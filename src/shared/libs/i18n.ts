import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// language translations
import translationRU from "shared/locales/ru/translation.json";
import translationTK from "shared/locales/tk/translation.json";
import translationEN from "shared/locales/en/translation.json";

// language storage key
import { storageKeys } from "entities/constants";
import { Language } from "entities/types";


export const defaultNS = "translation";

// translations
export const resources = {
   ru: {
      translation: translationRU,
   },
   tk: {
      translation: translationTK,
   },
   en: {
      translation: translationEN,
   },
}

const langFromStorage = localStorage.getItem(storageKeys.languageKey);

if (!langFromStorage) localStorage.setItem(storageKeys.languageKey, 'en')

i18n.use(initReactI18next).init({
   resources,
   lng: langFromStorage as Language || 'en',
   defaultNS,
   interpolation: {
      escapeValue: false
   }
})

export default i18n;