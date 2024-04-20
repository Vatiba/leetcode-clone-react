type DiscussCreateResponseDto = {
   id: number
   slug: string
   title: string
   content: string
   parent: number | null
   problem: {
      title: string
   },
   view_count: number
   date_created: string
   date_updated: string
   user: {
      id: number
      first_name: string
      last_name: string
      avatar: string | null
   }
}

export default DiscussCreateResponseDto;