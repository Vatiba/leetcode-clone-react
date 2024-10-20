type ContestantDto = {
   user: {
      id: number
      first_name: string
      last_name: string
      avatar: string | null
      score: number
   }
   contest: number
   has_participated: boolean
   prize: string | null
   score: number
}

export default ContestantDto;