import { ProblemDifficulties } from "entities/types";

type ProblemsParamsDto = {
   categories?: number | ''
   difficulty: ProblemDifficulties | ''
   limit: number | ''
   offset: number | ''
   search: string
}

export default ProblemsParamsDto;