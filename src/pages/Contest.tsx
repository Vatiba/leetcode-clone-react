import Head from 'entities/Head';
import { useTranslation } from 'react-i18next';
import { Container } from 'shared';
import ContestImg from 'shared/assets/img/contest.jpg';
import { PastContestsTableWidget } from 'widgets/contest';

import { useGetFinishedContests, useGetFutureContests, useGetOpenContests, useGetSubscriptionStartedContests } from 'entities/contest';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPageOffset } from 'shared/libs/helpers';
import { Pagination } from 'shared/ui';

// trash
import trash1 from 'shared/assets/trash/biweekly.png';
import trash2 from 'shared/assets/trash/card_img_1654.png';
import trash3 from 'shared/assets/trash/card_img_1659.png';
import trash4 from 'shared/assets/trash/weekly-default.png';

const limit = 30;

function Contest() {
	const { t } = useTranslation();
	const [page, setPage] = useState(1);

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
		limit: limit,
		offset: getPageOffset(page, limit),
	});
	const {
		data: openContests,
		isLoading: openContestsLoading,
		isError: openContestsError,
	} = useGetOpenContests({
		limit: 30,
		offset: 0,
	});
	const {
		data: subscriptionStartedContests,
		isLoading: subscriptionStartedContestsLoading,
		isError: subscriptionStartedContestsError
	} = useGetSubscriptionStartedContests({
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
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash1}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 411</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash2}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 290</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash4}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 85</p>
							</Link>
						</div>
					</section>

					<section className='flex flex-col mb-8'>
						<h3 className='font-bold text-lg'>
							{t('subscribtionStarted')}
						</h3>
						<div className='flex flex-wrap lg:-mx-2 -mx-1'>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash4}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 411</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash1}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 290</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash3}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 85</p>
							</Link>
						</div>
					</section><section className='flex flex-col mb-8'>
						<h3 className='font-bold text-lg'>
							{t('futureContents')}
						</h3>
						<div className='flex flex-wrap lg:-mx-2 -mx-1'>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash1}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 88</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash2}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 405</p>
							</Link>
							<Link to={`/contest/open/1`} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
								<img
									className='rounded-lg'
									src={trash4}
									alt="img"
								/>
								<p className='mt-3 font-bold'>Contest 25</p>
							</Link>
						</div>
					</section>
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
							{
								finishedContests && finishedContests.count / limit > 1 ?
									<Pagination
										pageCount={finishedContests.count / limit}
										onPageChange={({ selected }) => setPage(selected)}
									/> : null
							}
						</section>
					}
				</div>
			</Container>
		</>
	)
}

export default Contest