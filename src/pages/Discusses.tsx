import Head from 'entities/Head';
import { useTranslation } from 'react-i18next';
import { Container } from 'shared/ui';
import { DiscussesTableWidget } from 'widgets/discuss';

export default function DiscussesScreen() {
	const { t } = useTranslation();

	return (
		<>
			<Head title="Discuss" />
			<Container>
				<div className='mt-6'>
					<DiscussesTableWidget />
				</div>
			</Container>
		</>
	);
}
