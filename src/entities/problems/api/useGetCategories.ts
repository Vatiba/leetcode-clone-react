import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ProblemsGetApi from "./ProblemsGetApi";

const useGetCategories = () => {
   return useQuery({
      queryKey: [
         "tags",
         i18n.language
      ],
      queryFn: () => ProblemsGetApi.getCategories(),
   });
};

export default useGetCategories;