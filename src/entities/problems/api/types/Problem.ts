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
}

export default Problem;