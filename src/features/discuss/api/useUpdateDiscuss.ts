import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DiscussUpdateDto } from "entities/discuss/api";
import DiscussActionApi from "./DiscussActionApi";

const useUpdateDiscuss = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (dto: DiscussUpdateDto) => DiscussActionApi.updateDiscuss(dto),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['comment'] })
         queryClient.invalidateQueries({ queryKey: ['replies'] })
      }
   });
};

export default useUpdateDiscuss;