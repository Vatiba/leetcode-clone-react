import { useTranslation } from 'react-i18next';
import Head from 'entities/Head';
import { Login } from 'widgets/login';
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
					<Login />
				</div>
			</Container>
			{/* <div className="hero bg-sm md:bg-md flex-grow">
				<div className="hero-overlay bg-opacity-60" />
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-lg">
						<h1 className="mb-5 text-5xl font-bold">{t('hello')}</h1>
						<p className="mb-5">
							Oguzcode wep programmasyna hosh geldiniz. Siz registrasiya bolanynyzdan sonra hemme mumkinchilikleri ullanyp bilersiniz
						</p>
						<Link
							className='btn btn-primary'
							to="/login"
							replace
						>
							Registrasiya
						</Link>
					</div>
				</div>
			</div> */}
		</>
	);
}
