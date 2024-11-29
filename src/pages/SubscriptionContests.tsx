import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useGetContest } from "entities/contest";
import { useSubscribeContest } from "features/contest";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Container } from "shared";
dayjs.extend(customParseFormat);

function FutureContest() {
   const params = useParams();
   const { t } = useTranslation();

   const {
      data: contest,
      isLoading: contestLoading,
      isError: contestError
   } = useGetContest(Number(params['contestId'] as string));

   const {
      mutate: subscribeToContest,
      isPending: subscribingToContest,
   } = useSubscribeContest();

   return (
      <Container>
         {
            !contestError ?
               !contestLoading && contest ?
                  <div className="my-5 flex flex-wrap md:flex-nowrap gap-3">
                     <div className="flex flex-col w-full md:w-3/4">
                        <h1 className="font-bold text-2xl mb-3">{contest.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: contest.description }} />
                        {/* <div className="mt-5">
                           <div className="flex">
                              <span className="font-bold">
                                 {t('startTime')}:
                              </span>
                              <span className="ml-3">
                                 {contest.date_started}
                              </span>
                           </div>
                           <div className="flex">
                              <span className="font-bold">
                                 {t('endTime')}:
                              </span>
                              <span className="ml-3">
                                 {contest.date_finished}
                              </span>
                           </div>
                        </div> */}
                        {
                           dayjs(contest.date_subscription_finished, 'DD.MM.YYYY HH:ss').isBefore(dayjs()) &&
                              dayjs(contest.date_subscription_started, 'DD.MM.YYYY HH:ss').isAfter(dayjs()) ?
                              <div className="flex justify-end mt-3">
                                 <button
                                    className="bg-blue-500 px-5 py-3 hover:bg-green-600 rounded-md text-white font-bold "
                                    disabled={contest.is_subscribed || subscribingToContest}
                                    onClick={() => {
                                       subscribeToContest(contest.id, {
                                          onSuccess() {
                                             toast.success(t('success'))
                                          }
                                       })
                                    }}
                                 >
                                    {
                                       contest.is_subscribed ?
                                          t('alreadySubscribed')
                                          :
                                          t('subscribe')
                                    }
                                 </button>
                              </div>
                              : null
                        }
                     </div>
                     <div className="flex flex-col w-full md:w-1/4">
                        <div className="bg-white p-4 rounded-md min-h-[250px]">
                           <h3 className="font-bold mb-4">{t('prizes')}</h3>
                           <ul className="">
                              {
                                 contest.prizes.map((prize, index) => {
                                    return (
                                       <li key={index} className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 last:border-none">
                                          <span className="font-bold">{prize.from_place} - {prize.to_place}</span>
                                          <span>🔥+{prize.score}</span>
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        </div>
                     </div>
                  </div>
                  :
                  <div className="animate-pulse">
                     <div className="my-5 flex flex-wrap md:flex-nowrap gap-3">
                        <div className="flex flex-col w-full md:w-3/4">
                           <div className="bg-gray-200 h-8 rounded-md w-full" />
                           <div className="bg-gray-200 h-5 rounded-md w-full mt-2" />
                           <div className="bg-gray-200 h-5 rounded-md w-full mt-2" />
                           <div className="bg-gray-200 h-5 rounded-md w-full mt-2" />
                           <div className="bg-gray-200 h-5 rounded-md w-full mt-2" />
                           <div className="bg-gray-200 h-5 rounded-md w-3/4 mt-2" />
                           <div className="mt-3">
                              <div className="bg-gray-200 h-5 rounded-md w-1/3 mt-2" />
                              <div className="bg-gray-200 h-5 rounded-md w-1/2 mt-2" />
                           </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/4">
                           <div className="bg-white p-4 rounded-md">
                              <h3 className="font-bold mb-4">{t('prizes')}</h3>
                              <ul className="">
                                 {
                                    new Array(4).fill(0).map((_, index) => {
                                       return (
                                          <li key={index} className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 last:border-none">
                                             <div className="bg-gray-200 w-full h-8 rounded-md" />
                                          </li>
                                       )
                                    })
                                 }
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               :
               t('noResult')
         }
      </Container>
   )
}

export default FutureContest