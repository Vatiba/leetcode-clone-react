import { TokenUser } from "entities/types";
import { createContext } from "react";

interface AuthContextType {
   data: TokenUser | null;
   signin: (token: TokenUser, callback?: VoidFunction) => void;
   signout: (callback?: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;