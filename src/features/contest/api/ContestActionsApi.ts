import api from "shared/api";

const ContestActionsApi = {
   subscribe: async (contestId: number): Promise<void> => {
      const res = await api.post(`contests/${contestId}/subscribe/`);
      return res.json();
   },
}

export default ContestActionsApi;