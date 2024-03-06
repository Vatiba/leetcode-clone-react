import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";

function Code() {
   const { t } = useTranslation();
   const [value, setValue] = React.useState("console.log('hello world!');");
   const onChange = React.useCallback((val: any, viewUpdate: any) => {
      console.log('val:', val);
      setValue(val);
   }, []);

   return (
      <div className='rounded-lg border bg-white h-full'>
         <div className='flex h-[8%] max-h-8 bg-gray-100 rounded-t-lg p-1'>
            <span
               className='flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200'
            >
               <FaCode className='text-green-500' />
               <span className='ml-2'>
                  Code
               </span>
            </span>
         </div>
         <div className='h-[92%]'>
            <CodeMirror
               value={value}
               //   extensions={[javascript({ jsx: true })]}
               onChange={onChange}
            />
         </div>
      </div>
   )
}

export default Code