import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import DiscussGetApi from "./DiscussGetApi";

const useGetComment = (id: number) => {
   return useQuery({
      queryKey: [
         "comment",
         id,
         i18n.language,
      ],
      queryFn: () => DiscussGetApi.getComment(id),
   });
};

export default useGetComment;