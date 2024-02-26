import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from 'entities/auth';
import { Navbar, Footer } from 'widgets';
import { Loading } from 'shared/ui';

const HomeScreen = lazy(() => import('pages/Home'));
const ProtectedScreen = lazy(() => import('pages/Protected'));
const ProblemsScreen = lazy(() => import('pages/Problems'));
const LoginScreen = lazy(() => import('pages/Login'));
const NotFoundScreen = lazy(() => import('pages/NotFound'));
const AboutUsScreen = lazy(() => import('pages/AboutUs'));

function Layout() {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className="main">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

function Routes() {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomeScreen />,
				},
				{
					path: '/problems',
					element: <ProblemsScreen />,
				},
				{
					path: '/contest',
					element: <ProtectedScreen />,
				},
				{
					path: '/discuss',
					element: <ProtectedScreen />,
				},
				{
					path: '/top-rating',
					element: <ProtectedScreen />,
				},
				{
					path: '/profile',
					element: (
						<RequireAuth>
							<ProtectedScreen />
						</RequireAuth>
					),
				},
				{
					path: '/about-us',
					element: <AboutUsScreen />,
				},
				{
					path: '/contact',
					element: <AboutUsScreen />,
				},
				{
					path: '/login',
					element: <LoginScreen />,
				},
				{
					path: '*',
					element: <NotFoundScreen />,
				},
			],
		},
	];
	const element = useRoutes(routes);

	return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default function Router() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}
