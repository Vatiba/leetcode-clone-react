import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DiscussCreateDto } from "entities/discuss";
import DiscussActionApi from "./DiscussActionApi";

const useCreateDiscuss = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (dto: DiscussCreateDto) => DiscussActionApi.createDiscuss(dto),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['comments'] })
      }
   });
};

export default useCreateDiscuss;