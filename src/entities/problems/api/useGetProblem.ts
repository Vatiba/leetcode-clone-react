import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ProblemsGetApi from "./ProblemsGetApi";

const useGetProblem = (slug: string) => {
   return useQuery({
      queryKey: [
         "problem",
         slug,
         i18n.language
      ],
      queryFn: () => ProblemsGetApi.getProblem(slug),
   });
};

export default useGetProblem;