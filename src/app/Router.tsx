import { lazy, ReactNode, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from 'entities/auth';
import { Navbar, Footer } from 'widgets';
import { Loading } from 'shared/ui';

const HomeScreen = lazy(() => import('pages/Home'));
const ProtectedScreen = lazy(() => import('pages/Protected'));
const ProblemsScreen = lazy(() => import('pages/Problems'));
const ProblemScreen = lazy(() => import('pages/Problem'));
const ContestScreen = lazy(() => import('pages/Contest'));
const LoginScreen = lazy(() => import('pages/Login'));
const NotFoundScreen = lazy(() => import('pages/NotFound'));
const AboutUsScreen = lazy(() => import('pages/AboutUs'));
const DiscussScreen = lazy(() => import('pages/Discuss'));

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className="main">
				{children}
			</div>
			<Footer />
		</div>
	);
}

function Routes() {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <Outlet />,
			children: [
				{
					index: true,
					element: (
						<Layout>
							<HomeScreen />
						</Layout>
					),
				},
				{
					path: '/problems',
					element: (
						<Layout>
							<ProblemsScreen />
						</Layout>
					),
				},
				{
					path: '/problems/:problemSlug',
					element: (
						<ProblemScreen />
					),
				},
				{
					path: '/contest',
					element: (
						<Layout>
							<ContestScreen />
						</Layout>
					),
				},
				{
					path: '/discuss',
					element: (
						<Layout>
							<DiscussScreen />
						</Layout>
					),
				},
				// {
				// 	path: '/top-rating',
				// 	element: <ProtectedScreen />,
				// },
				{
					path: '/profile',
					element: (
						<Layout>
							<RequireAuth>
								<ProtectedScreen />
							</RequireAuth>
						</Layout>
					),
				},
				{
					path: '/about-us',
					element: (
						<Layout>
							<AboutUsScreen />
						</Layout>
					),
				},
				{
					path: '/contact',
					element: (
						<Layout>
							<AboutUsScreen />
						</Layout>
					),
				},
				{
					path: '/login',
					element: (
						<Layout>
							<LoginScreen />
						</Layout>
					),
				},
				{
					path: '*',
					element: (
						<Layout>
							<NotFoundScreen />
						</Layout>
					),
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
