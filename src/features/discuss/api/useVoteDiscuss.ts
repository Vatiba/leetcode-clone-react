import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DiscussVoteDto } from "entities/discuss/api";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import DiscussActionApi from "./DiscussActionApi";

const useVoteDiscuss = () => {
   const queryClient = useQueryClient();
   const { t } = useTranslation();
   return useMutation({
      mutationFn: (dto: DiscussVoteDto) => DiscussActionApi.voteDiscuss(dto),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['comment'] });
         queryClient.invalidateQueries({ queryKey: ['comments'] });
         queryClient.invalidateQueries({ queryKey: ['replies'] });
      },
      onError() {
         toast.error(t('cantVoteMoreOneTime'));
      }
   });
};

export default useVoteDiscuss;