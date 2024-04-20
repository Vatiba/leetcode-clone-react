import { ActivateParamsDto } from "entities/auth";
import { DiscussCreateDto } from "entities/discuss";
import { TokenUser } from "entities/types";
import api from "shared/api";

const DiscussActionApi = {
   activateAccount: async (dto: DiscussCreateDto): Promise<TokenUser> => {
      const res = await api.post('authentication/activate/', {
         json: {
            ...dto,
         }
      });
      return res.json();
   },
}

export default DiscussActionApi;