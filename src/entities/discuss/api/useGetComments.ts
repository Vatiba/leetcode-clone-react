import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import DiscussGetApi from "./DiscussGetApi";
import DiscussListParamsDto from "./types/DiscussListParamsDto";

const useGetComments = ({ limit, offset, ordering, parent, problem, search }: DiscussListParamsDto) => {
   return useQuery({
      queryKey: [
         "comments",
         limit,
         offset,
         ordering,
         parent,
         problem,
         search,
         i18n.language,
      ],
      queryFn: () => DiscussGetApi.getComments({ limit, offset, ordering, parent, problem, search }),
   });
};

export default useGetComments;