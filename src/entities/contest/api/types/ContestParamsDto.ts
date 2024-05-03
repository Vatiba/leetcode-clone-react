type ContestParamsDto = {
   finished?: boolean
   future?: boolean
   limit: number
   offset: number
   open?: boolean
   subscribed?: boolean
   subscription_open?: boolean
}

export default ContestParamsDto;