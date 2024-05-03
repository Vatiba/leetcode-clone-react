import api from "shared/api";
import ProfileDto from './types/ProfileDto';

const ProfileGetApi = {
   getProfile: async (id: string): Promise<ProfileDto> => {
      const res = await api.get(`users/${id}`);
      return res.json();
   },
}

export default ProfileGetApi;