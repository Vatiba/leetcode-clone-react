import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import UniversitiesGetApi from "./UniversitiesGetApi";

const useGetUniversities = () => {
   return useQuery({
      queryKey: [
         "universities",
         i18n.language
      ],
      queryFn: () => UniversitiesGetApi.getUniversities(),
   });
};

export default useGetUniversities;