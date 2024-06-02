import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function ProtectedRoute({ element, requiredRole, ...rest }) {
  const { userInfo } = useContext(UserContext);

  if (!userInfo || !userInfo.role || userInfo.role !== requiredRole) {
    // Redirect user to login page or display unauthorized message
    return <Navigate to="/unauthorized" />;
  }

  return <Route {...rest} element={element} />;
}

export default ProtectedRoute;