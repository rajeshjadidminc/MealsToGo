import React, { useState, createContext } from "react";

import {
  loginRequest,
  logOut,
  registerRequest,
} from "./authentication.service";
import firebaseAuth from "../firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebaseAuth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      console.log("Rajesh:", usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    // if (Object.keys(email).length === 0) {
    //   setError("Must required the email address");
    // } else if (Object.keys(password).length === 0) {
    //   setError("Must required the password");
    // } else {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        console.log(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
    // }
  };
  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        console.log(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    logOut()
      .then(() => {
        setIsLoading(false);
        setUser(null);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
