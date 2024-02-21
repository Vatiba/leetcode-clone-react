import { UserStatus } from "entities/types"

type RegistrationForm = {
   firstName: string
   lastName: string
   email: string
   password: string
   phoneNumber: string
   location: number | ''
   status: UserStatus | ''
   school?: string | number
   university?: string
   worker?: string
}

export default RegistrationForm;