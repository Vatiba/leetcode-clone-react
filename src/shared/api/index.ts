import { storageKeys } from 'entities/constants';
import baseUrl from 'entities/constants/baseUrl';
import clearAuthData from 'entities/libs/clearAuthData';
import { isTokenObj } from 'entities/libs/typeCheckers';
import { Token } from 'entities/types';
import { AuthApi } from 'features/auth';
import ky, { HTTPError } from 'ky';
import { LocalStorageWorker, i18n } from 'shared/libs';

const storageWorker = LocalStorageWorker.getInstance();

const Instance = ky.create({ prefixUrl: baseUrl });

let isRefreshing = false;
const api = Instance.extend({
	headers: {},
	hooks: {
		beforeRequest: [
			(req, _opt) => {
				const storageToken = storageWorker.getItem(storageKeys.token, isTokenObj);
				if (storageToken) {
					const { access, refresh } = storageToken;
					if (req.url.includes("refresh")) {
						req.headers.set("Authorization", `Bearer ${refresh}`);
					} else {
						req.headers.set("Authorization", `Bearer ${access}`);
					}
				}
				if (i18n.language) {
					req.headers.set("Accept-language", i18n.language);
				} else {
					req.headers.set("Accept-language", "tk");
				}
			}
		],
		afterResponse: [
			async (_request, _options, response) => {
				const storageToken = storageWorker.getItem(storageKeys.token, isTokenObj);
				if (response.status === 401) {
					if (storageToken?.refresh) {
						if (!isRefreshing) {
							isRefreshing = true;
							try {
								const res = await AuthApi.refreshToken({
									refresh: storageToken?.refresh
								});

								if (storageToken)
									storageWorker.setItem(storageKeys.token, {
										access: res.access,
										refresh: storageToken.refresh
									} as Token)

								return Instance(_request);
							} catch (error) {
								clearAuthData();
								ky.stop;
								window.location.reload();
								// throw error;
							} finally {
								isRefreshing = false;
							}
						} else {
							await new Promise<void>((resolve) =>
								setTimeout(() => resolve(), 100),
							); // Wait for 100 milliseconds (adjust as needed)
							return Instance(_request);
						}
					} else {
						clearAuthData();
						window.location.reload();
					}
				}
				return response;
			},
		],
		beforeError: [
			async (error) => {
				if (error instanceof HTTPError && error.response.status === 400) {
					const errorText = await error.response.text();
					try {
						const errorData = JSON.parse(errorText); // Assuming the backend sends JSON in the 400 response
						return errorData;
					} catch (parseError) {
						console.error('Failed to parse error response:', errorText);
					}
				}
				return error;
			}
		]
	}
});

export default api;