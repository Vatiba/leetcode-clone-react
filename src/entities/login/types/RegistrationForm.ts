import { UserStatus } from "entities/types"

type RegistrationForm = {
   firstName: string
   lastName: string
   email: string
   phoneNumber: string
   password: string
   location: string | number
   status: UserStatus | ''
   school?: string | number
   university?: string
   worker?: string
}

export default RegistrationForm;