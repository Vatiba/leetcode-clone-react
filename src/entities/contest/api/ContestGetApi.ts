import { PaginationDto } from 'entities/types';
import api from "shared/api";
import { removeUndefined } from 'shared/libs/helpers';
import ContestDto from './types/ContestDto';
import ContestParamsDto from './types/ContestParamsDto';

const ContestGetApi = {
   getContests: async (dto: ContestParamsDto): Promise<PaginationDto<ContestDto[]>> => {
      const res = await api.get('contests/', {
         searchParams: {
            ...removeUndefined(dto),
         }
      });
      return res.json();
   },
   getContest: async (id: number): Promise<ContestDto> => {
      const res = await api.get(`contests/${id}`);
      return res.json();
   },
}

export default ContestGetApi;