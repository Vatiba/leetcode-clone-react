import { LocationParent } from "entities/locations"

type ProfileDto = {
   id: number
   first_name: string
   last_name: string
   phone: string
   email: string
   avatar: string | null
   location: LocationParent
   university: {
      id: number
      name: string
   } | null
   school_number: string | null
   special_school: string | null
   links: string[]
   score: number
   comment_count: number
   company_name: string
   langs: {
      python__count: number
      c__count: number
      java__count: number
      pascal__count: number
      node__count: number
   }
   solved_problems_count: {
      easy: number
      medium: number
      hard: number
   }
   problems_count: {
      easy: number
      medium: number
      hard: number
   }
}

export default ProfileDto;