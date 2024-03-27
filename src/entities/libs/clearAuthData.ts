import { storageKeys } from "entities/constants";
import { LocalStorageWorker } from "shared/libs";

const storageWorker = LocalStorageWorker.getInstance();

const clearAuthData = () => {
   storageWorker.setItem(storageKeys.token, null);
   storageWorker.setItem(storageKeys.user, null);
}

export default clearAuthData;