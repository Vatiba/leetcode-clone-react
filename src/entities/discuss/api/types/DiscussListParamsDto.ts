import { DiscussOrdering } from "entities/types"

type DiscussListParamsDto = {
   limit: number
   offset: number
   ordering: DiscussOrdering
   parent?: number
   problem?: number
   search: string
}

export default DiscussListParamsDto;