import Router from 'app/Router';
import { AuthProvider } from 'app/providers';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

export default function App() {
	return (
		<HelmetProvider>
			<AuthProvider>
				<Toaster />
				<Router />
			</AuthProvider>
		</HelmetProvider>
	);
}
