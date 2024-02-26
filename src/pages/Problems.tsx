import Head from 'entities/Head';
import { Container } from 'shared';
import { ProblemsTableWidget } from 'widgets/problems';

export default function Problems() {
	return (
		<>
			<Head title="Home" />
			<Container>
				<ProblemsTableWidget />
			</Container>
		</>
	);
}