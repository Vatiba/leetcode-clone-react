import { DiscussCreateDto, DiscussCreateResponseDto } from "entities/discuss";
import { DiscussUpdateDto, DiscussVoteDto } from "entities/discuss/api";
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
   },
   updateDiscuss: async ({
      slug,
      content,
      parent,
      problem,
      title
   }: DiscussUpdateDto): Promise<void> => {
      const res = await api.patch(`comments/${slug}/`, {
         json: {
            title,
            content,
            parent,
            problem
         }
      });
      return res.json();
   }
}

export default DiscussActionApi;