import { Link } from 'react-router-dom';
import Head from '~/components/shared/Head';

export default function HomeScreen() {
	return (
		<>
			<Head title="Home" />
			<div className="hero bg-sm md:bg-md flex-grow">
				<div className="hero-overlay bg-opacity-60" />
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-lg">
						<h1 className="mb-5 text-5xl font-bold">Hemma salam</h1>
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
			</div>
		</>
	);
}
