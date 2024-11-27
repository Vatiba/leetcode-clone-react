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
         return sumSolvedProblemsCount / sumProblemsCount * 100
      return 0
   }, [solvedProblemsCount, sumProblemsCount]);
   const easyPercent = useMemo(() => {
      if (solvedProblemsCount?.easy && problemsCount?.easy)
         return solvedProblemsCount.easy / problemsCount.easy * 100

      return 0;
   }, [solvedProblemsCount, problemsCount]);
   const mediumPercent = useMemo(() => {
      if (solvedProblemsCount?.medium && problemsCount?.medium)
         return solvedProblemsCount.medium / problemsCount.medium * 100

      return 0;
   }, [solvedProblemsCount, problemsCount]);
   const hardPercent = useMemo(() => {
      if (solvedProblemsCount?.hard && problemsCount?.hard)
         return solvedProblemsCount.hard / problemsCount.hard * 100

      return 0;
   }, [solvedProblemsCount, problemsCount]);

   return (
      <div className="flex gap-6">
         <div className='w-1/3'>
            {
               !loading && solvedProblemsCount && problemsCount ?
                  <div className='relative w-36 h-36'>
                     {/* @ts-ignore */}
                     <div className={`absolute top-0 left-0 z-0 ${styles.pieGray}`} style={{ '--p': 100 }}>
                        {sumSolvedProblemsCount}/{sumProblemsCount}
                     </div>
                     {/* @ts-ignore */}
                     <div className={`absolute top-0 left-0 z-10 ${styles.pie} ${styles.animate}`} style={{ '--p': piePercent }}>
                        {sumSolvedProblemsCount}/{sumProblemsCount}
                     </div>
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
                           <div className='absolute top-0 left-0 h-2 rounded-2xl bg-blue-500' style={{ width: `${easyPercent}%` }} />
                        </div>
                     </div>
                     <div className='flex flex-col w-full'>
                        <span className='text-sm'>{solvedProblemsCount.medium}/{problemsCount.medium}</span>
                        <div className='relative'>
                           <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                           <div className='absolute top-0 left-0 h-2 rounded-2xl bg-yellow-500' style={{ width: `${mediumPercent}%` }} />
                        </div>
                     </div>
                     <div className='flex flex-col w-full'>
                        <span className='text-sm'>{solvedProblemsCount.hard}/{problemsCount.hard}</span>
                        <div className='relative'>
                           <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                           <div className='absolute top-0 left-0 h-2 rounded-2xl bg-red-500' style={{ width: `${hardPercent}%` }} />
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