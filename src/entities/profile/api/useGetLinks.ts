import { useQuery } from "@tanstack/react-query";
import ProfileGetApi from "./ProfileGetApi";

const useGetLinks = () => {
   return useQuery({
      queryKey: [
         "links",
      ],
      queryFn: () => ProfileGetApi.getLinks(),
   });
};

export default useGetLinks;