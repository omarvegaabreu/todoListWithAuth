import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../util/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //load user
  const loadUser = async () => {
    const userToken = localStorage.token;

    if (userToken) {
      setAuthToken(userToken);
    }

    const res = await axios.get("/api/auth");

    try {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ AUTH_ERROR });
    }
  };

  //register user POST
  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser(); //load active user
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //login user
  const loginUser = (user) => {
    console.log("login user");
  };

  //logout user
  const logOut = (user) => {
    console.log("logout user");
  };

  //clear errors
  const clearError = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,

        loadUser,
        registerUser,
        loginUser,
        logOut,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
