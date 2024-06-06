import { ProblemDifficulties } from "entities/types"

type Problem = {
   id: number
   slug: string
   title: string
   acceptance: number
   categories: {
      id: number
      name: string
   }[]
   is_solved: boolean
   score: number
   difficulty: ProblemDifficulties
   description: string
   memory_limit_kb: number
   time_limit_ms: number
   comments__count: number
   test_cases: {
      input: string
      output: string
   }[]
}

export default Problem;
