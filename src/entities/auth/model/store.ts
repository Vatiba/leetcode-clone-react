import { Token, User } from "entities/types";
import { createContext } from "react";

interface AuthContextType {
   user: any;
   signin: (user: { token: Token, user: User }, callback?: VoidFunction) => void;
   signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;