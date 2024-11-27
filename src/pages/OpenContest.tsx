import clsx from "clsx";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useAuth } from "entities/auth";
import { useGetContest, useGetContestants } from "entities/contest";
import { useSubscribeContest } from "features/contest";
import { useTranslation } from "react-i18next";
import { IoReload } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "shared";
import { concatUserName } from "shared/libs/helpers";
import { ContestantTable, ContestProblemTable } from "widgets/contest";
dayjs.extend(customParseFormat);

function OpenContest() {
   const { data: userData } = useAuth();
   const params = useParams();
   const navigate = useNavigate();
   const { t } = useTranslation();

   const {
      data: contest,
      isLoading: contestLoading,
      isError: contestError
   } = useGetContest(Number(params['contestId'] as string));
   const {
      data: contestants,
      isLoading: contestantsLoading,
      isError: contestantsError
   } = useGetContestants(Number(params['contestId']));
   const {
      mutate: subscribeToContest,
      isPending: subscribingToContest
   } = useSubscribeContest();

   return (
      <Container>
         {
            !contestError ?
               !contestLoading && contest ?
                  <>
                     <div className="my-5 flex flex-wrap md:flex-nowrap gap-3">
                        <div className="flex flex-col w-full md:w-3/4">
                           <h1 className="font-bold text-2xl mb-3">{contest.title}</h1>
                           <p dangerouslySetInnerHTML={{ __html: contest.description }} />
                        </div>
                        <div className="flex flex-col w-full md:w-1/4">
                           <div className="bg-white p-4 rounded-md min-h-[250px] flex flex-col justify-between">
                              <div>
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
                              {
                                 !contest.is_subscribed ?
                                    <button
                                       className='w-full flex bg-gray-200 hover:bg-gray-300 h-8 justify-center items-center rounded-md font-bold text-blue-500'
                                       onClick={(e) => {
                                          if (userData?.token) {
                                             e.preventDefault();
                                             subscribeToContest(Number(params['contestId']));
                                             return;
                                          }
                                          navigate('/login?loginType=signIn')
                                       }}
                                       type='button'
                                       disabled={subscribingToContest}
                                    >
                                       {
                                          !subscribingToContest ?
                                             <>
                                                <MdOutlineCloudUpload className='mr-2' />
                                                {t('subscribe')}
                                             </>
                                             :
                                             <IoReload className='animate-spin' size={20} />
                                       }
                                    </button>
                                    :
                                    <span className="text-lg font-bold text-center">
                                       {t('alreadySubscribed')}
                                    </span>
                              }
                           </div>
                        </div>
                     </div>
                     <div className="my-5 flex flex-wrap md:flex-nowrap gap-3">
                        <div className={clsx("flex flex-col w-full", {
                           'md:w-1/2': !!contestants?.results.length
                        })}>
                           {
                              contest.problems.length ?
                                 <ContestProblemTable
                                    data={contest.problems.map(item => ({
                                       id: item.id,
                                       name: item.title,
                                       score: item.score,
                                       slug: item.slug
                                    }))}
                                 />
                                 : null
                           }
                        </div>
                        {
                           contestants?.results.length ?
                              <div className="flex flex-col w-full md:w-1/2">
                                 <ContestantTable
                                    data={contestants?.results.map((item, i) => ({
                                       id: i,
                                       userId: item.user.id,
                                       avatar: item.user.avatar,
                                       name: concatUserName(item.user.first_name, item.user.last_name),
                                       score: item.score,
                                    })) || []}
                                 />
                              </div>
                              : null
                        }
                     </div>
                  </>
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

export default OpenContest