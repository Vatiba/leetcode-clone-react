type ContestParamsDto = {
   finished?: boolean
   future?: boolean
   limit: number
   offset: number
   in_progress?: boolean
   subscribed?: boolean
   subscription_in_progress?: boolean
}

export default ContestParamsDto;