type ProfileUpdateDto = Partial<{
   userId: string
   first_name: string
   last_name: string
   phone: string
   password: string
   passwordConfirm: string
   location: string | number
   school_number: string
   special_school: string
   company_name: string
   university: string | number
}>

export default ProfileUpdateDto;