import { useQuery } from "@tanstack/react-query";
import { ProblemsParamsDto } from "entities/problems";
import { i18n } from "shared/libs";
import ProblemsGetApi from "./ProblemsGetApi";

const useGetProblems = ({ category, difficulty, limit, offset, search }: ProblemsParamsDto) => {
   return useQuery({
      queryKey: [
         "problems",
         category,
         difficulty,
         limit,
         offset,
         search,
         i18n.language
      ],
      queryFn: () => ProblemsGetApi.getProblems({ category, difficulty, limit, offset, search }),
   });
};

export default useGetProblems;