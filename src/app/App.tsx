import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from 'app/providers';
import Router from 'app/Router';

export default function App() {
	return (
		<HelmetProvider>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</HelmetProvider>
	);
}
