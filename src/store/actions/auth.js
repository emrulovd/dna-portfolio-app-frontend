import axios from "axios";
import { authActions } from "../slices/auth";

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const login = (authData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/auth/login", authData)
      .then((response) => {
        const expirationTime = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("expirationTime", expirationTime);
        dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(authActions.authenticate({token: response.data.token}));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  return (dispatch) => {
    dispatch(authActions.deauthenticate());
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationTime = new Date(localStorage.getItem("expirationTime"));
      if (expirationTime <= new Date()) {
        dispatch(logout());
      } else {
          dispatch(authActions.authenticate({token: token}))
      }
    }
  };
};
