import { useQuery } from "@tanstack/react-query";
import ProfileGetApi from "./ProfileGetApi";

const useGetLinks = (id: string) => {
   return useQuery({
      queryKey: [
         "links",
         id
      ],
      queryFn: () => ProfileGetApi.getLinks(id),
      enabled: !!id
   });
};

export default useGetLinks;