import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';
import { NavItem } from 'widgets/navbar';
import { useAuth } from '../model';

function AuthStatus() {
	const { data, signout, } = useAuth();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [avatar, setAvatar] = useState(data?.user?.avatar || AvatarPlaceholder);

	if (!data || !data?.user) {
		return <NavItem href="/login?loginType=signIn">{t('signIn')}</NavItem>;
	}

	return (
		<div className="dropdown">
			<div className="avatar" tabIndex={0} role="button">
				<div className="w-10 h-10 rounded-full">
					<img src={avatar} onError={() => setAvatar(AvatarPlaceholder)} />
				</div>
			</div>
			<div className='dropdown-content z-[1] p-2 shadow bg-base-100 rounded-lg w-52 right-0' tabIndex={0}>
				<h3 className='font-bold text-center mb-1 pb-2 border-b'>
					{`${data.user.first_name ? data.user.first_name : ''} ${data.user.last_name ? data.user.last_name : ''}`}
				</h3>
				<ul className='menu menu-compact'>
					<li><a
						className='rounded-md'
						onClick={() => navigate('/profile')}
					>
						{t('profile')}
					</a>
					</li>
					<li>
						<a
							className='rounded-md'
							role='button'
							onClick={() => signout(() => navigate('/'))}
						>
							{t('signOut')}
						</a>
					</li>
				</ul>
			</div>
		</div>
		// <p>
		// 	<button
		// 		className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
		// 		onClick={() => {
		// 			auth.signout(() => navigate('/'));
		// 		}}
		// 	>
		// 		{t('signOut')}
		// 	</button>
		// </p>
	);
}

export default AuthStatus;