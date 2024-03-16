import { ActivateParamsDto, ChangePasswordParamsDto, ForgetPasswordParamsDto, LoginParamsDto, RegisterParamsDto } from "entities/auth";
import api from "shared/api";

const AuthApi = {
    activateAccount: async (dto: ActivateParamsDto) => {
        const res = await api.post('/authentication/activate/', {
            json: {
                ...dto,
            }
        });
        return res.json();
    },
    changePassword: async (dto: ChangePasswordParamsDto) => {
        const res = await api.post('/authentication/password/change/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    forgetPassword: async (dto: ForgetPasswordParamsDto) => {
        const res = await api.post('/authentication/password/forget/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    register: async (dto: RegisterParamsDto) => {
        const res = await api.post('/authentication/register/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    login: async (dto: LoginParamsDto) => {
        const res = await api.post('/authentication/token/', {
            json: {
                ...dto
            }
        });
        return res.json();
    }
}

export default AuthApi;