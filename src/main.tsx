import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'shared/libs'
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</I18nextProvider>
	</React.StrictMode>
);
