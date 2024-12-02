import { useGetLastContestWinners, useGetTopScoredUsers } from "entities/home/api";
import { useTranslation } from "react-i18next";
import DefaultAvatar from "shared/assets/img/default_avatar.jpg";
import { concatUserName, getLocationString } from "shared/libs/helpers";
import TableWidget from "../table/TableWidget";


const TablesWidget = () => {
   const { t } = useTranslation();

   const {
      data: topScored,
   } = useGetTopScoredUsers();

   const {
      data: lastContestWinners,
   } = useGetLastContestWinners();

   console.log(topScored)
   return (
      <section className="my-10 flex flex-wrap lg:flex-nowrap justify-between gap-4">
         {
            topScored?.length ?
               <div className="flex flex-col w-full lg:w-1/2">
                  <h3 className="mb-3 font-bold text-lg">{t('topRating')}</h3>
                  <TableWidget data={topScored?.map(item => {
                     return {
                        avatar: item?.avatar || DefaultAvatar,
                        location: getLocationString(item.location, ''),
                        name: concatUserName(item.first_name, item.last_name),
                        score: item.score
                     }
                  }) || []} />
               </div>
               : null
         }

         {
            lastContestWinners?.length ?
               <div className="flex flex-col w-full lg:w-1/2">
                  <h3 className="mb-3 font-bold text-lg">{t('winnersOfLastOlimpiads')}</h3>
                  <TableWidget data={lastContestWinners?.map(item => {
                     return {
                        avatar: item?.avatar || DefaultAvatar,
                        location: item?.location?.name || '',
                        name: concatUserName(item.first_name, item.last_name),
                        score: item.score
                     }
                  }) || []} />
               </div>
               : null
         }
      </section>
   )
}

export default TablesWidget;