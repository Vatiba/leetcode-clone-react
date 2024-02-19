import React from 'react';
import { NavItem } from 'widgets/navbar';
import { useAuth } from '../model';
import { useNavigate } from 'react-router-dom';

function AuthStatus() {
	const auth = useAuth();
	const navigate = useNavigate();

	if (!auth.user) {
		return <NavItem href="/login">Sign in</NavItem>;
	}

	return (
		<p>
			Welcome {auth.user}!{' '}
			<button
				className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
				onClick={() => {
					auth.signout(() => navigate('/'));
				}}
			>
				Sign out
			</button>
		</p>
	);
}

export default AuthStatus;