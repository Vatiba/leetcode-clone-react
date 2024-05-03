import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ContestGetApi from "./ContestGetApi";

const useGetContest = (id: number) => {
   return useQuery({
      queryKey: [
         "contest",
         id,
         i18n.language,
      ],
      queryFn: () => ContestGetApi.getContest(id),
   });
};

export default useGetContest;