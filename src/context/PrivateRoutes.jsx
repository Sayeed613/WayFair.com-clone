import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { authDetails } = useContext(AuthContext);

  if(!authDetails.isLoggedIn) {
      return <Navigate to="/login"/>
  }
  return children;
}
