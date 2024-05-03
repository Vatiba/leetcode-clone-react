import { ProfileUpdateDto } from "entities/profile";
import api from "shared/api";
import { removeEmptyString, removeUndefined } from "shared/libs/helpers";

const ProfileActionApi = {
   updateProfile: async ({
      userId,
      ...others
   }: ProfileUpdateDto): Promise<void> => {
      console.log(removeEmptyString(removeUndefined(others)))
      const res = await api.patch(`users/${userId}/`, {
         json: {
            ...removeEmptyString(removeUndefined(others)),
         }
      });
      return res.json();
   },
}

export default ProfileActionApi;