import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    id: null,
  });

  const login = (id) => {
    setAuthDetails({
      isLoggedIn: true,
      id: id,
    });
  };

  const logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      id: null,
    });

  };

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
