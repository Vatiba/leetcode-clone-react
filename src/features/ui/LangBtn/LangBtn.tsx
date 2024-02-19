import { useTranslation } from "react-i18next";
import { storageKeys } from "entities/constants";

const LanguageBtn = () => {
   const { i18n } = useTranslation();

   const changeLanguage = (value: string) => {
      i18n.changeLanguage(value);
      localStorage.setItem(storageKeys.languageKey, value);
   }


   return (
      <div className="dropdown dropdown-hover dropdown-end">
         <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost "
         >
            {i18n.language === 'tk' ? "TM" : i18n.language.toUpperCase()}
         </div>
         <ul tabIndex={0} className="dropdown-content z-[1] menu menu-xs p-2 shadow bg-base-100 rounded-box">
            <li onClick={() => changeLanguage('en')}>
               <a>EN</a>
            </li>
            <li onClick={() => changeLanguage('ru')}>
               <a>RU</a>
            </li>
            <li onClick={() => changeLanguage('tk')}>
               <a>TK</a>
            </li>
         </ul>
      </div>
   )
}

export default LanguageBtn;