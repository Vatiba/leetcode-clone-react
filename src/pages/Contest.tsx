import React from 'react';
import Head from 'entities/Head';
import ContestImg from 'shared/assets/img/contest.jpg';
import { useTranslation } from 'react-i18next';
import { Container } from 'shared';
import { RxCountdownTimer } from "react-icons/rx";
import { PastContestsTableWidget } from 'widgets/contest';

// trash
import trashImg1 from 'shared/assets/trash/biweekly.png';
import trashImg2 from 'shared/assets/trash/card_img_1654.png';
import trashImg3 from 'shared/assets/trash/card_img_1659.png';
import trashImg4 from 'shared/assets/trash/weekly-default.png';
import { useGetFutureContests, useGetFinishedContests, useGetOpenContests } from 'entities/contest';


function Contest() {
	const { t } = useTranslation();

	const {
		data: futureContests,
		isLoading: futureContestsLoading,
		isError: futureContestsError,
	} = useGetFutureContests({
		limit: 30,
		offset: 0,
	});
	const {
		data: finishedContests,
		isLoading: finishedContestsLoading,
		isError: finishedContestsError,
	} = useGetFinishedContests({
		limit: 30,
		offset: 0,
	});
	const {
		data: openContests,
		isLoading: openContestsLoading,
		isError: openContestsError,
	} = useGetOpenContests({
		limit: 30,
		offset: 0,
	});


	return (
		<>
			<Head title="Contest" />
			<div className='h-[270px] md:h-[320px] lg:h-[400px] w-full flex justify-center object-cover' style={{ backgroundColor: 'rgb(37, 43, 50)' }}>
				<img
					className='h-full w-full max-w-[1020px] object-cover block'
					src={ContestImg}
					alt="contest img"
				/>
			</div>
			<Container>
				<div className='mt-4'>
					<section className='flex flex-col mb-8'>
						<h3 className='font-bold text-lg'>
							{t('activeContests')}
						</h3>
						<div className='flex flex-wrap lg:-mx-2 -mx-1'>
							{
								openContests?.results.map(item => {
									return (
										<div className='md:w-1/3 w-1/2 lg:p-2 p-1'>
											<img
												className='rounded-lg'
												src={item.banner}
												alt="img"
											/>
											<p className='mt-3 font-bold'>{item.title}</p>
										</div>
									)
								})
							}
							<div className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trashImg4}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Weekly Contest 291</p>
							</div>
							<div className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trashImg1}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Weekly Contest 291</p>
							</div>
						</div>
					</section>
					<section className='flex flex-col mb-3'>
						<h3 className='font-bold text-lg'>
							{t('futureContents')}
						</h3>
						<div className='flex flex-wrap lg:-mx-2 -mx-1'>
							<div className='md:w-1/3 w-1/2 lg:p-2 p-1 flex flex-col'>
								<img
									className='rounded-lg'
									src={trashImg2}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Weekly Contest 291</p>
								<div className='mt-1 flex items-center text-gray-600 text-sm'>
									<span className='flex items-center mr-2'>
										<RxCountdownTimer className='mr-2' />
										Start time:
									</span>
									<span>27.02.2024 11:00</span>
								</div>
							</div>
							<div className='md:w-1/3 w-1/2 lg:p-2 p-1 flex flex-col'>
								<img
									className='rounded-lg'
									src={trashImg1}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Weekly Contest 291</p>
								<div className='mt-1 flex items-center text-gray-600 text-sm'>
									<span className='flex items-center mr-2'>
										<RxCountdownTimer className='mr-2' />
										Start time:
									</span>
									<span>27.02.2024 11:00</span>
								</div>
							</div>
							<div className='md:w-1/3 w-1/2 lg:p-2 p-1 flex flex-col'>
								<img
									className='rounded-lg'
									src={trashImg3}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Weekly Contest 291</p>
								<div className='mt-1 flex items-center text-gray-600 text-sm'>
									<span className='flex items-center mr-2'>
										<RxCountdownTimer className='mr-2' />
										Start time:
									</span>
									<span>27.02.2024 11:00</span>
								</div>
							</div>
						</div>
					</section>
					<section className='flex flex-col mb-3'>
						<h3 className='font-bold text-lg'>
							{t('pastContests')}
						</h3>
						<PastContestsTableWidget />
					</section>
				</div>
			</Container>
		</>
	)
}

export default Contest