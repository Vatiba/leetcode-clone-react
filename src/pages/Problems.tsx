import Head from 'entities/Head';
import { useGetProblems } from 'entities/problems';
import { ProblemDifficulties } from 'entities/types';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'shared';
import { generateRandom, getPageOffset } from 'shared/libs/helpers';
import { Pagination } from 'shared/ui';
import {
	ProblemFiltersWidget,
	ProblemsTableWidget,
	ProblemsTagsWidget
} from 'widgets/problems';

const limit = 15;

export default function Problems() {
	const [showTopicTags, setShowTopicTags] = useState(false);
	const navigate = useNavigate();

	const [search, setSearch] = useState('');
	const [difficulty, setDifficulty] = useState<ProblemDifficulties | ''>('');
	const [tag, setTag] = useState<number>();
	const [page, setPage] = useState<number>(1);

	const offset = useMemo(() => {
		return getPageOffset(page, limit);
	}, [page, limit]);

	const {
		data: problems,
		isLoading: problemsLoading,
		isError: problemsError,
	} = useGetProblems({
		category: tag || '',
		search: search || '',
		difficulty: difficulty || '',
		limit: limit || '',
		offset: offset || '',
	});

	const onClickPickRandom = () => {
		if (problems?.results.length) {
			const randomSlug = problems.results[generateRandom(0, problems.results.length - 1)].slug;
			navigate(`/problems/${randomSlug}`)
		}
	}

	return (
		<>
			<Head title="Problems" />
			<Container>
				<div className='flex flex-col mt-24'>
					<ProblemsTagsWidget
						onTagChange={(tag) => setTag(tag)}
					/>

					<ProblemFiltersWidget
						showTopicTags={showTopicTags}
						setShowTopicTags={setShowTopicTags}
						onClickPickRandom={onClickPickRandom}
						onDifficultyChange={(value) => setDifficulty(value)}
						onSearchChange={(value) => setSearch(value)}
					/>

					<ProblemsTableWidget
						showTopicTags={showTopicTags}
						problems={problems?.results}
						problemsLoading={problemsLoading}
						problemsError={problemsError}
					/>
					{
						problems && problems.count / limit > 1 ?
							<Pagination
								pageCount={problems.count / limit}
								onPageChange={({ selected }) => setPage(selected)}
							/> : null
					}
				</div>
			</Container>
		</>
	);
}