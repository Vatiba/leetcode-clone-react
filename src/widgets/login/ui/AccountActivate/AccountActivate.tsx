import { useActivateAccount } from "features/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

type AccountActivateProps = {
   email: string
}

function AccountActivate(props: AccountActivateProps) {
   const {
      email
   } = props;
   const [code, setCode] = useState<number>();
   const { t } = useTranslation();

   const {
      mutateAsync: activateAccount
   } = useActivateAccount();

   const activate = () => {
      if (typeof code == 'number' && String(code).length === 6) {
         activateAccount({
            code: code as number,
            email: email
         });
         return;
      }
      toast.error(t(''));
   }

   return (
      <>
         <label className="form-control w-full">
            <div className="label">
               <span className="label-text">{t('enterCode')}</span>
            </div>
            <input
               className="input input-bordered w-full"
               type="text"
               name="first_name"
               onChange={({ target: { valueAsNumber } }) => setCode(valueAsNumber)}
               value={code}
            />
         </label>
         <button
            className="mt-3 btn btn-primary w-full lowercase"
            onClick={() => activate()}
            type='button'
         >
            {t('send')}
         </button>
      </>
   )
}

export default AccountActivate