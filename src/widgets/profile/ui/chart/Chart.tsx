import styles from './Chart.module.css';

type ChartProps = {
   content: string
}

function Chart(props: ChartProps) {
   const {
      content,
   } = props;

   return (
      <div className="flex gap-6">
         <div className='w-1/3'>
            {/* @ts-ignore */}
            <div className={`${styles.pie} ${styles.animate}`} style={{ '--p': 80 }}>
               {content}
            </div>
         </div>
         <div className='flex flex-col justify-between w-full py-2'>
            <div className='flex flex-col w-full'>
               <span className='text-sm'>123/123</span>
               <div className='relative'>
                  <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                  <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-green-500' />
               </div>
            </div>
            <div className='flex flex-col w-full'>
               <span className='text-sm'>123/123</span>
               <div className='relative'>
                  <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                  <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-yellow-500' />
               </div>
            </div>
            <div className='flex flex-col w-full'>
               <span className='text-sm'>123/123</span>
               <div className='relative'>
                  <div className='absolute top-0 left-0 w-full h-2 rounded-2xl bg-gray-200' />
                  <div className='absolute top-0 left-0 w-1/2 h-2 rounded-2xl bg-red-500' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Chart