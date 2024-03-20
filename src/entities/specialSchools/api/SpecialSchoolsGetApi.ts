import { SpecialSchool } from "entities/specialSchools";
import api from "shared/api";

const SpecialSchoolsGetApi = {
	getSpecialSchools: async (): Promise<SpecialSchool[]> => {
		const res = await api.get('special_schools/');
		return res.json();
	},
}

export default SpecialSchoolsGetApi;