import { useMutation } from "@tanstack/react-query";
import { DiscussCreateDto } from "entities/discuss";
import DiscussActionApi from "./DiscussActionApi";

const useCreateDiscuss = () => {
   return useMutation({
      mutationFn: (dto: DiscussCreateDto) => DiscussActionApi.createDiscuss(dto),
   });
};

export default useCreateDiscuss;