import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../model';

type RequireAuthProps = {
   children: JSX.Element;
};

function RequireAuth({ children }: RequireAuthProps) {
   const { data } = useAuth();
   const location = useLocation();

   if (!data?.user) {
      // Redirect to the /login page, but save the current location.
      // This allows us to send user along to that page after they login.
      return <Navigate to="/login?loginType=signIn" state={{ from: location }} replace />;
   }

   return children;
}

export default RequireAuth;