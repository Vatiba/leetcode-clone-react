import { useMutation } from "@tanstack/react-query";
import { ActivateParamsDto } from "entities/auth";
import AuthApi from "./AuthApi";

const useActivateAccount = () => {
	return useMutation({
		mutationFn: (dto: ActivateParamsDto) => AuthApi.activateAccount(dto),
	});
};

export default useActivateAccount;