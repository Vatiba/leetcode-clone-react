import { useMutation } from "@tanstack/react-query";
import ProblemActionApi from "./ProblemActionApi";

const useCheckSubmit = () => {
   return useMutation({
      mutationFn: (id: string) => ProblemActionApi.checkSubmission(id),
      onSuccess() {
         // queryClient.invalidateQueries({ queryKey: ['comments'] })
      }
   });
};

export default useCheckSubmit;