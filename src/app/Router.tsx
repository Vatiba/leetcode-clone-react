import Profile from 'pages/Profile';
import { lazy, ReactNode, Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import Logo from 'shared/assets/img/logo.png';
import { Loading } from 'shared/ui';
import { Footer, Navbar } from 'widgets';

const HomeScreen = lazy(() => import('pages/Home'));
const ProtectedScreen = lazy(() => import('pages/Protected'));
const ProblemsScreen = lazy(() => import('pages/Problems'));
const ProblemScreen = lazy(() => import('pages/Problem'));
const ContestScreen = lazy(() => import('pages/Contest'));
const LoginScreen = lazy(() => import('pages/Login'));
const NotFoundScreen = lazy(() => import('pages/NotFound'));
const AboutUsScreen = lazy(() => import('pages/AboutUs'));
const DiscussesScreen = lazy(() => import('pages/Discusses'));
const DiscussScreen = lazy(() => import('pages/Discuss'));
const AddDiscuss = lazy(() => import('pages/AddDiscuss'));

function Layout({ children }: { children: ReactNode }) {
	return (
		<Suspense
			fallback={
				<div className='flex justify-center items-center w-screen h-screen'>
					<img src={Logo} alt="Logo" />
				</div>
			}
		>
			<div className='wrapper'>
				<Navbar />
				<div className="main">
					{children}
				</div>
				<Footer />
			</div>
		</Suspense>
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
							<DiscussesScreen />
						</Layout>
					),
				},
				{
					path: '/discuss/:discussSlug',
					element: (
						<Layout>
							<DiscussScreen />
						</Layout>
					),
				},
				{
					path: '/add/discuss',
					element: (
						<Layout>
							<AddDiscuss />
						</Layout>
					),
				},
				// {
				// 	path: '/top-rating',
				// 	element: <ProtectedScreen />,
				// },
				{
					path: '/profile/:userId',
					element: (
						<Layout>
							{/* <RequireAuth> */}
							<Profile />
							{/* </RequireAuth> */}
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
