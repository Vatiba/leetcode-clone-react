import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { NavItem } from 'widgets/navbar';
import { useAuth } from '../model';

function AuthStatus() {
	const auth = useAuth();
	const navigate = useNavigate();
	const { t } = useTranslation();

	if (!auth.data?.user) {
		return <NavItem href="/login">{t('signIn')}</NavItem>;
	}

	return (
		<p>
			Welcome {auth.data.user.first_name}!{' '}
			<button
				className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
				onClick={() => {
					auth.signout(() => navigate('/'));
				}}
			>
				{t('signOut')}
			</button>
		</p>
	);
}

export default AuthStatus;