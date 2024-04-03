import { PaginationDto } from 'entities/types';
import api from "shared/api";
import DiscussDto from './types/DiscussDto';
import DiscussListParamsDto from './types/DiscussListParamsDto';

const DiscussGetApi = {
   getComments: async (dto: DiscussListParamsDto): Promise<PaginationDto<DiscussDto[]>> => {
      const res = await api.get('comments/', {
         searchParams: {
            ...dto,
         }
      });
      return res.json();
   },
   getComment: async (id: number): Promise<DiscussDto> => {
      const res = await api.get(`comments/${id}`);
      return res.json();
   },
}

export default DiscussGetApi;