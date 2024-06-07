import clsx from 'clsx';
import { useGetProblem } from 'entities/problems';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCheckSquare } from "react-icons/fa";
import { useParams } from 'react-router-dom';

function TestCases() {
	const params = useParams();
	const { t } = useTranslation();
	const [showResults, setShowResults] = useState(false);


	const {
		data: problem,
		isLoading: problemLoading,
		isError: problemError
	} = useGetProblem(params['problemSlug'] as string);


	return (
		<div className='rounded-lg border bg-white h-full'>
			<div className='flex h-[15%] max-h-8 bg-gray-100 rounded-t-lg p-1'>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': !showResults
						})
					}
					onClick={() => setShowResults(false)}
				>
					<FaRegCheckSquare className='text-green-500' />
					<span className='ml-2'>
						Test cases
					</span>
				</button>
				{/* <button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': showResults
						})
					}
					onClick={() => setShowResults(true)}
				>
					<FaCode className='text-green-500' />
					<span className='ml-2'>
						Test results
					</span>
				</button> */}
			</div>
			<div className='h-[85%] overflow-y-auto px-3 pb-4 '>
				{
					problem?.test_cases.map(item => {
						return (
							<div className='flex flex-col border-b border-b-gray-300'>
								<h4 className='mt-2 font-bold'>{t('input')}:</h4>
								<p className='my-1'>{item.input}</p>
								<h4 className='mt-2 font-bold'>{t('output')}:</h4>
								<p className='my-1'>{item.output}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default TestCases