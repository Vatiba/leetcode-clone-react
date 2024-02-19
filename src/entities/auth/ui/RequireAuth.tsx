import React from 'react';
import { useAuth } from '../model';
import { Navigate, useLocation } from 'react-router-dom';

type RequireAuthProps = {
   children: JSX.Element;
};

function RequireAuth({ children }: RequireAuthProps) {
   const auth = useAuth();
   const location = useLocation();

   if (!auth.user) {
      // Redirect to the /login page, but save the current location.
      // This allows us to send user along to that page after they login.
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   return children;
}

export default RequireAuth;