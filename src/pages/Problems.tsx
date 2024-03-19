import Head from 'entities/Head';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'shared';
import { generateRandom } from 'shared/libs/helpers';
import {
	ProblemFiltersWidget,
	ProblemsTableWidget,
	ProblemsTagsWidget
} from 'widgets/problems';

const problems = [
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree1'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree2'
	},
	{
		status: false,
		title: '100. Same Tree',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree3'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree4'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree5'
	},
	{
		status: true,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree6'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Medium',
		acceptance: 48,
		slug: 'same-tree7'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree8'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree9'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree10'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree11'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree12'
	},
	{
		status: true,
		title: '100. Same Tree',
		difficulty: 'Hard',
		acceptance: 48,
		slug: 'same-tree13'
	},
	{
		status: false,
		title: 'Median of Two Sorted Arrays',
		difficulty: 'Easy',
		acceptance: 48,
		slug: 'same-tree14'
	},
]

export default function Problems() {
	const [showTopicTags, setShowTopicTags] = useState(false);
	const navigate = useNavigate();

	const onClickPickRandom = () => {
		const randomSlug = problems[generateRandom(0, problems.length - 1)].slug;
		navigate(`/problems/${randomSlug}`)
	}

	return (
		<>
			<Head title="Problems" />
			<Container>
				<div className='flex flex-col mt-24'>
					<ProblemsTagsWidget />

					<ProblemFiltersWidget
						showTopicTags={showTopicTags}
						setShowTopicTags={setShowTopicTags}
						onClickPickRandom={onClickPickRandom}
					/>

					<ProblemsTableWidget
						showTopicTags={showTopicTags}
						problems={problems}
					/>
				</div>
			</Container>
		</>
	);
}