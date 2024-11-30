import { useQuery } from "@tanstack/react-query";
import { i18n } from "shared/libs";
import TopUsersGetApi from "./TopUsersGetApi";

const useGetLastContestWinners = () => {
    return useQuery({
        queryKey: [
            "lastContestWinners",
            i18n.language,
        ],
        queryFn: () => TopUsersGetApi.getLastContestWinners(),
    });
};

export default useGetLastContestWinners;