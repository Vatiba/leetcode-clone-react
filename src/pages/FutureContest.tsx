import { useGetContest } from "entities/contest";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Container } from "shared";

function FutureContest() {
   const params = useParams();
   const { t } = useTranslation();

   const {
      data: contest,
      isLoading: contestLoading,
      isError: contestError
   } = useGetContest(Number(params['contestId'] as string))

   return (
      <Container>
         {
            !contestLoading && !contestError && contest ?
               <div className="my-5">
                  <h1 className="font-bold text-2xl mb-3">{contest.title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: contest.description }} />
                  {/* {contest.} */}
               </div>
               :
               t('noResult')
         }
         FutureContest
      </Container>
   )
}

export default FutureContest