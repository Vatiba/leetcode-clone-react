import clsx from 'clsx';
import { Problem } from 'entities/problems';
import { useTranslation } from 'react-i18next';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
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
			{
				!problemsError ?
					!problemsLoading && !problems?.length ?
						<>No results</>
						:
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
									!problemsError && !problemsLoading ?
										problems?.map((problem, index: number) => {
											return (
												<tr key={index}>
													<td>{index + 1}.</td>
													<td>
														<Link to={`/problems/${problem.slug}`}>
															{problem.is_solved && <MdOutlineCheckCircleOutline className='text-blue-600' />}
														</Link>
													</td>
													<td>
														<Link to={`/problems/${problem.slug}`}>
															<div className='flex flex-col'>
																<span>{problem.title}</span>
																{
																	showTopicTags &&
																	<div className='flex flex-wrap gap-1 mt-1'>
																		{
																			problem.categories.map(category => {
																				return (
																					<span className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
																						{category.name}
																					</span>
																				)
																			})
																		}
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
														'text-green-600': problem.difficulty === 'easy',
														'text-orange-600': problem.difficulty === 'medium',
														'text-red-600': problem.difficulty === 'hard',
													})}>
														<Link to={`/problems/${problem.slug}`} className='font-bold'>
															{t(problem.difficulty)}
														</Link>
													</td>
													<td>🔥 {problem.score}</td>
												</tr>
											)
										})
										: null
								}
							</tbody>
						</table>
					:
					<>No results</>
			}

		</div>
	)
}

export default ProblemsTableWidget;