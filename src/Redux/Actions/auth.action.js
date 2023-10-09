import axios from "../../utils/axios";
import { getTokenIncludedConfig } from "./common";
import {
  LOGIN_FAIL,
  PROFILE_FAIL,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PROFILE_SUCCESS,
  REGISTER_SUCCESS,
  AUTHENTICATE_FAIL,
  AUTHENTICATE_SUCCESS,
  RESET_FAIL,
  RESET_SUCCESS,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
} from "./index";

import axiosInstance from "../../utils/axios";

// REGIGSTER ACTION
export const register = (data, setError) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axiosInstance.post("user/signup", body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    setError(error.response.data);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
// LOGIN ACTION
export const login = (data, setError) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("user/login", body);
    if (res && res.data) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } else {
      setError("Login failed. Please check your credentials.");
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data);
    } else {
      setError("An error occurred while logging in.");
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("users/me/", getTokenIncludedConfig());
    dispatch({
      type: PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  try {
    const res = await axios.get("users/verify", getTokenIncludedConfig());
    dispatch({
      type: AUTHENTICATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_FAIL,
    });
  }
};



// FORGOT PASSWORD ACTION
export const reset_password = (email, setError) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post(``, body);
    dispatch({
      type: RESET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    setError(error.response.data);
    dispatch({
      type: RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password, setError) => async (dispatch) => {
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
      const res = await axios.post(``, body);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      setError(error.response.data);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

// LOGOUT ACTION
export const logout = (setRedirect) => (dispatch) => {
  setRedirect(true);
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};