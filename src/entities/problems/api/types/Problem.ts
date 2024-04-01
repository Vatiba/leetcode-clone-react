import { ProblemDifficulties } from "entities/types"

type Problem = {
   id: number
   slug: string
   title: string
   success_rate: number
   category: {
      id: number
      name: string
   },
   score: number
   difficulty: ProblemDifficulties
}

export default Problem;