/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const profession = "programming";

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createLoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user is " + currentUser);
      setUser(currentUser);
    });
    return () => {
      connection();
    };
  }, []);
  const authInfo = {
    profession,
    user,
    createUser,
    createLoginUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
