import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";
import ContestParamsDto from "./types/ContestParamsDto";

const useGetFutureContests = ({ finished, future, limit, offset, open, subscribed, subscription_open }: ContestParamsDto) => {
   return useQuery({
      queryKey: [
         "contestsFuture",
         finished,
         future,
         limit,
         offset,
         open,
         subscribed,
         subscription_open,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContests({ finished, future: true, limit, offset, open, subscribed, subscription_open }),
   });
};

export default useGetFutureContests;