import clsx from 'clsx';
import { useState } from 'react';

const tags = [
	{
		id: 1,
		name: 'Array'
	},
	{
		id: 2,
		name: 'String'
	},
	{
		id: 3,
		name: 'Hash table'
	},
	{
		id: 4,
		name: 'Math'
	},
	{
		id: 5,
		name: 'Dynamic programming'
	},
	{
		id: 6,
		name: 'Sorting'
	},
	{
		id: 7,
		name: 'Greedy'
	},
]
type ProblemTagsWidgetProps = {}

function ProblemTagsWidget(props: ProblemTagsWidgetProps) {
	const { } = props;

	const [selectedId, setSelectedId] = useState<number>();

	return (
		<div className='flex flex-wrap mb-5 gap-1'>
			{
				tags.map(tag => {
					return (
						<button
							key={tag.id}
							className={
								clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
									'border-green-600 text-white bg-green-600': selectedId === tag.id
								})
							}
							onClick={() => setSelectedId(tag.id)}
						>
							{tag.name}
						</button>
					)
				})
			}
		</div>
	)
}

export default ProblemTagsWidget