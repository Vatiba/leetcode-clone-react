import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";
import ContestParamsDto from "./types/ContestParamsDto";

const useGetOpenContests = ({ finished, future, limit, offset, in_progress, subscribed, subscription_in_progress }: ContestParamsDto) => {
   return useQuery({
      queryKey: [
         "contestsOpen",
         finished,
         future,
         limit,
         offset,
         in_progress,
         subscribed,
         subscription_in_progress,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContests({ finished, future, limit, offset, in_progress: true, subscribed, subscription_in_progress }),
   });
};

export default useGetOpenContests;