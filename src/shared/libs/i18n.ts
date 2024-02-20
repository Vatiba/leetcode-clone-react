import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// language translations
import translationsRu from 'shared/locales/ru/translations.json';
import translationsEn from 'shared/locales/en/translations.json';
import translationsTk from 'shared/locales/tk/translations.json';

// language storage key
import { storageKeys } from "entities/constants";
import { Language } from "entities/types";


export const defaultNS = "translations";

// translations
export const resources = {
   ru: {
      translations: translationsRu,
   },
   tk: {
      translations: translationsTk,
   },
   en: {
      translations: translationsEn,
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