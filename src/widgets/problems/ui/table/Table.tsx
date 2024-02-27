import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoCalendar } from "react-icons/go";

const problems = [
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Easy',
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
	},
	{
		status: false,
		title: '100. Same Tree',
		difficulty: 'Medium',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
	},
	{
		status: true,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Medium',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Medium',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
	},
]

type ProblemsTableWidgetProps = {
	showTopicTags: boolean
}

function ProblemsTableWidget(props: ProblemsTableWidgetProps) {
	const {
		showTopicTags
	} = props;
	const { t } = useTranslation();

	return (
		<div className="overflow-x-auto w-full mb-4">
			<table className="table w-full">
				<thead>
					<tr>
						<th>{t('statusName')}</th>
						<th>{t('title')}</th>
						<th>{t('difficulty')}</th>
					</tr>
				</thead>
				<tbody>
					{
						problems.map(problem => {
							return (
								<tr>
									<td>
										{problem.status && <GoCalendar className='text-green-600' />}
									</td>
									<td>
										<div className='flex flex-col'>
											<span>{problem.title}</span>
											{
												showTopicTags &&
												<div className='flex flex-wrap gap-1 mt-1'>
													<span className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
														Tree
													</span>
													<span className='flex justify-center items-center bg-gray-200 rounded-full p-2 py-1 text-xs text-gray-500'>
														Depth-First Search
													</span>
													<span className='flex justify-center items-center bg-gray-200 rounded-full p-2 py-1 text-xs text-gray-500'>
														Binary Tree
													</span>
												</div>
											}
										</div>
									</td>
									<td className={clsx({
										'text-green-600': problem.difficulty === 'Easy',
										'text-orange-600': problem.difficulty === 'Medium',
										'text-red-600': problem.difficulty === 'Hard',
									})}>
										{problem.difficulty}
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default ProblemsTableWidget;