type DiscussListParamsDto = {
   limit: number
   offset: number
   ordering: 'votes_sum' | 'view_count' | 'date_created'
   parent: number
   problem: number
   search: string
}

export default DiscussListParamsDto;