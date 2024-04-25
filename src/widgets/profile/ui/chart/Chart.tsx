import { ProfileDto } from 'entities/profile';
import { useMemo } from 'react';
import styles from './Chart.module.css';

type ChartProps = {
   solvedProblemsCount?: ProfileDto['solved_problems_count']
   problemsCount?: ProfileDto['problems_count']
   loading: boolean
}

function Chart(props: ChartProps) {
   const {
      solvedProblemsCount,
      problemsCount,
      loading,
   } = props;

   const sumProblemsCount = useMemo(() => {
      if (!loading && problemsCount) {
         return problemsCount.easy + problemsCount.medium + problemsCount.hard
      }
      return 0;
   }, [problemsCount, loading]);

   const sumSolvedProblemsCount = useMemo(() => {
      if (!loading && solvedProblemsCount) {
         return solvedProblemsCount.easy + solvedProblemsCount.medium + solvedProblemsCount.hard
      }
      return 0;
   }, [solvedProblemsCount, loading]);

   const piePercent = useMemo(() => {
      if (solvedProblemsCount && sumProblemsCount)
         return sumSolvedProblemsCount / sumProblemsCount
      return 0
   }, [solvedProblemsCount, sumProblemsCount])

   return (
      <div className="flex gap-6">
         <div className='w-1/3'>
            {
               !loading && solvedProblemsCount && problemsCount ? // @ts-ignore
                  <div className={`${styles.pie} ${styles.animate}`} style={{ '--p': piePercent }}>
                     {sumSolvedProblemsCount}/{sumProblemsCount}
                  </div>
                  :
                  <div className='rounded-full w-32 h-32 bg-gray-200 animate-pulse' />
            }
         </div>
         <div className='flex flex-col justify-between w-full py-2'>
            {
               !loading && problemsCount && solvedProblemsCount ?
                  <>
                     <div className='flex flex-col w-full'>
                        <span className='text-sm'>{solvedProblemsCount.easy}/{problemsCount.easy}</span>
                        <div className='relative'>
                           <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                           <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-green-500' />
                        </div>
                     </div>
                     <div className='flex flex-col w-full'>
                        <span className='text-sm'>{solvedProblemsCount.medium}/{problemsCount.medium}</span>
                        <div className='relative'>
                           <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                           <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-yellow-500' />
                        </div>
                     </div>
                     <div className='flex flex-col w-full'>
                        <span className='text-sm'>{solvedProblemsCount.hard}/{problemsCount.hard}</span>
                        <div className='relative'>
                           <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                           <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-red-500' />
                        </div>
                     </div>
                  </>
                  :
                  <>
                     <div className='h-7 w-full bg-gray-200 animate-pulse rounded-md' />
                     <div className='h-7 w-full bg-gray-200 animate-pulse rounded-md' />
                     <div className='h-7 w-full bg-gray-200 animate-pulse rounded-md' />
                  </>
            }
         </div>
      </div>
   )
}

export default Chart