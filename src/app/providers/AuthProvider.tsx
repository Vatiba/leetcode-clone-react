/* global VoidFunction, JSX */
import { AuthContext } from 'entities/auth';
import { useState, ReactNode } from 'react';

const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false;
		setTimeout(callback, 100); // fake async
	},
};

function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<any>(null);

	const signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	const signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

