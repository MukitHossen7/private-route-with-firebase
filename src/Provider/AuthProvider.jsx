/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const info = {
    profession: "Programming",
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
