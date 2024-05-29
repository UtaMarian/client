import { Navigate } from "react-router-dom";
import {UserContext} from "./UserContext";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
  const { userInfo } = useContext(UserContext);

  if (!(`username` in userInfo)) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};