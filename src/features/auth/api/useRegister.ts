import { useMutation } from "@tanstack/react-query";
import { RegisterParamsDto } from "entities/auth";
import AuthApi from "./AuthApi";

const useRegister = () => {
    return useMutation({
        mutationFn: (dto: RegisterParamsDto) => AuthApi.register(dto),
    });
};

export default useRegister;