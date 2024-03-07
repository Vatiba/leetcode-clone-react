import clsx from 'clsx';
import React, { useState } from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function TestCases() {
	const [showResults, setShowResults] = useState(false);

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
				<button
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
				</button>
			</div>
		</div>
	)
}

export default TestCases