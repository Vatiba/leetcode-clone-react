import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LinksUpdateDto } from "entities/profile";
import ProfileActionApi from "./ProfileActionApi";

const useUpdateLinks = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (dto: LinksUpdateDto) => ProfileActionApi.updateLink(dto),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['links'] });
      }
   });
};

export default useUpdateLinks;