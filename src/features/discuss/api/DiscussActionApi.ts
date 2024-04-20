import { DiscussCreateDto, DiscussCreateResponseDto } from "entities/discuss";
import api from "shared/api";

const DiscussActionApi = {
   createDiscuss: async (dto: DiscussCreateDto): Promise<DiscussCreateResponseDto> => {
      const res = await api.post('comments/', {
         json: {
            ...dto,
         }
      });
      return res.json();
   },
}

export default DiscussActionApi;