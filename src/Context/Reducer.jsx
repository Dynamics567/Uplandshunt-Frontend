// import React, { useReducer } from "react";

import { useAuthState } from "./Context";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initialState = {
  user: "" || user,
  token: "" || token,
  loading: false,
  isAuthenticated: localStorage.getItem("currentUser") ? true : false,
  errorMessage: null,
  registerSuccess: "",
  registerError: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
        // errorMessage: "",
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        isAuthenticated: false,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_REGISTER":
      return {
        ...initialState,
        loading: true,
        // errorMessage: "",
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        loading: false,
        user: action.payload,
        registerSuccess: action.payload.data,
      };
    case "REGISTER_ERROR":
      console.log(action.error);
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
};
