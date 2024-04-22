import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import DiscussGetApi from "./DiscussGetApi";

const useGetComment = (slug: string) => {
   return useQuery({
      queryKey: [
         "comment",
         slug,
         i18n.language,
      ],
      queryFn: () => DiscussGetApi.getComment(slug),
      enabled: !!slug
   });
};

export default useGetComment;