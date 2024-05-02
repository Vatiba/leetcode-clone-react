import { LinksUpdateDto, ProfileUpdateDto } from "entities/profile";
import api from "shared/api";
import { removeUndefined } from "shared/libs/helpers";

const ProfileActionApi = {
   updateProfile: async ({
      userId,
      ...others
   }: ProfileUpdateDto): Promise<void> => {
      const res = await api.patch(`users/${userId}/`, {
         json: {
            ...removeUndefined(others),
         }
      });
      return res.json();
   },
   updateLink: async ({
      type,
      url
   }: LinksUpdateDto): Promise<void> => {
      const res = await api.patch(`users/links/`, {
         json: {
            type,
            url
         }
      });
      return res.json();
   }
}

export default ProfileActionApi;