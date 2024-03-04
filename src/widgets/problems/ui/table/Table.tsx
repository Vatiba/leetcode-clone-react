import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const problems = [
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: '100. Same Tree',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree'
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
						<th>{t('acceptance')}</th>
						<th>{t('difficulty')}</th>
					</tr>
				</thead>
				<tbody>
					{
						problems.map((problem, index) => {
							return (
								<tr key={index}>
									<td>
										<Link to={`/problems/${problem.slug}`}>
											{problem.status && <MdOutlineCheckCircleOutline className='text-green-600' />}
										</Link>
									</td>
									<td>
										<Link to={`/problems/${problem.slug}`}>
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
										</Link>
									</td>
									<td>
										<Link to={`/problems/${problem.slug}`}>
											{problem.acceptance}%
										</Link>
									</td>
									<td className={clsx({
										'text-green-600': problem.difficulty === 'Easy',
										'text-orange-600': problem.difficulty === 'Medium',
										'text-red-600': problem.difficulty === 'Hard',
									})}>
										<Link to={`/problems/${problem.slug}`}>
											{problem.difficulty}
										</Link>
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