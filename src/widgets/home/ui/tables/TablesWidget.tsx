import { useTranslation } from "react-i18next";
import TableWidget from "../table/TableWidget";

const TablesWidget = () => {
   const { t } = useTranslation();

   return (
      <section className="my-10 flex flex-wrap lg:flex-nowrap justify-between gap-4">
         <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="mb-3 font-bold text-lg">{t('topRating')}</h3>
            <TableWidget />
         </div>
         <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="mb-3 font-bold text-lg">{t('winnersOfLastOlimpiads')}</h3>
            <TableWidget />
         </div>
      </section>
   )
}

export default TablesWidget;