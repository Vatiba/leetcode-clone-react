type ProfileDto = {
   id: number
   first_name: string
   last_name: string
   phone: string
   email: string
   avatar: string | null
   location: number
   university: number | null
   school_number: number | null
   special_school: number | null
   links: string[]
   score: number
   company_name: string
}

export default ProfileDto;