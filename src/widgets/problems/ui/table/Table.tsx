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
					<tr key={1}>
						<td>{1}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Array</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								35.74%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							'text-orange-600': true
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('medium')}
							</Link>
						</td>
						<td>🔥 10</td>
					</tr>
					<tr key={2}>
						<td>{2}.</td>
						<td>
							<Link to={`/problems/hash-table`}>

							</Link>
						</td>
						<td>
							<Link to={`/problems/hash-table`}>
								<div className='flex flex-col'>
									<span>Hash table</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/hash-table`}>
								71.27%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							'text-red-600': 'hard' === 'hard',
						})}>
							<Link to={`/problems/hash-table`} className='font-bold'>
								{t('hard')}
							</Link>
						</td>
						<td>🔥 50</td>
					</tr>
					<tr key={3}>
						<td>{3}.</td>
						<td>
							<Link to={`/problems/two-sum`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/two-sum`}>
								<div className='flex flex-col'>
									<span>Two-sum</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/two-sum`}>
								22.85%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							'text-red-600': true
						})}>
							<Link to={`/problems/two-sum`} className='font-bold'>
								{t('hard')}
							</Link>
						</td>
						<td>🔥 10</td>
					</tr>
					<tr key={4}>
						<td>{4}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Array</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								86.50%
							</Link>
						</td>
						<td className={clsx({
							'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('easy')}
							</Link>
						</td>
						<td>🔥 5</td>
					</tr>
					<tr key={5}>
						<td>{5}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Maximum Subarray</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								54.78%
							</Link>
						</td>
						<td className={clsx({
							'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('easy')}
							</Link>
						</td>
						<td>🔥 45</td>
					</tr>
					<tr key={6}>
						<td>{6}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Reverse Integer</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								54.63%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							'text-orange-600': true
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('medium')}
							</Link>
						</td>
						<td>🔥 55</td>
					</tr>
					<tr key={7}>
						<td>{7}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Remove Duplicates from Sorted Array</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								87.28%
							</Link>
						</td>
						<td className={clsx({
							'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('easy')}
							</Link>
						</td>
						<td>🔥 60</td>
					</tr>
					<tr key={8}>
						<td>{8}.</td>
						<td>
							<Link to={`/problems/array`}>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Palindrome Number</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								67.41%
							</Link>
						</td>
						<td className={clsx({
							'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('easy')}
							</Link>
						</td>
						<td>🔥 30</td>
					</tr>
					<tr key={9}>
						<td>{9}.</td>
						<td>
							<Link to={`/problems/array`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								<div className='flex flex-col'>
									<span>Valid Parentheses</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/array`}>
								91.51%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							'text-orange-600': 'medium' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/array`} className='font-bold'>
								{t('medium')}
							</Link>
						</td>
						<td>🔥 10</td>
					</tr>
					<tr key={10}>
						<td>{10}.</td>
						<td>
							<Link to={`/problems/number`}>
								{true && <MdOutlineCheckCircleOutline className='text-green-600' />}
							</Link>
						</td>
						<td>
							<Link to={`/problems/number`}>
								<div className='flex flex-col'>
									<span>Number</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/number`}>
								53.24%
							</Link>
						</td>
						<td className={clsx({
							'text-green-600': 'easy' === 'easy',
							// 'text-orange-600': 'ease' === 'medium',
							// 'text-red-600': 'ease' === 'hard',
						})}>
							<Link to={`/problems/number`} className='font-bold'>
								{t('easy')}
							</Link>
						</td>
						<td>🔥 20</td>
					</tr>
					<tr key={11}>
						<td>{11}.</td>
						<td>
							<Link to={`/problems/linked-list`}>
							</Link>
						</td>
						<td>
							<Link to={`/problems/linked-list`}>
								<div className='flex flex-col'>
									<span>Linked list</span>
								</div>
							</Link>
						</td>
						<td>
							<Link to={`/problems/linked-list`}>
								36.50%
							</Link>
						</td>
						<td className={clsx({
							// 'text-green-600': 'easy' === 'easy',
							'text-orange-600': 'medium' === 'medium',
							// 'text-red-600': 'hard' === 'hard',
						})}>
							<Link to={`/problems/linked-list`} className='font-bold'>
								{t('hard')}
							</Link>
						</td>
						<td>🔥 40</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ProblemsTableWidget;