import { PaginationDto } from 'entities/types';
import api from "shared/api";
import { removeUndefined } from 'shared/libs/helpers';
import DiscussDto from './types/DiscussDto';
import DiscussListParamsDto from './types/DiscussListParamsDto';

const DiscussGetApi = {
   getComments: async (dto: DiscussListParamsDto): Promise<PaginationDto<DiscussDto[]>> => {
      const res = await api.get('comments/', {
         searchParams: {
            ...removeUndefined(dto),
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