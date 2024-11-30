import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import TopUsersGetApi from "./TopUsersGetApi";

const useGetTopScoredUsers = () => {
    return useQuery({
        queryKey: [
            "topScoredUsers",
            i18n.language,
        ],
        queryFn: () => TopUsersGetApi.getTopScoredUsers(),
    });
};

export default useGetTopScoredUsers;