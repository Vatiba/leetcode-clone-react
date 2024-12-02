import api from "shared/api";
import TopUserDto from './types/TopUserDto';

const TopUsersGetApi = {
    getLastContestWinners: async (): Promise<TopUserDto[]> => {
        const res = await api.get(`users/winners`);
        return res.json();
    },
    getTopScoredUsers: async (): Promise<TopUserDto[]> => {
        const res = await api.get(`users/tops`);
        return res.json();
    },
}

export default TopUsersGetApi;