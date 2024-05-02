import { PaginationDto } from "entities/types";
import api from "shared/api";
import LinkDto from "./types/LinkDto";
import ProfileDto from './types/ProfileDto';

const ProfileGetApi = {
   getProfile: async (id: string): Promise<ProfileDto> => {
      const res = await api.get(`users/${id}`);
      return res.json();
   },
   getLinks: async (): Promise<PaginationDto<LinkDto[]>> => {
      const res = await api.get(`users/links`);
      return res.json();
   }
}

export default ProfileGetApi;