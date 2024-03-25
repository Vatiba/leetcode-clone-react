import baseUrl from 'entities/constants/baseUrl';
import ky, { HTTPError } from 'ky';
import { i18n } from 'shared/libs';

const Instance = ky.create({ prefixUrl: baseUrl });

const api = Instance.extend({
    headers: {},
    hooks: {
        beforeRequest: [
            (req, _opt) => {
                // if (auth && auth.isLoggedIn && auth.token) {
                //     const { accessToken, refreshToken } = auth.token;
                //     if (req.url.includes("refresh")) {
                //         req.headers.set("Authorization", `Bearer ${refreshToken}`);
                //     } else {
                //         req.headers.set("Authorization", `Bearer ${accessToken}`);
                //     }
                // }
                if (i18n.language) {
                    req.headers.set("Accept-language", i18n.language);
                } else {
                    req.headers.set("Accept-language", "tk");
                }
            }
        ],
        afterResponse: [
            async (_req, _opt, res) => {
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