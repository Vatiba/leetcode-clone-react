import clsx from 'clsx';
import useGetCategories from 'entities/problems/api/useGetCategories';
import { useEffect, useState } from 'react';
import { useDebounceValue } from 'shared/hooks';

type ProblemTagsWidgetProps = {
	onTagChange: (tag: number) => void
}

function ProblemTagsWidget(props: ProblemTagsWidgetProps) {
	const {
		onTagChange,
	} = props;

	const [tag, setTag] = useState<number>();

	const debounceTag = useDebounceValue(tag, 800);

	useEffect(() => {
		onTagChange(debounceTag);
	}, [debounceTag])

	const {
		data: categories,
		isLoading: categoriesLoading,
		isError: categoriesError
	} = useGetCategories();

	return (
		<div className='flex flex-wrap mb-5 gap-1'>
			<button
				className={
					clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
						'border-green-600 text-white bg-green-600': tag === 1
					})
				}
				onClick={() => setTag(1)}
			>
				Array
			</button>
			<button
				className={
					clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
						'border-green-600 text-white bg-green-600': tag === 2
					})
				}
				onClick={() => setTag(2)}
			>
				Number
			</button>
			<button
				className={
					clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
						'border-green-600 text-white bg-green-600': tag === 3
					})
				}
				onClick={() => setTag(3)}
			>
				Hash table
			</button>
			<button
				className={
					clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
						'border-green-600 text-white bg-green-600': tag === 4
					})
				}
				onClick={() => setTag(4)}
			>
				Linked list
			</button>
		</div>
	)
}

export default ProblemTagsWidget