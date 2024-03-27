import Token from "./Token";
import User from "./User";

type TokenUser = {
   token: Token | null
   user: User | null
}

export default TokenUser;