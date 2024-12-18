import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";
import ContestParamsDto from "./types/ContestParamsDto";

const useGetFinishedContests = ({ finished, future, limit, offset, in_progress, subscribed, subscription_in_progress }: ContestParamsDto) => {
   return useQuery({
      queryKey: [
         "contestsFinished",
         finished,
         future,
         limit,
         offset,
         in_progress,
         subscribed,
         subscription_in_progress,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContests({ finished: true, future: false, limit, offset, in_progress, subscribed, subscription_in_progress: false }),
   });
};

export default useGetFinishedContests;