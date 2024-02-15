import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from '~/components/auth/AuthProvider';
import NavBar from '~/components/shared/Nav/NavBar';
import Loading from '~/components/shared/Loading';

const HomeScreen = lazy(() => import('~/components/screens/Home'));
const ProtectedScreen = lazy(() => import('~/components/screens/Protected'));
const LoginScreen = lazy(() => import('~/components/screens/Login'));
const NotFoundScreen = lazy(() => import('~/components/screens/NotFound'));
const AboutUsScreen = lazy(() => import('~/components/screens/AboutUs'));

function Layout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
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
					element: <ProtectedScreen />,
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
