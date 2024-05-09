import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";
import ContestParamsDto from "./types/ContestParamsDto";

const useGetFutureContests = ({ finished, future, limit, offset, in_progress, subscribed, subscription_in_progress }: ContestParamsDto) => {
   return useQuery({
      queryKey: [
         "contestsFuture",
         finished,
         future,
         limit,
         offset,
         in_progress,
         subscribed,
         subscription_in_progress,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContests({ finished, future: true, limit, offset, in_progress, subscribed, subscription_in_progress }),
   });
};

export default useGetFutureContests;