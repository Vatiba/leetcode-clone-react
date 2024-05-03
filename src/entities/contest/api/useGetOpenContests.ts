import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";
import ContestParamsDto from "./types/ContestParamsDto";

const useGetOpenContests = ({ finished, future, limit, offset, open, subscribed, subscription_open }: ContestParamsDto) => {
   return useQuery({
      queryKey: [
         "contestsOpen",
         finished,
         future,
         limit,
         offset,
         open,
         subscribed,
         subscription_open,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContests({ finished, future, limit, offset, open: true, subscribed, subscription_open }),
   });
};

export default useGetOpenContests;