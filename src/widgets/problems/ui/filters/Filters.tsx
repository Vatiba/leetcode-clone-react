import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRandom } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

type ProblemFiltersWidgetProps = {
   showTopicTags: boolean
   setShowTopicTags: Dispatch<SetStateAction<boolean>>
   onClickPickRandom: Function
}

function ProblemFiltersWidget(props: ProblemFiltersWidgetProps) {
   const {
      showTopicTags,
      setShowTopicTags,
      onClickPickRandom,
   } = props;
   const { t } = useTranslation();

   return (
      <div className='flex flex-wrap gap-3 mb-3 justify-between'>
         <div className='flex gap-2'>
            <label className="input input-sm input-bordered flex items-center gap-2">
               <input type="text" className="grow bg-transparent outline-none" placeholder="Search" />
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <select className="select select-sm select-bordered max-w-xs" defaultValue={'difficulty'}>
               <option disabled value={'difficulty'}>Difficulty</option>
               <option className='text-green-500' value={'easy'}>Easy</option>
               <option className='text-orange-500' value={'easy'}>Medium</option>
               <option className='text-red-500' value={'easy'}>Hard</option>
            </select>
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-outline btn-sm border-none">
                  <MdOutlineSettings />
               </div>
               <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                     <a className='flex' onClick={() => setShowTopicTags(prev => !prev)}>
                        <input type="checkbox" checked={showTopicTags} className="checkbox checkbox-sm" onChange={() => { }} />
                        <span>{t('showTopicTags')}</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <button
            className='flex gap-1 bg-transparent items-center'
            onClick={() => onClickPickRandom()}
         >
            <span className='flex justify-center items-center w-9 h-9 rounded-full bg-gradient-to-b from-green-500 to-green-600'>
               <FaRandom color='white' />
            </span>
            <span className='text-green-500 text-sm ml-1'>
               {t('pickRandom')}
            </span>
         </button>
      </div>
   )
}

export default ProblemFiltersWidget