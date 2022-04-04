import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "./auth.reducer";
import { auth } from "../firebase/configFirebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch({
        type: "LOGIN",
        payload: currentUser,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
