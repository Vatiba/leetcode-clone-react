type ProblemSubmissionCheckResponseDto = {
   id: string
   code: string
   lang: number
   status: number
   memory_usage_kb: number
   time_usage_ms: number
   failed_test_case: {
      id: number
      status: number
      time_usage_ms: number
      memory_usage_kb: number
      test_case: {
         input: string
         output: string
      }
      error: string
   } | null
}

export default ProblemSubmissionCheckResponseDto;
