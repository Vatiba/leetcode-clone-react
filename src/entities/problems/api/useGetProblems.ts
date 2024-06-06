import { useQuery } from "@tanstack/react-query";
import { ProblemsParamsDto } from "entities/problems";
import { i18n } from "shared/libs";
import ProblemsGetApi from "./ProblemsGetApi";

const useGetProblems = ({ categories, difficulty, limit, offset, search }: ProblemsParamsDto) => {
   return useQuery({
      queryKey: [
         "problems",
         categories,
         difficulty,
         limit,
         offset,
         search,
         i18n.language
      ],
      queryFn: () => ProblemsGetApi.getProblems({ categories, difficulty, limit, offset, search }),
   });
};

export default useGetProblems;