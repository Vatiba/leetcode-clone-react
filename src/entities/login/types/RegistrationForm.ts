import { UserStatus } from "entities/types"

type RegistrationForm = {
	first_name: string
	last_name: string
	phone: string
	email: string
	password: string
	passwordConfirm: string
	location: number | ''
	university: number | ''
	school_number: number | ''
	special_school: number | ''
	company_name: string
	status: UserStatus | ''
}

export default RegistrationForm;