import { useQuery } from "@tanstack/react-query";
import SpecialSchoolsGetApi from "./SpecialSchoolsGetApi";
import { i18n } from "shared/libs";

const useGetSpecialSchools = () => {
   return useQuery({
      queryKey: [
         "specialSchools",
         i18n.language
      ],
      queryFn: () => SpecialSchoolsGetApi.getSpecialSchools(),
   });
};

export default useGetSpecialSchools;