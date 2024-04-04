import { storageKeys } from "entities/constants";
import { LocalStorageWorker } from "shared/libs";

const storageWorker = LocalStorageWorker.getInstance();

const clearAuthData = () => {
   storageWorker.setItem(storageKeys.token);
   storageWorker.setItem(storageKeys.user);
}

export default clearAuthData;