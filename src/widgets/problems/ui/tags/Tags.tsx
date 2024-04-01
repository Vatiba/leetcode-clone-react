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
			{
				!categoriesError ?
					!categoriesLoading ?
						categories?.length ?
							categories.map(item => {
								return (
									<button
										key={item.id}
										className={
											clsx('flex justify-center items-center px-3 py-1 border rounded-full cursor-pointer', {
												'border-green-600 text-white bg-green-600': tag === item.id
											})
										}
										onClick={() => setTag(item.id)}
									>
										{item.name}
									</button>
								)
							})
							: null
						:
						new Array(5).fill(0).map((_, index) => {
							return (
								<div
									key={index}
									className='animate-pulse bg-gray-200 rounded-full h-9 w-16'
								/>
							)
						})
					: null
			}
		</div>
	)
}

export default ProblemTagsWidget