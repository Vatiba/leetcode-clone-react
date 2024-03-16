import { useMutation } from "@tanstack/react-query";
import { ChangePasswordParamsDto } from "entities/auth";
import AuthApi from "./AuthApi";

const useChangePassword = () => {
    return useMutation({
        mutationFn: (dto: ChangePasswordParamsDto) => AuthApi.changePassword(dto),
    });
};

export default useChangePassword;