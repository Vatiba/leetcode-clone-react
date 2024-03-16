import Head from 'entities/Head';
import { Container } from 'shared';
import { LoginWidget } from 'widgets/login';

export default function Login() {

	return (
		<>
			<Head title="Login" />
			<Container className='flex justify-center my-36'>
				<LoginWidget />
			</Container>
		</>
	);
}
