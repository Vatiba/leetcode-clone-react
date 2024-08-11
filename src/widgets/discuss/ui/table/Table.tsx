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

const trashData = [
	{
		"slug": "1",
		"title": "How to optimize the Two Sum solution?",
		"problem": {
			"title": "Two Sum",
			"slug": "1"
		},
		"user": {
			"first_name": "John",
			"last_name": "Doe"
		},
		"date_created": "08.11.2024 10:45",
		"votes_sum": 32,
		"view_count": 256
	},
	{
		"slug": "2",
		"title": "Best approach for Longest Substring Without Repeating Characters?",
		"problem": {
			"title": "Longest Substring Without Repeating Characters",
			"slug": "3"
		},
		"user": {
			"first_name": "Alice",
			"last_name": "Smith"
		},
		"date_created": "08.11.2024 11:05",
		"votes_sum": 45,
		"view_count": 378
	},
	{
		"slug": "3",
		"title": "Clarification needed on Merge Two Sorted Lists",
		"problem": {
			"title": "Merge Two Sorted Lists",
			"slug": "21"
		},
		"user": {
			"first_name": "Bob",
			"last_name": "Johnson"
		},
		"date_created": "08.11.2024 12:30",
		"votes_sum": 18,
		"view_count": 142
	},
	{
		"slug": "4",
		"title": "Is there a dynamic programming approach to Climbing Stairs?",
		"problem": {
			"title": "Climbing Stairs",
			"slug": "70"
		},
		"user": {
			"first_name": "Emily",
			"last_name": "Brown"
		},
		"date_created": "08.11.2024 13:50",
		"votes_sum": 26,
		"view_count": 198
	},
	{
		"slug": "5",
		"title": "Edge cases for Valid Parentheses?",
		"problem": {
			"title": "Valid Parentheses",
			"slug": "20"
		},
		"user": {
			"first_name": "Michael",
			"last_name": "Davis"
		},
		"date_created": "08.11.2024 14:15",
		"votes_sum": 21,
		"view_count": 173
	},
	{
		"slug": "6",
		"title": "How does the sliding window technique apply to Maximum Subarray?",
		"problem": {
			"title": "Maximum Subarray",
			"slug": "53"
		},
		"user": {
			"first_name": "Sarah",
			"last_name": "Wilson"
		},
		"date_created": "08.11.2024 14:45",
		"votes_sum": 34,
		"view_count": 215
	},
	{
		"slug": "7",
		"title": "Why does my solution fail on edge cases for Palindrome Number?",
		"problem": {
			"title": "Palindrome Number",
			"slug": "9"
		},
		"user": {
			"first_name": "David",
			"last_name": "Martinez"
		},
		"date_created": "08.11.2024 15:10",
		"votes_sum": 15,
		"view_count": 123
	},
	{
		"slug": "8",
		"title": "Understanding the time complexity of Reverse Integer",
		"problem": {
			"title": "Reverse Integer",
			"slug": "7"
		},
		"user": {
			"first_name": "Jessica",
			"last_name": "Garcia"
		},
		"date_created": "08.11.2024 15:30",
		"votes_sum": 28,
		"view_count": 190
	},
	{
		"slug": "9",
		"title": "Can someone explain the merge step in Merge k Sorted Lists?",
		"problem": {
			"title": "Merge k Sorted Lists",
			"slug": "23"
		},
		"user": {
			"first_name": "Daniel",
			"last_name": "Rodriguez"
		},
		"date_created": "08.11.2024 15:45",
		"votes_sum": 19,
		"view_count": 167
	},
	{
		"slug": "10",
		"title": "Optimizing space complexity for Best Time to Buy and Sell Stock",
		"problem": {
			"title": "Best Time to Buy and Sell Stock",
			"slug": "121"
		},
		"user": {
			"first_name": "Sophia",
			"last_name": "Hernandez"
		},
		"date_created": "08.11.2024 16:00",
		"votes_sum": 37,
		"view_count": 299
	}
]

type DiscussesTableWidgetProps = {
	/**
	 * @default false
	 */
	isMinimized?: boolean,
	userId?: number | string
	limit: number
}

function DiscussesTableWidget(props: DiscussesTableWidgetProps) {
	const {
		userId,
		isMinimized = false,
		limit
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
		search: search,
		user: userId
	});

	return (
		<div className="overflow-x-auto w-full mb-4">
			<div className={clsx('min-h-[50vh] flex flex-col rounded-md', {
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
								checked={ordering == 'votes_sum'}
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
						trashData.map((item, index) => {
							return (

								<Link key={index} to={`/discuss/${item.slug}`} className='flex gap-1 justify-start items-center border-b border-gray-200 last:border-b-0 py-2 text-xs sm:text-base'>
									<img src={DefaultUserImg} alt="img" className='rounded-full w-10 h-10 object-cover m-3 mr-0 hidden md:block' />
									<div className='flex flex-col flex-grow ml-3'>
										<p className='font-bold line-clamp-2'>{item.title}</p>
										{
											item.problem.title &&
											<Link to={`/problems/${item.problem.slug}`} className='font-medium line-clamp-2 hover:underline text-blue-500'>Problem: {item.problem.title}</Link>
										}
										<div>
											<span className='hidden sm:inline pr-2'>{t('userName')}:</span>
											<span className=''>{`${item.user.first_name ? item.user.first_name : ''} ${item.user.last_name ? item.user.last_name : ''}`}</span>
										</div>
										<div className='mt-1 flex flex-wrap items-center text-gray-600'>
											<span className='flex items-center mr-2'>
												<RxCountdownTimer className='mr-0 sm:mr-2' />
												<span className='truncate hidden sm:inline'>{t('postedTime')}</span>
											</span>
											<span>{item.date_created}</span>
										</div>
									</div>
									<div className='flex flex-shrink-1 flex-wrap max-w-[75px] sm:max-w-[90px] md:max-w-none'>
										<div className="flex justify-end w-full md:w-1/2 items-center border-b md:border-b-0 pb-2 md:pb-0 mb-2 md:mb-0">
											<BiSolidUpArrow color='gray' />
											<span className='ml-3 w-10 sm:w-12 md:w-16'>{item.votes_sum ? numberFormatter(item.votes_sum) : 0}</span>
										</div>
										<div className="flex justify-end w-full md:w-1/2 items-center">
											<IoEyeSharp color='gray' />
											<span className='ml-3 w-10 sm:w-12 md:w-16'>{item.view_count ? numberFormatter(item.view_count) : 0}</span>
										</div>
									</div>
								</Link>
							)
						})
					}
				</div>
			</div>
			<div className='mt-5'>
				<Pagination
					pageCount={comments ? comments.count / limit : 0}
					onPageChange={({ selected }) => setPage(selected + 1)}
				/>
			</div>
		</div>
	)
}

export default DiscussesTableWidget;