import { ActivateParamsDto, ChangePasswordParamsDto, ForgetPasswordParamsDto, LoginParamsDto, RefreshTokenParamsDto, RegisterParamsDto } from "entities/auth";
import { TokenUser } from "entities/types";
import api from "shared/api";

const AuthApi = {
    activateAccount: async (dto: ActivateParamsDto): Promise<TokenUser> => {
        const res = await api.post('authentication/activate/', {
            json: {
                ...dto,
            }
        });
        return res.json();
    },
    refreshToken: async (dto: RefreshTokenParamsDto): Promise<{ access: string }> => {
        const res = await api.post('authentication/token/refresh/', {
            json: {
                ...dto,
            }
        });
        return res.json();
    },
    changePassword: async (dto: ChangePasswordParamsDto) => {
        const res = await api.post('authentication/password/change/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    forgetPassword: async (dto: ForgetPasswordParamsDto) => {
        const res = await api.post('authentication/password/forget/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    register: async (dto: RegisterParamsDto) => {
        const res = await api.post('authentication/register/', {
            json: {
                ...dto
            }
        });
        return res.json();
    },
    login: async (dto: LoginParamsDto): Promise<TokenUser> => {
        const res = await api.post('authentication/token/', {
            json: {
                ...dto
            }
        });
        return res.json();
    }
}

export default AuthApi;