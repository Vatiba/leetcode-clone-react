import baseUrl from 'entities/constants/baseUrl';
import ky from 'ky';
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
            (_req, _opt, res) => { }
        ]
    }
});

export default api;