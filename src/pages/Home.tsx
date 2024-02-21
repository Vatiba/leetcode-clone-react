import { useTranslation } from 'react-i18next';
import Head from 'entities/Head';
import { LoginWidget } from 'widgets';
import { Container } from 'shared/ui';

export default function HomeScreen() {
	const { t } = useTranslation();

	return (
		<>
			<Head title="Home" />
			<Container>
				<div className='flex flex-wrap justify-around items-center h-[600px] lg:h-[800px]'>
					<h1 className='text-5xl font-bold'>
						{t('inspiration')}
					</h1>
					<LoginWidget />
				</div>

				
			</Container>
		</>
	);
}
