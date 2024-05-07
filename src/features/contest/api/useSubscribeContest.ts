import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContestActionsApi from "./ContestActionsApi";

const useSubscribeContest = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (contestId: number) => ContestActionsApi.subscribe(contestId),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['contest'] });
         queryClient.invalidateQueries({ queryKey: ['contestsFinished'] });
         queryClient.invalidateQueries({ queryKey: ['contestsFuture'] });
         queryClient.invalidateQueries({ queryKey: ['contestsOpen'] });
      }
   });
};

export default useSubscribeContest;