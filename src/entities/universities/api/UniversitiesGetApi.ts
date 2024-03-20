import { University } from "entities/universities";
import api from "shared/api";

const UniversitiesGetApi = {
	getUniversities: async (): Promise<University[]> => {
		const res = await api.get('universities/');
		return res.json();
	},
}

export default UniversitiesGetApi;