import api from "shared/api";

const ProblemsGetApi = {
   getProblems: async (): Promise<void> => {
      const res = await api.get('problems/');
      return res.json();
   },
   getProblem: async (slug: string): Promise<void> => {
      const res = await api.get(`problems/${slug}`);
      return res.json();
   }
}

export default ProblemsGetApi;