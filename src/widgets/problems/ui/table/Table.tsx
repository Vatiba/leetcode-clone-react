import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoCalendar } from "react-icons/go";

function ProblemsTableWidget() {
	const { t } = useTranslation();

	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full">
				<thead>
					<tr>
						<th>{t('statusName')}</th>
						<th>{t('title')}</th>
						<th>{t('difficulty')}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<GoCalendar className='text-green-600' />
						</td>
						<td>
							100. Same Tree
						</td>
						<td className='text-green-600'>
							Easy
						</td>
					</tr>
					<tr>
						<td>
						</td>
						<td>
							Add Two Numbers
						</td>
						<td className='text-orange-300'>
							Medium
						</td>
					</tr>
					<tr>
						<td>
						</td>
						<td>
							Median of Two Sorted Arrays
						</td>
						<td className='text-red-600'>
							Hard
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ProblemsTableWidget;