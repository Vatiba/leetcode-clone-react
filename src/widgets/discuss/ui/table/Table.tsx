import { useTranslation } from 'react-i18next';
import { BiSolidUpArrow } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";

// trash
import clsx from 'clsx';
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DefaultUserImg from 'shared/assets/img/default_avatar.jpg';
import { numberFormatter } from 'shared/libs';

const discusses = [
	{
		title: 'Meta phone screen',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 2305,
		viewedCount: 2305,
	},
	{
		title: 'DoorDash US | Phone screen | Maximum Profit in Job Scheduling',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 23,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 23,
	},
	{
		title: 'Google | L5 | Unmerge two words from given ',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 514,
		viewedCount: 514,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 5105,
		viewedCount: 5105,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 842,
		viewedCount: 842,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 1,
		viewedCount: 1,
	},
	{
		title: 'Google | L5 | Unmerge two words from given Dictionary which are merged with merge',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 44,
		viewedCount: 44,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 23,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 23,
	},
	{
		title: 'Google | L5 | Unmerge two words from given Dictionary which are merged with merge',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 2305,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 32,
		viewedCount: 2305,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 2305,
	},
	{
		title: 'Weekly contest',
		user: 'Bezirgen Yaylymow',
		time: '20.01.2024 07:38',
		upvotedCount: 23,
		viewedCount: 2305,
	},
]

function DiscussesTableWidget() {
	const { t } = useTranslation();
	const [type, setType] = useState<string>('1');

	return (
		<div className="overflow-x-auto w-full mb-4">

			<div className='flex flex-col bg-gray-50 rounded-md'>
				<div className='flex flex-wrap gap-3 items-center justify-between py-3 px-1 bg-gray-200 rounded-t-md border-b border-gray-200'>

					<select
						className="select select-xs select-bordered block md:hidden order-2 sm:order-1"
						name="location"
						onChange={({ target: { value } }) => setType(value)}
						value={type}
					>
						<option value={'1'}>
							{t('newestToOldest')}
						</option>
						<option value={'2'}>
							{t('mostVotes')}
						</option>
						<option value={'3'}>
							{t('mostViewed')}
						</option>
					</select>
					<div className='hidden md:flex order-2 sm:order-1 select-none'>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer border-r border-gray-300 pr-4', {
							'font-bold text-black': type == '1'
						})}>
							<input className='opacity-0' type='radio' name='type' value={1} checked={!!type} onClick={(e) => setType(e.currentTarget.value)} />
							{t('newestToOldest')}
						</label>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer border-r border-gray-300 pr-4', {
							'font-bold text-black': type == '2'
						})}>
							<input className='opacity-0' type='radio' name='type' value={2} checked={!!type} onClick={(e) => setType(e.currentTarget.value)} />
							{t('mostVotes')}
						</label>
						<label className={clsx('transition-all text-gray-400 text-xs cursor-pointer pr-4', {
							'font-bold text-black': type == '3'
						})}>
							<input className='opacity-0' type='radio' name='type' value={3} checked={!!type} onClick={(e) => setType(e.currentTarget.value)} />
							{t('mostViewed')}
						</label>
					</div>

					<div className='flex items-center mr-3 order-1 sm:order-2'>
						<label className="input input-xs input-bordered flex items-center gap-2 mr-2">
							<input type="text" className="grow bg-transparent outline-none" placeholder="Search" />
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
						</label>
						<button className="btn btn-xs flex items-center">
							{t('new')}
							<IoMdAdd className='ml-1' />
						</button>
					</div>
				</div>
				<div className='flex flex-col px-2'>
					{
						discusses.map((discuss, index) => {
							return (
								<Link key={index} to="#" className='flex gap-1 justify-start items-center border-b border-gray-200 last:border-b-0 py-2 text-xs sm:text-base'>
									<img src={DefaultUserImg} alt="img" className='rounded-full w-10 h-10 object-cover m-3 mr-0 hidden md:block' />
									<div className='flex flex-col flex-grow ml-3'>
										<p className='font-bold line-clamp-2'>{discuss.title}</p>
										<div>
											<span className='hidden sm:inline pr-2'>User name:</span>
											<span className=''>{discuss.user}</span>
										</div>
										<div className='mt-1 flex flex-wrap items-center text-gray-600'>
											<span className='flex items-center mr-2'>
												<RxCountdownTimer className='mr-0 sm:mr-2' />
												<span className='truncate hidden sm:inline'>Posted time:</span>
											</span>
											<span>{discuss.time}</span>
										</div>
									</div>
									<div className='flex flex-shrink-1 flex-wrap max-w-[75px] sm:max-w-[90px] md:max-w-none'>
										<div className="flex justify-end w-full md:w-1/2 items-center border-b md:border-b-0 pb-2 md:pb-0 mb-2 md:mb-0">
											<BiSolidUpArrow color='gray' />
											<span className='ml-3 w-10 sm:w-12 md:w-16'>{numberFormatter(discuss.upvotedCount)}</span>
										</div>
										<div className="flex justify-end w-full md:w-1/2 items-center">
											<IoEyeSharp color='gray' />
											<span className='ml-3 w-10 sm:w-12 md:w-16'>{numberFormatter(discuss.viewedCount)}</span>
										</div>
									</div>
								</Link>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default DiscussesTableWidget;