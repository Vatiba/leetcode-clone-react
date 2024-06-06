type ProblemSubmissionResponseDto = {
   id: string
   code: string
   lang: number
   status: number
   memory_usage_kb: number | null
   time_usage_ms: number | null
   failed_test_case: number | null
}

export default ProblemSubmissionResponseDto;