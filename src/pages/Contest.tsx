import Head from 'entities/Head';
import { useTranslation } from 'react-i18next';
import { RxCountdownTimer } from "react-icons/rx";
import { Container } from 'shared';
import ContestImg from 'shared/assets/img/contest.jpg';
import { PastContestsTableWidget } from 'widgets/contest';

// trash
import { useGetFinishedContests, useGetFutureContests, useGetOpenContests } from 'entities/contest';
import { Link } from 'react-router-dom';


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
					{
						!openContestsLoading ?
							!openContestsLoading && !openContestsError && openContests?.results.length ?
								<section className='flex flex-col mb-8'>
									<h3 className='font-bold text-lg'>
										{t('activeContests')}
									</h3>
									<div className='flex flex-wrap lg:-mx-2 -mx-1'>
										{
											openContests?.results.map(item => {
												return (
													<Link to={`/contest/open/${item.id}`} key={item.id} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
														<img
															className='rounded-lg'
															src={item.banner}
															alt="img"
														/>
														<p className='mt-3 font-bold'>{item.title}</p>
													</Link>
												)
											})
										}
									</div>
								</section>
								:
								null
							:
							<section className='flex flex-col mb-8'>
								<h3 className='font-bold text-lg'>
									{t('activeContests')}
								</h3>
								<div className='flex flex-wrap lg:-mx-2 -mx-1'>
									{
										new Array(3).fill(0).map((_, index) => {
											return (
												<div key={index} className='md:w-1/3 w-1/2 lg:p-2 p-1 animate-pulse'>
													<div className='w-full h-44 bg-gray-200 mb-3 rounded-lg' />
													<div className='w-8/12 h-6 rounded-md bg-gray-200' />
												</div>
											)
										})
									}
								</div>
							</section>
					}

					{
						!futureContestsLoading ?
							!futureContestsLoading && !futureContestsError && futureContests?.results.length ?
								<section className='flex flex-col mb-8'>
									<h3 className='font-bold text-lg'>
										{t('futureContents')}
									</h3>
									<div className='flex flex-wrap lg:-mx-2 -mx-1'>
										{
											futureContests?.results.map(item => {
												return (
													<Link to={`/contest/future/${item.id}`} key={item.id} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
														<img
															className='rounded-lg'
															src={item.banner}
															alt="img"
														/>
														<p className='mt-3 font-bold'>{item.title}</p>
														<div className='mt-1 flex items-center text-gray-600 text-sm'>
															<span className='flex items-center mr-2'>
																<RxCountdownTimer className='mr-2' />
																{t('startTime')}:
															</span>
															<span>{item.date_started}</span>
														</div>
													</Link>
												)
											})
										}
									</div>
								</section>
								:
								null
							:
							<section className='flex flex-col mb-8'>
								<h3 className='font-bold text-lg'>
									{t('futureContents')}
								</h3>
								<div className='flex flex-wrap lg:-mx-2 -mx-1'>
									{
										new Array(3).fill(0).map((_, index) => {
											return (
												<div key={index} className='md:w-1/3 w-1/2 lg:p-2 p-1 animate-pulse'>
													<div className='w-full h-44 bg-gray-200 mb-3 rounded-lg' />
													<div className='w-8/12 h-6 rounded-md bg-gray-200' />
												</div>
											)
										})
									}
								</div>
							</section>
					}
					{
						<section className='flex flex-col mb-3'>
							{
								finishedContests?.results.length ?
									<h3 className='font-bold text-lg'>
										{t('pastContests')}
									</h3>
									:
									null
							}
							<PastContestsTableWidget
								data={finishedContests?.results}
								isLoading={finishedContestsLoading}
								isError={finishedContestsError}
							/>
						</section>
					}
				</div>
			</Container>
		</>
	)
}

export default Contest