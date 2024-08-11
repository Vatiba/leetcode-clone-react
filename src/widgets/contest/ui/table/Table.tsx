import { ContestDto } from 'entities/contest';
import { useTranslation } from 'react-i18next';
import { RxCountdownTimer } from "react-icons/rx";
import { Link } from 'react-router-dom';

// trash
import trashImg1 from 'shared/assets/trash/biweekly.png';
import trashImg2 from 'shared/assets/trash/card_img_1654.png';
import trashImg3 from 'shared/assets/trash/card_img_1659.png';
import trashImg4 from 'shared/assets/trash/weekly-default.png';

const pastContests = [
	{
		img: trashImg1,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg2,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg3,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg4,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg1,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg2,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg3,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg4,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg1,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg2,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg3,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg4,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg1,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
	{
		img: trashImg2,
		title: 'Weekly contest',
		time: '20.01.2024',
	},
]

type PastContestsTableWidgetProps = {
	data?: ContestDto[]
	isLoading: boolean
	isError: boolean
}

function PastContestsTableWidget(props: PastContestsTableWidgetProps) {
	const {
		data,
		isLoading,
		isError
	} = props;
	const { t } = useTranslation();

	return (
		<div className="overflow-x-auto w-full mb-4">
			<table className="table w-full">
				<tbody>
					{
						pastContests?.map((contest, index) => {
							return (
								<tr key={index}>
									<td className='w-44'>
										<Link to={`/contest/past/${index + 1}`}>
											<img src={contest.img} alt="img" className='rounded-lg w-full' />
										</Link>
									</td>
									<td>
										<div className='flex flex-col'>
											<Link to={`/contest/past/${index + 1}`}>
												<span>{contest.title}</span>
											</Link>
											<div className='mt-1 flex items-center text-gray-600 text-sm'>
												<span className='flex items-center mr-2'>
													<RxCountdownTimer className='mr-2' />
													{t('endedTime')}:
												</span>
												<span>{contest.time}</span>
											</div>
										</div>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default PastContestsTableWidget;