import clsx from 'clsx';
import { Problem } from 'entities/problems';
import { useTranslation } from 'react-i18next';
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


type ProblemsTableWidgetProps = {
	showTopicTags: boolean
	problems?: Problem[]
	problemsLoading: boolean
	problemsError: boolean
}

function ProblemsTableWidget(props: ProblemsTableWidgetProps) {
	const {
		showTopicTags,
		problems,
		problemsLoading,
		problemsError,
	} = props;
	const { t } = useTranslation();

	return (
		<div className="overflow-x-auto w-full mb-4">
			<table className="table w-full">
				<thead>
					<tr>
						<th></th>
						<th>{t('statusName')}</th>
						<th>{t('title')}</th>
						<th>{t('acceptance')}</th>
						<th>{t('difficulty')}</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{
						!problemsError ?
							!problemsLoading ?
								problems?.map((problem, index: number) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>
												<Link to={`/problems/${problem.slug}`}>
													{/* {problem.status && <MdOutlineCheckCircleOutline className='text-green-600' />} */}
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
													{problem.success_rate}%
												</Link>
											</td>
											<td className={clsx({
												'text-green-600': problem.difficulty === 'easy',
												'text-orange-600': problem.difficulty === 'medium',
												'text-red-600': problem.difficulty === 'hard',
											})}>
												<Link to={`/problems/${problem.slug}`} className='uppercase font-bold'>
													{problem.difficulty}
												</Link>
											</td>
											<td>🔥 {problem.score}</td>
										</tr>
									)
								})
								: null
							: null
					}
				</tbody>
			</table>
		</div>
	)
}

export default ProblemsTableWidget;