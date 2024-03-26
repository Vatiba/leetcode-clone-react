/* global VoidFunction, JSX */
import { AuthContext } from 'entities/auth';
import { Token, User } from 'entities/types';
import { ReactNode, useState } from 'react';

const storageUser = localStorage.getItem('user');
const storageToken = localStorage.getItem('token');

function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<{ token: Token, user: User } | null>({ token: storageToken, user: storageUser });

	const signin = (newUser: { token: Token, user: User }, callback?: VoidFunction) => {
		setUser(newUser);
		callback?.();
	};

	const signout = (callback?: VoidFunction) => {
		setUser(null);
		callback?.();
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

