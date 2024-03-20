import { Location } from 'entities/locations';
import api from "shared/api";

const LocationGetApi = {
	getLocations: async (): Promise<Location[]> => {
		const res = await api.get('locations/');
		return res.json();
	},
}

export default LocationGetApi;