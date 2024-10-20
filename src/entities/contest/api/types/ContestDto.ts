type ContestDto = {
   id: number
   title: string
   banner: string
   description: string
   date_subscription_started: string
   date_subscription_finished: string
   date_started: string
   date_finished: string
   is_subscribed: boolean
   prizes: {
      from_place: number
      to_place: number
      score: number
      additional: string
   }[],
   problems: {
      id: number
      slug: string
      title: string
      score: number
   }[]
}

export default ContestDto;