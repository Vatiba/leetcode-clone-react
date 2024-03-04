import React from 'react'
import Description from '../Description'
import Code from '../Code'
import TestCases from '../TestCases'

function Layout() {
   return (
      <div className='flex h-[94%] -mx-1'>
         <div className='w-1/2 h-full pb-3 px-1'>
            <Description />
         </div>
         <div className='w-1/2 flex flex-col pb-3 px-1'>
            <div className='h-2/3'>
               <Code />
            </div>
            <div className='h-1/3'>
               <TestCases />
            </div>
         </div>
      </div>
   )
}

export default Layout