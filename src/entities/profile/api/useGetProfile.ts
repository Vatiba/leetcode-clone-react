import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import ProfileGetApi from "./ProfileGetApi";

const useGetProfile = (id: string) => {
   return useQuery({
      queryKey: [
         "user",
         id,
         i18n.language,
      ],
      queryFn: () => ProfileGetApi.getProfile(id),
      enabled: !!id
   });
};

export default useGetProfile;