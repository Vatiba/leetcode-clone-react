import { useTranslation } from 'react-i18next';
import { BiSolidUpArrow } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";

// trash
import clsx from 'clsx';
import { useAuth } from 'entities/auth';
import { useGetComments } from 'entities/discuss';
import { DiscussOrdering } from 'entities/types';
import { DiscussSearch } from 'features/discuss';
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import DefaultUserImg from 'shared/assets/img/default_avatar.jpg';
import { numberFormatter } from 'shared/libs';
import { getPageOffset } from 'shared/libs/helpers';
import { Pagination } from 'shared/ui';

type DiscussesTableWidgetProps = {
	/**
	 * @default false
	 */
	isMinimized?: boolean
}

const limit = 24;

function DiscussesTableWidget(props: DiscussesTableWidgetProps) {
	const {
		isMinimized = false
	} = props;
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { data: authData } = useAuth();

	const [page, setPage] = useState(1);
	const [ordering, setOrdering] = useState<DiscussOrdering>('date_created');
	const [search, setSearch] = useState('');

	const {
		data: comments,
		isLoading: commentsLoading,
		isError: commentsError
	} = useGetComments({
		limit: limit,
		offset: getPageOffset(page, limit),
		ordering: ordering,
		search: search
	})

	return (
		<div className="overflow-x-auto w-full mb-4">
			<div className={clsx('flex flex-col rounded-md', {
				'bg-gray-50': !isMinimized
			})}>
				<div className={clsx('flex flex-wrap gap-3 items-center justify-between py-3 px-1 rounded-t-md border-b border-gray-200', {
					'bg-gray-200': !isMinimized
				})}>

					<select
						className="select select-xs select-bordered block md:hidden order-2 sm:order-1"
						onChange={({ target: { value } }) => setOrdering(value as DiscussOrdering)}
						value={ordering}
					>
						<option value={''}>
							{t('all')}
						</option>
						<option value={'date_created'}>
							{t('newestToOldest')}
						</option>
						<option value={'votes_sum'}>
							{t('mostVotes')}
						</option>
						<option value={'view_count'}>
							{t('mostViewed')}
						</option>
					</select>
					<div className='hidden md:flex order-2 sm:order-1 select-none'>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer border-r border-gray-300 pr-4', {
							'font-bold text-black': ordering == 'date_created'
						})}>
							<input
								className='opacity-0'
								type='radio'
								name='ordering'
								value={'date_created'}
								checked={ordering == 'date_created'}
								onChange={({ currentTarget: { value } }) => setOrdering(value as DiscussOrdering)}
							/>
							{t('newestToOldest')}
						</label>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer border-r border-gray-300 pr-4', {
							'font-bold text-black': ordering == 'votes_sum'
						})}>
							<input
								className='opacity-0'
								type='radio'
								name='ordering'
								value={'votes_sum'}
								checked={ordering == 'view_count'}
								onChange={({ currentTarget: { value } }) => setOrdering(value as DiscussOrdering)}
							/>
							{t('mostVotes')}
						</label>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer pr-4', {
							'font-bold text-black': ordering == 'view_count'
						})}>
							<input
								className='opacity-0'
								type='radio'
								name='ordering'
								value={'view_count'}
								checked={ordering == 'view_count'}
								onChange={({ currentTarget: { value } }) => setOrdering(value as DiscussOrdering)}
							/>
							{t('mostViewed')}
						</label>
					</div>

					<div className='flex items-center mr-3 order-1 sm:order-2'>
						<DiscussSearch
							onChange={(value) => setSearch(value)}
						/>
						<button
							className="btn btn-xs flex items-center"
							onClick={() => {
								if (authData) {
									navigate("/add/discuss");
									return;
								}
								navigate('/login?loginType=signIn');
							}}
						>
							{t('new')}
							<IoMdAdd className='ml-1' />
						</button>
					</div>
				</div>
				<div className='flex flex-col px-2'>
					{
						!commentsError ?
							!commentsLoading ?
								comments?.results.length ?
									comments?.results.map((comment, index) => {
										return (
											<Link key={index} to={`/discuss/${comment.slug}`} className='flex gap-1 justify-start items-center border-b border-gray-200 last:border-b-0 py-2 text-xs sm:text-base'>
												<img src={DefaultUserImg} alt="img" className='rounded-full w-10 h-10 object-cover m-3 mr-0 hidden md:block' />
												<div className='flex flex-col flex-grow ml-3'>
													<p className='font-bold line-clamp-2'>{comment.problem.title}</p>
													<div>
														<span className='hidden sm:inline pr-2'>{t('userName')}:</span>
														<span className=''>{`${comment.user.first_name ? comment.user.first_name : ''} ${comment.user.last_name ? comment.user.last_name : ''}`}</span>
													</div>
													<div className='mt-1 flex flex-wrap items-center text-gray-600'>
														<span className='flex items-center mr-2'>
															<RxCountdownTimer className='mr-0 sm:mr-2' />
															<span className='truncate hidden sm:inline'>{t('postedTime')}</span>
														</span>
														<span>{comment.date_created}</span>
													</div>
												</div>
												<div className='flex flex-shrink-1 flex-wrap max-w-[75px] sm:max-w-[90px] md:max-w-none'>
													<div className="flex justify-end w-full md:w-1/2 items-center border-b md:border-b-0 pb-2 md:pb-0 mb-2 md:mb-0">
														<BiSolidUpArrow color='gray' />
														<span className='ml-3 w-10 sm:w-12 md:w-16'>{comment.votes_sum ? numberFormatter(comment.votes_sum) : 0}</span>
													</div>
													<div className="flex justify-end w-full md:w-1/2 items-center">
														<IoEyeSharp color='gray' />
														<span className='ml-3 w-10 sm:w-12 md:w-16'>{comment.view_count ? numberFormatter(comment.view_count) : 0}</span>
													</div>
												</div>
											</Link>
										)
									})
									:
									<>No results</>
								:
								new Array(14).fill(0).map((_, index) => {
									return (
										<div key={index} className='animate-pulse flex gap-1 justify-start items-center border-b border-gray-200 last:border-b-0 py-2 text-xs sm:text-base'>
											<div className='rounded-full bg-gray-200 w-10 h-10 m-3 mr-0 hidden md:block' />
											<div className='flex flex-col flex-grow ml-3'>
												<div className='font-bold line-clamp-2 bg-gray-200 rounded-md h-4 w-36 mb-3' />
												<div className='h-3 w-60 rounded-md bg-gray-200 mb-1' />
												<div className='h-3 w-44 rounded-md bg-gray-200' />
												{/* <div className='mt-1 flex flex-wrap items-center text-gray-600'>
													<span className='flex items-center mr-2'>
														<RxCountdownTimer className='mr-0 sm:mr-2' />
														<span className='truncate hidden sm:inline'>{t('postedTime')}</span>
													</span>
													<span>{comment.date_created}</span>
												</div> */}
											</div>
										</div>
									)
								})
							:
							<>No results</>
					}
				</div>
			</div>
			{
				comments && comments.count / limit > 1 ?
					<Pagination
						pageCount={comments.count / limit}
						onPageChange={({ selected }) => setPage(selected)}
					/> : null
			}
		</div>
	)
}

export default DiscussesTableWidget;