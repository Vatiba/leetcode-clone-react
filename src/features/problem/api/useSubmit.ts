import { useMutation } from "@tanstack/react-query";
import { ProblemSubmissionDto } from "entities/problems";
import ProblemActionApi from "./ProblemActionApi";

const useSubmit = () => {
   return useMutation({
      mutationFn: (dto: ProblemSubmissionDto) => ProblemActionApi.submitProblem(dto),
      onSuccess() {
         // queryClient.invalidateQueries({ queryKey: ['comments'] })
      }
   });
};

export default useSubmit;