import { ProblemDifficulties } from "entities/types";

type ProblemsParamsDto = {
   category?: number | ''
   difficulty: ProblemDifficulties | ''
   limit: number | ''
   offset: number | ''
   search: string
}

export default ProblemsParamsDto;