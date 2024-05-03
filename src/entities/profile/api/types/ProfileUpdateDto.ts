type ProfileUpdateDto = Partial<{
   userId: string
   first_name: string
   last_name: string
   phone: string
   password: string
   location: string | number
   school_number: string
   special_school: string
   company_name: string
   university: string | number
   link_github: string
   link_gitlab: string
   link_linkedin: string
   link_stackoverflow: string
}>

export default ProfileUpdateDto;