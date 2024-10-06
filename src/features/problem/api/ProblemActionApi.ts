import { ProblemSubmissionCheckResponseDto, ProblemSubmissionDto, ProblemSubmissionResponseDto } from "entities/problems";
import api from "shared/api";

const ProblemActionApi = {
   submitProblem: async ({ code, lang, slug }: ProblemSubmissionDto): Promise<ProblemSubmissionResponseDto> => {
      const res = await api.post(`problems/${slug}/submit/`, {
         json: {
            code, lang
         }
      });
      return res.json();
   },
   checkSubmission: async (id: string): Promise<ProblemSubmissionCheckResponseDto> => {
      const res = await api.post(`submissions/${id}/check/`);
      return res.json();
   }
}

export default ProblemActionApi;