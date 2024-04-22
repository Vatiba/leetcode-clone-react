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
   voteDiscuss: async (dto: DiscussVoteDto): Promise<void> => {
      const res = await api.post(`comments/${dto.slug}/vote/`, {
         json: {
            comment: dto.comment,
            value: dto.value
         }
      });
      return res.json();
   }
}

export default DiscussActionApi;