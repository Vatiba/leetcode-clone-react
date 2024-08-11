import clsx from 'clsx';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';

import { ProblemSubmissionCheckResponseDto, useGetProblem } from 'entities/problems';
import { FaTag } from "react-icons/fa";
import { IoArrowBack, IoCloseCircleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineCheckCircleOutline } from 'react-icons/md';


type DescriptionProps = {
	checkResponse?: ProblemSubmissionCheckResponseDto
	onBackClick: Function
}

function Description(props: DescriptionProps) {
	const {
		checkResponse,
		onBackClick
	} = props;
	const { t } = useTranslation();
	const params = useParams();
	const [activeTab, setActiveTab] = useSearchParams('desc');
	const contentRef = useRef<HTMLDivElement>(null);
	const tagsRef = useRef<HTMLSpanElement>(null);


	const {
		data: problem,
		isLoading: problemLoading,
		isError: problemError
	} = useGetProblem(params['problemSlug'] as string);

	return (
		<div className='rounded-lg border bg-white h-full'>
			<div className='flex h-[4%] min-h-10 max-h-10 bg-gray-100 rounded-t-lg p-1'>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'desc' || !activeTab.get('desc')
						})
					}
					onClick={() => setActiveTab({ desc: 'desc' })}
				>
					<IoDocumentTextOutline />
					<span className='ml-2'>
						{t('desc')}
					</span>
				</button>
				{/* <button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'solution'
						})
					}
					onClick={() => setActiveTab({ desc: 'solution' })}
				>
					<ImLab />
					<span className='ml-2'>
						{t('solution')}
					</span>
				</button>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'discussion'
						})
					}
					onClick={() => setActiveTab({ desc: 'discussion' })}
				>
					<GoCommentDiscussion />
					<span className='ml-2'>
						Discussion
					</span>
				</button> */}
			</div>
			<div className='h-[92%] overflow-y-auto px-3 pt-6 pb-4 overflow-x-hidden scroll-smooth' ref={contentRef}>
				{
					!checkResponse ?
						<>

							{/* {
								!problemLoading ?
									<h1 className='text-xl font-bold mb-3'>
										{problem?.title}
									</h1>
									:
									<div className='animate-pulse bg-gray-200 h-7 w-1/2 rounded-md mb-3' />
							} */}
							<div className="flex flex-wrap text-sm">

								<>
									<span className={clsx('bg-gray-100 rounded-full px-3 py-1 mr-1 font-bold', {
										'text-green-400': true
									})}>
										Easy
									</span>
									<button
										className='bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 flex items-center mr-1'
										onClick={() => contentRef.current?.scrollTo(0, tagsRef.current?.offsetTop || 0)}
									>
										<FaTag className='text-sm mr-1' />
										{t('tags')}
									</button>
									{/* <button
										className='bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 flex items-center mr-1'
										onClick={() => contentRef.current?.scrollTo(0, tagsRef.current?.offsetTop || 0)}
									>
										<CiViewTimeline className='text-sm mr-1' />
										{t('requirements')}
									</button> */}
								</>
							</div>
							<div className='my-3'>
								<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

								<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

								<p>You can return the answer in any order.</p>

								<p>&nbsp;</p>
								<p><strong className="example">Example 1:</strong></p>

								<pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
									<strong>Output:</strong> [0,1]
									<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
								</pre>

								<p><strong className="example">Example 2:</strong></p>

								<pre><strong>Input:</strong> nums = [3,2,4], target = 6
									<strong>Output:</strong> [1,2]
								</pre>

								<p><strong className="example">Example 3:</strong></p>

								<pre><strong>Input:</strong> nums = [3,3], target = 6
									<strong>Output:</strong> [0,1]
								</pre>

								<p>&nbsp;</p>
								<p><strong>Constraints:</strong></p>

								<ul>
									<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
									<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
									<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
									<li><strong>Only one valid answer exists.</strong></li>
								</ul>

								<p>&nbsp;</p>
								<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code>
							</div>
							<div className='flex flex-wrap mt-6 text-sm border-b pb-3'>
								{/* <span className='flex items-center border-r pr-4 h-4'>
						<span className=''>
							Accepted
						</span>
						<span className='font-bold ml-2'>
							12.5M
						</span>
					</span>
					<span className='flex items-center border-r px-4 h-4'>
						<span className=''>
							Submissions
						</span>
						<span className='font-bold ml-2'>
							24M
						</span>
					</span> */}
								{
									problem?.acceptance !== undefined || problem?.acceptance !== null ?
										<span className='flex items-center h-4'>
											<span className=''>
												{t('acceptedRate')}
											</span>
											<span className='font-bold ml-2'>
												85.80%
											</span>
										</span>
										:
										null
								}
							</div>
							<div className='flex mt-3'>
								<span id='#tags' className='flex items-center mr-1' ref={tagsRef}>
									<FaTag className='text-sm mr-1' />
									{t('tags')}
								</span>
							</div>
							<div className='flex flex-wrap gap-1 mt-3'>
								<span key={1} className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
									Array
								</span>
								<span key={1} className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
									Hash table
								</span>
								<span key={1} className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
									Linked list
								</span>
							</div>
							{/* <div className='flex mt-3'>
								<span id='#tags' className='flex items-center mr-1' ref={tagsRef}>
									<CiViewTimeline className='text-sm mr-1' />
									{t('requirements')}
								</span>
							</div> */}
							{/* <div className='flex flex-col mt-3 text-sm pb-3'>
								{
									problem?.memory_limit_kb ?
										<span className='flex items-center h-4 mb-4'>
											<span className=''>
												{t('memoryUsageLimit')}:
											</span>
											<span className='font-bold ml-2'>
												{problem?.memory_limit_kb} Kb
											</span>
										</span>
										:
										null
								}
								{
									problem?.memory_limit_kb ?
										<span className='flex items-center h-4 mb-4'>
											<span className=''>
												{t('timeLimit')}:
											</span>
											<span className='font-bold ml-2'>
												{problem?.time_limit_ms} ms
											</span>
										</span>
										:
										null
								}
							</div> */}
						</>
						:
						<>
							<button className='mb-4 bg-gray-100 h-9 w-9 flex justify-center items-center rounded-full hover:bg-gray-200 cursor-pointer' onClick={() => onBackClick()}>
								<IoArrowBack />
							</button>
							{checkResponse?.status && checkResponse.status <= 2 ?
								<>
									<div className="flex flex-col justify-center items-center mb-8">
										<MdOutlineCheckCircleOutline size={120} className='text-green-500' />
										<h1 className='font-bold text-green-500 text-4xl'>
											{t('accepted')}
										</h1>
									</div>
									<div className='flex flex-col mt-3 text-sm pb-3'>
										{
											problem?.memory_limit_kb ?
												<span className='flex items-center h-4 mb-4'>
													<span className=''>
														{t('memoryUsed')}:
													</span>
													<span className='font-bold ml-2'>
														{problem?.memory_limit_kb} Kb
													</span>
												</span>
												:
												null
										}
										{
											problem?.memory_limit_kb ?
												<span className='flex items-center h-4 mb-4'>
													<span className=''>
														{t('timeUsed')}:
													</span>
													<span className='font-bold ml-2'>
														{problem?.time_limit_ms} ms
													</span>
												</span>
												:
												null
										}
									</div>
								</>
								:
								<>
									<div className="flex flex-col justify-center items-center mb-8">
										<IoCloseCircleOutline size={120} className='text-red-500' />
										<h1 className='font-bold text-red-500 text-4xl'>
											{
												checkResponse?.status ?

													checkResponse.status == 3 ?
														t('wrongAnswer') :

														checkResponse.status == 4 ?
															t('timeLimitExceeded') :

															checkResponse.status == 5 ?
																t('compilationError') :

																checkResponse.status == 6 ?
																	t('runtimeError') :

																	checkResponse.status == 7 ?
																		t('internalError') :

																		checkResponse.status == 8 ?
																			t('execFormatError') : null
													:
													null
											}
										</h1>
									</div>
									{
										checkResponse.status == 3 && checkResponse.failed_test_case ?
											<>
												<div className='flex flex-col border-b border-b-gray-300 text-red-500'>
													<h4 className='mt-2 font-bold'>{t('input')}:</h4>
													<p className='my-1'>{checkResponse.failed_test_case.test_case.input}</p>
													<h4 className='mt-2 font-bold'>{t('output')}:</h4>
													<p className='my-1'>{checkResponse.failed_test_case.test_case.output}</p>
												</div>
											</> : null
									}
								</>
							}
						</>
				}
			</div>
			<div className='h-[4%] flex items-center px-1'>
				{/* <button className='bg-gray-200 hover:bg-gray-300 h-6 px-3 flex items-center rounded-lg'>
					<AiOutlineLike />
					<span className='ml-2 font-bold'>
						55.2K
					</span>
				</button> */}
			</div>
		</div>
	)
}

export default Description