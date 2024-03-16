import baseUrl from 'entities/constants/baseUrl';
import ky from 'ky';

const Instance = ky.create({ prefixUrl: baseUrl });

const api = Instance.extend({
    headers: {},
    hooks: {
        beforeRequest: [
            (req, _opt) => { }
        ],
        afterResponse: [
            (_req, _opt, res) => { }
        ]
    }
});

export default api;