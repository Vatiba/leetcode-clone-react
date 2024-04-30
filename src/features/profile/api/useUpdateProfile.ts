import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProfileUpdateDto } from "entities/profile";
import ProfileActionApi from "./ProfileActionApi";

const useUpdateProfile = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (dto: ProfileUpdateDto) => ProfileActionApi.updateProfile(dto),
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ['user'] });
      }
   });
};

export default useUpdateProfile;