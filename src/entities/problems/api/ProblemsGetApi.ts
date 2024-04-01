import { PaginationDto } from "entities/types";
import api from "shared/api";
import CategoryDto from "./types/CategoryDto";
import Problem from "./types/Problem";
import ProblemsParamsDto from "./types/ProblemsParamsDto";

const ProblemsGetApi = {
   getProblems: async (params: ProblemsParamsDto): Promise<PaginationDto<Problem[]>> => {
      const res = await api.get('problems/', {
         searchParams: {
            ...params,
         }
      });
      return res.json();
   },
   getProblem: async (slug: string): Promise<Problem> => {
      const res = await api.get(`problems/${slug}`);
      return res.json();
   },
   getCategories: async (): Promise<CategoryDto[]> => {
      const res = await api.get(`categories/`);
      return res.json();
   }
}

export default ProblemsGetApi;