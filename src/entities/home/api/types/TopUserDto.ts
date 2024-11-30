import { LocationParent } from "entities/locations"

type TopUserDto = {
    id: number
    first_name: string
    last_name: string
    phone: string
    email: string
    avatar: string | null
    location: LocationParent,
    university: {
        id: number
        name: string
    },
    company_name: string | null
    school_number: string | null
    special_school: {
        name: string
    },
    score: number
    comment_count: number
    langs: object
    solved_problems_count: {
        easy: number
        medium: number
        hard: number
    },
    problems_count: {
        easy: number
        medium: number
        hard: number
    },
    link_github: string
    link_gitlab: string
    link_stackoverflow: string
    link_linkedin: string
}

export default TopUserDto;