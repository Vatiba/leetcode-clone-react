interface PaginationDto<T> {
   count: number
   next: boolean | null
   previous: boolean | null
   results: T
}

export default PaginationDto;