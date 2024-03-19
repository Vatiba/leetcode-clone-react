import { useTranslation } from 'react-i18next';
import Head from 'entities/Head';
import { LoginWidget } from 'widgets';
import { Container } from 'shared/ui';
import { OlimpiadsWidget, CommentsWidget, TablesWidget } from 'widgets/home';

export default function HomeScreen() {
	const { t } = useTranslation();

	return (
		<>
			<Head title="Home" />
			<Container>
				<div className='flex flex-wrap justify-around items-center my-10'>
					<h1 className='text-center text-3xl lg:text-5xl font-bold max-w-md lg:leading-snug mb-10'>
						{t('inspiration')}
					</h1>
					<LoginWidget />
				</div>

				<OlimpiadsWidget />

				{/* <CommentsWidget /> */}

				<TablesWidget />

			</Container>
		</>
	);
}
