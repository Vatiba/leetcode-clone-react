type ContestDto = {
   id: number
   title: string
   banner: string
   description: string
   problems: number[]
   date_subscription_started: string
   date_subscription_finished: string
   date_started: string
   date_finished: string
   prizes: {
      from_place: number
      to_place: number
      score: number
      additional: string
   }[]
}

export default ContestDto;