/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
  const loginGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user is " + currentUser);
      setUser(currentUser);
      setLoading(false);
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
    loading,
    loginGoogle,
    loginGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
