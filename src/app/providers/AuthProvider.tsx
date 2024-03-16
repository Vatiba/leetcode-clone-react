/* global VoidFunction, JSX */
import { AuthContext } from 'entities/auth';
import { ReactNode, useState } from 'react';

function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<any>(null);

	const signin = (newUser: string, callback?: VoidFunction) => {
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

