import { useGetOpenContests } from "entities/contest";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// trash

const OlimpiadsWidget = () => {
	const { t } = useTranslation();


	const {
		data: openContests,
		isLoading: openContestsLoading,
		isError: openContestsError,
	} = useGetOpenContests({
		limit: 30,
		offset: 0,
	});

	return (
		<section className='flex flex-col'>
			{
				openContests?.results.length ?
					<h3 className='font-bold text-2xl'>
						{t('olimpiads')}
					</h3>
					: null
			}
			{
				!openContestsLoading ?
					!openContestsLoading && !openContestsError && openContests?.results.length ?
						<div className='flex flex-wrap lg:-mx-2 -mx-1'>
							{
								openContests?.results.map(item => {
									return (
										<Link to={`/contest/active/${item.id}`} key={item.id} className='md:w-1/3 w-1/2 lg:p-2 p-1'>
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
						:
						null
					:
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
			}
		</section>
	)
}

export default OlimpiadsWidget;