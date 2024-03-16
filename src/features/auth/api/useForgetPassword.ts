import { useMutation } from "@tanstack/react-query";
import { ForgetPasswordParamsDto } from "entities/auth";
import AuthApi from "./AuthApi";

const useForgetPassword = () => {
    return useMutation({
        mutationFn: (dto: ForgetPasswordParamsDto) => AuthApi.forgetPassword(dto),
    });
};

export default useForgetPassword;