import { useQuery } from "@tanstack/react-query";
import { LocationGetApi } from "entities/locations";
import { i18n } from "shared/libs";

const useGetLocations = () => {
	return useQuery({
		queryKey: [
			"locations",
			i18n.language
		],
		queryFn: () => LocationGetApi.getLocations(),
	});
};

export default useGetLocations;