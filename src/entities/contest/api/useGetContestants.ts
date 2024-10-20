import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";

const useGetContestants = (contestId?: number) => {
   return useQuery({
      queryKey: [
         "contestants",
         contestId,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContestants(contestId!),
      enabled: !!contestId
   });
};

export default useGetContestants;