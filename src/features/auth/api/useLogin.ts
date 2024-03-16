import { useMutation } from "@tanstack/react-query";
import { LoginParamsDto } from "entities/auth";
import AuthApi from "./AuthApi";

const useLogin = () => {
    return useMutation({
        mutationFn: (dto: LoginParamsDto) => AuthApi.login(dto),
    });
};

export default useLogin;