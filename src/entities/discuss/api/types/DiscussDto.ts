type DiscussDto = {
   id: number
   content: string
   parent: number | null
   problem: {
      title: string
   }
   replies_count: number
   votes_sum: number | null
   view_count: number | null
   date_created: string
   date_updated: string
   user: {
      id: number
      first_name: string
      last_name: string
      avatar: string
   }
}

export default DiscussDto;