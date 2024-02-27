import Head from 'entities/Head';
import { useState } from 'react';
import { Container } from 'shared';
import {
	ProblemFiltersWidget,
	ProblemsTableWidget,
	ProblemsTagsWidget
} from 'widgets/problems';


export default function Problems() {
	const [ showTopicTags, setShowTopicTags ] = useState(false);

	return (
		<>
			<Head title="Home" />
			<Container>
				<div className='flex flex-col mt-24'>
					<ProblemsTagsWidget />

					<ProblemFiltersWidget showTopicTags={showTopicTags} setShowTopicTags={setShowTopicTags} />

					<ProblemsTableWidget showTopicTags={showTopicTags} />
				</div>
			</Container>
		</>
	);
}