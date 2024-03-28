/* global VoidFunction, JSX */
import { AuthContext } from 'entities/auth';
import { storageKeys } from 'entities/constants';
import clearAuthData from 'entities/libs/clearAuthData';
import { isTokenObj, isUser } from 'entities/libs/typeCheckers';
import { TokenUser } from 'entities/types';
import { ReactNode, useState } from 'react';
import { LocalStorageWorker } from 'shared/libs';

const storageWorker = LocalStorageWorker.getInstance();

const storageUser = storageWorker.getItem(storageKeys.user, isUser);
const storageToken = storageWorker.getItem(storageKeys.token, isTokenObj);

function AuthProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<TokenUser | null>(storageToken && storageUser ? { token: storageToken, user: storageUser } : null);

	const signin = (tokenUser: TokenUser, callback?: VoidFunction) => {
		setData(tokenUser);
		storageWorker.setItem(storageKeys.token, tokenUser.token);
		storageWorker.setItem(storageKeys.user, tokenUser.user);
		callback?.();
	};

	const signout = (callback?: VoidFunction) => {
		setData(null);
		clearAuthData();
		callback?.();
	};

	const value = { data, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

