import { useContext } from "react";
import AuthContext from "./store";

function useAuth() {
   return useContext(AuthContext);
}

export default useAuth;
